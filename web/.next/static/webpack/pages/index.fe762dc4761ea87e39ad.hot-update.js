webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Sections/ProjectScrollSection/ProjectScrollSection.tsx":
/*!***************************************************************************!*\
  !*** ./components/Sections/ProjectScrollSection/ProjectScrollSection.tsx ***!
  \***************************************************************************/
/*! exports provided: ProjectScrollSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectScrollSection\", function() { return ProjectScrollSection; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants_site_Settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/site/Settings */ \"./constants/site/Settings.tsx\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/Theme */ \"./constants/Theme.tsx\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.scss */ \"./components/Sections/ProjectScrollSection/styles.scss.tsx\");\n\n\nvar _jsxFileName = \"/Users/pflaxalt/Repositories/_pfl/web/components/Sections/ProjectScrollSection/ProjectScrollSection.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n// Core\n\n\n // Components\n// Styles\n\n // Begin Types\n// __________________________________________________________________________________________\n\n// Begin Component\n// __________________________________________________________________________________________\nvar ProjectScrollSection = function ProjectScrollSection(_ref) {\n  _s();\n\n  var _ref$addClass = _ref.addClass,\n      addClass = _ref$addClass === void 0 ? \"\" : _ref$addClass;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      dynamicHeight = _useState[0],\n      setDynamicHeight = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      translateX = _useState2[0],\n      setTranslateX = _useState2[1];\n\n  var containerRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef();\n  var objectRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef();\n\n  var calcDynamicHeight = function calcDynamicHeight(objectWidth) {\n    var vw = window.innerWidth;\n    var vh = window.innerHeight;\n    return objectWidth - vw + vh + 150;\n  };\n\n  var handleDynamicHeight = function handleDynamicHeight(ref, setDynamicHeight) {\n    var objectWidth = ref.current.scrollWidth;\n    var dynamicHeight = calcDynamicHeight(objectWidth);\n    setDynamicHeight(dynamicHeight);\n  };\n\n  var applyScrollListener = function applyScrollListener(ref, setTranslateX) {\n    window.addEventListener(\"scroll\", function () {\n      var offsetTop = ref && ref.current ? -ref.current.offsetTop : 0;\n      setTranslateX(offsetTop);\n    });\n  };\n\n  var resizeHandler = function resizeHandler() {\n    handleDynamicHeight(objectRef, setDynamicHeight);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    handleDynamicHeight(objectRef, setDynamicHeight);\n    window.addEventListener(\"resize\", resizeHandler);\n    applyScrollListener(containerRef, setTranslateX);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_scss__WEBPACK_IMPORTED_MODULE_4__[\"ProjectScrollSectionStyle\"], {\n    className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_4__[\"ProjectScrollSectionClassName\"], \" \").concat(addClass && addClass),\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_4__[\"ProjectScrollSectionClassName\"], \"__outer\"),\n      style: {\n        height: \"\".concat(dynamicHeight, \"px\")\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_4__[\"ProjectScrollSectionClassName\"], \"__sticky-wrapper\"),\n        ref: containerRef,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_4__[\"ProjectScrollSectionClassName\"], \"__x-translate-wrapper\"),\n          style: {\n            transform: \"translateX(\".concat(translateX, \"px)\")\n          },\n          ref: objectRef,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_4__[\"ProjectScrollSectionClassName\"], \"__horizontal-wrapper\"),\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_4__[\"ProjectScrollSectionClassName\"], \"__content-wrapper\"),\n              children: _constants_site_Settings__WEBPACK_IMPORTED_MODULE_2__[\"SiteProjects\"].map(function (item, idx) {\n                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  style: {\n                    width: \"50vw\",\n                    flexShrink: 0,\n                    marginRight: \"50px\",\n                    position: \"relative\",\n                    mixBlendMode: \"multiply\"\n                  },\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                    style: {\n                      width: \"100%\",\n                      height: \"100%\",\n                      display: \"grid\",\n                      mixBlendMode: \"multiply\",\n                      placeItems: \"center\"\n                    },\n                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                      src: item.cover,\n                      style: {\n                        border: \"2px solid \".concat(_constants_Theme__WEBPACK_IMPORTED_MODULE_3__[\"Theme\"].Color.varBackground),\n                        maxWidth: \"100%\",\n                        width: \"100%\",\n                        mixBlendMode: \"multiply\"\n                      }\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 125,\n                      columnNumber: 25\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 116,\n                    columnNumber: 23\n                  }, _this)\n                }, idx, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 106,\n                  columnNumber: 21\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 101,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 96,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 72,\n    columnNumber: 5\n  }, _this);\n}; // End Component\n// ______________________________________________________________________________\n\n_s(ProjectScrollSection, \"BE/LJu4+3g1pPawIZY0xWA752ug=\");\n\n_c = ProjectScrollSection;\n\nvar _c;\n\n$RefreshReg$(_c, \"ProjectScrollSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9ucy9Qcm9qZWN0U2Nyb2xsU2VjdGlvbi9Qcm9qZWN0U2Nyb2xsU2VjdGlvbi50c3g/ZDViYyJdLCJuYW1lcyI6WyJQcm9qZWN0U2Nyb2xsU2VjdGlvbiIsImFkZENsYXNzIiwidXNlU3RhdGUiLCJkeW5hbWljSGVpZ2h0Iiwic2V0RHluYW1pY0hlaWdodCIsInRyYW5zbGF0ZVgiLCJzZXRUcmFuc2xhdGVYIiwiY29udGFpbmVyUmVmIiwiUmVhY3QiLCJ1c2VSZWYiLCJvYmplY3RSZWYiLCJjYWxjRHluYW1pY0hlaWdodCIsIm9iamVjdFdpZHRoIiwidnciLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwidmgiLCJpbm5lckhlaWdodCIsImhhbmRsZUR5bmFtaWNIZWlnaHQiLCJyZWYiLCJjdXJyZW50Iiwic2Nyb2xsV2lkdGgiLCJhcHBseVNjcm9sbExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9mZnNldFRvcCIsInJlc2l6ZUhhbmRsZXIiLCJ1c2VFZmZlY3QiLCJQcm9qZWN0U2Nyb2xsU2VjdGlvbkNsYXNzTmFtZSIsImhlaWdodCIsInRyYW5zZm9ybSIsIlNpdGVQcm9qZWN0cyIsIm1hcCIsIml0ZW0iLCJpZHgiLCJ3aWR0aCIsImZsZXhTaHJpbmsiLCJtYXJnaW5SaWdodCIsInBvc2l0aW9uIiwibWl4QmxlbmRNb2RlIiwiZGlzcGxheSIsInBsYWNlSXRlbXMiLCJjb3ZlciIsImJvcmRlciIsIlRoZW1lIiwiQ29sb3IiLCJ2YXJCYWNrZ3JvdW5kIiwibWF4V2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtDQUdBO0FBRUE7O0NBTUE7QUFDQTs7QUFRQTtBQUNBO0FBRU8sSUFBTUEsb0JBQXdFLEdBQUcsU0FBM0VBLG9CQUEyRSxPQUVsRjtBQUFBOztBQUFBLDJCQURKQyxRQUNJO0FBQUEsTUFESkEsUUFDSSw4QkFETyxFQUNQOztBQUFBLGtCQUNz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QUEseUNBVUU7QUFDRSx5QkFBSyxFQUFFO0FBQ0xKLDJCQUFLLEVBQUUsTUFERjtBQUVMTiw0QkFBTSxFQUFFLE1BRkg7QUFHTFcsNkJBQU8sRUFBRSxNQUhKO0FBSUxELGtDQUFZLEVBQUUsVUFKVDtBQUtMRSxnQ0FBVSxFQUFFO0FBTFAscUJBRFQ7QUFBQSwyQ0FTRTtBQUNFLHlCQUFHLEVBQUVSLElBQUksQ0FBQ1MsS0FEWjtBQUVFLDJCQUFLLEVBQUU7QUFDTEMsOEJBQU0sc0JBQWVDLHNEQUFLLENBQUNDLEtBQU4sQ0FBWUMsYUFBM0IsQ0FERDtBQUVMQyxnQ0FBUSxFQUFFLE1BRkw7QUFHTFosNkJBQUssRUFBRSxNQUhGO0FBSUxJLG9DQUFZLEVBQUU7QUFKVDtBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVkYsbUJBQ09MLEdBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERjtBQWdDRCxlQWpDQTtBQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMEVELENBdEhNLEMsQ0F3SFA7QUFDQTs7R0F6SGFqQyxvQjs7S0FBQUEsb0IiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlY3Rpb25zL1Byb2plY3RTY3JvbGxTZWN0aW9uL1Byb2plY3RTY3JvbGxTZWN0aW9uLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcmVcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBMWExUX1Byb2plY3QsIFNpdGVQcm9qZWN0cyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvc2l0ZS9TZXR0aW5nc1wiO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL1RoZW1lXCI7XG5cbi8vIENvbXBvbmVudHNcblxuLy8gU3R5bGVzXG5pbXBvcnQge1xuICBQcm9qZWN0U2Nyb2xsU2VjdGlvbkNsYXNzTmFtZSxcbiAgUHJvamVjdFNjcm9sbFNlY3Rpb25TdHlsZSxcbn0gZnJvbSBcIi4vc3R5bGVzLnNjc3NcIjtcblxuLy8gQmVnaW4gVHlwZXNcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuXG5leHBvcnQgdHlwZSBMWExUX1Byb2plY3RTY3JvbGxTZWN0aW9uID0ge1xuICBhZGRDbGFzcz86IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIExYTFRfUHJvamVjdFNjcm9sbENhcmQgPSBMWExUX1Byb2plY3QgJiB7fTtcblxuLy8gQmVnaW4gQ29tcG9uZW50XG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cblxuZXhwb3J0IGNvbnN0IFByb2plY3RTY3JvbGxTZWN0aW9uOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxMWExUX1Byb2plY3RTY3JvbGxTZWN0aW9uPiA9ICh7XG4gIGFkZENsYXNzID0gXCJcIixcbn0pID0+IHtcbiAgY29uc3QgW2R5bmFtaWNIZWlnaHQsIHNldER5bmFtaWNIZWlnaHRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFt0cmFuc2xhdGVYLCBzZXRUcmFuc2xhdGVYXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IGNvbnRhaW5lclJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcbiAgY29uc3Qgb2JqZWN0UmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xuXG4gIGNvbnN0IGNhbGNEeW5hbWljSGVpZ2h0ID0gKG9iamVjdFdpZHRoOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCB2dyA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGNvbnN0IHZoID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIHJldHVybiBvYmplY3RXaWR0aCAtIHZ3ICsgdmggKyAxNTA7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRHluYW1pY0hlaWdodCA9IChcbiAgICByZWY6IFJlYWN0LlJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD4sXG4gICAgc2V0RHluYW1pY0hlaWdodDogKGR5bmFtaWNIZWlnaHQ6IG51bWJlcikgPT4gdm9pZFxuICApID0+IHtcbiAgICBjb25zdCBvYmplY3RXaWR0aDogbnVtYmVyID0gcmVmLmN1cnJlbnQuc2Nyb2xsV2lkdGg7XG4gICAgY29uc3QgZHluYW1pY0hlaWdodDogbnVtYmVyID0gY2FsY0R5bmFtaWNIZWlnaHQob2JqZWN0V2lkdGgpO1xuICAgIHNldER5bmFtaWNIZWlnaHQoZHluYW1pY0hlaWdodCk7XG4gIH07XG5cbiAgY29uc3QgYXBwbHlTY3JvbGxMaXN0ZW5lciA9IChcbiAgICByZWY6IFJlYWN0LlJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD4sXG4gICAgc2V0VHJhbnNsYXRlWDogKHRyYW5zbGF0ZVg6IG51bWJlcikgPT4gdm9pZFxuICApID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG4gICAgICBjb25zdCBvZmZzZXRUb3A6IG51bWJlciA9IHJlZiAmJiByZWYuY3VycmVudCA/IC1yZWYuY3VycmVudC5vZmZzZXRUb3AgOiAwO1xuICAgICAgc2V0VHJhbnNsYXRlWChvZmZzZXRUb3ApO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlc2l6ZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgaGFuZGxlRHluYW1pY0hlaWdodChvYmplY3RSZWYsIHNldER5bmFtaWNIZWlnaHQpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaGFuZGxlRHluYW1pY0hlaWdodChvYmplY3RSZWYsIHNldER5bmFtaWNIZWlnaHQpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHJlc2l6ZUhhbmRsZXIpO1xuICAgIGFwcGx5U2Nyb2xsTGlzdGVuZXIoY29udGFpbmVyUmVmLCBzZXRUcmFuc2xhdGVYKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPFByb2plY3RTY3JvbGxTZWN0aW9uU3R5bGVcbiAgICAgIGNsYXNzTmFtZT17YCR7UHJvamVjdFNjcm9sbFNlY3Rpb25DbGFzc05hbWV9ICR7YWRkQ2xhc3MgJiYgYWRkQ2xhc3N9YH1cbiAgICA+XG4gICAgICB7LyogX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gKi99XG4gICAgICB7LyogT3V0ZXIgQ29udGFpbmVyIHdpdGggRHluYW1pYyBIZWlnaHQgKi99XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YCR7UHJvamVjdFNjcm9sbFNlY3Rpb25DbGFzc05hbWV9X19vdXRlcmB9XG4gICAgICAgIHN0eWxlPXt7IGhlaWdodDogYCR7ZHluYW1pY0hlaWdodH1weGAgfX1cbiAgICAgID5cbiAgICAgICAgey8qIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fICovfVxuICAgICAgICB7LyogU3RpY2t5IFdyYXBwZXIgKi99XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake1Byb2plY3RTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lfV9fc3RpY2t5LXdyYXBwZXJgfVxuICAgICAgICAgIHJlZj17Y29udGFpbmVyUmVmfVxuICAgICAgICA+XG4gICAgICAgICAgey8qIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fICovfVxuICAgICAgICAgIHsvKiBUcmFuc2xhdGlvbiBXcmFwcGVyICovfVxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7UHJvamVjdFNjcm9sbFNlY3Rpb25DbGFzc05hbWV9X194LXRyYW5zbGF0ZS13cmFwcGVyYH1cbiAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHt0cmFuc2xhdGVYfXB4KWAgfX1cbiAgICAgICAgICAgIHJlZj17b2JqZWN0UmVmfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsvKiBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAqL31cbiAgICAgICAgICAgIHsvKiBIb3Jpem9udGFsIFdyYXBwZXIgKi99XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7UHJvamVjdFNjcm9sbFNlY3Rpb25DbGFzc05hbWV9X19ob3Jpem9udGFsLXdyYXBwZXJgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7LyogX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gKi99XG4gICAgICAgICAgICAgIHsvKiBDb250ZW50IFdyYXBwZXIgKi99XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1Byb2plY3RTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lfV9fY29udGVudC13cmFwcGVyYH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtTaXRlUHJvamVjdHMubWFwKChpdGVtOiBMWExUX1Byb2plY3QsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjUwdndcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCI1MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWl4QmxlbmRNb2RlOiBcIm11bHRpcGx5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtaXhCbGVuZE1vZGU6IFwibXVsdGlwbHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VJdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uY292ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBgMnB4IHNvbGlkICR7VGhlbWUuQ29sb3IudmFyQmFja2dyb3VuZH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWl4QmxlbmRNb2RlOiBcIm11bHRpcGx5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvUHJvamVjdFNjcm9sbFNlY3Rpb25TdHlsZT5cbiAgKTtcbn07XG5cbi8vIEVuZCBDb21wb25lbnRcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Sections/ProjectScrollSection/ProjectScrollSection.tsx\n");

/***/ })

})