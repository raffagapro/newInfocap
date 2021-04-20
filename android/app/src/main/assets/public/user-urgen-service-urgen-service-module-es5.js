(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-urgen-service-urgen-service-module"], {
    /***/
    "1gPL":
    /*!**********************************************************!*\
      !*** ./src/app/user/urgen-service/urgen-service.page.ts ***!
      \**********************************************************/

    /*! exports provided: UrgenServicePage */

    /***/
    function gPL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UrgenServicePage", function () {
        return UrgenServicePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_urgen_service_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./urgen-service.page.html */
      "Nvbu");
      /* harmony import */


      var _urgen_service_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./urgen-service.page.scss */
      "jYV8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _confirm_success_modal_confirm_success_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./confirm-success-modal/confirm-success-modal.component */
      "tnWu");

      var UrgenServicePage = /*#__PURE__*/function () {
        function UrgenServicePage(modalController, menuController) {
          _classCallCheck(this, UrgenServicePage);

          this.modalController = modalController;
          this.menuController = menuController;
        }

        _createClass(UrgenServicePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.menuController.enable(true, 'user');
          }
        }, {
          key: "openMenu",
          value: function openMenu() {
            this.menuController.open();
          }
        }, {
          key: "confirmRequest",
          value: function confirmRequest() {
            this.modalController.create({
              component: _confirm_success_modal_confirm_success_modal_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmSuccessModalComponent"],
              cssClass: 'modalSuccess'
            }).then(function (modalEl) {
              modalEl.present();
            });
          }
        }]);

        return UrgenServicePage;
      }();

      UrgenServicePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
        }];
      };

      UrgenServicePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-urgen-service',
        template: _raw_loader_urgen_service_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_urgen_service_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], UrgenServicePage);
      /***/
    },

    /***/
    "9r3M":
    /*!********************************************************************!*\
      !*** ./src/app/user/urgen-service/urgen-service-routing.module.ts ***!
      \********************************************************************/

    /*! exports provided: UrgenServicePageRoutingModule */

    /***/
    function r3M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UrgenServicePageRoutingModule", function () {
        return UrgenServicePageRoutingModule;
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


      var _urgen_service_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./urgen-service.page */
      "1gPL");

      var routes = [{
        path: '',
        component: _urgen_service_page__WEBPACK_IMPORTED_MODULE_3__["UrgenServicePage"]
      }];

      var UrgenServicePageRoutingModule = function UrgenServicePageRoutingModule() {
        _classCallCheck(this, UrgenServicePageRoutingModule);
      };

      UrgenServicePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UrgenServicePageRoutingModule);
      /***/
    },

    /***/
    "Nvbu":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/urgen-service/urgen-service.page.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Nvbu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"danger\">\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/user/profesional-detail\" text=\"\" icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n    \n    <ion-title class=\"title-toolbar\">SOLICITUD URGENTE</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n\n    <!-- text -->\n    <ion-row class=\"ion-margin-top\">\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-text class=\"regText\">\n          Esta solicitud  es de carácter urgente y será enviada a los 10 profesionales mejor catalogados para que puedan atender tu solicitud lo antes posible.\n        </ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n    <!-- title -->\n    <ion-row>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-text class=\"title\" color=\"danger\"><b>Cuéntanos ¿Cuál es la solicitud del trabajo?</b></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n    <!-- text-area -->\n    <ion-row class=\"ion-margin-top\">\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"border ion-text-center\">\n        <ion-item lines=\"none\">\n           <ion-textarea rows=\"3\" cols=\"20\" placeholder=\"Describe lo más posible y claro el trabajo, así podremos dar respuesta más rápido.\"></ion-textarea>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n    <!-- text -->\n    <ion-row class=\"ion-margin-top\">\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-text color=\"danger\" class=\"regText\"><b>Agrega imágenes que ayudarán al profesional a responder mejor a tu solicitud.</b></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n    <!-- images -->\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"4\" offset=\"1\">\n        <img src=\"/assets/images/unavailable-image.png\" class=\"imgSingle\">\n      </ion-col>\n      <ion-col size=\"4\">\n        <img src=\"/assets/images/unavailable-image.png\" class=\"imgSingle\">\n      </ion-col>\n      <ion-col size=\"3\">\n        <div class=\"locate-cont\">\n          <ion-icon name=\"add\" color=\"light\" class=\"rating-text\"></ion-icon>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <!-- Fecha requerida -->\n    <ion-row>\n      <ion-col size=\"11\">\n        <ion-item>\n          <ion-label>\n            <ion-icon name=\"calendar\" slot=\"start\" color=\"danger\"></ion-icon>\n            <ion-text color=\"danger\">&nbsp;&nbsp;&nbsp;Fecha requerida</ion-text>\n          </ion-label>\n          <ion-datetime placeholder=\"Definir fecha\"></ion-datetime>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <!-- Rango de horas -->\n\n    <!-- pickers -->\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-item>\n          <ion-label>\n            <ion-icon name=\"time\" slot=\"start\" color=\"danger\"></ion-icon>\n            &nbsp;\n            <ion-text color=\"danger\">Hora inicial</ion-text>\n          </ion-label>\n          <ion-datetime display-format=\"h:mm A\" picker-format=\"h:mm A\"></ion-datetime>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"6\">\n        <ion-item>\n          <ion-label>\n            <ion-icon name=\"time\" slot=\"start\" color=\"danger\"></ion-icon>\n            &nbsp;\n            <ion-text color=\"danger\">Hora final</ion-text>\n          </ion-label>\n          <ion-datetime display-format=\"h:mm A\" picker-format=\"h:mm A\"></ion-datetime>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <!-- enviar solicitud BTN -->\n    <ion-row class=\"ion-margin-top ion-margin-bottom\">\n      <ion-col size=\"1\"></ion-col>\n      <ion-col>\n        <ion-button size=\"5\" expand=\"block\" class=\"ion-text-uppercase\" color=\"danger\" (click)=\"confirmRequest()\">\n          CONFIRMAR SOLICITUD\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "bSEB":
    /*!************************************************************!*\
      !*** ./src/app/user/urgen-service/urgen-service.module.ts ***!
      \************************************************************/

    /*! exports provided: UrgenServicePageModule */

    /***/
    function bSEB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UrgenServicePageModule", function () {
        return UrgenServicePageModule;
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


      var _urgen_service_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./urgen-service-routing.module */
      "9r3M");
      /* harmony import */


      var _urgen_service_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./urgen-service.page */
      "1gPL");

      var UrgenServicePageModule = function UrgenServicePageModule() {
        _classCallCheck(this, UrgenServicePageModule);
      };

      UrgenServicePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _urgen_service_routing_module__WEBPACK_IMPORTED_MODULE_5__["UrgenServicePageRoutingModule"]],
        declarations: [_urgen_service_page__WEBPACK_IMPORTED_MODULE_6__["UrgenServicePage"]]
      })], UrgenServicePageModule);
      /***/
    },

    /***/
    "jYV8":
    /*!************************************************************!*\
      !*** ./src/app/user/urgen-service/urgen-service.page.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function jYV8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".no-border {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n\n.profileImg {\n  margin-left: 10px;\n  height: 75px;\n  width: 75px;\n}\n\n.titleSelect {\n  font-size: 23px;\n  font-weight: bold;\n}\n\n.tittle {\n  font-size: 18px;\n}\n\n.border {\n  border: 1px solid red;\n}\n\n.regText {\n  font-size: 14px;\n}\n\n.imgSingle {\n  height: 125px;\n}\n\n.locate-cont {\n  border-radius: 50px;\n  height: 50px;\n  width: 50px;\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: red;\n}\n\n.rating-text {\n  font-size: 26px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nion-item {\n  --border-color: var(--ion-color-danger, red);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3VyZ2VuLXNlcnZpY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUFFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBR0o7O0FBREU7RUFDRSxlQUFBO0FBSUo7O0FBRkU7RUFDRSxxQkFBQTtBQUtKOztBQUhFO0VBQ0UsZUFBQTtBQU1KOztBQUpFO0VBQ0UsYUFBQTtBQU9KOztBQUxFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQVFKOztBQU5FO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFTSjs7QUFQRTtFQUNFLDRDQUFBO0FBVUoiLCJmaWxlIjoidXJnZW4tc2VydmljZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm8tYm9yZGVye1xuICAgIHBhZGRpbmctdG9wOiAycHg7XG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgfVxuICAucHJvZmlsZUltZ3tcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgd2lkdGg6IDc1cHg7XG4gIH1cbiAgLnRpdGxlU2VsZWN0e1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAudGl0dGxle1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICAuYm9yZGVye1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgfVxuICAucmVnVGV4dHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLmltZ1NpbmdsZXtcbiAgICBoZWlnaHQ6IDEyNXB4O1xuICB9XG4gIC5sb2NhdGUtY29udHtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICB9XG4gIC5yYXRpbmctdGV4dHtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG4gIGlvbi1pdGVtIHtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlciwgcmVkKTtcbiAgfVxuICAiXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-urgen-service-urgen-service-module-es5.js.map