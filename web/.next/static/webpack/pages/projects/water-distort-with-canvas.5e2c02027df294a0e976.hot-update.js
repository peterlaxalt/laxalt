webpackHotUpdate_N_E("pages/projects/water-distort-with-canvas",{

/***/ "./pages/projects/water-distort-with-canvas.tsx":
/*!******************************************************!*\
  !*** ./pages/projects/water-distort-with-canvas.tsx ***!
  \******************************************************/
/*! exports provided: ThreeCanvasPage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ThreeCanvasPage\", function() { return ThreeCanvasPage; });\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_styles_Animation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants/styles/Animation */ \"./constants/styles/Animation.tsx\");\n/* harmony import */ var _components_interactive_InteractiveFrameHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/_interactive/InteractiveFrameHeader */ \"./components/_interactive/InteractiveFrameHeader/index.tsx\");\n/* harmony import */ var _constants_styles_Color__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../constants/styles/Color */ \"./constants/styles/Color.tsx\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _constants_site_Settings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../constants/site/Settings */ \"./constants/site/Settings.tsx\");\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/pflaxalt/Repositories/_pfl/web/pages/projects/water-distort-with-canvas.tsx\",\n    _this3 = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n      /* body, html {\\n        overflow: hidden;\\n      } */\\n\\n      .three-container {\\n        width: 100vw;\\n        height: 100vh;\\n        overflow: hidden;\\n        display: flex;\\n        justify-content: center;\\n        align-items: center;\\n\\n        #p5_loading {\\n          display: none !important;\\n        }\\n      }\\n\\n      canvas {\\n        animation: \", \" 1s ease 1;\\n        animation-fill-mode: forwards;\\n        animation-iteration-count: 1;\\n      }\\n\\n      .canvas-container {\\n        #defaultCanvas0 {\\n          display: none;\\n        }\\n      }\\n\\n      .dharma-container {\\n        opacity: 1;\\n      }\\n    \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n // import { ThreeCanvas } from \"../../sketches/three/with-canvas-as-texture\";\n\n\n\n // ______________________________________________________________\n\n// _________________________________________________________________________________\n\n/**\n *\n * @name P5Wrapper\n * @description Dynamic import of the P5 library\n *\n */\nvar P5Wrapper = next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-p5-wrapper */ \"./node_modules/react-p5-wrapper/dist/index.js\", 7));\n}, {\n  loading: function loading() {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null);\n  },\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! react-p5-wrapper */ \"./node_modules/react-p5-wrapper/dist/index.js\")];\n    },\n    modules: [\"react-p5-wrapper\"]\n  }\n});\n/**\n *\n * @name ThreePageWithContext\n *\n */\n\n_c2 = P5Wrapper;\n\nvar ThreePageWithContext = /*#__PURE__*/function (_Component) {\n  Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(ThreePageWithContext, _Component);\n\n  var _super = _createSuper(ThreePageWithContext);\n\n  function ThreePageWithContext(props) {\n    var _this;\n\n    Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, ThreePageWithContext);\n\n    _this = _super.call(this, props);\n\n    Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"canvasParentRef\", void 0);\n\n    Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"renderP5\", function (filename) {\n      if (_this.state.canvasElement === true) {\n        _constants_site_Settings__WEBPACK_IMPORTED_MODULE_14__[\"__DEBUG__\"] && console.log(\"\\uD83D\\uDE0C Canvas Element Exists\", _this.state.canvasElement);\n        return null;\n      } else {\n        _constants_site_Settings__WEBPACK_IMPORTED_MODULE_14__[\"__DEBUG__\"] && console.log(\"\\uD83D\\uDD53 Initializing p5 file ../../sketches/p5/\".concat(filename));\n        _constants_site_Settings__WEBPACK_IMPORTED_MODULE_14__[\"__DEBUG__\"] && console.log(\"\\uD83D\\uDC68\\u200D\\uD83D\\uDC66 Parent container ref: \", _this.canvasParentRef);\n\n        var sketch = __webpack_require__(\"./sketches/p5 sync recursive ^\\\\.\\\\/.*$\")(\"./\".concat(filename))[\"default\"](_this.state.windowWidth, _this.state.windowHeight, 1, _this.props.colorThemeContext, _this.state.canvasParent);\n\n        _this.setState({\n          canvasElement: true\n        });\n\n        return __jsx(P5Wrapper, {\n          sketch: sketch,\n          __self: Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this),\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 153,\n            columnNumber: 14\n          }\n        });\n      }\n    });\n\n    _this.state = {\n      domLoaded: false,\n      windowWidth: 0,\n      windowHeight: 0,\n      canvasElement: false,\n      canvasTheme: undefined,\n      canvasParent: undefined\n    };\n    _this.renderP5 = _this.renderP5.bind(Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this));\n    return _this;\n  }\n  /**\n   *\n   * @name canvasParentRef\n   * @description Our ref for our Three.js container\n   *\n   */\n\n\n  Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ThreePageWithContext, [{\n    key: \"componentDidMount\",\n\n    /**\n     *\n     * @name componentDidMount()\n     * @description Lifecycle to start using the window & document\n     *\n     */\n    value: function componentDidMount() {\n      if (\"object\") {\n        this.setState({\n          windowWidth: window.innerWidth - 80,\n          windowHeight: window.innerHeight - 80,\n          domLoaded: true,\n          canvasElement: false,\n          canvasTheme: this.props.colorThemeContext,\n          canvasParent: this.canvasParentRef\n        });\n        window.laxaltUniversalTheme = this.props.colorThemeContext;\n      }\n    }\n  }, {\n    key: \"UNSAFE_componentWillReceiveProps\",\n    value: function UNSAFE_componentWillReceiveProps(nextProps) {\n      if (nextProps.colorThemeContext != this.state.canvasTheme) {\n        this.setState({\n          canvasTheme: this.props.colorThemeContext,\n          canvasParent: this.canvasParentRef\n        });\n      }\n    }\n    /**\n     *\n     * @name renderP5()\n     * @description Fire up p5.js canvas through a dynamic import\n     *\n     */\n\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var ThreePageGlobalStyles = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__[\"createGlobalStyle\"])(_templateObject(), _constants_styles_Animation__WEBPACK_IMPORTED_MODULE_10__[\"FadeIn\"]);\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx(ThreePageGlobalStyles, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 195,\n          columnNumber: 9\n        }\n      }), __jsx(_components_interactive_InteractiveFrameHeader__WEBPACK_IMPORTED_MODULE_11__[\"InteractiveFrameHeader\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 196,\n          columnNumber: 9\n        }\n      }), __jsx(\"div\", {\n        ref: function ref(element) {\n          return _this2.canvasParentRef = element;\n        },\n        className: \"canvas-container\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 198,\n          columnNumber: 9\n        }\n      }, this.state.canvasParent && this.renderP5(\"dharma-water-distort.canvas\")));\n    }\n  }]);\n\n  return ThreePageWithContext;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n\nvar ThreeCanvasPage = function ThreeCanvasPage() {\n  _s();\n\n  var themeContext = react__WEBPACK_IMPORTED_MODULE_8___default.a.useContext(_constants_styles_Color__WEBPACK_IMPORTED_MODULE_12__[\"ColorContext\"]);\n  console.log(\"themeContext: \", themeContext);\n  return __jsx(ThreePageWithContext, {\n    colorThemeContext: themeContext,\n    __self: _this3,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 215,\n      columnNumber: 10\n    }\n  });\n};\n\n_s(ThreeCanvasPage, \"Y26/CnccTa0PRifJ8EfxHm0U6Rk=\");\n\n_c3 = ThreeCanvasPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThreeCanvasPage);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"P5Wrapper$dynamic\");\n$RefreshReg$(_c2, \"P5Wrapper\");\n$RefreshReg$(_c3, \"ThreeCanvasPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvd2F0ZXItZGlzdG9ydC13aXRoLWNhbnZhcy50c3g/NTY0OCJdLCJuYW1lcyI6WyJQNVdyYXBwZXIiLCJkeW5hbWljIiwibG9hZGluZyIsInNzciIsIlRocmVlUGFnZVdpdGhDb250ZXh0IiwicHJvcHMiLCJmaWxlbmFtZSIsInN0YXRlIiwiY2FudmFzRWxlbWVudCIsIl9fREVCVUdfXyIsImNvbnNvbGUiLCJsb2ciLCJjYW52YXNQYXJlbnRSZWYiLCJza2V0Y2giLCJyZXF1aXJlIiwid2luZG93V2lkdGgiLCJ3aW5kb3dIZWlnaHQiLCJjb2xvclRoZW1lQ29udGV4dCIsImNhbnZhc1BhcmVudCIsInNldFN0YXRlIiwiZG9tTG9hZGVkIiwiY2FudmFzVGhlbWUiLCJ1bmRlZmluZWQiLCJyZW5kZXJQNSIsImJpbmQiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJsYXhhbHRVbml2ZXJzYWxUaGVtZSIsIm5leHRQcm9wcyIsIlRocmVlUGFnZUdsb2JhbFN0eWxlcyIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiRmFkZUluIiwiZWxlbWVudCIsIkNvbXBvbmVudCIsIlRocmVlQ2FudmFzUGFnZSIsInRoZW1lQ29udGV4dCIsIlJlYWN0IiwidXNlQ29udGV4dCIsIkNvbG9yQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0NBSUE7O0FBR0E7QUFPQTtDQUdBOztBQXdCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxTQUF5QixHQUFHQyxvREFBTztBQUFBLFNBQUMsMkpBQUQ7QUFBQSxHQUE2QjtBQUNwRUMsU0FBTyxFQUFFO0FBQUEsV0FBTSxrRUFBTjtBQUFBLEdBRDJEO0FBRXBFQyxLQUFHLEVBQUUsS0FGK0Q7QUFBQTtBQUFBO0FBQUEsa0NBQXJCLHVF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QUlFO0FBQ0UsV0FBRyxFQUFFLGFBQUNDLE9BQUQ7QUFBQSxpQkFBOEIsTUFBSSxDQUFDckIsZUFBTCxHQUF1QnFCLE9BQXJEO0FBQUEsU0FEUDtBQUVFLGlCQUFTLEVBQUMsa0JBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUlHLEtBQUsxQixLQUFMLENBQVdXLFlBQVgsSUFDQyxLQUFLSyxRQUFMLENBQWMsNkJBQWQsQ0FMSixDQUpGLENBREY7QUFjRDs7OztFQWhKZ0NXLCtDOztBQW1KNUIsSUFBTUMsZUFBeUIsR0FBRyxTQUE1QkEsZUFBNEIsR0FBTTtBQUFBOztBQUM3QyxNQUFNQyxZQUFZLEdBQUdDLDRDQUFLLENBQUNDLFVBQU4sQ0FBaUJDLHFFQUFqQixDQUFyQjtBQUVBN0IsU0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVosRUFBOEJ5QixZQUE5QjtBQUVBLFNBQU8sTUFBQyxvQkFBRDtBQUFzQixxQkFBaUIsRUFBRUEsWUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFQO0FBQ0QsQ0FOTTs7R0FBTUQsZTs7TUFBQUEsZTtBQVFFQSw4RUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Byb2plY3RzL3dhdGVyLWRpc3RvcnQtd2l0aC1jYW52YXMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgRmFkZUluIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9zdHlsZXMvQW5pbWF0aW9uXCI7XG5cbmltcG9ydCB7IEludGVyYWN0aXZlRnJhbWVIZWFkZXIgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9faW50ZXJhY3RpdmUvSW50ZXJhY3RpdmVGcmFtZUhlYWRlclwiO1xuXG4vLyBpbXBvcnQgeyBUaHJlZUNhbnZhcyB9IGZyb20gXCIuLi8uLi9za2V0Y2hlcy90aHJlZS93aXRoLWNhbnZhcy1hcy10ZXh0dXJlXCI7XG5cbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7XG4gIENvbG9yLFxuICBDb2xvckNvbnRleHQsXG4gIExYTFRfQ29sb3JUaGVtZSxcbn0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9zdHlsZXMvQ29sb3JcIjtcbmltcG9ydCB7IExYTFRfR0xTTF9DYW52YXMgfSBmcm9tIFwiLi4vLi4vc2tldGNoZXMvcDUvZ2xzbFwiO1xuaW1wb3J0IHsgTFhMVF9QNVdyYXBwZXIgfSBmcm9tIFwiLi9fc2NhZmZvbGQtcDVcIjtcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcbmltcG9ydCB7IF9fREVCVUdfXyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvc2l0ZS9TZXR0aW5nc1wiO1xuXG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuXG50eXBlIExYTFRfVGhyZWVQYWdlID0ge1xuICBjb2xvclRoZW1lQ29udGV4dDogTFhMVF9Db2xvclRoZW1lO1xufTtcblxudHlwZSBMWExUX0NhbnZhc1Jvb3RFbGVtZW50ID0gSFRNTERpdkVsZW1lbnQ7XG5cbnR5cGUgTFhMVF9UaHJlZVBhZ2VfU3RhdGUgPSB7XG4gIGRvbUxvYWRlZDogYm9vbGVhbjtcbiAgd2luZG93V2lkdGg6IG51bWJlcjtcbiAgd2luZG93SGVpZ2h0OiBudW1iZXI7XG5cbiAgY2FudmFzRWxlbWVudDogYm9vbGVhbjtcbiAgY2FudmFzVGhlbWU6IExYTFRfQ29sb3JUaGVtZTtcbiAgY2FudmFzUGFyZW50OiBIVE1MRGl2RWxlbWVudDtcbn07XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgbGF4YWx0VW5pdmVyc2FsVGhlbWU6IExYTFRfQ29sb3JUaGVtZTtcbiAgfVxufVxuXG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cblxuLyoqXG4gKlxuICogQG5hbWUgUDVXcmFwcGVyXG4gKiBAZGVzY3JpcHRpb24gRHluYW1pYyBpbXBvcnQgb2YgdGhlIFA1IGxpYnJhcnlcbiAqXG4gKi9cbmNvbnN0IFA1V3JhcHBlcjogTFhMVF9QNVdyYXBwZXIgPSBkeW5hbWljKGltcG9ydChcInJlYWN0LXA1LXdyYXBwZXJcIiksIHtcbiAgbG9hZGluZzogKCkgPT4gPD48Lz4sXG4gIHNzcjogZmFsc2UsXG59KTtcblxuLyoqXG4gKlxuICogQG5hbWUgVGhyZWVQYWdlV2l0aENvbnRleHRcbiAqXG4gKi9cbmNsYXNzIFRocmVlUGFnZVdpdGhDb250ZXh0IGV4dGVuZHMgQ29tcG9uZW50PFxuICBMWExUX1RocmVlUGFnZSxcbiAgTFhMVF9UaHJlZVBhZ2VfU3RhdGVcbj4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogTFhMVF9UaHJlZVBhZ2UpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZG9tTG9hZGVkOiBmYWxzZSxcbiAgICAgIHdpbmRvd1dpZHRoOiAwLFxuICAgICAgd2luZG93SGVpZ2h0OiAwLFxuXG4gICAgICBjYW52YXNFbGVtZW50OiBmYWxzZSxcbiAgICAgIGNhbnZhc1RoZW1lOiB1bmRlZmluZWQsXG4gICAgICBjYW52YXNQYXJlbnQ6IHVuZGVmaW5lZCxcbiAgICB9O1xuXG4gICAgdGhpcy5yZW5kZXJQNSA9IHRoaXMucmVuZGVyUDUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAbmFtZSBjYW52YXNQYXJlbnRSZWZcbiAgICogQGRlc2NyaXB0aW9uIE91ciByZWYgZm9yIG91ciBUaHJlZS5qcyBjb250YWluZXJcbiAgICpcbiAgICovXG4gIHByaXZhdGUgY2FudmFzUGFyZW50UmVmOiBMWExUX0NhbnZhc1Jvb3RFbGVtZW50O1xuXG4gIC8qKlxuICAgKlxuICAgKiBAbmFtZSBjb21wb25lbnREaWRNb3VudCgpXG4gICAqIEBkZXNjcmlwdGlvbiBMaWZlY3ljbGUgdG8gc3RhcnQgdXNpbmcgdGhlIHdpbmRvdyAmIGRvY3VtZW50XG4gICAqXG4gICAqL1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHdpbmRvd1dpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCAtIDgwLFxuICAgICAgICB3aW5kb3dIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDgwLFxuICAgICAgICBkb21Mb2FkZWQ6IHRydWUsXG5cbiAgICAgICAgY2FudmFzRWxlbWVudDogZmFsc2UsXG4gICAgICAgIGNhbnZhc1RoZW1lOiB0aGlzLnByb3BzLmNvbG9yVGhlbWVDb250ZXh0LFxuICAgICAgICBjYW52YXNQYXJlbnQ6IHRoaXMuY2FudmFzUGFyZW50UmVmLFxuICAgICAgfSk7XG5cbiAgICAgIHdpbmRvdy5sYXhhbHRVbml2ZXJzYWxUaGVtZSA9IHRoaXMucHJvcHMuY29sb3JUaGVtZUNvbnRleHQ7XG4gICAgfVxuICB9XG5cbiAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBMWExUX1RocmVlUGFnZSkge1xuICAgIGlmIChuZXh0UHJvcHMuY29sb3JUaGVtZUNvbnRleHQgIT0gdGhpcy5zdGF0ZS5jYW52YXNUaGVtZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGNhbnZhc1RoZW1lOiB0aGlzLnByb3BzLmNvbG9yVGhlbWVDb250ZXh0LFxuICAgICAgICBjYW52YXNQYXJlbnQ6IHRoaXMuY2FudmFzUGFyZW50UmVmLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBuYW1lIHJlbmRlclA1KClcbiAgICogQGRlc2NyaXB0aW9uIEZpcmUgdXAgcDUuanMgY2FudmFzIHRocm91Z2ggYSBkeW5hbWljIGltcG9ydFxuICAgKlxuICAgKi9cbiAgcmVuZGVyUDUgPSAoZmlsZW5hbWU6IHN0cmluZykgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLmNhbnZhc0VsZW1lbnQgPT09IHRydWUpIHtcbiAgICAgIF9fREVCVUdfXyAmJlxuICAgICAgICBjb25zb2xlLmxvZyhg8J+YjCBDYW52YXMgRWxlbWVudCBFeGlzdHNgLCB0aGlzLnN0YXRlLmNhbnZhc0VsZW1lbnQpO1xuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgX19ERUJVR19fICYmXG4gICAgICAgIGNvbnNvbGUubG9nKGDwn5WTIEluaXRpYWxpemluZyBwNSBmaWxlIC4uLy4uL3NrZXRjaGVzL3A1LyR7ZmlsZW5hbWV9YCk7XG5cbiAgICAgIF9fREVCVUdfXyAmJlxuICAgICAgICBjb25zb2xlLmxvZyhg8J+RqOKAjfCfkaYgUGFyZW50IGNvbnRhaW5lciByZWY6IGAsIHRoaXMuY2FudmFzUGFyZW50UmVmKTtcblxuICAgICAgY29uc3Qgc2tldGNoOiBMWExUX0dMU0xfQ2FudmFzID0gcmVxdWlyZShgLi4vLi4vc2tldGNoZXMvcDUvJHtmaWxlbmFtZX1gKS5kZWZhdWx0KFxuICAgICAgICB0aGlzLnN0YXRlLndpbmRvd1dpZHRoLFxuICAgICAgICB0aGlzLnN0YXRlLndpbmRvd0hlaWdodCxcbiAgICAgICAgMSxcbiAgICAgICAgdGhpcy5wcm9wcy5jb2xvclRoZW1lQ29udGV4dCxcbiAgICAgICAgdGhpcy5zdGF0ZS5jYW52YXNQYXJlbnRcbiAgICAgICk7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjYW52YXNFbGVtZW50OiB0cnVlLFxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiA8UDVXcmFwcGVyIHNrZXRjaD17c2tldGNofSAvPjtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IFRocmVlUGFnZUdsb2JhbFN0eWxlcyA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICAgICAgLyogYm9keSwgaHRtbCB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9ICovXG5cbiAgICAgIC50aHJlZS1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICNwNV9sb2FkaW5nIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY2FudmFzIHtcbiAgICAgICAgYW5pbWF0aW9uOiAke0ZhZGVJbn0gMXMgZWFzZSAxO1xuICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgICAgIH1cblxuICAgICAgLmNhbnZhcy1jb250YWluZXIge1xuICAgICAgICAjZGVmYXVsdENhbnZhczAge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmRoYXJtYS1jb250YWluZXIge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgIGA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPFRocmVlUGFnZUdsb2JhbFN0eWxlcyAvPlxuICAgICAgICA8SW50ZXJhY3RpdmVGcmFtZUhlYWRlciAvPlxuXG4gICAgICAgIDxkaXZcbiAgICAgICAgICByZWY9eyhlbGVtZW50OiBIVE1MRGl2RWxlbWVudCkgPT4gKHRoaXMuY2FudmFzUGFyZW50UmVmID0gZWxlbWVudCl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2FudmFzLWNvbnRhaW5lclwiXG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5jYW52YXNQYXJlbnQgJiZcbiAgICAgICAgICAgIHRoaXMucmVuZGVyUDUoXCJkaGFybWEtd2F0ZXItZGlzdG9ydC5jYW52YXNcIil9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgVGhyZWVDYW52YXNQYWdlOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgdGhlbWVDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChDb2xvckNvbnRleHQpO1xuXG4gIGNvbnNvbGUubG9nKFwidGhlbWVDb250ZXh0OiBcIiwgdGhlbWVDb250ZXh0KTtcblxuICByZXR1cm4gPFRocmVlUGFnZVdpdGhDb250ZXh0IGNvbG9yVGhlbWVDb250ZXh0PXt0aGVtZUNvbnRleHR9IC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGhyZWVDYW52YXNQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/projects/water-distort-with-canvas.tsx\n");

/***/ })

})