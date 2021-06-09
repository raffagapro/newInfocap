(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-solicitud-detail-solicitud-detail-module"], {
    /***/
    "0571":
    /*!**************************************************************************!*\
      !*** ./src/app/user/solicitud-detail/solicitud-detail-routing.module.ts ***!
      \**************************************************************************/

    /*! exports provided: SolicitudDetailPageRoutingModule */

    /***/
    function _(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SolicitudDetailPageRoutingModule", function () {
        return SolicitudDetailPageRoutingModule;
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


      var _solicitud_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./solicitud-detail.page */
      "t5N5");

      var routes = [{
        path: '',
        component: _solicitud_detail_page__WEBPACK_IMPORTED_MODULE_3__["SolicitudDetailPage"]
      }];

      var SolicitudDetailPageRoutingModule = function SolicitudDetailPageRoutingModule() {
        _classCallCheck(this, SolicitudDetailPageRoutingModule);
      };

      SolicitudDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SolicitudDetailPageRoutingModule);
      /***/
    },

    /***/
    "4SOy":
    /*!******************************************************************!*\
      !*** ./src/app/user/solicitud-detail/solicitud-detail.page.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function SOy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".no-border {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n\n.profileImg {\n  margin-left: 10px;\n  height: 75px;\n  width: 75px;\n}\n\n.titleSelect {\n  font-size: 23px;\n  font-weight: bold;\n}\n\n.title {\n  font-size: 20px;\n}\n\n.titleText {\n  font-size: 16px;\n}\n\n.imgSlide {\n  height: 125px;\n}\n\n.subtitle {\n  font-size: 18px;\n}\n\n.subText {\n  font-size: 14px;\n}\n\n.minusMargin {\n  margin-top: -25px;\n}\n\n.iconFix {\n  margin-bottom: -3px;\n}\n\n.mini-text {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvbGljaXR1ZC1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUFBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBR0o7O0FBREE7RUFDSSxlQUFBO0FBSUo7O0FBRkE7RUFDSSxlQUFBO0FBS0o7O0FBSEE7RUFDSSxhQUFBO0FBTUo7O0FBSkE7RUFDSSxlQUFBO0FBT0o7O0FBTEE7RUFDSSxlQUFBO0FBUUo7O0FBTkE7RUFDSSxpQkFBQTtBQVNKOztBQVBBO0VBQ0ksbUJBQUE7QUFVSjs7QUFSQTtFQUVJLGVBQUE7QUFVSiIsImZpbGUiOiJzb2xpY2l0dWQtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uby1ib3JkZXJ7XG4gICAgcGFkZGluZy10b3A6IDJweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xufVxuLnByb2ZpbGVJbWd7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIHdpZHRoOiA3NXB4O1xufVxuLnRpdGxlU2VsZWN0e1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi50aXRsZXtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbi50aXRsZVRleHR7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuLmltZ1NsaWRle1xuICAgIGhlaWdodDoxMjVweDtcbn1cbi5zdWJ0aXRsZXtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG4uc3ViVGV4dHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4ubWludXNNYXJnaW57XG4gICAgbWFyZ2luLXRvcDogLTI1cHg7XG59XG4uaWNvbkZpeHtcbiAgICBtYXJnaW4tYm90dG9tOiAtM3B4O1xufVxuLm1pbmktdGV4dFxue1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn0iXX0= */";
      /***/
    },

    /***/
    "Obqi":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/solicitud-detail/solicitud-detail.page.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Obqi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/user/solicitudes\" text=\"\" icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title class=\"title-toolbar\">DEFINICIÓN DEL SERVICIO</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- profesional card item -->\n  <div class=\"no-border\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n        <!-- profile img -->\n        <ion-col size=\"4\" offset=\"1\">\n          <ion-avatar class=\"profileImg\">\n            <img src=\"{{ loadedService.img_profile || '/assets/images/avatar.png'}}\" />\n          </ion-avatar>\n        </ion-col>\n\n        <!-- title -->\n        <ion-col size=\"6\">\n          <ion-text>\n            <span class=\"titleSelect main-color\">{{loadedService.categoryName}} de {{loadedService.supplierName}}\n              {{loadedService.supplierLastName}}</span><br>\n            <p class=\"main-color mini-text\" style=\"margin-top: 0; margin-bottom: 0;\">\n              {{formatDate(loadedService.created_date, 'DD/MM/YYYY', true)}}</p>\n          </ion-text>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <ion-grid>\n\n    <!-- title -->\n    <ion-row>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-text class=\"main-color title\"><b>Trabajo a realizar</b></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-text class=\"titleText\">\n          {{loadedService.description}}\n        </ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n    <!-- Slider -->\n    <ion-row class=\"\" *ngIf=\"loadedService.img_request.length > 0\">\n      <ion-col size=\"12\">\n        <ion-slides [options]=\"slideOptions\">\n          <!-- slide -->\n          <ion-slide *ngFor=\"let image of loadedService.img_request\">\n            <img (click)=\"openImage(image.image)\" src=\"{{ image.image }}\" class=\"imgSlide\">\n          </ion-slide>\n\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n\n    <br /><br />\n\n    <!-- Fecha de visita -->\n    <ion-row class=\"minusMargin\">\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-text class=\"main-color subtitle\"><b>Fecha de requerida</b></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-icon src=\"/assets/icon/ic_date_range.svg\" class=\"main-color iconFix\"></ion-icon>\n        <ion-text class=\"subText\"> {{formatDate(loadedService.date_required)}}</ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n    <!-- Rango de horas -->\n    <ion-row>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-text class=\"main-color subtitle\"><b>Rango de horas</b></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-icon src=\"/assets/icon/ic_schedule.svg\" class=\"main-color iconFix\"></ion-icon>\n        <ion-text class=\"subText\"> {{formatTime()}}</ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n    <!-- Costo -->\n    <ion-row>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-text class=\"main-color subtitle\"><b>Costo</b></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-icon src=\"/assets/icon/ic_money.svg\" class=\"main-color iconFix\"></ion-icon>\n        <ion-text class=\"subText\" *ngIf=\"loadedService && loadedService.request_cost.length > 0\"> ${{getServiceCost()}}</ion-text>\n        <ion-text class=\"subText\" *ngIf=\"loadedService && loadedService.request_cost.length == 0\"> No se ha asignado un Costo</ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n    <!-- Costo & pay BTNS-->\n    <ion-row>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-text class=\"main-color subtitle\"><b>¿Cómo desea pagar?</b></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <section>\n          <!-- btn -->\n          <ion-button size=\"small\" (click)=\"setSelectedButton('credit')\"\n            [fill]=\"selectedButton === 'credit' ? 'solid' : 'outline'\">\n            <ion-icon slot=\"start\" src=\"assets/icon/visa.svg\"></ion-icon>\n            Tarjeta\n          </ion-button>\n\n          <!-- btn -->\n          <!--\n          <ion-button size=\"small\" (click)=\"setSelectedButton('debit')\"  [fill]=\"selectedButton === 'debit' ? 'solid' : 'outline'\">\n            <ion-icon slot=\"start\" src=\"assets/icon/mastercard.svg\"></ion-icon>\n            Débito\n          </ion-button>\n          -->\n\n          <!-- btn -->\n          <ion-button size=\"small\" (click)=\"setSelectedButton('cash')\"\n            [fill]=\"selectedButton === 'cash' ? 'solid' : 'outline'\">\n            <ion-icon slot=\"start\" src=\"/assets/icon/ic_dollar_blank.svg\"></ion-icon>\n            Efectivo\n          </ion-button>\n\n          <!-- btn -->\n          <!--\n          <ion-button size=\"small\" (click)=\"setSelectedButton('transfer')\"\n            [fill]=\"selectedButton === 'transfer' ? 'solid' : 'outline'\">\n            <ion-icon slot=\"start\" src=\"/assets/icon/ic_money_blank.svg\"></ion-icon>\n            Transferencia\n          </ion-button>\n          --> \n\n        </section>\n      </ion-col>\n\n    </ion-row>\n\n    <!-- enviar solicitud BTN -->\n    <ion-row class=\"ion-margin-top ion-margin-bottom\" *ngIf=\"loadedService && loadedService.request_cost.length === 0\">\n      <ion-col size=\"1\"></ion-col>\n      <ion-col>\n        <ion-button size=\"5\" expand=\"block\" class=\"ion-text-uppercase\" (click)=\"confirmSolicitud()\">\n          ACEPTAR VISITA\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>";
      /***/
    },

    /***/
    "t5N5":
    /*!****************************************************************!*\
      !*** ./src/app/user/solicitud-detail/solicitud-detail.page.ts ***!
      \****************************************************************/

    /*! exports provided: SolicitudDetailPage */

    /***/
    function t5N5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SolicitudDetailPage", function () {
        return SolicitudDetailPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_solicitud_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./solicitud-detail.page.html */
      "Obqi");
      /* harmony import */


      var _solicitud_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./solicitud-detail.page.scss */
      "4SOy");
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


      var src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/solicitud.service */
      "rLtr");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! axios */
      "vDqi");
      /* harmony import */


      var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var src_app_shared_success_modal_success_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/success-modal/success-modal.component */
      "W/u7");
      /* harmony import */


      var src_app_shared_image_modal_image_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/image-modal/image-modal.component */
      "BPum");

      var SolicitudDetailPage = /*#__PURE__*/function () {
        function SolicitudDetailPage(modalController, router, loadingController, userService, menuController, solServ) {
          _classCallCheck(this, SolicitudDetailPage);

          this.modalController = modalController;
          this.router = router;
          this.loadingController = loadingController;
          this.userService = userService;
          this.menuController = menuController;
          this.solServ = solServ;
          this.selectedButton = 'credit';
          this.paymentTypes = [];
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
            suplierPhone1: null,
            img_request: [],
            request_cost: []
          };
          this.slideOptions = {
            initialSlide: 0,
            slidesPerView: 2,
            autoplay: true
          };
        }

        _createClass(SolicitudDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.userSubscription = this.userService.loggedUser.subscribe(function (user) {
              _this.user = user;

              _this.loadPaymentTypes();
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.menuController.enable(true, 'user');
          }
        }, {
          key: "loadPaymentTypes",
          value: function loadPaymentTypes() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var response;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.prev = 0;
                      _context.next = 3;
                      return axios__WEBPACK_IMPORTED_MODULE_10___default.a.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["API"], "/payments/type"), {
                        headers: {
                          Authorization: "Bearer ".concat(this.user.access_token)
                        }
                      });

                    case 3:
                      response = _context.sent;
                      this.paymentTypes = response.data.data;
                      _context.next = 10;
                      break;

                    case 7:
                      _context.prev = 7;
                      _context.t0 = _context["catch"](0);
                      console.log(_context.t0);

                    case 10:
                      _context.prev = 10;
                      this.loadService();
                      return _context.finish(10);

                    case 13:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[0, 7, 10, 13]]);
            }));
          }
        }, {
          key: "loadService",
          value: function loadService() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var loader, response, firstCost, paymentType;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingController.create({
                        message: ''
                      });

                    case 2:
                      loader = _context2.sent;
                      _context2.prev = 3;
                      _context2.next = 6;
                      return loader.present();

                    case 6:
                      _context2.next = 8;
                      return axios__WEBPACK_IMPORTED_MODULE_10___default.a.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["API"], "/client/requestservice/").concat(this.solServ.solicitud.solicitudID), {
                        headers: {
                          Authorization: "Bearer ".concat(this.user.access_token)
                        }
                      });

                    case 8:
                      response = _context2.sent;
                      this.solServ.setServiceObj(response.data.data);
                      this.loadedService = response.data.data;

                      if (this.loadedService.img_request.length < 2) {
                        this.slideOptions.slidesPerView = 1;
                      }

                      if (this.loadedService.request_cost.length > 0) {
                        firstCost = this.loadedService.request_cost[0];
                        paymentType = this.paymentTypes.find(function (paymentType) {
                          return paymentType.id === firstCost.payment_type_id;
                        });

                        if (paymentType.name === 'Efectivo') {
                          this.selectedButton = 'cash';
                        } else {
                          this.selectedButton = 'credit';
                        }
                      }

                      _context2.next = 18;
                      break;

                    case 15:
                      _context2.prev = 15;
                      _context2.t0 = _context2["catch"](3);
                      console.log(_context2.t0);

                    case 18:
                      _context2.prev = 18;
                      loader.dismiss();
                      return _context2.finish(18);

                    case 21:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[3, 15, 18, 21]]);
            }));
          }
        }, {
          key: "openMenu",
          value: function openMenu() {
            this.menuController.open();
          }
        }, {
          key: "formatDate",
          value: function formatDate(date) {
            var dateFormat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD';
            var useTimezone = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var momentDate = moment__WEBPACK_IMPORTED_MODULE_8__["utc"](date, dateFormat);

            if (useTimezone) {
              momentDate.tz(moment__WEBPACK_IMPORTED_MODULE_8__["tz"].guess());
            }

            return momentDate.format('dddd D [de] MMMM [de] YYYY');
          }
        }, {
          key: "formatTime",
          value: function formatTime() {
            if (!this.loadedService.hours_requestservice) {
              return 'ND';
            }

            var hours = this.loadedService.hours_requestservice.split('/');
            var startHour = moment__WEBPACK_IMPORTED_MODULE_8__(hours[0]);
            var endHour = moment__WEBPACK_IMPORTED_MODULE_8__(hours[1]);
            return "".concat(startHour.format('h:mm a'), " - ").concat(endHour.format('h:mm a'));
          }
        }, {
          key: "getServiceCost",
          value: function getServiceCost() {
            if (this.loadedService && this.loadedService.request_cost.length > 0) {
              return this.loadedService.request_cost.reduce(function (total, entity) {
                return total += Number(entity.amount_client);
              }, 0).toFixed(2);
            }

            return 0;
          }
        }, {
          key: "confirmSolicitud",
          value: function confirmSolicitud() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var loader, payment_type, response;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.loadingController.create({
                        message: 'Actualizando solicitud...'
                      });

                    case 2:
                      loader = _context3.sent;
                      loader.present();
                      _context3.prev = 4;
                      _context3.t0 = this.selectedButton;
                      _context3.next = _context3.t0 === 'credit' ? 8 : _context3.t0 === 'cash' ? 10 : 12;
                      break;

                    case 8:
                      payment_type = this.paymentTypes.find(function (entry) {
                        return entry.name === 'Tarjeta';
                      });
                      return _context3.abrupt("break", 13);

                    case 10:
                      payment_type = this.paymentTypes.find(function (entry) {
                        return entry.name === 'Efectivo';
                      });
                      return _context3.abrupt("break", 13);

                    case 12:
                      return _context3.abrupt("return");

                    case 13:
                      if (payment_type) {
                        _context3.next = 15;
                        break;
                      }

                      return _context3.abrupt("return");

                    case 15:
                      _context3.next = 17;
                      return axios__WEBPACK_IMPORTED_MODULE_10___default.a.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["API"], "/client/cost/paymentType/").concat(this.loadedService.request_id), {
                        costs_type_id: 1,
                        payment_type_id: payment_type.id,
                        description: 'Actualización del método de pago'
                      }, {
                        headers: {
                          Authorization: "Bearer ".concat(this.user.access_token)
                        }
                      });

                    case 17:
                      response = _context3.sent;
                      _context3.next = 20;
                      return loader.dismiss();

                    case 20:
                      console.log(response);

                      if (!(response.data && response.data.code !== 200)) {
                        _context3.next = 23;
                        break;
                      }

                      return _context3.abrupt("return");

                    case 23:
                      this.modalController.create({
                        component: src_app_shared_success_modal_success_modal_component__WEBPACK_IMPORTED_MODULE_11__["SuccessModalComponent"],
                        componentProps: {
                          message: 'HAZ ACEPTADO LA VISITA TÉCNICA',
                          redirect: true,
                          redirectUrl: '/user/solicitudes'
                        },
                        cssClass: 'modalSuccess'
                      }).then(function (modalEl) {
                        modalEl.present();
                      });
                      _context3.next = 31;
                      break;

                    case 26:
                      _context3.prev = 26;
                      _context3.t1 = _context3["catch"](4);
                      console.log(_context3.t1);
                      _context3.next = 31;
                      return loader.dismiss();

                    case 31:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[4, 26]]);
            }));
          }
        }, {
          key: "setSelectedButton",
          value: function setSelectedButton(type) {
            if (this.loadedService.request_cost.length > 0) return;
            this.selectedButton = type;
          }
        }, {
          key: "openImage",
          value: function openImage(image) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var successModal;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.modalController.create({
                        component: src_app_shared_image_modal_image_modal_component__WEBPACK_IMPORTED_MODULE_12__["ImageModalComponent"],
                        componentProps: {
                          image: image
                        },
                        cssClass: 'modalImage'
                      });

                    case 2:
                      successModal = _context4.sent;
                      successModal.present();

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return SolicitudDetailPage;
      }();

      SolicitudDetailPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
        }, {
          type: src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_6__["SolicitudService"]
        }];
      };

      SolicitudDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-solicitud-detail',
        template: _raw_loader_solicitud_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_solicitud_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SolicitudDetailPage);
      /***/
    },

    /***/
    "w+Nm":
    /*!******************************************************************!*\
      !*** ./src/app/user/solicitud-detail/solicitud-detail.module.ts ***!
      \******************************************************************/

    /*! exports provided: SolicitudDetailPageModule */

    /***/
    function wNm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SolicitudDetailPageModule", function () {
        return SolicitudDetailPageModule;
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


      var _solicitud_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./solicitud-detail-routing.module */
      "0571");
      /* harmony import */


      var _solicitud_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./solicitud-detail.page */
      "t5N5");

      var SolicitudDetailPageModule = function SolicitudDetailPageModule() {
        _classCallCheck(this, SolicitudDetailPageModule);
      };

      SolicitudDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _solicitud_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["SolicitudDetailPageRoutingModule"]],
        declarations: [_solicitud_detail_page__WEBPACK_IMPORTED_MODULE_6__["SolicitudDetailPage"]]
      })], SolicitudDetailPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-solicitud-detail-solicitud-detail-module-es5.js.map