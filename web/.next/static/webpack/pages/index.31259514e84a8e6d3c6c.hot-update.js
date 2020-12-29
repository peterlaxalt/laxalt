webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Sections/ProjectScrollSection/styles.scss.tsx":
/*!******************************************************************!*\
  !*** ./components/Sections/ProjectScrollSection/styles.scss.tsx ***!
  \******************************************************************/
/*! exports provided: ProjectScrollSectionClassName, ProjectScrollSectionStyle, ScrollCardClassName, ScrollCardStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectScrollSectionClassName\", function() { return ProjectScrollSectionClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectScrollSectionStyle\", function() { return ProjectScrollSectionStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ScrollCardClassName\", function() { return ScrollCardClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ScrollCardStyle\", function() { return ScrollCardStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/Theme */ \"./constants/Theme.tsx\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/Root */ \"./constants/Root.tsx\");\n// Imports\n// _________________________________________________________________________\n// Core\n // Constants\n\n\n\n// Begin Styles\n// _________________________________________________________________________\n\n/**\n *\n * @name ProjectScrollSectionClassName\n * @description The root class name for styling. BEM naming conventions.\n *\n */\nvar ProjectScrollSectionClassName = \"project-scroll\";\n/**\n *\n * @name ProjectScrollSectionStyle\n * @author Peter Laxalt\n *\n */\n\nvar ProjectScrollSectionStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].section.withConfig({\n  displayName: \"stylesscss__ProjectScrollSectionStyle\",\n  componentId: \"sc-897oup-0\"\n})([\"&.\", \"{.\", \"__sticky-wrapper{position:sticky;top:0;height:100vh;width:100%;overflow-x:hidden;}.\", \"__content-wrapper{position:relative;height:100vh;padding:0;display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:center;padding-left:100vw;padding-right:100vw;}.\", \"__horizontal-wrapper{position:relative;width:100%;min-height:100vh;}.\", \"__x-translate-wrapper{position:absolute;height:100%;transition:transform 0.5s ease-out;will-change:transform;}.\", \"__outer{position:relative;width:100%;}}\"], ProjectScrollSectionClassName, ProjectScrollSectionClassName, ProjectScrollSectionClassName, ProjectScrollSectionClassName, ProjectScrollSectionClassName, ProjectScrollSectionClassName);\n/**\n *\n * @name ScrollCard\n * @description The root class name for styling. BEM naming conventions.\n *\n */\n\nvar ScrollCardClassName = \"scroll-card\";\nvar ScrollCardStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"stylesscss__ScrollCardStyle\",\n  componentId: \"sc-897oup-1\"\n})([\"&.\", \"{background:blue;height:100vh;width:50vw;padding:0 calc(\", \" * 2) calc(\", \" / 2) calc(\", \" * 2);display:flex;align-items:flex-end;flex-shrink:0;position:relative;&:before,&:after{content:\\\"\\\";position:absolute;height:100%;width:1px;background:linear-gradient( to bottom,rgba(0,0,0,0),rgba(0,0,0,0) 50%,\", \" 50%,\", \" );background-size:100% 6px;}&:after{right:0;top:0;bottom:0;}&:before{left:50%;top:0;bottom:0;transform:translateX(-50%);}img{width:100%;max-width:100%;}.\", \"__inner{height:calc( (100vh - ((\", \" / 2 + 2px) * 2)) - \", \" );width:100%;position:relative;z-index:2;background:orange;}}\"], ScrollCardClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].Size, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].Size, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].Size, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[\"Theme\"].Color.varForeground, ScrollCardClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].FrameSize, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].FrameSize);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9ucy9Qcm9qZWN0U2Nyb2xsU2VjdGlvbi9zdHlsZXMuc2Nzcy50c3g/YTk5MiJdLCJuYW1lcyI6WyJQcm9qZWN0U2Nyb2xsU2VjdGlvbkNsYXNzTmFtZSIsIlByb2plY3RTY3JvbGxTZWN0aW9uU3R5bGUiLCJzdHlsZWQiLCJzZWN0aW9uIiwiU2Nyb2xsQ2FyZENsYXNzTmFtZSIsIlNjcm9sbENhcmRTdHlsZSIsImRpdiIsIlJvb3QiLCJTaXplIiwiVGhlbWUiLCJDb2xvciIsInZhckZvcmVncm91bmQiLCJGcmFtZVNpemUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7Q0FHQTs7QUFDQTtBQUNBO0FBTUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSw2QkFBNkIsR0FBRyxnQkFBdEM7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUMseUJBQXlCLEdBQUdDLHlEQUFNLENBQUNDLE9BQVY7QUFBQTtBQUFBO0FBQUEsdWdCQUNoQ0gsNkJBRGdDLEVBRS9CQSw2QkFGK0IsRUFhL0JBLDZCQWIrQixFQThCL0JBLDZCQTlCK0IsRUFxQy9CQSw2QkFyQytCLEVBOEMvQkEsNkJBOUMrQixDQUEvQjtBQXNEUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUksbUJBQW1CLEdBQUcsYUFBNUI7QUFFQSxJQUFNQyxlQUFlLEdBQUdILHlEQUFNLENBQUNJLEdBQVY7QUFBQTtBQUFBO0FBQUEsa21CQUN0QkYsbUJBRHNCLEVBT05HLG9EQUFJLENBQUNDLElBUEMsRUFPaUJELG9EQUFJLENBQUNDLElBUHRCLEVBUWZELG9EQUFJLENBQUNDLElBUlUsRUFpQ2xCQyxzREFBSyxDQUFDQyxLQUFOLENBQVlDLGFBakNNLEVBa0NsQkYsc0RBQUssQ0FBQ0MsS0FBTixDQUFZQyxhQWxDTSxFQThEckJQLG1CQTlEcUIsRUFnRVBHLG9EQUFJLENBQUNLLFNBaEVFLEVBZ0U4Qkwsb0RBQUksQ0FBQ0ssU0FoRW5DLENBQXJCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TZWN0aW9ucy9Qcm9qZWN0U2Nyb2xsU2VjdGlvbi9zdHlsZXMuc2Nzcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG5cbi8vIENvcmVcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbi8vIENvbnN0YW50c1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL1RoZW1lXCI7XG5pbXBvcnQgeyBSb290IH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50cy9Sb290XCI7XG5pbXBvcnQge1xuICBDc3NGcmFtZVBhZGRpbmdTdHJpbmcsXG4gIENzc0ZyYW1lU2l6ZVdpdGhCb3JkZXJTdHJpbmcsXG59IGZyb20gXCIuLi8uLi9NZWxsb3dGcmFtZUhlYWRlci9zdHlsZXMuc2Nzc1wiO1xuXG4vLyBCZWdpbiBTdHlsZXNcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cblxuLyoqXG4gKlxuICogQG5hbWUgUHJvamVjdFNjcm9sbFNlY3Rpb25DbGFzc05hbWVcbiAqIEBkZXNjcmlwdGlvbiBUaGUgcm9vdCBjbGFzcyBuYW1lIGZvciBzdHlsaW5nLiBCRU0gbmFtaW5nIGNvbnZlbnRpb25zLlxuICpcbiAqL1xuZXhwb3J0IGNvbnN0IFByb2plY3RTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lID0gXCJwcm9qZWN0LXNjcm9sbFwiO1xuXG4vKipcbiAqXG4gKiBAbmFtZSBQcm9qZWN0U2Nyb2xsU2VjdGlvblN0eWxlXG4gKiBAYXV0aG9yIFBldGVyIExheGFsdFxuICpcbiAqL1xuZXhwb3J0IGNvbnN0IFByb2plY3RTY3JvbGxTZWN0aW9uU3R5bGUgPSBzdHlsZWQuc2VjdGlvbmBcbiAgJi4ke1Byb2plY3RTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lfSB7XG4gICAgLiR7UHJvamVjdFNjcm9sbFNlY3Rpb25DbGFzc05hbWV9X19zdGlja3ktd3JhcHBlciB7XG4gICAgICBwb3NpdGlvbjogc3RpY2t5O1xuXG4gICAgICB0b3A6IDA7XG5cbiAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIH1cblxuICAgIC4ke1Byb2plY3RTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lfV9fY29udGVudC13cmFwcGVyIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgaGVpZ2h0OiAxMDB2aDtcblxuICAgICAgcGFkZGluZzogMDtcblxuICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgcGFkZGluZy1sZWZ0OiAxMDB2dztcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwMHZ3O1xuICAgIH1cblxuICAgIC4ke1Byb2plY3RTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lfV9faG9yaXpvbnRhbC13cmFwcGVyIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICB9XG5cbiAgICAuJHtQcm9qZWN0U2Nyb2xsU2VjdGlvbkNsYXNzTmFtZX1fX3gtdHJhbnNsYXRlLXdyYXBwZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2Utb3V0O1xuICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgICB9XG5cbiAgICAuJHtQcm9qZWN0U2Nyb2xsU2VjdGlvbkNsYXNzTmFtZX1fX291dGVyIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5gO1xuXG4vKipcbiAqXG4gKiBAbmFtZSBTY3JvbGxDYXJkXG4gKiBAZGVzY3JpcHRpb24gVGhlIHJvb3QgY2xhc3MgbmFtZSBmb3Igc3R5bGluZy4gQkVNIG5hbWluZyBjb252ZW50aW9ucy5cbiAqXG4gKi9cbmV4cG9ydCBjb25zdCBTY3JvbGxDYXJkQ2xhc3NOYW1lID0gXCJzY3JvbGwtY2FyZFwiO1xuXG5leHBvcnQgY29uc3QgU2Nyb2xsQ2FyZFN0eWxlID0gc3R5bGVkLmRpdmBcbiAgJi4ke1Njcm9sbENhcmRDbGFzc05hbWV9IHtcbiAgICBiYWNrZ3JvdW5kOiBibHVlO1xuXG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogNTB2dztcblxuICAgIHBhZGRpbmc6IDAgY2FsYygke1Jvb3QuU2l6ZX0gKiAyKSBjYWxjKCR7Um9vdC5TaXplfSAvIDIpXG4gICAgICBjYWxjKCR7Um9vdC5TaXplfSAqIDIpO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cbiAgICBmbGV4LXNocmluazogMDtcblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC8vIEJvcmRlcnNcbiAgICAmOmJlZm9yZSxcbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG5cbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuXG5cbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAxcHg7XG5cbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgdG8gYm90dG9tLFxuICAgICAgICByZ2JhKDAsMCwwLCAwKSxcbiAgICAgICAgcmdiYSgwLDAsMCwgMCkgNTAlLFxuICAgICAgICAke1RoZW1lLkNvbG9yLnZhckZvcmVncm91bmR9IDUwJSxcbiAgICAgICAgJHtUaGVtZS5Db2xvci52YXJGb3JlZ3JvdW5kfVxuICAgICAgKTtcblxuICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDZweDtcbiAgICB9XG5cbiAgICAvLyBSaWdodCBCb3JkZXJcbiAgICAmOmFmdGVyIHtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgdG9wOiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgIH1cblxuICAgIC8vIENlbnRlciBCb3JkZXJcbiAgICAmOmJlZm9yZSB7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICB0b3A6IDA7XG4gICAgICBib3R0b206IDA7XG5cbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB9XG5cblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuJHtTY3JvbGxDYXJkQ2xhc3NOYW1lfV9faW5uZXIge1xuICAgICAgaGVpZ2h0OiBjYWxjKFxuICAgICAgICAoMTAwdmggLSAoKCR7Um9vdC5GcmFtZVNpemV9IC8gMiArIDJweCkgKiAyKSkgLSAke1Jvb3QuRnJhbWVTaXplfVxuICAgICAgKTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB6LWluZGV4OiAyO1xuXG4gICAgICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XG4gICAgfVxuICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Sections/ProjectScrollSection/styles.scss.tsx\n");

/***/ })

})