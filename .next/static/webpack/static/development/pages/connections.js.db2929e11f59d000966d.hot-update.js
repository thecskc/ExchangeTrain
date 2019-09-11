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
/* harmony import */ var _DialogComp__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./DialogComp */ "./components/DialogComp.js");








var _jsxFileName = "C:\\Users\\santh\\WebstormProjects\\ExchangeTrain\\components\\CoachConnectionRequests.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;








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
      "loaded": false,
      "showDialog": false,
      "dialogTitle": "",
      "dialogContent": ""
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
    _this.handleDialogClose = _this.handleDialogClose.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
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
    key: "handleDialogClose",
    value: function handleDialogClose() {
      this.setState({
        "showDialog": false
      });
    }
  }, {
    key: "handleResumeClick",
    value: function handleResumeClick(event, resume) {
      event.preventDefault();
      console.log(resume); //Router.push(resume);

      window.location.href = resume; // try {
      //     Router.replace(resume).catch(function(err){
      //         console.log(err);
      //     });
      // }
      // catch(e){
      //     console.log("couldn't process request");
      // }
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
        this.setState({
          "showDialog": true,
          "dialogTitle": "Sent Calendly Link",
          "dialogContent": "When the user schedules a call with you, " + "you will receive a notification"
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

        this.setState({
          "showDialog": true,
          "dialogTitle": "Sent ISA Request",
          "dialogContent": "When the user accepts your ISA request, " + "the Exchange team will get in touch with further instructions."
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

      var button = __jsx("button", {
        className: "coach-button",
        onClick: function onClick(event) {
          return _this3.handleClick(event, status, userDoc);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, this.connectionStatus[status]);

      if (status === "ISA_REQUEST" || status === "ISA_APPROVED") {
        button = __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          },
          __self: this
        });
      }

      return __jsx("div", {
        className: "card",
        style: {
          "justifyContent": "space-around"
        },
        key: userDoc.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, __jsx("div", {
        className: "heading-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, heading), __jsx("div", {
        className: "subheading-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, subheading), __jsx("div", {
        style: {
          color: "green"
        },
        className: "subheading-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, this.getButtonValue(status))), __jsx("div", {
        className: "paragraph",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, paragraph), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }), __jsx(_material_ui_core_Button_Button__WEBPACK_IMPORTED_MODULE_12___default.a, {
        color: "primary",
        onClick: function onClick(event) {
          _this3.handleResumeClick(event, userDoc.data().resume);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, "View Resume"), button);
    }
  }, {
    key: "render",
    value: function render() {
      var dialog = __jsx(_DialogComp__WEBPACK_IMPORTED_MODULE_14__["default"], {
        dialog: this.state.showDialog,
        title: this.state.dialogTitle,
        content: this.state.dialogContent,
        handleClose: this.handleDialogClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      });

      if (this.state.loaded) {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, dialog, this.state.cards);
      } else {
        return __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 205
          },
          __self: this
        });
      }
    }
  }]);

  return CoachConnectionRequests;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CoachConnectionRequests);

/***/ }),

/***/ "./components/UserConnectionRequests.js":
/*!**********************************************!*\
  !*** ./components/UserConnectionRequests.js ***!
  \**********************************************/
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _styling_style_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styling/style.css */ "./styling/style.css");
/* harmony import */ var _styling_style_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styling_style_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _DialogComp__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./DialogComp */ "./components/DialogComp.js");








var _jsxFileName = "C:\\Users\\santh\\WebstormProjects\\ExchangeTrain\\components\\UserConnectionRequests.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;








