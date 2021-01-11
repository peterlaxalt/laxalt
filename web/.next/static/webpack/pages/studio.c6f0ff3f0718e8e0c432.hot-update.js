webpackHotUpdate_N_E("pages/studio",{

/***/ "./components/Sections/StaggeredBlocksSection/styles.scss.tsx":
/*!********************************************************************!*\
  !*** ./components/Sections/StaggeredBlocksSection/styles.scss.tsx ***!
  \********************************************************************/
/*! exports provided: StaggeredBlockClassName, StaggeredBlocksSectionClassName, StaggeredBlockStyle, StaggeredBlocksSectionStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StaggeredBlockClassName\", function() { return StaggeredBlockClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StaggeredBlocksSectionClassName\", function() { return StaggeredBlocksSectionClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StaggeredBlockStyle\", function() { return StaggeredBlockStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StaggeredBlocksSectionStyle\", function() { return StaggeredBlocksSectionStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/Root */ \"./constants/Root.tsx\");\n/* harmony import */ var _constants_styles_CssUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/styles/CssUtils */ \"./constants/styles/CssUtils.tsx\");\n/* harmony import */ var _MellowFrameHeader_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../MellowFrameHeader/styles.scss */ \"./components/MellowFrameHeader/styles.scss.tsx\");\n/**\n *\n * StaggeredBlocksSection.js/styles.scss.tsx\n * @author Peter Laxalt\n * @description The website StaggeredBlocksSection Styles.\n *\n */\n// Imports\n//////////////////////////////////////////////////////////////////////\n// Core\n // Constants\n\n\n\n // Helpers\n// Begin Styles\n//////////////////////////////////////////////////////////////////////\n\nvar StaggeredBlockClassName = \"staggered-block\";\nvar StaggeredBlocksSectionClassName = \"staggered-blocks-section\"; //////////////////////////////////////////////////////////////////////\n\nvar StaggeredBlockStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].section.withConfig({\n  displayName: \"stylesscss__StaggeredBlockStyle\",\n  componentId: \"sc-16brdal-0\"\n})([\"&.\", \"{.\", \"__content{margin-bottom:calc(\", \" * 1);padding-right:calc( var(--\", \"__block-spacing) * 2 );}}\"], StaggeredBlockClassName, StaggeredBlockClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, StaggeredBlocksSectionClassName); //////////////////////////////////////////////////////////////////////\n\nvar StaggeredBlocksSectionStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].section.withConfig({\n  displayName: \"stylesscss__StaggeredBlocksSectionStyle\",\n  componentId: \"sc-16brdal-1\"\n})([\"&.\", \"{.\", \"__block-listings{--\", \"__block-spacing:calc(\", \" * 3);display:flex;flex-wrap:wrap;\", \";padding-top:calc(var(--\", \"__block-spacing) * 4);padding-bottom:var(--\", \"__block-spacing);.\", \"{width:calc(100% / 3);padding:var(--\", \"__block-spacing);&:nth-child(3n+1){margin-top:calc(var(--\", \"__block-spacing) * -4);.\", \"__content{margin-top:calc(var(--\", \"__block-spacing) * 0);}}&:nth-child(3n+2){margin-top:calc(var(--\", \"__block-spacing) * -4);.\", \"__content{margin-top:calc(var(--\", \"__block-spacing) * 2);}}&:nth-child(3n+3){margin-top:calc(var(--\", \"__block-spacing) * -4);.\", \"__content{margin-top:calc(var(--\", \"__block-spacing) * 4);}}}}}\"], StaggeredBlocksSectionClassName, StaggeredBlocksSectionClassName, StaggeredBlocksSectionClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, _constants_styles_CssUtils__WEBPACK_IMPORTED_MODULE_2__[\"CssUtils\"].ForceFullWidth(\"var(--\".concat(StaggeredBlocksSectionClassName, \"__block-spacing)\"), true), StaggeredBlocksSectionClassName, StaggeredBlocksSectionClassName, StaggeredBlockClassName, StaggeredBlocksSectionClassName, StaggeredBlocksSectionClassName, StaggeredBlockClassName, StaggeredBlocksSectionClassName, StaggeredBlocksSectionClassName, StaggeredBlockClassName, StaggeredBlocksSectionClassName, StaggeredBlocksSectionClassName, StaggeredBlockClassName, StaggeredBlocksSectionClassName);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9ucy9TdGFnZ2VyZWRCbG9ja3NTZWN0aW9uL3N0eWxlcy5zY3NzLnRzeD8zYzBlIl0sIm5hbWVzIjpbIlN0YWdnZXJlZEJsb2NrQ2xhc3NOYW1lIiwiU3RhZ2dlcmVkQmxvY2tzU2VjdGlvbkNsYXNzTmFtZSIsIlN0YWdnZXJlZEJsb2NrU3R5bGUiLCJzdHlsZWQiLCJzZWN0aW9uIiwiUm9vdCIsIlNpemUiLCJTdGFnZ2VyZWRCbG9ja3NTZWN0aW9uU3R5bGUiLCJDc3NVdGlscyIsIkZvcmNlRnVsbFdpZHRoIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtDQUdBOztBQUNBO0FBRUE7Q0FJQTtBQUVBO0FBQ0E7O0FBRU8sSUFBTUEsdUJBQXVCLG9CQUE3QjtBQUNBLElBQU1DLCtCQUErQiw2QkFBckMsQyxDQUVQOztBQUVPLElBQU1DLG1CQUFtQixHQUFHQyx5REFBTSxDQUFDQyxPQUFWO0FBQUE7QUFBQTtBQUFBLG1IQUMxQkosdUJBRDBCLEVBRXpCQSx1QkFGeUIsRUFHSkssb0RBQUksQ0FBQ0MsSUFIRCxFQUtoQkwsK0JBTGdCLENBQXpCLEMsQ0FXUDs7QUFFTyxJQUFNTSwyQkFBMkIsR0FBR0oseURBQU0sQ0FBQ0MsT0FBVjtBQUFBO0FBQUE7QUFBQSxvcEJBQ2xDSCwrQkFEa0MsRUFHakNBLCtCQUhpQyxFQUk5QkEsK0JBSjhCLEVBS3RDSSxvREFBSSxDQUFDQyxJQUxpQyxFQVdoQ0UsbUVBQVEsQ0FBQ0MsY0FBVCxpQkFDU1IsK0JBRFQsdUJBRUEsSUFGQSxDQVhnQyxFQWdCUkEsK0JBaEJRLEVBaUJWQSwrQkFqQlUsRUFtQi9CRCx1QkFuQitCLEVBc0JmQywrQkF0QmUsRUF5QkxBLCtCQXpCSyxFQTJCM0JELHVCQTNCMkIsRUE0QkhDLCtCQTVCRyxFQWlDTEEsK0JBakNLLEVBbUMzQkQsdUJBbkMyQixFQW9DSEMsK0JBcENHLEVBeUNMQSwrQkF6Q0ssRUEyQzNCRCx1QkEzQzJCLEVBNENIQywrQkE1Q0csQ0FBakMiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlY3Rpb25zL1N0YWdnZXJlZEJsb2Nrc1NlY3Rpb24vc3R5bGVzLnNjc3MudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKlxuICogU3RhZ2dlcmVkQmxvY2tzU2VjdGlvbi5qcy9zdHlsZXMuc2Nzcy50c3hcbiAqIEBhdXRob3IgUGV0ZXIgTGF4YWx0XG4gKiBAZGVzY3JpcHRpb24gVGhlIHdlYnNpdGUgU3RhZ2dlcmVkQmxvY2tzU2VjdGlvbiBTdHlsZXMuXG4gKlxuICovXG5cbi8vIEltcG9ydHNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gQ29yZVxuaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuLy8gQ29uc3RhbnRzXG5pbXBvcnQgeyBSb290IH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50cy9Sb290XCI7XG5pbXBvcnQgeyBTY2FsZVhJbiB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvc3R5bGVzL0FuaW1hdGlvblwiO1xuaW1wb3J0IHsgQ3NzVXRpbHMgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL3N0eWxlcy9Dc3NVdGlsc1wiO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL1RoZW1lXCI7XG5pbXBvcnQge30gZnJvbSBcIi4uLy4uL01lbGxvd0ZyYW1lSGVhZGVyL3N0eWxlcy5zY3NzXCI7XG5cbi8vIEhlbHBlcnNcblxuLy8gQmVnaW4gU3R5bGVzXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmV4cG9ydCBjb25zdCBTdGFnZ2VyZWRCbG9ja0NsYXNzTmFtZSA9IGBzdGFnZ2VyZWQtYmxvY2tgO1xuZXhwb3J0IGNvbnN0IFN0YWdnZXJlZEJsb2Nrc1NlY3Rpb25DbGFzc05hbWUgPSBgc3RhZ2dlcmVkLWJsb2Nrcy1zZWN0aW9uYDtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5leHBvcnQgY29uc3QgU3RhZ2dlcmVkQmxvY2tTdHlsZSA9IHN0eWxlZC5zZWN0aW9uYFxuICAmLiR7U3RhZ2dlcmVkQmxvY2tDbGFzc05hbWV9IHtcbiAgICAuJHtTdGFnZ2VyZWRCbG9ja0NsYXNzTmFtZX1fX2NvbnRlbnQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygke1Jvb3QuU2l6ZX0gKiAxKTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGMoXG4gICAgICAgIHZhcigtLSR7U3RhZ2dlcmVkQmxvY2tzU2VjdGlvbkNsYXNzTmFtZX1fX2Jsb2NrLXNwYWNpbmcpICogMlxuICAgICAgKTtcbiAgICB9XG4gIH1cbmA7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuZXhwb3J0IGNvbnN0IFN0YWdnZXJlZEJsb2Nrc1NlY3Rpb25TdHlsZSA9IHN0eWxlZC5zZWN0aW9uYFxuICAmLiR7U3RhZ2dlcmVkQmxvY2tzU2VjdGlvbkNsYXNzTmFtZX0ge1xuXG4gICAgLiR7U3RhZ2dlcmVkQmxvY2tzU2VjdGlvbkNsYXNzTmFtZX1fX2Jsb2NrLWxpc3RpbmdzIHtcbiAgICAgIC0tJHtTdGFnZ2VyZWRCbG9ja3NTZWN0aW9uQ2xhc3NOYW1lfV9fYmxvY2stc3BhY2luZzogY2FsYygke1xuICBSb290LlNpemVcbn0gKiAzKTtcblxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgJHtDc3NVdGlscy5Gb3JjZUZ1bGxXaWR0aChcbiAgICAgICAgYHZhcigtLSR7U3RhZ2dlcmVkQmxvY2tzU2VjdGlvbkNsYXNzTmFtZX1fX2Jsb2NrLXNwYWNpbmcpYCxcbiAgICAgICAgdHJ1ZVxuICAgICAgKX07XG5cbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLSR7U3RhZ2dlcmVkQmxvY2tzU2VjdGlvbkNsYXNzTmFtZX1fX2Jsb2NrLXNwYWNpbmcpICogNCk7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tJHtTdGFnZ2VyZWRCbG9ja3NTZWN0aW9uQ2xhc3NOYW1lfV9fYmxvY2stc3BhY2luZyk7XG5cbiAgICAgIC4ke1N0YWdnZXJlZEJsb2NrQ2xhc3NOYW1lfSB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLyAzKTtcblxuICAgICAgICBwYWRkaW5nOiB2YXIoLS0ke1N0YWdnZXJlZEJsb2Nrc1NlY3Rpb25DbGFzc05hbWV9X19ibG9jay1zcGFjaW5nKTtcblxuICAgICAgICAmOm50aC1jaGlsZCgzbisxKSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS0ke1N0YWdnZXJlZEJsb2Nrc1NlY3Rpb25DbGFzc05hbWV9X19ibG9jay1zcGFjaW5nKSAqIC00KTtcblxuICAgICAgICAgIC4ke1N0YWdnZXJlZEJsb2NrQ2xhc3NOYW1lfV9fY29udGVudCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLSR7U3RhZ2dlcmVkQmxvY2tzU2VjdGlvbkNsYXNzTmFtZX1fX2Jsb2NrLXNwYWNpbmcpICogMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJjpudGgtY2hpbGQoM24rMikge1xuICAgICAgICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tJHtTdGFnZ2VyZWRCbG9ja3NTZWN0aW9uQ2xhc3NOYW1lfV9fYmxvY2stc3BhY2luZykgKiAtNCk7XG5cbiAgICAgICAgICAuJHtTdGFnZ2VyZWRCbG9ja0NsYXNzTmFtZX1fX2NvbnRlbnQge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS0ke1N0YWdnZXJlZEJsb2Nrc1NlY3Rpb25DbGFzc05hbWV9X19ibG9jay1zcGFjaW5nKSAqIDIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICY6bnRoLWNoaWxkKDNuKzMpIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLSR7U3RhZ2dlcmVkQmxvY2tzU2VjdGlvbkNsYXNzTmFtZX1fX2Jsb2NrLXNwYWNpbmcpICogLTQpO1xuXG4gICAgICAgICAgLiR7U3RhZ2dlcmVkQmxvY2tDbGFzc05hbWV9X19jb250ZW50IHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tJHtTdGFnZ2VyZWRCbG9ja3NTZWN0aW9uQ2xhc3NOYW1lfV9fYmxvY2stc3BhY2luZykgKiA0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Sections/StaggeredBlocksSection/styles.scss.tsx\n");

/***/ })

})