(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-profesional-detail-profesional-detail-module"],{

/***/ "44my":
/*!******************************************************************************!*\
  !*** ./src/app/user/profesional-detail/profesional-detail-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: ProfesionalDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfesionalDetailPageRoutingModule", function() { return ProfesionalDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profesional_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profesional-detail.page */ "flA3");




const routes = [
    {
        path: '',
        component: _profesional_detail_page__WEBPACK_IMPORTED_MODULE_3__["ProfesionalDetailPage"]
    }
];
let ProfesionalDetailPageRoutingModule = class ProfesionalDetailPageRoutingModule {
};
ProfesionalDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        ],
    })
], ProfesionalDetailPageRoutingModule);



/***/ }),

/***/ "KxoQ":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/profesional-detail/profesional-detail.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/user/profesional-list\" text=\"\" icon=\"arrow-back\"></ion-back-button>\n      <ion-button class=\"homeBtn\" (click)=\"openMenu()\">\n        <ion-icon name=\"menu\" class=\"homeBtn\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title class=\"title-toolbar\">TU PROFESIONAL</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- Slider -->\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-slides>\n          <!-- slide -->\n          <ion-slide>\n            <img src=\"/assets/images/unavailable-image.png\" class=\"imgSlide\"/>\n          </ion-slide>\n\n          <!-- slide -->\n          <ion-slide>\n            <img src=\"/assets/images/unavailable-image.png\" class=\"imgSlide\"/>\n          </ion-slide>\n\n          <!-- slide -->\n          <ion-slide>\n            <img src=\"/assets/images/unavailable-image.png\" class=\"imgSlide\"/>\n          </ion-slide>\n\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- profesional card item -->\n  <div class=\"no-border\" (click)=\"profDetails()\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n        <!-- profile img -->\n        <ion-col size=\"4\">\n          <ion-avatar class=\"profileImg\">\n            <img src=\"/assets/images/avatar.png\"/>\n          </ion-avatar>\n        </ion-col>\n\n        <!-- title -->\n        <ion-col size=\"8\">\n          <ion-text>\n            <span class=\"titleSelect main-color\">Juan Alcayaga</span><br>\n            <ion-badge color=\"primary\" class=\"badge-text\">Soldador</ion-badge>\n            <ion-badge color=\"medium\" class=\"badge-text\">Gasfiter</ion-badge>\n            <ion-badge color=\"medium\" class=\"badge-text\">Eléctrico</ion-badge><br>\n            <p class=\"textSelect main-color\" style=\"margin-top: 0; margin-bottom: 0;\">Vehículo: camioneta</p>\n            <p class=\"textSelect main-color\" style=\"margin-top: 0; margin-bottom: 0;\">8 am - 6 pm</p>\n            <p class=\"textSelect main-color\" style=\"margin-top: 0; margin-bottom: 0;\">De lunes a viernes</p>\n            <p class=\"textSelect main-color\" style=\"margin-top: 0; margin-bottom: 0;\">Santiago Qta. normal.</p>\n          </ion-text>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <ion-grid>\n\n    <!-- main text -->\n    <ion-row>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\">\n        <ion-text>\n          <p class=\"regText\">\n            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.\n          </p>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n    <!-- title -->\n    <ion-row>\n      <ion-col size=\"1\" offset=\"1\"></ion-col>\n      <ion-col size=\"8\" class=\"ion-text-center\">\n        <ion-text class=\"main-color title\"><b>Evaluaciones generales</b></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n    <!-- trabajos realizados -->\n    <ion-row class=\"border-bot\">\n      <!-- Text -->\n      <ion-col size=\"9\">\n        <ion-text>\n          <p class=\"itemText\">Cantidad de trabajos realizados</p>\n        </ion-text>\n      </ion-col>\n      <!-- icon -->\n      <ion-col size=\"3\">\n        <ion-text>\n          <p class=\"ratingText main-color ion-text-center\">\n            50\n            <ion-icon name=\"ribbon\" class=\"iconEnd\"></ion-icon>\n          </p>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n    <!-- valoracion -->\n    <ion-row class=\"border-bot\">\n      <!-- Text -->\n      <ion-col size=\"9\">\n        <ion-text>\n          <p class=\"itemText\">Valoraciones en relación al trabajo</p>\n        </ion-text>\n      </ion-col>\n      <!-- icon -->\n      <ion-col size=\"3\">\n        <ion-text>\n          <p class=\"ratingText main-color ion-text-center\">\n            4.83\n            <ion-icon name=\"star\" class=\"iconEnd\"></ion-icon>\n          </p>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n    <!-- capacidad tecnica -->\n    <ion-row class=\"border-bot\">\n      <!-- Text -->\n      <ion-col size=\"8\">\n        <ion-text>\n          <p class=\"itemText\">Capacidad Técnica</p>\n        </ion-text>\n      </ion-col>\n      <!-- icon -->\n      <ion-col size=\"4\">\n        <ion-text>\n          <p class=\"ratingText main-color ion-text-center\">\n            de 50\n            <ion-icon name=\"ribbon\" class=\"iconEnd\"></ion-icon>\n            / 50\n            <ion-icon name=\"hammer\" class=\"iconEnd\"></ion-icon>\n          </p>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n    <!-- Puntualidad -->\n    <ion-row class=\"border-bot\">\n      <!-- Text -->\n      <ion-col size=\"8\">\n        <ion-text>\n          <p class=\"itemText\">Puntualidad</p>\n        </ion-text>\n      </ion-col>\n      <!-- icon -->\n      <ion-col size=\"4\">\n        <ion-text>\n          <p class=\"ratingText main-color ion-text-center\">\n            de 50\n            <ion-icon name=\"ribbon\" class=\"iconEnd\"></ion-icon>\n            / 50\n            <ion-icon name=\"time\" class=\"iconEnd\"></ion-icon>\n          </p>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n    <!-- Cordialidad -->\n    <ion-row class=\"border-bot\">\n      <!-- Text -->\n      <ion-col size=\"8\">\n        <ion-text>\n          <p class=\"itemText\">Cordialidad</p>\n        </ion-text>\n      </ion-col>\n      <!-- icon -->\n      <ion-col size=\"4\">\n        <ion-text>\n          <p class=\"ratingText main-color ion-text-center\">\n            de 50\n            <ion-icon name=\"ribbon\" class=\"iconEnd\"></ion-icon>\n            / 50\n            <ion-icon name=\"happy\" class=\"iconEnd\"></ion-icon>\n          </p>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n    <!-- Servicio y Satisfacción -->\n    <ion-row class=\"border-bot\">\n      <!-- Text -->\n      <ion-col size=\"8\">\n        <ion-text>\n          <p class=\"itemText\">Servicio y Satisfacción</p>\n        </ion-text>\n      </ion-col>\n      <!-- icon -->\n      <ion-col size=\"4\">\n        <ion-text>\n          <p class=\"ratingText main-color ion-text-center\">\n            de 50\n            <ion-icon name=\"ribbon\" class=\"iconEnd\"></ion-icon>\n            / 50\n            <ion-icon name=\"thumbs-up\" class=\"iconEnd\"></ion-icon>\n          </p>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n    <!-- footer text -->\n    <ion-row class=\"subtitle ion-margin-top\">\n      <ion-col size=\"8\" offset=\"2\" class=\"ion-text-center\">\n        <ion-text class=\"lastText main-color\"><b>¿Quieres enviarle una solicitud de servicio a Juan Alcayaga?</b></ion-text>\n      </ion-col>\n    </ion-row>\n\n    <!-- enviar solicitud BTN -->\n    <ion-row class=\"ion-margin-top ion-margin-bottom\">\n      <ion-col size=\"1\"></ion-col>\n      <ion-col>\n        <ion-button size=\"5\" expand=\"block\" class=\"ion-text-uppercase\" (click)=\"sendRequest()\">\n          ENVIAR SOLICITUD\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "ZhKg":
/*!**********************************************************************!*\
  !*** ./src/app/user/profesional-detail/profesional-detail.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".imgSlide {\n  height: auto;\n  width: 100%;\n  margin-top: -35px;\n}\n\n.no-border {\n  margin-top: -75px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n\n.profileImg {\n  margin-left: 10px;\n  height: 100px;\n  width: 100px;\n}\n\n.titleSelect {\n  font-size: 23px;\n  font-weight: bold;\n}\n\n.textSelect {\n  font-size: 12px;\n}\n\n.badge-text {\n  font-size: 9px;\n  margin-right: 5px;\n}\n\n.locate-cont {\n  margin-top: 20px;\n  border-radius: 50px;\n  height: 30px;\n  width: 30px;\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #009ACE;\n}\n\n.rating-text {\n  font-size: 18px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.ratingText {\n  margin-top: 18px;\n  font-size: 15px;\n}\n\n.regText {\n  font-size: 12px;\n}\n\n.title {\n  font-size: 18px;\n}\n\n.itemText {\n  margin-left: 10px;\n}\n\n.border-bot {\n  border-bottom: 1px solid #009ACE;\n}\n\n.iconEnd {\n  margin-bottom: -3px;\n  font-size: 15px;\n}\n\n.lastText {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2Zlc2lvbmFsLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFBQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFHRjs7QUFEQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUlGOztBQUZBO0VBQ0UsZUFBQTtBQUtGOztBQUhBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBTUY7O0FBSkE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFPRjs7QUFMQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBUUY7O0FBTkE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFTRjs7QUFQQTtFQUNFLGVBQUE7QUFVRjs7QUFSQTtFQUNFLGVBQUE7QUFXRjs7QUFUQTtFQUNFLGlCQUFBO0FBWUY7O0FBVkE7RUFDRSxnQ0FBQTtBQWFGOztBQVhBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FBY0Y7O0FBWEE7RUFDRSxlQUFBO0FBY0YiLCJmaWxlIjoicHJvZmVzaW9uYWwtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWdTbGlkZXtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogLTM1cHg7XG59XG4ubm8tYm9yZGVye1xuICBtYXJnaW4tdG9wOiAtNzVweDtcbiAgcGFkZGluZy10b3A6IDJweDtcbiAgcGFkZGluZy1ib3R0b206IDJweDtcbn1cbi5wcm9maWxlSW1ne1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuLnRpdGxlU2VsZWN0e1xuICBmb250LXNpemU6IDIzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnRleHRTZWxlY3R7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5iYWRnZS10ZXh0e1xuICBmb250LXNpemU6IDlweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4ubG9jYXRlLWNvbnR7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDlBQ0U7XG59XG4ucmF0aW5nLXRleHR7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5yYXRpbmdUZXh0e1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG4ucmVnVGV4dHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLnRpdGxle1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uaXRlbVRleHR7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmJvcmRlci1ib3R7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDA5QUNFO1xufVxuLmljb25FbmR7XG4gIG1hcmdpbi1ib3R0b206IC0zcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmxhc3RUZXh0e1xuICBmb250LXNpemU6IDE2cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "dBxP":
/*!**********************************************************************!*\
  !*** ./src/app/user/profesional-detail/profesional-detail.module.ts ***!
  \**********************************************************************/
