(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-servicio-pagar-forma-servicio-pagar-forma-module"],{

/***/ "1tZi":
/*!**************************************************************************!*\
  !*** ./src/app/user/servicio-pagar-forma/servicio-pagar-forma.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".no-border {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n\n.profileImg {\n  margin-left: 10px;\n  height: 75px;\n  width: 75px;\n}\n\n.titleSelect {\n  font-size: 26px;\n  font-weight: bold;\n}\n\n.subtitleSelect {\n  font-size: 14px;\n}\n\n.miniTitle {\n  font-size: 16px;\n}\n\n.text {\n  font-size: 29px;\n}\n\n.total {\n  margin-top: 0;\n  font-size: 38px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlcnZpY2lvLXBhZ2FyLWZvcm1hLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGdCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFFQTtFQUVJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFBSjs7QUFFQTtFQUVJLGVBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUVBO0VBRUksZUFBQTtBQUFKOztBQUVBO0VBRUksZUFBQTtBQUFKOztBQUVBO0VBRUksZUFBQTtBQUFKOztBQUVBO0VBRUksYUFBQTtFQUNBLGVBQUE7QUFBSiIsImZpbGUiOiJzZXJ2aWNpby1wYWdhci1mb3JtYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm8tYm9yZGVyXG57XG4gICAgcGFkZGluZy10b3A6IDJweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xufVxuLnByb2ZpbGVJbWdcbntcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgd2lkdGg6IDc1cHg7XG59XG4udGl0bGVTZWxlY3RcbntcbiAgICBmb250LXNpemU6IDI2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc3VidGl0bGVTZWxlY3RcbntcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4ubWluaVRpdGxlXG57XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuLnRleHRcbntcbiAgICBmb250LXNpemU6IDI5cHg7XG59XG4udG90YWxcbntcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGZvbnQtc2l6ZTogMzhweDtcbn0iXX0= */");

/***/ }),

/***/ "DqcJ":
/*!**********************************************************************************!*\
  !*** ./src/app/user/servicio-pagar-forma/servicio-pagar-forma-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: ServicioPagarFormaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicioPagarFormaPageRoutingModule", function() { return ServicioPagarFormaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _servicio_pagar_forma_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./servicio-pagar-forma.page */ "SrAq");




const routes = [
    {
        path: '',
        component: _servicio_pagar_forma_page__WEBPACK_IMPORTED_MODULE_3__["ServicioPagarFormaPage"]
    }
];
let ServicioPagarFormaPageRoutingModule = class ServicioPagarFormaPageRoutingModule {
};
ServicioPagarFormaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ServicioPagarFormaPageRoutingModule);



/***/ }),

/***/ "KPXj":
/*!**************************************************************************!*\
  !*** ./src/app/user/servicio-pagar-forma/servicio-pagar-forma.module.ts ***!
  \**************************************************************************/
/*! exports provided: ServicioPagarFormaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicioPagarFormaPageModule", function() { return ServicioPagarFormaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _servicio_pagar_forma_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./servicio-pagar-forma-routing.module */ "DqcJ");
/* harmony import */ var _servicio_pagar_forma_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./servicio-pagar-forma.page */ "SrAq");







let ServicioPagarFormaPageModule = class ServicioPagarFormaPageModule {
};
ServicioPagarFormaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _servicio_pagar_forma_routing_module__WEBPACK_IMPORTED_MODULE_5__["ServicioPagarFormaPageRoutingModule"]
        ],
        declarations: [_servicio_pagar_forma_page__WEBPACK_IMPORTED_MODULE_6__["ServicioPagarFormaPage"]]
    })
], ServicioPagarFormaPageModule);



/***/ }),

/***/ "SrAq":
/*!************************************************************************!*\
  !*** ./src/app/user/servicio-pagar-forma/servicio-pagar-forma.page.ts ***!
  \************************************************************************/
/*! exports provided: ServicioPagarFormaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicioPagarFormaPage", function() { return ServicioPagarFormaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_servicio_pagar_forma_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./servicio-pagar-forma.page.html */ "o9vA");
/* harmony import */ var _servicio_pagar_forma_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./servicio-pagar-forma.page.scss */ "1tZi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _pago_exitoso_modal_pago_exitoso_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pago-exitoso-modal/pago-exitoso-modal.component */ "2dcQ");






