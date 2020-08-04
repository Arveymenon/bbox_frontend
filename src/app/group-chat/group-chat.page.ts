import { Component, OnInit , ViewChild, ChangeDetectorRef, ChangeDetectionStrategy, ViewChildren, QueryList, ElementRef  } from '@angular/core';
import { FormGroup, FormBuilder, Validators , NgForm} from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { NavController, IonContent, ActionSheetController, LoadingController, ToastController, ModalController, Platform } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';

import { GroupService } from '../shared/group.service';
import { Group } from '../shared/group.model';
import { DomSanitizer } from '@angular/platform-browser';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { HttpClient } from '@angular/common/http';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

import { Socket } from 'ngx-socket-io';
import { GroupDetailsPage } from '../group-details/group-details.page';
// import { LongPressModule } from 'ngx-long-press';
// import { LongPressModule } from 'ionic-long-press';
import { NgxLinkifyjsService, Link, LinkType, NgxLinkifyOptions } from 'ngx-linkifyjs';
import { AlertController } from '@ionic/angular';
import { HelperService } from '../services/helper.service';
import { Location } from '@angular/common';
import { ContactsService } from '../services/contacts.service';
import { Contacts, ContactName, ContactField } from '@ionic-native/contacts/ngx';
import { Clipboard } from '@ionic-native/clipboard/ngx';

const STORAGE_KEY = 'my_files';

@Component({
  selector: 'app-group-chat',
  templateUrl: './group-chat.page.html',
  styleUrls: ['./group-chat.page.scss'],
  providers: [GroupService, HelperService],
})
export class GroupChatPage implements OnInit {

  longpress : any = false;
  // longpressclass = ["message-bubble-received-flex"];
  lang: String = 'EN';
  chat_room: any;
  groupform: FormGroup;
  imageURIs: any;
  printURIs: any;
  type: number;
  id: any;
  sub: any;
  idval: String = "";
  adminidval: String = "";  // User ID
  images = [];
  adminname: String="";
  allMessages: any;
  messageDateString: any;
  docs: any = [];
  uploading: Boolean = false;
  loadingChats = true;
  isAdmin: Boolean = false;
  ANDROID_PERMISSIONS = [
    'android.permission.READ_EXTERNAL_STORAGE',
    'android.permission.WRITE_EXTERNAL_STORAGE',
  ];
  currentFileType: String;
  
  temp_name: any;
  data: any;
  filtered_users =[];
  members: any;
  filtered: Boolean = false;
  img_src: any;
  showBlock: Boolean = false;
  fileArray: any = [];
  fileSourceArray: any = [];
  mobile: any;
  savedContact = true;
  group_admin_id: any;
  

  constructor(
    private formBuilder: FormBuilder,
    public groupService: GroupService,
    private storage: Storage,
    private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer, 
    private file: File, 
    private actionSheetCtrl: ActionSheetController, 
    private transfer: FileTransfer,
    private loadingCtrl: LoadingController, 
    private imagePicker: ImagePicker, 
    public navCtrl: NavController, 
    // public navParams: NavParams,
    public toastCtrl: ToastController,
    private camera: Camera, 
    public modalCtrl: ModalController, 
    private webview: WebView,
    private platform: Platform,
    private filePath: FilePath,
    private ref: ChangeDetectorRef,
    private fileChooser: FileChooser,
    private http: HttpClient,
    private androidPermissions: AndroidPermissions,
    private socket: Socket,
    public modalController: ModalController,
    private translate: TranslateService,
    public alertController: AlertController,
    public helper: HelperService,
    private location: Location,
    private contactsService: ContactsService,
    public linkifyService: NgxLinkifyjsService,
    private contacts: Contacts,
    private actionSheetController: ActionSheetController,
    private clipboard: Clipboard
  ) {
    
    this.storage.get('language')
      .then(lang => {
        if (lang) {
          this.lang = lang;
        }
      })
    this.storage.get('mobile')
      .then(mobile => {
        if (mobile) {
          this.mobile = mobile;
        }
      })
    if(this.filtered == false){
      console.log('Group-Chat-Page');
      this.sub = this.route.params.subscribe(params => {

          this.id = params['id'];
        // alert(this.id);
      });

      this.storage.get('id').then((val) => {
        this.adminidval
          = val;
        // console.log(this.adminidval);
        this.chat_room = this.id
        this.socket.connect();
        // console.log(this.chat_room);
        this.temp_name = this.adminidval;

        // console.log(name)
        this.socket.emit('set-name', this.temp_name);
        
        this.chatData();
        this.socket.fromEvent('message-' + this.chat_room).subscribe((message: any) => {
          // console.log('MESSAGE', message);
          this.chatData();
          var read_all = {
            id: this.id,
            user_id: this.adminidval
          }
          this.groupService.putChatReadAll(read_all)
          .subscribe(read => {
            // console.log("READ", read);
          });
          return true;
        });
        var read_all = {
          id: this.id,
          user_id: this.adminidval
        }
        // console.log(read_all);
        this.groupService.putChatReadAll(read_all)
          .subscribe(read => {
            // console.log("READ", read);
          })
      });

      this.storage.get('name').then((val2) => {
        this.adminname
        = val2;
      // console.log('id', val2);
      });
      
        
      this.groupform = this.formBuilder.group({
        message: ['',[Validators.pattern(/^\S*$/)]],
        adminid:['',[Validators.required]],
        adminname:['',[Validators.required]],
      
      });

      
    }
  }


