(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-solicitud-status-solicitud-status-module"],{

/***/ "8G04":
/*!**************************************************************************!*\
  !*** ./src/app/user/solicitud-status/solicitud-status-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: SolicitudStatusPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudStatusPageRoutingModule", function() { return SolicitudStatusPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _solicitud_status_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./solicitud-status.page */ "YjC/");




const routes = [
    {
        path: '',
        component: _solicitud_status_page__WEBPACK_IMPORTED_MODULE_3__["SolicitudStatusPage"]
    },
];
let SolicitudStatusPageRoutingModule = class SolicitudStatusPageRoutingModule {
};
SolicitudStatusPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SolicitudStatusPageRoutingModule);



/***/ }),

/***/ "Jv7P":
/*!******************************************************************!*\
  !*** ./src/app/user/solicitud-status/solicitud-status.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".no-border {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n\n.test {\n  margin-top: -10px;\n}\n\n.titleSelect {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.badge-text {\n  font-size: 7px;\n}\n\n.textSelect {\n  font-size: 10px;\n  line-height: 0.5;\n}\n\n.ticket {\n  color: red;\n  font-size: 11px;\n  margin-top: -30px;\n}\n\n.locate-cont {\n  border-radius: 50px;\n  height: 45px;\n  width: 45px;\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: 5px;\n  background-color: #009ACE;\n}\n\n.status-cont {\n  border-radius: 50px;\n  height: 30px;\n  width: 30px;\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 5px;\n  background-color: #009ACE;\n}\n\n.status-cont-grey {\n  border-radius: 50px;\n  height: 30px;\n  width: 30px;\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 5px;\n  background-color: #8E8C89;\n}\n\n.status-cont-red {\n  border-radius: 50px;\n  height: 30px;\n  width: 30px;\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 5px;\n  background-color: red;\n}\n\n.rating-text {\n  font-size: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  display: inline-flex;\n}\n\n.status-text-icon {\n  font-size: 14px;\n  margin-left: auto;\n  margin-right: auto;\n  display: inline-flex;\n}\n\n.status-text {\n  font-size: 13px;\n}\n\n.status-text-grey {\n  font-size: 13px;\n  color: #8E8C89;\n}\n\n.status-subtext-grey {\n  font-size: 11px;\n  color: #8E8C89;\n}\n\n.status-text-red {\n  font-size: 13px;\n  color: red;\n}\n\n.status-subtext-red {\n  font-size: 11px;\n  color: red;\n}\n\n.ratingText {\n  font-size: 14px;\n  margin: 0;\n  padding: 0;\n}\n\n.bg-green-color {\n  background-color: #39AE50;\n}\n\n.title {\n  font-size: 17px;\n}\n\n.redLine {\n  color: red;\n  margin-top: -4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvbGljaXR1ZC1zdGF0dXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0JBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUVBO0VBRUksaUJBQUE7QUFBSjs7QUFFQTtFQUVJLGVBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUVBO0VBRUksY0FBQTtBQUFKOztBQUVBO0VBRUksZUFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBRUE7RUFFSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBRUE7RUFFSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBQUo7O0FBRUE7RUFFSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUFKOztBQUVBO0VBRUksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFBSjs7QUFFQTtFQUVJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBQUo7O0FBRUE7RUFFSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBQUo7O0FBRUE7RUFFSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBQUo7O0FBRUE7RUFFSSxlQUFBO0FBQUo7O0FBRUE7RUFFSSxlQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUVBO0VBRUksZUFBQTtFQUNBLGNBQUE7QUFBSjs7QUFFQTtFQUVJLGVBQUE7RUFDQSxVQUFBO0FBQUo7O0FBRUE7RUFFSSxlQUFBO0VBQ0EsVUFBQTtBQUFKOztBQUVBO0VBRUksZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQUo7O0FBRUE7RUFFSSx5QkFBQTtBQUFKOztBQUVBO0VBRUksZUFBQTtBQUFKOztBQUVBO0VBRUksVUFBQTtFQUNBLGdCQUFBO0FBQUoiLCJmaWxlIjoic29saWNpdHVkLXN0YXR1cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm8tYm9yZGVyXG57XG4gICAgcGFkZGluZy10b3A6IDJweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xufVxuLnRlc3RcbntcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cbi50aXRsZVNlbGVjdFxue1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5iYWRnZS10ZXh0XG57XG4gICAgZm9udC1zaXplOiA3cHg7XG59XG4udGV4dFNlbGVjdFxue1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBsaW5lLWhlaWdodDogLjU7XG59XG4udGlja2V0XG57XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgbWFyZ2luLXRvcDogLTMwcHg7XG59XG4ubG9jYXRlLWNvbnRcbntcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICB3aWR0aDogNDVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5QUNFO1xufVxuLnN0YXR1cy1jb250XG57XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5QUNFO1xufVxuLnN0YXR1cy1jb250LWdyZXlcbntcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4RThDODk7XG59XG4uc3RhdHVzLWNvbnQtcmVkXG57XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG4ucmF0aW5nLXRleHRcbntcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuLnN0YXR1cy10ZXh0LWljb25cbntcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuLnN0YXR1cy10ZXh0XG57XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuLnN0YXR1cy10ZXh0LWdyZXlcbntcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICM4RThDODk7XG59XG4uc3RhdHVzLXN1YnRleHQtZ3JleVxue1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBjb2xvcjogIzhFOEM4OTtcbn1cbi5zdGF0dXMtdGV4dC1yZWRcbntcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6IHJlZDtcbn1cbi5zdGF0dXMtc3VidGV4dC1yZWRcbntcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgY29sb3I6IHJlZDtcbn1cbi5yYXRpbmdUZXh0XG57XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuLmJnLWdyZWVuLWNvbG9yXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5QUU1MDtcbn1cbi50aXRsZVxue1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbn1cbi5yZWRMaW5lXG57XG4gICAgY29sb3I6IHJlZDtcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xufSJdfQ== */");

