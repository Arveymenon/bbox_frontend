(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./add-member/add-member.module": [
		"./src/app/add-member/add-member.module.ts",
		"add-member-add-member-module"
	],
	"./audio-call/audio-call.module": [
		"./src/app/audio-call/audio-call.module.ts",
		"default~audio-call-audio-call-module~video-chat-video-chat-module",
		"audio-call-audio-call-module"
	],
	"./audio-chat/audio-chat.module": [
		"./src/app/audio-chat/audio-chat.module.ts",
		"audio-chat-audio-chat-module"
	],
	"./block-list/block-list.module": [
		"./src/app/block-list/block-list.module.ts",
		"block-list-block-list-module"
	],
	"./contact-list/contact-list.module": [
		"./src/app/contact-list/contact-list.module.ts",
		"contact-list-contact-list-module"
	],
	"./create-feed/create-feed.module": [
		"./src/app/create-feed/create-feed.module.ts",
		"default~create-feed-create-feed-module~group-chat-admin-group-chat-admin-module~group-chat-group-cha~c0185a8f",
		"create-feed-create-feed-module"
	],
	"./create-group/create-group.module": [
		"./src/app/create-group/create-group.module.ts",
		"create-group-create-group-module"
	],
	"./create-personal-chat/create-personal-chat.module": [
		"./src/app/create-personal-chat/create-personal-chat.module.ts",
		"create-personal-chat-create-personal-chat-module"
	],
	"./create-video-chat/create-video-chat.module": [
		"./src/app/create-video-chat/create-video-chat.module.ts",
		"create-video-chat-create-video-chat-module"
	],
	"./feed-popover/feed-popover.module": [
		"./src/app/feed-popover/feed-popover.module.ts",
		"default~feed-popover-feed-popover-module~tab3-tab3-module",
		"common",
		"feed-popover-feed-popover-module"
	],
	"./get-number/get-number.module": [
		"./src/app/get-number/get-number.module.ts",
		"get-number-get-number-module"
	],
	"./group-chat-admin/group-chat-admin.module": [
		"./src/app/group-chat-admin/group-chat-admin.module.ts",
		"default~create-feed-create-feed-module~group-chat-admin-group-chat-admin-module~group-chat-group-cha~c0185a8f",
		"default~group-chat-admin-group-chat-admin-module~send-message-send-message-module",
		"group-chat-admin-group-chat-admin-module"
	],
	"./group-chat/group-chat.module": [
		"./src/app/group-chat/group-chat.module.ts",
		"default~create-feed-create-feed-module~group-chat-admin-group-chat-admin-module~group-chat-group-cha~c0185a8f",
		"group-chat-group-chat-module"
	],
	"./group-details/group-details.module": [
		"./src/app/group-details/group-details.module.ts"
	],
	"./init-page/init-page.module": [
		"./src/app/init-page/init-page.module.ts",
		"init-page-init-page-module"
	],
	"./invite-member/invite-member.module": [
		"./src/app/invite-member/invite-member.module.ts",
		"invite-member-invite-member-module"
	],
	"./join-group/join-group.module": [
		"./src/app/join-group/join-group.module.ts",
		"join-group-join-group-module"
	],
	"./login/login.module": [
		"./src/app/login/login.module.ts",
		"login-login-module"
	],
	"./notifications/notifications.module": [
		"./src/app/notifications/notifications.module.ts",
		"notifications-notifications-module"
	],
	"./receive-incoming-call/receive-incoming-call.module": [
		"./src/app/receive-incoming-call/receive-incoming-call.module.ts",
		"receive-incoming-call-receive-incoming-call-module"
	],
	"./register/register.module": [
		"./src/app/register/register.module.ts",
		"register-register-module"
	],
	"./send-message/send-message.module": [
		"./src/app/send-message/send-message.module.ts",
		"default~create-feed-create-feed-module~group-chat-admin-group-chat-admin-module~group-chat-group-cha~c0185a8f",
		"default~group-chat-admin-group-chat-admin-module~send-message-send-message-module",
		"send-message-send-message-module"
	],
	"./test-group/test-group.module": [
		"./src/app/test-group/test-group.module.ts",
		"test-group-test-group-module"
	],
	"./video-chat/video-chat.module": [
		"./src/app/video-chat/video-chat.module.ts",
		"default~audio-call-audio-call-module~video-chat-video-chat-module",
		"video-chat-video-chat-module"
	],
	"./view-attachment/view-attachment.module": [
		"./src/app/view-attachment/view-attachment.module.ts",
		"view-attachment-view-attachment-module"
	],
	"./view-image/view-image.module": [
		"./src/app/view-image/view-image.module.ts",
		"view-image-view-image-module"
	],
	"./view-video/view-video.module": [
		"./src/app/view-video/view-video.module.ts",
		"view-video-view-video-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet-controller_8.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js",
		"common",
		0
	],
	"./ion-action-sheet-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js",
		"common",
		1
	],
	"./ion-action-sheet-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js",
		"common",
		2
	],
	"./ion-alert-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js",
		"common",
		3
	],
	"./ion-alert-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js",
		"common",
		4
	],
	"./ion-app_8-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js",
		"common",
		5
	],
	"./ion-app_8-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js",
		"common",
		6
	],
	"./ion-avatar_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js",
		"common",
		7
	],
	"./ion-avatar_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js",
		"common",
		8
	],
	"./ion-back-button-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js",
		"common",
		9
	],
	"./ion-back-button-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js",
		"common",
		10
	],
	"./ion-backdrop-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js",
		11
	],
	"./ion-backdrop-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js",
		12
	],
	"./ion-button_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js",
		"common",
		13
	],
	"./ion-button_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js",
		"common",
		14
	],
	"./ion-card_5-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js",
		"common",
		15
	],
	"./ion-card_5-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js",
		"common",
		16
	],
	"./ion-checkbox-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js",
		"common",
		17
	],
	"./ion-checkbox-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js",
		"common",
		18
	],
	"./ion-chip-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js",
		"common",
		19
	],
	"./ion-chip-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js",
		"common",
		20
	],
	"./ion-col_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js",
		21
	],
	"./ion-datetime_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js",
		"common",
		22
	],
	"./ion-datetime_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js",
		"common",
		23
	],
	"./ion-fab_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js",
		"common",
		24
	],
	"./ion-fab_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js",
		"common",
		25
	],
	"./ion-img.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-img.entry.js",
		26
	],
	"./ion-infinite-scroll_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js",
		"common",
		27
	],
	"./ion-infinite-scroll_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js",
		"common",
		28
	],
	"./ion-input-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js",
		"common",
		29
	],
	"./ion-input-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js",
		"common",
		30
	],
	"./ion-item-option_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js",
		"common",
		31
	],
	"./ion-item-option_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js",
		"common",
		32
	],
	"./ion-item_8-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js",
		"common",
		33
	],
	"./ion-item_8-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js",
		"common",
		34
	],
	"./ion-loading-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js",
		"common",
		35
	],
	"./ion-loading-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js",
		"common",
		36
	],
	"./ion-menu_4-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-menu_4-ios.entry.js",
		"common",
		37
	],
	"./ion-menu_4-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-menu_4-md.entry.js",
		"common",
		38
	],
	"./ion-modal-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js",
		"common",
		39
	],
	"./ion-modal-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js",
		"common",
		40
	],
	"./ion-nav_5.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-nav_5.entry.js",
		"common",
		41
	],
	"./ion-popover-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js",
		"common",
		42
	],
	"./ion-popover-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js",
		"common",
		43
	],
	"./ion-progress-bar-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js",
		"common",
		44
	],
	"./ion-progress-bar-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js",
		"common",
		45
	],
	"./ion-radio_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js",
		"common",
		46
	],
	"./ion-radio_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js",
		"common",
		47
	],
	"./ion-range-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js",
		"common",
		48
	],
	"./ion-range-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js",
		"common",
		49
	],
	"./ion-refresher_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js",
		"common",
		50
	],
	"./ion-refresher_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js",
		"common",
		51
	],
	"./ion-reorder_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js",
		"common",
		52
	],
	"./ion-reorder_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js",
		"common",
		53
	],
	"./ion-ripple-effect.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js",
		54
	],
	"./ion-route_4.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js",
		"common",
		55
	],
	"./ion-searchbar-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js",
		"common",
		56
	],
	"./ion-searchbar-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js",
		"common",
		57
	],
	"./ion-segment_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js",
		"common",
		58
	],
	"./ion-segment_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js",
		"common",
		59
	],
	"./ion-select_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js",
		"common",
		60
	],
	"./ion-select_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js",
		"common",
		61
	],
	"./ion-slide_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js",
		62
	],
	"./ion-slide_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js",
		63
	],
	"./ion-spinner.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js",
		"common",
		64
	],
	"./ion-split-pane-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js",
		65
	],
	"./ion-split-pane-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js",
		66
	],
	"./ion-tab-bar_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js",
		"common",
		67
	],
	"./ion-tab-bar_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js",
		"common",
		68
	],
	"./ion-tab_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js",
		"common",
		69
	],
	"./ion-text.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-text.entry.js",
		"common",
		70
	],
	"./ion-textarea-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js",
		"common",
		71
	],
	"./ion-textarea-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js",
		"common",
		72
	],
	"./ion-toast-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js",
		"common",
		73
	],
	"./ion-toast-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js",
		"common",
		74
	],
	"./ion-toggle-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js",
		"common",
		75
	],
	"./ion-toggle-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js",
		"common",
		76
	],
	"./ion-virtual-scroll.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js",
		77
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n  <div class=\"on-call\" *ngIf=\"recieving_call\" (click)=\"joinCall()\">Tap to go back to Call</div>\n  <div class=\"no-network\" *ngIf=\"noNetwork\">No Internet Connection</div>\n</ion-app>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/group-details/group-details.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/group-details/group-details.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n          <ion-button (click)=\"back()\">\n            <ion-icon class=\"back-button\" slot=\"icon-only\" name=\"md-arrow-back\"></ion-icon>\n          </ion-button>\n      </ion-buttons>\n      <ion-title routerLink=\"groupdetails\">\n        {{ groupService.selectedGroup }}\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n  <div class=\"main\">\n    <ion-grid>\n\n        <div class=\"user-container\">\n          <img class=\"user-photo\" *ngIf=\"data\" [src]=\"this.images.length > 0 ? (this.images[0].path) : (this.data.avatar ? 'http://198.12.92.202/public/uploads/'+ this.data.avatar : null)\" onError=\"this.src='assets/images/group.png';\">\n          <!-- 'https://graph.facebook.com/10219749290953972/picture' -->\n          <!-- <input type=\"file\" (change)=\"getFileFromBrowser($event, 'image')\" id=\"group_image\" accept=\"image/*\" style=\"display: none\"> -->\n          <ion-icon class=\"settings-icon group-icon\" (click)=\"selectImage()\" name=\"md-camera\"></ion-icon>\n        </div>\n\n\n        <form [formGroup]=\"groupform\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"details-row\" style=\"display:flex\">\n            <!-- <div class=\"image-details\" (click)=\"selectImage()\">\n                <img src=\"assets/images/camera.png\" class=\"camera-icon\">\n            </div> -->\n            <div class=\"group-name-container\">\n                <ion-input type=\"text\" placeholder=\"Subscriber List Name\" formControlName=\"name\" class=\"rounded\"></ion-input>\n            </div>\n        </div>\n\n      <ion-row class=\"group-description\">\n        <ion-textarea placeholder=\"Group Description...\" rows=\"3\" formControlName=\"description\" class=\"rounded\"></ion-textarea>\n      </ion-row>\n      \n      <div class=\"exit-button\">\n          <ion-button expand=\"block\" shape=\"round\" color=\"primary\" type=\"submit\">\n            {{'Save Group' | translate}}\n          </ion-button>\n      </div>\n      </form>\n    </ion-grid>\n\n    <ion-list>\n        <div *ngFor=\"let user of members\">\n          <ion-item *ngIf=\"(user.checked == true || user.checked == false) && user._id != adminidval\">\n              <ion-label [innerHtml]=\"user.name\">\n                <!-- <ion-badge>Accepted</ion-badge> -->\n              </ion-label>\n              <ion-checkbox slot=\"end\" [(ngModel)]=\"user.checked\"></ion-checkbox>\n            </ion-item>\n          </div>\n      </ion-list>\n\n\n\n    <div class=\"exit-button\">\n        <ion-button expand=\"block\" shape=\"round\" color=\"primary\" (click)=\"back()\">\n          <ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon>\n          {{'Filter' | translate}}\n        </ion-button>\n    </div>\n\n    <div class=\"exit-button\" *ngIf=\"data && data.subscriber == true\">\n      <ion-button expand=\"block\" shape=\"round\" color=\"primary\" (click)=\"shareLink()\">\n        <ion-icon slot=\"start\" name=\"share\"></ion-icon>\n        {{'Share' | translate}}\n      </ion-button>\n    </div>\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/setting-up-modal/setting-up-modal.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/setting-up-modal/setting-up-modal.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"primary\">\n            <ion-button color=\"light\" (click)=\"dismiss()\">\n                <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>SETTING UP </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" id=\"content\" [scrollEvents]=\"true\" (ionScroll)=\"refreshVideos()\">\n  <div  id=\"ovVideo\" *ngIf=\"localUser && localUser.getStreamManager()\"> \n      <ov-video [streamManager]=\"localUser.getStreamManager()\" [isBackCamera]=\"localUser.isBackCamera()\"></ov-video>\n    </div>\n    <!-- Mic devices -->\n    <ion-item id=\"audioItem\">\n        <ion-icon name=\"mic\"></ion-icon>\n        <ion-label></ion-label>\n        <ion-select placeholder=\"Audio Devices\" (ionChange)=\"setAudioDevice($event)\">\n            <ion-select-option value=\"None\">Disable</ion-select-option>\n            <ion-select-option *ngFor=\"let device of audioDevices\" [value]=\"device\">{{device.label}}</ion-select-option>\n        </ion-select>\n    </ion-item>\n\n    <!-- Cam devices -->\n    <ion-item id=\"videoItem\">\n\n        <ion-icon name=\"videocam\"></ion-icon>\n        <ion-label></ion-label>\n        <ion-select placeholder=\"Cam Devices\" (ionChange)=\"setVideoDevice($event)\">\n            <ion-select-option value=\"None\">Disable</ion-select-option>\n            <ion-select-option *ngFor=\"let device of videoDevices\" [value]=\"device\">{{device.label}}</ion-select-option>\n        </ion-select>\n    </ion-item>\n</ion-content>\n\n<ion-footer [style.height]=\"'55px'\" [style.background]=\"'white'\">\n    <ion-button id=\"join-button\" (click)=\"join()\" expand=\"block\" shape=\"round\" color=\"primary\">\n        <ion-icon slot=\"start\" name=\"videocam\"></ion-icon>\n        Join\n    </ion-button>\n</ion-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/stream/stream.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/stream/stream.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"OT_widget-container\" *ngIf=\"user && user.getStreamManager()\" [id]=\"'container-' + this.user.getStreamManager().stream.streamId\">\n    <ov-video #videoComponent [streamManager]=\"user.getStreamManager()\" [mutedSound]=\"mutedSound\" [isBackCamera]=\"user.isBackCamera()\"></ov-video>\n    <div id=\"statusIcons\">\n            <ion-badge color=\"danger\" *ngIf=\"!user.getStreamManager().stream.audioActive\">\n                    <ion-icon name=\"mic-off\" color=\"light\"></ion-icon>\n            </ion-badge>\n            <ion-badge color=\"danger\" *ngIf=\"!user.getStreamManager().stream.videoActive\">\n                    <ion-icon name=\"eye-off\" color=\"light\"></ion-icon>\n            </ion-badge>\n            \n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




