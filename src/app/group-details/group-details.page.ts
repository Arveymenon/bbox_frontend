import { Component, OnInit, OnDestroy, Input, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GroupService } from '../shared/group.service';
import { Storage } from '@ionic/storage';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ModalController, ActionSheetController, Platform, ToastController } from '@ionic/angular';
import { LoaderService } from '../services/loader.service';
import { PictureSourceType, CameraOptions, Camera } from '@ionic-native/camera/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { ContactsService } from '../services/contacts.service';
import { BranchIo, BranchUniversalObject } from '@ionic-native/branch-io/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Crop } from '@ionic-native/crop/ngx';

const STORAGE_KEY = 'my_files';
@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.page.html',
  styleUrls: ['./group-details.page.scss'],
})
export class GroupDetailsPage implements OnInit, OnDestroy {

  @Input() group_id:any;
  public usersArray: any[] = [];
  members: any[];
  data: any;
  adminidval: any;
  groupform: FormGroup;
  avatar: Boolean = false;

  ANDROID_PERMISSIONS = [
    'android.permission.READ_EXTERNAL_STORAGE',
    'android.permission.WRITE_EXTERNAL_STORAGE',
  ];

  // images variables
  images: any = [];
  currentFileType: any;
  buo: BranchUniversalObject;
  sharing_link: any;
  constructor(
    public modalCtrl: ModalController,
    public router: Router,
    public camera: Camera,
    public actionSheetCtrl: ActionSheetController,
    private platform: Platform,
    public loader: LoaderService,
    public route: ActivatedRoute,
    private androidPermissions: AndroidPermissions,
    public groupService: GroupService,
    public formBuilder: FormBuilder,
    private storage: Storage,
    private filePath: FilePath,
    private webview: WebView,
    public file: File,
    private ref: ChangeDetectorRef,
    private translate: TranslateService,
    public toastCtrl: ToastController,
    private http: HttpClient,
    private contactsService: ContactsService,
    private branch: BranchIo,
    private socialSharing: SocialSharing,
    private crop: Crop
  ) {
    // this.route.params.subscribe(params => {
      //   this.group_id = params['id']; 
      //     // alert(this.id);
      //     console.log(this.group_id);
      //   });
      
      
      this.storage.get('id').then((val) => {
        this.adminidval = val;
        console.log(this.adminidval);
        //console.log('id', val);
      });
   }
   ngAfterViewInit(){

   }

  ngOnInit() {
    this.loader.presentLoading();
    console.log(this.group_id)
    this.groupform = this.formBuilder.group({
      _id: [this.group_id],
      name: ['', [Validators.required]],
      description: ['',[Validators.required]],
    });

    this.groupService.getChat(this.group_id).subscribe((result) => {
      
      var res: any = result;
      console.log('RES',res);
      this.members = res.memberData;
      for(let member of this.members){
        member.checked = true
        var name = this.contactsService.getContactName(member._id);
        name ? member.name = name : member.name = member.mobile + ' <span class="temp-name">(' + member.name + ')</span>';
        console.log(member);
      }
      console.log(this.members);
      this.data = res;
      this.groupService.selectedGroup = res['name'];

      this.groupform.controls['name'].setValue(res['name']);
      this.groupform.controls['description'].setValue(res['description']);
      this.loader.dismiss()
    });
  }

  async selectImage(){
    if(!this.platform.is('ios') && !this.platform.is('android')){
      console.log('desktop')
      document.getElementById('image').click();
    }
    else{
      const actionSheet = await this.actionSheetCtrl.create({
          header: "Select Image source",
          buttons: [{
                  text: 'Load from Library',
                  icon: 'ios-grid',
                  handler: () => {
                      this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                  }
              },
              {
                  text: 'Use Camera',
                  icon: 'camera',
                  handler: () => {
                      this.takePicture(this.camera.PictureSourceType.CAMERA);
                  }
              },
              {
                  icon: 'close',
                  text: 'Cancel',
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
      // } else {
      //     var currentName = file.substr(file.lastIndexOf('/') + 1);
      //     var correctPath = file.substr(0, file.lastIndexOf('/') + 1);
      //     this.copyFileToLocalDir(correctPath, currentName, this.createFileName(file.lastIndexOf('/') + 1));
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

  getFileExtension(entry) {
    var file = entry.toString();
    var splits = file.split('.');
    var ext = splits[(splits.length - 1)];
    return ext;
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

  pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      let converted = this.webview.convertFileSrc(img);
      return converted;
    }
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

  back(){
    console.log(this.members);
    let members = []
    this.members.forEach(element=>{
      if(element.checked){
        members.push(element._id);
      }
    })
    this.modalCtrl.dismiss({
      'dismissed': true,
      'members': members
    });
  }

  onSubmit(){
    console.log(this.groupform.value);
    if(this.images){
      this.startUpload();
    }else{
      this.groupService.putEditGroup(this.groupform.value).subscribe(updated => {
        this.presentToast('Updated Successfully');
      })
    }
  }

  startUpload() {
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
    this.loader.presentLoading();
    const uploadCall = this.http.post("http://198.12.92.202:5000/upload/single-file", formData)
      .subscribe((res) => {
        this.loader.dismiss();
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
          this.groupService.putEditGroup(create).subscribe(updated => {
            console.log('Updated', updated);
            this.presentToast('Updated Successfully');
          })

          // Empty the array to avoid looping
          // this.images = [];
          // this.onSubmit()
          // this.postGroup(create)

          // this.groupService.putChat(file_message, this.id).subscribe((res) => {
            // this.uploading = false;
          //   this.images = [];
          this.ref.detectChanges();
          // this.reset();
          //   this.chatData();
          this.currentFileType = new String();
          // });
        }
      }, err => {
        console.log("UPLOAD FAILED", err)
        this.images = [];
      })
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

  ngOnDestroy(){
    let members = []
    this.members.forEach(element=>{
      if(element.checked){
        members.push(element._id);
      }
    })
    this.modalCtrl.dismiss({
      'dismissed': true,
      'members': members
    });
  //   this.router.navigate(["/home/tabs/tab1/groupchat/"+this.group_id,{users: JSON.stringify(this.usersArray)}])
  }

  shareLink(){
    var properties = {
      canonicalIdentifier: "group/" + this.data._id,
      contentMetadata: {
        group_id: this.data._id
      }
    }
    this.branch.createBranchUniversalObject(properties).then(buo => {
      this.buo = buo;
      var urlProperties = {
        $deeplink_path: "group/" + this.data._id,
        user_id: this.data._id
      };
      this.buo.generateShortUrl({}, urlProperties)
        .then(res => {
          console.log("Response: ", res.url);
          this.sharing_link = res.url + '?type=group&id=' + this.data._id;
          this.socialSharing.share('Download the Amazing B-Box App to chat with me now!','Hey! Lets Chat on B-Box',null,this.sharing_link)
        })
        .catch(err => {
          console.log("Error: ", err);
        });
    })
  }
}
