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

// Begin Data
// __________________________________________________________________________________________
var FrameItems = function FrameItems() {
  var items = [{
    label: "Art",
    href: "/"
  }, {
    label: "Design",
    href: "/"
  }, {
    label: "Strategy",
    href: "/"
  }, {
    label: "Code",
    href: "/"
  }, {
    label: "Music",
    href: "/"
  }, {
    label: "Tattoo",
    href: "/"
  }, {
    label: "Fonts",
    href: "/"
  }, {
    label: "Music",
    href: "/"
  }, {
    label: "Tattoo",
    href: "/"
  }, {
    label: "Fonts",
    href: "/"
  }];
  return __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__marquee-container"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("ul", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame-items"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, items.map(function (item, idx) {
    return __jsx("li", {
      key: idx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, item.label);
  })), __jsx("ul", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame-items"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, items.map(function (item, idx) {
    return __jsx("li", {
      key: idx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
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
      lineNumber: 95
    },
    __self: this
  }, __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__inner"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__y-axis"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge ").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge--top"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx(FrameItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  })), __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge ").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge--bottom"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx(FrameItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }))), __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__x-axis"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge ").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge--left"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx(FrameItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  })), __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge ").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge--right"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx(FrameItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  })))), __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__type"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx(_svg_DharmaType__WEBPACK_IMPORTED_MODULE_1__["DharmaType"], {
    text: "LAXALT",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }))));
}; // End Component
// ______________________________________________________________________________

/***/ })

})
//# sourceMappingURL=index.js.8850b4c955301f8c1671.hot-update.js.map