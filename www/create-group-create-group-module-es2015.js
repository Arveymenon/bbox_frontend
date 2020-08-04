(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-group-create-group-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/create-group/create-group.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/create-group/create-group.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n          <ion-button (click)=\"back()\">\n            <ion-icon class=\"back-button\" slot=\"icon-only\" name=\"md-arrow-back\"></ion-icon>\n          </ion-button>\n      </ion-buttons>\n    <h1 class=\"ion-title\">{{ groupType == 1 ? 'Create a Group' : 'Create a Subscriber List' |translate}}</h1>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main\">\n    <p class=\"header\">{{'Enter Details'|translate}}</p>\n\n\n    <div class=\"user-container\">\n      <img class=\"user-photo\" *ngIf=\"groupType == 1\" [src]=\"this.images[0] ? this.images[0].path : null\" onError=\"this.src='assets/images/group.png';\">\n      <img class=\"user-photo\" *ngIf=\"groupType == 2\" [src]=\"this.images[0] ? this.images[0].path : null\" onError=\"this.src='assets/images/user.png';\">\n      <!-- 'https://graph.facebook.com/10219749290953972/picture' -->\n      <input type=\"file\" (change)=\"getFileFromBrowser($event, 'image')\" id=\"group_image\" accept=\"image/*\" style=\"display: none\">\n      <ion-icon class=\"settings-icon group-icon\" (click)=\"selectImage()\" name=\"md-camera\"></ion-icon>\n    </div>\n\n\n    <form [formGroup]=\"groupform\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"login-form\">\n        <ion-item class=\"rounded\" lines=\"none\">\n          <ion-input type=\"text\" placeholder=\"{{ groupType == 1 ? 'Group Name' : 'Subscriber List Name' |translate}}\" formControlName=\"name\"></ion-input>\n          <!-- <img class=\"camera-icon\" (click)=\"SelectImage()\" src=\"assets/images/camera.png\"> -->\n          <input type=\"file\" (change)=\"getFileFromBrowser($event, 'image')\" id=\"image\" accept=\"image/*\" style=\"display: none\">\n        </ion-item> \n     \n        <ion-item class=\"rounded\" lines=\"none\">\n          <ion-textarea placeholder=\"{{ groupType == 1 ? 'Group Description' : 'Subscriber List Description' |translate}}...\" name=\"description\" formControlName=\"description\" rows=\"5\"></ion-textarea>\n        </ion-item>\n        \n        <div class=\"login-button\">\n            <!-- <ion-button expand=\"block\" shape=\"round\" routerLink=\"addmember\">Create</ion-button> -->\n            <ion-button expand=\"block\" shape=\"round\" type=\"submit\">{{'Create'|translate}}</ion-button>\n        </div>\n    </div>\n    </form>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/create-group/create-group.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/create-group/create-group.module.ts ***!
  \*****************************************************/
/*! exports provided: CreateGroupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateGroupPageModule", function() { return CreateGroupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _create_group_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-group.page */ "./src/app/create-group/create-group.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








const routes = [
    {
        path: '',
        component: _create_group_page__WEBPACK_IMPORTED_MODULE_6__["CreateGroupPage"]
    }
];
let CreateGroupPageModule = class CreateGroupPageModule {
};
CreateGroupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_create_group_page__WEBPACK_IMPORTED_MODULE_6__["CreateGroupPage"]]
    })
], CreateGroupPageModule);



/***/ }),

