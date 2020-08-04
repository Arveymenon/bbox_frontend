(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-feed-create-feed-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/create-feed/create-feed.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/create-feed/create-feed.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button routerLink=\"/home/tabs/tab2\">\n        <ion-icon class=\"back-button\" slot=\"icon-only\" name=\"md-arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title routerLink=\"groupdetails\">\n      {{'Feeds'|translate}}\n    </ion-title>\n    <ion-buttons slot=\"end\" size-xs=\"small\">\n      <!-- <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"md-search\"></ion-icon>\n      </ion-button> -->\n      <!-- <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"md-notifications\"></ion-icon>\n      </ion-button> -->\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"md-create\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"main\" *ngIf=\"userArray.length != 0\">\n\n    <p class=\"header\" *ngIf=\"feed_id == -1\">{{'Feed will be sent to'|translate}}</p>\n\n    <div class=\"all-message-container\" (click)=\"selectAll($event)\" *ngIf=\"feed_id == -1\">\n      <div class=\"images-container\">\n        <div class=\"first-row\">\n          <img [src]=\"userService.setAvatar(userArray[0] ? userArray[0].avatar: '')\"\n            onError=\"this.src='assets/images/user.png';\" class=\"small-image\">\n          <img [src]=\"userService.setAvatar(userArray[1] ? userArray[1].avatar: '')\"\n            onError=\"this.src='assets/images/user.png';\" class=\"small-image\">\n        </div>\n        <div class=\"second-row\">\n          <img [src]=\"userService.setAvatar(userArray[2] ? userArray[2].avatar: '')\"\n            onError=\"this.src='assets/images/user.png';\" class=\"small-image\">\n          <img [src]=\"userService.setAvatar(userArray[3] ? userArray[3].avatar: '')\"\n            onError=\"this.src='assets/images/user.png';\" class=\"small-image\">\n        </div>\n      </div>\n      <ion-icon slot=\"icon-only\" name=\"md-checkmark\" color=\"light\" class=\"checkmark hidden\"></ion-icon>\n      <p class=\"all-text\">{{'All'|translate}}</p>\n    </div>\n\n    <p class=\"header sub\" *ngIf=\"feed_id == -1\">{{'Select Groups'|translate}}</p>\n\n\n\n  <div>\n    <div class=\"all-images-row\" *ngIf=\"feed_id == -1\">\n      <div *ngFor=\"let user of userArray; index as pos\" class=\"individual-user-container\" id=\"container-{{ pos+1 }}\">\n        <div class=\"individual-image-container\" (click)=\"selectIndividual($event, pos)\">\n          <img class=\"large-image\" id=\"image-{{ pos+1 }}\" *ngIf=\"user.avatar\"\n            [src]=\"userService.setAvatar(user.avatar)\">\n          <img class=\"large-image\" id=\"image-{{ pos+1 }}\" *ngIf=\"!user.avatar\" src=\"assets/images/user.png\">\n        </div>\n        <ion-icon slot=\"icon-only\" name=\"md-checkmark\" color=\"light\" class=\"individual-checkmark\" id=\"{{ pos+1 }}\"\n          (click)=\"selectIndividual($event, pos)\"></ion-icon>\n        <p class=\"individual-name\">{{ user.name }}</p>\n      </div>\n    </div>\n  </div>\n    \n    <div *ngIf=\"feed_id != -1\">\n      <video width=\"320\" height=\"240\" controls *ngIf=\"feedEdit.data.fileType == 'video'\" muted [muted]=\"true\">\n        <source [src]=\"'http://198.12.92.202/public/uploads/'+ feedEdit.data.attachment\" type=\"video/mp4\">\n        <source [src]=\"'http://198.12.92.202/public/uploads/'+ feedEdit.data.attachment\" type=\"video/ogg\">\n        Your browser does not support the video tag.\n      </video>\n      <img  [src]=\"'http://198.12.92.202/public/uploads/'+ feedEdit.data.attachment\" width=\"320\" height=\"240\" *ngIf=\"feedEdit.data.fileType == 'image'\">\n      <!-- <video [src]=\"feedEdit.data.attachment\" width=\"200\" height=\"200\" *ngIf=\"feedEdit.data.fileType == video\"> -->\n    </div>\n\n\n\n\n    <!-- Text area -->\n    <div class=\"type-message\">\n      <!-- Text Message Area -->\n      <div class=\"type-message-container\">\n\n        <!-- DEMO ITEM -->\n        <!-- <ion-item class=\"preview\" text-wrap>\n          <ion-thumbnail  slot=\"start\">\n            <ion-img src=\"assets/images/user.png\"></ion-img>\n          </ion-thumbnail>\n          <ion-label>\n            2141251521512.jpg\n          </ion-label>\n          <ion-button *ngIf=\"uploading == false\" slot=\"end\" fill=\"clear\" (click)=\"deleteFile(img, pos)\">\n            <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n          </ion-button>\n          <ion-spinner name=\"crescent\" color=\"primary\"></ion-spinner>\n        </ion-item>\n        <ion-progress-bar value=\"100\" buffer=\"50\"></ion-progress-bar> -->\n\n        <ion-item class=\"preview\" *ngFor=\"let img of images; index as pos\" text-wrap>\n          <ion-thumbnail *ngIf=\"getExt(img) != 'video'\" slot=\"start\">\n            <ion-img [src]=\"img.path\"></ion-img>\n          </ion-thumbnail>\n          <ion-thumbnail *ngIf=\"getExt(img) == 'video'\" slot=\"start\">\n            <video [src]=\"img.path\" height=\"50\" width=\"70\" muted [muted]=\"true\" preload=\"auto\" playsinline autoplay loop></video>\n          </ion-thumbnail>\n          <ion-label>\n            {{ img.displayName }}\n          </ion-label>\n          <ion-button *ngIf=\"uploading == false\" slot=\"end\" fill=\"clear\" (click)=\"deleteFile(img, pos)\">\n            <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n          </ion-button>\n          <ion-spinner *ngIf=\"uploading == true\" name=\"crescent\" color=\"primary\"></ion-spinner>\n        </ion-item>\n        <ion-item class=\"preview\" *ngFor=\"let doc of docs; index as pos\" text-wrap>\n          <ion-chip color=\"primary\">\n            <ion-icon name=\"attach\" color=\"primary\"></ion-icon>\n          </ion-chip>\n          <ion-label>\n            {{ doc.name }}\n          </ion-label>  \n          <ion-button *ngIf=\"uploading == false\" slot=\"end\" fill=\"clear\" (click)=\"deleteFile(doc, pos)\">\n            <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n          </ion-button>\n          <ion-spinner *ngIf=\"uploading == true\" name=\"crescent\" color=\"primary\"></ion-spinner>\n        </ion-item>\n        <ion-progress-bar *ngIf=\"uploading == true\" value=\"{{ upload_value }}\" buffer=\"{{ buffer_value }}\"></ion-progress-bar>\n        <form [formGroup]=\"feedForm\" (ngSubmit)=\"onSubmit()\">\n          \n          <div class=\"chatbox-wrapper\">\n            <ion-item class=\"rounded\" lines=\"none\">\n                <ion-textarea formControlName=\"text\" rows=\"3\" placeholder=\"{{'Enter Message'|translate}}...\"></ion-textarea>\n            </ion-item>\n          </div>\n        \n          <div class=\"buttons-container\">\n            <ion-button fill=\"clear\" (click)=\"showModal()\" *ngIf=\"!feed_id || feed_id  == -1\">\n              <ion-icon slot=\"icon-only\" name=\"md-eye\" color=\"primary\"></ion-icon>\n            </ion-button>\n\n            <ion-button fill=\"clear\" (click)=\"selectAFile()\" *ngIf=\"!feed_id || feed_id  == -1\">\n              <ion-icon slot=\"icon-only\" name=\"md-attach\" color=\"primary\"></ion-icon>\n            </ion-button>\n            <input type=\"file\" (change)=\"getFileFromBrowser($event, 'video')\" id=\"video\" accept=\"video/mp4,video/x-m4v,video/*\" style=\"display: none\">\n            <ion-button fill=\"clear\" (click)=\"selectVideoFromGallery()\" *ngIf=\"!feed_id || feed_id  == -1\">\n              <ion-icon slot=\"icon-only\" name=\"md-videocam\" color=\"primary\"></ion-icon>\n            </ion-button>\n            \n            <input type=\"file\" (change)=\"getFileFromBrowser($event, 'image')\" id=\"image\" accept=\"image/*\" style=\"display: none\">\n            <ion-button fill=\"clear\" (click)=\"selectImage()\" *ngIf=\"!feed_id || feed_id  == -1\">\n              <ion-icon slot=\"icon-only\" name=\"md-camera\" color=\"primary\"></ion-icon>\n            </ion-button>\n\n            <ion-button fill=\"clear\" (click)=\"onSubmit()\">\n              <ion-icon slot=\"icon-only\" name=\"md-send\" color=\"primary\"></ion-icon>\n            </ion-button>\n          </div>\n        </form>\n      </div>\n    </div>\n\n  </div>\n  <div *ngIf=\"userArray.length == 0 && loaded == true\">\n    <p class=\"ion-text-center\">Kindly Create a Subscriber List to Create Feeds</p>\n  </div>\n\n\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/preview-feed-modal/preview-feed-modal.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/preview-feed-modal/preview-feed-modal.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <!-- <ion-toolbar>\n    <ion-title>preview</ion-title>\n  </ion-toolbar> -->\n</ion-header>\n\n<ion-content class=\"blackbg\">\n  <ion-card class=\"feed-card\">\n    \n    \n    <!-- <div class=\"vertical-center\"> -->\n      <ion-card-header class=\"feed-header\">\n        <img class=\"business-logo\" src=\"assets/images/user.png\" onError=\"this.src='assets/images/user.png';\">\n        <p class=\"business-name ion-align-items-end\">{{ gname }}</p>\n        <!-- <p class=\"open-options\">...</p> -->\n      </ion-card-header>\n\n      <ion-card-content>\n        <!-- <img class=\"feed-image card-photo\" *ngIf=\"feed.file == true && feed.fileType == 'image' || feed.file == true && !feed.fileType\" [src]=\"'http://198.12.92.202/public/uploads/'+ feed.attachment\"> -->\n        <img class=\"feed-image card-photo\" *ngIf=\"getExt(this.images[0]) != 'video'\" [src]=\"this.images[0].path\">\n        <video class=\"feed-video card-photo\" *ngIf=\"getExt(this.images[0]) == 'video'\" [src]=\"this.images[0].path\" muted [muted]=\"true\"></video>\n        <p class=\"post-text\">\n          {{ firstName }}\n        </p>\n        <div class=\"card-options\">\n          <ion-button fill=\"clear\">\n            <ion-icon slot=\"icon-only\" name=\"md-star-outline\" color=\"blue\"></ion-icon>\n            <!-- <ion-icon slot=\"icon-only\" name=\"md-star\" color=\"blue\"></ion-icon> -->\n          </ion-button>\n          <ion-button fill=\"clear\">\n            <ion-icon slot=\"icon-only\" name=\"md-chatboxes\" color=\"blue\"></ion-icon>\n          </ion-button>\n        \n        </div>\n        \n      </ion-card-content>\n    \n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/create-feed/create-feed.module.ts":
/*!***************************************************!*\
  !*** ./src/app/create-feed/create-feed.module.ts ***!
  \***************************************************/
/*! exports provided: CreateFeedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateFeedPageModule", function() { return CreateFeedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _create_feed_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-feed.page */ "./src/app/create-feed/create-feed.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _preview_feed_modal_preview_feed_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../preview-feed-modal/preview-feed-modal.page */ "./src/app/preview-feed-modal/preview-feed-modal.page.ts");









var routes = [
    {
        path: '',
        component: _create_feed_page__WEBPACK_IMPORTED_MODULE_6__["CreateFeedPage"]
    }
];
var CreateFeedPageModule = /** @class */ (function () {
    function CreateFeedPageModule() {
    }
    CreateFeedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _create_feed_page__WEBPACK_IMPORTED_MODULE_6__["CreateFeedPage"],
                _preview_feed_modal_preview_feed_modal_page__WEBPACK_IMPORTED_MODULE_8__["PreviewFeedModalPage"]
            ],
            entryComponents: [
                _preview_feed_modal_preview_feed_modal_page__WEBPACK_IMPORTED_MODULE_8__["PreviewFeedModalPage"]
            ]
        })
    ], CreateFeedPageModule);
    return CreateFeedPageModule;
}());



