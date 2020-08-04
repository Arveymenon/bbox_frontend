(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-video-chat-create-video-chat-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/create-video-chat/create-video-chat.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/create-video-chat/create-video-chat.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n        <ion-button routerLink=\"/group-chat-admin/{{ this.room_id }}\">\n          <ion-icon class=\"back-button\" slot=\"icon-only\" name=\"md-arrow-back\"></ion-icon>\n        </ion-button>\n    </ion-buttons>\n    <ion-title routerLink=\"groupdetails\">\n      <div *ngIf=\"video_chat == 1\">\n        {{ 'Start A Video Chat' | translate }}\n        </div>\n      <div *ngIf=\"video_chat == 0\">\n        {{ 'Start An Audio Chat' | translate }}\n        </div>\n    </ion-title>\n    <ion-buttons slot=\"end\" size-xs=\"small\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"md-search\"></ion-icon>\n      </ion-button>\n      <!-- <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"md-notifications\"></ion-icon>\n      </ion-button> -->\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"md-create\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div class=\"main\">\n    \n        <p class=\"header\">{{'Feed will be sent to'|translate}}</p>\n  \n          <div class=\"all-message-container\" (click)=\"selectAll($event)\">\n            <div class=\"images-container\">\n              <div class=\"first-row\">\n                  <img [src]=\"userService.setAvatar(userArray[0] ? userArray[0].avatar: '')\" onError=\"this.src='assets/images/user.png';\" class=\"small-image\">\n                  <img [src]=\"userService.setAvatar(userArray[1] ? userArray[1].avatar: '')\" onError=\"this.src='assets/images/user.png';\" class=\"small-image\">\n              </div>\n              <div class=\"second-row\">\n                  <img [src]=\"userService.setAvatar(userArray[2] ? userArray[2].avatar: '')\" onError=\"this.src='assets/images/user.png';\" class=\"small-image\">\n                  <img [src]=\"userService.setAvatar(userArray[3] ? userArray[3].avatar: '')\" onError=\"this.src='assets/images/user.png';\" class=\"small-image\">\n              </div>\n            </div>\n            <ion-icon slot=\"icon-only\" name=\"md-checkmark\" color=\"light\" class=\"checkmark hidden\"></ion-icon>\n            <p class=\"all-text\">{{'All'|translate}}</p>\n          </div>\n\n          <p class=\"header sub\">{{'Select Groups'|translate}}</p>\n\n          \n            \n          <div class=\"all-images-row\">\n            <div *ngFor=\"let user of userArray; index as pos\">\n              <div *ngIf=\"user.id != user_id\" class=\"individual-user-container\" id=\"container-{{ pos+1 }}\">\n\n                <div class=\"individual-image-container\" (click)=\"selectIndividual($event, pos)\" >\n                    <img class=\"large-image\" id=\"image-{{ pos+1 }}\" *ngIf=\"user.avatar\" [src]=\"userService.setAvatar(user.avatar)\">\n                    <img class=\"large-image\" id=\"image-{{ pos+1 }}\" *ngIf=\"!user.avatar\" src=\"assets/images/user.png\">\n                </div>\n                <ion-icon slot=\"icon-only\" name=\"md-checkmark\" color=\"light\" class=\"individual-checkmark\" id=\"{{ pos+1 }}\" (click)=\"selectIndividual($event, pos)\" ></ion-icon>\n                <p class=\"individual-name\">{{ user.name }}</p>\n              </div>\n            </div>\n          </div>\n\n      </div>\n\n      <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n          <ion-fab-button (click)=\"startVideoChat()\">\n            <ion-icon name=\"md-send\"></ion-icon>\n          </ion-fab-button>\n      </ion-fab>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/create-video-chat/create-video-chat.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/create-video-chat/create-video-chat.module.ts ***!
  \***************************************************************/
/*! exports provided: CreateVideoChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateVideoChatPageModule", function() { return CreateVideoChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _create_video_chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-video-chat.page */ "./src/app/create-video-chat/create-video-chat.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








const routes = [
    {
        path: '',
        component: _create_video_chat_page__WEBPACK_IMPORTED_MODULE_6__["CreateVideoChatPage"]
    }
];
let CreateVideoChatPageModule = class CreateVideoChatPageModule {
};
CreateVideoChatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_create_video_chat_page__WEBPACK_IMPORTED_MODULE_6__["CreateVideoChatPage"]]
    })
], CreateVideoChatPageModule);



