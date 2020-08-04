import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { GroupService } from '../shared/group.service';
import { Group } from '../shared/group.model';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ActionSheetController, LoadingController, NavController, ToastController, ModalController, Platform } from '@ionic/angular';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { PreviewFeedModalPage } from '../preview-feed-modal/preview-feed-modal.page';
import { LoaderService } from '../services/loader.service';
import { Events } from '@ionic/angular';
import { UserService } from '../shareduser/user.service';
import { HelperService } from '../services/helper.service';
import { FileOpener } from '@ionic-native/file-opener/ngx';

const STORAGE_KEY = 'my_files';

@Component({
  selector: 'app-create-feed',
  templateUrl: './create-feed.page.html',
  styleUrls: ['./create-feed.page.scss'],
  providers: [GroupService]
})
export class CreateFeedPage implements OnInit {
  lang: String = 'EN';
  userArray: Array<{ id: string, name: String, avatar: String, members: [] }> = []; // Groups
  idval: any;
  feed_groups: Array<{ id: String }> = [];
  feedForm: FormGroup;
  docs: any = [];
  loaded: Boolean = false;
  uploading = false;
  ANDROID_PERMISSIONS = [
    'android.permission.READ_EXTERNAL_STORAGE',
    'android.permission.WRITE_EXTERNAL_STORAGE',
  ];
  currentFileType: String;
  images = [];
  all: Boolean = false;
  upload_value = 0;
  buffer_value = 0.1;
  // hides groups when feed is edited VIKAS
  feed_id: any = -1;
  feedEdit: any;
  constructor(
    private storage: Storage,
    public groupService: GroupService,
    private formBuilder: FormBuilder,
    private file: File,
    private actionSheetCtrl: ActionSheetController,
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
    private router: Router,
    private route: ActivatedRoute,
    public loader: LoaderService,
    private translate: TranslateService,
    public events: Events,
    public userService: UserService,
    public helper: HelperService,
    private fileOpener: FileOpener
  ) {
    this.storage.get('language')
      .then(lang => {
        if (lang) {
          this.lang = lang;
        }
      });
    this.storage.get('id')
      .then(id => {
        if (id) {
          this.idval = id;
        }
      });

    this.route.queryParams.subscribe(params => {
      if (params) {
        this.feedEdit = JSON.parse(params['feeddata']);
        console.log(params);
        console.log(this.feedEdit);
        this.feed_id = this.feedEdit.data._id;
      }

    });

    // setTimeout(() => {
    //   this.upload_value += 0.1
    //   this.buffer_value += 0.1
    // }, 1000)

    // setTimeout(() => {
    //   this.upload_value += 0.6
    //   this.buffer_value += 0.6
    // }, 7000)

    this.loadGroups();
    // this.getgroupuser(this.id);
  }

  ngOnInit() {
    this.feedForm = this.formBuilder.group({
      text: [''],
    });

    // VIKAS SETTING MESSAGE IN EDIT CASE
    if (this.feed_id != -1) {
      console.log(this.feedEdit.data._id);
      this.feedForm.controls.text.setValue(this.feedEdit.data.text);
      console.log(this.feedForm.value.text);
    }


  }

  loadGroups() {
    this.loader.presentLoading();

    this.storage.get('id').then((val) => {
      console.log(val);
      this.groupService.getGroupList(val).subscribe((res) => {
        console.log('GROUPS', res);

        this.userArray = new Array();
        // this.groupService.selectedGroup = res as Group;
        this.groupService.ugroups = res.groups as Group[];
        console.log('GROUPS', this.groupService.ugroups);
        this.groupService.ugroups.forEach(element => {
          let admin = element.members.find(m => m.admin == true);
          if (element.subscriber && this.idval == admin.memberid) {
            this.userArray.push({ id: element._id, name: element.name, avatar: element.avatar, members: element.members });
          }
        });
        this.loader.dismiss();
        this.ref.detectChanges();
        this.loaded = true;
        console.log(this.userArray);
      });
    });
  }

  selectIndividual(event, pos) {
    // console.log(this.checkAll())
    let currentID = event.target.id.replace('image-', '');
    document.getElementById('container-' + currentID).classList.toggle('individual-overlay');
    this.toggleIDs(this.userArray[pos].id);


    console.log(document.querySelector('.images-container').classList.contains('overlay'));
    if (document.querySelector('.images-container').classList.contains('overlay')) {
      document.querySelector('.images-container').classList.toggle('overlay');
      document.querySelector('.checkmark').classList.toggle('hidden');
      document.querySelector('.all-text').classList.toggle('blue');
    }

  }

