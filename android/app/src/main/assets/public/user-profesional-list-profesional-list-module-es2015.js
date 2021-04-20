(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-profesional-list-profesional-list-module"],{

/***/ "Gfxr":
/*!******************************************************************!*\
  !*** ./src/app/user/profesional-list/profesional-list.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-10 {\n  font-size: 10px;\n}\n\n.fStart {\n  margin-left: 10px;\n}\n\n.cusSelect {\n  border: 0px;\n  outline: 0px;\n  font-size: 10px;\n  background-color: none;\n  width: 100%;\n  border: solid 2px #009ace;\n  border-radius: 10px;\n  padding: 5px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  /* Firefox */\n  -webkit-appearance: none;\n  /* Safari and Chrome */\n  appearance: none;\n  background-image: url(\"data:image/svg+xml;utf8,<svg fill='#009ace' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>\");\n  background-repeat: no-repeat;\n  background-position-x: 98%;\n  background-position-y: 50%;\n}\n\n.filt-icon {\n  font-size: 11px;\n}\n\n.profileImg {\n  margin-left: 10px;\n  height: 75px;\n  width: 75px;\n}\n\n.prof-cont {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n\n.no-border {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n\n.eSelect {\n  color: red;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.titleSelect {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.textSelect {\n  font-size: 10px;\n  line-height: 0.5;\n}\n\n.badge-text {\n  font-size: 9px;\n}\n\n.ratingText {\n  font-size: 14px;\n  margin: 0;\n  padding: 0;\n}\n\n.locate-cont {\n  margin-top: 20px;\n  border-radius: 50px;\n  height: 30px;\n  width: 30px;\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.rating-text {\n  font-size: 18px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.reset-text {\n  display: -webkit-flex;\n}\n\n.floatin-btn {\n  --ion-color-base: transparent !important;\n  --ion-color-tint: transparent !important;\n  --box-shadow: none;\n}\n\n.floatin-btn ion-fab-button {\n  --box-shadow: none;\n}\n\n.fab-icon {\n  width: 3em;\n  height: 3em;\n  --box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2Zlc2lvbmFsLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGOztBQUNBO0VBQ0UsaUJBQUE7QUFFRjs7QUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUF1QixZQUFBO0VBQ3ZCLHdCQUFBO0VBQTBCLHNCQUFBO0VBQzFCLGdCQUFBO0VBQ0Esd05BQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7QUFLRjs7QUFIQTtFQUNFLGVBQUE7QUFNRjs7QUFKQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFPRjs7QUFMQTtFQUNFLHdFQUFBO0FBUUY7O0FBTkE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBU0Y7O0FBUEE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBVUY7O0FBUEE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFVRjs7QUFSQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQVdGOztBQVRBO0VBQ0UsY0FBQTtBQVlGOztBQVZBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBYUY7O0FBWEE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBY0Y7O0FBWEE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQWNGOztBQVhBO0VBQ0UscUJBQUE7QUFjRjs7QUFaQTtFQUNFLHdDQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtBQWVGOztBQWJFO0VBQ0Usa0JBQUE7QUFlSjs7QUFaQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFlRiIsImZpbGUiOiJwcm9mZXNpb25hbC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LTEwIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLmZTdGFydCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmN1c1NlbGVjdCB7XG4gIGJvcmRlcjogMHB4O1xuICBvdXRsaW5lOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogc29saWQgMnB4ICMwMDlhY2U7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7IC8qIEZpcmVmb3ggKi9cbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIGZpbGw9JyMwMDlhY2UnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgd2lkdGg9JzI0JyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxwYXRoIGQ9J003IDEwbDUgNSA1LTV6Jy8+PHBhdGggZD0nTTAgMGgyNHYyNEgweicgZmlsbD0nbm9uZScvPjwvc3ZnPlwiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiA5OCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogNTAlO1xufVxuLmZpbHQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cbi5wcm9maWxlSW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGhlaWdodDogNzVweDtcbiAgd2lkdGg6IDc1cHg7XG59XG4ucHJvZi1jb250IHtcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xufVxuLm5vLWJvcmRlciB7XG4gIHBhZGRpbmctdG9wOiAycHg7XG4gIHBhZGRpbmctYm90dG9tOiAycHg7XG59XG4uZVNlbGVjdCB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50aXRsZVNlbGVjdCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4udGV4dFNlbGVjdCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDAuNTtcbn1cbi5iYWRnZS10ZXh0IHtcbiAgZm9udC1zaXplOiA5cHg7XG59XG4ucmF0aW5nVGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLmxvY2F0ZS1jb250IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjMDA5YWNlO1xufVxuLnJhdGluZy10ZXh0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4ucmVzZXQtdGV4dCB7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbn1cbi5mbG9hdGluLWJ0biB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcblxuICBpb24tZmFiLWJ1dHRvbiB7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICB9XG59XG4uZmFiLWljb24ge1xuICB3aWR0aDogM2VtO1xuICBoZWlnaHQ6IDNlbTtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuIl19 */");

/***/ }),

