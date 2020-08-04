(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["send-message-send-message-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/send-message/send-message.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/send-message/send-message.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n          <ion-button (click)=\"goBack()\">\n            <ion-icon class=\"back-button\" slot=\"icon-only\" name=\"md-arrow-back\"></ion-icon>\n          </ion-button>\n      </ion-buttons>\n      <ion-title routerLink=\"groupdetails\">\n        {{'Send Message'|translate}}\n      </ion-title>\n      <ion-buttons slot=\"end\" size-xs=\"small\">\n        <ion-button>\n          <ion-icon slot=\"icon-only\" name=\"md-call\"></ion-icon>\n        </ion-button>\n        <ion-button>\n          <ion-icon slot=\"icon-only\" name=\"md-videocam\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n\n  <div class=\"main\">\n      <p class=\"header\">{{'Message will be sent to'|translate}}</p>\n\n      <div class=\"all-message-container\" (click)=\"selectAll($event)\">\n        <div class=\"images-container\">\n          <div class=\"first-row\">\n              <img [src]=\"'http://198.12.92.202/public/uploads/' + (userArray[0] ? userArray[0].avatar: '')\" onError=\"this.src='assets/images/user.png';\" class=\"small-image\">\n              <img [src]=\"'http://198.12.92.202/public/uploads/' + (userArray[1] ? userArray[1].avatar: '')\" onError=\"this.src='assets/images/user.png';\" class=\"small-image\">\n          </div>\n          <div class=\"second-row\">\n              <img [src]=\"'http://198.12.92.202/public/uploads/' + (userArray[2] ? userArray[2].avatar: '')\" onError=\"this.src='assets/images/user.png';\" class=\"small-image\">\n              <img [src]=\"'http://198.12.92.202/public/uploads/' + (userArray[3] ? userArray[3].avatar: '')\" onError=\"this.src='assets/images/user.png';\" class=\"small-image\">\n          </div>\n        </div>\n        <ion-icon slot=\"icon-only\" name=\"md-checkmark\" color=\"light\" class=\"checkmark hidden\"></ion-icon>\n        <p class=\"all-text\">{{'All'|translate}}</p>\n      </div>\n\n      <p class=\"header sub\">{{'Select Members'|translate}}</p>\n\n      <div class=\"all-images-row\">\n        <div *ngFor=\"let user of userArray; index as pos\" class=\"individual-user-container\" id=\"container-{{ pos+1 }}\">\n          <div class=\"individual-image-container\" (click)=\"selectIndividual($event, pos)\" >\n              <img class=\"large-image\" id=\"image-{{ pos+1 }}\" *ngIf=\"user.avatar\" [src]=\"'http://198.12.92.202/public/uploads/' + user.avatar\" onError=\"this.src='assets/images/user.png';\">\n              <img class=\"large-image\" id=\"image-{{ pos+1 }}\" *ngIf=\"!user.avatar\" src=\"assets/images/user.png\">\n          </div>\n          <ion-icon slot=\"icon-only\" name=\"md-checkmark\" color=\"light\" class=\"individual-checkmark\" id=\"{{ pos+1 }}\" (click)=\"selectIndividual($event, pos)\" ></ion-icon>\n          <p class=\"individual-name\">{{ user.name }}</p>\n        </div>\n      </div>\n\n      <div class=\"type-message\">\n        <!-- Text Message Area -->\n        <div class=\"type-message-container\">\n          <ion-item class=\"preview\" *ngFor=\"let img of images; index as pos\" text-wrap>\n            <ion-thumbnail *ngIf=\"getExt(img) != 'video'\" slot=\"start\">\n              <ion-img [src]=\"img.path\"></ion-img>\n            </ion-thumbnail>\n            <ion-thumbnail *ngIf=\"getExt(img) == 'video'\" slot=\"start\">\n              <video [src]=\"img.path\" height=\"50\" width=\"70\" muted [muted]=\"true\" preload=\"auto\" playsinline autoplay loop></video>\n            </ion-thumbnail>\n            <ion-label>\n              {{ img.displayName }}\n            </ion-label>\n            <ion-button *ngIf=\"uploading == false\" slot=\"end\" fill=\"clear\" (click)=\"deleteFile(img, pos)\">\n              <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n            </ion-button>\n            <ion-spinner *ngIf=\"uploading == true\" name=\"crescent\" color=\"primary\"></ion-spinner>\n          </ion-item>\n          <ion-item class=\"preview\" *ngFor=\"let doc of docs; index as pos\" text-wrap>\n            <ion-chip color=\"primary\">\n              <ion-icon name=\"attach\" color=\"primary\"></ion-icon>\n            </ion-chip>\n            <ion-label>\n              {{ doc.name}}\n            </ion-label>  \n            <ion-button *ngIf=\"uploading == false\" slot=\"end\" fill=\"clear\" (click)=\"deleteFile(doc, pos)\">\n              <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n            </ion-button>\n            <ion-spinner *ngIf=\"uploading == true\" name=\"crescent\" color=\"primary\"></ion-spinner>\n          </ion-item>\n          <form [formGroup]=\"groupform\" (ngSubmit)=\"onSubmit()\">\n          <ion-input type=\"text\"  formControlName=\"adminname\" value=\"{{ adminname }}\" hidden></ion-input>\n            <div class=\"chatbox-wrapper\">\n              <ion-item class=\"rounded\" lines=\"none\">\n                  <ion-textarea placeholder=\"{{'Enter Message' | translate}}...\" rows=\"3\" (keyup.enter)=\"onSubmit()\" name=\"message\" formControlName=\"message\"></ion-textarea>\n              </ion-item>\n            </div>\n          \n            <div class=\"buttons-container\">\n                <ion-button (click)=\"selectAFile()\" fill=\"clear\">\n                    <ion-icon slot=\"icon-only\" name=\"md-attach\" color=\"medium\"></ion-icon>\n                </ion-button>\n                <!-- <input type=\"file\" (change)=\"getFileFromBrowser($event, 'video')\" id=\"video\" accept=\"video/mp4,video/x-m4v,video/*\" style=\"display: none\"> -->\n                <ion-button (click)=\"selectVideoFromGallery()\" fill=\"clear\">\n                    <ion-icon slot=\"icon-only\" name=\"md-videocam\" color=\"medium\"></ion-icon>\n                </ion-button>\n                \n                <!-- <input type=\"file\" (change)=\"getFileFromBrowser($event, 'image')\" id=\"image\" accept=\"image/*\" style=\"display: none\"> -->\n                <ion-button (click)=\"selectImage()\" fill=\"clear\">\n                  <ion-icon slot=\"icon-only\" name=\"md-camera\" color=\"medium\"></ion-icon>\n                </ion-button>\n  \n                <ion-button fill=\"clear\" type=\"submit\">\n                  <ion-icon slot=\"icon-only\" name=\"md-send\" color=\"primary\"></ion-icon>\n                </ion-button>\n            </div>\n          </form>\n        </div>\n      </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/send-message/send-message.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/send-message/send-message.module.ts ***!
  \*****************************************************/
/*! exports provided: SendMessagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMessagePageModule", function() { return SendMessagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _send_message_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./send-message.page */ "./src/app/send-message/send-message.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _group_chat_admin_group_chat_admin_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../group-chat-admin/group-chat-admin.page */ "./src/app/group-chat-admin/group-chat-admin.page.ts");









var routes = [
    {
        path: '',
        component: _send_message_page__WEBPACK_IMPORTED_MODULE_6__["SendMessagePage"]
    }
];
var SendMessagePageModule = /** @class */ (function () {
    function SendMessagePageModule() {
    }
    SendMessagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_send_message_page__WEBPACK_IMPORTED_MODULE_6__["SendMessagePage"]],
            providers: [_group_chat_admin_group_chat_admin_page__WEBPACK_IMPORTED_MODULE_8__["GroupChatAdminPage"]]
        })
    ], SendMessagePageModule);
    return SendMessagePageModule;
}());