  @ViewChild(IonContent, { static: false }) contentArea: IonContent;
  @ViewChildren("messageContainer") messageContainers: QueryList<ElementRef>;
  @ViewChild('window', { static: false }) window;
  
  ngOnInit() {
    
      
  }

  ngAfterViewInit() {
    this.scrollToBottom(); // For messsages already present
    this.messageContainers.changes.subscribe((list: QueryList<ElementRef>) => {
      this.scrollToBottom(); // For messages added later
    });
  }

  scrollToBottom() {
    try {
      console.log('scrollToBottom called');
      this.window.nativeElement.top = this.window.nativeElement.scrollHeight;
    } catch (err) {
      console.log('SCROLL ERROR',err)
    }
  }

  noSpaceValidator(){
    console.log(this.groupform.value.message);
    if(this.groupform.value.message.trim() == 0 ){
      return false;
      console.log("false")
    }
    else{
      return true;
      console.log("true")
    }
  }

  onSubmit() {

    
      console.log(this.images)
      console.log(this.images.length)
      if((!this.platform.is('ios') && !this.platform.is('android')) && (this.images.length || this.docs.length)) {
          this.uploading = true;
          let formData:FormData = new FormData();
          console.log(this.images, this.docs);
          if (this.images.length) {
            let new_name = this.createFileName(this.images[0].name);
            formData.append('image', this.images[0].filePath, new_name);
            this.uploadFileData(formData, new_name);
          } else {
            let new_name = this.createFileName(this.docs[0].name);
            formData.append('image', this.docs[0].filePath, new_name);
            this.uploadFileData(formData, new_name);
          }
      } else {
          console.log(this.groupform.value);
          if(this.groupform.value.message && !this.docs.length && !this.images.length){
            if(this.noSpaceValidator() == true){
              let file_message = this.groupform.value;
              file_message.messageBy = this.adminidval;
              this.findOthers()
                .then(val => {
                  console.log(val)
                  file_message.messageFor = val;
                  console.log('OTHERS', file_message);
                  this.cleanUpload(file_message);
                })
            }else{
                alert("Only spaces not allowed");
            }
          }
          if(this.platform.is('ios') || this.platform.is('android')){
            this.startUpload();
          }
        }

    // }
    // else{
    // }
    
  }

  longPress(itt){
    console.log("I AM LONG PRESSED")
    this.longpress = true;
    // this.longpressclass[itt] = "message-bubble-received-flex-longpress";
    console.log(this.longpress[itt])
    this.reportAlert(itt);
    
  }

  async reportAlert(itt) {
    let value = this.translate.instant(['Report_Message','Report_confirm','cancel','Report'], { value: this.lang });
    const alert = await this.alertController.create({
      header: value.Report_Message,
      message: value.Report_confirm,
      buttons: [
        {
          text: value.cancel,
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel: blah');
            // this.longpressclass[itt] = "message-bubble-received-flex";
          }
        }, {
          text: value.Report,
          role: 'okay',
          handler: () => {
            console.log('Confirm Okay');
            // this.longpressclass[itt] = "message-bubble-received-flex-reported";
            this.presentToast("This_feed_has_been_reported");
          }
        }
      ]
    });

