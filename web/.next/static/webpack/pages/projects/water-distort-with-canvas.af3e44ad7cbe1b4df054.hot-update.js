webpackHotUpdate_N_E("pages/projects/water-distort-with-canvas",{

/***/ "./pages/projects/water-distort-with-canvas.tsx":
/*!******************************************************!*\
  !*** ./pages/projects/water-distort-with-canvas.tsx ***!
  \******************************************************/
/*! exports provided: ThreeCanvasPage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ThreeCanvasPage\", function() { return ThreeCanvasPage; });\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_styles_Animation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants/styles/Animation */ \"./constants/styles/Animation.tsx\");\n/* harmony import */ var _components_interactive_InteractiveFrameHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/_interactive/InteractiveFrameHeader */ \"./components/_interactive/InteractiveFrameHeader/index.tsx\");\n/* harmony import */ var _constants_styles_Color__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../constants/styles/Color */ \"./constants/styles/Color.tsx\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _constants_site_Settings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../constants/site/Settings */ \"./constants/site/Settings.tsx\");\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/pflaxalt/Repositories/_pfl/web/pages/projects/water-distort-with-canvas.tsx\",\n    _this3 = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n      /* body, html {\\n        overflow: hidden;\\n      } */\\n\\n      .three-container {\\n        width: 100vw;\\n        height: 100vh;\\n        overflow: hidden;\\n        display: flex;\\n        justify-content: center;\\n        align-items: center;\\n\\n        #p5_loading {\\n          display: none !important;\\n        }\\n      }\\n\\n      #drawing-canvas {\\n\\t\\t\\t\\tposition: absolute;\\n\\t\\t\\t\\tbackground-color: #000000;\\n\\t\\t\\t\\ttop: 0px;\\n\\t\\t\\t\\tright: 0px;\\n\\t\\t\\t\\tz-index: 3000;\\n\\t\\t\\t\\tcursor: crosshair;\\n\\t\\t\\t\\ttouch-action: none;\\n\\n        display: none;\\n\\t\\t\\t}\\n\\n      canvas {\\n        animation: \", \" 1s ease 1;\\n        animation-fill-mode: forwards;\\n        animation-iteration-count: 1;\\n      }\\n\\n      .canvas-container {\\n        #defaultCanvas0 {\\n          display: none;\\n        }\\n      }\\n\\n      .dharma-container {\\n        opacity: 1;\\n      }\\n    \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n // import { ThreeCanvas } from \"../../sketches/three/with-canvas-as-texture\";\n\n\n\n // ______________________________________________________________\n\n// _________________________________________________________________________________\n\n/**\n *\n * @name P5Wrapper\n * @description Dynamic import of the P5 library\n *\n */\nvar P5Wrapper = next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-p5-wrapper */ \"./node_modules/react-p5-wrapper/dist/index.js\", 7));\n}, {\n  loading: function loading() {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null);\n  },\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! react-p5-wrapper */ \"./node_modules/react-p5-wrapper/dist/index.js\")];\n    },\n    modules: [\"react-p5-wrapper\"]\n  }\n});\n/**\n *\n * @name ThreePageWithContext\n *\n */\n\n_c2 = P5Wrapper;\n\nvar ThreePageWithContext = /*#__PURE__*/function (_Component) {\n  Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(ThreePageWithContext, _Component);\n\n  var _super = _createSuper(ThreePageWithContext);\n\n  function ThreePageWithContext(props) {\n    var _this;\n\n    Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, ThreePageWithContext);\n\n    _this = _super.call(this, props);\n\n    Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"canvasParentRef\", void 0);\n\n    Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"renderP5\", function (filename) {\n      _constants_site_Settings__WEBPACK_IMPORTED_MODULE_14__[\"__DEBUG__\"] && console.log(\"\\uD83D\\uDD53 Initializing p5 file ../../sketches/p5/\".concat(filename));\n      _constants_site_Settings__WEBPACK_IMPORTED_MODULE_14__[\"__DEBUG__\"] && console.log(\"\\uD83D\\uDC68\\u200D\\uD83D\\uDC66 Parent container ref: \", _this.canvasParentRef);\n\n      var sketch = __webpack_require__(\"./sketches/p5 sync recursive ^\\\\.\\\\/.*$\")(\"./\".concat(filename))[\"default\"](_this.state.windowWidth, _this.state.windowHeight, 1, _this.state.canvasTheme, _this.canvasParentRef);\n\n      return __jsx(P5Wrapper, {\n        sketch: sketch,\n        __self: Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this),\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 127,\n          columnNumber: 12\n        }\n      });\n    });\n\n    _this.state = {\n      domLoaded: false,\n      windowWidth: 0,\n      windowHeight: 0,\n      canvasElement: undefined,\n      canvasTheme: undefined,\n      canvasParent: undefined\n    };\n    return _this;\n  }\n  /**\n   *\n   * @name canvasParentRef\n   * @description Our ref for our Three.js container\n   *\n   */\n\n\n  Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ThreePageWithContext, [{\n    key: \"componentDidMount\",\n\n    /**\n     *\n     * @name componentDidMount()\n     * @description Lifecycle to start using the window & document\n     *\n     */\n    value: function componentDidMount() {\n      if (\"object\") {\n        this.setState({\n          windowWidth: window.innerWidth - 80,\n          windowHeight: window.innerHeight - 80,\n          domLoaded: true,\n          canvasElement: undefined,\n          canvasTheme: this.props.colorThemeContext,\n          canvasParent: this.canvasParentRef\n        });\n      }\n    }\n  }, {\n    key: \"UNSAFE_componentWillReceiveProps\",\n    value: function UNSAFE_componentWillReceiveProps(nextProps) {\n      if (nextProps.colorThemeContext != this.state.canvasTheme) {\n        this.setState({\n          canvasTheme: this.props.colorThemeContext\n        });\n      }\n    }\n    /**\n     *\n     * @name renderP5()\n     * @description Fire up p5.js canvas through a dynamic import\n     *\n     */\n\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var ThreePageGlobalStyles = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__[\"createGlobalStyle\"])(_templateObject(), _constants_styles_Animation__WEBPACK_IMPORTED_MODULE_10__[\"FadeIn\"]);\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx(ThreePageGlobalStyles, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 180,\n          columnNumber: 9\n        }\n      }), __jsx(_components_interactive_InteractiveFrameHeader__WEBPACK_IMPORTED_MODULE_11__[\"InteractiveFrameHeader\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 181,\n          columnNumber: 9\n        }\n      }), __jsx(\"div\", {\n        ref: function ref(element) {\n          return _this2.canvasParentRef = element;\n        },\n        className: \"canvas-container\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 183,\n          columnNumber: 9\n        }\n      }, this.renderP5(\"dharma-water-distort.canvas\")));\n    }\n  }]);\n\n  return ThreePageWithContext;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n\nvar ThreeCanvasPage = function ThreeCanvasPage() {\n  _s();\n\n  var themeContext = react__WEBPACK_IMPORTED_MODULE_8___default.a.useContext(_constants_styles_Color__WEBPACK_IMPORTED_MODULE_12__[\"ColorContext\"]);\n  return __jsx(ThreePageWithContext, {\n    colorThemeContext: themeContext,\n    __self: _this3,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 197,\n      columnNumber: 10\n    }\n  });\n};\n\n_s(ThreeCanvasPage, \"Y26/CnccTa0PRifJ8EfxHm0U6Rk=\");\n\n_c3 = ThreeCanvasPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThreeCanvasPage);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"P5Wrapper$dynamic\");\n$RefreshReg$(_c2, \"P5Wrapper\");\n$RefreshReg$(_c3, \"ThreeCanvasPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvd2F0ZXItZGlzdG9ydC13aXRoLWNhbnZhcy50c3g/NTY0OCJdLCJuYW1lcyI6WyJQNVdyYXBwZXIiLCJkeW5hbWljIiwibG9hZGluZyIsInNzciIsIlRocmVlUGFnZVdpdGhDb250ZXh0IiwicHJvcHMiLCJmaWxlbmFtZSIsIl9fREVCVUdfXyIsImNvbnNvbGUiLCJsb2ciLCJjYW52YXNQYXJlbnRSZWYiLCJza2V0Y2giLCJyZXF1aXJlIiwic3RhdGUiLCJ3aW5kb3dXaWR0aCIsIndpbmRvd0hlaWdodCIsImNhbnZhc1RoZW1lIiwiZG9tTG9hZGVkIiwiY2FudmFzRWxlbWVudCIsInVuZGVmaW5lZCIsImNhbnZhc1BhcmVudCIsInNldFN0YXRlIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiY29sb3JUaGVtZUNvbnRleHQiLCJuZXh0UHJvcHMiLCJUaHJlZVBhZ2VHbG9iYWxTdHlsZXMiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIkZhZGVJbiIsImVsZW1lbnQiLCJyZW5kZXJQNSIsIkNvbXBvbmVudCIsIlRocmVlQ2FudmFzUGFnZSIsInRoZW1lQ29udGV4dCIsIlJlYWN0IiwidXNlQ29udGV4dCIsIkNvbG9yQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0NBSUE7O0FBR0E7QUFHQTtDQUdBOztBQWtCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxTQUF5QixHQUFHQyxvREFBTztBQUFBLFNBQUMsMkpBQUQ7QUFBQSxHQUE2QjtBQUNwRUMsU0FBTyxFQUFFO0FBQUEsV0FBTSxrRUFBTjtBQUFBLEdBRDJEO0FBRXBFQyxLQUFHLEVBQUUsS0FGK0Q7QUFBQTtBQUFBO0FBQUEsa0NBQXJCLHVFQUFxQjtBQUFBO0FBQUEsY0FBckIsa0JBQXFCO0FB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QTtBQUFBO0FBQUEsSUFBUDtBQUNELENBSk07O0dBQU1ELGU7O01BQUFBLGU7QUFNRUEsOEVBQWYiLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy93YXRlci1kaXN0b3J0LXdpdGgtY2FudmFzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IEZhZGVJbiB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvc3R5bGVzL0FuaW1hdGlvblwiO1xuXG5pbXBvcnQgeyBJbnRlcmFjdGl2ZUZyYW1lSGVhZGVyIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvX2ludGVyYWN0aXZlL0ludGVyYWN0aXZlRnJhbWVIZWFkZXJcIjtcblxuLy8gaW1wb3J0IHsgVGhyZWVDYW52YXMgfSBmcm9tIFwiLi4vLi4vc2tldGNoZXMvdGhyZWUvd2l0aC1jYW52YXMtYXMtdGV4dHVyZVwiO1xuXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBDb2xvckNvbnRleHQsIExYTFRfQ29sb3JUaGVtZSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvc3R5bGVzL0NvbG9yXCI7XG5pbXBvcnQgeyBMWExUX0dMU0xfQ2FudmFzIH0gZnJvbSBcIi4uLy4uL3NrZXRjaGVzL3A1L2dsc2xcIjtcbmltcG9ydCB7IExYTFRfUDVXcmFwcGVyIH0gZnJvbSBcIi4vX3NjYWZmb2xkLXA1XCI7XG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XG5pbXBvcnQgeyBfX0RFQlVHX18gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL3NpdGUvU2V0dGluZ3NcIjtcblxuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cblxudHlwZSBMWExUX1RocmVlUGFnZSA9IHtcbiAgY29sb3JUaGVtZUNvbnRleHQ6IExYTFRfQ29sb3JUaGVtZTtcbn07XG5cbnR5cGUgTFhMVF9DYW52YXNSb290RWxlbWVudCA9IEhUTUxEaXZFbGVtZW50O1xuXG50eXBlIExYTFRfVGhyZWVQYWdlX1N0YXRlID0ge1xuICBkb21Mb2FkZWQ6IGJvb2xlYW47XG4gIHdpbmRvd1dpZHRoOiBudW1iZXI7XG4gIHdpbmRvd0hlaWdodDogbnVtYmVyO1xuXG4gIGNhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50O1xuICBjYW52YXNUaGVtZTogTFhMVF9Db2xvclRoZW1lO1xuICBjYW52YXNQYXJlbnQ6IEhUTUxEaXZFbGVtZW50O1xufTtcblxuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG5cbi8qKlxuICpcbiAqIEBuYW1lIFA1V3JhcHBlclxuICogQGRlc2NyaXB0aW9uIER5bmFtaWMgaW1wb3J0IG9mIHRoZSBQNSBsaWJyYXJ5XG4gKlxuICovXG5jb25zdCBQNVdyYXBwZXI6IExYTFRfUDVXcmFwcGVyID0gZHluYW1pYyhpbXBvcnQoXCJyZWFjdC1wNS13cmFwcGVyXCIpLCB7XG4gIGxvYWRpbmc6ICgpID0+IDw+PC8+LFxuICBzc3I6IGZhbHNlLFxufSk7XG5cbi8qKlxuICpcbiAqIEBuYW1lIFRocmVlUGFnZVdpdGhDb250ZXh0XG4gKlxuICovXG5jbGFzcyBUaHJlZVBhZ2VXaXRoQ29udGV4dCBleHRlbmRzIENvbXBvbmVudDxcbiAgTFhMVF9UaHJlZVBhZ2UsXG4gIExYTFRfVGhyZWVQYWdlX1N0YXRlXG4+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IExYTFRfVGhyZWVQYWdlKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRvbUxvYWRlZDogZmFsc2UsXG4gICAgICB3aW5kb3dXaWR0aDogMCxcbiAgICAgIHdpbmRvd0hlaWdodDogMCxcblxuICAgICAgY2FudmFzRWxlbWVudDogdW5kZWZpbmVkLFxuICAgICAgY2FudmFzVGhlbWU6IHVuZGVmaW5lZCxcbiAgICAgIGNhbnZhc1BhcmVudDogdW5kZWZpbmVkLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQG5hbWUgY2FudmFzUGFyZW50UmVmXG4gICAqIEBkZXNjcmlwdGlvbiBPdXIgcmVmIGZvciBvdXIgVGhyZWUuanMgY29udGFpbmVyXG4gICAqXG4gICAqL1xuICBwcml2YXRlIGNhbnZhc1BhcmVudFJlZjogTFhMVF9DYW52YXNSb290RWxlbWVudDtcblxuICAvKipcbiAgICpcbiAgICogQG5hbWUgY29tcG9uZW50RGlkTW91bnQoKVxuICAgKiBAZGVzY3JpcHRpb24gTGlmZWN5Y2xlIHRvIHN0YXJ0IHVzaW5nIHRoZSB3aW5kb3cgJiBkb2N1bWVudFxuICAgKlxuICAgKi9cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB3aW5kb3dXaWR0aDogd2luZG93LmlubmVyV2lkdGggLSA4MCxcbiAgICAgICAgd2luZG93SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSA4MCxcbiAgICAgICAgZG9tTG9hZGVkOiB0cnVlLFxuXG4gICAgICAgIGNhbnZhc0VsZW1lbnQ6IHVuZGVmaW5lZCxcbiAgICAgICAgY2FudmFzVGhlbWU6IHRoaXMucHJvcHMuY29sb3JUaGVtZUNvbnRleHQsXG4gICAgICAgIGNhbnZhc1BhcmVudDogdGhpcy5jYW52YXNQYXJlbnRSZWYsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IExYTFRfVGhyZWVQYWdlKSB7XG4gICAgaWYgKG5leHRQcm9wcy5jb2xvclRoZW1lQ29udGV4dCAhPSB0aGlzLnN0YXRlLmNhbnZhc1RoZW1lKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY2FudmFzVGhlbWU6IHRoaXMucHJvcHMuY29sb3JUaGVtZUNvbnRleHQsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQG5hbWUgcmVuZGVyUDUoKVxuICAgKiBAZGVzY3JpcHRpb24gRmlyZSB1cCBwNS5qcyBjYW52YXMgdGhyb3VnaCBhIGR5bmFtaWMgaW1wb3J0XG4gICAqXG4gICAqL1xuICByZW5kZXJQNSA9IChmaWxlbmFtZTogc3RyaW5nKSA9PiB7XG4gICAgX19ERUJVR19fICYmXG4gICAgICBjb25zb2xlLmxvZyhg8J+VkyBJbml0aWFsaXppbmcgcDUgZmlsZSAuLi8uLi9za2V0Y2hlcy9wNS8ke2ZpbGVuYW1lfWApO1xuXG4gICAgX19ERUJVR19fICYmIGNvbnNvbGUubG9nKGDwn5Go4oCN8J+RpiBQYXJlbnQgY29udGFpbmVyIHJlZjogYCwgdGhpcy5jYW52YXNQYXJlbnRSZWYpO1xuXG4gICAgY29uc3Qgc2tldGNoOiBMWExUX0dMU0xfQ2FudmFzID0gcmVxdWlyZShgLi4vLi4vc2tldGNoZXMvcDUvJHtmaWxlbmFtZX1gKS5kZWZhdWx0KFxuICAgICAgdGhpcy5zdGF0ZS53aW5kb3dXaWR0aCxcbiAgICAgIHRoaXMuc3RhdGUud2luZG93SGVpZ2h0LFxuICAgICAgMSxcbiAgICAgIHRoaXMuc3RhdGUuY2FudmFzVGhlbWUsXG4gICAgICB0aGlzLmNhbnZhc1BhcmVudFJlZlxuICAgICk7XG5cbiAgICByZXR1cm4gPFA1V3JhcHBlciBza2V0Y2g9e3NrZXRjaH0gLz47XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IFRocmVlUGFnZUdsb2JhbFN0eWxlcyA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICAgICAgLyogYm9keSwgaHRtbCB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9ICovXG5cbiAgICAgIC50aHJlZS1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICNwNV9sb2FkaW5nIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgI2RyYXdpbmctY2FudmFzIHtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuXHRcdFx0XHR0b3A6IDBweDtcblx0XHRcdFx0cmlnaHQ6IDBweDtcblx0XHRcdFx0ei1pbmRleDogMzAwMDtcblx0XHRcdFx0Y3Vyc29yOiBjcm9zc2hhaXI7XG5cdFx0XHRcdHRvdWNoLWFjdGlvbjogbm9uZTtcblxuICAgICAgICBkaXNwbGF5OiBub25lO1xuXHRcdFx0fVxuXG4gICAgICBjYW52YXMge1xuICAgICAgICBhbmltYXRpb246ICR7RmFkZUlufSAxcyBlYXNlIDE7XG4gICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICAgICAgfVxuXG4gICAgICAuY2FudmFzLWNvbnRhaW5lciB7XG4gICAgICAgICNkZWZhdWx0Q2FudmFzMCB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZGhhcm1hLWNvbnRhaW5lciB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgYDtcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8VGhyZWVQYWdlR2xvYmFsU3R5bGVzIC8+XG4gICAgICAgIDxJbnRlcmFjdGl2ZUZyYW1lSGVhZGVyIC8+XG5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHJlZj17KGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50KSA9PiAodGhpcy5jYW52YXNQYXJlbnRSZWYgPSBlbGVtZW50KX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJjYW52YXMtY29udGFpbmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIHt0aGlzLnJlbmRlclA1KFwiZGhhcm1hLXdhdGVyLWRpc3RvcnQuY2FudmFzXCIpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IFRocmVlQ2FudmFzUGFnZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHRoZW1lQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoQ29sb3JDb250ZXh0KTtcblxuICByZXR1cm4gPFRocmVlUGFnZVdpdGhDb250ZXh0IGNvbG9yVGhlbWVDb250ZXh0PXt0aGVtZUNvbnRleHR9IC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGhyZWVDYW52YXNQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/projects/water-distort-with-canvas.tsx\n");

/***/ })

})