(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["test-group-test-group-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/test-group/test-group.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/test-group/test-group.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n        <ion-button routerLink=\"/home/tabs/tab1\">\n          <ion-icon class=\"back-button\" slot=\"icon-only\" name=\"md-arrow-back\"></ion-icon>\n        </ion-button>\n    </ion-buttons>\n    <ion-title routerLink=\"groupdetails\">\n       {{ groupService.selectedGroup }}  \n    </ion-title>\n    <ion-buttons slot=\"end\" size-xs=\"small\">\n        <ion-button (click)=\"addmember( idval )\">\n            <ion-icon slot=\"icon-only\"  name=\"md-add\"></ion-icon>\n          </ion-button>\n      <ion-button>\n        <ion-icon (click)=\"goToAudioCallPage()\" slot=\"icon-only\" name=\"md-call\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"goToVideoChatPage()\">\n        <ion-icon slot=\"icon-only\" name=\"md-videocam\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n\n<div class=\"main\">\n  <!-- Date or Time header -->\n  <!-- To change the text in the hr tag change 'data-content' attribute -->\n  <hr class=\"hr-text\" data-content=\"Yesterday\">\n\n\n  <!-- Chat Bubbles -->\n\n  <!-- <div class=\"message-received\">\n    <ion-row>\n      <ion-col size=\"1\" size-sm=\"2\" size-xs=\"2\" class=\"img-container\">\n        <img class=\"sender-photo\" src=\"assets/images/user.png\">\n      </ion-col>\n      <ion-col class=\"message-bubble-received-container\" size=\"9\">\n        <div class=\"message-bubble-received\">\n            <p class=\"sender-name\">Emma</p>\n            <p class=\"received-message\">The quick, brown fox jumps over a \n                lazy dog. DJs flock by when MTV \n                ax quiz prog. Junk MTV quiz</p>\n        </div>\n        <ion-row>\n          <span class=\"message-time\">13:05</span>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </div> -->\n  \n  \n\n\n  <!-- Sent Bubble -->\n   <!-- <div  *ngFor =\"let gp of groupService.groups \"> \n\n\n      <div class=\"message-received-flex-box\" id=\"1-container\" *ngIf = \"gp.adminid != adminidval && !gp.file\">\n          <div class=\"img-container-received-flex\">\n              <img class=\"sender-photo-flex\" src=\"assets/images/user.png\">\n          </div>\n\n          <div class=\"message-bubble-received-flex-container\">\n            <div class=\"message-bubble-received-flex\" id=\"1-bubble\">  \n              <p class=\"sender-name\">{{ gp.adminname }}</p>\n              <p class=\"received-message-flex\">{{ gp.messages }}</p>\n            </div>\n            <p class=\"message-time\">\n                {{gp.chattime|date: 'H:mm'  }}\n            </p>\n          </div>     \n  </div>\n\n  <div class=\"message-sent-flex-box\" *ngIf = \"gp.adminid != adminidval && gp.file == true\">\n      <div class=\"message-buble-sent-flex-image\">\n          <img *ngIf=\"gp.fileType == 'image' && gp.messages\" [src]=\"'http://198.12.92.202/public/uploads/'+ gp.messages\" height=\"200px\" width=\"200px\"> \n          <video *ngIf=\"gp.fileType == 'video' && gp.messages\" [src]=\"'http://198.12.92.202/public/uploads/' + gp.messages\"></video>\n      </div>\n  </div>\n\n  <div class=\"message-sent-flex-box\"  *ngIf = \"gp.adminid == adminidval && !gp.file\">\n      <div class=\"img-container-sent-flex\">\n          <img class=\"sender-photo-flex\" src=\"assets/images/user.png\">\n      </div>\n\n      <div class=\"message-buble-sent-flex\">\n          <p class=\"sent-message-flex\">{{ gp.messages }}</p>\n      </div>\n      <p class=\"message-time\">\n          {{gp.chattime|date: 'H:mm'  }}\n      </p>\n\n      <div class=\"reply-button-container-flex\">\n          <ion-button fill=\"clear\" color=\"dark\">\n              <ion-icon slot=\"icon-only\" name=\"ios-undo\" class=\"reply-button\"></ion-icon>\n          </ion-button>\n      </div>\n  </div>\n\n  <div class=\"message-sent-flex-box\" *ngIf = \"gp.adminid == adminidval && gp.file == true\">\n      <div class=\"message-buble-sent-flex-image\">\n          <img *ngIf=\"gp.fileType == 'image' && gp.messages\" [src]=\"'http://198.12.92.202/public/uploads/'+ gp.messages\" height=\"200px\" width=\"200px\"> \n          <video *ngIf=\"gp.fileType == 'video' && gp.messages\" [src]=\"'http://198.12.92.202/public/uploads/' + gp.messages\"></video>\n      </div>\n  </div>\n\n  <br>\n  </div>  -->\n  <br><br><br><br><br>\n  \n\n  <!-- Text Message Area -->\n  <!-- <div class=\"type-message-container\">\n    <ion-item *ngFor=\"let img of images; index as pos\" text-wrap>\n      <ion-thumbnail *ngIf=\"getExt(img) != 'video'\" slot=\"start\">\n        <ion-img [src]=\"img.path\"></ion-img>\n      </ion-thumbnail>\n      <ion-thumbnail *ngIf=\"getExt(img) == 'video'\" slot=\"start\">\n        <video [src]=\"img.path\" height=\"50\" [muted]=\"true\" preload=\"auto\" playsinline autoplay loop></video>\n      </ion-thumbnail>\n      <ion-label>\n        {{ img.displayName }}\n      </ion-label>\n      <ion-button *ngIf=\"uploading == false\" slot=\"end\" fill=\"clear\" (click)=\"deleteFile(img, pos)\">\n        <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n      </ion-button>\n      <ion-spinner *ngIf=\"uploading == true\" name=\"crescent\" color=\"primary\"></ion-spinner>\n    </ion-item>\n    <ion-item *ngFor=\"let doc of docs; index as pos\" text-wrap>\n      <ion-chip color=\"primary\">\n        <ion-icon name=\"attach\" color=\"primary\"></ion-icon>\n      </ion-chip>\n      <ion-label>\n        {{ doc.name}}\n      </ion-label>  \n      <ion-button *ngIf=\"uploading == false\" slot=\"end\" fill=\"clear\" (click)=\"deleteFile(doc, pos)\">\n        <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n      </ion-button>\n      <ion-spinner *ngIf=\"uploading == true\" name=\"crescent\" color=\"primary\"></ion-spinner>\n    </ion-item>\n    <form [formGroup]=\"groupform\" (ngSubmit)=\"onSubmit()\">\n    <ion-input type=\"text\"  formControlName=\"adminid\" value=\"{{ adminidval }}\" hidden></ion-input>\n    <ion-input type=\"text\"  formControlName=\"adminname\" value=\"{{ adminname }}\" hidden></ion-input>\n\n      <ion-item class=\"rounded\" lines=\"none\">\n          <ion-textarea placeholder=\"{{'Enter Message'|translate}}...\" rows=\"3\" (keyup.enter)=\"onSubmit()\" name=\"messages\" formControlName=\"messages\"></ion-textarea>\n      </ion-item>\n    \n      <div class=\"buttons-container\">\n          <ion-button (click)=\"selectAFile()\" fill=\"clear\">\n              <ion-icon slot=\"icon-only\" name=\"md-attach\" color=\"medium\"></ion-icon>\n          </ion-button>\n          \n          <ion-button (click)=\"selectVideoFromGallery()\" fill=\"clear\">\n              <ion-icon slot=\"icon-only\" name=\"md-videocam\" color=\"medium\"></ion-icon>\n          </ion-button>\n          \n          <ion-button (click)=\"selectImage()\" fill=\"clear\">\n              <ion-icon slot=\"icon-only\" name=\"md-camera\" color=\"medium\"></ion-icon>\n          </ion-button>\n\n          <ion-button fill=\"clear\" type=\"submit\">\n            <ion-icon slot=\"icon-only\" name=\"md-send\" color=\"primary\"></ion-icon>\n          </ion-button>\n      </div>\n    </form>\n \n  </div> -->\n\n</div>\n\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/test-group/test-group.module.ts":
/*!*************************************************!*\
  !*** ./src/app/test-group/test-group.module.ts ***!
  \*************************************************/
/*! exports provided: TestGroupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestGroupPageModule", function() { return TestGroupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _test_group_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test-group.page */ "./src/app/test-group/test-group.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _test_group_page__WEBPACK_IMPORTED_MODULE_6__["TestGroupPage"]
    }
];
var TestGroupPageModule = /** @class */ (function () {
    function TestGroupPageModule() {
    }
    TestGroupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_test_group_page__WEBPACK_IMPORTED_MODULE_6__["TestGroupPage"]]
        })
    ], TestGroupPageModule);
    return TestGroupPageModule;
}());



