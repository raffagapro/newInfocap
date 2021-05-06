(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-eval-prof-eval-prof-module"],{

/***/ "GukR":
/*!************************************************************!*\
  !*** ./src/app/user/eval-prof/eval-prof-routing.module.ts ***!
  \************************************************************/
/*! exports provided: EvalProfPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvalProfPageRoutingModule", function() { return EvalProfPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _eval_prof_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eval-prof.page */ "kRm2");




const routes = [
    {
        path: '',
        component: _eval_prof_page__WEBPACK_IMPORTED_MODULE_3__["EvalProfPage"]
    }
];
let EvalProfPageRoutingModule = class EvalProfPageRoutingModule {
};
EvalProfPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EvalProfPageRoutingModule);



/***/ }),

/***/ "dg6E":
/*!****************************************************!*\
  !*** ./src/app/user/eval-prof/eval-prof.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  font-size: 23px;\n}\n\n.rating-icon {\n  font-size: 50px;\n  margin-right: 10px;\n}\n\n.locate-cont {\n  margin-top: 20px;\n  border-radius: 50px;\n  height: 60px;\n  width: 60px;\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n}\n\n.rating-text {\n  font-size: 50px;\n  margin-left: auto;\n  margin-right: auto;\n  opacity: 0.5;\n}\n\n.selected {\n  opacity: 1;\n}\n\n.label-text {\n  margin-left: auto;\n  margin-right: auto;\n  font-size: 10px;\n}\n\n.border {\n  border: 1px solid #009ace;\n}\n\n.btn-text {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2V2YWwtcHJvZi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBSUo7O0FBRkE7RUFDSSxVQUFBO0FBS0o7O0FBSEE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQU1KOztBQUpBO0VBQ0kseUJBQUE7QUFPSjs7QUFMQTtFQUNJLGVBQUE7QUFRSiIsImZpbGUiOiJldmFsLXByb2YucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDIzcHg7XG59XG4ucmF0aW5nLWljb24ge1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ubG9jYXRlLWNvbnQge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucmF0aW5nLXRleHQge1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgb3BhY2l0eTogMC41O1xufVxuLnNlbGVjdGVkIHtcbiAgICBvcGFjaXR5OiAxO1xufVxuLmxhYmVsLXRleHQge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBmb250LXNpemU6IDEwcHg7XG59XG4uYm9yZGVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA5YWNlO1xufVxuLmJ0bi10ZXh0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "kRm2":
/*!**************************************************!*\
  !*** ./src/app/user/eval-prof/eval-prof.page.ts ***!
  \**************************************************/
/*! exports provided: EvalProfPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvalProfPage", function() { return EvalProfPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_eval_prof_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./eval-prof.page.html */ "owJ7");
/* harmony import */ var _eval_prof_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eval-prof.page.scss */ "dg6E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/solicitud.service */ "rLtr");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _confirm_success_modal_confirm_success_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./confirm-success-modal/confirm-success-modal.component */ "E1bO");












