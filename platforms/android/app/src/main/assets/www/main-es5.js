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

/***/ "./node_modules/@ionic/core/dist/esm-es5 lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5 lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet-controller_8.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-action-sheet-controller_8.entry.js",
		"common",
		2
	],
	"./ion-action-sheet-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-action-sheet-ios.entry.js",
		"common",
		3
	],
	"./ion-action-sheet-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-action-sheet-md.entry.js",
		"common",
		4
	],
	"./ion-alert-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-alert-ios.entry.js",
		"common",
		5
	],
	"./ion-alert-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-alert-md.entry.js",
		"common",
		6
	],
	"./ion-app_8-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-app_8-ios.entry.js",
		0,
		"common",
		7
	],
	"./ion-app_8-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-app_8-md.entry.js",
		0,
		"common",
		8
	],
	"./ion-avatar_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-avatar_3-ios.entry.js",
		"common",
		9
	],
	"./ion-avatar_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-avatar_3-md.entry.js",
		"common",
		10
	],
	"./ion-back-button-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-back-button-ios.entry.js",
		"common",
		11
	],
	"./ion-back-button-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-back-button-md.entry.js",
		"common",
		12
	],
	"./ion-backdrop-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-backdrop-ios.entry.js",
		13
	],
	"./ion-backdrop-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-backdrop-md.entry.js",
		14
	],
	"./ion-button_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-button_2-ios.entry.js",
		"common",
		15
	],
	"./ion-button_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-button_2-md.entry.js",
		"common",
		16
	],
	"./ion-card_5-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-card_5-ios.entry.js",
		"common",
		17
	],
	"./ion-card_5-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-card_5-md.entry.js",
		"common",
		18
	],
	"./ion-checkbox-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-checkbox-ios.entry.js",
		"common",
		19
	],
	"./ion-checkbox-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-checkbox-md.entry.js",
		"common",
		20
	],
	"./ion-chip-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-chip-ios.entry.js",
		"common",
		21
	],
	"./ion-chip-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-chip-md.entry.js",
		"common",
		22
	],
	"./ion-col_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-col_3.entry.js",
		23
	],
	"./ion-datetime_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-datetime_3-ios.entry.js",
		"common",
		24
	],
	"./ion-datetime_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-datetime_3-md.entry.js",
		"common",
		25
	],
	"./ion-fab_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-fab_3-ios.entry.js",
		"common",
		26
	],
	"./ion-fab_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-fab_3-md.entry.js",
		"common",
		27
	],
	"./ion-img.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-img.entry.js",
		28
	],
	"./ion-infinite-scroll_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-infinite-scroll_2-ios.entry.js",
		"common",
		29
	],
	"./ion-infinite-scroll_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-infinite-scroll_2-md.entry.js",
		"common",
		30
	],
	"./ion-input-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-input-ios.entry.js",
		"common",
		31
	],
	"./ion-input-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-input-md.entry.js",
		"common",
		32
	],
	"./ion-item-option_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-item-option_3-ios.entry.js",
		"common",
		33
	],
	"./ion-item-option_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-item-option_3-md.entry.js",
		"common",
		34
	],
	"./ion-item_8-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-item_8-ios.entry.js",
		"common",
		35
	],
	"./ion-item_8-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-item_8-md.entry.js",
		"common",
		36
	],
	"./ion-loading-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-loading-ios.entry.js",
		"common",
		37
	],
	"./ion-loading-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-loading-md.entry.js",
		"common",
		38
	],
	"./ion-menu_4-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-menu_4-ios.entry.js",
		"common",
		39
	],
	"./ion-menu_4-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-menu_4-md.entry.js",
		"common",
		40
	],
	"./ion-modal-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-modal-ios.entry.js",
		0,
		"common",
		41
	],
	"./ion-modal-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-modal-md.entry.js",
		0,
		"common",
		42
	],
	"./ion-nav_5.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-nav_5.entry.js",
		0,
		"common",
		43
	],
	"./ion-popover-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-popover-ios.entry.js",
		0,
		"common",
		44
	],
	"./ion-popover-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-popover-md.entry.js",
		0,
		"common",
		45
	],
	"./ion-progress-bar-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-progress-bar-ios.entry.js",
		"common",
		46
	],
	"./ion-progress-bar-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-progress-bar-md.entry.js",
		"common",
		47
	],
	"./ion-radio_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-radio_2-ios.entry.js",
		"common",
		48
	],
	"./ion-radio_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-radio_2-md.entry.js",
		"common",
		49
	],
	"./ion-range-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-range-ios.entry.js",
		"common",
		50
	],
	"./ion-range-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-range-md.entry.js",
		"common",
		51
	],
	"./ion-refresher_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-refresher_2-ios.entry.js",
		"common",
		52
	],
	"./ion-refresher_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-refresher_2-md.entry.js",
		"common",
		53
	],
	"./ion-reorder_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-reorder_2-ios.entry.js",
		"common",
		54
	],
	"./ion-reorder_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-reorder_2-md.entry.js",
		"common",
		55
	],
	"./ion-ripple-effect.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-ripple-effect.entry.js",
		56
	],
	"./ion-route_4.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-route_4.entry.js",
		"common",
		57
	],
	"./ion-searchbar-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-searchbar-ios.entry.js",
		"common",
		58
	],
	"./ion-searchbar-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-searchbar-md.entry.js",
		"common",
		59
	],
	"./ion-segment_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-segment_2-ios.entry.js",
		"common",
		60
	],
	"./ion-segment_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-segment_2-md.entry.js",
		"common",
		61
	],
	"./ion-select_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-select_3-ios.entry.js",
		"common",
		62
	],
	"./ion-select_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-select_3-md.entry.js",
		"common",
		63
	],
	"./ion-slide_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-slide_2-ios.entry.js",
		64
	],
	"./ion-slide_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-slide_2-md.entry.js",
		65
	],
	"./ion-spinner.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-spinner.entry.js",
		"common",
		66
	],
	"./ion-split-pane-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-split-pane-ios.entry.js",
		67
	],
	"./ion-split-pane-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-split-pane-md.entry.js",
		68
	],
	"./ion-tab-bar_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-tab-bar_2-ios.entry.js",
		"common",
		69
	],
	"./ion-tab-bar_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-tab-bar_2-md.entry.js",
		"common",
		70
	],
	"./ion-tab_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-tab_2.entry.js",
		1
	],
	"./ion-text.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-text.entry.js",
		"common",
		71
	],
	"./ion-textarea-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-textarea-ios.entry.js",
		"common",
		72
	],
	"./ion-textarea-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-textarea-md.entry.js",
		"common",
		73
	],
	"./ion-toast-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-toast-ios.entry.js",
		"common",
		74
	],
	"./ion-toast-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-toast-md.entry.js",
		"common",
		75
	],
	"./ion-toggle-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-toggle-ios.entry.js",
		"common",
		76
	],
	"./ion-toggle-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-toggle-md.entry.js",
		"common",
		77
	],
	"./ion-virtual-scroll.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-virtual-scroll.entry.js",
		78
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
webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm-es5 lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var routes = [
    { path: '', loadChildren: './init-page/init-page.module#InitPagePageModule' },
    { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    {
        // path: 'home',
        // loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
        // 
        path: 'home',
        loadChildren: function () { return Promise.all(/*! import() | tabs-tabs-module */[__webpack_require__.e("default~create-feed-create-feed-module~group-chat-admin-group-chat-admin-module~group-chat-group-cha~c0185a8f"), __webpack_require__.e("tabs-tabs-module")]).then(__webpack_require__.bind(null, /*! ./tabs/tabs.module */ "./src/app/tabs/tabs.module.ts")).then(function (m) { return m.TabsPageModule; }); },
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
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__["PreloadAllModules"], useHash: true })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
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
var TOKEN_KEY = 'access_token';
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar, authService, router, translate, navController, storage, oneSignal, globalization, screenOrientation, 
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
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // this.statusBar.overlaysWebView(true);
            _this.statusBar.backgroundColorByHexString('#005DDD');
            // set to landscape
            _this.screenOrientation.lock(_this.screenOrientation.ORIENTATIONS.PORTRAIT);
            // this.backgroundMode.enable();
            // this.autostart.enable();
            _this.storageService.firstTimeAppOpened().then(function (check) {
                if (check) {
                    _this.goToGetNumber();
                }
                else {
                    _this.authService.checkToken().then(function (valid) {
                        console.log('Returned Value', valid);
                        if (valid) {
                            _this.goToHome();
                        }
                        else {
                            _this.goToGetNumber();
                        }
                    })
                        .catch(function (err) { return console.log('ERROR', err); });
                }
            });
            // User on call variable
            // this.events.subscribe('userOnCall', (onCall: boolean, roomId) => {
            //   // user and time are the same arguments passed in `events.publish(user, time)`
            //   console.log('RoomId ', roomId, 'is active -', onCall);
            //   this.userOnCall = onCall;
            // });
            _this.globalization.getPreferredLanguage()
                .then(function (lang) {
                if (lang.value == 'ja') {
                    _this.translate.setDefaultLang('jp');
                }
                else {
                    _this.translate.setDefaultLang('en');
                }
                _this.storage.get('language')
                    .then(function (lang) {
                    if (lang) {
                        _this.translate.use(lang);
                    }
                });
            })
                .catch(function (e) { return console.log(e); });
        }).catch(function (err) { return console.log('ERROR', err); });
        // this.platform.resume.subscribe(resumed => {
        //   this.initBranch();
        // })
    };
    AppComponent.prototype.initializeOnesignal = function () {
        var _this = this;
        this.oneSignal.startInit('f9bcedce-1f87-46df-a595-c75110e062eb', '696273358246');
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
        this.oneSignal.handleNotificationReceived().subscribe(function (data) {
            // do something when notification is received
            var msg = data.payload.body;
            var title = data.payload.title;
            var additionalData = data.payload.additionalData;
            console.log(additionalData);
            // this.showAlert(title, msg, additionalData.task);
            if (additionalData.task == "message")
                console.log('message');
            // this.router.navigate(['home/tabs/tab1']);
            if (additionalData.task == "call") {
                _this.storageService.setCallType('video');
                _this.router.navigate(['receive-incoming-call/' + additionalData._id]);
                _this.callId = additionalData._id;
                _this.startCall();
            }
            if (additionalData.task == "audio-call") {
                _this.storageService.setCallType('audio');
                _this.router.navigate(['receive-incoming-call/' + additionalData._id]);
                _this.callId = additionalData._id;
                _this.startCall();
            }
            // this.dialogs.alert('Hello world')
            //   .then(() => console.log('Dialog dismissed'))
            //   .catch(e => console.log('Error displaying dialog', e));
            // alert('Hello World');
        });
        this.oneSignal.handleNotificationOpened().subscribe(function (data) {
            var additionalData = data.notification.payload.additionalData;
            console.log(additionalData);
            // this.showAlert('Notification opened', 'You already read this before', additionalData.task);
            // this.dialogs.alert('Hello world')
            //   .then(() => console.log('Dialog dismissed'))
            //   .catch(e => console.log('Error displaying dialog', e));
            // alert('Hello World');
            if (additionalData.task == "message")
                console.log('message');
            if (additionalData.subscriber == false)
                _this.router.navigate(['group-chat/' + additionalData.group]);
            else
                _this.router.navigate(['group-chat-admin/' + additionalData.group]);
            if (additionalData.task == "call") {
                _this.storageService.setCallType('video');
                _this.router.navigate(['receive-incoming-call/' + additionalData._id]);
                _this.callId = additionalData._id;
                _this.startCall();
            }
            if (additionalData.task == "audio-call") {
                _this.storageService.setCallType('audio');
                _this.router.navigate(['receive-incoming-call/' + additionalData._id]);
                _this.callId = additionalData._id;
                _this.startCall();
            }
        });
        this.oneSignal.endInit();
        this.oneSignal.getIds().then(function (data) {
            _this.storageService.setToken(data.pushToken);
        });
    };
    AppComponent.prototype.initApp = function () {
        console.log('Init App');
        this.splashScreen.hide();
        this.initializeOnesignal();
        this.initAudios();
        this.listenToAuth();
        this.listenToNetwork();
        this.initBranch();
    };
    AppComponent.prototype.startCall = function () {
        // this.recieving_call = true;
        this.ref.detectChanges();
        console.log('VALUE CHANGED');
        this.waitForCallEnd();
    };
    AppComponent.prototype.showAlert = function (title, msg, task) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: title,
                            subHeader: msg,
                            buttons: [
                                {
                                    text: "Action: " + task,
                                    handler: function () {
                                        // E.g: Navigate to a specific screen
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.waitForCallEnd = function () {
        var _this = this;
        setTimeout(function () {
            _this.recieving_call = false;
            _this.ref.detectChanges();
            console.log('VALUE CHANGED', _this.recieving_call);
        }, 30000);
    };
    AppComponent.prototype.joinCall = function () {
        this.router.navigate(['receive-incoming-call/' + this.callId]);
    };
    AppComponent.prototype.initAudios = function () {
        console.log('INIT AUDIO');
        this.audio.preload('calling-tone', 'assets/audio/calling-tone.mp3');
        this.audio.preload('call-ended-tone', 'assets/audio/call-ended-tone.mp3');
        this.audio.preload('alert', 'assets/audio/alert.wav');
    };
    AppComponent.prototype.goToHome = function () {
        var _this = this;
        console.log('Going Home');
        if (this.platform.is('cordova')) {
            this.contactsService.setUserId().then(function (user) {
                _this.contactsService.saveContacts().then(function (saved) {
                    _this.contactsService.setContacts().then(function (set) {
                        console.log("user is logged in");
                        _this.navController.navigateRoot([_this.loggedInRoute]).then(function (navigated) {
                            _this.initApp();
                        })
                            .catch(function (e) { return console.log(e); });
                    });
                });
            });
        }
        else {
            this.navController.navigateRoot([this.loggedInRoute]).then(function (navigated) {
                _this.initApp();
            });
        }
    };
    AppComponent.prototype.goToGetNumber = function () {
        var _this = this;
        console.log('Get Number');
        this.navController.navigateRoot('get-number').then(function (navigated) {
            _this.initApp();
        })
            .catch(function (e) { return console.log(e); });
    };
    AppComponent.prototype.listenToAuth = function () {
        var _this = this;
        this.authService.authenticationState.subscribe(function (state) {
            if (state == true && !_this.activeState.is(_this.loggedInRoute)) {
                console.log('AUTH STATE TRUE', state);
                _this.goToHome();
            }
            if (state == false) {
                console.log('AUTH STATE', state);
                _this.navController.navigateRoot('get-number').then(function (navigated) {
                    // this.initApp()
                });
            }
        });
    };
    AppComponent.prototype.listenToNetwork = function () {
        var _this = this;
        var disconnectSubscription = this.network.onDisconnect().subscribe(function () {
            _this.noNetwork = true;
            disconnectSubscription.unsubscribe();
            _this.waitForReconnection();
        });
    };
    AppComponent.prototype.waitForReconnection = function () {
        var _this = this;
        var connectSubscription = this.network.onConnect().subscribe(function () {
            _this.noNetwork = false;
            connectSubscription.unsubscribe();
            _this.listenToNetwork();
        });
    };
    AppComponent.prototype.initBranch = function () {
        var _this = this;
        if (!this.platform.is("cordova")) {
            return;
        }
        this.branch.setDebug(true);
        this.branch.initSession().then(function (data) {
            console.log('BRANCH DATA', data);
            if (data["+clicked_branch_link"]) {
                // read deep link data on click
                console.log("Deep Link Data", data);
                console.log(JSON.stringify(data));
                if (data['$deeplink_path']) {
                    var path = data['$deeplink_path'];
                    var pathSplit_1 = path.split('/');
                    _this.navController.navigateRoot([_this.loggedInRoute]).then(function (navigated) {
                        if (pathSplit_1[0] == 'user') {
                            _this.checkChat(pathSplit_1[1]);
                        }
                        else {
                            _this.joinGroup(pathSplit_1[1]);
                        }
                    });
                }
            }
        });
        this.branch.getFirstReferringParams().then(function (data) {
            console.log('Referring Params', data);
        });
    };
    AppComponent.prototype.checkChat = function (id) {
        var _this = this;
        this.loader.presentLoading();
        console.log('Clicked and ID', id);
        var user_id = this.contactsService.getUserId();
        var body = {
            members: [id, user_id]
        };
        this.groupService.checkExists(body)
            .subscribe(function (check) {
            _this.loader.dismiss();
            _this.ref.detectChanges();
            console.log('CHECk', check);
            if (check.exists) {
                _this.router.navigate(['group-chat', check.response[0]._id]);
            }
            else {
                _this.loader.presentLoading();
                var userArray = [];
                userArray[0] = { memberid: user_id, accepted: true, admin: true };
                userArray[1] = { memberid: id, accepted: false, admin: false };
                var empty_group = {
                    name: "Personal Group",
                    description: "No Description"
                };
                _this.groupService.postGroup(empty_group).subscribe(function (res) {
                    console.log(res);
                    _this.userService.putUser({ members: userArray }, res._id).subscribe(function (res1) {
                        _this.router.navigate(['group-chat', res._id]);
                        _this.loader.dismiss();
                        _this.ref.detectChanges();
                    });
                }, function (err) { _this.loader.dismiss(); _this.ref.detectChanges(); });
            }
        }, function (err) { _this.loader.dismiss(); _this.ref.detectChanges(); });
    };
    AppComponent.prototype.joinGroup = function (id) {
        var _this = this;
        this.loader.presentLoading();
        console.log('Clicked and ID', id);
        var data = {
            id: id,
            member: this.contactsService.getUserId()
        };
        console.log(data);
        this.groupService.checkMember(data).subscribe(function (res) {
            console.log("RESULT", res);
            if (res.error == false) {
                _this.router.navigate(['group-chat-admin', res.data._id]);
                _this.loader.dismiss();
                _this.ref.detectChanges();
            }
        }, function (err) { _this.loader.dismiss(); _this.ref.detectChanges(); });
    };
    AppComponent.ctorParameters = function () { return [
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
    ]; };
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
    return AppComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm5/ngx-socket-io.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
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
/* harmony import */ var ngx_linkifyjs__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ngx-linkifyjs */ "./node_modules/ngx-linkifyjs/esm5/ngx-linkifyjs.es5.js");
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
var config = { url: 'http://198.12.92.202:5001', options: {} };
// const config: SocketIoConfig = { url: 'http://localhost:5001', options: {} };
function jwtOptionsFactory(storage) {
    return {
        tokenGetter: function () {
            return storage.get('access_token');
        },
        whitelistedDomains: ['198.12.92.202:5000']
    };
}
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_24__["TranslateHttpLoader"](http, 'assets/languages/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
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
    return AppModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _group_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./group-details.page */ "./src/app/group-details/group-details.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _group_details_page__WEBPACK_IMPORTED_MODULE_6__["GroupDetailsPage"]
    }
];
var GroupDetailsPageModule = /** @class */ (function () {
    function GroupDetailsPageModule() {
    }
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
    return GroupDetailsPageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_group_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/group.service */ "./src/app/shared/group.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _services_contacts_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/contacts.service */ "./src/app/services/contacts.service.ts");
/* harmony import */ var _ionic_native_branch_io_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/branch-io/ngx */ "./node_modules/@ionic-native/branch-io/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/ngx/index.js");



















var STORAGE_KEY = 'my_files';
var GroupDetailsPage = /** @class */ (function () {
    function GroupDetailsPage(modalCtrl, router, camera, actionSheetCtrl, platform, loader, route, androidPermissions, groupService, formBuilder, storage, filePath, webview, file, ref, translate, toastCtrl, http, contactsService, branch, socialSharing, crop) {
        // this.route.params.subscribe(params => {
        //   this.group_id = params['id']; 
        //     // alert(this.id);
        //     console.log(this.group_id);
        //   });
        var _this = this;
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
        this.storage.get('id').then(function (val) {
            _this.adminidval = val;
            console.log(_this.adminidval);
            //console.log('id', val);
        });
    }
    GroupDetailsPage.prototype.ngAfterViewInit = function () {
    };
    GroupDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.loader.presentLoading();
        console.log(this.group_id);
        this.groupform = this.formBuilder.group({
            _id: [this.group_id],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
        });
        this.groupService.getChat(this.group_id).subscribe(function (result) {
            var res = result;
            console.log('RES', res);
            _this.members = res.memberData;
            for (var _i = 0, _a = _this.members; _i < _a.length; _i++) {
                var member = _a[_i];
                member.checked = true;
                var name = _this.contactsService.getContactName(member._id);
                name ? member.name = name : member.name = member.mobile + ' <span class="temp-name">(' + member.name + ')</span>';
                console.log(member);
            }
            console.log(_this.members);
            _this.data = res;
            _this.groupService.selectedGroup = res['name'];
            _this.groupform.controls['name'].setValue(res['name']);
            _this.groupform.controls['description'].setValue(res['description']);
            _this.loader.dismiss();
        });
    };
    GroupDetailsPage.prototype.selectImage = function () {
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
    GroupDetailsPage.prototype.takePicture = function (sourceType) {
        var _this = this;
        var options = {
            quality: 65,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imagePath) {
            _this.crop.crop(imagePath, { quality: 75 }).then(function (newImage) {
                _this.startProcess(newImage, 'image', sourceType);
            });
        });
    };
    GroupDetailsPage.prototype.startProcess = function (file, type, sourceType) {
        var _this = this;
        this.images = [];
        console.log("PROCESS STARTED");
        this.currentFileType = type;
        // if ((this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) || (this.platform.is('android') && type == 'doc')) {
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
        // } else {
        //     var currentName = file.substr(file.lastIndexOf('/') + 1);
        //     var correctPath = file.substr(0, file.lastIndexOf('/') + 1);
        //     this.copyFileToLocalDir(correctPath, currentName, this.createFileName(file.lastIndexOf('/') + 1));
        // }
    };
    GroupDetailsPage.prototype.createFileName = function (fileName) {
        var ext = this.getFileExtension(fileName);
        console.log("EXT", ext);
        var d = new Date(), n = d.getTime(), newFileName = n + '.' + ext;
        console.log("FILE NAME", fileName);
        return newFileName;
    };
    GroupDetailsPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.checkPermissions().then(function () {
            _this.file.copyFile(namePath, currentName, _this.file.dataDirectory, newFileName).then(function (success) {
                _this.updateStoredFiles(newFileName, currentName);
            }, function (error) {
                console.log("COULD NOT STORE FILE", error);
                // let value = this.translate.instant(['Error_while_storing_file'], { value: this.lang })
                _this.presentToast("Error_while_storing_file");
            });
        });
    };
    GroupDetailsPage.prototype.updateStoredFiles = function (name, oldName) {
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
                _this.avatar = true;
                _this.ref.detectChanges(); // trigger change detection cycle
                console.log("NEW IMGS", _this.images);
            }
            // if(this.platform.is('ios') || this.platform.is('android')){
            //   this.startUpload();
            // }
        });
    };
    GroupDetailsPage.prototype.getFileExtension = function (entry) {
        var file = entry.toString();
        var splits = file.split('.');
        var ext = splits[(splits.length - 1)];
        return ext;
    };
    GroupDetailsPage.prototype.checkPermissions = function () {
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
    GroupDetailsPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            var converted = this.webview.convertFileSrc(img);
            return converted;
        }
    };
    GroupDetailsPage.prototype.presentToast = function (text) {
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
    GroupDetailsPage.prototype.back = function () {
        console.log(this.members);
        var members = [];
        this.members.forEach(function (element) {
            if (element.checked) {
                members.push(element._id);
            }
        });
        this.modalCtrl.dismiss({
            'dismissed': true,
            'members': members
        });
    };
    GroupDetailsPage.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.groupform.value);
        if (this.images) {
            this.startUpload();
        }
        else {
            this.groupService.putEditGroup(this.groupform.value).subscribe(function (updated) {
                _this.presentToast('Updated Successfully');
            });
        }
    };
    GroupDetailsPage.prototype.startUpload = function () {
        var _this = this;
        console.log('STARTED UPLOAD');
        if (this.images) {
            this.images.forEach(function (imgEntry) {
                _this.getFileFromLocal(imgEntry.filePath);
            });
        }
    };
    GroupDetailsPage.prototype.getFileFromLocal = function (entry) {
        var _this = this;
        this.file.resolveLocalFilesystemUrl(entry)
            .then(function (entry) {
            entry.file(function (file) { return _this.readFile(file); });
        })
            .catch(function (err) {
            // let value = this.translate.instant(['Error_while_reading_file'], { value: this.lang })
            _this.presentToast("Error_while_reading_file");
        });
    };
    GroupDetailsPage.prototype.readFile = function (file) {
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
    GroupDetailsPage.prototype.uploadFileData = function (formData, name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var uploadCall;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.loader.presentLoading();
                uploadCall = this.http.post("http://198.12.92.202:5000/upload/single-file", formData)
                    .subscribe(function (res) {
                    _this.loader.dismiss();
                    console.log(res);
                    console.log(res['error']);
                    if (res['error']) {
                        // let value = this.translate.instant(['File_upload_failed'], { value: this.lang })
                        _this.presentToast("File_upload_failed");
                    }
                    else {
                        // let value = this.translate.instant(['File_upload_success'], { value: this.lang })
                        _this.presentToast("File_upload_success");
                        var create = _this.groupform.value;
                        create.avatar = name;
                        _this.groupService.putEditGroup(create).subscribe(function (updated) {
                            console.log('Updated', updated);
                            _this.presentToast('Updated Successfully');
                        });
                        // Empty the array to avoid looping
                        // this.images = [];
                        // this.onSubmit()
                        // this.postGroup(create)
                        // this.groupService.putChat(file_message, this.id).subscribe((res) => {
                        // this.uploading = false;
                        //   this.images = [];
                        _this.ref.detectChanges();
                        // this.reset();
                        //   this.chatData();
                        _this.currentFileType = new String();
                        // });
                    }
                }, function (err) {
                    console.log("UPLOAD FAILED", err);
                    _this.images = [];
                });
                return [2 /*return*/];
            });
        });
    };
    GroupDetailsPage.prototype.findOthers = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var a = _this.data.members;
            var b = [];
            a.splice(a.findIndex(function (e) { return e.memberid == _this.adminidval; }), 1);
            a.forEach(function (element) {
                b.push(element.memberid);
            });
            // var result = this.data.members.filter(m => m.admin == true)
            resolve(b);
        });
    };
    GroupDetailsPage.prototype.ngOnDestroy = function () {
        var members = [];
        this.members.forEach(function (element) {
            if (element.checked) {
                members.push(element._id);
            }
        });
        this.modalCtrl.dismiss({
            'dismissed': true,
            'members': members
        });
        //   this.router.navigate(["/home/tabs/tab1/groupchat/"+this.group_id,{users: JSON.stringify(this.usersArray)}])
    };
    GroupDetailsPage.prototype.shareLink = function () {
        var _this = this;
        var properties = {
            canonicalIdentifier: "group/" + this.data._id,
            contentMetadata: {
                group_id: this.data._id
            }
        };
        this.branch.createBranchUniversalObject(properties).then(function (buo) {
            _this.buo = buo;
            var urlProperties = {
                $deeplink_path: "group/" + _this.data._id,
                user_id: _this.data._id
            };
            _this.buo.generateShortUrl({}, urlProperties)
                .then(function (res) {
                console.log("Response: ", res.url);
                _this.sharing_link = res.url + '?type=group&id=' + _this.data._id;
                _this.socialSharing.share('Download the Amazing B-Box App to chat with me now!', 'Hey! Lets Chat on B-Box', null, _this.sharing_link);
            })
                .catch(function (err) {
                console.log("Error: ", err);
            });
        });
    };
    GroupDetailsPage.ctorParameters = function () { return [
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
    ]; };
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
    return GroupDetailsPage;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ActiveStateService = /** @class */ (function () {
    function ActiveStateService(router) {
        var _this = this;
        this.router = router;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                // Traverse the active route tree
                _this.url = _this.router.url;
                console.log('URL', _this.url);
            }
        });
    }
    ActiveStateService.prototype.is = function (name) {
        return this.url == name;
    };
    ActiveStateService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ActiveStateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ActiveStateService);
    return ActiveStateService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-audio/ngx */ "./node_modules/@ionic-native/native-audio/ngx/index.js");




