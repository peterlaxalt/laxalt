webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Sections/ProjectScrollSection/styles.scss.tsx":
/*!******************************************************************!*\
  !*** ./components/Sections/ProjectScrollSection/styles.scss.tsx ***!
  \******************************************************************/
/*! exports provided: ProjectScrollSectionClassName, ProjectScrollSectionStyle, ScrollCardClassName, ScrollCardStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectScrollSectionClassName\", function() { return ProjectScrollSectionClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectScrollSectionStyle\", function() { return ProjectScrollSectionStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ScrollCardClassName\", function() { return ScrollCardClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ScrollCardStyle\", function() { return ScrollCardStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/Theme */ \"./constants/Theme.tsx\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/Root */ \"./constants/Root.tsx\");\n// Imports\n// _________________________________________________________________________\n// Core\n // Constants\n\n\n\n// Begin Styles\n// _________________________________________________________________________\n\n/**\n *\n * @name ProjectScrollSectionClassName\n * @description The root class name for styling. BEM naming conventions.\n *\n */\nvar ProjectScrollSectionClassName = \"project-scroll\";\n/**\n *\n * @name ProjectScrollSectionStyle\n * @author Peter Laxalt\n *\n */\n\nvar ProjectScrollSectionStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].section.withConfig({\n  displayName: \"stylesscss__ProjectScrollSectionStyle\",\n  componentId: \"sc-897oup-0\"\n})([\"&.\", \"{.\", \"__sticky-wrapper{position:sticky;top:0;height:100vh;width:100%;overflow-x:hidden;}.\", \"__content-wrapper{position:relative;height:100vh;padding:0;display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:center;padding-left:100vw;padding-right:100vw;}.\", \"__horizontal-wrapper{position:relative;width:100%;min-height:100vh;}.\", \"__x-translate-wrapper{position:absolute;height:100%;transition:transform 0.5s ease-out;will-change:transform;}.\", \"__outer{position:relative;width:100%;}}\"], ProjectScrollSectionClassName, ProjectScrollSectionClassName, ProjectScrollSectionClassName, ProjectScrollSectionClassName, ProjectScrollSectionClassName, ProjectScrollSectionClassName);\n/**\n *\n * @name ScrollCard\n * @description The root class name for styling. BEM naming conventions.\n *\n */\n\nvar ScrollCardClassName = \"scroll-card\";\nvar ScrollCardStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"stylesscss__ScrollCardStyle\",\n  componentId: \"sc-897oup-1\"\n})([\"&.\", \"{background:blue;height:100vh;width:50vw;padding:0 calc(\", \" * 2) calc(\", \" / 2) calc(\", \" * 2);display:flex;align-items:flex-end;flex-shrink:0;position:relative;&:before{content:\\\"\\\";position:absolute;right:0;top:0;bottom:0;height:100%;width:1px;background:linear-gradient( to bottom,rgba(0,0,0,0),rgba(0,0,0,0) 50%,\", \" 50%,\", \" );background-size:100% 20px;}img{width:100%;max-width:100%;}.\", \"__inner{height:calc( (100vh - ((\", \" / 2 + 2px) * 2)) - \", \" );width:100%;background:orange;}}\"], ScrollCardClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].Size, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].Size, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].Size, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[\"Theme\"].Color.varForeground, ScrollCardClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].FrameSize, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].FrameSize);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9ucy9Qcm9qZWN0U2Nyb2xsU2VjdGlvbi9zdHlsZXMuc2Nzcy50c3g/YTk5MiJdLCJuYW1lcyI6WyJQcm9qZWN0U2Nyb2xsU2VjdGlvbkNsYXNzTmFtZSIsIlByb2plY3RTY3JvbGxTZWN0aW9uU3R5bGUiLCJzdHlsZWQiLCJzZWN0aW9uIiwiU2Nyb2xsQ2FyZENsYXNzTmFtZSIsIlNjcm9sbENhcmRTdHlsZSIsImRpdiIsIlJvb3QiLCJTaXplIiwiVGhlbWUiLCJDb2xvciIsInZhckZvcmVncm91bmQiLCJGcmFtZVNpemUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7Q0FHQTs7QUFDQTtBQUNBO0FBTUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSw2QkFBNkIsR0FBRyxnQkFBdEM7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUMseUJBQXlCLEdBQUdDLHlEQUFNLENBQUNDLE9BQVY7QUFBQTtBQUFBO0FBQUEsdWdCQUNoQ0gsNkJBRGdDLEVBRS9CQSw2QkFGK0IsRUFhL0JBLDZCQWIrQixFQThCL0JBLDZCQTlCK0IsRUFxQy9CQSw2QkFyQytCLEVBOEMvQkEsNkJBOUMrQixDQUEvQjtBQXNEUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUksbUJBQW1CLEdBQUcsYUFBNUI7QUFFQSxJQUFNQyxlQUFlLEdBQUdILHlEQUFNLENBQUNJLEdBQVY7QUFBQTtBQUFBO0FBQUEseWZBQ3RCRixtQkFEc0IsRUFPTkcsb0RBQUksQ0FBQ0MsSUFQQyxFQU9pQkQsb0RBQUksQ0FBQ0MsSUFQdEIsRUFRZkQsb0RBQUksQ0FBQ0MsSUFSVSxFQWlDbEJDLHNEQUFLLENBQUNDLEtBQU4sQ0FBWUMsYUFqQ00sRUFrQ2xCRixzREFBSyxDQUFDQyxLQUFOLENBQVlDLGFBbENNLEVBNkNyQlAsbUJBN0NxQixFQStDUEcsb0RBQUksQ0FBQ0ssU0EvQ0UsRUErQzhCTCxvREFBSSxDQUFDSyxTQS9DbkMsQ0FBckIiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlY3Rpb25zL1Byb2plY3RTY3JvbGxTZWN0aW9uL3N0eWxlcy5zY3NzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cblxuLy8gQ29yZVxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuLy8gQ29uc3RhbnRzXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvVGhlbWVcIjtcbmltcG9ydCB7IFJvb3QgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL1Jvb3RcIjtcbmltcG9ydCB7XG4gIENzc0ZyYW1lUGFkZGluZ1N0cmluZyxcbiAgQ3NzRnJhbWVTaXplV2l0aEJvcmRlclN0cmluZyxcbn0gZnJvbSBcIi4uLy4uL01lbGxvd0ZyYW1lSGVhZGVyL3N0eWxlcy5zY3NzXCI7XG5cbi8vIEJlZ2luIFN0eWxlc1xuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuXG4vKipcbiAqXG4gKiBAbmFtZSBQcm9qZWN0U2Nyb2xsU2VjdGlvbkNsYXNzTmFtZVxuICogQGRlc2NyaXB0aW9uIFRoZSByb290IGNsYXNzIG5hbWUgZm9yIHN0eWxpbmcuIEJFTSBuYW1pbmcgY29udmVudGlvbnMuXG4gKlxuICovXG5leHBvcnQgY29uc3QgUHJvamVjdFNjcm9sbFNlY3Rpb25DbGFzc05hbWUgPSBcInByb2plY3Qtc2Nyb2xsXCI7XG5cbi8qKlxuICpcbiAqIEBuYW1lIFByb2plY3RTY3JvbGxTZWN0aW9uU3R5bGVcbiAqIEBhdXRob3IgUGV0ZXIgTGF4YWx0XG4gKlxuICovXG5leHBvcnQgY29uc3QgUHJvamVjdFNjcm9sbFNlY3Rpb25TdHlsZSA9IHN0eWxlZC5zZWN0aW9uYFxuICAmLiR7UHJvamVjdFNjcm9sbFNlY3Rpb25DbGFzc05hbWV9IHtcbiAgICAuJHtQcm9qZWN0U2Nyb2xsU2VjdGlvbkNsYXNzTmFtZX1fX3N0aWNreS13cmFwcGVyIHtcbiAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG5cbiAgICAgIHRvcDogMDtcblxuICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgfVxuXG4gICAgLiR7UHJvamVjdFNjcm9sbFNlY3Rpb25DbGFzc05hbWV9X19jb250ZW50LXdyYXBwZXIge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICBoZWlnaHQ6IDEwMHZoO1xuXG4gICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwMHZ3O1xuICAgICAgcGFkZGluZy1yaWdodDogMTAwdnc7XG4gICAgfVxuXG4gICAgLiR7UHJvamVjdFNjcm9sbFNlY3Rpb25DbGFzc05hbWV9X19ob3Jpem9udGFsLXdyYXBwZXIge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIH1cblxuICAgIC4ke1Byb2plY3RTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lfV9feC10cmFuc2xhdGUtd3JhcHBlciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQ7XG4gICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICAgIH1cblxuICAgIC4ke1Byb2plY3RTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lfV9fb3V0ZXIge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbmA7XG5cbi8qKlxuICpcbiAqIEBuYW1lIFNjcm9sbENhcmRcbiAqIEBkZXNjcmlwdGlvbiBUaGUgcm9vdCBjbGFzcyBuYW1lIGZvciBzdHlsaW5nLiBCRU0gbmFtaW5nIGNvbnZlbnRpb25zLlxuICpcbiAqL1xuZXhwb3J0IGNvbnN0IFNjcm9sbENhcmRDbGFzc05hbWUgPSBcInNjcm9sbC1jYXJkXCI7XG5cbmV4cG9ydCBjb25zdCBTY3JvbGxDYXJkU3R5bGUgPSBzdHlsZWQuZGl2YFxuICAmLiR7U2Nyb2xsQ2FyZENsYXNzTmFtZX0ge1xuICAgIGJhY2tncm91bmQ6IGJsdWU7XG5cbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiA1MHZ3O1xuXG4gICAgcGFkZGluZzogMCBjYWxjKCR7Um9vdC5TaXplfSAqIDIpIGNhbGMoJHtSb290LlNpemV9IC8gMilcbiAgICAgIGNhbGMoJHtSb290LlNpemV9ICogMik7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblxuICAgIGZsZXgtc2hyaW5rOiAwO1xuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJjpiZWZvcmUge1xuICAgICAgY29udGVudDogXCJcIjtcblxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgICByaWdodDogMDtcbiAgICAgIHRvcDogMDtcbiAgICAgIGJvdHRvbTogMDtcblxuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDFweDtcblxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICB0byBib3R0b20sXG4gICAgICAgIHJnYmEoMCwwLDAsIDApLFxuICAgICAgICByZ2JhKDAsMCwwLCAwKSA1MCUsXG4gICAgICAgICR7VGhlbWUuQ29sb3IudmFyRm9yZWdyb3VuZH0gNTAlLFxuICAgICAgICAke1RoZW1lLkNvbG9yLnZhckZvcmVncm91bmR9XG4gICAgICApO1xuXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMjBweDtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLiR7U2Nyb2xsQ2FyZENsYXNzTmFtZX1fX2lubmVyIHtcbiAgICAgIGhlaWdodDogY2FsYyhcbiAgICAgICAgKDEwMHZoIC0gKCgke1Jvb3QuRnJhbWVTaXplfSAvIDIgKyAycHgpICogMikpIC0gJHtSb290LkZyYW1lU2l6ZX1cbiAgICAgICk7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgYmFja2dyb3VuZDogb3JhbmdlO1xuICAgIH1cbiAgfVxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Sections/ProjectScrollSection/styles.scss.tsx\n");

/***/ })

})