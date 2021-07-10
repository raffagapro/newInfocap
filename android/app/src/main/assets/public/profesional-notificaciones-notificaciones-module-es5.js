(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profesional-notificaciones-notificaciones-module"], {
    /***/
    "4Ekm":
    /*!*******************************************************************!*\
      !*** ./src/app/profesional/notificaciones/notificaciones.page.ts ***!
      \*******************************************************************/

    /*! exports provided: NotificacionesPage */

    /***/
    function Ekm(module, __webpack_exports__, __webpack_require__) {
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
      "88g+");
      /* harmony import */


      var _notificaciones_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./notificaciones.page.scss */
      "s4GU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! axios */
      "vDqi");
      /* harmony import */


      var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/notifications-service */
      "wBcA");
      /* harmony import */


      var src_app_services_pro_solicitud_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/pro-solicitud.service */
      "zMwU");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);

      var NotificacionesPage = /*#__PURE__*/function () {
        function NotificacionesPage(router, menuController, us, loadingController, solicitudServicio, notificationService, route) {
          var _this = this;

          _classCallCheck(this, NotificacionesPage);

          this.router = router;
          this.menuController = menuController;
          this.us = us;
          this.loadingController = loadingController;
          this.solicitudServicio = solicitudServicio;
          this.notificationService = notificationService;
          this.notifications = [];
          route.params.subscribe(function (val) {
            _this.userSub = _this.us.loggedUser.subscribe(function (user) {
              _this.grabbedUser = user;
              _this.headers = 'Bearer ' + _this.grabbedUser.access_token;

              _this.loadNotifications();
            });
          });
        }

        _createClass(NotificacionesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
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
                        message: 'Cargando tus notificaciones...'
                      });

                    case 2:
                      loader = _context.sent;
                      loader.present();
                      _context.prev = 4;
                      _context.next = 7;
                      return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["API"], "/supplier/notification"), {
                        headers: {
                          Authorization: "Bearer ".concat(this.grabbedUser.access_token)
                        }
                      });

                    case 7:
                      response = _context.sent;
                      data = response.data;
                      notificationsData = data.data;
                      this.notifications = notificationsData;
                      this.notifications = lodash__WEBPACK_IMPORTED_MODULE_12__["orderBy"](this.notifications, ['notification_Id'], ['desc', 'asc']);
                      _context.next = 17;
                      break;

                    case 14:
                      _context.prev = 14;
                      _context.t0 = _context["catch"](4);
                      console.log(_context.t0);

                    case 17:
                      _context.prev = 17;
                      loader.dismiss();
                      return _context.finish(17);

                    case 20:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[4, 14, 17, 20]]);
            }));
          }
        }, {
          key: "goToRequestDetail",
          value: function goToRequestDetail(solicitudId, notificationId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      axios__WEBPACK_IMPORTED_MODULE_7___default.a.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["API"] + "/notification/view/".concat(notificationId), {
                        viewed: 1
                      }, {
                        headers: {
                          Authorization: "Bearer ".concat(this.grabbedUser.access_token)
                        }
                      }).then(function (resData) {
                        _this2.solicitudServicio.setID(solicitudId);

                        var updatedNotifications = _this2.notifications.map(function (notification) {
                          if (notification.notification_Id === notificationId) {
                            notification.viewed = true;
                          }

                          return notification;
                        });

                        _this2.notificationService.setNotifications(updatedNotifications);

                        _this2.router.navigate(['profesional/agendados/agendados-detail']);
                      })["catch"](function (err) {
                        console.log(err);
                      });

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "deleteNotification",
          value: function deleteNotification(notificationId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var loader;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.loadingController.create({
                        message: 'Eliminando notificación...'
                      });

                    case 2:
                      loader = _context3.sent;
                      _context3.prev = 3;
                      _context3.next = 6;
                      return loader.present();

                    case 6:
                      _context3.next = 8;
                      return axios__WEBPACK_IMPORTED_MODULE_7___default.a["delete"]("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["API"], "/notification/").concat(notificationId), {
                        headers: {
                          Authorization: "Bearer ".concat(this.grabbedUser.access_token)
                        }
                      });

                    case 8:
                      _context3.next = 13;
                      break;

                    case 10:
                      _context3.prev = 10;
                      _context3.t0 = _context3["catch"](3);
                      console.log(_context3.t0);

                    case 13:
                      _context3.prev = 13;
                      _context3.next = 16;
                      return loader.dismiss();

                    case 16:
                      this.loadNotifications();
                      return _context3.finish(13);

                    case 18:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[3, 10, 13, 18]]);
            }));
          }
        }, {
          key: "validationName",
          value: function validationName(customerName, supplierName, status, prodId) {
            if (status !== 1) {
              if (supplierName !== 'No definido') {
                return supplierName;
              }
            } else {
              return customerName;
            }
          }
        }, {
          key: "formatMotivo",
          value: function formatMotivo(type, status, motive) {
            if (type === 'NORMAL') {
              motive = motive.replace('Se genero', 'generó');
              return motive;
            } else {
              if (status === 1) {
                return ' ha generado una solicitud urgente, por favor atiéndela, si no puedes, no olvides rechazar.';
              } else {
                return motive;
              }
            }
          }
        }, {
          key: "formatdate",
          value: function formatdate(date, hours) {
            return moment__WEBPACK_IMPORTED_MODULE_11__["utc"]("".concat(date, " ").concat(hours), 'DD-MM-YYYY hh:mm:ss').startOf('minute').fromNow();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.menuController.enable(true, 'profesional');
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
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: src_app_services_pro_solicitud_service__WEBPACK_IMPORTED_MODULE_10__["ProSolicitudService"]
        }, {
          type: src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_9__["NotificationsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }];
      };

      NotificacionesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-notificaciones',
        template: _raw_loader_notificaciones_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_notificaciones_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NotificacionesPage);
      /***/
    },

    /***/
    "83Lf":
    /*!*****************************************************************************!*\
      !*** ./src/app/profesional/notificaciones/notificaciones-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: NotificacionesPageRoutingModule */

    /***/
    function Lf(module, __webpack_exports__, __webpack_require__) {
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
      "4Ekm");

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
    "88g+":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profesional/notificaciones/notificaciones.page.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/profesional/home\" text=\"\" icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title class=\"title-toolbar\">NOTIFICACIONES</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid fixed *ngIf=\"notifications.length === 0\">\n    <ion-row class=\"ion-margin-top\">\n      <ion-col size=\"11\" class=\"ion-text-left\">\n        <ion-text class=\"title main-color\"><b>Aún no tienes notificaciones</b></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- notificacion item -->\n  <div class=\"prof-cont mt-25 no-border\" *ngFor=\"let notification of notifications\">\n    <ion-grid>\n      <ion-item-sliding no-lines>\n        <ion-item class=\"ion-no-padding ion-item-notificaciones\" no-lines\n          (click)=\"goToRequestDetail(notification.request_service_id, notification.notification_Id)\">\n          <div class=\"marker\" *ngIf=\"!notification.viewed\">&nbsp;</div>\n          <ion-grid>\n            <ion-row class=\"ion-align-items-center\">\n              <!-- title -->\n              <ion-col size=\"8\" class=\"ion-justify-content-center\">\n                <ion-text>\n                  <!-- <span class=\"titleSelect main-color\">Cerrajería </span><br> -->\n                  <ion-badge *ngIf=\"notification.type_request === 'NORMAL'\" color=\"primary\" class=\"titleSelect\">{{notification.category}}</ion-badge>\n                  <ion-badge *ngIf=\"notification.type_request !== 'NORMAL'\" color=\"danger\" class=\"titleSelect\">{{notification.category}}</ion-badge>&nbsp;\n                  <ion-icon color=\"primary\" src=\"/assets/icon/ic_date_range.svg\" class=\"icon-size\"\n                    *ngIf=\"notification.type_request === 'NORMAL' && notification.status_id == 1\"></ion-icon>\n                  <ion-icon color=\"primary\" src=\"/assets/icon/ic_engine_disabled.svg\" class=\"icon-size\"\n                    *ngIf=\"notification.type_request === 'NORMAL' && notification.status_id > 1\"></ion-icon>\n                  <ion-icon color=\"danger\" name=\"alert-circle\" class=\"icon-size\"\n                    *ngIf=\"notification.type_request !== 'NORMAL'\"></ion-icon>\n                  <p class=\"textSelect {{notification.type_request !== 'NORMAL' ? 'red-color' : ''}}\">\n                    {{ validationName(notification.customerName, notification.professionalName,\n                    notification.status_id, notification.professional_id)\n                    }} {{ formatMotivo(notification.type_request, notification.status_id, notification.motive ) }}\n                  </p>\n                  <!--<small class=\"main-color\">Cambio de chapas</small>-->\n                </ion-text>\n              </ion-col>\n\n              <!-- rating -->\n              <ion-col size=\"4\" class=\"text-center\">\n                <div class=\"ion-text-end\">\n                  <small class=\"ticket\">#{{notification.ticket_number}}</small>\n                </div>\n                <ion-text>\n                  <p class=\"ratingText main-color\">\n                    {{formatdate(notification.date, notification.hours)}}\n                  </p>\n                </ion-text>\n              </ion-col>\n\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n        <ion-item-options side=\"end\" no-lines>\n          <ion-item-option color=\"danger\" (click)=\"deleteNotification(notification.notification_Id)\">Eliminar\n          </ion-item-option>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-grid>\n  </div>\n\n  <!-- notificacion item -->\n  <!--\n  <div class=\"prof-cont mt-25 no-border\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n\n        <ion-col size=\"7\" class=\"ion-justify-content-center\">\n          <ion-text>\n            <ion-badge color=\"primary\" class=\"titleSelect\">Soldadura</ion-badge>&nbsp;\n            <ion-icon color=\"medium\" src=\"/assets/icon/ic_engine_disabled.svg\" class=\"icon-size\"></ion-icon><br>\n            <span class=\"textSelect\">\n              La fecha límite de un servicio está por llegar.\n            </span><br>\n            <small class=\"main-color\">Rejas</small>\n          </ion-text>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n\n        <ion-col size=\"4\" class=\"ion-text-center\">\n          <div class=\"ion-text-end\">\n            <small class=\"ticket\">#100091234</small>\n          </div>\n          <ion-text>\n            <small class=\"ratingText main-color ion-text-center\">\n              16 dic 2020\n            </small>\n          </ion-text>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div>\n  -->\n\n  <!-- notificacion item -->\n  <!--\n  <div class=\"prof-cont mt-25 no-border\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n\n        <ion-col size=\"7\" class=\"ion-justify-content-center\">\n          <ion-text>\n            <ion-badge color=\"danger\" class=\"titleSelect\">Cerrajería</ion-badge>&nbsp;\n            <ion-icon color=\"danger\" name=\"alert-circle\" class=\"icon-size\"></ion-icon><br>\n            <span class=\"textSelect\">\n              Santiago Pérez está en busca de un servicio urgente.\n            </span><br>\n            <small class=\"red-color\">Cambio de chapas</small>\n          </ion-text>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n\n        <ion-col size=\"4\" class=\"ion-text-center\">\n          <div class=\"ion-text-end\">\n            <small class=\"ticket\">#100091234</small>\n          </div>\n          <ion-text>\n            <small class=\"ratingText main-color ion-text-center\">\n              16 dic 2020\n            </small>\n          </ion-text>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div>\n  -->\n\n</ion-content>";
      /***/
    },

    /***/
    "q60K":
    /*!*********************************************************************!*\
      !*** ./src/app/profesional/notificaciones/notificaciones.module.ts ***!
      \*********************************************************************/

    /*! exports provided: NotificacionesPageModule */

    /***/
    function q60K(module, __webpack_exports__, __webpack_require__) {
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
      "83Lf");
      /* harmony import */


      var _notificaciones_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./notificaciones.page */
      "4Ekm");

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
    "s4GU":
    /*!*********************************************************************!*\
      !*** ./src/app/profesional/notificaciones/notificaciones.page.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function s4GU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".prof-cont {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n\n.title {\n  font-size: 17px;\n}\n\n.titleSelect {\n  font-size: 16px;\n  font-weight: bold;\n  padding: 5px 20px;\n}\n\n.mt-25 {\n  margin-top: 25px;\n}\n\n.icon-size {\n  margin-top: -3px;\n  font-size: 20px;\n}\n\n.miniText {\n  color: #39ae50;\n}\n\n.red-color {\n  color: #eb445a;\n}\n\n.textSelect {\n  font-size: 10px;\n  line-height: 1.4;\n  margin-bottom: 0;\n}\n\n.ticket {\n  color: #eb445a;\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.locate-cont {\n  margin-top: 5px;\n  border-radius: 50px;\n  height: 30px;\n  width: 30px;\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #009ace;\n}\n\n.rating-text {\n  font-size: 12px;\n  margin-left: auto;\n  margin-right: auto;\n  display: inline-flex;\n}\n\n.ratingText {\n  font-size: 14px;\n  margin: 0;\n  padding: 0;\n  text-align: right;\n  font-weight: bold;\n}\n\n.red-text {\n  color: #eb445a;\n}\n\n.gray-text {\n  color: #757575;\n}\n\n.blue-text {\n  color: #009ace;\n}\n\nion-item {\n  --border-color: transparent !important;\n}\n\n.ion-item-notificaciones {\n  --background: white;\n  --border-color: white;\n}\n\n.marker {\n  position: absolute;\n  top: 5px;\n  right: 20px;\n  width: 10px;\n  height: 10px;\n  background: #bdbdbd;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vdGlmaWNhY2lvbmVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdFQUFBO0FBQ0o7O0FBQ0E7RUFFSSxlQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUFBO0VBQ0ksZ0JBQUE7QUFHSjs7QUFEQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQUlKOztBQUZBO0VBQ0ksY0FBQTtBQUtKOztBQUhBO0VBQ0ksY0FBQTtBQU1KOztBQUpBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFPSjs7QUFMQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFRSjs7QUFOQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBU0o7O0FBUEE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBVUo7O0FBUkE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBV0o7O0FBVEE7RUFDSSxjQUFBO0FBWUo7O0FBVkE7RUFDSSxjQUFBO0FBYUo7O0FBWEE7RUFDSSxjQUFBO0FBY0o7O0FBWkE7RUFDSSxzQ0FBQTtBQWVKOztBQWJBO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtBQWdCSjs7QUFiQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFnQkoiLCJmaWxlIjoibm90aWZpY2FjaW9uZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2YtY29udCB7XG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xufVxuLnRpdGxlXG57XG4gICAgZm9udC1zaXplOiAxN3B4O1xufVxuLnRpdGxlU2VsZWN0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogNXB4IDIwcHg7XG59XG4ubXQtMjUge1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG59XG4uaWNvbi1zaXplIHtcbiAgICBtYXJnaW4tdG9wOiAtM3B4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5taW5pVGV4dCB7XG4gICAgY29sb3I6ICMzOWFlNTA7XG59XG4ucmVkLWNvbG9yIHtcbiAgICBjb2xvcjogI2ViNDQ1YTtcbn1cbi50ZXh0U2VsZWN0IHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnRpY2tldCB7XG4gICAgY29sb3I6ICNlYjQ0NWE7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmxvY2F0ZS1jb250IHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDlhY2U7XG59XG4ucmF0aW5nLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG4ucmF0aW5nVGV4dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnJlZC10ZXh0IHtcbiAgICBjb2xvcjogI2ViNDQ1YTtcbn1cbi5ncmF5LXRleHQge1xuICAgIGNvbG9yOiAjNzU3NTc1O1xufVxuLmJsdWUtdGV4dCB7XG4gICAgY29sb3I6ICMwMDlhY2U7XG59XG5pb24taXRlbSB7XG4gICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG4uaW9uLWl0ZW0tbm90aWZpY2FjaW9uZXMge1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgLS1ib3JkZXItY29sb3I6IHdoaXRlO1xufVxuXG4ubWFya2VyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1cHg7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNiZGJkYmQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=profesional-notificaciones-notificaciones-module-es5.js.map