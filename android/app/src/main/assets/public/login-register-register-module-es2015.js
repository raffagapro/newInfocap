(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-register-register-module"],{

/***/ "7QCc":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/register/register.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\" text=\"\" icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-uppercase main-color title-toolbar\">Registrarse</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div style=\"height: 5%\"></div>\n  <ion-grid>\n\n    <!-- title -->\n    <ion-row>\n      <ion-col size=\"1\" offset=\"1\"></ion-col>\n      <ion-col size=\"8\" class=\"ion-text-center\">\n        <ion-text class=\"main-color ion-text-uppercase title\">INGRESA TUS DATOS PERSONALES</ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n\n      <ion-col size=\"1\" offset=\"1\"></ion-col>\n      <ion-col size=\"8\" class=\"ion-text-center\">\n        <ion-text>\n          <hr>\n        </ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n    <!-- Register Inputs -->\n    <form #f=\"ngForm\" (ngSubmit)=\"onRegister(f)\">\n      <!-- nombre -->\n      <ion-row>\n        <ion-col size=\"11\">\n          <ion-item>\n            <ion-label position=\"floating\" class=\"main-color\">\n              <ion-icon name=\"person\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Nombre\n              </ion-text>\n            </ion-label>\n            <ion-input ngModel name=\"name\" required #nameCtrl=\"ngModel\" type=\"text\">\n            </ion-input>\n          </ion-item>\n          <!-- error  -->\n          <ion-label *ngIf=\"!nameCtrl.valid && nameCtrl.touched\" class=\"errorMess text-center\">\n            <ion-icon name=\"alert-circle-outline\" class=\"iconFixG\" color=\"danger\"></ion-icon>\n            <ion-text color=\"danger\">\n              <small> El nombre es requerido</small>\n            </ion-text>\n          </ion-label>\n          <!--  httpo name error  -->\n          <ion-label *ngIf=\"errors.name[0] !== undefined\" class=\"errorMess text-center\">\n            <ion-icon name=\"alert-circle-outline\" class=\"iconFixG\" color=\"danger\"></ion-icon>\n            <ion-text color=\"danger\">\n              <small> {{ errors.name[0] }}</small>\n            </ion-text><br>\n          </ion-label>\n          <!-- http last name error  -->\n          <ion-label *ngIf=\"errors.last_name[0] !== undefined\" class=\"errorMess text-center\">\n            <ion-icon name=\"alert-circle-outline\" class=\"iconFixG\" color=\"danger\"></ion-icon>\n            <ion-text color=\"danger\">\n              <small> {{ errors.last_name[0] }}</small>\n            </ion-text><br>\n          </ion-label>\n\n        </ion-col>\n      </ion-row>\n\n      <!-- email -->\n      <ion-row>\n        <ion-col size=\"11\">\n          <ion-item>\n            <ion-label position=\"floating\">\n              <ion-icon name=\"mail\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Email\n              </ion-text>\n            </ion-label>\n            <ion-input ngModel name=\"email\" required email #emailCtrl=\"ngModel\" type=\"email\">\n            </ion-input>\n          </ion-item>\n          <!-- error  -->\n          <ion-label *ngIf=\"!emailCtrl.valid && emailCtrl.touched\" class=\"errorMess\">\n            <ion-icon name=\"alert-circle-outline\" class=\"iconFixG\" color=\"danger\"></ion-icon>\n            <ion-text color=\"danger\">\n              <small> El email es requerido</small>\n            </ion-text>\n          </ion-label>\n          <!-- http email error  -->\n          <ion-label *ngIf=\"errors.email[0] !== undefined\" class=\"errorMess\">\n            <ion-icon name=\"alert-circle-outline\" class=\"iconFixG\" color=\"danger\"></ion-icon>\n            <ion-text color=\"danger\">\n              <small> {{ errors.email[0] }}</small>\n            </ion-text><br>\n          </ion-label>\n\n\n        </ion-col>\n      </ion-row>\n\n      <!-- password -->\n      <ion-row>\n        <ion-col size=\"11\">\n          <ion-item>\n            <ion-label position=\"floating\" class=\"main-color\">\n              <ion-icon name=\"lock-closed\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Contraseña</ion-text>\n            </ion-label>\n            <ion-input ngModel name=\"password\" minlength=\"8\" required #passwordCtrl=\"ngModel\" type=\"password\">\n            </ion-input>\n          </ion-item>\n          <!-- error  -->\n          <ion-label *ngIf=\"!passwordCtrl.valid && passwordCtrl.touched\" class=\"errorMess\">\n            <ion-icon name=\"alert-circle-outline\" class=\"iconFixG\" color=\"danger\"></ion-icon>\n            <ion-text color=\"danger\">\n              <small> El password es requerido</small>\n            </ion-text>\n          </ion-label>\n          <!-- http password error  -->\n          <ion-label *ngIf=\"errors.password[0] !== undefined\" class=\"errorMess\">\n            <ion-icon name=\"alert-circle-outline\" class=\"iconFixG\" color=\"danger\"></ion-icon>\n            <ion-text color=\"danger\">\n              <small> {{ errors.password[0] }}</small>\n            </ion-text>\n          </ion-label>\n\n        </ion-col>\n      </ion-row>\n\n      <!-- password confirm -->\n      <ion-row>\n        <ion-col size=\"11\">\n          <ion-item>\n            <ion-label position=\"floating\" class=\"main-color\">\n              <ion-icon name=\"lock-closed\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Repetir contraseña</ion-text>\n            </ion-label>\n            <ion-input ngModel name=\"confirm_password\" minlength=\"8\" required type=\"password\">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <!-- Registrar BTN -->\n      <ion-row class=\"ion-margin-top\">\n        <ion-col class=\"ion-margin-top\">\n          <ion-button expand=\"block\" type=\"submit\" [disabled]=\"!f.valid\" class=\"ion-text-uppercase\">\n            Registrarme\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-text class=\"privacy-text\">\n            <p>\n              Al continuar e iniciar sesión usted acepta nuestra <span (click)=\"goToPrivacy()\">Política de privacidad</span> y los\n              <span (click)=\"goToTerms()\">Términos\n                y condiciones</span>\n            </p>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "CpyM":
/*!*************************************************!*\
  !*** ./src/app/login/register/register.page.ts ***!
  \*************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.page.html */ "7QCc");
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.page.scss */ "hXSr");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _success_modal_success_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./success-modal/success-modal.component */ "wYVq");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");










