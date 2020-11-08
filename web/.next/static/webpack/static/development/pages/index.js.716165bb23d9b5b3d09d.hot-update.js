webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/_interactive/DharmaCounter/DharmaCounter.tsx":
/*!*****************************************************************!*\
  !*** ./components/_interactive/DharmaCounter/DharmaCounter.tsx ***!
  \*****************************************************************/
/*! exports provided: DharmaCounter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DharmaCounter", function() { return DharmaCounter; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_svg/DharmaType/styles.scss */ "./components/_svg/DharmaType/styles.scss.tsx");






var _jsxFileName = "/Users/pflaxalt/Repositories/_pfl/web/components/_interactive/DharmaCounter/DharmaCounter.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;
// Core

 // Begin Types
// __________________________________________________________________________________________

// Begin Component
// __________________________________________________________________________________________

/**
 * @name DharmaCounter
 * @author Peter Laxalt
 *
 */
var DharmaCounter =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(DharmaCounter, _React$PureComponent);

  function DharmaCounter(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DharmaCounter);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(DharmaCounter).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(DharmaCounter, [{
    key: "render",
    value: function render() {
      var text = this.props.text;
      var viewBoxHeight = 173.21;
      var viewBoxWidth = 215.21;
      var characterArray = text.split("");
      var characterCount = characterArray.length;
      var characterWidth = viewBoxWidth / characterCount;
      console.log("characterArray / ", characterArray);
      console.log("characterCount / ", characterCount);
      return __jsx(_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_7__["DharmaTypeStyle"], {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 ".concat(viewBoxWidth, " ").concat(viewBoxHeight),
        preserveAspectRatio: "none",
        className: "".concat(_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_7__["DharmaTypeClassName"], " ").concat(_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_7__["DharmaTypeClassName"], "--couter"),
        style: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "--".concat(_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_7__["DharmaTypeClassName"], "-font-size"), "".concat(viewBoxHeight, "px")),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, characterArray.map(function (_char, idx) {
        return __jsx("g", {
          className: "".concat(_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_7__["DharmaTypeClassName"], "__character-wrapper"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, __jsx("text", {
          className: "".concat(_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_7__["DharmaTypeClassName"], "__character"),
          transform: "translate(".concat(characterWidth * idx, " 170.53) scale(1.13, 1.38)"),
          style: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "--".concat(_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_7__["DharmaTypeClassName"], "-key"), idx),
          key: idx,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }, __jsx("tspan", {
          className: "".concat(_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_7__["DharmaTypeClassName"], "__letter"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, _char)));
      })));
    }
  }]);

  return DharmaCounter;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.PureComponent);

/***/ })

})
//# sourceMappingURL=index.js.716165bb23d9b5b3d09d.hot-update.js.map