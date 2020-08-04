(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab2/tab2.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      {{'Feeds'|translate}}\n    </ion-title>\n    <ion-buttons slot=\"end\" size-xs=\"small\">\n      <!-- <ion-button routerLink=\"/receive-incoming-call\" class=\"no-padding\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button> -->\n      <!-- <ion-button>  -->\n        <ion-button routerLink=\"/create-feed\">\n          <ion-icon slot=\"icon-only\" name=\"create\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content fullscreen>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingIcon=\"arrow-dropdown\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\" pullMin=\"100\" pullMax=\"200\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n\n  <!-- Skeleton -->\n  <div *ngIf=\"loadingFeeds\">\n    <ion-list class=\"skeleton-list\" lines=\"none\">\n      <div>\n        <ion-item>\n          <ion-avatar class=\"skeleton-avatar\" slot=\"start\">\n            <ion-skeleton-text animated></ion-skeleton-text>\n          </ion-avatar>\n          <ion-label>\n            <h3>\n              <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n            </h3>\n          </ion-label>\n        </ion-item>\n\n        <p class=\"feed-skeleton-img\"><ion-skeleton-text animated></ion-skeleton-text></p>\n        <p class=\"feed-skeleton-text\"><ion-skeleton-text animated></ion-skeleton-text></p>\n      </div>\n\n      <div>\n          <ion-item>\n            <ion-avatar class=\"skeleton-avatar\" slot=\"start\">\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </ion-avatar>\n            <ion-label>\n              <h3>\n                <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n              </h3>\n            </ion-label>\n          </ion-item>\n  \n          <p class=\"feed-skeleton-img\"><ion-skeleton-text animated></ion-skeleton-text></p>\n          <p class=\"feed-skeleton-text\"><ion-skeleton-text animated></ion-skeleton-text></p>\n      </div>\n\n      <div>\n          <ion-item>\n            <ion-avatar class=\"skeleton-avatar\" slot=\"start\">\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </ion-avatar>\n            <ion-label>\n              <h3>\n                <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n              </h3>\n            </ion-label>\n          </ion-item>\n  \n          <p class=\"feed-skeleton-img\"><ion-skeleton-text animated></ion-skeleton-text></p>\n          <p class=\"feed-skeleton-text\"><ion-skeleton-text animated></ion-skeleton-text></p>\n      </div>\n\n    </ion-list>\n  </div>\n  <!-- Skeleton End -->\n\n  <p class=\"ion-text-center\" *ngIf=\"!feeds.length && loadingFeeds == false\">{{'No Feeds Yet' | translate}}</p>\n\n  <!-- Single feed card -->\n  <form [formGroup]=\"commentsArray\">\n    <ion-card class=\"feed-card\" *ngFor=\"let feed of feeds; let itt = index\">\n        <ion-card-header class=\"feed-header\">\n            <img class=\"business-logo\" [src]=\"'http://198.12.92.202/public/uploads/'+ feed.group_avatar\" onError=\"this.src='assets/images/user.png';\">\n            <p class=\"business-name ion-align-items-end\">{{ feed.group_name }}</p>\n            <p class=\"open-options\" (click)=\"presentPopover(itt,feed.admin_id, $event)\">...</p>\n        </ion-card-header>\n      \n        <ion-card-content>\n            <img class=\"feed-image card-photo\" *ngIf=\"feed.file == true && feed.fileType == 'image' || feed.file == true && !feed.fileType\" [src]=\"'http://198.12.92.202/public/uploads/'+ feed.attachment\" (click)='viewImage(\"http://198.12.92.202/public/uploads/\"+ feed.attachment)'>\n            <div *ngIf=\"feed.file == true && feed.fileType == 'video'\" class=\"mh\">\n              <video class=\"feed-video card-photo\" *ngIf=\"feed.file == true && feed.fileType == 'video'\" (click)=\"viewVideo('http://198.12.92.202/public/uploads/'+ feed.attachment)\" preload=\"auto\" [muted]=\"true\">\n              <source  [src]=\"'http://198.12.92.202/public/uploads/'+ feed.attachment\">\n              </video>\n              <div *ngIf=\"feed.file == true && feed.fileType == 'video'\" class=\"playpause\" (click)=\"viewVideo('http://198.12.92.202/public/uploads/'+ feed.attachment)\">\n              </div>\n            </div>\n            <div *ngIf=\"feed.file == true && feed.fileType == 'doc'\">\n              <div class=\"\" style=\" display: flex; justify-content: center;\">\n                <ion-col size='2'>\n                  <div>\n                    <ion-icon name='attach'></ion-icon>\n                  </div>\n                </ion-col>\n                <ion-col size='8'>\n                    <div>\n                      {{ feed.attachment }}\n                   </div>\n                </ion-col>\n                <ion-col size='2'>\n                    <div>\n                        <ion-icon class=\"file-attach {{ fileArray[feed._id] ? 'hidden' : '' }}\" name='md-download' ios=\"ios-download\" id=\"download-{{ itt }}\" md=\"md-download\" (click)=\"downloadAttachment(feed.attachment, itt)\"></ion-icon>\n                        <ion-icon class=\"file-attach {{ fileArray[feed._id] ?  '' : 'hidden' }}\" name='md-open' ios=\"ios-open\" id=\"play-{{ itt }}\" md=\"md-open\" (click)=\"openFile(feed.attachment, itt)\"></ion-icon>\n                        <ion-spinner name=\"lines\" color=\"primary\" class=\"hidden\" id=\"spinner-{{ itt }}\"></ion-spinner>\n                    </div>\n                </ion-col>\n              </div>\n            </div>\n            \n            <p class=\"post-text\" (click)=\"requstEdit(itt)\" *ngIf=\"!feed.editable_caption\">\n              {{ feed.text }}\n            </p>\n            <!-- <ion-item *ngIf=\"feed.editable_caption\">\n              <ion-input type=\"text\" placeholder=\"{{ feed.text }}\" formControlName=\"{{ itt }}-cap\"></ion-input>\n              <ion-buttons slots='end'>\n                <ion-button (click)=\"edit(itt)\">\n                  <ion-icon slot=\"icon-only\" name=\"md-send\" color=\"blue\"></ion-icon>\n                </ion-button>\n                </ion-buttons>\n              </ion-item> -->\n            <div class=\"card-options\">\n              <ion-button fill=\"clear\" (click)=\"like(itt)\">\n                  <ion-icon *ngIf=\"feed.liked == false\" slot=\"icon-only\" name=\"md-star-outline\" color=\"blue\"></ion-icon>\n                  <ion-icon *ngIf=\"feed.liked == true\" slot=\"icon-only\" name=\"md-star\" color=\"blue\"></ion-icon>\n              </ion-button>\n              <ion-button fill=\"clear\">\n                  <ion-icon slot=\"icon-only\" name=\"md-chatboxes\" color=\"blue\"></ion-icon>\n              </ion-button>\n              <span id=\"{{ itt }}\" *ngIf=\"feed.comments.length > 1\" (click)=\"viewAllComments($event)\">{{ 'View' | translate }} {{ feed.comments.length }} {{ 'comments' | translate }}</span>\n            </div>\n            <div class=\"top-comment\" *ngIf=\"feed.comments.length\">\n              <div class=\"comment-avatar-container\">\n                  <img class=\"business-logo\" src=\"assets/images/user.png\">\n              </div>\n              <div class=\"comment-text\">\n                  <p>{{ feed.comments[0].text }}</p>\n                  <p class=\"time-stamp\">{{ feed.comments[0].created_on | date: 'H:mm' }}</p>\n              </div>\n            </div>\n\n            <div class=\"all-comments hide\" id=\"{{ itt }}-comments\">\n\n              <div *ngFor=\"let comment of feed.comments; let itt = index\">\n                <div class=\"comment\" *ngIf=\"itt > 0\">\n                  <div class=\"comment-avatar-container\">\n                      <img class=\"business-logo\" src=\"assets/images/user.png\">\n                  </div>\n                  <div class=\"comment-text\">\n                      <p>{{ comment.text }}</p>\n                      <p class=\"time-stamp\">{{ comment.created_on | date: 'H:mm' }}</p>\n                  </div>\n                </div>\n              </div>\n\n            </div>\n\n            <div class=\"comment-box\">\n              <div class=\"comment-avatar-container\">\n                  <img class=\"business-logo\" src=\"assets/images/user.png\">\n              </div>\n              <div class=\"comment-input\" >\n                <ion-input type=\"text\" placeholder=\"{{ 'Add Comment' | translate }}\" [formControlName]=\"itt\">\n              </ion-input>\n              </div>\n            </div>\n            <div class=\"buttons-container\">\n              <ion-button fill=\"clear\" (click)=\"comment(itt)\">\n                  <ion-icon slot=\"icon-only\" name=\"md-send\" color=\"medium\"></ion-icon>\n              </ion-button>\n            </div>\n        </ion-card-content>\n\n      </ion-card>\n    </form>\n    <!-- Single card end -->\n\n    <!-- Single feed card -->\n      <!-- <ion-card class=\"feed-card\">\n          <ion-card-header class=\"feed-header\">\n                <img class=\"business-logo\" src=\"assets/images/user.png\">\n                <p class=\"business-name ion-align-items-end\">Business Name 2</p>\n                <p class=\"open-options\">...</p>\n          </ion-card-header>\n        \n          <ion-card-content>\n              <img src=\"assets/images/card-photo.png\" class=\"card-photo\">\n              <div class=\"card-options\">\n                <ion-button fill=\"clear\">\n                    <ion-icon slot=\"icon-only\" name=\"md-star\" color=\"medium\"></ion-icon>\n                </ion-button>\n                <ion-button fill=\"clear\">\n                    <ion-icon slot=\"icon-only\" name=\"md-chatboxes\" color=\"medium\"></ion-icon>\n                </ion-button>\n                <ion-button fill=\"clear\">\n                    <ion-icon slot=\"icon-only\" name=\"md-share\" color=\"medium\"></ion-icon>\n                </ion-button>\n              </div>\n              <p class=\"post-text\">\n                The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. \n                Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived\n              </p>\n          </ion-card-content>\n  \n      </ion-card> -->\n      <!-- Single card end -->\n      \n\n</ion-content>\n  "

/***/ }),

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _feed_popover_feed_popover_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../feed-popover/feed-popover.page */ "./src/app/feed-popover/feed-popover.page.ts");









