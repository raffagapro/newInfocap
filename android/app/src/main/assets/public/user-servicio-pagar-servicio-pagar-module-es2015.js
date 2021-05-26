(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-servicio-pagar-servicio-pagar-module"],{

/***/ "55mg":
/*!**********************************************************************!*\
  !*** ./src/app/user/servicio-pagar/servicio-pagar-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: ServicioPagarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicioPagarPageRoutingModule", function() { return ServicioPagarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _servicio_pagar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./servicio-pagar.page */ "BH1l");




const routes = [
    {
        path: '',
        component: _servicio_pagar_page__WEBPACK_IMPORTED_MODULE_3__["ServicioPagarPage"]
    }
];
let ServicioPagarPageRoutingModule = class ServicioPagarPageRoutingModule {
};
ServicioPagarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ServicioPagarPageRoutingModule);



/***/ }),

/***/ "8GJd":
/*!**************************************************************!*\
  !*** ./src/app/user/servicio-pagar/servicio-pagar.module.ts ***!
  \**************************************************************/
/*! exports provided: ServicioPagarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicioPagarPageModule", function() { return ServicioPagarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _servicio_pagar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./servicio-pagar-routing.module */ "55mg");
/* harmony import */ var _servicio_pagar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./servicio-pagar.page */ "BH1l");







let ServicioPagarPageModule = class ServicioPagarPageModule {
};
ServicioPagarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _servicio_pagar_routing_module__WEBPACK_IMPORTED_MODULE_5__["ServicioPagarPageRoutingModule"]
        ],
        declarations: [_servicio_pagar_page__WEBPACK_IMPORTED_MODULE_6__["ServicioPagarPage"]]
    })
], ServicioPagarPageModule);



/***/ }),

/***/ "BH1l":
/*!************************************************************!*\
  !*** ./src/app/user/servicio-pagar/servicio-pagar.page.ts ***!
  \************************************************************/
/*! exports provided: ServicioPagarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicioPagarPage", function() { return ServicioPagarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_servicio_pagar_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./servicio-pagar.page.html */ "ttxk");
/* harmony import */ var _servicio_pagar_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./servicio-pagar.page.scss */ "bmig");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/solicitud.service */ "rLtr");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ "AytR");











