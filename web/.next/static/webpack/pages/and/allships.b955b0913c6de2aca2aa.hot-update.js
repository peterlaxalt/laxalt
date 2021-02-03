webpackHotUpdate_N_E("pages/and/allships",{

/***/ "./components/Sections/ProjectIntroSection/ProjectIntroSection.tsx":
/*!*************************************************************************!*\
  !*** ./components/Sections/ProjectIntroSection/ProjectIntroSection.tsx ***!
  \*************************************************************************/
/*! exports provided: ProjectIntroSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectIntroSection\", function() { return ProjectIntroSection; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants_site_Settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/site/Settings */ \"./constants/site/Settings.tsx\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ProjectCard */ \"./components/ProjectCard/index.tsx\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.scss */ \"./components/Sections/ProjectIntroSection/styles.scss.tsx\");\n/* harmony import */ var _HeadlineWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../HeadlineWrapper */ \"./components/HeadlineWrapper/index.tsx\");\n\n\nvar _jsxFileName = \"/Users/pflaxalt/Repositories/_pfl/web/components/Sections/ProjectIntroSection/ProjectIntroSection.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n// Core\n // Types\n\n // Vendor\n\n // Components\n\n // Styles\n\n\n // Begin Types\n// __________________________________________________________________________________________\n\n// Begin Component\n// __________________________________________________________________________________________\nvar lastTranslateX = 0;\nvar ProjectIntroSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(_c = _s(function (_ref) {\n  _s();\n\n  var _ref$addClass = _ref.addClass,\n      addClass = _ref$addClass === void 0 ? \"\" : _ref$addClass,\n      _ref$hasSidebar = _ref.hasSidebar,\n      hasSidebar = _ref$hasSidebar === void 0 ? false : _ref$hasSidebar;\n\n  // _____________________________\n  // State\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      dynamicHeight = _useState[0],\n      setDynamicHeight = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isBreakPoint = _useState2[0],\n      setBreakPoint = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isScrolled = _useState3[0],\n      setScrolled = _useState3[1]; // _____________________________\n  // Refs\n\n\n  var containerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  var objectRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(); // _____________________________\n  // Memory\n\n  var boundingClientX = 0; // _____________________________\n  // Functions\n\n  var calcDynamicHeight = function calcDynamicHeight(objectWidth) {\n    var vw = window.innerWidth;\n    var vh = window.innerHeight;\n    return objectWidth - vw + vh;\n  };\n\n  var handleDynamicHeight = function handleDynamicHeight(ref, setDynamicHeight) {\n    if (ref && ref.current) {\n      var objectWidth = ref.current.scrollWidth;\n\n      var _dynamicHeight = calcDynamicHeight(objectWidth);\n\n      setDynamicHeight(_dynamicHeight);\n    }\n  };\n\n  var applyScrollListener = function applyScrollListener(ref) {\n    window.addEventListener(\"scroll\", function () {\n      var offsetTop = ref && ref.current ? -ref.current.offsetTop : 0;\n      gsap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].to(objectRef.current, {\n        x: offsetTop,\n        transition: 0.1,\n        ease: \"sine.out\"\n      });\n\n      if (offsetTop < window.innerWidth / -2) {\n        setBreakPoint(true);\n      } else {\n        setBreakPoint(false);\n      }\n\n      if (offsetTop < -100) {\n        setScrolled(true);\n      } else {\n        setScrolled(false);\n      }\n    });\n  };\n\n  var resizeHandler = function resizeHandler() {\n    handleDynamicHeight(objectRef, setDynamicHeight); // setWindowSize(window.innerWidth);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    handleDynamicHeight(objectRef, setDynamicHeight);\n    window.addEventListener(\"resize\", resizeHandler);\n    applyScrollListener(containerRef);\n  }, []); // _____________________________\n  // Let 'er rip\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_HeadlineWrapper__WEBPACK_IMPORTED_MODULE_6__[\"AfterHeadlineWrapper\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_scss__WEBPACK_IMPORTED_MODULE_5__[\"ProjectIntroSectionStyle\"], {\n      className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_5__[\"ProjectIntroSectionClassName\"], \" \").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_5__[\"ProjectIntroSectionClassName\"], \"--\").concat(isScrolled ? \"is-scrolled\" : \"is-not-scrolled\", \" \").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_5__[\"ProjectIntroSectionClassName\"], \"--\").concat(isBreakPoint ? \"is-at-breakpoint\" : \"is-not-at-breakpoint\", \" \").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_5__[\"ProjectIntroSectionClassName\"], \"--\").concat(boundingClientX > lastTranslateX ? \"is-at-end\" : \"is-not-at-end\", \" \").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_5__[\"ProjectIntroSectionClassName\"], \"--\").concat(hasSidebar ? \"has-sidebar\" : \"has-no-sidebar\", \" \").concat(addClass && addClass),\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_5__[\"ProjectIntroSectionClassName\"], \"__outer\"),\n        style: {\n          height: \"\".concat(dynamicHeight, \"px\")\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_5__[\"ProjectIntroSectionClassName\"], \"__sticky-wrapper\"),\n          ref: containerRef,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_5__[\"ProjectIntroSectionClassName\"], \"__x-translate-wrapper\") // style={{ transform: `translate3d(${translateX}px, 0px, 0px)` }}\n            ,\n            ref: objectRef,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_5__[\"ProjectIntroSectionClassName\"], \"__horizontal-wrapper\"),\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_5__[\"ProjectIntroSectionClassName\"], \"__content-wrapper\"),\n                children: _constants_site_Settings__WEBPACK_IMPORTED_MODULE_2__[\"SiteProjects\"].map(function (item, idx) {\n                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ProjectCard__WEBPACK_IMPORTED_MODULE_4__[\"ProjectCard\"], {\n                    count: idx + 1,\n                    total: _constants_site_Settings__WEBPACK_IMPORTED_MODULE_2__[\"SiteProjects\"].length,\n                    item: item\n                  }, idx, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 152,\n                    columnNumber: 25\n                  }, _this);\n                })\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 147,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 142,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 135,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 129,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 109,\n    columnNumber: 7\n  }, _this);\n}, \"zk8ZYGNcTnhGGrP/htMLlsPzheE=\")); // End Component\n// ______________________________________________________________________________\n\n_c2 = ProjectIntroSection;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ProjectIntroSection$React.memo\");\n$RefreshReg$(_c2, \"ProjectIntroSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9ucy9Qcm9qZWN0SW50cm9TZWN0aW9uL1Byb2plY3RJbnRyb1NlY3Rpb24udHN4P2NmZTYiXSwibmFtZXMiOlsibGFzdFRyYW5zbGF0ZVgiLCJQcm9qZWN0SW50cm9TZWN0aW9uIiwiUmVhY3QiLCJtZW1vIiwiYWRkQ2xhc3MiLCJoYXNTaWRlYmFyIiwidXNlU3RhdGUiLCJkeW5hbWljSGVpZ2h0Iiwic2V0RHluYW1pY0hlaWdodCIsImlzQnJlYWtQb2ludCIsInNldEJyZWFrUG9pbnQiLCJpc1Njcm9sbGVkIiwic2V0U2Nyb2xsZWQiLCJjb250YWluZXJSZWYiLCJ1c2VSZWYiLCJvYmplY3RSZWYiLCJib3VuZGluZ0NsaWVudFgiLCJjYWxjRHluYW1pY0hlaWdodCIsIm9iamVjdFdpZHRoIiwidnciLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwidmgiLCJpbm5lckhlaWdodCIsImhhbmRsZUR5bmFtaWNIZWlnaHQiLCJyZWYiLCJjdXJyZW50Iiwic2Nyb2xsV2lkdGgiLCJhcHBseVNjcm9sbExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9mZnNldFRvcCIsImdzYXAiLCJ0byIsIngiLCJ0cmFuc2l0aW9uIiwiZWFzZSIsInJlc2l6ZUhhbmRsZXIiLCJ1c2VFZmZlY3QiLCJQcm9qZWN0SW50cm9TZWN0aW9uQ2xhc3NOYW1lIiwiaGVpZ2h0IiwiU2l0ZVByb2plY3RzIiwibWFwIiwiaXRlbSIsImlkeCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztDQUdBOztDQUdBOztDQUdBOztBQUNBO0NBTUE7QUFDQTs7QUFRQTtBQUNBO0FBRUEsSUFBSUEsY0FBc0IsR0FBRyxDQUE3QjtBQUVPLElBQU1DLG1CQUFzRSxnQkFBR0MsNENBQUssQ0FBQ0MsSUFBTixTQUNwRixnQkFBMkM7QUFBQTs7QUFBQSwyQkFBeENDLFFBQXdDO0FBQUEsTUFBeENBLFFBQXdD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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTRERCxDQXRJbUYsa0NBQS9FLEMsQ0F5SVA7QUFDQTs7TUExSWExQyxtQiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2VjdGlvbnMvUHJvamVjdEludHJvU2VjdGlvbi9Qcm9qZWN0SW50cm9TZWN0aW9uLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcmVcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuLy8gVHlwZXNcbmltcG9ydCB7IExYTFRfUHJvamVjdCwgU2l0ZVByb2plY3RzIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50cy9zaXRlL1NldHRpbmdzXCI7XG5cbi8vIFZlbmRvclxuaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIjtcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgUHJvamVjdENhcmQgfSBmcm9tIFwiLi4vLi4vUHJvamVjdENhcmRcIjtcblxuLy8gU3R5bGVzXG5pbXBvcnQge1xuICBQcm9qZWN0SW50cm9TZWN0aW9uQ2xhc3NOYW1lLFxuICBQcm9qZWN0SW50cm9TZWN0aW9uU3R5bGUsXG59IGZyb20gXCIuL3N0eWxlcy5zY3NzXCI7XG5pbXBvcnQgeyBBZnRlckhlYWRsaW5lV3JhcHBlciB9IGZyb20gXCIuLi8uLi9IZWFkbGluZVdyYXBwZXJcIjtcblxuLy8gQmVnaW4gVHlwZXNcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuXG5leHBvcnQgdHlwZSBMWExUX1Byb2plY3RJbnRyb1NlY3Rpb24gPSB7XG4gIGFkZENsYXNzPzogc3RyaW5nO1xuICBoYXNTaWRlYmFyPzogYm9vbGVhbjtcbiAgcHJvamVjdDogTFhMVF9Qcm9qZWN0O1xufTtcblxuLy8gQmVnaW4gQ29tcG9uZW50XG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cblxubGV0IGxhc3RUcmFuc2xhdGVYOiBudW1iZXIgPSAwO1xuXG5leHBvcnQgY29uc3QgUHJvamVjdEludHJvU2VjdGlvbjogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8TFhMVF9Qcm9qZWN0SW50cm9TZWN0aW9uPiA9IFJlYWN0Lm1lbW8oXG4gICh7IGFkZENsYXNzID0gXCJcIiwgaGFzU2lkZWJhciA9IGZhbHNlIH0pID0+IHtcbiAgICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAgIC8vIFN0YXRlXG4gICAgY29uc3QgW2R5bmFtaWNIZWlnaHQsIHNldER5bmFtaWNIZWlnaHRdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2lzQnJlYWtQb2ludCwgc2V0QnJlYWtQb2ludF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2lzU2Nyb2xsZWQsIHNldFNjcm9sbGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gICAgLy8gUmVmc1xuICAgIGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcbiAgICBjb25zdCBvYmplY3RSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KCk7XG5cbiAgICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAgIC8vIE1lbW9yeVxuICAgIGxldCBib3VuZGluZ0NsaWVudFggPSAwO1xuXG4gICAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgICAvLyBGdW5jdGlvbnNcbiAgICBjb25zdCBjYWxjRHluYW1pY0hlaWdodCA9IChvYmplY3RXaWR0aDogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCB2dyA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgY29uc3QgdmggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICByZXR1cm4gb2JqZWN0V2lkdGggLSB2dyArIHZoO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVEeW5hbWljSGVpZ2h0ID0gKFxuICAgICAgcmVmOiBSZWFjdC5SZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+LFxuICAgICAgc2V0RHluYW1pY0hlaWdodDogKGR5bmFtaWNIZWlnaHQ6IG51bWJlcikgPT4gdm9pZFxuICAgICkgPT4ge1xuICAgICAgaWYgKHJlZiAmJiByZWYuY3VycmVudCkge1xuICAgICAgICBjb25zdCBvYmplY3RXaWR0aDogbnVtYmVyID0gcmVmLmN1cnJlbnQuc2Nyb2xsV2lkdGg7XG4gICAgICAgIGNvbnN0IGR5bmFtaWNIZWlnaHQ6IG51bWJlciA9IGNhbGNEeW5hbWljSGVpZ2h0KG9iamVjdFdpZHRoKTtcbiAgICAgICAgc2V0RHluYW1pY0hlaWdodChkeW5hbWljSGVpZ2h0KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgYXBwbHlTY3JvbGxMaXN0ZW5lciA9IChyZWY6IFJlYWN0LlJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcbiAgICAgICAgY29uc3Qgb2Zmc2V0VG9wOiBudW1iZXIgPVxuICAgICAgICAgIHJlZiAmJiByZWYuY3VycmVudCA/IC1yZWYuY3VycmVudC5vZmZzZXRUb3AgOiAwO1xuXG4gICAgICAgIGdzYXAudG8ob2JqZWN0UmVmLmN1cnJlbnQsIHtcbiAgICAgICAgICB4OiBvZmZzZXRUb3AsXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4xLFxuICAgICAgICAgIGVhc2U6IFwic2luZS5vdXRcIixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG9mZnNldFRvcCA8IHdpbmRvdy5pbm5lcldpZHRoIC8gLTIpIHtcbiAgICAgICAgICBzZXRCcmVha1BvaW50KHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldEJyZWFrUG9pbnQoZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9mZnNldFRvcCA8IC0xMDApIHtcbiAgICAgICAgICBzZXRTY3JvbGxlZCh0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRTY3JvbGxlZChmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCByZXNpemVIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgaGFuZGxlRHluYW1pY0hlaWdodChvYmplY3RSZWYsIHNldER5bmFtaWNIZWlnaHQpO1xuICAgICAgLy8gc2V0V2luZG93U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCk7XG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBoYW5kbGVEeW5hbWljSGVpZ2h0KG9iamVjdFJlZiwgc2V0RHluYW1pY0hlaWdodCk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCByZXNpemVIYW5kbGVyKTtcbiAgICAgIGFwcGx5U2Nyb2xsTGlzdGVuZXIoY29udGFpbmVyUmVmKTtcbiAgICB9LCBbXSk7XG5cbiAgICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAgIC8vIExldCAnZXIgcmlwXG4gICAgcmV0dXJuIChcbiAgICAgIDxBZnRlckhlYWRsaW5lV3JhcHBlcj5cbiAgICAgICAgPFByb2plY3RJbnRyb1NlY3Rpb25TdHlsZVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7UHJvamVjdEludHJvU2VjdGlvbkNsYXNzTmFtZX0gJHtQcm9qZWN0SW50cm9TZWN0aW9uQ2xhc3NOYW1lfS0tJHtcbiAgICAgICAgICAgIGlzU2Nyb2xsZWQgPyBgaXMtc2Nyb2xsZWRgIDogYGlzLW5vdC1zY3JvbGxlZGBcbiAgICAgICAgICB9ICR7UHJvamVjdEludHJvU2VjdGlvbkNsYXNzTmFtZX0tLSR7XG4gICAgICAgICAgICBpc0JyZWFrUG9pbnQgPyBgaXMtYXQtYnJlYWtwb2ludGAgOiBgaXMtbm90LWF0LWJyZWFrcG9pbnRgXG4gICAgICAgICAgfSAke1Byb2plY3RJbnRyb1NlY3Rpb25DbGFzc05hbWV9LS0ke1xuICAgICAgICAgICAgYm91bmRpbmdDbGllbnRYID4gbGFzdFRyYW5zbGF0ZVggPyBgaXMtYXQtZW5kYCA6IGBpcy1ub3QtYXQtZW5kYFxuICAgICAgICAgIH0gJHtQcm9qZWN0SW50cm9TZWN0aW9uQ2xhc3NOYW1lfS0tJHtcbiAgICAgICAgICAgIGhhc1NpZGViYXIgPyBcImhhcy1zaWRlYmFyXCIgOiBcImhhcy1uby1zaWRlYmFyXCJcbiAgICAgICAgICB9ICR7YWRkQ2xhc3MgJiYgYWRkQ2xhc3N9YH1cbiAgICAgICAgPlxuICAgICAgICAgIHsvKiBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAqL31cbiAgICAgICAgICB7LyogT3V0ZXIgQ29udGFpbmVyIHdpdGggRHluYW1pYyBIZWlnaHQgKi99XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtQcm9qZWN0SW50cm9TZWN0aW9uQ2xhc3NOYW1lfV9fb3V0ZXJgfVxuICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBgJHtkeW5hbWljSGVpZ2h0fXB4YCB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsvKiBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAqL31cbiAgICAgICAgICAgIHsvKiBTdGlja3kgV3JhcHBlciAqL31cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtQcm9qZWN0SW50cm9TZWN0aW9uQ2xhc3NOYW1lfV9fc3RpY2t5LXdyYXBwZXJgfVxuICAgICAgICAgICAgICByZWY9e2NvbnRhaW5lclJlZn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgey8qIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fICovfVxuICAgICAgICAgICAgICB7LyogVHJhbnNsYXRpb24gV3JhcHBlciAqL31cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7UHJvamVjdEludHJvU2VjdGlvbkNsYXNzTmFtZX1fX3gtdHJhbnNsYXRlLXdyYXBwZXJgfVxuICAgICAgICAgICAgICAgIC8vIHN0eWxlPXt7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKCR7dHJhbnNsYXRlWH1weCwgMHB4LCAwcHgpYCB9fVxuICAgICAgICAgICAgICAgIHJlZj17b2JqZWN0UmVmfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgey8qIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fICovfVxuICAgICAgICAgICAgICAgIHsvKiBIb3Jpem9udGFsIFdyYXBwZXIgKi99XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtQcm9qZWN0SW50cm9TZWN0aW9uQ2xhc3NOYW1lfV9faG9yaXpvbnRhbC13cmFwcGVyYH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7LyogX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gKi99XG4gICAgICAgICAgICAgICAgICB7LyogQ29udGVudCBXcmFwcGVyICovfVxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1Byb2plY3RJbnRyb1NlY3Rpb25DbGFzc05hbWV9X19jb250ZW50LXdyYXBwZXJgfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7U2l0ZVByb2plY3RzLm1hcCgoaXRlbTogTFhMVF9Qcm9qZWN0LCBpZHg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvamVjdENhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50PXtpZHggKyAxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbD17U2l0ZVByb2plY3RzLmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Qcm9qZWN0SW50cm9TZWN0aW9uU3R5bGU+XG4gICAgICA8L0FmdGVySGVhZGxpbmVXcmFwcGVyPlxuICAgICk7XG4gIH1cbik7XG5cbi8vIEVuZCBDb21wb25lbnRcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Sections/ProjectIntroSection/ProjectIntroSection.tsx\n");

/***/ })

})