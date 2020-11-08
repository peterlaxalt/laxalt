webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/InteractiveFrameHeader/InnerGrid.tsx":
/*!*********************************************************!*\
  !*** ./components/InteractiveFrameHeader/InnerGrid.tsx ***!
  \*********************************************************/
/*! exports provided: InteractiveFrameHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractiveFrameHeader", function() { return InteractiveFrameHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./components/InteractiveFrameHeader/styles.scss.tsx");
var _jsxFileName = "/Users/pflaxalt/Repositories/_pfl/web/components/InteractiveFrameHeader/InnerGrid.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// Core
 // Styles

 // Begin Component
// ______________________________________________________________________________
// Begin Types
// __________________________________________________________________________________________

// Begin Component
// _________________________________________________________________________________________

/**
 *
 * @name InteractiveFrameHeader
 * @author Peter Laxalt
 *
 */
var InteractiveFrameHeader = function InteractiveFrameHeader() {
  return __jsx(_styles_scss__WEBPACK_IMPORTED_MODULE_1__["InteractiveFrameHeaderStyle"], {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_1__["InteractiveFrameHeaderClassName"]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "HEADER");
}; // End Component
// ______________________________________________________________________________

/***/ }),

/***/ "./components/InteractiveFrameHeader/index.tsx":
/*!*****************************************************!*\
  !*** ./components/InteractiveFrameHeader/index.tsx ***!
  \*****************************************************/
/*! exports provided: InteractiveFrameHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InnerGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InnerGrid */ "./components/InteractiveFrameHeader/InnerGrid.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InteractiveFrameHeader", function() { return _InnerGrid__WEBPACK_IMPORTED_MODULE_0__["InteractiveFrameHeader"]; });



/***/ }),

/***/ "./components/InteractiveFrameHeader/styles.scss.tsx":
/*!***********************************************************!*\
  !*** ./components/InteractiveFrameHeader/styles.scss.tsx ***!
  \***********************************************************/
/*! exports provided: InteractiveFrameHeaderClassName, InteractiveFrameHeaderStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractiveFrameHeaderClassName", function() { return InteractiveFrameHeaderClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractiveFrameHeaderStyle", function() { return InteractiveFrameHeaderStyle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/Theme */ "./constants/Theme.tsx");
/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/Root */ "./constants/Root.tsx");
// Imports
// _________________________________________________________________________
// Core
 // Constants


 // Begin Styles
// _________________________________________________________________________

/**
 *
 * @name InteractiveFrameHeaderClassName
 * @description The root class name for styling. BEM naming conventions.
 *
 */

var InteractiveFrameHeaderClassName = "interactive-frame-header";
/**
 *
 * @name InteractiveFrameHeaderStyle
 * @author Peter Laxalt
 *
 */

var InteractiveFrameHeaderStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "stylesscss__InteractiveFrameHeaderStyle",
  componentId: "sc-74q822-0"
})(["&.", "{background:yellow;}"], InteractiveFrameHeaderClassName);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: HomePageClassName, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageClassName", function() { return HomePageClassName; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_InteractiveFrameHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/InteractiveFrameHeader */ "./components/InteractiveFrameHeader/index.tsx");
var _jsxFileName = "/Users/pflaxalt/Repositories/_pfl/web/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/**
 *
 * index.js
 * @author Peter Laxalt
 * @description The website home page.
 *
 */
// Core
 // Components

 // Begin Component
// __________________________________________________________________________________________

var HomePageClassName = "route__home-page";
/**
 *
 * pages/index.tsx
 * @author Peter Laxalt
 *
 */

var HomePage = function HomePage() {
  return __jsx("div", {
    className: "".concat(HomePageClassName),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_components_InteractiveFrameHeader__WEBPACK_IMPORTED_MODULE_1__["InteractiveFrameHeader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ })

})
//# sourceMappingURL=index.js.1b7eacf3658409a422c6.hot-update.js.map