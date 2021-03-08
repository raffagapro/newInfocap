(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agendados-agendados-module"], {
    /***/
    "JRYn":
    /*!**************************************************************!*\
      !*** ./src/app/profesional/home/agendados/agendados.page.ts ***!
      \**************************************************************/

    /*! exports provided: AgendadosPage */

    /***/
    function JRYn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgendadosPage", function () {
        return AgendadosPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_agendados_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./agendados.page.html */
      "xDb7");
      /* harmony import */


      var _agendados_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./agendados.page.scss */
      "KG52");
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

      var AgendadosPage = /*#__PURE__*/function () {
        function AgendadosPage(router, menuController, http, us, lc, solServ) {
          _classCallCheck(this, AgendadosPage);

          this.router = router;
          this.menuController = menuController;
          this.http = http;
          this.us = us;
          this.lc = lc;
          this.solServ = solServ;
          this.loadedServices = [];
          this.loadedVisits = [];
          this.parsedHours = null;
        }

        _createClass(AgendadosPage, [{
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
            this.menuController.enable(true, 'profesional');
            this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Authorization', 'Bearer ' + this.grabbedUser.access_token); // load agendados

            this.loadServices("2"); //2
            // load visitas

            this.loadServices("3"); //3
          }
        }, {
          key: "loadServices",
          value: function loadServices(statusID) {
            var _this2 = this;

            this.lc.create({
              message: "Cargando lista de servicios..."
            }).then(function (loadingEl) {
              loadingEl.present();

              _this2.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["API"] + "/supplier/requestservice/".concat(statusID), {
                headers: _this2.headers
              }).subscribe(function (resData) {
                console.log(resData['data']);
                loadingEl.dismiss();

                if (statusID === "2") {
                  _this2.loadedServices = resData["data"]; // console.log(this.loadedServices);
                }

                if (statusID === "3") {
                  _this2.loadedVisits = resData["data"]; // console.log(this.loadedVisits);
                }
              }, function (err) {
                console.log(err);
                loadingEl.dismiss();
              });
            });
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
          key: "openMenu",
          value: function openMenu() {
            this.menuController.open();
          }
        }, {
          key: "solicitudDetail",
          value: function solicitudDetail(serviceID) {
            this.solServ.setServiceID(serviceID);
            this.router.navigate(['/profesional/home/home-tabs/agendados/agendados-detail']);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.userSub.unsubscribe();
          }
        }]);

        return AgendadosPage;
      }();

      AgendadosPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
        }, {
          type: src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_7__["SolicitudService"]
        }];
      };

      AgendadosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-agendados',
        template: _raw_loader_agendados_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_agendados_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AgendadosPage);
      /***/
    },

    /***/
    "KG52":
    /*!****************************************************************!*\
      !*** ./src/app/profesional/home/agendados/agendados.page.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function KG52(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".prof-cont {\n  box-shadow: 1px 8px 12px 0px rgba(0, 0, 0, 0.2);\n  margin-bottom: 10px;\n}\n\n.titleSelect {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.badge-text {\n  font-size: 10px;\n  margin-bottom: -2px;\n}\n\n.ticketText {\n  font-size: 12px;\n  color: red;\n}\n\n.title {\n  font-size: 17px;\n}\n\n.superMarginTop {\n  margin-top: 60px;\n}\n\n.tapText {\n  font-size: 10px;\n}\n\n.iconFix {\n  margin-bottom: -2px;\n}\n\n.miniBtnTxt {\n  font-size: 9px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FnZW5kYWRvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSwrQ0FBQTtFQUNBLG1CQUFBO0FBQUo7O0FBRUE7RUFFSSxlQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFFQTtFQUVJLGVBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUVBO0VBRUksZUFBQTtFQUNBLFVBQUE7QUFBSjs7QUFFQTtFQUVJLGVBQUE7QUFBSjs7QUFFQTtFQUVJLGdCQUFBO0FBQUo7O0FBRUE7RUFFSSxlQUFBO0FBQUo7O0FBRUE7RUFFSSxtQkFBQTtBQUFKOztBQUVBO0VBRUksY0FBQTtBQUFKIiwiZmlsZSI6ImFnZW5kYWRvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZi1jb250XG57XG4gICAgYm94LXNoYWRvdzogMXB4IDhweCAxMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjApO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4udGl0bGVTZWxlY3RcbntcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uYmFkZ2UtdGV4dFxue1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAtMnB4O1xufVxuLnRpY2tldFRleHRcbntcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6IHJlZDtcbn1cbi50aXRsZVxue1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbn1cbi5zdXBlck1hcmdpblRvcFxue1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG59XG4udGFwVGV4dFxue1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5pY29uRml4XG57XG4gICAgbWFyZ2luLWJvdHRvbTogLTJweDtcbn1cbi5taW5pQnRuVHh0XG57XG4gICAgZm9udC1zaXplOiA5cHg7XG59Il19 */";
      /***/
    },

    /***/
    "Wl7L":
    /*!************************************************************************!*\
      !*** ./src/app/profesional/home/agendados/agendados-routing.module.ts ***!
      \************************************************************************/

    /*! exports provided: AgendadosPageRoutingModule */

    /***/
    function Wl7L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgendadosPageRoutingModule", function () {
        return AgendadosPageRoutingModule;
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


      var _agendados_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./agendados.page */
      "JRYn");

      var routes = [{
        path: '',
        component: _agendados_page__WEBPACK_IMPORTED_MODULE_3__["AgendadosPage"]
      }];

      var AgendadosPageRoutingModule = function AgendadosPageRoutingModule() {
        _classCallCheck(this, AgendadosPageRoutingModule);
      };

      AgendadosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AgendadosPageRoutingModule);
      /***/
    },

    /***/
    "hPVO":
    /*!****************************************************************!*\
      !*** ./src/app/profesional/home/agendados/agendados.module.ts ***!
      \****************************************************************/

    /*! exports provided: AgendadosPageModule */

    /***/
    function hPVO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgendadosPageModule", function () {
        return AgendadosPageModule;
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


      var _agendados_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./agendados-routing.module */
      "Wl7L");
      /* harmony import */


      var _agendados_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./agendados.page */
      "JRYn");

      var AgendadosPageModule = function AgendadosPageModule() {
        _classCallCheck(this, AgendadosPageModule);
      };

      AgendadosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _agendados_routing_module__WEBPACK_IMPORTED_MODULE_5__["AgendadosPageRoutingModule"]],
        declarations: [_agendados_page__WEBPACK_IMPORTED_MODULE_6__["AgendadosPage"]]
      })], AgendadosPageModule);
      /***/
    },

    /***/
    "xDb7":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profesional/home/agendados/agendados.page.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function xDb7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    \n    <ion-buttons slot=\"start\">\n      <ion-button class=\"homeBtn\" (click)=\"openMenu()\">\n        <ion-icon name=\"menu\" class=\"homeBtn\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title class=\"title-toolbar\">AGENDADOS</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- title -->\n  <ion-grid fixed>\n    <ion-row class=\"ion-margin-top\">\n      <ion-col size=\"11\" class=\"ion-text-left\">\n        <ion-text class=\"main-color title\" *ngIf=\"loadedServices.length > 0\">\n          <b>Buenos días <span class=\"ion-text-capitalize\">{{grabbedUser.name}} {{grabbedUser.last_name}}</span>, tienes los siguientes trabajos en tu agenda.</b>\n        </ion-text>\n        <ion-text class=\"main-color title\" *ngIf=\"loadedServices.length === 0\">\n          <b>Buenos días <span class=\"ion-text-capitalize\">{{grabbedUser.name}} {{grabbedUser.last_name}}</span>, no tienes trabajos en tu agenda.</b>\n        </ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- servicios agendados -->\n  <div class=\"prof-cont no-border\" *ngFor=\"let service of loadedServices\" (click)=\"solicitudDetail(service.id)\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n\n        <!-- title -->\n        <ion-col size=\"8\" class=\"ion-justify-content-center\">\n          <ion-text>\n            <span class=\"titleSelect main-color ion-text-capitalize\">{{service.clientName+\" \"+ service.clientLastName}} </span>&nbsp;&nbsp;\n            <ion-badge color=\"primary\" class=\"badge-text\">{{ service.categoryName }}</ion-badge>\n            <br>\n            <small>\n              <ion-icon name=\"calendar\" color=\"primary\" class=\"iconFix\"></ion-icon>\n              {{service.date_required}}\n              <ion-icon name=\"time\" color=\"primary\" class=\"iconFix\"></ion-icon>\n              {{ p(service.hours) }}h\n            </small>\n          </ion-text>\n        </ion-col>\n\n        <!-- ticket numer -->\n        <ion-col size=\"4\" >\n          <ion-text>\n            <p class=\"ticketText ion-text-center ion-no-margin\">Ticket #{{service.ticket_number}}</p>\n            <!-- <ion-button expand=\"block\" fill=\"outline\" shape=\"round\" class=\"miniBtnTxt\" (click)=\"map()\">\n              <ion-icon slot=\"start\" name=\"map\"></ion-icon>\n              VER MAPA\n            </ion-button> -->\n\n          </ion-text>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <!-- title -->\n  <ion-grid  *ngIf=\"loadedVisits.length > 0\">\n    <ion-row>\n      <ion-col size=\"11\" class=\"ion-text-left\">\n        <ion-text color=\"danger\" class=\"title\"><b>Tienes las siguientes visitas de evaluación agendadas.</b></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- visitas agendadas -->\n  <div class=\"prof-cont no-border\" *ngFor=\"let service of loadedVisits\" (click)=\"solicitudDetail(service.id)\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n\n        <!-- title -->\n        <ion-col size=\"8\" class=\"ion-justify-content-center\">\n          <ion-text>\n            <span class=\"titleSelect main-color ion-text-capitalize\">{{service.clientName+\" \"+ service.clientLastName}} </span>&nbsp;&nbsp;\n            <ion-badge color=\"primary\" class=\"badge-text\">{{ service.categoryName }}</ion-badge>\n            <br>\n            <small>\n              <ion-icon name=\"calendar\" color=\"primary\" class=\"iconFix\"></ion-icon>\n              {{service.date_required}}\n              <ion-icon name=\"time\" color=\"primary\" class=\"iconFix\"></ion-icon>\n              {{ p(service.hours) }}h\n            </small>\n          </ion-text>\n        </ion-col>\n\n        <!-- rating -->\n        <ion-col size=\"4\">\n          <ion-text>\n            <p class=\"ticketText ion-text-center ion-no-margin\">Ticket #{{service.ticket_number}}</p>\n            <!-- <ion-button expand=\"block\" fill=\"outline\" shape=\"round\" class=\"miniBtnTxt\" (click)=\"map()\">\n              <ion-icon slot=\"start\" name=\"map\"></ion-icon>\n              VER MAPA\n            </ion-button> -->\n\n          </ion-text>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=agendados-agendados-module-es5.js.map