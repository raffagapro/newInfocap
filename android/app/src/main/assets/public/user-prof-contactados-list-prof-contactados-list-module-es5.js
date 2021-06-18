(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-prof-contactados-list-prof-contactados-list-module"], {
    /***/
    "2xyq":
    /*!****************************************************************************!*\
      !*** ./src/app/user/prof-contactados-list/prof-contactados-list.page.scss ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function xyq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".prof-cont {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n\n.titleSelect {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.icon-size {\n  margin-top: -3px;\n  font-size: 20px;\n}\n\n.textSelect {\n  font-size: 12px;\n  line-height: 1.4;\n  margin-bottom: 2px;\n}\n\n.ticket {\n  color: red;\n  font-size: 11px;\n}\n\n.ratingText {\n  font-size: 14px;\n  margin: 0;\n  padding: 0;\n}\n\n.badge-text {\n  font-size: 9px;\n}\n\n.locate-cont {\n  border-radius: 50px;\n  height: 25px;\n  width: 25px;\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #009ace;\n}\n\n.rating-text {\n  font-size: 14px;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2YtY29udGFjdGFkb3MtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3RUFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUFHSjs7QUFEQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBSUo7O0FBRkE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtBQUtKOztBQUhBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBTUo7O0FBSkE7RUFDSSxjQUFBO0FBT0o7O0FBTEE7RUFFSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBT0o7O0FBTEE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVFKIiwiZmlsZSI6InByb2YtY29udGFjdGFkb3MtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZi1jb250IHtcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG59XG4udGl0bGVTZWxlY3Qge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5pY29uLXNpemUge1xuICAgIG1hcmdpbi10b3A6IC0zcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuLnRleHRTZWxlY3Qge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbn1cbi50aWNrZXQge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC1zaXplOiAxMXB4O1xufVxuLnJhdGluZ1RleHQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cbi5iYWRnZS10ZXh0IHtcbiAgICBmb250LXNpemU6IDlweDtcbn1cbi5sb2NhdGUtY29udCB7XG4gICAgLy8gbWFyZ2luLXRvcDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogMjVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWFjZTtcbn1cbi5yYXRpbmctdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "7nyZ":
    /*!************************************************************************************!*\
      !*** ./src/app/user/prof-contactados-list/prof-contactados-list-routing.module.ts ***!
      \************************************************************************************/

    /*! exports provided: ProfContactadosListPageRoutingModule */

    /***/
    function nyZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfContactadosListPageRoutingModule", function () {
        return ProfContactadosListPageRoutingModule;
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


      var _prof_contactados_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./prof-contactados-list.page */
      "xCmb");

      var routes = [{
        path: '',
        component: _prof_contactados_list_page__WEBPACK_IMPORTED_MODULE_3__["ProfContactadosListPage"]
      }];

      var ProfContactadosListPageRoutingModule = function ProfContactadosListPageRoutingModule() {
        _classCallCheck(this, ProfContactadosListPageRoutingModule);
      };

      ProfContactadosListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProfContactadosListPageRoutingModule);
      /***/
    },

    /***/
    "UTZ2":
    /*!****************************************************************************!*\
      !*** ./src/app/user/prof-contactados-list/prof-contactados-list.module.ts ***!
      \****************************************************************************/

    /*! exports provided: ProfContactadosListPageModule */

    /***/
    function UTZ2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfContactadosListPageModule", function () {
        return ProfContactadosListPageModule;
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


      var _prof_contactados_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./prof-contactados-list-routing.module */
      "7nyZ");
      /* harmony import */


      var _prof_contactados_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./prof-contactados-list.page */
      "xCmb");

      var ProfContactadosListPageModule = function ProfContactadosListPageModule() {
        _classCallCheck(this, ProfContactadosListPageModule);
      };

      ProfContactadosListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _prof_contactados_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfContactadosListPageRoutingModule"]],
        declarations: [_prof_contactados_list_page__WEBPACK_IMPORTED_MODULE_6__["ProfContactadosListPage"]]
      })], ProfContactadosListPageModule);
      /***/
    },

    /***/
    "xCmb":
    /*!**************************************************************************!*\
      !*** ./src/app/user/prof-contactados-list/prof-contactados-list.page.ts ***!
      \**************************************************************************/

    /*! exports provided: ProfContactadosListPage */

    /***/
    function xCmb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfContactadosListPage", function () {
        return ProfContactadosListPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_prof_contactados_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./prof-contactados-list.page.html */
      "xivr");
      /* harmony import */


      var _prof_contactados_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./prof-contactados-list.page.scss */
      "2xyq");
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

      var ProfContactadosListPage = /*#__PURE__*/function () {
        function ProfContactadosListPage(router, menuController, http, us, lc, solServ) {
          _classCallCheck(this, ProfContactadosListPage);

          this.router = router;
          this.menuController = menuController;
          this.http = http;
          this.us = us;
          this.lc = lc;
          this.solServ = solServ;
          this.sortedServices = [];
        }

        _createClass(ProfContactadosListPage, [{
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
            this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set("Authorization", "Bearer " + this.grabbedUser.access_token);
            this.menuController.enable(true, "user");
            this.sortedServices = [];
            this.loadServices();
          }
        }, {
          key: "loadServices",
          value: function loadServices() {
            var _this2 = this;

            this.lc.create({
              message: "Cargando lista de servicios..."
            }).then(function (loadingEl) {
              loadingEl.present();

              _this2.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["API"] + "/client/requestservices", {
                headers: _this2.headers
              }).subscribe(function (resData) {
                loadingEl.dismiss();
                _this2.loadedServices = resData["data"];
                var prof = [];
                _this2.loadedServices = _this2.loadedServices.sort(_this2.sortByCreatedDate);

                _this2.loadedServices.forEach(function (i) {
                  var go = true;
                  prof.forEach(function (p) {
                    if (p === i.supplier_id) {
                      go = false;
                    }
                  });

                  if (go) {
                    prof.push(i.supplier_id);

                    _this2.sortedServices.push(i);
                  }
                });
              }, function (err) {
                console.log(err);
                loadingEl.dismiss();
              });
            });
          }
        }, {
          key: "p",
          value: function p(passingDate) {
            return moment__WEBPACK_IMPORTED_MODULE_7___default.a.utc(passingDate, 'DD/MM/YYYY hh:mm:ss').startOf('minute').fromNow();
          }
        }, {
          key: "openMenu",
          value: function openMenu() {
            this.menuController.open();
          }
        }, {
          key: "solicitudes",
          value: function solicitudes(profId) {
            this.solServ.setProfId(profId);
            this.router.navigate(["/user/single-prof-services"]);
          }
        }, {
          key: "sortByCreatedDate",
          value: function sortByCreatedDate(a, b) {
            var firstDate = moment__WEBPACK_IMPORTED_MODULE_7___default.a.utc(a.created_date, "DD/MM/YYYY HH:mm:ss").tz(moment__WEBPACK_IMPORTED_MODULE_7___default.a.tz.guess());
            var secondDate = moment__WEBPACK_IMPORTED_MODULE_7___default.a.utc(b.created_date, "DD/MM/YYYY HH:mm:ss").tz(moment__WEBPACK_IMPORTED_MODULE_7___default.a.tz.guess());

            if (firstDate > secondDate) {
              return -1;
            }

            if (firstDate < secondDate) {
              return 1;
            }

            return 0;
          }
        }]);

        return ProfContactadosListPage;
      }();

      ProfContactadosListPage.ctorParameters = function () {
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

      ProfContactadosListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "app-prof-contactados-list",
        template: _raw_loader_prof_contactados_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_prof_contactados_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProfContactadosListPage);
      /***/
    },

    /***/
    "xivr":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/prof-contactados-list/prof-contactados-list.page.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function xivr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/user/home\" text=\"\" icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title class=\"title-toolbar\">PROFS. CONTACTADOS</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid class=\"ion-margin-top\" *ngIf=\"!sortedServices || sortedServices.length < 1\">\n    <ion-row class=\"subtitle ion-margin-top\">\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <ion-text class=\"footer-text main-color\"><b>Aún no tienes profesionales<br>contactados</b></ion-text>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- proff contactado card item -->\n  <div class=\"prof-cont ion-margin-top no-border\" *ngFor=\"let service of sortedServices\"\n    (click)=\"solicitudes(service.supplier_id)\">\n    <ion-grid *ngIf=\"service.supplierName\">\n      <ion-row class=\"ion-align-items-center\">\n\n        <!-- title -->\n        <ion-col size=\"10\" class=\"ion-justify-content-center\">\n          <ion-text>\n            <span class=\"titleSelect main-color ion-text-capitalize\">{{ service.supplierName+\"\n              \"+service.supplierLastName }} </span><br>\n            <ion-badge color=\"medium\" class=\"badge-text\" *ngFor=\"let cat of service.categories\">{{ cat.categoryName }}\n            </ion-badge>\n            <br>\n            <p class=\"textSelect\">\n              {{ service.descProf }}\n            </p>\n            <small class=\"main-color\">{{ p(service.created_date) }}</small>\n          </ion-text>\n        </ion-col>\n\n        <!-- rating -->\n        <!-- <ion-col size=\"4\">\n          <ion-text>\n            <p class=\"ratingText main-color ion-text-center\">\n              4.83\n              <ion-icon name=\"star\"></ion-icon>\n            </p><br> -->\n        <!-- icons -->\n        <!-- <div class=\"locate-cont\">\n              <ion-icon name=\"hammer\" color=\"light\" class=\"rating-text\"></ion-icon>\n            </div>\n            <div class=\"locate-cont\">\n              <ion-icon name=\"time\" color=\"light\" class=\"rating-text\"></ion-icon>\n            </div>\n            <div class=\"locate-cont\">\n              <ion-icon name=\"heart\" color=\"light\" class=\"rating-text\"></ion-icon>\n            </div>\n            <div class=\"locate-cont\">\n              <ion-icon name=\"trophy\" color=\"light\" class=\"rating-text\"></ion-icon>\n            </div>\n          </ion-text>\n        </ion-col> -->\n\n      </ion-row>\n    </ion-grid>\n  </div>\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-prof-contactados-list-prof-contactados-list-module-es5.js.map