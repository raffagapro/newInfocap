(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-mapa-mapa-module"], {
    /***/
    "/CNA":
    /*!**************************************************!*\
      !*** ./src/app/user/mapa/mapa-routing.module.ts ***!
      \**************************************************/

    /*! exports provided: MapaPageRoutingModule */

    /***/
    function CNA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapaPageRoutingModule", function () {
        return MapaPageRoutingModule;
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


      var _mapa_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./mapa.page */
      "fJbc");

      var routes = [{
        path: '',
        component: _mapa_page__WEBPACK_IMPORTED_MODULE_3__["MapaPage"]
      }];

      var MapaPageRoutingModule = function MapaPageRoutingModule() {
        _classCallCheck(this, MapaPageRoutingModule);
      };

      MapaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MapaPageRoutingModule);
      /***/
    },

    /***/
    "4zUd":
    /*!******************************************!*\
      !*** ./src/app/user/mapa/mapa.module.ts ***!
      \******************************************/

    /*! exports provided: MapaPageModule */

    /***/
    function zUd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapaPageModule", function () {
        return MapaPageModule;
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


      var _mapa_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./mapa-routing.module */
      "/CNA");
      /* harmony import */


      var _mapa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./mapa.page */
      "fJbc");

      var MapaPageModule = function MapaPageModule() {
        _classCallCheck(this, MapaPageModule);
      };

      MapaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _mapa_routing_module__WEBPACK_IMPORTED_MODULE_5__["MapaPageRoutingModule"]],
        declarations: [_mapa_page__WEBPACK_IMPORTED_MODULE_6__["MapaPage"]]
      })], MapaPageModule);
      /***/
    },

    /***/
    "KGS0":
    /*!********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/mapa/mapa.page.html ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function KGS0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"primary\" defaultHref=\"/user/home\" text=\"\" icon=\"arrow-back\"></ion-back-button>\n      <ion-menu-button color=\"primary\" menu=\"user\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"main-color title-toolbar ion-text-uppercase\">¿Dónde nos necesitas?</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div #map id=\"map\"></div>\n\n  <ion-fab horizontal=\"end\" vertical=\"center\" slot=\"fixed\">\n    <ion-fab-button class=\"float-bottom\" color=\"white\"  (click)=\"loadMap()\">\n      <ion-icon name=\"locate\" color=\"primary\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-button class=\"float-bottom\" color=\"white\"(click)=\"showCords()\" >\n      <ion-icon name=\"information-circle-outline\" color=\"primary\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <!-- nombre -->\n  <ion-grid class=\"top-center\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-searchbar\n          class=\"search_bar_map\"\n          placeholder=\"¿Cuál es la dirección?\"\n          [(ngModel)]=\"autocomplete.input\"\n          (ionChange)=\"updateSearchResults($event)\" \n          (ionClear)=\"clearAutocomplete()\"\n          animated\n          >\n        </ion-searchbar>\n        <ion-list [hidden]=\"autocompleteItems.length == 0\">\n          <ion-item *ngFor=\"let item of autocompleteItems\" tappable (click)=\"selectSearchResult(item)\">\n            {{ item.description }}\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar class=\"ion-no-padding\">\n    <ion-grid>\n\n      <!-- title -->\n      <!-- <ion-row class=\"ion-no-padding ion-no-margin\">\n        <ion-col size=\"10\" offset=\"1\" class=\"ion-text-center\">\n          <ion-text class=\"main-color ion-text-uppercase title\">CONFIRMA TU DIRECCIÓN</ion-text>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"1\" offset=\"1\"></ion-col>\n        <ion-col size=\"8\" class=\"ion-text-center\">\n          <ion-text><hr></ion-text>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row> -->\n\n      <form [formGroup]=\"form\" (ngSubmit)=\"searchPro()\">\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col size=\"10\" offset=\"2\">\n            <ion-title class=\"main-color underline-red title-toolbar ion-text-uppercase\">Confirma tu dirección</ion-title>\n          </ion-col>\n        </ion-row>\n        <!-- detalles de la direccion -->\n        <ion-row class=\"ion-no-padding ion-no-margion\">\n          <ion-col size=\"10\" offset=\"1\">\n            <ion-item>\n              <ion-label position=\"floating\" class=\"main-color\">\n                <ion-icon name=\"location\" slot=\"start\" class=\"main-color\"></ion-icon>\n                <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Dirección</ion-text>\n              </ion-label>\n              <ion-input \n                type=\"text\"\n                formControlName=\"address\"\n                ></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"ion-no-padding ion-no-margion\">\n          <ion-col size=\"10\" offset=\"1\">\n            <ion-item>\n              <ion-label position=\"floating\" class=\"main-color\">\n                <ion-icon name=\"pricetag\" slot=\"start\" class=\"main-color\"></ion-icon>\n                <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Detalles de la dirección ej. casa, oficina</ion-text>\n              </ion-label>\n              <ion-input \n                type=\"text\"\n                formControlName=\"addressDirection\"\n                ></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"ion-no-padding ion-no-margion\">\n          <ion-col size=\"10\" offset=\"1\">\n            <ion-item>\n              <ion-label position=\"floating\" class=\"main-color\">\n                <ion-icon name=\"chatbox-ellipses\" slot=\"start\" class=\"main-color\"></ion-icon>\n                <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Agregar instrucciones ej. tocar el timbre</ion-text>\n              </ion-label>\n              <ion-input \n                type=\"text\"\n                formControlName=\"addressInstructions\"\n                ></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <!-- find BTN -->\n        <ion-row class=\"ion-margin-top\">\n          <ion-col size=\"1\"></ion-col>\n          <ion-col>\n            <ion-button size=\"10\" expand=\"block\" class=\"ion-text-uppercase\" type=\"submit\" [disabled]=\"!form.valid\">\n              CONTINUAR\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"1\"></ion-col>\n        </ion-row>\n    </form>\n\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n";
      /***/
    },

    /***/
    "fJbc":
    /*!****************************************!*\
      !*** ./src/app/user/mapa/mapa.page.ts ***!
      \****************************************/

    /*! exports provided: MapaPage */

    /***/
    function fJbc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapaPage", function () {
        return MapaPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_mapa_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./mapa.page.html */
      "KGS0");
      /* harmony import */


      var _mapa_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./mapa.page.scss */
      "o6OZ");
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


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/solicitud.service */
      "rLtr");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var Geolocation = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"].Geolocation;

      var MapaPage = /*#__PURE__*/function () {
        function MapaPage( // private geolocation: Geolocation,
        // private nativeGeocoder: NativeGeocoder,
        lc, router, zone, http, us, solServ, platform) {
          _classCallCheck(this, MapaPage);

          this.lc = lc;
          this.router = router;
          this.zone = zone;
          this.http = http;
          this.us = us;
          this.solServ = solServ;
          this.platform = platform;
          this.comunas = [];
          this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
          this.autocomplete = {
            input: ''
          };
          this.autocompleteItems = [];
        }

        _createClass(MapaPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.userSub = this.us.loggedUser.subscribe(function (user) {
              _this.grabbedUser = user;
            });
            this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
            this.headers = this.headers.set('Authorization', 'Bearer ' + this.grabbedUser.access_token); //comunas

            this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["API"] + '/location/communes', {
              headers: this.headers
            }).subscribe(function (resData) {
              // console.log('comunas');
              _this.comunas = resData['data']; // console.log(this.comunas);
            }); // form

            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
              address: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
              }),
              addressDirection: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
              }),
              addressInstructions: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
                updateOn: 'blur'
              })
            });
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.loadMap();
          }
        }, {
          key: "loadMap",
          value: function loadMap() {
            var _this2 = this;

            this.lc.create({
              message: 'Generando mapa...'
            }).then(function (loadingEl) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var _this3 = this;

                var latLng, coords, mapOptions;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        loadingEl.present();

                        if (!(this.platform.is('mobile') && !this.platform.is('hybrid') || this.platform.is('desktop'))) {
                          _context.next = 5;
                          break;
                        }

                        Geolocation.getCurrentPosition().then(function (resData) {
                          console.log(resData);
                          loadingEl.dismiss();
                          latLng = new google.maps.LatLng(resData.coords.latitude, resData.coords.longitude);
                        }, function (err) {
                          console.log(err);
                          loadingEl.dismiss();
                          latLng = new google.maps.LatLng(-33.5615548, -71.6251603);
                        });
                        _context.next = 10;
                        break;

                      case 5:
                        _context.next = 7;
                        return Geolocation.getCurrentPosition();

                      case 7:
                        coords = _context.sent;
                        console.log(coords);
                        latLng = new google.maps.LatLng(coords.coords.latitude, coords.coords.longitude);

                      case 10:
                        mapOptions = {
                          center: latLng,
                          zoom: 15,
                          zoomControl: false,
                          streetViewControl: false,
                          mapTypeControl: false,
                          fullscreenControl: false,
                          mapTypeId: google.maps.MapTypeId.ROADMAP
                        }; //load map
                        // this.getAddressFromCords(res.coords.latitude, res.coords.longitude);

                        this.map = new google.maps.Map(this.mapRef.nativeElement, mapOptions);
                        this.map.addListener('tilesloaded', function () {// console.log('accuracy', this.map, this.map.center.lat());
                          // this.getAddressFromCords(this.map.center.lat(), this.map.center.lng());
                          // this.lat = this.map.center.lat();
                          // this.long = this.map.center.lng();
                        }); //marker

                        this.marker = new google.maps.Marker({
                          position: latLng,
                          draggable: true,
                          map: this.map
                        });
                        this.marker.setMap(this.map); //click

                        this.map.addListener('click', function (e) {
                          _this3.addMarker(e.latLng, _this3.map);
                        });
                        loadingEl.dismiss();

                      case 17:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            })["catch"](function (error) {
              console.log(error);

              _this2.lc.dismiss();
            });
          }
        }, {
          key: "addMarker",
          value: function addMarker(location, map) {
            // Add the marker at the clicked location,
            if (this.marker) {
              this.marker.setMap(null);
            }

            this.marker = new google.maps.Marker({
              position: location,
              draggable: true,
              map: map
            });
            this.marker.setMap(this.map);
          }
        }, {
          key: "getAddressFromCords",
          value: function getAddressFromCords(latitude, longitude) {}
        }, {
          key: "updateSearchResults",
          value: function updateSearchResults() {
            var _this4 = this;

            if (this.autocomplete.input == '') {
              this.autocompleteItems = [];
              return;
            }

            this.GoogleAutocomplete.getPlacePredictions({
              input: this.autocomplete.input,
              types: ['address'],
              componentRestrictions: {
                country: 'cl'
              }
            }, function (predictions, status) {
              _this4.autocompleteItems = [];

              _this4.zone.run(function () {
                predictions.forEach(function (prediction) {
                  _this4.autocompleteItems.push(prediction);
                });
              });
            });
          }
        }, {
          key: "selectSearchResult",
          value: function selectSearchResult(item) {
            var _this5 = this;

            ///this is the place for storing data to service
            // alert(JSON.stringify(item))      
            this.placeid = item.place_id;
            var wAddress = item.description.split(','); // console.log(wAddress[1].substring(1));
            // console.log(item);
            // pass address to input

            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
              address: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](item.description, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
              })
            }); //save to solicitud service

            this.solServ.setAddress(item.description); //save comuna id to solicitud service

            this.comunas.forEach(function (comuna) {
              if (comuna.name === wAddress[1].substring(1).toLowerCase()) {
                _this5.solServ.setComuna(comuna.id);
              } else {// console.log('no match');
              }
            });
            this.clearAutocomplete(); // const geocoder = new google.maps.Geocoder();
            // geocoder.geocode({placeId: item.place_id}, (res, status) =>{
            //   console.log(res);
            //   console.log(status);
            // });
          }
        }, {
          key: "clearAutocomplete",
          value: function clearAutocomplete() {
            this.autocompleteItems = [];
            this.autocomplete.input = '';
          }
        }, {
          key: "searchPro",
          value: function searchPro() {
            this.router.navigate(['/user/profesional-list']);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.userSub.unsubscribe();
          }
        }]);

        return MapaPage;
      }();

      MapaPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"]
        }, {
          type: src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_9__["SolicitudService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"]
        }];
      };

      MapaPage.propDecorators = {
        mapRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['map', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"],
            "static": false
          }]
        }]
      };
      MapaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-mapa',
        template: _raw_loader_mapa_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_mapa_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MapaPage);
      /***/
    },

    /***/
    "o6OZ":
    /*!******************************************!*\
      !*** ./src/app/user/mapa/mapa.page.scss ***!
      \******************************************/

    /*! exports provided: default */

    /***/
    function o6OZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#map {\n  height: 100%;\n}\n\n.title {\n  font-size: 18px;\n  font-weight: bold;\n}\n\nhr {\n  border-top: 1px solid #E54360;\n}\n\n.top-center {\n  position: absolute;\n  width: 100%;\n  top: 30px;\n}\n\n.underline-red {\n  text-decoration: underline;\n  -webkit-text-decoration-color: #E54360;\n          text-decoration-color: #E54360;\n}\n\n.floating-input {\n  background-color: white;\n  border: 1px solid #009ACE;\n}\n\n.locate-cont {\n  border-radius: 50px;\n  height: 42px;\n  width: 42px;\n  background-color: white;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  position: absolute;\n  right: 11%;\n  top: 30%;\n}\n\n.scan-cont {\n  border-radius: 50px;\n  height: 42px;\n  width: 42px;\n  background-color: white;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  position: absolute;\n  right: 11%;\n  top: 42%;\n}\n\n.rating-text {\n  font-size: 18px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.search_bar_map {\n  border: solid 1px #009ACE;\n  color: #009ACE;\n  padding: 0;\n}\n\n.float-bottom {\n  background-color: white;\n  margin-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21hcGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUNFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQUU7RUFDRSw2QkFBQTtBQUdKOztBQURFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUlKOztBQUZFO0VBQ0UsMEJBQUE7RUFDQSxzQ0FBQTtVQUFBLDhCQUFBO0FBS0o7O0FBSEU7RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0FBTUo7O0FBSkU7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FBT0o7O0FBTEU7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FBUUo7O0FBTkU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVNKOztBQVBFO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQVVKOztBQVBFO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtBQVVKIiwiZmlsZSI6Im1hcGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLnRpdGxle1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBociB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFNTQzNjA7XG4gIH1cbiAgLnRvcC1jZW50ZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRvcDogMzBweDtcbiAgfVxuICAudW5kZXJsaW5lLXJlZCB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjRTU0MzYwO1xuICB9XG4gIC5mbG9hdGluZy1pbnB1dHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA5QUNFO1xuICB9XG4gIC5sb2NhdGUtY29udHtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGhlaWdodDogNDJweDtcbiAgICB3aWR0aDogNDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDExJTtcbiAgICB0b3A6IDMwJTtcbiAgfVxuICAuc2Nhbi1jb250e1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgaGVpZ2h0OiA0MnB4O1xuICAgIHdpZHRoOiA0MnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTElO1xuICAgIHRvcDogNDIlO1xuICB9XG4gIC5yYXRpbmctdGV4dHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG4gIC5zZWFyY2hfYmFyX21hcCB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzAwOUFDRTtcbiAgICBjb2xvcjogIzAwOUFDRTtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgLmZsb2F0LWJvdHRvbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB9Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-mapa-mapa-module-es5.js.map