/***/ "PHrt":
/*!******************************************************************!*\
  !*** ./src/app/user/profesional-list/profesional-list.module.ts ***!
  \******************************************************************/
/*! exports provided: ProfesionalListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfesionalListPageModule", function() { return ProfesionalListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _profesional_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profesional-list-routing.module */ "pkWq");
/* harmony import */ var _profesional_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profesional-list.page */ "rYcP");







let ProfesionalListPageModule = class ProfesionalListPageModule {
};
ProfesionalListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profesional_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfesionalListPageRoutingModule"]
        ],
        declarations: [_profesional_list_page__WEBPACK_IMPORTED_MODULE_6__["ProfesionalListPage"]]
    })
], ProfesionalListPageModule);



/***/ }),

/***/ "pkWq":
/*!**************************************************************************!*\
  !*** ./src/app/user/profesional-list/profesional-list-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: ProfesionalListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfesionalListPageRoutingModule", function() { return ProfesionalListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profesional_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profesional-list.page */ "rYcP");




const routes = [
    {
        path: '',
        component: _profesional_list_page__WEBPACK_IMPORTED_MODULE_3__["ProfesionalListPage"]
    }
];
let ProfesionalListPageRoutingModule = class ProfesionalListPageRoutingModule {
};
ProfesionalListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfesionalListPageRoutingModule);



/***/ }),

/***/ "rYcP":
/*!****************************************************************!*\
  !*** ./src/app/user/profesional-list/profesional-list.page.ts ***!
  \****************************************************************/
/*! exports provided: ProfesionalListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfesionalListPage", function() { return ProfesionalListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profesional_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profesional-list.page.html */ "yQkg");
/* harmony import */ var _profesional_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profesional-list.page.scss */ "Gfxr");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/solicitud.service */ "rLtr");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_shared_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/shared/constants */ "p1Kg");











let ProfesionalListPage = class ProfesionalListPage {
    constructor(router, menuController, solServ, http, us, lc) {
        this.router = router;
        this.menuController = menuController;
        this.solServ = solServ;
        this.http = http;
        this.us = us;
        this.lc = lc;
        this.imageBlank = src_shared_constants__WEBPACK_IMPORTED_MODULE_10__["IMAGE_URL_BLANK"];
        this.profList = [];
        this.sort = null;
        this.type = null;
    }
    ngOnInit() {
        this.userSub = this.us.loggedUser.subscribe(user => {
            this.grabbedUser = user;
        });
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        this.headers = this.headers.set('Authorization', 'Bearer ' + this.grabbedUser.access_token);
        // Grab prof list 
        this.lc.create({
            message: "Generando lista de profesionales..."
        }).then(loadingEl => {
            loadingEl.present();
            this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["API"] + `/client/professions/${this.solServ.solicitud.comuna_id}/${this.solServ.solicitud.category_id}`, { headers: this.headers }).subscribe(resData => {
                this.profList = resData['data'];
                loadingEl.dismiss();
            }, e => {
                console.log(e);
                loadingEl.dismiss();
            });
        }).catch(err => {
            this.lc.dismiss();
        });
    }
    ionViewWillEnter() {
        this.menuController.enable(true, 'user');
    }
    openMenu() {
        this.menuController.open();
    }
    profDetails(proPerfilCatId, profilImg) {
        this.solServ.setProPerfil(proPerfilCatId);
        this.solServ.setProPhoto(profilImg);
        this.router.navigate(['/user/profesional-detail']);
    }
    onSortChange(event) {
        this.sort = event.target.value;
    }
    onTypeChange(event) {
        this.type = event.target.value;
    }
    resetFilters() {
        this.sort = null;
        this.type = null;
    }
    eRequest() {
        this.router.navigate(['/user/urgen-service']);
    }
    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
};
ProfesionalListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"] },
    { type: src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_7__["SolicitudService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] }
];
ProfesionalListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-profesional-list',
        template: _raw_loader_profesional_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profesional_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfesionalListPage);



/***/ }),

