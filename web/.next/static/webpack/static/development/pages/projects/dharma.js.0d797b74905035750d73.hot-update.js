webpackHotUpdate("static/development/pages/projects/dharma.js",{

/***/ "./pages/projects/dharma.tsx":
/*!***********************************!*\
  !*** ./pages/projects/dharma.tsx ***!
  \***********************************/
/*! exports provided: P5Page, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P5Page", function() { return P5Page; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_interactive_InteractiveFrameHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/_interactive/InteractiveFrameHeader */ "./components/_interactive/InteractiveFrameHeader/index.tsx");
/* harmony import */ var _constants_styles_Color__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../constants/styles/Color */ "./constants/styles/Color.tsx");








var _jsxFileName = "/Users/pflaxalt/Repositories/_pfl/web/pages/projects/dharma.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      body, html {\n        overflow: hidden;\n      }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// Core
 // Utils

 // Theme
// import { Theme } from "../../constants/Theme";
// Types




var P5Wrapper = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-p5-wrapper */ "./node_modules/react-p5-wrapper/dist/index.js", 7));
}, {
  loading: function loading() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null);
  },
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-p5-wrapper */ "./node_modules/react-p5-wrapper/dist/index.js")];
    },
    modules: ["react-p5-wrapper"]
  }
});

var P5PageWithContext =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(P5PageWithContext, _Component);

  function P5PageWithContext(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, P5PageWithContext);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(P5PageWithContext).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "renderP5", function (filename) {
      var sketch = __webpack_require__("./sketches/p5 sync recursive ^\\.\\/.*$")("./".concat(filename))["default"](_this.state.windowWidth, _this.state.windowHeight, 1, _this.props.colorThemeContext);

      return __jsx(P5Wrapper, {
        sketch: sketch,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      });
    });

    _this.state = {
      domLoaded: false,
      windowWidth: 0,
      windowHeight: 0
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(P5PageWithContext, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if ("object") {
        this.setState({
          windowWidth: window.innerWidth - 80,
          windowHeight: window.innerHeight - 80,
          domLoaded: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var GlobalScrollLock = Object(styled_components__WEBPACK_IMPORTED_MODULE_10__["createGlobalStyle"])(_templateObject());
      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx(GlobalScrollLock, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), __jsx(_components_interactive_InteractiveFrameHeader__WEBPACK_IMPORTED_MODULE_11__["InteractiveFrameHeader"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }), this.state.domLoaded && this.state.windowHeight > 10 && this.state.windowWidth > 10 ? __jsx("div", {
        className: "dharma-container",
        style: {
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, this.renderP5("dharma")) : null);
    }
  }]);

  return P5PageWithContext;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var P5Page = function P5Page() {
  var themeContext = react__WEBPACK_IMPORTED_MODULE_8___default.a.useContext(_constants_styles_Color__WEBPACK_IMPORTED_MODULE_12__["ColorContext"]);
  return __jsx(P5PageWithContext, {
    colorThemeContext: themeContext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  });
};
/* harmony default export */ __webpack_exports__["default"] = (P5Page);

/***/ })

})
//# sourceMappingURL=dharma.js.0d797b74905035750d73.hot-update.js.map