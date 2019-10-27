module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Coach.js":
/*!*****************************!*\
  !*** ./components/Coach.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/firebase */ "./components/firebase.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styling_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styling/style.css */ "./styling/style.css");
/* harmony import */ var _styling_style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styling_style_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "@material-ui/core/DialogActions");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "@material-ui/core/DialogContent");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "@material-ui/core/DialogContentText");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "@material-ui/core/DialogTitle");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\santh\\WebstormProjects\\ExchangeTrain\\components\\Coach.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












class Coach extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.sendInterest = this.sendInterest.bind(this);
    this.state = {
      "showDialog": false
    };
    this.handleDialogClose = this.handleDialogClose.bind(this);
    this.handleResumeClick = this.handleResumeClick.bind(this);
  }

  handleDialogClose(event) {
    event.preventDefault();
    this.setState({
      "showDialog": false
    });
  }

  handleResumeClick(event, resume) {
    event.preventDefault(); // console.log("resume", resume);
    //window.location.href = resume;

    window.open(resume); // try {
    //
    //     window.location.replace(resume);
    //     Router.replace(resume).catch(function(err){
    //         console.log(err);
    //     });
    // }
    // catch(e){
    //     console.log("couldn't process request");
    // }
  }

  sendInterest(event) {
    event.preventDefault();

    if (this.props.coachid !== this.props.userid) {
      const dbRef = _components_firebase__WEBPACK_IMPORTED_MODULE_1__["default"].firestore().collection("Connections").doc(this.props.userid + "_" + this.props.coachid).set({
        "user": this.props.userid,
        "coach": this.props.coachid,
        "status": "USER_CALL_REQUEST"
      }).then(() => {
        this.setState({
          "showDialog": true
        });
      });
    }
  }

  render() {
    // console.log(this.props.name + "'s id is " + this.props.id);
    let dialogShow;

    if (this.state.showDialog) {
      dialogShow = __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6___default.a, {
        open: this.state.showDialog,
        onClose: this.handleDialogClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "Your Request Has Been Sent "), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, __jsx(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "This coach will respond after reviewing your profile"))));
    }

    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, dialogShow, __jsx("div", {
      className: "card",
      style: {
        "justifyContent": "space-between"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, __jsx("div", {
      className: "heading-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, this.props.name), __jsx("div", {
      className: "subheading-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, this.props.company + ", " + this.props.location), __jsx("div", {
      className: "subheading-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, this.props.area_of_training)), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }), __jsx("div", {
      className: "paragraph",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, this.props.bio), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
      color: "primary",
      onClick: event => {
        this.handleResumeClick(event, this.props.resume);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, "View Resume"), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }), __jsx("button", {
      className: "coach-button",
      onClick: this.sendInterest,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, "Connect")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Coach);

/***/ }),

/***/ "./components/Loader.js":
/*!******************************!*\
  !*** ./components/Loader.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styling_loading_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styling/loading.css */ "./styling/loading.css");
/* harmony import */ var _styling_loading_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styling_loading_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styling_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styling/style.css */ "./styling/style.css");
/* harmony import */ var _styling_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styling_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\santh\\WebstormProjects\\ExchangeTrain\\components\\Loader.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




