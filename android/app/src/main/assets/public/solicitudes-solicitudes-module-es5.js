(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["solicitudes-solicitudes-module"], {
    /***/
    "++H8":
    /*!******************************************************************!*\
      !*** ./src/app/profesional/home/solicitudes/solicitudes.page.ts ***!
      \******************************************************************/

    /*! exports provided: SolicitudesPage */

    /***/
    function H8(module, __webpack_exports__, __webpack_require__) {
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
      "Vn2h");
      /* harmony import */


      var _solicitudes_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./solicitudes.page.scss */
      "A79Z");
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


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _service_reject_modal_service_reject_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./service-reject-modal/service-reject-modal.component */
      "lpiM");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var src_app_services_pro_solicitud_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/services/pro-solicitud.service */
      "zMwU");

      var SolicitudesPage = /*#__PURE__*/function () {
        function SolicitudesPage(modalController, router, menuController, us, lc, solicitudServicio, route) {
          var _this = this;

          _classCallCheck(this, SolicitudesPage);

          this.modalController = modalController;
          this.router = router;
          this.menuController = menuController;
          this.us = us;
          this.lc = lc;
          this.solicitudServicio = solicitudServicio;
          this.loadedServices = [];
          this.parsedHours = null;
          route.params.subscribe(function (val) {
            _this.userSub = _this.us.loggedUser.subscribe(function (user) {
              _this.grabbedUser = user;
              _this.headers = 'Bearer ' + _this.grabbedUser.access_token;

              _this.loadServices("1");
            });
          });
        }

        _createClass(SolicitudesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.menuController.enable(true, 'profesional');
          }
        }, {
          key: "loadServices",
          value: function loadServices(statusID) {
            var _this2 = this;

            this.lc.create({
              message: "Cargando lista de servicios..."
            }).then(function (loadingEl) {
              loadingEl.present();
              axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["API"] + "/supplier/requestservice/".concat(statusID), {
                headers: {
                  Authorization: _this2.headers
                }
              }).then(function (resData) {
                loadingEl.dismiss();
                _this2.loadedServices = resData.data.data;
                _this2.loadedServices = lodash__WEBPACK_IMPORTED_MODULE_11__["sortBy"](_this2.loadedServices, ['id']);
                _this2.loadedServices = lodash__WEBPACK_IMPORTED_MODULE_11__["reverse"](_this2.loadedServices);
              })["catch"](function (err) {
                console.log(err);
                loadingEl.dismiss();
              });
            });
          }
        }, {
          key: "openMenu",
          value: function openMenu() {
            this.menuController.open();
          }
        }, {
          key: "p",
          value: function p(hours) {
            var wHours = hours.split("/");
            var sHour = wHours[0].split("T");
            var sHour2 = sHour[1];
            sHour2 = sHour2.substring(0, 5);
            var eHour = wHours[1].split("T");
            var eHour2 = eHour[1];
            eHour2 = eHour2.substring(0, 5);
            return sHour2 + " - " + eHour2;
          }
        }, {
          key: "d",
          value: function d(address) {
            var wAdd = address.split(',');
            return wAdd[0] + ",<br>" + wAdd[1] + ", " + wAdd[2];
          }
        }, {
          key: "rechazarSolicitud",
          value: function rechazarSolicitud(solicitudID) {
            var _this3 = this;

            this.lc.create({
              message: "Cargando informacion del servicio..."
            }).then(function (loadingEl) {
              loadingEl.present();

              _this3.solicitudServicio.setID(solicitudID);

              axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["API"] + "/supplier/requestservicedetail/".concat(_this3.solicitudServicio.solicitud.id), {
                headers: {
                  Authorization: _this3.headers
                }
              }).then(function (resData) {
                loadingEl.dismiss();

                _this3.solicitudServicio.setClientLastName(resData.data.data.clientLastName);

                _this3.solicitudServicio.setClientName(resData.data.data.clientName);

                var wDate = resData.data.data.date_required.split("-");

                _this3.solicitudServicio.setDateRequired(resData.data.data.date_required);

                _this3.solicitudServicio.setDateCreated(resData.data.data.created_date);

                _this3.solicitudServicio.setDescription(resData.data.data.description);

                _this3.solicitudServicio.setHours(resData.data.data.hours);

                _this3.solicitudServicio.setImages(resData.data.data.images);

                _this3.solicitudServicio.setClientImg(resData.data.data.img_client_profile);

                _this3.solicitudServicio.setTicketNumber(resData.data.data.ticket_number);

                _this3.solicitudServicio.setCategoryID(resData.data.data.categoryName);

                _this3.solicitudServicio.setStatusID(resData.data.data.status_id);

                _this3.solicitudServicio.setClientPhone(resData.data.data.clientPhone1);

                _this3.solicitudServicio.setCosto(resData.data.data.request_cost[0] && resData.data.data.request_cost[0]);
              }).then(function () {
                _this3.modalController.create({
                  component: _service_reject_modal_service_reject_modal_component__WEBPACK_IMPORTED_MODULE_9__["ServiceRejectModalComponent"],
                  cssClass: 'modalSE'
                }).then(function (modalEl) {
                  modalEl.present();
                  modalEl.onDidDismiss().then(function (data) {
                    if (data) {
                      _this3.loadServices("1");
                    }
                  });
                });
              })["catch"](function (err) {
                loadingEl.dismiss();
              });
            });
          }
        }, {
          key: "formatDate",
          value: function formatDate(date) {
            return moment__WEBPACK_IMPORTED_MODULE_10__(date, 'DD/MM/YYYY').format('DD MMM YYYY');
          }
        }, {
          key: "aceptarSolicitud",
          value: function aceptarSolicitud(solicitudID, type) {
            this.solicitudServicio.setID(solicitudID);
            this.solicitudServicio.setSolicitudType(type);
            this.router.navigate(['/profesional/solicitudes/solicitudes-detail']);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.userSub.unsubscribe();
          }
        }]);

        return SolicitudesPage;
      }();

      SolicitudesPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }, {
          type: src_app_services_pro_solicitud_service__WEBPACK_IMPORTED_MODULE_12__["ProSolicitudService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
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
    "A79Z":
    /*!********************************************************************!*\
      !*** ./src/app/profesional/home/solicitudes/solicitudes.page.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function A79Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".prof-cont {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  margin-bottom: 10px;\n}\n\n.titleSelect {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.mainText {\n  font-size: 13px;\n}\n\n.miniText {\n  font-size: 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  line-height: 16px;\n  max-height: 32px;\n  -webkit-box-orient: vertical;\n}\n\n.title {\n  font-size: 17px;\n}\n\n.miniBtnTxt {\n  font-size: 8px;\n}\n\n.iconSize {\n  font-size: 20px;\n}\n\n.iconS {\n  font-size: 22px;\n}\n\n.iconFix {\n  margin-bottom: -2px;\n}\n\n.urgent-text {\n  font-weight: bold;\n}\n\n.iconFix {\n  margin-bottom: -2px;\n  margin-left: 2px;\n  margin-right: 2px;\n}\n\n.ion-item-solicitudes {\n  --background: white;\n  --border-color: white;\n}\n\n.textSelect {\n  font-size: 10px;\n  line-height: 1.4;\n  margin-bottom: 0;\n}\n\n.ion-no-padding-left {\n  padding-left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NvbGljaXR1ZGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdFQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUFBO0VBQ0ksZUFBQTtBQUdKOztBQURBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FBSUo7O0FBRkE7RUFDSSxlQUFBO0FBS0o7O0FBSEE7RUFDSSxjQUFBO0FBTUo7O0FBSkE7RUFDSSxlQUFBO0FBT0o7O0FBTEE7RUFDSSxlQUFBO0FBUUo7O0FBTkE7RUFDSSxtQkFBQTtBQVNKOztBQU5BO0VBQ0ksaUJBQUE7QUFTSjs7QUFOQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVNKOztBQU5BO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtBQVNKOztBQU5BO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFTSjs7QUFOQTtFQUNJLGVBQUE7QUFTSiIsImZpbGUiOiJzb2xpY2l0dWRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZi1jb250IHtcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi50aXRsZVNlbGVjdCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1haW5UZXh0IHtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG4ubWluaVRleHQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICBtYXgtaGVpZ2h0OiAzMnB4O1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG59XG4udGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbn1cbi5taW5pQnRuVHh0IHtcbiAgICBmb250LXNpemU6IDhweDtcbn1cbi5pY29uU2l6ZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuLmljb25TIHtcbiAgICBmb250LXNpemU6IDIycHg7XG59XG4uaWNvbkZpeCB7XG4gICAgbWFyZ2luLWJvdHRvbTogLTJweDtcbn1cblxuLnVyZ2VudC10ZXh0IHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmljb25GaXgge1xuICAgIG1hcmdpbi1ib3R0b206IC0ycHg7XG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbn1cblxuLmlvbi1pdGVtLXNvbGljaXR1ZGVzIHtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnRleHRTZWxlY3Qge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5pb24tbm8tcGFkZGluZy1sZWZ0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "SSIZ":
    /*!****************************************************************************!*\
      !*** ./src/app/profesional/home/solicitudes/solicitudes-routing.module.ts ***!
      \****************************************************************************/

    /*! exports provided: SolicitudesPageRoutingModule */

    /***/
    function SSIZ(module, __webpack_exports__, __webpack_require__) {
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
      "++H8");

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
    "Vn2h":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profesional/home/solicitudes/solicitudes.page.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Vn2h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n\n    <ion-buttons slot=\"start\">\n      <ion-button class=\"homeBtn\" (click)=\"openMenu()\">\n        <ion-icon name=\"menu\" class=\"homeBtn\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title class=\"title-toolbar\">SOLICITUDES</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- title -->\n  <ion-grid fixed>\n    <ion-row class=\"ion-margin-top\">\n      <ion-col size=\"11\" class=\"ion-text-left\">\n        <ion-text class=\"main-color title\" *ngIf=\"loadedServices.length > 0\">\n          <b>Buenos días <span class=\"ion-text-capitalize\">{{grabbedUser.name}} {{grabbedUser.last_name}}</span>, tienes\n            las siguientes solicitudes por aceptar.</b>\n        </ion-text>\n        <ion-text class=\"main-color title\" *ngIf=\"loadedServices.length === 0\">\n          <b>Buenos días <span class=\"ion-text-capitalize\">{{grabbedUser.name}} {{grabbedUser.last_name}}</span>, no\n            tienes solicitudes pendientes.</b>\n        </ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid fixed>\n    <!-- solicitud card item -->\n    <div class=\"prof-cont no-border\" *ngFor=\"let service of loadedServices\">\n      <ion-item-sliding>\n        <ion-item-options side=\"start\">\n          <ion-item-option fill=\"outline\" color=\"danger\" (click)=\"rechazarSolicitud(service.id)\">\n            <ion-icon slot=\"start\" name=\"close\" class=\"iconSize\"></ion-icon> Rechazar\n          </ion-item-option>\n        </ion-item-options>\n\n        <ion-item class=\"ion-no-padding ion-item-solicitudes\" button\n          (click)=\"aceptarSolicitud(service.id, service.type_request)\" *ngIf=\"service.type_request != 'URGENT'\">\n          <ion-grid>\n            <ion-row class=\"ion-align-items-center\">\n              <!-- title -->\n              <ion-col size=\"12\" class=\"ion-justify-content-center\">\n                <ion-text>\n                  <ion-badge color=\"primary\" class=\"titleSelect ion-text-capitalize\">{{ service.categoryName }}\n                  </ion-badge>\n                  <br>\n                  <ion-text class=\"mainText\">\n                    {{ service.adress }}\n                  </ion-text>\n                  <br>\n\n                  <ion-text class=\"miniText textSelect\" color=\"primary\">{{ service.description }}</ion-text>\n                </ion-text>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n\n        <ion-item class=\"ion-no-padding ion-item-solicitudes\" button\n          (click)=\"aceptarSolicitud(service.id, service.type_request)\" *ngIf=\"service.type_request === 'URGENT'\">\n          <ion-grid>\n            <ion-row class=\"ion-align-items-center\">\n              <!-- title -->\n              <ion-col size=\"8\" class=\"ion-justify-content-center\">\n                <ion-text>\n                  <ion-row class=\"ion-align-items-center\">\n                    <ion-badge color=\"danger\" class=\"titleSelect ion-text-capitalize\">{{ service.categoryName }}\n                    </ion-badge>\n                    <ion-icon src=\"/assets/icon/ic_error.svg\" color=\"primary\" class=\"iconFix\"></ion-icon>\n                  </ion-row>\n                  <ion-text class=\"mainText\">\n                    {{ service.adress }}\n                  </ion-text>\n                  <br>\n                  <ion-row>\n                    <ion-col class=\"ion-no-padding\" size=\"12\">\n                      <ion-text class=\"miniText textSelect\" color=\"danger\">{{ service.description }}\n                      </ion-text>\n                    </ion-col>\n                    <!-- <ion-col size=\"6\">\n                    <ion-text class=\"miniText urgent-text\" color=\"danger\">\n                      <ion-icon src=\"/assets/icon/ic_date_range_red.svg\" color=\"primary\" class=\"iconFix\"></ion-icon>\n                      {{ formatDate(service.date_required) }}\n                    </ion-text>\n                  </ion-col> -->\n                  </ion-row>\n                </ion-text>\n              </ion-col>\n              <ion-col size=\"4\">\n                <ion-text class=\"miniText urgent-text\" color=\"danger\">\n                  <ion-icon src=\"/assets/icon/ic_date_range_red.svg\" color=\"primary\" class=\"iconFix\"></ion-icon>\n                  {{ formatDate(service.date_required) }}\n                </ion-text>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n\n        <ion-item-options side=\"end\">\n          <ion-item-option color=\"success\" (click)=\"aceptarSolicitud(service.id, service.type_request)\">\n            <ion-icon slot=\"start\" name=\"checkmark\" class=\"iconSize\"></ion-icon> Aceptar\n          </ion-item-option>\n        </ion-item-options>\n      </ion-item-sliding>\n    </div>\n\n  </ion-grid>\n\n  <!-- solicitud rechazada card item -->\n  <!-- <div class=\"prof-cont no-border\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\"> -->\n\n  <!-- title -->\n  <!-- <ion-col size=\"7\" class=\"ion-justify-content-center\">\n          <ion-text>\n            <ion-badge color=\"danger\" class=\"titleSelect\">Carpintería</ion-badge>&nbsp;\n            <ion-icon color=\"danger\" name=\"alert-circle\" class=\"iconS\"></ion-icon>\n            <br>\n            <ion-text class=\"mainText\">\n              Pasaje Estral Poniente<br>\n              666 Maipú, Chile\n            </ion-text>\n            <br>\n            <ion-text class=\"miniText\" color=\"danger\">\n              Cambio de chapas\n              <ion-icon name=\"calendar\" color=\"danger\" class=\"iconFix\"></ion-icon>\n              16 dic 2020\n            </ion-text>\n          </ion-text>\n        </ion-col> -->\n\n  <!-- rating -->\n  <!-- <ion-col size=\"5\">\n          <ion-button expand=\"block\" shape=\"round\" color=\"success\" class=\"miniBtnTxt\" (click)=\"aceptarSolicitud()\">\n            <ion-icon slot=\"start\" name=\"checkmark\" class=\"iconSize\"></ion-icon>\n            ACEPTAR\n          </ion-button>\n          <ion-button expand=\"block\" fill=\"outline\" color=\"danger\" shape=\"round\" class=\"miniBtnTxt\" (click)=\"rechazarSolicitud()\">\n            <ion-icon slot=\"start\" name=\"close\" class=\"iconSize\"></ion-icon>\n            RECHAZAR\n          </ion-button>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div> -->\n\n</ion-content>";
      /***/
    },

    /***/
    "tQ1+":
    /*!********************************************************************!*\
      !*** ./src/app/profesional/home/solicitudes/solicitudes.module.ts ***!
      \********************************************************************/

    /*! exports provided: SolicitudesPageModule */

    /***/
    function tQ1(module, __webpack_exports__, __webpack_require__) {
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
      "SSIZ");
      /* harmony import */


      var _solicitudes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./solicitudes.page */
      "++H8");

      var SolicitudesPageModule = function SolicitudesPageModule() {
        _classCallCheck(this, SolicitudesPageModule);
      };

      SolicitudesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _solicitudes_routing_module__WEBPACK_IMPORTED_MODULE_5__["SolicitudesPageRoutingModule"]],
        declarations: [_solicitudes_page__WEBPACK_IMPORTED_MODULE_6__["SolicitudesPage"]]
      })], SolicitudesPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=solicitudes-solicitudes-module-es5.js.map