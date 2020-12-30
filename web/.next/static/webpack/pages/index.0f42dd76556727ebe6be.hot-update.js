webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Sections/ProjectScrollSection/styles.scss.tsx":
/*!******************************************************************!*\
  !*** ./components/Sections/ProjectScrollSection/styles.scss.tsx ***!
  \******************************************************************/
/*! exports provided: ProjectScrollSectionClassName, ProjectScrollSectionTransitionTime, ProjectScrollSectionStyle, ProjectScrollSectionGlobalStyles, ProjectScrollBlurOverlayStyles, ScrollCardClassName, ScrollCardStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectScrollSectionClassName\", function() { return ProjectScrollSectionClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectScrollSectionTransitionTime\", function() { return ProjectScrollSectionTransitionTime; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectScrollSectionStyle\", function() { return ProjectScrollSectionStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectScrollSectionGlobalStyles\", function() { return ProjectScrollSectionGlobalStyles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectScrollBlurOverlayStyles\", function() { return ProjectScrollBlurOverlayStyles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ScrollCardClassName\", function() { return ScrollCardClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ScrollCardStyle\", function() { return ScrollCardStyle; });\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/Theme */ \"./constants/Theme.tsx\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/Root */ \"./constants/Root.tsx\");\n/* harmony import */ var _pages_projects_no_distort_with_canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../pages/projects/no-distort-with-canvas */ \"./pages/projects/no-distort-with-canvas.tsx\");\n\n\nfunction _templateObject() {\n  var data = Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  .\", \" {\\n    transition: filter 1s ease, opacity 1s ease;\\n\\n    \", \"\\n\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n// Imports\n// _________________________________________________________________________\n// Core\n // Constants\n\n\n\n // Begin Styles\n// _________________________________________________________________________\n\n/**\n *\n * @name ProjectScrollSectionClassName\n * @description The root class name for styling. BEM naming conventions.\n *\n */\n\nvar ProjectScrollSectionClassName = \"project-scroll\";\nvar ProjectScrollSectionTransitionTime = \"3s\";\n/**\n *\n * @name ProjectScrollSectionStyle\n * @author Peter Laxalt\n *\n */\n\nvar ProjectScrollSectionStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section.withConfig({\n  displayName: \"stylesscss__ProjectScrollSectionStyle\",\n  componentId: \"sc-897oup-0\"\n})([\"&.\", \"{--\", \"__dot-size:.75rem;&.\", \"--is-scrolled{.\", \"__content-wrapper{&:before{transform:translate3d(0%,50%,0px) scaleX(1);}&:after{transform:translate3d(0%,-50%,0px) scale(1);transition-delay:\", \";}}}.\", \"__sticky-wrapper{position:sticky;top:0;height:100vh;width:100%;overflow-x:hidden;}.\", \"__content-wrapper{position:relative;height:100vh;padding:0;display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:center;padding-left:100vw;padding-right:10vw;&:after{content:\\\"\\\";position:absolute;left:calc(100vw - (var(--\", \"__dot-size) / 2));top:50%;transform:translate3d(0%,-50%,0px) scale(0);width:var(--\", \"__dot-size);height:var(--\", \"__dot-size);border-radius:50%;background:\", \";transition:transform 1s ease-in-out;}&:before{content:\\\"\\\";position:absolute;top:50%;left:0;transform:translate3d(-100%,50%,0px) scaleX(1);transform-origin:left center;height:1px;width:100vw;transition:transform \", \" ease-in-out;background:linear-gradient( to right,rgba(0,0,0,0),rgba(0,0,0,0) 50%,\", \" 50%,\", \" );background-size:6px 100%;}}.\", \"__horizontal-wrapper{position:relative;width:100%;min-height:100vh;}.\", \"__x-translate-wrapper{position:absolute;height:100%;transform-style:preserve-3d;will-change:transform;}.\", \"__outer{position:relative;width:100%;}}\"], ProjectScrollSectionClassName, ProjectScrollSectionClassName, ProjectScrollSectionClassName, ProjectScrollSectionClassName, ProjectScrollSectionTransitionTime, ProjectScrollSectionClassName, ProjectScrollSectionClassName, ProjectScrollSectionClassName, ProjectScrollSectionClassName, ProjectScrollSectionClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, ProjectScrollSectionTransitionTime, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, ProjectScrollSectionClassName, ProjectScrollSectionClassName, ProjectScrollSectionClassName);\nvar ProjectScrollSectionGlobalStyles = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"createGlobalStyle\"])(_templateObject(), _pages_projects_no_distort_with_canvas__WEBPACK_IMPORTED_MODULE_4__[\"NoDistortCanvasClassName\"], function (props) {\n  return props.isScrolled ? \"filter: blur(50px); opacity: 0;\" : \"filter: blur(0px); opacity: 1;\";\n});\nvar ProjectScrollBlurOverlayStyles = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"stylesscss__ProjectScrollBlurOverlayStyles\",\n  componentId: \"sc-897oup-1\"\n})([\"transition:backdrop-filter 0.5s ease;position:fixed;left:0;top:0;width:100vw;height:100vh;\", \" &:before{content:\\\"\\\";position:absolute;left:0;top:0;width:100vw;height:100vh;transition:opacity 2.5s ease;transition-delay:opacity 1s;background:\", \";\", \"}\"], function (props) {\n  return props.isBreakpoint ? \"backdrop-filter: blur(50px) opacity(1);\" : \"backdrop-filter: blur(50px) opacity(0);\";\n}, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varBackground, function (props) {\n  return props.isBreakpoint ? \"opacity: 1;\" : \"opacity: 0;\";\n});\n/**\n *\n * @name ScrollCard\n * @description The root class name for styling. BEM naming conventions.\n *\n */\n\nvar ScrollCardClassName = \"scroll-card\";\nvar ScrollCardStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"stylesscss__ScrollCardStyle\",\n  componentId: \"sc-897oup-2\"\n})([\"&.\", \"{height:100vh;width:50vw;padding:calc(\", \" + (\", \" / 2)) calc(\", \" * 2) calc(\", \" / 2) calc(\", \" * 2);display:flex;align-items:flex-end;flex-shrink:0;position:relative;&:before,&:after{content:\\\"\\\";position:absolute;height:100%;width:1px;background:linear-gradient( to bottom,rgba(0,0,0,0),rgba(0,0,0,0) 50%,\", \" 50%,\", \" );background-size:100% 6px;}&:before,&:after{transition:transform \", \" ease-in-out;}&:after{right:0;top:0;bottom:0;transform:translateX(100%);}&:before{left:50%;top:0;bottom:0;transform:translateX(-100%);}img{width:100%;max-width:100%;}&:first-child{.\", \"__inner{&:before{content:\\\"\\\";position:absolute;height:100vh;width:1px;bottom:0;left:calc(\", \" * -2);background:linear-gradient( to bottom,rgba(0,0,0,0),rgba(0,0,0,0) 50%,\", \" 50%,\", \" );background-size:100% 6px;}}}.\", \"__inner{height:100%;width:100%;position:relative;z-index:2;display:flex;justify-content:space-between;flex-direction:column;}.\", \"__row{display:flex;justify-content:space-between;&--top{padding-top:calc(\", \" / 4);}&--bottom{padding-bottom:calc(\", \" / 2);position:relative;&:before{content:\\\"\\\";position:absolute;bottom:0;left:0;height:5px;width:100%;background:\", \";}}}.\", \"__col{&__content-row{display:block;text-transform:uppercase;margin-top:0.25em;&--content-major{font-size:1.2rem;}}&--bottom-right{text-align:right;}}.\", \"__image-wrapper{background:\", \";line-height:0;position:relative;box-shadow:0px 0px 0px 2px \", \";transition:box-shadow 1s ease;overflow:hidden;&:after{content:\\\"\\\";position:absolute;left:0;top:0;width:100%;height:100%;background:\", \";transform:scaleX(1);transform-origin:left center;transition:transform 1s ease;}&:before{content:\\\"\\\";position:absolute;left:0;top:0;width:100%;height:100%;background:\", \";mix-blend-mode:multiply;z-index:2;opacity:1;transition:opacity 1s ease;transition-delay:transform 2.75s ease;}.\", \"__image{&--filtered{mix-blend-mode:screen;filter:grayscale() blur(0px);transition:filter 1s ease;}&--normal{position:absolute;left:0;top:0;opacity:0;transition:opacity 1s ease;}}&:hover{&:before{opacity:0;}.\", \"__image--filtered{mix-blend-mode:screen;filter:grayscale() blur(20px);}.\", \"__image--normal{opacity:1;transition:opacity 0.5s ease;}}}&.\", \"--is-visible{&:after{transform:translateX(0%);}&:before{transform:translateX(-50%);}.\", \"__image-wrapper{&:after{transform:scaleX(0);transition-delay:transform 2.75s ease;}}}}\"], ScrollCardClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].FrameSize, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].FrameSize, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].Size, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].FrameSize, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].Size, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, ProjectScrollSectionTransitionTime, ScrollCardClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].Size, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, ScrollCardClassName, ScrollCardClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].FrameSize, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].FrameSize, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, ScrollCardClassName, ScrollCardClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varBackground, ScrollCardClassName, ScrollCardClassName, ScrollCardClassName, ScrollCardClassName, ScrollCardClassName);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9ucy9Qcm9qZWN0U2Nyb2xsU2VjdGlvbi9zdHlsZXMuc2Nzcy50c3g/YTk5MiJdLCJuYW1lcyI6WyJQcm9qZWN0U2Nyb2xsU2VjdGlvbkNsYXNzTmFtZSIsIlByb2plY3RTY3JvbGxTZWN0aW9uVHJhbnNpdGlvblRpbWUiLCJQcm9qZWN0U2Nyb2xsU2VjdGlvblN0eWxlIiwic3R5bGVkIiwic2VjdGlvbiIsIlRoZW1lIiwiQ29sb3IiLCJ2YXJGb3JlZ3JvdW5kIiwiUHJvamVjdFNjcm9sbFNlY3Rpb25HbG9iYWxTdHlsZXMiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIk5vRGlzdG9ydENhbnZhc0NsYXNzTmFtZSIsInByb3BzIiwiaXNTY3JvbGxlZCIsIlByb2plY3RTY3JvbGxCbHVyT3ZlcmxheVN0eWxlcyIsImRpdiIsImlzQnJlYWtwb2ludCIsInZhckJhY2tncm91bmQiLCJTY3JvbGxDYXJkQ2xhc3NOYW1lIiwiU2Nyb2xsQ2FyZFN0eWxlIiwiUm9vdCIsIkZyYW1lU2l6ZSIsIlNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7Q0FHQTs7QUFDQTtBQUNBO0NBT0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsNkJBQTZCLEdBQUcsZ0JBQXRDO0FBQ0EsSUFBTUMsa0NBQWtDLEdBQUcsSUFBM0M7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUMseUJBQXlCLEdBQUdDLHlEQUFNLENBQUNDLE9BQVY7QUFBQTtBQUFBO0FBQUEsOHZDQUNoQ0osNkJBRGdDLEVBRTlCQSw2QkFGOEIsRUFLOUJBLDZCQUw4QixFQU03QkEsNkJBTjZCLEVBZVJDLGtDQWZRLEVBb0IvQkQsNkJBcEIrQixFQStCL0JBLDZCQS9CK0IsRUFvREZBLDZCQXBERSxFQXlEZkEsNkJBekRlLEVBMERkQSw2QkExRGMsRUE4RGhCSyxzREFBSyxDQUFDQyxLQUFOLENBQVlDLGFBOURJLEVBa0ZOTixrQ0FsRk0sRUF5RjFCSSxzREFBSyxDQUFDQyxLQUFOLENBQVlDLGFBekZjLEVBMEYxQkYsc0RBQUssQ0FBQ0MsS0FBTixDQUFZQyxhQTFGYyxFQWlHL0JQLDZCQWpHK0IsRUF3Ry9CQSw2QkF4RytCLEVBbUgvQkEsNkJBbkgrQixDQUEvQjtBQTJIQSxJQUFNUSxnQ0FBZ0MsR0FBR0MsMkVBQUgsb0JBR3hDQywrRkFId0MsRUFNdkMsVUFBQ0MsS0FBRDtBQUFBLFNBQ0FBLEtBQUssQ0FBQ0MsVUFBTix1RUFEQTtBQUFBLENBTnVDLENBQXRDO0FBY0EsSUFBTUMsOEJBQThCLEdBQUdWLHlEQUFNLENBQUNXLEdBQVY7QUFBQTtBQUFBO0FBQUEsb1FBVXZDLFVBQUNILEtBQUQ7QUFBQSxTQUNBQSxLQUFLLENBQUNJLFlBQU4sd0ZBREE7QUFBQSxDQVZ1QyxFQTBCekJWLHNEQUFLLENBQUNDLEtBQU4sQ0FBWVUsYUExQmEsRUE0QnJDLFVBQUNMLEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNJLFlBQU4sZ0NBQVo7QUFBQSxDQTVCcUMsQ0FBcEM7QUFnQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLElBQU1FLG1CQUFtQixHQUFHLGFBQTVCO0FBRUEsSUFBTUMsZUFBZSxHQUFHZix5REFBTSxDQUFDVyxHQUFWO0FBQUE7QUFBQTtBQUFBLGkxRUFDdEJHLG1CQURzQixFQUtSRSxvREFBSSxDQUFDQyxTQUxHLEVBS2FELG9EQUFJLENBQUNDLFNBTGxCLEVBTWZELG9EQUFJLENBQUNFLElBTlUsRUFNUUYsb0RBQUksQ0FBQ0MsU0FOYixFQU1vQ0Qsb0RBQUksQ0FBQ0UsSUFOekMsRUE2QmxCaEIsc0RBQUssQ0FBQ0MsS0FBTixDQUFZQyxhQTdCTSxFQThCbEJGLHNEQUFLLENBQUNDLEtBQU4sQ0FBWUMsYUE5Qk0sRUFzQ0VOLGtDQXRDRixFQWlFbkJnQixtQkFqRW1CLEVBNEVMRSxvREFBSSxDQUFDRSxJQTVFQSxFQWtGZGhCLHNEQUFLLENBQUNDLEtBQU4sQ0FBWUMsYUFsRkUsRUFtRmRGLHNEQUFLLENBQUNDLEtBQU4sQ0FBWUMsYUFuRkUsRUEyRnJCVSxtQkEzRnFCLEVBdUdyQkEsbUJBdkdxQixFQTRHQUUsb0RBQUksQ0FBQ0MsU0E1R0wsRUFnSEdELG9EQUFJLENBQUNDLFNBaEhSLEVBK0hKZixzREFBSyxDQUFDQyxLQUFOLENBQVlDLGFBL0hSLEVBb0lyQlUsbUJBcElxQixFQXFKckJBLG1CQXJKcUIsRUFzSlJaLHNEQUFLLENBQUNDLEtBQU4sQ0FBWUMsYUF0SkosRUE0SlFGLHNEQUFLLENBQUNDLEtBQU4sQ0FBWUMsYUE1SnBCLEVBNEtORixzREFBSyxDQUFDQyxLQUFOLENBQVlDLGFBNUtOLEVBK0xORixzREFBSyxDQUFDQyxLQUFOLENBQVlVLGFBL0xOLEVBME1uQkMsbUJBMU1tQixFQW9PakJBLG1CQXBPaUIsRUF5T2pCQSxtQkF6T2lCLEVBaVBwQkEsbUJBalBvQixFQTRQbkJBLG1CQTVQbUIsQ0FBckIiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlY3Rpb25zL1Byb2plY3RTY3JvbGxTZWN0aW9uL3N0eWxlcy5zY3NzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cblxuLy8gQ29yZVxuaW1wb3J0IHN0eWxlZCwgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG4vLyBDb25zdGFudHNcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50cy9UaGVtZVwiO1xuaW1wb3J0IHsgUm9vdCB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvUm9vdFwiO1xuaW1wb3J0IHtcbiAgQ3NzRnJhbWVQYWRkaW5nU3RyaW5nLFxuICBDc3NGcmFtZVNpemVXaXRoQm9yZGVyU3RyaW5nLFxufSBmcm9tIFwiLi4vLi4vTWVsbG93RnJhbWVIZWFkZXIvc3R5bGVzLnNjc3NcIjtcbmltcG9ydCB7IE5vRGlzdG9ydENhbnZhc0NsYXNzTmFtZSB9IGZyb20gXCIuLi8uLi8uLi9wYWdlcy9wcm9qZWN0cy9uby1kaXN0b3J0LXdpdGgtY2FudmFzXCI7XG5cbi8vIEJlZ2luIFN0eWxlc1xuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuXG4vKipcbiAqXG4gKiBAbmFtZSBQcm9qZWN0U2Nyb2xsU2VjdGlvbkNsYXNzTmFtZVxuICogQGRlc2NyaXB0aW9uIFRoZSByb290IGNsYXNzIG5hbWUgZm9yIHN0eWxpbmcuIEJFTSBuYW1pbmcgY29udmVudGlvbnMuXG4gKlxuICovXG5leHBvcnQgY29uc3QgUHJvamVjdFNjcm9sbFNlY3Rpb25DbGFzc05hbWUgPSBcInByb2plY3Qtc2Nyb2xsXCI7XG5leHBvcnQgY29uc3QgUHJvamVjdFNjcm9sbFNlY3Rpb25UcmFuc2l0aW9uVGltZSA9IFwiM3NcIjtcblxuLyoqXG4gKlxuICogQG5hbWUgUHJvamVjdFNjcm9sbFNlY3Rpb25TdHlsZVxuICogQGF1dGhvciBQZXRlciBMYXhhbHRcbiAqXG4gKi9cbmV4cG9ydCBjb25zdCBQcm9qZWN0U2Nyb2xsU2VjdGlvblN0eWxlID0gc3R5bGVkLnNlY3Rpb25gXG4gICYuJHtQcm9qZWN0U2Nyb2xsU2VjdGlvbkNsYXNzTmFtZX0ge1xuICAgIC0tJHtQcm9qZWN0U2Nyb2xsU2VjdGlvbkNsYXNzTmFtZX1fX2RvdC1zaXplOiAuNzVyZW07XG5cblxuICAgICYuJHtQcm9qZWN0U2Nyb2xsU2VjdGlvbkNsYXNzTmFtZX0tLWlzLXNjcm9sbGVkIHtcbiAgICAgIC4ke1Byb2plY3RTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lfV9fY29udGVudC13cmFwcGVyIHtcbiAgICAgICAgLy8gTGluZVxuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwJSwgNTAlLCAwcHgpIHNjYWxlWCgxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERvdFxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAlLCAtNTAlLCAwcHgpIHNjYWxlKDEpO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6ICR7UHJvamVjdFNjcm9sbFNlY3Rpb25UcmFuc2l0aW9uVGltZX07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuJHtQcm9qZWN0U2Nyb2xsU2VjdGlvbkNsYXNzTmFtZX1fX3N0aWNreS13cmFwcGVyIHtcbiAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG5cbiAgICAgIHRvcDogMDtcblxuICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgfVxuXG4gICAgLiR7UHJvamVjdFNjcm9sbFNlY3Rpb25DbGFzc05hbWV9X19jb250ZW50LXdyYXBwZXIge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICBoZWlnaHQ6IDEwMHZoO1xuXG4gICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwMHZ3O1xuICAgICAgcGFkZGluZy1yaWdodDogMTB2dztcblxuICAgICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG5cbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgICAgIGxlZnQ6IGNhbGMoMTAwdncgLSAodmFyKC0tJHtQcm9qZWN0U2Nyb2xsU2VjdGlvbkNsYXNzTmFtZX1fX2RvdC1zaXplKSAvIDIpKTtcbiAgICAgICAgdG9wOiA1MCU7XG5cbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwJSwgLTUwJSwgMHB4KSBzY2FsZSgwKTtcblxuICAgICAgICB3aWR0aDogdmFyKC0tJHtQcm9qZWN0U2Nyb2xsU2VjdGlvbkNsYXNzTmFtZX1fX2RvdC1zaXplKTtcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS0ke1Byb2plY3RTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lfV9fZG90LXNpemUpO1xuXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuICAgICAgICBiYWNrZ3JvdW5kOiAke1RoZW1lLkNvbG9yLnZhckZvcmVncm91bmR9O1xuXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlLWluLW91dDtcblxuICAgICAgfVxuXG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG5cbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiAwO1xuXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDUwJSwgMHB4KSBzY2FsZVgoMSk7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xuXG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICB3aWR0aDogMTAwdnc7XG5cbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtICR7UHJvamVjdFNjcm9sbFNlY3Rpb25UcmFuc2l0aW9uVGltZX0gZWFzZS1pbi1vdXQ7XG5cbiAgICAgICAgLyogYmFja2dyb3VuZDogJHtUaGVtZS5Db2xvci52YXJGb3JlZ3JvdW5kfTsgKi9cbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgIHRvIHJpZ2h0LFxuICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMCksXG4gICAgICAgICAgcmdiYSgwLCAwLCAwLCAwKSA1MCUsXG4gICAgICAgICAgJHtUaGVtZS5Db2xvci52YXJGb3JlZ3JvdW5kfSA1MCUsXG4gICAgICAgICAgJHtUaGVtZS5Db2xvci52YXJGb3JlZ3JvdW5kfVxuICAgICAgICApO1xuXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogNnB4IDEwMCU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLiR7UHJvamVjdFNjcm9sbFNlY3Rpb25DbGFzc05hbWV9X19ob3Jpem9udGFsLXdyYXBwZXIge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIH1cblxuICAgIC4ke1Byb2plY3RTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lfV9feC10cmFuc2xhdGUtd3JhcHBlciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcblxuICAgICAgLyogdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQ7ICovXG4gICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICAgIH1cblxuICAgIC4ke1Byb2plY3RTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lfV9fb3V0ZXIge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0U2Nyb2xsU2VjdGlvbkdsb2JhbFN0eWxlcyA9IGNyZWF0ZUdsb2JhbFN0eWxlPHtcbiAgaXNTY3JvbGxlZDogYm9vbGVhbjtcbn0+YFxuICAuJHtOb0Rpc3RvcnRDYW52YXNDbGFzc05hbWV9IHtcbiAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMXMgZWFzZSwgb3BhY2l0eSAxcyBlYXNlO1xuXG4gICAgJHsocHJvcHMpID0+XG4gICAgICBwcm9wcy5pc1Njcm9sbGVkXG4gICAgICAgID8gYGZpbHRlcjogYmx1cig1MHB4KTsgb3BhY2l0eTogMDtgXG4gICAgICAgIDogYGZpbHRlcjogYmx1cigwcHgpOyBvcGFjaXR5OiAxO2B9XG5cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFByb2plY3RTY3JvbGxCbHVyT3ZlcmxheVN0eWxlcyA9IHN0eWxlZC5kaXY8e1xuICBpc0JyZWFrcG9pbnQ6IGJvb2xlYW47XG59PmBcbiAgdHJhbnNpdGlvbjogYmFja2Ryb3AtZmlsdGVyIDAuNXMgZWFzZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcblxuICAkeyhwcm9wcykgPT5cbiAgICBwcm9wcy5pc0JyZWFrcG9pbnRcbiAgICAgID8gYGJhY2tkcm9wLWZpbHRlcjogYmx1cig1MHB4KSBvcGFjaXR5KDEpO2BcbiAgICAgIDogYGJhY2tkcm9wLWZpbHRlcjogYmx1cig1MHB4KSBvcGFjaXR5KDApO2B9XG5cbiAgJjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyLjVzIGVhc2U7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogb3BhY2l0eSAxcztcblxuICAgIGJhY2tncm91bmQ6ICR7VGhlbWUuQ29sb3IudmFyQmFja2dyb3VuZH07XG5cbiAgICAkeyhwcm9wcykgPT4gKHByb3BzLmlzQnJlYWtwb2ludCA/IGBvcGFjaXR5OiAxO2AgOiBgb3BhY2l0eTogMDtgKX1cbiAgfVxuYDtcblxuLyoqXG4gKlxuICogQG5hbWUgU2Nyb2xsQ2FyZFxuICogQGRlc2NyaXB0aW9uIFRoZSByb290IGNsYXNzIG5hbWUgZm9yIHN0eWxpbmcuIEJFTSBuYW1pbmcgY29udmVudGlvbnMuXG4gKlxuICovXG5leHBvcnQgY29uc3QgU2Nyb2xsQ2FyZENsYXNzTmFtZSA9IFwic2Nyb2xsLWNhcmRcIjtcblxuZXhwb3J0IGNvbnN0IFNjcm9sbENhcmRTdHlsZSA9IHN0eWxlZC5kaXZgXG4gICYuJHtTY3JvbGxDYXJkQ2xhc3NOYW1lfSB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogNTB2dztcblxuICAgIHBhZGRpbmc6IGNhbGMoJHtSb290LkZyYW1lU2l6ZX0gKyAoJHtSb290LkZyYW1lU2l6ZX0gLyAyKSlcbiAgICAgIGNhbGMoJHtSb290LlNpemV9ICogMikgY2FsYygke1Jvb3QuRnJhbWVTaXplfSAvIDIpIGNhbGMoJHtSb290LlNpemV9ICogMik7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblxuICAgIGZsZXgtc2hyaW5rOiAwO1xuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLy8gQm9yZGVyc1xuICAgICY6YmVmb3JlLFxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcblxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMXB4O1xuXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgIHRvIGJvdHRvbSxcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwKSxcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwKSA1MCUsXG4gICAgICAgICR7VGhlbWUuQ29sb3IudmFyRm9yZWdyb3VuZH0gNTAlLFxuICAgICAgICAke1RoZW1lLkNvbG9yLnZhckZvcmVncm91bmR9XG4gICAgICApO1xuXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgNnB4O1xuICAgIH1cblxuICAgICY6YmVmb3JlLFxuICAgICY6YWZ0ZXIge1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtICR7UHJvamVjdFNjcm9sbFNlY3Rpb25UcmFuc2l0aW9uVGltZX0gZWFzZS1pbi1vdXQ7XG4gICAgfVxuXG4gICAgLy8gUmlnaHQgQm9yZGVyXG4gICAgJjphZnRlciB7XG4gICAgICByaWdodDogMDtcbiAgICAgIHRvcDogMDtcbiAgICAgIGJvdHRvbTogMDtcblxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIH1cblxuICAgIC8vIENlbnRlciBCb3JkZXJcbiAgICAmOmJlZm9yZSB7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICB0b3A6IDA7XG4gICAgICBib3R0b206IDA7XG5cbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgfVxuXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgLiR7U2Nyb2xsQ2FyZENsYXNzTmFtZX1fX2lubmVyIHtcbiAgICAgICAgLy8gQm9yZGVyc1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogXCJcIjtcblxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgd2lkdGg6IDFweDtcblxuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBsZWZ0OiBjYWxjKCR7Um9vdC5TaXplfSAqIC0yKTtcblxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgIHRvIGJvdHRvbSxcbiAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMCksXG4gICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDApIDUwJSxcbiAgICAgICAgICAgICR7VGhlbWUuQ29sb3IudmFyRm9yZWdyb3VuZH0gNTAlLFxuICAgICAgICAgICAgJHtUaGVtZS5Db2xvci52YXJGb3JlZ3JvdW5kfVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgNnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLiR7U2Nyb2xsQ2FyZENsYXNzTmFtZX1fX2lubmVyIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB6LWluZGV4OiAyO1xuXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAuJHtTY3JvbGxDYXJkQ2xhc3NOYW1lfV9fcm93IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICYtLXRvcCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiBjYWxjKCR7Um9vdC5GcmFtZVNpemV9IC8gNCk7XG4gICAgICB9XG5cbiAgICAgICYtLWJvdHRvbSB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKCR7Um9vdC5GcmFtZVNpemV9IC8gMik7XG5cbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG5cbiAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgIGJhY2tncm91bmQ6ICR7VGhlbWUuQ29sb3IudmFyRm9yZWdyb3VuZH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuJHtTY3JvbGxDYXJkQ2xhc3NOYW1lfV9fY29sIHtcbiAgICAgICZfX2NvbnRlbnQtcm93IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICAgICAgbWFyZ2luLXRvcDogMC4yNWVtO1xuXG4gICAgICAgICYtLWNvbnRlbnQtbWFqb3Ige1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYtLWJvdHRvbS1yaWdodCB7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC4ke1Njcm9sbENhcmRDbGFzc05hbWV9X19pbWFnZS13cmFwcGVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICR7VGhlbWUuQ29sb3IudmFyRm9yZWdyb3VuZH07XG5cbiAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDJweCAke1RoZW1lLkNvbG9yLnZhckZvcmVncm91bmR9O1xuICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAxcyBlYXNlO1xuXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcblxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiAwO1xuXG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgYmFja2dyb3VuZDogJHtUaGVtZS5Db2xvci52YXJGb3JlZ3JvdW5kfTtcblxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XG5cbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XG4gICAgICB9XG5cbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcblxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiAwO1xuXG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgYmFja2dyb3VuZDogJHtUaGVtZS5Db2xvci52YXJCYWNrZ3JvdW5kfTtcbiAgICAgICAgbWl4LWJsZW5kLW1vZGU6IG11bHRpcGx5O1xuXG4gICAgICAgIHotaW5kZXg6IDI7XG5cbiAgICAgICAgb3BhY2l0eTogMTtcblxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IHRyYW5zZm9ybSAyLjc1cyBlYXNlO1xuICAgICAgfVxuXG4gICAgICAuJHtTY3JvbGxDYXJkQ2xhc3NOYW1lfV9faW1hZ2Uge1xuICAgICAgICAmLS1maWx0ZXJlZCB7XG4gICAgICAgICAgbWl4LWJsZW5kLW1vZGU6IHNjcmVlbjtcbiAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgpIGJsdXIoMHB4KTtcblxuICAgICAgICAgIHRyYW5zaXRpb246IGZpbHRlciAxcyBlYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgJi0tbm9ybWFsIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB0b3A6IDA7XG5cbiAgICAgICAgICBvcGFjaXR5OiAwO1xuXG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICAvKiBib3gtc2hhZG93OiAwcHggMHB4IDBweCA4cHggJHtUaGVtZS5Db2xvci52YXJGb3JlZ3JvdW5kfTsgKi9cblxuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC4ke1Njcm9sbENhcmRDbGFzc05hbWV9X19pbWFnZS0tZmlsdGVyZWQge1xuICAgICAgICAgIG1peC1ibGVuZC1tb2RlOiBzY3JlZW47XG4gICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoKSBibHVyKDIwcHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLiR7U2Nyb2xsQ2FyZENsYXNzTmFtZX1fX2ltYWdlLS1ub3JtYWwge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG5cbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICYuJHtTY3JvbGxDYXJkQ2xhc3NOYW1lfS0taXMtdmlzaWJsZSB7XG4gICAgICAvLyBSaWdodCBCb3JkZXJcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgICAgfVxuXG4gICAgICAvLyBDZW50ZXIgQm9yZGVyXG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgIH1cblxuICAgICAgLiR7U2Nyb2xsQ2FyZENsYXNzTmFtZX1fX2ltYWdlLXdyYXBwZXIge1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcblxuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IHRyYW5zZm9ybSAyLjc1cyBlYXNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Sections/ProjectScrollSection/styles.scss.tsx\n");

/***/ })

})