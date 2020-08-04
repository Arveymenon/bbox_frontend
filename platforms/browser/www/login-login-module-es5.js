(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <ion-button size=\"small\" fill=\"clear\" class=\"lang-switcher\" (click)=\"toggleLang()\">{{ lang }}</ion-button>\n  <div class=\"login-container\">\n    <img class=\"logo\" src=\"assets/images/logo.png\">\n    <form [formGroup]=\"credentialsForm\" (ngSubmit)=\"onSubmit()\">\n\n      <div class=\"login-form\">\n        <ion-item class=\"rounded\">\n          <ion-input type=\"text\" placeholder=\"{{'username' | translate}}\" formControlName=\"email\"></ion-input>\n        </ion-item>\n\n        <ion-item class=\"rounded\">\n          <ion-input type=\"password\" placeholder=\"{{'password' | translate}}\" formControlName=\"password\"></ion-input>\n        </ion-item>\n\n        <div class=\"login-button\">\n          <ion-button expand=\"full\" shape=\"round\" type=\"submit\">{{ 'Log In' | translate }}</ion-button>\n        </div>\n        <br>\n        <div>\n          <!-- <img src=\"assets/images/google.png\" width=\"45\" height=\"45\" (click)=\"google()\">\n          &nbsp;&nbsp; -->\n          <img src=\"assets/images/Facebook1.png\" width=\"45\" height=\"45\" (click)=\"facebook()\">\n        </div>\n\n        <p class=\"login-text\" routerLink=\"/register\">{{ 'Don’t have an account?' | translate}}\n          <br><b>{{ 'Sign up' | translate}}</b></p>\n      </div>\n    </form>\n\n\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container {\n  margin-top: 50px;\n  text-align: center; }\n\n.logo {\n  height: 125px; }\n\n.login-form {\n  margin-top: 30px;\n  text-align: center; }\n\n.login-form ion-item {\n  margin: 30px auto 0 auto;\n  max-width: 300px; }\n\n.rounded {\n  border: 2px solid #E2E2E2;\n  margin: 0 50px 0 50px;\n  --border-width: 0 0 0 0;\n  border-radius: 8px; }\n\n.login-button {\n  text-align: center;\n  margin: 75px auto 0 auto;\n  max-width: 150px;\n  --box-shadow: none; }\n\n.login-text {\n  margin-top: 75px;\n  text-transform: uppercase;\n  color: #005DDD;\n  letter-spacing: 3px;\n  font-weight: 300; }\n\n.login-facebook {\n  text-align: center;\n  margin: 0 auto 0 auto;\n  max-width: 150px;\n  --box-shadow: none; }\n\n.login-google {\n  text-align: center;\n  margin: 0 auto 0 auto;\n  max-width: 150px;\n  --box-shadow: none; }\n\n.lang-switcher {\n  float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYmJveF9mcm9udGVuZC9zcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxhQUFhLEVBQUE7O0FBS2pCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLHdCQUF3QjtFQUN4QixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHVCQUFlO0VBQ2Ysa0JBQ0osRUFBQTs7QUFFQTtFQUNJLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGtCQUFhLEVBQUE7O0FBS2pCO0VBQ0ksZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBOztBQUdwQjtFQUVJLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGtCQUFhLEVBQUE7O0FBR2pCO0VBRUksa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsa0JBQWEsRUFBQTs7QUFHakI7RUFDSSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tY29udGFpbmVye1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9nb3tcbiAgICBoZWlnaHQ6IDEyNXB4O1xufVxuXG4vL0xvZ2luIEZvcm0gU3R5bGVzXG5cbi5sb2dpbi1mb3Jte1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9naW4tZm9ybSBpb24taXRlbXtcbiAgICBtYXJnaW46IDMwcHggYXV0byAwIGF1dG87XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbn1cblxuLnJvdW5kZWR7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0UyRTJFMjtcbiAgICBtYXJnaW46IDAgNTBweCAwIDUwcHg7XG4gICAgLS1ib3JkZXItd2lkdGg6IDAgMCAwIDA7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4XG59XG5cbi5sb2dpbi1idXR0b257XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogNzVweCBhdXRvIDAgYXV0bztcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLy9Mb2dpbiBUZXh0IFN0eWxlc1xuXG4ubG9naW4tdGV4dHtcbiAgICBtYXJnaW4tdG9wOiA3NXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICMwMDVEREQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuXG4ubG9naW4tZmFjZWJvb2t7XG4gICBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuXG4ubG9naW4tZ29vZ2xle1xuICBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuXG4ubGFuZy1zd2l0Y2hlciB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "./node_modules/@ionic-native/onesignal/ngx/index.js");
/* harmony import */ var _shareduser_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shareduser/user.service */ "./src/app/shareduser/user.service.ts");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/loader.service */ "./src/app/services/loader.service.ts");









