(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["finalizados-finalizados-module"],{

/***/ "1xSf":
/*!********************************************************************!*\
  !*** ./src/app/profesional/home/finalizados/finalizados.module.ts ***!
  \********************************************************************/
/*! exports provided: FinalizadosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalizadosPageModule", function() { return FinalizadosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _finalizados_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./finalizados-routing.module */ "VdpM");
/* harmony import */ var _finalizados_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./finalizados.page */ "Kk61");







let FinalizadosPageModule = class FinalizadosPageModule {
};
FinalizadosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _finalizados_routing_module__WEBPACK_IMPORTED_MODULE_5__["FinalizadosPageRoutingModule"]
        ],
        declarations: [_finalizados_page__WEBPACK_IMPORTED_MODULE_6__["FinalizadosPage"]]
    })
], FinalizadosPageModule);



/***/ }),

/***/ "Kk61":
/*!******************************************************************!*\
  !*** ./src/app/profesional/home/finalizados/finalizados.page.ts ***!
  \******************************************************************/
/*! exports provided: FinalizadosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalizadosPage", function() { return FinalizadosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_finalizados_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./finalizados.page.html */ "p01f");
/* harmony import */ var _finalizados_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./finalizados.page.scss */ "uQPh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/solicitud.service */ "rLtr");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);










let FinalizadosPage = class FinalizadosPage {
    constructor(router, menuController, us, lc, solServ) {
        this.router = router;
        this.menuController = menuController;
        this.us = us;
        this.lc = lc;
        this.solServ = solServ;
        this.loadedServices = [];
        this.paidServices = [];
        this.parsedHours = null;
    }
    ngOnInit() {
        this.userSub = this.us.loggedUser.subscribe(user => {
            this.grabbedUser = user;
            this.headers = 'Bearer ' + this.grabbedUser.access_token;
            this.loadServices("5");
            //5
            this.loadServices("6");
            //6
        });
    }
    ionViewWillEnter() {
        this.menuController.enable(true, 'profesional');
    }
    loadServices(statusID) {
        this.lc.create({
            message: "Cargando lista de servicios..."
        }).then(loadingEl => {
            loadingEl.present();
            axios__WEBPACK_IMPORTED_MODULE_9___default.a.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["API"] + `/supplier/requestservice/${statusID}`, { headers: { Authorization: this.headers } }).then(resData => {
                loadingEl.dismiss();
                if (statusID === "5") {
                    this.loadedServices = resData.data.data;
                }
                if (statusID === "6") {
                    this.paidServices = resData.data.data;
                }
            }).catch(err => {
                console.log(err);
                loadingEl.dismiss();
            });
        });
    }
    p(hours) {
        let wHours = hours.split("/");
        let sHour = wHours[0].split("T");
        let sHour2 = sHour[1];
        sHour2 = sHour2.substring(0, 5);
        let eHour = wHours[1].split("T");
        let eHour2 = eHour[1];
        eHour2 = eHour2.substring(0, 5);
        return sHour2 + " - " + eHour2;
    }
    openMenu() {
        this.menuController.open();
    }
    finalizadosDetail(serviceID) {
        this.solServ.setServiceID(serviceID);
        this.router.navigate(['/profesional/finalizados/finalizados-details']);
    }
    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
};
FinalizadosPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_6__["SolicitudService"] }
];
FinalizadosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-finalizados',
        template: _raw_loader_finalizados_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_finalizados_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FinalizadosPage);



/***/ }),

/***/ "VdpM":
/*!****************************************************************************!*\
  !*** ./src/app/profesional/home/finalizados/finalizados-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: FinalizadosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalizadosPageRoutingModule", function() { return FinalizadosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _finalizados_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./finalizados.page */ "Kk61");




const routes = [
    {
        path: '',
        component: _finalizados_page__WEBPACK_IMPORTED_MODULE_3__["FinalizadosPage"]
    },
];
let FinalizadosPageRoutingModule = class FinalizadosPageRoutingModule {
};
FinalizadosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FinalizadosPageRoutingModule);



/***/ }),

