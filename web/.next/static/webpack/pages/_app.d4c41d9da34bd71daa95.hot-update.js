webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/ThemePicker/styles.scss.tsx":
/*!************************************************!*\
  !*** ./components/ThemePicker/styles.scss.tsx ***!
  \************************************************/
/*! exports provided: ThemePickerClassName, ThemePickerStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ThemePickerClassName\", function() { return ThemePickerClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ThemePickerStyle\", function() { return ThemePickerStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/Theme */ \"./constants/Theme.tsx\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/Root */ \"./constants/Root.tsx\");\n/* harmony import */ var _constants_styles_CssUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/styles/CssUtils */ \"./constants/styles/CssUtils.tsx\");\n// Imports\n// _________________________________________________________________________\n// Core\n // Constants\n\n\n\n // Begin Styles\n// _________________________________________________________________________\n\n/**\n *\n * @name ThemePickerClassName\n * @description The root class name for styling. BEM naming conventions.\n *\n */\n\nvar ThemePickerClassName = \"theme-picker\";\n/**\n *\n * @name ThemePickerStyle\n * @author Peter Laxalt\n *\n */\n\nvar ThemePickerStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"stylesscss__ThemePickerStyle\",\n  componentId: \"zgtval-0\"\n})([\"&.\", \"{height:calc(\", \");display:flex;align-items:center;border-left:2px solid \", \";border-right:2px solid \", \";border-bottom:2px solid \", \";background:\", \";z-index:990;.\", \"__option{width:calc(\", \" * 0.5);height:calc(\", \" * 0.5);position:relative;border:2px solid \", \";border-radius:50%;margin:0 0.5rem;box-shadow:0px 0px 0px 2px \", \";&:hover{box-shadow:0px 0px 0px 3px \", \";}&:focus,&:active{box-shadow:0px 0px 0px 2px \", \";}&--active{box-shadow:0px 0px 0px 4px \", \";&:hover{box-shadow:0px 0px 0px 4px \", \";}}&__el{position:absolute;left:0;top:0;width:100%;height:100%;display:block;border-radius:50%;&--secondary{clip-path:polygon(0% 0%,100% 0%,100% 50%,0% 50%);}}}}\"], ThemePickerClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].FrameSize, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[\"Theme\"].Color.varBackground, ThemePickerClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].FrameSize, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].FrameSize, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[\"Theme\"].Color.varBackground, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[\"Theme\"].Color.varForeground);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UaGVtZVBpY2tlci9zdHlsZXMuc2Nzcy50c3g/ZGJiMiJdLCJuYW1lcyI6WyJUaGVtZVBpY2tlckNsYXNzTmFtZSIsIlRoZW1lUGlja2VyU3R5bGUiLCJzdHlsZWQiLCJkaXYiLCJSb290IiwiRnJhbWVTaXplIiwiVGhlbWUiLCJDb2xvciIsInZhckZvcmVncm91bmQiLCJ2YXJCYWNrZ3JvdW5kIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtDQUdBOztBQUNBO0FBQ0E7Q0FHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQSxvQkFBb0IsR0FBRyxjQUE3QjtBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQyxnQkFBZ0IsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxzcUJBQ3ZCSCxvQkFEdUIsRUFFVkksb0RBQUksQ0FBQ0MsU0FGSyxFQU9BQyxzREFBSyxDQUFDQyxLQUFOLENBQVlDLGFBUFosRUFRQ0Ysc0RBQUssQ0FBQ0MsS0FBTixDQUFZQyxhQVJiLEVBU0VGLHNEQUFLLENBQUNDLEtBQU4sQ0FBWUMsYUFUZCxFQVdYRixzREFBSyxDQUFDQyxLQUFOLENBQVlFLGFBWEQsRUFldEJULG9CQWZzQixFQWdCVEksb0RBQUksQ0FBQ0MsU0FoQkksRUFpQlJELG9EQUFJLENBQUNDLFNBakJHLEVBcUJIQyxzREFBSyxDQUFDQyxLQUFOLENBQVlFLGFBckJULEVBMkJPSCxzREFBSyxDQUFDQyxLQUFOLENBQVlDLGFBM0JuQixFQThCU0Ysc0RBQUssQ0FBQ0MsS0FBTixDQUFZQyxhQTlCckIsRUFtQ1NGLHNEQUFLLENBQUNDLEtBQU4sQ0FBWUMsYUFuQ3JCLEVBdUNTRixzREFBSyxDQUFDQyxLQUFOLENBQVlDLGFBdkNyQixFQTBDV0Ysc0RBQUssQ0FBQ0MsS0FBTixDQUFZQyxhQTFDdkIsQ0FBdEIiLCJmaWxlIjoiLi9jb21wb25lbnRzL1RoZW1lUGlja2VyL3N0eWxlcy5zY3NzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cblxuLy8gQ29yZVxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuLy8gQ29uc3RhbnRzXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvVGhlbWVcIjtcbmltcG9ydCB7IFJvb3QgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL1Jvb3RcIjtcbmltcG9ydCB7fSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL3N0eWxlcy9Dc3NVdGlsc1wiO1xuXG4vLyBCZWdpbiBTdHlsZXNcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cblxuLyoqXG4gKlxuICogQG5hbWUgVGhlbWVQaWNrZXJDbGFzc05hbWVcbiAqIEBkZXNjcmlwdGlvbiBUaGUgcm9vdCBjbGFzcyBuYW1lIGZvciBzdHlsaW5nLiBCRU0gbmFtaW5nIGNvbnZlbnRpb25zLlxuICpcbiAqL1xuZXhwb3J0IGNvbnN0IFRoZW1lUGlja2VyQ2xhc3NOYW1lID0gXCJ0aGVtZS1waWNrZXJcIjtcblxuLyoqXG4gKlxuICogQG5hbWUgVGhlbWVQaWNrZXJTdHlsZVxuICogQGF1dGhvciBQZXRlciBMYXhhbHRcbiAqXG4gKi9cbmV4cG9ydCBjb25zdCBUaGVtZVBpY2tlclN0eWxlID0gc3R5bGVkLmRpdmBcbiAgJi4ke1RoZW1lUGlja2VyQ2xhc3NOYW1lfSB7XG4gICAgaGVpZ2h0OiBjYWxjKCR7Um9vdC5GcmFtZVNpemV9KTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgJHtUaGVtZS5Db2xvci52YXJGb3JlZ3JvdW5kfTtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAke1RoZW1lLkNvbG9yLnZhckZvcmVncm91bmR9O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAke1RoZW1lLkNvbG9yLnZhckZvcmVncm91bmR9O1xuXG4gICAgYmFja2dyb3VuZDogJHtUaGVtZS5Db2xvci52YXJCYWNrZ3JvdW5kfTtcblxuICAgIHotaW5kZXg6IDk5MDtcblxuICAgIC4ke1RoZW1lUGlja2VyQ2xhc3NOYW1lfV9fb3B0aW9uIHtcbiAgICAgIHdpZHRoOiBjYWxjKCR7Um9vdC5GcmFtZVNpemV9ICogMC41KTtcbiAgICAgIGhlaWdodDogY2FsYygke1Jvb3QuRnJhbWVTaXplfSAqIDAuNSk7XG5cbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgYm9yZGVyOiAycHggc29saWQgJHtUaGVtZS5Db2xvci52YXJCYWNrZ3JvdW5kfTtcblxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gICAgICBtYXJnaW46IDAgMC41cmVtO1xuXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAycHggJHtUaGVtZS5Db2xvci52YXJGb3JlZ3JvdW5kfTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDNweCAke1RoZW1lLkNvbG9yLnZhckZvcmVncm91bmR9O1xuICAgICAgfVxuXG4gICAgICAmOmZvY3VzLFxuICAgICAgJjphY3RpdmUge1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAycHggJHtUaGVtZS5Db2xvci52YXJGb3JlZ3JvdW5kfTtcbiAgICAgIH1cblxuICAgICAgJi0tYWN0aXZlIHtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggNHB4ICR7VGhlbWUuQ29sb3IudmFyRm9yZWdyb3VuZH07XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggNHB4ICR7VGhlbWUuQ29sb3IudmFyRm9yZWdyb3VuZH07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJl9fZWwge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiAwO1xuXG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gICAgICAgICYtLXNlY29uZGFyeSB7XG4gICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDAlLCAxMDAlIDAlLCAxMDAlIDUwJSwgMCUgNTAlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ThemePicker/styles.scss.tsx\n");

/***/ })

})