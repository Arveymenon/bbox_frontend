(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-personal-chat-create-personal-chat-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/create-personal-chat/create-personal-chat.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/create-personal-chat/create-personal-chat.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n          <ion-button (click)=\"back()\">\n            <ion-icon class=\"back-button\" slot=\"icon-only\" name=\"md-arrow-back\"></ion-icon>\n          </ion-button>\n      </ion-buttons>\n    <h1 class=\"ion-title\"> {{ 'Start Chatting' | translate }}</h1>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main\">\n      <p class=\"header\">{{'Enter Details'|translate}}</p>\n      <div class=\"add-member-form\">\n          <ion-item class=\"rounded\" lines=\"none\">\n            <ion-input type=\"text\" placeholder=\"{{ 'Search User' | translate }}\" primary [(ngModel)]=\"searchQuery\" \n            (keyup)=\"refreshUserList($event)\"\n            show-cancel=\"true\" ></ion-input>\n          </ion-item>\n          <div class=\"suggestions\">\n            <ion-grid class=\"ion-no-padding\">\n              <div *ngFor=\"let u of userService.users\">\n                <ion-row class=\"ion-no-padding\" *ngIf=\"u._id != this.id\">\n                  <ion-col size=\"1\">\n                    <img class=\"member-photo\" src=\"assets/images/user.png\">\n                  </ion-col>\n                  <ion-col size=\"11\">\n                    <a class=\"action-btn\" (click)=\"addmember(u._id,u.name)\"><p><span>{{ u.name }}</span> <span>@ {{ u.user_id }}</span></p></a>\n                  </ion-col>\n                </ion-row>\n              </div>\n             \n              \n            </ion-grid>\n            <p class=\"cant-find\" (click)=\"inviteMembers()\">{{ cant_find }}</p>\n          </div>\n          <p class=\"header\">{{'Members'|translate}}</p>\n      </div>\n  </div> \n  \n  <!-- Select Individual Members -->\n  <div class=\"all-images-row\">\n      <div class=\"individual-user-container\" id=\"first-container\" *ngFor=\"let i of userArray; let itt of index\">\n        <div class=\"individual-image-container\" (click)=\"selectIndividual($event,itt)\" >\n            <img src=\"assets/images/user.png\" class=\"large-image\" id=\"first-image\">\n        </div>\n        <form name=\"addform\">\n        <ion-icon slot=\"icon-only\" name=\"md-checkmark\" color=\"light\" class=\"individual-checkmark\" id=\"first-image\" (click)=\"selectIndividual($event,itt)\" ></ion-icon>\n        <p class=\"individual-name\">{{ i.nameval }}</p>\n       \n        </form>\n      </div>\n      \n      \n\n       \n        \n\n        <div class=\"individual-user-container\">\n            <div class=\"individual-image-container\">\n                <img src=\"assets/images/invite.png\" class=\"large-image\">\n            </div>\n        </div>\n      \n    </div>\n\n  <div class=\"add-member-button\">\n      <ion-button expand=\"block\" shape=\"round\" (click)=\"addtogroup()\">{{'Create'|translate}}</ion-button>\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/create-personal-chat/create-personal-chat.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/create-personal-chat/create-personal-chat.module.ts ***!
  \*********************************************************************/
/*! exports provided: CreatePersonalChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePersonalChatPageModule", function() { return CreatePersonalChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _create_personal_chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-personal-chat.page */ "./src/app/create-personal-chat/create-personal-chat.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _create_personal_chat_page__WEBPACK_IMPORTED_MODULE_6__["CreatePersonalChatPage"]
    }
];
var CreatePersonalChatPageModule = /** @class */ (function () {
    function CreatePersonalChatPageModule() {
    }
    CreatePersonalChatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_create_personal_chat_page__WEBPACK_IMPORTED_MODULE_6__["CreatePersonalChatPage"]]
        })
    ], CreatePersonalChatPageModule);
    return CreatePersonalChatPageModule;
}());



/***/ }),

