(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-solicitudes-solicitudes-module"],{

/***/ "8+Dq":
/*!********************************************************!*\
  !*** ./src/app/user/solicitudes/solicitudes.module.ts ***!
  \********************************************************/
/*! exports provided: SolicitudesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudesPageModule", function() { return SolicitudesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _solicitudes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./solicitudes-routing.module */ "GOlj");
/* harmony import */ var _solicitudes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./solicitudes.page */ "HDAO");







let SolicitudesPageModule = class SolicitudesPageModule {
};
SolicitudesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _solicitudes_routing_module__WEBPACK_IMPORTED_MODULE_5__["SolicitudesPageRoutingModule"]
        ],
        declarations: [_solicitudes_page__WEBPACK_IMPORTED_MODULE_6__["SolicitudesPage"]]
    })
], SolicitudesPageModule);



/***/ }),

/***/ "GOlj":
/*!****************************************************************!*\
  !*** ./src/app/user/solicitudes/solicitudes-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: SolicitudesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudesPageRoutingModule", function() { return SolicitudesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _solicitudes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./solicitudes.page */ "HDAO");




const routes = [
    {
        path: '',
        component: _solicitudes_page__WEBPACK_IMPORTED_MODULE_3__["SolicitudesPage"]
    }
];
let SolicitudesPageRoutingModule = class SolicitudesPageRoutingModule {
};
SolicitudesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SolicitudesPageRoutingModule);



/***/ }),

/***/ "HDAO":
/*!******************************************************!*\
  !*** ./src/app/user/solicitudes/solicitudes.page.ts ***!
  \******************************************************/
/*! exports provided: SolicitudesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudesPage", function() { return SolicitudesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_solicitudes_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./solicitudes.page.html */ "pIL1");
/* harmony import */ var _solicitudes_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solicitudes.page.scss */ "TEEc");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/solicitud.service */ "rLtr");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ "AytR");











moment__WEBPACK_IMPORTED_MODULE_7__["locale"]('es');
let SolicitudesPage = class SolicitudesPage {
    constructor(router, menuController, http, us, lc, solServ) {
        this.router = router;
        this.menuController = menuController;
        this.http = http;
        this.us = us;
        this.lc = lc;
        this.solServ = solServ;
    }
    ngOnInit() {
        this.userSub = this.us.loggedUser.subscribe(user => {
            this.grabbedUser = user;
        });
    }
    ionViewWillEnter() {
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Authorization', 'Bearer ' + this.grabbedUser.access_token);
        this.menuController.enable(true, 'user');
        this.loadServices();
    }
    formatdate(date) {
        //moment(new Date(markerOpened.location.registration * 1000)).lang(translator.language).startOf('minute').fromNow()
        //return moment(date, 'DD/MM/YYYY').format('DD MMM YYYY');
        return moment__WEBPACK_IMPORTED_MODULE_7__["utc"](date, 'DD/MM/YYYY HH:mm:ss').startOf('minute').fromNow();
    }
    loadServices() {
        this.lc.create({
            message: "Cargando lista de servicios..."
        }).then(loadingEl => {
            loadingEl.present();
            this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["API"] + '/client/requestservices', { headers: this.headers })
                .subscribe(resData => {
                loadingEl.dismiss();
                this.loadedServices = resData['data'];
                this.loadedServices = this.loadedServices.sort(this.compare);
            }, err => {
                console.log(err);
                loadingEl.dismiss();
            });
        });
    }
    compare(a, b) {
        let firstDate = moment__WEBPACK_IMPORTED_MODULE_7__["utc"](a.created_date, 'DD/MM/YYYY HH:mm:ss').tz(moment__WEBPACK_IMPORTED_MODULE_7__["tz"].guess());
        let secondDate = moment__WEBPACK_IMPORTED_MODULE_7__["utc"](b.created_date, 'DD/MM/YYYY HH:mm:ss').tz(moment__WEBPACK_IMPORTED_MODULE_7__["tz"].guess());
        if (firstDate > secondDate) {
            return -1;
        }
        if (firstDate < secondDate) {
            return 1;
        }
        return 0;
    }
    openMenu() {
        this.menuController.open();
    }
    onSearchChange(e) {
    }
    solicitudDetails(solicitudId, redirectToFinished = false) {
        this.solServ.clearSolicitud();
        this.solServ.setServiceID(solicitudId);
        /*
        if (redirectToFinished) {
          this.router.navigate(['/user/solicitud-finished']);
        } else {
          this.router.navigate(['/user/solicitud-status']);
        }
        */
        this.router.navigate(['/user/solicitud-status']);
    }
    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
};
SolicitudesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_8__["SolicitudService"] }
];
SolicitudesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-solicitudes',
        template: _raw_loader_solicitudes_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_solicitudes_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SolicitudesPage);



/***/ }),

