(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-servicio-pagar-servicio-pagar-module"], {
    /***/
    "55mg":
    /*!**********************************************************************!*\
      !*** ./src/app/user/servicio-pagar/servicio-pagar-routing.module.ts ***!
      \**********************************************************************/

    /*! exports provided: ServicioPagarPageRoutingModule */

    /***/
    function mg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServicioPagarPageRoutingModule", function () {
        return ServicioPagarPageRoutingModule;
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


      var _servicio_pagar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./servicio-pagar.page */
      "BH1l");

      var routes = [{
        path: '',
        component: _servicio_pagar_page__WEBPACK_IMPORTED_MODULE_3__["ServicioPagarPage"]
      }];

      var ServicioPagarPageRoutingModule = function ServicioPagarPageRoutingModule() {
        _classCallCheck(this, ServicioPagarPageRoutingModule);
      };

      ServicioPagarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ServicioPagarPageRoutingModule);
      /***/
    },

    /***/
    "8GJd":
    /*!**************************************************************!*\
      !*** ./src/app/user/servicio-pagar/servicio-pagar.module.ts ***!
      \**************************************************************/

    /*! exports provided: ServicioPagarPageModule */

    /***/
    function GJd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServicioPagarPageModule", function () {
        return ServicioPagarPageModule;
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


      var _servicio_pagar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./servicio-pagar-routing.module */
      "55mg");
      /* harmony import */


      var _servicio_pagar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./servicio-pagar.page */
      "BH1l");

      var ServicioPagarPageModule = function ServicioPagarPageModule() {
        _classCallCheck(this, ServicioPagarPageModule);
      };

      ServicioPagarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _servicio_pagar_routing_module__WEBPACK_IMPORTED_MODULE_5__["ServicioPagarPageRoutingModule"]],
        declarations: [_servicio_pagar_page__WEBPACK_IMPORTED_MODULE_6__["ServicioPagarPage"]]
      })], ServicioPagarPageModule);
      /***/
    },

    /***/
    "BH1l":
    /*!************************************************************!*\
      !*** ./src/app/user/servicio-pagar/servicio-pagar.page.ts ***!
      \************************************************************/

    /*! exports provided: ServicioPagarPage */

    /***/
    function BH1l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServicioPagarPage", function () {
        return ServicioPagarPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_servicio_pagar_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./servicio-pagar.page.html */
      "ttxk");
      /* harmony import */


      var _servicio_pagar_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./servicio-pagar.page.scss */
      "bmig");
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


      var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! axios */
      "vDqi");
      /* harmony import */


      var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
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

      var ServicioPagarPage = /*#__PURE__*/function () {
        function ServicioPagarPage(router, menuController, http, us, lc, solServ, route) {
          _classCallCheck(this, ServicioPagarPage);

          this.router = router;
          this.menuController = menuController;
          this.http = http;
          this.us = us;
          this.lc = lc;
          this.solServ = solServ;
          this.route = route;
          this.loadedService = {
            amount_client: null,
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
            request_cost: []
          };
          this.selectedButton = "credit";
          this.paymentTypes = [];
          this.isFinished = false;
        }

        _createClass(ServicioPagarPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.userSub = this.us.loggedUser.subscribe(function (user) {
              _this.grabbedUser = user;
              _this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set("Authorization", "Bearer " + _this.grabbedUser.access_token);
              _this.serviceId = _this.solServ.solicitud.solicitudID;

              _this.loadPaymentTypes();
            });
            this.route.queryParamMap.subscribe(function (params) {
              var _a;

              var queryParams = Object.assign({}, params);
              _this.isFinished = ((_a = queryParams.params) === null || _a === void 0 ? void 0 : _a.finished) === "true";
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.menuController.enable(true, "user");
          }
        }, {
          key: "loadPaymentTypes",
          value: function loadPaymentTypes() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var response;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.prev = 0;
                      _context.next = 3;
                      return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["API"], "/payments/type"), {
                        headers: {
                          Authorization: "Bearer ".concat(this.grabbedUser.access_token)
                        }
                      });

                    case 3:
                      response = _context.sent;
                      this.paymentTypes = response.data.data;
                      _context.next = 10;
                      break;

                    case 7:
                      _context.prev = 7;
                      _context.t0 = _context["catch"](0);
                      console.log(_context.t0);

                    case 10:
                      _context.prev = 10;
                      this.loadService();
                      return _context.finish(10);

                    case 13:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[0, 7, 10, 13]]);
            }));
          }
        }, {
          key: "loadService",
          value: function loadService() {
            var _this2 = this;

            this.lc.create({
              message: "Cargando informacion del servicio..."
            }).then(function (loadingEl) {
              loadingEl.present();

              _this2.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["API"] + "/client/requestservice/".concat(_this2.serviceId), {
                headers: _this2.headers
              }).subscribe(function (resData) {
                loadingEl.dismiss();
                _this2.loadedService = resData["data"];

                _this2.solServ.setServiceObj(resData["data"]);

                var worDate = _this2.loadedService.created_date.split(" ");

                _this2.wDate = worDate[0];

                if (_this2.loadedService.request_cost.length > 0) {
                  var firstCost = _this2.loadedService.request_cost[0];

                  var paymentType = _this2.paymentTypes.find(function (paymentType) {
                    return paymentType.id === firstCost.payment_type_id;
                  });

                  if (paymentType.name === "Efectivo") {
                    _this2.selectedButton = "cash";
                  } else {
                    _this2.selectedButton = "credit";
                  }
                }

                _this2.loadCosts();
              }, function (err) {
                loadingEl.dismiss();
                console.log(err);
              });
            });
          }
        }, {
          key: "loadCosts",
          value: function loadCosts() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var loader, response, data;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.lc.create({
                        message: "Consultando información..."
                      });

                    case 2:
                      loader = _context2.sent;
                      loader.present();
                      _context2.prev = 4;
                      _context2.next = 7;
                      return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["API"], "/client/detailcostrequest/").concat(this.serviceId), {
                        headers: {
                          Authorization: "Bearer ".concat(this.grabbedUser.access_token)
                        }
                      });

                    case 7:
                      response = _context2.sent;

                      if (!response.data) {
                        _context2.next = 14;
                        break;
                      }

                      data = response.data.data;

                      if (!(response.data.code !== 200)) {
                        _context2.next = 13;
                        break;
                      }

                      alert("Error");
                      return _context2.abrupt("return");

                    case 13:
                      this.servicesCosts = data;

                    case 14:
                      _context2.next = 19;
                      break;

                    case 16:
                      _context2.prev = 16;
                      _context2.t0 = _context2["catch"](4);
                      console.log(_context2.t0);

                    case 19:
                      _context2.prev = 19;
                      loader.dismiss();
                      return _context2.finish(19);

                    case 22:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[4, 16, 19, 22]]);
            }));
          }
        }, {
          key: "getServiceCost",
          value: function getServiceCost() {
            if (this.servicesCosts && this.servicesCosts.amount_client) {
              return Number(this.servicesCosts.amount_client).toFixed(2);
            }

            return 0;
          }
        }, {
          key: "getServiceAditional",
          value: function getServiceAditional() {
            if (this.servicesCosts && this.servicesCosts.addittional.length > 0) {
              return Number(this.servicesCosts.addittional.reduce(function (total, entity) {
                return total += Number(entity.amount_client);
              }, 0)).toFixed(2);
            }

            return 0;
          }
        }, {
          key: "getTotal",
          value: function getTotal() {
            if (!this.servicesCosts) {
              return this.getServiceCost();
            }

            return Number(this.getServiceAditional()) + Number(parseFloat(this.servicesCosts.amount_client).toFixed(2));
          }
        }, {
          key: "openMenu",
          value: function openMenu() {
            this.menuController.open();
          }
        }, {
          key: "paymentForm",
          value: function paymentForm() {
            this.router.navigate(["/user/servicio-pagar-forma"]);
          }
        }, {
          key: "setSelectedButton",
          value: function setSelectedButton(type) {
            this.selectedButton = type;
          }
        }, {
          key: "goToReport",
          value: function goToReport() {
            this.router.navigate(["/user/service-report"]);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.userSub.unsubscribe();
          }
        }]);

        return ServicioPagarPage;
      }();

      ServicioPagarPage.ctorParameters = function () {
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
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }];
      };

      ServicioPagarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "app-servicio-pagar",
        template: _raw_loader_servicio_pagar_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_servicio_pagar_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ServicioPagarPage);
      /***/
    },

    /***/
    "bmig":
    /*!**************************************************************!*\
      !*** ./src/app/user/servicio-pagar/servicio-pagar.page.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function bmig(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".title {\n  font-size: 29px;\n}\n.title .small {\n  font-size: 18px;\n}\n.text {\n  font-size: 22px;\n}\n.subtitle {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlcnZpY2lvLXBhZ2FyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGVBQUE7QUFBSjtBQUVJO0VBQ0ksZUFBQTtBQUFSO0FBR0E7RUFFSSxlQUFBO0FBREo7QUFHQTtFQUVJLGVBQUE7QUFESiIsImZpbGUiOiJzZXJ2aWNpby1wYWdhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGVcbntcbiAgICBmb250LXNpemU6IDI5cHg7XG5cbiAgICAuc21hbGwge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxufVxuLnRleHRcbntcbiAgICBmb250LXNpemU6IDIycHg7XG59XG4uc3VidGl0bGVcbntcbiAgICBmb250LXNpemU6IDE4cHg7XG59Il19 */";
      /***/
    },

    /***/
    "ttxk":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/servicio-pagar/servicio-pagar.page.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ttxk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/user/solicitud-status\" text=\"\" icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title class=\"title-toolbar text-center\">MÉTODO DE PAGO</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid fixed>\n\n    <!-- OMITIR POR EL MOMENTO BTN -->\n    <ion-row class=\"ion-margin-bottom\" *ngIf=\"loadedService && loadedService.type_request !== 'URGENT'\">\n      <ion-col size=\"1\"></ion-col>\n      <ion-col>\n        <ion-button size=\"5\" expand=\"block\" fill=\"outline\" (click)=\"goToReport()\" *ngIf=\"loadedService && loadedService.request_cost.length > 0\">\n          <ion-icon slot=\"start\" name=\"document-text-outline\"></ion-icon>\n          Ver informe de los servicios\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n    <!-- title  -->\n    <ion-row>\n      <ion-col size=\"11\" offset=\"1\">\n        <ion-text color=\"primary\" class=\"title\">\n          <b>Detalle del pago</b>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n    <!-- servicios pactados  -->\n    <ion-row>\n      <ion-col size=\"11\" offset=\"1\">\n        <ion-text class=\"text\">\n          <b>Servicios pactados</b>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n    <!-- costo  -->\n    <ion-row>\n      <ion-col size=\"11\" offset=\"1\">\n        <ion-text color=\"primary\" class=\"title\">\n          <b *ngIf=\"servicesCosts && servicesCosts.amount_client\">${{getServiceCost()}}</b>\n          <b *ngIf=\"servicesCosts && !servicesCosts.amount_client\" class=\"small\">Aún no se ha asignado un costo</b>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n    <!-- servicios adicionales  -->\n    <ion-row *ngIf=\"loadedService && loadedService.type_request !== 'URGENT'\">\n      <ion-col size=\"11\" offset=\"1\">\n        <ion-text class=\"text\">\n          <b>Servicios adicionales</b>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n    <!-- costo  -->\n    <ion-row *ngIf=\"servicesCosts && servicesCosts.addittional.length > 0 && loadedService.type_request !== 'URGENT'\">\n      <ion-col size=\"11\" offset=\"1\">\n        <ion-text color=\"primary\" class=\"title\">\n          <b *ngIf=\"servicesCosts\">${{getServiceAditional()}}</b>\n          <b *ngIf=\"!servicesCosts\" class=\"small\">Aún no se ha asignado un costo</b>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n    <!-- empty aditionals  -->\n    <ion-row *ngIf=\"servicesCosts && servicesCosts.addittional.length === 0 && loadedService.type_request !== 'URGENT'\">\n      <ion-col size=\"11\" offset=\"1\">\n        <ion-text color=\"primary\" class=\"title\">\n          <b class=\"small\">No se tienen adicionales</b>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n    <!-- servicios adicionales  -->\n    <ion-row>\n      <ion-col size=\"11\" offset=\"1\">\n        <ion-text class=\"text ion-text-uppercase\">\n          <b>TOTAL</b>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n    <!-- costo  -->\n    <ion-row>\n      <ion-col size=\"11\" offset=\"1\">\n        <ion-text color=\"danger\" class=\"title\">\n          <b *ngIf=\"loadedService && loadedService.request_cost.length > 0\">${{getTotal()}}</b>\n          <b *ngIf=\"loadedService && loadedService.request_cost.length === 0\" class=\"small\">No se ha asignado un costo</b>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n    <!-- Costo & pay BTNS-->\n    <ion-row class=\"ion-margin-top\">\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-text class=\"main-color subtitle\"><b>{{isFinished ? 'Método de pago aplicado' : '¿Cómo desea pagar?'}}</b></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <section>\n          <!-- btn -->\n          <ion-button size=\"small\"\n            [fill]=\"selectedButton === 'credit' ? 'solid' : 'outline'\" *ngIf=\"isFinished && selectedButton === 'credit'\">\n            <ion-icon slot=\"start\" src=\"assets/icon/visa.svg\"></ion-icon>\n            Tarjeta\n          </ion-button>\n\n          <!-- btn -->\n          <!--\n          <ion-button size=\"small\" (click)=\"setSelectedButton('debit')\"  [fill]=\"selectedButton === 'debit' ? 'solid' : 'outline'\">\n            <ion-icon slot=\"start\" src=\"assets/icon/mastercard.svg\"></ion-icon>\n            Débito\n          </ion-button>\n          -->\n\n          <!-- btn -->\n          <ion-button size=\"small\"\n            [fill]=\"selectedButton === 'cash' ? 'solid' : 'outline'\" *ngIf=\"isFinished && selectedButton === 'cash'\">\n            <ion-icon slot=\"start\" src=\"/assets/icon/ic_dollar_blank.svg\"></ion-icon>\n            Efectivo\n          </ion-button>\n\n          <!-- btn -->\n          <!--\n          <ion-button size=\"small\" (click)=\"setSelectedButton('transfer')\"\n            [fill]=\"selectedButton === 'transfer' ? 'solid' : 'outline'\">\n            <ion-icon slot=\"start\" src=\"/assets/icon/ic_money_blank.svg\"></ion-icon>\n            Transferencia\n          </ion-button>\n          -->\n\n        </section>\n      </ion-col>\n\n    </ion-row>\n\n    <!-- CONFIRMAR BTN -->\n    <ion-row class=\"ion-margin-top\" *ngIf=\"!isFinished\">\n      <ion-col size=\"1\"></ion-col>\n      <ion-col> <!-- [disabled]=\"!servicesCosts\" -->\n        <ion-button  size=\"5\" expand=\"block\" class=\"ion-text-uppercase\"\n          (click)=\"paymentForm()\">\n          PAGAR\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-servicio-pagar-servicio-pagar-module-es5.js.map