const routes = [
    { path: '', loadChildren: './init-page/init-page.module#InitPagePageModule' },
    { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    {
        // path: 'home',
        // loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
        // 
        path: 'home',
        loadChildren: () => Promise.all(/*! import() | tabs-tabs-module */[__webpack_require__.e("default~create-feed-create-feed-module~group-chat-admin-group-chat-admin-module~group-chat-group-cha~c0185a8f"), __webpack_require__.e("tabs-tabs-module")]).then(__webpack_require__.bind(null, /*! ./tabs/tabs.module */ "./src/app/tabs/tabs.module.ts")).then(m => m.TabsPageModule),
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]]
    },
    { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
    { path: 'create-group', loadChildren: './create-group/create-group.module#CreateGroupPageModule' },
    { path: 'add-member/:id', loadChildren: './add-member/add-member.module#AddMemberPageModule' },
    { path: 'join-group', loadChildren: './join-group/join-group.module#JoinGroupPageModule' },
    { path: 'invite-member', loadChildren: './invite-member/invite-member.module#InviteMemberPageModule' },
    { path: 'create-feed', loadChildren: './create-feed/create-feed.module#CreateFeedPageModule' },
    { path: 'group-chat/:id', loadChildren: './group-chat/group-chat.module#GroupChatPageModule' },
    { path: 'group-details/:id', loadChildren: './group-details/group-details.module#GroupDetailsPageModule' },
    { path: 'group-chat-admin/:id', loadChildren: './group-chat-admin/group-chat-admin.module#GroupChatAdminPageModule' },
    { path: 'send-message', loadChildren: './send-message/send-message.module#SendMessagePageModule' },
    { path: 'video-chat/:id', loadChildren: './video-chat/video-chat.module#VideoChatPageModule' },
    { path: 'audio-chat', loadChildren: './audio-chat/audio-chat.module#AudioChatPageModule' },
    { path: 'audio-call/:id', loadChildren: './audio-call/audio-call.module#AudioCallPageModule' },
    { path: 'view-attachment', loadChildren: './view-attachment/view-attachment.module#ViewAttachmentPageModule' },
    { path: 'test-group', loadChildren: './test-group/test-group.module#TestGroupPageModule' },
    { path: 'view-video/:video', loadChildren: './view-video/view-video.module#ViewVideoPageModule' },
    { path: 'view-image/:image', loadChildren: './view-image/view-image.module#ViewImagePageModule' },
    { path: 'create-personal-chat', loadChildren: './create-personal-chat/create-personal-chat.module#CreatePersonalChatPageModule' },
    { path: 'create-video-chat', loadChildren: './create-video-chat/create-video-chat.module#CreateVideoChatPageModule' },
    { path: 'feed-popover', loadChildren: './feed-popover/feed-popover.module#FeedPopoverPageModule' },
    { path: 'notifications', loadChildren: './notifications/notifications.module#NotificationsPageModule' },
    { path: 'contact-list', loadChildren: './contact-list/contact-list.module#ContactListPageModule' },
    { path: 'receive-incoming-call/:id', loadChildren: './receive-incoming-call/receive-incoming-call.module#ReceiveIncomingCallPageModule' },
    { path: 'get-number', loadChildren: './get-number/get-number.module#GetNumberPageModule' },
    { path: 'init-page', loadChildren: './init-page/init-page.module#InitPagePageModule' },
    { path: 'block-list', loadChildren: './block-list/block-list.module#BlockListPageModule' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__["PreloadAllModules"], useHash: true })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".on-call {\n  height: 40px;\n  position: fixed;\n  bottom: 0px;\n  padding: 8px;\n  background-color: var(--ion-color-success);\n  text-align: center;\n  width: 100%;\n  color: white; }\n\n.no-network {\n  height: 40px;\n  position: fixed;\n  bottom: 0px;\n  padding: 8px;\n  background-color: var(--ion-color-danger);\n  text-align: center;\n  width: 100%;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYmJveF9mcm9udGVuZC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWiwwQ0FBMEM7RUFDMUMsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlDQUF5QztFQUN6QyxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vbi1jYWxsIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm5vLW5ldHdvcmsge1xuICAgIGhlaWdodDogNDBweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "./node_modules/@ionic-native/onesignal/ngx/index.js");
/* harmony import */ var _ionic_native_globalization_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/globalization/ngx */ "./node_modules/@ionic-native/globalization/ngx/index.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _services_contacts_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/contacts.service */ "./src/app/services/contacts.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _ionic_native_autostart_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/autostart/ngx */ "./node_modules/@ionic-native/autostart/ngx/index.js");
/* harmony import */ var _services_audio_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/audio.service */ "./src/app/services/audio.service.ts");
/* harmony import */ var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/native-audio/ngx */ "./node_modules/@ionic-native/native-audio/ngx/index.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _services_active_state_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/active-state.service */ "./src/app/services/active-state.service.ts");
/* harmony import */ var _ionic_native_branch_io_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic-native/branch-io/ngx */ "./node_modules/@ionic-native/branch-io/ngx/index.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _shared_group_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/group.service */ "./src/app/shared/group.service.ts");
/* harmony import */ var _shareduser_user_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shareduser/user.service */ "./src/app/shareduser/user.service.ts");























