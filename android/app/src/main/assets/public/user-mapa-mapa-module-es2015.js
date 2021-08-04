(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-mapa-mapa-module"],{

/***/ "/CNA":
/*!**************************************************!*\
  !*** ./src/app/user/mapa/mapa-routing.module.ts ***!
  \**************************************************/
/*! exports provided: MapaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaPageRoutingModule", function() { return MapaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _mapa_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mapa.page */ "fJbc");




const routes = [
    {
        path: '',
        component: _mapa_page__WEBPACK_IMPORTED_MODULE_3__["MapaPage"]
    }
];
let MapaPageRoutingModule = class MapaPageRoutingModule {
};
MapaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MapaPageRoutingModule);



/***/ }),

/***/ "4zUd":
/*!******************************************!*\
  !*** ./src/app/user/mapa/mapa.module.ts ***!
  \******************************************/
/*! exports provided: MapaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaPageModule", function() { return MapaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _mapa_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mapa-routing.module */ "/CNA");
/* harmony import */ var _mapa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mapa.page */ "fJbc");







let MapaPageModule = class MapaPageModule {
};
MapaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _mapa_routing_module__WEBPACK_IMPORTED_MODULE_5__["MapaPageRoutingModule"]
        ],
        declarations: [_mapa_page__WEBPACK_IMPORTED_MODULE_6__["MapaPage"]]
    })
], MapaPageModule);



/***/ }),

/***/ "KGS0":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/mapa/mapa.page.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"primary\" defaultHref=\"/user/home\" text=\"\" icon=\"arrow-back\"></ion-back-button>\n      <ion-menu-button color=\"primary\" menu=\"user\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"main-color title-toolbar ion-text-uppercase\">¿Dónde nos necesitas?</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div>\n    <div #map id=\"map\">\n\n    </div>\n    <ion-fab class=\"controls\" horizontal=\"end\" vertical=\"top\" slot=\"fixed\">\n      <ion-fab-button class=\"float-bottom\" color=\"white\" (click)=\"loadMap()\">\n        <ion-icon name=\"locate\" color=\"primary\"></ion-icon>\n      </ion-fab-button>\n      <!--\n      <ion-fab-button class=\"float-bottom\" color=\"white\" (click)=\"showCords()\">\n        <ion-icon name=\"information-circle-outline\" color=\"primary\"></ion-icon>\n      </ion-fab-button>\n      -->\n    </ion-fab>\n  </div>\n\n  <!-- nombre -->\n  <ion-grid class=\"top-center\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-searchbar mode=\"ios\" class=\"search_bar_map\" placeholder=\"¿Cuál es la dirección?\" [(ngModel)]=\"autocomplete.input\"\n          (ionChange)=\"updateSearchResults($event)\" searchIcon=\"{{showIcon ? 'search-outline' : '/assets/icon/empty.svg'}}\"\n          (ionClear)=\"clearAutocomplete()\" color=\"transparent\" (ionFocus)=\"showSearchIcon($event, false)\" (ionBlur)=\"showSearchIcon($event, true)\">\n        </ion-searchbar>\n        <ion-list [hidden]=\"autocompleteItems.length == 0\">\n          <ion-item *ngFor=\"let item of autocompleteItems\" tappable (click)=\"selectSearchResult(item)\">\n            {{ item.description }}\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-toolbar class=\"ion-no-padding\">\n          <ion-grid>\n\n            <!-- title -->\n            <!-- <ion-row class=\"ion-no-padding ion-no-margin\">\n              <ion-col size=\"10\" offset=\"1\" class=\"ion-text-center\">\n                <ion-text class=\"main-color ion-text-uppercase title\">CONFIRMA TU DIRECCIÓN</ion-text>\n              </ion-col>\n              <ion-col size=\"1\"></ion-col>\n              <ion-col size=\"1\" offset=\"1\"></ion-col>\n              <ion-col size=\"8\" class=\"ion-text-center\">\n                <ion-text><hr></ion-text>\n              </ion-col>\n              <ion-col size=\"1\"></ion-col>\n            </ion-row> -->\n\n            <form [formGroup]=\"form\" (ngSubmit)=\"searchPro()\" class=\"form-padding\">\n              <ion-row class=\"ion-justify-content-center\">\n                <ion-col size=\"12\">\n                  <ion-title class=\"main-color title ion-text-uppercase\">\n                    Confirma tu dirección\n                  </ion-title>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <hr />\n                </ion-col>\n              </ion-row>\n              <!-- detalles de la direccion -->\n              <ion-row class=\"ion-no-padding ion-no-margion\">\n                <ion-col size=\"12\">\n                  <ion-item class=\"ion-no-padding\">\n                    <ion-label position=\"floating\" class=\"main-color ion-no-margin\">\n                      <ion-icon src=\"/assets/icon/ic_place.svg\" slot=\"start\" class=\"main-color\"></ion-icon>\n                      <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Dirección</ion-text>\n                    </ion-label>\n                    <ion-input type=\"text\" formControlName=\"address\"></ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row class=\"ion-no-padding ion-no-margion\">\n                <ion-col size=\"12\">\n                  <ion-item class=\"ion-no-padding\">\n                    <ion-label position=\"floating\" class=\"main-color ion-no-margin\">\n                      <ion-icon src=\"/assets/icon/ic_tag.svg\" slot=\"start\" class=\"main-color\"></ion-icon>\n                      <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Detalles de la dirección ej. casa, oficina\n                      </ion-text>\n                    </ion-label>\n                    <ion-input type=\"text\" formControlName=\"addressDirection\"></ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row class=\"ion-no-padding ion-no-margion\">\n                <ion-col size=\"12\">\n                  <ion-item class=\"ion-no-padding\">\n                    <ion-label position=\"floating\" class=\"main-color ion-no-margin\">\n                      <ion-icon src=\"/assets/icon/ic_speaker_notes.svg\" slot=\"start\" class=\"main-color\"></ion-icon>\n                      <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Agregar instrucciones ej. tocar el timbre\n                      </ion-text>\n                    </ion-label>\n                    <ion-input type=\"text\" formControlName=\"addressInstructions\"></ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <br />\n              <br />\n              <!-- find BTN -->\n              <ion-button size=\"10\" expand=\"block\" class=\"ion-text-uppercase btn-submit\" type=\"submit\"\n                [disabled]=\"!form.valid\">\n                CONTINUAR\n              </ion-button>\n            </form>\n\n          </ion-grid>\n        </ion-toolbar>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "R6Ch":
/*!*********************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/definitions.js ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ "aa/T":
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/index.js ***!
  \***************************************************************/