var AudioService = /** @class */ (function () {
    function AudioService(platform, nativeAudio) {
        this.platform = platform;
        this.nativeAudio = nativeAudio;
        this.sounds = [];
        this.audioPlayer = new Audio();
        this.forceWebAudio = true;
        console.log('INITED AUDIO');
    }
    AudioService.prototype.preload = function (key, asset) {
        if (this.platform.is('cordova')) {
            console.log('ENTERED AUDIO', key);
            this.nativeAudio.preloadComplex(key, asset, 1, 1, 0)
                .then(function (loaded) {
                console.log('KEY', key);
                console.log('ASSET', asset);
                console.log('LOADED', loaded);
            })
                .catch(function (err) { return console.log('ASSET ERROR', err); });
            var soundToPlay = this.sounds.find(function (sound) {
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
            var audio = new Audio();
            audio.src = asset;
            var soundToPlay = this.sounds.find(function (sound) {
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
    };
    AudioService.prototype.play = function (key) {
        var soundToPlay = this.sounds.find(function (sound) {
            return sound.key === key;
        });
        if (soundToPlay.isNative) {
            this.nativeAudio.play(soundToPlay.key).then(function (res) {
                console.log('PLAYED', res);
            }, function (err) {
                console.log('PLAYING Error', err);
            });
        }
        else {
            this.audioPlayer.src = soundToPlay.asset;
            this.audioPlayer.play();
        }
    };
    AudioService.prototype.playOnLoop = function (key) {
        var soundToPlay = this.sounds.find(function (sound) {
            return sound.key === key;
        });
        if (soundToPlay.isNative) {
            this.nativeAudio.loop(soundToPlay.key).then(function (res) {
                console.log('PLAYED', res);
            }, function (err) {
                console.log('PLAYING Error', err);
            });
        }
        else {
            this.audioPlayer.src = soundToPlay.asset;
            this.audioPlayer.play();
        }
    };
    AudioService.prototype.stop = function (key) {
        var soundToPlay = this.sounds.find(function (sound) {
            return sound.key === key;
        });
        if (soundToPlay.isNative) {
            this.nativeAudio.stop(soundToPlay.key).then(function (res) {
                console.log(res);
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.audioPlayer.src = soundToPlay.asset;
            this.audioPlayer.pause();
        }
    };
    AudioService.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeAudio"] }
    ]; };
    AudioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeAudio"]])
    ], AudioService);
    return AudioService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth) {
        this.auth = auth;
    }
    AuthGuardService.prototype.canActivate = function () {
        return this.auth.isAuthenticated();
    };
    AuthGuardService.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");












var TOKEN_KEY = 'access_token';
var DATA_NAME = 'name';
var DATA_EMAIL = 'email';
var DATA_ID = 'id';
var DATA_AVATAR = 'profile_pic';
var DATA_MOBILE = 'mobile';
var DATA_SUBSCRIBERS = 'subscribers';
var AuthService = /** @class */ (function () {
    function AuthService(http, helper, storage, plt, alertController, translate, loader, nativeStorage) {
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
    AuthService.prototype.checkToken = function () {
        var _this = this;
        console.log('Started CheckToken');
        return new Promise(function (resolve, reject) {
            console.log('New CheckToken');
            _this.plt.ready().then(function () {
                if (_this.plt.is('cordova')) {
                    _this.nativeStorage.getItem(TOKEN_KEY).then(function (token) {
                        console.log("Token", token);
                        if (token) {
                            var decoded = _this.helper.decodeToken(token);
                            var isExpired = _this.helper.isTokenExpired(token);
                            if (!isExpired) {
                                _this.user = decoded;
                                _this.authenticationState.next(true);
                                resolve(true);
                            }
                            else {
                                _this.nativeStorage.remove(TOKEN_KEY);
                                _this.authenticationState.next(false);
                                resolve(false);
                            }
                        }
                        else {
                            resolve(false);
                        }
                    }).catch(function (err) { return resolve(false); });
                }
                else {
                    _this.storage.get(TOKEN_KEY).then(function (token) {
                        console.log("Token", token);
                        if (token) {
                            var decoded = _this.helper.decodeToken(token);
                            var isExpired = _this.helper.isTokenExpired(token);
                            if (!isExpired) {
                                _this.user = decoded;
                                _this.authenticationState.next(true);
                                resolve(true);
                            }
                            else {
                                _this.storage.remove(TOKEN_KEY);
                                _this.authenticationState.next(false);
                                resolve(false);
                            }
                        }
                        else {
                            resolve(false);
                        }
                    }).catch(function (err) { return console.log('ERROR', err); });
                }
            }).catch(function (err) { return console.log('ERROR', err); });
        });
    };
    AuthService.prototype.register = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.loader.presentLoading();
            _this.http.post(_this.url + "/api/register", credentials).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (e) {
                _this.loader.dismiss();
                _this.showAlert(e.error.msg);
                throw new Error(e);
            })).subscribe(function (res) {
                _this.loader.dismiss();
                console.log('REGISTERD', res);
                var promises = [];
                promises.push(_this.plt.is('cordova') ? _this.nativeStorage.setItem(TOKEN_KEY, res['token']) : _this.storage.set(TOKEN_KEY, res['token']));
                promises.push(_this.storage.set(DATA_MOBILE, res['mobile']));
                promises.push(_this.storage.set(DATA_NAME, res['name']));
                promises.push(_this.storage.set(DATA_EMAIL, res['email']));
                promises.push(_this.storage.set(DATA_ID, res['id']));
                promises.push(_this.storage.set(DATA_AVATAR, res['avatar']));
                promises.push(_this.storage.set(DATA_SUBSCRIBERS, res['subscribers'] ? res['subscribers'] : false));
                promises.push(_this.user = _this.helper.decodeToken(res['token']));
                _this.authenticationState.next(true);
                Promise.all(promises.map(function (p) { return p.catch(function (e) { return e; }); }))
                    .then(function (results) {
                    resolve(res);
                });
            }, function (err) { _this.loader.dismiss(); });
        });
    };
    AuthService.prototype.login = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var promises = [];
            promises.push(_this.plt.is('cordova') ? _this.nativeStorage.setItem(TOKEN_KEY, credentials['token']) : _this.storage.set(TOKEN_KEY, credentials['token']));
            promises.push(_this.storage.set(DATA_MOBILE, credentials['mobile']));
            promises.push(_this.storage.set(DATA_NAME, credentials['name']));
            promises.push(_this.storage.set(DATA_EMAIL, credentials['email']));
            promises.push(_this.storage.set(DATA_ID, credentials['id']));
            promises.push(_this.storage.set(DATA_AVATAR, credentials['avatar']));
            promises.push(_this.user = _this.helper.decodeToken(credentials['token']));
            _this.authenticationState.next(true);
            Promise.all(promises.map(function (p) { return p.catch(function (e) { return e; }); }))
                .then(function (results) {
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
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.plt.is('cordova')) {
                _this.nativeStorage.remove(TOKEN_KEY).then(function () {
                    _this.authenticationState.next(false);
                    _this.storage.remove('lang').then(function () {
                        resolve(true);
                    });
                }, function (err) {
                    reject(err);
                })
                    .catch(function (err) {
                    reject(err);
                });
            }
            else {
                _this.storage.remove(TOKEN_KEY).then(function () {
                    _this.authenticationState.next(false);
                    _this.storage.remove('lang').then(function () {
                        resolve(true);
                    });
                }, function (err) {
                    reject(err);
                })
                    .catch(function (err) {
                    reject(err);
                });
            }
        });
    };
    AuthService.prototype.getSpecialData = function () {
        var _this = this;
        return this.http.get(this.url + "/api/special").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (e) {
            var status = e.status;
            if (status === 401) {
                _this.showAlert('You are not authorized for this!');
                _this.logout();
            }
            throw new Error(e);
        }));
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.authenticationState.value;
    };
    AuthService.prototype.showAlert = function (msg) {
        var _this = this;
        console.log(msg);
        this.storage.get('language').then(function (language) {
            console.log(language);
            _this.translate.get(msg, { value: language })
                .subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    return [2 /*return*/];
                });
            }); });
            var alert = _this.alertController.create({
                message: msg,
                header: 'Error',
                buttons: ['OK']
            });
            alert.then(function (alert) { return alert.present(); });
        });
    };
    AuthService.prototype.socialLogin = function (res) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var promises = [];
            promises.push(_this.storage.set(TOKEN_KEY, res['token']));
            promises.push(_this.storage.set(DATA_NAME, res['name']));
            promises.push(_this.storage.set(DATA_EMAIL, res['email']));
            promises.push(_this.storage.set(DATA_ID, res['id']));
            promises.push(_this.storage.set(DATA_AVATAR, res['avatar']));
            promises.push(_this.user = _this.helper.decodeToken(res['token']));
            _this.authenticationState.next(true);
            Promise.all(promises.map(function (p) { return p.catch(function (e) { return e; }); }))
                .then(function (results) {
                resolve(true);
            });
        });
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] },
        { type: _loader_service__WEBPACK_IMPORTED_MODULE_10__["LoaderService"] },
        { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_11__["NativeStorage"] }
    ]; };
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
    return AuthService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shareduser_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shareduser/user.service */ "./src/app/shareduser/user.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/contacts/ngx */ "./node_modules/@ionic-native/contacts/ngx/index.js");