/***/ }),

/***/ "./src/app/send-message/send-message.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/send-message/send-message.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  text-align: left; }\n\n.main {\n  margin: 20px; }\n\n.header {\n  color: #1A1A1A;\n  font-weight: bold;\n  margin-bottom: 0px; }\n\n.header.sub {\n  color: #005DDD;\n  margin-top: 0;\n  margin-bottom: 20px; }\n\n.all-message-container {\n  width: 50px;\n  margin-top: 20px; }\n\n.images-container {\n  width: 50px;\n  height: 50px;\n  text-align: center;\n  border-radius: 50%;\n  padding-left: 3px; }\n\n.overlay {\n  background: #69A8FF; }\n\n.overlay .small-image {\n  opacity: 0.5; }\n\n.all-text {\n  margin-top: 35px;\n  width: 50px;\n  color: #1A1A1A;\n  text-align: center;\n  font-weight: 600;\n  font-size: 12px;\n  position: relative;\n  bottom: 30px;\n  margin-bottom: 0; }\n\n.all-text.blue {\n  color: #005DDD; }\n\n.first-row {\n  display: -webkit-box;\n  display: flex;\n  padding-left: 3px;\n  padding-top: 4px; }\n\n.second-row {\n  display: -webkit-box;\n  display: flex;\n  padding-left: 3px; }\n\n.images-container .small-image {\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  margin: 3px 2px; }\n\n.checkmark {\n  font-size: 30px;\n  position: relative;\n  bottom: 40px;\n  left: 10px; }\n\n.hidden {\n  visibility: hidden; }\n\n.all-images-row {\n  display: -webkit-box;\n  display: flex;\n  overflow-x: auto;\n  min-height: 80px; }\n\n.individual-user-container {\n  width: 50px;\n  height: 50px;\n  margin: 0 5px; }\n\n.individual-image-container {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  background: #69A8FF;\n  margin: 0 auto; }\n\n.large-image {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%; }\n\n.individual-name {\n  margin-top: 2px;\n  color: #1A1A1A;\n  text-align: center;\n  font-weight: 600;\n  font-size: 12px;\n  position: relative;\n  bottom: 30px;\n  margin-bottom: 0; }\n\n.individual-checkmark {\n  font-size: 25px;\n  position: relative;\n  bottom: 33px;\n  left: 12px;\n  visibility: hidden; }\n\n.individual-overlay .large-image {\n  opacity: 0.5 !important; }\n\n.individual-overlay .individual-name {\n  color: #005DDD !important; }\n\n.individual-overlay .individual-checkmark {\n  visibility: visible; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYmJveF9mcm9udGVuZC9zcmMvYXBwL3NlbmQtbWVzc2FnZS9zZW5kLW1lc3NhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0ksWUFBVyxFQUFBOztBQUlmO0VBQ0ksY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxjQUFjO0VBQ2QsYUFBWTtFQUNaLG1CQUFtQixFQUFBOztBQUt2QjtFQUNJLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLGdCQUFlO0VBQ2YsV0FBVTtFQUNWLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsZ0JBQ0osRUFBQTs7QUFFQTtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixVQUFVLEVBQUE7O0FBR2Q7RUFDSSxrQkFBa0IsRUFBQTs7QUFLdEI7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGVBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixVQUFVO0VBQ1Ysa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZW5kLW1lc3NhZ2Uvc2VuZC1tZXNzYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vSW9uIEhlYWRlciBTdHlsZXNcbmlvbi10aXRsZXtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4vL01haW4gU3R5bGVzXG4ubWFpbntcbiAgICBtYXJnaW46MjBweDtcbn1cblxuLy8gSGVhZGVyIFN0eWxlc1xuLmhlYWRlcntcbiAgICBjb2xvcjogIzFBMUExQTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOjBweDtcbn1cblxuLmhlYWRlci5zdWJ7XG4gICAgY29sb3I6ICMwMDVEREQ7XG4gICAgbWFyZ2luLXRvcDowO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi8vU2VuZCBNZXNzYWdlIHRvIEFsbCBTdHlsZXNcblxuLmFsbC1tZXNzYWdlLWNvbnRhaW5lcntcbiAgICB3aWR0aDogNTBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5cbi5pbWFnZXMtY29udGFpbmVye1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBhZGRpbmctbGVmdDozcHg7XG59XG5cbi5vdmVybGF5e1xuICAgIGJhY2tncm91bmQ6ICM2OUE4RkY7XG59XG5cbi5vdmVybGF5IC5zbWFsbC1pbWFnZXtcbiAgICBvcGFjaXR5OiAwLjU7XG59XG5cbi5hbGwtdGV4dHtcbiAgICBtYXJnaW4tdG9wOjM1cHg7XG4gICAgd2lkdGg6NTBweDtcbiAgICBjb2xvcjogIzFBMUExQTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uYWxsLXRleHQuYmx1ZXtcbiAgICBjb2xvcjogIzAwNURERDtcbn1cblxuLmZpcnN0LXJvd3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgIHBhZGRpbmctdG9wOiA0cHggXG59XG5cbi5zZWNvbmQtcm93e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XG59XG5cbi5pbWFnZXMtY29udGFpbmVyIC5zbWFsbC1pbWFnZXtcbiAgICB3aWR0aDogMTVweDtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbjogM3B4IDJweDtcbn1cblxuLmNoZWNrbWFya3tcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogNDBweDtcbiAgICBsZWZ0OiAxMHB4O1xufVxuXG4uaGlkZGVue1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLy9TZW5kIE1lc3NhZ2UgdG8gSW5kaXZpZHVhbHMgU3R5bGVcblxuLmFsbC1pbWFnZXMtcm93e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBtaW4taGVpZ2h0OiA4MHB4O1xufVxuXG4uaW5kaXZpZHVhbC11c2VyLWNvbnRhaW5lcntcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luOiAwIDVweDtcbn1cblxuLmluZGl2aWR1YWwtaW1hZ2UtY29udGFpbmVye1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogIzY5QThGRjtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmxhcmdlLWltYWdle1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5pbmRpdmlkdWFsLW5hbWV7XG4gICAgbWFyZ2luLXRvcDoycHg7XG4gICAgY29sb3I6ICMxQTFBMUE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmluZGl2aWR1YWwtY2hlY2ttYXJre1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm90dG9tOiAzM3B4O1xuICAgIGxlZnQ6IDEycHg7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uaW5kaXZpZHVhbC1vdmVybGF5IC5sYXJnZS1pbWFnZXtcbiAgICBvcGFjaXR5OiAwLjUgIWltcG9ydGFudDtcbn1cblxuLmluZGl2aWR1YWwtb3ZlcmxheSAuaW5kaXZpZHVhbC1uYW1le1xuICAgIGNvbG9yOiAjMDA1REREICFpbXBvcnRhbnQ7XG59XG5cbi5pbmRpdmlkdWFsLW92ZXJsYXkgLmluZGl2aWR1YWwtY2hlY2ttYXJre1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/send-message/send-message.page.ts":
/*!***************************************************!*\
  !*** ./src/app/send-message/send-message.page.ts ***!
  \***************************************************/
