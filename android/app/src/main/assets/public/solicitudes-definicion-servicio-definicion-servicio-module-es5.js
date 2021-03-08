(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["solicitudes-definicion-servicio-definicion-servicio-module"], {
    /***/
    "AkX/":
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profesional/home/solicitudes/definicion-servicio/definicion-servicio.page.html ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function AkX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/profesional/home/home-tabs/solicitudes/solicitudes-detail\" text=\"\" icon=\"arrow-back\"></ion-back-button>\n      <ion-button class=\"homeBtn\" (click)=\"openMenu()\">\n        <ion-icon name=\"menu\" class=\"homeBtn\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    \n    <ion-title class=\"title-toolbar\">DEFINICIÓN DEL SERVICIO</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- profesional card item -->\n  <div class=\"no-border\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n        <!-- profile img -->\n        <ion-col size=\"4\" offset=\"1\">\n          <ion-avatar class=\"profileImg\">\n            <ion-img src=\"{{ !loadedInfo.img_client_profile ? 'assets/images/avatar.png' : 'http://workintest.herokuapp.com'+loadedInfo.img_client_profile  }}\"></ion-img>\n          </ion-avatar>\n        </ion-col>\n\n        <!-- title -->\n        <ion-col size=\"6\">\n          <ion-text>\n            <small class=\"ticket\">Ticket #{{ loadedInfo.ticket_number }}</small><br>\n            <span class=\"titleSelect main-color ion-text-capitalize\">{{ loadedInfo.categoryName }} para<br>\n              <span class=\"ion-text-capitalize titleName\">{{ loadedInfo.clientName+\" \"+loadedInfo.clientLastName }}</span>\n            </span><br>\n            <p class=\"main-color mini-text\" style=\"margin-top: 0; margin-bottom: 0;\">{{ d(loadedInfo.created_date) }}</p>\n          </ion-text>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <ion-grid>\n\n    <!-- title -->\n    <ion-row>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-icon name=\"build\" class=\"main-color\"></ion-icon>\n        <ion-text class=\"main-color title\"><b> Trabajo requerido</b></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-text class=\"titleText\">{{ loadedInfo.description }}</ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n    <form [formGroup]=\"form\" (ngSubmit)=\"confirmRequest()\">\n      <!-- Slider -->\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-slides [options]=\"slideOptions\">\n            \n            <!-- slide -->\n            <ion-slide *ngFor=\"let image of loadedInfo.images\">\n              <img\n                src=\"{{ 'http://workintest.herokuapp.com'+image.image }}\"\n                class=\"imgSlide\"\n              >\n            </ion-slide>\n\n          </ion-slides>\n        </ion-col>\n      </ion-row>\n\n      <!-- Fecha requerida -->\n      <ion-row>\n        <ion-col size=\"11\">\n          <ion-item>\n            <ion-label class=\"main-color\" position=\"floating\">\n              <ion-icon name=\"calendar\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Fecha requerida</ion-text>\n            </ion-label>\n            <ion-datetime\n              formControlName=\"dateReq\">\n            </ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <!-- Hora incial -->\n      <ion-row>\n        <ion-col size=\"11\">\n          <ion-item>\n            <ion-label class=\"main-color\" position=\"floating\">\n              <ion-icon name=\"time\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">Hora inicial</ion-text>\n            </ion-label>\n            <ion-datetime\n              formControlName=\"sHour\"\n              display-format=\"h:mm A\"\n              picker-format=\"h:mm A\">\n            </ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <!-- hora final  -->\n      <ion-row>\n        <ion-col size=\"11\">\n          <ion-item>\n            <ion-label class=\"main-color\" position=\"floating\">\n              <ion-icon name=\"time\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">Hora final</ion-text>\n            </ion-label>\n            <ion-datetime\n              formControlName=\"eHour\"\n              display-format=\"h:mm A\" \n              picker-format=\"h:mm A\">\n            </ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <!-- costo -->\n      <ion-row>\n        <ion-col size=\"11\">\n          <ion-item>\n            <ion-label position=\"floating\">\n              <ion-icon name=\"wallet\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Costo</ion-text>\n            </ion-label>\n            <ion-input formControlName=\"costo\" type=\"text\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <!-- enviar solicitud BTN -->\n      <ion-row class=\"ion-margin-top ion-margin-bottom\">\n        <ion-col size=\"1\"></ion-col>\n        <ion-col>\n          <ion-button\n            size=\"5\" expand=\"block\"\n            type=\"submit\"\n            class=\"ion-text-uppercase\">\n            ACEPTAR SOLICITUD\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n    </form>\n\n  </ion-grid>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "FLRM":
    /*!**********************************************************************************************!*\
      !*** ./src/app/profesional/home/solicitudes/definicion-servicio/definicion-servicio.page.ts ***!
      \**********************************************************************************************/

    /*! exports provided: DefinicionServicioPage */

    /***/
    function FLRM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefinicionServicioPage", function () {
        return DefinicionServicioPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_definicion_servicio_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./definicion-servicio.page.html */
      "AkX/");
      /* harmony import */


      var _definicion_servicio_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./definicion-servicio.page.scss */
      "jm0d");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
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
      /* harmony import */


      var _confirm_serv_confirm_serv_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./confirm-serv/confirm-serv.component */
      "/5k1");

      var DefinicionServicioPage = /*#__PURE__*/function () {
        function DefinicionServicioPage(modalController, router, menuController, solServ, us, http, lc) {
          _classCallCheck(this, DefinicionServicioPage);

          this.modalController = modalController;
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

        _createClass(DefinicionServicioPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.userSub = this.us.loggedUser.subscribe(function (user) {
              _this.grabbedUser = user;
            }); //form

            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
              dateReq: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
              }),
              sHour: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
              }),
              eHour: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
              }),
              costo: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
              })
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.menuController.enable(true, 'user');
            this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Authorization', 'Bearer ' + this.grabbedUser.access_token);
            this.loadService();
          }
        }, {
          key: "loadService",
          value: function loadService() {
            var _this2 = this;

            this.lc.create({
              message: "Cargando informacion del servicio..."
            }).then(function (loadingEl) {
              loadingEl.present();

              _this2.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["API"] + "/supplier/requestservicedetail/".concat(_this2.solServ.solicitud.solicitudID), {
                headers: _this2.headers
              }).subscribe(function (resData) {
                console.log(resData['data']);
                loadingEl.dismiss();
                _this2.loadedInfo.clientLastName = resData['data'].clientLastName;
                _this2.loadedInfo.clientName = resData['data'].clientName;
                _this2.loadedInfo.date_required = resData['data'].date_required;
                _this2.loadedInfo.description = resData['data'].description;
                _this2.loadedInfo.hours = resData['data'].hours.split("/");

                _this2.form.patchValue({
                  sHour: _this2.loadedInfo.hours[0],
                  eHour: _this2.loadedInfo.hours[1],
                  dateReq: _this2.loadedInfo.date_required
                });

                _this2.loadedInfo.images = resData['data'].images;
                _this2.loadedInfo.img_client_profile = resData['data'].img_client_profile;
                _this2.loadedInfo.ticket_number = resData['data'].ticket_number;
                _this2.loadedInfo.categoryName = resData['data'].categoryName;
              }, function (err) {
                console.log(err);
                loadingEl.dismiss();
              });
            });
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
          key: "openMenu",
          value: function openMenu() {
            this.menuController.open();
          }
        }, {
          key: "confirmRequest",
          value: function confirmRequest() {
            console.log(this.form);
            this.modalController.create({
              component: _confirm_serv_confirm_serv_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmServComponent"],
              cssClass: 'modalSE'
            }).then(function (modalEl) {
              modalEl.present();
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.userSub.unsubscribe();
          }
        }]);

        return DefinicionServicioPage;
      }();

      DefinicionServicioPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"]
        }, {
          type: src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_8__["SolicitudService"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]
        }];
      };

      DefinicionServicioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-definicion-servicio',
        template: _raw_loader_definicion_servicio_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_definicion_servicio_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DefinicionServicioPage);
      /***/
    },

    /***/
    "Md0a":
    /*!************************************************************************************************!*\
      !*** ./src/app/profesional/home/solicitudes/definicion-servicio/definicion-servicio.module.ts ***!
      \************************************************************************************************/

    /*! exports provided: DefinicionServicioPageModule */

    /***/
    function Md0a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefinicionServicioPageModule", function () {
        return DefinicionServicioPageModule;
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


      var _definicion_servicio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./definicion-servicio-routing.module */
      "ilra");
      /* harmony import */


      var _definicion_servicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./definicion-servicio.page */
      "FLRM");

      var DefinicionServicioPageModule = function DefinicionServicioPageModule() {
        _classCallCheck(this, DefinicionServicioPageModule);
      };

      DefinicionServicioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _definicion_servicio_routing_module__WEBPACK_IMPORTED_MODULE_5__["DefinicionServicioPageRoutingModule"]],
        declarations: [_definicion_servicio_page__WEBPACK_IMPORTED_MODULE_6__["DefinicionServicioPage"]]
      })], DefinicionServicioPageModule);
      /***/
    },

    /***/
    "ilra":
    /*!********************************************************************************************************!*\
      !*** ./src/app/profesional/home/solicitudes/definicion-servicio/definicion-servicio-routing.module.ts ***!
      \********************************************************************************************************/

    /*! exports provided: DefinicionServicioPageRoutingModule */

    /***/
    function ilra(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefinicionServicioPageRoutingModule", function () {
        return DefinicionServicioPageRoutingModule;
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


      var _definicion_servicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./definicion-servicio.page */
      "FLRM");

      var routes = [{
        path: '',
        component: _definicion_servicio_page__WEBPACK_IMPORTED_MODULE_3__["DefinicionServicioPage"]
      }];

      var DefinicionServicioPageRoutingModule = function DefinicionServicioPageRoutingModule() {
        _classCallCheck(this, DefinicionServicioPageRoutingModule);
      };

      DefinicionServicioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DefinicionServicioPageRoutingModule);
      /***/
    },

    /***/
    "jm0d":
    /*!************************************************************************************************!*\
      !*** ./src/app/profesional/home/solicitudes/definicion-servicio/definicion-servicio.page.scss ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jm0d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".no-border {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n\n.profileImg {\n  margin-left: 10px;\n  height: 75px;\n  width: 75px;\n}\n\n.titleSelect {\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.titleName {\n  font-size: 18px;\n}\n\n.title {\n  font-size: 20px;\n}\n\n.titleText {\n  font-size: 16px;\n}\n\n.imgSlide {\n  height: 125px;\n}\n\n.subtitle {\n  font-size: 18px;\n}\n\n.subText {\n  font-size: 14px;\n}\n\n.minusMargin {\n  margin-top: -25px;\n}\n\n.iconFix {\n  margin-bottom: -3px;\n}\n\n.mini-text {\n  font-size: 14px;\n}\n\n.ticket {\n  color: red;\n  font-size: 12px;\n}\n\n.locate-cont {\n  border-radius: 50px;\n  height: 45px;\n  width: 45px;\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: 5px;\n  background-color: #009ACE;\n}\n\n.bg-green-color {\n  background-color: #2dd36f;\n}\n\n.rating-text {\n  font-size: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  display: inline-flex;\n}\n\n.border {\n  border: 1px solid #009ACE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2RlZmluaWNpb24tc2VydmljaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0JBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUVBO0VBRUksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUVBO0VBRUksZUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBRUE7RUFFSSxlQUFBO0FBQUo7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0FBRUo7O0FBQUE7RUFDSSxhQUFBO0FBR0o7O0FBREE7RUFDSSxlQUFBO0FBSUo7O0FBRkE7RUFDSSxlQUFBO0FBS0o7O0FBSEE7RUFDSSxpQkFBQTtBQU1KOztBQUpBO0VBQ0ksbUJBQUE7QUFPSjs7QUFMQTtFQUVJLGVBQUE7QUFPSjs7QUFMQTtFQUVJLFVBQUE7RUFDQSxlQUFBO0FBT0o7O0FBTEE7RUFFSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBT0o7O0FBTEE7RUFFSSx5QkFBQTtBQU9KOztBQUxBO0VBRUksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQU9KOztBQUxBO0VBRUkseUJBQUE7QUFPSiIsImZpbGUiOiJkZWZpbmljaW9uLXNlcnZpY2lvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uby1ib3JkZXJcbntcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XG59XG4ucHJvZmlsZUltZ1xue1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGhlaWdodDogNzVweDtcbiAgICB3aWR0aDogNzVweDtcbn1cbi50aXRsZVNlbGVjdFxue1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi50aXRsZU5hbWVcbntcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG4udGl0bGV7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG4udGl0bGVUZXh0e1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5pbWdTbGlkZXtcbiAgICBoZWlnaHQ6MTI1cHg7XG59XG4uc3VidGl0bGV7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuLnN1YlRleHR7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1pbnVzTWFyZ2lue1xuICAgIG1hcmdpbi10b3A6IC0yNXB4O1xufVxuLmljb25GaXh7XG4gICAgbWFyZ2luLWJvdHRvbTogLTNweDtcbn1cbi5taW5pLXRleHRcbntcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4udGlja2V0XG57XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4ubG9jYXRlLWNvbnRcbntcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICB3aWR0aDogNDVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5QUNFO1xufVxuLmJnLWdyZWVuLWNvbG9yXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkZDM2Zjtcbn1cbi5yYXRpbmctdGV4dFxue1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG4uYm9yZGVyXG57XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwOUFDRTtcbn0iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=solicitudes-definicion-servicio-definicion-servicio-module-es5.js.map