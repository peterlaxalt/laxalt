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
    // ____________________________
    // Fonts
    var dharmaFont; // ____________________________
    // Typography

    var text = "LAXALT";
    var splitCharacterArray = text.split("");
    var characters = splitCharacterArray.map(function (character, idx) {
      return {
        letter: character,
        count: 1,
        idx: idx,
        copies: 1
      };
    });
    var characterCount = splitCharacterArray.length;
    var characterWidth = W / characterCount;
    var characterSize = H * 1.25; // ____________________________
    // Counts

    var renderCount = 0; // ____________________________
    // Strokes

    var strokeWidth = 4;
    var strokeOffset = strokeWidth * 3; // ____________________________
    // Incrementing
    // let maxCopies = 30;
    // let minCopies = 1;

    var isIncrementing = true;
    isIncrementing; // ____________________________
    // Translation
    // let previousVerticalTranslation: number = H / 2.25;

    var previousHorizontalTranslation = function previousHorizontalTranslation(idx) {
      return characterWidth * idx + characterWidth / 2 + strokeOffset;
    }; // const previousHorizontalTranslation = (idx: number) =>
    //   characterWidth * idx + characterWidth / 2 + strokeOffset * renderCount;
    // let characterVerticalTranslation = 0.963; // Multiplied by the viewBoxHeight
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
      p.createCanvas(W, H);
    }; // _________________________________________________
    // Draw


    p.draw = function () {
      // p.background(BG);
      p.textFont(dharmaFont);
      p.textLeading(0);
      p.textSize(characterSize);
      p.textAlign(p.CENTER, p.CENTER);
      p.fill("".concat(_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Color.Galaxy));
      p.strokeWeight(strokeWidth);
      p.stroke(BG);
      p.mouseIsPressed ? renderCount = renderCount + 1 : renderCount = renderCount;

      if (H && W) {
        characters.map(function (_char, idx) {
          p.scale(1, 1);

          var countArray = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(Array(_char.count).keys()); // let verticalDivisble: number = 10;
          // let verticalPosition: number = H / verticalDivisble;
          // p.scale(1, 0.5);


          countArray.map(function (duplicate, idxx) {
            // let adjustedDuplicate = char.count > 1 ? char.count : duplicate + 1;
            // let verticalScale = char.count > 0 ? H / char.count / H : 1;
            var verticalScale = 0.5; // let duplicateVerticalPosition = (characterSize * verticalScale * idxx) * char.count;
            // let duplicateVerticalPosition = (H / 2.25 + characterSize * 0.01) * 3;
            // console.log("duplicateVerticalPosition", duplicateVerticalPosition);
            // console.log("H", H);
            // console.log("characterSize", characterSize);

            var duplicateVerticalPosition = H / 2.25;
            p.push();
            p.scale(1, verticalScale);
            p.text(_char.letter, previousHorizontalTranslation(idx), duplicateVerticalPosition);
            p.pop();
          });
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
//# sourceMappingURL=dharma.js.d6a85c10aaf907549610.hot-update.js.map