(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-member-add-member-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/add-member/add-member.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add-member/add-member.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"back()\">\n              <ion-icon class=\"back-button\" slot=\"icon-only\" name=\"md-arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n      <h1 class=\"ion-title\">{{'Add Members'|translate}}</h1>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n    <div class=\"main\">\n        <p class=\"header\">{{'Enter Details'|translate}}</p>\n        <div class=\"add-member-form\">\n            <ion-item class=\"rounded\" lines=\"none\">\n              <ion-input type=\"text\" placeholder=\"{{ 'Search User' | translate }}\"  primary [(ngModel)]=\"searchQuery\" \n              (keyup)=\"refreshUserList($event)\"\n              show-cancel=\"true\" ></ion-input>\n            </ion-item>\n            <div class=\"suggestions\">\n              <ion-grid class=\"ion-no-padding\">\n                <ion-row class=\"ion-no-padding\" *ngFor=\"let u of userService.users\">\n                  <ion-col size=\"2\">\n                    <img class=\"member-photo\" src=\"assets/images/user.png\">\n                  </ion-col>\n                  <ion-col size=\"10\">\n                    <a class=\"action-btn\" (click)=\"addmember(u._id,u.name)\"><p><span>{{ u.name }}</span></p></a>\n                  </ion-col>\n                </ion-row>\n               \n                \n              </ion-grid>\n              <!-- <p class=\"cant-find\">{{'cant find' |  translate}} </p> -->\n              <p class=\"cant-find\"  (click)=\"inviteMembers()\">{{ cant_find }} </p>\n            </div>\n            <p class=\"header\">{{'Members'|translate}}</p>\n        </div>\n    </div> \n    \n    <!-- Select Individual Members -->\n    <div class=\"all-images-row\">\n        <div class=\"individual-user-container\" id=\"first-container\" *ngFor=\"let i of userArray; let itt of index\">\n          <div class=\"individual-image-container\" (click)=\"selectIndividual($event,itt)\" >\n              <img src=\"assets/images/user.png\" class=\"large-image\" id=\"first-image\">\n          </div>\n          <form name=\"addform\">\n          <ion-icon slot=\"icon-only\" name=\"md-checkmark\" color=\"light\" class=\"individual-checkmark\" id=\"first-image\" (click)=\"selectIndividual($event,itt)\" ></ion-icon>\n          <p class=\"individual-name\">{{ i.nameval }}</p>\n         \n          </form>\n        </div>\n        \n        \n\n         \n          \n\n          <div class=\"individual-user-container\">\n              <div class=\"individual-image-container\">\n                  <img src=\"assets/images/invite.png\" class=\"large-image\">\n              </div>\n          </div>\n        \n      </div>\n\n      <ion-list class=\"ion-no-padding\" lines=\"none\">\n\n      <!-- Single chat item, for new message add class \"unread\" and add attribute color with value \"secondary\" -->\n        <ion-item class=\"chat-item \" color=\"\" *ngFor=\"let gp of groupService.groups\">       \n          <ion-label>\n            <ion-grid>\n              <ion-row>\n                <ion-col size-sm=\"2\" size-xs=\"2\" class=\"left\">\n                    <img class=\"individual-image-container\" src=\"assets/images/user.png\">\n                </ion-col>\n                <ion-col size-sm=\"8\" size-xs=\"8\" class=\"middle\">\n                    <h2 class=\"group-name\">{{gp.name}}</h2>\n                </ion-col>\n                <ion-col size-sm=\"2\" size-xs=\"2\">\n                 \n                  <ion-row>\n                    <ion-col no-padding class=\"message-badge-container\">\n                    \n                      <ion-button fill=\"clear\" class=\"ion-no-padding approve-button\" (click)=\"delete(gp._id)\">\n                          <ion-icon name=\"md-close\" color=\"danger\"></ion-icon>\n                      </ion-button>\n                    </ion-col>\n                  </ion-row>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n\n    <div class=\"add-member-button\">\n        <ion-button *ngIf=\"groupService.groups && groupService.groups.length != 0\" expand=\"block\" shape=\"round\" (click)=\"addtogroup()\">{{ 'update' | translate }}</ion-button>\n        <ion-button *ngIf=\"groupService.groups && groupService.groups.length == 0\" expand=\"block\" shape=\"round\" (click)=\"addtogroup()\">{{ 'Create' | translate }}</ion-button>\n    </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/add-member/add-member.module.ts":
/*!*************************************************!*\
  !*** ./src/app/add-member/add-member.module.ts ***!
  \*************************************************/
/*! exports provided: AddMemberPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMemberPageModule", function() { return AddMemberPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_member_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-member.page */ "./src/app/add-member/add-member.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _add_member_page__WEBPACK_IMPORTED_MODULE_6__["AddMemberPage"]
    }
];
var AddMemberPageModule = /** @class */ (function () {
    function AddMemberPageModule() {
    }
    AddMemberPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_add_member_page__WEBPACK_IMPORTED_MODULE_6__["AddMemberPage"]]
        })
    ], AddMemberPageModule);
    return AddMemberPageModule;
}());



