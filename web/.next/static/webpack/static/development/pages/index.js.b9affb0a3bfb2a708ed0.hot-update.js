webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/_svg/DharmaType/DharmaType.tsx":
/*!***************************************************!*\
  !*** ./components/_svg/DharmaType/DharmaType.tsx ***!
  \***************************************************/
/*! exports provided: DharmaType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DharmaType", function() { return DharmaType; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ "./components/_svg/DharmaType/styles.scss.tsx");

var _jsxFileName = "/Users/pflaxalt/Repositories/_pfl/web/components/_svg/DharmaType/DharmaType.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// Core

 // Begin Types
// __________________________________________________________________________________________

// Begin Component
// __________________________________________________________________________________________

/**
 * @name DharmaType
 * @author Peter Laxalt
 *
 */
var DharmaType = function DharmaType(_ref) {
  var text = _ref.text;
  var characterArray = text.split("");
  console.log(characterArray);
  return __jsx(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["DharmaTypeStyle"], {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 215.21 173.21",
    preserveAspectRatio: "none",
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["DharmaTypeClassName"]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, characterArray.map(function (_char, idx) {
    return __jsx("text", {
      className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["DharmaTypeClassName"], "__text"),
      transform: "translate(0 170.53) scale(1.13, 1.38)",
      style: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "--".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["DharmaTypeClassName"], "-key"), idx),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("tspan", {
      key: idx,
      className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["DharmaTypeClassName"], "__text__char"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, _char));
  }))));
};
{
  /* <text
  className={`${DharmaTypeClassName}__text`}
  transform="translate(0 170.53) scale(1.15, 1.39)"
  >
  {characterArray.map((char: string, idx: number) => {
    return (
      <span
        key={idx}
        className={`${DharmaTypeClassName}__text__char`}
        style={{
          [`--${DharmaTypeClassName}-key` as any]: idx,
        }}
      >
        {char}
      </span>
    );
  })}
  </text> */
}
{
  /* <g>
          <text
            className={`${DharmaTypeClassName}__text`}
            transform="translate(0 170.53) scale(1.15, 1.39)"
          >
            {text}
          </text>
        </g> */
}

/***/ })

})
//# sourceMappingURL=index.js.b9affb0a3bfb2a708ed0.hot-update.js.map