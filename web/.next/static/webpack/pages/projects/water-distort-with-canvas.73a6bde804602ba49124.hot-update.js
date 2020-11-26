webpackHotUpdate_N_E("pages/projects/water-distort-with-canvas",{

/***/ "./pages/projects/water-distort-with-canvas.tsx":
/*!******************************************************!*\
  !*** ./pages/projects/water-distort-with-canvas.tsx ***!
  \******************************************************/
/*! exports provided: ThreeCanvasPage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ThreeCanvasPage\", function() { return ThreeCanvasPage; });\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_styles_Animation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants/styles/Animation */ \"./constants/styles/Animation.tsx\");\n/* harmony import */ var _components_interactive_InteractiveFrameHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/_interactive/InteractiveFrameHeader */ \"./components/_interactive/InteractiveFrameHeader/index.tsx\");\n/* harmony import */ var _constants_styles_Color__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../constants/styles/Color */ \"./constants/styles/Color.tsx\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _constants_site_Settings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../constants/site/Settings */ \"./constants/site/Settings.tsx\");\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/pflaxalt/Repositories/_pfl/web/pages/projects/water-distort-with-canvas.tsx\",\n    _this3 = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n      /* body, html {\\n        overflow: hidden;\\n      } */\\n\\n      .three-container {\\n        width: 100vw;\\n        height: 100vh;\\n        overflow: hidden;\\n        display: flex;\\n        justify-content: center;\\n        align-items: center;\\n\\n        #p5_loading {\\n          display: none !important;\\n        }\\n      }\\n\\n      #drawing-canvas {\\n\\t\\t\\t\\tposition: absolute;\\n\\t\\t\\t\\tbackground-color: #000000;\\n\\t\\t\\t\\ttop: 0px;\\n\\t\\t\\t\\tright: 0px;\\n\\t\\t\\t\\tz-index: 3000;\\n\\t\\t\\t\\tcursor: crosshair;\\n\\t\\t\\t\\ttouch-action: none;\\n\\n        display: none;\\n\\t\\t\\t}\\n\\n      canvas {\\n        animation: \", \" 1s ease 1;\\n        animation-fill-mode: forwards;\\n        animation-iteration-count: 1;\\n      }\\n\\n      .canvas-container {\\n        #defaultCanvas0 {\\n          display: none;\\n        }\\n      }\\n\\n      .dharma-container {\\n        opacity: 1;\\n      }\\n    \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n // import { ThreeCanvas } from \"../../sketches/three/with-canvas-as-texture\";\n\n\n\n // ______________________________________________________________\n\n// _________________________________________________________________________________\n\n/**\n *\n * @name P5Wrapper\n * @description Dynamic import of the P5 library\n *\n */\nvar P5Wrapper = next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-p5-wrapper */ \"./node_modules/react-p5-wrapper/dist/index.js\", 7));\n}, {\n  loading: function loading() {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null);\n  },\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! react-p5-wrapper */ \"./node_modules/react-p5-wrapper/dist/index.js\")];\n    },\n    modules: [\"react-p5-wrapper\"]\n  }\n});\n/**\n *\n * @name ThreePageWithContext\n *\n */\n\n_c2 = P5Wrapper;\n\nvar ThreePageWithContext = /*#__PURE__*/function (_Component) {\n  Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(ThreePageWithContext, _Component);\n\n  var _super = _createSuper(ThreePageWithContext);\n\n  function ThreePageWithContext(props) {\n    var _this;\n\n    Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, ThreePageWithContext);\n\n    _this = _super.call(this, props);\n\n    Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"canvasParentRef\", void 0);\n\n    Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"renderP5\", function (filename) {\n      _constants_site_Settings__WEBPACK_IMPORTED_MODULE_14__[\"__DEBUG__\"] && console.log(\"\\uD83D\\uDD53 Initializing p5 file ../../sketches/p5/\".concat(filename));\n      _constants_site_Settings__WEBPACK_IMPORTED_MODULE_14__[\"__DEBUG__\"] && console.log(\"\\uD83D\\uDC68\\u200D\\uD83D\\uDC66 Parent container ref: \", _this.canvasParentRef);\n\n      if (\"object\") {\n        var sketch = __webpack_require__(\"./sketches/p5 sync recursive ^\\\\.\\\\/.*$\")(\"./\".concat(filename))[\"default\"](_this.state.windowWidth, _this.state.windowHeight, 1, window.laxaltUniversalTheme, _this.state.canvasParent);\n\n        return __jsx(P5Wrapper, {\n          sketch: sketch,\n          __self: Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this),\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 141,\n            columnNumber: 14\n          }\n        });\n      } else {}\n    });\n\n    _this.state = {\n      domLoaded: false,\n      windowWidth: 0,\n      windowHeight: 0,\n      canvasElement: undefined,\n      canvasTheme: undefined,\n      canvasParent: undefined\n    };\n    return _this;\n  }\n  /**\n   *\n   * @name canvasParentRef\n   * @description Our ref for our Three.js container\n   *\n   */\n\n\n  Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ThreePageWithContext, [{\n    key: \"componentDidMount\",\n\n    /**\n     *\n     * @name componentDidMount()\n     * @description Lifecycle to start using the window & document\n     *\n     */\n    value: function componentDidMount() {\n      if (\"object\") {\n        this.setState({\n          windowWidth: window.innerWidth - 80,\n          windowHeight: window.innerHeight - 80,\n          domLoaded: true,\n          canvasElement: undefined,\n          canvasTheme: this.props.colorThemeContext,\n          canvasParent: this.canvasParentRef\n        });\n        window.laxaltUniversalTheme = this.props.colorThemeContext;\n      }\n    }\n  }, {\n    key: \"UNSAFE_componentWillReceiveProps\",\n    value: function UNSAFE_componentWillReceiveProps(nextProps) {\n      if (nextProps.colorThemeContext != this.state.canvasTheme) {\n        this.setState({\n          canvasTheme: this.props.colorThemeContext,\n          canvasParent: this.canvasParentRef\n        });\n      }\n    }\n    /**\n     *\n     * @name renderP5()\n     * @description Fire up p5.js canvas through a dynamic import\n     *\n     */\n\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var ThreePageGlobalStyles = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__[\"createGlobalStyle\"])(_templateObject(), _constants_styles_Animation__WEBPACK_IMPORTED_MODULE_10__[\"FadeIn\"]);\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx(ThreePageGlobalStyles, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 197,\n          columnNumber: 9\n        }\n      }), __jsx(_components_interactive_InteractiveFrameHeader__WEBPACK_IMPORTED_MODULE_11__[\"InteractiveFrameHeader\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 198,\n          columnNumber: 9\n        }\n      }), __jsx(\"div\", {\n        ref: function ref(element) {\n          return _this2.canvasParentRef = element;\n        },\n        className: \"canvas-container\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 200,\n          columnNumber: 9\n        }\n      }, this.state.canvasParent && this.renderP5(\"dharma-water-distort.canvas\")));\n    }\n  }]);\n\n  return ThreePageWithContext;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n\nvar ThreeCanvasPage = function ThreeCanvasPage() {\n  _s();\n\n  var themeContext = react__WEBPACK_IMPORTED_MODULE_8___default.a.useContext(_constants_styles_Color__WEBPACK_IMPORTED_MODULE_12__[\"ColorContext\"]);\n  console.log(\"themeContext: \", themeContext);\n  return __jsx(ThreePageWithContext, {\n    colorThemeContext: themeContext,\n    __self: _this3,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 217,\n      columnNumber: 10\n    }\n  });\n};\n\n_s(ThreeCanvasPage, \"Y26/CnccTa0PRifJ8EfxHm0U6Rk=\");\n\n_c3 = ThreeCanvasPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThreeCanvasPage);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"P5Wrapper$dynamic\");\n$RefreshReg$(_c2, \"P5Wrapper\");\n$RefreshReg$(_c3, \"ThreeCanvasPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvd2F0ZXItZGlzdG9ydC13aXRoLWNhbnZhcy50c3g/NTY0OCJdLCJuYW1lcyI6WyJQNVdyYXBwZXIiLCJkeW5hbWljIiwibG9hZGluZyIsInNzciIsIlRocmVlUGFnZVdpdGhDb250ZXh0IiwicHJvcHMiLCJmaWxlbmFtZSIsIl9fREVCVUdfXyIsImNvbnNvbGUiLCJsb2ciLCJjYW52YXNQYXJlbnRSZWYiLCJza2V0Y2giLCJyZXF1aXJlIiwic3RhdGUiLCJ3aW5kb3dXaWR0aCIsIndpbmRvd0hlaWdodCIsIndpbmRvdyIsImxheGFsdFVuaXZlcnNhbFRoZW1lIiwiY2FudmFzUGFyZW50IiwiZG9tTG9hZGVkIiwiY2FudmFzRWxlbWVudCIsInVuZGVmaW5lZCIsImNhbnZhc1RoZW1lIiwic2V0U3RhdGUiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJjb2xvclRoZW1lQ29udGV4dCIsIm5leHRQcm9wcyIsIlRocmVlUGFnZUdsb2JhbFN0eWxlcyIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiRmFkZUluIiwiZWxlbWVudCIsInJlbmRlclA1IiwiQ29tcG9uZW50IiwiVGhyZWVDYW52YXNQYWdlIiwidGhlbWVDb250ZXh0IiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwiQ29sb3JDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7Q0FJQTs7QUFHQTtBQU9BO0NBR0E7O0FBd0JBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLFNBQXlCLEdBQUdDLG9EQUFPO0FBQUEsU0FBQywySkFBRDtBQUFBLEdBQTZCO0FBQ3BFQyxTQUFPLEVBQUU7QUFBQSxXQUFNLGtFQUFOO0FBQUEsR0FEMkQ7QUFFcEVDLEtBQUcsRUFBRSxLQUYrRDtBQUFBO0FBQUE7QUFBQSxrQ0FBckIsdUVBQXFCO0FB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QUFxSjVCLElBQU1DLGVBQXlCLEdBQUcsU0FBNUJBLGVBQTRCLEdBQU07QUFBQTs7QUFDN0MsTUFBTUMsWUFBWSxHQUFHQyw0Q0FBSyxDQUFDQyxVQUFOLENBQWlCQyxxRUFBakIsQ0FBckI7QUFFQTlCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQThCMEIsWUFBOUI7QUFFQSxTQUFPLE1BQUMsb0JBQUQ7QUFBc0IscUJBQWlCLEVBQUVBLFlBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBUDtBQUNELENBTk07O0dBQU1ELGU7O01BQUFBLGU7QUFRRUEsOEVBQWYiLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy93YXRlci1kaXN0b3J0LXdpdGgtY2FudmFzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IEZhZGVJbiB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvc3R5bGVzL0FuaW1hdGlvblwiO1xuXG5pbXBvcnQgeyBJbnRlcmFjdGl2ZUZyYW1lSGVhZGVyIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvX2ludGVyYWN0aXZlL0ludGVyYWN0aXZlRnJhbWVIZWFkZXJcIjtcblxuLy8gaW1wb3J0IHsgVGhyZWVDYW52YXMgfSBmcm9tIFwiLi4vLi4vc2tldGNoZXMvdGhyZWUvd2l0aC1jYW52YXMtYXMtdGV4dHVyZVwiO1xuXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQge1xuICBDb2xvcixcbiAgQ29sb3JDb250ZXh0LFxuICBMWExUX0NvbG9yVGhlbWUsXG59IGZyb20gXCIuLi8uLi9jb25zdGFudHMvc3R5bGVzL0NvbG9yXCI7XG5pbXBvcnQgeyBMWExUX0dMU0xfQ2FudmFzIH0gZnJvbSBcIi4uLy4uL3NrZXRjaGVzL3A1L2dsc2xcIjtcbmltcG9ydCB7IExYTFRfUDVXcmFwcGVyIH0gZnJvbSBcIi4vX3NjYWZmb2xkLXA1XCI7XG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XG5pbXBvcnQgeyBfX0RFQlVHX18gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL3NpdGUvU2V0dGluZ3NcIjtcblxuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cblxudHlwZSBMWExUX1RocmVlUGFnZSA9IHtcbiAgY29sb3JUaGVtZUNvbnRleHQ6IExYTFRfQ29sb3JUaGVtZTtcbn07XG5cbnR5cGUgTFhMVF9DYW52YXNSb290RWxlbWVudCA9IEhUTUxEaXZFbGVtZW50O1xuXG50eXBlIExYTFRfVGhyZWVQYWdlX1N0YXRlID0ge1xuICBkb21Mb2FkZWQ6IGJvb2xlYW47XG4gIHdpbmRvd1dpZHRoOiBudW1iZXI7XG4gIHdpbmRvd0hlaWdodDogbnVtYmVyO1xuXG4gIGNhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50O1xuICBjYW52YXNUaGVtZTogTFhMVF9Db2xvclRoZW1lO1xuICBjYW52YXNQYXJlbnQ6IEhUTUxEaXZFbGVtZW50O1xufTtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBsYXhhbHRVbml2ZXJzYWxUaGVtZTogTFhMVF9Db2xvclRoZW1lO1xuICB9XG59XG5cbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuXG4vKipcbiAqXG4gKiBAbmFtZSBQNVdyYXBwZXJcbiAqIEBkZXNjcmlwdGlvbiBEeW5hbWljIGltcG9ydCBvZiB0aGUgUDUgbGlicmFyeVxuICpcbiAqL1xuY29uc3QgUDVXcmFwcGVyOiBMWExUX1A1V3JhcHBlciA9IGR5bmFtaWMoaW1wb3J0KFwicmVhY3QtcDUtd3JhcHBlclwiKSwge1xuICBsb2FkaW5nOiAoKSA9PiA8PjwvPixcbiAgc3NyOiBmYWxzZSxcbn0pO1xuXG4vKipcbiAqXG4gKiBAbmFtZSBUaHJlZVBhZ2VXaXRoQ29udGV4dFxuICpcbiAqL1xuY2xhc3MgVGhyZWVQYWdlV2l0aENvbnRleHQgZXh0ZW5kcyBDb21wb25lbnQ8XG4gIExYTFRfVGhyZWVQYWdlLFxuICBMWExUX1RocmVlUGFnZV9TdGF0ZVxuPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBMWExUX1RocmVlUGFnZSkge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkb21Mb2FkZWQ6IGZhbHNlLFxuICAgICAgd2luZG93V2lkdGg6IDAsXG4gICAgICB3aW5kb3dIZWlnaHQ6IDAsXG5cbiAgICAgIGNhbnZhc0VsZW1lbnQ6IHVuZGVmaW5lZCxcbiAgICAgIGNhbnZhc1RoZW1lOiB1bmRlZmluZWQsXG4gICAgICBjYW52YXNQYXJlbnQ6IHVuZGVmaW5lZCxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBuYW1lIGNhbnZhc1BhcmVudFJlZlxuICAgKiBAZGVzY3JpcHRpb24gT3VyIHJlZiBmb3Igb3VyIFRocmVlLmpzIGNvbnRhaW5lclxuICAgKlxuICAgKi9cbiAgcHJpdmF0ZSBjYW52YXNQYXJlbnRSZWY6IExYTFRfQ2FudmFzUm9vdEVsZW1lbnQ7XG5cbiAgLyoqXG4gICAqXG4gICAqIEBuYW1lIGNvbXBvbmVudERpZE1vdW50KClcbiAgICogQGRlc2NyaXB0aW9uIExpZmVjeWNsZSB0byBzdGFydCB1c2luZyB0aGUgd2luZG93ICYgZG9jdW1lbnRcbiAgICpcbiAgICovXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgd2luZG93V2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoIC0gODAsXG4gICAgICAgIHdpbmRvd0hlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gODAsXG4gICAgICAgIGRvbUxvYWRlZDogdHJ1ZSxcblxuICAgICAgICBjYW52YXNFbGVtZW50OiB1bmRlZmluZWQsXG4gICAgICAgIGNhbnZhc1RoZW1lOiB0aGlzLnByb3BzLmNvbG9yVGhlbWVDb250ZXh0LFxuICAgICAgICBjYW52YXNQYXJlbnQ6IHRoaXMuY2FudmFzUGFyZW50UmVmLFxuICAgICAgfSk7XG5cbiAgICAgIHdpbmRvdy5sYXhhbHRVbml2ZXJzYWxUaGVtZSA9IHRoaXMucHJvcHMuY29sb3JUaGVtZUNvbnRleHQ7XG4gICAgfVxuICB9XG5cbiAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBMWExUX1RocmVlUGFnZSkge1xuICAgIGlmIChuZXh0UHJvcHMuY29sb3JUaGVtZUNvbnRleHQgIT0gdGhpcy5zdGF0ZS5jYW52YXNUaGVtZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGNhbnZhc1RoZW1lOiB0aGlzLnByb3BzLmNvbG9yVGhlbWVDb250ZXh0LFxuICAgICAgICBjYW52YXNQYXJlbnQ6IHRoaXMuY2FudmFzUGFyZW50UmVmLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBuYW1lIHJlbmRlclA1KClcbiAgICogQGRlc2NyaXB0aW9uIEZpcmUgdXAgcDUuanMgY2FudmFzIHRocm91Z2ggYSBkeW5hbWljIGltcG9ydFxuICAgKlxuICAgKi9cbiAgcmVuZGVyUDUgPSAoZmlsZW5hbWU6IHN0cmluZykgPT4ge1xuICAgIF9fREVCVUdfXyAmJlxuICAgICAgY29uc29sZS5sb2coYPCflZMgSW5pdGlhbGl6aW5nIHA1IGZpbGUgLi4vLi4vc2tldGNoZXMvcDUvJHtmaWxlbmFtZX1gKTtcblxuICAgIF9fREVCVUdfXyAmJiBjb25zb2xlLmxvZyhg8J+RqOKAjfCfkaYgUGFyZW50IGNvbnRhaW5lciByZWY6IGAsIHRoaXMuY2FudmFzUGFyZW50UmVmKTtcblxuICAgIGlmICh0eXBlb2Ygd2luZG93KSB7XG4gICAgICBjb25zdCBza2V0Y2g6IExYTFRfR0xTTF9DYW52YXMgPSByZXF1aXJlKGAuLi8uLi9za2V0Y2hlcy9wNS8ke2ZpbGVuYW1lfWApLmRlZmF1bHQoXG4gICAgICAgIHRoaXMuc3RhdGUud2luZG93V2lkdGgsXG4gICAgICAgIHRoaXMuc3RhdGUud2luZG93SGVpZ2h0LFxuICAgICAgICAxLFxuICAgICAgICB3aW5kb3cubGF4YWx0VW5pdmVyc2FsVGhlbWUsXG4gICAgICAgIHRoaXMuc3RhdGUuY2FudmFzUGFyZW50XG4gICAgICApO1xuXG4gICAgICByZXR1cm4gPFA1V3JhcHBlciBza2V0Y2g9e3NrZXRjaH0gLz47XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgVGhyZWVQYWdlR2xvYmFsU3R5bGVzID0gY3JlYXRlR2xvYmFsU3R5bGVgXG4gICAgICAvKiBib2R5LCBodG1sIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH0gKi9cblxuICAgICAgLnRocmVlLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgI3A1X2xvYWRpbmcge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAjZHJhd2luZy1jYW52YXMge1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG5cdFx0XHRcdHRvcDogMHB4O1xuXHRcdFx0XHRyaWdodDogMHB4O1xuXHRcdFx0XHR6LWluZGV4OiAzMDAwO1xuXHRcdFx0XHRjdXJzb3I6IGNyb3NzaGFpcjtcblx0XHRcdFx0dG91Y2gtYWN0aW9uOiBub25lO1xuXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG5cdFx0XHR9XG5cbiAgICAgIGNhbnZhcyB7XG4gICAgICAgIGFuaW1hdGlvbjogJHtGYWRlSW59IDFzIGVhc2UgMTtcbiAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gICAgICB9XG5cbiAgICAgIC5jYW52YXMtY29udGFpbmVyIHtcbiAgICAgICAgI2RlZmF1bHRDYW52YXMwIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5kaGFybWEtY29udGFpbmVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICBgO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxUaHJlZVBhZ2VHbG9iYWxTdHlsZXMgLz5cbiAgICAgICAgPEludGVyYWN0aXZlRnJhbWVIZWFkZXIgLz5cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgcmVmPXsoZWxlbWVudDogSFRNTERpdkVsZW1lbnQpID0+ICh0aGlzLmNhbnZhc1BhcmVudFJlZiA9IGVsZW1lbnQpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImNhbnZhcy1jb250YWluZXJcIlxuICAgICAgICA+XG4gICAgICAgICAge3RoaXMuc3RhdGUuY2FudmFzUGFyZW50ICYmXG4gICAgICAgICAgICB0aGlzLnJlbmRlclA1KFwiZGhhcm1hLXdhdGVyLWRpc3RvcnQuY2FudmFzXCIpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IFRocmVlQ2FudmFzUGFnZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHRoZW1lQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoQ29sb3JDb250ZXh0KTtcblxuICBjb25zb2xlLmxvZyhcInRoZW1lQ29udGV4dDogXCIsIHRoZW1lQ29udGV4dCk7XG5cbiAgcmV0dXJuIDxUaHJlZVBhZ2VXaXRoQ29udGV4dCBjb2xvclRoZW1lQ29udGV4dD17dGhlbWVDb250ZXh0fSAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRocmVlQ2FudmFzUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/projects/water-distort-with-canvas.tsx\n");

/***/ })

})