// import { BackgroundMode } from '@ionic-native/background-mode/ngx';
// import { Dialogs } from '@ionic-native/dialogs/ngx';
const TOKEN_KEY = 'access_token';
let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar, authService, router, translate, navController, storage, oneSignal, globalization, screenOrientation, 
    // private dialogs: Dialogs,
    // private backgroundMode: BackgroundMode,
    alertCtrl, contactsService, storageService, autostart, ref, audio, events, nativeAudio, activeState, network, branch, loader, groupService, userService) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.authService = authService;
        this.router = router;
        this.translate = translate;
        this.navController = navController;
        this.storage = storage;
        this.oneSignal = oneSignal;
        this.globalization = globalization;
        this.screenOrientation = screenOrientation;
        this.alertCtrl = alertCtrl;
        this.contactsService = contactsService;
        this.storageService = storageService;
        this.autostart = autostart;
        this.ref = ref;
        this.audio = audio;
        this.events = events;
        this.nativeAudio = nativeAudio;
        this.activeState = activeState;
        this.network = network;
        this.branch = branch;
        this.loader = loader;
        this.groupService = groupService;
        this.userService = userService;
        this.recieving_call = false;
        this.userOnCall = false;
        this.moved = false;
        this.loggedInRoute = '/home/tabs/tab1';
        this.noNetwork = false;
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            // this.statusBar.overlaysWebView(true);
            this.statusBar.backgroundColorByHexString('#005DDD');
            // set to landscape
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
            // this.backgroundMode.enable();
            // this.autostart.enable();
            this.storageService.firstTimeAppOpened().then(check => {
                if (check) {
                    this.goToGetNumber();
                }
                else {
                    this.authService.checkToken().then(valid => {
                        console.log('Returned Value', valid);
                        if (valid) {
                            this.goToHome();
                        }
                        else {
                            this.goToGetNumber();
                        }
                    })
                        .catch(err => console.log('ERROR', err));
                }
            });
            // User on call variable
            // this.events.subscribe('userOnCall', (onCall: boolean, roomId) => {
            //   // user and time are the same arguments passed in `events.publish(user, time)`
            //   console.log('RoomId ', roomId, 'is active -', onCall);
            //   this.userOnCall = onCall;
            // });
            this.globalization.getPreferredLanguage()
                .then(lang => {
                if (lang.value == 'ja') {
                    this.translate.setDefaultLang('jp');
                }
                else {
                    this.translate.setDefaultLang('en');
                }
                this.storage.get('language')
                    .then(lang => {
                    if (lang) {
                        this.translate.use(lang);
                    }
                });
            })
                .catch(e => console.log(e));
        }).catch(err => console.log('ERROR', err));
        // this.platform.resume.subscribe(resumed => {
        //   this.initBranch();
        // })
    }
    initializeOnesignal() {
        this.oneSignal.startInit('f9bcedce-1f87-46df-a595-c75110e062eb', '696273358246');
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
        this.oneSignal.handleNotificationReceived().subscribe(data => {
            // do something when notification is received
            let msg = data.payload.body;
            let title = data.payload.title;
            let additionalData = data.payload.additionalData;
            console.log(additionalData);
            // this.showAlert(title, msg, additionalData.task);
            if (additionalData.task == "message")
                console.log('message');
            // this.router.navigate(['home/tabs/tab1']);
            if (additionalData.task == "call") {
                this.storageService.setCallType('video');
                this.router.navigate(['receive-incoming-call/' + additionalData._id]);
                this.callId = additionalData._id;
                this.startCall();
            }
            if (additionalData.task == "audio-call") {
                this.storageService.setCallType('audio');
                this.router.navigate(['receive-incoming-call/' + additionalData._id]);
                this.callId = additionalData._id;
                this.startCall();
            }
            // this.dialogs.alert('Hello world')
            //   .then(() => console.log('Dialog dismissed'))
            //   .catch(e => console.log('Error displaying dialog', e));
            // alert('Hello World');
        });
        this.oneSignal.handleNotificationOpened().subscribe(data => {
            let additionalData = data.notification.payload.additionalData;
            console.log(additionalData);
            // this.showAlert('Notification opened', 'You already read this before', additionalData.task);
            // this.dialogs.alert('Hello world')
            //   .then(() => console.log('Dialog dismissed'))
            //   .catch(e => console.log('Error displaying dialog', e));
            // alert('Hello World');
            if (additionalData.task == "message")
                console.log('message');
            if (additionalData.subscriber == false)
                this.router.navigate(['group-chat/' + additionalData.group]);
            else
                this.router.navigate(['group-chat-admin/' + additionalData.group]);
            if (additionalData.task == "call") {
                this.storageService.setCallType('video');
                this.router.navigate(['receive-incoming-call/' + additionalData._id]);
                this.callId = additionalData._id;
                this.startCall();
            }
            if (additionalData.task == "audio-call") {
                this.storageService.setCallType('audio');
                this.router.navigate(['receive-incoming-call/' + additionalData._id]);
                this.callId = additionalData._id;
                this.startCall();
            }
        });
        this.oneSignal.endInit();
        this.oneSignal.getIds().then((data) => {
            this.storageService.setToken(data.pushToken);
        });
    }
    initApp() {
        console.log('Init App');
        this.splashScreen.hide();
        this.initializeOnesignal();
        this.initAudios();
        this.listenToAuth();
        this.listenToNetwork();
        this.initBranch();
    }
    startCall() {
        // this.recieving_call = true;
        this.ref.detectChanges();
        console.log('VALUE CHANGED');
        this.waitForCallEnd();
    }
    showAlert(title, msg, task) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: title,
                subHeader: msg,
                buttons: [
                    {
                        text: `Action: ${task}`,
                        handler: () => {
                            // E.g: Navigate to a specific screen
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    waitForCallEnd() {
        setTimeout(() => {
            this.recieving_call = false;
            this.ref.detectChanges();
            console.log('VALUE CHANGED', this.recieving_call);
        }, 30000);
    }
    joinCall() {
        this.router.navigate(['receive-incoming-call/' + this.callId]);
    }
    initAudios() {
        console.log('INIT AUDIO');
        this.audio.preload('calling-tone', 'assets/audio/calling-tone.mp3');
        this.audio.preload('call-ended-tone', 'assets/audio/call-ended-tone.mp3');
        this.audio.preload('alert', 'assets/audio/alert.wav');
    }
    goToHome() {
        console.log('Going Home');
        if (this.platform.is('cordova')) {
            this.contactsService.setUserId().then(user => {
                this.contactsService.saveContacts().then(saved => {
                    this.contactsService.setContacts().then(set => {
                        console.log("user is logged in");
                        this.navController.navigateRoot([this.loggedInRoute]).then(navigated => {
                            this.initApp();
                        })
                            .catch(e => console.log(e));
                    });
                });
            });
        }
        else {
            this.navController.navigateRoot([this.loggedInRoute]).then(navigated => {
                this.initApp();
            });
        }
    }
    goToGetNumber() {
        console.log('Get Number');
        this.navController.navigateRoot('get-number').then(navigated => {
            this.initApp();
        })
            .catch(e => console.log(e));
    }
    listenToAuth() {
        this.authService.authenticationState.subscribe(state => {
            if (state == true && !this.activeState.is(this.loggedInRoute)) {
                console.log('AUTH STATE TRUE', state);
                this.goToHome();
            }
            if (state == false) {
                console.log('AUTH STATE', state);
                this.navController.navigateRoot('get-number').then(navigated => {
                    // this.initApp()
                });
            }
        });
    }
    listenToNetwork() {
        let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
            this.noNetwork = true;
            disconnectSubscription.unsubscribe();
            this.waitForReconnection();
        });
    }
    waitForReconnection() {
        let connectSubscription = this.network.onConnect().subscribe(() => {
            this.noNetwork = false;
            connectSubscription.unsubscribe();
            this.listenToNetwork();
        });
    }
    initBranch() {
        if (!this.platform.is("cordova")) {
            return;
        }
        this.branch.setDebug(true);
        this.branch.initSession().then(data => {
            console.log('BRANCH DATA', data);
            if (data["+clicked_branch_link"]) {
                // read deep link data on click
                console.log("Deep Link Data", data);
                console.log(JSON.stringify(data));
                if (data['$deeplink_path']) {
                    var path = data['$deeplink_path'];
                    let pathSplit = path.split('/');
                    this.navController.navigateRoot([this.loggedInRoute]).then(navigated => {
                        if (pathSplit[0] == 'user') {
                            this.checkChat(pathSplit[1]);
                        }
                        else {
                            this.joinGroup(pathSplit[1]);
                        }
                    });
                }
            }
        });
        this.branch.getFirstReferringParams().then(data => {
            console.log('Referring Params', data);
        });
    }
    checkChat(id) {
        this.loader.presentLoading();
        console.log('Clicked and ID', id);
        var user_id = this.contactsService.getUserId();
        var body = {
            members: [id, user_id]
        };
        this.groupService.checkExists(body)
            .subscribe((check) => {
            this.loader.dismiss();
            this.ref.detectChanges();
            console.log('CHECk', check);
            if (check.exists) {
                this.router.navigate(['group-chat', check.response[0]._id]);
            }
            else {
                this.loader.presentLoading();
                var userArray = [];
                userArray[0] = { memberid: user_id, accepted: true, admin: true };
                userArray[1] = { memberid: id, accepted: false, admin: false };
                var empty_group = {
                    name: "Personal Group",
                    description: "No Description"
                };
                this.groupService.postGroup(empty_group).subscribe((res) => {
                    console.log(res);
                    this.userService.putUser({ members: userArray }, res._id).subscribe((res1) => {
                        this.router.navigate(['group-chat', res._id]);
                        this.loader.dismiss();
                        this.ref.detectChanges();
                    });
                }, err => { this.loader.dismiss(); this.ref.detectChanges(); });
            }
        }, err => { this.loader.dismiss(); this.ref.detectChanges(); });
    }
    joinGroup(id) {
        this.loader.presentLoading();
        console.log('Clicked and ID', id);
        var data = {
            id: id,
            member: this.contactsService.getUserId()
        };
        console.log(data);
        this.groupService.checkMember(data).subscribe((res) => {
            console.log("RESULT", res);
            if (res.error == false) {
                this.router.navigate(['group-chat-admin', res.data._id]);
                this.loader.dismiss();
                this.ref.detectChanges();
            }
        }, err => { this.loader.dismiss(); this.ref.detectChanges(); });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] },
    { type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__["OneSignal"] },
    { type: _ionic_native_globalization_ngx__WEBPACK_IMPORTED_MODULE_10__["Globalization"] },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_11__["ScreenOrientation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _services_contacts_service__WEBPACK_IMPORTED_MODULE_12__["ContactsService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_13__["StorageService"] },
    { type: _ionic_native_autostart_ngx__WEBPACK_IMPORTED_MODULE_14__["Autostart"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _services_audio_service__WEBPACK_IMPORTED_MODULE_15__["AudioService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
    { type: _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_16__["NativeAudio"] },
    { type: _services_active_state_service__WEBPACK_IMPORTED_MODULE_18__["ActiveStateService"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_17__["Network"] },
    { type: _ionic_native_branch_io_ngx__WEBPACK_IMPORTED_MODULE_19__["BranchIo"] },
    { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_20__["LoaderService"] },
    { type: _shared_group_service__WEBPACK_IMPORTED_MODULE_21__["GroupService"] },
    { type: _shareduser_user_service__WEBPACK_IMPORTED_MODULE_22__["UserService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"],
        _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__["OneSignal"],
        _ionic_native_globalization_ngx__WEBPACK_IMPORTED_MODULE_10__["Globalization"],
        _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_11__["ScreenOrientation"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _services_contacts_service__WEBPACK_IMPORTED_MODULE_12__["ContactsService"],
        _services_storage_service__WEBPACK_IMPORTED_MODULE_13__["StorageService"],
        _ionic_native_autostart_ngx__WEBPACK_IMPORTED_MODULE_14__["Autostart"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _services_audio_service__WEBPACK_IMPORTED_MODULE_15__["AudioService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
        _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_16__["NativeAudio"],
        _services_active_state_service__WEBPACK_IMPORTED_MODULE_18__["ActiveStateService"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_17__["Network"],
        _ionic_native_branch_io_ngx__WEBPACK_IMPORTED_MODULE_19__["BranchIo"],
        _services_loader_service__WEBPACK_IMPORTED_MODULE_20__["LoaderService"],
        _shared_group_service__WEBPACK_IMPORTED_MODULE_21__["GroupService"],
        _shareduser_user_service__WEBPACK_IMPORTED_MODULE_22__["UserService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: jwtOptionsFactory, createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jwtOptionsFactory", function() { return jwtOptionsFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");
/* harmony import */ var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/diagnostic/ngx */ "./node_modules/@ionic-native/diagnostic/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ionic-native/contacts/ngx */ "./node_modules/@ionic-native/contacts/ngx/index.js");
/* harmony import */ var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ionic-native/sms/ngx */ "./node_modules/@ionic-native/sms/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_zbar_ngx__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ionic-native/zbar/ngx */ "./node_modules/@ionic-native/zbar/ngx/index.js");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/ngx/index.js");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "./node_modules/@ionic-native/onesignal/ngx/index.js");
/* harmony import */ var _shareduser_user_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./shareduser/user.service */ "./src/app/shareduser/user.service.ts");
/* harmony import */ var _shared_group_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./shared/group.service */ "./src/app/shared/group.service.ts");
/* harmony import */ var _group_details_group_details_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./group-details/group-details.module */ "./src/app/group-details/group-details.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");
/* harmony import */ var _ionic_native_globalization_ngx__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @ionic-native/globalization/ngx */ "./node_modules/@ionic-native/globalization/ngx/index.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/ngx/index.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _utils_IonicGestureConfig__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../utils/IonicGestureConfig */ "./src/utils/IonicGestureConfig.ts");
/* harmony import */ var ngx_linkifyjs__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ngx-linkifyjs */ "./node_modules/ngx-linkifyjs/esm2015/ngx-linkifyjs.js");
/* harmony import */ var _ionic_native_autostart_ngx__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @ionic-native/autostart/ngx */ "./node_modules/@ionic-native/autostart/ngx/index.js");
/* harmony import */ var _ionic_native_native_ringtones_ngx__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @ionic-native/native-ringtones/ngx */ "./node_modules/@ionic-native/native-ringtones/ngx/index.js");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/ngx/index.js");
/* harmony import */ var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @ionic-native/native-audio/ngx */ "./node_modules/@ionic-native/native-audio/ngx/index.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_native_branch_io_ngx__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @ionic-native/branch-io/ngx */ "./node_modules/@ionic-native/branch-io/ngx/index.js");






















// import { BackgroundMode } from '@ionic-native/background-mode/ngx';






// import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';







// import { Facebook } from '@ionic-native/facebook/ngx';















// import { Dialogs } from '@ionic-native/dialogs/ngx';
// import * as Hammer from '_hammerjs';
const config = { url: 'http://198.12.92.202:5001', options: {} };
// const config: SocketIoConfig = { url: 'http://localhost:5001', options: {} };
function jwtOptionsFactory(storage) {
    return {
        tokenGetter: () => {
            return storage.get('access_token');
        },
        whitelistedDomains: ['198.12.92.202:5000']
    };
}
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_24__["TranslateHttpLoader"](http, 'assets/languages/', '.json');
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_34__["SharedModule"],
            _group_details_group_details_module__WEBPACK_IMPORTED_MODULE_33__["GroupDetailsPageModule"],
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_23__["SocketIoModule"].forRoot(config),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__["TranslateLoader"],
                    useFactory: (createTranslateLoader),
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]]
                }
            }),
            _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["IonicStorageModule"].forRoot(),
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__["JwtModule"].forRoot({
                jwtOptionsProvider: {
                    provide: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__["JWT_OPTIONS"],
                    useFactory: jwtOptionsFactory,
                    deps: [_ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"]],
                }
            }),
            ngx_linkifyjs__WEBPACK_IMPORTED_MODULE_42__["NgxLinkifyjsModule"].forRoot()
        ],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
            // Facebook,
            _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_37__["Keyboard"],
            _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_35__["GooglePlus"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"],
            _shareduser_user_service__WEBPACK_IMPORTED_MODULE_31__["UserService"],
            _shared_group_service__WEBPACK_IMPORTED_MODULE_32__["GroupService"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] },
            _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_13__["AndroidPermissions"],
            _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_14__["Diagnostic"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_15__["File"],
            _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_17__["ImagePicker"],
            // Dialogs,
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_18__["Camera"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_16__["FileTransfer"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_19__["WebView"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_20__["FilePath"],
            _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_25__["Contacts"],
            _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_26__["SMS"],
            _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_37__["Keyboard"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_27__["SocialSharing"],
            // BarcodeScanner,
            _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_29__["FileChooser"],
            _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_30__["OneSignal"],
            _ionic_native_globalization_ngx__WEBPACK_IMPORTED_MODULE_36__["Globalization"],
            _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_21__["ScreenOrientation"],
            _ionic_native_autostart_ngx__WEBPACK_IMPORTED_MODULE_43__["Autostart"],
            _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_45__["Clipboard"],
            // HammerGestureConfig, 
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_38__["FileOpener"],
            _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_39__["Crop"],
            _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_40__["NativeStorage"],
            _ionic_native_native_ringtones_ngx__WEBPACK_IMPORTED_MODULE_44__["NativeRingtones"],
            _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_46__["NativeAudio"],
            _ionic_native_zbar_ngx__WEBPACK_IMPORTED_MODULE_28__["ZBar"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_47__["Network"],
            _ionic_native_branch_io_ngx__WEBPACK_IMPORTED_MODULE_48__["BranchIo"],
            { provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["HAMMER_GESTURE_CONFIG"], useClass: _utils_IonicGestureConfig__WEBPACK_IMPORTED_MODULE_41__["IonicGestureConfig"] }
            // BackgroundMode
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        exports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_34__["SharedModule"]
        ]
    })
], AppModule);



/***/ }),

