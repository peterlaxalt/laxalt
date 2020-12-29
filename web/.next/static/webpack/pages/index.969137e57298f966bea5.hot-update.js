webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Sections/ProjectScrollSection/ProjectScrollSection.tsx":
/*!***************************************************************************!*\
  !*** ./components/Sections/ProjectScrollSection/ProjectScrollSection.tsx ***!
  \***************************************************************************/
/*! exports provided: ProjectScrollSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectScrollSection\", function() { return ProjectScrollSection; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants_site_Settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/site/Settings */ \"./constants/site/Settings.tsx\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/Theme */ \"./constants/Theme.tsx\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.scss */ \"./components/Sections/ProjectScrollSection/styles.scss.tsx\");\n\n\nvar _jsxFileName = \"/Users/pflaxalt/Repositories/_pfl/web/components/Sections/ProjectScrollSection/ProjectScrollSection.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n// Core\n\n\n // Components\n// Styles\n\n // Begin Types\n// __________________________________________________________________________________________\n// Begin Component\n// __________________________________________________________________________________________\n\nvar calcDynamicHeight = function calcDynamicHeight(objectWidth) {\n  var vw = window.innerWidth;\n  var vh = window.innerHeight;\n  return objectWidth - vw + vh + 150;\n};\n\nvar handleDynamicHeight = function handleDynamicHeight(ref, setDynamicHeight) {\n  var objectWidth = ref.current.scrollWidth;\n  var dynamicHeight = calcDynamicHeight(objectWidth);\n  setDynamicHeight(dynamicHeight);\n};\n\nvar applyScrollListener = function applyScrollListener(ref, setTranslateX) {\n  window.addEventListener(\"scroll\", function () {\n    var offsetTop = ref && ref.current ? -ref.current.offsetTop : 0;\n    setTranslateX(offsetTop);\n  });\n};\n\nvar ProjectScrollSection = function ProjectScrollSection(_ref) {\n  _s();\n\n  var _ref$addClass = _ref.addClass,\n      addClass = _ref$addClass === void 0 ? \"\" : _ref$addClass,\n      _ref$hasSidebar = _ref.hasSidebar,\n      hasSidebar = _ref$hasSidebar === void 0 ? false : _ref$hasSidebar,\n      _ref$style = _ref.style,\n      style = _ref$style === void 0 ? {} : _ref$style;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      dynamicHeight = _useState[0],\n      setDynamicHeight = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      translateX = _useState2[0],\n      setTranslateX = _useState2[1];\n\n  var containerRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef();\n  var objectRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef();\n\n  var resizeHandler = function resizeHandler() {\n    handleDynamicHeight(objectRef, setDynamicHeight);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    handleDynamicHeight(objectRef, setDynamicHeight);\n    window.addEventListener(\"resize\", resizeHandler);\n    applyScrollListener(containerRef, setTranslateX);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_scss__WEBPACK_IMPORTED_MODULE_4__[\"ProjectScrollSectionStyle\"], {\n    style: style,\n    className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_4__[\"ProjectScrollSectionClassName\"], \" \").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_4__[\"ProjectScrollSectionClassName\"], \"--\").concat(hasSidebar ? \"has-sidebar\" : \"\", \" \").concat(addClass && addClass),\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_scss__WEBPACK_IMPORTED_MODULE_4__[\"ProjectScrollTallOuterContainerStyle\"] // @ts-ignore\n    , {\n      dynamicHeight: dynamicHeight,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_4__[\"ProjectScrollSectionClassName\"], \"__sticky-inner\"),\n        ref: containerRef,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_scss__WEBPACK_IMPORTED_MODULE_4__[\"ProjectScrollHorizontalTranslateContainerStyle\"] // @ts-ignore\n        , {\n          translateX: translateX,\n          ref: objectRef,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_4__[\"ProjectScrollSectionClassName\"], \"__horizontal-section\"),\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_4__[\"ProjectScrollSectionClassName\"], \"__content-wrapper\"),\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                style: {\n                  width: \"100vw\"\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 93,\n                columnNumber: 17\n              }, _this), _constants_site_Settings__WEBPACK_IMPORTED_MODULE_2__[\"SiteProjects\"].map(function (item, idx) {\n                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  style: {\n                    width: \"50vw\",\n                    flexShrink: 0,\n                    marginRight: \"50px\",\n                    position: \"relative\",\n                    mixBlendMode: \"multiply\"\n                  },\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                    style: {\n                      width: \"100%\",\n                      height: \"100%\",\n                      display: \"grid\",\n                      mixBlendMode: \"multiply\",\n                      placeItems: \"center\"\n                    },\n                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                      src: item.cover,\n                      style: {\n                        border: \"2px solid \".concat(_constants_Theme__WEBPACK_IMPORTED_MODULE_3__[\"Theme\"].Color.varBackground),\n                        maxWidth: \"100%\",\n                        width: \"100%\",\n                        mixBlendMode: \"multiply\"\n                      }\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 115,\n                      columnNumber: 25\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 106,\n                    columnNumber: 23\n                  }, _this)\n                }, idx, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 96,\n                  columnNumber: 21\n                }, _this);\n              }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                style: {\n                  width: \"100vw\"\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 128,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 92,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 75,\n    columnNumber: 5\n  }, _this);\n}; // End Component\n// ______________________________________________________________________________\n\n_s(ProjectScrollSection, \"BE/LJu4+3g1pPawIZY0xWA752ug=\");\n\n_c = ProjectScrollSection;\n\nvar _c;\n\n$RefreshReg$(_c, \"ProjectScrollSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9ucy9Qcm9qZWN0U2Nyb2xsU2VjdGlvbi9Qcm9qZWN0U2Nyb2xsU2VjdGlvbi50c3g/ZDViYyJdLCJuYW1lcyI6WyJjYWxjRHluYW1pY0hlaWdodCIsIm9iamVjdFdpZHRoIiwidnciLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwidmgiLCJpbm5lckhlaWdodCIsImhhbmRsZUR5bmFtaWNIZWlnaHQiLCJyZWYiLCJzZXREeW5hbWljSGVpZ2h0IiwiY3VycmVudCIsInNjcm9sbFdpZHRoIiwiZHluYW1pY0hlaWdodCIsImFwcGx5U2Nyb2xsTGlzdGVuZXIiLCJzZXRUcmFuc2xhdGVYIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9mZnNldFRvcCIsIlByb2plY3RTY3JvbGxTZWN0aW9uIiwiYWRkQ2xhc3MiLCJoYXNTaWRlYmFyIiwic3R5bGUiLCJ1c2VTdGF0ZSIsInRyYW5zbGF0ZVgiLCJjb250YWluZXJSZWYiLCJSZWFjdCIsInVzZVJlZiIsIm9iamVjdFJlZiIsInJlc2l6ZUhhbmRsZXIiLCJ1c2VFZmZlY3QiLCJQcm9qZWN0U2Nyb2xsU2VjdGlvbkNsYXNzTmFtZSIsIndpZHRoIiwiU2l0ZVByb2plY3RzIiwibWFwIiwiaXRlbSIsImlkeCIsImZsZXhTaHJpbmsiLCJtYXJnaW5SaWdodCIsInBvc2l0aW9uIiwibWl4QmxlbmRNb2RlIiwiaGVpZ2h0IiwiZGlzcGxheSIsInBsYWNlSXRlbXMiLCJjb3ZlciIsImJvcmRlciIsIlRoZW1lIiwiQ29sb3IiLCJ2YXJCYWNrZ3JvdW5kIiwibWF4V2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtDQUdBO0FBRUE7O0NBV0E7QUFDQTtBQUVBO0FBQ0E7O0FBSUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxXQUFELEVBQXlCO0FBQ2pELE1BQU1DLEVBQUUsR0FBR0MsTUFBTSxDQUFDQyxVQUFsQjtB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Y3Rpb25zL1Byb2plY3RTY3JvbGxTZWN0aW9uL1Byb2plY3RTY3JvbGxTZWN0aW9uLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcmVcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBMWExUX1Byb2plY3QsIFNpdGVQcm9qZWN0cyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvc2l0ZS9TZXR0aW5nc1wiO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL1RoZW1lXCI7XG5cbi8vIENvbXBvbmVudHNcblxuLy8gU3R5bGVzXG5pbXBvcnQge1xuICBQcm9qZWN0U2Nyb2xsQ29udGVudFdyYXBwZXJTdHlsZSxcbiAgUHJvamVjdFNjcm9sbEhvcml6b250YWxTZWN0aW9uU3R5bGUsXG4gIFByb2plY3RTY3JvbGxIb3Jpem9udGFsVHJhbnNsYXRlQ29udGFpbmVyU3R5bGUsXG4gIFByb2plY3RTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lLFxuICBQcm9qZWN0U2Nyb2xsU2VjdGlvblN0eWxlLFxuICBQcm9qZWN0U2Nyb2xsU3RpY2t5SW5uZXJDb250YWluZXJTdHlsZSxcbiAgUHJvamVjdFNjcm9sbFRhbGxPdXRlckNvbnRhaW5lclN0eWxlLFxufSBmcm9tIFwiLi9zdHlsZXMuc2Nzc1wiO1xuXG4vLyBCZWdpbiBUeXBlc1xuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG5cbi8vIEJlZ2luIENvbXBvbmVudFxuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG5cblxuXG5jb25zdCBjYWxjRHluYW1pY0hlaWdodCA9IChvYmplY3RXaWR0aDogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IHZ3ID0gd2luZG93LmlubmVyV2lkdGg7XG4gIGNvbnN0IHZoID0gd2luZG93LmlubmVySGVpZ2h0O1xuICByZXR1cm4gb2JqZWN0V2lkdGggLSB2dyArIHZoICsgMTUwO1xufTtcblxuY29uc3QgaGFuZGxlRHluYW1pY0hlaWdodCA9IChcbiAgcmVmOiBSZWFjdC5SZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+LFxuICBzZXREeW5hbWljSGVpZ2h0OiAoZHluYW1pY0hlaWdodDogbnVtYmVyKSA9PiB2b2lkXG4pID0+IHtcbiAgY29uc3Qgb2JqZWN0V2lkdGg6IG51bWJlciA9IHJlZi5jdXJyZW50LnNjcm9sbFdpZHRoO1xuICBjb25zdCBkeW5hbWljSGVpZ2h0OiBudW1iZXIgPSBjYWxjRHluYW1pY0hlaWdodChvYmplY3RXaWR0aCk7XG4gIHNldER5bmFtaWNIZWlnaHQoZHluYW1pY0hlaWdodCk7XG59O1xuXG5jb25zdCBhcHBseVNjcm9sbExpc3RlbmVyID0gKFxuICByZWY6IFJlYWN0LlJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD4sXG4gIHNldFRyYW5zbGF0ZVg6ICh0cmFuc2xhdGVYOiBudW1iZXIpID0+IHZvaWRcbikgPT4ge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG4gICAgY29uc3Qgb2Zmc2V0VG9wOiBudW1iZXIgPSByZWYgJiYgcmVmLmN1cnJlbnQgPyAtcmVmLmN1cnJlbnQub2Zmc2V0VG9wIDogMDtcbiAgICBzZXRUcmFuc2xhdGVYKG9mZnNldFRvcCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IFByb2plY3RTY3JvbGxTZWN0aW9uID0gKHtcbiAgYWRkQ2xhc3MgPSBcIlwiLFxuICBoYXNTaWRlYmFyID0gZmFsc2UsXG4gIHN0eWxlID0ge30sXG59KSA9PiB7XG4gIGNvbnN0IFtkeW5hbWljSGVpZ2h0LCBzZXREeW5hbWljSGVpZ2h0XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbdHJhbnNsYXRlWCwgc2V0VHJhbnNsYXRlWF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBjb250YWluZXJSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KCk7XG4gIGNvbnN0IG9iamVjdFJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcblxuICBjb25zdCByZXNpemVIYW5kbGVyID0gKCkgPT4ge1xuICAgIGhhbmRsZUR5bmFtaWNIZWlnaHQob2JqZWN0UmVmLCBzZXREeW5hbWljSGVpZ2h0KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGhhbmRsZUR5bmFtaWNIZWlnaHQob2JqZWN0UmVmLCBzZXREeW5hbWljSGVpZ2h0KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCByZXNpemVIYW5kbGVyKTtcbiAgICBhcHBseVNjcm9sbExpc3RlbmVyKGNvbnRhaW5lclJlZiwgc2V0VHJhbnNsYXRlWCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxQcm9qZWN0U2Nyb2xsU2VjdGlvblN0eWxlXG4gICAgICBzdHlsZT17c3R5bGV9XG4gICAgICBjbGFzc05hbWU9e2Ake1Byb2plY3RTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lfSAke1Byb2plY3RTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lfS0tJHtcbiAgICAgICAgaGFzU2lkZWJhciA/IFwiaGFzLXNpZGViYXJcIiA6IFwiXCJcbiAgICAgIH0gJHthZGRDbGFzcyAmJiBhZGRDbGFzc31gfVxuICAgID5cbiAgICAgIDxQcm9qZWN0U2Nyb2xsVGFsbE91dGVyQ29udGFpbmVyU3R5bGVcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBkeW5hbWljSGVpZ2h0PXtkeW5hbWljSGVpZ2h0fVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7UHJvamVjdFNjcm9sbFNlY3Rpb25DbGFzc05hbWV9X19zdGlja3ktaW5uZXJgfSByZWY9e2NvbnRhaW5lclJlZn0+XG4gICAgICAgICAgPFByb2plY3RTY3JvbGxIb3Jpem9udGFsVHJhbnNsYXRlQ29udGFpbmVyU3R5bGVcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHRyYW5zbGF0ZVg9e3RyYW5zbGF0ZVh9XG4gICAgICAgICAgICByZWY9e29iamVjdFJlZn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7UHJvamVjdFNjcm9sbFNlY3Rpb25DbGFzc05hbWV9X19ob3Jpem9udGFsLXNlY3Rpb25gfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake1Byb2plY3RTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lfV9fY29udGVudC13cmFwcGVyYH0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDB2d1wiIH19IC8+XG4gICAgICAgICAgICAgICAge1NpdGVQcm9qZWN0cy5tYXAoKGl0ZW06IExYTFRfUHJvamVjdCwgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNTB2d1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleFNocmluazogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjUwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaXhCbGVuZE1vZGU6IFwibXVsdGlwbHlcIixcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1peEJsZW5kTW9kZTogXCJtdWx0aXBseVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZUl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5jb3Zlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IGAycHggc29saWQgJHtUaGVtZS5Db2xvci52YXJCYWNrZ3JvdW5kfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaXhCbGVuZE1vZGU6IFwibXVsdGlwbHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDB2d1wiIH19IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Qcm9qZWN0U2Nyb2xsSG9yaXpvbnRhbFRyYW5zbGF0ZUNvbnRhaW5lclN0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUHJvamVjdFNjcm9sbFRhbGxPdXRlckNvbnRhaW5lclN0eWxlPlxuICAgIDwvUHJvamVjdFNjcm9sbFNlY3Rpb25TdHlsZT5cbiAgKTtcbn07XG5cbi8vIEVuZCBDb21wb25lbnRcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Sections/ProjectScrollSection/ProjectScrollSection.tsx\n");

/***/ })

})