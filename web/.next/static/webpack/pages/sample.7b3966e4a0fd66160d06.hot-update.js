webpackHotUpdate_N_E("pages/sample",{

/***/ "./components/LayeredSidebar/LayeredSidebar.tsx":
/*!******************************************************!*\
  !*** ./components/LayeredSidebar/LayeredSidebar.tsx ***!
  \******************************************************/
/*! exports provided: LayeredSidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LayeredSidebar\", function() { return LayeredSidebar; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.scss */ \"./components/LayeredSidebar/styles.scss.tsx\");\n\n\n\nvar _jsxFileName = \"/Users/pflaxalt/Repositories/_pfl/web/components/LayeredSidebar/LayeredSidebar.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n// Core\n\n\n// Styles\n // Begin Types\n// __________________________________________________________________________________________\n\n// Begin Data\n// __________________________________________________________________________________________\nvar LayeredSidebar = function LayeredSidebar(_ref) {\n  _s();\n\n  var addClass = _ref.addClass,\n      panes = _ref.panes;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      panesCount = _useState[0],\n      setCount = _useState[1];\n\n  if (panes) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"LayeredSidebarStyle\"], {\n      className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"LayeredSidebarClassName\"], \" \").concat(addClass && addClass) // onMouseEnter={() => setCount(panesCount + 1)}\n      ,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"GlobalSidebarPaneOffsetVariables\"], {\n        panes: panesCount\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"LayeredSidebarClassName\"], \"__inner\"),\n        children: panes.map(function (pane, idx) {\n          var paneItemsMajor = pane.items ? pane.items.filter(function (item) {\n            return item.isMajor;\n          }) : [];\n          var paneItemsMinor = pane.items ? pane.items.filter(function (item) {\n            return !item.isMajor;\n          }) : [];\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"LayeredSidebarClassName\"], \"__pane\"),\n              children: [pane.header && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"LayeredSidebarClassName\"], \"__pane__header\"),\n                children: pane.header\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 70,\n                columnNumber: 21\n              }, _this), pane.items && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n                children: [paneItemsMajor.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n                  className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"LayeredSidebarClassName\"], \"__pane__list \").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"LayeredSidebarClassName\"], \"__pane__list--major\"),\n                  children: paneItemsMajor.map(function (paneItem, idxx) {\n                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                      className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"LayeredSidebarClassName\"], \"__pane__list__item \").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"LayeredSidebarClassName\"], \"__pane__list__item--\").concat(paneItem.isMajor ? \"major\" : \"minor\"),\n                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n                        href: paneItem.href,\n                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                          children: paneItem.label\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 95,\n                          columnNumber: 37\n                        }, _this)\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 94,\n                        columnNumber: 35\n                      }, _this)\n                    }, idxx, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 88,\n                      columnNumber: 33\n                    }, _this);\n                  })\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 82,\n                  columnNumber: 25\n                }, _this), paneItemsMinor.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n                  className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"LayeredSidebarClassName\"], \"__pane__list \").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"LayeredSidebarClassName\"], \"__pane__list--minor\"),\n                  children: paneItemsMinor.map(function (paneItem, idxx) {\n                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                      className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"LayeredSidebarClassName\"], \"__pane__list__item \").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"LayeredSidebarClassName\"], \"__pane__list__item--\").concat(paneItem.isMajor ? \"major\" : \"minor\"),\n                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n                        href: paneItem.href,\n                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                          children: paneItem.label\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 120,\n                          columnNumber: 37\n                        }, _this)\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 119,\n                        columnNumber: 35\n                      }, _this)\n                    }, idxx, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 113,\n                      columnNumber: 33\n                    }, _this);\n                  })\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 107,\n                  columnNumber: 25\n                }, _this)]\n              }, void 0, true)]\n            }, idx, true, {\n              fileName: _jsxFileName,\n              lineNumber: 66,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, _this);\n  } else {\n    return null;\n  }\n}; // End Component\n// ______________________________________________________________________________\n\n_s(LayeredSidebar, \"sJ+VwSObJHR1/dkv1VSW5TsGltM=\");\n\n_c = LayeredSidebar;\n\nvar _c;\n\n$RefreshReg$(_c, \"LayeredSidebar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXllcmVkU2lkZWJhci9MYXllcmVkU2lkZWJhci50c3g/NWQ2MSJdLCJuYW1lcyI6WyJMYXllcmVkU2lkZWJhciIsImFkZENsYXNzIiwicGFuZXMiLCJ1c2VTdGF0ZSIsInBhbmVzQ291bnQiLCJzZXRDb3VudCIsIkxheWVyZWRTaWRlYmFyQ2xhc3NOYW1lIiwibWFwIiwicGFuZSIsImlkeCIsInBhbmVJdGVtc01ham9yIiwiaXRlbXMiLCJmaWx0ZXIiLCJpdGVtIiwiaXNNYWpvciIsInBhbmVJdGVtc01pbm9yIiwiaGVhZGVyIiwibGVuZ3RoIiwicGFuZUl0ZW0iLCJpZHh4IiwiaHJlZiIsImxhYmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBSUE7Q0FRQTtBQUNBOztBQWtCQTtBQUNBO0FBRU8sSUFBTUEsY0FBNEQsR0FBRyxTQUEvREEsY0FBK0QsT0FHdEU7QUFBQTs7QUFBQSxNQUZKQyxRQUVJLFFBRkpBLFFBRUk7QUFBQSxNQURKQyxLQUNJLFFBREpBLEtBQ0k7O0FBQUEsa0JBQzJCQyxzREFBUSxDQUFDLENBQUQsQ0FEbkM7QUFBQSxNQUNHQyxVQURIO0FBQUEsTUFDZUMsUUFEZjs7QUFHSixNQUFJSCxLQUFKLEVBQVc7QUFDVCx3QkFDRSxxRUFBQyxnRUFBRDtBQUNFLGVBQVMsWUFBS0ksb0VBQUwsY0FBZ0NMLFFBQVEsSUFBSUEsUUFBNUMsQ0FEWCxDQUVFO0FBRkY7QUFBQSw4QkFLRSxxRUFBQyw2RUFBRDtBQUFrQyxhQUFLLEVBQUVHO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRixlQU9FO0FBQUssaUJBQVMsWUFBS0Usb0VBQUwsWUFBZDtBQUFBLGtCQUNHSixLQUFLLENBQUNLLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQXlCQyxHQUF6QixFQUF5QztBQUNsRCxjQUFJQyxjQUFzQyxHQUFHRixJQUFJLENBQUNHLEtBQUwsR0FDekNILElBQUksQ0FBQ0csS0FBTCxDQUFXQyxNQUFYLENBQWtCLFVBQUNDLElBQUQ7QUFBQSxtQkFBZ0NBLElBQUksQ0FBQ0MsT0FBckM7QUFBQSxXQUFsQixDQUR5QyxHQUV6QyxFQUZKO0FBSUEsY0FBSUMsY0FBc0MsR0FBR1AsSUFBSSxDQUFDRyxLQUFMLEdBQ3pDSCxJQUFJLENBQUNHLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQixVQUFDQyxJQUFEO0FBQUEsbUJBQWdDLENBQUNBLElBQUksQ0FBQ0MsT0FBdEM7QUFBQSxXQUFsQixDQUR5QyxHQUV6QyxFQUZKO0FBSUEsOEJBQ0U7QUFBQSxtQ0FHRTtBQUFLLHVCQUFTLFlBQUtSLG9FQUFMLFdBQWQ7QUFBQSx5QkFHR0UsSUFBSSxDQUFDUSxNQUFMLGlCQUNDO0FBQUsseUJBQVMsWUFBS1Ysb0VBQUwsbUJBQWQ7QUFBQSwwQkFDR0UsSUFBSSxDQUFDUTtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkosRUFXR1IsSUFBSSxDQUFDRyxLQUFMLGlCQUNDO0FBQUEsMkJBR0dELGNBQWMsQ0FBQ08sTUFBZixHQUF3QixDQUF4QixpQkFDQztBQUNFLDJCQUFTLFlBQUtYLG9FQUFMLDBCQUE0Q0Esb0VBQTVDLHdCQURYO0FBQUEsNEJBR0dJLGNBQWMsQ0FBQ0gsR0FBZixDQUNDLFVBQUNXLFFBQUQsRUFBaUNDLElBQWpDLEVBQWtEO0FBQ2hELHdDQUNFO0FBQ0UsK0JBQVMsWUFBS2Isb0VBQUwsZ0NBQWtEQSxvRUFBbEQsaUNBQ1BZLFFBQVEsQ0FBQ0osT0FBVCxHQUFtQixPQUFuQixHQUE2QixPQUR0QixDQURYO0FBQUEsNkNBTUUscUVBQUMsZ0RBQUQ7QUFBTSw0QkFBSSxFQUFFSSxRQUFRLENBQUNFLElBQXJCO0FBQUEsK0NBQ0U7QUFBQSxvQ0FBSUYsUUFBUSxDQUFDRztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkYsdUJBSU9GLElBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERjtBQVlELG1CQWRGO0FBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFKSixFQTRCR0osY0FBYyxDQUFDRSxNQUFmLEdBQXdCLENBQXhCLGlCQUNDO0FBQ0UsMkJBQVMsWUFBS1gsb0VBQUwsMEJBQTRDQSxvRUFBNUMsd0JBRFg7QUFBQSw0QkFHR1MsY0FBYyxDQUFDUixHQUFmLENBQ0MsVUFBQ1csUUFBRCxFQUFpQ0MsSUFBakMsRUFBa0Q7QUFDaEQsd0NBQ0U7QUFDRSwrQkFBUyxZQUFLYixvRUFBTCxnQ0FBa0RBLG9FQUFsRCxpQ0FDUFksUUFBUSxDQUFDSixPQUFULEdBQW1CLE9BQW5CLEdBQTZCLE9BRHRCLENBRFg7QUFBQSw2Q0FNRSxxRUFBQyxnREFBRDtBQUFNLDRCQUFJLEVBQUVJLFFBQVEsQ0FBQ0UsSUFBckI7QUFBQSwrQ0FDRTtBQUFBLG9DQUFJRixRQUFRLENBQUNHO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORix1QkFJT0YsSUFKUDtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURGO0FBWUQsbUJBZEY7QUFISDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQTdCSjtBQUFBLDhCQVpKO0FBQUEsZUFBeURWLEdBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRiwyQkFERjtBQXVFRCxTQWhGQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQTZGRCxHQTlGRCxNQThGTztBQUNMLFdBQU8sSUFBUDtBQUNEO0FBQ0YsQ0F2R00sQyxDQXlHUDtBQUNBOztHQTFHYVQsYzs7S0FBQUEsYyIsImZpbGUiOiIuL2NvbXBvbmVudHMvTGF5ZXJlZFNpZGViYXIvTGF5ZXJlZFNpZGViYXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29yZVxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgX19ERUJVR19fIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9zaXRlL1NldHRpbmdzXCI7XG5cbi8vIFN0eWxlc1xuaW1wb3J0IHtcbiAgR2xvYmFsU2lkZWJhclBhbmVPZmZzZXRWYXJpYWJsZXMsXG4gIExheWVyZWRQYW5lQ29sbGFwc2VkUGFuZVdpZHRoLFxuICBMYXllcmVkU2lkZWJhckNsYXNzTmFtZSxcbiAgTGF5ZXJlZFNpZGViYXJTdHlsZSxcbn0gZnJvbSBcIi4vc3R5bGVzLnNjc3NcIjtcblxuLy8gQmVnaW4gVHlwZXNcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuXG5leHBvcnQgdHlwZSBMWExUX1NpZGViYXJQYW5lSXRlbSA9IHtcbiAgbGFiZWw6IHN0cmluZztcbiAgaHJlZjogc3RyaW5nO1xuICBpc01ham9yOiBib29sZWFuO1xufTtcblxuZXhwb3J0IHR5cGUgTFhMVF9TaWRlYmFyUGFuZSA9IHtcbiAgaGVhZGVyPzogc3RyaW5nO1xuICBpdGVtcz86IExYTFRfU2lkZWJhclBhbmVJdGVtW107XG59O1xuXG5leHBvcnQgdHlwZSBMWExUX0xheWVyZWRTaWRlYmFyID0ge1xuICBhZGRDbGFzcz86IHN0cmluZztcbiAgcGFuZXM/OiBMWExUX1NpZGViYXJQYW5lW107XG59O1xuXG4vLyBCZWdpbiBEYXRhXG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cblxuZXhwb3J0IGNvbnN0IExheWVyZWRTaWRlYmFyOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxMWExUX0xheWVyZWRTaWRlYmFyPiA9ICh7XG4gIGFkZENsYXNzLFxuICBwYW5lcyxcbn0pID0+IHtcbiAgY29uc3QgW3BhbmVzQ291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApO1xuXG4gIGlmIChwYW5lcykge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5ZXJlZFNpZGViYXJTdHlsZVxuICAgICAgICBjbGFzc05hbWU9e2Ake0xheWVyZWRTaWRlYmFyQ2xhc3NOYW1lfSAke2FkZENsYXNzICYmIGFkZENsYXNzfWB9XG4gICAgICAgIC8vIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0Q291bnQocGFuZXNDb3VudCArIDEpfVxuICAgICAgPlxuXG4gICAgICAgIDxHbG9iYWxTaWRlYmFyUGFuZU9mZnNldFZhcmlhYmxlcyBwYW5lcz17cGFuZXNDb3VudH0gLz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7TGF5ZXJlZFNpZGViYXJDbGFzc05hbWV9X19pbm5lcmB9PlxuICAgICAgICAgIHtwYW5lcy5tYXAoKHBhbmU6IExYTFRfU2lkZWJhclBhbmUsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBsZXQgcGFuZUl0ZW1zTWFqb3I6IExYTFRfU2lkZWJhclBhbmVJdGVtW10gPSBwYW5lLml0ZW1zXG4gICAgICAgICAgICAgID8gcGFuZS5pdGVtcy5maWx0ZXIoKGl0ZW06IExYTFRfU2lkZWJhclBhbmVJdGVtKSA9PiBpdGVtLmlzTWFqb3IpXG4gICAgICAgICAgICAgIDogW107XG5cbiAgICAgICAgICAgIGxldCBwYW5lSXRlbXNNaW5vcjogTFhMVF9TaWRlYmFyUGFuZUl0ZW1bXSA9IHBhbmUuaXRlbXNcbiAgICAgICAgICAgICAgPyBwYW5lLml0ZW1zLmZpbHRlcigoaXRlbTogTFhMVF9TaWRlYmFyUGFuZUl0ZW0pID0+ICFpdGVtLmlzTWFqb3IpXG4gICAgICAgICAgICAgIDogW107XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgey8qIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAqL31cbiAgICAgICAgICAgICAgICB7LyogTmF2aWdhdG9uIFBhbmUgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake0xheWVyZWRTaWRlYmFyQ2xhc3NOYW1lfV9fcGFuZWB9IGtleT17aWR4fT5cbiAgICAgICAgICAgICAgICAgIHsvKiBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gKi99XG4gICAgICAgICAgICAgICAgICB7LyogTGlzdCBoZWFkZXIgKi99XG4gICAgICAgICAgICAgICAgICB7cGFuZS5oZWFkZXIgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7TGF5ZXJlZFNpZGViYXJDbGFzc05hbWV9X19wYW5lX19oZWFkZXJgfT5cbiAgICAgICAgICAgICAgICAgICAgICB7cGFuZS5oZWFkZXJ9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgey8qIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAqL31cbiAgICAgICAgICAgICAgICAgIHsvKiBMaXN0IGl0ZW1zICovfVxuICAgICAgICAgICAgICAgICAge3BhbmUuaXRlbXMgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gKi99XG4gICAgICAgICAgICAgICAgICAgICAgey8qIE1ham9yIGxpc3QgaXRlbXMgKi99XG4gICAgICAgICAgICAgICAgICAgICAge3BhbmVJdGVtc01ham9yLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7TGF5ZXJlZFNpZGViYXJDbGFzc05hbWV9X19wYW5lX19saXN0ICR7TGF5ZXJlZFNpZGViYXJDbGFzc05hbWV9X19wYW5lX19saXN0LS1tYWpvcmB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtwYW5lSXRlbXNNYWpvci5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHBhbmVJdGVtOiBMWExUX1NpZGViYXJQYW5lSXRlbSwgaWR4eDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake0xheWVyZWRTaWRlYmFyQ2xhc3NOYW1lfV9fcGFuZV9fbGlzdF9faXRlbSAke0xheWVyZWRTaWRlYmFyQ2xhc3NOYW1lfV9fcGFuZV9fbGlzdF9faXRlbS0tJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhbmVJdGVtLmlzTWFqb3IgPyBcIm1ham9yXCIgOiBcIm1pbm9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkeHh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwYW5lSXRlbS5ocmVmfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntwYW5lSXRlbS5sYWJlbH08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICB7LyogX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fICovfVxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBNaW5vciBsaXN0IGl0ZW1zICovfVxuICAgICAgICAgICAgICAgICAgICAgIHtwYW5lSXRlbXNNaW5vci5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake0xheWVyZWRTaWRlYmFyQ2xhc3NOYW1lfV9fcGFuZV9fbGlzdCAke0xheWVyZWRTaWRlYmFyQ2xhc3NOYW1lfV9fcGFuZV9fbGlzdC0tbWlub3JgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cGFuZUl0ZW1zTWlub3IubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwYW5lSXRlbTogTFhMVF9TaWRlYmFyUGFuZUl0ZW0sIGlkeHg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtMYXllcmVkU2lkZWJhckNsYXNzTmFtZX1fX3BhbmVfX2xpc3RfX2l0ZW0gJHtMYXllcmVkU2lkZWJhckNsYXNzTmFtZX1fX3BhbmVfX2xpc3RfX2l0ZW0tLSR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYW5lSXRlbS5pc01ham9yID8gXCJtYWpvclwiIDogXCJtaW5vclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpZHh4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cGFuZUl0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57cGFuZUl0ZW0ubGFiZWx9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheWVyZWRTaWRlYmFyU3R5bGU+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuLy8gRW5kIENvbXBvbmVudFxuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/LayeredSidebar/LayeredSidebar.tsx\n");

/***/ })

})