webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Sections/HorizontalScrollSection/HorizontalScrollSection.jsx":
/*!*********************************************************************************!*\
  !*** ./components/Sections/HorizontalScrollSection/HorizontalScrollSection.jsx ***!
  \*********************************************************************************/
/*! exports provided: HorizontalScrollSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HorizontalScrollSection\", function() { return HorizontalScrollSection; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.scss */ \"./components/Sections/HorizontalScrollSection/styles.scss.tsx\");\n\n\nvar _jsxFileName = \"/Users/pflaxalt/Repositories/_pfl/web/components/Sections/HorizontalScrollSection/HorizontalScrollSection.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n// Core\n\n // Components\n// Styles\n\n // Begin Types\n// __________________________________________________________________________________________\n// Begin Component\n// __________________________________________________________________________________________\n\nvar TallOuterContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.attrs(function (_ref) {\n  var dynamicHeight = _ref.dynamicHeight;\n  return {\n    style: {\n      height: \"\".concat(dynamicHeight, \"px\")\n    }\n  };\n}).withConfig({\n  displayName: \"HorizontalScrollSection__TallOuterContainer\",\n  componentId: \"vnj7nh-0\"\n})([\"position:relative;width:100%;\"]);\n_c = TallOuterContainer;\nvar StickyInnerContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"HorizontalScrollSection__StickyInnerContainer\",\n  componentId: \"vnj7nh-1\"\n})([\"position:sticky;top:0;height:100vh;width:100%;overflow-x:hidden;\"]);\n_c2 = StickyInnerContainer;\nvar HorizontalTranslateContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.attrs(function (_ref2) {\n  var translateX = _ref2.translateX;\n  return {\n    style: {\n      transform: \"translateX(\".concat(translateX, \"px)\")\n    }\n  };\n}).withConfig({\n  displayName: \"HorizontalScrollSection__HorizontalTranslateContainer\",\n  componentId: \"vnj7nh-2\"\n})([\"position:absolute;height:100%;transition:transform .5s ease-out;will-change:transform;\"]);\n_c3 = HorizontalTranslateContainer;\nvar ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"HorizontalScrollSection__ContentWrapper\",\n  componentId: \"vnj7nh-3\"\n})([\"position:relative;height:100vh;padding:0;display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:center;\"]);\n_c4 = ContentWrapper;\nvar HorizontalSection = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].section.withConfig({\n  displayName: \"HorizontalScrollSection__HorizontalSection\",\n  componentId: \"vnj7nh-4\"\n})([\"position:relative;width:100%;min-height:100vh;\"]);\n_c5 = HorizontalSection;\n\nvar calcDynamicHeight = function calcDynamicHeight(objectWidth) {\n  var vw = window.innerWidth;\n  var vh = window.innerHeight;\n  return objectWidth - vw + vh + 150;\n};\n\nvar handleDynamicHeight = function handleDynamicHeight(ref, setDynamicHeight) {\n  var objectWidth = ref.current.scrollWidth;\n  var dynamicHeight = calcDynamicHeight(objectWidth);\n  setDynamicHeight(dynamicHeight);\n};\n\nvar applyScrollListener = function applyScrollListener(ref, setTranslateX) {\n  window.addEventListener(\"scroll\", function () {\n    var offsetTop = ref && ref.current ? -ref.current.offsetTop : 0;\n    setTranslateX(offsetTop);\n  });\n};\n\nvar HorizontalScrollSection = function HorizontalScrollSection(_ref3) {\n  _s();\n\n  var _ref3$addClass = _ref3.addClass,\n      addClass = _ref3$addClass === void 0 ? \"\" : _ref3$addClass,\n      children = _ref3.children,\n      _ref3$style = _ref3.style,\n      style = _ref3$style === void 0 ? \"\" : _ref3$style;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      dynamicHeight = _useState[0],\n      setDynamicHeight = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      translateX = _useState2[0],\n      setTranslateX = _useState2[1];\n\n  var containerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  var objectRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n\n  var resizeHandler = function resizeHandler() {\n    handleDynamicHeight(objectRef, setDynamicHeight);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    handleDynamicHeight(objectRef, setDynamicHeight);\n    window.addEventListener(\"resize\", resizeHandler);\n    applyScrollListener(containerRef, setTranslateX);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"HorizontalScrollSectionStyle\"], {\n    className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"HorizontalScrollSectionClassName\"], \" \").concat(addClass && addClass),\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(TallOuterContainer, {\n      dynamicHeight: dynamicHeight,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(StickyInnerContainer, {\n        ref: containerRef,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(HorizontalTranslateContainer, {\n          translateX: translateX,\n          ref: objectRef,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(HorizontalSection, {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ContentWrapper, {\n              children: children\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 107,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 106,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 100,\n    columnNumber: 5\n  }, _this);\n}; // End Component\n// ______________________________________________________________________________\n\n_s(HorizontalScrollSection, \"BE/LJu4+3g1pPawIZY0xWA752ug=\");\n\n_c6 = HorizontalScrollSection;\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"TallOuterContainer\");\n$RefreshReg$(_c2, \"StickyInnerContainer\");\n$RefreshReg$(_c3, \"HorizontalTranslateContainer\");\n$RefreshReg$(_c4, \"ContentWrapper\");\n$RefreshReg$(_c5, \"HorizontalSection\");\n$RefreshReg$(_c6, \"HorizontalScrollSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9ucy9Ib3Jpem9udGFsU2Nyb2xsU2VjdGlvbi9Ib3Jpem9udGFsU2Nyb2xsU2VjdGlvbi5qc3g/YTlhNCJdLCJuYW1lcyI6WyJUYWxsT3V0ZXJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJhdHRycyIsImR5bmFtaWNIZWlnaHQiLCJzdHlsZSIsImhlaWdodCIsIlN0aWNreUlubmVyQ29udGFpbmVyIiwiSG9yaXpvbnRhbFRyYW5zbGF0ZUNvbnRhaW5lciIsInRyYW5zbGF0ZVgiLCJ0cmFuc2Zvcm0iLCJDb250ZW50V3JhcHBlciIsIkhvcml6b250YWxTZWN0aW9uIiwic2VjdGlvbiIsImNhbGNEeW5hbWljSGVpZ2h0Iiwib2JqZWN0V2lkdGgiLCJ2dyIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJ2aCIsImlubmVySGVpZ2h0IiwiaGFuZGxlRHluYW1pY0hlaWdodCIsInJlZiIsInNldER5bmFtaWNIZWlnaHQiLCJjdXJyZW50Iiwic2Nyb2xsV2lkdGgiLCJhcHBseVNjcm9sbExpc3RlbmVyIiwic2V0VHJhbnNsYXRlWCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvZmZzZXRUb3AiLCJIb3Jpem9udGFsU2Nyb2xsU2VjdGlvbiIsImFkZENsYXNzIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImNvbnRhaW5lclJlZiIsInVzZVJlZiIsIm9iamVjdFJlZiIsInJlc2l6ZUhhbmRsZXIiLCJ1c2VFZmZlY3QiLCJIb3Jpem9udGFsU2Nyb2xsU2VjdGlvbkNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBR0E7QUFFQTs7Q0FNQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxrQkFBa0IsR0FBR0MseURBQU0sQ0FBQ0MsR0FBUCxDQUFXQyxLQUFYLENBQWlCO0FBQUEsTUFBR0MsYUFBSCxRQUFHQSxhQUFIO0FBQUEsU0FBd0I7QUFDbEVDLFNBQUssRUFBRTtBQUFFQyxZ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ZixDQUFuQjtBQUNELEdBSlEsRUFJTixFQUpNLENBQVQ7QUFNQSxzQkFDRSxxRUFBQyx5RUFBRDtBQUNFLGFBQVMsWUFBS1ksNkVBQUwsY0FBeUNSLFFBQVEsSUFBSUEsUUFBckQsQ0FEWDtBQUFBLDJCQUdFLHFFQUFDLGtCQUFEO0FBQW9CLG1CQUFhLEVBQUUzQixhQUFuQztBQUFBLDZCQUNFLHFFQUFDLG9CQUFEO0FBQXNCLFdBQUcsRUFBRThCLFlBQTNCO0FBQUEsK0JBQ0UscUVBQUMsNEJBQUQ7QUFBOEIsb0JBQVUsRUFBRXpCLFVBQTFDO0FBQXNELGFBQUcsRUFBRTJCLFNBQTNEO0FBQUEsaUNBQ0UscUVBQUMsaUJBQUQ7QUFBQSxtQ0FDRSxxRUFBQyxjQUFEO0FBQUEsd0JBQWlCSjtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWVELENBcENNLEMsQ0FzQ1A7QUFDQTs7R0F2Q2FGLHVCOztNQUFBQSx1QiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2VjdGlvbnMvSG9yaXpvbnRhbFNjcm9sbFNlY3Rpb24vSG9yaXpvbnRhbFNjcm9sbFNlY3Rpb24uanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29yZVxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuLy8gQ29tcG9uZW50c1xuXG4vLyBTdHlsZXNcbmltcG9ydCB7XG4gIEhvcml6b250YWxTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lLFxuICBIb3Jpem9udGFsU2Nyb2xsU2VjdGlvblN0eWxlLFxufSBmcm9tIFwiLi9zdHlsZXMuc2Nzc1wiO1xuXG4vLyBCZWdpbiBUeXBlc1xuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG5cbi8vIEJlZ2luIENvbXBvbmVudFxuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG5cbmNvbnN0IFRhbGxPdXRlckNvbnRhaW5lciA9IHN0eWxlZC5kaXYuYXR0cnMoKHsgZHluYW1pY0hlaWdodCB9KSA9PiAoe1xuICBzdHlsZTogeyBoZWlnaHQ6IGAke2R5bmFtaWNIZWlnaHR9cHhgIH0sXG59KSlgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG5gO1xuXG5jb25zdCBTdGlja3lJbm5lckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbmA7XG5cbmNvbnN0IEhvcml6b250YWxUcmFuc2xhdGVDb250YWluZXIgPSBzdHlsZWQuZGl2LmF0dHJzKCh7IHRyYW5zbGF0ZVggfSkgPT4gKHtcbiAgc3R5bGU6IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke3RyYW5zbGF0ZVh9cHgpYCB9LFxufSkpYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cyBlYXNlLW91dDtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbmA7XG5cbmNvbnN0IENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IEhvcml6b250YWxTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuYDtcblxuY29uc3QgY2FsY0R5bmFtaWNIZWlnaHQgPSAob2JqZWN0V2lkdGgpID0+IHtcbiAgY29uc3QgdncgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgY29uc3QgdmggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIHJldHVybiBvYmplY3RXaWR0aCAtIHZ3ICsgdmggKyAxNTA7XG59O1xuXG5jb25zdCBoYW5kbGVEeW5hbWljSGVpZ2h0ID0gKHJlZiwgc2V0RHluYW1pY0hlaWdodCkgPT4ge1xuICBjb25zdCBvYmplY3RXaWR0aCA9IHJlZi5jdXJyZW50LnNjcm9sbFdpZHRoO1xuICBjb25zdCBkeW5hbWljSGVpZ2h0ID0gY2FsY0R5bmFtaWNIZWlnaHQob2JqZWN0V2lkdGgpO1xuICBzZXREeW5hbWljSGVpZ2h0KGR5bmFtaWNIZWlnaHQpO1xufTtcblxuY29uc3QgYXBwbHlTY3JvbGxMaXN0ZW5lciA9IChyZWYsIHNldFRyYW5zbGF0ZVgpID0+IHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG9mZnNldFRvcCA9IHJlZiAmJiByZWYuY3VycmVudCA/IC1yZWYuY3VycmVudC5vZmZzZXRUb3AgOiAwO1xuICAgIHNldFRyYW5zbGF0ZVgob2Zmc2V0VG9wKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgSG9yaXpvbnRhbFNjcm9sbFNlY3Rpb24gPSAoe1xuICBhZGRDbGFzcyA9IFwiXCIsXG4gIGNoaWxkcmVuLFxuICBzdHlsZSA9IFwiXCIsXG59KSA9PiB7XG4gIGNvbnN0IFtkeW5hbWljSGVpZ2h0LCBzZXREeW5hbWljSGVpZ2h0XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbdHJhbnNsYXRlWCwgc2V0VHJhbnNsYXRlWF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IG9iamVjdFJlZiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCByZXNpemVIYW5kbGVyID0gKCkgPT4ge1xuICAgIGhhbmRsZUR5bmFtaWNIZWlnaHQob2JqZWN0UmVmLCBzZXREeW5hbWljSGVpZ2h0KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGhhbmRsZUR5bmFtaWNIZWlnaHQob2JqZWN0UmVmLCBzZXREeW5hbWljSGVpZ2h0KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCByZXNpemVIYW5kbGVyKTtcbiAgICBhcHBseVNjcm9sbExpc3RlbmVyKGNvbnRhaW5lclJlZiwgc2V0VHJhbnNsYXRlWCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxIb3Jpem9udGFsU2Nyb2xsU2VjdGlvblN0eWxlXG4gICAgICBjbGFzc05hbWU9e2Ake0hvcml6b250YWxTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lfSAke2FkZENsYXNzICYmIGFkZENsYXNzfWB9XG4gICAgPlxuICAgICAgPFRhbGxPdXRlckNvbnRhaW5lciBkeW5hbWljSGVpZ2h0PXtkeW5hbWljSGVpZ2h0fT5cbiAgICAgICAgPFN0aWNreUlubmVyQ29udGFpbmVyIHJlZj17Y29udGFpbmVyUmVmfT5cbiAgICAgICAgICA8SG9yaXpvbnRhbFRyYW5zbGF0ZUNvbnRhaW5lciB0cmFuc2xhdGVYPXt0cmFuc2xhdGVYfSByZWY9e29iamVjdFJlZn0+XG4gICAgICAgICAgICA8SG9yaXpvbnRhbFNlY3Rpb24+XG4gICAgICAgICAgICAgIDxDb250ZW50V3JhcHBlcj57Y2hpbGRyZW59PC9Db250ZW50V3JhcHBlcj5cbiAgICAgICAgICAgIDwvSG9yaXpvbnRhbFNlY3Rpb24+XG4gICAgICAgICAgPC9Ib3Jpem9udGFsVHJhbnNsYXRlQ29udGFpbmVyPlxuICAgICAgICA8L1N0aWNreUlubmVyQ29udGFpbmVyPlxuICAgICAgPC9UYWxsT3V0ZXJDb250YWluZXI+XG4gICAgPC9Ib3Jpem9udGFsU2Nyb2xsU2VjdGlvblN0eWxlPlxuICApO1xufTtcblxuLy8gRW5kIENvbXBvbmVudFxuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Sections/HorizontalScrollSection/HorizontalScrollSection.jsx\n");

/***/ })

})