    await alert.present();
    alert.onDidDismiss().then(
      (res:any)=>{
        console.log(res);
        if(res.role == 'cancel'){
          // this.longpressclass[itt] = "message-bubble-received-flex"
        }
        if(res.role == 'okay'){
          // this.longpressclass[itt] = "message-bubble-received-flex-reported"
        }
        
      }
    )
  }

  async deleteAlert(id) {
    let value = this.translate.instant(['Delete_Message','Delete_confirm','cancel','Delete'], { value: this.lang });
    const alert = await this.alertController.create({
      header: value.Delete_Message,
      message: value.Delete_confirm,
      buttons: [
        {
          text: value.cancel,
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel: blah');
            // this.longpressclass[itt] = "message-bubble-received-flex";
          }
        }, {
          text: value.Delete,
          role: 'okay',
          handler: () => {
            console.log('Confirm Okay');
            this.deleteChat(id)
            .then(res => {
              this.presentToast("The chat has been deleted");
              this.chatData();
            })
            .catch(err => {console.log(err)});
          }
        }
      ]
    });

    await alert.present();
  }

  deleteChat(id){
    return new Promise((resolve, reject) => {
      var body = { id: this.id, chat_id: id }
      this.groupService.deleteChat(body).subscribe(
        deleted => { resolve(true); },
        err => { reject(err) }
      );
    });
  }

  

  chatData(){
    console.log("CHAT DATA CALLED")
    this.groupService.getChat(this.id).subscribe((result) => {
      var res: any = result;
      console.log('RES',res);
      if (res.memberData.length == 2) {
        var name = this.contactsService.getContactName(res.memberData.find(o=>o._id != this.adminidval)._id);
        // this.groupService.selectedGroup = name ? name : res.memberData.find(o=>o._id != this.adminidval).mobile;
        console.log(name);
        if (name) {
          this.groupService.selectedGroup = name;
        } else {
          this.groupService.selectedGroup = res.memberData.find( o => o._id != this.adminidval).mobile;
          this.savedContact = false;
        }
      } else {
        this.groupService.selectedGroup = res['name'];
      }
      this.idval = res['_id'];
      this.groupService.groups = res['chats'];
      this.data = res;
      this.helper.getChatstatus(res['chats'], res.members)
        .then(status => {
          console.log('STATUS', status)
          if(status){
            this.showBlock = true;
          }
        })
      this.findAdmin().then((res: any) => {
        console.log(res);
        this.group_admin_id = res[0].memberid;
        console.log(this.group_admin_id)
        console.log(this.adminidval)
      })
      if(res['chats'].length){
        console.log('CHAT GROUPS', this.groupService.groups);
        res.members.length == 2 ? this.getImagePath(res.memberData) : this.img_src = res.avatar;
        this.checkSources(res['chats'])
        this.members = res.memberData;
        this.ref.detectChanges();
        this.contentArea.scrollToBottom();
        this.loadingChats = false
      }
      else {
        this.loadingChats = false;
      }
    });
  }

  getImagePath(members){
    let other_member = members.find(element=>{
      if(element._id != this.adminidval){
        console.log('milla');
        console.log(element)
        this.img_src = element.avatar
        console.log(this.img_src)
      }
    })
    console.log(other_member);
  }

  addmember(val){
    this.router.navigate(['home/tabs/tab1/creategroup/addmember/'+ val]);
  }

  checkAdmin(){
    return new Promise((resolve, reject) => {
      var result = this.data.members.filter(m => m.memberid == this.adminidval)
      console.log('RESULT', result);
      resolve(result);
    });
  }

  findAdmin(){
    return new Promise((resolve, reject) => {
      var result = this.data.members.filter(m => m.admin == true)
      resolve(result);
    });
  }

  findOthers(){
    return new Promise((resolve, reject) => {
      let a = this.data.members;
      let b = []
      a.splice(a.findIndex(e => e.memberid == this.adminidval),1);
      a.forEach(element => {
        b.push(element.memberid);
      });
      // var result = this.data.members.filter(m => m.admin == true)
      resolve(b);
    });
  }

  reset(){
    
    this.groupform.controls['message'].reset();
  }

  sharedvalue() {
    
  }

  isDifferentDay(messageIndex: number): boolean {
    if (messageIndex === 0) return true;

    const d1 = new Date(this.allMessages[messageIndex - 1].timeStamp);
    const d2 = new Date(this.allMessages[messageIndex].timeStamp);

    return (
      d1.getFullYear() !== d2.getFullYear() ||
      d1.getMonth() !== d2.getMonth() ||
      d1.getDate() !== d2.getDate()
    );
  }

  goToVideoChatPage(){
    console.log('Navigating to Video Chat Page')
    console.log(this.chat_room)
    if(this.data.members.length == 2){
      var body = {
        members: [this.data.memberData.find(o=>o._id != this.adminidval)._id],
        group_data: this.data,
        group_name: this.data.name,
        type: 'video'
      }
      console.log('BODY', body);
      this.groupService.postVideoCall(body)
      .subscribe(data => {
        this.router.navigate(['video-chat/' + this.chat_room]);
      })
    }
    else {
      var extra: NavigationExtras = {
        queryParams: {
          special: JSON.stringify({
            room_id: this.chat_room,
            video: 1
          })
        }
      }
      this.router.navigate(['create-video-chat'], extra);
    }
  }

  goToAudioCallPage(){
    if(this.data.members.length == 2){
      var body = {
        members: [this.data.memberData.find(o=>o._id != this.adminidval)._id],
        group_data: this.data,
        group_name: this.data.name,
        type: 'audio'
      }
      console.log('BODY', body);
      this.groupService.postVideoCall(body)
      .subscribe(data => {
        this.router.navigate(['audio-call/' + this.chat_room]);
      })
    }
    else {
      var extra: NavigationExtras = {
        queryParams: {
          special: JSON.stringify({
            room_id: this.chat_room,
            video: 0
          })
        }
      }
      this.router.navigate(['create-video-chat'], extra);
    }
  }

  /* ONLINE FIX */
 
  async presentToast(text) {
    
    this.storage.get('language').then((language: any)=>{
      console.log(language)
      
      this.translate.get(text,{value: language})
      .subscribe(async (res: any)=>{

        const toast = await this.toastCtrl.create({
          message: res,
          duration: 3000,
          position: "bottom",
        });
        toast.present();
        this.ref.detectChanges();
      });
    })
    // const toast = await this.toastCtrl.create({
    //     message: text,
    //     position: 'bottom',
    //     duration: 3000
    // });
    // await toast.present();
  }

  async selectImage() {
    if(!this.platform.is('ios') && !this.platform.is('android')){
      document.getElementById('image').click();
    }
    else {
      this.helper.selectImage()
        .then((imgResponse: any) => {
          console.log('IMAGE RESPONSE', imgResponse);
          this.images = imgResponse.images;
          this.docs = imgResponse.docs
          this.currentFileType = 'image';
          console.log(this.images);
        })
    }
  }

  selectVideoFromGallery() {
    if(!this.platform.is('ios') && !this.platform.is('android')){
      document.getElementById('video').click();
    }
    else {
      this.helper.selectVideoFromGallery()
        .then((videoResponse: any) => {
          console.log('VIDEO RESPONSE', videoResponse);
          this.images = videoResponse.images;
          this.docs = videoResponse.docs;
          this.currentFileType = 'video'; 
        })

    }
  }

