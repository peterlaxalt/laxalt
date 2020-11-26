webpackHotUpdate_N_E("pages/projects/three-with-canvas-texture",{

/***/ "./sketches/p5/dharma-water-distort.canvas.tsx":
/*!*****************************************************!*\
  !*** ./sketches/p5/dharma-water-distort.canvas.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _three_three_water_distort_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../three/three-water-distort.canvas */ \"./sketches/three/three-water-distort.canvas.ts\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/**\n *\n * Shader fun\n * @author Peter Laxalt\n *\n */\n // Begin Component\n// __________________________________________________________________________\n\nvar DharmaCanvasDisplay = function DharmaCanvasDisplay(W, H, ID, DharmaTheme, parentEl) {\n  return function (p) {\n    // _________________________________________________\n    // Config\n    var canvas; // ____________________________\n    // Fonts\n\n    var dharmaFont; // ____________________________\n    // Typography\n\n    var text = \"SIMON\";\n    var splitCharacterArray = text.split(\"\");\n    var characters = splitCharacterArray.map(function (character, idx) {\n      return {\n        letter: character,\n        count: 1,\n        idx: idx,\n        copies: 5,\n        copiesLastVisible: 0,\n        copiesAreVisible: false,\n        countIsIncrementing: true,\n        countIsDecrementing: false,\n        copiesAreIncrementing: true,\n        copiesAreDecrementing: false\n      };\n    });\n    var characterCount = splitCharacterArray.length;\n    var characterWidth = W / characterCount;\n    var characterSize = H * 1.25;\n    console.log(characterSize, \"characterSize\"); // ____________________________\n    // Counts\n    // let renderCount: number = 0;\n\n    var previousCountUpdateTime = 0;\n    var previousCopyUpdateTime = 0; // ____________________________\n    // Strokes\n\n    var strokeWidth = 4;\n    var strokeOffset = strokeWidth * 1.5; // ____________________________\n    // Limits\n\n    var maxCount = 3;\n    var minCount = 1;\n    var maxCopies = 12;\n    var minCopies = 1;\n    var frameRate = 10; // ____________________________\n    // Translation\n    // let previousVerticalTranslation: number = H / 2.25;\n\n    var verticalTranslationWhitespaceCompensation = 2.25;\n\n    var previousHorizontalTranslation = function previousHorizontalTranslation(idx) {\n      return -60 + (characterWidth * idx + characterWidth / 1.5 + strokeOffset);\n    }; // _________________________________________________\n    // Preload\n\n\n    p.preload = function () {\n      dharmaFont = p.loadFont(\"/fonts/dharma/dharma_regular.ttf\");\n    }; // _________________________________________________\n    // Setup\n\n\n    p.setup = function () {\n      // Our Canvas\n      canvas = p.createCanvas(W, H);\n      Object(_three_three_water_distort_canvas__WEBPACK_IMPORTED_MODULE_1__[\"ThreeWaterCanvas\"])(parentEl, canvas.elt, DharmaTheme);\n      p.frameRate(frameRate);\n    }; // _________________________________________________\n    // Update Character\n\n\n    var updateCharacter = function updateCharacter(_char, idx) {\n      if (_char.count < maxCount && _char.countIsIncrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char), {}, {\n          count: _char.count + 1\n        });\n        previousCountUpdateTime = p.millis();\n        return;\n      } else if (_char.count === maxCount) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char), {}, {\n          count: _char.count - 1,\n          countIsIncrementing: false,\n          countIsDecrementing: true\n        });\n        previousCountUpdateTime = p.millis();\n        return;\n      } else if (_char.count > minCount && _char.countIsDecrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char), {}, {\n          count: _char.count - 1,\n          countIsDecrementing: true\n        });\n        previousCountUpdateTime = p.millis();\n        return;\n      } else if (_char.count === minCount && _char.countIsDecrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char), {}, {\n          count: _char.count + 1,\n          countIsIncrementing: true,\n          countIsDecrementing: false\n        });\n        previousCountUpdateTime = p.millis();\n        return;\n      }\n\n      return;\n    }; // _________________________________________________\n    // Update Copies\n\n\n    var updateCopies = function updateCopies(_char2, idx) {\n      if (_char2.copies < maxCopies && _char2.copiesAreIncrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char2), {}, {\n          copies: _char2.copies + 1\n        });\n        previousCopyUpdateTime = p.millis();\n        return;\n      } else if (_char2.copies === maxCopies) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char2), {}, {\n          copies: _char2.copies - 1,\n          copiesAreIncrementing: false,\n          copiesAreDecrementing: true\n        });\n        previousCopyUpdateTime = p.millis();\n        return;\n      } else if (_char2.copies > minCopies && _char2.copiesAreDecrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char2), {}, {\n          copies: _char2.copies - 1,\n          copiesAreDecrementing: true\n        });\n        previousCopyUpdateTime = p.millis();\n        return;\n      } else if (_char2.copies === minCopies && _char2.copiesAreDecrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char2), {}, {\n          copies: _char2.copies + 1,\n          copiesAreIncrementing: true,\n          copiesAreDecrementing: false\n        });\n        previousCopyUpdateTime = p.millis();\n        return;\n      }\n\n      return;\n    }; // _________________________________________________\n    // Draw\n\n\n    p.draw = function () {\n      p.background(DharmaTheme.background);\n      p.textFont(dharmaFont);\n      p.textSize(characterSize);\n      p.textAlign(p.CENTER, p.CENTER);\n      p.fill(\"\".concat(DharmaTheme.foreground));\n      p.strokeWeight(strokeWidth);\n      p.stroke(DharmaTheme.background);\n\n      if (H && W) {\n        // _________________________________________\n        // Loop through our copies\n        characters.map(function (_char3, idx) {\n          p.scale(1, 1);\n          var randomCharPick = Math.random() <= 0.5;\n\n          if (randomCharPick) {\n            updateCopies(_char3, idx);\n          }\n\n          if (randomCharPick && p.millis() - previousCountUpdateTime > 3000) {\n            updateCharacter(_char3, idx);\n          }\n\n          var countArray = Array.from(Array(_char3.count).keys());\n          countArray = countArray.map(function (countNumber) {\n            return countNumber + 1;\n          }); // _________________________________________\n          // Duplicate positions\n\n          countArray.map(function (countNumber, idxx) {\n            var verticalScale = 1 / (_char3.count * 0.95);\n            var verticalSkewDivisible = 2.75;\n            var characterSkewDivisible = 1.36;\n            var duplicateVerticalPosition = _char3.count == 1 ? H / verticalTranslationWhitespaceCompensation : characterSize / verticalSkewDivisible + characterSize / characterSkewDivisible * idxx; // _________________________________________\n            // Make copies\n\n            var copiesArray = Array.from(Array(_char3.copies).keys()); // let randomCopyPick = Math.random() <= 0.5;\n\n            copiesArray = copiesArray.map(function (copyNumber) {\n              return copyNumber + 1;\n            }); // let randomCopyPick = Math.random() <= 0.5;\n            // let copyTimer = p.millis() - previousCopiesVisibleTime > 2000;\n\n            previousCopyUpdateTime; // let isFirstCount = true;\n\n            copiesArray.map(function (copyNumber, idxxx) {\n              // let centerCoordsX = W / 2;\n              // let centerCoordsY = H / 2;\n              // let horizontalTranslate =\n              //   copyNumber !== 1\n              //     ? (previousHorizontalTranslation(idx) +\n              //         (strokeOffset / (p.mouseX / 100)) * copyNumber)\n              //     : previousHorizontalTranslation(idx) +\n              //       strokeOffset * copyNumber;\n              // let verticalTranslate =\n              //   copyNumber !== 1\n              //     ? (duplicateVerticalPosition - (strokeOffset / (p.mouseX / 100)) * copyNumber)\n              //     : duplicateVerticalPosition - strokeOffset * copyNumber;\n              var horizontalTranslate = previousHorizontalTranslation(idx) + strokeOffset * copyNumber;\n              var verticalTranslate = duplicateVerticalPosition - strokeOffset * copyNumber;\n              p.push();\n              p.scale(1, verticalScale);\n              p.text(_char3.letter, horizontalTranslate, verticalTranslate);\n              p.pop();\n            });\n          });\n        });\n      }\n    };\n\n    p.windowResized = function () {\n      p.resizeCanvas(W, H);\n    };\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DharmaCanvasDisplay);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2tldGNoZXMvcDUvZGhhcm1hLXdhdGVyLWRpc3RvcnQuY2FudmFzLnRzeD9kNGEwIl0sIm5hbWVzIjpbIkRoYXJtYUNhbnZhc0Rpc3BsYXkiLCJXIiwiSCIsIklEIiwiRGhhcm1hVGhlbWUiLCJwYXJlbnRFbCIsInAiLCJjYW52YXMiLCJkaGFybWFGb250IiwidGV4dCIsInNwbGl0Q2hhcmFjdGVyQXJyYXkiLCJzcGxpdCIsImNoYXJhY3RlcnMiLCJtYXAiLCJjaGFyYWN0ZXIiLCJpZHgiLCJsZXR0ZXIiLCJjb3VudCIsImNvcGllcyIsImNvcGllc0xhc3RWaXNpYmxlIiwiY29waWVzQXJlVmlzaWJsZSIsImNvdW50SXNJbmNyZW1lbnRpbmciLCJjb3VudElzRGVjcmVtZW50aW5nIiwiY29waWVzQXJlSW5jcmVtZW50aW5nIiwiY29waWVzQXJlRGVjcmVtZW50aW5nIiwiY2hhcmFjdGVyQ291bnQiLCJsZW5ndGgiLCJjaGFyYWN0ZXJXaWR0aCIsImNoYXJhY3RlclNpemUiLCJjb25zb2xlIiwibG9nIiwicHJldmlvdXNDb3VudFVwZGF0ZVRpbWUiLCJwcmV2aW91c0NvcHlVcGRhdGVUaW1lIiwic3Ryb2tlV2lkdGgiLCJzdHJva2VPZmZzZXQiLCJtYXhDb3VudCIsIm1pbkNvdW50IiwibWF4Q29waWVzIiwibWluQ29waWVzIiwiZnJhbWVSYXRlIiwidmVydGljYWxUcmFuc2xhdGlvbldoaXRlc3BhY2VDb21wZW5zYXRpb24iLCJwcmV2aW91c0hvcml6b250YWxUcmFuc2xhdGlvbiIsInByZWxvYWQiLCJsb2FkRm9udCIsInNldHVwIiwiY3JlYXRlQ2FudmFzIiwiVGhyZWVXYXRlckNhbnZhcyIsImVsdCIsInVwZGF0ZUNoYXJhY3RlciIsImNoYXIiLCJtaWxsaXMiLCJ1cGRhdGVDb3BpZXMiLCJkcmF3IiwiYmFja2dyb3VuZCIsInRleHRGb250IiwidGV4dFNpemUiLCJ0ZXh0QWxpZ24iLCJDRU5URVIiLCJmaWxsIiwiZm9yZWdyb3VuZCIsInN0cm9rZVdlaWdodCIsInN0cm9rZSIsInNjYWxlIiwicmFuZG9tQ2hhclBpY2siLCJNYXRoIiwicmFuZG9tIiwiY291bnRBcnJheSIsIkFycmF5IiwiZnJvbSIsImtleXMiLCJjb3VudE51bWJlciIsImlkeHgiLCJ2ZXJ0aWNhbFNjYWxlIiwidmVydGljYWxTa2V3RGl2aXNpYmxlIiwiY2hhcmFjdGVyU2tld0RpdmlzaWJsZSIsImR1cGxpY2F0ZVZlcnRpY2FsUG9zaXRpb24iLCJjb3BpZXNBcnJheSIsImNvcHlOdW1iZXIiLCJpZHh4eCIsImhvcml6b250YWxUcmFuc2xhdGUiLCJ2ZXJ0aWNhbFRyYW5zbGF0ZSIsInB1c2giLCJwb3AiLCJ3aW5kb3dSZXNpemVkIiwicmVzaXplQ2FudmFzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FNQTtBQUNBOztBQWtDQSxJQUFNQSxtQkFBNkMsR0FBRyxTQUFoREEsbUJBQWdELENBQ3BEQyxDQURvRCxFQUVwREMsQ0FGb0QsRUFHcERDLEVBSG9ELEVBSXBEQyxXQUpvRCxFQUtwREMsUUFMb0Q7QUFBQSxTQU1qRCxVQUFDQyxDQUFELEVBQVc7QUFDZDtBQUNBO0FBRUEsUUFBSUMsTUFBSixDQUpjLENBTWQ7QUFDQTs7QUFDQSxRQUFJQyxVQUFKLENBUmMsQ0FVZDtBQUNBOztBQUNBLFFBQUlDLElBQUksR0FBRyxPQUFYO0FBRUEsUUFBSUMsbUJBQW1CLEdBQUdELElBQUksQ0FBQ0UsS0FBTCxDQUFXLEVBQVgsQ0FBMUI7QUFDQSxRQUFJQyxVQUFtQyxHQUFHRixtQkFBbUIsQ0FBQ0csR0FBcEIsQ0FDeEMsVUFBQ0MsU0FBRCxFQUFvQkMsR0FBcEIsRUFBb0M7QUFDbEMsYUFBTztBQUNMQyxjQUFNLEVBQUVGLFNBREg7QUFFTEcsYUFBSyxFQUFFLENBRkY7QUFHTEYsV0FBRyxFQUFFQSxHQUhBO0FBS0xHLGNBQU0sRUFBRSxDQUxIO0FBTUxDLHlCQUFpQixFQUFFLENBTmQ7QUFPTEMsd0JB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QUFnR0E1RSxLQUFDLENBQUM2RSxhQUFGLEdBQWtCLFlBQU07QUFDdEI3RSxPQUFDLENBQUM4RSxZQUFGLENBQWVuRixDQUFmLEVBQWtCQyxDQUFsQjtBQUNELEtBRkQ7QUFHRCxHQXBTcUQ7QUFBQSxDQUF0RDs7QUFzU2VGLGtGQUFmIiwiZmlsZSI6Ii4vc2tldGNoZXMvcDUvZGhhcm1hLXdhdGVyLWRpc3RvcnQuY2FudmFzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqIFNoYWRlciBmdW5cbiAqIEBhdXRob3IgUGV0ZXIgTGF4YWx0XG4gKlxuICovXG5cbmltcG9ydCBwNSwgeyBGb250IH0gZnJvbSBcInA1XCI7XG5pbXBvcnQgeyBMWExUX0NvbG9yVGhlbWUgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL3N0eWxlcy9Db2xvclwiO1xuaW1wb3J0IHsgVGhyZWVXYXRlckNhbnZhcyB9IGZyb20gXCIuLi90aHJlZS90aHJlZS13YXRlci1kaXN0b3J0LmNhbnZhc1wiO1xuXG4vLyBCZWdpbiBDb21wb25lbnRcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG5cbmV4cG9ydCB0eXBlIExYTFRfRGhhcm1hQ2FudmFzID0ge1xuICBXOiBudW1iZXI7XG4gIEg6IG51bWJlcjtcbiAgSUQ6IG51bWJlcjtcbiAgQkc6IExYTFRfQ29sb3JUaGVtZTtcbiAgcGFyZW50RWw6IEhUTUxEaXZFbGVtZW50O1xufTtcblxuZXhwb3J0IHR5cGUgTFhMVF9EaGFybWFDYW52YXNEaXNwbGF5ID0gKFxuICBXOiBudW1iZXIsXG4gIEg6IG51bWJlcixcbiAgSUQ6IG51bWJlcixcbiAgQkc6IExYTFRfQ29sb3JUaGVtZSxcbiAgcGFyZW50RWw6IEhUTUxEaXZFbGVtZW50XG4pID0+IChwOiBwNSkgPT4gdm9pZDtcblxudHlwZSBMWExUX0RoYXJtYUNhbnZhc0NoYXIgPSB7XG4gIGxldHRlcjogc3RyaW5nO1xuICBjb3VudDogbnVtYmVyO1xuICBpZHg6IG51bWJlcjtcblxuICBjb3BpZXM6IG51bWJlcjtcbiAgY29waWVzTGFzdFZpc2libGU6IG51bWJlcjtcbiAgY29waWVzQXJlVmlzaWJsZTogYm9vbGVhbjtcblxuICBjb3BpZXNBcmVJbmNyZW1lbnRpbmc6IGJvb2xlYW47XG4gIGNvcGllc0FyZURlY3JlbWVudGluZzogYm9vbGVhbjtcblxuICBjb3VudElzSW5jcmVtZW50aW5nOiBib29sZWFuO1xuICBjb3VudElzRGVjcmVtZW50aW5nOiBib29sZWFuO1xufTtcblxuY29uc3QgRGhhcm1hQ2FudmFzRGlzcGxheTogTFhMVF9EaGFybWFDYW52YXNEaXNwbGF5ID0gKFxuICBXLFxuICBILFxuICBJRCxcbiAgRGhhcm1hVGhlbWUsXG4gIHBhcmVudEVsXG4pID0+IChwOiBwNSkgPT4ge1xuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIENvbmZpZ1xuXG4gIGxldCBjYW52YXM7XG5cbiAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAvLyBGb250c1xuICBsZXQgZGhhcm1hRm9udDogRm9udDtcblxuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIFR5cG9ncmFwaHlcbiAgbGV0IHRleHQgPSBcIlNJTU9OXCI7XG5cbiAgbGV0IHNwbGl0Q2hhcmFjdGVyQXJyYXkgPSB0ZXh0LnNwbGl0KFwiXCIpO1xuICBsZXQgY2hhcmFjdGVyczogTFhMVF9EaGFybWFDYW52YXNDaGFyW10gPSBzcGxpdENoYXJhY3RlckFycmF5Lm1hcChcbiAgICAoY2hhcmFjdGVyOiBzdHJpbmcsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsZXR0ZXI6IGNoYXJhY3RlcixcbiAgICAgICAgY291bnQ6IDEsXG4gICAgICAgIGlkeDogaWR4LFxuXG4gICAgICAgIGNvcGllczogNSxcbiAgICAgICAgY29waWVzTGFzdFZpc2libGU6IDAsXG4gICAgICAgIGNvcGllc0FyZVZpc2libGU6IGZhbHNlLFxuXG4gICAgICAgIGNvdW50SXNJbmNyZW1lbnRpbmc6IHRydWUsXG4gICAgICAgIGNvdW50SXNEZWNyZW1lbnRpbmc6IGZhbHNlLFxuXG4gICAgICAgIGNvcGllc0FyZUluY3JlbWVudGluZzogdHJ1ZSxcbiAgICAgICAgY29waWVzQXJlRGVjcmVtZW50aW5nOiBmYWxzZSxcbiAgICAgIH07XG4gICAgfVxuICApO1xuXG4gIGxldCBjaGFyYWN0ZXJDb3VudDogbnVtYmVyID0gc3BsaXRDaGFyYWN0ZXJBcnJheS5sZW5ndGg7XG4gIGxldCBjaGFyYWN0ZXJXaWR0aDogbnVtYmVyID0gVyAvIGNoYXJhY3RlckNvdW50O1xuICBsZXQgY2hhcmFjdGVyU2l6ZTogbnVtYmVyID0gSCAqIDEuMjU7XG5cbiAgY29uc29sZS5sb2coY2hhcmFjdGVyU2l6ZSwgXCJjaGFyYWN0ZXJTaXplXCIpO1xuXG4gIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gQ291bnRzXG4gIC8vIGxldCByZW5kZXJDb3VudDogbnVtYmVyID0gMDtcbiAgbGV0IHByZXZpb3VzQ291bnRVcGRhdGVUaW1lOiBudW1iZXIgPSAwO1xuICBsZXQgcHJldmlvdXNDb3B5VXBkYXRlVGltZTogbnVtYmVyID0gMDtcblxuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIFN0cm9rZXNcbiAgbGV0IHN0cm9rZVdpZHRoOiBudW1iZXIgPSA0O1xuICBsZXQgc3Ryb2tlT2Zmc2V0OiBudW1iZXIgPSBzdHJva2VXaWR0aCAqIDEuNTtcblxuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIExpbWl0c1xuICBsZXQgbWF4Q291bnQgPSAzO1xuICBsZXQgbWluQ291bnQgPSAxO1xuXG4gIGxldCBtYXhDb3BpZXMgPSAxMjtcbiAgbGV0IG1pbkNvcGllcyA9IDE7XG5cbiAgbGV0IGZyYW1lUmF0ZSA9IDEwO1xuXG4gIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gVHJhbnNsYXRpb25cbiAgLy8gbGV0IHByZXZpb3VzVmVydGljYWxUcmFuc2xhdGlvbjogbnVtYmVyID0gSCAvIDIuMjU7XG5cbiAgbGV0IHZlcnRpY2FsVHJhbnNsYXRpb25XaGl0ZXNwYWNlQ29tcGVuc2F0aW9uOiBudW1iZXIgPSAyLjI1O1xuICBjb25zdCBwcmV2aW91c0hvcml6b250YWxUcmFuc2xhdGlvbiA9IChpZHg6IG51bWJlcikgPT5cbiAgICAtNjAgKyAoY2hhcmFjdGVyV2lkdGggKiBpZHggKyBjaGFyYWN0ZXJXaWR0aCAvIDEuNSArIHN0cm9rZU9mZnNldCk7XG5cbiAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAvLyBQcmVsb2FkXG4gIHAucHJlbG9hZCA9ICgpID0+IHtcbiAgICBkaGFybWFGb250ID0gcC5sb2FkRm9udChgL2ZvbnRzL2RoYXJtYS9kaGFybWFfcmVndWxhci50dGZgKTtcbiAgfTtcblxuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIFNldHVwXG4gIHAuc2V0dXAgPSAoKSA9PiB7XG4gICAgLy8gT3VyIENhbnZhc1xuICAgIGNhbnZhcyA9IHAuY3JlYXRlQ2FudmFzKFcsIEgpO1xuXG4gICAgVGhyZWVXYXRlckNhbnZhcyhwYXJlbnRFbCwgY2FudmFzLmVsdCwgRGhhcm1hVGhlbWUpO1xuXG4gICAgcC5mcmFtZVJhdGUoZnJhbWVSYXRlKTtcbiAgfTtcblxuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIFVwZGF0ZSBDaGFyYWN0ZXJcbiAgY29uc3QgdXBkYXRlQ2hhcmFjdGVyID0gKGNoYXI6IExYTFRfRGhhcm1hQ2FudmFzQ2hhciwgaWR4OiBudW1iZXIpID0+IHtcbiAgICBpZiAoY2hhci5jb3VudCA8IG1heENvdW50ICYmIGNoYXIuY291bnRJc0luY3JlbWVudGluZykge1xuICAgICAgY2hhcmFjdGVyc1tpZHhdID0ge1xuICAgICAgICAuLi5jaGFyLFxuICAgICAgICBjb3VudDogY2hhci5jb3VudCArIDEsXG4gICAgICB9O1xuXG4gICAgICBwcmV2aW91c0NvdW50VXBkYXRlVGltZSA9IHAubWlsbGlzKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGNoYXIuY291bnQgPT09IG1heENvdW50KSB7XG4gICAgICBjaGFyYWN0ZXJzW2lkeF0gPSB7XG4gICAgICAgIC4uLmNoYXIsXG4gICAgICAgIGNvdW50OiBjaGFyLmNvdW50IC0gMSxcbiAgICAgICAgY291bnRJc0luY3JlbWVudGluZzogZmFsc2UsXG4gICAgICAgIGNvdW50SXNEZWNyZW1lbnRpbmc6IHRydWUsXG4gICAgICB9O1xuXG4gICAgICBwcmV2aW91c0NvdW50VXBkYXRlVGltZSA9IHAubWlsbGlzKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGNoYXIuY291bnQgPiBtaW5Db3VudCAmJiBjaGFyLmNvdW50SXNEZWNyZW1lbnRpbmcpIHtcbiAgICAgIGNoYXJhY3RlcnNbaWR4XSA9IHtcbiAgICAgICAgLi4uY2hhcixcbiAgICAgICAgY291bnQ6IGNoYXIuY291bnQgLSAxLFxuICAgICAgICBjb3VudElzRGVjcmVtZW50aW5nOiB0cnVlLFxuICAgICAgfTtcblxuICAgICAgcHJldmlvdXNDb3VudFVwZGF0ZVRpbWUgPSBwLm1pbGxpcygpO1xuXG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChjaGFyLmNvdW50ID09PSBtaW5Db3VudCAmJiBjaGFyLmNvdW50SXNEZWNyZW1lbnRpbmcpIHtcbiAgICAgIGNoYXJhY3RlcnNbaWR4XSA9IHtcbiAgICAgICAgLi4uY2hhcixcbiAgICAgICAgY291bnQ6IGNoYXIuY291bnQgKyAxLFxuICAgICAgICBjb3VudElzSW5jcmVtZW50aW5nOiB0cnVlLFxuICAgICAgICBjb3VudElzRGVjcmVtZW50aW5nOiBmYWxzZSxcbiAgICAgIH07XG5cbiAgICAgIHByZXZpb3VzQ291bnRVcGRhdGVUaW1lID0gcC5taWxsaXMoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfTtcblxuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIFVwZGF0ZSBDb3BpZXNcbiAgY29uc3QgdXBkYXRlQ29waWVzID0gKGNoYXI6IExYTFRfRGhhcm1hQ2FudmFzQ2hhciwgaWR4OiBudW1iZXIpID0+IHtcbiAgICBpZiAoY2hhci5jb3BpZXMgPCBtYXhDb3BpZXMgJiYgY2hhci5jb3BpZXNBcmVJbmNyZW1lbnRpbmcpIHtcbiAgICAgIGNoYXJhY3RlcnNbaWR4XSA9IHtcbiAgICAgICAgLi4uY2hhcixcbiAgICAgICAgY29waWVzOiBjaGFyLmNvcGllcyArIDEsXG4gICAgICB9O1xuXG4gICAgICBwcmV2aW91c0NvcHlVcGRhdGVUaW1lID0gcC5taWxsaXMoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoY2hhci5jb3BpZXMgPT09IG1heENvcGllcykge1xuICAgICAgY2hhcmFjdGVyc1tpZHhdID0ge1xuICAgICAgICAuLi5jaGFyLFxuICAgICAgICBjb3BpZXM6IGNoYXIuY29waWVzIC0gMSxcbiAgICAgICAgY29waWVzQXJlSW5jcmVtZW50aW5nOiBmYWxzZSxcbiAgICAgICAgY29waWVzQXJlRGVjcmVtZW50aW5nOiB0cnVlLFxuICAgICAgfTtcblxuICAgICAgcHJldmlvdXNDb3B5VXBkYXRlVGltZSA9IHAubWlsbGlzKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGNoYXIuY29waWVzID4gbWluQ29waWVzICYmIGNoYXIuY29waWVzQXJlRGVjcmVtZW50aW5nKSB7XG4gICAgICBjaGFyYWN0ZXJzW2lkeF0gPSB7XG4gICAgICAgIC4uLmNoYXIsXG4gICAgICAgIGNvcGllczogY2hhci5jb3BpZXMgLSAxLFxuICAgICAgICBjb3BpZXNBcmVEZWNyZW1lbnRpbmc6IHRydWUsXG4gICAgICB9O1xuXG4gICAgICBwcmV2aW91c0NvcHlVcGRhdGVUaW1lID0gcC5taWxsaXMoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoY2hhci5jb3BpZXMgPT09IG1pbkNvcGllcyAmJiBjaGFyLmNvcGllc0FyZURlY3JlbWVudGluZykge1xuICAgICAgY2hhcmFjdGVyc1tpZHhdID0ge1xuICAgICAgICAuLi5jaGFyLFxuICAgICAgICBjb3BpZXM6IGNoYXIuY29waWVzICsgMSxcbiAgICAgICAgY29waWVzQXJlSW5jcmVtZW50aW5nOiB0cnVlLFxuICAgICAgICBjb3BpZXNBcmVEZWNyZW1lbnRpbmc6IGZhbHNlLFxuICAgICAgfTtcblxuICAgICAgcHJldmlvdXNDb3B5VXBkYXRlVGltZSA9IHAubWlsbGlzKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH07XG5cbiAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAvLyBEcmF3XG4gIHAuZHJhdyA9ICgpID0+IHtcbiAgICBwLmJhY2tncm91bmQoRGhhcm1hVGhlbWUuYmFja2dyb3VuZCk7XG5cbiAgICBwLnRleHRGb250KGRoYXJtYUZvbnQpO1xuXG4gICAgcC50ZXh0U2l6ZShjaGFyYWN0ZXJTaXplKTtcblxuICAgIHAudGV4dEFsaWduKHAuQ0VOVEVSLCBwLkNFTlRFUik7XG5cbiAgICBwLmZpbGwoYCR7RGhhcm1hVGhlbWUuZm9yZWdyb3VuZH1gKTtcbiAgICBwLnN0cm9rZVdlaWdodChzdHJva2VXaWR0aCk7XG4gICAgcC5zdHJva2UoRGhhcm1hVGhlbWUuYmFja2dyb3VuZCk7XG5cbiAgICBpZiAoSCAmJiBXKSB7XG4gICAgICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAgICAgLy8gTG9vcCB0aHJvdWdoIG91ciBjb3BpZXNcbiAgICAgIGNoYXJhY3RlcnMubWFwKChjaGFyOiBMWExUX0RoYXJtYUNhbnZhc0NoYXIsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICAgIHAuc2NhbGUoMSwgMSk7XG5cbiAgICAgICAgbGV0IHJhbmRvbUNoYXJQaWNrID0gTWF0aC5yYW5kb20oKSA8PSAwLjU7XG5cbiAgICAgICAgaWYgKHJhbmRvbUNoYXJQaWNrKSB7XG4gICAgICAgICAgdXBkYXRlQ29waWVzKGNoYXIsIGlkeCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmFuZG9tQ2hhclBpY2sgJiYgcC5taWxsaXMoKSAtIHByZXZpb3VzQ291bnRVcGRhdGVUaW1lID4gMzAwMCkge1xuICAgICAgICAgIHVwZGF0ZUNoYXJhY3RlcihjaGFyLCBpZHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvdW50QXJyYXk6IG51bWJlcltdID0gQXJyYXkuZnJvbShBcnJheShjaGFyLmNvdW50KS5rZXlzKCkpO1xuXG4gICAgICAgIGNvdW50QXJyYXkgPSBjb3VudEFycmF5Lm1hcCgoY291bnROdW1iZXI6IG51bWJlcikgPT4ge1xuICAgICAgICAgIHJldHVybiBjb3VudE51bWJlciArIDE7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gICAgICAgIC8vIER1cGxpY2F0ZSBwb3NpdGlvbnNcbiAgICAgICAgY291bnRBcnJheS5tYXAoKGNvdW50TnVtYmVyOiBudW1iZXIsIGlkeHg6IG51bWJlcikgPT4ge1xuICAgICAgICAgIGxldCB2ZXJ0aWNhbFNjYWxlID0gMSAvIChjaGFyLmNvdW50ICogMC45NSk7XG5cbiAgICAgICAgICBsZXQgdmVydGljYWxTa2V3RGl2aXNpYmxlOiBudW1iZXIgPSAyLjc1O1xuICAgICAgICAgIGxldCBjaGFyYWN0ZXJTa2V3RGl2aXNpYmxlOiBudW1iZXIgPSAxLjM2O1xuXG4gICAgICAgICAgbGV0IGR1cGxpY2F0ZVZlcnRpY2FsUG9zaXRpb246IG51bWJlciA9XG4gICAgICAgICAgICBjaGFyLmNvdW50ID09IDFcbiAgICAgICAgICAgICAgPyBIIC8gdmVydGljYWxUcmFuc2xhdGlvbldoaXRlc3BhY2VDb21wZW5zYXRpb25cbiAgICAgICAgICAgICAgOiBjaGFyYWN0ZXJTaXplIC8gdmVydGljYWxTa2V3RGl2aXNpYmxlICtcbiAgICAgICAgICAgICAgICAoY2hhcmFjdGVyU2l6ZSAvIGNoYXJhY3RlclNrZXdEaXZpc2libGUpICogaWR4eDtcblxuICAgICAgICAgIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gICAgICAgICAgLy8gTWFrZSBjb3BpZXNcbiAgICAgICAgICBsZXQgY29waWVzQXJyYXk6IG51bWJlcltdID0gQXJyYXkuZnJvbShBcnJheShjaGFyLmNvcGllcykua2V5cygpKTtcbiAgICAgICAgICAvLyBsZXQgcmFuZG9tQ29weVBpY2sgPSBNYXRoLnJhbmRvbSgpIDw9IDAuNTtcblxuICAgICAgICAgIGNvcGllc0FycmF5ID0gY29waWVzQXJyYXkubWFwKChjb3B5TnVtYmVyOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjb3B5TnVtYmVyICsgMTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8vIGxldCByYW5kb21Db3B5UGljayA9IE1hdGgucmFuZG9tKCkgPD0gMC41O1xuICAgICAgICAgIC8vIGxldCBjb3B5VGltZXIgPSBwLm1pbGxpcygpIC0gcHJldmlvdXNDb3BpZXNWaXNpYmxlVGltZSA+IDIwMDA7XG4gICAgICAgICAgcHJldmlvdXNDb3B5VXBkYXRlVGltZTtcblxuICAgICAgICAgIC8vIGxldCBpc0ZpcnN0Q291bnQgPSB0cnVlO1xuXG4gICAgICAgICAgY29waWVzQXJyYXkubWFwKChjb3B5TnVtYmVyOiBudW1iZXIsIGlkeHh4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIC8vIGxldCBjZW50ZXJDb29yZHNYID0gVyAvIDI7XG4gICAgICAgICAgICAvLyBsZXQgY2VudGVyQ29vcmRzWSA9IEggLyAyO1xuXG4gICAgICAgICAgICAvLyBsZXQgaG9yaXpvbnRhbFRyYW5zbGF0ZSA9XG4gICAgICAgICAgICAvLyAgIGNvcHlOdW1iZXIgIT09IDFcbiAgICAgICAgICAgIC8vICAgICA/IChwcmV2aW91c0hvcml6b250YWxUcmFuc2xhdGlvbihpZHgpICtcbiAgICAgICAgICAgIC8vICAgICAgICAgKHN0cm9rZU9mZnNldCAvIChwLm1vdXNlWCAvIDEwMCkpICogY29weU51bWJlcilcbiAgICAgICAgICAgIC8vICAgICA6IHByZXZpb3VzSG9yaXpvbnRhbFRyYW5zbGF0aW9uKGlkeCkgK1xuICAgICAgICAgICAgLy8gICAgICAgc3Ryb2tlT2Zmc2V0ICogY29weU51bWJlcjtcblxuICAgICAgICAgICAgLy8gbGV0IHZlcnRpY2FsVHJhbnNsYXRlID1cbiAgICAgICAgICAgIC8vICAgY29weU51bWJlciAhPT0gMVxuICAgICAgICAgICAgLy8gICAgID8gKGR1cGxpY2F0ZVZlcnRpY2FsUG9zaXRpb24gLSAoc3Ryb2tlT2Zmc2V0IC8gKHAubW91c2VYIC8gMTAwKSkgKiBjb3B5TnVtYmVyKVxuICAgICAgICAgICAgLy8gICAgIDogZHVwbGljYXRlVmVydGljYWxQb3NpdGlvbiAtIHN0cm9rZU9mZnNldCAqIGNvcHlOdW1iZXI7XG5cbiAgICAgICAgICAgIGxldCBob3Jpem9udGFsVHJhbnNsYXRlID1cbiAgICAgICAgICAgICAgcHJldmlvdXNIb3Jpem9udGFsVHJhbnNsYXRpb24oaWR4KSArIHN0cm9rZU9mZnNldCAqIGNvcHlOdW1iZXI7XG5cbiAgICAgICAgICAgIGxldCB2ZXJ0aWNhbFRyYW5zbGF0ZSA9XG4gICAgICAgICAgICAgIGR1cGxpY2F0ZVZlcnRpY2FsUG9zaXRpb24gLSBzdHJva2VPZmZzZXQgKiBjb3B5TnVtYmVyO1xuXG4gICAgICAgICAgICBwLnB1c2goKTtcbiAgICAgICAgICAgIHAuc2NhbGUoMSwgdmVydGljYWxTY2FsZSk7XG4gICAgICAgICAgICBwLnRleHQoY2hhci5sZXR0ZXIsIGhvcml6b250YWxUcmFuc2xhdGUsIHZlcnRpY2FsVHJhbnNsYXRlKTtcbiAgICAgICAgICAgIHAucG9wKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHAud2luZG93UmVzaXplZCA9ICgpID0+IHtcbiAgICBwLnJlc2l6ZUNhbnZhcyhXLCBIKTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERoYXJtYUNhbnZhc0Rpc3BsYXk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sketches/p5/dharma-water-distort.canvas.tsx\n");

/***/ })

})