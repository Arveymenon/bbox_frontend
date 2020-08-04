(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~feed-popover-feed-popover-module~tab3-tab3-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab3/tab3.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab3/tab3.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      {{'Profile'|translate}}\n    </ion-title>\n    <ion-buttons slot=\"end\" size=\"small\">\n      \n        <ion-button *ngIf=\"lang\" size=\"small\" fill=\"clear\" class=\"lang-switcher\" (click)=\"toggleLang()\">{{ lang }}</ion-button>\n        <!-- <ion-button (click)=\"chat()\" class=\"no-padding\">\n          <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n        </ion-button> -->\n        <!-- routerLink=\"/group-chat-admin\" -->\n        <!-- <ion-button [routerLink]=\"[ '/notifications']\">\n          <ion-icon slot=\"icon-only\" name=\"notifications\"></ion-icon>\n        </ion-button> -->\n        <ion-button (click)=\"logout()\">\n          <ion-icon slot=\"icon-only\" name=\"ios-log-out\"></ion-icon>\n        </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"user-container\">\n      <img class=\"user-photo\" [src]=\"userService.setAvatar(profile_pic)\" onError=\"this.src='assets/images/user.png';\">\n      <!-- 'https://graph.facebook.com/10219749290953972/picture' -->\n      <p *ngIf=\"edit_name == false\" class=\"user-title\">{{ name }}\n        <ion-icon ios=\"ios-create\" md=\"md-create\" (click)=\"enableEditName()\"></ion-icon>\n      </p>\n      <p>{{ mobile }}</p>\n\n      <ion-input *ngIf=\"edit_name == true\" [formControl]=\"user_name\" value=\"{{ name }}\" placeholder=\"{{ name }}\" id='inputElement' #inputElement></ion-input>\n      <div text-center *ngIf=\"edit_name == true\">\n        <ion-badge color=\"primary\" (click)=\"updateName()\" text-center>{{ 'update' | translate }}</ion-badge>\n      </div>\n      <input type=\"file\" (change)=\"getFileFromBrowser($event, 'image')\" id=\"image\" accept=\"image/*\" style=\"display: none\">\n      <img class=settings-icon (click)=\"selectImage()\" src=\"assets/images/settings.png\">\n    </div>\n\n    <ion-grid>\n      <ion-row>\n\n        <ion-col>\n          <ion-card class=\"home-card one\" (click)=\"inviteMember()\">\n            <div class=\"content\">\n              <img src='assets/images/add-contact.png'>\n              <ion-card-title>{{'Add Contact' | translate}}</ion-card-title>\n            </div>\n          </ion-card>\n        </ion-col>\n\n        <!-- <ion-col>\n          <ion-card class=\"home-card two\" (click)=\"joinGroup()\">\n            <div class=\"content\">\n              <img src='assets/images/group.png'>\n              <ion-card-title>{{'Create / Join Group'|translate}}</ion-card-title>\n            </div>\n          </ion-card>\n        </ion-col> -->\n      </ion-row>\n      <ion-list>\n        <ion-item>\n          <ion-label>{{'Enable Subscriber List' | translate}}</ion-label>\n          <ion-toggle [(ngModel)]=\"subscribers\" (click)=\"valueChanged($event)\"></ion-toggle>\n        </ion-item>\n        <ion-item (click)=\"goToBlockList()\">\n          <ion-label>{{'View Blocked Users' | translate}}</ion-label>\n        </ion-item>\n      </ion-list>\n    </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");









var Tab3PageModule = /** @class */ (function () {
    function Tab3PageModule() {
    }
    Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["IonicStorageModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }])
            ],
            declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
        })
    ], Tab3PageModule);
    return Tab3PageModule;
}());



