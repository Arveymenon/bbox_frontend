import { Component, OnInit , ViewChild, ChangeDetectorRef, ChangeDetectionStrategy  } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
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
import { Location } from '@angular/common';
import { HelperService } from '../services/helper.service';
import { ContactsService } from '../services/contacts.service';

const STORAGE_KEY = 'my_files';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.page.html',
  styleUrls: ['./send-message.page.scss'],
  providers: [HelperService]
})
export class SendMessagePage implements OnInit {
  current_platform: any;
  lang: String = 'EN';
  userArray : Array<{id : string, name: String, avatar: String}> = []; // Groups
  video_members: Array<{id: String}> = [];
  room_id: any;
  group_data: any;
  user_id: any;
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
  @ViewChild(IonContent, { static: false }) contentArea: IonContent;
  constructor(
    public route: ActivatedRoute,
    public storage: Storage,
    public location: Location,
    private formBuilder: FormBuilder,
    public groupService: GroupService,
    private router: Router,
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
    public translate: TranslateService,
    public helper: HelperService,
    private contactsService: ContactsService
    ) {
      console.log('PLATFORMS', this.platform.platforms())
      if(this.platform.is('desktop')){
        console.log('desktop')
        this.current_platform = 'desktop'
      }

      this.storage.get('language')
      .then(lang => {
        if (lang) {
          this.lang = lang;
        }
      })
      this.route.queryParams.subscribe(params => {
        if (params && params.special) {
          // this.data = JSON.parse(params.special);
            
          console.log(JSON.parse(params.special));
          this.id = JSON.parse(params.special).room_id;
          this.room_id = JSON.parse(params.special).room_id;
          this.group_data = JSON.parse(params.special).data
          console.log('GROUP DATA', this.group_data);
          console.log(this.group_data.memberData);

          this.storage.get('id').then((val) => {
            this.adminidval = val;
            this.user_id = val;
            this.toggleIDs(val);
            console.log(this.adminidval);
            this.chat_room = this.id
            this.socket.connect();
            console.log(this.chat_room);
            this.temp_name = this.adminidval;
    
            console.log(name)
            this.socket.emit('set-name', this.temp_name)
    
            this.socket.fromEvent('message-'+this.chat_room).subscribe((message: any) => {
              console.log('MESSAGE', message);
            });
            var read_all = {
              id: this.id,
              user_id: this.adminidval
            }
            // this.groupService.putChatReadAll(read_all)
            //   .subscribe(read => {
            //     console.log("READ", read);
            //   })
            
            this.group_data.memberData.forEach(element=>{
              if(this.adminidval != element._id){
                var contact = this.contactsService.getContactName(element['_id']);
                var finalName = contact ? contact : element['mobile'];
                this.userArray.push({ id : element['_id'] , name : finalName, avatar : element['avatar']});  
              }   
            });
            this.video_members = [];
          });
        }
      });


      this.storage.get('name').then((val2) => {
        this.adminname
        = val2;
      });
      this.groupform = this.formBuilder.group({
        message: [''],
        adminid:['',[Validators.required]],
        adminname:['',[Validators.required]],
      });
    }
    
  ngOnInit() {
    
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
    if((!this.platform.is('ios') && !this.platform.is('android')) && (this.images.length || this.docs.length)) {
      this.uploading = true;
      let formData:FormData = new FormData();
      if (this.images.length) {
        let new_name = this.createFileName(this.images[0].name);
        formData.append('image', this.images[0].filePath, new_name);
        this.uploadFileData(formData, new_name);
      } else {
        let new_name = this.createFileName(this.docs[0].name);
        formData.append('image', this.docs[0].filePath, new_name);
        this.uploadFileData(formData, new_name);
      }
    }
    else {
      console.log('VIDEO MEMBERS', this.video_members)
      console.log(this.groupform.value);
      if(this.video_members.length > 0){
        if(this.groupform.value.message && !this.docs.length && !this.images.length){
            if(this.noSpaceValidator() == true){
              let file_message = this.groupform.value;
              file_message.messageBy = this.adminidval;
              file_message.messageFor = this.video_members;
              console.log('FILE MESSAGE',file_message);
        
              this.cleanUpload(file_message);
            }else{
              alert("Only spaces not allowed");
            }
          }
        if(this.platform.is('ios') || this.platform.is('android')){
          this.startUpload();
        }
      } else {
        this.presentToast('Kindly select members to send this message to');
      }
    }
  }