// import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';



var TOKEN_KEY = 'access_token';
var DATA_NAME = 'name';
var DATA_EMAIL = 'email';
var DATA_ID = 'id';
var DATA_AVATAR = 'profile_pic';
var LoginPage = /** @class */ (function () {
    function LoginPage(formBuilder, authService, router, toastController, translate, storage, oneSignal, 
    // private fb: Facebook,
    userService, alertController, googlePlus, loader) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.toastController = toastController;
        this.translate = translate;
        this.storage = storage;
        this.oneSignal = oneSignal;
        this.userService = userService;
        this.alertController = alertController;
        this.googlePlus = googlePlus;
        this.loader = loader;
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
            else {
                _this.lang = 'JP';
            }
        });
        this.oneSignal.getIds().then(function (data) {
            _this.player_id = data.userId;
        });
    }
    LoginPage.prototype.ngOnInit = function () {
        this.credentialsForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    };
    LoginPage.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log(this.credentialsForm.valid);
                if (this.credentialsForm.valid) {
                    this.authService.login({
                        email: this.credentialsForm.value.email,
                        password: this.credentialsForm.value.password,
                        onesignal_id: this.player_id ? this.player_id : false,
                    }).then(function (res) {
                        // this.showToast(); 
                        _this.router.navigate(['home/tabs/tab1']);
                    });
                }
                else {
                    this.translate.get('Invalid_Credentials', { value: this.lang }).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var alert;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    console.log(res);
                                    return [4 /*yield*/, this.alertController.create({
                                            header: res,
                                            buttons: ['OK']
                                        })];
                                case 1:
                                    alert = _a.sent();
                                    return [4 /*yield*/, alert.present()];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    // get('Invalid Credentials')
                }
                return [2 /*return*/];
            });
        });
    };
    // async showToast() {
    //   console.log("toast")
    //   console.log(this.lang);
    //   this.translate.get('Welcome to Bbox',{value: this.lang}).subscribe(async (res: any)=>{
    //     console.log("toast",res)
    //     const toast = await this.toastController.create({
    //       message: res,
    //       duration: 1000,
    //       position: "bottom",
    //     });
    //     toast.present();
    //   });
    // }
    LoginPage.prototype.toggleLang = function () {
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
    LoginPage.prototype.facebook = function () {
        // const permissions = ['public_profile', 'email'];
        // this.fb.login(permissions)
        // .then((res: FacebookLoginResponse) => {
        //   console.log('Facebook Response', res)
        //   var userId = res.authResponse.userID;
        // 	//Getting name and gender properties
        // 	this.fb.api("/me?fields=name,email", permissions)
        //     .then(user =>{
        //       user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
        //       console.log('USER', user);
        //       var socialUser = {
        //         name: user.name,
        //         user_id: user.name,
        //         email: user.email,
        //         avatar: user.picture,
        //         onesignal_id: this.player_id,
        //         mobile: Math.floor(Date.now() / 1000)
        //       };
        //       this.socialLogin(socialUser);
        //     }, err => {
        //       console.log('Facebook Error', err)
        //     })
        //   })
        // .catch(e => console.log('Error logging into Facebook', e));
    };
    LoginPage.prototype.google = function () {
        this.googlePlus.getSigningCertificateFingerprint()
            .then(function (fp) {
            console.log('GOOGLE FP', fp);
        })
            .catch(function (err) {
            console.log('Google Error', err);
        });
        this.googlePlus.login({
            'scopes': '',
            'webClientId': '696273358246-fdkil7tpab642c2l0pndcb8l0bvs6qk2.apps.googleusercontent.com',
            'offline': true // Optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
        })
            .then(function (user) {
            console.log('Google User', user);
        }, function (err) {
            console.log('Google Error', err);
        })
            .catch(function (err) {
            console.log('Google Error', err);
        });
    };
    LoginPage.prototype.socialLogin = function (userData) {
        var _this = this;
        this.loader.presentLoading();
        this.userService.socialLogin(userData)
            .subscribe(function (res) {
            _this.loader.dismiss();
            console.log(res);
            if (res['login'] == true) {
                _this.authService.socialLogin(res)
                    .then(function (user) {
                    if (user == true)
                        _this.router.navigate(['home/tabs/tab1']);
                });
            }
            else {
                _this.authService.socialLogin(res['user'])
                    .then(function (user) {
                    if (user == true)
                        _this.router.navigate(['home/tabs/tab1']);
                });
            }
        });
    };
    LoginPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
        { type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__["OneSignal"] },
        { type: _shareduser_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
        { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_10__["GooglePlus"] },
        { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_11__["LoaderService"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
            _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__["OneSignal"],
            _shareduser_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_10__["GooglePlus"],
            _services_loader_service__WEBPACK_IMPORTED_MODULE_11__["LoaderService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module-es5.js.map