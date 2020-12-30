webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Sections/ProjectScrollSection/styles.scss.tsx":
/*!******************************************************************!*\
  !*** ./components/Sections/ProjectScrollSection/styles.scss.tsx ***!
  \******************************************************************/
/*! exports provided: ProjectScrollSectionClassName, ProjectScrollSectionStyle, ProjectScrollSectionGlobalStyles, ProjectScrollBlurOverlayStyles, ScrollCardClassName, ScrollCardStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectScrollSectionClassName\", function() { return ProjectScrollSectionClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectScrollSectionStyle\", function() { return ProjectScrollSectionStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectScrollSectionGlobalStyles\", function() { return ProjectScrollSectionGlobalStyles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectScrollBlurOverlayStyles\", function() { return ProjectScrollBlurOverlayStyles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ScrollCardClassName\", function() { return ScrollCardClassName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ScrollCardStyle\", function() { return ScrollCardStyle; });\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/Theme */ \"./constants/Theme.tsx\");\n/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/Root */ \"./constants/Root.tsx\");\n/* harmony import */ var _pages_projects_no_distort_with_canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../pages/projects/no-distort-with-canvas */ \"./pages/projects/no-distort-with-canvas.tsx\");\n\n\nfunction _templateObject() {\n  var data = Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  .\", \" {\\n    transition: filter 1s ease, opacity 1s ease;\\n\\n    \", \"\\n\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n// Imports\n// _________________________________________________________________________\n// Core\n // Constants\n\n\n\n // Begin Styles\n// _________________________________________________________________________\n\n/**\n *\n * @name ProjectScrollSectionClassName\n * @description The root class name for styling. BEM naming conventions.\n *\n */\n\nvar ProjectScrollSectionClassName = \"project-scroll\";\n/**\n *\n * @name ProjectScrollSectionStyle\n * @author Peter Laxalt\n *\n */\n\nvar ProjectScrollSectionStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section.withConfig({\n  displayName: \"stylesscss__ProjectScrollSectionStyle\",\n  componentId: \"sc-897oup-0\"\n})([\"&.\", \"{&.\", \"--is-scrolled{.\", \"__content-wrapper{&:before{}}}.\", \"__sticky-wrapper{position:sticky;top:0;height:100vh;width:100%;overflow-x:hidden;}.\", \"__content-wrapper{position:relative;height:100vh;padding:0;display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:center;padding-left:100vw;padding-right:10vw;&:before{content:\\\"\\\";position:absolute;top:50%;left:0;transform:translate3d(0px,50%,0px) scaleX(0);transform-origin:left center;height:1px;width:100%;transition:transform 3s ease;background:\", \";}}.\", \"__horizontal-wrapper{position:relative;width:100%;min-height:100vh;}.\", \"__x-translate-wrapper{position:absolute;height:100%;transform-style:preserve-3d;will-change:transform;}.\", \"__outer{position:relative;width:100%;}}\"], ProjectScrollSectionClassName, ProjectScrollSectionClassName, ProjectScrollSectionClassName, ProjectScrollSectionClassName, ProjectScrollSectionClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, ProjectScrollSectionClassName, ProjectScrollSectionClassName, ProjectScrollSectionClassName);\nvar ProjectScrollSectionGlobalStyles = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"createGlobalStyle\"])(_templateObject(), _pages_projects_no_distort_with_canvas__WEBPACK_IMPORTED_MODULE_4__[\"NoDistortCanvasClassName\"], function (props) {\n  return props.isScrolled ? \"filter: blur(50px); opacity: 0;\" : \"filter: blur(0px); opacity: 1;\";\n});\nvar ProjectScrollBlurOverlayStyles = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"stylesscss__ProjectScrollBlurOverlayStyles\",\n  componentId: \"sc-897oup-1\"\n})([\"transition:backdrop-filter 1s;position:fixed;left:0;top:0;width:100vw;height:100vh;\", \" &:before{content:'';position:absolute;left:0;top:0;width:100vw;height:100vh;background:red;}\"], function (props) {\n  return props.isBreakpoint ? \"backdrop-filter: blur(50px) opacity(1);\" : \"backdrop-filter: blur(50px) opacity(0);\";\n});\n/**\n *\n * @name ScrollCard\n * @description The root class name for styling. BEM naming conventions.\n *\n */\n\nvar ScrollCardClassName = \"scroll-card\";\nvar ScrollCardStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"stylesscss__ScrollCardStyle\",\n  componentId: \"sc-897oup-2\"\n})([\"&.\", \"{height:100vh;width:50vw;padding:calc(\", \" + (\", \" / 2)) calc(\", \" * 2) calc(\", \" / 2) calc(\", \" * 2);display:flex;align-items:flex-end;flex-shrink:0;position:relative;&:before,&:after{content:\\\"\\\";position:absolute;height:100%;width:1px;background:linear-gradient( to bottom,rgba(0,0,0,0),rgba(0,0,0,0) 50%,\", \" 50%,\", \" );background-size:100% 6px;}&:after{right:0;top:0;bottom:0;}&:before{left:50%;top:0;bottom:0;transform:translateX(-50%);}img{width:100%;max-width:100%;}&:first-child{.\", \"__inner{&:before{content:\\\"\\\";position:absolute;height:100vh;width:1px;bottom:0;left:calc(\", \" * -2);background:linear-gradient( to bottom,rgba(0,0,0,0),rgba(0,0,0,0) 50%,\", \" 50%,\", \" );background-size:100% 6px;}}}.\", \"__inner{height:100%;width:100%;position:relative;z-index:2;display:flex;justify-content:space-between;flex-direction:column;}.\", \"__row{display:flex;justify-content:space-between;&--top{padding-top:calc(\", \" / 4);}&--bottom{padding-bottom:calc(\", \" / 2);position:relative;&:before{content:\\\"\\\";position:absolute;bottom:0;left:0;height:5px;width:100%;background:\", \";}}}.\", \"__col{&__content-row{display:block;text-transform:uppercase;margin-top:0.25em;&--content-major{font-size:1.2rem;}}&--bottom-right{text-align:right;}}.\", \"__image-wrapper{background:\", \";line-height:0;position:relative;box-shadow:0px 0px 0px 2px \", \";transition:box-shadow 1s ease;overflow:hidden;&:after{content:\\\"\\\";position:absolute;left:0;top:0;width:100%;height:100%;background:\", \";transform:scaleX(1);transform-origin:left center;transition:transform 1s ease;}&:before{content:\\\"\\\";position:absolute;left:0;top:0;width:100%;height:100%;background:\", \";mix-blend-mode:multiply;z-index:2;opacity:1;transition:opacity 1s ease;transition-delay:transform 2.75s ease;}.\", \"__image{&--filtered{mix-blend-mode:screen;filter:grayscale() blur(0px);transition:filter 1s ease;}&--normal{position:absolute;left:0;top:0;opacity:0;transition:opacity 1s ease;}}&:hover{&:before{opacity:0;}.\", \"__image--filtered{mix-blend-mode:screen;filter:grayscale() blur(20px);}.\", \"__image--normal{opacity:1;transition:opacity 0.5s ease;}}}&.\", \"--is-visible{.\", \"__image-wrapper{&:after{transform:scaleX(0);transition-delay:transform 2.75s ease;}}}}\"], ScrollCardClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].FrameSize, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].FrameSize, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].Size, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].FrameSize, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].Size, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, ScrollCardClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].Size, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, ScrollCardClassName, ScrollCardClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].FrameSize, _constants_Root__WEBPACK_IMPORTED_MODULE_3__[\"Root\"].FrameSize, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, ScrollCardClassName, ScrollCardClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"].Color.varBackground, ScrollCardClassName, ScrollCardClassName, ScrollCardClassName, ScrollCardClassName, ScrollCardClassName);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9ucy9Qcm9qZWN0U2Nyb2xsU2VjdGlvbi9zdHlsZXMuc2Nzcy50c3g/YTk5MiJdLCJuYW1lcyI6WyJQcm9qZWN0U2Nyb2xsU2VjdGlvbkNsYXNzTmFtZSIsIlByb2plY3RTY3JvbGxTZWN0aW9uU3R5bGUiLCJzdHlsZWQiLCJzZWN0aW9uIiwiVGhlbWUiLCJDb2xvciIsInZhckZvcmVncm91bmQiLCJQcm9qZWN0U2Nyb2xsU2VjdGlvbkdsb2JhbFN0eWxlcyIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiTm9EaXN0b3J0Q2FudmFzQ2xhc3NOYW1lIiwicHJvcHMiLCJpc1Njcm9sbGVkIiwiUHJvamVjdFNjcm9sbEJsdXJPdmVybGF5U3R5bGVzIiwiZGl2IiwiaXNCcmVha3BvaW50IiwiU2Nyb2xsQ2FyZENsYXNzTmFtZSIsIlNjcm9sbENhcmRTdHlsZSIsIlJvb3QiLCJGcmFtZVNpemUiLCJTaXplIiwidmFyQmFja2dyb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0NBR0E7O0FBQ0E7QUFDQTtDQU9BO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLElBQU1BLDZCQUE2QixHQUFHLGdCQUF0QztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQyx5QkFBeUIsR0FBR0MseURBQU0sQ0FBQ0MsT0FBVjtBQUFBO0FBQUE7QUFBQSwydkJBQ2hDSCw2QkFEZ0MsRUFFOUJBLDZCQUY4QixFQUc3QkEsNkJBSDZCLEVBVS9CQSw2QkFWK0IsRUFxQi9CQSw2QkFyQitCLEVBcURoQkksc0RBQUssQ0FBQ0MsS0FBTixDQUFZQyxhQXJESSxFQXlEL0JOLDZCQXpEK0IsRUFnRS9CQSw2QkFoRStCLEVBMkUvQkEsNkJBM0UrQixDQUEvQjtBQW1GQSxJQUFNTyxnQ0FBZ0MsR0FBR0MsMkVBQUgsb0JBR3hDQywrRkFId0MsRUFNdkMsVUFBQ0MsS0FBRDtBQUFBLFNBQ0FBLEtBQUssQ0FBQ0MsVUFBTix1RUFEQTtBQUFBLENBTnVDLENBQXRDO0FBY0EsSUFBTUMsOEJBQThCLEdBQUdWLHlEQUFNLENBQUNXLEdBQVY7QUFBQTtBQUFBO0FBQUEsNkxBVXZDLFVBQUNILEtBQUQ7QUFBQSxTQUNBQSxLQUFLLENBQUNJLFlBQU4sd0ZBREE7QUFBQSxDQVZ1QyxDQUFwQztBQTRCUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUMsbUJBQW1CLEdBQUcsYUFBNUI7QUFFQSxJQUFNQyxlQUFlLEdBQUdkLHlEQUFNLENBQUNXLEdBQVY7QUFBQTtBQUFBO0FBQUEsc3JFQUN0QkUsbUJBRHNCLEVBS1JFLG9EQUFJLENBQUNDLFNBTEcsRUFLYUQsb0RBQUksQ0FBQ0MsU0FMbEIsRUFNZkQsb0RBQUksQ0FBQ0UsSUFOVSxFQU1RRixvREFBSSxDQUFDQyxTQU5iLEVBTW9DRCxvREFBSSxDQUFDRSxJQU56QyxFQTZCbEJmLHNEQUFLLENBQUNDLEtBQU4sQ0FBWUMsYUE3Qk0sRUE4QmxCRixzREFBSyxDQUFDQyxLQUFOLENBQVlDLGFBOUJNLEVBMERuQlMsbUJBMURtQixFQXFFTEUsb0RBQUksQ0FBQ0UsSUFyRUEsRUEyRWRmLHNEQUFLLENBQUNDLEtBQU4sQ0FBWUMsYUEzRUUsRUE0RWRGLHNEQUFLLENBQUNDLEtBQU4sQ0FBWUMsYUE1RUUsRUFvRnJCUyxtQkFwRnFCLEVBZ0dyQkEsbUJBaEdxQixFQXFHQUUsb0RBQUksQ0FBQ0MsU0FyR0wsRUF5R0dELG9EQUFJLENBQUNDLFNBekdSLEVBd0hKZCxzREFBSyxDQUFDQyxLQUFOLENBQVlDLGFBeEhSLEVBNkhyQlMsbUJBN0hxQixFQThJckJBLG1CQTlJcUIsRUErSVJYLHNEQUFLLENBQUNDLEtBQU4sQ0FBWUMsYUEvSUosRUFxSlFGLHNEQUFLLENBQUNDLEtBQU4sQ0FBWUMsYUFySnBCLEVBcUtORixzREFBSyxDQUFDQyxLQUFOLENBQVlDLGFBcktOLEVBd0xORixzREFBSyxDQUFDQyxLQUFOLENBQVllLGFBeExOLEVBbU1uQkwsbUJBbk1tQixFQTZOakJBLG1CQTdOaUIsRUFrT2pCQSxtQkFsT2lCLEVBME9wQkEsbUJBMU9vQixFQTJPbkJBLG1CQTNPbUIsQ0FBckIiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlY3Rpb25zL1Byb2plY3RTY3JvbGxTZWN0aW9uL3N0eWxlcy5zY3NzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cblxuLy8gQ29yZVxuaW1wb3J0IHN0eWxlZCwgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG4vLyBDb25zdGFudHNcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50cy9UaGVtZVwiO1xuaW1wb3J0IHsgUm9vdCB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvUm9vdFwiO1xuaW1wb3J0IHtcbiAgQ3NzRnJhbWVQYWRkaW5nU3RyaW5nLFxuICBDc3NGcmFtZVNpemVXaXRoQm9yZGVyU3RyaW5nLFxufSBmcm9tIFwiLi4vLi4vTWVsbG93RnJhbWVIZWFkZXIvc3R5bGVzLnNjc3NcIjtcbmltcG9ydCB7IE5vRGlzdG9ydENhbnZhc0NsYXNzTmFtZSB9IGZyb20gXCIuLi8uLi8uLi9wYWdlcy9wcm9qZWN0cy9uby1kaXN0b3J0LXdpdGgtY2FudmFzXCI7XG5cbi8vIEJlZ2luIFN0eWxlc1xuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuXG4vKipcbiAqXG4gKiBAbmFtZSBQcm9qZWN0U2Nyb2xsU2VjdGlvbkNsYXNzTmFtZVxuICogQGRlc2NyaXB0aW9uIFRoZSByb290IGNsYXNzIG5hbWUgZm9yIHN0eWxpbmcuIEJFTSBuYW1pbmcgY29udmVudGlvbnMuXG4gKlxuICovXG5leHBvcnQgY29uc3QgUHJvamVjdFNjcm9sbFNlY3Rpb25DbGFzc05hbWUgPSBcInByb2plY3Qtc2Nyb2xsXCI7XG5cbi8qKlxuICpcbiAqIEBuYW1lIFByb2plY3RTY3JvbGxTZWN0aW9uU3R5bGVcbiAqIEBhdXRob3IgUGV0ZXIgTGF4YWx0XG4gKlxuICovXG5leHBvcnQgY29uc3QgUHJvamVjdFNjcm9sbFNlY3Rpb25TdHlsZSA9IHN0eWxlZC5zZWN0aW9uYFxuICAmLiR7UHJvamVjdFNjcm9sbFNlY3Rpb25DbGFzc05hbWV9IHtcbiAgICAmLiR7UHJvamVjdFNjcm9sbFNlY3Rpb25DbGFzc05hbWV9LS1pcy1zY3JvbGxlZCB7XG4gICAgICAuJHtQcm9qZWN0U2Nyb2xsU2VjdGlvbkNsYXNzTmFtZX1fX2NvbnRlbnQtd3JhcHBlciB7XG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAvKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgNTAlLCAwcHgpIHNjYWxlWCgxKTsgKi9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC4ke1Byb2plY3RTY3JvbGxTZWN0aW9uQ2xhc3NOYW1lfV9fc3RpY2t5LXdyYXBwZXIge1xuICAgICAgcG9zaXRpb246IHN0aWNreTtcblxuICAgICAgdG9wOiAwO1xuXG4gICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAuJHtQcm9qZWN0U2Nyb2xsU2VjdGlvbkNsYXNzTmFtZX1fX2NvbnRlbnQtd3JhcHBlciB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIGhlaWdodDogMTAwdmg7XG5cbiAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIHBhZGRpbmctbGVmdDogMTAwdnc7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHZ3O1xuXG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG5cbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiAwO1xuXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCA1MCUsIDBweCkgc2NhbGVYKDApO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcblxuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDNzIGVhc2U7XG5cbiAgICAgICAgYmFja2dyb3VuZDogJHtUaGVtZS5Db2xvci52YXJGb3JlZ3JvdW5kfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuJHtQcm9qZWN0U2Nyb2xsU2VjdGlvbkNsYXNzTmFtZX1fX2hvcml6b250YWwtd3JhcHBlciB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgfVxuXG4gICAgLiR7UHJvamVjdFNjcm9sbFNlY3Rpb25DbGFzc05hbWV9X194LXRyYW5zbGF0ZS13cmFwcGVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuXG4gICAgICAvKiB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLW91dDsgKi9cbiAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gICAgfVxuXG4gICAgLiR7UHJvamVjdFNjcm9sbFNlY3Rpb25DbGFzc05hbWV9X19vdXRlciB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFByb2plY3RTY3JvbGxTZWN0aW9uR2xvYmFsU3R5bGVzID0gY3JlYXRlR2xvYmFsU3R5bGU8e1xuICBpc1Njcm9sbGVkOiBib29sZWFuO1xufT5gXG4gIC4ke05vRGlzdG9ydENhbnZhc0NsYXNzTmFtZX0ge1xuICAgIHRyYW5zaXRpb246IGZpbHRlciAxcyBlYXNlLCBvcGFjaXR5IDFzIGVhc2U7XG5cbiAgICAkeyhwcm9wcykgPT5cbiAgICAgIHByb3BzLmlzU2Nyb2xsZWRcbiAgICAgICAgPyBgZmlsdGVyOiBibHVyKDUwcHgpOyBvcGFjaXR5OiAwO2BcbiAgICAgICAgOiBgZmlsdGVyOiBibHVyKDBweCk7IG9wYWNpdHk6IDE7YH1cblxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgUHJvamVjdFNjcm9sbEJsdXJPdmVybGF5U3R5bGVzID0gc3R5bGVkLmRpdjx7XG4gIGlzQnJlYWtwb2ludDogYm9vbGVhbjtcbn0+YFxuICB0cmFuc2l0aW9uOiBiYWNrZHJvcC1maWx0ZXIgMXM7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG5cbiAgJHsocHJvcHMpID0+XG4gICAgcHJvcHMuaXNCcmVha3BvaW50XG4gICAgICA/IGBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNTBweCkgb3BhY2l0eSgxKTtgXG4gICAgICA6IGBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNTBweCkgb3BhY2l0eSgwKTtgfVxuXG5cbiAgJjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcblxuICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgfVxuYDtcblxuLyoqXG4gKlxuICogQG5hbWUgU2Nyb2xsQ2FyZFxuICogQGRlc2NyaXB0aW9uIFRoZSByb290IGNsYXNzIG5hbWUgZm9yIHN0eWxpbmcuIEJFTSBuYW1pbmcgY29udmVudGlvbnMuXG4gKlxuICovXG5leHBvcnQgY29uc3QgU2Nyb2xsQ2FyZENsYXNzTmFtZSA9IFwic2Nyb2xsLWNhcmRcIjtcblxuZXhwb3J0IGNvbnN0IFNjcm9sbENhcmRTdHlsZSA9IHN0eWxlZC5kaXZgXG4gICYuJHtTY3JvbGxDYXJkQ2xhc3NOYW1lfSB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogNTB2dztcblxuICAgIHBhZGRpbmc6IGNhbGMoJHtSb290LkZyYW1lU2l6ZX0gKyAoJHtSb290LkZyYW1lU2l6ZX0gLyAyKSlcbiAgICAgIGNhbGMoJHtSb290LlNpemV9ICogMikgY2FsYygke1Jvb3QuRnJhbWVTaXplfSAvIDIpIGNhbGMoJHtSb290LlNpemV9ICogMik7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblxuICAgIGZsZXgtc2hyaW5rOiAwO1xuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLy8gQm9yZGVyc1xuICAgICY6YmVmb3JlLFxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcblxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMXB4O1xuXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgIHRvIGJvdHRvbSxcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwKSxcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwKSA1MCUsXG4gICAgICAgICR7VGhlbWUuQ29sb3IudmFyRm9yZWdyb3VuZH0gNTAlLFxuICAgICAgICAke1RoZW1lLkNvbG9yLnZhckZvcmVncm91bmR9XG4gICAgICApO1xuXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgNnB4O1xuICAgIH1cblxuICAgIC8vIFJpZ2h0IEJvcmRlclxuICAgICY6YWZ0ZXIge1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB0b3A6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgfVxuXG4gICAgLy8gQ2VudGVyIEJvcmRlclxuICAgICY6YmVmb3JlIHtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGJvdHRvbTogMDtcblxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgIC4ke1Njcm9sbENhcmRDbGFzc05hbWV9X19pbm5lciB7XG4gICAgICAgIC8vIEJvcmRlcnNcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG5cbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIHdpZHRoOiAxcHg7XG5cbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgbGVmdDogY2FsYygke1Jvb3QuU2l6ZX0gKiAtMik7XG5cbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICB0byBib3R0b20sXG4gICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDApLFxuICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAwKSA1MCUsXG4gICAgICAgICAgICAke1RoZW1lLkNvbG9yLnZhckZvcmVncm91bmR9IDUwJSxcbiAgICAgICAgICAgICR7VGhlbWUuQ29sb3IudmFyRm9yZWdyb3VuZH1cbiAgICAgICAgICApO1xuXG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDZweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC4ke1Njcm9sbENhcmRDbGFzc05hbWV9X19pbm5lciB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgei1pbmRleDogMjtcblxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgLiR7U2Nyb2xsQ2FyZENsYXNzTmFtZX1fX3JvdyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAmLS10b3Age1xuICAgICAgICBwYWRkaW5nLXRvcDogY2FsYygke1Jvb3QuRnJhbWVTaXplfSAvIDQpO1xuICAgICAgfVxuXG4gICAgICAmLS1ib3R0b20ge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYygke1Jvb3QuRnJhbWVTaXplfSAvIDIpO1xuXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogXCJcIjtcblxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuXG4gICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke1RoZW1lLkNvbG9yLnZhckZvcmVncm91bmR9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLiR7U2Nyb2xsQ2FyZENsYXNzTmFtZX1fX2NvbCB7XG4gICAgICAmX19jb250ZW50LXJvdyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgICAgIG1hcmdpbi10b3A6IDAuMjVlbTtcblxuICAgICAgICAmLS1jb250ZW50LW1ham9yIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLS1ib3R0b20tcmlnaHQge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuJHtTY3JvbGxDYXJkQ2xhc3NOYW1lfV9faW1hZ2Utd3JhcHBlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAke1RoZW1lLkNvbG9yLnZhckZvcmVncm91bmR9O1xuXG4gICAgICBsaW5lLWhlaWdodDogMDtcblxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAycHggJHtUaGVtZS5Db2xvci52YXJGb3JlZ3JvdW5kfTtcbiAgICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMXMgZWFzZTtcblxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG5cbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRvcDogMDtcblxuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICAgIGJhY2tncm91bmQ6ICR7VGhlbWUuQ29sb3IudmFyRm9yZWdyb3VuZH07XG5cbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xuXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xuICAgICAgfVxuXG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG5cbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRvcDogMDtcblxuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICAgIGJhY2tncm91bmQ6ICR7VGhlbWUuQ29sb3IudmFyQmFja2dyb3VuZH07XG4gICAgICAgIG1peC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcblxuICAgICAgICB6LWluZGV4OiAyO1xuXG4gICAgICAgIG9wYWNpdHk6IDE7XG5cbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiB0cmFuc2Zvcm0gMi43NXMgZWFzZTtcbiAgICAgIH1cblxuICAgICAgLiR7U2Nyb2xsQ2FyZENsYXNzTmFtZX1fX2ltYWdlIHtcbiAgICAgICAgJi0tZmlsdGVyZWQge1xuICAgICAgICAgIG1peC1ibGVuZC1tb2RlOiBzY3JlZW47XG4gICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoKSBibHVyKDBweCk7XG5cbiAgICAgICAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMXMgZWFzZTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtLW5vcm1hbCB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgdG9wOiAwO1xuXG4gICAgICAgICAgb3BhY2l0eTogMDtcblxuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgLyogYm94LXNoYWRvdzogMHB4IDBweCAwcHggOHB4ICR7VGhlbWUuQ29sb3IudmFyRm9yZWdyb3VuZH07ICovXG5cbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuJHtTY3JvbGxDYXJkQ2xhc3NOYW1lfV9faW1hZ2UtLWZpbHRlcmVkIHtcbiAgICAgICAgICBtaXgtYmxlbmQtbW9kZTogc2NyZWVuO1xuICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKCkgYmx1cigyMHB4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC4ke1Njcm9sbENhcmRDbGFzc05hbWV9X19pbWFnZS0tbm9ybWFsIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuXG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLiR7U2Nyb2xsQ2FyZENsYXNzTmFtZX0tLWlzLXZpc2libGUge1xuICAgICAgLiR7U2Nyb2xsQ2FyZENsYXNzTmFtZX1fX2ltYWdlLXdyYXBwZXIge1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcblxuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IHRyYW5zZm9ybSAyLjc1cyBlYXNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Sections/ProjectScrollSection/styles.scss.tsx\n");

/***/ })

})