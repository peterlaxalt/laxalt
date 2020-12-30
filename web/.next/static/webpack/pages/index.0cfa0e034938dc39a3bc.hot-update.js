webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Sections/ProjectScrollSection/styles.scss.tsx":
/*!******************************************************************!*\
  !*** ./components/Sections/ProjectScrollSection/styles.scss.tsx ***!
  \******************************************************************/
/*! exports provided: ProjectScrollSectionClassName, ProjectScrollSectionStyle, ProjectScrollSectionGlobalStyles, ProjectScrollBlurOverlayStyles, ScrollCardClassName, ScrollCardStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectScrollSectionClassName\", function() { return ProjectScrollSectionClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectScrollSectionStyle\", function() { return ProjectScrollSectionStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectScrollSectionGlobalStyles\", function() { return ProjectScrollSectionGlobalStyles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectScrollBlurOverlayStyles\", function() { return ProjectScrollBlurOverlayStyles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ScrollCardClassName\", function() { return ScrollCardClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ScrollCardStyle\", function() { return ScrollCardStyle; });\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/Theme */ \"./constants/Theme.tsx\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/Root */ \"./constants/Root.tsx\");\n/* harmony import */ var _pages_projects_no_distort_with_canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../pages/projects/no-distort-with-canvas */ \"./pages/projects/no-distort-with-canvas.tsx\");\n\n\nfunction _templateObject() {\n  var data = Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  .\", \" {\\n    transition: filter 1s ease, opacity 1s ease;\\n\\n    \", \"\\n\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n// Imports\n// _________________________________________________________________________\n// Core\n // Constants\n\n\n\n // Begin Styles\n// _________________________________________________________________________\n\n/**\n *\n * @name ProjectScrollSectionClassName\n * @description The root class name for styling. BEM naming conventions.\n *\n */\n\nvar ProjectScrollSectionClassName = \"project-scroll\";\n/**\n *\n * @name ProjectScrollSectionStyle\n * @author Peter Laxalt\n *\n */\n\nvar ProjectScrollSectionStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section.withConfig({\n  displayName: \"stylesscss__ProjectScrollSectionStyle\",\n  componentId: \"sc-897oup-0\"\n})([\"&.\", \"{&.\", \"--is-scrolled{.\", \"__content-wrapper{&:before{}}}.\", \"__sticky-wrapper{position:sticky;top:0;height:100vh;width:100%;overflow-x:hidden;}.\", \"__content-wrapper{position:relative;height:100vh;padding:0;display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:center;padding-left:100vw;padding-right:10vw;&:before{content:\\\"\\\";position:absolute;top:50%;left:0;transform:translate3d(0px,50%,0px) scaleX(0);transform-origin:left center;height:1px;width:100%;transition:transform 3s ease;background:\", \";}}.\", \"__horizontal-wrapper{position:relative;width:100%;min-height:100vh;}.\", \"__x-translate-wrapper{position:absolute;height:100%;transform-style:preserve-3d;will-change:transform;}.\", \"__outer{position:relative;width:100%;}}\"], ProjectScrollSectionClassName, ProjectScrollSectionClassName, ProjectScrollSectionClassName, ProjectScrollSectionClassName, ProjectScrollSectionClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, ProjectScrollSectionClassName, ProjectScrollSectionClassName, ProjectScrollSectionClassName);\nvar ProjectScrollSectionGlobalStyles = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"createGlobalStyle\"])(_templateObject(), _pages_projects_no_distort_with_canvas__WEBPACK_IMPORTED_MODULE_4__[\"NoDistortCanvasClassName\"], function (props) {\n  return props.isScrolled ? \"filter: blur(50px); opacity: 0;\" : \"filter: blur(0px); opacity: 1;\";\n});\nvar ProjectScrollBlurOverlayStyles = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"stylesscss__ProjectScrollBlurOverlayStyles\",\n  componentId: \"sc-897oup-1\"\n})([\"transition:backdrop-filter 1s;position:fixed;left:0;top:0;width:100vw;height:100vh;\", \" &:before{content:\\\"\\\";position:absolute;left:0;top:0;width:100vw;height:100vh;background:\", \";\", \"}\"], function (props) {\n  return props.isBreakpoint ? \"backdrop-filter: blur(50px) opacity(1);\" : \"backdrop-filter: blur(50px) opacity(0);\";\n}, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.Background, function (props) {\n  return props.isBreakpoint ? \"opacity: 1;\" : \"opacity: 0;\";\n});\n/**\n *\n * @name ScrollCard\n * @description The root class name for styling. BEM naming conventions.\n *\n */\n\nvar ScrollCardClassName = \"scroll-card\";\nvar ScrollCardStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"stylesscss__ScrollCardStyle\",\n  componentId: \"sc-897oup-2\"\n})([\"&.\", \"{height:100vh;width:50vw;padding:calc(\", \" + (\", \" / 2)) calc(\", \" * 2) calc(\", \" / 2) calc(\", \" * 2);display:flex;align-items:flex-end;flex-shrink:0;position:relative;&:before,&:after{content:\\\"\\\";position:absolute;height:100%;width:1px;background:linear-gradient( to bottom,rgba(0,0,0,0),rgba(0,0,0,0) 50%,\", \" 50%,\", \" );background-size:100% 6px;}&:after{right:0;top:0;bottom:0;}&:before{left:50%;top:0;bottom:0;transform:translateX(-50%);}img{width:100%;max-width:100%;}&:first-child{.\", \"__inner{&:before{content:\\\"\\\";position:absolute;height:100vh;width:1px;bottom:0;left:calc(\", \" * -2);background:linear-gradient( to bottom,rgba(0,0,0,0),rgba(0,0,0,0) 50%,\", \" 50%,\", \" );background-size:100% 6px;}}}.\", \"__inner{height:100%;width:100%;position:relative;z-index:2;display:flex;justify-content:space-between;flex-direction:column;}.\", \"__row{display:flex;justify-content:space-between;&--top{padding-top:calc(\", \" / 4);}&--bottom{padding-bottom:calc(\", \" / 2);position:relative;&:before{content:\\\"\\\";position:absolute;bottom:0;left:0;height:5px;width:100%;background:\", \";}}}.\", \"__col{&__content-row{display:block;text-transform:uppercase;margin-top:0.25em;&--content-major{font-size:1.2rem;}}&--bottom-right{text-align:right;}}.\", \"__image-wrapper{background:\", \";line-height:0;position:relative;box-shadow:0px 0px 0px 2px \", \";transition:box-shadow 1s ease;overflow:hidden;&:after{content:\\\"\\\";position:absolute;left:0;top:0;width:100%;height:100%;background:\", \";transform:scaleX(1);transform-origin:left center;transition:transform 1s ease;}&:before{content:\\\"\\\";position:absolute;left:0;top:0;width:100%;height:100%;background:\", \";mix-blend-mode:multiply;z-index:2;opacity:1;transition:opacity 1s ease;transition-delay:transform 2.75s ease;}.\", \"__image{&--filtered{mix-blend-mode:screen;filter:grayscale() blur(0px);transition:filter 1s ease;}&--normal{position:absolute;left:0;top:0;opacity:0;transition:opacity 1s ease;}}&:hover{&:before{opacity:0;}.\", \"__image--filtered{mix-blend-mode:screen;filter:grayscale() blur(20px);}.\", \"__image--normal{opacity:1;transition:opacity 0.5s ease;}}}&.\", \"--is-visible{.\", \"__image-wrapper{&:after{transform:scaleX(0);transition-delay:transform 2.75s ease;}}}}\"], ScrollCardClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].FrameSize, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].FrameSize, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].Size, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].FrameSize, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].Size, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, ScrollCardClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].Size, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, ScrollCardClassName, ScrollCardClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].FrameSize, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].FrameSize, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, ScrollCardClassName, ScrollCardClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varBackground, ScrollCardClassName, ScrollCardClassName, ScrollCardClassName, ScrollCardClassName, ScrollCardClassName);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9ucy9Qcm9qZWN0U2Nyb2xsU2VjdGlvbi9zdHlsZXMuc2Nzcy50c3g/YTk5MiJdLCJuYW1lcyI6WyJQcm9qZWN0U2Nyb2xsU2VjdGlvbkNsYXNzTmFtZSIsIlByb2plY3RTY3JvbGxTZWN0aW9uU3R5bGUiLCJzdHlsZWQiLCJzZWN0aW9uIiwiVGhlbWUiLCJDb2xvciIsInZhckZvcmVncm91bmQiLCJQcm9qZWN0U2Nyb2xsU2VjdGlvbkdsb2JhbFN0eWxlcyIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiTm9EaXN0b3J0Q2FudmFzQ2xhc3NOYW1lIiwicHJvcHMiLCJpc1Njcm9sbGVkIiwiUHJvamVjdFNjcm9sbEJsdXJPdmVybGF5U3R5bGVzIiwiZGl2IiwiaXNCcmVha3BvaW50IiwiQmFja2dyb3VuZCIsIlNjcm9sbENhcmRDbGFzc05hbWUiLCJTY3JvbGxDYXJkU3R5bGUiLCJSb290IiwiRnJhbWVTaXplIiwiU2l6ZSIsInZhckJhY2tncm91bmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtDQUdBOztBQUNBO0FBQ0E7Q0FPQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQSw2QkFBNkIsR0FBRyxnQkFBdEM7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUMseUJBQXlCLEdBQUdDLHlEQUFNLENBQUNDLE9BQVY7QUFBQTtBQUFBO0FBQUEsMnZCQUNoQ0gsNkJBRGdDLEVBRTlCQSw2QkFGOEIsRUFHN0JBLDZCQUg2QixFQVUvQkEsNkJBVitCLEVBcUIvQkEsNkJBckIrQixFQXFEaEJJLHNEQUFLLENBQUNDLEtBQU4sQ0FBWUMsYUFyREksRUF5RC9CTiw2QkF6RCtCLEVBZ0UvQkEsNkJBaEUrQixFQTJFL0JBLDZCQTNFK0IsQ0FBL0I7QUFtRkEsSUFBTU8sZ0NBQWdDLEdBQUdDLDJFQUFILG9CQUd4Q0MsK0ZBSHdDLEVBTXZDLFVBQUNDLEtBQUQ7QUFBQSxTQUNBQSxLQUFLLENBQUNDLFVBQU4sdUVBREE7QUFBQSxDQU51QyxDQUF0QztBQWNBLElBQU1DLDhCQUE4QixHQUFHVix5REFBTSxDQUFDVyxHQUFWO0FBQUE7QUFBQTtBQUFBLG9NQVV2QyxVQUFDSCxLQUFEO0FBQUEsU0FDQUEsS0FBSyxDQUFDSSxZQUFOLHdGQURBO0FBQUEsQ0FWdUMsRUF1QnpCVixzREFBSyxDQUFDQyxLQUFOLENBQVlVLFVBdkJhLEVBeUJyQyxVQUFDTCxLQUFEO0FBQUEsU0FBWUEsS0FBSyxDQUFDSSxZQUFOLGdDQUFaO0FBQUEsQ0F6QnFDLENBQXBDO0FBNkJQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNRSxtQkFBbUIsR0FBRyxhQUE1QjtBQUVBLElBQU1DLGVBQWUsR0FBR2YseURBQU0sQ0FBQ1csR0FBVjtBQUFBO0FBQUE7QUFBQSxzckVBQ3RCRyxtQkFEc0IsRUFLUkUsb0RBQUksQ0FBQ0MsU0FMRyxFQUthRCxvREFBSSxDQUFDQyxTQUxsQixFQU1mRCxvREFBSSxDQUFDRSxJQU5VLEVBTVFGLG9EQUFJLENBQUNDLFNBTmIsRUFNb0NELG9EQUFJLENBQUNFLElBTnpDLEVBNkJsQmhCLHNEQUFLLENBQUNDLEtBQU4sQ0FBWUMsYUE3Qk0sRUE4QmxCRixzREFBSyxDQUFDQyxLQUFOLENBQVlDLGFBOUJNLEVBMERuQlUsbUJBMURtQixFQXFFTEUsb0RBQUksQ0FBQ0UsSUFyRUEsRUEyRWRoQixzREFBSyxDQUFDQyxLQUFOLENBQVlDLGFBM0VFLEVBNEVkRixzREFBSyxDQUFDQyxLQUFOLENBQVlDLGFBNUVFLEVBb0ZyQlUsbUJBcEZxQixFQWdHckJBLG1CQWhHcUIsRUFxR0FFLG9EQUFJLENBQUNDLFNBckdMLEVBeUdHRCxvREFBSSxDQUFDQyxTQXpHUixFQXdISmYsc0RBQUssQ0FBQ0MsS0FBTixDQUFZQyxhQXhIUixFQTZIckJVLG1CQTdIcUIsRUE4SXJCQSxtQkE5SXFCLEVBK0lSWixzREFBSyxDQUFDQyxLQUFOLENBQVlDLGFBL0lKLEVBcUpRRixzREFBSyxDQUFDQyxLQUFOLENBQVlDLGFBckpwQixFQXFLTkYsc0RBQUssQ0FBQ0MsS0FBTixDQUFZQyxhQXJLTixFQXdMTkYsc0RBQUssQ0FBQ0MsS0FBTixDQUFZZ0IsYUF4TE4sRUFtTW5CTCxtQkFuTW1CLEVBNk5qQkEsbUJBN05pQixFQWtPakJBLG1CQWxPaUIsRUEwT3BCQSxtQkExT29CLEVBMk9uQkEsbUJBM09tQixDQUFyQiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2VjdGlvbnMvUHJvamVjdFNjcm9sbFNlY3Rpb24vc3R5bGVzLnNjc3MudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuXG4vLyBDb3JlXG5pbXBvcnQgc3R5bGVkLCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbi8vIENvbnN0YW50c1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL1RoZW1lXCI7XG5pbXBvcnQgeyBSb290IH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50cy9Sb290XCI7XG5pbXBvcnQge1xuICBDc3NGcmFtZVBhZGRpbmdTdHJpbmcsXG4gIENzc0ZyYW1lU2l6ZVdpdGhCb3JkZXJTdHJpbmcsXG59IGZyb20gXCIuLi8uLi9NZWxsb3dGcmFtZUhlYWRlci9zdHlsZXMuc2Nzc1wiO1xuaW1wb3J0IHsgTm9EaXN0b3J0Q2FudmFzQ2xhc3NOYW1lIH0gZnJvbSBcIi4uLy4uLy4uL3BhZ2VzL3Byb2plY3RzL25vLWRpc3RvcnQtd2l0aC1jYW52YXNcIjtcblxuLy8gQmVnaW4gU3R5bGVzXG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG5cbi8qKlxuICpcbiAqIEBuYW1lIFByb2plY3RTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lXG4gKiBAZGVzY3JpcHRpb24gVGhlIHJvb3QgY2xhc3MgbmFtZSBmb3Igc3R5bGluZy4gQkVNIG5hbWluZyBjb252ZW50aW9ucy5cbiAqXG4gKi9cbmV4cG9ydCBjb25zdCBQcm9qZWN0U2Nyb2xsU2VjdGlvbkNsYXNzTmFtZSA9IFwicHJvamVjdC1zY3JvbGxcIjtcblxuLyoqXG4gKlxuICogQG5hbWUgUHJvamVjdFNjcm9sbFNlY3Rpb25TdHlsZVxuICogQGF1dGhvciBQZXRlciBMYXhhbHRcbiAqXG4gKi9cbmV4cG9ydCBjb25zdCBQcm9qZWN0U2Nyb2xsU2VjdGlvblN0eWxlID0gc3R5bGVkLnNlY3Rpb25gXG4gICYuJHtQcm9qZWN0U2Nyb2xsU2VjdGlvbkNsYXNzTmFtZX0ge1xuICAgICYuJHtQcm9qZWN0U2Nyb2xsU2VjdGlvbkNsYXNzTmFtZX0tLWlzLXNjcm9sbGVkIHtcbiAgICAgIC4ke1Byb2plY3RTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lfV9fY29udGVudC13cmFwcGVyIHtcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCA1MCUsIDBweCkgc2NhbGVYKDEpOyAqL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLiR7UHJvamVjdFNjcm9sbFNlY3Rpb25DbGFzc05hbWV9X19zdGlja3ktd3JhcHBlciB7XG4gICAgICBwb3NpdGlvbjogc3RpY2t5O1xuXG4gICAgICB0b3A6IDA7XG5cbiAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIH1cblxuICAgIC4ke1Byb2plY3RTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lfV9fY29udGVudC13cmFwcGVyIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgaGVpZ2h0OiAxMDB2aDtcblxuICAgICAgcGFkZGluZzogMDtcblxuICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgcGFkZGluZy1sZWZ0OiAxMDB2dztcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwdnc7XG5cbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcblxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDA7XG5cbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDUwJSwgMHB4KSBzY2FsZVgoMCk7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xuXG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gM3MgZWFzZTtcblxuICAgICAgICBiYWNrZ3JvdW5kOiAke1RoZW1lLkNvbG9yLnZhckZvcmVncm91bmR9O1xuICAgICAgfVxuICAgIH1cblxuICAgIC4ke1Byb2plY3RTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lfV9faG9yaXpvbnRhbC13cmFwcGVyIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICB9XG5cbiAgICAuJHtQcm9qZWN0U2Nyb2xsU2VjdGlvbkNsYXNzTmFtZX1fX3gtdHJhbnNsYXRlLXdyYXBwZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG5cbiAgICAgIC8qIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2Utb3V0OyAqL1xuICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgICB9XG5cbiAgICAuJHtQcm9qZWN0U2Nyb2xsU2VjdGlvbkNsYXNzTmFtZX1fX291dGVyIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgUHJvamVjdFNjcm9sbFNlY3Rpb25HbG9iYWxTdHlsZXMgPSBjcmVhdGVHbG9iYWxTdHlsZTx7XG4gIGlzU2Nyb2xsZWQ6IGJvb2xlYW47XG59PmBcbiAgLiR7Tm9EaXN0b3J0Q2FudmFzQ2xhc3NOYW1lfSB7XG4gICAgdHJhbnNpdGlvbjogZmlsdGVyIDFzIGVhc2UsIG9wYWNpdHkgMXMgZWFzZTtcblxuICAgICR7KHByb3BzKSA9PlxuICAgICAgcHJvcHMuaXNTY3JvbGxlZFxuICAgICAgICA/IGBmaWx0ZXI6IGJsdXIoNTBweCk7IG9wYWNpdHk6IDA7YFxuICAgICAgICA6IGBmaWx0ZXI6IGJsdXIoMHB4KTsgb3BhY2l0eTogMTtgfVxuXG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0U2Nyb2xsQmx1ck92ZXJsYXlTdHlsZXMgPSBzdHlsZWQuZGl2PHtcbiAgaXNCcmVha3BvaW50OiBib29sZWFuO1xufT5gXG4gIHRyYW5zaXRpb246IGJhY2tkcm9wLWZpbHRlciAxcztcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcblxuICAkeyhwcm9wcykgPT5cbiAgICBwcm9wcy5pc0JyZWFrcG9pbnRcbiAgICAgID8gYGJhY2tkcm9wLWZpbHRlcjogYmx1cig1MHB4KSBvcGFjaXR5KDEpO2BcbiAgICAgIDogYGJhY2tkcm9wLWZpbHRlcjogYmx1cig1MHB4KSBvcGFjaXR5KDApO2B9XG5cbiAgJjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuXG4gICAgYmFja2dyb3VuZDogJHtUaGVtZS5Db2xvci5CYWNrZ3JvdW5kfTtcblxuICAgICR7KHByb3BzKSA9PiAocHJvcHMuaXNCcmVha3BvaW50ID8gYG9wYWNpdHk6IDE7YCA6IGBvcGFjaXR5OiAwO2ApfVxuICB9XG5gO1xuXG4vKipcbiAqXG4gKiBAbmFtZSBTY3JvbGxDYXJkXG4gKiBAZGVzY3JpcHRpb24gVGhlIHJvb3QgY2xhc3MgbmFtZSBmb3Igc3R5bGluZy4gQkVNIG5hbWluZyBjb252ZW50aW9ucy5cbiAqXG4gKi9cbmV4cG9ydCBjb25zdCBTY3JvbGxDYXJkQ2xhc3NOYW1lID0gXCJzY3JvbGwtY2FyZFwiO1xuXG5leHBvcnQgY29uc3QgU2Nyb2xsQ2FyZFN0eWxlID0gc3R5bGVkLmRpdmBcbiAgJi4ke1Njcm9sbENhcmRDbGFzc05hbWV9IHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiA1MHZ3O1xuXG4gICAgcGFkZGluZzogY2FsYygke1Jvb3QuRnJhbWVTaXplfSArICgke1Jvb3QuRnJhbWVTaXplfSAvIDIpKVxuICAgICAgY2FsYygke1Jvb3QuU2l6ZX0gKiAyKSBjYWxjKCR7Um9vdC5GcmFtZVNpemV9IC8gMikgY2FsYygke1Jvb3QuU2l6ZX0gKiAyKTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuXG4gICAgZmxleC1zaHJpbms6IDA7XG5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAvLyBCb3JkZXJzXG4gICAgJjpiZWZvcmUsXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAxcHg7XG5cbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgdG8gYm90dG9tLFxuICAgICAgICByZ2JhKDAsIDAsIDAsIDApLFxuICAgICAgICByZ2JhKDAsIDAsIDAsIDApIDUwJSxcbiAgICAgICAgJHtUaGVtZS5Db2xvci52YXJGb3JlZ3JvdW5kfSA1MCUsXG4gICAgICAgICR7VGhlbWUuQ29sb3IudmFyRm9yZWdyb3VuZH1cbiAgICAgICk7XG5cbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSA2cHg7XG4gICAgfVxuXG4gICAgLy8gUmlnaHQgQm9yZGVyXG4gICAgJjphZnRlciB7XG4gICAgICByaWdodDogMDtcbiAgICAgIHRvcDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICB9XG5cbiAgICAvLyBDZW50ZXIgQm9yZGVyXG4gICAgJjpiZWZvcmUge1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdG9wOiAwO1xuICAgICAgYm90dG9tOiAwO1xuXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgfVxuXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgLiR7U2Nyb2xsQ2FyZENsYXNzTmFtZX1fX2lubmVyIHtcbiAgICAgICAgLy8gQm9yZGVyc1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogXCJcIjtcblxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgd2lkdGg6IDFweDtcblxuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBsZWZ0OiBjYWxjKCR7Um9vdC5TaXplfSAqIC0yKTtcblxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgIHRvIGJvdHRvbSxcbiAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMCksXG4gICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDApIDUwJSxcbiAgICAgICAgICAgICR7VGhlbWUuQ29sb3IudmFyRm9yZWdyb3VuZH0gNTAlLFxuICAgICAgICAgICAgJHtUaGVtZS5Db2xvci52YXJGb3JlZ3JvdW5kfVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgNnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLiR7U2Nyb2xsQ2FyZENsYXNzTmFtZX1fX2lubmVyIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB6LWluZGV4OiAyO1xuXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAuJHtTY3JvbGxDYXJkQ2xhc3NOYW1lfV9fcm93IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICYtLXRvcCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiBjYWxjKCR7Um9vdC5GcmFtZVNpemV9IC8gNCk7XG4gICAgICB9XG5cbiAgICAgICYtLWJvdHRvbSB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKCR7Um9vdC5GcmFtZVNpemV9IC8gMik7XG5cbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG5cbiAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgIGJhY2tncm91bmQ6ICR7VGhlbWUuQ29sb3IudmFyRm9yZWdyb3VuZH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuJHtTY3JvbGxDYXJkQ2xhc3NOYW1lfV9fY29sIHtcbiAgICAgICZfX2NvbnRlbnQtcm93IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICAgICAgbWFyZ2luLXRvcDogMC4yNWVtO1xuXG4gICAgICAgICYtLWNvbnRlbnQtbWFqb3Ige1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYtLWJvdHRvbS1yaWdodCB7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC4ke1Njcm9sbENhcmRDbGFzc05hbWV9X19pbWFnZS13cmFwcGVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICR7VGhlbWUuQ29sb3IudmFyRm9yZWdyb3VuZH07XG5cbiAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDJweCAke1RoZW1lLkNvbG9yLnZhckZvcmVncm91bmR9O1xuICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAxcyBlYXNlO1xuXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcblxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiAwO1xuXG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgYmFja2dyb3VuZDogJHtUaGVtZS5Db2xvci52YXJGb3JlZ3JvdW5kfTtcblxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XG5cbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XG4gICAgICB9XG5cbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcblxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiAwO1xuXG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgYmFja2dyb3VuZDogJHtUaGVtZS5Db2xvci52YXJCYWNrZ3JvdW5kfTtcbiAgICAgICAgbWl4LWJsZW5kLW1vZGU6IG11bHRpcGx5O1xuXG4gICAgICAgIHotaW5kZXg6IDI7XG5cbiAgICAgICAgb3BhY2l0eTogMTtcblxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IHRyYW5zZm9ybSAyLjc1cyBlYXNlO1xuICAgICAgfVxuXG4gICAgICAuJHtTY3JvbGxDYXJkQ2xhc3NOYW1lfV9faW1hZ2Uge1xuICAgICAgICAmLS1maWx0ZXJlZCB7XG4gICAgICAgICAgbWl4LWJsZW5kLW1vZGU6IHNjcmVlbjtcbiAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgpIGJsdXIoMHB4KTtcblxuICAgICAgICAgIHRyYW5zaXRpb246IGZpbHRlciAxcyBlYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgJi0tbm9ybWFsIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB0b3A6IDA7XG5cbiAgICAgICAgICBvcGFjaXR5OiAwO1xuXG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICAvKiBib3gtc2hhZG93OiAwcHggMHB4IDBweCA4cHggJHtUaGVtZS5Db2xvci52YXJGb3JlZ3JvdW5kfTsgKi9cblxuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC4ke1Njcm9sbENhcmRDbGFzc05hbWV9X19pbWFnZS0tZmlsdGVyZWQge1xuICAgICAgICAgIG1peC1ibGVuZC1tb2RlOiBzY3JlZW47XG4gICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoKSBibHVyKDIwcHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLiR7U2Nyb2xsQ2FyZENsYXNzTmFtZX1fX2ltYWdlLS1ub3JtYWwge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG5cbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICYuJHtTY3JvbGxDYXJkQ2xhc3NOYW1lfS0taXMtdmlzaWJsZSB7XG4gICAgICAuJHtTY3JvbGxDYXJkQ2xhc3NOYW1lfV9faW1hZ2Utd3JhcHBlciB7XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuXG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogdHJhbnNmb3JtIDIuNzVzIGVhc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Sections/ProjectScrollSection/styles.scss.tsx\n");

/***/ })

})