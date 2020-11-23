webpackHotUpdate("static/development/pages/projects/p2.js",{

/***/ "./sketches/p5/d3.tsx":
/*!****************************!*\
  !*** ./sketches/p5/d3.tsx ***!
  \****************************/
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
//////////////////////////////////////////////////////////////////////
/* harmony default export */ __webpack_exports__["default"] = (function (W, H) {
  return function (p) {
    var x = 0; // @ts-ignore

    var scale = 0;
    var color = {
      primary: "black",
      primaryAlpha: "black",
      secondary: "#000000",
      bg: "cyan",
      white: "#ffffff"
    };

    p.setup = function () {
      // Our Canvas
      p.createCanvas(W, H, p.WEBGL);
      p.angleMode(p.RADIANS);
    };

    p.draw = function () {
      scale += 1;
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
//# sourceMappingURL=p2.js.70ce3249e0aaf9491411.hot-update.js.map