let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
        ],
        declarations: [
            _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"],
            _feed_popover_feed_popover_page__WEBPACK_IMPORTED_MODULE_8__["FeedPopoverPage"]
        ],
        entryComponents: [
            _feed_popover_feed_popover_page__WEBPACK_IMPORTED_MODULE_8__["FeedPopoverPage"]
        ],
    })
], Tab2PageModule);



/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  text-align: left; }\n\n.feed-card {\n  margin: 0 auto;\n  max-width: 600px;\n  padding: 0;\n  box-shadow: none !important; }\n\n.logo-container {\n  max-width: 40px !important; }\n\n.feed-header img {\n  border-radius: 50%;\n  height: 30px;\n  width: 30px;\n  display: inline; }\n\n.feed-image {\n  display: block;\n  max-height: 300px;\n  width: auto;\n  margin: auto; }\n\n.feed-video {\n  display: block;\n  width: 100% !important;\n  max-height: auto;\n  margin: auto; }\n\n.feed-card .business-name {\n  margin: 0px 10px 0 10px;\n  font-size: 14px;\n  color: #262626;\n  font-weight: 600;\n  display: inline;\n  position: relative;\n  bottom: 10px; }\n\n.feed-card .open-options {\n  margin: 0;\n  display: inline;\n  font-size: 25px;\n  color: #262626;\n  font-weight: bold;\n  float: right;\n  text-align: right;\n  position: relative;\n  bottom: 10px;\n  right: 10px; }\n\nion-card-header {\n  padding-bottom: 10px; }\n\nion-card-content {\n  padding-top: 0; }\n\n.business-name {\n  margin: 0; }\n\n.card-photo {\n  border-radius: 10px; }\n\n.post-text {\n  padding: 0px;\n  font-size: 13px;\n  color: #1A1A1A;\n  margin-top: 10px; }\n\n.card-options ion-button {\n  --padding-start: 5px;\n  --padding-end: 5px; }\n\n.card-options {\n  overflow: hidden;\n  position: relative;\n  right: 10px; }\n\n.card-options span {\n  float: right;\n  color: #005DDD;\n  padding-top: 10px; }\n\n.top-comment, .comment {\n  display: -webkit-box;\n  display: flex;\n  margin-top: 5px; }\n\n.avatar-container {\n  min-width: 30px;\n  margin-top: 5px; }\n\n.avatar-container img {\n  height: 30px;\n  width: 30px;\n  border-radius: 50%; }\n\n.comment-avatar-container {\n  min-width: 30px; }\n\n.comment-avatar-container img {\n  height: 30px;\n  width: 30px;\n  border-radius: 50%; }\n\n.comment-text {\n  margin-left: 10px; }\n\n.comment-box {\n  display: -webkit-box;\n  display: flex;\n  margin-top: 10px; }\n\n.comment-input {\n  height: 30px;\n  width: 100%;\n  border: 2px solid #E2E2E2;\n  margin: 0 10px 0 5px;\n  --border-width: 0 0 0 0;\n  border-radius: 8px;\n  padding-right: 30px; }\n\n.comment-input ion-input {\n  --padding-top:3px; }\n\n.buttons-container {\n  overflow: hidden;\n  position: relative;\n  bottom: 37px; }\n\n.buttons-container ion-button {\n  float: right;\n  position: relative;\n  z-index: 3; }\n\n.buttons-container ion-button ion-icon {\n  font-size: 20px; }\n\n.hide {\n  display: none !important; }\n\n.skeleton-list {\n  margin: 0 auto;\n  max-width: 600px; }\n\n.skeleton-avatar {\n  height: 30px;\n  width: 30px; }\n\n.feed-skeleton-img {\n  padding: 0px 16px 0px 16px;\n  margin: 0 15px;\n  height: 200px;\n  border-radius: 10px; }\n\n.feed-skeleton-text {\n  padding: 10px 16px 0px 16px;\n  margin: 0 15px;\n  height: 25px; }\n\n.radio-inner {\n  display: none !important; }\n\n.g {\n  position: absolute;\n  top: 25%;\n  left: 40%; }\n\n.imgsize {\n  width: 40% !important; }\n\n.mh {\n  display: block;\n  width: auto;\n  position: relative;\n  width: 100%; }\n\n.playpause {\n  background-image: url('play.png');\n  background-repeat: no-repeat;\n  width: 70px;\n  height: autp;\n  position: absolute;\n  left: 0%;\n  right: 0%;\n  top: 0%;\n  bottom: 0%;\n  margin: auto;\n  background-size: contain;\n  background-position: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYmJveF9mcm9udGVuZC9zcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDSSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDViwyQkFBMkIsRUFBQTs7QUFHL0I7RUFDSSwwQkFBMEIsRUFBQTs7QUFHOUI7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksY0FBYztFQUNkLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTs7QUFJaEI7RUFDSSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBYWhCO0VBQ0ksU0FBUztFQUNULGVBQWU7RUFDZixlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUlmO0VBQ0ksb0JBQW9CLEVBQUE7O0FBR3hCO0VBQ0ksY0FBYSxFQUFBOztBQUdqQjtFQUNJLFNBQVMsRUFBQTs7QUFHYjtFQUNJLG1CQUFtQixFQUFBOztBQUl2QjtFQUNJLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUNKLEVBQUE7O0FBRUE7RUFDSSxvQkFBZ0I7RUFDaEIsa0JBQWMsRUFBQTs7QUFHbEI7RUFDSSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFlBQVk7RUFDWixjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7O0FBSXJCO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IsZUFBZSxFQUFBOztBQUduQjtFQUNJLGVBQWU7RUFDZixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYixnQkFBZSxFQUFBOztBQUduQjtFQUNJLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQix1QkFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxpQkFBYyxFQUFBOztBQUdsQjtFQUNJLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQUdoQjtFQUNJLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVSxFQUFBOztBQUdkO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLHdCQUF3QixFQUFBOztBQUs1QjtFQUNJLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUdmO0VBQ0ksMEJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxhQUFZO0VBQ1osbUJBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksMkJBQTBCO0VBQzFCLGNBQWM7RUFDZCxZQUNKLEVBQUE7O0FBRUE7RUFDSSx3QkFBd0IsRUFBQTs7QUFHNUI7RUFDSSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVMsRUFBQTs7QUFHYjtFQUNJLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLGNBQWE7RUFDYixXQUFVO0VBQ1Ysa0JBQWlCO0VBQ2pCLFdBQVUsRUFBQTs7QUFHZDtFQUNJLGlDQUFvRDtFQUNwRCw0QkFBMkI7RUFDM0IsV0FBVTtFQUNWLFlBQVc7RUFDWCxrQkFBaUI7RUFDakIsUUFBTztFQUNQLFNBQVE7RUFDUixPQUFNO0VBQ04sVUFBUztFQUNULFlBQVc7RUFDWCx3QkFBdUI7RUFDdkIsMkJBQTJCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSGVhZGVyIFN0eWxlc1xuaW9uLXRpdGxle1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi8vQ2FyZCBTdHlsZXNcbi5mZWVkLWNhcmR7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmxvZ28tY29udGFpbmVye1xuICAgIG1heC13aWR0aDogNDBweCAhaW1wb3J0YW50O1xufVxuXG4uZmVlZC1oZWFkZXIgaW1ne1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgZGlzcGxheTogaW5saW5lO1xufVxuXG4uZmVlZC1pbWFnZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uZmVlZC12aWRlbyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBcbn1cblxuLmZlZWQtY2FyZCAuYnVzaW5lc3MtbmFtZXtcbiAgICBtYXJnaW46IDBweCAxMHB4IDAgMTBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICMyNjI2MjY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogMTBweDtcbn1cblxuLy8gLmZlZWQtY2FyZCAub3Blbi1vcHRpb25ze1xuLy8gICAgIG1hcmdpbjogMDsgIFxuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICBsZWZ0OjIwcHg7XG4vLyAgICAgZm9udC1zaXplOiAyNXB4O1xuLy8gICAgIGNvbG9yOiAjMjYyNjI2O1xuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgIHRleHQtYWxpZ246IHJpZ2h0XG4vLyB9XG5cbi5mZWVkLWNhcmQgLm9wZW4tb3B0aW9uc3tcbiAgICBtYXJnaW46IDA7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBjb2xvcjogIzI2MjYyNjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogMTBweDtcbiAgICByaWdodDogMTBweDtcblxufVxuXG5pb24tY2FyZC1oZWFkZXJ7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnR7XG4gICAgcGFkZGluZy10b3A6MDtcbn1cblxuLmJ1c2luZXNzLW5hbWV7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uY2FyZC1waG90b3tcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC8vIHdpZHRoOiAxMDAlO1xufVxuXG4ucG9zdC10ZXh0e1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICMxQTFBMUE7XG4gICAgbWFyZ2luLXRvcDogMTBweFxufVxuXG4uY2FyZC1vcHRpb25zIGlvbi1idXR0b257XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XG4gICAgLS1wYWRkaW5nLWVuZDogNXB4O1xufVxuXG4uY2FyZC1vcHRpb25ze1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiAxMHB4O1xufVxuXG4uY2FyZC1vcHRpb25zIHNwYW57XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGNvbG9yOiAjMDA1REREO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4vL0NvbW1lbnQgU3R5bGVzXG4udG9wLWNvbW1lbnQsIC5jb21tZW50e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uYXZhdGFyLWNvbnRhaW5lcntcbiAgICBtaW4td2lkdGg6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uYXZhdGFyLWNvbnRhaW5lciBpbWd7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmNvbW1lbnQtYXZhdGFyLWNvbnRhaW5lciB7XG4gICAgbWluLXdpZHRoOiAzMHB4O1xufVxuXG4uY29tbWVudC1hdmF0YXItY29udGFpbmVyIGltZyB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmNvbW1lbnQtdGV4dHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmNvbW1lbnQtYm94e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXRvcDoxMHB4O1xufVxuXG4uY29tbWVudC1pbnB1dHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0UyRTJFMjtcbiAgICBtYXJnaW46IDAgMTBweCAwIDVweDtcbiAgICAtLWJvcmRlci13aWR0aDogMCAwIDAgMDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbn1cblxuLmNvbW1lbnQtaW5wdXQgaW9uLWlucHV0e1xuICAgIC0tcGFkZGluZy10b3A6M3B4O1xufVxuXG4uYnV0dG9ucy1jb250YWluZXJ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm90dG9tOiAzN3B4O1xufVxuXG4uYnV0dG9ucy1jb250YWluZXIgaW9uLWJ1dHRvbntcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDM7XG59XG5cbi5idXR0b25zLWNvbnRhaW5lciBpb24tYnV0dG9uIGlvbi1pY29ue1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmhpZGV7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4vL1NrZWxldG9uIFN0eWxlc1xuXG4uc2tlbGV0b24tbGlzdHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xufVxuXG4uc2tlbGV0b24tYXZhdGFye1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbn1cblxuLmZlZWQtc2tlbGV0b24taW1ne1xuICAgIHBhZGRpbmc6MHB4IDE2cHggMHB4IDE2cHg7XG4gICAgbWFyZ2luOiAwIDE1cHg7IFxuICAgIGhlaWdodDoyMDBweDsgXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xufVxuXG4uZmVlZC1za2VsZXRvbi10ZXh0e1xuICAgIHBhZGRpbmc6MTBweCAxNnB4IDBweCAxNnB4OyBcbiAgICBtYXJnaW46IDAgMTVweDsgXG4gICAgaGVpZ2h0OjI1cHhcbn1cblxuLnJhZGlvLWlubmVye1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmd7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjUlO1xuICAgIGxlZnQ6IDQwJTtcbn1cblxuLmltZ3NpemV7XG4gICAgd2lkdGg6IDQwJSAhaW1wb3J0YW50O1xufVxuXG4ubWh7XG4gICAgZGlzcGxheTpibG9jaztcbiAgICB3aWR0aDphdXRvO1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIHdpZHRoOjEwMCU7XG59XG5cbi5wbGF5cGF1c2Uge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL3BsYXkucG5nJyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xuICAgIHdpZHRoOjcwcHg7XG4gICAgaGVpZ2h0OmF1dHA7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgbGVmdDowJTtcbiAgICByaWdodDowJTtcbiAgICB0b3A6MCU7XG4gICAgYm90dG9tOjAlO1xuICAgIG1hcmdpbjphdXRvO1xuICAgIGJhY2tncm91bmQtc2l6ZTpjb250YWluO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _shared_group_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/group.service */ "./src/app/shared/group.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _feed_popover_feed_popover_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../feed-popover/feed-popover.page */ "./src/app/feed-popover/feed-popover.page.ts");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/helper.service */ "./src/app/services/helper.service.ts");












let Tab2Page = class Tab2Page {
    constructor(storage, groupService, router, ref, formBuilder, popoverController, alertController, loader, toastController, translate, events, helper) {
        this.storage = storage;
        this.groupService = groupService;
        this.router = router;
        this.ref = ref;
        this.formBuilder = formBuilder;
        this.popoverController = popoverController;
        this.alertController = alertController;
        this.loader = loader;
        this.toastController = toastController;
        this.translate = translate;
        this.events = events;
        this.helper = helper;
        this.lang = 'EN';
        this.feeds = [];
        this.permission = true;
        this.fileSourceArray = [];
        this.fileArray = [];
    }
    ngOnInit() {
        console.log('tabs3 opened');
        this.storage.get('id').then((val) => {
            console.log('ID: ', val);
            this.id = val;
            this.loadFeeds();
        });
        this.storage.get('profile_pic')
            .then(image => {
            image ? this.profile_pic = image : false;
        });
        this.commentsArray = this.formBuilder.group({});
        // this.captionArray = this.formBuilder.group({
        // });
        this.events.subscribe('feed:posted', (data) => {
            // user and time are the same arguments passed in `events.publish(user, time)`
            console.log('Feed POSTED', data);
            this.loadFeeds();
        });
        // this.loadFeeds();
    }
    ionViewWillEnter() {
        this.loadFeeds();
    }
    presentPopover(itt, admin_id, ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(itt);
            const popover = yield this.popoverController.create({
                component: _feed_popover_feed_popover_page__WEBPACK_IMPORTED_MODULE_7__["FeedPopoverPage"],
                event: ev,
                translucent: true,
                showBackdrop: false,
                componentProps: {
                    "permission": this.permission,
                    "admin_id": admin_id // feed_admin_id
                }
                // mode: 'ios'
            });
            popover.onDidDismiss().then((res) => {
                console.log(res);
                if (res.data == "edit") {
                    let navigationExtras = {
                        queryParams: {
                            "feeddata": JSON.stringify({
                                data: this.feeds[itt]
                            })
                        }
                    };
                    console.log(navigationExtras);
                    this.router.navigate(["create-feed"], navigationExtras);
                }
                if (res.data == "delete") {
                    this.deleteFeedAlert(itt);
                    console.log(this.feeds[itt]);
                }
                if (res.data == "report") {
                    this.reportToast();
                }
            });
            return yield popover.present();
        });
    }
    checkSources(feeds) {
        console.log(feeds);
        if (feeds.length) {
            const files = feeds.filter(chat => chat.file == true);
            files.forEach((file, index) => {
                this.helper.checkFileExists(file.attachment)
                    .then(exists => {
                    this.fileArray[file._id] = exists;
                    this.getSource(exists, file.attachment)
                        .then(source => {
                        console.log('SOURCE', source);
                        this.fileSourceArray[file._id] = source;
                        if (index == (files.length - 1)) {
                            console.log('FILE ARRAY', this.fileArray);
                            console.log('FILE ARRAY FILE', this.fileSourceArray);
                            this.ref.detectChanges();
                        }
                    });
                });
            });
        }
    }
    getSource(local, attachment) {
        return new Promise((resolve, reject) => {
            console.log('GET SOURCE');
            if (local) {
                this.helper.getStoredFile(attachment)
                    .then(file => { resolve(file); console.log('RES', file); })
                    .catch(err => { console.log('ERORR', err); reject(err); });
            }
            else {
                resolve('http://198.12.92.202/public/uploads/' + attachment);
            }
        });
    }
    openFile(file, id) {
        this.helper.openFile(file)
            .then(done => { console.log(done); })
            .catch(err => { console.log(err); });
    }
    downloadAttachment(file, i) {
        document.getElementById('download-' + i).classList.toggle('hidden');
        document.getElementById('spinner-' + i).classList.toggle('hidden');
        this.helper.downloadFile(file)
            .then(downloaded => {
            console.log('FILE DOWNLOADED SUCCESFULLY');
            document.getElementById('spinner-' + i).classList.toggle('hidden');
            document.getElementById('play-' + i).classList.toggle('hidden');
        });
        // setTimeout(() => {
        //   document.getElementById('spinner-' + i).classList.toggle('hidden');
        //   document.getElementById('play-' + i).classList.toggle('hidden');
        // }, 3000)
    }
    reportToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // let value = this.translate.instant(['This_feed_has_been_reported'], { value: this.lang })
            this.storage.get('language').then((language) => {
                console.log(language);
                this.translate.get("This_feed_has_been_reported", { value: language })
                    .subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    const toast = yield this.toastController.create({
                        message: res,
                        duration: 3000,
                        position: "bottom",
                    });
                    toast.present();
                    this.ref.detectChanges();
                }));
            });
        });
    }
    deleteFeedAlert(itt) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let value = this.translate.instant(['Delete_Feed', 'Are_you_sure', 'cancel', 'Delete', 'Post_Deleted_Successfully'], { value: this.lang });
            const alert = yield this.alertController.create({
                header: value.Delete_Feed,
                message: value.Are_you_sure,
                buttons: [
                    {
                        text: value.cancel,
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: value.Delete,
                        handler: () => {
                            console.log('Confirm Okay');
                            // api call here
                            console.log(this.feeds[itt]._id);
                            let body = {
                                "feed_id": this.feeds[itt]._id
                            };
                            console.log(body);
                            this.groupService.deleteFeed(body).subscribe((res) => {
                                if (res.error == false) {
                                    console.log(res);
                                    this.feeds.splice(itt, 1);
                                    console.log('Confirm DELETION');
                                    this.loadFeeds();
                                    this.toastController.create({
                                        message: value.Post_Deleted_Successfully
                                    });
                                    console.log(this.feeds);
                                }
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    reportFeed() {
        console.log('reported');
    }
    report() {
        console.log('reported');
    }
    chat() {
        this.router.navigateByUrl('/create-personal-chat');
    }
    loadFeeds() {
        console.log('FEEDS STARTED');
        this.loadingFeeds = true;
        this.feeds = [];
        this.groupService.getFeeds(this.id).subscribe((res) => {
            console.log('FEEDS FETCHED');
            console.log('FEEDS', res);
            this.feeds = res;
            console.log(this.feeds);
            if (this.feeds.length) {
                for (var element in this.feeds) {
                    console.log('ELEMENT', element);
                    if (parseInt(this.feeds[element].likes.findIndex(o => o.user_id = this.id)) != -1) {
                        this.feeds[element].liked = true;
                    }
                    else {
                        this.feeds[element].liked = false;
                    }
                    //  A Separate Comments
                    let caption_control_name = element + '-cap';
                    console.log(caption_control_name);
                    // this.captionArray.push(new FormControl(caption_control_name));
                    // this.captionArray.addControl(caption_control_name, new FormControl(''));
                    this.commentsArray.addControl(element, new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''));
                    console.log(this.commentsArray);
                    console.log(this.captionArray);
                    if ((parseInt(element) + 1) == this.feeds.length) {
                        this.loadingFeeds = false;
                    }
                }
                this.checkSources(res);
            }
            else {
                this.loadingFeeds = false;
            }
        }, err => {
            console.log("ERROR", err);
        });
    }
    editFeed() {
        let navigationExtras = {
            queryParams: {
                "data": JSON.stringify({
                    "city": "San Francisco",
                    "state": "California"
                })
            }
        };
        this.router.navigate(["create-feed"], navigationExtras);
    }
    routerWatch() {
        this.routerSubscription = this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                if (event.url == '/home/tabs/tab2') {
                    this.loadFeeds();
                    this.ref.detectChanges();
                }
            }
        });
    }
    doRefresh(event) {
        console.log('Begin async operation');
        event.target.disabled = true;
        this.loadFeeds();
        event.target.complete();
        setTimeout(() => {
            event.target.disabled = false;
        }, 100);
    }
    ionPageWillLeave() {
        this.routerSubscription.unsubscribe();
    }
    viewImage(src) {
        console.log('viewImage', src);
        this.router.navigate(['view-image', src]);
    }
    viewVideo(src) {
        console.log('viewVideo', src);
        this.router.navigate(['view-video', src]);
    }
    viewAllComments(event) {
        var commentsId = event.target.id + '-comments';
        console.log(commentsId);
        document.getElementById(commentsId).classList.toggle('hide');
    }
    like(itt) {
        console.log(itt);
        console.log(this.feeds[itt]);
        this.groupService.postFeedLike({ id: this.feeds[itt]._id, user_id: this.id })
            .subscribe(data => {
            console.log(data);
            if (this.feeds[itt].liked == true) {
                this.feeds[itt].liked = false;
            }
            else {
                this.feeds[itt].liked = true;
            }
        });
    }
    comment(itt) {
        console.log(itt);
        console.log(this.commentsArray);
        console.log(this.commentsArray.value[itt]);
        if (this.commentsArray.value[itt]) {
            console.log({ id: this.feeds[itt]._id, user_id: this.id, text: this.commentsArray.value[itt] });
            this.groupService.postComment({ id: this.feeds[itt]._id, user_id: this.id, text: this.commentsArray.value[itt] })
                .subscribe((data) => {
                console.log(data);
                this.commentsArray.controls[itt].reset();
                this.feeds[itt].comments = data.comments;
            });
        }
    }
    requstEdit(itt) {
        console.log(itt);
        this.feeds[itt].editable_caption = true;
    }
    edit(itt) {
        console.log(itt);
        this.feeds[itt].editable_caption = false;
        console.log(this.captionArray.value[itt]);
        console.log(this.captionArray);
        // this.feeds[itt].text = this.captionArray.controls[itt].value;
        console.log(this.feeds[itt]);
    }
};
Tab2Page.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _shared_group_service__WEBPACK_IMPORTED_MODULE_3__["GroupService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Events"] },
    { type: _services_helper_service__WEBPACK_IMPORTED_MODULE_10__["HelperService"] }
];
Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: __webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html"),
        providers: [_shared_group_service__WEBPACK_IMPORTED_MODULE_3__["GroupService"]],
        styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
        _shared_group_service__WEBPACK_IMPORTED_MODULE_3__["GroupService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
        _services_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Events"],
        _services_helper_service__WEBPACK_IMPORTED_MODULE_10__["HelperService"]])
], Tab2Page);



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es2015.js.map