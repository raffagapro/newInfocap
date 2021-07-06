(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-visita-detail-visita-detail-module"], {
    /***/
    "3PkG":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/visita-detail/visita-detail.page.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function PkG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/user/solicitudes\" text=\"\" icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title class=\"title-toolbar text-center\">VISITA TÉCNICA</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- profesional card item -->\n  <div class=\"no-border ion-margin-top\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n        <!-- profile img -->\n        <ion-col size=\"4\" offset=\"1\" sizeMd=\"2\" offsetMd=\"2\">\n          <ion-avatar class=\"profileImg\">\n            <img src=\"{{ loadedService.img_profile || '/assets/images/avatar.png'}}\" />\n          </ion-avatar>\n        </ion-col>\n\n        <!-- title -->\n        <ion-col size=\"6\">\n          <ion-text>\n            <span class=\"titleSelect main-color\">{{loadedService.categoryName}} de {{loadedService.supplierName}}\n              {{loadedService.supplierLastName}}</span><br>\n            <p class=\"main-color mini-text\" style=\"margin-top: 0; margin-bottom: 0;\">\n              {{formatDate(loadedService.created_date, 'DD/MM/YYYY HH:mm:ss', true)}}</p>\n          </ion-text>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <ion-grid>\n\n    <!-- title -->\n    <ion-row>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-text class=\"main-color title\"><b>Trabajo a realizar</b></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-text class=\"titleText\">\n          {{loadedService.description}}\n        </ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n    <!-- Slider -->\n    <ion-row class=\"\" *ngIf=\"loadedService.img_request.length > 0\">\n      <ion-col size=\"12\">\n        <ion-slides [options]=\"slideOptions\">\n          <!-- slide -->\n          <ion-slide *ngFor=\"let image of loadedService.img_request\">\n            <img (click)=\"openImage(image.image)\" src=\"{{ image.image }}\" class=\"imgSlide\">\n          </ion-slide>\n\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n\n    <!-- Fecha de visita -->\n    <ion-row>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-text class=\"main-color subtitle\"><b>Fecha de visita</b></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-icon src=\"/assets/icon/ic_date_range.svg\" class=\"main-color iconFix\"></ion-icon>\n        <ion-text\n          *ngIf=\"loadedService && loadedService.request_technical && loadedService.request_technical.length === 0\"\n          class=\"subText\"> {{getRequiredDate()}}</ion-text>\n        <ion-text *ngIf=\"loadedService && loadedService.request_technical && loadedService.request_technical.length > 0\"\n          class=\"subText\"> {{formatDate(loadedService.request_technical[0].visit_date, 'YYYY-MM-DD')}}</ion-text>\n\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n    <!-- Rango de horas -->\n    <ion-row class=\"ion-margin-top\">\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-text class=\"main-color subtitle\"><b>Rango de horas</b></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-icon src=\"/assets/icon/ic_schedule.svg\" class=\"main-color iconFix\"></ion-icon>\n        <ion-text\n          *ngIf=\"loadedService && loadedService.request_technical && loadedService.request_technical.length === 0\"\n          class=\"subText\"> {{formatTime()}}</ion-text>\n        <ion-text *ngIf=\"loadedService && loadedService.request_technical && loadedService.request_technical.length > 0\"\n          class=\"subText\"> {{formatVisitTime()}}</ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n    <!-- eceptar visita BTN -->\n    <ion-row class=\"ion-margin-top\" *ngIf=\"showButtons\">\n      <ion-col size=\"1\"></ion-col>\n      <ion-col>\n        <ion-button size=\"5\" expand=\"block\" class=\"ion-text-uppercase\" (click)=\"confirmVisit(1)\">\n          ACEPTAR VISITA\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n    <!-- imitir por el momento BTN -->\n    <ion-row class=\"ion-margin-bottom\" *ngIf=\"showButtons\">\n      <ion-col size=\"1\"></ion-col>\n      <ion-col>\n        <ion-button size=\"5\" expand=\"block\" fill=\"outline\" class=\"ion-text-uppercase\" (click)=\"confirmVisit(0)\">\n          OMITIR POR EL MOMENTO\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>";
      /***/
    },

    /***/
    "KgL3":
    /*!************************************************************!*\
      !*** ./src/app/user/visita-detail/visita-detail.module.ts ***!
      \************************************************************/

    /*! exports provided: VisitaDetailPageModule */

    /***/
    function KgL3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VisitaDetailPageModule", function () {
        return VisitaDetailPageModule;
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


      var _visita_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./visita-detail-routing.module */
      "Vk+k");
      /* harmony import */


      var _visita_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./visita-detail.page */
      "dq/C");

      var VisitaDetailPageModule = function VisitaDetailPageModule() {
        _classCallCheck(this, VisitaDetailPageModule);
      };

      VisitaDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _visita_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["VisitaDetailPageRoutingModule"]],
        declarations: [_visita_detail_page__WEBPACK_IMPORTED_MODULE_6__["VisitaDetailPage"]]
      })], VisitaDetailPageModule);
      /***/
    },

    /***/
    "O496":
    /*!************************************************************!*\
      !*** ./src/app/user/visita-detail/visita-detail.page.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function O496(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".no-border {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n\n.profileImg {\n  margin-left: 10px;\n  height: 75px;\n  width: 75px;\n}\n\n.titleSelect {\n  font-size: 23px;\n  font-weight: bold;\n}\n\n.title {\n  font-size: 20px;\n}\n\n.titleText {\n  font-size: 16px;\n}\n\n.imgSlide {\n  height: 125px;\n}\n\n.subtitle {\n  font-size: 18px;\n}\n\n.subText {\n  font-size: 14px;\n}\n\n.minusMargin {\n  margin-top: -25px;\n}\n\n.iconFix {\n  margin-bottom: -3px;\n}\n\n.mini-text {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Zpc2l0YS1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUFBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBR0o7O0FBREE7RUFDSSxlQUFBO0FBSUo7O0FBRkE7RUFDSSxlQUFBO0FBS0o7O0FBSEE7RUFDSSxhQUFBO0FBTUo7O0FBSkE7RUFDSSxlQUFBO0FBT0o7O0FBTEE7RUFDSSxlQUFBO0FBUUo7O0FBTkE7RUFDSSxpQkFBQTtBQVNKOztBQVBBO0VBQ0ksbUJBQUE7QUFVSjs7QUFSQTtFQUVJLGVBQUE7QUFVSiIsImZpbGUiOiJ2aXNpdGEtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uby1ib3JkZXJ7XG4gICAgcGFkZGluZy10b3A6IDJweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xufVxuLnByb2ZpbGVJbWd7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIHdpZHRoOiA3NXB4O1xufVxuLnRpdGxlU2VsZWN0e1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi50aXRsZXtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbi50aXRsZVRleHR7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuLmltZ1NsaWRle1xuICAgIGhlaWdodDoxMjVweDtcbn1cbi5zdWJ0aXRsZXtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG4uc3ViVGV4dHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4ubWludXNNYXJnaW57XG4gICAgbWFyZ2luLXRvcDogLTI1cHg7XG59XG4uaWNvbkZpeHtcbiAgICBtYXJnaW4tYm90dG9tOiAtM3B4O1xufVxuLm1pbmktdGV4dFxue1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn0iXX0= */";
      /***/
    },

    /***/
    "Vk+k":
    /*!********************************************************************!*\
      !*** ./src/app/user/visita-detail/visita-detail-routing.module.ts ***!
      \********************************************************************/

    /*! exports provided: VisitaDetailPageRoutingModule */

    /***/
    function VkK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VisitaDetailPageRoutingModule", function () {
        return VisitaDetailPageRoutingModule;
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


      var _visita_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./visita-detail.page */
      "dq/C");

      var routes = [{
        path: '',
        component: _visita_detail_page__WEBPACK_IMPORTED_MODULE_3__["VisitaDetailPage"]
      }];

      var VisitaDetailPageRoutingModule = function VisitaDetailPageRoutingModule() {
        _classCallCheck(this, VisitaDetailPageRoutingModule);
      };

      VisitaDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VisitaDetailPageRoutingModule);
      /***/
    },

    /***/
    "dq/C":
    /*!**********************************************************!*\
      !*** ./src/app/user/visita-detail/visita-detail.page.ts ***!
      \**********************************************************/

    /*! exports provided: VisitaDetailPage */

    /***/
    function dqC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VisitaDetailPage", function () {
        return VisitaDetailPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_visita_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./visita-detail.page.html */
      "3PkG");
      /* harmony import */


      var _visita_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./visita-detail.page.scss */
      "O496");
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


      var src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/solicitud.service */
      "rLtr");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var src_app_shared_success_modal_success_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/success-modal/success-modal.component */
      "W/u7");
      /* harmony import */


      var src_app_shared_image_modal_image_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/image-modal/image-modal.component */
      "BPum");

      var VisitaDetailPage = /*#__PURE__*/function () {
        function VisitaDetailPage(modalController, router, loadingController, userService, menuController, solServ) {
          _classCallCheck(this, VisitaDetailPage);

          this.modalController = modalController;
          this.router = router;
          this.loadingController = loadingController;
          this.userService = userService;
          this.menuController = menuController;
          this.solServ = solServ;
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
            request_technical: [],
            history_status: []
          };
          this.slideOptions = {
            initialSlide: 0,
            slidesPerView: 2,
            autoplay: true
          };
          this.showButtons = true;
          this.error = false;
          this.errorMessage = '';
        }

        _createClass(VisitaDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.userSubscription = this.userService.loggedUser.subscribe(function (user) {
              _this.user = user;

              _this.loadService();
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.menuController.enable(true, 'user');
          }
        }, {
          key: "loadService",
          value: function loadService() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var loader, response;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingController.create({
                        message: ''
                      });

                    case 2:
                      loader = _context.sent;
                      _context.prev = 3;
                      _context.next = 6;
                      return loader.present();

                    case 6:
                      _context.next = 8;
                      return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["API"], "/client/requestservice/").concat(this.solServ.solicitud.solicitudID), {
                        headers: {
                          Authorization: "Bearer ".concat(this.user.access_token)
                        }
                      });

                    case 8:
                      response = _context.sent;
                      this.solServ.setServiceObj(response.data.data);
                      this.loadedService = response.data.data;

                      if (this.loadedService.img_request.length < 2) {
                        this.slideOptions.slidesPerView = 1;
                      }

                      this.showButtons = this.loadedService.status_id === 2;
                      _context.next = 18;
                      break;

                    case 15:
                      _context.prev = 15;
                      _context.t0 = _context["catch"](3);
                      console.log(_context.t0);

                    case 18:
                      _context.prev = 18;
                      loader.dismiss();
                      return _context.finish(18);

                    case 21:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[3, 15, 18, 21]]);
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
            var momentDate = moment__WEBPACK_IMPORTED_MODULE_10__["utc"](date, dateFormat);

            if (useTimezone) {
              momentDate.tz(moment__WEBPACK_IMPORTED_MODULE_10__["tz"].guess());
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
            var startHour = moment__WEBPACK_IMPORTED_MODULE_10__["utc"](hours[0]);
            var endHour = moment__WEBPACK_IMPORTED_MODULE_10__["utc"](hours[1]);
            return "".concat(startHour.format('h:mm a'), " - ").concat(endHour.format('h:mm a'));
          }
        }, {
          key: "formatVisitTime",
          value: function formatVisitTime() {
            if (!this.loadedService.request_technical || this.loadedService.request_technical.length == 0) {
              return 'ND';
            }

            var hours = this.loadedService.request_technical[0].visit_hours.replace(' ', '').split('-');
            var startHour = moment__WEBPACK_IMPORTED_MODULE_10__["utc"](hours[0], 'HH:mm');
            var endHour = moment__WEBPACK_IMPORTED_MODULE_10__["utc"](hours[1], 'HH:mm');
            console.log(startHour);
            console.log(endHour);
            return "".concat(startHour.format('h:mm a'), " - ").concat(endHour.format('h:mm a'));
          }
        }, {
          key: "confirmVisit",
          value: function confirmVisit(client_accepted) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var loader, response, message, successModal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingController.create({
                        message: 'Enviando información...'
                      });

                    case 2:
                      loader = _context2.sent;
                      loader.present();
                      _context2.prev = 4;
                      _context2.next = 7;
                      return axios__WEBPACK_IMPORTED_MODULE_6___default.a.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["API"], "/client/requesttechnical/").concat(this.solServ.solicitud.solicitudID), {
                        client_accepted: client_accepted
                      }, {
                        headers: {
                          Authorization: "Bearer ".concat(this.user.access_token)
                        }
                      });

                    case 7:
                      response = _context2.sent;

                      if (response.data && response.data.status !== 200) {
                        this.error = false;
                        this.errorMessage = 'Ocurrió un error al enviar la solicitud.';
                      }

                      _context2.next = 14;
                      break;

                    case 11:
                      _context2.prev = 11;
                      _context2.t0 = _context2["catch"](4);
                      this.error = true;

                    case 14:
                      loader.dismiss();

                      if (this.error) {
                        _context2.next = 22;
                        break;
                      }

                      this.showButtons = false;
                      message = client_accepted === 1 ? 'HAZ ACEPTADO LA VISITA TÉCNICA' : 'HAZ OMITIDO LA VISITA TÉCNICA';
                      _context2.next = 20;
                      return this.modalController.create({
                        component: src_app_shared_success_modal_success_modal_component__WEBPACK_IMPORTED_MODULE_11__["SuccessModalComponent"],
                        componentProps: {
                          message: message,
                          redirect: false
                        },
                        cssClass: 'modalSuccess'
                      });

                    case 20:
                      successModal = _context2.sent;
                      successModal.present();

                    case 22:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[4, 11]]);
            }));
          }
        }, {
          key: "openImage",
          value: function openImage(image) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var successModal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.modalController.create({
                        component: src_app_shared_image_modal_image_modal_component__WEBPACK_IMPORTED_MODULE_12__["ImageModalComponent"],
                        componentProps: {
                          image: image
                        },
                        cssClass: 'modalImage'
                      });

                    case 2:
                      successModal = _context3.sent;
                      successModal.present();

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "getRequiredDate",
          value: function getRequiredDate() {
            if (this.loadedService.history_status && this.loadedService.history_status.length) {
              var requestSendStatus = this.loadedService.history_status.find(function (status) {
                return status.name === "VisitaTecnica";
              });
              if (requestSendStatus) return this.formatDate(requestSendStatus.date_required, "DD/MM/YYYY");
              return this.formatDate(this.loadedService.date_required, "DD-MM-YYYY");
            }

            return this.formatDate(this.loadedService.date_required, "DD-MM-YYYY");
          }
        }]);

        return VisitaDetailPage;
      }();

      VisitaDetailPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]
        }, {
          type: src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_7__["SolicitudService"]
        }];
      };

      VisitaDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-visita-detail',
        template: _raw_loader_visita_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_visita_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], VisitaDetailPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-visita-detail-visita-detail-module-es5.js.map