var ContactsService = /** @class */ (function () {
    function ContactsService(platform, contacts, userService, storage, translate) {
        var _this = this;
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
        this.getContacts = function () {
            if (!_this.platform.is('cordova')) {
                return Promise.reject(new Error('Cannot get contacts: not cordova.'));
            }
            var fields = ["phoneNumbers"];
            var options = {
                filter: '',
                multiple: true,
                desiredFields: ['phoneNumbers', 'displayName', 'photos'],
                hasPhoneNumber: true
            };
            return _this.contacts.find(fields, options);
        };
        this.cleanPhoneNumber = function (phoneNumber) {
            var phoneNumberNoSpaces = phoneNumber.replace(/-|\s/g, "");
            if (phoneNumberNoSpaces.charAt(0) === '+') {
                return phoneNumberNoSpaces;
            }
            else if (phoneNumberNoSpaces.substring(0, 2) === "00") {
                return '+' + phoneNumberNoSpaces.slice(2);
            }
            else {
                // Use user's international prefix when absent
                // FIXME: update meteor-accounts-phone typings
                var prefix = _this.mobile_prefix;
                if (phoneNumberNoSpaces.charAt(0) === "0") {
                    console.log(phoneNumberNoSpaces);
                    phoneNumberNoSpaces.slice(1);
                }
                return prefix + phoneNumberNoSpaces;
            }
        };
    }
    ContactsService.prototype.setUserId = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get('id').then(function (val) {
                _this.user_id = val;
                _this.storage.get('mobile').then(function (mob) {
                    _this.mobile = mob;
                    _this.mobile_prefix = mob.substring(0, 3);
                    resolve(mob);
                });
            });
        });
    };
    ContactsService.prototype.getUserId = function () {
        return this.user_id;
    };
    ContactsService.prototype.getPhoneNumber = function () {
        return this.mobile;
    };
    ContactsService.prototype.saveContacts = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getContacts()
                .then(function (contacts) {
                console.log('CONTACTS', contacts);
                var mobileNumbers = [];
                contacts.forEach(function (contact, index) {
                    var _a;
                    var numbers = contact.phoneNumbers
                        .filter(function (phoneNumber) {
                        return phoneNumber.type === "mobile";
                    }).map(function (phoneNumber) {
                        return _this.cleanPhoneNumber(phoneNumber.value);
                    }).filter(function (phoneNumber) {
                        return phoneNumber.slice(1).match(/^[0-9]+$/) && phoneNumber.length >= 8;
                    });
                    if (numbers.length && numbers[0] != _this.mobile) {
                        var newContact = {
                            displayName: contact.displayName,
                            phoneNumber: numbers[0],
                            avatar: contact.photos ? contact.photos : ''
                        };
                        var number = numbers[0].toString();
                        var newObject = (_a = {}, _a[number] = newContact, _a);
                        _this.localContacts[number] = newContact;
                        mobileNumbers.push(numbers[0]);
                    }
                    if (index == (contacts.length - 1)) {
                        console.log('LOCAL CONTACTS', _this.localContacts);
                        console.log('MOBILE NUMBERS', mobileNumbers);
                        _this.fetchContacts(mobileNumbers);
                        resolve(true);
                    }
                });
            })
                .catch(function (e) {
                console.log(e);
                reject(e);
            });
        });
    };
    ContactsService.prototype.fetchContacts = function (numbers) {
        var _this = this;
        // numbers = numbers.slice(0, 500); // For Rohit
        if (this.platform.is('cordova')) {
            this.userService.fetchContacts({ numbers: numbers })
                .subscribe(function (fetched) {
                console.log('ALL CONTACTS', fetched);
                _this.allContacts = fetched;
                for (var _i = 0, _a = _this.allContacts; _i < _a.length; _i++) {
                    var contact = _a[_i];
                    contact.name = _this.localContacts[contact.mobile].displayName;
                    contact.mobile = _this.localContacts[contact.mobile].phoneNumber;
                    if (contact.avatar)
                        _this.avatarArray[contact.mobile] = 'http://198.12.92.202/public/uploads/' + contact.avatar;
                    else if (_this.localContacts[contact.mobile].avatar)
                        _this.avatarArray[contact.mobile] = _this.localContacts[contact.mobile].avatar;
                    else
                        _this.avatarArray[contact.mobile] = 'assets/images/user.png';
                }
                console.log(_this.allContacts);
                console.log('AVATAR ARRAY', _this.avatarArray);
                // this.setContacts().then(res => console.log('SET CONTACTS', res)).catch(err => console.log('CONTACTS ERROR', err));
            }, function (err) { console.log(err); });
        }
        else {
            this.allContacts = this.demoUsers;
        }
    };
    ContactsService.prototype.contactsData = function () {
        var data = {
            allContacts: this.allContacts,
            localContacts: this.localContacts,
            avatarArray: this.avatarArray
        };
        console.log('DATA RETURNED', data);
        return data;
    };
    ContactsService.prototype.setContacts = function () {
        var _this = this;
        console.log('SET CONTACTS');
        return new Promise(function (resolve, reject) {
            var data = {
                id: _this.user_id,
                contacts: _this.localContacts
            };
            console.log('DATA SENT', data);
            _this.userService.setContacts(data)
                .subscribe(function (set) {
                resolve(set);
                console.log('RESPONSE NO ERROR WALA AYA');
            }, function (err) {
                console.log('RESPONSE NO ERROR WALA AYA');
                // resolve(true);
                reject(err);
            });
        });
    };
    ContactsService.prototype.getDemoUsers = function () {
        return this.demoUsers;
    };
    ContactsService.prototype.getContactName = function (id) {
        var contact = this.allContacts.filter(function (contact) { return contact._id == id; });
        return contact[0] ? contact[0].name : false;
    };
    ContactsService.prototype.getContactNameByMobile = function (mobile, fallback) {
        var contact = this.allContacts.filter(function (contact) { return contact.mobile == mobile; });
        return contact[0] ? contact[0].name : fallback;
    };
    ContactsService.prototype.getContactMobile = function (id) {
        var contact = this.allContacts.filter(function (contact) { return contact._id == id; });
        return contact[0] ? contact[0].mobile : false;
    };
    ContactsService.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_6__["Contacts"] },
        { type: _shareduser_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }
    ]; };
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
    return ContactsService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");