/***/ "yQkg":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/profesional-list/profesional-list.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/user/home\" text=\"\" icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title class=\"title-toolbar\">ELIGE AL PROFESIONAL</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- filter bar -->\n  <ion-row class=\"ion-margin-top ion-align-items-center\">\n    <ion-col size=\"2\">\n      <ion-text class=\"text-10 main-color\">\n        <ion-icon src=\"/assets/icon/ic_filter.svg\"></ion-icon>\n        FILTROS\n      </ion-text>\n    </ion-col>\n    <ion-col size=\"4\">\n      <select class=\"main-color cusSelect\" name=\"sort\" [(ngModel)]=\"sort\" placeholder=\"Reconocimiento\"\n        (change)=\"onSortChange($event)\" style=\"background-color:white;\">\n        <option value=\"null\" disabled>Seleccionar</option>\n        <option value=\"reconocimiento\">Reconocimiento</option>\n        <option value=\"calidad\">Calidad del servicio</option>\n        <option value=\"puntualidad\">Puntualidad</option>\n      </select>\n    </ion-col>\n    <ion-col size=\"3\">\n      <select class=\"main-color cusSelect\" name=\"type\" [(ngModel)]=\"type\" placeholder=\"Reconocimiento\"\n        (change)=\"onTypeChange($event)\" style=\"background-color:white;\">\n        <option value=\"null\" disabled>Seleccionar</option>\n        <option value=\"experiancia\">Experiencia</option>\n        <option value=\"puntualidad\">Puntualidad</option>\n      </select>\n    </ion-col>\n    <ion-col size=\"3\">\n      <ion-text class=\"text-10 main-color reset-text\" (click)=\"resetFilters()\">\n        <ion-icon src=\"/assets/icon/ic_path.svg\" class=\"filt-icon\"></ion-icon>\n        {{' '}}\n        REESTABLECER\n      </ion-text>\n    </ion-col>\n  </ion-row>\n\n  <!-- emergency message -->\n  <div class=\"prof-cont ion-margin-top no-border\" (click)=\"eRequest()\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"3\">\n          <ion-avatar class=\"profileImg\">\n            <img src=\"/assets/icon/ic_error.svg\" />\n          </ion-avatar>\n        </ion-col>\n        <ion-col size=\"9\">\n          <ion-text>\n            <span class=\"eSelect\">Necesito el servicio urgente</span><br>\n            <span class=\"textSelect\">Esta solicitud es de carácter urgente y será enviada a los 10 profesionales mejor\n              catalogados para que puedan atender tu solicitud lo antes posible.</span>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <!-- profesional card item -->\n  <ion-text color=\"primary\" *ngIf=\"profList.length == 0\">\n    <h3 class=\"text-center\">No se encontraron<br />profesionales en el área</h3>\n  </ion-text>\n  <div *ngFor=\"let prof of profList\" class=\"prof-cont ion-margin-top no-border\"\n    (click)=\"profDetails(prof.id, prof.img_profile)\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n\n        <!-- profile img -->\n        <ion-col size=\"3\">\n          <ion-avatar class=\"profileImg\">\n            <ion-img\n              src=\"{{ !prof.img_profile || prof.img_profile === imageBlank ? 'assets/images/avatar.png' : prof.img_profile }}\">\n            </ion-img>\n          </ion-avatar>\n        </ion-col>\n\n        <!-- title -->\n        <ion-col size=\"5\">\n          <ion-text>\n            <span class=\"titleSelect main-color ion-text-capitalize\">{{ prof.supplierName }} {{ prof.supplierLastName\n              }}</span><br>\n            <ion-badge color=\"primary\" class=\"badge-text\">{{ prof.categoryName }}</ion-badge><br>\n            <span class=\"textSelect ion-text-capitalize\">{{ prof.descProf }}</span>\n          </ion-text>\n        </ion-col>\n\n        <!-- rating -->\n        <ion-col size=\"4\">\n          <ion-text>\n            <p class=\"ratingText main-color ion-text-center\">\n              4.83\n              <ion-icon src=\"/assets/icon/ic_star.svg\"></ion-icon>\n              / 50\n              <ion-icon src=\"/assets/icon/ic_hands.svg\"></ion-icon>\n            </p><br>\n\n            <div class=\"locate-cont\">\n              <ion-icon src=\"/assets/icon/ic_engine_circle.svg\" size=\"large\" class=\"rating-text\"></ion-icon>\n            </div>\n            <div class=\"locate-cont\">\n              <ion-icon src=\"/assets/icon/ic_time_circle.svg\" size=\"large\" class=\"rating-text\"></ion-icon>\n            </div>\n            <div class=\"locate-cont\">\n              <ion-icon src=\"/assets/icon/ic_heart_circle.svg\" size=\"large\" class=\"rating-text\"></ion-icon>\n            </div>\n            <div class=\"locate-cont\">\n              <ion-icon src=\"/assets/icon/ic_diamont_circle.svg\" size=\"large\" class=\"rating-text\"></ion-icon>\n            </div>\n          </ion-text>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <!-- floating btn -->\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n    <ion-fab-button  color=\"none\" class=\"floatin-btn\" closeIcon=\"/assets/icon/ic_close_circle.svg\">\n      <ion-icon md=\"caret-up\" size=\"large\" src=\"/assets/icon/ic_filter_plus.svg\" class=\"fab-icon\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-fab-button class=\"floatin-btn\" color=\"none\">\n        <ion-icon size=\"large\" src=\"/assets/icon/ic_people_circle.svg\" class=\"floatin-btn fab-icon\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button class=\"floatin-btn\" color=\"none\">\n        <ion-icon size=\"large\" src=\"/assets/icon/ic_map_circle.svg\" class=\"floatin-btn fab-icon\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=user-profesional-list-profesional-list-module-es2015.js.map