(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["audio-call-audio-call-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/audio-call/audio-call.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/audio-call/audio-call.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-button routerLink=\"/home/tabs/tab1/groupchat/groupchatadmin\">\n            <ion-icon class=\"back-button\" slot=\"icon-only\" name=\"md-arrow-back\"></ion-icon>\n          </ion-button>\n      </ion-buttons>\n      <ion-title routerLink=\"groupdetails\">\n        Emma\n      </ion-title>\n    </ion-toolbar>\n  </ion-header> -->\n\n\n<ion-content id=\"video-room-content\" [scrollY]=\"false\" [scrollX]=\"false\">\n<div class=\"main\">\n\n  <div class=\"single-user  ion-text-center\" *ngIf=\"(remoteUsers && !remoteUsers.length)\" [ngStyle]=\"{'background-color': 'black' }\">\n    <div class=\"color-overlay\">\n      <!-- <img [src]=\"userService.setAvatar( group_data.avatar )\" onError=\"this.src='assets/images/user.png';\" class=\"caller-img\"> -->\n      <img [src]=\"userService.setAvatar( group_data.avatar )\" onError=\"this.src='assets/images/user.png';\" class=\"caller-img\">\n      <h3 class=\"user-name\">{{ group_data.name }}</h3>\n      <h4 class=\"call-duration\" [innerHTML]=\"timing\"></h4>\n      <!-- <h4 class=\"call-duration time\" *ngIf=\"timer\">{{hoursDisplay ? hoursDisplay + ':' : ''}}{{(minutesDisplay) && (minutesDisplay <= 59) ? minutesDisplay + ':' : '00' + ':'}}{{(secondsDisplay) && (secondsDisplay <= 59) ? secondsDisplay : '00'}}</h4> -->\n      <!-- <div class=\"controls\">\n          <ion-button fill=\"clear\" disabled>\n              <ion-icon slot=\"icon-only\" name=\"md-volume-high\" color=\"light\"></ion-icon>\n          </ion-button>\n          <ion-button fill=\"clear\">\n              <ion-icon slot=\"icon-only\" name=\"md-mic-off\" color=\"light\"></ion-icon>\n          </ion-button>\n      </div> -->\n      <div class=\"end-call\">\n          <ion-button fill=\"clear\" (click)=\"exitSession()\">\n              <ion-icon slot=\"icon-only\" name=\"md-call\" color=\"light\"></ion-icon>\n          </ion-button>\n      </div>\n    </div>\n  </div>\n  <div class=\"single-user ion-text-center\" *ngIf=\"remoteUsers && remoteUsers.length == 1\" [ngStyle]=\"{'background-color': 'black' }\">\n    <div class=\"color-overlay\">\n      <img [src]=\"userService.setAvatar( group_data.avatar )\" onError=\"this.src='assets/images/user.png';\" class=\"caller-img\">\n      <h3 class=\"user-name\">{{ this.remoteUsers[0] ? this.remoteUsers[0].getNickname() : 'Emma' }}</h3>\n      <h4 class=\"call-duration\">{{hoursDisplay ? hoursDisplay + ':' : ''}}{{(minutesDisplay) && (minutesDisplay <= 59) ? minutesDisplay + ':' : '00' + ':'}}{{(secondsDisplay) && (secondsDisplay <= 59) ? secondsDisplay : '00'}}</h4>\n      <div class=\"controls\">\n          <ion-button fill=\"clear\" (click)=\"setAudio()\">\n              <ion-icon slot=\"icon-only\" name=\"{{speakerBtnIcon}}\" color=\"light\"></ion-icon>\n          </ion-button>\n          <ion-button fill=\"clear\" (click)=\"micStatusChanged()\">\n              <ion-icon slot=\"icon-only\" name=\"{{micBtnIcon}}\" color=\"light\"></ion-icon>\n          </ion-button>\n      </div>\n      <div class=\"end-call\">\n          <ion-button fill=\"clear\" (click)=\"exitSession()\">\n              <ion-icon slot=\"icon-only\" name=\"md-call\" color=\"light\"></ion-icon>\n          </ion-button>\n      </div>\n    </div>\n  </div>\n\n\n  <div *ngIf=\"remoteUsers && remoteUsers.length == 2\" style=\"height:100%\">\n    <div class=\"single-user two ion-text-center\" [ngStyle]=\"{'background-image': group_data.avatar ?'url('+ userService.setAvatar( group_data.avatar ) +'), url(assets/images/user.png); height:50%' : 'url(assets/images/user.png); height:50%' }\">\n      <div class=\"color-overlay\">\n        <img [src]=\"userService.setAvatar( group_data.avatar )\" onError=\"this.src='assets/images/user.png';\" class=\"caller-img\">\n        <h3 class=\"user-name\">{{ this.remoteUsers[0] ? this.remoteUsers[0].getNickname() : 'Emma' }}</h3>\n        <div class=\"end-call\">\n            <ion-button fill=\"clear\">\n                <ion-icon slot=\"icon-only\" name=\"md-call\" color=\"light\"></ion-icon>\n            </ion-button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"single-user two ion-text-center\" [ngStyle]=\"{'background-image': group_data.avatar ?'url('+ userService.setAvatar( group_data.avatar ) +'), url(assets/images/user.png); height:50%' : 'url(assets/images/user.png); height:50%' }\">\n      <div class=\"color-overlay\">\n        <img [src]=\"userService.setAvatar( group_data.avatar )\" onError=\"this.src='assets/images/user.png';\" class=\"caller-img\">\n        <h3 class=\"user-name\">{{ this.remoteUsers[1] ? this.remoteUsers[1].getNickname() : 'Emma' }}</h3>\n        \n        <div class=\"end-call\">\n            <ion-button fill=\"clear\">\n                <ion-icon slot=\"icon-only\" name=\"md-call\" color=\"light\"></ion-icon>\n            </ion-button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n<!-- Three users on call -->\n  <div *ngIf=\"remoteUsers && remoteUsers.length == 3\" style=\"height:100%\">\n      <div class=\"single-user three ion-text-center\" [ngStyle]=\"{'background-image': group_data.avatar ?'url('+ userService.setAvatar( group_data.avatar ) +'), url(assets/images/user.png); height:33.33%' : 'url(assets/images/user.png); height:33.33%' }\">\n        <div class=\"color-overlay\">\n          <img src=\"assets/images/user.png\" class=\"caller-img\">\n          <h3 class=\"user-name\">{{ this.remoteUsers[0] ? this.remoteUsers[0].getNickname() : 'Emma' }}</h3>\n          <div class=\"end-call\">\n              <ion-button fill=\"clear\">\n                  <ion-icon slot=\"icon-only\" name=\"md-call\" color=\"light\"></ion-icon>\n              </ion-button>\n          </div>\n        </div>\n      </div>\n  \n      <div class=\"single-user three ion-text-center\" [ngStyle]=\"{'background-image': group_data.avatar ?'url('+ userService.setAvatar( group_data.avatar ) +'), url(assets/images/user.png); height:33.33%' : 'url(assets/images/user.png); height:33.33%' }\">\n        <div class=\"color-overlay\">\n          <img src=\"assets/images/user.png\" class=\"caller-img\">\n          <h3 class=\"user-name\">{{ this.remoteUsers[1] ? this.remoteUsers[1].getNickname() : 'Emma' }}</h3>\n          \n          <div class=\"end-call\">\n              <ion-button fill=\"clear\">\n                  <ion-icon slot=\"icon-only\" name=\"md-call\" color=\"light\"></ion-icon>\n              </ion-button>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"single-user three ion-text-center\" [ngStyle]=\"{'background-image': group_data.avatar ?'url('+ userService.setAvatar( group_data.avatar ) +'), url(assets/images/user.png); height:33.33%' : 'url(assets/images/user.png); height:33.33%' }\">\n        <div class=\"color-overlay\">\n          <img src=\"assets/images/user.png\" class=\"caller-img\">\n          <h3 class=\"user-name\">{{ this.remoteUsers[2] ? this.remoteUsers[2].getNickname() : 'Emma' }}</h3>\n          \n          <div class=\"end-call\">\n              <ion-button fill=\"clear\">\n                  <ion-icon slot=\"icon-only\" name=\"md-call\" color=\"light\"></ion-icon>\n              </ion-button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n<!-- Four users on call -->\n<div *ngIf=\"remoteUsers && remoteUsers.length == 4\" style=\"height:100%\">\n  <div class=\"audio-row\" style=\"display:flex\">\n    <div class=\"single-user four ion-text-center\" [ngStyle]=\"{'background-image': group_data.avatar ?'url('+ userService.setAvatar( group_data.avatar ) +'), url(assets/images/user.png)' : 'url(assets/images/user.png)' }\">\n      <div class=\"color-overlay\">\n        <img src=\"assets/images/user.png\" class=\"caller-img\">\n        <h3 class=\"user-name\">Emma</h3>\n        <div class=\"end-call\">\n            <ion-button fill=\"clear\">\n                <ion-icon slot=\"icon-only\" name=\"md-call\" color=\"light\"></ion-icon>\n            </ion-button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"single-user four ion-text-center\" [ngStyle]=\"{'background-image': group_data.avatar ?'url('+ userService.setAvatar( group_data.avatar ) +'), url(assets/images/user.png)' : 'url(assets/images/user.png)' }\">\n      <div class=\"color-overlay\">\n        <img src=\"assets/images/user.png\" class=\"caller-img\">\n        <h3 class=\"user-name\">Emma</h3>\n        \n        <div class=\"end-call\">\n            <ion-button fill=\"clear\">\n                <ion-icon slot=\"icon-only\" name=\"md-call\" color=\"light\"></ion-icon>\n            </ion-button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"audio-row\" style=\"display:flex\">\n    <div class=\"single-user four ion-text-center\" [ngStyle]=\"{'background-image': group_data.avatar ?'url('+ userService.setAvatar( group_data.avatar ) +'), url(assets/images/user.png)' : 'url(assets/images/user.png)' }\">\n      <div class=\"color-overlay\">\n        <img src=\"assets/images/user.png\" class=\"caller-img\">\n        <h3 class=\"user-name\">Emma</h3>\n        \n        <div class=\"end-call\">\n            <ion-button fill=\"clear\">\n                <ion-icon slot=\"icon-only\" name=\"md-call\" color=\"light\"></ion-icon>\n            </ion-button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"single-user four ion-text-center\" [ngStyle]=\"{'background-image': group_data.avatar ?'url('+ userService.setAvatar( group_data.avatar ) +'), url(assets/images/user.png)' : 'url(assets/images/user.png)' }\">\n      <div class=\"color-overlay\">\n        <img src=\"assets/images/user.png\" class=\"caller-img\">\n        <h3 class=\"user-name\">Emma</h3>\n        \n        <div class=\"end-call\">\n            <ion-button fill=\"clear\">\n                <ion-icon slot=\"icon-only\" name=\"md-call\" color=\"light\"></ion-icon>\n            </ion-button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n  <div id=\"layout\" class=\"bounds\">\n    <div *ngIf=\"localUser && localUser.getStreamManager()\" #mainStream  class=\"OT_root OT_publisher OT_main custom-class own-video\" id=\"localUser\" (click)=\"toggleButtonsOrEnlargeStream($event)\">\n      <stream-component #streamComponentLocal [user]=\"localUser\"></stream-component>\n    </div>\n    <div *ngFor=\"let user of this.remoteUsers\" class=\"OT_root OT_publisher OT_remote custom-class incoming-video\" id=\"remoteUsers\" (click)=\"toggleButtonsOrEnlargeStream($event)\" style=\"top:0 !important; height:100% !important;\">\n      <stream-component #streamComponentRemotes [user]=\"user\" ></stream-component>\n    </div>\n  </div>\n  \n  <div id=\"menu-open\" (click)=\"toggleMenu()\" *ngIf=\"localUser &&  localUser.getStreamManager() && remoteUsers && remoteUsers.length > 1\">\n      <ion-button fill=\"clear\" \n      >\n      <!-- (click)=\"showAttachment($event)\" -->\n          <ion-icon slot=\"icon-only\" name=\"md-menu\" color=\"primary\"></ion-icon>\n      </ion-button>\n  </div>\n\n  <div id=\"menu-opened\" class=\"hide\">\n      <div class=\"close-section\">\n        <div id=\"menu-close\" (click)=\"toggleMenu()\">\n            <ion-button fill=\"clear\">\n                <ion-icon slot=\"icon-only\" name=\"md-close\" color=\"primary\"></ion-icon>\n            </ion-button>\n        </div>\n      </div>\n      <div class=\"menu\">\n        <div class=\"first-row\">\n          <div class=\"icon-container\">\n            <ion-button fill=\"clear\">\n                <ion-icon slot=\"icon-only\" name=\"md-volume-high\" color=\"primary\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" (click)=\"micStatusChanged()\">\n                <ion-icon slot=\"icon-only\" name=\"md-mic-off\" color=\"primary\"></ion-icon>\n            </ion-button>\n          </div>\n        </div>\n        <div class=\"row-text\">\n          <div class=\"text-container\">\n              <span>Speaker</span>\n              <span>Mute</span>\n          </div>\n        </div>\n        <!-- <div class=\"row-text\">\n            <div class=\"text-container\">\n                <span>Flip</span>\n                <span>Video</span>\n            </div>\n          </div> -->\n        <div class=\"third-row\">\n            <div class=\"icon-container\">\n                <ion-button fill=\"clear\" (click)=\"exitSession()\">\n                    <ion-icon slot=\"icon-only\" name=\"md-call\" color=\"light\"></ion-icon>\n                </ion-button>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n</ion-content>"

/***/ }),

