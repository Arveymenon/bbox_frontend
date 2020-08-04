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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _create_group_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-group.page */ "./src/app/create-group/create-group.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _create_group_page__WEBPACK_IMPORTED_MODULE_6__["CreateGroupPage"]
    }
];
var CreateGroupPageModule = /** @class */ (function () {
    function CreateGroupPageModule() {
    }
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
    return CreateGroupPageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_group_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/group.service */ "./src/app/shared/group.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/ngx/index.js");



















var STORAGE_KEY = 'my_files';
var CreateGroupPage = /** @class */ (function () {
    function CreateGroupPage(platform, formBuilder, groupService, toastCtrl, router, toastController, storage, navCtrl, file, transfer, loader, filePath, fileChooser, translate, camera, ref, webview, actionSheetCtrl, androidPermissions, http, storageService, crop) {
        var _this = this;
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
            .then(function (lang) {
            if (lang) {
                _this.lang = lang;
            }
        });
        this.storage.get('id').then(function (val) {
            _this.id = val;
            _this.groupform.patchValue({
                admin_id: val
            });
            console.log(_this.groupform.value);
        });
        this.groupType = this.storageService.getGroupType();
        console.log('GROUP TYPE', this.groupType);
    }
    CreateGroupPage.prototype.ngOnInit = function () {
        this.groupform = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    CreateGroupPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    CreateGroupPage.prototype.onSubmit = function () {
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
    };
    CreateGroupPage.prototype.postGroup = function (value) {
        var _this = this;
        value.subscriber = this.groupType;
        this.groupService.postGroup(value).subscribe(function (res) {
            _this.loader.dismiss();
            _this.showToast();
            _this.details = res;
            _this.resultArray = [_this.details].map(function (a) { return a["_id"]; });
            console.log(_this.resultArray);
            _this.groupform.reset();
            _this.router.navigate(['add-member/' + _this.resultArray]);
        });
    };
    CreateGroupPage.prototype.showToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // let value = this.translate.instant(['Group_Added_Successfully'], { value: this.lang })
                this.storage.get('language').then(function (language) {
                    console.log(language);
                    _this.translate.get("Group_Added_Successfully", { value: language })
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
                                    this.ref.detectChanges();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                });
                return [2 /*return*/];
            });
        });
    };
    CreateGroupPage.prototype.sharedvalue = function () {
    };
    CreateGroupPage.prototype.loadStoredImages = function () {
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
    CreateGroupPage.prototype.presentToast = function (text) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.storage.get('language').then(function (language) {
                    console.log(language);
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
                                    this.ref.detectChanges();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                });
                return [2 /*return*/];
            });
        });
    };
    CreateGroupPage.prototype.selectImage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var value, actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(!this.platform.is('ios') && !this.platform.is('android'))) return [3 /*break*/, 1];
                        console.log('desktop');
                        document.getElementById('image').click();
                        return [3 /*break*/, 4];
                    case 1:
                        value = this.translate.instant(['Select_Image_source', 'Load_from_Library', 'Use_Camera', 'cancel'], { value: this.lang });
                        console.log(value);
                        return [4 /*yield*/, this.actionSheetCtrl.create({
                                header: value.Select_Image_source,
                                buttons: [{
                                        text: value.Load_from_Library,
                                        icon: 'ios-grid',
                                        handler: function () {
                                            _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                                        }
                                    },
                                    {
                                        text: value.Use_Camera,
                                        icon: 'camera',
                                        handler: function () {
                                            _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                                        }
                                    },
                                    {
                                        icon: 'close',
                                        text: value.cancel,
                                        role: 'cancel'
                                    }
                                ]
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
        });
    };
    CreateGroupPage.prototype.takePicture = function (sourceType) {
        var _this = this;
        var options = {
            quality: 65,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imagePath) {
            _this.crop.crop(imagePath, { quality: 75 }).then(function (newImage) {
                _this.startProcess(newImage, 'image', sourceType);
            });
        });
    };
    CreateGroupPage.prototype.startProcess = function (file, type, sourceType) {
        var _this = this;
        this.images = [];
        console.log("PROCESS STARTED");
        this.currentFileType = type;
        // if ((this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) || (this.platform.is('android') && type == 'doc')) {
        console.log("FILE: ", file);
        var path = file.toString();
        if (type != 'doc') {
            file = path.indexOf('file://') > -1 ? file : 'file://' + file.toString();
        }
        this.filePath.resolveNativePath(file)
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
            _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName(filePath.substring(filePath.lastIndexOf('/') + 1)));
        });
        //   } else {
        // var currentName = file.substr(file.lastIndexOf('/') + 1);
        // var correctPath = file.substr(0, file.lastIndexOf('/') + 1);
        // this.copyFileToLocalDir(correctPath, currentName, this.createFileName(file.lastIndexOf('/') + 1));
        // }
    };
    CreateGroupPage.prototype.createFileName = function (fileName) {
        var ext = this.getFileExtension(fileName);
        console.log("EXT", ext);
        var d = new Date(), n = d.getTime(), newFileName = n + '.' + ext;
        console.log("FILE NAME", fileName);
        return newFileName;
    };
    CreateGroupPage.prototype.getFileExtension = function (entry) {
        var file = entry.toString();
        var splits = file.split('.');
        var ext = splits[(splits.length - 1)];
        return ext;
    };
    CreateGroupPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.checkPermissions().then(function () {
            _this.file.copyFile(namePath, currentName, _this.file.dataDirectory, newFileName).then(function (success) {
                _this.updateStoredFiles(newFileName, currentName);
            }, function (error) {
                console.log("COULD NOT STORE FILE", error);
                // let value = this.translate.instant(['Error_while_storing_file'], { value: this.lang })
                _this.presentToast("Error_while_storing_file");
            });
        });
    };
    CreateGroupPage.prototype.updateStoredFiles = function (name, oldName) {
        var _this = this;
        this.storage.get(STORAGE_KEY).then(function (files) {
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
                _this.avatar = true;
                _this.ref.detectChanges(); // trigger change detection cycle
                console.log("NEW IMGS", _this.images);
            }
            // if(this.platform.is('ios') || this.platform.is('android')){
            //   this.startUpload();
            // }
        });
    };
    CreateGroupPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            var converted = this.webview.convertFileSrc(img);
            return converted;
        }
    };
    CreateGroupPage.prototype.startUpload = function () {
        var _this = this;
        this.uploading = true;
        console.log(this.uploading);
        console.log('STARTED UPLOAD');
        if (this.images) {
            this.images.forEach(function (imgEntry) {
                _this.getFileFromLocal(imgEntry.filePath);
            });
        }
    };
    CreateGroupPage.prototype.getFileFromLocal = function (entry) {
        var _this = this;
        this.file.resolveLocalFilesystemUrl(entry)
            .then(function (entry) {
            entry.file(function (file) { return _this.readFile(file); });
        })
            .catch(function (err) {
            // let value = this.translate.instant(['Error_while_reading_file'], { value: this.lang })
            _this.presentToast("Error_while_reading_file");
        });
    };
    CreateGroupPage.prototype.readFile = function (file) {
        var _this = this;
        console.log("FILE TYPE", file.type);
        var reader = new FileReader();
        reader.onloadend = function () {
            var formData = new FormData();
            var fileBlob = new Blob([reader.result], {
                type: file.type
            });
            formData.append('image', fileBlob, file.name);
            _this.uploadFileData(formData, file.name);
        };
        reader.readAsArrayBuffer(file);
    };
    CreateGroupPage.prototype.uploadFileData = function (formData, name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var uploadCall;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                uploadCall = this.http.post("http://198.12.92.202:5000/upload/single-file", formData)
                    .subscribe(function (res) {
                    console.log(res);
                    console.log(res['error']);
                    if (res['error']) {
                        // let value = this.translate.instant(['File_upload_failed'], { value: this.lang })
                        _this.presentToast("File_upload_failed");
                    }
                    else {
                        // let value = this.translate.instant(['File_upload_success'], { value: this.lang })
                        _this.presentToast("File_upload_success");
                        var create = _this.groupform.value;
                        create.avatar = name;
                        _this.postGroup(create);
                        // this.groupService.putChat(file_message, this.id).subscribe((res) => {
                        //   this.uploading = false;
                        //   this.images = [];
                        _this.ref.detectChanges();
                        //   this.reset();
                        //   this.chatData();
                        //   this.currentFileType = new String();
                        // });
                    }
                }, function (err) {
                    console.log("UPLOAD FAILED", err);
                    _this.uploading = false;
                    _this.images = [];
                });
                return [2 /*return*/];
            });
        });
    };
    CreateGroupPage.prototype.checkPermissions = function () {
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
    CreateGroupPage.prototype.getFileFromBrowser = function (event, type) {
        var _this = this;
        this.images = [];
        console.log(event);
        console.log(event.target['files'][0]);
        var fileList = event.target['files'];
        if (fileList.length > 0) {
            var file = fileList[0];
        }
        var reader = new FileReader();
        reader.onload = function (e) {
            var newEntry = {
                name: file.name,
                path: reader.result,
                filePath: file,
                displayName: file.name,
                type: type
            };
            if (type != 'doc') {
                _this.images = [newEntry].concat(_this.images);
                _this.currentFileType = type;
            }
        };
        reader.readAsDataURL(file);
    };
    CreateGroupPage.ctorParameters = function () { return [
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
    ]; };
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
    return CreateGroupPage;
}());



/***/ })

}]);
//# sourceMappingURL=create-group-create-group-module-es5.js.map