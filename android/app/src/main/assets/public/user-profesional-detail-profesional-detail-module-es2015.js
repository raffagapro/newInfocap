(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-profesional-detail-profesional-detail-module"],{

/***/ "44my":
/*!******************************************************************************!*\
  !*** ./src/app/user/profesional-detail/profesional-detail-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: ProfesionalDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfesionalDetailPageRoutingModule", function() { return ProfesionalDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profesional_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profesional-detail.page */ "flA3");




const routes = [
    {
        path: '',
        component: _profesional_detail_page__WEBPACK_IMPORTED_MODULE_3__["ProfesionalDetailPage"]
    }
];
let ProfesionalDetailPageRoutingModule = class ProfesionalDetailPageRoutingModule {
};
ProfesionalDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        ],
    })
], ProfesionalDetailPageRoutingModule);



/***/ }),

/***/ "EgyZ":
/*!*********************************************!*\
  !*** ./src/app/model/profCategory.model.ts ***!
  \*********************************************/
/*! exports provided: ProfCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfCategory", function() { return ProfCategory; });
class ProfCategory {
    constructor(categoryName, category_id, communeName, commune_id, description, hours, id, images, supplierLastName, supplierName, transportName, transport_id, work_days) {
        this.categoryName = categoryName;
        this.category_id = category_id;
        this.communeName = communeName;
        this.commune_id = commune_id;
        this.description = description;
        this.hours = hours;
        this.id = id;
        this.images = images;
        this.supplierLastName = supplierLastName;
        this.supplierName = supplierName;
        this.transportName = transportName;
        this.transport_id = transport_id;
        this.work_days = work_days;
    }
}


/***/ }),

