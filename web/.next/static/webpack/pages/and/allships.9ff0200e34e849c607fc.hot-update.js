webpackHotUpdate_N_E("pages/and/allships",{

/***/ "./components/HeadlineWrapper/HeadlineWrapper.tsx":
/*!********************************************************!*\
  !*** ./components/HeadlineWrapper/HeadlineWrapper.tsx ***!
  \********************************************************/
/*! exports provided: HeadlineTransitionThreshold, HeadlineWrapper, AfterHeadlineWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HeadlineTransitionThreshold\", function() { return HeadlineTransitionThreshold; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HeadlineWrapper\", function() { return HeadlineWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AfterHeadlineWrapper\", function() { return AfterHeadlineWrapper; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.scss */ \"./components/HeadlineWrapper/styles.scss.tsx\");\n\n\n\nvar _jsxFileName = \"/Users/pflaxalt/Repositories/_pfl/web/components/HeadlineWrapper/HeadlineWrapper.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n// Core\n // Constants\n\n// Components\n// Styles\n // Begin Types\n// __________________________________________________________________________________________\n\n// Begin Data\n// __________________________________________________________________________________________\nvar HeadlineTransitionThreshold = 200;\nvar HeadlineWrapper = function HeadlineWrapper(_ref) {\n  _s();\n\n  var addClass = _ref.addClass,\n      children = _ref.children,\n      style = _ref.style;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isScrolled = _useState[0],\n      toggleScroll = _useState[1];\n\n  var scrollModifier = \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"HeadlineWrapperClassName\"], \"--\").concat(isScrolled ? \"is-scrolled\" : \"is-not-scrolled\");\n\n  var listenToScroll = function listenToScroll() {\n    if (window.scrollY > HeadlineTransitionThreshold) {\n      toggleScroll(true);\n      return;\n    } else {\n      toggleScroll(false);\n      return;\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (\"object\") {\n      window.addEventListener(\"scroll\", listenToScroll);\n    }\n\n    return function () {\n      window.removeEventListener(\"scroll\", listenToScroll);\n    };\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"HeadlineWrapperStyle\"], {\n    className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"HeadlineWrapperClassName\"], \" \").concat(scrollModifier, \" \").concat(addClass && addClass, \" \"),\n    style: _objectSpread({}, style),\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 59,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(HeadlineWrapper, \"n43vJOSxoa2kGE2zyj/2admRKZA=\");\n\n_c = HeadlineWrapper;\nvar AfterHeadlineWrapper = function AfterHeadlineWrapper(_ref2) {\n  _s2();\n\n  var addClass = _ref2.addClass,\n      children = _ref2.children,\n      style = _ref2.style;\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isScrolled = _useState2[0],\n      toggleScroll = _useState2[1];\n\n  var scrollModifier = \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"HeadlineWrapperClassName\"], \"__after--\").concat(isScrolled ? \"is-scrolled\" : \"is-not-scrolled\");\n\n  var listenToScroll = function listenToScroll() {\n    if (window.scrollY > HeadlineTransitionThreshold) {\n      toggleScroll(true);\n      return;\n    } else {\n      toggleScroll(false);\n      return;\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (\"object\") {\n      window.addEventListener(\"scroll\", listenToScroll);\n    }\n\n    return function () {\n      window.removeEventListener(\"scroll\", listenToScroll);\n    };\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"HeadlineWrapperStyle\"], {\n    className: \"\".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"HeadlineWrapperClassName\"], \"__after \").concat(scrollModifier, \" \").concat(addClass && addClass, \" \"),\n    style: _objectSpread({}, style),\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 103,\n    columnNumber: 5\n  }, _this);\n}; // End Component\n// ______________________________________________________________________________\n\n_s2(AfterHeadlineWrapper, \"n43vJOSxoa2kGE2zyj/2admRKZA=\");\n\n_c2 = AfterHeadlineWrapper;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"HeadlineWrapper\");\n$RefreshReg$(_c2, \"AfterHeadlineWrapper\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkbGluZVdyYXBwZXIvSGVhZGxpbmVXcmFwcGVyLnRzeD84YTNkIl0sIm5hbWVzIjpbIkhlYWRsaW5lVHJhbnNpdGlvblRocmVzaG9sZCIsIkhlYWRsaW5lV3JhcHBlciIsImFkZENsYXNzIiwiY2hpbGRyZW4iLCJzdHlsZSIsInVzZVN0YXRlIiwiaXNTY3JvbGxlZCIsInRvZ2dsZVNjcm9sbCIsInNjcm9sbE1vZGlmaWVyIiwiSGVhZGxpbmVXcmFwcGVyQ2xhc3NOYW1lIiwibGlzdGVuVG9TY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJBZnRlckhlYWRsaW5lV3JhcHBlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBR0E7QUFFQTtDQUdBO0FBQ0E7O0FBUUE7QUFDQTtBQUVPLElBQU1BLDJCQUEyQixHQUFHLEdBQXBDO0FBRUEsSUFBTUMsZUFBOEQsR0FBRyxTQUFqRUEsZUFBaUUsT0FJeEU7QUFBQTs7QUFBQSxNQUhKQyxRQUdJLFFBSEpBLFFBR0k7QUFBQSxNQUZKQyxRQUVJLFFBRkpBLFFBRUk7QUFBQSxNQURKQyxLQUNJLFFBREpBLEtBQ0k7O0FBQUEsa0JBQytCQyxzREFBUSxDQUFDLEtBQUQsQ0FEdkM7QUFBQSxNQUNHQyxVQURIO0FBQUEsTUFDZUMsWUFEZjs7QUFHSixNQUFJQyxjQUFjLGFBQU1DLHFFQUFOLGVBQ2hCSCxVQUFVLG9DQURNLENBQWxCOztBQUlBLE1BQU1JLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQixRQUFJQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJaLDJCQUFyQixFQUFrRDtBQUNoRE8sa0JBQVksQ0FBQyxJQUFELENBQVo7QUFFQTtBQUNELEtBSkQsTUFJTztBQUNMQSxrQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUVBO0FBQ0Q7QUFDRixHQVZEOztBQVlBTSx5REFBUyxDQUFDLFlBQU07QUFDZCxrQkFBbUI7QUFDakJGLFlBQU0sQ0FBQ0csZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NKLGNBQWxDO0FBQ0Q7O0FBQ0QsV0FBTyxZQUFNO0FBQ1hDLFlBQU0sQ0FBQ0ksbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNMLGNBQXJDO0FBQ0QsS0FGRDtBQUdELEdBUFEsQ0FBVDtBQVNBLHNCQUNFLHFFQUFDLGlFQUFEO0FBQ0UsYUFBUyxZQUFLRCxxRUFBTCxjQUFpQ0QsY0FBakMsY0FDUE4sUUFBUSxJQUFJQSxRQURMLE1BRFg7QUFJRSxTQUFLLG9CQUFPRSxLQUFQLENBSlA7QUFBQSxjQU1HRDtBQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVVELENBMUNNOztHQUFNRixlOztLQUFBQSxlO0FBNENOLElBQU1lLG9CQUFtRSxHQUFHLFNBQXRFQSxvQkFBc0UsUUFJN0U7QUFBQTs7QUFBQSxNQUhKZCxRQUdJLFNBSEpBLFFBR0k7QUFBQSxNQUZKQyxRQUVJLFNBRkpBLFFBRUk7QUFBQSxNQURKQyxLQUNJLFNBREpBLEtBQ0k7O0FBQUEsbUJBQytCQyxzREFBUSxDQUFDLEtBQUQsQ0FEdkM7QUFBQSxNQUNHQyxVQURIO0FBQUEsTUFDZUMsWUFEZjs7QUFHSixNQUFJQyxjQUFjLGFBQU1DLHFFQUFOLHNCQUNoQkgsVUFBVSxvQ0FETSxDQUFsQjs7QUFJQSxNQUFNSSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0IsUUFBSUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCWiwyQkFBckIsRUFBa0Q7QUFDaERPLGtCQUFZLENBQUMsSUFBRCxDQUFaO0FBRUE7QUFDRCxLQUpELE1BSU87QUFDTEEsa0JBQVksQ0FBQyxLQUFELENBQVo7QUFFQTtBQUNEO0FBQ0YsR0FWRDs7QUFZQU0seURBQVMsQ0FBQyxZQUFNO0FBQ2Qsa0JBQW1CO0FBQ2pCRixZQUFNLENBQUNHLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDSixjQUFsQztBQUNEOztBQUNELFdBQU8sWUFBTTtBQUNYQyxZQUFNLENBQUNJLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDTCxjQUFyQztBQUNELEtBRkQ7QUFHRCxHQVBRLENBQVQ7QUFTQSxzQkFDRSxxRUFBQyxpRUFBRDtBQUNFLGFBQVMsWUFBS0QscUVBQUwscUJBQXdDRCxjQUF4QyxjQUNQTixRQUFRLElBQUlBLFFBREwsTUFEWDtBQUlFLFNBQUssb0JBQU9FLEtBQVAsQ0FKUDtBQUFBLGNBTUdEO0FBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBVUQsQ0ExQ00sQyxDQTRDUDtBQUNBOztJQTdDYWEsb0I7O01BQUFBLG9CIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9IZWFkbGluZVdyYXBwZXIvSGVhZGxpbmVXcmFwcGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcmVcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbi8vIENvbnN0YW50c1xuaW1wb3J0IHsgX19ERUJVR19fIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9zaXRlL1NldHRpbmdzXCI7XG5cbi8vIENvbXBvbmVudHNcblxuLy8gU3R5bGVzXG5pbXBvcnQgeyBIZWFkbGluZVdyYXBwZXJDbGFzc05hbWUsIEhlYWRsaW5lV3JhcHBlclN0eWxlIH0gZnJvbSBcIi4vc3R5bGVzLnNjc3NcIjtcblxuLy8gQmVnaW4gVHlwZXNcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuXG5leHBvcnQgdHlwZSBMWExUX0hlYWRsaW5lV3JhcHBlciA9IHtcbiAgYWRkQ2xhc3M/OiBzdHJpbmc7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gIHN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllcztcbn07XG5cbi8vIEJlZ2luIERhdGFcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuXG5leHBvcnQgY29uc3QgSGVhZGxpbmVUcmFuc2l0aW9uVGhyZXNob2xkID0gMjAwO1xuXG5leHBvcnQgY29uc3QgSGVhZGxpbmVXcmFwcGVyOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxMWExUX0hlYWRsaW5lV3JhcHBlcj4gPSAoe1xuICBhZGRDbGFzcyxcbiAgY2hpbGRyZW4sXG4gIHN0eWxlLFxufSkgPT4ge1xuICBjb25zdCBbaXNTY3JvbGxlZCwgdG9nZ2xlU2Nyb2xsXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBsZXQgc2Nyb2xsTW9kaWZpZXIgPSBgJHtIZWFkbGluZVdyYXBwZXJDbGFzc05hbWV9LS0ke1xuICAgIGlzU2Nyb2xsZWQgPyBgaXMtc2Nyb2xsZWRgIDogYGlzLW5vdC1zY3JvbGxlZGBcbiAgfWA7XG5cbiAgY29uc3QgbGlzdGVuVG9TY3JvbGwgPSAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gSGVhZGxpbmVUcmFuc2l0aW9uVGhyZXNob2xkKSB7XG4gICAgICB0b2dnbGVTY3JvbGwodHJ1ZSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9nZ2xlU2Nyb2xsKGZhbHNlKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygd2luZG93KSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBsaXN0ZW5Ub1Njcm9sbCk7XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBsaXN0ZW5Ub1Njcm9sbCk7XG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8SGVhZGxpbmVXcmFwcGVyU3R5bGVcbiAgICAgIGNsYXNzTmFtZT17YCR7SGVhZGxpbmVXcmFwcGVyQ2xhc3NOYW1lfSAke3Njcm9sbE1vZGlmaWVyfSAke1xuICAgICAgICBhZGRDbGFzcyAmJiBhZGRDbGFzc1xuICAgICAgfSBgfVxuICAgICAgc3R5bGU9e3sgLi4uc3R5bGUgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9IZWFkbGluZVdyYXBwZXJTdHlsZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBBZnRlckhlYWRsaW5lV3JhcHBlcjogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8TFhMVF9IZWFkbGluZVdyYXBwZXI+ID0gKHtcbiAgYWRkQ2xhc3MsXG4gIGNoaWxkcmVuLFxuICBzdHlsZSxcbn0pID0+IHtcbiAgY29uc3QgW2lzU2Nyb2xsZWQsIHRvZ2dsZVNjcm9sbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgbGV0IHNjcm9sbE1vZGlmaWVyID0gYCR7SGVhZGxpbmVXcmFwcGVyQ2xhc3NOYW1lfV9fYWZ0ZXItLSR7XG4gICAgaXNTY3JvbGxlZCA/IGBpcy1zY3JvbGxlZGAgOiBgaXMtbm90LXNjcm9sbGVkYFxuICB9YDtcblxuICBjb25zdCBsaXN0ZW5Ub1Njcm9sbCA9ICgpID0+IHtcbiAgICBpZiAod2luZG93LnNjcm9sbFkgPiBIZWFkbGluZVRyYW5zaXRpb25UaHJlc2hvbGQpIHtcbiAgICAgIHRvZ2dsZVNjcm9sbCh0cnVlKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b2dnbGVTY3JvbGwoZmFsc2UpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGxpc3RlblRvU2Nyb2xsKTtcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGxpc3RlblRvU2Nyb2xsKTtcbiAgICB9O1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxIZWFkbGluZVdyYXBwZXJTdHlsZVxuICAgICAgY2xhc3NOYW1lPXtgJHtIZWFkbGluZVdyYXBwZXJDbGFzc05hbWV9X19hZnRlciAke3Njcm9sbE1vZGlmaWVyfSAke1xuICAgICAgICBhZGRDbGFzcyAmJiBhZGRDbGFzc1xuICAgICAgfSBgfVxuICAgICAgc3R5bGU9e3sgLi4uc3R5bGUgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9IZWFkbGluZVdyYXBwZXJTdHlsZT5cbiAgKTtcbn07XG5cbi8vIEVuZCBDb21wb25lbnRcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/HeadlineWrapper/HeadlineWrapper.tsx\n");

/***/ })

})