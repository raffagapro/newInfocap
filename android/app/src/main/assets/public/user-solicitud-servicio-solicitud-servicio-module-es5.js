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


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/user/profesional-detail\" text=\"\" icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title class=\"title-toolbar\">SOLICITUD DE SERVICIO</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- profesional card item -->\n  <div class=\"no-border\">\n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n        <!-- profile img -->\n        <ion-col size=\"4\" offset=\"1\" sizeMd=\"2\" offsetMd=\"0\">\n          <ion-avatar class=\"profileImg\">\n            <ion-img src=\"{{ !selectedProfPhoto ? 'assets/images/avatar.png' : selectedProfPhoto }}\"></ion-img>\n          </ion-avatar>\n        </ion-col>\n\n        <!-- title -->\n        <ion-col size=\"7\" sizeMd=\"10\">\n          <ion-text>\n            <span class=\"titleSelect main-color ion-text-capitalize\">\n              {{ selectedProfesional.supplierName }} {{ selectedProfesional.supplierLastName }}\n            </span><br>\n            <ion-badge color=\"primary\" class=\"badge-text ion-text-capitalize\">{{ selectedProfesional.categoryName }}\n            </ion-badge><br>\n            <p class=\"textSelect main-color badge-text ion-text-capitalize\" style=\"margin-top: 0; margin-bottom: 0;\">{{\n              selectedProfesional.communeName }}</p>\n          </ion-text>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <ion-grid>\n\n    <!-- title -->\n    <ion-row>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\" class=\"ion-text-center\">\n        <ion-text class=\"main-color title\"><b>Cuéntale al profesional qué necesitas</b></ion-text>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n    <form [formGroup]=\"form\" (ngSubmit)=\"confirmRequest()\">\n      <!-- text-area -->\n      <ion-row class=\"ion-margin-top\">\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"10\" class=\"border ion-text-center\">\n          <ion-item lines=\"none\">\n            <ion-textarea class=\"textarea\" rows=\"3\" cols=\"20\" formControlName=\"description\"\n              placeholder=\"Describe lo más posible y claro el trabajo, así podremos dar respuesta más rápido.\">\n            </ion-textarea>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n\n      <!-- text -->\n      <ion-row class=\"ion-margin-top\">\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"10\" class=\"ion-text-center\">\n          <ion-text class=\"main-color regText\"><b>Agrega imágenes que ayudarán al profesional a responder mejor a tu\n              solicitud.</b></ion-text>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n\n      <!-- images -->\n      <ion-row class=\"ion-align-items-center\">\n        <ion-col size=\"7\" offset=\"1\" *ngIf=\"loadedImagesDisplay.length > 0\">\n          <ion-slides [options]=\"slideOptions\">\n\n            <!-- slide -->\n            <ion-slide class=\"slide\" *ngFor=\"let image of loadedImagesDisplay; let i = index\"\n              [loadedImagesDisplay]='loadedImagesDisplay'>\n              <ion-img (click)=\"openImage(image)\" src=\"{{ image }}\" class=\"imgSlide\">\n              </ion-img>\n              <ion-button (click)=\"removeImage(i)\" size=\"small\" shape=\"round\" color=\"danger\" class=\"deleteBtn\">\n                <ion-icon name=\"close-circle-outline\"></ion-icon>\n              </ion-button>\n            </ion-slide>\n\n          </ion-slides>\n        </ion-col>\n        <ion-col class=\"{{loadedImagesDisplay.length > 0 ? '' : 'text-center'}}\"\n          [size]=\"loadedImagesDisplay.length > 0 ? '4' : '12'\">\n          <ion-button (click)=\"onLoadImg()\" shape=\"round\">\n            <ion-icon name=\"add\" slot=\"end\" color=\"light\" class=\"rating-text\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n\n      <!-- hidden file input -->\n      <div style=\"display: none;\">\n        <input type=\"file\" #hiddenImgInput *ngIf=\"useInputPicker\" (change)=\"onLoadImgFromInput($event)\">\n      </div>\n\n      <!-- Fecha requerida -->\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-item>\n            <ion-label class=\"main-color\" position=\"floating\">\n              <ion-icon src=\"/assets/icon/ic_date_range.svg\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Fecha requerida</ion-text>\n            </ion-label>\n            <ion-datetime mode=\"ios\" formControlName=\"date_required\" placeholder=\"Definir fecha\" [pickerFormat]=\"'DD MMM YYYY'\"\n              [displayFormat]=\"'DDDD DD de MMM de YYYY'\" [min]=\"minDate.format('YYYY-MM-DD')\"\n              (ngModelChange)=\"onDateChange($event)\" cancelText=\"Cancelar\" doneText=\"Listo\"\n              [dayNames]=\"['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']\"\n              monthShortNames=\"Enero, Febrero, Marzo, Abril, Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre\">\n            </ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <!-- Rango de horas -->\n\n      <!-- pickers -->\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-item>\n            <ion-label class=\"main-color\" position=\"floating\">\n              <ion-icon src=\"/assets/icon/ic_schedule.svg\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Hora inicial</ion-text>\n            </ion-label>\n            <ion-datetime mode=\"ios\" formControlName=\"sHour\" display-format=\"h:mm A\" picker-format=\"h:mm A\" cancelText=\"Cancelar\"\n              doneText=\"Listo\" [min]=\"minDate.format('YYYY-MM-DD')\" minuteValues=\"0,10,20,30,40,50\">\n            </ion-datetime>\n          </ion-item>\n        </ion-col>\n\n        <ion-col size=\"6\">\n          <ion-item>\n            <ion-label class=\"main-color\" position=\"floating\">\n              <ion-icon src=\"/assets/icon/ic_schedule.svg\" slot=\"start\" class=\"main-color\"></ion-icon>\n              <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Hora final</ion-text>\n            </ion-label>\n            <ion-datetime mode=\"ios\" formControlName=\"eHour\" display-format=\"h:mm A\" picker-format=\"h:mm A\" cancelText=\"Cancelar\"\n              doneText=\"Listo\" [min]=\"minDate.format('YYYY-MM-DD')\" minuteValues=\"0,10,20,30,40,50\">\n            </ion-datetime>\n          </ion-item>\n        </ion-col>\n\n        <!-- error  -->\n        <ion-col size=\"12\" *ngIf=\"showError\">\n          <ion-label class=\"errorMess\">\n            <ion-icon name=\"alert-circle-outline\" class=\"iconFixG\" color=\"danger\"></ion-icon>\n            <ion-text class=\"text-center\" color=\"danger\">\n              <small> La hora de inicio debe ser menor que la hora de fin</small>\n            </ion-text>\n          </ion-label>\n        </ion-col>\n      </ion-row>\n\n      <!-- enviar solicitud BTN -->\n      <ion-row class=\"ion-margin-top ion-margin-bottom\">\n        <ion-col size=\"1\"></ion-col>\n        <ion-col>\n          <ion-button size=\"5\" expand=\"block\" class=\"ion-text-uppercase\" type=\"submit\" [disabled]=\"!form.valid\">\n            CONFIRMAR SOLICITUD\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n    </form>\n\n  </ion-grid>\n\n</ion-content>";
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
      /* harmony import */


      var src_app_shared_image_modal_image_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
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

      var SolicitudServicioPage = /*#__PURE__*/function () {
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
          this.slideOptions = {
            initialSlide: 0,
            slidesPerView: 2,
            autoplay: true
          };
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
              quality: 100,
              source: _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["CameraSource"].Prompt,
              correctOrientation: true,
              //height: 500,
              width: 500,
              resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["CameraResultType"].DataUrl,
              promptLabelPhoto: 'Fotos',
              promptLabelPicture: 'Cámara',
              promptLabelCancel: 'Cancelar'
            }).then(function (image) {
              _this2.saveImgToApi(image.dataUrl);
            })["catch"](function (e) {
              console.log(e, 'error');
            });
          }
        }, {
          key: "onLoadImgFromInput",
          value: function onLoadImgFromInput(e) {
            var _this3 = this;

            var loadedFile = e.target.files[0]; //this.saveImgToApi(loadedFile);
            //converting images to blob for diplaying

            var fr = new FileReader();

            fr.onload = function () {
              _this3.saveImgToApi(fr.result.toString()); //this.loadedImagesDisplay.push(fr.result.toString());

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
            this.loadedImagesDisplay.push(imageData);
          }
        }, {
          key: "removeImage",
          value: function removeImage(imageIndex) {
            this.loadedImages = this.loadedImages.filter(function (image, index) {
              return index !== imageIndex;
            });
            this.loadedImagesDisplay = this.loadedImagesDisplay.filter(function (image, index) {
              return index !== imageIndex;
            });
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

            if (this.loadedImages.length === 0) {
              alert('Debes agregar al menos una foto a la solicitud.');
              return;
            }

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
          key: "openImage",
          value: function openImage(image) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var successModal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: src_app_shared_image_modal_image_modal_component__WEBPACK_IMPORTED_MODULE_14__["ImageModalComponent"],
                        componentProps: {
                          image: image
                        },
                        cssClass: 'modalImage'
                      });

                    case 2:
                      successModal = _context.sent;
                      successModal.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
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


      __webpack_exports__["default"] = ".no-border {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n\n.profileImg {\n  margin: auto;\n  height: 75px;\n  width: 75px;\n}\n\n.titleSelect {\n  font-size: 23px;\n  font-weight: bold;\n}\n\n.tittle {\n  font-size: 18px;\n}\n\n.border {\n  border: 1px solid #009ace;\n}\n\n.regText {\n  font-size: 14px;\n}\n\n.imgSingle {\n  height: 125px;\n}\n\n.locate-cont {\n  border-radius: 50px;\n  height: 50px;\n  width: 50px;\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #009ace;\n}\n\n.rating-text {\n  font-size: 26px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.textarea::-moz-placeholder {\n  color: #009ace;\n  --placeholder-color: #009ace;\n}\n\n.textarea::placeholder {\n  color: #009ace;\n  --placeholder-color: #009ace;\n}\n\n.slide {\n  margin: 0 5px;\n}\n\n.deleteBtn {\n  position: absolute;\n  top: 0;\n  right: 0;\n  border-radius: 100%;\n  color: white;\n  width: 32px;\n  padding: 0;\n  margin: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n}\n\n.deleteBtn ion-icon {\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvbGljaXR1ZC1zZXJ2aWNpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFFRjs7QUFBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUdGOztBQURBO0VBQ0UsZUFBQTtBQUlGOztBQUZBO0VBQ0UseUJBQUE7QUFLRjs7QUFIQTtFQUNFLGVBQUE7QUFNRjs7QUFKQTtFQUNFLGFBQUE7QUFPRjs7QUFMQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFRRjs7QUFOQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBU0Y7O0FBUEE7RUFDRSxjQUFBO0VBQ0EsNEJBQUE7QUFVRjs7QUFaQTtFQUNFLGNBQUE7RUFDQSw0QkFBQTtBQVVGOztBQVJBO0VBQ0UsYUFBQTtBQVdGOztBQVRBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFZRjs7QUFYRTtFQUNFLGtCQUFBO0FBYUoiLCJmaWxlIjoic29saWNpdHVkLXNlcnZpY2lvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uby1ib3JkZXIge1xuICBwYWRkaW5nLXRvcDogMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xufVxuLnByb2ZpbGVJbWcge1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogNzVweDtcbiAgd2lkdGg6IDc1cHg7XG59XG4udGl0bGVTZWxlY3Qge1xuICBmb250LXNpemU6IDIzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnRpdHRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5ib3JkZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA5YWNlO1xufVxuLnJlZ1RleHQge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uaW1nU2luZ2xlIHtcbiAgaGVpZ2h0OiAxMjVweDtcbn1cbi5sb2NhdGUtY29udCB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDlhY2U7XG59XG4ucmF0aW5nLXRleHQge1xuICBmb250LXNpemU6IDI2cHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4udGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICMwMDlhY2U7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6ICMwMDlhY2U7XG59XG4uc2xpZGUge1xuICBtYXJnaW46IDAgNXB4O1xufVxuLmRlbGV0ZUJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMzJweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIGlvbi1pY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbn1cbiJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-solicitud-servicio-solicitud-servicio-module-es5.js.map