(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agendados-agendados-module"],{

/***/ "JRYn":
/*!**************************************************************!*\
  !*** ./src/app/profesional/home/agendados/agendados.page.ts ***!
  \**************************************************************/
/*! exports provided: AgendadosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendadosPage", function() { return AgendadosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_agendados_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./agendados.page.html */ "xDb7");
/* harmony import */ var _agendados_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./agendados.page.scss */ "KG52");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/solicitud.service */ "rLtr");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);











let AgendadosPage = class AgendadosPage {
    constructor(router, menuController, http, us, lc, solServ) {
        this.router = router;
        this.menuController = menuController;
        this.http = http;
        this.us = us;
        this.lc = lc;
        this.solServ = solServ;
        this.loadedServices = [];
        this.loadedStartedServices = [];
        this.loadedVisits = [];
        this.parsedHours = null;
    }
    ngOnInit() {
        this.userSub = this.us.loggedUser.subscribe(user => {
            this.grabbedUser = user;
            this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Authorization', 'Bearer ' + this.grabbedUser.access_token);
            this.loadServices("3");
            this.loadServices("4");
        });
    }
    formatDate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_10__(date, 'YYYY-MM-DD').format('DD MMM YYYY');
    }
    ionViewWillEnter() {
        this.menuController.enable(true, 'profesional');
    }
    loadServices(statusID) {
        this.lc.create({
            message: "Cargando lista de servicios..."
        }).then(loadingEl => {
            loadingEl.present();
            this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["API"] + `/supplier/requestservice/${statusID}`, { headers: this.headers })
                .subscribe(resData => {
                loadingEl.dismiss();
                if (statusID === "3") {
                    this.loadedServices = resData["data"];
                }
                if (statusID === "4") {
                    this.loadedStartedServices = resData["data"];
                }
                // if (statusID === "2") {
                //   this.loadedVisits = resData["data"];
                // }
            }, err => {
                console.log(err);
                loadingEl.dismiss();
            });
        });
    }
    formatTime(hours) {
        if (hours) {
            let wHours = hours.split("/");
            let startHour = moment__WEBPACK_IMPORTED_MODULE_10__(wHours[0]).format('h:mm A');
            let endHour = moment__WEBPACK_IMPORTED_MODULE_10__(wHours[1]).format('h:mm A');
            return `${startHour} - ${endHour}`;
        }
    }
    openMaps(address) {
        window.open(`https://maps.google.com/?q=${address}`);
    }
    openMenu() {
        this.menuController.open();
    }
    solicitudDetail(serviceID) {
        this.solServ.setServiceID(serviceID);
        this.router.navigate(['profesional/agendados/agendados-detail']);
    }
    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
};
AgendadosPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_7__["SolicitudService"] }
];
AgendadosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-agendados',
        template: _raw_loader_agendados_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_agendados_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AgendadosPage);



/***/ }),

/***/ "KG52":
/*!****************************************************************!*\
  !*** ./src/app/profesional/home/agendados/agendados.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".prof-cont {\n  box-shadow: 1px 8px 12px 0px rgba(0, 0, 0, 0.2);\n  margin-bottom: 10px;\n}\n\n.titleSelect {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.badge-text {\n  font-size: 10px;\n  margin-bottom: -2px;\n}\n\n.ticket {\n  color: red;\n  font-size: 11px;\n}\n\n.title {\n  font-size: 17px;\n}\n\n.superMarginTop {\n  margin-top: 60px;\n}\n\n.tapText {\n  font-size: 10px;\n}\n\n.iconFix {\n  margin-bottom: -2px;\n}\n\n.miniBtnTxt {\n  font-size: 9px;\n}\n\n.locate-cont {\n  margin-top: 5px;\n  border-radius: 50px;\n  height: 30px;\n  width: 30px;\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #009ace;\n}\n\n.rating-text {\n  font-size: 12px;\n  margin-left: auto;\n  margin-right: auto;\n  display: inline-flex;\n}\n\n.ratingText {\n  font-size: 12px;\n  margin: 0;\n  padding: 0;\n}\n\n.location_button {\n  margin: 5px 0;\n  padding: 2px 5px;\n  border: solid 2px #009ace;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FnZW5kYWRvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQ0FBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQUdKOztBQURBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7QUFJSjs7QUFGQTtFQUNJLGVBQUE7QUFLSjs7QUFIQTtFQUNJLGdCQUFBO0FBTUo7O0FBSkE7RUFDSSxlQUFBO0FBT0o7O0FBTEE7RUFDSSxtQkFBQTtBQVFKOztBQU5BO0VBQ0ksY0FBQTtBQVNKOztBQVBBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFVSjs7QUFSQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFXSjs7QUFUQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQVlKOztBQVZBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQWFKIiwiZmlsZSI6ImFnZW5kYWRvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZi1jb250IHtcbiAgICBib3gtc2hhZG93OiAxcHggOHB4IDEycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnRpdGxlU2VsZWN0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uYmFkZ2UtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IC0ycHg7XG59XG4udGlja2V0IHtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbn1cbi50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxN3B4O1xufVxuLnN1cGVyTWFyZ2luVG9wIHtcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xufVxuLnRhcFRleHQge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5pY29uRml4IHtcbiAgICBtYXJnaW4tYm90dG9tOiAtMnB4O1xufVxuLm1pbmlCdG5UeHQge1xuICAgIGZvbnQtc2l6ZTogOXB4O1xufVxuLmxvY2F0ZS1jb250IHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDlhY2U7XG59XG4ucmF0aW5nLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG4ucmF0aW5nVGV4dCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuLmxvY2F0aW9uX2J1dHRvbiB7XG4gICAgbWFyZ2luOiA1cHggMDtcbiAgICBwYWRkaW5nOiAycHggNXB4O1xuICAgIGJvcmRlcjogc29saWQgMnB4ICMwMDlhY2U7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "Wl7L":
/*!************************************************************************!*\
  !*** ./src/app/profesional/home/agendados/agendados-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: AgendadosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendadosPageRoutingModule", function() { return AgendadosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _agendados_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agendados.page */ "JRYn");




