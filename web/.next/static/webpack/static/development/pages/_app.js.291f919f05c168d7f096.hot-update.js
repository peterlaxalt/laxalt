webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./constants/styles/Color.tsx":
/*!************************************!*\
  !*** ./constants/styles/Color.tsx ***!
  \************************************/
/*! exports provided: Color, ColorContext_Defaults, ColorContext, Palette */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorContext_Defaults", function() { return ColorContext_Defaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorContext", function() { return ColorContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Palette", function() { return Palette; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ::-moz-selection { background: ", "; color: ", " }\n  ::selection { background: ", "; color: ", " }\n\n  :root {\n    --clrPrimary: ", ";\n    --clrSecondary: ", ";\n    --clrBackground: ", ";\n    --clrForeground: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// Color.js:
// This is the sitewide palette.
// Imports
// _______________________________________________________

 // Begin Component
// _______________________________________________________

var Color = {
  // Color Variables
  varPrimary: "var(--clrPrimary)",
  varSecondary: "var(--clrSecondary)",
  varBackground: "var(--clrBackground)",
  varForeground: "var(--clrForeground)",
  // Core Colors
  Primary: "#111b24",
  Secondary: "#5D6376",
  Background: "#ff988c",
  Text: "#111b24",
  // Grayscale Palette
  Black: "#000000",
  Nightsky: "#151313",
  Warmsky: "#34281D",
  Gravel: "#4E4135",
  Slate: "#928070",
  Tan: "#C4AC97",
  Gray: "#DAC9BA",
  Blush: "#F6E7D9",
  Cream: "#FFF6EE",
  White: "#FFFFFF",
  // Warm Palette
  Clay: "#A33609",
  Nova: "#E24809",
  Sunlight: "#E9A200",
  Sunset: "#ED9158",
  // Cool Palette
  Galaxy: "#111b24",
  Deepsea: "#002F9E",
  Ocean: "#269FE2",
  Sky: "#7AC0E6",
  Dino: "#23023B",
  Eggplant: "#520589",
  Lilac: "#874BB4",
  // Feedback Palette
  Warning: "#FC6376",
  Success: "#40DA33"
};
var ColorContext_Defaults = {
  primary: Color.White,
  secondary: Color.Sunlight,
  foreground: Color.White,
  background: Color.Galaxy
};
var ColorContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(ColorContext_Defaults);
var Palette = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["createGlobalStyle"])(_templateObject(), Color.Primary, Color.White, Color.Primary, Color.White, Color.Primary, Color.Secondary, Color.Background, Color.Text); //////////////////////////////////////////////////////////////////////
// End Component

/***/ })

})
//# sourceMappingURL=_app.js.291f919f05c168d7f096.hot-update.js.map