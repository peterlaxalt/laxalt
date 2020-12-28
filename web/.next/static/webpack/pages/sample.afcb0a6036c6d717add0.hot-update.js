webpackHotUpdate_N_E("pages/sample",{

/***/ "./components/LayeredSidebar/styles.scss.tsx":
/*!***************************************************!*\
  !*** ./components/LayeredSidebar/styles.scss.tsx ***!
  \***************************************************/
/*! exports provided: LayeredSidebarClassName, LayeredSidebarWidth, LayeredPaneWidth, LayeredCollapsedRatio, LayeredPaneCollapsedPaneWidth, GlobalSidebarPaneOffsetVariables, LayeredSidebarStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LayeredSidebarClassName\", function() { return LayeredSidebarClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LayeredSidebarWidth\", function() { return LayeredSidebarWidth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LayeredPaneWidth\", function() { return LayeredPaneWidth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LayeredCollapsedRatio\", function() { return LayeredCollapsedRatio; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LayeredPaneCollapsedPaneWidth\", function() { return LayeredPaneCollapsedPaneWidth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlobalSidebarPaneOffsetVariables\", function() { return GlobalSidebarPaneOffsetVariables; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LayeredSidebarStyle\", function() { return LayeredSidebarStyle; });\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/Theme */ \"./constants/Theme.tsx\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/Root */ \"./constants/Root.tsx\");\n/* harmony import */ var _MellowFrameHeader_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MellowFrameHeader/styles.scss */ \"./components/MellowFrameHeader/styles.scss.tsx\");\n\n\nfunction _templateObject() {\n  var data = Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  :root {\\n    --\", \"__global-pane-offset: calc(\", \" * (\", \") + \", \");\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n// Imports\n// _________________________________________________________________________\n// Core\n // Constants\n\n\n\n // Begin Styles\n// _________________________________________________________________________\n\n/**\n *\n * @name LayeredSidebarClassName\n * @description The root class name for styling. BEM naming conventions.\n *\n */\n\nvar LayeredSidebarClassName = \"layered-sidebar\";\nvar LayeredSidebarWidth = \"350px\";\nvar LayeredPaneWidth = \"180px\";\nvar LayeredCollapsedRatio = -0.65;\nvar LayeredPaneCollapsedPaneWidth = \"calc(\".concat(LayeredPaneWidth, \" + (\").concat(LayeredPaneWidth, \" * \").concat(LayeredCollapsedRatio, \"))\");\nvar GlobalSidebarPaneOffsetVariables = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"createGlobalStyle\"])(_templateObject(), LayeredSidebarClassName, function (props) {\n  return props.panes - 1;\n}, LayeredPaneCollapsedPaneWidth, _MellowFrameHeader_styles_scss__WEBPACK_IMPORTED_MODULE_4__[\"CssFrameBorderWidth\"]);\n/**\n *\n * @name LayeredSidebarStyle\n * @author Peter Laxalt\n *\n */\n\nvar LayeredSidebarStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].nav.withConfig({\n  displayName: \"stylesscss__LayeredSidebarStyle\",\n  componentId: \"sc-1xghijt-0\"\n})([\"&.\", \"{--\", \"__pane-width:\", \";--\", \"__pane-padding:calc(\", \" * .5);&.\", \"--frame-inactive{transform:translateX(0);}.\", \"__inner{display:flex;flex-wrap:nowrap;.\", \"__pane{width:var(--\", \"__pane-width);height:100vh;background:\", \";padding-top:calc(\", \" * 2.5);&:not(:first-child){border-left:\", \" solid \", \";margin-left:calc(var(--\", \"__pane-width) * \", \");will-change:margin-left;transition:margin-left .25s ease-in-out;}&:hover{+ .\", \"__pane{margin-left:0;}}&__header{font-size:1.9rem;font-weight:bold;padding-left:var(--\", \"__pane-padding);padding-right:calc(\", \" / 2);text-transform:uppercase;}&__list{&--major{padding-top:calc(\", \" * 1.5);&:first-child{padding-top:calc(\", \" * 2.25);}}&--minor{padding-top:1.5rem;&:first-child{padding-top:calc(\", \" * 2.25);}}&__item{&--major{font-size:1.1rem;letter-spacing:.05rem;font-family:\", \";font-style:italic;line-height:1.5;}&--minor{font-size:.6rem;font-weight:bold;text-transform:uppercase;letter-spacing:.1rem;line-height:2.25;}a{color:\", \";display:block;padding-left:var(--\", \"__pane-padding);padding-right:calc(\", \" / 2);&:hover{background:\", \";color:\", \";text-decoration:none;}}}}}}}\"], LayeredSidebarClassName, LayeredSidebarClassName, LayeredPaneWidth, LayeredSidebarClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].FrameSize, LayeredSidebarClassName, LayeredSidebarClassName, LayeredSidebarClassName, LayeredSidebarClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varBackground, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].FrameSize, _MellowFrameHeader_styles_scss__WEBPACK_IMPORTED_MODULE_4__[\"CssFrameBorderWidth\"], _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, LayeredSidebarClassName, LayeredCollapsedRatio, LayeredSidebarClassName, LayeredSidebarClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].FrameSize, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].FrameSize, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].FrameSize, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].FrameSize, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Font.Code, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, LayeredSidebarClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].FrameSize, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varBackground);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXllcmVkU2lkZWJhci9zdHlsZXMuc2Nzcy50c3g/OWIyNyJdLCJuYW1lcyI6WyJMYXllcmVkU2lkZWJhckNsYXNzTmFtZSIsIkxheWVyZWRTaWRlYmFyV2lkdGgiLCJMYXllcmVkUGFuZVdpZHRoIiwiTGF5ZXJlZENvbGxhcHNlZFJhdGlvIiwiTGF5ZXJlZFBhbmVDb2xsYXBzZWRQYW5lV2lkdGgiLCJHbG9iYWxTaWRlYmFyUGFuZU9mZnNldFZhcmlhYmxlcyIsImNyZWF0ZUdsb2JhbFN0eWxlIiwicHJvcHMiLCJwYW5lcyIsIkNzc0ZyYW1lQm9yZGVyV2lkdGgiLCJMYXllcmVkU2lkZWJhclN0eWxlIiwic3R5bGVkIiwibmF2IiwiUm9vdCIsIkZyYW1lU2l6ZSIsIlRoZW1lIiwiQ29sb3IiLCJ2YXJCYWNrZ3JvdW5kIiwidmFyRm9yZWdyb3VuZCIsIkZvbnQiLCJDb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0NBR0E7O0FBQ0E7QUFDQTtDQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLElBQU1BLHVCQUF1QixHQUFHLGlCQUFoQztBQUNBLElBQU1DLG1CQUFtQixHQUFHLE9BQTVCO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsT0FBekI7QUFDQSxJQUFNQyxxQkFBcUIsR0FBRyxDQUFDLElBQS9CO0FBQ0EsSUFBTUMsNkJBQTZCLGtCQUFXRixnQkFBWCxpQkFBa0NBLGdCQUFsQyxnQkFBd0RDLHFCQUF4RCxPQUFuQztBQUVBLElBQU1FLGdDQUFnQyxHQUFHQywyRUFBSCxvQkFFckNOLHVCQUZxQyxFQUVnQixVQUFBTyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLEdBQWMsQ0FBbEI7QUFBQSxDQUZyQixFQUUrQ0osNkJBRi9DLEVBRW1GSyxrRkFGbkYsQ0FBdEM7QUFNUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUMsbUJBQW1CLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsd25DQUMxQlosdUJBRDBCLEVBRXhCQSx1QkFGd0IsRUFFZ0JFLGdCQUZoQixFQUd4QkYsdUJBSHdCLEVBR3VCYSxvREFBSSxDQUFDQyxTQUg1QixFQWV4QmQsdUJBZndCLEVBbUJ6QkEsdUJBbkJ5QixFQXVCdkJBLHVCQXZCdUIsRUF3QlRBLHVCQXhCUyxFQTJCVmUsc0RBQUssQ0FBQ0MsS0FBTixDQUFZQyxhQTNCRixFQTZCSkosb0RBQUksQ0FBQ0MsU0E3QkQsRUFnQ1BMLGtGQWhDTyxFQWdDc0JNLHNEQUFLLENBQUNDLEtBQU4sQ0FBWUUsYUFoQ2xDLEVBa0NJbEIsdUJBbENKLEVBa0M4Q0cscUJBbEM5QyxFQTJDakJILHVCQTNDaUIsRUErREFBLHVCQS9EQSxFQWdFQWEsb0RBQUksQ0FBQ0MsU0FoRUwsRUF3RUFELG9EQUFJLENBQUNDLFNBeEVMLEVBMkVFRCxvREFBSSxDQUFDQyxTQTNFUCxFQW1GRUQsb0RBQUksQ0FBQ0MsU0FuRlAsRUE4RkhDLHNEQUFLLENBQUNJLElBQU4sQ0FBV0MsSUE5RlIsRUE4R1RMLHNEQUFLLENBQUNDLEtBQU4sQ0FBWUUsYUE5R0gsRUFrSElsQix1QkFsSEosRUFtSElhLG9EQUFJLENBQUNDLFNBbkhULEVBc0hGQyxzREFBSyxDQUFDQyxLQUFOLENBQVlFLGFBdEhWLEVBdUhQSCxzREFBSyxDQUFDQyxLQUFOLENBQVlDLGFBdkhMLENBQXpCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9MYXllcmVkU2lkZWJhci9zdHlsZXMuc2Nzcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG5cbi8vIENvcmVcbmltcG9ydCBzdHlsZWQsIHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuLy8gQ29uc3RhbnRzXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvVGhlbWVcIjtcbmltcG9ydCB7IFJvb3QgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL1Jvb3RcIjtcbmltcG9ydCB7IENzc0ZyYW1lQm9yZGVyV2lkdGggfSBmcm9tIFwiLi4vTWVsbG93RnJhbWVIZWFkZXIvc3R5bGVzLnNjc3NcIjtcblxuLy8gQmVnaW4gU3R5bGVzXG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG5cbi8qKlxuICpcbiAqIEBuYW1lIExheWVyZWRTaWRlYmFyQ2xhc3NOYW1lXG4gKiBAZGVzY3JpcHRpb24gVGhlIHJvb3QgY2xhc3MgbmFtZSBmb3Igc3R5bGluZy4gQkVNIG5hbWluZyBjb252ZW50aW9ucy5cbiAqXG4gKi9cbmV4cG9ydCBjb25zdCBMYXllcmVkU2lkZWJhckNsYXNzTmFtZSA9IFwibGF5ZXJlZC1zaWRlYmFyXCI7XG5leHBvcnQgY29uc3QgTGF5ZXJlZFNpZGViYXJXaWR0aCA9IFwiMzUwcHhcIjtcbmV4cG9ydCBjb25zdCBMYXllcmVkUGFuZVdpZHRoID0gXCIxODBweFwiO1xuZXhwb3J0IGNvbnN0IExheWVyZWRDb2xsYXBzZWRSYXRpbyA9IC0wLjY1O1xuZXhwb3J0IGNvbnN0IExheWVyZWRQYW5lQ29sbGFwc2VkUGFuZVdpZHRoID0gYGNhbGMoJHtMYXllcmVkUGFuZVdpZHRofSArICgke0xheWVyZWRQYW5lV2lkdGh9ICogJHtMYXllcmVkQ29sbGFwc2VkUmF0aW99KSlgO1xuXG5leHBvcnQgY29uc3QgR2xvYmFsU2lkZWJhclBhbmVPZmZzZXRWYXJpYWJsZXMgPSBjcmVhdGVHbG9iYWxTdHlsZTx7IHBhbmVzOiBudW1iZXIgfT5gXG4gIDpyb290IHtcbiAgICAtLSR7TGF5ZXJlZFNpZGViYXJDbGFzc05hbWV9X19nbG9iYWwtcGFuZS1vZmZzZXQ6IGNhbGMoJHtwcm9wcyA9PiBwcm9wcy5wYW5lcyAtIDF9ICogKCR7TGF5ZXJlZFBhbmVDb2xsYXBzZWRQYW5lV2lkdGh9KSArICR7Q3NzRnJhbWVCb3JkZXJXaWR0aH0pO1xuICB9XG5gO1xuXG4vKipcbiAqXG4gKiBAbmFtZSBMYXllcmVkU2lkZWJhclN0eWxlXG4gKiBAYXV0aG9yIFBldGVyIExheGFsdFxuICpcbiAqL1xuZXhwb3J0IGNvbnN0IExheWVyZWRTaWRlYmFyU3R5bGUgPSBzdHlsZWQubmF2YFxuICAmLiR7TGF5ZXJlZFNpZGViYXJDbGFzc05hbWV9IHtcbiAgICAtLSR7TGF5ZXJlZFNpZGViYXJDbGFzc05hbWV9X19wYW5lLXdpZHRoOiAke0xheWVyZWRQYW5lV2lkdGh9O1xuICAgIC0tJHtMYXllcmVkU2lkZWJhckNsYXNzTmFtZX1fX3BhbmUtcGFkZGluZzogY2FsYygke1Jvb3QuRnJhbWVTaXplfSAqIC41KTtcblxuICAgIC8qIHBvc2l0aW9uOiBmaXhlZDtcblxuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwOyAqL1xuXG4gICAgLyogdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7Um9vdC5GcmFtZVNpemV9KTsgKi9cblxuICAgIC8qIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07ICovXG4gICAgLyogdHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cyBlYXNlLWluLW91dDsgKi9cblxuICAgICYuJHtMYXllcmVkU2lkZWJhckNsYXNzTmFtZX0tLWZyYW1lLWluYWN0aXZlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB9XG5cbiAgICAuJHtMYXllcmVkU2lkZWJhckNsYXNzTmFtZX1fX2lubmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcblxuICAgICAgLiR7TGF5ZXJlZFNpZGViYXJDbGFzc05hbWV9X19wYW5lIHtcbiAgICAgICAgd2lkdGg6IHZhcigtLSR7TGF5ZXJlZFNpZGViYXJDbGFzc05hbWV9X19wYW5lLXdpZHRoKTtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcblxuICAgICAgICBiYWNrZ3JvdW5kOiAke1RoZW1lLkNvbG9yLnZhckJhY2tncm91bmR9O1xuXG4gICAgICAgIHBhZGRpbmctdG9wOiBjYWxjKCR7Um9vdC5GcmFtZVNpemV9ICogMi41KTtcblxuICAgICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgICBib3JkZXItbGVmdDogJHtDc3NGcmFtZUJvcmRlcldpZHRofSBzb2xpZCAke1RoZW1lLkNvbG9yLnZhckZvcmVncm91bmR9O1xuICAgICAgICAgIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTsgKi9cbiAgICAgICAgICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS0ke0xheWVyZWRTaWRlYmFyQ2xhc3NOYW1lfV9fcGFuZS13aWR0aCkgKiAke0xheWVyZWRDb2xsYXBzZWRSYXRpb30pO1xuXG4gICAgICAgICAgd2lsbC1jaGFuZ2U6IG1hcmdpbi1sZWZ0O1xuICAgICAgICAgIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IC4yNXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgKyAuJHtMYXllcmVkU2lkZWJhckNsYXNzTmFtZX1fX3BhbmUge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG5cbiAgICAgICAgICAgIC8qICsgLiR7TGF5ZXJlZFNpZGViYXJDbGFzc05hbWV9X19wYW5lIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgICB9ICovXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyogJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKCR7Um9vdC5GcmFtZVNpemV9ICogLjUpO1xuICAgICAgICB9ICovXG5cbiAgICAgICAgJl9faGVhZGVyIHtcbiAgICAgICAgICAvKiBmb250LWZhbWlseTogZGhhcm1hOyAqL1xuICAgICAgICAgIC8qIGZvbnQtc2l6ZTogNXJlbTsgKi9cblxuICAgICAgICAgIGZvbnQtc2l6ZTogMS45cmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS0ke0xheWVyZWRTaWRlYmFyQ2xhc3NOYW1lfV9fcGFuZS1wYWRkaW5nKTtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKCR7Um9vdC5GcmFtZVNpemV9IC8gMik7XG5cbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgJl9fbGlzdCB7XG5cbiAgICAgICAgICAmLS1tYWpvciB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogY2FsYygke1Jvb3QuRnJhbWVTaXplfSAqIDEuNSk7XG5cbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogY2FsYygke1Jvb3QuRnJhbWVTaXplfSAqIDIuMjUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgICYtLW1pbm9yIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XG5cbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogY2FsYygke1Jvb3QuRnJhbWVTaXplfSAqIDIuMjUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgICZfX2l0ZW0ge1xuXG5cbiAgICAgICAgICAgICYtLW1ham9yIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAuMDVyZW07XG5cbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICR7VGhlbWUuRm9udC5Db2RlfTtcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYtLW1pbm9yIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAuNnJlbTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcblxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMi4yNTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAke1RoZW1lLkNvbG9yLnZhckZvcmVncm91bmR9O1xuXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogdmFyKC0tJHtMYXllcmVkU2lkZWJhckNsYXNzTmFtZX1fX3BhbmUtcGFkZGluZyk7XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGMoJHtSb290LkZyYW1lU2l6ZX0gLyAyKTtcblxuICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke1RoZW1lLkNvbG9yLnZhckZvcmVncm91bmR9O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAke1RoZW1lLkNvbG9yLnZhckJhY2tncm91bmR9O1xuXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/LayeredSidebar/styles.scss.tsx\n");

/***/ })

})