/***/ }),

/***/ "./src/app/test-group/test-group.page.scss":
/*!*************************************************!*\
  !*** ./src/app/test-group/test-group.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  text-align: left; }\n\n.main {\n  margin: 10px; }\n\n.bubble-container {\n  overflow: auto; }\n\n.message-received-flex-box {\n  display: -webkit-box;\n  display: flex; }\n\n.img-container-received-flex {\n  margin-right: 15px; }\n\n.sender-photo-flex {\n  max-width: 50px;\n  border-radius: 50%;\n  height: 40px;\n  width: 40px; }\n\n.message-bubble-received-flex-container {\n  max-width: 500px;\n  min-width: 75px; }\n\n.sender-name {\n  color: #7A8AA0;\n  margin: 0; }\n\n.message-bubble-received-flex {\n  background: #F1F1F1;\n  border-top-right-radius: 15px;\n  border-bottom-right-radius: 15px;\n  border-bottom-left-radius: 15px;\n  padding: 15px;\n  max-width: 500px; }\n\n.received-message-flex {\n  margin: 0;\n  color: #475255; }\n\n.reply-button {\n  font-size: 22px; }\n\n.message-time {\n  font-size: 10px;\n  color: #7A8AA0;\n  margin: 5px; }\n\n.message-sent-flex-box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n          flex-direction: row-reverse; }\n\n.img-container-sent-flex {\n  margin-left: 15px; }\n\n.sender-photo-flex {\n  max-width: 50px;\n  border-radius: 50%; }\n\n.message-buble-sent-flex {\n  background: #005DDD;\n  border-top-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  border-bottom-left-radius: 15px;\n  padding: 15px;\n  max-width: 500px; }\n\n.message-buble-sent-flex-image {\n  background: #005DDD;\n  border-top-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  border-bottom-left-radius: 15px;\n  padding: 5px;\n  width: 210px;\n  height: 210px; }\n\n.message-buble-sent-flex-image img {\n  border-top-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  border-bottom-left-radius: 15px; }\n\n.message-buble-sent-flex-image video {\n  min-width: 100%;\n  border-top-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  border-bottom-left-radius: 15px;\n  max-width: 200px;\n  max-height: 200px; }\n\n.sent-message-flex {\n  margin: 0;\n  color: white; }\n\n.reply-button {\n  font-size: 22px; }\n\n.hr-text {\n  line-height: 1em;\n  position: relative;\n  outline: 0;\n  border: 0;\n  color: black;\n  text-align: center;\n  height: 1.5em;\n  opacity: .5; }\n\n.hr-text:before {\n    content: '';\n    background: #E2E2E2;\n    position: absolute;\n    left: 0;\n    top: 50%;\n    width: 100%;\n    height: 1px; }\n\n.hr-text:after {\n    content: attr(data-content);\n    position: relative;\n    display: inline-block;\n    color: black;\n    font-family: 'avenir', sans-serif;\n    font-size: 12px;\n    padding: 0 .5em;\n    line-height: 1.5em;\n    color: #818078;\n    background-color: #fcfcfa; }\n\n.rounded {\n  border: 2px solid #E2E2E2;\n  --border-width: 0 0 0 0;\n  border-radius: 8px; }\n\n.type-message-container {\n  position: fixed;\n  bottom: -35px;\n  width: 95%; }\n\n.buttons-container {\n  text-align: right;\n  position: relative;\n  bottom: 45px;\n  z-index: 1000; }\n\n.buttons-container ion-button {\n  --padding-start:10px;\n  --padding-end:10px;\n  --padding-top: 5px;\n  --padding-bottom: 5px; }\n\n.buttons-container ion-icon {\n  padding: 0;\n  font-size: 18px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYmJveF9mcm9udGVuZC9zcmMvYXBwL3Rlc3QtZ3JvdXAvdGVzdC1ncm91cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBZ0IsRUFBQTs7QUFLcEI7RUFDSSxZQUNKLEVBQUE7O0FBNENBO0VBQ0ksY0FDSixFQUFBOztBQUVBO0VBQ0ksb0JBQVk7RUFBWixhQUFZLEVBQUE7O0FBR2hCO0VBQ0ksa0JBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUdmO0VBQ0ksZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxjQUFjO0VBQ2QsU0FBUyxFQUFBOztBQUViO0VBQ0ksbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsK0JBQStCO0VBQy9CLGFBQWE7RUFDYixnQkFBZ0IsRUFBQTs7QUFLcEI7RUFDSSxTQUFTO0VBQ1QsY0FBYyxFQUFBOztBQUdsQjtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxlQUFlO0VBQ2YsY0FBYztFQUNkLFdBQVcsRUFBQTs7QUFPZjtFQUNJLG9CQUFZO0VBQVosYUFBWTtFQUNaLDhCQUNKO0VBREksOEJBQ0o7VUFESSwyQkFDSixFQUFBOztBQUVBO0VBQ0ksaUJBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIsZ0NBQWdDO0VBQ2hDLCtCQUErQjtFQUMvQixhQUFhO0VBQ2IsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QixnQ0FBZ0M7RUFDaEMsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYSxFQUFBOztBQUdqQjtFQUNJLDRCQUE0QjtFQUM1QixnQ0FBZ0M7RUFDaEMsK0JBQStCLEVBQUE7O0FBR25DO0VBQ0ksZUFBZTtFQUNmLDRCQUE0QjtFQUM1QixnQ0FBZ0M7RUFDaEMsK0JBQStCO0VBQy9CLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxTQUFTO0VBQ1QsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGVBQWUsRUFBQTs7QUFJbkI7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsV0FBVyxFQUFBOztBQVJiO0lBVUksV0FBVztJQUdYLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFFBQVE7SUFDUixXQUFXO0lBQ1gsV0FBVyxFQUFBOztBQWxCZjtJQXFCSSwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZixlQUFlO0lBQ2Ysa0JBQWtCO0lBRWxCLGNBQWM7SUFDZCx5QkFBeUIsRUFBQTs7QUFLN0I7RUFDSSx5QkFBeUI7RUFDekIsdUJBQWU7RUFDZixrQkFDSixFQUFBOztBQUVBO0VBQ0ksZUFBZTtFQUNmLGFBQWE7RUFDYixVQUFVLEVBQUE7O0FBSWQ7RUFDSSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhLEVBQUE7O0FBRWpCO0VBQ0ksb0JBQWdCO0VBQ2hCLGtCQUFjO0VBQ2Qsa0JBQWM7RUFDZCxxQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxVQUFVO0VBQ1YsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGVzdC1ncm91cC90ZXN0LWdyb3VwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEhlYWRlciBTdHlsZXNcbmlvbi10aXRsZXtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4vL01haW4gU3R5bGVzXG5cbi5tYWlue1xuICAgIG1hcmdpbjoxMHB4XG59XG5cbi8vQ2hhdCBTdHlsZXNcblxuLy9SZWNlaXZlZCBNZXNzYWdlIFN0eWxlc1xuLy8gLmltZy1jb250YWluZXJ7XG4vLyAgICAgbWF4LXdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XG4vLyB9XG5cbi8vIC5zZW5kZXItcGhvdG97XG4vLyAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuLy8gICAgIG1hcmdpbi10b3A6MjBweDtcbi8vIH1cblxuLy8gLm1lc3NhZ2UtYnViYmxlLXJlY2VpdmVkLWNvbnRhaW5lcntcbi8vICAgICBtYXJnaW46IDIwcHggMTVweCAwcHggMTBweDtcbi8vIH1cblxuLy8gLm1lc3NhZ2UtYnViYmxlLXJlY2VpdmVke1xuLy8gICAgIGJhY2tncm91bmQ6ICNGMUYxRjE7XG4vLyAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4vLyAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XG4vLyAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbi8vICAgICBwYWRkaW5nOiAxNXB4O1xuLy8gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vIH1cblxuLy8gLnNlbmRlci1uYW1le1xuLy8gICAgIGNvbG9yOiAjN0E4QUEwO1xuLy8gICAgIG1hcmdpbjogMDtcbi8vIH1cblxuLy8gLnJlY2VpdmVkLW1lc3NhZ2V7XG4vLyAgICAgY29sb3I6IzQ3NTI1NTtcbi8vICAgICBtYXJnaW46IDA7XG4vLyB9XG5cbi8vIC5tZXNzYWdlLXRpbWV7XG4vLyAgICAgZm9udC1zaXplOiAxMHB4O1xuLy8gICAgIGNvbG9yOiAjN0E4QUEwO1xuLy8gICAgIG1hcmdpbjogNXB4O1xuLy8gfVxuXG5cbi5idWJibGUtY29udGFpbmVye1xuICAgIG92ZXJmbG93OiBhdXRvXG59XG5cbi5tZXNzYWdlLXJlY2VpdmVkLWZsZXgtYm94e1xuICAgIGRpc3BsYXk6ZmxleDtcbn1cblxuLmltZy1jb250YWluZXItcmVjZWl2ZWQtZmxleHtcbiAgICBtYXJnaW4tcmlnaHQ6MTVweDtcbn1cblxuLnNlbmRlci1waG90by1mbGV4e1xuICAgIG1heC13aWR0aDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xufVxuXG4ubWVzc2FnZS1idWJibGUtcmVjZWl2ZWQtZmxleC1jb250YWluZXJ7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBtaW4td2lkdGg6IDc1cHg7XG59XG5cbi5zZW5kZXItbmFtZXtcbiAgICBjb2xvcjogIzdBOEFBMDtcbiAgICBtYXJnaW46IDA7XG59XG4ubWVzc2FnZS1idWJibGUtcmVjZWl2ZWQtZmxleHtcbiAgICBiYWNrZ3JvdW5kOiAjRjFGMUYxO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xufVxuXG5cblxuLnJlY2VpdmVkLW1lc3NhZ2UtZmxleHtcbiAgICBtYXJnaW46IDA7XG4gICAgY29sb3I6ICM0NzUyNTU7XG59XG5cbi5yZXBseS1idXR0b257XG4gICAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4ubWVzc2FnZS10aW1le1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBjb2xvcjogIzdBOEFBMDtcbiAgICBtYXJnaW46IDVweDtcbn1cblxuXG5cbi8vU2VudCBNZXNzYWdlIFN0eWxlc1xuXG4ubWVzc2FnZS1zZW50LWZsZXgtYm94e1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjpyb3ctcmV2ZXJzZVxufVxuXG4uaW1nLWNvbnRhaW5lci1zZW50LWZsZXh7XG4gICAgbWFyZ2luLWxlZnQ6MTVweDtcbn1cblxuLnNlbmRlci1waG90by1mbGV4e1xuICAgIG1heC13aWR0aDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5tZXNzYWdlLWJ1YmxlLXNlbnQtZmxleHtcbiAgICBiYWNrZ3JvdW5kOiAjMDA1REREO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG59XG5cbi5tZXNzYWdlLWJ1YmxlLXNlbnQtZmxleC1pbWFnZSB7XG4gICAgYmFja2dyb3VuZDogIzAwNURERDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHdpZHRoOiAyMTBweDtcbiAgICBoZWlnaHQ6IDIxMHB4O1xufVxuXG4ubWVzc2FnZS1idWJsZS1zZW50LWZsZXgtaW1hZ2UgaW1nIHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG59XG5cbi5tZXNzYWdlLWJ1YmxlLXNlbnQtZmxleC1pbWFnZSB2aWRlbyB7XG4gICAgbWluLXdpZHRoOiAxMDAlOyBcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbn1cblxuLnNlbnQtbWVzc2FnZS1mbGV4e1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5yZXBseS1idXR0b257XG4gICAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4vL0hSIHN0eWxlc1xuLmhyLXRleHQge1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG91dGxpbmU6IDA7XG4gIGJvcmRlcjogMDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMS41ZW07XG4gIG9wYWNpdHk6IC41O1xuICAmOmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgLy8gdXNlIHRoZSBsaW5lYXItZ3JhZGllbnQgZm9yIHRoZSBmYWRpbmcgZWZmZWN0XG4gICAgLy8gdXNlIGEgc29saWQgYmFja2dyb3VuZCBjb2xvciBmb3IgYSBzb2xpZCBiYXJcbiAgICBiYWNrZ3JvdW5kOiAjRTJFMkUyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMXB4O1xuICB9XG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1jb250ZW50KTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LWZhbWlseTogJ2F2ZW5pcicsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBhZGRpbmc6IDAgLjVlbTtcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgLy8gdGhpcyBpcyByZWFsbHkgdGhlIG9ubHkgdHJpY2t5IHBhcnQsIHlvdSBuZWVkIHRvIHNwZWNpZnkgdGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIGNvbnRhaW5lciBlbGVtZW50Li4uXG4gICAgY29sb3I6ICM4MTgwNzg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYTtcbiAgfVxufVxuXG4vL1RleHQgYXJlYSBTdHlsZXNcbi5yb3VuZGVke1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNFMkUyRTI7XG4gICAgLS1ib3JkZXItd2lkdGg6IDAgMCAwIDA7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4XG59XG5cbi50eXBlLW1lc3NhZ2UtY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IC0zNXB4O1xuICAgIHdpZHRoOiA5NSU7XG5cbn1cblxuLmJ1dHRvbnMtY29udGFpbmVye1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IDQ1cHg7XG4gICAgei1pbmRleDogMTAwMDtcbn1cbi5idXR0b25zLWNvbnRhaW5lciBpb24tYnV0dG9ue1xuICAgIC0tcGFkZGluZy1zdGFydDoxMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6MTBweDtcbiAgICAtLXBhZGRpbmctdG9wOiA1cHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uYnV0dG9ucy1jb250YWluZXIgaW9uLWljb257XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/test-group/test-group.page.ts":
/*!***********************************************!*\
  !*** ./src/app/test-group/test-group.page.ts ***!
  \***********************************************/
/*! exports provided: TestGroupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestGroupPage", function() { return TestGroupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestGroupPage = /** @class */ (function () {
    function TestGroupPage() {
    }
    TestGroupPage.prototype.ngOnInit = function () {
    };
    TestGroupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test-group',
            template: __webpack_require__(/*! raw-loader!./test-group.page.html */ "./node_modules/raw-loader/index.js!./src/app/test-group/test-group.page.html"),
            styles: [__webpack_require__(/*! ./test-group.page.scss */ "./src/app/test-group/test-group.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TestGroupPage);
    return TestGroupPage;
}());



/***/ })

}]);
//# sourceMappingURL=test-group-test-group-module-es5.js.map