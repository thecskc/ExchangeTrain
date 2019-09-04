webpackHotUpdate("static\\development\\pages\\connections.js",{

/***/ "./components/CoachConnectionRequests.js":
/*!***********************************************!*\
  !*** ./components/CoachConnectionRequests.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./firebase */ "./components/firebase.js");
/* harmony import */ var _styling_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styling/style.css */ "./styling/style.css");
/* harmony import */ var _styling_style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styling_style_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Coach__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Coach */ "./components/Coach.js");
/* harmony import */ var _material_ui_core_Button_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Button/Button */ "./node_modules/@material-ui/core/Button/Button.js");
/* harmony import */ var _material_ui_core_Button_Button__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button_Button__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);








var _jsxFileName = "C:\\Users\\santh\\WebstormProjects\\ExchangeTrain\\components\\CoachConnectionRequests.js";







var CoachConnectionRequests =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(CoachConnectionRequests, _Component);

  function CoachConnectionRequests(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, CoachConnectionRequests);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CoachConnectionRequests).call(this, props));
    _this.state = {
      "cards": [],
      "loaded": false
    };
    _this.connectionStatus = {
      USER_CALL_REQUEST: "Approve Call Request",
      COACH_MEETING: "Send ISA Request",
      ISA_REQUEST: "Send ISA Request",
      ISA_APPROVED: "Approved ISA"
    };
    _this.getDoc = _this.getDoc.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.makeCard = _this.makeCard.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.handleResumeClick = _this.handleResumeClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(CoachConnectionRequests, [{
    key: "getButtonValue",
    value: function getButtonValue(status) {
      if (status === "USER_CALL_REQUEST") {
        return "Send Calendly Link";
      } else if (status === "COACH_MEETING") {
        return "Sent Calendly Link";
      } else if (status === "ISA_REQUEST") {
        return "Sent ISA Request";
      } else if (status === "ISA_APPROVED") {
        return "ISA Approved. The Exchange team will be in touch with next steps";
      }
    }
  }, {
    key: "handleResumeClick",
    value: function handleResumeClick(event, resume) {
      event.preventDefault();
      next_router__WEBPACK_IMPORTED_MODULE_13___default.a.push(resume);
    }
  }, {
    key: "handleClick",
    value: function handleClick(event, status, userDoc) {
      event.preventDefault();

      if (status === "USER_CALL_REQUEST") {
        //when clicked send calendly link to user
        var coachID = this.props.user.uid;
        var userID = userDoc.id;
        var fb = _firebase__WEBPACK_IMPORTED_MODULE_9__["default"].firestore().collection("Connections").doc(userID + "_" + coachID).set({
          "status": "COACH_MEETING"
        }, {
          merge: true
        });
      } else if (status === "COACH_MEETING") {
        //when clicked send isa request
        var _coachID = this.props.user.uid;
        var _userID = userDoc.id;

        var _fb = _firebase__WEBPACK_IMPORTED_MODULE_9__["default"].firestore().collection("Connections").doc(_userID + "_" + _coachID).set({
          "status": "ISA_REQUEST"
        }, {
          merge: true
        });
      } else if (status === "ISA_APPROVED") {//Show ISA has been approved
      }
    }
  }, {
    key: "getDoc",
    value: function () {
      var _getDoc = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(userList) {
        var i, doc;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                i = 0;

              case 1:
                if (!(i < userList.length)) {
                  _context.next = 9;
                  break;
                }

                _context.next = 4;
                return _firebase__WEBPACK_IMPORTED_MODULE_9__["default"].firestore().collection("Profiles").doc(userList[i].user).get();

              case 4:
                doc = _context.sent;
                this.state.cards.push(this.makeCard(doc.data().displayName, doc.data().schoolcompany, userList[i].status, doc.data().bio, doc));

              case 6:
                i++;
                _context.next = 1;
                break;

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getDoc(_x) {
        return _getDoc.apply(this, arguments);
      }

      return getDoc;
    }()
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var userList = [];
      var callReqRef = _firebase__WEBPACK_IMPORTED_MODULE_9__["default"].firestore().collection("Connections").where("coach", "==", this.props.user.uid).get().then(function (snapShot) {
        snapShot.forEach(function (doc) {
          var obj = {
            "coach": doc.data().coach,
            "user": doc.data().user,
            "status": doc.data().status
          };
          userList.push(obj);
        });

        _this2.getDoc(userList).then(function () {
          _this2.setState({
            "loaded": true
          });
        });
      });
    }
  }, {
    key: "makeCard",
    value: function makeCard(heading, subheading, status, paragraph, userDoc) {
      var _this3 = this;

      var button = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        className: "coach-button",
        onClick: function onClick(event) {
          return _this3.handleClick(event, status, userDoc);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, this.connectionStatus[status]);

      if (status === "ISA_REQUEST" || status === "ISA_APPROVED") {
        button = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          },
          __self: this
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "card",
        style: {
          "justifyContent": "space-around"
        },
        key: userDoc.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "heading-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, heading), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "subheading-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, subheading), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          color: "green"
        },
        className: "subheading-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, this.getButtonValue(status)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "paragraph",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, paragraph), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Button_Button__WEBPACK_IMPORTED_MODULE_12___default.a, {
        color: "primary",
        onClick: function onClick(event) {
          _this3.handleResumeClick(event, userDoc.resume);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, "View Resume"), button);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.loaded) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, this.state.cards);
      } else {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162
          },
          __self: this
        });
      }
    }
  }]);

  return CoachConnectionRequests;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CoachConnectionRequests);

/***/ })

})
//# sourceMappingURL=connections.js.408819809941e3fc5512.hot-update.js.map