/***/ "./src/app/group-details/group-details.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/group-details/group-details.module.ts ***!
  \*******************************************************/
/*! exports provided: GroupDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupDetailsPageModule", function() { return GroupDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _group_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./group-details.page */ "./src/app/group-details/group-details.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








const routes = [
    {
        path: '',
        component: _group_details_page__WEBPACK_IMPORTED_MODULE_6__["GroupDetailsPage"]
    }
];
let GroupDetailsPageModule = class GroupDetailsPageModule {
};
GroupDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_group_details_page__WEBPACK_IMPORTED_MODULE_6__["GroupDetailsPage"]]
    })
], GroupDetailsPageModule);



/***/ }),

/***/ "./src/app/group-details/group-details.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/group-details/group-details.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  text-align: left; }\n\n.main {\n  margin: 50px 10px 0 10px; }\n\n.camera-icon {\n  height: 40px; }\n\n.rounded {\n  border: 2px solid #E2E2E2;\n  --border-width: 0 0 0 0;\n  border-radius: 8px;\n  padding-left: 10px !important;\n  padding-right: 10px !important; }\n\n.details-row {\n  display: -webkit-box;\n  display: flex; }\n\n.image-container {\n  max-width: 50px; }\n\n.group-name-container {\n  width: 100%; }\n\n.group-description {\n  margin-top: 20px; }\n\n.exit-button {\n  font-size: 12px;\n  text-align: center;\n  margin: 40px auto 40px auto;\n  max-width: 175px;\n  --box-shadow: none; }\n\n.exit-button ion-icon {\n  font-size: 24px; }\n\n.user-container {\n  margin-bottom: 40px;\n  text-align: center; }\n\n.user-photo {\n  border-radius: 50%;\n  height: 100px;\n  width: 100px; }\n\n.settings-icon {\n  width: 25px;\n  height: 25px;\n  position: relative;\n  right: 30px;\n  background: #fff;\n  border-radius: 50%;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n\n.settings-icon .icon-inner {\n  width: 15px;\n  margin: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYmJveF9mcm9udGVuZC9zcmMvYXBwL2dyb3VwLWRldGFpbHMvZ3JvdXAtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBZ0IsRUFBQTs7QUFLcEI7RUFDSSx3QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0kseUJBQXlCO0VBQ3pCLHVCQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3Qiw4QkFBOEIsRUFBQTs7QUFHbEM7RUFDSSxvQkFBYTtFQUFiLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxlQUFjLEVBQUE7O0FBR2xCO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLGtCQUFhLEVBQUE7O0FBR2pCO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVksRUFBQTs7QUFJZDtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLCtHQUFtRyxFQUFBOztBQUdyRztFQUNFLFdBQVc7RUFDWCxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ncm91cC1kZXRhaWxzL2dyb3VwLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSGVhZGVyIFN0eWxlc1xuaW9uLXRpdGxle1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi8vTWFpbiBTdHlsZXNcblxuLm1haW57XG4gICAgbWFyZ2luOjUwcHggMTBweCAwIDEwcHg7XG59XG5cbi5jYW1lcmEtaWNvbntcbiAgICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5yb3VuZGVke1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNFMkUyRTI7XG4gICAgLS1ib3JkZXItd2lkdGg6IDAgMCAwIDA7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmRldGFpbHMtcm93e1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5pbWFnZS1jb250YWluZXJ7XG4gICAgbWF4LXdpZHRoOjUwcHg7XG59XG5cbi5ncm91cC1uYW1lLWNvbnRhaW5lcntcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmdyb3VwLWRlc2NyaXB0aW9ue1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5leGl0LWJ1dHRvbntcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogNDBweCBhdXRvIDQwcHggYXV0bztcbiAgICBtYXgtd2lkdGg6IDE3NXB4O1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmV4aXQtYnV0dG9uIGlvbi1pY29ue1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLnVzZXItY29udGFpbmVye1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAudXNlci1waG90b3tcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cblxuXG4gIC5zZXR0aW5ncy1pY29ue1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcmlnaHQ6IDMwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMTIpO1xuICB9XG5cbiAgLnNldHRpbmdzLWljb24gLmljb24taW5uZXIge1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/group-details/group-details.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/group-details/group-details.page.ts ***!
  \*****************************************************/
/*! exports provided: GroupDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupDetailsPage", function() { return GroupDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_group_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/group.service */ "./src/app/shared/group.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _services_contacts_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/contacts.service */ "./src/app/services/contacts.service.ts");
/* harmony import */ var _ionic_native_branch_io_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/branch-io/ngx */ "./node_modules/@ionic-native/branch-io/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/ngx/index.js");



















