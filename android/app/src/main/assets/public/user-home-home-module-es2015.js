(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-home-home-module"],{

/***/ "31wL":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/home.page.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button [menu]=\"user?.role\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"main-color title-toolbar\">CATEGORÍAS</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <!-- category item -->\n    <ion-row *ngFor=\"let cat of categories\" class=\"category-item ion-align-items-end\"\n      style=\"background-image: url('{{ cat.image }}');\" (click)=\"map(cat.id)\">\n      <ion-col class=\"cat-bar\">\n        <ion-text color=\"light\">\n          <h1 class=\"cat-title\">{{ cat.name }}</h1>\n          <p class=\"cat-text\">{{ cat.description }}</p>\n          <!-- rating circle -->\n          <!-- <div class=\"rate-cont\">\n            <ion-label color=\"primary\" class=\"rating-text ml-1\">4.8</ion-label>\n            <ion-icon name=\"star\" color=\"primary\" class=\"rating-text\"></ion-icon>\n          </div> -->\n          <!-- style=\"background-image: url('/assets/images/carp_cat.png');\" -->\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n    <!-- footer text -->\n    <div style=\"height: 20px;\"></div>\n    <ion-row class=\"subtitle ion-margin-top\">\n      <ion-col size=\"8\" offset=\"2\" class=\"ion-text-center\">\n        <ion-text class=\"footer-text main-color\"><b>¿No encuentras la categoría que buscabas?</b></ion-text>\n      </ion-col>\n    </ion-row>\n\n    <!-- enviar mensaje BTN -->\n    <ion-row class=\"ion-margin-top ion-margin-bottom\">\n      <ion-col size=\"1\"></ion-col>\n      <ion-col>\n        <ion-button size=\"6\" expand=\"block\" class=\"ion-text-uppercase\" (click)=\"openSuggesModal()\">\n          ENVÍANOS UN MENSAJE\n          <ion-icon slot=\"end\" name=\"send\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "DRc1":
/*!****************************************************************************************!*\
  !*** ./src/app/user/home/suggest-category-modal/suggest-category-modal.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".status-cont {\n  border-radius: 50px;\n  height: 45px;\n  width: 45px;\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 5px;\n  background-color: #009ace;\n}\n\n.status-text-icon {\n  font-size: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  display: inline-flex;\n}\n\n.status-text {\n  font-size: 22px;\n}\n\n.mini-text {\n  font-size: 13px;\n}\n\nhr {\n  border-top: 1px solid #009ace;\n}\n\n.border {\n  border: 2px solid #009ace;\n  border-radius: 5px;\n}\n\n.textarea::-moz-placeholder {\n  color: #009ace;\n}\n\n.textarea::placeholder {\n  color: #009ace;\n}\n\n.textarea::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #009ace;\n}\n\n.textarea::placeholder {\n  color: #009ace;\n}\n\n.padding {\n  padding: 0 10px;\n}\n\n.scroll-content {\n  padding-bottom: 0 !important;\n}\n\n.center-content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3N1Z2dlc3QtY2F0ZWdvcnktbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtBQUdGOztBQURBO0VBQ0UsZUFBQTtBQUlGOztBQUZBO0VBQ0UsNkJBQUE7QUFLRjs7QUFIQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUFNRjs7QUFKQTtFQUNFLGNBQUE7QUFPRjs7QUFSQTtFQUNFLGNBQUE7QUFPRjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQVFGOztBQURBO0VBQ0UsY0FBQTtBQVFGOztBQU5BO0VBQ0UsZUFBQTtBQVNGOztBQVBBO0VBQ0UsNEJBQUE7QUFVRjs7QUFSQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQVdGIiwiZmlsZSI6InN1Z2dlc3QtY2F0ZWdvcnktbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhdHVzLWNvbnQge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHdpZHRoOiA0NXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDlhY2U7XG59XG4uc3RhdHVzLXRleHQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG4uc3RhdHVzLXRleHQge1xuICBmb250LXNpemU6IDIycHg7XG59XG4ubWluaS10ZXh0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuaHIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwOWFjZTtcbn1cbi5ib3JkZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDA5YWNlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4udGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICMwMDlhY2U7XG59XG4udGV4dGFyZWE6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzAwOWFjZTtcbn1cblxuLnRleHRhcmVhOi1tb3otcGxhY2Vob2xkZXIge1xuICAvKiBGaXJlZm94IDE4LSAqL1xuICBjb2xvcjogIzAwOWFjZTtcbn1cblxuLnRleHRhcmVhOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgLyogRmlyZWZveCAxOSsgKi9cbiAgY29sb3I6ICMwMDlhY2U7XG59XG5cbi50ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzAwOWFjZTtcbn1cblxuLnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjMDA5YWNlO1xufVxuLnBhZGRpbmcge1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG4uc2Nyb2xsLWNvbnRlbnQge1xuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuLmNlbnRlci1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "FF+a":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/suggest-category-modal/suggest-category-modal.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"backdrop-no-scroll\">\n  <ion-grid fixed class=\"center-content\">\n    <form [formGroup]=\"form\" (ngSubmit)=\"sendSuggestion()\">\n      <!-- SERVICIO REALIZADO  -->\n      <ion-row class=\"padding ion-align-items-center\">\n        <ion-col size=\"12\" class=\"ion-text-center ion-margin-top\">\n          <ion-text class=\"main-color status-text\"><b>¿Qué oficio no encontraste y te interesa?</b>\n          </ion-text><br>\n        </ion-col>\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <!-- text-area -->\n          <ion-row class=\"ion-margin-top\">\n            <ion-col size=\"12\" class=\"border ion-text-center\">\n              <ion-item lines=\"none\">\n                <ion-textarea class=\"textarea\" rows=\"3\" cols=\"20\" name=\"description\" formControlName=\"description\"\n                  placeholder=\"Agrega una descripción\" >\n                </ion-textarea>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"1\"></ion-col>\n            <div *ngIf=\"error\">\n              <ion-col size=\"12\">\n                <ion-label class=\"errorMess\">\n                  <ion-icon name=\"alert-circle-outline\" class=\"iconFixG\" color=\"danger\"></ion-icon>\n                  <ion-text color=\"danger\">\n                    <small>{{errorMessage}}</small>\n                  </ion-text>\n                  <br />\n                </ion-label>\n              </ion-col>\n            </div>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"6\" class=\"ion-text-center\">\n          <ion-button size=\"5\" color=\"tertiary\" expand=\"block\" class=\"btn-tertiary\" (click)=\"dismiss()\">\n            Omitir\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"6\" class=\"ion-text-center\">\n          <ion-button size=\"5\" expand=\"block\" class=\"\" type=\"submit\" [disabled]=\"!form.valid\">\n            Enviar\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "LyDf":
/*!******************************************!*\
  !*** ./src/app/user/home/home.page.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  font-size: 22px;\n  font-weight: bold;\n}\n\nhr {\n  border-top: 1px solid #e54360;\n}\n\n.category-item {\n  height: 190px;\n  width: 108%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  margin-left: -15px;\n  margin-top: 25px;\n  box-shadow: 1px 8px 20px 0px rgba(0, 0, 0, 0.25);\n}\n\n@media (min-width: 768px) {\n  .category-item {\n    height: 300px;\n  }\n}\n\n.cat-bar {\n  background-image: url(\"/assets/images/cat_bar.png\");\n  height: 80px;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  padding-left: 40px;\n}\n\n@media (min-width: 768px) {\n  .cat-bar {\n    height: 120px;\n  }\n}\n\n.cat-title {\n  margin-top: 7px;\n  margin-bottom: 0;\n  font-size: 20px;\n}\n\n@media (min-width: 768px) {\n  .cat-title {\n    font-size: 24px;\n  }\n}\n\n.cat-text {\n  margin-top: 4px;\n  margin-bottom: 0;\n  font-size: 13px;\n}\n\n@media (min-width: 768px) {\n  .cat-text {\n    font-size: 18px;\n  }\n}\n\n.rate-cont {\n  border-radius: 50px;\n  height: 42px;\n  width: 42px;\n  background-color: white;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: 30px;\n  margin-top: -32px;\n}\n\n.rating-text {\n  font-size: 13px;\n}\n\n.ml-1 {\n  margin-left: 3px;\n}\n\n.footer-text {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSw2QkFBQTtBQUVGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0RBQUE7QUFHRjs7QUFERTtFQVZGO0lBV0ksYUFBQTtFQUlGO0FBQ0Y7O0FBRkE7RUFDRSxtREFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUFLRjs7QUFIRTtFQVRGO0lBVUksYUFBQTtFQU1GO0FBQ0Y7O0FBSkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBT0Y7O0FBTEU7RUFMRjtJQU1JLGVBQUE7RUFRRjtBQUNGOztBQU5BO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQVNGOztBQVJFO0VBSkY7SUFLSSxlQUFBO0VBV0Y7QUFDRjs7QUFUQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBWUY7O0FBVkE7RUFDRSxlQUFBO0FBYUY7O0FBWEE7RUFDRSxnQkFBQTtBQWNGOztBQVpBO0VBQ0UsZUFBQTtBQWVGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmhyIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNTQzNjA7XG59XG4uY2F0ZWdvcnktaXRlbSB7XG4gIGhlaWdodDogMTkwcHg7XG4gIHdpZHRoOiAxMDglO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgYm94LXNoYWRvdzogMXB4IDhweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIGhlaWdodDogMzAwcHg7XG4gIH1cbn1cbi5jYXQtYmFyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvY2F0X2Jhci5wbmdcIik7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIGhlaWdodDogMTIwcHg7XG4gIH1cbn1cbi5jYXQtdGl0bGUge1xuICBtYXJnaW4tdG9wOiA3cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbn1cbi5jYXQtdGV4dCB7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn1cbi5yYXRlLWNvbnQge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIHdpZHRoOiA0MnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBtYXJnaW4tdG9wOiAtMzJweDtcbn1cbi5yYXRpbmctdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5tbC0xIHtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbn1cbi5mb290ZXItdGV4dCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "VjR+":
/*!******************************************!*\
  !*** ./src/app/user/home/home.module.ts ***!
  \******************************************/
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
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "afmG");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "b1zH");
/* harmony import */ var _suggest_category_modal_suggest_category_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./suggest-category-modal/suggest-category-modal.component */ "XNYi");








