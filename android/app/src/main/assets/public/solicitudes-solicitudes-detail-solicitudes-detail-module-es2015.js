(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["solicitudes-solicitudes-detail-solicitudes-detail-module"],{

/***/ "B2fi":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profesional/home/solicitudes/solicitudes-detail/solicitudes-detail.page.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    \n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/profesional/home/home-tabs/solicitudes\" text=\"\" icon=\"arrow-back\"></ion-back-button>\n      <ion-button class=\"homeBtn\" (click)=\"openMenu()\">\n        <ion-icon name=\"menu\" class=\"homeBtn\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title class=\"title-toolbar\">DATALLES SOLICITUD</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- profesional card item -->\n  <div class=\"no-border\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n        <!-- profile img -->\n        <ion-col size=\"4\" offset=\"1\">\n          <ion-avatar class=\"profileImg\">\n            <ion-img src=\"{{ !loadedInfo.img_client_profile ? 'assets/images/avatar.png' : 'http://workintest.herokuapp.com'+loadedInfo.img_client_profile  }}\"></ion-img>\n          </ion-avatar>\n        </ion-col>\n\n        <!-- title -->\n        <ion-col size=\"6\">\n          <ion-text>\n            <small class=\"ticket\">Ticket #{{ loadedInfo.ticket_number }}</small><br>\n            <span class=\"titleSelect main-color ion-text-capitalize\">{{ loadedInfo.categoryName }} para<br>\n              <span class=\"ion-text-capitalize titleName\">{{ loadedInfo.clientName+\" \"+loadedInfo.clientLastName }}</span>\n            </span><br>\n            <p class=\"main-color mini-text\" style=\"margin-top: 0; margin-bottom: 0;\">{{ d(loadedInfo.created_date) }}</p>\n          </ion-text>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <ion-grid>\n    \n    <!-- title -->\n    <ion-row>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-icon name=\"build\" class=\"main-color\"></ion-icon>\n        <ion-text class=\"main-color title\"><b> Trabajo requerido</b></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-text class=\"titleText\">{{ loadedInfo.description }}</ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n    <!-- Slider -->\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-slides [options]=\"slideOptions\">\n          \n          <!-- slide -->\n          <ion-slide *ngFor=\"let image of loadedInfo.images\">\n            <img\n              src=\"{{ 'http://workintest.herokuapp.com'+image.image }}\"\n              class=\"imgSlide\"\n            >\n          </ion-slide>\n\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n\n    <!-- Fecha de visita -->\n    <ion-row>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-icon name=\"calendar-outline\" class=\"main-color iconFixTitle\"></ion-icon>\n        <ion-text class=\"main-color subtitle\"><b> Fecha de visita</b></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-text class=\"subText\"> {{ loadedInfo.date_required }}</ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n    <!-- Rango de horas -->\n    <ion-row>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-icon name=\"time\" class=\"main-color iconFixTitle\"></ion-icon>\n        <ion-text class=\"main-color subtitle\"><b> Rango de horas</b></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-text class=\"subText\"> {{ p(loadedInfo.hours) }} horas</ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n    <!-- Costo -->\n    <!-- <ion-row>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-icon name=\"wallet-outline\" class=\"main-color iconFixTitle\"></ion-icon>\n        <ion-text class=\"main-color subtitle\"><b> Costo</b></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-text class=\"subText\"> $30 USD</ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row> -->\n\n    <!-- Contactar -->\n    <ion-row>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-text class=\"main-color subtitle\"><b>Contactar</b></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <!-- icons -->\n        <div class=\"locate-cont bg-green-color\">\n          <ion-icon name=\"call\" color=\"light\" class=\"rating-text\"></ion-icon>\n        </div>\n        <div class=\"locate-cont bg-green-color\">\n          <ion-icon name=\"logo-whatsapp\" color=\"light\" class=\"rating-text\"></ion-icon>\n        </div>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n    <!-- Visita de valoracion -->\n    <ion-row>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-text class=\"main-color subtitle\"><b>¿Requieres una visita de valoración?</b></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n\n      <ion-col size=\"1\"></ion-col>\n      <ion-col>\n        <ion-button size=\"5\" expand=\"block\" class=\"ion-text-uppercase\" color=\"primary\" fill=\"outline\" (click)=\"confirmVisit()\">\n          <ion-icon slot=\"start\" name=\"calendar\"></ion-icon>\n          VISITA DE VALORACIÓN\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n    <!-- Visita de valoracion -->\n    <ion-row>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-text class=\"main-color subtitle\"><b>Si no requieres una visita de valoración, agenda el trabajo final.</b></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n\n      <ion-col size=\"1\"></ion-col>\n      <ion-col>\n        <ion-button size=\"5\" expand=\"block\" class=\"ion-text-uppercase\" color=\"primary\" (click)=\"accceptSolicitud()\">\n          ACEPTAR TRABAJO\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "GrF2":
/*!******************************************************************************************************!*\
  !*** ./src/app/profesional/home/solicitudes/solicitudes-detail/solicitudes-detail-routing.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: SolicitudesDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudesDetailPageRoutingModule", function() { return SolicitudesDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _solicitudes_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./solicitudes-detail.page */ "nqfi");




const routes = [
    {
        path: '',
        component: _solicitudes_detail_page__WEBPACK_IMPORTED_MODULE_3__["SolicitudesDetailPage"]
    }
];
let SolicitudesDetailPageRoutingModule = class SolicitudesDetailPageRoutingModule {
};
SolicitudesDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SolicitudesDetailPageRoutingModule);



