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






// import { HTTP } from '@ionic-native/http/ngx';
let LoginPage = class LoginPage {
    constructor(navController, router) {
        this.navController = navController;
        this.router = router;
    }
    ngOnInit() {
    }
    login() {
        this.router.navigate(['/user/home']);
        // this.http.get('https://ionic.io', {}, {})
        // .then(data => {
        //   console.log(data.status);
        //   console.log(data.data); // data received by server
        //   console.log(data.headers);
        // })
        // .catch(error => {
        //   console.log(error.status);
        //   console.log(error.error); // error message as string
        //   console.log(error.headers);
        // });
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
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
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
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  font-family: Poppins;\n  font-size: 12px;\n}\n\nhr {\n  border-bottom: 1px solid #E54360;\n}\n\n.subtitle {\n  margin-top: 40px;\n}\n\n.logo-facebook {\n  background-color: #1877f2;\n  width: 60px;\n  height: 60px;\n  font-size: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n}\n\n.logo-apple {\n  background-color: #000000;\n  width: 60px;\n  height: 60px;\n  font-size: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n}\n\n.logo-google {\n  background-color: #F93F2D;\n  width: 60px;\n  height: 60px;\n  font-size: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n}\n\n.outline-btn {\n  font-size: 10;\n  --color:#009ACE;\n  --background: none;\n  border: 2px solid #009ACE;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNBO0VBQ0UsZ0NBQUE7QUFFRjs7QUFBQTtFQUNFLGdCQUFBO0FBR0Y7O0FBREE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFJRjs7QUFGQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUtGOztBQUhBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBTUY7O0FBSEE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQU1GIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXNpemU6IDEycHg7XG59XG5ociB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTU0MzYwO1xufVxuLnN1YnRpdGxle1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuLmxvZ28tZmFjZWJvb2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg3N2YyO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBmb250LXNpemU6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ubG9nby1hcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5sb2dvLWdvb2dsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOTNGMkQ7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLm91dGxpbmUtYnRue1xuICBmb250LXNpemU6IDEwO1xuICAtLWNvbG9yOiMwMDlBQ0U7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwOUFDRTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "nRaD":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\">\n  <div style=\"height: 5%\"></div>\n  <ion-grid>\n    <!-- Main Logo -->\n    <ion-row>\n      <ion-col size=\"10\" offset=\"1\">\n        <img src=\"assets/logos/logo.svg\" alt=\"\">\n      </ion-col>\n    </ion-row>\n\n    <!-- Subtitle -->\n    <ion-row class=\"subtitle\">\n      <ion-col size=\"2\" offset=\"2\">\n        <hr>\n      </ion-col>\n      <ion-col size=\"4\" class=\"ion-text-center\">\n        <ion-text class=\"main-color ion-text-uppercase\">Ingresa con</ion-text>\n      </ion-col>\n      <ion-col size=\"2\">\n        <hr>\n      </ion-col>\n    </ion-row>\n\n    <!-- Social Icons -->\n    <ion-row class=\"ion-margin-top\">\n      <!-- facebook -->\n      <ion-col size=\"2\" offset=\"2\">\n        <div class=\"logo-facebook\">\n          <ion-icon name=\"logo-facebook\" (click)=\"loginFacebook()\" color=\"light\"></ion-icon>\n        </div>\n      </ion-col>\n      <!-- apple -->\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"2\">\n        <div class=\"logo-apple\">\n          <ion-icon name=\"logo-apple\" (click)=\"loginApple()\" color=\"light\"></ion-icon>\n        </div>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n      <!-- google -->\n      <ion-col size=\"2\">\n        <div class=\"logo-google\">\n          <ion-icon name=\"logo-google\" (click)=\"loginGoogle()\" color=\"light\"></ion-icon>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <!-- Login Inputs -->\n    <form>\n      <!-- email -->\n      <ion-row>\n        <ion-col size=\"11\">\n          <ion-item>\n            <ion-label position=\"floating\">\n              <ion-icon name=\"mail\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Email</ion-text>\n            </ion-label>\n            <ion-input type=\"text\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <!-- password -->\n      <ion-row>\n        <ion-col size=\"11\">\n          <ion-item>\n            <ion-label position=\"floating\" class=\"main-color\">\n              <ion-icon name=\"lock-closed\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Contraseña</ion-text>\n            </ion-label>\n            <ion-input type=\"password\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </form>\n\n    <!-- Login BTN -->\n    <ion-row class=\"ion-margin-top\">\n      <ion-col>\n        <ion-button expand=\"block\" class=\"ion-text-uppercase\" (click)=\"login()\">Ingresar</ion-button>\n      </ion-col>\n    </ion-row>\n\n    <!-- forgot password link -->\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        <ion-text class=\"main-color\" (click)=\"loginProfesional()\">¿Olvidaste tu contraseña?</ion-text>\n      </ion-col>\n    </ion-row>\n\n    <!-- Registration Btns -->\n    <ion-row class=\"ion-margin-top\">\n      <ion-col size=\"6\" offset=\"1\">\n        <ion-button expand=\"block\" class=\"outline-btn\">\n          <small>\n            Ingresar como invitado\n          </small>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-button expand=\"block\" [routerLink]=\"['/','register']\" routerDirection=\"forward\">\n          <small>\n            Registrarme\n          </small>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <!-- forgot password link -->\n    <ion-row class=\"ion-margin-top\">\n      <ion-col size=\"5\" class=\"ion-text-right\">\n        <ion-text class=\"main-color\">Una empresa</ion-text>\n      </ion-col>\n      <ion-col size=\"6\">\n        <img src=\"assets/logos/info_logo.png\" alt=\"\">\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n");

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