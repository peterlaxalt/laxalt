webpackHotUpdate("static/development/pages/projects/dharma.js",{

/***/ "./sketches/p5/dharma.tsx":
/*!********************************!*\
  !*** ./sketches/p5/dharma.tsx ***!
  \********************************/
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
var Dharma_Canvas = function Dharma_Canvas(W, H, ID, BG) {
  return function (p) {
    // _________________________________________________
    // Config
    // let color = {
    //   primary: "black",
    //   primaryAlpha: "black",
    //   secondary: "#000000",
    //   bg: "cyan",
    //   white: "#ffffff",
    // };
    // _________________________________________________
    // Preload
    // _________________________________________________
    // Setup
    p.setup = function () {
      // Our Canvas
      p.createCanvas(W, H, p.WEBGL);
      p.noStroke();
    }; // _________________________________________________
    // Draw


    p.draw = function () {
      // rect gives us some geometry on the screen
      p.background(BG);
      p.textSize(32);
      p.text("Test", 10, 30);
      p.fill("black");
      p.fill(255, 255, 255);
      p.rect(W / -2, H / -2, W, H);
    };

    p.windowResized = function () {
      p.resizeCanvas(W, H);
    };
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Dharma_Canvas);

/***/ })

})
//# sourceMappingURL=dharma.js.b957e516cf989b22a780.hot-update.js.map