//   async selectImage() {
//     if(!this.platform.is('ios') && !this.platform.is('android')){
//       console.log('desktop')
//       document.getElementById('image').click();
//     }
//     else{
//       const actionSheet = await this.actionSheetCtrl.create({
//           header: "Select Image source",
//           buttons: [{
//                   text: 'Load from Library',
//                   icon: 'ios-grid',
//                   handler: () => {
//                       this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
//                   }
//               },
//               {
//                   text: 'Use Camera',
//                   icon: 'camera',
//                   handler: () => {
//                       this.takePicture(this.camera.PictureSourceType.CAMERA);
//                   }
//               },
//               {
//                   icon: 'close',
//                   text: 'Cancel',
//                   role: 'cancel'
//               }
//           ]
//       });
//       await actionSheet.present();
//     }
//   }
  
//   takePicture(sourceType: PictureSourceType) {
//     var options: CameraOptions = {
//         quality: 65,
//         sourceType: sourceType,
//         saveToPhotoAlbum: false,
//         correctOrientation: true
//     };

//     this.camera.getPicture(options).then(imagePath => {
//         this.startProcess(imagePath, 'image', sourceType);
//     });
//   }

// selectVideoFromGallery() {
//   if(!this.platform.is('ios') && !this.platform.is('android')){
//     console.log('desktop')
//     document.getElementById('video').click();
//   }
//   else {
//     const options: CameraOptions = {
//       quality: 65,
//       destinationType: this.camera.DestinationType.FILE_URI,
//       mediaType: this.camera.MediaType.VIDEO,
//       sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
//     }
  
//     this.camera.getPicture(options).then(imagePath => {
//       this.startProcess(imagePath, 'video', this.camera.PictureSourceType.PHOTOLIBRARY);    
//     });                  
//   }
// }

