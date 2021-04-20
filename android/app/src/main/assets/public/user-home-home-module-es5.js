(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-home-home-module"], {
    /***/
    "31wL":
    /*!********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/home.page.html ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function wL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button [menu]=\"user?.role\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"main-color title-toolbar\">CATEGORÍAS</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <!-- category item -->\n    <ion-row *ngFor=\"let cat of categories\" class=\"category-item ion-align-items-end\"\n      style=\"background-image: url('{{ cat.image }}');\" (click)=\"map(cat.id)\">\n      <ion-col class=\"cat-bar\">\n        <ion-text color=\"light\">\n          <h1 class=\"cat-title\">{{ cat.name }}</h1>\n          <p class=\"cat-text\">{{ cat.description }}</p>\n          <!-- rating circle -->\n          <!-- <div class=\"rate-cont\">\n            <ion-label color=\"primary\" class=\"rating-text ml-1\">4.8</ion-label>\n            <ion-icon name=\"star\" color=\"primary\" class=\"rating-text\"></ion-icon>\n          </div> -->\n          <!-- style=\"background-image: url('/assets/images/carp_cat.png');\" -->\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n    <!-- footer text -->\n    <div style=\"height: 20px;\"></div>\n    <ion-row class=\"subtitle ion-margin-top\">\n      <ion-col size=\"8\" offset=\"2\" class=\"ion-text-center\">\n        <ion-text class=\"footer-text main-color\"><b>¿No encuentras la categoría que buscabas?</b></ion-text>\n      </ion-col>\n    </ion-row>\n\n    <!-- enviar mensaje BTN -->\n    <ion-row class=\"ion-margin-top ion-margin-bottom\">\n      <ion-col size=\"1\"></ion-col>\n      <ion-col>\n        <ion-button size=\"6\" expand=\"block\" class=\"ion-text-uppercase\" (click)=\"openSuggesModal()\">\n          ENVÍANOS UN MENSAJE\n          <ion-icon slot=\"end\" name=\"send\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>";
      /***/
    },

    /***/
    "DRc1":
    /*!****************************************************************************************!*\
      !*** ./src/app/user/home/suggest-category-modal/suggest-category-modal.component.scss ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function DRc1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".status-cont {\n  border-radius: 50px;\n  height: 45px;\n  width: 45px;\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 5px;\n  background-color: #009ace;\n}\n\n.status-text-icon {\n  font-size: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  display: inline-flex;\n}\n\n.status-text {\n  font-size: 22px;\n}\n\n.mini-text {\n  font-size: 13px;\n}\n\nhr {\n  border-top: 1px solid #009ace;\n}\n\n.border {\n  border: 2px solid #009ACE;\n  border-radius: 5px;\n}\n\n.textarea::-moz-placeholder {\n  color: #009ACE;\n}\n\n.textarea::placeholder {\n  color: #009ACE;\n}\n\n.textarea::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #009ACE;\n}\n\n.textarea::placeholder {\n  color: #009ACE;\n}\n\n.padding {\n  padding: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3N1Z2dlc3QtY2F0ZWdvcnktbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtBQUdGOztBQURBO0VBQ0UsZUFBQTtBQUlGOztBQUZBO0VBQ0UsNkJBQUE7QUFLRjs7QUFIQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUFNRjs7QUFKQTtFQUNFLGNBQUE7QUFPRjs7QUFSQTtFQUNFLGNBQUE7QUFPRjs7QUFHQTtFQUErQixnQkFBQTtFQUM3QixjQUFBO0FBVUY7O0FBSEE7RUFDRSxjQUFBO0FBVUY7O0FBUkE7RUFDRSxlQUFBO0FBV0YiLCJmaWxlIjoic3VnZ2VzdC1jYXRlZ29yeS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGF0dXMtY29udCB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGhlaWdodDogNDVweDtcbiAgd2lkdGg6IDQ1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWFjZTtcbn1cbi5zdGF0dXMtdGV4dC1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cbi5zdGF0dXMtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbi5taW5pLXRleHQge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5ociB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDA5YWNlO1xufVxuLmJvcmRlcntcbiAgYm9yZGVyOiAycHggc29saWQgIzAwOUFDRTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjMDA5QUNFO1xufVxuLnRleHRhcmVhOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICMwMDlBQ0U7XG59XG5cbi50ZXh0YXJlYTotbW96LXBsYWNlaG9sZGVyIHsgLyogRmlyZWZveCAxOC0gKi9cbiAgY29sb3I6ICMwMDlBQ0U7ICBcbn1cblxuLnRleHRhcmVhOjotbW96LXBsYWNlaG9sZGVyIHsgIC8qIEZpcmVmb3ggMTkrICovXG4gIGNvbG9yOiAjMDA5QUNFOyAgXG59XG5cbi50ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzAwOUFDRTsgIFxufVxuXG4udGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICMwMDlBQ0U7ICBcbn1cbi5wYWRkaW5nIHtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuIl19 */";
      /***/
    },

    /***/
    "FF+a":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/suggest-category-modal/suggest-category-modal.component.html ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FFA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-grid fixed>\n    <form [formGroup]=\"form\" (ngSubmit)=\"sendSuggestion()\">\n      <!-- SERVICIO REALIZADO  -->\n      <ion-row class=\"ion-margin-top padding\">\n        <ion-col size=\"12\" class=\"ion-text-center ion-margin-top\">\n          <ion-text class=\"main-color status-text\"><b>¿Qué oficio no encontraste y te interesa?</b>\n          </ion-text><br>\n        </ion-col>\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <!-- text-area -->\n          <ion-row class=\"ion-margin-top\">\n            <ion-col size=\"12\" class=\"border ion-text-center\">\n              <ion-item lines=\"none\">\n                <ion-textarea class=\"textarea\" rows=\"3\" cols=\"20\" name=\"description\" formControlName=\"description\"\n                  placeholder=\"Agrega una descripción\" >\n                </ion-textarea>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"1\"></ion-col>\n            <div *ngIf=\"error\">\n              <ion-col size=\"12\">\n                <ion-label class=\"errorMess\">\n                  <ion-icon name=\"alert-circle-outline\" class=\"iconFixG\" color=\"danger\"></ion-icon>\n                  <ion-text color=\"danger\">\n                    <small> La descripción es requerida</small>\n                  </ion-text>\n                  <br />\n                </ion-label>\n              </ion-col>\n            </div>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"6\" class=\"ion-text-center\">\n          <ion-button size=\"5\" color=\"tertiary\" expand=\"block\" class=\"btn-tertiary\" (click)=\"dismiss()\">\n            Omitir\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"6\" class=\"ion-text-center\">\n          <ion-button size=\"5\" expand=\"block\" class=\"\" type=\"submit\" [disabled]=\"!form.valid\">\n            Enviar\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-grid>\n</ion-content>";
      /***/
    },

    /***/
    "LyDf":
    /*!******************************************!*\
      !*** ./src/app/user/home/home.page.scss ***!
      \******************************************/

    /*! exports provided: default */

    /***/
    function LyDf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".title {\n  font-size: 22px;\n  font-weight: bold;\n}\n\nhr {\n  border-top: 1px solid #E54360;\n}\n\n.category-item {\n  height: 190px;\n  width: 108%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  margin-left: -15px;\n  margin-top: 7%;\n  box-shadow: 1px 8px 20px 0px rgba(0, 0, 0, 0.25);\n}\n\n.cat-bar {\n  background-image: url(\"/assets/images/cat_bar.png\");\n  height: 70px;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  padding-left: 40px;\n}\n\n.cat-title {\n  margin-top: 7px;\n  margin-bottom: 0;\n  font-size: 20px;\n}\n\n.cat-text {\n  margin-top: 4px;\n  margin-bottom: 0;\n  font-size: 13px;\n}\n\n.rate-cont {\n  border-radius: 50px;\n  height: 42px;\n  width: 42px;\n  background-color: white;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: 30px;\n  margin-top: -32px;\n}\n\n.rating-text {\n  font-size: 13px;\n}\n\n.ml-1 {\n  margin-left: 3px;\n}\n\n.footer-text {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSw2QkFBQTtBQUVGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnREFBQTtBQUdGOztBQURBO0VBQ0UsbURBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBSUY7O0FBRkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBS0Y7O0FBSEE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBTUY7O0FBSkE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQU9GOztBQUxBO0VBQ0UsZUFBQTtBQVFGOztBQU5BO0VBQ0UsZ0JBQUE7QUFTRjs7QUFQQTtFQUNFLGVBQUE7QUFVRiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZXtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmhyIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFNTQzNjA7XG59XG4uY2F0ZWdvcnktaXRlbXtcbiAgaGVpZ2h0OiAxOTBweDtcbiAgd2lkdGg6IDEwOCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICBtYXJnaW4tdG9wOiA3JTtcbiAgYm94LXNoYWRvdzogMXB4IDhweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuLmNhdC1iYXJ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvY2F0X2Jhci5wbmcnKTtcbiAgaGVpZ2h0OiA3MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG59XG4uY2F0LXRpdGxle1xuICBtYXJnaW4tdG9wOiA3cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5jYXQtdGV4dHtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ucmF0ZS1jb250e1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIHdpZHRoOiA0MnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBtYXJnaW4tdG9wOiAtMzJweDtcbn1cbi5yYXRpbmctdGV4dHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLm1sLTF7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG59XG4uZm9vdGVyLXRleHR7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "Uqb3":
    /*!*******************************************************************!*\
      !*** ./src/app/shared/success-modal/success-modal.component.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function Uqb3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".modal-cont {\n  margin-top: 50px;\n}\n\n.status-cont {\n  border-radius: 50px;\n  height: 45px;\n  width: 45px;\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 5px;\n  background-color: #009ACE;\n}\n\n.status-text-icon {\n  font-size: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  display: inline-flex;\n}\n\n.status-text {\n  font-size: 22px;\n}\n\n.mini-text {\n  font-size: 13px;\n}\n\nhr {\n  border-top: 1px solid #009ACE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N1Y2Nlc3MtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRyxnQkFBQTtBQUFIOztBQUVBO0VBRUksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFBSjs7QUFFQTtFQUVJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFBSjs7QUFFQTtFQUVJLGVBQUE7QUFBSjs7QUFFQTtFQUVJLGVBQUE7QUFBSjs7QUFFQTtFQUVJLDZCQUFBO0FBQUoiLCJmaWxlIjoic3VjY2Vzcy1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1jb250XG57XG4gICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLnN0YXR1cy1jb250XG57XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgd2lkdGg6IDQ1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5QUNFO1xufVxuLnN0YXR1cy10ZXh0LWljb25cbntcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuLnN0YXR1cy10ZXh0XG57XG4gICAgZm9udC1zaXplOiAyMnB4O1xufVxuLm1pbmktdGV4dFxue1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cbmhyXG57XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDlBQ0U7XG59Il19 */";
      /***/
    },

    /***/
    "VjR+":
    /*!******************************************!*\
      !*** ./src/app/user/home/home.module.ts ***!
      \******************************************/

    /*! exports provided: HomePageModule */

    /***/
    function VjR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
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


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home-routing.module */
      "afmG");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home.page */
      "b1zH");
      /* harmony import */


      var _suggest_category_modal_suggest_category_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./suggest-category-modal/suggest-category-modal.component */
      "XNYi");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"], _suggest_category_modal_suggest_category_modal_component__WEBPACK_IMPORTED_MODULE_7__["SuggestCategoryModalComponent"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "W/u7":
    /*!*****************************************************************!*\
      !*** ./src/app/shared/success-modal/success-modal.component.ts ***!
      \*****************************************************************/

    /*! exports provided: SuccessModalComponent */

    /***/
    function WU7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SuccessModalComponent", function () {
        return SuccessModalComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_success_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./success-modal.component.html */
      "XJ+h");
      /* harmony import */


      var _success_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./success-modal.component.scss */
      "Uqb3");
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

      var SuccessModalComponent = /*#__PURE__*/function () {
        function SuccessModalComponent(modalController, router) {
          _classCallCheck(this, SuccessModalComponent);

          this.modalController = modalController;
          this.router = router;
          this.redirect = true;
          this.redirectUrl = '/login';
        }

        _createClass(SuccessModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalController.dismiss();

            if (this.redirect) {
              this.router.navigate([this.redirectUrl]);
            }
          }
        }]);

        return SuccessModalComponent;
      }();

      SuccessModalComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      SuccessModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-success-modal',
        template: _raw_loader_success_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_success_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SuccessModalComponent);
      /***/
    },

    /***/
    "XJ+h":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/success-modal/success-modal.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function XJH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"success-modal\">\n  <ion-grid style=\"height: 100%;\">\n    \n    <!-- SERVICIO REALIZADO  -->\n    <ion-row class=\"modal-cont\">\n      <div class=\"status-cont\">\n        <ion-icon name=\"checkmark\" color=\"light\" class=\"status-text-icon\"></ion-icon>\n      </div>\n      <ion-col size=\"10\"  offset=\"1\" class=\"ion-text-center\">\n        <ion-text class=\"main-color status-text\"><b>{{message || 'SE HA ENVIADO EL CORREO EXITOSAMENTE'}}</b></ion-text><br>\n      </ion-col>\n      <ion-col size=\"10\"  offset=\"1\" class=\"ion-text-center\">\n        <ion-text><hr></ion-text>\n      </ion-col>\n      <ion-col size=\"10\"  offset=\"1\" class=\"ion-text-center\">\n        <ion-text class=\"main-color mini-text\" (click)=\"dismiss()\">ACEPTAR</ion-text><br>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>";
      /***/
    },

    /***/
    "XNYi":
    /*!**************************************************************************************!*\
      !*** ./src/app/user/home/suggest-category-modal/suggest-category-modal.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: SuggestCategoryModalComponent */

    /***/
    function XNYi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SuggestCategoryModalComponent", function () {
        return SuggestCategoryModalComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_suggest_category_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./suggest-category-modal.component.html */
      "FF+a");
      /* harmony import */


      var _suggest_category_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./suggest-category-modal.component.scss */
      "DRc1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_shared_success_modal_success_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/success-modal/success-modal.component */
      "W/u7");

      var SuggestCategoryModalComponent = /*#__PURE__*/function () {
        function SuggestCategoryModalComponent(formBuilder, modalController, loadingController, router) {
          _classCallCheck(this, SuggestCategoryModalComponent);

          this.formBuilder = formBuilder;
          this.modalController = modalController;
          this.loadingController = loadingController;
          this.router = router;
          this.error = false;
        }

        _createClass(SuggestCategoryModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            //form
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
              description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
              })
            });
          }
        }, {
          key: "sendSuggestion",
          value: function sendSuggestion() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var loader, successModal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingController.create({
                        message: 'Enviando información...'
                      });

                    case 2:
                      loader = _context.sent;
                      loader.present();
                      _context.prev = 4;
                      _context.next = 7;
                      return new Promise(function (resolve) {
                        return setTimeout(function () {
                          return resolve();
                        }, 1000);
                      });

                    case 7:
                      this.error = false;
                      _context.next = 13;
                      break;

                    case 10:
                      _context.prev = 10;
                      _context.t0 = _context["catch"](4);
                      this.error = true;

                    case 13:
                      loader.dismiss();

                      if (this.error) {
                        _context.next = 21;
                        break;
                      }

                      _context.next = 17;
                      return this.modalController.dismiss();

                    case 17:
                      _context.next = 19;
                      return this.modalController.create({
                        component: src_app_shared_success_modal_success_modal_component__WEBPACK_IMPORTED_MODULE_7__["SuccessModalComponent"],
                        componentProps: {
                          message: 'Se ha enviado la información correctamente',
                          redirect: false
                        },
                        cssClass: 'modalSuccess'
                      });

                    case 19:
                      successModal = _context.sent;
                      successModal.present();

                    case 21:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[4, 10]]);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalController.dismiss();
          }
        }]);

        return SuggestCategoryModalComponent;
      }();

      SuggestCategoryModalComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      SuggestCategoryModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-suggest-category-modal',
        template: _raw_loader_suggest_category_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_suggest_category_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SuggestCategoryModalComponent);
      /***/
    },

    /***/
    "afmG":
    /*!**************************************************!*\
      !*** ./src/app/user/home/home-routing.module.ts ***!
      \**************************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function afmG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
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


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "b1zH");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "b1zH":
    /*!****************************************!*\
      !*** ./src/app/user/home/home.page.ts ***!
      \****************************************/

    /*! exports provided: HomePage */

    /***/
    function b1zH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home.page.html */
      "31wL");
      /* harmony import */


      var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.page.scss */
      "LyDf");
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


      var src_app_model_user_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/model/user.model */
      "UbF0");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/category.service */
      "cPV5");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services/solicitud.service */
      "rLtr");
      /* harmony import */


      var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! axios */
      "vDqi");
      /* harmony import */


      var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
      /* harmony import */


      var _suggest_category_modal_suggest_category_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./suggest-category-modal/suggest-category-modal.component */
      "XNYi");

      var HomePage = /*#__PURE__*/function () {
        function HomePage(modalController, menuController, router, http, lc, us, cs, solServ) {
          _classCallCheck(this, HomePage);

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

        _createClass(HomePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.userSub = this.us.loggedUser.subscribe(function (user) {
              _this.grabbedUser = user;

              _this.menuController.enable(user.role === src_app_model_user_model__WEBPACK_IMPORTED_MODULE_7__["UserRoles"].PROFESSIONAL, src_app_model_user_model__WEBPACK_IMPORTED_MODULE_7__["UserRoles"].PROFESSIONAL);

              _this.menuController.enable(user.role === src_app_model_user_model__WEBPACK_IMPORTED_MODULE_7__["UserRoles"].USER, src_app_model_user_model__WEBPACK_IMPORTED_MODULE_7__["UserRoles"].USER);
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.loadCategories();
          }
        }, {
          key: "loadCategories",
          value: function loadCategories() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var loader, response;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.lc.create({
                        message: 'Cargando servicios disponibles...'
                      });

                    case 2:
                      loader = _context2.sent;
                      _context2.prev = 3;
                      _context2.next = 6;
                      return axios__WEBPACK_IMPORTED_MODULE_12___default.a.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["API"], "/categories"), {
                        headers: {
                          authorization: "Bearer ".concat(this.grabbedUser.access_token)
                        }
                      });

                    case 6:
                      response = _context2.sent;
                      loader.dismiss();
                      this.categories = response.data.data;
                      _context2.next = 15;
                      break;

                    case 11:
                      _context2.prev = 11;
                      _context2.t0 = _context2["catch"](3);
                      loader.dismiss();
                      console.log(_context2.t0);

                    case 15:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[3, 11]]);
            }));
          }
        }, {
          key: "map",
          value: function map(catId) {
            this.solServ.setCat(catId);
            this.router.navigate(['/user/map']);
          }
        }, {
          key: "login",
          value: function login() {// do something cool 
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.userSub.unsubscribe();
          }
        }, {
          key: "openSuggesModal",
          value: function openSuggesModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var modal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.modalController.create({
                        component: _suggest_category_modal_suggest_category_modal_component__WEBPACK_IMPORTED_MODULE_13__["SuggestCategoryModalComponent"],
                        cssClass: 'modalSuccess'
                      });

                    case 2:
                      modal = _context3.sent;
                      modal.present();

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]
        }, {
          type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_9__["CategoryService"]
        }, {
          type: src_app_services_solicitud_service__WEBPACK_IMPORTED_MODULE_11__["SolicitudService"]
        }];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HomePage);
      /***/
    },

    /***/
    "cPV5":
    /*!**********************************************!*\
      !*** ./src/app/services/category.service.ts ***!
      \**********************************************/

    /*! exports provided: CategoryService */

    /***/
    function cPV5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoryService", function () {
        return CategoryService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CategoryService = /*#__PURE__*/function () {
        function CategoryService() {
          _classCallCheck(this, CategoryService);
        }

        _createClass(CategoryService, [{
          key: "category",
          get: function get() {
            return this._category;
          }
        }, {
          key: "setCategory",
          value: function setCategory(newCat) {
            this._category = newCat;
          }
        }]);

        return CategoryService;
      }();

      CategoryService.ctorParameters = function () {
        return [];
      };

      CategoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], CategoryService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-home-home-module-es5.js.map