/***/ }),

/***/ "./src/app/add-member/add-member.page.scss":
/*!*************************************************!*\
  !*** ./src/app/add-member/add-member.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  margin: 15px 15px 10px 15px; }\n\n.ion-title {\n  text-align: left !important;\n  font-size: 17px;\n  font-weight: 600;\n  padding-left: 20px;\n  margin: 15px 0 15px 0; }\n\n.back-button {\n  font-size: 25px; }\n\n.header {\n  color: #1A1A1A;\n  font-weight: bold;\n  font-size: 18px;\n  text-align: left; }\n\n.add-member-form {\n  margin-top: 30px;\n  text-align: center; }\n\n.add-member-form ion-item {\n  margin: 30px auto 0 auto; }\n\n.rounded {\n  border: 2px solid #E2E2E2;\n  margin: 0 50px 0 50px;\n  --border-width: 0 0 0 0;\n  border-radius: 8px; }\n\n.suggestions {\n  opacity: 50%;\n  margin: 0 15px 0 15px; }\n\n.suggestions p {\n  font-size: 12px;\n  margin: 5px 0 5px 0;\n  text-align: left; }\n\n.cant-find {\n  padding-left: 25px;\n  padding-top: 5px;\n  color: #0068F8; }\n\n.add-member-button {\n  text-align: center;\n  margin: 40px auto 0 auto;\n  max-width: 150px;\n  --box-shadow: none; }\n\n.member-photo {\n  border-radius: 50%;\n  border-radius: 50%;\n  width: 25px;\n  min-height: 25px;\n  max-height: 25px; }\n\n.member-name {\n  color: #005DDD;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: center; }\n\n.invite-text {\n  color: rgba(0, 93, 221, 0.5);\n  font-size: 14px;\n  font-weight: 600;\n  text-align: center; }\n\n.all-images-row {\n  display: -webkit-box;\n  display: flex;\n  margin-left: 15px;\n  margin-bottom: 15px; }\n\n.individual-user-container {\n  width: 50px;\n  height: 50px;\n  margin: 0 5px; }\n\n.individual-image-container {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  background: #69A8FF;\n  margin: 0 auto; }\n\n.large-image {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%; }\n\n.individual-name {\n  margin-top: 2px;\n  color: #1A1A1A;\n  text-align: center;\n  font-weight: 600;\n  font-size: 12px;\n  position: relative;\n  bottom: 30px;\n  margin-bottom: 0; }\n\n.individual-checkmark {\n  font-size: 25px;\n  position: relative;\n  bottom: 33px;\n  left: 12px;\n  visibility: hidden; }\n\n.individual-overlay .large-image {\n  opacity: 0.5 !important; }\n\n.individual-overlay .individual-name {\n  color: #005DDD !important; }\n\n.individual-overlay .individual-checkmark {\n  visibility: visible; }\n\n.group-name {\n  padding-top: 10px; }\n\n.action-button {\n  font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYmJveF9mcm9udGVuZC9zcmMvYXBwL2FkZC1tZW1iZXIvYWRkLW1lbWJlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSwyQkFBMkIsRUFBQTs7QUFLL0I7RUFDSSwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2pCLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLGVBQWMsRUFBQTs7QUFLbEI7RUFDSSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDSSxnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksd0JBQXdCLEVBQUE7O0FBRzVCO0VBQ0kseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQix1QkFBZTtFQUNmLGtCQUNKLEVBQUE7O0FBRUE7RUFDSSxZQUFZO0VBQ1oscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxrQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixrQkFBYSxFQUFBOztBQUdqQjtFQUNJLGtCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSw0QkFBeUI7RUFDekIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFNdEI7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGVBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixVQUFVO0VBQ1Ysa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWRkLW1lbWJlci9hZGQtbWVtYmVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vUGFnZSBTdHlsZXNcblxuLm1haW57XG4gICAgbWFyZ2luOiAxNXB4IDE1cHggMTBweCAxNXB4O1xuICAgIFxufVxuXG4vL0lvbiBoZWFkZXIgU3R5bGVzXG4uaW9uLXRpdGxle1xuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgZm9udC13ZWlnaHQ6NjAwO1xuICAgIHBhZGRpbmctbGVmdDoyMHB4O1xuICAgIG1hcmdpbjogMTVweCAwIDE1cHggMDtcbn1cblxuLmJhY2stYnV0dG9ue1xuICAgIGZvbnQtc2l6ZToyNXB4O1xufVxuXG4vL0hlYWRlciBTdHlsZXNcblxuLmhlYWRlcntcbiAgICBjb2xvcjogIzFBMUExQTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLy9Gb3JtIFN0eWxlc1xuLmFkZC1tZW1iZXItZm9ybXtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFkZC1tZW1iZXItZm9ybSBpb24taXRlbXtcbiAgICBtYXJnaW46IDMwcHggYXV0byAwIGF1dG87XG59XG5cbi5yb3VuZGVke1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNFMkUyRTI7XG4gICAgbWFyZ2luOiAwIDUwcHggMCA1MHB4O1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwIDAgMCAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweFxufVxuXG4uc3VnZ2VzdGlvbnN7XG4gICAgb3BhY2l0eTogNTAlO1xuICAgIG1hcmdpbjogMCAxNXB4IDAgMTVweDtcbn1cblxuLnN1Z2dlc3Rpb25zIHB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbjogNXB4IDAgNXB4IDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNhbnQtZmluZHtcbiAgICBwYWRkaW5nLWxlZnQ6MjVweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIGNvbG9yOiAjMDA2OEY4O1xufVxuXG4uYWRkLW1lbWJlci1idXR0b257XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogNDBweCBhdXRvIDAgYXV0bztcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLm1lbWJlci1waG90b3tcbiAgICBib3JkZXItcmFkaXVzOjUwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgbWluLWhlaWdodDogMjVweDtcbiAgICBtYXgtaGVpZ2h0OiAyNXB4O1xufVxuXG4ubWVtYmVyLW5hbWV7XG4gICAgY29sb3I6ICMwMDVEREQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW52aXRlLXRleHR7XG4gICAgY29sb3I6IHJnYmEoMCw5MywyMjEsMC41KTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuLy9TZW5kIE1lc3NhZ2UgdG8gSW5kaXZpZHVhbHMgU3R5bGVcblxuLmFsbC1pbWFnZXMtcm93e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmluZGl2aWR1YWwtdXNlci1jb250YWluZXJ7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbjogMCA1cHg7XG59XG5cbi5pbmRpdmlkdWFsLWltYWdlLWNvbnRhaW5lcntcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6ICM2OUE4RkY7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5sYXJnZS1pbWFnZXtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uaW5kaXZpZHVhbC1uYW1le1xuICAgIG1hcmdpbi10b3A6MnB4O1xuICAgIGNvbG9yOiAjMUExQTFBO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm90dG9tOiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5pbmRpdmlkdWFsLWNoZWNrbWFya3tcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogMzNweDtcbiAgICBsZWZ0OiAxMnB4O1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmluZGl2aWR1YWwtb3ZlcmxheSAubGFyZ2UtaW1hZ2V7XG4gICAgb3BhY2l0eTogMC41ICFpbXBvcnRhbnQ7XG59XG5cbi5pbmRpdmlkdWFsLW92ZXJsYXkgLmluZGl2aWR1YWwtbmFtZXtcbiAgICBjb2xvcjogIzAwNURERCAhaW1wb3J0YW50O1xufVxuXG4uaW5kaXZpZHVhbC1vdmVybGF5IC5pbmRpdmlkdWFsLWNoZWNrbWFya3tcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uZ3JvdXAtbmFtZSB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5hY3Rpb24tYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/add-member/add-member.page.ts":
/*!***********************************************!*\
  !*** ./src/app/add-member/add-member.page.ts ***!
  \***********************************************/
