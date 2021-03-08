(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profesional-cat-perfiles-cat-perfiles-module"],{

/***/ "Cpr3":
/*!*************************************************************************!*\
  !*** ./src/app/profesional/cat-perfiles/cat-perfiles-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: CatPerfilesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatPerfilesPageRoutingModule", function() { return CatPerfilesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cat_perfiles_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cat-perfiles.page */ "y0T/");




const routes = [
    {
        path: '',
        component: _cat_perfiles_page__WEBPACK_IMPORTED_MODULE_3__["CatPerfilesPage"]
    }
];
let CatPerfilesPageRoutingModule = class CatPerfilesPageRoutingModule {
};
CatPerfilesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CatPerfilesPageRoutingModule);



/***/ }),

/***/ "OZRK":
/*!*****************************************************************!*\
  !*** ./src/app/profesional/cat-perfiles/cat-perfiles.module.ts ***!
  \*****************************************************************/
/*! exports provided: CatPerfilesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatPerfilesPageModule", function() { return CatPerfilesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cat_perfiles_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cat-perfiles-routing.module */ "Cpr3");
/* harmony import */ var _cat_perfiles_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cat-perfiles.page */ "y0T/");







let CatPerfilesPageModule = class CatPerfilesPageModule {
};
CatPerfilesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cat_perfiles_routing_module__WEBPACK_IMPORTED_MODULE_5__["CatPerfilesPageRoutingModule"]
        ],
        declarations: [_cat_perfiles_page__WEBPACK_IMPORTED_MODULE_6__["CatPerfilesPage"]]
    })
], CatPerfilesPageModule);



/***/ }),

