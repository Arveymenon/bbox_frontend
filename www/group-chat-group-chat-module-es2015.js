(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["group-chat-group-chat-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/group-chat/group-chat.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/group-chat/group-chat.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n          <ion-button routerLink=\"/home/tabs/tab1\">\n            <ion-icon class=\"back-button\" slot=\"icon-only\" name=\"md-arrow-back\"></ion-icon>\n          </ion-button>\n      </ion-buttons>\n      <img *ngIf=\"loadingChats == false && data.members.length == 2\" class=\"user-icon\" src=\"http://198.12.92.202/public/uploads/{{ img_src }}\" onError=\"this.src='assets/images/user.png';\" style=\"position: absolute !important;\">\n      <img *ngIf=\"loadingChats == false && data.members.length > 2\" class=\"user-icon\" src=\"http://198.12.92.202/public/uploads/{{ img_src }}\" onError=\"this.src='assets/images/group.png';\" style=\"position: absolute !important;\">\n      <ion-title (click)=\"detailsPage()\" style=\"padding-inline-start: 40px;\">\n         {{ groupService.selectedGroup }}  \n      </ion-title>\n      <ion-buttons slot=\"end\" size-xs=\"small\">\n          <!-- <ion-button (click)=\"addmember( idval )\">\n              <ion-icon slot=\"icon-only\"  name=\"md-add\"></ion-icon>\n            </ion-button> -->\n        <ion-button (click)=\"addmember( idval )\" *ngIf=\"this.adminidval == this.group_admin_id && data && data.members.length > 2\">\n          <ion-icon slot=\"icon-only\"  name=\"md-add\"></ion-icon>\n        </ion-button>\n        <ion-button (click)=\"goToAudioCallPage()\">\n          <ion-icon slot=\"icon-only\" name=\"md-call\"></ion-icon>\n        </ion-button>\n        <ion-button (click)=\"goToVideoChatPage()\">\n          <ion-icon slot=\"icon-only\" name=\"md-videocam\"></ion-icon>\n        </ion-button>\n        <ion-button *ngIf=\"savedContact == false\" (click)=\"addToContacts()\">\n          <ion-icon slot=\"icon-only\" name=\"person-add\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n\n  <div class=\"main\" #window >\n\n    <!-- Skeleton -->\n    <div class=\"skeleton\" *ngIf=\"loadingChats == true\">\n      <ion-list>\n          <ion-item lines=\"none\">\n              <ion-avatar slot=\"start\">\n                <ion-skeleton-text animated></ion-skeleton-text>\n              </ion-avatar>\n              <ion-label>\n                <p style=\"height:40px; border-radius:5px\">\n                  <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n                </p>\n              </ion-label>\n            </ion-item>\n\n          <ion-item lines=\"none\" style=\"display:flex; flex-direction:row-reverse\">\n            <ion-avatar slot=\"end\">\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </ion-avatar>\n            <ion-label>\n              <p style=\"height:40px; border-radius:5px;margin-left:40px\">\n                <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n              </p>\n            </ion-label>\n          </ion-item>\n\n          <ion-item lines=\"none\">\n            <ion-avatar slot=\"start\">\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </ion-avatar>\n            <ion-label>\n              <p style=\"height:40px; border-radius:5px\">\n                <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n              </p>\n            </ion-label>\n          </ion-item>\n\n          <ion-item lines=\"none\" style=\"display:flex; flex-direction:row-reverse\">\n            <ion-avatar slot=\"end\">\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </ion-avatar>\n            <ion-label>\n              <p style=\"height:40px; border-radius:5px;margin-left:40px\">\n                <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n              </p>\n            </ion-label>\n          </ion-item>\n\n          <ion-item lines=\"none\">\n              <ion-avatar slot=\"start\">\n                <ion-skeleton-text animated></ion-skeleton-text>\n              </ion-avatar>\n              <ion-label>\n                <p style=\"height:40px; border-radius:5px\">\n                  <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n                </p>\n              </ion-label>\n            </ion-item>\n\n          <ion-item lines=\"none\" style=\"display:flex; flex-direction:row-reverse\">\n            <ion-avatar slot=\"end\">\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </ion-avatar>\n            <ion-label>\n              <p style=\"height:40px; border-radius:5px;margin-left:40px\">\n                <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n              </p>\n            </ion-label>\n          </ion-item>\n\n          <ion-item lines=\"none\">\n            <ion-avatar slot=\"start\">\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </ion-avatar>\n            <ion-label>\n              <p style=\"height:40px; border-radius:5px\">\n                <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n              </p>\n            </ion-label>\n          </ion-item>\n\n          <ion-item lines=\"none\" style=\"display:flex; flex-direction:row-reverse\">\n            <ion-avatar slot=\"end\">\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </ion-avatar>\n            <ion-label>\n              <p style=\"height:40px; border-radius:5px;margin-left:40px\">\n                <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n              </p>\n            </ion-label>\n          </ion-item>\n\n\n      </ion-list>\n    </div>\n    <!-- Skeleton End -->\n\n    <!-- Date or Time header -->\n    <!-- To change the text in the hr tag change 'data-content' attribute -->\n    <!-- <hr class=\"hr-text\" data-content=\"Yesterday\"> -->\n\n    <!-- Sent Bubble -->\n     <div class=\"message-wrapper\" #messageContainer *ngFor =\"let gp of groupService.groups; let i = index\"> \n\n        <!-- adding new members to group message -->\n      <div class=\"message-received-flex-box\" *ngIf=\"gp.system == true\">\n        <div class=\"added-new-contact-container\">\n          <div class=\"added-new-contact\">  \n            <p class=\"received-message-flex\" [innerHTML]=\"gp.message\"></p>\n          </div>\n        </div>     \n      </div>\n        \n      <div class=\"message-received-flex-box\" id=\"{{ i }}-container\" *ngIf = \"(findMatch(adminidval, gp.messageFor) && !gp.file && filtered == false) || (filtered == true && filtered_users.includes(gp.messageBy)  && !gp.file)\">\n          <div class=\"img-container-received-flex\">\n              <img (load)=\"contentArea.scrollToBottom(); scrollToBottom()\" class=\"sender-photo-flex\" src=\"http://198.12.92.202/public/uploads/{{ gp.messageBy.avatar ? gp.messageBy.avatar : 'assets/images/user.png' }}\" onError=\"this.src='assets/images/user.png';\">\n          </div>\n\n          <div class=\"message-bubble-received-flex-container\">\n            <div class=\"message-bubble-received-flex\" id=\"1-bubble\" (press)=\"othersActions(gp._id)\">  \n              <p class=\"sender-name\">{{ gp.messageBy.name }}</p>\n              <p class=\"received-message-flex\" [innerHTML]=\"gp.message\"></p>\n            </div>\n            <p class=\"message-time\">\n                {{gp.chattime|date: 'H:mm'  }}\n            </p>\n          </div>     \n      </div>\n\n    <div class=\"message-received-flex-box\" *ngIf = \"findMatch(adminidval, gp.messageFor) && gp.file == true\">\n      <div class=\"img-container-received-flex\">\n        <img (load)=\"contentArea.scrollToBottom(); scrollToBottom()\" class=\"sender-photo-flex\" src=\"http://198.12.92.202/public/uploads/{{ gp.messageBy.avatar ? gp.messageBy.avatar : 'assets/images/user.png' }}\" onError=\"this.src='assets/images/user.png';\">\n      </div>\n      <div class=\"message-buble-recieved-flex-image\" *ngIf=\"fileSourceArray[gp._id] != null && gp.fileType != 'doc'\">\n          <div class=\"image-container\">\n            <img (load)=\"contentArea.scrollToBottom(); scrollToBottom()\" *ngIf=\"gp.fileType == 'image' && gp.attachment\" [src]=\"fileSourceArray[gp._id]\" (click)=\"viewImage(fileSourceArray[gp._id])\"> \n            <video *ngIf=\"gp.fileType == 'video' && gp.attachment\" [src]=\"fileSourceArray[gp._id]\"  muted [muted]=\"true\" preload=\"auto\" playsinline autoplay loop (click)=\"viewVideo(fileSourceArray[gp._id])\"></video>\n            <div *ngIf=\"gp.fileType == 'video' && gp.attachment\" class=\"playpause {{ fileArray[gp._id] ? '' : 'hidden' }}\" id=\"play-{{ i }}\" (click)=\"viewVideo('http://198.12.92.202/public/uploads/'+ gp.attachment)\"></div>\n            <div class=\"download {{ fileArray[gp._id]  ? 'hidden' : '' }}\" id=\"download-{{ i }}\" (click)=\"downloadAttachment(gp.attachment, i)\"></div>\n            <ion-spinner name=\"lines\" class=\"hidden\" color=\"primary\" id=\"spinner-{{ i }}\"></ion-spinner>\n          </div>\n          <!-- <div class=\"message-bubble-received-flex\">  \n            <p class=\"sender-name\">{{ gp.messageBy.name }}</p>\n            <p class=\"received-message-flex\" [innerHTML]=\"gp.message\"></p>\n          </div> -->\n      </div>\n      <div class=\"message-buble-recieved-flex-file\" *ngIf=\"gp.fileType == 'doc'\" style=\" display: flex; justify-content: center;\">\n        <div>\n            <ion-icon name='attach'></ion-icon>\n        </div>\n        <div>\n          {{ gp.attachment }}\n        </div>\n        <div>\n            <ion-icon class=\"file-attach {{ fileArray[gp._id] ? 'hidden' : '' }}\" name='md-download' ios=\"ios-download\" id=\"download-{{ i }}\" md=\"md-download\" (click)=\"downloadAttachment(gp.attachment, i)\"></ion-icon>\n            <ion-icon class=\"file-attach {{ fileArray[gp._id] ?  '' : 'hidden' }}\" name='md-open' ios=\"ios-open\" id=\"play-{{ i }}\" md=\"md-open\" (click)=\"openFile(gp.attachment, i)\"></ion-icon>\n            <ion-spinner name=\"lines\" color=\"primary\" class=\"hidden\" id=\"spinner-{{ i }}\"></ion-spinner>\n        </div>\n      </div>\n      <br>\n      <p class=\"message-time\">\n        {{gp.chattime|date: 'H:mm'  }}\n      </p>\n    </div>\n\n    <div class=\"message-sent-flex-box\"  *ngIf = \"(gp.messageBy ? gp.messageBy._id == adminidval : false) && !gp.file\" >\n        <div class=\"flex-box-fix\">\n\n          <div class=\"message-buble-sent-flex\" (press)=\"myActions(gp._id)\">\n              <p class=\"sent-message-flex dont-break-out\" [innerHTML]=\"gp.message\"></p>\n          </div>\n\n          <!-- <div class=\"reply-button-container-flex\">\n              <ion-button fill=\"clear\" color=\"dark\">\n                  <ion-icon slot=\"icon-only\" name=\"ios-undo\" class=\"reply-button\"></ion-icon>\n              </ion-button>\n          </div> -->\n        </div>\n        <div class=\"flex-box-fix\">\n        <p class=\"message-time\">\n          {{gp.chattime|date: 'H:mm'  }}\n        </p>\n        </div>\n    </div>\n\n    <div class=\"message-sent-flex-box\" *ngIf = \"(gp.messageBy ? gp.messageBy._id == adminidval : false) && gp.file == true\" style=\"display:flex; flex-direction:row-reverse\">\n        <div class=\"message-buble-sent-flex-image\" *ngIf=\"fileSourceArray[gp._id] != null && gp.fileType != 'doc'\">\n          <img (load)=\"contentArea.scrollToBottom(); scrollToBottom()\" *ngIf=\"gp.fileType == 'image' && gp.attachment\" [src]=\"fileSourceArray[gp._id]\" (click)=\"viewImage(fileSourceArray[gp._id])\"> \n          <div *ngIf=\"gp.fileType == 'video' && gp.attachment\" class=\"mh\">\n            <video muted [muted]=\"true\" preload=\"auto\" playsinline>\n              <source [src]=\"fileSourceArray[gp._id]\">\n            </video>\n          </div>\n          <div *ngIf=\"gp.fileType == 'video' && gp.attachment\" class=\"playpause {{ fileArray[gp._id] ? '' : 'hidden' }}\" id=\"play-{{ i }}\" (click)=\"viewVideo(fileSourceArray[gp._id])\"></div>\n          <div class=\"download {{ fileArray[gp._id] ? 'hidden' : '' }}\" id=\"download-{{ i }}\" (click)=\"downloadAttachment(gp.attachment, i)\"></div>\n          <ion-spinner name=\"lines\" color=\"primary\" class=\"hidden\" id=\"spinner-{{ i }}\"></ion-spinner>\n        </div>\n        <div class=\"message-buble-sent-flex-file\" *ngIf=\"gp.fileType == 'doc'\" style=\" display: flex; justify-content: center; color: white\">\n          <div>\n              <ion-icon name='attach'></ion-icon>\n          </div>\n          <div>\n            {{ gp.attachment }}\n          </div>\n          <div>\n            <ion-icon class=\"file-attach {{ fileArray[gp._id] ? '' : 'hidden' }}\" name='md-download' ios=\"ios-download\" id=\"download-{{ i }}\" md=\"md-download\" (click)=\"downloadAttachment(gp.attachment, i)\"></ion-icon>\n            <ion-icon class=\"file-attach {{ fileArray[gp._id] ?  'hidden' : '' }}\" name='md-open' ios=\"ios-open\" id=\"play-{{ i }}\" md=\"md-open\" (click)=\"openFile(gp.attachment, gp._id)\"></ion-icon>\n            <ion-spinner name=\"lines\" color=\"primary\" class=\"hidden\" id=\"spinner-{{ i }}\"></ion-spinner>\n          </div>\n        </div>\n      </div>\n    </div> \n\n    <div class=\"show-block\" *ngIf=\"showBlock\">\n\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-button fill=\"outline\" size=\"small\" expand=\"block\" (click)=\"acceptGroup()\">Allow</ion-button>\n          </ion-col>\n          <ion-col>\n            <ion-button fill=\"outline\" size=\"small\" expand=\"block\" (click)=\"rejectGroup()\">Block</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <br><br><br><br><br><br>\n\n    \n    \n    <div class=\"type-message\">\n        <!-- Text Message Area -->\n        <div class=\"type-message-container\">\n          <ion-item class=\"preview\" *ngFor=\"let img of images; index as pos\" text-wrap>\n            <ion-thumbnail *ngIf=\"getExt(img) != 'video'\" slot=\"start\">\n              <ion-img [src]=\"img.path\"></ion-img>\n            </ion-thumbnail>\n            <ion-thumbnail *ngIf=\"getExt(img) == 'video'\" slot=\"start\">\n              <video [src]=\"img.path\" height=\"50\" width=\"70\" muted [muted]=\"true\" preload=\"auto\" playsinline autoplay loop></video>\n            </ion-thumbnail>\n            <ion-label>\n              {{ img.displayName }}\n            </ion-label>\n            <ion-button *ngIf=\"uploading == false\" slot=\"end\" fill=\"clear\" (click)=\"deleteFile(img, pos)\">\n              <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n            </ion-button>\n            <ion-spinner *ngIf=\"uploading == true\" name=\"crescent\" color=\"primary\"></ion-spinner>\n          </ion-item>\n          <ion-item class=\"preview\" *ngFor=\"let doc of docs; index as pos\" text-wrap>\n            <ion-chip color=\"primary\">\n              <ion-icon name=\"attach\" color=\"primary\"></ion-icon>\n            </ion-chip>\n            <ion-label>\n              {{ doc.name}}\n            </ion-label>  \n            <ion-button *ngIf=\"uploading == false\" slot=\"end\" fill=\"clear\" (click)=\"deleteFile(doc, pos)\">\n              <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n            </ion-button>\n            <ion-spinner *ngIf=\"uploading == true\" name=\"crescent\" color=\"primary\"></ion-spinner>\n          </ion-item>\n          <form [formGroup]=\"groupform\" (ngSubmit)=\"onSubmit()\">\n          <ion-input type=\"text\" formControlName=\"adminname\" value=\"{{ adminname }}\" hidden></ion-input>\n            <div class=\"chatbox-wrapper\">\n              <ion-item class=\"rounded\" lines=\"none\">\n                  <ion-textarea placeholder=\"{{'Enter Message' | translate}}...\" rows=\"3\" name=\"message\" formControlName=\"message\"></ion-textarea>\n              </ion-item>\n            </div>\n          \n            <div class=\"buttons-container\">\n                <ion-button (click)=\"selectAFile()\" fill=\"clear\">\n                    <ion-icon slot=\"icon-only\" name=\"md-attach\" color=\"medium\"></ion-icon>\n                </ion-button>\n                <!-- <input type=\"file\" (change)=\"getFileFromBrowser($event, 'video')\" id=\"video\" accept=\"video/mp4,video/x-m4v,video/*\" style=\"display: none\"> -->\n                <ion-button (click)=\"selectVideoFromGallery()\" fill=\"clear\">\n                    <ion-icon slot=\"icon-only\" name=\"md-videocam\" color=\"medium\"></ion-icon>\n                </ion-button>\n                \n                <!-- <input type=\"file\" (change)=\"getFileFromBrowser($event, 'image')\" id=\"image\" accept=\"image/*\" style=\"display: none\"> -->\n                <ion-button (click)=\"selectImage()\" fill=\"clear\">\n                  <ion-icon slot=\"icon-only\" name=\"md-camera\" color=\"medium\"></ion-icon>\n                </ion-button>\n  \n                <ion-button (click)=\"onSubmit()\" fill=\"clear\">\n                  <ion-icon slot=\"icon-only\" name=\"md-send\" color=\"primary\"></ion-icon>\n                </ion-button>\n            </div>\n          </form>\n        </div>\n      </div>\n\n  </div>\n\n  <div class=\"outer-chatbox-wrapper\"></div>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/group-chat/group-chat.module.ts":
/*!*************************************************!*\
  !*** ./src/app/group-chat/group-chat.module.ts ***!
  \*************************************************/
/*! exports provided: GroupChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupChatPageModule", function() { return GroupChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _group_chat_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./group-chat.page */ "./src/app/group-chat/group-chat.page.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








// import { LongPressModule } from 'ionic-long-press';
// import { Clipboard } from '@ionic-native/clipboard/ngx';
const routes = [
    {
        path: '',
        component: _group_chat_page__WEBPACK_IMPORTED_MODULE_5__["GroupChatPage"]
    }
];
let GroupChatPageModule = class GroupChatPageModule {
};
GroupChatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
        ],
        declarations: [_group_chat_page__WEBPACK_IMPORTED_MODULE_5__["GroupChatPage"]],
        providers: [
        // Clipboard
        ],
    })
], GroupChatPageModule);