/*! exports provided: ProfesionalDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfesionalDetailPageModule", function() { return ProfesionalDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _profesional_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profesional-detail-routing.module */ "44my");
/* harmony import */ var _profesional_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profesional-detail.page */ "flA3");







let ProfesionalDetailPageModule = class ProfesionalDetailPageModule {
};
ProfesionalDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profesional_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfesionalDetailPageRoutingModule"],
        ],
        declarations: [_profesional_detail_page__WEBPACK_IMPORTED_MODULE_6__["ProfesionalDetailPage"]]
    })
], ProfesionalDetailPageModule);



/***/ }),

/***/ "flA3":
/*!********************************************************************!*\
  !*** ./src/app/user/profesional-detail/profesional-detail.page.ts ***!
  \********************************************************************/
/*! exports provided: ProfesionalDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfesionalDetailPage", function() { return ProfesionalDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profesional_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profesional-detail.page.html */ "KxoQ");
/* harmony import */ var _profesional_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profesional-detail.page.scss */ "ZhKg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let ProfesionalDetailPage = class ProfesionalDetailPage {
    constructor(router, menuController) {
        this.router = router;
        this.menuController = menuController;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.menuController.enable(true, 'user');
    }
    openMenu() {
        this.menuController.open();
    }
    sendRequest() {
        this.router.navigate(['/user/solicitud-servicio']);
    }
    profDetails() {
        // do something aweseom
    }
};
ProfesionalDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] }
];
ProfesionalDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profesional-detail',
        template: _raw_loader_profesional_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profesional_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfesionalDetailPage);



/***/ })

}]);
//# sourceMappingURL=user-profesional-detail-profesional-detail-module-es2015.js.map