/***/ "kJFj":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profesional/cat-perfiles/cat-perfiles.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/profesional/home\" text=\"\" icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title-toolbar\">EDITAR PERFILES</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- cat selection -->\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"9\" offset=\"1\">\n        <ion-item>\n          <ion-select \n            interface=\"action-sheet\" \n            cancelText=\"Cancelar\" \n            (ionChange)=\"onCatProfileChange($event.detail.value)\"\n            value=\"{{ selectedProPerfil }}\"\n            >\n            <ion-select-option\n              *ngFor=\"let cat of profCategories\" \n              value=\"{{ cat.id }}\"\n              class=\"main-color ion-text-center catText\"\n              >{{ cat.categoryName }}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <!-- profile Img -->\n    <ion-row class=\"imgCont\">\n      <ion-col>\n        <ion-avatar class=\"ion-margin-start profileImg\">\n          <ion-img src=\"{{ !grabbedUser.img_profile ? 'assets/images/avatar.png' : 'http://workintest.herokuapp.com'+grabbedUser.img_profile }}\"></ion-img>\n          <!-- <ion-img *ngIf=\"grabbedUser !== undefined\" src=\"http://workintest.herokuapp.com/{{ user.img_profile }}\"></ion-img> -->\n        </ion-avatar>\n      </ion-col>\n    </ion-row>\n    <!-- edit icon -->\n    <ion-row>\n      <ion-col>\n        <div class=\"rate-cont\" *ngIf=\"grabbedUser.id !== null\" (click)=\"onLoadImg(true)\">\n          <ion-icon name=\"pencil\" class=\"profileIcon\"></ion-icon>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <form [formGroup]=\"form\" (ngSubmit)=\"onUpdateCatProfile()\">\n      <!-- title -->\n      <ion-row class=\"minusMargin\">\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"10\">\n          <ion-text class=\"main-color regText\"><b>Descripción profesional</b></ion-text>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n\n      <!-- text-area -->\n      <ion-row class=\"ion-margin-top\">\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"10\" class=\"border ion-text-center\">\n          <ion-item lines=\"none\">\n            <ion-textarea \n              formControlName=\"descProf\"\n              rows=\"3\" cols=\"20\"\n              placeholder=\"Agrega tu descripción. Máximo 140 caracteres con espacios.\">\n            </ion-textarea>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n\n      <!-- vehiculo -->\n      <ion-row>\n        <ion-col size=\"11\">\n          <ion-item>\n            <ion-label position=\"floating\" class=\"main-color\">\n              <ion-icon name=\"car-sport\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Vehículo</ion-text>\n            </ion-label>\n              <ion-select\n                interface=\"popover\"\n                cancelText=\"Cancelar\"\n                (ionChange)=\"onTransportChange($event)\"\n                value=\"{{ selectedTransport }}\">\n              <ion-select-option\n                *ngFor=\"let transport of transports\" \n                value=\"{{ transport.id }}\"\n                >{{ transport.name }}\n              </ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <!-- title -->\n      <ion-row class=\"ion-margin-top ion-text-center\">\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"10\">\n          <ion-text class=\"main-color regText\"><b>Horario laboral</b></ion-text>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n\n      <!-- horas -->\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-item>\n            <ion-label class=\"main-color\" position=\"floating\">\n              <ion-icon name=\"time\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Inicio</ion-text>\n            </ion-label>\n            <ion-datetime display-format=\"h:mm A\" picker-format=\"h:mm A\" formControlName=\"sHour\"></ion-datetime>\n          </ion-item>\n        </ion-col>\n\n        <ion-col size=\"5\">\n          <ion-item>\n            <ion-label class=\"main-color\" position=\"floating\">\n              <ion-icon name=\"time\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Final</ion-text>\n            </ion-label>\n            <ion-datetime display-format=\"h:mm A\" picker-format=\"h:mm A\" formControlName=\"eHour\"></ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <!-- dias -->\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-item>\n            <ion-label class=\"main-color\" position=\"floating\">\n              <ion-icon name=\"calendar\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Días laborales</ion-text>\n            </ion-label>\n            <ion-select\n              interface=\"alert\"\n              multiple=\"true\"\n              cancelText=\"Cancelar\"\n              (ionChange)=\"onDaysChange($event)\"\n              [value]=\"selectedDays\"\n              formControlName=\"workDays\"\n              >\n              <ion-select-option value=\"l\" class=\"main-color ion-text-center\">Lunes</ion-select-option>\n              <ion-select-option value=\"m\" class=\"main-color ion-text-center\">Martes</ion-select-option>\n              <ion-select-option value=\"mi\" class=\"main-color ion-text-center\">Miercoles</ion-select-option>\n              <ion-select-option value=\"j\" class=\"main-color ion-text-center\">Jueves</ion-select-option>\n              <ion-select-option value=\"v\" class=\"main-color ion-text-center\">Viernes</ion-select-option>\n              <ion-select-option value=\"s\" class=\"main-color ion-text-center\">Sabado</ion-select-option>\n              <ion-select-option value=\"d\" class=\"main-color ion-text-center\">Domingo</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <!-- comunas -->\n      <ion-row>\n        <ion-col size=\"11\">\n\n          <ion-searchbar\n            placeholder=\"Sector\"\n            (ionChange)=\"onSearchChange($event)\"\n            [(ngModel)]=\"searchValue\"\n            [ngModelOptions]=\"{standalone: true}\"\n            >\n          </ion-searchbar>\n          <ion-list [hidden]=\"comunas.length === 0\">\n            <ion-item *ngFor=\"let comuna of comunas\" class=\"ion-text-capitalize\" tappable (click)=\"selectComuna(comuna.id)\">\n              {{ comuna.name }}\n            </ion-item>\n          </ion-list>\n        </ion-col>\n        <!-- badges row  -->\n        <ion-col size=\"10\" offset=\"1\">\n          <div>\n            <ion-badge color=\"primary\" *ngFor=\"let sComuna of selectedComunas\" class=\"ion-text-capitalize\">\n              {{ sComuna.name }}\n              <ion-icon name=\"close-outline\" color=\"danger\" tappable (click)=\"onRemoveComuna(sComuna.id)\"></ion-icon>\n            </ion-badge>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <!-- title -->\n      <ion-row class=\"ion-margin-top\">\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"10\">\n          <ion-text class=\"main-color regText\"><b>Descripción del oficio</b></ion-text>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n\n      <!-- text-area -->\n      <ion-row class=\"ion-margin-top\">\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"10\" class=\"border ion-text-center\">\n          <ion-item lines=\"none\">\n            <ion-textarea \n              formControlName=\"descOffice\"\n              rows=\"3\" cols=\"20\" \n              placeholder=\"Agrega una descripción de tu oficio. Máximo 140 caracteres con espacios.\">\n            </ion-textarea>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n\n      <!-- images -->\n      <ion-row class=\"ion-align-items-center ion-margin-top\">\n        <ion-col size=\"7\" offset=\"1\">\n          <ion-slides>\n            <!-- default slide -->\n            <ion-slide *ngIf=\"loadedImgList.length === 0\">\n              <ion-img \n                src=\"/assets/images/unavailable-image.png\"\n                class=\"imgSlide\">\n              </ion-img>\n            </ion-slide>\n\n            <!-- loaded slides  -->\n            <ion-slide *ngFor=\"let image of loadedImgList\">\n              <ion-img \n                src=\"{{ 'http://workintest.herokuapp.com'+image.image }}\"\n                class=\"imgSlide\">\n              </ion-img>\n            </ion-slide>\n\n          </ion-slides>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-button (click)=\"onLoadImg(false)\" shape=\"round\">\n            <ion-icon name=\"add\" slot=\"end\" color=\"light\" class=\"rating-text\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n\n      <!-- hidden file input -->\n      <div style=\"display: none;\">\n        <input type=\"file\" #hiddenImgInput *ngIf=\"useInputPicker\" (change)=\"onLoadImgFromInput($event)\">\n      </div>\n  \n\n      <!-- save BTN -->\n      <ion-row class=\"ion-margin-bottom\">\n        <ion-col offset=\"1\">\n          <ion-button size=\"5\" expand=\"block\" class=\"ion-text-uppercase\" type=\"submit\" >\n            GUARDAR CAMBIOS\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"2\"></ion-col>\n      </ion-row>\n    </form>\n\n  </ion-grid>\n</ion-content>\n<!-- [disabled]=\"!form.valid\"  -->\n");

