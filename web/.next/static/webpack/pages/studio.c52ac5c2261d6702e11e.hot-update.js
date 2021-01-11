webpackHotUpdate_N_E("pages/studio",{

/***/ "./components/Sections/StaggeredBlocksSection/StaggeredBlocksSection.tsx":
/*!*******************************************************************************!*\
  !*** ./components/Sections/StaggeredBlocksSection/StaggeredBlocksSection.tsx ***!
  \*******************************************************************************/
/*! exports provided: StaggeredBlock, StaggeredBlocksSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StaggeredBlock\", function() { return StaggeredBlock; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StaggeredBlocksSection\", function() { return StaggeredBlocksSection; });\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _DuotoneImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../DuotoneImage */ \"./components/DuotoneImage/index.tsx\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.scss */ \"./components/Sections/StaggeredBlocksSection/styles.scss.tsx\");\n\n\n\nvar _jsxFileName = \"/Users/pflaxalt/Repositories/_pfl/web/components/Sections/StaggeredBlocksSection/StaggeredBlocksSection.tsx\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n// Core\n\n\n// Styles\n // Begin Component\n// __________________________________________________________________________________________\n\nvar StaggeredBlock = function StaggeredBlock(_ref) {\n  var children = _ref.children,\n      img = _ref.img,\n      addClass = _ref.addClass,\n      style = _ref.style;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles_scss__WEBPACK_IMPORTED_MODULE_4__[\"StaggeredBlockStyle\"], {\n    style: style ? style : {},\n    className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_4__[\"StaggeredBlockClassName\"]),\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_4__[\"StaggeredBlockClassName\"], \"__inner \").concat(addClass),\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_4__[\"StaggeredBlockClassName\"], \"__content\"),\n        children: children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_4__[\"StaggeredBlockClassName\"], \"__media\"),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_DuotoneImage__WEBPACK_IMPORTED_MODULE_3__[\"DuotoneImage\"], _objectSpread({}, img), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, _this);\n};\n/**\n *\n * @name StaggeredBlocksSection\n * @author Peter Laxalt\n * @requires /studio/sections/StaggeredBlocksSection\n *\n */\n\n_c = StaggeredBlock;\nvar StaggeredBlocksSection = function StaggeredBlocksSection(_ref2) {\n  var hasSidebar = _ref2.hasSidebar;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles_scss__WEBPACK_IMPORTED_MODULE_4__[\"StaggeredBlocksSectionStyle\"], {\n    className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_4__[\"StaggeredBlocksSectionClassName\"], \" \").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_4__[\"StaggeredBlocksSectionClassName\"], \"--\").concat(hasSidebar ? \"has-sidebar\" : \"sans-sidebar\"),\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_4__[\"StaggeredBlocksSectionClassName\"], \"__inner\"),\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_4__[\"StaggeredBlocksSectionClassName\"], \"__block-listings\"),\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(StaggeredBlock, {\n          img: {\n            src: \"/img/headshot.jpg\",\n            aspectRatio: 1,\n            alt: \"Content\"\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"strong\", {\n              children: \"October 2014\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 79,\n              columnNumber: 15\n            }, _this), \" \\u2014 Peter started a design studio in Reno, Nevada with his Matthew McIver, called\", \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"strong\", {\n              children: \"Laxalt & McIver\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 81,\n              columnNumber: 15\n            }, _this), \". At L&M, he focused his eyes on various pursuits ranging from branding, murals, creative direction, packaging, illustration, and installations.\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(StaggeredBlock, {\n          img: {\n            src: \"/img/headshot.jpg\",\n            aspectRatio: 1,\n            alt: \"Content\"\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"strong\", {\n              children: \"October 2014\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 95,\n              columnNumber: 15\n            }, _this), \" \\u2014 Peter started a design studio in Reno, Nevada with his Matthew McIver, called\", \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"strong\", {\n              children: \"Laxalt & McIver\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 97,\n              columnNumber: 15\n            }, _this), \". At L&M, he focused his eyes on various pursuits ranging from branding, murals, creative direction, packaging, illustration, and installations.\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(StaggeredBlock, {\n          img: {\n            src: \"/img/headshot.jpg\",\n            aspectRatio: 1,\n            alt: \"Content\"\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"strong\", {\n              children: \"October 2014\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 111,\n              columnNumber: 15\n            }, _this), \" \\u2014 Peter started a design studio in Reno, Nevada with his Matthew McIver, called\", \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"strong\", {\n              children: \"Laxalt & McIver\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 113,\n              columnNumber: 15\n            }, _this), \". At L&M, he focused his eyes on various pursuits ranging from branding, murals, creative direction, packaging, illustration, and installations.\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 110,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(StaggeredBlock, {\n          img: {\n            src: \"/img/headshot.jpg\",\n            aspectRatio: 1,\n            alt: \"Content\"\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"strong\", {\n              children: \"October 2014\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 127,\n              columnNumber: 15\n            }, _this), \" \\u2014 Peter started a design studio in Reno, Nevada with his Matthew McIver, called\", \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"strong\", {\n              children: \"Laxalt & McIver\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 129,\n              columnNumber: 15\n            }, _this), \". At L&M, he focused his eyes on various pursuits ranging from branding, murals, creative direction, packaging, illustration, and installations.\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 126,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 119,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(StaggeredBlock, {\n          img: {\n            src: \"/img/headshot.jpg\",\n            aspectRatio: 1,\n            alt: \"Content\"\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"strong\", {\n              children: \"October 2014\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 143,\n              columnNumber: 15\n            }, _this), \" \\u2014 Peter started a design studio in Reno, Nevada with his Matthew McIver, called\", \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"strong\", {\n              children: \"Laxalt & McIver\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 145,\n              columnNumber: 15\n            }, _this), \". At L&M, he focused his eyes on various pursuits ranging from branding, murals, creative direction, packaging, illustration, and installations.\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 142,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 135,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(StaggeredBlock, {\n          img: {\n            src: \"/img/headshot.jpg\",\n            aspectRatio: 1,\n            alt: \"Content\"\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"strong\", {\n              children: \"October 2014\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 159,\n              columnNumber: 15\n            }, _this), \" \\u2014 Peter started a design studio in Reno, Nevada with his Matthew McIver, called\", \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"strong\", {\n              children: \"Laxalt & McIver\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 161,\n              columnNumber: 15\n            }, _this), \". At L&M, he focused his eyes on various pursuits ranging from branding, murals, creative direction, packaging, illustration, and installations.\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 158,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 151,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 64,\n    columnNumber: 5\n  }, _this);\n}; // End Component\n// __________________________________________________________________________________________\n\n_c2 = StaggeredBlocksSection;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"StaggeredBlock\");\n$RefreshReg$(_c2, \"StaggeredBlocksSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9ucy9TdGFnZ2VyZWRCbG9ja3NTZWN0aW9uL1N0YWdnZXJlZEJsb2Nrc1NlY3Rpb24udHN4P2U4OWYiXSwibmFtZXMiOlsiU3RhZ2dlcmVkQmxvY2siLCJjaGlsZHJlbiIsImltZyIsImFkZENsYXNzIiwic3R5bGUiLCJTdGFnZ2VyZWRCbG9ja0NsYXNzTmFtZSIsIlN0YWdnZXJlZEJsb2Nrc1NlY3Rpb24iLCJoYXNTaWRlYmFyIiwiU3RhZ2dlcmVkQmxvY2tzU2VjdGlvbkNsYXNzTmFtZSIsInNyYyIsImFzcGVjdFJhdGlvIiwiYWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUdBO0NBUUE7QUFDQTs7QUFlTyxJQUFNQSxjQUFvRSxHQUFHLFNBQXZFQSxjQUF1RSxPQUs5RTtBQUFBLE1BSkpDLFFBSUksUUFKSkEsUUFJSTtBQUFBLE1BSEpDLEdBR0ksUUFISkEsR0FHSTtBQUFBLE1BRkpDLFFBRUksUUFGSkEsUUFFSTtBQUFBLE1BREpDLEtBQ0ksUUFESkEsS0FDSTtBQUNKLHNCQUNFLHFFQUFDLGdFQUFEO0FBQ0UsU0FBSyxFQUFFQSxLQUFLLEdBQUdBLEtBQUgsR0FBVyxFQUR6QjtBQUVFLGFBQVMsWUFBS0Msb0VBQUwsQ0FGWDtBQUFBLDJCQUlFO0FBQUssZUFBUyxZQUFLQSxvRUFBTCxxQkFBdUNGLFFBQXZDLENBQWQ7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLFlBQUtFLG9FQUFMLGNBQWQ7QUFBQSxrQkFBd0RKO0FBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUdFO0FBQUssaUJBQVMsWUFBS0ksb0VBQUwsWUFBZDtBQUFBLCtCQUNFLHFFQUFDLDBEQUFELG9CQUFrQkgsR0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFB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O0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsMkZBRStDLEdBRi9DLGVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTJHRCxDQTlHTSxDLENBZ0hQO0FBQ0E7O01BakhhTCxzQiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2VjdGlvbnMvU3RhZ2dlcmVkQmxvY2tzU2VjdGlvbi9TdGFnZ2VyZWRCbG9ja3NTZWN0aW9uLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcmVcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENTU1Byb3BlcnRpZXMgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IER1b3RvbmVJbWFnZSwgTFhMVF9EdW90b25lSW1hZ2UgfSBmcm9tIFwiLi4vLi4vRHVvdG9uZUltYWdlXCI7XG5pbXBvcnQgeyBMWExUX1NpbXBsZUNvbnRlbnROb2RlIH0gZnJvbSBcIi4uLy4uL1NpbXBsZUNvbnRlbnRUZW1wbGF0ZVwiO1xuXG4vLyBTdHlsZXNcbmltcG9ydCB7XG4gIFN0YWdnZXJlZEJsb2NrQ2xhc3NOYW1lLFxuICBTdGFnZ2VyZWRCbG9ja3NTZWN0aW9uQ2xhc3NOYW1lLFxuICBTdGFnZ2VyZWRCbG9ja3NTZWN0aW9uU3R5bGUsXG4gIFN0YWdnZXJlZEJsb2NrU3R5bGUsXG59IGZyb20gXCIuL3N0eWxlcy5zY3NzXCI7XG5cbi8vIEJlZ2luIENvbXBvbmVudFxuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG5cbmV4cG9ydCB0eXBlIExYTFRfU2VjdGlvbl9TdGFnZ2VyZWRCbG9ja3NTZWN0aW9uID0ge1xuICBoYXNTaWRlYmFyPzogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCB0eXBlIExYTFRfU2VjdGlvbl9TdGFnZ2VyZWRCbG9jayA9IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgYWRkQ2xhc3M/OiBzdHJpbmc7XG5cbiAgc3R5bGU/OiBDU1NQcm9wZXJ0aWVzO1xuXG4gIGltZzogTFhMVF9EdW90b25lSW1hZ2U7XG59O1xuXG5leHBvcnQgY29uc3QgU3RhZ2dlcmVkQmxvY2s6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PExYTFRfU2VjdGlvbl9TdGFnZ2VyZWRCbG9jaz4gPSAoe1xuICBjaGlsZHJlbixcbiAgaW1nLFxuICBhZGRDbGFzcyxcbiAgc3R5bGUsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFN0YWdnZXJlZEJsb2NrU3R5bGVcbiAgICAgIHN0eWxlPXtzdHlsZSA/IHN0eWxlIDoge319XG4gICAgICBjbGFzc05hbWU9e2Ake1N0YWdnZXJlZEJsb2NrQ2xhc3NOYW1lfWB9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake1N0YWdnZXJlZEJsb2NrQ2xhc3NOYW1lfV9faW5uZXIgJHthZGRDbGFzc31gfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake1N0YWdnZXJlZEJsb2NrQ2xhc3NOYW1lfV9fY29udGVudGB9PntjaGlsZHJlbn08L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7U3RhZ2dlcmVkQmxvY2tDbGFzc05hbWV9X19tZWRpYWB9PlxuICAgICAgICAgIDxEdW90b25lSW1hZ2Ugey4uLmltZ30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1N0YWdnZXJlZEJsb2NrU3R5bGU+XG4gICk7XG59O1xuXG4vKipcbiAqXG4gKiBAbmFtZSBTdGFnZ2VyZWRCbG9ja3NTZWN0aW9uXG4gKiBAYXV0aG9yIFBldGVyIExheGFsdFxuICogQHJlcXVpcmVzIC9zdHVkaW8vc2VjdGlvbnMvU3RhZ2dlcmVkQmxvY2tzU2VjdGlvblxuICpcbiAqL1xuZXhwb3J0IGNvbnN0IFN0YWdnZXJlZEJsb2Nrc1NlY3Rpb246IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PExYTFRfU2VjdGlvbl9TdGFnZ2VyZWRCbG9ja3NTZWN0aW9uPiA9ICh7XG4gIGhhc1NpZGViYXIsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFN0YWdnZXJlZEJsb2Nrc1NlY3Rpb25TdHlsZVxuICAgICAgY2xhc3NOYW1lPXtgJHtTdGFnZ2VyZWRCbG9ja3NTZWN0aW9uQ2xhc3NOYW1lfSAke1N0YWdnZXJlZEJsb2Nrc1NlY3Rpb25DbGFzc05hbWV9LS0ke1xuICAgICAgICBoYXNTaWRlYmFyID8gYGhhcy1zaWRlYmFyYCA6IGBzYW5zLXNpZGViYXJgXG4gICAgICB9YH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7U3RhZ2dlcmVkQmxvY2tzU2VjdGlvbkNsYXNzTmFtZX1fX2lubmVyYH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtTdGFnZ2VyZWRCbG9ja3NTZWN0aW9uQ2xhc3NOYW1lfV9fYmxvY2stbGlzdGluZ3NgfT5cbiAgICAgICAgICA8U3RhZ2dlcmVkQmxvY2tcbiAgICAgICAgICAgIGltZz17e1xuICAgICAgICAgICAgICBzcmM6IFwiL2ltZy9oZWFkc2hvdC5qcGdcIixcbiAgICAgICAgICAgICAgYXNwZWN0UmF0aW86IDEsXG4gICAgICAgICAgICAgIGFsdDogXCJDb250ZW50XCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8c3Ryb25nPk9jdG9iZXIgMjAxNDwvc3Ryb25nPiDigJQgUGV0ZXIgc3RhcnRlZCBhIGRlc2lnbiBzdHVkaW8gaW5cbiAgICAgICAgICAgICAgUmVubywgTmV2YWRhIHdpdGggaGlzIE1hdHRoZXcgTWNJdmVyLCBjYWxsZWR7XCIgXCJ9XG4gICAgICAgICAgICAgIDxzdHJvbmc+TGF4YWx0ICYgTWNJdmVyPC9zdHJvbmc+LiBBdCBMJk0sIGhlIGZvY3VzZWQgaGlzIGV5ZXMgb25cbiAgICAgICAgICAgICAgdmFyaW91cyBwdXJzdWl0cyByYW5naW5nIGZyb20gYnJhbmRpbmcsIG11cmFscywgY3JlYXRpdmVcbiAgICAgICAgICAgICAgZGlyZWN0aW9uLCBwYWNrYWdpbmcsIGlsbHVzdHJhdGlvbiwgYW5kIGluc3RhbGxhdGlvbnMuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9TdGFnZ2VyZWRCbG9jaz5cblxuICAgICAgICAgIDxTdGFnZ2VyZWRCbG9ja1xuICAgICAgICAgICAgaW1nPXt7XG4gICAgICAgICAgICAgIHNyYzogXCIvaW1nL2hlYWRzaG90LmpwZ1wiLFxuICAgICAgICAgICAgICBhc3BlY3RSYXRpbzogMSxcbiAgICAgICAgICAgICAgYWx0OiBcIkNvbnRlbnRcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxzdHJvbmc+T2N0b2JlciAyMDE0PC9zdHJvbmc+IOKAlCBQZXRlciBzdGFydGVkIGEgZGVzaWduIHN0dWRpbyBpblxuICAgICAgICAgICAgICBSZW5vLCBOZXZhZGEgd2l0aCBoaXMgTWF0dGhldyBNY0l2ZXIsIGNhbGxlZHtcIiBcIn1cbiAgICAgICAgICAgICAgPHN0cm9uZz5MYXhhbHQgJiBNY0l2ZXI8L3N0cm9uZz4uIEF0IEwmTSwgaGUgZm9jdXNlZCBoaXMgZXllcyBvblxuICAgICAgICAgICAgICB2YXJpb3VzIHB1cnN1aXRzIHJhbmdpbmcgZnJvbSBicmFuZGluZywgbXVyYWxzLCBjcmVhdGl2ZVxuICAgICAgICAgICAgICBkaXJlY3Rpb24sIHBhY2thZ2luZywgaWxsdXN0cmF0aW9uLCBhbmQgaW5zdGFsbGF0aW9ucy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L1N0YWdnZXJlZEJsb2NrPlxuXG4gICAgICAgICAgPFN0YWdnZXJlZEJsb2NrXG4gICAgICAgICAgICBpbWc9e3tcbiAgICAgICAgICAgICAgc3JjOiBcIi9pbWcvaGVhZHNob3QuanBnXCIsXG4gICAgICAgICAgICAgIGFzcGVjdFJhdGlvOiAxLFxuICAgICAgICAgICAgICBhbHQ6IFwiQ29udGVudFwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPHN0cm9uZz5PY3RvYmVyIDIwMTQ8L3N0cm9uZz4g4oCUIFBldGVyIHN0YXJ0ZWQgYSBkZXNpZ24gc3R1ZGlvIGluXG4gICAgICAgICAgICAgIFJlbm8sIE5ldmFkYSB3aXRoIGhpcyBNYXR0aGV3IE1jSXZlciwgY2FsbGVke1wiIFwifVxuICAgICAgICAgICAgICA8c3Ryb25nPkxheGFsdCAmIE1jSXZlcjwvc3Ryb25nPi4gQXQgTCZNLCBoZSBmb2N1c2VkIGhpcyBleWVzIG9uXG4gICAgICAgICAgICAgIHZhcmlvdXMgcHVyc3VpdHMgcmFuZ2luZyBmcm9tIGJyYW5kaW5nLCBtdXJhbHMsIGNyZWF0aXZlXG4gICAgICAgICAgICAgIGRpcmVjdGlvbiwgcGFja2FnaW5nLCBpbGx1c3RyYXRpb24sIGFuZCBpbnN0YWxsYXRpb25zLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvU3RhZ2dlcmVkQmxvY2s+XG5cbiAgICAgICAgICA8U3RhZ2dlcmVkQmxvY2tcbiAgICAgICAgICAgIGltZz17e1xuICAgICAgICAgICAgICBzcmM6IFwiL2ltZy9oZWFkc2hvdC5qcGdcIixcbiAgICAgICAgICAgICAgYXNwZWN0UmF0aW86IDEsXG4gICAgICAgICAgICAgIGFsdDogXCJDb250ZW50XCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8c3Ryb25nPk9jdG9iZXIgMjAxNDwvc3Ryb25nPiDigJQgUGV0ZXIgc3RhcnRlZCBhIGRlc2lnbiBzdHVkaW8gaW5cbiAgICAgICAgICAgICAgUmVubywgTmV2YWRhIHdpdGggaGlzIE1hdHRoZXcgTWNJdmVyLCBjYWxsZWR7XCIgXCJ9XG4gICAgICAgICAgICAgIDxzdHJvbmc+TGF4YWx0ICYgTWNJdmVyPC9zdHJvbmc+LiBBdCBMJk0sIGhlIGZvY3VzZWQgaGlzIGV5ZXMgb25cbiAgICAgICAgICAgICAgdmFyaW91cyBwdXJzdWl0cyByYW5naW5nIGZyb20gYnJhbmRpbmcsIG11cmFscywgY3JlYXRpdmVcbiAgICAgICAgICAgICAgZGlyZWN0aW9uLCBwYWNrYWdpbmcsIGlsbHVzdHJhdGlvbiwgYW5kIGluc3RhbGxhdGlvbnMuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9TdGFnZ2VyZWRCbG9jaz5cblxuICAgICAgICAgIDxTdGFnZ2VyZWRCbG9ja1xuICAgICAgICAgICAgaW1nPXt7XG4gICAgICAgICAgICAgIHNyYzogXCIvaW1nL2hlYWRzaG90LmpwZ1wiLFxuICAgICAgICAgICAgICBhc3BlY3RSYXRpbzogMSxcbiAgICAgICAgICAgICAgYWx0OiBcIkNvbnRlbnRcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxzdHJvbmc+T2N0b2JlciAyMDE0PC9zdHJvbmc+IOKAlCBQZXRlciBzdGFydGVkIGEgZGVzaWduIHN0dWRpbyBpblxuICAgICAgICAgICAgICBSZW5vLCBOZXZhZGEgd2l0aCBoaXMgTWF0dGhldyBNY0l2ZXIsIGNhbGxlZHtcIiBcIn1cbiAgICAgICAgICAgICAgPHN0cm9uZz5MYXhhbHQgJiBNY0l2ZXI8L3N0cm9uZz4uIEF0IEwmTSwgaGUgZm9jdXNlZCBoaXMgZXllcyBvblxuICAgICAgICAgICAgICB2YXJpb3VzIHB1cnN1aXRzIHJhbmdpbmcgZnJvbSBicmFuZGluZywgbXVyYWxzLCBjcmVhdGl2ZVxuICAgICAgICAgICAgICBkaXJlY3Rpb24sIHBhY2thZ2luZywgaWxsdXN0cmF0aW9uLCBhbmQgaW5zdGFsbGF0aW9ucy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L1N0YWdnZXJlZEJsb2NrPlxuXG4gICAgICAgICAgPFN0YWdnZXJlZEJsb2NrXG4gICAgICAgICAgICBpbWc9e3tcbiAgICAgICAgICAgICAgc3JjOiBcIi9pbWcvaGVhZHNob3QuanBnXCIsXG4gICAgICAgICAgICAgIGFzcGVjdFJhdGlvOiAxLFxuICAgICAgICAgICAgICBhbHQ6IFwiQ29udGVudFwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPHN0cm9uZz5PY3RvYmVyIDIwMTQ8L3N0cm9uZz4g4oCUIFBldGVyIHN0YXJ0ZWQgYSBkZXNpZ24gc3R1ZGlvIGluXG4gICAgICAgICAgICAgIFJlbm8sIE5ldmFkYSB3aXRoIGhpcyBNYXR0aGV3IE1jSXZlciwgY2FsbGVke1wiIFwifVxuICAgICAgICAgICAgICA8c3Ryb25nPkxheGFsdCAmIE1jSXZlcjwvc3Ryb25nPi4gQXQgTCZNLCBoZSBmb2N1c2VkIGhpcyBleWVzIG9uXG4gICAgICAgICAgICAgIHZhcmlvdXMgcHVyc3VpdHMgcmFuZ2luZyBmcm9tIGJyYW5kaW5nLCBtdXJhbHMsIGNyZWF0aXZlXG4gICAgICAgICAgICAgIGRpcmVjdGlvbiwgcGFja2FnaW5nLCBpbGx1c3RyYXRpb24sIGFuZCBpbnN0YWxsYXRpb25zLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvU3RhZ2dlcmVkQmxvY2s+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9TdGFnZ2VyZWRCbG9ja3NTZWN0aW9uU3R5bGU+XG4gICk7XG59O1xuXG4vLyBFbmQgQ29tcG9uZW50XG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Sections/StaggeredBlocksSection/StaggeredBlocksSection.tsx\n");

/***/ })

})