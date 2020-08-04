import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Location } from '@angular/common';
import { GroupService } from '../shared/group.service';
import { DomSanitizer } from '@angular/platform-browser';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { ActionSheetController, LoadingController, NavController, ToastController, ModalController, Platform } from '@ionic/angular';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Camera, PictureSourceType, CameraOptions } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { HttpClient } from '@angular/common/http';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Socket } from 'ngx-socket-io';
import { TranslateService } from '@ngx-translate/core';
import { FileOpener } from '@ionic-native/file-opener/ngx';

const STORAGE_KEY = 'my_files';
const STORAGE_DIRECTORY = 'B-Box Files'

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  docs: any[];
  images: any[];
  currentFileType: any;
  ANDROID_PERMISSIONS = [
    'android.permission.READ_EXTERNAL_STORAGE',
    'android.permission.WRITE_EXTERNAL_STORAGE',
  ];
  uploading: boolean;
  user_id: any;

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
    private fileChooser: FileChooser,
    private http: HttpClient,
    private androidPermissions: AndroidPermissions,
    private socket: Socket,
    public modalController: ModalController,
    public translate: TranslateService,
    private fileOpener: FileOpener
  ) {
    this.storage.get('id').then((val: any) => {
      if(val){
        this.user_id = val
      }
    });
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

  async selectImage() {
    return new Promise(async (resolve, reject) => {
      if(!this.platform.is('ios') && !this.platform.is('android')) {
        console.log('desktop')
        document.getElementById('image').click();
      }
      else {
        const actionSheet = await this.actionSheetCtrl.create({
          header: "Select Image source",
          buttons: [{
            text: 'Load from Library',
            icon: 'ios-grid',
            handler: () => {
              this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY)
              .then(taken => {
                if(taken){
                  resolve({
                    images: this.images,
                    docs: this.docs,
                  });
                }
              });
            }
          },
          {
            text: 'Use Camera',
            icon: 'camera',
            handler: () => {
              this.takePicture(this.camera.PictureSourceType.CAMERA)
              .then(taken => {
                if(taken){
                  resolve({
                    images: this.images,
                    docs: this.docs,
                  })
                }
              })
            }
          },
          {
            icon: 'close',
            text: 'Cancel',
            role: 'cancel'
          }]
        });
        await actionSheet.present();
      }
    });
  }
  
  takePicture(sourceType: PictureSourceType) {
    return new Promise((resolve, reject) => {
      var options: CameraOptions = {
          quality: 65,
          sourceType: sourceType,
          saveToPhotoAlbum: false,
          correctOrientation: true
      };

      this.camera.getPicture(options)
        .then(imagePath => {
          this.startProcess(imagePath, 'image', sourceType)
            .then((started: any) => {
              this.copyFileToLocalDir(started.path, started.name, started.createdName)
                .then((copy: any) => {
                  this.updateStoredFiles(copy.newFileName, copy.currentName)
                    .then(updated => {
                      if(updated){
                        resolve({
                          images: this.images,
                          docs: this.docs,
                        })
                      }
                      else{
                        reject(updated);
                      }
                    });
                });
            });
        });
    });
  }

selectVideoFromGallery() {
  return new Promise((resolve, reject) => {
    if(!this.platform.is('ios') && !this.platform.is('android')){
      console.log('desktop')
      document.getElementById('video').click();
    }
    else {
      const options: CameraOptions = {
        quality: 65,
        destinationType: this.camera.DestinationType.FILE_URI,
        mediaType: this.camera.MediaType.VIDEO,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      }
    
      this.camera.getPicture(options)
        .then(imagePath => {
          this.startProcess(imagePath, 'video', this.camera.PictureSourceType.PHOTOLIBRARY)
            .then((started: any) => {
              this.copyFileToLocalDir(started.path, started.name, started.createdName)
                .then((copy: any) => {
                  this.updateStoredFiles(copy.newFileName, copy.currentName)
                    .then(updated => {
                      if(updated){
                        resolve({
                          images: this.images,
                          docs: this.docs,
                        });
                      }
                    });
                });
            }); 
        });                  
    }
  });
}

