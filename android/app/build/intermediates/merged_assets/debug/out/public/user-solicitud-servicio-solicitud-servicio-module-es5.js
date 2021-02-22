(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-solicitud-servicio-solicitud-servicio-module"], {
    /***/
    "Pl/+":
    /*!******************************************************************************!*\
      !*** ./src/app/user/solicitud-servicio/solicitud-servicio-routing.module.ts ***!
      \******************************************************************************/

    /*! exports provided: SolicitudServicioPageRoutingModule */

    /***/
    function Pl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SolicitudServicioPageRoutingModule", function () {
        return SolicitudServicioPageRoutingModule;
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


      var _solicitud_servicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./solicitud-servicio.page */
      "X9Te");

      var routes = [{
        path: '',
        component: _solicitud_servicio_page__WEBPACK_IMPORTED_MODULE_3__["SolicitudServicioPage"]
      }];

      var SolicitudServicioPageRoutingModule = function SolicitudServicioPageRoutingModule() {
        _classCallCheck(this, SolicitudServicioPageRoutingModule);
      };

      SolicitudServicioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SolicitudServicioPageRoutingModule);
      /***/
    },

    /***/
    "QWDo":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/solicitud-servicio/solicitud-servicio.page.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function QWDo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/user/profesional-detail\" text=\"\" icon=\"arrow-back\"></ion-back-button>\n      <ion-button class=\"homeBtn\" (click)=\"openMenu()\">\n        <ion-icon name=\"menu\" class=\"homeBtn\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    \n    <ion-title class=\"title-toolbar\">SOLICITUD DE SERVICIO</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- profesional card item -->\n  <div class=\"no-border\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n        <!-- profile img -->\n        <ion-col size=\"4\" offset=\"1\">\n          <ion-avatar class=\"profileImg\">\n            <img src=\"/assets/images/avatar.png\"/>\n          </ion-avatar>\n        </ion-col>\n\n        <!-- title -->\n        <ion-col size=\"7\">\n          <ion-text>\n            <span class=\"titleSelect main-color\">Juan Alcayaga</span><br>\n            <ion-badge color=\"primary\" class=\"badge-text\">Soldador</ion-badge><br>\n            <p class=\"textSelect main-color\" style=\"margin-top: 0; margin-bottom: 0;\">Santiago Qta. normal.</p>\n          </ion-text>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <ion-grid>\n\n    <!-- title -->\n    <ion-row>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-text class=\"main-color title\"><b>Cuéntale al profesional qué necesitas</b></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n    <!-- text-area -->\n    <ion-row class=\"ion-margin-top\">\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"border ion-text-center\">\n        <ion-item lines=\"none\">\n           <ion-textarea rows=\"3\" cols=\"20\" placeholder=\"Describe lo más posible y claro el trabajo, así podremos dar respuesta más rápido.\"></ion-textarea>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n    <!-- text -->\n    <ion-row class=\"ion-margin-top\">\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-text class=\"main-color regText\"><b>Agrega imágenes que ayudarán al profesional a responder mejor a tu solicitud.</b></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n    <!-- images -->\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"4\" offset=\"1\">\n        <img src=\"/assets/images/unavailable-image.png\" class=\"imgSingle\">\n      </ion-col>\n      <ion-col size=\"4\">\n        <img src=\"/assets/images/unavailable-image.png\" class=\"imgSingle\">\n      </ion-col>\n      <ion-col size=\"3\">\n        <div class=\"locate-cont\">\n          <ion-icon name=\"add\" color=\"light\" class=\"rating-text\"></ion-icon>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <!-- Fecha requerida -->\n    <ion-row>\n      <ion-col size=\"11\">\n        <ion-item>\n          <ion-label class=\"main-color\">\n            <ion-icon name=\"calendar\" slot=\"start\" class=\"main-color\"></ion-icon>\n            <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Fecha requerida</ion-text>\n          </ion-label>\n          <ion-datetime placeholder=\"Definir fecha\"></ion-datetime>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <!-- Rango de horas -->\n\n    <!-- pickers -->\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-item>\n          <ion-label class=\"main-color\">\n            <ion-icon name=\"time\" slot=\"start\" class=\"main-color\"></ion-icon>\n            <ion-text class=\"main-color\">Hora inicial</ion-text>\n          </ion-label>\n          <ion-datetime display-format=\"h:mm A\" picker-format=\"h:mm A\"></ion-datetime>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"5\">\n        <ion-item>\n          <ion-label class=\"main-color\">\n            <ion-icon name=\"time\" slot=\"start\" class=\"main-color\"></ion-icon>\n            <ion-text class=\"main-color\">Hora final</ion-text>\n          </ion-label>\n          <ion-datetime display-format=\"h:mm A\" picker-format=\"h:mm A\"></ion-datetime>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <!-- enviar solicitud BTN -->\n    <ion-row class=\"ion-margin-top ion-margin-bottom\">\n      <ion-col size=\"1\"></ion-col>\n      <ion-col>\n        <ion-button size=\"5\" expand=\"block\" class=\"ion-text-uppercase\" (click)=\"confirmRequest()\">\n          CONFIRMAR SOLICITUD\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "X9Te":
    /*!********************************************************************!*\
      !*** ./src/app/user/solicitud-servicio/solicitud-servicio.page.ts ***!
      \********************************************************************/

    /*! exports provided: SolicitudServicioPage */

    /***/
    function X9Te(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SolicitudServicioPage", function () {
        return SolicitudServicioPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_solicitud_servicio_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./solicitud-servicio.page.html */
      "QWDo");
      /* harmony import */


      var _solicitud_servicio_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./solicitud-servicio.page.scss */
      "t/q4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _confirm_success_modal_confirm_success_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./confirm-success-modal/confirm-success-modal.component */
      "00c0");

      var SolicitudServicioPage = /*#__PURE__*/function () {
        function SolicitudServicioPage(modalController, router, menuController) {
          _classCallCheck(this, SolicitudServicioPage);

          this.modalController = modalController;
          this.router = router;
          this.menuController = menuController;
          this.slideOptions = {
            initialSlide: 0,
            slidesPerView: 2,
            autoplay: true
          };
        }

        _createClass(SolicitudServicioPage, [{
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
              component: _confirm_success_modal_confirm_success_modal_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmSuccessModalComponent"],
              cssClass: 'modalSuccess'
            }).then(function (modalEl) {
              modalEl.present();
            });
          }
        }]);

        return SolicitudServicioPage;
      }();

      SolicitudServicioPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
        }];
      };

      SolicitudServicioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-solicitud-servicio',
        template: _raw_loader_solicitud_servicio_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_solicitud_servicio_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SolicitudServicioPage);
      /***/
    },

    /***/
    "Y6vn":
    /*!**********************************************************************!*\
      !*** ./src/app/user/solicitud-servicio/solicitud-servicio.module.ts ***!
      \**********************************************************************/

    /*! exports provided: SolicitudServicioPageModule */

    /***/
    function Y6vn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SolicitudServicioPageModule", function () {
        return SolicitudServicioPageModule;
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


      var _solicitud_servicio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./solicitud-servicio-routing.module */
      "Pl/+");
      /* harmony import */


      var _solicitud_servicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./solicitud-servicio.page */
      "X9Te");

      var SolicitudServicioPageModule = function SolicitudServicioPageModule() {
        _classCallCheck(this, SolicitudServicioPageModule);
      };

      SolicitudServicioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _solicitud_servicio_routing_module__WEBPACK_IMPORTED_MODULE_5__["SolicitudServicioPageRoutingModule"]],
        declarations: [_solicitud_servicio_page__WEBPACK_IMPORTED_MODULE_6__["SolicitudServicioPage"]]
      })], SolicitudServicioPageModule);
      /***/
    },

    /***/
    "t/q4":
    /*!**********************************************************************!*\
      !*** ./src/app/user/solicitud-servicio/solicitud-servicio.page.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function tQ4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".no-border {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n\n.profileImg {\n  margin-left: 10px;\n  height: 75px;\n  width: 75px;\n}\n\n.titleSelect {\n  font-size: 23px;\n  font-weight: bold;\n}\n\n.tittle {\n  font-size: 18px;\n}\n\n.border {\n  border: 1px solid #009ACE;\n}\n\n.regText {\n  font-size: 14px;\n}\n\n.imgSingle {\n  height: 125px;\n}\n\n.locate-cont {\n  border-radius: 50px;\n  height: 50px;\n  width: 50px;\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #009ACE;\n}\n\n.rating-text {\n  font-size: 26px;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvbGljaXR1ZC1zZXJ2aWNpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRUY7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFHRjs7QUFEQTtFQUNFLGVBQUE7QUFJRjs7QUFGQTtFQUNFLHlCQUFBO0FBS0Y7O0FBSEE7RUFDRSxlQUFBO0FBTUY7O0FBSkE7RUFDRSxhQUFBO0FBT0Y7O0FBTEE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBUUY7O0FBTkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVNGIiwiZmlsZSI6InNvbGljaXR1ZC1zZXJ2aWNpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm8tYm9yZGVye1xuICBwYWRkaW5nLXRvcDogMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xufVxuLnByb2ZpbGVJbWd7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBoZWlnaHQ6IDc1cHg7XG4gIHdpZHRoOiA3NXB4O1xufVxuLnRpdGxlU2VsZWN0e1xuICBmb250LXNpemU6IDIzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnRpdHRsZXtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLmJvcmRlcntcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwOUFDRTtcbn1cbi5yZWdUZXh0e1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uaW1nU2luZ2xle1xuICBoZWlnaHQ6IDEyNXB4O1xufVxuLmxvY2F0ZS1jb250e1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5QUNFO1xufVxuLnJhdGluZy10ZXh0e1xuICBmb250LXNpemU6IDI2cHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-solicitud-servicio-solicitud-servicio-module-es5.js.map