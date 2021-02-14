webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Templates/HomePage/styles.scss.tsx":
/*!*******************************************************!*\
  !*** ./components/Templates/HomePage/styles.scss.tsx ***!
  \*******************************************************/
/*! exports provided: HomePageClassName, HomePageStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HomePageClassName\", function() { return HomePageClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HomePageStyle\", function() { return HomePageStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/Root */ \"./constants/Root.tsx\");\n/* harmony import */ var _constants_styles_Animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/styles/Animation */ \"./constants/styles/Animation.tsx\");\n/* harmony import */ var _constants_styles_Font__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/styles/Font */ \"./constants/styles/Font.tsx\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/Theme */ \"./constants/Theme.tsx\");\n/* harmony import */ var _Sections_MarqueeRow_styles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Sections/MarqueeRow/styles.scss */ \"./components/Sections/MarqueeRow/styles.scss.tsx\");\n// Imports\n// _________________________________________________________________________\n// Core\n\n\n\n\n\n // Constants\n// Begin Styles\n// _________________________________________________________________________\n\n/**\n *\n * @name HomePageClassName\n * @description The root class name for styling. BEM naming conventions.\n *\n */\n\nvar HomePageClassName = \"home\";\n/**\n *\n * @name HomePageStyle\n * @author Peter Laxalt\n *\n */\n\nvar HomePageStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"stylesscss__HomePageStyle\",\n  componentId: \"sc-18xhuus-0\"\n})([\"&.\", \"{.\", \"__content-wrapper{margin:0;padding:0;}.\", \"__canvas-wrapper{@media(min-width:\", \"){position:sticky;top:0;left:0;height:0;}@media (max-width:\", \"){.\", \"{margin-top:calc(\", \" * -5);}}}.\", \"__scroll-down{position:absolute;transform:translateX(-50%);left:50%;bottom:calc(\", \" * 4);\", \";@media (min-width:\", \"){display:none;}&:before{content:\\\"\\\";position:absolute;left:50%;top:calc(100% + 2em);transform:translateX(-50%);height:calc(\", \" * 4);width:1px;animation:\", \" 1s ease 1;background:currentColor;}&__label{display:block;position:relative;animation:\", \" 1s ease 1;}}.\", \"__canvas{position:relative;@media(min-width:\", \"){position:absolute;top:0;left:0;width:100%;height:100vh;}@media(max-width:\", \"){min-height:calc(100vh - \", \");}}.\", \"__horizontal-listings{display:block;@media(max-width:\", \"){display:none;}}.\", \"__vertical-listings{display:none;@media(max-width:\", \"){display:block;padding:0 \", \" 0 \", \"}}}\"], HomePageClassName, HomePageClassName, HomePageClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_4__[\"Theme\"].Base.Media.Width.Md, _constants_Theme__WEBPACK_IMPORTED_MODULE_4__[\"Theme\"].Base.Media.Width.Md, _Sections_MarqueeRow_styles_scss__WEBPACK_IMPORTED_MODULE_5__[\"MarqueeRowClassName\"], _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, HomePageClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, _constants_styles_Font__WEBPACK_IMPORTED_MODULE_3__[\"CaptionTextStyles\"], _constants_Theme__WEBPACK_IMPORTED_MODULE_4__[\"Theme\"].Base.Media.Width.Md, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, _constants_styles_Animation__WEBPACK_IMPORTED_MODULE_2__[\"ScaleYIn\"], _constants_styles_Animation__WEBPACK_IMPORTED_MODULE_2__[\"UpAndRotate\"], HomePageClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_4__[\"Theme\"].Base.Media.Width.Md, _constants_Theme__WEBPACK_IMPORTED_MODULE_4__[\"Theme\"].Base.Media.Width.Md, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Nav.Size, HomePageClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_4__[\"Theme\"].Base.Media.Width.Md, HomePageClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_4__[\"Theme\"].Base.Media.Width.Md, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Grid.Gutter.Right, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Grid.Gutter.Left);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZW1wbGF0ZXMvSG9tZVBhZ2Uvc3R5bGVzLnNjc3MudHN4PzBlOTUiXSwibmFtZXMiOlsiSG9tZVBhZ2VDbGFzc05hbWUiLCJIb21lUGFnZVN0eWxlIiwic3R5bGVkIiwiZGl2IiwiVGhlbWUiLCJCYXNlIiwiTWVkaWEiLCJXaWR0aCIsIk1kIiwiTWFycXVlZVJvd0NsYXNzTmFtZSIsIlJvb3QiLCJTaXplIiwiQ2FwdGlvblRleHRTdHlsZXMiLCJTY2FsZVlJbiIsIlVwQW5kUm90YXRlIiwiTmF2IiwiR3JpZCIsIkd1dHRlciIsIlJpZ2h0IiwiTGVmdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsaUJBQWlCLEdBQUcsTUFBMUI7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUMsYUFBYSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG82QkFDcEJILGlCQURvQixFQUduQkEsaUJBSG1CLEVBUW5CQSxpQkFSbUIsRUFTQUksc0RBQUssQ0FBQ0MsSUFBTixDQUFXQyxLQUFYLENBQWlCQyxLQUFqQixDQUF1QkMsRUFUdkIsRUFnQkNKLHNEQUFLLENBQUNDLElBQU4sQ0FBV0MsS0FBWCxDQUFpQkMsS0FBakIsQ0FBdUJDLEVBaEJ4QixFQWlCZkMsb0ZBakJlLEVBa0JHQyxvREFBSSxDQUFDQyxJQWxCUixFQXVCbkJYLGlCQXZCbUIsRUE2QkxVLG9EQUFJLENBQUNDLElBN0JBLEVBK0JsQkMsd0VBL0JrQixFQWlDQ1Isc0RBQUssQ0FBQ0MsSUFBTixDQUFXQyxLQUFYLENBQWlCQyxLQUFqQixDQUF1QkMsRUFqQ3hCLEVBK0NIRSxvREFBSSxDQUFDQyxJQS9DRixFQWtETEUsb0VBbERLLEVBMkRMQyx1RUEzREssRUErRG5CZCxpQkEvRG1CLEVBa0VBSSxzREFBSyxDQUFDQyxJQUFOLENBQVdDLEtBQVgsQ0FBaUJDLEtBQWpCLENBQXVCQyxFQWxFdkIsRUEyRUFKLHNEQUFLLENBQUNDLElBQU4sQ0FBV0MsS0FBWCxDQUFpQkMsS0FBakIsQ0FBdUJDLEVBM0V2QixFQTRFU0Usb0RBQUksQ0FBQ0ssR0FBTCxDQUFTSixJQTVFbEIsRUFnRm5CWCxpQkFoRm1CLEVBbUZBSSxzREFBSyxDQUFDQyxJQUFOLENBQVdDLEtBQVgsQ0FBaUJDLEtBQWpCLENBQXVCQyxFQW5GdkIsRUF3Rm5CUixpQkF4Rm1CLEVBMkZBSSxzREFBSyxDQUFDQyxJQUFOLENBQVdDLEtBQVgsQ0FBaUJDLEtBQWpCLENBQXVCQyxFQTNGdkIsRUE4RkxFLG9EQUFJLENBQUNNLElBQUwsQ0FBVUMsTUFBVixDQUFpQkMsS0E5RlosRUE4RnVCUixvREFBSSxDQUFDTSxJQUFMLENBQVVDLE1BQVYsQ0FBaUJFLElBOUZ4QyxDQUFuQiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVGVtcGxhdGVzL0hvbWVQYWdlL3N0eWxlcy5zY3NzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cblxuLy8gQ29yZVxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IFJvb3QgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL1Jvb3RcIjtcbmltcG9ydCB7IFNjYWxlWUluLCBVcEFuZFJvdGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvc3R5bGVzL0FuaW1hdGlvblwiO1xuaW1wb3J0IHsgQ2FwdGlvblRleHRTdHlsZXMgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL3N0eWxlcy9Gb250XCI7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvVGhlbWVcIjtcbmltcG9ydCB7IE1hcnF1ZWVSb3dDbGFzc05hbWUgfSBmcm9tIFwiLi4vLi4vU2VjdGlvbnMvTWFycXVlZVJvdy9zdHlsZXMuc2Nzc1wiO1xuXG4vLyBDb25zdGFudHNcblxuLy8gQmVnaW4gU3R5bGVzXG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG5cbi8qKlxuICpcbiAqIEBuYW1lIEhvbWVQYWdlQ2xhc3NOYW1lXG4gKiBAZGVzY3JpcHRpb24gVGhlIHJvb3QgY2xhc3MgbmFtZSBmb3Igc3R5bGluZy4gQkVNIG5hbWluZyBjb252ZW50aW9ucy5cbiAqXG4gKi9cbmV4cG9ydCBjb25zdCBIb21lUGFnZUNsYXNzTmFtZSA9IFwiaG9tZVwiO1xuXG4vKipcbiAqXG4gKiBAbmFtZSBIb21lUGFnZVN0eWxlXG4gKiBAYXV0aG9yIFBldGVyIExheGFsdFxuICpcbiAqL1xuZXhwb3J0IGNvbnN0IEhvbWVQYWdlU3R5bGUgPSBzdHlsZWQuZGl2YFxuICAmLiR7SG9tZVBhZ2VDbGFzc05hbWV9IHtcblxuICAgIC4ke0hvbWVQYWdlQ2xhc3NOYW1lfV9fY29udGVudC13cmFwcGVyIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuXG4gICAgLiR7SG9tZVBhZ2VDbGFzc05hbWV9X19jYW52YXMtd3JhcHBlciB7XG4gICAgICBAbWVkaWEobWluLXdpZHRoOiAke1RoZW1lLkJhc2UuTWVkaWEuV2lkdGguTWR9KSB7XG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogJHtUaGVtZS5CYXNlLk1lZGlhLldpZHRoLk1kfSkge1xuICAgICAgICAuJHtNYXJxdWVlUm93Q2xhc3NOYW1lfSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogY2FsYygke1Jvb3QuU2l6ZX0gKiAtNSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuJHtIb21lUGFnZUNsYXNzTmFtZX1fX3Njcm9sbC1kb3duIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuXG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICBib3R0b206IGNhbGMoJHtSb290LlNpemV9ICogNCk7XG5cbiAgICAgICR7Q2FwdGlvblRleHRTdHlsZXN9O1xuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogJHtUaGVtZS5CYXNlLk1lZGlhLldpZHRoLk1kfSkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG5cbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdG9wOiBjYWxjKDEwMCUgKyAyZW0pO1xuXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcblxuICAgICAgICBoZWlnaHQ6IGNhbGMoJHtSb290LlNpemV9ICogNCk7XG4gICAgICAgIHdpZHRoOiAxcHg7XG5cbiAgICAgICAgYW5pbWF0aW9uOiAke1NjYWxlWUlufSAxcyBlYXNlIDE7XG5cbiAgICAgICAgYmFja2dyb3VuZDogY3VycmVudENvbG9yO1xuICAgICAgfVxuXG4gICAgICAmX19sYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIFxuICAgICAgICBhbmltYXRpb246ICR7VXBBbmRSb3RhdGV9IDFzIGVhc2UgMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuJHtIb21lUGFnZUNsYXNzTmFtZX1fX2NhbnZhcyB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIEBtZWRpYShtaW4td2lkdGg6ICR7VGhlbWUuQmFzZS5NZWRpYS5XaWR0aC5NZH0pIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG5cbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYShtYXgtd2lkdGg6ICR7VGhlbWUuQmFzZS5NZWRpYS5XaWR0aC5NZH0pIHtcbiAgICAgICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtICR7Um9vdC5OYXYuU2l6ZX0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC4ke0hvbWVQYWdlQ2xhc3NOYW1lfV9faG9yaXpvbnRhbC1saXN0aW5ncyB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcblxuICAgICAgQG1lZGlhKG1heC13aWR0aDogJHtUaGVtZS5CYXNlLk1lZGlhLldpZHRoLk1kfSkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cblxuICAgIC4ke0hvbWVQYWdlQ2xhc3NOYW1lfV9fdmVydGljYWwtbGlzdGluZ3Mge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIFxuICAgICAgQG1lZGlhKG1heC13aWR0aDogJHtUaGVtZS5CYXNlLk1lZGlhLldpZHRoLk1kfSkge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcblxuICAgICAgICBwYWRkaW5nOiAwICR7Um9vdC5HcmlkLkd1dHRlci5SaWdodH0gMCAke1Jvb3QuR3JpZC5HdXR0ZXIuTGVmdH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Templates/HomePage/styles.scss.tsx\n");

/***/ })

})