var UserConnectionRequests =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(UserConnectionRequests, _Component);

  function UserConnectionRequests(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, UserConnectionRequests);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(UserConnectionRequests).call(this, props));
    _this.state = {
      "cards": [],
      "loaded": false,
      "showDialog": false,
      "dialogTitle": "",
      "dialogContent": ""
    };
    _this.connectionStatus = {
      USER_CALL_REQUEST: "Call Request Sent",
      COACH_MEETING: "Schedule Call",
      ISA_REQUEST: "Coach Interested in ISA",
      ISA_APPROVED: "Accepted ISA"
    };
    _this.getDoc = _this.getDoc.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.makeCard = _this.makeCard.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.handleResumeClick = _this.handleResumeClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.handleDialogClose = _this.handleDialogClose.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(UserConnectionRequests, [{
    key: "handleResumeClick",
    value: function handleResumeClick(event, resume) {
      event.preventDefault();
      console.log(resume); //Router.push(resume);

      window.location.href = resume; // try {
      //     console.log("resume link", resume);
      //     Router.push(resume).catch(function(err){
      //         console.log(err);
      //     });
      // }
      // catch(e){
      //     console.log("can't forward");
      // }
    }
  }, {
    key: "handleDialogClose",
    value: function handleDialogClose() {
      this.setState({
        "showDialog": false
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick(event, status, fullDoc) {
      event.preventDefault();

      if (status === "USER_CALL_REQUEST") {//do Nothing
      } else if (status === "COACH_MEETING") {
        //Redirect to calendly link
        var calendlyLink = fullDoc.data().calendlylink;
        console.log("calendly link, " + calendlyLink);
        next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push(calendlyLink);
      } else if (status === "ISA_REQUEST") {
        //go into ISA agreement
        var userID = this.props.user.uid;
        var coachID = fullDoc.id;
        var fb = _firebase__WEBPACK_IMPORTED_MODULE_9__["default"].firestore().collection("Connections").doc(userID + "_" + coachID).set({
          "status": "ISA_APPROVED"
        }, {
          merge: true
        });
        this.setState({
          "showDialog": true,
          "dialogTitle": "Approved ISA Request",
          "dialogContent": "The Exchange Team will be in touch " + "shortly with further instructions"
        });
      }
    }
  }, {
    key: "getDoc",
    value: function () {
      var _getDoc = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(coachesList) {
        var i, doc;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                i = 0;

              case 1:
                if (!(i < coachesList.length)) {
                  _context.next = 9;
                  break;
                }

                _context.next = 4;
                return _firebase__WEBPACK_IMPORTED_MODULE_9__["default"].firestore().collection("Profiles").doc(coachesList[i].coach).get();

              case 4:
                doc = _context.sent;
                this.state.cards.push(this.makeCard(doc.data().displayName, doc.data().schoolcompany, coachesList[i].status, doc.data().bio, doc));

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

      var coachesList = [];
      var callReqRef = _firebase__WEBPACK_IMPORTED_MODULE_9__["default"].firestore().collection("Connections").where("user", "==", this.props.user.uid).get().then(function (snapShot) {
        snapShot.forEach(function (doc) {
          var obj = {
            "coach": doc.data().coach,
            "user": doc.data().user,
            "status": doc.data().status
          };
          coachesList.push(obj);
        });

        _this2.getDoc(coachesList).then(function () {
          _this2.setState({
            "loaded": true
          });
        });
      });
    }
  }, {
    key: "getButtonValue",
    value: function getButtonValue(status) {
      if (status === "COACH_MEETING") {
        return "Click To Schedule";
      } else if (status === "ISA_REQUEST") {
        return "Accept ISA";
      }
    }
  }, {
    key: "makeCard",
    value: function makeCard(heading, subheading, status, paragraph, coachDoc) {
      var _this3 = this;

      console.log("Make Card function, " + coachDoc);

      var button = __jsx("button", {
        className: "coach-button",
        onClick: function onClick(event) {
          return _this3.handleClick(event, status, coachDoc);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, this.getButtonValue(status));

      if (status === "USER_CALL_REQUEST" || status === "ISA_APPROVED") {
        button = __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          },
          __self: this
        });
      }

      return __jsx("div", {
        className: "card",
        style: {
          "justifyContent": "space-around"
        },
        key: coachDoc.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, __jsx("div", {
        className: "heading-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, heading), __jsx("div", {
        className: "subheading-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, subheading), __jsx("div", {
        style: {
          color: "green"
        },
        className: "subheading-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, this.connectionStatus[status])), __jsx("div", {
        className: "paragraph",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, paragraph), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
        color: "primary",
        onClick: function onClick(event) {
          _this3.handleResumeClick(event, coachDoc.data().resume);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, "View Resume"), button);
    }
  }, {
    key: "render",
    value: function render() {
      var dialog = __jsx(_DialogComp__WEBPACK_IMPORTED_MODULE_14__["default"], {
        dialog: this.state.showDialog,
        title: this.state.dialogTitle,
        content: this.state.dialogContent,
        handleClose: this.handleDialogClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      });

      if (this.state.loaded) {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, dialog, this.state.cards);
      } else {
        return __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 194
          },
          __self: this
        });
      }
    }
  }]);

  return UserConnectionRequests;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (UserConnectionRequests);

/***/ })

})
//# sourceMappingURL=connections.js.db2929e11f59d000966d.hot-update.js.map