class Loader extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  render() {
    return __jsx("div", {
      className: "container",
      style: {
        "justifyContent": "center"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("div", {
      className: "lds-spinner",
      style: {
        "alignSelf": "center"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./components/firebase.js":
/*!********************************!*\
  !*** ./components/firebase.js ***!
  \********************************/
/*! exports provided: firestore, auth, storage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firestore", function() { return firestore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return storage; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ "firebase/storage");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! underscore */ "underscore");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_4__);





const firebaseConfig = {
  apiKey: "AIzaSyBqLlbDoL_fDIVin_kmgNHAwbn-CZazuQU",
  authDomain: "exchange-231906.firebaseapp.com",
  databaseURL: "https://exchange-231906.firebaseio.com",
  projectId: "exchange-231906",
  storageBucket: "exchange-231906.appspot.com",
  messagingSenderId: "349987543370",
  appId: "1:349987543370:web:2fb377e2c8778ec1"
};

if (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig);
}

console.log("initializing app");
const firestore = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.firestore();
const auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth();
const storage = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.storage();
/* harmony default export */ __webpack_exports__["default"] = (firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./components/loggedout.js":
/*!*********************************!*\
  !*** ./components/loggedout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/firebase */ "./components/firebase.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styling_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styling/style.css */ "./styling/style.css");
/* harmony import */ var _styling_style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styling_style_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "@material-ui/core/DialogActions");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "@material-ui/core/DialogContent");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "@material-ui/core/DialogContentText");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "@material-ui/core/DialogTitle");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\santh\\WebstormProjects\\ExchangeTrain\\components\\loggedout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












class LoggedOut extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    window.location.href = "/login";
  }

  render() {
    return __jsx("div", {
      className: "container",
      style: {
        "padding": "0px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("div", {
      className: "hero",
      style: {
        "flex-direction": "column",
        justifyContent: "center",
        alignItems: "center"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("div", {
      className: "heading",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "You are logged out!"), __jsx("div", {
      className: "subheading",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "Sign In/ Sign Up for access."), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), __jsx("button", {
      onClick: this.handleClick,
      className: "landing-button",
      style: {
        width: "10vw",
        height: "10vh",
        padding: "0px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "Sign Up/ Sign In"), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (LoggedOut);

/***/ }),

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styling_Navbar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styling/Navbar.css */ "./styling/Navbar.css");
/* harmony import */ var _styling_Navbar_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styling_Navbar_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/firebase */ "./components/firebase.js");
var _jsxFileName = "C:\\Users\\santh\\WebstormProjects\\ExchangeTrain\\components\\navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






class Navbar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      "signedOut": false
    };
    this.handleSignOut = this.handleSignOut.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event, path) {
    event.preventDefault();
    window.location.href = path;
  }

  handleSignOut(event) {
    event.preventDefault();
    _components_firebase__WEBPACK_IMPORTED_MODULE_4__["default"].auth().signOut().then(this.setState({
      "signedOut": true
    }));
  }

  render() {
    if (this.props.user) {
      return __jsx("div", {
        className: "topnav",
        id: "myTopnav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx("div", {
        onClick: event => this.handleClick(event, "/"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Home"), __jsx("div", {
        onClick: event => this.handleClick(event, "/connections"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Connections"), __jsx("div", {
        onClick: event => this.handleClick(event, "/profile"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Profile"), __jsx("div", {
        onClick: event => this.handleClick(event, "/coaches"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Coaches"), __jsx("div", {
        onClick: this.handleSignOut,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Sign Out"));
    } else {
      return __jsx("div", {
        className: "topnav",
        id: "myTopnav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx("div", {
        onClick: event => this.handleClick(event, "/"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Home"), __jsx("div", {
        onClick: event => this.handleClick(event, "/login"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "Sign In/Sign Up"));
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/coaches.js":
/*!**************************!*\
  !*** ./pages/coaches.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/firebase */ "./components/firebase.js");
/* harmony import */ var _styling_coaches_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styling/coaches.css */ "./styling/coaches.css");
/* harmony import */ var _styling_coaches_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styling_coaches_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styling_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styling/style.css */ "./styling/style.css");
/* harmony import */ var _styling_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styling_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Coach__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Coach */ "./components/Coach.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar.js");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Loader */ "./components/Loader.js");
/* harmony import */ var _components_loggedout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/loggedout */ "./components/loggedout.js");
var _jsxFileName = "C:\\Users\\santh\\WebstormProjects\\ExchangeTrain\\pages\\coaches.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









class Coaches extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.getCoaches = this.getCoaches.bind(this);
    this.state = {
      "loadedCoaches": false,
      "loaded": false,
      "user": null,
      "profile": false
    };
    this.coaches = [];
  }

  getCoaches() {
    const coachesRef = _components_firebase__WEBPACK_IMPORTED_MODULE_1__["default"].firestore().collection("Profiles").where("isCoach", "==", true).get().then(snapshot => {
      let count = 1;
      snapshot.forEach(doc => {
        this.coaches.push(__jsx(_components_Coach__WEBPACK_IMPORTED_MODULE_4__["default"], {
          key: doc.id,
          coachid: doc.id,
          name: doc.data().displayName,
          bio: doc.data().bio,
          company: doc.data().schoolcompany,
          location: doc.data().location,
          resume: doc.data().resume,
          area_of_training: doc.data().area_of_training,
          userid: this.state.user.uid,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }));
      }); // console.log("Coaches list");
      // console.log(this.coaches);
      // console.log(this.coaches.length);

      this.setState({
        "loadedCoaches": true
      });
    });
  }

  componentDidMount() {
    _components_firebase__WEBPACK_IMPORTED_MODULE_1__["default"].auth().onAuthStateChanged(user => {
      if (user) {
        // console.log("user");
        // console.log(user);
        _components_firebase__WEBPACK_IMPORTED_MODULE_1__["default"].firestore().collection("Profiles").doc(user.uid).get().then(doc => {
          if (doc.exists) {
            this.setState({
              "loaded": true,
              "user": user,
              "profile": true
            });
            this.getCoaches();
          } else {
            this.setState({
              "loaded": true,
              "user": user,
              "profile": false
            });
          }
        });
      } else {
        this.setState({
          "loaded": true,
          "user": null
        });
      }
    });
  }

  render() {
    if (this.state.loaded) {
      if (this.state.user) {
        if (this.state.profile) {
          if (this.state.loadedCoaches) {
            return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_navbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
              user: this.state.user,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 107
              },
              __self: this
            }), __jsx("div", {
              className: "coaches-container",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 108
              },
              __self: this
            }, __jsx("div", {
              className: "page-heading",
              style: {
                "alignSelf": "center"
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 111
              },
              __self: this
            }, "Coaches"), __jsx("div", {
              className: "card-section",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 113
              },
              __self: this
            }, this.coaches)));
          } else {
            return __jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_6__["default"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 126
              },
              __self: this
            });
          }
        } else {
          return __jsx("h1", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 131
            },
            __self: this
          }, "Please fill out your profile first");
        }
      } else {
        return __jsx(_components_loggedout__WEBPACK_IMPORTED_MODULE_7__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          },
          __self: this
        });
      }
    } else {
      return __jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      });
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Coaches);

/***/ }),

/***/ "./styling/Navbar.css":
/*!****************************!*\
  !*** ./styling/Navbar.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styling/coaches.css":
/*!*****************************!*\
  !*** ./styling/coaches.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styling/loading.css":
/*!*****************************!*\
  !*** ./styling/loading.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styling/style.css":
/*!***************************!*\
  !*** ./styling/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 6:
/*!********************************!*\
  !*** multi ./pages/coaches.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\santh\WebstormProjects\ExchangeTrain\pages\coaches.js */"./pages/coaches.js");


/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Dialog":
/*!*******************************************!*\
  !*** external "@material-ui/core/Dialog" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "@material-ui/core/DialogActions":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogActions" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),

/***/ "@material-ui/core/DialogContent":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogContent" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ "@material-ui/core/DialogContentText":
/*!******************************************************!*\
  !*** external "@material-ui/core/DialogContentText" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContentText");

/***/ }),

/***/ "@material-ui/core/DialogTitle":
/*!************************************************!*\
  !*** external "@material-ui/core/DialogTitle" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/storage");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "underscore":
/*!*****************************!*\
  !*** external "underscore" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("underscore");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=coaches.js.map