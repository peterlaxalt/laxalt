webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Templates/HomePage/styles.scss.tsx":
/*!*******************************************************!*\
  !*** ./components/Templates/HomePage/styles.scss.tsx ***!
  \*******************************************************/
/*! exports provided: HomePageClassName, HomePageStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HomePageClassName\", function() { return HomePageClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HomePageStyle\", function() { return HomePageStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/Root */ \"./constants/Root.tsx\");\n/* harmony import */ var _constants_styles_Animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/styles/Animation */ \"./constants/styles/Animation.tsx\");\n/* harmony import */ var _constants_styles_Font__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/styles/Font */ \"./constants/styles/Font.tsx\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/Theme */ \"./constants/Theme.tsx\");\n/* harmony import */ var _Sections_MarqueeRow_styles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Sections/MarqueeRow/styles.scss */ \"./components/Sections/MarqueeRow/styles.scss.tsx\");\n// Imports\n// _________________________________________________________________________\n// Core\n\n\n\n\n\n // Constants\n// Begin Styles\n// _________________________________________________________________________\n\n/**\n *\n * @name HomePageClassName\n * @description The root class name for styling. BEM naming conventions.\n *\n */\n\nvar HomePageClassName = \"home\";\n/**\n *\n * @name HomePageStyle\n * @author Peter Laxalt\n *\n */\n\nvar HomePageStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"stylesscss__HomePageStyle\",\n  componentId: \"sc-18xhuus-0\"\n})([\"&.\", \"{.\", \"__canvas-wrapper{@media(min-width:\", \"){position:sticky;top:0;left:0;height:0;}@media (max-width:\", \"){.\", \"{margin-top:calc(\", \" * -5);}}}.\", \"__scroll-down{position:absolute;transform:translateX(-50%);left:50%;bottom:calc(\", \" * 3.5);\", \";&__label{display:block;position:relative;animation:\", \" 1s ease 1;}}.\", \"__canvas{position:relative;@media(min-width:\", \"){position:absolute;top:0;left:0;width:100%;height:100vh;}@media(max-width:\", \"){min-height:calc(100vh - \", \");}}.\", \"__horizontal-listings{display:block;@media(max-width:\", \"){display:none;}}.\", \"__vertical-listings{display:none;@media(max-width:\", \"){display:block;padding:0 \", \" 0 \", \"}}}\"], HomePageClassName, HomePageClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_4__[\"Theme\"].Base.Media.Width.Md, _constants_Theme__WEBPACK_IMPORTED_MODULE_4__[\"Theme\"].Base.Media.Width.Md, _Sections_MarqueeRow_styles_scss__WEBPACK_IMPORTED_MODULE_5__[\"MarqueeRowClassName\"], _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, HomePageClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, _constants_styles_Font__WEBPACK_IMPORTED_MODULE_3__[\"CaptionTextStyles\"], _constants_styles_Animation__WEBPACK_IMPORTED_MODULE_2__[\"UpAndRotate\"], HomePageClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_4__[\"Theme\"].Base.Media.Width.Md, _constants_Theme__WEBPACK_IMPORTED_MODULE_4__[\"Theme\"].Base.Media.Width.Md, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Nav.Size, HomePageClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_4__[\"Theme\"].Base.Media.Width.Md, HomePageClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_4__[\"Theme\"].Base.Media.Width.Md, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Grid.Gutter.Right, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Grid.Gutter.Left);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZW1wbGF0ZXMvSG9tZVBhZ2Uvc3R5bGVzLnNjc3MudHN4PzBlOTUiXSwibmFtZXMiOlsiSG9tZVBhZ2VDbGFzc05hbWUiLCJIb21lUGFnZVN0eWxlIiwic3R5bGVkIiwiZGl2IiwiVGhlbWUiLCJCYXNlIiwiTWVkaWEiLCJXaWR0aCIsIk1kIiwiTWFycXVlZVJvd0NsYXNzTmFtZSIsIlJvb3QiLCJTaXplIiwiQ2FwdGlvblRleHRTdHlsZXMiLCJVcEFuZFJvdGF0ZSIsIk5hdiIsIkdyaWQiLCJHdXR0ZXIiLCJSaWdodCIsIkxlZnQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLElBQU1BLGlCQUFpQixHQUFHLE1BQTFCO0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLElBQU1DLGFBQWEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxrcUJBQ3BCSCxpQkFEb0IsRUFFbkJBLGlCQUZtQixFQUdBSSxzREFBSyxDQUFDQyxJQUFOLENBQVdDLEtBQVgsQ0FBaUJDLEtBQWpCLENBQXVCQyxFQUh2QixFQVVDSixzREFBSyxDQUFDQyxJQUFOLENBQVdDLEtBQVgsQ0FBaUJDLEtBQWpCLENBQXVCQyxFQVZ4QixFQVdmQyxvRkFYZSxFQVlHQyxvREFBSSxDQUFDQyxJQVpSLEVBaUJuQlgsaUJBakJtQixFQXVCTFUsb0RBQUksQ0FBQ0MsSUF2QkEsRUF5QmxCQyx3RUF6QmtCLEVBK0JMQyx1RUEvQkssRUFtQ25CYixpQkFuQ21CLEVBc0NBSSxzREFBSyxDQUFDQyxJQUFOLENBQVdDLEtBQVgsQ0FBaUJDLEtBQWpCLENBQXVCQyxFQXRDdkIsRUErQ0FKLHNEQUFLLENBQUNDLElBQU4sQ0FBV0MsS0FBWCxDQUFpQkMsS0FBakIsQ0FBdUJDLEVBL0N2QixFQWdEU0Usb0RBQUksQ0FBQ0ksR0FBTCxDQUFTSCxJQWhEbEIsRUFvRG5CWCxpQkFwRG1CLEVBdURBSSxzREFBSyxDQUFDQyxJQUFOLENBQVdDLEtBQVgsQ0FBaUJDLEtBQWpCLENBQXVCQyxFQXZEdkIsRUE0RG5CUixpQkE1RG1CLEVBK0RBSSxzREFBSyxDQUFDQyxJQUFOLENBQVdDLEtBQVgsQ0FBaUJDLEtBQWpCLENBQXVCQyxFQS9EdkIsRUFrRUxFLG9EQUFJLENBQUNLLElBQUwsQ0FBVUMsTUFBVixDQUFpQkMsS0FsRVosRUFrRXVCUCxvREFBSSxDQUFDSyxJQUFMLENBQVVDLE1BQVYsQ0FBaUJFLElBbEV4QyxDQUFuQiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVGVtcGxhdGVzL0hvbWVQYWdlL3N0eWxlcy5zY3NzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cblxuLy8gQ29yZVxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IFJvb3QgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL1Jvb3RcIjtcbmltcG9ydCB7IFVwQW5kUm90YXRlIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50cy9zdHlsZXMvQW5pbWF0aW9uXCI7XG5pbXBvcnQgeyBDYXB0aW9uVGV4dFN0eWxlcyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvc3R5bGVzL0ZvbnRcIjtcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50cy9UaGVtZVwiO1xuaW1wb3J0IHsgTWFycXVlZVJvd0NsYXNzTmFtZSB9IGZyb20gXCIuLi8uLi9TZWN0aW9ucy9NYXJxdWVlUm93L3N0eWxlcy5zY3NzXCI7XG5cbi8vIENvbnN0YW50c1xuXG4vLyBCZWdpbiBTdHlsZXNcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cblxuLyoqXG4gKlxuICogQG5hbWUgSG9tZVBhZ2VDbGFzc05hbWVcbiAqIEBkZXNjcmlwdGlvbiBUaGUgcm9vdCBjbGFzcyBuYW1lIGZvciBzdHlsaW5nLiBCRU0gbmFtaW5nIGNvbnZlbnRpb25zLlxuICpcbiAqL1xuZXhwb3J0IGNvbnN0IEhvbWVQYWdlQ2xhc3NOYW1lID0gXCJob21lXCI7XG5cbi8qKlxuICpcbiAqIEBuYW1lIEhvbWVQYWdlU3R5bGVcbiAqIEBhdXRob3IgUGV0ZXIgTGF4YWx0XG4gKlxuICovXG5leHBvcnQgY29uc3QgSG9tZVBhZ2VTdHlsZSA9IHN0eWxlZC5kaXZgXG4gICYuJHtIb21lUGFnZUNsYXNzTmFtZX0ge1xuICAgIC4ke0hvbWVQYWdlQ2xhc3NOYW1lfV9fY2FudmFzLXdyYXBwZXIge1xuICAgICAgQG1lZGlhKG1pbi13aWR0aDogJHtUaGVtZS5CYXNlLk1lZGlhLldpZHRoLk1kfSkge1xuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICR7VGhlbWUuQmFzZS5NZWRpYS5XaWR0aC5NZH0pIHtcbiAgICAgICAgLiR7TWFycXVlZVJvd0NsYXNzTmFtZX0ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IGNhbGMoJHtSb290LlNpemV9ICogLTUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLiR7SG9tZVBhZ2VDbGFzc05hbWV9X19zY3JvbGwtZG93biB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcblxuICAgICAgbGVmdDogNTAlO1xuICAgICAgYm90dG9tOiBjYWxjKCR7Um9vdC5TaXplfSAqIDMuNSk7XG5cbiAgICAgICR7Q2FwdGlvblRleHRTdHlsZXN9O1xuXG4gICAgICAmX19sYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIFxuICAgICAgICBhbmltYXRpb246ICR7VXBBbmRSb3RhdGV9IDFzIGVhc2UgMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuJHtIb21lUGFnZUNsYXNzTmFtZX1fX2NhbnZhcyB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIEBtZWRpYShtaW4td2lkdGg6ICR7VGhlbWUuQmFzZS5NZWRpYS5XaWR0aC5NZH0pIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG5cbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYShtYXgtd2lkdGg6ICR7VGhlbWUuQmFzZS5NZWRpYS5XaWR0aC5NZH0pIHtcbiAgICAgICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtICR7Um9vdC5OYXYuU2l6ZX0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC4ke0hvbWVQYWdlQ2xhc3NOYW1lfV9faG9yaXpvbnRhbC1saXN0aW5ncyB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcblxuICAgICAgQG1lZGlhKG1heC13aWR0aDogJHtUaGVtZS5CYXNlLk1lZGlhLldpZHRoLk1kfSkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cblxuICAgIC4ke0hvbWVQYWdlQ2xhc3NOYW1lfV9fdmVydGljYWwtbGlzdGluZ3Mge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIFxuICAgICAgQG1lZGlhKG1heC13aWR0aDogJHtUaGVtZS5CYXNlLk1lZGlhLldpZHRoLk1kfSkge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcblxuICAgICAgICBwYWRkaW5nOiAwICR7Um9vdC5HcmlkLkd1dHRlci5SaWdodH0gMCAke1Jvb3QuR3JpZC5HdXR0ZXIuTGVmdH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Templates/HomePage/styles.scss.tsx\n");

/***/ })

})