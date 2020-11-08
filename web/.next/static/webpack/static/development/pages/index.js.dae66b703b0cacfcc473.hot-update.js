webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _constants_styles_CssUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/styles/CssUtils */ "./constants/styles/CssUtils.tsx");
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

var DharmaTypeClassName = "dharma-type";
/**
 *
 * @name DharmaTypeStyle
 * @author Peter Laxalt
 *
 */

var DharmaTypeStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].svg.withConfig({
  displayName: "stylesscss__DharmaTypeStyle",
  componentId: "lgdyqd-0"
})(["&.", "{.", "__character-wrapper{filter:blur(0px);transition:filter 1s ease-in-out;will-change:filter;&:hover{filter:blur(20px);}}.", "__character{font-size:var(--", "-font-size);font-family:DharmaGothicC-ExBold,Dharma Gothic C;font-weight:700;letter-spacing:0em;}.", "__text{font-size:var(--", "-font-size);font-family:DharmaGothicC-ExBold,Dharma Gothic C;font-weight:700;letter-spacing:0em;cursor:crosshair;transition:filter 1s ease-in-out;will-change:filter;}}"], DharmaTypeClassName, DharmaTypeClassName, DharmaTypeClassName, DharmaTypeClassName, DharmaTypeClassName, DharmaTypeClassName);

/***/ }),

/***/ "./constants/styles/CssUtils.tsx":
/*!***************************************!*\
  !*** ./constants/styles/CssUtils.tsx ***!
  \***************************************/
/*! exports provided: CssUtils, LockBodyScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CssUtils", function() { return CssUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockBodyScroll", function() { return LockBodyScroll; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Theme */ "./constants/Theme.tsx");
/* harmony import */ var _Root__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Root */ "./constants/Root.tsx");




function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    body, html {\n      overflow: hidden !important;\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// Core
 // Constants


 // Begin Component
// __________________________________________________________________________________________

/**
 *
 * @name CssUtils
 * @description CSS Utility functions. Just like SCSS mixins.
 * @returns A plethora of useful CSS.
 *
 */

var CssUtils = function CssUtils() {
  Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CssUtils);
};

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(CssUtils, "ObjectFit", function () {
  var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "cover";
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(["position:absolute;left:0;right:0;top:0;bottom:0;object-fit:", ";width:100%;height:100%;object-position:center;max-width:100%;"], position);
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(CssUtils, "ForceFullWidth", function () {
  var spacing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "0";
  var addGutter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(["width:calc(100% + (", " * 2));margin-left:calc(", " * -1);margin-right:calc(", " * -1);max-width:100vw;", ""], spacing, spacing, spacing, addGutter ? Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(["padding-left:", ";padding-right:", ";"], spacing, spacing) : null);
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(CssUtils, "ShowLoadingIndicator", function () {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(["background:", ";&:after{content:\"\";position:absolute;left:50%;top:50%;transform:translateY(-50%,-50%);width:calc(", " / 3);height:calc(", " / 3);border-radius:50%;background:", ";transition:opacity ", " ", ";z-index:10;}"], _Theme__WEBPACK_IMPORTED_MODULE_4__["Theme"].Color.Primary, _Root__WEBPACK_IMPORTED_MODULE_5__["Root"].Size, _Root__WEBPACK_IMPORTED_MODULE_5__["Root"].Size, _Theme__WEBPACK_IMPORTED_MODULE_4__["Theme"].Color.Accent, _Theme__WEBPACK_IMPORTED_MODULE_4__["Theme"].Base.Transition.Duration, _Theme__WEBPACK_IMPORTED_MODULE_4__["Theme"].Base.Transition.CssEase);
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(CssUtils, "DisableUserSelect", function () {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(["-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;"]);
});

var LockBodyScroll = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["createGlobalStyle"])(_templateObject());

/***/ })

})
//# sourceMappingURL=index.js.dae66b703b0cacfcc473.hot-update.js.map