(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-notificaciones-notificaciones-module"], {
    /***/
    "3f15":
    /*!**************************************************************!*\
      !*** ./src/app/user/notificaciones/notificaciones.page.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function f15(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".prof-cont {\n  box-shadow: 1px 8px 12px 0px rgba(0, 0, 0, 0.2);\n}\n\n.titleSelect {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.icon-size {\n  margin-top: -3px;\n  font-size: 20px;\n}\n\n.miniText {\n  color: #39AE50;\n}\n\n.red-color {\n  color: red;\n}\n\n.textSelect {\n  font-size: 10px;\n  line-height: 0.5;\n}\n\n.ticket {\n  color: red;\n  font-size: 11px;\n}\n\n.locate-cont {\n  margin-top: 5px;\n  border-radius: 50px;\n  height: 30px;\n  width: 30px;\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #009ACE;\n}\n\n.rating-text {\n  font-size: 12px;\n  margin-left: auto;\n  margin-right: auto;\n  display: inline-flex;\n}\n\n.ratingText {\n  font-size: 14px;\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vdGlmaWNhY2lvbmVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLCtDQUFBO0FBQUo7O0FBRUE7RUFFSSxlQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFFQTtFQUVJLGdCQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUVBO0VBRUksY0FBQTtBQUFKOztBQUVBO0VBRUksVUFBQTtBQUFKOztBQUVBO0VBRUksZUFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBRUE7RUFFSSxVQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUVBO0VBRUksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFBSjs7QUFFQTtFQUVJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFBSjs7QUFFQTtFQUVJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUFKIiwiZmlsZSI6Im5vdGlmaWNhY2lvbmVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9mLWNvbnRcbntcbiAgICBib3gtc2hhZG93OiAxcHggOHB4IDEycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yMCk7XG59XG4udGl0bGVTZWxlY3RcbntcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uaWNvbi1zaXplXG57XG4gICAgbWFyZ2luLXRvcDogLTNweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG4ubWluaVRleHRcbntcbiAgICBjb2xvcjogIzM5QUU1MDtcbn1cbi5yZWQtY29sb3JcbntcbiAgICBjb2xvcjpyZWQ7XG59XG4udGV4dFNlbGVjdFxue1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBsaW5lLWhlaWdodDogLjU7XG59XG4udGlja2V0XG57XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXNpemU6IDExcHg7XG59XG4ubG9jYXRlLWNvbnRcbntcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDlBQ0U7XG59XG4ucmF0aW5nLXRleHRcbntcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuLnJhdGluZ1RleHRcbntcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59Il19 */";
      /***/
    },

    /***/
    "4hak":
    /*!**************************************************************!*\
      !*** ./src/app/user/notificaciones/notificaciones.module.ts ***!
      \**************************************************************/

    /*! exports provided: NotificacionesPageModule */

    /***/
    function hak(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificacionesPageModule", function () {
        return NotificacionesPageModule;
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


      var _notificaciones_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./notificaciones-routing.module */
      "KVSi");
      /* harmony import */


      var _notificaciones_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./notificaciones.page */
      "f7Op");

      var NotificacionesPageModule = function NotificacionesPageModule() {
        _classCallCheck(this, NotificacionesPageModule);
      };

      NotificacionesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _notificaciones_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificacionesPageRoutingModule"]],
        declarations: [_notificaciones_page__WEBPACK_IMPORTED_MODULE_6__["NotificacionesPage"]]
      })], NotificacionesPageModule);
      /***/
    },

    /***/
    "IeO5":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/notificaciones/notificaciones.page.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function IeO5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/user/home\" text=\"\" icon=\"arrow-back\"></ion-back-button>\n      <ion-button class=\"homeBtn\" (click)=\"openMenu()\">\n        <ion-icon name=\"menu\" class=\"homeBtn\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title class=\"title-toolbar\">NOTIFICACIONES</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- notificacion item -->\n  <div class=\"prof-cont ion-margin-top no-border\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n\n        <!-- title -->\n        <ion-col size=\"8\" class=\"ion-justify-content-center\">\n          <ion-text>\n            <!-- <span class=\"titleSelect main-color\">Cerrajería </span><br> -->\n            <ion-badge color=\"primary\" class=\"titleSelect\">Cerrajería</ion-badge>&nbsp;\n            <ion-icon color=\"primary\" name=\"calendar\" class=\"icon-size\"></ion-icon><br>\n            <span class=\"textSelect\">\n              Juan Alcayaga ha agendado una visita de valoración.\n            </span><br>\n            <small class=\"main-color\">Cambio de chapas</small>\n          </ion-text>\n        </ion-col>\n\n        <!-- rating -->\n        <ion-col size=\"4\" class=\"ion-text-center\">\n          <div class=\"ion-text-end\">\n            <small class=\"ticket\">Ticket #100091234</small>\n          </div>\n          <ion-text>\n            <small class=\"ratingText main-color ion-text-center\">\n              16 dic 2020\n            </small>\n          </ion-text>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div>\n\n   <!-- notificacion item -->\n   <div class=\"prof-cont ion-margin-top no-border\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n\n        <!-- title -->\n        <ion-col size=\"8\" class=\"ion-justify-content-center\">\n          <ion-text>\n            <!-- <span class=\"titleSelect main-color\">Cerrajería </span><br> -->\n            <ion-badge color=\"primary\" class=\"titleSelect\">Soldadura</ion-badge>&nbsp;\n            <ion-icon color=\"medium\" name=\"checkmark-circle\" class=\"icon-size\"></ion-icon><br>\n            <span class=\"textSelect\">\n              Santiago Pérez ha finalizado el servicio otorgado.\n            </span><br>\n            <small class=\"miniText\">Se ha realizado el cargo a su tarjeta.</small>\n          </ion-text>\n        </ion-col>\n\n        <!-- rating -->\n        <ion-col size=\"4\" class=\"ion-text-center\">\n          <div class=\"ion-text-end\">\n            <small class=\"ticket\">Ticket #100091234</small>\n          </div>\n          <ion-text>\n            <small class=\"ratingText main-color ion-text-center\">\n              16 dic 2020\n            </small>\n          </ion-text>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div>\n\n   <!-- notificacion item -->\n   <div class=\"prof-cont ion-margin-top no-border\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n\n        <!-- title -->\n        <ion-col size=\"8\" class=\"ion-justify-content-center\">\n          <ion-text>\n            <!-- <span class=\"titleSelect main-color\">Cerrajería </span><br> -->\n            <ion-badge color=\"danger\" class=\"titleSelect\">Cerrajería</ion-badge>&nbsp;\n            <ion-icon color=\"danger\" name=\"alert-circle\" class=\"icon-size\"></ion-icon><br>\n            <span class=\"textSelect\">\n              Juan Alcayaga ha aceptado el servicio urgente que ha solicitado.\n            </span><br>\n            <small class=\"red-color\">Cambio de chapas</small>\n          </ion-text>\n        </ion-col>\n\n        <!-- rating -->\n        <ion-col size=\"4\" class=\"ion-text-center\">\n          <div class=\"ion-text-end\">\n            <small class=\"ticket\">Ticket #100091234</small>\n          </div>\n          <ion-text>\n            <small class=\"ratingText main-color ion-text-center\">\n              16 dic 2020\n            </small>\n          </ion-text>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "KVSi":
    /*!**********************************************************************!*\
      !*** ./src/app/user/notificaciones/notificaciones-routing.module.ts ***!
      \**********************************************************************/

    /*! exports provided: NotificacionesPageRoutingModule */

    /***/
    function KVSi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificacionesPageRoutingModule", function () {
        return NotificacionesPageRoutingModule;
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


      var _notificaciones_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./notificaciones.page */
      "f7Op");

      var routes = [{
        path: '',
        component: _notificaciones_page__WEBPACK_IMPORTED_MODULE_3__["NotificacionesPage"]
      }];

      var NotificacionesPageRoutingModule = function NotificacionesPageRoutingModule() {
        _classCallCheck(this, NotificacionesPageRoutingModule);
      };

      NotificacionesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NotificacionesPageRoutingModule);
      /***/
    },

    /***/
    "f7Op":
    /*!************************************************************!*\
      !*** ./src/app/user/notificaciones/notificaciones.page.ts ***!
      \************************************************************/

    /*! exports provided: NotificacionesPage */

    /***/
    function f7Op(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificacionesPage", function () {
        return NotificacionesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_notificaciones_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./notificaciones.page.html */
      "IeO5");
      /* harmony import */


      var _notificaciones_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./notificaciones.page.scss */
      "3f15");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var NotificacionesPage = /*#__PURE__*/function () {
        function NotificacionesPage(menuController) {
          _classCallCheck(this, NotificacionesPage);

          this.menuController = menuController;
        }

        _createClass(NotificacionesPage, [{
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
        }]);

        return NotificacionesPage;
      }();

      NotificacionesPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
        }];
      };

      NotificacionesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-notificaciones',
        template: _raw_loader_notificaciones_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_notificaciones_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NotificacionesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-notificaciones-notificaciones-module-es5.js.map