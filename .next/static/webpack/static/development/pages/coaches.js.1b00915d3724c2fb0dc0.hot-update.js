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
      "loadedCoaches": false
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
            key: count++,
            name: doc.data().displayName,
            bio: doc.data().bio,
            company: doc.data().schoolcompany,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            },
            __self: this
          }));

          _this2.coaches.push(react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Coach__WEBPACK_IMPORTED_MODULE_10__["default"], {
            key: count++,
            name: doc.data().displayName,
            bio: doc.data().bio,
            company: doc.data().schoolcompany,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          }));

          _this2.coaches.push(react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Coach__WEBPACK_IMPORTED_MODULE_10__["default"], {
            key: count++,
            name: doc.data().displayName,
            bio: doc.data().bio,
            company: doc.data().schoolcompany,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52
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
      this.getCoaches();
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.loadedCoaches) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "coaches-container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
          style: {
            "alignSelf": "center"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }, "Coaches"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "card-section",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }, this.coaches));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }, "Loading coaches");
      }
    }
  }]);

  return Coaches;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Coaches);

/***/ })

})
//# sourceMappingURL=coaches.js.1b00915d3724c2fb0dc0.hot-update.js.map