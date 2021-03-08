(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agendados-agendados-detail-agendados-detail-module"], {
    /***/
    "AIyI":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profesional/home/agendados/agendados-detail/agendados-detail.page.html ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function AIyI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    \n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/profesional/home/home-tabs/agendados\" text=\"\" icon=\"arrow-back\"></ion-back-button>\n      <ion-button class=\"homeBtn\" (click)=\"openMenu()\">\n        <ion-icon name=\"menu\" class=\"homeBtn\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title class=\"title-toolbar\">DETALLES SOLICITUD</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- profesional card item -->\n  <div class=\"no-border\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n        <!-- profile img -->\n        <ion-col size=\"4\" offset=\"1\">\n          <ion-avatar class=\"profileImg\">\n            <ion-img src=\"{{ !loadedInfo.img_client_profile ? 'assets/images/avatar.png' : 'http://workintest.herokuapp.com'+loadedInfo.img_client_profile  }}\"></ion-img>\n          </ion-avatar>\n        </ion-col>\n\n        <!-- title -->\n        <ion-col size=\"6\">\n          <ion-text>\n            <small class=\"ticket\">Ticket #{{ loadedInfo.ticket_number }}</small><br>\n            <span class=\"titleSelect main-color ion-text-capitalize\">{{ loadedInfo.categoryName }} para<br>\n              <span class=\"ion-text-capitalize titleName\">{{ loadedInfo.clientName+\" \"+loadedInfo.clientLastName }}</span>\n            </span><br>\n            <p class=\"main-color mini-text\" style=\"margin-top: 0; margin-bottom: 0;\">{{ d(loadedInfo.created_date) }}</p>\n          </ion-text>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <ion-grid>\n    \n    <!-- title -->\n    <ion-row>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-icon name=\"build\" class=\"main-color iconFixTitle\"></ion-icon>\n        <ion-text class=\"main-color title\"><b> Trabajo requerido</b></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-text class=\"titleText\">{{ loadedInfo.description }}</ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n    <!-- Slider -->\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-slides [options]=\"slideOptions\">\n          \n          <!-- slide -->\n          <ion-slide *ngFor=\"let image of loadedInfo.images\">\n            <img\n              src=\"{{ 'http://workintest.herokuapp.com'+image.image }}\"\n              class=\"imgSlide\"\n            >\n          </ion-slide>\n\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n\n    <!-- Fecha de visita -->\n    <ion-row>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-icon name=\"calendar-outline\" class=\"main-color iconFixTitle\"></ion-icon>\n        <ion-text class=\"main-color subtitle\"><b> Fecha de visita</b></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-text class=\"subText\"> {{ loadedInfo.date_required }}</ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n    <!-- Rango de horas -->\n    <ion-row>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-icon name=\"time\" class=\"main-color iconFixTitle\"></ion-icon>\n        <ion-text class=\"main-color subtitle\"><b> Rango de horas</b></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-text class=\"subText\"> {{ p(loadedInfo.hours) }} horas</ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n    <!-- Costo -->\n    <ion-row>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-icon name=\"wallet-outline\" class=\"main-color iconFixTitle\"></ion-icon>\n        <ion-text class=\"main-color subtitle\"><b> Costo</b></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-text class=\"subText\"> ${{ loadedInfo.cost }}</ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n    <!-- Metodo de pago -->\n    <ion-row>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-icon name=\"cash-outline\" class=\"main-color iconFixTitle\"></ion-icon>\n        <ion-text class=\"main-color subtitle\"><b> Método de pago</b></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-text class=\"subText\"> Efectivo</ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n    <!-- Metodo de pago -->\n    <ion-row>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-text class=\"main-color subtitle\"><b>Contactar</b></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <!-- icons -->\n        <div class=\"locate-cont bg-green-color\">\n          <ion-icon name=\"call\" color=\"light\" class=\"rating-text\"></ion-icon>\n        </div>\n        <div class=\"locate-cont bg-green-color\">\n          <ion-icon name=\"logo-whatsapp\" color=\"light\" class=\"rating-text\"></ion-icon>\n        </div>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n    \n\n    <!-- iniciar trabajo BTN -->\n    <ion-row class=\"ion-margin-top ion-margin-bottom\">\n      <ion-col size=\"1\"></ion-col>\n      <ion-col>\n        <ion-button size=\"5\" expand=\"block\" class=\"ion-text-uppercase\" color=\"success\" (click)=\"confirmSolicitud()\">\n          <ion-icon slot=\"start\" name=\"build\"></ion-icon>\n          INICIO DEL TRABAJO\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n    <!-- finalizar trabajo BTN -->\n    <ion-row class=\"ion-margin-top ion-margin-bottom\">\n      <ion-col size=\"1\"></ion-col>\n      <ion-col>\n        <ion-button size=\"5\" expand=\"block\" class=\"ion-text-uppercase\" color=\"danger\" (click)=\"finalizarSolicitud()\">\n          <ion-icon slot=\"start\" name=\"build\"></ion-icon>\n          FINALIZAR TRABAJO\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "DPWe":
    /*!****************************************************************************************!*\
      !*** ./src/app/profesional/home/agendados/agendados-detail/agendados-detail.module.ts ***!
      \****************************************************************************************/

    /*! exports provided: AgendadosDetailPageModule */

    /***/
    function DPWe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgendadosDetailPageModule", function () {
        return AgendadosDetailPageModule;
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


      var _agendados_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./agendados-detail-routing.module */
      "XpAj");
      /* harmony import */


      var _agendados_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./agendados-detail.page */
      "PxKf");

      var AgendadosDetailPageModule = function AgendadosDetailPageModule() {
        _classCallCheck(this, AgendadosDetailPageModule);
      };

      AgendadosDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _agendados_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["AgendadosDetailPageRoutingModule"]],
        declarations: [_agendados_detail_page__WEBPACK_IMPORTED_MODULE_6__["AgendadosDetailPage"]]
      })], AgendadosDetailPageModule);
      /***/
    },

    /***/
    "Lhui":
    /*!****************************************************************************************!*\
      !*** ./src/app/profesional/home/agendados/agendados-detail/agendados-detail.page.scss ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function Lhui(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".no-border {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n\n.profileImg {\n  margin-left: 10px;\n  height: 75px;\n  width: 75px;\n}\n\n.titleSelect {\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.titleName {\n  font-size: 18px;\n}\n\n.title {\n  font-size: 20px;\n}\n\n.titleText {\n  font-size: 16px;\n}\n\n.imgSlide {\n  height: 125px;\n}\n\n.subtitle {\n  font-size: 18px;\n}\n\n.subText {\n  font-size: 14px;\n}\n\n.minusMargin {\n  margin-top: -25px;\n}\n\n.iconFix {\n  margin-bottom: -3px;\n}\n\n.mini-text {\n  font-size: 14px;\n}\n\n.ticket {\n  color: red;\n  font-size: 12px;\n}\n\n.locate-cont {\n  border-radius: 50px;\n  height: 45px;\n  width: 45px;\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: 5px;\n  background-color: #009ACE;\n}\n\n.bg-green-color {\n  background-color: #2dd36f;\n}\n\n.rating-text {\n  font-size: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  display: inline-flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2FnZW5kYWRvcy1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0JBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUVBO0VBRUksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUVBO0VBRUksZUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBRUE7RUFFSSxlQUFBO0FBQUo7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0FBRUo7O0FBQUE7RUFDSSxhQUFBO0FBR0o7O0FBREE7RUFDSSxlQUFBO0FBSUo7O0FBRkE7RUFDSSxlQUFBO0FBS0o7O0FBSEE7RUFDSSxpQkFBQTtBQU1KOztBQUpBO0VBQ0ksbUJBQUE7QUFPSjs7QUFMQTtFQUVJLGVBQUE7QUFPSjs7QUFMQTtFQUVJLFVBQUE7RUFDQSxlQUFBO0FBT0o7O0FBTEE7RUFFSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBT0o7O0FBTEE7RUFFSSx5QkFBQTtBQU9KOztBQUxBO0VBRUksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQU9KIiwiZmlsZSI6ImFnZW5kYWRvcy1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vLWJvcmRlclxue1xuICAgIHBhZGRpbmctdG9wOiAycHg7XG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcbn1cbi5wcm9maWxlSW1nXG57XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIHdpZHRoOiA3NXB4O1xufVxuLnRpdGxlU2VsZWN0XG57XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnRpdGxlTmFtZVxue1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cbi50aXRsZXtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbi50aXRsZVRleHR7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuLmltZ1NsaWRle1xuICAgIGhlaWdodDoxMjVweDtcbn1cbi5zdWJ0aXRsZXtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG4uc3ViVGV4dHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4ubWludXNNYXJnaW57XG4gICAgbWFyZ2luLXRvcDogLTI1cHg7XG59XG4uaWNvbkZpeHtcbiAgICBtYXJnaW4tYm90dG9tOiAtM3B4O1xufVxuLm1pbmktdGV4dFxue1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi50aWNrZXRcbntcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5sb2NhdGUtY29udFxue1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDlBQ0U7XG59XG4uYmctZ3JlZW4tY29sb3JcbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmRkMzZmO1xufVxuLnJhdGluZy10ZXh0XG57XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn0iXX0= */";
      /***/
    },

    /***/
    "PxKf":
    /*!**************************************************************************************!*\
      !*** ./src/app/profesional/home/agendados/agendados-detail/agendados-detail.page.ts ***!
      \**************************************************************************************/

    /*! exports provided: AgendadosDetailPage */

    /***/
    function PxKf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgendadosDetailPage", function () {
        return AgendadosDetailPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_agendados_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./agendados-detail.page.html */
      "AIyI");
      /* harmony import */


      var _agendados_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./agendados-detail.page.scss */
      "Lhui");
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/solicitud.service */
      "rLtr");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var AgendadosDetailPage = /*#__PURE__*/function () {
        function AgendadosDetailPage(router, menuController, solServ, us, http, lc) {
          _classCallCheck(this, AgendadosDetailPage);

          this.router = router;
          this.menuController = menuController;
          this.solServ = solServ;
          this.us = us;
          this.http = http;
          this.lc = lc;
          this.loadedInfo = {
            img_client_profile: null,
            ticket_number: null,
            clientName: null,
            clientLastName: null,
            date_required: null,
            hours: null,
            description: null,
            images: null,
            categoryName: null
          };
          this.slideOptions = {
            initialSlide: 0,
            slidesPerView: 2,
            autoplay: true
          };
        }

        _createClass(AgendadosDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.userSub = this.us.loggedUser.subscribe(function (user) {
              _this.grabbedUser = user;
            });
            this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Authorization', 'Bearer ' + this.grabbedUser.access_token);
            this.lc.create({
              message: "Cargando informacion del servicio..."
            }).then(function (loadingEl) {
              loadingEl.present();

              _this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["API"] + "/supplier/requestservicedetail/".concat(_this.solServ.solicitud.solicitudID), {
                headers: _this.headers
              }).subscribe(function (resData) {
                console.log(resData['data']);
                loadingEl.dismiss();
                _this.loadedInfo.clientLastName = resData['data'].clientLastName;
                _this.loadedInfo.clientName = resData['data'].clientName;
                _this.loadedInfo.date_required = resData['data'].date_required;
                _this.loadedInfo.description = resData['data'].description;
                _this.loadedInfo.hours = resData['data'].hours;
                _this.loadedInfo.images = resData['data'].images;
                _this.loadedInfo.img_client_profile = resData['data'].img_client_profile;
                _this.loadedInfo.ticket_number = resData['data'].ticket_number;
                _this.loadedInfo.categoryName = resData['data'].categoryName;
              }, function (err) {
                console.log(err);
                loadingEl.dismiss();
              });
            });
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
        }, {
          key: "p",
          value: function p(hours) {
            if (hours) {
              var wHours = hours.split("/");
              var sHour = wHours[0].split("T");
              var sHour2 = sHour[1];
              sHour2 = sHour2.substring(0, 5);
              var eHour = wHours[1].split("T");
              var eHour2 = eHour[1];
              eHour2 = eHour2.substring(0, 5);
              return sHour2 + " - " + eHour2;
            }
          }
        }, {
          key: "d",
          value: function d(date) {
            if (date) {
              var wDate = date.split(" ");
              return wDate[0];
            }
          }
        }, {
          key: "solicitudDetail",
          value: function solicitudDetail() {// this.router.navigate(['/profesional/home/home-tabs/agendados/agendados-finalizar']);
          }
        }, {
          key: "finalizarSolicitud",
          value: function finalizarSolicitud() {
            this.router.navigate(['/profesional/home/home-tabs/agendados/agendados-finalizar']);
          }
        }, {
          key: "confirmSolicitud",
          value: function confirmSolicitud() {// do something awesome
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.userSub.unsubscribe();
          }
        }]);

        return AgendadosDetailPage;
      }();

      AgendadosDetailPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"]
        }, {
          type: src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_7__["SolicitudService"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
        }];
      };

      AgendadosDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-agendados-detail',
        template: _raw_loader_agendados_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_agendados_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AgendadosDetailPage);
      /***/
    },

    /***/
    "XpAj":
    /*!************************************************************************************************!*\
      !*** ./src/app/profesional/home/agendados/agendados-detail/agendados-detail-routing.module.ts ***!
      \************************************************************************************************/

    /*! exports provided: AgendadosDetailPageRoutingModule */

    /***/
    function XpAj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgendadosDetailPageRoutingModule", function () {
        return AgendadosDetailPageRoutingModule;
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


      var _agendados_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./agendados-detail.page */
      "PxKf");

      var routes = [{
        path: '',
        component: _agendados_detail_page__WEBPACK_IMPORTED_MODULE_3__["AgendadosDetailPage"]
      }];

      var AgendadosDetailPageRoutingModule = function AgendadosDetailPageRoutingModule() {
        _classCallCheck(this, AgendadosDetailPageRoutingModule);
      };

      AgendadosDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AgendadosDetailPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=agendados-agendados-detail-agendados-detail-module-es5.js.map