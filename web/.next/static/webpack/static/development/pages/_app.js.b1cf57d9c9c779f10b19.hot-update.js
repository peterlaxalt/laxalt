webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/ThemePicker/ThemePicker.tsx":
/*!************************************************!*\
  !*** ./components/ThemePicker/ThemePicker.tsx ***!
  \************************************************/
/*! exports provided: ThemePickerWithHook, ThemePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemePickerWithHook", function() { return ThemePickerWithHook; });
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
/* harmony import */ var _constants_styles_Color__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../constants/styles/Color */ "./constants/styles/Color.tsx");
/* harmony import */ var _constants_styles_CssUtils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants/styles/CssUtils */ "./constants/styles/CssUtils.tsx");
/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../constants/Theme */ "./constants/Theme.tsx");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styles.scss */ "./components/ThemePicker/styles.scss.tsx");







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
 * @name ThemePickerWithHook
 * @author Peter Laxalt
 *
 */
var ThemePickerWithHook =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ThemePickerWithHook, _React$PureComponent);

  function ThemePickerWithHook(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ThemePickerWithHook);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ThemePickerWithHook).call(this, props));
    _this.state = {
      activeTheme: {
        name: "default",
        primary: _constants_Theme__WEBPACK_IMPORTED_MODULE_11__["Theme"].Color.Primary,
        secondary: _constants_Theme__WEBPACK_IMPORTED_MODULE_11__["Theme"].Color.Secondary,
        background: _constants_Theme__WEBPACK_IMPORTED_MODULE_11__["Theme"].Color.Background,
        foreground: _constants_Theme__WEBPACK_IMPORTED_MODULE_11__["Theme"].Color.Text
      },
      availableThemes: [{
        name: "default",
        primary: _constants_Theme__WEBPACK_IMPORTED_MODULE_11__["Theme"].Color.Primary,
        secondary: _constants_Theme__WEBPACK_IMPORTED_MODULE_11__["Theme"].Color.Secondary,
        background: _constants_Theme__WEBPACK_IMPORTED_MODULE_11__["Theme"].Color.Background,
        foreground: _constants_Theme__WEBPACK_IMPORTED_MODULE_11__["Theme"].Color.Primary
      }, {
        name: "goldenrod",
        primary: "#393349",
        secondary: "#393349",
        background: "#DAA520",
        foreground: "#393349"
      }, {
        name: "cadetblue",
        primary: "#FFF8DC",
        secondary: "#FFF8DC",
        background: "#5F9EA0",
        foreground: "#FFF8DC"
      }, {
        name: "orangered",
        primary: "#FFF8DC",
        secondary: "#FFF8DC",
        background: "#FF4500",
        foreground: "#FFF8DC"
      }, {
        name: "white",
        primary: _constants_Theme__WEBPACK_IMPORTED_MODULE_11__["Theme"].Color.Black,
        secondary: _constants_Theme__WEBPACK_IMPORTED_MODULE_11__["Theme"].Color.Black,
        background: _constants_Theme__WEBPACK_IMPORTED_MODULE_11__["Theme"].Color.White,
        foreground: _constants_Theme__WEBPACK_IMPORTED_MODULE_11__["Theme"].Color.Black
      }, {
        name: "galaxy",
        primary: "#FFF8DC",
        secondary: "#FFF8DC",
        background: _constants_Theme__WEBPACK_IMPORTED_MODULE_11__["Theme"].Color.Galaxy,
        foreground: "#FFF8DC"
      }]
    };
    _this.setNewTheme = _this.setNewTheme.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ThemePickerWithHook, [{
    key: "setNewTheme",
    value: function setNewTheme(theme) {
      var setTheme = this.props.setTheme;
      this.setState({
        activeTheme: theme
      });
      setTheme(theme);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          activeTheme = _this$state.activeTheme,
          availableThemes = _this$state.availableThemes;
      var SetGlobalTheme = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["createGlobalStyle"])(_templateObject(), activeTheme ? _constants_styles_CssUtils__WEBPACK_IMPORTED_MODULE_10__["CssUtils"].CreateTheme(activeTheme.primary, activeTheme.secondary, activeTheme.background, activeTheme.foreground) : "");
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, activeTheme && activeTheme.name !== "default" ? __jsx(SetGlobalTheme, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }) : null, __jsx(_styles_scss__WEBPACK_IMPORTED_MODULE_12__["ThemePickerStyle"], {
        className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_12__["ThemePickerClassName"]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, availableThemes ? availableThemes.map(function (themeItem, idx) {
        return __jsx("div", {
          className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_12__["ThemePickerClassName"], "__option ").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_12__["ThemePickerClassName"], "__option--").concat(themeItem.name === activeTheme.name ? "active" : "inactive"),
          style: {
            backgroundColor: themeItem.background
          },
          onClick: function onClick() {
            return _this2.setNewTheme(themeItem);
          },
          key: idx,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          },
          __self: this
        });
      }) : null));
    }
  }]);

  return ThemePickerWithHook;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.PureComponent);
var ThemePicker = function ThemePicker() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_7__["useContext"])(_constants_styles_Color__WEBPACK_IMPORTED_MODULE_9__["ColorContext"]),
      setTheme = _useContext.setTheme;

  return __jsx(ThemePickerWithHook, {
    setTheme: setTheme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  });
};

/***/ }),

/***/ "./components/ThemePicker/index.tsx":
/*!******************************************!*\
  !*** ./components/ThemePicker/index.tsx ***!
  \******************************************/
/*! exports provided: ThemePickerWithHook, ThemePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ThemePicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ThemePicker */ "./components/ThemePicker/ThemePicker.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemePickerWithHook", function() { return _ThemePicker__WEBPACK_IMPORTED_MODULE_0__["ThemePickerWithHook"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemePicker", function() { return _ThemePicker__WEBPACK_IMPORTED_MODULE_0__["ThemePicker"]; });



/***/ })

})
//# sourceMappingURL=_app.js.b1cf57d9c9c779f10b19.hot-update.js.map