/***/ }),

/***/ "lWgC":
/*!*****************************************************************!*\
  !*** ./src/app/profesional/cat-perfiles/cat-perfiles.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profileImg {\n  height: 120px;\n  width: 120px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.imgCont {\n  margin-top: 15px;\n}\n\n.profileIcon {\n  font-size: 16px;\n  color: white;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.rate-cont {\n  border-radius: 50px;\n  height: 30px;\n  width: 30px;\n  background-color: #53657e;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: -22px;\n}\n\n.catText {\n  font-size: 10px;\n}\n\n.border {\n  border: 1px solid #009ACE;\n}\n\n.regText {\n  font-size: 18px;\n}\n\n.imgSingle {\n  height: 150px;\n}\n\n.locate-cont {\n  border-radius: 50px;\n  height: 50px;\n  width: 50px;\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #009ACE;\n}\n\n.rating-text {\n  font-size: 26px;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NhdC1wZXJmaWxlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFFQTtFQUVJLGdCQUFBO0FBQUo7O0FBRUE7RUFFSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFFQTtFQUVJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBRUE7RUFFSSxlQUFBO0FBQUo7O0FBRUE7RUFFSSx5QkFBQTtBQUFKOztBQUVBO0VBRUksZUFBQTtBQUFKOztBQUVBO0VBRUksYUFBQTtBQUFKOztBQUVBO0VBRUksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUFKOztBQUVBO0VBRUksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBSiIsImZpbGUiOiJjYXQtcGVyZmlsZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGVJbWdcbntcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4uaW1nQ29udFxue1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG4ucHJvZmlsZUljb25cbntcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5yYXRlLWNvbnRcbntcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTM2NTdlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IC0yMnB4O1xufVxuLmNhdFRleHRcbntcbiAgICBmb250LXNpemU6IDEwcHg7XG59XG4uYm9yZGVyXG57XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwOUFDRTtcbn1cbi5yZWdUZXh0XG57XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuLmltZ1NpbmdsZVxue1xuICAgIGhlaWdodDogMTUwcHg7XG59XG4ubG9jYXRlLWNvbnRcbntcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOUFDRTtcbn1cbi5yYXRpbmctdGV4dFxue1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59Il19 */");

/***/ }),

