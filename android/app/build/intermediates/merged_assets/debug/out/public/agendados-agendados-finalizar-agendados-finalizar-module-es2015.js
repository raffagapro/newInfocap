(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agendados-agendados-finalizar-agendados-finalizar-module"],{

/***/ "4DFG":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profesional/home/agendados/agendados-finalizar/agendados-finalizar.page.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"danger\">\n    \n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/profesional/home/home-tabs/agendados\" text=\"\" icon=\"arrow-back\"></ion-back-button>\n      <ion-button class=\"homeBtn\" (click)=\"openMenu()\">\n        <ion-icon name=\"menu\" class=\"homeBtn\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title class=\"title-toolbar\">FINALIZAR EL SERVICIO</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- profesional card item -->\n  <div class=\"no-border\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n        <!-- profile img -->\n        <ion-col size=\"4\" offset=\"1\">\n          <ion-avatar class=\"profileImg\">\n            <img src=\"/assets/images/avatar.png\"/>\n          </ion-avatar>\n        </ion-col>\n\n        <!-- title -->\n        <ion-col size=\"7\">\n          <ion-text>\n            <small class=\"ticket\">Ticket #100091234</small>\n            <span class=\"titleSelect main-color\">\n              Cerrajería para<br>\n              Emmy Mut\n            </span>\n            <br>\n            <p class=\"textSelect main-color\" style=\"margin-top: 0; margin-bottom: 0;\">27 nov 2020</p>\n          </ion-text>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <ion-grid>\n\n    <!-- title -->\n    <ion-row>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-text class=\"main-color title\"><b>Fotografías del trabajo realizado</b></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n    <!-- images -->\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"4\" offset=\"1\">\n        <img src=\"/assets/images/unavailable-image.png\" class=\"imgSingle\">\n      </ion-col>\n      <ion-col size=\"4\">\n        <img src=\"/assets/images/unavailable-image.png\" class=\"imgSingle\">\n      </ion-col>\n      <ion-col size=\"3\">\n        <div class=\"locate-cont\">\n          <ion-icon name=\"add\" color=\"light\" class=\"rating-text\"></ion-icon>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <!-- text -->\n    <ion-row class=\"minusMargin\">\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-text class=\"main-color regText\"><b>Informe del trabajo</b></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n    <!-- text-area -->\n    <ion-row class=\"ion-margin-top\">\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"border ion-text-center\">\n        <ion-item lines=\"none\">\n           <ion-textarea rows=\"3\" cols=\"20\" placeholder=\"Describe el trabajo realizado.\"></ion-textarea>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n    <!-- title -->\n    <ion-row class=\"ion-margin-top\">\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"5\" class=\"ion-text-center border-right\">\n        <ion-text class=\"main-color title\"><b>Método de pago</b></ion-text>\n        <br>\n        <ion-text class=\"subMiniTex ion-padding-top\">Efectivo</ion-text>\n      </ion-col>\n      <ion-col size=\"3\" class=\"ion-text-center\">\n        <ion-text class=\"main-color title\"><b>Costo</b></ion-text>\n        <br>\n        <ion-text class=\"subMiniTex ion-padding-top\">20.00</ion-text>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-icon color=\"danger\" name=\"add-circle\" class=\"addIcon\" (click)=\"extraCharge()\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n     <!-- finalizar trabajo BTN -->\n     <ion-row class=\"ion-margin-top ion-margin-bottom\">\n      <ion-col size=\"1\"></ion-col>\n      <ion-col>\n        <ion-button size=\"5\" expand=\"block\" class=\"ion-text-uppercase\" color=\"danger\" (click)=\"finalizarSolicitud()\">\n          <ion-icon slot=\"start\" name=\"build\"></ion-icon>\n          FINALIZAR\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "TGXy":
/*!**********************************************************************************************!*\
  !*** ./src/app/profesional/home/agendados/agendados-finalizar/agendados-finalizar.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: AgendadosFinalizarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendadosFinalizarPageModule", function() { return AgendadosFinalizarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _agendados_finalizar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./agendados-finalizar-routing.module */ "jtOa");
/* harmony import */ var _agendados_finalizar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./agendados-finalizar.page */ "rqYQ");







let AgendadosFinalizarPageModule = class AgendadosFinalizarPageModule {
};
AgendadosFinalizarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _agendados_finalizar_routing_module__WEBPACK_IMPORTED_MODULE_5__["AgendadosFinalizarPageRoutingModule"]
        ],
        declarations: [_agendados_finalizar_page__WEBPACK_IMPORTED_MODULE_6__["AgendadosFinalizarPage"]]
    })
], AgendadosFinalizarPageModule);



/***/ }),