/***/ }),

/***/ "YjC/":
/*!****************************************************************!*\
  !*** ./src/app/user/solicitud-status/solicitud-status.page.ts ***!
  \****************************************************************/
/*! exports provided: SolicitudStatusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudStatusPage", function() { return SolicitudStatusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_solicitud_status_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./solicitud-status.page.html */ "hANc");
/* harmony import */ var _solicitud_status_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solicitud-status.page.scss */ "Jv7P");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "Wwn5");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_model_solicitud_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/model/solicitud.model */ "tWKY");
/* harmony import */ var src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/solicitud.service */ "rLtr");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _servicio_agendado_modal_servicio_agendado_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./servicio-agendado-modal/servicio-agendado-modal.component */ "Uol3");
/* harmony import */ var _solicitud_enviada_modal_solicitud_enviada_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./solicitud-enviada-modal/solicitud-enviada-modal.component */ "NPqd");
/* harmony import */ var _solicitud_rechazada_modal_solicitud_rechazada_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./solicitud-rechazada-modal/solicitud-rechazada-modal.component */ "25zm");
















moment__WEBPACK_IMPORTED_MODULE_8__["locale"]('es');
let SolicitudStatusPage = class SolicitudStatusPage {
    constructor(modalController, router, menuController, http, us, lc, solServ, callNumber) {
        this.modalController = modalController;
        this.router = router;
        this.menuController = menuController;
        this.http = http;
        this.us = us;
        this.lc = lc;
        this.solServ = solServ;
        this.callNumber = callNumber;
        this.loadedService = {
            categoryName: null,
            cummunename: null,
            category_id: null,
            created_date: null,
            date_required: null,
            descProf: null,
            description: null,
            hours_professional: null,
            hours_requestservice: null,
            img_profile: null,
            professional_profiles_id: null,
            request_id: null,
            status_id: null,
            status_name: null,
            status_order: null,
            supplierLastName: null,
            supplierName: null,
            supplier_id: null,
            ticket_number: null,
            user_client_id: null,
            work_days: null,
            suplierPhone1: null,
        };
    }
    ngOnInit() {
        this.userSub = this.us.loggedUser.subscribe(user => {
            this.grabbedUser = user;
        });
    }
    ionViewWillEnter() {
        this.menuController.enable(true, 'user');
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Authorization', 'Bearer ' + this.grabbedUser.access_token);
        this.serviceId = this.solServ.solicitud.solicitudID;
        this.loadService(this.solServ.solicitud.solicitudID);
    }
    loadService(solicitudId) {
        this.lc.create({
            message: "Cargando informacion del servicio..."
        }).then(loadingEl => {
            loadingEl.present();
            this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["API"] + `/client/requestservice/${solicitudId}`, { headers: this.headers })
                .subscribe(resData => {
                loadingEl.dismiss();
                this.loadedService = resData['data'];
                this.solServ.setServiceObj(resData['data']);
                this.wDate = moment__WEBPACK_IMPORTED_MODULE_8__(this.loadedService.created_date, 'YYYY-MM-DD').format('DD MMM YYYY');
            }, err => {
                loadingEl.dismiss();
                console.log(err);
            });
        });
    }
    openWhatsapp() {
        window.open(`https://api.whatsapp.com/send?phone=${src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["PHONE_PREFIX"]}${this.loadedService.suplierPhone1}`);
    }
    call(clientNumb) {
        this.callNumber.callNumber(clientNumb, true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }
    openMenu() {
        this.menuController.open();
    }
    serviceDetal(statusID) {
        this.solServ.clearSolicitud();
        this.solServ.setServiceID(this.loadedService.request_id);
        switch (statusID) {
            case src_app_model_solicitud_model__WEBPACK_IMPORTED_MODULE_9__["ServiceStatus"].SolicitudEnviada:
                this.goToServiceResume();
                break;
            case src_app_model_solicitud_model__WEBPACK_IMPORTED_MODULE_9__["ServiceStatus"].VisitaTecnica:
                this.goToTechnicalVisit();
                break;
            case src_app_model_solicitud_model__WEBPACK_IMPORTED_MODULE_9__["ServiceStatus"].ServicioAgendado:
                this.goToServiceDetail();
                break;
            case src_app_model_solicitud_model__WEBPACK_IMPORTED_MODULE_9__["ServiceStatus"].ServicioProceso:
                this.srvPay();
                break;
            case src_app_model_solicitud_model__WEBPACK_IMPORTED_MODULE_9__["ServiceStatus"].ServicioRealizado:
                this.srvPay();
                break;
            default:
                this.saModal();
                break;
        }
    }
    seModal() {
        this.modalController.create({
            component: _solicitud_enviada_modal_solicitud_enviada_modal_component__WEBPACK_IMPORTED_MODULE_14__["SolicitudEnviadaModalComponent"],
            cssClass: 'modalSA',
        }).then(modalEl => {
            modalEl.present();
        });
    }
    saModal() {
        this.modalController.create({
            component: _servicio_agendado_modal_servicio_agendado_modal_component__WEBPACK_IMPORTED_MODULE_13__["ServicioAgendadoModalComponent"],
            cssClass: 'modalSA',
        }).then(modalEl => {
            modalEl.present();
        });
    }
    srModal() {
        this.modalController.create({
            component: _solicitud_rechazada_modal_solicitud_rechazada_modal_component__WEBPACK_IMPORTED_MODULE_15__["SolicitudRechazadaModalComponent"],
            cssClass: 'modalServRechazado',
        }).then(modalEl => {
            modalEl.present();
        });
    }
    goToTechnicalVisit() {
        this.router.navigate(['/user/visita-detail']);
    }
    goToServiceDetail() {
        this.router.navigate(['/user/solicitud-detail']);
    }
    goToServiceResume() {
        this.router.navigate(['/user/service-resume']);
    }
    srvPay() {
        this.solServ.setServiceID(this.serviceId);
        this.router.navigate(['/user/servicio-pagar']);
    }
    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
};
SolicitudStatusPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
    { type: src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_10__["SolicitudService"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__["CallNumber"] }
];
SolicitudStatusPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-solicitud-status',
        template: _raw_loader_solicitud_status_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_solicitud_status_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SolicitudStatusPage);