/***/ }),

/***/ "./src/app/create-feed/create-feed.page.scss":
/*!***************************************************!*\
  !*** ./src/app/create-feed/create-feed.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  text-align: left; }\n\n.main {\n  margin: 20px; }\n\n.header {\n  color: #1A1A1A;\n  font-weight: bold;\n  margin-bottom: 0px; }\n\n.header.sub {\n  color: #005DDD;\n  margin-top: 0;\n  margin-bottom: 20px; }\n\n.all-message-container {\n  width: 50px;\n  margin-top: 20px; }\n\n.images-container {\n  width: 50px;\n  height: 50px;\n  text-align: center;\n  border-radius: 50%;\n  padding-left: 3px; }\n\n.overlay {\n  background: #69A8FF; }\n\n.overlay .small-image {\n  opacity: 0.5; }\n\n.all-text {\n  margin-top: 35px;\n  width: 50px;\n  color: #1A1A1A;\n  text-align: center;\n  font-weight: 600;\n  font-size: 12px;\n  position: relative;\n  bottom: 30px;\n  margin-bottom: 0; }\n\n.all-text.blue {\n  color: #005DDD; }\n\n.first-row {\n  display: -webkit-box;\n  display: flex;\n  padding-left: 3px;\n  padding-top: 4px; }\n\n.second-row {\n  display: -webkit-box;\n  display: flex;\n  padding-left: 3px; }\n\n.images-container .small-image {\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  margin: 3px 2px; }\n\n.checkmark {\n  font-size: 30px;\n  position: relative;\n  bottom: 40px;\n  left: 10px; }\n\n.hidden {\n  visibility: hidden; }\n\n.all-images-row {\n  display: -webkit-box;\n  display: flex;\n  overflow-x: auto;\n  min-height: 80px; }\n\n.individual-user-container {\n  width: 50px;\n  height: 50px;\n  margin: 0 5px; }\n\n.individual-image-container {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  background: #69A8FF;\n  margin: 0 auto; }\n\n.large-image {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%; }\n\n.individual-name {\n  margin-top: 2px;\n  color: #1A1A1A;\n  text-align: center;\n  font-weight: 600;\n  font-size: 12px;\n  position: relative;\n  bottom: 30px;\n  margin-bottom: 0; }\n\n.individual-checkmark {\n  font-size: 25px;\n  position: relative;\n  bottom: 33px;\n  left: 12px;\n  visibility: hidden; }\n\n.individual-overlay .large-image {\n  opacity: 0.5 !important; }\n\n.individual-overlay .individual-name {\n  color: #005DDD !important; }\n\n.individual-overlay .individual-checkmark {\n  visibility: visible; }\n\n.hide {\n  display: none !important; }\n\n.position-fix {\n  position: relative;\n  bottom: 105px;\n  z-index: 1000; }\n\n.attachment-container {\n  display: -webkit-box;\n  display: flex;\n  position: relative;\n  padding: 0 15px; }\n\n.attachment-snapshot {\n  width: 15%;\n  min-width: 60px; }\n\n.attachment-snapshot img {\n  height: 60px;\n  width: 60px;\n  border-radius: 10px; }\n\n.attachment-name {\n  width: 70%;\n  height: 60px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.attachment-name p {\n  margin: 0;\n  color: #005DDD;\n  font-size: 18px;\n  padding: 18px;\n  display: inline-block; }\n\n.attachment-delete {\n  width: 15%;\n  overflow: hidden; }\n\n.attachment-delete ion-button {\n  padding: 10px 0;\n  float: right; }\n\n.scroll-content {\n  padding-bottom: 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYmJveF9mcm9udGVuZC9zcmMvYXBwL2NyZWF0ZS1mZWVkL2NyZWF0ZS1mZWVkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGdCQUFnQixFQUFBOztBQUlwQjtFQUNJLFlBQVcsRUFBQTs7QUFJZjtFQUNJLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksY0FBYztFQUNkLGFBQVk7RUFDWixtQkFBbUIsRUFBQTs7QUFLdkI7RUFDSSxXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFnQixFQUFBOztBQUdwQjtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxnQkFBZTtFQUNmLFdBQVU7RUFDVixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGdCQUNKLEVBQUE7O0FBRUE7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVSxFQUFBOztBQUdkO0VBQ0ksa0JBQWtCLEVBQUE7O0FBS3RCO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYSxFQUFBOztBQUdqQjtFQUNJLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxlQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTtFQUNWLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLG1CQUFtQixFQUFBOztBQU12QjtFQUNJLHdCQUF3QixFQUFBOztBQUc1QjtFQUNJLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsYUFBYSxFQUFBOztBQUdqQjtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksVUFBVTtFQUNWLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxZQUFZO0VBQ1osV0FBVztFQUNYLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFVBQVU7RUFDVixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxTQUFTO0VBQ1QsY0FBYztFQUNkLGVBQWU7RUFDZixhQUFhO0VBQ2IscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksVUFBVTtFQUNWLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGVBQWU7RUFDZixZQUFZLEVBQUE7O0FBMEVoQjtFQUNJLDRCQUE0QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY3JlYXRlLWZlZWQvY3JlYXRlLWZlZWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9Jb24gSGVhZGVyIFN0eWxlc1xuaW9uLXRpdGxle1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi8vTWFpbiBTdHlsZXNcbi5tYWlue1xuICAgIG1hcmdpbjoyMHB4O1xufVxuXG4vLyBIZWFkZXIgU3R5bGVzXG4uaGVhZGVye1xuICAgIGNvbG9yOiAjMUExQTFBO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ib3R0b206MHB4O1xufVxuXG4uaGVhZGVyLnN1YntcbiAgICBjb2xvcjogIzAwNURERDtcbiAgICBtYXJnaW4tdG9wOjA7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLy9TZW5kIE1lc3NhZ2UgdG8gQWxsIFN0eWxlc1xuXG4uYWxsLW1lc3NhZ2UtY29udGFpbmVye1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cblxuLmltYWdlcy1jb250YWluZXJ7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcGFkZGluZy1sZWZ0OjNweDtcbn1cblxuLm92ZXJsYXl7XG4gICAgYmFja2dyb3VuZDogIzY5QThGRjtcbn1cblxuLm92ZXJsYXkgLnNtYWxsLWltYWdle1xuICAgIG9wYWNpdHk6IDAuNTtcbn1cblxuLmFsbC10ZXh0e1xuICAgIG1hcmdpbi10b3A6MzVweDtcbiAgICB3aWR0aDo1MHB4O1xuICAgIGNvbG9yOiAjMUExQTFBO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm90dG9tOiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5hbGwtdGV4dC5ibHVle1xuICAgIGNvbG9yOiAjMDA1REREO1xufVxuXG4uZmlyc3Qtcm93e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gICAgcGFkZGluZy10b3A6IDRweCBcbn1cblxuLnNlY29uZC1yb3d7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcbn1cblxuLmltYWdlcy1jb250YWluZXIgLnNtYWxsLWltYWdle1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIGhlaWdodDogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luOiAzcHggMnB4O1xufVxuXG4uY2hlY2ttYXJre1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm90dG9tOiA0MHB4O1xuICAgIGxlZnQ6IDEwcHg7XG59XG5cbi5oaWRkZW57XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4vL1NlbmQgTWVzc2FnZSB0byBJbmRpdmlkdWFscyBTdHlsZVxuXG4uYWxsLWltYWdlcy1yb3d7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDgwcHg7XG59XG5cbi5pbmRpdmlkdWFsLXVzZXItY29udGFpbmVye1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW46IDAgNXB4O1xufVxuXG4uaW5kaXZpZHVhbC1pbWFnZS1jb250YWluZXJ7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAjNjlBOEZGO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ubGFyZ2UtaW1hZ2V7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmluZGl2aWR1YWwtbmFtZXtcbiAgICBtYXJnaW4tdG9wOjJweDtcbiAgICBjb2xvcjogIzFBMUExQTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uaW5kaXZpZHVhbC1jaGVja21hcmt7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IDMzcHg7XG4gICAgbGVmdDogMTJweDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5pbmRpdmlkdWFsLW92ZXJsYXkgLmxhcmdlLWltYWdle1xuICAgIG9wYWNpdHk6IDAuNSAhaW1wb3J0YW50O1xufVxuXG4uaW5kaXZpZHVhbC1vdmVybGF5IC5pbmRpdmlkdWFsLW5hbWV7XG4gICAgY29sb3I6ICMwMDVEREQgIWltcG9ydGFudDtcbn1cblxuLmluZGl2aWR1YWwtb3ZlcmxheSAuaW5kaXZpZHVhbC1jaGVja21hcmt7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuXG4vL0F0dGFjaG1lbnQgc3R5bGVzXG5cbi5oaWRle1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnBvc2l0aW9uLWZpeHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm90dG9tOiAxMDVweDtcbiAgICB6LWluZGV4OiAxMDAwO1xufVxuXG4uYXR0YWNobWVudC1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMCAxNXB4O1xufVxuXG4uYXR0YWNobWVudC1zbmFwc2hvdHtcbiAgICB3aWR0aDogMTUlO1xuICAgIG1pbi13aWR0aDogNjBweDtcbn1cblxuLmF0dGFjaG1lbnQtc25hcHNob3QgaW1ne1xuICAgIGhlaWdodDogNjBweDtcbiAgICB3aWR0aDogNjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uYXR0YWNobWVudC1uYW1le1xuICAgIHdpZHRoOiA3MCU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmF0dGFjaG1lbnQtbmFtZSBwe1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogIzAwNURERDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgcGFkZGluZzogMThweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5hdHRhY2htZW50LWRlbGV0ZXtcbiAgICB3aWR0aDogMTUlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5hdHRhY2htZW50LWRlbGV0ZSBpb24tYnV0dG9ue1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbi8vVGV4dCBhcmVhIFN0eWxlc1xuXG5cblxuLy8gLnRleHQtYm94LWNvbnRhaW5lcntcbi8vICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICBib3R0b206IDA7XG4vLyAgICAgd2lkdGg6IDkxJTtcbi8vICAgICBoZWlnaHQ6IDMwMHB4O1xuLy8gfVxuXG4vLyAucm91bmRlZHtcbi8vICAgICBib3JkZXI6IDJweCBzb2xpZCAjRTJFMkUyO1xuLy8gICAgIC0tYm9yZGVyLXdpZHRoOiAwIDAgMCAwO1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDhweFxuLy8gfVxuXG4vLyBpb24tdGV4dGFyZWF7XG4vLyAgICAgaGVpZ2h0OiAyNzVweDtcbi8vICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbi8vIH1cblxuLy8gLmJ1dHRvbnMtY29udGFpbmVye1xuLy8gICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuLy8gfVxuXG4vLyAuYnV0dG9ucy1jb250YWluZXIubm9ybWFse1xuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICB0b3A6IDU1cHg7XG4vLyAgICAgei1pbmRleDogMTAwMDtcbi8vIH1cblxuLy8gLmJ1dHRvbnMtY29udGFpbmVyIGlvbi1idXR0b257XG4vLyAgICAgLS1wYWRkaW5nLXN0YXJ0OjVweDtcbi8vICAgICAtLXBhZGRpbmctZW5kOjVweDtcbi8vIH1cblxuLy8gLmJ1dHRvbnMtY29udGFpbmVyIGlvbi1pY29ue1xuLy8gICAgIHBhZGRpbmc6IDA7XG4vLyAgICAgZm9udC1zaXplOiAxOHB4O1xuLy8gfVxuXG4vLyBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA3NTBweCkge1xuLy8gICAgIC50ZXh0LWJveC1jb250YWluZXJ7XG4vLyAgICAgICAgIGhlaWdodDogMzUwcHg7XG4vLyAgICAgfVxuLy8gICAgIGlvbi10ZXh0YXJlYSB7XG4vLyAgICAgICBoZWlnaHQ6IDMyNXB4O1xuLy8gICAgIH1cbi8vIH1cblxuXG4vLyBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA3MDBweCkge1xuLy8gICAgIC50ZXh0LWJveC1jb250YWluZXJ7XG4vLyAgICAgICAgIGhlaWdodDogMzAwcHg7XG4vLyAgICAgfVxuLy8gICAgIGlvbi10ZXh0YXJlYSB7XG4vLyAgICAgICBoZWlnaHQ6IDI3NXB4O1xuLy8gICAgIH1cbi8vIH1cblxuLy8gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNjAwcHgpIHtcbi8vICAgICAudGV4dC1ib3gtY29udGFpbmVye1xuLy8gICAgICAgICBoZWlnaHQ6IDIyNXB4O1xuLy8gICAgIH1cbi8vICAgICBpb24tdGV4dGFyZWEge1xuLy8gICAgICAgaGVpZ2h0OiAxODBweDtcbi8vICAgICB9XG4vLyB9XG5cbi5zY3JvbGwtY29udGVudCB7XG4gICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/create-feed/create-feed.page.ts":
/*!*************************************************!*\
  !*** ./src/app/create-feed/create-feed.page.ts ***!
  \*************************************************/
