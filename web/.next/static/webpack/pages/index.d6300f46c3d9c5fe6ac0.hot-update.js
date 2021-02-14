webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Templates/HomePage/styles.scss.tsx":
/*!*******************************************************!*\
  !*** ./components/Templates/HomePage/styles.scss.tsx ***!
  \*******************************************************/
/*! exports provided: HomePageClassName, HomePageStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HomePageClassName\", function() { return HomePageClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HomePageStyle\", function() { return HomePageStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/Root */ \"./constants/Root.tsx\");\n/* harmony import */ var _constants_styles_Animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/styles/Animation */ \"./constants/styles/Animation.tsx\");\n/* harmony import */ var _constants_styles_Font__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/styles/Font */ \"./constants/styles/Font.tsx\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/Theme */ \"./constants/Theme.tsx\");\n/* harmony import */ var _Sections_MarqueeRow_styles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Sections/MarqueeRow/styles.scss */ \"./components/Sections/MarqueeRow/styles.scss.tsx\");\n// Imports\n// _________________________________________________________________________\n// Core\n\n\n\n\n\n // Constants\n// Begin Styles\n// _________________________________________________________________________\n\n/**\n *\n * @name HomePageClassName\n * @description The root class name for styling. BEM naming conventions.\n *\n */\n\nvar HomePageClassName = \"home\";\n/**\n *\n * @name HomePageStyle\n * @author Peter Laxalt\n *\n */\n\nvar HomePageStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"stylesscss__HomePageStyle\",\n  componentId: \"sc-18xhuus-0\"\n})([\"&.\", \"{.\", \"__canvas-wrapper{@media(min-width:\", \"){position:sticky;top:0;left:0;height:0;}@media (max-width:\", \"){.\", \"{margin-top:calc(\", \" * -5);}}}.\", \"__scroll-down{position:absolute;transform:translateX(-50%);left:50%;bottom:calc(\", \" * 4);\", \";&:before{content:\\\"\\\";position:absolute;left:50%;top:100%;transform:translateX(-50%);height:calc(\", \" * 4);width:1px;background:currentColor;}&__label{display:block;position:relative;animation:\", \" 1s ease 1;}}.\", \"__canvas{position:relative;@media(min-width:\", \"){position:absolute;top:0;left:0;width:100%;height:100vh;}@media(max-width:\", \"){min-height:calc(100vh - \", \");}}.\", \"__horizontal-listings{display:block;@media(max-width:\", \"){display:none;}}.\", \"__vertical-listings{display:none;@media(max-width:\", \"){display:block;padding:0 \", \" 0 \", \"}}}\"], HomePageClassName, HomePageClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_4__[\"Theme\"].Base.Media.Width.Md, _constants_Theme__WEBPACK_IMPORTED_MODULE_4__[\"Theme\"].Base.Media.Width.Md, _Sections_MarqueeRow_styles_scss__WEBPACK_IMPORTED_MODULE_5__[\"MarqueeRowClassName\"], _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, HomePageClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, _constants_styles_Font__WEBPACK_IMPORTED_MODULE_3__[\"CaptionTextStyles\"], _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, _constants_styles_Animation__WEBPACK_IMPORTED_MODULE_2__[\"UpAndRotate\"], HomePageClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_4__[\"Theme\"].Base.Media.Width.Md, _constants_Theme__WEBPACK_IMPORTED_MODULE_4__[\"Theme\"].Base.Media.Width.Md, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Nav.Size, HomePageClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_4__[\"Theme\"].Base.Media.Width.Md, HomePageClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_4__[\"Theme\"].Base.Media.Width.Md, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Grid.Gutter.Right, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Grid.Gutter.Left);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZW1wbGF0ZXMvSG9tZVBhZ2Uvc3R5bGVzLnNjc3MudHN4PzBlOTUiXSwibmFtZXMiOlsiSG9tZVBhZ2VDbGFzc05hbWUiLCJIb21lUGFnZVN0eWxlIiwic3R5bGVkIiwiZGl2IiwiVGhlbWUiLCJCYXNlIiwiTWVkaWEiLCJXaWR0aCIsIk1kIiwiTWFycXVlZVJvd0NsYXNzTmFtZSIsIlJvb3QiLCJTaXplIiwiQ2FwdGlvblRleHRTdHlsZXMiLCJVcEFuZFJvdGF0ZSIsIk5hdiIsIkdyaWQiLCJHdXR0ZXIiLCJSaWdodCIsIkxlZnQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLElBQU1BLGlCQUFpQixHQUFHLE1BQTFCO0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLElBQU1DLGFBQWEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw4eUJBQ3BCSCxpQkFEb0IsRUFFbkJBLGlCQUZtQixFQUdBSSxzREFBSyxDQUFDQyxJQUFOLENBQVdDLEtBQVgsQ0FBaUJDLEtBQWpCLENBQXVCQyxFQUh2QixFQVVDSixzREFBSyxDQUFDQyxJQUFOLENBQVdDLEtBQVgsQ0FBaUJDLEtBQWpCLENBQXVCQyxFQVZ4QixFQVdmQyxvRkFYZSxFQVlHQyxvREFBSSxDQUFDQyxJQVpSLEVBaUJuQlgsaUJBakJtQixFQXVCTFUsb0RBQUksQ0FBQ0MsSUF2QkEsRUF5QmxCQyx3RUF6QmtCLEVBcUNIRixvREFBSSxDQUFDQyxJQXJDRixFQStDTEUsdUVBL0NLLEVBbURuQmIsaUJBbkRtQixFQXNEQUksc0RBQUssQ0FBQ0MsSUFBTixDQUFXQyxLQUFYLENBQWlCQyxLQUFqQixDQUF1QkMsRUF0RHZCLEVBK0RBSixzREFBSyxDQUFDQyxJQUFOLENBQVdDLEtBQVgsQ0FBaUJDLEtBQWpCLENBQXVCQyxFQS9EdkIsRUFnRVNFLG9EQUFJLENBQUNJLEdBQUwsQ0FBU0gsSUFoRWxCLEVBb0VuQlgsaUJBcEVtQixFQXVFQUksc0RBQUssQ0FBQ0MsSUFBTixDQUFXQyxLQUFYLENBQWlCQyxLQUFqQixDQUF1QkMsRUF2RXZCLEVBNEVuQlIsaUJBNUVtQixFQStFQUksc0RBQUssQ0FBQ0MsSUFBTixDQUFXQyxLQUFYLENBQWlCQyxLQUFqQixDQUF1QkMsRUEvRXZCLEVBa0ZMRSxvREFBSSxDQUFDSyxJQUFMLENBQVVDLE1BQVYsQ0FBaUJDLEtBbEZaLEVBa0Z1QlAsb0RBQUksQ0FBQ0ssSUFBTCxDQUFVQyxNQUFWLENBQWlCRSxJQWxGeEMsQ0FBbkIiLCJmaWxlIjoiLi9jb21wb25lbnRzL1RlbXBsYXRlcy9Ib21lUGFnZS9zdHlsZXMuc2Nzcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG5cbi8vIENvcmVcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBSb290IH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50cy9Sb290XCI7XG5pbXBvcnQgeyBVcEFuZFJvdGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvc3R5bGVzL0FuaW1hdGlvblwiO1xuaW1wb3J0IHsgQ2FwdGlvblRleHRTdHlsZXMgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL3N0eWxlcy9Gb250XCI7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvVGhlbWVcIjtcbmltcG9ydCB7IE1hcnF1ZWVSb3dDbGFzc05hbWUgfSBmcm9tIFwiLi4vLi4vU2VjdGlvbnMvTWFycXVlZVJvdy9zdHlsZXMuc2Nzc1wiO1xuXG4vLyBDb25zdGFudHNcblxuLy8gQmVnaW4gU3R5bGVzXG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG5cbi8qKlxuICpcbiAqIEBuYW1lIEhvbWVQYWdlQ2xhc3NOYW1lXG4gKiBAZGVzY3JpcHRpb24gVGhlIHJvb3QgY2xhc3MgbmFtZSBmb3Igc3R5bGluZy4gQkVNIG5hbWluZyBjb252ZW50aW9ucy5cbiAqXG4gKi9cbmV4cG9ydCBjb25zdCBIb21lUGFnZUNsYXNzTmFtZSA9IFwiaG9tZVwiO1xuXG4vKipcbiAqXG4gKiBAbmFtZSBIb21lUGFnZVN0eWxlXG4gKiBAYXV0aG9yIFBldGVyIExheGFsdFxuICpcbiAqL1xuZXhwb3J0IGNvbnN0IEhvbWVQYWdlU3R5bGUgPSBzdHlsZWQuZGl2YFxuICAmLiR7SG9tZVBhZ2VDbGFzc05hbWV9IHtcbiAgICAuJHtIb21lUGFnZUNsYXNzTmFtZX1fX2NhbnZhcy13cmFwcGVyIHtcbiAgICAgIEBtZWRpYShtaW4td2lkdGg6ICR7VGhlbWUuQmFzZS5NZWRpYS5XaWR0aC5NZH0pIHtcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAke1RoZW1lLkJhc2UuTWVkaWEuV2lkdGguTWR9KSB7XG4gICAgICAgIC4ke01hcnF1ZWVSb3dDbGFzc05hbWV9IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiBjYWxjKCR7Um9vdC5TaXplfSAqIC01KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC4ke0hvbWVQYWdlQ2xhc3NOYW1lfV9fc2Nyb2xsLWRvd24ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG5cbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIGJvdHRvbTogY2FsYygke1Jvb3QuU2l6ZX0gKiA0KTtcblxuICAgICAgJHtDYXB0aW9uVGV4dFN0eWxlc307XG5cbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcblxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0b3A6IDEwMCU7XG5cbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuXG4gICAgICAgIGhlaWdodDogY2FsYygke1Jvb3QuU2l6ZX0gKiA0KTtcbiAgICAgICAgd2lkdGg6IDFweDtcblxuICAgICAgICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7XG4gICAgICB9XG5cbiAgICAgICZfX2xhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgXG4gICAgICAgIGFuaW1hdGlvbjogJHtVcEFuZFJvdGF0ZX0gMXMgZWFzZSAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIC4ke0hvbWVQYWdlQ2xhc3NOYW1lfV9fY2FudmFzIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgQG1lZGlhKG1pbi13aWR0aDogJHtUaGVtZS5CYXNlLk1lZGlhLldpZHRoLk1kfSkge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcblxuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhKG1heC13aWR0aDogJHtUaGVtZS5CYXNlLk1lZGlhLldpZHRoLk1kfSkge1xuICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gJHtSb290Lk5hdi5TaXplfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLiR7SG9tZVBhZ2VDbGFzc05hbWV9X19ob3Jpem9udGFsLWxpc3RpbmdzIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgICBAbWVkaWEobWF4LXdpZHRoOiAke1RoZW1lLkJhc2UuTWVkaWEuV2lkdGguTWR9KSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLiR7SG9tZVBhZ2VDbGFzc05hbWV9X192ZXJ0aWNhbC1saXN0aW5ncyB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgXG4gICAgICBAbWVkaWEobWF4LXdpZHRoOiAke1RoZW1lLkJhc2UuTWVkaWEuV2lkdGguTWR9KSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgICAgIHBhZGRpbmc6IDAgJHtSb290LkdyaWQuR3V0dGVyLlJpZ2h0fSAwICR7Um9vdC5HcmlkLkd1dHRlci5MZWZ0fVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Templates/HomePage/styles.scss.tsx\n");

/***/ })

})