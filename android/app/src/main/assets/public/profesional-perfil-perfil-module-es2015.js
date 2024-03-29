(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profesional-perfil-perfil-module"],{

/***/ "8nI6":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profesional/perfil/perfil.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/profesional/home\" text=\"\" icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title-toolbar\">EDITAR USUARIO</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <!-- profile Img -->\n    <ion-row class=\"imgCont\">\n      <ion-col>\n        <div class=\"ion-margin-start profileImg\" [ngStyle]=\"{'background-image': getUrl()}\">\n        </div>\n      </ion-col>\n    </ion-row>\n    <!-- edit icon -->\n    <ion-row>\n      <ion-col>\n        <div class=\"rate-cont\" *ngIf=\"grabbedUser.id !== null\" (click)=\"onLoadImg()\">\n          <ion-icon name=\"pencil\" class=\"profileIcon\"></ion-icon>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <!-- hidden file input -->\n    <div style=\"display: none;\">\n      <input type=\"file\" #hiddenImgInput *ngIf=\"useInputPicker\" (change)=\"onLoadImgFromInput($event)\">\n    </div>\n\n    <!-- Register Inputs -->\n    <form [formGroup]=\"form\" (ngSubmit)=\"onUpdateUser()\">\n      <!-- nombre -->\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-item>\n            <ion-label position=\"floating\" class=\"main-color\">\n              <ion-icon name=\"person\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Nombre</ion-text>\n            </ion-label>\n            <ion-input type=\"text\" formControlName=\"name\"></ion-input>\n          </ion-item>\n          <!-- error  -->\n          <ion-label *ngIf=\"form.get('name').hasError('required')\" class=\"errorMess\">\n            <ion-icon name=\"alert-circle-outline\" class=\"iconFixG\" color=\"danger\"></ion-icon>\n            <ion-text color=\"danger\">\n              <small> El nombre es requerido</small>\n            </ion-text>\n          </ion-label>\n        </ion-col>\n      </ion-row>\n\n      <!-- email -->\n      <ion-row>\n        \n        <ion-col size=\"12\">\n          <ion-item>\n            <ion-label position=\"floating\">\n              <ion-icon name=\"mail\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Email</ion-text>\n            </ion-label>\n            <ion-input disabled type=\"text\" formControlName=\"email\"></ion-input>\n          </ion-item>\n          <!-- error requerido  -->\n          <ion-label *ngIf=\"form.get('email').hasError('required')\" class=\"errorMess\">\n            <ion-icon name=\"alert-circle-outline\" class=\"iconFixG\" color=\"danger\"></ion-icon>\n            <ion-text color=\"danger\">\n              <small> El email es requerido</small>\n            </ion-text>\n          </ion-label>\n          <!-- error email  -->\n          <ion-label *ngIf=\"form.get('email').hasError('email')\" class=\"errorMess\">\n            <ion-icon name=\"alert-circle-outline\" class=\"iconFixG\" color=\"danger\"></ion-icon>\n            <ion-text color=\"danger\">\n              <small> El email no tiene el formato correcto</small>\n            </ion-text>\n          </ion-label>\n        </ion-col>\n        \n      </ion-row>\n\n      <!-- Número de contacto 1 -->\n      <ion-row>\n        \n        <ion-col size=\"12\">\n          <ion-item>\n            <ion-label position=\"floating\" class=\"main-color\">\n              <ion-icon name=\"call\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Número de contacto 1</ion-text>\n            </ion-label>\n            <ion-input type=\"string\" formControlName=\"phone1\"></ion-input>\n          </ion-item>\n          <!-- error requerido  -->\n          <ion-label *ngIf=\"form.get('phone1').hasError('required')\" class=\"errorMess\">\n            <ion-icon name=\"alert-circle-outline\" class=\"iconFixG\" color=\"danger\"></ion-icon>\n            <ion-text color=\"danger\">\n              <small> El Numero de contacto es requerido</small>\n            </ion-text>\n          </ion-label>\n        </ion-col>\n        \n      </ion-row>\n\n      <!-- Número de contacto 2 -->\n      <ion-row>\n        \n        <ion-col size=\"12\">\n          <ion-item>\n            <ion-label position=\"floating\" class=\"main-color\">\n              <ion-icon name=\"call\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Número de contacto 2</ion-text>\n            </ion-label>\n            <ion-input type=\"string\" formControlName=\"phone2\"></ion-input>\n          </ion-item>\n        </ion-col>\n        \n      </ion-row>\n\n\n      <!-- title -->\n      <div style=\"height: 30px;\"></div>\n      <ion-row class=\"ion-margin-top\">\n        \n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-text class=\"main-color ion-text-uppercase title\"><b>CAMBIAR CONTRASEÑA</b></ion-text>\n        </ion-col>\n        \n      </ion-row>\n\n      <!-- Contraseña actual -->\n      <ion-row>\n        \n        <ion-col size=\"12\">\n          <ion-item>\n            <ion-label position=\"floating\" class=\"main-color\">\n              <ion-icon name=\"lock-closed\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Contraseña actual</ion-text>\n            </ion-label>\n            <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n          </ion-item>\n          <!-- http error  -->\n          <ion-label *ngIf=\"httpError\" class=\"errorMess\">\n            <ion-icon name=\"alert-circle-outline\" class=\"iconFixG\" color=\"danger\"></ion-icon>\n            <ion-text color=\"danger\">\n              <small> {{ httpError }}</small>\n            </ion-text>\n          </ion-label>\n        </ion-col>\n        \n      </ion-row>\n\n      <!-- Nueva contraseña -->\n      <ion-row>\n          \n        <ion-col size=\"12\">\n          <ion-item>\n            <ion-label position=\"floating\" class=\"main-color\">\n              <ion-icon name=\"lock-closed\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Nueva contraseña</ion-text>\n            </ion-label>\n            <ion-input type=\"password\" formControlName=\"newPassword\"></ion-input>\n          </ion-item>\n          <!-- password error  -->\n          <ion-label *ngIf=\"passError\" class=\"errorMess\">\n            <ion-icon name=\"alert-circle-outline\" class=\"iconFixG\" color=\"danger\"></ion-icon>\n            <ion-text color=\"danger\">\n              <small> {{ passError }}</small>\n            </ion-text>\n          </ion-label>\n        </ion-col>\n        \n      </ion-row>\n\n      <!-- Repetir nueva contraseña -->\n      <ion-row>\n        \n        <ion-col size=\"12\">\n          <ion-item>\n            <ion-label position=\"floating\" class=\"main-color\">\n              <ion-icon name=\"lock-closed\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Repetir nueva contraseña</ion-text>\n            </ion-label>\n            <ion-input type=\"password\" formControlName=\"confirmPassword\"></ion-input>\n          </ion-item>\n          <!-- password error  -->\n          <ion-label *ngIf=\"passError\" class=\"errorMess\">\n            <ion-icon name=\"alert-circle-outline\" class=\"iconFixG\" color=\"danger\"></ion-icon>\n            <ion-text color=\"danger\">\n              <small> {{ passError }}</small>\n            </ion-text>\n          </ion-label>\n        </ion-col>\n        \n      </ion-row>\n\n      <!-- BTN -->\n      <ion-row class=\"ion-margin-top ion-margin-bottom\">\n        \n        <ion-col size=\"12\">\n          <ion-button size=\"5\" expand=\"block\" class=\"ion-text-uppercase\" type=\"submit\" [disabled]=\"!form.valid\">\n            GUARDAR CAMBIOS\n          </ion-button>\n        </ion-col>\n        \n      </ion-row>\n    </form>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "A+Ue":
/*!*************************************************************!*\
  !*** ./src/app/profesional/perfil/perfil-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: PerfilPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageRoutingModule", function() { return PerfilPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perfil.page */ "hnL7");




