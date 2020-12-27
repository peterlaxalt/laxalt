webpackHotUpdate_N_E("pages/sample",{

/***/ "./components/LayeredSidebar/styles.scss.tsx":
/*!***************************************************!*\
  !*** ./components/LayeredSidebar/styles.scss.tsx ***!
  \***************************************************/
/*! exports provided: LayeredSidebarClassName, LayeredSidebarWidth, LayeredSidebarStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LayeredSidebarClassName\", function() { return LayeredSidebarClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LayeredSidebarWidth\", function() { return LayeredSidebarWidth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LayeredSidebarStyle\", function() { return LayeredSidebarStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/Theme */ \"./constants/Theme.tsx\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/Root */ \"./constants/Root.tsx\");\n// Imports\n// _________________________________________________________________________\n// Core\n // Constants\n\n\n // Begin Styles\n// _________________________________________________________________________\n\n/**\n *\n * @name LayeredSidebarClassName\n * @description The root class name for styling. BEM naming conventions.\n *\n */\n\nvar LayeredSidebarClassName = \"layered-sidebar\";\nvar LayeredSidebarWidth = \"450px\";\n/**\n *\n * @name LayeredSidebarStyle\n * @author Peter Laxalt\n *\n */\n\nvar LayeredSidebarStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nav.withConfig({\n  displayName: \"stylesscss__LayeredSidebarStyle\",\n  componentId: \"sc-1xghijt-0\"\n})([\"&.\", \"{--\", \"__pane-width:200px;--\", \"__pane-padding:calc(\", \" * .5);transform:translateX(\", \");will-change:transform;transition:transform .5s ease-in-out;z-index:5;&.\", \"--frame-inactive{transform:translateX(0);}.\", \"__inner{display:flex;flex-wrap:nowrap;.\", \"__pane{width:var(--\", \"__pane-width);height:100vh;background:\", \";padding-top:calc(\", \" * 2.5);&:not(:first-child){border-left:2px solid \", \";margin-left:calc(var(--\", \"__pane-width) * -.65);will-change:margin-left;transition:margin-left .25s ease-in-out;}&:hover{+ .\", \"__pane{margin-left:0;}}&__header{font-size:2rem;font-weight:bold;padding-left:var(--\", \"__pane-padding);padding-right:calc(\", \" / 2);text-transform:uppercase;}&__list{&--major{padding-top:calc(\", \" * 1.5);&:first-child{padding-top:calc(\", \" * 2.25);}}&--minor{padding-top:1.5rem;&:first-child{padding-top:calc(\", \" * 2.25);}}&__item{&--major{font-size:1.2rem;letter-spacing:.05rem;font-family:\", \";font-style:italic;line-height:1.5;}&--minor{font-size:.6rem;font-weight:bold;text-transform:uppercase;letter-spacing:.1rem;line-height:2.25;}a{color:\", \";display:block;padding-left:var(--\", \"__pane-padding);padding-right:calc(\", \" / 2);&:hover{background:\", \";color:\", \";text-decoration:none;}}}}}}}\"], LayeredSidebarClassName, LayeredSidebarClassName, LayeredSidebarClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].FrameSize, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].FrameSize, LayeredSidebarClassName, LayeredSidebarClassName, LayeredSidebarClassName, LayeredSidebarClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[\"Theme\"].Color.varBackground, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].FrameSize, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[\"Theme\"].Color.varForeground, LayeredSidebarClassName, LayeredSidebarClassName, LayeredSidebarClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].FrameSize, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].FrameSize, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].FrameSize, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].FrameSize, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[\"Theme\"].Font.Code, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[\"Theme\"].Color.varForeground, LayeredSidebarClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[\"Root\"].FrameSize, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[\"Theme\"].Color.varBackground);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXllcmVkU2lkZWJhci9zdHlsZXMuc2Nzcy50c3g/OWIyNyJdLCJuYW1lcyI6WyJMYXllcmVkU2lkZWJhckNsYXNzTmFtZSIsIkxheWVyZWRTaWRlYmFyV2lkdGgiLCJMYXllcmVkU2lkZWJhclN0eWxlIiwic3R5bGVkIiwibmF2IiwiUm9vdCIsIkZyYW1lU2l6ZSIsIlRoZW1lIiwiQ29sb3IiLCJ2YXJCYWNrZ3JvdW5kIiwidmFyRm9yZWdyb3VuZCIsIkZvbnQiLCJDb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtDQUdBOztBQUNBO0NBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsdUJBQXVCLEdBQUcsaUJBQWhDO0FBQ0EsSUFBTUMsbUJBQW1CLEdBQUcsT0FBNUI7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUMsbUJBQW1CLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsc3RDQUMxQkosdUJBRDBCLEVBRXhCQSx1QkFGd0IsRUFHeEJBLHVCQUh3QixFQUd1Qkssb0RBQUksQ0FBQ0MsU0FINUIsRUFVSkQsb0RBQUksQ0FBQ0MsU0FWRCxFQWlCeEJOLHVCQWpCd0IsRUFxQnpCQSx1QkFyQnlCLEVBeUJ2QkEsdUJBekJ1QixFQTBCVEEsdUJBMUJTLEVBNkJWTyxzREFBSyxDQUFDQyxLQUFOLENBQVlDLGFBN0JGLEVBK0JKSixvREFBSSxDQUFDQyxTQS9CRCxFQWtDR0Msc0RBQUssQ0FBQ0MsS0FBTixDQUFZRSxhQWxDZixFQW9DSVYsdUJBcENKLEVBNkNqQkEsdUJBN0NpQixFQWlFQUEsdUJBakVBLEVBa0VBSyxvREFBSSxDQUFDQyxTQWxFTCxFQTBFQUQsb0RBQUksQ0FBQ0MsU0ExRUwsRUE2RUVELG9EQUFJLENBQUNDLFNBN0VQLEVBcUZFRCxvREFBSSxDQUFDQyxTQXJGUCxFQWdHSEMsc0RBQUssQ0FBQ0ksSUFBTixDQUFXQyxJQWhHUixFQWdIVEwsc0RBQUssQ0FBQ0MsS0FBTixDQUFZRSxhQWhISCxFQW9ISVYsdUJBcEhKLEVBcUhJSyxvREFBSSxDQUFDQyxTQXJIVCxFQXdIRkMsc0RBQUssQ0FBQ0MsS0FBTixDQUFZRSxhQXhIVixFQXlIUEgsc0RBQUssQ0FBQ0MsS0FBTixDQUFZQyxhQXpITCxDQUF6QiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTGF5ZXJlZFNpZGViYXIvc3R5bGVzLnNjc3MudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuXG4vLyBDb3JlXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG4vLyBDb25zdGFudHNcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9UaGVtZVwiO1xuaW1wb3J0IHsgUm9vdCB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvUm9vdFwiO1xuXG4vLyBCZWdpbiBTdHlsZXNcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cblxuLyoqXG4gKlxuICogQG5hbWUgTGF5ZXJlZFNpZGViYXJDbGFzc05hbWVcbiAqIEBkZXNjcmlwdGlvbiBUaGUgcm9vdCBjbGFzcyBuYW1lIGZvciBzdHlsaW5nLiBCRU0gbmFtaW5nIGNvbnZlbnRpb25zLlxuICpcbiAqL1xuZXhwb3J0IGNvbnN0IExheWVyZWRTaWRlYmFyQ2xhc3NOYW1lID0gXCJsYXllcmVkLXNpZGViYXJcIjtcbmV4cG9ydCBjb25zdCBMYXllcmVkU2lkZWJhcldpZHRoID0gXCI0NTBweFwiO1xuXG4vKipcbiAqXG4gKiBAbmFtZSBMYXllcmVkU2lkZWJhclN0eWxlXG4gKiBAYXV0aG9yIFBldGVyIExheGFsdFxuICpcbiAqL1xuZXhwb3J0IGNvbnN0IExheWVyZWRTaWRlYmFyU3R5bGUgPSBzdHlsZWQubmF2YFxuICAmLiR7TGF5ZXJlZFNpZGViYXJDbGFzc05hbWV9IHtcbiAgICAtLSR7TGF5ZXJlZFNpZGViYXJDbGFzc05hbWV9X19wYW5lLXdpZHRoOiAyMDBweDtcbiAgICAtLSR7TGF5ZXJlZFNpZGViYXJDbGFzc05hbWV9X19wYW5lLXBhZGRpbmc6IGNhbGMoJHtSb290LkZyYW1lU2l6ZX0gKiAuNSk7XG5cbiAgICAvKiBwb3NpdGlvbjogZml4ZWQ7XG5cbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDsgKi9cblxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgke1Jvb3QuRnJhbWVTaXplfSk7XG5cbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXMgZWFzZS1pbi1vdXQ7XG5cbiAgICB6LWluZGV4OiA1O1xuXG4gICAgJi4ke0xheWVyZWRTaWRlYmFyQ2xhc3NOYW1lfS0tZnJhbWUtaW5hY3RpdmUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIH1cblxuICAgIC4ke0xheWVyZWRTaWRlYmFyQ2xhc3NOYW1lfV9faW5uZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuXG4gICAgICAuJHtMYXllcmVkU2lkZWJhckNsYXNzTmFtZX1fX3BhbmUge1xuICAgICAgICB3aWR0aDogdmFyKC0tJHtMYXllcmVkU2lkZWJhckNsYXNzTmFtZX1fX3BhbmUtd2lkdGgpO1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuXG4gICAgICAgIGJhY2tncm91bmQ6ICR7VGhlbWUuQ29sb3IudmFyQmFja2dyb3VuZH07XG5cbiAgICAgICAgcGFkZGluZy10b3A6IGNhbGMoJHtSb290LkZyYW1lU2l6ZX0gKiAyLjUpO1xuXG4gICAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgJHtUaGVtZS5Db2xvci52YXJGb3JlZ3JvdW5kfTtcbiAgICAgICAgICAvKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7ICovXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tJHtMYXllcmVkU2lkZWJhckNsYXNzTmFtZX1fX3BhbmUtd2lkdGgpICogLS42NSk7XG5cbiAgICAgICAgICB3aWxsLWNoYW5nZTogbWFyZ2luLWxlZnQ7XG4gICAgICAgICAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgLjI1cyBlYXNlLWluLW91dDtcbiAgICAgICAgfVxuXG5cblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICArIC4ke0xheWVyZWRTaWRlYmFyQ2xhc3NOYW1lfV9fcGFuZSB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcblxuICAgICAgICAgICAgLyogKyAuJHtMYXllcmVkU2lkZWJhckNsYXNzTmFtZX1fX3BhbmUge1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgIH0gKi9cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKiAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoJHtSb290LkZyYW1lU2l6ZX0gKiAuNSk7XG4gICAgICAgIH0gKi9cblxuICAgICAgICAmX19oZWFkZXIge1xuICAgICAgICAgIC8qIGZvbnQtZmFtaWx5OiBkaGFybWE7ICovXG4gICAgICAgICAgLyogZm9udC1zaXplOiA1cmVtOyAqL1xuXG4gICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS0ke0xheWVyZWRTaWRlYmFyQ2xhc3NOYW1lfV9fcGFuZS1wYWRkaW5nKTtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKCR7Um9vdC5GcmFtZVNpemV9IC8gMik7XG5cbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgJl9fbGlzdCB7XG5cbiAgICAgICAgICAmLS1tYWpvciB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogY2FsYygke1Jvb3QuRnJhbWVTaXplfSAqIDEuNSk7XG5cbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogY2FsYygke1Jvb3QuRnJhbWVTaXplfSAqIDIuMjUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgICYtLW1pbm9yIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XG5cbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogY2FsYygke1Jvb3QuRnJhbWVTaXplfSAqIDIuMjUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgICZfX2l0ZW0ge1xuXG5cbiAgICAgICAgICAgICYtLW1ham9yIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAuMDVyZW07XG5cbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICR7VGhlbWUuRm9udC5Db2RlfTtcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYtLW1pbm9yIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAuNnJlbTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcblxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMi4yNTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAke1RoZW1lLkNvbG9yLnZhckZvcmVncm91bmR9O1xuXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogdmFyKC0tJHtMYXllcmVkU2lkZWJhckNsYXNzTmFtZX1fX3BhbmUtcGFkZGluZyk7XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGMoJHtSb290LkZyYW1lU2l6ZX0gLyAyKTtcblxuICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke1RoZW1lLkNvbG9yLnZhckZvcmVncm91bmR9O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAke1RoZW1lLkNvbG9yLnZhckJhY2tncm91bmR9O1xuXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/LayeredSidebar/styles.scss.tsx\n");

/***/ })

})