/***/ }),

/***/ "Kzfb":
/*!**********************************************************************************************!*\
  !*** ./src/app/profesional/home/solicitudes/solicitudes-detail/solicitudes-detail.page.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".no-border {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n\n.profileImg {\n  margin-left: 10px;\n  height: 75px;\n  width: 75px;\n}\n\n.titleSelect {\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.titleName {\n  font-size: 18px;\n}\n\n.title {\n  font-size: 20px;\n}\n\n.titleText {\n  font-size: 16px;\n}\n\n.imgSlide {\n  height: 125px;\n}\n\n.subtitle {\n  font-size: 18px;\n}\n\n.subText {\n  font-size: 14px;\n}\n\n.minusMargin {\n  margin-top: -25px;\n}\n\n.iconFix {\n  margin-bottom: -3px;\n}\n\n.mini-text {\n  font-size: 14px;\n}\n\n.ticket {\n  color: red;\n  font-size: 12px;\n}\n\n.locate-cont {\n  border-radius: 50px;\n  height: 45px;\n  width: 45px;\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: 5px;\n  background-color: #009ACE;\n}\n\n.bg-green-color {\n  background-color: #2dd36f;\n}\n\n.rating-text {\n  font-size: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  display: inline-flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NvbGljaXR1ZGVzLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxnQkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBRUE7RUFFSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQUo7O0FBRUE7RUFFSSxlQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFFQTtFQUVJLGVBQUE7QUFBSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7QUFFSjs7QUFBQTtFQUNJLGFBQUE7QUFHSjs7QUFEQTtFQUNJLGVBQUE7QUFJSjs7QUFGQTtFQUNJLGVBQUE7QUFLSjs7QUFIQTtFQUNJLGlCQUFBO0FBTUo7O0FBSkE7RUFDSSxtQkFBQTtBQU9KOztBQUxBO0VBRUksZUFBQTtBQU9KOztBQUxBO0VBRUksVUFBQTtFQUNBLGVBQUE7QUFPSjs7QUFMQTtFQUVJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFPSjs7QUFMQTtFQUVJLHlCQUFBO0FBT0o7O0FBTEE7RUFFSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBT0oiLCJmaWxlIjoic29saWNpdHVkZXMtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uby1ib3JkZXJcbntcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XG59XG4ucHJvZmlsZUltZ1xue1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGhlaWdodDogNzVweDtcbiAgICB3aWR0aDogNzVweDtcbn1cbi50aXRsZVNlbGVjdFxue1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi50aXRsZU5hbWVcbntcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG4udGl0bGV7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG4udGl0bGVUZXh0e1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5pbWdTbGlkZXtcbiAgICBoZWlnaHQ6MTI1cHg7XG59XG4uc3VidGl0bGV7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuLnN1YlRleHR7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1pbnVzTWFyZ2lue1xuICAgIG1hcmdpbi10b3A6IC0yNXB4O1xufVxuLmljb25GaXh7XG4gICAgbWFyZ2luLWJvdHRvbTogLTNweDtcbn1cbi5taW5pLXRleHRcbntcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4udGlja2V0XG57XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4ubG9jYXRlLWNvbnRcbntcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICB3aWR0aDogNDVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5QUNFO1xufVxuLmJnLWdyZWVuLWNvbG9yXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkZDM2Zjtcbn1cbi5yYXRpbmctdGV4dFxue1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59Il19 */");

/***/ }),

/***/ "jCiK":
/*!**********************************************************************************************!*\
  !*** ./src/app/profesional/home/solicitudes/solicitudes-detail/solicitudes-detail.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: SolicitudesDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudesDetailPageModule", function() { return SolicitudesDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _solicitudes_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./solicitudes-detail-routing.module */ "GrF2");