  showAttachment(event) {
    console.log('working');
    document.querySelector('.attachment-container').classList.toggle('hide');
    document.querySelector('.buttons-container').classList.toggle('normal');
  }

  selectAll(event) {
    document.querySelector('.images-container').classList.toggle('overlay');
    document.querySelector('.checkmark').classList.toggle('hidden');
    document.querySelector('.all-text').classList.toggle('blue');

    this.toggleAll(); // Handles ONLY Front End

    console.log(this.checkAll());
    // Checks
    //  if Front End select all has an overlay
    //  else Toggle Selected Users
    if (document.querySelector('.images-container').classList.contains('overlay')) {
      this.userArray.forEach(group => {
        this.toggleIDs(group.id, 'add');
      });
    } else {
      this.feed_groups = [];
      console.log(this.feed_groups);
    }
  }

  toggleAll() {
    for (let i = 0; i < this.userArray.length; i++) {
      if (document.querySelector('.images-container').classList.contains('overlay')) {

        if (!document.getElementById('container-' + (i + 1)).classList.contains('individual-overlay')) {
          document.getElementById('container-' + (i + 1)).classList.toggle('individual-overlay');
        }

      } else {

        if (document.getElementById('container-' + (i + 1)).classList.contains('individual-overlay')) {
          document.getElementById('container-' + (i + 1)).classList.toggle('individual-overlay');
        }

      }
    }
  }

  checkAll() {
    console.log(this.userArray);
    console.log(this.feed_groups);
    if (this.userArray.length == this.feed_groups.length) {
      return true;
    } else {
      return false;
    }
  }

  toggleIDs(id, action?: any) {

    console.log(id);
    let index = this.feed_groups.indexOf(id);
    console.log(action);
    console.log(index);


    if (action) {

      if (action == 'add' && index == -1) {
        this.feed_groups.push(id);
        return;
      } else if (action == 'remove' && index > -1) {
        this.feed_groups.splice(index, 1);
        return;
      }

    } else {

      if (index > -1) {
        this.feed_groups.splice(index, 1);
      } else {
        this.feed_groups.push(id);
      }
      console.log(this.feed_groups);

    }


  }

  onSubmit() {

    console.log(this.images);
    // console.log(this.images[0].name)
    if ((!this.platform.is('ios') && !this.platform.is('android')) && (this.images.length != 0 || this.docs.length != 0)) {
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
      console.log(this.feedForm.value);
      if (this.feed_id != -1) {
        // edit a feed
        const body = {
          id: this.feedEdit.data._id,
          text: this.feedForm.value.text,
          file: this.feedEdit.data.file,
          attachment: this.feedEdit.data.attachment,
          fileType: this.feedEdit.data.fileType
        };
        console.log(body);
        this.groupService.editFeed(body).subscribe((res) => {
          console.log(res);
          this.router.navigate(['/home/tabs/tab2']);
        });
      } else {

        // add new feed
        if (this.feed_groups.length > 0) {
          if (this.platform.is('ios') || this.platform.is('android')) {
            this.startUpload();
          }
        } else {
          // let value = this.translate.instant('Kindly_select_atleast_one_group', { value: this.lang })
          this.presentToast('Kindly_select_atleast_one_group');
        }
      }
    }
  }

  /* ONLINE FIX */
  loadStoredImages() {

    this.storage.get(STORAGE_KEY).then(images => {
      if (images) {
        const arr = JSON.parse(images);
        this.images = [];
        for (const img of arr) {
          const filePath = this.file.dataDirectory + img;
          const resPath = this.pathForImage(filePath);
          this.images.push({ name: img, path: resPath, filePath });
        }
      }

    });
  }

  async showModal() {
    const modal = await this.modalCtrl.create({
      component: PreviewFeedModalPage,
      componentProps: {
        text: this.feedForm.value.text,
        group: this.feed_groups,
        groupname: this.userArray,
        images: this.images,
        docs: this.docs
      }
    });
    return await modal.present();
  }

  async presentToast(text) {

    this.storage.get('language').then((language: any) => {
      console.log(language);

      this.translate.get(text, {value: language})
      .subscribe(async (res: any) => {

        const toast = await this.toastCtrl.create({
          message: res,
          duration: 3000,
          position: 'bottom',
        });
        toast.present();
        this.ref.detectChanges();
      });
    });
  }