let ServicioPagarFormaPage = class ServicioPagarFormaPage {
    constructor(modalController, menuController) {
        this.modalController = modalController;
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
    submitPayment() {
        this.modalController.create({
            component: _pago_exitoso_modal_pago_exitoso_modal_component__WEBPACK_IMPORTED_MODULE_5__["PagoExitosoModalComponent"],
            cssClass: 'modalSuccess',
        }).then(modalEl => {
            modalEl.present();
        });
    }
};
ServicioPagarFormaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] }
];
ServicioPagarFormaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-servicio-pagar-forma',
        template: _raw_loader_servicio_pagar_forma_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_servicio_pagar_forma_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ServicioPagarFormaPage);



/***/ }),

/***/ "o9vA":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/servicio-pagar-forma/servicio-pagar-forma.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/user/servicio-pagar\" text=\"\" icon=\"arrow-back\"></ion-back-button>\n      <ion-button class=\"homeBtn\" (click)=\"openMenu()\">\n        <ion-icon name=\"menu\" class=\"homeBtn\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title class=\"title-toolbar\">INGRESA TU PAGO</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- profesional card item -->\n  <div class=\"no-border\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n        <!-- profile img -->\n        <ion-col size=\"4\" offset=\"1\">\n          <ion-avatar class=\"profileImg\">\n            <img src=\"/assets/images/avatar.png\"/>\n          </ion-avatar>\n        </ion-col>\n\n        <!-- title -->\n        <ion-col size=\"7\">\n          <ion-text>\n            <span class=\"titleSelect main-color\">Juan Alcayaga</span><br>\n            <p class=\"main-color subtitleSelect\" style=\"margin-top: 0; margin-bottom: 0;\">Santiago Qta. normal.</p>\n          </ion-text>\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-text class=\"miniTitle\">Instalación de clóset</ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <ion-grid fixed>\n\n    <!-- total a pagar  -->\n    <ion-row class=\"ion-margin-top\">\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <ion-text class=\"text main-color\">\n          <b>TOTAL A PAGAR</b>\n        </ion-text>\n      </ion-col>\n\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <ion-text class=\"total\" color=\"danger\">\n          <b>$550</b>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n    <!-- nombre -->\n    <ion-row>\n      <ion-col size=\"11\">\n        <ion-item>\n          <ion-label position=\"floating\" class=\"main-color\">\n            <ion-icon name=\"person\" slot=\"start\" class=\"main-color\"></ion-icon>\n            <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Nombre del titular</ion-text>\n          </ion-label>\n          <ion-input type=\"text\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <!-- numero tarjeta -->\n    <ion-row>\n      <ion-col size=\"11\">\n        <ion-item>\n          <ion-label position=\"floating\" class=\"main-color\">\n            <ion-icon name=\"card\" slot=\"start\" class=\"main-color\"></ion-icon>\n            <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Número de tarjeta</ion-text>\n          </ion-label>\n          <ion-input type=\"text\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <!-- exp date -->\n    <div style=\"height: 10px\"></div>\n    <ion-row class=\"ion-margin-top\">\n      <ion-col size=\"11\">\n        <ion-item>\n          <ion-label class=\"main-color\">\n            <ion-icon name=\"calendar\" slot=\"start\" class=\"main-color\"></ion-icon>\n            <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Fecha expiración</ion-text>\n          </ion-label>\n          <ion-datetime></ion-datetime>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <!-- CVV -->\n    <ion-row>\n      <ion-col size=\"11\">\n        <ion-item>\n          <ion-label position=\"floating\" class=\"main-color\">\n            <ion-icon name=\"lock-closed\" slot=\"start\" class=\"main-color\"></ion-icon>\n            <ion-text class=\"main-color\">&nbsp;CVV</ion-text>\n          </ion-label>\n          <ion-input type=\"text\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <!-- CONFIRMAR BTN -->\n    <ion-row class=\"ion-margin-top\">\n      <ion-col size=\"1\"></ion-col>\n      <ion-col>\n        <ion-button size=\"5\" expand=\"block\" class=\"ion-text-uppercase\" (click)=\"submitPayment()\">\n          PAGAR\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=user-servicio-pagar-forma-servicio-pagar-forma-module-es2015.js.map