const STORAGE_KEY = 'my_files';
let GroupDetailsPage = class GroupDetailsPage {
    constructor(modalCtrl, router, camera, actionSheetCtrl, platform, loader, route, androidPermissions, groupService, formBuilder, storage, filePath, webview, file, ref, translate, toastCtrl, http, contactsService, branch, socialSharing, crop) {
        // this.route.params.subscribe(params => {
        //   this.group_id = params['id']; 
        //     // alert(this.id);
        //     console.log(this.group_id);
        //   });
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.platform = platform;
        this.loader = loader;
        this.route = route;
        this.androidPermissions = androidPermissions;
        this.groupService = groupService;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.filePath = filePath;
        this.webview = webview;
        this.file = file;
        this.ref = ref;
        this.translate = translate;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.contactsService = contactsService;
        this.branch = branch;
        this.socialSharing = socialSharing;
        this.crop = crop;
        this.usersArray = [];
        this.avatar = false;
        this.ANDROID_PERMISSIONS = [
            'android.permission.READ_EXTERNAL_STORAGE',
            'android.permission.WRITE_EXTERNAL_STORAGE',
        ];
        // images variables
        this.images = [];
        this.storage.get('id').then((val) => {
            this.adminidval = val;
            console.log(this.adminidval);
            //console.log('id', val);
        });
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
        this.loader.presentLoading();
        console.log(this.group_id);
        this.groupform = this.formBuilder.group({
            _id: [this.group_id],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
        });
        this.groupService.getChat(this.group_id).subscribe((result) => {
            var res = result;
            console.log('RES', res);
            this.members = res.memberData;
            for (let member of this.members) {
                member.checked = true;
                var name = this.contactsService.getContactName(member._id);
                name ? member.name = name : member.name = member.mobile + ' <span class="temp-name">(' + member.name + ')</span>';
                console.log(member);
            }
            console.log(this.members);
            this.data = res;
            this.groupService.selectedGroup = res['name'];
            this.groupform.controls['name'].setValue(res['name']);
            this.groupform.controls['description'].setValue(res['description']);
            this.loader.dismiss();
        });
    }
    selectImage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.platform.is('ios') && !this.platform.is('android')) {
                console.log('desktop');
                document.getElementById('image').click();
            }
            else {
                const actionSheet = yield this.actionSheetCtrl.create({
                    header: "Select Image source",
                    buttons: [{
                            text: 'Load from Library',
                            icon: 'ios-grid',
                            handler: () => {
                                this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                            }
                        },
                        {
                            text: 'Use Camera',
                            icon: 'camera',
                            handler: () => {
                                this.takePicture(this.camera.PictureSourceType.CAMERA);
                            }
                        },
                        {
                            icon: 'close',
                            text: 'Cancel',
                            role: 'cancel'
                        }
                    ]
                });
                yield actionSheet.present();
            }
        });
    }
    takePicture(sourceType) {
        var options = {
            quality: 65,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(imagePath => {
            this.crop.crop(imagePath, { quality: 75 }).then(newImage => {
                this.startProcess(newImage, 'image', sourceType);
            });
        });
    }
    startProcess(file, type, sourceType) {
        this.images = [];
        console.log("PROCESS STARTED");
        this.currentFileType = type;
        // if ((this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) || (this.platform.is('android') && type == 'doc')) {
        console.log("FILE: ", file);
        let path = file.toString();
        if (type != 'doc') {
            file = path.indexOf('file://') > -1 ? file : 'file://' + file.toString();
        }
        this.filePath.resolveNativePath(file)
            .then(filePath => {
            console.log("FILE PATH", filePath);
            let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            let currentName = new String();
            if (type === 'image') {
                currentName = file.substring(file.lastIndexOf('/') + 1, file.lastIndexOf('?'));
            }
            else {
                currentName = filePath.substring(filePath.lastIndexOf('/') + 1);
            }
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName(filePath.substring(filePath.lastIndexOf('/') + 1)));
        });
        // } else {
        //     var currentName = file.substr(file.lastIndexOf('/') + 1);
        //     var correctPath = file.substr(0, file.lastIndexOf('/') + 1);
        //     this.copyFileToLocalDir(correctPath, currentName, this.createFileName(file.lastIndexOf('/') + 1));
        // }
    }
    createFileName(fileName) {
        let ext = this.getFileExtension(fileName);
        console.log("EXT", ext);
        var d = new Date(), n = d.getTime(), newFileName = n + '.' + ext;
        console.log("FILE NAME", fileName);
        return newFileName;
    }
    copyFileToLocalDir(namePath, currentName, newFileName) {
        this.checkPermissions().then(() => {
            this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
                this.updateStoredFiles(newFileName, currentName);
            }, error => {
                console.log("COULD NOT STORE FILE", error);
                // let value = this.translate.instant(['Error_while_storing_file'], { value: this.lang })
                this.presentToast("Error_while_storing_file");
            });
        });
    }
    updateStoredFiles(name, oldName) {
        this.storage.get(STORAGE_KEY).then(files => {
            let arr = JSON.parse(files);
            if (!arr) {
                let newFiles = [name];
                this.storage.set(STORAGE_KEY, JSON.stringify(newFiles));
            }
            else {
                arr.push(name);
                this.storage.set(STORAGE_KEY, JSON.stringify(arr));
            }
            let filePath = this.file.dataDirectory + name;
            //IF NOT DOC
            if (this.currentFileType != 'doc') {
                let resPath = this.pathForImage(filePath);
                let newEntry = {
                    name: name,
                    path: resPath,
                    filePath: filePath,
                    displayName: oldName
                };
                this.images = [newEntry, ...this.images];
                this.avatar = true;
                this.ref.detectChanges(); // trigger change detection cycle
                console.log("NEW IMGS", this.images);
            }
            // if(this.platform.is('ios') || this.platform.is('android')){
            //   this.startUpload();
            // }
        });
    }
    getFileExtension(entry) {
        var file = entry.toString();
        var splits = file.split('.');
        var ext = splits[(splits.length - 1)];
        return ext;
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
    pathForImage(img) {
        if (img === null) {
            return '';
        }
        else {
            let converted = this.webview.convertFileSrc(img);
            return converted;
        }
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
                    this.ref.detectChanges();
                }));
            });
            // const toast = await this.toastCtrl.create({
            //   message: text,
            //   position: 'bottom',
            //   duration: 3000
            // });
            // await toast.present();
        });
    }
    back() {
        console.log(this.members);
        let members = [];
        this.members.forEach(element => {
            if (element.checked) {
                members.push(element._id);
            }
        });
        this.modalCtrl.dismiss({
            'dismissed': true,
            'members': members
        });
    }
    onSubmit() {
        console.log(this.groupform.value);
        if (this.images) {
            this.startUpload();
        }
        else {
            this.groupService.putEditGroup(this.groupform.value).subscribe(updated => {
                this.presentToast('Updated Successfully');
            });
        }
    }
    startUpload() {
        console.log('STARTED UPLOAD');
        if (this.images) {
            this.images.forEach(imgEntry => {
                this.getFileFromLocal(imgEntry.filePath);
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
            this.loader.presentLoading();
            const uploadCall = this.http.post("http://198.12.92.202:5000/upload/single-file", formData)
                .subscribe((res) => {
                this.loader.dismiss();
                console.log(res);
                console.log(res['error']);
                if (res['error']) {
                    // let value = this.translate.instant(['File_upload_failed'], { value: this.lang })
                    this.presentToast("File_upload_failed");
                }
                else {
                    // let value = this.translate.instant(['File_upload_success'], { value: this.lang })
                    this.presentToast("File_upload_success");
                    let create = this.groupform.value;
                    create.avatar = name;
                    this.groupService.putEditGroup(create).subscribe(updated => {
                        console.log('Updated', updated);
                        this.presentToast('Updated Successfully');
                    });
                    // Empty the array to avoid looping
                    // this.images = [];
                    // this.onSubmit()
                    // this.postGroup(create)
                    // this.groupService.putChat(file_message, this.id).subscribe((res) => {
                    // this.uploading = false;
                    //   this.images = [];
                    this.ref.detectChanges();
                    // this.reset();
                    //   this.chatData();
                    this.currentFileType = new String();
                    // });
                }
            }, err => {
                console.log("UPLOAD FAILED", err);
                this.images = [];
            });
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
    ngOnDestroy() {
        let members = [];
        this.members.forEach(element => {
            if (element.checked) {
                members.push(element._id);
            }
        });
        this.modalCtrl.dismiss({
            'dismissed': true,
            'members': members
        });
        //   this.router.navigate(["/home/tabs/tab1/groupchat/"+this.group_id,{users: JSON.stringify(this.usersArray)}])
    }
    shareLink() {
        var properties = {
            canonicalIdentifier: "group/" + this.data._id,
            contentMetadata: {
                group_id: this.data._id
            }
        };
        this.branch.createBranchUniversalObject(properties).then(buo => {
            this.buo = buo;
            var urlProperties = {
                $deeplink_path: "group/" + this.data._id,
                user_id: this.data._id
            };
            this.buo.generateShortUrl({}, urlProperties)
                .then(res => {
                console.log("Response: ", res.url);
                this.sharing_link = res.url + '?type=group&id=' + this.data._id;
                this.socialSharing.share('Download the Amazing B-Box App to chat with me now!', 'Hey! Lets Chat on B-Box', null, this.sharing_link);
            })
                .catch(err => {
                console.log("Error: ", err);
            });
        });
    }
};
GroupDetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_11__["AndroidPermissions"] },
    { type: _shared_group_service__WEBPACK_IMPORTED_MODULE_3__["GroupService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_9__["FilePath"] },
    { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_14__["WebView"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__["File"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"] },
    { type: _services_contacts_service__WEBPACK_IMPORTED_MODULE_15__["ContactsService"] },
    { type: _ionic_native_branch_io_ngx__WEBPACK_IMPORTED_MODULE_16__["BranchIo"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_17__["SocialSharing"] },
    { type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_18__["Crop"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GroupDetailsPage.prototype, "group_id", void 0);
GroupDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-group-details',
        template: __webpack_require__(/*! raw-loader!./group-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/group-details/group-details.page.html"),
        styles: [__webpack_require__(/*! ./group-details.page.scss */ "./src/app/group-details/group-details.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
        _services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_11__["AndroidPermissions"],
        _shared_group_service__WEBPACK_IMPORTED_MODULE_3__["GroupService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
        _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_9__["FilePath"],
        _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_14__["WebView"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__["File"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"],
        _services_contacts_service__WEBPACK_IMPORTED_MODULE_15__["ContactsService"],
        _ionic_native_branch_io_ngx__WEBPACK_IMPORTED_MODULE_16__["BranchIo"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_17__["SocialSharing"],
        _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_18__["Crop"]])
], GroupDetailsPage);



/***/ }),

/***/ "./src/app/services/active-state.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/active-state.service.ts ***!
  \**************************************************/
/*! exports provided: ActiveStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveStateService", function() { return ActiveStateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ActiveStateService = class ActiveStateService {
    constructor(router) {
        this.router = router;
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                // Traverse the active route tree
                this.url = this.router.url;
                console.log('URL', this.url);
            }
        });
    }
    is(name) {
        return this.url == name;
    }
};
ActiveStateService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ActiveStateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ActiveStateService);



/***/ }),

/***/ "./src/app/services/audio.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/audio.service.ts ***!
  \*******************************************/
/*! exports provided: AudioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioService", function() { return AudioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-audio/ngx */ "./node_modules/@ionic-native/native-audio/ngx/index.js");




let AudioService = class AudioService {
    constructor(platform, nativeAudio) {
        this.platform = platform;
        this.nativeAudio = nativeAudio;
        this.sounds = [];
        this.audioPlayer = new Audio();
        this.forceWebAudio = true;
        console.log('INITED AUDIO');
    }
    preload(key, asset) {
        if (this.platform.is('cordova')) {
            console.log('ENTERED AUDIO', key);
            this.nativeAudio.preloadComplex(key, asset, 1, 1, 0)
                .then(loaded => {
                console.log('KEY', key);
                console.log('ASSET', asset);
                console.log('LOADED', loaded);
            })
                .catch(err => console.log('ASSET ERROR', err));
            let soundToPlay = this.sounds.find((sound) => {
                return sound.key === key;
            });
            console.log('Sound To Play', soundToPlay);
            if (!soundToPlay) {
                this.sounds.push({
                    key: key,
                    asset: asset,
                    isNative: true
                });
            }
        }
        else {
            console.log("ADDED - EXECUTED");
            let audio = new Audio();
            audio.src = asset;
            let soundToPlay = this.sounds.find((sound) => {
                return sound.key === key;
            });
            if (!soundToPlay) {
                this.sounds.push({
                    key: key,
                    asset: asset,
                    isNative: false
                });
            }
        }
        console.log('SOUNDS', this.sounds);
    }
    play(key) {
        let soundToPlay = this.sounds.find((sound) => {
            return sound.key === key;
        });
        if (soundToPlay.isNative) {
            this.nativeAudio.play(soundToPlay.key).then((res) => {
                console.log('PLAYED', res);
            }, (err) => {
                console.log('PLAYING Error', err);
            });
        }
        else {
            this.audioPlayer.src = soundToPlay.asset;
            this.audioPlayer.play();
        }
    }
    playOnLoop(key) {
        let soundToPlay = this.sounds.find((sound) => {
            return sound.key === key;
        });
        if (soundToPlay.isNative) {
            this.nativeAudio.loop(soundToPlay.key).then((res) => {
                console.log('PLAYED', res);
            }, (err) => {
                console.log('PLAYING Error', err);
            });
        }
        else {
            this.audioPlayer.src = soundToPlay.asset;
            this.audioPlayer.play();
        }
    }
    stop(key) {
        let soundToPlay = this.sounds.find((sound) => {
            return sound.key === key;
        });
        if (soundToPlay.isNative) {
            this.nativeAudio.stop(soundToPlay.key).then((res) => {
                console.log(res);
            }, (err) => {
                console.log(err);
            });
        }
        else {
            this.audioPlayer.src = soundToPlay.asset;
            this.audioPlayer.pause();
        }
    }
};
AudioService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeAudio"] }
];
AudioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeAudio"]])
], AudioService);



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");



let AuthGuardService = class AuthGuardService {
    constructor(auth) {
        this.auth = auth;
    }
    canActivate() {
        return this.auth.isAuthenticated();
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], AuthGuardService);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");












const TOKEN_KEY = 'access_token';
const DATA_NAME = 'name';
const DATA_EMAIL = 'email';
const DATA_ID = 'id';
const DATA_AVATAR = 'profile_pic';
const DATA_MOBILE = 'mobile';
const DATA_SUBSCRIBERS = 'subscribers';
let AuthService = class AuthService {
    constructor(http, helper, storage, plt, alertController, translate, loader, nativeStorage) {
        this.http = http;
        this.helper = helper;
        this.storage = storage;
        this.plt = plt;
        this.alertController = alertController;
        this.translate = translate;
        this.loader = loader;
        this.nativeStorage = nativeStorage;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].url;
        this.user = null;
        this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"](null);
        // this.checkToken();
    }
    checkToken() {
        console.log('Started CheckToken');
        return new Promise((resolve, reject) => {
            console.log('New CheckToken');
            this.plt.ready().then(() => {
                if (this.plt.is('cordova')) {
                    this.nativeStorage.getItem(TOKEN_KEY).then(token => {
                        console.log("Token", token);
                        if (token) {
                            let decoded = this.helper.decodeToken(token);
                            let isExpired = this.helper.isTokenExpired(token);
                            if (!isExpired) {
                                this.user = decoded;
                                this.authenticationState.next(true);
                                resolve(true);
                            }
                            else {
                                this.nativeStorage.remove(TOKEN_KEY);
                                this.authenticationState.next(false);
                                resolve(false);
                            }
                        }
                        else {
                            resolve(false);
                        }
                    }).catch(err => resolve(false));
                }
                else {
                    this.storage.get(TOKEN_KEY).then(token => {
                        console.log("Token", token);
                        if (token) {
                            let decoded = this.helper.decodeToken(token);
                            let isExpired = this.helper.isTokenExpired(token);
                            if (!isExpired) {
                                this.user = decoded;
                                this.authenticationState.next(true);
                                resolve(true);
                            }
                            else {
                                this.storage.remove(TOKEN_KEY);
                                this.authenticationState.next(false);
                                resolve(false);
                            }
                        }
                        else {
                            resolve(false);
                        }
                    }).catch(err => console.log('ERROR', err));
                }
            }).catch(err => console.log('ERROR', err));
        });
    }
    register(credentials) {
        return new Promise((resolve, reject) => {
            this.loader.presentLoading();
            this.http.post(`${this.url}/api/register`, credentials).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(e => {
                this.loader.dismiss();
                this.showAlert(e.error.msg);
                throw new Error(e);
            })).subscribe(res => {
                this.loader.dismiss();
                console.log('REGISTERD', res);
                var promises = [];
                console.log('Platform is cordova', this.plt.is('cordova'));
                promises.push(this.plt.is('cordova') ? this.nativeStorage.setItem(TOKEN_KEY, res['token']) : this.storage.set(TOKEN_KEY, res['token']));
                promises.push(this.storage.set(DATA_MOBILE, res['mobile']));
                promises.push(this.storage.set(DATA_NAME, res['name']));
                promises.push(this.storage.set(DATA_EMAIL, res['email']));
                promises.push(this.storage.set(DATA_ID, res['id']));
                promises.push(this.storage.set(DATA_AVATAR, res['avatar']));
                promises.push(this.storage.set(DATA_SUBSCRIBERS, res['subscribers'] ? res['subscribers'] : false));
                promises.push(this.user = this.helper.decodeToken(res['token']));
                console.log(promises);
                this.authenticationState.next(true);
                Promise.all(promises.map(p => p.catch(e => e)))
                    .then(results => {
                    resolve(res);
                });
            }, err => { this.loader.dismiss(); });
        });
    }
    login(credentials) {
        return new Promise((resolve, reject) => {
            var promises = [];
            console.log('Platform is cordova', this.plt.is('cordova'));
            promises.push(this.plt.is('cordova') ? this.nativeStorage.setItem(TOKEN_KEY, credentials['token']) : this.storage.set(TOKEN_KEY, credentials['token']));
            promises.push(this.storage.set(DATA_MOBILE, credentials['mobile']));
            promises.push(this.storage.set(DATA_NAME, credentials['name']));
            promises.push(this.storage.set(DATA_EMAIL, credentials['email']));
            promises.push(this.storage.set(DATA_ID, credentials['id']));
            promises.push(this.storage.set(DATA_AVATAR, credentials['avatar']));
            promises.push(this.user = this.helper.decodeToken(credentials['token']));
            console.log(promises);
            this.authenticationState.next(true);
            Promise.all(promises.map(p => p.catch(e => e)))
                .then(results => {
                resolve(true);
            });
        });
        // return this.http.post(`${this.url}/api/login`, credentials)
        //   .pipe(
        //     tap(res => {
        //     }),
        //     catchError(e => {
        //       this.showAlert(e.error.msg);
        //       throw new Error(e);
        //     })
        //   );
    }
    logout() {
        return new Promise((resolve, reject) => {
            if (this.plt.is('cordova')) {
                this.nativeStorage.remove(TOKEN_KEY).then(() => {
                    this.authenticationState.next(false);
                    this.storage.remove('lang').then(() => {
                        resolve(true);
                    });
                }, err => {
                    reject(err);
                })
                    .catch(err => {
                    reject(err);
                });
            }
            else {
                this.storage.remove(TOKEN_KEY).then(() => {
                    this.authenticationState.next(false);
                    this.storage.remove('lang').then(() => {
                        resolve(true);
                    });
                }, err => {
                    reject(err);
                })
                    .catch(err => {
                    reject(err);
                });
            }
        });
    }
    getSpecialData() {
        return this.http.get(`${this.url}/api/special`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(e => {
            let status = e.status;
            if (status === 401) {
                this.showAlert('You are not authorized for this!');
                this.logout();
            }
            throw new Error(e);
        }));
    }
    isAuthenticated() {
        return this.authenticationState.value;
    }
    showAlert(msg) {
        console.log(msg);
        this.storage.get('language').then((language) => {
            console.log(language);
            this.translate.get(msg, { value: language })
                .subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            }));
            let alert = this.alertController.create({
                message: msg,
                header: 'Error',
                buttons: ['OK']
            });
            alert.then(alert => alert.present());
        });
    }
    socialLogin(res) {
        return new Promise((resolve, reject) => {
            var promises = [];
            promises.push(this.storage.set(TOKEN_KEY, res['token']));
            promises.push(this.storage.set(DATA_NAME, res['name']));
            promises.push(this.storage.set(DATA_EMAIL, res['email']));
            promises.push(this.storage.set(DATA_ID, res['id']));
            promises.push(this.storage.set(DATA_AVATAR, res['avatar']));
            promises.push(this.user = this.helper.decodeToken(res['token']));
            this.authenticationState.next(true);
            Promise.all(promises.map(p => p.catch(e => e)))
                .then(results => {
                resolve(true);
            });
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] },
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_10__["LoaderService"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_11__["NativeStorage"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"],
        _loader_service__WEBPACK_IMPORTED_MODULE_10__["LoaderService"],
        _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_11__["NativeStorage"]])
], AuthService);