  async selectImage() {
    if (!this.platform.is('ios') && !this.platform.is('android')) {
      console.log('desktop');
      document.getElementById('image').click();
    } else {
      const actionSheet = await this.actionSheetCtrl.create({
          header: 'Select Image source',
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
    let options: CameraOptions = {
        quality: 65,
        sourceType,
        saveToPhotoAlbum: false,
        correctOrientation: true
    };

    this.camera.getPicture(options).then(imagePath => {
        this.startProcess(imagePath, 'image', sourceType);
    });
  }

selectVideoFromGallery() {
  if (!this.platform.is('ios') && !this.platform.is('android')) {
    console.log('desktop');
    document.getElementById('video').click();
  } else {
    const options: CameraOptions = {
      quality: 65,
      destinationType: this.camera.DestinationType.FILE_URI,
      mediaType: this.camera.MediaType.VIDEO,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    };

    this.camera.getPicture(options).then(imagePath => {
      this.startProcess(imagePath, 'video', this.camera.PictureSourceType.PHOTOLIBRARY);
    });
  }
}

  startProcess(file, type, sourceType) {
    this.docs = [];
    this.images = [];
    console.log('PROCESS STARTED');
    this.currentFileType = type;
    if ((this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) || (this.platform.is('android') && type == 'doc')) {
      console.log('FILE: ', file);
      const path = file.toString();
      if (type != 'doc') {
        file = path.indexOf('file://') > -1 ? file : 'file://' + file.toString();
      }
      this.filePath.resolveNativePath(file)
        .then(filePath => {
          console.log('FILE PATH', filePath);
          const correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
          let currentName = new String();
          if (type === 'image') {
            currentName = file.substring(file.lastIndexOf('/') + 1, file.lastIndexOf('?'));
          } else {
            currentName = filePath.substring(filePath.lastIndexOf('/') + 1);
          }
          this.copyFileToLocalDir(correctPath, currentName, this.createFileName(filePath.substring(filePath.lastIndexOf('/') + 1)));
        });
    } else {
      let currentName = file.substr(file.lastIndexOf('/') + 1);
      console.log('CURRENT NAME', currentName);
      let correctPath = file.substr(0, file.lastIndexOf('/') + 1);
      console.log('CORRECT PATH', correctPath);
      this.copyFileToLocalDir(correctPath, currentName, this.createFileName(file.lastIndexOf('/') + 1));
    }
  }

  createFileName(fileName) {
    const ext = this.getFileExtension(fileName);
    console.log('EXT', ext);
    let d = new Date(),
      n = d.getTime(),
      newFileName = n + '.' + ext;
    console.log('FILE NAME', fileName);
    return newFileName;
  }

  copyFileToLocalDir(namePath, currentName, newFileName) {
    console.log('NEW FILE NAME', newFileName);
    this.checkPermissions().then(() => {
      this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
        this.updateStoredFiles(newFileName, currentName);
      }, error => {
        console.log('COULD NOT STORE FILE', error);
        // let value = this.translate.instant('Error_while_storing_file', { value: this.lang })
        this.presentToast('Error_while_storing_file');
      });
    });
  }

  updateStoredFiles(name, oldName) {
    this.storage.get(STORAGE_KEY).then(files => {
      const arr = JSON.parse(files);
      if (!arr) {
        const newFiles = [name];
        this.storage.set(STORAGE_KEY, JSON.stringify(newFiles));
      } else {
        arr.push(name);
        this.storage.set(STORAGE_KEY, JSON.stringify(arr));
      }


      const filePath = this.file.dataDirectory + name;
      // IF NOT DOC
      if (this.currentFileType != 'doc') {
        const resPath = this.pathForImage(filePath);

        const newEntry = {
          name,
          path: resPath,
          filePath,
          displayName: oldName
        };

        this.images = [newEntry, ...this.images];
        this.ref.detectChanges(); // trigger change detection cycle
        console.log('NEW IMGS', this.images);
      } else {
        const newEntry = {
          name,
          filePath
        };

        this.docs = [newEntry, ...this.docs];
        console.log('NEW DOCS', this.docs);
      }
    });
  }

  pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      const converted = this.webview.convertFileSrc(img);
      return converted;
    }
  }

  deleteFile(fileEntry, position) {
    this.images.splice(position, 1);
    this.docs.splice(position, 1);

    this.storage.get(STORAGE_KEY).then(images => {
      const arr = JSON.parse(images);
      const filtered = arr.filter(name => name != fileEntry.name);
      this.storage.set(STORAGE_KEY, JSON.stringify(filtered));

      // tslint:disable-next-line: prefer-const
      let correctPath = fileEntry.filePath.substr(0, fileEntry.filePath.lastIndexOf('/') + 1);

      this.file.removeFile(correctPath, fileEntry.name).then(res => {
        // let value = this.translate.instant('File_removed', { value: this.lang })
        this.presentToast('File_removed');
      });
    });
  }

  startUpload() {
    this.uploading = true;
    console.log(this.uploading);
    console.log('STARTED UPLOAD');
    if (this.images) {
      this.images.forEach(imgEntry => {
        this.getFileFromLocal(imgEntry.filePath);
      });
    }
    if (this.docs) {
      this.docs.forEach(docEntry => {
        this.getFileFromLocal(docEntry.filePath);
      });
    }
    if (!this.images.length && !this.docs.length) {
      this.uploading = false;
      // let value = this.translate.instant('Attachment_Required_to_Proceed', { value: this.lang })
      this.presentToast('Attachment_Required_to_Proceed');
    }
  }

  getFileFromLocal(entry) {
    this.file.resolveLocalFilesystemUrl(entry)
      .then(entry => {
        ( entry as FileEntry).file(file => this.readFile(file));
      })
      .catch(err => {
        // let value = this.translate.instant('Error_while_reading_file', { value: this.lang })
        this.presentToast('Error_while_reading_file');
      });
  }

  readFile(file: any) {
    console.log('FILE TYPE', file.type);
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
    const uploadCall = this.http.post('http://198.12.92.202:5000/upload/single-file', formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.upload_value = Math.round(event.loaded / event.total);
          this.buffer_value = Math.round(event.loaded / event.total) <= 0.9 ? Math.round(event.loaded / event.total) + 0.1 : 1;
        } else if (event instanceof HttpResponse) {
          console.log(event);
          console.log(event.error);
          if (event.error) {
            // let value = this.translate.instant('File_upload_failed', { value: this.lang })
            this.presentToast('File_upload_failed');
          } else {
            // let value = this.translate.instant('File_upload_success', { value: this.lang })
            this.presentToast('File_upload_success');
            console.log('SUCCESS IS WORKING');

            this.storage.get('id').then(id => {

            let file_message = this.feedForm.value;
            file_message.attachment = name;
            file_message.admin_id = id;
            file_message.file = true;
            file_message.fileType = this.currentFileType;
            file_message.groups = this.feed_groups;
            console.log('FILE MESSAGE', file_message);
            this.groupService.createFeed(file_message).subscribe((res) => {
                  console.log('RESULT::', res);
                  this.uploading = false;
                  this.upload_value = 0;
                  this.buffer_value = 0.1;
                  this.images = [];
                  this.docs = [];
                  this.currentFileType = new String();
                  // this.router.navigate(['home/tabs/tab2']);
                  this.events.publish('feed:posted', { posted: true });
                  this.router.navigateByUrl('home/tabs/tab2');
                  this.reset();
                  this.ref.detectChanges();
                });
              });

          }
        }

      }, err => {
        console.log('UPLOAD FAILED', err);
        this.uploading = false;
        this.images = [];
        this.docs = [];
      });
  }

  reset() {
    this.feedForm.controls.text.reset();
  }

  getExt(entry) {
    let file = entry.path.toString();
    let splits = file.split('.');
    let ext = splits[(splits.length - 1)];
    let isnum = /^\d+$/.test(ext);
    if (ext == 'jpg' || ext == 'jpeg' || ext == 'png' || ext == 'gif' || ext == '' || isnum == true || file.includes('data:image')) {
      return 'image';
    } else {
      return 'video';
    }
  }

  getFileExtension(entry) {
    let file = entry.toString();
    let splits = file.split('.');
    let ext = splits[(splits.length - 1)];
    return ext;
  }


  async selectAFile() {
    if (!this.platform.is('ios') && !this.platform.is('android')) {
      console.log('desktop');
      document.getElementById('file').click();
    } else {
          this.fileChooser.open().then(fileURI => {
            this.startProcess(fileURI, 'doc', null);
          });
      }
  }

  deleteDoc(pos) {
    this.docs.splice(pos, 1);
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
}