/***/ "KxoQ":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/profesional-detail/profesional-detail.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/user/profesional-list\" text=\"\" icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title class=\"title-toolbar\">TU PROFESIONAL</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"main-font\">\n\n  <!-- Slider -->\n  <ion-grid>\n    <ion-row class=\"ion-align-items-center ion-margin-top ion-margin-bottom\">\n      <ion-col size=\"12\">\n        <ion-slides>\n          <!-- slide -->\n          <ion-slide *ngFor=\"let image of loadedImgList\">\n            <img src=\"{{ image.image }}\" class=\"imgSlide\">\n          </ion-slide>\n\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div style=\"height: 30px;\"></div>\n\n  <!-- profesional card item -->\n  <div class=\"no-border\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center ion-margin-top\">\n        <!-- profile img -->\n        <ion-col size=\"4\">\n          <ion-avatar class=\"profileImg\">\n            <ion-img src=\"{{ !selectedProfPhoto ? 'assets/images/avatar.png' : selectedProfPhoto }}\"></ion-img>\n          </ion-avatar>\n        </ion-col>\n\n        <!-- title -->\n        <ion-col size=\"8\">\n          <ion-text>\n            <span class=\"titleSelect main-color ion-text-capitalize\">\n              {{ selectedProCat.supplierName }} {{ selectedProCat.supplierLastName }}\n            </span><br>\n            <!-- se necesita extra codigo para mostar todas la profesiones  -->\n            <ion-badge color=\"primary\" class=\"badge-text\">\n              {{ selectedProCat.categoryName }}\n            </ion-badge><br>\n            <!-- <ion-badge color=\"medium\" class=\"badge-text\">Gasfiter</ion-badge>\n            <ion-badge color=\"medium\" class=\"badge-text\">Eléctrico</ion-badge><br> -->\n            <p class=\"textSelect main-color ion-text-capitalize\" style=\"margin-top: 0; margin-bottom: 0;\">Vehículo: {{\n              selectedProCat.transportName}}</p>\n            <p class=\"textSelect main-color\" style=\"margin-top: 0; margin-bottom: 0;\">Horario: {{ editedHours }}</p>\n            <p class=\"textSelect main-color\" style=\"margin-top: 0; margin-bottom: 0;\">Dias: {{ editedDays }}</p>\n            <p class=\"textSelect main-color ion-text-capitalize\" style=\"margin-top: 0; margin-bottom: 0;\">{{\n              selectedProCat.communeName }}</p>\n          </ion-text>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <ion-grid>\n\n    <!-- desc pro -->\n    <ion-row class=\"border-bot\">\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\">\n        <ion-text>\n          <p class=\"regText ion-text-capitalize ion-text-center\">\n            {{ selectedProCat.descProf }}\n          </p>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n    <!-- mdesc of -->\n    <ion-row>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\">\n        <ion-text>\n          <p class=\"regText ion-text-capitalize ion-text-center\">\n            {{ selectedProCat.description }}\n          </p>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n    <!-- title -->\n    <ion-row>\n      <ion-col size=\"1\" offset=\"1\"></ion-col>\n      <ion-col size=\"8\" class=\"ion-text-center\">\n        <ion-text class=\"main-color title\"><b>Evaluaciones generales</b></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n    <!-- trabajos realizados -->\n    <ion-row class=\"border-bot\">\n      <!-- Text -->\n      <ion-col size=\"9\">\n        <ion-text>\n          <p class=\"itemText\">Cantidad de trabajos realizados</p>\n        </ion-text>\n      </ion-col>\n      <!-- icon -->\n      <ion-col size=\"3\">\n        <ion-text>\n          <p class=\"ratingText main-color ion-text-right\">\n            50\n            <ion-icon src=\"/assets/icon/ic_hands.svg\" class=\"iconEnd\"></ion-icon>\n          </p>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n    <!-- valoracion -->\n    <ion-row class=\"border-bot\">\n      <!-- Text -->\n      <ion-col size=\"9\">\n        <ion-text>\n          <p class=\"itemText\">Valoraciones en relación al trabajo</p>\n        </ion-text>\n      </ion-col>\n      <!-- icon -->\n      <ion-col size=\"3\">\n        <ion-text>\n          <p class=\"ratingText main-color ion-text-right\">\n            4.83\n            <ion-icon src=\"/assets/icon/ic_star.svg\" class=\"iconEnd\"></ion-icon>\n          </p>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n    <!-- capacidad tecnica -->\n    <ion-row class=\"border-bot\">\n      <!-- Text -->\n      <ion-col size=\"7\">\n        <ion-text>\n          <p class=\"itemText\">Capacidad Técnica</p>\n        </ion-text>\n      </ion-col>\n      <!-- icon -->\n      <ion-col size=\"5\">\n        <ion-text>\n          <p class=\"ratingText main-color ion-text-right\">\n            de 50\n            &nbsp;<ion-icon src=\"/assets/icon/ic_hands.svg\" class=\"iconEnd\"></ion-icon>&nbsp;\n            / 50\n            &nbsp;<ion-icon src=\"/assets/icon/ic_engine_circle.svg\" size=\"large\" class=\"iconEnd\"></ion-icon>\n          </p>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n    <!-- Puntualidad -->\n    <ion-row class=\"border-bot\">\n      <!-- Text -->\n      <ion-col size=\"7\">\n        <ion-text>\n          <p class=\"itemText\">Puntualidad</p>\n        </ion-text>\n      </ion-col>\n      <!-- icon -->\n      <ion-col size=\"5\">\n        <ion-text>\n          <p class=\"ratingText main-color ion-text-right\">\n            de 50\n            &nbsp;<ion-icon src=\"/assets/icon/ic_hands.svg\" class=\"iconEnd\"></ion-icon>&nbsp;\n            / 50\n            &nbsp;<ion-icon src=\"/assets/icon/ic_time_circle.svg\" size=\"large\" class=\"iconEnd\"></ion-icon>\n          </p>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n    <!-- Cordialidad -->\n    <ion-row class=\"border-bot\">\n      <!-- Text -->\n      <ion-col size=\"7\">\n        <ion-text>\n          <p class=\"itemText\">Cordialidad</p>\n        </ion-text>\n      </ion-col>\n      <!-- icon -->\n      <ion-col size=\"5\">\n        <ion-text>\n          <p class=\"ratingText main-color ion-text-right\">\n            de 50\n            &nbsp;<ion-icon src=\"/assets/icon/ic_hands.svg\" class=\"iconEnd\"></ion-icon>&nbsp;\n            / 50\n            &nbsp;<ion-icon src=\"/assets/icon/ic_heart_circle.svg\" size=\"large\" class=\"iconEnd\"></ion-icon>\n          </p>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n    <!-- Servicio y Satisfacción -->\n    <ion-row class=\"border-bot\">\n      <!-- Text -->\n      <ion-col size=\"7\">\n        <ion-text>\n          <p class=\"itemText\">Servicio y Satisfacción</p>\n        </ion-text>\n      </ion-col>\n      <!-- icon -->\n      <ion-col size=\"5\">\n        <ion-text>\n          <p class=\"ratingText main-color ion-text-right\">\n            de 50\n            &nbsp;<ion-icon src=\"/assets/icon/ic_hands.svg\" class=\"iconEnd\"></ion-icon>&nbsp;\n            / 50\n            &nbsp;<ion-icon src=\"/assets/icon/ic_diamont_circle.svg\" size=\"large\" class=\"iconEnd\"></ion-icon>\n          </p>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n    <!-- footer text -->\n    <ion-row class=\"subtitle ion-margin-top\">\n      <ion-col size=\"10\" offset=\"1\" class=\"ion-text-center\">\n        <ion-text class=\"lastText main-color\"><b>\n            ¿Quieres enviarle una solicitud de servicio a\n            <span class=\"ion-text-capitalize\"> {{ selectedProCat.supplierName }} {{ selectedProCat.supplierLastName\n              }}?</span>\n          </b></ion-text>\n      </ion-col>\n    </ion-row>\n\n    <!-- enviar solicitud BTN -->\n    <ion-row class=\"ion-margin-top ion-margin-bottom\">\n      <ion-col size=\"1\"></ion-col>\n      <ion-col>\n        <ion-button size=\"5\" expand=\"block\" class=\"ion-text-uppercase\" (click)=\"sendRequest()\">\n          ENVIAR SOLICITUD\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "ZhKg":
/*!**********************************************************************!*\
  !*** ./src/app/user/profesional-detail/profesional-detail.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".imgSlide {\n  height: auto;\n  width: 100%;\n  margin-top: -35px;\n}\n\n.no-border {\n  margin-top: -75px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n\n.profileImg {\n  margin-left: 10px;\n  height: 100px;\n  width: 100px;\n}\n\n.titleSelect {\n  font-size: 23px;\n  font-weight: bold;\n}\n\n.textSelect {\n  font-size: 12px;\n}\n\n.badge-text {\n  font-size: 9px;\n  margin-right: 5px;\n}\n\n.locate-cont {\n  margin-top: 20px;\n  border-radius: 50px;\n  height: 30px;\n  width: 30px;\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #009ace;\n}\n\n.rating-text {\n  font-size: 18px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.ratingText {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  font-weight: 600;\n  margin-top: 18px;\n  font-size: 15px;\n}\n\n.regText {\n  font-size: 12px;\n}\n\n.title {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.itemText {\n  margin-left: 10px;\n}\n\n.border-bot {\n  border-bottom: 1px solid #009ace;\n}\n\n.iconEnd {\n  margin-bottom: -3px;\n  font-size: 15px;\n}\n\n.lastText {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2Zlc2lvbmFsLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFBQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFHRjs7QUFEQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUlGOztBQUZBO0VBQ0UsZUFBQTtBQUtGOztBQUhBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBTUY7O0FBSkE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFPRjs7QUFMQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBUUY7O0FBTkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUVBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBUUY7O0FBTkE7RUFDRSxlQUFBO0FBU0Y7O0FBUEE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFVRjs7QUFSQTtFQUNFLGlCQUFBO0FBV0Y7O0FBVEE7RUFDRSxnQ0FBQTtBQVlGOztBQVZBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FBYUY7O0FBVkE7RUFDRSxlQUFBO0FBYUYiLCJmaWxlIjoicHJvZmVzaW9uYWwtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWdTbGlkZSB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IC0zNXB4O1xufVxuLm5vLWJvcmRlciB7XG4gIG1hcmdpbi10b3A6IC03NXB4O1xuICBwYWRkaW5nLXRvcDogMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xufVxuLnByb2ZpbGVJbWcge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuLnRpdGxlU2VsZWN0IHtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi50ZXh0U2VsZWN0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmJhZGdlLXRleHQge1xuICBmb250LXNpemU6IDlweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4ubG9jYXRlLWNvbnQge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5YWNlO1xufVxuLnJhdGluZy10ZXh0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLnJhdGluZ1RleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLXRvcDogMThweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLnJlZ1RleHQge1xuICBmb250LXNpemU6IDEycHg7XG59XG4udGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uaXRlbVRleHQge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5ib3JkZXItYm90IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDlhY2U7XG59XG4uaWNvbkVuZCB7XG4gIG1hcmdpbi1ib3R0b206IC0zcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmxhc3RUZXh0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuIl19 */");

