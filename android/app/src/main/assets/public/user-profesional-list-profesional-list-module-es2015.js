(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-profesional-list-profesional-list-module"],{

/***/ "Gfxr":
/*!******************************************************************!*\
  !*** ./src/app/user/profesional-list/profesional-list.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-10 {\n  font-size: 10px;\n}\n\n.fStart {\n  margin-left: 10px;\n}\n\n.cusSelect {\n  border: 0px;\n  outline: 0px;\n  font-size: 10px;\n  background-color: none;\n  width: 100%;\n  border: solid 2px #009ace;\n  border-radius: 10px;\n  padding: 5px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  /* Firefox */\n  -webkit-appearance: none;\n  /* Safari and Chrome */\n  appearance: none;\n  background-image: url(\"data:image/svg+xml;utf8,<svg fill='#009ace' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>\");\n  background-repeat: no-repeat;\n  background-position-x: 98%;\n  background-position-y: 50%;\n}\n\n.filt-icon {\n  font-size: 11px;\n}\n\n.profileImg {\n  margin-left: 10px;\n  height: 45px;\n  width: 45px;\n}\n\n.prof-cont {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n\n.no-border {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n\n.eSelect {\n  color: red;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.titleSelect {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.textSelect {\n  font-size: 10px;\n  line-height: 0.5;\n}\n\n.badge-text {\n  font-size: 9px;\n}\n\n.ratingText {\n  font-size: 14px;\n  margin: 0;\n  padding: 0;\n}\n\n.locate-cont {\n  border-radius: 50px;\n  height: 30px;\n  width: auto;\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  margin: 0 1px;\n}\n\n.rating-text {\n  font-size: 24px;\n  margin: 0;\n}\n\n.reset-text {\n  display: -webkit-flex;\n}\n\n.floatin-btn {\n  --ion-color-base: transparent !important;\n  --ion-color-tint: transparent !important;\n  --box-shadow: none;\n}\n\n.floatin-btn ion-fab-button {\n  --box-shadow: none;\n}\n\n.fab-icon {\n  width: 3em;\n  height: 3em;\n  --box-shadow: none;\n}\n\n.items-center {\n  align-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2Zlc2lvbmFsLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGOztBQUNBO0VBQ0UsaUJBQUE7QUFFRjs7QUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUF1QixZQUFBO0VBQ3ZCLHdCQUFBO0VBQTBCLHNCQUFBO0VBQzFCLGdCQUFBO0VBQ0Esd05BQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7QUFLRjs7QUFIQTtFQUNFLGVBQUE7QUFNRjs7QUFKQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFPRjs7QUFMQTtFQUNFLHdFQUFBO0FBUUY7O0FBTkE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBU0Y7O0FBUEE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBVUY7O0FBUEE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFVRjs7QUFSQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQVdGOztBQVRBO0VBQ0UsY0FBQTtBQVlGOztBQVZBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBYUY7O0FBWEE7RUFFRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQWFGOztBQVZBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7QUFhRjs7QUFWQTtFQUNFLHFCQUFBO0FBYUY7O0FBWEE7RUFDRSx3Q0FBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7QUFjRjs7QUFaRTtFQUNFLGtCQUFBO0FBY0o7O0FBWEE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBY0Y7O0FBWkE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0FBZUYiLCJmaWxlIjoicHJvZmVzaW9uYWwtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC0xMCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5mU3RhcnQge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5jdXNTZWxlY3Qge1xuICBib3JkZXI6IDBweDtcbiAgb3V0bGluZTogMHB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IHNvbGlkIDJweCAjMDA5YWNlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lOyAvKiBGaXJlZm94ICovXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyBmaWxsPScjMDA5YWNlJyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMjQgMjQnIHdpZHRoPScyNCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBkPSdNNyAxMGw1IDUgNS01eicvPjxwYXRoIGQ9J00wIDBoMjR2MjRIMHonIGZpbGw9J25vbmUnLz48L3N2Zz5cIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogOTglO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDUwJTtcbn1cbi5maWx0LWljb24ge1xuICBmb250LXNpemU6IDExcHg7XG59XG4ucHJvZmlsZUltZyB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHdpZHRoOiA0NXB4O1xufVxuLnByb2YtY29udCB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbn1cbi5uby1ib3JkZXIge1xuICBwYWRkaW5nLXRvcDogMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xufVxuLmVTZWxlY3Qge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGl0bGVTZWxlY3Qge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnRleHRTZWxlY3Qge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAwLjU7XG59XG4uYmFkZ2UtdGV4dCB7XG4gIGZvbnQtc2l6ZTogOXB4O1xufVxuLnJhdGluZ1RleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5sb2NhdGUtY29udCB7XG4gIC8vbWFyZ2luLXRvcDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIDFweDtcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjMDA5YWNlO1xufVxuLnJhdGluZy10ZXh0IHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5yZXNldC10ZXh0IHtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xufVxuLmZsb2F0aW4tYnRuIHtcbiAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuXG4gIGlvbi1mYWItYnV0dG9uIHtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbn1cbi5mYWItaWNvbiB7XG4gIHdpZHRoOiAzZW07XG4gIGhlaWdodDogM2VtO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG4uaXRlbXMtY2VudGVyIHtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuIl19 */");

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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/solicitud.service */ "rLtr");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_shared_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/shared/constants */ "p1Kg");












