webpackHotUpdate("static\\development\\pages\\profile.js",{

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/firebase */ "./components/firebase.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _styling_style_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styling/style.css */ "./styling/style.css");
/* harmony import */ var _styling_style_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styling_style_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar.js");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Loader */ "./components/Loader.js");
/* harmony import */ var valid_url__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! valid-url */ "./node_modules/valid-url/index.js");
/* harmony import */ var valid_url__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(valid_url__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_loggedout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/loggedout */ "./components/loggedout.js");
/* harmony import */ var _styling_material_components_web_min_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../styling/material-components-web.min.css */ "./styling/material-components-web.min.css");
/* harmony import */ var _styling_material_components_web_min_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_styling_material_components_web_min_css__WEBPACK_IMPORTED_MODULE_17__);







var _jsxFileName = "C:\\Users\\santh\\WebstormProjects\\ExchangeTrain\\pages\\profile.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;












var Profile =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Profile, _Component);

  function Profile(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Profile);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Profile).call(this, props));
    _this.state = {
      "user": null,
      "loaded": false,
      "displayName": "",
      "bio": "",
      "coachcode": "",
      "schoolcompany": "",
      "location": "",
      "isCoach": false,
      "calendlylink": "",
      "resume": ""
    };
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.loadedProfile = _this.loadedProfile.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.editProfile = _this.editProfile.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleAccessCode = _this.handleAccessCode.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.cutWords = _this.cutWords.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Profile, [{
    key: "cutWords",
    value: function cutWords(strVal) {
      var result = strVal;
      var resultArray = result.split(" ");

      if (resultArray.length > 100) {
        resultArray = resultArray.slice(0, 100);
        result = resultArray.join(" ") + "...";
      }

      console.log("invoked cutwords");
      return result;
    }
  }, {
    key: "handleAccessCode",
    value: function handleAccessCode() {
      console.log("env code");
      console.log("exchange800414b892");

      if (this.state.coachcode === "exchange800414b892".toString()) {
        this.setState({
          "coachcode": this.state.coachcode,
          "isCoach": true
        });
      } else {
        this.setState({
          "coachcode": this.state.coachcode,
          "isCoach": false
        });
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      event.preventDefault();
      var nameVal = event.target.name;
      var valueVal = event.target.value;
      this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, nameVal, valueVal));
    }
  }, {
    key: "loadedProfile",
    value: function loadedProfile(inputMap) {
      var stateMap = {};

      for (var key in inputMap) {
        if (inputMap.hasOwnProperty(key)) {
          stateMap[key] = inputMap[key];
        }
      }

      console.log("loading profile setting state");
      console.log(stateMap);
      this.setState(stateMap);
    }
  }, {
    key: "validateForm",
    value: function validateForm() {
      var error = "";

      if (!this.state.displayName) {
        error += " Please add your name.";
      }

      if (!this.state.bio) {
        error += " Please add your bio.";
      }

      if (!this.state.schoolcompany) {
        error += " Please list your school or company.";
      }

      if (!this.state.location) {
        error += " Please enter your location.";
      }

      if (!this.state.resume) {
        error += " Please add a link to your resume.";
      } else {
        if (!Object(valid_url__WEBPACK_IMPORTED_MODULE_15__["isWebUri"])(this.state.resume)) {
          console.log("checking valid url", this.state.resume);
          error += "Please enter a valid URL for your resume";
        }
      }

      if (this.state.isCoach) {
        if (!this.state.calendlylink) {
          error += " Please add your calendly link";
        }
      }

      if (error) {
        alert(error);
        return false;
      } else {
        return true;
      }
    }
  }, {
    key: "settingData",
    value: function settingData() {
      var setMap = {
        "displayName": this.state.displayName,
        "bio": this.state.bio,
        "location": this.state.location,
        "schoolcompany": this.state.schoolcompany,
        "resume": this.state.resume
      };

      if (this.state.isCoach) {
        setMap["isCoach"] = true;
        setMap["coachcode"] = this.state.coachcode;
        setMap["calendlylink"] = this.state.calendlylink;
      }

      return setMap;
    }
  }, {
    key: "editProfile",
    value: function editProfile(event) {
      var _this2 = this;

      event.preventDefault();

      if (this.validateForm()) {
        this.handleAccessCode();
        this.state.bio = this.cutWords(this.state.bio);
        var dbRef = _components_firebase__WEBPACK_IMPORTED_MODULE_8__["default"].firestore().collection("Profiles").doc(this.state.user.uid).set(this.settingData()).then(function () {
          console.log("written");
          var userProfile = {
            "user": _this2.state.user,
            "displayName": _this2.state.displayName,
            "bio": _this2.state.bio,
            "location": _this2.state.location,
            "schoolcompany": _this2.state.schoolcompany,
            "resume": _this2.state.resume
          };

          if (_this2.state.isCoach) {
            userProfile["isCoach"] = true;
            userProfile["coachcode"] = _this2.state.coachcode;
            userProfile["calendlylink"] = _this2.state.calendlylink;
          }

          _this2.loadedProfile(userProfile);
        })["catch"](function (error) {
          console.log(error);
        });
      }
    }
  }, {
    key: "getUserProfile",
    value: function getUserProfile(user) {
      var _this3 = this;

      var db = _components_firebase__WEBPACK_IMPORTED_MODULE_8__["default"].firestore();
      var docRef = db.collection("Profiles").doc(user.uid);
      docRef.get().then(function (doc) {
        if (doc.exists) {
          console.log("querying doc");
          console.log(doc.data());
          var userProfile = {
            "user": user,
            "displayName": doc.data().displayName,
            "bio": doc.data().bio,
            "location": doc.data().location,
            "schoolcompany": doc.data().schoolcompany,
            "loaded": true,
            "resume": doc.data().resume
          };

          if (doc.data().isCoach) {
            userProfile["isCoach"] = true;
            userProfile["coachcode"] = doc.data().coachcode;
            userProfile["calendlylink"] = doc.data().calendlylink;
          }

          _this3.loadedProfile(userProfile);
        } else {
          console.log("no document");
          var _userProfile = {
            "user": user,
            "displayName": "",
            "bio": "",
            "location": "",
            "schoolcompany": "",
            "loaded": true,
            "resume": ""
          };

          _this3.loadedProfile(_userProfile);
        }
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this4 = this;

      _components_firebase__WEBPACK_IMPORTED_MODULE_8__["default"].auth().onAuthStateChanged(function (user) {
        if (user) {
          console.log("user");
          console.log(user);

          _this4.getUserProfile(user);
        } else {
          _this4.setState({
            "loaded": true,
            "user": null
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      if (this.state.loaded) {
        if (this.state.user) {
          return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(_components_navbar__WEBPACK_IMPORTED_MODULE_13__["default"], {
            user: this.state.user,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 267
            },
            __self: this
          }), __jsx("div", {
            className: "container",
            style: {
              "justify-content": "center"
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 269
            },
            __self: this
          }, __jsx("div", {
            className: "page-heading",
            style: {
              "align-self": "center"
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 272
            },
            __self: this
          }, "Fill Out Your Profile"), __jsx("div", {
            className: "card",
            style: {
              "width": "80vw",
              "height": "80vh"
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 275
            },
            __self: this
          }, __jsx("form", {
            style: {
              width: "70%",
              height: "100%"
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 276
            },
            __self: this
          }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__["default"], {
            name: "displayName",
            placeholder: "Enter Name",
            value: this.state.displayName,
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 279
            },
            __self: this
          }), __jsx("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 286
            },
            __self: this
          }), __jsx("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 286
            },
            __self: this
          }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__["default"], {
            name: "schoolcompany",
            placeholder: "School/Company",
            value: this.state.schoolcompany,
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 288
            },
            __self: this
          }), __jsx("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 295
            },
            __self: this
          }), __jsx("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 295
            },
            __self: this
          }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__["default"], {
            name: "location",
            placeholder: "Location",
            value: this.state.location,
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 297
            },
            __self: this
          }), __jsx("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 305
            },
            __self: this
          }), __jsx("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 305
            },
            __self: this
          }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__["default"], {
            name: "bio",
            placeholder: "Bio (100 words limit)",
            value: this.state.bio,
            onChange: this.handleChange,
            multiline: true,
            rows: "4",
            rowsMax: "7",
            style: {
              width: "100%"
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 308
            },
            __self: this
          }), __jsx("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 320
            },
            __self: this
          }), __jsx("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 320
            },
            __self: this
          }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__["default"], {
            name: "resume",
            placeholder: "Resume URL",
            value: this.state.resume,
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 323
            },
            __self: this
          }), __jsx("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 333
            },
            __self: this
          }), __jsx("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 333
            },
            __self: this
          }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__["default"], {
            name: "coachcode",
            placeholder: "Coach Access Code",
            value: this.state.coachcode,
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 335
            },
            __self: this
          }), __jsx("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 342
            },
            __self: this
          }), __jsx("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 342
            },
            __self: this
          }), function () {
            if (_this5.state.isCoach) {
              return __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__["default"], {
                name: "calendlylink",
                placeholder: "Enter your calendly link",
                value: _this5.state.calendlylink,
                onChange: _this5.handleChange,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 349
                },
                __self: this
              });
            }
          }(), __jsx("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 362
            },
            __self: this
          }), __jsx("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 362
            },
            __self: this
          }), __jsx("button", {
            className: "mdc-button mdc-button--raised",
            style: {
              "background": "orange",
              "width": "100%"
            },
            onClick: this.editProfile,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 364
            },
            __self: this
          }, __jsx("span", {
            className: "mdc-button__label",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 366
            },
            __self: this
          }, "Button"))))));
        } else {
          return __jsx(_components_loggedout__WEBPACK_IMPORTED_MODULE_16__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 384
            },
            __self: this
          });
        }
      } else {
        return __jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_14__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 389
          },
          __self: this
        });
      }
    }
  }]);

  return Profile;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ })

})
//# sourceMappingURL=profile.js.8b2d5439fcffec62eea7.hot-update.js.map