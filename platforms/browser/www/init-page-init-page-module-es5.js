(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["init-page-init-page-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/init-page/init-page.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/init-page/init-page.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"login-container\">\n    <img class=\"logo\" src=\"assets/images/logo.png\">\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/init-page/init-page.module.ts":
/*!***********************************************!*\
  !*** ./src/app/init-page/init-page.module.ts ***!
  \***********************************************/
/*! exports provided: InitPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitPagePageModule", function() { return InitPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _init_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./init-page.page */ "./src/app/init-page/init-page.page.ts");







var routes = [
    {
        path: '',
        component: _init_page_page__WEBPACK_IMPORTED_MODULE_6__["InitPagePage"]
    }
];
var InitPagePageModule = /** @class */ (function () {
    function InitPagePageModule() {
    }
    InitPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_init_page_page__WEBPACK_IMPORTED_MODULE_6__["InitPagePage"]]
        })
    ], InitPagePageModule);
    return InitPagePageModule;
}());



/***/ }),

/***/ "./src/app/init-page/init-page.page.scss":
/*!***********************************************!*\
  !*** ./src/app/init-page/init-page.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container {\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: -moz-max-content;\n  width: -webkit-max-content;\n  width: max-content;\n  max-width: 100%;\n  box-sizing: border-box;\n  position: absolute; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYmJveF9mcm9udGVuZC9zcmMvYXBwL2luaXQtcGFnZS9pbml0LXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksUUFBUTtFQUNSLFNBQVM7RUFDVCx3Q0FBK0I7VUFBL0IsZ0NBQStCO0VBQy9CLHVCQUF1QjtFQUN2QiwwQkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9pbml0LXBhZ2UvaW5pdC1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1jb250YWluZXJ7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgd2lkdGg6IC1tb3otbWF4LWNvbnRlbnQ7XG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/init-page/init-page.page.ts":
/*!*********************************************!*\
  !*** ./src/app/init-page/init-page.page.ts ***!
  \*********************************************/
/*! exports provided: InitPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitPagePage", function() { return InitPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InitPagePage = /** @class */ (function () {
    function InitPagePage() {
    }
    InitPagePage.prototype.ngOnInit = function () {
    };
    InitPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-init-page',
            template: __webpack_require__(/*! raw-loader!./init-page.page.html */ "./node_modules/raw-loader/index.js!./src/app/init-page/init-page.page.html"),
            styles: [__webpack_require__(/*! ./init-page.page.scss */ "./src/app/init-page/init-page.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InitPagePage);
    return InitPagePage;
}());



/***/ })

}]);
//# sourceMappingURL=init-page-init-page-module-es5.js.map