let ServicioPagarPage = class ServicioPagarPage {
    constructor(router, menuController, http, us, lc, solServ) {
        this.router = router;
        this.menuController = menuController;
        this.http = http;
        this.us = us;
        this.lc = lc;
        this.solServ = solServ;
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
            request_cost: [],
        };
        this.selectedButton = 'credit';
        this.paymentTypes = [];
    }
    ngOnInit() {
        this.userSub = this.us.loggedUser.subscribe(user => {
            this.grabbedUser = user;
            this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Authorization', 'Bearer ' + this.grabbedUser.access_token);
            this.serviceId = this.solServ.solicitud.solicitudID;
            this.loadPaymentTypes();
        });
    }
    ionViewWillEnter() {
        this.menuController.enable(true, 'user');
    }
    loadPaymentTypes() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let response = yield axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["API"]}/payments/type`, {
                    headers: {
                        Authorization: `Bearer ${this.grabbedUser.access_token}`
                    }
                });
                this.paymentTypes = response.data.data;
            }
            catch (error) {
                console.log(error);
            }
            finally {
                this.loadService();
            }
        });
    }
    loadService() {
        this.lc.create({
            message: "Cargando informacion del servicio..."
        }).then(loadingEl => {
            loadingEl.present();
            this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["API"] + `/client/requestservice/${this.solServ.solicitud.solicitudID}`, { headers: this.headers })
                .subscribe(resData => {
                loadingEl.dismiss();
                this.loadedService = resData['data'];
                this.solServ.setServiceObj(resData['data']);
                let worDate = this.loadedService.created_date.split(" ");
                this.wDate = worDate[0];
                if (this.loadedService.request_cost.length > 0) {
                    let firstCost = this.loadedService.request_cost[0];
                    let paymentType = this.paymentTypes.find((paymentType) => paymentType.id === firstCost.payment_type_id);
                    if (paymentType.name === 'Efectivo') {
                        this.selectedButton = 'cash';
                    }
                    else {
                        this.selectedButton = 'credit';
                    }
                }
                this.loadCosts();
            }, err => {
                loadingEl.dismiss();
                console.log(err);
            });
        });
    }
    loadCosts() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let loader = yield this.lc.create({ message: 'Consultando información...' });
            loader.present();
            try {
                let response = yield axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["API"]}/client/detailcostrequest/${this.solServ.solicitud.solicitudID}`, {
                    headers: {
                        Authorization: `Bearer ${this.grabbedUser.access_token}`
                    }
                });
                console.log(response);
                if (response.data) {
                    let data = response.data.data;
                    if (response.data.code !== 200) {
                        alert('Error');
                        return;
                    }
                    this.servicesCosts = data.data;
                }
            }
            catch (error) {
                console.log(error);
            }
            finally {
                loader.dismiss();
            }
        });
    }
    getServiceAditional() {
        if (this.servicesCosts && this.servicesCosts.request_cost.length > 0) {
            return this.servicesCosts.request_cost.addittional.reduce((total, entity) => total += Number(entity.amount_client), 0);
        }
        return 0;
    }
    getTotal() {
        return this.getServiceAditional() + this.servicesCosts.amount_client;
    }
    openMenu() {
        this.menuController.open();
    }
    paymentForm() {
        this.router.navigate(['/user/servicio-pagar-forma']);
    }
    setSelectedButton(type) {
        this.selectedButton = type;
    }
    nothing() {
        // do something awesome
    }
    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
};
ServicioPagarPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_8__["SolicitudService"] }
];
ServicioPagarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-servicio-pagar',
        template: _raw_loader_servicio_pagar_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_servicio_pagar_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ServicioPagarPage);



/***/ }),

/***/ "bmig":
/*!**************************************************************!*\
  !*** ./src/app/user/servicio-pagar/servicio-pagar.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  font-size: 29px;\n}\n.title .small {\n  font-size: 18px;\n}\n.text {\n  font-size: 22px;\n}\n.subtitle {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlcnZpY2lvLXBhZ2FyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGVBQUE7QUFBSjtBQUVJO0VBQ0ksZUFBQTtBQUFSO0FBR0E7RUFFSSxlQUFBO0FBREo7QUFHQTtFQUVJLGVBQUE7QUFESiIsImZpbGUiOiJzZXJ2aWNpby1wYWdhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGVcbntcbiAgICBmb250LXNpemU6IDI5cHg7XG5cbiAgICAuc21hbGwge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxufVxuLnRleHRcbntcbiAgICBmb250LXNpemU6IDIycHg7XG59XG4uc3VidGl0bGVcbntcbiAgICBmb250LXNpemU6IDE4cHg7XG59Il19 */");

/***/ }),

