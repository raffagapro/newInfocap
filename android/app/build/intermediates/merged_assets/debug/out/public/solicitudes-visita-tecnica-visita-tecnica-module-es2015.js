(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["solicitudes-visita-tecnica-visita-tecnica-module"],{

/***/ "4h2W":
/*!**************************************************************************************!*\
  !*** ./src/app/profesional/home/solicitudes/visita-tecnica/visita-tecnica.page.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".no-border {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n\n.profileImg {\n  margin-left: 10px;\n  height: 75px;\n  width: 75px;\n}\n\n.titleSelect {\n  font-size: 19px;\n  font-weight: bold;\n}\n\n.title {\n  font-size: 20px;\n}\n\n.titleText {\n  font-size: 16px;\n}\n\n.imgSlide {\n  height: 125px;\n}\n\n.subtitle {\n  font-size: 18px;\n}\n\n.subText {\n  font-size: 14px;\n}\n\n.minusMargin {\n  margin-top: -25px;\n}\n\n.iconFix {\n  margin-bottom: -3px;\n}\n\n.mini-text {\n  font-size: 14px;\n}\n\n.ticket {\n  color: red;\n  font-size: 12px;\n}\n\n.locate-cont {\n  border-radius: 50px;\n  height: 45px;\n  width: 45px;\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: 5px;\n  background-color: #009ACE;\n}\n\n.bg-green-color {\n  background-color: #2dd36f;\n}\n\n.rating-text {\n  font-size: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  display: inline-flex;\n}\n\n.border {\n  border: 1px solid #009ACE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Zpc2l0YS10ZWNuaWNhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGdCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFFQTtFQUVJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFBSjs7QUFFQTtFQUVJLGVBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtBQUVKOztBQUFBO0VBQ0ksYUFBQTtBQUdKOztBQURBO0VBQ0ksZUFBQTtBQUlKOztBQUZBO0VBQ0ksZUFBQTtBQUtKOztBQUhBO0VBQ0ksaUJBQUE7QUFNSjs7QUFKQTtFQUNJLG1CQUFBO0FBT0o7O0FBTEE7RUFFSSxlQUFBO0FBT0o7O0FBTEE7RUFFSSxVQUFBO0VBQ0EsZUFBQTtBQU9KOztBQUxBO0VBRUksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQU9KOztBQUxBO0VBRUkseUJBQUE7QUFPSjs7QUFMQTtFQUVJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFPSjs7QUFMQTtFQUVJLHlCQUFBO0FBT0oiLCJmaWxlIjoidmlzaXRhLXRlY25pY2EucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vLWJvcmRlclxue1xuICAgIHBhZGRpbmctdG9wOiAycHg7XG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcbn1cbi5wcm9maWxlSW1nXG57XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIHdpZHRoOiA3NXB4O1xufVxuLnRpdGxlU2VsZWN0XG57XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnRpdGxle1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuLnRpdGxlVGV4dHtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG4uaW1nU2xpZGV7XG4gICAgaGVpZ2h0OjEyNXB4O1xufVxuLnN1YnRpdGxle1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cbi5zdWJUZXh0e1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5taW51c01hcmdpbntcbiAgICBtYXJnaW4tdG9wOiAtMjVweDtcbn1cbi5pY29uRml4e1xuICAgIG1hcmdpbi1ib3R0b206IC0zcHg7XG59XG4ubWluaS10ZXh0XG57XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLnRpY2tldFxue1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLmxvY2F0ZS1jb250XG57XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgd2lkdGg6IDQ1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOUFDRTtcbn1cbi5iZy1ncmVlbi1jb2xvclxue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZGQzNmY7XG59XG4ucmF0aW5nLXRleHRcbntcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuLmJvcmRlclxue1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDlBQ0U7XG59Il19 */");

/***/ }),

/***/ "88gZ":
/*!**********************************************************************************************!*\
  !*** ./src/app/profesional/home/solicitudes/visita-tecnica/visita-tecnica-routing.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: VisitaTecnicaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitaTecnicaPageRoutingModule", function() { return VisitaTecnicaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _visita_tecnica_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./visita-tecnica.page */ "8gkx");




const routes = [
    {
        path: '',
        component: _visita_tecnica_page__WEBPACK_IMPORTED_MODULE_3__["VisitaTecnicaPage"]
    }
];
let VisitaTecnicaPageRoutingModule = class VisitaTecnicaPageRoutingModule {
};
VisitaTecnicaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VisitaTecnicaPageRoutingModule);



/***/ }),

/***/ "8gkx":
/*!************************************************************************************!*\
  !*** ./src/app/profesional/home/solicitudes/visita-tecnica/visita-tecnica.page.ts ***!
  \************************************************************************************/
/*! exports provided: VisitaTecnicaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitaTecnicaPage", function() { return VisitaTecnicaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_visita_tecnica_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./visita-tecnica.page.html */ "k11x");
/* harmony import */ var _visita_tecnica_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visita-tecnica.page.scss */ "4h2W");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _confirm_visita_confirm_visita_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirm-visita/confirm-visita.component */ "wFEM");