/***/ "./src/app/create-personal-chat/create-personal-chat.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/create-personal-chat/create-personal-chat.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  margin: 15px 15px 10px 15px; }\n\n.ion-title {\n  text-align: left !important;\n  font-size: 17px;\n  font-weight: 600;\n  padding-left: 20px;\n  margin: 15px 0 15px 0; }\n\n.back-button {\n  font-size: 25px; }\n\n.header {\n  color: #1A1A1A;\n  font-weight: bold;\n  font-size: 18px;\n  text-align: left; }\n\n.add-member-form {\n  margin-top: 30px;\n  text-align: center; }\n\n.add-member-form ion-item {\n  margin: 30px auto 0 auto; }\n\n.rounded {\n  border: 2px solid #E2E2E2;\n  margin: 0 50px 0 50px;\n  --border-width: 0 0 0 0;\n  border-radius: 8px; }\n\n.suggestions {\n  opacity: 50%;\n  margin: 0 15px 0 15px; }\n\n.suggestions p {\n  font-size: 12px;\n  margin: 5px 0 5px 0;\n  text-align: left; }\n\n.cant-find {\n  padding-left: 25px;\n  padding-top: 5px;\n  color: #0068F8; }\n\n.add-member-button {\n  text-align: center;\n  margin: 100px auto 0 auto;\n  max-width: 150px;\n  --box-shadow: none; }\n\n.member-photo {\n  border-radius: 50%; }\n\n.member-name {\n  color: #005DDD;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: center; }\n\n.invite-text {\n  color: rgba(0, 93, 221, 0.5);\n  font-size: 14px;\n  font-weight: 600;\n  text-align: center; }\n\n.all-images-row {\n  display: -webkit-box;\n  display: flex;\n  margin-left: 15px; }\n\n.individual-user-container {\n  width: 50px;\n  height: 50px;\n  margin: 0 5px; }\n\n.individual-image-container {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  background: #69A8FF;\n  margin: 0 auto; }\n\n.large-image {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%; }\n\n.individual-name {\n  margin-top: 2px;\n  color: #1A1A1A;\n  text-align: center;\n  font-weight: 600;\n  font-size: 12px;\n  position: relative;\n  bottom: 30px;\n  margin-bottom: 0; }\n\n.individual-checkmark {\n  font-size: 25px;\n  position: relative;\n  bottom: 33px;\n  left: 12px;\n  visibility: hidden; }\n\n.individual-overlay .large-image {\n  opacity: 0.5 !important; }\n\n.individual-overlay .individual-name {\n  color: #005DDD !important; }\n\n.individual-overlay .individual-checkmark {\n  visibility: visible; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYmJveF9mcm9udGVuZC9zcmMvYXBwL2NyZWF0ZS1wZXJzb25hbC1jaGF0L2NyZWF0ZS1wZXJzb25hbC1jaGF0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLDJCQUEyQixFQUFBOztBQUsvQjtFQUNJLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksZUFBYyxFQUFBOztBQUtsQjtFQUNJLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUlwQjtFQUNJLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSx3QkFBd0IsRUFBQTs7QUFHNUI7RUFDSSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHVCQUFlO0VBQ2Ysa0JBQ0osRUFBQTs7QUFFQTtFQUNJLFlBQVk7RUFDWixxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGtCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQUdsQjtFQUNJLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGtCQUFhLEVBQUE7O0FBR2pCO0VBQ0ksa0JBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksNEJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBTXRCO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGVBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixVQUFVO0VBQ1Ysa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGUtcGVyc29uYWwtY2hhdC9jcmVhdGUtcGVyc29uYWwtY2hhdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL1BhZ2UgU3R5bGVzXG5cbi5tYWlue1xuICAgIG1hcmdpbjogMTVweCAxNXB4IDEwcHggMTVweDtcbiAgICBcbn1cblxuLy9Jb24gaGVhZGVyIFN0eWxlc1xuLmlvbi10aXRsZXtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGZvbnQtd2VpZ2h0OjYwMDtcbiAgICBwYWRkaW5nLWxlZnQ6MjBweDtcbiAgICBtYXJnaW46IDE1cHggMCAxNXB4IDA7XG59XG5cbi5iYWNrLWJ1dHRvbntcbiAgICBmb250LXNpemU6MjVweDtcbn1cblxuLy9IZWFkZXIgU3R5bGVzXG5cbi5oZWFkZXJ7XG4gICAgY29sb3I6ICMxQTFBMUE7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi8vRm9ybSBTdHlsZXNcbi5hZGQtbWVtYmVyLWZvcm17XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hZGQtbWVtYmVyLWZvcm0gaW9uLWl0ZW17XG4gICAgbWFyZ2luOiAzMHB4IGF1dG8gMCBhdXRvO1xufVxuXG4ucm91bmRlZHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRTJFMkUyO1xuICAgIG1hcmdpbjogMCA1MHB4IDAgNTBweDtcbiAgICAtLWJvcmRlci13aWR0aDogMCAwIDAgMDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHhcbn1cblxuLnN1Z2dlc3Rpb25ze1xuICAgIG9wYWNpdHk6IDUwJTtcbiAgICBtYXJnaW46IDAgMTVweCAwIDE1cHg7XG59XG5cbi5zdWdnZXN0aW9ucyBwe1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW46IDVweCAwIDVweCAwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jYW50LWZpbmR7XG4gICAgcGFkZGluZy1sZWZ0OjI1cHg7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICBjb2xvcjogIzAwNjhGODtcbn1cblxuLmFkZC1tZW1iZXItYnV0dG9ue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDEwMHB4IGF1dG8gMCBhdXRvO1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuXG4ubWVtYmVyLXBob3Rve1xuICAgIGJvcmRlci1yYWRpdXM6NTAlO1xufVxuXG4ubWVtYmVyLW5hbWV7XG4gICAgY29sb3I6ICMwMDVEREQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW52aXRlLXRleHR7XG4gICAgY29sb3I6IHJnYmEoMCw5MywyMjEsMC41KTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuLy9TZW5kIE1lc3NhZ2UgdG8gSW5kaXZpZHVhbHMgU3R5bGVcblxuLmFsbC1pbWFnZXMtcm93e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5pbmRpdmlkdWFsLXVzZXItY29udGFpbmVye1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW46IDAgNXB4O1xufVxuXG4uaW5kaXZpZHVhbC1pbWFnZS1jb250YWluZXJ7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAjNjlBOEZGO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ubGFyZ2UtaW1hZ2V7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmluZGl2aWR1YWwtbmFtZXtcbiAgICBtYXJnaW4tdG9wOjJweDtcbiAgICBjb2xvcjogIzFBMUExQTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uaW5kaXZpZHVhbC1jaGVja21hcmt7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IDMzcHg7XG4gICAgbGVmdDogMTJweDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5pbmRpdmlkdWFsLW92ZXJsYXkgLmxhcmdlLWltYWdle1xuICAgIG9wYWNpdHk6IDAuNSAhaW1wb3J0YW50O1xufVxuXG4uaW5kaXZpZHVhbC1vdmVybGF5IC5pbmRpdmlkdWFsLW5hbWV7XG4gICAgY29sb3I6ICMwMDVEREQgIWltcG9ydGFudDtcbn1cblxuLmluZGl2aWR1YWwtb3ZlcmxheSAuaW5kaXZpZHVhbC1jaGVja21hcmt7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/create-personal-chat/create-personal-chat.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/create-personal-chat/create-personal-chat.page.ts ***!
  \*******************************************************************/
