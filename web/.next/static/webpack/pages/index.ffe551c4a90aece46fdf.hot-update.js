webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Sections/ProjectScrollSection/styles.scss.tsx":
/*!******************************************************************!*\
  !*** ./components/Sections/ProjectScrollSection/styles.scss.tsx ***!
  \******************************************************************/
/*! exports provided: ProjectScrollSectionClassName, ProjectScrollSectionTransitionTime, ProjectScrollSectionStyle, ProjectScrollSectionGlobalStyles, ProjectScrollBlurOverlayStyles, ScrollCardClassName, ScrollCardStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectScrollSectionClassName\", function() { return ProjectScrollSectionClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectScrollSectionTransitionTime\", function() { return ProjectScrollSectionTransitionTime; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectScrollSectionStyle\", function() { return ProjectScrollSectionStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectScrollSectionGlobalStyles\", function() { return ProjectScrollSectionGlobalStyles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectScrollBlurOverlayStyles\", function() { return ProjectScrollBlurOverlayStyles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ScrollCardClassName\", function() { return ScrollCardClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ScrollCardStyle\", function() { return ScrollCardStyle; });\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/Theme */ \"./constants/Theme.tsx\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/Root */ \"./constants/Root.tsx\");\n/* harmony import */ var _pages_projects_no_distort_with_canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../pages/projects/no-distort-with-canvas */ \"./pages/projects/no-distort-with-canvas.tsx\");\n\n\nfunction _templateObject() {\n  var data = Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  .\", \" {\\n    transition: filter 1s ease, opacity 1s ease;\\n\\n    \", \"\\n\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n// Imports\n// _________________________________________________________________________\n// Core\n // Constants\n\n\n\n // Begin Styles\n// _________________________________________________________________________\n\n/**\n *\n * @name ProjectScrollSectionClassName\n * @description The root class name for styling. BEM naming conventions.\n *\n */\n\nvar ProjectScrollSectionClassName = \"project-scroll\";\nvar ProjectScrollSectionTransitionTime = \"3s\";\n/**\n *\n * @name ProjectScrollSectionStyle\n * @author Peter Laxalt\n *\n */\n\nvar ProjectScrollSectionStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section.withConfig({\n  displayName: \"stylesscss__ProjectScrollSectionStyle\",\n  componentId: \"sc-897oup-0\"\n})([\"&.\", \"{--\", \"__dot-size:.75rem;&.\", \"--is-scrolled{.\", \"__content-wrapper{&:before{transform:translate3d(0%,50%,0px) scaleX(1);}&:after{transform:translate3d(0%,-50%,0px) scale(1);transition-delay:\", \";}}}.\", \"__sticky-wrapper{position:sticky;top:0;height:100vh;width:100%;overflow-x:hidden;}.\", \"__content-wrapper{position:relative;height:100vh;padding:0;display:flex;overflow:hidden;flex-flow:row nowrap;justify-content:flex-start;align-items:center;padding-left:100vw;padding-right:10vw;&:after{content:\\\"\\\";position:absolute;left:calc(100vw - (var(--\", \"__dot-size) / 2));top:50%;transform:translate3d(0%,-50%,0px) scale(0);width:var(--\", \"__dot-size);height:var(--\", \"__dot-size);border-radius:50%;background:\", \";transition:transform 1s ease-in-out;}&:before{content:\\\"\\\";position:absolute;top:50%;left:0;transform:translate3d(-100%,50%,0px) scaleX(1);transform-origin:left center;height:1px;width:100vw;transition:transform \", \" ease-in-out;background:linear-gradient( to right,rgba(0,0,0,0),rgba(0,0,0,0) 50%,\", \" 50%,\", \" );background-size:6px 100%;}}.\", \"__horizontal-wrapper{position:relative;width:100%;min-height:100vh;}.\", \"__x-translate-wrapper{position:absolute;height:100%;transform-style:preserve-3d;will-change:transform;}.\", \"__outer{position:relative;width:100%;}}\"], ProjectScrollSectionClassName, ProjectScrollSectionClassName, ProjectScrollSectionClassName, ProjectScrollSectionClassName, ProjectScrollSectionTransitionTime, ProjectScrollSectionClassName, ProjectScrollSectionClassName, ProjectScrollSectionClassName, ProjectScrollSectionClassName, ProjectScrollSectionClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, ProjectScrollSectionTransitionTime, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, ProjectScrollSectionClassName, ProjectScrollSectionClassName, ProjectScrollSectionClassName);\nvar ProjectScrollSectionGlobalStyles = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"createGlobalStyle\"])(_templateObject(), _pages_projects_no_distort_with_canvas__WEBPACK_IMPORTED_MODULE_4__[\"NoDistortCanvasClassName\"], function (props) {\n  return props.isScrolled ? \"filter: blur(50px); opacity: 0;\" : \"filter: blur(0px); opacity: 1;\";\n});\nvar ProjectScrollBlurOverlayStyles = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"stylesscss__ProjectScrollBlurOverlayStyles\",\n  componentId: \"sc-897oup-1\"\n})([\"transition:backdrop-filter 0.5s ease;position:fixed;left:0;top:0;width:100vw;height:100vh;\", \" &:before{content:\\\"\\\";position:absolute;left:0;top:0;width:100vw;height:100vh;transition:opacity 2.5s ease;transition-delay:opacity 1s;background:\", \";\", \"}\"], function (props) {\n  return props.isBreakpoint ? \"backdrop-filter: blur(50px) opacity(1);\" : \"backdrop-filter: blur(50px) opacity(0);\";\n}, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varBackground, function (props) {\n  return props.isBreakpoint ? \"opacity: 1;\" : \"opacity: 0;\";\n});\n/**\n *\n * @name ScrollCard\n * @description The root class name for styling. BEM naming conventions.\n *\n */\n\nvar ScrollCardClassName = \"scroll-card\";\nvar ScrollCardStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"stylesscss__ScrollCardStyle\",\n  componentId: \"sc-897oup-2\"\n})([\"&.\", \"{--\", \"__card-spacing:calc(\", \" * 2);height:100vh;width:50vw;padding:calc(\", \" + (\", \" / 2)) var(--\", \"__card-spacing) calc(\", \" / 2) var(--\", \"__card-spacing);display:flex;align-items:flex-end;flex-shrink:0;position:relative;&:before,&:after{content:\\\"\\\";position:absolute;height:100%;width:1px;background:linear-gradient( to bottom,rgba(0,0,0,0),rgba(0,0,0,0) 50%,\", \" 50%,\", \" );background-size:100% 6px;}&:before,&:after{transition:transform \", \" ease-in-out;transition-delay:transform \", \" ease;}&:after{right:0;top:0;bottom:0;transform:translateY(100%);}&:before{left:50%;top:0;bottom:0;transform:translate(-50%,-100%);}img{width:100%;max-width:100%;}&:first-child{.\", \"__inner{&:before{content:\\\"\\\";position:absolute;height:100vh;width:1px;bottom:0;left:calc(var(--\", \"__card-spacing) * -1);background:linear-gradient( to bottom,rgba(0,0,0,0),rgba(0,0,0,0) 50%,\", \" 50%,\", \" );background-size:100% 6px;}}}.\", \"__bg{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:40%;height:50%;box-shadow:0px 0px 50px 100px \", \";mix-blend-mode:multiply;background:\", \";border-radius:50%;}.\", \"__dot{position:absolute;transform:translate3d(0%,-50%,0px) scale(0);width:var(--\", \"__dot-size);height:var(--\", \"__dot-size);border-radius:50%;background:\", \";transition:transform 1s ease-in-out;transition-delay:transform 10s ease;&--right{left:calc(100% - (var(--\", \"__dot-size) / 2));top:50%;}}.\", \"__inner{height:100%;width:100%;position:relative;z-index:2;display:flex;justify-content:space-between;flex-direction:column;&:after{content:'';position:absolute;top:calc(50% - (\", \" / 2));left:calc(var(--\", \"__card-spacing) * -1);width:calc(100% + (var(--\", \"__card-spacing) * 2));height:1px;transform:translate3d(0%,50%,0px) scaleX(1);transform-origin:left center;transition:transform \", \" ease-in-out;background:linear-gradient( to right,rgba(0,0,0,0),rgba(0,0,0,0) 50%,\", \" 50%,\", \" );background-size:6px 100%;}}.\", \"__row{display:flex;justify-content:space-between;&--top{padding-top:calc(\", \" / 4);}&--bottom{padding-bottom:calc(\", \" / 2);position:relative;&:before{content:\\\"\\\";position:absolute;bottom:0;left:0;height:5px;width:100%;transform:scaleX(0);transform-origin:right center;transition:transform \", \" ease;background:\", \";}}}.\", \"__col{&__content-row{display:block;text-transform:uppercase;margin-top:0.25em;transform:translateX(-20%) rotate(0deg);opacity:0;transition:transform calc(\", \" / 2) ease,opacity calc(\", \" / 2) ease;transition-delay:transform calc(\", \" / 2),opacity calc(\", \" / 2);&--content-major{font-size:1.2rem;}}&--bottom-right{text-align:right;}}.\", \"__image-wrapper{background:\", \";line-height:0;position:relative;z-index:2;box-shadow:0px 0px 0px 2px \", \";transition:box-shadow 1s ease;overflow:hidden;&:after{content:\\\"\\\";position:absolute;left:0;top:0;width:100%;height:100%;background:\", \";transform:scaleX(1);transform-origin:left center;transition:transform 1s ease;}&:before{content:\\\"\\\";position:absolute;left:0;top:0;width:100%;height:100%;background:\", \";mix-blend-mode:multiply;z-index:2;opacity:1;transition:opacity 1s ease;transition-delay:transform 2.75s ease;}.\", \"__image{&--filtered{mix-blend-mode:screen;filter:grayscale() blur(0px);transition:filter 1s ease;}&--normal{position:absolute;left:0;top:0;opacity:0;transition:opacity 1s ease;}}&:hover{&:before{opacity:0;}.\", \"__image--filtered{mix-blend-mode:screen;filter:grayscale() blur(20px);}.\", \"__image--normal{opacity:1;transition:opacity 0.5s ease;}}}&.\", \"--is-visible{&:after{transform:translateY(0%);transition-delay:transform \", \" ease;}&:before{transform:translate(-50%,0%);transition-delay:transform \", \" ease;}.\", \"__dot{transform:translate3d(0%,-50%,0px) scale(1);transition-delay:transform 10s ease;}.\", \"__col{&__content-row{transform:translateX(0%) rotate(0deg);opacity:1;}}.\", \"__row{&--bottom{&:before{transform:scaleX(1);transition-delay:transform \", \" ease;}}}.\", \"__image-wrapper{&:after{transform:scaleX(0);transition-delay:transform \", \" ease;}}}}\"], ScrollCardClassName, ScrollCardClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].Size, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].FrameSize, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].FrameSize, ScrollCardClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].FrameSize, ScrollCardClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, ProjectScrollSectionTransitionTime, ProjectScrollSectionTransitionTime, ScrollCardClassName, ScrollCardClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, ScrollCardClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varSecondary, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varSecondary, ScrollCardClassName, ProjectScrollSectionClassName, ProjectScrollSectionClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, ProjectScrollSectionClassName, ScrollCardClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].FrameSize, ScrollCardClassName, ScrollCardClassName, ProjectScrollSectionTransitionTime, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, ScrollCardClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].FrameSize, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].FrameSize, ProjectScrollSectionTransitionTime, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, ScrollCardClassName, ProjectScrollSectionTransitionTime, ProjectScrollSectionTransitionTime, ProjectScrollSectionTransitionTime, ProjectScrollSectionTransitionTime, ScrollCardClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varBackground, ScrollCardClassName, ScrollCardClassName, ScrollCardClassName, ScrollCardClassName, ProjectScrollSectionTransitionTime, ProjectScrollSectionTransitionTime, ScrollCardClassName, ScrollCardClassName, ScrollCardClassName, ProjectScrollSectionTransitionTime, ScrollCardClassName, ProjectScrollSectionTransitionTime);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9ucy9Qcm9qZWN0U2Nyb2xsU2VjdGlvbi9zdHlsZXMuc2Nzcy50c3g/YTk5MiJdLCJuYW1lcyI6WyJQcm9qZWN0U2Nyb2xsU2VjdGlvbkNsYXNzTmFtZSIsIlByb2plY3RTY3JvbGxTZWN0aW9uVHJhbnNpdGlvblRpbWUiLCJQcm9qZWN0U2Nyb2xsU2VjdGlvblN0eWxlIiwic3R5bGVkIiwic2VjdGlvbiIsIlRoZW1lIiwiQ29sb3IiLCJ2YXJGb3JlZ3JvdW5kIiwiUHJvamVjdFNjcm9sbFNlY3Rpb25HbG9iYWxTdHlsZXMiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIk5vRGlzdG9ydENhbnZhc0NsYXNzTmFtZSIsInByb3BzIiwiaXNTY3JvbGxlZCIsIlByb2plY3RTY3JvbGxCbHVyT3ZlcmxheVN0eWxlcyIsImRpdiIsImlzQnJlYWtwb2ludCIsInZhckJhY2tncm91bmQiLCJTY3JvbGxDYXJkQ2xhc3NOYW1lIiwiU2Nyb2xsQ2FyZFN0eWxlIiwiUm9vdCIsIlNpemUiLCJGcmFtZVNpemUiLCJ2YXJTZWNvbmRhcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7Q0FHQTs7QUFDQTtBQUNBO0NBT0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsNkJBQTZCLEdBQUcsZ0JBQXRDO0FBQ0EsSUFBTUMsa0NBQWtDLEdBQUcsSUFBM0M7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUMseUJBQXlCLEdBQUdDLHlEQUFNLENBQUNDLE9BQVY7QUFBQTtBQUFBO0FBQUEsOHdDQUNoQ0osNkJBRGdDLEVBRTlCQSw2QkFGOEIsRUFLOUJBLDZCQUw4QixFQU03QkEsNkJBTjZCLEVBZVJDLGtDQWZRLEVBb0IvQkQsNkJBcEIrQixFQStCL0JBLDZCQS9CK0IsRUFzREZBLDZCQXRERSxFQTJEZkEsNkJB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VixFQXVWbkJnQixtQkF2Vm1CLEVBNlZuQkEsbUJBN1ZtQixFQXFXbkJBLG1CQXJXbUIsRUF5V2NoQixrQ0F6V2QsRUErV25CZ0IsbUJBL1dtQixFQW1YWWhCLGtDQW5YWixDQUFyQiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2VjdGlvbnMvUHJvamVjdFNjcm9sbFNlY3Rpb24vc3R5bGVzLnNjc3MudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuXG4vLyBDb3JlXG5pbXBvcnQgc3R5bGVkLCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbi8vIENvbnN0YW50c1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL1RoZW1lXCI7XG5pbXBvcnQgeyBSb290IH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50cy9Sb290XCI7XG5pbXBvcnQge1xuICBDc3NGcmFtZVBhZGRpbmdTdHJpbmcsXG4gIENzc0ZyYW1lU2l6ZVdpdGhCb3JkZXJTdHJpbmcsXG59IGZyb20gXCIuLi8uLi9NZWxsb3dGcmFtZUhlYWRlci9zdHlsZXMuc2Nzc1wiO1xuaW1wb3J0IHsgTm9EaXN0b3J0Q2FudmFzQ2xhc3NOYW1lIH0gZnJvbSBcIi4uLy4uLy4uL3BhZ2VzL3Byb2plY3RzL25vLWRpc3RvcnQtd2l0aC1jYW52YXNcIjtcblxuLy8gQmVnaW4gU3R5bGVzXG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG5cbi8qKlxuICpcbiAqIEBuYW1lIFByb2plY3RTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lXG4gKiBAZGVzY3JpcHRpb24gVGhlIHJvb3QgY2xhc3MgbmFtZSBmb3Igc3R5bGluZy4gQkVNIG5hbWluZyBjb252ZW50aW9ucy5cbiAqXG4gKi9cbmV4cG9ydCBjb25zdCBQcm9qZWN0U2Nyb2xsU2VjdGlvbkNsYXNzTmFtZSA9IFwicHJvamVjdC1zY3JvbGxcIjtcbmV4cG9ydCBjb25zdCBQcm9qZWN0U2Nyb2xsU2VjdGlvblRyYW5zaXRpb25UaW1lID0gXCIzc1wiO1xuXG4vKipcbiAqXG4gKiBAbmFtZSBQcm9qZWN0U2Nyb2xsU2VjdGlvblN0eWxlXG4gKiBAYXV0aG9yIFBldGVyIExheGFsdFxuICpcbiAqL1xuZXhwb3J0IGNvbnN0IFByb2plY3RTY3JvbGxTZWN0aW9uU3R5bGUgPSBzdHlsZWQuc2VjdGlvbmBcbiAgJi4ke1Byb2plY3RTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lfSB7XG4gICAgLS0ke1Byb2plY3RTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lfV9fZG90LXNpemU6IC43NXJlbTtcblxuXG4gICAgJi4ke1Byb2plY3RTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lfS0taXMtc2Nyb2xsZWQge1xuICAgICAgLiR7UHJvamVjdFNjcm9sbFNlY3Rpb25DbGFzc05hbWV9X19jb250ZW50LXdyYXBwZXIge1xuICAgICAgICAvLyBMaW5lXG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAlLCA1MCUsIDBweCkgc2NhbGVYKDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRG90XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCUsIC01MCUsIDBweCkgc2NhbGUoMSk7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogJHtQcm9qZWN0U2Nyb2xsU2VjdGlvblRyYW5zaXRpb25UaW1lfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC4ke1Byb2plY3RTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lfV9fc3RpY2t5LXdyYXBwZXIge1xuICAgICAgcG9zaXRpb246IHN0aWNreTtcblxuICAgICAgdG9wOiAwO1xuXG4gICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAuJHtQcm9qZWN0U2Nyb2xsU2VjdGlvbkNsYXNzTmFtZX1fX2NvbnRlbnQtd3JhcHBlciB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIGhlaWdodDogMTAwdmg7XG5cbiAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIHBhZGRpbmctbGVmdDogMTAwdnc7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHZ3O1xuXG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcblxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAgICAgbGVmdDogY2FsYygxMDB2dyAtICh2YXIoLS0ke1Byb2plY3RTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lfV9fZG90LXNpemUpIC8gMikpO1xuICAgICAgICB0b3A6IDUwJTtcblxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAlLCAtNTAlLCAwcHgpIHNjYWxlKDApO1xuXG4gICAgICAgIHdpZHRoOiB2YXIoLS0ke1Byb2plY3RTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lfV9fZG90LXNpemUpO1xuICAgICAgICBoZWlnaHQ6IHZhcigtLSR7UHJvamVjdFNjcm9sbFNlY3Rpb25DbGFzc05hbWV9X19kb3Qtc2l6ZSk7XG5cbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gICAgICAgIGJhY2tncm91bmQ6ICR7VGhlbWUuQ29sb3IudmFyRm9yZWdyb3VuZH07XG5cbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2UtaW4tb3V0O1xuXG4gICAgICB9XG5cbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcblxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDA7XG5cbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgNTAlLCAwcHgpIHNjYWxlWCgxKTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XG5cbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIHdpZHRoOiAxMDB2dztcblxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gJHtQcm9qZWN0U2Nyb2xsU2VjdGlvblRyYW5zaXRpb25UaW1lfSBlYXNlLWluLW91dDtcblxuICAgICAgICAvKiBiYWNrZ3JvdW5kOiAke1RoZW1lLkNvbG9yLnZhckZvcmVncm91bmR9OyAqL1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgdG8gcmlnaHQsXG4gICAgICAgICAgcmdiYSgwLCAwLCAwLCAwKSxcbiAgICAgICAgICByZ2JhKDAsIDAsIDAsIDApIDUwJSxcbiAgICAgICAgICAke1RoZW1lLkNvbG9yLnZhckZvcmVncm91bmR9IDUwJSxcbiAgICAgICAgICAke1RoZW1lLkNvbG9yLnZhckZvcmVncm91bmR9XG4gICAgICAgICk7XG5cbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiA2cHggMTAwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuJHtQcm9qZWN0U2Nyb2xsU2VjdGlvbkNsYXNzTmFtZX1fX2hvcml6b250YWwtd3JhcHBlciB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgfVxuXG4gICAgLiR7UHJvamVjdFNjcm9sbFNlY3Rpb25DbGFzc05hbWV9X194LXRyYW5zbGF0ZS13cmFwcGVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuXG4gICAgICAvKiB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLW91dDsgKi9cbiAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gICAgfVxuXG4gICAgLiR7UHJvamVjdFNjcm9sbFNlY3Rpb25DbGFzc05hbWV9X19vdXRlciB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFByb2plY3RTY3JvbGxTZWN0aW9uR2xvYmFsU3R5bGVzID0gY3JlYXRlR2xvYmFsU3R5bGU8e1xuICBpc1Njcm9sbGVkOiBib29sZWFuO1xufT5gXG4gIC4ke05vRGlzdG9ydENhbnZhc0NsYXNzTmFtZX0ge1xuICAgIHRyYW5zaXRpb246IGZpbHRlciAxcyBlYXNlLCBvcGFjaXR5IDFzIGVhc2U7XG5cbiAgICAkeyhwcm9wcykgPT5cbiAgICAgIHByb3BzLmlzU2Nyb2xsZWRcbiAgICAgICAgPyBgZmlsdGVyOiBibHVyKDUwcHgpOyBvcGFjaXR5OiAwO2BcbiAgICAgICAgOiBgZmlsdGVyOiBibHVyKDBweCk7IG9wYWNpdHk6IDE7YH1cblxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgUHJvamVjdFNjcm9sbEJsdXJPdmVybGF5U3R5bGVzID0gc3R5bGVkLmRpdjx7XG4gIGlzQnJlYWtwb2ludDogYm9vbGVhbjtcbn0+YFxuICB0cmFuc2l0aW9uOiBiYWNrZHJvcC1maWx0ZXIgMC41cyBlYXNlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuXG4gICR7KHByb3BzKSA9PlxuICAgIHByb3BzLmlzQnJlYWtwb2ludFxuICAgICAgPyBgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDUwcHgpIG9wYWNpdHkoMSk7YFxuICAgICAgOiBgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDUwcHgpIG9wYWNpdHkoMCk7YH1cblxuICAmOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG5cbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIuNXMgZWFzZTtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiBvcGFjaXR5IDFzO1xuXG4gICAgYmFja2dyb3VuZDogJHtUaGVtZS5Db2xvci52YXJCYWNrZ3JvdW5kfTtcblxuICAgICR7KHByb3BzKSA9PiAocHJvcHMuaXNCcmVha3BvaW50ID8gYG9wYWNpdHk6IDE7YCA6IGBvcGFjaXR5OiAwO2ApfVxuICB9XG5gO1xuXG4vKipcbiAqXG4gKiBAbmFtZSBTY3JvbGxDYXJkXG4gKiBAZGVzY3JpcHRpb24gVGhlIHJvb3QgY2xhc3MgbmFtZSBmb3Igc3R5bGluZy4gQkVNIG5hbWluZyBjb252ZW50aW9ucy5cbiAqXG4gKi9cbmV4cG9ydCBjb25zdCBTY3JvbGxDYXJkQ2xhc3NOYW1lID0gXCJzY3JvbGwtY2FyZFwiO1xuXG5leHBvcnQgY29uc3QgU2Nyb2xsQ2FyZFN0eWxlID0gc3R5bGVkLmRpdmBcbiAgJi4ke1Njcm9sbENhcmRDbGFzc05hbWV9IHtcbiAgICAtLSR7U2Nyb2xsQ2FyZENsYXNzTmFtZX1fX2NhcmQtc3BhY2luZzogY2FsYygke1Jvb3QuU2l6ZX0gKiAyKTtcblxuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDUwdnc7XG5cbiAgICBwYWRkaW5nOiBjYWxjKCR7Um9vdC5GcmFtZVNpemV9ICsgKCR7Um9vdC5GcmFtZVNpemV9IC8gMikpXG4gICAgICB2YXIoLS0ke1Njcm9sbENhcmRDbGFzc05hbWV9X19jYXJkLXNwYWNpbmcpIGNhbGMoJHtSb290LkZyYW1lU2l6ZX0gLyAyKSB2YXIoLS0ke1Njcm9sbENhcmRDbGFzc05hbWV9X19jYXJkLXNwYWNpbmcpO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cbiAgICBmbGV4LXNocmluazogMDtcblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC8vIEJvcmRlcnNcbiAgICAmOmJlZm9yZSxcbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG5cbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDFweDtcblxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICB0byBib3R0b20sXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMCksXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMCkgNTAlLFxuICAgICAgICAke1RoZW1lLkNvbG9yLnZhckZvcmVncm91bmR9IDUwJSxcbiAgICAgICAgJHtUaGVtZS5Db2xvci52YXJGb3JlZ3JvdW5kfVxuICAgICAgKTtcblxuICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDZweDtcbiAgICB9XG5cbiAgICAmOmJlZm9yZSxcbiAgICAmOmFmdGVyIHtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAke1Byb2plY3RTY3JvbGxTZWN0aW9uVHJhbnNpdGlvblRpbWV9IGVhc2UtaW4tb3V0O1xuICAgICAgdHJhbnNpdGlvbi1kZWxheTogdHJhbnNmb3JtICR7UHJvamVjdFNjcm9sbFNlY3Rpb25UcmFuc2l0aW9uVGltZX0gZWFzZTtcbiAgICB9XG5cbiAgICAvLyBSaWdodCBCb3JkZXJcbiAgICAmOmFmdGVyIHtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgdG9wOiAwO1xuICAgICAgYm90dG9tOiAwO1xuXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG4gICAgfVxuXG4gICAgLy8gQ2VudGVyIEJvcmRlclxuICAgICY6YmVmb3JlIHtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGJvdHRvbTogMDtcblxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTEwMCUpO1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgIC4ke1Njcm9sbENhcmRDbGFzc05hbWV9X19pbm5lciB7XG4gICAgICAgIC8vIEJvcmRlcnNcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG5cbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIHdpZHRoOiAxcHg7XG5cbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgbGVmdDogY2FsYyh2YXIoLS0ke1Njcm9sbENhcmRDbGFzc05hbWV9X19jYXJkLXNwYWNpbmcpICogLTEpO1xuXG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgdG8gYm90dG9tLFxuICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAwKSxcbiAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMCkgNTAlLFxuICAgICAgICAgICAgJHtUaGVtZS5Db2xvci52YXJGb3JlZ3JvdW5kfSA1MCUsXG4gICAgICAgICAgICAke1RoZW1lLkNvbG9yLnZhckZvcmVncm91bmR9XG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSA2cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuJHtTY3JvbGxDYXJkQ2xhc3NOYW1lfV9fYmcge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICB0b3A6IDUwJTtcblxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cbiAgICAgIHdpZHRoOiA0MCU7XG4gICAgICBoZWlnaHQ6IDUwJTtcblxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA1MHB4IDEwMHB4ICR7VGhlbWUuQ29sb3IudmFyU2Vjb25kYXJ5fTtcblxuICAgICAgbWl4LWJsZW5kLW1vZGU6IG11bHRpcGx5O1xuXG4gICAgICBiYWNrZ3JvdW5kOiAke1RoZW1lLkNvbG9yLnZhclNlY29uZGFyeX07XG5cbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG5cbiAgICAuJHtTY3JvbGxDYXJkQ2xhc3NOYW1lfV9fZG90IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwJSwgLTUwJSwgMHB4KSBzY2FsZSgwKTtcblxuICAgICAgd2lkdGg6IHZhcigtLSR7UHJvamVjdFNjcm9sbFNlY3Rpb25DbGFzc05hbWV9X19kb3Qtc2l6ZSk7XG4gICAgICBoZWlnaHQ6IHZhcigtLSR7UHJvamVjdFNjcm9sbFNlY3Rpb25DbGFzc05hbWV9X19kb3Qtc2l6ZSk7XG5cbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuICAgICAgYmFja2dyb3VuZDogJHtUaGVtZS5Db2xvci52YXJGb3JlZ3JvdW5kfTtcblxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2UtaW4tb3V0O1xuICAgICAgdHJhbnNpdGlvbi1kZWxheTogdHJhbnNmb3JtIDEwcyBlYXNlO1xuXG4gICAgICAmLS1yaWdodCB7XG4gICAgICAgIGxlZnQ6IGNhbGMoMTAwJSAtICh2YXIoLS0ke1Byb2plY3RTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lfV9fZG90LXNpemUpIC8gMikpO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuJHtTY3JvbGxDYXJkQ2xhc3NOYW1lfV9faW5uZXIge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHotaW5kZXg6IDI7XG5cbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG5cbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgICAgIHRvcDogY2FsYyg1MCUgLSAoJHtSb290LkZyYW1lU2l6ZX0gLyAyKSk7XG4gICAgICAgIGxlZnQ6IGNhbGModmFyKC0tJHtTY3JvbGxDYXJkQ2xhc3NOYW1lfV9fY2FyZC1zcGFjaW5nKSAqIC0xKTtcblxuICAgICAgICB3aWR0aDogY2FsYygxMDAlICsgKHZhcigtLSR7U2Nyb2xsQ2FyZENsYXNzTmFtZX1fX2NhcmQtc3BhY2luZykgKiAyKSk7XG4gICAgICAgIGhlaWdodDogMXB4O1xuXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCUsIDUwJSwgMHB4KSBzY2FsZVgoMSk7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xuXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAke1Byb2plY3RTY3JvbGxTZWN0aW9uVHJhbnNpdGlvblRpbWV9IGVhc2UtaW4tb3V0O1xuXG4gICAgICAgIC8qIGJhY2tncm91bmQ6ICR7VGhlbWUuQ29sb3IudmFyRm9yZWdyb3VuZH07ICovXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICB0byByaWdodCxcbiAgICAgICAgICByZ2JhKDAsIDAsIDAsIDApLFxuICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMCkgNTAlLFxuICAgICAgICAgICR7VGhlbWUuQ29sb3IudmFyRm9yZWdyb3VuZH0gNTAlLFxuICAgICAgICAgICR7VGhlbWUuQ29sb3IudmFyRm9yZWdyb3VuZH1cbiAgICAgICAgKTtcblxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDZweCAxMDAlO1xuXG4gICAgICB9XG4gICAgfVxuXG4gICAgLiR7U2Nyb2xsQ2FyZENsYXNzTmFtZX1fX3JvdyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAmLS10b3Age1xuICAgICAgICBwYWRkaW5nLXRvcDogY2FsYygke1Jvb3QuRnJhbWVTaXplfSAvIDQpO1xuICAgICAgfVxuXG4gICAgICAmLS1ib3R0b20ge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYygke1Jvb3QuRnJhbWVTaXplfSAvIDIpO1xuXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogXCJcIjtcblxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuXG4gICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBjZW50ZXI7XG5cbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gJHtQcm9qZWN0U2Nyb2xsU2VjdGlvblRyYW5zaXRpb25UaW1lfSBlYXNlO1xuXG4gICAgICAgICAgYmFja2dyb3VuZDogJHtUaGVtZS5Db2xvci52YXJGb3JlZ3JvdW5kfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC4ke1Njcm9sbENhcmRDbGFzc05hbWV9X19jb2wge1xuICAgICAgJl9fY29udGVudC1yb3cge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAgICAgICBtYXJnaW4tdG9wOiAwLjI1ZW07XG5cbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMCUpIHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgb3BhY2l0eTogMDtcblxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gY2FsYygke1Byb2plY3RTY3JvbGxTZWN0aW9uVHJhbnNpdGlvblRpbWV9IC8gMikgZWFzZSwgb3BhY2l0eSBjYWxjKCR7UHJvamVjdFNjcm9sbFNlY3Rpb25UcmFuc2l0aW9uVGltZX0gLyAyKSBlYXNlO1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiB0cmFuc2Zvcm0gY2FsYygke1Byb2plY3RTY3JvbGxTZWN0aW9uVHJhbnNpdGlvblRpbWV9IC8gMiksIG9wYWNpdHkgY2FsYygke1Byb2plY3RTY3JvbGxTZWN0aW9uVHJhbnNpdGlvblRpbWV9IC8gMik7XG5cbiAgICAgICAgJi0tY29udGVudC1tYWpvciB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi0tYm90dG9tLXJpZ2h0IHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLiR7U2Nyb2xsQ2FyZENsYXNzTmFtZX1fX2ltYWdlLXdyYXBwZXIge1xuICAgICAgYmFja2dyb3VuZDogJHtUaGVtZS5Db2xvci52YXJGb3JlZ3JvdW5kfTtcblxuICAgICAgbGluZS1oZWlnaHQ6IDA7XG5cbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgei1pbmRleDogMjtcblxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMnB4ICR7VGhlbWUuQ29sb3IudmFyRm9yZWdyb3VuZH07XG4gICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDFzIGVhc2U7XG5cbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0b3A6IDA7XG5cbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICBiYWNrZ3JvdW5kOiAke1RoZW1lLkNvbG9yLnZhckZvcmVncm91bmR9O1xuXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcblxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcbiAgICAgIH1cblxuICAgICAgJjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0b3A6IDA7XG5cbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICBiYWNrZ3JvdW5kOiAke1RoZW1lLkNvbG9yLnZhckJhY2tncm91bmR9O1xuICAgICAgICBtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7XG5cbiAgICAgICAgei1pbmRleDogMjtcblxuICAgICAgICBvcGFjaXR5OiAxO1xuXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTtcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogdHJhbnNmb3JtIDIuNzVzIGVhc2U7XG4gICAgICB9XG5cbiAgICAgIC4ke1Njcm9sbENhcmRDbGFzc05hbWV9X19pbWFnZSB7XG4gICAgICAgICYtLWZpbHRlcmVkIHtcbiAgICAgICAgICBtaXgtYmxlbmQtbW9kZTogc2NyZWVuO1xuICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKCkgYmx1cigwcHgpO1xuXG4gICAgICAgICAgdHJhbnNpdGlvbjogZmlsdGVyIDFzIGVhc2U7XG4gICAgICAgIH1cblxuICAgICAgICAmLS1ub3JtYWwge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHRvcDogMDtcblxuICAgICAgICAgIG9wYWNpdHk6IDA7XG5cbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIC8qIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDhweCAke1RoZW1lLkNvbG9yLnZhckZvcmVncm91bmR9OyAqL1xuXG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLiR7U2Nyb2xsQ2FyZENsYXNzTmFtZX1fX2ltYWdlLS1maWx0ZXJlZCB7XG4gICAgICAgICAgbWl4LWJsZW5kLW1vZGU6IHNjcmVlbjtcbiAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgpIGJsdXIoMjBweCk7XG4gICAgICAgIH1cblxuICAgICAgICAuJHtTY3JvbGxDYXJkQ2xhc3NOYW1lfV9faW1hZ2UtLW5vcm1hbCB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcblxuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi4ke1Njcm9sbENhcmRDbGFzc05hbWV9LS1pcy12aXNpYmxlIHtcbiAgICAgIC8vIFJpZ2h0IEJvcmRlclxuICAgICAgJjphZnRlciB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG5cbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogdHJhbnNmb3JtICR7UHJvamVjdFNjcm9sbFNlY3Rpb25UcmFuc2l0aW9uVGltZX0gZWFzZTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2VudGVyIEJvcmRlclxuICAgICAgJjpiZWZvcmUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG5cbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogdHJhbnNmb3JtICR7UHJvamVjdFNjcm9sbFNlY3Rpb25UcmFuc2l0aW9uVGltZX0gZWFzZTtcbiAgICAgIH1cblxuICAgICAgLy8gRG90c1xuICAgICAgLiR7U2Nyb2xsQ2FyZENsYXNzTmFtZX1fX2RvdCB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCUsIC01MCUsIDBweCkgc2NhbGUoMSk7XG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IHRyYW5zZm9ybSAxMHMgZWFzZTtcbiAgICAgIH1cblxuICAgICAgLy8gQ29udGVudFxuICAgICAgLiR7U2Nyb2xsQ2FyZENsYXNzTmFtZX1fX2NvbCB7XG4gICAgICAgICZfX2NvbnRlbnQtcm93IHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpIHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFJvdyBCb3R0b21zXG4gICAgICAuJHtTY3JvbGxDYXJkQ2xhc3NOYW1lfV9fcm93IHtcbiAgICAgICAgJi0tYm90dG9tIHtcbiAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IHRyYW5zZm9ybSAke1Byb2plY3RTY3JvbGxTZWN0aW9uVHJhbnNpdGlvblRpbWV9IGVhc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEltYWdlc1xuICAgICAgLiR7U2Nyb2xsQ2FyZENsYXNzTmFtZX1fX2ltYWdlLXdyYXBwZXIge1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcblxuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IHRyYW5zZm9ybSAke1Byb2plY3RTY3JvbGxTZWN0aW9uVHJhbnNpdGlvblRpbWV9IGVhc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Sections/ProjectScrollSection/styles.scss.tsx\n");

/***/ })

})