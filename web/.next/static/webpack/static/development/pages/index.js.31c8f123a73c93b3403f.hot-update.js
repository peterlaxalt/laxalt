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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_svg/DharmaType/styles.scss */ "./components/_svg/DharmaType/styles.scss.tsx");

var _jsxFileName = "/Users/pflaxalt/Repositories/_pfl/web/components/_interactive/DharmaCounter/DharmaCounter.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
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
var DharmaCounter = function DharmaCounter(_ref) {
  var text = _ref.text;
  var viewBoxHeight = 173.21;
  var viewBoxWidth = 215.21;
  var characterArray = text.split("");
  var characterCount = characterArray.length;
  var characterWidth = viewBoxWidth / characterCount;
  console.log("characterArray / ", characterArray);
  console.log("characterCount / ", characterCount);
  return __jsx(_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_2__["DharmaTypeStyle"], {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 ".concat(viewBoxWidth, " ").concat(viewBoxHeight),
    preserveAspectRatio: "none",
    className: "".concat(_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_2__["DharmaTypeClassName"], " ").concat(_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_2__["DharmaTypeClassName"], "--couter"),
    style: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "--".concat(_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_2__["DharmaTypeClassName"], "-font-size"), "".concat(viewBoxHeight, "px")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, characterArray.map(function (_char, idx) {
    return __jsx("g", {
      className: "".concat(_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_2__["DharmaTypeClassName"], "__character-wrapper"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx("text", {
      className: "".concat(_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_2__["DharmaTypeClassName"], "__character"),
      transform: "translate(".concat(characterWidth * idx, " 170.53) scale(1.13, 1.38)"),
      style: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "--".concat(_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_2__["DharmaTypeClassName"], "-key"), idx),
      key: idx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx("tspan", {
      className: "".concat(_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_2__["DharmaTypeClassName"], "__letter"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, _char)));
  })));
};

/***/ }),

/***/ "./components/_interactive/DharmaCounter/index.tsx":
/*!*********************************************************!*\
  !*** ./components/_interactive/DharmaCounter/index.tsx ***!
  \*********************************************************/
/*! exports provided: DharmaCounter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DharmaCounter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DharmaCounter */ "./components/_interactive/DharmaCounter/DharmaCounter.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DharmaCounter", function() { return _DharmaCounter__WEBPACK_IMPORTED_MODULE_0__["DharmaCounter"]; });



/***/ }),

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
/* harmony import */ var _DharmaCounter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DharmaCounter */ "./components/_interactive/DharmaCounter/index.tsx");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ "./components/_interactive/InteractiveFrameHeader/styles.scss.tsx");
var _jsxFileName = "/Users/pflaxalt/Repositories/_pfl/web/components/_interactive/InteractiveFrameHeader/InteractiveFrameHeader.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// Core

 // Styles

 // Begin Types
// __________________________________________________________________________________________

// Begin Data
// __________________________________________________________________________________________
var FrameItems = function FrameItems() {
  var items = [{
    label: "Studio",
    href: "/"
  }, {
    label: "Art",
    href: "/"
  }, {
    label: "Design",
    href: "/"
  }, {
    label: "Strategy",
    href: "/"
  }, {
    label: "Interactive",
    href: "/"
  }, {
    label: "Code",
    href: "/"
  }, {
    label: "Products",
    href: "/"
  }, {
    label: "Music",
    href: "/"
  }, {
    label: "Tattoo",
    href: "/"
  }, {
    label: "eCommerce",
    href: "/"
  }, {
    label: "Advice",
    href: "/"
  }, {
    label: "Fonts",
    href: "/"
  }];
  return __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__marquee-container"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("ul", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame-items"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, items.map(function (item, idx) {
    return __jsx("li", {
      key: idx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, item.label);
  })), __jsx("ul", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame-items"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, items.map(function (item, idx) {
    return __jsx("li", {
      key: idx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, item.label);
  })));
}; // Begin Component
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
      lineNumber: 104
    },
    __self: this
  }, __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__inner"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__y-axis"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge ").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge--top"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx(FrameItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  })), __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge ").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge--bottom"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx(FrameItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }))), __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__x-axis"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge ").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge--left"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx(FrameItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  })), __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge ").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge--right"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx(FrameItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  })))), __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__type"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx(_DharmaCounter__WEBPACK_IMPORTED_MODULE_1__["DharmaCounter"], {
    text: "LAXALT",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }))));
}; // End Component
// ______________________________________________________________________________

/***/ }),

/***/ "./components/_svg/DharmaType/DharmaType.tsx":
false

})
//# sourceMappingURL=index.js.31c8f123a73c93b3403f.hot-update.js.map