/*! exports provided: CreatePersonalChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePersonalChatPage", function() { return CreatePersonalChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shareduser_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shareduser/user.service */ "./src/app/shareduser/user.service.ts");
/* harmony import */ var _shared_group_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/group.service */ "./src/app/shared/group.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");










var CreatePersonalChatPage = /** @class */ (function () {
    function CreatePersonalChatPage(userService, groupService, router, toastController, route, ref, storage, navCtrl, loader, translate) {
        var _this = this;
        this.userService = userService;
        this.groupService = groupService;
        this.router = router;
        this.toastController = toastController;
        this.route = route;
        this.ref = ref;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.loader = loader;
        this.translate = translate;
        this.lang = 'EN';
        this.items = new Array(0);
        this.userArray = [];
        this.storage.get('language')
            .then(function (lang) {
            if (lang) {
                _this.lang = lang;
                _this.cant_find = _this.translate.instant('cant find', { value: _this.lang });
            }
        });
    }
    CreatePersonalChatPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('id').then(function (val) {
            console.log(val);
            _this.id = val;
        });
    };
    CreatePersonalChatPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    CreatePersonalChatPage.prototype.addmember = function (val, name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log(this.userArray.findIndex(function (o) { return o.memberid == val; }));
                console.log(this.userArray);
                if (this.userArray.findIndex(function (o) { return o.memberid == val; }) == -1) {
                    this.items.length += 1;
                    this.userArray[0] = {
                        memberid: val,
                        accepted: false,
                        admin: false,
                        nameval: name
                    };
                }
                else {
                    // let value = this.translate.instant('Cannot_Add_Same_User_Again', { value: this.lang });
                    this.storage.get('language').then(function (language) {
                        console.log(language);
                        _this.translate.get("Cannot_Add_Same_User_Again", { value: language })
                            .subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var toast;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.toastController.create({
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
                }
                return [2 /*return*/];
            });
        });
    };
    CreatePersonalChatPage.prototype.removeUser = function (val) {
        console.log(this.userArray.findIndex(function (o) { return o.memberid == val.memberid; }));
        var member_id = this.userArray.findIndex(function (o) { return o.memberid == val.memberid; });
        this.userArray.splice(member_id, 1);
    };
    CreatePersonalChatPage.prototype.addtogroup = function () {
        var _this = this;
        console.log(this.userArray);
        //  Adding admin as member
        if (this.userArray.length >= 1) {
            this.storage.get('id').then(function (val) {
                console.log(val);
                _this.storage.get('name').then(function (name) {
                    console.log(name);
                    _this.userArray.push({
                        memberid: val,
                        accepted: true,
                        admin: true,
                        nameval: name
                    });
                    var empty_group = {
                        name: "Personal Group",
                        description: "No Description"
                    };
                    _this.groupService.postGroup(empty_group).subscribe(function (res) {
                        console.log(res);
                        _this.loader.presentLoading();
                        _this.userService.putUser({ members: _this.userArray }, res._id).subscribe(function (res1) {
                            _this.loader.dismiss();
                            _this.userService.users = [];
                            _this.router.navigate(['home/tabs/tab1']);
                            _this.ref.detectChanges();
                            _this.showToast();
                        });
                    });
                });
            });
        }
    };
    CreatePersonalChatPage.prototype.refreshUserList = function (ev) {
        var _this = this;
        var data = ev.target.value;
        if (data == "") {
            this.userService.users = [];
        }
        else {
            // this.loader.presentLoading();
            var body = {
                user_id: this.id
            };
            this.userService.getuserList(data, body).subscribe(function (res) {
                _this.userService.users = res;
                // this.loader.dismiss();
                console.log(_this.userService.users);
            });
        }
    };
    CreatePersonalChatPage.prototype.selectIndividual = function (event, ittrator) {
        console.log(ittrator);
        console.log(this.userArray);
        console.log(this.userArray[ittrator]);
        this.removeUser(ittrator);
        var currentID = event.target.id.replace('-image', '');
        document.getElementById(currentID + '-container').classList.toggle('individual-overlay');
    };
    CreatePersonalChatPage.prototype.showToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // let value = this.translate.instant('Chat_Created_Successfully', { value: this.lang });
                this.storage.get('language').then(function (language) {
                    console.log(language);
                    _this.translate.get("Chat_Created_Successfully", { value: language })
                        .subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var toast;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.toastController.create({
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
    CreatePersonalChatPage.prototype.inviteMembers = function () {
        this.router.navigate(['invite-member']);
    };
    CreatePersonalChatPage.ctorParameters = function () { return [
        { type: _shareduser_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _shared_group_service__WEBPACK_IMPORTED_MODULE_5__["GroupService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] }
    ]; };
    CreatePersonalChatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-personal-chat',
            template: __webpack_require__(/*! raw-loader!./create-personal-chat.page.html */ "./node_modules/raw-loader/index.js!./src/app/create-personal-chat/create-personal-chat.page.html"),
            styles: [__webpack_require__(/*! ./create-personal-chat.page.scss */ "./src/app/create-personal-chat/create-personal-chat.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shareduser_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _shared_group_service__WEBPACK_IMPORTED_MODULE_5__["GroupService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]])
    ], CreatePersonalChatPage);
    return CreatePersonalChatPage;
}());



/***/ })

}]);
//# sourceMappingURL=create-personal-chat-create-personal-chat-module-es5.js.map