/***/ }),

/***/ "dBxP":
/*!**********************************************************************!*\
  !*** ./src/app/user/profesional-detail/profesional-detail.module.ts ***!
  \**********************************************************************/
/*! exports provided: ProfesionalDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfesionalDetailPageModule", function() { return ProfesionalDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _profesional_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profesional-detail-routing.module */ "44my");
/* harmony import */ var _profesional_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profesional-detail.page */ "flA3");







let ProfesionalDetailPageModule = class ProfesionalDetailPageModule {
};
ProfesionalDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profesional_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfesionalDetailPageRoutingModule"],
        ],
        declarations: [_profesional_detail_page__WEBPACK_IMPORTED_MODULE_6__["ProfesionalDetailPage"]]
    })
], ProfesionalDetailPageModule);



/***/ }),

/***/ "flA3":
/*!********************************************************************!*\
  !*** ./src/app/user/profesional-detail/profesional-detail.page.ts ***!
  \********************************************************************/
/*! exports provided: ProfesionalDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfesionalDetailPage", function() { return ProfesionalDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profesional_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profesional-detail.page.html */ "KxoQ");
/* harmony import */ var _profesional_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profesional-detail.page.scss */ "ZhKg");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_model_profCategory_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/model/profCategory.model */ "EgyZ");
/* harmony import */ var src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/solicitud.service */ "rLtr");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_services_img_list_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/img-list.service */ "zakx");
/* harmony import */ var src_shared_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/shared/constants */ "p1Kg");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);














