webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
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
  var text = _ref.text;
  var characterArray = text.split("");
  console.log(characterArray);
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 215.21 173.21",
    preserveAspectRatio: "none",
    className: "".concat(DharmaTypeClassName),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("style", {
    dangerouslySetInnerHTML: {
      __html: "\n          .".concat(DharmaTypeClassName, "__text__char {\n            font-size: 173.56px;\n            font-family: DharmaGothicC-ExBold, Dharma Gothic C;\n            font-weight: 700;\n            letter-spacing: 0em;\n          }")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("g", {
    className: "".concat(DharmaTypeClassName, "__text"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, characterArray.map(function (_char, idx) {
    return __jsx("text", {
      className: "".concat(DharmaTypeClassName, "__text__char"),
      style: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "--".concat(DharmaTypeClassName, "-key"), idx),
      transform: "translate(".concat(idx * 34, " 170.53) scale(1.15, 1.39)"),
      key: idx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, _char);
  }))));
}; // <text
//   className={`${DharmaTypeClassName}__text`}
//   transform="translate(0 170.53) scale(1.15, 1.39)"
// >
//   {characterArray.map((char: string, idx: number) => {
//     return (
//       <span
//         key={idx}
//         className={`${DharmaTypeClassName}__text__char`}
//         style={{
//           [`--${DharmaTypeClassName}-key` as any]: idx,
//         }}
//       >
//         {char}
//       </span>
//     );
//   })}
// </text>

/***/ })

})
//# sourceMappingURL=index.js.d2582441e28f2ea05d43.hot-update.js.map