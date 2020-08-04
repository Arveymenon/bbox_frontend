(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/tab1.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      {{'Home'|translate}}\n    </ion-title>\n    <ion-buttons slot=\"end\" size-xs=\"small\">\n      <!-- <ion-button (click)=\"createPersonal()\" class=\"no-padding\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button> -->\n      <!-- <ion-button [routerLink]=\"[ '/notifications']\">\n        <ion-icon slot=\"icon-only\" name=\"notifications\"></ion-icon>\n      </ion-button> -->\n      <ion-button [routerLink]=\"['/contact-list']\">\n        <ion-icon slot=\"icon-only\" name=\"person\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content\n        pullingIcon=\"arrow-dropdown\"\n        pullingText=\"Pull to refresh\"\n        refreshingSpinner=\"circles\"\n        refreshingText=\"Refreshing...\">\n      </ion-refresher-content>\n    </ion-refresher>\n\n    <!-- <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button (click)=\"createGroup()\">\n          <ion-icon name=\"md-create\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab> -->\n\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" #fab>\n      <ion-fab-button id=\"fab-btn\">\n        <ion-icon name=\"md-create\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-list id=\"fab-list\" side=\"top\">\n        <ion-fab-button id=\"fab-btn1\" (click)=\"createPersonal()\" title=\"{{ 'Personal Chat' | translate }}\">\n          <ion-icon name=\"person\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button id=\"fab-btn2\" (click)=\"createGroup(1)\" title=\"{{ 'Group' | translate }}\">\n          <ion-icon name=\"people\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button *ngIf=\"subscribers\" id=\"fab-btn3\" (click)=\"createGroup(2)\" title=\"{{ 'Subscriber List' | translate }}\">\n          <ion-icon name=\"people\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab-list>\n    </ion-fab>\n\n\n <!-- Skeleton -->\n <div *ngIf=\"loadingGroups\">\n  <ion-list>\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-avatar>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-avatar>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-avatar>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-avatar>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-avatar>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-avatar>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-avatar>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-avatar>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</div>\n<!-- Skeleton End -->\n<ion-segment (ionChange)=\"segmentChanged($event)\" color=\"primary\" value=\"{{segment}}\" *ngIf=\"loadingGroups == false && subscribers == true\">\n  <ion-segment-button value=\"personal\">\n    <ion-label>{{ 'Chatrooms' | translate }}</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value=\"group\">\n    <ion-label>{{ 'Subscribers' | translate }}</ion-label>\n  </ion-segment-button>\n</ion-segment>\n\n    <!-- <ion-list class=\"ion-no-padding\" lines=\"none\" routerLink='groupchat/groupchatadmin'> -->\n      <ion-list class=\"ion-no-padding\" lines=\"none\" *ngIf=\"loadingGroups == false && segment == 'group'\">\n      \n      <!-- <ion-list-header>\n        <ion-label>{{ 'Groups' | translate }}</ion-label>\n      </ion-list-header> -->\n      <p class=\"ion-text-center\" *ngIf=\"!groupService.groups && loadingGroups == false\">{{ 'No Subscriber Lists Yet' | translate}}</p>\n      <div id=\"main\" *ngIf=\"!loadingGroups\">\n      <div *ngFor=\"let gp of groupService.groups\" >\n      <ion-item class=\"chat-item\" *ngIf=\"gp.members.length > 2 && gp.admin == true && gp.subscriber == true\" (click)=\"onClickDetails(gp._id, gp.subscriber)\">       \n          <ion-label >\n            <ion-grid>\n              <ion-row (press)=\"deleteAlert(gp._id)\">\n                <ion-col size-sm=\"1\" size-xs=\"2\" class=\"left\">\n                  <!-- <div class=\"\">\n                      <img class=\"group-icon\" src=\"assets/images/user.png\">\n                      <img class=\"group-icon\" src=\"assets/images/user.png\">\n                  </div>\n                  <div class=\"\">\n                      <img class=\"group-icon\" src=\"assets/images/user.png\">\n                      <img class=\"group-icon\" src=\"assets/images/user.png\">\n                  </div> -->\n                  <img class=\"group-icon\" *ngIf=\"gp.avatar\" [src]=\"'http://198.12.92.202/public/uploads/' + gp.avatar\">\n                  <img class=\"group-icon\" *ngIf=\"!gp.avatar && gp.members.length > 2\" src=\"assets/images/user.png\">\n                  <img class=\"group-icon\" *ngIf=\"!gp.avatar && gp.members.length <= 2\" src=\"assets/images/user.png\">\n                </ion-col>\n                <ion-col size-sm=\"10\" size-xs=\"8\" class=\"middle\">\n                    <h2 class=\"group-name\"><b>{{gp.name}}</b></h2>\n                    <p class=\"group-message\"><span>{{ getLastChat(gp.chats, 'Group') }}</span></p>\n                </ion-col>\n                <ion-col size-sm=\"1\" size-xs=\"2\">\n                  <ion-row class=\"right\">\n                    <ion-col class=\"message-time-container ion-no-padding\">\n                      <span class=\"message-time\" *ngFor=\"let ls of gp.chats; let i = index\" > {{ ((i + 1) == (gp.chats.length)) ? (ls.chattime|date: 'H:mm') : '' }}</span>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <ion-col no-padding class=\"message-badge-container\">\n                      <ion-badge *ngIf=\"getCount(gp._id) > 0\" class=\"message-badge\">{{ getCount(gp._id) }}</ion-badge>\n                    </ion-col>\n                  </ion-row>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-label>\n        </ion-item>\n        </div>\n        </div>\n\n            <br><br>\n\n      \n    </ion-list>\n\n    <ion-list class=\"ion-no-padding\" lines=\"none\" *ngIf=\"loadingGroups == false && segment != 'group'\">\n      \n      <!-- <ion-list-header>\n        <ion-label>{{ 'Personal Chats' | translate }}</ion-label>\n      </ion-list-header> -->\n      <p class=\"ion-text-center\" *ngIf=\"!groupService.groups && loadingGroups == false\">No Personal Chats Yet</p>\n      <div id=\"main\" *ngIf=\"!loadingGroups\">\n      <div *ngFor=\"let gp of groupService.groups\" >\n      <ion-item class=\"chat-item\" *ngIf=\"gp.members.length == 2 || gp.admin != true\" (click)=\"onClickDetails(gp._id, gp.subscriber)\">       \n          <ion-label >\n            <ion-grid>\n              <ion-row (press)=\"gp.members.length == 2 ? deleteAlert(gp._id) : removeAlert(gp._id)\">\n                <ion-col size-sm=\"1\" size-xs=\"2\" class=\"left\">\n                  <!-- <div class=\"\">\n                      <img class=\"group-icon\" src=\"assets/images/user.png\">\n                      <img class=\"group-icon\" src=\"assets/images/user.png\">\n                  </div>\n                  <div class=\"\">\n                      <img class=\"group-icon\" src=\"assets/images/user.png\">\n                      <img class=\"group-icon\" src=\"assets/images/user.png\">\n                  </div> -->\n                  <img class=\"group-icon\" *ngIf=\"gp.avatar\" [src]=\"'http://198.12.92.202/public/uploads/' + gp.avatar\">\n                  <img class=\"group-icon\" *ngIf=\"!gp.avatar && gp.members.length > 2 && !gp.subscriber\" src=\"assets/images/group.png\">\n                  <img class=\"group-icon\" *ngIf=\"!gp.avatar && gp.members.length > 2 && gp.subscriber\" src=\"assets/images/user.png\">\n                  <img class=\"group-icon\" *ngIf=\"!gp.avatar && gp.members.length <= 2\" src=\"assets/images/user.png\">\n                </ion-col>\n                <ion-col size-sm=\"10\" size-xs=\"9\" class=\"middle\">\n                    <h2 class=\"group-name\"><b>{{gp.name}}</b></h2>\n                    <p class=\"group-message\"><span>{{ getLastChat(gp.chats, 'Personal Chat') }}</span></p>\n                </ion-col>\n                <ion-col size-sm=\"1\" size-xs=\"1\">\n                  <ion-row class=\"right\">\n                    <ion-col class=\"message-time-container ion-no-padding\">\n                      <span class=\"message-time\" *ngFor=\"let ls of gp.chats; let i = index\" > {{ ((i + 1) == (gp.chats.length)) ? (ls.chattime|date: 'H:mm') : '' }}</span>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <ion-col no-padding class=\"message-badge-container\">\n                      <ion-badge *ngIf=\"getCount(gp._id) > 0\" class=\"message-badge\">{{ getCount(gp._id) }}</ion-badge>\n                    </ion-col>\n                  </ion-row>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-label>\n        </ion-item>\n        </div>\n        </div>\n\n            <br><br><br><br>\n\n      \n    </ion-list>\n\n\n  </ion-content>"

/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








// import { LongPressModule } from 'ionic-long-press';
var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                // LongPressModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  text-align: left; }\n\n.chat-item {\n  border-bottom: 1px solid #E2E2E2; }\n\n.unread {\n  border: none; }\n\n.right {\n  margin-left: -10px; }\n\n.group-name {\n  color: #4B4A5E;\n  font-weight: bold;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden; }\n\n.group-message {\n  color: #4B4A5E;\n  font-weight: 400; }\n\n.message-time-container {\n  text-align: right; }\n\n.message-time {\n  color: #005DDD;\n  font-size: 14px; }\n\n.message-badge-container {\n  margin-top: 10px;\n  text-align: right; }\n\n.message-badge {\n  border-radius: 50%;\n  font-size: 12px;\n  min-width: 20px;\n  background: #CE0000; }\n\n.group-icon {\n  margin: 1px;\n  border-radius: 50%;\n  height: 35px;\n  width: 35px; }\n\nion-fab-button[title] {\n  position: relative; }\n\nion-fab-button[title]::after {\n  position: absolute;\n  content: attr(title);\n  z-index: 1;\n  right: 55px;\n  bottom: 4px;\n  background-color: var(--ion-color-primary);\n  padding: 9px;\n  border-radius: 15px;\n  color: white;\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12); }\n\nion-list-header ion-label {\n  text-transform: uppercase !important;\n  font-family: 'avenir', sans-serif !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYmJveF9mcm9udGVuZC9zcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBZ0IsRUFBQTs7QUFLcEI7RUFDSSxnQ0FBZ0MsRUFBQTs7QUFHcEM7RUFDSSxZQUFXLEVBQUE7O0FBR2Y7RUFDSSxrQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtFQUNmLG1CQUFtQixFQUFBOztBQVd2QjtFQUNJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUE0QmY7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDQSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLFVBQVU7RUFDVixXQUFXO0VBQ1gsV0FBVztFQUNYLDBDQUEwQztFQUMxQyxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixpSEFBd0csRUFBQTs7QUFHeEc7RUFDSSxvQ0FBb0M7RUFDcEMsNENBQTRDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSGVhZGVyIFN0eWxlc1xuaW9uLXRpdGxle1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG4gIFxuLy9NZXNzYWdpbmcgU3R5bGVzXG5cbi5jaGF0LWl0ZW17XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFMkUyRTI7XG59XG5cbi51bnJlYWR7XG4gICAgYm9yZGVyOm5vbmU7XG59XG5cbi5yaWdodHtcbiAgICBtYXJnaW4tbGVmdDotMTBweDtcbn1cblxuLmdyb3VwLW5hbWV7XG4gICAgY29sb3I6ICM0QjRBNUU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZ3JvdXAtbWVzc2FnZXtcbiAgICBjb2xvcjogIzRCNEE1RTtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ubWVzc2FnZS10aW1lLWNvbnRhaW5lcntcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLm1lc3NhZ2UtdGltZXtcbiAgICBjb2xvcjogIzAwNURERDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5tZXNzYWdlLWJhZGdlLWNvbnRhaW5lcntcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ubWVzc2FnZS1iYWRnZXtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1pbi13aWR0aDogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjQ0UwMDAwO1xufVxuXG4vLyAuaW1hZ2UtY29udGFpbmVye1xuLy8gICAgIG1heC13aWR0aDogNjBweCAhaW1wb3J0YW50O1xuLy8gfVxuXG4vLyAuZ3JvdXAtaWNvbi1jb250YWluZXJ7XG4vLyAgICAgbWFyZ2luOjFweDtcbi8vIH1cblxuLmdyb3VwLWljb257XG4gICAgbWFyZ2luOiAxcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGhlaWdodDogMzVweDtcbiAgICB3aWR0aDogMzVweDtcbn1cblxuLy9Ta2VsZXRvblxuXG4vLyAuc2tlbGV0b24tbGlzdHtcbi8vICAgICBtYXJnaW46IDAgYXV0bztcbi8vICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuLy8gfVxuXG4vLyAuc2tlbGV0b24tYXZhdGFye1xuLy8gICAgIGhlaWdodDogMzBweDtcbi8vICAgICB3aWR0aDogMzBweDtcbi8vIH1cblxuLy8gLmZlZWQtc2tlbGV0b24taW1ne1xuLy8gICAgIHBhZGRpbmc6MHB4IDE2cHggMHB4IDE2cHg7XG4vLyAgICAgbWFyZ2luOiAwIDE1cHg7IFxuLy8gICAgIGhlaWdodDoyMDBweDsgXG4vLyAgICAgYm9yZGVyLXJhZGl1czoxMHB4O1xuLy8gfVxuXG4vLyAuZmVlZC1za2VsZXRvbi10ZXh0e1xuLy8gICAgIHBhZGRpbmc6MTBweCAxNnB4IDBweCAxNnB4OyBcbi8vICAgICBtYXJnaW46IDAgMTVweDsgXG4vLyAgICAgaGVpZ2h0OjI1cHhcbi8vIH1cblxuaW9uLWZhYi1idXR0b25bdGl0bGVdIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlvbi1mYWItYnV0dG9uW3RpdGxlXTo6YWZ0ZXIge1xucG9zaXRpb246IGFic29sdXRlO1xuY29udGVudDogYXR0cih0aXRsZSk7XG56LWluZGV4OiAxO1xucmlnaHQ6IDU1cHg7XG5ib3R0b206IDRweDtcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbnBhZGRpbmc6IDlweDtcbmJvcmRlci1yYWRpdXM6IDE1cHg7XG5jb2xvcjogd2hpdGU7XG5ib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLDAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsMCwwLDAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLDAsMCwwLjEyKTtcbn1cblxuaW9uLWxpc3QtaGVhZGVyIGlvbi1sYWJlbCB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xuICAgIGZvbnQtZmFtaWx5OiAnYXZlbmlyJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xufVxuXG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_group_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/group.service */ "./src/app/shared/group.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_contacts_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/contacts.service */ "./src/app/services/contacts.service.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm5/ngx-socket-io.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");











var Tab1Page = /** @class */ (function () {
    function Tab1Page(groupService, router, storage, ref, loader, storageService, contactsService, socket, translate, alertController, toastCtrl) {
        this.groupService = groupService;
        this.router = router;
        this.storage = storage;
        this.ref = ref;
        this.loader = loader;
        this.storageService = storageService;
        this.contactsService = contactsService;
        this.socket = socket;
        this.translate = translate;
        this.alertController = alertController;
        this.toastCtrl = toastCtrl;
        this.userArray = [];
        this.idval = '';
        this.groupCount = [];
        this.loadingGroups = true;
        this.data = [];
        this.segment = 'personal';
    }
    Tab1Page.prototype.ngOnInit = function () {
        var _this = this;
        this.loadGroups();
        this.routerWatch();
        this.storageService.fetchSubscriberStatus()
            .then(function (fetched) {
            var subValue = _this.storageService.getSubscriberStatus();
            console.log('SUBSCRIBER', subValue);
            if (typeof subValue != 'undefined') {
                _this.subscribers = subValue;
            }
            else {
                _this.subscribers = _this.storageService.setSubscriberStatus(false);
            }
        });
        this.socket.connect();
        this.storage.get('id').then(function (userId) {
            _this.userId = userId;
            _this.socket.fromEvent('notify-' + userId).subscribe(function (message) {
                console.log(message);
                _this.loadGroups();
            });
        });
    };
    Tab1Page.prototype.segmentChanged = function ($event) {
        console.log($event);
        this.segment = $event.detail.value;
    };
    Tab1Page.prototype.onClickDetails = function (id, subscriber) {
        subscriber ? this.router.navigate(['group-chat-admin', id]) : this.router.navigate(['group-chat', id]);
    };
    Tab1Page.prototype.sharedvalue = function () {
    };
    Tab1Page.prototype.routerWatch = function () {
        var _this = this;
        this.routerSubscription = this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                if (event.url == '/home/tabs/tab1') {
                    _this.loadGroups();
                    _this.ref.detectChanges();
                }
            }
        });
    };
    Tab1Page.prototype.createGroup = function (type) {
        this.storageService.setGroupType(type);
        this.router.navigate(['create-group']);
    };
    Tab1Page.prototype.createPersonal = function () {
        this.router.navigateByUrl('/contact-list');
    };
    Tab1Page.prototype.loadGroups = function () {
        var _this = this;
        console.log('loading groups');
        // this.loadingGroups = true;
        this.storage.get('id').then(function (val) {
            _this.idval = val;
            _this.groupService.getGroupList(val).subscribe(function (res) {
                console.log('Response', res);
                var result = res;
                _this.data = res;
                console.log(result.groups);
                _this.groupService.groups = result.groups;
                _this.groupCount = result.groupsCount;
                var subscribers = [];
                if (result.groups && result.groups.length) {
                    _this.groupService.groups.forEach(function (group) {
                        if (group.members.length == 2) {
                            group.name = _this.contactsService.getContactNameByMobile(group.mobile, group.mobile);
                            console.log('CHANGED NAME', group);
                        }
                    });
                }
                if (_this.loadingGroups == true) {
                    _this.loadingGroups = false;
                }
                _this.subscribers = _this.storageService.getSubscriberStatus();
                if (_this.subscribers == false) {
                    _this.segment = 'personal';
                }
                console.log('SUBSCRIBERS', _this.subscribers);
            }, function (err) {
                {
                    console.log('SOME ERROR OCCURED', err);
                }
            });
        });
        this.storage.get('name').then(function (val) {
            _this.name = val;
        });
    };
    Tab1Page.prototype.ionViewDidLeave = function () {
        document.getElementById('fab-btn').classList.remove('fab-button-close-active');
        document.getElementById('fab-list').classList.remove('fab-list-active');
        document.getElementById('fab-btn1').classList.remove('fab-button-show');
        document.getElementById('fab-btn2').classList.remove('fab-button-show');
        document.getElementById('fab-btn3').classList.remove('fab-button-show');
    };
    Tab1Page.prototype.ionPageWillLeave = function () {
        this.routerSubscription.unsubscribe();
    };
    Tab1Page.prototype.doRefresh = function (event) {
        console.log('Begin async operation');
        this.loadGroups();
        event.target.complete();
    };
    Tab1Page.prototype.getCount = function (id) {
        var group = this.groupCount.filter(function (m) { return m._id == id; });
        // console.log('NEEDLE', group);
        if (group.length != 0) {
            return group[0].count.length;
        }
        else {
            return 0;
        }
    };
    Tab1Page.prototype.getLastChat = function (chats, type) {
        if (chats.length != 0) {
            var chat = chats[chats.length - 1];
            return typeof chat.file != 'undefined' ? chat.attachment : chat.message;
        }
        else {
            return 'New ' + type + ' Created';
        }
    };
    Tab1Page.prototype.getLastTime = function (chats) {
        if (chats.length != 0) {
            var chat = chats[chats.length - 1];
            return typeof chat.chattime;
        }
        else {
            return '';
        }
    };
    Tab1Page.prototype.deleteAlert = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var value, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        value = this.translate.instant(['Block_Chat', 'Confirm_Block', 'cancel', 'Block'], { value: 'en' });
                        return [4 /*yield*/, this.alertController.create({
                                header: value.Block_Chat,
                                message: value.Confirm_Block,
                                buttons: [
                                    {
                                        text: value.cancel,
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function () {
                                            console.log('Confirm Cancel: blah');
                                            // this.longpressclass[itt] = "message-bubble-received-flex";
                                        }
                                    }, {
                                        text: value.Block,
                                        role: 'okay',
                                        handler: function () {
                                            console.log('Confirm Okay');
                                            _this.deleteChat(id)
                                                .then(function (res) {
                                                _this.presentToast("The chatroom has been blocked");
                                                _this.loadGroups();
                                            })
                                                .catch(function (err) { console.log(err); });
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab1Page.prototype.deleteChat = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var body = {
                user_id: _this.userId
            };
            _this.groupService.deleteChatRoom(id, body).subscribe(function (deleted) { resolve(true); }, function (err) { reject(err); });
        });
    };
    Tab1Page.prototype.removeAlert = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var value, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        value = this.translate.instant(['Block_Chat', 'Confirm_Block', 'cancel', 'Block'], { value: 'en' });
                        return [4 /*yield*/, this.alertController.create({
                                header: value.Block_Chat,
                                message: value.Confirm_Block,
                                buttons: [
                                    {
                                        text: value.cancel,
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function () {
                                            console.log('Confirm Cancel: blah');
                                            // this.longpressclass[itt] = "message-bubble-received-flex";
                                        }
                                    }, {
                                        text: value.Block,
                                        role: 'okay',
                                        handler: function () {
                                            console.log('Confirm Okay');
                                            _this.removeFromChat(id)
                                                .then(function (res) {
                                                _this.presentToast("The chatroom has been blocked");
                                                _this.loadGroups();
                                            })
                                                .catch(function (err) { console.log(err); });
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab1Page.prototype.removeFromChat = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.groupService.removeMember({ member: _this.idval }, id).subscribe(function (deleted) { resolve(true); }, function (err) { reject(err); });
        });
    };
    Tab1Page.prototype.presentToast = function (text) {
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
    Tab1Page.ctorParameters = function () { return [
        { type: _shared_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
        { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
        { type: _services_contacts_service__WEBPACK_IMPORTED_MODULE_7__["ContactsService"] },
        { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_8__["Socket"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ToastController"] }
    ]; };
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html"),
            providers: [_shared_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"]],
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"], _services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"], _services_contacts_service__WEBPACK_IMPORTED_MODULE_7__["ContactsService"],
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_8__["Socket"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ToastController"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es5.js.map