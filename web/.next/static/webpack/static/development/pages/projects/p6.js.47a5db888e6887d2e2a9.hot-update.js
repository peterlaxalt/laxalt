webpackHotUpdate("static/development/pages/projects/p6.js",{

/***/ "./sketches/p5/glsl.tsx":
/*!******************************!*\
  !*** ./sketches/p5/glsl.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);


/**
 *
 * Sin Wave Cone
 * @author Peter Laxalt
 * @description Simple Sin Wave Cone in p5.js
 *
 */
// Begin Component
// __________________________________________________________________________
/* harmony default export */ __webpack_exports__["default"] = (function (W, H, BG) {
  return function (p) {
    var x = 0;
    var scale = 0;
    var color = {
      primary: "black",
      primaryAlpha: "black",
      secondary: "#000000",
      bg: BG,
      white: "#ffffff"
    };

    p.setup = function () {
      // Our Canvas
      p.createCanvas(W, H, p.WEBGL);
      p.angleMode(p.RADIANS);
    };

    p.draw = function () {
      scale += 1;
      scale;
      x = x * 1.1 + 2;
      p.noFill();
      p.stroke(color.primary);
      p.background(color.bg);

      for (var i = 0; i < 20; i++) {
        p.cone(300, 400);
        p.stroke(color.primaryAlpha);
        p.strokeWeight(1);
        p.translate(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()((Math.sin(p.mouseX * 0.001) * 50).toString()), _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()((Math.sin(p.mouseY * 0.001) * 50).toString()), _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()((Math.sin(p.mouseX * 0.001) * 50).toString()));
        p.smooth();
        p.rotateX(p.frameCount * 0.01);
        p.rotateY(p.frameCount * 0.01);
      }
    };

    p.windowResized = function () {
      p.resizeCanvas(W, H);
      p.background("yellow");
    };
  };
});

/***/ })

})
//# sourceMappingURL=p6.js.47a5db888e6887d2e2a9.hot-update.js.map