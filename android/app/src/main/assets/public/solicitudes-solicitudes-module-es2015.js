(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["solicitudes-solicitudes-module"],{

/***/ "++H8":
/*!******************************************************************!*\
  !*** ./src/app/profesional/home/solicitudes/solicitudes.page.ts ***!
  \******************************************************************/
/*! exports provided: SolicitudesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudesPage", function() { return SolicitudesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_solicitudes_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./solicitudes.page.html */ "Vn2h");
/* harmony import */ var _solicitudes_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solicitudes.page.scss */ "A79Z");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/solicitud.service */ "rLtr");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _service_reject_modal_service_reject_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service-reject-modal/service-reject-modal.component */ "lpiM");











let SolicitudesPage = class SolicitudesPage {
    constructor(modalController, router, menuController, http, us, lc, solServ) {
        this.modalController = modalController;
        this.router = router;
        this.menuController = menuController;
        this.http = http;
        this.us = us;
        this.lc = lc;
        this.solServ = solServ;
        this.loadedServices = [];
        this.parsedHours = null;
    }
    ngOnInit() {
        this.userSub = this.us.loggedUser.subscribe(user => {
            this.grabbedUser = user;
        });
    }
    ionViewWillEnter() {
        this.menuController.enable(true, 'profesional');
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Authorization', 'Bearer ' + this.grabbedUser.access_token);
        this.loadServices("1");
    }
    loadServices(statusID) {
        this.lc.create({
            message: "Cargando lista de servicios..."
        }).then(loadingEl => {
            loadingEl.present();
            this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["API"] + `/supplier/requestservice/${statusID}`, { headers: this.headers })
                .subscribe(resData => {
                loadingEl.dismiss();
                this.loadedServices = resData["data"];
            }, err => {
                console.log(err);
                loadingEl.dismiss();
            });
        });
    }
    openMenu() {
        this.menuController.open();
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
    d(address) {
        let wAdd = address.split(',');
        return wAdd[0] + ",<br>" + wAdd[1] + ", " + wAdd[2];
    }
    rechazarSolicitud(solicitudID) {
        this.solServ.setServiceID(solicitudID);
        this.modalController.create({
            component: _service_reject_modal_service_reject_modal_component__WEBPACK_IMPORTED_MODULE_10__["ServiceRejectModalComponent"],
            cssClass: 'modalSE',
        }).then(modalEl => {
            modalEl.present();
            modalEl.onDidDismiss().then(data => {
                if (data) {
                    this.loadServices("1");
                }
            });
        });
    }
    aceptarSolicitud(solicitudID) {
        this.solServ.setServiceID(solicitudID);
        this.router.navigate(['/profesional/solicitudes/solicitudes-detail']);
    }
    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
};
SolicitudesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_7__["SolicitudService"] }
];
SolicitudesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-solicitudes',
        template: _raw_loader_solicitudes_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_solicitudes_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SolicitudesPage);



/***/ }),

/***/ "A79Z":
/*!********************************************************************!*\
  !*** ./src/app/profesional/home/solicitudes/solicitudes.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".prof-cont {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  margin-bottom: 10px;\n}\n\n.titleSelect {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.mainText {\n  font-size: 13px;\n}\n\n.miniText {\n  font-size: 12px;\n}\n\n.title {\n  font-size: 17px;\n}\n\n.miniBtnTxt {\n  font-size: 8px;\n}\n\n.iconSize {\n  font-size: 20px;\n}\n\n.iconS {\n  font-size: 22px;\n}\n\n.iconFix {\n  margin-bottom: -2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NvbGljaXR1ZGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHdFQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFFQTtFQUVJLGVBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUVBO0VBRUksZUFBQTtBQUFKOztBQUVBO0VBRUksZUFBQTtBQUFKOztBQUVBO0VBRUksZUFBQTtBQUFKOztBQUVBO0VBRUksY0FBQTtBQUFKOztBQUVBO0VBRUksZUFBQTtBQUFKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUNBO0VBRUksbUJBQUE7QUFDSiIsImZpbGUiOiJzb2xpY2l0dWRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZi1jb250XG57XG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4udGl0bGVTZWxlY3RcbntcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWFpblRleHRcbntcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG4ubWluaVRleHRcbntcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4udGl0bGVcbntcbiAgICBmb250LXNpemU6IDE3cHg7XG59XG4ubWluaUJ0blR4dFxue1xuICAgIGZvbnQtc2l6ZTogOHB4O1xufVxuLmljb25TaXplXG57XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuLmljb25Te1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbn1cbi5pY29uRml4XG57XG4gICAgbWFyZ2luLWJvdHRvbTogLTJweDtcbn0iXX0= */");

/***/ }),

/***/ "SSIZ":
/*!****************************************************************************!*\
  !*** ./src/app/profesional/home/solicitudes/solicitudes-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: SolicitudesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudesPageRoutingModule", function() { return SolicitudesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _solicitudes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./solicitudes.page */ "++H8");




