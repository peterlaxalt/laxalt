webpackHotUpdate("static/development/pages/index.js",{

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

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(CssUtils, "DisableUserSelect", function () {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(["-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;"]);
});

var LockBodyScroll = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["createGlobalStyle"])(_templateObject());

/***/ })

})
//# sourceMappingURL=index.js.855f4410a765ea770cfa.hot-update.js.map