let VisitaTecnicaPage = class VisitaTecnicaPage {
    constructor(modalController, router, menuController) {
        this.modalController = modalController;
        this.router = router;
        this.menuController = menuController;
        this.slideOptions = {
            initialSlide: 0,
            slidesPerView: 2,
            autoplay: true
        };
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.menuController.enable(true, 'user');
    }
    openMenu() {
        this.menuController.open();
    }
    confirmRequest() {
        this.modalController.create({
            component: _confirm_visita_confirm_visita_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmVisitaComponent"],
            cssClass: 'modalSE',
        }).then(modalEl => {
            modalEl.present();
        });
    }
};
VisitaTecnicaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] }
];
VisitaTecnicaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-visita-tecnica',
        template: _raw_loader_visita_tecnica_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_visita_tecnica_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VisitaTecnicaPage);



/***/ }),

/***/ "B1EP":
/*!**************************************************************************************!*\
  !*** ./src/app/profesional/home/solicitudes/visita-tecnica/visita-tecnica.module.ts ***!
  \**************************************************************************************/
/*! exports provided: VisitaTecnicaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitaTecnicaPageModule", function() { return VisitaTecnicaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _visita_tecnica_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./visita-tecnica-routing.module */ "88gZ");
/* harmony import */ var _visita_tecnica_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visita-tecnica.page */ "8gkx");







let VisitaTecnicaPageModule = class VisitaTecnicaPageModule {
};
VisitaTecnicaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _visita_tecnica_routing_module__WEBPACK_IMPORTED_MODULE_5__["VisitaTecnicaPageRoutingModule"]
        ],
        declarations: [_visita_tecnica_page__WEBPACK_IMPORTED_MODULE_6__["VisitaTecnicaPage"]]
    })
], VisitaTecnicaPageModule);



/***/ }),

/***/ "k11x":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profesional/home/solicitudes/visita-tecnica/visita-tecnica.page.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/profesional/home/home-tabs/solicitudes/solicitudes-detail\" text=\"\" icon=\"arrow-back\"></ion-back-button>\n      <ion-button class=\"homeBtn\" (click)=\"openMenu()\">\n        <ion-icon name=\"menu\" class=\"homeBtn\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    \n    <ion-title class=\"title-toolbar\">VISITA TÉCNICA</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- profesional card item -->\n  <div class=\"no-border\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n        <!-- profile img -->\n        <ion-col size=\"4\" offset=\"1\">\n          <ion-avatar class=\"profileImg\">\n            <img src=\"/assets/images/avatar.png\"/>\n          </ion-avatar>\n        </ion-col>\n\n        <!-- title -->\n        <ion-col size=\"6\">\n          <ion-text>\n            <small class=\"ticket\">Ticket #100091234</small><br>\n            <span class=\"titleSelect main-color\">Cerrajería para <br> Juan Alcayaga</span><br>\n            <p class=\"main-color mini-text\" style=\"margin-top: 0; margin-bottom: 0;\">18 nov 2020</p>\n          </ion-text>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <ion-grid>\n\n    <!-- title -->\n    <ion-row>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-icon name=\"build\" class=\"main-color\"></ion-icon>\n        <ion-text class=\"main-color title\"><b> Trabajo requerido</b></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-text class=\"titleText\">Cambio de chapas</ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n    <!-- Slider -->\n    <ion-row class=\"minusMargin\">\n      <ion-col size=\"12\">\n        <ion-slides [options]=\"slideOptions\">\n          <!-- slide -->\n          <ion-slide>\n            <img src=\"/assets/images/unavailable-image.png\" class=\"imgSlide\"/>\n          </ion-slide>\n\n          <!-- slide -->\n          <ion-slide>\n            <img src=\"/assets/images/unavailable-image.png\" class=\"imgSlide\"/>\n          </ion-slide>\n\n          <!-- slide -->\n          <ion-slide>\n            <img src=\"/assets/images/unavailable-image.png\" class=\"imgSlide\"/>\n          </ion-slide>\n\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n\n    <!-- Fecha requerida -->\n    <ion-row>\n      <ion-col size=\"11\">\n        <ion-item>\n          <ion-label class=\"main-color\">\n            <ion-icon name=\"calendar\" slot=\"start\" class=\"main-color\"></ion-icon>\n            <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Fecha requerida</ion-text>\n          </ion-label>\n          <ion-datetime placeholder=\"Definir fecha\"></ion-datetime>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <!-- Rango de horas -->\n\n    <!-- pickers -->\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-item>\n          <ion-label class=\"main-color\">\n            <ion-icon name=\"time\" slot=\"start\" class=\"main-color\"></ion-icon>\n            <ion-text class=\"main-color\">Hora inicial</ion-text>\n          </ion-label>\n          <ion-datetime display-format=\"h:mm A\" picker-format=\"h:mm A\"></ion-datetime>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"5\">\n        <ion-item>\n          <ion-label class=\"main-color\">\n            <ion-icon name=\"time\" slot=\"start\" class=\"main-color\"></ion-icon>\n            <ion-text class=\"main-color\">Hora final</ion-text>\n          </ion-label>\n          <ion-datetime display-format=\"h:mm A\" picker-format=\"h:mm A\"></ion-datetime>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <!-- enviar solicitud BTN -->\n    <ion-row class=\"ion-margin-top ion-margin-bottom\">\n      <ion-col size=\"1\"></ion-col>\n      <ion-col>\n        <ion-button size=\"5\" expand=\"block\" class=\"ion-text-uppercase\" (click)=\"confirmRequest()\">\n          NOTIFICAR AL CLIENTE\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=solicitudes-visita-tecnica-visita-tecnica-module-es2015.js.map