/***/ "./src/app/audio-call/audio-call.module.ts":
/*!*************************************************!*\
  !*** ./src/app/audio-call/audio-call.module.ts ***!
  \*************************************************/
/*! exports provided: AudioCallPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioCallPageModule", function() { return AudioCallPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _audio_call_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./audio-call.page */ "./src/app/audio-call/audio-call.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");









const routes = [
    {
        path: '',
        component: _audio_call_page__WEBPACK_IMPORTED_MODULE_6__["AudioCallPage"]
    }
];
let AudioCallPageModule = class AudioCallPageModule {
};
AudioCallPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
        ],
        declarations: [_audio_call_page__WEBPACK_IMPORTED_MODULE_6__["AudioCallPage"]],
        entryComponents: []
    })
], AudioCallPageModule);



/***/ }),

/***/ "./src/app/audio-call/audio-call.page.scss":
/*!*************************************************!*\
  !*** ./src/app/audio-call/audio-call.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  height: 100%;\n  width: 100%;\n  background: black; }\n\n#menu-open {\n  text-align: center;\n  background: white;\n  height: 40px;\n  width: 10%;\n  position: absolute;\n  bottom: 0;\n  left: 45%;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px; }\n\n#menu-open ion-button {\n  --padding-start:0px;\n  --padding-end:0px; }\n\n.hide {\n  display: none; }\n\n#menu-opened {\n  margin: 0 10%; }\n\n#menu-close {\n  text-align: center;\n  background: white;\n  height: 35px;\n  width: 10%;\n  position: absolute;\n  bottom: 325px;\n  left: 45%;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px; }\n\n#menu-close ion-button {\n  --padding-start:0px;\n  --padding-end:0px; }\n\n.menu {\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  height: 325px;\n  width: 80%;\n  position: fixed;\n  bottom: 0;\n  background: white;\n  z-index: 3; }\n\n.first-row, .second-row, .third-row {\n  display: -webkit-box;\n  display: flex; }\n\n.row-text {\n  display: -webkit-box;\n  display: flex; }\n\n.text-container {\n  margin: 5px auto 0 auto; }\n\n.text-container span {\n  width: 60px;\n  margin: 0 10px !important;\n  text-align: center;\n  display: inline-block;\n  font-size: 12px; }\n\n.icon-container {\n  margin: 0 auto; }\n\n.first-row {\n  margin-top: 80px; }\n\n.first-row ion-icon {\n  font-size: 40px; }\n\n.first-row ion-button {\n  height: 60px;\n  width: 60px;\n  background: #DDF0FF;\n  border-radius: 50%;\n  margin: 0 10px; }\n\n.second-row {\n  margin-top: 30px; }\n\n.second-row ion-icon {\n  font-size: 40px; }\n\n.second-row ion-button {\n  height: 60px;\n  width: 60px;\n  background: #DDF0FF;\n  border-radius: 50%;\n  margin: 0 10px; }\n\n.third-row {\n  margin-top: 30px; }\n\n.third-row ion-icon {\n  font-size: 40px; }\n\n.third-row ion-button {\n  height: 60px;\n  width: 60px;\n  background: #cf302b;\n  border-radius: 50%;\n  margin: 0 10px; }\n\n.own-video video {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n  height: 50px;\n  width: 30px; }\n\n.OT_widget-container.ng-star-inserted {\n  height: 200px;\n  width: 120px;\n  bottom: 10px;\n  right: 10px;\n  border-radius: 10px; }\n\n#remoteUsers {\n  top: 0;\n  height: 100%; }\n\n.main {\n  position: relative;\n  z-index: 1000; }\n\n.single-user {\n  height: 100%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  opacity: 0.8;\n  z-index: 1000;\n  background-position: center center; }\n\n.caller-img {\n  border-radius: 50%;\n  height: 120px;\n  width: 120px;\n  margin: 10% auto 0 auto; }\n\n.user-name {\n  color: white;\n  font-size: 26px; }\n\n.call-duration {\n  color: white;\n  font-size: 20px; }\n\n.controls ion-icon {\n  font-size: 40px; }\n\n.controls ion-button {\n  height: 60px;\n  width: 60px;\n  border-radius: 50%;\n  border: 1px solid #fff;\n  margin: 30px; }\n\n.end-call {\n  margin-top: 150px; }\n\n.end-call ion-button {\n  background: #cf302b;\n  height: 60px;\n  width: 60px;\n  border-radius: 50%; }\n\n.single-user.two {\n  opacity: 1;\n  position: relative; }\n\n.two .caller-img {\n  height: 90px;\n  width: 90px;\n  margin: 5% auto 0 auto; }\n\n.two .end-call {\n  margin: 0 auto;\n  position: absolute;\n  bottom: 40px;\n  width: 100%; }\n\n.single-user.three {\n  opacity: 1;\n  position: relative; }\n\n.three .caller-img {\n  height: 60px;\n  width: 60px;\n  margin: 2% auto 0 auto; }\n\n.three h3 {\n  margin: 0;\n  font-size: 18px; }\n\n.three .end-call {\n  position: absolute;\n  bottom: 30px;\n  margin: 0 auto;\n  width: 100%; }\n\n.three .end-call ion-button {\n  height: 45px;\n  width: 45px; }\n\n.audio-row {\n  height: 50%; }\n\n.audio-row .single-user {\n  height: 100%;\n  width: 50%; }\n\n.single-user.four {\n  opacity: 1;\n  position: relative; }\n\n.four .caller-img {\n  height: 60px;\n  width: 60px;\n  margin: 2% auto 0 auto; }\n\n.four h3 {\n  margin: 0;\n  font-size: 18px; }\n\n.four .end-call {\n  position: absolute;\n  bottom: 30px;\n  margin: 0 auto;\n  width: 100%; }\n\n.four .end-call ion-button {\n  height: 45px;\n  width: 45px; }\n\nstream-component {\n  display: none;\n  z-index: 0; }\n\n.color-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  opacity: 0.7; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYmJveF9mcm9udGVuZC9zcmMvYXBwL2F1ZGlvLWNhbGwvYXVkaW8tY2FsbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQixFQUFBOztBQUlyQjtFQUNBLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7RUFDVCw0QkFBNEI7RUFDNUIsNkJBQTZCLEVBQUE7O0FBRzdCO0VBQ0EsbUJBQWdCO0VBQ2hCLGlCQUFjLEVBQUE7O0FBR2Q7RUFDQSxhQUFhLEVBQUE7O0FBR2I7RUFDQSxhQUFhLEVBQUE7O0FBR2I7RUFDQSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixTQUFTO0VBQ1QsNEJBQTRCO0VBQzVCLDZCQUE2QixFQUFBOztBQUc3QjtFQUNBLG1CQUFnQjtFQUNoQixpQkFBYyxFQUFBOztBQUdkO0VBQ0EsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsVUFBVTtFQUNWLGVBQWU7RUFDZixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLFVBQVMsRUFBQTs7QUFHVDtFQUNBLG9CQUFhO0VBQWIsYUFBYSxFQUFBOztBQUdiO0VBQ0Esb0JBQWE7RUFBYixhQUFhLEVBQUE7O0FBSWI7RUFDQSx1QkFBdUIsRUFBQTs7QUFHdkI7RUFDQSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZSxFQUFBOztBQUdmO0VBQ0EsY0FBYyxFQUFBOztBQUdkO0VBQ0EsZ0JBQWdCLEVBQUE7O0FBR2hCO0VBQ0EsZUFBZSxFQUFBOztBQUdmO0VBQ0EsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTs7QUFHZDtFQUNBLGdCQUFnQixFQUFBOztBQUdoQjtFQUNBLGVBQWUsRUFBQTs7QUFHZjtFQUNBLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixjQUFjLEVBQUE7O0FBR2Q7RUFDQSxnQkFBZ0IsRUFBQTs7QUFHaEI7RUFDQSxlQUFlLEVBQUE7O0FBR2Y7RUFDQSxZQUFZO0VBQ1osV0FBVztFQUNYLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0FBYyxFQUFBOztBQUdkO0VBQ0Esa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFJWDtFQUNBLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUIsRUFBQTs7QUFHbkI7RUFDQSxNQUFLO0VBQ0wsWUFBWSxFQUFBOztBQU1aO0VBQ0ksa0JBQWtCO0VBQ2xCLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLGtDQUFrQyxFQUFBOztBQUd0QztFQUNJLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksWUFBWTtFQUNaLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxpQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFLdEI7RUFDSSxVQUFVO0VBQ1Ysa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBc0IsRUFBQTs7QUFJMUI7RUFDSSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBTWY7RUFDSSxVQUFVO0VBQ1Ysa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxTQUFTO0VBQ1QsZUFBZSxFQUFBOztBQUduQjtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osY0FBYztFQUNkLFdBQVcsRUFBQTs7QUFJZjtFQUNJLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBSWY7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxZQUFZO0VBQ1osVUFBVSxFQUFBOztBQUdkO0VBQ0ksVUFBVTtFQUNWLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksU0FBUztFQUNULGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGNBQWM7RUFDZCxXQUFXLEVBQUE7O0FBSWY7RUFDSSxZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUdmO0VBQ0ksYUFBYTtFQUNiLFVBQVUsRUFBQTs7QUFHZDtFQUNJLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2F1ZGlvLWNhbGwvYXVkaW8tY2FsbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8vLy8vLy8vLy8vLyBDVVNUT00gU1RZTEVTIC8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi5tYWlue1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuXG4jbWVudS1vcGVue1xudGV4dC1hbGlnbjogY2VudGVyO1xuYmFja2dyb3VuZDogd2hpdGU7XG5oZWlnaHQ6IDQwcHg7XG53aWR0aDogMTAlO1xucG9zaXRpb246IGFic29sdXRlO1xuYm90dG9tOiAwO1xubGVmdDogNDUlO1xuYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbmJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuXG4jbWVudS1vcGVuIGlvbi1idXR0b257XG4tLXBhZGRpbmctc3RhcnQ6MHB4O1xuLS1wYWRkaW5nLWVuZDowcHg7XG59XG5cbi5oaWRle1xuZGlzcGxheTogbm9uZTtcbn1cblxuI21lbnUtb3BlbmVke1xubWFyZ2luOiAwIDEwJTtcbn1cblxuI21lbnUtY2xvc2V7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG5iYWNrZ3JvdW5kOiB3aGl0ZTtcbmhlaWdodDogMzVweDtcbndpZHRoOiAxMCU7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG5ib3R0b206IDMyNXB4O1xubGVmdDogNDUlO1xuYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbmJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuXG4jbWVudS1jbG9zZSBpb24tYnV0dG9ue1xuLS1wYWRkaW5nLXN0YXJ0OjBweDtcbi0tcGFkZGluZy1lbmQ6MHB4O1xufVxuXG4ubWVudXtcbmJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG5ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbmhlaWdodDogMzI1cHg7XG53aWR0aDogODAlO1xucG9zaXRpb246IGZpeGVkO1xuYm90dG9tOiAwO1xuYmFja2dyb3VuZDogd2hpdGU7XG56LWluZGV4OjM7XG59XG5cbi5maXJzdC1yb3csLnNlY29uZC1yb3csLnRoaXJkLXJvd3tcbmRpc3BsYXk6IGZsZXg7XG59XG5cbi5yb3ctdGV4dHtcbmRpc3BsYXk6IGZsZXg7XG59XG5cblxuLnRleHQtY29udGFpbmVye1xubWFyZ2luOiA1cHggYXV0byAwIGF1dG87XG59XG5cbi50ZXh0LWNvbnRhaW5lciBzcGFue1xud2lkdGg6IDYwcHg7XG5tYXJnaW46IDAgMTBweCAhaW1wb3J0YW50O1xudGV4dC1hbGlnbjogY2VudGVyO1xuZGlzcGxheTogaW5saW5lLWJsb2NrO1xuZm9udC1zaXplOiAxMnB4O1xufVxuXG4uaWNvbi1jb250YWluZXJ7XG5tYXJnaW46IDAgYXV0bztcbn1cblxuLmZpcnN0LXJvd3tcbm1hcmdpbi10b3A6IDgwcHg7XG59XG5cbi5maXJzdC1yb3cgaW9uLWljb257XG5mb250LXNpemU6IDQwcHg7XG59XG5cbi5maXJzdC1yb3cgaW9uLWJ1dHRvbntcbmhlaWdodDogNjBweDtcbndpZHRoOiA2MHB4O1xuYmFja2dyb3VuZDogI0RERjBGRjtcbmJvcmRlci1yYWRpdXM6IDUwJTtcbm1hcmdpbjogMCAxMHB4O1xufVxuXG4uc2Vjb25kLXJvd3tcbm1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5zZWNvbmQtcm93IGlvbi1pY29ue1xuZm9udC1zaXplOiA0MHB4O1xufVxuXG4uc2Vjb25kLXJvdyBpb24tYnV0dG9ue1xuaGVpZ2h0OiA2MHB4O1xud2lkdGg6IDYwcHg7XG5iYWNrZ3JvdW5kOiAjRERGMEZGO1xuYm9yZGVyLXJhZGl1czogNTAlO1xubWFyZ2luOiAwIDEwcHg7XG59XG5cbi50aGlyZC1yb3d7XG5tYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4udGhpcmQtcm93IGlvbi1pY29ue1xuZm9udC1zaXplOiA0MHB4O1xufVxuXG4udGhpcmQtcm93IGlvbi1idXR0b257XG5oZWlnaHQ6IDYwcHg7XG53aWR0aDogNjBweDtcbmJhY2tncm91bmQ6ICNjZjMwMmI7XG5ib3JkZXItcmFkaXVzOiA1MCU7XG5tYXJnaW46IDAgMTBweDtcbn1cblxuLm93bi12aWRlbyB2aWRlbyB7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG5yaWdodDogMTBweDtcbmJvdHRvbTogMTBweDtcbmhlaWdodDogNTBweDtcbndpZHRoOiAzMHB4O1xufVxuXG5cbi5PVF93aWRnZXQtY29udGFpbmVyLm5nLXN0YXItaW5zZXJ0ZWR7XG5oZWlnaHQ6IDIwMHB4O1xud2lkdGg6IDEyMHB4O1xuYm90dG9tOiAxMHB4O1xucmlnaHQ6IDEwcHg7XG5ib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4jcmVtb3RlVXNlcnN7XG50b3A6MDtcbmhlaWdodDogMTAwJTtcbn1cblxuXG4gIC8vQXVkaW8gQ2FsbFxuXG4ubWFpbntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTAwMDtcbn1cblxuLnNpbmdsZS11c2Vye1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgb3BhY2l0eTogMC44O1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cblxuLmNhbGxlci1pbWd7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIG1hcmdpbjogMTAlIGF1dG8gMCBhdXRvO1xufVxuXG4udXNlci1uYW1le1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDI2cHg7XG59XG5cbi5jYWxsLWR1cmF0aW9ue1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5jb250cm9scyBpb24taWNvbntcbiAgICBmb250LXNpemU6IDQwcHg7XG59XG4gICAgXG4uY29udHJvbHMgaW9uLWJ1dHRvbntcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgbWFyZ2luOiAzMHB4O1xufVxuXG4uZW5kLWNhbGx7XG4gICAgbWFyZ2luLXRvcDoxNTBweDtcbn1cblxuLmVuZC1jYWxsIGlvbi1idXR0b257XG4gICAgYmFja2dyb3VuZDogI2NmMzAyYjtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4vL1R3byB1c2VycyBTdHlsZVxuXG4uc2luZ2xlLXVzZXIudHdve1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udHdvIC5jYWxsZXItaW1ne1xuICAgIGhlaWdodDogOTBweDtcbiAgICB3aWR0aDogOTBweDtcbiAgICBtYXJnaW46IDUlIGF1dG8gMCBhdXRvO1xufVxuXG5cbi50d28gLmVuZC1jYWxse1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDQwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cblxuXG4vL1RocmVlIHVzZXJzIFN0eWxlXG4uc2luZ2xlLXVzZXIudGhyZWV7XG4gICAgb3BhY2l0eTogMTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50aHJlZSAuY2FsbGVyLWltZ3tcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgbWFyZ2luOiAyJSBhdXRvIDAgYXV0bztcbn1cblxuLnRocmVlIGgze1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi50aHJlZSAuZW5kLWNhbGx7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMzBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuXG4udGhyZWUgLmVuZC1jYWxsIGlvbi1idXR0b257XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIHdpZHRoOiA0NXB4O1xufVxuXG4vL0ZvdXIgVXNlciBTdHlsZXNcbi5hdWRpby1yb3d7XG4gICAgaGVpZ2h0OiA1MCU7XG59XG5cbi5hdWRpby1yb3cgLnNpbmdsZS11c2Vye1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogNTAlO1xufVxuXG4uc2luZ2xlLXVzZXIuZm91cntcbiAgICBvcGFjaXR5OiAxO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZvdXIgLmNhbGxlci1pbWd7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIG1hcmdpbjogMiUgYXV0byAwIGF1dG87XG59XG5cbi5mb3VyIGgze1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5mb3VyIC5lbmQtY2FsbHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAzMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5cbi5mb3VyIC5lbmQtY2FsbCBpb24tYnV0dG9ue1xuICAgIGhlaWdodDogNDVweDtcbiAgICB3aWR0aDogNDVweDtcbn1cblxuc3RyZWFtLWNvbXBvbmVudCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB6LWluZGV4OiAwO1xufVxuXG4uY29sb3Itb3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBvcGFjaXR5OiAwLjc7XG59XG5cbiAgICBcbiAgIl19 */"

