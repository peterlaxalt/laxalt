webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Sections/ProjectScrollSection/styles.scss.tsx":
/*!******************************************************************!*\
  !*** ./components/Sections/ProjectScrollSection/styles.scss.tsx ***!
  \******************************************************************/
/*! exports provided: ProjectScrollSectionClassName, ProjectScrollSectionStyle, ScrollCardClassName, ScrollCardStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectScrollSectionClassName\", function() { return ProjectScrollSectionClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectScrollSectionStyle\", function() { return ProjectScrollSectionStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ScrollCardClassName\", function() { return ScrollCardClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ScrollCardStyle\", function() { return ScrollCardStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/Theme */ \"./constants/Theme.tsx\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/Root */ \"./constants/Root.tsx\");\n// Imports\n// _________________________________________________________________________\n// Core\n // Constants\n\n\n\n// Begin Styles\n// _________________________________________________________________________\n\n/**\n *\n * @name ProjectScrollSectionClassName\n * @description The root class name for styling. BEM naming conventions.\n *\n */\nvar ProjectScrollSectionClassName = \"project-scroll\";\n/**\n *\n * @name ProjectScrollSectionStyle\n * @author Peter Laxalt\n *\n */\n\nvar ProjectScrollSectionStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].section.withConfig({\n  displayName: \"stylesscss__ProjectScrollSectionStyle\",\n  componentId: \"sc-897oup-0\"\n})([\"&.\", \"{.\", \"__sticky-wrapper{position:sticky;top:0;height:100vh;width:100%;overflow-x:hidden;}.\", \"__content-wrapper{position:relative;height:100vh;padding:0;display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:center;padding-left:100vw;padding-right:100vw;}.\", \"__horizontal-wrapper{position:relative;width:100%;min-height:100vh;}.\", \"__x-translate-wrapper{position:absolute;height:100%;transition:transform 0.5s ease-out;will-change:transform;}.\", \"__outer{position:relative;width:100%;}}\"], ProjectScrollSectionClassName, ProjectScrollSectionClassName, ProjectScrollSectionClassName, ProjectScrollSectionClassName, ProjectScrollSectionClassName, ProjectScrollSectionClassName);\n/**\n *\n * @name ScrollCard\n * @description The root class name for styling. BEM naming conventions.\n *\n */\n\nvar ScrollCardClassName = \"scroll-card\";\nvar ScrollCardStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"stylesscss__ScrollCardStyle\",\n  componentId: \"sc-897oup-1\"\n})([\"&.\", \"{background:blue;height:100vh;width:50vw;padding:0 calc(\", \" * 2) calc(\", \" / 2) calc(\", \" * 2);display:flex;align-items:flex-end;flex-shrink:0;position:relative;&:before,&:after{content:\\\"\\\";position:absolute;height:100%;width:1px;background:linear-gradient( to bottom,rgba(0,0,0,0),rgba(0,0,0,0) 50%,\", \" 50%,\", \" );background-size:100% 6px;}&:after{right:0;top:0;bottom:0;}&:before{left:50%;top:0;bottom:0;transform:translateX(-50%);}img{width:100%;max-width:100%;}.\", \"__inner{height:calc( (100vh - ((\", \" / 2 + 2px) * 2)) - \", \" );width:100%;position:relative;z-index:2;display:flex;justify-content:space-between;flex-direction:column;background:orange;}.\", \"__row{display:flex;justify-content:space-between;}}\"], ScrollCardClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].Size, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].Size, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].Size, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[\"Theme\"].Color.varForeground, ScrollCardClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].FrameSize, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].FrameSize, ScrollCardClassName);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9ucy9Qcm9qZWN0U2Nyb2xsU2VjdGlvbi9zdHlsZXMuc2Nzcy50c3g/YTk5MiJdLCJuYW1lcyI6WyJQcm9qZWN0U2Nyb2xsU2VjdGlvbkNsYXNzTmFtZSIsIlByb2plY3RTY3JvbGxTZWN0aW9uU3R5bGUiLCJzdHlsZWQiLCJzZWN0aW9uIiwiU2Nyb2xsQ2FyZENsYXNzTmFtZSIsIlNjcm9sbENhcmRTdHlsZSIsImRpdiIsIlJvb3QiLCJTaXplIiwiVGhlbWUiLCJDb2xvciIsInZhckZvcmVncm91bmQiLCJGcmFtZVNpemUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7Q0FHQTs7QUFDQTtBQUNBO0FBTUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSw2QkFBNkIsR0FBRyxnQkFBdEM7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUMseUJBQXlCLEdBQUdDLHlEQUFNLENBQUNDLE9BQVY7QUFBQTtBQUFBO0FBQUEsdWdCQUNoQ0gsNkJBRGdDLEVBRS9CQSw2QkFGK0IsRUFhL0JBLDZCQWIrQixFQThCL0JBLDZCQTlCK0IsRUFxQy9CQSw2QkFyQytCLEVBOEMvQkEsNkJBOUMrQixDQUEvQjtBQXNEUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUksbUJBQW1CLEdBQUcsYUFBNUI7QUFFQSxJQUFNQyxlQUFlLEdBQUdILHlEQUFNLENBQUNJLEdBQVY7QUFBQTtBQUFBO0FBQUEsMHRCQUN0QkYsbUJBRHNCLEVBT05HLG9EQUFJLENBQUNDLElBUEMsRUFPaUJELG9EQUFJLENBQUNDLElBUHRCLEVBUWZELG9EQUFJLENBQUNDLElBUlUsRUFpQ2xCQyxzREFBSyxDQUFDQyxLQUFOLENBQVlDLGFBakNNLEVBa0NsQkYsc0RBQUssQ0FBQ0MsS0FBTixDQUFZQyxhQWxDTSxFQThEckJQLG1CQTlEcUIsRUFnRVBHLG9EQUFJLENBQUNLLFNBaEVFLEVBZ0U4Qkwsb0RBQUksQ0FBQ0ssU0FoRW5DLEVBOEVyQlIsbUJBOUVxQixDQUFyQiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2VjdGlvbnMvUHJvamVjdFNjcm9sbFNlY3Rpb24vc3R5bGVzLnNjc3MudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuXG4vLyBDb3JlXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG4vLyBDb25zdGFudHNcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50cy9UaGVtZVwiO1xuaW1wb3J0IHsgUm9vdCB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvUm9vdFwiO1xuaW1wb3J0IHtcbiAgQ3NzRnJhbWVQYWRkaW5nU3RyaW5nLFxuICBDc3NGcmFtZVNpemVXaXRoQm9yZGVyU3RyaW5nLFxufSBmcm9tIFwiLi4vLi4vTWVsbG93RnJhbWVIZWFkZXIvc3R5bGVzLnNjc3NcIjtcblxuLy8gQmVnaW4gU3R5bGVzXG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG5cbi8qKlxuICpcbiAqIEBuYW1lIFByb2plY3RTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lXG4gKiBAZGVzY3JpcHRpb24gVGhlIHJvb3QgY2xhc3MgbmFtZSBmb3Igc3R5bGluZy4gQkVNIG5hbWluZyBjb252ZW50aW9ucy5cbiAqXG4gKi9cbmV4cG9ydCBjb25zdCBQcm9qZWN0U2Nyb2xsU2VjdGlvbkNsYXNzTmFtZSA9IFwicHJvamVjdC1zY3JvbGxcIjtcblxuLyoqXG4gKlxuICogQG5hbWUgUHJvamVjdFNjcm9sbFNlY3Rpb25TdHlsZVxuICogQGF1dGhvciBQZXRlciBMYXhhbHRcbiAqXG4gKi9cbmV4cG9ydCBjb25zdCBQcm9qZWN0U2Nyb2xsU2VjdGlvblN0eWxlID0gc3R5bGVkLnNlY3Rpb25gXG4gICYuJHtQcm9qZWN0U2Nyb2xsU2VjdGlvbkNsYXNzTmFtZX0ge1xuICAgIC4ke1Byb2plY3RTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lfV9fc3RpY2t5LXdyYXBwZXIge1xuICAgICAgcG9zaXRpb246IHN0aWNreTtcblxuICAgICAgdG9wOiAwO1xuXG4gICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAuJHtQcm9qZWN0U2Nyb2xsU2VjdGlvbkNsYXNzTmFtZX1fX2NvbnRlbnQtd3JhcHBlciB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIGhlaWdodDogMTAwdmg7XG5cbiAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIHBhZGRpbmctbGVmdDogMTAwdnc7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMDB2dztcbiAgICB9XG5cbiAgICAuJHtQcm9qZWN0U2Nyb2xsU2VjdGlvbkNsYXNzTmFtZX1fX2hvcml6b250YWwtd3JhcHBlciB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgfVxuXG4gICAgLiR7UHJvamVjdFNjcm9sbFNlY3Rpb25DbGFzc05hbWV9X194LXRyYW5zbGF0ZS13cmFwcGVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLW91dDtcbiAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gICAgfVxuXG4gICAgLiR7UHJvamVjdFNjcm9sbFNlY3Rpb25DbGFzc05hbWV9X19vdXRlciB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuYDtcblxuLyoqXG4gKlxuICogQG5hbWUgU2Nyb2xsQ2FyZFxuICogQGRlc2NyaXB0aW9uIFRoZSByb290IGNsYXNzIG5hbWUgZm9yIHN0eWxpbmcuIEJFTSBuYW1pbmcgY29udmVudGlvbnMuXG4gKlxuICovXG5leHBvcnQgY29uc3QgU2Nyb2xsQ2FyZENsYXNzTmFtZSA9IFwic2Nyb2xsLWNhcmRcIjtcblxuZXhwb3J0IGNvbnN0IFNjcm9sbENhcmRTdHlsZSA9IHN0eWxlZC5kaXZgXG4gICYuJHtTY3JvbGxDYXJkQ2xhc3NOYW1lfSB7XG4gICAgYmFja2dyb3VuZDogYmx1ZTtcblxuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDUwdnc7XG5cbiAgICBwYWRkaW5nOiAwIGNhbGMoJHtSb290LlNpemV9ICogMikgY2FsYygke1Jvb3QuU2l6ZX0gLyAyKVxuICAgICAgY2FsYygke1Jvb3QuU2l6ZX0gKiAyKTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuXG4gICAgZmxleC1zaHJpbms6IDA7XG5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAvLyBCb3JkZXJzXG4gICAgJjpiZWZvcmUsXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cblxuXG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMXB4O1xuXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgIHRvIGJvdHRvbSxcbiAgICAgICAgcmdiYSgwLDAsMCwgMCksXG4gICAgICAgIHJnYmEoMCwwLDAsIDApIDUwJSxcbiAgICAgICAgJHtUaGVtZS5Db2xvci52YXJGb3JlZ3JvdW5kfSA1MCUsXG4gICAgICAgICR7VGhlbWUuQ29sb3IudmFyRm9yZWdyb3VuZH1cbiAgICAgICk7XG5cbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSA2cHg7XG4gICAgfVxuXG4gICAgLy8gUmlnaHQgQm9yZGVyXG4gICAgJjphZnRlciB7XG4gICAgICByaWdodDogMDtcbiAgICAgIHRvcDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICB9XG5cbiAgICAvLyBDZW50ZXIgQm9yZGVyXG4gICAgJjpiZWZvcmUge1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdG9wOiAwO1xuICAgICAgYm90dG9tOiAwO1xuXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgfVxuXG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLiR7U2Nyb2xsQ2FyZENsYXNzTmFtZX1fX2lubmVyIHtcbiAgICAgIGhlaWdodDogY2FsYyhcbiAgICAgICAgKDEwMHZoIC0gKCgke1Jvb3QuRnJhbWVTaXplfSAvIDIgKyAycHgpICogMikpIC0gJHtSb290LkZyYW1lU2l6ZX1cbiAgICAgICk7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgei1pbmRleDogMjtcblxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgIGJhY2tncm91bmQ6IG9yYW5nZTtcbiAgICB9XG5cbiAgICAuJHtTY3JvbGxDYXJkQ2xhc3NOYW1lfV9fcm93IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Sections/ProjectScrollSection/styles.scss.tsx\n");

/***/ })

})