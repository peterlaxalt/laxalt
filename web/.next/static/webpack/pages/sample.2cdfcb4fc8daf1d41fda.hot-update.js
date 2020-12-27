webpackHotUpdate_N_E("pages/sample",{

/***/ "./components/Sections/MarqueeRow/styles.scss.tsx":
/*!********************************************************!*\
  !*** ./components/Sections/MarqueeRow/styles.scss.tsx ***!
  \********************************************************/
/*! exports provided: MarqueeRowClassName, MarqueeRowMoveInitialVariableName, MarqueeRowMoveFinalVariableName, MarqueeRowOffsetVariableName, MarqueeRowAnim, MarqueeRowStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MarqueeRowClassName\", function() { return MarqueeRowClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MarqueeRowMoveInitialVariableName\", function() { return MarqueeRowMoveInitialVariableName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MarqueeRowMoveFinalVariableName\", function() { return MarqueeRowMoveFinalVariableName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MarqueeRowOffsetVariableName\", function() { return MarqueeRowOffsetVariableName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MarqueeRowAnim\", function() { return MarqueeRowAnim; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MarqueeRowStyle\", function() { return MarqueeRowStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/Root */ \"./constants/Root.tsx\");\n/* harmony import */ var _constants_styles_Animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/styles/Animation */ \"./constants/styles/Animation.tsx\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/Theme */ \"./constants/Theme.tsx\");\n/**\n *\n * MarqueeRow.js/styles.scss.tsx\n * @author Peter Laxalt\n * @description The website MarqueeRow Styles.\n *\n */\n// Imports\n//////////////////////////////////////////////////////////////////////\n// Core\n // Constants\n\n\n\n // Helpers\n// Begin Styles\n//////////////////////////////////////////////////////////////////////\n\nvar MarqueeRowClassName = \"marquee-row\";\nvar MarqueeRowMoveInitialVariableName = \"\".concat(MarqueeRowClassName, \"__move-initial\");\nvar MarqueeRowMoveFinalVariableName = \"\".concat(MarqueeRowClassName, \"__move-final\");\nvar MarqueeRowOffsetVariableName = \"\".concat(MarqueeRowClassName, \"__offset\");\nvar MarqueeRowAnim = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"keyframes\"])([\"0%{transform:translate3d(var(--\", \"),0,0);}100%{transform:translate3d(var(--\", \"),0,0);}\"], MarqueeRowMoveInitialVariableName, MarqueeRowMoveFinalVariableName);\nvar MarqueeRowStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].section.withConfig({\n  displayName: \"stylesscss__MarqueeRowStyle\",\n  componentId: \"sc-19j2qo3-0\"\n})([\"--\", \":20vw;--\", \":calc(-25% + var(--\", \"));--\", \":calc(-50% + var(--\", \"));position:relative;overflow:hidden;.\", \"__inner{width:fit-content;display:flex;position:relative;transform:translate3d(var(--\", \"),0,0);animation:\", \" 5s linear infinite;animation-play-state:running;}.\", \"__list{&__item{font-size:10vw;padding:0 2vw;}}&:hover{.\", \"__inner{animation-play-state:paused;}}\"], MarqueeRowOffsetVariableName, MarqueeRowMoveInitialVariableName, MarqueeRowOffsetVariableName, MarqueeRowMoveFinalVariableName, MarqueeRowOffsetVariableName, MarqueeRowClassName, MarqueeRowMoveInitialVariableName, MarqueeRowAnim, MarqueeRowClassName, MarqueeRowClassName);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9ucy9NYXJxdWVlUm93L3N0eWxlcy5zY3NzLnRzeD8zYzM5Il0sIm5hbWVzIjpbIk1hcnF1ZWVSb3dDbGFzc05hbWUiLCJNYXJxdWVlUm93TW92ZUluaXRpYWxWYXJpYWJsZU5hbWUiLCJNYXJxdWVlUm93TW92ZUZpbmFsVmFyaWFibGVOYW1lIiwiTWFycXVlZVJvd09mZnNldFZhcmlhYmxlTmFtZSIsIk1hcnF1ZWVSb3dBbmltIiwia2V5ZnJhbWVzIiwiTWFycXVlZVJvd1N0eWxlIiwic3R5bGVkIiwic2VjdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0NBR0E7O0FBQ0E7QUFDQTtDQUdBO0FBRUE7QUFDQTs7QUFFTyxJQUFNQSxtQkFBbUIsZ0JBQXpCO0FBQ0EsSUFBTUMsaUNBQWlDLGFBQU1ELG1CQUFOLG1CQUF2QztBQUNBLElBQU1FLCtCQUErQixhQUFNRixtQkFBTixpQkFBckM7QUFDQSxJQUFNRyw0QkFBNEIsYUFBTUgsbUJBQU4sYUFBbEM7QUFFQSxJQUFNSSxjQUFjLEdBQUdDLG1FQUFILCtGQUVRSixpQ0FGUixFQU1RQywrQkFOUixDQUFwQjtBQVVBLElBQU1JLGVBQWUsR0FBR0MseURBQU0sQ0FBQ0MsT0FBVjtBQUFBO0FBQUE7QUFBQSxrWUFFdEJMLDRCQUZzQixFQUd0QkYsaUNBSHNCLEVBR2tDRSw0QkFIbEMsRUFJdEJELCtCQUpzQixFQUlnQ0MsNEJBSmhDLEVBU3ZCSCxtQkFUdUIsRUFhT0MsaUNBYlAsRUFjWEcsY0FkVyxFQWtCdkJKLG1CQWxCdUIsRUEwQnJCQSxtQkExQnFCLENBQXJCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TZWN0aW9ucy9NYXJxdWVlUm93L3N0eWxlcy5zY3NzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqIE1hcnF1ZWVSb3cuanMvc3R5bGVzLnNjc3MudHN4XG4gKiBAYXV0aG9yIFBldGVyIExheGFsdFxuICogQGRlc2NyaXB0aW9uIFRoZSB3ZWJzaXRlIE1hcnF1ZWVSb3cgU3R5bGVzLlxuICpcbiAqL1xuXG4vLyBJbXBvcnRzXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIENvcmVcbmltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbi8vIENvbnN0YW50c1xuaW1wb3J0IHt9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvUm9vdFwiO1xuaW1wb3J0IHt9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvc3R5bGVzL0FuaW1hdGlvblwiO1xuaW1wb3J0IHt9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvVGhlbWVcIjtcblxuLy8gSGVscGVyc1xuXG4vLyBCZWdpbiBTdHlsZXNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuZXhwb3J0IGNvbnN0IE1hcnF1ZWVSb3dDbGFzc05hbWUgPSBgbWFycXVlZS1yb3dgO1xuZXhwb3J0IGNvbnN0IE1hcnF1ZWVSb3dNb3ZlSW5pdGlhbFZhcmlhYmxlTmFtZSA9IGAke01hcnF1ZWVSb3dDbGFzc05hbWV9X19tb3ZlLWluaXRpYWxgO1xuZXhwb3J0IGNvbnN0IE1hcnF1ZWVSb3dNb3ZlRmluYWxWYXJpYWJsZU5hbWUgPSBgJHtNYXJxdWVlUm93Q2xhc3NOYW1lfV9fbW92ZS1maW5hbGA7XG5leHBvcnQgY29uc3QgTWFycXVlZVJvd09mZnNldFZhcmlhYmxlTmFtZSA9IGAke01hcnF1ZWVSb3dDbGFzc05hbWV9X19vZmZzZXRgO1xuXG5leHBvcnQgY29uc3QgTWFycXVlZVJvd0FuaW0gPSBrZXlmcmFtZXNgXG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKHZhcigtLSR7TWFycXVlZVJvd01vdmVJbml0aWFsVmFyaWFibGVOYW1lfSksIDAsIDApO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCh2YXIoLS0ke01hcnF1ZWVSb3dNb3ZlRmluYWxWYXJpYWJsZU5hbWV9KSwgMCwgMCk7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBNYXJxdWVlUm93U3R5bGUgPSBzdHlsZWQuc2VjdGlvbmBcbiAgLy8gQHRzLWlnbm9yZVxuICAtLSR7TWFycXVlZVJvd09mZnNldFZhcmlhYmxlTmFtZX06IDIwdnc7XG4gIC0tJHtNYXJxdWVlUm93TW92ZUluaXRpYWxWYXJpYWJsZU5hbWV9OiBjYWxjKC0yNSUgKyB2YXIoLS0ke01hcnF1ZWVSb3dPZmZzZXRWYXJpYWJsZU5hbWV9KSk7XG4gIC0tJHtNYXJxdWVlUm93TW92ZUZpbmFsVmFyaWFibGVOYW1lfTogY2FsYygtNTAlICsgdmFyKC0tJHtNYXJxdWVlUm93T2Zmc2V0VmFyaWFibGVOYW1lfSkpO1xuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAuJHtNYXJxdWVlUm93Q2xhc3NOYW1lfV9faW5uZXIge1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKHZhcigtLSR7TWFycXVlZVJvd01vdmVJbml0aWFsVmFyaWFibGVOYW1lfSksIDAsIDApO1xuICAgIGFuaW1hdGlvbjogJHtNYXJxdWVlUm93QW5pbX0gNXMgbGluZWFyIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBydW5uaW5nO1xuICB9XG5cbiAgLiR7TWFycXVlZVJvd0NsYXNzTmFtZX1fX2xpc3Qge1xuICAgICZfX2l0ZW0ge1xuICAgICAgZm9udC1zaXplOiAxMHZ3O1xuICAgICAgcGFkZGluZzogMCAydnc7XG4gICAgfVxuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgLiR7TWFycXVlZVJvd0NsYXNzTmFtZX1fX2lubmVyIHtcbiAgICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XG4gICAgfVxuICB9XG5cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Sections/MarqueeRow/styles.scss.tsx\n");

/***/ })

})