/***/ "pHSn":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profesional/cat-perfiles/empty-modal/empty-modal.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-grid fixed>\n    <!-- SERVICIO Rechazado  -->\n    <div style=\"height: 10px;\"></div>\n    <ion-row class=\"ion-margin-top\">\n      <ion-col size=\"10\"  offset=\"1\" class=\"ion-text-center ion-margin-top\">\n        <ion-text class=\"status-text\" color=\"danger\"><b>SIN CATEGORIAS ASIGNADAS</b></ion-text><br>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid fixed>\n    <!-- subtitle  -->\n    <ion-row>\n      <ion-col size=\"10\"  offset=\"1\" class=\"ion-text-center ion-margin-top\">\n        <ion-text class=\"subtitle\" color=\"danger\">Contacte al administrado para que le asigne perfiles de categorias.</ion-text><br>\n      </ion-col>\n    </ion-row>\n\n    <!-- finalizar trabajo BTN -->\n    <ion-row class=\"ion-margin-top ion-margin-bottom\">\n      <ion-col size=\"1\"></ion-col>\n      <ion-col>\n        <ion-button size=\"5\" expand=\"block\" class=\"ion-text-uppercase\" color=\"danger\" (click)=\"dismissModal()\">\n          CERRAR SOLICITUD\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "pvjW":
/*!*******************************************************************************!*\
  !*** ./src/app/profesional/cat-perfiles/empty-modal/empty-modal.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EmptyModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyModalComponent", function() { return EmptyModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_empty_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./empty-modal.component.html */ "pHSn");
/* harmony import */ var _empty_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./empty-modal.component.scss */ "twrN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let EmptyModalComponent = class EmptyModalComponent {
    constructor(modalController, router) {
        this.modalController = modalController;
        this.router = router;
    }
    ngOnInit() { }
    dismissModal() {
        this.modalController.dismiss();
        this.router.navigate(['/profesional/home/home-tabs/agendados/']);
    }
    dismiss() {
        this.modalController.dismiss();
        this.router.navigate(['/profesional/home/home-tabs/agendados/']);
    }
};
EmptyModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
EmptyModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-empty-modal',
        template: _raw_loader_empty_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_empty_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EmptyModalComponent);



/***/ }),

/***/ "twrN":
/*!*********************************************************************************!*\
  !*** ./src/app/profesional/cat-perfiles/empty-modal/empty-modal.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".status-cont {\n  border-radius: 50px;\n  height: 45px;\n  width: 45px;\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 5px;\n  background-color: #009ACE;\n}\n\n.status-text-icon {\n  font-size: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  display: inline-flex;\n}\n\n.status-text {\n  font-size: 22px;\n}\n\n.mini-text {\n  font-size: 13px;\n}\n\nhr {\n  border-top: 1px solid #009ACE;\n}\n\n.no-border {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n\n.profileImg {\n  margin-left: 10px;\n  height: 75px;\n  width: 75px;\n}\n\n.ticket {\n  color: red;\n  font-size: 12px;\n}\n\n.titleSelect {\n  font-size: 19px;\n  font-weight: bold;\n}\n\n.mini-text {\n  font-size: 14px;\n}\n\n.subtitle {\n  font-size: 20px;\n}\n\n.border {\n  border: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2VtcHR5LW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFBSjs7QUFFQTtFQUVJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFBSjs7QUFFQTtFQUVJLGVBQUE7QUFBSjs7QUFFQTtFQUVJLGVBQUE7QUFBSjs7QUFFQTtFQUVJLDZCQUFBO0FBQUo7O0FBRUE7RUFFSSxnQkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBRUE7RUFFSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQUo7O0FBRUE7RUFFSSxVQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUVBO0VBRUksZUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBRUE7RUFFSSxlQUFBO0FBQUo7O0FBRUE7RUFFSSxlQUFBO0FBQUo7O0FBRUE7RUFFSSxxQkFBQTtBQUFKIiwiZmlsZSI6ImVtcHR5LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXR1cy1jb250XG57XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgd2lkdGg6IDQ1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5QUNFO1xufVxuLnN0YXR1cy10ZXh0LWljb25cbntcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuLnN0YXR1cy10ZXh0XG57XG4gICAgZm9udC1zaXplOiAyMnB4O1xufVxuLm1pbmktdGV4dFxue1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cbmhyXG57XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDlBQ0U7XG59XG4ubm8tYm9yZGVyXG57XG4gICAgcGFkZGluZy10b3A6IDJweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xufVxuLnByb2ZpbGVJbWdcbntcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgd2lkdGg6IDc1cHg7XG59XG4udGlja2V0XG57XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4udGl0bGVTZWxlY3RcbntcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWluaS10ZXh0XG57XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLnN1YnRpdGxlXG57XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuLmJvcmRlclxue1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn0iXX0= */");

