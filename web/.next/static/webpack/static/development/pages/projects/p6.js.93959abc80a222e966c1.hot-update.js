webpackHotUpdate("static/development/pages/projects/p6.js",{

/***/ "./sketches/p5/glsl.tsx":
/*!******************************!*\
  !*** ./sketches/p5/glsl.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 *
 * Shader fun
 * @author Peter Laxalt
 *
 */
// Begin Component
// __________________________________________________________________________
var GLSL_Canvas = function GLSL_Canvas(W, H, ID, BG) {
  return function (p) {
    // _________________________________________________
    // Config
    var theShader; // _________________________________________________
    // Preload

    p.preload = function () {
      theShader = p.loadShader("/shaders/ex_".concat(ID, "/shader.vert"), "/shaders/ex_".concat(ID, "/shader.frag"));
    }; // _________________________________________________
    // Setup


    p.setup = function () {
      // Our Canvas
      p.createCanvas(W, H, p.WEBGL);
      p.noStroke();
    }; // _________________________________________________
    // Draw


    p.draw = function () {
      // shader() sets the active shader with our shader
      p.shader(theShader);
      theShader.setUniform("u_resolution", [W, H]);
      theShader.setUniform("u_time", p.millis() / 1000.0);
      theShader.setUniform("u_mouse", [p.mouseX, p.map(p.mouseY, 0, H, H, 0)]); // rect gives us some geometry on the screen

      p.rect(0, 0, W, H);
    };

    p.windowResized = function () {
      p.resizeCanvas(W, H);
    };
  };
};

/* harmony default export */ __webpack_exports__["default"] = (GLSL_Canvas);

/***/ })

})
//# sourceMappingURL=p6.js.93959abc80a222e966c1.hot-update.js.map