webpackHotUpdate("static\\development\\pages\\coaches.js",{

/***/ "./pages/coaches.js":
/*!**************************!*\
  !*** ./pages/coaches.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/firebase */ "./components/firebase.js");
/* harmony import */ var _styling_coaches_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styling/coaches.css */ "./styling/coaches.css");
/* harmony import */ var _styling_coaches_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styling_coaches_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styling_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styling/style.css */ "./styling/style.css");
/* harmony import */ var _styling_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styling_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Coach__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Coach */ "./components/Coach.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar.js");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Loader */ "./components/Loader.js");






var _jsxFileName = "C:\\Users\\santh\\WebstormProjects\\ExchangeTrain\\pages\\coaches.js";








var Coaches =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Coaches, _Component);

  function Coaches(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Coaches);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Coaches).call(this, props));
    _this.getCoaches = _this.getCoaches.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.state = {
      "loadedCoaches": false,
      "loaded": false,
      "user": null,
      "profile": false
    };
    _this.coaches = [];
    console.log("constructor called");
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Coaches, [{
    key: "getCoaches",
    value: function getCoaches() {
      var _this2 = this;

      var coachesRef = _components_firebase__WEBPACK_IMPORTED_MODULE_7__["default"].firestore().collection("Profiles").where("isCoach", "==", true).get().then(function (snapshot) {
        var count = 1;
        snapshot.forEach(function (doc) {
          _this2.coaches.push(react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Coach__WEBPACK_IMPORTED_MODULE_10__["default"], {
            key: doc.id,
            coachid: doc.id,
            name: doc.data().displayName,
            bio: doc.data().bio,
            company: doc.data().schoolcompany,
            location: doc.data().location,
            resume: doc.data().resume,
            userid: _this2.state.user.uid,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            __self: this
          }));
        });
        console.log("Coaches list");
        console.log(_this2.coaches);
        console.log(_this2.coaches.length);

        _this2.setState({
          "loadedCoaches": true
        });
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      _components_firebase__WEBPACK_IMPORTED_MODULE_7__["default"].auth().onAuthStateChanged(function (user) {
        if (user) {
          console.log("user");
          console.log(user);
          _components_firebase__WEBPACK_IMPORTED_MODULE_7__["default"].firestore().collection("Profiles").doc(user.uid).get().then(function (doc) {
            if (doc.exists) {
              _this3.setState({
                "loaded": true,
                "user": user,
                "profile": true
              });

              _this3.getCoaches();
            } else {
              _this3.setState({
                "loaded": true,
                "user": user,
                "profile": false
              });
            }
          });
        } else {
          _this3.setState({
            "loaded": true,
            "user": null
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.loaded) {
        if (this.state.user) {
          if (this.state.profile) {
            if (this.state.loadedCoaches) {
              return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_11__["default"], {
                user: this.state.user,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 107
                },
                __self: this
              }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
                className: "coaches-container",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 108
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
                className: "page-heading",
                style: {
                  "alignSelf": "center"
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 111
                },
                __self: this
              }, "Coaches"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
                className: "card-section",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 113
                },
                __self: this
              }, this.coaches)));
            } else {
              return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Loader__WEBPACK_IMPORTED_MODULE_12__["default"], {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 126
                },
                __self: this
              });
            }
          } else {
            return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 131
              },
              __self: this
            }, "Please fill out your profile first");
          }
        } else {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 135
            },
            __self: this
          }, "Not Logged In");
        }
      } else {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Loader__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140
          },
          __self: this
        });
      }
    }
  }]);

  return Coaches;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Coaches);

/***/ })

})
//# sourceMappingURL=coaches.js.446455f9fd757396da4d.hot-update.js.map