/***/ "ttxk":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/servicio-pagar/servicio-pagar.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/user/solicitud-status\" text=\"\" icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title class=\"title-toolbar text-center\">MÉTODO DE PAGO</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid fixed>\n\n    <!-- OMITIR POR EL MOMENTO BTN -->\n    <ion-row class=\"ion-margin-bottom\">\n      <ion-col size=\"1\"></ion-col>\n      <ion-col>\n        <ion-button size=\"5\" expand=\"block\" fill=\"outline\" (click)=\"nothing()\">\n          <ion-icon slot=\"start\" name=\"document-text-outline\"></ion-icon>\n          Ver informe de los servicios\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n    <!-- title  -->\n    <ion-row>\n      <ion-col size=\"11\" offset=\"1\">\n        <ion-text color=\"primary\" class=\"title\">\n          <b>Detalle del pago</b>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n    <!-- servicios pactados  -->\n    <ion-row>\n      <ion-col size=\"11\" offset=\"1\">\n        <ion-text class=\"text\">\n          <b>Servicios pactados</b>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n    <!-- costo  -->\n    <ion-row>\n      <ion-col size=\"11\" offset=\"1\">\n        <ion-text color=\"primary\" class=\"title\">\n          <b *ngIf=\"servicesCosts\">${{servicesCosts.amount_client}}</b>\n          <b *ngIf=\"!servicesCosts\" class=\"small\">Aún no se ha asignado un costo</b>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n    <!-- servicios adicionales  -->\n    <ion-row>\n      <ion-col size=\"11\" offset=\"1\">\n        <ion-text class=\"text\">\n          <b>Servicios adicionales</b>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n    <!-- costo  -->\n    <ion-row>\n      <ion-col size=\"11\" offset=\"1\">\n        <ion-text color=\"primary\" class=\"title\">\n          <b *ngIf=\"servicesCosts\">${{getServiceAditional()}}</b>\n          <b *ngIf=\"!servicesCosts\" class=\"small\">Aún no se ha asignado un costo</b>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n    <!-- servicios adicionales  -->\n    <ion-row>\n      <ion-col size=\"11\" offset=\"1\">\n        <ion-text class=\"text ion-text-uppercase\">\n          <b>TOTAL</b>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n    <!-- costo  -->\n    <ion-row>\n      <ion-col size=\"11\" offset=\"1\">\n        <ion-text color=\"danger\" class=\"title\">\n          <b *ngIf=\"servicesCosts !== undefined\">${{getTotal()}}</b>\n          <b *ngIf=\"!servicesCosts\" class=\"small\">No se ha asignado un costo</b>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n    <!-- Costo & pay BTNS-->\n    <ion-row class=\"ion-margin-top\">\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-text class=\"main-color subtitle\"><b>¿Cómo desea pagar?</b></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <section>\n          <!-- btn -->\n          <ion-button size=\"small\"\n            [fill]=\"selectedButton === 'credit' ? 'solid' : 'outline'\">\n            <ion-icon slot=\"start\" src=\"assets/icon/visa.svg\"></ion-icon>\n            Tarjeta\n          </ion-button>\n\n          <!-- btn -->\n          <!--\n          <ion-button size=\"small\" (click)=\"setSelectedButton('debit')\"  [fill]=\"selectedButton === 'debit' ? 'solid' : 'outline'\">\n            <ion-icon slot=\"start\" src=\"assets/icon/mastercard.svg\"></ion-icon>\n            Débito\n          </ion-button>\n          -->\n\n          <!-- btn -->\n          <ion-button size=\"small\"\n            [fill]=\"selectedButton === 'cash' ? 'solid' : 'outline'\">\n            <ion-icon slot=\"start\" src=\"/assets/icon/ic_dollar_blank.svg\"></ion-icon>\n            Efectivo\n          </ion-button>\n\n          <!-- btn -->\n          <!--\n          <ion-button size=\"small\" (click)=\"setSelectedButton('transfer')\"\n            [fill]=\"selectedButton === 'transfer' ? 'solid' : 'outline'\">\n            <ion-icon slot=\"start\" src=\"/assets/icon/ic_money_blank.svg\"></ion-icon>\n            Transferencia\n          </ion-button>\n          -->\n\n        </section>\n      </ion-col>\n\n    </ion-row>\n\n    <!-- CONFIRMAR BTN -->\n    <ion-row class=\"ion-margin-top\">\n      <ion-col size=\"1\"></ion-col>\n      <ion-col>\n        <ion-button [disabled]=\"!servicesCosts\" size=\"5\" expand=\"block\" class=\"ion-text-uppercase\"\n          (click)=\"paymentForm()\">\n          PAGAR\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=user-servicio-pagar-servicio-pagar-module-es2015.js.map