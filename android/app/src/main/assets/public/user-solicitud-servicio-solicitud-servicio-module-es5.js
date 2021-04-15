(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-solicitud-servicio-solicitud-servicio-module"], {
    /***/
    "Pl/+":
    /*!******************************************************************************!*\
      !*** ./src/app/user/solicitud-servicio/solicitud-servicio-routing.module.ts ***!
      \******************************************************************************/

    /*! exports provided: SolicitudServicioPageRoutingModule */

    /***/
    function Pl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SolicitudServicioPageRoutingModule", function () {
        return SolicitudServicioPageRoutingModule;
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


      var _solicitud_servicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./solicitud-servicio.page */
      "X9Te");

      var routes = [{
        path: '',
        component: _solicitud_servicio_page__WEBPACK_IMPORTED_MODULE_3__["SolicitudServicioPage"]
      }];

      var SolicitudServicioPageRoutingModule = function SolicitudServicioPageRoutingModule() {
        _classCallCheck(this, SolicitudServicioPageRoutingModule);
      };

      SolicitudServicioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SolicitudServicioPageRoutingModule);
      /***/
    },

    /***/
    "QWDo":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/solicitud-servicio/solicitud-servicio.page.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function QWDo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/user/profesional-detail\" text=\"\" icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title class=\"title-toolbar\">SOLICITUD DE SERVICIO</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- profesional card item -->\n  <div class=\"no-border\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n        <!-- profile img -->\n        <ion-col size=\"4\" offset=\"1\">\n          <ion-avatar class=\"profileImg\">\n            <ion-img src=\"{{ !selectedProfPhoto ? 'assets/images/avatar.png' : selectedProfPhoto }}\"></ion-img>\n          </ion-avatar>\n        </ion-col>\n\n        <!-- title -->\n        <ion-col size=\"7\">\n          <ion-text>\n            <span class=\"titleSelect main-color ion-text-capitalize\">\n              {{ selectedProfesional.supplierName }} {{ selectedProfesional.supplierLastName }}\n            </span><br>\n            <ion-badge color=\"primary\" class=\"badge-text ion-text-capitalize\">{{ selectedProfesional.categoryName }}\n            </ion-badge><br>\n            <p class=\"textSelect main-color badge-text ion-text-capitalize\" style=\"margin-top: 0; margin-bottom: 0;\">{{\n              selectedProfesional.communeName }}</p>\n          </ion-text>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <ion-grid>\n\n    <!-- title -->\n    <ion-row>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-text class=\"main-color title\"><b>Cuéntale al profesional qué necesitas</b></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n    <form [formGroup]=\"form\" (ngSubmit)=\"confirmRequest()\">\n      <!-- text-area -->\n      <ion-row class=\"ion-margin-top\">\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"10\" class=\"border ion-text-center\">\n          <ion-item lines=\"none\">\n            <ion-textarea class=\"textarea\" rows=\"3\" cols=\"20\" formControlName=\"description\"\n              placeholder=\"Describe lo más posible y claro el trabajo, así podremos dar respuesta más rápido.\">\n            </ion-textarea>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n\n      <!-- text -->\n      <ion-row class=\"ion-margin-top\">\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"10\" class=\"ion-text-center\">\n          <ion-text class=\"main-color regText\"><b>Agrega imágenes que ayudarán al profesional a responder mejor a tu\n              solicitud.</b></ion-text>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n\n      <!-- images -->\n      <ion-row class=\"ion-align-items-center\">\n        <ion-col size=\"7\" offset=\"1\">\n          <ion-slides>\n\n            <!-- slide -->\n            <ion-slide *ngFor=\"let image of loadedImagesDisplay\" [loadedImagesDisplay]='loadedImagesDisplay'>\n              <ion-img src=\"{{ image }}\" class=\"imgSlide\">\n              </ion-img>\n            </ion-slide>\n\n          </ion-slides>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-button (click)=\"onLoadImg()\" shape=\"round\">\n            <ion-icon name=\"add\" slot=\"end\" color=\"light\" class=\"rating-text\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n\n      <!-- hidden file input -->\n      <div style=\"display: none;\">\n        <input type=\"file\" #hiddenImgInput *ngIf=\"useInputPicker\" (change)=\"onLoadImgFromInput($event)\">\n      </div>\n\n      <!-- Fecha requerida -->\n      <ion-row>\n        <ion-col size=\"11\">\n          <ion-item>\n            <ion-label class=\"main-color\" position=\"floating\">\n              <ion-icon src=\"/assets/icon/ic_date_range.svg\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Fecha requerida</ion-text>\n            </ion-label>\n            <ion-datetime formControlName=\"date_required\" placeholder=\"Definir fecha\"\n              [min]=\"minDate.format('YYYY-MM-DD')\" (ngModelChange)=\"onDateChange($event)\">\n            </ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <!-- Rango de horas -->\n\n      <!-- pickers -->\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-item>\n            <ion-label class=\"main-color\" position=\"floating\">\n              <ion-icon src=\"/assets/icon/ic_schedule.svg\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Hora inicial</ion-text>\n            </ion-label>\n            <ion-datetime formControlName=\"sHour\" display-format=\"h:mm A\" picker-format=\"h:mm A\"\n              [min]=\"minDate.format('YYYY-MM-DD')\">\n            </ion-datetime>\n          </ion-item>\n        </ion-col>\n\n        <ion-col size=\"5\">\n          <ion-item>\n            <ion-label class=\"main-color\" position=\"floating\">\n              <ion-icon src=\"/assets/icon/ic_schedule.svg\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Hora final</ion-text>\n            </ion-label>\n            <ion-datetime formControlName=\"eHour\" display-format=\"h:mm A\" picker-format=\"h:mm A\"\n              [min]=\"minDate.format('YYYY-MM-DD')\">\n            </ion-datetime>\n          </ion-item>\n        </ion-col>\n\n        <!-- error  -->\n        <ion-col size=\"12\" *ngIf=\"showError\" >\n          <ion-label class=\"errorMess\">\n            <ion-icon name=\"alert-circle-outline\" class=\"iconFixG\" color=\"danger\"></ion-icon>\n            <ion-text class=\"text-center\" color=\"danger\">\n              <small> La hora de inicio debe ser menor que la hora de fin</small>\n            </ion-text>\n          </ion-label>\n        </ion-col>\n      </ion-row>\n\n      <!-- enviar solicitud BTN -->\n      <ion-row class=\"ion-margin-top ion-margin-bottom\">\n        <ion-col size=\"1\"></ion-col>\n        <ion-col>\n          <ion-button size=\"5\" expand=\"block\" class=\"ion-text-uppercase\" type=\"submit\" [disabled]=\"!form.valid\">\n            CONFIRMAR SOLICITUD\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n    </form>\n\n  </ion-grid>\n\n</ion-content>";
      /***/
    },

    /***/
    "X9Te":
    /*!********************************************************************!*\
      !*** ./src/app/user/solicitud-servicio/solicitud-servicio.page.ts ***!
      \********************************************************************/

    /*! exports provided: SolicitudServicioPage */

    /***/
    function X9Te(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SolicitudServicioPage", function () {
        return SolicitudServicioPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_solicitud_servicio_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./solicitud-servicio.page.html */
      "QWDo");
      /* harmony import */


      var _solicitud_servicio_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./solicitud-servicio.page.scss */
      "t/q4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _confirm_success_modal_confirm_success_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./confirm-success-modal/confirm-success-modal.component */
      "00c0");
      /* harmony import */


      var src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/solicitud.service */
      "rLtr");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);

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

      var SolicitudServicioPage = /*#__PURE__*/function () {
        // slideOptions = {
        //   initialSlide: 0,
        //   slidesPerView: 2,
        //   autoplay: true
        // };
        function SolicitudServicioPage(modalController, router, menuController, solServ, http, us, lc, platform) {
          _classCallCheck(this, SolicitudServicioPage);

          this.modalController = modalController;
          this.router = router;
          this.menuController = menuController;
          this.solServ = solServ;
          this.http = http;
          this.us = us;
          this.lc = lc;
          this.platform = platform; // selectedProfesional: ProfCategory = new ProfCategory(
          //   null, null, null, null, null, null, null, null, null, null, null, null, null
          // );

          this.minDate = moment__WEBPACK_IMPORTED_MODULE_13__().add('hour', 1);
          this.selectedProfesional = {
            supplierName: null,
            supplierLastName: null,
            categoryName: null,
            communeName: null
          };
          this.useInputPicker = false;
          this.loadedImages = [];
          this.loadedImagesDisplay = [];
          this.showError = false;
        }

        _createClass(SolicitudServicioPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.userSub = this.us.loggedUser.subscribe(function (user) {
              _this.grabbedUser = user;
            }); // this.selectedProfesional = this.solServ.solicitud.proPerfil;

            this.selectedProfesional.supplierName = this.solServ.solicitud.proPerfil.supplierName;
            this.selectedProfesional.supplierLastName = this.solServ.solicitud.proPerfil.supplierLastName;
            this.selectedProfesional.categoryName = this.solServ.solicitud.proPerfil.categoryName;
            this.selectedProfesional.communeName = this.solServ.solicitud.proPerfil.communeName;
            this.selectedProfPhoto = this.solServ.solicitud.proPhoto;
            this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]().set('Authorization', 'Bearer ' + this.grabbedUser.access_token); // platfrom Checker

            if (this.platform.is('mobile') && !this.platform.is('hybrid') || this.platform.is('desktop')) {
              this.useInputPicker = true;
            } //form


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
                updateOn: 'blur'
              })
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.menuController.enable(true, 'user');
          }
        }, {
          key: "openMenu",
          value: function openMenu() {
            this.menuController.open();
          }
        }, {
          key: "onLoadImg",
          value: function onLoadImg() {
            var _this2 = this;

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
              promptLabelPhoto: 'Fotos',
              promptLabelPicture: 'Camara',
              promptLabelCancel: 'Cancelar'
            }).then(function (image) {
              _this2.saveImgToApi(image.dataUrl);
            })["catch"](function (e) {
              console.log(e);
            });
          }
        }, {
          key: "onLoadImgFromInput",
          value: function onLoadImgFromInput(e) {
            var _this3 = this;

            var loadedFile = e.target.files[0];
            this.saveImgToApi(loadedFile); //converting images to blob for diplaying

            var fr = new FileReader();

            fr.onload = function () {
              _this3.loadedImagesDisplay.push(fr.result.toString());
            };

            fr.readAsDataURL(e.target.files[0]);
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

            this.loadedImages.push(imgFile);
          }
        }, {
          key: "confirmRequest",
          value: function confirmRequest() {
            var _this4 = this;

            //format date
            var wDate = this.form.value.date_required.split('T');
            wDate = wDate[0];
            wDate = wDate.split('-');
            wDate = wDate[2] + '/' + wDate[1] + '/' + wDate[0];
            var formData = new FormData();
            this.loadedImages.forEach(function (image) {
              formData.append('images[]', image);
            });
            formData.append('cummune_id', this.solServ.solicitud.comuna_id);
            formData.append('description', this.form.value.description);
            formData.append('adress', this.form.value.adress);
            formData.append('adress_detail', this.form.value.adress);
            formData.append('extra_instructions', this.solServ.solicitud.instructions);
            formData.append('date_required', wDate);
            formData.append('hours', this.form.value.sHour + "/" + this.form.value.eHour);
            formData.append('professional_profile_id', this.solServ.solicitud.proPerfil_id);
            var startHour = moment__WEBPACK_IMPORTED_MODULE_13__(this.form.value.sHour);
            var endHour = moment__WEBPACK_IMPORTED_MODULE_13__(this.form.value.eHour);

            if (startHour.isAfter(endHour)) {
              this.showError = true;
              return;
            }

            this.showError = false;
            this.lc.create({
              message: 'Creando su solicitud...'
            }).then(function (loadingEl) {
              loadingEl.present();

              _this4.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["API"] + '/client/requestservice', formData, {
                headers: _this4.headers
              }).subscribe(function (resData) {
                loadingEl.dismiss();

                _this4.modalController.create({
                  component: _confirm_success_modal_confirm_success_modal_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmSuccessModalComponent"],
                  cssClass: 'modalSuccess'
                }).then(function (modalEl) {
                  modalEl.present();
                });
              }, function (err) {
                loadingEl.dismiss();
                console.log(err);
              });
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.userSub.unsubscribe();
          }
        }]);

        return SolicitudServicioPage;
      }();

      SolicitudServicioPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
        }, {
          type: src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_9__["SolicitudService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }];
      };

      SolicitudServicioPage.propDecorators = {
        hiddenImgInputRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['hiddenImgInput']
        }]
      };
      SolicitudServicioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-solicitud-servicio',
        template: _raw_loader_solicitud_servicio_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_solicitud_servicio_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SolicitudServicioPage);
      /***/
    },

    /***/
    "Y6vn":
    /*!**********************************************************************!*\
      !*** ./src/app/user/solicitud-servicio/solicitud-servicio.module.ts ***!
      \**********************************************************************/

    /*! exports provided: SolicitudServicioPageModule */

    /***/
    function Y6vn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SolicitudServicioPageModule", function () {
        return SolicitudServicioPageModule;
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


      var _solicitud_servicio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./solicitud-servicio-routing.module */
      "Pl/+");
      /* harmony import */


      var _solicitud_servicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./solicitud-servicio.page */
      "X9Te");

      var SolicitudServicioPageModule = function SolicitudServicioPageModule() {
        _classCallCheck(this, SolicitudServicioPageModule);
      };

      SolicitudServicioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _solicitud_servicio_routing_module__WEBPACK_IMPORTED_MODULE_5__["SolicitudServicioPageRoutingModule"]],
        declarations: [_solicitud_servicio_page__WEBPACK_IMPORTED_MODULE_6__["SolicitudServicioPage"]]
      })], SolicitudServicioPageModule);
      /***/
    },

    /***/
    "t/q4":
    /*!**********************************************************************!*\
      !*** ./src/app/user/solicitud-servicio/solicitud-servicio.page.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function tQ4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".no-border {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n\n.profileImg {\n  margin-left: 10px;\n  height: 75px;\n  width: 75px;\n}\n\n.titleSelect {\n  font-size: 23px;\n  font-weight: bold;\n}\n\n.tittle {\n  font-size: 18px;\n}\n\n.border {\n  border: 1px solid #009ACE;\n}\n\n.regText {\n  font-size: 14px;\n}\n\n.imgSingle {\n  height: 125px;\n}\n\n.locate-cont {\n  border-radius: 50px;\n  height: 50px;\n  width: 50px;\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #009ACE;\n}\n\n.rating-text {\n  font-size: 26px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.textarea::-moz-placeholder {\n  color: #009ACE;\n}\n\n.textarea::placeholder {\n  color: #009ACE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvbGljaXR1ZC1zZXJ2aWNpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRUY7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFHRjs7QUFEQTtFQUNFLGVBQUE7QUFJRjs7QUFGQTtFQUNFLHlCQUFBO0FBS0Y7O0FBSEE7RUFDRSxlQUFBO0FBTUY7O0FBSkE7RUFDRSxhQUFBO0FBT0Y7O0FBTEE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBUUY7O0FBTkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVNGOztBQVBBO0VBQ0UsY0FBQTtBQVVGOztBQVhBO0VBQ0UsY0FBQTtBQVVGIiwiZmlsZSI6InNvbGljaXR1ZC1zZXJ2aWNpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm8tYm9yZGVye1xuICBwYWRkaW5nLXRvcDogMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xufVxuLnByb2ZpbGVJbWd7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBoZWlnaHQ6IDc1cHg7XG4gIHdpZHRoOiA3NXB4O1xufVxuLnRpdGxlU2VsZWN0e1xuICBmb250LXNpemU6IDIzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnRpdHRsZXtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLmJvcmRlcntcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwOUFDRTtcbn1cbi5yZWdUZXh0e1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uaW1nU2luZ2xle1xuICBoZWlnaHQ6IDEyNXB4O1xufVxuLmxvY2F0ZS1jb250e1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5QUNFO1xufVxuLnJhdGluZy10ZXh0e1xuICBmb250LXNpemU6IDI2cHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4udGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICMwMDlBQ0U7XG59Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-solicitud-servicio-solicitud-servicio-module-es5.js.map