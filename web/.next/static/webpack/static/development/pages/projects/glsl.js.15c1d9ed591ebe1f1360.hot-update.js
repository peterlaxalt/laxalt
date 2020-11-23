webpackHotUpdate("static/development/pages/projects/glsl.js",{

/***/ "./components/_interactive/p5/MainCanvas.tsx":
/*!***************************************************!*\
  !*** ./components/_interactive/p5/MainCanvas.tsx ***!
  \***************************************************/
/*! exports provided: MainCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainCanvas", function() { return MainCanvas; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./components/_interactive/p5/styles.scss.tsx");
var _jsxFileName = "/Users/pflaxalt/Repositories/_pfl/web/components/_interactive/p5/MainCanvas.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// Core
 // Styles

 // Begin Types
// __________________________________________________________________________________________

// Begin Component
// _________________________________________________________________________________________

/**
 *
 * @name MainCanvas
 * @author Peter Laxalt
 *
 */
var MainCanvas = function MainCanvas() {
  return __jsx(_styles_scss__WEBPACK_IMPORTED_MODULE_1__["MainCanvasStyle"], {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_1__["MainCanvasClassName"]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_1__["MainCanvasClassName"], "__inner"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "GLSL")));
}; // End Component
// ______________________________________________________________________________

/***/ }),

/***/ "./components/_interactive/p5/index.tsx":
/*!**********************************************!*\
  !*** ./components/_interactive/p5/index.tsx ***!
  \**********************************************/
/*! exports provided: MainCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MainCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainCanvas */ "./components/_interactive/p5/MainCanvas.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainCanvas", function() { return _MainCanvas__WEBPACK_IMPORTED_MODULE_0__["MainCanvas"]; });



/***/ }),

/***/ "./components/_interactive/p5/styles.scss.tsx":
/*!****************************************************!*\
  !*** ./components/_interactive/p5/styles.scss.tsx ***!
  \****************************************************/
/*! exports provided: MainCanvasClassName, MainCanvasStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainCanvasClassName", function() { return MainCanvasClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainCanvasStyle", function() { return MainCanvasStyle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/Theme */ "./constants/Theme.tsx");
/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/Root */ "./constants/Root.tsx");
/* harmony import */ var _constants_styles_CssUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/styles/CssUtils */ "./constants/styles/CssUtils.tsx");
// Imports
// _________________________________________________________________________
// Core
 // Constants



 // Begin Styles
// _________________________________________________________________________

/**
 *
 * @name MainCanvasClassName
 * @description The root class name for styling. BEM naming conventions.
 *
 */

var MainCanvasClassName = "interactive-frame-header";
/**
 *
 * @name MainCanvasStyle
 * @author Peter Laxalt
 *
 */

var MainCanvasStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "stylesscss__MainCanvasStyle",
  componentId: "sc-13t7f4t-0"
})(["&.", "{&__inner{width:100vw;height:100vh;display:grid;place-items:center;background:goldenrod;}}"], MainCanvasClassName);

/***/ }),

/***/ "./pages/projects/glsl.tsx":
/*!*********************************!*\
  !*** ./pages/projects/glsl.tsx ***!
  \*********************************/
/*! exports provided: GlslPageClassName, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlslPageClassName", function() { return GlslPageClassName; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_interactive_p5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/_interactive/p5 */ "./components/_interactive/p5/index.tsx");
var _jsxFileName = "/Users/pflaxalt/Repositories/_pfl/web/pages/projects/glsl.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/**
 *
 * index.js
 * @author Peter Laxalt
 * @description The website home page.
 *
 */
// Core

 // Begin Component
// __________________________________________________________________________________________

var GlslPageClassName = "route__glsl-page";
/**
 *
 * pages/index.tsx
 * @author Peter Laxalt
 *
 */

var GlslPage = function GlslPage() {
  return __jsx("div", {
    className: "".concat(GlslPageClassName),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(_components_interactive_p5__WEBPACK_IMPORTED_MODULE_1__["MainCanvas"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (GlslPage);

/***/ })

})
//# sourceMappingURL=glsl.js.15c1d9ed591ebe1f1360.hot-update.js.map