let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"], _suggest_category_modal_suggest_category_modal_component__WEBPACK_IMPORTED_MODULE_7__["SuggestCategoryModalComponent"]]
    })
], HomePageModule);



/***/ }),

/***/ "XNYi":
/*!**************************************************************************************!*\
  !*** ./src/app/user/home/suggest-category-modal/suggest-category-modal.component.ts ***!
  \**************************************************************************************/
/*! exports provided: SuggestCategoryModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestCategoryModalComponent", function() { return SuggestCategoryModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_suggest_category_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./suggest-category-modal.component.html */ "FF+a");
/* harmony import */ var _suggest_category_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./suggest-category-modal.component.scss */ "DRc1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_shared_success_modal_success_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/success-modal/success-modal.component */ "W/u7");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ "AytR");











let SuggestCategoryModalComponent = class SuggestCategoryModalComponent {
    constructor(formBuilder, modalController, loadingController, router, userService) {
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.router = router;
        this.userService = userService;
        this.error = false;
        this.errorMessage = '';
    }
    ngOnInit() {
        this.userSub = this.userService.loggedUser.subscribe(user => {
            this.grabbedUser = user;
        });
        //form
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
        });
    }
    sendSuggestion() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let loader = yield this.loadingController.create({
                message: 'Enviando información...'
            });
            loader.present();
            try {
                let response = yield axios__WEBPACK_IMPORTED_MODULE_7___default.a.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["API"]}/categories/suggestion`, {
                    user_id: this.grabbedUser.id,
                    message: this.form.value.description
                }, {
                    headers: {
                        Authorization: `Bearer ${this.grabbedUser.access_token}`
                    }
                });
                if (response.data && response.data.status !== 200) {
                    this.error = false;
                    this.errorMessage = 'Ocurrió un error al enviar la solicitud.';
                }
            }
            catch (error) {
                this.error = true;
            }
            loader.dismiss();
            if (!this.error) {
                yield this.modalController.dismiss();
                const successModal = yield this.modalController.create({
                    component: src_app_shared_success_modal_success_modal_component__WEBPACK_IMPORTED_MODULE_9__["SuccessModalComponent"],
                    componentProps: {
                        message: 'Se ha enviado la información correctamente',
                        redirect: false,
                    },
                    cssClass: 'modalSuccess',
                });
                successModal.present();
            }
        });
    }
    dismiss() {
        this.modalController.dismiss();
    }
};
SuggestCategoryModalComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] }
];
SuggestCategoryModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-suggest-category-modal',
        template: _raw_loader_suggest_category_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_suggest_category_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SuggestCategoryModalComponent);



/***/ }),

/***/ "afmG":
/*!**************************************************!*\
  !*** ./src/app/user/home/home-routing.module.ts ***!
  \**************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "b1zH");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
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

/***/ "b1zH":
/*!****************************************!*\
  !*** ./src/app/user/home/home.page.ts ***!
  \****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "31wL");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "LyDf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_model_user_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/model/user.model */ "UbF0");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/category.service */ "cPV5");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/solicitud.service */ "rLtr");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _suggest_category_modal_suggest_category_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./suggest-category-modal/suggest-category-modal.component */ "XNYi");














let HomePage = class HomePage {
    constructor(modalController, menuController, router, http, lc, us, cs, solServ) {
        this.modalController = modalController;
        this.menuController = menuController;
        this.router = router;
        this.http = http;
        this.lc = lc;
        this.us = us;
        this.cs = cs;
        this.solServ = solServ;
        this.urlServer = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["PATH"];
    }
    ngOnInit() {
        this.userSub = this.us.loggedUser.subscribe(user => {
            this.grabbedUser = user;
            this.menuController.enable(user.role === src_app_model_user_model__WEBPACK_IMPORTED_MODULE_7__["UserRoles"].PROFESSIONAL, src_app_model_user_model__WEBPACK_IMPORTED_MODULE_7__["UserRoles"].PROFESSIONAL);
            this.menuController.enable(user.role === src_app_model_user_model__WEBPACK_IMPORTED_MODULE_7__["UserRoles"].USER, src_app_model_user_model__WEBPACK_IMPORTED_MODULE_7__["UserRoles"].USER);
        });
    }
    ionViewWillEnter() {
        this.loadCategories();
    }
    loadCategories() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loader = yield this.lc.create({
                message: 'Cargando servicios disponibles...'
            });
            try {
                const response = yield axios__WEBPACK_IMPORTED_MODULE_12___default.a.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["API"]}/categories`, {
                    headers: {
                        authorization: `Bearer ${this.grabbedUser.access_token}`
                    }
                });
                loader.dismiss();
                this.categories = response.data.data;
            }
            catch (error) {
                loader.dismiss();
                console.log(error);
            }
        });
    }
    map(catId) {
        this.solServ.setCat(catId);
        this.router.navigate(['/user/map']);
    }
    login() {
        // do something cool 
    }
    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
    openSuggesModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let modal = yield this.modalController.create({
                component: _suggest_category_modal_suggest_category_modal_component__WEBPACK_IMPORTED_MODULE_13__["SuggestCategoryModalComponent"],
                cssClass: 'modalSuccess',
            });
            modal.present();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_9__["CategoryService"] },
    { type: src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_11__["SolicitudService"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ }),

/***/ "cPV5":
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let CategoryService = class CategoryService {
    constructor() { }
    get category() {
        return this._category;
    }
    setCategory(newCat) {
        this._category = newCat;
    }
};
CategoryService.ctorParameters = () => [];
CategoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CategoryService);



/***/ })

}]);
//# sourceMappingURL=user-home-home-module-es2015.js.map