/***/ "TEEc":
/*!********************************************************!*\
  !*** ./src/app/user/solicitudes/solicitudes.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".border {\n  border: 1px solid #009ace;\n  border-radius: 15px;\n  font-size: 12px;\n  height: 35px;\n}\n\n.prof-cont {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n\n.no-border {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n\n.profileImg {\n  margin-left: 10px;\n  height: 75px;\n  width: 75px;\n}\n\n.titleSelect {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.badge-text {\n  font-size: 7px;\n}\n\n.textSelect {\n  font-size: 10px;\n  line-height: 1.4;\n  margin-bottom: 2px;\n}\n\n.ratingText {\n  font-size: 14px;\n  margin: 0;\n  padding: 0;\n}\n\n.locate-cont {\n  margin-top: 5px;\n  border-radius: 50px;\n  height: 30px;\n  width: 30px;\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #009ace;\n}\n\n.rating-text {\n  font-size: 16px;\n  margin-left: auto;\n  margin-right: auto;\n  display: inline-flex;\n}\n\n.ticket {\n  color: red;\n  font-size: 11px;\n}\n\n.green-color {\n  color: #39ae50;\n}\n\n.bg-green-color {\n  background-color: #39ae50;\n}\n\n.grey-color {\n  color: #8e8c89;\n}\n\n.bg-grey-color {\n  background-color: #8e8c89;\n}\n\n.red-color {\n  color: red;\n}\n\n.bg-red-color {\n  background-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvbGljaXR1ZGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUNBO0VBQ0Usd0VBQUE7QUFFRjs7QUFBQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFHRjs7QUFEQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFJRjs7QUFGQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUtGOztBQUhBO0VBQ0UsY0FBQTtBQU1GOztBQUpBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFPRjs7QUFMQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQVFGOztBQU5BO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFTRjs7QUFQQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFVRjs7QUFSQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBV0Y7O0FBVEE7RUFDRSxjQUFBO0FBWUY7O0FBVkE7RUFDRSx5QkFBQTtBQWFGOztBQVZBO0VBQ0UsY0FBQTtBQWFGOztBQVhBO0VBQ0UseUJBQUE7QUFjRjs7QUFYQTtFQUNFLFVBQUE7QUFjRjs7QUFaQTtFQUNFLHFCQUFBO0FBZUYiLCJmaWxlIjoic29saWNpdHVkZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvcmRlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDlhY2U7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuLnByb2YtY29udCB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbn1cbi5uby1ib3JkZXIge1xuICBwYWRkaW5nLXRvcDogMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xufVxuLnByb2ZpbGVJbWcge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgaGVpZ2h0OiA3NXB4O1xuICB3aWR0aDogNzVweDtcbn1cbi50aXRsZVNlbGVjdCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uYmFkZ2UtdGV4dCB7XG4gIGZvbnQtc2l6ZTogN3B4O1xufVxuLnRleHRTZWxlY3Qge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cbi5yYXRpbmdUZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4ubG9jYXRlLWNvbnQge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDlhY2U7XG59XG4ucmF0aW5nLXRleHQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuLnRpY2tldCB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cbi5ncmVlbi1jb2xvciB7XG4gIGNvbG9yOiAjMzlhZTUwO1xufVxuLmJnLWdyZWVuLWNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5YWU1MDtcbn1cblxuLmdyZXktY29sb3Ige1xuICBjb2xvcjogIzhlOGM4OTtcbn1cbi5iZy1ncmV5LWNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhlOGM4OTtcbn1cblxuLnJlZC1jb2xvciB7XG4gIGNvbG9yOiByZWQ7XG59XG4uYmctcmVkLWNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuIl19 */");

/***/ }),

