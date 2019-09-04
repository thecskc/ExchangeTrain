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
      "user": null
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
              lineNumber: 39
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

      this.getCoaches();
      _components_firebase__WEBPACK_IMPORTED_MODULE_7__["default"].auth().onAuthStateChanged(function (user) {
        if (user) {
          console.log("user");
          console.log(user);

          _this3.setState({
            "loaded": true,
            "user": user
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
          if (this.state.loadedCoaches) {
            return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_11__["default"], {
              user: this.state.user,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 93
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
              className: "coaches-container",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 94
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
              className: "page-heading",
              style: {
                "alignSelf": "center"
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 97
              },
              __self: this
            }, "Coaches"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
              className: "card-section",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 99
              },
              __self: this
            }, this.coaches)));
          } else {
            return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Loader__WEBPACK_IMPORTED_MODULE_12__["default"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 112
              },
              __self: this
            });
          }
        } else {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 117
            },
            __self: this
          }, "Not Logged In");
        }
      } else {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Loader__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
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
//# sourceMappingURL=coaches.js.52dfd7f2f0135a214c0b.hot-update.js.map