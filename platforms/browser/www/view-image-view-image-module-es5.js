(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-image-view-image-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/view-image/view-image.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view-image/view-image.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header no-border transparent>\n  <ion-toolbar transparent>\n  </ion-toolbar>\n</ion-header> -->\n\n\n<ion-content class=\"bg-black\">\n  <div class=\"height-100 image-wrapper\">\n    <img class=\"image-preview\" src=\"{{ image }}\">\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/view-image/view-image.module.ts":
/*!*************************************************!*\
  !*** ./src/app/view-image/view-image.module.ts ***!
  \*************************************************/
/*! exports provided: ViewImagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewImagePageModule", function() { return ViewImagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _view_image_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-image.page */ "./src/app/view-image/view-image.page.ts");







var routes = [
    {
        path: '',
        component: _view_image_page__WEBPACK_IMPORTED_MODULE_6__["ViewImagePage"]
    }
];
var ViewImagePageModule = /** @class */ (function () {
    function ViewImagePageModule() {
    }
    ViewImagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_view_image_page__WEBPACK_IMPORTED_MODULE_6__["ViewImagePage"]]
        })
    ], ViewImagePageModule);
    return ViewImagePageModule;
}());



/***/ }),

/***/ "./src/app/view-image/view-image.page.scss":
/*!*************************************************!*\
  !*** ./src/app/view-image/view-image.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-view-image {\n  --background: black !important; }\n\n.image-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  /* horizontal */\n  -webkit-box-pack: center;\n          justify-content: center;\n  /* vertical */ }\n\n.image-preview {\n  max-height: 100%; }\n\n.bg-black {\n  --background: black !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYmJveF9mcm9udGVuZC9zcmMvYXBwL3ZpZXctaW1hZ2Uvdmlldy1pbWFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBYSxFQUFBOztBQUdqQjtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFBRSxlQUFBO0VBQ3JCLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFBRSxhQUFBLEVBQWM7O0FBR3pDO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0UsOEJBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXctaW1hZ2Uvdmlldy1pbWFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtdmlldy1pbWFnZSB7XG4gICAgLS1iYWNrZ3JvdW5kOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG4uaW1hZ2Utd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIGhvcml6b250YWwgKi9cbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIHZlcnRpY2FsICovXG59XG5cbi5pbWFnZS1wcmV2aWV3IHtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4uYmctYmxhY2t7XG4gIC0tYmFja2dyb3VuZDogYmxhY2sgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/view-image/view-image.page.ts":
/*!***********************************************!*\
  !*** ./src/app/view-image/view-image.page.ts ***!
  \***********************************************/
/*! exports provided: ViewImagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewImagePage", function() { return ViewImagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ViewImagePage = /** @class */ (function () {
    function ViewImagePage(route) {
        var _this = this;
        this.route = route;
        console.log("IMAGE");
        this.route.params.subscribe(function (params) {
            console.log(params);
            _this.image = params['image'];
            console.log(_this.image);
            // alert(this.id);
        });
    }
    ViewImagePage.prototype.ngOnInit = function () {
    };
    ViewImagePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    ViewImagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-image',
            template: __webpack_require__(/*! raw-loader!./view-image.page.html */ "./node_modules/raw-loader/index.js!./src/app/view-image/view-image.page.html"),
            styles: [__webpack_require__(/*! ./view-image.page.scss */ "./src/app/view-image/view-image.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ViewImagePage);
    return ViewImagePage;
}());



/***/ })

}]);
//# sourceMappingURL=view-image-view-image-module-es5.js.map