startProcess(file, type, sourceType){
  return new Promise((resolve, reject) => {
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

                  resolve({
                    path: correctPath,
                    name: currentName,
                    createdName: this.createFileName(filePath.substring(filePath.lastIndexOf('/') + 1))
                  });
              }); 
      } else {
          var currentName = file.substr(file.lastIndexOf('/') + 1);
          var correctPath = file.substr(0, file.lastIndexOf('/') + 1);
          resolve({
            path: correctPath,
            name: currentName,
            createdName: this.createFileName(file.lastIndexOf('/') + 1)
          });
      }
  });
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
    return new Promise((resolve, reject) => {
      this.checkPermissions().then(() => {
        this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
          this.file.copyFile(namePath, currentName, this.file.externalRootDirectory + '/' + STORAGE_DIRECTORY, newFileName).then(success => {
            if(success){
              console.log('Saved to Local Storage');
              resolve({
                newFileName: newFileName,
                currentName: currentName
              })
            }
          }, err => {
            console.log('Error Saving to Local Storage', err)
            reject(err)
          });
          
        }, error => {
            console.log("COULD NOT STORE FILE", error)
            // let value = this.translate.instant('Error_while_storing_file', { value: this.lang });
            this.presentToast("Error_while_storing_file");
            reject(error)
        });
      })
    });
  }

  updateStoredFiles(name, oldName) {
    return new Promise((resolve, reject) => {
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

        resolve(true);
      })
      .catch(err => reject(err));
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

  // startUpload() {
  //   this.uploading = true;
  //   console.log(this.uploading);
  //   console.log('STARTED UPLOAD');
  //   if(this.images){
  //     this.images.forEach(imgEntry => {
  //       this.getFileFromLocal(imgEntry.filePath)
  //     });  
  //   }
  //   if(this.docs){
  //     this.docs.forEach(docEntry => {
  //         this.getFileFromLocal(docEntry.filePath)
  //       });
  //   }
  // }

  // getFileFromLocal(entry){
  //   this.file.resolveLocalFilesystemUrl(entry)
  //         .then(entry => {
  //             ( < FileEntry > entry).file(file => this.readFile(file))
  //         })
  //         .catch(err => {
  //           // let value = this.translate.instant('Error_while_reading_file', { value: this.lang });
  //             this.presentToast("Error_while_reading_file");
  //         });
  // }

  // readFile(file: any) {
  //   console.log("FILE TYPE",file.type);
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //       const formData = new FormData();
  //       const fileBlob = new Blob([reader.result], {
  //           type: file.type
  //       });
  //       formData.append('image', fileBlob, file.name);
  //       this.uploadFileData(formData, file.name);
  //   };
  //   reader.readAsArrayBuffer(file);
  // }

  // async uploadFileData(formData: FormData, name) {
  //   const uploadCall = this.http.post("http://198.12.92.202:5000/upload/single-file", formData)
  //       .subscribe((res) => {
  //             console.log(res)
  //             console.log(res['error'])
  //             if (res['error']) {
  //               // let value = this.translate.instant('File_upload_failed', { value: this.lang });
  //                 this.presentToast("File_upload_failed");
  //             } else {
  //               // let value = this.translate.instant('File_upload_success', { value: this.lang });
  //                 this.presentToast("File_upload_success");
  //                 console.log("SUCCESS IS WORKING")

  //                 let file_message = this.groupform.value;
  //                 file_message.messageBy = this.adminidval;
  //                 file_message.attachment = name
  //                 file_message.file = true
  //                 file_message.fileType = this.currentFileType;
  //                 file_message.messageFor = this.video_members;
  //                 this.cleanUpload(file_message);
  //             }
  //           },err => {
  //             console.log("UPLOAD FAILED", err)
  //             this.uploading = false;
  //             this.images = [];
  //             this.docs = [];
  //           })
  // }

  // cleanUpload(file_message){
  //   console.log("FILE MESSAGE", file_message);
  //   this.groupService.putChat(file_message, this.id).subscribe((res) => {
  //     this.uploading = false;
  //     this.images = [];
  //     this.docs = [];
  //     this.socket.emit('send-message', { 
  //       text: file_message.message, 
  //       room: this.chat_room,
  //       sent_from: this.temp_name,
  //       type: 1, // 1-> text,
  //       messageFor: file_message.messageFor
  //     })
  //     this.reset();
  //     this.currentFileType = new String();
  //     this.router.navigate(['group-chat-admin',this.chat_room]);
  //     // this.groupchatadmin.chatData();
  //     // this.location.back();
  //     this.ref.detectChanges();
  //   });
  // }

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

  getFileExtension(entry){
    var file = entry.toString();
    var splits = file.split('.');
    var ext = splits[(splits.length - 1)];
    return ext;
  }


  async selectAFile() {
    return new Promise((resolve, reject) => {
      this.fileChooser.open().then(fileURI => {
        this.startProcess(fileURI, 'doc', null)
        .then((started: any) => {
          this.copyFileToLocalDir(started.path, started.name, started.createdName)
            .then((copy: any) => {
              this.updateStoredFiles(copy.newFileName, copy.currentName)
                .then(updated => {
                  if (updated) {
                    resolve({
                      images: this.images,
                      docs: this.docs,
                    })
                  }
                  else{
                    reject(updated);
                  }
                })
            })
            .catch(err => reject(err));
        })
        .catch(err => reject(err));
      })
      .catch(err => reject(err));
    })
  }

  openFile(fileName) {
    return new Promise((resolve, reject) => {

      this.file.readAsDataURL(this.file.externalRootDirectory + '/' + STORAGE_DIRECTORY, fileName).then((str) => {
        const str1 = str.split(';');
        const str2 = str1[0].split(':');
        console.log('mime_type is ' + str2[1]);

        this.fileOpener.open(this.file.externalRootDirectory + '/' + STORAGE_DIRECTORY + '/' + fileName, str2[1])
              .then(() => console.log('File is opened'))
              .catch(e => console.log('Error opening file', e));
      });
    });
  }

  deleteDoc(pos){
    return new Promise((resolve, reject) => {
      this.docs.splice(pos, 1);
      resolve(true);
    });
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

    destroyAll(){
      this.uploading = false;
      this.images = [];
      this.docs = [];
      this.currentFileType = new String();
    }

    getChatstatus(chats, members){
      return new Promise((resolve, reject) => {
        if(!this.user_id){
          reject('Not Logged In');
        }
        else{
          let member = members.filter(m => m.memberid == this.user_id);
          console.log('MEMBER', member)
          if(member.length && (member[0].accepted == false)){
            resolve(true); 
          }
          if(member.length && (member[0].accepted == true)){
            resolve(false); 
          }
        }
      });
    }

    acceptGroup(gid){
      return new Promise((resolve, reject) => {
        let postdata = {
          "id" : gid,
          "mid" : this.user_id
        }
    
        this.groupService.acceptgroup(postdata).subscribe((res) => {
          console.log('RESPONSE', res);
          resolve(true)
        }, err => {
          reject(err)
        });
      });
    }

    rejectGroup(gid){
      return new Promise((resolve, reject) => {
        var data = {
          member: this.user_id
        }
        this.groupService.removeMember(data, gid).subscribe(res => {
          console.log(res);
          resolve(res);
        },
        err => {
          reject(err)
        });
      });
    }

    downloadFile(file){
      console.log('FILE', file)
      var name = file;
      return new Promise((resolve, reject) => {
        const fileTransfer: FileTransferObject = this.transfer.create();
        if (this.platform.is('cordova')) {
          this.file.checkDir(this.file.externalRootDirectory, STORAGE_DIRECTORY)
          .then(
            // Directory exists, check for file with the same name
            _ => this.checkFileExists(name)
            .then(exists => {
              // FILE EXISTS
              if(exists){
                resolve(false);
              }
              //FILE DOES NOT EXIST
              else {
                fileTransfer.download('http://198.12.92.202/public/uploads/' + file, this.file.externalRootDirectory + '/' + STORAGE_DIRECTORY + '/' + name).then((entry) => {
                  // alert('File saved in:  ' + entry.nativeURL);
                  resolve(true);
                })
                .catch((err) =>{
                  // alert('Error saving file: ' + err.message);
                  reject(err);
                })
              }
            })
          )
          .catch(
            // Directory does not exists, create a new one
            err => this.file.createDir(this.file.externalRootDirectory, STORAGE_DIRECTORY, false)
            .then(response => {
              // alert('New folder created:  ' + response.fullPath);
                fileTransfer.download('http://198.12.92.202/public/uploads/' + file, this.file.externalRootDirectory + '/' + STORAGE_DIRECTORY + '/' + name).then((entry) => {
                  // alert('File saved in : ' + entry.nativeURL);
                  resolve(true);
                })
                .catch((err) =>{
                  // alert('Error saving file:  ' + err.message);
                  reject(err);
                });
          
            }).catch(err => {
              // alert('It was not possible to create the dir "downloads". Err: ' + err.message);
              reject(err);
            })			
          );		
        } else {
          //Handle for Browser
          resolve(false);
        }
      });
    }

    checkFileExists(name){
      return new Promise((resolve, reject) => {
        if (this.platform.is('cordova')) {
          this.file.checkFile(this.file.externalRootDirectory, STORAGE_DIRECTORY + '/' + name)
            .then(_ => {
              console.log('EXISTS?', _)
              resolve(true);
            })
            // File does not exist yet
            .catch(err => {
              resolve(false);
          });
        }
        else
          resolve(false)
      });
    }

    public getStoredFile(name) {
      console.log('ENTERED AND STORED NAME', name);
      return new Promise((resolve, reject) => {
        if (this.platform.is('cordova')) {
          console.log('Entered');
          this.file.resolveLocalFilesystemUrl(this.file.externalRootDirectory + '/' + STORAGE_DIRECTORY + '/' + name)
            .then(fetchedFile => {
              console.log('FETCHED FILE', fetchedFile);
              if(fetchedFile.isFile)
                var viewableFile = this.pathForImage(fetchedFile.nativeURL);
              console.log('VIEWABLE FILE', viewableFile)
              resolve(viewableFile);
            })
            .catch(err => {console.log('ERROR', err); reject(err) });
        } else {
          resolve(false);
        }
      });
    }

    findOthers(members) {
      return new Promise((resolve, reject) => {
        let a = members;
        let b = []
        a.splice(a.findIndex(e => e.memberid == this.user_id), 1);
        a.forEach(element => {
          b.push(element.memberid);
        });
        // var result = this.data.members.filter(m => m.admin == true)
        resolve(b);
      });
    }

    findAdmin(members) {
      return new Promise((resolve, reject) => {
        var result = members.filter(m => m.admin == true)
        result.length ? resolve(result) : reject(false);
      });
    }

    async presentToast(text) {
      return new Promise((resolve, reject) => {
        this.storage.get('language').then((language: any)=>{
          // console.log(language)
          
          this.translate.get(text, {value: language})
          .subscribe(async (res: any)=>{
    
            const toast = await this.toastCtrl.create({
              message: res,
              duration: 3000,
              position: "bottom",
            });
            toast.present();
            resolve(true);
          });
        })
      })
    }

    scrollToBottom(){
      window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    }


}
