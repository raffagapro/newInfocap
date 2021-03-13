(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["finalizados-finalizados-details-finalizados-details-module"], {
    /***/
    "4nSd":
    /*!**********************************************************************************************!*\
      !*** ./src/app/profesional/home/finalizados/finalizados-details/finalizados-details.page.ts ***!
      \**********************************************************************************************/

    /*! exports provided: FinalizadosDetailsPage */

    /***/
    function nSd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FinalizadosDetailsPage", function () {
        return FinalizadosDetailsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_finalizados_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./finalizados-details.page.html */
      "EzMD");
      /* harmony import */


      var _finalizados_details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./finalizados-details.page.scss */
      "UqX/");
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

      var FinalizadosDetailsPage = /*#__PURE__*/function () {
        function FinalizadosDetailsPage(router, menuController, solServ, us, http, lc) {
          _classCallCheck(this, FinalizadosDetailsPage);

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
            categoryName: null,
            clientPhone1: null
          };
          this.slideOptions = {
            initialSlide: 0,
            slidesPerView: 2,
            autoplay: true
          };
        }

        _createClass(FinalizadosDetailsPage, [{
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
                _this.loadedInfo.clientPhone1 = resData['data'].clientPhone1;
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
          key: "rateClient",
          value: function rateClient() {
            this.router.navigate(['/profesional/home/home-tabs/finalizados/rate-form']);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.userSub.unsubscribe();
          }
        }]);

        return FinalizadosDetailsPage;
      }();

      FinalizadosDetailsPage.ctorParameters = function () {
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

      FinalizadosDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-finalizados-details',
        template: _raw_loader_finalizados_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_finalizados_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FinalizadosDetailsPage);
      /***/
    },

    /***/
    "CeUq":
    /*!************************************************************************************************!*\
      !*** ./src/app/profesional/home/finalizados/finalizados-details/finalizados-details.module.ts ***!
      \************************************************************************************************/

    /*! exports provided: FinalizadosDetailsPageModule */

    /***/
    function CeUq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FinalizadosDetailsPageModule", function () {
        return FinalizadosDetailsPageModule;
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


      var _finalizados_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./finalizados-details-routing.module */
      "G68r");
      /* harmony import */


      var _finalizados_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./finalizados-details.page */
      "4nSd");

      var FinalizadosDetailsPageModule = function FinalizadosDetailsPageModule() {
        _classCallCheck(this, FinalizadosDetailsPageModule);
      };

      FinalizadosDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _finalizados_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["FinalizadosDetailsPageRoutingModule"]],
        declarations: [_finalizados_details_page__WEBPACK_IMPORTED_MODULE_6__["FinalizadosDetailsPage"]]
      })], FinalizadosDetailsPageModule);
      /***/
    },

    /***/
    "EzMD":
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profesional/home/finalizados/finalizados-details/finalizados-details.page.html ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EzMD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    \n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/profesional/home/home-tabs/finalizados\" text=\"\" icon=\"arrow-back\"></ion-back-button>\n      <ion-button class=\"homeBtn\" (click)=\"openMenu()\">\n        <ion-icon name=\"menu\" class=\"homeBtn\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title class=\"title-toolbar\">DETALLES SOLICITUD</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- profesional card item -->\n  <div class=\"no-border\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n        <!-- profile img -->\n        <ion-col size=\"4\" offset=\"1\">\n          <ion-avatar class=\"profileImg\">\n            <ion-img src=\"{{ !loadedInfo.img_client_profile ? 'assets/images/avatar.png' : 'http://workintest.herokuapp.com'+loadedInfo.img_client_profile  }}\"></ion-img>\n          </ion-avatar>\n        </ion-col>\n\n        <!-- title -->\n        <ion-col size=\"6\">\n          <ion-text>\n            <small class=\"ticket\">Ticket #{{ loadedInfo.ticket_number }}</small><br>\n            <span class=\"titleSelect main-color ion-text-capitalize\">{{ loadedInfo.categoryName }} para<br>\n              <span class=\"ion-text-capitalize titleName\">{{ loadedInfo.clientName+\" \"+loadedInfo.clientLastName }}</span>\n            </span><br>\n            <p class=\"main-color mini-text\" style=\"margin-top: 0; margin-bottom: 0;\">{{ d(loadedInfo.created_date) }}</p>\n          </ion-text>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <ion-grid>\n    \n    <!-- title -->\n    <ion-row>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-icon name=\"build\" class=\"main-color iconFixTitle\"></ion-icon>\n        <ion-text class=\"main-color title\"><b> Trabajo requerido</b></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-text class=\"titleText\">{{ loadedInfo.description }}</ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n    <!-- Slider -->\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-slides [options]=\"slideOptions\">\n          \n          <!-- slide -->\n          <ion-slide *ngFor=\"let image of loadedInfo.images\">\n            <img\n              src=\"{{ 'http://workintest.herokuapp.com'+image.image }}\"\n              class=\"imgSlide\"\n            >\n          </ion-slide>\n\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n\n    <!-- Fecha de relizacion -->\n    <ion-row>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-icon name=\"calendar-outline\" class=\"main-color iconFixTitle\"></ion-icon>\n        <ion-text class=\"main-color subtitle\"><b> Fecha de realización</b></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-text class=\"subText\"> {{ loadedInfo.date_required }}</ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n    <!-- Costo -->\n    <ion-row>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-icon name=\"wallet-outline\" class=\"main-color iconFixTitle\"></ion-icon>\n        <ion-text class=\"main-color subtitle\"><b> Costo</b></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-text class=\"subText\"> $30 USD</ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n    <!-- iniciar trabajo BTN -->\n    <ion-row class=\"ion-margin-top ion-margin-bottom\">\n      <ion-col size=\"1\"></ion-col>\n      <ion-col>\n        <ion-button expand=\"block\" class=\"ion-text-uppercase\" color=\"primary\" (click)=\"rateClient()\">\n          <ion-icon slot=\"start\" name=\"thumbs-up\"></ion-icon>\n          CALIFICARAL CLIENTE\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "G68r":
    /*!********************************************************************************************************!*\
      !*** ./src/app/profesional/home/finalizados/finalizados-details/finalizados-details-routing.module.ts ***!
      \********************************************************************************************************/

    /*! exports provided: FinalizadosDetailsPageRoutingModule */

    /***/
    function G68r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FinalizadosDetailsPageRoutingModule", function () {
        return FinalizadosDetailsPageRoutingModule;
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


      var _finalizados_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./finalizados-details.page */
      "4nSd");

      var routes = [{
        path: '',
        component: _finalizados_details_page__WEBPACK_IMPORTED_MODULE_3__["FinalizadosDetailsPage"]
      }];

      var FinalizadosDetailsPageRoutingModule = function FinalizadosDetailsPageRoutingModule() {
        _classCallCheck(this, FinalizadosDetailsPageRoutingModule);
      };

      FinalizadosDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FinalizadosDetailsPageRoutingModule);
      /***/
    },

    /***/
    "UqX/":
    /*!************************************************************************************************!*\
      !*** ./src/app/profesional/home/finalizados/finalizados-details/finalizados-details.page.scss ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function UqX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".no-border {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n\n.profileImg {\n  margin-left: 10px;\n  height: 75px;\n  width: 75px;\n}\n\n.titleSelect {\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.titleName {\n  font-size: 18px;\n}\n\n.title {\n  font-size: 20px;\n}\n\n.titleText {\n  font-size: 16px;\n}\n\n.subtitle {\n  font-size: 18px;\n}\n\n.subText {\n  font-size: 14px;\n}\n\n.minusMargin {\n  margin-top: -25px;\n}\n\n.iconFix {\n  margin-bottom: -3px;\n}\n\n.mini-text {\n  font-size: 14px;\n}\n\n.ticket {\n  color: red;\n  font-size: 12px;\n}\n\n.locate-cont {\n  border-radius: 50px;\n  height: 45px;\n  width: 45px;\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: 5px;\n  background-color: #009ACE;\n}\n\n.bg-green-color {\n  background-color: #2dd36f;\n}\n\n.rating-text {\n  font-size: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  display: inline-flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2ZpbmFsaXphZG9zLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUFBO0VBRUksZUFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQUE7RUFFSSxlQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0FBR0o7O0FBREE7RUFDSSxlQUFBO0FBSUo7O0FBRkE7RUFDSSxlQUFBO0FBS0o7O0FBSEE7RUFDSSxlQUFBO0FBTUo7O0FBSkE7RUFDSSxpQkFBQTtBQU9KOztBQUxBO0VBQ0ksbUJBQUE7QUFRSjs7QUFOQTtFQUVJLGVBQUE7QUFRSjs7QUFOQTtFQUVJLFVBQUE7RUFDQSxlQUFBO0FBUUo7O0FBTkE7RUFFSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBUUo7O0FBTkE7RUFFSSx5QkFBQTtBQVFKOztBQU5BO0VBRUksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQVFKIiwiZmlsZSI6ImZpbmFsaXphZG9zLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vLWJvcmRlcntcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XG59XG4ucHJvZmlsZUltZ3tcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgd2lkdGg6IDc1cHg7XG59XG4udGl0bGVTZWxlY3RcbntcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4udGl0bGVOYW1lXG57XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuLnRpdGxle1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuLnRpdGxlVGV4dHtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG4uc3VidGl0bGV7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuLnN1YlRleHR7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1pbnVzTWFyZ2lue1xuICAgIG1hcmdpbi10b3A6IC0yNXB4O1xufVxuLmljb25GaXh7XG4gICAgbWFyZ2luLWJvdHRvbTogLTNweDtcbn1cbi5taW5pLXRleHRcbntcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4udGlja2V0XG57XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4ubG9jYXRlLWNvbnRcbntcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICB3aWR0aDogNDVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5QUNFO1xufVxuLmJnLWdyZWVuLWNvbG9yXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkZDM2Zjtcbn1cbi5yYXRpbmctdGV4dFxue1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=finalizados-finalizados-details-finalizados-details-module-es5.js.map