var LoaderService = /** @class */ (function () {
    function LoaderService(loadingController, translate, storage) {
        var _this = this;
        this.loadingController = loadingController;
        this.translate = translate;
        this.storage = storage;
        this.storage.get('language').then(function (language) {
            console.log(language);
            _this.value = _this.translate.instant(['Please_Wait'], { value: language ? language : 'en' });
            console.log(_this.value);
        });
    }
    LoaderService.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, _a, role, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: null,
                            translucent: true,
                            showBackdrop: false
                        })];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        console.log('Loading dismissed!');
                        return [2 /*return*/];
                }
            });
        });
    };
    LoaderService.prototype.dismiss = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.loadingController.dismiss();
                return [2 /*return*/];
            });
        });
    };
    LoaderService.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
    ]; };
    LoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
    ], LoaderService);
    return LoaderService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");




var StorageService = /** @class */ (function () {
    function StorageService(nativeStorage, storage) {
        this.nativeStorage = nativeStorage;
        this.storage = storage;
    }
    StorageService.prototype.firstTimeAppOpened = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("ftap").then(function (fetched) {
                if (fetched) {
                    resolve(false);
                }
                else {
                    _this.storage.set("ftap", true).then(function (set) {
                        resolve(true);
                    });
                }
            });
        });
    };
    StorageService.prototype.setSubscriberStatus = function (status) {
        this.subscriber = status;
        console.log(this.subscriber);
        this.storage.set('subscribers', status);
        return status;
    };
    StorageService.prototype.fetchSubscriberStatus = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get('subscribers')
                .then(function (value) {
                _this.subscriber = value;
                resolve(true);
            });
        });
    };
    StorageService.prototype.getSubscriberStatus = function () {
        return this.subscriber;
    };
    StorageService.prototype.setGroupType = function (type) {
        // type: 1 - Normal Group, 2 - Subscriber List
        this.groupType = type;
    };
    StorageService.prototype.getGroupType = function () {
        return this.groupType;
    };
    StorageService.prototype.setCallType = function (type) {
        this.callType = type;
    };
    StorageService.prototype.getCallType = function () {
        return this.callType;
    };
    StorageService.prototype.addInArray = function (key, value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.nativeStorage.getItem(key)
                .then(function (data) {
                if (data && data instanceof Array) {
                    data.push(value);
                    _this.nativeStorage.setItem(key, data)
                        .then(function () { return resolve(true); }, function (error) { return reject(error); })
                        .catch(function (err) { return reject(err); });
                }
                else {
                    resolve(false);
                }
            }, function (error) { return reject(error); })
                .catch(function (err) { return reject(err); });
        });
    };
    StorageService.prototype.checkInArray = function (key, value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.nativeStorage.getItem(key)
                .then(function (data) {
                if (data && data instanceof Array) {
                    data.includes(value) ? resolve(true) : resolve(false);
                }
                else {
                    // NO DATA PRESENT THEN CREATE ARRAY AND STORE
                    _this.nativeStorage.setItem(key, new Array())
                        .then(function () { return resolve(false); }, function (error) { return reject(error); })
                        .catch(function (err) { return reject(err); });
                }
            }, function (error) { return reject(error); })
                .catch(function (err) { return reject(err); });
        });
    };
    StorageService.prototype.removeFromArray = function (key, value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.nativeStorage.getItem(key)
                .then(function (data) {
                if (data && data instanceof Array) {
                    var index = data.indexOf(value);
                    if (index !== -1) {
                        data.splice(index, 1);
                        _this.nativeStorage.setItem(key, data)
                            .then(function () { return resolve(true); }, function (error) { return reject(error); })
                            .catch(function (err) { return reject(err); });
                    }
                    else {
                        resolve(false);
                    }
                }
                else {
                    resolve(false);
                }
            })
                .catch(function (err) { return reject(err); });
        });
    };
    StorageService.prototype.setToken = function (token) {
        this.pushToken = token;
    };
    StorageService.prototype.getToken = function () {
        return this.pushToken;
    };
    StorageService.ctorParameters = function () { return [
        { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeStorage"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
    ]; };
    StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeStorage"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], StorageService);
    return StorageService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var openvidu_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! openvidu-browser */ "./node_modules/openvidu-browser/lib/index.js");
