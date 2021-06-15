(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-prof-contactados-list-prof-contactados-list-module"],{

/***/ "2xyq":
/*!****************************************************************************!*\
  !*** ./src/app/user/prof-contactados-list/prof-contactados-list.page.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".prof-cont {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n\n.titleSelect {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.icon-size {\n  margin-top: -3px;\n  font-size: 20px;\n}\n\n.textSelect {\n  font-size: 12px;\n  line-height: 1.4;\n  margin-bottom: 2px;\n}\n\n.ticket {\n  color: red;\n  font-size: 11px;\n}\n\n.ratingText {\n  font-size: 14px;\n  margin: 0;\n  padding: 0;\n}\n\n.badge-text {\n  font-size: 9px;\n}\n\n.locate-cont {\n  border-radius: 50px;\n  height: 25px;\n  width: 25px;\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #009ACE;\n}\n\n.rating-text {\n  font-size: 14px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.footer-text {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2YtY29udGFjdGFkb3MtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSx3RUFBQTtBQUFKOztBQUVBO0VBRUksZUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBRUE7RUFFSSxnQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFFQTtFQUVJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBRUE7RUFFSSxVQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUVBO0VBRUksZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQUo7O0FBRUE7RUFFSSxjQUFBO0FBQUo7O0FBRUE7RUFHSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBREo7O0FBR0E7RUFFSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQURKOztBQUdBO0VBQ0ksZUFBQTtBQUFKIiwiZmlsZSI6InByb2YtY29udGFjdGFkb3MtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZi1jb250XG57XG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xufVxuLnRpdGxlU2VsZWN0XG57XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmljb24tc2l6ZVxue1xuICAgIG1hcmdpbi10b3A6IC0zcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuLnRleHRTZWxlY3RcbntcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG4udGlja2V0XG57XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXNpemU6IDExcHg7XG59XG4ucmF0aW5nVGV4dFxue1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cbi5iYWRnZS10ZXh0XG57XG4gICAgZm9udC1zaXplOiA5cHg7XG59XG4ubG9jYXRlLWNvbnRcbntcbiAgICAvLyBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5QUNFO1xufVxuLnJhdGluZy10ZXh0XG57XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5mb290ZXItdGV4dHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH0iXX0= */");

/***/ }),

/***/ "7nyZ":
/*!************************************************************************************!*\
  !*** ./src/app/user/prof-contactados-list/prof-contactados-list-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: ProfContactadosListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfContactadosListPageRoutingModule", function() { return ProfContactadosListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _prof_contactados_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prof-contactados-list.page */ "xCmb");




const routes = [
    {
        path: '',
        component: _prof_contactados_list_page__WEBPACK_IMPORTED_MODULE_3__["ProfContactadosListPage"]
    },
];
let ProfContactadosListPageRoutingModule = class ProfContactadosListPageRoutingModule {
};
ProfContactadosListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfContactadosListPageRoutingModule);



/***/ }),

/***/ "UTZ2":
/*!****************************************************************************!*\
  !*** ./src/app/user/prof-contactados-list/prof-contactados-list.module.ts ***!
  \****************************************************************************/
/*! exports provided: ProfContactadosListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfContactadosListPageModule", function() { return ProfContactadosListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _prof_contactados_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prof-contactados-list-routing.module */ "7nyZ");
/* harmony import */ var _prof_contactados_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prof-contactados-list.page */ "xCmb");







let ProfContactadosListPageModule = class ProfContactadosListPageModule {
};
ProfContactadosListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _prof_contactados_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfContactadosListPageRoutingModule"]
        ],
        declarations: [_prof_contactados_list_page__WEBPACK_IMPORTED_MODULE_6__["ProfContactadosListPage"]]
    })
], ProfContactadosListPageModule);



/***/ }),

/***/ "xCmb":
/*!**************************************************************************!*\
  !*** ./src/app/user/prof-contactados-list/prof-contactados-list.page.ts ***!
  \**************************************************************************/
/*! exports provided: ProfContactadosListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfContactadosListPage", function() { return ProfContactadosListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_prof_contactados_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./prof-contactados-list.page.html */ "xivr");
/* harmony import */ var _prof_contactados_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prof-contactados-list.page.scss */ "2xyq");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/solicitud.service */ "rLtr");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "AytR");