/***/ }),

/***/ "./src/app/create-video-chat/create-video-chat.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/create-video-chat/create-video-chat.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  text-align: left; }\n\n.main {\n  margin: 20px; }\n\n.header {\n  color: #1A1A1A;\n  font-weight: bold;\n  margin-bottom: 0px; }\n\n.header.sub {\n  color: #005DDD;\n  margin-top: 0;\n  margin-bottom: 20px; }\n\n.all-message-container {\n  width: 50px;\n  margin-top: 20px; }\n\n.images-container {\n  width: 50px;\n  height: 50px;\n  text-align: center;\n  border-radius: 50%;\n  padding-left: 3px; }\n\n.overlay {\n  background: #69A8FF; }\n\n.overlay .small-image {\n  opacity: 0.5; }\n\n.all-text {\n  margin-top: 35px;\n  width: 50px;\n  color: #1A1A1A;\n  text-align: center;\n  font-weight: 600;\n  font-size: 12px;\n  position: relative;\n  bottom: 30px;\n  margin-bottom: 0; }\n\n.all-text.blue {\n  color: #005DDD; }\n\n.first-row {\n  display: -webkit-box;\n  display: flex;\n  padding-left: 3px;\n  padding-top: 4px; }\n\n.second-row {\n  display: -webkit-box;\n  display: flex;\n  padding-left: 3px; }\n\n.images-container .small-image {\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  margin: 3px 2px; }\n\n.checkmark {\n  font-size: 30px;\n  position: relative;\n  bottom: 40px;\n  left: 10px; }\n\n.hidden {\n  visibility: hidden; }\n\n.all-images-row {\n  display: -webkit-box;\n  display: flex; }\n\n.individual-user-container {\n  width: 50px;\n  height: 50px;\n  margin: 0 5px; }\n\n.individual-image-container {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  background: #69A8FF;\n  margin: 0 auto; }\n\n.large-image {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%; }\n\n.individual-name {\n  margin-top: 2px;\n  color: #1A1A1A;\n  text-align: center;\n  font-weight: 600;\n  font-size: 12px;\n  position: relative;\n  bottom: 30px;\n  margin-bottom: 0; }\n\n.individual-checkmark {\n  font-size: 25px;\n  position: relative;\n  bottom: 33px;\n  left: 12px;\n  visibility: hidden; }\n\n.individual-overlay .large-image {\n  opacity: 0.5 !important; }\n\n.individual-overlay .individual-name {\n  color: #005DDD !important; }\n\n.individual-overlay .individual-checkmark {\n  visibility: visible; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYmJveF9mcm9udGVuZC9zcmMvYXBwL2NyZWF0ZS12aWRlby1jaGF0L2NyZWF0ZS12aWRlby1jaGF0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGdCQUFnQixFQUFBOztBQUlwQjtFQUNJLFlBQVcsRUFBQTs7QUFJZjtFQUNJLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksY0FBYztFQUNkLGFBQVk7RUFDWixtQkFBbUIsRUFBQTs7QUFLdkI7RUFDSSxXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFnQixFQUFBOztBQUdwQjtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxnQkFBZTtFQUNmLFdBQVU7RUFDVixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGdCQUNKLEVBQUE7O0FBRUE7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVSxFQUFBOztBQUdkO0VBQ0ksa0JBQWtCLEVBQUE7O0FBS3RCO0VBQ0ksb0JBQWE7RUFBYixhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGVBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixVQUFVO0VBQ1Ysa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGUtdmlkZW8tY2hhdC9jcmVhdGUtdmlkZW8tY2hhdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL0lvbiBIZWFkZXIgU3R5bGVzXG5pb24tdGl0bGV7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLy9NYWluIFN0eWxlc1xuLm1haW57XG4gICAgbWFyZ2luOjIwcHg7XG59XG5cbi8vIEhlYWRlciBTdHlsZXNcbi5oZWFkZXJ7XG4gICAgY29sb3I6ICMxQTFBMUE7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJvdHRvbTowcHg7XG59XG5cbi5oZWFkZXIuc3Vie1xuICAgIGNvbG9yOiAjMDA1REREO1xuICAgIG1hcmdpbi10b3A6MDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4vL1NlbmQgTWVzc2FnZSB0byBBbGwgU3R5bGVzXG5cbi5hbGwtbWVzc2FnZS1jb250YWluZXJ7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuXG4uaW1hZ2VzLWNvbnRhaW5lcntcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwYWRkaW5nLWxlZnQ6M3B4O1xufVxuXG4ub3ZlcmxheXtcbiAgICBiYWNrZ3JvdW5kOiAjNjlBOEZGO1xufVxuXG4ub3ZlcmxheSAuc21hbGwtaW1hZ2V7XG4gICAgb3BhY2l0eTogMC41O1xufVxuXG4uYWxsLXRleHR7XG4gICAgbWFyZ2luLXRvcDozNXB4O1xuICAgIHdpZHRoOjUwcHg7XG4gICAgY29sb3I6ICMxQTFBMUE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmFsbC10ZXh0LmJsdWV7XG4gICAgY29sb3I6ICMwMDVEREQ7XG59XG5cbi5maXJzdC1yb3d7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgICBwYWRkaW5nLXRvcDogNHB4IFxufVxuXG4uc2Vjb25kLXJvd3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmctbGVmdDogM3B4O1xufVxuXG4uaW1hZ2VzLWNvbnRhaW5lciAuc21hbGwtaW1hZ2V7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW46IDNweCAycHg7XG59XG5cbi5jaGVja21hcmt7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IDQwcHg7XG4gICAgbGVmdDogMTBweDtcbn1cblxuLmhpZGRlbntcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi8vU2VuZCBNZXNzYWdlIHRvIEluZGl2aWR1YWxzIFN0eWxlXG5cbi5hbGwtaW1hZ2VzLXJvd3tcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uaW5kaXZpZHVhbC11c2VyLWNvbnRhaW5lcntcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luOiAwIDVweDtcbn1cblxuLmluZGl2aWR1YWwtaW1hZ2UtY29udGFpbmVye1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogIzY5QThGRjtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmxhcmdlLWltYWdle1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5pbmRpdmlkdWFsLW5hbWV7XG4gICAgbWFyZ2luLXRvcDoycHg7XG4gICAgY29sb3I6ICMxQTFBMUE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmluZGl2aWR1YWwtY2hlY2ttYXJre1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm90dG9tOiAzM3B4O1xuICAgIGxlZnQ6IDEycHg7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uaW5kaXZpZHVhbC1vdmVybGF5IC5sYXJnZS1pbWFnZXtcbiAgICBvcGFjaXR5OiAwLjUgIWltcG9ydGFudDtcbn1cblxuLmluZGl2aWR1YWwtb3ZlcmxheSAuaW5kaXZpZHVhbC1uYW1le1xuICAgIGNvbG9yOiAjMDA1REREICFpbXBvcnRhbnQ7XG59XG5cbi5pbmRpdmlkdWFsLW92ZXJsYXkgLmluZGl2aWR1YWwtY2hlY2ttYXJre1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cblxuLy9BdHRhY2htZW50IHN0eWxlc1xuXG4vLyAuaGlkZXtcbi8vICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4vLyB9XG5cbi8vIC5wb3NpdGlvbi1maXh7XG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgIGJvdHRvbTogMTA1cHg7XG4vLyAgICAgei1pbmRleDogMTAwMDtcbi8vIH1cblxuLy8gLmF0dGFjaG1lbnQtY29udGFpbmVye1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgIHBhZGRpbmc6IDAgMTVweDtcbi8vIH1cblxuLy8gLmF0dGFjaG1lbnQtc25hcHNob3R7XG4vLyAgICAgd2lkdGg6IDE1JTtcbi8vICAgICBtaW4td2lkdGg6IDYwcHg7XG4vLyB9XG5cbi8vIC5hdHRhY2htZW50LXNuYXBzaG90IGltZ3tcbi8vICAgICBoZWlnaHQ6IDYwcHg7XG4vLyAgICAgd2lkdGg6IDYwcHg7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbi8vIH1cblxuLy8gLmF0dGFjaG1lbnQtbmFtZXtcbi8vICAgICB3aWR0aDogNzAlO1xuLy8gICAgIGhlaWdodDogNjBweDtcbi8vICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuLy8gICAgIG92ZXJmbG93OiBoaWRkZW47XG4vLyAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4vLyB9XG5cbi8vIC5hdHRhY2htZW50LW5hbWUgcHtcbi8vICAgICBtYXJnaW46IDA7XG4vLyAgICAgY29sb3I6ICMwMDVEREQ7XG4vLyAgICAgZm9udC1zaXplOiAxOHB4O1xuLy8gICAgIHBhZGRpbmc6IDE4cHg7XG4vLyAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gfVxuXG4vLyAuYXR0YWNobWVudC1kZWxldGV7XG4vLyAgICAgd2lkdGg6IDE1JTtcbi8vICAgICBvdmVyZmxvdzogaGlkZGVuO1xuLy8gfVxuXG4vLyAuYXR0YWNobWVudC1kZWxldGUgaW9uLWJ1dHRvbntcbi8vICAgICBwYWRkaW5nOiAxMHB4IDA7XG4vLyAgICAgZmxvYXQ6IHJpZ2h0O1xuLy8gfVxuXG4vL1RleHQgYXJlYSBTdHlsZXNcblxuXG5cbi8vIC50ZXh0LWJveC1jb250YWluZXJ7XG4vLyAgICAgbWFyZ2luLXRvcDogNTBweDtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgYm90dG9tOiAwO1xuLy8gICAgIHdpZHRoOiA5MSU7XG4vLyAgICAgaGVpZ2h0OiAzMDBweDtcbi8vIH1cblxuLy8gLnJvdW5kZWR7XG4vLyAgICAgYm9yZGVyOiAycHggc29saWQgI0UyRTJFMjtcbi8vICAgICAtLWJvcmRlci13aWR0aDogMCAwIDAgMDtcbi8vICAgICBib3JkZXItcmFkaXVzOiA4cHhcbi8vIH1cblxuLy8gaW9uLXRleHRhcmVhe1xuLy8gICAgIGhlaWdodDogMjc1cHg7XG4vLyAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4vLyB9XG5cbi8vIC5idXR0b25zLWNvbnRhaW5lcntcbi8vICAgICB0ZXh0LWFsaWduOiByaWdodDtcbi8vIH1cblxuLy8gLmJ1dHRvbnMtY29udGFpbmVyLm5vcm1hbHtcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgdG9wOiA1NXB4O1xuLy8gICAgIHotaW5kZXg6IDEwMDA7XG4vLyB9XG5cbi8vIC5idXR0b25zLWNvbnRhaW5lciBpb24tYnV0dG9ue1xuLy8gICAgIC0tcGFkZGluZy1zdGFydDo1cHg7XG4vLyAgICAgLS1wYWRkaW5nLWVuZDo1cHg7XG4vLyB9XG5cbi8vIC5idXR0b25zLWNvbnRhaW5lciBpb24taWNvbntcbi8vICAgICBwYWRkaW5nOiAwO1xuLy8gICAgIGZvbnQtc2l6ZTogMThweDtcbi8vIH1cblxuLy8gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNzUwcHgpIHtcbi8vICAgICAudGV4dC1ib3gtY29udGFpbmVye1xuLy8gICAgICAgICBoZWlnaHQ6IDM1MHB4O1xuLy8gICAgIH1cbi8vICAgICBpb24tdGV4dGFyZWEge1xuLy8gICAgICAgaGVpZ2h0OiAzMjVweDtcbi8vICAgICB9XG4vLyB9XG5cblxuLy8gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNzAwcHgpIHtcbi8vICAgICAudGV4dC1ib3gtY29udGFpbmVye1xuLy8gICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuLy8gICAgIH1cbi8vICAgICBpb24tdGV4dGFyZWEge1xuLy8gICAgICAgaGVpZ2h0OiAyNzVweDtcbi8vICAgICB9XG4vLyB9XG5cbi8vIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDYwMHB4KSB7XG4vLyAgICAgLnRleHQtYm94LWNvbnRhaW5lcntcbi8vICAgICAgICAgaGVpZ2h0OiAyMjVweDtcbi8vICAgICB9XG4vLyAgICAgaW9uLXRleHRhcmVhIHtcbi8vICAgICAgIGhlaWdodDogMTgwcHg7XG4vLyAgICAgfVxuLy8gfVxuIl19 */"

