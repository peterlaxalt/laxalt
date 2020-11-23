webpackHotUpdate("static/development/pages/projects/dharma.js",{

/***/ "./components/_interactive/InteractiveFrameHeader/styles.scss.tsx":
/*!************************************************************************!*\
  !*** ./components/_interactive/InteractiveFrameHeader/styles.scss.tsx ***!
  \************************************************************************/
/*! exports provided: InteractiveFrameHeaderClassName, InteractiveFrameHeaderStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractiveFrameHeaderClassName", function() { return InteractiveFrameHeaderClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractiveFrameHeaderStyle", function() { return InteractiveFrameHeaderStyle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/Theme */ "./constants/Theme.tsx");
/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/Root */ "./constants/Root.tsx");
/* harmony import */ var _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_svg/DharmaType/styles.scss */ "./components/_svg/DharmaType/styles.scss.tsx");
/* harmony import */ var _constants_styles_CssUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/styles/CssUtils */ "./constants/styles/CssUtils.tsx");
// Imports
// _________________________________________________________________________
// Core
 // Constants




 // Begin Styles
// _________________________________________________________________________

/**
 *
 * @name InteractiveFrameHeaderClassName
 * @description The root class name for styling. BEM naming conventions.
 *
 */

var InteractiveFrameHeaderClassName = "interactive-frame-header";
/**
 *
 * @name InteractiveFrameHeaderStyle
 * @author Peter Laxalt
 *
 */

var InteractiveFrameHeaderStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "stylesscss__InteractiveFrameHeaderStyle",
  componentId: "tg0k5n-0"
})(["&.", "{--", "__frame-edge-size:", ";--", "__marquee-speed:60s;@media(max-width:", "){--", "__frame-edge-size:", ";}overflow:hidden;position:fixed;left:0;top:0;width:100vw;height:100vh;z-index:999;pointer-events:none;.", "__inner{width:100vw;height:100vh;position:relative;z-index:999;pointer-events:none;}.", ",.", "__frame{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;}.", "__type{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:calc(100% - (var(--", "__frame-edge-size) * 2));height:calc(100% - (var(--", "__frame-edge-size) * 2.25));@media(max-width:", "){transform:translate(-50%,-50%) rotate(90deg);width:calc(100vh - (var(--", "__frame-edge-size) * 2.25));height:calc(100vw - (var(--", "__frame-edge-size) * 2.25));}.", "{--", "-offset-size:10px;@media(max-width:", "){--", "-offset-size:5px;}top:0;left:0;right:0;bottom:0;width:100%;height:100%;&--offset{top:calc(var(--", "-offset-size) * (var(--", "-offset) * -1));left:calc(var(--", "-offset-size) * (var(--", "-offset) * 1));right:calc(var(--", "-offset-size) * (var(--", "-offset) * -1));bottom:calc(var(--", "-offset-size) * (var(--", "-offset) * 1));}}.", "__character{fill:", ";transition:stroke-width .5s ease;}}.", "__frame{z-index:500;&__y-axis,&__x-axis{position:absolute;overflow:hidden;left:50%;top:50%;pointer-events:none;}&__y-axis{width:100vw;height:100vh;transform:translate(-50%,-50%);}&__x-axis{width:100vh;height:100vw;transform:translate(-50%,-50%) rotate(90deg);}&__edge{font-size:calc(var(--", "__frame-edge-size) * 0.75);text-transform:uppercase;line-height:0;z-index:800;background:", ";.", "__frame-items{list-style-type:none;color:", ";height:var(--", "__frame-edge-size);display:block;align-items:center;justify-content:flex-start;li{margin-right:calc(var(--", "__frame-edge-size) / 2);}}.", "__marquee-container{flex-shrink:0;display:flex;justify-content:flex-start;flex-wrap:nowrap;position:relative;overflow:hidden;.", "__frame-items{display:flex;flex-wrap:nowrap;white-space:nowrap;flex-shrink:0;li{width:auto;flex-shrink:0;white-space:nowrap;vertical-align:middle;display:table-cell;}}}&--top,&--bottom,&--left,&--right{position:absolute;overflow:hidden;pointer-events:all;}&--top,&--right{border-bottom:1px solid ", ";.", "__frame-items{padding-top:calc(var(--", "__frame-edge-size) / 6);padding-bottom:calc(var(--", "__frame-edge-size) / 6);position:relative;animation:marqueeTopRightQuadrants var(--", "__marquee-speed) linear infinite;}}&--bottom,&--left{border-top:1px solid ", ";.", "__frame-items{padding-top:calc(var(--", "__frame-edge-size) / 6);padding-bottom:calc(var(--", "__frame-edge-size) / 6);animation:marqueeBottomLeftQuadrants var(--", "__marquee-speed) linear infinite;}}&--top,&--bottom{width:calc(100vw - var(--", "__frame-edge-size));}&--left,&--right{width:calc(100vh - var(--", "__frame-edge-size));}&--top{top:0;left:var(--", "__frame-edge-size);}&--bottom{bottom:0;right:var(--", "__frame-edge-size);}&--right{top:0;left:var(--", "__frame-edge-size);}&--left{bottom:0;left:0;}}}}"], InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_2__["Root"].FrameSize, InteractiveFrameHeaderClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Media.Width.Md, InteractiveFrameHeaderClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_2__["Root"].FrameSize, InteractiveFrameHeaderClassName, _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_3__["DharmaTypeClassName"], InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Media.Width.Sm, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_3__["DharmaTypeClassName"], _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_3__["DharmaTypeClassName"], _constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Media.Width.Sm, _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_3__["DharmaTypeClassName"], _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_3__["DharmaTypeClassName"], _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_3__["DharmaTypeClassName"], _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_3__["DharmaTypeClassName"], _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_3__["DharmaTypeClassName"], _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_3__["DharmaTypeClassName"], _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_3__["DharmaTypeClassName"], _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_3__["DharmaTypeClassName"], _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_3__["DharmaTypeClassName"], _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_3__["DharmaTypeClassName"], _constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Color.varForeground, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Color.varBackground, InteractiveFrameHeaderClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Color.varForeground, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Color.varForeground, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Color.varForeground, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName);

/***/ })

})
//# sourceMappingURL=dharma.js.e956256d1595c8d3814d.hot-update.js.map