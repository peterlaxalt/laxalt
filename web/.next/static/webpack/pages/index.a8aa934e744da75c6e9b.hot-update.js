webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Sections/ProjectScrollSection/styles.scss.tsx":
/*!******************************************************************!*\
  !*** ./components/Sections/ProjectScrollSection/styles.scss.tsx ***!
  \******************************************************************/
/*! exports provided: ProjectScrollSectionClassName, ProjectScrollSectionStyle, ProjectScrollTallOuterContainerStyle, ProjectScrollStickyInnerContainerStyle, ProjectScrollHorizontalTranslateContainerStyle, ProjectScrollContentWrapperStyle, ProjectScrollHorizontalSectionStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectScrollSectionClassName\", function() { return ProjectScrollSectionClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectScrollSectionStyle\", function() { return ProjectScrollSectionStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectScrollTallOuterContainerStyle\", function() { return ProjectScrollTallOuterContainerStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectScrollStickyInnerContainerStyle\", function() { return ProjectScrollStickyInnerContainerStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectScrollHorizontalTranslateContainerStyle\", function() { return ProjectScrollHorizontalTranslateContainerStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectScrollContentWrapperStyle\", function() { return ProjectScrollContentWrapperStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectScrollHorizontalSectionStyle\", function() { return ProjectScrollHorizontalSectionStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/Theme */ \"./constants/Theme.tsx\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/Root */ \"./constants/Root.tsx\");\n/* harmony import */ var _MellowFrameHeader_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../MellowFrameHeader/styles.scss */ \"./components/MellowFrameHeader/styles.scss.tsx\");\n/* harmony import */ var _LayeredSidebar_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../LayeredSidebar/styles.scss */ \"./components/LayeredSidebar/styles.scss.tsx\");\n// Imports\n// _________________________________________________________________________\n// Core\n // Constants\n\n\n\n\n // Begin Styles\n// _________________________________________________________________________\n\n/**\n *\n * @name ProjectScrollSectionClassName\n * @description The root class name for styling. BEM naming conventions.\n *\n */\n\nvar ProjectScrollSectionClassName = \"project-scroll\";\n/**\n *\n * @name ProjectScrollSectionStyle\n * @author Peter Laxalt\n *\n */\n\nvar ProjectScrollSectionStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].section.withConfig({\n  displayName: \"stylesscss__ProjectScrollSectionStyle\",\n  componentId: \"sc-897oup-0\"\n})([\"&.\", \"{&.\", \"--has-sidebar{width:calc(100vw - (\", \" * 2));margin-left:calc(\", \" * -1);@media(max-width:\", \"){width:100%;max-width:100%;margin-left:0;.spacer{display:none;}}}}\"], ProjectScrollSectionClassName, ProjectScrollSectionClassName, _MellowFrameHeader_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"CssFrameSizeWithBorderString\"], _LayeredSidebar_styles_scss__WEBPACK_IMPORTED_MODULE_4__[\"LayeredSidebarWidth\"], _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[\"Theme\"].Base.Media.Width.Sm); // @ts-ignore\n\nvar ProjectScrollTallOuterContainerStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.attrs(function (_ref) {\n  var dynamicHeight = _ref.dynamicHeight;\n  return {\n    style: {\n      height: \"\".concat(dynamicHeight, \"px\")\n    }\n  };\n}).withConfig({\n  displayName: \"stylesscss__ProjectScrollTallOuterContainerStyle\",\n  componentId: \"sc-897oup-1\"\n})([\"position:relative;width:100%;\"]);\nvar ProjectScrollStickyInnerContainerStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"stylesscss__ProjectScrollStickyInnerContainerStyle\",\n  componentId: \"sc-897oup-2\"\n})([\"position:sticky;top:0;height:100vh;width:100%;overflow-x:hidden;\"]); // @ts-ignore\n\nvar ProjectScrollHorizontalTranslateContainerStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.attrs(function (_ref2) {\n  var translateX = _ref2.translateX;\n  return {\n    style: {\n      transform: \"translateX(\".concat(translateX, \"px)\")\n    }\n  };\n}).withConfig({\n  displayName: \"stylesscss__ProjectScrollHorizontalTranslateContainerStyle\",\n  componentId: \"sc-897oup-3\"\n})([\"position:absolute;height:100%;transition:transform 0.5s ease-out;will-change:transform;\"]);\nvar ProjectScrollContentWrapperStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"stylesscss__ProjectScrollContentWrapperStyle\",\n  componentId: \"sc-897oup-4\"\n})([\"position:relative;height:100vh;padding:0;display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:center;\"]);\nvar ProjectScrollHorizontalSectionStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].section.withConfig({\n  displayName: \"stylesscss__ProjectScrollHorizontalSectionStyle\",\n  componentId: \"sc-897oup-5\"\n})([\"position:relative;width:100%;min-height:100vh;\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9ucy9Qcm9qZWN0U2Nyb2xsU2VjdGlvbi9zdHlsZXMuc2Nzcy50c3g/YTk5MiJdLCJuYW1lcyI6WyJQcm9qZWN0U2Nyb2xsU2VjdGlvbkNsYXNzTmFtZSIsIlByb2plY3RTY3JvbGxTZWN0aW9uU3R5bGUiLCJzdHlsZWQiLCJzZWN0aW9uIiwiQ3NzRnJhbWVTaXplV2l0aEJvcmRlclN0cmluZyIsIkxheWVyZWRTaWRlYmFyV2lkdGgiLCJUaGVtZSIsIkJhc2UiLCJNZWRpYSIsIldpZHRoIiwiU20iLCJQcm9qZWN0U2Nyb2xsVGFsbE91dGVyQ29udGFpbmVyU3R5bGUiLCJkaXYiLCJhdHRycyIsImR5bmFtaWNIZWlnaHQiLCJzdHlsZSIsImhlaWdodCIsIlByb2plY3RTY3JvbGxTdGlja3lJbm5lckNvbnRhaW5lclN0eWxlIiwiUHJvamVjdFNjcm9sbEhvcml6b250YWxUcmFuc2xhdGVDb250YWluZXJTdHlsZSIsInRyYW5zbGF0ZVgiLCJ0cmFuc2Zvcm0iLCJQcm9qZWN0U2Nyb2xsQ29udGVudFdyYXBwZXJTdHlsZSIsIlByb2plY3RTY3JvbGxIb3Jpem9udGFsU2VjdGlvblN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtDQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLElBQU1BLDZCQUE2QixHQUFHLGdCQUF0QztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQyx5QkFBeUIsR0FBR0MseURBQU0sQ0FBQ0MsT0FBVjtBQUFBO0FBQUE7QUFBQSx1TEFDaENILDZCQURnQyxFQUU5QkEsNkJBRjhCLEVBSVRJLDJGQUpTLEVBS1pDLCtFQUxZLEVBU1pDLHNEQUFLLENBQUNDLElBQU4sQ0FBV0MsS0FBWCxDQUFpQkMsS0FBakIsQ0FBdUJDLEVBVFgsQ0FBL0IsQyxDQXNCUDs7QUFDTyxJQUFNQyxvQ0FBb0MsR0FBR1QseURBQU0sQ0FBQ1UsR0FBUCxDQUFXQyxLQUFYLENBQWlCO0FBQUEsTUFBR0MsYUFBSCxRQUFHQSxhQUFIO0FBQUEsU0FBd0I7QUFDM0ZDLFNBQUssRUFBRTtBQUFFQyxZQUFNLFlBQUtGLGFBQUw7QUFBUjtBQURvRixHQUF4QjtBQUFBLENBQWpCLENBQUg7QUFBQTtBQUFBO0FBQUEscUNBQTFDO0FBT0EsSUFBTUcsc0NBQXNDLEdBQUdmLHlEQUFNLENBQUNVLEdBQVY7QUFBQTtBQUFBO0FBQUEsd0VBQTVDLEMsQ0FRUDs7QUFDTyxJQUFNTSw4Q0FBOEMsR0FBR2hCLHlEQUFNLENBQUNVLEdBQVAsQ0FBV0MsS0FBWCxDQUFpQjtBQUFBLE1BQUdNLFVBQUgsU0FBR0EsVUFBSDtBQUFBLFNBQXFCO0FBQ2xHSixTQUFLLEVBQUU7QUFBRUssZUFBUyx1QkFBZ0JELFVBQWhCO0FBQVg7QUFEMkYsR0FBckI7QUFBQSxDQUFqQixDQUFIO0FBQUE7QUFBQTtBQUFBLCtGQUFwRDtBQVNBLElBQU1FLGdDQUFnQyxHQUFHbkIseURBQU0sQ0FBQ1UsR0FBVjtBQUFBO0FBQUE7QUFBQSxpSUFBdEM7QUFVQSxJQUFNVSxtQ0FBbUMsR0FBR3BCLHlEQUFNLENBQUNDLE9BQVY7QUFBQTtBQUFBO0FBQUEsc0RBQXpDIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TZWN0aW9ucy9Qcm9qZWN0U2Nyb2xsU2VjdGlvbi9zdHlsZXMuc2Nzcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG5cbi8vIENvcmVcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbi8vIENvbnN0YW50c1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL1RoZW1lXCI7XG5pbXBvcnQge30gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50cy9Sb290XCI7XG5pbXBvcnQgeyBDc3NGcmFtZVNpemVXaXRoQm9yZGVyU3RyaW5nIH0gZnJvbSBcIi4uLy4uL01lbGxvd0ZyYW1lSGVhZGVyL3N0eWxlcy5zY3NzXCI7XG5pbXBvcnQgeyBMYXllcmVkU2lkZWJhcldpZHRoLCBTaWRlYmFyRnVsbHdpZHRoQ3NzIH0gZnJvbSBcIi4uLy4uL0xheWVyZWRTaWRlYmFyL3N0eWxlcy5zY3NzXCI7XG5cbi8vIEJlZ2luIFN0eWxlc1xuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuXG4vKipcbiAqXG4gKiBAbmFtZSBQcm9qZWN0U2Nyb2xsU2VjdGlvbkNsYXNzTmFtZVxuICogQGRlc2NyaXB0aW9uIFRoZSByb290IGNsYXNzIG5hbWUgZm9yIHN0eWxpbmcuIEJFTSBuYW1pbmcgY29udmVudGlvbnMuXG4gKlxuICovXG5leHBvcnQgY29uc3QgUHJvamVjdFNjcm9sbFNlY3Rpb25DbGFzc05hbWUgPSBcInByb2plY3Qtc2Nyb2xsXCI7XG5cbi8qKlxuICpcbiAqIEBuYW1lIFByb2plY3RTY3JvbGxTZWN0aW9uU3R5bGVcbiAqIEBhdXRob3IgUGV0ZXIgTGF4YWx0XG4gKlxuICovXG5leHBvcnQgY29uc3QgUHJvamVjdFNjcm9sbFNlY3Rpb25TdHlsZSA9IHN0eWxlZC5zZWN0aW9uYFxuICAmLiR7UHJvamVjdFNjcm9sbFNlY3Rpb25DbGFzc05hbWV9IHtcbiAgICAmLiR7UHJvamVjdFNjcm9sbFNlY3Rpb25DbGFzc05hbWV9LS1oYXMtc2lkZWJhciB7XG4gICAgICAvKiAke1NpZGViYXJGdWxsd2lkdGhDc3N9ICovXG4gICAgICB3aWR0aDogY2FsYygxMDB2dyAtICgke0Nzc0ZyYW1lU2l6ZVdpdGhCb3JkZXJTdHJpbmd9ICogMikpO1xuICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoJHtMYXllcmVkU2lkZWJhcldpZHRofSAqIC0xKTtcblxuICAgICAgLyogcGFkZGluZy1sZWZ0OiAke0xheWVyZWRTaWRlYmFyV2lkdGh9OyAqL1xuXG4gICAgICBAbWVkaWEobWF4LXdpZHRoOiAke1RoZW1lLkJhc2UuTWVkaWEuV2lkdGguU219KSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuXG4gICAgICAgIC5zcGFjZXIge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbi8vIEB0cy1pZ25vcmVcbmV4cG9ydCBjb25zdCBQcm9qZWN0U2Nyb2xsVGFsbE91dGVyQ29udGFpbmVyU3R5bGUgPSBzdHlsZWQuZGl2LmF0dHJzKCh7IGR5bmFtaWNIZWlnaHQgfSkgPT4gKHtcbiAgc3R5bGU6IHsgaGVpZ2h0OiBgJHtkeW5hbWljSGVpZ2h0fXB4YCB9LFxufSkpYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuYDtcblxuZXhwb3J0IGNvbnN0IFByb2plY3RTY3JvbGxTdGlja3lJbm5lckNvbnRhaW5lclN0eWxlID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuYDtcblxuLy8gQHRzLWlnbm9yZVxuZXhwb3J0IGNvbnN0IFByb2plY3RTY3JvbGxIb3Jpem9udGFsVHJhbnNsYXRlQ29udGFpbmVyU3R5bGUgPSBzdHlsZWQuZGl2LmF0dHJzKCh7IHRyYW5zbGF0ZVggfSkgPT4gKHtcbiAgc3R5bGU6IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke3RyYW5zbGF0ZVh9cHgpYCB9LFxufSkpYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQ7XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG5gO1xuXG5leHBvcnQgY29uc3QgUHJvamVjdFNjcm9sbENvbnRlbnRXcmFwcGVyU3R5bGUgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuZXhwb3J0IGNvbnN0IFByb2plY3RTY3JvbGxIb3Jpem9udGFsU2VjdGlvblN0eWxlID0gc3R5bGVkLnNlY3Rpb25gXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Sections/ProjectScrollSection/styles.scss.tsx\n");

/***/ })

})