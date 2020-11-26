webpackHotUpdate_N_E("pages/projects/water-distort-with-canvas",{

/***/ "./sketches/p5/dharma-water-distort.canvas.tsx":
/*!*****************************************************!*\
  !*** ./sketches/p5/dharma-water-distort.canvas.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _three_three_water_distort_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../three/three-water-distort.canvas */ \"./sketches/three/three-water-distort.canvas.ts\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/**\n *\n * Shader fun\n * @author Peter Laxalt\n *\n */\n // Begin Component\n// __________________________________________________________________________\n\nvar DharmaCanvasDisplay = function DharmaCanvasDisplay(W, H, ID, // DharmaTheme,\nparentEl) {\n  return function (p) {\n    // _________________________________________________\n    // Config\n    var canvas; // ____________________________\n    // Fonts\n\n    var dharmaFont; // ____________________________\n    // Typography\n\n    var text = \"LAXALT\";\n    var splitCharacterArray = text.split(\"\");\n    var characters = splitCharacterArray.map(function (character, idx) {\n      return {\n        letter: character,\n        count: 1,\n        idx: idx,\n        copies: 5,\n        copiesLastVisible: 0,\n        copiesAreVisible: false,\n        countIsIncrementing: true,\n        countIsDecrementing: false,\n        copiesAreIncrementing: true,\n        copiesAreDecrementing: false\n      };\n    });\n    var characterCount = splitCharacterArray.length;\n    var characterWidth = W / characterCount;\n    var characterSize = H * 1.25;\n    console.log(characterSize, \"characterSize\"); // ____________________________\n    // Counts\n    // let renderCount: number = 0;\n\n    var previousCountUpdateTime = 0;\n    var previousCopyUpdateTime = 0; // ____________________________\n    // Strokes\n\n    var strokeWidth = 4;\n    var strokeOffset = strokeWidth * 1.5; // ____________________________\n    // Limits\n\n    var maxCount = 3;\n    var minCount = 1;\n    var maxCopies = 12;\n    var minCopies = 1;\n    var frameRate = 10; // ____________________________\n    // Translation\n    // let previousVerticalTranslation: number = H / 2.25;\n\n    var verticalTranslationWhitespaceCompensation = 2.25;\n\n    var previousHorizontalTranslation = function previousHorizontalTranslation(idx) {\n      return -60 + (characterWidth * idx + characterWidth / 1.5 + strokeOffset);\n    }; // _________________________________________________\n    // Preload\n\n\n    p.preload = function () {\n      dharmaFont = p.loadFont(\"/fonts/dharma/dharma_regular.ttf\");\n    }; // _________________________________________________\n    // Setup\n\n\n    p.setup = function () {\n      // Our Canvas\n      canvas = p.createCanvas(W, H);\n      Object(_three_three_water_distort_canvas__WEBPACK_IMPORTED_MODULE_1__[\"ThreeWaterCanvas\"])(parentEl, canvas.elt);\n      p.frameRate(frameRate);\n    }; // _________________________________________________\n    // Update Character\n\n\n    var updateCharacter = function updateCharacter(_char, idx) {\n      if (_char.count < maxCount && _char.countIsIncrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char), {}, {\n          count: _char.count + 1\n        });\n        previousCountUpdateTime = p.millis();\n        return;\n      } else if (_char.count === maxCount) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char), {}, {\n          count: _char.count - 1,\n          countIsIncrementing: false,\n          countIsDecrementing: true\n        });\n        previousCountUpdateTime = p.millis();\n        return;\n      } else if (_char.count > minCount && _char.countIsDecrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char), {}, {\n          count: _char.count - 1,\n          countIsDecrementing: true\n        });\n        previousCountUpdateTime = p.millis();\n        return;\n      } else if (_char.count === minCount && _char.countIsDecrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char), {}, {\n          count: _char.count + 1,\n          countIsIncrementing: true,\n          countIsDecrementing: false\n        });\n        previousCountUpdateTime = p.millis();\n        return;\n      }\n\n      return;\n    }; // _________________________________________________\n    // Update Copies\n\n\n    var updateCopies = function updateCopies(_char2, idx) {\n      if (_char2.copies < maxCopies && _char2.copiesAreIncrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char2), {}, {\n          copies: _char2.copies + 1\n        });\n        previousCopyUpdateTime = p.millis();\n        return;\n      } else if (_char2.copies === maxCopies) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char2), {}, {\n          copies: _char2.copies - 1,\n          copiesAreIncrementing: false,\n          copiesAreDecrementing: true\n        });\n        previousCopyUpdateTime = p.millis();\n        return;\n      } else if (_char2.copies > minCopies && _char2.copiesAreDecrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char2), {}, {\n          copies: _char2.copies - 1,\n          copiesAreDecrementing: true\n        });\n        previousCopyUpdateTime = p.millis();\n        return;\n      } else if (_char2.copies === minCopies && _char2.copiesAreDecrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char2), {}, {\n          copies: _char2.copies + 1,\n          copiesAreIncrementing: true,\n          copiesAreDecrementing: false\n        });\n        previousCopyUpdateTime = p.millis();\n        return;\n      }\n\n      return;\n    }; // _________________________________________________\n    // Draw\n\n\n    p.draw = function () {\n      p.background(window.laxaltUniversalTheme.background);\n      p.textFont(dharmaFont);\n      p.textSize(characterSize);\n      p.textAlign(p.CENTER, p.CENTER);\n      p.fill(\"\".concat(window.laxaltUniversalTheme.foreground));\n      p.strokeWeight(strokeWidth);\n      p.stroke(window.laxaltUniversalTheme.background);\n\n      if (H && W) {\n        // _________________________________________\n        // Loop through our copies\n        characters.map(function (_char3, idx) {\n          p.scale(1, 1);\n          var randomCharPick = Math.random() <= 0.5;\n\n          if (randomCharPick) {\n            updateCopies(_char3, idx);\n          }\n\n          if (randomCharPick && p.millis() - previousCountUpdateTime > 3000) {\n            updateCharacter(_char3, idx);\n          }\n\n          var countArray = Array.from(Array(_char3.count).keys());\n          countArray = countArray.map(function (countNumber) {\n            return countNumber + 1;\n          }); // _________________________________________\n          // Duplicate positions\n\n          countArray.map(function (countNumber, idxx) {\n            var verticalScale = 1 / (_char3.count * 0.95);\n            var verticalSkewDivisible = 2.75;\n            var characterSkewDivisible = 1.36;\n            var duplicateVerticalPosition = _char3.count == 1 ? H / verticalTranslationWhitespaceCompensation : characterSize / verticalSkewDivisible + characterSize / characterSkewDivisible * idxx; // _________________________________________\n            // Make copies\n\n            var copiesArray = Array.from(Array(_char3.copies).keys()); // let randomCopyPick = Math.random() <= 0.5;\n\n            copiesArray = copiesArray.map(function (copyNumber) {\n              return copyNumber + 1;\n            }); // let randomCopyPick = Math.random() <= 0.5;\n            // let copyTimer = p.millis() - previousCopiesVisibleTime > 2000;\n\n            previousCopyUpdateTime; // let isFirstCount = true;\n\n            copiesArray.map(function (copyNumber, idxxx) {\n              // let centerCoordsX = W / 2;\n              // let centerCoordsY = H / 2;\n              // let horizontalTranslate =\n              //   copyNumber !== 1\n              //     ? (previousHorizontalTranslation(idx) +\n              //         (strokeOffset / (p.mouseX / 100)) * copyNumber)\n              //     : previousHorizontalTranslation(idx) +\n              //       strokeOffset * copyNumber;\n              // let verticalTranslate =\n              //   copyNumber !== 1\n              //     ? (duplicateVerticalPosition - (strokeOffset / (p.mouseX / 100)) * copyNumber)\n              //     : duplicateVerticalPosition - strokeOffset * copyNumber;\n              var horizontalTranslate = previousHorizontalTranslation(idx) + strokeOffset * copyNumber;\n              var verticalTranslate = duplicateVerticalPosition - strokeOffset * copyNumber;\n              p.push();\n              p.scale(1, verticalScale);\n              p.text(_char3.letter, horizontalTranslate, verticalTranslate);\n              p.pop();\n            });\n          });\n        });\n      }\n    };\n\n    p.windowResized = function () {\n      p.resizeCanvas(W, H);\n    };\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DharmaCanvasDisplay);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2tldGNoZXMvcDUvZGhhcm1hLXdhdGVyLWRpc3RvcnQuY2FudmFzLnRzeD9kNGEwIl0sIm5hbWVzIjpbIkRoYXJtYUNhbnZhc0Rpc3BsYXkiLCJXIiwiSCIsIklEIiwicGFyZW50RWwiLCJwIiwiY2FudmFzIiwiZGhhcm1hRm9udCIsInRleHQiLCJzcGxpdENoYXJhY3RlckFycmF5Iiwic3BsaXQiLCJjaGFyYWN0ZXJzIiwibWFwIiwiY2hhcmFjdGVyIiwiaWR4IiwibGV0dGVyIiwiY291bnQiLCJjb3BpZXMiLCJjb3BpZXNMYXN0VmlzaWJsZSIsImNvcGllc0FyZVZpc2libGUiLCJjb3VudElzSW5jcmVtZW50aW5nIiwiY291bnRJc0RlY3JlbWVudGluZyIsImNvcGllc0FyZUluY3JlbWVudGluZyIsImNvcGllc0FyZURlY3JlbWVudGluZyIsImNoYXJhY3RlckNvdW50IiwibGVuZ3RoIiwiY2hhcmFjdGVyV2lkdGgiLCJjaGFyYWN0ZXJTaXplIiwiY29uc29sZSIsImxvZyIsInByZXZpb3VzQ291bnRVcGRhdGVUaW1lIiwicHJldmlvdXNDb3B5VXBkYXRlVGltZSIsInN0cm9rZVdpZHRoIiwic3Ryb2tlT2Zmc2V0IiwibWF4Q291bnQiLCJtaW5Db3VudCIsIm1heENvcGllcyIsIm1pbkNvcGllcyIsImZyYW1lUmF0ZSIsInZlcnRpY2FsVHJhbnNsYXRpb25XaGl0ZXNwYWNlQ29tcGVuc2F0aW9uIiwicHJldmlvdXNIb3Jpem9udGFsVHJhbnNsYXRpb24iLCJwcmVsb2FkIiwibG9hZEZvbnQiLCJzZXR1cCIsImNyZWF0ZUNhbnZhcyIsIlRocmVlV2F0ZXJDYW52YXMiLCJlbHQiLCJ1cGRhdGVDaGFyYWN0ZXIiLCJjaGFyIiwibWlsbGlzIiwidXBkYXRlQ29waWVzIiwiZHJhdyIsImJhY2tncm91bmQiLCJ3aW5kb3ciLCJsYXhhbHRVbml2ZXJzYWxUaGVtZSIsInRleHRGb250IiwidGV4dFNpemUiLCJ0ZXh0QWxpZ24iLCJDRU5URVIiLCJmaWxsIiwiZm9yZWdyb3VuZCIsInN0cm9rZVdlaWdodCIsInN0cm9rZSIsInNjYWxlIiwicmFuZG9tQ2hhclBpY2siLCJNYXRoIiwicmFuZG9tIiwiY291bnRBcnJheSIsIkFycmF5IiwiZnJvbSIsImtleXMiLCJjb3VudE51bWJlciIsImlkeHgiLCJ2ZXJ0aWNhbFNjYWxlIiwidmVydGljYWxTa2V3RGl2aXNpYmxlIiwiY2hhcmFjdGVyU2tld0RpdmlzaWJsZSIsImR1cGxpY2F0ZVZlcnRpY2FsUG9zaXRpb24iLCJjb3BpZXNBcnJheSIsImNvcHlOdW1iZXIiLCJpZHh4eCIsImhvcml6b250YWxUcmFuc2xhdGUiLCJ2ZXJ0aWNhbFRyYW5zbGF0ZSIsInB1c2giLCJwb3AiLCJ3aW5kb3dSZXNpemVkIiwicmVzaXplQ2FudmFzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FNQTtBQUNBOztBQWtDQSxJQUFNQSxtQkFBNkMsR0FBRyxTQUFoREEsbUJBQWdELENBQ3BEQyxDQURvRCxFQUVwREMsQ0FGb0QsRUFHcERDLEVBSG9ELEVBSXBEO0FBQ0FDLFFBTG9EO0FBQUEsU0FNakQsVUFBQ0MsQ0FBRCxFQUFXO0FBQ2Q7QUFDQTtBQUVBLFFBQUlDLE1BQUosQ0FKYyxDQU1kO0FBQ0E7O0FBQ0EsUUFBSUMsVUFBSixDQVJjLENBVWQ7QUFDQTs7QUFDQSxRQUFJQyxJQUFJLEdBQUcsUUFBWDtBQUVBLFFBQUlDLG1CQUFtQixHQUFHRCxJQUFJLENBQUNFLEtBQUwsQ0FBVyxFQUFYLENBQTFCO0FBQ0EsUUFBSUMsVUFBbUMsR0FBR0YsbUJBQW1CLENBQUNHLEdBQXBCLENBQ3hDLFVBQUNDLFNBQUQsRUFBb0JDLEdBQXBCLEVBQW9DO0FBQ2xDLGFBQU87QUFDTEMsY0FBTSxFQUFFRixTQURIO0FBRUxHLGFBQUssRUFBRSxDQUZGO0FBR0xGLFdBQUcsRUFBRUEsR0FIQTtBQUtMRyxjQUFNLEVBQUUsQ0FMSDtBQU1MQyx5QkFBaUIsRUFBRSxDQU5k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QUF1REQsU0E1RUQ7QUE2RUQ7QUFDRixLQTlGRDs7QUFnR0E5RSxLQUFDLENBQUMrRSxhQUFGLEdBQWtCLFlBQU07QUFDdEIvRSxPQUFDLENBQUNnRixZQUFGLENBQWVwRixDQUFmLEVBQWtCQyxDQUFsQjtBQUNELEtBRkQ7QUFHRCxHQXBTcUQ7QUFBQSxDQUF0RDs7QUFzU2VGLGtGQUFmIiwiZmlsZSI6Ii4vc2tldGNoZXMvcDUvZGhhcm1hLXdhdGVyLWRpc3RvcnQuY2FudmFzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqIFNoYWRlciBmdW5cbiAqIEBhdXRob3IgUGV0ZXIgTGF4YWx0XG4gKlxuICovXG5cbmltcG9ydCBwNSwgeyBGb250IH0gZnJvbSBcInA1XCI7XG5pbXBvcnQgeyBMWExUX0NvbG9yVGhlbWUgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL3N0eWxlcy9Db2xvclwiO1xuaW1wb3J0IHsgVGhyZWVXYXRlckNhbnZhcyB9IGZyb20gXCIuLi90aHJlZS90aHJlZS13YXRlci1kaXN0b3J0LmNhbnZhc1wiO1xuXG4vLyBCZWdpbiBDb21wb25lbnRcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG5cbmV4cG9ydCB0eXBlIExYTFRfRGhhcm1hQ2FudmFzID0ge1xuICBXOiBudW1iZXI7XG4gIEg6IG51bWJlcjtcbiAgSUQ6IG51bWJlcjtcbiAgLy8gQkc6IExYTFRfQ29sb3JUaGVtZTtcbiAgcGFyZW50RWw6IEhUTUxEaXZFbGVtZW50O1xufTtcblxuZXhwb3J0IHR5cGUgTFhMVF9EaGFybWFDYW52YXNEaXNwbGF5ID0gKFxuICBXOiBudW1iZXIsXG4gIEg6IG51bWJlcixcbiAgSUQ6IG51bWJlcixcbiAgLy8gQkc6IExYTFRfQ29sb3JUaGVtZSxcbiAgcGFyZW50RWw6IEhUTUxEaXZFbGVtZW50XG4pID0+IChwOiBwNSkgPT4gdm9pZDtcblxudHlwZSBMWExUX0RoYXJtYUNhbnZhc0NoYXIgPSB7XG4gIGxldHRlcjogc3RyaW5nO1xuICBjb3VudDogbnVtYmVyO1xuICBpZHg6IG51bWJlcjtcblxuICBjb3BpZXM6IG51bWJlcjtcbiAgY29waWVzTGFzdFZpc2libGU6IG51bWJlcjtcbiAgY29waWVzQXJlVmlzaWJsZTogYm9vbGVhbjtcblxuICBjb3BpZXNBcmVJbmNyZW1lbnRpbmc6IGJvb2xlYW47XG4gIGNvcGllc0FyZURlY3JlbWVudGluZzogYm9vbGVhbjtcblxuICBjb3VudElzSW5jcmVtZW50aW5nOiBib29sZWFuO1xuICBjb3VudElzRGVjcmVtZW50aW5nOiBib29sZWFuO1xufTtcblxuY29uc3QgRGhhcm1hQ2FudmFzRGlzcGxheTogTFhMVF9EaGFybWFDYW52YXNEaXNwbGF5ID0gKFxuICBXLFxuICBILFxuICBJRCxcbiAgLy8gRGhhcm1hVGhlbWUsXG4gIHBhcmVudEVsXG4pID0+IChwOiBwNSkgPT4ge1xuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIENvbmZpZ1xuXG4gIGxldCBjYW52YXM7XG5cbiAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAvLyBGb250c1xuICBsZXQgZGhhcm1hRm9udDogRm9udDtcblxuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIFR5cG9ncmFwaHlcbiAgbGV0IHRleHQgPSBcIkxBWEFMVFwiO1xuXG4gIGxldCBzcGxpdENoYXJhY3RlckFycmF5ID0gdGV4dC5zcGxpdChcIlwiKTtcbiAgbGV0IGNoYXJhY3RlcnM6IExYTFRfRGhhcm1hQ2FudmFzQ2hhcltdID0gc3BsaXRDaGFyYWN0ZXJBcnJheS5tYXAoXG4gICAgKGNoYXJhY3Rlcjogc3RyaW5nLCBpZHg6IG51bWJlcikgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGV0dGVyOiBjaGFyYWN0ZXIsXG4gICAgICAgIGNvdW50OiAxLFxuICAgICAgICBpZHg6IGlkeCxcblxuICAgICAgICBjb3BpZXM6IDUsXG4gICAgICAgIGNvcGllc0xhc3RWaXNpYmxlOiAwLFxuICAgICAgICBjb3BpZXNBcmVWaXNpYmxlOiBmYWxzZSxcblxuICAgICAgICBjb3VudElzSW5jcmVtZW50aW5nOiB0cnVlLFxuICAgICAgICBjb3VudElzRGVjcmVtZW50aW5nOiBmYWxzZSxcblxuICAgICAgICBjb3BpZXNBcmVJbmNyZW1lbnRpbmc6IHRydWUsXG4gICAgICAgIGNvcGllc0FyZURlY3JlbWVudGluZzogZmFsc2UsXG4gICAgICB9O1xuICAgIH1cbiAgKTtcblxuICBsZXQgY2hhcmFjdGVyQ291bnQ6IG51bWJlciA9IHNwbGl0Q2hhcmFjdGVyQXJyYXkubGVuZ3RoO1xuICBsZXQgY2hhcmFjdGVyV2lkdGg6IG51bWJlciA9IFcgLyBjaGFyYWN0ZXJDb3VudDtcbiAgbGV0IGNoYXJhY3RlclNpemU6IG51bWJlciA9IEggKiAxLjI1O1xuXG4gIGNvbnNvbGUubG9nKGNoYXJhY3RlclNpemUsIFwiY2hhcmFjdGVyU2l6ZVwiKTtcblxuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIENvdW50c1xuICAvLyBsZXQgcmVuZGVyQ291bnQ6IG51bWJlciA9IDA7XG4gIGxldCBwcmV2aW91c0NvdW50VXBkYXRlVGltZTogbnVtYmVyID0gMDtcbiAgbGV0IHByZXZpb3VzQ29weVVwZGF0ZVRpbWU6IG51bWJlciA9IDA7XG5cbiAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAvLyBTdHJva2VzXG4gIGxldCBzdHJva2VXaWR0aDogbnVtYmVyID0gNDtcbiAgbGV0IHN0cm9rZU9mZnNldDogbnVtYmVyID0gc3Ryb2tlV2lkdGggKiAxLjU7XG5cbiAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAvLyBMaW1pdHNcbiAgbGV0IG1heENvdW50ID0gMztcbiAgbGV0IG1pbkNvdW50ID0gMTtcblxuICBsZXQgbWF4Q29waWVzID0gMTI7XG4gIGxldCBtaW5Db3BpZXMgPSAxO1xuXG4gIGxldCBmcmFtZVJhdGUgPSAxMDtcblxuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIFRyYW5zbGF0aW9uXG4gIC8vIGxldCBwcmV2aW91c1ZlcnRpY2FsVHJhbnNsYXRpb246IG51bWJlciA9IEggLyAyLjI1O1xuXG4gIGxldCB2ZXJ0aWNhbFRyYW5zbGF0aW9uV2hpdGVzcGFjZUNvbXBlbnNhdGlvbjogbnVtYmVyID0gMi4yNTtcbiAgY29uc3QgcHJldmlvdXNIb3Jpem9udGFsVHJhbnNsYXRpb24gPSAoaWR4OiBudW1iZXIpID0+XG4gICAgLTYwICsgKGNoYXJhY3RlcldpZHRoICogaWR4ICsgY2hhcmFjdGVyV2lkdGggLyAxLjUgKyBzdHJva2VPZmZzZXQpO1xuXG4gIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gUHJlbG9hZFxuICBwLnByZWxvYWQgPSAoKSA9PiB7XG4gICAgZGhhcm1hRm9udCA9IHAubG9hZEZvbnQoYC9mb250cy9kaGFybWEvZGhhcm1hX3JlZ3VsYXIudHRmYCk7XG4gIH07XG5cbiAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAvLyBTZXR1cFxuICBwLnNldHVwID0gKCkgPT4ge1xuICAgIC8vIE91ciBDYW52YXNcbiAgICBjYW52YXMgPSBwLmNyZWF0ZUNhbnZhcyhXLCBIKTtcblxuICAgIFRocmVlV2F0ZXJDYW52YXMocGFyZW50RWwsIGNhbnZhcy5lbHQpO1xuXG4gICAgcC5mcmFtZVJhdGUoZnJhbWVSYXRlKTtcbiAgfTtcblxuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIFVwZGF0ZSBDaGFyYWN0ZXJcbiAgY29uc3QgdXBkYXRlQ2hhcmFjdGVyID0gKGNoYXI6IExYTFRfRGhhcm1hQ2FudmFzQ2hhciwgaWR4OiBudW1iZXIpID0+IHtcbiAgICBpZiAoY2hhci5jb3VudCA8IG1heENvdW50ICYmIGNoYXIuY291bnRJc0luY3JlbWVudGluZykge1xuICAgICAgY2hhcmFjdGVyc1tpZHhdID0ge1xuICAgICAgICAuLi5jaGFyLFxuICAgICAgICBjb3VudDogY2hhci5jb3VudCArIDEsXG4gICAgICB9O1xuXG4gICAgICBwcmV2aW91c0NvdW50VXBkYXRlVGltZSA9IHAubWlsbGlzKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGNoYXIuY291bnQgPT09IG1heENvdW50KSB7XG4gICAgICBjaGFyYWN0ZXJzW2lkeF0gPSB7XG4gICAgICAgIC4uLmNoYXIsXG4gICAgICAgIGNvdW50OiBjaGFyLmNvdW50IC0gMSxcbiAgICAgICAgY291bnRJc0luY3JlbWVudGluZzogZmFsc2UsXG4gICAgICAgIGNvdW50SXNEZWNyZW1lbnRpbmc6IHRydWUsXG4gICAgICB9O1xuXG4gICAgICBwcmV2aW91c0NvdW50VXBkYXRlVGltZSA9IHAubWlsbGlzKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGNoYXIuY291bnQgPiBtaW5Db3VudCAmJiBjaGFyLmNvdW50SXNEZWNyZW1lbnRpbmcpIHtcbiAgICAgIGNoYXJhY3RlcnNbaWR4XSA9IHtcbiAgICAgICAgLi4uY2hhcixcbiAgICAgICAgY291bnQ6IGNoYXIuY291bnQgLSAxLFxuICAgICAgICBjb3VudElzRGVjcmVtZW50aW5nOiB0cnVlLFxuICAgICAgfTtcblxuICAgICAgcHJldmlvdXNDb3VudFVwZGF0ZVRpbWUgPSBwLm1pbGxpcygpO1xuXG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChjaGFyLmNvdW50ID09PSBtaW5Db3VudCAmJiBjaGFyLmNvdW50SXNEZWNyZW1lbnRpbmcpIHtcbiAgICAgIGNoYXJhY3RlcnNbaWR4XSA9IHtcbiAgICAgICAgLi4uY2hhcixcbiAgICAgICAgY291bnQ6IGNoYXIuY291bnQgKyAxLFxuICAgICAgICBjb3VudElzSW5jcmVtZW50aW5nOiB0cnVlLFxuICAgICAgICBjb3VudElzRGVjcmVtZW50aW5nOiBmYWxzZSxcbiAgICAgIH07XG5cbiAgICAgIHByZXZpb3VzQ291bnRVcGRhdGVUaW1lID0gcC5taWxsaXMoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfTtcblxuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIFVwZGF0ZSBDb3BpZXNcbiAgY29uc3QgdXBkYXRlQ29waWVzID0gKGNoYXI6IExYTFRfRGhhcm1hQ2FudmFzQ2hhciwgaWR4OiBudW1iZXIpID0+IHtcbiAgICBpZiAoY2hhci5jb3BpZXMgPCBtYXhDb3BpZXMgJiYgY2hhci5jb3BpZXNBcmVJbmNyZW1lbnRpbmcpIHtcbiAgICAgIGNoYXJhY3RlcnNbaWR4XSA9IHtcbiAgICAgICAgLi4uY2hhcixcbiAgICAgICAgY29waWVzOiBjaGFyLmNvcGllcyArIDEsXG4gICAgICB9O1xuXG4gICAgICBwcmV2aW91c0NvcHlVcGRhdGVUaW1lID0gcC5taWxsaXMoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoY2hhci5jb3BpZXMgPT09IG1heENvcGllcykge1xuICAgICAgY2hhcmFjdGVyc1tpZHhdID0ge1xuICAgICAgICAuLi5jaGFyLFxuICAgICAgICBjb3BpZXM6IGNoYXIuY29waWVzIC0gMSxcbiAgICAgICAgY29waWVzQXJlSW5jcmVtZW50aW5nOiBmYWxzZSxcbiAgICAgICAgY29waWVzQXJlRGVjcmVtZW50aW5nOiB0cnVlLFxuICAgICAgfTtcblxuICAgICAgcHJldmlvdXNDb3B5VXBkYXRlVGltZSA9IHAubWlsbGlzKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGNoYXIuY29waWVzID4gbWluQ29waWVzICYmIGNoYXIuY29waWVzQXJlRGVjcmVtZW50aW5nKSB7XG4gICAgICBjaGFyYWN0ZXJzW2lkeF0gPSB7XG4gICAgICAgIC4uLmNoYXIsXG4gICAgICAgIGNvcGllczogY2hhci5jb3BpZXMgLSAxLFxuICAgICAgICBjb3BpZXNBcmVEZWNyZW1lbnRpbmc6IHRydWUsXG4gICAgICB9O1xuXG4gICAgICBwcmV2aW91c0NvcHlVcGRhdGVUaW1lID0gcC5taWxsaXMoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoY2hhci5jb3BpZXMgPT09IG1pbkNvcGllcyAmJiBjaGFyLmNvcGllc0FyZURlY3JlbWVudGluZykge1xuICAgICAgY2hhcmFjdGVyc1tpZHhdID0ge1xuICAgICAgICAuLi5jaGFyLFxuICAgICAgICBjb3BpZXM6IGNoYXIuY29waWVzICsgMSxcbiAgICAgICAgY29waWVzQXJlSW5jcmVtZW50aW5nOiB0cnVlLFxuICAgICAgICBjb3BpZXNBcmVEZWNyZW1lbnRpbmc6IGZhbHNlLFxuICAgICAgfTtcblxuICAgICAgcHJldmlvdXNDb3B5VXBkYXRlVGltZSA9IHAubWlsbGlzKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH07XG5cbiAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAvLyBEcmF3XG4gIHAuZHJhdyA9ICgpID0+IHtcbiAgICBwLmJhY2tncm91bmQod2luZG93LmxheGFsdFVuaXZlcnNhbFRoZW1lLmJhY2tncm91bmQpO1xuXG4gICAgcC50ZXh0Rm9udChkaGFybWFGb250KTtcblxuICAgIHAudGV4dFNpemUoY2hhcmFjdGVyU2l6ZSk7XG5cbiAgICBwLnRleHRBbGlnbihwLkNFTlRFUiwgcC5DRU5URVIpO1xuXG4gICAgcC5maWxsKGAke3dpbmRvdy5sYXhhbHRVbml2ZXJzYWxUaGVtZS5mb3JlZ3JvdW5kfWApO1xuICAgIHAuc3Ryb2tlV2VpZ2h0KHN0cm9rZVdpZHRoKTtcbiAgICBwLnN0cm9rZSh3aW5kb3cubGF4YWx0VW5pdmVyc2FsVGhlbWUuYmFja2dyb3VuZCk7XG5cbiAgICBpZiAoSCAmJiBXKSB7XG4gICAgICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAgICAgLy8gTG9vcCB0aHJvdWdoIG91ciBjb3BpZXNcbiAgICAgIGNoYXJhY3RlcnMubWFwKChjaGFyOiBMWExUX0RoYXJtYUNhbnZhc0NoYXIsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICAgIHAuc2NhbGUoMSwgMSk7XG5cbiAgICAgICAgbGV0IHJhbmRvbUNoYXJQaWNrID0gTWF0aC5yYW5kb20oKSA8PSAwLjU7XG5cbiAgICAgICAgaWYgKHJhbmRvbUNoYXJQaWNrKSB7XG4gICAgICAgICAgdXBkYXRlQ29waWVzKGNoYXIsIGlkeCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmFuZG9tQ2hhclBpY2sgJiYgcC5taWxsaXMoKSAtIHByZXZpb3VzQ291bnRVcGRhdGVUaW1lID4gMzAwMCkge1xuICAgICAgICAgIHVwZGF0ZUNoYXJhY3RlcihjaGFyLCBpZHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvdW50QXJyYXk6IG51bWJlcltdID0gQXJyYXkuZnJvbShBcnJheShjaGFyLmNvdW50KS5rZXlzKCkpO1xuXG4gICAgICAgIGNvdW50QXJyYXkgPSBjb3VudEFycmF5Lm1hcCgoY291bnROdW1iZXI6IG51bWJlcikgPT4ge1xuICAgICAgICAgIHJldHVybiBjb3VudE51bWJlciArIDE7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gICAgICAgIC8vIER1cGxpY2F0ZSBwb3NpdGlvbnNcbiAgICAgICAgY291bnRBcnJheS5tYXAoKGNvdW50TnVtYmVyOiBudW1iZXIsIGlkeHg6IG51bWJlcikgPT4ge1xuICAgICAgICAgIGxldCB2ZXJ0aWNhbFNjYWxlID0gMSAvIChjaGFyLmNvdW50ICogMC45NSk7XG5cbiAgICAgICAgICBsZXQgdmVydGljYWxTa2V3RGl2aXNpYmxlOiBudW1iZXIgPSAyLjc1O1xuICAgICAgICAgIGxldCBjaGFyYWN0ZXJTa2V3RGl2aXNpYmxlOiBudW1iZXIgPSAxLjM2O1xuXG4gICAgICAgICAgbGV0IGR1cGxpY2F0ZVZlcnRpY2FsUG9zaXRpb246IG51bWJlciA9XG4gICAgICAgICAgICBjaGFyLmNvdW50ID09IDFcbiAgICAgICAgICAgICAgPyBIIC8gdmVydGljYWxUcmFuc2xhdGlvbldoaXRlc3BhY2VDb21wZW5zYXRpb25cbiAgICAgICAgICAgICAgOiBjaGFyYWN0ZXJTaXplIC8gdmVydGljYWxTa2V3RGl2aXNpYmxlICtcbiAgICAgICAgICAgICAgICAoY2hhcmFjdGVyU2l6ZSAvIGNoYXJhY3RlclNrZXdEaXZpc2libGUpICogaWR4eDtcblxuICAgICAgICAgIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gICAgICAgICAgLy8gTWFrZSBjb3BpZXNcbiAgICAgICAgICBsZXQgY29waWVzQXJyYXk6IG51bWJlcltdID0gQXJyYXkuZnJvbShBcnJheShjaGFyLmNvcGllcykua2V5cygpKTtcbiAgICAgICAgICAvLyBsZXQgcmFuZG9tQ29weVBpY2sgPSBNYXRoLnJhbmRvbSgpIDw9IDAuNTtcblxuICAgICAgICAgIGNvcGllc0FycmF5ID0gY29waWVzQXJyYXkubWFwKChjb3B5TnVtYmVyOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjb3B5TnVtYmVyICsgMTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8vIGxldCByYW5kb21Db3B5UGljayA9IE1hdGgucmFuZG9tKCkgPD0gMC41O1xuICAgICAgICAgIC8vIGxldCBjb3B5VGltZXIgPSBwLm1pbGxpcygpIC0gcHJldmlvdXNDb3BpZXNWaXNpYmxlVGltZSA+IDIwMDA7XG4gICAgICAgICAgcHJldmlvdXNDb3B5VXBkYXRlVGltZTtcblxuICAgICAgICAgIC8vIGxldCBpc0ZpcnN0Q291bnQgPSB0cnVlO1xuXG4gICAgICAgICAgY29waWVzQXJyYXkubWFwKChjb3B5TnVtYmVyOiBudW1iZXIsIGlkeHh4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIC8vIGxldCBjZW50ZXJDb29yZHNYID0gVyAvIDI7XG4gICAgICAgICAgICAvLyBsZXQgY2VudGVyQ29vcmRzWSA9IEggLyAyO1xuXG4gICAgICAgICAgICAvLyBsZXQgaG9yaXpvbnRhbFRyYW5zbGF0ZSA9XG4gICAgICAgICAgICAvLyAgIGNvcHlOdW1iZXIgIT09IDFcbiAgICAgICAgICAgIC8vICAgICA/IChwcmV2aW91c0hvcml6b250YWxUcmFuc2xhdGlvbihpZHgpICtcbiAgICAgICAgICAgIC8vICAgICAgICAgKHN0cm9rZU9mZnNldCAvIChwLm1vdXNlWCAvIDEwMCkpICogY29weU51bWJlcilcbiAgICAgICAgICAgIC8vICAgICA6IHByZXZpb3VzSG9yaXpvbnRhbFRyYW5zbGF0aW9uKGlkeCkgK1xuICAgICAgICAgICAgLy8gICAgICAgc3Ryb2tlT2Zmc2V0ICogY29weU51bWJlcjtcblxuICAgICAgICAgICAgLy8gbGV0IHZlcnRpY2FsVHJhbnNsYXRlID1cbiAgICAgICAgICAgIC8vICAgY29weU51bWJlciAhPT0gMVxuICAgICAgICAgICAgLy8gICAgID8gKGR1cGxpY2F0ZVZlcnRpY2FsUG9zaXRpb24gLSAoc3Ryb2tlT2Zmc2V0IC8gKHAubW91c2VYIC8gMTAwKSkgKiBjb3B5TnVtYmVyKVxuICAgICAgICAgICAgLy8gICAgIDogZHVwbGljYXRlVmVydGljYWxQb3NpdGlvbiAtIHN0cm9rZU9mZnNldCAqIGNvcHlOdW1iZXI7XG5cbiAgICAgICAgICAgIGxldCBob3Jpem9udGFsVHJhbnNsYXRlID1cbiAgICAgICAgICAgICAgcHJldmlvdXNIb3Jpem9udGFsVHJhbnNsYXRpb24oaWR4KSArIHN0cm9rZU9mZnNldCAqIGNvcHlOdW1iZXI7XG5cbiAgICAgICAgICAgIGxldCB2ZXJ0aWNhbFRyYW5zbGF0ZSA9XG4gICAgICAgICAgICAgIGR1cGxpY2F0ZVZlcnRpY2FsUG9zaXRpb24gLSBzdHJva2VPZmZzZXQgKiBjb3B5TnVtYmVyO1xuXG4gICAgICAgICAgICBwLnB1c2goKTtcbiAgICAgICAgICAgIHAuc2NhbGUoMSwgdmVydGljYWxTY2FsZSk7XG4gICAgICAgICAgICBwLnRleHQoY2hhci5sZXR0ZXIsIGhvcml6b250YWxUcmFuc2xhdGUsIHZlcnRpY2FsVHJhbnNsYXRlKTtcbiAgICAgICAgICAgIHAucG9wKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHAud2luZG93UmVzaXplZCA9ICgpID0+IHtcbiAgICBwLnJlc2l6ZUNhbnZhcyhXLCBIKTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERoYXJtYUNhbnZhc0Rpc3BsYXk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sketches/p5/dharma-water-distort.canvas.tsx\n");

/***/ })

})