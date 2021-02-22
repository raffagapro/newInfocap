(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profesional-wallet-wallet-module"],{

/***/ "26Mx":
/*!*****************************************************!*\
  !*** ./src/app/profesional/wallet/wallet.module.ts ***!
  \*****************************************************/
/*! exports provided: WalletPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletPageModule", function() { return WalletPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _wallet_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wallet-routing.module */ "Ywc/");
/* harmony import */ var _wallet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wallet.page */ "V0ob");







let WalletPageModule = class WalletPageModule {
};
WalletPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _wallet_routing_module__WEBPACK_IMPORTED_MODULE_5__["WalletPageRoutingModule"]
        ],
        declarations: [_wallet_page__WEBPACK_IMPORTED_MODULE_6__["WalletPage"]]
    })
], WalletPageModule);



/***/ }),

/***/ "GYSr":
/*!*****************************************************!*\
  !*** ./src/app/profesional/wallet/wallet.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  font-size: 22px;\n}\n\n.titleUnder {\n  font-size: 29px;\n}\n\n.btnTitle {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3dhbGxldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxlQUFBO0FBQUo7O0FBRUE7RUFFSSxlQUFBO0FBQUo7O0FBRUE7RUFFSSxlQUFBO0FBQUoiLCJmaWxlIjoid2FsbGV0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZVxue1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbn1cbi50aXRsZVVuZGVyXG57XG4gICAgZm9udC1zaXplOiAyOXB4O1xufVxuLmJ0blRpdGxlXG57XG4gICAgZm9udC1zaXplOiAxNHB4O1xufSJdfQ== */");

/***/ }),

/***/ "Ql+U":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profesional/wallet/wallet.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/profesional/home\" text=\"\" icon=\"arrow-back\"></ion-back-button>\n      <ion-button class=\"homeBtn\" (click)=\"openMenu()\">\n        <ion-icon name=\"menu\" class=\"homeBtn\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title class=\"title-toolbar\">MI BILLETERA</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid fixed>\n\n    <!-- Ingresos semanales -->\n    <ion-row class=\"ion-margin-top\">\n      <ion-col size=\"10\" offset=\"1\">\n        <ion-text class=\"title\"><b>Ingresos semanales</b></ion-text>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"10\" offset=\"1\">\n        <ion-text class=\"titleUnder main-color\"><b>$ 0.00</b></ion-text>\n      </ion-col>\n    </ion-row>\n\n    <!-- Servicios realizados -->\n    <ion-row class=\"ion-margin-top\">\n      <ion-col size=\"10\" offset=\"1\">\n        <ion-text class=\"title\"><b>Servicios realizados</b></ion-text>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"10\" offset=\"1\">\n        <ion-text class=\"titleUnder main-color\"><b>23</b></ion-text>\n      </ion-col>\n    </ion-row>\n\n    <!-- buttons -->\n    <ion-row>\n      <ion-col size=\"5\" offset=\"1\">\n        <ion-button (click)=\"onClick()\" expand=\"block\" fill=\"outline\" class=\"btnTitle\">\n          Balance general\n        </ion-button>\n      </ion-col>\n\n      <ion-col size=\"5\">\n        <ion-button (click)=\"onClick()\" expand=\"block\" fill=\"outline\" class=\"btnTitle\">\n          Datos bancarios\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "V0ob":
/*!***************************************************!*\
  !*** ./src/app/profesional/wallet/wallet.page.ts ***!
  \***************************************************/
/*! exports provided: WalletPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletPage", function() { return WalletPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_wallet_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./wallet.page.html */ "Ql+U");
/* harmony import */ var _wallet_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wallet.page.scss */ "GYSr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let WalletPage = class WalletPage {
    constructor(menuController) {
        this.menuController = menuController;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.menuController.enable(true, 'profesional');
    }
    openMenu() {
        this.menuController.open();
    }
    onClick() {
        // do something awesome
    }
    imgProfile() {
        // do something awesome
    }
};
WalletPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] }
];
WalletPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-wallet',
        template: _raw_loader_wallet_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_wallet_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], WalletPage);



/***/ }),

/***/ "Ywc/":
/*!*************************************************************!*\
  !*** ./src/app/profesional/wallet/wallet-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: WalletPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletPageRoutingModule", function() { return WalletPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _wallet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wallet.page */ "V0ob");




const routes = [
    {
        path: '',
        component: _wallet_page__WEBPACK_IMPORTED_MODULE_3__["WalletPage"]
    }
];
let WalletPageRoutingModule = class WalletPageRoutingModule {
};
WalletPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WalletPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=profesional-wallet-wallet-module-es2015.js.map