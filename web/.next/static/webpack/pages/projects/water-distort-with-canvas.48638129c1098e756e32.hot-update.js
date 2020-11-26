webpackHotUpdate_N_E("pages/projects/water-distort-with-canvas",{

/***/ "./pages/projects/water-distort-with-canvas.tsx":
/*!******************************************************!*\
  !*** ./pages/projects/water-distort-with-canvas.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_styles_Animation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants/styles/Animation */ \"./constants/styles/Animation.tsx\");\n/* harmony import */ var _components_interactive_InteractiveFrameHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/_interactive/InteractiveFrameHeader */ \"./components/_interactive/InteractiveFrameHeader/index.tsx\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _constants_site_Settings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../constants/site/Settings */ \"./constants/site/Settings.tsx\");\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/pflaxalt/Repositories/_pfl/web/pages/projects/water-distort-with-canvas.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n      /* body, html {\\n        overflow: hidden;\\n      } */\\n\\n      .three-container {\\n        width: 100vw;\\n        height: 100vh;\\n        overflow: hidden;\\n        display: flex;\\n        justify-content: center;\\n        align-items: center;\\n\\n        #p5_loading {\\n          display: none !important;\\n        }\\n      }\\n\\n      canvas {\\n        animation: \", \" 1s ease 1;\\n        animation-fill-mode: forwards;\\n        animation-iteration-count: 1;\\n      }\\n\\n      .canvas-container {\\n        #defaultCanvas0 {\\n          display: none;\\n        }\\n      }\\n\\n      .dharma-container {\\n        opacity: 1;\\n      }\\n    \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n // import { ThreeCanvas } from \"../../sketches/three/with-canvas-as-texture\";\n\n\n // ______________________________________________________________\n\n// _________________________________________________________________________________\n\n/**\n *\n * @name __CANVAS_FILE__\n * @description The file you want to load\n *\n */\nvar __CANVAS_FILE__ = \"dharma-water-distort.canvas\";\n/**\n *\n * @name P5Wrapper\n * @description Dynamic import of the P5 library\n *\n */\n\nvar P5Wrapper = next_dynamic__WEBPACK_IMPORTED_MODULE_12___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-p5-wrapper */ \"./node_modules/react-p5-wrapper/dist/index.js\", 7));\n}, {\n  loading: function loading() {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null);\n  },\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! react-p5-wrapper */ \"./node_modules/react-p5-wrapper/dist/index.js\")];\n    },\n    modules: [\"react-p5-wrapper\"]\n  }\n});\n/**\n *\n * @name ThreePageWithContext\n *\n */\n\n_c2 = P5Wrapper;\n\nvar ThreePageWithContext = /*#__PURE__*/function (_Component) {\n  Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(ThreePageWithContext, _Component);\n\n  var _super = _createSuper(ThreePageWithContext);\n\n  function ThreePageWithContext(props) {\n    var _this;\n\n    Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, ThreePageWithContext);\n\n    _this = _super.call(this, props);\n\n    Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"canvasParentRef\", void 0);\n\n    Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"renderP5\", function (filename) {\n      if (_this.state.canvasElement === true && document.querySelector(\"#defaultCanvas0\")) {\n        _constants_site_Settings__WEBPACK_IMPORTED_MODULE_13__[\"__DEBUG__\"] && console.log(\"\\uD83D\\uDE0C Canvas Element Exists\", _this.state.canvasElement);\n        return null;\n      } else {\n        _constants_site_Settings__WEBPACK_IMPORTED_MODULE_13__[\"__DEBUG__\"] && console.log(\"\\uD83D\\uDD53 Initializing p5 file ../../sketches/p5/\".concat(filename));\n        _constants_site_Settings__WEBPACK_IMPORTED_MODULE_13__[\"__DEBUG__\"] && console.log(\"\\uD83D\\uDC68\\u200D\\uD83D\\uDC66 Parent container ref: \", _this.canvasParentRef);\n\n        var sketch = __webpack_require__(\"./sketches/p5 sync recursive ^\\\\.\\\\/.*$\")(\"./\".concat(filename))[\"default\"](_this.state.windowWidth, _this.state.windowHeight, 1, _this.state.canvasTheme, _this.state.canvasParent);\n\n        return __jsx(P5Wrapper, {\n          sketch: sketch,\n          __self: Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this),\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 153,\n            columnNumber: 14\n          }\n        });\n      }\n    });\n\n    _this.state = {\n      domLoaded: false,\n      windowWidth: 0,\n      windowHeight: 0,\n      canvasElement: false,\n      canvasTheme: undefined,\n      canvasParent: undefined\n    };\n    _this.renderP5 = _this.renderP5.bind(Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this));\n    return _this;\n  }\n  /**\n   *\n   * @name canvasParentRef\n   * @description Our ref for our Three.js container\n   *\n   */\n\n\n  Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ThreePageWithContext, [{\n    key: \"componentDidMount\",\n\n    /**\n     *\n     * @name componentDidMount()\n     * @description Lifecycle to start using the window & document\n     *\n     */\n    value: function componentDidMount() {\n      if (\"object\") {\n        this.setState({\n          windowWidth: window.innerWidth - 80,\n          windowHeight: window.innerHeight - 80,\n          domLoaded: true,\n          canvasElement: false,\n          canvasTheme: window.laxaltUniversalTheme,\n          canvasParent: this.canvasParentRef\n        }); // window.laxaltUniversalTheme = this.props.colorThemeContext;\n      }\n    } // UNSAFE_componentWillReceiveProps(nextProps: LXLT_ThreePage) {\n    //   if (nextProps.colorThemeContext != this.state.canvasTheme) {\n    //     this.setState({\n    //       canvasTheme: this.state.canvasTheme,\n    //       canvasParent: this.canvasParentRef,\n    //     });\n    //   }\n    // }\n\n    /**\n     *\n     * @name renderP5()\n     * @description Fire up p5.js canvas through a dynamic import\n     *\n     */\n\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      _constants_site_Settings__WEBPACK_IMPORTED_MODULE_13__[\"__DEBUG__\"] && console.log(\"👀 this.state\", this.state);\n      var ThreePageGlobalStyles = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__[\"createGlobalStyle\"])(_templateObject(), _constants_styles_Animation__WEBPACK_IMPORTED_MODULE_10__[\"FadeIn\"]);\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx(ThreePageGlobalStyles, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 197,\n          columnNumber: 9\n        }\n      }), __jsx(_components_interactive_InteractiveFrameHeader__WEBPACK_IMPORTED_MODULE_11__[\"InteractiveFrameHeader\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 198,\n          columnNumber: 9\n        }\n      }), __jsx(\"div\", {\n        ref: function ref(element) {\n          return _this2.canvasParentRef = element;\n        },\n        className: \"canvas-container\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 200,\n          columnNumber: 9\n        }\n      }, this.state.canvasParent ? this.renderP5(__CANVAS_FILE__) : null));\n    }\n  }]);\n\n  return ThreePageWithContext;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]); // export const ThreeCanvasPage: NextPage = () => {\n//   const themeContext = React.useContext(ColorContext);\n//   console.log(\"themeContext: \", themeContext);\n//   return <ThreePageWithContext />;\n// };\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThreePageWithContext);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"P5Wrapper$dynamic\");\n$RefreshReg$(_c2, \"P5Wrapper\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvd2F0ZXItZGlzdG9ydC13aXRoLWNhbnZhcy50c3g/NTY0OCJdLCJuYW1lcyI6WyJfX0NBTlZBU19GSUxFX18iLCJQNVdyYXBwZXIiLCJkeW5hbWljIiwibG9hZGluZyIsInNzciIsIlRocmVlUGFnZVdpdGhDb250ZXh0IiwicHJvcHMiLCJmaWxlbmFtZSIsInN0YXRlIiwiY2FudmFzRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIl9fREVCVUdfXyIsImNvbnNvbGUiLCJsb2ciLCJjYW52YXNQYXJlbnRSZWYiLCJza2V0Y2giLCJyZXF1aXJlIiwid2luZG93V2lkdGgiLCJ3aW5kb3dIZWlnaHQiLCJjYW52YXNUaGVtZSIsImNhbnZhc1BhcmVudCIsImRvbUxvYWRlZCIsInVuZGVmaW5lZCIsInJlbmRlclA1IiwiYmluZCIsInNldFN0YXRlIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwibGF4YWx0VW5pdmVyc2FsVGhlbWUiLCJUaHJlZVBhZ2VHbG9iYWxTdHlsZXMiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIkZhZGVJbiIsImVsZW1lbnQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtDQUlBOztBQU1BO0NBR0E7O0FBd0JBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLGVBQWUsR0FBRyw2QkFBeEI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUMsU0FBeUIsR0FBR0Msb0RBQU87QUFBQSxTQUFDLDJKQUFEO0FBQUEsR0FBNkI7QUFDcEVDLFNBQU8sRUFBRTtBQUFBLFdBQU0sa0VBQU47QUFBQSxHQUQyRDtBQUVwRUMsS0FBRyxFQUFFLEtBRitEO0FBQUE7QUFBQTtBQUFBLGtDQUFyQix1RUFBcUI7QUFB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SUcsS0FBSzFCLEtBQUwsQ0FBV2EsWUFBWCxHQUEwQixLQUFLRyxRQUFMLENBQWN4QixlQUFkLENBQTFCLEdBQTJELElBSjlELENBSkYsQ0FERjtBQWFEOzs7O0VBN0lnQ21DLCtDLEdBZ0puQztBQUNBO0FBRUE7QUFFQTtBQUNBOzs7QUFFZTlCLG1GQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcHJvamVjdHMvd2F0ZXItZGlzdG9ydC13aXRoLWNhbnZhcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBGYWRlSW4gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL3N0eWxlcy9BbmltYXRpb25cIjtcblxuaW1wb3J0IHsgSW50ZXJhY3RpdmVGcmFtZUhlYWRlciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL19pbnRlcmFjdGl2ZS9JbnRlcmFjdGl2ZUZyYW1lSGVhZGVyXCI7XG5cbi8vIGltcG9ydCB7IFRocmVlQ2FudmFzIH0gZnJvbSBcIi4uLy4uL3NrZXRjaGVzL3RocmVlL3dpdGgtY2FudmFzLWFzLXRleHR1cmVcIjtcblxuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgQ29sb3JDb250ZXh0LCBMWExUX0NvbG9yVGhlbWUgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL3N0eWxlcy9Db2xvclwiO1xuaW1wb3J0IHsgTFhMVF9HTFNMX0NhbnZhcyB9IGZyb20gXCIuLi8uLi9za2V0Y2hlcy9wNS9nbHNsXCI7XG5pbXBvcnQgeyBMWExUX1A1V3JhcHBlciB9IGZyb20gXCIuL19zY2FmZm9sZC1wNVwiO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuaW1wb3J0IHsgX19ERUJVR19fIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9zaXRlL1NldHRpbmdzXCI7XG5cbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG5cbnR5cGUgTFhMVF9UaHJlZVBhZ2UgPSB7XG4gIGNvbG9yVGhlbWVDb250ZXh0OiBMWExUX0NvbG9yVGhlbWU7XG59O1xuXG50eXBlIExYTFRfQ2FudmFzUm9vdEVsZW1lbnQgPSBIVE1MRGl2RWxlbWVudDtcblxudHlwZSBMWExUX1RocmVlUGFnZV9TdGF0ZSA9IHtcbiAgZG9tTG9hZGVkOiBib29sZWFuO1xuICB3aW5kb3dXaWR0aDogbnVtYmVyO1xuICB3aW5kb3dIZWlnaHQ6IG51bWJlcjtcblxuICBjYW52YXNFbGVtZW50OiBib29sZWFuO1xuICBjYW52YXNUaGVtZTogTFhMVF9Db2xvclRoZW1lO1xuICBjYW52YXNQYXJlbnQ6IEhUTUxEaXZFbGVtZW50O1xufTtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBsYXhhbHRVbml2ZXJzYWxUaGVtZTogTFhMVF9Db2xvclRoZW1lO1xuICB9XG59XG5cbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuXG4vKipcbiAqXG4gKiBAbmFtZSBfX0NBTlZBU19GSUxFX19cbiAqIEBkZXNjcmlwdGlvbiBUaGUgZmlsZSB5b3Ugd2FudCB0byBsb2FkXG4gKlxuICovXG5jb25zdCBfX0NBTlZBU19GSUxFX18gPSBcImRoYXJtYS13YXRlci1kaXN0b3J0LmNhbnZhc1wiO1xuXG4vKipcbiAqXG4gKiBAbmFtZSBQNVdyYXBwZXJcbiAqIEBkZXNjcmlwdGlvbiBEeW5hbWljIGltcG9ydCBvZiB0aGUgUDUgbGlicmFyeVxuICpcbiAqL1xuY29uc3QgUDVXcmFwcGVyOiBMWExUX1A1V3JhcHBlciA9IGR5bmFtaWMoaW1wb3J0KFwicmVhY3QtcDUtd3JhcHBlclwiKSwge1xuICBsb2FkaW5nOiAoKSA9PiA8PjwvPixcbiAgc3NyOiBmYWxzZSxcbn0pO1xuXG4vKipcbiAqXG4gKiBAbmFtZSBUaHJlZVBhZ2VXaXRoQ29udGV4dFxuICpcbiAqL1xuY2xhc3MgVGhyZWVQYWdlV2l0aENvbnRleHQgZXh0ZW5kcyBDb21wb25lbnQ8XG4gIExYTFRfVGhyZWVQYWdlLFxuICBMWExUX1RocmVlUGFnZV9TdGF0ZVxuPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBMWExUX1RocmVlUGFnZSkge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkb21Mb2FkZWQ6IGZhbHNlLFxuICAgICAgd2luZG93V2lkdGg6IDAsXG4gICAgICB3aW5kb3dIZWlnaHQ6IDAsXG5cbiAgICAgIGNhbnZhc0VsZW1lbnQ6IGZhbHNlLFxuICAgICAgY2FudmFzVGhlbWU6IHVuZGVmaW5lZCxcbiAgICAgIGNhbnZhc1BhcmVudDogdW5kZWZpbmVkLFxuICAgIH07XG5cbiAgICB0aGlzLnJlbmRlclA1ID0gdGhpcy5yZW5kZXJQNS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBuYW1lIGNhbnZhc1BhcmVudFJlZlxuICAgKiBAZGVzY3JpcHRpb24gT3VyIHJlZiBmb3Igb3VyIFRocmVlLmpzIGNvbnRhaW5lclxuICAgKlxuICAgKi9cbiAgcHJpdmF0ZSBjYW52YXNQYXJlbnRSZWY6IExYTFRfQ2FudmFzUm9vdEVsZW1lbnQ7XG5cbiAgLyoqXG4gICAqXG4gICAqIEBuYW1lIGNvbXBvbmVudERpZE1vdW50KClcbiAgICogQGRlc2NyaXB0aW9uIExpZmVjeWNsZSB0byBzdGFydCB1c2luZyB0aGUgd2luZG93ICYgZG9jdW1lbnRcbiAgICpcbiAgICovXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgd2luZG93V2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoIC0gODAsXG4gICAgICAgIHdpbmRvd0hlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gODAsXG4gICAgICAgIGRvbUxvYWRlZDogdHJ1ZSxcblxuICAgICAgICBjYW52YXNFbGVtZW50OiBmYWxzZSxcbiAgICAgICAgY2FudmFzVGhlbWU6IHdpbmRvdy5sYXhhbHRVbml2ZXJzYWxUaGVtZSxcbiAgICAgICAgY2FudmFzUGFyZW50OiB0aGlzLmNhbnZhc1BhcmVudFJlZixcbiAgICAgIH0pO1xuXG4gICAgICAvLyB3aW5kb3cubGF4YWx0VW5pdmVyc2FsVGhlbWUgPSB0aGlzLnByb3BzLmNvbG9yVGhlbWVDb250ZXh0O1xuICAgIH1cbiAgfVxuXG4gIC8vIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogTFhMVF9UaHJlZVBhZ2UpIHtcbiAgLy8gICBpZiAobmV4dFByb3BzLmNvbG9yVGhlbWVDb250ZXh0ICE9IHRoaXMuc3RhdGUuY2FudmFzVGhlbWUpIHtcbiAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xuICAvLyAgICAgICBjYW52YXNUaGVtZTogdGhpcy5zdGF0ZS5jYW52YXNUaGVtZSxcbiAgLy8gICAgICAgY2FudmFzUGFyZW50OiB0aGlzLmNhbnZhc1BhcmVudFJlZixcbiAgLy8gICAgIH0pO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAbmFtZSByZW5kZXJQNSgpXG4gICAqIEBkZXNjcmlwdGlvbiBGaXJlIHVwIHA1LmpzIGNhbnZhcyB0aHJvdWdoIGEgZHluYW1pYyBpbXBvcnRcbiAgICpcbiAgICovXG4gIHJlbmRlclA1ID0gKGZpbGVuYW1lOiBzdHJpbmcpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5jYW52YXNFbGVtZW50ID09PSB0cnVlICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVmYXVsdENhbnZhczBcIikpIHtcbiAgICAgIF9fREVCVUdfXyAmJlxuICAgICAgICBjb25zb2xlLmxvZyhg8J+YjCBDYW52YXMgRWxlbWVudCBFeGlzdHNgLCB0aGlzLnN0YXRlLmNhbnZhc0VsZW1lbnQpO1xuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgX19ERUJVR19fICYmXG4gICAgICAgIGNvbnNvbGUubG9nKGDwn5WTIEluaXRpYWxpemluZyBwNSBmaWxlIC4uLy4uL3NrZXRjaGVzL3A1LyR7ZmlsZW5hbWV9YCk7XG5cbiAgICAgIF9fREVCVUdfXyAmJlxuICAgICAgICBjb25zb2xlLmxvZyhg8J+RqOKAjfCfkaYgUGFyZW50IGNvbnRhaW5lciByZWY6IGAsIHRoaXMuY2FudmFzUGFyZW50UmVmKTtcblxuICAgICAgY29uc3Qgc2tldGNoOiBMWExUX0dMU0xfQ2FudmFzID0gcmVxdWlyZShgLi4vLi4vc2tldGNoZXMvcDUvJHtmaWxlbmFtZX1gKS5kZWZhdWx0KFxuICAgICAgICB0aGlzLnN0YXRlLndpbmRvd1dpZHRoLFxuICAgICAgICB0aGlzLnN0YXRlLndpbmRvd0hlaWdodCxcbiAgICAgICAgMSxcbiAgICAgICAgdGhpcy5zdGF0ZS5jYW52YXNUaGVtZSxcbiAgICAgICAgdGhpcy5zdGF0ZS5jYW52YXNQYXJlbnRcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiA8UDVXcmFwcGVyIHNrZXRjaD17c2tldGNofSAvPjtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIF9fREVCVUdfXyAmJiBjb25zb2xlLmxvZyhcIvCfkYAgdGhpcy5zdGF0ZVwiLCB0aGlzLnN0YXRlKTtcblxuICAgIGNvbnN0IFRocmVlUGFnZUdsb2JhbFN0eWxlcyA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICAgICAgLyogYm9keSwgaHRtbCB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9ICovXG5cbiAgICAgIC50aHJlZS1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICNwNV9sb2FkaW5nIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY2FudmFzIHtcbiAgICAgICAgYW5pbWF0aW9uOiAke0ZhZGVJbn0gMXMgZWFzZSAxO1xuICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgICAgIH1cblxuICAgICAgLmNhbnZhcy1jb250YWluZXIge1xuICAgICAgICAjZGVmYXVsdENhbnZhczAge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmRoYXJtYS1jb250YWluZXIge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgIGA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPFRocmVlUGFnZUdsb2JhbFN0eWxlcyAvPlxuICAgICAgICA8SW50ZXJhY3RpdmVGcmFtZUhlYWRlciAvPlxuXG4gICAgICAgIDxkaXZcbiAgICAgICAgICByZWY9eyhlbGVtZW50OiBIVE1MRGl2RWxlbWVudCkgPT4gKHRoaXMuY2FudmFzUGFyZW50UmVmID0gZWxlbWVudCl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2FudmFzLWNvbnRhaW5lclwiXG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5jYW52YXNQYXJlbnQgPyB0aGlzLnJlbmRlclA1KF9fQ0FOVkFTX0ZJTEVfXykgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cblxuLy8gZXhwb3J0IGNvbnN0IFRocmVlQ2FudmFzUGFnZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4vLyAgIGNvbnN0IHRoZW1lQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoQ29sb3JDb250ZXh0KTtcblxuLy8gICBjb25zb2xlLmxvZyhcInRoZW1lQ29udGV4dDogXCIsIHRoZW1lQ29udGV4dCk7XG5cbi8vICAgcmV0dXJuIDxUaHJlZVBhZ2VXaXRoQ29udGV4dCAvPjtcbi8vIH07XG5cbmV4cG9ydCBkZWZhdWx0IFRocmVlUGFnZVdpdGhDb250ZXh0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/projects/water-distort-with-canvas.tsx\n");

/***/ })

})