/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  text-align: left; }\n\n.user-container {\n  margin-top: 50px;\n  text-align: center; }\n\n.user-photo {\n  border-radius: 50%;\n  height: 100px;\n  width: 100px; }\n\nion-input {\n  --padding-end: 8px; }\n\n.user-title {\n  color: #1A1A1A;\n  margin-top: 16px;\n  padding-left: 16px;\n  font-family: 'avenir', sans-serif;\n  font-weight: bold; }\n\n.user-title ion-icon {\n    padding-left: 4px; }\n\n.settings-icon {\n  height: 25px;\n  position: relative;\n  bottom: 110px;\n  left: 30px;\n  background: #fff;\n  border-radius: 50%;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n\n.home-card {\n  text-align: center;\n  min-height: 100px;\n  min-width: 100px;\n  max-width: 250px; }\n\n.home-card.one {\n  margin: auto; }\n\n.home-card.two {\n  margin: 0 auto 0 0; }\n\n.home-card .content {\n  margin: 20px 0; }\n\n.home-card ion-card-title {\n  font-family: 'avenir', sans-serif;\n  font-size: 12px;\n  color: #696969; }\n\n.home-card img {\n  display: inline-block;\n  height: 40px;\n  width: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYmJveF9mcm9udGVuZC9zcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxnQkFBZ0IsRUFBQTs7QUFJbEI7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZLEVBQUE7O0FBR2Q7RUFDSSxrQkFBYyxFQUFBOztBQUdsQjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlDQUFpQztFQUNqQyxpQkFBaUIsRUFBQTs7QUFMbkI7SUFPSSxpQkFBaUIsRUFBQTs7QUFJckI7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiwrR0FBbUcsRUFBQTs7QUFJckc7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBIZWFkZXIgU3R5bGVzXG5pb24tdGl0bGV7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICBcbiAgLy9Vc2VyIFN0eWxlc1xuICAudXNlci1jb250YWluZXJ7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC51c2VyLXBob3Rve1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxuICBcbiAgaW9uLWlucHV0e1xuICAgICAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICB9XG4gIFxuICAudXNlci10aXRsZXtcbiAgICBjb2xvcjogIzFBMUExQTtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBmb250LWZhbWlseTogJ2F2ZW5pcicsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgaW9uLWljb257XG4gICAgICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgICB9XG4gIH1cbiAgXG4gIC5zZXR0aW5ncy1pY29ue1xuICAgIGhlaWdodDogMjVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm90dG9tOiAxMTBweDtcbiAgICBsZWZ0OiAzMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLCAwIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKTtcbiAgfVxuICBcbiAgLy9DYXJkIFN0eWxlc1xuICAuaG9tZS1jYXJke1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgIG1heC13aWR0aDogMjUwcHg7XG4gIH1cbiAgXG4gIC5ob21lLWNhcmQub25le1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuICBcbiAgLmhvbWUtY2FyZC50d297XG4gICAgbWFyZ2luOiAwIGF1dG8gMCAwO1xuICB9XG4gIFxuICAuaG9tZS1jYXJkIC5jb250ZW50e1xuICAgIG1hcmdpbjogMjBweCAwO1xuICB9XG4gIFxuICAuaG9tZS1jYXJkIGlvbi1jYXJkLXRpdGxle1xuICAgIGZvbnQtZmFtaWx5OiAnYXZlbmlyJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM2OTY5Njk7XG4gIH1cbiAgXG4gIC5ob21lLWNhcmQgaW1ne1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gIH1cbiAgXG4gIFxuICAiXX0= */"

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/ngx/index.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shareduser_user_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shareduser/user.service */ "./src/app/shareduser/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/ngx/index.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _services_contacts_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../services/contacts.service */ "./src/app/services/contacts.service.ts");






















var STORAGE_KEY = 'my_files';
var Tab3Page = /** @class */ (function () {
    function Tab3Page(storage, keyboard, authService, router, actionSheetCtrl, loadingCtrl, navCtrl, 
    // public navParams: NavParams,
    toastCtrl, camera, modalCtrl, webview, platform, ref, file, transfer, filePath, fileChooser, http, androidPermissions, userService, translate, storageService, contactsService, crop, loader) {
        var _this = this;
        this.storage = storage;
        this.keyboard = keyboard;
        this.authService = authService;
        this.router = router;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.camera = camera;
        this.modalCtrl = modalCtrl;
        this.webview = webview;
        this.platform = platform;
        this.ref = ref;
        this.file = file;
        this.transfer = transfer;
        this.filePath = filePath;
        this.fileChooser = fileChooser;
        this.http = http;
        this.androidPermissions = androidPermissions;
        this.userService = userService;
        this.translate = translate;
        this.storageService = storageService;
        this.contactsService = contactsService;
        this.crop = crop;
        this.loader = loader;
        this.images = [];
        this.ANDROID_PERMISSIONS = [
            'android.permission.READ_EXTERNAL_STORAGE',
            'android.permission.WRITE_EXTERNAL_STORAGE',
        ];
        this.user_name = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormControl"]();
        this.edit_name = false;
        this.subscribers = this.storageService.getSubscriberStatus();
        this.storage.get('language')
            .then(function (lang) {
            if (lang) {
                console.log(lang);
                if (lang == 'en') {
                    _this.lang = 'JP';
                }
                else {
                    _this.lang = 'EN';
                }
            }
        });
        this.storage.get('profile_pic')
            .then(function (image) {
            image ? _this.profile_pic = image : false;
        });
        this.routerWatch();
        this.mobile = this.contactsService.getPhoneNumber();
    }
    Tab3Page.prototype.ngOnInit = function () {
        this.sharedvalue();
        this.setToggle();
        // setTimeout(() => {
        //   this.subscribers = !this.subscribers;
        //   console.log(this.subscribers);
        // }, 3000)
    };
    Tab3Page.prototype.enableEditName = function () {
        var _this = this;
        this.edit_name = true;
        this.user_name.markAsTouched({
            onlySelf: true
        });
        setTimeout(function () {
            console.log(_this.inputElement);
            _this.inputElement.setFocus().then(function (res) {
                _this.keyboard.show();
                console.log(res);
            });
            console.log(_this.user_name);
        }, 400);
    };
    Tab3Page.prototype.inviteMember = function () {
        this.router.navigate(['invite-member']);
    };
    Tab3Page.prototype.joinGroup = function () {
        this.router.navigate(['join-group']);
    };
    Tab3Page.prototype.updateName = function () {
        var _this = this;
        console.log(this.user_name);
        this.storage.get('id').then(function (id) {
            if (_this.user_name.value) {
                _this.name = _this.user_name.value;
                _this.userService.putUserName({
                    id: id,
                    name: _this.user_name.value
                });
                _this.storage.set('name', _this.user_name.value);
            }
            _this.edit_name = false;
        });
    };
    Tab3Page.prototype.sharedvalue = function () {
        var _this = this;
        this.storage.get('name').then(function (val) {
            _this.name = val;
            console.log('name', val);
            _this.user_name.setValue(val);
        });
        this.storage.get('id').then(function (val) {
            _this.id = val;
            console.log('ID:::: ', _this.id);
        });
    };
    Tab3Page.prototype.chat = function () {
        this.router.navigateByUrl('/create-personal-chat');
    };
    Tab3Page.prototype.logout = function () {
        var _this = this;
        console.log('Logging Out...');
        this.authService.logout()
            .then(function (loggedOut) {
            if (loggedOut == true) {
                _this.router.navigate(['/get-number']);
            }
            _this.storage.clear();
        });
    };
    /* ONLINE FIX */
    Tab3Page.prototype.loadStoredImages = function () {
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
    Tab3Page.prototype.presentToast = function (text) {
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
    Tab3Page.prototype.selectImage = function () {
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
    Tab3Page.prototype.takePicture = function (sourceType) {
        var _this = this;
        var options = {
            quality: 65,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imagePath) {
            _this.loader.presentLoading();
            _this.crop.crop(imagePath, { quality: 75 }).then(function (newImage) {
                _this.startProcess(newImage, 'image', sourceType);
            });
        });
    };
    Tab3Page.prototype.startProcess = function (file, type, sourceType) {
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
    Tab3Page.prototype.createFileName = function (fileName) {
        var ext = this.getFileExtension(fileName);
        console.log("EXT", ext);
        var d = new Date(), n = d.getTime(), newFileName = n + '.' + ext;
        console.log("FILE NAME", fileName);
        return newFileName;
    };
    Tab3Page.prototype.getFileExtension = function (entry) {
        var file = entry.toString();
        var splits = file.split('.');
        var ext = splits[(splits.length - 1)];
        return ext;
    };
    Tab3Page.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.checkPermissions().then(function () {
            _this.file.copyFile(namePath, currentName, _this.file.dataDirectory, newFileName).then(function (success) {
                _this.updateStoredFiles(newFileName, currentName);
            }, function (error) {
                console.log("COULD NOT STORE FILE", error);
                // let value = this.translate.instant('Error_while_storing_file', { value: this.lang });
                _this.presentToast("Error_while_storing_file");
            });
        });
    };
    Tab3Page.prototype.updateStoredFiles = function (name, oldName) {
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
                _this.ref.detectChanges(); // trigger change detection cycle
                console.log("NEW IMGS", _this.images);
            }
            _this.startUpload();
        });
    };
    Tab3Page.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            var converted = this.webview.convertFileSrc(img);
            return converted;
        }
    };
    Tab3Page.prototype.startUpload = function () {
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
    Tab3Page.prototype.getFileFromLocal = function (entry) {
        var _this = this;
        this.file.resolveLocalFilesystemUrl(entry)
            .then(function (entry) {
            entry.file(function (file) { return _this.readFile(file); });
        })
            .catch(function (err) {
            // let value = this.translate.instant('Error_while_reading_file', { value: this.lang });
            _this.presentToast("Error_while_reading_file");
        });
    };
    Tab3Page.prototype.readFile = function (file) {
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
    Tab3Page.prototype.uploadFileData = function (formData, name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var uploadCall;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                uploadCall = this.http.post("http://198.12.92.202:5000/upload/single-file", formData)
                    .subscribe(function (res) {
                    console.log(res);
                    console.log(res['error']);
                    if (res['error']) {
                        _this.loadingCtrl.dismiss();
                        // let value = this.translate.instant('File_upload_failed', { value: this.lang });
                        _this.presentToast("File_upload_failed");
                    }
                    else {
                        // let value = this.translate.instant('File_upload_failed', { value: this.lang });
                        _this.presentToast("File_upload_success");
                        console.log("SUCCESS IS WORKING");
                        _this.loader.dismiss();
                        _this.ref.detectChanges();
                        _this.storage.set('profile_pic', name);
                        _this.profile_pic = name;
                        var avatarEntry = {
                            avatar: name,
                            id: _this.id
                        };
                        _this.userService.putUserAvatar(avatarEntry)
                            .subscribe(function (res) {
                            console.log('IMAGE UPLOADED', res);
                        }, function (err) {
                            console.log('IMAGE NOT UPLOADED', err);
                        });
                        // let file_message = this.groupform.value;
                        // file_message.messages = name
                        // file_message.file = true
                        // file_message.fileType = this.currentFileType;
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
    Tab3Page.prototype.checkPermissions = function () {
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
    Tab3Page.prototype.toggleLang = function () {
        console.log('clicked');
        if (this.lang === 'EN') {
            this.lang = 'JP';
            this.translate.use('en');
            this.storage.set('language', 'en');
        }
        else {
            this.lang = 'EN';
            this.translate.use('jp');
            this.storage.set('language', 'jp');
        }
    };
    Tab3Page.prototype.getFileFromBrowser = function (event, type) {
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
                _this.uploading = true;
                var new_name = _this.createFileName(_this.images[0].name);
                var formData = new FormData();
                formData.append('image', _this.images[0].filePath, new_name);
                _this.uploadFileData(formData, new_name);
            }
        };
        reader.readAsDataURL(file);
    };
    Tab3Page.prototype.valueChanged = function (event) {
        var _this = this;
        // this.subscribers = !this.subscribers;
        // console.log(this.subscribers);
        console.log(this.subscribers);
        this.storageService.setSubscriberStatus(!this.subscribers);
        this.storage.get('id').then(function (id) {
            _this.userService.setSubscriber({ id: id, subscriber: _this.subscribers }).subscribe(function (res) { return console.log(res); }, function (err) { return console.log(err); });
        });
    };
    Tab3Page.prototype.routerWatch = function () {
        var _this = this;
        this.routerSubscription = this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]) {
                if (event.url == '/home/tabs/tab3') {
                    console.log('WORKING');
                    _this.setToggle();
                }
            }
        });
    };
    Tab3Page.prototype.setToggle = function () {
        // this.storage.get('subscribers')
        //   .then(value => {
        //     console.log('SUBSCRIBERS', value)
        //     this.subscribers = value;
        //     console.log(this.subscribers)
        //     // value ? this.subscribers = true : this.subscribers = false;
        //     this.ref.detectChanges();
        //   })
    };
    Tab3Page.prototype.ionPageWillLeave = function () {
        this.routerSubscription.unsubscribe();
    };
    Tab3Page.prototype.goToBlockList = function () {
        console.log('USERS');
        this.router.navigate(['block-list']);
    };
    Tab3Page.ctorParameters = function () { return [
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
        { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_17__["Keyboard"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
        { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__["WebView"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"] },
        { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__["FileTransfer"] },
        { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_11__["FilePath"] },
        { type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_12__["FileChooser"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"] },
        { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_13__["AndroidPermissions"] },
        { type: _shareduser_user_service__WEBPACK_IMPORTED_MODULE_15__["UserService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_18__["StorageService"] },
        { type: _services_contacts_service__WEBPACK_IMPORTED_MODULE_21__["ContactsService"] },
        { type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_19__["Crop"] },
        { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_20__["LoaderService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputElement', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonInput"])
    ], Tab3Page.prototype, "inputElement", void 0);
    Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab3',
            template: __webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab3/tab3.page.html"),
            styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_17__["Keyboard"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__["WebView"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__["FileTransfer"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_11__["FilePath"],
            _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_12__["FileChooser"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"],
            _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_13__["AndroidPermissions"],
            _shareduser_user_service__WEBPACK_IMPORTED_MODULE_15__["UserService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_18__["StorageService"],
            _services_contacts_service__WEBPACK_IMPORTED_MODULE_21__["ContactsService"],
            _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_19__["Crop"],
            _services_loader_service__WEBPACK_IMPORTED_MODULE_20__["LoaderService"]])
    ], Tab3Page);
    return Tab3Page;
}());



/***/ })

}]);
//# sourceMappingURL=default~feed-popover-feed-popover-module~tab3-tab3-module-es5.js.map