/* harmony import */ var openvidu_browser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(openvidu_browser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/user-model */ "./src/app/shared/models/user-model.ts");
/* harmony import */ var _services_openvidu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/openvidu.service */ "./src/app/shared/services/openvidu.service.ts");






var SettingUpModalComponent = /** @class */ (function () {
    function SettingUpModalComponent(modalController, platform, openViduSrv) {
        this.modalController = modalController;
        this.platform = platform;
        this.openViduSrv = openViduSrv;
        this.audioDevices = [];
        this.videoDevices = [];
        this.speakerphone = false;
    }
    SettingUpModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.OV = new openvidu_browser__WEBPACK_IMPORTED_MODULE_3__["OpenVidu"]();
            _this.localUser = new _models_user_model__WEBPACK_IMPORTED_MODULE_4__["UserModel"]();
            if (_this.platform.is('cordova') && _this.platform.is('android')) {
                _this.openViduSrv.checkAndroidPermissions().then(function () {
                    navigator.mediaDevices.ondevicechange = function (ev) { _this.initDevices(); };
                    _this.initPublisher().then(function () { return _this.initDevices(); }).catch(function (error) { return console.log(error); });
                }).catch(function (err) {
                    console.log(err);
                    _this.dismiss();
                });
            }
            else {
                _this.initPublisher().then(function () { return _this.initDevices(); }).catch(function (error) { return console.log(error); });
            }
        });
    };
    SettingUpModalComponent.prototype.initDevices = function () {
        var _this = this;
        this.OV.getDevices().then(function (devices) {
            _this.audioDevices = devices.filter(function (device) { return device.kind === 'audioinput'; });
            _this.videoDevices = devices.filter(function (device) { return device.kind === 'videoinput'; });
            if (_this.platform.is('cordova')) {
                if (_this.platform.is('ios')) {
                    console.log('iOS platform');
                    setTimeout(function () {
                        _this.refreshVideos();
                    }, 1100);
                }
                else if (_this.platform.is('android')) {
                    console.log('Android platform');
                }
                _this.localUser.setVideoSource(_this.videoDevices.filter(function (device) { return device.label.includes('Front'); })[0].deviceId);
            }
        });
    };
    SettingUpModalComponent.prototype.dismiss = function () {
        this.modalController.dismiss();
        this.destroyPublisher();
        this.localUser = null;
    };
    SettingUpModalComponent.prototype.setAudioDevice = function (event) {
        console.log('Setting audio device to: ', event.detail.value.label);
        this.audioDevice = event.detail.value;
        var audioSource = this.audioDevice.deviceId === 'None' ? undefined : this.audioDevice.deviceId;
        this.localUser.setAudioActive(!!audioSource);
        this.localUser.setAudioSource(audioSource);
        if (!!audioSource) {
            this.destroyPublisher();
            this.initPublisher();
        }
        else {
            this.micOff();
        }
    };
    SettingUpModalComponent.prototype.setVideoDevice = function (event) {
        console.log('Setting video device to: ', event.detail.value.label);
        var videoSource = event.detail.value.deviceId === 'None' ? undefined : event.detail.value.deviceId;
        this.localUser.setVideoActive(!!videoSource);
        this.localUser.setVideoSource(videoSource);
        if (!!videoSource) {
            this.destroyPublisher();
            this.initPublisher();
        }
        else {
            this.camOff();
        }
    };
    SettingUpModalComponent.prototype.camOff = function () {
        this.localUser.getStreamManager().publishVideo(false);
    };
    SettingUpModalComponent.prototype.micOff = function () {
        this.localUser.getStreamManager().publishAudio(false);
    };
    SettingUpModalComponent.prototype.refreshVideos = function () {
        if (this.platform.is('ios') && this.platform.is('cordova')) {
            cordova.plugins.iosrtc.refreshVideos();
        }
    };
    SettingUpModalComponent.prototype.join = function () {
        this.modalController.dismiss({ user: this.localUser, videoDevices: this.videoDevices });
    };
    SettingUpModalComponent.prototype.initPublisher = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log('initialize publisher');
            var device = _this.videoDevices.filter(function (video) {
                return video.deviceId === _this.localUser.getVideoSource();
            });
            var isBackCamera = false;
            if (_this.platform.is('cordova')) {
                isBackCamera = !!device[0] && device[0].label.includes('Back');
            }
            _this.localUser.setIsBackCamera(isBackCamera);
            _this.OV.initPublisherAsync(undefined, {
                audioSource: _this.localUser.getAudioSource(),
                videoSource: _this.localUser.getVideoSource(),
                publishAudio: _this.localUser.isAudioActive(),
                publishVideo: _this.localUser.isVideoActive(),
                mirror: !_this.localUser.isBackCamera()
            })
                .then(function (publisher) {
                _this.localUser.setStreamManager(publisher);
                resolve(publisher);
            })
                .catch(function (error) { return reject(error); });
        });
    };
    SettingUpModalComponent.prototype.destroyPublisher = function () {
        console.log('Destroying publisher...');
        if (this.localUser.getStreamManager() && this.localUser.getStreamManager().stream) {
            this.localUser.getStreamManager().stream.disposeWebRtcPeer();
            this.localUser.getStreamManager().stream.disposeMediaStream();
            this.localUser.setStreamManager(null);
        }
    };
    SettingUpModalComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _services_openvidu_service__WEBPACK_IMPORTED_MODULE_5__["OpenViduService"] }
    ]; };
    SettingUpModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-setting-up-modal',
            template: __webpack_require__(/*! raw-loader!./setting-up-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/setting-up-modal/setting-up-modal.component.html"),
            styles: [__webpack_require__(/*! ./setting-up-modal.component.scss */ "./src/app/shared/components/setting-up-modal/setting-up-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _services_openvidu_service__WEBPACK_IMPORTED_MODULE_5__["OpenViduService"]])
    ], SettingUpModalComponent);
    return SettingUpModalComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var openvidu_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! openvidu-browser */ "./node_modules/openvidu-browser/lib/index.js");