/***/ }),

/***/ "./src/app/group-chat/group-chat.page.scss":
/*!*************************************************!*\
  !*** ./src/app/group-chat/group-chat.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  text-align: left; }\n\n.main {\n  margin: 10px;\n  padding-bottom: 120px; }\n\n.user-icon {\n  margin: 1px;\n  border-radius: 50%;\n  height: 30px;\n  width: 30px; }\n\n.bubble-container {\n  overflow: auto; }\n\n.message-received-flex-box {\n  display: -webkit-box;\n  display: flex;\n  margin-bottom: 10px; }\n\n.img-container-received-flex {\n  margin-right: 15px; }\n\n.sender-photo-flex {\n  max-width: 50px;\n  border-radius: 50%;\n  height: 40px;\n  width: 40px; }\n\n.message-bubble-received-flex-container {\n  max-width: 90%;\n  min-width: 75px; }\n\n.sender-name {\n  color: #7A8AA0;\n  margin: 0; }\n\n.message-bubble-received-flex {\n  background: #F1F1F1;\n  border-top-right-radius: 15px;\n  border-bottom-right-radius: 15px;\n  border-bottom-left-radius: 15px;\n  padding: 9px;\n  max-width: 500px; }\n\n.message-bubble-received-flex-longpress {\n  background: #a9a9a9;\n  border-top-right-radius: 15px;\n  border-bottom-right-radius: 15px;\n  border-bottom-left-radius: 15px;\n  padding: 9px; }\n\n.message-bubble-received-flex-reported {\n  background: #F1F1F1;\n  border-top-right-radius: 15px;\n  border-bottom-right-radius: 15px;\n  border-bottom-left-radius: 15px;\n  padding: 9px; }\n\n.received-message-flex {\n  margin: 0;\n  color: #475255; }\n\n.reply-button {\n  font-size: 22px; }\n\n.message-time {\n  font-size: 10px;\n  color: #7A8AA0;\n  margin: 5px; }\n\n.message-sent-flex-box {\n  margin-bottom: 10px; }\n\n.flex-box-fix {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n          flex-direction: row-reverse; }\n\n.img-container-sent-flex {\n  margin-left: 15px; }\n\n.sender-photo-flex {\n  max-width: 50px;\n  border-radius: 50%; }\n\n.message-buble-sent-flex {\n  background: #005DDD;\n  border-top-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  border-bottom-left-radius: 15px;\n  padding: 9px;\n  max-width: 90%; }\n\n.sent-message-flex {\n  margin: 0;\n  color: white; }\n\n.reply-button {\n  font-size: 22px; }\n\n.hr-text {\n  line-height: 1em;\n  position: relative;\n  outline: 0;\n  border: 0;\n  color: black;\n  text-align: center;\n  height: 1.5em;\n  opacity: .5; }\n\n.hr-text:before {\n    content: '';\n    background: #E2E2E2;\n    position: absolute;\n    left: 0;\n    top: 50%;\n    width: 100%;\n    height: 1px; }\n\n.hr-text:after {\n    content: attr(data-content);\n    position: relative;\n    display: inline-block;\n    color: black;\n    font-family: 'avenir', sans-serif;\n    font-size: 12px;\n    padding: 0 .5em;\n    line-height: 1.5em;\n    color: #818078;\n    background-color: #fcfcfa; }\n\n.chatbox-wrapper {\n  width: calc(100% - 20px); }\n\n.type-message-container .preview {\n  width: calc(100% - 20px); }\n\n.added-new-contact {\n  background: lightskyblue;\n  border-radius: 15px;\n  padding: 4px;\n  max-width: 500px; }\n\n.added-new-contact-container {\n  max-width: 90%;\n  min-width: 75px;\n  margin-left: auto;\n  margin-right: auto; }\n\n.added-new-contact-container p {\n  padding: 5px;\n  font-size: 10px; }\n\n.preview ion-chip {\n  padding: 10px !important; }\n\n.preview ion-chip ion-icon {\n  margin: unset !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYmJveF9mcm9udGVuZC9zcmMvYXBwL2dyb3VwLWNoYXQvZ3JvdXAtY2hhdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBZ0IsRUFBQTs7QUFLcEI7RUFDSSxZQUFXO0VBQ1gscUJBQXFCLEVBQUE7O0FBNEN6QjtFQUNJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGNBQ0osRUFBQTs7QUFFQTtFQUNJLG9CQUFZO0VBQVosYUFBWTtFQUNaLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGtCQUFpQixFQUFBOztBQUdyQjtFQUNJLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksY0FBYztFQUNkLFNBQVMsRUFBQTs7QUFFYjtFQUNJLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLCtCQUErQjtFQUUvQixZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsK0JBQStCO0VBRS9CLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGdDQUFnQztFQUNoQywrQkFBK0I7RUFFL0IsWUFBWSxFQUFBOztBQUtoQjtFQUNJLFNBQVM7RUFDVCxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLGVBQWU7RUFDZixjQUFjO0VBQ2QsV0FBVyxFQUFBOztBQU9mO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQTJCO0VBQTNCLDhCQUEyQjtVQUEzQiwyQkFBMkIsRUFBQTs7QUFPL0I7RUFDSSxpQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QixnQ0FBZ0M7RUFDaEMsK0JBQStCO0VBRS9CLFlBQVk7RUFDWixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksU0FBUztFQUNULFlBQVksRUFBQTs7QUFHaEI7RUFDSSxlQUFlLEVBQUE7O0FBSW5CO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFdBQVcsRUFBQTs7QUFSYjtJQVVJLFdBQVc7SUFHWCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0lBQ1IsV0FBVztJQUNYLFdBQVcsRUFBQTs7QUFsQmY7SUFxQkksMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxlQUFlO0lBQ2YsZUFBZTtJQUNmLGtCQUFrQjtJQUVsQixjQUFjO0lBQ2QseUJBQXlCLEVBQUE7O0FBSTdCO0VBQ0ksd0JBQXdCLEVBQUE7O0FBSTVCO0VBQ0ksd0JBQXdCLEVBQUE7O0FBRzVCO0VBQ0ksd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksWUFBWTtFQUNaLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSx3QkFBd0IsRUFBQTs7QUFHNUI7RUFDSSx3QkFBd0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2dyb3VwLWNoYXQvZ3JvdXAtY2hhdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBIZWFkZXIgU3R5bGVzXG5pb24tdGl0bGV7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLy9NYWluIFN0eWxlc1xuXG4ubWFpbntcbiAgICBtYXJnaW46MTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTIwcHg7XG59XG5cbi8vQ2hhdCBTdHlsZXNcblxuLy9SZWNlaXZlZCBNZXNzYWdlIFN0eWxlc1xuLy8gLmltZy1jb250YWluZXJ7XG4vLyAgICAgbWF4LXdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XG4vLyB9XG5cbi8vIC5zZW5kZXItcGhvdG97XG4vLyAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuLy8gICAgIG1hcmdpbi10b3A6MjBweDtcbi8vIH1cblxuLy8gLm1lc3NhZ2UtYnViYmxlLXJlY2VpdmVkLWNvbnRhaW5lcntcbi8vICAgICBtYXJnaW46IDIwcHggMTVweCAwcHggMTBweDtcbi8vIH1cblxuLy8gLm1lc3NhZ2UtYnViYmxlLXJlY2VpdmVke1xuLy8gICAgIGJhY2tncm91bmQ6ICNGMUYxRjE7XG4vLyAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4vLyAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XG4vLyAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbi8vICAgICBwYWRkaW5nOiAxNXB4O1xuLy8gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vIH1cblxuLy8gLnNlbmRlci1uYW1le1xuLy8gICAgIGNvbG9yOiAjN0E4QUEwO1xuLy8gICAgIG1hcmdpbjogMDtcbi8vIH1cblxuLy8gLnJlY2VpdmVkLW1lc3NhZ2V7XG4vLyAgICAgY29sb3I6IzQ3NTI1NTtcbi8vICAgICBtYXJnaW46IDA7XG4vLyB9XG5cbi8vIC5tZXNzYWdlLXRpbWV7XG4vLyAgICAgZm9udC1zaXplOiAxMHB4O1xuLy8gICAgIGNvbG9yOiAjN0E4QUEwO1xuLy8gICAgIG1hcmdpbjogNXB4O1xuLy8gfVxuXG4udXNlci1pY29ue1xuICAgIG1hcmdpbjogMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG59XG5cbi5idWJibGUtY29udGFpbmVye1xuICAgIG92ZXJmbG93OiBhdXRvXG59XG5cbi5tZXNzYWdlLXJlY2VpdmVkLWZsZXgtYm94e1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaW1nLWNvbnRhaW5lci1yZWNlaXZlZC1mbGV4e1xuICAgIG1hcmdpbi1yaWdodDoxNXB4O1xufVxuXG4uc2VuZGVyLXBob3RvLWZsZXh7XG4gICAgbWF4LXdpZHRoOiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG59XG5cbi5tZXNzYWdlLWJ1YmJsZS1yZWNlaXZlZC1mbGV4LWNvbnRhaW5lcntcbiAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICBtaW4td2lkdGg6IDc1cHg7XG59XG5cbi5zZW5kZXItbmFtZXtcbiAgICBjb2xvcjogIzdBOEFBMDtcbiAgICBtYXJnaW46IDA7XG59XG4ubWVzc2FnZS1idWJibGUtcmVjZWl2ZWQtZmxleHtcbiAgICBiYWNrZ3JvdW5kOiAjRjFGMUYxO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgLy8gcGFkZGluZzogMTVweDtcbiAgICBwYWRkaW5nOiA5cHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbn1cblxuLm1lc3NhZ2UtYnViYmxlLXJlY2VpdmVkLWZsZXgtbG9uZ3ByZXNze1xuICAgIGJhY2tncm91bmQ6ICNhOWE5YTk7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgICAvLyBwYWRkaW5nOiAxNXB4O1xuICAgIHBhZGRpbmc6IDlweDtcbn1cblxuLm1lc3NhZ2UtYnViYmxlLXJlY2VpdmVkLWZsZXgtcmVwb3J0ZWR7XG4gICAgYmFja2dyb3VuZDogI0YxRjFGMTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIC8vIHBhZGRpbmc6IDE1cHg7XG4gICAgcGFkZGluZzogOXB4O1xufVxuXG5cblxuLnJlY2VpdmVkLW1lc3NhZ2UtZmxleHtcbiAgICBtYXJnaW46IDA7XG4gICAgY29sb3I6ICM0NzUyNTU7XG59XG5cbi5yZXBseS1idXR0b257XG4gICAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4ubWVzc2FnZS10aW1le1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBjb2xvcjogIzdBOEFBMDtcbiAgICBtYXJnaW46IDVweDtcbn1cblxuXG5cbi8vU2VudCBNZXNzYWdlIFN0eWxlc1xuXG4ubWVzc2FnZS1zZW50LWZsZXgtYm94e1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5mbGV4LWJveC1maXh7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG59XG5cbi8vIC5mbGV4LWJveC1maXggLm1lc3NhZ2UtdGltZXtcbi8vICAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XG4vLyB9XG5cbi5pbWctY29udGFpbmVyLXNlbnQtZmxleHtcbiAgICBtYXJnaW4tbGVmdDoxNXB4O1xufVxuXG4uc2VuZGVyLXBob3RvLWZsZXh7XG4gICAgbWF4LXdpZHRoOiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLm1lc3NhZ2UtYnVibGUtc2VudC1mbGV4e1xuICAgIGJhY2tncm91bmQ6ICMwMDVEREQ7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIC8vIHBhZGRpbmc6IDE1cHg7XG4gICAgcGFkZGluZzogOXB4O1xuICAgIG1heC13aWR0aDogOTAlO1xufVxuXG4uc2VudC1tZXNzYWdlLWZsZXh7XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnJlcGx5LWJ1dHRvbntcbiAgICBmb250LXNpemU6IDIycHg7XG59XG5cbi8vSFIgc3R5bGVzXG4uaHItdGV4dCB7XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3V0bGluZTogMDtcbiAgYm9yZGVyOiAwO1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAxLjVlbTtcbiAgb3BhY2l0eTogLjU7XG4gICY6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICAvLyB1c2UgdGhlIGxpbmVhci1ncmFkaWVudCBmb3IgdGhlIGZhZGluZyBlZmZlY3RcbiAgICAvLyB1c2UgYSBzb2xpZCBiYWNrZ3JvdW5kIGNvbG9yIGZvciBhIHNvbGlkIGJhclxuICAgIGJhY2tncm91bmQ6ICNFMkUyRTI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxcHg7XG4gIH1cbiAgJjphZnRlciB7XG4gICAgY29udGVudDogYXR0cihkYXRhLWNvbnRlbnQpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtZmFtaWx5OiAnYXZlbmlyJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcGFkZGluZzogMCAuNWVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICAvLyB0aGlzIGlzIHJlYWxseSB0aGUgb25seSB0cmlja3kgcGFydCwgeW91IG5lZWQgdG8gc3BlY2lmeSB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgY29udGFpbmVyIGVsZW1lbnQuLi5cbiAgICBjb2xvcjogIzgxODA3ODtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZhO1xuICB9XG59XG5cbi5jaGF0Ym94LXdyYXBwZXIge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbn1cblxuXG4udHlwZS1tZXNzYWdlLWNvbnRhaW5lciAucHJldmlld3sgXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xufVxuXG4uYWRkZWQtbmV3LWNvbnRhY3R7XG4gICAgYmFja2dyb3VuZDogbGlnaHRza3libHVlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG59XG5cbi5hZGRlZC1uZXctY29udGFjdC1jb250YWluZXJ7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgbWluLXdpZHRoOiA3NXB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmFkZGVkLW5ldy1jb250YWN0LWNvbnRhaW5lciBwe1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5wcmV2aWV3IGlvbi1jaGlwIHtcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wcmV2aWV3IGlvbi1jaGlwIGlvbi1pY29uIHtcbiAgICBtYXJnaW46IHVuc2V0ICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/group-chat/group-chat.page.ts":
/*!***********************************************!*\
  !*** ./src/app/group-chat/group-chat.page.ts ***!
  \***********************************************/
