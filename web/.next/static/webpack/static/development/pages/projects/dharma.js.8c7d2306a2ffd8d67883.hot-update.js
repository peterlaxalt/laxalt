webpackHotUpdate("static/development/pages/projects/dharma.js",{

/***/ "./sketches/p5/dharma.tsx":
/*!********************************!*\
  !*** ./sketches/p5/dharma.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants/Theme */ "./constants/Theme.tsx");









function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }

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
        copies: 5,
        isIncrementing: true,
        isDecrementing: false
      };
    });
    var characterCount = splitCharacterArray.length;
    var characterWidth = W / characterCount;
    var characterSize = H * 1.25;
    console.log(characterSize, "characterSize"); // ____________________________
    // Counts
    // let renderCount: number = 0;

    var previousTime = 0; // ____________________________
    // Strokes

    var strokeWidth = 4;
    var strokeOffset = strokeWidth * 1.5; // ____________________________
    // Incrementing

    var maxCount = 6;
    var minCount = 1; // ____________________________
    // Translation
    // let previousVerticalTranslation: number = H / 2.25;

    var verticalTranslationWhitespaceCompensation = 2.25;

    var previousHorizontalTranslation = function previousHorizontalTranslation(idx) {
      return -60 + (characterWidth * idx + characterWidth / 1.5 + strokeOffset);
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
    // Update Character


    var updateCharacter = function updateCharacter(_char, idx) {
      if (_char.count < maxCount && _char.isIncrementing) {
        characters[idx] = _objectSpread({}, _char, {
          count: _char.count + 1
        });
        previousTime = p.millis();
      } else if (_char.count === maxCount) {
        characters[idx] = _objectSpread({}, _char, {
          count: _char.count - 1,
          isIncrementing: false,
          isDecrementing: true
        });
        previousTime = p.millis();
      } else if (_char.count > minCount && _char.isDecrementing) {
        characters[idx] = _objectSpread({}, _char, {
          count: _char.count - 1,
          isDecrementing: true
        });
        previousTime = p.millis();
      } else if (_char.count === minCount && _char.isDecrementing) {
        characters[idx] = _objectSpread({}, _char, {
          count: _char.count + 1,
          isIncrementing: true,
          isDecrementing: false
        });
        previousTime = p.millis();
      }
    }; // _________________________________________________
    // Draw


    p.draw = function () {
      p.background(BG);
      p.textFont(dharmaFont);
      p.textSize(characterSize);
      p.textAlign(p.CENTER, p.CENTER);
      p.fill("".concat(_constants_Theme__WEBPACK_IMPORTED_MODULE_8__["Theme"].Color.Galaxy));
      p.strokeWeight(strokeWidth);
      p.stroke(BG);

      if (H && W) {
        // _________________________________________
        // Loop through our copies
        characters.map(function (_char2, idx) {
          p.scale(1, 1);
          var randomCharPick = Math.random() <= 0.5;

          if (randomCharPick && p.millis() - previousTime > 3000) {
            updateCharacter(_char2, idx);
          }

          var countArray = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_6___default()(Array(_char2.count).keys());

          countArray = countArray.map(function (countNumber) {
            return countNumber + 1;
          }); // _________________________________________
          // Duplicate positions

          countArray.map(function (countNumber, idxx) {
            var verticalScale = 1 / (_char2.count * 0.95);
            var verticalSkewDivisible = 2.75;
            var characterSkewDivisible = 1.36;
            var duplicateVerticalPosition = _char2.count == 1 ? H / verticalTranslationWhitespaceCompensation : characterSize / verticalSkewDivisible + characterSize / characterSkewDivisible * idxx; // _________________________________________
            // Make copies

            var copiesArray = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_6___default()(Array(_char2.copies).keys()); // let randomCopyPick = Math.random() <= 0.5;


            copiesArray = copiesArray.map(function (copyNumber) {
              return copyNumber + 1;
            });
            copiesArray.map(function (copyNumber, idxxx) {
              // let centerCoordsX = W / 2;
              // let centerCoordsY = H / 2;
              // let horizontalTranslate =
              //   copyNumber !== 1
              //     ? (previousHorizontalTranslation(idx) +
              //         (strokeOffset / (p.mouseX / 100)) * copyNumber)
              //     : previousHorizontalTranslation(idx) +
              //       strokeOffset * copyNumber;
              // let verticalTranslate =
              //   copyNumber !== 1
              //     ? (duplicateVerticalPosition - (strokeOffset / (p.mouseX / 100)) * copyNumber)
              //     : duplicateVerticalPosition - strokeOffset * copyNumber;
              var horizontalTranslate = previousHorizontalTranslation(idx) + strokeOffset * copyNumber;
              var verticalTranslate = duplicateVerticalPosition - strokeOffset * copyNumber;
              p.push();
              p.scale(1, verticalScale);
              p.text(_char2.letter, horizontalTranslate, verticalTranslate);
              p.pop();
            });
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
//# sourceMappingURL=dharma.js.8c7d2306a2ffd8d67883.hot-update.js.map