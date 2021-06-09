(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profesional-home-home-module"],{

/***/ "1D+C":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profesional/home/home.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n  <ion-tab-bar slot=\"bottom\" class=\"ion-padding\">\n    <ion-tab-button tab=\"solicitudes\">\n      <ion-icon name=\"briefcase-outline\"></ion-icon>\n      <ion-label>SOLICITUDES</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"agendados\">\n      <ion-icon name=\"calendar-outline\"></ion-icon>\n      <ion-label>AGENDADOS</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"finalizados\">\n      <ion-icon name=\"checkmark-done-circle-outline\"></ion-icon>\n      <ion-label>FINALIZADOS</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>");

/***/ }),

/***/ "2DDk":
/*!*********************************************************!*\
  !*** ./src/app/profesional/home/home-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "7eUL");




const routes = [
    {
        path: 'home-tabs',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
        children: [
            {
                path: 'solicitudes', children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | solicitudes-solicitudes-module */[__webpack_require__.e("default~agendados-agendados-module~finalizados-finalizados-module~solicitudes-solicitudes-module"), __webpack_require__.e("solicitudes-solicitudes-module")]).then(__webpack_require__.bind(null, /*! ./solicitudes/solicitudes.module */ "tQ1+")).then(m => m.SolicitudesPageModule),
                    },
                ]
            },
            {
                path: 'agendados', children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | agendados-agendados-module */[__webpack_require__.e("default~agendados-agendados-module~finalizados-finalizados-module~solicitudes-solicitudes-module"), __webpack_require__.e("agendados-agendados-module")]).then(__webpack_require__.bind(null, /*! ./agendados/agendados.module */ "hPVO")).then(m => m.AgendadosPageModule),
                    },
                ]
            },
            {
                path: 'finalizados', children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | finalizados-finalizados-module */[__webpack_require__.e("default~agendados-agendados-module~finalizados-finalizados-module~solicitudes-solicitudes-module"), __webpack_require__.e("finalizados-finalizados-module")]).then(__webpack_require__.bind(null, /*! ./finalizados/finalizados.module */ "1xSf")).then(m => m.FinalizadosPageModule),
                    },
                ]
            },
            {
                path: '',
                redirectTo: '/profesional/home/home-tabs/agendados',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/profesional/home/home-tabs/agendados',
        pathMatch: 'full'
    },
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "7eUL":
/*!***********************************************!*\
  !*** ./src/app/profesional/home/home.page.ts ***!
  \***********************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "1D+C");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "9Bm4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




// import { Router } from '@angular/router';
// import { MenuController } from '@ionic/angular';
let HomePage = class HomePage {
    constructor() { }
    ngOnInit() {
    }
};
HomePage.ctorParameters = () => [];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ }),

/***/ "9Bm4":
/*!*************************************************!*\
  !*** ./src/app/profesional/home/home.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tapText {\n  font-size: 10px;\n}\n\n.paddings {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZUFBQTtBQUFKOztBQUVBO0VBRUksaUJBQUE7RUFDQSxvQkFBQTtBQUFKIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhcFRleHRcbntcbiAgICBmb250LXNpemU6IDEwcHg7XG59XG4ucGFkZGluZ3NcbntcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuIl19 */");

/***/ }),

/***/ "iVdC":
/*!*************************************************!*\
  !*** ./src/app/profesional/home/home.module.ts ***!
  \*************************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "2DDk");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "7eUL");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ })

}]);
//# sourceMappingURL=profesional-home-home-module-es2015.js.map