webpackHotUpdate_N_E("pages/projects/water-distort-with-canvas",{

/***/ "./pages/projects/water-distort-with-canvas.tsx":
/*!******************************************************!*\
  !*** ./pages/projects/water-distort-with-canvas.tsx ***!
  \******************************************************/
/*! exports provided: ThreeCanvasPage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ThreeCanvasPage\", function() { return ThreeCanvasPage; });\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_styles_Animation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants/styles/Animation */ \"./constants/styles/Animation.tsx\");\n/* harmony import */ var _components_interactive_InteractiveFrameHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/_interactive/InteractiveFrameHeader */ \"./components/_interactive/InteractiveFrameHeader/index.tsx\");\n/* harmony import */ var _constants_styles_Color__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../constants/styles/Color */ \"./constants/styles/Color.tsx\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _constants_site_Settings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../constants/site/Settings */ \"./constants/site/Settings.tsx\");\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/pflaxalt/Repositories/_pfl/web/pages/projects/water-distort-with-canvas.tsx\",\n    _this3 = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n      /* body, html {\\n        overflow: hidden;\\n      } */\\n\\n      .three-container {\\n        width: 100vw;\\n        height: 100vh;\\n        overflow: hidden;\\n        display: flex;\\n        justify-content: center;\\n        align-items: center;\\n\\n        #p5_loading {\\n          display: none !important;\\n        }\\n      }\\n\\n      #drawing-canvas {\\n\\t\\t\\t\\tposition: absolute;\\n\\t\\t\\t\\tbackground-color: #000000;\\n\\t\\t\\t\\ttop: 0px;\\n\\t\\t\\t\\tright: 0px;\\n\\t\\t\\t\\tz-index: 3000;\\n\\t\\t\\t\\tcursor: crosshair;\\n\\t\\t\\t\\ttouch-action: none;\\n\\n        display: none;\\n\\t\\t\\t}\\n\\n      canvas {\\n        animation: \", \" 1s ease 1;\\n        animation-fill-mode: forwards;\\n        animation-iteration-count: 1;\\n      }\\n\\n      .canvas-container {\\n        #defaultCanvas0 {\\n          display: none;\\n        }\\n      }\\n\\n      .dharma-container {\\n        opacity: 1;\\n      }\\n    \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n // import { ThreeCanvas } from \"../../sketches/three/with-canvas-as-texture\";\n\n\n\n // ______________________________________________________________\n\n// _________________________________________________________________________________\n\n/**\n *\n * @name P5Wrapper\n * @description Dynamic import of the P5 library\n *\n */\nvar P5Wrapper = next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-p5-wrapper */ \"./node_modules/react-p5-wrapper/dist/index.js\", 7));\n}, {\n  loading: function loading() {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null);\n  },\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! react-p5-wrapper */ \"./node_modules/react-p5-wrapper/dist/index.js\")];\n    },\n    modules: [\"react-p5-wrapper\"]\n  }\n});\n/**\n *\n * @name ThreePageWithContext\n *\n */\n\n_c2 = P5Wrapper;\n\nvar ThreePageWithContext = /*#__PURE__*/function (_Component) {\n  Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(ThreePageWithContext, _Component);\n\n  var _super = _createSuper(ThreePageWithContext);\n\n  function ThreePageWithContext(props) {\n    var _this;\n\n    Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, ThreePageWithContext);\n\n    _this = _super.call(this, props);\n\n    Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"canvasParentRef\", void 0);\n\n    Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"renderP5\", function (filename) {\n      _constants_site_Settings__WEBPACK_IMPORTED_MODULE_14__[\"__DEBUG__\"] && console.log(\"\\uD83D\\uDD53 Initializing p5 file ../../sketches/p5/\".concat(filename));\n      _constants_site_Settings__WEBPACK_IMPORTED_MODULE_14__[\"__DEBUG__\"] && console.log(\"\\uD83D\\uDC68\\u200D\\uD83D\\uDC66 Parent container ref: \", _this.canvasParentRef);\n\n      if (!_this.state.canvasElement) {\n        var sketch = __webpack_require__(\"./sketches/p5 sync recursive ^\\\\.\\\\/.*$\")(\"./\".concat(filename))[\"default\"](_this.state.windowWidth, _this.state.windowHeight, 1, _this.props.colorThemeContext, _this.state.canvasParent);\n\n        _this.setState({\n          canvasElement: true\n        });\n\n        return __jsx(P5Wrapper, {\n          sketch: sketch,\n          __self: Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this),\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 145,\n            columnNumber: 14\n          }\n        });\n      } else {\n        return null;\n      }\n    });\n\n    _this.state = {\n      domLoaded: false,\n      windowWidth: 0,\n      windowHeight: 0,\n      canvasElement: false,\n      canvasTheme: undefined,\n      canvasParent: undefined\n    };\n    return _this;\n  }\n  /**\n   *\n   * @name canvasParentRef\n   * @description Our ref for our Three.js container\n   *\n   */\n\n\n  Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ThreePageWithContext, [{\n    key: \"componentDidMount\",\n\n    /**\n     *\n     * @name componentDidMount()\n     * @description Lifecycle to start using the window & document\n     *\n     */\n    value: function componentDidMount() {\n      if (\"object\") {\n        this.setState({\n          windowWidth: window.innerWidth - 80,\n          windowHeight: window.innerHeight - 80,\n          domLoaded: true,\n          canvasElement: false,\n          canvasTheme: this.props.colorThemeContext,\n          canvasParent: this.canvasParentRef\n        });\n        window.laxaltUniversalTheme = this.props.colorThemeContext;\n      }\n    }\n  }, {\n    key: \"UNSAFE_componentWillReceiveProps\",\n    value: function UNSAFE_componentWillReceiveProps(nextProps) {\n      if (nextProps.colorThemeContext != this.state.canvasTheme) {\n        this.setState({\n          canvasTheme: this.props.colorThemeContext,\n          canvasParent: this.canvasParentRef\n        });\n      }\n    }\n    /**\n     *\n     * @name renderP5()\n     * @description Fire up p5.js canvas through a dynamic import\n     *\n     */\n\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var ThreePageGlobalStyles = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__[\"createGlobalStyle\"])(_templateObject(), _constants_styles_Animation__WEBPACK_IMPORTED_MODULE_10__[\"FadeIn\"]);\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx(ThreePageGlobalStyles, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 201,\n          columnNumber: 9\n        }\n      }), __jsx(_components_interactive_InteractiveFrameHeader__WEBPACK_IMPORTED_MODULE_11__[\"InteractiveFrameHeader\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 202,\n          columnNumber: 9\n        }\n      }), __jsx(\"div\", {\n        ref: function ref(element) {\n          return _this2.canvasParentRef = element;\n        },\n        className: \"canvas-container\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 204,\n          columnNumber: 9\n        }\n      }, this.state.canvasParent && this.renderP5(\"dharma-water-distort.canvas\")));\n    }\n  }]);\n\n  return ThreePageWithContext;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n\nvar ThreeCanvasPage = function ThreeCanvasPage() {\n  _s();\n\n  var themeContext = react__WEBPACK_IMPORTED_MODULE_8___default.a.useContext(_constants_styles_Color__WEBPACK_IMPORTED_MODULE_12__[\"ColorContext\"]);\n  console.log(\"themeContext: \", themeContext);\n  return __jsx(ThreePageWithContext, {\n    colorThemeContext: themeContext,\n    __self: _this3,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 221,\n      columnNumber: 10\n    }\n  });\n};\n\n_s(ThreeCanvasPage, \"Y26/CnccTa0PRifJ8EfxHm0U6Rk=\");\n\n_c3 = ThreeCanvasPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThreeCanvasPage);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"P5Wrapper$dynamic\");\n$RefreshReg$(_c2, \"P5Wrapper\");\n$RefreshReg$(_c3, \"ThreeCanvasPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvd2F0ZXItZGlzdG9ydC13aXRoLWNhbnZhcy50c3g/NTY0OCJdLCJuYW1lcyI6WyJQNVdyYXBwZXIiLCJkeW5hbWljIiwibG9hZGluZyIsInNzciIsIlRocmVlUGFnZVdpdGhDb250ZXh0IiwicHJvcHMiLCJmaWxlbmFtZSIsIl9fREVCVUdfXyIsImNvbnNvbGUiLCJsb2ciLCJjYW52YXNQYXJlbnRSZWYiLCJzdGF0ZSIsImNhbnZhc0VsZW1lbnQiLCJza2V0Y2giLCJyZXF1aXJlIiwid2luZG93V2lkdGgiLCJ3aW5kb3dIZWlnaHQiLCJjb2xvclRoZW1lQ29udGV4dCIsImNhbnZhc1BhcmVudCIsInNldFN0YXRlIiwiZG9tTG9hZGVkIiwiY2FudmFzVGhlbWUiLCJ1bmRlZmluZWQiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJsYXhhbHRVbml2ZXJzYWxUaGVtZSIsIm5leHRQcm9wcyIsIlRocmVlUGFnZUdsb2JhbFN0eWxlcyIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiRmFkZUluIiwiZWxlbWVudCIsInJlbmRlclA1IiwiQ29tcG9uZW50IiwiVGhyZWVDYW52YXNQYWdlIiwidGhlbWVDb250ZXh0IiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwiQ29sb3JDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7Q0FJQTs7QUFHQTtBQU9BO0NBR0E7O0FBd0JBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLFNBQXlCLEdBQUdDLG9EQUFPO0FBQUEsU0FBQywySkFBRDtBQUFBLEdBQTZCO0FBQ3BFQyxTQUFPLEVBQUU7QUFBQSxXQUFNLGtFQUFOO0FBQUEsR0FEMkQ7QUFFcEVDLEtBQUcsRUFBRSxLQUYrRDtBQUFBO0FBQUE7QUFBQSxrQ0FBckIsdUVBQXFCO0FB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QTtBQUFBLFNBSUcsS0FBS3BCLEtBQUwsQ0FBV08sWUFBWCxJQUNDLEtBQUtjLFFBQUwsQ0FBYyw2QkFBZCxDQUxKLENBSkYsQ0FERjtBQWNEOzs7O0VBdEpnQ0MsK0M7O0FBeUo1QixJQUFNQyxlQUF5QixHQUFHLFNBQTVCQSxlQUE0QixHQUFNO0FBQUE7O0FBQzdDLE1BQU1DLFlBQVksR0FBR0MsNENBQUssQ0FBQ0MsVUFBTixDQUFpQkMscUVBQWpCLENBQXJCO0FBRUE5QixTQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QjBCLFlBQTlCO0FBRUEsU0FBTyxNQUFDLG9CQUFEO0FBQXNCLHFCQUFpQixFQUFFQSxZQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQVA7QUFDRCxDQU5NOztHQUFNRCxlOztNQUFBQSxlO0FBUUVBLDhFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcHJvamVjdHMvd2F0ZXItZGlzdG9ydC13aXRoLWNhbnZhcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBGYWRlSW4gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL3N0eWxlcy9BbmltYXRpb25cIjtcblxuaW1wb3J0IHsgSW50ZXJhY3RpdmVGcmFtZUhlYWRlciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL19pbnRlcmFjdGl2ZS9JbnRlcmFjdGl2ZUZyYW1lSGVhZGVyXCI7XG5cbi8vIGltcG9ydCB7IFRocmVlQ2FudmFzIH0gZnJvbSBcIi4uLy4uL3NrZXRjaGVzL3RocmVlL3dpdGgtY2FudmFzLWFzLXRleHR1cmVcIjtcblxuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHtcbiAgQ29sb3IsXG4gIENvbG9yQ29udGV4dCxcbiAgTFhMVF9Db2xvclRoZW1lLFxufSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL3N0eWxlcy9Db2xvclwiO1xuaW1wb3J0IHsgTFhMVF9HTFNMX0NhbnZhcyB9IGZyb20gXCIuLi8uLi9za2V0Y2hlcy9wNS9nbHNsXCI7XG5pbXBvcnQgeyBMWExUX1A1V3JhcHBlciB9IGZyb20gXCIuL19zY2FmZm9sZC1wNVwiO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuaW1wb3J0IHsgX19ERUJVR19fIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9zaXRlL1NldHRpbmdzXCI7XG5cbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG5cbnR5cGUgTFhMVF9UaHJlZVBhZ2UgPSB7XG4gIGNvbG9yVGhlbWVDb250ZXh0OiBMWExUX0NvbG9yVGhlbWU7XG59O1xuXG50eXBlIExYTFRfQ2FudmFzUm9vdEVsZW1lbnQgPSBIVE1MRGl2RWxlbWVudDtcblxudHlwZSBMWExUX1RocmVlUGFnZV9TdGF0ZSA9IHtcbiAgZG9tTG9hZGVkOiBib29sZWFuO1xuICB3aW5kb3dXaWR0aDogbnVtYmVyO1xuICB3aW5kb3dIZWlnaHQ6IG51bWJlcjtcblxuICBjYW52YXNFbGVtZW50OiBib29sZWFuO1xuICBjYW52YXNUaGVtZTogTFhMVF9Db2xvclRoZW1lO1xuICBjYW52YXNQYXJlbnQ6IEhUTUxEaXZFbGVtZW50O1xufTtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBsYXhhbHRVbml2ZXJzYWxUaGVtZTogTFhMVF9Db2xvclRoZW1lO1xuICB9XG59XG5cbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuXG4vKipcbiAqXG4gKiBAbmFtZSBQNVdyYXBwZXJcbiAqIEBkZXNjcmlwdGlvbiBEeW5hbWljIGltcG9ydCBvZiB0aGUgUDUgbGlicmFyeVxuICpcbiAqL1xuY29uc3QgUDVXcmFwcGVyOiBMWExUX1A1V3JhcHBlciA9IGR5bmFtaWMoaW1wb3J0KFwicmVhY3QtcDUtd3JhcHBlclwiKSwge1xuICBsb2FkaW5nOiAoKSA9PiA8PjwvPixcbiAgc3NyOiBmYWxzZSxcbn0pO1xuXG4vKipcbiAqXG4gKiBAbmFtZSBUaHJlZVBhZ2VXaXRoQ29udGV4dFxuICpcbiAqL1xuY2xhc3MgVGhyZWVQYWdlV2l0aENvbnRleHQgZXh0ZW5kcyBDb21wb25lbnQ8XG4gIExYTFRfVGhyZWVQYWdlLFxuICBMWExUX1RocmVlUGFnZV9TdGF0ZVxuPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBMWExUX1RocmVlUGFnZSkge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkb21Mb2FkZWQ6IGZhbHNlLFxuICAgICAgd2luZG93V2lkdGg6IDAsXG4gICAgICB3aW5kb3dIZWlnaHQ6IDAsXG5cbiAgICAgIGNhbnZhc0VsZW1lbnQ6IGZhbHNlLFxuICAgICAgY2FudmFzVGhlbWU6IHVuZGVmaW5lZCxcbiAgICAgIGNhbnZhc1BhcmVudDogdW5kZWZpbmVkLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQG5hbWUgY2FudmFzUGFyZW50UmVmXG4gICAqIEBkZXNjcmlwdGlvbiBPdXIgcmVmIGZvciBvdXIgVGhyZWUuanMgY29udGFpbmVyXG4gICAqXG4gICAqL1xuICBwcml2YXRlIGNhbnZhc1BhcmVudFJlZjogTFhMVF9DYW52YXNSb290RWxlbWVudDtcblxuICAvKipcbiAgICpcbiAgICogQG5hbWUgY29tcG9uZW50RGlkTW91bnQoKVxuICAgKiBAZGVzY3JpcHRpb24gTGlmZWN5Y2xlIHRvIHN0YXJ0IHVzaW5nIHRoZSB3aW5kb3cgJiBkb2N1bWVudFxuICAgKlxuICAgKi9cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB3aW5kb3dXaWR0aDogd2luZG93LmlubmVyV2lkdGggLSA4MCxcbiAgICAgICAgd2luZG93SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSA4MCxcbiAgICAgICAgZG9tTG9hZGVkOiB0cnVlLFxuXG4gICAgICAgIGNhbnZhc0VsZW1lbnQ6IGZhbHNlLFxuICAgICAgICBjYW52YXNUaGVtZTogdGhpcy5wcm9wcy5jb2xvclRoZW1lQ29udGV4dCxcbiAgICAgICAgY2FudmFzUGFyZW50OiB0aGlzLmNhbnZhc1BhcmVudFJlZixcbiAgICAgIH0pO1xuXG4gICAgICB3aW5kb3cubGF4YWx0VW5pdmVyc2FsVGhlbWUgPSB0aGlzLnByb3BzLmNvbG9yVGhlbWVDb250ZXh0O1xuICAgIH1cbiAgfVxuXG4gIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogTFhMVF9UaHJlZVBhZ2UpIHtcbiAgICBpZiAobmV4dFByb3BzLmNvbG9yVGhlbWVDb250ZXh0ICE9IHRoaXMuc3RhdGUuY2FudmFzVGhlbWUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjYW52YXNUaGVtZTogdGhpcy5wcm9wcy5jb2xvclRoZW1lQ29udGV4dCxcbiAgICAgICAgY2FudmFzUGFyZW50OiB0aGlzLmNhbnZhc1BhcmVudFJlZixcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAbmFtZSByZW5kZXJQNSgpXG4gICAqIEBkZXNjcmlwdGlvbiBGaXJlIHVwIHA1LmpzIGNhbnZhcyB0aHJvdWdoIGEgZHluYW1pYyBpbXBvcnRcbiAgICpcbiAgICovXG4gIHJlbmRlclA1ID0gKGZpbGVuYW1lOiBzdHJpbmcpID0+IHtcbiAgICBfX0RFQlVHX18gJiZcbiAgICAgIGNvbnNvbGUubG9nKGDwn5WTIEluaXRpYWxpemluZyBwNSBmaWxlIC4uLy4uL3NrZXRjaGVzL3A1LyR7ZmlsZW5hbWV9YCk7XG5cbiAgICBfX0RFQlVHX18gJiYgY29uc29sZS5sb2coYPCfkajigI3wn5GmIFBhcmVudCBjb250YWluZXIgcmVmOiBgLCB0aGlzLmNhbnZhc1BhcmVudFJlZik7XG5cbiAgICBpZiAoIXRoaXMuc3RhdGUuY2FudmFzRWxlbWVudCkge1xuICAgICAgY29uc3Qgc2tldGNoOiBMWExUX0dMU0xfQ2FudmFzID0gcmVxdWlyZShgLi4vLi4vc2tldGNoZXMvcDUvJHtmaWxlbmFtZX1gKS5kZWZhdWx0KFxuICAgICAgICB0aGlzLnN0YXRlLndpbmRvd1dpZHRoLFxuICAgICAgICB0aGlzLnN0YXRlLndpbmRvd0hlaWdodCxcbiAgICAgICAgMSxcbiAgICAgICAgdGhpcy5wcm9wcy5jb2xvclRoZW1lQ29udGV4dCxcbiAgICAgICAgdGhpcy5zdGF0ZS5jYW52YXNQYXJlbnRcbiAgICAgICk7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjYW52YXNFbGVtZW50OiB0cnVlLFxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiA8UDVXcmFwcGVyIHNrZXRjaD17c2tldGNofSAvPjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBUaHJlZVBhZ2VHbG9iYWxTdHlsZXMgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbiAgICAgIC8qIGJvZHksIGh0bWwge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfSAqL1xuXG4gICAgICAudGhyZWUtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAjcDVfbG9hZGluZyB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICNkcmF3aW5nLWNhbnZhcyB7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcblx0XHRcdFx0dG9wOiAwcHg7XG5cdFx0XHRcdHJpZ2h0OiAwcHg7XG5cdFx0XHRcdHotaW5kZXg6IDMwMDA7XG5cdFx0XHRcdGN1cnNvcjogY3Jvc3NoYWlyO1xuXHRcdFx0XHR0b3VjaC1hY3Rpb246IG5vbmU7XG5cbiAgICAgICAgZGlzcGxheTogbm9uZTtcblx0XHRcdH1cblxuICAgICAgY2FudmFzIHtcbiAgICAgICAgYW5pbWF0aW9uOiAke0ZhZGVJbn0gMXMgZWFzZSAxO1xuICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgICAgIH1cblxuICAgICAgLmNhbnZhcy1jb250YWluZXIge1xuICAgICAgICAjZGVmYXVsdENhbnZhczAge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmRoYXJtYS1jb250YWluZXIge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgIGA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPFRocmVlUGFnZUdsb2JhbFN0eWxlcyAvPlxuICAgICAgICA8SW50ZXJhY3RpdmVGcmFtZUhlYWRlciAvPlxuXG4gICAgICAgIDxkaXZcbiAgICAgICAgICByZWY9eyhlbGVtZW50OiBIVE1MRGl2RWxlbWVudCkgPT4gKHRoaXMuY2FudmFzUGFyZW50UmVmID0gZWxlbWVudCl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2FudmFzLWNvbnRhaW5lclwiXG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5jYW52YXNQYXJlbnQgJiZcbiAgICAgICAgICAgIHRoaXMucmVuZGVyUDUoXCJkaGFybWEtd2F0ZXItZGlzdG9ydC5jYW52YXNcIil9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgVGhyZWVDYW52YXNQYWdlOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgdGhlbWVDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChDb2xvckNvbnRleHQpO1xuXG4gIGNvbnNvbGUubG9nKFwidGhlbWVDb250ZXh0OiBcIiwgdGhlbWVDb250ZXh0KTtcblxuICByZXR1cm4gPFRocmVlUGFnZVdpdGhDb250ZXh0IGNvbG9yVGhlbWVDb250ZXh0PXt0aGVtZUNvbnRleHR9IC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGhyZWVDYW52YXNQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/projects/water-distort-with-canvas.tsx\n");

/***/ })

})