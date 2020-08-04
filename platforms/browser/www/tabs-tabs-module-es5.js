(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tabs/tabs.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"tab1\">\n      <ion-icon name=\"home\"></ion-icon>\n      <ion-label>{{'Home'|translate}}</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab2\">\n      <ion-icon name=\"paper\"></ion-icon>\n      <ion-label>{{'Feeds'|translate}}</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab3\">\n      <ion-icon name=\"person\"></ion-icon>\n      <ion-label>{{'Profile'|translate}}</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n"

/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/tabs/tabs.router.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
            ],
            declarations: [
                _tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]
            ]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/helper.service */ "./src/app/services/helper.service.ts");







var TabsPage = /** @class */ (function () {
    function TabsPage(authService, storage, toastController, router, helper, platform) {
        this.authService = authService;
        this.storage = storage;
        this.toastController = toastController;
        this.router = router;
        this.helper = helper;
        this.platform = platform;
        this.data = '';
        if (this.platform.is('cordova'))
            this.requestFilePermissions();
    }
    TabsPage.prototype.ngOnInit = function () {
    };
    TabsPage.prototype.loadSpecialInfo = function () {
        var _this = this;
        this.authService.getSpecialData().subscribe(function (res) {
            _this.data = res['msg'];
        });
    };
    TabsPage.prototype.clearToken = function () {
        // ONLY FOR TESTING!
        this.storage.remove('access_token');
        var toast = this.toastController.create({
            message: 'JWT removed',
            duration: 3000
        });
        toast.then(function (toast) { return toast.present(); });
    };
    TabsPage.prototype.requestFilePermissions = function () {
        this.helper.checkPermissions()
            .then(function (permissions) { return console.log(permissions); });
    };
    TabsPage.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _services_helper_service__WEBPACK_IMPORTED_MODULE_6__["HelperService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
    ]; };
    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/index.js!./src/app/tabs/tabs.page.html"),
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_helper_service__WEBPACK_IMPORTED_MODULE_6__["HelperService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
    ], TabsPage);
    return TabsPage;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.router.module.ts":
/*!********************************************!*\
  !*** ./src/app/tabs/tabs.router.module.ts ***!
  \********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");




var routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'tab1',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return __webpack_require__.e(/*! import() | tab1-tab1-module */ "tab1-tab1-module").then(__webpack_require__.bind(null, /*! ../tab1/tab1.module */ "./src/app/tab1/tab1.module.ts")).then(function (m) { return m.Tab1PageModule; });
                        }
                    },
                    {
                        path: 'joingroup',
                        loadChildren: function () {
                            return __webpack_require__.e(/*! import() | join-group-join-group-module */ "join-group-join-group-module").then(__webpack_require__.bind(null, /*! ../join-group/join-group.module */ "./src/app/join-group/join-group.module.ts")).then(function (m) { return m.JoinGroupPageModule; });
                        }
                    },
                    {
                        path: 'invitemember',
                        loadChildren: function () {
                            return __webpack_require__.e(/*! import() | invite-member-invite-member-module */ "invite-member-invite-member-module").then(__webpack_require__.bind(null, /*! ../invite-member/invite-member.module */ "./src/app/invite-member/invite-member.module.ts")).then(function (m) { return m.InviteMemberPageModule; });
                        }
                    },
                    {
                        path: 'groupchat/:id',
                        children: [
                            {
                                path: '',
                                loadChildren: function () {
                                    return Promise.all(/*! import() | group-chat-group-chat-module */[__webpack_require__.e("default~create-feed-create-feed-module~group-chat-admin-group-chat-admin-module~group-chat-group-cha~c0185a8f"), __webpack_require__.e("group-chat-group-chat-module")]).then(__webpack_require__.bind(null, /*! ../group-chat/group-chat.module */ "./src/app/group-chat/group-chat.module.ts")).then(function (m) { return m.GroupChatPageModule; });
                                }
                            },
                            {
                                path: 'groupdetails/:id',
                                loadChildren: function () {
                                    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../group-details/group-details.module */ "./src/app/group-details/group-details.module.ts")).then(function (m) { return m.GroupDetailsPageModule; });
                                }
                            },
                        ]
                    },
                    {
                        path: 'groupchat',
                        children: [
                            {
                                path: 'groupchatadmin/:id',
                                loadChildren: function () {
                                    return Promise.all(/*! import() | group-chat-admin-group-chat-admin-module */[__webpack_require__.e("default~create-feed-create-feed-module~group-chat-admin-group-chat-admin-module~group-chat-group-cha~c0185a8f"), __webpack_require__.e("default~group-chat-admin-group-chat-admin-module~send-message-send-message-module"), __webpack_require__.e("group-chat-admin-group-chat-admin-module")]).then(__webpack_require__.bind(null, /*! ../group-chat-admin/group-chat-admin.module */ "./src/app/group-chat-admin/group-chat-admin.module.ts")).then(function (m) { return m.GroupChatAdminPageModule; });
                                }
                            },
                        ]
                    },
                    {
                        path: 'creategroup',
                        children: [
                            {
                                path: '',
                                loadChildren: function () {
                                    return __webpack_require__.e(/*! import() | create-group-create-group-module */ "create-group-create-group-module").then(__webpack_require__.bind(null, /*! ../create-group/create-group.module */ "./src/app/create-group/create-group.module.ts")).then(function (m) { return m.CreateGroupPageModule; });
                                }
                            },
                            {
                                path: 'addmember/:id',
                                loadChildren: function () {
                                    return __webpack_require__.e(/*! import() | add-member-add-member-module */ "add-member-add-member-module").then(__webpack_require__.bind(null, /*! ../add-member/add-member.module */ "./src/app/add-member/add-member.module.ts")).then(function (m) { return m.AddMemberPageModule; });
                                }
                            }
                        ]
                    }
                ]
            },
            {
                path: 'tab2',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return Promise.all(/*! import() | tab2-tab2-module */[__webpack_require__.e("common"), __webpack_require__.e("tab2-tab2-module")]).then(__webpack_require__.bind(null, /*! ../tab2/tab2.module */ "./src/app/tab2/tab2.module.ts")).then(function (m) { return m.Tab2PageModule; });
                        }
                    },
                ]
            },
            {
                path: 'tab3',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return __webpack_require__.e(/*! import() | tab3-tab3-module */ "default~feed-popover-feed-popover-module~tab3-tab3-module").then(__webpack_require__.bind(null, /*! ../tab3/tab3.module */ "./src/app/tab3/tab3.module.ts")).then(function (m) { return m.Tab3PageModule; });
                        }
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/tab1',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es5.js.map