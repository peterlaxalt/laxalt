webpackHotUpdate_N_E("pages/studio",{

/***/ "./components/Sections/AccordionListingRow/styles.scss.tsx":
/*!*****************************************************************!*\
  !*** ./components/Sections/AccordionListingRow/styles.scss.tsx ***!
  \*****************************************************************/
/*! exports provided: AccordionListingRowClassName, AccordionListingRowStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AccordionListingRowClassName\", function() { return AccordionListingRowClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AccordionListingRowStyle\", function() { return AccordionListingRowStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/Root */ \"./constants/Root.tsx\");\n/* harmony import */ var _constants_styles_Animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/styles/Animation */ \"./constants/styles/Animation.tsx\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/Theme */ \"./constants/Theme.tsx\");\n/* harmony import */ var _MellowFrameHeader_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../MellowFrameHeader/styles.scss */ \"./components/MellowFrameHeader/styles.scss.tsx\");\n/**\n *\n * AccordionListingRow.js/styles.scss.tsx\n * @author Peter Laxalt\n * @description The website AccordionListingRow Styles.\n *\n */\n// Imports\n//////////////////////////////////////////////////////////////////////\n// Core\n // Constants\n\n\n\n\n // Helpers\n// Begin Styles\n//////////////////////////////////////////////////////////////////////\n\nvar AccordionListingRowClassName = \"accordion-listing-row\";\nvar AccordionListingRowStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].section.withConfig({\n  displayName: \"stylesscss__AccordionListingRowStyle\",\n  componentId: \"sc-1togwfn-0\"\n})([\"&.\", \"{&.\", \"--is-not-visible{.\", \"__content{display:none;}}&.\", \"--is-visible{.\", \"__title__btn__label--indicator{&:after{opacity:1;transform:translate(0%,-50%) rotate(45deg);}&:before{opacity:0;transform:translate(0%,50%);}&:hover{&:after{opacity:1;transform:translate(0%,-50%) rotate(45deg);}}}}.\", \"__title{width:100%;&__btn{appearance:none;border:0;outline:0;background:none;width:100%;padding:calc(\", \" * 2) 0;margin:0;cursor:pointer;position:relative;display:flex;justify-content:space-between;font-size:7vw;text-transform:uppercase;overflow:hidden;&__label{position:relative;color:\", \";&:first-child{width:calc(100% * 0.6666666);text-align:left;}&:last-child{flex:1;text-align:right;}&--indicator{&:before{content:\\\"&\\\";position:absolute;right:0%;top:50%;transform:translate(0%,-50%);font-family:\\\"Georgia\\\",serif;opacity:1;font-style:italic;}&:after{content:\\\"+\\\";position:absolute;right:0%;top:50%;transform:translate(0%,-150%) rotate(0deg);opacity:0;font-family:\\\"Georgia\\\",serif;font-style:italic;}&:before,&:after{transition:transform 0.5s ease,opacity 0.5s ease;transform-origin:center center;}&:hover{&:after{opacity:1;transform:translate(0%,-50%) rotate(0deg);}&:before{opacity:0;transform:translate(0%,50%);}}}}&:after{content:\\\"\\\";position:absolute;width:100%;height:2px;left:0px;bottom:0px;animation:\", \" 2s ease 1;animation-fill-mode:forwards;background:\", \";}}}}\"], AccordionListingRowClassName, AccordionListingRowClassName, AccordionListingRowClassName, AccordionListingRowClassName, AccordionListingRowClassName, AccordionListingRowClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, _constants_Theme__WEBPACK_IMPORTED_MODULE_3__[\"Theme\"].Color.varForeground, _constants_styles_Animation__WEBPACK_IMPORTED_MODULE_2__[\"ScaleXIn\"], _constants_Theme__WEBPACK_IMPORTED_MODULE_3__[\"Theme\"].Color.varForeground);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9ucy9BY2NvcmRpb25MaXN0aW5nUm93L3N0eWxlcy5zY3NzLnRzeD81MTNjIl0sIm5hbWVzIjpbIkFjY29yZGlvbkxpc3RpbmdSb3dDbGFzc05hbWUiLCJBY2NvcmRpb25MaXN0aW5nUm93U3R5bGUiLCJzdHlsZWQiLCJzZWN0aW9uIiwiUm9vdCIsIlNpemUiLCJUaGVtZSIsIkNvbG9yIiwidmFyRm9yZWdyb3VuZCIsIlNjYWxlWEluIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Q0FHQTs7QUFDQTtBQUNBO0FBRUE7Q0FHQTtBQUVBO0FBQ0E7O0FBRU8sSUFBTUEsNEJBQTRCLDBCQUFsQztBQUVBLElBQU1DLHdCQUF3QixHQUFHQyx5REFBTSxDQUFDQyxPQUFWO0FBQUE7QUFBQTtBQUFBLGczQ0FDL0JILDRCQUQrQixFQUU3QkEsNEJBRjZCLEVBRzVCQSw0QkFINEIsRUFRN0JBLDRCQVI2QixFQVM1QkEsNEJBVDRCLEVBNkI5QkEsNEJBN0I4QixFQTBDYkksb0RBQUksQ0FBQ0MsSUExQ1EsRUE0RGxCQyxzREFBSyxDQUFDQyxLQUFOLENBQVlDLGFBNURNLEVBMklkQyxvRUEzSWMsRUE4SWJILHNEQUFLLENBQUNDLEtBQU4sQ0FBWUMsYUE5SUMsQ0FBOUIiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlY3Rpb25zL0FjY29yZGlvbkxpc3RpbmdSb3cvc3R5bGVzLnNjc3MudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKlxuICogQWNjb3JkaW9uTGlzdGluZ1Jvdy5qcy9zdHlsZXMuc2Nzcy50c3hcbiAqIEBhdXRob3IgUGV0ZXIgTGF4YWx0XG4gKiBAZGVzY3JpcHRpb24gVGhlIHdlYnNpdGUgQWNjb3JkaW9uTGlzdGluZ1JvdyBTdHlsZXMuXG4gKlxuICovXG5cbi8vIEltcG9ydHNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gQ29yZVxuaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuLy8gQ29uc3RhbnRzXG5pbXBvcnQgeyBSb290IH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50cy9Sb290XCI7XG5pbXBvcnQgeyBTY2FsZVhJbiB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvc3R5bGVzL0FuaW1hdGlvblwiO1xuaW1wb3J0IHsgQ3NzVXRpbHMgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL3N0eWxlcy9Dc3NVdGlsc1wiO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL1RoZW1lXCI7XG5pbXBvcnQge30gZnJvbSBcIi4uLy4uL01lbGxvd0ZyYW1lSGVhZGVyL3N0eWxlcy5zY3NzXCI7XG5cbi8vIEhlbHBlcnNcblxuLy8gQmVnaW4gU3R5bGVzXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmV4cG9ydCBjb25zdCBBY2NvcmRpb25MaXN0aW5nUm93Q2xhc3NOYW1lID0gYGFjY29yZGlvbi1saXN0aW5nLXJvd2A7XG5cbmV4cG9ydCBjb25zdCBBY2NvcmRpb25MaXN0aW5nUm93U3R5bGUgPSBzdHlsZWQuc2VjdGlvbmBcbiAgJi4ke0FjY29yZGlvbkxpc3RpbmdSb3dDbGFzc05hbWV9IHtcbiAgICAmLiR7QWNjb3JkaW9uTGlzdGluZ1Jvd0NsYXNzTmFtZX0tLWlzLW5vdC12aXNpYmxlIHtcbiAgICAgIC4ke0FjY29yZGlvbkxpc3RpbmdSb3dDbGFzc05hbWV9X19jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLiR7QWNjb3JkaW9uTGlzdGluZ1Jvd0NsYXNzTmFtZX0tLWlzLXZpc2libGUge1xuICAgICAgLiR7QWNjb3JkaW9uTGlzdGluZ1Jvd0NsYXNzTmFtZX1fX3RpdGxlX19idG5fX2xhYmVsLS1pbmRpY2F0b3Ige1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDUwJSk7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSkgcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuJHtBY2NvcmRpb25MaXN0aW5nUm93Q2xhc3NOYW1lfV9fdGl0bGUge1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICZfX2J0biB7XG4gICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG5cbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBvdXRsaW5lOiAwO1xuXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG5cbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgcGFkZGluZzogY2FsYygke1Jvb3QuU2l6ZX0gKiAyKSAwO1xuICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgZm9udC1zaXplOiA3dnc7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgICAmX19sYWJlbCB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgY29sb3I6ICR7VGhlbWUuQ29sb3IudmFyRm9yZWdyb3VuZH07XG5cbiAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgKiAwLjY2NjY2NjYpO1xuXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi0taW5kaWNhdG9yIHtcbiAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgY29udGVudDogXCImXCI7XG5cbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgICAgICAgICAgIHJpZ2h0OiAwJTtcbiAgICAgICAgICAgICAgdG9wOiA1MCU7XG5cbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2VyaWY7XG5cbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcblxuICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICBjb250ZW50OiBcIitcIjtcblxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAgICAgICAgICAgcmlnaHQ6IDAlO1xuICAgICAgICAgICAgICB0b3A6IDUwJTtcblxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTE1MCUpIHJvdGF0ZSgwZGVnKTtcblxuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2VyaWY7XG5cbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmJlZm9yZSxcbiAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLCBvcGFjaXR5IDAuNXMgZWFzZTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpIHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCA1MCUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCJcIjtcblxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMnB4O1xuXG4gICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgIGJvdHRvbTogMHB4O1xuXG4gICAgICAgICAgYW5pbWF0aW9uOiAke1NjYWxlWElufSAycyBlYXNlIDE7XG4gICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG5cbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke1RoZW1lLkNvbG9yLnZhckZvcmVncm91bmR9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Sections/AccordionListingRow/styles.scss.tsx\n");

/***/ })

})