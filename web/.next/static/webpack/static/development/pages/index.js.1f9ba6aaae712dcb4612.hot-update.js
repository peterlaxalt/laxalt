webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/_interactive/InteractiveFrameHeader/InteractiveFrameHeader.tsx":
/*!***********************************************************************************!*\
  !*** ./components/_interactive/InteractiveFrameHeader/InteractiveFrameHeader.tsx ***!
  \***********************************************************************************/
/*! exports provided: InteractiveFrameHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractiveFrameHeader", function() { return InteractiveFrameHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _svg_DharmaType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_svg/DharmaType */ "./components/_svg/DharmaType.tsx");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ "./components/_interactive/InteractiveFrameHeader/styles.scss.tsx");
var _jsxFileName = "/Users/pflaxalt/Repositories/_pfl/web/components/_interactive/InteractiveFrameHeader/InteractiveFrameHeader.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// Core

 // Styles

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
  return __jsx(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderStyle"], {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__inner"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge ").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge--top"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "TOP ITEMS"), __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge ").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge--right"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "RIGHT ITEMS"), __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge ").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge--bottom"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "BOTTOM ITEMS"), __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge ").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge--left"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "LEFT ITEMS")), __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__type"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(_svg_DharmaType__WEBPACK_IMPORTED_MODULE_1__["DharmaType"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }))));
}; // End Component
// ______________________________________________________________________________

/***/ }),

/***/ "./components/_interactive/InteractiveFrameHeader/styles.scss.tsx":
/*!************************************************************************!*\
  !*** ./components/_interactive/InteractiveFrameHeader/styles.scss.tsx ***!
  \************************************************************************/
/*! exports provided: InteractiveFrameHeaderClassName, InteractiveFrameHeaderStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractiveFrameHeaderClassName", function() { return InteractiveFrameHeaderClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractiveFrameHeaderStyle", function() { return InteractiveFrameHeaderStyle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/Theme */ "./constants/Theme.tsx");
/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/Root */ "./constants/Root.tsx");
/* harmony import */ var _svg_DharmaType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_svg/DharmaType */ "./components/_svg/DharmaType.tsx");
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
  componentId: "tg0k5n-0"
})(["&.", "{--frameEdgeSize:3rem;.", "__inner{width:100vw;height:100vh;position:relative;}.", "__type,.", ",.", "__frame{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;}.", "{top:var(--frameEdgeSize);left:var(--frameEdgeSize);right:var(--frameEdgeSize);bottom:var(--frameEdgeSize);width:calc(100% - (var(--frameEdgeSize) * 2));height:calc(100% - (var(--frameEdgeSize) * 2));}.", "__frame{background:cyan;}}"], InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, _svg_DharmaType__WEBPACK_IMPORTED_MODULE_3__["DharmaTypeClassName"], InteractiveFrameHeaderClassName, _svg_DharmaType__WEBPACK_IMPORTED_MODULE_3__["DharmaTypeClassName"], InteractiveFrameHeaderClassName);

/***/ }),

/***/ "./components/_svg/DharmaLaxalt.tsx":
false,

/***/ "./components/_svg/DharmaType.tsx":
/*!****************************************!*\
  !*** ./components/_svg/DharmaType.tsx ***!
  \****************************************/
/*! exports provided: DharmaTypeClassName, DharmaType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DharmaTypeClassName", function() { return DharmaTypeClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DharmaType", function() { return DharmaType; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/pflaxalt/Repositories/_pfl/web/components/_svg/DharmaType.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// Core
 // Begin Types
// __________________________________________________________________________________________

// Begin Component
// __________________________________________________________________________________________
var DharmaTypeClassName = "dharma-laxalt";
/**
 * @name DharmaType
 * @author Peter Laxalt
 *
 */

var DharmaType = function DharmaType(_ref) {
  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 215.21 173.21",
    preserveAspectRatio: "none",
    className: "".concat(DharmaTypeClassName),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("style", {
    dangerouslySetInnerHTML: {
      __html: "\n          .".concat(DharmaTypeClassName, "__text {\n            font-size: 173.56px;\n            font-family: DharmaGothicC-ExBold, Dharma Gothic C;\n            font-weight: 700;\n            letter-spacing: 0em;\n          }")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("text", {
    className: "".concat(DharmaTypeClassName, "__text"),
    transform: "translate(0 170.53) scale(1.15, 1.39)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "LAXALT"))));
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectDestructuringEmpty; });
function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
}

/***/ })

})
//# sourceMappingURL=index.js.1f9ba6aaae712dcb4612.hot-update.js.map