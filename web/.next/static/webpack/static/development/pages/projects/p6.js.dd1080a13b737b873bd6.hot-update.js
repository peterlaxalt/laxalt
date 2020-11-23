webpackHotUpdate("static/development/pages/projects/p6.js",{

/***/ "./sketches/p5/dharma.tsx":
/*!********************************!*\
  !*** ./sketches/p5/dharma.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/Theme */ "./constants/Theme.tsx");


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
    var characterCount = splitCharacterArray.length;
    var characterWidth = W / characterCount; // let characterVerticalTranslation = 0.963; // Multiplied by the viewBoxHeight
    // let characterVerticalTranslation: number = 0.993; // Multiplied by the viewBoxHeight
    // let characterHorizontalScale: number = 0.75; // Multiplied by the characterWidth
    // let characterVerticalScale: number = 1.38; // Multiplied by the characterWidth
    // _________________________________________________
    // Preload

    p.preload = function () {
      dharmaFont = p.loadFont("/fonts/dharma/dharma_regular.ttf");
    }; // _________________________________________________
    // Setup


    p.setup = function () {
      // Our Canvas
      // p.createCanvas(W, H, p.WEBGL);
      p.createCanvas(W, H);
    }; // _________________________________________________
    // Draw


    p.draw = function () {
      // rect gives us some geometry on the screen
      p.background(BG);
      p.textFont(dharmaFont);
      p.textLeading(0);
      p.textSize(H * 1.25);
      p.fill("".concat(_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Color.Galaxy));
      p.strokeWeight(40);
      p.stroke("white");
      characters.map(function (_char, idx) {
        var countArray = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(Array(_char.count).keys());

        return countArray.map(function (duplicate, idxx) {
          p.text(_char.letter, // W / -2 + characterWidth / 2 + characterWidth * idx,
          characterWidth * idx + characterWidth / 2, -40);
        });
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
//# sourceMappingURL=p6.js.dd1080a13b737b873bd6.hot-update.js.map