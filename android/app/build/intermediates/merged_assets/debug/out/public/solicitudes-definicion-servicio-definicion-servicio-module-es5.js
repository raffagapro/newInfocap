(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["solicitudes-definicion-servicio-definicion-servicio-module"], {
    /***/
    "AkX/":
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profesional/home/solicitudes/definicion-servicio/definicion-servicio.page.html ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function AkX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/profesional/home/home-tabs/solicitudes/solicitudes-detail\" text=\"\" icon=\"arrow-back\"></ion-back-button>\n      <ion-button class=\"homeBtn\" (click)=\"openMenu()\">\n        <ion-icon name=\"menu\" class=\"homeBtn\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    \n    <ion-title class=\"title-toolbar\">DEFINICIÓN DEL SERVICIO</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- profesional card item -->\n  <div class=\"no-border\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n        <!-- profile img -->\n        <ion-col size=\"4\" offset=\"1\">\n          <ion-avatar class=\"profileImg\">\n            <img src=\"/assets/images/avatar.png\"/>\n          </ion-avatar>\n        </ion-col>\n\n        <!-- title -->\n        <ion-col size=\"6\">\n          <ion-text>\n            <small class=\"ticket\">Ticket #100091234</small><br>\n            <span class=\"titleSelect main-color\">Cerrajería para <br> Juan Alcayaga</span><br>\n            <p class=\"main-color mini-text\" style=\"margin-top: 0; margin-bottom: 0;\">18 nov 2020</p>\n          </ion-text>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <ion-grid>\n\n    <!-- title -->\n    <ion-row>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-icon name=\"build\" class=\"main-color\"></ion-icon>\n        <ion-text class=\"main-color title\"><b> Trabajo requerido</b></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-text class=\"titleText\">Cambio de chapas</ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n    <!-- Slider -->\n    <ion-row class=\"minusMargin\">\n      <ion-col size=\"12\">\n        <ion-slides [options]=\"slideOptions\">\n          <!-- slide -->\n          <ion-slide>\n            <img src=\"/assets/images/unavailable-image.png\" class=\"imgSlide\"/>\n          </ion-slide>\n\n          <!-- slide -->\n          <ion-slide>\n            <img src=\"/assets/images/unavailable-image.png\" class=\"imgSlide\"/>\n          </ion-slide>\n\n          <!-- slide -->\n          <ion-slide>\n            <img src=\"/assets/images/unavailable-image.png\" class=\"imgSlide\"/>\n          </ion-slide>\n\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n\n    <!-- Fecha requerida -->\n    <ion-row>\n      <ion-col size=\"11\">\n        <ion-item>\n          <ion-label class=\"main-color\">\n            <ion-icon name=\"calendar\" slot=\"start\" class=\"main-color\"></ion-icon>\n            <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Fecha requerida</ion-text>\n          </ion-label>\n          <ion-datetime placeholder=\"Definir fecha\"></ion-datetime>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <!-- Rango de horas -->\n\n    <!-- pickers -->\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-item>\n          <ion-label class=\"main-color\">\n            <ion-icon name=\"time\" slot=\"start\" class=\"main-color\"></ion-icon>\n            <ion-text class=\"main-color\">Hora inicial</ion-text>\n          </ion-label>\n          <ion-datetime display-format=\"h:mm A\" picker-format=\"h:mm A\"></ion-datetime>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"5\">\n        <ion-item>\n          <ion-label class=\"main-color\">\n            <ion-icon name=\"time\" slot=\"start\" class=\"main-color\"></ion-icon>\n            <ion-text class=\"main-color\">Hora final</ion-text>\n          </ion-label>\n          <ion-datetime display-format=\"h:mm A\" picker-format=\"h:mm A\"></ion-datetime>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <!-- costo -->\n    <ion-row>\n      <ion-col size=\"11\">\n        <ion-item>\n          <ion-label position=\"floating\">\n            <ion-icon name=\"wallet\" slot=\"start\" class=\"main-color\"></ion-icon>\n            <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Costo</ion-text>\n          </ion-label>\n          <ion-input type=\"text\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <!-- enviar solicitud BTN -->\n    <ion-row class=\"ion-margin-top ion-margin-bottom\">\n      <ion-col size=\"1\"></ion-col>\n      <ion-col>\n        <ion-button size=\"5\" expand=\"block\" class=\"ion-text-uppercase\" (click)=\"confirmRequest()\">\n          ACEPTAR SOLICITUD\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "FLRM":
    /*!**********************************************************************************************!*\
      !*** ./src/app/profesional/home/solicitudes/definicion-servicio/definicion-servicio.page.ts ***!
      \**********************************************************************************************/

    /*! exports provided: DefinicionServicioPage */

    /***/
    function FLRM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefinicionServicioPage", function () {
        return DefinicionServicioPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_definicion_servicio_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./definicion-servicio.page.html */
      "AkX/");
      /* harmony import */


      var _definicion_servicio_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./definicion-servicio.page.scss */
      "jm0d");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _confirm_serv_confirm_serv_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./confirm-serv/confirm-serv.component */
      "/5k1");

      var DefinicionServicioPage = /*#__PURE__*/function () {
        function DefinicionServicioPage(modalController, router, menuController) {
          _classCallCheck(this, DefinicionServicioPage);

          this.modalController = modalController;
          this.router = router;
          this.menuController = menuController;
          this.slideOptions = {
            initialSlide: 0,
            slidesPerView: 2,
            autoplay: true
          };
        }

        _createClass(DefinicionServicioPage, [{
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
              component: _confirm_serv_confirm_serv_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmServComponent"],
              cssClass: 'modalSE'
            }).then(function (modalEl) {
              modalEl.present();
            });
          }
        }]);

        return DefinicionServicioPage;
      }();

      DefinicionServicioPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]
        }];
      };

      DefinicionServicioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-definicion-servicio',
        template: _raw_loader_definicion_servicio_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_definicion_servicio_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DefinicionServicioPage);
      /***/
    },

    /***/
    "Md0a":
    /*!************************************************************************************************!*\
      !*** ./src/app/profesional/home/solicitudes/definicion-servicio/definicion-servicio.module.ts ***!
      \************************************************************************************************/

    /*! exports provided: DefinicionServicioPageModule */

    /***/
    function Md0a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefinicionServicioPageModule", function () {
        return DefinicionServicioPageModule;
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


      var _definicion_servicio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./definicion-servicio-routing.module */
      "ilra");
      /* harmony import */


      var _definicion_servicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./definicion-servicio.page */
      "FLRM");

      var DefinicionServicioPageModule = function DefinicionServicioPageModule() {
        _classCallCheck(this, DefinicionServicioPageModule);
      };

      DefinicionServicioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _definicion_servicio_routing_module__WEBPACK_IMPORTED_MODULE_5__["DefinicionServicioPageRoutingModule"]],
        declarations: [_definicion_servicio_page__WEBPACK_IMPORTED_MODULE_6__["DefinicionServicioPage"]]
      })], DefinicionServicioPageModule);
      /***/
    },

    /***/
    "ilra":
    /*!********************************************************************************************************!*\
      !*** ./src/app/profesional/home/solicitudes/definicion-servicio/definicion-servicio-routing.module.ts ***!
      \********************************************************************************************************/

    /*! exports provided: DefinicionServicioPageRoutingModule */

    /***/
    function ilra(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefinicionServicioPageRoutingModule", function () {
        return DefinicionServicioPageRoutingModule;
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


      var _definicion_servicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./definicion-servicio.page */
      "FLRM");

      var routes = [{
        path: '',
        component: _definicion_servicio_page__WEBPACK_IMPORTED_MODULE_3__["DefinicionServicioPage"]
      }];

      var DefinicionServicioPageRoutingModule = function DefinicionServicioPageRoutingModule() {
        _classCallCheck(this, DefinicionServicioPageRoutingModule);
      };

      DefinicionServicioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DefinicionServicioPageRoutingModule);
      /***/
    },

    /***/
    "jm0d":
    /*!************************************************************************************************!*\
      !*** ./src/app/profesional/home/solicitudes/definicion-servicio/definicion-servicio.page.scss ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jm0d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".no-border {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n\n.profileImg {\n  margin-left: 10px;\n  height: 75px;\n  width: 75px;\n}\n\n.titleSelect {\n  font-size: 19px;\n  font-weight: bold;\n}\n\n.title {\n  font-size: 20px;\n}\n\n.titleText {\n  font-size: 16px;\n}\n\n.imgSlide {\n  height: 125px;\n}\n\n.subtitle {\n  font-size: 18px;\n}\n\n.subText {\n  font-size: 14px;\n}\n\n.minusMargin {\n  margin-top: -25px;\n}\n\n.iconFix {\n  margin-bottom: -3px;\n}\n\n.mini-text {\n  font-size: 14px;\n}\n\n.ticket {\n  color: red;\n  font-size: 12px;\n}\n\n.locate-cont {\n  border-radius: 50px;\n  height: 45px;\n  width: 45px;\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: 5px;\n  background-color: #009ACE;\n}\n\n.bg-green-color {\n  background-color: #2dd36f;\n}\n\n.rating-text {\n  font-size: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  display: inline-flex;\n}\n\n.border {\n  border: 1px solid #009ACE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2RlZmluaWNpb24tc2VydmljaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0JBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUVBO0VBRUksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUVBO0VBRUksZUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0FBRUo7O0FBQUE7RUFDSSxhQUFBO0FBR0o7O0FBREE7RUFDSSxlQUFBO0FBSUo7O0FBRkE7RUFDSSxlQUFBO0FBS0o7O0FBSEE7RUFDSSxpQkFBQTtBQU1KOztBQUpBO0VBQ0ksbUJBQUE7QUFPSjs7QUFMQTtFQUVJLGVBQUE7QUFPSjs7QUFMQTtFQUVJLFVBQUE7RUFDQSxlQUFBO0FBT0o7O0FBTEE7RUFFSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBT0o7O0FBTEE7RUFFSSx5QkFBQTtBQU9KOztBQUxBO0VBRUksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQU9KOztBQUxBO0VBRUkseUJBQUE7QUFPSiIsImZpbGUiOiJkZWZpbmljaW9uLXNlcnZpY2lvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uby1ib3JkZXJcbntcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XG59XG4ucHJvZmlsZUltZ1xue1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGhlaWdodDogNzVweDtcbiAgICB3aWR0aDogNzVweDtcbn1cbi50aXRsZVNlbGVjdFxue1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi50aXRsZXtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbi50aXRsZVRleHR7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuLmltZ1NsaWRle1xuICAgIGhlaWdodDoxMjVweDtcbn1cbi5zdWJ0aXRsZXtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG4uc3ViVGV4dHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4ubWludXNNYXJnaW57XG4gICAgbWFyZ2luLXRvcDogLTI1cHg7XG59XG4uaWNvbkZpeHtcbiAgICBtYXJnaW4tYm90dG9tOiAtM3B4O1xufVxuLm1pbmktdGV4dFxue1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi50aWNrZXRcbntcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5sb2NhdGUtY29udFxue1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDlBQ0U7XG59XG4uYmctZ3JlZW4tY29sb3JcbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmRkMzZmO1xufVxuLnJhdGluZy10ZXh0XG57XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cbi5ib3JkZXJcbntcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA5QUNFO1xufSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=solicitudes-definicion-servicio-definicion-servicio-module-es5.js.map