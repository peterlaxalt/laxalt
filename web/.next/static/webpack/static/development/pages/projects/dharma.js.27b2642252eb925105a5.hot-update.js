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
var DharmaCanvasDisplay = function DharmaCanvasDisplay(W, H, ID, BG) {
  return function (p) {
    // _________________________________________________
    // Config
    var dharmaFont;
    var text = "LAXALT";
    var splitCharacterArray = text.split("");
    var characters = splitCharacterArray.map(function (character, idx) {
      return {
        letter: character,
        count: 1,
        idx: idx,
        copies: Math.random() <= 0.5
      };
    });
    var viewBoxHeight = H;
    var viewBoxWidth = W;
    var characterCount = splitCharacterArray.length;
    var characterWidth = viewBoxWidth / characterCount; // let characterVerticalTranslation = 0.963; // Multiplied by the viewBoxHeight

    var characterVerticalTranslation = 0.993; // Multiplied by the viewBoxHeight

    var characterHorizontalScale = 0.75; // Multiplied by the characterWidth

    var characterVerticalScale = 1.38; // Multiplied by the characterWidth
    // let countArray: number[] = Array.from(Array(characters.count).keys());
    // _________________________________________________
    // Preload

    p.preload = function () {
      dharmaFont = p.loadFont("/fonts/dharma/dharma_regular.ttf");
    }; // _________________________________________________
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
      p.textFont(dharmaFont);
      p.textLeading(0);
      p.textSize(H * 1.25);
      characters.map(function (_char) {
        p.text(_char, 0, -40);
        p.fill("black");
      });
      p.textAlign(p.CENTER, p.CENTER);
    };

    p.windowResized = function () {
      p.resizeCanvas(W, H);
    };
  };
};

/* harmony default export */ __webpack_exports__["default"] = (DharmaCanvasDisplay);

/***/ })

})
//# sourceMappingURL=dharma.js.27b2642252eb925105a5.hot-update.js.map