let ProfesionalDetailPage = class ProfesionalDetailPage {
    constructor(router, menuController, solServ, http, us, lc, ils) {
        this.router = router;
        this.menuController = menuController;
        this.solServ = solServ;
        this.http = http;
        this.us = us;
        this.lc = lc;
        this.ils = ils;
        this.selectedProCat = new src_app_model_profCategory_model__WEBPACK_IMPORTED_MODULE_7__["ProfCategory"](null, null, null, null, null, null, null, null, null, null, null, null, null);
        this.loadedImgList = [];
        this.editedDays = '';
        this.slideOptions = {
            initialSlide: 0,
            slidesPerView: 2,
            autoplay: true
        };
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.us.getUser();
            this.userSub = this.us.loggedUser.subscribe(user => {
                if (user) {
                    this.grabbedUser = user;
                    this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Authorization', 'Bearer ' + this.grabbedUser.access_token);
                    this.getProf();
                    console.log(this.grabbedUser);
                }
            });
            //loading imgList
            this.loadedImgList = this.ils.imgList;
            this.imgListSub = this.ils.listChanged.subscribe(imgList => {
                this.loadedImgList = imgList;
            });
        });
    }
    ionViewWillEnter() {
        this.menuController.enable(true, 'user');
        this.selectedProfPhoto = this.solServ.solicitud.proPhoto;
        if (this.selectedProfPhoto === src_shared_constants__WEBPACK_IMPORTED_MODULE_12__["IMAGE_URL_BLANK"]) {
            this.selectedProfPhoto = null;
        }
    }
    getProf() {
        this.lc.create({
            message: 'Cargando informacion del profesional...'
        }).then(loadingEl => {
            loadingEl.present();
            this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["API"] + `/client/profession/${this.solServ.solicitud.proPerfil_id}`, { headers: this.headers })
                .subscribe(resData => {
                this.selectedProCat = resData['data'];
                let splitedHours = this.selectedProCat.hours.split('/');
                let startHour = splitedHours.length > 0 ? moment__WEBPACK_IMPORTED_MODULE_13__(splitedHours[0]).format('h:mm a') : 'ND';
                let endHour = splitedHours.length > 1 ? moment__WEBPACK_IMPORTED_MODULE_13__(splitedHours[1]).format('h:mm a') : 'ND';
                this.editedHours = `${startHour} / ${endHour}`;
                let workingDays = this.selectedProCat.work_days.split('-');
                workingDays.forEach(day => {
                    switch (day) {
                        case 'l':
                            this.editedDays += 'Lun ';
                            break;
                        case 'm':
                            this.editedDays += 'Mar ';
                            break;
                        case 'mr':
                            this.editedDays += 'Mie ';
                            break;
                        case 'j':
                            this.editedDays += 'Jue ';
                            break;
                        case 'v':
                            this.editedDays += 'Vie ';
                            break;
                        case 's':
                            this.editedDays += 'Sab ';
                            break;
                        case 'd':
                            this.editedDays += 'Dom ';
                            break;
                    }
                });
                //loading images
                // let listArr: [] = [];
                // resData['data'].images.forEach(image => {
                //   listArr.push(image.image);
                // });
                this.ils.setImgList(resData['data'].images);
                loadingEl.dismiss();
            }, e => {
                console.log(e);
                loadingEl.dismiss();
                // this.router.navigate(['/user/profesional-list']);
            });
        }).then(err => {
            console.log(err);
            this.lc.dismiss();
        });
    }
    openMenu() {
        this.menuController.open();
    }
    sendRequest() {
        this.solServ.setProPerfilObj(this.selectedProCat);
        this.router.navigate(['/user/solicitud-servicio']);
    }
    ngOnDestroy() {
        this.userSub.unsubscribe();
        this.imgListSub.unsubscribe();
    }
};
ProfesionalDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"] },
    { type: src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_8__["SolicitudService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: src_app_services_img_list_service__WEBPACK_IMPORTED_MODULE_11__["ImgListService"] }
];
ProfesionalDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-profesional-detail',
        template: _raw_loader_profesional_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profesional_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfesionalDetailPage);



/***/ })

}]);
//# sourceMappingURL=user-profesional-detail-profesional-detail-module-es2015.js.map