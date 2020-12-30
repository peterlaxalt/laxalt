webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Sections/ProjectScrollSection/styles.scss.tsx":
/*!******************************************************************!*\
  !*** ./components/Sections/ProjectScrollSection/styles.scss.tsx ***!
  \******************************************************************/
/*! exports provided: ProjectScrollSectionClassName, ProjectScrollSectionTransitionTime, ProjectScrollSectionStyle, ProjectScrollSectionGlobalStyles, ProjectScrollBlurOverlayStyles, ScrollCardClassName, ScrollCardStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectScrollSectionClassName\", function() { return ProjectScrollSectionClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectScrollSectionTransitionTime\", function() { return ProjectScrollSectionTransitionTime; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectScrollSectionStyle\", function() { return ProjectScrollSectionStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectScrollSectionGlobalStyles\", function() { return ProjectScrollSectionGlobalStyles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectScrollBlurOverlayStyles\", function() { return ProjectScrollBlurOverlayStyles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ScrollCardClassName\", function() { return ScrollCardClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ScrollCardStyle\", function() { return ScrollCardStyle; });\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/Theme */ \"./constants/Theme.tsx\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/Root */ \"./constants/Root.tsx\");\n/* harmony import */ var _pages_projects_no_distort_with_canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../pages/projects/no-distort-with-canvas */ \"./pages/projects/no-distort-with-canvas.tsx\");\n\n\nfunction _templateObject() {\n  var data = Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  .\", \" {\\n    transition: filter 1s ease, opacity 1s ease;\\n\\n    \", \"\\n\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n// Imports\n// _________________________________________________________________________\n// Core\n // Constants\n\n\n\n // Begin Styles\n// _________________________________________________________________________\n\n/**\n *\n * @name ProjectScrollSectionClassName\n * @description The root class name for styling. BEM naming conventions.\n *\n */\n\nvar ProjectScrollSectionClassName = \"project-scroll\";\nvar ProjectScrollSectionTransitionTime = \"3s\";\n/**\n *\n * @name ProjectScrollSectionStyle\n * @author Peter Laxalt\n *\n */\n\nvar ProjectScrollSectionStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section.withConfig({\n  displayName: \"stylesscss__ProjectScrollSectionStyle\",\n  componentId: \"sc-897oup-0\"\n})([\"&.\", \"{--\", \"__dot-size:.75rem;&.\", \"--is-scrolled{.\", \"__content-wrapper{&:before{transform:translate3d(0%,50%,0px) scaleX(1);}&:after{transform:translate3d(0%,-50%,0px) scale(1);transition-delay:\", \";}}}.\", \"__sticky-wrapper{position:sticky;top:0;height:100vh;width:100%;overflow-x:hidden;}.\", \"__content-wrapper{position:relative;height:100vh;padding:0;display:flex;overflow:hidden;flex-flow:row nowrap;justify-content:flex-start;align-items:center;padding-left:100vw;padding-right:10vw;&:after{content:\\\"\\\";position:absolute;left:calc(100vw - (var(--\", \"__dot-size) / 2));top:50%;transform:translate3d(0%,-50%,0px) scale(0);width:var(--\", \"__dot-size);height:var(--\", \"__dot-size);border-radius:50%;background:\", \";transition:transform 1s ease-in-out;}&:before{content:\\\"\\\";position:absolute;top:50%;left:0;transform:translate3d(-100%,50%,0px) scaleX(1);transform-origin:left center;height:1px;width:100vw;transition:transform \", \" ease-in-out;background:linear-gradient( to right,rgba(0,0,0,0),rgba(0,0,0,0) 50%,\", \" 50%,\", \" );background-size:6px 100%;}}.\", \"__horizontal-wrapper{position:relative;width:100%;min-height:100vh;}.\", \"__x-translate-wrapper{position:absolute;height:100%;transform-style:preserve-3d;will-change:transform;}.\", \"__outer{position:relative;width:100%;}}\"], ProjectScrollSectionClassName, ProjectScrollSectionClassName, ProjectScrollSectionClassName, ProjectScrollSectionClassName, ProjectScrollSectionTransitionTime, ProjectScrollSectionClassName, ProjectScrollSectionClassName, ProjectScrollSectionClassName, ProjectScrollSectionClassName, ProjectScrollSectionClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, ProjectScrollSectionTransitionTime, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, ProjectScrollSectionClassName, ProjectScrollSectionClassName, ProjectScrollSectionClassName);\nvar ProjectScrollSectionGlobalStyles = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"createGlobalStyle\"])(_templateObject(), _pages_projects_no_distort_with_canvas__WEBPACK_IMPORTED_MODULE_4__[\"NoDistortCanvasClassName\"], function (props) {\n  return props.isScrolled ? \"filter: blur(50px); opacity: 0;\" : \"filter: blur(0px); opacity: 1;\";\n});\nvar ProjectScrollBlurOverlayStyles = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"stylesscss__ProjectScrollBlurOverlayStyles\",\n  componentId: \"sc-897oup-1\"\n})([\"transition:backdrop-filter 0.5s ease;position:fixed;left:0;top:0;width:100vw;height:100vh;\", \" &:before{content:\\\"\\\";position:absolute;left:0;top:0;width:100vw;height:100vh;transition:opacity 2.5s ease;transition-delay:opacity 1s;background:\", \";\", \"}\"], function (props) {\n  return props.isBreakpoint ? \"backdrop-filter: blur(50px) opacity(1);\" : \"backdrop-filter: blur(50px) opacity(0);\";\n}, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varBackground, function (props) {\n  return props.isBreakpoint ? \"opacity: 1;\" : \"opacity: 0;\";\n});\n/**\n *\n * @name ScrollCard\n * @description The root class name for styling. BEM naming conventions.\n *\n */\n\nvar ScrollCardClassName = \"scroll-card\";\nvar ScrollCardStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"stylesscss__ScrollCardStyle\",\n  componentId: \"sc-897oup-2\"\n})([\"&.\", \"{--\", \"__card-spacing:calc(\", \" * 2);height:100vh;width:50vw;padding:calc(\", \" + (\", \" / 2)) var(--\", \"__card-spacing) calc(\", \" / 2) var(--\", \"__card-spacing);display:flex;align-items:flex-end;flex-shrink:0;position:relative;&:before,&:after{content:\\\"\\\";position:absolute;height:100%;width:1px;background:linear-gradient( to bottom,rgba(0,0,0,0),rgba(0,0,0,0) 50%,\", \" 50%,\", \" );background-size:100% 6px;}&:before,&:after{transition:transform \", \" ease-in-out;transition-delay:transform \", \" ease;}&:after{right:0;top:0;bottom:0;transform:translateY(100%);}&:before{left:50%;top:0;bottom:0;transform:translate(-50%,-100%);}img{width:100%;max-width:100%;}&:first-child{.\", \"__inner{&:before{content:\\\"\\\";position:absolute;height:100vh;width:1px;bottom:0;left:calc(var(--\", \"__card-spacing) * -1);background:linear-gradient( to bottom,rgba(0,0,0,0),rgba(0,0,0,0) 50%,\", \" 50%,\", \" );background-size:100% 6px;}}}.\", \"__inner{height:100%;width:100%;position:relative;z-index:2;display:flex;justify-content:space-between;flex-direction:column;&:after{content:'';position:absolute;top:50%;left:0;width:100%;height:1px;background:\", \";}}.\", \"__row{display:flex;justify-content:space-between;&--top{padding-top:calc(\", \" / 4);}&--bottom{padding-bottom:calc(\", \" / 2);position:relative;&:before{content:\\\"\\\";position:absolute;bottom:0;left:0;height:5px;width:100%;transform:scaleX(0);transform-origin:right center;transition:transform \", \" ease;background:\", \";}}}.\", \"__col{&__content-row{display:block;text-transform:uppercase;margin-top:0.25em;transform:translateX(-20%) rotate(0deg);opacity:0;transition:transform calc(\", \" / 2) ease,opacity calc(\", \" / 2) ease;transition-delay:transform calc(\", \" / 2),opacity calc(\", \" / 2);&--content-major{font-size:1.2rem;}}&--bottom-right{text-align:right;}}.\", \"__image-wrapper{background:\", \";line-height:0;position:relative;box-shadow:0px 0px 0px 2px \", \";transition:box-shadow 1s ease;overflow:hidden;&:after{content:\\\"\\\";position:absolute;left:0;top:0;width:100%;height:100%;background:\", \";transform:scaleX(1);transform-origin:left center;transition:transform 1s ease;}&:before{content:\\\"\\\";position:absolute;left:0;top:0;width:100%;height:100%;background:\", \";mix-blend-mode:multiply;z-index:2;opacity:1;transition:opacity 1s ease;transition-delay:transform 2.75s ease;}.\", \"__image{&--filtered{mix-blend-mode:screen;filter:grayscale() blur(0px);transition:filter 1s ease;}&--normal{position:absolute;left:0;top:0;opacity:0;transition:opacity 1s ease;}}&:hover{&:before{opacity:0;}.\", \"__image--filtered{mix-blend-mode:screen;filter:grayscale() blur(20px);}.\", \"__image--normal{opacity:1;transition:opacity 0.5s ease;}}}&.\", \"--is-visible{&:after{transform:translateY(0%);transition-delay:transform \", \" ease;}&:before{transform:translate(-50%,0%);transition-delay:transform \", \" ease;}.\", \"__col{&__content-row{transform:translateX(0%) rotate(0deg);opacity:1;}}.\", \"__row{&--bottom{&:before{transform:scaleX(1);transition-delay:transform \", \" ease;}}}.\", \"__image-wrapper{&:after{transform:scaleX(0);transition-delay:transform \", \" ease;}}}}\"], ScrollCardClassName, ScrollCardClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].Size, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].FrameSize, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].FrameSize, ScrollCardClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].FrameSize, ScrollCardClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, ProjectScrollSectionTransitionTime, ProjectScrollSectionTransitionTime, ScrollCardClassName, ScrollCardClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, ScrollCardClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, ScrollCardClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].FrameSize, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].FrameSize, ProjectScrollSectionTransitionTime, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, ScrollCardClassName, ProjectScrollSectionTransitionTime, ProjectScrollSectionTransitionTime, ProjectScrollSectionTransitionTime, ProjectScrollSectionTransitionTime, ScrollCardClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varBackground, ScrollCardClassName, ScrollCardClassName, ScrollCardClassName, ScrollCardClassName, ProjectScrollSectionTransitionTime, ProjectScrollSectionTransitionTime, ScrollCardClassName, ScrollCardClassName, ProjectScrollSectionTransitionTime, ScrollCardClassName, ProjectScrollSectionTransitionTime);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9ucy9Qcm9qZWN0U2Nyb2xsU2VjdGlvbi9zdHlsZXMuc2Nzcy50c3g/YTk5MiJdLCJuYW1lcyI6WyJQcm9qZWN0U2Nyb2xsU2VjdGlvbkNsYXNzTmFtZSIsIlByb2plY3RTY3JvbGxTZWN0aW9uVHJhbnNpdGlvblRpbWUiLCJQcm9qZWN0U2Nyb2xsU2VjdGlvblN0eWxlIiwic3R5bGVkIiwic2VjdGlvbiIsIlRoZW1lIiwiQ29sb3IiLCJ2YXJGb3JlZ3JvdW5kIiwiUHJvamVjdFNjcm9sbFNlY3Rpb25HbG9iYWxTdHlsZXMiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIk5vRGlzdG9ydENhbnZhc0NsYXNzTmFtZSIsInByb3BzIiwiaXNTY3JvbGxlZCIsIlByb2plY3RTY3JvbGxCbHVyT3ZlcmxheVN0eWxlcyIsImRpdiIsImlzQnJlYWtwb2ludCIsInZhckJhY2tncm91bmQiLCJTY3JvbGxDYXJkQ2xhc3NOYW1lIiwiU2Nyb2xsQ2FyZFN0eWxlIiwiUm9vdCIsIlNpemUiLCJGcmFtZVNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7Q0FHQTs7QUFDQTtBQUNBO0NBT0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsNkJBQTZCLEdBQUcsZ0JBQXRDO0FBQ0EsSUFBTUMsa0NBQWtDLEdBQUcsSUFBM0M7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUMseUJBQXlCLEdBQUdDLHlEQUFNLENBQUNDLE9BQVY7QUFBQTtBQUFBO0FBQUEsOHdDQUNoQ0osNkJBRGdDLEVBRTlCQSw2QkFGOEIsRUFLOUJBLDZCQUw4QixFQU03QkEsNkJBTjZCLEVBZVJDLGtDQWZRLEVBb0IvQkQsNkJBcEIrQixFQStCL0JBLDZCQS9CK0IsRUFzREZBLDZCQXRERSxFQTJEZkEsNkJBM0RlLEVBNERkQSw2QkE1RGMsRUFnRWhCSyxzREFBSyxDQUFDQyxLQUFOLENBQVlDLGFBaEVJLEVBb0ZOTixrQ0FwRk0sRUEyRjFCSSxzREFBSyxDQUFDQyxLQUFOLENBQVlDLGFBM0ZjLEVBNEYxQkYsc0RBQUssQ0FBQ0MsS0FBTixDQUFZQyxhQTVGYyxFQW1HL0JQLDZCQW5HK0IsRUEwRy9CQSw2QkExRytCLEVBcUgvQkEsNkJBckgrQixDQUEvQjtBQTZIQSxJQUFNUSxnQ0FBZ0MsR0FBR0MsMkVBQUgsb0JBR3hDQywrRkFId0MsRUFNdkMsVUFBQ0MsS0FBRDtBQUFBLFNBQ0FBLEtBQUssQ0FBQ0MsVUFBTix1RUFEQTtBQUFBLENBTnVDLENBQXRDO0FBY0EsSUFBTUMsOEJBQThCLEdBQUdWLHlEQUFNLENBQUNXLEdBQVY7QUFBQTtBQUFBO0FBQUEsb1FBVXZDLFVBQUNILEtBQUQ7QUFBQSxTQUNBQSxLQUFLLENBQUNJLFlBQU4sd0ZBREE7QUFBQSxDQVZ1QyxFQTBCekJWLHNEQUFLLENBQUNDLEtBQU4sQ0FBWVUsYUExQmEsRUE0QnJDLFVBQUNMLEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNJLFlBQU4sZ0NBQVo7QUFBQSxDQTVCcUMsQ0FBcEM7QUFnQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLElBQU1FLG1CQUFtQixHQUFHLGFBQTVCO0FBRUEsSUFBTUMsZUFBZSxHQUFHZix5REFBTSxDQUFDVyxHQUFWO0FBQUE7QUFBQTtBQUFBLDhoR0FDdEJHLG1CQURzQixFQUVwQkEsbUJBRm9CLEVBRXVCRSxvREFBSSxDQUFDQyxJQUY1QixFQU9SRCxvREFBSSxDQUFDRSxTQVBHLEVBT2FGLG9EQUFJLENBQUNFLFNBUGxCLEVBUWRKLG1CQVJjLEVBUTZCRSxvREFBSSxDQUFDRSxTQVJsQyxFQVEwREosbUJBUjFELEVBK0JsQlosc0RBQUssQ0FBQ0MsS0FBTixDQUFZQyxhQS9CTSxFQWdDbEJGLHNEQUFLLENBQUNDLEtBQU4sQ0FBWUMsYUFoQ00sRUF3Q0VOLGtDQXhDRixFQXlDUUEsa0NBekNSLEVBb0VuQmdCLG1CQXBFbUIsRUErRUNBLG1CQS9FRCxFQXFGZFosc0RBQUssQ0FBQ0MsS0FBTixDQUFZQyxhQXJGRSxFQXNGZEYsc0RBQUssQ0FBQ0MsS0FBTixDQUFZQyxhQXRGRSxFQThGckJVLG1CQTlGcUIsRUFvSE5aLHNEQUFLLENBQUNDLEtBQU4sQ0FBWUMsYUFwSE4sRUF3SHJCVSxtQkF4SHFCLEVBNkhBRSxvREFBSSxDQUFDRSxTQTdITCxFQWlJR0Ysb0RBQUksQ0FBQ0UsU0FqSVIsRUFtSk1wQixrQ0FuSk4sRUFxSkpJLHNEQUFLLENBQUNDLEtBQU4sQ0FBWUMsYUFySlIsRUEwSnJCVSxtQkExSnFCLEVBb0tTaEIsa0NBcEtULEVBb0t1RUEsa0NBcEt2RSxFQXFLZUEsa0NBcktmLEVBcUt3RUEsa0NBckt4RSxFQWlMckJnQixtQkFqTHFCLEVBa0xSWixzREFBSyxDQUFDQyxLQUFOLENBQVlDLGFBbExKLEVBd0xRRixzREFBSyxDQUFDQyxLQUFOLENBQVlDLGFBeExwQixFQXdNTkYsc0RBQUssQ0FBQ0MsS0FBTixDQUFZQyxhQXhNTixFQTJOTkYsc0RBQUssQ0FBQ0MsS0FBTixDQUFZVSxhQTNOTixFQXNPbkJDLG1CQXRPbUIsRUFnUWpCQSxtQkFoUWlCLEVBcVFqQkEsbUJBclFpQixFQTZRcEJBLG1CQTdRb0IsRUFrUlVoQixrQ0FsUlYsRUF5UlVBLGtDQXpSVixFQTZSbkJnQixtQkE3Um1CLEVBcVNuQkEsbUJBclNtQixFQXlTY2hCLGtDQXpTZCxFQStTbkJnQixtQkEvU21CLEVBbVRZaEIsa0NBblRaLENBQXJCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TZWN0aW9ucy9Qcm9qZWN0U2Nyb2xsU2VjdGlvbi9zdHlsZXMuc2Nzcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG5cbi8vIENvcmVcbmltcG9ydCBzdHlsZWQsIHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuLy8gQ29uc3RhbnRzXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvVGhlbWVcIjtcbmltcG9ydCB7IFJvb3QgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL1Jvb3RcIjtcbmltcG9ydCB7XG4gIENzc0ZyYW1lUGFkZGluZ1N0cmluZyxcbiAgQ3NzRnJhbWVTaXplV2l0aEJvcmRlclN0cmluZyxcbn0gZnJvbSBcIi4uLy4uL01lbGxvd0ZyYW1lSGVhZGVyL3N0eWxlcy5zY3NzXCI7XG5pbXBvcnQgeyBOb0Rpc3RvcnRDYW52YXNDbGFzc05hbWUgfSBmcm9tIFwiLi4vLi4vLi4vcGFnZXMvcHJvamVjdHMvbm8tZGlzdG9ydC13aXRoLWNhbnZhc1wiO1xuXG4vLyBCZWdpbiBTdHlsZXNcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cblxuLyoqXG4gKlxuICogQG5hbWUgUHJvamVjdFNjcm9sbFNlY3Rpb25DbGFzc05hbWVcbiAqIEBkZXNjcmlwdGlvbiBUaGUgcm9vdCBjbGFzcyBuYW1lIGZvciBzdHlsaW5nLiBCRU0gbmFtaW5nIGNvbnZlbnRpb25zLlxuICpcbiAqL1xuZXhwb3J0IGNvbnN0IFByb2plY3RTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lID0gXCJwcm9qZWN0LXNjcm9sbFwiO1xuZXhwb3J0IGNvbnN0IFByb2plY3RTY3JvbGxTZWN0aW9uVHJhbnNpdGlvblRpbWUgPSBcIjNzXCI7XG5cbi8qKlxuICpcbiAqIEBuYW1lIFByb2plY3RTY3JvbGxTZWN0aW9uU3R5bGVcbiAqIEBhdXRob3IgUGV0ZXIgTGF4YWx0XG4gKlxuICovXG5leHBvcnQgY29uc3QgUHJvamVjdFNjcm9sbFNlY3Rpb25TdHlsZSA9IHN0eWxlZC5zZWN0aW9uYFxuICAmLiR7UHJvamVjdFNjcm9sbFNlY3Rpb25DbGFzc05hbWV9IHtcbiAgICAtLSR7UHJvamVjdFNjcm9sbFNlY3Rpb25DbGFzc05hbWV9X19kb3Qtc2l6ZTogLjc1cmVtO1xuXG5cbiAgICAmLiR7UHJvamVjdFNjcm9sbFNlY3Rpb25DbGFzc05hbWV9LS1pcy1zY3JvbGxlZCB7XG4gICAgICAuJHtQcm9qZWN0U2Nyb2xsU2VjdGlvbkNsYXNzTmFtZX1fX2NvbnRlbnQtd3JhcHBlciB7XG4gICAgICAgIC8vIExpbmVcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCUsIDUwJSwgMHB4KSBzY2FsZVgoMSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEb3RcbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwJSwgLTUwJSwgMHB4KSBzY2FsZSgxKTtcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAke1Byb2plY3RTY3JvbGxTZWN0aW9uVHJhbnNpdGlvblRpbWV9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLiR7UHJvamVjdFNjcm9sbFNlY3Rpb25DbGFzc05hbWV9X19zdGlja3ktd3JhcHBlciB7XG4gICAgICBwb3NpdGlvbjogc3RpY2t5O1xuXG4gICAgICB0b3A6IDA7XG5cbiAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIH1cblxuICAgIC4ke1Byb2plY3RTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lfV9fY29udGVudC13cmFwcGVyIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgaGVpZ2h0OiAxMDB2aDtcblxuICAgICAgcGFkZGluZzogMDtcblxuICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgcGFkZGluZy1sZWZ0OiAxMDB2dztcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwdnc7XG5cbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICAgICBsZWZ0OiBjYWxjKDEwMHZ3IC0gKHZhcigtLSR7UHJvamVjdFNjcm9sbFNlY3Rpb25DbGFzc05hbWV9X19kb3Qtc2l6ZSkgLyAyKSk7XG4gICAgICAgIHRvcDogNTAlO1xuXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCUsIC01MCUsIDBweCkgc2NhbGUoMCk7XG5cbiAgICAgICAgd2lkdGg6IHZhcigtLSR7UHJvamVjdFNjcm9sbFNlY3Rpb25DbGFzc05hbWV9X19kb3Qtc2l6ZSk7XG4gICAgICAgIGhlaWdodDogdmFyKC0tJHtQcm9qZWN0U2Nyb2xsU2VjdGlvbkNsYXNzTmFtZX1fX2RvdC1zaXplKTtcblxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgICAgICAgYmFja2dyb3VuZDogJHtUaGVtZS5Db2xvci52YXJGb3JlZ3JvdW5kfTtcblxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZS1pbi1vdXQ7XG5cbiAgICAgIH1cblxuICAgICAgJjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogMDtcblxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCA1MCUsIDBweCkgc2NhbGVYKDEpO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcblxuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xuXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAke1Byb2plY3RTY3JvbGxTZWN0aW9uVHJhbnNpdGlvblRpbWV9IGVhc2UtaW4tb3V0O1xuXG4gICAgICAgIC8qIGJhY2tncm91bmQ6ICR7VGhlbWUuQ29sb3IudmFyRm9yZWdyb3VuZH07ICovXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICB0byByaWdodCxcbiAgICAgICAgICByZ2JhKDAsIDAsIDAsIDApLFxuICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMCkgNTAlLFxuICAgICAgICAgICR7VGhlbWUuQ29sb3IudmFyRm9yZWdyb3VuZH0gNTAlLFxuICAgICAgICAgICR7VGhlbWUuQ29sb3IudmFyRm9yZWdyb3VuZH1cbiAgICAgICAgKTtcblxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDZweCAxMDAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC4ke1Byb2plY3RTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lfV9faG9yaXpvbnRhbC13cmFwcGVyIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICB9XG5cbiAgICAuJHtQcm9qZWN0U2Nyb2xsU2VjdGlvbkNsYXNzTmFtZX1fX3gtdHJhbnNsYXRlLXdyYXBwZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG5cbiAgICAgIC8qIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2Utb3V0OyAqL1xuICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgICB9XG5cbiAgICAuJHtQcm9qZWN0U2Nyb2xsU2VjdGlvbkNsYXNzTmFtZX1fX291dGVyIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgUHJvamVjdFNjcm9sbFNlY3Rpb25HbG9iYWxTdHlsZXMgPSBjcmVhdGVHbG9iYWxTdHlsZTx7XG4gIGlzU2Nyb2xsZWQ6IGJvb2xlYW47XG59PmBcbiAgLiR7Tm9EaXN0b3J0Q2FudmFzQ2xhc3NOYW1lfSB7XG4gICAgdHJhbnNpdGlvbjogZmlsdGVyIDFzIGVhc2UsIG9wYWNpdHkgMXMgZWFzZTtcblxuICAgICR7KHByb3BzKSA9PlxuICAgICAgcHJvcHMuaXNTY3JvbGxlZFxuICAgICAgICA/IGBmaWx0ZXI6IGJsdXIoNTBweCk7IG9wYWNpdHk6IDA7YFxuICAgICAgICA6IGBmaWx0ZXI6IGJsdXIoMHB4KTsgb3BhY2l0eTogMTtgfVxuXG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0U2Nyb2xsQmx1ck92ZXJsYXlTdHlsZXMgPSBzdHlsZWQuZGl2PHtcbiAgaXNCcmVha3BvaW50OiBib29sZWFuO1xufT5gXG4gIHRyYW5zaXRpb246IGJhY2tkcm9wLWZpbHRlciAwLjVzIGVhc2U7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG5cbiAgJHsocHJvcHMpID0+XG4gICAgcHJvcHMuaXNCcmVha3BvaW50XG4gICAgICA/IGBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNTBweCkgb3BhY2l0eSgxKTtgXG4gICAgICA6IGBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNTBweCkgb3BhY2l0eSgwKTtgfVxuXG4gICY6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcblxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMi41cyBlYXNlO1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IG9wYWNpdHkgMXM7XG5cbiAgICBiYWNrZ3JvdW5kOiAke1RoZW1lLkNvbG9yLnZhckJhY2tncm91bmR9O1xuXG4gICAgJHsocHJvcHMpID0+IChwcm9wcy5pc0JyZWFrcG9pbnQgPyBgb3BhY2l0eTogMTtgIDogYG9wYWNpdHk6IDA7YCl9XG4gIH1cbmA7XG5cbi8qKlxuICpcbiAqIEBuYW1lIFNjcm9sbENhcmRcbiAqIEBkZXNjcmlwdGlvbiBUaGUgcm9vdCBjbGFzcyBuYW1lIGZvciBzdHlsaW5nLiBCRU0gbmFtaW5nIGNvbnZlbnRpb25zLlxuICpcbiAqL1xuZXhwb3J0IGNvbnN0IFNjcm9sbENhcmRDbGFzc05hbWUgPSBcInNjcm9sbC1jYXJkXCI7XG5cbmV4cG9ydCBjb25zdCBTY3JvbGxDYXJkU3R5bGUgPSBzdHlsZWQuZGl2YFxuICAmLiR7U2Nyb2xsQ2FyZENsYXNzTmFtZX0ge1xuICAgIC0tJHtTY3JvbGxDYXJkQ2xhc3NOYW1lfV9fY2FyZC1zcGFjaW5nOiBjYWxjKCR7Um9vdC5TaXplfSAqIDIpO1xuXG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogNTB2dztcblxuICAgIHBhZGRpbmc6IGNhbGMoJHtSb290LkZyYW1lU2l6ZX0gKyAoJHtSb290LkZyYW1lU2l6ZX0gLyAyKSlcbiAgICAgIHZhcigtLSR7U2Nyb2xsQ2FyZENsYXNzTmFtZX1fX2NhcmQtc3BhY2luZykgY2FsYygke1Jvb3QuRnJhbWVTaXplfSAvIDIpIHZhcigtLSR7U2Nyb2xsQ2FyZENsYXNzTmFtZX1fX2NhcmQtc3BhY2luZyk7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblxuICAgIGZsZXgtc2hyaW5rOiAwO1xuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLy8gQm9yZGVyc1xuICAgICY6YmVmb3JlLFxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcblxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMXB4O1xuXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgIHRvIGJvdHRvbSxcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwKSxcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwKSA1MCUsXG4gICAgICAgICR7VGhlbWUuQ29sb3IudmFyRm9yZWdyb3VuZH0gNTAlLFxuICAgICAgICAke1RoZW1lLkNvbG9yLnZhckZvcmVncm91bmR9XG4gICAgICApO1xuXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgNnB4O1xuICAgIH1cblxuICAgICY6YmVmb3JlLFxuICAgICY6YWZ0ZXIge1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtICR7UHJvamVjdFNjcm9sbFNlY3Rpb25UcmFuc2l0aW9uVGltZX0gZWFzZS1pbi1vdXQ7XG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiB0cmFuc2Zvcm0gJHtQcm9qZWN0U2Nyb2xsU2VjdGlvblRyYW5zaXRpb25UaW1lfSBlYXNlO1xuICAgIH1cblxuICAgIC8vIFJpZ2h0IEJvcmRlclxuICAgICY6YWZ0ZXIge1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB0b3A6IDA7XG4gICAgICBib3R0b206IDA7XG5cbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbiAgICB9XG5cbiAgICAvLyBDZW50ZXIgQm9yZGVyXG4gICAgJjpiZWZvcmUge1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdG9wOiAwO1xuICAgICAgYm90dG9tOiAwO1xuXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMTAwJSk7XG4gICAgfVxuXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgLiR7U2Nyb2xsQ2FyZENsYXNzTmFtZX1fX2lubmVyIHtcbiAgICAgICAgLy8gQm9yZGVyc1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogXCJcIjtcblxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgd2lkdGg6IDFweDtcblxuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBsZWZ0OiBjYWxjKHZhcigtLSR7U2Nyb2xsQ2FyZENsYXNzTmFtZX1fX2NhcmQtc3BhY2luZykgKiAtMSk7XG5cbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICB0byBib3R0b20sXG4gICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDApLFxuICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAwKSA1MCUsXG4gICAgICAgICAgICAke1RoZW1lLkNvbG9yLnZhckZvcmVncm91bmR9IDUwJSxcbiAgICAgICAgICAgICR7VGhlbWUuQ29sb3IudmFyRm9yZWdyb3VuZH1cbiAgICAgICAgICApO1xuXG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDZweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC4ke1Njcm9sbENhcmRDbGFzc05hbWV9X19pbm5lciB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgei1pbmRleDogMjtcblxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcblxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDA7XG5cbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMXB4O1xuXG4gICAgICAgIGJhY2tncm91bmQ6ICR7VGhlbWUuQ29sb3IudmFyRm9yZWdyb3VuZH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLiR7U2Nyb2xsQ2FyZENsYXNzTmFtZX1fX3JvdyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAmLS10b3Age1xuICAgICAgICBwYWRkaW5nLXRvcDogY2FsYygke1Jvb3QuRnJhbWVTaXplfSAvIDQpO1xuICAgICAgfVxuXG4gICAgICAmLS1ib3R0b20ge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYygke1Jvb3QuRnJhbWVTaXplfSAvIDIpO1xuXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogXCJcIjtcblxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuXG4gICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBjZW50ZXI7XG5cbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gJHtQcm9qZWN0U2Nyb2xsU2VjdGlvblRyYW5zaXRpb25UaW1lfSBlYXNlO1xuXG4gICAgICAgICAgYmFja2dyb3VuZDogJHtUaGVtZS5Db2xvci52YXJGb3JlZ3JvdW5kfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC4ke1Njcm9sbENhcmRDbGFzc05hbWV9X19jb2wge1xuICAgICAgJl9fY29udGVudC1yb3cge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAgICAgICBtYXJnaW4tdG9wOiAwLjI1ZW07XG5cbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMCUpIHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgb3BhY2l0eTogMDtcblxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gY2FsYygke1Byb2plY3RTY3JvbGxTZWN0aW9uVHJhbnNpdGlvblRpbWV9IC8gMikgZWFzZSwgb3BhY2l0eSBjYWxjKCR7UHJvamVjdFNjcm9sbFNlY3Rpb25UcmFuc2l0aW9uVGltZX0gLyAyKSBlYXNlO1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiB0cmFuc2Zvcm0gY2FsYygke1Byb2plY3RTY3JvbGxTZWN0aW9uVHJhbnNpdGlvblRpbWV9IC8gMiksIG9wYWNpdHkgY2FsYygke1Byb2plY3RTY3JvbGxTZWN0aW9uVHJhbnNpdGlvblRpbWV9IC8gMik7XG5cbiAgICAgICAgJi0tY29udGVudC1tYWpvciB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi0tYm90dG9tLXJpZ2h0IHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLiR7U2Nyb2xsQ2FyZENsYXNzTmFtZX1fX2ltYWdlLXdyYXBwZXIge1xuICAgICAgYmFja2dyb3VuZDogJHtUaGVtZS5Db2xvci52YXJGb3JlZ3JvdW5kfTtcblxuICAgICAgbGluZS1oZWlnaHQ6IDA7XG5cbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMnB4ICR7VGhlbWUuQ29sb3IudmFyRm9yZWdyb3VuZH07XG4gICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDFzIGVhc2U7XG5cbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0b3A6IDA7XG5cbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICBiYWNrZ3JvdW5kOiAke1RoZW1lLkNvbG9yLnZhckZvcmVncm91bmR9O1xuXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcblxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcbiAgICAgIH1cblxuICAgICAgJjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0b3A6IDA7XG5cbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICBiYWNrZ3JvdW5kOiAke1RoZW1lLkNvbG9yLnZhckJhY2tncm91bmR9O1xuICAgICAgICBtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7XG5cbiAgICAgICAgei1pbmRleDogMjtcblxuICAgICAgICBvcGFjaXR5OiAxO1xuXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTtcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogdHJhbnNmb3JtIDIuNzVzIGVhc2U7XG4gICAgICB9XG5cbiAgICAgIC4ke1Njcm9sbENhcmRDbGFzc05hbWV9X19pbWFnZSB7XG4gICAgICAgICYtLWZpbHRlcmVkIHtcbiAgICAgICAgICBtaXgtYmxlbmQtbW9kZTogc2NyZWVuO1xuICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKCkgYmx1cigwcHgpO1xuXG4gICAgICAgICAgdHJhbnNpdGlvbjogZmlsdGVyIDFzIGVhc2U7XG4gICAgICAgIH1cblxuICAgICAgICAmLS1ub3JtYWwge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHRvcDogMDtcblxuICAgICAgICAgIG9wYWNpdHk6IDA7XG5cbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIC8qIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDhweCAke1RoZW1lLkNvbG9yLnZhckZvcmVncm91bmR9OyAqL1xuXG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLiR7U2Nyb2xsQ2FyZENsYXNzTmFtZX1fX2ltYWdlLS1maWx0ZXJlZCB7XG4gICAgICAgICAgbWl4LWJsZW5kLW1vZGU6IHNjcmVlbjtcbiAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgpIGJsdXIoMjBweCk7XG4gICAgICAgIH1cblxuICAgICAgICAuJHtTY3JvbGxDYXJkQ2xhc3NOYW1lfV9faW1hZ2UtLW5vcm1hbCB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcblxuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi4ke1Njcm9sbENhcmRDbGFzc05hbWV9LS1pcy12aXNpYmxlIHtcbiAgICAgIC8vIFJpZ2h0IEJvcmRlclxuICAgICAgJjphZnRlciB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG5cbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogdHJhbnNmb3JtICR7UHJvamVjdFNjcm9sbFNlY3Rpb25UcmFuc2l0aW9uVGltZX0gZWFzZTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2VudGVyIEJvcmRlclxuICAgICAgJjpiZWZvcmUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG5cbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogdHJhbnNmb3JtICR7UHJvamVjdFNjcm9sbFNlY3Rpb25UcmFuc2l0aW9uVGltZX0gZWFzZTtcbiAgICAgIH1cblxuICAgICAgLy8gQ29udGVudFxuICAgICAgLiR7U2Nyb2xsQ2FyZENsYXNzTmFtZX1fX2NvbCB7XG4gICAgICAgICZfX2NvbnRlbnQtcm93IHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpIHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFJvdyBCb3R0b21zXG4gICAgICAuJHtTY3JvbGxDYXJkQ2xhc3NOYW1lfV9fcm93IHtcbiAgICAgICAgJi0tYm90dG9tIHtcbiAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IHRyYW5zZm9ybSAke1Byb2plY3RTY3JvbGxTZWN0aW9uVHJhbnNpdGlvblRpbWV9IGVhc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEltYWdlc1xuICAgICAgLiR7U2Nyb2xsQ2FyZENsYXNzTmFtZX1fX2ltYWdlLXdyYXBwZXIge1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcblxuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IHRyYW5zZm9ybSAke1Byb2plY3RTY3JvbGxTZWN0aW9uVHJhbnNpdGlvblRpbWV9IGVhc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Sections/ProjectScrollSection/styles.scss.tsx\n");

/***/ })

})