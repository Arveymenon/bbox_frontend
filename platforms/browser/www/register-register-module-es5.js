(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"login-container\">\n      <img class=\"logo\" src=\"assets/images/logo.png\">\n      <form [formGroup]=\"credentialsForm\" (ngSubmit)=\"onSubmit()\">\n\n      <div class=\"login-form\">\n          <ion-item class=\"rounded\">\n            <ion-input type=\"text\" placeholder=\"{{'Full Name'|translate}}\" formControlName=\"name\" [(ngModel)]=\"name\" required ></ion-input>\n          </ion-item>\n<!--  <ion-input type=\"hidden\"  formControlName=\"user_id\" value=\"{{ name }}\"></ion-input> -->\n    \n          <ion-item class=\"rounded\">\n            <ion-input type=\"email\" placeholder=\"{{'Email ID'|translate}}\" formControlName=\"email\" required ></ion-input>\n          </ion-item>\n          \n          <div class=\"login-button\">\n              <ion-button expand=\"block\" shape=\"round\" type=\"submit\" required >{{'Sign up'|translate}}</ion-button>\n          </div>\n          <br>\n        <div>\n          <!-- <img src=\"assets/images/google.png\" width=\"45\" height=\"45\" (click)=\"google()\">\n          &nbsp;&nbsp; -->\n          <!-- <img src=\"assets/images/Facebook1.png\" width=\"45\" height=\"45\" (click)=\"facebook()\"> -->\n        </div>\n      </div>\n    </form>\n\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container {\n  margin-top: 50px;\n  text-align: center; }\n\n.logo {\n  height: 125px; }\n\n.login-form {\n  margin-top: 30px; }\n\n.login-form ion-item {\n  margin: 30px auto 0 auto;\n  max-width: 300px; }\n\n.rounded {\n  border: 2px solid #E2E2E2;\n  margin: 0 50px 0 50px;\n  --border-width: 0 0 0 0;\n  border-radius: 8px; }\n\n.login-button {\n  text-align: center;\n  margin: 75px auto 0 auto;\n  max-width: 150px;\n  --box-shadow: none; }\n\n.login-text {\n  margin-top: 75px;\n  text-transform: uppercase;\n  color: #005DDD;\n  letter-spacing: 3px;\n  font-weight: 300; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYmJveF9mcm9udGVuZC9zcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksd0JBQXdCO0VBQ3hCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsdUJBQWU7RUFDZixrQkFDSixFQUFBOztBQUVBO0VBQ0ksa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsa0JBQWEsRUFBQTs7QUFHakI7RUFDSSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tY29udGFpbmVye1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9nb3tcbiAgICBoZWlnaHQ6IDEyNXB4O1xufVxuXG4ubG9naW4tZm9ybXtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ubG9naW4tZm9ybSBpb24taXRlbXtcbiAgICBtYXJnaW46IDMwcHggYXV0byAwIGF1dG87XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbn1cblxuLnJvdW5kZWR7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0UyRTJFMjtcbiAgICBtYXJnaW46IDAgNTBweCAwIDUwcHg7XG4gICAgLS1ib3JkZXItd2lkdGg6IDAgMCAwIDA7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4XG59XG5cbi5sb2dpbi1idXR0b257XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogNzVweCBhdXRvIDAgYXV0bztcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmxvZ2luLXRleHR7XG4gICAgbWFyZ2luLXRvcDogNzVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAjMDA1REREO1xuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "./node_modules/@ionic-native/onesignal/ngx/index.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");
/* harmony import */ var _shareduser_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shareduser/user.service */ "./src/app/shareduser/user.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/loader.service */ "./src/app/services/loader.service.ts");








// import { FacebookLoginResponse, Facebook } from '@ionic-native/facebook/ngx';





var RegisterPage = /** @class */ (function () {
    //   userid :string = '';
    // // this will remove whole whitespace from the string    
    // trimming_fn(x) {    
    //   return x ? x.replace(/\s/g,'') : '';    
    // };  
    function RegisterPage(formBuilder, authService, router, location, navController, toastController, ref, oneSignal, 
    //  private fb: Facebook,
    googlePlus, userService, storage, ngZone, loader) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.location = location;
        this.navController = navController;
        this.toastController = toastController;
        this.ref = ref;
        this.oneSignal = oneSignal;
        this.googlePlus = googlePlus;
        this.userService = userService;
        this.storage = storage;
        this.ngZone = ngZone;
        this.loader = loader;
        this.oneSignal.getIds().then(function (data) {
            _this.player_id = data.userId;
        });
    }
    RegisterPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('temporary_mobile_number').then(function (mobile) {
            _this.mobileNumber = mobile;
        });
        this.credentialsForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]]
        });
    };
    RegisterPage.prototype.resetForm = function (credentialsForm) {
        if (credentialsForm)
            credentialsForm.reset();
    };
    RegisterPage.prototype.onSubmit = function () {
        var _this = this;
        if (this.credentialsForm.valid) {
            console.log(this.credentialsForm.value);
            var form = this.credentialsForm.value;
            form.onesignal_id = this.player_id;
            // this.loader.presentLoading();
            console.log('FINAL FORM', form);
            this.userService.checkDetails(form).subscribe(function (res) {
                console.log(res);
                if (res.error == false) {
                    var credentials = {
                        mobile: _this.mobileNumber,
                        name: _this.credentialsForm.value.name,
                        email: _this.credentialsForm.value.email
                    };
                    console.log(credentials);
                    _this.authService.register(credentials).then(function (data) {
                        console.log('REGISTERED', data);
                        _this.ref.detectChanges();
                        // this.navController.navigateRoot(['home/tabs/tab1']).then(res => console.log(res)).catch(err => console.log(err))
                        // this.router.navigate(['home/tabs/tab1']).then(res => console.log(res)).catch(err => console.log(err))
                        _this.goToHome();
                        // this.ngZone.run(async () => {
                        //   await this.navController.navigateRoot(['home/tabs/tab1']).then(res => console.log(res)).catch(err => console.log(err))
                        // }).then(() => {
                        //   this.ref.detectChanges();
                        // });
                    }, function (err) {
                        console.log('ERROR', err);
                    });
                }
                else {
                    _this.showToast('Email ID Already Exists');
                }
            });
            // Http call to check users email
            // this.storage.set("register_data", form)
            //   .then(stored => {
            //     this.router.navigate(['get-number']);
            //   })
            // this.authService.register(this.credentialsForm.value).subscribe(res => {
            //   // Call Login to automatically login the new user
            //   // this.resetForm();
            //   this.authService.login(this.credentialsForm.value).subscribe((res) => {
            //     // this.showToast(); 
            //    this.router.navigate(['home/tabs/tab1']);
            //   });
            // });
        }
        else {
            console.log('invalid form');
            if (!this.credentialsForm.controls.email.valid) {
                this.showToast('Kindly Provide A Valid Email ID');
            }
        }
    };
    // async showToast() {
    //   const toast = await this.toastController.create({
    //     message: 'Welcome to Bbox',
    //     duration: 1000,
    //     position: "bottom",
    //   });
    //   toast.present();
    // }
    RegisterPage.prototype.facebook = function () {
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
        //       var socialUser = JSON.stringify({
        //         name: user.name,
        //         email: user.email,
        //         avatar: user.picture,
        //         onesignal_id: this.player_id,
        //         mobile: ''
        //       });
        //       this.socialLogin(socialUser);
        //     }, err => {
        //       console.log('Facebook Error', err)
        //     })
        //   })
        // .catch(e => console.log('Error logging into Facebook', e));
    };
    RegisterPage.prototype.showToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            duration: 1000,
                            position: "bottom",
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.google = function () {
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
    RegisterPage.prototype.socialLogin = function (userData) {
        var _this = this;
        this.userService.socialLogin(userData)
            .subscribe(function (res) {
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
    RegisterPage.prototype.goToHome = function () {
        var _this = this;
        console.log('Go to Home');
        this.ngZone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.navController.navigateRoot(['home/tabs/tab1'])];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); }).then(function () {
            _this.ref.detectChanges();
        });
    };
    RegisterPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_6__["OneSignal"] },
        { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_7__["GooglePlus"] },
        { type: _shareduser_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_11__["LoaderService"] }
    ]; };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_6__["OneSignal"],
            _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_7__["GooglePlus"], _shareduser_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _services_loader_service__WEBPACK_IMPORTED_MODULE_11__["LoaderService"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module-es5.js.map