/***/ }),

/***/ "aFCw":
/*!******************************************************************!*\
  !*** ./src/app/user/solicitud-status/solicitud-status.module.ts ***!
  \******************************************************************/
/*! exports provided: SolicitudStatusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudStatusPageModule", function() { return SolicitudStatusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _solicitud_status_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./solicitud-status-routing.module */ "8G04");
/* harmony import */ var _solicitud_status_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./solicitud-status.page */ "YjC/");







let SolicitudStatusPageModule = class SolicitudStatusPageModule {
};
SolicitudStatusPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _solicitud_status_routing_module__WEBPACK_IMPORTED_MODULE_5__["SolicitudStatusPageRoutingModule"]
        ],
        declarations: [_solicitud_status_page__WEBPACK_IMPORTED_MODULE_6__["SolicitudStatusPage"]]
    })
], SolicitudStatusPageModule);



/***/ }),

/***/ "hANc":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/solicitud-status/solicitud-status.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    \n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/user/solicitudes\" text=\"\" icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title class=\"title-toolbar\">SOLICITUD #{{ serviceId }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- top section  -->\n  <div class=\"ion-margin-top no-border\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n\n        <!-- title -->\n        <ion-col size=\"8\" class=\"ion-justify-content-center\">\n          <ion-text>\n            <span class=\"titleSelect main-color ion-text-capitalize\">{{ loadedService.supplierName+\" \"+loadedService.supplierLastName }} </span><br>\n            <!-- <ion-badge color=\"primary\" class=\"badge-text\">{{ loadedService.categoryName }}</ion-badge>&nbsp; -->\n            <ion-badge \n              color=\"{{ loadedService.category_id === cat.id ? primary : medium }}\" \n              class=\"badge-text\" \n              *ngFor=\"let cat of loadedService.categories\"\n              >{{ cat.categoryName }}\n            </ion-badge><br>\n            <span class=\"textSelect ion-text-capitalize\">\n              {{ loadedService.cummunename }}\n            </span><br>\n            <small class=\"main-color\">{{ wDate }}</small>\n          </ion-text>\n        </ion-col>\n\n        <!-- Contato icons -->\n        <ion-col size=\"4\" class=\"ion-text-center test\">\n          <ion-text>\n            <span class=\"titleSelect main-color\">Contacto </span><br><br>\n            <!-- icons -->\n            <div class=\"locate-cont bg-green-color\" (click)=\"openWhatsapp()\">\n              <ion-icon name=\"call\" color=\"light\" class=\"rating-text\"></ion-icon>\n            </div>\n            <!-- <div class=\"locate-cont bg-green-color\">\n              <ion-icon name=\"logo-whatsapp\" color=\"light\" class=\"rating-text\"></ion-icon>\n            </div> -->\n          </ion-text>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <!-- timeline  -->\n  <div class=\"no-border test\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n\n        <!-- title -->\n        <ion-col size=\"8\" class=\"ion-justify-content-center\">\n          <ion-text>\n            <span class=\"titleSelect main-color\">Solicitud </span>\n            <small class=\"ticket\" *ngIf=\"loadedService\">#{{ loadedService.ticket_number }}</small><br>\n            <span class=\"textSelect\" *ngIf=\"loadedService\">{{ loadedService.description }}</span>\n          </ion-text>\n        </ion-col>\n\n      </ion-row>\n\n      <!-- title -->\n      <ion-row class=\"ion-margin-top\">\n        <ion-col size=\"10\" offset=\"1\" class=\"ion-text-center\">\n          <ion-text class=\"main-color title\"><b>¿EN QUÉ ESTADO SE ENCUENTRA MI SOLICITUD?</b></ion-text>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n\n      <!-- separating line -->\n      <ion-row class=\"ion-no-margin\">\n        <ion-col size=\"12\" class=\"ion-text-center ion-no-padding redLine\">|</ion-col>\n      </ion-row>\n\n      <!-- solicitud enviada  -->\n      <ion-row>\n        <div class=\"status-cont\" (click)=\"serviceDetal(1)\">\n          <ion-icon name=\"send\" color=\"light\" class=\"status-text-icon\"></ion-icon>\n        </div>\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-text class=\"main-color status-text\">SOLICITUD ENVIADA</ion-text>\n        </ion-col>\n      </ion-row>\n\n      <!-- separating line -->\n      <ion-row class=\"ion-no-margin\">\n        <ion-col size=\"12\" class=\"ion-text-center ion-no-padding redLine\">|</ion-col>\n      </ion-row>\n      <ion-row class=\"ion-no-margin\">\n        <ion-col size=\"12\" class=\"ion-text-center ion-no-padding redLine\">|</ion-col>\n      </ion-row>\n\n      <!-- Visita tecnica agendada  -->\n      <!-- gray -->\n      <ion-row *ngIf=\"loadedService.status_id < 2 && loadedService.status_id !== 7\">\n        <div class=\"status-cont-grey\">\n          <ion-icon name=\"checkmark\" color=\"light\" class=\"status-text-icon\"></ion-icon>\n        </div>\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-text class=\"main-color status-text-grey\">VISITA TÉCNICA AGENDADA</ion-text><br>\n        </ion-col>\n      </ion-row>\n      <!-- active  -->\n      <ion-row *ngIf=\"loadedService.status_id > 1 && loadedService.status_id !== 7\">\n        <div class=\"status-cont\" (click)=\"serviceDetal(2)\">\n          <ion-icon name=\"checkmark\" color=\"light\" class=\"status-text-icon\"></ion-icon>\n        </div>\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-text class=\"main-color status-text\">VISITA TÉCNICA AGENDADA</ion-text><br>\n        </ion-col>\n      </ion-row>\n\n      <!-- separating line -->\n      <ion-row class=\"ion-no-margin\" *ngIf=\"loadedService.status_id !== 7\">\n        <ion-col size=\"12\" class=\"ion-text-center ion-no-padding redLine\">|</ion-col>\n      </ion-row>\n      <ion-row class=\"ion-no-margin\" *ngIf=\"loadedService.status_id !== 7\">\n        <ion-col size=\"12\" class=\"ion-text-center ion-no-padding redLine\">|</ion-col>\n      </ion-row>\n\n      <!-- Servicio agendado  -->\n      <!-- gray  -->\n      <ion-row *ngIf=\"loadedService.status_id < 3 && loadedService.status_id !== 7\">\n        <div class=\"status-cont-grey\">\n          <ion-icon name=\"calendar\" color=\"light\" class=\"status-text-icon\"></ion-icon>\n        </div>\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-text class=\"main-color status-text-grey\">SERVICIO AGENDADO</ion-text><br>\n          <!-- <ion-text class=\"main-color status-subtext-grey\">Pendiente de confirmación</ion-text> -->\n        </ion-col>\n      </ion-row>\n      <!-- active  -->\n      <ion-row *ngIf=\"loadedService.status_id > 2 && loadedService.status_id !== 7\">\n        <div class=\"status-cont\" (click)=\"serviceDetal(3)\">\n          <ion-icon name=\"calendar\" color=\"light\" class=\"status-text-icon\"></ion-icon>\n        </div>\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-text class=\"main-color status-text\">SERVICIO AGENDADO</ion-text><br>\n        </ion-col>\n      </ion-row>\n\n      <!-- separating line -->\n      <ion-row class=\"ion-no-margin\" *ngIf=\"loadedService.status_id !== 7\">\n        <ion-col size=\"12\" class=\"ion-text-center ion-no-padding redLine\">|</ion-col>\n      </ion-row>\n      <ion-row class=\"ion-no-margin\" *ngIf=\"loadedService.status_id !== 7\">\n        <ion-col size=\"12\" class=\"ion-text-center ion-no-padding redLine\">|</ion-col>\n      </ion-row>\n\n      <!-- SERVICIO EN\u000bPROCESO  -->\n      <!-- grey  -->\n      <ion-row *ngIf=\"loadedService.status_id < 4 && loadedService.status_id !== 7\">\n        <div class=\"status-cont-grey\">\n          <ion-icon name=\"build\" color=\"light\" class=\"status-text-icon\"></ion-icon>\n        </div>\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-text class=\"main-color status-text-grey\">SERVICIO EN\u000bPROCESO</ion-text><br>\n        </ion-col>\n      </ion-row>\n      <!-- active  -->\n      <ion-row *ngIf=\"loadedService.status_id > 3 && loadedService.status_id !== 7\">\n        <div class=\"status-cont\" (click)=\"serviceDetal(4)\">\n          <ion-icon name=\"build\" color=\"light\" class=\"status-text-icon\"></ion-icon>\n        </div>\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-text class=\"main-color status-text\">SERVICIO EN\u000bPROCESO</ion-text><br>\n        </ion-col>\n      </ion-row>\n\n      <!-- separating line -->\n      <ion-row class=\"ion-no-margin\" *ngIf=\"loadedService.status_id !== 7\">\n        <ion-col size=\"12\" class=\"ion-text-center ion-no-padding redLine\">|</ion-col>\n      </ion-row>\n      <ion-row class=\"ion-no-margin\" *ngIf=\"loadedService.status_id !== 7\">\n        <ion-col size=\"12\" class=\"ion-text-center ion-no-padding redLine\">|</ion-col>\n      </ion-row>\n\n      <!-- SERVICIO REALIZADO  -->\n      <!-- grey  -->\n      <ion-row *ngIf=\"loadedService.status_id < 5 && loadedService.status_id !== 7\">\n        <div class=\"status-cont-grey\">\n          <ion-icon name=\"build\" color=\"light\" class=\"status-text-icon\"></ion-icon>\n        </div>\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-text class=\"main-color status-text-grey\">SERVICIO REALIZADO</ion-text><br>\n        </ion-col>\n      </ion-row>\n      <!-- active  -->\n      <ion-row *ngIf=\"loadedService.status_id > 4 && loadedService.status_id !== 7\">\n        <div class=\"status-cont\" (click)=\"serviceDetal(4)\">\n          <ion-icon name=\"build\" color=\"light\" class=\"status-text-icon\"></ion-icon>\n        </div>\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-text class=\"main-color status-text\">SERVICIO REALIZADO</ion-text><br>\n        </ion-col>\n      </ion-row>\n\n      <!-- separating line -->\n      <!-- <ion-row class=\"ion-no-margin\">\n        <ion-col size=\"12\" class=\"ion-text-center ion-no-padding redLine\">|</ion-col>\n      </ion-row>\n      <ion-row class=\"ion-no-margin\">\n        <ion-col size=\"12\" class=\"ion-text-center ion-no-padding redLine\">|</ion-col>\n      </ion-row> -->\n\n      <!-- Pago Finalizado  -->\n      <!-- grey  -->\n      <!-- <ion-row *ngIf=\"loadedService.status_id < 6 && loadedService.status_id !== 7\">\n        <div class=\"status-cont-grey\">\n          <ion-icon name=\"card\" color=\"light\" class=\"status-text-icon\"></ion-icon>\n        </div>\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-text class=\"main-color status-text-grey\">PAGO FINALIZADO</ion-text><br> -->\n          <!-- <ion-text class=\"main-color status-subtext-grey\">Pendiente calificar el servicio</ion-text> -->\n        <!-- </ion-col>\n      </ion-row> -->\n      <!-- active  -->\n      <!-- <ion-row *ngIf=\"loadedService.status_id > 5 && loadedService.status_id !== 7\">\n        <div class=\"status-cont\" (click)=\"serviceDetal(1)\">\n          <ion-icon name=\"card\" color=\"light\" class=\"status-text-icon\"></ion-icon>\n        </div>\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-text class=\"main-color status-text\">PAGO FINALIZADO</ion-text><br> -->\n          <!-- <ion-text class=\"main-color status-subtext\">Pendiente calificar el servicio</ion-text> -->\n        <!-- </ion-col>\n      </ion-row> -->\n\n      <!-- ONLY FOR CANCELLED SERVICES -->\n\n      <!-- separating line -->\n      <!-- <ion-row class=\"ion-no-margin\" *ngIf=\"loadedService.status_id === 7\">\n        <ion-col size=\"12\" class=\"ion-text-center ion-no-padding redLine\">|</ion-col>\n      </ion-row>\n      <ion-row class=\"ion-no-margin\" *ngIf=\"loadedService.status_id === 7\">\n        <ion-col size=\"12\" class=\"ion-text-center ion-no-padding redLine\">|</ion-col>\n      </ion-row> -->\n\n      <!-- Solicitud rechazada  -->\n      <ion-row *ngIf=\"loadedService.status_id === 7\">\n        <div class=\"status-cont-red\">\n          <ion-icon name=\"close-outline\" color=\"light\" class=\"status-text-icon\"></ion-icon>\n        </div>\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-text class=\"status-text-red\">SOLICITUD RECHAZADA</ion-text><br>\n        </ion-col>\n      </ion-row>\n\n      <!-- separating line -->\n      <!-- <ion-row class=\"ion-no-margin\" *ngIf=\"loadedService.status_id === 7\">\n        <ion-col size=\"12\" class=\"ion-text-center ion-no-padding redLine\">|</ion-col>\n      </ion-row> -->\n\n      <!-- Por que solictud rechazada  -->\n      <!-- <ion-row (click)=\"serviceDetal(3)\" *ngIf=\"loadedService.status_id === 7\">\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-text class=\"main-color status-subtext-red\">¿Por qué mi solicitud fue rechazada?</ion-text>\n        </ion-col>\n      </ion-row> -->\n\n    </ion-grid>\n  </div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=user-solicitud-status-solicitud-status-module-es2015.js.map