/***/ }),

/***/ "./src/app/services/contacts.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/contacts.service.ts ***!
  \**********************************************/
/*! exports provided: ContactsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsService", function() { return ContactsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shareduser_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shareduser/user.service */ "./src/app/shareduser/user.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/contacts/ngx */ "./node_modules/@ionic-native/contacts/ngx/index.js");







let ContactsService = class ContactsService {
    constructor(platform, contacts, userService, storage, translate) {
        this.platform = platform;
        this.contacts = contacts;
        this.userService = userService;
        this.storage = storage;
        this.translate = translate;
        this.localContacts = {};
        this.avatarArray = [];
        this.demoUsers = [{
                _id: "5e1ef7af17e8f2711b840562",
                name: "Vimal Saxena",
                user_id: "Vimal Saxena",
                email: "hello@gmail.co",
                password: "$2b$10$yLZfX6u6qOeF46NtKlaGQuxEBR40bY/xfAdgTGDRPS8TtmtwbDSWG",
                onesignal_id: "241118af-56f7-4f12-a161-03ed73fee753",
                mobile: "+819067442886",
                groups: [],
                social: false
            }, {
                _id: "5e1766087101f9295f921a55",
                name: "Rohit",
                user_id: "Rohit",
                email: "rohitkjain90@gmail.com",
                password: "$2b$10$fzraeJmOzzq33L8mazwmU.QR26MueFxfJaPHY3glW7nsHJNTPvJnK",
                onesignal_id: "4676e156-7bbc-46be-b5c7-d30271ca21ee",
                mobile: "+918097283931",
                groups: [],
                social: false,
                contacts: [],
                avatar: "1579291102603.jpg"
            },
            {
                _id: "5e1efb3517e8f2711b84056d",
                mobile: "+919920807002",
                name: "arvey",
                email: "arveymenon@gmai",
                groups: [],
                social: false
            }];
        this.allContacts = this.demoUsers;
        this.getContacts = () => {
            if (!this.platform.is('cordova')) {
                return Promise.reject(new Error('Cannot get contacts: not cordova.'));
            }
            const fields = ["phoneNumbers"];
            const options = {
                filter: '',
                multiple: true,
                desiredFields: ['phoneNumbers', 'displayName', 'photos'],
                hasPhoneNumber: true
            };
            return this.contacts.find(fields, options);
        };
        this.cleanPhoneNumber = (phoneNumber) => {
            const phoneNumberNoSpaces = phoneNumber.replace(/-|\s/g, "");
            if (phoneNumberNoSpaces.charAt(0) === '+') {
                return phoneNumberNoSpaces;
            }
            else if (phoneNumberNoSpaces.substring(0, 2) === "00") {
                return '+' + phoneNumberNoSpaces.slice(2);
            }
            else {
                // Use user's international prefix when absent
                // FIXME: update meteor-accounts-phone typings
                const prefix = this.mobile_prefix;
                if (phoneNumberNoSpaces.charAt(0) === "0") {
                    console.log(phoneNumberNoSpaces);
                    phoneNumberNoSpaces.slice(1);
                }
                return prefix + phoneNumberNoSpaces;
            }
        };
    }
    setUserId() {
        return new Promise((resolve, reject) => {
            this.storage.get('id').then((val) => {
                this.user_id = val;
                this.storage.get('mobile').then((mob) => {
                    this.mobile = mob;
                    this.mobile_prefix = mob.substring(0, 3);
                    resolve(mob);
                });
            });
        });
    }
    getUserId() {
        return this.user_id;
    }
    getPhoneNumber() {
        return this.mobile;
    }
    saveContacts() {
        return new Promise((resolve, reject) => {
            this.getContacts()
                .then((contacts) => {
                console.log('CONTACTS', contacts);
                const mobileNumbers = [];
                contacts.forEach((contact, index) => {
                    var numbers = contact.phoneNumbers
                        .filter((phoneNumber) => {
                        return phoneNumber.type === "mobile";
                    }).map((phoneNumber) => {
                        return this.cleanPhoneNumber(phoneNumber.value);
                    }).filter((phoneNumber) => {
                        return phoneNumber.slice(1).match(/^[0-9]+$/) && phoneNumber.length >= 8;
                    });
                    if (numbers.length && numbers[0] != this.mobile) {
                        var newContact = {
                            displayName: contact.displayName,
                            phoneNumber: numbers[0],
                            avatar: contact.photos ? contact.photos : ''
                        };
                        var number = numbers[0].toString();
                        var newObject = { [number]: newContact };
                        this.localContacts[number] = newContact;
                        mobileNumbers.push(numbers[0]);
                    }
                    if (index == (contacts.length - 1)) {
                        console.log('LOCAL CONTACTS', this.localContacts);
                        console.log('MOBILE NUMBERS', mobileNumbers);
                        this.fetchContacts(mobileNumbers);
                        resolve(true);
                    }
                });
            })
                .catch((e) => {
                console.log(e);
                reject(e);
            });
        });
    }
    fetchContacts(numbers) {
        // numbers = numbers.slice(0, 500); // For Rohit
        if (this.platform.is('cordova')) {
            this.userService.fetchContacts({ numbers: numbers })
                .subscribe(fetched => {
                console.log('ALL CONTACTS', fetched);
                this.allContacts = fetched;
                for (let contact of this.allContacts) {
                    contact.name = this.localContacts[contact.mobile].displayName;
                    contact.mobile = this.localContacts[contact.mobile].phoneNumber;
                    if (contact.avatar)
                        this.avatarArray[contact.mobile] = 'http://198.12.92.202/public/uploads/' + contact.avatar;
                    else if (this.localContacts[contact.mobile].avatar)
                        this.avatarArray[contact.mobile] = this.localContacts[contact.mobile].avatar;
                    else
                        this.avatarArray[contact.mobile] = 'assets/images/user.png';
                }
                console.log(this.allContacts);
                console.log('AVATAR ARRAY', this.avatarArray);
                // this.setContacts().then(res => console.log('SET CONTACTS', res)).catch(err => console.log('CONTACTS ERROR', err));
            }, err => { console.log(err); });
        }
        else {
            this.allContacts = this.demoUsers;
        }
    }
    contactsData() {
        var data = {
            allContacts: this.allContacts,
            localContacts: this.localContacts,
            avatarArray: this.avatarArray
        };
        console.log('DATA RETURNED', data);
        return data;
    }
    setContacts() {
        console.log('SET CONTACTS');
        return new Promise((resolve, reject) => {
            var data = {
                id: this.user_id,
                contacts: this.localContacts
            };
            console.log('DATA SENT', data);
            this.userService.setContacts(data)
                .subscribe(set => {
                resolve(set);
                console.log('RESPONSE NO ERROR WALA AYA');
            }, err => {
                console.log('RESPONSE NO ERROR WALA AYA');
                // resolve(true);
                reject(err);
            });
        });
    }
    getDemoUsers() {
        return this.demoUsers;
    }
    getContactName(id) {
        let contact = this.allContacts.filter(contact => contact._id == id);
        return contact[0] ? contact[0].name : false;
    }
    getContactNameByMobile(mobile, fallback) {
        let contact = this.allContacts.filter(contact => contact.mobile == mobile);
        return contact[0] ? contact[0].name : fallback;
    }
    getContactMobile(id) {
        let contact = this.allContacts.filter(contact => contact._id == id);
        return contact[0] ? contact[0].mobile : false;
    }
};
ContactsService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_6__["Contacts"] },
    { type: _shareduser_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }
];
ContactsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_6__["Contacts"],
        _shareduser_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
], ContactsService);



/***/ }),

/***/ "./src/app/services/loader.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/loader.service.ts ***!
  \********************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");





let LoaderService = class LoaderService {
    constructor(loadingController, translate, storage) {
        this.loadingController = loadingController;
        this.translate = translate;
        this.storage = storage;
        this.storage.get('language').then((language) => {
            console.log(language);
            this.value = this.translate.instant(['Please_Wait'], { value: language ? language : 'en' });
            console.log(this.value);
        });
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: null,
                translucent: true,
                showBackdrop: false
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
    dismiss() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loadingController.dismiss();
        });
    }
};
LoaderService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
];
LoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
], LoaderService);



/***/ }),

/***/ "./src/app/services/storage.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");




let StorageService = class StorageService {
    constructor(nativeStorage, storage) {
        this.nativeStorage = nativeStorage;
        this.storage = storage;
    }
    firstTimeAppOpened() {
        return new Promise((resolve, reject) => {
            this.storage.get("ftap").then(fetched => {
                if (fetched) {
                    resolve(false);
                }
                else {
                    this.storage.set("ftap", true).then(set => {
                        resolve(true);
                    });
                }
            });
        });
    }
    setSubscriberStatus(status) {
        this.subscriber = status;
        console.log(this.subscriber);
        this.storage.set('subscribers', status);
        return status;
    }
    fetchSubscriberStatus() {
        return new Promise((resolve, reject) => {
            this.storage.get('subscribers')
                .then(value => {
                this.subscriber = value;
                resolve(true);
            });
        });
    }
    getSubscriberStatus() {
        return this.subscriber;
    }
    setGroupType(type) {
        // type: 1 - Normal Group, 2 - Subscriber List
        this.groupType = type;
    }
    getGroupType() {
        return this.groupType;
    }
    setCallType(type) {
        this.callType = type;
    }
    getCallType() {
        return this.callType;
    }
    addInArray(key, value) {
        return new Promise((resolve, reject) => {
            this.nativeStorage.getItem(key)
                .then(data => {
                if (data && data instanceof Array) {
                    data.push(value);
                    this.nativeStorage.setItem(key, data)
                        .then(() => resolve(true), error => reject(error))
                        .catch(err => reject(err));
                }
                else {
                    resolve(false);
                }
            }, error => reject(error))
                .catch(err => reject(err));
        });
    }
    checkInArray(key, value) {
        return new Promise((resolve, reject) => {
            this.nativeStorage.getItem(key)
                .then(data => {
                if (data && data instanceof Array) {
                    data.includes(value) ? resolve(true) : resolve(false);
                }
                else {
                    // NO DATA PRESENT THEN CREATE ARRAY AND STORE
                    this.nativeStorage.setItem(key, new Array())
                        .then(() => resolve(false), error => reject(error))
                        .catch(err => reject(err));
                }
            }, error => reject(error))
                .catch(err => reject(err));
        });
    }
    removeFromArray(key, value) {
        return new Promise((resolve, reject) => {
            this.nativeStorage.getItem(key)
                .then(data => {
                if (data && data instanceof Array) {
                    var index = data.indexOf(value);
                    if (index !== -1) {
                        data.splice(index, 1);
                        this.nativeStorage.setItem(key, data)
                            .then(() => resolve(true), error => reject(error))
                            .catch(err => reject(err));
                    }
                    else {
                        resolve(false);
                    }
                }
                else {
                    resolve(false);
                }
            })
                .catch(err => reject(err));
        });
    }
    setToken(token) {
        this.pushToken = token;
    }
    getToken() {
        return this.pushToken;
    }
};
StorageService.ctorParameters = () => [
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeStorage"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
];
StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeStorage"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
], StorageService);



/***/ }),

