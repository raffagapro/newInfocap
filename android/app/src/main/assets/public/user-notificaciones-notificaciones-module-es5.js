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


      __webpack_exports__["default"] = ".prof-cont {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n\n.titleSelect {\n  font-size: 16px;\n  font-weight: bold;\n  padding: 5px 20px;\n}\n\n.mt-25 {\n  margin-top: 25px;\n}\n\n.icon-size {\n  margin-top: -3px;\n  font-size: 20px;\n}\n\n.miniText {\n  color: #39ae50;\n}\n\n.red-color {\n  color: #eb445a;\n}\n\n.textSelect {\n  font-size: 10px;\n  line-height: 1.4;\n  margin-bottom: 0;\n}\n\n.ticket {\n  color: #eb445a;\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.locate-cont {\n  margin-top: 5px;\n  border-radius: 50px;\n  height: 30px;\n  width: 30px;\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #009ace;\n}\n\n.rating-text {\n  font-size: 12px;\n  margin-left: auto;\n  margin-right: auto;\n  display: inline-flex;\n}\n\n.ratingText {\n  font-size: 14px;\n  margin: 0;\n  padding: 0;\n  text-align: right;\n  font-weight: bold;\n}\n\n.red-text {\n  color: #eb445a;\n}\n\n.gray-text {\n  color: #757575;\n}\n\n.blue-text {\n  color: #009ace;\n}\n\nion-item {\n  --border-color: transparent !important;\n}\n\n.ion-item-notificaciones {\n  --background: white;\n  --border-color: white;\n}\n\n.marker {\n  position: absolute;\n  top: 5px;\n  right: 20px;\n  width: 10px;\n  height: 10px;\n  background: #bdbdbd;\n  border-radius: 50%;\n}\n\n@media (min-width: 767px) {\n  .marker {\n    right: 20px;\n    top: 0px;\n  }\n}\n\n.icon-bg {\n  background: #009ace;\n  border-radius: 50%;\n  color: #ffffff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vdGlmaWNhY2lvbmVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdFQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUFBO0VBQ0ksZ0JBQUE7QUFHSjs7QUFEQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQUlKOztBQUZBO0VBQ0ksY0FBQTtBQUtKOztBQUhBO0VBQ0ksY0FBQTtBQU1KOztBQUpBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFPSjs7QUFMQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFRSjs7QUFOQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBU0o7O0FBUEE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBVUo7O0FBUkE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBV0o7O0FBVEE7RUFDSSxjQUFBO0FBWUo7O0FBVkE7RUFDSSxjQUFBO0FBYUo7O0FBWEE7RUFDSSxjQUFBO0FBY0o7O0FBWkE7RUFDSSxzQ0FBQTtBQWVKOztBQWJBO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtBQWdCSjs7QUFkQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFpQko7O0FBZkk7RUFUSjtJQVVRLFdBQUE7SUFDQSxRQUFBO0VBa0JOO0FBQ0Y7O0FBZkE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFrQkoiLCJmaWxlIjoibm90aWZpY2FjaW9uZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2YtY29udCB7XG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xufVxuLnRpdGxlU2VsZWN0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogNXB4IDIwcHg7XG59XG4ubXQtMjUge1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG59XG4uaWNvbi1zaXplIHtcbiAgICBtYXJnaW4tdG9wOiAtM3B4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5taW5pVGV4dCB7XG4gICAgY29sb3I6ICMzOWFlNTA7XG59XG4ucmVkLWNvbG9yIHtcbiAgICBjb2xvcjogI2ViNDQ1YTtcbn1cbi50ZXh0U2VsZWN0IHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnRpY2tldCB7XG4gICAgY29sb3I6ICNlYjQ0NWE7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmxvY2F0ZS1jb250IHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDlhY2U7XG59XG4ucmF0aW5nLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG4ucmF0aW5nVGV4dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnJlZC10ZXh0IHtcbiAgICBjb2xvcjogI2ViNDQ1YTtcbn1cbi5ncmF5LXRleHQge1xuICAgIGNvbG9yOiAjNzU3NTc1O1xufVxuLmJsdWUtdGV4dCB7XG4gICAgY29sb3I6ICMwMDlhY2U7XG59XG5pb24taXRlbSB7XG4gICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG4uaW9uLWl0ZW0tbm90aWZpY2FjaW9uZXMge1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgLS1ib3JkZXItY29sb3I6IHdoaXRlO1xufVxuLm1hcmtlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNXB4O1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjYmRiZGJkO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjdweCkge1xuICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgfVxufVxuXG4uaWNvbi1iZyB7XG4gICAgYmFja2dyb3VuZDogIzAwOWFjZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cbiJdfQ== */";
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


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/user/home\" text=\"\" icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title class=\"title-toolbar\">NOTIFICACIONES</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid class=\"ion-margin-top\" *ngIf=\"notifications.length === 0\">\n    <ion-row class=\"subtitle ion-margin-top\">\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <ion-text class=\"footer-text main-color\">No se tienen notificaciones</ion-text>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- notificacion item -->\n  <div class=\"prof-cont mt-25 no-border\" *ngFor=\"let notification of notifications\">\n    <ion-grid>\n      <ion-item-sliding no-lines>\n        <ion-item class=\"ion-no-padding ion-item-notificaciones\" no-lines\n          (click)=\"goToRequestDetail(notification.request_service_id, notification.notification_Id)\">\n          <div class=\"marker\" *ngIf=\"!notification.viewed\">&nbsp;</div>\n          <ion-row class=\"ion-align-items-center\" style=\"width: 100%;\">\n\n            <!-- title -->\n            <ion-col size=\"7\" class=\"ion-justify-content-center\">\n              <ion-text style=\"position: relative;\">\n                <!-- <span class=\"titleSelect main-color\">Cerrajería </span><br> -->\n                <ion-badge color=\"{{notification.type_request !== 'URGENT' ? 'primary' : 'danger'}}\"\n                  class=\"titleSelect\">{{notification.category}}</ion-badge>&nbsp;\n                <ion-icon color=\"primary\" src=\"{{getStatusIcon(notification.status_id)}}\" class=\"icon-size\"\n                  *ngIf=\"notification.type_request === 'NORMAL' && notification.status_id !== 7\"></ion-icon>\n                  <ion-icon name=\"close-outline\" class=\"icon-size icon-bg\"\n                  *ngIf=\"notification.type_request === 'NORMAL' && notification.status_id === 7\"></ion-icon>\n                <ion-icon color=\"danger\" name=\"alert-circle\" class=\"icon-size\"\n                  *ngIf=\"notification.type_request !== 'NORMAL'\"></ion-icon>\n                <p class=\"textSelect {{notification.type_request !== 'NORMAL' ? 'red-color' : ''}}\">\n                  {{notification.professionalName}} {{notification.motive}}\n                </p>\n                <!--<small class=\"main-color\">Cambio de chapas</small>-->\n              </ion-text>\n            </ion-col>\n\n            <!-- rating -->\n            <ion-col size=\"5\" class=\"ion-text-center\">\n              <div class=\"ion-text-end\">\n                <small class=\"ticket\">#{{notification.ticket_number}}</small>\n              </div>\n              <ion-text>\n                <p class=\"ratingText {{notification.type_request !== 'NORMAL' ? 'red-color' : 'main-color'}}\">\n                  {{formatdate(notification.date, notification.hours)}}\n                </p>\n              </ion-text>\n            </ion-col>\n\n          </ion-row>\n        </ion-item>\n        <ion-item-options side=\"end\" no-lines>\n          <ion-item-option color=\"danger\" (click)=\"deleteNotification(notification.notification_Id)\">Eliminar\n          </ion-item-option>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-grid>\n  </div>\n\n  <!-- notificacion item -->\n  <!--\n  <div class=\"prof-cont mt-25 no-border\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n\n        <ion-col size=\"7\" class=\"ion-justify-content-center\">\n          <ion-text>\n            <ion-badge color=\"primary\" class=\"titleSelect\">Soldadura</ion-badge>&nbsp;\n            <ion-icon color=\"medium\" src=\"/assets/icon/ic_engine_disabled.svg\" class=\"icon-size\"></ion-icon><br>\n            <span class=\"textSelect\">\n              La fecha límite de un servicio está por llegar.\n            </span><br>\n            <small class=\"main-color\">Rejas</small>\n          </ion-text>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n\n        <ion-col size=\"4\" class=\"ion-text-center\">\n          <div class=\"ion-text-end\">\n            <small class=\"ticket\">#100091234</small>\n          </div>\n          <ion-text>\n            <small class=\"ratingText main-color ion-text-center\">\n              16 dic 2020\n            </small>\n          </ion-text>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div>\n  -->\n\n  <!-- notificacion item -->\n  <!--\n  <div class=\"prof-cont mt-25 no-border\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n\n        <ion-col size=\"7\" class=\"ion-justify-content-center\">\n          <ion-text>\n            <ion-badge color=\"danger\" class=\"titleSelect\">Cerrajería</ion-badge>&nbsp;\n            <ion-icon color=\"danger\" name=\"alert-circle\" class=\"icon-size\"></ion-icon><br>\n            <span class=\"textSelect\">\n              Santiago Pérez está en busca de un servicio urgente.\n            </span><br>\n            <small class=\"red-color\">Cambio de chapas</small>\n          </ion-text>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n\n        <ion-col size=\"4\" class=\"ion-text-center\">\n          <div class=\"ion-text-end\">\n            <small class=\"ticket\">#100091234</small>\n          </div>\n          <ion-text>\n            <small class=\"ratingText main-color ion-text-center\">\n              16 dic 2020\n            </small>\n          </ion-text>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div>\n  -->\n\n</ion-content>";
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

    /*! exports provided: ERequestStatus, NotificacionesPage */

    /***/
    function f7Op(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ERequestStatus", function () {
        return ERequestStatus;
      });
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! axios */
      "vDqi");
      /* harmony import */


      var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/notifications-service */
      "wBcA");
      /* harmony import */


      var src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/solicitud.service */
      "rLtr");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var ERequestStatus;

      (function (ERequestStatus) {
        ERequestStatus[ERequestStatus["SOLICITUD_ENVIADA"] = 1] = "SOLICITUD_ENVIADA";
        ERequestStatus[ERequestStatus["SOLICITUD_VISITA"] = 2] = "SOLICITUD_VISITA";
        ERequestStatus[ERequestStatus["SERVICIO_ACEPTADO"] = 3] = "SERVICIO_ACEPTADO";
        ERequestStatus[ERequestStatus["SOLICITUD_RECHAZADA"] = 7] = "SOLICITUD_RECHAZADA";
        ERequestStatus[ERequestStatus["SERVICIO_EN_PROCESO"] = 4] = "SERVICIO_EN_PROCESO";
        ERequestStatus[ERequestStatus["SERVICIO_REALIZADO"] = 5] = "SERVICIO_REALIZADO";
        ERequestStatus[ERequestStatus["SERVICIO_FINALIZADO"] = 6] = "SERVICIO_FINALIZADO";
      })(ERequestStatus || (ERequestStatus = {}));

      var NotificacionesPage = /*#__PURE__*/function () {
        function NotificacionesPage(router, menuController, userService, requestService, loadingController, notificationService) {
          _classCallCheck(this, NotificacionesPage);

          this.router = router;
          this.menuController = menuController;
          this.userService = userService;
          this.requestService = requestService;
          this.loadingController = loadingController;
          this.notificationService = notificationService;
          this.notifications = [];
        }

        _createClass(NotificacionesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.userSubscription = this.userService.loggedUser.subscribe(function (user) {
              _this.user = user;

              _this.loadNotifications();
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.menuController.enable(true, "user");
          }
        }, {
          key: "openMenu",
          value: function openMenu() {
            this.menuController.open();
          }
        }, {
          key: "loadNotifications",
          value: function loadNotifications() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var loader, response, data, notificationsData;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingController.create({
                        message: "Cargando tus notificaciones..."
                      });

                    case 2:
                      loader = _context.sent;
                      loader.present();
                      _context.prev = 4;
                      _context.next = 7;
                      return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["API"], "/client/notification"), {
                        headers: {
                          Authorization: "Bearer ".concat(this.user.access_token)
                        }
                      });

                    case 7:
                      response = _context.sent;
                      data = response.data;
                      notificationsData = data.data;
                      this.notifications = notificationsData;
                      _context.next = 16;
                      break;

                    case 13:
                      _context.prev = 13;
                      _context.t0 = _context["catch"](4);
                      alert(_context.t0.message);

                    case 16:
                      _context.prev = 16;
                      loader.dismiss();
                      return _context.finish(16);

                    case 19:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[4, 13, 16, 19]]);
            }));
          }
        }, {
          key: "updateNotification",
          value: function updateNotification(notificationId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var response, data, code, updatedNotifications;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.prev = 0;
                      _context2.next = 3;
                      return axios__WEBPACK_IMPORTED_MODULE_6___default.a.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["API"], "/notification/view/").concat(notificationId), {
                        viewed: 1
                      }, {
                        headers: {
                          Authorization: "Bearer ".concat(this.user.access_token)
                        }
                      });

                    case 3:
                      response = _context2.sent;
                      data = response.data;
                      code = data.code;

                      if (code !== 200) {
                        alert("Error al actualizar la notificación");
                      }

                      updatedNotifications = this.notifications.map(function (notification) {
                        if (notification.notification_Id === notificationId) {
                          notification.viewed = true;
                        }

                        return notification;
                      });
                      this.notificationService.setNotifications(updatedNotifications);
                      _context2.next = 14;
                      break;

                    case 11:
                      _context2.prev = 11;
                      _context2.t0 = _context2["catch"](0);
                      alert(_context2.t0.message);

                    case 14:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[0, 11]]);
            }));
          }
        }, {
          key: "goToRequestDetail",
          value: function goToRequestDetail(solicitudId, notificationId) {
            var redirectToFinished = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.requestService.clearSolicitud();
                      this.requestService.setServiceID(solicitudId);
                      _context3.next = 4;
                      return this.updateNotification(notificationId);

                    case 4:
                      if (redirectToFinished) {
                        this.router.navigate(["/user/solicitud-finished"]);
                      } else {
                        this.router.navigate(["/user/solicitud-status"]);
                      }

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "formatdate",
          value: function formatdate(date, hours) {
            return moment__WEBPACK_IMPORTED_MODULE_7__["utc"]("".concat(date, " ").concat(hours), "DD-MM-YYYY hh:mm:ss").startOf("minute").fromNow();
          }
        }, {
          key: "deleteNotification",
          value: function deleteNotification(notificationId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var loader;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.loadingController.create({
                        message: "Eliminando notificación..."
                      });

                    case 2:
                      loader = _context4.sent;
                      _context4.prev = 3;
                      _context4.next = 6;
                      return loader.present();

                    case 6:
                      _context4.next = 8;
                      return axios__WEBPACK_IMPORTED_MODULE_6___default.a["delete"]("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["API"], "/notification/").concat(notificationId), {
                        headers: {
                          Authorization: "Bearer ".concat(this.user.access_token)
                        }
                      });

                    case 8:
                      _context4.next = 13;
                      break;

                    case 10:
                      _context4.prev = 10;
                      _context4.t0 = _context4["catch"](3);
                      alert(_context4.t0.message);

                    case 13:
                      _context4.prev = 13;
                      _context4.next = 16;
                      return loader.dismiss();

                    case 16:
                      this.loadNotifications();
                      return _context4.finish(13);

                    case 18:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this, [[3, 10, 13, 18]]);
            }));
          }
        }, {
          key: "getStatusIcon",
          value: function getStatusIcon(status) {
            switch (status) {
              case ERequestStatus.SOLICITUD_ENVIADA:
                return '/assets/icon/ic_send.svg';

              case ERequestStatus.SOLICITUD_VISITA:
                return '/assets/icon/ic_send.svg';

              case ERequestStatus.SERVICIO_ACEPTADO:
                return '/assets/icon/ic_calendar_circle.svg';

              case ERequestStatus.SERVICIO_EN_PROCESO:
                return '/assets/icon/ic_engine_blue.svg';

              case ERequestStatus.SERVICIO_REALIZADO:
                return '/assets/icon/ic_engine_blue.svg';

              case ERequestStatus.SERVICIO_FINALIZADO:
                return '/assets/icon/ic_card_blue.svg';

              case ERequestStatus.SOLICITUD_RECHAZADA:
                return '/assets/icon/ic_send.svg';
            }
          }
        }]);

        return NotificacionesPage;
      }();

      NotificacionesPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"]
        }, {
          type: src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_9__["SolicitudService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }, {
          type: src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_8__["NotificationsService"]
        }];
      };

      NotificacionesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-notificaciones",
        template: _raw_loader_notificaciones_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_notificaciones_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NotificacionesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-notificaciones-notificaciones-module-es5.js.map