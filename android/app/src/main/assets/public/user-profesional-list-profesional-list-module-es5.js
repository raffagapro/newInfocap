(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-profesional-list-profesional-list-module"], {
    /***/
    "Gfxr":
    /*!******************************************************************!*\
      !*** ./src/app/user/profesional-list/profesional-list.page.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function Gfxr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".text-10 {\n  font-size: 10px;\n}\n\n.fStart {\n  margin-left: 10px;\n}\n\n.cusSelect {\n  border: 0px;\n  outline: 0px;\n  font-size: 12px;\n  background-color: none;\n}\n\n.filt-icon {\n  font-size: 11px;\n}\n\n.profileImg {\n  margin-left: 10px;\n  height: 75px;\n  width: 75px;\n}\n\n.prof-cont {\n  box-shadow: 1px 8px 12px 0px rgba(0, 0, 0, 0.2);\n}\n\n.no-border {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n\n.eSelect {\n  color: red;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.titleSelect {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.textSelect {\n  font-size: 10px;\n  line-height: 0.5;\n}\n\n.badge-text {\n  font-size: 9px;\n}\n\n.ratingText {\n  font-size: 14px;\n  margin: 0;\n  padding: 0;\n}\n\n.locate-cont {\n  margin-top: 20px;\n  border-radius: 50px;\n  height: 30px;\n  width: 30px;\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #009ACE;\n}\n\n.rating-text {\n  font-size: 18px;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2Zlc2lvbmFsLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsZUFBQTtBQUFGOztBQUVBO0VBRUUsaUJBQUE7QUFBRjs7QUFFQTtFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBQUY7O0FBRUE7RUFFRSxlQUFBO0FBQUY7O0FBRUE7RUFFRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQUY7O0FBRUE7RUFFRSwrQ0FBQTtBQUFGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUNBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBRUY7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFEQTtFQUNFLGNBQUE7QUFJRjs7QUFGQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUtGOztBQUhBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBTUY7O0FBSkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQU9GIiwiZmlsZSI6InByb2Zlc2lvbmFsLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtMTBcbntcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLmZTdGFydFxue1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5jdXNTZWxlY3RcbntcbiAgYm9yZGVyOjBweDtcbiAgb3V0bGluZTowcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbn1cbi5maWx0LWljb25cbntcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuLnByb2ZpbGVJbWdcbntcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGhlaWdodDogNzVweDtcbiAgd2lkdGg6IDc1cHg7XG59XG4ucHJvZi1jb250XG57XG4gIGJveC1zaGFkb3c6IDFweCA4cHggMTJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIwKTtcbn1cbi5uby1ib3JkZXJ7XG4gIHBhZGRpbmctdG9wOiAycHg7XG4gIHBhZGRpbmctYm90dG9tOiAycHg7XG59XG4uZVNlbGVjdHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRpdGxlU2VsZWN0e1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnRleHRTZWxlY3R7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IC41O1xufVxuLmJhZGdlLXRleHR7XG4gIGZvbnQtc2l6ZTogOXB4O1xufVxuLnJhdGluZ1RleHR7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLmxvY2F0ZS1jb250e1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5QUNFO1xufVxuLnJhdGluZy10ZXh0e1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4iXX0= */";
      /***/
    },

    /***/
    "PHrt":
    /*!******************************************************************!*\
      !*** ./src/app/user/profesional-list/profesional-list.module.ts ***!
      \******************************************************************/

    /*! exports provided: ProfesionalListPageModule */

    /***/
    function PHrt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfesionalListPageModule", function () {
        return ProfesionalListPageModule;
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


      var _profesional_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profesional-list-routing.module */
      "pkWq");
      /* harmony import */


      var _profesional_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profesional-list.page */
      "rYcP");

      var ProfesionalListPageModule = function ProfesionalListPageModule() {
        _classCallCheck(this, ProfesionalListPageModule);
      };

      ProfesionalListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profesional_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfesionalListPageRoutingModule"]],
        declarations: [_profesional_list_page__WEBPACK_IMPORTED_MODULE_6__["ProfesionalListPage"]]
      })], ProfesionalListPageModule);
      /***/
    },

    /***/
    "pkWq":
    /*!**************************************************************************!*\
      !*** ./src/app/user/profesional-list/profesional-list-routing.module.ts ***!
      \**************************************************************************/

    /*! exports provided: ProfesionalListPageRoutingModule */

    /***/
    function pkWq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfesionalListPageRoutingModule", function () {
        return ProfesionalListPageRoutingModule;
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


      var _profesional_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profesional-list.page */
      "rYcP");

      var routes = [{
        path: '',
        component: _profesional_list_page__WEBPACK_IMPORTED_MODULE_3__["ProfesionalListPage"]
      }];

      var ProfesionalListPageRoutingModule = function ProfesionalListPageRoutingModule() {
        _classCallCheck(this, ProfesionalListPageRoutingModule);
      };

      ProfesionalListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProfesionalListPageRoutingModule);
      /***/
    },

    /***/
    "rYcP":
    /*!****************************************************************!*\
      !*** ./src/app/user/profesional-list/profesional-list.page.ts ***!
      \****************************************************************/

    /*! exports provided: ProfesionalListPage */

    /***/
    function rYcP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfesionalListPage", function () {
        return ProfesionalListPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_profesional_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./profesional-list.page.html */
      "yQkg");
      /* harmony import */


      var _profesional_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./profesional-list.page.scss */
      "Gfxr");
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
      /* harmony import */


      var src_shared_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/shared/constants */
      "p1Kg");

      var ProfesionalListPage = /*#__PURE__*/function () {
        function ProfesionalListPage(router, menuController, solServ, http, us, lc) {
          _classCallCheck(this, ProfesionalListPage);

          this.router = router;
          this.menuController = menuController;
          this.solServ = solServ;
          this.http = http;
          this.us = us;
          this.lc = lc;
          this.imageBlank = src_shared_constants__WEBPACK_IMPORTED_MODULE_10__["IMAGE_URL_BLANK"];
          this.profList = [];
        }

        _createClass(ProfesionalListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.userSub = this.us.loggedUser.subscribe(function (user) {
              _this.grabbedUser = user;
            });
            this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
            this.headers = this.headers.set('Authorization', 'Bearer ' + this.grabbedUser.access_token); // Grab prof list 

            this.lc.create({
              message: "Generando lista de profesionales..."
            }).then(function (loadingEl) {
              loadingEl.present();

              _this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["API"] + "/client/professions/".concat(_this.solServ.solicitud.comuna_id, "/").concat(_this.solServ.solicitud.category_id), {
                headers: _this.headers
              }).subscribe(function (resData) {
                _this.profList = resData['data'];
                loadingEl.dismiss();
              }, function (e) {
                console.log(e);
                loadingEl.dismiss();
              });
            })["catch"](function (err) {
              _this.lc.dismiss();
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.menuController.enable(true, 'user');
          }
        }, {
          key: "openMenu",
          value: function openMenu() {
            this.menuController.open();
          }
        }, {
          key: "profDetails",
          value: function profDetails(proPerfilCatId, profilImg) {
            this.solServ.setProPerfil(proPerfilCatId);
            this.solServ.setProPhoto(profilImg);
            this.router.navigate(['/user/profesional-detail']);
          } // eRequest(){
          //   this.router.navigate(['/user/urgen-service']);
          // }

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.userSub.unsubscribe();
          }
        }]);

        return ProfesionalListPage;
      }();

      ProfesionalListPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"]
        }, {
          type: src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_7__["SolicitudService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
        }];
      };

      ProfesionalListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-profesional-list',
        template: _raw_loader_profesional_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profesional_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProfesionalListPage);
      /***/
    },

    /***/
    "yQkg":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/profesional-list/profesional-list.page.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function yQkg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/user/home\" text=\"\" icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title class=\"title-toolbar\">ELIGE AL PROFESIONAL</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- filter bar -->\n  <!-- <ion-grid>\n    <ion-row class=\"ion-margin-top\">\n\n      <ion-col size=\"2\" class=\"fStart\">\n        <ion-text class=\"text-10 main-color\">\n          <ion-icon name=\"funnel\"></ion-icon>\n          FILTROS\n        </ion-text>\n      </ion-col>\n\n      <ion-col size=\"3\">\n        <select class=\"main-color cusSelect\" name=\"\" style=\"background-color:white;\">\n          <option value=\"\">Reconocimiento</option>\n          <option value=\"\">Catidad de estrellas</option>\n          <option value=\"\">Calidad del servicio</option>\n          <option value=\"\">Puntualidad</option>\n        </select>\n      </ion-col>\n\n      <ion-col size=\"3\">\n        <select class=\"main-color cusSelect\" name=\"\" style=\"background-color:white;\">\n          <option value=\"\">Experiencia</option>\n          <option value=\"\">Puntualidad</option>\n        </select>\n      </ion-col>\n\n      <ion-col size=\"3\">\n        <ion-text class=\"text-10 main-color\">\n          <ion-icon name=\"sync\" class=\"filt-icon\"></ion-icon>\n          REESTABLECER\n        </ion-text>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid> -->\n\n  <!-- emergency message -->\n  <!-- <div class=\"prof-cont ion-margin-top no-border\" (click)=\"eRequest()\">\n    <ion-grid>\n      <ion-row> -->\n\n  <!-- profile img -->\n  <!-- <ion-col size=\"3\">\n          <ion-avatar class=\"profileImg\">\n            <img src=\"/assets/images/avatar.png\"/>\n          </ion-avatar>\n        </ion-col> -->\n\n  <!-- title -->\n  <!-- <ion-col size=\"9\">\n          <ion-text>\n            <span class=\"eSelect\">Necesito el servicio urgente</span><br>\n            <span class=\"textSelect\">Esta solicitud  es de carácter urgente y será enviada a los 10 profesionales mejor catalogados para que puedan atender tu solicitud lo antes posible.</span>\n          </ion-text>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div> -->\n\n  <!-- profesional card item -->\n  <ion-text color=\"primary\" *ngIf=\"profList.length == 0\">\n    <h3 class=\"text-center\">No se encontraron<br/>profesionales en el área</h3>\n  </ion-text>\n  <div *ngFor=\"let prof of profList\" class=\"prof-cont ion-margin-top no-border\"\n    (click)=\"profDetails(prof.id, prof.img_profile)\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n\n        <!-- profile img -->\n        <ion-col size=\"3\">\n          <ion-avatar class=\"profileImg\">\n            <ion-img\n              src=\"{{ !prof.img_profile || prof.img_profile === imageBlank ? 'assets/images/avatar.png' : prof.img_profile }}\">\n            </ion-img>\n          </ion-avatar>\n        </ion-col>\n\n        <!-- title -->\n        <ion-col size=\"9\">\n          <ion-text>\n            <span class=\"titleSelect main-color ion-text-capitalize\">{{ prof.supplierName }} {{ prof.supplierLastName\n              }}</span><br>\n            <ion-badge color=\"primary\" class=\"badge-text\">{{ prof.categoryName }}</ion-badge><br>\n            <span class=\"textSelect ion-text-capitalize\">{{ prof.descProf }}</span>\n          </ion-text>\n        </ion-col>\n\n        <!-- rating -->\n        <!-- <ion-col size=\"4\">\n          <ion-text>\n            <p class=\"ratingText main-color ion-text-center\">\n              4.83\n              <ion-icon name=\"star\"></ion-icon>\n              / 50\n              <ion-icon name=\"ribbon\"></ion-icon>\n            </p><br>\n\n            <div class=\"locate-cont\">\n              <ion-icon name=\"hammer\" color=\"light\" class=\"rating-text\"></ion-icon>\n            </div>\n            <div class=\"locate-cont\">\n              <ion-icon name=\"time\" color=\"light\" class=\"rating-text\"></ion-icon>\n            </div>\n            <div class=\"locate-cont\">\n              <ion-icon name=\"heart\" color=\"light\" class=\"rating-text\"></ion-icon>\n            </div>\n            <div class=\"locate-cont\">\n              <ion-icon name=\"trophy\" color=\"light\" class=\"rating-text\"></ion-icon>\n            </div>\n          </ion-text>\n        </ion-col> -->\n\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <!-- floating btn -->\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n    <ion-fab-button color=\"primary\">\n      <ion-icon md=\"caret-up\" ios=\"add\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-fab-button color=\"primary\">\n        <ion-icon name=\"map\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"primary\">\n        <ion-icon name=\"medal\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-profesional-list-profesional-list-module-es5.js.map