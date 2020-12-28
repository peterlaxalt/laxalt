webpackHotUpdate_N_E("pages/index",{

/***/ "./sketches/p5/no-water-distort.canvas.tsx":
/*!*************************************************!*\
  !*** ./sketches/p5/no-water-distort.canvas.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/**\n *\n * Shader fun\n * @author Peter Laxalt\n *\n */\n// Begin Component\n// __________________________________________________________________________\nvar DharmaCanvasDisplay = function DharmaCanvasDisplay(W, H, ID, // DharmaTheme,\nparentEl) {\n  return function (p) {\n    // _________________________________________________\n    // Config\n    var canvas; // ____________________________\n    // Fonts\n\n    var dharmaFont; // ____________________________\n    // Typography\n\n    var text = \"LAXALT\";\n    var splitCharacterArray = text.split(\"\");\n    var characters = splitCharacterArray.map(function (character, idx) {\n      return {\n        letter: character,\n        count: 1,\n        idx: idx,\n        copies: 5,\n        copiesLastVisible: 0,\n        copiesAreVisible: false,\n        countIsIncrementing: true,\n        countIsDecrementing: false,\n        copiesAreIncrementing: true,\n        copiesAreDecrementing: false\n      };\n    });\n    var characterCount = splitCharacterArray.length;\n    var characterWidth = W / characterCount;\n    var characterSize = H * 1.15;\n    var verticalSkewDivisible = 2.75;\n    var characterSkewDivisible = 1.36;\n    console.log(characterSize, \"characterSize\"); // ____________________________\n    // Counts\n    // let renderCount: number = 0;\n\n    var previousCountUpdateTime = 0;\n    var previousCopyUpdateTime = 0; // ____________________________\n    // Strokes\n\n    var strokeWidth = 4;\n    var strokeOffset = strokeWidth * 1.5; // ____________________________\n    // Limits\n\n    var maxCount = 3;\n    var minCount = 1;\n    var maxCopies = 12;\n    var minCopies = 1;\n    var frameRate = 60; // ____________________________\n    // Translation\n    // let previousVerticalTranslation: number = H / 2.25;\n\n    var verticalTranslationWhitespaceCompensation = 2.25;\n\n    var previousHorizontalTranslation = function previousHorizontalTranslation(idx) {\n      return -60 + (characterWidth * idx + characterWidth / 1.5 + strokeOffset);\n    }; // _________________________________________________\n    // Preload\n\n\n    p.preload = function () {\n      dharmaFont = p.loadFont(\"/fonts/dharma/dharma_regular.ttf\");\n    }; // _________________________________________________\n    // Setup\n\n\n    p.setup = function () {\n      // Our Canvas\n      canvas = p.createCanvas(W, H); // ThreeWaterCanvas(parentEl, canvas.elt);\n\n      p.frameRate(frameRate);\n\n      if (window.devicePixelRatio > 1 && window.devicePixelRatio < 3) {\n        p.pixelDensity(1.25);\n      }\n    }; // _________________________________________________\n    // Update Character\n\n\n    var updateCharacter = function updateCharacter(_char, idx) {\n      if (_char.count < maxCount && _char.countIsIncrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char), {}, {\n          count: _char.count + 1\n        });\n        previousCountUpdateTime = p.millis();\n        return;\n      } else if (_char.count === maxCount) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char), {}, {\n          count: _char.count - 1,\n          countIsIncrementing: false,\n          countIsDecrementing: true\n        });\n        previousCountUpdateTime = p.millis();\n        return;\n      } else if (_char.count > minCount && _char.countIsDecrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char), {}, {\n          count: _char.count - 1,\n          countIsDecrementing: true\n        });\n        previousCountUpdateTime = p.millis();\n        return;\n      } else if (_char.count === minCount && _char.countIsDecrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char), {}, {\n          count: _char.count + 1,\n          countIsIncrementing: true,\n          countIsDecrementing: false\n        });\n        previousCountUpdateTime = p.millis();\n        return;\n      }\n\n      return;\n    }; // _________________________________________________\n    // Update Copies\n\n\n    var updateCopies = function updateCopies(_char2, idx) {\n      if (_char2.copies < maxCopies && _char2.copiesAreIncrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char2), {}, {\n          copies: _char2.copies + 1\n        });\n        previousCopyUpdateTime = p.millis();\n        return;\n      } else if (_char2.copies === maxCopies) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char2), {}, {\n          copies: _char2.copies - 1,\n          copiesAreIncrementing: false,\n          copiesAreDecrementing: true\n        });\n        previousCopyUpdateTime = p.millis();\n        return;\n      } else if (_char2.copies > minCopies && _char2.copiesAreDecrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char2), {}, {\n          copies: _char2.copies - 1,\n          copiesAreDecrementing: true\n        });\n        previousCopyUpdateTime = p.millis();\n        return;\n      } else if (_char2.copies === minCopies && _char2.copiesAreDecrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char2), {}, {\n          copies: _char2.copies + 1,\n          copiesAreIncrementing: true,\n          copiesAreDecrementing: false\n        });\n        previousCopyUpdateTime = p.millis();\n        return;\n      }\n\n      return;\n    }; // _________________________________________________\n    // Draw\n\n\n    p.draw = function () {\n      p.background(window.laxaltUniversalTheme.background);\n\n      if (p.frameCount % 10 === 0) {\n        p.textFont(dharmaFont);\n        p.textSize(characterSize);\n        p.textAlign(p.CENTER, p.CENTER);\n        p.fill(\"\".concat(window.laxaltUniversalTheme.foreground));\n        p.strokeWeight(strokeWidth);\n        p.stroke(window.laxaltUniversalTheme.background);\n\n        if (H && W) {\n          // _________________________________________\n          // Loop through our copies\n          characters.map(function (_char3, idx) {\n            p.scale(1, 1);\n            var randomCharPick = Math.random() <= 0.5;\n\n            if (randomCharPick) {\n              updateCopies(_char3, idx);\n            }\n\n            if (randomCharPick && p.millis() - previousCountUpdateTime > 3000) {\n              updateCharacter(_char3, idx);\n            }\n\n            var countArray = Array.from(Array(_char3.count).keys());\n            countArray = countArray.map(function (countNumber) {\n              return countNumber + 1;\n            }); // _________________________________________\n            // Duplicate positions\n\n            countArray.map(function (countNumber, idxx) {\n              var verticalScale = 1 / (_char3.count * 0.95);\n              var duplicateVerticalPosition = _char3.count == 1 ? H / verticalTranslationWhitespaceCompensation : characterSize / verticalSkewDivisible + characterSize / characterSkewDivisible * idxx; // _________________________________________\n              // Make copies\n\n              var copiesArray = Array.from(Array(_char3.copies).keys()); // let randomCopyPick = Math.random() <= 0.5;\n\n              copiesArray = copiesArray.map(function (copyNumber) {\n                return copyNumber + 1;\n              }); // let randomCopyPick = Math.random() <= 0.5;\n              // let copyTimer = p.millis() - previousCopiesVisibleTime > 2000;\n\n              previousCopyUpdateTime; // let isFirstCount = true;\n\n              copiesArray.map(function (copyNumber, idxxx) {\n                // let centerCoordsX = W / 2;\n                // let centerCoordsY = H / 2;\n                // let horizontalTranslate =\n                //   copyNumber !== 1\n                //     ? (previousHorizontalTranslation(idx) +\n                //         (strokeOffset / (p.mouseX / 100)) * copyNumber)\n                //     : previousHorizontalTranslation(idx) +\n                //       strokeOffset * copyNumber;\n                // let verticalTranslate =\n                //   copyNumber !== 1\n                //     ? (duplicateVerticalPosition - (strokeOffset / (p.mouseX / 100)) * copyNumber)\n                //     : duplicateVerticalPosition - strokeOffset * copyNumber;\n                var horizontalTranslate = previousHorizontalTranslation(idx) + strokeOffset * copyNumber;\n                var verticalTranslate = duplicateVerticalPosition - strokeOffset * copyNumber;\n                p.push();\n                p.scale(1, verticalScale);\n                p.text(_char3.letter, horizontalTranslate, verticalTranslate);\n                p.pop();\n              });\n            });\n          });\n        }\n      }\n    };\n\n    p.windowResized = function () {\n      p.resizeCanvas(W, H);\n    };\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DharmaCanvasDisplay);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2tldGNoZXMvcDUvbm8td2F0ZXItZGlzdG9ydC5jYW52YXMudHN4PzBhMTQiXSwibmFtZXMiOlsiRGhhcm1hQ2FudmFzRGlzcGxheSIsIlciLCJIIiwiSUQiLCJwYXJlbnRFbCIsInAiLCJjYW52YXMiLCJkaGFybWFGb250IiwidGV4dCIsInNwbGl0Q2hhcmFjdGVyQXJyYXkiLCJzcGxpdCIsImNoYXJhY3RlcnMiLCJtYXAiLCJjaGFyYWN0ZXIiLCJpZHgiLCJsZXR0ZXIiLCJjb3VudCIsImNvcGllcyIsImNvcGllc0xhc3RWaXNpYmxlIiwiY29waWVzQXJlVmlzaWJsZSIsImNvdW50SXNJbmNyZW1lbnRpbmciLCJjb3VudElzRGVjcmVtZW50aW5nIiwiY29waWVzQXJlSW5jcmVtZW50aW5nIiwiY29waWVzQXJlRGVjcmVtZW50aW5nIiwiY2hhcmFjdGVyQ291bnQiLCJsZW5ndGgiLCJjaGFyYWN0ZXJXaWR0aCIsImNoYXJhY3RlclNpemUiLCJ2ZXJ0aWNhbFNrZXdEaXZpc2libGUiLCJjaGFyYWN0ZXJTa2V3RGl2aXNpYmxlIiwiY29uc29sZSIsImxvZyIsInByZXZpb3VzQ291bnRVcGRhdGVUaW1lIiwicHJldmlvdXNDb3B5VXBkYXRlVGltZSIsInN0cm9rZVdpZHRoIiwic3Ryb2tlT2Zmc2V0IiwibWF4Q291bnQiLCJtaW5Db3VudCIsIm1heENvcGllcyIsIm1pbkNvcGllcyIsImZyYW1lUmF0ZSIsInZlcnRpY2FsVHJhbnNsYXRpb25XaGl0ZXNwYWNlQ29tcGVuc2F0aW9uIiwicHJldmlvdXNIb3Jpem9udGFsVHJhbnNsYXRpb24iLCJwcmVsb2FkIiwibG9hZEZvbnQiLCJzZXR1cCIsImNyZWF0ZUNhbnZhcyIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJwaXhlbERlbnNpdHkiLCJ1cGRhdGVDaGFyYWN0ZXIiLCJjaGFyIiwibWlsbGlzIiwidXBkYXRlQ29waWVzIiwiZHJhdyIsImJhY2tncm91bmQiLCJsYXhhbHRVbml2ZXJzYWxUaGVtZSIsImZyYW1lQ291bnQiLCJ0ZXh0Rm9udCIsInRleHRTaXplIiwidGV4dEFsaWduIiwiQ0VOVEVSIiwiZmlsbCIsImZvcmVncm91bmQiLCJzdHJva2VXZWlnaHQiLCJzdHJva2UiLCJzY2FsZSIsInJhbmRvbUNoYXJQaWNrIiwiTWF0aCIsInJhbmRvbSIsImNvdW50QXJyYXkiLCJBcnJheSIsImZyb20iLCJrZXlzIiwiY291bnROdW1iZXIiLCJpZHh4IiwidmVydGljYWxTY2FsZSIsImR1cGxpY2F0ZVZlcnRpY2FsUG9zaXRpb24iLCJjb3BpZXNBcnJheSIsImNvcHlOdW1iZXIiLCJpZHh4eCIsImhvcml6b250YWxUcmFuc2xhdGUiLCJ2ZXJ0aWNhbFRyYW5zbGF0ZSIsInB1c2giLCJwb3AiLCJ3aW5kb3dSZXNpemVkIiwicmVzaXplQ2FudmFzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFrQ0EsSUFBTUEsbUJBQTZDLEdBQUcsU0FBaERBLG1CQUFnRCxDQUNwREMsQ0FEb0QsRUFFcERDLENBRm9ELEVBR3BEQyxFQUhvRCxFQUlwRDtBQUNBQyxRQUxvRDtBQUFBLFNBTWpELFVBQUNDLENBQUQsRUFBVztBQUNkO0FBQ0E7QUFFQSxRQUFJQyxNQUFKLENBSmMsQ0FNZDtBQUNBOztBQUNBLFFBQUlDLFVBQUosQ0FSYyxDQVVkO0FBQ0E7O0FBQ0EsUUFBSUMsSUFBSSxHQUFHLFFBQVg7QUFFQSxRQUFJQyxtQkFBbUIsR0FBR0QsSUFBSSxDQUFDRSxLQUFMLENBQVcsRUFBWCxDQUExQjtBQUNBLFFBQUlDLFVBQW1DLEdBQUdGLG1CQUFtQixDQUFDRyxHQUFwQixDQUN4QyxVQUFDQyxTQUFELEVBQW9CQyxHQUFwQixFQUFvQztBQUNsQyxhQUFPO0FBQ0xDLGNBQU0sRUFBRUYsU0FESDtBQUVMRyxhQUFLLEVBQUUsQ0FGRjtBQUdMRixXQUFHLEVBQUVBLEdBSEE7QUFLTEcsY0FBTSxFQUFFLENBTEg7QUFNTEMs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Q0FBQzZELEtBQUYsQ0FBUSxDQUFSLEVBQVdVLGFBQVg7QUFDQXZFLGlCQUFDLENBQUNHLElBQUYsQ0FBTzJDLE1BQUksQ0FBQ3BDLE1BQVosRUFBb0JrRSxtQkFBcEIsRUFBeUNDLGlCQUF6QztBQUNBN0UsaUJBQUMsQ0FBQytFLEdBQUY7QUFDRCxlQTFCRDtBQTJCRCxhQW5ERDtBQW9ERCxXQXpFRDtBQTBFRDtBQUNGO0FBQ0YsS0EvRkQ7O0FBaUdBL0UsS0FBQyxDQUFDZ0YsYUFBRixHQUFrQixZQUFNO0FBQ3RCaEYsT0FBQyxDQUFDaUYsWUFBRixDQUFlckYsQ0FBZixFQUFrQkMsQ0FBbEI7QUFDRCxLQUZEO0FBR0QsR0E1U3FEO0FBQUEsQ0FBdEQ7O0FBOFNlRixrRkFBZiIsImZpbGUiOiIuL3NrZXRjaGVzL3A1L25vLXdhdGVyLWRpc3RvcnQuY2FudmFzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqIFNoYWRlciBmdW5cbiAqIEBhdXRob3IgUGV0ZXIgTGF4YWx0XG4gKlxuICovXG5cbmltcG9ydCBwNSwgeyBGb250IH0gZnJvbSBcInA1XCI7XG5pbXBvcnQgeyBUaHJlZVdhdGVyQ2FudmFzIH0gZnJvbSBcIi4uL3RocmVlL3RocmVlLXdhdGVyLWRpc3RvcnQuY2FudmFzXCI7XG5cbi8vIEJlZ2luIENvbXBvbmVudFxuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cblxuZXhwb3J0IHR5cGUgTFhMVF9EaGFybWFDYW52YXMgPSB7XG4gIFc6IG51bWJlcjtcbiAgSDogbnVtYmVyO1xuICBJRDogbnVtYmVyO1xuICAvLyBCRzogTFhMVF9Db2xvclRoZW1lO1xuICBwYXJlbnRFbDogSFRNTERpdkVsZW1lbnQ7XG59O1xuXG5leHBvcnQgdHlwZSBMWExUX0RoYXJtYUNhbnZhc0Rpc3BsYXkgPSAoXG4gIFc6IG51bWJlcixcbiAgSDogbnVtYmVyLFxuICBJRDogbnVtYmVyLFxuICAvLyBCRzogTFhMVF9Db2xvclRoZW1lLFxuICBwYXJlbnRFbDogSFRNTERpdkVsZW1lbnRcbikgPT4gKHA6IHA1KSA9PiB2b2lkO1xuXG50eXBlIExYTFRfRGhhcm1hQ2FudmFzQ2hhciA9IHtcbiAgbGV0dGVyOiBzdHJpbmc7XG4gIGNvdW50OiBudW1iZXI7XG4gIGlkeDogbnVtYmVyO1xuXG4gIGNvcGllczogbnVtYmVyO1xuICBjb3BpZXNMYXN0VmlzaWJsZTogbnVtYmVyO1xuICBjb3BpZXNBcmVWaXNpYmxlOiBib29sZWFuO1xuXG4gIGNvcGllc0FyZUluY3JlbWVudGluZzogYm9vbGVhbjtcbiAgY29waWVzQXJlRGVjcmVtZW50aW5nOiBib29sZWFuO1xuXG4gIGNvdW50SXNJbmNyZW1lbnRpbmc6IGJvb2xlYW47XG4gIGNvdW50SXNEZWNyZW1lbnRpbmc6IGJvb2xlYW47XG59O1xuXG5jb25zdCBEaGFybWFDYW52YXNEaXNwbGF5OiBMWExUX0RoYXJtYUNhbnZhc0Rpc3BsYXkgPSAoXG4gIFcsXG4gIEgsXG4gIElELFxuICAvLyBEaGFybWFUaGVtZSxcbiAgcGFyZW50RWxcbikgPT4gKHA6IHA1KSA9PiB7XG4gIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gQ29uZmlnXG5cbiAgbGV0IGNhbnZhcztcblxuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIEZvbnRzXG4gIGxldCBkaGFybWFGb250OiBGb250O1xuXG4gIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gVHlwb2dyYXBoeVxuICBsZXQgdGV4dCA9IFwiTEFYQUxUXCI7XG5cbiAgbGV0IHNwbGl0Q2hhcmFjdGVyQXJyYXkgPSB0ZXh0LnNwbGl0KFwiXCIpO1xuICBsZXQgY2hhcmFjdGVyczogTFhMVF9EaGFybWFDYW52YXNDaGFyW10gPSBzcGxpdENoYXJhY3RlckFycmF5Lm1hcChcbiAgICAoY2hhcmFjdGVyOiBzdHJpbmcsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsZXR0ZXI6IGNoYXJhY3RlcixcbiAgICAgICAgY291bnQ6IDEsXG4gICAgICAgIGlkeDogaWR4LFxuXG4gICAgICAgIGNvcGllczogNSxcbiAgICAgICAgY29waWVzTGFzdFZpc2libGU6IDAsXG4gICAgICAgIGNvcGllc0FyZVZpc2libGU6IGZhbHNlLFxuXG4gICAgICAgIGNvdW50SXNJbmNyZW1lbnRpbmc6IHRydWUsXG4gICAgICAgIGNvdW50SXNEZWNyZW1lbnRpbmc6IGZhbHNlLFxuXG4gICAgICAgIGNvcGllc0FyZUluY3JlbWVudGluZzogdHJ1ZSxcbiAgICAgICAgY29waWVzQXJlRGVjcmVtZW50aW5nOiBmYWxzZSxcbiAgICAgIH07XG4gICAgfVxuICApO1xuXG4gIGxldCBjaGFyYWN0ZXJDb3VudDogbnVtYmVyID0gc3BsaXRDaGFyYWN0ZXJBcnJheS5sZW5ndGg7XG4gIGxldCBjaGFyYWN0ZXJXaWR0aDogbnVtYmVyID0gVyAvIGNoYXJhY3RlckNvdW50O1xuICBsZXQgY2hhcmFjdGVyU2l6ZTogbnVtYmVyID0gSCAqIDEuMTU7XG5cbiAgbGV0IHZlcnRpY2FsU2tld0RpdmlzaWJsZTogbnVtYmVyID0gMi43NTtcbiAgbGV0IGNoYXJhY3RlclNrZXdEaXZpc2libGU6IG51bWJlciA9IDEuMzY7XG5cbiAgY29uc29sZS5sb2coY2hhcmFjdGVyU2l6ZSwgXCJjaGFyYWN0ZXJTaXplXCIpO1xuXG4gIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gQ291bnRzXG4gIC8vIGxldCByZW5kZXJDb3VudDogbnVtYmVyID0gMDtcbiAgbGV0IHByZXZpb3VzQ291bnRVcGRhdGVUaW1lOiBudW1iZXIgPSAwO1xuICBsZXQgcHJldmlvdXNDb3B5VXBkYXRlVGltZTogbnVtYmVyID0gMDtcblxuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIFN0cm9rZXNcbiAgbGV0IHN0cm9rZVdpZHRoOiBudW1iZXIgPSA0O1xuICBsZXQgc3Ryb2tlT2Zmc2V0OiBudW1iZXIgPSBzdHJva2VXaWR0aCAqIDEuNTtcblxuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIExpbWl0c1xuICBsZXQgbWF4Q291bnQgPSAzO1xuICBsZXQgbWluQ291bnQgPSAxO1xuXG4gIGxldCBtYXhDb3BpZXMgPSAxMjtcbiAgbGV0IG1pbkNvcGllcyA9IDE7XG5cbiAgbGV0IGZyYW1lUmF0ZSA9IDYwO1xuXG4gIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gVHJhbnNsYXRpb25cbiAgLy8gbGV0IHByZXZpb3VzVmVydGljYWxUcmFuc2xhdGlvbjogbnVtYmVyID0gSCAvIDIuMjU7XG5cbiAgbGV0IHZlcnRpY2FsVHJhbnNsYXRpb25XaGl0ZXNwYWNlQ29tcGVuc2F0aW9uOiBudW1iZXIgPSAyLjI1O1xuICBjb25zdCBwcmV2aW91c0hvcml6b250YWxUcmFuc2xhdGlvbiA9IChpZHg6IG51bWJlcikgPT5cbiAgICAtNjAgKyAoY2hhcmFjdGVyV2lkdGggKiBpZHggKyBjaGFyYWN0ZXJXaWR0aCAvIDEuNSArIHN0cm9rZU9mZnNldCk7XG5cbiAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAvLyBQcmVsb2FkXG4gIHAucHJlbG9hZCA9ICgpID0+IHtcbiAgICBkaGFybWFGb250ID0gcC5sb2FkRm9udChgL2ZvbnRzL2RoYXJtYS9kaGFybWFfcmVndWxhci50dGZgKTtcbiAgfTtcblxuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIFNldHVwXG4gIHAuc2V0dXAgPSAoKSA9PiB7XG4gICAgLy8gT3VyIENhbnZhc1xuICAgIGNhbnZhcyA9IHAuY3JlYXRlQ2FudmFzKFcsIEgpO1xuXG4gICAgLy8gVGhyZWVXYXRlckNhbnZhcyhwYXJlbnRFbCwgY2FudmFzLmVsdCk7XG5cbiAgICBwLmZyYW1lUmF0ZShmcmFtZVJhdGUpO1xuXG4gICAgaWYgKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvID4gMSAmJiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA8IDMpIHtcbiAgICAgIHAucGl4ZWxEZW5zaXR5KDEuMjUpO1xuICAgIH1cbiAgfTtcblxuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIFVwZGF0ZSBDaGFyYWN0ZXJcbiAgY29uc3QgdXBkYXRlQ2hhcmFjdGVyID0gKGNoYXI6IExYTFRfRGhhcm1hQ2FudmFzQ2hhciwgaWR4OiBudW1iZXIpID0+IHtcbiAgICBpZiAoY2hhci5jb3VudCA8IG1heENvdW50ICYmIGNoYXIuY291bnRJc0luY3JlbWVudGluZykge1xuICAgICAgY2hhcmFjdGVyc1tpZHhdID0ge1xuICAgICAgICAuLi5jaGFyLFxuICAgICAgICBjb3VudDogY2hhci5jb3VudCArIDEsXG4gICAgICB9O1xuXG4gICAgICBwcmV2aW91c0NvdW50VXBkYXRlVGltZSA9IHAubWlsbGlzKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGNoYXIuY291bnQgPT09IG1heENvdW50KSB7XG4gICAgICBjaGFyYWN0ZXJzW2lkeF0gPSB7XG4gICAgICAgIC4uLmNoYXIsXG4gICAgICAgIGNvdW50OiBjaGFyLmNvdW50IC0gMSxcbiAgICAgICAgY291bnRJc0luY3JlbWVudGluZzogZmFsc2UsXG4gICAgICAgIGNvdW50SXNEZWNyZW1lbnRpbmc6IHRydWUsXG4gICAgICB9O1xuXG4gICAgICBwcmV2aW91c0NvdW50VXBkYXRlVGltZSA9IHAubWlsbGlzKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGNoYXIuY291bnQgPiBtaW5Db3VudCAmJiBjaGFyLmNvdW50SXNEZWNyZW1lbnRpbmcpIHtcbiAgICAgIGNoYXJhY3RlcnNbaWR4XSA9IHtcbiAgICAgICAgLi4uY2hhcixcbiAgICAgICAgY291bnQ6IGNoYXIuY291bnQgLSAxLFxuICAgICAgICBjb3VudElzRGVjcmVtZW50aW5nOiB0cnVlLFxuICAgICAgfTtcblxuICAgICAgcHJldmlvdXNDb3VudFVwZGF0ZVRpbWUgPSBwLm1pbGxpcygpO1xuXG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChjaGFyLmNvdW50ID09PSBtaW5Db3VudCAmJiBjaGFyLmNvdW50SXNEZWNyZW1lbnRpbmcpIHtcbiAgICAgIGNoYXJhY3RlcnNbaWR4XSA9IHtcbiAgICAgICAgLi4uY2hhcixcbiAgICAgICAgY291bnQ6IGNoYXIuY291bnQgKyAxLFxuICAgICAgICBjb3VudElzSW5jcmVtZW50aW5nOiB0cnVlLFxuICAgICAgICBjb3VudElzRGVjcmVtZW50aW5nOiBmYWxzZSxcbiAgICAgIH07XG5cbiAgICAgIHByZXZpb3VzQ291bnRVcGRhdGVUaW1lID0gcC5taWxsaXMoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfTtcblxuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIFVwZGF0ZSBDb3BpZXNcbiAgY29uc3QgdXBkYXRlQ29waWVzID0gKGNoYXI6IExYTFRfRGhhcm1hQ2FudmFzQ2hhciwgaWR4OiBudW1iZXIpID0+IHtcbiAgICBpZiAoY2hhci5jb3BpZXMgPCBtYXhDb3BpZXMgJiYgY2hhci5jb3BpZXNBcmVJbmNyZW1lbnRpbmcpIHtcbiAgICAgIGNoYXJhY3RlcnNbaWR4XSA9IHtcbiAgICAgICAgLi4uY2hhcixcbiAgICAgICAgY29waWVzOiBjaGFyLmNvcGllcyArIDEsXG4gICAgICB9O1xuXG4gICAgICBwcmV2aW91c0NvcHlVcGRhdGVUaW1lID0gcC5taWxsaXMoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoY2hhci5jb3BpZXMgPT09IG1heENvcGllcykge1xuICAgICAgY2hhcmFjdGVyc1tpZHhdID0ge1xuICAgICAgICAuLi5jaGFyLFxuICAgICAgICBjb3BpZXM6IGNoYXIuY29waWVzIC0gMSxcbiAgICAgICAgY29waWVzQXJlSW5jcmVtZW50aW5nOiBmYWxzZSxcbiAgICAgICAgY29waWVzQXJlRGVjcmVtZW50aW5nOiB0cnVlLFxuICAgICAgfTtcblxuICAgICAgcHJldmlvdXNDb3B5VXBkYXRlVGltZSA9IHAubWlsbGlzKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGNoYXIuY29waWVzID4gbWluQ29waWVzICYmIGNoYXIuY29waWVzQXJlRGVjcmVtZW50aW5nKSB7XG4gICAgICBjaGFyYWN0ZXJzW2lkeF0gPSB7XG4gICAgICAgIC4uLmNoYXIsXG4gICAgICAgIGNvcGllczogY2hhci5jb3BpZXMgLSAxLFxuICAgICAgICBjb3BpZXNBcmVEZWNyZW1lbnRpbmc6IHRydWUsXG4gICAgICB9O1xuXG4gICAgICBwcmV2aW91c0NvcHlVcGRhdGVUaW1lID0gcC5taWxsaXMoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoY2hhci5jb3BpZXMgPT09IG1pbkNvcGllcyAmJiBjaGFyLmNvcGllc0FyZURlY3JlbWVudGluZykge1xuICAgICAgY2hhcmFjdGVyc1tpZHhdID0ge1xuICAgICAgICAuLi5jaGFyLFxuICAgICAgICBjb3BpZXM6IGNoYXIuY29waWVzICsgMSxcbiAgICAgICAgY29waWVzQXJlSW5jcmVtZW50aW5nOiB0cnVlLFxuICAgICAgICBjb3BpZXNBcmVEZWNyZW1lbnRpbmc6IGZhbHNlLFxuICAgICAgfTtcblxuICAgICAgcHJldmlvdXNDb3B5VXBkYXRlVGltZSA9IHAubWlsbGlzKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH07XG5cbiAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAvLyBEcmF3XG4gIHAuZHJhdyA9ICgpID0+IHtcblxuICAgIHAuYmFja2dyb3VuZCh3aW5kb3cubGF4YWx0VW5pdmVyc2FsVGhlbWUuYmFja2dyb3VuZCk7XG5cbiAgICBpZiAocC5mcmFtZUNvdW50ICUgMTAgPT09IDApIHtcblxuICAgICAgcC50ZXh0Rm9udChkaGFybWFGb250KTtcblxuICAgICAgcC50ZXh0U2l6ZShjaGFyYWN0ZXJTaXplKTtcblxuICAgICAgcC50ZXh0QWxpZ24ocC5DRU5URVIsIHAuQ0VOVEVSKTtcblxuICAgICAgcC5maWxsKGAke3dpbmRvdy5sYXhhbHRVbml2ZXJzYWxUaGVtZS5mb3JlZ3JvdW5kfWApO1xuICAgICAgcC5zdHJva2VXZWlnaHQoc3Ryb2tlV2lkdGgpO1xuICAgICAgcC5zdHJva2Uod2luZG93LmxheGFsdFVuaXZlcnNhbFRoZW1lLmJhY2tncm91bmQpO1xuXG4gICAgICBpZiAoSCAmJiBXKSB7XG4gICAgICAgIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBvdXIgY29waWVzXG4gICAgICAgIGNoYXJhY3RlcnMubWFwKChjaGFyOiBMWExUX0RoYXJtYUNhbnZhc0NoYXIsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgcC5zY2FsZSgxLCAxKTtcblxuICAgICAgICAgIGxldCByYW5kb21DaGFyUGljayA9IE1hdGgucmFuZG9tKCkgPD0gMC41O1xuXG4gICAgICAgICAgaWYgKHJhbmRvbUNoYXJQaWNrKSB7XG4gICAgICAgICAgICB1cGRhdGVDb3BpZXMoY2hhciwgaWR4KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocmFuZG9tQ2hhclBpY2sgJiYgcC5taWxsaXMoKSAtIHByZXZpb3VzQ291bnRVcGRhdGVUaW1lID4gMzAwMCkge1xuICAgICAgICAgICAgdXBkYXRlQ2hhcmFjdGVyKGNoYXIsIGlkeCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IGNvdW50QXJyYXk6IG51bWJlcltdID0gQXJyYXkuZnJvbShBcnJheShjaGFyLmNvdW50KS5rZXlzKCkpO1xuXG4gICAgICAgICAgY291bnRBcnJheSA9IGNvdW50QXJyYXkubWFwKChjb3VudE51bWJlcjogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY291bnROdW1iZXIgKyAxO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgICAgICAgICAvLyBEdXBsaWNhdGUgcG9zaXRpb25zXG4gICAgICAgICAgY291bnRBcnJheS5tYXAoKGNvdW50TnVtYmVyOiBudW1iZXIsIGlkeHg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgbGV0IHZlcnRpY2FsU2NhbGUgPSAxIC8gKGNoYXIuY291bnQgKiAwLjk1KTtcblxuICAgICAgICAgICAgbGV0IGR1cGxpY2F0ZVZlcnRpY2FsUG9zaXRpb246IG51bWJlciA9XG4gICAgICAgICAgICAgIGNoYXIuY291bnQgPT0gMVxuICAgICAgICAgICAgICAgID8gSCAvIHZlcnRpY2FsVHJhbnNsYXRpb25XaGl0ZXNwYWNlQ29tcGVuc2F0aW9uXG4gICAgICAgICAgICAgICAgOiBjaGFyYWN0ZXJTaXplIC8gdmVydGljYWxTa2V3RGl2aXNpYmxlICtcbiAgICAgICAgICAgICAgICAgIChjaGFyYWN0ZXJTaXplIC8gY2hhcmFjdGVyU2tld0RpdmlzaWJsZSkgKiBpZHh4O1xuXG4gICAgICAgICAgICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAgICAgICAgICAgLy8gTWFrZSBjb3BpZXNcbiAgICAgICAgICAgIGxldCBjb3BpZXNBcnJheTogbnVtYmVyW10gPSBBcnJheS5mcm9tKEFycmF5KGNoYXIuY29waWVzKS5rZXlzKCkpO1xuICAgICAgICAgICAgLy8gbGV0IHJhbmRvbUNvcHlQaWNrID0gTWF0aC5yYW5kb20oKSA8PSAwLjU7XG5cbiAgICAgICAgICAgIGNvcGllc0FycmF5ID0gY29waWVzQXJyYXkubWFwKChjb3B5TnVtYmVyOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNvcHlOdW1iZXIgKyAxO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIGxldCByYW5kb21Db3B5UGljayA9IE1hdGgucmFuZG9tKCkgPD0gMC41O1xuICAgICAgICAgICAgLy8gbGV0IGNvcHlUaW1lciA9IHAubWlsbGlzKCkgLSBwcmV2aW91c0NvcGllc1Zpc2libGVUaW1lID4gMjAwMDtcbiAgICAgICAgICAgIHByZXZpb3VzQ29weVVwZGF0ZVRpbWU7XG5cbiAgICAgICAgICAgIC8vIGxldCBpc0ZpcnN0Q291bnQgPSB0cnVlO1xuXG4gICAgICAgICAgICBjb3BpZXNBcnJheS5tYXAoKGNvcHlOdW1iZXI6IG51bWJlciwgaWR4eHg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAvLyBsZXQgY2VudGVyQ29vcmRzWCA9IFcgLyAyO1xuICAgICAgICAgICAgICAvLyBsZXQgY2VudGVyQ29vcmRzWSA9IEggLyAyO1xuXG4gICAgICAgICAgICAgIC8vIGxldCBob3Jpem9udGFsVHJhbnNsYXRlID1cbiAgICAgICAgICAgICAgLy8gICBjb3B5TnVtYmVyICE9PSAxXG4gICAgICAgICAgICAgIC8vICAgICA/IChwcmV2aW91c0hvcml6b250YWxUcmFuc2xhdGlvbihpZHgpICtcbiAgICAgICAgICAgICAgLy8gICAgICAgICAoc3Ryb2tlT2Zmc2V0IC8gKHAubW91c2VYIC8gMTAwKSkgKiBjb3B5TnVtYmVyKVxuICAgICAgICAgICAgICAvLyAgICAgOiBwcmV2aW91c0hvcml6b250YWxUcmFuc2xhdGlvbihpZHgpICtcbiAgICAgICAgICAgICAgLy8gICAgICAgc3Ryb2tlT2Zmc2V0ICogY29weU51bWJlcjtcblxuICAgICAgICAgICAgICAvLyBsZXQgdmVydGljYWxUcmFuc2xhdGUgPVxuICAgICAgICAgICAgICAvLyAgIGNvcHlOdW1iZXIgIT09IDFcbiAgICAgICAgICAgICAgLy8gICAgID8gKGR1cGxpY2F0ZVZlcnRpY2FsUG9zaXRpb24gLSAoc3Ryb2tlT2Zmc2V0IC8gKHAubW91c2VYIC8gMTAwKSkgKiBjb3B5TnVtYmVyKVxuICAgICAgICAgICAgICAvLyAgICAgOiBkdXBsaWNhdGVWZXJ0aWNhbFBvc2l0aW9uIC0gc3Ryb2tlT2Zmc2V0ICogY29weU51bWJlcjtcblxuICAgICAgICAgICAgICBsZXQgaG9yaXpvbnRhbFRyYW5zbGF0ZSA9XG4gICAgICAgICAgICAgICAgcHJldmlvdXNIb3Jpem9udGFsVHJhbnNsYXRpb24oaWR4KSArIHN0cm9rZU9mZnNldCAqIGNvcHlOdW1iZXI7XG5cbiAgICAgICAgICAgICAgbGV0IHZlcnRpY2FsVHJhbnNsYXRlID1cbiAgICAgICAgICAgICAgICBkdXBsaWNhdGVWZXJ0aWNhbFBvc2l0aW9uIC0gc3Ryb2tlT2Zmc2V0ICogY29weU51bWJlcjtcblxuICAgICAgICAgICAgICBwLnB1c2goKTtcbiAgICAgICAgICAgICAgcC5zY2FsZSgxLCB2ZXJ0aWNhbFNjYWxlKTtcbiAgICAgICAgICAgICAgcC50ZXh0KGNoYXIubGV0dGVyLCBob3Jpem9udGFsVHJhbnNsYXRlLCB2ZXJ0aWNhbFRyYW5zbGF0ZSk7XG4gICAgICAgICAgICAgIHAucG9wKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHAud2luZG93UmVzaXplZCA9ICgpID0+IHtcbiAgICBwLnJlc2l6ZUNhbnZhcyhXLCBIKTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERoYXJtYUNhbnZhc0Rpc3BsYXk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sketches/p5/no-water-distort.canvas.tsx\n");

/***/ })

})