/***/ "./src/app/create-group/create-group.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/create-group/create-group.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  margin: 25px !important; }\n\n.ion-title {\n  text-align: left !important;\n  font-size: 17px;\n  font-weight: 600;\n  padding-left: 20px;\n  margin: 15px 0 15px 0; }\n\n.back-button {\n  font-size: 25px; }\n\n.header {\n  color: #1A1A1A;\n  font-weight: bold;\n  font-size: 18px; }\n\n.login-form {\n  margin-top: 30px;\n  text-align: center; }\n\n.camera-icon {\n  height: 35px; }\n\n.login-form ion-item {\n  margin: 30px auto 0 auto;\n  max-width: 500px; }\n\n.rounded {\n  border: 2px solid #E2E2E2;\n  margin: 0 50px 0 50px;\n  --border-width: 0 0 0 0;\n  border-radius: 8px; }\n\n.login-button {\n  text-align: center;\n  margin: 100px auto 0 auto;\n  max-width: 150px;\n  --box-shadow: none; }\n\n.user-container {\n  margin-top: 50px;\n  text-align: center; }\n\n.user-photo {\n  border-radius: 50%;\n  height: 100px;\n  width: 100px; }\n\n.settings-icon {\n  width: 25px;\n  height: 25px;\n  position: relative;\n  right: 30px;\n  background: #fff;\n  border-radius: 50%;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n\n.settings-icon .icon-inner {\n  width: 15px;\n  margin: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYmJveF9mcm9udGVuZC9zcmMvYXBwL2NyZWF0ZS1ncm91cC9jcmVhdGUtZ3JvdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksdUJBQXVCLEVBQUE7O0FBSTNCO0VBQ0ksMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixnQkFBZTtFQUNmLGtCQUFpQjtFQUNqQixxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSxlQUFjLEVBQUE7O0FBS2xCO0VBQ0ksY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBSW5CO0VBQ0ksZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSx3QkFBd0I7RUFDeEIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0kseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQix1QkFBZTtFQUNmLGtCQUNKLEVBQUE7O0FBRUE7RUFDSSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixrQkFBYSxFQUFBOztBQUdqQjtFQUNJLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVksRUFBQTs7QUFJZDtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLCtHQUFtRyxFQUFBOztBQUdyRztFQUNFLFdBQVc7RUFDWCxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGUtZ3JvdXAvY3JlYXRlLWdyb3VwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vUGFnZSBTdHlsZXNcblxuLm1haW57XG4gICAgbWFyZ2luOiAyNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi8vSW9uIGhlYWRlciBTdHlsZXNcbi5pb24tdGl0bGV7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBmb250LXdlaWdodDo2MDA7XG4gICAgcGFkZGluZy1sZWZ0OjIwcHg7XG4gICAgbWFyZ2luOiAxNXB4IDAgMTVweCAwO1xufVxuXG4uYmFjay1idXR0b257XG4gICAgZm9udC1zaXplOjI1cHg7XG59XG5cbi8vSGVhZGVyIFN0eWxlc1xuXG4uaGVhZGVye1xuICAgIGNvbG9yOiAjMUExQTFBO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLy9Gb3JtIFN0eWxlc1xuLmxvZ2luLWZvcm17XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYW1lcmEtaWNvbntcbiAgICBoZWlnaHQ6IDM1cHg7XG59XG5cbi5sb2dpbi1mb3JtIGlvbi1pdGVte1xuICAgIG1hcmdpbjogMzBweCBhdXRvIDAgYXV0bztcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xufVxuXG4ucm91bmRlZHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRTJFMkUyO1xuICAgIG1hcmdpbjogMCA1MHB4IDAgNTBweDtcbiAgICAtLWJvcmRlci13aWR0aDogMCAwIDAgMDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHhcbn1cblxuLmxvZ2luLWJ1dHRvbntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxMDBweCBhdXRvIDAgYXV0bztcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLnVzZXItY29udGFpbmVye1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAudXNlci1waG90b3tcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cblxuXG4gIC5zZXR0aW5ncy1pY29ue1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcmlnaHQ6IDMwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMTIpO1xuICB9XG5cbiAgLnNldHRpbmdzLWljb24gLmljb24taW5uZXIge1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/create-group/create-group.page.ts":
/*!***************************************************!*\
  !*** ./src/app/create-group/create-group.page.ts ***!
  \***************************************************/
/*! exports provided: CreateGroupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateGroupPage", function() { return CreateGroupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _shared_group_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/group.service */ "./src/app/shared/group.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/ngx/index.js");



















