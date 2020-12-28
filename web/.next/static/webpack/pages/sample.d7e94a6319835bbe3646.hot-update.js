webpackHotUpdate_N_E("pages/sample",{

/***/ "./components/Sections/MarqueeRow/styles.scss.tsx":
/*!********************************************************!*\
  !*** ./components/Sections/MarqueeRow/styles.scss.tsx ***!
  \********************************************************/
/*! exports provided: MarqueeRowClassName, MarqueeRowMoveInitialVariableName, MarqueeRowMoveFinalVariableName, MarqueeRowOffsetVariableName, MarqueeRowAnim, MarqueeRowStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MarqueeRowClassName\", function() { return MarqueeRowClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MarqueeRowMoveInitialVariableName\", function() { return MarqueeRowMoveInitialVariableName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MarqueeRowMoveFinalVariableName\", function() { return MarqueeRowMoveFinalVariableName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MarqueeRowOffsetVariableName\", function() { return MarqueeRowOffsetVariableName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MarqueeRowAnim\", function() { return MarqueeRowAnim; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MarqueeRowStyle\", function() { return MarqueeRowStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/Root */ \"./constants/Root.tsx\");\n/* harmony import */ var _constants_styles_Animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/styles/Animation */ \"./constants/styles/Animation.tsx\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/Theme */ \"./constants/Theme.tsx\");\n/* harmony import */ var _LayeredSidebar_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../LayeredSidebar/styles.scss */ \"./components/LayeredSidebar/styles.scss.tsx\");\n/* harmony import */ var _MellowFrameHeader_styles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../MellowFrameHeader/styles.scss */ \"./components/MellowFrameHeader/styles.scss.tsx\");\n/**\n *\n * MarqueeRow.js/styles.scss.tsx\n * @author Peter Laxalt\n * @description The website MarqueeRow Styles.\n *\n */\n// Imports\n//////////////////////////////////////////////////////////////////////\n// Core\n // Constants\n\n\n\n\n\n // Helpers\n// Begin Styles\n//////////////////////////////////////////////////////////////////////\n\nvar MarqueeRowClassName = \"marquee-row\";\nvar MarqueeRowMoveInitialVariableName = \"\".concat(MarqueeRowClassName, \"__move-initial\");\nvar MarqueeRowMoveFinalVariableName = \"\".concat(MarqueeRowClassName, \"__move-final\");\nvar MarqueeRowOffsetVariableName = \"\".concat(MarqueeRowClassName, \"__offset\");\nvar MarqueeRowAnim = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"keyframes\"])([\"0%{transform:translate3d(var(--\", \"),0,0);}100%{transform:translate3d(var(--\", \"),0,0);}\"], MarqueeRowMoveInitialVariableName, MarqueeRowMoveFinalVariableName);\nvar MarqueeRowStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].section.withConfig({\n  displayName: \"stylesscss__MarqueeRowStyle\",\n  componentId: \"sc-19j2qo3-0\"\n})([\"--\", \":0vw;--\", \":calc(-25% + var(--\", \"));--\", \":calc(-50% + var(--\", \"));position:relative;overflow:hidden;padding-top:1.5rem;background:pink;&.\", \"--has-sidebar{width:calc(100vw - (\", \" * 2));clip-path:polygon(0% 0%,0% 100%,100% 100%);margin-left:calc(\", \" * -1);}.\", \"__inner{width:fit-content;display:flex;position:relative;transform:translate3d(var(--\", \"),0,0);animation:\", \" 15s linear infinite;animation-play-state:running;}.\", \"__list{&__item{font-size:11rem;padding:0 2vw;}}\"], MarqueeRowOffsetVariableName, MarqueeRowMoveInitialVariableName, MarqueeRowOffsetVariableName, MarqueeRowMoveFinalVariableName, MarqueeRowOffsetVariableName, MarqueeRowClassName, _MellowFrameHeader_styles_scss__WEBPACK_IMPORTED_MODULE_5__[\"CssFrameSizeWithBorderString\"], _LayeredSidebar_styles_scss__WEBPACK_IMPORTED_MODULE_4__[\"LayeredSidebarWidth\"], MarqueeRowClassName, MarqueeRowMoveInitialVariableName, MarqueeRowAnim, MarqueeRowClassName);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9ucy9NYXJxdWVlUm93L3N0eWxlcy5zY3NzLnRzeD8zYzM5Il0sIm5hbWVzIjpbIk1hcnF1ZWVSb3dDbGFzc05hbWUiLCJNYXJxdWVlUm93TW92ZUluaXRpYWxWYXJpYWJsZU5hbWUiLCJNYXJxdWVlUm93TW92ZUZpbmFsVmFyaWFibGVOYW1lIiwiTWFycXVlZVJvd09mZnNldFZhcmlhYmxlTmFtZSIsIk1hcnF1ZWVSb3dBbmltIiwia2V5ZnJhbWVzIiwiTWFycXVlZVJvd1N0eWxlIiwic3R5bGVkIiwic2VjdGlvbiIsIkNzc0ZyYW1lU2l6ZVdpdGhCb3JkZXJTdHJpbmciLCJMYXllcmVkU2lkZWJhcldpZHRoIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUVBO0FBQ0E7O0FBRU8sSUFBTUEsbUJBQW1CLGdCQUF6QjtBQUNBLElBQU1DLGlDQUFpQyxhQUFNRCxtQkFBTixtQkFBdkM7QUFDQSxJQUFNRSwrQkFBK0IsYUFBTUYsbUJBQU4saUJBQXJDO0FBQ0EsSUFBTUcsNEJBQTRCLGFBQU1ILG1CQUFOLGFBQWxDO0FBRUEsSUFBTUksY0FBYyxHQUFHQyxtRUFBSCwrRkFFUUosaUNBRlIsRUFNUUMsK0JBTlIsQ0FBcEI7QUFVQSxJQUFNSSxlQUFlLEdBQUdDLHlEQUFNLENBQUNDLE9BQVY7QUFBQTtBQUFBO0FBQUEsOGVBRXRCTCw0QkFGc0IsRUFHdEJGLGlDQUhzQixFQUdrQ0UsNEJBSGxDLEVBSXRCRCwrQkFKc0IsRUFJZ0NDLDRCQUpoQyxFQWF0QkgsbUJBYnNCLEVBY0RTLDJGQWRDLEVBa0JKQywrRUFsQkksRUFxQnZCVixtQkFyQnVCLEVBeUJPQyxpQ0F6QlAsRUEwQlhHLGNBMUJXLEVBOEJ2QkosbUJBOUJ1QixDQUFyQiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2VjdGlvbnMvTWFycXVlZVJvdy9zdHlsZXMuc2Nzcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqXG4gKiBNYXJxdWVlUm93LmpzL3N0eWxlcy5zY3NzLnRzeFxuICogQGF1dGhvciBQZXRlciBMYXhhbHRcbiAqIEBkZXNjcmlwdGlvbiBUaGUgd2Vic2l0ZSBNYXJxdWVlUm93IFN0eWxlcy5cbiAqXG4gKi9cblxuLy8gSW1wb3J0c1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBDb3JlXG5pbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG4vLyBDb25zdGFudHNcbmltcG9ydCB7fSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL1Jvb3RcIjtcbmltcG9ydCB7fSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL3N0eWxlcy9BbmltYXRpb25cIjtcbmltcG9ydCB7fSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL1RoZW1lXCI7XG5pbXBvcnQgeyBMYXllcmVkU2lkZWJhcldpZHRoIH0gZnJvbSBcIi4uLy4uL0xheWVyZWRTaWRlYmFyL3N0eWxlcy5zY3NzXCI7XG5pbXBvcnQgeyBDc3NGcmFtZVNpemVXaXRoQm9yZGVyU3RyaW5nIH0gZnJvbSBcIi4uLy4uL01lbGxvd0ZyYW1lSGVhZGVyL3N0eWxlcy5zY3NzXCI7XG5cbi8vIEhlbHBlcnNcblxuLy8gQmVnaW4gU3R5bGVzXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmV4cG9ydCBjb25zdCBNYXJxdWVlUm93Q2xhc3NOYW1lID0gYG1hcnF1ZWUtcm93YDtcbmV4cG9ydCBjb25zdCBNYXJxdWVlUm93TW92ZUluaXRpYWxWYXJpYWJsZU5hbWUgPSBgJHtNYXJxdWVlUm93Q2xhc3NOYW1lfV9fbW92ZS1pbml0aWFsYDtcbmV4cG9ydCBjb25zdCBNYXJxdWVlUm93TW92ZUZpbmFsVmFyaWFibGVOYW1lID0gYCR7TWFycXVlZVJvd0NsYXNzTmFtZX1fX21vdmUtZmluYWxgO1xuZXhwb3J0IGNvbnN0IE1hcnF1ZWVSb3dPZmZzZXRWYXJpYWJsZU5hbWUgPSBgJHtNYXJxdWVlUm93Q2xhc3NOYW1lfV9fb2Zmc2V0YDtcblxuZXhwb3J0IGNvbnN0IE1hcnF1ZWVSb3dBbmltID0ga2V5ZnJhbWVzYFxuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCh2YXIoLS0ke01hcnF1ZWVSb3dNb3ZlSW5pdGlhbFZhcmlhYmxlTmFtZX0pLCAwLCAwKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QodmFyKC0tJHtNYXJxdWVlUm93TW92ZUZpbmFsVmFyaWFibGVOYW1lfSksIDAsIDApO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTWFycXVlZVJvd1N0eWxlID0gc3R5bGVkLnNlY3Rpb25gXG4gIC8vIEB0cy1pZ25vcmVcbiAgLS0ke01hcnF1ZWVSb3dPZmZzZXRWYXJpYWJsZU5hbWV9OiAwdnc7XG4gIC0tJHtNYXJxdWVlUm93TW92ZUluaXRpYWxWYXJpYWJsZU5hbWV9OiBjYWxjKC0yNSUgKyB2YXIoLS0ke01hcnF1ZWVSb3dPZmZzZXRWYXJpYWJsZU5hbWV9KSk7XG4gIC0tJHtNYXJxdWVlUm93TW92ZUZpbmFsVmFyaWFibGVOYW1lfTogY2FsYygtNTAlICsgdmFyKC0tJHtNYXJxdWVlUm93T2Zmc2V0VmFyaWFibGVOYW1lfSkpO1xuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICBwYWRkaW5nLXRvcDogMS41cmVtO1xuXG4gIGJhY2tncm91bmQ6IHBpbms7XG5cbiAgJi4ke01hcnF1ZWVSb3dDbGFzc05hbWV9LS1oYXMtc2lkZWJhciB7XG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAoJHtDc3NGcmFtZVNpemVXaXRoQm9yZGVyU3RyaW5nfSAqIDIpKTtcblxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwJSAwJSwgMCUgMTAwJSwgMTAwJSAxMDAlKTtcblxuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCR7TGF5ZXJlZFNpZGViYXJXaWR0aH0gKiAtMSk7XG4gIH1cblxuICAuJHtNYXJxdWVlUm93Q2xhc3NOYW1lfV9faW5uZXIge1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKHZhcigtLSR7TWFycXVlZVJvd01vdmVJbml0aWFsVmFyaWFibGVOYW1lfSksIDAsIDApO1xuICAgIGFuaW1hdGlvbjogJHtNYXJxdWVlUm93QW5pbX0gMTVzIGxpbmVhciBpbmZpbml0ZTtcbiAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZztcbiAgfVxuXG4gIC4ke01hcnF1ZWVSb3dDbGFzc05hbWV9X19saXN0IHtcbiAgICAmX19pdGVtIHtcbiAgICAgIGZvbnQtc2l6ZTogMTFyZW07XG4gICAgICBwYWRkaW5nOiAwIDJ2dztcbiAgICB9XG4gIH1cblxuICAvKiAmOmhvdmVyIHtcbiAgICAuJHtNYXJxdWVlUm93Q2xhc3NOYW1lfV9faW5uZXIge1xuICAgICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcbiAgICB9XG4gIH0gKi9cblxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Sections/MarqueeRow/styles.scss.tsx\n");

/***/ })

})