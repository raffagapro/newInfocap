(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-solicitudes-solicitudes-module"], {
    /***/
    "8+Dq":
    /*!********************************************************!*\
      !*** ./src/app/user/solicitudes/solicitudes.module.ts ***!
      \********************************************************/

    /*! exports provided: SolicitudesPageModule */

    /***/
    function Dq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SolicitudesPageModule", function () {
        return SolicitudesPageModule;
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


      var _solicitudes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./solicitudes-routing.module */
      "GOlj");
      /* harmony import */


      var _solicitudes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./solicitudes.page */
      "HDAO");

      var SolicitudesPageModule = function SolicitudesPageModule() {
        _classCallCheck(this, SolicitudesPageModule);
      };

      SolicitudesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _solicitudes_routing_module__WEBPACK_IMPORTED_MODULE_5__["SolicitudesPageRoutingModule"]],
        declarations: [_solicitudes_page__WEBPACK_IMPORTED_MODULE_6__["SolicitudesPage"]]
      })], SolicitudesPageModule);
      /***/
    },

    /***/
    "GOlj":
    /*!****************************************************************!*\
      !*** ./src/app/user/solicitudes/solicitudes-routing.module.ts ***!
      \****************************************************************/

    /*! exports provided: SolicitudesPageRoutingModule */

    /***/
    function GOlj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SolicitudesPageRoutingModule", function () {
        return SolicitudesPageRoutingModule;
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


      var _solicitudes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./solicitudes.page */
      "HDAO");

      var routes = [{
        path: '',
        component: _solicitudes_page__WEBPACK_IMPORTED_MODULE_3__["SolicitudesPage"]
      }];

      var SolicitudesPageRoutingModule = function SolicitudesPageRoutingModule() {
        _classCallCheck(this, SolicitudesPageRoutingModule);
      };

      SolicitudesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SolicitudesPageRoutingModule);
      /***/
    },

    /***/
    "HDAO":
    /*!******************************************************!*\
      !*** ./src/app/user/solicitudes/solicitudes.page.ts ***!
      \******************************************************/

    /*! exports provided: SolicitudesPage */

    /***/
    function HDAO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SolicitudesPage", function () {
        return SolicitudesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_solicitudes_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./solicitudes.page.html */
      "pIL1");
      /* harmony import */


      var _solicitudes_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./solicitudes.page.scss */
      "TEEc");
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

      var SolicitudesPage = /*#__PURE__*/function () {
        function SolicitudesPage(router, menuController) {
          _classCallCheck(this, SolicitudesPage);

          this.router = router;
          this.menuController = menuController;
        }

        _createClass(SolicitudesPage, [{
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
          key: "solicitudEnviada",
          value: function solicitudEnviada() {
            this.router.navigate(['/user/solicitud-status']);
          }
        }, {
          key: "solicitudInProgress",
          value: function solicitudInProgress() {
            this.router.navigate(['/user/solicitud-detail']);
          }
        }, {
          key: "servAccepted",
          value: function servAccepted() {// this.router.navigate(['/user/solicitud-detail']);
          }
        }, {
          key: "servRealizado",
          value: function servRealizado() {
            this.router.navigate(['/user/servicio-pagar']);
          }
        }, {
          key: "solicitudRechazada",
          value: function solicitudRechazada() {
            this.router.navigate(['/user/solicitud-status']);
          }
        }, {
          key: "solicitudVisita",
          value: function solicitudVisita() {
            this.router.navigate(['/user/visita-detail']);
          }
        }]);

        return SolicitudesPage;
      }();

      SolicitudesPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]
        }];
      };

      SolicitudesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-solicitudes',
        template: _raw_loader_solicitudes_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_solicitudes_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SolicitudesPage);
      /***/
    },

    /***/
    "TEEc":
    /*!********************************************************!*\
      !*** ./src/app/user/solicitudes/solicitudes.page.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function TEEc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".border {\n  border: 1px solid #009ACE;\n  border-radius: 15px;\n  font-size: 12px;\n  height: 35px;\n}\n\n.prof-cont {\n  box-shadow: 1px 8px 12px 0px rgba(0, 0, 0, 0.2);\n}\n\n.no-border {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n\n.profileImg {\n  margin-left: 10px;\n  height: 75px;\n  width: 75px;\n}\n\n.titleSelect {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.badge-text {\n  font-size: 7px;\n}\n\n.textSelect {\n  font-size: 10px;\n  line-height: 0.5;\n}\n\n.ratingText {\n  font-size: 14px;\n  margin: 0;\n  padding: 0;\n}\n\n.locate-cont {\n  margin-top: 5px;\n  border-radius: 50px;\n  height: 30px;\n  width: 30px;\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #009ACE;\n}\n\n.rating-text {\n  font-size: 12px;\n  margin-left: auto;\n  margin-right: auto;\n  display: inline-flex;\n}\n\n.ticket {\n  color: red;\n  font-size: 11px;\n}\n\n.green-color {\n  color: #39AE50;\n}\n\n.bg-green-color {\n  background-color: #39AE50;\n}\n\n.grey-color {\n  color: #8E8C89;\n}\n\n.bg-grey-color {\n  background-color: #8E8C89;\n}\n\n.red-color {\n  color: red;\n}\n\n.bg-red-color {\n  background-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvbGljaXR1ZGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUNBO0VBQ0UsK0NBQUE7QUFFRjs7QUFBQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFHRjs7QUFEQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFJRjs7QUFGQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUtGOztBQUhBO0VBQ0UsY0FBQTtBQU1GOztBQUpBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBT0Y7O0FBTEE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFRRjs7QUFMQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBUUY7O0FBTkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBU0Y7O0FBUEE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQVVGOztBQVJBO0VBQ0UsY0FBQTtBQVdGOztBQVRBO0VBQ0UseUJBQUE7QUFZRjs7QUFUQTtFQUNFLGNBQUE7QUFZRjs7QUFWQTtFQUNFLHlCQUFBO0FBYUY7O0FBVkE7RUFDRSxVQUFBO0FBYUY7O0FBWEE7RUFDRSxxQkFBQTtBQWNGIiwiZmlsZSI6InNvbGljaXR1ZGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3JkZXJ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDlBQ0U7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuLnByb2YtY29udHtcbiAgYm94LXNoYWRvdzogMXB4IDhweCAxMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjApO1xufVxuLm5vLWJvcmRlcntcbiAgcGFkZGluZy10b3A6IDJweDtcbiAgcGFkZGluZy1ib3R0b206IDJweDtcbn1cbi5wcm9maWxlSW1ne1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgaGVpZ2h0OiA3NXB4O1xuICB3aWR0aDogNzVweDtcbn1cbi50aXRsZVNlbGVjdHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5iYWRnZS10ZXh0e1xuICBmb250LXNpemU6IDdweDtcbn1cbi50ZXh0U2VsZWN0e1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAuNTtcbn1cbi5yYXRpbmdUZXh0e1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmxvY2F0ZS1jb250e1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDlBQ0U7XG59XG4ucmF0aW5nLXRleHR7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG4udGlja2V0e1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDExcHg7XG59XG4uZ3JlZW4tY29sb3J7XG4gIGNvbG9yOiAjMzlBRTUwO1xufVxuLmJnLWdyZWVuLWNvbG9ye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzlBRTUwO1xufVxuXG4uZ3JleS1jb2xvcntcbiAgY29sb3I6ICM4RThDODk7XG59XG4uYmctZ3JleS1jb2xvcntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhFOEM4OTtcbn1cblxuLnJlZC1jb2xvcntcbiAgY29sb3I6IHJlZDtcbn1cbi5iZy1yZWQtY29sb3J7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "pIL1":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/solicitudes/solicitudes.page.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function pIL1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/user/home\" text=\"\" icon=\"arrow-back\"></ion-back-button>\n      <ion-button class=\"homeBtn\" (click)=\"openMenu()\">\n        <ion-icon name=\"menu\" class=\"homeBtn\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title class=\"title-toolbar\">ESTADO DE SOLICITUD</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- filter bar -->\n  <ion-grid>\n    <ion-row class=\"ion-margin-top\">\n      <ion-col size=\"10\" offset=\"1\">\n        <ion-item lines=\"none\" class=\"main-color border\">\n          <ion-icon name=\"search\" slot=\"start\" class=\"main-color\"></ion-icon>\n          <ion-input type=\"text\" placeholder=\"Buscar\" class=\"ion-no-padding\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- servicio acceptadp -->\n  <div class=\"prof-cont ion-margin-top no-border\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n\n        <!-- title -->\n        <ion-col size=\"8\" class=\"ion-justify-content-center\">\n          <ion-text>\n            <span class=\"titleSelect main-color\">Juan Alcayaga </span><br>\n            <ion-badge color=\"medium\" class=\"badge-text\">Soldador</ion-badge>&nbsp;\n            <ion-badge color=\"medium\" class=\"badge-text\">Gasfiter</ion-badge><br>\n            <span class=\"textSelect\">\n              Necesito un soldador para realizar una reja perimetral, solo para frontis de casa...\n            </span><br>\n            <small class=\"main-color\">Contactado hace 1 d\xEDa</small>\n          </ion-text>\n        </ion-col>\n\n        <!-- rating -->\n        <ion-col size=\"4\" class=\"ion-text-center\">\n          <div class=\"ion-text-end\">\n            <small class=\"ticket\">Ticket #100091234</small>\n          </div>\n          <ion-text>\n            <!-- icons -->\n            <div class=\"locate-cont\" (click)=\"servAccepted()\">\n              <ion-icon name=\"hammer\" color=\"light\" class=\"rating-text\"></ion-icon>\n            </div><br>\n            <small class=\"ratingText main-color ion-text-center\">\n              SERVICIO ACEPTADO\n            </small>\n          </ion-text>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <!-- solicitud enviada -->\n  <div class=\"prof-cont ion-margin-top no-border\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n\n        <!-- title -->\n        <ion-col size=\"8\" class=\"ion-justify-content-center\">\n          <ion-text>\n            <span class=\"titleSelect main-color\">Cecilia Riquelme </span><br>\n            <ion-badge color=\"medium\" class=\"badge-text\">Soldador</ion-badge>&nbsp;\n            <ion-badge color=\"medium\" class=\"badge-text\">Electrico</ion-badge>&nbsp;\n            <ion-badge color=\"medium\" class=\"badge-text\">Gasfiter</ion-badge><br>\n            <span class=\"textSelect\">\n              Necesito un soldador para realizar una reja perimetral, solo para frontis de casa...\n            </span><br>\n            <small class=\"main-color\">Contactado hace 2 d\xEDas</small>\n          </ion-text>\n        </ion-col>\n\n        <!-- rating -->\n        <ion-col size=\"4\" class=\"ion-text-center\">\n          <div class=\"ion-text-end\">\n            <small class=\"ticket\">Ticket #100091234</small>\n          </div>\n          <ion-text>\n            <!-- icons -->\n            <div class=\"locate-cont\" (click)=\"solicitudEnviada()\">\n              <ion-icon name=\"send\" color=\"light\" class=\"rating-text\"></ion-icon>\n            </div><br>\n            <small class=\"ratingText main-color ion-text-center\">\n              SOLICITUD ENVIADA\n            </small>\n          </ion-text>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <!-- solicitud en proceso -->\n  <div class=\"prof-cont ion-margin-top no-border\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n\n        <!-- title -->\n        <ion-col size=\"8\" class=\"ion-justify-content-center\">\n          <ion-text>\n            <span class=\"titleSelect main-color\">Carlos Cheuqueman </span><br>\n            <ion-badge color=\"medium\" class=\"badge-text\">Soldador</ion-badge>&nbsp;\n            <ion-badge color=\"medium\" class=\"badge-text\">Gasfiter</ion-badge><br>\n            <span class=\"textSelect\">\n              Necesito un soldador para realizar una reja perimetral, solo para frontis de casa...\n            </span><br>\n            <small class=\"main-color\">Contactado hace 2 d\xEDas</small>\n          </ion-text>\n        </ion-col>\n\n        <!-- rating -->\n        <ion-col size=\"4\" class=\"ion-text-center\">\n          <div class=\"ion-text-end\">\n            <small class=\"ticket\">Ticket #100091234</small>\n          </div>\n          <ion-text>\n            <!-- icons -->\n            <div class=\"locate-cont bg-green-color\" (click)=\"solicitudInProgress()\">\n              <ion-icon name=\"build\" color=\"light\" class=\"rating-text\"></ion-icon>\n            </div><br>\n            <small class=\"ratingText green-color ion-text-center\">\n              SERVICIO EN\x0BPROCESO\n            </small>\n          </ion-text>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <!-- servicio realizado -->\n  <div class=\"prof-cont ion-margin-top no-border\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n\n        <!-- title -->\n        <ion-col size=\"8\" class=\"ion-justify-content-center\">\n          <ion-text>\n            <span class=\"titleSelect main-color\">Diego Zapata </span><br>\n            <ion-badge color=\"medium\" class=\"badge-text\">Soldador</ion-badge>&nbsp;\n            <ion-badge color=\"medium\" class=\"badge-text\">Gasfiter</ion-badge><br>\n            <span class=\"textSelect\">\n              Necesito un soldador para realizar una reja perimetral, solo para frontis de casa...\n            </span><br>\n            <small class=\"main-color\">Contactado hace 2 d\xEDas</small>\n          </ion-text>\n        </ion-col>\n\n        <!-- rating -->\n        <ion-col size=\"4\" class=\"ion-text-center\">\n          <div class=\"ion-text-end\">\n            <small class=\"ticket\">Ticket #100091234</small>\n          </div>\n          <ion-text>\n            <!-- icons -->\n            <div class=\"locate-cont bg-grey-color\" (click)=\"servRealizado()\">\n              <ion-icon name=\"build\" color=\"light\" class=\"rating-text\"></ion-icon>\n            </div><br>\n            <small class=\"ratingText grey-color ion-text-center\">\n              SERVICIO REALIZADO\n            </small>\n          </ion-text>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <!-- solicitud rechazada -->\n  <div class=\"prof-cont ion-margin-top no-border\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n\n        <!-- title -->\n        <ion-col size=\"8\" class=\"ion-justify-content-center\">\n          <ion-text>\n            <span class=\"titleSelect main-color\">Franco Pardo </span><br>\n            <ion-badge color=\"medium\" class=\"badge-text\">Soldador</ion-badge>&nbsp;\n            <ion-badge color=\"medium\" class=\"badge-text\">Soldador</ion-badge>&nbsp;\n            <ion-badge color=\"medium\" class=\"badge-text\">Gasfiter</ion-badge><br>\n            <span class=\"textSelect\">\n              Necesito un soldador para realizar una reja perimetral, solo para frontis de casa...\n            </span><br>\n            <small class=\"main-color\">Contactado hace 2 d\xEDas</small>\n          </ion-text>\n        </ion-col>\n\n        <!-- rating -->\n        <ion-col size=\"4\" class=\"ion-text-center\">\n          <div class=\"ion-text-end\">\n            <small class=\"ticket\">Ticket #100091234</small>\n          </div>\n          <ion-text>\n            <!-- icons -->\n            <div class=\"locate-cont bg-red-color\" (click)=\"solicitudRechazada()\">\n              <ion-icon name=\"close\" color=\"light\" class=\"rating-text\"></ion-icon>\n            </div><br>\n            <small class=\"ratingText red-color ion-text-center\">\n              SOLICITUD RECHAZADA\n            </small>\n          </ion-text>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <!-- solicitud visita -->\n  <div class=\"prof-cont ion-margin-top no-border\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n\n        <!-- title -->\n        <ion-col size=\"8\" class=\"ion-justify-content-center\">\n          <ion-text>\n            <span class=\"titleSelect main-color\">Ra\xFAl Parra </span><br>\n            <ion-badge color=\"medium\" class=\"badge-text\">Soldador</ion-badge>&nbsp;\n            <ion-badge color=\"medium\" class=\"badge-text\">Soldador</ion-badge>&nbsp;\n            <ion-badge color=\"medium\" class=\"badge-text\">Gasfiter</ion-badge><br>\n            <span class=\"textSelect\">\n              Necesito un soldador para realizar una reja perimetral, solo para frontis de casa...\n            </span><br>\n            <small class=\"main-color\">Contactado hace 2 d\xEDas</small>\n          </ion-text>\n        </ion-col>\n\n        <!-- rating -->\n        <ion-col size=\"4\" class=\"ion-text-center\">\n          <div class=\"ion-text-end\">\n            <small class=\"ticket\">Ticket #100091234</small>\n          </div>\n          <ion-text>\n            <!-- icons -->\n            <div class=\"locate-cont bg-main-color\" (click)=\"solicitudVisita()\">\n              <ion-icon name=\"calendar\" color=\"light\" class=\"rating-text\"></ion-icon>\n            </div><br>\n            <small class=\"ratingText main-color ion-text-center\">\n              SOLICITUD VISITA\n            </small>\n          </ion-text>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div>\n\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-solicitudes-solicitudes-module-es5.js.map