/***/ "p01f":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profesional/home/finalizados/finalizados.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    \n    <ion-buttons slot=\"start\">\n      <ion-button class=\"homeBtn\" (click)=\"openMenu()\">\n        <ion-icon name=\"menu\" class=\"homeBtn\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title class=\"title-toolbar text-center\">FINALIZADOS</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- title -->\n  <ion-grid fixed>\n    <ion-row class=\"ion-margin-top\">\n      <ion-col size=\"11\" class=\"ion-text-left\">\n        <ion-text class=\"main-color title\" *ngIf=\"loadedServices.length || paidServices.length > 0\">\n          <b>Buenos días <span class=\"ion-text-capitalize\">{{grabbedUser.name}} {{grabbedUser.last_name}}</span>, tienes los siguientes trabajos finalizados.</b>\n        </ion-text>\n        <ion-text class=\"main-color title\" *ngIf=\"loadedServices.length && paidServices.length === 0\">\n          <b>Buenos días <span class=\"ion-text-capitalize\">{{grabbedUser.name}} {{grabbedUser.last_name}}</span>, no tienes trabajos finalizados.</b>\n        </ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- pendiente pago -->\n  <div class=\"prof-cont no-border\" *ngFor=\"let service of loadedServices\" (click)=\"finalizadosDetail(service.id)\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n\n        <!-- title -->\n        <ion-col size=\"7\" class=\"ion-justify-content-center\">\n          <ion-text>\n            <span class=\"titleSelect main-color ion-text-capitalize\">{{ service.clientName+\" \"+service.clientLastName }}</span>\n            <br>\n            <ion-text class=\"mainText\">\n              {{ service.adress }}\n            </ion-text>\n            <br>\n            <ion-text class=\"miniText\" color=\"primary\">{{ service.description }}</ion-text>\n          </ion-text>\n        </ion-col>\n\n        <!-- rating -->\n        <ion-col size=\"5\">\n          <ion-badge color=\"primary\" class=\"badgeText\">{{ service.categoryName }}</ion-badge>\n          <ion-grid class=\"ion-no-padding ion-no-margin\">\n            <ion-row class=\"ion-align-items-center\">\n              <!-- pendiente  -->\n              <!-- <ion-col size=\"3\" *ngIf=\"service.status_id === 5\">\n                <div class=\"locate-cont\">\n                  <ion-icon name=\"card\" color=\"light\" class=\"rating-text\"></ion-icon>\n                </div>\n              </ion-col>\n              <ion-col size=\"9\" *ngIf=\"service.status_id === 5\">\n                <ion-text color=\"danger\" class=\"endText\">\n                  PAGO PENDIENTE\n                </ion-text>\n              </ion-col> -->\n               <!-- pagados  -->\n               <!-- <ion-col size=\"3\" *ngIf=\"service.status_id === 6\">\n                <div class=\"locate-cont-green\">\n                  <ion-icon name=\"card\" color=\"light\" class=\"rating-text\"></ion-icon>\n                </div>\n              </ion-col>\n              <ion-col size=\"9\" *ngIf=\"service.status_id === 6\">\n                <ion-text color=\"success\" class=\"endText\">\n                  PAGO REALIZADO\n                </ion-text>\n              </ion-col> -->\n            </ion-row>\n          </ion-grid>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <!-- pagados -->\n  <div class=\"prof-cont no-border\" *ngFor=\"let service of paidServices\" (click)=\"finalizadosDetail(service.id)\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n\n        <!-- title -->\n        <ion-col size=\"7\" class=\"ion-justify-content-center\">\n          <ion-text>\n            <span class=\"titleSelect main-color ion-text-capitalize\">{{ service.clientName+\" \"+service.clientLastName }}</span>\n            <br>\n            <ion-text class=\"mainText\">\n              {{ service.adress }}\n            </ion-text>\n            <br>\n            <ion-text class=\"miniText ion-text-capitalize\" color=\"primary\">{{ service.description }}</ion-text>\n          </ion-text>\n        </ion-col>\n\n        <!-- rating -->\n        <ion-col size=\"5\">\n          <ion-badge color=\"primary\" class=\"badgeText\">{{ service.categoryName }}</ion-badge>\n          <ion-grid class=\"ion-no-padding ion-no-margin\">\n            <ion-row class=\"ion-align-items-center\">\n              <!-- pendiente  -->\n              <!-- <ion-col size=\"3\" *ngIf=\"service.status_id === 5\">\n                <div class=\"locate-cont\">\n                  <ion-icon name=\"card\" color=\"light\" class=\"rating-text\"></ion-icon>\n                </div>\n              </ion-col>\n              <ion-col size=\"9\" *ngIf=\"service.status_id === 5\">\n                <ion-text color=\"danger\" class=\"endText\">\n                  PAGO PENDIENTE\n                </ion-text>\n              </ion-col> -->\n               <!-- pagados  -->\n               <!-- <ion-col size=\"3\" *ngIf=\"service.status_id === 6\">\n                <div class=\"locate-cont-green\">\n                  <ion-icon name=\"card\" color=\"light\" class=\"rating-text\"></ion-icon>\n                </div>\n              </ion-col>\n              <ion-col size=\"9\" *ngIf=\"service.status_id === 6\">\n                <ion-text color=\"success\" class=\"endText\">\n                  PAGO REALIZADO\n                </ion-text>\n              </ion-col> -->\n            </ion-row>\n          </ion-grid>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "uQPh":
/*!********************************************************************!*\
  !*** ./src/app/profesional/home/finalizados/finalizados.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".prof-cont {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  margin-bottom: 10px;\n}\n\n.titleSelect {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.mainText {\n  font-size: 13px;\n}\n\n.miniText {\n  font-size: 12px;\n}\n\n.title {\n  font-size: 17px;\n}\n\n.miniBtnTxt {\n  font-size: 8px;\n}\n\n.iconSize {\n  font-size: 20px;\n}\n\n.iconS {\n  font-size: 22px;\n}\n\n.iconFix {\n  margin-bottom: -2px;\n}\n\n.locate-cont {\n  border-radius: 50px;\n  height: 25px;\n  width: 25px;\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: red;\n}\n\n.locate-cont-green {\n  border-radius: 50px;\n  height: 25px;\n  width: 25px;\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #2dd36f;\n}\n\n.rating-text {\n  font-size: 14px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.endText {\n  font-size: 13px;\n}\n\n.badgeText {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2ZpbmFsaXphZG9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHdFQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFFQTtFQUVJLGVBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUVBO0VBRUksZUFBQTtBQUFKOztBQUVBO0VBRUksZUFBQTtBQUFKOztBQUVBO0VBRUksZUFBQTtBQUFKOztBQUVBO0VBRUksY0FBQTtBQUFKOztBQUVBO0VBRUksZUFBQTtBQUFKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUNBO0VBRUksbUJBQUE7QUFDSjs7QUFDQTtFQUVJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFDQTtFQUVJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFDQTtFQUVBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0E7O0FBQ0E7RUFFSSxlQUFBO0FBQ0o7O0FBQ0E7RUFFSSxlQUFBO0FBQ0oiLCJmaWxlIjoiZmluYWxpemFkb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2YtY29udFxue1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnRpdGxlU2VsZWN0XG57XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1haW5UZXh0XG57XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuLm1pbmlUZXh0XG57XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLnRpdGxlXG57XG4gICAgZm9udC1zaXplOiAxN3B4O1xufVxuLm1pbmlCdG5UeHRcbntcbiAgICBmb250LXNpemU6IDhweDtcbn1cbi5pY29uU2l6ZVxue1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5pY29uU3tcbiAgICBmb250LXNpemU6IDIycHg7XG59XG4uaWNvbkZpeFxue1xuICAgIG1hcmdpbi1ib3R0b206IC0ycHg7XG59XG4ubG9jYXRlLWNvbnRcbntcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogMjVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuLmxvY2F0ZS1jb250LWdyZWVuXG57XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZGQzNmY7XG59XG4ucmF0aW5nLXRleHRcbntcbmZvbnQtc2l6ZTogMTRweDtcbm1hcmdpbi1sZWZ0OiBhdXRvO1xubWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLmVuZFRleHRcbntcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG4uYmFkZ2VUZXh0XG57XG4gICAgZm9udC1zaXplOiAxNnB4O1xufSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=finalizados-finalizados-module-es2015.js.map