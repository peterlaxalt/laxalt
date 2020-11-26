webpackHotUpdate_N_E("pages/projects/water-distort-with-canvas",{

/***/ "./pages/projects/water-distort-with-canvas.tsx":
/*!******************************************************!*\
  !*** ./pages/projects/water-distort-with-canvas.tsx ***!
  \******************************************************/
/*! exports provided: ThreeCanvasPage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ThreeCanvasPage\", function() { return ThreeCanvasPage; });\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_styles_Animation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants/styles/Animation */ \"./constants/styles/Animation.tsx\");\n/* harmony import */ var _components_interactive_InteractiveFrameHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/_interactive/InteractiveFrameHeader */ \"./components/_interactive/InteractiveFrameHeader/index.tsx\");\n/* harmony import */ var _constants_styles_Color__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../constants/styles/Color */ \"./constants/styles/Color.tsx\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _constants_site_Settings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../constants/site/Settings */ \"./constants/site/Settings.tsx\");\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/pflaxalt/Repositories/_pfl/web/pages/projects/water-distort-with-canvas.tsx\",\n    _this3 = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n      /* body, html {\\n        overflow: hidden;\\n      } */\\n\\n      .three-container {\\n        width: 100vw;\\n        height: 100vh;\\n        overflow: hidden;\\n        display: flex;\\n        justify-content: center;\\n        align-items: center;\\n\\n        #p5_loading {\\n          display: none !important;\\n        }\\n      }\\n\\n      canvas {\\n        animation: \", \" 1s ease 1;\\n        animation-fill-mode: forwards;\\n        animation-iteration-count: 1;\\n      }\\n\\n      .canvas-container {\\n        #defaultCanvas0 {\\n          display: none;\\n        }\\n      }\\n\\n      .dharma-container {\\n        opacity: 1;\\n      }\\n    \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n // import { ThreeCanvas } from \"../../sketches/three/with-canvas-as-texture\";\n\n\n\n // ______________________________________________________________\n\n// _________________________________________________________________________________\n\n/**\n *\n * @name __CANVAS_FILE__\n * @description The file you want to load\n *\n */\nvar __CANVAS_FILE__ = \"dharma-water-distort.canvas\";\n/**\n *\n * @name P5Wrapper\n * @description Dynamic import of the P5 library\n *\n */\n\nvar P5Wrapper = next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-p5-wrapper */ \"./node_modules/react-p5-wrapper/dist/index.js\", 7));\n}, {\n  loading: function loading() {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null);\n  },\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! react-p5-wrapper */ \"./node_modules/react-p5-wrapper/dist/index.js\")];\n    },\n    modules: [\"react-p5-wrapper\"]\n  }\n});\n/**\n *\n * @name ThreePageWithContext\n *\n */\n\n_c2 = P5Wrapper;\n\nvar ThreePageWithContext = /*#__PURE__*/function (_Component) {\n  Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(ThreePageWithContext, _Component);\n\n  var _super = _createSuper(ThreePageWithContext);\n\n  function ThreePageWithContext(props) {\n    var _this;\n\n    Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, ThreePageWithContext);\n\n    _this = _super.call(this, props);\n\n    Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"canvasParentRef\", void 0);\n\n    Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"renderP5\", function (filename) {\n      if (_this.state.canvasElement === true) {\n        _constants_site_Settings__WEBPACK_IMPORTED_MODULE_14__[\"__DEBUG__\"] && console.log(\"\\uD83D\\uDE0C Canvas Element Exists\", _this.state.canvasElement);\n        return null;\n      } else {\n        _constants_site_Settings__WEBPACK_IMPORTED_MODULE_14__[\"__DEBUG__\"] && console.log(\"\\uD83D\\uDD53 Initializing p5 file ../../sketches/p5/\".concat(filename));\n        _constants_site_Settings__WEBPACK_IMPORTED_MODULE_14__[\"__DEBUG__\"] && console.log(\"\\uD83D\\uDC68\\u200D\\uD83D\\uDC66 Parent container ref: \", _this.canvasParentRef);\n\n        var sketch = __webpack_require__(\"./sketches/p5 sync recursive ^\\\\.\\\\/.*$\")(\"./\".concat(filename))[\"default\"](_this.state.windowWidth, _this.state.windowHeight, 1, _this.props.colorThemeContext, _this.state.canvasParent);\n\n        return __jsx(P5Wrapper, {\n          sketch: sketch,\n          __self: Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this),\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 153,\n            columnNumber: 14\n          }\n        });\n      }\n    });\n\n    _this.state = {\n      domLoaded: false,\n      windowWidth: 0,\n      windowHeight: 0,\n      canvasElement: false,\n      canvasTheme: undefined,\n      canvasParent: undefined\n    };\n    _this.renderP5 = _this.renderP5.bind(Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this));\n    return _this;\n  }\n  /**\n   *\n   * @name canvasParentRef\n   * @description Our ref for our Three.js container\n   *\n   */\n\n\n  Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ThreePageWithContext, [{\n    key: \"componentDidMount\",\n\n    /**\n     *\n     * @name componentDidMount()\n     * @description Lifecycle to start using the window & document\n     *\n     */\n    value: function componentDidMount() {\n      if (\"object\") {\n        this.setState({\n          windowWidth: window.innerWidth - 80,\n          windowHeight: window.innerHeight - 80,\n          domLoaded: true,\n          canvasElement: false,\n          canvasTheme: this.props.colorThemeContext,\n          canvasParent: this.canvasParentRef\n        });\n        window.laxaltUniversalTheme = this.props.colorThemeContext;\n      }\n    }\n  }, {\n    key: \"UNSAFE_componentWillReceiveProps\",\n    value: function UNSAFE_componentWillReceiveProps(nextProps) {\n      if (nextProps.colorThemeContext != this.state.canvasTheme) {\n        this.setState({\n          canvasTheme: this.props.colorThemeContext,\n          canvasParent: this.canvasParentRef\n        });\n      }\n    }\n    /**\n     *\n     * @name renderP5()\n     * @description Fire up p5.js canvas through a dynamic import\n     *\n     */\n\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      _constants_site_Settings__WEBPACK_IMPORTED_MODULE_14__[\"__DEBUG__\"] && console.log(\"👀 this.state\", this.state);\n      var ThreePageGlobalStyles = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__[\"createGlobalStyle\"])(_templateObject(), _constants_styles_Animation__WEBPACK_IMPORTED_MODULE_10__[\"FadeIn\"]);\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx(ThreePageGlobalStyles, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 197,\n          columnNumber: 9\n        }\n      }), __jsx(_components_interactive_InteractiveFrameHeader__WEBPACK_IMPORTED_MODULE_11__[\"InteractiveFrameHeader\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 198,\n          columnNumber: 9\n        }\n      }), __jsx(\"div\", {\n        ref: function ref(element) {\n          return _this2.canvasParentRef = element;\n        },\n        className: \"canvas-container\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 200,\n          columnNumber: 9\n        }\n      }, this.state.canvasParent ? this.renderP5(__CANVAS_FILE__) : null));\n    }\n  }]);\n\n  return ThreePageWithContext;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n\nvar ThreeCanvasPage = function ThreeCanvasPage() {\n  _s();\n\n  var themeContext = react__WEBPACK_IMPORTED_MODULE_8___default.a.useContext(_constants_styles_Color__WEBPACK_IMPORTED_MODULE_12__[\"ColorContext\"]);\n  console.log(\"themeContext: \", themeContext);\n  return __jsx(ThreePageWithContext, {\n    colorThemeContext: themeContext,\n    __self: _this3,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 216,\n      columnNumber: 10\n    }\n  });\n};\n\n_s(ThreeCanvasPage, \"Y26/CnccTa0PRifJ8EfxHm0U6Rk=\");\n\n_c3 = ThreeCanvasPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThreeCanvasPage);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"P5Wrapper$dynamic\");\n$RefreshReg$(_c2, \"P5Wrapper\");\n$RefreshReg$(_c3, \"ThreeCanvasPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvd2F0ZXItZGlzdG9ydC13aXRoLWNhbnZhcy50c3g/NTY0OCJdLCJuYW1lcyI6WyJfX0NBTlZBU19GSUxFX18iLCJQNVdyYXBwZXIiLCJkeW5hbWljIiwibG9hZGluZyIsInNzciIsIlRocmVlUGFnZVdpdGhDb250ZXh0IiwicHJvcHMiLCJmaWxlbmFtZSIsInN0YXRlIiwiY2FudmFzRWxlbWVudCIsIl9fREVCVUdfXyIsImNvbnNvbGUiLCJsb2ciLCJjYW52YXNQYXJlbnRSZWYiLCJza2V0Y2giLCJyZXF1aXJlIiwid2luZG93V2lkdGgiLCJ3aW5kb3dIZWlnaHQiLCJjb2xvclRoZW1lQ29udGV4dCIsImNhbnZhc1BhcmVudCIsImRvbUxvYWRlZCIsImNhbnZhc1RoZW1lIiwidW5kZWZpbmVkIiwicmVuZGVyUDUiLCJiaW5kIiwic2V0U3RhdGUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJsYXhhbHRVbml2ZXJzYWxUaGVtZSIsIm5leHRQcm9wcyIsIlRocmVlUGFnZUdsb2JhbFN0eWxlcyIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiRmFkZUluIiwiZWxlbWVudCIsIkNvbXBvbmVudCIsIlRocmVlQ2FudmFzUGFnZSIsInRoZW1lQ29udGV4dCIsIlJlYWN0IiwidXNlQ29udGV4dCIsIkNvbG9yQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0NBSUE7O0FBR0E7QUFHQTtDQUdBOztBQXdCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxlQUFlLEdBQUcsNkJBQXhCO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1DLFNBQXlCLEdBQUdDLG9EQUFPO0FBQUEsU0FBQywySkFBRDtBQUFBLEdBQTZCO0FBQ3BFQyxTQUFPLEVB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsRUFFRSxNQUFDLHNHQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGRixFQUlFO0FBQ0UsV0FBRyxFQUFFLGFBQUNDLE9BQUQ7QUFBQSxpQkFBOEIsTUFBSSxDQUFDckIsZUFBTCxHQUF1QnFCLE9BQXJEO0FBQUEsU0FEUDtBQUVFLGlCQUFTLEVBQUMsa0JBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUlHLEtBQUsxQixLQUFMLENBQVdXLFlBQVgsR0FBMEIsS0FBS0ksUUFBTCxDQUFjdkIsZUFBZCxDQUExQixHQUEyRCxJQUo5RCxDQUpGLENBREY7QUFhRDs7OztFQTdJZ0NtQywrQzs7QUFnSjVCLElBQU1DLGVBQXlCLEdBQUcsU0FBNUJBLGVBQTRCLEdBQU07QUFBQTs7QUFDN0MsTUFBTUMsWUFBWSxHQUFHQyw0Q0FBSyxDQUFDQyxVQUFOLENBQWlCQyxxRUFBakIsQ0FBckI7QUFFQTdCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQThCeUIsWUFBOUI7QUFFQSxTQUFPLE1BQUMsb0JBQUQ7QUFBc0IscUJBQWlCLEVBQUVBLFlBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBUDtBQUNELENBTk07O0dBQU1ELGU7O01BQUFBLGU7QUFRRUEsOEVBQWYiLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy93YXRlci1kaXN0b3J0LXdpdGgtY2FudmFzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IEZhZGVJbiB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvc3R5bGVzL0FuaW1hdGlvblwiO1xuXG5pbXBvcnQgeyBJbnRlcmFjdGl2ZUZyYW1lSGVhZGVyIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvX2ludGVyYWN0aXZlL0ludGVyYWN0aXZlRnJhbWVIZWFkZXJcIjtcblxuLy8gaW1wb3J0IHsgVGhyZWVDYW52YXMgfSBmcm9tIFwiLi4vLi4vc2tldGNoZXMvdGhyZWUvd2l0aC1jYW52YXMtYXMtdGV4dHVyZVwiO1xuXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBDb2xvckNvbnRleHQsIExYTFRfQ29sb3JUaGVtZSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvc3R5bGVzL0NvbG9yXCI7XG5pbXBvcnQgeyBMWExUX0dMU0xfQ2FudmFzIH0gZnJvbSBcIi4uLy4uL3NrZXRjaGVzL3A1L2dsc2xcIjtcbmltcG9ydCB7IExYTFRfUDVXcmFwcGVyIH0gZnJvbSBcIi4vX3NjYWZmb2xkLXA1XCI7XG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XG5pbXBvcnQgeyBfX0RFQlVHX18gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL3NpdGUvU2V0dGluZ3NcIjtcblxuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cblxudHlwZSBMWExUX1RocmVlUGFnZSA9IHtcbiAgY29sb3JUaGVtZUNvbnRleHQ6IExYTFRfQ29sb3JUaGVtZTtcbn07XG5cbnR5cGUgTFhMVF9DYW52YXNSb290RWxlbWVudCA9IEhUTUxEaXZFbGVtZW50O1xuXG50eXBlIExYTFRfVGhyZWVQYWdlX1N0YXRlID0ge1xuICBkb21Mb2FkZWQ6IGJvb2xlYW47XG4gIHdpbmRvd1dpZHRoOiBudW1iZXI7XG4gIHdpbmRvd0hlaWdodDogbnVtYmVyO1xuXG4gIGNhbnZhc0VsZW1lbnQ6IGJvb2xlYW47XG4gIGNhbnZhc1RoZW1lOiBMWExUX0NvbG9yVGhlbWU7XG4gIGNhbnZhc1BhcmVudDogSFRNTERpdkVsZW1lbnQ7XG59O1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIGxheGFsdFVuaXZlcnNhbFRoZW1lOiBMWExUX0NvbG9yVGhlbWU7XG4gIH1cbn1cblxuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG5cbi8qKlxuICpcbiAqIEBuYW1lIF9fQ0FOVkFTX0ZJTEVfX1xuICogQGRlc2NyaXB0aW9uIFRoZSBmaWxlIHlvdSB3YW50IHRvIGxvYWRcbiAqXG4gKi9cbmNvbnN0IF9fQ0FOVkFTX0ZJTEVfXyA9IFwiZGhhcm1hLXdhdGVyLWRpc3RvcnQuY2FudmFzXCI7XG5cbi8qKlxuICpcbiAqIEBuYW1lIFA1V3JhcHBlclxuICogQGRlc2NyaXB0aW9uIER5bmFtaWMgaW1wb3J0IG9mIHRoZSBQNSBsaWJyYXJ5XG4gKlxuICovXG5jb25zdCBQNVdyYXBwZXI6IExYTFRfUDVXcmFwcGVyID0gZHluYW1pYyhpbXBvcnQoXCJyZWFjdC1wNS13cmFwcGVyXCIpLCB7XG4gIGxvYWRpbmc6ICgpID0+IDw+PC8+LFxuICBzc3I6IGZhbHNlLFxufSk7XG5cbi8qKlxuICpcbiAqIEBuYW1lIFRocmVlUGFnZVdpdGhDb250ZXh0XG4gKlxuICovXG5jbGFzcyBUaHJlZVBhZ2VXaXRoQ29udGV4dCBleHRlbmRzIENvbXBvbmVudDxcbiAgTFhMVF9UaHJlZVBhZ2UsXG4gIExYTFRfVGhyZWVQYWdlX1N0YXRlXG4+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IExYTFRfVGhyZWVQYWdlKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRvbUxvYWRlZDogZmFsc2UsXG4gICAgICB3aW5kb3dXaWR0aDogMCxcbiAgICAgIHdpbmRvd0hlaWdodDogMCxcblxuICAgICAgY2FudmFzRWxlbWVudDogZmFsc2UsXG4gICAgICBjYW52YXNUaGVtZTogdW5kZWZpbmVkLFxuICAgICAgY2FudmFzUGFyZW50OiB1bmRlZmluZWQsXG4gICAgfTtcblxuICAgIHRoaXMucmVuZGVyUDUgPSB0aGlzLnJlbmRlclA1LmJpbmQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQG5hbWUgY2FudmFzUGFyZW50UmVmXG4gICAqIEBkZXNjcmlwdGlvbiBPdXIgcmVmIGZvciBvdXIgVGhyZWUuanMgY29udGFpbmVyXG4gICAqXG4gICAqL1xuICBwcml2YXRlIGNhbnZhc1BhcmVudFJlZjogTFhMVF9DYW52YXNSb290RWxlbWVudDtcblxuICAvKipcbiAgICpcbiAgICogQG5hbWUgY29tcG9uZW50RGlkTW91bnQoKVxuICAgKiBAZGVzY3JpcHRpb24gTGlmZWN5Y2xlIHRvIHN0YXJ0IHVzaW5nIHRoZSB3aW5kb3cgJiBkb2N1bWVudFxuICAgKlxuICAgKi9cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB3aW5kb3dXaWR0aDogd2luZG93LmlubmVyV2lkdGggLSA4MCxcbiAgICAgICAgd2luZG93SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSA4MCxcbiAgICAgICAgZG9tTG9hZGVkOiB0cnVlLFxuXG4gICAgICAgIGNhbnZhc0VsZW1lbnQ6IGZhbHNlLFxuICAgICAgICBjYW52YXNUaGVtZTogdGhpcy5wcm9wcy5jb2xvclRoZW1lQ29udGV4dCxcbiAgICAgICAgY2FudmFzUGFyZW50OiB0aGlzLmNhbnZhc1BhcmVudFJlZixcbiAgICAgIH0pO1xuXG4gICAgICB3aW5kb3cubGF4YWx0VW5pdmVyc2FsVGhlbWUgPSB0aGlzLnByb3BzLmNvbG9yVGhlbWVDb250ZXh0O1xuICAgIH1cbiAgfVxuXG4gIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogTFhMVF9UaHJlZVBhZ2UpIHtcbiAgICBpZiAobmV4dFByb3BzLmNvbG9yVGhlbWVDb250ZXh0ICE9IHRoaXMuc3RhdGUuY2FudmFzVGhlbWUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjYW52YXNUaGVtZTogdGhpcy5wcm9wcy5jb2xvclRoZW1lQ29udGV4dCxcbiAgICAgICAgY2FudmFzUGFyZW50OiB0aGlzLmNhbnZhc1BhcmVudFJlZixcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAbmFtZSByZW5kZXJQNSgpXG4gICAqIEBkZXNjcmlwdGlvbiBGaXJlIHVwIHA1LmpzIGNhbnZhcyB0aHJvdWdoIGEgZHluYW1pYyBpbXBvcnRcbiAgICpcbiAgICovXG4gIHJlbmRlclA1ID0gKGZpbGVuYW1lOiBzdHJpbmcpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5jYW52YXNFbGVtZW50ID09PSB0cnVlKSB7XG4gICAgICBfX0RFQlVHX18gJiZcbiAgICAgICAgY29uc29sZS5sb2coYPCfmIwgQ2FudmFzIEVsZW1lbnQgRXhpc3RzYCwgdGhpcy5zdGF0ZS5jYW52YXNFbGVtZW50KTtcblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9fREVCVUdfXyAmJlxuICAgICAgICBjb25zb2xlLmxvZyhg8J+VkyBJbml0aWFsaXppbmcgcDUgZmlsZSAuLi8uLi9za2V0Y2hlcy9wNS8ke2ZpbGVuYW1lfWApO1xuXG4gICAgICBfX0RFQlVHX18gJiZcbiAgICAgICAgY29uc29sZS5sb2coYPCfkajigI3wn5GmIFBhcmVudCBjb250YWluZXIgcmVmOiBgLCB0aGlzLmNhbnZhc1BhcmVudFJlZik7XG5cbiAgICAgIGNvbnN0IHNrZXRjaDogTFhMVF9HTFNMX0NhbnZhcyA9IHJlcXVpcmUoYC4uLy4uL3NrZXRjaGVzL3A1LyR7ZmlsZW5hbWV9YCkuZGVmYXVsdChcbiAgICAgICAgdGhpcy5zdGF0ZS53aW5kb3dXaWR0aCxcbiAgICAgICAgdGhpcy5zdGF0ZS53aW5kb3dIZWlnaHQsXG4gICAgICAgIDEsXG4gICAgICAgIHRoaXMucHJvcHMuY29sb3JUaGVtZUNvbnRleHQsXG4gICAgICAgIHRoaXMuc3RhdGUuY2FudmFzUGFyZW50XG4gICAgICApO1xuXG4gICAgICByZXR1cm4gPFA1V3JhcHBlciBza2V0Y2g9e3NrZXRjaH0gLz47XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBfX0RFQlVHX18gJiYgY29uc29sZS5sb2coXCLwn5GAIHRoaXMuc3RhdGVcIiwgdGhpcy5zdGF0ZSk7XG5cbiAgICBjb25zdCBUaHJlZVBhZ2VHbG9iYWxTdHlsZXMgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbiAgICAgIC8qIGJvZHksIGh0bWwge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfSAqL1xuXG4gICAgICAudGhyZWUtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAjcDVfbG9hZGluZyB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNhbnZhcyB7XG4gICAgICAgIGFuaW1hdGlvbjogJHtGYWRlSW59IDFzIGVhc2UgMTtcbiAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gICAgICB9XG5cbiAgICAgIC5jYW52YXMtY29udGFpbmVyIHtcbiAgICAgICAgI2RlZmF1bHRDYW52YXMwIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5kaGFybWEtY29udGFpbmVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICBgO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxUaHJlZVBhZ2VHbG9iYWxTdHlsZXMgLz5cbiAgICAgICAgPEludGVyYWN0aXZlRnJhbWVIZWFkZXIgLz5cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgcmVmPXsoZWxlbWVudDogSFRNTERpdkVsZW1lbnQpID0+ICh0aGlzLmNhbnZhc1BhcmVudFJlZiA9IGVsZW1lbnQpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImNhbnZhcy1jb250YWluZXJcIlxuICAgICAgICA+XG4gICAgICAgICAge3RoaXMuc3RhdGUuY2FudmFzUGFyZW50ID8gdGhpcy5yZW5kZXJQNShfX0NBTlZBU19GSUxFX18pIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBUaHJlZUNhbnZhc1BhZ2U6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCB0aGVtZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KENvbG9yQ29udGV4dCk7XG5cbiAgY29uc29sZS5sb2coXCJ0aGVtZUNvbnRleHQ6IFwiLCB0aGVtZUNvbnRleHQpO1xuXG4gIHJldHVybiA8VGhyZWVQYWdlV2l0aENvbnRleHQgY29sb3JUaGVtZUNvbnRleHQ9e3RoZW1lQ29udGV4dH0gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaHJlZUNhbnZhc1BhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/projects/water-distort-with-canvas.tsx\n");

/***/ })

})