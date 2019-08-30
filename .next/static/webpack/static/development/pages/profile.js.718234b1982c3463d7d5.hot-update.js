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







var _jsxFileName = "C:\\Users\\santh\\WebstormProjects\\ExchangeTrain\\pages\\profile.js";








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
      "calendlylink": ""
    };
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.loadedProfile = _this.loadedProfile.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.editProfile = _this.editProfile.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleAccessCode = _this.handleAccessCode.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Profile, [{
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
    key: "settingData",
    value: function settingData() {
      var setMap = {
        "displayName": this.state.displayName,
        "bio": this.state.bio,
        "location": this.state.location,
        "schoolcompany": this.state.schoolcompany
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
      this.handleAccessCode();
      var dbRef = _components_firebase__WEBPACK_IMPORTED_MODULE_8__["default"].firestore().collection("Profiles").doc(this.state.user.uid).set(this.settingData()).then(function () {
        console.log("written");
        var userProfile = {
          "user": _this2.state.user,
          "displayName": _this2.state.displayName,
          "bio": _this2.state.bio,
          "location": _this2.state.location,
          "schoolcompany": _this2.state.schoolcompany
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
            "loaded": true
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
            "loaded": true
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
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_13__["default"], {
            user: this.state.user,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 199
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "container",
            style: {
              "justify-content": "center"
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 201
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
            style: {
              "align-self": "center"
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 203
            },
            __self: this
          }, "Fill Out Your Profile"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "card-section",
            style: {
              "align-self": "center"
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 205
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "card",
            style: {
              "width": "50vw",
              "height": "70vh"
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 206
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 207
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__["default"], {
            name: "displayName",
            placeholder: "Enter Name",
            value: this.state.displayName,
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 210
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 217
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 217
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__["default"], {
            name: "schoolcompany",
            placeholder: "School/Company",
            value: this.state.schoolcompany,
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 219
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 226
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 226
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__["default"], {
            name: "location",
            placeholder: "Location",
            value: this.state.location,
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 228
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 236
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 236
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__["default"], {
            name: "bio",
            placeholder: "Bio",
            value: this.state.bio,
            onChange: this.handleChange,
            multiline: true,
            rows: "4",
            rowsMax: "7",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 239
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 251
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 251
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__["default"], {
            name: "coachcode",
            placeholder: "Coach Access Code",
            value: this.state.coachcode,
            onChange: this.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 253
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 260
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 260
            },
            __self: this
          }), function () {
            if (_this5.state.isCoach) {
              return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__["default"], {
                name: "calendlylink",
                placeholder: "Enter your calendly link",
                value: _this5.state.calendlylink,
                onChange: _this5.handleChange,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 267
                },
                __self: this
              });
            }
          }(), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 280
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 280
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
            color: "primary",
            variant: "contained",
            onClick: this.editProfile,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 283
            },
            __self: this
          }, "Save"))))));
        } else {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 298
            },
            __self: this
          }, "Not logged in");
        }
      } else {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 303
          },
          __self: this
        }, "Loading");
      }
    }
  }]);

  return Profile;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ })

})
//# sourceMappingURL=profile.js.718234b1982c3463d7d5.hot-update.js.map