/***/ }),

/***/ "y0T/":
/*!***************************************************************!*\
  !*** ./src/app/profesional/cat-perfiles/cat-perfiles.page.ts ***!
  \***************************************************************/
/*! exports provided: CatPerfilesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatPerfilesPage", function() { return CatPerfilesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cat_perfiles_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cat-perfiles.page.html */ "kJFj");
/* harmony import */ var _cat_perfiles_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cat-perfiles.page.scss */ "lWgC");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _empty_modal_empty_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./empty-modal/empty-modal.component */ "pvjW");
/* harmony import */ var _success_modal_success_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./success-modal/success-modal.component */ "VbkS");
/* harmony import */ var src_app_services_img_list_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/img-list.service */ "zakx");













function base64toBlob(base64Data, contentType) {
    contentType = contentType || '';
    const sliceSize = 1024;
    const byteCharacters = atob(base64Data);
    const bytesLength = byteCharacters.length;
    const slicesCount = Math.ceil(bytesLength / sliceSize);
    const byteArrays = new Array(slicesCount);
    for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
        const begin = sliceIndex * sliceSize;
        const end = Math.min(begin + sliceSize, bytesLength);
        const bytes = new Array(end - begin);
        for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
            bytes[i] = byteCharacters[offset].charCodeAt(0);
        }
        byteArrays[sliceIndex] = new Uint8Array(bytes);
    }
    return new Blob(byteArrays, { type: contentType });
}
let CatPerfilesPage = class CatPerfilesPage {
    constructor(lc, us, http, modalController, platform, ils) {
        this.lc = lc;
        this.us = us;
        this.http = http;
        this.modalController = modalController;
        this.platform = platform;
        this.ils = ils;
        this.categories = [];
        this.profCategories = [];
        this.grabbedUser = null;
        this.loadedImgList = [];
        this.comunas = [];
        this.comunasBU = [];
        this.transports = [];
        this.selectedComunas = [];
        this.selectedDays = [];
        this.imgPick = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.useInputPicker = false;
        this.profilePhoto = true;
    }
    ngOnInit() {
        this.userSub = this.us.loggedUser.subscribe(user => {
            this.grabbedUser = user;
        });
        //api headers
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Authorization', 'Bearer ' + this.grabbedUser.access_token);
        // this.headers.append('Content-Type', 'multipart/form-data');
        //categories list
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["API"] + '/supplier/categories', { headers: this.headers })
            .subscribe(resData => {
            this.categories = resData['data'];
        });
        //comunas
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["API"] + '/location/communes', { headers: this.headers })
            .subscribe(resData => {
            // this.comunas = resData['data'];
            this.comunasBU = resData['data'];
        });
        //transports
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["API"] + '/transports', { headers: this.headers })
            .subscribe(resData => {
            this.transports = resData['data'];
        });
        //form
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            descProf: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            }),
            transport: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
                updateOn: 'blur'
            }),
            sHour: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            }),
            eHour: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            }),
            workDays: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            }),
            comuna: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            }),
            descOffice: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
        });
        //platfrom checker
        if ((this.platform.is('mobile') && !this.platform.is('hybrid')) || this.platform.is('desktop')) {
            this.useInputPicker = true;
        }
        //loading imgList
        this.loadedImgList = this.ils.imgList;
        this.imgListSub = this.ils.listChanged.subscribe(imgList => {
            this.loadedImgList = imgList;
        });
    }
    ionViewWillEnter() {
        //prof categories list
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["API"] + '/supplier/professions', { headers: this.headers })
            .subscribe(resData => {
            console.log(resData['data']);
            if (resData['code'] === 200) {
                if (resData['data'].length === 0) {
                    //lunch awesome modal
                    this.modalController.create({
                        component: _empty_modal_empty_modal_component__WEBPACK_IMPORTED_MODULE_10__["EmptyModalComponent"],
                        cssClass: 'modalServRechazado',
                    }).then(modalEl => {
                        modalEl.present();
                    });
                }
                else {
                    this.profCategories = resData['data'];
                    this.selectedProPerfil = this.profCategories[0].id;
                    this.updateForm(this.profCategories[0]);
                }
            }
        }, e => {
            console.log(e);
        });
    }
    onCatProfileChange(profileID) {
        // console.log(e.detail.value);
        this.lc.create({
            message: 'Cargando informacion...'
        }).then(loadingEl => {
            loadingEl.present();
            this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["API"] + `/supplier/profession/${profileID}`, { headers: this.headers })
                .subscribe(resData => {
                console.log(resData['data']);
                loadingEl.dismiss();
                this.selectedProPerfil = profileID;
                this.updateForm(resData['data']);
                //loading images
                this.ils.setImgList(resData['data'].images);
            }, err => {
                console.log(err);
                loadingEl.dismiss();
            });
        });
    }
    updateForm(info) {
        this.selectedCatId = info.category_id;
        // console.log(info);
        this.selectedTransport = info.transport_id;
        this.selectedComunas = info.communes;
        // console.log(this.selectedComunas);
        let descPro;
        if (info.descProf === 'empty') {
            descPro = null;
        }
        else {
            descPro = info.descProf;
        }
        let descOff;
        if (info.description === 'empty') {
            descOff = null;
        }
        else {
            descOff = info.description;
        }
        let sHour;
        let eHour;
        if (info.hours === 'empty') {
            sHour = null;
            eHour = null;
        }
        else {
            let tempHours = info.hours.split('/');
            sHour = tempHours[0];
            eHour = tempHours[1];
        }
        let wDays;
        let zDays = [];
        if (info.work_days === 'empty') {
            wDays = null;
        }
        else {
            wDays = info.work_days;
            let tempDays = info.work_days.split('-');
            tempDays.forEach(i => {
                zDays.push(i);
            });
            this.selectedDays = zDays;
        }
        //pasing values to from
        this.form.patchValue({
            descProf: descPro,
            transport: info.transport_id,
            sHour: sHour,
            eHour: eHour,
            workDays: zDays,
            comuna: +info.commune_id,
            descOffice: descOff
        });
    }
    onTransportChange(e) {
        this.selectedTransport = +e.detail.value;
    }
    onSearchChange(e) {
        // this.selectedComunas = +e.detail.value;
        // console.log(e.srcElement.value);
        if (e.srcElement.value === '') {
            return;
        }
        this.comunas = this.comunasBU;
        const searchTerm = e.srcElement.value;
        if (!searchTerm) {
            return;
        }
        this.comunas = this.comunas.filter(currentComuna => {
            if (currentComuna.name && searchTerm) {
                return (currentComuna.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
            }
        });
    }
    selectComuna(comunaID) {
        let go = true;
        this.selectedComunas.forEach(c => {
            if (c.id === +comunaID) {
                go = false;
                return;
            }
        });
        if (go) {
            this.comunasBU.forEach(c => {
                if (c.id === +comunaID) {
                    this.selectedComunas.push(c);
                }
            });
        }
        this.searchValue = "";
        this.comunas = [];
    }
    onRemoveComuna(comunaID) {
        // console.log(this.selectedComunas);
        for (var i = 0; i < this.selectedComunas.length; i++) {
            if (this.selectedComunas[i].id === +comunaID) {
                this.selectedComunas.splice(i, 1);
            }
        }
        console.log(this.selectedComunas);
    }
    onDaysChange(e) {
        // console.log(e.detail.value);
        this.selectedDays = e.detail.value;
    }
    onUpdateCatProfile() {
        // console.log(this.form);
        let strDays = this.selectedDays.join('-');
        // console.log(strDays);
        let aComunas = [];
        let packedComunas;
        console.log(this.selectedComunas);
        this.selectedComunas.forEach(c => {
            aComunas.push(c.id);
        });
        packedComunas = aComunas.join(", ");
        const body = {
            category_id: this.selectedCatId.toString(),
            communes: packedComunas,
            transport_id: this.selectedTransport,
            descProf: this.form.value.descProf,
            description: this.form.value.descOffice,
            hours: this.form.value.sHour + '/' + this.form.value.eHour,
            work_days: strDays,
        };
        console.log(body);
        this.lc.create({
            message: 'Actualizando la informacion...'
        }).then(loadingEl => {
            loadingEl.present();
            this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["API"] + `/supplier/profession/${this.selectedProPerfil}`, body, { headers: this.headers })
                .subscribe(resData => {
                loadingEl.dismiss();
                this.modalController.create({
                    component: _success_modal_success_modal_component__WEBPACK_IMPORTED_MODULE_11__["SuccessModalComponent"],
                    cssClass: 'modalSuccess',
                }).then(modalEl => {
                    modalEl.present();
                });
            }, err => {
                console.log(err);
                loadingEl.dismiss();
            });
        });
    }
    onLoadImg(profile) {
        this.profilePhoto = profile;
        if (!_capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Capacitor"].isPluginAvailable('Camera') || this.useInputPicker) {
            this.hiddenImgInputRef.nativeElement.click();
            return;
        }
        _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"].Camera.getPhoto({
            quality: 25,
            source: _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["CameraSource"].Prompt,
            correctOrientation: true,
            height: 150,
            // width: 200,
            resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["CameraResultType"].DataUrl,
        }).then(image => {
            // console.log(image);
            // this.selectedImage = image.dataUrl;
            // this.imgPick.emit(image.dataUrl);
            // console.log(this.selectedImage);
            //save img to api
            this.saveImgToApi(image.dataUrl);
        }).catch(e => {
            console.log(e);
        });
    }
    onLoadImgFromInput(e) {
        const loadedFile = e.target.files[0];
        // console.log(loadedFile);
        this.saveImgToApi(loadedFile);
        //save img to api
    }
    saveImgToApi(imageData) {
        let imgFile;
        if (typeof imageData === 'string') {
            try {
                imgFile = base64toBlob(imageData.replace('data:image/jpeg;base64,', ''), 'image/jpeg');
            }
            catch (e) {
                console.log(e);
                return;
            }
        }
        else {
            imgFile = imageData;
        }
        this.form.patchValue({ image: imgFile });
        this.lc.create({
            message: 'Guardando imagen...'
        }).then(loadingEl => {
            loadingEl.present();
            //check to see if we are loading a profile img
            if (this.profilePhoto) {
                const formData = new FormData();
                formData.append('image', imgFile);
                this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["API"] + '/account/image', formData, { headers: this.headers })
                    .subscribe(resData => {
                    // console.log(resData);
                    this.us.dbUserGrab(this.grabbedUser.access_token, this.grabbedUser.role);
                    loadingEl.dismiss();
                    this.modalController.create({
                        component: _success_modal_success_modal_component__WEBPACK_IMPORTED_MODULE_11__["SuccessModalComponent"],
                        cssClass: 'modalSuccess',
                    }).then(modalEl => {
                        modalEl.present();
                    });
                }, err => {
                    loadingEl.dismiss();
                    console.log(err);
                });
                //if we are not loading a profile img
            }
            else {
                // const body = {
                //   images:[imgFile]
                // }
                let strDays = this.selectedDays.join('-');
                const formData = new FormData();
                formData.append('images[]', imgFile);
                formData.append('category_id', this.selectedCatId.toString());
                formData.append('transport_id', this.selectedTransport);
                // formData.append('communes', this.selectedComunas;
                this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["API"] + `/supplier/profession/${this.selectedProPerfil}`, formData, { headers: this.headers })
                    .subscribe(resData => {
                    // console.log(resData);
                    loadingEl.dismiss();
                    //remove when getting from resData
                    this.onCatProfileChange(this.selectedProPerfil);
                    //activate when getting it from resdata
                    // this.ils.setImgList(resData['data'].images);
                }, err => {
                    console.log(err);
                    loadingEl.dismiss();
                });
            }
        });
    }
    ngOnDestroy() {
        this.userSub.unsubscribe();
        this.imgListSub.unsubscribe();
    }
};
CatPerfilesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: src_app_services_img_list_service__WEBPACK_IMPORTED_MODULE_12__["ImgListService"] }
];
CatPerfilesPage.propDecorators = {
    imgPick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    hiddenImgInputRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['hiddenImgInput',] }]
};
CatPerfilesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-cat-perfiles',
        template: _raw_loader_cat_perfiles_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cat_perfiles_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CatPerfilesPage);



/***/ })

}]);
//# sourceMappingURL=profesional-cat-perfiles-cat-perfiles-module-es2015.js.map