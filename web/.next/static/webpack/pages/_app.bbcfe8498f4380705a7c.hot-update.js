webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Cursor/Cursor.tsx":
/*!**************************************!*\
  !*** ./components/Cursor/Cursor.tsx ***!
  \**************************************/
/*! exports provided: Cursor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Cursor\", function() { return Cursor; });\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles.scss */ \"./components/Cursor/styles.scss.tsx\");\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/pflaxalt/Repositories/_pfl/web/components/Cursor/Cursor.tsx\";\n\nfunction _templateObject() {\n  var data = Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n      body, html {\\n        cursor: none !important;\\n\\n        a {\\n          cursor: none !important;\\n        }\\n      }\\n    \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n/**\n *\n * Cursor.js\n * @author Peter Laxalt\n * @description The website Cursor.\n *\n */\n// Core\n // Styles\n\n // Begin Component\n//////////////////////////////////////////////////////////////////////\n// Cursor\n\nvar Cursor = /*#__PURE__*/function (_Component) {\n  Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Cursor, _Component);\n\n  var _super = _createSuper(Cursor);\n\n  function Cursor(props) {\n    var _this;\n\n    Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, Cursor);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      mouseX: undefined,\n      mouseY: undefined,\n      xPos: undefined,\n      yPos: undefined,\n      dx: undefined,\n      dy: undefined,\n      mouseSize: 20,\n      scale: 1,\n      opacity: 0,\n      active: false\n    };\n    return _this;\n  }\n\n  Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Cursor, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      this.setState({\n        xPos: window.innerWidth / 2,\n        yPos: window.innerHeight / 2,\n        mouseX: window.innerWidth / 2,\n        mouseY: window.innerHeight / 2,\n        opacity: 0\n      });\n      /**\n       *\n       * @name Set Cursor Position\n       * @param e : Event from \"mousemove\" event listener.\n       * @description This positions the Cursor throughout the page.\n       *\n       */\n\n      var setCursorPosition = function setCursorPosition(e) {\n        var xPos = _this2.state.mouseX - _this2.state.mouseSize / 2;\n        var yPos = _this2.state.mouseY - _this2.state.mouseSize / 2;\n        var dX = _this2.state.mouseX - _this2.state.xPos;\n        var dY = _this2.state.mouseY - _this2.state.yPos;\n\n        _this2.setState({\n          xPos: xPos + dX / 10,\n          yPos: yPos + dY / 10,\n          mouseX: e.clientX,\n          mouseY: e.clientY,\n          opacity: 1\n        }); // console.log(\"x: \" + this.state.mouseX, \"y: \" + this.state.mouseY);\n\n      };\n      /**\n       *\n       * @name Toggle Cursor Size\n       * @param e : Event from \"mousedown\"/\"mouseup\" event listener.\n       * @description This scales the cursor size up or down depending on the event.\n       *\n       */\n\n\n      var toggleCursorSize = function toggleCursorSize() {\n        if (_this2.state.scale === 1) {\n          _this2.setState({\n            scale: 2\n          });\n        } else {\n          _this2.setState({\n            scale: 1\n          });\n        }\n\n        return;\n      };\n      /**\n       *\n       * @name Toggle Cursor Class\n       * @param e : Event from \"mousedown\"/\"mouseup\" event listener.\n       * @description This updates the cursors state when clicked.\n       *\n       */\n\n\n      var toggleCursorState = function toggleCursorState() {\n        if (_this2.state.active === true) {\n          _this2.setState({\n            active: false\n          });\n\n          toggleCursorSize();\n        } else {\n          _this2.setState({\n            active: true\n          });\n\n          toggleCursorSize();\n        }\n\n        return;\n      };\n\n      document.addEventListener(\"mousemove\", setCursorPosition, false);\n      document.addEventListener(\"mousedown\", toggleCursorState, false);\n      document.addEventListener(\"mouseup\", toggleCursorState, false);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var UniversallyHideCursor = createGlobalStyle(_templateObject());\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"Fragment\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(_styles_scss__WEBPACK_IMPORTED_MODULE_8__[\"CursorStyle\"], {\n          className: this.state.active ? \"active\" : undefined,\n          style: {\n            transform: \"translate(\" + this.state.xPos + \"px,\" + this.state.yPos + \"px)\",\n            width: this.state.mouseSize,\n            height: this.state.mouseSize,\n            opacity: this.state.opacity\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"div\", {\n            className: \"cursor-border\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 144,\n            columnNumber: 11\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 134,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(_styles_scss__WEBPACK_IMPORTED_MODULE_8__[\"CursorPoint\"], {\n          style: {\n            transform: \"translate(\" + this.state.xPos + \"px,\" + this.state.yPos + \"px)\"\n          },\n          className: this.state.active ? \"active\" : undefined,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"div\", {\n            className: \"cursor-point\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 154,\n            columnNumber: 11\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 147,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true);\n    }\n  }]);\n\n  return Cursor;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXJzb3IvQ3Vyc29yLnRzeD8zZmNkIl0sIm5hbWVzIjpbIkN1cnNvciIsInByb3BzIiwic3RhdGUiLCJtb3VzZVgiLCJ1bmRlZmluZWQiLCJtb3VzZVkiLCJ4UG9zIiwieVBvcyIsImR4IiwiZHkiLCJtb3VzZVNpemUiLCJzY2FsZSIsIm9wYWNpdHkiLCJhY3RpdmUiLCJzZXRTdGF0ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInNldEN1cnNvclBvc2l0aW9uIiwiZSIsImRYIiwiZFkiLCJjbGllbnRYIiwiY2xpZW50WSIsInRvZ2dsZUN1cnNvclNpemUiLCJ0b2dnbGVDdXJzb3JTdGF0ZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIlVuaXZlcnNhbGx5SGlkZUN1cnNvciIsImNyZWF0ZUdsb2JhbFN0eWxlIiwidHJhbnNmb3JtIiwid2lkdGgiLCJoZWlnaHQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0NBR0E7O0NBR0E7QUFDQTtBQUVBOztBQUNPLElBQU1BLE1BQWI7QUFBQTs7QUFBQTs7QUFDRSxrQkFBWUMsS0FBWixFQUF3QjtBQUFBOztBQUFBOztBQUN0Qiw4QkFBTUEsS0FBTjtBQUVBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNLEVBQUVDLFNBREc7QUFFWEMsWUFBTSxFQUFFRCxTQUZHO0FBR1hFLFVBQUksRUFBRUYsU0FISztBQUlYRyxVQUFJLEVBQUVILFNBSks7QUFLWEksUUFBRSxFQUFFSixTQUxPO0FBTVhLLFFBQUUsRUFBRUwsU0FOTztBQU9YTSxlQUFTLEVBQUUsRUFQQTtBQVFYQyxXQUFLLEVBQUUsQ0FSSTtBQVNYQyxhQUFPLEVBQUUsQ0FURTtBQVVYQyxZQUFNLEVBQUU7QUFWRyxLQUFiO0FBSHNC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Z0NBQ0UscUVBQUMsd0RBQUQ7QUFDRSxtQkFBUyxFQUFFLEtBQUszQixLQUFMLENBQVdXLE1BQVgsR0FBb0IsUUFBcEIsR0FBK0JULFNBRDVDO0FBRUUsZUFBSyxFQUFFO0FBQ0wwQixxQkFBUyxFQUNQLGVBQWUsS0FBSzVCLEtBQUwsQ0FBV0ksSUFBMUIsR0FBaUMsS0FBakMsR0FBeUMsS0FBS0osS0FBTCxDQUFXSyxJQUFwRCxHQUEyRCxLQUZ4RDtBQUdMd0IsaUJBQUssRUFBRSxLQUFLN0IsS0FBTCxDQUFXUSxTQUhiO0FBSUxzQixrQkFBTSxFQUFFLEtBQUs5QixLQUFMLENBQVdRLFNBSmQ7QUFLTEUsbUJBQU8sRUFBRSxLQUFLVixLQUFMLENBQVdVO0FBTGYsV0FGVDtBQUFBLGlDQVVFO0FBQUsscUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBY0UscUVBQUMsd0RBQUQ7QUFDRSxlQUFLLEVBQUU7QUFDTGtCLHFCQUFTLEVBQ1AsZUFBZSxLQUFLNUIsS0FBTCxDQUFXSSxJQUExQixHQUFpQyxLQUFqQyxHQUF5QyxLQUFLSixLQUFMLENBQVdLLElBQXBELEdBQTJEO0FBRnhELFdBRFQ7QUFLRSxtQkFBUyxFQUFFLEtBQUtMLEtBQUwsQ0FBV1csTUFBWCxHQUFvQixRQUFwQixHQUErQlQsU0FMNUM7QUFBQSxpQ0FPRTtBQUFLLHFCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFkRjtBQUFBLHNCQURGO0FBMEJEO0FBM0lIOztBQUFBO0FBQUEsRUFBNEI2QiwrQ0FBNUIiLCJmaWxlIjoiLi9jb21wb25lbnRzL0N1cnNvci9DdXJzb3IudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKlxuICogQ3Vyc29yLmpzXG4gKiBAYXV0aG9yIFBldGVyIExheGFsdFxuICogQGRlc2NyaXB0aW9uIFRoZSB3ZWJzaXRlIEN1cnNvci5cbiAqXG4gKi9cblxuLy8gQ29yZVxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBTdHlsZXNcbmltcG9ydCB7IEN1cnNvclN0eWxlLCBDdXJzb3JQb2ludCB9IGZyb20gXCIuL3N0eWxlcy5zY3NzXCI7XG5cbi8vIEJlZ2luIENvbXBvbmVudFxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBDdXJzb3JcbmV4cG9ydCBjbGFzcyBDdXJzb3IgZXh0ZW5kcyBDb21wb25lbnQ8e30sIGFueT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1vdXNlWDogdW5kZWZpbmVkLFxuICAgICAgbW91c2VZOiB1bmRlZmluZWQsXG4gICAgICB4UG9zOiB1bmRlZmluZWQsXG4gICAgICB5UG9zOiB1bmRlZmluZWQsXG4gICAgICBkeDogdW5kZWZpbmVkLFxuICAgICAgZHk6IHVuZGVmaW5lZCxcbiAgICAgIG1vdXNlU2l6ZTogMjAsXG4gICAgICBzY2FsZTogMSxcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICBhY3RpdmU6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHhQb3M6IHdpbmRvdy5pbm5lcldpZHRoIC8gMixcbiAgICAgIHlQb3M6IHdpbmRvdy5pbm5lckhlaWdodCAvIDIsXG4gICAgICBtb3VzZVg6IHdpbmRvdy5pbm5lcldpZHRoIC8gMixcbiAgICAgIG1vdXNlWTogd2luZG93LmlubmVySGVpZ2h0IC8gMixcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBuYW1lIFNldCBDdXJzb3IgUG9zaXRpb25cbiAgICAgKiBAcGFyYW0gZSA6IEV2ZW50IGZyb20gXCJtb3VzZW1vdmVcIiBldmVudCBsaXN0ZW5lci5cbiAgICAgKiBAZGVzY3JpcHRpb24gVGhpcyBwb3NpdGlvbnMgdGhlIEN1cnNvciB0aHJvdWdob3V0IHRoZSBwYWdlLlxuICAgICAqXG4gICAgICovXG4gICAgY29uc3Qgc2V0Q3Vyc29yUG9zaXRpb24gPSAoZTogYW55KSA9PiB7XG4gICAgICBsZXQgeFBvcyA9IHRoaXMuc3RhdGUubW91c2VYIC0gdGhpcy5zdGF0ZS5tb3VzZVNpemUgLyAyO1xuICAgICAgbGV0IHlQb3MgPSB0aGlzLnN0YXRlLm1vdXNlWSAtIHRoaXMuc3RhdGUubW91c2VTaXplIC8gMjtcblxuICAgICAgbGV0IGRYID0gdGhpcy5zdGF0ZS5tb3VzZVggLSB0aGlzLnN0YXRlLnhQb3M7XG4gICAgICBsZXQgZFkgPSB0aGlzLnN0YXRlLm1vdXNlWSAtIHRoaXMuc3RhdGUueVBvcztcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHhQb3M6IHhQb3MgKyBkWCAvIDEwLFxuICAgICAgICB5UG9zOiB5UG9zICsgZFkgLyAxMCxcbiAgICAgICAgbW91c2VYOiBlLmNsaWVudFgsXG4gICAgICAgIG1vdXNlWTogZS5jbGllbnRZLFxuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgfSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIng6IFwiICsgdGhpcy5zdGF0ZS5tb3VzZVgsIFwieTogXCIgKyB0aGlzLnN0YXRlLm1vdXNlWSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQG5hbWUgVG9nZ2xlIEN1cnNvciBTaXplXG4gICAgICogQHBhcmFtIGUgOiBFdmVudCBmcm9tIFwibW91c2Vkb3duXCIvXCJtb3VzZXVwXCIgZXZlbnQgbGlzdGVuZXIuXG4gICAgICogQGRlc2NyaXB0aW9uIFRoaXMgc2NhbGVzIHRoZSBjdXJzb3Igc2l6ZSB1cCBvciBkb3duIGRlcGVuZGluZyBvbiB0aGUgZXZlbnQuXG4gICAgICpcbiAgICAgKi9cbiAgICBjb25zdCB0b2dnbGVDdXJzb3JTaXplID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuc2NhbGUgPT09IDEpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc2NhbGU6IDIsXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc2NhbGU6IDEsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQG5hbWUgVG9nZ2xlIEN1cnNvciBDbGFzc1xuICAgICAqIEBwYXJhbSBlIDogRXZlbnQgZnJvbSBcIm1vdXNlZG93blwiL1wibW91c2V1cFwiIGV2ZW50IGxpc3RlbmVyLlxuICAgICAqIEBkZXNjcmlwdGlvbiBUaGlzIHVwZGF0ZXMgdGhlIGN1cnNvcnMgc3RhdGUgd2hlbiBjbGlja2VkLlxuICAgICAqXG4gICAgICovXG4gICAgY29uc3QgdG9nZ2xlQ3Vyc29yU3RhdGUgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmUgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdG9nZ2xlQ3Vyc29yU2l6ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICB9KTtcblxuICAgICAgICB0b2dnbGVDdXJzb3JTaXplKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9O1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBzZXRDdXJzb3JQb3NpdGlvbiwgZmFsc2UpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdG9nZ2xlQ3Vyc29yU3RhdGUsIGZhbHNlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0b2dnbGVDdXJzb3JTdGF0ZSwgZmFsc2UpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IFVuaXZlcnNhbGx5SGlkZUN1cnNvciA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICAgICAgYm9keSwgaHRtbCB7XG4gICAgICAgIGN1cnNvcjogbm9uZSAhaW1wb3J0YW50O1xuXG4gICAgICAgIGEge1xuICAgICAgICAgIGN1cnNvcjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYDtcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8Q3Vyc29yU3R5bGVcbiAgICAgICAgICBjbGFzc05hbWU9e3RoaXMuc3RhdGUuYWN0aXZlID8gXCJhY3RpdmVcIiA6IHVuZGVmaW5lZH1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgdHJhbnNmb3JtOlxuICAgICAgICAgICAgICBcInRyYW5zbGF0ZShcIiArIHRoaXMuc3RhdGUueFBvcyArIFwicHgsXCIgKyB0aGlzLnN0YXRlLnlQb3MgKyBcInB4KVwiLFxuICAgICAgICAgICAgd2lkdGg6IHRoaXMuc3RhdGUubW91c2VTaXplLFxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLnN0YXRlLm1vdXNlU2l6ZSxcbiAgICAgICAgICAgIG9wYWNpdHk6IHRoaXMuc3RhdGUub3BhY2l0eSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXJzb3ItYm9yZGVyXCIgLz5cbiAgICAgICAgPC9DdXJzb3JTdHlsZT5cblxuICAgICAgICA8Q3Vyc29yUG9pbnRcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgdHJhbnNmb3JtOlxuICAgICAgICAgICAgICBcInRyYW5zbGF0ZShcIiArIHRoaXMuc3RhdGUueFBvcyArIFwicHgsXCIgKyB0aGlzLnN0YXRlLnlQb3MgKyBcInB4KVwiLFxuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmFjdGl2ZSA/IFwiYWN0aXZlXCIgOiB1bmRlZmluZWR9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludFwiIC8+XG4gICAgICAgIDwvQ3Vyc29yUG9pbnQ+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Cursor/Cursor.tsx\n");

/***/ })

})