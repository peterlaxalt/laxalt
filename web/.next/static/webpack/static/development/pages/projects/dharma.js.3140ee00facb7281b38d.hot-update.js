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
        countIsIncrementing: true,
        countIsDecrementing: false,
        copiesAreIncrementing: true,
        copiesAreDecrementing: false
      };
    });
    var characterCount = splitCharacterArray.length;
    var characterWidth = W / characterCount;
    var characterSize = H * 1.25;
    console.log(characterSize, "characterSize"); // ____________________________
    // Counts
    // let renderCount: number = 0;

    var previousCountUpdateTime = 0;
    var previousCopyUpdateTime = 0; // ____________________________
    // Strokes

    var strokeWidth = 4;
    var strokeOffset = strokeWidth * 1.5; // ____________________________
    // Limits

    var maxCount = 6;
    var minCount = 1;
    var maxCopies = 12;
    var minCopies = 1; // ____________________________
    // Translation
    // let previousVerticalTranslation: number = H / 2.25;

    var verticalTranslationWhitespaceCompensation = 2.25;

    var previousHorizontalTranslation = function previousHorizontalTranslation(idx) {
      return -60 + (characterWidth * idx + characterWidth / 1.5 + strokeOffset);
    }; // _________________________________________________
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
      if (_char.count < maxCount && _char.countIsIncrementing) {
        characters[idx] = _objectSpread({}, _char, {
          count: _char.count + 1
        });
        previousCountUpdateTime = p.millis();
        return;
      } else if (_char.count === maxCount) {
        characters[idx] = _objectSpread({}, _char, {
          count: _char.count - 1,
          countIsIncrementing: false,
          countIsDecrementing: true
        });
        previousCountUpdateTime = p.millis();
        return;
      } else if (_char.count > minCount && _char.countIsDecrementing) {
        characters[idx] = _objectSpread({}, _char, {
          count: _char.count - 1,
          countIsDecrementing: true
        });
        previousCountUpdateTime = p.millis();
        return;
      } else if (_char.count === minCount && _char.countIsDecrementing) {
        characters[idx] = _objectSpread({}, _char, {
          count: _char.count + 1,
          countIsIncrementing: true,
          countIsDecrementing: false
        });
        previousCountUpdateTime = p.millis();
        return;
      }

      return;
    }; // _________________________________________________
    // Update Copies


    var updateCopies = function updateCopies(_char2, idx) {
      if (_char2.copies < maxCopies && _char2.copiesAreIncrementing) {
        characters[idx] = _objectSpread({}, _char2, {
          copies: _char2.copies + 1
        });
        previousCopyUpdateTime = p.millis();
        return;
      } else if (_char2.copies === maxCopies) {
        characters[idx] = _objectSpread({}, _char2, {
          copies: _char2.copies - 1,
          copiesAreIncrementing: false,
          copiesAreDecrementing: true
        });
        previousCopyUpdateTime = p.millis();
        return;
      } else if (_char2.copies > minCopies && _char2.copiesAreDecrementing) {
        characters[idx] = _objectSpread({}, _char2, {
          copies: _char2.copies - 1,
          copiesAreDecrementing: true
        });
        previousCopyUpdateTime = p.millis();
        return;
      } else if (_char2.copies === minCopies && _char2.copiesAreDecrementing) {
        characters[idx] = _objectSpread({}, _char2, {
          copies: _char2.copies + 1,
          copiesAreIncrementing: true,
          copiesAreDecrementing: false
        });
        previousCopyUpdateTime = p.millis();
        return;
      }

      return;
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
        characters.map(function (_char3, idx) {
          p.scale(1, 1);
          var randomCharPick = Math.random() <= 0.5;

          if (randomCharPick) {
            console.log("yep");
            updateCopies(_char3, idx);
          } else {
            console.log("nope");
          }

          if (randomCharPick && p.millis() - previousCountUpdateTime > 3000) {
            updateCharacter(_char3, idx);
          }

          var countArray = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_6___default()(Array(_char3.count).keys());

          countArray = countArray.map(function (countNumber) {
            return countNumber + 1;
          }); // _________________________________________
          // Duplicate positions

          countArray.map(function (countNumber, idxx) {
            var verticalScale = 1 / (_char3.count * 0.95);
            var verticalSkewDivisible = 2.75;
            var characterSkewDivisible = 1.36;
            var duplicateVerticalPosition = _char3.count == 1 ? H / verticalTranslationWhitespaceCompensation : characterSize / verticalSkewDivisible + characterSize / characterSkewDivisible * idxx; // _________________________________________
            // Make copies

            var copiesArray = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_6___default()(Array(_char3.copies).keys()); // let randomCopyPick = Math.random() <= 0.5;


            copiesArray = copiesArray.map(function (copyNumber) {
              return copyNumber + 1;
            });
            var randomCopyPick = Math.random() <= 0.5;
            var copyTimer = p.millis() - previousCopyUpdateTime > 2000;
            var isFirstCount = true;
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

              if (isFirstCount) {
                p.push();
                p.scale(1, verticalScale);
                p.text(_char3.letter, horizontalTranslate, verticalTranslate);
                p.pop();
                isFirstCount = false;
                previousCopyUpdateTime = p.millis();
              } else if (randomCopyPick && copyTimer) {
                p.push();
                p.scale(1, verticalScale);
                p.text(_char3.letter, horizontalTranslate, verticalTranslate);
                p.pop();
              } else {
                return null;
              }
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
//# sourceMappingURL=dharma.js.3140ee00facb7281b38d.hot-update.js.map