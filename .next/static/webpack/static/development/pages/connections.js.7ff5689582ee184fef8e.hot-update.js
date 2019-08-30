webpackHotUpdate("static\\development\\pages\\connections.js",{

/***/ "./pages/connections.js":
/*!******************************!*\
  !*** ./pages/connections.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/firebase */ "./components/firebase.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _styling_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styling/style.css */ "./styling/style.css");
/* harmony import */ var _styling_style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styling_style_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/esm/DialogContentText/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _components_UserConnectionRequests__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/UserConnectionRequests */ "./components/UserConnectionRequests.js");
/* harmony import */ var _components_CoachConnectionRequests__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/CoachConnectionRequests */ "./components/CoachConnectionRequests.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar.js");





var _jsxFileName = "C:\\Users\\santh\\WebstormProjects\\ExchangeTrain\\pages\\connections.js";















var Connections =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Connections, _Component);

  function Connections(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Connections);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Connections).call(this, props));
    _this.state = {
      "loaded": false,
      "user": null,
      "isCoach": false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Connections, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _components_firebase__WEBPACK_IMPORTED_MODULE_6__["default"].auth().onAuthStateChanged(function (user) {
        if (user) {
          console.log("user");
          console.log(user);
          _components_firebase__WEBPACK_IMPORTED_MODULE_6__["default"].firestore().collection("Profiles").doc(user.uid).get().then(function (doc) {
            console.log(doc.data());

            if (doc.data().isCoach) {
              _this2.setState({
                "loaded": true,
                "user": user,
                "isCoach": true
              });
            } else {
              _this2.setState({
                "loaded": true,
                "user": user,
                "isCoach": false
              });
            }
          });
        } else {
          _this2.setState({
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
          if (this.state.isCoach) {
            return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_18__["default"], {
              user: this.state.user,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 63
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
              className: "container",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 65
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_CoachConnectionRequests__WEBPACK_IMPORTED_MODULE_17__["default"], {
              user: this.state.user,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 67
              },
              __self: this
            })));
          } else {
            return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_18__["default"], {
              user: this.state.user,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 77
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 78
              },
              __self: this
            }, "Connection Requests"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
              className: "container",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 80
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_UserConnectionRequests__WEBPACK_IMPORTED_MODULE_16__["default"], {
              user: this.state.user,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 81
              },
              __self: this
            })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 83
              },
              __self: this
            }));
          }
        } else {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 93
            },
            __self: this
          }, "Not Logged In");
        }
      } else {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, "Loading");
      }
    }
  }]);

  return Connections;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Connections);

/***/ })

})
//# sourceMappingURL=connections.js.7ff5689582ee184fef8e.hot-update.js.map