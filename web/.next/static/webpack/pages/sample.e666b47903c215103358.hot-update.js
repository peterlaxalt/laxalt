webpackHotUpdate_N_E("pages/sample",{

/***/ "./components/Sections/MarqueeRow/MarqueeRow.tsx":
/*!*******************************************************!*\
  !*** ./components/Sections/MarqueeRow/MarqueeRow.tsx ***!
  \*******************************************************/
/*! exports provided: MarqueeRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MarqueeRow\", function() { return MarqueeRow; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ \"./components/Sections/MarqueeRow/styles.scss.tsx\");\n\n\nvar _jsxFileName = \"/Users/pflaxalt/Repositories/_pfl/web/components/Sections/MarqueeRow/MarqueeRow.tsx\",\n    _this = undefined;\n\n// Core\n\n// Styles\n // Begin Component\n// __________________________________________________________________________________________\n\n/**\n *\n * @name MarqueeRow\n * @author Peter Laxalt\n * @description Marquee rotating through items.\n * @requires /studio/sections/MarqueeRow\n *\n */\nvar MarqueeRow = function MarqueeRow(_ref) {\n  var strings = _ref.strings,\n      style = _ref.style,\n      hasSidebar = _ref.hasSidebar;\n  var items = Array.from(Array(4));\n\n  if (strings) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_scss__WEBPACK_IMPORTED_MODULE_2__[\"MarqueeRowStyle\"], {\n      style: style,\n      className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__[\"MarqueeRowClassName\"]),\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__[\"MarqueeRowClassName\"], \"__inner\"),\n        \"aria-hidden\": \"true\",\n        children: items.map(function (_, idx) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n            className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__[\"MarqueeRowClassName\"], \"__list\"),\n            children: strings ? strings.map(function (string, idx) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__[\"MarqueeRowClassName\"], \"__list__item\"),\n                \"data-marquee-item\": idx,\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                  className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__[\"MarqueeRowClassName\"], \"__list__item__label\"),\n                  children: string\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 47,\n                  columnNumber: 27\n                }, _this)\n              }, idx, false, {\n                fileName: _jsxFileName,\n                lineNumber: 42,\n                columnNumber: 25\n              }, _this);\n            }) : false\n          }, idx, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, _this);\n  } else {\n    console.log(\"🚫 Strings not provided to Section: MarqueeRow\");\n    return null;\n  }\n}; // End Component\n// __________________________________________________________________________________________\n\n_c = MarqueeRow;\n\nvar _c;\n\n$RefreshReg$(_c, \"MarqueeRow\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9ucy9NYXJxdWVlUm93L01hcnF1ZWVSb3cudHN4PzYyZGYiXSwibmFtZXMiOlsiTWFycXVlZVJvdyIsInN0cmluZ3MiLCJzdHlsZSIsImhhc1NpZGViYXIiLCJpdGVtcyIsIkFycmF5IiwiZnJvbSIsIk1hcnF1ZWVSb3dDbGFzc05hbWUiLCJtYXAiLCJfIiwiaWR4Iiwic3RyaW5nIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUlBO0NBR0E7QUFDQTs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTUEsVUFBNkQsR0FBRyxTQUFoRUEsVUFBZ0UsT0FJdkU7QUFBQSxNQUhKQyxPQUdJLFFBSEpBLE9BR0k7QUFBQSxNQUZKQyxLQUVJLFFBRkpBLEtBRUk7QUFBQSxNQURKQyxVQUNJLFFBREpBLFVBQ0k7QUFDSixNQUFJQyxLQUFLLEdBQUdDLEtBQUssQ0FBQ0MsSUFBTixDQUFXRCxLQUFLLENBQUMsQ0FBRCxDQUFoQixDQUFaOztBQUVBLE1BQUlKLE9BQUosRUFBYTtBQUNYLHdCQUNFLHFFQUFDLDREQUFEO0FBQWlCLFdBQUssRUFBRUMsS0FBeEI7QUFBK0IsZUFBUyxZQUFLSyxnRUFBTCxDQUF4QztBQUFBLDZCQUNFO0FBQUssaUJBQVMsWUFBS0EsZ0VBQUwsWUFBZDtBQUFpRCx1QkFBWSxNQUE3RDtBQUFBLGtCQUNHSCxLQUFLLENBQUNJLEdBQU4sQ0FBVSxVQUFDQyxDQUFELEVBQUlDLEdBQUosRUFBb0I7QUFDN0IsOEJBQ0U7QUFBYyxxQkFBUyxZQUFLSCxnRUFBTCxXQUF2QjtBQUFBLHNCQUNHTixPQUFPLEdBQ0pBLE9BQU8sQ0FBQ08sR0FBUixDQUFZLFVBQUNHLE1BQUQsRUFBaUJELEdBQWpCLEVBQThCO0FBQ3hDLGtDQUNFO0FBRUUseUJBQVMsWUFBS0gsZ0VBQUwsaUJBRlg7QUFHRSxxQ0FBbUJHLEdBSHJCO0FBQUEsdUNBS0U7QUFDRSwyQkFBUyxZQUFLSCxnRUFBTCx3QkFEWDtBQUFBLDRCQUdHSTtBQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRixpQkFDT0QsR0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGO0FBYUQsYUFkRCxDQURJLEdBZ0JKO0FBakJOLGFBQVNBLEdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQXFCRCxTQXRCQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUE2QkQsR0E5QkQsTUE4Qk87QUFDTEUsV0FBTyxDQUFDQyxHQUFSLENBQVksZ0RBQVo7QUFDQSxXQUFPLElBQVA7QUFDRDtBQUNGLENBekNNLEMsQ0EyQ1A7QUFDQTs7S0E1Q2FiLFUiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlY3Rpb25zL01hcnF1ZWVSb3cvTWFycXVlZVJvdy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3JlXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDU1NQcm9wZXJ0aWVzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBMWExUX1NpbXBsZUNvbnRlbnROb2RlIH0gZnJvbSBcIi4uLy4uL1NpbXBsZUNvbnRlbnRUZW1wbGF0ZVwiO1xuXG4vLyBTdHlsZXNcbmltcG9ydCB7IE1hcnF1ZWVSb3dDbGFzc05hbWUsIE1hcnF1ZWVSb3dTdHlsZSB9IGZyb20gXCIuL3N0eWxlcy5zY3NzXCI7XG5cbi8vIEJlZ2luIENvbXBvbmVudFxuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG5cbmV4cG9ydCB0eXBlIExNTlRTX1NlY3Rpb25fTWFycXVlZVJvdyA9IExYTFRfU2ltcGxlQ29udGVudE5vZGUgJiB7XG4gIHN0cmluZ3M6IHN0cmluZ1tdO1xuICBoYXNTaWRlYmFyPzogYm9vbGVhbjtcbn07XG5cbi8qKlxuICpcbiAqIEBuYW1lIE1hcnF1ZWVSb3dcbiAqIEBhdXRob3IgUGV0ZXIgTGF4YWx0XG4gKiBAZGVzY3JpcHRpb24gTWFycXVlZSByb3RhdGluZyB0aHJvdWdoIGl0ZW1zLlxuICogQHJlcXVpcmVzIC9zdHVkaW8vc2VjdGlvbnMvTWFycXVlZVJvd1xuICpcbiAqL1xuZXhwb3J0IGNvbnN0IE1hcnF1ZWVSb3c6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PExNTlRTX1NlY3Rpb25fTWFycXVlZVJvdz4gPSAoe1xuICBzdHJpbmdzLFxuICBzdHlsZSxcbiAgaGFzU2lkZWJhclxufSkgPT4ge1xuICBsZXQgaXRlbXMgPSBBcnJheS5mcm9tKEFycmF5KDQpKTtcblxuICBpZiAoc3RyaW5ncykge1xuICAgIHJldHVybiAoXG4gICAgICA8TWFycXVlZVJvd1N0eWxlIHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtgJHtNYXJxdWVlUm93Q2xhc3NOYW1lfWB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7TWFycXVlZVJvd0NsYXNzTmFtZX1fX2lubmVyYH0gYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAge2l0ZW1zLm1hcCgoXywgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDx1bCBrZXk9e2lkeH0gY2xhc3NOYW1lPXtgJHtNYXJxdWVlUm93Q2xhc3NOYW1lfV9fbGlzdGB9PlxuICAgICAgICAgICAgICAgIHtzdHJpbmdzXG4gICAgICAgICAgICAgICAgICA/IHN0cmluZ3MubWFwKChzdHJpbmc6IHN0cmluZywgaWR4OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aWR4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake01hcnF1ZWVSb3dDbGFzc05hbWV9X19saXN0X19pdGVtYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1tYXJxdWVlLWl0ZW09e2lkeH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake01hcnF1ZWVSb3dDbGFzc05hbWV9X19saXN0X19pdGVtX19sYWJlbGB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RyaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICA6IGZhbHNlfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L01hcnF1ZWVSb3dTdHlsZT5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKFwi8J+aqyBTdHJpbmdzIG5vdCBwcm92aWRlZCB0byBTZWN0aW9uOiBNYXJxdWVlUm93XCIpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG4vLyBFbmQgQ29tcG9uZW50XG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Sections/MarqueeRow/MarqueeRow.tsx\n");

/***/ })

})