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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/user/home\" text=\"\" icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"main-color title-toolbar ion-text-uppercase\">Ubicación</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div #map id=\"map\"></div>\n\n  <ion-fab horizontal=\"start\" vertical=\"bottom\" slot=\"fixed\">\n    <ion-fab-button color=\"primary\" (click)=\"loadMap()\">\n      <ion-icon name=\"locate\" color=\"light\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  \n  <!-- throw alert with cords  -->\n  <!-- <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button (click)=\"showCords()\" ion-fab color=\"tertiary\">\n      <ion-icon name=\"information-circle-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab> -->\n\n  <!-- nombre -->\n  <ion-grid class=\"top-center\">\n    <ion-row>\n      <ion-col size=\"10\" offset=\"1\">\n        <ion-searchbar\n          color=\"primary\"\n          placeholder=\"¿Cuál es la dirección?\"\n          [(ngModel)]=\"autocomplete.input\"\n          (ionChange)=\"updateSearchResults($event)\" \n          (ionClear)=\"clearAutocomplete()\"\n          animated\n          >\n        </ion-searchbar>\n        <ion-list [hidden]=\"autocompleteItems.length == 0\">\n          <ion-item *ngFor=\"let item of autocompleteItems\" tappable (click)=\"selectSearchResult(item)\">\n            {{ item.description }}\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar class=\"ion-no-padding\">\n    <ion-grid>\n\n      <!-- title -->\n      <!-- <ion-row class=\"ion-no-padding ion-no-margin\">\n        <ion-col size=\"10\" offset=\"1\" class=\"ion-text-center\">\n          <ion-text class=\"main-color ion-text-uppercase title\">CONFIRMA TU DIRECCIÓN</ion-text>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"1\" offset=\"1\"></ion-col>\n        <ion-col size=\"8\" class=\"ion-text-center\">\n          <ion-text><hr></ion-text>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row> -->\n\n      <form [formGroup]=\"form\" (ngSubmit)=\"searchPro()\">\n        <!-- detalles de la direccion -->\n        <ion-row class=\"ion-no-padding ion-no-margion\">\n          <ion-col size=\"10\" offset=\"1\">\n            <ion-item>\n              <ion-label position=\"floating\" class=\"main-color\">\n                <ion-icon name=\"pricetag\" slot=\"start\" class=\"main-color\"></ion-icon>\n                <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Dirección</ion-text>\n              </ion-label>\n              <ion-input \n                type=\"text\"\n                formControlName=\"address\"\n                disabled\n                ></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <!-- find BTN -->\n        <ion-row class=\"ion-margin-top\">\n          <ion-col size=\"1\"></ion-col>\n          <ion-col>\n            <ion-button size=\"10\" expand=\"block\" class=\"ion-text-uppercase\" type=\"submit\" [disabled]=\"!form.valid\">\n              CONTINUAR\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"1\"></ion-col>\n        </ion-row>\n    </form>\n\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n");

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
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/solicitud.service */ "rLtr");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/environments/environment */ "AytR");












