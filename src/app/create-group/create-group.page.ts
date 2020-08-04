import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController, ActionSheetController, Platform, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';

import { GroupService } from '../shared/group.service';
import { Group } from '../shared/group.model';
import { PictureSourceType, CameraOptions, Camera } from '@ionic-native/camera/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { HttpClient } from '@angular/common/http';
import { LoaderService } from '../services/loader.service';
import { StorageService } from '../services/storage.service';
import { Crop } from '@ionic-native/crop/ngx';

const STORAGE_KEY = 'my_files';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.page.html',
  styleUrls: ['./create-group.page.scss'],
  providers: [GroupService]
})
export class CreateGroupPage implements OnInit {
  lang: String = 'EN';
  images = [];
  groupform: FormGroup;
  uploading = false;
  id: String = "";
  currentFileType: any;
  idckeck: any;
  avatar: Boolean = false;

  ANDROID_PERMISSIONS = [
    'android.permission.READ_EXTERNAL_STORAGE',
    'android.permission.WRITE_EXTERNAL_STORAGE',
  ];
  groupType: any;

  constructor(
    private platform: Platform,
    private formBuilder: FormBuilder,
    private groupService: GroupService,
    public toastCtrl: ToastController,
    private router: Router,
    private toastController: ToastController,
    private storage: Storage,
    private navCtrl: NavController,
    private file: File,
    private transfer: FileTransfer,
    private loader: LoaderService,
    private filePath: FilePath,
    private fileChooser: FileChooser,
    private translate: TranslateService,
    public camera: Camera,
    private ref: ChangeDetectorRef,
    private webview: WebView,
    private actionSheetCtrl: ActionSheetController,
    private androidPermissions: AndroidPermissions,
    private http: HttpClient,
    private storageService: StorageService,
    private crop: Crop
    ) {
    this.storage.get('language')
      .then(lang => {
        if (lang) {
          this.lang = lang;
        }
      })
    this.storage.get('id').then((val) => {
      this.id = val;
      this.groupform.patchValue({
        admin_id: val
      });
      console.log(this.groupform.value)
    });
    this.groupType = this.storageService.getGroupType();
    console.log('GROUP TYPE', this.groupType);
  }

  ngOnInit() {
    this.groupform = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  back() {
    this.navCtrl.pop();
  }

  resultArray: any;
  details: any;

  onSubmit() {
    // if((!this.platform.is('ios') && !this.platform.is('android')) && this.images){
    //   this.uploading = true;
    //   let new_name = this.createFileName(this.images[0].name)
    //   let formData:FormData = new FormData();
    //   formData.append('image', this.images[0].filePath, new_name);
    //   this.uploadFileData(formData, new_name);
    // }
    // else {
      if (!this.groupform.invalid) {
        this.loader.presentLoading();
        if (this.avatar) {
          if(this.platform.is('ios') || this.platform.is('android')){
            this.startUpload();
          }
        } else {
          this.postGroup(this.groupform.value)
        }
      } else {
        this.loader.dismiss();
        // let value = this.translate.instant(['Kindly_Fill_In_All_The_Required_Details'], { value: this.lang })
        this.presentToast("Kindly_Fill_In_All_The_Required_Details");
      }
    // }
  }

  postGroup(value) {
    value.subscriber = this.groupType;
    this.groupService.postGroup(value).subscribe((res) => {
      this.loader.dismiss();
      this.showToast();
      this.details = res;
      this.resultArray = [this.details].map(function (a) { return a["_id"]; });
      console.log(this.resultArray);
      this.groupform.reset();
      this.router.navigate(['add-member/' + this.resultArray]);
    });
  }

  async showToast() {
    // let value = this.translate.instant(['Group_Added_Successfully'], { value: this.lang })
    this.storage.get('language').then((language: any)=>{
      console.log(language)
      
      this.translate.get("Group_Added_Successfully",{value: language})
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
  }

  sharedvalue() {

  }

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
        // let value = this.translate.instant(['Error_while_storing_file'], { value: this.lang })
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
        this.avatar = true
        this.ref.detectChanges(); // trigger change detection cycle
        console.log("NEW IMGS", this.images)
      }
      // if(this.platform.is('ios') || this.platform.is('android')){
      //   this.startUpload();
      // }
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
        // let value = this.translate.instant(['Error_while_reading_file'], { value: this.lang })
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
          // let value = this.translate.instant(['File_upload_failed'], { value: this.lang })
          this.presentToast("File_upload_failed");
        } else {
          // let value = this.translate.instant(['File_upload_success'], { value: this.lang })
          this.presentToast("File_upload_success");

          let create = this.groupform.value;
          create.avatar = name

          this.postGroup(create)

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


}
