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


      __webpack_exports__["default"] = ".prof-cont {\n  box-shadow: 1px 8px 12px 0px rgba(0, 0, 0, 0.2);\n}\n\n.titleSelect {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.icon-size {\n  margin-top: -3px;\n  font-size: 20px;\n}\n\n.textSelect {\n  font-size: 12px;\n  line-height: 0.5;\n}\n\n.ticket {\n  color: red;\n  font-size: 11px;\n}\n\n.ratingText {\n  font-size: 14px;\n  margin: 0;\n  padding: 0;\n}\n\n.badge-text {\n  font-size: 9px;\n}\n\n.locate-cont {\n  border-radius: 50px;\n  height: 25px;\n  width: 25px;\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #009ACE;\n}\n\n.rating-text {\n  font-size: 14px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.footer-text {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2YtY29udGFjdGFkb3MtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSwrQ0FBQTtBQUFKOztBQUVBO0VBRUksZUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBRUE7RUFFSSxnQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFFQTtFQUVJLGVBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUVBO0VBRUksVUFBQTtFQUNBLGVBQUE7QUFBSjs7QUFFQTtFQUVJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUFKOztBQUVBO0VBRUksY0FBQTtBQUFKOztBQUVBO0VBR0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQURKOztBQUdBO0VBRUksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFHQTtFQUNJLGVBQUE7QUFBSiIsImZpbGUiOiJwcm9mLWNvbnRhY3RhZG9zLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2YtY29udFxue1xuICAgIGJveC1zaGFkb3c6IDFweCA4cHggMTJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIwKTtcbn1cbi50aXRsZVNlbGVjdFxue1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5pY29uLXNpemVcbntcbiAgICBtYXJnaW4tdG9wOiAtM3B4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cbi50ZXh0U2VsZWN0XG57XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAuNTtcbn1cbi50aWNrZXRcbntcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbn1cbi5yYXRpbmdUZXh0XG57XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuLmJhZGdlLXRleHRcbntcbiAgICBmb250LXNpemU6IDlweDtcbn1cbi5sb2NhdGUtY29udFxue1xuICAgIC8vIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDlBQ0U7XG59XG4ucmF0aW5nLXRleHRcbntcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLmZvb3Rlci10ZXh0e1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfSJdfQ== */";
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
            this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Authorization', 'Bearer ' + this.grabbedUser.access_token);
            this.menuController.enable(true, 'user');
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

              _this2.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["API"] + '/client/requestservices', {
                headers: _this2.headers
              }).subscribe(function (resData) {
                console.log(resData['data']);
                loadingEl.dismiss();
                _this2.loadedServices = resData['data']; // this.loadedServices.sort( this.compare );

                var prof = [];

                _this2.loadedServices.forEach(function (i) {
                  // console.log(i);
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
            var woDate = passingDate.split(" ");
            return woDate[0];
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
            this.router.navigate(['/user/single-prof-services']);
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
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
        }, {
          type: src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_7__["SolicitudService"]
        }];
      };

      ProfContactadosListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-prof-contactados-list',
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


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    \n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/user/home\" text=\"\" icon=\"arrow-back\"></ion-back-button>\n      <ion-button class=\"homeBtn\" (click)=\"openMenu()\">\n        <ion-icon name=\"menu\" class=\"homeBtn\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title class=\"title-toolbar\">PROFS. CONTACTADOS</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid class=\"ion-margin-top\" *ngIf=\"!sortedServices || sortedServices.length < 1\">\n    <ion-row class=\"subtitle ion-margin-top\">\n      <ion-col size=\"8\" offset=\"2\" class=\"ion-text-center\">\n        <ion-text class=\"footer-text main-color\" ><b>Aún no tienes profesionales contactados.</b></ion-text>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- proff contactado card item -->\n  <div\n    class=\"prof-cont ion-margin-top no-border\"\n    *ngFor=\"let service of sortedServices\"\n    (click)=\"solicitudes(service.supplier_id)\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n\n        <!-- title -->\n        <ion-col size=\"10\" class=\"ion-justify-content-center\">\n          <ion-text>\n            <span class=\"titleSelect main-color ion-text-capitalize\">{{ service.supplierName+\" \"+service.supplierLastName }} </span><br>\n            <ion-badge color=\"medium\" class=\"badge-text\"  *ngFor=\"let cat of service.categories\">{{ cat.categoryName }}</ion-badge>\n            <br>\n            <span class=\"textSelect\">\n              {{ service.descProf }}\n            </span><br>\n            <small class=\"main-color\">{{ p(service.created_date) }}</small>\n          </ion-text>\n        </ion-col>\n\n        <!-- rating -->\n        <!-- <ion-col size=\"4\">\n          <ion-text>\n            <p class=\"ratingText main-color ion-text-center\">\n              4.83\n              <ion-icon name=\"star\"></ion-icon>\n            </p><br> -->\n            <!-- icons -->\n            <!-- <div class=\"locate-cont\">\n              <ion-icon name=\"hammer\" color=\"light\" class=\"rating-text\"></ion-icon>\n            </div>\n            <div class=\"locate-cont\">\n              <ion-icon name=\"time\" color=\"light\" class=\"rating-text\"></ion-icon>\n            </div>\n            <div class=\"locate-cont\">\n              <ion-icon name=\"heart\" color=\"light\" class=\"rating-text\"></ion-icon>\n            </div>\n            <div class=\"locate-cont\">\n              <ion-icon name=\"trophy\" color=\"light\" class=\"rating-text\"></ion-icon>\n            </div>\n          </ion-text>\n        </ion-col> -->\n\n      </ion-row>\n    </ion-grid>\n  </div>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-prof-contactados-list-prof-contactados-list-module-es5.js.map