/*! exports provided: GroupChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupChatPage", function() { return GroupChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _shared_group_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/group.service */ "./src/app/shared/group.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
/* harmony import */ var _group_details_group_details_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../group-details/group-details.page */ "./src/app/group-details/group-details.page.ts");
/* harmony import */ var ngx_linkifyjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-linkifyjs */ "./node_modules/ngx-linkifyjs/esm2015/ngx-linkifyjs.js");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_contacts_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../services/contacts.service */ "./src/app/services/contacts.service.ts");
/* harmony import */ var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ionic-native/contacts/ngx */ "./node_modules/@ionic-native/contacts/ngx/index.js");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/ngx/index.js");





















// import { LongPressModule } from 'ngx-long-press';
// import { LongPressModule } from 'ionic-long-press';







const STORAGE_KEY = 'my_files';
let GroupChatPage = class GroupChatPage {
    constructor(formBuilder, groupService, storage, router, route, sanitizer, file, actionSheetCtrl, transfer, loadingCtrl, imagePicker, navCtrl, 
    // public navParams: NavParams,
    toastCtrl, camera, modalCtrl, webview, platform, filePath, ref, fileChooser, http, androidPermissions, socket, modalController, translate, alertController, helper, location, contactsService, linkifyService, contacts, actionSheetController, clipboard) {
        this.formBuilder = formBuilder;
        this.groupService = groupService;
        this.storage = storage;
        this.router = router;
        this.route = route;
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
        this.alertController = alertController;
        this.helper = helper;
        this.location = location;
        this.contactsService = contactsService;
        this.linkifyService = linkifyService;
        this.contacts = contacts;
        this.actionSheetController = actionSheetController;
        this.clipboard = clipboard;
        this.longpress = false;
        // longpressclass = ["message-bubble-received-flex"];
        this.lang = 'EN';
        this.idval = "";
        this.adminidval = ""; // User ID
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
        this.showBlock = false;
        this.fileArray = [];
        this.fileSourceArray = [];
        this.savedContact = true;
        this.findMatch = (memberid, messageFor) => {
            let found = JSON.stringify(messageFor).includes(`"memberid":"${memberid}"`);
            // console.log('HAI', found);
            return found ? found : false;
        };
        this.storage.get('language')
            .then(lang => {
            if (lang) {
                this.lang = lang;
            }
        });
        this.storage.get('mobile')
            .then(mobile => {
            if (mobile) {
                this.mobile = mobile;
            }
        });
        if (this.filtered == false) {
            console.log('Group-Chat-Page');
            this.sub = this.route.params.subscribe(params => {
                this.id = params['id'];
                // alert(this.id);
            });
            this.storage.get('id').then((val) => {
                this.adminidval
                    = val;
                // console.log(this.adminidval);
                this.chat_room = this.id;
                this.socket.connect();
                // console.log(this.chat_room);
                this.temp_name = this.adminidval;
                // console.log(name)
                this.socket.emit('set-name', this.temp_name);
                this.chatData();
                this.socket.fromEvent('message-' + this.chat_room).subscribe((message) => {
                    // console.log('MESSAGE', message);
                    this.chatData();
                    var read_all = {
                        id: this.id,
                        user_id: this.adminidval
                    };
                    this.groupService.putChatReadAll(read_all)
                        .subscribe(read => {
                        // console.log("READ", read);
                    });
                    return true;
                });
                var read_all = {
                    id: this.id,
                    user_id: this.adminidval
                };
                // console.log(read_all);
                this.groupService.putChatReadAll(read_all)
                    .subscribe(read => {
                    // console.log("READ", read);
                });
            });
            this.storage.get('name').then((val2) => {
                this.adminname
                    = val2;
                // console.log('id', val2);
            });
            this.groupform = this.formBuilder.group({
                message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\S*$/)]],
                adminid: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                adminname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            });
        }
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.scrollToBottom(); // For messsages already present
        this.messageContainers.changes.subscribe((list) => {
            this.scrollToBottom(); // For messages added later
        });
    }
    scrollToBottom() {
        try {
            console.log('scrollToBottom called');
            this.window.nativeElement.top = this.window.nativeElement.scrollHeight;
        }
        catch (err) {
            console.log('SCROLL ERROR', err);
        }
    }
    noSpaceValidator() {
        console.log(this.groupform.value.message);
        if (this.groupform.value.message.trim() == 0) {
            return false;
            console.log("false");
        }
        else {
            return true;
            console.log("true");
        }
    }
    onSubmit() {
        console.log(this.images);
        console.log(this.images.length);
        if ((!this.platform.is('ios') && !this.platform.is('android')) && this.images.length) {
            this.uploading = true;
            let new_name = this.createFileName(this.images[0].name);
            let formData = new FormData();
            formData.append('image', this.images[0].filePath, new_name);
            this.uploadFileData(formData, new_name);
        }
        else {
            console.log(this.groupform.value);
            if (this.groupform.value.message && !this.docs.length && !this.images.length) {
                if (this.noSpaceValidator() == true) {
                    let file_message = this.groupform.value;
                    file_message.messageBy = this.adminidval;
                    this.findOthers()
                        .then(val => {
                        console.log(val);
                        file_message.messageFor = val;
                        console.log('OTHERS', file_message);
                        this.cleanUpload(file_message);
                    });
                }
                else {
                    alert("Only spaces not allowed");
                }
            }
            if (this.platform.is('ios') || this.platform.is('android')) {
                this.startUpload();
            }
        }
        // }
        // else{
        // }
    }
    longPress(itt) {
        console.log("I AM LONG PRESSED");
        this.longpress = true;
        // this.longpressclass[itt] = "message-bubble-received-flex-longpress";
        console.log(this.longpress[itt]);
        this.reportAlert(itt);
    }
    reportAlert(itt) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let value = this.translate.instant(['Report_Message', 'Report_confirm', 'cancel', 'Report'], { value: this.lang });
            const alert = yield this.alertController.create({
                header: value.Report_Message,
                message: value.Report_confirm,
                buttons: [
                    {
                        text: value.cancel,
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel: blah');
                            // this.longpressclass[itt] = "message-bubble-received-flex";
                        }
                    }, {
                        text: value.Report,
                        role: 'okay',
                        handler: () => {
                            console.log('Confirm Okay');
                            // this.longpressclass[itt] = "message-bubble-received-flex-reported";
                            this.presentToast("This_feed_has_been_reported");
                        }
                    }
                ]
            });
            yield alert.present();
            alert.onDidDismiss().then((res) => {
                console.log(res);
                if (res.role == 'cancel') {
                    // this.longpressclass[itt] = "message-bubble-received-flex"
                }
                if (res.role == 'okay') {
                    // this.longpressclass[itt] = "message-bubble-received-flex-reported"
                }
            });
        });
    }
    deleteAlert(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let value = this.translate.instant(['Delete_Message', 'Delete_confirm', 'cancel', 'Delete'], { value: this.lang });
            const alert = yield this.alertController.create({
                header: value.Delete_Message,
                message: value.Delete_confirm,
                buttons: [
                    {
                        text: value.cancel,
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel: blah');
                            // this.longpressclass[itt] = "message-bubble-received-flex";
                        }
                    }, {
                        text: value.Delete,
                        role: 'okay',
                        handler: () => {
                            console.log('Confirm Okay');
                            this.deleteChat(id)
                                .then(res => {
                                this.presentToast("The chat has been deleted");
                                this.chatData();
                            })
                                .catch(err => { console.log(err); });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    deleteChat(id) {
        return new Promise((resolve, reject) => {
            var body = { id: this.id, chat_id: id };
            this.groupService.deleteChat(body).subscribe(deleted => { resolve(true); }, err => { reject(err); });
        });
    }
    chatData() {
        console.log("CHAT DATA CALLED");
        this.groupService.getChat(this.id).subscribe((result) => {
            var res = result;
            console.log('RES', res);
            if (res.memberData.length == 2) {
                var name = this.contactsService.getContactName(res.memberData.find(o => o._id != this.adminidval)._id);
                // this.groupService.selectedGroup = name ? name : res.memberData.find(o=>o._id != this.adminidval).mobile;
                console.log(name);
                if (name) {
                    this.groupService.selectedGroup = name;
                }
                else {
                    this.groupService.selectedGroup = res.memberData.find(o => o._id != this.adminidval).mobile;
                    this.savedContact = false;
                }
            }
            else {
                this.groupService.selectedGroup = res['name'];
            }
            this.idval = res['_id'];
            this.groupService.groups = res['chats'];
            this.data = res;
            this.helper.getChatstatus(res['chats'], res.members)
                .then(status => {
                console.log('STATUS', status);
                if (status) {
                    this.showBlock = true;
                }
            });
            this.findAdmin().then((res) => {
                console.log(res);
                this.group_admin_id = res[0].memberid;
                console.log(this.group_admin_id);
                console.log(this.adminidval);
            });
            if (res['chats'].length) {
                console.log('CHAT GROUPS', this.groupService.groups);
                res.members.length == 2 ? this.getImagePath(res.memberData) : this.img_src = res.avatar;
                this.checkSources(res['chats']);
                this.members = res.memberData;
                this.ref.detectChanges();
                this.contentArea.scrollToBottom();
                this.loadingChats = false;
            }
            else {
                this.loadingChats = false;
            }
        });
    }
    getImagePath(members) {
        let other_member = members.find(element => {
            if (element._id != this.adminidval) {
                console.log('milla');
                console.log(element);
                this.img_src = element.avatar;
                console.log(this.img_src);
            }
        });
        console.log(other_member);
    }
    addmember(val) {
        this.router.navigate(['home/tabs/tab1/creategroup/addmember/' + val]);
    }
    checkAdmin() {
        return new Promise((resolve, reject) => {
            var result = this.data.members.filter(m => m.memberid == this.adminidval);
            console.log('RESULT', result);
            resolve(result);
        });
    }
    findAdmin() {
        return new Promise((resolve, reject) => {
            var result = this.data.members.filter(m => m.admin == true);
            resolve(result);
        });
    }
    findOthers() {
        return new Promise((resolve, reject) => {
            let a = this.data.members;
            let b = [];
            a.splice(a.findIndex(e => e.memberid == this.adminidval), 1);
            a.forEach(element => {
                b.push(element.memberid);
            });
            // var result = this.data.members.filter(m => m.admin == true)
            resolve(b);
        });
    }
    reset() {
        this.groupform.controls['message'].reset();
    }
    sharedvalue() {
    }
    isDifferentDay(messageIndex) {
        if (messageIndex === 0)
            return true;
        const d1 = new Date(this.allMessages[messageIndex - 1].timeStamp);
        const d2 = new Date(this.allMessages[messageIndex].timeStamp);
        return (d1.getFullYear() !== d2.getFullYear() ||
            d1.getMonth() !== d2.getMonth() ||
            d1.getDate() !== d2.getDate());
    }
    goToVideoChatPage() {
        console.log('Navigating to Video Chat Page');
        console.log(this.chat_room);
        if (this.data.members.length == 2) {
            var body = {
                members: [this.data.memberData.find(o => o._id != this.adminidval)._id],
                group_data: this.data,
                group_name: this.data.name,
                type: 'video'
            };
            console.log('BODY', body);
            this.groupService.postVideoCall(body)
                .subscribe(data => {
                this.router.navigate(['video-chat/' + this.chat_room]);
            });
        }
        else {
            var extra = {
                queryParams: {
                    special: JSON.stringify({
                        room_id: this.chat_room,
                        video: 1
                    })
                }
            };
            this.router.navigate(['create-video-chat'], extra);
        }
    }
    goToAudioCallPage() {
        if (this.data.members.length == 2) {
            var body = {
                members: [this.data.memberData.find(o => o._id != this.adminidval)._id],
                group_data: this.data,
                group_name: this.data.name,
                type: 'audio'
            };
            console.log('BODY', body);
            this.groupService.postVideoCall(body)
                .subscribe(data => {
                this.router.navigate(['audio-call/' + this.chat_room]);
            });
        }
        else {
            var extra = {
                queryParams: {
                    special: JSON.stringify({
                        room_id: this.chat_room,
                        video: 0
                    })
                }
            };
            this.router.navigate(['create-video-chat'], extra);
        }
    }
    /* ONLINE FIX */
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
                    this.ref.detectChanges();
                }));
            });
            // const toast = await this.toastCtrl.create({
            //     message: text,
            //     position: 'bottom',
            //     duration: 3000
            // });
            // await toast.present();
        });
    }
    selectImage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.platform.is('ios') && !this.platform.is('android')) {
                document.getElementById('image').click();
            }
            else {
                this.helper.selectImage()
                    .then((imgResponse) => {
                    console.log('IMAGE RESPONSE', imgResponse);
                    this.images = imgResponse.images;
                    this.docs = imgResponse.docs;
                    this.currentFileType = 'image';
                    console.log(this.images);
                });
            }
        });
    }
    selectVideoFromGallery() {
        if (!this.platform.is('ios') && !this.platform.is('android')) {
            document.getElementById('video').click();
        }
        else {
            this.helper.selectVideoFromGallery()
                .then((videoResponse) => {
                console.log('VIDEO RESPONSE', videoResponse);
                this.images = videoResponse.images;
                this.docs = videoResponse.docs;
                this.currentFileType = 'video';
            });
        }
    }
    //   async selectImage() {
    //     if(!this.platform.is('ios') && !this.platform.is('android')){
    //       console.log('desktop')
    //       document.getElementById('image').click();
    //     }
    //     else{
    //       const actionSheet = await this.actionSheetCtrl.create({
    //           header: "Select Image source",
    //           buttons: [{
    //                   text: 'Load from Library',
    //                   icon: 'ios-grid',
    //                   handler: () => {
    //                       this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
    //                   }
    //               },
    //               {
    //                   text: 'Use Camera',
    //                   icon: 'camera',
    //                   handler: () => {
    //                       this.takePicture(this.camera.PictureSourceType.CAMERA);
    //                   }
    //               },
    //               {
    //                   icon: 'close',
    //                   text: 'Cancel',
    //                   role: 'cancel'
    //               }
    //           ]
    //       });
    //       await actionSheet.present();
    //     }
    //   }
    //   takePicture(sourceType: PictureSourceType) {
    //     var options: CameraOptions = {
    //         quality: 65,
    //         sourceType: sourceType,
    //         saveToPhotoAlbum: false,
    //         correctOrientation: true
    //     };
    //     this.camera.getPicture(options).then(imagePath => {
    //         this.startProcess(imagePath, 'image', sourceType);
    //     });
    //   }
    // selectVideoFromGallery() {
    //   if(!this.platform.is('ios') && !this.platform.is('android')){
    //     console.log('desktop')
    //     document.getElementById('video').click();
    //   }
    //   else {
    //     const options: CameraOptions = {
    //       quality: 65,
    //       destinationType: this.camera.DestinationType.FILE_URI,
    //       mediaType: this.camera.MediaType.VIDEO,
    //       sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    //     }
    //     this.camera.getPicture(options).then(imagePath => {
    //       this.startProcess(imagePath, 'video', this.camera.PictureSourceType.PHOTOLIBRARY);    
    //     });                  
    //   }
    // }
    // startProcess(file, type, sourceType){
    //   this.docs = [];
    //   this.images = [];
    //   console.log("PROCESS STARTED");
    //   this.currentFileType = type;
    //   if ((this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) || (this.platform.is('android') && type == 'doc')) {
    //         console.log("FILE: ", file)
    //         let path = file.toString();
    //         if(type != 'doc'){
    //           file = path.indexOf('file://') > -1 ? file : 'file://' + file.toString() ;
    //         }
    //         this.filePath.resolveNativePath(file)
    //             .then(filePath => {
    //                 console.log("FILE PATH", filePath);
    //                 let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
    //                 let currentName = new String();
    //                 if(type === 'image'){
    //                   currentName = file.substring(file.lastIndexOf('/') + 1, file.lastIndexOf('?'));
    //                 }
    //                 else {
    //                   currentName = filePath.substring(filePath.lastIndexOf('/') + 1);
    //                 }
    //                 this.copyFileToLocalDir(correctPath, currentName, this.createFileName(filePath.substring(filePath.lastIndexOf('/') + 1)));
    //             }); 
    //     } else {
    //         var currentName = file.substr(file.lastIndexOf('/') + 1);
    //         var correctPath = file.substr(0, file.lastIndexOf('/') + 1);
    //         this.copyFileToLocalDir(correctPath, currentName, this.createFileName(file.lastIndexOf('/') + 1));
    //     }
    // }
    createFileName(fileName) {
        let ext = this.getFileExtension(fileName);
        console.log("EXT", ext);
        var d = new Date(), n = d.getTime(), newFileName = n + '.' + ext;
        console.log("FILE NAME", fileName);
        return newFileName;
    }
    //   copyFileToLocalDir(namePath, currentName, newFileName) {
    //     this.checkPermissions().then(() => {
    //       this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
    //         this.updateStoredFiles(newFileName, currentName);
    //       }, error => {
    //           console.log("COULD NOT STORE FILE", error)
    //           // let value = this.translate.instant(['Error_while_storing_file'], { value: this.lang })
    //           this.presentToast("Error_while_storing_file");
    //       });
    //     })
    //   }
    //   updateStoredFiles(name, oldName) {
    //     this.storage.get(STORAGE_KEY).then(files => {
    //         let arr = JSON.parse(files);
    //         if (!arr) {
    //             let newFiles = [name];
    //             this.storage.set(STORAGE_KEY, JSON.stringify(newFiles));
    //         } else {
    //             arr.push(name);
    //             this.storage.set(STORAGE_KEY, JSON.stringify(arr));
    //         }
    //         let filePath = this.file.dataDirectory + name;
    //         //IF NOT DOC
    //         if(this.currentFileType != 'doc'){
    //           let resPath = this.pathForImage(filePath);
    //           let newEntry = {
    //               name: name,
    //               path: resPath,
    //               filePath: filePath,
    //               displayName: oldName
    //           };
    //           this.images = [newEntry, ...this.images];
    //           this.ref.detectChanges(); // trigger change detection cycle
    //           console.log("NEW IMGS", this.images)
    //         }
    //         //IF DOC
    //         else {
    //           let newEntry = {
    //             name: name,
    //             filePath: filePath
    //           };
    //           this.docs = [newEntry, ...this.docs];
    //           console.log("NEW DOCS", this.docs)
    //         }
    //     });
    //   }
    pathForImage(img) {
        if (img === null) {
            return '';
        }
        else {
            let converted = this.webview.convertFileSrc(img);
            return converted;
        }
    }
    deleteFile(fileEntry, position) {
        this.images.splice(position, 1);
        this.storage.get(STORAGE_KEY).then(images => {
            const arr = JSON.parse(images);
            const filtered = arr.filter(name => name != fileEntry.name);
            this.storage.set(STORAGE_KEY, JSON.stringify(filtered));
            // tslint:disable-next-line: prefer-const
            let correctPath = fileEntry.filePath.substr(0, fileEntry.filePath.lastIndexOf('/') + 1);
            this.file.removeFile(correctPath, fileEntry.name).then(res => {
                // let value = this.translate.instant(['File_removed'], { value: this.lang })
                this.presentToast("File_removed");
            });
        });
    }
    startUpload() {
        this.uploading = true;
        console.log(this.uploading);
        console.log('STARTED UPLOAD');
        if (this.images) {
            this.images.forEach(imgEntry => {
                this.getFileFromLocal(imgEntry.filePath);
            });
        }
        if (this.docs) {
            this.docs.forEach(docEntry => {
                this.getFileFromLocal(docEntry.filePath);
            });
        }
    }
    getFileFromLocal(entry) {
        this.file.resolveLocalFilesystemUrl(entry)
            .then(entry => {
            entry.file(file => this.readFile(file));
        })
            .catch(err => {
            // let value = this.translate.instant(['Error_while_reading_file'], { value: this.lang })
            this.presentToast("Error_while_reading_file");
        });
    }
    readFile(file) {
        console.log("FILE TYPE", file.type);
        const reader = new FileReader();
        reader.onloadend = () => {
            const formData = new FormData();
            const fileBlob = new Blob([reader.result], {
                type: file.type
            });
            formData.append('image', fileBlob, file.name);
            this.uploadFileData(formData, file.name);
        };
        reader.readAsArrayBuffer(file);
    }
    uploadFileData(formData, name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const uploadCall = this.http.post("http://198.12.92.202:5000/upload/single-file", formData)
                .subscribe((res) => {
                console.log(res);
                console.log(res['error']);
                if (res['error']) {
                    // let value = this.translate.instant(['File_upload_failed'], { value: this.lang })
                    this.presentToast("File_upload_failed");
                }
                else {
                    // let value = this.translate.instant(['File_upload_success'], { value: this.lang })
                    this.presentToast("File_upload_success");
                    console.log("SUCCESS IS WORKING");
                    let file_message = this.groupform.value;
                    file_message.messageBy = this.adminidval;
                    file_message.attachment = name;
                    file_message.file = true;
                    file_message.fileType = this.currentFileType;
                    this.findOthers()
                        .then(val => {
                        console.log(val);
                        file_message.messageFor = val;
                        console.log('OTHERS', file_message);
                        this.cleanUpload(file_message);
                    });
                }
            }, err => {
                console.log("UPLOAD FAILED", err);
                this.uploading = false;
                this.images = [];
                this.docs = [];
            });
        });
    }
    cleanUpload(file_message) {
        console.log("FILE MESSAGE", file_message);
        this.groupService.putChat(file_message, this.id).subscribe((res) => {
            this.uploading = false;
            this.images = [];
            this.docs = [];
            console.log('EMITTING');
            var socket_data = {
                text: file_message.message,
                room: this.chat_room,
                sent_from: this.temp_name,
                user_id: this.adminidval,
                mobile: this.mobile,
                type: 1,
                messageFor: file_message.messageFor
            };
            console.log('Socket Data', socket_data);
            this.socket.emit('send-message', socket_data);
            this.ref.detectChanges();
            this.reset();
            this.chatData();
            this.currentFileType = new String();
            if (file_message.file == true && file_message.message.length) {
                delete file_message["attachment"];
                delete file_message["fileType"];
                delete file_message["file"];
                this.cleanUpload(file_message);
            }
        });
    }
    getExt(entry) {
        var file = entry.path.toString();
        var splits = file.split('.');
        var ext = splits[(splits.length - 1)];
        var isnum = /^\d+$/.test(ext);
        if (ext == 'jpg' || ext == 'jpeg' || ext == 'png' || ext == 'gif' || ext == '' || isnum == true || file.includes('data:image')) {
            return 'image';
        }
        else if (ext == 'doc' || ext == 'docs' || ext == 'docx' || ext == 'pdf' || ext == 'txt' || ext == 'xlsx') {
            return 'doc';
        }
        else {
            return 'video';
        }
    }
    getFileExtension(entry) {
        var file = entry.toString();
        var splits = file.split('.');
        var ext = splits[(splits.length - 1)];
        // console.log(ext)
        return ext;
    }
    // async selectAFile() {
    //   if(!this.platform.is('ios') && !this.platform.is('android')){
    //     console.log('desktop')
    //     document.getElementById('file').click();
    //   }
    //   else{
    //     this.fileChooser.open({ "mime": "application/pdf,application/msword" }).then(fileURI => {
    //       this.startProcess(fileURI, 'doc', null);
    //     });
    //   }
    // }
    selectAFile() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // console.log('Select File')
            this.helper.selectAFile()
                .then((fileResponse) => {
                console.log('File RESPONSE', fileResponse);
                this.images = fileResponse.images;
                this.docs = fileResponse.docs;
                this.currentFileType = 'doc';
                this.ref.detectChanges();
            });
        });
    }
    deleteDoc(pos) {
        this.docs.splice(pos, 1);
    }
    checkPermissions() {
        console.log('Requesting Android Permissions');
        return new Promise((resolve, reject) => {
            this.androidPermissions.requestPermissions(this.ANDROID_PERMISSIONS)
                .then(() => {
                const promisesArray = [];
                this.ANDROID_PERMISSIONS.forEach((permission) => {
                    console.log('Checking ', permission);
                    promisesArray.push(this.androidPermissions.checkPermission(permission));
                });
                Promise.all(promisesArray).then((responses) => {
                    let allHasPermissions = true;
                    responses.forEach((response, i) => {
                        allHasPermissions = response.hasPermission;
                        if (!allHasPermissions) {
                            reject(new Error('Permissions denied: ' + this.ANDROID_PERMISSIONS[i]));
                        }
                    });
                    resolve();
                }).catch((err) => { console.log(err); });
            })
                .catch((err) => console.error('Error requesting permissions: ', err));
        });
    }
    viewImage(src) {
        console.log('viewImage', src);
        this.router.navigate(['view-image', src]);
    }
    viewVideo(src) {
        console.log('viewVideo', src);
        this.router.navigate(['view-video', src]);
    }
    findMemberName(id) {
        var member = this.members.filter(m => m._id == id);
        return member.length ? member[0].name : '';
    }
    findMemberAvatar(id) {
        var member = this.members.filter(m => m._id == id);
        return (member.length && member[0].avatar) ? 'http://198.12.92.202/public/uploads/' + member[0].avatar : '';
    }
    detailsPage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.data.members.length != 2) {
                this.filtered = false;
                const modal = yield this.modalController.create({
                    component: _group_details_group_details_page__WEBPACK_IMPORTED_MODULE_19__["GroupDetailsPage"],
                    componentProps: {
                        'group_id': this.id
                    }
                });
                modal.onWillDismiss().then((data) => {
                    if (data.data && data.data.members) {
                        console.log('MEMBERS', data.data.members);
                        this.filtered_users = data.data.members;
                        this.filtered = true;
                        console.log(this.filtered);
                        this.ref.detectChanges();
                    }
                });
                return yield modal.present();
            }
            else {
                console.log('only 2 members');
            }
        });
    }
    // getFileFromBrowser(event: Event, type){
    //   this.images = [];
    //   console.log(event)
    //   console.log(event.target['files'][0])
    //   let fileList: FileList = event.target['files'];
    //   if(fileList.length > 0) {
    //       var file = fileList[0];
    //   }
    //   const reader = new FileReader();
    //   reader.onload = e => {
    //     let newEntry = {
    //       name: file.name,
    //       path: reader.result,
    //       filePath: file,
    //       displayName: file.name,
    //       type: type
    //     };
    //     if(type != 'doc'){
    //       this.images = [newEntry, ...this.images];
    //       this.currentFileType = type;
    //     }else if(type == 'doc'){
    //       this.startProcess(reader.result, 'doc', null);
    //     }
    //   };
    //   reader.readAsDataURL(file);
    // }
    acceptGroup() {
        this.helper.acceptGroup(this.idval)
            .then(accepted => {
            if (accepted)
                // this.chatData();
                this.showBlock = false;
            this.ref.detectChanges();
        })
            .catch(err => console.log('ACCEPT ERROR', err));
    }
    rejectGroup() {
        this.helper.rejectGroup(this.idval)
            .then(removed => {
            if (removed)
                this.router.navigate(['home/tabs/tab1']);
            this.ref.detectChanges();
        })
            .catch(err => console.log('REJECT ERROR', err));
    }
    checkSources(chats) {
        console.log(chats);
        if (chats.length) {
            var files = chats.filter(chat => chat.file == true);
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
                        ;
                    });
                });
            });
            // var other_chats = chats.filter(chat => (chat.messageBy && (chat.messageBy._id != this.adminidval)));
            chats.forEach((element, index) => {
                if (typeof element.messageBy != 'undefined' && (element.messageBy._id != this.adminidval)) {
                    var name = this.contactsService.getContactName(element.messageBy._id);
                    console.log(name);
                    this.groupService.groups[index].messageBy.name = name ? name : element.messageBy.mobile;
                }
                if (element.message) {
                    const linkifyoptions = {
                        events: {
                            click: function (e) {
                                alert('Link clicked!');
                                console.log('CLICKED');
                                console.log(e);
                            },
                            mouseover: function (e) {
                                alert('Link hovered!');
                            }
                        },
                        target: {
                            url: '_system'
                        }
                    };
                    element.message = this.linkifyService.linkify(element.message, linkifyoptions);
                }
            });
        }
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
    deleteLongPress(id) {
        this.deleteAlert(id);
    }
    addToContacts() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var memberData = this.data.memberData.find(o => o._id != this.adminidval);
            console.log('MEMBER DATA', memberData);
            var name = memberData.name;
            var splitted_name = name.split(' ');
            console.log(splitted_name);
            const alert = yield this.alertController.create({
                header: 'Add To Contacts',
                inputs: [
                    {
                        name: 'first_name',
                        label: 'First Name',
                        type: 'text',
                        value: splitted_name[0] ? splitted_name[0] : '',
                        placeholder: 'Placeholder 1'
                    },
                    {
                        name: 'last_name',
                        label: 'Last Name',
                        type: 'text',
                        value: splitted_name[1] ? splitted_name[1] : '',
                        placeholder: 'Enter Last Name'
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Ok',
                        handler: (res) => {
                            console.log(res);
                            console.log('Confirm Ok');
                            var contact = this.contacts.create();
                            const fullName = res.first_name + ' ' + res.last_name;
                            contact.name = new _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_24__["ContactName"](null, res.last_name ? res.last_name : '', res.first_name ? res.first_name : '');
                            contact.phoneNumbers = [new _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_24__["ContactField"]('mobile', memberData.mobile)];
                            contact.save().then(() => {
                                this.groupService.selectedGroup = fullName;
                                this.presentToast("Contact added Successfully");
                                this.contactsService.setUserId()
                                    .then(user => {
                                    this.contactsService.saveContacts()
                                        .then(saved => {
                                        this.contactsService.setContacts()
                                            .then(set => { });
                                    });
                                });
                            }, (error) => console.error('Error saving contact.', error));
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    myActions(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'What do you want to do',
                buttons: [{
                        text: 'Delete',
                        role: 'destructive',
                        icon: 'trash',
                        handler: () => {
                            this.deleteAlert(id);
                        }
                    }, {
                        text: 'Copy',
                        icon: 'copy',
                        handler: () => {
                            var chat = this.data.chats.find(c => c._id == id);
                            console.log(chat);
                            if (chat.message) {
                                console.log(chat.message);
                                this.clipboard.copy(chat.message);
                                this.presentToast("Copied to Clipboard");
                            }
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    othersActions(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'What do you want to do',
                buttons: [{
                        text: 'Report',
                        icon: 'trash',
                        handler: () => {
                            this.reportAlert(id);
                        }
                    }, {
                        text: 'Copy',
                        icon: 'copy',
                        handler: () => {
                            var chat = this.data.chats.find(c => c._id == id);
                            console.log(chat);
                            if (chat.message) {
                                console.log(chat.message);
                                this.clipboard.copy(chat.message);
                                this.presentToast("Copied to Clipboard");
                            }
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
};
GroupChatPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _shared_group_service__WEBPACK_IMPORTED_MODULE_7__["GroupService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _services_helper_service__WEBPACK_IMPORTED_MODULE_21__["HelperService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_22__["Location"] },
    { type: _services_contacts_service__WEBPACK_IMPORTED_MODULE_23__["ContactsService"] },
    { type: ngx_linkifyjs__WEBPACK_IMPORTED_MODULE_20__["NgxLinkifyjsService"] },
    { type: _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_24__["Contacts"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_25__["Clipboard"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"])
], GroupChatPage.prototype, "contentArea", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])("messageContainer"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
], GroupChatPage.prototype, "messageContainers", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('window', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GroupChatPage.prototype, "window", void 0);
GroupChatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-group-chat',
        template: __webpack_require__(/*! raw-loader!./group-chat.page.html */ "./node_modules/raw-loader/index.js!./src/app/group-chat/group-chat.page.html"),
        providers: [_shared_group_service__WEBPACK_IMPORTED_MODULE_7__["GroupService"], _services_helper_service__WEBPACK_IMPORTED_MODULE_21__["HelperService"]],
        styles: [__webpack_require__(/*! ./group-chat.page.scss */ "./src/app/group-chat/group-chat.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _shared_group_service__WEBPACK_IMPORTED_MODULE_7__["GroupService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
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
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _services_helper_service__WEBPACK_IMPORTED_MODULE_21__["HelperService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_22__["Location"],
        _services_contacts_service__WEBPACK_IMPORTED_MODULE_23__["ContactsService"],
        ngx_linkifyjs__WEBPACK_IMPORTED_MODULE_20__["NgxLinkifyjsService"],
        _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_24__["Contacts"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
        _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_25__["Clipboard"]])
], GroupChatPage);



/***/ })

}]);
//# sourceMappingURL=group-chat-group-chat-module-es2015.js.map