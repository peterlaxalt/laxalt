webpackHotUpdate_N_E("pages/studio",{

/***/ "./components/Sections/SplitTextHero/styles.scss.tsx":
/*!***********************************************************!*\
  !*** ./components/Sections/SplitTextHero/styles.scss.tsx ***!
  \***********************************************************/
/*! exports provided: SplitTextHeroClassName, SplitTextHeroStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SplitTextHeroClassName\", function() { return SplitTextHeroClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SplitTextHeroStyle\", function() { return SplitTextHeroStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/Root */ \"./constants/Root.tsx\");\n/* harmony import */ var _constants_styles_Animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/styles/Animation */ \"./constants/styles/Animation.tsx\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/Theme */ \"./constants/Theme.tsx\");\n/* harmony import */ var _MellowFrameHeader_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../MellowFrameHeader/styles.scss */ \"./components/MellowFrameHeader/styles.scss.tsx\");\n/**\n *\n * SplitTextHero.js/styles.scss.tsx\n * @author Peter Laxalt\n * @description The website SplitTextHero Styles.\n *\n */\n// Imports\n//////////////////////////////////////////////////////////////////////\n// Core\n // Constants\n\n\n\n\n // Helpers\n// Begin Styles\n//////////////////////////////////////////////////////////////////////\n\nvar SplitTextHeroClassName = \"split-text-hero\";\nvar SplitTextHeroStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].section.withConfig({\n  displayName: \"stylesscss__SplitTextHeroStyle\",\n  componentId: \"sc-1pqc4sa-0\"\n})([\"&.\", \"{&:first-child{margin-top:\", \";}.\", \"__headline,.\", \"__bottom-details{position:relative;padding:calc(\", \" * 1) 0;display:flex;justify-content:space-between;@media (max-width:\", \"){display:block;}&:before{content:\\\"\\\";position:absolute;left:0px;bottom:0px;width:100%;height:2px;animation:\", \" 2s ease 1;animation-fill-mode:forwards;background:\", \";}}.\", \"__headline{margin:0;font-size:44vw;font-weight:400;line-height:0.75;padding-top:3vw;font-family:\\\"Dharma\\\";color:\", \";@media (max-width:\", \"){font-size:calc(100vw / 1.1);}&__item{display:flex;overflow:hidden;@media (min-width:\", \"){width:calc(100% / 2);&:last-child{justify-content:flex-end;}}&__letter{position:relative;display:block;\", \";animation:\", \" 2s ease 1 forwards;animation-delay:var(--animDelay);user-select:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;padding-top:20px;transition:filter 1s ease;-webkit-text-stroke-width:1px;-webkit-text-stroke-color:\", \";cursor:pointer;&--is-not-active{color:\", \";}&__el{&:before,&:after{content:attr(data-letter);position:absolute;left:0;top:0;}}}@media (max-width:\", \"){&:last-child{font-size:calc(100vw / 1.06);}}}}.\", \"__bottom-details{font-size:1.25rem;&__col{font-size:1rem;span,strong{display:block;position:relative;\", \";animation:\", \" 2s ease 1 forwards;animation-delay:1s;}@media (max-width:\", \"){font-size:3.25vw;&:first-child{padding-bottom:.5em;}}}}}\"], SplitTextHeroClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].FrameSize, SplitTextHeroClassName, SplitTextHeroClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_1__[\"Root\"].Size, _constants_Theme__WEBPACK_IMPORTED_MODULE_3__[\"Theme\"].Base.Media.Width.Md, _constants_styles_Animation__WEBPACK_IMPORTED_MODULE_2__[\"ScaleXIn\"], _constants_Theme__WEBPACK_IMPORTED_MODULE_3__[\"Theme\"].Color.varForeground, SplitTextHeroClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_3__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_3__[\"Theme\"].Base.Media.Width.Md, _constants_Theme__WEBPACK_IMPORTED_MODULE_3__[\"Theme\"].Base.Media.Width.Md, _constants_styles_Animation__WEBPACK_IMPORTED_MODULE_2__[\"UpAndRotateXLInitialCss\"], _constants_styles_Animation__WEBPACK_IMPORTED_MODULE_2__[\"UpAndRotateXL\"], _constants_Theme__WEBPACK_IMPORTED_MODULE_3__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_3__[\"Theme\"].Color.varBackground, _constants_Theme__WEBPACK_IMPORTED_MODULE_3__[\"Theme\"].Base.Media.Width.Md, SplitTextHeroClassName, _constants_styles_Animation__WEBPACK_IMPORTED_MODULE_2__[\"SlideFromLeftMinorInitialCss\"], _constants_styles_Animation__WEBPACK_IMPORTED_MODULE_2__[\"SlideFromLeftMinor\"], _constants_Theme__WEBPACK_IMPORTED_MODULE_3__[\"Theme\"].Base.Media.Width.Md);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9ucy9TcGxpdFRleHRIZXJvL3N0eWxlcy5zY3NzLnRzeD9kZTZkIl0sIm5hbWVzIjpbIlNwbGl0VGV4dEhlcm9DbGFzc05hbWUiLCJTcGxpdFRleHRIZXJvU3R5bGUiLCJzdHlsZWQiLCJzZWN0aW9uIiwiUm9vdCIsIkZyYW1lU2l6ZSIsIlNpemUiLCJUaGVtZSIsIkJhc2UiLCJNZWRpYSIsIldpZHRoIiwiTWQiLCJTY2FsZVhJbiIsIkNvbG9yIiwidmFyRm9yZWdyb3VuZCIsIlVwQW5kUm90YXRlWExJbml0aWFsQ3NzIiwiVXBBbmRSb3RhdGVYTCIsInZhckJhY2tncm91bmQiLCJTbGlkZUZyb21MZWZ0TWlub3JJbml0aWFsQ3NzIiwiU2xpZGVGcm9tTGVmdE1pbm9yIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUVBO0FBQ0E7O0FBRU8sSUFBTUEsc0JBQXNCLG9CQUE1QjtBQUVBLElBQU1DLGtCQUFrQixHQUFHQyx5REFBTSxDQUFDQyxPQUFWO0FBQUE7QUFBQTtBQUFBLHU1Q0FDekJILHNCQUR5QixFQUdYSSxvREFBSSxDQUFDQyxTQUhNLEVBTXhCTCxzQkFOd0IsRUFPdEJBLHNCQVBzQixFQVVUSSxvREFBSSxDQUFDRSxJQVZJLEVBZUpDLHNEQUFLLENBQUNDLElBQU4sQ0FBV0MsS0FBWCxDQUFpQkMsS0FBakIsQ0FBdUJDLEVBZm5CLEVBOEJWQyxvRUE5QlUsRUFpQ1RMLHNEQUFLLENBQUNNLEtBQU4sQ0FBWUMsYUFqQ0gsRUFxQ3hCZCxzQkFyQ3dCLEVBaURoQk8sc0RBQUssQ0FBQ00sS0FBTixDQUFZQyxhQWpESSxFQW1ESlAsc0RBQUssQ0FBQ0MsSUFBTixDQUFXQyxLQUFYLENBQWlCQyxLQUFqQixDQUF1QkMsRUFuRG5CLEVBNkRGSixzREFBSyxDQUFDQyxJQUFOLENBQVdDLEtBQVgsQ0FBaUJDLEtBQWpCLENBQXVCQyxFQTdEckIsRUF5RW5CSSxtRkF6RW1CLEVBMkVSQyx5RUEzRVEsRUEyRlFULHNEQUFLLENBQUNNLEtBQU4sQ0FBWUMsYUEzRnBCLEVBZ0dWUCxzREFBSyxDQUFDTSxLQUFOLENBQVlJLGFBaEdGLEVBa0hGVixzREFBSyxDQUFDQyxJQUFOLENBQVdDLEtBQVgsQ0FBaUJDLEtBQWpCLENBQXVCQyxFQWxIckIsRUEwSHhCWCxzQkExSHdCLEVBcUluQmtCLHdGQXJJbUIsRUF1SVJDLDhFQXZJUSxFQTJJRlosc0RBQUssQ0FBQ0MsSUFBTixDQUFXQyxLQUFYLENBQWlCQyxLQUFqQixDQUF1QkMsRUEzSXJCLENBQXhCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TZWN0aW9ucy9TcGxpdFRleHRIZXJvL3N0eWxlcy5zY3NzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqIFNwbGl0VGV4dEhlcm8uanMvc3R5bGVzLnNjc3MudHN4XG4gKiBAYXV0aG9yIFBldGVyIExheGFsdFxuICogQGRlc2NyaXB0aW9uIFRoZSB3ZWJzaXRlIFNwbGl0VGV4dEhlcm8gU3R5bGVzLlxuICpcbiAqL1xuXG4vLyBJbXBvcnRzXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIENvcmVcbmltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbi8vIENvbnN0YW50c1xuaW1wb3J0IHsgUm9vdCB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvUm9vdFwiO1xuaW1wb3J0IHsgU2NhbGVYSW4sIFNsaWRlRnJvbUxlZnRNaW5vciwgU2xpZGVGcm9tTGVmdE1pbm9ySW5pdGlhbENzcywgVXBBbmRSb3RhdGVYTCwgVXBBbmRSb3RhdGVYTEluaXRpYWxDc3MgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL3N0eWxlcy9BbmltYXRpb25cIjtcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50cy9UaGVtZVwiO1xuaW1wb3J0IHt9IGZyb20gXCIuLi8uLi9NZWxsb3dGcmFtZUhlYWRlci9zdHlsZXMuc2Nzc1wiO1xuXG4vLyBIZWxwZXJzXG5cbi8vIEJlZ2luIFN0eWxlc1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5leHBvcnQgY29uc3QgU3BsaXRUZXh0SGVyb0NsYXNzTmFtZSA9IGBzcGxpdC10ZXh0LWhlcm9gO1xuXG5leHBvcnQgY29uc3QgU3BsaXRUZXh0SGVyb1N0eWxlID0gc3R5bGVkLnNlY3Rpb25gXG4gICYuJHtTcGxpdFRleHRIZXJvQ2xhc3NOYW1lfSB7XG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tdG9wOiAke1Jvb3QuRnJhbWVTaXplfTtcbiAgICB9XG5cbiAgICAuJHtTcGxpdFRleHRIZXJvQ2xhc3NOYW1lfV9faGVhZGxpbmUsXG4gICAgICAuJHtTcGxpdFRleHRIZXJvQ2xhc3NOYW1lfV9fYm90dG9tLWRldGFpbHMge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICBwYWRkaW5nOiBjYWxjKCR7Um9vdC5TaXplfSAqIDEpIDA7XG5cbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAke1RoZW1lLkJhc2UuTWVkaWEuV2lkdGguTWR9KSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG5cbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgYm90dG9tOiAwcHg7XG5cbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMnB4O1xuXG4gICAgICAgIGFuaW1hdGlvbjogJHtTY2FsZVhJbn0gMnMgZWFzZSAxO1xuICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcblxuICAgICAgICBiYWNrZ3JvdW5kOiAke1RoZW1lLkNvbG9yLnZhckZvcmVncm91bmR9O1xuICAgICAgfVxuICAgIH1cblxuICAgIC4ke1NwbGl0VGV4dEhlcm9DbGFzc05hbWV9X19oZWFkbGluZSB7XG4gICAgICBtYXJnaW46IDA7XG5cbiAgICAgIGZvbnQtc2l6ZTogNDR2dztcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgICAgIGxpbmUtaGVpZ2h0OiAwLjc1O1xuXG4gICAgICBwYWRkaW5nLXRvcDogM3Z3O1xuXG4gICAgICBmb250LWZhbWlseTogXCJEaGFybWFcIjtcblxuICAgICAgY29sb3I6ICR7VGhlbWUuQ29sb3IudmFyRm9yZWdyb3VuZH07XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAke1RoZW1lLkJhc2UuTWVkaWEuV2lkdGguTWR9KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogY2FsYygxMDB2dyAvIDEuMSk7XG4gICAgICB9XG5cbiAgICAgICZfX2l0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cblxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogJHtUaGVtZS5CYXNlLk1lZGlhLldpZHRoLk1kfSkge1xuICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLyAyKTtcblxuICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICZfX2xldHRlciB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIFxuICAgICAgICAgICR7VXBBbmRSb3RhdGVYTEluaXRpYWxDc3N9O1xuXG4gICAgICAgICAgYW5pbWF0aW9uOiAke1VwQW5kUm90YXRlWEx9IDJzIGVhc2UgMSBmb3J3YXJkcztcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IHZhcigtLWFuaW1EZWxheSk7XG5cbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsgLyogc3VwcG9ydGVkIGJ5IENocm9tZSBhbmQgT3BlcmEgKi9cbiAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cbiAgICAgICAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEtvbnF1ZXJvciBIVE1MICovXG4gICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogRmlyZWZveCAqL1xuICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSW50ZXJuZXQgRXhwbG9yZXIvRWRnZSAqL1xuXG4gICAgICAgICAgLyogZmlsdGVyOiBibHVyKDApOyAqL1xuXG4gICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG5cbiAgICAgICAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMXMgZWFzZTtcblxuICAgICAgICAgIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDFweDtcbiAgICAgICAgICAtd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOiAke1RoZW1lLkNvbG9yLnZhckZvcmVncm91bmR9O1xuXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgJi0taXMtbm90LWFjdGl2ZSB7XG4gICAgICAgICAgICBjb2xvcjogJHtUaGVtZS5Db2xvci52YXJCYWNrZ3JvdW5kfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmX19lbCB7XG4gICAgICAgICAgICAmOmJlZm9yZSxcbiAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtbGV0dGVyKTtcblxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuXG4gICAgICAgICAgICAgIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsgKi9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJHtUaGVtZS5CYXNlLk1lZGlhLldpZHRoLk1kfSkge1xuICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMTAwdncgLyAxLjA2KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuJHtTcGxpdFRleHRIZXJvQ2xhc3NOYW1lfV9fYm90dG9tLWRldGFpbHMge1xuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuXG4gICAgICAmX19jb2wge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIFxuICAgICAgICBzcGFuLFxuICAgICAgICBzdHJvbmcge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICR7U2xpZGVGcm9tTGVmdE1pbm9ySW5pdGlhbENzc307XG5cbiAgICAgICAgICBhbmltYXRpb246ICR7U2xpZGVGcm9tTGVmdE1pbm9yfSAycyBlYXNlIDEgZm9yd2FyZHM7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAke1RoZW1lLkJhc2UuTWVkaWEuV2lkdGguTWR9KSB7XG5cbiAgICAgICAgICBmb250LXNpemU6IDMuMjV2dztcblxuICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IC41ZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Sections/SplitTextHero/styles.scss.tsx\n");

/***/ })

})