const routes = [
    {
        path: '',
        component: _agendados_page__WEBPACK_IMPORTED_MODULE_3__["AgendadosPage"]
    },
];
let AgendadosPageRoutingModule = class AgendadosPageRoutingModule {
};
AgendadosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AgendadosPageRoutingModule);



/***/ }),

/***/ "hPVO":
/*!****************************************************************!*\
  !*** ./src/app/profesional/home/agendados/agendados.module.ts ***!
  \****************************************************************/
/*! exports provided: AgendadosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendadosPageModule", function() { return AgendadosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _agendados_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./agendados-routing.module */ "Wl7L");
/* harmony import */ var _agendados_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./agendados.page */ "JRYn");







let AgendadosPageModule = class AgendadosPageModule {
};
AgendadosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _agendados_routing_module__WEBPACK_IMPORTED_MODULE_5__["AgendadosPageRoutingModule"]
        ],
        declarations: [_agendados_page__WEBPACK_IMPORTED_MODULE_6__["AgendadosPage"]]
    })
], AgendadosPageModule);



/***/ }),

/***/ "xDb7":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profesional/home/agendados/agendados.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n\n    <ion-buttons slot=\"start\">\n      <ion-button class=\"homeBtn\" (click)=\"openMenu()\">\n        <ion-icon name=\"menu\" class=\"homeBtn\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title class=\"title-toolbar\">AGENDADOS</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- title -->\n  <ion-grid fixed>\n    <ion-row class=\"ion-margin-top\">\n      <ion-col size=\"11\" class=\"ion-text-left\">\n        <ion-text class=\"main-color title\" *ngIf=\"loadedServices.length > 0\">\n          <b>Buenos días <span class=\"ion-text-capitalize\">{{grabbedUser.name}} {{grabbedUser.last_name}}</span>, tienes\n            los siguientes trabajos en tu agenda.</b>\n        </ion-text>\n        <ion-text class=\"main-color title\" *ngIf=\"loadedServices.length === 0\">\n          <b>Buenos días <span class=\"ion-text-capitalize\">{{grabbedUser.name}} {{grabbedUser.last_name}}</span>, no\n            tienes trabajos en tu agenda.</b>\n        </ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- servicios agendados -->\n  <div class=\"prof-cont no-border\" *ngFor=\"let service of loadedServices\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n        <!-- title -->\n        <ion-col size=\"8\" class=\"ion-justify-content-center\" (click)=\"solicitudDetail(service.id)\">\n          <ion-text>\n            <span class=\"titleSelect main-color ion-text-capitalize\">{{service.clientName+\" \"+ service.clientLastName}}\n            </span>&nbsp;&nbsp;\n            <ion-badge color=\"primary\" class=\"badge-text\">{{ service.categoryName }}</ion-badge>\n            <br>\n            <small>\n              <ion-icon src=\"/assets/icon/ic_date_range.svg\" color=\"primary\" class=\"iconFix\"></ion-icon>\n              {{formatDate(service.date_required)}}\n              <ion-icon src=\"/assets/icon/ic_schedule.svg\" color=\"primary\" class=\"iconFix\"></ion-icon>\n              {{ formatTime(service.hours) }}\n            </small>\n          </ion-text>\n        </ion-col>\n\n        <!-- ticket numer -->\n        <ion-col size=\"4\" class=\"text-center\">\n\n          <!-- enviada -->\n          <ion-text>\n            <!-- icons -->\n            <small class=\"ticket ion-text-center\">Ticket #{{ service.ticket_number }}</small>\n            <small class=\"ratingText main-color ion-text-center\">\n              <div class=\"location_button\" (click)=\"openMaps(service.adress)\">\n                <ion-icon src=\"/assets/icon/ic_map.svg\" color=\"primary\" class=\"iconFix\"></ion-icon>&nbsp;VER MAPA\n              </div>\n            </small>\n            <!--\n            <small class=\"ratingText main-color ion-text-center\" *ngIf=\"service.status_id === 3\">\n              SERVICIO AGENDADO\n            </small>\n            <small class=\"ratingText main-color ion-text-center\" *ngIf=\"service.status_id === 4\">\n              SERVICIO EN PROCESO\n            </small>\n          -->\n          </ion-text>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <!-- servicios Iniciados -->\n  <div class=\"prof-cont no-border\" *ngFor=\"let service of loadedStartedServices\" (click)=\"solicitudDetail(service.id)\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n\n        <!-- title -->\n        <ion-col size=\"8\" class=\"ion-justify-content-center\">\n          <ion-text>\n            <span class=\"titleSelect main-color ion-text-capitalize\">{{service.clientName+\" \"+ service.clientLastName}}\n            </span>&nbsp;&nbsp;\n            <ion-badge color=\"primary\" class=\"badge-text\">{{ service.categoryName }}</ion-badge>\n            <br>\n            <small>\n              <ion-icon name=\"calendar\" color=\"primary\" class=\"iconFix\"></ion-icon>\n              {{service.date_required}}\n              <ion-icon name=\"time\" color=\"primary\" class=\"iconFix\"></ion-icon>\n              {{ p(service.hours) }}h\n            </small>\n          </ion-text>\n        </ion-col>\n\n        <!-- ticket numer -->\n        <ion-col size=\"4\">\n\n          <!-- enviada -->\n          <ion-text>\n            <!-- icons -->\n            <small class=\"ticket ion-text-center\">Ticket #{{ service.ticket_number }}</small>\n            <small class=\"ratingText main-color ion-text-center\" *ngIf=\"service.status_id === 3\">\n              SERVICIO AGENDADO\n            </small>\n            <small class=\"ratingText main-color ion-text-center\" *ngIf=\"service.status_id === 4\">\n              SERVICIO EN PROCESO\n            </small>\n          </ion-text>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <!-- title -->\n  <ion-grid *ngIf=\"loadedVisits.length > 0\">\n    <ion-row>\n      <ion-col size=\"11\" class=\"ion-text-left\">\n        <ion-text color=\"danger\" class=\"title\"><b>Tienes las siguientes visitas de evaluación agendadas.</b></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- visitas agendadas -->\n  <div class=\"prof-cont no-border\" *ngFor=\"let service of loadedVisits\" (click)=\"solicitudDetail(service.id)\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n\n        <!-- title -->\n        <ion-col size=\"8\" class=\"ion-justify-content-center\">\n          <ion-text>\n            <span class=\"titleSelect main-color ion-text-capitalize\">{{service.clientName+\" \"+ service.clientLastName}}\n            </span>&nbsp;&nbsp;\n            <ion-badge color=\"primary\" class=\"badge-text\">{{ service.categoryName }}</ion-badge>\n            <br>\n            <small>\n              <ion-icon name=\"calendar\" color=\"primary\" class=\"iconFix\"></ion-icon>\n              {{service.date_required}}\n              <ion-icon name=\"time\" color=\"primary\" class=\"iconFix\"></ion-icon>\n              {{ p(service.hours) }}h\n            </small>\n          </ion-text>\n        </ion-col>\n\n        <!-- rating -->\n        <ion-col size=\"4\">\n          <ion-text>\n            <p class=\"ticketText ion-text-center ion-no-margin\">Ticket #{{service.ticket_number}}</p>\n            <!-- <ion-button expand=\"block\" fill=\"outline\" shape=\"round\" class=\"miniBtnTxt\" (click)=\"map()\">\n              <ion-icon slot=\"start\" name=\"map\"></ion-icon>\n              VER MAPA\n            </ion-button> -->\n\n          </ion-text>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=agendados-agendados-module-es2015.js.map