let ProfContactadosListPage = class ProfContactadosListPage {
    constructor(router, menuController, http, us, lc, solServ) {
        this.router = router;
        this.menuController = menuController;
        this.http = http;
        this.us = us;
        this.lc = lc;
        this.solServ = solServ;
        this.sortedServices = [];
    }
    ngOnInit() {
        this.userSub = this.us.loggedUser.subscribe(user => {
            this.grabbedUser = user;
        });
    }
    ionViewWillEnter() {
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Authorization', 'Bearer ' + this.grabbedUser.access_token);
        this.menuController.enable(true, 'user');
        this.sortedServices = [];
        this.loadServices();
    }
    loadServices() {
        this.lc.create({
            message: "Cargando lista de servicios..."
        }).then(loadingEl => {
            loadingEl.present();
            this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["API"] + '/client/requestservices', { headers: this.headers })
                .subscribe(resData => {
                loadingEl.dismiss();
                this.loadedServices = resData['data'];
                let prof = [];
                this.loadedServices.forEach(i => {
                    let go = true;
                    prof.forEach(p => {
                        if (p === i.supplier_id) {
                            go = false;
                        }
                    });
                    if (go) {
                        prof.push(i.supplier_id);
                        this.sortedServices.push(i);
                    }
                });
            }, err => {
                console.log(err);
                loadingEl.dismiss();
            });
        });
    }
    p(passingDate) {
        let woDate = passingDate.split(" ");
        return woDate[0];
    }
    openMenu() {
        this.menuController.open();
    }
    solicitudes(profId) {
        this.solServ.setProfId(profId);
        this.router.navigate(['/user/single-prof-services']);
    }
};
ProfContactadosListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_7__["SolicitudService"] }
];
ProfContactadosListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-prof-contactados-list',
        template: _raw_loader_prof_contactados_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_prof_contactados_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfContactadosListPage);



/***/ }),

/***/ "xivr":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/prof-contactados-list/prof-contactados-list.page.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/user/home\" text=\"\" icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title class=\"title-toolbar\">PROFS. CONTACTADOS</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid class=\"ion-margin-top\" *ngIf=\"!sortedServices || sortedServices.length < 1\">\n    <ion-row class=\"subtitle ion-margin-top\">\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <ion-text class=\"footer-text main-color\"><b>Aún no tienes profesionales<br>contactados</b></ion-text>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- proff contactado card item -->\n  <div class=\"prof-cont ion-margin-top no-border\" *ngFor=\"let service of sortedServices\"\n    (click)=\"solicitudes(service.supplier_id)\">\n    <ion-grid *ngIf=\"service.supplierName\">\n      <ion-row class=\"ion-align-items-center\">\n\n        <!-- title -->\n        <ion-col size=\"10\" class=\"ion-justify-content-center\">\n          <ion-text>\n            <span class=\"titleSelect main-color ion-text-capitalize\">{{ service.supplierName+\"\n              \"+service.supplierLastName }} </span><br>\n            <ion-badge color=\"medium\" class=\"badge-text\" *ngFor=\"let cat of service.categories\">{{ cat.categoryName }}\n            </ion-badge>\n            <br>\n            <p class=\"textSelect\">\n              {{ service.descProf }}\n            </p>\n            <small class=\"main-color\">{{ p(service.created_date) }}</small>\n          </ion-text>\n        </ion-col>\n\n        <!-- rating -->\n        <!-- <ion-col size=\"4\">\n          <ion-text>\n            <p class=\"ratingText main-color ion-text-center\">\n              4.83\n              <ion-icon name=\"star\"></ion-icon>\n            </p><br> -->\n        <!-- icons -->\n        <!-- <div class=\"locate-cont\">\n              <ion-icon name=\"hammer\" color=\"light\" class=\"rating-text\"></ion-icon>\n            </div>\n            <div class=\"locate-cont\">\n              <ion-icon name=\"time\" color=\"light\" class=\"rating-text\"></ion-icon>\n            </div>\n            <div class=\"locate-cont\">\n              <ion-icon name=\"heart\" color=\"light\" class=\"rating-text\"></ion-icon>\n            </div>\n            <div class=\"locate-cont\">\n              <ion-icon name=\"trophy\" color=\"light\" class=\"rating-text\"></ion-icon>\n            </div>\n          </ion-text>\n        </ion-col> -->\n\n      </ion-row>\n    </ion-grid>\n  </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=user-prof-contactados-list-prof-contactados-list-module-es2015.js.map