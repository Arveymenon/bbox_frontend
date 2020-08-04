(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~create-feed-create-feed-module~group-chat-admin-group-chat-admin-module~group-chat-group-cha~c0185a8f"],{

/***/ "./src/app/services/helper.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/helper.service.ts ***!
  \********************************************/
/*! exports provided: HelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperService", function() { return HelperService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_group_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/group.service */ "./src/app/shared/group.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm5/ngx-socket-io.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");





















var STORAGE_KEY = 'my_files';
var STORAGE_DIRECTORY = 'B-Box Files';
var HelperService = /** @class */ (function () {
    function HelperService(route, storage, location, formBuilder, groupService, router, sanitizer, file, actionSheetCtrl, transfer, loadingCtrl, imagePicker, navCtrl, 
    // public navParams: NavParams,
    toastCtrl, camera, modalCtrl, webview, platform, filePath, fileChooser, http, androidPermissions, socket, modalController, translate, fileOpener) {
        var _this = this;
        this.route = route;
        this.storage = storage;
        this.location = location;
        this.formBuilder = formBuilder;
        this.groupService = groupService;
        this.router = router;
        this.sanitizer = sanitizer;
        this.file = file;
        this.actionSheetCtrl = actionSheetCtrl;
        this.transfer = transfer;
        this.loadingCtrl = loadingCtrl;
        this.imagePicker = imagePicker;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.camera = camera;
        this.modalCtrl = modalCtrl;
        this.webview = webview;
        this.platform = platform;
        this.filePath = filePath;
        this.fileChooser = fileChooser;
        this.http = http;
        this.androidPermissions = androidPermissions;
        this.socket = socket;
        this.modalController = modalController;
        this.translate = translate;
        this.fileOpener = fileOpener;
        this.ANDROID_PERMISSIONS = [
            'android.permission.READ_EXTERNAL_STORAGE',
            'android.permission.WRITE_EXTERNAL_STORAGE',
        ];
        this.storage.get('id').then(function (val) {
            if (val) {
                _this.user_id = val;
            }
        });
    }
    HelperService.prototype.loadStoredImages = function () {
        var _this = this;
        this.storage.get(STORAGE_KEY).then(function (images) {
            if (images) {
                var arr = JSON.parse(images);
                _this.images = [];
                for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
                    var img = arr_1[_i];
                    var filePath = _this.file.dataDirectory + img;
                    var resPath = _this.pathForImage(filePath);
                    _this.images.push({ name: img, path: resPath, filePath: filePath });
                }
            }
        });
    };
    HelperService.prototype.selectImage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var actionSheet;
                        var _this = this;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!(!this.platform.is('ios') && !this.platform.is('android'))) return [3 /*break*/, 1];
                                    console.log('desktop');
                                    document.getElementById('image').click();
                                    return [3 /*break*/, 4];
                                case 1: return [4 /*yield*/, this.actionSheetCtrl.create({
                                        header: "Select Image source",
                                        buttons: [{
                                                text: 'Load from Library',
                                                icon: 'ios-grid',
                                                handler: function () {
                                                    _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY)
                                                        .then(function (taken) {
                                                        if (taken) {
                                                            resolve({
                                                                images: _this.images,
                                                                docs: _this.docs,
                                                            });
                                                        }
                                                    });
                                                }
                                            },
                                            {
                                                text: 'Use Camera',
                                                icon: 'camera',
                                                handler: function () {
                                                    _this.takePicture(_this.camera.PictureSourceType.CAMERA)
                                                        .then(function (taken) {
                                                        if (taken) {
                                                            resolve({
                                                                images: _this.images,
                                                                docs: _this.docs,
                                                            });
                                                        }
                                                    });
                                                }
                                            },
                                            {
                                                icon: 'close',
                                                text: 'Cancel',
                                                role: 'cancel'
                                            }]
                                    })];
                                case 2:
                                    actionSheet = _a.sent();
                                    return [4 /*yield*/, actionSheet.present()];
                                case 3:
                                    _a.sent();
                                    _a.label = 4;
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    HelperService.prototype.takePicture = function (sourceType) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var options = {
                quality: 65,
                sourceType: sourceType,
                saveToPhotoAlbum: false,
                correctOrientation: true
            };
            _this.camera.getPicture(options)
                .then(function (imagePath) {
                _this.startProcess(imagePath, 'image', sourceType)
                    .then(function (started) {
                    _this.copyFileToLocalDir(started.path, started.name, started.createdName)
                        .then(function (copy) {
                        _this.updateStoredFiles(copy.newFileName, copy.currentName)
                            .then(function (updated) {
                            if (updated) {
                                resolve({
                                    images: _this.images,
                                    docs: _this.docs,
                                });
                            }
                            else {
                                reject(updated);
                            }
                        });
                    });
                });
            });
        });
    };
    HelperService.prototype.selectVideoFromGallery = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.platform.is('ios') && !_this.platform.is('android')) {
                console.log('desktop');
                document.getElementById('video').click();
            }
            else {
                var options = {
                    quality: 65,
                    destinationType: _this.camera.DestinationType.FILE_URI,
                    mediaType: _this.camera.MediaType.VIDEO,
                    sourceType: _this.camera.PictureSourceType.PHOTOLIBRARY,
                };
                _this.camera.getPicture(options)
                    .then(function (imagePath) {
                    _this.startProcess(imagePath, 'video', _this.camera.PictureSourceType.PHOTOLIBRARY)
                        .then(function (started) {
                        _this.copyFileToLocalDir(started.path, started.name, started.createdName)
                            .then(function (copy) {
                            _this.updateStoredFiles(copy.newFileName, copy.currentName)
                                .then(function (updated) {
                                if (updated) {
                                    resolve({
                                        images: _this.images,
                                        docs: _this.docs,
                                    });
                                }
                            });
                        });
                    });
                });
            }
        });
    };
    HelperService.prototype.startProcess = function (file, type, sourceType) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.docs = [];
            _this.images = [];
            console.log("PROCESS STARTED");
            _this.currentFileType = type;
            if ((_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) || (_this.platform.is('android') && type == 'doc')) {
                console.log("FILE: ", file);
                var path = file.toString();
                if (type != 'doc') {
                    file = path.indexOf('file://') > -1 ? file : 'file://' + file.toString();
                }
                _this.filePath.resolveNativePath(file)
                    .then(function (filePath) {
                    console.log("FILE PATH", filePath);
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = new String();
                    if (type === 'image') {
                        currentName = file.substring(file.lastIndexOf('/') + 1, file.lastIndexOf('?'));
                    }
                    else {
                        currentName = filePath.substring(filePath.lastIndexOf('/') + 1);
                    }
                    resolve({
                        path: correctPath,
                        name: currentName,
                        createdName: _this.createFileName(filePath.substring(filePath.lastIndexOf('/') + 1))
                    });
                });
            }
            else {
                var currentName = file.substr(file.lastIndexOf('/') + 1);
                var correctPath = file.substr(0, file.lastIndexOf('/') + 1);
                resolve({
                    path: correctPath,
                    name: currentName,
                    createdName: _this.createFileName(file.lastIndexOf('/') + 1)
                });
            }
        });
    };
    HelperService.prototype.createFileName = function (fileName) {
        var ext = this.getFileExtension(fileName);
        console.log("EXT", ext);
        var d = new Date(), n = d.getTime(), newFileName = n + '.' + ext;
        console.log("FILE NAME", fileName);
        return newFileName;
    };
    HelperService.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.checkPermissions().then(function () {
                _this.file.copyFile(namePath, currentName, _this.file.dataDirectory, newFileName).then(function (success) {
                    _this.file.copyFile(namePath, currentName, _this.file.externalRootDirectory + '/' + STORAGE_DIRECTORY, newFileName).then(function (success) {
                        if (success) {
                            console.log('Saved to Local Storage');
                            resolve({
                                newFileName: newFileName,
                                currentName: currentName
                            });
                        }
                    }, function (err) {
                        console.log('Error Saving to Local Storage', err);
                        reject(err);
                    });
                }, function (error) {
                    console.log("COULD NOT STORE FILE", error);
                    // let value = this.translate.instant('Error_while_storing_file', { value: this.lang });
                    _this.presentToast("Error_while_storing_file");
                    reject(error);
                });
            });
        });
    };
    HelperService.prototype.updateStoredFiles = function (name, oldName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(STORAGE_KEY).then(function (files) {
                var arr = JSON.parse(files);
                if (!arr) {
                    var newFiles = [name];
                    _this.storage.set(STORAGE_KEY, JSON.stringify(newFiles));
                }
                else {
                    arr.push(name);
                    _this.storage.set(STORAGE_KEY, JSON.stringify(arr));
                }
                var filePath = _this.file.dataDirectory + name;
                //IF NOT DOC
                if (_this.currentFileType != 'doc') {
                    var resPath = _this.pathForImage(filePath);
                    var newEntry = {
                        name: name,
                        path: resPath,
                        filePath: filePath,
                        displayName: oldName
                    };
                    _this.images = [newEntry].concat(_this.images);
                    console.log("NEW IMGS", _this.images);
                }
                //IF DOC
                else {
                    var newEntry = {
                        name: name,
                        filePath: filePath
                    };
                    _this.docs = [newEntry].concat(_this.docs);
                    console.log("NEW DOCS", _this.docs);
                }
                resolve(true);
            })
                .catch(function (err) { return reject(err); });
        });
    };
    HelperService.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            var converted = this.webview.convertFileSrc(img);
            return converted;
        }
    };
    HelperService.prototype.deleteFile = function (fileEntry, position) {
        var _this = this;
        this.images.splice(position, 1);
        this.storage.get(STORAGE_KEY).then(function (images) {
            var arr = JSON.parse(images);
            var filtered = arr.filter(function (name) { return name != fileEntry.name; });
            _this.storage.set(STORAGE_KEY, JSON.stringify(filtered));
            // tslint:disable-next-line: prefer-const
            var correctPath = fileEntry.filePath.substr(0, fileEntry.filePath.lastIndexOf('/') + 1);
            _this.file.removeFile(correctPath, fileEntry.name).then(function (res) {
                // let value = this.translate.instant('File_removed', { value: this.lang });
                _this.presentToast("File_removed");
            });
        });
    };
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
    HelperService.prototype.getExt = function (entry) {
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
    };
    HelperService.prototype.getFileExtension = function (entry) {
        var file = entry.toString();
        var splits = file.split('.');
        var ext = splits[(splits.length - 1)];
        return ext;
    };
    HelperService.prototype.selectAFile = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.fileChooser.open().then(function (fileURI) {
                            _this.startProcess(fileURI, 'doc', null)
                                .then(function (started) {
                                _this.copyFileToLocalDir(started.path, started.name, started.createdName)
                                    .then(function (copy) {
                                    _this.updateStoredFiles(copy.newFileName, copy.currentName)
                                        .then(function (updated) {
                                        if (updated) {
                                            resolve({
                                                images: _this.images,
                                                docs: _this.docs,
                                            });
                                        }
                                        else {
                                            reject(updated);
                                        }
                                    });
                                })
                                    .catch(function (err) { return reject(err); });
                            })
                                .catch(function (err) { return reject(err); });
                        })
                            .catch(function (err) { return reject(err); });
                    })];
            });
        });
    };
    HelperService.prototype.openFile = function (fileName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.file.readAsDataURL(_this.file.externalRootDirectory + '/' + STORAGE_DIRECTORY, fileName).then(function (str) {
                var str1 = str.split(';');
                var str2 = str1[0].split(':');
                console.log('mime_type is ' + str2[1]);
                _this.fileOpener.open(_this.file.externalRootDirectory + '/' + STORAGE_DIRECTORY + '/' + fileName, str2[1])
                    .then(function () { return console.log('File is opened'); })
                    .catch(function (e) { return console.log('Error opening file', e); });
            });
        });
    };
    HelperService.prototype.deleteDoc = function (pos) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.docs.splice(pos, 1);
            resolve(true);
        });
    };
    HelperService.prototype.checkPermissions = function () {
        var _this = this;
        console.log('Requesting Android Permissions');
        return new Promise(function (resolve, reject) {
            _this.androidPermissions.requestPermissions(_this.ANDROID_PERMISSIONS)
                .then(function () {
                var promisesArray = [];
                _this.ANDROID_PERMISSIONS.forEach(function (permission) {
                    console.log('Checking ', permission);
                    promisesArray.push(_this.androidPermissions.checkPermission(permission));
                });
                Promise.all(promisesArray).then(function (responses) {
                    var allHasPermissions = true;
                    responses.forEach(function (response, i) {
                        allHasPermissions = response.hasPermission;
                        if (!allHasPermissions) {
                            reject(new Error('Permissions denied: ' + _this.ANDROID_PERMISSIONS[i]));
                        }
                    });
                    resolve();
                }).catch(function (err) { console.log(err); });
            })
                .catch(function (err) { return console.error('Error requesting permissions: ', err); });
        });
    };
    HelperService.prototype.destroyAll = function () {
        this.uploading = false;
        this.images = [];
        this.docs = [];
        this.currentFileType = new String();
    };
    HelperService.prototype.getChatstatus = function (chats, members) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.user_id) {
                reject('Not Logged In');
            }
            else {
                var member = members.filter(function (m) { return m.memberid == _this.user_id; });
                console.log('MEMBER', member);
                if (member.length && (member[0].accepted == false)) {
                    resolve(true);
                }
                if (member.length && (member[0].accepted == true)) {
                    resolve(false);
                }
            }
        });
    };
    HelperService.prototype.acceptGroup = function (gid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var postdata = {
                "id": gid,
                "mid": _this.user_id
            };
            _this.groupService.acceptgroup(postdata).subscribe(function (res) {
                console.log('RESPONSE', res);
                resolve(true);
            }, function (err) {
                reject(err);
            });
        });
    };
    HelperService.prototype.rejectGroup = function (gid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var data = {
                member: _this.user_id
            };
            _this.groupService.removeMember(data, gid).subscribe(function (res) {
                console.log(res);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    HelperService.prototype.downloadFile = function (file) {
        var _this = this;
        console.log('FILE', file);
        var name = file;
        return new Promise(function (resolve, reject) {
            var fileTransfer = _this.transfer.create();
            if (_this.platform.is('cordova')) {
                _this.file.checkDir(_this.file.externalRootDirectory, STORAGE_DIRECTORY)
                    .then(
                // Directory exists, check for file with the same name
                function (_) { return _this.checkFileExists(name)
                    .then(function (exists) {
                    // FILE EXISTS
                    if (exists) {
                        resolve(false);
                    }
                    //FILE DOES NOT EXIST
                    else {
                        fileTransfer.download('http://198.12.92.202/public/uploads/' + file, _this.file.externalRootDirectory + '/' + STORAGE_DIRECTORY + '/' + name).then(function (entry) {
                            // alert('File saved in:  ' + entry.nativeURL);
                            resolve(true);
                        })
                            .catch(function (err) {
                            // alert('Error saving file: ' + err.message);
                            reject(err);
                        });
                    }
                }); })
                    .catch(
                // Directory does not exists, create a new one
                function (err) { return _this.file.createDir(_this.file.externalRootDirectory, STORAGE_DIRECTORY, false)
                    .then(function (response) {
                    // alert('New folder created:  ' + response.fullPath);
                    fileTransfer.download('http://198.12.92.202/public/uploads/' + file, _this.file.externalRootDirectory + '/' + STORAGE_DIRECTORY + '/' + name).then(function (entry) {
                        // alert('File saved in : ' + entry.nativeURL);
                        resolve(true);
                    })
                        .catch(function (err) {
                        // alert('Error saving file:  ' + err.message);
                        reject(err);
                    });
                }).catch(function (err) {
                    // alert('It was not possible to create the dir "downloads". Err: ' + err.message);
                    reject(err);
                }); });
            }
            else {
                //Handle for Browser
                resolve(false);
            }
        });
    };
    HelperService.prototype.checkFileExists = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.platform.is('cordova')) {
                _this.file.checkFile(_this.file.externalRootDirectory, STORAGE_DIRECTORY + '/' + name)
                    .then(function (_) {
                    console.log('EXISTS?', _);
                    resolve(true);
                })
                    // File does not exist yet
                    .catch(function (err) {
                    resolve(false);
                });
            }
            else
                resolve(false);
        });
    };
    HelperService.prototype.getStoredFile = function (name) {
        var _this = this;
        console.log('ENTERED AND STORED NAME', name);
        return new Promise(function (resolve, reject) {
            if (_this.platform.is('cordova')) {
                console.log('Entered');
                _this.file.resolveLocalFilesystemUrl(_this.file.externalRootDirectory + '/' + STORAGE_DIRECTORY + '/' + name)
                    .then(function (fetchedFile) {
                    console.log('FETCHED FILE', fetchedFile);
                    if (fetchedFile.isFile)
                        var viewableFile = _this.pathForImage(fetchedFile.nativeURL);
                    console.log('VIEWABLE FILE', viewableFile);
                    resolve(viewableFile);
                })
                    .catch(function (err) { console.log('ERROR', err); reject(err); });
            }
            else {
                resolve(false);
            }
        });
    };
    HelperService.prototype.findOthers = function (members) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var a = members;
            var b = [];
            a.splice(a.findIndex(function (e) { return e.memberid == _this.user_id; }), 1);
            a.forEach(function (element) {
                b.push(element.memberid);
            });
            // var result = this.data.members.filter(m => m.admin == true)
            resolve(b);
        });
    };
    HelperService.prototype.findAdmin = function (members) {
        return new Promise(function (resolve, reject) {
            var result = members.filter(function (m) { return m.admin == true; });
            result.length ? resolve(result) : reject(false);
        });
    };
    HelperService.prototype.presentToast = function (text) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.storage.get('language').then(function (language) {
                            // console.log(language)
                            _this.translate.get(text, { value: language })
                                .subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var toast;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.toastCtrl.create({
                                                message: res,
                                                duration: 3000,
                                                position: "bottom",
                                            })];
                                        case 1:
                                            toast = _a.sent();
                                            toast.present();
                                            resolve(true);
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                        });
                    })];
            });
        });
    };
    HelperService.prototype.scrollToBottom = function () {
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    };
    HelperService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _shared_group_service__WEBPACK_IMPORTED_MODULE_6__["GroupService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ActionSheetController"] },
        { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__["FileTransfer"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"] },
        { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_11__["ImagePicker"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ToastController"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__["Camera"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"] },
        { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_13__["WebView"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"] },
        { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_14__["FilePath"] },
        { type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_15__["FileChooser"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClient"] },
        { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_17__["AndroidPermissions"] },
        { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_18__["Socket"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslateService"] },
        { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_20__["FileOpener"] }
    ]; };
    HelperService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _shared_group_service__WEBPACK_IMPORTED_MODULE_6__["GroupService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ActionSheetController"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__["FileTransfer"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"],
            _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_11__["ImagePicker"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ToastController"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_13__["WebView"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_14__["FilePath"],
            _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_15__["FileChooser"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClient"],
            _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_17__["AndroidPermissions"],
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_18__["Socket"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslateService"],
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_20__["FileOpener"]])
    ], HelperService);
    return HelperService;
}());



/***/ })

}]);
//# sourceMappingURL=default~create-feed-create-feed-module~group-chat-admin-group-chat-admin-module~group-chat-group-cha~c0185a8f-es5.js.map