/* harmony import */ var openvidu_browser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(openvidu_browser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var OpenViduVideoComponent = /** @class */ (function () {
    function OpenViduVideoComponent(platform) {
        this.platform = platform;
    }
    OpenViduVideoComponent.prototype.ngAfterViewInit = function () {
        this.updateVideoView();
    };
    Object.defineProperty(OpenViduVideoComponent.prototype, "streamManager", {
        set: function (streamManager) {
            var _this = this;
            this._streamManager = streamManager;
            if (!!this.elementRef) {
                this._streamManager.addVideoElement(this.elementRef.nativeElement);
            }
            if (this.isIos()) {
                this._streamManager.on('streamPropertyChanged', function (event) {
                    if (event.changedProperty === 'videoDimensions') {
                        _this.applyIosIonicVideoAttributes();
                    }
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    OpenViduVideoComponent.prototype.updateVideoView = function () {
        var _this = this;
        this._streamManager.addVideoElement(this.elementRef.nativeElement);
        if (this.isIos()) {
            this.elementRef.nativeElement.onloadedmetadata = function () {
                _this.applyIosIonicVideoAttributes();
            };
        }
    };
    OpenViduVideoComponent.prototype.applyIosIonicVideoAttributes = function () {
        this.elementRef.nativeElement.style.width = '100% !important';
        this.elementRef.nativeElement.style.zIndex = '-1';
        if (!this._streamManager.remote && !this.isBackCamera) {
            // It is a Publisher video. Custom iosrtc plugin mirror video
            this.elementRef.nativeElement.style.transform = 'scaleX(-1)';
        }
        cordova.plugins.iosrtc.refreshVideos();
    };
    OpenViduVideoComponent.prototype.isIos = function () {
        return this.platform.is('cordova') && this.platform.is('ios');
    };
    OpenViduVideoComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
    ]; };
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
            template: "\n        <video #videoElement [id]=\"'video-' + _streamManager.stream.streamId\"></video>\n    ",
            styles: [__webpack_require__(/*! ./stream.component.scss */ "./src/app/shared/components/stream/stream.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
    ], OpenViduVideoComponent);
    return OpenViduVideoComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/user-model */ "./src/app/shared/models/user-model.ts");
/* harmony import */ var _ov_video_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ov-video.component */ "./src/app/shared/components/stream/ov-video.component.ts");




var StreamComponent = /** @class */ (function () {
    function StreamComponent() {
    }
    StreamComponent.prototype.ngOnInit = function () {
        console.log('user', this.user);
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
    return StreamComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm5/ngx-socket-io.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");









var GroupService = /** @class */ (function () {
    function GroupService(http, storage, socket) {
        this.http = http;
        this.storage = storage;
        this.socket = socket;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].url;
        this.baseURL = this.url + "/groups";
        this.baseURL2 = this.url + "/chats/";
        this.baseURL6 = this.url + "/chats/all/";
        this.baseURL3 = this.url + "/api/usergp/";
        this.baseURL4 = this.url + "/api/delgp/";
        this.baseURL5 = this.url + "/groups/updatemembers/";
        this.baseURL7 = this.url + "/join";
        this.baseURL8 = this.url + "/join/";
        this.baseURL9 = this.url + "/feeds/";
        this.baseURL10 = this.url + "/groups/group/id";
        // id:any;
        this.id = "";
    }
    GroupService.prototype.postGroup = function (gp) {
        return this.http.post(this.baseURL, gp);
    };
    //SESSION VALUE OF ID
    GroupService.prototype.sharedvalue = function () {
        var _this = this;
        this.storage.get('id').then(function (val) {
            _this.id = val;
        });
    };
    GroupService.prototype.getGroupList = function (val, admin) {
        if (admin === void 0) { admin = null; }
        console.log("VALUE PASSED", val);
        return this.http.get(this.baseURL, { params: { id: val, admin: admin } });
    };
    GroupService.prototype.getGroupDetails = function (id, user_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.baseURL + '/details/' + id, { user_id: user_id })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["timeout"])(5000))
                .subscribe(function (res) {
                console.log(res);
                resolve(res);
            }, function (err) {
                resolve(err);
            });
        });
        // return new Promise((resolve, reject)=>{
        //   resolve();
        // })
    };
    GroupService.prototype.getusergroup = function (val) {
        console.log('URL', (this.baseURL3 + val));
        return this.http.get(this.baseURL3 + val);
    };
    GroupService.prototype.getusergroupname = function (val) {
        return this.http.get(this.baseURL2 + val);
    };
    GroupService.prototype.getgroupuser = function (val) {
        return this.http.get(this.baseURL6 + val);
    };
    GroupService.prototype.putGroup = function (gp) {
        return this.http.put(this.baseURL + ("/" + gp._id), gp);
    };
    GroupService.prototype.putEditGroup = function (gp) {
        return this.http.put(this.baseURL + '/group' + ("/" + gp._id), gp);
    };
    GroupService.prototype.deleteGroup = function (id, member) {
        return this.http.put(this.baseURL8 + id, member);
    };
    //For Chats Group Chat
    GroupService.prototype.putChat = function (gp, id) {
        console.log("PUT URL", this.baseURL2 + id);
        console.log("DATA", gp);
        this.socket.emit('send-message', {
            text: gp,
            room: id,
            // sent_from: this.temp_name,
            type: 1 // 1-> text
        });
        return this.http.put(this.baseURL2 + id, gp);
    };
    GroupService.prototype.getChat = function (id) {
        return this.http.get(this.baseURL6 + id);
    };
    GroupService.prototype.putChatReadAll = function (data) {
        return this.http.post(this.baseURL2 + 'read-all', data);
    };
    GroupService.prototype.delusergrp = function (id, grpid) {
        return this.http.put(this.baseURL4 + id, { params: { idval: grpid } });
    };
    GroupService.prototype.delmember = function (id, memid) {
        return this.http.delete(this.baseURL5 + id, { params: { idval: memid } });
    };
    GroupService.prototype.acceptgroup = function (data) {
        //var data = {"id" : id ,"mid" : memid};
        return this.http.put(this.baseURL7, data);
    };
    GroupService.prototype.createFeed = function (data) {
        return this.http.post(this.baseURL9 + 'add', data);
    };
    GroupService.prototype.editFeed = function (data) {
        return this.http.put(this.baseURL9 + 'single-feed', data);
    };
    GroupService.prototype.deleteFeed = function (data) {
        console.log('BODY', data);
        return this.http.delete(this.baseURL9 + 'single-feed/' + data.feed_id);
    };
    GroupService.prototype.getFeeds = function (data) {
        console.log('FEED DATA', data);
        console.log(this.baseURL9 + data);
        return this.http.get(this.baseURL9 + data);
    };
    GroupService.prototype.postFeedLike = function (data) {
        return this.http.post(this.baseURL9 + '/like', data);
    };
    GroupService.prototype.postComment = function (data) {
        return this.http.post(this.baseURL9 + '/comment', data);
    };
    GroupService.prototype.postVideoCall = function (data) {
        return this.http.post(this.baseURL + '/create/video-chat', data);
    };
    GroupService.prototype.removeMember = function (data, id) {
        return this.http.request('delete', this.baseURL + '/remove-member/' + id, { body: data });
    };
    GroupService.prototype.checkExists = function (data) {
        return this.http.post(this.baseURL + '/create/check', data);
    };
    GroupService.prototype.checkMember = function (data) {
        return this.http.post(this.baseURL + '/member/check', data);
    };
    GroupService.prototype.deleteChat = function (data) {
        return this.http.request('delete', this.baseURL2 + '/single-chat/' + data.id, { body: data });
    };
    GroupService.prototype.deleteChatRoom = function (id, body) {
        return this.http.request('delete', this.baseURL + '/' + id, { body: body });
    };
    GroupService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__["Socket"] }
    ]; };
    GroupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__["Socket"]])
    ], GroupService);
    return GroupService;
}());



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
var UserModel = /** @class */ (function () {
    function UserModel() {
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
    UserModel.prototype.getConnectionId = function () {
        return this.connectionId;
    };
    UserModel.prototype.getNickname = function () {
        return this.nickname;
    };
    UserModel.prototype.getStreamManager = function () {
        return this.streamManager;
    };
    UserModel.prototype.isLocal = function () {
        return this.type === 'local';
    };
    UserModel.prototype.isRemote = function () {
        return !this.isLocal();
    };
    UserModel.prototype.getAvatar = function () {
        return this.avatar;
    };
    UserModel.prototype.isAudioActive = function () {
        return this.audioActive;
    };
    UserModel.prototype.isVideoActive = function () {
        return this.videoActive;
    };
    UserModel.prototype.getAudioSource = function () {
        return this.audioSource;
    };
    UserModel.prototype.getVideoSource = function () {
        return this.videoSource;
    };
    UserModel.prototype.isBackCamera = function () {
        return this.isBackCameraActive;
    };
    /* Setters */
    UserModel.prototype.setStreamManager = function (streamManager) {
        this.streamManager = streamManager;
    };
    UserModel.prototype.setConnectionId = function (conecctionId) {
        this.connectionId = conecctionId;
    };
    UserModel.prototype.setNickname = function (nickname) {
        this.nickname = nickname;
    };
    UserModel.prototype.setType = function (type) {
        this.type = type;
    };
    UserModel.prototype.setUserAvatar = function (avatar) {
        this.avatar = avatar;
    };
    UserModel.prototype.setAudioActive = function (isAudioActive) {
        this.audioActive = isAudioActive;
    };
    UserModel.prototype.setVideoActive = function (isVideoActive) {
        this.videoActive = isVideoActive;
    };
    UserModel.prototype.setAudioSource = function (audioSource) {
        this.audioSource = audioSource;
    };
    UserModel.prototype.setVideoSource = function (videoSource) {
        this.videoSource = videoSource;
    };
    UserModel.prototype.setIsBackCamera = function (active) {
        this.isBackCameraActive = active;
    };
    return UserModel;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");






var OpenViduService = /** @class */ (function () {
    function OpenViduService(http, androidPermissions) {
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
    OpenViduService.prototype.getToken = function (mySessionId) {
        var _this = this;
        return this.createSession(mySessionId, this.OPENVIDU_SERVER_URL, this.MY_SECRET).then(function (sessionId) {
            return _this.createToken(sessionId, _this.OPENVIDU_SERVER_URL, _this.MY_SECRET);
        });
    };
    OpenViduService.prototype.createSession = function (sessionId, openviduServerUrl, openviduSecret) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var body = JSON.stringify({ customSessionId: sessionId });
            var options = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Authorization': 'Basic ' + btoa('OPENVIDUAPP:' + openviduSecret),
                    'Content-Type': 'application/json',
                }),
            };
            return _this.http
                .post(openviduServerUrl + '/api/sessions', body, options)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
                error.status === 409 ? resolve(sessionId) : reject(error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
            }))
                .subscribe(function (response) {
                console.log(response);
                resolve(response.id);
            });
        });
    };
    OpenViduService.prototype.createToken = function (sessionId, openviduServerUrl, openviduSecret) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var body = JSON.stringify({ session: sessionId });
            var options = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Authorization': 'Basic ' + btoa('OPENVIDUAPP:' + openviduSecret),
                    'Content-Type': 'application/json',
                }),
            };
            return _this.http
                .post(openviduServerUrl + '/api/tokens', body, options)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
                reject(error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
            }))
                .subscribe(function (response) {
                console.log(response);
                resolve(response.token);
            });
        });
    };
    OpenViduService.prototype.getRandomAvatar = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('https://randomuser.me/api/?lego').subscribe(function (data) {
                resolve(data.results[0].picture.thumbnail);
            });
        });
    };
    OpenViduService.prototype.checkAndroidPermissions = function () {
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
    OpenViduService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_5__["AndroidPermissions"] }
    ]; };
    OpenViduService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_5__["AndroidPermissions"]])
    ], OpenViduService);
    return OpenViduService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_components_setting_up_modal_setting_up_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/setting-up-modal/setting-up-modal.component */ "./src/app/shared/components/setting-up-modal/setting-up-modal.component.ts");
