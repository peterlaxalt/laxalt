webpackHotUpdate_N_E("pages/sample",{

/***/ "./components/LayeredSidebar/LayeredSidebar.tsx":
/*!******************************************************!*\
  !*** ./components/LayeredSidebar/LayeredSidebar.tsx ***!
  \******************************************************/
/*! exports provided: LayeredSidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LayeredSidebar\", function() { return LayeredSidebar; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.scss */ \"./components/LayeredSidebar/styles.scss.tsx\");\n\n\n\nvar _jsxFileName = \"/Users/pflaxalt/Repositories/_pfl/web/components/LayeredSidebar/LayeredSidebar.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n// Core\n\n\n// Styles\n // Begin Types\n// __________________________________________________________________________________________\n\n// Begin Data\n// __________________________________________________________________________________________\nvar LayeredSidebar = function LayeredSidebar(_ref) {\n  _s();\n\n  var addClass = _ref.addClass,\n      panes = _ref.panes;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      panesCount = _useState[0],\n      setCount = _useState[1];\n\n  if (panes) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"LayeredSidebarStyle\"], {\n      className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"LayeredSidebarClassName\"], \" \").concat(addClass && addClass),\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"GlobalSidebarPaneOffsetVariables\"], {\n        panes: panes.length\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"LayeredSidebarClassName\"], \"__inner\"),\n        children: panes.map(function (pane, idx) {\n          var paneItemsMajor = pane.items ? pane.items.filter(function (item) {\n            return item.isMajor;\n          }) : [];\n          var paneItemsMinor = pane.items ? pane.items.filter(function (item) {\n            return !item.isMajor;\n          }) : [];\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"LayeredSidebarClassName\"], \"__pane\"),\n              children: [pane.header && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"LayeredSidebarClassName\"], \"__pane__header\"),\n                children: pane.header\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 69,\n                columnNumber: 21\n              }, _this), pane.items && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n                children: [paneItemsMajor.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n                  className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"LayeredSidebarClassName\"], \"__pane__list \").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"LayeredSidebarClassName\"], \"__pane__list--major\"),\n                  children: paneItemsMajor.map(function (paneItem, idxx) {\n                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                      className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"LayeredSidebarClassName\"], \"__pane__list__item \").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"LayeredSidebarClassName\"], \"__pane__list__item--\").concat(paneItem.isMajor ? \"major\" : \"minor\"),\n                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n                        href: paneItem.href,\n                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                          children: paneItem.label\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 94,\n                          columnNumber: 37\n                        }, _this)\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 93,\n                        columnNumber: 35\n                      }, _this)\n                    }, idxx, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 87,\n                      columnNumber: 33\n                    }, _this);\n                  })\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 81,\n                  columnNumber: 25\n                }, _this), paneItemsMinor.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n                  className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"LayeredSidebarClassName\"], \"__pane__list \").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"LayeredSidebarClassName\"], \"__pane__list--minor\"),\n                  children: paneItemsMinor.map(function (paneItem, idxx) {\n                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                      className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"LayeredSidebarClassName\"], \"__pane__list__item \").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"LayeredSidebarClassName\"], \"__pane__list__item--\").concat(paneItem.isMajor ? \"major\" : \"minor\"),\n                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n                        href: paneItem.href,\n                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                          children: paneItem.label\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 119,\n                          columnNumber: 37\n                        }, _this)\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 118,\n                        columnNumber: 35\n                      }, _this)\n                    }, idxx, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 112,\n                      columnNumber: 33\n                    }, _this);\n                  })\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 106,\n                  columnNumber: 25\n                }, _this)]\n              }, void 0, true)]\n            }, idx, true, {\n              fileName: _jsxFileName,\n              lineNumber: 65,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, _this);\n  } else {\n    return null;\n  }\n}; // End Component\n// ______________________________________________________________________________\n\n_s(LayeredSidebar, \"sJ+VwSObJHR1/dkv1VSW5TsGltM=\");\n\n_c = LayeredSidebar;\n\nvar _c;\n\n$RefreshReg$(_c, \"LayeredSidebar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXllcmVkU2lkZWJhci9MYXllcmVkU2lkZWJhci50c3g/NWQ2MSJdLCJuYW1lcyI6WyJMYXllcmVkU2lkZWJhciIsImFkZENsYXNzIiwicGFuZXMiLCJ1c2VTdGF0ZSIsInBhbmVzQ291bnQiLCJzZXRDb3VudCIsIkxheWVyZWRTaWRlYmFyQ2xhc3NOYW1lIiwibGVuZ3RoIiwibWFwIiwicGFuZSIsImlkeCIsInBhbmVJdGVtc01ham9yIiwiaXRlbXMiLCJmaWx0ZXIiLCJpdGVtIiwiaXNNYWpvciIsInBhbmVJdGVtc01pbm9yIiwiaGVhZGVyIiwicGFuZUl0ZW0iLCJpZHh4IiwiaHJlZiIsImxhYmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBSUE7Q0FRQTtBQUNBOztBQWtCQTtBQUNBO0FBRU8sSUFBTUEsY0FBNEQsR0FBRyxTQUEvREEsY0FBK0QsT0FHdEU7QUFBQTs7QUFBQSxNQUZKQyxRQUVJLFFBRkpBLFFBRUk7QUFBQSxNQURKQyxLQUNJLFFBREpBLEtBQ0k7O0FBQUEsa0JBQzJCQyxzREFBUSxDQUFDLENBQUQsQ0FEbkM7QUFBQSxNQUNHQyxVQURIO0FBQUEsTUFDZUMsUUFEZjs7QUFHSixNQUFJSCxLQUFKLEVBQVc7QUFDVCx3QkFDRSxxRUFBQyxnRUFBRDtBQUNFLGVBQVMsWUFBS0ksb0VBQUwsY0FBZ0NMLFFBQVEsSUFBSUEsUUFBNUMsQ0FEWDtBQUFBLDhCQUlFLHFFQUFDLDZFQUFEO0FBQWtDLGFBQUssRUFBRUMsS0FBSyxDQUFDSztBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsZUFNRTtBQUFLLGlCQUFTLFlBQUtELG9FQUFMLFlBQWQ7QUFBQSxrQkFDR0osS0FBSyxDQUFDTSxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUF5QkMsR0FBekIsRUFBeUM7QUFDbEQsY0FBSUMsY0FBc0MsR0FBR0YsSUFBSSxDQUFDRyxLQUFMLEdBQ3pDSCxJQUFJLENBQUNHLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQixVQUFDQyxJQUFEO0FBQUEsbUJBQWdDQSxJQUFJLENBQUNDLE9BQXJDO0FBQUEsV0FBbEIsQ0FEeUMsR0FFekMsRUFGSjtBQUlBLGNBQUlDLGNBQXNDLEdBQUdQLElBQUksQ0FBQ0csS0FBTCxHQUN6Q0gsSUFBSSxDQUFDRyxLQUFMLENBQVdDLE1BQVgsQ0FBa0IsVUFBQ0MsSUFBRDtBQUFBLG1CQUFnQyxDQUFDQSxJQUFJLENBQUNDLE9BQXRDO0FBQUEsV0FBbEIsQ0FEeUMsR0FFekMsRUFGSjtBQUlBLDhCQUNFO0FBQUEsbUNBR0U7QUFBSyx1QkFBUyxZQUFLVCxvRUFBTCxXQUFkO0FBQUEseUJBR0dHLElBQUksQ0FBQ1EsTUFBTCxpQkFDQztBQUFLLHlCQUFTLFlBQUtYLG9FQUFMLG1CQUFkO0FBQUEsMEJBQ0dHLElBQUksQ0FBQ1E7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpKLEVBV0dSLElBQUksQ0FBQ0csS0FBTCxpQkFDQztBQUFBLDJCQUdHRCxjQUFjLENBQUNKLE1BQWYsR0FBd0IsQ0FBeEIsaUJBQ0M7QUFDRSwyQkFBUyxZQUFLRCxvRUFBTCwwQkFBNENBLG9FQUE1Qyx3QkFEWDtBQUFBLDRCQUdHSyxjQUFjLENBQUNILEdBQWYsQ0FDQyxVQUFDVSxRQUFELEVBQWlDQyxJQUFqQyxFQUFrRDtBQUNoRCx3Q0FDRTtBQUNFLCtCQUFTLFlBQUtiLG9FQUFMLGdDQUFrREEsb0VBQWxELGlDQUNQWSxRQUFRLENBQUNILE9BQVQsR0FBbUIsT0FBbkIsR0FBNkIsT0FEdEIsQ0FEWDtBQUFBLDZDQU1FLHFFQUFDLGdEQUFEO0FBQU0sNEJBQUksRUFBRUcsUUFBUSxDQUFDRSxJQUFyQjtBQUFBLCtDQUNFO0FBQUEsb0NBQUlGLFFBQVEsQ0FBQ0c7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GLHVCQUlPRixJQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREY7QUFZRCxtQkFkRjtBQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSkosRUE0QkdILGNBQWMsQ0FBQ1QsTUFBZixHQUF3QixDQUF4QixpQkFDQztBQUNFLDJCQUFTLFlBQUtELG9FQUFMLDBCQUE0Q0Esb0VBQTVDLHdCQURYO0FBQUEsNEJBR0dVLGNBQWMsQ0FBQ1IsR0FBZixDQUNDLFVBQUNVLFFBQUQsRUFBaUNDLElBQWpDLEVBQWtEO0FBQ2hELHdDQUNFO0FBQ0UsK0JBQVMsWUFBS2Isb0VBQUwsZ0NBQWtEQSxvRUFBbEQsaUNBQ1BZLFFBQVEsQ0FBQ0gsT0FBVCxHQUFtQixPQUFuQixHQUE2QixPQUR0QixDQURYO0FBQUEsNkNBTUUscUVBQUMsZ0RBQUQ7QUFBTSw0QkFBSSxFQUFFRyxRQUFRLENBQUNFLElBQXJCO0FBQUEsK0NBQ0U7QUFBQSxvQ0FBSUYsUUFBUSxDQUFDRztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkYsdUJBSU9GLElBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERjtBQVlELG1CQWRGO0FBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkE3Qko7QUFBQSw4QkFaSjtBQUFBLGVBQXlEVCxHQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEYsMkJBREY7QUF1RUQsU0FoRkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUE0RkQsR0E3RkQsTUE2Rk87QUFDTCxXQUFPLElBQVA7QUFDRDtBQUNGLENBdEdNLEMsQ0F3R1A7QUFDQTs7R0F6R2FWLGM7O0tBQUFBLGMiLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheWVyZWRTaWRlYmFyL0xheWVyZWRTaWRlYmFyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcmVcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IF9fREVCVUdfXyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvc2l0ZS9TZXR0aW5nc1wiO1xuXG4vLyBTdHlsZXNcbmltcG9ydCB7XG4gIEdsb2JhbFNpZGViYXJQYW5lT2Zmc2V0VmFyaWFibGVzLFxuICBMYXllcmVkUGFuZUNvbGxhcHNlZFBhbmVXaWR0aCxcbiAgTGF5ZXJlZFNpZGViYXJDbGFzc05hbWUsXG4gIExheWVyZWRTaWRlYmFyU3R5bGUsXG59IGZyb20gXCIuL3N0eWxlcy5zY3NzXCI7XG5cbi8vIEJlZ2luIFR5cGVzXG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cblxuZXhwb3J0IHR5cGUgTFhMVF9TaWRlYmFyUGFuZUl0ZW0gPSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGhyZWY6IHN0cmluZztcbiAgaXNNYWpvcjogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCB0eXBlIExYTFRfU2lkZWJhclBhbmUgPSB7XG4gIGhlYWRlcj86IHN0cmluZztcbiAgaXRlbXM/OiBMWExUX1NpZGViYXJQYW5lSXRlbVtdO1xufTtcblxuZXhwb3J0IHR5cGUgTFhMVF9MYXllcmVkU2lkZWJhciA9IHtcbiAgYWRkQ2xhc3M/OiBzdHJpbmc7XG4gIHBhbmVzPzogTFhMVF9TaWRlYmFyUGFuZVtdO1xufTtcblxuLy8gQmVnaW4gRGF0YVxuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG5cbmV4cG9ydCBjb25zdCBMYXllcmVkU2lkZWJhcjogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8TFhMVF9MYXllcmVkU2lkZWJhcj4gPSAoe1xuICBhZGRDbGFzcyxcbiAgcGFuZXMsXG59KSA9PiB7XG4gIGNvbnN0IFtwYW5lc0NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcblxuICBpZiAocGFuZXMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheWVyZWRTaWRlYmFyU3R5bGVcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtMYXllcmVkU2lkZWJhckNsYXNzTmFtZX0gJHthZGRDbGFzcyAmJiBhZGRDbGFzc31gfVxuICAgICAgPlxuXG4gICAgICAgIDxHbG9iYWxTaWRlYmFyUGFuZU9mZnNldFZhcmlhYmxlcyBwYW5lcz17cGFuZXMubGVuZ3RofSAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtMYXllcmVkU2lkZWJhckNsYXNzTmFtZX1fX2lubmVyYH0+XG4gICAgICAgICAge3BhbmVzLm1hcCgocGFuZTogTFhMVF9TaWRlYmFyUGFuZSwgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGxldCBwYW5lSXRlbXNNYWpvcjogTFhMVF9TaWRlYmFyUGFuZUl0ZW1bXSA9IHBhbmUuaXRlbXNcbiAgICAgICAgICAgICAgPyBwYW5lLml0ZW1zLmZpbHRlcigoaXRlbTogTFhMVF9TaWRlYmFyUGFuZUl0ZW0pID0+IGl0ZW0uaXNNYWpvcilcbiAgICAgICAgICAgICAgOiBbXTtcblxuICAgICAgICAgICAgbGV0IHBhbmVJdGVtc01pbm9yOiBMWExUX1NpZGViYXJQYW5lSXRlbVtdID0gcGFuZS5pdGVtc1xuICAgICAgICAgICAgICA/IHBhbmUuaXRlbXMuZmlsdGVyKChpdGVtOiBMWExUX1NpZGViYXJQYW5lSXRlbSkgPT4gIWl0ZW0uaXNNYWpvcilcbiAgICAgICAgICAgICAgOiBbXTtcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICB7LyogX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fICovfVxuICAgICAgICAgICAgICAgIHsvKiBOYXZpZ2F0b24gUGFuZSAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7TGF5ZXJlZFNpZGViYXJDbGFzc05hbWV9X19wYW5lYH0ga2V5PXtpZHh9PlxuICAgICAgICAgICAgICAgICAgey8qIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAqL31cbiAgICAgICAgICAgICAgICAgIHsvKiBMaXN0IGhlYWRlciAqL31cbiAgICAgICAgICAgICAgICAgIHtwYW5lLmhlYWRlciAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtMYXllcmVkU2lkZWJhckNsYXNzTmFtZX1fX3BhbmVfX2hlYWRlcmB9PlxuICAgICAgICAgICAgICAgICAgICAgIHtwYW5lLmhlYWRlcn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICB7LyogX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fICovfVxuICAgICAgICAgICAgICAgICAgey8qIExpc3QgaXRlbXMgKi99XG4gICAgICAgICAgICAgICAgICB7cGFuZS5pdGVtcyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAqL31cbiAgICAgICAgICAgICAgICAgICAgICB7LyogTWFqb3IgbGlzdCBpdGVtcyAqL31cbiAgICAgICAgICAgICAgICAgICAgICB7cGFuZUl0ZW1zTWFqb3IubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtMYXllcmVkU2lkZWJhckNsYXNzTmFtZX1fX3BhbmVfX2xpc3QgJHtMYXllcmVkU2lkZWJhckNsYXNzTmFtZX1fX3BhbmVfX2xpc3QtLW1ham9yYH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3BhbmVJdGVtc01ham9yLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocGFuZUl0ZW06IExYTFRfU2lkZWJhclBhbmVJdGVtLCBpZHh4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7TGF5ZXJlZFNpZGViYXJDbGFzc05hbWV9X19wYW5lX19saXN0X19pdGVtICR7TGF5ZXJlZFNpZGViYXJDbGFzc05hbWV9X19wYW5lX19saXN0X19pdGVtLS0ke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFuZUl0ZW0uaXNNYWpvciA/IFwibWFqb3JcIiA6IFwibWlub3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aWR4eH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3BhbmVJdGVtLmhyZWZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3BhbmVJdGVtLmxhYmVsfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gKi99XG4gICAgICAgICAgICAgICAgICAgICAgey8qIE1pbm9yIGxpc3QgaXRlbXMgKi99XG4gICAgICAgICAgICAgICAgICAgICAge3BhbmVJdGVtc01pbm9yLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7TGF5ZXJlZFNpZGViYXJDbGFzc05hbWV9X19wYW5lX19saXN0ICR7TGF5ZXJlZFNpZGViYXJDbGFzc05hbWV9X19wYW5lX19saXN0LS1taW5vcmB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtwYW5lSXRlbXNNaW5vci5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHBhbmVJdGVtOiBMWExUX1NpZGViYXJQYW5lSXRlbSwgaWR4eDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake0xheWVyZWRTaWRlYmFyQ2xhc3NOYW1lfV9fcGFuZV9fbGlzdF9faXRlbSAke0xheWVyZWRTaWRlYmFyQ2xhc3NOYW1lfV9fcGFuZV9fbGlzdF9faXRlbS0tJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhbmVJdGVtLmlzTWFqb3IgPyBcIm1ham9yXCIgOiBcIm1pbm9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkeHh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwYW5lSXRlbS5ocmVmfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntwYW5lSXRlbS5sYWJlbH08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5ZXJlZFNpZGViYXJTdHlsZT5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG4vLyBFbmQgQ29tcG9uZW50XG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/LayeredSidebar/LayeredSidebar.tsx\n");

/***/ })

})