(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-solicitud-status-solicitud-status-module"], {
    /***/
    "8G04":
    /*!**************************************************************************!*\
      !*** ./src/app/user/solicitud-status/solicitud-status-routing.module.ts ***!
      \**************************************************************************/

    /*! exports provided: SolicitudStatusPageRoutingModule */

    /***/
    function G04(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SolicitudStatusPageRoutingModule", function () {
        return SolicitudStatusPageRoutingModule;
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


      var _solicitud_status_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./solicitud-status.page */
      "YjC/");

      var routes = [{
        path: '',
        component: _solicitud_status_page__WEBPACK_IMPORTED_MODULE_3__["SolicitudStatusPage"]
      }];

      var SolicitudStatusPageRoutingModule = function SolicitudStatusPageRoutingModule() {
        _classCallCheck(this, SolicitudStatusPageRoutingModule);
      };

      SolicitudStatusPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SolicitudStatusPageRoutingModule);
      /***/
    },

    /***/
    "Jv7P":
    /*!******************************************************************!*\
      !*** ./src/app/user/solicitud-status/solicitud-status.page.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function Jv7P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".no-border {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n\n.test {\n  margin-top: -10px;\n}\n\n.titleSelect {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.badge-text {\n  font-size: 7px;\n}\n\n.textSelect {\n  font-size: 10px;\n  line-height: 0.5;\n}\n\n.ticket {\n  color: red;\n  font-size: 16px;\n}\n\n.locate-cont {\n  border-radius: 50px;\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: 5px;\n}\n\n.status-cont {\n  border-radius: 50px;\n  height: 30px;\n  width: 30px;\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 5px;\n  background-color: #009ace;\n}\n\n.status-cont-grey {\n  border-radius: 50px;\n  height: 30px;\n  width: 30px;\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 5px;\n  background-color: #8e8c89;\n}\n\n.status-cont-red {\n  border-radius: 50px;\n  height: 30px;\n  width: 30px;\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 5px;\n  background-color: red;\n}\n\n.rating-text {\n  font-size: 60px;\n  margin-left: auto;\n  margin-right: auto;\n  display: inline-flex;\n}\n\n.status-text-icon {\n  font-size: 40px;\n  margin-left: auto;\n  margin-right: auto;\n  display: inline-flex;\n}\n\n.status-text,\n.status-text-grey,\n.status-text-red {\n  font-family: \"Poppins\";\n  font-weight: bold;\n}\n\n.status-text {\n  font-size: 13px;\n}\n\n.status-text-grey {\n  font-size: 13px;\n  color: #8e8c89;\n}\n\n.status-subtext-grey {\n  font-size: 11px;\n  color: #8e8c89;\n}\n\n.status-text-red {\n  font-size: 13px;\n  color: red;\n}\n\n.status-subtext-red {\n  font-size: 11px;\n  color: red;\n}\n\n.ratingText {\n  font-size: 14px;\n  margin: 0;\n  padding: 0;\n}\n\n.bg-green-color {\n  background-color: #39ae50;\n}\n\n.title {\n  font-size: 17px;\n}\n\n.redLine {\n  color: red;\n  margin-top: -4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvbGljaXR1ZC1zdGF0dXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNBO0VBQ0ksaUJBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQUdKOztBQURBO0VBQ0ksY0FBQTtBQUlKOztBQUZBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBS0o7O0FBSEE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtBQU1KOztBQUpBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBT0o7O0FBSkE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQU9KOztBQUxBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFRSjs7QUFOQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBU0o7O0FBUEE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBVUo7O0FBUkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBV0o7O0FBVEE7OztFQUdJLHNCQUFBO0VBQ0EsaUJBQUE7QUFZSjs7QUFWQTtFQUNJLGVBQUE7QUFhSjs7QUFYQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBY0o7O0FBWkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQWVKOztBQWJBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7QUFnQko7O0FBZEE7RUFDSSxlQUFBO0VBQ0EsVUFBQTtBQWlCSjs7QUFmQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQWtCSjs7QUFoQkE7RUFDSSx5QkFBQTtBQW1CSjs7QUFqQkE7RUFDSSxlQUFBO0FBb0JKOztBQWxCQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQXFCSiIsImZpbGUiOiJzb2xpY2l0dWQtc3RhdHVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uby1ib3JkZXIge1xuICAgIHBhZGRpbmctdG9wOiAycHg7XG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcbn1cbi50ZXN0IHtcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cbi50aXRsZVNlbGVjdCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmJhZGdlLXRleHQge1xuICAgIGZvbnQtc2l6ZTogN3B4O1xufVxuLnRleHRTZWxlY3Qge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBsaW5lLWhlaWdodDogMC41O1xufVxuLnRpY2tldCB7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG4ubG9jYXRlLWNvbnQge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjMDA5QUNFO1xufVxuLnN0YXR1cy1jb250IHtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDlhY2U7XG59XG4uc3RhdHVzLWNvbnQtZ3JleSB7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGU4Yzg5O1xufVxuLnN0YXR1cy1jb250LXJlZCB7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG4ucmF0aW5nLXRleHQge1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG4uc3RhdHVzLXRleHQtaWNvbiB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cbi5zdGF0dXMtdGV4dCxcbi5zdGF0dXMtdGV4dC1ncmV5LFxuLnN0YXR1cy10ZXh0LXJlZCB7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnN0YXR1cy10ZXh0IHtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG4uc3RhdHVzLXRleHQtZ3JleSB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiAjOGU4Yzg5O1xufVxuLnN0YXR1cy1zdWJ0ZXh0LWdyZXkge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBjb2xvcjogIzhlOGM4OTtcbn1cbi5zdGF0dXMtdGV4dC1yZWQge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogcmVkO1xufVxuLnN0YXR1cy1zdWJ0ZXh0LXJlZCB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGNvbG9yOiByZWQ7XG59XG4ucmF0aW5nVGV4dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuLmJnLWdyZWVuLWNvbG9yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzlhZTUwO1xufVxuLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE3cHg7XG59XG4ucmVkTGluZSB7XG4gICAgY29sb3I6IHJlZDtcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xufVxuIl19 */";
      /***/
    },

    /***/
    "YjC/":
    /*!****************************************************************!*\
      !*** ./src/app/user/solicitud-status/solicitud-status.page.ts ***!
      \****************************************************************/

    /*! exports provided: SolicitudStatusPage */

    /***/
    function YjC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SolicitudStatusPage", function () {
        return SolicitudStatusPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_solicitud_status_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./solicitud-status.page.html */
      "hANc");
      /* harmony import */


      var _solicitud_status_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./solicitud-status.page.scss */
      "Jv7P");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/call-number/ngx */
      "Wwn5");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var src_app_model_solicitud_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/model/solicitud.model */
      "tWKY");
      /* harmony import */


      var src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/solicitud.service */
      "rLtr");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _servicio_agendado_modal_servicio_agendado_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./servicio-agendado-modal/servicio-agendado-modal.component */
      "Uol3");
      /* harmony import */


      var _solicitud_enviada_modal_solicitud_enviada_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./solicitud-enviada-modal/solicitud-enviada-modal.component */
      "NPqd");
      /* harmony import */


      var _solicitud_rechazada_modal_solicitud_rechazada_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./solicitud-rechazada-modal/solicitud-rechazada-modal.component */
      "25zm");

      moment__WEBPACK_IMPORTED_MODULE_8__["locale"]('es');

      var SolicitudStatusPage = /*#__PURE__*/function () {
        function SolicitudStatusPage(modalController, router, menuController, http, us, lc, solServ, callNumber) {
          _classCallCheck(this, SolicitudStatusPage);

          this.modalController = modalController;
          this.router = router;
          this.menuController = menuController;
          this.http = http;
          this.us = us;
          this.lc = lc;
          this.solServ = solServ;
          this.callNumber = callNumber;
          this.loadedService = {
            categoryName: null,
            cummunename: null,
            category_id: null,
            created_date: null,
            date_required: null,
            descProf: null,
            description: null,
            hours_professional: null,
            hours_requestservice: null,
            img_profile: null,
            professional_profiles_id: null,
            request_id: null,
            status_id: null,
            status_name: null,
            status_order: null,
            supplierLastName: null,
            supplierName: null,
            supplier_id: null,
            ticket_number: null,
            user_client_id: null,
            work_days: null,
            suplierPhone1: null
          };
        }

        _createClass(SolicitudStatusPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.userSub = this.us.loggedUser.subscribe(function (user) {
              _this.grabbedUser = user;
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.menuController.enable(true, 'user');
            this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Authorization', 'Bearer ' + this.grabbedUser.access_token);
            this.serviceId = this.solServ.solicitud.solicitudID;
            this.loadService(this.solServ.solicitud.solicitudID);
          }
        }, {
          key: "loadService",
          value: function loadService(solicitudId) {
            var _this2 = this;

            this.lc.create({
              message: "Cargando informacion del servicio..."
            }).then(function (loadingEl) {
              loadingEl.present();

              _this2.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["API"] + "/client/requestservice/".concat(solicitudId), {
                headers: _this2.headers
              }).subscribe(function (resData) {
                loadingEl.dismiss();
                _this2.loadedService = resData['data'];

                _this2.solServ.setServiceObj(resData['data']);

                _this2.wDate = moment__WEBPACK_IMPORTED_MODULE_8__(_this2.loadedService.created_date, 'DD/MM/YYYY').format('DD MMMM YYYY');
              }, function (err) {
                loadingEl.dismiss();
                console.log(err);
              });
            });
          }
        }, {
          key: "openWhatsapp",
          value: function openWhatsapp() {
            window.open("https://api.whatsapp.com/send?phone=".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["PHONE_PREFIX"]).concat(this.loadedService.suplierPhone1));
          }
        }, {
          key: "call",
          value: function call() {
            this.callNumber.callNumber(this.loadedService.suplierPhone1, true).then(function (res) {
              return console.log('Launched dialer!', res);
            })["catch"](function (err) {
              return console.log('Error launching dialer', err);
            });
          }
        }, {
          key: "openMenu",
          value: function openMenu() {
            this.menuController.open();
          }
        }, {
          key: "serviceDetal",
          value: function serviceDetal(statusID) {
            this.solServ.clearSolicitud();
            this.solServ.setServiceID(this.loadedService.request_id);

            switch (statusID) {
              case src_app_model_solicitud_model__WEBPACK_IMPORTED_MODULE_9__["ServiceStatus"].SolicitudEnviada:
                this.goToServiceResume();
                break;

              case src_app_model_solicitud_model__WEBPACK_IMPORTED_MODULE_9__["ServiceStatus"].VisitaTecnica:
                this.goToTechnicalVisit();
                break;

              case src_app_model_solicitud_model__WEBPACK_IMPORTED_MODULE_9__["ServiceStatus"].ServicioAgendado:
                this.goToServiceDetail();
                break;

              case src_app_model_solicitud_model__WEBPACK_IMPORTED_MODULE_9__["ServiceStatus"].ServicioProceso:
                this.srvPay();
                break;

              case src_app_model_solicitud_model__WEBPACK_IMPORTED_MODULE_9__["ServiceStatus"].ServicioRealizado:
                this.srvPay();
                break;

              default:
                this.saModal();
                break;
            }
          }
        }, {
          key: "seModal",
          value: function seModal() {
            this.modalController.create({
              component: _solicitud_enviada_modal_solicitud_enviada_modal_component__WEBPACK_IMPORTED_MODULE_14__["SolicitudEnviadaModalComponent"],
              cssClass: 'modalSA'
            }).then(function (modalEl) {
              modalEl.present();
            });
          }
        }, {
          key: "saModal",
          value: function saModal() {
            this.modalController.create({
              component: _servicio_agendado_modal_servicio_agendado_modal_component__WEBPACK_IMPORTED_MODULE_13__["ServicioAgendadoModalComponent"],
              cssClass: 'modalSA'
            }).then(function (modalEl) {
              modalEl.present();
            });
          }
        }, {
          key: "srModal",
          value: function srModal() {
            this.modalController.create({
              component: _solicitud_rechazada_modal_solicitud_rechazada_modal_component__WEBPACK_IMPORTED_MODULE_15__["SolicitudRechazadaModalComponent"],
              cssClass: 'modalServRechazado'
            }).then(function (modalEl) {
              modalEl.present();
            });
          }
        }, {
          key: "goToTechnicalVisit",
          value: function goToTechnicalVisit() {
            this.router.navigate(['/user/visita-detail']);
          }
        }, {
          key: "goToServiceDetail",
          value: function goToServiceDetail() {
            this.router.navigate(['/user/solicitud-detail']);
          }
        }, {
          key: "goToServiceResume",
          value: function goToServiceResume() {
            this.router.navigate(['/user/service-resume']);
          }
        }, {
          key: "srvPay",
          value: function srvPay() {
            this.solServ.setServiceID(this.serviceId);
            this.router.navigate(['/user/servicio-pagar']);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.userSub.unsubscribe();
          }
        }]);

        return SolicitudStatusPage;
      }();

      SolicitudStatusPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]
        }, {
          type: src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_10__["SolicitudService"]
        }, {
          type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__["CallNumber"]
        }];
      };

      SolicitudStatusPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-solicitud-status',
        template: _raw_loader_solicitud_status_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_solicitud_status_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SolicitudStatusPage);
      /***/
    },

    /***/
    "aFCw":
    /*!******************************************************************!*\
      !*** ./src/app/user/solicitud-status/solicitud-status.module.ts ***!
      \******************************************************************/

    /*! exports provided: SolicitudStatusPageModule */

    /***/
    function aFCw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SolicitudStatusPageModule", function () {
        return SolicitudStatusPageModule;
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


      var _solicitud_status_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./solicitud-status-routing.module */
      "8G04");
      /* harmony import */


      var _solicitud_status_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./solicitud-status.page */
      "YjC/");

      var SolicitudStatusPageModule = function SolicitudStatusPageModule() {
        _classCallCheck(this, SolicitudStatusPageModule);
      };

      SolicitudStatusPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _solicitud_status_routing_module__WEBPACK_IMPORTED_MODULE_5__["SolicitudStatusPageRoutingModule"]],
        declarations: [_solicitud_status_page__WEBPACK_IMPORTED_MODULE_6__["SolicitudStatusPage"]]
      })], SolicitudStatusPageModule);
      /***/
    },

    /***/
    "hANc":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/solicitud-status/solicitud-status.page.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hANc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/user/solicitudes\" text=\"\" icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title class=\"title-toolbar\">SOLICITUD #{{ loadedService ? loadedService.ticket_number : '-' }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- top section  -->\n  <div class=\"ion-margin-top no-border\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n\n        <!-- title -->\n        <ion-col size=\"7\" sizeMd=\"10\" class=\"ion-justify-content-center\">\n          <ion-text>\n            <span class=\"titleSelect main-color ion-text-capitalize\">{{ loadedService.supplierName+\"\n              \"+loadedService.supplierLastName }} </span><br>\n            <!-- <ion-badge color=\"primary\" class=\"badge-text\">{{ loadedService.categoryName }}</ion-badge>&nbsp; -->\n            <ion-badge color=\"{{ loadedService.category_id === cat.id ? primary : medium }}\" class=\"badge-text\"\n              *ngFor=\"let cat of loadedService.categories\">{{ cat.categoryName }}\n            </ion-badge><br>\n            <span class=\"textSelect ion-text-capitalize\">\n              {{ loadedService.cummunename }}\n            </span><br>\n            <small class=\"main-color\">{{ wDate }}</small>\n          </ion-text>\n        </ion-col>\n\n        <!-- Contato icons -->\n        <ion-col size=\"5\" sizeMd=\"2\" class=\"ion-text-center test\">\n          <ion-text>\n            <span class=\"titleSelect main-color\">Contacto </span><br><br>\n            <!-- icons -->\n            <div class=\"locate-cont\" (click)=\"call()\">\n              <ion-icon src=\"/assets/icon/ic_phone_circle.svg\" color=\"light\" class=\"rating-text\"></ion-icon>\n            </div>\n            <div class=\"locate-cont\" (click)=\"openWhatsapp()\">\n              <ion-icon src=\"/assets/icon/ic_whatsapp.svg\" color=\"light\" class=\"rating-text\"></ion-icon>\n            </div>\n          </ion-text>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <!-- timeline  -->\n  <div class=\"no-border test\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n\n        <!-- title -->\n        <ion-col size=\"12\" class=\"ion-justify-content-center\">\n          <ion-text>\n            <span class=\"titleSelect main-color\">Solicitud </span>\n            <small class=\"ticket\" *ngIf=\"loadedService\">#{{ loadedService.ticket_number }}</small><br>\n            <span class=\"textSelect\" *ngIf=\"loadedService\">{{ loadedService.description }}</span>\n          </ion-text>\n        </ion-col>\n\n      </ion-row>\n\n      <!-- title -->\n      <ion-row class=\"ion-margin-top\">\n        <ion-col size=\"10\" offset=\"1\" class=\"ion-text-center\">\n          <ion-text class=\"main-color title\"><b>\xBFEN QU\xC9 ESTADO SE ENCUENTRA MI SOLICITUD?</b></ion-text>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n\n      <!-- separating line -->\n      <ion-row class=\"ion-no-margin\">\n        <ion-col size=\"12\" class=\"ion-text-center ion-no-padding redLine\">|</ion-col>\n      </ion-row>\n\n      <!-- solicitud enviada  -->\n      <ion-row>\n        <div class=\"status-cont\" (click)=\"serviceDetal(1)\">\n          <ion-icon src=\"/assets/icon/ic_send.svg\" color=\"light\" class=\"status-text-icon\"></ion-icon>\n        </div>\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-text class=\"main-color status-text\">SOLICITUD<br />ENVIADA</ion-text>\n        </ion-col>\n      </ion-row>\n\n      <!-- separating line -->\n      <ion-row class=\"ion-no-margin\">\n        <ion-col size=\"12\" class=\"ion-text-center ion-no-margin ion-no-padding redLine\">|</ion-col>\n      </ion-row>\n      <ion-row class=\"ion-no-margin\">\n        <ion-col size=\"12\" class=\"ion-text-center ion-no-margin ion-no-padding redLine\">|</ion-col>\n      </ion-row>\n\n      <!-- Visita tecnica agendada  -->\n      <!-- gray -->\n      <ion-row *ngIf=\"loadedService.status_id < 2 && loadedService.status_id !== 7\">\n        <div class=\"status-cont-grey\">\n          <ion-icon name=\"checkmark\" color=\"light\" class=\"status-text-icon\"></ion-icon>\n        </div>\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-text class=\"main-color status-text-grey\">VISITA T\xC9CNICA AGENDADA</ion-text><br>\n        </ion-col>\n      </ion-row>\n      <!-- active  -->\n      <ion-row *ngIf=\"loadedService.status_id > 1 && loadedService.status_id !== 7\">\n        <div class=\"status-cont\" (click)=\"serviceDetal(2)\">\n          <ion-icon name=\"checkmark\" color=\"light\" class=\"status-text-icon\"></ion-icon>\n        </div>\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-text class=\"main-color status-text\">VISITA T\xC9CNICA AGENDADA</ion-text><br>\n        </ion-col>\n      </ion-row>\n\n      <!-- separating line -->\n      <ion-row class=\"ion-no-margin\" *ngIf=\"loadedService.status_id !== 7\">\n        <ion-col size=\"12\" class=\"ion-text-center ion-no-margin ion-no-padding redLine\">|</ion-col>\n      </ion-row>\n      <ion-row class=\"ion-no-margin\" *ngIf=\"loadedService.status_id !== 7\">\n        <ion-col size=\"12\" class=\"ion-text-center ion-no-margin ion-no-padding redLine\">|</ion-col>\n      </ion-row>\n\n      <!-- Servicio agendado  -->\n      <!-- gray  -->\n      <ion-row *ngIf=\"loadedService.status_id < 3 && loadedService.status_id !== 7\">\n        <div class=\"status-cont-grey\">\n          <ion-icon src=\"/assets/icon/ic_calendar_circle_disabled.svg\" color=\"light\" class=\"status-text-icon\">\n          </ion-icon>\n        </div>\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-text class=\"main-color status-text-grey\">SERVICIO AGENDADO</ion-text><br>\n          <!-- <ion-text class=\"main-color status-subtext-grey\">Pendiente de confirmaci\xF3n</ion-text> -->\n        </ion-col>\n      </ion-row>\n      <!-- active  -->\n      <ion-row *ngIf=\"loadedService.status_id > 2 && loadedService.status_id !== 7\">\n        <div class=\"status-cont\" (click)=\"serviceDetal(3)\">\n          <ion-icon src=\"/assets/icon/ic_calendar_circle.svg\" color=\"light\" class=\"status-text-icon\"></ion-icon>\n        </div>\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-text class=\"main-color status-text\">SERVICIO AGENDADO</ion-text><br>\n        </ion-col>\n      </ion-row>\n\n      <!-- separating line -->\n      <ion-row class=\"ion-no-margin\" *ngIf=\"loadedService.status_id !== 7\">\n        <ion-col size=\"12\" class=\"ion-text-center ion-no-margin ion-no-padding redLine\">|</ion-col>\n      </ion-row>\n      <ion-row class=\"ion-no-margin\" *ngIf=\"loadedService.status_id !== 7\">\n        <ion-col size=\"12\" class=\"ion-text-center ion-no-margin ion-no-padding redLine\">|</ion-col>\n      </ion-row>\n\n      <!-- SERVICIO EN\x0BPROCESO  -->\n      <!-- grey  -->\n      <ion-row *ngIf=\"loadedService.status_id < 4 && loadedService.status_id !== 7\">\n        <div class=\"status-cont-grey\">\n          <ion-icon src=\"/assets/icon/ic_engine_disabled.svg\" color=\"light\" class=\"status-text-icon\"></ion-icon>\n        </div>\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-text class=\"main-color status-text-grey\">SERVICIO EN<br />PROCESO</ion-text><br>\n        </ion-col>\n      </ion-row>\n      <!-- active  -->\n      <ion-row *ngIf=\"loadedService.status_id > 3 && loadedService.status_id !== 7\">\n        <div class=\"status-cont\" (click)=\"serviceDetal(4)\">\n          <ion-icon src=\"/assets/icon/ic_engine_blue.svg\" color=\"light\" class=\"status-text-icon\"></ion-icon>\n        </div>\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-text class=\"main-color status-text\">SERVICIO EN\x0BPROCESO</ion-text><br>\n        </ion-col>\n      </ion-row>\n\n      <!-- separating line -->\n      <ion-row class=\"ion-no-margin\" *ngIf=\"loadedService.status_id !== 7\">\n        <ion-col size=\"12\" class=\"ion-text-center ion-no-margin ion-no-padding redLine\">|</ion-col>\n      </ion-row>\n      <ion-row class=\"ion-no-margin\" *ngIf=\"loadedService.status_id !== 7\">\n        <ion-col size=\"12\" class=\"ion-text-center ion-no-margin ion-no-padding redLine\">|</ion-col>\n      </ion-row>\n\n      <!-- SERVICIO REALIZADO  -->\n      <!-- grey  -->\n      <ion-row *ngIf=\"loadedService.status_id < 5 && loadedService.status_id !== 7\">\n        <div class=\"status-cont-grey\">\n          <ion-icon src=\"/assets/icon/ic_engine_disabled.svg\" color=\"light\" class=\"status-text-icon\"></ion-icon>\n        </div>\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-text class=\"main-color status-text-grey\">SERVICIO<br />REALIZADO</ion-text><br>\n        </ion-col>\n      </ion-row>\n      <!-- active  -->\n      <ion-row *ngIf=\"loadedService.status_id > 4 && loadedService.status_id !== 7\">\n        <div class=\"status-cont\" (click)=\"serviceDetal(4)\">\n          <ion-icon src=\"/assets/icon/ic_engine_blue.svg\" color=\"light\" class=\"status-text-icon\"></ion-icon>\n        </div>\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-text class=\"main-color status-text\">SERVICIO FINALIZADO</ion-text><br>\n        </ion-col>\n      </ion-row>\n\n      <!-- separating line -->\n      <ion-row class=\"ion-no-margin\">\n        <ion-col size=\"12\" class=\"ion-text-center ion-no-margin ion-no-padding redLine\">|</ion-col>\n      </ion-row>\n      <ion-row class=\"ion-no-margin\">\n        <ion-col size=\"12\" class=\"ion-text-center ion-no-margin ion-no-padding redLine\">|</ion-col>\n      </ion-row>\n\n      <!-- Pago Finalizado  -->\n      <!-- grey  -->\n      <ion-row *ngIf=\"loadedService.status_id < 6 && loadedService.status_id !== 7\">\n        <div class=\"status-cont-grey\">\n          <ion-icon src=\"/assets/icon/ic_card_disabled.svg\" color=\"light\" class=\"status-text-icon\"></ion-icon>\n        </div>\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-text class=\"main-color status-text-grey\">PAGO FINALIZADO</ion-text><br>\n          <ion-text class=\"main-color status-subtext-grey\">Pendiente calificar el servicio</ion-text>\n        </ion-col>\n      </ion-row>\n      <!-- active  -->\n      <ion-row *ngIf=\"loadedService.status_id > 5 && loadedService.status_id !== 7\">\n        <div class=\"status-cont\" (click)=\"serviceDetal(1)\">\n          <ion-icon src=\"/assets/icon/ic_card_blue.svg\" color=\"light\" class=\"status-text-icon\"></ion-icon>\n        </div>\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-text class=\"main-color status-text\">PAGO FINALIZADO</ion-text><br>\n          <ion-text class=\"main-color status-subtext\">Pendiente calificar el servicio</ion-text>\n        </ion-col>\n      </ion-row>\n\n      <!-- ONLY FOR CANCELLED SERVICES -->\n\n      <!-- separating line -->\n      <!-- <ion-row class=\"ion-no-margin\" *ngIf=\"loadedService.status_id === 7\">\n        <ion-col size=\"12\" class=\"ion-text-center ion-no-padding redLine\">|</ion-col>\n      </ion-row>\n      <ion-row class=\"ion-no-margin\" *ngIf=\"loadedService.status_id === 7\">\n        <ion-col size=\"12\" class=\"ion-text-center ion-no-padding redLine\">|</ion-col>\n      </ion-row> -->\n\n      <!-- Solicitud rechazada  -->\n      <ion-row *ngIf=\"loadedService.status_id === 7\">\n        <div class=\"status-cont-red\">\n          <ion-icon name=\"close-outline\" color=\"light\" class=\"status-text-icon\"></ion-icon>\n        </div>\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-text class=\"status-text-red\">SOLICITUD RECHAZADA</ion-text><br>\n        </ion-col>\n      </ion-row>\n\n      <!-- separating line -->\n      <!-- <ion-row class=\"ion-no-margin\" *ngIf=\"loadedService.status_id === 7\">\n        <ion-col size=\"12\" class=\"ion-text-center ion-no-padding redLine\">|</ion-col>\n      </ion-row> -->\n\n      <!-- Por que solictud rechazada  -->\n      <!-- <ion-row (click)=\"serviceDetal(3)\" *ngIf=\"loadedService.status_id === 7\">\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-text class=\"main-color status-subtext-red\">\xBFPor qu\xE9 mi solicitud fue rechazada?</ion-text>\n        </ion-col>\n      </ion-row> -->\n\n    </ion-grid>\n  </div>\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-solicitud-status-solicitud-status-module-es5.js.map