/***/ }),

/***/ "./src/app/audio-call/audio-call.page.ts":
/*!***********************************************!*\
  !*** ./src/app/audio-call/audio-call.page.ts ***!
  \***********************************************/
/*! exports provided: AudioCallPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioCallPage", function() { return AudioCallPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/models/user-model */ "./src/app/shared/models/user-model.ts");
/* harmony import */ var _shared_layout_openvidu_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/layout/openvidu-layout */ "./src/app/shared/layout/openvidu-layout.ts");
/* harmony import */ var openvidu_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! openvidu-browser */ "./node_modules/openvidu-browser/lib/index.js");
/* harmony import */ var openvidu_browser__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(openvidu_browser__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_services_openvidu_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/services/openvidu.service */ "./src/app/shared/services/openvidu.service.ts");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");
/* harmony import */ var _shared_components_stream_stream_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/components/stream/stream.component */ "./src/app/shared/components/stream/stream.component.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm2015/Rx.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shareduser_user_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shareduser/user.service */ "./src/app/shareduser/user.service.ts");
/* harmony import */ var _services_contacts_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/contacts.service */ "./src/app/services/contacts.service.ts");
/* harmony import */ var _shared_group_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/group.service */ "./src/app/shared/group.service.ts");
/* harmony import */ var _services_audio_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../services/audio.service */ "./src/app/services/audio.service.ts");


















