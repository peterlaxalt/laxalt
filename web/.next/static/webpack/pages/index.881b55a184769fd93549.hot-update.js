webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Sections/ProjectScrollSection/styles.scss.tsx":
/*!******************************************************************!*\
  !*** ./components/Sections/ProjectScrollSection/styles.scss.tsx ***!
  \******************************************************************/
/*! exports provided: ProjectScrollSectionClassName, ProjectScrollSectionStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectScrollSectionClassName\", function() { return ProjectScrollSectionClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectScrollSectionStyle\", function() { return ProjectScrollSectionStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/Theme */ \"./constants/Theme.tsx\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/Root */ \"./constants/Root.tsx\");\n/* harmony import */ var _MellowFrameHeader_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../MellowFrameHeader/styles.scss */ \"./components/MellowFrameHeader/styles.scss.tsx\");\n/* harmony import */ var _LayeredSidebar_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../LayeredSidebar/styles.scss */ \"./components/LayeredSidebar/styles.scss.tsx\");\n// Imports\n// _________________________________________________________________________\n// Core\n // Constants\n\n\n\n\n // Begin Styles\n// _________________________________________________________________________\n\n/**\n *\n * @name ProjectScrollSectionClassName\n * @description The root class name for styling. BEM naming conventions.\n *\n */\n\nvar ProjectScrollSectionClassName = \"project-scroll\";\n/**\n *\n * @name ProjectScrollSectionStyle\n * @author Peter Laxalt\n *\n */\n\nvar ProjectScrollSectionStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].section.withConfig({\n  displayName: \"stylesscss__ProjectScrollSectionStyle\",\n  componentId: \"sc-897oup-0\"\n})([\"&.\", \"{&.\", \"--has-sidebar{width:calc(100vw - (\", \" * 2));margin-left:calc(\", \" * -1);@media(max-width:\", \"){width:100%;max-width:100%;margin-left:0;.spacer{display:none;}}}}\"], ProjectScrollSectionClassName, ProjectScrollSectionClassName, _MellowFrameHeader_styles_scss__WEBPACK_IMPORTED_MODULE_3__[\"CssFrameSizeWithBorderString\"], _LayeredSidebar_styles_scss__WEBPACK_IMPORTED_MODULE_4__[\"LayeredSidebarWidth\"], _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[\"Theme\"].Base.Media.Width.Sm); // @ts-ignore\n\nvar ProjectScrollTallOuterContainerStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.attrs(function (_ref) {\n  var dynamicHeight = _ref.dynamicHeight;\n  return {\n    style: {\n      height: \"\".concat(dynamicHeight, \"px\")\n    }\n  };\n}).withConfig({\n  displayName: \"stylesscss__ProjectScrollTallOuterContainerStyle\",\n  componentId: \"sc-897oup-1\"\n})([\"position:relative;width:100%;\"]);\nvar ProjectScrollStickyInnerContainerStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"stylesscss__ProjectScrollStickyInnerContainerStyle\",\n  componentId: \"sc-897oup-2\"\n})([\"position:sticky;top:0;height:100vh;width:100%;overflow-x:hidden;\"]); // @ts-ignore\n\nvar ProjectScrollHorizontalTranslateContainerStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.attrs(function (_ref2) {\n  var translateX = _ref2.translateX;\n  return {\n    style: {\n      transform: \"translateX(\".concat(translateX, \"px)\")\n    }\n  };\n}).withConfig({\n  displayName: \"stylesscss__ProjectScrollHorizontalTranslateContainerStyle\",\n  componentId: \"sc-897oup-3\"\n})([\"position:absolute;height:100%;transition:transform 0.5s ease-out;will-change:transform;\"]);\nvar ProjectScrollContentWrapperStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"stylesscss__ProjectScrollContentWrapperStyle\",\n  componentId: \"sc-897oup-4\"\n})([\"position:relative;height:100vh;padding:0;display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:center;\"]);\nvar ProjectScrollHorizontalSectionStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].section.withConfig({\n  displayName: \"stylesscss__ProjectScrollHorizontalSectionStyle\",\n  componentId: \"sc-897oup-5\"\n})([\"position:relative;width:100%;min-height:100vh;\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9ucy9Qcm9qZWN0U2Nyb2xsU2VjdGlvbi9zdHlsZXMuc2Nzcy50c3g/YTk5MiJdLCJuYW1lcyI6WyJQcm9qZWN0U2Nyb2xsU2VjdGlvbkNsYXNzTmFtZSIsIlByb2plY3RTY3JvbGxTZWN0aW9uU3R5bGUiLCJzdHlsZWQiLCJzZWN0aW9uIiwiQ3NzRnJhbWVTaXplV2l0aEJvcmRlclN0cmluZyIsIkxheWVyZWRTaWRlYmFyV2lkdGgiLCJUaGVtZSIsIkJhc2UiLCJNZWRpYSIsIldpZHRoIiwiU20iLCJQcm9qZWN0U2Nyb2xsVGFsbE91dGVyQ29udGFpbmVyU3R5bGUiLCJkaXYiLCJhdHRycyIsImR5bmFtaWNIZWlnaHQiLCJzdHlsZSIsImhlaWdodCIsIlByb2plY3RTY3JvbGxTdGlja3lJbm5lckNvbnRhaW5lclN0eWxlIiwiUHJvamVjdFNjcm9sbEhvcml6b250YWxUcmFuc2xhdGVDb250YWluZXJTdHlsZSIsInRyYW5zbGF0ZVgiLCJ0cmFuc2Zvcm0iLCJQcm9qZWN0U2Nyb2xsQ29udGVudFdyYXBwZXJTdHlsZSIsIlByb2plY3RTY3JvbGxIb3Jpem9udGFsU2VjdGlvblN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0NBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsNkJBQTZCLEdBQUcsZ0JBQXRDO0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLElBQU1DLHlCQUF5QixHQUFHQyx5REFBTSxDQUFDQyxPQUFWO0FBQUE7QUFBQTtBQUFBLHVMQUNoQ0gsNkJBRGdDLEVBRTlCQSw2QkFGOEIsRUFJVEksMkZBSlMsRUFLWkMsK0VBTFksRUFTWkMsc0RBQUssQ0FBQ0MsSUFBTixDQUFXQyxLQUFYLENBQWlCQyxLQUFqQixDQUF1QkMsRUFUWCxDQUEvQixDLENBc0JQOztBQUNBLElBQU1DLG9DQUFvQyxHQUFHVCx5REFBTSxDQUFDVSxHQUFQLENBQVdDLEtBQVgsQ0FBaUI7QUFBQSxNQUFHQyxhQUFILFFBQUdBLGFBQUg7QUFBQSxTQUF3QjtBQUNwRkMsU0FBSyxFQUFFO0FBQUVDLFlBQU0sWUFBS0YsYUFBTDtBQUFSO0FBRDZFLEdBQXhCO0FBQUEsQ0FBakIsQ0FBSDtBQUFBO0FBQUE7QUFBQSxxQ0FBMUM7QUFPQSxJQUFNRyxzQ0FBc0MsR0FBR2YseURBQU0sQ0FBQ1UsR0FBVjtBQUFBO0FBQUE7QUFBQSx3RUFBNUMsQyxDQVFBOztBQUNBLElBQU1NLDhDQUE4QyxHQUFHaEIseURBQU0sQ0FBQ1UsR0FBUCxDQUFXQyxLQUFYLENBQWlCO0FBQUEsTUFBR00sVUFBSCxTQUFHQSxVQUFIO0FBQUEsU0FBcUI7QUFDM0ZKLFNBQUssRUFBRTtBQUFFSyxlQUFTLHVCQUFnQkQsVUFBaEI7QUFBWDtBQURvRixHQUFyQjtBQUFBLENBQWpCLENBQUg7QUFBQTtBQUFBO0FBQUEsK0ZBQXBEO0FBU0EsSUFBTUUsZ0NBQWdDLEdBQUduQix5REFBTSxDQUFDVSxHQUFWO0FBQUE7QUFBQTtBQUFBLGlJQUF0QztBQVVBLElBQU1VLG1DQUFtQyxHQUFHcEIseURBQU0sQ0FBQ0MsT0FBVjtBQUFBO0FBQUE7QUFBQSxzREFBekMiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlY3Rpb25zL1Byb2plY3RTY3JvbGxTZWN0aW9uL3N0eWxlcy5zY3NzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cblxuLy8gQ29yZVxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuLy8gQ29uc3RhbnRzXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvVGhlbWVcIjtcbmltcG9ydCB7fSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL1Jvb3RcIjtcbmltcG9ydCB7IENzc0ZyYW1lU2l6ZVdpdGhCb3JkZXJTdHJpbmcgfSBmcm9tIFwiLi4vLi4vTWVsbG93RnJhbWVIZWFkZXIvc3R5bGVzLnNjc3NcIjtcbmltcG9ydCB7IExheWVyZWRTaWRlYmFyV2lkdGgsIFNpZGViYXJGdWxsd2lkdGhDc3MgfSBmcm9tIFwiLi4vLi4vTGF5ZXJlZFNpZGViYXIvc3R5bGVzLnNjc3NcIjtcblxuLy8gQmVnaW4gU3R5bGVzXG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG5cbi8qKlxuICpcbiAqIEBuYW1lIFByb2plY3RTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lXG4gKiBAZGVzY3JpcHRpb24gVGhlIHJvb3QgY2xhc3MgbmFtZSBmb3Igc3R5bGluZy4gQkVNIG5hbWluZyBjb252ZW50aW9ucy5cbiAqXG4gKi9cbmV4cG9ydCBjb25zdCBQcm9qZWN0U2Nyb2xsU2VjdGlvbkNsYXNzTmFtZSA9IFwicHJvamVjdC1zY3JvbGxcIjtcblxuLyoqXG4gKlxuICogQG5hbWUgUHJvamVjdFNjcm9sbFNlY3Rpb25TdHlsZVxuICogQGF1dGhvciBQZXRlciBMYXhhbHRcbiAqXG4gKi9cbmV4cG9ydCBjb25zdCBQcm9qZWN0U2Nyb2xsU2VjdGlvblN0eWxlID0gc3R5bGVkLnNlY3Rpb25gXG4gICYuJHtQcm9qZWN0U2Nyb2xsU2VjdGlvbkNsYXNzTmFtZX0ge1xuICAgICYuJHtQcm9qZWN0U2Nyb2xsU2VjdGlvbkNsYXNzTmFtZX0tLWhhcy1zaWRlYmFyIHtcbiAgICAgIC8qICR7U2lkZWJhckZ1bGx3aWR0aENzc30gKi9cbiAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gKCR7Q3NzRnJhbWVTaXplV2l0aEJvcmRlclN0cmluZ30gKiAyKSk7XG4gICAgICBtYXJnaW4tbGVmdDogY2FsYygke0xheWVyZWRTaWRlYmFyV2lkdGh9ICogLTEpO1xuXG4gICAgICAvKiBwYWRkaW5nLWxlZnQ6ICR7TGF5ZXJlZFNpZGViYXJXaWR0aH07ICovXG5cbiAgICAgIEBtZWRpYShtYXgtd2lkdGg6ICR7VGhlbWUuQmFzZS5NZWRpYS5XaWR0aC5TbX0pIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG5cbiAgICAgICAgLnNwYWNlciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuLy8gQHRzLWlnbm9yZVxuY29uc3QgUHJvamVjdFNjcm9sbFRhbGxPdXRlckNvbnRhaW5lclN0eWxlID0gc3R5bGVkLmRpdi5hdHRycygoeyBkeW5hbWljSGVpZ2h0IH0pID0+ICh7XG4gIHN0eWxlOiB7IGhlaWdodDogYCR7ZHluYW1pY0hlaWdodH1weGAgfSxcbn0pKWBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IFByb2plY3RTY3JvbGxTdGlja3lJbm5lckNvbnRhaW5lclN0eWxlID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuYDtcblxuLy8gQHRzLWlnbm9yZVxuY29uc3QgUHJvamVjdFNjcm9sbEhvcml6b250YWxUcmFuc2xhdGVDb250YWluZXJTdHlsZSA9IHN0eWxlZC5kaXYuYXR0cnMoKHsgdHJhbnNsYXRlWCB9KSA9PiAoe1xuICBzdHlsZTogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7dHJhbnNsYXRlWH1weClgIH0sXG59KSlgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLW91dDtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbmA7XG5cbmNvbnN0IFByb2plY3RTY3JvbGxDb250ZW50V3JhcHBlclN0eWxlID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IFByb2plY3RTY3JvbGxIb3Jpem9udGFsU2VjdGlvblN0eWxlID0gc3R5bGVkLnNlY3Rpb25gXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Sections/ProjectScrollSection/styles.scss.tsx\n");

/***/ })

})