/***/ "pIL1":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/solicitudes/solicitudes.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n\n    <ion-buttons slot=\"start\">\n      <ion-button class=\"homeBtn\" (click)=\"openMenu()\">\n        <ion-icon name=\"menu\" class=\"homeBtn\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title class=\"title-toolbar\">ESTADO DE SOLICITUD</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- filter bar -->\n  <!-- <ion-grid>\n    <ion-row class=\"ion-margin-top\">\n      <ion-col size=\"10\" offset=\"1\">\n        <ion-searchbar\n          placeholder=\"Buscar\"\n          (ionChange)=\"onSearchChange($event)\"\n          >\n        </ion-searchbar>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n\n  <ion-grid class=\"ion-margin-top\" *ngIf=\"!loadedServices || loadedServices.length < 1\">\n    <ion-row class=\"subtitle ion-margin-top\">\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <ion-text class=\"footer-text main-color\"><b>Aún no tienes solicitudes<br />hechas</b></ion-text>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- servicio iterable -->\n  <div class=\"prof-cont ion-margin-top no-border\" *ngFor=\"let service of loadedServices\"\n    (click)=\"solicitudDetails(service.request_id, service.status_id === 6)\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n\n        <!-- title -->\n        <ion-col size=\"9\" sizeMd=\"10\" class=\"ion-justify-content-center\">\n          <ion-text>\n            <span *ngIf=\"service.type_request !== 'URGENT'\" class=\"titleSelect main-color ion-text-capitalize\">{{\n              service.supplierName+\"\n              \"+service.supplierLastName }} </span>\n            <span *ngIf=\"service.type_request === 'URGENT'\" class=\"titleSelect red-color ion-text-capitalize\">\n              Solicitud urgente </span><br>\n            <!-- <ion-badge color=\"medium\" class=\"badge-text\">Soldador</ion-badge>&nbsp; -->\n            <div *ngIf=\"service.type_request !== 'URGENT'\">\n              <ion-badge color=\"medium\" class=\"badge-text\">{{\n                service.categoryName }}</ion-badge>\n              <br>\n            </div>\n            <p class=\"textSelect\">{{ service.description }}</p>\n            <small class=\"main-color\">{{ formatdate(service.created_date) }}</small>\n          </ion-text>\n        </ion-col>\n\n        <!-- rating -->\n        <ion-col size=\"3\" sizeMd=\"2\" class=\"ion-text-center\">\n          <div class=\"ion-text-center\">\n            <small class=\"ticket\">#{{ service.ticket_number }}</small>\n          </div>\n          <!-- itersate thru the btns-->\n\n          <!-- enviada -->\n          <ion-text *ngIf=\"service.status_id === 1\">\n            <!-- icons -->\n            <div class=\"locate-cont\">\n              <ion-icon src=\"/assets/icon/ic_send.svg\" color=\"light\" class=\"rating-text\"></ion-icon>\n            </div><br>\n            <small class=\"ratingText main-color ion-text-center\">\n              SOLICITUD ENVIADA\n            </small>\n          </ion-text>\n\n          <!-- visita  -->\n          <ion-text *ngIf=\"service.status_id === 2\">\n            <!-- icons -->\n            <div class=\"locate-cont bg-main-color\">\n              <ion-icon src=\"/assets/icon/ic_calendar_circle.svg\" color=\"light\" class=\"rating-text\"></ion-icon>\n            </div><br>\n            <small class=\"ratingText main-color ion-text-center\">\n              SOLICITUD VISITA\n            </small>\n          </ion-text>\n\n          <!-- accepted  -->\n          <ion-text *ngIf=\"service.status_id === 3\">\n            <!-- icons -->\n            <div class=\"locate-cont\">\n              <ion-icon name=\"checkmark\" color=\"light\" class=\"rating-text\"></ion-icon>\n            </div><br>\n            <small class=\"ratingText main-color ion-text-center\">\n              SERVICIO ACEPTADO\n            </small>\n          </ion-text>\n\n          <!-- rechazada  -->\n          <ion-text *ngIf=\"service.status_id === 7\">\n            <!-- icons -->\n            <div class=\"locate-cont bg-red-color\">\n              <ion-icon name=\"close\" color=\"light\" class=\"rating-text\"></ion-icon>\n            </div><br>\n            <small class=\"ratingText red-color ion-text-center\">\n              SOLICITUD RECHAZADA\n            </small>\n          </ion-text>\n\n          <!-- en proceso  -->\n          <ion-text *ngIf=\"service.status_id === 4\">\n            <!-- icons -->\n            <div class=\"locate-cont bg-green-color\">\n              <ion-icon src=\"/assets/icon/ic_engine_green.svg\" color=\"light\" class=\"rating-text\"></ion-icon>\n            </div><br>\n            <small class=\"ratingText green-color ion-text-center\">\n              SERVICIO EN PROCESO\n            </small>\n          </ion-text>\n\n          <!-- realizado  -->\n          <ion-text *ngIf=\"service.status_id === 5\">\n            <!-- icons -->\n            <div class=\"locate-cont bg-grey-color\">\n              <ion-icon src=\"/assets/icon/ic_engine_disabled.svg\" color=\"light\" class=\"rating-text\"></ion-icon>\n            </div><br>\n            <small class=\"ratingText grey-color ion-text-center\">\n              SERVICIO REALIZADO\n            </small>\n          </ion-text>\n\n          <!-- finalizado  -->\n          <ion-text *ngIf=\"service.status_id === 6\">\n            <!-- icons -->\n            <div class=\"locate-cont bg-grey-color\">\n              <ion-icon src=\"/assets/icon/ic_engine_disabled.svg\" color=\"light\" class=\"rating-text\"></ion-icon>\n            </div><br>\n            <small class=\"ratingText grey-color ion-text-center\">\n              PAGO FINALIZADO\n            </small>\n          </ion-text>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=user-solicitudes-solicitudes-module-es2015.js.map