const routes = [
    {
        path: '',
        component: _perfil_page__WEBPACK_IMPORTED_MODULE_3__["PerfilPage"]
    }
];
let PerfilPageRoutingModule = class PerfilPageRoutingModule {
};
PerfilPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PerfilPageRoutingModule);



/***/ }),

/***/ "gr1p":
/*!*****************************************************!*\
  !*** ./src/app/profesional/perfil/perfil.module.ts ***!
  \*****************************************************/
/*! exports provided: PerfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function() { return PerfilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./perfil-routing.module */ "A+Ue");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./perfil.page */ "hnL7");







let PerfilPageModule = class PerfilPageModule {
};
PerfilPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            // FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__["PerfilPageRoutingModule"]
        ],
        declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_6__["PerfilPage"]]
    })
], PerfilPageModule);



/***/ }),

/***/ "hnL7":
/*!***************************************************!*\
  !*** ./src/app/profesional/perfil/perfil.page.ts ***!
  \***************************************************/
/*! exports provided: PerfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPage", function() { return PerfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_perfil_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./perfil.page.html */ "8nI6");
/* harmony import */ var _perfil_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./perfil.page.scss */ "j+vU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/core */ "FUe0");
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/camera */ "/s3u");
/* harmony import */ var src_app_model_user_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/model/user.model */ "UbF0");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _success_modal_success_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./success-modal/success-modal.component */ "yw4M");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);













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
let PerfilPage = class PerfilPage {
    constructor(us, lc, modalController, platform) {
        this.us = us;
        this.lc = lc;
        this.modalController = modalController;
        this.platform = platform;
        this.imgPick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.useInputPicker = false;
    }
    ngOnInit() {
        this.userSub = this.us.loggedUser.subscribe(user => {
            this.grabbedUser = user;
        });
        //api headers
        this.headers = 'Bearer ' + this.grabbedUser.access_token;
        // updates to the most current info from DB
        let phone1;
        let phone2;
        this.us.dbUserGrab(this.grabbedUser.access_token, this.grabbedUser.role);
        if (this.grabbedUser.phone1 === '-') {
            phone1 = null;
        }
        else {
            phone1 = this.grabbedUser.phone1;
        }
        if (this.grabbedUser.phone2 === '-') {
            phone2 = null;
        }
        else {
            phone2 = this.grabbedUser.phone2;
        }
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.grabbedUser.name + ' ' + this.grabbedUser.last_name, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.grabbedUser.email, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]
            }),
            phone1: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](phone1, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
            phone2: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](phone2, {
                updateOn: 'blur',
            }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                updateOn: 'blur',
            }),
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                updateOn: 'blur',
            }),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                updateOn: 'blur',
            }),
        });
        // platfrom check
        if ((this.platform.is('mobile') && !this.platform.is('hybrid')) || this.platform.is('desktop')) {
            this.useInputPicker = true;
        }
        this.ckeckUpdateUser(this.headers);
    }
    ckeckUpdateUser(token) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield axios__WEBPACK_IMPORTED_MODULE_12___default.a.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["API"] + '/account/me', { headers: { Authorization: token } }).then(res => {
                this.form.setValue({
                    name: res.data.data.name + ' ' + res.data.data.last_name,
                    email: res.data.data.email,
                    phone1: res.data.data.phone1,
                    phone2: res.data.data.phone2,
                    password: null,
                    newPassword: null,
                    confirmPassword: null,
                });
            });
        });
    }
    onUpdateUser() {
        this.httpError = null;
        this.passError = null;
        let name = this.form.value.name.split(" ");
        let lname = name[1];
        if (name.length > 2) {
            lname += ' ' + name[2];
        }
        const modUser = {
            name: name[0],
            last_name: lname,
            email: this.form.value.email,
            password: this.form.value.newPassword,
            current_password: this.form.value.password,
            phone1: this.form.value.phone1,
            phone2: this.form.value.phone2
        };
        if (this.form.value.password === null) {
            delete modUser.password;
            delete modUser.current_password;
        }
        else {
            if (this.form.value.newPassword !== this.form.value.confirmPassword) {
                this.passError = 'Las contraseñas no concuerdan';
                return;
            }
        }
        this.lc.create({
            message: 'Alcualizando la informacion...'
        }).then(loadingEl => {
            loadingEl.present();
            let headers = 'Bearer ' + this.grabbedUser.access_token;
            axios__WEBPACK_IMPORTED_MODULE_12___default.a.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["API"] + '/account', modUser, { headers: { Authorization: this.headers } }).then(resData => {
                loadingEl.dismiss();
                //update user controler
                this.us.setUser(new src_app_model_user_model__WEBPACK_IMPORTED_MODULE_8__["User"](this.grabbedUser.id, resData.data.data.name, resData.data.data.last_name, resData.data.data.img_profile, resData.data.data.email, resData.data.data.phone1, resData.data.data.phone2, this.grabbedUser.role, this.grabbedUser.access_token));
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
                this.modalController.create({
                    component: _success_modal_success_modal_component__WEBPACK_IMPORTED_MODULE_11__["SuccessModalComponent"],
                    cssClass: 'modalSuccess',
                }).then(modalEl => {
                    modalEl.present();
                });
            }).catch(err => {
                loadingEl.dismiss();
                this.httpError = err['error'].message;
            });
        });
    }
    onLoadImg() {
        if (!_capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Capacitor"].isPluginAvailable('Camera') || this.useInputPicker) {
            this.hiddenImgInputRef.nativeElement.click();
            return;
        }
        _capacitor_camera__WEBPACK_IMPORTED_MODULE_7__["Camera"].getPhoto({
            quality: 100,
            source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_7__["CameraSource"].Prompt,
            correctOrientation: true,
            // height: 500,
            width: 500,
            resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_7__["CameraResultType"].DataUrl,
            promptLabelPhoto: 'Fotos',
            promptLabelPicture: 'Cámara',
            promptLabelCancel: 'Cancelar'
        }).then(image => {
            this.saveImgToApi(image.dataUrl);
        }).catch(e => {
            console.log(e);
        });
    }
    getUrl() {
        if (!this.grabbedUser.img_profile || this.grabbedUser.img_profile === '' || this.grabbedUser.img_profile === 'http://167.71.251.136/storage/') {
            return "url('assets/images/avatar.png')";
        }
        else {
            return `url(${this.grabbedUser.img_profile})`;
        }
    }
    onLoadImgFromInput(e) {
        const loadedFile = e.target.files[0];
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
        const formData = new FormData();
        formData.append('image', imgFile);
        axios__WEBPACK_IMPORTED_MODULE_12___default.a.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["API"] + '/account/image', formData, { headers: { Authorization: this.headers } }).then(resData => {
            this.us.dbUserGrab(this.grabbedUser.access_token, this.grabbedUser.role);
            this.modalController.create({
                component: _success_modal_success_modal_component__WEBPACK_IMPORTED_MODULE_11__["SuccessModalComponent"],
                cssClass: 'modalSuccess',
            }).then(modalEl => {
                modalEl.present();
            });
        }).catch(err => {
            console.log(err);
        });
    }
    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
};
PerfilPage.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] }
];
PerfilPage.propDecorators = {
    imgPick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    hiddenImgInputRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['hiddenImgInput',] }]
};
PerfilPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-perfil',
        template: _raw_loader_perfil_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_perfil_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PerfilPage);



/***/ }),

/***/ "j+vU":
/*!*****************************************************!*\
  !*** ./src/app/profesional/perfil/perfil.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profileImg {\n  height: 120px;\n  width: 120px;\n  margin-left: auto;\n  margin-right: auto;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 50%;\n}\n\n.imgCont {\n  margin-top: 35px;\n}\n\n.profileIcon {\n  font-size: 16px;\n  color: white;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.rate-cont {\n  border-radius: 50px;\n  height: 30px;\n  width: 30px;\n  background-color: #53657e;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: -22px;\n}\n\nform {\n  padding: 0 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BlcmZpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNFO0VBQ0UsZ0JBQUE7QUFFSjs7QUFBRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFJSjs7QUFGRTtFQUNFLGVBQUE7QUFLSiIsImZpbGUiOiJwZXJmaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGVJbWd7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG4gIC5pbWdDb250e1xuICAgIG1hcmdpbi10b3A6IDM1cHg7XG4gIH1cbiAgLnByb2ZpbGVJY29ue1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG4gIC5yYXRlLWNvbnR7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUzNjU3ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAtMjJweDtcbiAgfVxuICBmb3JtIHtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gIH1cbiAgXG4gICJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=profesional-perfil-perfil-module-es2015.js.map