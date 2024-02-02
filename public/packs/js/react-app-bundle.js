"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["react-app-bundle"],{

/***/ "./app/javascript/bundles/HelloWorld/components/header/Header.tsx":
/*!************************************************************************!*\
  !*** ./app/javascript/bundles/HelloWorld/components/header/Header.tsx ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
var _jsxFileName = "/Users/marceloalarcon/Documents/Programming/Shipedge/Test5.2.1/app/javascript/bundles/HelloWorld/components/header/Header.tsx";


const Header = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "m-1",
    to: 'home',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 21
    }
  }, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "m-1",
    to: 'about',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 21
    }
  }, "About"))));
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./app/javascript/bundles/ReactApp/components/About.tsx":
/*!**************************************************************!*\
  !*** ./app/javascript/bundles/ReactApp/components/About.tsx ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/marceloalarcon/Documents/Programming/Shipedge/Test5.2.1/app/javascript/bundles/ReactApp/components/About.tsx";

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

/***/ "./app/javascript/bundles/ReactApp/components/Home.tsx":
/*!*************************************************************!*\
  !*** ./app/javascript/bundles/ReactApp/components/Home.tsx ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/marceloalarcon/Documents/Programming/Shipedge/Test5.2.1/app/javascript/bundles/ReactApp/components/Home.tsx";

const Home = ({
  movieArray
}) => {
  const [counter, setCounter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [movies, setMovies] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([movieArray[0]]);
  console.log(movies);
  const addMovie = () => {
    setMovies([...movies, movieArray[movies.length]]);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, "SPA APP"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, counter), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => setCounter(counter + 1),
    className: "btn btn-success m-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, "Increase Counter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: addMovie,
    className: "btn btn-warning m-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, "Add Movie from Rails"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "mt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, "Movies"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, movies.map(movie => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    key: movie.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 40
    }
  }, movie.name))));
};
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./app/javascript/bundles/ReactApp/components/ReactApp.jsx":
/*!*****************************************************************!*\
  !*** ./app/javascript/bundles/ReactApp/components/ReactApp.jsx ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ReactApp_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReactApp.module.css */ "./app/javascript/bundles/ReactApp/components/ReactApp.module.css");
/* harmony import */ var _routes_AppRouter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes/AppRouter */ "./app/javascript/bundles/ReactApp/routes/AppRouter.tsx");
/* harmony import */ var _style_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/main.css */ "./app/javascript/bundles/ReactApp/style/main.css");
var _jsxFileName = "/Users/marceloalarcon/Documents/Programming/Shipedge/Test5.2.1/app/javascript/bundles/ReactApp/components/ReactApp.jsx";




const ReactApp = props => {
  const {
    movies
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_routes_AppRouter__WEBPACK_IMPORTED_MODULE_2__["default"], {
    movies: movies,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (ReactApp);

/***/ }),

/***/ "./app/javascript/bundles/ReactApp/routes/AppRouter.tsx":
/*!**************************************************************!*\
  !*** ./app/javascript/bundles/ReactApp/routes/AppRouter.tsx ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _ReactApp_components_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ReactApp/components/Home */ "./app/javascript/bundles/ReactApp/components/Home.tsx");
/* harmony import */ var _ReactApp_components_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ReactApp/components/About */ "./app/javascript/bundles/ReactApp/components/About.tsx");
/* harmony import */ var _HelloWorld_components_header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../HelloWorld/components/header/Header */ "./app/javascript/bundles/HelloWorld/components/header/Header.tsx");
var _jsxFileName = "/Users/marceloalarcon/Documents/Programming/Shipedge/Test5.2.1/app/javascript/bundles/ReactApp/routes/AppRouter.tsx";





const AppRouter = ({
  movies
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.BrowserRouter, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HelloWorld_components_header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Routes, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "home",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ReactApp_components_Home__WEBPACK_IMPORTED_MODULE_1__["default"], {
      movieArray: movies,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 45
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "about",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ReactApp_components_About__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 46
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (AppRouter);

/***/ }),

/***/ "./app/javascript/packs/react-app-bundle.js":
/*!**************************************************!*\
  !*** ./app/javascript/packs/react-app-bundle.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_on_rails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-on-rails */ "./node_modules/react-on-rails/node_package/lib/ReactOnRails.js");
/* harmony import */ var react_on_rails__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_on_rails__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bundles_ReactApp_components_ReactApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bundles/ReactApp/components/ReactApp */ "./app/javascript/bundles/ReactApp/components/ReactApp.jsx");



// This is how react_on_rails can see the HelloWorld in the browser.
react_on_rails__WEBPACK_IMPORTED_MODULE_0___default().register({
  ReactApp: _bundles_ReactApp_components_ReactApp__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./app/javascript/bundles/ReactApp/components/ReactApp.module.css":
/*!************************************************************************!*\
  !*** ./app/javascript/bundles/ReactApp/components/ReactApp.module.css ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"bright":"KRO6czByhpjSBPrPCqLO"});

/***/ }),

/***/ "./app/javascript/bundles/ReactApp/style/main.css":
/*!********************************************************!*\
  !*** ./app/javascript/bundles/ReactApp/style/main.css ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_react-on-rails_node_package_lib_ReactOnRails_js-node_modules_react-route-a5c615"], function() { return __webpack_exec__("./app/javascript/packs/react-app-bundle.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=react-app-bundle.js.map