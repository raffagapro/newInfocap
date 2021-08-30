(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-profile-page-profile-page-module"],{

/***/ "4EON":
/*!******************************************************************!*\
  !*** ./src/app/user/profile-page/profile-page-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: ProfilePagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePagePageRoutingModule", function() { return ProfilePagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profile_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-page.page */ "oUEj");




const routes = [
    {
        path: '',
        component: _profile_page_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePagePage"]
    }
];
let ProfilePagePageRoutingModule = class ProfilePagePageRoutingModule {
};
ProfilePagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePagePageRoutingModule);



/***/ }),

/***/ "c2fJ":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/profile-page/profile-page.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/user/home\" text=\"\" icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title-toolbar\">EDITAR USUARIO</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n\n    <!-- profile Img -->\n    <ion-row class=\"imgCont\">\n      <ion-col>\n        <ion-avatar class=\"ion-margin-start profileImg\">\n          <ion-img [src]=\"getProfilePicture()\"></ion-img>\n        </ion-avatar>\n      </ion-col>\n    </ion-row>\n    <!-- edit icon -->\n    <ion-row>\n      <ion-col>\n        <div class=\"rate-cont\" *ngIf=\"grabbedUser.id !== null\" (click)=\"onLoadImg()\">\n          <ion-icon name=\"pencil\" class=\"profileIcon\"></ion-icon>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <!-- hidden file input -->\n    <div style=\"display: none;\">\n      <input type=\"file\" #hiddenImgInput *ngIf=\"useInputPicker\" (change)=\"onLoadImgFromInput($event)\">\n    </div>\n\n    <!-- Register Inputs -->\n    <form [formGroup]=\"form\" (ngSubmit)=\"onUpdateUser()\" *ngIf=\"form\">\n      <!-- nombre -->\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-item class=\"ion-no-padding\">\n            <ion-label position=\"floating\" class=\"main-color\">\n              <ion-icon name=\"person\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Nombre</ion-text>\n            </ion-label>\n            <ion-input type=\"text\" formControlName=\"name\"></ion-input>\n          </ion-item>\n          <!-- error  -->\n          <ion-label *ngIf=\"form.get('name').hasError('required')\" class=\"errorMess\">\n            <ion-icon name=\"alert-circle-outline\" class=\"iconFixG\" color=\"danger\"></ion-icon>\n            <ion-text color=\"danger\">\n              <small> El nombre es requerido</small>\n            </ion-text>\n          </ion-label>\n        </ion-col>\n      </ion-row>\n\n      <!-- email -->\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-item class=\"ion-no-padding\">\n            <ion-label position=\"floating\">\n              <ion-icon src=\"/assets/icon/ic_mail.svg\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Email</ion-text>\n            </ion-label>\n            <ion-input type=\"text\" disabled formControlName=\"email\"></ion-input>\n          </ion-item>\n          <!-- error requerido  -->\n          <ion-label *ngIf=\"form.get('email').hasError('required')\" class=\"errorMess\">\n            <ion-icon name=\"alert-circle-outline\" class=\"iconFixG\" color=\"danger\"></ion-icon>\n            <ion-text color=\"danger\">\n              <small> El email es requerido</small>\n            </ion-text>\n          </ion-label>\n          <!-- error email  -->\n          <ion-label *ngIf=\"form.get('email').hasError('email')\" class=\"errorMess\">\n            <ion-icon name=\"alert-circle-outline\" class=\"iconFixG\" color=\"danger\"></ion-icon>\n            <ion-text color=\"danger\">\n              <small> El email no tiene el formato correcto</small>\n            </ion-text>\n          </ion-label>\n        </ion-col>\n      </ion-row>\n\n      <!-- Número de contacto 1 -->\n      <ion-row>\n        <ion-col size=\"5\">\n          <ion-item class=\"ion-no-padding\">\n            <ion-label position=\"floating\">\n              <ion-icon src=\"/assets/icon/ic_phone.svg\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Código</ion-text>\n            </ion-label>\n            <ion-select (click)=\"loadFlags()\" formControlName=\"countryCode\" required placeholder=\"Código\"\n              [cancelText]=\"'Cancelar'\" [okText]=\"'Aceptar'\">\n              <ion-select-option *ngFor=\"let country of countryCodes\" value=\"+{{country.callingCodes[0]}}\">\n                {{country.alpha2Code}} +{{country.callingCodes[0]}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"7\">\n          <ion-item class=\"ion-no-padding\">\n            <ion-label position=\"floating\" class=\"main-color\">\n              <ion-icon src=\"/assets/icon/ic_phone.svg\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Celular</ion-text>\n            </ion-label>\n            <ion-input type=\"number\" pattern=\"\\d*\" formControlName=\"phone1\"></ion-input>\n          </ion-item>\n          <!-- error requerido  -->\n          <ion-label *ngIf=\"form.get('phone1').hasError('required')\" class=\"errorMess\">\n            <ion-icon name=\"alert-circle-outline\" class=\"iconFixG\" color=\"danger\"></ion-icon>\n            <ion-text color=\"danger\">\n              <small> El Numero de contacto es requerido</small>\n            </ion-text>\n          </ion-label>\n        </ion-col>\n      </ion-row>\n\n      <!-- Número de contacto 2 -->\n      <!-- <ion-row>\n        <ion-col size=\"12\">\n          <ion-item class=\"ion-no-padding\">\n            <ion-label position=\"floating\" class=\"main-color\">\n              <ion-icon name=\"call\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Número de contacto 2</ion-text>\n            </ion-label>\n            <ion-input type=\"string\" formControlName=\"phone2\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row> -->\n\n\n      <!-- title -->\n      <div style=\"height: 30px;\"></div>\n      <ion-row class=\"ion-margin-top\">\n        <ion-col size=\"1\" offset=\"1\"></ion-col>\n        <ion-col size=\"8\" class=\"ion-text-center\">\n          <ion-text class=\"main-color ion-text-uppercase title\"><b>CAMBIAR CONTRASEÑA</b></ion-text>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n\n      <!-- Contraseña actual -->\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-item class=\"ion-no-padding\">\n            <ion-label position=\"floating\" class=\"main-color\">\n              <ion-icon src=\"/assets/icon/ic_lock.svg\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Contraseña actual</ion-text>\n            </ion-label>\n            <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n          </ion-item>\n          <!-- http error  -->\n          <ion-label *ngIf=\"httpError\" class=\"errorMess\">\n            <ion-icon name=\"alert-circle-outline\" class=\"iconFixG\" color=\"danger\"></ion-icon>\n            <ion-text color=\"danger\">\n              <small> {{ httpError }}</small>\n            </ion-text>\n          </ion-label>\n        </ion-col>\n      </ion-row>\n\n      <!-- Nueva contraseña -->\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-item class=\"ion-no-padding\">\n            <ion-label position=\"floating\" class=\"main-color\">\n              <ion-icon src=\"/assets/icon/ic_lock.svg\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Nueva contraseña</ion-text>\n            </ion-label>\n            <ion-input type=\"password\" formControlName=\"newPassword\"></ion-input>\n          </ion-item>\n          <!-- password error  -->\n          <ion-label *ngIf=\"passError\" class=\"errorMess\">\n            <ion-icon name=\"alert-circle-outline\" class=\"iconFixG\" color=\"danger\"></ion-icon>\n            <ion-text color=\"danger\">\n              <small> {{ passError }}</small>\n            </ion-text>\n          </ion-label>\n        </ion-col>\n      </ion-row>\n\n      <!-- Repetir nueva contraseña -->\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-item class=\"ion-no-padding\">\n            <ion-label position=\"floating\" class=\"main-color\">\n              <ion-icon src=\"/assets/icon/ic_lock.svg\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Repetir nueva contraseña</ion-text>\n            </ion-label>\n            <ion-input type=\"password\" formControlName=\"confirmPassword\"></ion-input>\n          </ion-item>\n          <!-- password error  -->\n          <ion-label *ngIf=\"passError\" class=\"errorMess\">\n            <ion-icon name=\"alert-circle-outline\" class=\"iconFixG\" color=\"danger\"></ion-icon>\n            <ion-text color=\"danger\">\n              <small> {{ passError }}</small>\n            </ion-text>\n          </ion-label>\n        </ion-col>\n      </ion-row>\n\n      <!-- BTN -->\n      <ion-row class=\"ion-margin-top ion-margin-bottom ion-align-items-center\" style=\"justify-content: center\">\n        <ion-col size=\"10\">\n          <ion-button expand=\"block\" class=\"ion-text-uppercase\" type=\"submit\" [disabled]=\"!form.valid\">\n            GUARDAR CAMBIOS\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n\n\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "cdKE":
/*!**********************************************************!*\
  !*** ./src/app/user/profile-page/profile-page.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profileImg {\n  height: 120px;\n  width: 120px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.imgCont {\n  margin-top: 35px;\n}\n\n.profileIcon {\n  font-size: 16px;\n  color: white;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.rate-cont {\n  border-radius: 50px;\n  height: 30px;\n  width: 30px;\n  background-color: #53657e;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: -22px;\n}\n\nform {\n  padding: 0 20px;\n}\n\nion-label {\n  text-overflow: initial !important;\n  min-width: 210px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2ZpbGUtcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTtFQUNFLGdCQUFBO0FBRUY7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFEQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBSUY7O0FBRkE7RUFDRSxlQUFBO0FBS0Y7O0FBSEE7RUFDRSxpQ0FBQTtFQUNBLGdCQUFBO0FBTUYiLCJmaWxlIjoicHJvZmlsZS1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlSW1nIHtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgd2lkdGg6IDEyMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLmltZ0NvbnQge1xuICBtYXJnaW4tdG9wOiAzNXB4O1xufVxuLnByb2ZpbGVJY29uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4ucmF0ZS1jb250IHtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUzNjU3ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAtMjJweDtcbn1cbmZvcm0ge1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG5pb24tbGFiZWwge1xuICB0ZXh0LW92ZXJmbG93OiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogMjEwcHg7XG59Il19 */");