// startProcess(file, type, sourceType){
//   this.docs = [];
//   this.images = [];
//   console.log("PROCESS STARTED");
//   this.currentFileType = type;
//   if ((this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) || (this.platform.is('android') && type == 'doc')) {
//         console.log("FILE: ", file)
//         let path = file.toString();
//         if(type != 'doc'){
//           file = path.indexOf('file://') > -1 ? file : 'file://' + file.toString() ;
//         }
//         this.filePath.resolveNativePath(file)
//             .then(filePath => {
//                 console.log("FILE PATH", filePath);
//                 let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
//                 let currentName = new String();
//                 if(type === 'image'){
//                   currentName = file.substring(file.lastIndexOf('/') + 1, file.lastIndexOf('?'));
//                 }
//                 else {
//                   currentName = filePath.substring(filePath.lastIndexOf('/') + 1);
//                 }
//                 this.copyFileToLocalDir(correctPath, currentName, this.createFileName(filePath.substring(filePath.lastIndexOf('/') + 1)));
//             }); 
//     } else {
//         var currentName = file.substr(file.lastIndexOf('/') + 1);
//         var correctPath = file.substr(0, file.lastIndexOf('/') + 1);
//         this.copyFileToLocalDir(correctPath, currentName, this.createFileName(file.lastIndexOf('/') + 1));
//     }
// }

  createFileName(fileName) {
    let ext = this.getFileExtension(fileName)
    console.log("EXT", ext);
    var d = new Date(),
        n = d.getTime(),
        newFileName = n + '.' + ext;
    console.log("FILE NAME", fileName)
    return newFileName;
  }

//   copyFileToLocalDir(namePath, currentName, newFileName) {
//     this.checkPermissions().then(() => {
//       this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
//         this.updateStoredFiles(newFileName, currentName);
//       }, error => {
//           console.log("COULD NOT STORE FILE", error)
//           // let value = this.translate.instant(['Error_while_storing_file'], { value: this.lang })
//           this.presentToast("Error_while_storing_file");
//       });
//     })
//   }

//   updateStoredFiles(name, oldName) {
//     this.storage.get(STORAGE_KEY).then(files => {
//         let arr = JSON.parse(files);
//         if (!arr) {
//             let newFiles = [name];
//             this.storage.set(STORAGE_KEY, JSON.stringify(newFiles));
//         } else {
//             arr.push(name);
//             this.storage.set(STORAGE_KEY, JSON.stringify(arr));
//         }

        
//         let filePath = this.file.dataDirectory + name;
//         //IF NOT DOC
//         if(this.currentFileType != 'doc'){
//           let resPath = this.pathForImage(filePath);

//           let newEntry = {
//               name: name,
//               path: resPath,
//               filePath: filePath,
//               displayName: oldName
//           };

//           this.images = [newEntry, ...this.images];
//           this.ref.detectChanges(); // trigger change detection cycle
//           console.log("NEW IMGS", this.images)
//         }
//         //IF DOC
//         else {
//           let newEntry = {
//             name: name,
//             filePath: filePath
//           };