  reset(){
    this.groupform.controls['message'].reset();
  }

  selectIndividual(event, pos){
    // console.log(this.checkAll())
    var currentID = event.target.id.replace('image-','');
    document.getElementById('container-'+currentID).classList.toggle('individual-overlay');
    this.toggleIDs(this.userArray[pos].id);
    
    console.log(document.querySelector('.images-container').classList.contains('overlay'))
    if(document.querySelector('.images-container').classList.contains('overlay')){
        document.querySelector('.images-container').classList.toggle('overlay');
        document.querySelector('.checkmark').classList.toggle('hidden');
        document.querySelector('.all-text').classList.toggle('blue');
    }
  }

  selectAll(event){
    document.querySelector('.images-container').classList.toggle('overlay');
    document.querySelector('.checkmark').classList.toggle('hidden');
    document.querySelector('.all-text').classList.toggle('blue');
    
    this.toggleAll(); // Handles ONLY Front End

    console.log(this.checkAll());
    // Checks
    //  if Front End select all has an overlay
    //  else Toggle Selected Users
    if(document.querySelector('.images-container').classList.contains('overlay')){
      this.userArray.forEach(group => {
        this.toggleIDs(group.id,'add')
      })
    }else{
      this.video_members = [];
      console.log(this.video_members);
    }
  }


  toggleAll(){
    for (let i = 0; i < this.userArray.length ; i++) {
      if(this.userArray[i].id != this.user_id){
        if(document.querySelector('.images-container').classList.contains('overlay')){
          if(!document.getElementById('container-' + (i+1)).classList.contains('individual-overlay')){
            document.getElementById('container-' + (i+1)).classList.toggle('individual-overlay');
          }
        }
        else{
          if(document.getElementById('container-' + (i+1)).classList.contains('individual-overlay')){
            document.getElementById('container-' + (i+1)).classList.toggle('individual-overlay');
          }
        }
      }
    }
  }

  checkAll(){
    console.log(this.userArray)
    console.log(this.video_members)
    if(this.userArray.length == this.video_members.length){
      return true;
    }
    else {
      return false;
    }
  }

  toggleIDs(id,action?: any){
    console.log(id)
    var index = this.video_members.indexOf(id);
    console.log(action)
    console.log(index)
    if(action){
      if(action == 'add' && index == -1){
          this.video_members.push(id);
        return;
      }else if(action == 'remove' && index > -1){
        this.video_members.splice(index, 1);
        return;
      }
    }
    else
    {
      if (index > -1) {
        this.video_members.splice(index, 1);
      }
      else {
        this.video_members.push(id);
      }
    }


  }

  /* ONLINE FIX */
  loadStoredImages() {
    this.storage.get(STORAGE_KEY).then(images => {
      if (images) {
        let arr = JSON.parse(images);
        this.images = [];
        for (let img of arr) {
          let filePath = this.file.dataDirectory + img;
          let resPath = this.pathForImage(filePath);
          this.images.push({ name: img, path: resPath, filePath: filePath });
        }
      }
    });
  }
 
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

startProcess(file, type, sourceType){
  this.docs = [];
  this.images = [];
  console.log("PROCESS STARTED");
  this.currentFileType = type;
  if ((this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) || (this.platform.is('android') && type == 'doc')) {
        console.log("FILE: ", file)
        let path = file.toString();
        if(type != 'doc'){
          file = path.indexOf('file://') > -1 ? file : 'file://' + file.toString() ;
        }
        this.filePath.resolveNativePath(file)
            .then(filePath => {
                console.log("FILE PATH", filePath);
                let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                let currentName = new String();
                if(type === 'image'){
                  currentName = file.substring(file.lastIndexOf('/') + 1, file.lastIndexOf('?'));
                }
                else {
                  currentName = filePath.substring(filePath.lastIndexOf('/') + 1);
                }
                this.copyFileToLocalDir(correctPath, currentName, this.createFileName(filePath.substring(filePath.lastIndexOf('/') + 1)));
            }); 
    } else {
        var currentName = file.substr(file.lastIndexOf('/') + 1);
        var correctPath = file.substr(0, file.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName(file.lastIndexOf('/') + 1));
    }
}