/***/ }),

/***/ "oUEj":
/*!********************************************************!*\
  !*** ./src/app/user/profile-page/profile-page.page.ts ***!
  \********************************************************/
/*! exports provided: ProfilePagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePagePage", function() { return ProfilePagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_page_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile-page.page.html */ "c2fJ");
/* harmony import */ var _profile_page_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-page.page.scss */ "cdKE");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/core */ "FUe0");
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/camera */ "/s3u");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_model_user_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/model/user.model */ "UbF0");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_shared_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/shared/constants */ "p1Kg");
/* harmony import */ var src_app_shared_success_modal_success_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/success-modal/success-modal.component */ "W/u7");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);















function base64toBlob(base64Data, contentType) {
    contentType = contentType || "";
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
let ProfilePagePage = class ProfilePagePage {
    constructor(us, lc, http, modalController, platform) {
        this.us = us;
        this.lc = lc;
        this.http = http;
        this.modalController = modalController;
        this.platform = platform;
        this.imgPick = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.useInputPicker = false;
        this.countryCodes = [];
    }
    ngOnInit() {
        this.loadFlags = this.loadFlags.bind(this);
        this.userSub = this.us.loggedUser.subscribe((user) => {
            this.grabbedUser = user;
            //api headers
            this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set("Authorization", "Bearer " + this.grabbedUser.access_token);
            this.getCountryCodes();
        });
    }
    initializeForm() {
        let phone1;
        let phone2;
        let countryCode;
        if (this.grabbedUser.phone1 === "-") {
            phone1 = null;
        }
        else {
            let splitedPhone = this.grabbedUser.phone1.split(" ");
            if (splitedPhone.length <= 1) {
                phone1 = splitedPhone[0];
            }
            else {
                countryCode = splitedPhone[0];
                phone1 = splitedPhone[1];
            }
        }
        if (this.grabbedUser.phone2 === "-") {
            phone2 = null;
        }
        else {
            phone2 = this.grabbedUser.phone2;
        }
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.grabbedUser.name + " " + this.grabbedUser.last_name, {
                updateOn: "blur",
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.grabbedUser.email, {
                updateOn: "blur",
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email],
            }),
            countryCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](countryCode, {
                updateOn: "blur",
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            }),
            phone1: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](phone1, {
                updateOn: "blur",
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            }),
            phone2: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](phone2, {
                updateOn: "blur",
            }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
                updateOn: "blur",
            }),
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
                updateOn: "blur",
            }),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
                updateOn: "blur",
            }),
        });
        this.form.patchValue({ countryCode });
        // platfrom check
        if ((this.platform.is("mobile") && !this.platform.is("hybrid")) ||
            this.platform.is("desktop")) {
            this.useInputPicker = true;
        }
    }
    onUpdateUser() {
        this.httpError = null;
        this.passError = null;
        let name = this.form.value.name.split(" ");
        let lname = name[1];
        if (name.length > 2) {
            lname += " " + name[2];
        }
        const modUser = {
            name: name[0],
            last_name: lname,
            email: this.form.value.email,
            password: this.form.value.newPassword,
            current_password: this.form.value.password,
            phone1: `${this.form.value.countryCode} ${this.form.value.phone1}`,
            phone2: this.form.value.phone2,
        };
        if (this.form.value.password === null) {
            delete modUser.password;
            delete modUser.current_password;
        }
        else {
            if (this.form.value.newPassword !== this.form.value.confirmPassword) {
                this.passError = "Las contraseñas no concuerdan";
                return;
            }
        }
        this.lc
            .create({
            message: "Alcualizando la informacion...",
        })
            .then((loadingEl) => {
            loadingEl.present();
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set("Authorization", "Bearer " + this.grabbedUser.access_token);
            this.http
                .put(src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["API"] + "/account", modUser, { headers: headers })
                .subscribe((resData) => {
                loadingEl.dismiss();
                if (resData["code"] === 200) {
                    //update user controler
                    this.us.setUser(new src_app_model_user_model__WEBPACK_IMPORTED_MODULE_9__["User"](this.grabbedUser.id, resData["data"].name, resData["data"].last_name, resData["data"].img_profile, resData["data"].email, resData["data"].phone1, resData["data"].phone2, this.grabbedUser.role, this.grabbedUser.access_token));
                    //resets values after succefull update
                    this.form.setValue({
                        name: this.form.value.name,
                        email: this.form.value.email,
                        phone1: this.form.value.phone1,
                        phone2: this.form.value.phone2,
                        password: null,
                        newPassword: null,
                        confirmPassword: null,
                    });
                    this.modalController
                        .create({
                        component: src_app_shared_success_modal_success_modal_component__WEBPACK_IMPORTED_MODULE_13__["SuccessModalComponent"],
                        componentProps: {
                            message: "INFORMACIÓN ACTUALIZADA",
                            redirect: false,
                        },
                        cssClass: "modalSuccess",
                    })
                        .then((modalEl) => {
                        modalEl.present();
                    });
                }
            }, (e) => {
                loadingEl.dismiss();
                this.httpError = e["error"].message;
            });
        });
    }
    onLoadImg() {
        if (!_capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Capacitor"].isPluginAvailable("Camera") || this.useInputPicker) {
            this.hiddenImgInputRef.nativeElement.click();
            return;
        }
        _capacitor_camera__WEBPACK_IMPORTED_MODULE_7__["Camera"].getPhoto({
            quality: 100,
            source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_7__["CameraSource"].Prompt,
            correctOrientation: true,
            height: 450,
            // width: 200,
            resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_7__["CameraResultType"].DataUrl,
            promptLabelPhoto: "Fotos",
            promptLabelPicture: "Cámara",
            promptLabelCancel: "Cancelar",
        })
            .then((image) => {
            this.saveImgToApi(image.dataUrl);
        })
            .catch((e) => {
            console.log(e);
        });
    }
    onLoadImgFromInput(e) {
        const loadedFile = e.target.files[0];
        this.saveImgToApi(loadedFile);
        //save img to api
    }
    getCountryCodes() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let response = yield axios__WEBPACK_IMPORTED_MODULE_14___default.a.get("https://restcountries.eu/rest/v2/region/Americas");
                this.countryCodes = response.data;
                setTimeout(() => this.initializeForm(), 500);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    saveImgToApi(imageData) {
        let imgFile;
        if (typeof imageData === "string") {
            try {
                imgFile = base64toBlob(imageData.replace("data:image/jpeg;base64,", ""), "image/jpeg");
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
        const formData = new FormData();
        formData.append("image", imgFile);
        this.http
            .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["API"] + "/account/image", formData, { headers: this.headers })
            .subscribe((resData) => {
            this.us.dbUserGrab(this.grabbedUser.access_token, this.grabbedUser.role);
            this.modalController
                .create({
                component: src_app_shared_success_modal_success_modal_component__WEBPACK_IMPORTED_MODULE_13__["SuccessModalComponent"],
                componentProps: {
                    message: "INFORMACIÓN ACTUALIZADA",
                    redirect: false,
                },
                cssClass: "modalSuccess",
            })
                .then((modalEl) => {
                modalEl.present();
            });
        }, (err) => {
            console.log(err);
        });
    }
    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
    getProfilePicture() {
        if (this.grabbedUser.img_profile &&
            this.grabbedUser.img_profile !== src_shared_constants__WEBPACK_IMPORTED_MODULE_12__["IMAGE_URL_BLANK"] &&
            this.grabbedUser.img_profile !== "/") {
            return this.grabbedUser.img_profile;
        }
        return "assets/images/avatar.png";
    }
    dbUserGrab(token, role) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set("Authorization", "Bearer " + token);
        this.http
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["API"] + "/account/me", { headers: headers })
            .subscribe((resData) => {
            let img;
            if (resData["data"].img_profile === null) {
                img = null;
            }
            else {
                img = resData["data"].img_profile;
            }
            this.grabbedUser = resData["data"];
        });
    }
    loadFlags() {
        setTimeout(() => {
            let radios = document.getElementsByClassName("alert-radio-label");
            for (let index = 0; index < radios.length; index++) {
                let element = radios[index];
                element.innerHTML = `<img class="country-image" style="width: 30px;height:16px;" src="${this.countryCodes[index].flag}" /> ${element.innerHTML}`;
            }
        }, 100);
    }
};
ProfilePagePage.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] }
];
ProfilePagePage.propDecorators = {
    imgPick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    hiddenImgInputRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ["hiddenImgInput",] }]
};
ProfilePagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "app-profile-page",
        template: _raw_loader_profile_page_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_page_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfilePagePage);



/***/ }),

/***/ "zXXN":
/*!**********************************************************!*\
  !*** ./src/app/user/profile-page/profile-page.module.ts ***!
  \**********************************************************/
/*! exports provided: ProfilePagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePagePageModule", function() { return ProfilePagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _profile_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-page-routing.module */ "4EON");
/* harmony import */ var _profile_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-page.page */ "oUEj");







let ProfilePagePageModule = class ProfilePagePageModule {
};
ProfilePagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            // FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePagePageRoutingModule"]
        ],
        declarations: [_profile_page_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePagePage"]]
    })
], ProfilePagePageModule);



/***/ })

}]);
//# sourceMappingURL=user-profile-page-profile-page-module-es2015.js.map