const routes = [
    {
        path: '',
        component: _solicitudes_page__WEBPACK_IMPORTED_MODULE_3__["SolicitudesPage"]
    },
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

/***/ "Vn2h":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profesional/home/solicitudes/solicitudes.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    \n    <ion-buttons slot=\"start\">\n      <ion-button class=\"homeBtn\" (click)=\"openMenu()\">\n        <ion-icon name=\"menu\" class=\"homeBtn\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title class=\"title-toolbar\">SOLICITUDES</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- title -->\n  <ion-grid fixed>\n    <ion-row class=\"ion-margin-top\">\n      <ion-col size=\"11\" class=\"ion-text-left\">\n        <ion-text class=\"main-color title\" *ngIf=\"loadedServices.length > 0\">\n          <b>Buenos días <span class=\"ion-text-capitalize\">{{grabbedUser.name}} {{grabbedUser.last_name}}</span>, tienes las siguientes solicitudes por aceptar.</b>\n        </ion-text>\n        <ion-text class=\"main-color title\" *ngIf=\"loadedServices.length === 0\">\n          <b>Buenos días <span class=\"ion-text-capitalize\">{{grabbedUser.name}} {{grabbedUser.last_name}}</span>, no tienes solicitudes pendientes.</b>\n        </ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- solicitud card item -->\n  <div class=\"prof-cont no-border\" *ngFor=\"let service of loadedServices\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n\n        <!-- title -->\n        <ion-col size=\"7\" class=\"ion-justify-content-center\">\n          <ion-text>\n            <ion-badge color=\"primary\" class=\"titleSelect ion-text-capitalize\">{{ service.categoryName }}</ion-badge>\n            <br>\n            <ion-text class=\"mainText\">\n              {{ service.adress }}\n            </ion-text>\n            <br>\n            <ion-text class=\"miniText ion-text-capitalize\" color=\"primary\">{{ service.description }}</ion-text>\n          </ion-text>\n        </ion-col>\n\n        <!-- rating -->\n        <ion-col size=\"5\">\n          <ion-button expand=\"block\" shape=\"round\" color=\"success\" class=\"miniBtnTxt\" (click)=\"aceptarSolicitud(service.id)\">\n            <ion-icon slot=\"start\" name=\"checkmark\" class=\"iconSize\"></ion-icon>\n            ACEPTAR\n          </ion-button>\n          <ion-button expand=\"block\" fill=\"outline\" color=\"danger\" shape=\"round\" class=\"miniBtnTxt\" (click)=\"rechazarSolicitud(service.id)\">\n            <ion-icon slot=\"start\" name=\"close\" class=\"iconSize\"></ion-icon>\n            RECHAZAR\n          </ion-button>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <!-- solicitud rechazada card item -->\n  <!-- <div class=\"prof-cont no-border\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\"> -->\n\n        <!-- title -->\n        <!-- <ion-col size=\"7\" class=\"ion-justify-content-center\">\n          <ion-text>\n            <ion-badge color=\"danger\" class=\"titleSelect\">Carpintería</ion-badge>&nbsp;\n            <ion-icon color=\"danger\" name=\"alert-circle\" class=\"iconS\"></ion-icon>\n            <br>\n            <ion-text class=\"mainText\">\n              Pasaje Estral Poniente<br>\n              666 Maipú, Chile\n            </ion-text>\n            <br>\n            <ion-text class=\"miniText\" color=\"danger\">\n              Cambio de chapas\n              <ion-icon name=\"calendar\" color=\"danger\" class=\"iconFix\"></ion-icon>\n              16 dic 2020\n            </ion-text>\n          </ion-text>\n        </ion-col> -->\n\n        <!-- rating -->\n        <!-- <ion-col size=\"5\">\n          <ion-button expand=\"block\" shape=\"round\" color=\"success\" class=\"miniBtnTxt\" (click)=\"aceptarSolicitud()\">\n            <ion-icon slot=\"start\" name=\"checkmark\" class=\"iconSize\"></ion-icon>\n            ACEPTAR\n          </ion-button>\n          <ion-button expand=\"block\" fill=\"outline\" color=\"danger\" shape=\"round\" class=\"miniBtnTxt\" (click)=\"rechazarSolicitud()\">\n            <ion-icon slot=\"start\" name=\"close\" class=\"iconSize\"></ion-icon>\n            RECHAZAR\n          </ion-button>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div> -->\n\n</ion-content>\n");

/***/ }),

/***/ "tQ1+":
/*!********************************************************************!*\
  !*** ./src/app/profesional/home/solicitudes/solicitudes.module.ts ***!
  \********************************************************************/
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
/* harmony import */ var _solicitudes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./solicitudes-routing.module */ "SSIZ");
/* harmony import */ var _solicitudes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./solicitudes.page */ "++H8");







let SolicitudesPageModule = class SolicitudesPageModule {
};
SolicitudesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _solicitudes_routing_module__WEBPACK_IMPORTED_MODULE_5__["SolicitudesPageRoutingModule"]
        ],
        declarations: [_solicitudes_page__WEBPACK_IMPORTED_MODULE_6__["SolicitudesPage"]]
    })
], SolicitudesPageModule);



/***/ })

}]);
//# sourceMappingURL=solicitudes-solicitudes-module-es2015.js.map