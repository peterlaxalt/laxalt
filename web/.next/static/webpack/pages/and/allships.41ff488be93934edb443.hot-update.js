webpackHotUpdate_N_E("pages/and/allships",{

/***/ "./components/DuotoneImage/DuotoneImage.tsx":
false,

/***/ "./components/DuotoneImage/index.tsx":
false,

/***/ "./components/DuotoneImage/styles.scss.tsx":
false,

/***/ "./components/ProjectCard/ProjectCard.tsx":
false,

/***/ "./components/ProjectCard/index.tsx":
false,

/***/ "./components/ProjectCard/styles.scss.tsx":
false,

/***/ "./components/Sections/ProjectIntroSection/ProjectIntroSection.tsx":
/*!*************************************************************************!*\
  !*** ./components/Sections/ProjectIntroSection/ProjectIntroSection.tsx ***!
  \*************************************************************************/
/*! exports provided: ProjectIntroSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectIntroSection\", function() { return ProjectIntroSection; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.scss */ \"./components/Sections/ProjectIntroSection/styles.scss.tsx\");\n/* harmony import */ var _HeadlineWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../HeadlineWrapper */ \"./components/HeadlineWrapper/index.tsx\");\n\n\nvar _jsxFileName = \"/Users/pflaxalt/Repositories/_pfl/web/components/Sections/ProjectIntroSection/ProjectIntroSection.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n// Core\n // Types\n\n// Vendor\n // Components\n\n// Styles\n\n // Begin Types\n// __________________________________________________________________________________________\n\n// Begin Component\n// __________________________________________________________________________________________\nvar lastTranslateX = 0;\nvar ProjectIntroSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(_c = _s(function (_ref) {\n  _s();\n\n  var _ref$addClass = _ref.addClass,\n      addClass = _ref$addClass === void 0 ? \"\" : _ref$addClass,\n      _ref$hasSidebar = _ref.hasSidebar,\n      hasSidebar = _ref$hasSidebar === void 0 ? false : _ref$hasSidebar;\n\n  // _____________________________\n  // State\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      dynamicHeight = _useState[0],\n      setDynamicHeight = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isBreakPoint = _useState2[0],\n      setBreakPoint = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isScrolled = _useState3[0],\n      setScrolled = _useState3[1]; // _____________________________\n  // Refs\n\n\n  var containerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  var objectRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(); // _____________________________\n  // Memory\n\n  var boundingClientX = 0; // _____________________________\n  // Functions\n\n  var calcDynamicHeight = function calcDynamicHeight(objectWidth) {\n    var vw = window.innerWidth;\n    var vh = window.innerHeight;\n    return objectWidth - vw + vh;\n  };\n\n  var handleDynamicHeight = function handleDynamicHeight(ref, setDynamicHeight) {\n    if (ref && ref.current) {\n      var objectWidth = ref.current.scrollWidth;\n\n      var _dynamicHeight = calcDynamicHeight(objectWidth);\n\n      setDynamicHeight(_dynamicHeight);\n    }\n  };\n\n  var applyScrollListener = function applyScrollListener(ref) {\n    window.addEventListener(\"scroll\", function () {\n      var offsetTop = ref && ref.current ? -ref.current.offsetTop : 0;\n      gsap__WEBPACK_IMPORTED_MODULE_2__[\"default\"].to(objectRef.current, {\n        x: offsetTop,\n        transition: 0.1,\n        ease: \"sine.out\"\n      });\n\n      if (offsetTop < window.innerWidth / -2) {\n        setBreakPoint(true);\n      } else {\n        setBreakPoint(false);\n      }\n\n      if (offsetTop < -100) {\n        setScrolled(true);\n      } else {\n        setScrolled(false);\n      }\n    });\n  };\n\n  var resizeHandler = function resizeHandler() {\n    handleDynamicHeight(objectRef, setDynamicHeight); // setWindowSize(window.innerWidth);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    handleDynamicHeight(objectRef, setDynamicHeight);\n    window.addEventListener(\"resize\", resizeHandler);\n    applyScrollListener(containerRef);\n  }, []); // _____________________________\n  // Let 'er rip\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_HeadlineWrapper__WEBPACK_IMPORTED_MODULE_4__[\"AfterHeadlineWrapper\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"ProjectIntroSectionStyle\"], {\n      className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"ProjectIntroSectionClassName\"], \" \").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"ProjectIntroSectionClassName\"], \"--\").concat(isScrolled ? \"is-scrolled\" : \"is-not-scrolled\", \" \").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"ProjectIntroSectionClassName\"], \"--\").concat(isBreakPoint ? \"is-at-breakpoint\" : \"is-not-at-breakpoint\", \" \").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"ProjectIntroSectionClassName\"], \"--\").concat(boundingClientX > lastTranslateX ? \"is-at-end\" : \"is-not-at-end\", \" \").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"ProjectIntroSectionClassName\"], \"--\").concat(hasSidebar ? \"has-sidebar\" : \"has-no-sidebar\", \" \").concat(addClass && addClass),\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"ProjectIntroSectionClassName\"], \"__outer\"),\n        style: {\n          height: \"\".concat(dynamicHeight, \"px\")\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"ProjectIntroSectionClassName\"], \"__sticky-wrapper\"),\n          ref: containerRef,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"ProjectIntroSectionClassName\"], \"__x-translate-wrapper\") // style={{ transform: `translate3d(${translateX}px, 0px, 0px)` }}\n            ,\n            ref: objectRef,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"ProjectIntroSectionClassName\"], \"__horizontal-wrapper\"),\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"ProjectIntroSectionClassName\"], \"__content-wrapper\"),\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"ProjectIntroSectionClassName\"], \"__col \").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"ProjectIntroSectionClassName\"], \"__intro-section\"),\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                    className: \"\".concat(ProjectIntroSection, \"__intro-section__inner\"),\n                    children: \"INTRO\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 151,\n                    columnNumber: 23\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 150,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 147,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 142,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 135,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 129,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 109,\n    columnNumber: 7\n  }, _this);\n}, \"zk8ZYGNcTnhGGrP/htMLlsPzheE=\")); // End Component\n// ______________________________________________________________________________\n\n_c2 = ProjectIntroSection;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ProjectIntroSection$React.memo\");\n$RefreshReg$(_c2, \"ProjectIntroSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9ucy9Qcm9qZWN0SW50cm9TZWN0aW9uL1Byb2plY3RJbnRyb1NlY3Rpb24udHN4P2NmZTYiXSwibmFtZXMiOlsibGFzdFRyYW5zbGF0ZVgiLCJQcm9qZWN0SW50cm9TZWN0aW9uIiwiUmVhY3QiLCJtZW1vIiwiYWRkQ2xhc3MiLCJoYXNTaWRlYmFyIiwidXNlU3RhdGUiLCJkeW5hbWljSGVpZ2h0Iiwic2V0RHluYW1pY0hlaWdodCIsImlzQnJlYWtQb2ludCIsInNldEJyZWFrUG9pbnQiLCJpc1Njcm9sbGVkIiwic2V0U2Nyb2xsZWQiLCJjb250YWluZXJSZWYiLCJ1c2VSZWYiLCJvYmplY3RSZWYiLCJib3VuZGluZ0NsaWVudFgiLCJjYWxjRHluYW1pY0hlaWdodCIsIm9iamVjdFdpZHRoIiwidnciLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwidmgiLCJpbm5lckhlaWdodCIsImhhbmRsZUR5bmFtaWNIZWlnaHQiLCJyZWYiLCJjdXJyZW50Iiwic2Nyb2xsV2lkdGgiLCJhcHBseVNjcm9sbExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9mZnNldFRvcCIsImdzYXAiLCJ0byIsIngiLCJ0cmFuc2l0aW9uIiwiZWFzZSIsInJlc2l6ZUhhbmRsZXIiLCJ1c2VFZmZlY3QiLCJQcm9qZWN0SW50cm9TZWN0aW9uQ2xhc3NOYW1lIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUdBO0NBR0E7O0FBR0E7QUFDQTtDQU1BO0FBQ0E7O0FBUUE7QUFDQTtBQUVBLElBQUlBLGNBQXNCLEdBQUcsQ0FBN0I7QUFFTyxJQUFNQyxtQkFBc0UsZ0JBQUdDLDRDQUFLLENBQUNDLElBQU4sU0FDcEYsZ0JBQTJDO0FBQUE7O0FBQUEsMkJBQXhDQyxRQUF3QztBQUFBLE1BQXhDQSxRQUF3Qyw4QkFBN0IsRUFBNkI7QUFBQSw2QkFBekJDLFVBQXlCO0FBQUEsTUFBekJBLFVB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cy9Qcm9qZWN0SW50cm9TZWN0aW9uL1Byb2plY3RJbnRyb1NlY3Rpb24udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29yZVxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgTFhMVF9Qcm9qZWN0LCBTaXRlUHJvamVjdHMgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL3NpdGUvU2V0dGluZ3NcIjtcblxuLy8gVmVuZG9yXG5pbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBQcm9qZWN0Q2FyZCB9IGZyb20gXCIuLi8uLi9Qcm9qZWN0Q2FyZFwiO1xuXG4vLyBTdHlsZXNcbmltcG9ydCB7XG4gIFByb2plY3RJbnRyb1NlY3Rpb25DbGFzc05hbWUsXG4gIFByb2plY3RJbnRyb1NlY3Rpb25TdHlsZSxcbn0gZnJvbSBcIi4vc3R5bGVzLnNjc3NcIjtcbmltcG9ydCB7IEFmdGVySGVhZGxpbmVXcmFwcGVyIH0gZnJvbSBcIi4uLy4uL0hlYWRsaW5lV3JhcHBlclwiO1xuXG4vLyBCZWdpbiBUeXBlc1xuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG5cbmV4cG9ydCB0eXBlIExYTFRfUHJvamVjdEludHJvU2VjdGlvbiA9IHtcbiAgYWRkQ2xhc3M/OiBzdHJpbmc7XG4gIGhhc1NpZGViYXI/OiBib29sZWFuO1xuICBwcm9qZWN0OiBMWExUX1Byb2plY3Q7XG59O1xuXG4vLyBCZWdpbiBDb21wb25lbnRcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuXG5sZXQgbGFzdFRyYW5zbGF0ZVg6IG51bWJlciA9IDA7XG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0SW50cm9TZWN0aW9uOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxMWExUX1Byb2plY3RJbnRyb1NlY3Rpb24+ID0gUmVhY3QubWVtbyhcbiAgKHsgYWRkQ2xhc3MgPSBcIlwiLCBoYXNTaWRlYmFyID0gZmFsc2UgfSkgPT4ge1xuICAgIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gICAgLy8gU3RhdGVcbiAgICBjb25zdCBbZHluYW1pY0hlaWdodCwgc2V0RHluYW1pY0hlaWdodF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbaXNCcmVha1BvaW50LCBzZXRCcmVha1BvaW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbaXNTY3JvbGxlZCwgc2V0U2Nyb2xsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgICAvLyBSZWZzXG4gICAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xuICAgIGNvbnN0IG9iamVjdFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcblxuICAgIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gICAgLy8gTWVtb3J5XG4gICAgbGV0IGJvdW5kaW5nQ2xpZW50WCA9IDA7XG5cbiAgICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAgIC8vIEZ1bmN0aW9uc1xuICAgIGNvbnN0IGNhbGNEeW5hbWljSGVpZ2h0ID0gKG9iamVjdFdpZHRoOiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IHZ3ID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICBjb25zdCB2aCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIHJldHVybiBvYmplY3RXaWR0aCAtIHZ3ICsgdmg7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUR5bmFtaWNIZWlnaHQgPSAoXG4gICAgICByZWY6IFJlYWN0LlJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD4sXG4gICAgICBzZXREeW5hbWljSGVpZ2h0OiAoZHluYW1pY0hlaWdodDogbnVtYmVyKSA9PiB2b2lkXG4gICAgKSA9PiB7XG4gICAgICBpZiAocmVmICYmIHJlZi5jdXJyZW50KSB7XG4gICAgICAgIGNvbnN0IG9iamVjdFdpZHRoOiBudW1iZXIgPSByZWYuY3VycmVudC5zY3JvbGxXaWR0aDtcbiAgICAgICAgY29uc3QgZHluYW1pY0hlaWdodDogbnVtYmVyID0gY2FsY0R5bmFtaWNIZWlnaHQob2JqZWN0V2lkdGgpO1xuICAgICAgICBzZXREeW5hbWljSGVpZ2h0KGR5bmFtaWNIZWlnaHQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBhcHBseVNjcm9sbExpc3RlbmVyID0gKHJlZjogUmVhY3QuUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PikgPT4ge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBvZmZzZXRUb3A6IG51bWJlciA9XG4gICAgICAgICAgcmVmICYmIHJlZi5jdXJyZW50ID8gLXJlZi5jdXJyZW50Lm9mZnNldFRvcCA6IDA7XG5cbiAgICAgICAgZ3NhcC50byhvYmplY3RSZWYuY3VycmVudCwge1xuICAgICAgICAgIHg6IG9mZnNldFRvcCxcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjEsXG4gICAgICAgICAgZWFzZTogXCJzaW5lLm91dFwiLFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAob2Zmc2V0VG9wIDwgd2luZG93LmlubmVyV2lkdGggLyAtMikge1xuICAgICAgICAgIHNldEJyZWFrUG9pbnQodHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0QnJlYWtQb2ludChmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob2Zmc2V0VG9wIDwgLTEwMCkge1xuICAgICAgICAgIHNldFNjcm9sbGVkKHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldFNjcm9sbGVkKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlc2l6ZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICBoYW5kbGVEeW5hbWljSGVpZ2h0KG9iamVjdFJlZiwgc2V0RHluYW1pY0hlaWdodCk7XG4gICAgICAvLyBzZXRXaW5kb3dTaXplKHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGhhbmRsZUR5bmFtaWNIZWlnaHQob2JqZWN0UmVmLCBzZXREeW5hbWljSGVpZ2h0KTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHJlc2l6ZUhhbmRsZXIpO1xuICAgICAgYXBwbHlTY3JvbGxMaXN0ZW5lcihjb250YWluZXJSZWYpO1xuICAgIH0sIFtdKTtcblxuICAgIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gICAgLy8gTGV0ICdlciByaXBcbiAgICByZXR1cm4gKFxuICAgICAgPEFmdGVySGVhZGxpbmVXcmFwcGVyPlxuICAgICAgICA8UHJvamVjdEludHJvU2VjdGlvblN0eWxlXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtQcm9qZWN0SW50cm9TZWN0aW9uQ2xhc3NOYW1lfSAke1Byb2plY3RJbnRyb1NlY3Rpb25DbGFzc05hbWV9LS0ke1xuICAgICAgICAgICAgaXNTY3JvbGxlZCA/IGBpcy1zY3JvbGxlZGAgOiBgaXMtbm90LXNjcm9sbGVkYFxuICAgICAgICAgIH0gJHtQcm9qZWN0SW50cm9TZWN0aW9uQ2xhc3NOYW1lfS0tJHtcbiAgICAgICAgICAgIGlzQnJlYWtQb2ludCA/IGBpcy1hdC1icmVha3BvaW50YCA6IGBpcy1ub3QtYXQtYnJlYWtwb2ludGBcbiAgICAgICAgICB9ICR7UHJvamVjdEludHJvU2VjdGlvbkNsYXNzTmFtZX0tLSR7XG4gICAgICAgICAgICBib3VuZGluZ0NsaWVudFggPiBsYXN0VHJhbnNsYXRlWCA/IGBpcy1hdC1lbmRgIDogYGlzLW5vdC1hdC1lbmRgXG4gICAgICAgICAgfSAke1Byb2plY3RJbnRyb1NlY3Rpb25DbGFzc05hbWV9LS0ke1xuICAgICAgICAgICAgaGFzU2lkZWJhciA/IFwiaGFzLXNpZGViYXJcIiA6IFwiaGFzLW5vLXNpZGViYXJcIlxuICAgICAgICAgIH0gJHthZGRDbGFzcyAmJiBhZGRDbGFzc31gfVxuICAgICAgICA+XG4gICAgICAgICAgey8qIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fICovfVxuICAgICAgICAgIHsvKiBPdXRlciBDb250YWluZXIgd2l0aCBEeW5hbWljIEhlaWdodCAqL31cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake1Byb2plY3RJbnRyb1NlY3Rpb25DbGFzc05hbWV9X19vdXRlcmB9XG4gICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IGAke2R5bmFtaWNIZWlnaHR9cHhgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgey8qIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fICovfVxuICAgICAgICAgICAgey8qIFN0aWNreSBXcmFwcGVyICovfVxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1Byb2plY3RJbnRyb1NlY3Rpb25DbGFzc05hbWV9X19zdGlja3ktd3JhcHBlcmB9XG4gICAgICAgICAgICAgIHJlZj17Y29udGFpbmVyUmVmfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7LyogX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gKi99XG4gICAgICAgICAgICAgIHsvKiBUcmFuc2xhdGlvbiBXcmFwcGVyICovfVxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtQcm9qZWN0SW50cm9TZWN0aW9uQ2xhc3NOYW1lfV9feC10cmFuc2xhdGUtd3JhcHBlcmB9XG4gICAgICAgICAgICAgICAgLy8gc3R5bGU9e3sgdHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoJHt0cmFuc2xhdGVYfXB4LCAwcHgsIDBweClgIH19XG4gICAgICAgICAgICAgICAgcmVmPXtvYmplY3RSZWZ9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7LyogX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gKi99XG4gICAgICAgICAgICAgICAgey8qIEhvcml6b250YWwgV3JhcHBlciAqL31cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1Byb2plY3RJbnRyb1NlY3Rpb25DbGFzc05hbWV9X19ob3Jpem9udGFsLXdyYXBwZXJgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHsvKiBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAqL31cbiAgICAgICAgICAgICAgICAgIHsvKiBDb250ZW50IFdyYXBwZXIgKi99XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7UHJvamVjdEludHJvU2VjdGlvbkNsYXNzTmFtZX1fX2NvbnRlbnQtd3JhcHBlcmB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtQcm9qZWN0SW50cm9TZWN0aW9uQ2xhc3NOYW1lfV9fY29sICR7UHJvamVjdEludHJvU2VjdGlvbkNsYXNzTmFtZX1fX2ludHJvLXNlY3Rpb25gfT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7UHJvamVjdEludHJvU2VjdGlvbn1fX2ludHJvLXNlY3Rpb25fX2lubmVyYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICBJTlRST1xuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1Byb2plY3RJbnRyb1NlY3Rpb25TdHlsZT5cbiAgICAgIDwvQWZ0ZXJIZWFkbGluZVdyYXBwZXI+XG4gICAgKTtcbiAgfVxuKTtcblxuLy8gRW5kIENvbXBvbmVudFxuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Sections/ProjectIntroSection/ProjectIntroSection.tsx\n");

/***/ }),

