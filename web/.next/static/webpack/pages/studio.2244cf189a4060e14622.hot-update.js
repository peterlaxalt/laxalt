webpackHotUpdate_N_E("pages/studio",{

/***/ "./components/Sections/SplitTextHero/styles.scss.tsx":
/*!***********************************************************!*\
  !*** ./components/Sections/SplitTextHero/styles.scss.tsx ***!
  \***********************************************************/
/*! exports provided: SplitTextHeroClassName, SplitTextHeroStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SplitTextHeroClassName\", function() { return SplitTextHeroClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SplitTextHeroStyle\", function() { return SplitTextHeroStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/Root */ \"./constants/Root.tsx\");\n/* harmony import */ var _constants_styles_Animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/styles/Animation */ \"./constants/styles/Animation.tsx\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/Theme */ \"./constants/Theme.tsx\");\n/* harmony import */ var _MellowFrameHeader_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../MellowFrameHeader/styles.scss */ \"./components/MellowFrameHeader/styles.scss.tsx\");\n/**\n *\n * SplitTextHero.js/styles.scss.tsx\n * @author Peter Laxalt\n * @description The website SplitTextHero Styles.\n *\n */\n// Imports\n//////////////////////////////////////////////////////////////////////\n// Core\n // Constants\n\n\n\n\n // Helpers\n// Begin Styles\n//////////////////////////////////////////////////////////////////////\n\nvar SplitTextHeroClassName = \"split-text-hero\";\nvar SplitTextHeroStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].section.withConfig({\n  displayName: \"stylesscss__SplitTextHeroStyle\",\n  componentId: \"sc-1pqc4sa-0\"\n})([\"&.\", \"{&:first-child{margin-top:\", \";}.\", \"__headline,.\", \"__bottom-details{position:relative;padding:calc(\", \" * 1) 0;display:flex;justify-content:space-between;@media (max-width:\", \"){display:block;}&:before{content:\\\"\\\";position:absolute;left:0px;bottom:0px;width:100%;height:2px;animation:\", \" 2s ease 1;animation-fill-mode:forwards;background:\", \";}}.\", \"__headline{margin:0;font-size:44vw;font-weight:400;line-height:0.75;padding-top:3vw;font-family:\\\"Dharma\\\";color:\", \";@media (max-width:\", \"){font-size:calc(100vw / 1.1);}&__item{display:flex;overflow:hidden;@media (min-width:\", \"){width:calc(100% / 2);&:last-child{justify-content:flex-end;}}&__letter{position:relative;display:block;\", \";animation:\", \" 2s ease 1 forwards;animation-delay:var(--animDelay);filter:blur(0);padding-top:20px;transition:filter 1s ease;&:hover{filter:blur(10px);}}@media (max-width:\", \"){&:last-child{font-size:calc(100vw / 1.06);}}}}.\", \"__bottom-details{font-size:1.25rem;&__col{font-size:1rem;span,strong{display:block;position:relative;\", \";animation:\", \" 2s ease 1 forwards;animation-delay:1s;}@media (max-width:\", \"){font-size:3.5vw;&:first-child{padding-bottom:.5em;}}}}}\"], SplitTextHeroClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].FrameSize, SplitTextHeroClassName, SplitTextHeroClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, _constants_Theme__WEBPACK_IMPORTED_MODULE_3__[\"Theme\"].Base.Media.Width.Md, _constants_styles_Animation__WEBPACK_IMPORTED_MODULE_2__[\"ScaleXIn\"], _constants_Theme__WEBPACK_IMPORTED_MODULE_3__[\"Theme\"].Color.varForeground, SplitTextHeroClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_3__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_3__[\"Theme\"].Base.Media.Width.Md, _constants_Theme__WEBPACK_IMPORTED_MODULE_3__[\"Theme\"].Base.Media.Width.Md, _constants_styles_Animation__WEBPACK_IMPORTED_MODULE_2__[\"UpAndRotateXLInitialCss\"], _constants_styles_Animation__WEBPACK_IMPORTED_MODULE_2__[\"UpAndRotateXL\"], _constants_Theme__WEBPACK_IMPORTED_MODULE_3__[\"Theme\"].Base.Media.Width.Md, SplitTextHeroClassName, _constants_styles_Animation__WEBPACK_IMPORTED_MODULE_2__[\"SlideFromLeftMinorInitialCss\"], _constants_styles_Animation__WEBPACK_IMPORTED_MODULE_2__[\"SlideFromLeftMinor\"], _constants_Theme__WEBPACK_IMPORTED_MODULE_3__[\"Theme\"].Base.Media.Width.Md);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9ucy9TcGxpdFRleHRIZXJvL3N0eWxlcy5zY3NzLnRzeD9kZTZkIl0sIm5hbWVzIjpbIlNwbGl0VGV4dEhlcm9DbGFzc05hbWUiLCJTcGxpdFRleHRIZXJvU3R5bGUiLCJzdHlsZWQiLCJzZWN0aW9uIiwiUm9vdCIsIkZyYW1lU2l6ZSIsIlNpemUiLCJUaGVtZSIsIkJhc2UiLCJNZWRpYSIsIldpZHRoIiwiTWQiLCJTY2FsZVhJbiIsIkNvbG9yIiwidmFyRm9yZWdyb3VuZCIsIlVwQW5kUm90YXRlWExJbml0aWFsQ3NzIiwiVXBBbmRSb3RhdGVYTCIsIlNsaWRlRnJvbUxlZnRNaW5vckluaXRpYWxDc3MiLCJTbGlkZUZyb21MZWZ0TWlub3IiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtDQUdBO0FBRUE7QUFDQTs7QUFFTyxJQUFNQSxzQkFBc0Isb0JBQTVCO0FBRUEsSUFBTUMsa0JBQWtCLEdBQUdDLHlEQUFNLENBQUNDLE9BQVY7QUFBQTtBQUFBO0FBQUEsd3BDQUN6Qkgsc0JBRHlCLEVBR1hJLG9EQUFJLENBQUNDLFNBSE0sRUFNeEJMLHNCQU53QixFQU90QkEsc0JBUHNCLEVBVVRJLG9EQUFJLENBQUNFLElBVkksRUFlSkMsc0RBQUssQ0FBQ0MsSUFBTixDQUFXQyxLQUFYLENBQWlCQyxLQUFqQixDQUF1QkMsRUFmbkIsRUE4QlZDLG9FQTlCVSxFQWlDVEwsc0RBQUssQ0FBQ00sS0FBTixDQUFZQyxhQWpDSCxFQXFDeEJkLHNCQXJDd0IsRUFpRGhCTyxzREFBSyxDQUFDTSxLQUFOLENBQVlDLGFBakRJLEVBbURKUCxzREFBSyxDQUFDQyxJQUFOLENBQVdDLEtBQVgsQ0FBaUJDLEtBQWpCLENBQXVCQyxFQW5EbkIsRUE2REZKLHNEQUFLLENBQUNDLElBQU4sQ0FBV0MsS0FBWCxDQUFpQkMsS0FBakIsQ0FBdUJDLEVBN0RyQixFQXlFbkJJLG1GQXpFbUIsRUEyRVJDLHlFQTNFUSxFQXlGRlQsc0RBQUssQ0FBQ0MsSUFBTixDQUFXQyxLQUFYLENBQWlCQyxLQUFqQixDQUF1QkMsRUF6RnJCLEVBaUd4Qlgsc0JBakd3QixFQTRHbkJpQix3RkE1R21CLEVBOEdSQyw4RUE5R1EsRUFrSEZYLHNEQUFLLENBQUNDLElBQU4sQ0FBV0MsS0FBWCxDQUFpQkMsS0FBakIsQ0FBdUJDLEVBbEhyQixDQUF4QiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2VjdGlvbnMvU3BsaXRUZXh0SGVyby9zdHlsZXMuc2Nzcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqXG4gKiBTcGxpdFRleHRIZXJvLmpzL3N0eWxlcy5zY3NzLnRzeFxuICogQGF1dGhvciBQZXRlciBMYXhhbHRcbiAqIEBkZXNjcmlwdGlvbiBUaGUgd2Vic2l0ZSBTcGxpdFRleHRIZXJvIFN0eWxlcy5cbiAqXG4gKi9cblxuLy8gSW1wb3J0c1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBDb3JlXG5pbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG4vLyBDb25zdGFudHNcbmltcG9ydCB7IFJvb3QgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL1Jvb3RcIjtcbmltcG9ydCB7IFNjYWxlWEluLCBTbGlkZUZyb21MZWZ0TWlub3IsIFNsaWRlRnJvbUxlZnRNaW5vckluaXRpYWxDc3MsIFVwQW5kUm90YXRlWEwsIFVwQW5kUm90YXRlWExJbml0aWFsQ3NzIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50cy9zdHlsZXMvQW5pbWF0aW9uXCI7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvVGhlbWVcIjtcbmltcG9ydCB7fSBmcm9tIFwiLi4vLi4vTWVsbG93RnJhbWVIZWFkZXIvc3R5bGVzLnNjc3NcIjtcblxuLy8gSGVscGVyc1xuXG4vLyBCZWdpbiBTdHlsZXNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuZXhwb3J0IGNvbnN0IFNwbGl0VGV4dEhlcm9DbGFzc05hbWUgPSBgc3BsaXQtdGV4dC1oZXJvYDtcblxuZXhwb3J0IGNvbnN0IFNwbGl0VGV4dEhlcm9TdHlsZSA9IHN0eWxlZC5zZWN0aW9uYFxuICAmLiR7U3BsaXRUZXh0SGVyb0NsYXNzTmFtZX0ge1xuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXRvcDogJHtSb290LkZyYW1lU2l6ZX07XG4gICAgfVxuXG4gICAgLiR7U3BsaXRUZXh0SGVyb0NsYXNzTmFtZX1fX2hlYWRsaW5lLFxuICAgICAgLiR7U3BsaXRUZXh0SGVyb0NsYXNzTmFtZX1fX2JvdHRvbS1kZXRhaWxzIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgcGFkZGluZzogY2FsYygke1Jvb3QuU2l6ZX0gKiAxKSAwO1xuXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogJHtUaGVtZS5CYXNlLk1lZGlhLldpZHRoLk1kfSkge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgJjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuXG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDJweDtcblxuICAgICAgICBhbmltYXRpb246ICR7U2NhbGVYSW59IDJzIGVhc2UgMTtcbiAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG5cbiAgICAgICAgYmFja2dyb3VuZDogJHtUaGVtZS5Db2xvci52YXJGb3JlZ3JvdW5kfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuJHtTcGxpdFRleHRIZXJvQ2xhc3NOYW1lfV9faGVhZGxpbmUge1xuICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICBmb250LXNpemU6IDQ0dnc7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgICBsaW5lLWhlaWdodDogMC43NTtcblxuICAgICAgcGFkZGluZy10b3A6IDN2dztcblxuICAgICAgZm9udC1mYW1pbHk6IFwiRGhhcm1hXCI7XG5cbiAgICAgIGNvbG9yOiAke1RoZW1lLkNvbG9yLnZhckZvcmVncm91bmR9O1xuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogJHtUaGVtZS5CYXNlLk1lZGlhLldpZHRoLk1kfSkge1xuICAgICAgICBmb250LXNpemU6IGNhbGMoMTAwdncgLyAxLjEpO1xuICAgICAgfVxuXG4gICAgICAmX19pdGVtIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG5cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICR7VGhlbWUuQmFzZS5NZWRpYS5XaWR0aC5NZH0pIHtcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC8gMik7XG5cbiAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmX19sZXR0ZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBcbiAgICAgICAgICAke1VwQW5kUm90YXRlWExJbml0aWFsQ3NzfTtcblxuICAgICAgICAgIGFuaW1hdGlvbjogJHtVcEFuZFJvdGF0ZVhMfSAycyBlYXNlIDEgZm9yd2FyZHM7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiB2YXIoLS1hbmltRGVsYXkpO1xuXG4gICAgICAgICAgZmlsdGVyOiBibHVyKDApO1xuXG4gICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG5cbiAgICAgICAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMXMgZWFzZTtcblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgZmlsdGVyOiBibHVyKDEwcHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAke1RoZW1lLkJhc2UuTWVkaWEuV2lkdGguTWR9KSB7XG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygxMDB2dyAvIDEuMDYpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC4ke1NwbGl0VGV4dEhlcm9DbGFzc05hbWV9X19ib3R0b20tZGV0YWlscyB7XG4gICAgICBmb250LXNpemU6IDEuMjVyZW07XG5cbiAgICAgICZfX2NvbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgXG4gICAgICAgIHNwYW4sXG4gICAgICAgIHN0cm9uZyB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgJHtTbGlkZUZyb21MZWZ0TWlub3JJbml0aWFsQ3NzfTtcblxuICAgICAgICAgIGFuaW1hdGlvbjogJHtTbGlkZUZyb21MZWZ0TWlub3J9IDJzIGVhc2UgMSBmb3J3YXJkcztcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICR7VGhlbWUuQmFzZS5NZWRpYS5XaWR0aC5NZH0pIHtcblxuICAgICAgICAgIGZvbnQtc2l6ZTogMy41dnc7XG5cbiAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAuNWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Sections/SplitTextHero/styles.scss.tsx\n");

/***/ })

})