(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-login-module"], {
    /***/
    "3mz4":
    /*!*****************************************************************!*\
      !*** ./node_modules/@capacitor/storage/dist/esm/definitions.js ***!
      \*****************************************************************/

    /*! no exports provided */

    /***/
    function mz4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__); //# sourceMappingURL=definitions.js.map

      /***/

    },

    /***/
    "Jl+/":
    /*!*******************************************!*\
      !*** ./src/app/login/login/login.page.ts ***!
      \*******************************************/

    /*! exports provided: LoginPage */

    /***/
    function Jl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.page.html */
      "nRaD");
      /* harmony import */


      var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.page.scss */
      "bRUQ");
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


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var src_app_model_user_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/model/user.model */
      "UbF0");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! axios */
      "vDqi");
      /* harmony import */


      var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/services/notifications-service */
      "wBcA");
      /* harmony import */


      var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/facebook/ngx */
      "GGTb");
      /* harmony import */


      var src_app_services_google_google_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/services/google/google.service */
      "fPD/");
      /* harmony import */


      var _capacitor_device__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @capacitor/device */
      "rvvs");
      /* harmony import */


      var _capacitor_community_apple_sign_in__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @capacitor-community/apple-sign-in */
      "fHdR");
      /* harmony import */


      var _capacitor_storage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @capacitor/storage */
      "YwB3");
      /* harmony import */


      var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @capacitor/status-bar */
      "cnT8");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(navController, router, http, as, us, lc, notificationService, fb, googleService, alertController) {
          _classCallCheck(this, LoginPage);

          this.navController = navController;
          this.router = router;
          this.http = http;
          this.as = as;
          this.us = us;
          this.lc = lc;
          this.notificationService = notificationService;
          this.fb = fb;
          this.googleService = googleService;
          this.alertController = alertController;
          this.passwordTypeInput = "password";
          this.showAppleSignIn = false;
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.validateShowAppleSignin();

            _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_18__["StatusBar"].hide();
          }
        }, {
          key: "validateShowAppleSignin",
          value: function validateShowAppleSignin() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var device;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return _capacitor_device__WEBPACK_IMPORTED_MODULE_15__["Device"].getInfo();

                    case 2:
                      device = _context.sent;
                      this.showAppleSignIn = device.platform === "ios";

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "checkFacebookLoginStatus",
          value: function checkFacebookLoginStatus() {
            this.fb.getLoginStatus().then(function (res) {
              if (res.status === "connect") {} else {}
            })["catch"](function (e) {
              return console.log(e);
            });
          }
        }, {
          key: "login",
          value: function login(form) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var email, password, loader, body, response, data, responseData, message, user, roles, access_token, id, name, last_name, _email, phone1, phone2, img_profile, img, errorMessage, _message;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (form.valid) {
                        _context2.next = 2;
                        break;
                      }

                      return _context2.abrupt("return");

                    case 2:
                      email = form.value.email;
                      password = form.value.password;
                      _context2.next = 6;
                      return this.lc.create({
                        message: "Validando credenciales..."
                      });

                    case 6:
                      loader = _context2.sent;
                      loader.present();
                      _context2.prev = 8;
                      body = {
                        email: email,
                        password: password
                      };
                      _context2.next = 12;
                      return axios__WEBPACK_IMPORTED_MODULE_11___default.a.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["API"], "/auth/login"), body);

                    case 12:
                      response = _context2.sent;
                      data = response.data;
                      responseData = data.data, message = data.message;

                      if (responseData) {
                        user = responseData.user, roles = responseData.roles, access_token = responseData.access_token;
                        id = user.id, name = user.name, last_name = user.last_name, _email = user.email, phone1 = user.phone1, phone2 = user.phone2, img_profile = user.img_profile; //save user info to store NEEDS WORK IN HERE

                        if (img_profile === null || img_profile === "http://167.71.251.136/storage/") {
                          img = "assets/images/avatar.png";
                        } else {
                          img = img_profile;
                        }

                        this.grabbedUSer = new src_app_model_user_model__WEBPACK_IMPORTED_MODULE_9__["User"](id, name, last_name, img, _email, phone1, phone2, roles[0], access_token);
                        this.us.setUser(this.grabbedUSer);
                        this.as.login();
                        form.control.reset();
                        loader.dismiss();

                        if (roles[0] === "usuario") {
                          this.router.navigate(["/user/home"], {
                            replaceUrl: true
                          });
                          this.loadNotifications("client");
                        } else {
                          this.router.navigate(["/profesional/home"], {
                            replaceUrl: true
                          });
                          this.loadNotifications("supplier");
                        }
                      } else {
                        errorMessage = message === "Unauthorized" ? "Credenciales inválidas" : "Ocurrió un error";
                        this.error = errorMessage;
                        form.reset();
                        form.setValue({
                          email: email,
                          password: ""
                        });
                        loader.dismiss();
                      }

                      _context2.next = 27;
                      break;

                    case 18:
                      _context2.prev = 18;
                      _context2.t0 = _context2["catch"](8);
                      console.log(_context2.t0);
                      _message = "Ocurrió un error";

                      if (_context2.t0.response) {
                        _message = _context2.t0.response.data.message;
                      }

                      this.error = _message;
                      form.reset();
                      form.setValue({
                        email: email,
                        password: ""
                      });
                      loader.dismiss();

                    case 27:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[8, 18]]);
            }));
          }
        }, {
          key: "loadNotifications",
          value: function loadNotifications(type) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var response, data, notificationsData;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.prev = 0;
                      _context3.next = 3;
                      return axios__WEBPACK_IMPORTED_MODULE_11___default.a.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["API"], "/").concat(type, "/notification"), {
                        headers: {
                          Authorization: "Bearer ".concat(this.grabbedUSer.access_token)
                        }
                      });

                    case 3:
                      response = _context3.sent;
                      data = response.data;
                      notificationsData = data.data;
                      this.notificationService.setNotifications(notificationsData);
                      _context3.next = 12;
                      break;

                    case 9:
                      _context3.prev = 9;
                      _context3.t0 = _context3["catch"](0);
                      console.log(_context3.t0);

                    case 12:
                      _context3.prev = 12;
                      return _context3.finish(12);

                    case 14:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[0, 9, 12, 14]]);
            }));
          }
        }, {
          key: "loginProfesional",
          value: function loginProfesional() {
            this.router.navigate(["/profesional/home"]);
          }
        }, {
          key: "loginGoogle",
          value: function loginGoogle() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var loading, googleResponse, givenName, familyName, email, userId, body;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.lc.create({
                        message: "Iniciando sesión..."
                      });

                    case 2:
                      loading = _context4.sent;
                      loading.present();
                      _context4.prev = 4;
                      _context4.next = 7;
                      return this.googleService.login();

                    case 7:
                      googleResponse = _context4.sent;
                      givenName = googleResponse.givenName, familyName = googleResponse.familyName, email = googleResponse.email, userId = googleResponse.userId;
                      body = {
                        name: givenName,
                        last_name: familyName,
                        email: email,
                        password: userId
                      };
                      this.doLoginWithSocialMedia(body);
                      _context4.next = 17;
                      break;

                    case 13:
                      _context4.prev = 13;
                      _context4.t0 = _context4["catch"](4);
                      console.log(_context4.t0);
                      alert("No se pudo iniciar sesión con Google");

                    case 17:
                      _context4.prev = 17;
                      _context4.next = 20;
                      return loading.dismiss();

                    case 20:
                      return _context4.finish(17);

                    case 21:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this, [[4, 13, 17, 21]]);
            }));
          }
        }, {
          key: "loginApple",
          value: function loginApple() {
            var _this = this;

            _capacitor_community_apple_sign_in__WEBPACK_IMPORTED_MODULE_16__["SignInWithApple"].authorize({
              clientId: "com.shapp.workintest",
              redirectURI: "/login",
              scopes: "email name"
            }).then(function (res) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                var _res$response, email, familyName, givenName, user, appleEmail, appleIdendityToken, body;

                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        if (!(res.response && res.response.identityToken)) {
                          _context5.next = 18;
                          break;
                        }

                        _res$response = res.response, email = _res$response.email, familyName = _res$response.familyName, givenName = _res$response.givenName, user = _res$response.user;
                        _context5.next = 4;
                        return this.getAppleEmail();

                      case 4:
                        appleEmail = _context5.sent;
                        _context5.next = 7;
                        return this.getIdentityToken();

                      case 7:
                        appleIdendityToken = _context5.sent;
                        body = {
                          name: givenName,
                          last_name: familyName,
                          email: email || appleEmail,
                          password: user || appleIdendityToken
                        };
                        console.log(body);

                        if (!(email && user)) {
                          _context5.next = 15;
                          break;
                        }

                        _context5.next = 13;
                        return this.setAppleEmail(email);

                      case 13:
                        _context5.next = 15;
                        return this.setIdentityToken(user);

                      case 15:
                        this.doLoginWithSocialMedia(body);
                        _context5.next = 19;
                        break;

                      case 18:
                        this.presentAlert();

                      case 19:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5, this);
              }));
            })["catch"](function (response) {
              console.log(response);

              _this.presentAlert();
            });
          }
        }, {
          key: "loginFacebook",
          value: function loginFacebook() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var response;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.prev = 0;
                      _context6.next = 3;
                      return this.fb.login(["public_profile", "email"]);

                    case 3:
                      response = _context6.sent;

                      if (response.status === "connected") {
                        this.getUserDetail(response.authResponse.userID);
                      } else {
                        alert("No se puede iniciar sesión en Facebook con tu cuenta");
                      }

                      _context6.next = 11;
                      break;

                    case 7:
                      _context6.prev = 7;
                      _context6.t0 = _context6["catch"](0);
                      console.log("Error logging into Facebook", _context6.t0);
                      alert("No se ha iniciado sesión con Workin");

                    case 11:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this, [[0, 7]]);
            }));
          }
        }, {
          key: "getUserDetail",
          value: function getUserDetail(userid) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var loader, response, id, email, first_name, last_name, body;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.lc.create({
                        message: "Iniciando sesión..."
                      });

                    case 2:
                      loader = _context7.sent;
                      _context7.prev = 3;
                      _context7.next = 6;
                      return loader.present();

                    case 6:
                      _context7.next = 8;
                      return this.fb.api("/".concat(userid, "/?fields=id,email,first_name,last_name"), ["public_profile"]);

                    case 8:
                      response = _context7.sent;
                      id = response.id, email = response.email, first_name = response.first_name, last_name = response.last_name;
                      body = {
                        name: first_name,
                        last_name: last_name,
                        email: email,
                        password: id
                      };
                      this.doLoginWithSocialMedia(body);
                      _context7.next = 20;
                      break;

                    case 14:
                      _context7.prev = 14;
                      _context7.t0 = _context7["catch"](3);
                      console.log("Error logging into Facebook", _context7.t0);
                      alert(_context7.t0.message);
                      _context7.next = 20;
                      return loader.dismiss();

                    case 20:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this, [[3, 14]]);
            }));
          }
        }, {
          key: "togglePasswordMode",
          value: function togglePasswordMode() {
            this.passwordTypeInput = this.passwordTypeInput === "text" ? "password" : "text";
            var nativeEl = this.passwordEye.nativeElement.querySelector("input");
            var inputSelection = nativeEl.selectionStart;
            nativeEl.focus();
            setTimeout(function () {
              nativeEl.setSelectionRange(inputSelection, inputSelection);
            }, 1);
          }
        }, {
          key: "doLoginWithSocialMedia",
          value: function doLoginWithSocialMedia(body) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var response, data, responseData, user, roles, access_token, id, name, last_name, email, phone1, phone2, img_profile, img;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return axios__WEBPACK_IMPORTED_MODULE_11___default.a.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["API"], "/auth/facebook"), body, {
                        headers: {
                          "Content-Type": "application/json",
                          "X-Requested-With": "XMLHttpRequest"
                        }
                      });

                    case 2:
                      response = _context8.sent;
                      data = response.data;
                      responseData = data.data;

                      if (!responseData) {
                        _context8.next = 15;
                        break;
                      }

                      user = responseData.user, roles = responseData.roles, access_token = responseData.access_token;
                      id = user.id, name = user.name, last_name = user.last_name, email = user.email, phone1 = user.phone1, phone2 = user.phone2, img_profile = user.img_profile; //save user info to store NEEDS WORK IN HERE

                      if (img_profile === null || img_profile === "http://167.71.251.136/storage/") {
                        img = "assets/images/avatar.png";
                      } else {
                        img = img_profile;
                      }

                      this.grabbedUSer = new src_app_model_user_model__WEBPACK_IMPORTED_MODULE_9__["User"](id, name, last_name, img, email, phone1, phone2, roles[0], access_token);
                      this.us.setUser(this.grabbedUSer);
                      this.as.login();

                      if (roles[0] === "usuario") {
                        this.router.navigate(["/user/home"], {
                          replaceUrl: true
                        });
                        this.loadNotifications("client");
                      } else {
                        this.router.navigate(["/profesional/home"], {
                          replaceUrl: true
                        });
                        this.loadNotifications("supplier");
                      }

                      _context8.next = 16;
                      break;

                    case 15:
                      throw new Error("No se pudo iniciar sesión");

                    case 16:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "presentAlert",
          value: function presentAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var alert;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.alertController.create({
                        header: "Error al iniciar sesión con Apple",
                        message: "Por favor, intenta más tarde",
                        buttons: ["Cerrar"]
                      });

                    case 2:
                      alert = _context9.sent;
                      _context9.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "setAppleEmail",
          value: function setAppleEmail(email) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return _capacitor_storage__WEBPACK_IMPORTED_MODULE_17__["Storage"].set({
                        key: "appleEmail",
                        value: email
                      });

                    case 2:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10);
            }));
          }
        }, {
          key: "getAppleEmail",
          value: function getAppleEmail() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var _yield$_capacitor_sto, value;

              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return _capacitor_storage__WEBPACK_IMPORTED_MODULE_17__["Storage"].get({
                        key: "appleEmail"
                      });

                    case 2:
                      _yield$_capacitor_sto = _context11.sent;
                      value = _yield$_capacitor_sto.value;
                      return _context11.abrupt("return", value);

                    case 5:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11);
            }));
          }
        }, {
          key: "setIdentityToken",
          value: function setIdentityToken(token) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return _capacitor_storage__WEBPACK_IMPORTED_MODULE_17__["Storage"].set({
                        key: "identityToken",
                        value: token
                      });

                    case 2:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12);
            }));
          }
        }, {
          key: "getIdentityToken",
          value: function getIdentityToken() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var _yield$_capacitor_sto2, value;

              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.next = 2;
                      return _capacitor_storage__WEBPACK_IMPORTED_MODULE_17__["Storage"].get({
                        key: "identityToken"
                      });

                    case 2:
                      _yield$_capacitor_sto2 = _context13.sent;
                      value = _yield$_capacitor_sto2.value;
                      return _context13.abrupt("return", value);

                    case 5:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13);
            }));
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_12__["NotificationsService"]
        }, {
          type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_13__["Facebook"]
        }, {
          type: src_app_services_google_google_service__WEBPACK_IMPORTED_MODULE_14__["GoogleService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      LoginPage.propDecorators = {
        passwordEye: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ["passwordEyeRegister", {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }]
        }]
      };
      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-login",
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LoginPage);
      /***/
    },

    /***/
    "Ktwe":
    /*!*********************************************!*\
      !*** ./src/app/login/login/login.module.ts ***!
      \*********************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function Ktwe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
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


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "saXk");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "Jl+/");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "Y47q":
    /*!****************************************************************!*\
      !*** ./node_modules/@capacitor/device/dist/esm/definitions.js ***!
      \****************************************************************/

    /*! no exports provided */

    /***/
    function Y47q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__); //# sourceMappingURL=definitions.js.map

      /***/

    },

    /***/
    "YwB3":
    /*!***********************************************************!*\
      !*** ./node_modules/@capacitor/storage/dist/esm/index.js ***!
      \***********************************************************/

    /*! exports provided: Storage */

    /***/
    function YwB3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Storage", function () {
        return Storage;
      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      "FUe0");
      /* harmony import */


      var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./definitions */
      "3mz4");
      /* empty/unused harmony star reexport */


      var Storage = Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerPlugin"])('Storage', {
        web: function web() {
          return Promise.all(
          /*! import() | web */
          [__webpack_require__.e("common"), __webpack_require__.e("web")]).then(__webpack_require__.bind(null,
          /*! ./web */
          "srMn")).then(function (m) {
            return new m.StorageWeb();
          });
        }
      }); //# sourceMappingURL=index.js.map

      /***/
    },

    /***/
    "bRUQ":
    /*!*********************************************!*\
      !*** ./src/app/login/login/login.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function bRUQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "body {\n  font-family: Poppins;\n  font-size: 12px;\n}\n\nhr {\n  border-bottom: 1px solid #e54360;\n}\n\n.subtitle {\n  margin-top: 40px;\n}\n\n.logo-facebook {\n  background-color: #1877f2;\n  width: 55px;\n  height: 55px;\n  font-size: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  margin: auto;\n}\n\n.logo-apple {\n  background-color: #000000;\n  width: 55px;\n  height: 55px;\n  font-size: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  margin: auto;\n}\n\n.logo-google {\n  background-color: #f93f2d;\n  width: 55px;\n  height: 55px;\n  font-size: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  margin: auto;\n}\n\n.outline-btn {\n  font-size: 10;\n  --color: #009ace;\n  --background: none;\n  border: 2px solid #009ace;\n  border-radius: 10px;\n}\n\n.logo-text {\n  text-align: right;\n}\n\n@media (min-width: 768px) {\n  .logo-text {\n    text-align: right;\n    padding-right: 30px;\n  }\n}\n\n@media (min-width: 768px) {\n  .logo-img {\n    width: 130px;\n  }\n}\n\n.spacing {\n  height: 5%;\n}\n\n@media (min-width: 768px) {\n  .spacing {\n    height: 25%;\n  }\n}\n\n.login-container {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNBO0VBQ0UsZ0NBQUE7QUFFRjs7QUFBQTtFQUNFLGdCQUFBO0FBR0Y7O0FBREE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBSUY7O0FBRkE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBS0Y7O0FBSEE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBTUY7O0FBSEE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFNRjs7QUFIQTtFQUNFLGlCQUFBO0FBTUY7O0FBTEU7RUFGRjtJQUdJLGlCQUFBO0lBQ0EsbUJBQUE7RUFRRjtBQUNGOztBQUpFO0VBREY7SUFFSSxZQUFBO0VBUUY7QUFDRjs7QUFMQTtFQUNFLFVBQUE7QUFRRjs7QUFORTtFQUhGO0lBSUksV0FBQTtFQVNGO0FBQ0Y7O0FBTkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFTRiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbmhyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNTQzNjA7XG59XG4uc3VidGl0bGUge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuLmxvZ28tZmFjZWJvb2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg3N2YyO1xuICB3aWR0aDogNTVweDtcbiAgaGVpZ2h0OiA1NXB4O1xuICBmb250LXNpemU6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5sb2dvLWFwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgd2lkdGg6IDU1cHg7XG4gIGhlaWdodDogNTVweDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IGF1dG87XG59XG4ubG9nby1nb29nbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjkzZjJkO1xuICB3aWR0aDogNTVweDtcbiAgaGVpZ2h0OiA1NXB4O1xuICBmb250LXNpemU6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLm91dGxpbmUtYnRuIHtcbiAgZm9udC1zaXplOiAxMDtcbiAgLS1jb2xvcjogIzAwOWFjZTtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDA5YWNlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4ubG9nby10ZXh0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIH1cbn1cblxuLmxvZ28taW1nIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgd2lkdGg6IDEzMHB4O1xuICB9XG59XG5cbi5zcGFjaW5nIHtcbiAgaGVpZ2h0OiA1JTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBoZWlnaHQ6IDI1JTtcbiAgfVxufVxuXG4ubG9naW4tY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "fHdR":
    /*!***************************************************************************!*\
      !*** ./node_modules/@capacitor-community/apple-sign-in/dist/esm/index.js ***!
      \***************************************************************************/

    /*! exports provided: SignInWithApple */

    /***/
    function fHdR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignInWithApple", function () {
        return SignInWithApple;
      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      "FUe0");
      /* harmony import */


      var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./definitions */
      "snVb");
      /* empty/unused harmony star reexport */


      var SignInWithApple = Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerPlugin"])('SignInWithApple', {
        web: function web() {
          return Promise.all(
          /*! import() | web */
          [__webpack_require__.e("common"), __webpack_require__.e("web")]).then(__webpack_require__.bind(null,
          /*! ./web */
          "2nE5")).then(function (m) {
            return new m.SignInWithAppleWeb();
          });
        }
      }); //# sourceMappingURL=index.js.map

      /***/
    },

    /***/
    "nRaD":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login/login.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function nRaD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"ion-padding \">\n  <div class=\"login-container\">\n    <div style=\"width: 100%;\">\n      <!-- Main Logo -->\n      <ion-row>\n        <ion-col size=\"12\" class=\"text-center\">\n          <img src=\"assets/logos/logo.svg\" alt=\"\">\n        </ion-col>\n      </ion-row>\n\n      <!-- forgot password link -->\n      <ion-row class=\"ion-margin-top\">\n        <ion-col size=\"5\" sizeMd=\"6\" class=\"logo-text\">\n          <ion-text class=\"main-color\">Una empresa</ion-text>\n        </ion-col>\n        <ion-col size=\"6\">\n          <img class=\"logo-img\" src=\"assets/logos/info_logo.png\" alt=\"\">\n        </ion-col>\n      </ion-row>\n\n      <!-- Subtitle -->\n      <ion-row class=\"subtitle\">\n        <ion-col size=\"2\" offset=\"2\">\n          <hr>\n        </ion-col>\n        <ion-col size=\"4\" class=\"ion-text-center\">\n          <ion-text class=\"main-color ion-text-uppercase font-small\">Ingresa con</ion-text>\n        </ion-col>\n        <ion-col size=\"2\">\n          <hr>\n        </ion-col>\n      </ion-row>\n\n      <!-- Social Icons -->\n      <ion-row class=\"ion-margin-top justify-content-center\" style=\"justify-content: center;\">\n        <!-- facebook -->\n        <ion-col size=\"2\" sizeMd=\"1\">\n          <div class=\"logo-facebook\">\n            <ion-icon name=\"logo-facebook\" (click)=\"loginFacebook()\" color=\"light\"></ion-icon>\n          </div>\n        </ion-col>\n        <!-- apple -->\n        <ion-col size=\"4\" sizeMd=\"1\" *ngIf=\"showAppleSignIn\">\n          <div class=\"logo-apple\">\n            <ion-icon name=\"logo-apple\" (click)=\"loginApple()\" color=\"light\"></ion-icon>\n          </div>\n        </ion-col>\n        <!-- google -->\n        <ion-col size=\"2\" sizeMd=\"1\">\n          <div class=\"logo-google\">\n            <ion-icon name=\"logo-google\" (click)=\"loginGoogle()\" color=\"light\"></ion-icon>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <!-- Login Inputs -->\n      <form #f=\"ngForm\" (ngSubmit)=\"login(f)\">\n        <!-- email -->\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item class=\"ion-no-padding\">\n              <ion-label position=\"floating\">\n                <ion-icon src=\"/assets/icon/ic_mail.svg\" slot=\"start\" class=\"main-color\"></ion-icon>\n                <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Email</ion-text>\n              </ion-label>\n              <ion-input ngModel name=\"email\" required #emailCtrl=\"ngModel\" type=\"email\">\n              </ion-input>\n            </ion-item>\n            <!-- error  -->\n            <ion-label *ngIf=\"!emailCtrl.valid && emailCtrl.touched\" class=\"errorMess\">\n              <ion-icon name=\"alert-circle-outline\" class=\"iconFixG\" color=\"danger\"></ion-icon>\n              <ion-text color=\"danger\">\n                <small> El email es requerido</small>\n              </ion-text>\n            </ion-label>\n          </ion-col>\n        </ion-row>\n\n        <!-- password -->\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item class=\"ion-no-padding\">\n              <ion-label position=\"floating\" class=\"main-color\">\n                <ion-icon src=\"/assets/icon/ic_lock.svg\" slot=\"start\" class=\"main-color\"></ion-icon>\n                <ion-text class=\"main-color\">&nbsp;&nbsp;&nbsp;Contraseña</ion-text>\n              </ion-label>\n              <ion-input #passwordEyeRegister ngModel name=\"password\" required #passwordCtrl=\"ngModel\"\n                [type]=\"passwordTypeInput\">\n              </ion-input>\n              <button item-end type=\"button\" class=\"btn_eye_icon\" (click)=\"togglePasswordMode()\">\n                <ion-icon [name]=\"(passwordTypeInput === 'text')?'eye':'eye-off'\"></ion-icon>\n              </button>\n            </ion-item>\n            <!-- error  -->\n            <ion-label *ngIf=\"!passwordCtrl.valid && passwordCtrl.touched\" class=\"errorMess\">\n              <ion-icon name=\"alert-circle-outline\" class=\"iconFixG\" color=\"danger\"></ion-icon>\n              <ion-text color=\"danger\">\n                <small> La contraseña es requerida</small>\n              </ion-text>\n            </ion-label>\n          </ion-col>\n        </ion-row>\n\n        <!-- error handling  -->\n        <ion-row *ngIf=\"error !== undefined\" class=\"ion-margin-top\">\n          <ion-col class=\"ion-text-center\">\n            <ion-label class=\"\">\n              <ion-icon name=\"alert-circle-outline\" class=\"iconFixG\" color=\"danger\"></ion-icon>\n              <ion-text color=\"danger\">\n                <small> {{ error }}</small>\n              </ion-text><br>\n            </ion-label>\n          </ion-col>\n        </ion-row>\n\n        <!-- Login BTN -->\n        <ion-row class=\"ion-margin-top\">\n          <ion-col>\n            <ion-button type=\"submit\" [disabled]=\"!f.valid\" expand=\"block\" class=\"ion-text-uppercase\">\n              Ingresar\n            </ion-button>\n          </ion-col>\n        </ion-row>\n\n      </form>\n\n      <!-- forgot password link -->\n      <ion-row>\n        <ion-col class=\"ion-text-center\">\n          <ion-text class=\"main-color\" [routerLink]=\"['/','recovery']\">¿Olvidaste tu contraseña?</ion-text>\n        </ion-col>\n      </ion-row>\n\n      <!-- Registration Btns -->\n      <ion-row class=\"ion-margin-top\">\n        <!-- <ion-col size=\"6\" offset=\"1\">\n            <ion-button expand=\"block\" class=\"outline-btn\" [routerLink]=\"['/','user', 'home']\">\n              <small>\n                Ingresar como invitado\n              </small>\n            </ion-button>\n          </ion-col> -->\n        <ion-col size=\"12\">\n          <ion-button expand=\"block\" [routerLink]=\"['/','register']\" routerDirection=\"forward\"\n            class=\"ion-text-uppercase\">\n            Registrarme\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n\n</ion-content>";
      /***/
    },

    /***/
    "rvvs":
    /*!**********************************************************!*\
      !*** ./node_modules/@capacitor/device/dist/esm/index.js ***!
      \**********************************************************/

    /*! exports provided: Device */

    /***/
    function rvvs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Device", function () {
        return Device;
      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      "FUe0");
      /* harmony import */


      var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./definitions */
      "Y47q");
      /* empty/unused harmony star reexport */


      var Device = Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerPlugin"])('Device', {
        web: function web() {
          return Promise.all(
          /*! import() | web */
          [__webpack_require__.e("common"), __webpack_require__.e("web")]).then(__webpack_require__.bind(null,
          /*! ./web */
          "U6Qn")).then(function (m) {
            return new m.DeviceWeb();
          });
        }
      }); //# sourceMappingURL=index.js.map

      /***/
    },

    /***/
    "saXk":
    /*!*****************************************************!*\
      !*** ./src/app/login/login/login-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function saXk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
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


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "Jl+/");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "snVb":
    /*!*********************************************************************************!*\
      !*** ./node_modules/@capacitor-community/apple-sign-in/dist/esm/definitions.js ***!
      \*********************************************************************************/

    /*! no exports provided */

    /***/
    function snVb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__); //# sourceMappingURL=definitions.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=login-login-login-module-es5.js.map