(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-video-view-video-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/view-video/view-video.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view-video/view-video.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border transparent>\n  <!-- <ion-toolbar style=\"background: #000 !important; color: #fff\" transparent>\n  </ion-toolbar> -->\n</ion-header>\n\n\n<ion-content class=\"bg-black\">\n  <div style=\"background: #000 !important;\" class=\"width-100 height-100 bg-black video-wrapper\">\n    <video class=\"video-preview\" src=\"{{ video }}\" autoplay loop controls></video>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/view-video/view-video.module.ts":
/*!*************************************************!*\
  !*** ./src/app/view-video/view-video.module.ts ***!
  \*************************************************/
/*! exports provided: ViewVideoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewVideoPageModule", function() { return ViewVideoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _view_video_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-video.page */ "./src/app/view-video/view-video.page.ts");







const routes = [
    {
        path: '',
        component: _view_video_page__WEBPACK_IMPORTED_MODULE_6__["ViewVideoPage"]
    }
];
let ViewVideoPageModule = class ViewVideoPageModule {
};
ViewVideoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_view_video_page__WEBPACK_IMPORTED_MODULE_6__["ViewVideoPage"]]
    })
], ViewVideoPageModule);



/***/ }),

/***/ "./src/app/view-video/view-video.page.scss":
/*!*************************************************!*\
  !*** ./src/app/view-video/view-video.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-view-video {\n  background: black !important; }\n\n.video-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  /* horizontal */\n  -webkit-box-pack: center;\n          justify-content: center;\n  /* vertical */ }\n\n.video-preview {\n  width: 100%; }\n\n.bg-black {\n  --background: black !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYmJveF9mcm9udGVuZC9zcmMvYXBwL3ZpZXctdmlkZW8vdmlldy12aWRlby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBNEIsRUFBQTs7QUFHaEM7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQUUsZUFBQTtFQUNyQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQUUsYUFBQSxFQUFjOztBQUd6QztFQUVJLFdBQVcsRUFBQTs7QUFHZjtFQUNFLDhCQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3LXZpZGVvL3ZpZXctdmlkZW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLXZpZXctdmlkZW8ge1xuICAgIGJhY2tncm91bmQ6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbi52aWRlby13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogaG9yaXpvbnRhbCAqL1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogdmVydGljYWwgKi9cbn1cblxuLnZpZGVvLXByZXZpZXcge1xuICAgIC8vIG1heC1oZWlnaHQ6IDgwJTtcbiAgICB3aWR0aDogMTAwJTs7XG59XG5cbi5iZy1ibGFja3tcbiAgLS1iYWNrZ3JvdW5kOiBibGFjayAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/view-video/view-video.page.ts":
/*!***********************************************!*\
  !*** ./src/app/view-video/view-video.page.ts ***!
  \***********************************************/
/*! exports provided: ViewVideoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewVideoPage", function() { return ViewVideoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ViewVideoPage = class ViewVideoPage {
    constructor(route) {
        this.route = route;
        console.log("VIDEO");
        this.route.params.subscribe(params => {
            this.video = params['video'];
            console.log(this.video);
            // alert(this.id);
        });
    }
    ngOnInit() {
    }
};
ViewVideoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ViewVideoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-video',
        template: __webpack_require__(/*! raw-loader!./view-video.page.html */ "./node_modules/raw-loader/index.js!./src/app/view-video/view-video.page.html"),
        styles: [__webpack_require__(/*! ./view-video.page.scss */ "./src/app/view-video/view-video.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], ViewVideoPage);



/***/ })

}]);
//# sourceMappingURL=view-video-view-video-module-es2015.js.map