const STORAGE_KEY = 'my_files';
let CreateGroupPage = class CreateGroupPage {
    constructor(platform, formBuilder, groupService, toastCtrl, router, toastController, storage, navCtrl, file, transfer, loader, filePath, fileChooser, translate, camera, ref, webview, actionSheetCtrl, androidPermissions, http, storageService, crop) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.groupService = groupService;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.toastController = toastController;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.file = file;
        this.transfer = transfer;
        this.loader = loader;
        this.filePath = filePath;
        this.fileChooser = fileChooser;
        this.translate = translate;
        this.camera = camera;
        this.ref = ref;
        this.webview = webview;
        this.actionSheetCtrl = actionSheetCtrl;
        this.androidPermissions = androidPermissions;
        this.http = http;
        this.storageService = storageService;
        this.crop = crop;
        this.lang = 'EN';
        this.images = [];
        this.uploading = false;
        this.id = "";
        this.avatar = false;
        this.ANDROID_PERMISSIONS = [
            'android.permission.READ_EXTERNAL_STORAGE',
            'android.permission.WRITE_EXTERNAL_STORAGE',
        ];
        this.storage.get('language')
            .then(lang => {
            if (lang) {
                this.lang = lang;
            }
        });
        this.storage.get('id').then((val) => {
            this.id = val;
            this.groupform.patchValue({
                admin_id: val
            });
            console.log(this.groupform.value);
        });
        this.groupType = this.storageService.getGroupType();
        console.log('GROUP TYPE', this.groupType);
    }
    ngOnInit() {
        this.groupform = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    back() {
        this.navCtrl.pop();
    }
    onSubmit() {
        // if((!this.platform.is('ios') && !this.platform.is('android')) && this.images){
        //   this.uploading = true;
        //   let new_name = this.createFileName(this.images[0].name)
        //   let formData:FormData = new FormData();
        //   formData.append('image', this.images[0].filePath, new_name);
        //   this.uploadFileData(formData, new_name);
        // }
        // else {
        this.loader.presentLoading();
        if (!this.groupform.invalid) {
            if (this.avatar) {
                if (this.platform.is('ios') || this.platform.is('android')) {
                    this.startUpload();
                }
            }
            else {
                this.postGroup(this.groupform.value);
            }
        }
        else {
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
    showToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // let value = this.translate.instant(['Group_Added_Successfully'], { value: this.lang })
            this.storage.get('language').then((language) => {
                console.log(language);
                this.translate.get("Group_Added_Successfully", { value: language })
                    .subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    const toast = yield this.toastCtrl.create({
                        message: res,
                        duration: 3000,
                        position: "bottom",
                    });
                    toast.present();
                    this.ref.detectChanges();
                }));
            });
        });
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
    presentToast(text) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.storage.get('language').then((language) => {
                console.log(language);
                this.translate.get(text, { value: language })
                    .subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    const toast = yield this.toastCtrl.create({
                        message: res,
                        duration: 3000,
                        position: "bottom",
                    });
                    toast.present();
                    this.ref.detectChanges();
                }));
            });
            // const toast = await this.toastCtrl.create({
            //   message: text,
            //   position: 'bottom',
            //   duration: 3000
            // });
            // await toast.present();
        });
    }
    selectImage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.platform.is('ios') && !this.platform.is('android')) {
                console.log('desktop');
                document.getElementById('image').click();
            }
            else {
                let value = this.translate.instant(['Select_Image_source', 'Load_from_Library', 'Use_Camera', 'cancel'], { value: this.lang });
                console.log(value);
                const actionSheet = yield this.actionSheetCtrl.create({
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
                yield actionSheet.present();
            }
        });
    }
    takePicture(sourceType) {
        var options = {
            quality: 65,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(imagePath => {
            this.crop.crop(imagePath, { quality: 75 }).then(newImage => {
                this.startProcess(newImage, 'image', sourceType);
            });
        });
    }
    startProcess(file, type, sourceType) {
        this.images = [];
        console.log("PROCESS STARTED");
        this.currentFileType = type;
        // if ((this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) || (this.platform.is('android') && type == 'doc')) {
        console.log("FILE: ", file);
        let path = file.toString();
        if (type != 'doc') {
            file = path.indexOf('file://') > -1 ? file : 'file://' + file.toString();
        }
        this.filePath.resolveNativePath(file)
            .then(filePath => {
            console.log("FILE PATH", filePath);
            let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            let currentName = new String();
            if (type === 'image') {
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
        let ext = this.getFileExtension(fileName);
        console.log("EXT", ext);
        var d = new Date(), n = d.getTime(), newFileName = n + '.' + ext;
        console.log("FILE NAME", fileName);
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
                console.log("COULD NOT STORE FILE", error);
                // let value = this.translate.instant(['Error_while_storing_file'], { value: this.lang })
                this.presentToast("Error_while_storing_file");
            });
        });
    }
    updateStoredFiles(name, oldName) {
        this.storage.get(STORAGE_KEY).then(files => {
            let arr = JSON.parse(files);
            if (!arr) {
                let newFiles = [name];
                this.storage.set(STORAGE_KEY, JSON.stringify(newFiles));
            }
            else {
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
                this.avatar = true;
                this.ref.detectChanges(); // trigger change detection cycle
                console.log("NEW IMGS", this.images);
            }
            // if(this.platform.is('ios') || this.platform.is('android')){
            //   this.startUpload();
            // }
        });
    }
    pathForImage(img) {
        if (img === null) {
            return '';
        }
        else {
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
                this.getFileFromLocal(imgEntry.filePath);
            });
        }
    }
    getFileFromLocal(entry) {
        this.file.resolveLocalFilesystemUrl(entry)
            .then(entry => {
            entry.file(file => this.readFile(file));
        })
            .catch(err => {
            // let value = this.translate.instant(['Error_while_reading_file'], { value: this.lang })
            this.presentToast("Error_while_reading_file");
        });
    }
    readFile(file) {
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
    uploadFileData(formData, name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const uploadCall = this.http.post("http://198.12.92.202:5000/upload/single-file", formData)
                .subscribe((res) => {
                console.log(res);
                console.log(res['error']);
                if (res['error']) {
                    // let value = this.translate.instant(['File_upload_failed'], { value: this.lang })
                    this.presentToast("File_upload_failed");
                }
                else {
                    // let value = this.translate.instant(['File_upload_success'], { value: this.lang })
                    this.presentToast("File_upload_success");
                    let create = this.groupform.value;
                    create.avatar = name;
                    this.postGroup(create);
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
                console.log("UPLOAD FAILED", err);
                this.uploading = false;
                this.images = [];
            });
        });
    }
    checkPermissions() {
        console.log('Requesting Android Permissions');
        return new Promise((resolve, reject) => {
            this.androidPermissions.requestPermissions(this.ANDROID_PERMISSIONS)
                .then(() => {
                const promisesArray = [];
                this.ANDROID_PERMISSIONS.forEach((permission) => {
                    console.log('Checking ', permission);
                    promisesArray.push(this.androidPermissions.checkPermission(permission));
                });
                Promise.all(promisesArray).then((responses) => {
                    let allHasPermissions = true;
                    responses.forEach((response, i) => {
                        allHasPermissions = response.hasPermission;
                        if (!allHasPermissions) {
                            reject(new Error('Permissions denied: ' + this.ANDROID_PERMISSIONS[i]));
                        }
                    });
                    resolve();
                }).catch((err) => { console.log(err); });
            })
                .catch((err) => console.error('Error requesting permissions: ', err));
        });
    }
    getFileFromBrowser(event, type) {
        this.images = [];
        console.log(event);
        console.log(event.target['files'][0]);
        let fileList = event.target['files'];
        if (fileList.length > 0) {
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
            if (type != 'doc') {
                this.images = [newEntry, ...this.images];
                this.currentFileType = type;
            }
        };
        reader.readAsDataURL(file);
    }
};
CreateGroupPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _shared_group_service__WEBPACK_IMPORTED_MODULE_7__["GroupService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__["File"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__["FileTransfer"] },
    { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_16__["LoaderService"] },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_10__["FilePath"] },
    { type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_11__["FileChooser"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_14__["WebView"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_13__["AndroidPermissions"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_17__["StorageService"] },
    { type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_18__["Crop"] }
];
CreateGroupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-group',
        template: __webpack_require__(/*! raw-loader!./create-group.page.html */ "./node_modules/raw-loader/index.js!./src/app/create-group/create-group.page.html"),
        providers: [_shared_group_service__WEBPACK_IMPORTED_MODULE_7__["GroupService"]],
        styles: [__webpack_require__(/*! ./create-group.page.scss */ "./src/app/create-group/create-group.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _shared_group_service__WEBPACK_IMPORTED_MODULE_7__["GroupService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__["File"],
        _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__["FileTransfer"],
        _services_loader_service__WEBPACK_IMPORTED_MODULE_16__["LoaderService"],
        _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_10__["FilePath"],
        _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_11__["FileChooser"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_14__["WebView"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
        _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_13__["AndroidPermissions"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"],
        _services_storage_service__WEBPACK_IMPORTED_MODULE_17__["StorageService"],
        _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_18__["Crop"]])
], CreateGroupPage);



/***/ })

}]);
//# sourceMappingURL=create-group-create-group-module-es2015.js.map