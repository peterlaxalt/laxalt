webpackHotUpdate("static/development/pages/projects/dharma.js",{

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
 // Components

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
    label: "Murals",
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
    label: "Shop",
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
      lineNumber: 85
    },
    __self: this
  }, __jsx("ul", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame-items"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, items.map(function (item, idx) {
    return __jsx("li", {
      key: idx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, item.label);
  })), __jsx("ul", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame-items"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, items.map(function (item, idx) {
    return __jsx("li", {
      key: idx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
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


var InteractiveFrameHeader = function InteractiveFrameHeader(_ref) {
  var includeType = _ref.includeType;
  return __jsx(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderStyle"], {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__inner"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__y-axis"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge ").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge--top"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx(FrameItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  })), __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge ").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge--bottom"),
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
  }))), __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__x-axis"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge ").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge--left"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx(FrameItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  })), __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge ").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge--right"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx(FrameItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  })))), includeType ? __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__type"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx(_DharmaCounter__WEBPACK_IMPORTED_MODULE_1__["DharmaCounter"], {
    text: "LAXALT",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  })) : null));
}; // End Component
// ______________________________________________________________________________

/***/ })

})
//# sourceMappingURL=dharma.js.c070e68f18600e6b1b08.hot-update.js.map