/*! exports provided: AddMemberPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMemberPage", function() { return AddMemberPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shareduser_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shareduser/user.service */ "./src/app/shareduser/user.service.ts");
/* harmony import */ var _shared_group_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/group.service */ "./src/app/shared/group.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_contacts_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/contacts.service */ "./src/app/services/contacts.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");













var AddMemberPage = /** @class */ (function () {
    function AddMemberPage(userService, groupService, router, toastController, route, ref, storage, loader, navCtrl, translate, location, contactsService, platform, storageService) {
        var _this = this;
        this.userService = userService;
        this.groupService = groupService;
        this.router = router;
        this.toastController = toastController;
        this.route = route;
        this.ref = ref;
        this.storage = storage;
        this.loader = loader;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.location = location;
        this.contactsService = contactsService;
        this.platform = platform;
        this.storageService = storageService;
        this.lang = 'EN';
        this.items = new Array(0);
        this.userArray = [];
        this.avatarArray = [];
        this.id = ""; // group id
        this.storage.get('language')
            .then(function (lang) {
            if (lang) {
                _this.lang = lang;
            }
        });
        this.mobile = this.contactsService.getPhoneNumber();
        this.cant_find = this.translate.instant('cant find', { value: this.lang });
        console.log(this.cant_find);
    }
    AddMemberPage.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            console.log(_this.id);
            //alert(this.id);
            _this.storage.get('id').then(function (val) {
                _this.user_id = val;
                _this.storage.get('name').then(function (name) {
                    // to check if existing users are there in this group
                    //  IF groupService.groups is empty means its a new group ELSE Members Already Exists
                    _this.groupService.groups = [];
                    _this.getgroupuser(_this.id, val, name);
                    console.log(val);
                });
            });
        });
        if (this.platform.is('cordova')) {
            this.contactsData = this.contactsService.contactsData();
            console.log('DATA', this.contactsData);
            this.userService.users = this.contactsData.allContacts;
            this.avatarArray = this.contactsData.avatarArray;
        }
        else {
            this.userService.users = this.contactsService.getDemoUsers();
        }
    };
    AddMemberPage.prototype.back = function () {
        this.groupService.groups = [];
        this.navCtrl.pop();
        this.location.back();
    };
    AddMemberPage.prototype.addmember = function (val, name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.storage.get('language').then(function (language) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var _this = this;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        console.log(language);
                        this.translate.get("Cannot_Add_Same_User_Again", { value: language })
                            .subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var toast, toast;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(this.groupService.groups && this.groupService.groups.length != 0)) return [3 /*break*/, 4];
                                        if (!(this.groupService.groups.findIndex(function (o) { return o._id == val; }) == -1 && this.userArray.findIndex(function (o) { return o.memberid == val; }) == -1)) return [3 /*break*/, 1];
                                        this.userArray.push({ memberid: val, accepted: false, admin: false, nameval: name });
                                        return [3 /*break*/, 3];
                                    case 1: return [4 /*yield*/, this.toastController.create({ message: res, duration: 1000, position: "bottom", })];
                                    case 2:
                                        toast = _a.sent();
                                        toast.present();
                                        this.ref.detectChanges();
                                        _a.label = 3;
                                    case 3: return [3 /*break*/, 7];
                                    case 4:
                                        console.log(this.userArray.findIndex(function (o) { return o.memberid == val; }));
                                        console.log(this.userArray);
                                        if (!(this.userArray.findIndex(function (o) { return o.memberid == val; }) == -1)) return [3 /*break*/, 5];
                                        this.items.length += 1;
                                        this.userArray.push({ memberid: val, accepted: false, admin: false, nameval: name });
                                        return [3 /*break*/, 7];
                                    case 5: return [4 /*yield*/, this.toastController.create({ message: res, duration: 1000, position: "bottom", })];
                                    case 6:
                                        toast = _a.sent();
                                        toast.present();
                                        this.ref.detectChanges();
                                        _a.label = 7;
                                    case 7: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    AddMemberPage.prototype.removeUser = function (val, event) {
        console.log(this.userArray.findIndex(function (o) { return o.memberid == val.memberid; }));
        var index = this.userArray.findIndex(function (o) { return o.memberid == val.memberid; });
        if (index != 0 || this.groupService.groups.length != 0) {
            this.userArray.splice(index, 1);
            //  handle front End
            // var currentID = event.target.id.replace('-image', '');
            // document.getElementById(currentID + '-container').classList.toggle('individual-overlay');
        }
    };
    AddMemberPage.prototype.addtogroup = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log(this.userArray);
                if (this.groupService.groups && this.groupService.groups.length == 0) {
                    if (this.userArray.length > 1) {
                        this.updateGroup();
                    }
                    else {
                        this.showToast("Kindly_Add_2_or_more_Members_To_Proceed");
                    }
                }
                else {
                    if (this.userArray.length > 0) {
                        this.updateGroup();
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    AddMemberPage.prototype.updateGroup = function () {
        var _this = this;
        // this.loader.presentLoading();
        var members = this.userArray;
        if (this.groupService.groups && this.groupService.groups.length == 0) {
            members.push({
                memberid: this.user_id,
                accepted: true,
                admin: true,
                nameval: 'You'
            });
        }
        this.userService.putUser({ members: members }, this.id).subscribe(function (res) {
            // this.loader.dismiss();
            // let value = this.translate.instant(['Members_Added_Successfully'], { value: this.lang })
            _this.groupService.groups = [];
            _this.showToast("Members_Added_Successfully");
            _this.router.navigate(['home/tabs/tab1']);
            _this.ref.detectChanges();
        });
    };
    AddMemberPage.prototype.userGroup = function () {
        // this.loader.presentLoading();
        this.userService.userGroups(this.userArray, this.id).subscribe(function (res) {
            // this.loader.dismiss();
            // this.router.navigate(['home/tabs/tab1']);
        });
    };
    AddMemberPage.prototype.refreshUserList = function (ev) {
        var data = ev.target.value;
        if (data == "") {
            this.userService.users = this.contactsData.allContacts;
        }
        else {
            // this.loader.presentLoading();
            if (this.platform.is('cordova')) {
                console.log('DATA', data);
                this.userService.users = this.find(this.contactsData.allContacts, data);
                console.log(this.userService.users);
            }
            else {
                this.userService.users = this.find(this.userService.users, data);
            }
        }
    };
    AddMemberPage.prototype.find = function (items, text) {
        console.log('items', items);
        var text = text.split(' ');
        return items.filter(function (item) {
            return text.every(function (el) {
                return item.name.indexOf(el) > -1;
            });
        });
    };
    AddMemberPage.prototype.selectIndividual = function (event, ittrator) {
        console.log(ittrator);
        console.log(this.userArray);
        console.log(this.userArray[ittrator]);
        this.removeUser(ittrator, event);
    };
    AddMemberPage.prototype.showToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.storage.get('language').then(function (language) {
                    console.log(language);
                    _this.translate.get(msg, { value: language })
                        .subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var toast;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.toastController.create({
                                        message: res,
                                        duration: 1000,
                                        position: "bottom",
                                    })];
                                case 1:
                                    toast = _a.sent();
                                    toast.present();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                });
                return [2 /*return*/];
            });
        });
    };
    AddMemberPage.prototype.getgroupuser = function (group_id, user_id, user_name) {
        var _this = this;
        console.log(group_id, user_id, user_name);
        console.log(this.groupService.groups);
        // this.loader.presentLoading()
        this.groupService.getGroupDetails(group_id, user_id).then(function (res) {
            // this.loader.dismiss()
            console.log(res);
            if (res._id) {
                console.log('no error');
                _this.groupService.groups = res['memberData'];
                _this.groupService.groups.forEach(function (element) {
                    var contact = _this.contactsService.getContactName(element['_id']);
                    element.name = contact ? contact : element['mobile'];
                    if (element.mobile == _this.mobile) {
                        element.name = 'You';
                    }
                });
                console.log(_this.groupService.groups);
            }
        }, function (err) {
            //DO NOTIHNG
            // this.userArray.push({
            //   memberid: user_id,
            //   accepted: true,
            //   admin: true,
            //   nameval: 'You'
            // });
        }).finally(function () {
            if (_this.userArray.length == 0 && _this.groupService.groups.length == 0) {
                // this.userArray.push({
                //   memberid: user_id,
                //   accepted: true,
                //   admin: true,
                //   nameval: 'You'
                // });
            }
        });
        console.log(this.groupService.groups);
        if (!this.groupService.groups || this.groupService.groups.length == 0) {
        }
    };
    AddMemberPage.prototype.delete = function (userid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast, toast;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(userid == this.user_id)) return [3 /*break*/, 2];
                        console.log('Cannot Remove The User Him/Herself');
                        return [4 /*yield*/, this.toastController.create({ message: 'Cannot Remove The Admin User', duration: 1000, position: "bottom", })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 5];
                    case 2:
                        if (!(3 <= this.groupService.groups.length)) return [3 /*break*/, 3];
                        // removable condition
                        if ((3 == this.groupService.groups.length)) {
                            this.cannotDeleteToast();
                        }
                        else {
                            this.groupService.removeMember({ member: userid }, this.id).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var toast;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            this.groupService.groups.splice(this.groupService.groups.findIndex(function (o) { return o._id == userid; }), 1);
                                            console.log(res);
                                            return [4 /*yield*/, this.toastController.create({ message: 'Needs Atleast 3 members', duration: 1000, position: "bottom", })];
                                        case 1:
                                            toast = _a.sent();
                                            toast.present();
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                        }
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.toastController.create({ message: 'Needs Atleast 3 members', duration: 1000, position: "bottom", })];
                    case 4:
                        toast = _a.sent();
                        toast.present();
                        console.log('Needs Atleast 3 members');
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    // removable function
    AddMemberPage.prototype.cannotDeleteToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast, toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.userArray.length != 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toastController.create({ message: 'Kindly Update The Group With Added Users And Then Delete Existing Users', duration: 3000, position: "bottom", })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        _a.label = 2;
                    case 2:
                        if (!(this.userArray.length == 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.toastController.create({ message: 'Needs Atleast 3 members', duration: 1000, position: "bottom", })];
                    case 3:
                        toast = _a.sent();
                        toast.present();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AddMemberPage.prototype.inviteMembers = function () {
        this.router.navigate(['invite-member']);
    };
    AddMemberPage.ctorParameters = function () { return [
        { type: _shareduser_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _shared_group_service__WEBPACK_IMPORTED_MODULE_5__["GroupService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
        { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"] },
        { type: _services_contacts_service__WEBPACK_IMPORTED_MODULE_10__["ContactsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_11__["StorageService"] }
    ]; };
    AddMemberPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-member',
            template: __webpack_require__(/*! raw-loader!./add-member.page.html */ "./node_modules/raw-loader/index.js!./src/app/add-member/add-member.page.html"),
            providers: [_shareduser_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _shared_group_service__WEBPACK_IMPORTED_MODULE_5__["GroupService"]],
            styles: [__webpack_require__(/*! ./add-member.page.scss */ "./src/app/add-member/add-member.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shareduser_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _shared_group_service__WEBPACK_IMPORTED_MODULE_5__["GroupService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
            _services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"],
            _services_contacts_service__WEBPACK_IMPORTED_MODULE_10__["ContactsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_11__["StorageService"]])
    ], AddMemberPage);
    return AddMemberPage;
}());



/***/ })

}]);
//# sourceMappingURL=add-member-add-member-module-es5.js.map