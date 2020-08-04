import { Component, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../services/auth.service';
import { Router, NavigationEnd } from '@angular/router';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { ActionSheetController, LoadingController, NavController, ToastController, ModalController, Platform, IonInput } from '@ionic/angular';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../shareduser/user.service';
import { FormControl } from '@angular/forms';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { StorageService } from '../services/storage.service';
import { Crop } from '@ionic-native/crop/ngx';
import { LoaderService } from '../services/loader.service';
import { ContactsService } from '../services/contacts.service';

const STORAGE_KEY = 'my_files';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  @ViewChild('inputElement',{  static: false })  inputElement: IonInput;
  lang: String;
  name: any;
  images = [];
  currentFileType: any;
  uploading: Boolean;
  ANDROID_PERMISSIONS = [
    'android.permission.READ_EXTERNAL_STORAGE',
    'android.permission.WRITE_EXTERNAL_STORAGE',
  ];
  profile_pic: any;
  id: any;
  
  
  user_name = new FormControl();
  edit_name = false;
  subscribers: Boolean ;
  routerSubscription: any;
  mobile: String;
  
  constructor(
    private storage: Storage,
    public keyboard: Keyboard,
    private authService: AuthService,
    private router: Router,
    private actionSheetCtrl: ActionSheetController,
    private loadingCtrl: LoadingController,
    public navCtrl: NavController,
    // public navParams: NavParams,
    public toastCtrl: ToastController,
    private camera: Camera,
    public modalCtrl: ModalController,
    private webview: WebView,
    private platform: Platform,
    private ref: ChangeDetectorRef,
    private file: File,
    private transfer: FileTransfer,
    private filePath: FilePath,
    private fileChooser: FileChooser,
    private http: HttpClient,
    private androidPermissions: AndroidPermissions,
    public userService: UserService,
    private translate: TranslateService,
    private storageService: StorageService,
    private contactsService: ContactsService,
    private crop: Crop,
    private loader: LoaderService
  ) {
    this.subscribers = this.storageService.getSubscriberStatus();

    this.storage.get('language')
    .then(lang => {
      if (lang) {
        console.log(lang)
        if(lang == 'en'){
          this.lang = 'JP';
        }else{
          this.lang = 'EN';
        }
      }
    })
    this.storage.get('profile_pic')
    .then(image => {
      image ? this.profile_pic = image : false;
    })
    this.routerWatch();
    this.mobile = this.contactsService.getPhoneNumber();
  }
  
  ngOnInit() {
    
    this.sharedvalue();
    this.setToggle();

    // setTimeout(() => {
    //   this.subscribers = !this.subscribers;
    //   console.log(this.subscribers);
    // }, 3000)
  }

  enableEditName() {
    this.edit_name = true;
    this.user_name.markAsTouched({
      onlySelf: true
    })
    setTimeout(() => {
      console.log(this.inputElement);
      this.inputElement.setFocus().then(res=>{
        this.keyboard.show();
        console.log(res)
      });
      console.log(this.user_name)
    }, 400)
  }

  inviteMember() {
    this.router.navigate(['invite-member']);
  }

  joinGroup() {
    this.router.navigate(['join-group']);
  }

  updateName() {
    console.log(this.user_name)
    this.storage.get('id').then(id=>{
      if (this.user_name.value) {
        this.name = this.user_name.value;
        this.userService.putUserName({
          id: id,
          name: this.user_name.value
        })
        this.storage.set('name', this.user_name.value)
      }
      this.edit_name = false;
    })
  }

  sharedvalue() {
    this.storage.get('name').then((val) => {
      this.name = val;
      console.log('name', val);
      this.user_name.setValue(val);
    });

    this.storage.get('id').then((val) => {
      this.id = val;
      console.log('ID:::: ', this.id)
    });
  }

  chat() {
    this.router.navigateByUrl('/create-personal-chat');
  }

  logout() {
    console.log('Logging Out...')
    this.authService.logout()
      .then(loggedOut => {
        if (loggedOut == true) {
          this.router.navigate(['/get-number'])
        }
        this.storage.clear();
      })
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
    //   message: text,
    //   position: 'bottom',
    //   duration: 3000
    // });
    // await toast.present();
  }

  async selectImage() {
    if(!this.platform.is('ios') && !this.platform.is('android')){
      console.log('desktop')
      document.getElementById('image').click();
    }else{
      let value = this.translate.instant(['Select_Image_source','Load_from_Library','Use_Camera','cancel'], { value: this.lang })
      console.log(value);
      
      const actionSheet = await this.actionSheetCtrl.create({
  
        header: value.Select_Image_source,
        buttons: [{
          text: value.Load_from_Library,
          icon: 'ios-grid',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: value.Use_Camera,
          icon: 'camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          icon: 'close',
          text: value.cancel,
          role: 'cancel'
        }
        ]
      });
      await actionSheet.present();
    }
  }

  takePicture(sourceType: PictureSourceType) {
    var options: CameraOptions = {
        quality: 65,
        sourceType: sourceType,
        saveToPhotoAlbum: false,
        correctOrientation: true
    };

    this.camera.getPicture(options).then(imagePath => {
      this.loader.presentLoading();
      this.crop.crop(imagePath, {quality: 75}).then(newImage => {
        this.startProcess(newImage, 'image', sourceType);
      });
    });
}

startProcess(file, type, sourceType){
  this.images = [];
  console.log("PROCESS STARTED");
  this.currentFileType = type;
  // if ((this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) || (this.platform.is('android') && type == 'doc')) {
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
  //   } else {
        // var currentName = file.substr(file.lastIndexOf('/') + 1);
        // var correctPath = file.substr(0, file.lastIndexOf('/') + 1);
        // this.copyFileToLocalDir(correctPath, currentName, this.createFileName(file.lastIndexOf('/') + 1));
    // }
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

  getFileExtension(entry) {
    var file = entry.toString();
    var splits = file.split('.');
    var ext = splits[(splits.length - 1)];
    return ext;
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
      if (this.currentFileType != 'doc') {
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
      this.startUpload();
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

  startUpload() {
    this.uploading = true;
    console.log(this.uploading);
    console.log('STARTED UPLOAD');
    if (this.images) {
      this.images.forEach(imgEntry => {
        this.getFileFromLocal(imgEntry.filePath)
      });
    }
  }

  getFileFromLocal(entry) {
    this.file.resolveLocalFilesystemUrl(entry)
      .then(entry => {
        (<FileEntry>entry).file(file => this.readFile(file))
      })
      .catch(err => {
        // let value = this.translate.instant('Error_while_reading_file', { value: this.lang });
        this.presentToast("Error_while_reading_file");
      });
  }

  readFile(file: any) {
    console.log("FILE TYPE", file.type);
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
          this.loadingCtrl.dismiss();
          // let value = this.translate.instant('File_upload_failed', { value: this.lang });
          this.presentToast("File_upload_failed");
        } else {
          // let value = this.translate.instant('File_upload_failed', { value: this.lang });
          this.presentToast("File_upload_success");
          console.log("SUCCESS IS WORKING")
          this.loader.dismiss();
          this.ref.detectChanges();
          this.storage.set('profile_pic', name);
          this.profile_pic = name;
          var avatarEntry = {
            avatar: name,
            id: this.id
          }

          this.userService.putUserAvatar(avatarEntry)
            .subscribe(res => {
              console.log('IMAGE UPLOADED', res)
            }, err => {
              console.log('IMAGE NOT UPLOADED', err)
            })

          // let file_message = this.groupform.value;
          // file_message.messages = name
          // file_message.file = true
          // file_message.fileType = this.currentFileType;

          // this.groupService.putChat(file_message, this.id).subscribe((res) => {
          //   this.uploading = false;
          //   this.images = [];
          this.ref.detectChanges();
          //   this.reset();
          //   this.chatData();
          //   this.currentFileType = new String();
          // });
        }
      }, err => {
        console.log("UPLOAD FAILED", err)
        this.uploading = false;
        this.images = [];
      })
  }

  public checkPermissions(): Promise<any> {
    console.log('Requesting Android Permissions');
    return new Promise((resolve, reject) => {
      this.androidPermissions.requestPermissions(this.ANDROID_PERMISSIONS)
        .then(() => {
          const promisesArray: Promise<any>[] = [];
          this.ANDROID_PERMISSIONS.forEach((permission) => {
            console.log('Checking ', permission);
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
          }).catch((err) => { console.log(err); });
        })
        .catch((err) => console.error('Error requesting permissions: ', err));
    });
  }

  toggleLang(){
    console.log('clicked')
    if(this.lang === 'EN'){
      this.lang = 'JP';
      this.translate.use('en');
      this.storage.set('language','en');
    } else {
      this.lang = 'EN';
      this.translate.use('jp');
      this.storage.set('language','jp');
    }
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
        this.uploading = true;
        let new_name = this.createFileName(this.images[0].name)
        let formData:FormData = new FormData();
        formData.append('image', this.images[0].filePath, new_name);
        this.uploadFileData(formData, new_name);
      }
    };

    reader.readAsDataURL(file);
  }

  valueChanged(event){
    // this.subscribers = !this.subscribers;
    // console.log(this.subscribers);
    console.log(this.subscribers);
    this.storageService.setSubscriberStatus(!this.subscribers);
    this.storage.get('id').then(id => {
    this.userService.setSubscriber({ id: id, subscriber: this.subscribers }).subscribe(res => console.log(res), err => console.log(err));
    });
  }

  routerWatch() {
    this.routerSubscription = this.router.events.subscribe(
      (event: NavigationEnd) => {
        if (event instanceof NavigationEnd) {
          if (event.url == '/home/tabs/tab3') {
            console.log('WORKING');
            this.setToggle();
          }
        }
      }
    );
  }

  setToggle(){
    // this.storage.get('subscribers')
    //   .then(value => {
    //     console.log('SUBSCRIBERS', value)
    //     this.subscribers = value;
    //     console.log(this.subscribers)
    //     // value ? this.subscribers = true : this.subscribers = false;
    //     this.ref.detectChanges();
    //   })
  }

  ionPageWillLeave() {
    this.routerSubscription.unsubscribe();
  }

  goToBlockList(){
    console.log('USERS');
    this.router.navigate(['block-list']);
  }

}