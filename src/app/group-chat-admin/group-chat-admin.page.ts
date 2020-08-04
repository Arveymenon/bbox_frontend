import { Component, OnInit, ViewChild, ChangeDetectorRef, ChangeDetectionStrategy, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { Router, NavigationExtras, NavigationEnd } from '@angular/router';
import { NavController, IonContent, ActionSheetController, LoadingController, ToastController, ModalController, Platform } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';

import { GroupService } from '../shared/group.service';
import { Group } from '../shared/group.model';
import { DomSanitizer } from '@angular/platform-browser';
// import { FabContainer } from '@ionic/angular';
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
import { AlertController } from '@ionic/angular';
import { HelperService } from '../services/helper.service';
import { Location } from '@angular/common';
import { Contact } from '@ionic-native/contacts/ngx';
import { ContactsService } from '../services/contacts.service';
import { NgxLinkifyjsService, Link, LinkType, NgxLinkifyOptions } from 'ngx-linkifyjs';
import { Clipboard } from '@ionic-native/clipboard/ngx';

const STORAGE_KEY = 'my_files';

@Component({
  selector: 'app-group-chat-admin',
  templateUrl: './group-chat-admin.page.html',
  styleUrls: ['./group-chat-admin.page.scss'],
  providers: [HelperService],
})
export class GroupChatAdminPage implements OnInit {
 
  longpress : any = false;
  longpressclass = ["message-bubble-received-flex"];
  lang: String = 'EN';
  chatArray: FormGroup;
  chat_room: any;
  groupform: FormGroup;
  imageURIs: any;
  printURIs: any;
  type: number;
  id: any;
  sub: any;
  idval: String = "";
  adminidval: String = "";

  group_admin_id: any

  images = [];
  adminname: String = "";
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
  img_src: any;
  temp_name: any;
  data: any;
  filtered_users = [];
  members: any;
  filtered: Boolean = false;
  @ViewChild(IonContent, { static: false }) contentArea: IonContent;
  routerSubscription: any;
  fileArray = [];
  fileSourceArray = [];

  // deletable
  current_event: any
  showBlock: boolean;
  mobile: any;

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
    private contactsService: ContactsService,
    private location: Location,
    private actionSheetController: ActionSheetController,
    public linkifyService: NgxLinkifyjsService,
    public clipboard: Clipboard
  ) {
    window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
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
    if (this.filtered == false) {
      // console.log('Group-Chat-Page');
      this.sub = this.route.params.subscribe(params => {
        // console.log(params['id']);
        this.id = params['id'];
        // alert(this.id);
      });

      this.storage.get('id').then((val) => {
        this.adminidval
          = val;
        console.log('MY ID', this.adminidval);
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

        this.routerWatch();
      });

      this.storage.get('name').then((val2) => {
        this.adminname
          = val2;
      });

      this.groupform = this.formBuilder.group({
        message: ['',[Validators.pattern(/^\S*$/)]],
        adminid:['',[Validators.required]],
        adminname:['',[Validators.required]],
      });
    }

  }

  @ViewChildren("messageContainer") messageContainers: QueryList<ElementRef>;
  @ViewChild('window', { static: false }) window;
  

  ngOnInit() {
    this.chatArray = this.formBuilder.group({
    });
    // Set itt(i.e. in eg. as 1) as form control name and itterate on the basis of the front end
    this.chatArray.addControl("1", new FormControl(''));
  }

  onSubmit() {

    
    console.log(this.images)
    console.log(this.images.length)
    if((!this.platform.is('ios') && !this.platform.is('android')) && this.images.length){
        this.uploading = true;
        let new_name = this.createFileName(this.images[0].name)
        let formData:FormData = new FormData();
        formData.append('image', this.images[0].filePath, new_name);
        this.uploadFileData(formData, new_name);
    }
    else {
      console.log(this.groupform.value);
      if(this.groupform.value.message && !this.docs.length && !this.images.length){
        if(this.noSpaceValidator() == true){
          let file_message = this.groupform.value;
          file_message.messageBy = this.adminidval;
          this.findAdmin()
          .then(val => {
            console.log(val)
            file_message.messageFor = [val[0].memberid];
            console.log('OTHERS', file_message);
            this.cleanUpload(file_message)
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

  replyOnClick(event) {

    this.current_event = event
    // Setting Color
    let currentID = event.target.id.replace('-reply', '');
    let messageID = currentID + '-bubble';
    document.getElementById(messageID).classList.toggle('active');
    if (document.getElementById(currentID + '-reply').getAttribute('color') == 'dark') {
      document.getElementById(currentID + '-reply').setAttribute('color', 'primary')
    }
    else {
      document.getElementById(currentID + '-reply').setAttribute('color', 'dark')
    }

    // Toggling text area

    document.getElementById(currentID + '-textarea').classList.toggle('hidden')
  }

  longPress(itt){
    // console.log("I AM LONG PRESSED")
    this.longpress = true;
    // this.longpressclass[itt] = "message-bubble-received-flex-longpress";
    // console.log(this.longpress)
    // // console.log(this.longpressclass[itt])
    this.reportAlert([itt]);
    
  }

  async reportAlert([itt]) {
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
            // console.log('Confirm Cancel: blah');
            // this.longpressclass[itt] = "message-bubble-received-flex";
          }
        }, {
          text: value.Report,
          role: 'okay',
          handler: () => {
            // console.log('Confirm Okay');
            // this.longpressclass[itt] = "message-bubble-received-flex-reported";
            this.presentToast("This_feed_has_been_reported");
          }
        }
      ]
    });

    await alert.present();
    alert.onDidDismiss().then(
      (res:any)=>{
        // console.log(res);
        if(res.role == 'cancel'){
          // this.longpressclass[itt] = "message-bubble-received-flex"
        }
        if(res.role == 'okay'){
          // this.longpressclass[itt] = "message-bubble-received-flex-reported"
        }
        
      }
    )
  }

  ionViewWillLoad(){
    // console.log('ion view will load');
    this.chatData;
  }

  chatData() {
    // console.log("CHAT DATA CALLED")
    this.groupService.getChat(this.id).subscribe((result) => {
      var res: any = result;
      // console.log('RES', res);
      this.img_src = res.avatar;
      this.data = res;
      console.log('DATA', this.data)
      this.groupService.selectedGroup = res['name'];
      this.idval = res['_id'];
      this.groupService.groups = res['chats'];
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
  
        this.checkAdmin().then(filterData => {
          // console.log("filter data:", filterData)
          if (filterData) {
            filterData[0].admin ? this.isAdmin = true : this.isAdmin = false;
          }
        })
        this.loadingChats = false
      }
      else {
        this.loadingChats = false;
      }
      // console.log('CHAT GROUPS', this.groupService.groups);
      for (let chat_group of this.groupService.groups) {
        this.chatArray.addControl(chat_group._id, new FormControl(''));
      }
      this.checkSources(res['chats'])
      this.members = res.memberData;
      this.ref.detectChanges();
      this.contentArea.scrollToBottom();
    });
  }

  replyToMessage(value, message_by) {
    // console.log(this.chatArray.value[value]);
    // console.log(this.chatArray);
    // console.log(value)
    let file_message: any = {};
    file_message.replyFor = value;
    file_message.messageBy = this.adminidval;
    file_message.messageFor = [message_by._id];

    // Backend Handle
    if (this.chatArray.value[value] && !this.docs.length && !this.images.length) {
      file_message.message = this.chatArray.value[value];
      // console.log(file_message);
      this.cleanUpload(file_message);
    }
    // if(this.isAdmin == false){
    //   // console.log('BLA')
    //   this.findAdmin()
    //   .then(val =>{
    //     // console.log('VAL', val)
    //     file_message.messageFor = [val[0].memberid];
    //     // console.log('ADMIN',file_message);
    //   })
    // } 
    // else {
    //   // console.log('BLA2')
    //   this.findOthers()
    //   .then(val => {
    //     // console.log(val)
    //     // console.log('OTHERS', file_message);
    //     this.cleanUpload(file_message)
    //   })
    // }
    if(this.platform.is('ios') || this.platform.is('android')){
      this.startUpload();
    }


    // Front End
    this.chatArray.controls[value].setValue('');
    // this.chatArray.value[value] = "";
    let currentID = this.current_event.target.id.replace('-reply', '');
    let messageID = currentID + '-bubble';
    document.getElementById(messageID).classList.toggle('active');
    if (document.getElementById(currentID + '-reply').getAttribute('color') == 'dark') {
      document.getElementById(currentID + '-reply').setAttribute('color', 'primary')
    }
    else {
      document.getElementById(currentID + '-reply').setAttribute('color', 'dark')
    }

    // Toggling text area

    document.getElementById(currentID + '-textarea').classList.toggle('hidden')
  }

  addmember(val) {
    this.router.navigate(['home/tabs/tab1/creategroup/addmember/' + val]);
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

  checkAdmin() {
    return new Promise((resolve, reject) => {
      var result = this.data.members.filter(m => m.memberid == this.adminidval)
      // console.log('RESULT', result);
      resolve(result);
    });
  }

  findAdmin() {
    return new Promise((resolve, reject) => {
      var result = this.data.members.filter(m => m.admin == true)
      resolve(result);
    });
  }

  findOthers() {
    return new Promise((resolve, reject) => {
      let a = this.data.members;
      let b = []
      a.splice(a.findIndex(e => e.memberid == this.adminidval), 1);
      a.forEach(element => {
        b.push(element.memberid);
      });
      // var result = this.data.members.filter(m => m.admin == true)
      resolve(b);
    });
  }

  reset() {
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

  createAudioVideoChat(video) {
    // console.log('going to video chat page')
    var extra: NavigationExtras = {
      queryParams: {
        special: JSON.stringify({
          room_id: this.chat_room,
          video: video
        })
      }
    }
    this.router.navigate(['create-video-chat'], extra);
  }

  goToVideoChatPage() {
    // console.log('Navigating to Video Chat Page')
    var extra: NavigationExtras = {
      queryParams: {
        special: JSON.stringify({
          data: this.data,
        })
      }
    }
    this.router.navigate(['video-chat/' + this.idval],extra);
  }

  goToAudioCallPage() {
    // console.log('Navigating to Audio Call Page')
    this.router.navigate(['audio-call/'  + this.chat_room]);
  }

  /* ONLINE FIX */
  // loadStoredImages() {
  //   this.storage.get(STORAGE_KEY).then(images => {
  //     if (images) {
  //       let arr = JSON.parse(images);
  //       this.images = [];
  //       for (let img of arr) {
  //         let filePath = this.file.dataDirectory + img;
  //         let resPath = this.pathForImage(filePath);
  //         this.images.push({ name: img, path: resPath, filePath: filePath });
  //       }
  //     }
  //   });
  // }

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
    //   message: text,
    //   position: 'bottom',
    //   duration: 3000
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
//     // console.log('desktop')
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
  //   // console.log("PROCESS STARTED");
  //   this.currentFileType = type;
  //   if ((this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) || (this.platform.is('android') && type == 'doc')) {
  //         // console.log("FILE: ", file)
  //         let path = file.toString();
  //         if(type != 'doc'){
  //           file = path.indexOf('file://') > -1 ? file : 'file://' + file.toString() ;
  //         }
  //         this.filePath.resolveNativePath(file)
  //             .then(filePath => {
  //                 // console.log("FILE PATH", filePath);
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
//         // console.log("COULD NOT STORE FILE", error)
//         // let value = this.translate.instant(['Error_while_storing_file'], { value: this.lang })
//         this.presentToast("Error_while_storing_file");
//       });
//     })
//   }

//   updateStoredFiles(name, oldName) {
//     this.storage.get(STORAGE_KEY).then(files => {
//       let arr = JSON.parse(files);
//       if (!arr) {
//         let newFiles = [name];
//         this.storage.set(STORAGE_KEY, JSON.stringify(newFiles));
//       } else {
//         arr.push(name);
//         this.storage.set(STORAGE_KEY, JSON.stringify(arr));
//       }


//       let filePath = this.file.dataDirectory + name;
//       //IF NOT DOC
//       if (this.currentFileType != 'doc') {
//         let resPath = this.pathForImage(filePath);

//         let newEntry = {
//           name: name,
//           path: resPath,
//           filePath: filePath,
//           displayName: oldName
//         };

//         this.images = [newEntry, ...this.images];
//         this.ref.detectChanges(); // trigger change detection cycle
//         // console.log("NEW IMGS", this.images)
//       }
//       //IF DOC
//       else {
//         let newEntry = {
//           name: name,
//           filePath: filePath
//         };

//         this.docs = [newEntry, ...this.docs];
//         // console.log("NEW DOCS", this.docs)
//       }
//     });
//   }

//   pathForImage(img) {
//     if (img === null) {
//       return '';
//     } else {
//       let converted = this.webview.convertFileSrc(img);
//       return converted;
//     }
//   }

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
                  this.findAdmin()
                  .then(val => {
                    console.log(val)
                    file_message.messageFor = [val[0].memberid];
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
      this.socket.emit('send-message', {
        text: file_message.message,
        room: this.chat_room,
        sent_from: this.temp_name,
        user_id: this.adminidval,
        mobile: this.mobile,
        type: 1, // 1-> text,
        messageFor: file_message.messageFor
      })
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
    else {
      return 'video';
    }
  }

  getFileExtension(entry) {
    var file = entry.toString();
    var splits = file.split('.');
    var ext = splits[(splits.length - 1)];
    return ext;
  }


  async selectAFile() {
    // console.log('Select File')
    this.helper.selectAFile()
        .then((fileResponse: any) => {
          console.log('File RESPONSE', fileResponse);
          this.images = fileResponse.images;
          this.docs = fileResponse.docs;
          this.currentFileType = 'doc';
          this.ref.detectChanges();
        })
  }

  deleteDoc(pos){
    this.docs.splice(pos, 1);
  }
  public checkPermissions(): Promise<any> {
    // console.log('Requesting Android Permissions');
    return new Promise((resolve, reject) => {
      this.androidPermissions.requestPermissions(this.ANDROID_PERMISSIONS)
        .then(() => {
          const promisesArray: Promise<any>[] = [];
          this.ANDROID_PERMISSIONS.forEach((permission) => {
            // console.log('Checking ', permission);
            promisesArray.push(this.androidPermissions.checkPermission(permission));
          });
          Promise.all(promisesArray).then((responses) => {
            let allHasPermissions = true;
            responses.forEach((response, i) => {
              allHasPermissions = response.hasPermission;
              if (!allHasPermissions) {
                reject(
                  new Error(
                    'Permissions denied: ' + this.ANDROID_PERMISSIONS[i]
                  ));
              }
            });
            resolve();
          }).catch((err) => { // console.log(err); 
          });
        })
        .catch((err) => console.error('Error requesting permissions: ', err));
    });
  }

  viewImage(src) {
    // console.log('viewImage', src);
    this.router.navigate(['view-image', src])
  }

  viewVideo(src) {
    // console.log('viewVideo', src);
    this.router.navigate(['view-video', src])
  }

  findMatch = (memberid, messageFor) => {
    let found = JSON.stringify(messageFor).includes(`"memberid":"${memberid}"`);
    // // console.log('HAI', found);
    return found ? found : false;
  }

  async detailsPage() {
    this.filtered = false;
    const modal = await this.modalController.create({
      component: GroupDetailsPage,
      componentProps: {
        'group_id': this.id
      }
    });


    modal.onWillDismiss().then((data: any) => {
      // console.log(data)
      if (data.data && data.data.members) {
        // console.log('MEMBERS', data.data.members)
        this.filtered_users = data.data.members
        // console.log(this.groupService.groups);
        this.filtered = true;
        // console.log(this.filtered);
        this.ref.detectChanges();
      }
    });
    return await modal.present();

  }

  addReplyControl(element) {

    this.chatArray.addControl(element, new FormControl(''));
    // console.log(this.chatArray);
    // if((parseInt(element) + 1) == this.feeds.length){
    //   this.loadingFeeds = false;
    // }
  }

  goToSendMessagePage() {
    var extra: NavigationExtras = {
      queryParams: {
        special: JSON.stringify({
          data: this.data,
          room_id: this.chat_room
        })
      }
    }
    this.router.navigate(['send-message'], extra);
  }

  routerWatch() {
    this.routerSubscription = this.router.events.subscribe(
      (event: NavigationEnd) => {
        if (event instanceof NavigationEnd) {
          if (event.url == '/group-chat-admin/' + this.id) {
            this.chatData()
            this.ref.detectChanges();
          }
        }
      }
    );
  }

  ionPageWillLeave() {
    this.routerSubscription.unsubscribe();
  }

  // onLongPress(){
  //   // console.log("LONGPRESS BALLE BALLE")
  // }
  

  getFileFromBrowser(event: Event, type){
    this.images = [];
    // console.log(event)
    // console.log(event.target['files'][0])
    let fileList: FileList = event.target['files'];

    if(fileList.length > 0) {
        var file = fileList[0];
    }

    const reader = new FileReader();
    reader.onload = e => {
      let newEntry = {
        name: file.name,
        path: reader.result,
        filePath: file,
        displayName: file.name,
        type: type
      };
      if(type != 'doc'){
        this.images = [newEntry, ...this.images];
        this.currentFileType = type;
      }
    };

    reader.readAsDataURL(file);
  }

  back(){
    this.groupService.selectedGroup = null;
    this.router.navigateByUrl('/home/tabs/tab1');
  }

  acceptGroup(){
    this.helper.acceptGroup(this.idval)
      .then(accepted => {
        if(accepted)
          // this.chatData();
          this.showBlock = false;
          this.ref.detectChanges();
      })
      .catch(err => console.log('ACCEPT ERROR', err))
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
  
}