/*! exports provided: SendMessagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMessagePage", function() { return SendMessagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_group_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/group.service */ "./src/app/shared/group.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm5/ngx-socket-io.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var _services_contacts_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../services/contacts.service */ "./src/app/services/contacts.service.ts");























var STORAGE_KEY = 'my_files';
var SendMessagePage = /** @class */ (function () {
    function SendMessagePage(route, storage, location, formBuilder, groupService, router, sanitizer, file, actionSheetCtrl, transfer, loadingCtrl, imagePicker, navCtrl, 
    // public navParams: NavParams,
    toastCtrl, camera, modalCtrl, webview, platform, filePath, ref, fileChooser, http, androidPermissions, socket, modalController, translate, helper, contactsService) {
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
        this.ref = ref;
        this.fileChooser = fileChooser;
        this.http = http;
        this.androidPermissions = androidPermissions;
        this.socket = socket;
        this.modalController = modalController;
        this.translate = translate;
        this.helper = helper;
        this.contactsService = contactsService;
        this.lang = 'EN';
        this.userArray = []; // Groups
        this.video_members = [];
        this.idval = "";
        this.adminidval = "";
        this.images = [];
        this.adminname = "";
        this.docs = [];
        this.uploading = false;
        this.loadingChats = true;
        this.isAdmin = false;
        this.ANDROID_PERMISSIONS = [
            'android.permission.READ_EXTERNAL_STORAGE',
            'android.permission.WRITE_EXTERNAL_STORAGE',
        ];
        this.filtered_users = [];
        this.filtered = false;
        console.log('PLATFORMS', this.platform.platforms());
        if (this.platform.is('desktop')) {
            console.log('desktop');
            this.current_platform = 'desktop';
        }
        this.storage.get('language')
            .then(function (lang) {
            if (lang) {
                _this.lang = lang;
            }
        });
        this.route.queryParams.subscribe(function (params) {
            if (params && params.special) {
                // this.data = JSON.parse(params.special);
                console.log(JSON.parse(params.special));
                _this.id = JSON.parse(params.special).room_id;
                _this.room_id = JSON.parse(params.special).room_id;
                _this.group_data = JSON.parse(params.special).data;
                console.log('GROUP DATA', _this.group_data);
                console.log(_this.group_data.memberData);
                _this.storage.get('id').then(function (val) {
                    _this.adminidval = val;
                    _this.user_id = val;
                    _this.toggleIDs(val);
                    console.log(_this.adminidval);
                    _this.chat_room = _this.id;
                    _this.socket.connect();
                    console.log(_this.chat_room);
                    _this.temp_name = _this.adminidval;
                    console.log(name);
                    _this.socket.emit('set-name', _this.temp_name);
                    _this.socket.fromEvent('message-' + _this.chat_room).subscribe(function (message) {
                        console.log('MESSAGE', message);
                    });
                    var read_all = {
                        id: _this.id,
                        user_id: _this.adminidval
                    };
                    // this.groupService.putChatReadAll(read_all)
                    //   .subscribe(read => {
                    //     console.log("READ", read);
                    //   })
                    _this.group_data.memberData.forEach(function (element) {
                        if (_this.adminidval != element._id) {
                            var contact = _this.contactsService.getContactName(element['_id']);
                            var finalName = contact ? contact : element['mobile'];
                            _this.userArray.push({ id: element['_id'], name: finalName, avatar: element['avatar'] });
                        }
                    });
                    _this.video_members = [];
                });
            }
        });
        this.storage.get('name').then(function (val2) {
            _this.adminname
                = val2;
        });
        this.groupform = this.formBuilder.group({
            message: [''],
            adminid: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            adminname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    SendMessagePage.prototype.ngOnInit = function () {
    };
    SendMessagePage.prototype.noSpaceValidator = function () {
        console.log(this.groupform.value.message);
        if (this.groupform.value.message.trim() == 0) {
            return false;
            console.log("false");
        }
        else {
            return true;
            console.log("true");
        }
    };
    SendMessagePage.prototype.onSubmit = function () {
        if ((!this.platform.is('ios') && !this.platform.is('android')) && this.images.length) {
            this.uploading = true;
            var new_name = this.helper.createFileName(this.images[0].name);
            var formData = new FormData();
            formData.append('image', this.images[0].filePath, new_name);
            this.uploadFileData(formData, new_name);
        }
        else {
            console.log('VIDEO MEMBERS', this.video_members);
            console.log(this.groupform.value);
            if (this.video_members.length > 0) {
                if (this.groupform.value.message && !this.docs.length && !this.images.length) {
                    if (this.noSpaceValidator() == true) {
                        var file_message = this.groupform.value;
                        file_message.messageBy = this.adminidval;
                        file_message.messageFor = this.video_members;
                        console.log('FILE MESSAGE', file_message);
                        this.cleanUpload(file_message);
                    }
                    else {
                        alert("Only spaces not allowed");
                    }
                }
                if (this.platform.is('ios') || this.platform.is('android')) {
                    this.startUpload();
                }
            }
            else {
                this.presentToast('Kindly select members to send this message to');
            }
        }
    };
    SendMessagePage.prototype.reset = function () {
        this.groupform.controls['message'].reset();
    };
    SendMessagePage.prototype.selectIndividual = function (event, pos) {
        // console.log(this.checkAll())
        var currentID = event.target.id.replace('image-', '');
        document.getElementById('container-' + currentID).classList.toggle('individual-overlay');
        this.toggleIDs(this.userArray[pos].id);
        console.log(document.querySelector('.images-container').classList.contains('overlay'));
        if (document.querySelector('.images-container').classList.contains('overlay')) {
            document.querySelector('.images-container').classList.toggle('overlay');
            document.querySelector('.checkmark').classList.toggle('hidden');
            document.querySelector('.all-text').classList.toggle('blue');
        }
    };
    SendMessagePage.prototype.selectAll = function (event) {
        var _this = this;
        document.querySelector('.images-container').classList.toggle('overlay');
        document.querySelector('.checkmark').classList.toggle('hidden');
        document.querySelector('.all-text').classList.toggle('blue');
        this.toggleAll(); // Handles ONLY Front End
        console.log(this.checkAll());
        // Checks
        //  if Front End select all has an overlay
        //  else Toggle Selected Users
        if (document.querySelector('.images-container').classList.contains('overlay')) {
            this.userArray.forEach(function (group) {
                _this.toggleIDs(group.id, 'add');
            });
        }
        else {
            this.video_members = [];
            console.log(this.video_members);
        }
    };
    SendMessagePage.prototype.toggleAll = function () {
        for (var i = 0; i < this.userArray.length; i++) {
            if (this.userArray[i].id != this.user_id) {
                if (document.querySelector('.images-container').classList.contains('overlay')) {
                    if (!document.getElementById('container-' + (i + 1)).classList.contains('individual-overlay')) {
                        document.getElementById('container-' + (i + 1)).classList.toggle('individual-overlay');
                    }
                }
                else {
                    if (document.getElementById('container-' + (i + 1)).classList.contains('individual-overlay')) {
                        document.getElementById('container-' + (i + 1)).classList.toggle('individual-overlay');
                    }
                }
            }
        }
    };
    SendMessagePage.prototype.checkAll = function () {
        console.log(this.userArray);
        console.log(this.video_members);
        if (this.userArray.length == this.video_members.length) {
            return true;
        }
        else {
            return false;
        }
    };
    SendMessagePage.prototype.toggleIDs = function (id, action) {
        console.log(id);
        var index = this.video_members.indexOf(id);
        console.log(action);
        console.log(index);
        if (action) {
            if (action == 'add' && index == -1) {
                this.video_members.push(id);
                return;
            }
            else if (action == 'remove' && index > -1) {
                this.video_members.splice(index, 1);
                return;
            }
        }
        else {
            if (index > -1) {
                this.video_members.splice(index, 1);
            }
            else {
                this.video_members.push(id);
            }
        }
    };
    /* ONLINE FIX */
    SendMessagePage.prototype.loadStoredImages = function () {
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
    SendMessagePage.prototype.presentToast = function (text) {
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
    SendMessagePage.prototype.selectImage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (!this.platform.is('ios') && !this.platform.is('android')) {
                    document.getElementById('image').click();
                }
                else {
                    this.helper.selectImage()
                        .then(function (imgResponse) {
                        console.log('IMAGE RESPONSE', imgResponse);
                        _this.images = imgResponse.images;
                        _this.docs = imgResponse.docs;
                        _this.currentFileType = 'image';
                        console.log(_this.images);
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    SendMessagePage.prototype.selectVideoFromGallery = function () {
        var _this = this;
        if (!this.platform.is('ios') && !this.platform.is('android')) {
            document.getElementById('video').click();
        }
        else {
            this.helper.selectVideoFromGallery()
                .then(function (videoResponse) {
                console.log('VIDEO RESPONSE', videoResponse);
                _this.images = videoResponse.images;
                _this.docs = videoResponse.docs;
                _this.currentFileType = 'video';
            });
        }
    };
    SendMessagePage.prototype.startProcess = function (file, type, sourceType) {
        var _this = this;
        this.docs = [];
        this.images = [];
        console.log("PROCESS STARTED");
        this.currentFileType = type;
        if ((this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) || (this.platform.is('android') && type == 'doc')) {
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
        }
        else {
            var currentName = file.substr(file.lastIndexOf('/') + 1);
            var correctPath = file.substr(0, file.lastIndexOf('/') + 1);
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName(file.lastIndexOf('/') + 1));
        }
    };
    SendMessagePage.prototype.createFileName = function (fileName) {
        var ext = this.getFileExtension(fileName);
        console.log("EXT", ext);
        var d = new Date(), n = d.getTime(), newFileName = n + '.' + ext;
        console.log("FILE NAME", fileName);
        return newFileName;
    };
    SendMessagePage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
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
    SendMessagePage.prototype.updateStoredFiles = function (name, oldName) {
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
            //IF DOC
            else {
                var newEntry = {
                    name: name,
                    filePath: filePath
                };
                _this.docs = [newEntry].concat(_this.docs);
                console.log("NEW DOCS", _this.docs);
            }
        });
    };
    SendMessagePage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            var converted = this.webview.convertFileSrc(img);
            return converted;
        }
    };
    SendMessagePage.prototype.deleteFile = function (fileEntry, position) {
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
    SendMessagePage.prototype.startUpload = function () {
        var _this = this;
        this.uploading = true;
        console.log(this.uploading);
        console.log('STARTED UPLOAD');
        if (this.images) {
            console.log('IMAGES', this.images);
            this.images.forEach(function (imgEntry) {
                _this.getFileFromLocal(imgEntry.filePath);
            });
        }
        if (this.docs) {
            console.log('DOCS', this.docs);
            this.docs.forEach(function (docEntry) {
                _this.getFileFromLocal(docEntry.filePath);
            });
        }
    };
    SendMessagePage.prototype.getFileFromLocal = function (entry) {
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
    SendMessagePage.prototype.readFile = function (file) {
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
    SendMessagePage.prototype.uploadFileData = function (formData, name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var uploadCall;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                uploadCall = this.http.post("http://198.12.92.202:5000/upload/single-file", formData)
                    .subscribe(function (res) {
                    console.log(res);
                    console.log(res['error']);
                    if (res['error']) {
                        // let value = this.translate.instant('File_upload_failed', { value: this.lang });
                        _this.presentToast("File_upload_failed");
                    }
                    else {
                        // let value = this.translate.instant('File_upload_success', { value: this.lang });
                        _this.presentToast("File_upload_success");
                        console.log("SUCCESS IS WORKING");
                        var file_message = _this.groupform.value;
                        file_message.messageBy = _this.adminidval;
                        file_message.attachment = name;
                        file_message.file = true;
                        file_message.fileType = _this.currentFileType;
                        file_message.messageFor = _this.video_members;
                        _this.cleanUpload(file_message);
                    }
                }, function (err) {
                    console.log("UPLOAD FAILED", err);
                    _this.uploading = false;
                    _this.images = [];
                    _this.docs = [];
                });
                return [2 /*return*/];
            });
        });
    };
    SendMessagePage.prototype.cleanUpload = function (file_message) {
        var _this = this;
        console.log("FILE MESSAGE", file_message);
        this.groupService.putChat(file_message, this.id).subscribe(function (res) {
            _this.uploading = false;
            _this.images = [];
            _this.docs = [];
            _this.socket.emit('send-message', {
                text: file_message.message,
                room: _this.chat_room,
                sent_from: _this.temp_name,
                type: 1,
                messageFor: file_message.messageFor
            });
            _this.reset();
            _this.currentFileType = new String();
            if (file_message.file == true && file_message.message.length) {
                delete file_message["attachment"];
                delete file_message["fileType"];
                delete file_message["file"];
                _this.cleanUpload(file_message);
            }
            _this.router.navigate(['group-chat-admin', _this.chat_room]);
            // this.groupchatadmin.chatData();
            // this.location.back();
            _this.ref.detectChanges();
        });
    };
    SendMessagePage.prototype.getExt = function (entry) {
        return this.helper.getExt(entry);
    };
    SendMessagePage.prototype.getFileExtension = function (entry) {
        return this.helper.getFileExtension(entry);
    };
    SendMessagePage.prototype.selectAFile = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // console.log('Select File')
                this.helper.selectAFile()
                    .then(function (fileResponse) {
                    console.log('File RESPONSE', fileResponse);
                    _this.images = fileResponse.images;
                    _this.docs = fileResponse.docs;
                    _this.currentFileType = 'doc';
                    _this.ref.detectChanges();
                });
                return [2 /*return*/];
            });
        });
    };
    SendMessagePage.prototype.deleteDoc = function (pos) {
        this.helper.deleteDoc(pos)
            .then(function (done) { return console.log(done); });
    };
    SendMessagePage.prototype.checkPermissions = function () {
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
    SendMessagePage.prototype.goBack = function () {
        this.location.back();
        this.helper.destroyAll();
    };
    SendMessagePage.prototype.ionViewWillLeave = function () {
        this.helper.destroyAll();
    };
    SendMessagePage.prototype.getFileFromBrowser = function (event, type) {
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
    SendMessagePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_19__["Location"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _shared_group_service__WEBPACK_IMPORTED_MODULE_7__["GroupService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
        { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__["FileTransfer"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_11__["ImagePicker"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__["Camera"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_13__["WebView"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_14__["FilePath"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_15__["FileChooser"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClient"] },
        { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_17__["AndroidPermissions"] },
        { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_18__["Socket"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _services_helper_service__WEBPACK_IMPORTED_MODULE_20__["HelperService"] },
        { type: _services_contacts_service__WEBPACK_IMPORTED_MODULE_21__["ContactsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"])
    ], SendMessagePage.prototype, "contentArea", void 0);
    SendMessagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-send-message',
            template: __webpack_require__(/*! raw-loader!./send-message.page.html */ "./node_modules/raw-loader/index.js!./src/app/send-message/send-message.page.html"),
            providers: [_services_helper_service__WEBPACK_IMPORTED_MODULE_20__["HelperService"]],
            styles: [__webpack_require__(/*! ./send-message.page.scss */ "./src/app/send-message/send-message.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _angular_common__WEBPACK_IMPORTED_MODULE_19__["Location"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _shared_group_service__WEBPACK_IMPORTED_MODULE_7__["GroupService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__["FileTransfer"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_11__["ImagePicker"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_13__["WebView"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_14__["FilePath"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_15__["FileChooser"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClient"],
            _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_17__["AndroidPermissions"],
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_18__["Socket"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _services_helper_service__WEBPACK_IMPORTED_MODULE_20__["HelperService"],
            _services_contacts_service__WEBPACK_IMPORTED_MODULE_21__["ContactsService"]])
    ], SendMessagePage);
    return SendMessagePage;
}());



/***/ })

}]);
//# sourceMappingURL=send-message-send-message-module-es5.js.map