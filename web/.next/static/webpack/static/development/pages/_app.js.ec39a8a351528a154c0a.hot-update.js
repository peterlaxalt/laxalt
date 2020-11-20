webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/GrainCover/styles.scss.tsx":
/*!***********************************************!*\
  !*** ./components/GrainCover/styles.scss.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _constants_styles_Animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/styles/Animation */ "./constants/styles/Animation.tsx");
// GrainCover Styles
// Imports
// __________________________________________________________________________________________
// Core

 // Animations
// Begin Styles
// __________________________________________________________________________________________

var GrainCoverStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "stylesscss__GrainCoverStyle",
  componentId: "uy0vxl-0"
})(["position:fixed;left:0;right:0;top:0;bottom:0;pointer-events:none;overflow:hidden;display:none;z-index:999;mix-blend-mode:multiply;.grain-cover-inner{width:1000vw;height:1000vh;animation:grain 8s steps(10) infinite;background-image:url('noise.png');animation:", " 8s steps(10) infinite;}"], _constants_styles_Animation__WEBPACK_IMPORTED_MODULE_1__["Grain"]);
/* harmony default export */ __webpack_exports__["default"] = (GrainCoverStyle);

/***/ }),

/***/ "./components/ThemePicker/ThemePicker.tsx":
/*!************************************************!*\
  !*** ./components/ThemePicker/ThemePicker.tsx ***!
  \************************************************/
/*! exports provided: ThemePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemePicker", function() { return ThemePicker; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _constants_styles_CssUtils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../constants/styles/CssUtils */ "./constants/styles/CssUtils.tsx");
/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants/Theme */ "./constants/Theme.tsx");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles.scss */ "./components/ThemePicker/styles.scss.tsx");







var _jsxFileName = "/Users/pflaxalt/Repositories/_pfl/web/components/ThemePicker/ThemePicker.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      ", "\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// Core




 // Begin Types
// __________________________________________________________________________________________

// Begin Component
// __________________________________________________________________________________________

/**
 * @name ThemePicker
 * @author Peter Laxalt
 *
 */
var ThemePicker =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ThemePicker, _React$PureComponent);

  function ThemePicker(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ThemePicker);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ThemePicker).call(this, props));
    _this.state = {
      activeTheme: {
        name: "default",
        primary: _constants_Theme__WEBPACK_IMPORTED_MODULE_10__["Theme"].Color.Primary,
        secondary: _constants_Theme__WEBPACK_IMPORTED_MODULE_10__["Theme"].Color.Secondary,
        background: _constants_Theme__WEBPACK_IMPORTED_MODULE_10__["Theme"].Color.Background,
        foreground: _constants_Theme__WEBPACK_IMPORTED_MODULE_10__["Theme"].Color.Text
      },
      availableThemes: [{
        name: "default",
        primary: _constants_Theme__WEBPACK_IMPORTED_MODULE_10__["Theme"].Color.Primary,
        secondary: _constants_Theme__WEBPACK_IMPORTED_MODULE_10__["Theme"].Color.Seconndary,
        background: _constants_Theme__WEBPACK_IMPORTED_MODULE_10__["Theme"].Color.Background,
        foreground: _constants_Theme__WEBPACK_IMPORTED_MODULE_10__["Theme"].Color.Foreground
      }, {
        name: "goldenrod",
        primary: "#393349",
        secondary: "#393349",
        background: "goldenrod",
        foreground: "#393349"
      }, {
        name: "cadetblue",
        primary: "cornsilk",
        secondary: "cornsilk",
        background: "cadetblue",
        foreground: "cornsilk"
      }, {
        name: "orangered",
        primary: "cornsilk",
        secondary: "cornsilk",
        background: "orangered",
        foreground: "cornsilk"
      }, {
        name: "white",
        primary: "black",
        secondary: "black",
        background: "white",
        foreground: "black"
      }, {
        name: "galaxy",
        primary: "cornsilk",
        secondary: "cornsilk",
        background: _constants_Theme__WEBPACK_IMPORTED_MODULE_10__["Theme"].Color.Galaxy,
        foreground: "cornsilk"
      }]
    };
    _this.setNewTheme = _this.setNewTheme.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ThemePicker, [{
    key: "setNewTheme",
    value: function setNewTheme(theme) {
      this.setState({
        activeTheme: theme
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          activeTheme = _this$state.activeTheme,
          availableThemes = _this$state.availableThemes;
      var SetGlobalTheme = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["createGlobalStyle"])(_templateObject(), activeTheme ? _constants_styles_CssUtils__WEBPACK_IMPORTED_MODULE_9__["CssUtils"].CreateTheme(activeTheme.primary, activeTheme.secondary, activeTheme.background, activeTheme.foreground) : "");
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, activeTheme && activeTheme.name !== "default" ? __jsx(SetGlobalTheme, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }) : null, __jsx(_styles_scss__WEBPACK_IMPORTED_MODULE_11__["ThemePickerStyle"], {
        className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_11__["ThemePickerClassName"]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, availableThemes ? availableThemes.map(function (themeItem, idx) {
        return __jsx("div", {
          className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_11__["ThemePickerClassName"], "__option ").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_11__["ThemePickerClassName"], "__option--").concat(themeItem.name === activeTheme.name ? 'active' : 'inactive'),
          style: {
            backgroundColor: themeItem.background
          },
          onClick: function onClick() {
            return _this2.setNewTheme(themeItem);
          },
          key: idx,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          },
          __self: this
        });
      }) : null));
    }
  }]);

  return ThemePicker;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.PureComponent);

/***/ })

})
//# sourceMappingURL=_app.js.ec39a8a351528a154c0a.hot-update.js.map