  createFileName(fileName) {
    let ext = this.getFileExtension(fileName)
    console.log("EXT", ext);
    var d = new Date(),
        n = d.getTime(),
        newFileName = n + '.' + ext;
        console.log("FILE NAME", fileName)
    return newFileName;
  }

  copyFileToLocalDir(namePath, currentName, newFileName) {
    this.checkPermissions().then(() => {
      this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
        this.updateStoredFiles(newFileName, currentName);
      }, error => {
          console.log("COULD NOT STORE FILE", error)
          // let value = this.translate.instant('Error_while_storing_file', { value: this.lang });
          this.presentToast("Error_while_storing_file");
      });
    })
  }

  updateStoredFiles(name, oldName) {
    this.storage.get(STORAGE_KEY).then(files => {
        let arr = JSON.parse(files);
        if (!arr) {
            let newFiles = [name];
            this.storage.set(STORAGE_KEY, JSON.stringify(newFiles));
        } else {
            arr.push(name);
            this.storage.set(STORAGE_KEY, JSON.stringify(arr));
        }

        
        let filePath = this.file.dataDirectory + name;
        //IF NOT DOC
        if(this.currentFileType != 'doc'){
          let resPath = this.pathForImage(filePath);

          let newEntry = {
              name: name,
              path: resPath,
              filePath: filePath,
              displayName: oldName
          };

          this.images = [newEntry, ...this.images];
          this.ref.detectChanges(); // trigger change detection cycle
          console.log("NEW IMGS", this.images)
        }
        //IF DOC
        else {
          let newEntry = {
            name: name,
            filePath: filePath
          };

          this.docs = [newEntry, ...this.docs];
          console.log("NEW DOCS", this.docs)
        }
    });
  }

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
          // let value = this.translate.instant('File_removed', { value: this.lang });
            this.presentToast("File_removed");
        });
    });
  }

  startUpload() {
    this.uploading = true;
    console.log(this.uploading);
    console.log('STARTED UPLOAD');
    if(this.images){
      console.log('IMAGES', this.images)
      this.images.forEach(imgEntry => {
        this.getFileFromLocal(imgEntry.filePath)
      });  
    }
    if(this.docs){
      console.log('DOCS', this.docs)
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
            // let value = this.translate.instant('Error_while_reading_file', { value: this.lang });
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
                // let value = this.translate.instant('File_upload_failed', { value: this.lang });
                  this.presentToast("File_upload_failed");
              } else {
                // let value = this.translate.instant('File_upload_success', { value: this.lang });
                  this.presentToast("File_upload_success");
                  console.log("SUCCESS IS WORKING")

                  let file_message = this.groupform.value;
                  file_message.messageBy = this.adminidval;
                  file_message.attachment = name
                  file_message.file = true
                  file_message.fileType = this.currentFileType;
                  file_message.messageFor = this.video_members;
                  this.cleanUpload(file_message);
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
      this.socket.emit('send-message', { 
        text: file_message.message, 
        room: this.chat_room,
        sent_from: this.temp_name,
        type: 1, // 1-> text,
        messageFor: file_message.messageFor
      })
      this.reset();
      this.currentFileType = new String();
      if(file_message.file == true && file_message.message.length){
        delete file_message["attachment"];
        delete file_message["fileType"];
        delete file_message["file"];
        this.cleanUpload(file_message);
      }
      this.router.navigate(['group-chat-admin',this.chat_room]);
      // this.groupchatadmin.chatData();
      // this.location.back();
      this.ref.detectChanges();
    });
  }

  getExt(entry) {
    return this.helper.getExt(entry);
  }

  getFileExtension(entry){
    return this.helper.getFileExtension(entry);
  }


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
    this.helper.deleteDoc(pos)
      .then(done => console.log(done))
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

  goBack(){
    this.location.back();
    this.helper.destroyAll();
  }

  ionViewWillLeave(){
    this.helper.destroyAll();
  }

  getFileFromBrowser(event: Event, type){
    this.images = [];
    console.log(event)
    console.log(event.target['files'][0])
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
      } else if (type == 'doc') {
        this.docs = [newEntry, ...this.docs];
        this.currentFileType = type;
      }
    };

    reader.readAsDataURL(file);
  }
}
