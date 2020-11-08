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
/* harmony import */ var _svg_DharmaType_DharmaType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_svg/DharmaType/DharmaType */ "./components/_svg/DharmaType/DharmaType.tsx");
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
    label: "Fonts",
    href: "/"
  }];
  return __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__marquee-container"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("ul", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame-items"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, items.map(function (item, idx) {
    return __jsx("li", {
      key: idx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, item.label);
  })), __jsx("ul", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame-items"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, items.map(function (item, idx) {
    return __jsx("li", {
      key: idx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
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
      lineNumber: 91
    },
    __self: this
  }, __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__inner"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__y-axis"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge ").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge--top"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(FrameItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  })), __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge ").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge--bottom"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx(FrameItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }))), __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__x-axis"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge ").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge--left"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx(FrameItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  })), __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge ").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge--right"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx(FrameItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  })))), __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__type"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, __jsx(_svg_DharmaType_DharmaType__WEBPACK_IMPORTED_MODULE_1__["DharmaType"], {
    text: "LAXALT",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
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
/* harmony import */ var _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_svg/DharmaType/styles.scss */ "./components/_svg/DharmaType/styles.scss.tsx");
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
})(["&.", "{--frameEdgeSize:3rem;.", "__inner{width:100vw;height:100vh;position:relative;}.", ",.", "__frame{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;}.", "__type{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);fill:", ";width:calc(100% - (var(--frameEdgeSize) * 2));height:calc(100% - (var(--frameEdgeSize) * 2));.", "{top:0;left:0;right:0;bottom:0;width:100%;height:100%;}}.", "__frame{&__y-axis,&__x-axis{position:absolute;overflow:hidden;left:50%;top:50%;}&__y-axis{width:100vw;height:100vh;transform:translate(-50%,-50%);}&__x-axis{width:100vh;height:100vw;transform:translate(-50%,-50%) rotate(90deg);}&__edge{font-size:calc(var(--frameEdgeSize) * 0.75);text-transform:uppercase;line-height:0;.", "__frame-items{list-style-type:none;color:", ";height:var(--frameEdgeSize);display:block;align-items:center;justify-content:flex-start;li{margin-right:calc(var(--frameEdgeSize) / 2);}}.", "__marquee-container{flex-shrink:0;display:flex;justify-content:flex-start;flex-wrap:nowrap;position:relative;overflow:hidden;.", "__frame-items{display:flex;flex-wrap:nowrap;white-space:nowrap;flex-shrink:0;animation:marquee 60s linear infinite;li{width:auto;flex-shrink:0;white-space:nowrap;}}}&--top,&--bottom,&--left,&--right{position:absolute;overflow:hidden;}&--top,&--right{border-bottom:1px solid ", ";.", "__frame-items{padding-top:calc(var(--frameEdgeSize) / 6);padding-bottom:calc(var(--frameEdgeSize) / 6);}}&--bottom,&--left{border-top:1px solid ", ";.", "__frame-items{padding-top:calc(var(--frameEdgeSize) / 6);padding-bottom:calc(var(--frameEdgeSize) / 6);}}&--top,&--bottom{width:calc(100vw - var(--frameEdgeSize));}&--left,&--right{width:calc(100vh - var(--frameEdgeSize));}&--top{top:0;left:var(--frameEdgeSize);}&--bottom{bottom:0;right:var(--frameEdgeSize);}&--right{top:0;left:var(--frameEdgeSize);}&--left{bottom:0;left:0;}}}}"], InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_3__["DharmaTypeClassName"], InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Color.Galaxy, _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_3__["DharmaTypeClassName"], InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Color.Galaxy, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Color.Galaxy, InteractiveFrameHeaderClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Color.Galaxy, InteractiveFrameHeaderClassName);

/***/ }),

/***/ "./components/_svg/DharmaType.tsx":
false,

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
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("style", {
    dangerouslySetInnerHTML: {
      __html: "\n          .".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["DharmaTypeClassName"], "__text {\n            font-size: 173.56px;\n            font-family: DharmaGothicC-ExBold, Dharma Gothic C;\n            font-weight: 700;\n            letter-spacing: 0em;\n          }")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("text", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["DharmaTypeClassName"], "__text"),
    transform: "translate(0 170.53) scale(1.15, 1.39)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, characterArray.map(function (_char, idx) {
    return __jsx("tspan", {
      key: idx,
      className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["DharmaTypeClassName"], "__text__char"),
      style: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "--".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["DharmaTypeClassName"], "-key"), idx),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, _char);
  })))));
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

/***/ }),

/***/ "./components/_svg/DharmaType/styles.scss.tsx":
/*!****************************************************!*\
  !*** ./components/_svg/DharmaType/styles.scss.tsx ***!
  \****************************************************/
/*! exports provided: DharmaTypeClassName, DharmaTypeStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DharmaTypeClassName", function() { return DharmaTypeClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DharmaTypeStyle", function() { return DharmaTypeStyle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/Theme */ "./constants/Theme.tsx");
/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/Root */ "./constants/Root.tsx");
// Imports
// _________________________________________________________________________
// Core
 // Constants


 // Begin Styles
// _________________________________________________________________________

/**
 *
 * @name DharmaTypeClassName
 * @description The root class name for styling. BEM naming conventions.
 *
 */

var DharmaTypeClassName = "dharma-laxalt";
/**
 *
 * @name DharmaTypeStyle
 * @author Peter Laxalt
 *
 */

var DharmaTypeStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].svg.withConfig({
  displayName: "stylesscss__DharmaTypeStyle",
  componentId: "lgdyqd-0"
})(["&.", "{}"], DharmaTypeClassName);

/***/ })

})
//# sourceMappingURL=index.js.d01ca370daf28499cbcf.hot-update.js.map