/***/ "./src/app/shared/components/setting-up-modal/setting-up-modal.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/setting-up-modal/setting-up-modal.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#content {\n  --background: transparent !important; }\n\n.footer-md::before {\n  background-image: none; }\n\n#audioItem, #videoItem {\n  padding: 15px; }\n\n#ovVideo {\n  margin: auto;\n  width: 100%;\n  height: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYmJveF9mcm9udGVuZC9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NldHRpbmctdXAtbW9kYWwvc2V0dGluZy11cC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFhLEVBQUE7O0FBR2pCO0VBQ0ksc0JBQXNCLEVBQUE7O0FBSTFCO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2V0dGluZy11cC1tb2RhbC9zZXR0aW5nLXVwLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLmZvb3Rlci1tZDo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xufVxuXG5cbiNhdWRpb0l0ZW0sICN2aWRlb0l0ZW0gIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuXG4jb3ZWaWRlbyB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/setting-up-modal/setting-up-modal.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/setting-up-modal/setting-up-modal.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SettingUpModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingUpModalComponent", function() { return SettingUpModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var openvidu_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! openvidu-browser */ "./node_modules/openvidu-browser/lib/index.js");
/* harmony import */ var openvidu_browser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(openvidu_browser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/user-model */ "./src/app/shared/models/user-model.ts");
/* harmony import */ var _services_openvidu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/openvidu.service */ "./src/app/shared/services/openvidu.service.ts");






let SettingUpModalComponent = class SettingUpModalComponent {
    constructor(modalController, platform, openViduSrv) {
        this.modalController = modalController;
        this.platform = platform;
        this.openViduSrv = openViduSrv;
        this.audioDevices = [];
        this.videoDevices = [];
        this.speakerphone = false;
    }
    ngOnInit() {
        this.platform.ready().then(() => {
            this.OV = new openvidu_browser__WEBPACK_IMPORTED_MODULE_3__["OpenVidu"]();
            this.localUser = new _models_user_model__WEBPACK_IMPORTED_MODULE_4__["UserModel"]();
            if (this.platform.is('cordova') && this.platform.is('android')) {
                this.openViduSrv.checkAndroidPermissions().then(() => {
                    navigator.mediaDevices.ondevicechange = (ev) => { this.initDevices(); };
                    this.initPublisher().then(() => this.initDevices()).catch((error) => console.log(error));
                }).catch((err) => {
                    console.log(err);
                    this.dismiss();
                });
            }
            else {
                this.initPublisher().then(() => this.initDevices()).catch((error) => console.log(error));
            }
        });
    }
    initDevices() {
        this.OV.getDevices().then((devices) => {
            this.audioDevices = devices.filter((device) => device.kind === 'audioinput');
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
                this.localUser.setVideoSource(this.videoDevices.filter((device) => device.label.includes('Front'))[0].deviceId);
            }
        });
    }
    dismiss() {
        this.modalController.dismiss();
        this.destroyPublisher();
        this.localUser = null;
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
    refreshVideos() {
        if (this.platform.is('ios') && this.platform.is('cordova')) {
            cordova.plugins.iosrtc.refreshVideos();
        }
    }
    join() {
        this.modalController.dismiss({ user: this.localUser, videoDevices: this.videoDevices });
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
};
SettingUpModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _services_openvidu_service__WEBPACK_IMPORTED_MODULE_5__["OpenViduService"] }
];
SettingUpModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-setting-up-modal',
        template: __webpack_require__(/*! raw-loader!./setting-up-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/setting-up-modal/setting-up-modal.component.html"),
        styles: [__webpack_require__(/*! ./setting-up-modal.component.scss */ "./src/app/shared/components/setting-up-modal/setting-up-modal.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _services_openvidu_service__WEBPACK_IMPORTED_MODULE_5__["OpenViduService"]])
], SettingUpModalComponent);



/***/ }),

/***/ "./src/app/shared/components/stream/ov-video.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/stream/ov-video.component.ts ***!
  \****************************************************************/
/*! exports provided: OpenViduVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenViduVideoComponent", function() { return OpenViduVideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var openvidu_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! openvidu-browser */ "./node_modules/openvidu-browser/lib/index.js");
/* harmony import */ var openvidu_browser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(openvidu_browser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let OpenViduVideoComponent = class OpenViduVideoComponent {
    constructor(platform) {
        this.platform = platform;
    }
    ngAfterViewInit() {
        this.updateVideoView();
    }
    set streamManager(streamManager) {
        this._streamManager = streamManager;
        if (!!this.elementRef) {
            this._streamManager.addVideoElement(this.elementRef.nativeElement);
        }
        if (this.isIos()) {
            this._streamManager.on('streamPropertyChanged', (event) => {
                if (event.changedProperty === 'videoDimensions') {
                    this.applyIosIonicVideoAttributes();
                }
            });
        }
    }
    updateVideoView() {
        this._streamManager.addVideoElement(this.elementRef.nativeElement);
        if (this.isIos()) {
            this.elementRef.nativeElement.onloadedmetadata = () => {
                this.applyIosIonicVideoAttributes();
            };
        }
    }
    applyIosIonicVideoAttributes() {
        this.elementRef.nativeElement.style.width = '100% !important';
        this.elementRef.nativeElement.style.zIndex = '-1';
        if (!this._streamManager.remote && !this.isBackCamera) {
            // It is a Publisher video. Custom iosrtc plugin mirror video
            this.elementRef.nativeElement.style.transform = 'scaleX(-1)';
        }
        cordova.plugins.iosrtc.refreshVideos();
    }
    isIos() {
        return this.platform.is('cordova') && this.platform.is('ios');
    }
};
OpenViduVideoComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('videoElement', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], OpenViduVideoComponent.prototype, "elementRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], OpenViduVideoComponent.prototype, "mutedSound", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], OpenViduVideoComponent.prototype, "isBackCamera", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", openvidu_browser__WEBPACK_IMPORTED_MODULE_2__["StreamManager"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [openvidu_browser__WEBPACK_IMPORTED_MODULE_2__["StreamManager"]])
], OpenViduVideoComponent.prototype, "streamManager", null);
OpenViduVideoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ov-video',
        template: `
        <video #videoElement [id]="'video-' + _streamManager.stream.streamId"></video>
    `,
        styles: [__webpack_require__(/*! ./stream.component.scss */ "./src/app/shared/components/stream/stream.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
], OpenViduVideoComponent);



/***/ }),

/***/ "./src/app/shared/components/stream/stream.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/stream/stream.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nickname {\n  background: rgba(58, 64, 74, 0.651);\n  padding: 5px !important;\n  position: absolute;\n  z-index: 999; }\n\nvideo {\n  -o-object-fit: cover;\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n  color: #ffffff;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font-family: Arial, Helvetica, sans-serif; }\n\n#statusIcons {\n  bottom: 0;\n  width: 40px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  position: absolute; }\n\n#statusIcons ion-badge {\n  margin: 2px; }\n\n#statusIcons ion-icon {\n  font-size: 1.2em; }\n\n#fullscreenButton {\n  position: absolute;\n  bottom: 1px;\n  right: 1px;\n  z-index: 1000;\n  background-color: #000000c4; }\n\n#volumeButton {\n  background-color: #000000c4;\n  position: absolute;\n  bottom: 45px;\n  right: 1px;\n  z-index: 1000; }\n\n/* Contains the video element, used to fix video letter-boxing */\n\n.OT_widget-container {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  overflow: hidden;\n  z-index: 0; }\n\n::ng-deep .mat-form-field-appearance-legacy .mat-form-field-label {\n  color: #ffffff !important; }\n\n::ng-deep .mat-form-field-appearance-legacy .mat-form-field-underline {\n  background-color: #d6d6d6d7 !important; }\n\n::ng-deep .mat-form-field.mat-focused .mat-form-field-ripple {\n  background-color: #f5f5f5c2 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYmJveF9mcm9udGVuZC9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3N0cmVhbS9zdHJlYW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBbUM7RUFDbkMsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBSWQ7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7RUFDZix5Q0FBeUMsRUFBQTs7QUFHM0M7RUFDRSxTQUFTO0VBQ1QsV0FBVztFQUNYLDJCQUFtQjtFQUFuQix3QkFBbUI7RUFBbkIsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLGFBQWE7RUFDYiwyQkFBMkIsRUFBQTs7QUFFN0I7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixVQUFVO0VBQ1YsYUFBYSxFQUFBOztBQUVmLGdFQUFBOztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFVBQVUsRUFBQTs7QUFHWjtFQUNFLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLHNDQUFzQyxFQUFBOztBQUd4QztFQUNFLHNDQUFzQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc3RyZWFtL3N0cmVhbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uaWNrbmFtZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNTgsIDY0LCA3NCwgMC42NTEpO1xuICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk7XG59XG5cblxudmlkZW8ge1xuICAtby1vYmplY3QtZml0OiBjb3ZlcjtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuI3N0YXR1c0ljb25zIHtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4jc3RhdHVzSWNvbnMgaW9uLWJhZGdle1xuICBtYXJnaW46IDJweDtcbn1cblxuI3N0YXR1c0ljb25zIGlvbi1pY29ue1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuXG4jZnVsbHNjcmVlbkJ1dHRvbntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDFweDtcbiAgcmlnaHQ6IDFweDtcbiAgei1pbmRleDogMTAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGM0O1xufVxuI3ZvbHVtZUJ1dHRvbntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGM0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNDVweDtcbiAgcmlnaHQ6IDFweDtcbiAgei1pbmRleDogMTAwMDtcbn1cbi8qIENvbnRhaW5zIHRoZSB2aWRlbyBlbGVtZW50LCB1c2VkIHRvIGZpeCB2aWRlbyBsZXR0ZXItYm94aW5nICovIFxuLk9UX3dpZGdldC1jb250YWluZXIgeyBcbiAgd2lkdGg6IDEwMCU7IFxuICBoZWlnaHQ6IDEwMCU7IFxuICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICBvdmVyZmxvdzogaGlkZGVuOyBcbiAgei1pbmRleDogMDtcbn0gXG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZkNmQ2ZDcgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxle1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1YzIgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/stream/stream.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/stream/stream.component.ts ***!
  \**************************************************************/
/*! exports provided: StreamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreamComponent", function() { return StreamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/user-model */ "./src/app/shared/models/user-model.ts");
/* harmony import */ var _ov_video_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ov-video.component */ "./src/app/shared/components/stream/ov-video.component.ts");




let StreamComponent = class StreamComponent {
    constructor() { }
    ngOnInit() {
        console.log('user', this.user);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_user_model__WEBPACK_IMPORTED_MODULE_2__["UserModel"])
], StreamComponent.prototype, "user", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('videoComponent', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ov_video_component__WEBPACK_IMPORTED_MODULE_3__["OpenViduVideoComponent"])
], StreamComponent.prototype, "videoComponent", void 0);
StreamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'stream-component',
        template: __webpack_require__(/*! raw-loader!./stream.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/stream/stream.component.html"),
        styles: [__webpack_require__(/*! ./stream.component.scss */ "./src/app/shared/components/stream/stream.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], StreamComponent);



/***/ }),

/***/ "./src/app/shared/group.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/group.service.ts ***!
  \*****************************************/
