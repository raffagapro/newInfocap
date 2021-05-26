(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-urgen-service-urgen-service-module"],{

/***/ "1gPL":
/*!**********************************************************!*\
  !*** ./src/app/user/urgen-service/urgen-service.page.ts ***!
  \**********************************************************/
/*! exports provided: UrgenServicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrgenServicePage", function() { return UrgenServicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_urgen_service_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./urgen-service.page.html */ "Nvbu");
/* harmony import */ var _urgen_service_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./urgen-service.page.scss */ "jYV8");
/* harmony import */ var src_app_shared_success_modal_success_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/success-modal/success-modal.component */ "W/u7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/solicitud.service */ "rLtr");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);














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
let UrgenServicePage = class UrgenServicePage {
    constructor(modalController, router, menuController, solServ, http, us, lc, platform) {
        this.modalController = modalController;
        this.router = router;
        this.menuController = menuController;
        this.solServ = solServ;
        this.http = http;
        this.us = us;
        this.lc = lc;
        this.platform = platform;
        this.minDate = moment__WEBPACK_IMPORTED_MODULE_13__().add('hour', 1);
        this.useInputPicker = false;
        this.loadedImages = [];
        this.loadedImagesDisplay = [];
        this.showError = false;
        this.slideOptions = {
            initialSlide: 0,
            slidesPerView: 2,
            autoplay: true
        };
    }
    ngOnInit() {
        this.userSub = this.us.loggedUser.subscribe(user => {
            this.grabbedUser = user;
            this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]().set('Authorization', 'Bearer ' + this.grabbedUser.access_token);
        });
        // platfrom Checker
        if ((this.platform.is('mobile') && !this.platform.is('hybrid')) || this.platform.is('desktop')) {
            this.useInputPicker = true;
        }
        //form
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroup"]({
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required]
            }),
            date_required: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required]
            }),
            sHour: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required]
            }),
            eHour: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required]
            }),
            adress: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"](this.solServ.solicitud.address, {
                updateOn: 'blur',
            }),
        });
    }
    ionViewWillEnter() {
        this.menuController.enable(true, 'user');
    }
    openMenu() {
        this.menuController.open();
    }
    onLoadImg() {
        if (!_capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Capacitor"].isPluginAvailable('Camera') || this.useInputPicker) {
            this.hiddenImgInputRef.nativeElement.click();
            return;
        }
        _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Plugins"].Camera.getPhoto({
            quality: 100,
            source: _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["CameraSource"].Prompt,
            correctOrientation: true,
            //height: 150,
            // width: 200,
            resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["CameraResultType"].DataUrl,
            promptLabelPhoto: 'Fotos',
            promptLabelPicture: 'Cámara',
            promptLabelCancel: 'Cancelar'
        }).then(image => {
            this.saveImgToApi(image.dataUrl);
        }).catch(e => {
            console.log(e);
        });
    }
    onLoadImgFromInput(e) {
        const loadedFile = e.target.files[0];
        this.saveImgToApi(loadedFile);
        //converting images to blob for diplaying
        const fr = new FileReader();
        fr.onload = () => {
            this.loadedImagesDisplay.push(fr.result.toString());
        };
        fr.readAsDataURL(e.target.files[0]);
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
        this.loadedImages.push(imgFile);
    }
    confirmRequest() {
        //format date
        let wDate = this.form.value.date_required.split('T');
        wDate = wDate[0];
        wDate = wDate.split('-');
        wDate = wDate[2] + '/' + wDate[1] + '/' + wDate[0];
        const formData = new FormData();
        this.loadedImages.forEach(image => {
            formData.append('images[]', image);
        });
        formData.append('cummune_id', this.solServ.solicitud.comuna_id);
        formData.append('description', this.form.value.description);
        formData.append('adress', this.form.value.adress);
        formData.append('adress_detail', this.form.value.adress);
        formData.append('extra_instructions', this.solServ.solicitud.instructions);
        formData.append('date_required', wDate);
        formData.append('hours', this.form.value.sHour + "/" + this.form.value.eHour);
        formData.append('category_id', this.solServ.solicitud.category_id);
        let startHour = moment__WEBPACK_IMPORTED_MODULE_13__(this.form.value.sHour);
        let endHour = moment__WEBPACK_IMPORTED_MODULE_13__(this.form.value.eHour);
        if (startHour.isAfter(endHour)) {
            this.showError = true;
            return;
        }
        this.showError = false;
        this.lc.create({
            message: 'Creando su solicitud...'
        }).then(loadingEl => {
            loadingEl.present();
            this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["API"]}/client/requestserviceurgent`, formData, { headers: this.headers })
                .subscribe(resData => {
                loadingEl.dismiss();
                this.modalController.create({
                    component: src_app_shared_success_modal_success_modal_component__WEBPACK_IMPORTED_MODULE_3__["SuccessModalComponent"],
                    componentProps: {
                        message: 'PRONTO UN PROFESIONAL SE CONTACTARÁ CONTIGO',
                        redirect: false,
                    },
                    cssClass: 'modalSuccess',
                }).then(modalEl => {
                    modalEl.present();
                });
            }, err => {
                loadingEl.dismiss();
                console.log(err);
            });
        });
    }
    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
};
UrgenServicePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_9__["SolicitudService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] }
];
UrgenServicePage.propDecorators = {
    hiddenImgInputRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['hiddenImgInput',] }]
};
UrgenServicePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-urgen-service',
        template: _raw_loader_urgen_service_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_urgen_service_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UrgenServicePage);



/***/ }),

/***/ "9r3M":
/*!********************************************************************!*\
  !*** ./src/app/user/urgen-service/urgen-service-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: UrgenServicePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrgenServicePageRoutingModule", function() { return UrgenServicePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _urgen_service_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./urgen-service.page */ "1gPL");




const routes = [
    {
        path: '',
        component: _urgen_service_page__WEBPACK_IMPORTED_MODULE_3__["UrgenServicePage"]
    }
];
let UrgenServicePageRoutingModule = class UrgenServicePageRoutingModule {
};
UrgenServicePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UrgenServicePageRoutingModule);



/***/ }),

/***/ "Nvbu":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/urgen-service/urgen-service.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar mode=\"ios\" color=\"danger\">\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/user/profesional-detail\" text=\"\" icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title class=\"title-toolbar\">SOLICITUD URGENTE</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"form\" (ngSubmit)=\"confirmRequest()\">\n    <ion-grid>\n\n      <!-- text -->\n      <ion-row class=\"ion-margin-top\">\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"10\" class=\"ion-text-center\">\n          <ion-text class=\"regText\">\n            Esta solicitud es de carácter urgente y será enviada a los 10 profesionales mejor catalogados para que\n            puedan atender tu solicitud lo antes posible.\n          </ion-text>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n\n      <!-- title -->\n      <ion-row>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"10\" class=\"ion-text-center\">\n          <ion-text class=\"title\" color=\"danger\"><b>Cuéntanos ¿Cuál es la solicitud del trabajo?</b></ion-text>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n\n      <!-- text-area -->\n      <ion-row class=\"ion-margin-top\">\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"10\" class=\"border ion-text-center\">\n          <ion-item lines=\"none\">\n            <ion-textarea class=\"textarea\" rows=\"3\" cols=\"20\" formControlName=\"description\"\n              placeholder=\"Describe lo más posible y claro el trabajo, así podremos dar respuesta más rápido.\">\n            </ion-textarea>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n\n      <!-- text -->\n      <ion-row class=\"ion-margin-top\">\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"10\" class=\"ion-text-center\">\n          <ion-text color=\"danger\" class=\"regText\"><b>Agrega imágenes que ayudarán al profesional a responder mejor a tu\n              solicitud.</b></ion-text>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n\n      <!-- images -->\n      <ion-row class=\"ion-align-items-center\">\n        <ion-col size=\"7\" offset=\"1\" *ngIf=\"loadedImagesDisplay.length > 0\">\n          <ion-slides [options]=\"slideOptions\">\n\n            <!-- slide -->\n            <ion-slide class=\"slide\" *ngFor=\"let image of loadedImagesDisplay\"\n              [loadedImagesDisplay]='loadedImagesDisplay'>\n              <ion-img src=\"{{ image }}\" class=\"imgSlide\">\n              </ion-img>\n            </ion-slide>\n\n          </ion-slides>\n        </ion-col>\n        <ion-col class=\"{{loadedImagesDisplay.length > 0 ? '' : 'text-center'}}\"\n          [size]=\"loadedImagesDisplay.length > 0 ? '4' : '12'\">\n          <div class=\"locate-cont\" (click)=\"onLoadImg()\">\n            <ion-icon name=\"add\" color=\"light\" class=\"rating-text\"></ion-icon>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <!-- hidden file input -->\n      <div style=\"display: none;\">\n        <input type=\"file\" #hiddenImgInput *ngIf=\"useInputPicker\" (change)=\"onLoadImgFromInput($event)\">\n      </div>\n\n      <!-- Fecha requerida -->\n      <ion-row>\n        <ion-col size=\"11\">\n          <ion-item>\n            <ion-label position=\"floating\">\n              <ion-icon src=\"/assets/icon/ic_date_range_red.svg\" slot=\"start\"></ion-icon>\n              <ion-text color=\"danger\">&nbsp;&nbsp;&nbsp;Fecha requerida</ion-text>\n            </ion-label>\n            <ion-datetime formControlName=\"date_required\" placeholder=\"Definir fecha\" [pickerFormat]=\"'DD MMM YYYY'\" [displayFormat]=\"'DDDD DD de MMM de YYYY'\"\n              [min]=\"minDate.format('YYYY-MM-DD')\" (ngModelChange)=\"onDateChange($event)\"\n              [dayNames]=\"['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']\"\n              monthShortNames=\"Enero, Febrero, Marzo, Abril, Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre\">\n            </ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <!-- Rango de horas -->\n\n      <!-- pickers -->\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-item>\n            <ion-label position=\"floating\">\n              <ion-icon color=\"danger\" src=\"/assets/icon/ic_schedule_red.svg\" slot=\"start\"></ion-icon>\n              <ion-text color=\"danger\">&nbsp;&nbsp;&nbsp;Hora inicial</ion-text>\n            </ion-label>\n            <ion-datetime formControlName=\"sHour\" display-format=\"h:mm A\" picker-format=\"h:mm A\"\n              [min]=\"minDate.format('YYYY-MM-DD')\">\n            </ion-datetime>\n          </ion-item>\n        </ion-col>\n\n        <ion-col size=\"5\">\n          <ion-item>\n            <ion-label position=\"floating\">\n              <ion-icon color=\"danger\" src=\"/assets/icon/ic_schedule_red.svg\" slot=\"start\"></ion-icon>\n              <ion-text color=\"danger\">&nbsp;&nbsp;&nbsp;Hora final</ion-text>\n            </ion-label>\n            <ion-datetime formControlName=\"eHour\" display-format=\"h:mm A\" picker-format=\"h:mm A\"\n              [min]=\"minDate.format('YYYY-MM-DD')\">\n            </ion-datetime>\n          </ion-item>\n        </ion-col>\n\n        <!-- error  -->\n        <ion-col size=\"12\" *ngIf=\"showError\">\n          <ion-label class=\"errorMess\">\n            <ion-icon name=\"alert-circle-outline\" class=\"iconFixG\" color=\"danger\"></ion-icon>\n            <ion-text class=\"text-center\" color=\"danger\">\n              <small> La hora de inicio debe ser menor que la hora de fin</small>\n            </ion-text>\n          </ion-label>\n        </ion-col>\n      </ion-row>\n\n      <!-- enviar solicitud BTN -->\n      <ion-row class=\"ion-margin-top ion-margin-bottom\">\n        <ion-col size=\"1\"></ion-col>\n        <ion-col>\n          <ion-button size=\"5\" expand=\"block\" class=\"ion-text-uppercase\" color=\"danger\" type=\"submit\"\n            [disabled]=\"!form.valid\">\n            CONFIRMAR SOLICITUD\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n\n    </ion-grid>\n  </form>\n</ion-content>");

/***/ }),

/***/ "bSEB":
/*!************************************************************!*\
  !*** ./src/app/user/urgen-service/urgen-service.module.ts ***!
  \************************************************************/
/*! exports provided: UrgenServicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrgenServicePageModule", function() { return UrgenServicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _urgen_service_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./urgen-service-routing.module */ "9r3M");
/* harmony import */ var _urgen_service_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./urgen-service.page */ "1gPL");







let UrgenServicePageModule = class UrgenServicePageModule {
};
UrgenServicePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _urgen_service_routing_module__WEBPACK_IMPORTED_MODULE_5__["UrgenServicePageRoutingModule"]
        ],
        declarations: [_urgen_service_page__WEBPACK_IMPORTED_MODULE_6__["UrgenServicePage"]]
    })
], UrgenServicePageModule);



/***/ }),

/***/ "jYV8":
/*!************************************************************!*\
  !*** ./src/app/user/urgen-service/urgen-service.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".no-border {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n\n.profileImg {\n  margin-left: 10px;\n  height: 75px;\n  width: 75px;\n}\n\n.titleSelect {\n  font-size: 23px;\n  font-weight: bold;\n}\n\n.tittle {\n  font-size: 18px;\n}\n\n.border {\n  border: 1px solid red;\n}\n\n.regText {\n  font-size: 14px;\n}\n\n.imgSingle {\n  height: 125px;\n}\n\n.locate-cont {\n  border-radius: 50px;\n  height: 50px;\n  width: 50px;\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: red;\n}\n\n.rating-text {\n  font-size: 26px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nion-item {\n  --border-color: var(--ion-color-danger, red);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3VyZ2VuLXNlcnZpY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUFFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBR0o7O0FBREU7RUFDRSxlQUFBO0FBSUo7O0FBRkU7RUFDRSxxQkFBQTtBQUtKOztBQUhFO0VBQ0UsZUFBQTtBQU1KOztBQUpFO0VBQ0UsYUFBQTtBQU9KOztBQUxFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQVFKOztBQU5FO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFTSjs7QUFQRTtFQUNFLDRDQUFBO0FBVUoiLCJmaWxlIjoidXJnZW4tc2VydmljZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm8tYm9yZGVye1xuICAgIHBhZGRpbmctdG9wOiAycHg7XG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgfVxuICAucHJvZmlsZUltZ3tcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgd2lkdGg6IDc1cHg7XG4gIH1cbiAgLnRpdGxlU2VsZWN0e1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAudGl0dGxle1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICAuYm9yZGVye1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgfVxuICAucmVnVGV4dHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLmltZ1NpbmdsZXtcbiAgICBoZWlnaHQ6IDEyNXB4O1xuICB9XG4gIC5sb2NhdGUtY29udHtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICB9XG4gIC5yYXRpbmctdGV4dHtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG4gIGlvbi1pdGVtIHtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlciwgcmVkKTtcbiAgfVxuICAiXX0= */");

/***/ })

}]);
//# sourceMappingURL=user-urgen-service-urgen-service-module-es2015.js.map