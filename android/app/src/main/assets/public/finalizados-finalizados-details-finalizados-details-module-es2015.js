(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["finalizados-finalizados-details-finalizados-details-module"],{

/***/ "4nSd":
/*!**********************************************************************************************!*\
  !*** ./src/app/profesional/home/finalizados/finalizados-details/finalizados-details.page.ts ***!
  \**********************************************************************************************/
/*! exports provided: FinalizadosDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalizadosDetailsPage", function() { return FinalizadosDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_finalizados_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./finalizados-details.page.html */ "EzMD");
/* harmony import */ var _finalizados_details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./finalizados-details.page.scss */ "UqX/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let FinalizadosDetailsPage = class FinalizadosDetailsPage {
    constructor(router, menuController) {
        this.router = router;
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
    rateClient() {
        this.router.navigate(['/profesional/home/home-tabs/finalizados/rate-form']);
    }
};
FinalizadosDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] }
];
FinalizadosDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-finalizados-details',
        template: _raw_loader_finalizados_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_finalizados_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FinalizadosDetailsPage);



/***/ }),

/***/ "CeUq":
/*!************************************************************************************************!*\
  !*** ./src/app/profesional/home/finalizados/finalizados-details/finalizados-details.module.ts ***!
  \************************************************************************************************/
/*! exports provided: FinalizadosDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalizadosDetailsPageModule", function() { return FinalizadosDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _finalizados_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./finalizados-details-routing.module */ "G68r");
/* harmony import */ var _finalizados_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./finalizados-details.page */ "4nSd");







let FinalizadosDetailsPageModule = class FinalizadosDetailsPageModule {
};
FinalizadosDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _finalizados_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["FinalizadosDetailsPageRoutingModule"]
        ],
        declarations: [_finalizados_details_page__WEBPACK_IMPORTED_MODULE_6__["FinalizadosDetailsPage"]]
    })
], FinalizadosDetailsPageModule);



/***/ }),

/***/ "EzMD":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profesional/home/finalizados/finalizados-details/finalizados-details.page.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    \n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/profesional/home/home-tabs/finalizados\" text=\"\" icon=\"arrow-back\"></ion-back-button>\n      <ion-button class=\"homeBtn\" (click)=\"openMenu()\">\n        <ion-icon name=\"menu\" class=\"homeBtn\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title class=\"title-toolbar\">FINALIZADOS</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- profesional card item -->\n  <div class=\"no-border\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n        <!-- profile img -->\n        <ion-col size=\"4\" offset=\"1\">\n          <ion-avatar class=\"profileImg\">\n            <img src=\"/assets/images/avatar.png\"/>\n          </ion-avatar>\n        </ion-col>\n\n        <!-- title -->\n        <ion-col size=\"6\">\n          <ion-text>\n            <small class=\"ticket\">Ticket #100091234</small><br>\n            <span class=\"titleSelect main-color\">Cerrajería para <br> Juan Alcayaga</span><br>\n            <p class=\"main-color mini-text\" style=\"margin-top: 0; margin-bottom: 0;\">18 nov 2020</p>\n          </ion-text>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <ion-grid>\n    \n    <!-- title -->\n    <ion-row>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-icon name=\"build\" class=\"main-color iconFixTitle\"></ion-icon>\n        <ion-text class=\"main-color title\"><b> Trabajo requerido</b></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-text class=\"titleText\">Cambio de chapas</ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n    <!-- Fecha de relizacion -->\n    <ion-row>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-icon name=\"calendar-outline\" class=\"main-color iconFixTitle\"></ion-icon>\n        <ion-text class=\"main-color subtitle\"><b> Fecha de realización</b></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-text class=\"subText\"> Viernes 20 de noviembre de 2020</ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n    <!-- Costo -->\n    <ion-row>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-icon name=\"wallet-outline\" class=\"main-color iconFixTitle\"></ion-icon>\n        <ion-text class=\"main-color subtitle\"><b> Costo</b></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-text class=\"subText\"> $30 USD</ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n    <!-- iniciar trabajo BTN -->\n    <ion-row class=\"ion-margin-top ion-margin-bottom\">\n      <ion-col size=\"1\"></ion-col>\n      <ion-col>\n        <ion-button expand=\"block\" class=\"ion-text-uppercase\" color=\"primary\" (click)=\"rateClient()\">\n          <ion-icon slot=\"start\" name=\"thumbs-up\"></ion-icon>\n          CALIFICARAL CLIENTE\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "G68r":
/*!********************************************************************************************************!*\
  !*** ./src/app/profesional/home/finalizados/finalizados-details/finalizados-details-routing.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: FinalizadosDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalizadosDetailsPageRoutingModule", function() { return FinalizadosDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _finalizados_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./finalizados-details.page */ "4nSd");