/*! exports provided: CreateFeedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateFeedPage", function() { return CreateFeedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_group_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/group.service */ "./src/app/shared/group.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _preview_feed_modal_preview_feed_modal_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../preview-feed-modal/preview-feed-modal.page */ "./src/app/preview-feed-modal/preview-feed-modal.page.ts");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _shareduser_user_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../shareduser/user.service */ "./src/app/shareduser/user.service.ts");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");





















var STORAGE_KEY = 'my_files';
var CreateFeedPage = /** @class */ (function () {
    function CreateFeedPage(storage, groupService, formBuilder, file, actionSheetCtrl, navCtrl, 
    // public navParams: NavParams,
    toastCtrl, camera, modalCtrl, webview, platform, filePath, ref, fileChooser, http, androidPermissions, router, route, loader, translate, events, userService, helper, fileOpener) {
        var _this = this;
        this.storage = storage;
        this.groupService = groupService;
        this.formBuilder = formBuilder;
        this.file = file;
        this.actionSheetCtrl = actionSheetCtrl;
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
        this.router = router;
        this.route = route;
        this.loader = loader;
        this.translate = translate;
        this.events = events;
        this.userService = userService;
        this.helper = helper;
        this.fileOpener = fileOpener;
        this.lang = 'EN';
        this.userArray = []; // Groups
        this.feed_groups = [];
        this.docs = [];
        this.loaded = false;
        this.uploading = false;
        this.ANDROID_PERMISSIONS = [
            'android.permission.READ_EXTERNAL_STORAGE',
            'android.permission.WRITE_EXTERNAL_STORAGE',
        ];
        this.images = [];
        this.all = false;
        this.upload_value = 0;
        this.buffer_value = 0.1;
        //hides groups when feed is edited VIKAS
        this.feed_id = -1;
        this.storage.get('language')
            .then(function (lang) {
            if (lang) {
                _this.lang = lang;
            }
        });
        this.storage.get('id')
            .then(function (id) {
            if (id) {
                _this.idval = id;
            }
        });
        this.route.queryParams.subscribe(function (params) {
            if (params) {
                _this.feedEdit = JSON.parse(params["feeddata"]);
                console.log(params);
                console.log(_this.feedEdit);
                _this.feed_id = _this.feedEdit.data._id;
            }
        });
        // setTimeout(() => {
        //   this.upload_value += 0.1
        //   this.buffer_value += 0.1
        // }, 1000)
        // setTimeout(() => {
        //   this.upload_value += 0.6
        //   this.buffer_value += 0.6
        // }, 7000)
        this.loadGroups();
        // this.getgroupuser(this.id);
    }
    CreateFeedPage.prototype.ngOnInit = function () {
        this.feedForm = this.formBuilder.group({
            text: [''],
        });
        // VIKAS SETTING MESSAGE IN EDIT CASE
        if (this.feed_id != -1) {
            console.log(this.feedEdit.data._id);
            this.feedForm.controls.text.setValue(this.feedEdit.data.text);
            console.log(this.feedForm.value.text);
        }
    };
    CreateFeedPage.prototype.loadGroups = function () {
        var _this = this;
        this.loader.presentLoading();
        this.storage.get('id').then(function (val) {
            console.log(val);
            _this.groupService.getGroupList(val).subscribe(function (res) {
                console.log("GROUPS", res);
                _this.userArray = new Array();
                // this.groupService.selectedGroup = res as Group;
                _this.groupService.ugroups = res['groups'];
                console.log('GROUPS', _this.groupService.ugroups);
                _this.groupService.ugroups.forEach(function (element) {
                    var admin = element.members.find(function (m) { return m.admin == true; });
                    if (element.subscriber && _this.idval == admin.memberid) {
                        _this.userArray.push({ id: element['_id'], name: element['name'], avatar: element['avatar'], members: element['members'] });
                    }
                });
                _this.loader.dismiss();
                _this.ref.detectChanges();
                _this.loaded = true;
                console.log(_this.userArray);
            });
        });
    };
    CreateFeedPage.prototype.selectIndividual = function (event, pos) {
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
    CreateFeedPage.prototype.showAttachment = function (event) {
        console.log('working');
        document.querySelector('.attachment-container').classList.toggle('hide');
        document.querySelector('.buttons-container').classList.toggle('normal');
    };
    CreateFeedPage.prototype.selectAll = function (event) {
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
            this.feed_groups = [];
            console.log(this.feed_groups);
        }
    };
    CreateFeedPage.prototype.toggleAll = function () {
        for (var i = 0; i < this.userArray.length; i++) {
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
    };
    CreateFeedPage.prototype.checkAll = function () {
        console.log(this.userArray);
        console.log(this.feed_groups);
        if (this.userArray.length == this.feed_groups.length) {
            return true;
        }
        else {
            return false;
        }
    };
    CreateFeedPage.prototype.toggleIDs = function (id, action) {
        console.log(id);
        var index = this.feed_groups.indexOf(id);
        console.log(action);
        console.log(index);
        if (action) {
            if (action == 'add' && index == -1) {
                this.feed_groups.push(id);
                return;
            }
            else if (action == 'remove' && index > -1) {
                this.feed_groups.splice(index, 1);
                return;
            }
        }
        else {
            if (index > -1) {
                this.feed_groups.splice(index, 1);
            }
            else {
                this.feed_groups.push(id);
            }
            console.log(this.feed_groups);
        }
    };
    CreateFeedPage.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.images);
        // console.log(this.images[0].name)
        if ((!this.platform.is('ios') && !this.platform.is('android')) && (this.images.length != 0)) {
            this.uploading = true;
            var new_name = this.createFileName(this.images[0].name);
            var formData = new FormData();
            formData.append('image', this.images[0].filePath, new_name);
            this.uploadFileData(formData, new_name);
        }
        else {
            console.log(this.feedForm.value);
            if (this.feed_id != -1) {
                // edit a feed
                var body = {
                    id: this.feedEdit.data._id,
                    text: this.feedForm.value.text,
                    file: this.feedEdit.data.file,
                    attachment: this.feedEdit.data.attachment,
                    fileType: this.feedEdit.data.fileType
                };
                console.log(body);
                this.groupService.editFeed(body).subscribe(function (res) {
                    console.log(res);
                    _this.router.navigate(['/home/tabs/tab2']);
                });
            }
            else {
                // add new feed
                if (this.feed_groups.length > 0) {
                    if (this.platform.is('ios') || this.platform.is('android')) {
                        this.startUpload();
                    }
                }
                else {
                    // let value = this.translate.instant('Kindly_select_atleast_one_group', { value: this.lang })
                    this.presentToast('Kindly_select_atleast_one_group');
                }
            }
        }
    };
    /* ONLINE FIX */
    CreateFeedPage.prototype.loadStoredImages = function () {
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
    CreateFeedPage.prototype.showModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _preview_feed_modal_preview_feed_modal_page__WEBPACK_IMPORTED_MODULE_15__["PreviewFeedModalPage"],
                            componentProps: {
                                'text': this.feedForm.value.text,
                                'group': this.feed_groups,
                                'groupname': this.userArray,
                                'images': this.images,
                                'docs': this.docs
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CreateFeedPage.prototype.presentToast = function (text) {
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
    CreateFeedPage.prototype.selectImage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(!this.platform.is('ios') && !this.platform.is('android'))) return [3 /*break*/, 1];
                        console.log('desktop');
                        document.getElementById('image').click();
                        return [3 /*break*/, 4];
                    case 1: return [4 /*yield*/, this.actionSheetCtrl.create({
                            header: "Select Image source",
                            buttons: [{
                                    text: 'Load from Library',
                                    icon: 'ios-grid',
                                    handler: function () {
                                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                                    }
                                },
                                {
                                    text: 'Use Camera',
                                    icon: 'camera',
                                    handler: function () {
                                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                                    }
                                },
                                {
                                    icon: 'close',
                                    text: 'Cancel',
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
    CreateFeedPage.prototype.takePicture = function (sourceType) {
        var _this = this;
        var options = {
            quality: 65,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imagePath) {
            _this.startProcess(imagePath, 'image', sourceType);
        });
    };
    CreateFeedPage.prototype.selectVideoFromGallery = function () {
        var _this = this;
        if (!this.platform.is('ios') && !this.platform.is('android')) {
            console.log('desktop');
            document.getElementById('video').click();
        }
        else {
            var options = {
                quality: 65,
                destinationType: this.camera.DestinationType.FILE_URI,
                mediaType: this.camera.MediaType.VIDEO,
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            };
            this.camera.getPicture(options).then(function (imagePath) {
                _this.startProcess(imagePath, 'video', _this.camera.PictureSourceType.PHOTOLIBRARY);
            });
        }
    };
    CreateFeedPage.prototype.startProcess = function (file, type, sourceType) {
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
            console.log('CURRENT NAME', currentName);
            var correctPath = file.substr(0, file.lastIndexOf('/') + 1);
            console.log('CORRECT PATH', correctPath);
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName(file.lastIndexOf('/') + 1));
        }
    };
    CreateFeedPage.prototype.createFileName = function (fileName) {
        var ext = this.getFileExtension(fileName);
        console.log("EXT", ext);
        var d = new Date(), n = d.getTime(), newFileName = n + '.' + ext;
        console.log("FILE NAME", fileName);
        return newFileName;
    };
    CreateFeedPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        console.log('NEW FILE NAME', newFileName);
        this.checkPermissions().then(function () {
            _this.file.copyFile(namePath, currentName, _this.file.dataDirectory, newFileName).then(function (success) {
                _this.updateStoredFiles(newFileName, currentName);
            }, function (error) {
                console.log("COULD NOT STORE FILE", error);
                // let value = this.translate.instant('Error_while_storing_file', { value: this.lang })
                _this.presentToast("Error_while_storing_file");
            });
        });
    };
    CreateFeedPage.prototype.updateStoredFiles = function (name, oldName) {
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
    CreateFeedPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            var converted = this.webview.convertFileSrc(img);
            return converted;
        }
    };
    CreateFeedPage.prototype.deleteFile = function (fileEntry, position) {
        var _this = this;
        this.images.splice(position, 1);
        this.docs.splice(position, 1);
        this.storage.get(STORAGE_KEY).then(function (images) {
            var arr = JSON.parse(images);
            var filtered = arr.filter(function (name) { return name != fileEntry.name; });
            _this.storage.set(STORAGE_KEY, JSON.stringify(filtered));
            // tslint:disable-next-line: prefer-const
            var correctPath = fileEntry.filePath.substr(0, fileEntry.filePath.lastIndexOf('/') + 1);
            _this.file.removeFile(correctPath, fileEntry.name).then(function (res) {
                // let value = this.translate.instant('File_removed', { value: this.lang })
                _this.presentToast('File_removed');
            });
        });
    };
    CreateFeedPage.prototype.startUpload = function () {
        var _this = this;
        this.uploading = true;
        console.log(this.uploading);
        console.log('STARTED UPLOAD');
        if (this.images) {
            this.images.forEach(function (imgEntry) {
                _this.getFileFromLocal(imgEntry.filePath);
            });
        }
        if (this.docs) {
            this.docs.forEach(function (docEntry) {
                _this.getFileFromLocal(docEntry.filePath);
            });
        }
        if (!this.images.length && !this.docs.length) {
            this.uploading = false;
            // let value = this.translate.instant('Attachment_Required_to_Proceed', { value: this.lang })
            this.presentToast("Attachment_Required_to_Proceed");
        }
    };
    CreateFeedPage.prototype.getFileFromLocal = function (entry) {
        var _this = this;
        this.file.resolveLocalFilesystemUrl(entry)
            .then(function (entry) {
            entry.file(function (file) { return _this.readFile(file); });
        })
            .catch(function (err) {
            // let value = this.translate.instant('Error_while_reading_file', { value: this.lang })
            _this.presentToast('Error_while_reading_file');
        });
    };
    CreateFeedPage.prototype.readFile = function (file) {
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
    CreateFeedPage.prototype.uploadFileData = function (formData, name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var uploadCall;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                uploadCall = this.http.post("http://198.12.92.202:5000/upload/single-file", formData, { reportProgress: true, observe: 'events' })
                    .subscribe(function (event) {
                    if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpEventType"].UploadProgress) {
                        _this.upload_value = Math.round(event.loaded / event.total);
                        _this.buffer_value = Math.round(event.loaded / event.total) <= 0.9 ? Math.round(event.loaded / event.total) + 0.1 : 1;
                    }
                    else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpResponse"]) {
                        console.log(event);
                        console.log(event['error']);
                        if (event['error']) {
                            // let value = this.translate.instant('File_upload_failed', { value: this.lang })
                            _this.presentToast('File_upload_failed');
                        }
                        else {
                            // let value = this.translate.instant('File_upload_success', { value: this.lang })
                            _this.presentToast('File_upload_success');
                            console.log("SUCCESS IS WORKING");
                            _this.storage.get('id').then(function (id) {
                                var file_message = _this.feedForm.value;
                                file_message.attachment = name;
                                file_message.admin_id = id;
                                file_message.file = true;
                                file_message.fileType = _this.currentFileType;
                                file_message.groups = _this.feed_groups;
                                console.log("FILE MESSAGE", file_message);
                                _this.groupService.createFeed(file_message).subscribe(function (res) {
                                    console.log("RESULT::", res);
                                    _this.uploading = false;
                                    _this.upload_value = 0;
                                    _this.buffer_value = 0.1;
                                    _this.images = [];
                                    _this.docs = [];
                                    _this.currentFileType = new String();
                                    // this.router.navigate(['home/tabs/tab2']);
                                    _this.events.publish('feed:posted', { posted: true });
                                    _this.router.navigateByUrl('home/tabs/tab2');
                                    _this.reset();
                                    _this.ref.detectChanges();
                                });
                            });
                        }
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
    CreateFeedPage.prototype.reset = function () {
        this.feedForm.controls['text'].reset();
    };
    CreateFeedPage.prototype.getExt = function (entry) {
        var file = entry.path.toString();
        var splits = file.split('.');
        var ext = splits[(splits.length - 1)];
        var isnum = /^\d+$/.test(ext);
        if (ext == 'jpg' || ext == 'jpeg' || ext == 'png' || ext == 'gif' || ext == '' || isnum == true || file.includes('data:image')) {
            return 'image';
        }
        else {
            return 'video';
        }
    };
    CreateFeedPage.prototype.getFileExtension = function (entry) {
        var file = entry.toString();
        var splits = file.split('.');
        var ext = splits[(splits.length - 1)];
        return ext;
    };
    CreateFeedPage.prototype.selectAFile = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.fileChooser.open().then(function (fileURI) {
                    _this.startProcess(fileURI, 'doc', null);
                });
                return [2 /*return*/];
            });
        });
    };
    CreateFeedPage.prototype.deleteDoc = function (pos) {
        this.docs.splice(pos, 1);
    };
    CreateFeedPage.prototype.checkPermissions = function () {
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
    CreateFeedPage.prototype.getFileFromBrowser = function (event, type) {
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
    CreateFeedPage.ctorParameters = function () { return [
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
        { type: _shared_group_service__WEBPACK_IMPORTED_MODULE_4__["GroupService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_14__["File"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
        { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__["WebView"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
        { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_10__["FilePath"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_11__["FileChooser"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"] },
        { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_13__["AndroidPermissions"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_16__["LoaderService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Events"] },
        { type: _shareduser_user_service__WEBPACK_IMPORTED_MODULE_17__["UserService"] },
        { type: _services_helper_service__WEBPACK_IMPORTED_MODULE_18__["HelperService"] },
        { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_19__["FileOpener"] }
    ]; };
    CreateFeedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-feed',
            template: __webpack_require__(/*! raw-loader!./create-feed.page.html */ "./node_modules/raw-loader/index.js!./src/app/create-feed/create-feed.page.html"),
            providers: [_shared_group_service__WEBPACK_IMPORTED_MODULE_4__["GroupService"]],
            styles: [__webpack_require__(/*! ./create-feed.page.scss */ "./src/app/create-feed/create-feed.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _shared_group_service__WEBPACK_IMPORTED_MODULE_4__["GroupService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_14__["File"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__["WebView"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_10__["FilePath"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_11__["FileChooser"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"],
            _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_13__["AndroidPermissions"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _services_loader_service__WEBPACK_IMPORTED_MODULE_16__["LoaderService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Events"],
            _shareduser_user_service__WEBPACK_IMPORTED_MODULE_17__["UserService"],
            _services_helper_service__WEBPACK_IMPORTED_MODULE_18__["HelperService"],
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_19__["FileOpener"]])
    ], CreateFeedPage);
    return CreateFeedPage;
}());



/***/ }),

/***/ "./src/app/preview-feed-modal/preview-feed-modal.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/preview-feed-modal/preview-feed-modal.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  text-align: left; }\n\n.feed-card {\n  --background: white !important;\n  margin: 20% auto;\n  max-width: 600px;\n  padding: 0;\n  box-shadow: none !important;\n  border-radius: 0px !important; }\n\n@media screen and (min-width: 411px) {\n    .feed-card {\n      margin: 30% auto; } }\n\n.logo-container {\n  max-width: 40px !important; }\n\n.feed-header img {\n  border-radius: 50%;\n  height: 30px;\n  width: 30px;\n  display: inline; }\n\n.feed-image, .feed-video {\n  height: 300px; }\n\n.feed-card .business-name {\n  margin: 0px 10px 0 10px;\n  font-size: 14px;\n  color: #262626;\n  font-weight: 600;\n  display: inline;\n  position: relative;\n  bottom: 10px; }\n\n.feed-card .open-options {\n  margin: 0;\n  display: inline;\n  font-size: 25px;\n  color: #262626;\n  font-weight: bold;\n  float: right;\n  text-align: right;\n  position: relative;\n  bottom: 10px;\n  right: 10px; }\n\nion-card-header {\n  padding-bottom: 10px; }\n\nion-card-content {\n  padding-top: 0; }\n\n.business-name {\n  margin: 0; }\n\n.card-photo {\n  border-radius: 10px;\n  width: 100%; }\n\n.post-text {\n  padding: 0px;\n  font-size: 13px;\n  color: #1A1A1A;\n  margin-top: 10px; }\n\n.card-options ion-button {\n  --padding-start: 5px;\n  --padding-end: 5px; }\n\n.card-options {\n  overflow: hidden;\n  position: relative;\n  right: 10px; }\n\n.card-options span {\n  float: right;\n  color: #005DDD;\n  padding-top: 10px; }\n\n.top-comment, .comment {\n  display: -webkit-box;\n  display: flex;\n  margin-top: 5px; }\n\n.avatar-container {\n  min-width: 30px; }\n\n.avatar-container img {\n  height: 30px;\n  width: 30px;\n  border-radius: 50%; }\n\n.comment-text {\n  margin-left: 10px;\n  margin-top: 5px; }\n\n.comment-box {\n  display: -webkit-box;\n  display: flex;\n  margin-top: 10px; }\n\n.comment-input {\n  height: 30px;\n  width: 100%;\n  border: 2px solid #E2E2E2;\n  margin: 0 10px 0 5px;\n  --border-width: 0 0 0 0;\n  border-radius: 8px; }\n\n.comment-input ion-input {\n  --padding-top:3px; }\n\n.buttons-container {\n  overflow: hidden;\n  position: relative;\n  bottom: 37px; }\n\n.buttons-container ion-button {\n  float: right;\n  position: relative;\n  z-index: 3; }\n\n.buttons-container ion-button ion-icon {\n  font-size: 20px; }\n\n.hide {\n  display: none !important; }\n\n.skeleton-list {\n  margin: 0 auto;\n  max-width: 600px; }\n\n.skeleton-avatar {\n  height: 30px;\n  width: 30px; }\n\n.feed-skeleton-img {\n  padding: 0px 16px 0px 16px;\n  margin: 0 15px;\n  height: 200px;\n  border-radius: 10px; }\n\n.feed-skeleton-text {\n  padding: 10px 16px 0px 16px;\n  margin: 0 15px;\n  height: 25px; }\n\n.vertical-center {\n  margin: 0;\n  position: absolute;\n  top: 20%;\n  -webkit-transform: translateY(-20%);\n          transform: translateY(-20%); }\n\n.blackbg {\n  --background: black !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYmJveF9mcm9udGVuZC9zcmMvYXBwL3ByZXZpZXctZmVlZC1tb2RhbC9wcmV2aWV3LWZlZWQtbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBS3BCO0VBQ0ksOEJBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDViwyQkFBMkI7RUFDM0IsNkJBQTZCLEVBQUE7O0FBQzdCO0lBUEo7TUFRUSxnQkFBZ0IsRUFBQSxFQUd2Qjs7QUFFRDtFQUNJLDBCQUEwQixFQUFBOztBQUc5QjtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQWFoQjtFQUNJLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFJZjtFQUNJLG9CQUFvQixFQUFBOztBQUd4QjtFQUNJLGNBQWEsRUFBQTs7QUFHakI7RUFDSSxTQUFTLEVBQUE7O0FBR2I7RUFDSSxtQkFBbUI7RUFDbkIsV0FBVyxFQUFBOztBQUdmO0VBQ0ksWUFBWTtFQUNaLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQ0osRUFBQTs7QUFFQTtFQUNJLG9CQUFnQjtFQUNoQixrQkFBYyxFQUFBOztBQUdsQjtFQUNJLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVyxFQUFBOztBQUdmO0VBQ0ksWUFBWTtFQUNaLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFJckI7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYixnQkFBZSxFQUFBOztBQUduQjtFQUNJLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQix1QkFBZTtFQUNmLGtCQUNKLEVBQUE7O0FBRUE7RUFDSSxpQkFBYyxFQUFBOztBQUdsQjtFQUNJLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQUdoQjtFQUNJLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVSxFQUFBOztBQUdkO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLHdCQUF3QixFQUFBOztBQUs1QjtFQUNJLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUdmO0VBQ0ksMEJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxhQUFZO0VBQ1osbUJBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksMkJBQTBCO0VBQzFCLGNBQWM7RUFDZCxZQUNKLEVBQUE7O0FBRUE7RUFDSSxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLFFBQVE7RUFFUixtQ0FBMkI7VUFBM0IsMkJBQTJCLEVBQUE7O0FBRzdCO0VBQ0ksOEJBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ByZXZpZXctZmVlZC1tb2RhbC9wcmV2aWV3LWZlZWQtbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSGVhZGVyIFN0eWxlc1xuaW9uLXRpdGxle1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG4kYnJlYWstc21hbGw6IDQxMXB4O1xuXG4vL0NhcmQgU3R5bGVzXG4uZmVlZC1jYXJke1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDIwJSBhdXRvO1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXNtYWxsKSB7XG4gICAgICAgIG1hcmdpbjogMzAlIGF1dG87IFxuICAgIH1cbiAgICBcbn1cblxuLmxvZ28tY29udGFpbmVye1xuICAgIG1heC13aWR0aDogNDBweCAhaW1wb3J0YW50O1xufVxuXG4uZmVlZC1oZWFkZXIgaW1ne1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgZGlzcGxheTogaW5saW5lO1xufVxuXG4uZmVlZC1pbWFnZSwgLmZlZWQtdmlkZW8ge1xuICAgIGhlaWdodDogMzAwcHg7XG59XG5cbi5mZWVkLWNhcmQgLmJ1c2luZXNzLW5hbWV7XG4gICAgbWFyZ2luOiAwcHggMTBweCAwIDEwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMjYyNjI2O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IDEwcHg7XG59XG5cbi8vIC5mZWVkLWNhcmQgLm9wZW4tb3B0aW9uc3tcbi8vICAgICBtYXJnaW46IDA7ICBcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgbGVmdDoyMHB4O1xuLy8gICAgIGZvbnQtc2l6ZTogMjVweDtcbi8vICAgICBjb2xvcjogIzI2MjYyNjtcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICB0ZXh0LWFsaWduOiByaWdodFxuLy8gfVxuXG4uZmVlZC1jYXJkIC5vcGVuLW9wdGlvbnN7XG4gICAgbWFyZ2luOiAwO1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgY29sb3I6ICMyNjI2MjY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IDEwcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG5cbn1cblxuaW9uLWNhcmQtaGVhZGVye1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG5pb24tY2FyZC1jb250ZW50e1xuICAgIHBhZGRpbmctdG9wOjA7XG59XG5cbi5idXNpbmVzcy1uYW1le1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmNhcmQtcGhvdG97XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnBvc3QtdGV4dHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiAjMUExQTFBO1xuICAgIG1hcmdpbi10b3A6IDEwcHhcbn1cblxuLmNhcmQtb3B0aW9ucyBpb24tYnV0dG9ue1xuICAgIC0tcGFkZGluZy1zdGFydDogNXB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDVweDtcbn1cblxuLmNhcmQtb3B0aW9uc3tcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogMTBweDtcbn1cblxuLmNhcmQtb3B0aW9ucyBzcGFue1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjb2xvcjogIzAwNURERDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLy9Db21tZW50IFN0eWxlc1xuLnRvcC1jb21tZW50LCAuY29tbWVudHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmF2YXRhci1jb250YWluZXJ7XG4gICAgbWluLXdpZHRoOiAzMHB4O1xufVxuXG4uYXZhdGFyLWNvbnRhaW5lciBpbWd7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmNvbW1lbnQtdGV4dHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5jb21tZW50LWJveHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi10b3A6MTBweDtcbn1cblxuLmNvbW1lbnQtaW5wdXR7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNFMkUyRTI7XG4gICAgbWFyZ2luOiAwIDEwcHggMCA1cHg7XG4gICAgLS1ib3JkZXItd2lkdGg6IDAgMCAwIDA7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4XG59XG5cbi5jb21tZW50LWlucHV0IGlvbi1pbnB1dHtcbiAgICAtLXBhZGRpbmctdG9wOjNweDtcbn1cblxuLmJ1dHRvbnMtY29udGFpbmVye1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogMzdweDtcbn1cblxuLmJ1dHRvbnMtY29udGFpbmVyIGlvbi1idXR0b257XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAzO1xufVxuXG4uYnV0dG9ucy1jb250YWluZXIgaW9uLWJ1dHRvbiBpb24taWNvbntcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5oaWRle1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLy9Ta2VsZXRvbiBTdHlsZXNcblxuLnNrZWxldG9uLWxpc3R7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbn1cblxuLnNrZWxldG9uLWF2YXRhcntcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG59XG5cbi5mZWVkLXNrZWxldG9uLWltZ3tcbiAgICBwYWRkaW5nOjBweCAxNnB4IDBweCAxNnB4O1xuICAgIG1hcmdpbjogMCAxNXB4OyBcbiAgICBoZWlnaHQ6MjAwcHg7IFxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcbn1cblxuLmZlZWQtc2tlbGV0b24tdGV4dHtcbiAgICBwYWRkaW5nOjEwcHggMTZweCAwcHggMTZweDsgXG4gICAgbWFyZ2luOiAwIDE1cHg7IFxuICAgIGhlaWdodDoyNXB4XG59XG5cbi52ZXJ0aWNhbC1jZW50ZXIge1xuICAgIG1hcmdpbjogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMCU7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwJSk7XG4gIH1cblxuICAuYmxhY2tiZ3tcbiAgICAgIC0tYmFja2dyb3VuZDogYmxhY2sgIWltcG9ydGFudDtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/preview-feed-modal/preview-feed-modal.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/preview-feed-modal/preview-feed-modal.page.ts ***!
  \***************************************************************/
/*! exports provided: PreviewFeedModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewFeedModalPage", function() { return PreviewFeedModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var PreviewFeedModalPage = /** @class */ (function () {
    function PreviewFeedModalPage(navParams) {
        this.groups = [];
        this.allgroupnames = [];
        this.images = [];
        this.docs = [];
        console.log(navParams.get('text'));
        console.log(navParams.get('group'));
        console.log(navParams.get('groupname'));
        this.firstName = navParams.get('text');
        this.groups = navParams.get('group');
        this.allgroupnames = navParams.get('groupname');
        this.images = navParams.get('images');
        this.docs = navParams.get('docs');
        console.log(this.images);
        console.log(this.docs);
    }
    PreviewFeedModalPage.prototype.ngOnInit = function () {
        for (var _i = 0, _a = this.allgroupnames; _i < _a.length; _i++) {
            var groupname = _a[_i];
            for (var _b = 0, _c = this.groups; _b < _c.length; _b++) {
                var group = _c[_b];
                if (group == groupname.id) {
                    this.gname = groupname.name;
                }
            }
        }
    };
    PreviewFeedModalPage.prototype.getExt = function (entry) {
        var file = entry.path.toString();
        var splits = file.split('.');
        var ext = splits[(splits.length - 1)];
        var isnum = /^\d+$/.test(ext);
        if (ext == 'jpg' || ext == 'jpeg' || ext == 'png' || ext == 'gif' || ext == '' || isnum == true || file.includes('data:image')) {
            return 'image';
        }
        else {
            return 'video';
        }
    };
    PreviewFeedModalPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] }
    ]; };
    PreviewFeedModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-preview-feed-modal',
            template: __webpack_require__(/*! raw-loader!./preview-feed-modal.page.html */ "./node_modules/raw-loader/index.js!./src/app/preview-feed-modal/preview-feed-modal.page.html"),
            styles: [__webpack_require__(/*! ./preview-feed-modal.page.scss */ "./src/app/preview-feed-modal/preview-feed-modal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])
    ], PreviewFeedModalPage);
    return PreviewFeedModalPage;
}());



/***/ })

}]);
//# sourceMappingURL=create-feed-create-feed-module-es5.js.map