/*! exports provided: GroupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupService", function() { return GroupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm2015/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");









let GroupService = class GroupService {
    constructor(http, storage, socket) {
        this.http = http;
        this.storage = storage;
        this.socket = socket;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].url;
        this.baseURL = `${this.url}/groups`;
        this.baseURL2 = `${this.url}/chats/`;
        this.baseURL6 = `${this.url}/chats/all/`;
        this.baseURL3 = `${this.url}/api/usergp/`;
        this.baseURL4 = `${this.url}/api/delgp/`;
        this.baseURL5 = `${this.url}/groups/updatemembers/`;
        this.baseURL7 = `${this.url}/join`;
        this.baseURL8 = `${this.url}/join/`;
        this.baseURL9 = `${this.url}/feeds/`;
        this.baseURL10 = `${this.url}/groups/group/id`;
        // id:any;
        this.id = "";
    }
    postGroup(gp) {
        return this.http.post(this.baseURL, gp);
    }
    //SESSION VALUE OF ID
    sharedvalue() {
        this.storage.get('id').then((val) => {
            this.id = val;
        });
    }
    getGroupList(val, admin = null) {
        console.log("VALUE PASSED", val);
        return this.http.get(this.baseURL, { params: { id: val, admin: admin } });
    }
    getGroupDetails(id, user_id) {
        return new Promise((resolve, reject) => {
            this.http.post(this.baseURL + '/details/' + id, { user_id: user_id })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["timeout"])(5000))
                .subscribe((res) => {
                console.log(res);
                resolve(res);
            }, (err) => {
                resolve(err);
            });
        });
        // return new Promise((resolve, reject)=>{
        //   resolve();
        // })
    }
    getusergroup(val) {
        console.log('URL', (this.baseURL3 + val));
        return this.http.get(this.baseURL3 + val);
    }
    getusergroupname(val) {
        return this.http.get(this.baseURL2 + val);
    }
    getgroupuser(val) {
        return this.http.get(this.baseURL6 + val);
    }
    putGroup(gp) {
        return this.http.put(this.baseURL + `/${gp._id}`, gp);
    }
    putEditGroup(gp) {
        return this.http.put(this.baseURL + '/group' + `/${gp._id}`, gp);
    }
    deleteGroup(id, member) {
        return this.http.put(this.baseURL8 + id, member);
    }
    //For Chats Group Chat
    putChat(gp, id) {
        console.log("PUT URL", this.baseURL2 + id);
        console.log("DATA", gp);
        this.socket.emit('send-message', {
            text: gp,
            room: id,
            // sent_from: this.temp_name,
            type: 1 // 1-> text
        });
        return this.http.put(this.baseURL2 + id, gp);
    }
    getChat(id) {
        return this.http.get(this.baseURL6 + id);
    }
    putChatReadAll(data) {
        return this.http.post(this.baseURL2 + 'read-all', data);
    }
    delusergrp(id, grpid) {
        return this.http.put(this.baseURL4 + id, { params: { idval: grpid } });
    }
    delmember(id, memid) {
        return this.http.delete(this.baseURL5 + id, { params: { idval: memid } });
    }
    acceptgroup(data) {
        //var data = {"id" : id ,"mid" : memid};
        return this.http.put(this.baseURL7, data);
    }
    createFeed(data) {
        return this.http.post(this.baseURL9 + 'add', data);
    }
    editFeed(data) {
        return this.http.put(this.baseURL9 + 'single-feed', data);
    }
    deleteFeed(data) {
        console.log('BODY', data);
        return this.http.delete(this.baseURL9 + 'single-feed/' + data.feed_id);
    }
    getFeeds(data) {
        console.log('FEED DATA', data);
        console.log(this.baseURL9 + data);
        return this.http.get(this.baseURL9 + data);
    }
    postFeedLike(data) {
        return this.http.post(this.baseURL9 + '/like', data);
    }
    postComment(data) {
        return this.http.post(this.baseURL9 + '/comment', data);
    }
    postVideoCall(data) {
        return this.http.post(this.baseURL + '/create/video-chat', data);
    }
    removeMember(data, id) {
        return this.http.request('delete', this.baseURL + '/remove-member/' + id, { body: data });
    }
    checkExists(data) {
        return this.http.post(this.baseURL + '/create/check', data);
    }
    checkMember(data) {
        return this.http.post(this.baseURL + '/member/check', data);
    }
    deleteChat(data) {
        return this.http.request('delete', this.baseURL2 + '/single-chat/' + data.id, { body: data });
    }
    deleteChatRoom(id, body) {
        return this.http.request('delete', this.baseURL + '/' + id, { body: body });
    }
};
GroupService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__["Socket"] }
];
GroupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__["Socket"]])
], GroupService);



/***/ }),

/***/ "./src/app/shared/models/user-model.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/models/user-model.ts ***!
  \*********************************************/
/*! exports provided: UserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
class UserModel {
    constructor() {
        this.connectionId = '';
        this.nickname = '';
        this.streamManager = null;
        this.type = 'local';
        this.audioActive = true;
        this.videoActive = true;
        this.audioSource = undefined;
        this.videoSource = undefined;
        this.isBackCameraActive = false;
    }
    /* Getters */
    getConnectionId() {
        return this.connectionId;
    }
    getNickname() {
        return this.nickname;
    }
    getStreamManager() {
        return this.streamManager;
    }
    isLocal() {
        return this.type === 'local';
    }
    isRemote() {
        return !this.isLocal();
    }
    getAvatar() {
        return this.avatar;
    }
    isAudioActive() {
        return this.audioActive;
    }
    isVideoActive() {
        return this.videoActive;
    }
    getAudioSource() {
        return this.audioSource;
    }
    getVideoSource() {
        return this.videoSource;
    }
    isBackCamera() {
        return this.isBackCameraActive;
    }
    /* Setters */
    setStreamManager(streamManager) {
        this.streamManager = streamManager;
    }
    setConnectionId(conecctionId) {
        this.connectionId = conecctionId;
    }
    setNickname(nickname) {
        this.nickname = nickname;
    }
    setType(type) {
        this.type = type;
    }
    setUserAvatar(avatar) {
        this.avatar = avatar;
    }
    setAudioActive(isAudioActive) {
        this.audioActive = isAudioActive;
    }
    setVideoActive(isVideoActive) {
        this.videoActive = isVideoActive;
    }
    setAudioSource(audioSource) {
        this.audioSource = audioSource;
    }
    setVideoSource(videoSource) {
        this.videoSource = videoSource;
    }
    setIsBackCamera(active) {
        this.isBackCameraActive = active;
    }
}


/***/ }),

/***/ "./src/app/shared/services/openvidu.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/openvidu.service.ts ***!
  \*****************************************************/
/*! exports provided: OpenViduService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenViduService", function() { return OpenViduService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");






let OpenViduService = class OpenViduService {
    constructor(http, androidPermissions) {
        this.http = http;
        this.androidPermissions = androidPermissions;
        this.OPENVIDU_SERVER_URL = 'https://198.12.92.202:4443';
        this.MY_SECRET = 'Idgaf5485*';
        this.ANDROID_PERMISSIONS = [
            'android.permission.CAMERA',
            'android.permission.RECORD_AUDIO',
            'android.permission.MODIFY_AUDIO_SETTINGS',
            'android.permission.BLUETOOTH',
            'android.permission.BLUETOOTH_ADMIN'
        ];
    }
    getToken(mySessionId) {
        return this.createSession(mySessionId, this.OPENVIDU_SERVER_URL, this.MY_SECRET).then((sessionId) => {
            return this.createToken(sessionId, this.OPENVIDU_SERVER_URL, this.MY_SECRET);
        });
    }
    createSession(sessionId, openviduServerUrl, openviduSecret) {
        return new Promise((resolve, reject) => {
            const body = JSON.stringify({ customSessionId: sessionId });
            const options = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Authorization': 'Basic ' + btoa('OPENVIDUAPP:' + openviduSecret),
                    'Content-Type': 'application/json',
                }),
            };
            return this.http
                .post(openviduServerUrl + '/api/sessions', body, options)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
                error.status === 409 ? resolve(sessionId) : reject(error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
            }))
                .subscribe((response) => {
                console.log(response);
                resolve(response.id);
            });
        });
    }
    createToken(sessionId, openviduServerUrl, openviduSecret) {
        return new Promise((resolve, reject) => {
            const body = JSON.stringify({ session: sessionId });
            const options = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Authorization': 'Basic ' + btoa('OPENVIDUAPP:' + openviduSecret),
                    'Content-Type': 'application/json',
                }),
            };
            return this.http
                .post(openviduServerUrl + '/api/tokens', body, options)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
                reject(error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
            }))
                .subscribe((response) => {
                console.log(response);
                resolve(response.token);
            });
        });
    }
    getRandomAvatar() {
        return new Promise((resolve, reject) => {
            this.http.get('https://randomuser.me/api/?lego').subscribe((data) => {
                resolve(data.results[0].picture.thumbnail);
            });
        });
    }
    checkAndroidPermissions() {
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
};
OpenViduService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_5__["AndroidPermissions"] }
];
OpenViduService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_5__["AndroidPermissions"]])
], OpenViduService);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _shared_components_setting_up_modal_setting_up_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/setting-up-modal/setting-up-modal.component */ "./src/app/shared/components/setting-up-modal/setting-up-modal.component.ts");
/* harmony import */ var _shared_components_stream_stream_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/stream/stream.component */ "./src/app/shared/components/stream/stream.component.ts");
/* harmony import */ var _shared_components_stream_ov_video_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/components/stream/ov-video.component */ "./src/app/shared/components/stream/ov-video.component.ts");








let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
        ],
        declarations: [_shared_components_stream_stream_component__WEBPACK_IMPORTED_MODULE_6__["StreamComponent"], _shared_components_setting_up_modal_setting_up_modal_component__WEBPACK_IMPORTED_MODULE_5__["SettingUpModalComponent"], _shared_components_stream_ov_video_component__WEBPACK_IMPORTED_MODULE_7__["OpenViduVideoComponent"]],
        entryComponents: [_shared_components_setting_up_modal_setting_up_modal_component__WEBPACK_IMPORTED_MODULE_5__["SettingUpModalComponent"]],
        exports: [
            _shared_components_stream_stream_component__WEBPACK_IMPORTED_MODULE_6__["StreamComponent"], _shared_components_setting_up_modal_setting_up_modal_component__WEBPACK_IMPORTED_MODULE_5__["SettingUpModalComponent"], _shared_components_stream_ov_video_component__WEBPACK_IMPORTED_MODULE_7__["OpenViduVideoComponent"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/shareduser/user.service.ts":
/*!********************************************!*\
  !*** ./src/app/shareduser/user.service.ts ***!
  \********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm2015/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");








let UserService = 
//import { CONSTANTS } from '../services/constant';
class UserService {
    constructor(http, alertController) {
        this.http = http;
        this.alertController = alertController;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].url;
        this.users = [];
        this.baseURL = `${this.url}/api/search-user`;
        this.baseURL2 = `${this.url}/groups/`;
        this.baseURL3 = `${this.url}/api/userid/`;
        this.baseURL4 = `${this.url}/api/user/avatar/`;
        this.baseURL5 = `${this.url}/api/user/social/login`;
        this.baseURL6 = `${this.url}/api/user/name/`;
        this.baseURL7 = `${this.url}/api/generate-otp`;
        this.baseURL8 = `${this.url}/api/check/`;
        this.baseURL9 = `${this.url}/api/contacts/fetch`;
        this.baseURL10 = `${this.url}/api/contacts/update`;
        this.baseURL11 = `${this.url}/api/user/subscriber/`;
        this.baseURL12 = `${this.url}/api/block-list/get/`;
        this.baseURL13 = `${this.url}/api/block-list/remove`;
    }
    //   postGroup(gp: Group) {
    //     return this.http.post(this.baseURL, gp);
    //   }
    setAvatar(avatar) {
        if (!avatar) {
            return false;
        }
        if (avatar.search("facebook.com") != -1) {
            // console.log("FACEBOOK AVATAR FOUND")
            console.log(avatar);
            return avatar;
        }
        else {
            // console.log("FACEBOOK AVATAR NOT FOUND")
            return 'http://198.12.92.202/public/uploads/' + avatar;
        }
    }
    getuserList(data, body) {
        return this.http.post(this.baseURL, body, { params: { name: data } });
    }
    putUser(data, id) {
        return this.http.put(this.baseURL2 + id, data);
    }
    userGroups(data, id) {
        return this.http.put(this.baseURL3 + id, data);
    }
    putUserName(data) {
        console.log(data);
        return this.http.put(this.baseURL6, data);
    }
    putUserAvatar(data) {
        return this.http.put(this.baseURL4, data);
    }
    // For Social Login
    postUser(data) {
        return this.http.put(this.baseURL2, data);
    }
    socialLogin(data) {
        return this.http.post(this.baseURL5, data);
    }
    generateOTP(data) {
        return this.http.post(this.baseURL7, data);
    }
    checkMobileNumber(data) {
        return this.http.post(this.baseURL8 + 'mobile-number', data);
    }
    checkDetails(data) {
        return this.http.post(this.baseURL8 + 'details', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => {
            this.showAlert(e.error.msg);
            throw new Error(e);
        }));
        ;
    }
    //   deleteGroup(_id: string) {
    //     return this.http.delete(this.baseURL + `/${_id}`);
    //   }
    showAlert(msg) {
        console.log(msg);
        let alert = this.alertController.create({
            message: msg,
            header: 'Error',
            buttons: ['OK']
        });
        alert.then(alert => alert.present());
    }
    fetchContacts(data) {
        return this.http.post(this.baseURL9, data);
    }
    setContacts(data) {
        return this.http.post(this.baseURL10, data);
    }
    setSubscriber(data) {
        return this.http.post(this.baseURL11, data);
    }
    getBlockList(id) {
        console.log(id);
        return this.http.get(this.baseURL12 + id);
    }
    removeFromBlock(data) {
        return this.http.post(this.baseURL13, data);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    //import { CONSTANTS } from '../services/constant';
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]])
], UserService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    url: 'http://198.12.92.202:5000'
    // url: 'http://localhost:5000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);




 // HAMMER TIME
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "./src/utils/IonicGestureConfig.ts":
/*!*****************************************!*\
  !*** ./src/utils/IonicGestureConfig.ts ***!
  \*****************************************/
/*! exports provided: IonicGestureConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicGestureConfig", function() { return IonicGestureConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



/**
 * @hidden
 * This class overrides the default Angular gesture config.
 */
let IonicGestureConfig = class IonicGestureConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["HammerGestureConfig"] {
    buildHammer(element) {
        const mc = new window.Hammer(element);
        for (const eventName in this.overrides) {
            if (eventName) {
                mc.get(eventName).set(this.overrides[eventName]);
            }
        }
        return mc;
    }
};
IonicGestureConfig = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], IonicGestureConfig);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/bbox_frontend/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map