/*! exports provided: Geolocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Geolocation", function() { return Geolocation; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "FUe0");
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ "R6Ch");
/* empty/unused harmony star reexport */
const Geolocation = Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerPlugin"])('Geolocation', {
    web: () => Promise.all(/*! import() | web */[__webpack_require__.e("common"), __webpack_require__.e("web")]).then(__webpack_require__.bind(null, /*! ./web */ "7ogy")).then(m => new m.GeolocationWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "fJbc":
/*!****************************************!*\
  !*** ./src/app/user/mapa/mapa.page.ts ***!
  \****************************************/
/*! exports provided: MapaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaPage", function() { return MapaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_mapa_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./mapa.page.html */ "KGS0");
/* harmony import */ var _mapa_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mapa.page.scss */ "o6OZ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/solicitud.service */ "rLtr");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @capacitor/geolocation */ "aa/T");













let MapaPage = class MapaPage {
    constructor(
    // private geolocation: Geolocation,
    // private nativeGeocoder: NativeGeocoder,
    lc, router, zone, http, us, solServ, platform) {
        this.lc = lc;
        this.router = router;
        this.zone = zone;
        this.http = http;
        this.us = us;
        this.solServ = solServ;
        this.platform = platform;
        // lat: string;
        // long: string;
        this.autocomplete = { input: "-" };
        this.comunas = [];
        this.showIcon = true;
        this.Geocoder = new google.maps.Geocoder();
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        this.autocomplete = { input: "" };
        this.autocompleteItems = [];
    }
    ngOnInit() {
        this.userSub = this.us.loggedUser.subscribe((user) => {
            this.grabbedUser = user;
            this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
            this.headers = this.headers.set("Authorization", "Bearer " + user.access_token);
            this.getComunes();
        });
        // form
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
                updateOn: "blur",
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            }),
            addressDirection: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
                updateOn: "blur",
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            }),
            addressInstructions: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
                updateOn: "blur",
            }),
        });
    }
    ionViewDidEnter() {
        this.loadMap();
    }
    loadMap() {
        this.lc
            .create({
            message: "Generando mapa...",
        })
            .then((loadingEl) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            loadingEl.present();
            let latLng;
            if ((this.platform.is("mobile") && !this.platform.is("hybrid")) ||
                this.platform.is("desktop")) {
                try {
                    _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_12__["Geolocation"].getCurrentPosition().then((resData) => {
                        loadingEl.dismiss();
                        latLng = new google.maps.LatLng(resData.coords.latitude, resData.coords.longitude);
                    }, (err) => {
                        loadingEl.dismiss();
                        latLng = new google.maps.LatLng(-33.5615548, -71.6251603);
                    });
                }
                catch (error) {
                    latLng = new google.maps.LatLng(-33.5615548, -71.6251603);
                }
            }
            else {
                try {
                    // get location from device
                    const coords = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_12__["Geolocation"].getCurrentPosition();
                    latLng = new google.maps.LatLng(coords.coords.latitude, coords.coords.longitude);
                }
                catch (err) {
                    latLng = new google.maps.LatLng(-33.5615548, -71.6251603);
                }
            }
            let mapOptions = {
                center: latLng,
                zoom: 15,
                zoomControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
            };
            //load map
            // this.getAddressFromCords(res.coords.latitude, res.coords.longitude);
            this.map = new google.maps.Map(this.mapRef.nativeElement, mapOptions);
            this.map.addListener("tilesloaded", () => { });
            //marker
            this.marker = new google.maps.Marker({
                position: latLng,
                draggable: true,
                map: this.map,
            });
            this.marker.setMap(this.map);
            //click
            this.map.addListener("click", (e) => {
                this.addMarker(e.latLng, this.map);
            });
            loadingEl.dismiss();
        }))
            .catch((error) => {
            console.log(error);
            this.lc.dismiss();
        });
    }
    addMarker(location, map) {
        // Add the marker at the clicked location,
        if (this.marker) {
            this.marker.setMap(null);
        }
        this.marker = new google.maps.Marker({
            position: location,
            draggable: true,
            map: map,
        });
        this.marker.setMap(this.map);
    }
    getAddressFromCords(latitude, longitude) { }
    updateSearchResults() {
        if (this.autocomplete.input == "") {
            this.autocompleteItems = [];
            return;
        }
        this.GoogleAutocomplete.getPlacePredictions({
            input: this.autocomplete.input,
            types: ["address"],
            componentRestrictions: { country: "cl" },
        }, (predictions, status) => {
            this.autocompleteItems = [];
            this.zone.run(() => {
                predictions.forEach((prediction) => {
                    this.autocompleteItems.push(prediction);
                });
            });
        });
    }
    selectSearchResult(item) {
        this.placeid = item.place_id;
        let wAddress = item.description.split(",");
        this.form.patchValue({
            address: item.description,
        });
        //save to solicitud service
        this.solServ.setAddress(item.description);
        //save comuna id to solicitud service
        this.comunas.forEach((comuna) => {
            if (comuna.name.toLowerCase() === wAddress[1].substring(1).toLowerCase()) {
                this.solServ.setComuna(comuna.id);
            }
            else {
            }
        });
        this.clearAutocomplete();
        const map = this.map;
        let marker = this.marker;
        this.Geocoder.geocode({
            placeId: item.place_id,
        }, (responses, status) => {
            if (status == "OK") {
                var lat = responses[0].geometry.location.lat();
                var lng = responses[0].geometry.location.lng();
                const center = new google.maps.LatLng(lat, lng);
                this.map.setCenter(center);
                if (this.marker) {
                    this.marker.setMap(null);
                }
                this.marker = new google.maps.Marker({
                    position: center,
                    draggable: true,
                    map: map,
                });
                this.marker.setMap(this.map);
            }
        });
    }
    clearAutocomplete() {
        this.autocompleteItems = [];
        this.autocomplete.input = "";
    }
    searchPro() {
        this.solServ.setAddressDetail(this.form.value.addressDirection);
        this.solServ.setInstructions(this.form.value.addressInstructions);
        this.router.navigate(["/user/profesional-list"]);
    }
    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
    getComunes() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let response = yield axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["API"]}/location/communes`, {
                    headers: {
                        Authorization: `Bearer ${this.grabbedUser.access_token}`,
                    },
                });
                this.comunas = response.data.data;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    showSearchIcon(event, show) {
        this.showIcon = show;
    }
};
MapaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] },
    { type: src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_9__["SolicitudService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] }
];
MapaPage.propDecorators = {
    mapRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ["map", { read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], static: false },] }]
};
MapaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "app-mapa",
        template: _raw_loader_mapa_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_mapa_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MapaPage);



/***/ }),

/***/ "o6OZ":
/*!******************************************!*\
  !*** ./src/app/user/mapa/mapa.page.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map {\n  min-height: 460px;\n}\n@media (min-height: 768px) {\n  #map {\n    min-height: 530px;\n  }\n}\n.title {\n  font-size: 18px;\n  font-weight: bold;\n  word-wrap: unset;\n  padding: 0;\n  margin-top: 10px;\n  position: relative;\n  text-align: center;\n}\nhr {\n  border-top: 1px solid #e54360;\n}\n.top-center {\n  position: absolute;\n  width: 100%;\n  top: 30px;\n}\n.underline-red {\n  text-decoration: underline;\n  -webkit-text-decoration-color: #e54360;\n          text-decoration-color: #e54360;\n}\n.floating-input {\n  background-color: white;\n  border: 1px solid #009ace;\n}\n.locate-cont {\n  border-radius: 50px;\n  height: 42px;\n  width: 42px;\n  background-color: white;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  position: absolute;\n  right: 11%;\n  top: 30%;\n}\n.scan-cont {\n  border-radius: 50px;\n  height: 42px;\n  width: 42px;\n  background-color: white;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  position: absolute;\n  right: 11%;\n  top: 42%;\n}\n.rating-text {\n  font-size: 18px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.search_bar_map {\n  text-align: left;\n  background: #ffffff;\n  border: solid 1px #009ace;\n  color: #009ace;\n  padding: 0;\n}\n.search_bar_map::-moz-placeholder {\n  text-align: left;\n}\n.search_bar_map::placeholder {\n  text-align: left;\n}\n.searchbar-input:focus .searchbar-search-icon {\n  display: none;\n}\n.searchbar-input-container {\n  --background: #ffffff !important;\n  background-color: #ffffff !important;\n  background: #ffffff !important;\n  text-align: left;\n}\n.float-bottom {\n  background-color: white;\n  margin-bottom: 8px;\n  border-radius: 50%;\n}\nhr {\n  border-top: 1px solid #e54360;\n}\n.controls {\n  top: 140px;\n}\n.form-padding {\n  position: relative;\n  padding: 0 10px 40px 10px;\n}\n/*\n.btn-submit {\n  margin: auto;\n  margin-bottom: 10px;\n  position: absolute;\n  bottom: 0;\n  width: 210px;\n  right: 0;\n  left: 0;\n}\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21hcGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsaUJBQUE7QUFBRjtBQUVFO0VBSkY7SUFLSSxpQkFBQTtFQUNGO0FBQ0Y7QUFDQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUVGO0FBQUE7RUFDRSw2QkFBQTtBQUdGO0FBREE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBSUY7QUFGQTtFQUNFLDBCQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtBQUtGO0FBSEE7RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0FBTUY7QUFKQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUFPRjtBQUxBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQVFGO0FBTkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVNGO0FBUEE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQVVGO0FBUkU7RUFDRSxnQkFBQTtBQVVKO0FBWEU7RUFDRSxnQkFBQTtBQVVKO0FBTEk7RUFDRSxhQUFBO0FBUU47QUFIQTtFQUNFLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBTUY7QUFIQTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQU1GO0FBSEE7RUFDRSw2QkFBQTtBQU1GO0FBSEE7RUFDRSxVQUFBO0FBTUY7QUFIQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUFNRjtBQUhBOzs7Ozs7Ozs7O0NBQUEiLCJmaWxlIjoibWFwYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwIHtcbiAgLy9oZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDQ2MHB4O1xuXG4gIEBtZWRpYSAobWluLWhlaWdodDogNzY4cHgpIHtcbiAgICBtaW4taGVpZ2h0OiA1MzBweDtcbiAgfVxufVxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd29yZC13cmFwOiB1bnNldDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5ociB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTU0MzYwO1xufVxuLnRvcC1jZW50ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDMwcHg7XG59XG4udW5kZXJsaW5lLXJlZCB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICNlNTQzNjA7XG59XG4uZmxvYXRpbmctaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwOWFjZTtcbn1cbi5sb2NhdGUtY29udCB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGhlaWdodDogNDJweDtcbiAgd2lkdGg6IDQycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDExJTtcbiAgdG9wOiAzMCU7XG59XG4uc2Nhbi1jb250IHtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICB3aWR0aDogNDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTElO1xuICB0b3A6IDQyJTtcbn1cbi5yYXRpbmctdGV4dCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5zZWFyY2hfYmFyX21hcCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogc29saWQgMXB4ICMwMDlhY2U7XG4gIGNvbG9yOiAjMDA5YWNlO1xuICBwYWRkaW5nOiAwO1xuXG4gICY6OnBsYWNlaG9sZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG59XG4uc2VhcmNoYmFyLWlucHV0IHtcbiAgJjpmb2N1cyB7XG4gICAgLnNlYXJjaGJhci1zZWFyY2gtaWNvbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuXG4uc2VhcmNoYmFyLWlucHV0LWNvbnRhaW5lciB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmZsb2F0LWJvdHRvbSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuaHIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U1NDM2MDtcbn1cblxuLmNvbnRyb2xzIHtcbiAgdG9wOiAxNDBweDtcbn1cblxuLmZvcm0tcGFkZGluZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMCAxMHB4IDQwcHggMTBweDtcbn1cblxuLypcbi5idG4tc3VibWl0IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDIxMHB4O1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbn1cbiovXG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=user-mapa-mapa-module-es2015.js.map