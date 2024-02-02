"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["hello-world-bundle"],{

/***/ "./app/javascript/bundles/HelloWorld/components/About.jsx":
/*!****************************************************************!*\
  !*** ./app/javascript/bundles/HelloWorld/components/About.jsx ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/marceloalarcon/Documents/Programming/Shipedge/Test5.2.1/app/javascript/bundles/HelloWorld/components/About.jsx";

const About = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, "About");
};
/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./app/javascript/bundles/HelloWorld/components/HelloWorld.jsx":
/*!*********************************************************************!*\
  !*** ./app/javascript/bundles/HelloWorld/components/HelloWorld.jsx ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HelloWorld_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HelloWorld.module.css */ "./app/javascript/bundles/HelloWorld/components/HelloWorld.module.css");
/* harmony import */ var _Test__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Test */ "./app/javascript/bundles/HelloWorld/components/Test.jsx");
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./About */ "./app/javascript/bundles/HelloWorld/components/About.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
var _jsxFileName = "/Users/marceloalarcon/Documents/Programming/Shipedge/Test5.2.1/app/javascript/bundles/HelloWorld/components/HelloWorld.jsx";






const HelloWorld = props => {
  const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.name);
  const [counter, setCounter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.BrowserRouter, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Routes, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/home",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_About__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 50
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, "Hello, ", name, "!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, counter), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => setCounter(counter + 1),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, "Click"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: _HelloWorld_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].bright,
    htmlFor: "name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, "Say hello to:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    id: "name",
    type: "text",
    value: name,
    onChange: e => setName(e.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  }))))));
};
HelloWorld.propTypes = {
  name: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string).isRequired // this is passed from the Rails view
};
/* harmony default export */ __webpack_exports__["default"] = (HelloWorld);

/***/ }),

/***/ "./app/javascript/bundles/HelloWorld/components/Test.jsx":
/*!***************************************************************!*\
  !*** ./app/javascript/bundles/HelloWorld/components/Test.jsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/marceloalarcon/Documents/Programming/Shipedge/Test5.2.1/app/javascript/bundles/HelloWorld/components/Test.jsx";

const Test = props => {
  const {
    name
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, "Hello ", name);
};
/* harmony default export */ __webpack_exports__["default"] = (Test);

/***/ }),

/***/ "./app/javascript/packs/hello-world-bundle.js":
/*!****************************************************!*\
  !*** ./app/javascript/packs/hello-world-bundle.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_on_rails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-on-rails */ "./node_modules/react-on-rails/node_package/lib/ReactOnRails.js");
/* harmony import */ var react_on_rails__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_on_rails__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bundles_HelloWorld_components_HelloWorld__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bundles/HelloWorld/components/HelloWorld */ "./app/javascript/bundles/HelloWorld/components/HelloWorld.jsx");



// This is how react_on_rails can see the HelloWorld in the browser.
react_on_rails__WEBPACK_IMPORTED_MODULE_0___default().register({
  HelloWorld: _bundles_HelloWorld_components_HelloWorld__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./app/javascript/bundles/HelloWorld/components/HelloWorld.module.css":
/*!****************************************************************************!*\
  !*** ./app/javascript/bundles/HelloWorld/components/HelloWorld.module.css ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"bright":"KUWOdYZ4Lk42k3lvLUcM"});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_react-on-rails_node_package_lib_ReactOnRails_js-node_modules_react-route-a5c615","vendors-node_modules_prop-types_index_js"], function() { return __webpack_exec__("./app/javascript/packs/hello-world-bundle.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=hello-world-bundle.js.map