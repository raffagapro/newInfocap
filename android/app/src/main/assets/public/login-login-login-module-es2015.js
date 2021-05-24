(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-login-module"],{

/***/ "Jl+/":
/*!*******************************************!*\
  !*** ./src/app/login/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "nRaD");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "bRUQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_model_user_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/model/user.model */ "UbF0");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);












let LoginPage = class LoginPage {
    constructor(navController, router, http, as, us, lc) {
        this.navController = navController;
        this.router = router;
        this.http = http;
        this.as = as;
        this.us = us;
        this.lc = lc;
    }
    ngOnInit() {
    }
    login(form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!form.valid) {
                return;
            }
            const email = form.value.email;
            const password = form.value.password;
            const loader = yield this.lc.create({
                message: 'Validando credenciales...'
            });
            loader.present();
            try {
                let body = {
                    email,
                    password,
                };
                const response = yield axios__WEBPACK_IMPORTED_MODULE_11___default.a.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["API"]}/auth/login`, body);
                const { data } = response;
                const { data: responseData, message } = data;
                if (responseData) {
                    const { user, roles, access_token } = responseData;
                    const { id, name, last_name, email, phone1, phone2, img_profile } = user;
                    //save user info to store NEEDS WORK IN HERE
                    let img;
                    if (img_profile === null || img_profile === 'http://167.71.251.136/storage/') {
                        img = 'assets/images/avatar.png';
                    }
                    else {
                        img = img_profile;
                    }
                    this.grabbedUSer = new src_app_model_user_model__WEBPACK_IMPORTED_MODULE_9__["User"](id, name, last_name, img, email, phone1, phone2, roles[0], access_token);
                    this.us.setUser(this.grabbedUSer);
                    this.as.login();
                    form.control.reset();
                    loader.dismiss();
                    if (roles[0] === 'usuario') {
                        this.router.navigate(['/user/home']);
                    }
                    else {
                        this.router.navigate(['/profesional/home']);
                    }
                }
                else {
                    const errorMessage = message === 'Unauthorized' ? 'Credenciales inválidas' : 'Ocurrió un error';
                    this.error = errorMessage;
                    form.reset();
                    form.setValue({
                        email: email,
                        password: '',
                    });
                    loader.dismiss();
                }
            }
            catch (error) {
                console.log(error);
                let message = 'Ocurrió un error';
                if (error.response) {
                    message = error.response.data.message;
                }
                this.error = message;
                form.reset();
                form.setValue({
                    email: email,
                    password: '',
                });
                loader.dismiss();
            }
        });
    }
    loginProfesional() {
        this.router.navigate(['/profesional/home']);
    }
    loginGoogle() {
        // do comething awesome
    }
    loginApple() {
        // do something awesome
    }
    loginFacebook() {
        // do seomthing swesome 
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ }),

/***/ "Ktwe":
/*!*********************************************!*\
  !*** ./src/app/login/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "saXk");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "Jl+/");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "bRUQ":
/*!*********************************************!*\
  !*** ./src/app/login/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  font-family: Poppins;\n  font-size: 12px;\n}\n\nhr {\n  border-bottom: 1px solid #e54360;\n}\n\n.subtitle {\n  margin-top: 40px;\n}\n\n.logo-facebook {\n  background-color: #1877f2;\n  width: 60px;\n  height: 60px;\n  font-size: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n}\n\n.logo-apple {\n  background-color: #000000;\n  width: 60px;\n  height: 60px;\n  font-size: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n}\n\n.logo-google {\n  background-color: #f93f2d;\n  width: 60px;\n  height: 60px;\n  font-size: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n}\n\n.outline-btn {\n  font-size: 10;\n  --color: #009ace;\n  --background: none;\n  border: 2px solid #009ace;\n  border-radius: 10px;\n}\n\n.logo-text {\n  text-align: right;\n}\n\n@media (min-width: 768px) {\n  .logo-text {\n    text-align: right;\n    padding-right: 30px;\n  }\n}\n\n@media (min-width: 768px) {\n  .logo-img {\n    width: 130px;\n  }\n}\n\n.spacing {\n  height: 5%;\n}\n\n@media (min-width: 768px) {\n  .spacing {\n    height: 25%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNBO0VBQ0UsZ0NBQUE7QUFFRjs7QUFBQTtFQUNFLGdCQUFBO0FBR0Y7O0FBREE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFJRjs7QUFGQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUtGOztBQUhBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBTUY7O0FBSEE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFNRjs7QUFIQTtFQUNFLGlCQUFBO0FBTUY7O0FBTEU7RUFGRjtJQUdJLGlCQUFBO0lBQ0EsbUJBQUE7RUFRRjtBQUNGOztBQUpFO0VBREY7SUFFSSxZQUFBO0VBUUY7QUFDRjs7QUFMQTtFQUNFLFVBQUE7QUFRRjs7QUFORTtFQUhGO0lBSUksV0FBQTtFQVNGO0FBQ0YiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXNpemU6IDEycHg7XG59XG5ociB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTU0MzYwO1xufVxuLnN1YnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cbi5sb2dvLWZhY2Vib29rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4NzdmMjtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmxvZ28tYXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBmb250LXNpemU6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ubG9nby1nb29nbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjkzZjJkO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBmb250LXNpemU6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5vdXRsaW5lLWJ0biB7XG4gIGZvbnQtc2l6ZTogMTA7XG4gIC0tY29sb3I6ICMwMDlhY2U7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwOWFjZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmxvZ28tdGV4dCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICB9XG59XG5cbi5sb2dvLWltZyB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIHdpZHRoOiAxMzBweDtcbiAgfVxufVxuXG4uc3BhY2luZyB7XG4gIGhlaWdodDogNSU7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgaGVpZ2h0OiAyNSU7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "nRaD":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\">\n  <div class=\"spacing\"></div>\n  <ion-grid>\n    <!-- Main Logo -->\n    <ion-row>\n      <ion-col size=\"12\" class=\"text-center\">\n        <img src=\"assets/logos/logo.svg\" alt=\"\">\n      </ion-col>\n    </ion-row>\n\n    <!-- Subtitle -->\n    <ion-row class=\"subtitle\">\n      <ion-col size=\"2\" offset=\"2\">\n        <hr>\n      </ion-col>\n      <ion-col size=\"4\" class=\"ion-text-center\">\n        <ion-text class=\"main-color ion-text-uppercase font-small\">Ingresa con</ion-text>\n      </ion-col>\n      <ion-col size=\"2\">\n        <hr>\n      </ion-col>\n    </ion-row>\n\n    <!-- Social Icons -->\n    <!-- <ion-row class=\"ion-margin-top\"> -->\n      <!-- facebook -->\n      <!-- <ion-col size=\"2\" offset=\"2\">\n        <div class=\"logo-facebook\">\n          <ion-icon name=\"logo-facebook\" (click)=\"loginFacebook()\" color=\"light\"></ion-icon>\n        </div>\n      </ion-col> -->\n      <!-- apple -->\n      <!-- <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"2\">\n        <div class=\"logo-apple\">\n          <ion-icon name=\"logo-apple\" (click)=\"loginApple()\" color=\"light\"></ion-icon>\n        </div>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col> -->\n      <!-- google -->\n      <!-- <ion-col size=\"2\">\n        <div class=\"logo-google\">\n          <ion-icon name=\"logo-google\" (click)=\"loginGoogle()\" color=\"light\"></ion-icon>\n        </div>\n      </ion-col>\n    </ion-row> -->\n\n    <!-- Login Inputs -->\n    <form #f=\"ngForm\" (ngSubmit)=\"login(f)\">\n      <!-- email -->\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-item class=\"ion-no-padding\">\n            <ion-label position=\"floating\">\n              <ion-icon src=\"/assets/icon/ic_mail.svg\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Email</ion-text>\n            </ion-label>\n            <ion-input\n              ngModel name=\"email\"\n              required\n              #emailCtrl=\"ngModel\"\n              type=\"email\">\n            </ion-input>\n          </ion-item>\n          <!-- error  -->\n          <ion-label *ngIf=\"!emailCtrl.valid && emailCtrl.touched\" class=\"errorMess\">\n            <ion-icon name=\"alert-circle-outline\" class=\"iconFixG\" color=\"danger\"></ion-icon>\n            <ion-text color=\"danger\">\n              <small> El email es requerido</small>\n            </ion-text>\n          </ion-label>\n        </ion-col>\n      </ion-row>\n\n      <!-- password -->\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-item class=\"ion-no-padding\">\n            <ion-label position=\"floating\" class=\"main-color\">\n              <ion-icon src=\"/assets/icon/ic_lock.svg\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Contraseña</ion-text>\n            </ion-label>\n            <ion-input\n              ngModel name=\"password\"\n              required\n              #passwordCtrl=\"ngModel\"\n              type=\"password\">\n            </ion-input>\n          </ion-item>\n          <!-- error  -->\n          <ion-label *ngIf=\"!passwordCtrl.valid && passwordCtrl.touched\" class=\"errorMess\">\n            <ion-icon name=\"alert-circle-outline\" class=\"iconFixG\" color=\"danger\"></ion-icon>\n            <ion-text color=\"danger\">\n              <small> La contraseña es requerida</small>\n            </ion-text>\n          </ion-label>\n        </ion-col>\n      </ion-row>\n\n      <!-- error handling  -->\n      <ion-row *ngIf=\"error !== undefined\" class=\"ion-margin-top\">\n        <ion-col class=\"ion-text-center\">\n          <ion-label class=\"\">\n            <ion-icon name=\"alert-circle-outline\" class=\"iconFixG\" color=\"danger\"></ion-icon>\n            <ion-text color=\"danger\">\n              <small> {{ error }}</small>\n            </ion-text><br>\n          </ion-label>\n        </ion-col>\n      </ion-row>\n    \n      <!-- Login BTN -->\n      <ion-row class=\"ion-margin-top\">\n        <ion-col>\n          <ion-button\n            type=\"submit\"\n            [disabled]=\"!f.valid\" \n            expand=\"block\"\n            class=\"ion-text-uppercase\">\n            Ingresar\n          </ion-button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n\n    <!-- forgot password link -->\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        <ion-text class=\"main-color\" [routerLink]=\"['/','recovery']\">¿Olvidaste tu contraseña?</ion-text>\n      </ion-col>\n    </ion-row>\n\n    <!-- Registration Btns -->\n    <ion-row class=\"ion-margin-top\">\n      <!-- <ion-col size=\"6\" offset=\"1\">\n        <ion-button expand=\"block\" class=\"outline-btn\" [routerLink]=\"['/','user', 'home']\">\n          <small>\n            Ingresar como invitado\n          </small>\n        </ion-button>\n      </ion-col> -->\n      <ion-col size=\"12\">\n        <ion-button expand=\"block\" [routerLink]=\"['/','register']\" routerDirection=\"forward\" class=\"ion-text-uppercase\">\n          Registrarme\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <!-- forgot password link -->\n    <ion-row class=\"ion-margin-top\">\n      <ion-col size=\"5\" class=\"logo-text\">\n        <ion-text class=\"main-color\">Una empresa</ion-text>\n      </ion-col>\n      <ion-col size=\"6\">\n        <img class=\"logo-img\" src=\"assets/logos/info_logo.png\" alt=\"\">\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "saXk":
/*!*****************************************************!*\
  !*** ./src/app/login/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "Jl+/");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=login-login-login-module-es2015.js.map