const routes = [
    {
        path: '',
        component: _finalizados_details_page__WEBPACK_IMPORTED_MODULE_3__["FinalizadosDetailsPage"]
    }
];
let FinalizadosDetailsPageRoutingModule = class FinalizadosDetailsPageRoutingModule {
};
FinalizadosDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FinalizadosDetailsPageRoutingModule);



/***/ }),

/***/ "UqX/":
/*!************************************************************************************************!*\
  !*** ./src/app/profesional/home/finalizados/finalizados-details/finalizados-details.page.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".no-border {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n\n.profileImg {\n  margin-left: 10px;\n  height: 75px;\n  width: 75px;\n}\n\n.titleSelect {\n  font-size: 19px;\n  font-weight: bold;\n}\n\n.title {\n  font-size: 20px;\n}\n\n.titleText {\n  font-size: 16px;\n}\n\n.subtitle {\n  font-size: 18px;\n}\n\n.subText {\n  font-size: 14px;\n}\n\n.minusMargin {\n  margin-top: -25px;\n}\n\n.iconFix {\n  margin-bottom: -3px;\n}\n\n.mini-text {\n  font-size: 14px;\n}\n\n.ticket {\n  color: red;\n  font-size: 12px;\n}\n\n.locate-cont {\n  border-radius: 50px;\n  height: 45px;\n  width: 45px;\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: 5px;\n  background-color: #009ACE;\n}\n\n.bg-green-color {\n  background-color: #2dd36f;\n}\n\n.rating-text {\n  font-size: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  display: inline-flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2ZpbmFsaXphZG9zLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUFBO0VBRUksZUFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0FBR0o7O0FBREE7RUFDSSxlQUFBO0FBSUo7O0FBRkE7RUFDSSxlQUFBO0FBS0o7O0FBSEE7RUFDSSxlQUFBO0FBTUo7O0FBSkE7RUFDSSxpQkFBQTtBQU9KOztBQUxBO0VBQ0ksbUJBQUE7QUFRSjs7QUFOQTtFQUVJLGVBQUE7QUFRSjs7QUFOQTtFQUVJLFVBQUE7RUFDQSxlQUFBO0FBUUo7O0FBTkE7RUFFSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBUUo7O0FBTkE7RUFFSSx5QkFBQTtBQVFKOztBQU5BO0VBRUksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQVFKIiwiZmlsZSI6ImZpbmFsaXphZG9zLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vLWJvcmRlcntcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XG59XG4ucHJvZmlsZUltZ3tcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgd2lkdGg6IDc1cHg7XG59XG4udGl0bGVTZWxlY3RcbntcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4udGl0bGV7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG4udGl0bGVUZXh0e1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5zdWJ0aXRsZXtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG4uc3ViVGV4dHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4ubWludXNNYXJnaW57XG4gICAgbWFyZ2luLXRvcDogLTI1cHg7XG59XG4uaWNvbkZpeHtcbiAgICBtYXJnaW4tYm90dG9tOiAtM3B4O1xufVxuLm1pbmktdGV4dFxue1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi50aWNrZXRcbntcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5sb2NhdGUtY29udFxue1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDlBQ0U7XG59XG4uYmctZ3JlZW4tY29sb3JcbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmRkMzZmO1xufVxuLnJhdGluZy10ZXh0XG57XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=finalizados-finalizados-details-finalizados-details-module-es2015.js.map