/* harmony import */ var _solicitudes_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./solicitudes-detail.page */ "nqfi");







let SolicitudesDetailPageModule = class SolicitudesDetailPageModule {
};
SolicitudesDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _solicitudes_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["SolicitudesDetailPageRoutingModule"]
        ],
        declarations: [_solicitudes_detail_page__WEBPACK_IMPORTED_MODULE_6__["SolicitudesDetailPage"]]
    })
], SolicitudesDetailPageModule);



/***/ }),

/***/ "nqfi":
/*!********************************************************************************************!*\
  !*** ./src/app/profesional/home/solicitudes/solicitudes-detail/solicitudes-detail.page.ts ***!
  \********************************************************************************************/
/*! exports provided: SolicitudesDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudesDetailPage", function() { return SolicitudesDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_solicitudes_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./solicitudes-detail.page.html */ "B2fi");
/* harmony import */ var _solicitudes_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solicitudes-detail.page.scss */ "Kzfb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/solicitud.service */ "rLtr");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "AytR");










let SolicitudesDetailPage = class SolicitudesDetailPage {
    constructor(modalController, router, menuController, solServ, us, http, lc) {
        this.modalController = modalController;
        this.router = router;
        this.menuController = menuController;
        this.solServ = solServ;
        this.us = us;
        this.http = http;
        this.lc = lc;
        this.loadedInfo = {
            img_client_profile: null,
            ticket_number: null,
            clientName: null,
            clientLastName: null,
            date_required: null,
            hours: null,
            description: null,
            images: null,
            categoryName: null,
        };
        this.slideOptions = {
            initialSlide: 0,
            slidesPerView: 2,
            autoplay: true
        };
    }
    ngOnInit() {
        this.userSub = this.us.loggedUser.subscribe(user => {
            this.grabbedUser = user;
        });
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Authorization', 'Bearer ' + this.grabbedUser.access_token);
        this.lc.create({
            message: "Cargando informacion del servicio..."
        }).then(loadingEl => {
            loadingEl.present();
            this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["API"] + `/supplier/requestservicedetail/${this.solServ.solicitud.solicitudID}`, { headers: this.headers })
                .subscribe(resData => {
                console.log(resData['data']);
                loadingEl.dismiss();
                this.loadedInfo.clientLastName = resData['data'].clientLastName;
                this.loadedInfo.clientName = resData['data'].clientName;
                this.loadedInfo.date_required = resData['data'].date_required;
                this.loadedInfo.description = resData['data'].description;
                this.loadedInfo.hours = resData['data'].hours;
                this.loadedInfo.images = resData['data'].images;
                this.loadedInfo.img_client_profile = resData['data'].img_client_profile;
                this.loadedInfo.ticket_number = resData['data'].ticket_number;
                this.loadedInfo.categoryName = resData['data'].categoryName;
            }, err => {
                console.log(err);
                loadingEl.dismiss();
            });
        });
    }
    ionViewWillEnter() {
        this.menuController.enable(true, 'profesional');
        console.log(this.loadedInfo);
    }
    p(hours) {
        if (hours) {
            let wHours = hours.split("/");
            let sHour = wHours[0].split("T");
            let sHour2 = sHour[1];
            sHour2 = sHour2.substring(0, 5);
            let eHour = wHours[1].split("T");
            let eHour2 = eHour[1];
            eHour2 = eHour2.substring(0, 5);
            return sHour2 + " - " + eHour2;
        }
    }
    d(date) {
        if (date) {
            let wDate = date.split(" ");
            return wDate[0];
        }
    }
    openMenu() {
        this.menuController.open();
    }
    confirmVisit() {
        this.router.navigate(['/profesional/home/home-tabs/solicitudes/visita-tecnica']);
    }
    accceptSolicitud() {
        this.router.navigate(['/profesional/home/home-tabs/solicitudes/definicion-servicio']);
        // this.modalController.create({
        //   component: ConfirmModalComponent,
        //   cssClass: 'modalSE',
        // }).then(modalEl =>{
        //   modalEl.present();
        // });
    }
    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
};
SolicitudesDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"] },
    { type: src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_7__["SolicitudService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] }
];
SolicitudesDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-solicitudes-detail',
        template: _raw_loader_solicitudes_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_solicitudes_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SolicitudesDetailPage);



/***/ })

}]);
//# sourceMappingURL=solicitudes-solicitudes-detail-solicitudes-detail-module-es2015.js.map