let ProfesionalListPage = class ProfesionalListPage {
    constructor(router, menuController, solServ, http, us, lc) {
        this.router = router;
        this.menuController = menuController;
        this.solServ = solServ;
        this.http = http;
        this.us = us;
        this.lc = lc;
        this.imageBlank = src_shared_constants__WEBPACK_IMPORTED_MODULE_11__["IMAGE_URL_BLANK"];
        this.profList = [];
        this.sort = null;
        this.type = null;
        this.endpoints = {
            'stars': `${src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["API"]}/supplier/evaluation/filterstar`,
            'jobs': `${src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["API"]}/supplier/evaluation/filter`
        };
    }
    ngOnInit() {
        this.userSub = this.us.loggedUser.subscribe(user => {
            this.grabbedUser = user;
        });
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        this.headers = this.headers.set('Authorization', 'Bearer ' + this.grabbedUser.access_token);
        this.getProfessionalList();
    }
    getProfessionalList() {
        // Grab prof list 
        this.lc.create({
            message: "Generando lista de profesionales..."
        }).then(loadingEl => {
            loadingEl.present();
            this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["API"] + `/client/professions/${this.solServ.solicitud.comuna_id}/${this.solServ.solicitud.category_id}`, { headers: this.headers }).subscribe(resData => {
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
        this.filterList();
    }
    onTypeChange(event) {
        this.type = event.target.value;
    }
    resetFilters() {
        this.sort = null;
        this.type = null;
        this.getProfessionalList();
    }
    eRequest() {
        this.router.navigate(['/user/urgen-service']);
    }
    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
    filterList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let loader = yield this.lc.create({ message: 'Obteniendo lista de profesionales...' });
            loader.present();
            try {
                const { category_id } = this.solServ.solicitud;
                let response = yield axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(`${this.endpoints[this.sort]}/${category_id}`, {
                    headers: {
                        Authorization: `Bearer ${this.grabbedUser.access_token}`
                    }
                });
                if (response.data && response.data.status !== 200) {
                    // TODO: Set error logic
                }
                this.profList = response.data.data;
            }
            catch (error) {
                // TODO: Set error logic
            }
            finally {
                yield loader.dismiss();
            }
        });
    }
};
ProfesionalListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"] },
    { type: src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_8__["SolicitudService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/user/home\" text=\"\" icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title class=\"title-toolbar\">ELIGE AL PROFESIONAL</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- filter bar -->\n  <ion-row class=\"ion-margin-top ion-align-items-center\">\n    <ion-col size=\"2\">\n      <ion-text class=\"text-10 main-color\">\n        <ion-icon src=\"/assets/icon/ic_filter.svg\"></ion-icon>\n        FILTROS\n      </ion-text>\n    </ion-col>\n    <ion-col size=\"7\">\n      <select class=\"main-color cusSelect\" name=\"sort\" [(ngModel)]=\"sort\" placeholder=\"Reconocimiento\"\n        (change)=\"onSortChange($event)\" style=\"background-color:white;\">\n        <option value=\"null\" disabled>Seleccionar</option>\n        <option value=\"stars\">Por género</option>\n        <option value=\"stars\">Por estrella</option>\n        <option value=\"jobs\">Por trabajos</option>\n      </select>\n    </ion-col>\n    <!--\n    <ion-col size=\"3\">\n      <select class=\"main-color cusSelect\" name=\"type\" [(ngModel)]=\"type\" placeholder=\"Reconocimiento\"\n        (change)=\"onTypeChange($event)\" style=\"background-color:white;\">\n        <option value=\"null\" disabled>Seleccionar</option>\n        <option value=\"experiancia\">Experiencia</option>\n        <option value=\"puntualidad\">Puntualidad</option>\n      </select>\n    </ion-col>\n    -->\n    <ion-col size=\"3\">\n      <ion-text class=\"text-10 main-color reset-text\" (click)=\"resetFilters()\">\n        <ion-icon src=\"/assets/icon/ic_path.svg\" class=\"filt-icon\"></ion-icon>\n        {{' '}}\n        REESTABLECER\n      </ion-text>\n    </ion-col>\n  </ion-row>\n\n  <!-- emergency message -->\n  <div class=\"prof-cont ion-margin-top no-border\" (click)=\"eRequest()\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"2\" sizeMd=\"1\">\n          <ion-avatar class=\"profileImg\">\n            <img src=\"/assets/icon/ic_error.svg\" />\n          </ion-avatar>\n        </ion-col>\n        <ion-col size=\"10\" sizeMd=\"11\">\n          <ion-text>\n            <span class=\"eSelect\">Necesito el servicio urgente</span><br>\n            <span class=\"textSelect\">Esta solicitud es de carácter urgente y será enviada a los 10 profesionales mejor\n              catalogados para que puedan atender tu solicitud lo antes posible.</span>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <!-- profesional card item -->\n  <ion-text color=\"primary\" *ngIf=\"profList.length == 0\">\n    <h3 class=\"text-center\">No se encontraron<br />profesionales en el área</h3>\n  </ion-text>\n  <div *ngFor=\"let prof of profList\" class=\"prof-cont ion-margin-top no-border\"\n    (click)=\"profDetails(prof.id, prof.img_profile)\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n\n        <!-- profile img -->\n        <ion-col size=\"2\" sizeMd=\"1\">\n          <ion-avatar class=\"profileImg\">\n            <ion-img\n              src=\"{{ !prof.img_profile || prof.img_profile === imageBlank ? 'assets/images/avatar.png' : prof.img_profile }}\">\n            </ion-img>\n          </ion-avatar>\n        </ion-col>\n\n        <!-- title -->\n        <ion-col size=\"5\" sizeMd=\"6\">\n          <ion-text>\n            <span class=\"titleSelect main-color ion-text-capitalize\">{{ prof.supplierName }} {{ prof.supplierLastName\n              }}</span><br>\n            <ion-badge color=\"primary\" class=\"badge-text\">{{ prof.categoryName }}</ion-badge><br>\n            <span class=\"textSelect ion-text-capitalize\">{{ prof.descProf }}</span>\n          </ion-text>\n        </ion-col>\n\n        <!-- rating -->\n        <ion-col size=\"5\">\n          <ion-text class=\"text-center\">\n            <ion-row class=\"items-center\">\n              <ion-col size=\"12\">\n                <p class=\"ratingText main-color ion-text-center\">\n                  4.83\n                  <ion-icon src=\"/assets/icon/ic_star.svg\"></ion-icon>\n                  / 50\n                  <ion-icon src=\"/assets/icon/ic_hands.svg\"></ion-icon>\n                </p>\n              </ion-col>\n              <ion-col size=\"12\">\n                <div class=\"locate-cont\">\n                  <ion-icon src=\"/assets/icon/ic_engine_circle.svg\" class=\"rating-text\"></ion-icon>\n                </div>\n                <div class=\"locate-cont\">\n                  <ion-icon src=\"/assets/icon/ic_time_circle.svg\" class=\"rating-text\"></ion-icon>\n                </div>\n                <div class=\"locate-cont\">\n                  <ion-icon src=\"/assets/icon/ic_heart_circle.svg\" class=\"rating-text\"></ion-icon>\n                </div>\n                <div class=\"locate-cont\">\n                  <ion-icon src=\"/assets/icon/ic_diamont_circle.svg\" class=\"rating-text\"></ion-icon>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-text>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <!-- floating btn -->\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n    <ion-fab-button color=\"none\" class=\"floatin-btn\" closeIcon=\"/assets/icon/ic_close_circle.svg\">\n      <ion-icon md=\"caret-up\" size=\"large\" src=\"/assets/icon/ic_filter_plus.svg\" class=\"fab-icon\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-fab-button class=\"floatin-btn\" color=\"none\">\n        <ion-icon size=\"large\" src=\"/assets/icon/ic_people_circle.svg\" class=\"floatin-btn fab-icon\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button class=\"floatin-btn\" color=\"none\">\n        <ion-icon size=\"large\" src=\"/assets/icon/ic_map_circle.svg\" class=\"floatin-btn fab-icon\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=user-profesional-list-profesional-list-module-es2015.js.map