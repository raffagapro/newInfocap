(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-register-register-module"], {
    /***/
    "7QCc":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/register/register.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function QCc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\" text=\"\" icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-uppercase main-color title-toolbar\">Registrarse</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div style=\"height: 5%\"></div>\n  <ion-grid>\n\n    <!-- title -->\n    <ion-row>\n      <ion-col size=\"1\" offset=\"1\"></ion-col>\n      <ion-col size=\"8\" class=\"ion-text-center\">\n        <ion-text class=\"main-color ion-text-uppercase title\">INGRESA TUS DATOS PERSONALES</ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n\n      <ion-col size=\"1\" offset=\"1\"></ion-col>\n      <ion-col size=\"8\" class=\"ion-text-center\">\n        <ion-text><hr></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n    <!-- Register Inputs -->\n    <form #f=\"ngForm\" (ngSubmit)=\"onRegister(f)\">\n      <!-- nombre -->\n      <ion-row>\n        <ion-col size=\"11\">\n          <ion-item>\n            <ion-label position=\"floating\" class=\"main-color\">\n              <ion-icon name=\"person\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Nombre\n              </ion-text>\n            </ion-label>\n            <ion-input\n              ngModel name=\"name\"\n              required\n              #nameCtrl=\"ngModel\"\n              type=\"text\">\n            </ion-input>\n          </ion-item>\n          <!-- error  -->\n          <ion-label *ngIf=\"!nameCtrl.valid && nameCtrl.touched\" class=\"errorMess\">\n            <ion-icon name=\"alert-circle-outline\" class=\"iconFixG\" color=\"danger\"></ion-icon>\n            <ion-text color=\"danger\">\n              <small> El nombre es requerido</small>\n            </ion-text>\n          </ion-label>\n          <!--  httpo name error  -->\n          <ion-label *ngIf=\"errors.name[0] !== undefined\" class=\"errorMess\">\n            <ion-icon name=\"alert-circle-outline\" class=\"iconFixG\" color=\"danger\"></ion-icon>\n            <ion-text color=\"danger\">\n              <small> {{ errors.name[0] }}</small>\n            </ion-text><br>\n          </ion-label>\n           <!-- http last name error  -->\n           <ion-label *ngIf=\"errors.last_name[0] !== undefined\" class=\"errorMess\">\n            <ion-icon name=\"alert-circle-outline\" class=\"iconFixG\" color=\"danger\"></ion-icon>\n            <ion-text color=\"danger\">\n              <small> {{ errors.last_name[0] }}</small>\n            </ion-text><br>\n          </ion-label>\n\n        </ion-col>\n      </ion-row>\n\n      <!-- email -->\n      <ion-row>\n        <ion-col size=\"11\">\n          <ion-item>\n            <ion-label position=\"floating\">\n              <ion-icon name=\"mail\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Email\n              </ion-text>\n            </ion-label>\n            <ion-input\n              ngModel name=\"email\"\n              required\n              email\n              #emailCtrl=\"ngModel\"\n              type=\"email\">\n            </ion-input>\n          </ion-item>\n          <!-- error  -->\n          <ion-label *ngIf=\"!emailCtrl.valid && emailCtrl.touched\" class=\"errorMess\">\n            <ion-icon name=\"alert-circle-outline\" class=\"iconFixG\" color=\"danger\"></ion-icon>\n            <ion-text color=\"danger\">\n              <small> El email es requerido</small>\n            </ion-text>\n          </ion-label>\n          <!-- http email error  -->\n          <ion-label *ngIf=\"errors.email[0] !== undefined\" class=\"errorMess\">\n            <ion-icon name=\"alert-circle-outline\" class=\"iconFixG\" color=\"danger\"></ion-icon>\n            <ion-text color=\"danger\">\n              <small> {{ errors.email[0] }}</small>\n            </ion-text><br>\n          </ion-label>\n         \n\n        </ion-col>\n      </ion-row>\n\n      <!-- password -->\n      <ion-row>\n        <ion-col size=\"11\">\n          <ion-item>\n            <ion-label position=\"floating\" class=\"main-color\">\n              <ion-icon name=\"lock-closed\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Contraseña</ion-text>\n            </ion-label>\n            <ion-input\n              ngModel name=\"password\"\n              minlength=\"8\"\n              required\n              #passwordCtrl=\"ngModel\"\n              type=\"password\">\n            </ion-input>\n          </ion-item>\n          <!-- error  -->\n          <ion-label *ngIf=\"!passwordCtrl.valid && passwordCtrl.touched\" class=\"errorMess\">\n            <ion-icon name=\"alert-circle-outline\" class=\"iconFixG\" color=\"danger\"></ion-icon>\n            <ion-text color=\"danger\">\n              <small> El password es requerido</small>\n            </ion-text>\n          </ion-label>\n          <!-- http password error  -->\n          <ion-label *ngIf=\"errors.password[0] !== undefined\" class=\"errorMess\">\n            <ion-icon name=\"alert-circle-outline\" class=\"iconFixG\" color=\"danger\"></ion-icon>\n            <ion-text color=\"danger\">\n              <small> {{ errors.password[0] }}</small>\n            </ion-text>\n          </ion-label>\n\n        </ion-col>\n      </ion-row>\n\n      <!-- password confirm -->\n      <ion-row>\n        <ion-col size=\"11\">\n          <ion-item>\n            <ion-label position=\"floating\" class=\"main-color\">\n              <ion-icon name=\"lock-closed\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Repetir constraseña</ion-text>\n            </ion-label>\n            <ion-input\n              ngModel name=\"confirm_password\"\n              minlength=\"8\"\n              required\n              type=\"password\">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <!-- Registrar BTN -->\n      <ion-row class=\"ion-margin-top\">\n        <ion-col class=\"ion-margin-top\">\n          <ion-button\n            expand=\"block\"\n            type=\"submit\"\n            [disabled]=\"!f.valid\" \n            class=\"ion-text-uppercase\">\n            Registrarme\n          </ion-button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "CpyM":
    /*!*************************************************!*\
      !*** ./src/app/login/register/register.page.ts ***!
      \*************************************************/

    /*! exports provided: RegisterPage */

    /***/
    function CpyM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
        return RegisterPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./register.page.html */
      "7QCc");
      /* harmony import */


      var _register_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./register.page.scss */
      "hXSr");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _success_modal_success_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./success-modal/success-modal.component */
      "wYVq");

      var RegisterPage = /*#__PURE__*/function () {
        function RegisterPage(modalController, http, lc) {
          _classCallCheck(this, RegisterPage);

          this.modalController = modalController;
          this.http = http;
          this.lc = lc;
          this.errors = {
            name: [],
            last_name: [],
            email: [],
            password: []
          };
        }

        _createClass(RegisterPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onRegister",
          value: function onRegister(form) {
            var _this = this;

            if (!form.valid) {
              return;
            }

            var name = form.value.name;
            var wName = name.split(" ");
            name = wName[0];
            var l_name = wName[1];

            if (wName[2] !== undefined) {
              l_name += " " + wName[2];
            } // console.log(l_name);


            var email = form.value.email;
            var password = form.value.password;
            var confirm_password = form.value.confirm_password; // console.log(password, confirm_password);

            if (password !== confirm_password) {
              // console.log('wrong PW mudafucker');
              this.errors.password = ['Las contraseñas no coinciden'];
              return;
            } // console.log(form);


            this.lc.create({
              message: 'Creando usuario...'
            }).then(function (loadingEl) {
              loadingEl.present();

              _this.http.post('http://workintest.herokuapp.com/api/auth/register', {
                // this.http.post('http://127.0.0.1:8000/api/auth/register', {
                name: name,
                last_name: l_name,
                email: email,
                password: password
              }).subscribe(function (resData) {
                loadingEl.dismiss();

                if (resData['code'] === 200) {
                  _this.clearErrors();

                  form.reset(); // modal for succes

                  _this.modalController.create({
                    component: _success_modal_success_modal_component__WEBPACK_IMPORTED_MODULE_6__["SuccessModalComponent"],
                    cssClass: 'modalSuccess'
                  }).then(function (modalEl) {
                    modalEl.present();
                  });
                }
              }, function (error) {
                // console.log(error.error.errors.name);
                // console.log(this.errors.name.lenght);
                _this.errors.name = [];

                if (error.error.errors.name !== undefined) {
                  _this.errors.name = error.error.errors.name;
                }

                _this.errors.last_name = [];

                if (error.error.errors.last_name !== undefined) {
                  _this.errors.last_name = error.error.errors.last_name;
                }

                _this.errors.email = [];

                if (error.error.errors.email !== undefined) {
                  _this.errors.email = error.error.errors.email;
                }

                _this.errors.password = [];

                if (error.error.errors.password !== undefined) {
                  _this.errors.password = error.error.errors.password;
                }
              });
            });
          }
        }, {
          key: "clearErrors",
          value: function clearErrors() {
            this.errors.name = [];
            this.errors.last_name = [];
            this.errors.email = [];
            this.errors.password = [];
          }
        }]);

        return RegisterPage;
      }();

      RegisterPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }];
      };

      RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RegisterPage);
      /***/
    },

    /***/
    "dymE":
    /*!***************************************************!*\
      !*** ./src/app/login/register/register.module.ts ***!
      \***************************************************/

    /*! exports provided: RegisterPageModule */

    /***/
    function dymE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
        return RegisterPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./register-routing.module */
      "oddf");
      /* harmony import */


      var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./register.page */
      "CpyM");

      var RegisterPageModule = function RegisterPageModule() {
        _classCallCheck(this, RegisterPageModule);
      };

      RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
      })], RegisterPageModule);
      /***/
    },

    /***/
    "hXSr":
    /*!***************************************************!*\
      !*** ./src/app/login/register/register.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function hXSr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".title {\n  font-size: 22px;\n  font-weight: bold;\n}\n\nhr {\n  border-top: 1px solid #E54360;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUNBO0VBQ0UsNkJBQUE7QUFFRiIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGV7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5ociB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRTU0MzYwO1xufVxuIl19 */";
      /***/
    },

    /***/
    "oddf":
    /*!***********************************************************!*\
      !*** ./src/app/login/register/register-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: RegisterPageRoutingModule */

    /***/
    function oddf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function () {
        return RegisterPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./register.page */
      "CpyM");

      var routes = [{
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
      }];

      var RegisterPageRoutingModule = function RegisterPageRoutingModule() {
        _classCallCheck(this, RegisterPageRoutingModule);
      };

      RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RegisterPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=login-register-register-module-es5.js.map