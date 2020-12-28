webpackHotUpdate_N_E("pages/sample",{

/***/ "./components/LayeredSidebar/styles.scss.tsx":
/*!***************************************************!*\
  !*** ./components/LayeredSidebar/styles.scss.tsx ***!
  \***************************************************/
/*! exports provided: LayeredSidebarClassName, LayeredSidebarWidth, LayeredPaneWidth, LayeredSidebarTransitionTime, LayeredCollapsedRatio, LayeredPaneCollapsedPaneWidth, GlobalSidebarPaneOffsetVariables, SidebarFullwidthCss, LayeredSidebarStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LayeredSidebarClassName\", function() { return LayeredSidebarClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LayeredSidebarWidth\", function() { return LayeredSidebarWidth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LayeredPaneWidth\", function() { return LayeredPaneWidth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LayeredSidebarTransitionTime\", function() { return LayeredSidebarTransitionTime; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LayeredCollapsedRatio\", function() { return LayeredCollapsedRatio; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LayeredPaneCollapsedPaneWidth\", function() { return LayeredPaneCollapsedPaneWidth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlobalSidebarPaneOffsetVariables\", function() { return GlobalSidebarPaneOffsetVariables; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SidebarFullwidthCss\", function() { return SidebarFullwidthCss; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LayeredSidebarStyle\", function() { return LayeredSidebarStyle; });\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/Theme */ \"./constants/Theme.tsx\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/Root */ \"./constants/Root.tsx\");\n/* harmony import */ var _MellowFrameHeader_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MellowFrameHeader/styles.scss */ \"./components/MellowFrameHeader/styles.scss.tsx\");\n\n\nfunction _templateObject() {\n  var data = Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  :root {\\n    /* --\", \"__global-pane-offset: calc(\", \" * (\", \") + \", \"); */\\n\\n    // Hovered\\n    --\", \"__global-pane-offset: \", \";\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n// Imports\n// _________________________________________________________________________\n// Core\n // Constants\n\n\n\n // Begin Styles\n// _________________________________________________________________________\n\n/**\n *\n * @name LayeredSidebarClassName\n * @description The root class name for styling. BEM naming conventions.\n *\n */\n\nvar LayeredSidebarClassName = \"layered-sidebar\";\nvar LayeredSidebarWidth = \"350px\";\nvar LayeredPaneWidth = \"180px\";\nvar LayeredSidebarTransitionTime = \".25s\";\nvar LayeredCollapsedRatio = -0.65;\nvar LayeredPaneCollapsedPaneWidth = \"calc(\".concat(LayeredPaneWidth, \" + (\").concat(LayeredPaneWidth, \" * \").concat(LayeredCollapsedRatio, \"))\");\nvar GlobalSidebarPaneOffsetVariables = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"createGlobalStyle\"])(_templateObject(), LayeredSidebarClassName, function (props) {\n  return props.panes - 1;\n}, LayeredPaneCollapsedPaneWidth, _MellowFrameHeader_styles_scss__WEBPACK_IMPORTED_MODULE_4__[\"CssFrameBorderWidth\"], LayeredSidebarClassName, function (props) {\n  return props.isHovered ? \"calc(\".concat(LayeredPaneWidth, \" + (\").concat(props.panes - 2, \" * (\").concat(LayeredPaneCollapsedPaneWidth, \")) + \").concat(_MellowFrameHeader_styles_scss__WEBPACK_IMPORTED_MODULE_4__[\"CssFrameBorderWidth\"], \")\") : \"calc(\".concat(props.panes - 1, \" * (\").concat(LayeredPaneCollapsedPaneWidth, \") + \").concat(_MellowFrameHeader_styles_scss__WEBPACK_IMPORTED_MODULE_4__[\"CssFrameBorderWidth\"], \")\");\n});\nvar SidebarFullwidthCss = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])([\"width:calc(100vw - (\", \" * 2));clip-path:polygon( var(--\", \"__global-pane-offset) 0%,100% 0%,100% 100%,var(--\", \"__global-pane-offset) 100% );transition:clip-path \", \" ease-in-out;margin-left:calc(\", \" * -1);@media(max-width:\", \"){width:100%;max-width:100%;margin-left:0;clip-path:unset;}\"], _MellowFrameHeader_styles_scss__WEBPACK_IMPORTED_MODULE_4__[\"CssFrameSizeWithBorderString\"], LayeredSidebarClassName, LayeredSidebarClassName, LayeredSidebarTransitionTime, LayeredSidebarWidth, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Base.Media.Width.Sm);\n/**\n *\n * @name LayeredSidebarStyle\n * @author Peter Laxalt\n *\n */\n\nvar LayeredSidebarStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].nav.withConfig({\n  displayName: \"stylesscss__LayeredSidebarStyle\",\n  componentId: \"sc-1xghijt-0\"\n})([\"&.\", \"{--\", \"__pane-width:\", \";--\", \"__pane-padding:calc(\", \" * .5);&.\", \"--frame-inactive{transform:translateX(0);}.\", \"__inner{display:flex;flex-wrap:nowrap;.\", \"__pane{width:var(--\", \"__pane-width);height:100vh;background:\", \";padding-top:calc(\", \" * 2.5);&:not(:first-child){border-left:\", \" solid \", \";margin-left:calc(var(--\", \"__pane-width) * \", \");will-change:margin-left;transition:margin-left \", \" ease-in-out;}&:hover{+ .\", \"__pane{margin-left:0;}}&__header{font-size:1.9rem;font-weight:bold;padding-left:var(--\", \"__pane-padding);padding-right:calc(\", \" / 2);text-transform:uppercase;}&__list{&--major{padding-top:calc(\", \" * 1.5);&:first-child{padding-top:calc(\", \" * 2.25);}}&--minor{padding-top:1.5rem;&:first-child{padding-top:calc(\", \" * 2.25);}}&__item{white-space:nowrap;&--major{font-size:1.1rem;letter-spacing:.05rem;font-family:\", \";font-style:italic;line-height:1.5;}&--minor{font-size:.6rem;font-weight:bold;text-transform:uppercase;letter-spacing:.1rem;line-height:2.25;}a{color:\", \";display:block;padding-left:var(--\", \"__pane-padding);padding-right:calc(\", \" / 2);&:hover{background:\", \";color:\", \";text-decoration:none;}}}}}}}\"], LayeredSidebarClassName, LayeredSidebarClassName, LayeredPaneWidth, LayeredSidebarClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].FrameSize, LayeredSidebarClassName, LayeredSidebarClassName, LayeredSidebarClassName, LayeredSidebarClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varBackground, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].FrameSize, _MellowFrameHeader_styles_scss__WEBPACK_IMPORTED_MODULE_4__[\"CssFrameBorderWidth\"], _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, LayeredSidebarClassName, LayeredCollapsedRatio, LayeredSidebarTransitionTime, LayeredSidebarClassName, LayeredSidebarClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].FrameSize, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].FrameSize, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].FrameSize, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].FrameSize, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Font.Code, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, LayeredSidebarClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].FrameSize, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varBackground);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXllcmVkU2lkZWJhci9zdHlsZXMuc2Nzcy50c3g/OWIyNyJdLCJuYW1lcyI6WyJMYXllcmVkU2lkZWJhckNsYXNzTmFtZSIsIkxheWVyZWRTaWRlYmFyV2lkdGgiLCJMYXllcmVkUGFuZVdpZHRoIiwiTGF5ZXJlZFNpZGViYXJUcmFuc2l0aW9uVGltZSIsIkxheWVyZWRDb2xsYXBzZWRSYXRpbyIsIkxheWVyZWRQYW5lQ29sbGFwc2VkUGFuZVdpZHRoIiwiR2xvYmFsU2lkZWJhclBhbmVPZmZzZXRWYXJpYWJsZXMiLCJjcmVhdGVHbG9iYWxTdHlsZSIsInByb3BzIiwicGFuZXMiLCJDc3NGcmFtZUJvcmRlcldpZHRoIiwiaXNIb3ZlcmVkIiwiU2lkZWJhckZ1bGx3aWR0aENzcyIsImNzcyIsIkNzc0ZyYW1lU2l6ZVdpdGhCb3JkZXJTdHJpbmciLCJUaGVtZSIsIkJhc2UiLCJNZWRpYSIsIldpZHRoIiwiU20iLCJMYXllcmVkU2lkZWJhclN0eWxlIiwic3R5bGVkIiwibmF2IiwiUm9vdCIsIkZyYW1lU2l6ZSIsIkNvbG9yIiwidmFyQmFja2dyb3VuZCIsInZhckZvcmVncm91bmQiLCJGb250IiwiQ29kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0NBR0E7O0FBQ0E7QUFDQTtDQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLElBQU1BLHVCQUF1QixHQUFHLGlCQUFoQztBQUNBLElBQU1DLG1CQUFtQixHQUFHLE9BQTVCO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsT0FBekI7QUFDQSxJQUFNQyw0QkFBNEIsR0FBRyxNQUFyQztBQUNBLElBQU1DLHFCQUFxQixHQUFHLENBQUMsSUFBL0I7QUFDQSxJQUFNQyw2QkFBNkIsa0JBQVdILGdCQUFYLGlCQUFrQ0EsZ0JBQWxDLGdCQUF3REUscUJBQXhELE9BQW5DO0FBRUEsSUFBTUUsZ0NBQWdDLEdBQUdDLDJFQUFILG9CQUVsQ1AsdUJBRmtDLEVBRW1CLFVBQUFRLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sR0FBYyxDQUFsQjtBQUFBLENBRnhCLEVBRWtESiw2QkFGbEQsRUFFc0ZLLGtGQUZ0RixFQUtyQ1YsdUJBTHFDLEVBS1csVUFBQVEsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0csU0FBTixrQkFBMEJULGdCQUExQixpQkFBaURNLEtBQUssQ0FBQ0MsS0FBTixHQUFjLENBQS9ELGlCQUF1RUosNkJBQXZFLGtCQUE0R0ssa0ZBQTVHLHdCQUE2SUYsS0FBSyxDQUFDQyxLQUFOLEdBQWMsQ0FBM0osaUJBQW1LSiw2QkFBbkssaUJBQXVNSyxrRkFBdk0sTUFBSjtBQUFBLENBTGhCLENBQXRDO0FBU0EsSUFBTUUsbUJBQW1CLEdBQUdDLDZEQUFILHVTQUNQQywyRkFETyxFQUlsQmQsdUJBSmtCLEVBT2xCQSx1QkFQa0IsRUFVTkcsNEJBVk0sRUFZVkYsbUJBWlUsRUFjVmMsc0RBQUssQ0FBQ0MsSUFBTixDQUFXQyxLQUFYLENBQWlCQyxLQUFqQixDQUF1QkMsRUFkYixDQUF6QjtBQXNCUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUMsbUJBQW1CLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMm9DQUMxQnRCLHVCQUQwQixFQUV4QkEsdUJBRndCLEVBRWdCRSxnQkFGaEIsRUFHeEJGLHVCQUh3QixFQUd1QnVCLG9EQUFJLENBQUNDLFNBSDVCLEVBZXhCeEIsdUJBZndCLEVBbUJ6QkEsdUJBbkJ5QixFQXVCdkJBLHVCQXZCdUIsRUF3QlRBLHVCQXhCUyxFQTJCVmUsc0RBQUssQ0FBQ1UsS0FBTixDQUFZQyxhQTNCRixFQTZCSkgsb0RBQUksQ0FBQ0MsU0E3QkQsRUFnQ1BkLGtGQWhDTyxFQWdDc0JLLHNEQUFLLENBQUNVLEtBQU4sQ0FBWUUsYUFoQ2xDLEVBa0NJM0IsdUJBbENKLEVBa0M4Q0kscUJBbEM5QyxFQXFDSUQsNEJBckNKLEVBMkNqQkgsdUJBM0NpQixFQStEQUEsdUJBL0RBLEVBZ0VBdUIsb0RBQUksQ0FBQ0MsU0FoRUwsRUF3RUFELG9EQUFJLENBQUNDLFNBeEVMLEVBMkVFRCxvREFBSSxDQUFDQyxTQTNFUCxFQW1GRUQsb0RBQUksQ0FBQ0MsU0FuRlAsRUErRkhULHNEQUFLLENBQUNhLElBQU4sQ0FBV0MsSUEvRlIsRUErR1RkLHNEQUFLLENBQUNVLEtBQU4sQ0FBWUUsYUEvR0gsRUFtSEkzQix1QkFuSEosRUFvSEl1QixvREFBSSxDQUFDQyxTQXBIVCxFQXVIRlQsc0RBQUssQ0FBQ1UsS0FBTixDQUFZRSxhQXZIVixFQXdIUFosc0RBQUssQ0FBQ1UsS0FBTixDQUFZQyxhQXhITCxDQUF6QiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTGF5ZXJlZFNpZGViYXIvc3R5bGVzLnNjc3MudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuXG4vLyBDb3JlXG5pbXBvcnQgc3R5bGVkLCB7IGNyZWF0ZUdsb2JhbFN0eWxlLCBjc3MgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuLy8gQ29uc3RhbnRzXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvVGhlbWVcIjtcbmltcG9ydCB7IFJvb3QgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL1Jvb3RcIjtcbmltcG9ydCB7IENzc0ZyYW1lQm9yZGVyV2lkdGgsIENzc0ZyYW1lU2l6ZVdpdGhCb3JkZXJTdHJpbmcgfSBmcm9tIFwiLi4vTWVsbG93RnJhbWVIZWFkZXIvc3R5bGVzLnNjc3NcIjtcblxuLy8gQmVnaW4gU3R5bGVzXG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG5cbi8qKlxuICpcbiAqIEBuYW1lIExheWVyZWRTaWRlYmFyQ2xhc3NOYW1lXG4gKiBAZGVzY3JpcHRpb24gVGhlIHJvb3QgY2xhc3MgbmFtZSBmb3Igc3R5bGluZy4gQkVNIG5hbWluZyBjb252ZW50aW9ucy5cbiAqXG4gKi9cbmV4cG9ydCBjb25zdCBMYXllcmVkU2lkZWJhckNsYXNzTmFtZSA9IFwibGF5ZXJlZC1zaWRlYmFyXCI7XG5leHBvcnQgY29uc3QgTGF5ZXJlZFNpZGViYXJXaWR0aCA9IFwiMzUwcHhcIjtcbmV4cG9ydCBjb25zdCBMYXllcmVkUGFuZVdpZHRoID0gXCIxODBweFwiO1xuZXhwb3J0IGNvbnN0IExheWVyZWRTaWRlYmFyVHJhbnNpdGlvblRpbWUgPSBcIi4yNXNcIjtcbmV4cG9ydCBjb25zdCBMYXllcmVkQ29sbGFwc2VkUmF0aW8gPSAtMC42NTtcbmV4cG9ydCBjb25zdCBMYXllcmVkUGFuZUNvbGxhcHNlZFBhbmVXaWR0aCA9IGBjYWxjKCR7TGF5ZXJlZFBhbmVXaWR0aH0gKyAoJHtMYXllcmVkUGFuZVdpZHRofSAqICR7TGF5ZXJlZENvbGxhcHNlZFJhdGlvfSkpYDtcblxuZXhwb3J0IGNvbnN0IEdsb2JhbFNpZGViYXJQYW5lT2Zmc2V0VmFyaWFibGVzID0gY3JlYXRlR2xvYmFsU3R5bGU8eyBwYW5lczogbnVtYmVyLCBpc0hvdmVyZWQ6IGJvb2xlYW4gfT5gXG4gIDpyb290IHtcbiAgICAvKiAtLSR7TGF5ZXJlZFNpZGViYXJDbGFzc05hbWV9X19nbG9iYWwtcGFuZS1vZmZzZXQ6IGNhbGMoJHtwcm9wcyA9PiBwcm9wcy5wYW5lcyAtIDF9ICogKCR7TGF5ZXJlZFBhbmVDb2xsYXBzZWRQYW5lV2lkdGh9KSArICR7Q3NzRnJhbWVCb3JkZXJXaWR0aH0pOyAqL1xuXG4gICAgLy8gSG92ZXJlZFxuICAgIC0tJHtMYXllcmVkU2lkZWJhckNsYXNzTmFtZX1fX2dsb2JhbC1wYW5lLW9mZnNldDogJHtwcm9wcyA9PiBwcm9wcy5pc0hvdmVyZWQgPyBgY2FsYygke0xheWVyZWRQYW5lV2lkdGh9ICsgKCR7cHJvcHMucGFuZXMgLSAyfSAqICgke0xheWVyZWRQYW5lQ29sbGFwc2VkUGFuZVdpZHRofSkpICsgJHtDc3NGcmFtZUJvcmRlcldpZHRofSlgIDogYGNhbGMoJHtwcm9wcy5wYW5lcyAtIDF9ICogKCR7TGF5ZXJlZFBhbmVDb2xsYXBzZWRQYW5lV2lkdGh9KSArICR7Q3NzRnJhbWVCb3JkZXJXaWR0aH0pYH07XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTaWRlYmFyRnVsbHdpZHRoQ3NzID0gY3NzYFxuICB3aWR0aDogY2FsYygxMDB2dyAtICgke0Nzc0ZyYW1lU2l6ZVdpdGhCb3JkZXJTdHJpbmd9ICogMikpO1xuXG4gIGNsaXAtcGF0aDogcG9seWdvbihcbiAgICAgIHZhcigtLSR7TGF5ZXJlZFNpZGViYXJDbGFzc05hbWV9X19nbG9iYWwtcGFuZS1vZmZzZXQpIDAlLFxuICAgICAgMTAwJSAwJSxcbiAgICAgIDEwMCUgMTAwJSxcbiAgICAgIHZhcigtLSR7TGF5ZXJlZFNpZGViYXJDbGFzc05hbWV9X19nbG9iYWwtcGFuZS1vZmZzZXQpIDEwMCVcbiAgKTtcblxuICB0cmFuc2l0aW9uOiBjbGlwLXBhdGggJHtMYXllcmVkU2lkZWJhclRyYW5zaXRpb25UaW1lfSBlYXNlLWluLW91dDtcblxuICBtYXJnaW4tbGVmdDogY2FsYygke0xheWVyZWRTaWRlYmFyV2lkdGh9ICogLTEpO1xuXG4gIEBtZWRpYShtYXgtd2lkdGg6ICR7VGhlbWUuQmFzZS5NZWRpYS5XaWR0aC5TbX0pIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgY2xpcC1wYXRoOiB1bnNldDtcbiAgfVxuYDtcblxuLyoqXG4gKlxuICogQG5hbWUgTGF5ZXJlZFNpZGViYXJTdHlsZVxuICogQGF1dGhvciBQZXRlciBMYXhhbHRcbiAqXG4gKi9cbmV4cG9ydCBjb25zdCBMYXllcmVkU2lkZWJhclN0eWxlID0gc3R5bGVkLm5hdmBcbiAgJi4ke0xheWVyZWRTaWRlYmFyQ2xhc3NOYW1lfSB7XG4gICAgLS0ke0xheWVyZWRTaWRlYmFyQ2xhc3NOYW1lfV9fcGFuZS13aWR0aDogJHtMYXllcmVkUGFuZVdpZHRofTtcbiAgICAtLSR7TGF5ZXJlZFNpZGViYXJDbGFzc05hbWV9X19wYW5lLXBhZGRpbmc6IGNhbGMoJHtSb290LkZyYW1lU2l6ZX0gKiAuNSk7XG5cbiAgICAvKiBwb3NpdGlvbjogZml4ZWQ7XG5cbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDsgKi9cblxuICAgIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgke1Jvb3QuRnJhbWVTaXplfSk7ICovXG5cbiAgICAvKiB3aWxsLWNoYW5nZTogdHJhbnNmb3JtOyAqL1xuICAgIC8qIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXMgZWFzZS1pbi1vdXQ7ICovXG5cbiAgICAmLiR7TGF5ZXJlZFNpZGViYXJDbGFzc05hbWV9LS1mcmFtZS1pbmFjdGl2ZSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgfVxuXG4gICAgLiR7TGF5ZXJlZFNpZGViYXJDbGFzc05hbWV9X19pbm5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC13cmFwOiBub3dyYXA7XG5cbiAgICAgIC4ke0xheWVyZWRTaWRlYmFyQ2xhc3NOYW1lfV9fcGFuZSB7XG4gICAgICAgIHdpZHRoOiB2YXIoLS0ke0xheWVyZWRTaWRlYmFyQ2xhc3NOYW1lfV9fcGFuZS13aWR0aCk7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG5cbiAgICAgICAgYmFja2dyb3VuZDogJHtUaGVtZS5Db2xvci52YXJCYWNrZ3JvdW5kfTtcblxuICAgICAgICBwYWRkaW5nLXRvcDogY2FsYygke1Jvb3QuRnJhbWVTaXplfSAqIDIuNSk7XG5cbiAgICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6ICR7Q3NzRnJhbWVCb3JkZXJXaWR0aH0gc29saWQgJHtUaGVtZS5Db2xvci52YXJGb3JlZ3JvdW5kfTtcbiAgICAgICAgICAvKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7ICovXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tJHtMYXllcmVkU2lkZWJhckNsYXNzTmFtZX1fX3BhbmUtd2lkdGgpICogJHtMYXllcmVkQ29sbGFwc2VkUmF0aW99KTtcblxuICAgICAgICAgIHdpbGwtY2hhbmdlOiBtYXJnaW4tbGVmdDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAke0xheWVyZWRTaWRlYmFyVHJhbnNpdGlvblRpbWV9IGVhc2UtaW4tb3V0O1xuICAgICAgICB9XG5cblxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICsgLiR7TGF5ZXJlZFNpZGViYXJDbGFzc05hbWV9X19wYW5lIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuXG4gICAgICAgICAgICAvKiArIC4ke0xheWVyZWRTaWRlYmFyQ2xhc3NOYW1lfV9fcGFuZSB7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgfSAqL1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogY2FsYygke1Jvb3QuRnJhbWVTaXplfSAqIC41KTtcbiAgICAgICAgfSAqL1xuXG4gICAgICAgICZfX2hlYWRlciB7XG4gICAgICAgICAgLyogZm9udC1mYW1pbHk6IGRoYXJtYTsgKi9cbiAgICAgICAgICAvKiBmb250LXNpemU6IDVyZW07ICovXG5cbiAgICAgICAgICBmb250LXNpemU6IDEuOXJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcblxuICAgICAgICAgIHBhZGRpbmctbGVmdDogdmFyKC0tJHtMYXllcmVkU2lkZWJhckNsYXNzTmFtZX1fX3BhbmUtcGFkZGluZyk7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYygke1Jvb3QuRnJhbWVTaXplfSAvIDIpO1xuXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuXG4gICAgICAgICZfX2xpc3Qge1xuXG4gICAgICAgICAgJi0tbWFqb3Ige1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IGNhbGMoJHtSb290LkZyYW1lU2l6ZX0gKiAxLjUpO1xuXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IGNhbGMoJHtSb290LkZyYW1lU2l6ZX0gKiAyLjI1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLS1taW5vciB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xuXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IGNhbGMoJHtSb290LkZyYW1lU2l6ZX0gKiAyLjI1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmX19pdGVtIHtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cblxuICAgICAgICAgICAgJi0tbWFqb3Ige1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC4wNXJlbTtcblxuICAgICAgICAgICAgICBmb250LWZhbWlseTogJHtUaGVtZS5Gb250LkNvZGV9O1xuICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG5cbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi0tbWlub3Ige1xuICAgICAgICAgICAgICBmb250LXNpemU6IC42cmVtO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC4xcmVtO1xuXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjI1O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgY29sb3I6ICR7VGhlbWUuQ29sb3IudmFyRm9yZWdyb3VuZH07XG5cbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS0ke0xheWVyZWRTaWRlYmFyQ2xhc3NOYW1lfV9fcGFuZS1wYWRkaW5nKTtcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYygke1Jvb3QuRnJhbWVTaXplfSAvIDIpO1xuXG4gICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7VGhlbWUuQ29sb3IudmFyRm9yZWdyb3VuZH07XG4gICAgICAgICAgICAgICAgY29sb3I6ICR7VGhlbWUuQ29sb3IudmFyQmFja2dyb3VuZH07XG5cbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/LayeredSidebar/styles.scss.tsx\n");

/***/ })

})