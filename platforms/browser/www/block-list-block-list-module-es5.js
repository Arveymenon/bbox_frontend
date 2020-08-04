(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["block-list-block-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/block-list/block-list.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/block-list/block-list.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Blocked Users</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"blocked_users && !blocked_users.length\">\n    <p class=\"ion-text-center\">You haven't blocked anyone yet</p>\n  </div>\n  <ion-list>\n    <ion-item *ngFor=\"let item of blocked_users\" (click)=\"deleteAlert(item._id, item.name)\">\n      <ion-avatar slot=\"start\">\n        <img [src]=\"'http://198.12.92.202/public/uploads/' + item.avatar\" onError=\"this.src='assets/images/user.png';\">\n      </ion-avatar>\n      <ion-label>\n        <h2>{{ item.name ? item.name : item.mobile }}</h2>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/block-list/block-list.module.ts":
/*!*************************************************!*\
  !*** ./src/app/block-list/block-list.module.ts ***!
  \*************************************************/
/*! exports provided: BlockListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockListPageModule", function() { return BlockListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _block_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./block-list.page */ "./src/app/block-list/block-list.page.ts");







var routes = [
    {
        path: '',
        component: _block_list_page__WEBPACK_IMPORTED_MODULE_6__["BlockListPage"]
    }
];
var BlockListPageModule = /** @class */ (function () {
    function BlockListPageModule() {
    }
    BlockListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_block_list_page__WEBPACK_IMPORTED_MODULE_6__["BlockListPage"]]
        })
    ], BlockListPageModule);
    return BlockListPageModule;
}());



/***/ }),

/***/ "./src/app/block-list/block-list.page.scss":
/*!*************************************************!*\
  !*** ./src/app/block-list/block-list.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2NrLWxpc3QvYmxvY2stbGlzdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/block-list/block-list.page.ts":
/*!***********************************************!*\
  !*** ./src/app/block-list/block-list.page.ts ***!
  \***********************************************/
/*! exports provided: BlockListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockListPage", function() { return BlockListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shareduser_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shareduser/user.service */ "./src/app/shareduser/user.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_contacts_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/contacts.service */ "./src/app/services/contacts.service.ts");








var BlockListPage = /** @class */ (function () {
    function BlockListPage(userService, storage, loader, ref, alertController, translate, contactsService) {
        this.userService = userService;
        this.storage = storage;
        this.loader = loader;
        this.ref = ref;
        this.alertController = alertController;
        this.translate = translate;
        this.contactsService = contactsService;
    }
    ;
    BlockListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('id').then(function (val) {
            _this.user_id = val;
            _this.getList();
        });
    };
    BlockListPage.prototype.getList = function () {
        var _this = this;
        this.loader.presentLoading();
        this.userService.getBlockList(this.user_id).subscribe(function (list) {
            _this.loader.dismiss();
            list.forEach(function (item) {
                item.name = _this.contactsService.getContactName(item._id);
            });
            _this.blocked_users = list;
            _this.ref.detectChanges();
        });
    };
    BlockListPage.prototype.removeBlock = function (id) {
        var _this = this;
        console.log(id);
        var body = {
            user_id: this.user_id,
            blocked_user: id
        };
        console.log(body);
        this.userService.removeFromBlock(body).subscribe(function (removed) {
            _this.getList();
        }, function (err) { return console.log(err); });
    };
    BlockListPage.prototype.deleteAlert = function (id, name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var value, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        value = this.translate.instant(['Block_Chat', 'Confirm_Block', 'cancel', 'Block'], { value: 'en' });
                        return [4 /*yield*/, this.alertController.create({
                                header: "Are you Sure?",
                                message: "Kindly confirm you want to unblock " + name,
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
                                            _this.removeBlock(id);
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
    BlockListPage.ctorParameters = function () { return [
        { type: _shareduser_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _services_contacts_service__WEBPACK_IMPORTED_MODULE_7__["ContactsService"] }
    ]; };
    BlockListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-block-list',
            template: __webpack_require__(/*! raw-loader!./block-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/block-list/block-list.page.html"),
            styles: [__webpack_require__(/*! ./block-list.page.scss */ "./src/app/block-list/block-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shareduser_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _services_contacts_service__WEBPACK_IMPORTED_MODULE_7__["ContactsService"]])
    ], BlockListPage);
    return BlockListPage;
}());



/***/ })

}]);
//# sourceMappingURL=block-list-block-list-module-es5.js.map