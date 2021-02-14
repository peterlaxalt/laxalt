webpackHotUpdate_N_E("pages/studio",{

/***/ "./pages/projects/no-distort-with-canvas.tsx":
/*!***************************************************!*\
  !*** ./pages/projects/no-distort-with-canvas.tsx ***!
  \***************************************************/
/*! exports provided: NoDistortCanvasClassName, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NoDistortCanvasClassName\", function() { return NoDistortCanvasClassName; });\n/* harmony import */ var _Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_styles_Animation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../constants/styles/Animation */ \"./constants/styles/Animation.tsx\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _constants_site_Settings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../constants/site/Settings */ \"./constants/site/Settings.tsx\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../constants/Theme */ \"./constants/Theme.tsx\");\n/* harmony import */ var _constants_styles_Base__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../constants/styles/Base */ \"./constants/styles/Base.tsx\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../constants/Root */ \"./constants/Root.tsx\");\n\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/manzanita/Repositories/laxalt/web/pages/projects/no-distort-with-canvas.tsx\";\n\nfunction _templateObject() {\n  var data = Object(_Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n      /* body, html {\\n        overflow: hidden;\\n      } */\\n\\n\\n      canvas {\\n        animation: \", \" 1s ease 1;\\n        animation-fill-mode: forwards;\\n        animation-iteration-count: 1;\\n      }\\n\\n      .\", \" {\\n        height: 100vh;\\n\\n        display: flex;\\n        align-items: center;\\n        justify-content: center;\\n\\n        @media (max-width: \", \") {\\n          height: auto;\\n\\n          margin-top: \", \";\\n\\n          &:first-child {\\n            canvas {\\n              transform: translateY(0%);\\n            }  \\n          }\\n\\n          &:last-child {\\n            canvas {\\n              transform: translateY(-20%);\\n            }  \\n          }\\n        }\\n\\n        canvas {\\n          transform: scale(.85) translate(0%, 2%);\\n          /* transform: scale(.9) translate(0%, 5%); */\\n          /* display: none; */\\n\\n          /* @media (max-width: \", \") { */\\n            /* transform: unset;\\n          } */\\n        }\\n      }\\n\\n      .dharma-container {\\n        opacity: 1;\\n      }\\n    \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n // import { ThreeCanvas } from \"../../sketches/three/with-canvas-as-texture\";\n\n\n\n\n\n // ______________________________________________________________\n\n// _________________________________________________________________________________\nvar NoDistortCanvasClassName = \"no-distort-canvas\";\n/**\n *\n * @name __CANVAS_FILE__\n * @description The file you want to load\n *\n */\n\nvar __CANVAS_FILE__ = \"no-water-distort.canvas.tsx\";\nvar __CANVAS_FILE_L__ = \"no-water-distort-L.canvas.tsx\";\nvar __CANVAS_FILE_S__ = \"no-water-distort-S.canvas.tsx\";\n/**\n *\n * @name P5Wrapper\n * @description Dynamic import of the P5 library\n *\n */\n\nvar P5Wrapper = next_dynamic__WEBPACK_IMPORTED_MODULE_12___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! react-p5-wrapper */ \"./node_modules/react-p5-wrapper/dist/index.js\", 7));\n}, {\n  loading: function loading() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[\"Fragment\"], {}, void 0, false);\n  },\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! react-p5-wrapper */ \"./node_modules/react-p5-wrapper/dist/index.js\")];\n    },\n    modules: [\"react-p5-wrapper\"]\n  }\n});\n/**\n *\n * @name NoWaterDistortCanvas\n *\n */\n\n_c2 = P5Wrapper;\n\nvar NoWaterDistortCanvas = /*#__PURE__*/function (_Component) {\n  Object(_Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(NoWaterDistortCanvas, _Component);\n\n  var _super = _createSuper(NoWaterDistortCanvas);\n\n  function NoWaterDistortCanvas(props) {\n    var _this;\n\n    Object(_Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, NoWaterDistortCanvas);\n\n    _this = _super.call(this, props);\n\n    Object(_Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"canvasParentRef\", void 0);\n\n    Object(_Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"renderP5\", function (filename) {\n      if (_this.state.canvasElement === true && document.querySelector(\"#defaultCanvas1\")) {\n        _constants_site_Settings__WEBPACK_IMPORTED_MODULE_13__[\"__DEBUG__\"] && console.log(\"\\uD83D\\uDE0C Canvas Element Exists\", _this.state.canvasElement);\n        return null;\n      } else {\n        _constants_site_Settings__WEBPACK_IMPORTED_MODULE_13__[\"__DEBUG__\"] && console.log(\"\\uD83D\\uDD53 Initializing p5 file ../../sketches/p5/\".concat(filename));\n        _constants_site_Settings__WEBPACK_IMPORTED_MODULE_13__[\"__DEBUG__\"] && console.log(\"\\uD83D\\uDC68\\u200D\\uD83D\\uDC66 Parent container ref: \", _this.canvasParentRef);\n\n        var sketch = __webpack_require__(\"./sketches/p5 sync recursive ^\\\\.\\\\/.*$\")(\"./\".concat(filename))[\"default\"](_this.state.windowWidth, _this.state.windowHeight, 1, // this.state.canvasTheme,\n        _this.state.canvasParent);\n\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[\"jsxDEV\"])(P5Wrapper, {\n          sketch: sketch\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 163,\n          columnNumber: 14\n        }, Object(_Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this));\n      }\n    });\n\n    _this.state = {\n      domLoaded: false,\n      windowWidth: 0,\n      windowHeight: 0,\n      canvasElement: false,\n      canvasTheme: undefined,\n      canvasParent: undefined\n    };\n    _this.renderP5 = _this.renderP5.bind(Object(_Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this));\n    _this.updateSize = _this.updateSize.bind(Object(_Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this));\n    return _this;\n  }\n  /**\n   *\n   * @name canvasParentRef\n   * @description Our ref for our Three.js container\n   *\n   */\n\n\n  Object(_Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(NoWaterDistortCanvas, [{\n    key: \"componentDidMount\",\n\n    /**\n     *\n     * @name componentDidMount()\n     * @description Lifecycle to start using the window & document\n     *\n     */\n    value: function componentDidMount() {\n      if (\"object\") {\n        this.updateSize();\n        window.addEventListener(\"resize\", this.updateSize);\n      }\n    }\n  }, {\n    key: \"updateSize\",\n    value: function updateSize() {\n      this.setState({\n        windowWidth: window.innerWidth > _constants_styles_Base__WEBPACK_IMPORTED_MODULE_15__[\"Base\"].Media.Width.Md ? window.innerWidth - 80 : window.innerWidth,\n        windowHeight: window.innerWidth > _constants_styles_Base__WEBPACK_IMPORTED_MODULE_15__[\"Base\"].Media.Width.Md ? window.innerHeight - 80 : window.innerHeight / 2,\n        domLoaded: true,\n        canvasElement: false,\n        canvasTheme: window.laxaltUniversalTheme,\n        canvasParent: this.canvasParentRef\n      });\n    }\n    /**\n     *\n     * @name renderP5()\n     * @description Fire up p5.js canvas through a dynamic import\n     *\n     */\n\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      _constants_site_Settings__WEBPACK_IMPORTED_MODULE_13__[\"__DEBUG__\"] && console.log(\"👀 this.state\", this.state);\n      var WaterDistortWithCanvasGlobalStyles = Object(styled_components__WEBPACK_IMPORTED_MODULE_10__[\"createGlobalStyle\"])(_templateObject(), _constants_styles_Animation__WEBPACK_IMPORTED_MODULE_11__[\"FadeIn\"], NoDistortCanvasClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_14__[\"Theme\"].Base.Media.Width.Md, _constants_Root__WEBPACK_IMPORTED_MODULE_16__[\"Root\"].Nav.Size, _constants_Theme__WEBPACK_IMPORTED_MODULE_14__[\"Theme\"].Base.Media.Width.Md);\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[\"Fragment\"], {\n        children: [this.state.windowWidth > _constants_styles_Base__WEBPACK_IMPORTED_MODULE_15__[\"Base\"].Media.Width.Md && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[\"Fragment\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[\"jsxDEV\"])(WaterDistortWithCanvasGlobalStyles, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 227,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[\"jsxDEV\"])(\"div\", {\n            ref: function ref(element) {\n              return _this2.canvasParentRef = element;\n            },\n            className: \"\".concat(NoDistortCanvasClassName),\n            children: this.state.canvasParent ? this.renderP5(__CANVAS_FILE__) : null\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 229,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true), this.state.windowWidth < _constants_styles_Base__WEBPACK_IMPORTED_MODULE_15__[\"Base\"].Media.Width.Md && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[\"Fragment\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[\"jsxDEV\"])(WaterDistortWithCanvasGlobalStyles, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 242,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[\"jsxDEV\"])(\"div\", {\n            ref: function ref(element) {\n              return _this2.canvasParentRef = element;\n            },\n            className: \"\".concat(NoDistortCanvasClassName),\n            children: this.state.canvasParent ? this.renderP5(__CANVAS_FILE_L__) : null\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 244,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[\"jsxDEV\"])(\"div\", {\n            ref: function ref(element) {\n              return _this2.canvasParentRef = element;\n            },\n            className: \"\".concat(NoDistortCanvasClassName),\n            children: this.state.canvasParent ? this.renderP5(__CANVAS_FILE_S__) : null\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 252,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true)]\n      }, void 0, true);\n    }\n  }]);\n\n  return NoWaterDistortCanvas;\n}(react__WEBPACK_IMPORTED_MODULE_9__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NoWaterDistortCanvas);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"P5Wrapper$dynamic\");\n$RefreshReg$(_c2, \"P5Wrapper\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvbm8tZGlzdG9ydC13aXRoLWNhbnZhcy50c3g/ODIwZCJdLCJuYW1lcyI6WyJOb0Rpc3RvcnRDYW52YXNDbGFzc05hbWUiLCJfX0NBTlZBU19GSUxFX18iLCJfX0NBTlZBU19GSUxFX0xfXyIsIl9fQ0FOVkFTX0ZJTEVfU19fIiwiUDVXcmFwcGVyIiwiZHluYW1pYyIsImxvYWRpbmciLCJzc3IiLCJOb1dhdGVyRGlzdG9ydENhbnZhcyIsInByb3BzIiwiZmlsZW5hbWUiLCJzdGF0ZSIsImNhbnZhc0VsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJfX0RFQlVHX18iLCJjb25zb2xlIiwibG9nIiwiY2FudmFzUGFyZW50UmVmIiwic2tldGNoIiwicmVxdWlyZSIsIndpbmRvd1dpZHRoIiwid2luZG93SGVpZ2h0IiwiY2FudmFzUGFyZW50IiwiZG9tTG9hZGVkIiwiY2FudmFzVGhlbWUiLCJ1bmRlZmluZWQiLCJyZW5kZXJQNSIsImJpbmQiLCJ1cGRhdGVTaXplIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldFN0YXRlIiwiaW5uZXJXaWR0aCIsIkJhc2UiLCJNZWRpYSIsIldpZHRoIiwiTWQiLCJpbm5lckhlaWdodCIsImxheGFsdFVuaXZlcnNhbFRoZW1lIiwiV2F0ZXJEaXN0b3J0V2l0aENhbnZhc0dsb2JhbFN0eWxlcyIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiRmFkZUluIiwiVGhlbWUiLCJSb290IiwiTmF2IiwiU2l6ZSIsImVsZW1lbnQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7Q0FHQTs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQXdCQTtBQUVPLElBQU1BLHdCQUF3QixHQUFHLG1CQUFqQztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFD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QUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBR0U7QUFDRSxlQUFHLEVBQUUsYUFBQ1UsT0FBRDtBQUFBLHFCQUNGLE1BQUksQ0FBQzdCLGVBQUwsR0FBdUI2QixPQURyQjtBQUFBLGFBRFA7QUFJRSxxQkFBUyxZQUFLL0Msd0JBQUwsQ0FKWDtBQUFBLHNCQU1HLEtBQUtXLEtBQUwsQ0FBV1ksWUFBWCxHQUEwQixLQUFLSSxRQUFMLENBQWN6QixpQkFBZCxDQUExQixHQUE2RDtBQU5oRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGLGVBV0U7QUFDRSxlQUFHLEVBQUUsYUFBQzZDLE9BQUQ7QUFBQSxxQkFDRixNQUFJLENBQUM3QixlQUFMLEdBQXVCNkIsT0FEckI7QUFBQSxhQURQO0FBSUUscUJBQVMsWUFBSy9DLHdCQUFMLENBSlg7QUFBQSxzQkFNRyxLQUFLVyxLQUFMLENBQVdZLFlBQVgsR0FBMEIsS0FBS0ksUUFBTCxDQUFjeEIsaUJBQWQsQ0FBMUIsR0FBNkQ7QUFOaEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFYRjtBQUFBLHdCQWpCSjtBQUFBLHNCQURGO0FBeUNEOzs7O0VBaE1nQzZDLCtDOztBQW1NcEJ4QyxtRkFBZiIsImZpbGUiOiIuL3BhZ2VzL3Byb2plY3RzL25vLWRpc3RvcnQtd2l0aC1jYW52YXMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgRmFkZUluIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9zdHlsZXMvQW5pbWF0aW9uXCI7XG5cbi8vIGltcG9ydCB7IFRocmVlQ2FudmFzIH0gZnJvbSBcIi4uLy4uL3NrZXRjaGVzL3RocmVlL3dpdGgtY2FudmFzLWFzLXRleHR1cmVcIjtcblxuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgTFhMVF9Db2xvclRoZW1lIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9zdHlsZXMvQ29sb3JcIjtcbmltcG9ydCB7IExYTFRfR0xTTF9DYW52YXMgfSBmcm9tIFwiLi4vLi4vc2tldGNoZXMvcDUvZ2xzbFwiO1xuaW1wb3J0IHsgTFhMVF9QNVdyYXBwZXIgfSBmcm9tIFwiLi9fc2NhZmZvbGQtcDVcIjtcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcbmltcG9ydCB7IF9fREVCVUdfXyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvc2l0ZS9TZXR0aW5nc1wiO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL1RoZW1lXCI7XG5pbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9zdHlsZXMvQmFzZVwiO1xuaW1wb3J0IHsgUm9vdCB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvUm9vdFwiO1xuXG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuXG50eXBlIExYTFRfVGhyZWVQYWdlID0gTmV4dFBhZ2UgJiB7XG4gIC8vIGNvbG9yVGhlbWVDb250ZXh0OiBMWExUX0NvbG9yVGhlbWU7XG59O1xuXG50eXBlIExYTFRfQ2FudmFzUm9vdEVsZW1lbnQgPSBIVE1MRGl2RWxlbWVudDtcblxudHlwZSBMWExUX1RocmVlUGFnZV9TdGF0ZSA9IHtcbiAgZG9tTG9hZGVkOiBib29sZWFuO1xuICB3aW5kb3dXaWR0aDogbnVtYmVyO1xuICB3aW5kb3dIZWlnaHQ6IG51bWJlcjtcblxuICBjYW52YXNFbGVtZW50OiBib29sZWFuO1xuICBjYW52YXNUaGVtZTogTFhMVF9Db2xvclRoZW1lO1xuICBjYW52YXNQYXJlbnQ6IEhUTUxEaXZFbGVtZW50O1xufTtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBsYXhhbHRVbml2ZXJzYWxUaGVtZTogTFhMVF9Db2xvclRoZW1lO1xuICB9XG59XG5cbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuXG5leHBvcnQgY29uc3QgTm9EaXN0b3J0Q2FudmFzQ2xhc3NOYW1lID0gXCJuby1kaXN0b3J0LWNhbnZhc1wiO1xuXG4vKipcbiAqXG4gKiBAbmFtZSBfX0NBTlZBU19GSUxFX19cbiAqIEBkZXNjcmlwdGlvbiBUaGUgZmlsZSB5b3Ugd2FudCB0byBsb2FkXG4gKlxuICovXG5jb25zdCBfX0NBTlZBU19GSUxFX18gPSBcIm5vLXdhdGVyLWRpc3RvcnQuY2FudmFzLnRzeFwiO1xuY29uc3QgX19DQU5WQVNfRklMRV9MX18gPSBcIm5vLXdhdGVyLWRpc3RvcnQtTC5jYW52YXMudHN4XCI7XG5jb25zdCBfX0NBTlZBU19GSUxFX1NfXyA9IFwibm8td2F0ZXItZGlzdG9ydC1TLmNhbnZhcy50c3hcIjtcblxuLyoqXG4gKlxuICogQG5hbWUgUDVXcmFwcGVyXG4gKiBAZGVzY3JpcHRpb24gRHluYW1pYyBpbXBvcnQgb2YgdGhlIFA1IGxpYnJhcnlcbiAqXG4gKi9cbmNvbnN0IFA1V3JhcHBlcjogTFhMVF9QNVdyYXBwZXIgPSBkeW5hbWljKGltcG9ydChcInJlYWN0LXA1LXdyYXBwZXJcIiksIHtcbiAgbG9hZGluZzogKCkgPT4gPD48Lz4sXG4gIHNzcjogZmFsc2UsXG59KTtcblxuLyoqXG4gKlxuICogQG5hbWUgTm9XYXRlckRpc3RvcnRDYW52YXNcbiAqXG4gKi9cbmNsYXNzIE5vV2F0ZXJEaXN0b3J0Q2FudmFzIGV4dGVuZHMgQ29tcG9uZW50PFxuICBMWExUX1RocmVlUGFnZSxcbiAgTFhMVF9UaHJlZVBhZ2VfU3RhdGVcbj4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogTFhMVF9UaHJlZVBhZ2UpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZG9tTG9hZGVkOiBmYWxzZSxcbiAgICAgIHdpbmRvd1dpZHRoOiAwLFxuICAgICAgd2luZG93SGVpZ2h0OiAwLFxuXG4gICAgICBjYW52YXNFbGVtZW50OiBmYWxzZSxcbiAgICAgIGNhbnZhc1RoZW1lOiB1bmRlZmluZWQsXG4gICAgICBjYW52YXNQYXJlbnQ6IHVuZGVmaW5lZCxcbiAgICB9O1xuXG4gICAgdGhpcy5yZW5kZXJQNSA9IHRoaXMucmVuZGVyUDUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZVNpemUgPSB0aGlzLnVwZGF0ZVNpemUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAbmFtZSBjYW52YXNQYXJlbnRSZWZcbiAgICogQGRlc2NyaXB0aW9uIE91ciByZWYgZm9yIG91ciBUaHJlZS5qcyBjb250YWluZXJcbiAgICpcbiAgICovXG4gIHByaXZhdGUgY2FudmFzUGFyZW50UmVmOiBMWExUX0NhbnZhc1Jvb3RFbGVtZW50O1xuXG4gIC8qKlxuICAgKlxuICAgKiBAbmFtZSBjb21wb25lbnREaWRNb3VudCgpXG4gICAqIEBkZXNjcmlwdGlvbiBMaWZlY3ljbGUgdG8gc3RhcnQgdXNpbmcgdGhlIHdpbmRvdyAmIGRvY3VtZW50XG4gICAqXG4gICAqL1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdykge1xuICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMudXBkYXRlU2l6ZSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlU2l6ZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHdpbmRvd1dpZHRoOlxuICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCA+IEJhc2UuTWVkaWEuV2lkdGguTWRcbiAgICAgICAgICA/IHdpbmRvdy5pbm5lcldpZHRoIC0gODBcbiAgICAgICAgICA6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgd2luZG93SGVpZ2h0OlxuICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCA+IEJhc2UuTWVkaWEuV2lkdGguTWRcbiAgICAgICAgICA/IHdpbmRvdy5pbm5lckhlaWdodCAtIDgwXG4gICAgICAgICAgOiB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyLFxuICAgICAgZG9tTG9hZGVkOiB0cnVlLFxuXG4gICAgICBjYW52YXNFbGVtZW50OiBmYWxzZSxcbiAgICAgIGNhbnZhc1RoZW1lOiB3aW5kb3cubGF4YWx0VW5pdmVyc2FsVGhlbWUsXG4gICAgICBjYW52YXNQYXJlbnQ6IHRoaXMuY2FudmFzUGFyZW50UmVmLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBuYW1lIHJlbmRlclA1KClcbiAgICogQGRlc2NyaXB0aW9uIEZpcmUgdXAgcDUuanMgY2FudmFzIHRocm91Z2ggYSBkeW5hbWljIGltcG9ydFxuICAgKlxuICAgKi9cbiAgcmVuZGVyUDUgPSAoZmlsZW5hbWU6IHN0cmluZykgPT4ge1xuICAgIGlmIChcbiAgICAgIHRoaXMuc3RhdGUuY2FudmFzRWxlbWVudCA9PT0gdHJ1ZSAmJlxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZWZhdWx0Q2FudmFzMVwiKVxuICAgICkge1xuICAgICAgX19ERUJVR19fICYmXG4gICAgICAgIGNvbnNvbGUubG9nKGDwn5iMIENhbnZhcyBFbGVtZW50IEV4aXN0c2AsIHRoaXMuc3RhdGUuY2FudmFzRWxlbWVudCk7XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBfX0RFQlVHX18gJiZcbiAgICAgICAgY29uc29sZS5sb2coYPCflZMgSW5pdGlhbGl6aW5nIHA1IGZpbGUgLi4vLi4vc2tldGNoZXMvcDUvJHtmaWxlbmFtZX1gKTtcblxuICAgICAgX19ERUJVR19fICYmXG4gICAgICAgIGNvbnNvbGUubG9nKGDwn5Go4oCN8J+RpiBQYXJlbnQgY29udGFpbmVyIHJlZjogYCwgdGhpcy5jYW52YXNQYXJlbnRSZWYpO1xuXG4gICAgICBjb25zdCBza2V0Y2g6IExYTFRfR0xTTF9DYW52YXMgPSByZXF1aXJlKGAuLi8uLi9za2V0Y2hlcy9wNS8ke2ZpbGVuYW1lfWApLmRlZmF1bHQoXG4gICAgICAgIHRoaXMuc3RhdGUud2luZG93V2lkdGgsXG4gICAgICAgIHRoaXMuc3RhdGUud2luZG93SGVpZ2h0LFxuICAgICAgICAxLFxuICAgICAgICAvLyB0aGlzLnN0YXRlLmNhbnZhc1RoZW1lLFxuICAgICAgICB0aGlzLnN0YXRlLmNhbnZhc1BhcmVudFxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIDxQNVdyYXBwZXIgc2tldGNoPXtza2V0Y2h9IC8+O1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgX19ERUJVR19fICYmIGNvbnNvbGUubG9nKFwi8J+RgCB0aGlzLnN0YXRlXCIsIHRoaXMuc3RhdGUpO1xuXG4gICAgY29uc3QgV2F0ZXJEaXN0b3J0V2l0aENhbnZhc0dsb2JhbFN0eWxlcyA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICAgICAgLyogYm9keSwgaHRtbCB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9ICovXG5cblxuICAgICAgY2FudmFzIHtcbiAgICAgICAgYW5pbWF0aW9uOiAke0ZhZGVJbn0gMXMgZWFzZSAxO1xuICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgICAgIH1cblxuICAgICAgLiR7Tm9EaXN0b3J0Q2FudmFzQ2xhc3NOYW1lfSB7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG5cbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICR7VGhlbWUuQmFzZS5NZWRpYS5XaWR0aC5NZH0pIHtcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XG5cbiAgICAgICAgICBtYXJnaW4tdG9wOiAke1Jvb3QuTmF2LlNpemV9O1xuXG4gICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBjYW52YXMge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICAgICAgICAgICAgfSAgXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIGNhbnZhcyB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAlKTtcbiAgICAgICAgICAgIH0gIFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNhbnZhcyB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguODUpIHRyYW5zbGF0ZSgwJSwgMiUpO1xuICAgICAgICAgIC8qIHRyYW5zZm9ybTogc2NhbGUoLjkpIHRyYW5zbGF0ZSgwJSwgNSUpOyAqL1xuICAgICAgICAgIC8qIGRpc3BsYXk6IG5vbmU7ICovXG5cbiAgICAgICAgICAvKiBAbWVkaWEgKG1heC13aWR0aDogJHtUaGVtZS5CYXNlLk1lZGlhLldpZHRoLk1kfSkgeyAqL1xuICAgICAgICAgICAgLyogdHJhbnNmb3JtOiB1bnNldDtcbiAgICAgICAgICB9ICovXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmRoYXJtYS1jb250YWluZXIge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgIGA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAge3RoaXMuc3RhdGUud2luZG93V2lkdGggPiBCYXNlLk1lZGlhLldpZHRoLk1kICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPFdhdGVyRGlzdG9ydFdpdGhDYW52YXNHbG9iYWxTdHlsZXMgLz5cblxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICByZWY9eyhlbGVtZW50OiBIVE1MRGl2RWxlbWVudCkgPT5cbiAgICAgICAgICAgICAgICAodGhpcy5jYW52YXNQYXJlbnRSZWYgPSBlbGVtZW50KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Tm9EaXN0b3J0Q2FudmFzQ2xhc3NOYW1lfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNhbnZhc1BhcmVudCA/IHRoaXMucmVuZGVyUDUoX19DQU5WQVNfRklMRV9fKSA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cblxuICAgICAgICB7dGhpcy5zdGF0ZS53aW5kb3dXaWR0aCA8IEJhc2UuTWVkaWEuV2lkdGguTWQgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8V2F0ZXJEaXN0b3J0V2l0aENhbnZhc0dsb2JhbFN0eWxlcyAvPlxuXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHJlZj17KGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50KSA9PlxuICAgICAgICAgICAgICAgICh0aGlzLmNhbnZhc1BhcmVudFJlZiA9IGVsZW1lbnQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtOb0Rpc3RvcnRDYW52YXNDbGFzc05hbWV9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY2FudmFzUGFyZW50ID8gdGhpcy5yZW5kZXJQNShfX0NBTlZBU19GSUxFX0xfXykgOiBudWxsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHJlZj17KGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50KSA9PlxuICAgICAgICAgICAgICAgICh0aGlzLmNhbnZhc1BhcmVudFJlZiA9IGVsZW1lbnQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtOb0Rpc3RvcnRDYW52YXNDbGFzc05hbWV9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY2FudmFzUGFyZW50ID8gdGhpcy5yZW5kZXJQNShfX0NBTlZBU19GSUxFX1NfXykgOiBudWxsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vV2F0ZXJEaXN0b3J0Q2FudmFzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/projects/no-distort-with-canvas.tsx\n");

/***/ })

})