const { Geolocation } = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"];
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
        this.comunas = [];
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        this.autocomplete = { input: '' };
        this.autocompleteItems = [];
    }
    ngOnInit() {
        this.userSub = this.us.loggedUser.subscribe(user => {
            this.grabbedUser = user;
        });
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Authorization', 'Bearer ' + this.grabbedUser.access_token);
        //comunas
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["API"] + '/location/communes', { headers: this.headers })
            .subscribe(resData => {
            // console.log('comunas');
            this.comunas = resData['data'];
            // console.log(this.comunas);
        });
        // form
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            }),
        });
    }
    ionViewDidEnter() {
        this.loadMap();
    }
    loadMap() {
        this.lc.create({
            message: 'Generando mapa...'
        }).then((loadingEl) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            loadingEl.present();
            let latLng;
            if ((this.platform.is('mobile') && !this.platform.is('hybrid')) || this.platform.is('desktop')) {
                Geolocation.getCurrentPosition().then(resData => {
                    console.log(resData);
                    loadingEl.dismiss();
                    latLng = new google.maps.LatLng(resData.coords.latitude, resData.coords.longitude);
                }, err => {
                    console.log(err);
                    loadingEl.dismiss();
                    latLng = new google.maps.LatLng(-33.5615548, -71.6251603);
                });
            }
            else {
                // get location from device
                const coords = yield Geolocation.getCurrentPosition();
                console.log(coords);
                latLng = new google.maps.LatLng(coords.coords.latitude, coords.coords.longitude);
            }
            let mapOptions = {
                center: latLng,
                zoom: 15,
                zoomControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            //load map
            // this.getAddressFromCords(res.coords.latitude, res.coords.longitude);
            this.map = new google.maps.Map(this.mapRef.nativeElement, mapOptions);
            this.map.addListener('tilesloaded', () => {
                // console.log('accuracy', this.map, this.map.center.lat());
                // this.getAddressFromCords(this.map.center.lat(), this.map.center.lng());
                // this.lat = this.map.center.lat();
                // this.long = this.map.center.lng();
            });
            //marker
            this.marker = new google.maps.Marker({
                position: latLng,
                draggable: true,
                map: this.map
            });
            this.marker.setMap(this.map);
            //click
            this.map.addListener('click', e => {
                this.addMarker(e.latLng, this.map);
            });
            loadingEl.dismiss();
        }));
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
        if (this.autocomplete.input == '') {
            this.autocompleteItems = [];
            return;
        }
        this.GoogleAutocomplete.getPlacePredictions({
            input: this.autocomplete.input,
            types: ['address'],
            componentRestrictions: { country: 'cl' }
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
        ///this is the place for storing data to service
        // alert(JSON.stringify(item))      
        this.placeid = item.place_id;
        let wAddress = item.description.split(',');
        // console.log(wAddress[1].substring(1));
        // console.log(item);
        // pass address to input
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](item.description, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            }),
        });
        //save to solicitud service
        this.solServ.setAddress(item.description);
        //save comuna id to solicitud service
        this.comunas.forEach(comuna => {
            if (comuna.name === wAddress[1].substring(1).toLowerCase()) {
                this.solServ.setComuna(comuna.id);
            }
            else {
                // console.log('no match');
            }
        });
        this.clearAutocomplete();
        // const geocoder = new google.maps.Geocoder();
        // geocoder.geocode({placeId: item.place_id}, (res, status) =>{
        //   console.log(res);
        //   console.log(status);
        // });
    }
    clearAutocomplete() {
        this.autocompleteItems = [];
        this.autocomplete.input = '';
    }
    searchPro() {
        this.router.navigate(['/user/profesional-list']);
    }
    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
};
MapaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] },
    { type: src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_9__["SolicitudService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] }
];
MapaPage.propDecorators = {
    mapRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['map', { read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], static: false },] }]
};
MapaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-mapa',
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
/* harmony default export */ __webpack_exports__["default"] = ("#map {\n  height: 100%;\n}\n\n.title {\n  font-size: 18px;\n  font-weight: bold;\n}\n\nhr {\n  border-top: 1px solid #E54360;\n}\n\n.top-center {\n  position: absolute;\n  width: 100%;\n  top: 60px;\n}\n\n.floating-input {\n  background-color: white;\n  border: 1px solid #009ACE;\n}\n\n.locate-cont {\n  border-radius: 50px;\n  height: 42px;\n  width: 42px;\n  background-color: white;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  position: absolute;\n  right: 11%;\n  top: 30%;\n}\n\n.scan-cont {\n  border-radius: 50px;\n  height: 42px;\n  width: 42px;\n  background-color: white;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  position: absolute;\n  right: 11%;\n  top: 42%;\n}\n\n.rating-text {\n  font-size: 18px;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21hcGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUNFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQUU7RUFDRSw2QkFBQTtBQUdKOztBQURFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUlKOztBQUZFO0VBQ0UsdUJBQUE7RUFDQSx5QkFBQTtBQUtKOztBQUhFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQU1KOztBQUpFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQU9KOztBQUxFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFRSiIsImZpbGUiOiJtYXBhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC50aXRsZXtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgaHIge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRTU0MzYwO1xuICB9XG4gIC50b3AtY2VudGVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0b3A6IDYwcHg7XG4gIH1cbiAgLmZsb2F0aW5nLWlucHV0e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDlBQ0U7XG4gIH1cbiAgLmxvY2F0ZS1jb250e1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgaGVpZ2h0OiA0MnB4O1xuICAgIHdpZHRoOiA0MnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTElO1xuICAgIHRvcDogMzAlO1xuICB9XG4gIC5zY2FuLWNvbnR7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBoZWlnaHQ6IDQycHg7XG4gICAgd2lkdGg6IDQycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMSU7XG4gICAgdG9wOiA0MiU7XG4gIH1cbiAgLnJhdGluZy10ZXh0e1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIH1cbiAgIl19 */");

/***/ })

}]);
//# sourceMappingURL=user-mapa-mapa-module-es2015.js.map