//           this.docs = [newEntry, ...this.docs];
//           console.log("NEW DOCS", this.docs)
//         }
//     });
//   }

  pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      let converted = this.webview.convertFileSrc(img);
      return converted;
    }
  }

  deleteFile(fileEntry, position) {
    this.images.splice(position, 1);

    this.storage.get(STORAGE_KEY).then(images => {
        const arr = JSON.parse(images);
        const filtered = arr.filter(name => name != fileEntry.name);
        this.storage.set(STORAGE_KEY, JSON.stringify(filtered));

        // tslint:disable-next-line: prefer-const
        let correctPath = fileEntry.filePath.substr(0, fileEntry.filePath.lastIndexOf('/') + 1);

        this.file.removeFile(correctPath, fileEntry.name).then(res => {
          // let value = this.translate.instant(['File_removed'], { value: this.lang })
            this.presentToast("File_removed");
        });
    });
  }

  startUpload() {
    this.uploading = true;
    console.log(this.uploading);
    console.log('STARTED UPLOAD');
    if(this.images){
      this.images.forEach(imgEntry => {
        this.getFileFromLocal(imgEntry.filePath)
      });  
    }
    if(this.docs){
      this.docs.forEach(docEntry => {
          this.getFileFromLocal(docEntry.filePath)
        });
    }
  }

  getFileFromLocal(entry){
    this.file.resolveLocalFilesystemUrl(entry)
          .then(entry => {
              ( < FileEntry > entry).file(file => this.readFile(file))
          })
          .catch(err => {
            // let value = this.translate.instant(['Error_while_reading_file'], { value: this.lang })
              this.presentToast("Error_while_reading_file");
          });
  }

  readFile(file: any) {
    console.log("FILE TYPE",file.type);
    const reader = new FileReader();
    reader.onloadend = () => {
        const formData = new FormData();
        const fileBlob = new Blob([reader.result], {
            type: file.type
        });
        formData.append('image', fileBlob, file.name);
        this.uploadFileData(formData, file.name);
    };
    reader.readAsArrayBuffer(file);
  }

  async uploadFileData(formData: FormData, name) {
    const uploadCall = this.http.post("http://198.12.92.202:5000/upload/single-file", formData)
        .subscribe((res) => {
              console.log(res)
              console.log(res['error'])
              if (res['error']) {
                // let value = this.translate.instant(['File_upload_failed'], { value: this.lang })
                  this.presentToast("File_upload_failed");
              } else {
                // let value = this.translate.instant(['File_upload_success'], { value: this.lang })
                  this.presentToast("File_upload_success");
                  console.log("SUCCESS IS WORKING")

                  let file_message = this.groupform.value;
                  file_message.messageBy = this.adminidval;
                  file_message.attachment = name
                  file_message.file = true
                  file_message.fileType = this.currentFileType;
                  this.findOthers()
                  .then(val => {
                    console.log(val)
                    file_message.messageFor = val;
                    console.log('OTHERS', file_message);
                    this.cleanUpload(file_message)
                  })
              }
            },err => {
              console.log("UPLOAD FAILED", err)
              this.uploading = false;
              this.images = [];
              this.docs = [];
            })
  }

  cleanUpload(file_message){
    console.log("FILE MESSAGE", file_message);
    this.groupService.putChat(file_message, this.id).subscribe((res) => {
      this.uploading = false;
      this.images = [];
      this.docs = [];
      console.log('EMITTING');
      var socket_data = {
        text: file_message.message,
        room: this.chat_room,
        sent_from: this.temp_name,
        user_id: this.adminidval,
        mobile: this.mobile,
        type: 1, // 1-> text,
        messageFor: file_message.messageFor
      }
      console.log('Socket Data', socket_data);
      this.socket.emit('send-message', socket_data);
      this.ref.detectChanges();
      this.reset();
      this.chatData();
      this.currentFileType = new String();
      if(file_message.file == true && file_message.message.length){
        delete file_message["attachment"];
        delete file_message["fileType"];
        delete file_message["file"];
        this.cleanUpload(file_message);
      }
    });
  }

  getExt(entry) {
    var file = entry.path.toString();
    var splits = file.split('.');
    var ext = splits[(splits.length - 1)];
    var isnum = /^\d+$/.test(ext);
    if (ext == 'jpg' || ext == 'jpeg' || ext == 'png' || ext == 'gif' || ext == '' || isnum == true || file.includes('data:image')) {
      return 'image';
    }
    else if(ext == 'doc' || ext == 'docs' || ext == 'docx' || ext == 'pdf' || ext == 'txt' || ext == 'xlsx'){
      return 'doc';
    }else{
      return 'video';
    }
  }

  getFileExtension(entry){
    var file = entry.toString();
    var splits = file.split('.');
    var ext = splits[(splits.length - 1)];
    // console.log(ext)
    return ext;
  }


  // async selectAFile() {
  //   if(!this.platform.is('ios') && !this.platform.is('android')){
  //     console.log('desktop')
  //     document.getElementById('file').click();
  //   }
  //   else{
  //     this.fileChooser.open({ "mime": "application/pdf,application/msword" }).then(fileURI => {
  //       this.startProcess(fileURI, 'doc', null);
  //     });
  //   }
  // }

  async selectAFile() {
    // console.log('Select File')
    if (!this.platform.is('ios') && !this.platform.is('android')) {
          console.log('desktop');
          document.getElementById('file').click();
      } else {
        this.helper.selectAFile()
            .then((fileResponse: any) => {
              console.log('File RESPONSE', fileResponse);
              this.images = fileResponse.images;
              this.docs = fileResponse.docs;
              this.currentFileType = 'doc';
              this.ref.detectChanges();
            });
        }
  }

  deleteDoc(pos){
    this.docs.splice(pos, 1);
  }

  public checkPermissions(): Promise<any> {
        console.log('Requesting Android Permissions');
        return new Promise((resolve, reject) => {
            this.androidPermissions.requestPermissions(this.ANDROID_PERMISSIONS)
                .then(() => {
                  const promisesArray: Promise<any> [] = [];
                  this.ANDROID_PERMISSIONS.forEach((permission) => {
                    console.log('Checking ', permission);
                    promisesArray.push(this.androidPermissions.checkPermission(permission));
                  });
                  Promise.all(promisesArray).then((responses) => {
                    let allHasPermissions = true;
                    responses.forEach((response, i) => {
                        allHasPermissions =  response.hasPermission;
                        if (!allHasPermissions) {
                          reject(
                            new Error(
                              'Permissions denied: ' + this.ANDROID_PERMISSIONS[i]
                            ));
                        }
                    });
                    resolve();
                  }).catch((err) => { console.log(err); });
                })
                .catch((err) => console.error('Error requesting permissions: ', err));
        });
    }

  viewImage(src){
    console.log('viewImage', src);
    this.router.navigate(['view-image', src])
  }

  viewVideo(src){
    console.log('viewVideo', src);
    this.router.navigate(['view-video', src]);
  }

  findMatch = (memberid, messageFor) => {
    let found = JSON.stringify(messageFor).includes(`"memberid":"${memberid}"`);
    // console.log('HAI', found);
    return found ? found : false;
  }

  findMemberName(id) {
    var member = this.members.filter(m => m._id == id);
    return member.length ? member[0].name : '';
  }

  findMemberAvatar(id) {
    var member = this.members.filter(m => m._id == id);
    return (member.length && member[0].avatar) ? 'http://198.12.92.202/public/uploads/' + member[0].avatar : '';
  }

    async detailsPage() {
      if(this.data.members.length != 2){
        this.filtered = false;
        const modal = await this.modalController.create({
            component: GroupDetailsPage,
            componentProps: {
              'group_id': this.id
            }
          });
          
        modal.onWillDismiss().then((data: any) => {
            if (data.data && data.data.members) {
              console.log('MEMBERS',data.data.members)
              this.filtered_users = data.data.members
              this.filtered = true;
              console.log(this.filtered);
              this.ref.detectChanges();
            } 
          });
        return await modal.present();
      }else{
        console.log('only 2 members')
      }
          
    }


    // TO BE TESTED
    getFileFromBrowser(event: Event, type) {
      this.images = [];
      console.log(event);
      console.log(event.target['files'][0]);
      let fileList: FileList = event.target['files'];
  
      if(fileList.length > 0) {
          var file = fileList[0];
      }
  
      const reader = new FileReader();
      reader.onload = e => {
        const newEntry = {
          name: file.name,
          path: reader.result,
          filePath: file,
          displayName: file.name,
          type: type
        };
        console.log(newEntry);
        if (type != 'doc') {
          this.images = [newEntry, ...this.images];
          this.currentFileType = type;
        } else if (type == 'doc') {
          this.docs = [newEntry, ...this.docs];
          this.currentFileType = type;
        }
      };
  
      reader.readAsDataURL(file);
    }

    acceptGroup(){
      this.helper.acceptGroup(this.idval)
        .then(accepted => {
          if(accepted)
            // this.chatData();
            this.showBlock = false;
          this.ref.detectChanges();
        })
        .catch(err => console.log('ACCEPT ERROR', err));
    }

    rejectGroup(){
      this.helper.rejectGroup(this.idval)
        .then(removed => {
          if(removed)
            this.router.navigate(['home/tabs/tab1']);
          this.ref.detectChanges();
        })
        .catch(err => console.log('REJECT ERROR', err))
    }

    checkSources(chats){
      console.log(chats);
      if(chats.length){
        var files = chats.filter(chat => chat.file == true);
        files.forEach((file, index) => {
          this.helper.checkFileExists(file.attachment)
            .then(exists => {
              this.fileArray[file._id] = exists;
              this.getSource(exists, file.attachment)
                .then(source => {
                  console.log('SOURCE', source);
                  this.fileSourceArray[file._id] = source
                  if(index == (files.length - 1)){
                    console.log('FILE ARRAY', this.fileArray)
                    console.log('FILE ARRAY FILE', this.fileSourceArray);
                    this.ref.detectChanges();
                  };
                })
            })
        });
        // var other_chats = chats.filter(chat => (chat.messageBy && (chat.messageBy._id != this.adminidval)));
        chats.forEach((element, index) => {
          if(typeof element.messageBy != 'undefined' && (element.messageBy._id != this.adminidval)){
            var name = this.contactsService.getContactName(element.messageBy._id);
            console.log(name);
            this.groupService.groups[index].messageBy.name = name ? name : element.messageBy.mobile;
          }
          if(element.message){
            const linkifyoptions: NgxLinkifyOptions =
            {
              events: {
                click: function (e) {
                  alert('Link clicked!');
                  console.log('CLICKED');
                  console.log(e);
                },
                mouseover: function (e) {
                  alert('Link hovered!');
                }
              },
              target : {
                url : '_system'
              }
            };
            element.message = this.linkifyService.linkify(element.message, linkifyoptions)
          }
        });
      }
    }

    openFile(file, id) {
      console.log(file);
      console.log(id);
      if (this.platform.is('android') ||  this.platform.is('ios')) {
        this.helper.openFile(file)
          .then(done => { console.log(done) })
          .catch(err => { console.log(err) });
      } else {
        console.log('open in browser');
        window.open('http://198.12.92.202/public/uploads/' + file, '_blank');
      }
    }

    downloadAttachment(file, i) {
      document.getElementById('download-' + i).classList.toggle('hidden');
      document.getElementById('spinner-' + i).classList.toggle('hidden');
      this.helper.downloadFile(file)
        .then(downloaded => {
          console.log('FILE DOWNLOADED SUCCESFULLY');
          document.getElementById('spinner-' + i).classList.toggle('hidden');
          document.getElementById('play-' + i).classList.toggle('hidden');
        })
  
      // setTimeout(() => {
      //   document.getElementById('spinner-' + i).classList.toggle('hidden');
      //   document.getElementById('play-' + i).classList.toggle('hidden');
      // }, 3000)
    }
  
    getSource(local, attachment){
      return new Promise((resolve, reject) => {
        console.log('GET SOURCE')
        if(local){
          this.helper.getStoredFile(attachment)
            .then(file => { resolve(file); console.log('RES', file) })
            .catch(err => { console.log('ERORR', err); reject(err) });
        }
        else {
          resolve('http://198.12.92.202/public/uploads/' + attachment);
        }
      });
    }

    deleteLongPress(id){
      this.deleteAlert(id);
    }

    async addToContacts(){
      var memberData = this.data.memberData.find(o=>o._id != this.adminidval);
      console.log('MEMBER DATA', memberData);
      var name = memberData.name;
      var splitted_name = name.split(' ');
      console.log(splitted_name);

      const alert = await this.alertController.create({
          header: 'Add To Contacts',
          inputs: [
            {
              name: 'first_name',
              label: 'First Name',
              type: 'text',
              value: splitted_name[0] ? splitted_name[0] : '',
              placeholder: 'Placeholder 1'
            },
            {
              name: 'last_name',
              label: 'Last Name',
              type: 'text',
              value: splitted_name[1] ? splitted_name[1] : '',
              placeholder: 'Enter Last Name'
            },
          ],
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                console.log('Confirm Cancel');
              }
            }, {
              text: 'Ok',
              handler: (res: any) => {
                console.log(res);
                console.log('Confirm Ok');
                var contact = this.contacts.create();
                const fullName: any = res.first_name + ' ' + res.last_name;
                contact.name = new ContactName(null, res.last_name ? res.last_name : '', res.first_name ? res.first_name : '');
                contact.phoneNumbers = [new ContactField('mobile', memberData.mobile)];
                contact.save().then(
                  () => {
                    this.groupService.selectedGroup = fullName;
                    this.presentToast("Contact added Successfully");
                    this.contactsService.setUserId()
                    .then(user => {
                      this.contactsService.saveContacts()
                      .then(saved => {
                        this.contactsService.setContacts()
                        .then(set => {});
                      });
                    });
                  },
                  (error: any) => console.error('Error saving contact.', error)
                );
              }
            }
          ]
        });

      alert.present();


    }

    async myActions(id){
      const actionSheet = await this.actionSheetController.create({
        header: 'What do you want to do',
        buttons: [{
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.deleteAlert(id);
          }
        }, {
          text: 'Copy',
          icon: 'copy',
          handler: () => {
            var chat = this.data.chats.find(c => c._id == id);
            console.log(chat);
            if(chat.message){
              console.log(chat.message)
              this.clipboard.copy(chat.message);
              this.presentToast("Copied to Clipboard");
            }
          }
        }]
      });
      await actionSheet.present();
    }

    async othersActions(id){
      const actionSheet = await this.actionSheetController.create({
        header: 'What do you want to do',
        buttons: [{
          text: 'Report',
          icon: 'trash',
          handler: () => {
            this.reportAlert(id);
          }
        }, {
          text: 'Copy',
          icon: 'copy',
          handler: () => {
            var chat = this.data.chats.find(c => c._id == id);
            console.log(chat);
            if(chat.message){
              console.log(chat.message)
              this.clipboard.copy(chat.message);
              this.presentToast("Copied to Clipboard");
            }
          }
        }]
      });
      await actionSheet.present();
    }

}