let AudioCallPage = class AudioCallPage {
    constructor(platform, router, route, openViduSrv, modalController, androidPermissions, alertController, storage, translate, location, userService, contactsService, groupService, audio) {
        this.platform = platform;
        this.router = router;
        this.route = route;
        this.openViduSrv = openViduSrv;
        this.modalController = modalController;
        this.androidPermissions = androidPermissions;
        this.alertController = alertController;
        this.storage = storage;
        this.translate = translate;
        this.location = location;
        this.userService = userService;
        this.contactsService = contactsService;
        this.groupService = groupService;
        this.audio = audio;
        this.lang = 'EN';
        // Constants
        this.BIG_ELEMENT_CLASS = 'OV_big';
        this.buttonsVisibility = 'in';
        this.chatNotification = 'in';
        this.cameraBtnColor = 'light';
        this.camBtnColor = 'light';
        this.camBtnIcon = 'videocam';
        this.micBtnColor = 'light';
        this.micBtnIcon = 'mic';
        this.chatBtnColor = 'light';
        this.messageReceived = false;
        this.messageList = [];
        this.modalIsPresented = false;
        this.setUpModalIsPresented = true;
        this.videoDevices = [];
        this.audioDevices = [];
        this.speakerphone = false;
        this.users_no = 1;
        this.ticks = 0;
        this.timing = 'Connecting...';
        this.timer = false;
        this.call_started = false;
        this.speakerBtnIcon = 'md-volume-off';
        this.minutesDisplay = 0;
        this.hoursDisplay = 0;
        this.secondsDisplay = 0;
        this.mySessionId = 'Baba';
    }
    beforeunloadHandler() {
        this.exitSession();
    }
    sizeChange(event) {
        clearTimeout(this.resizeTimeout);
        this.updateLayout();
    }
    overrideHardwareBackAction(event) {
        console.log('back button');
        this.confirmExit();
        event.detail.register(100, () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }));
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.platform.ready().then(() => {
                this.storage.get('language')
                    .then(lang => {
                    if (lang) {
                        this.lang = lang;
                    }
                });
                this.route.params.subscribe(params => {
                    this.mySessionId = params['id'];
                    console.log(this.mySessionId);
                    this.storage.get('id')
                        .then(user_id => {
                        if (user_id) {
                            this.groupService.getGroupDetails(this.mySessionId, user_id)
                                .then(res => {
                                console.log('GROUP DATA', res);
                                this.group_data = res;
                                if (this.group_data.members.length == 2) {
                                    let member = this.group_data.memberData.find(o => o._id != user_id);
                                    var contact = this.contactsService.getContactName(member._id);
                                    this.group_data.name = contact ? contact : member.mobile;
                                }
                            }).catch(err => console.log('GROUP DATA ERROR', err));
                        }
                    });
                });
                this.OV = new openvidu_browser__WEBPACK_IMPORTED_MODULE_6__["OpenVidu"]();
                this.localUser = new _shared_models_user_model__WEBPACK_IMPORTED_MODULE_4__["UserModel"]();
                if (this.platform.is('cordova') && this.platform.is('android')) {
                    this.openViduSrv.checkAndroidPermissions().then(() => {
                        navigator.mediaDevices.ondevicechange = (ev) => { this.initDevices(); };
                        this.initPublisher().then(() => { this.setUpModalIsPresented = false; this.initDevices(); }).catch((error) => console.log(error));
                    }).catch((err) => {
                        console.log(err);
                    });
                }
                else {
                    this.initPublisher().then(() => { this.setUpModalIsPresented = false; this.initDevices(); }).catch((error) => console.log(error));
                }
            });
        });
    }
    ionViewDidEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //   // Open modal to setting up the session
            //   const modal = await this.modalController.create({
            //     component: SettingUpModalComponent,
            //     showBackdrop: false,
            //     componentProps: {}
            //   });
            //   modal.onWillDismiss().then((data: any) => {
            //       if (data.data && data.data.user) {
            //           this.localUser = data.data.user;
            //           this.videoDevices = data.data.videoDevices;
            //           this.setUpModalIsPresented = false;
            //           this.initApp();
            //       } else {
            //           // Go back
            //             this.router.navigate(['/']);    
            //       }
            //   });
            //   return await modal.present().then(() => {
            //       this.refreshVideos();
            //   });
        });
    }
    initApp() {
        console.log(this.localUser);
        console.log(this.videoDevices);
        this.setUpModalIsPresented;
        this.localUser.setType('local');
        this.checkAudioButton();
        this.checkVideoButton();
        this.remoteUsers = [];
        this.generateParticipantInfo();
        this.openviduLayout = new _shared_layout_openvidu_layout__WEBPACK_IMPORTED_MODULE_5__["OpenViduLayout"]();
        this.openviduLayoutOptions = {
            maxRatio: 3 / 2,
            minRatio: 9 / 16,
            fixedRatio: false /* If this is true then the aspect ratio of the video is maintained
      and minRatio and maxRatio are ignored (default false)*/,
            bigClass: 'OV_big',
            bigPercentage: 0.82,
            bigFixedRatio: false,
            bigMaxRatio: 3 / 2,
            bigMinRatio: 9 / 16,
            bigFirst: false,
            animate: true,
        };
        this.openviduLayout.initLayoutContainer(document.getElementById('layout'), this.openviduLayoutOptions);
        if (this.platform.is('cordova') && this.platform.is('ios')) {
            setInterval(() => {
                this.updateLayout();
            }, 1000);
        }
        this.joinToSession();
        this.audio.playOnLoop('calling-tone');
    }
    ngOnDestroy() {
        this.exitSession();
    }
    confirmExit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Are You Sure You Want To Exit This Call?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    },
                    {
                        text: 'Exit',
                        handler: () => {
                            console.log('Quit Call');
                            this.exitSession();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    joinToSession() {
        this.OV = new openvidu_browser__WEBPACK_IMPORTED_MODULE_6__["OpenVidu"]();
        this.session = this.OV.initSession();
        this.subscribeToUserChanged();
        this.subscribeToStreamCreated();
        this.subscribedToStreamDestroyed();
        // this.subscribedToChat();
        this.connectToSession();
        // this.startTimer();
        //originalvikas
        // let value = this.translate.instant(['Connecting','Call_Timed_Out'], { value: this.lang });
        let value = this.translate.instant(['Connecting', 'Call_Timed_Out'], { value: this.lang });
        this.timing = value.Connecting;
        this.timer = true;
        setTimeout(() => {
            if (this.call_started = false) {
                this.timing = value.Call_Timed_Out;
                this.audio.playOnLoop('call-ended-tone');
                this.timer = false;
            }
        }, 60000);
        setTimeout(() => {
            if (this.call_started = false) {
                this.exitSession();
            }
        }, 63000);
    }
    exitSession() {
        if (this.session) {
            this.session.disconnect();
        }
        this.remoteUsers = [];
        this.session = null;
        this.localUser = null;
        this.OV = null;
        this.audio.stop('calling-tone');
        this.audio.stop('call-ended-tone');
        this.openviduLayout = null;
        this.sub ? this.sub.unsubscribe() : false;
        this.router.navigate(['/home/tabs/tab1']);
    }
    resetVideoSize() {
        const element = document.querySelector('.' + this.BIG_ELEMENT_CLASS);
        if (element) {
            element.classList.remove(this.BIG_ELEMENT_CLASS);
            this.bigElement = undefined;
            this.updateLayout();
        }
    }
    checkVideoButton() {
        if (this.localUser.isVideoActive()) {
            this.camBtnIcon = 'videocam';
            this.camBtnColor = 'light';
        }
        else {
            this.camBtnIcon = 'eye-off';
            this.camBtnColor = 'primary';
        }
    }
    checkAudioButton() {
        if (this.localUser.isAudioActive()) {
            this.micBtnIcon = 'mic-off';
            this.micBtnColor = 'light';
        }
        else {
            this.micBtnIcon = 'mic';
            this.micBtnColor = 'primary';
        }
    }
    micStatusChanged() {
        this.localUser.setAudioActive(!this.localUser.getStreamManager().stream.audioActive);
        this.localUser.getStreamManager().publishAudio(this.localUser.isAudioActive());
        this.checkAudioButton();
    }
    camStatusChanged() {
        this.localUser.setVideoActive(!this.localUser.getStreamManager().stream.videoActive);
        this.localUser.getStreamManager().publishVideo(this.localUser.isVideoActive());
        this.checkVideoButton();
    }
    toggleCamera() {
        if (this.platform.is('cordova')) {
            if (this.videoDevices && this.videoDevices.length > 0) {
                let videoSource;
                // Select the first different device
                videoSource = this.videoDevices.filter((device) => device.deviceId !== this.localUser.getVideoSource())[0];
                console.log('SETTING DEVICE: ', videoSource);
                this.localUser.setVideoSource(videoSource.deviceId);
                this.localUser.setIsBackCamera(!this.localUser.isBackCamera());
                this.session.unpublish(this.localUser.getStreamManager());
                const publisher = this.OV.initPublisher(undefined, {
                    videoSource: this.localUser.getVideoSource(),
                    publishAudio: this.localUser.isVideoActive(),
                    publishVideo: this.localUser.isVideoActive(),
                    mirror: !this.localUser.isBackCamera()
                });
                this.cameraBtnColor = this.cameraBtnColor === 'light' ? 'primary' : 'light';
                this.localUser.setStreamManager(null);
                setTimeout(() => {
                    this.localUser.setStreamManager(publisher);
                    this.updateLayout();
                    this.session.publish(publisher);
                });
            }
        }
    }
    toggleButtons() {
        this.buttonsVisibility = this.buttonsVisibility === 'in' ? 'out' : 'in';
        this.chatNotification = this.buttonsVisibility;
    }
    toggleButtonsOrEnlargeStream(event) {
        event.preventDefault();
        event.stopPropagation();
        const path = event.path || event.composedPath();
        const element = path.filter((e) => e.className && e.className.includes('OT_root'))[0];
        if (this.bigElement && element === this.bigElement) {
            this.toggleButtons();
        }
        else if (this.bigElement !== element) {
            if (this.bigElement) {
                this.bigElement.classList.remove(this.BIG_ELEMENT_CLASS);
            }
            else {
                this.toggleButtons();
            }
            element.classList.add(this.BIG_ELEMENT_CLASS);
            this.bigElement = element;
        }
        this.updateLayout();
    }
    generateParticipantInfo() {
        // this.mySessionId = 'A';
        this.storage.get('name').then((name) => {
            this.myUserName = name;
        });
    }
    deleteRemoteStream(stream) {
        const userStream = this.remoteUsers.filter((user) => user.getStreamManager().stream === stream)[0];
        const index = this.remoteUsers.indexOf(userStream, 0);
        if (index > -1) {
            this.remoteUsers.splice(index, 1);
        }
        if (this.remoteUsers.length == 0) {
            //originalvikas
            // let value = this.translate.instant('Call_ended', { value: this.lang });
            let value = this.translate.instant('Call_ended', { value: this.lang });
            this.timing = value.Call_ended;
        }
    }
    subscribeToUserChanged() {
        this.session.on('signal:userChanged', (event) => {
            const data = JSON.parse(event.data);
            this.remoteUsers.forEach((user) => {
                if (user.getConnectionId() === event.from.connectionId) {
                    if (data.avatar !== undefined) {
                        user.setUserAvatar(data.avatar);
                    }
                }
            });
        });
    }
    subscribeToStreamCreated() {
        this.session.on('streamCreated', (event) => {
            const subscriber = this.session.subscribe(event.stream, undefined);
            subscriber.on('streamPlaying', (e) => {
                this.updateLayout();
                subscriber.videos[0].video.parentElement.classList.remove('custom-class');
            });
            const newUser = new _shared_models_user_model__WEBPACK_IMPORTED_MODULE_4__["UserModel"]();
            newUser.setStreamManager(subscriber);
            newUser.setConnectionId(event.stream.connection.connectionId);
            const nickname = event.stream.connection.data.split('%')[0];
            try {
                newUser.setNickname(JSON.parse(nickname).clientData);
            }
            catch (err) {
                newUser.setNickname(nickname);
            }
            newUser.setType('remote');
            this.openViduSrv.getRandomAvatar().then((avatar) => {
                newUser.setUserAvatar(avatar);
                this.remoteUsers.push(newUser);
                console.log('REMOTE USERS', this.remoteUsers);
                this.startTimer();
                this.call_started = true;
                this.audio.stop('calling-tone');
                this.sendSignalUserAvatar(this.localUser);
                if (this.platform.is('cordova')) {
                    AudioToggle.setAudioMode(AudioToggle.EARPIECE);
                }
                this.audio_output = 'earpiece';
            });
            this.buttonsVisibility = 'out';
            this.chatNotification = 'out';
        });
    }
    subscribedToStreamDestroyed() {
        this.session.on('streamDestroyed', (event) => {
            this.deleteRemoteStream(event.stream);
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = setTimeout(() => {
                this.updateLayout();
            }, 20);
            event.preventDefault();
            this.call_started = false;
            let value = this.translate.instant(['Connecting', 'Call_Timed_Out'], { value: this.lang });
            this.timing = value.Call_Timed_Out;
            this.audio.playOnLoop('call-ended-tone');
            this.timer = false;
            setTimeout(() => {
                this.exitSession();
            }, 3000);
        });
    }
    sendSignalUserAvatar(user) {
        const data = {
            avatar: user.getAvatar(),
        };
        const signalOptions = {
            data: JSON.stringify(data),
            type: 'userChanged',
        };
        this.session.signal(signalOptions);
    }
    connectToSession() {
        this.openViduSrv
            .getToken(this.mySessionId)
            .then((token) => {
            this.connect(token);
        })
            .catch((error) => {
            console.error('There was an error getting the token:', error.code, error.message);
            this.openAlertError(error.message);
        });
    }
    connect(token) {
        this.session
            .connect(token, { clientData: this.myUserName })
            .then(() => {
            this.connectWebCam();
        })
            .catch((error) => {
            console.error('There was an error connecting to the session:', error.code, error.message);
            this.openAlertError(error.message);
        });
    }
    connectWebCam() {
        this.localUser.setNickname(this.myUserName);
        this.localUser.setConnectionId(this.session.connection.connectionId);
        this.session.publish(this.localUser.getStreamManager());
        this.localUser.getStreamManager().on('streamPlaying', () => {
            this.localUser.getStreamManager().videos[0].video.parentElement.classList.remove('custom-class');
            this.updateLayout();
        });
        this.openViduSrv.getRandomAvatar().then((avatar) => {
            this.localUser.setUserAvatar(avatar);
            this.sendSignalUserAvatar(this.localUser);
        });
        this.updateLayout();
    }
    updateLayout() {
        this.resizeTimeout = setTimeout(() => {
            if (this.openviduLayout) {
                this.openviduLayout.updateLayout();
                // (<HTMLElement>document.querySelector('#localUser .OT_widget-container.ng-star-inserted')).style.cssText='height: 200px;width: 120px;bottom: 10px;right: 3%;border-radius: 10px;position:fixed; z-index:1;';
                // (<HTMLElement>document.querySelector('#remoteUsers stream-component')).style.cssText="position:fixed; top:50px;height:100%;width:100%";
                // if (this.platform.is('cordova') && this.platform.is('ios')) {
                //     setTimeout(() => {
                //         if (this.streamComponentLocal) {
                //             this.streamComponentLocal.videoComponent.applyIosIonicVideoAttributes();
                //         }
                //         if (this.streamComponentRemotes.length > 0) {
                //             this.streamComponentRemotes.forEach((stream: StreamComponent) => {
                //                 stream.videoComponent.applyIosIonicVideoAttributes();
                //             });
                //         }
                //     }, 250);
                // }
                this.camStatusChanged();
            }
        }, 20);
    }
    refreshVideos() {
        if (this.platform.is('ios') && this.platform.is('cordova')) {
            cordova.plugins.iosrtc.refreshVideos();
        }
    }
    openAlertError(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let value = this.translate.instant(['Error_occurred', 'There_was_an_error_connecting_to_the_session', 'OK'], { value: this.lang });
            const alert = yield this.alertController.create({
                header: value.Error_occurred,
                subHeader: value.There_was_an_error_connecting_to_the_session,
                message: message,
                buttons: [value.OK],
            });
            yield alert.present();
        });
    }
    toggleMenu() {
        document.querySelector('#menu-open').classList.toggle('hide');
        document.querySelector('#menu-opened').classList.toggle('hide');
    }
    initDevices() {
        this.OV.getDevices().then((devices) => {
            console.log("ALL Devices", devices);
            this.audioDevices = devices.filter((device) => device.kind === 'audioinput');
            console.log('Audio Devices', this.audioDevices);
            this.videoDevices = devices.filter((device) => device.kind === 'videoinput');
            if (this.platform.is('cordova')) {
                if (this.platform.is('ios')) {
                    console.log('iOS platform');
                    setTimeout(() => {
                        this.refreshVideos();
                    }, 1100);
                }
                else if (this.platform.is('android')) {
                    console.log('Android platform');
                }
                console.log("DEVICES", this.videoDevices);
                // this.localUser.setVideoSource(this.videoDevices.filter((device: any) => device.label.includes('Front'))[0].deviceId);
                this.localUser.setVideoSource(this.videoDevices[0].deviceId);
            }
            this.initApp();
        });
    }
    setAudioDevice(event) {
        console.log('Setting audio device to: ', event.detail.value.label);
        this.audioDevice = event.detail.value;
        const audioSource = this.audioDevice.deviceId === 'None' ? undefined : this.audioDevice.deviceId;
        this.localUser.setAudioActive(!!audioSource);
        this.localUser.setAudioSource(audioSource);
        if (!!audioSource) {
            this.destroyPublisher();
            this.initPublisher();
        }
        else {
            this.micOff();
        }
    }
    setVideoDevice(event) {
        console.log('Setting video device to: ', event.detail.value.label);
        const videoSource = event.detail.value.deviceId === 'None' ? undefined : event.detail.value.deviceId;
        this.localUser.setVideoActive(!!videoSource);
        this.localUser.setVideoSource(videoSource);
        if (!!videoSource) {
            this.destroyPublisher();
            this.initPublisher();
        }
        else {
            this.camOff();
        }
    }
    camOff() {
        this.localUser.getStreamManager().publishVideo(false);
    }
    micOff() {
        this.localUser.getStreamManager().publishAudio(false);
    }
    initPublisher() {
        return new Promise((resolve, reject) => {
            console.log('initialize publisher');
            const device = this.videoDevices.filter((video) => video.deviceId === this.localUser.getVideoSource());
            let isBackCamera = false;
            if (this.platform.is('cordova')) {
                isBackCamera = !!device[0] && device[0].label.includes('Back');
            }
            this.localUser.setIsBackCamera(isBackCamera);
            this.OV.initPublisherAsync(undefined, {
                audioSource: this.localUser.getAudioSource(),
                videoSource: this.localUser.getVideoSource(),
                publishAudio: this.localUser.isAudioActive(),
                publishVideo: this.localUser.isVideoActive(),
                mirror: !this.localUser.isBackCamera()
            })
                .then((publisher) => {
                this.localUser.setStreamManager(publisher);
                resolve(publisher);
            })
                .catch((error) => reject(error));
        });
    }
    destroyPublisher() {
        console.log('Destroying publisher...');
        if (this.localUser.getStreamManager() && this.localUser.getStreamManager().stream) {
            this.localUser.getStreamManager().stream.disposeWebRtcPeer();
            this.localUser.getStreamManager().stream.disposeMediaStream();
            this.localUser.setStreamManager(null);
        }
    }
    startTimer(time = null) {
        this.sub = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_10__["Subscription"];
        let timer = rxjs_Rx__WEBPACK_IMPORTED_MODULE_10__["Observable"].timer(1, 1000);
        this.sub = timer.subscribe(t => {
            this.ticks = t;
            this.secondsDisplay = this.getSeconds(this.ticks);
            this.minutesDisplay = this.getMinutes(this.ticks);
            this.hoursDisplay = this.getHours(this.ticks);
        });
    }
    getSeconds(ticks) {
        return this.pad(ticks % 60);
    }
    getMinutes(ticks) {
        return this.pad((Math.floor(ticks / 60)) % 60);
    }
    getHours(ticks) {
        return this.pad(Math.floor((ticks / 60) / 60));
    }
    pad(digit) {
        return digit <= 9 ? '0' + digit : digit;
    }
    toggleAudio() {
        if (this.platform.is('cordova')) {
            console.log('Clicked');
            if (this.audioDevices && this.audioDevices.length > 0) {
                console.log('More than 1');
                let audioSource;
                // Select the first different device
                audioSource = this.audioDevices.filter((device) => device.deviceId !== this.localUser.getAudioSource())[0];
                console.log('SETTING DEVICE: ', audioSource);
                this.localUser.setAudioSource(audioSource.deviceId);
            }
        }
    }
    setAudio() {
        console.log(this.audio_output);
        if (this.audio_output == 'earpiece') {
            AudioToggle.setAudioMode(AudioToggle.SPEAKER);
            this.audio_output = 'speaker';
            this.speakerBtnIcon = 'md-volume-high';
            console.log(this.audio_output);
        }
        else {
            AudioToggle.setAudioMode(AudioToggle.EARPIECE);
            this.audio_output = 'earpiece';
            this.speakerBtnIcon = 'md-volume-off';
            console.log(this.audio_output);
        }
    }
};
AudioCallPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _shared_services_openvidu_service__WEBPACK_IMPORTED_MODULE_7__["OpenViduService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_8__["AndroidPermissions"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"] },
    { type: _shareduser_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"] },
    { type: _services_contacts_service__WEBPACK_IMPORTED_MODULE_15__["ContactsService"] },
    { type: _shared_group_service__WEBPACK_IMPORTED_MODULE_16__["GroupService"] },
    { type: _services_audio_service__WEBPACK_IMPORTED_MODULE_17__["AudioService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mainStream', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], AudioCallPage.prototype, "mainStream", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('streamComponentRemotes'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
], AudioCallPage.prototype, "streamComponentRemotes", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('streamComponentLocal', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shared_components_stream_stream_component__WEBPACK_IMPORTED_MODULE_9__["StreamComponent"])
], AudioCallPage.prototype, "streamComponentLocal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:beforeunload'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], AudioCallPage.prototype, "beforeunloadHandler", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], AudioCallPage.prototype, "sizeChange", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:ionBackButton', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], AudioCallPage.prototype, "overrideHardwareBackAction", null);
AudioCallPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-audio-call',
        template: __webpack_require__(/*! raw-loader!./audio-call.page.html */ "./node_modules/raw-loader/index.js!./src/app/audio-call/audio-call.page.html"),
        styles: [__webpack_require__(/*! ./audio-call.page.scss */ "./src/app/audio-call/audio-call.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _shared_services_openvidu_service__WEBPACK_IMPORTED_MODULE_7__["OpenViduService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_8__["AndroidPermissions"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"],
        _shareduser_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"],
        _services_contacts_service__WEBPACK_IMPORTED_MODULE_15__["ContactsService"],
        _shared_group_service__WEBPACK_IMPORTED_MODULE_16__["GroupService"],
        _services_audio_service__WEBPACK_IMPORTED_MODULE_17__["AudioService"]])
], AudioCallPage);



/***/ })

}]);
//# sourceMappingURL=audio-call-audio-call-module-es2015.js.map