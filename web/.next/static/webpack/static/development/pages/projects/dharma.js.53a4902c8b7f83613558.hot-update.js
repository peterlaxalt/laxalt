webpackHotUpdate("static/development/pages/projects/dharma.js",{

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
    var renderCount = 0;
    var strokeWidth = 2;
    var strokeOffset = strokeWidth * 3;
    var isIncrementing = true;
    var previousVerticalTranslation = H / 2.25;

    var previousHorizontalTranslation = function previousHorizontalTranslation(idx) {
      return characterWidth * idx + characterWidth / 2 + strokeOffset * renderCount;
    };

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
      p.createCanvas(W, H); // p.createCanvas(W, H);
    }; // _________________________________________________
    // Draw


    p.draw = function () {
      // rect gives us some geometry on the screen
      // p.background(BG);
      p.textFont(dharmaFont);
      p.textLeading(0);
      p.textSize(H * 1.25);
      p.textAlign(p.CENTER, p.CENTER);
      p.fill("".concat(_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Color.Galaxy));
      p.strokeWeight(strokeWidth);
      p.stroke(BG);
      p.mouseIsPressed ? renderCount = renderCount + 1 : renderCount = renderCount;

      if (H && W) {
        characters.map(function (_char, idx) {
          var countArray = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(Array(_char.count).keys());

          if (p.mouseIsPressed) {
            if (_char.letter == "L") {
              return countArray.map(function (duplicate, idxx) {
                previousVerticalTranslation = H / 2.25 + strokeOffset * renderCount * -1;
                p.text(_char.letter, previousHorizontalTranslation(idx), previousVerticalTranslation);
              });
            } else {
              return countArray.map(function (duplicate, idxx) {
                p.text(_char.letter, previousHorizontalTranslation(idx), previousVerticalTranslation);
              });
            }
          } else {
            return countArray.map(function (duplicate, idxx) {
              p.text(_char.letter, previousHorizontalTranslation(idx), previousVerticalTranslation);
            });
          }
        });
      }
    };

    p.windowResized = function () {
      p.resizeCanvas(W, H);
    };
  };
};

/* harmony default export */ __webpack_exports__["default"] = (DharmaCanvasDisplay);

/***/ })

})
//# sourceMappingURL=dharma.js.53a4902c8b7f83613558.hot-update.js.map