/***/ "./components/Sections/ProjectScrollSection/styles.scss.tsx":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/dynamic.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/loadable-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/loadable.js":
false,

/***/ "./node_modules/next/dynamic.js":
false,

/***/ "./node_modules/postprocessing/build/postprocessing.esm.js":
false,

/***/ "./node_modules/three/build/three.module.js":
false,

/***/ "./node_modules/use-subscription/cjs/use-subscription.development.js":
false,

/***/ "./node_modules/use-subscription/index.js":
false,

/***/ "./node_modules/vanilla-lazyload/dist/lazyload.min.js":
false,

/***/ "./pages/projects/no-distort-with-canvas.tsx":
false,

/***/ "./sketches/p5 sync recursive ^\\.\\/.*$":
false,

/***/ "./sketches/p5/_scaffold-p5-canvas.tsx":
false,

/***/ "./sketches/p5/d1.tsx":
false,

/***/ "./sketches/p5/d2.tsx":
false,

/***/ "./sketches/p5/d8.js":
false,

/***/ "./sketches/p5/dharma-as-canvas.tsx":
false,

/***/ "./sketches/p5/dharma-water-distort.canvas.tsx":
false,

/***/ "./sketches/p5/dharma.tsx":
false,

/***/ "./sketches/p5/dharma_v0.tsx":
false,

/***/ "./sketches/p5/footer-canvas.tsx":
false,

/***/ "./sketches/p5/glsl.tsx":
false,

/***/ "./sketches/p5/no-water-distort.canvas.tsx":
false,

/***/ "./sketches/three/three-water-distort.canvas.ts":
false,

/***/ "./sketches/three/water-distort/TouchTexture.ts":
false,

/***/ "./sketches/three/water-distort/WaterEffect.ts":
false,

/***/ "./sketches/three/with-canvas-as-texture.ts":
false,

/***/ "./utils/hexToRGB.tsx":
false,

/***/ "./utils/isVisible.ts":
false,

/***/ "./utils/lazyImage.tsx":
false

})