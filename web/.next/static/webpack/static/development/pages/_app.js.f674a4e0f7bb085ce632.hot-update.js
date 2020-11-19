webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./constants/styles/Font.tsx":
/*!***********************************!*\
  !*** ./constants/styles/Font.tsx ***!
  \***********************************/
/*! exports provided: Font, Typography */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Font", function() { return Font; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Typography", function() { return Typography; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Base */ "./constants/styles/Base.tsx");


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\n  /* Base Text Styles */\n  body {\n    line-height: 1;\n    font-size: 1rem;\n    font-family: ", ";\n    -webkit-text-size-adjust: 100%;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-rendering: geometricPrecision;\n    -webkit-font-feature-settings: \"pnum\";\n    font-feature-settings: \"pnum\";\n    font-variant-numeric: proportional-nums;\n  }\n\n  @font-face {\n    font-family: \"DharmaGothicC-ExBold\";\n    src: url(\"http://db.onlinewebfonts.com/t/d7d3e31e4932ea5d5083ddb0cc3583ed.eot\"); /* IE9*/\n    src: url(\"http://db.onlinewebfonts.com/t/d7d3e31e4932ea5d5083ddb0cc3583ed.eot?#iefix\") format(\"embedded-opentype\"), /* IE6-IE8 */\n    url(\"http://db.onlinewebfonts.com/t/d7d3e31e4932ea5d5083ddb0cc3583ed.woff2\") format(\"woff2\"), /* chrome firefox */\n    url(\"http://db.onlinewebfonts.com/t/d7d3e31e4932ea5d5083ddb0cc3583ed.woff\") format(\"woff\"), /* chrome firefox */\n    url(\"http://db.onlinewebfonts.com/t/d7d3e31e4932ea5d5083ddb0cc3583ed.ttf\") format(\"truetype\"), /* chrome firefox opera Safari, Android, iOS 4.2+*/\n    url(\"http://db.onlinewebfonts.com/t/d7d3e31e4932ea5d5083ddb0cc3583ed.svg#DharmaGothicCW01-ExBold\") format(\"svg\"); /* iOS 4.1- */\n}\n\n  /* Paragraph Styles */\n  p {\n    font-family: ", ";\n    font-size: 1rem;\n    font-weight: 500;\n    line-height: 1.4;\n    letter-spacing: -0.2px;\n    padding-bottom: calc(var(--Size) / 3.5);\n\n    &.lead {\n      font-size: 1.4rem;\n      @media (max-width: ", ") {\n        font-size: 1.2rem;\n      }\n    }\n  }\n\n  .p-sm {\n    font-family: ", ";\n    line-height: 1.2;\n    font-size: 0.9rem;\n    letter-spacing: -0.2px;\n  }\n\n  .p-lg {\n    font-family: ", ";\n    line-height: 1.4;\n    font-size: 1.2rem;\n    letter-spacing: -0.2px;\n  }\n\n  /* Header Styles */\n  h1, h2, h3, h4, h5, h6, .headline {\n    font-family: ", ";\n    line-height: 1.1;\n    padding: 0;\n    margin: 0;\n    letter-spacing: -0.2px;\n  }\n\n  h1, .h1 {\n    font-size: 4rem;\n    @media (max-width: ", ") {\n      font-size: 2rem;\n    }\n  }\n  h2, .h2 {\n    font-size: 3rem;\n    @media (max-width: ", ") {\n      font-size: 2rem;\n    }\n  }\n  h3, .h3 {\n    font-size: 2.5rem;\n    @media (max-width: ", ") {\n      font-size: 2rem;\n    }\n  }\n  h4, .h4 {\n    font-size: 2rem;\n  }\n  h5, .h5 {\n    font-size: 1.75rem;\n    @media (max-width: ", ") {\n      font-size: 1rem;\n    }\n  }\n  h6, .h6 {\n    font-size: 1.5rem;\n    @media (max-width: ", ") {\n      font-size: 1.1rem;\n    }\n  }\n\n  .headline {\n    font-size: 7.25rem;\n    @media (max-width: ", ") {\n      font-size: 4rem;\n    }\n    @media (max-width: ", ") {\n      font-size: 3.5rem;\n    }\n  }\n\n  h1, h2, h3, h4, h5, h6, p, .heading-padding { padding-bottom: calc(var(--Size) / 3.5); }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/* eslint-disable */
// Font.js:
// This is the sitewide font reference.


var Font = {
  Body: "'Neue Haas Grotesk Text Pro', -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
  Code: "\"SFMono-Regular\",Consolas,\"Liberation Mono\",Menlo,Courier,monospace",
  Header: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
  // Header: `"Cera Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  // Body: `"Brown", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  // Code: `"SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace`,
  Size: {
    Sm: "1rem",
    Md: "1rem",
    Lg: "1rem",
    ViewWidth: {
      Sm: "6.8vw",
      Md: "5.2vw",
      Lg: "1.2vw"
    },
    ViewHeight: {
      Sm: "6.8vh",
      Md: "5.2vh",
      Lg: "2vh"
    }
  },
  Icon: {
    Size: {
      Sm: "8.5vw",
      Md: "8.5vw",
      Lg: "1.7vw"
    }
  }
}; // Global Type Styles

var Typography = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject(), Font.Body, Font.Body, _Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Media.Width.Md + "px", Font.Body, Font.Body, Font.Header, _Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Media.Width.Md + "px", _Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Media.Width.Md + "px", _Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Media.Width.Md + "px", _Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Media.Width.Md + "px", _Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Media.Width.Md + "px", _Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Media.Width.Md + "px", _Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Media.Width.Sm + "px");

/***/ })

})
//# sourceMappingURL=_app.js.f674a4e0f7bb085ce632.hot-update.js.map