(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-list-contact-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/contact-list/contact-list.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact-list/contact-list.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Contacts</ion-title>\n  </ion-toolbar>\n  <!-- <ion-searchbar [(ngModel)]=\"searchTerm\"\n    (ionChange)=\"showContacts()\">\n  </ion-searchbar> -->\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-virtual-scroll [items]=\"allContacts\" approxItemHeight=\"60px\">\n    <ion-item *virtualItem=\"let item\" (click)=\"checkAndCreateGroup(item._id, item.name)\">\n      <ion-avatar slot=\"start\">\n        <img [src]=\"avatarArray[item.mobile]\">\n      </ion-avatar>\n      <ion-label>\n        <h2>{{ item.name }}</h2>\n        <h3>{{ item.mobile }}</h3>\n      </ion-label>\n    </ion-item>\n  </ion-virtual-scroll>\n  <ion-item><span class=\"primary-color\" (click)=\"goToInvitePage()\">Invite Other Members</span></ion-item>\n</ion-content>"

/***/ }),

/***/ "./src/app/contact-list/contact-list.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/contact-list/contact-list.module.ts ***!
  \*****************************************************/
/*! exports provided: ContactListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListPageModule", function() { return ContactListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contact_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-list.page */ "./src/app/contact-list/contact-list.page.ts");







const routes = [
    {
        path: '',
        component: _contact_list_page__WEBPACK_IMPORTED_MODULE_6__["ContactListPage"]
    }
];
let ContactListPageModule = class ContactListPageModule {
};
ContactListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_contact_list_page__WEBPACK_IMPORTED_MODULE_6__["ContactListPage"]]
    })
], ContactListPageModule);



/***/ }),

/***/ "./src/app/contact-list/contact-list.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/contact-list/contact-list.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtbGlzdC9jb250YWN0LWxpc3QucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/contact-list/contact-list.page.ts":
/*!***************************************************!*\
  !*** ./src/app/contact-list/contact-list.page.ts ***!
  \***************************************************/
/*! exports provided: ContactListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListPage", function() { return ContactListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/contacts/ngx */ "./node_modules/@ionic-native/contacts/ngx/index.js");
/* harmony import */ var _shareduser_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shareduser/user.service */ "./src/app/shareduser/user.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _shared_group_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/group.service */ "./src/app/shared/group.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_contacts_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/contacts.service */ "./src/app/services/contacts.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");













let ContactListPage = class ContactListPage {
    constructor(platform, contacts, userService, storage, groupService, router, loader, ref, translate, toastController, contactsService, location, storageService, alertController) {
        this.platform = platform;
        this.contacts = contacts;
        this.userService = userService;
        this.storage = storage;
        this.groupService = groupService;
        this.router = router;
        this.loader = loader;
        this.ref = ref;
        this.translate = translate;
        this.toastController = toastController;
        this.contactsService = contactsService;
        this.location = location;
        this.storageService = storageService;
        this.alertController = alertController;
        this.searching = false;
        this.localContacts = [];
        this.avatarArray = [];
        this.userArray = [];
        this.storage.get('id').then((val) => {
            this.user_id = val;
        });
    }
    ngOnInit() {
        if (this.platform.is('cordova')) {
            var contactsData = this.contactsService.contactsData();
            console.log(contactsData);
            this.avatarArray = contactsData.avatarArray;
            this.allContacts = contactsData.allContacts;
        }
        else {
            this.allContacts = this.contactsService.getDemoUsers();
        }
    }
    checkAndCreateGroup(id, name) {
        this.loader.presentLoading();
        console.log('Clicked and ID', id);
        var body = {
            members: [id, this.user_id]
        };
        this.groupService.checkExists(body)
            .subscribe((check) => {
            console.log(check);
            this.loader.dismiss();
            this.ref.detectChanges();
            console.log('CHECk', check);
            if (check.blocked && check.user == this.user_id) {
                this.deleteAlert(id, name);
            }
            else if (check.blocked && check.user != this.user_id) {
                this.showToast("The User has blocked you.");
                // this.showToast("You have blocked this user. Kindly remove him from your Blocked List to continue.");
            }
            else if (check.exists) {
                this.router.navigate(['group-chat', check.response[0]._id]);
            }
            else {
                this.loader.presentLoading();
                this.userArray[0] = { memberid: this.user_id, accepted: true, admin: true };
                this.userArray[1] = { memberid: id, accepted: false, admin: false };
                var empty_group = {
                    name: "Personal Group",
                    description: "No Description"
                };
                this.groupService.postGroup(empty_group).subscribe((res) => {
                    console.log(res);
                    this.userService.putUser({ members: this.userArray }, res._id).subscribe((res1) => {
                        this.router.navigate(['group-chat', res._id]);
                        this.loader.dismiss();
                        this.ref.detectChanges();
                        this.showToast();
                    });
                }, err => { this.loader.dismiss(); this.ref.detectChanges(); });
            }
        }, err => { this.loader.dismiss(); this.ref.detectChanges(); });
    }
    showToast(lang = null) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // let value = this.translate.instant('Chat_Created_Successfully', { value: this.lang });
            this.storage.get('language').then((language) => {
                console.log(language);
                this.translate.get("Chat_Created_Successfully", { value: language })
                    .subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    const toast = yield this.toastController.create({
                        message: lang ? lang : res,
                        duration: 3000,
                        position: "bottom",
                    });
                    toast.present();
                    this.ref.detectChanges();
                }));
            });
        });
    }
    goToInvitePage() {
        this.location.back();
        setTimeout(() => {
            this.router.navigate(['invite-member']);
        }, 400);
    }
    removeBlock(id, name) {
        console.log(id);
        var body = {
            user_id: this.user_id,
            blocked_user: id
        };
        console.log(body);
        this.userService.removeFromBlock(body).subscribe(removed => {
            this.showToast("User has been removed from your Block List. Kindly continue to initiate chat with " + name);
        }, err => console.log(err));
    }
    deleteAlert(id, name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let value = this.translate.instant(['Block_Chat', 'Confirm_Block', 'cancel', 'Unblock'], { value: 'en' });
            const alert = yield this.alertController.create({
                header: "Are you Sure?",
                message: "You have blocked " + name + ". Do you want to remove " + name + " from your Block List?",
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
                        text: value.Unblock,
                        role: 'okay',
                        handler: () => {
                            console.log('Confirm Okay');
                            this.removeBlock(id, name);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
ContactListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_3__["Contacts"] },
    { type: _shareduser_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _shared_group_service__WEBPACK_IMPORTED_MODULE_6__["GroupService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _services_contacts_service__WEBPACK_IMPORTED_MODULE_10__["ContactsService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_12__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
ContactListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-list',
        template: __webpack_require__(/*! raw-loader!./contact-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/contact-list/contact-list.page.html"),
        styles: [__webpack_require__(/*! ./contact-list.page.scss */ "./src/app/contact-list/contact-list.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_3__["Contacts"],
        _shareduser_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _shared_group_service__WEBPACK_IMPORTED_MODULE_6__["GroupService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _services_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _services_contacts_service__WEBPACK_IMPORTED_MODULE_10__["ContactsService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"],
        _services_storage_service__WEBPACK_IMPORTED_MODULE_12__["StorageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], ContactListPage);



/***/ })

}]);
//# sourceMappingURL=contact-list-contact-list-module-es2015.js.map