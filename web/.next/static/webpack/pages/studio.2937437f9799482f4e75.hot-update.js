webpackHotUpdate_N_E("pages/studio",{

/***/ "./pages/projects/no-distort-with-canvas.tsx":
/*!***************************************************!*\
  !*** ./pages/projects/no-distort-with-canvas.tsx ***!
  \***************************************************/
/*! exports provided: NoDistortCanvasClassName, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NoDistortCanvasClassName\", function() { return NoDistortCanvasClassName; });\n/* harmony import */ var _Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_styles_Animation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../constants/styles/Animation */ \"./constants/styles/Animation.tsx\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _constants_site_Settings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../constants/site/Settings */ \"./constants/site/Settings.tsx\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../constants/Theme */ \"./constants/Theme.tsx\");\n/* harmony import */ var _constants_styles_Base__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../constants/styles/Base */ \"./constants/styles/Base.tsx\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../constants/Root */ \"./constants/Root.tsx\");\n/* harmony import */ var _components_Sections_MarqueeRow__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/Sections/MarqueeRow */ \"./components/Sections/MarqueeRow/index.tsx\");\n\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/manzanita/Repositories/laxalt/web/pages/projects/no-distort-with-canvas.tsx\";\n\nfunction _templateObject() {\n  var data = Object(_Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n      /* body, html {\\n        overflow: hidden;\\n      } */\\n\\n\\n      canvas {\\n        animation: \", \" 1s ease 1;\\n        animation-fill-mode: forwards;\\n        animation-iteration-count: 1;\\n      }\\n\\n      .\", \" {\\n        height: 100vh;\\n\\n        display: flex;\\n        align-items: center;\\n        justify-content: center;\\n\\n        @media (max-width: \", \") {\\n          height: auto;\\n\\n          &:first-child {\\n            margin-top: calc(\", \" * 1.25);\\n\\n            canvas {\\n              transform: translateY(0%);\\n            }  \\n          }\\n\\n          &:last-child {\\n            canvas {\\n              margin-top: calc(\", \" * -4);\\n              /* transform: translateY(-10%); */\\n            }  \\n          }\\n        }\\n\\n        canvas {\\n          transform: scale(.85) translate(0%, 2%);\\n          /* transform: scale(.9) translate(0%, 5%); */\\n          /* display: none; */\\n\\n          /* @media (max-width: \", \") { */\\n            /* transform: unset;\\n          } */\\n        }\\n      }\\n\\n      .dharma-container {\\n        opacity: 1;\\n      }\\n    \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n // import { ThreeCanvas } from \"../../sketches/three/with-canvas-as-texture\";\n\n\n\n\n\n\n // ______________________________________________________________\n\n// _________________________________________________________________________________\nvar NoDistortCanvasClassName = \"no-distort-canvas\";\n/**\n *\n * @name __CANVAS_FILE__\n * @description The file you want to load\n *\n */\n\nvar __CANVAS_FILE__ = \"no-water-distort.canvas.tsx\";\nvar __CANVAS_FILE_L__ = \"no-water-distort-L.canvas.tsx\";\nvar __CANVAS_FILE_S__ = \"no-water-distort-S.canvas.tsx\";\n/**\n *\n * @name P5Wrapper\n * @description Dynamic import of the P5 library\n *\n */\n\nvar P5Wrapper = next_dynamic__WEBPACK_IMPORTED_MODULE_12___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! react-p5-wrapper */ \"./node_modules/react-p5-wrapper/dist/index.js\", 7));\n}, {\n  loading: function loading() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[\"Fragment\"], {}, void 0, false);\n  },\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! react-p5-wrapper */ \"./node_modules/react-p5-wrapper/dist/index.js\")];\n    },\n    modules: [\"react-p5-wrapper\"]\n  }\n});\n/**\n *\n * @name NoWaterDistortCanvas\n *\n */\n\n_c2 = P5Wrapper;\n\nvar NoWaterDistortCanvas = /*#__PURE__*/function (_Component) {\n  Object(_Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(NoWaterDistortCanvas, _Component);\n\n  var _super = _createSuper(NoWaterDistortCanvas);\n\n  function NoWaterDistortCanvas(props) {\n    var _this;\n\n    Object(_Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, NoWaterDistortCanvas);\n\n    _this = _super.call(this, props);\n\n    Object(_Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"canvasParentRef\", void 0);\n\n    Object(_Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"renderP5\", function (filename) {\n      if (_this.state.canvasElement === true && document.querySelector(\"#defaultCanvas1\")) {\n        _constants_site_Settings__WEBPACK_IMPORTED_MODULE_13__[\"__DEBUG__\"] && console.log(\"\\uD83D\\uDE0C Canvas Element Exists\", _this.state.canvasElement);\n        return null;\n      } else {\n        _constants_site_Settings__WEBPACK_IMPORTED_MODULE_13__[\"__DEBUG__\"] && console.log(\"\\uD83D\\uDD53 Initializing p5 file ../../sketches/p5/\".concat(filename));\n        _constants_site_Settings__WEBPACK_IMPORTED_MODULE_13__[\"__DEBUG__\"] && console.log(\"\\uD83D\\uDC68\\u200D\\uD83D\\uDC66 Parent container ref: \", _this.canvasParentRef);\n\n        var sketch = __webpack_require__(\"./sketches/p5 sync recursive ^\\\\.\\\\/.*$\")(\"./\".concat(filename))[\"default\"](_this.state.windowWidth, _this.state.windowHeight, 1, // this.state.canvasTheme,\n        _this.state.canvasParent);\n\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[\"jsxDEV\"])(P5Wrapper, {\n          sketch: sketch\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 164,\n          columnNumber: 14\n        }, Object(_Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this));\n      }\n    });\n\n    _this.state = {\n      domLoaded: false,\n      windowWidth: 0,\n      windowHeight: 0,\n      canvasElement: false,\n      canvasTheme: undefined,\n      canvasParent: undefined\n    };\n    _this.renderP5 = _this.renderP5.bind(Object(_Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this));\n    _this.updateSize = _this.updateSize.bind(Object(_Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this));\n    return _this;\n  }\n  /**\n   *\n   * @name canvasParentRef\n   * @description Our ref for our Three.js container\n   *\n   */\n\n\n  Object(_Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(NoWaterDistortCanvas, [{\n    key: \"componentDidMount\",\n\n    /**\n     *\n     * @name componentDidMount()\n     * @description Lifecycle to start using the window & document\n     *\n     */\n    value: function componentDidMount() {\n      if (\"object\") {\n        this.updateSize();\n        window.addEventListener(\"resize\", this.updateSize);\n      }\n    }\n  }, {\n    key: \"updateSize\",\n    value: function updateSize() {\n      this.setState({\n        windowWidth: window.innerWidth > _constants_styles_Base__WEBPACK_IMPORTED_MODULE_15__[\"Base\"].Media.Width.Md ? window.innerWidth - 80 : window.innerWidth,\n        windowHeight: window.innerWidth > _constants_styles_Base__WEBPACK_IMPORTED_MODULE_15__[\"Base\"].Media.Width.Md ? window.innerHeight - 80 : window.innerHeight / 2,\n        domLoaded: true,\n        canvasElement: false,\n        canvasTheme: window.laxaltUniversalTheme,\n        canvasParent: this.canvasParentRef\n      });\n    }\n    /**\n     *\n     * @name renderP5()\n     * @description Fire up p5.js canvas through a dynamic import\n     *\n     */\n\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      _constants_site_Settings__WEBPACK_IMPORTED_MODULE_13__[\"__DEBUG__\"] && console.log(\"👀 this.state\", this.state);\n      var WaterDistortWithCanvasGlobalStyles = Object(styled_components__WEBPACK_IMPORTED_MODULE_10__[\"createGlobalStyle\"])(_templateObject(), _constants_styles_Animation__WEBPACK_IMPORTED_MODULE_11__[\"FadeIn\"], NoDistortCanvasClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_14__[\"Theme\"].Base.Media.Width.Md, _constants_Root__WEBPACK_IMPORTED_MODULE_16__[\"Root\"].Nav.Size, _constants_Root__WEBPACK_IMPORTED_MODULE_16__[\"Root\"].Size, _constants_Theme__WEBPACK_IMPORTED_MODULE_14__[\"Theme\"].Base.Media.Width.Md);\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[\"Fragment\"], {\n        children: [this.state.windowWidth > _constants_styles_Base__WEBPACK_IMPORTED_MODULE_15__[\"Base\"].Media.Width.Md && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[\"Fragment\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[\"jsxDEV\"])(WaterDistortWithCanvasGlobalStyles, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 229,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[\"jsxDEV\"])(\"div\", {\n            ref: function ref(element) {\n              return _this2.canvasParentRef = element;\n            },\n            className: \"\".concat(NoDistortCanvasClassName),\n            children: this.state.canvasParent ? this.renderP5(__CANVAS_FILE__) : null\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 231,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true), this.state.windowWidth < _constants_styles_Base__WEBPACK_IMPORTED_MODULE_15__[\"Base\"].Media.Width.Md && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[\"Fragment\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[\"jsxDEV\"])(WaterDistortWithCanvasGlobalStyles, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 244,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[\"jsxDEV\"])(\"div\", {\n            ref: function ref(element) {\n              return _this2.canvasParentRef = element;\n            },\n            className: \"\".concat(NoDistortCanvasClassName),\n            children: this.state.canvasParent ? this.renderP5(__CANVAS_FILE_L__) : null\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 246,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[\"jsxDEV\"])(\"div\", {\n            ref: function ref(element) {\n              return _this2.canvasParentRef = element;\n            },\n            className: \"\".concat(NoDistortCanvasClassName),\n            children: this.state.canvasParent ? this.renderP5(__CANVAS_FILE_S__) : null\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 255,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[\"jsxDEV\"])(_components_Sections_MarqueeRow__WEBPACK_IMPORTED_MODULE_17__[\"MarqueeRow\"], {\n            strings: [\"Studio\", \"Design\", \"Code\", \"Artwork\"]\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 264,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true)]\n      }, void 0, true);\n    }\n  }]);\n\n  return NoWaterDistortCanvas;\n}(react__WEBPACK_IMPORTED_MODULE_9__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NoWaterDistortCanvas);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"P5Wrapper$dynamic\");\n$RefreshReg$(_c2, \"P5Wrapper\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvbm8tZGlzdG9ydC13aXRoLWNhbnZhcy50c3g/ODIwZCJdLCJuYW1lcyI6WyJOb0Rpc3RvcnRDYW52YXNDbGFzc05hbWUiLCJfX0NBTlZBU19GSUxFX18iLCJfX0NBTlZBU19GSUxFX0xfXyIsIl9fQ0FOVkFTX0ZJTEVfU19fIiwiUDVXcmFwcGVyIiwiZHluYW1pYyIsImxvYWRpbmciLCJzc3IiLCJOb1dhdGVyRGlzdG9ydENhbnZhcyIsInByb3BzIiwiZmlsZW5hbWUiLCJzdGF0ZSIsImNhbnZhc0VsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJfX0RFQlVHX18iLCJjb25zb2xlIiwibG9nIiwiY2FudmFzUGFyZW50UmVmIiwic2tldGNoIiwicmVxdWlyZSIsIndpbmRvd1dpZHRoIiwid2luZG93SGVpZ2h0IiwiY2FudmFzUGFyZW50IiwiZG9tTG9hZGVkIiwiY2FudmFzVGhlbWUiLCJ1bmRlZmluZWQiLCJyZW5kZXJQNSIsImJpbmQiLCJ1cGRhdGVTaXplIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldFN0YXRlIiwiaW5uZXJXaWR0aCIsIkJhc2UiLCJNZWRpYSIsIldpZHRoIiwiTWQiLCJpbm5lckhlaWdodCIsImxheGFsdFVuaXZlcnNhbFRoZW1lIiwiV2F0ZXJEaXN0b3J0V2l0aENhbnZhc0dsb2JhbFN0eWxlcyIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiRmFkZUluIiwiVGhlbWUiLCJSb290IiwiTmF2IiwiU2l6ZSIsImVsZW1lbnQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0NBR0E7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQXdCQTtBQUVPLElBQU1BLHdCQUF3QixHQUFHLG1CQUFqQztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQyxlQUFlLEdBQUcsNkJBQXhCO0FBQ0EsSUFBTUMsaUJBQWlCLEdBQUcsK0JBQTFCO0FBQ0EsSUFBTUMsaUJBQWlCLEdBQUcsK0JBQTFCO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1DLFNBQXlCLEdBQUdDLG9EQUFPO0FBQUEsU0FBQywySkFBRDtBQUFBLEdBQTZCO0FBQ3BFQyxTQUFPLEVBQUU7QUFBQSx3QkFBTSx1SkFBTjtBQUFBLEdBRDJEO0FBRXBFQyxLQUFHLEVBQUUsS0FGK0Q7QUFBQTtBQUFBO0FBQUEsa0NBQXJCLHVFQUFxQjtBQUFBO0FBQUEsY0FBckIsa0JBQXFCO0FBQUE7QUFBQSxDQUE3QixDQUF6QztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O01BVE1ILFM7O0lBVUFJLG9COzs7OztBQUlKLGdDQUFZQyxLQUFaLEVBQW1DO0FBQUE7O0FBQUE7O0FBQ2pDLDhCQUFNQSxLQUFOOztBQURpQzs7QUFBQSw2VEErRHhCLFVBQUNDLFFBQUQsRUFBc0I7QUFDL0IsVUFDRSxNQUFLQyxLQUFMLENBQVdDLGFBQVgsS0FBNkIsSUFBN0IsSUFDQUMsUUFBUSxDQUFDQyxhQUFULENBQXVCLGlCQUF2QixDQUZGLEVBR0U7QUFDQUMsMkVBQVMsSUFDUEMsT0FBTyxDQUFDQyxHQUFSLHVDQUF3QyxNQUFLTixLQUFMLENBQVdDLGFBQW5ELENBREY7QUFHQSxlQUFPLElBQVA7QUFDRCxPQVJELE1BUU87QUFDTEcsMkVBQVMsSUFDUEMsT0FBTyxDQUFDQyxHQUFSLCtEQUF5RFAsUUFBekQsRUFERjtBQUdBSywyRUFBUyxJQUNQQyxPQUFPLENBQUNDLEdBQVIsMERBQTRDLE1BQUtDLGVBQWpELENBREY7O0FBR0EsWUFBTUMsTUFBd0IsR0FBR0MsK0RBQVEsWUFBcUJWLFFBQXRCLEVBQVAsWUFDL0IsTUFBS0MsS0FBTCxDQUFXVSxXQURvQixFQUUvQixNQUFLVixLQUFMLENBQVdXLFlBRm9CLEVBRy9CLENBSCtCLEVBSS9CO0FBQ0EsY0FBS1gsS0FBTCxDQUFXWSxZQUxvQixDQUFqQzs7QUFRQSw0QkFBTyxxRUFBQyxTQUFEO0FBQVcsZ0JBQU0sRUFBRUo7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSx3S0FBUDtBQUNEO0FBQ0YsS0F6RmtDOztBQUdqQyxVQUFLUixLQUFMLEdBQWE7QUFDWGEsZUFBUyxFQUFFLEtBREE7QUFFWEgsaUJBQVcsRUFBRSxDQUZGO0FBR1hDLGtCQUFZLEVBQUUsQ0FISDtBQUtYVixtQkFBYSxFQUFFLEtBTEo7QUFNWGEsaUJBQVcsRUFBRUMsU0FORjtBQU9YSCxrQkFBWSxFQUFFRztBQVBILEtBQWI7QUFVQSxVQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0MsSUFBZCw4SkFBaEI7QUFDQSxVQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JELElBQWhCLDhKQUFsQjtBQWRpQztBQWVsQztBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBR0U7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO3dDQUNzQjtBQUNsQixvQkFBbUI7QUFDakIsYUFBS0MsVUFBTDtBQUVBQyxjQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLEtBQUtGLFVBQXZDO0FBQ0Q7QUFDRjs7O2lDQUVZO0FBQ1gsV0FBS0csUUFBTCxDQUFjO0FBQ1pYLG1CQUFXLEVBQ1RTLE1BQU0sQ0FBQ0csVUFBUCxHQUFvQkMsNERBQUksQ0FBQ0MsS0FBTCxDQUFXQyxLQUFYLENBQWlCQyxFQUFyQyxHQUNJUCxNQUFNLENBQUNHLFVBQVAsR0FBb0IsRUFEeEIsR0FFSUgsTUFBTSxDQUFDRyxVQUpEO0FBS1pYLG9CQUFZLEVBQ1ZRLE1BQU0sQ0FBQ0csVUFBUCxHQUFvQkMsNERBQUksQ0FBQ0MsS0FBTCxDQUFXQyxLQUFYLENBQWlCQyxFQUFyQyxHQUNJUCxNQUFNLENBQUNRLFdBQVAsR0FBcUIsRUFEekIsR0FFSVIsTUFBTSxDQUFDUSxXQUFQLEdBQXFCLENBUmY7QUFTWmQsaUJBQVMsRUFBRSxJQVRDO0FBV1paLHFCQUFhLEVBQUUsS0FYSDtBQVlaYSxtQkFBVyxFQUFFSyxNQUFNLENBQUNTLG9CQVpSO0FBYVpoQixvQkFBWSxFQUFFLEtBQUtMO0FBYlAsT0FBZDtBQWVEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OzZCQTZCVztBQUFBOztBQUNQSCx5RUFBUyxJQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCLEtBQUtOLEtBQWxDLENBQWI7QUFFQSxVQUFNNkIsa0NBQWtDLEdBQUdDLDRFQUFILG9CQU92QkMsbUVBUHVCLEVBWW5DMUMsd0JBWm1DLEVBbUJmMkMsdURBQUssQ0FBQ1QsSUFBTixDQUFXQyxLQUFYLENBQWlCQyxLQUFqQixDQUF1QkMsRUFuQlIsRUF1QmJPLHFEQUFJLENBQUNDLEdBQUwsQ0FBU0MsSUF2QkksRUFnQ1hGLHFEQUFJLENBQUNFLElBaENNLEVBMkNWSCx1REFBSyxDQUFDVCxJQUFOLENBQVdDLEtBQVgsQ0FBaUJDLEtBQWpCLENBQXVCQyxFQTNDYixDQUF4QztBQXNEQSwwQkFDRTtBQUFBLG1CQUNHLEtBQUsxQixLQUFMLENBQVdVLFdBQVgsR0FBeUJhLDREQUFJLENBQUNDLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkMsRUFBMUMsaUJBQ0M7QUFBQSxrQ0FDRSxxRUFBQyxrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBR0U7QUFDRSxlQUFHLEVBQUUsYUFBQ1UsT0FBRDtBQUFBLHFCQUNGLE1BQUksQ0FBQzdCLGVBQUwsR0FBdUI2QixPQURyQjtBQUFBLGFBRFA7QUFJRSxxQkFBUyxZQUFLL0Msd0JBQUwsQ0FKWDtBQUFBLHNCQU1HLEtBQUtXLEtBQUwsQ0FBV1ksWUFBWCxHQUEwQixLQUFLSSxRQUFMLENBQWMxQixlQUFkLENBQTFCLEdBQTJEO0FBTjlEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEY7QUFBQSx3QkFGSixFQWdCRyxLQUFLVSxLQUFMLENBQVdVLFdBQVgsR0FBeUJhLDREQUFJLENBQUNDLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkMsRUFBMUMsaUJBQ0M7QUFBQSxrQ0FDRSxxRUFBQyxrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBR0U7QUFDRSxlQUFHLEVBQUUsYUFBQ1UsT0FBRDtBQUFBLHFCQUNGLE1BQUksQ0FBQzdCLGVBQUwsR0FBdUI2QixPQURyQjtBQUFBLGFBRFA7QUFJRSxxQkFBUyxZQUFLL0Msd0JBQUwsQ0FKWDtBQUFBLHNCQU1HLEtBQUtXLEtBQUwsQ0FBV1ksWUFBWCxHQUEwQixLQUFLSSxRQUFMLENBQWN6QixpQkFBZCxDQUExQixHQUE2RDtBQU5oRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGLGVBWUU7QUFDRSxlQUFHLEVBQUUsYUFBQzZDLE9BQUQ7QUFBQSxxQkFDRixNQUFJLENBQUM3QixlQUFMLEdBQXVCNkIsT0FEckI7QUFBQSxhQURQO0FBSUUscUJBQVMsWUFBSy9DLHdCQUFMLENBSlg7QUFBQSxzQkFNRyxLQUFLVyxLQUFMLENBQVdZLFlBQVgsR0FBMEIsS0FBS0ksUUFBTCxDQUFjeEIsaUJBQWQsQ0FBMUIsR0FBNkQ7QUFOaEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFaRixlQXFCRSxxRUFBQywyRUFBRDtBQUFZLG1CQUFPLEVBQUUsQ0FBQyxRQUFELEVBQVcsUUFBWCxFQUFxQixNQUFyQixFQUE2QixTQUE3QjtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXJCRjtBQUFBLHdCQWpCSjtBQUFBLHNCQURGO0FBNENEOzs7O0VBcE1nQzZDLCtDOztBQXVNcEJ4QyxtRkFBZiIsImZpbGUiOiIuL3BhZ2VzL3Byb2plY3RzL25vLWRpc3RvcnQtd2l0aC1jYW52YXMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgRmFkZUluIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9zdHlsZXMvQW5pbWF0aW9uXCI7XG5cbi8vIGltcG9ydCB7IFRocmVlQ2FudmFzIH0gZnJvbSBcIi4uLy4uL3NrZXRjaGVzL3RocmVlL3dpdGgtY2FudmFzLWFzLXRleHR1cmVcIjtcblxuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgTFhMVF9Db2xvclRoZW1lIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9zdHlsZXMvQ29sb3JcIjtcbmltcG9ydCB7IExYTFRfR0xTTF9DYW52YXMgfSBmcm9tIFwiLi4vLi4vc2tldGNoZXMvcDUvZ2xzbFwiO1xuaW1wb3J0IHsgTFhMVF9QNVdyYXBwZXIgfSBmcm9tIFwiLi9fc2NhZmZvbGQtcDVcIjtcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcbmltcG9ydCB7IF9fREVCVUdfXyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvc2l0ZS9TZXR0aW5nc1wiO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL1RoZW1lXCI7XG5pbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9zdHlsZXMvQmFzZVwiO1xuaW1wb3J0IHsgUm9vdCB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvUm9vdFwiO1xuaW1wb3J0IHsgTWFycXVlZVJvdyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NlY3Rpb25zL01hcnF1ZWVSb3dcIjtcblxuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cblxudHlwZSBMWExUX1RocmVlUGFnZSA9IE5leHRQYWdlICYge1xuICAvLyBjb2xvclRoZW1lQ29udGV4dDogTFhMVF9Db2xvclRoZW1lO1xufTtcblxudHlwZSBMWExUX0NhbnZhc1Jvb3RFbGVtZW50ID0gSFRNTERpdkVsZW1lbnQ7XG5cbnR5cGUgTFhMVF9UaHJlZVBhZ2VfU3RhdGUgPSB7XG4gIGRvbUxvYWRlZDogYm9vbGVhbjtcbiAgd2luZG93V2lkdGg6IG51bWJlcjtcbiAgd2luZG93SGVpZ2h0OiBudW1iZXI7XG5cbiAgY2FudmFzRWxlbWVudDogYm9vbGVhbjtcbiAgY2FudmFzVGhlbWU6IExYTFRfQ29sb3JUaGVtZTtcbiAgY2FudmFzUGFyZW50OiBIVE1MRGl2RWxlbWVudDtcbn07XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgbGF4YWx0VW5pdmVyc2FsVGhlbWU6IExYTFRfQ29sb3JUaGVtZTtcbiAgfVxufVxuXG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cblxuZXhwb3J0IGNvbnN0IE5vRGlzdG9ydENhbnZhc0NsYXNzTmFtZSA9IFwibm8tZGlzdG9ydC1jYW52YXNcIjtcblxuLyoqXG4gKlxuICogQG5hbWUgX19DQU5WQVNfRklMRV9fXG4gKiBAZGVzY3JpcHRpb24gVGhlIGZpbGUgeW91IHdhbnQgdG8gbG9hZFxuICpcbiAqL1xuY29uc3QgX19DQU5WQVNfRklMRV9fID0gXCJuby13YXRlci1kaXN0b3J0LmNhbnZhcy50c3hcIjtcbmNvbnN0IF9fQ0FOVkFTX0ZJTEVfTF9fID0gXCJuby13YXRlci1kaXN0b3J0LUwuY2FudmFzLnRzeFwiO1xuY29uc3QgX19DQU5WQVNfRklMRV9TX18gPSBcIm5vLXdhdGVyLWRpc3RvcnQtUy5jYW52YXMudHN4XCI7XG5cbi8qKlxuICpcbiAqIEBuYW1lIFA1V3JhcHBlclxuICogQGRlc2NyaXB0aW9uIER5bmFtaWMgaW1wb3J0IG9mIHRoZSBQNSBsaWJyYXJ5XG4gKlxuICovXG5jb25zdCBQNVdyYXBwZXI6IExYTFRfUDVXcmFwcGVyID0gZHluYW1pYyhpbXBvcnQoXCJyZWFjdC1wNS13cmFwcGVyXCIpLCB7XG4gIGxvYWRpbmc6ICgpID0+IDw+PC8+LFxuICBzc3I6IGZhbHNlLFxufSk7XG5cbi8qKlxuICpcbiAqIEBuYW1lIE5vV2F0ZXJEaXN0b3J0Q2FudmFzXG4gKlxuICovXG5jbGFzcyBOb1dhdGVyRGlzdG9ydENhbnZhcyBleHRlbmRzIENvbXBvbmVudDxcbiAgTFhMVF9UaHJlZVBhZ2UsXG4gIExYTFRfVGhyZWVQYWdlX1N0YXRlXG4+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IExYTFRfVGhyZWVQYWdlKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRvbUxvYWRlZDogZmFsc2UsXG4gICAgICB3aW5kb3dXaWR0aDogMCxcbiAgICAgIHdpbmRvd0hlaWdodDogMCxcblxuICAgICAgY2FudmFzRWxlbWVudDogZmFsc2UsXG4gICAgICBjYW52YXNUaGVtZTogdW5kZWZpbmVkLFxuICAgICAgY2FudmFzUGFyZW50OiB1bmRlZmluZWQsXG4gICAgfTtcblxuICAgIHRoaXMucmVuZGVyUDUgPSB0aGlzLnJlbmRlclA1LmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGVTaXplID0gdGhpcy51cGRhdGVTaXplLmJpbmQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQG5hbWUgY2FudmFzUGFyZW50UmVmXG4gICAqIEBkZXNjcmlwdGlvbiBPdXIgcmVmIGZvciBvdXIgVGhyZWUuanMgY29udGFpbmVyXG4gICAqXG4gICAqL1xuICBwcml2YXRlIGNhbnZhc1BhcmVudFJlZjogTFhMVF9DYW52YXNSb290RWxlbWVudDtcblxuICAvKipcbiAgICpcbiAgICogQG5hbWUgY29tcG9uZW50RGlkTW91bnQoKVxuICAgKiBAZGVzY3JpcHRpb24gTGlmZWN5Y2xlIHRvIHN0YXJ0IHVzaW5nIHRoZSB3aW5kb3cgJiBkb2N1bWVudFxuICAgKlxuICAgKi9cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cpIHtcbiAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnVwZGF0ZVNpemUpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVNpemUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB3aW5kb3dXaWR0aDpcbiAgICAgICAgd2luZG93LmlubmVyV2lkdGggPiBCYXNlLk1lZGlhLldpZHRoLk1kXG4gICAgICAgICAgPyB3aW5kb3cuaW5uZXJXaWR0aCAtIDgwXG4gICAgICAgICAgOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgIHdpbmRvd0hlaWdodDpcbiAgICAgICAgd2luZG93LmlubmVyV2lkdGggPiBCYXNlLk1lZGlhLldpZHRoLk1kXG4gICAgICAgICAgPyB3aW5kb3cuaW5uZXJIZWlnaHQgLSA4MFxuICAgICAgICAgIDogd2luZG93LmlubmVySGVpZ2h0IC8gMixcbiAgICAgIGRvbUxvYWRlZDogdHJ1ZSxcblxuICAgICAgY2FudmFzRWxlbWVudDogZmFsc2UsXG4gICAgICBjYW52YXNUaGVtZTogd2luZG93LmxheGFsdFVuaXZlcnNhbFRoZW1lLFxuICAgICAgY2FudmFzUGFyZW50OiB0aGlzLmNhbnZhc1BhcmVudFJlZixcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAbmFtZSByZW5kZXJQNSgpXG4gICAqIEBkZXNjcmlwdGlvbiBGaXJlIHVwIHA1LmpzIGNhbnZhcyB0aHJvdWdoIGEgZHluYW1pYyBpbXBvcnRcbiAgICpcbiAgICovXG4gIHJlbmRlclA1ID0gKGZpbGVuYW1lOiBzdHJpbmcpID0+IHtcbiAgICBpZiAoXG4gICAgICB0aGlzLnN0YXRlLmNhbnZhc0VsZW1lbnQgPT09IHRydWUgJiZcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVmYXVsdENhbnZhczFcIilcbiAgICApIHtcbiAgICAgIF9fREVCVUdfXyAmJlxuICAgICAgICBjb25zb2xlLmxvZyhg8J+YjCBDYW52YXMgRWxlbWVudCBFeGlzdHNgLCB0aGlzLnN0YXRlLmNhbnZhc0VsZW1lbnQpO1xuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgX19ERUJVR19fICYmXG4gICAgICAgIGNvbnNvbGUubG9nKGDwn5WTIEluaXRpYWxpemluZyBwNSBmaWxlIC4uLy4uL3NrZXRjaGVzL3A1LyR7ZmlsZW5hbWV9YCk7XG5cbiAgICAgIF9fREVCVUdfXyAmJlxuICAgICAgICBjb25zb2xlLmxvZyhg8J+RqOKAjfCfkaYgUGFyZW50IGNvbnRhaW5lciByZWY6IGAsIHRoaXMuY2FudmFzUGFyZW50UmVmKTtcblxuICAgICAgY29uc3Qgc2tldGNoOiBMWExUX0dMU0xfQ2FudmFzID0gcmVxdWlyZShgLi4vLi4vc2tldGNoZXMvcDUvJHtmaWxlbmFtZX1gKS5kZWZhdWx0KFxuICAgICAgICB0aGlzLnN0YXRlLndpbmRvd1dpZHRoLFxuICAgICAgICB0aGlzLnN0YXRlLndpbmRvd0hlaWdodCxcbiAgICAgICAgMSxcbiAgICAgICAgLy8gdGhpcy5zdGF0ZS5jYW52YXNUaGVtZSxcbiAgICAgICAgdGhpcy5zdGF0ZS5jYW52YXNQYXJlbnRcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiA8UDVXcmFwcGVyIHNrZXRjaD17c2tldGNofSAvPjtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIF9fREVCVUdfXyAmJiBjb25zb2xlLmxvZyhcIvCfkYAgdGhpcy5zdGF0ZVwiLCB0aGlzLnN0YXRlKTtcblxuICAgIGNvbnN0IFdhdGVyRGlzdG9ydFdpdGhDYW52YXNHbG9iYWxTdHlsZXMgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbiAgICAgIC8qIGJvZHksIGh0bWwge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfSAqL1xuXG5cbiAgICAgIGNhbnZhcyB7XG4gICAgICAgIGFuaW1hdGlvbjogJHtGYWRlSW59IDFzIGVhc2UgMTtcbiAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gICAgICB9XG5cbiAgICAgIC4ke05vRGlzdG9ydENhbnZhc0NsYXNzTmFtZX0ge1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAke1RoZW1lLkJhc2UuTWVkaWEuV2lkdGguTWR9KSB7XG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuXG4gICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiBjYWxjKCR7Um9vdC5OYXYuU2l6ZX0gKiAxLjI1KTtcblxuICAgICAgICAgICAgY2FudmFzIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgICAgICAgICAgIH0gIFxuICAgICAgICAgIH1cblxuICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBjYW52YXMge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiBjYWxjKCR7Um9vdC5TaXplfSAqIC00KTtcbiAgICAgICAgICAgICAgLyogdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpOyAqL1xuICAgICAgICAgICAgfSAgXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY2FudmFzIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC44NSkgdHJhbnNsYXRlKDAlLCAyJSk7XG4gICAgICAgICAgLyogdHJhbnNmb3JtOiBzY2FsZSguOSkgdHJhbnNsYXRlKDAlLCA1JSk7ICovXG4gICAgICAgICAgLyogZGlzcGxheTogbm9uZTsgKi9cblxuICAgICAgICAgIC8qIEBtZWRpYSAobWF4LXdpZHRoOiAke1RoZW1lLkJhc2UuTWVkaWEuV2lkdGguTWR9KSB7ICovXG4gICAgICAgICAgICAvKiB0cmFuc2Zvcm06IHVuc2V0O1xuICAgICAgICAgIH0gKi9cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZGhhcm1hLWNvbnRhaW5lciB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgYDtcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICB7dGhpcy5zdGF0ZS53aW5kb3dXaWR0aCA+IEJhc2UuTWVkaWEuV2lkdGguTWQgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8V2F0ZXJEaXN0b3J0V2l0aENhbnZhc0dsb2JhbFN0eWxlcyAvPlxuXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHJlZj17KGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50KSA9PlxuICAgICAgICAgICAgICAgICh0aGlzLmNhbnZhc1BhcmVudFJlZiA9IGVsZW1lbnQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtOb0Rpc3RvcnRDYW52YXNDbGFzc05hbWV9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY2FudmFzUGFyZW50ID8gdGhpcy5yZW5kZXJQNShfX0NBTlZBU19GSUxFX18pIDogbnVsbH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuXG4gICAgICAgIHt0aGlzLnN0YXRlLndpbmRvd1dpZHRoIDwgQmFzZS5NZWRpYS5XaWR0aC5NZCAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxXYXRlckRpc3RvcnRXaXRoQ2FudmFzR2xvYmFsU3R5bGVzIC8+XG5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgcmVmPXsoZWxlbWVudDogSFRNTERpdkVsZW1lbnQpID0+XG4gICAgICAgICAgICAgICAgKHRoaXMuY2FudmFzUGFyZW50UmVmID0gZWxlbWVudClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake05vRGlzdG9ydENhbnZhc0NsYXNzTmFtZX1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jYW52YXNQYXJlbnQgPyB0aGlzLnJlbmRlclA1KF9fQ0FOVkFTX0ZJTEVfTF9fKSA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICByZWY9eyhlbGVtZW50OiBIVE1MRGl2RWxlbWVudCkgPT5cbiAgICAgICAgICAgICAgICAodGhpcy5jYW52YXNQYXJlbnRSZWYgPSBlbGVtZW50KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Tm9EaXN0b3J0Q2FudmFzQ2xhc3NOYW1lfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNhbnZhc1BhcmVudCA/IHRoaXMucmVuZGVyUDUoX19DQU5WQVNfRklMRV9TX18pIDogbnVsbH1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8TWFycXVlZVJvdyBzdHJpbmdzPXtbXCJTdHVkaW9cIiwgXCJEZXNpZ25cIiwgXCJDb2RlXCIsIFwiQXJ0d29ya1wiXX0gLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTm9XYXRlckRpc3RvcnRDYW52YXM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/projects/no-distort-with-canvas.tsx\n");

/***/ })

})