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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/user/home\" text=\"\" icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title-toolbar\">EDITAR USUARIO</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n\n    <!-- profile Img -->\n    <ion-row class=\"imgCont\">\n      <ion-col>\n        <ion-avatar class=\"ion-margin-start profileImg\">\n          <ion-img [src]=\"getProfilePicture()\"></ion-img>\n        </ion-avatar>\n      </ion-col>\n    </ion-row>\n    <!-- edit icon -->\n    <ion-row>\n      <ion-col>\n        <div class=\"rate-cont\" *ngIf=\"grabbedUser.id !== null\" (click)=\"onLoadImg()\">\n          <ion-icon name=\"pencil\" class=\"profileIcon\"></ion-icon>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <!-- hidden file input -->\n    <div style=\"display: none;\">\n      <input type=\"file\" #hiddenImgInput *ngIf=\"useInputPicker\" (change)=\"onLoadImgFromInput($event)\">\n    </div>\n\n    <!-- Register Inputs -->\n    <form [formGroup]=\"form\" (ngSubmit)=\"onUpdateUser()\">\n      <!-- nombre -->\n      <ion-row>\n        <ion-col size=\"11\">\n          <ion-item>\n            <ion-label position=\"floating\" class=\"main-color\">\n              <ion-icon name=\"person\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Nombre</ion-text>\n            </ion-label>\n            <ion-input type=\"text\" formControlName=\"name\"></ion-input>\n          </ion-item>\n          <!-- error  -->\n          <ion-label *ngIf=\"form.get('name').hasError('required')\" class=\"errorMess\">\n            <ion-icon name=\"alert-circle-outline\" class=\"iconFixG\" color=\"danger\"></ion-icon>\n            <ion-text color=\"danger\">\n              <small> El nombre es requerido</small>\n            </ion-text>\n          </ion-label>\n        </ion-col>\n      </ion-row>\n\n      <!-- email -->\n      <ion-row>\n        <ion-col size=\"11\">\n          <ion-item>\n            <ion-label position=\"floating\">\n              <ion-icon name=\"mail\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Email</ion-text>\n            </ion-label>\n            <ion-input type=\"text\" formControlName=\"email\"></ion-input>\n          </ion-item>\n          <!-- error requerido  -->\n          <ion-label *ngIf=\"form.get('email').hasError('required')\" class=\"errorMess\">\n            <ion-icon name=\"alert-circle-outline\" class=\"iconFixG\" color=\"danger\"></ion-icon>\n            <ion-text color=\"danger\">\n              <small> El email es requerido</small>\n            </ion-text>\n          </ion-label>\n          <!-- error email  -->\n          <ion-label *ngIf=\"form.get('email').hasError('email')\" class=\"errorMess\">\n            <ion-icon name=\"alert-circle-outline\" class=\"iconFixG\" color=\"danger\"></ion-icon>\n            <ion-text color=\"danger\">\n              <small> El email no tiene el formato correcto</small>\n            </ion-text>\n          </ion-label>\n        </ion-col>\n      </ion-row>\n\n      <!-- Número de contacto 1 -->\n      <ion-row>\n        <ion-col size=\"11\">\n          <ion-item>\n            <ion-label position=\"floating\" class=\"main-color\">\n              <ion-icon name=\"call\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Número de contacto</ion-text>\n            </ion-label>\n            <ion-input type=\"string\" formControlName=\"phone1\"></ion-input>\n          </ion-item>\n          <!-- error requerido  -->\n          <ion-label *ngIf=\"form.get('phone1').hasError('required')\" class=\"errorMess\">\n            <ion-icon name=\"alert-circle-outline\" class=\"iconFixG\" color=\"danger\"></ion-icon>\n            <ion-text color=\"danger\">\n              <small> El Numero de contacto es requerido</small>\n            </ion-text>\n          </ion-label>\n        </ion-col>\n      </ion-row>\n\n      <!-- Número de contacto 2 -->\n      <!-- <ion-row>\n        <ion-col size=\"11\">\n          <ion-item>\n            <ion-label position=\"floating\" class=\"main-color\">\n              <ion-icon name=\"call\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Número de contacto 2</ion-text>\n            </ion-label>\n            <ion-input type=\"string\" formControlName=\"phone2\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row> -->\n\n\n      <!-- title -->\n      <div style=\"height: 30px;\"></div>\n      <ion-row class=\"ion-margin-top\">\n        <ion-col size=\"1\" offset=\"1\"></ion-col>\n        <ion-col size=\"8\" class=\"ion-text-center\">\n          <ion-text class=\"main-color ion-text-uppercase title\"><b>CAMBIAR CONTRASEÑA</b></ion-text>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n\n      <!-- Contraseña actual -->\n      <ion-row>\n        <ion-col size=\"11\">\n          <ion-item>\n            <ion-label position=\"floating\" class=\"main-color\">\n              <ion-icon name=\"lock-closed\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Contraseña actual</ion-text>\n            </ion-label>\n            <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n          </ion-item>\n          <!-- http error  -->\n          <ion-label *ngIf=\"httpError\" class=\"errorMess\">\n            <ion-icon name=\"alert-circle-outline\" class=\"iconFixG\" color=\"danger\"></ion-icon>\n            <ion-text color=\"danger\">\n              <small> {{ httpError }}</small>\n            </ion-text>\n          </ion-label>\n        </ion-col>\n      </ion-row>\n\n      <!-- Nueva contraseña -->\n      <ion-row>\n        <ion-col size=\"11\">\n          <ion-item>\n            <ion-label position=\"floating\" class=\"main-color\">\n              <ion-icon name=\"lock-closed\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Nueva contraseña</ion-text>\n            </ion-label>\n            <ion-input type=\"password\" formControlName=\"newPassword\"></ion-input>\n          </ion-item>\n          <!-- password error  -->\n          <ion-label *ngIf=\"passError\" class=\"errorMess\">\n            <ion-icon name=\"alert-circle-outline\" class=\"iconFixG\" color=\"danger\"></ion-icon>\n            <ion-text color=\"danger\">\n              <small> {{ passError }}</small>\n            </ion-text>\n          </ion-label>\n        </ion-col>\n      </ion-row>\n\n      <!-- Repetir nueva contraseña -->\n      <ion-row>\n        <ion-col size=\"11\">\n          <ion-item>\n            <ion-label position=\"floating\" class=\"main-color\">\n              <ion-icon name=\"lock-closed\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Repetir nueva contraseña</ion-text>\n            </ion-label>\n            <ion-input type=\"password\" formControlName=\"confirmPassword\"></ion-input>\n          </ion-item>\n          <!-- password error  -->\n          <ion-label *ngIf=\"passError\" class=\"errorMess\">\n            <ion-icon name=\"alert-circle-outline\" class=\"iconFixG\" color=\"danger\"></ion-icon>\n            <ion-text color=\"danger\">\n              <small> {{ passError }}</small>\n            </ion-text>\n          </ion-label>\n        </ion-col>\n      </ion-row>\n\n      <!-- BTN -->\n      <ion-row class=\"ion-margin-top ion-margin-bottom\">\n        <ion-col offset=\"1\">\n          <ion-button size=\"5\" expand=\"block\" class=\"ion-text-uppercase\" type=\"submit\" [disabled]=\"!form.valid\">\n            GUARDAR CAMBIOS\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"2\"></ion-col>\n      </ion-row>\n    </form>\n\n\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "cdKE":
/*!**********************************************************!*\
  !*** ./src/app/user/profile-page/profile-page.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profileImg {\n  height: 120px;\n  width: 120px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.imgCont {\n  margin-top: 35px;\n}\n\n.profileIcon {\n  font-size: 16px;\n  color: white;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.rate-cont {\n  border-radius: 50px;\n  height: 30px;\n  width: 30px;\n  background-color: #53657e;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: -22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2ZpbGUtcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDRTtFQUNFLGdCQUFBO0FBRUo7O0FBQUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFHSjs7QUFERTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBSUoiLCJmaWxlIjoicHJvZmlsZS1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlSW1ne1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgfVxuICAuaW1nQ29udHtcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICB9XG4gIC5wcm9maWxlSWNvbntcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgfVxuICAucmF0ZS1jb250e1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MzY1N2U7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogLTIycHg7XG4gIH1cbiAgIl19 */");

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
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_model_user_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/model/user.model */ "UbF0");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _success_modal_success_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./success-modal/success-modal.component */ "R7R6");












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
let ProfilePagePage = class ProfilePagePage {
    constructor(us, lc, http, modalController, platform) {
        this.us = us;
        this.lc = lc;
        this.http = http;
        this.modalController = modalController;
        this.platform = platform;
        this.imgPick = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.useInputPicker = false;
    }
    ngOnInit() {
        this.userSub = this.us.loggedUser.subscribe(user => {
            this.grabbedUser = user;
            console.log(user);
        });
        //api headers
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Authorization', 'Bearer ' + this.grabbedUser.access_token);
        // updates to the most current info from DB
        this.us.dbUserGrab(this.grabbedUser.access_token, this.grabbedUser.role);
        let phone1;
        let phone2;
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
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.grabbedUser.name + ' ' + this.grabbedUser.last_name, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.grabbedUser.email, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]
            }),
            phone1: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](phone1, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            }),
            phone2: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](phone2, {
                updateOn: 'blur',
            }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
                updateOn: 'blur',
            }),
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
                updateOn: 'blur',
            }),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
                updateOn: 'blur',
            }),
        });
        // platfrom check
        if ((this.platform.is('mobile') && !this.platform.is('hybrid')) || this.platform.is('desktop')) {
            this.useInputPicker = true;
        }
    }
    onUpdateUser() {
        // console.log(this.form);
        this.httpError = null;
        this.passError = null;
        let name = this.form.value.name.split(" ");
        let lname = name[1];
        if (name.length > 2) {
            lname += ' ' + name[2];
        }
        // console.log(name[0], lname);
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
        // console.log(this.form, this.form.errors.name);
        this.lc.create({
            message: 'Alcualizando la informacion...'
        }).then(loadingEl => {
            loadingEl.present();
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Authorization', 'Bearer ' + this.grabbedUser.access_token);
            this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["API"] + '/account', modUser, { headers: headers })
                .subscribe(resData => {
                loadingEl.dismiss();
                // console.log(resData);
                if (resData['code'] === 200) {
                    //update user controler
                    this.us.setUser(new src_app_model_user_model__WEBPACK_IMPORTED_MODULE_8__["User"](this.grabbedUser.id, resData['data'].name, resData['data'].last_name, resData['data'].img_profile, resData['data'].email, resData['data'].phone1, resData['data'].phone2, this.grabbedUser.role, this.grabbedUser.access_token));
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
                }
            }, e => {
                // console.log(e['error'].message);
                loadingEl.dismiss();
                this.httpError = e['error'].message;
            });
        });
    }
    onLoadImg() {
        if (!_capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Capacitor"].isPluginAvailable('Camera') || this.useInputPicker) {
            this.hiddenImgInputRef.nativeElement.click();
            return;
        }
        _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"].Camera.getPhoto({
            quality: 25,
            source: _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["CameraSource"].Prompt,
            correctOrientation: true,
            height: 150,
            // width: 200,
            resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["CameraResultType"].DataUrl,
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
        const formData = new FormData();
        formData.append('image', imgFile);
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["API"] + '/account/image', formData, { headers: this.headers })
            .subscribe(resData => {
            // console.log(resData);
            this.us.dbUserGrab(this.grabbedUser.access_token, this.grabbedUser.role);
            this.modalController.create({
                component: _success_modal_success_modal_component__WEBPACK_IMPORTED_MODULE_11__["SuccessModalComponent"],
                cssClass: 'modalSuccess',
            }).then(modalEl => {
                modalEl.present();
            });
        }, err => {
            console.log(err);
        });
    }
    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
    getProfilePicture() {
        if (this.grabbedUser.img_profile && this.grabbedUser.img_profile !== '/') {
            return `http://workintest.herokuapp.com${this.grabbedUser.img_profile}`;
        }
        return 'assets/images/avatar.png';
    }
};
ProfilePagePage.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] }
];
ProfilePagePage.propDecorators = {
    imgPick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    hiddenImgInputRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['hiddenImgInput',] }]
};
ProfilePagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-profile-page',
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