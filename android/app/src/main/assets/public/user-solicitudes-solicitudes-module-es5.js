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


      var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/solicitud.service */
      "rLtr");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      moment__WEBPACK_IMPORTED_MODULE_7__["locale"]('es');

      var SolicitudesPage = /*#__PURE__*/function () {
        function SolicitudesPage(router, menuController, http, us, lc, solServ) {
          _classCallCheck(this, SolicitudesPage);

          this.router = router;
          this.menuController = menuController;
          this.http = http;
          this.us = us;
          this.lc = lc;
          this.solServ = solServ;
        }

        _createClass(SolicitudesPage, [{
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
            this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Authorization', 'Bearer ' + this.grabbedUser.access_token);
            this.menuController.enable(true, 'user');
            this.loadServices();
          }
        }, {
          key: "formatdate",
          value: function formatdate(date) {
            return moment__WEBPACK_IMPORTED_MODULE_7__(date, 'DD/MM/YYYY').format('DD MMM YYYY');
          }
        }, {
          key: "loadServices",
          value: function loadServices() {
            var _this2 = this;

            this.lc.create({
              message: "Cargando lista de servicios..."
            }).then(function (loadingEl) {
              loadingEl.present();

              _this2.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["API"] + '/client/requestservices', {
                headers: _this2.headers
              }).subscribe(function (resData) {
                loadingEl.dismiss();
                _this2.loadedServices = resData['data'];

                _this2.loadedServices.sort(_this2.compare);
              }, function (err) {
                console.log(err);
                loadingEl.dismiss();
              });
            });
          }
        }, {
          key: "compare",
          value: function compare(a, b) {
            if (a.status_id < b.status_id) {
              return -1;
            }

            if (a.status_id > b.status_id) {
              return 1;
            }

            return 0;
          }
        }, {
          key: "openMenu",
          value: function openMenu() {
            this.menuController.open();
          }
        }, {
          key: "onSearchChange",
          value: function onSearchChange(e) {}
        }, {
          key: "solicitudDetails",
          value: function solicitudDetails(solicitudId) {
            var redirectToFinished = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            this.solServ.clearSolicitud();
            this.solServ.setServiceID(solicitudId);

            if (redirectToFinished) {
              this.router.navigate(['/user/solicitud-finished']);
            } else {
              this.router.navigate(['/user/solicitud-status']);
            }
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
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
        }, {
          type: src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_8__["SolicitudService"]
        }];
      };

      SolicitudesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
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


      __webpack_exports__["default"] = ".border {\n  border: 1px solid #009ace;\n  border-radius: 15px;\n  font-size: 12px;\n  height: 35px;\n}\n\n.prof-cont {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n\n.no-border {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n\n.profileImg {\n  margin-left: 10px;\n  height: 75px;\n  width: 75px;\n}\n\n.titleSelect {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.badge-text {\n  font-size: 7px;\n}\n\n.textSelect {\n  font-size: 10px;\n  line-height: 0.5;\n}\n\n.ratingText {\n  font-size: 14px;\n  margin: 0;\n  padding: 0;\n}\n\n.locate-cont {\n  margin-top: 5px;\n  border-radius: 50px;\n  height: 30px;\n  width: 30px;\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #009ace;\n}\n\n.rating-text {\n  font-size: 12px;\n  margin-left: auto;\n  margin-right: auto;\n  display: inline-flex;\n}\n\n.ticket {\n  color: red;\n  font-size: 11px;\n}\n\n.green-color {\n  color: #39ae50;\n}\n\n.bg-green-color {\n  background-color: #39ae50;\n}\n\n.grey-color {\n  color: #8e8c89;\n}\n\n.bg-grey-color {\n  background-color: #8e8c89;\n}\n\n.red-color {\n  color: red;\n}\n\n.bg-red-color {\n  background-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvbGljaXR1ZGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUNBO0VBQ0Usd0VBQUE7QUFFRjs7QUFBQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFHRjs7QUFEQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFJRjs7QUFGQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUtGOztBQUhBO0VBQ0UsY0FBQTtBQU1GOztBQUpBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBT0Y7O0FBTEE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFRRjs7QUFOQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBU0Y7O0FBUEE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBVUY7O0FBUkE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQVdGOztBQVRBO0VBQ0UsY0FBQTtBQVlGOztBQVZBO0VBQ0UseUJBQUE7QUFhRjs7QUFWQTtFQUNFLGNBQUE7QUFhRjs7QUFYQTtFQUNFLHlCQUFBO0FBY0Y7O0FBWEE7RUFDRSxVQUFBO0FBY0Y7O0FBWkE7RUFDRSxxQkFBQTtBQWVGIiwiZmlsZSI6InNvbGljaXR1ZGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3JkZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA5YWNlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGhlaWdodDogMzVweDtcbn1cbi5wcm9mLWNvbnQge1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG59XG4ubm8tYm9yZGVyIHtcbiAgcGFkZGluZy10b3A6IDJweDtcbiAgcGFkZGluZy1ib3R0b206IDJweDtcbn1cbi5wcm9maWxlSW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGhlaWdodDogNzVweDtcbiAgd2lkdGg6IDc1cHg7XG59XG4udGl0bGVTZWxlY3Qge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmJhZGdlLXRleHQge1xuICBmb250LXNpemU6IDdweDtcbn1cbi50ZXh0U2VsZWN0IHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMC41O1xufVxuLnJhdGluZ1RleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5sb2NhdGUtY29udCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWFjZTtcbn1cbi5yYXRpbmctdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG4udGlja2V0IHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuLmdyZWVuLWNvbG9yIHtcbiAgY29sb3I6ICMzOWFlNTA7XG59XG4uYmctZ3JlZW4tY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzlhZTUwO1xufVxuXG4uZ3JleS1jb2xvciB7XG4gIGNvbG9yOiAjOGU4Yzg5O1xufVxuLmJnLWdyZXktY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGU4Yzg5O1xufVxuXG4ucmVkLWNvbG9yIHtcbiAgY29sb3I6IHJlZDtcbn1cbi5iZy1yZWQtY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG4iXX0= */";
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


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n\n    <ion-buttons slot=\"start\">\n      <ion-button class=\"homeBtn\" (click)=\"openMenu()\">\n        <ion-icon name=\"menu\" class=\"homeBtn\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title class=\"title-toolbar\">ESTADO DE SOLICITUD</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- filter bar -->\n  <!-- <ion-grid>\n    <ion-row class=\"ion-margin-top\">\n      <ion-col size=\"10\" offset=\"1\">\n        <ion-searchbar\n          placeholder=\"Buscar\"\n          (ionChange)=\"onSearchChange($event)\"\n          >\n        </ion-searchbar>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n\n  <ion-grid class=\"ion-margin-top\" *ngIf=\"!loadedServices || loadedServices.length < 1\">\n    <ion-row class=\"subtitle ion-margin-top\">\n      <ion-col size=\"8\" offset=\"2\" class=\"ion-text-center\">\n        <ion-text class=\"footer-text main-color\" ><b>A\xFAn no tienes solicitudes hechas.</b></ion-text>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- servicio iterable -->\n  <div class=\"prof-cont ion-margin-top no-border\" *ngFor=\"let service of loadedServices\" (click)=\"solicitudDetails(service.request_id, service.status_id === 6)\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n\n        <!-- title -->\n        <ion-col size=\"8\" class=\"ion-justify-content-center\">\n          <ion-text>\n            <span class=\"titleSelect main-color ion-text-capitalize\">{{ service.supplierName+\" \"+service.supplierLastName }} </span><br>\n            <!-- <ion-badge color=\"medium\" class=\"badge-text\">Soldador</ion-badge>&nbsp; -->\n            <ion-badge color=\"medium\" class=\"badge-text\">{{ service.categoryName }}</ion-badge><br>\n            <span class=\"textSelect\">{{ service.description }}</span><br>\n            <small class=\"main-color\">{{ formatdate(service.created_date) }}</small>\n          </ion-text>\n        </ion-col>\n\n        <!-- rating -->\n        <ion-col size=\"4\" class=\"ion-text-center\">\n          <div class=\"ion-text-center\">\n            <small class=\"ticket\">#{{ service.ticket_number }}</small>\n          </div>\n          <!-- itersate thru the btns-->\n\n          <!-- enviada -->\n          <ion-text *ngIf=\"service.status_id === 1\">\n            <!-- icons -->\n            <div class=\"locate-cont\">\n              <ion-icon name=\"send\" color=\"light\" class=\"rating-text\"></ion-icon>\n            </div><br>\n            <small class=\"ratingText main-color ion-text-center\">\n              SOLICITUD ENVIADA\n            </small>\n          </ion-text>\n\n          <!-- visita  -->\n          <ion-text *ngIf=\"service.status_id === 2\">\n            <!-- icons -->\n            <div class=\"locate-cont bg-main-color\">\n              <ion-icon name=\"calendar\" color=\"light\" class=\"rating-text\"></ion-icon>\n            </div><br>\n            <small class=\"ratingText main-color ion-text-center\">\n              SOLICITUD VISITA\n            </small>\n          </ion-text>\n\n          <!-- accepted  -->\n          <ion-text *ngIf=\"service.status_id === 3\">\n            <!-- icons -->\n            <div class=\"locate-cont\">\n              <ion-icon name=\"hammer\" color=\"light\" class=\"rating-text\"></ion-icon>\n            </div><br>\n            <small class=\"ratingText main-color ion-text-center\">\n              SERVICIO ACEPTADO\n            </small>\n          </ion-text>\n\n          <!-- rechazada  -->\n          <ion-text *ngIf=\"service.status_id === 7\">\n            <!-- icons -->\n            <div class=\"locate-cont bg-red-color\">\n              <ion-icon name=\"close\" color=\"light\" class=\"rating-text\"></ion-icon>\n            </div><br>\n            <small class=\"ratingText red-color ion-text-center\">\n              SOLICITUD RECHAZADA\n            </small>\n          </ion-text>\n\n          <!-- en proceso  -->\n          <ion-text *ngIf=\"service.status_id === 4\">\n            <!-- icons -->\n            <div class=\"locate-cont bg-green-color\">\n              <ion-icon name=\"build\" color=\"light\" class=\"rating-text\"></ion-icon>\n            </div><br>\n            <small class=\"ratingText green-color ion-text-center\">\n              SERVICIO EN\x0BPROCESO\n            </small>\n          </ion-text>\n\n          <!-- realizado  -->\n          <ion-text *ngIf=\"service.status_id === 5\">\n            <!-- icons -->\n            <div class=\"locate-cont bg-grey-color\">\n              <ion-icon name=\"build\" color=\"light\" class=\"rating-text\"></ion-icon>\n            </div><br>\n            <small class=\"ratingText grey-color ion-text-center\">\n              SERVICIO REALIZADO\n            </small>\n          </ion-text>\n\n          <!-- finalizado  -->\n          <ion-text *ngIf=\"service.status_id === 6\">\n            <!-- icons -->\n            <div class=\"locate-cont bg-grey-color\">\n              <ion-icon name=\"build\" color=\"light\" class=\"rating-text\"></ion-icon>\n            </div><br>\n            <small class=\"ratingText grey-color ion-text-center\">\n              SERVICIO FINALIZADO\n            </small>\n          </ion-text>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-solicitudes-solicitudes-module-es5.js.map