let EvalProfPage = class EvalProfPage {
    constructor(modalController, router, userService, menuController, requestService, loadingController, location) {
        this.modalController = modalController;
        this.router = router;
        this.userService = userService;
        this.menuController = menuController;
        this.requestService = requestService;
        this.loadingController = loadingController;
        this.location = location;
        this.selectedIcons = [];
        this.currentRate = 1;
    }
    ngOnInit() {
        this.userSub = this.userService.loggedUser.subscribe(user => {
            this.grabbedUser = user;
        });
    }
    ionViewWillEnter() {
        this.menuController.enable(true, 'user');
    }
    openMenu() {
        this.menuController.open();
    }
    isSelectedIcon(type) {
        return this.selectedIcons.includes(type);
    }
    setCurrentRate(rate) {
        this.currentRate = rate;
    }
    setSelectedIcon(type) {
        if (this.selectedIcons.includes(type)) {
            this.selectedIcons = this.selectedIcons.filter((currentType) => type !== currentType);
        }
        else {
            this.selectedIcons.push(type);
        }
    }
    rateProfessional() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(this.comment);
            try {
                let loader = yield this.loadingController.create({ message: 'Enviando calificación...' });
                loader.present();
                let body = {
                    request_services_id: this.requestService.solicitud.solicitudID,
                    technical_capacity: this.selectedIcons.includes('engine') ? '1' : '0',
                    puntuality: this.selectedIcons.includes('time') ? '1' : '0',
                    cordiality: this.selectedIcons.includes('heart') ? '1' : '0',
                    service_and_satisfaction: this.selectedIcons.includes('diamond') ? '1' : '0',
                    stars: this.currentRate.toString(),
                    comment: this.comment,
                    comment_bad_services: this.comment,
                };
                let response = yield axios__WEBPACK_IMPORTED_MODULE_7___default.a.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["API"]}/supplier/evaluation`, body, {
                    headers: {
                        Authorization: `Bearer ${this.grabbedUser.access_token}`,
                    }
                });
                yield loader.dismiss();
                if (response.data && response.data.code && response.data.code !== 200) {
                    this.error = 'Ocurrió un error al enviar la calificación';
                }
                else {
                    this.confirmRequest();
                }
            }
            catch (error) {
                console.log(error);
                this.error = 'Ocurrió un error al enviar la calificación.';
            }
        });
    }
    confirmRequest() {
        this.modalController.create({
            component: _confirm_success_modal_confirm_success_modal_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmSuccessModalComponent"],
            cssClass: 'modalSuccess',
        }).then(modalEl => {
            modalEl.present();
        });
    }
    goBack() {
        this.location.back();
    }
};
EvalProfPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_8__["SolicitudService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] }
];
EvalProfPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-eval-prof',
        template: _raw_loader_eval_prof_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_eval_prof_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EvalProfPage);



/***/ }),

/***/ "owJ7":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/eval-prof/eval-prof.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/user/servicio-pagar\" text=\"\" icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title class=\"title-toolbar\">EVALUA AL PROFESIONAL</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid fixed>\n\n    <!-- title -->\n    <ion-row class=\"ion-margin-top\">\n      <ion-col size=\"10\" offset=\"1\" class=\"ion-text-center\">\n        <ion-text class=\"main-color title\"><b>¿Qué te pareció el servicio entregado por Juan Alcayaga?</b></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n    <!-- rating  -->\n    <ion-row class=\"ion-margin-top\">\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <ion-icon (click)=\"setCurrentRate(1)\" name=\"{{currentRate >= 1 ? 'star' : 'star-outline'}}\" color=\"primary\"\n          class=\"rating-icon\"></ion-icon>\n        <ion-icon (click)=\"setCurrentRate(2)\" name=\"{{currentRate >= 2 ? 'star' : 'star-outline'}}\" color=\"primary\"\n          class=\"rating-icon\"></ion-icon>\n        <ion-icon (click)=\"setCurrentRate(3)\" name=\"{{currentRate >= 3 ? 'star' : 'star-outline'}}\" color=\"primary\"\n          class=\"rating-icon\"></ion-icon>\n        <ion-icon (click)=\"setCurrentRate(4)\" name=\"{{currentRate >= 4 ? 'star' : 'star-outline'}}\" color=\"primary\"\n          class=\"rating-icon\"></ion-icon>\n        <ion-icon (click)=\"setCurrentRate(5)\" name=\"{{currentRate >= 5 ? 'star' : 'star-outline'}}\" color=\"primary\"\n          class=\"rating-icon\"></ion-icon>\n      </ion-col>\n    </ion-row>\n\n    <!-- title -->\n    <ion-row class=\"ion-margin-top\">\n      <ion-col size=\"10\" offset=\"1\" class=\"ion-text-center\">\n        <ion-text class=\"main-color title\"><b>¿Qué reconocimiento le otorgarías?</b></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n    <!-- Icons -->\n    <ion-row>\n      <!-- tecnico -->\n      <ion-col size=\"3\" class=\"ion-text-center\">\n        <ion-text>\n          <div class=\"locate-cont\" (click)=\"setSelectedIcon('engine')\">\n            <ion-icon src=\"/assets/icon/ic_engine_circle.svg\"\n              class=\"rating-text {{isSelectedIcon('engine') ? 'selected' : ''}}\"></ion-icon>\n          </div><br>\n          <span class=\"label-text\">Técnico</span>\n        </ion-text>\n      </ion-col>\n\n      <!-- Puntualidad -->\n      <ion-col size=\"3\" class=\"ion-text-center\">\n        <ion-text>\n          <div class=\"locate-cont\" (click)=\"setSelectedIcon('time')\">\n            <ion-icon src=\"/assets/icon/ic_time_circle.svg\"\n              class=\"rating-text {{isSelectedIcon('time') ? 'selected' : ''}}\"></ion-icon>\n          </div><br>\n          <span class=\"label-text\">Puntualidad</span>\n        </ion-text>\n      </ion-col>\n\n      <!-- Cordialidad -->\n      <ion-col size=\"3\" class=\"ion-text-center\">\n        <ion-text>\n          <div class=\"locate-cont\" (click)=\"setSelectedIcon('heart')\">\n            <ion-icon src=\"/assets/icon/ic_heart_circle.svg\"\n              class=\"rating-text {{isSelectedIcon('heart') ? 'selected' : ''}}\"></ion-icon>\n          </div><br>\n          <span class=\"label-text\">Cordialidad</span>\n        </ion-text>\n      </ion-col>\n\n      <!-- Cordialidad -->\n      <ion-col size=\"3\" class=\"ion-text-center\">\n        <ion-text>\n          <div class=\"locate-cont\" (click)=\"setSelectedIcon('diamond')\">\n            <ion-icon src=\"/assets/icon/ic_diamont_circle.svg\"\n              class=\"rating-text {{isSelectedIcon('diamond') ? 'selected' : ''}}\"></ion-icon>\n          </div><br>\n          <span class=\"label-text\">Servicio y Satisfacción</span>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n    <!-- title -->\n    <ion-row class=\"ion-margin-top\">\n      <ion-col size=\"10\" offset=\"1\" class=\"ion-text-center\">\n        <ion-text class=\"main-color title\"><b>Deja un comentario para el profesional</b></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n    <!-- text-area -->\n    <ion-row class=\"ion-margin-top\">\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"border ion-text-center\">\n        <ion-item lines=\"none\">\n          <ion-textarea rows=\"3\" cols=\"20\" placeholder=\"Agrega una descripción.\" [(ngModel)]=\"comment\" name=\"comment\"></ion-textarea>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n    <!-- error handling  -->\n    <ion-row *ngIf=\"error !== undefined\" class=\"ion-margin-top\">\n      <ion-col class=\"ion-text-center\">\n        <ion-label class=\"\">\n          <ion-icon name=\"alert-circle-outline\" class=\"iconFixG\" color=\"danger\"></ion-icon>\n          <ion-text color=\"danger\">\n            <small> {{ error }}</small>\n          </ion-text><br>\n        </ion-label>\n      </ion-col>\n    </ion-row>\n\n    <!-- BTNs -->\n    <ion-row class=\"ion-margin-top ion-margin-bottom\">\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"4\">\n        <ion-button size=\"5\" expand=\"block\" fill=\"outline\" class=\"btn-text ion-text-uppercase\"\n          (click)=\"goBack()\">\n          Omitir\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"5\">\n        <ion-button size=\"5\" expand=\"block\" class=\"btn-text ion-text-uppercase\" (click)=\"rateProfessional()\">\n          Aceptar\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>");

/***/ }),

/***/ "tjQ7":
/*!****************************************************!*\
  !*** ./src/app/user/eval-prof/eval-prof.module.ts ***!
  \****************************************************/
/*! exports provided: EvalProfPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvalProfPageModule", function() { return EvalProfPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _eval_prof_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eval-prof-routing.module */ "GukR");
/* harmony import */ var _eval_prof_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eval-prof.page */ "kRm2");







let EvalProfPageModule = class EvalProfPageModule {
};
EvalProfPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _eval_prof_routing_module__WEBPACK_IMPORTED_MODULE_5__["EvalProfPageRoutingModule"]
        ],
        declarations: [_eval_prof_page__WEBPACK_IMPORTED_MODULE_6__["EvalProfPage"]]
    })
], EvalProfPageModule);



/***/ })

}]);
//# sourceMappingURL=user-eval-prof-eval-prof-module-es2015.js.map