/***/ "d21X":
/*!**********************************************************************************************!*\
  !*** ./src/app/profesional/home/agendados/agendados-finalizar/agendados-finalizar.page.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".no-border {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n\n.profileImg {\n  margin-left: 10px;\n  height: 75px;\n  width: 75px;\n}\n\n.titleSelect {\n  font-size: 23px;\n  font-weight: bold;\n}\n\n.tittle {\n  font-size: 18px;\n}\n\n.border {\n  border: 1px solid #009ACE;\n}\n\n.regText {\n  font-size: 14px;\n}\n\n.imgSingle {\n  height: 125px;\n}\n\n.locate-cont {\n  border-radius: 50px;\n  height: 50px;\n  width: 50px;\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #009ACE;\n}\n\n.rating-text {\n  font-size: 26px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.ticket {\n  color: red;\n  font-size: 12px;\n}\n\n.textSelect {\n  font-size: 14px;\n}\n\n.minusMargin {\n  margin-top: -20px;\n}\n\n.subMiniTex {\n  font-size: 16px;\n}\n\n.addIcon {\n  font-size: 35px;\n}\n\n.border-right {\n  border-right: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2FnZW5kYWRvcy1maW5hbGl6YXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNBO0VBRUksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUNBO0VBRUksZUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBQ0E7RUFFSSxlQUFBO0FBQ0o7O0FBQ0E7RUFFSSx5QkFBQTtBQUNKOztBQUNBO0VBRUksZUFBQTtBQUNKOztBQUNBO0VBRUksYUFBQTtBQUNKOztBQUNBO0VBRUksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUNBO0VBRUEsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDQTs7QUFDQTtFQUVJLFVBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBQ0E7RUFFSSxlQUFBO0FBQ0o7O0FBQ0E7RUFFSSxpQkFBQTtBQUNKOztBQUNBO0VBRUksZUFBQTtBQUNKOztBQUNBO0VBRUksZUFBQTtBQUNKOztBQUNBO0VBRUksMkJBQUE7QUFDSiIsImZpbGUiOiJhZ2VuZGFkb3MtZmluYWxpemFyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uby1ib3JkZXJ7XG4gICAgcGFkZGluZy10b3A6IDJweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xufVxuLnByb2ZpbGVJbWdcbntcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgd2lkdGg6IDc1cHg7XG59XG4udGl0bGVTZWxlY3RcbntcbiAgICBmb250LXNpemU6IDIzcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4udGl0dGxlXG57XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuLmJvcmRlclxue1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDlBQ0U7XG59XG4ucmVnVGV4dFxue1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5pbWdTaW5nbGVcbntcbiAgICBoZWlnaHQ6IDEyNXB4O1xufVxuLmxvY2F0ZS1jb250XG57XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDlBQ0U7XG59XG4ucmF0aW5nLXRleHRcbntcbmZvbnQtc2l6ZTogMjZweDtcbm1hcmdpbi1sZWZ0OiBhdXRvO1xubWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLnRpY2tldFxue1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLnRleHRTZWxlY3RcbntcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4ubWludXNNYXJnaW5cbntcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcbn1cbi5zdWJNaW5pVGV4XG57XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuLmFkZEljb25cbntcbiAgICBmb250LXNpemU6IDM1cHg7XG59XG4uYm9yZGVyLXJpZ2h0XG57XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmVkO1xufVxuICAiXX0= */");

/***/ }),

/***/ "jtOa":
/*!******************************************************************************************************!*\
  !*** ./src/app/profesional/home/agendados/agendados-finalizar/agendados-finalizar-routing.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: AgendadosFinalizarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendadosFinalizarPageRoutingModule", function() { return AgendadosFinalizarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _agendados_finalizar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agendados-finalizar.page */ "rqYQ");




const routes = [
    {
        path: '',
        component: _agendados_finalizar_page__WEBPACK_IMPORTED_MODULE_3__["AgendadosFinalizarPage"]
    }
];
let AgendadosFinalizarPageRoutingModule = class AgendadosFinalizarPageRoutingModule {
};
AgendadosFinalizarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AgendadosFinalizarPageRoutingModule);



/***/ }),

/***/ "rqYQ":
/*!********************************************************************************************!*\
  !*** ./src/app/profesional/home/agendados/agendados-finalizar/agendados-finalizar.page.ts ***!
  \********************************************************************************************/
/*! exports provided: AgendadosFinalizarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendadosFinalizarPage", function() { return AgendadosFinalizarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_agendados_finalizar_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./agendados-finalizar.page.html */ "4DFG");
/* harmony import */ var _agendados_finalizar_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./agendados-finalizar.page.scss */ "d21X");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _confirm_success_modal_confirm_success_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirm-success-modal/confirm-success-modal.component */ "K4R9");







let AgendadosFinalizarPage = class AgendadosFinalizarPage {
    constructor(modalController, router, menuController) {
        this.modalController = modalController;
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
    finalizarSolicitud() {
        this.modalController.create({
            component: _confirm_success_modal_confirm_success_modal_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmSuccessModalComponent"],
            cssClass: 'modalSuccess',
        }).then(modalEl => {
            modalEl.present();
        });
    }
    extraCharge() {
        this.router.navigate(['/profesional/home/home-tabs/agendados/servicios-adicionales']);
    }
};
AgendadosFinalizarPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] }
];
AgendadosFinalizarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-agendados-finalizar',
        template: _raw_loader_agendados_finalizar_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_agendados_finalizar_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AgendadosFinalizarPage);



/***/ })

}]);
//# sourceMappingURL=agendados-agendados-finalizar-agendados-finalizar-module-es2015.js.map