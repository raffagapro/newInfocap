(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profesional-cat-perfiles-cat-perfiles-module"], {
    /***/
    "Cpr3":
    /*!*************************************************************************!*\
      !*** ./src/app/profesional/cat-perfiles/cat-perfiles-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: CatPerfilesPageRoutingModule */

    /***/
    function Cpr3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CatPerfilesPageRoutingModule", function () {
        return CatPerfilesPageRoutingModule;
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


      var _cat_perfiles_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cat-perfiles.page */
      "y0T/");

      var routes = [{
        path: '',
        component: _cat_perfiles_page__WEBPACK_IMPORTED_MODULE_3__["CatPerfilesPage"]
      }];

      var CatPerfilesPageRoutingModule = function CatPerfilesPageRoutingModule() {
        _classCallCheck(this, CatPerfilesPageRoutingModule);
      };

      CatPerfilesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CatPerfilesPageRoutingModule);
      /***/
    },

    /***/
    "OZRK":
    /*!*****************************************************************!*\
      !*** ./src/app/profesional/cat-perfiles/cat-perfiles.module.ts ***!
      \*****************************************************************/

    /*! exports provided: CatPerfilesPageModule */

    /***/
    function OZRK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CatPerfilesPageModule", function () {
        return CatPerfilesPageModule;
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


      var _cat_perfiles_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cat-perfiles-routing.module */
      "Cpr3");
      /* harmony import */


      var _cat_perfiles_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./cat-perfiles.page */
      "y0T/");

      var CatPerfilesPageModule = function CatPerfilesPageModule() {
        _classCallCheck(this, CatPerfilesPageModule);
      };

      CatPerfilesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cat_perfiles_routing_module__WEBPACK_IMPORTED_MODULE_5__["CatPerfilesPageRoutingModule"]],
        declarations: [_cat_perfiles_page__WEBPACK_IMPORTED_MODULE_6__["CatPerfilesPage"]]
      })], CatPerfilesPageModule);
      /***/
    },

    /***/
    "kJFj":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profesional/cat-perfiles/cat-perfiles.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function kJFj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/profesional/home\" text=\"\" icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"start\">\n      <ion-button class=\"homeBtn\" (click)=\"openMenu()\">\n        <ion-icon name=\"menu\" class=\"homeBtn\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title class=\"title-toolbar\">EDITAR PERFILES</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- cat selection -->\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"2\"></ion-col>\n      <ion-col size=\"8\">\n        <ion-input class=\"main-color cusSelect\" readonly [ngModel]=\"selectedProPerfil\" (click)=\"showPicker()\"\n          placeholder=\"Categoría\"></ion-input>\n      </ion-col>\n      <ion-col size=\"2\"></ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class=\"pd-8\">\n    <!-- profile Img -->\n    <ion-row class=\"imgCont\">\n      <ion-col>\n        <ion-avatar class=\"ion-margin-start profileImg\">\n          <ion-img\n            src=\"{{ !grabbedUser || grabbedUser.img_profile === imageBlank ? 'assets/images/avatar.png' : grabbedUser.img_profile }}\">\n          </ion-img>\n        </ion-avatar>\n      </ion-col>\n    </ion-row>\n    <!-- edit icon -->\n    <ion-row>\n      <ion-col>\n        <div class=\"rate-cont\" *ngIf=\"grabbedUser.id !== null\" (click)=\"onLoadImg(true)\">\n          <ion-icon name=\"pencil\" class=\"profileIcon\"></ion-icon>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <form [formGroup]=\"form\" (ngSubmit)=\"onUpdateCatProfile()\">\n      <!-- title -->\n      <ion-row class=\"minusMargin\">\n        \n        <ion-col size=\"12\">\n          <ion-text class=\"main-color regText\"><b>Descripción profesional</b></ion-text>\n        </ion-col>\n        \n      </ion-row>\n\n      <!-- text-area -->\n      <ion-row class=\"ion-margin-top\">\n        \n        <ion-col size=\"12\" class=\"border ion-text-center\">\n          <ion-item lines=\"none\">\n            <ion-textarea formControlName=\"descProf\" rows=\"3\" cols=\"20\"\n              placeholder=\"Agrega tu descripción. Máximo 140 caracteres con espacios.\">\n            </ion-textarea>\n          </ion-item>\n        </ion-col>\n        \n      </ion-row>\n\n      <!-- title -->\n      <ion-row class=\"ion-margin-top ion-text-center\">\n        \n        <ion-col size=\"12\">\n          <ion-text class=\"main-color regText\"><b>Horario laboral</b></ion-text>\n        </ion-col>\n        \n      </ion-row>\n\n      <!-- horas -->\n      <ion-row>\n        \n        <ion-col size=\"12\" class=\"pl-0 pr-0\">\n          <ion-item>\n            <ion-label position=\"floating\">\n              <ion-icon name=\"time\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Horario laboral</ion-text>\n            </ion-label>\n            <ion-input formControlName=\"workHours\"></ion-input>\n          </ion-item>\n        </ion-col>\n        \n      </ion-row>\n\n      <!-- dias -->\n      <ion-row>\n        <ion-col size=\"12\" class=\"pl-0 pr-0\">\n          <ion-item>\n            <ion-label position=\"floating\">\n              <ion-icon name=\"calendar-outline\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Días laborales</ion-text>\n            </ion-label>\n            <ion-input formControlName=\"workDays\"></ion-input>\n          </ion-item>\n        </ion-col>\n        \n      </ion-row>\n\n      <!-- title -->\n      <ion-row class=\"ion-margin-top\">\n        \n        <ion-col size=\"12\">\n          <ion-text class=\"main-color regText\"><b>Descripción del oficio</b></ion-text>\n        </ion-col>\n        \n      </ion-row>\n\n      <!-- text-area -->\n      <ion-row class=\"ion-margin-top\">\n        \n        <ion-col size=\"12\" class=\"border ion-text-center\">\n          <ion-item lines=\"none\">\n            <ion-textarea formControlName=\"descOffice\" rows=\"3\" cols=\"20\"\n              placeholder=\"Agrega una descripción de tu oficio. Máximo 140 caracteres con espacios.\">\n            </ion-textarea>\n          </ion-item>\n        </ion-col>\n        \n      </ion-row>\n\n      <!-- images -->\n      <ion-row class=\"ion-margin-top\">\n        \n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-row class=\"ion-align-items-center ion-justify-content-center ion-margin-top\">\n            <ion-col *ngIf=\"proCategoryImg && proCategoryImg.length > 0\" size=\"8\">\n              <ion-slides [options]=\"slideOptions\">\n\n                <!-- loaded slides  -->\n                <ion-slide *ngFor=\"let image of proCategoryImg; let i = index\">\n                  <!-- <ion-icon class=\"delete-icon\" name=\"close-circle\" color=\"danger\"></ion-icon> -->\n                  <ion-img (click)=\"openImage(image.image)\" src=\"{{ image.image }}\" class=\"imgSlide\">\n                  </ion-img>\n                  <ion-button (click)=\"removeImage(i)\" size=\"small\" shape=\"round\" color=\"danger\" class=\"deleteBtn\">\n                    <ion-icon name=\"close-circle-outline\"></ion-icon>\n                  </ion-button>\n                </ion-slide>\n\n              </ion-slides>\n            </ion-col>\n            <ion-col size=\"4\" class=\"ion-justify-content-center\" style=\"text-align: center;\">\n              <ion-button (click)=\"onLoadImg(false)\" shape=\"round\">\n                <ion-icon name=\"add\" slot=\"end\" color=\"light\" class=\"rating-text\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n        \n      </ion-row>\n\n      <!-- hidden file input -->\n      <div style=\"display: none;\">\n        <input type=\"file\" #hiddenImgInput *ngIf=\"useInputPicker\" (change)=\"onLoadImgFromInput($event)\">\n      </div>\n\n\n      <!-- save BTN -->\n      <ion-row class=\"ion-margin-bottom\">\n        <ion-col offset=\"1\">\n          <ion-button [disabled]=\"!form.valid\" size=\"12\" expand=\"block\" class=\"ion-text-uppercase\" type=\"submit\">\n            GUARDAR CAMBIOS\n          </ion-button>\n        </ion-col>\n        \n      </ion-row>\n    </form>\n\n  </ion-grid>\n</ion-content>";
      /***/
    },

    /***/
    "lWgC":
    /*!*****************************************************************!*\
      !*** ./src/app/profesional/cat-perfiles/cat-perfiles.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function lWgC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".profileImg {\n  height: 120px;\n  width: 120px;\n  margin-left: auto;\n  margin-right: auto;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 50%;\n}\n\n.imgCont {\n  margin-top: 15px;\n}\n\n.profileIcon {\n  font-size: 16px;\n  color: white;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.rate-cont {\n  border-radius: 50px;\n  height: 30px;\n  width: 30px;\n  background-color: #53657e;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: -22px;\n}\n\n.catText {\n  font-size: 10px;\n}\n\n.border {\n  border: 1px solid #009ACE;\n}\n\n.regText {\n  font-size: 18px;\n}\n\n.imgSingle {\n  height: 150px;\n}\n\n.locate-cont {\n  border-radius: 50px;\n  height: 50px;\n  width: 50px;\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #009ACE;\n}\n\n.rating-text {\n  font-size: 26px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.imgSlide {\n  width: 100%;\n}\n\n.select-categories-component {\n  --padding-top: 0;\n  --padding-bottom: 0;\n  margin-top: -16px;\n  height: 2rem;\n  width: 155px;\n  background-color: white;\n  color: #009ACE;\n  border-color: white;\n  margin-left: -4px;\n}\n\n.select-categories {\n  border: 1px solid #009ACE;\n  border-radius: 32px;\n  height: 2rem;\n}\n\n.delete-icon {\n  font-size: 32px;\n  background-color: white;\n  position: absolute;\n  border-radius: 50%;\n  right: 0px;\n  top: 0;\n}\n\n.deleteBtn {\n  position: absolute;\n  top: 0;\n  right: 0;\n  border-radius: 100%;\n  color: white;\n  width: 32px;\n  padding: 0;\n  margin: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n}\n\n.deleteBtn ion-icon {\n  position: absolute;\n}\n\n.cusSelect {\n  border: 0px;\n  outline: 0px;\n  font-size: 14px;\n  height: 32px;\n  background-color: white;\n  width: 100%;\n  border: solid 2px #009ace;\n  border-radius: 10px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  /* Firefox */\n  -webkit-appearance: none;\n  /* Safari and Chrome */\n  appearance: none;\n  background-repeat: no-repeat;\n  background-position-x: center;\n  background-position-y: center;\n  text-align: center;\n  --padding-star: 0 ;\n}\n\nion-input {\n  --padding-start: 0px;\n}\n\n.pl-0 {\n  padding-left: 0;\n}\n\n.pr-0 {\n  padding-right: 0;\n}\n\n.pd-8 {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NhdC1wZXJmaWxlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUVBO0VBRUksZ0JBQUE7QUFBSjs7QUFFQTtFQUVJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUVBO0VBRUksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFFQTtFQUVJLGVBQUE7QUFBSjs7QUFFQTtFQUVJLHlCQUFBO0FBQUo7O0FBRUE7RUFFSSxlQUFBO0FBQUo7O0FBRUE7RUFFSSxhQUFBO0FBQUo7O0FBRUE7RUFFSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBQUo7O0FBRUE7RUFFSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtBQUFKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFBO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0FBR0o7O0FBREE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUlKOztBQUhJO0VBQ0Usa0JBQUE7QUFLTjs7QUFERTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUF1QixZQUFBO0VBQ3ZCLHdCQUFBO0VBQTBCLHNCQUFBO0VBQzFCLGdCQUFBO0VBRUEsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUtKOztBQUZFO0VBQ0Usb0JBQUE7QUFLSjs7QUFGQTtFQUNJLGVBQUE7QUFLSjs7QUFGQTtFQUNJLGdCQUFBO0FBS0o7O0FBRkE7RUFDQyxrQkFBQTtFQUNBLG1CQUFBO0FBS0QiLCJmaWxlIjoiY2F0LXBlcmZpbGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlSW1nXG57XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmltZ0NvbnRcbntcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLnByb2ZpbGVJY29uXG57XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4ucmF0ZS1jb250XG57XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUzNjU3ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAtMjJweDtcbn1cbi5jYXRUZXh0XG57XG4gICAgZm9udC1zaXplOiAxMHB4O1xufVxuLmJvcmRlclxue1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDlBQ0U7XG59XG4ucmVnVGV4dFxue1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cbi5pbWdTaW5nbGVcbntcbiAgICBoZWlnaHQ6IDE1MHB4O1xufVxuLmxvY2F0ZS1jb250XG57XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDlBQ0U7XG59XG4ucmF0aW5nLXRleHRcbntcbiAgICBmb250LXNpemU6IDI2cHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uaW1nU2xpZGV7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uc2VsZWN0LWNhdGVnb3JpZXMtY29tcG9uZW50IHtcbiAgICAtLXBhZGRpbmctdG9wOiAwO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDA7XG4gICAgbWFyZ2luLXRvcDogLTE2cHg7XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIHdpZHRoOiAxNTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogIzAwOUFDRTtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAtNHB4O1xufVxuLnNlbGVjdC1jYXRlZ29yaWVzIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA5QUNFO1xuICAgIGJvcmRlci1yYWRpdXM6IDMycHg7XG4gICAgaGVpZ2h0OiAycmVtO1xufVxuLmRlbGV0ZS1pY29uIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICByaWdodDogMHB4O1xuICAgIHRvcDogMDtcbn1cbi5kZWxldGVCdG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgaW9uLWljb24ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cbiAgfVxuXG4gIC5jdXNTZWxlY3Qge1xuICAgIGJvcmRlcjogMHB4O1xuICAgIG91dGxpbmU6IDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogc29saWQgMnB4ICMwMDlhY2U7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lOyAvKiBGaXJlZm94ICovXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyBmaWxsPScjMDA5YWNlJyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMjQgMjQnIHdpZHRoPScyNCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBkPSdNNyAxMGw1IDUgNS01eicvPjxwYXRoIGQ9J00wIDBoMjR2MjRIMHonIGZpbGw9J25vbmUnLz48L3N2Zz5cIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLS1wYWRkaW5nLXN0YXI6IDBcbiAgfVxuXG4gIGlvbi1pbnB1dCB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59XG5cbi5wbC0wIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG59IFxuXG4ucHItMCB7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbn1cblxuLnBkLTgge1xuIHBhZGRpbmctbGVmdDogMTJweDtcbiBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xufSJdfQ== */";
      /***/
    },

    /***/
    "pHSn":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profesional/cat-perfiles/empty-modal/empty-modal.component.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function pHSn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-grid  style=\"height: 100%;\">\n    <!-- SERVICIO Rechazado  -->\n    <div style=\"height: 10px;\"></div>\n    <ion-row class=\"ion-margin-top\">\n      <ion-col size=\"10\"  offset=\"1\" class=\"ion-text-center ion-margin-top\">\n        <ion-text class=\"status-text\" color=\"danger\"><b>SIN CATEGORIAS ASIGNADAS</b></ion-text><br>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid  style=\"height: 100%;\">\n    <!-- subtitle  -->\n    <ion-row>\n      <ion-col size=\"10\"  offset=\"1\" class=\"ion-text-center ion-margin-top\">\n        <ion-text class=\"subtitle\" color=\"danger\">Contacte al administrado para que le asigne perfiles de categorias</ion-text><br>\n      </ion-col>\n    </ion-row>\n\n    <!-- finalizar trabajo BTN -->\n    <ion-row class=\"ion-margin-top ion-margin-bottom\">\n      <ion-col size=\"1\"></ion-col>\n      <ion-col>\n        <ion-button size=\"5\" expand=\"block\" class=\"ion-text-uppercase\" color=\"danger\" (click)=\"dismissModal()\">\n          CERRAR SOLICITUD\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "pvjW":
    /*!*******************************************************************************!*\
      !*** ./src/app/profesional/cat-perfiles/empty-modal/empty-modal.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: EmptyModalComponent */

    /***/
    function pvjW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmptyModalComponent", function () {
        return EmptyModalComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_empty_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./empty-modal.component.html */
      "pHSn");
      /* harmony import */


      var _empty_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./empty-modal.component.scss */
      "twrN");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var EmptyModalComponent = /*#__PURE__*/function () {
        function EmptyModalComponent(modalController, router) {
          _classCallCheck(this, EmptyModalComponent);

          this.modalController = modalController;
          this.router = router;
        }

        _createClass(EmptyModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "dismissModal",
          value: function dismissModal() {
            this.modalController.dismiss();
            this.router.navigate(['/profesional/home/home-tabs/agendados/']);
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalController.dismiss();
            this.router.navigate(['/profesional/home/home-tabs/agendados/']);
          }
        }]);

        return EmptyModalComponent;
      }();

      EmptyModalComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      EmptyModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-empty-modal',
        template: _raw_loader_empty_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_empty_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EmptyModalComponent);
      /***/
    },

    /***/
    "twrN":
    /*!*********************************************************************************!*\
      !*** ./src/app/profesional/cat-perfiles/empty-modal/empty-modal.component.scss ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function twrN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".status-cont {\n  border-radius: 50px;\n  height: 45px;\n  width: 45px;\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 5px;\n  background-color: #009ACE;\n}\n\n.status-text-icon {\n  font-size: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  display: inline-flex;\n}\n\n.status-text {\n  font-size: 22px;\n}\n\n.mini-text {\n  font-size: 13px;\n}\n\nhr {\n  border-top: 1px solid #009ACE;\n}\n\n.no-border {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n\n.profileImg {\n  margin-left: 10px;\n  height: 75px;\n  width: 75px;\n}\n\n.ticket {\n  color: red;\n  font-size: 12px;\n}\n\n.titleSelect {\n  font-size: 19px;\n  font-weight: bold;\n}\n\n.mini-text {\n  font-size: 14px;\n}\n\n.subtitle {\n  font-size: 20px;\n}\n\n.border {\n  border: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2VtcHR5LW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFBSjs7QUFFQTtFQUVJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFBSjs7QUFFQTtFQUVJLGVBQUE7QUFBSjs7QUFFQTtFQUVJLGVBQUE7QUFBSjs7QUFFQTtFQUVJLDZCQUFBO0FBQUo7O0FBRUE7RUFFSSxnQkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBRUE7RUFFSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQUo7O0FBRUE7RUFFSSxVQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUVBO0VBRUksZUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBRUE7RUFFSSxlQUFBO0FBQUo7O0FBRUE7RUFFSSxlQUFBO0FBQUo7O0FBRUE7RUFFSSxxQkFBQTtBQUFKIiwiZmlsZSI6ImVtcHR5LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXR1cy1jb250XG57XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgd2lkdGg6IDQ1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5QUNFO1xufVxuLnN0YXR1cy10ZXh0LWljb25cbntcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuLnN0YXR1cy10ZXh0XG57XG4gICAgZm9udC1zaXplOiAyMnB4O1xufVxuLm1pbmktdGV4dFxue1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cbmhyXG57XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDlBQ0U7XG59XG4ubm8tYm9yZGVyXG57XG4gICAgcGFkZGluZy10b3A6IDJweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xufVxuLnByb2ZpbGVJbWdcbntcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgd2lkdGg6IDc1cHg7XG59XG4udGlja2V0XG57XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4udGl0bGVTZWxlY3RcbntcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWluaS10ZXh0XG57XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLnN1YnRpdGxlXG57XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuLmJvcmRlclxue1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn0iXX0= */";
      /***/
    },

    /***/
    "y0T/":
    /*!***************************************************************!*\
      !*** ./src/app/profesional/cat-perfiles/cat-perfiles.page.ts ***!
      \***************************************************************/

    /*! exports provided: CatPerfilesPage */

    /***/
    function y0T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CatPerfilesPage", function () {
        return CatPerfilesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cat_perfiles_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cat-perfiles.page.html */
      "kJFj");
      /* harmony import */


      var _cat_perfiles_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cat-perfiles.page.scss */
      "lWgC");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _empty_modal_empty_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./empty-modal/empty-modal.component */
      "pvjW");
      /* harmony import */


      var _success_modal_success_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./success-modal/success-modal.component */
      "VbkS");
      /* harmony import */


      var src_shared_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/shared/constants */
      "p1Kg");
      /* harmony import */


      var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! axios */
      "vDqi");
      /* harmony import */


      var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
      /* harmony import */


      var src_app_shared_image_modal_image_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/image-modal/image-modal.component */
      "BPum");

      function base64toBlob(base64Data, contentType) {
        contentType = contentType || '';
        var sliceSize = 1024;
        var byteCharacters = atob(base64Data);
        var bytesLength = byteCharacters.length;
        var slicesCount = Math.ceil(bytesLength / sliceSize);
        var byteArrays = new Array(slicesCount);

        for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
          var begin = sliceIndex * sliceSize;
          var end = Math.min(begin + sliceSize, bytesLength);
          var bytes = new Array(end - begin);

          for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
            bytes[i] = byteCharacters[offset].charCodeAt(0);
          }

          byteArrays[sliceIndex] = new Uint8Array(bytes);
        }

        return new Blob(byteArrays, {
          type: contentType
        });
      }

      var CatPerfilesPage = /*#__PURE__*/function () {
        function CatPerfilesPage(lc, us, modalController, platform, menuController, pickerController) {
          _classCallCheck(this, CatPerfilesPage);

          this.lc = lc;
          this.us = us;
          this.modalController = modalController;
          this.platform = platform;
          this.menuController = menuController;
          this.pickerController = pickerController;
          this.imageBlank = src_shared_constants__WEBPACK_IMPORTED_MODULE_11__["IMAGE_URL_BLANK"];
          this.categories = [];
          this.profCategories = [];
          this.grabbedUser = null;
          this.comunas = [];
          this.proCategoryImgSave = [];
          this.comunasBU = [];
          this.transports = [];
          this.selectedComunas = [];
          this.selectedDays = [];
          this.imgPick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.useInputPicker = false;
          this.profilePhoto = true;
          this.proCategoryProfile = {
            communes: null,
            category_id: null,
            transports: null
          };
          this.slideOptions = {
            initialSlide: 0,
            slidesPerView: 2,
            autoplay: true
          };
          this.hideList = true;
        }

        _createClass(CatPerfilesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.userSub = this.us.loggedUser.subscribe(function (user) {
              _this.grabbedUser = user;
              _this.headers = 'Bearer ' + _this.grabbedUser.access_token;
            }); //api headers
            //categories list

            axios__WEBPACK_IMPORTED_MODULE_12___default.a.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["API"] + '/supplier/categories', {
              headers: {
                Authorization: this.headers
              }
            }).then(function (resData) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        this.categories = resData.data.data;

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            }); //form

            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
              descProf: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
              }),
              workHours: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
              }),
              workDays: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
              }),
              descOffice: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
              }),
              image: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null)
            }); //platfrom checker

            if (this.platform.is('mobile') && !this.platform.is('hybrid') || this.platform.is('desktop')) {
              this.useInputPicker = true;
            }
          }
        }, {
          key: "showPicker",
          value: function showPicker() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              var options, picker;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      options = {
                        mode: 'ios',
                        buttons: [{
                          text: 'Cancelar',
                          role: 'cancel'
                        }, {
                          text: 'Listo',
                          handler: function handler(value) {
                            _this2.selectedProPerfil = value.category.text;
                            _this2.selectedProPerfilID = value.category.value;

                            _this2.onCatProfileChange(value.category.value);
                          }
                        }],
                        columns: [{
                          name: 'category',
                          options: this.getColumnOptions()
                        }]
                      };
                      _context2.next = 3;
                      return this.pickerController.create(options);

                    case 3:
                      picker = _context2.sent;
                      picker.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getUrl",
          value: function getUrl() {
            if (!this.grabbedUser.img_profile || this.grabbedUser.img_profile === '') {
              return "url('assets/images/avatar.png')";
            } else {
              return "url(".concat(this.grabbedUser.img_profile, ")");
            }
          }
        }, {
          key: "getColumnOptions",
          value: function getColumnOptions() {
            var options = [];
            console.log();
            this.profCategories.forEach(function (x) {
              options.push({
                text: x.categoryName,
                value: x.id
              });
            });
            return options;
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this3 = this;

            //prof categories list
            axios__WEBPACK_IMPORTED_MODULE_12___default.a.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["API"] + '/supplier/professions', {
              headers: {
                Authorization: this.headers
              }
            }).then(function (resData) {
              if (resData.data.code === 200) {
                if (resData.data.data.length === 0) {
                  _this3.modalController.create({
                    component: _empty_modal_empty_modal_component__WEBPACK_IMPORTED_MODULE_9__["EmptyModalComponent"],
                    cssClass: 'modalServRechazado'
                  }).then(function (modalEl) {
                    modalEl.present();
                  });
                } else {
                  _this3.profCategories = resData.data.data;
                  _this3.proCategoryProfile = resData.data.data[0];
                  _this3.proCategoryImg = resData.data.data[0].images;
                  _this3.selectedProPerfil = _this3.profCategories[0].categoryName;
                  _this3.selectedCatId = _this3.profCategories[0].category_id;
                  _this3.selectedProPerfilID = _this3.profCategories[0].id;

                  _this3.onCatProfileChange(_this3.selectedProPerfilID);

                  _this3.updateForm(_this3.profCategories[0]);
                }
              }
            })["catch"](function (err) {
              console.log(err);
            });
            this.menuController.enable(true, 'profesional');
          }
        }, {
          key: "onCatProfileChange",
          value: function onCatProfileChange(profileID) {
            var _this4 = this;

            this.lc.create({
              message: 'Cargando informacion...'
            }).then(function (loadingEl) {
              loadingEl.present();
              axios__WEBPACK_IMPORTED_MODULE_12___default.a.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["API"] + "/supplier/profession/".concat(profileID), {
                headers: {
                  Authorization: _this4.headers
                }
              }).then(function (resData) {
                loadingEl.dismiss();

                _this4.updateForm(resData.data.data);

                _this4.proCategoryProfile = resData.data.data;
                _this4.proCategoryImg = resData.data.data.images;
              })["catch"](function (err) {
                loadingEl.dismiss();
              });
            });
          }
        }, {
          key: "openMenu",
          value: function openMenu() {
            this.menuController.open();
          }
        }, {
          key: "updateForm",
          value: function updateForm(info) {
            this.selectedCatId = info.category_id;
            this.selectedTransport = info.transport_id;
            this.selectedComunas = info.communes;
            var descPro;

            if (info.descProf === 'empty' || info.descProf === 'ND') {
              descPro = null;
            } else {
              descPro = info.descProf;
            }

            var descOff;

            if (info.description === 'empty' || info.descProf === 'ND') {
              descOff = null;
            } else {
              descOff = info.description;
            }

            var daysWork;

            if (info.work_days === '0') {
              daysWork = null;
            } else {
              daysWork = info.work_days;
            }

            var hoursWork;

            if (info.hours === '0') {
              hoursWork = null;
            } else {
              hoursWork = info.hours;
            } //pasing values to from


            this.form.patchValue({
              descProf: descPro,
              transport: info.transport_id,
              workHours: hoursWork,
              workDays: daysWork,
              comuna: info.commune_id,
              descOffice: descOff
            });
          }
        }, {
          key: "onTransportChange",
          value: function onTransportChange(e) {
            this.selectedTransport = +e.detail.value;
          }
        }, {
          key: "onSearchChange",
          value: function onSearchChange(e) {
            if (e.srcElement.value === '') {
              return;
            }

            this.comunas = this.comunasBU;
            var searchTerm = e.srcElement.value;

            if (!searchTerm) {
              return;
            }

            this.comunas = this.comunas.filter(function (currentComuna) {
              if (currentComuna.name && searchTerm) {
                return currentComuna.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
              }
            });
          }
        }, {
          key: "selectComuna",
          value: function selectComuna(comunaID) {
            var _this5 = this;

            var go = true;
            this.selectedComunas.forEach(function (c) {
              if (c.id === +comunaID) {
                go = false;
                return;
              }
            });

            if (go) {
              this.comunasBU.forEach(function (c) {
                if (c.id === +comunaID) {
                  _this5.selectedComunas.push(c);
                }
              });
            }

            this.searchValue = "";
            this.comunas = [];
          }
        }, {
          key: "onRemoveComuna",
          value: function onRemoveComuna(comunaID) {
            for (var i = 0; i < this.selectedComunas.length; i++) {
              if (this.selectedComunas[i].id === +comunaID) {
                this.selectedComunas.splice(i, 1);
              }
            }
          }
        }, {
          key: "onDaysChange",
          value: function onDaysChange(e) {
            this.selectedDays = e.detail.value;
          }
        }, {
          key: "onUpdateCatProfile",
          value: function onUpdateCatProfile() {
            var _this6 = this;

            var aComunas = [];
            var packedComunas;
            this.proCategoryProfile.communes.forEach(function (c) {
              aComunas.push(c.id);
            });
            packedComunas = aComunas.join(", ");
            var formData = new FormData();
            this.proCategoryImgSave.forEach(function (image) {
              formData.append('images[]', image);
            });
            formData.append('category_id', this.selectedCatId);
            formData.append('communes', packedComunas);
            formData.append('transport_id', this.selectedTransport);
            formData.append('descProf', this.form.value.descProf);
            formData.append('description', this.form.value.descOffice);
            formData.append('hours', this.form.value.workHours);
            formData.append('work_days', this.form.value.workDays);
            this.lc.create({
              message: 'Actualizando la informacion...'
            }).then(function (loadingEl) {
              loadingEl.present();
              axios__WEBPACK_IMPORTED_MODULE_12___default.a.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["API"] + "/supplier/profession/".concat(_this6.selectedProPerfilID), formData, {
                headers: {
                  Authorization: _this6.headers
                }
              }).then(function (resData) {
                loadingEl.dismiss();
                console.log('Enter');

                _this6.modalController.create({
                  component: _success_modal_success_modal_component__WEBPACK_IMPORTED_MODULE_10__["SuccessModalComponent"],
                  cssClass: 'modalSuccess'
                }).then(function (modalEl) {
                  modalEl.present();
                });
              })["catch"](function (err) {
                loadingEl.dismiss();
              });
            });
          }
        }, {
          key: "onLoadImg",
          value: function onLoadImg(profile) {
            var _this7 = this;

            this.profilePhoto = profile;

            if (!_capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Capacitor"].isPluginAvailable('Camera') || this.useInputPicker) {
              this.hiddenImgInputRef.nativeElement.click();
              return;
            }

            _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"].Camera.getPhoto({
              quality: 100,
              source: _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["CameraSource"].Prompt,
              correctOrientation: true,
              width: 500,
              resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["CameraResultType"].DataUrl,
              promptLabelPhoto: 'Fotos',
              promptLabelPicture: 'Cámara',
              promptLabelCancel: 'Cancelar'
            }).then(function (image) {
              _this7.saveImgToApi(image.dataUrl);
            })["catch"](function (e) {
              console.log(e);
            });
          }
        }, {
          key: "openImage",
          value: function openImage(image) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var successModal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.modalController.create({
                        component: src_app_shared_image_modal_image_modal_component__WEBPACK_IMPORTED_MODULE_13__["ImageModalComponent"],
                        componentProps: {
                          image: image
                        },
                        cssClass: 'modalImage'
                      });

                    case 2:
                      successModal = _context3.sent;
                      successModal.present();

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "removeImage",
          value: function removeImage(imageIndex) {
            // this.loadedImages = this.loadedImages.filter((image: any, index: number) => index !== imageIndex)
            this.proCategoryImg = this.proCategoryImg.filter(function (image, index) {
              return index !== imageIndex;
            });
          }
        }, {
          key: "onLoadImgFromInput",
          value: function onLoadImgFromInput(e) {
            var loadedFile = e.target.files[0];
            this.saveImgToApi(loadedFile); //save img to api
          }
        }, {
          key: "saveImgToApi",
          value: function saveImgToApi(imageData) {
            var imgFile;

            if (typeof imageData === 'string') {
              try {
                imgFile = base64toBlob(imageData.replace('data:image/jpeg;base64,', ''), 'image/jpeg');
              } catch (e) {
                console.log(e);
                return;
              }
            } else {
              imgFile = imageData;
            }

            this.proCategoryImg.unshift({
              image: URL.createObjectURL(imgFile)
            });
            this.proCategoryImgSave.push(imgFile);
            this.form.patchValue({
              image: imgFile
            }); // this.lc.create({
            //   message: 'Guardando imagen...'
            // }).then(loadingEl => {
            //   loadingEl.present();
            //   //check to see if we are loading a profile img
            //   if (this.profilePhoto) {
            //     const formData = new FormData();
            //     formData.append('image', imgFile);
            //     axios.post(API + '/account/image', formData, { headers: { Authorization: this.headers } }).then(resData => {
            //       loadingEl.dismiss();
            //       this.modalController.create({
            //         component: SuccessModalComponent,
            //         cssClass: 'modalSuccess',
            //       }).then(modalEl => {
            //         modalEl.present();
            //       });
            //     }).catch(err => {
            //       console.log(err)
            //       loadingEl.dismiss();
            //     })
            //   } else {
            //     const formData = new FormData();
            //     console.log(this.selectedCatId)
            //     formData.append('images[]', imgFile);
            //     formData.append('category_id', this.proCategoryProfile.category_id);
            //     formData.append('transport_id', this.proCategoryProfile.transports);
            //     axios.post(API + `/supplier/profession/${this.selectedProPerfil}`, formData, { headers: { Authorization: this.headers } }).then(resData => {
            //       loadingEl.dismiss();
            //     }).catch(err => {
            //       loadingEl.dismiss();
            //     })
            //   }
            // });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.userSub.unsubscribe();
          }
        }]);

        return CatPerfilesPage;
      }();

      CatPerfilesPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PickerController"]
        }];
      };

      CatPerfilesPage.propDecorators = {
        imgPick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        hiddenImgInputRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['hiddenImgInput']
        }],
        categorySelect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['categoryList']
        }]
      };
      CatPerfilesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cat-perfiles',
        template: _raw_loader_cat_perfiles_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cat_perfiles_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CatPerfilesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=profesional-cat-perfiles-cat-perfiles-module-es5.js.map