/***/ }),

/***/ "./src/app/create-video-chat/create-video-chat.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/create-video-chat/create-video-chat.page.ts ***!
  \*************************************************************/
/*! exports provided: CreateVideoChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateVideoChatPage", function() { return CreateVideoChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _shared_group_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/group.service */ "./src/app/shared/group.service.ts");
/* harmony import */ var _shareduser_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shareduser/user.service */ "./src/app/shareduser/user.service.ts");








let CreateVideoChatPage = class CreateVideoChatPage {
    constructor(route, storage, router, toastCtrl, translate, groupService, userService) {
        this.route = route;
        this.storage = storage;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.translate = translate;
        this.groupService = groupService;
        this.userService = userService;
        this.lang = 'EN';
        this.userArray = []; // Groups
        this.video_members = [];
        this.storage.get('id').then((val) => {
            console.log(val);
            this.user_id = val;
            this.toggleIDs(val);
        });
        this.route.queryParams.subscribe(params => {
            if (params && params.special) {
                // this.data = JSON.parse(params.special);
                console.log(JSON.parse(params.special));
                this.video_chat = JSON.parse(params.special).video;
                this.group_id = JSON.parse(params.special).room_id;
                this.room_id = this.group_id;
                console.log(this.group_id);
                this.groupService.getGroupDetails(this.group_id, this.user_id).then((res) => {
                    console.log(res);
                    this.group_data = res;
                    if (res) {
                        res.memberData.forEach(element => {
                            if (res.memberData.length >= this.userArray.length) {
                                this.userArray.push({ id: element['_id'], name: element['name'], avatar: element['avatar'] });
                            }
                        });
                    }
                }, error => {
                    console.log(error);
                });
            }
        });
    }
    ngOnInit() {
    }
    selectIndividual(event, pos) {
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
        }
        else {
            this.video_members = [this.user_id];
            console.log(this.video_members);
        }
    }
    toggleAll() {
        for (let i = 0; i < this.userArray.length; i++) {
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
    }
    checkAll() {
        console.log(this.userArray);
        console.log(this.video_members);
        if (this.userArray.length == this.video_members.length) {
            return true;
        }
        else {
            return false;
        }
    }
    toggleIDs(id, action) {
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
            console.log(this.video_members);
        }
    }
    startVideoChat() {
        console.log('Navigating to Video Chat Page');
        console.log(this.video_members);
        if (this.video_members.length < 2) {
            // let value = this.translate.instant('Kindly_Select_Members_To_Chat', { value: this.lang });
            this.presentToast("Kindly_Select_Members_To_Chat");
            return;
        }
        if (this.video_members.length > 5) {
            // let value = this.translate.instant('You_Can_Select_Only_Upto_4_Mumbers', { value: this.lang });
            this.presentToast("You_Can_Select_Only_Upto_4_Mumbers");
            return;
        }
        let data = this.group_data;
        data.chats = [];
        var body = {
            members: this.video_members,
            group_data: data,
            group_name: this.group_data.name,
            type: this.video_chat == 1 ? 'video' : 'audio'
        };
        console.log('BODY', body);
        this.groupService.postVideoCall(body)
            .subscribe(data => {
            // Should a user get a notification if any one of selected the user is not available?
            if (this.video_chat == 1) {
                this.router.navigate(['video-chat/' + this.room_id]);
            }
            else if (this.video_chat == 0) {
                this.router.navigate(['audio-call/' + this.room_id]);
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
                    // this.ref.detectChanges();
                }));
            });
        });
    }
};
CreateVideoChatPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _shared_group_service__WEBPACK_IMPORTED_MODULE_6__["GroupService"] },
    { type: _shareduser_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }
];
CreateVideoChatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-video-chat',
        template: __webpack_require__(/*! raw-loader!./create-video-chat.page.html */ "./node_modules/raw-loader/index.js!./src/app/create-video-chat/create-video-chat.page.html"),
        styles: [__webpack_require__(/*! ./create-video-chat.page.scss */ "./src/app/create-video-chat/create-video-chat.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
        _shared_group_service__WEBPACK_IMPORTED_MODULE_6__["GroupService"],
        _shareduser_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]])
], CreateVideoChatPage);



/***/ })

}]);
//# sourceMappingURL=create-video-chat-create-video-chat-module-es2015.js.map