/* harmony import */ var _shared_components_stream_stream_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/stream/stream.component */ "./src/app/shared/components/stream/stream.component.ts");
/* harmony import */ var _shared_components_stream_ov_video_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/components/stream/ov-video.component */ "./src/app/shared/components/stream/ov-video.component.ts");








var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
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
    return SharedModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");








var UserService = /** @class */ (function () {
    function UserService(http, alertController) {
        this.http = http;
        this.alertController = alertController;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].url;
        this.users = [];
        this.baseURL = this.url + "/api/search-user";
        this.baseURL2 = this.url + "/groups/";
        this.baseURL3 = this.url + "/api/userid/";
        this.baseURL4 = this.url + "/api/user/avatar/";
        this.baseURL5 = this.url + "/api/user/social/login";
        this.baseURL6 = this.url + "/api/user/name/";
        this.baseURL7 = this.url + "/api/generate-otp";
        this.baseURL8 = this.url + "/api/check/";
        this.baseURL9 = this.url + "/api/contacts/fetch";
        this.baseURL10 = this.url + "/api/contacts/update";
        this.baseURL11 = this.url + "/api/user/subscriber/";
        this.baseURL12 = this.url + "/api/block-list/get/";
        this.baseURL13 = this.url + "/api/block-list/remove";
    }
    //   postGroup(gp: Group) {
    //     return this.http.post(this.baseURL, gp);
    //   }
    UserService.prototype.setAvatar = function (avatar) {
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
    };
    UserService.prototype.getuserList = function (data, body) {
        return this.http.post(this.baseURL, body, { params: { name: data } });
    };
    UserService.prototype.putUser = function (data, id) {
        return this.http.put(this.baseURL2 + id, data);
    };
    UserService.prototype.userGroups = function (data, id) {
        return this.http.put(this.baseURL3 + id, data);
    };
    UserService.prototype.putUserName = function (data) {
        console.log(data);
        return this.http.put(this.baseURL6, data);
    };
    UserService.prototype.putUserAvatar = function (data) {
        return this.http.put(this.baseURL4, data);
    };
    // For Social Login
    UserService.prototype.postUser = function (data) {
        return this.http.put(this.baseURL2, data);
    };
    UserService.prototype.socialLogin = function (data) {
        return this.http.post(this.baseURL5, data);
    };
    UserService.prototype.generateOTP = function (data) {
        return this.http.post(this.baseURL7, data);
    };
    UserService.prototype.checkMobileNumber = function (data) {
        return this.http.post(this.baseURL8 + 'mobile-number', data);
    };
    UserService.prototype.checkDetails = function (data) {
        var _this = this;
        return this.http.post(this.baseURL8 + 'details', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
            _this.showAlert(e.error.msg);
            throw new Error(e);
        }));
        ;
    };
    //   deleteGroup(_id: string) {
    //     return this.http.delete(this.baseURL + `/${_id}`);
    //   }
    UserService.prototype.showAlert = function (msg) {
        console.log(msg);
        var alert = this.alertController.create({
            message: msg,
            header: 'Error',
            buttons: ['OK']
        });
        alert.then(function (alert) { return alert.present(); });
    };
    UserService.prototype.fetchContacts = function (data) {
        return this.http.post(this.baseURL9, data);
    };
    UserService.prototype.setContacts = function (data) {
        return this.http.post(this.baseURL10, data);
    };
    UserService.prototype.setSubscriber = function (data) {
        return this.http.post(this.baseURL11, data);
    };
    UserService.prototype.getBlockList = function (id) {
        console.log(id);
        return this.http.get(this.baseURL12 + id);
    };
    UserService.prototype.removeFromBlock = function (data) {
        return this.http.post(this.baseURL13, data);
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
        //import { CONSTANTS } from '../services/constant';
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]])
    ], UserService);
    return UserService;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);




 // HAMMER TIME
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



/**
 * @hidden
 * This class overrides the default Angular gesture config.
 */
var IonicGestureConfig = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](IonicGestureConfig, _super);
    function IonicGestureConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IonicGestureConfig.prototype.buildHammer = function (element) {
        var mc = new window.Hammer(element);
        for (var eventName in this.overrides) {
            if (eventName) {
                mc.get(eventName).set(this.overrides[eventName]);
            }
        }
        return mc;
    };
    IonicGestureConfig = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], IonicGestureConfig);
    return IonicGestureConfig;
}(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["HammerGestureConfig"]));



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
//# sourceMappingURL=main-es5.js.map