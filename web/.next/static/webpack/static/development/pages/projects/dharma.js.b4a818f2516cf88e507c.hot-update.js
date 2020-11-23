webpackHotUpdate("static/development/pages/projects/dharma.js",{

/***/ "./sketches/p5 sync recursive ^\\.\\/.*$":
/*!***********************************!*\
  !*** ./sketches/p5 sync ^\.\/.*$ ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./d1": "./sketches/p5/d1.tsx",
	"./d1.tsx": "./sketches/p5/d1.tsx",
	"./d2": "./sketches/p5/d2.tsx",
	"./d2.tsx": "./sketches/p5/d2.tsx",
	"./d8": "./sketches/p5/d8.js",
	"./d8.js": "./sketches/p5/d8.js",
	"./dharma": "./sketches/p5/dharma.tsx",
	"./dharma.tsx": "./sketches/p5/dharma.tsx",
	"./dharma_v0": "./sketches/p5/dharma_v0.tsx",
	"./dharma_v0.tsx": "./sketches/p5/dharma_v0.tsx",
	"./glsl": "./sketches/p5/glsl.tsx",
	"./glsl.tsx": "./sketches/p5/glsl.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./sketches/p5 sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./sketches/p5/dharma v0.tsx":
false,

/***/ "./sketches/p5/dharma_v0.tsx":
/*!***********************************!*\
  !*** ./sketches/p5/dharma_v0.tsx ***!
  \***********************************/
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
    var characterWidth = W / characterCount; // ____________________________
    // Counts

    var renderCount = 0; // ____________________________
    // Strokes

    var strokeWidth = 2;
    var strokeOffset = strokeWidth * 3; // ____________________________
    // Incrementing
    // let maxCopies = 30;
    // let minCopies = 1;

    var isIncrementing = true;
    isIncrementing; // ____________________________
    // Translation

    var previousVerticalTranslation = H / 2.25;

    var previousHorizontalTranslation = function previousHorizontalTranslation(idx) {
      return characterWidth * idx + characterWidth / 2 + strokeOffset * renderCount;
    }; // let characterVerticalTranslation = 0.963; // Multiplied by the viewBoxHeight
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
      p.textSize(H * 1.25);
      p.textAlign(p.CENTER, p.CENTER);
      p.fill("".concat(_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Color.Galaxy));
      p.strokeWeight(strokeWidth);
      p.stroke(BG);
      p.mouseIsPressed ? renderCount = renderCount + 1 : renderCount = renderCount;

      if (H && W) {
        characters.map(function (_char, idx) {
          var countArray = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(Array(_char.count).keys());

          p.scale(1, .5);

          if (p.mouseIsPressed) {
            return countArray.map(function (duplicate, idxx) {
              previousVerticalTranslation = H / 2.25 + strokeOffset * renderCount * -1;
              p.text(_char.letter, previousHorizontalTranslation(idx), previousVerticalTranslation);
            });
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
//# sourceMappingURL=dharma.js.b4a818f2516cf88e507c.hot-update.js.map