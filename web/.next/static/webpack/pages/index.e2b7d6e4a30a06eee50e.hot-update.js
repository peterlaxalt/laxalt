webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/projects/water-distort-with-canvas.tsx":
/*!******************************************************!*\
  !*** ./pages/projects/water-distort-with-canvas.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_styles_Animation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants/styles/Animation */ \"./constants/styles/Animation.tsx\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _constants_site_Settings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../constants/site/Settings */ \"./constants/site/Settings.tsx\");\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/pflaxalt/Repositories/_pfl/web/pages/projects/water-distort-with-canvas.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n      /* body, html {\\n        overflow: hidden;\\n      } */\\n\\n      .three-container {\\n        width: 100vw;\\n        height: 100vh;\\n        overflow: hidden;\\n        display: flex;\\n        justify-content: center;\\n        align-items: center;\\n\\n        #p5_loading {\\n          display: none !important;\\n        }\\n      }\\n\\n      canvas {\\n        animation: \", \" 1s ease 1;\\n        animation-fill-mode: forwards;\\n        animation-iteration-count: 1;\\n      }\\n\\n      .canvas-container {\\n        #defaultCanvas0 {\\n          display: none;\\n        }\\n      }\\n\\n      .dharma-container {\\n        opacity: 1;\\n      }\\n    \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n // import { ThreeCanvas } from \"../../sketches/three/with-canvas-as-texture\";\n\n\n // ______________________________________________________________\n\n// _________________________________________________________________________________\n\n/**\n *\n * @name __CANVAS_FILE__\n * @description The file you want to load\n *\n */\nvar __CANVAS_FILE__ = \"dharma-water-distort.canvas\";\n/**\n *\n * @name P5Wrapper\n * @description Dynamic import of the P5 library\n *\n */\n\nvar P5Wrapper = next_dynamic__WEBPACK_IMPORTED_MODULE_11___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-p5-wrapper */ \"./node_modules/react-p5-wrapper/dist/index.js\", 7));\n}, {\n  loading: function loading() {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null);\n  },\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! react-p5-wrapper */ \"./node_modules/react-p5-wrapper/dist/index.js\")];\n    },\n    modules: [\"react-p5-wrapper\"]\n  }\n});\n/**\n *\n * @name WaterDistortWithCanvasTexturePage\n *\n */\n\n_c2 = P5Wrapper;\n\nvar WaterDistortWithCanvasTexturePage = /*#__PURE__*/function (_Component) {\n  Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(WaterDistortWithCanvasTexturePage, _Component);\n\n  var _super = _createSuper(WaterDistortWithCanvasTexturePage);\n\n  function WaterDistortWithCanvasTexturePage(props) {\n    var _this;\n\n    Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, WaterDistortWithCanvasTexturePage);\n\n    _this = _super.call(this, props);\n\n    Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"canvasParentRef\", void 0);\n\n    Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"renderP5\", function (filename) {\n      if (_this.state.canvasElement === true && document.querySelector(\"#defaultCanvas0\")) {\n        _constants_site_Settings__WEBPACK_IMPORTED_MODULE_12__[\"__DEBUG__\"] && console.log(\"\\uD83D\\uDE0C Canvas Element Exists\", _this.state.canvasElement);\n        return null;\n      } else {\n        _constants_site_Settings__WEBPACK_IMPORTED_MODULE_12__[\"__DEBUG__\"] && console.log(\"\\uD83D\\uDD53 Initializing p5 file ../../sketches/p5/\".concat(filename));\n        _constants_site_Settings__WEBPACK_IMPORTED_MODULE_12__[\"__DEBUG__\"] && console.log(\"\\uD83D\\uDC68\\u200D\\uD83D\\uDC66 Parent container ref: \", _this.canvasParentRef);\n\n        var sketch = __webpack_require__(\"./sketches/p5 sync recursive ^\\\\.\\\\/.*$\")(\"./\".concat(filename))[\"default\"](_this.state.windowWidth, _this.state.windowHeight, 1, // this.state.canvasTheme,\n        _this.state.canvasParent);\n\n        return __jsx(P5Wrapper, {\n          sketch: sketch,\n          __self: Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this),\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 145,\n            columnNumber: 14\n          }\n        });\n      }\n    });\n\n    _this.state = {\n      domLoaded: false,\n      windowWidth: 0,\n      windowHeight: 0,\n      canvasElement: false,\n      canvasTheme: undefined,\n      canvasParent: undefined\n    };\n    _this.renderP5 = _this.renderP5.bind(Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this));\n    return _this;\n  }\n  /**\n   *\n   * @name canvasParentRef\n   * @description Our ref for our Three.js container\n   *\n   */\n\n\n  Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(WaterDistortWithCanvasTexturePage, [{\n    key: \"componentDidMount\",\n\n    /**\n     *\n     * @name componentDidMount()\n     * @description Lifecycle to start using the window & document\n     *\n     */\n    value: function componentDidMount() {\n      if (\"object\") {\n        this.setState({\n          windowWidth: window.innerWidth - 80,\n          windowHeight: window.innerHeight - 80,\n          domLoaded: true,\n          canvasElement: false,\n          canvasTheme: window.laxaltUniversalTheme,\n          canvasParent: this.canvasParentRef\n        }); // window.laxaltUniversalTheme = this.props.colorThemeContext;\n      }\n    }\n    /**\n     *\n     * @name renderP5()\n     * @description Fire up p5.js canvas through a dynamic import\n     *\n     */\n\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      _constants_site_Settings__WEBPACK_IMPORTED_MODULE_12__[\"__DEBUG__\"] && console.log(\"👀 this.state\", this.state);\n      var WaterDistortWithCanvasGlobalStyles = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__[\"createGlobalStyle\"])(_templateObject(), _constants_styles_Animation__WEBPACK_IMPORTED_MODULE_10__[\"FadeIn\"]);\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx(WaterDistortWithCanvasGlobalStyles, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 189,\n          columnNumber: 9\n        }\n      }), __jsx(\"div\", {\n        ref: function ref(element) {\n          return _this2.canvasParentRef = element;\n        },\n        className: \"canvas-container\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 191,\n          columnNumber: 9\n        }\n      }, this.state.canvasParent ? this.renderP5(__CANVAS_FILE__) : null));\n    }\n  }]);\n\n  return WaterDistortWithCanvasTexturePage;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]); // export const ThreeCanvasPage: NextPage = () => {\n//   const themeContext = React.useContext(ColorContext);\n//   console.log(\"themeContext: \", themeContext);\n//   return <WaterDistortWithCanvasTexturePage />;\n// };\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WaterDistortWithCanvasTexturePage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"P5Wrapper$dynamic\");\n$RefreshReg$(_c2, \"P5Wrapper\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvd2F0ZXItZGlzdG9ydC13aXRoLWNhbnZhcy50c3g/NTY0OCJdLCJuYW1lcyI6WyJfX0NBTlZBU19GSUxFX18iLCJQNVdyYXBwZXIiLCJkeW5hbWljIiwibG9hZGluZyIsInNzciIsIldhdGVyRGlzdG9ydFdpdGhDYW52YXNUZXh0dXJlUGFnZSIsInByb3BzIiwiZmlsZW5hbWUiLCJzdGF0ZSIsImNhbnZhc0VsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJfX0RFQlVHX18iLCJjb25zb2xlIiwibG9nIiwiY2FudmFzUGFyZW50UmVmIiwic2tldGNoIiwicmVxdWlyZSIsIndpbmRvd1dpZHRoIiwid2luZG93SGVpZ2h0IiwiY2FudmFzUGFyZW50IiwiZG9tTG9hZGVkIiwiY2FudmFzVGhlbWUiLCJ1bmRlZmluZWQiLCJyZW5kZXJQNSIsImJpbmQiLCJzZXRTdGF0ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImxheGFsdFVuaXZlcnNhbFRoZW1lIiwiV2F0ZXJEaXN0b3J0V2l0aENhbnZhc0dsb2JhbFN0eWxlcyIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiRmFkZUluIiwiZWxlbWVudCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0NBR0E7O0FBTUE7Q0FHQTs7QUF3QkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsZUFBZSxHQUFHLDZCQUF4QjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQyxTQUF5QixHQUFHQyxvREFBTztBQUFBLFNBQUMsMkpBQUQ7QUFBQSxHQUE2QjtBQUNwRUMsU0FBTyxFQUFFO0FBQUEsV0FBTSxrRUFBTjtBQUFBLEdBRDJEO0FBRXBFQyxLQUFHLEVBQUUsS0FGK0Q7QUFBQTtBQUFBO0FB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eUloRDtBQUNBO0FBRUE7QUFFQTtBQUNBOzs7QUFFZTlCLGdHQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcHJvamVjdHMvd2F0ZXItZGlzdG9ydC13aXRoLWNhbnZhcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBGYWRlSW4gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL3N0eWxlcy9BbmltYXRpb25cIjtcblxuLy8gaW1wb3J0IHsgVGhyZWVDYW52YXMgfSBmcm9tIFwiLi4vLi4vc2tldGNoZXMvdGhyZWUvd2l0aC1jYW52YXMtYXMtdGV4dHVyZVwiO1xuXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBMWExUX0NvbG9yVGhlbWUgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL3N0eWxlcy9Db2xvclwiO1xuaW1wb3J0IHsgTFhMVF9HTFNMX0NhbnZhcyB9IGZyb20gXCIuLi8uLi9za2V0Y2hlcy9wNS9nbHNsXCI7XG5pbXBvcnQgeyBMWExUX1A1V3JhcHBlciB9IGZyb20gXCIuL19zY2FmZm9sZC1wNVwiO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuaW1wb3J0IHsgX19ERUJVR19fIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9zaXRlL1NldHRpbmdzXCI7XG5cbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG5cbnR5cGUgTFhMVF9UaHJlZVBhZ2UgPSBOZXh0UGFnZSAmIHtcbiAgLy8gY29sb3JUaGVtZUNvbnRleHQ6IExYTFRfQ29sb3JUaGVtZTtcbn07XG5cbnR5cGUgTFhMVF9DYW52YXNSb290RWxlbWVudCA9IEhUTUxEaXZFbGVtZW50O1xuXG50eXBlIExYTFRfVGhyZWVQYWdlX1N0YXRlID0ge1xuICBkb21Mb2FkZWQ6IGJvb2xlYW47XG4gIHdpbmRvd1dpZHRoOiBudW1iZXI7XG4gIHdpbmRvd0hlaWdodDogbnVtYmVyO1xuXG4gIGNhbnZhc0VsZW1lbnQ6IGJvb2xlYW47XG4gIGNhbnZhc1RoZW1lOiBMWExUX0NvbG9yVGhlbWU7XG4gIGNhbnZhc1BhcmVudDogSFRNTERpdkVsZW1lbnQ7XG59O1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIGxheGFsdFVuaXZlcnNhbFRoZW1lOiBMWExUX0NvbG9yVGhlbWU7XG4gIH1cbn1cblxuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG5cbi8qKlxuICpcbiAqIEBuYW1lIF9fQ0FOVkFTX0ZJTEVfX1xuICogQGRlc2NyaXB0aW9uIFRoZSBmaWxlIHlvdSB3YW50IHRvIGxvYWRcbiAqXG4gKi9cbmNvbnN0IF9fQ0FOVkFTX0ZJTEVfXyA9IFwiZGhhcm1hLXdhdGVyLWRpc3RvcnQuY2FudmFzXCI7XG5cbi8qKlxuICpcbiAqIEBuYW1lIFA1V3JhcHBlclxuICogQGRlc2NyaXB0aW9uIER5bmFtaWMgaW1wb3J0IG9mIHRoZSBQNSBsaWJyYXJ5XG4gKlxuICovXG5jb25zdCBQNVdyYXBwZXI6IExYTFRfUDVXcmFwcGVyID0gZHluYW1pYyhpbXBvcnQoXCJyZWFjdC1wNS13cmFwcGVyXCIpLCB7XG4gIGxvYWRpbmc6ICgpID0+IDw+PC8+LFxuICBzc3I6IGZhbHNlLFxufSk7XG5cbi8qKlxuICpcbiAqIEBuYW1lIFdhdGVyRGlzdG9ydFdpdGhDYW52YXNUZXh0dXJlUGFnZVxuICpcbiAqL1xuY2xhc3MgV2F0ZXJEaXN0b3J0V2l0aENhbnZhc1RleHR1cmVQYWdlIGV4dGVuZHMgQ29tcG9uZW50PFxuICBMWExUX1RocmVlUGFnZSxcbiAgTFhMVF9UaHJlZVBhZ2VfU3RhdGVcbj4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogTFhMVF9UaHJlZVBhZ2UpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZG9tTG9hZGVkOiBmYWxzZSxcbiAgICAgIHdpbmRvd1dpZHRoOiAwLFxuICAgICAgd2luZG93SGVpZ2h0OiAwLFxuXG4gICAgICBjYW52YXNFbGVtZW50OiBmYWxzZSxcbiAgICAgIGNhbnZhc1RoZW1lOiB1bmRlZmluZWQsXG4gICAgICBjYW52YXNQYXJlbnQ6IHVuZGVmaW5lZCxcbiAgICB9O1xuXG4gICAgdGhpcy5yZW5kZXJQNSA9IHRoaXMucmVuZGVyUDUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAbmFtZSBjYW52YXNQYXJlbnRSZWZcbiAgICogQGRlc2NyaXB0aW9uIE91ciByZWYgZm9yIG91ciBUaHJlZS5qcyBjb250YWluZXJcbiAgICpcbiAgICovXG4gIHByaXZhdGUgY2FudmFzUGFyZW50UmVmOiBMWExUX0NhbnZhc1Jvb3RFbGVtZW50O1xuXG4gIC8qKlxuICAgKlxuICAgKiBAbmFtZSBjb21wb25lbnREaWRNb3VudCgpXG4gICAqIEBkZXNjcmlwdGlvbiBMaWZlY3ljbGUgdG8gc3RhcnQgdXNpbmcgdGhlIHdpbmRvdyAmIGRvY3VtZW50XG4gICAqXG4gICAqL1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHdpbmRvd1dpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCAtIDgwLFxuICAgICAgICB3aW5kb3dIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDgwLFxuICAgICAgICBkb21Mb2FkZWQ6IHRydWUsXG5cbiAgICAgICAgY2FudmFzRWxlbWVudDogZmFsc2UsXG4gICAgICAgIGNhbnZhc1RoZW1lOiB3aW5kb3cubGF4YWx0VW5pdmVyc2FsVGhlbWUsXG4gICAgICAgIGNhbnZhc1BhcmVudDogdGhpcy5jYW52YXNQYXJlbnRSZWYsXG4gICAgICB9KTtcblxuICAgICAgLy8gd2luZG93LmxheGFsdFVuaXZlcnNhbFRoZW1lID0gdGhpcy5wcm9wcy5jb2xvclRoZW1lQ29udGV4dDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQG5hbWUgcmVuZGVyUDUoKVxuICAgKiBAZGVzY3JpcHRpb24gRmlyZSB1cCBwNS5qcyBjYW52YXMgdGhyb3VnaCBhIGR5bmFtaWMgaW1wb3J0XG4gICAqXG4gICAqL1xuICByZW5kZXJQNSA9IChmaWxlbmFtZTogc3RyaW5nKSA9PiB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5zdGF0ZS5jYW52YXNFbGVtZW50ID09PSB0cnVlICYmXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RlZmF1bHRDYW52YXMwXCIpXG4gICAgKSB7XG4gICAgICBfX0RFQlVHX18gJiZcbiAgICAgICAgY29uc29sZS5sb2coYPCfmIwgQ2FudmFzIEVsZW1lbnQgRXhpc3RzYCwgdGhpcy5zdGF0ZS5jYW52YXNFbGVtZW50KTtcblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9fREVCVUdfXyAmJlxuICAgICAgICBjb25zb2xlLmxvZyhg8J+VkyBJbml0aWFsaXppbmcgcDUgZmlsZSAuLi8uLi9za2V0Y2hlcy9wNS8ke2ZpbGVuYW1lfWApO1xuXG4gICAgICBfX0RFQlVHX18gJiZcbiAgICAgICAgY29uc29sZS5sb2coYPCfkajigI3wn5GmIFBhcmVudCBjb250YWluZXIgcmVmOiBgLCB0aGlzLmNhbnZhc1BhcmVudFJlZik7XG5cbiAgICAgIGNvbnN0IHNrZXRjaDogTFhMVF9HTFNMX0NhbnZhcyA9IHJlcXVpcmUoYC4uLy4uL3NrZXRjaGVzL3A1LyR7ZmlsZW5hbWV9YCkuZGVmYXVsdChcbiAgICAgICAgdGhpcy5zdGF0ZS53aW5kb3dXaWR0aCxcbiAgICAgICAgdGhpcy5zdGF0ZS53aW5kb3dIZWlnaHQsXG4gICAgICAgIDEsXG4gICAgICAgIC8vIHRoaXMuc3RhdGUuY2FudmFzVGhlbWUsXG4gICAgICAgIHRoaXMuc3RhdGUuY2FudmFzUGFyZW50XG4gICAgICApO1xuXG4gICAgICByZXR1cm4gPFA1V3JhcHBlciBza2V0Y2g9e3NrZXRjaH0gLz47XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBfX0RFQlVHX18gJiYgY29uc29sZS5sb2coXCLwn5GAIHRoaXMuc3RhdGVcIiwgdGhpcy5zdGF0ZSk7XG5cbiAgICBjb25zdCBXYXRlckRpc3RvcnRXaXRoQ2FudmFzR2xvYmFsU3R5bGVzID0gY3JlYXRlR2xvYmFsU3R5bGVgXG4gICAgICAvKiBib2R5LCBodG1sIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH0gKi9cblxuICAgICAgLnRocmVlLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgI3A1X2xvYWRpbmcge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjYW52YXMge1xuICAgICAgICBhbmltYXRpb246ICR7RmFkZUlufSAxcyBlYXNlIDE7XG4gICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICAgICAgfVxuXG4gICAgICAuY2FudmFzLWNvbnRhaW5lciB7XG4gICAgICAgICNkZWZhdWx0Q2FudmFzMCB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZGhhcm1hLWNvbnRhaW5lciB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgYDtcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8V2F0ZXJEaXN0b3J0V2l0aENhbnZhc0dsb2JhbFN0eWxlcyAvPlxuXG4gICAgICAgIDxkaXZcbiAgICAgICAgICByZWY9eyhlbGVtZW50OiBIVE1MRGl2RWxlbWVudCkgPT4gKHRoaXMuY2FudmFzUGFyZW50UmVmID0gZWxlbWVudCl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2FudmFzLWNvbnRhaW5lclwiXG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5jYW52YXNQYXJlbnQgPyB0aGlzLnJlbmRlclA1KF9fQ0FOVkFTX0ZJTEVfXykgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cblxuLy8gZXhwb3J0IGNvbnN0IFRocmVlQ2FudmFzUGFnZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4vLyAgIGNvbnN0IHRoZW1lQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoQ29sb3JDb250ZXh0KTtcblxuLy8gICBjb25zb2xlLmxvZyhcInRoZW1lQ29udGV4dDogXCIsIHRoZW1lQ29udGV4dCk7XG5cbi8vICAgcmV0dXJuIDxXYXRlckRpc3RvcnRXaXRoQ2FudmFzVGV4dHVyZVBhZ2UgLz47XG4vLyB9O1xuXG5leHBvcnQgZGVmYXVsdCBXYXRlckRpc3RvcnRXaXRoQ2FudmFzVGV4dHVyZVBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/projects/water-distort-with-canvas.tsx\n");

/***/ })

})