let RegisterPage = class RegisterPage {
    constructor(modalController, http, lc, router) {
        this.modalController = modalController;
        this.http = http;
        this.lc = lc;
        this.router = router;
        this.errors = {
            name: [],
            last_name: [],
            email: [],
            password: []
        };
    }
    ngOnInit() {
    }
    onRegister(form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!form.valid) {
                return;
            }
            let name = form.value.name;
            let wName = name.split(" ");
            name = wName[0];
            let l_name = wName[1];
            if (wName[2] !== undefined) {
                l_name += " " + wName[2];
            }
            const email = form.value.email;
            const password = form.value.password;
            const confirm_password = form.value.confirm_password;
            if (password !== confirm_password) {
                this.errors.password = ['Las contraseñas no coinciden'];
                return;
            }
            const loader = yield this.lc.create({
                message: 'Registrando tu usuario...'
            });
            loader.present();
            const body = {
                name: name,
                last_name: l_name,
                email: email,
                password: password,
            };
            try {
                const response = yield axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["API"]}/auth/register`, body, {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest'
                    }
                });
                this.clearErrors();
                form.reset();
                loader.dismiss();
                // modal for succes
                const successModal = yield this.modalController.create({
                    component: _success_modal_success_modal_component__WEBPACK_IMPORTED_MODULE_7__["SuccessModalComponent"],
                    cssClass: 'modalSuccess',
                });
                successModal.present();
            }
            catch (error) {
                const { response } = error;
                if (response) {
                    const { errors } = response.data;
                    this.errors.name = [];
                    if (errors.name !== undefined) {
                        this.errors.name = errors.name;
                    }
                    this.errors.last_name = [];
                    if (errors.last_name !== undefined) {
                        this.errors.last_name = errors.last_name;
                    }
                    this.errors.email = [];
                    if (errors.email !== undefined) {
                        this.errors.email = errors.email;
                    }
                    this.errors.password = [];
                    if (errors.password !== undefined) {
                        this.errors.password = errors.password;
                    }
                }
                loader.dismiss();
            }
        });
    }
    clearErrors() {
        this.errors.name = [];
        this.errors.last_name = [];
        this.errors.email = [];
        this.errors.password = [];
    }
    goToTerms() {
        this.router.navigate(['/terms']);
    }
    goToPrivacy() {
        this.router.navigate(['/privacy']);
    }
};
RegisterPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
];
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegisterPage);



/***/ }),

/***/ "dymE":
/*!***************************************************!*\
  !*** ./src/app/login/register/register.module.ts ***!
  \***************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "oddf");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "CpyM");







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "hXSr":
/*!***************************************************!*\
  !*** ./src/app/login/register/register.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  font-size: 22px;\n  font-weight: bold;\n}\n\nhr {\n  border-top: 1px solid #E54360;\n}\n\n.privacy-text {\n  font-family: Poppins;\n  font-size: 14px;\n  text-align: center;\n}\n\n.privacy-text span {\n  color: #009ACE;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUNBO0VBQ0UsNkJBQUE7QUFFRjs7QUFBQTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBR0Y7O0FBRkU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUlKIiwiZmlsZSI6InJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZXtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmhyIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFNTQzNjA7XG59XG4ucHJpdmFjeS10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBzcGFuIHtcbiAgICBjb2xvcjogIzAwOUFDRTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "oddf":
/*!***********************************************************!*\
  !*** ./src/app/login/register/register-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "CpyM");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=login-register-register-module-es2015.js.map