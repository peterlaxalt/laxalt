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
      lineNumber: 77
    },
    __self: this
  }, __jsx("ul", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame-items"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, items.map(function (item, idx) {
    return __jsx("li", {
      key: idx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, item.label);
  })), __jsx("ul", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame-items"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, items.map(function (item, idx) {
    return __jsx("li", {
      key: idx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
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
      lineNumber: 103
    },
    __self: this
  }, __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__inner"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__y-axis"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge ").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge--top"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx(FrameItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  })), __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge ").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge--bottom"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx(FrameItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }))), __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__x-axis"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge ").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge--left"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx(FrameItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  })), __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge ").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge--right"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, __jsx(FrameItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  })))), __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__type"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx(_DharmaCounter__WEBPACK_IMPORTED_MODULE_1__["DharmaCounter"], {
    text: "LAXALT",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }))));
}; // End Component
// ______________________________________________________________________________

/***/ })

})
//# sourceMappingURL=index.js.7f67677ddf8c9d9ea0d6.hot-update.js.map