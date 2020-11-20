webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./constants/styles/Global.tsx":
/*!*************************************!*\
  !*** ./constants/styles/Global.tsx ***!
  \*************************************/
/*! exports provided: GlobalStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyle", function() { return GlobalStyle; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Font__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Font */ "./constants/styles/Font.tsx");
/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Color */ "./constants/styles/Color.tsx");
/* harmony import */ var _Root__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Root */ "./constants/Root.tsx");
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Theme */ "./constants/Theme.tsx");

var _jsxFileName = "/Users/pflaxalt/Repositories/_pfl/web/constants/styles/Global.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n/* * {\n  cursor: none !important;\n} */\n\n/** Animation */\n@keyframes marqueeBottomLeftQuadrants {\n  from {\n    transform: translateX(0%);\n  }\n  to {\n    transform: translateX(-100%);\n  }\n}\n\n@keyframes marqueeTopRightQuadrants {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(0%);\n  }\n}\n\n\nhtml {\n    line-height: 1.15; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n    margin: 0;\n    padding: 0;\n    min-height: 100%;\n    overflow: auto;\n    background-color: ", ";\n    color: ", "\n\n    cursor: crosshair;\n\n    /* overflow: hidden; */\n  }\n\n\n\n  /* Sections\n     ========================================================================== */\n\n  /**\n   * Remove the margin in all browsers.\n   */\n\n  body {\n    min-height: 100%;\n    margin: 0;\n    padding-left: 0;\n    padding-right: 0;\n    padding-bottom: 0;\n    background-color: ", ";\n    color: ", "\n\n    cursor: crosshair;cursor: crosshair;\n    /* overflow: hidden; */\n  }\n\n  /**\n   * Render the 'main' element consistently in IE.\n   */\n\n  main {\n    display: block;\n  }\n\n\n  /* Grouping content\n     ========================================================================== */\n\n  /**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n\n  hr {\n    box-sizing: content-box; /* 1 */\n    height: 0; /* 1 */\n    overflow: visible; /* 2 */\n  }\n\n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd 'em' font sizing in all browsers.\n   */\n\n  pre {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n\n  /* Text-level semantics\n     ========================================================================== */\n\n  /**\n   * Remove the gray background on active links in IE 10.\n   */\n\n  a {\n    background-color: transparent;\n  }\n\n  /**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n\n  abbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n  }\n\n  /**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n\n  b,\n  strong {\n    font-weight: bolder;\n  }\n\n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd 'em' font sizing in all browsers.\n   */\n\n  code,\n  kbd,\n  samp {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n\n  /**\n   * Add the correct font size in all browsers.\n   */\n\n  small {\n    font-size: 80%;\n  }\n\n  /**\n   * Prevent 'sub' and 'sup' elements from affecting the line height in\n   * all browsers.\n   */\n\n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n\n  sub {\n    bottom: -0.25em;\n  }\n\n  sup {\n    top: -0.5em;\n  }\n\n  /* Embedded content\n     ========================================================================== */\n\n  /**\n   * Remove the border on images inside links in IE 10.\n   */\n\n  img {\n    border-style: none;\n  }\n\n  /* Forms\n     ========================================================================== */\n\n  /**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n\n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n  }\n\n  /**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n\n  button,\n  input { /* 1 */\n    overflow: visible;\n  }\n\n  /**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n\n  button,\n  select { /* 1 */\n    text-transform: none;\n  }\n\n  /**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n\n  button,\n  [type=\"button\"],\n  [type=\"reset\"],\n  [type=\"submit\"] {\n    -webkit-appearance: button;\n  }\n\n  /**\n   * Remove the inner border and padding in Firefox.\n   */\n\n  button::-moz-focus-inner,\n  [type=\"button\"]::-moz-focus-inner,\n  [type=\"reset\"]::-moz-focus-inner,\n  [type=\"submit\"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n\n  /**\n   * Restore the focus styles unset by the previous rule.\n   */\n\n  button:-moz-focusring,\n  [type=\"button\"]:-moz-focusring,\n  [type=\"reset\"]:-moz-focusring,\n  [type=\"submit\"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n\n  /**\n   * Correct the padding in Firefox.\n   */\n\n  fieldset {\n    padding: 0.35em 0.75em 0.625em;\n  }\n\n  /**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from 'fieldset' elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    'fieldset' elements in all browsers.\n   */\n\n  legend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n  }\n\n  /**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n\n  progress {\n    vertical-align: baseline;\n  }\n\n  /**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n\n  textarea {\n    overflow: auto;\n  }\n\n  /**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n\n  [type=\"checkbox\"],\n  [type=\"radio\"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n  }\n\n  /**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n\n  [type=\"number\"]::-webkit-inner-spin-button,\n  [type=\"number\"]::-webkit-outer-spin-button {\n    height: auto;\n  }\n\n  /**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n\n  [type=\"search\"] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n  }\n\n  /**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n\n  [type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  /**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to 'inherit' in Safari.\n   */\n\n  ::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n  }\n\n  /* Interactive\n     ========================================================================== */\n\n  /*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n\n  details {\n    display: block;\n  }\n\n  /*\n   * Add the correct display in all browsers.\n   */\n\n  summary {\n    display: list-item;\n  }\n\n  /* Misc\n     ========================================================================== */\n\n  /**\n   * Add the correct display in IE 10+.\n   */\n\n  template {\n    display: none;\n  }\n\n  /**\n   * Add the correct display in IE 10.\n   */\n\n  [hidden] {\n    display: none;\n  }\n\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n\n\n  ul {\n    margin-block-start: 0px;\n    margin-block-end: 0px;\n    margin-inline-start: 0px;\n    margin-inline-end: 0px;\n    padding-inline-start: 0px;\n\n    -webkit-margin-before: 0px;\n    -webkit-margin-after: 0px;\n    -webkit-margin-start: 0px;\n    -webkit-margin-end: 0px;\n    -webkit-padding-start: 0px;\n  }\n\n  ol, ul {\n    list-style: none;\n  }\n\n  blockquote, q {\n    quotes: none;\n  }\n\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: '';\n    content: none;\n  }\n\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  a {\n    text-decoration: none;\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n\n  pre {\n    display: block;\n    padding: 2rem;\n    margin-top: 4rem;\n    overflow: auto;\n    font-size: 85%;\n    line-height: 1.45;\n    border-radius: 5px;\n    border: 1px solid #ddd;\n  }\n\n  video {\n    max-width: 100%;\n  }\n\n  p, h1, h2, h3, h4, h5, h6 {\n    margin: 0;\n  }\n\n  * {\n    box-sizing: border-box;\n    -webkit-tap-highlight-color: transparent; /* for remove highlight */\n  }\n\n  /* Intercom */\n  .intercom-namespace {\n    .intercom-launcher-frame {\n      bottom: unset !important;\n      top: 18px !important;\n      right: 139px !important;\n    }\n  }\n\n  .intercom-container {\n    display: none !important;\n  }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/**
 *
 * Global Styles Component
 * @author Peter Laxalt
 * @description This is the global styles throughout the app.
 *
 */
// Imports
//////////////////////////////////////////////////////////////////////
// Core

 // Styles




 // Begin Component
//////////////////////////////////////////////////////////////////////

var Reset = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["createGlobalStyle"])(_templateObject(), _Theme__WEBPACK_IMPORTED_MODULE_6__["Theme"].Color.varBackground, _Theme__WEBPACK_IMPORTED_MODULE_6__["Theme"].Color.varForeground, _Theme__WEBPACK_IMPORTED_MODULE_6__["Theme"].Color.varBackground, _Theme__WEBPACK_IMPORTED_MODULE_6__["Theme"].Color.varForeground);
var GlobalStyle = function GlobalStyle() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_Root__WEBPACK_IMPORTED_MODULE_5__["RootVariables"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500
    },
    __self: this
  }), __jsx(Reset, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501
    },
    __self: this
  }), __jsx(_Font__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502
    },
    __self: this
  }), __jsx(_Color__WEBPACK_IMPORTED_MODULE_4__["Palette"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503
    },
    __self: this
  }));
};

/***/ })

})
//# sourceMappingURL=_app.js.d8e181128d779c26c89b.hot-update.js.map