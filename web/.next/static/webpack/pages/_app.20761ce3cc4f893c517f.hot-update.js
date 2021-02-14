webpackHotUpdate_N_E("pages/_app",{

/***/ "./sketches/p5/no-water-distort-L.canvas.tsx":
/*!***************************************************!*\
  !*** ./sketches/p5/no-water-distort-L.canvas.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/**\n *\n * Shader fun\n * @author Peter Laxalt\n *\n */\n// Begin Component\n// __________________________________________________________________________\nvar DharmaCanvasDisplay = function DharmaCanvasDisplay(W, H, ID, // DharmaTheme,\nparentEl) {\n  return function (p) {\n    // _________________________________________________\n    // Config\n    var canvas; // ____________________________\n    // Fonts\n\n    var dharmaFont; // ____________________________\n    // Typography\n\n    var text = \"LAX\";\n    var splitCharacterArray = text.split(\"\");\n    var characters = splitCharacterArray.map(function (character, idx) {\n      return {\n        letter: character,\n        count: 1,\n        idx: idx,\n        copies: 5,\n        copiesLastVisible: 0,\n        copiesAreVisible: false,\n        countIsIncrementing: true,\n        countIsDecrementing: false,\n        copiesAreIncrementing: true,\n        copiesAreDecrementing: false\n      };\n    });\n    var characterCount = splitCharacterArray.length;\n    var characterWidth = W / characterCount;\n    var characterSize = W > Base.Media.Width.Md ? H * 1.15 : H * .7;\n    var verticalSkewDivisible = 2.75;\n    var characterSkewDivisible = 1.36;\n    console.log(characterSize, \"characterSize\"); // ____________________________\n    // Counts\n    // let renderCount: number = 0;\n\n    var previousCountUpdateTime = 0;\n    var previousCopyUpdateTime = 0; // ____________________________\n    // Strokes\n\n    var strokeWidth = 4;\n    var strokeOffset = strokeWidth * 1.5; // ____________________________\n    // Limits\n\n    var maxCount = 3;\n    var minCount = 1;\n    var maxCopies = 12;\n    var minCopies = 1;\n    var frameRate = 60; // ____________________________\n    // Translation\n    // let previousVerticalTranslation: number = H / 2.25;\n\n    var verticalTranslationWhitespaceCompensation = 2.25;\n\n    var previousHorizontalTranslation = function previousHorizontalTranslation(idx) {\n      return -60 + (characterWidth * idx + characterWidth / 1.5 + strokeOffset);\n    }; // _________________________________________________\n    // Preload\n\n\n    p.preload = function () {\n      dharmaFont = p.loadFont(\"/fonts/dharma/dharma_regular.ttf\");\n    }; // _________________________________________________\n    // Setup\n\n\n    p.setup = function () {\n      // Our Canvas\n      canvas = p.createCanvas(W, H); // ThreeWaterCanvas(parentEl, canvas.elt);\n\n      p.frameRate(frameRate);\n\n      if (window.devicePixelRatio > 1 && window.devicePixelRatio < 3) {\n        p.pixelDensity(1.25);\n      }\n    }; // _________________________________________________\n    // Update Character\n\n\n    var updateCharacter = function updateCharacter(_char, idx) {\n      if (_char.count < maxCount && _char.countIsIncrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char), {}, {\n          count: _char.count + 1\n        });\n        previousCountUpdateTime = p.millis();\n        return;\n      } else if (_char.count === maxCount) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char), {}, {\n          count: _char.count - 1,\n          countIsIncrementing: false,\n          countIsDecrementing: true\n        });\n        previousCountUpdateTime = p.millis();\n        return;\n      } else if (_char.count > minCount && _char.countIsDecrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char), {}, {\n          count: _char.count - 1,\n          countIsDecrementing: true\n        });\n        previousCountUpdateTime = p.millis();\n        return;\n      } else if (_char.count === minCount && _char.countIsDecrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char), {}, {\n          count: _char.count + 1,\n          countIsIncrementing: true,\n          countIsDecrementing: false\n        });\n        previousCountUpdateTime = p.millis();\n        return;\n      }\n\n      return;\n    }; // _________________________________________________\n    // Update Copies\n\n\n    var updateCopies = function updateCopies(_char2, idx) {\n      if (_char2.copies < maxCopies && _char2.copiesAreIncrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char2), {}, {\n          copies: _char2.copies + 1\n        });\n        previousCopyUpdateTime = p.millis();\n        return;\n      } else if (_char2.copies === maxCopies) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char2), {}, {\n          copies: _char2.copies - 1,\n          copiesAreIncrementing: false,\n          copiesAreDecrementing: true\n        });\n        previousCopyUpdateTime = p.millis();\n        return;\n      } else if (_char2.copies > minCopies && _char2.copiesAreDecrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char2), {}, {\n          copies: _char2.copies - 1,\n          copiesAreDecrementing: true\n        });\n        previousCopyUpdateTime = p.millis();\n        return;\n      } else if (_char2.copies === minCopies && _char2.copiesAreDecrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char2), {}, {\n          copies: _char2.copies + 1,\n          copiesAreIncrementing: true,\n          copiesAreDecrementing: false\n        });\n        previousCopyUpdateTime = p.millis();\n        return;\n      }\n\n      return;\n    }; // _________________________________________________\n    // Draw\n\n\n    p.draw = function () {\n      if (p.frameCount % 10 === 0 && !window.dharmaPaused) {\n        p.background(window.laxaltUniversalTheme.background);\n        p.textFont(dharmaFont);\n        p.textSize(characterSize);\n        p.textAlign(p.CENTER, p.CENTER);\n        p.fill(\"\".concat(window.laxaltUniversalTheme.foreground));\n        p.strokeWeight(strokeWidth);\n        p.stroke(window.laxaltUniversalTheme.background);\n\n        if (H && W) {\n          // _________________________________________\n          // Loop through our copies\n          characters.map(function (_char3, idx) {\n            p.scale(1, 1);\n            var randomCharPick = Math.random() <= 0.5;\n\n            if (randomCharPick) {\n              updateCopies(_char3, idx);\n            }\n\n            if (randomCharPick && p.millis() - previousCountUpdateTime > 3000) {\n              updateCharacter(_char3, idx);\n            }\n\n            var countArray = Array.from(Array(_char3.count).keys());\n            countArray = countArray.map(function (countNumber) {\n              return countNumber + 1;\n            }); // _________________________________________\n            // Duplicate positions\n\n            countArray.map(function (countNumber, idxx) {\n              var verticalScale = 1 / (_char3.count * 0.95);\n              var duplicateVerticalPosition = _char3.count == 1 ? H / verticalTranslationWhitespaceCompensation : characterSize / verticalSkewDivisible + characterSize / characterSkewDivisible * idxx; // _________________________________________\n              // Make copies\n\n              var copiesArray = Array.from(Array(_char3.copies).keys()); // let randomCopyPick = Math.random() <= 0.5;\n\n              copiesArray = copiesArray.map(function (copyNumber) {\n                return copyNumber + 1;\n              }); // let randomCopyPick = Math.random() <= 0.5;\n              // let copyTimer = p.millis() - previousCopiesVisibleTime > 2000;\n\n              previousCopyUpdateTime; // let isFirstCount = true;\n\n              copiesArray.map(function (copyNumber, idxxx) {\n                // let centerCoordsX = W / 2;\n                // let centerCoordsY = H / 2;\n                // let horizontalTranslate =\n                //   copyNumber !== 1\n                //     ? (previousHorizontalTranslation(idx) +\n                //         (strokeOffset / (p.mouseX / 100)) * copyNumber)\n                //     : previousHorizontalTranslation(idx) +\n                //       strokeOffset * copyNumber;\n                // let verticalTranslate =\n                //   copyNumber !== 1\n                //     ? (duplicateVerticalPosition - (strokeOffset / (p.mouseX / 100)) * copyNumber)\n                //     : duplicateVerticalPosition - strokeOffset * copyNumber;\n                var horizontalTranslate = previousHorizontalTranslation(idx) + strokeOffset * copyNumber;\n                var verticalTranslate = duplicateVerticalPosition - strokeOffset * copyNumber;\n                p.push();\n                p.scale(1, verticalScale);\n                p.text(_char3.letter, horizontalTranslate, verticalTranslate);\n                p.pop();\n              });\n            });\n          });\n        }\n      }\n    };\n\n    p.windowResized = function () {\n      p.resizeCanvas(W, H);\n    };\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DharmaCanvasDisplay);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2tldGNoZXMvcDUvbm8td2F0ZXItZGlzdG9ydC1MLmNhbnZhcy50c3g/ZjE3ZCJdLCJuYW1lcyI6WyJEaGFybWFDYW52YXNEaXNwbGF5IiwiVyIsIkgiLCJJRCIsInBhcmVudEVsIiwicCIsImNhbnZhcyIsImRoYXJtYUZvbnQiLCJ0ZXh0Iiwic3BsaXRDaGFyYWN0ZXJBcnJheSIsInNwbGl0IiwiY2hhcmFjdGVycyIsIm1hcCIsImNoYXJhY3RlciIsImlkeCIsImxldHRlciIsImNvdW50IiwiY29waWVzIiwiY29waWVzTGFzdFZpc2libGUiLCJjb3BpZXNBcmVWaXNpYmxlIiwiY291bnRJc0luY3JlbWVudGluZyIsImNvdW50SXNEZWNyZW1lbnRpbmciLCJjb3BpZXNBcmVJbmNyZW1lbnRpbmciLCJjb3BpZXNBcmVEZWNyZW1lbnRpbmciLCJjaGFyYWN0ZXJDb3VudCIsImxlbmd0aCIsImNoYXJhY3RlcldpZHRoIiwiY2hhcmFjdGVyU2l6ZSIsIkJhc2UiLCJNZWRpYSIsIldpZHRoIiwiTWQiLCJ2ZXJ0aWNhbFNrZXdEaXZpc2libGUiLCJjaGFyYWN0ZXJTa2V3RGl2aXNpYmxlIiwiY29uc29sZSIsImxvZyIsInByZXZpb3VzQ291bnRVcGRhdGVUaW1lIiwicHJldmlvdXNDb3B5VXBkYXRlVGltZSIsInN0cm9rZVdpZHRoIiwic3Ryb2tlT2Zmc2V0IiwibWF4Q291bnQiLCJtaW5Db3VudCIsIm1heENvcGllcyIsIm1pbkNvcGllcyIsImZyYW1lUmF0ZSIsInZlcnRpY2FsVHJhbnNsYXRpb25XaGl0ZXNwYWNlQ29tcGVuc2F0aW9uIiwicHJldmlvdXNIb3Jpem9udGFsVHJhbnNsYXRpb24iLCJwcmVsb2FkIiwibG9hZEZvbnQiLCJzZXR1cCIsImNyZWF0ZUNhbnZhcyIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJwaXhlbERlbnNpdHkiLCJ1cGRhdGVDaGFyYWN0ZXIiLCJjaGFyIiwibWlsbGlzIiwidXBkYXRlQ29waWVzIiwiZHJhdyIsImZyYW1lQ291bnQiLCJkaGFybWFQYXVzZWQiLCJiYWNrZ3JvdW5kIiwibGF4YWx0VW5pdmVyc2FsVGhlbWUiLCJ0ZXh0Rm9udCIsInRleHRTaXplIiwidGV4dEFsaWduIiwiQ0VOVEVSIiwiZmlsbCIsImZvcmVncm91bmQiLCJzdHJva2VXZWlnaHQiLCJzdHJva2UiLCJzY2FsZSIsInJhbmRvbUNoYXJQaWNrIiwiTWF0aCIsInJhbmRvbSIsImNvdW50QXJyYXkiLCJBcnJheSIsImZyb20iLCJrZXlzIiwiY291bnROdW1iZXIiLCJpZHh4IiwidmVydGljYWxTY2FsZSIsImR1cGxpY2F0ZVZlcnRpY2FsUG9zaXRpb24iLCJjb3BpZXNBcnJheSIsImNvcHlOdW1iZXIiLCJpZHh4eCIsImhvcml6b250YWxUcmFuc2xhdGUiLCJ2ZXJ0aWNhbFRyYW5zbGF0ZSIsInB1c2giLCJwb3AiLCJ3aW5kb3dSZXNpemVkIiwicmVzaXplQ2FudmFzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFrQ0EsSUFBTUEsbUJBQTZDLEdBQUcsU0FBaERBLG1CQUFnRCxDQUNwREMsQ0FEb0QsRUFFcERDLENBRm9ELEVBR3BEQyxFQUhvRCxFQUlwRDtBQUNBQyxRQUxvRDtBQUFBLFNBTWpELFVBQUNDLENBQUQsRUFBVztBQUNkO0FBQ0E7QUFFQSxRQUFJQyxNQUFKLENBSmMsQ0FNZDtBQUNBOztBQUNBLFFBQUlDLFVBQUosQ0FSYyxDQVVkO0FBQ0E7O0FBQ0EsUUFBSUMsSUFBSSxHQUFHLEtBQVg7QUFFQSxRQUFJQyxtQkFBbUIsR0FBR0QsSUFBSSxDQUFDRSxLQUFMLENBQVcsRUFBWCxDQUExQjtBQUNBLFFBQUlDLFVBQW1DLEdBQUdGLG1CQUFtQixDQUFDRyxHQUFwQixDQUN4QyxVQUFDQyxTQUFELEVBQW9CQyxHQUFwQixFQUFvQztBQUNsQyxhQUFPO0FBQ0xDLGNBQU0sRUFBRUYsU0FESDtBQUVMRyxhQUFLLEVBQUUsQ0FGRjtBQUdM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bUIsR0FDckJ4Qyw2QkFBNkIsQ0FBQ2hDLEdBQUQsQ0FBN0IsR0FBcUN5QixZQUFZLEdBQUc2QyxVQUR0RDtBQUdBLG9CQUFJRyxpQkFBaUIsR0FDbkJMLHlCQUF5QixHQUFHM0MsWUFBWSxHQUFHNkMsVUFEN0M7QUFHQS9FLGlCQUFDLENBQUNtRixJQUFGO0FBQ0FuRixpQkFBQyxDQUFDa0UsS0FBRixDQUFRLENBQVIsRUFBV1UsYUFBWDtBQUNBNUUsaUJBQUMsQ0FBQ0csSUFBRixDQUFPK0MsTUFBSSxDQUFDeEMsTUFBWixFQUFvQnVFLG1CQUFwQixFQUF5Q0MsaUJBQXpDO0FBQ0FsRixpQkFBQyxDQUFDb0YsR0FBRjtBQUNELGVBMUJEO0FBMkJELGFBbkREO0FBb0RELFdBekVEO0FBMEVEO0FBQ0Y7QUFDRixLQXpGRDs7QUEyRkFwRixLQUFDLENBQUNxRixhQUFGLEdBQWtCLFlBQU07QUFDdEJyRixPQUFDLENBQUNzRixZQUFGLENBQWUxRixDQUFmLEVBQWtCQyxDQUFsQjtBQUNELEtBRkQ7QUFHRCxHQXRTcUQ7QUFBQSxDQUF0RDs7QUF3U2VGLGtGQUFmIiwiZmlsZSI6Ii4vc2tldGNoZXMvcDUvbm8td2F0ZXItZGlzdG9ydC1MLmNhbnZhcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqXG4gKiBTaGFkZXIgZnVuXG4gKiBAYXV0aG9yIFBldGVyIExheGFsdFxuICpcbiAqL1xuXG5pbXBvcnQgcDUsIHsgRm9udCB9IGZyb20gXCJwNVwiO1xuaW1wb3J0IHsgVGhyZWVXYXRlckNhbnZhcyB9IGZyb20gXCIuLi90aHJlZS90aHJlZS13YXRlci1kaXN0b3J0LmNhbnZhc1wiO1xuXG4vLyBCZWdpbiBDb21wb25lbnRcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG5cbmV4cG9ydCB0eXBlIExYTFRfRGhhcm1hQ2FudmFzID0ge1xuICBXOiBudW1iZXI7XG4gIEg6IG51bWJlcjtcbiAgSUQ6IG51bWJlcjtcbiAgLy8gQkc6IExYTFRfQ29sb3JUaGVtZTtcbiAgcGFyZW50RWw6IEhUTUxEaXZFbGVtZW50O1xufTtcblxuZXhwb3J0IHR5cGUgTFhMVF9EaGFybWFDYW52YXNEaXNwbGF5ID0gKFxuICBXOiBudW1iZXIsXG4gIEg6IG51bWJlcixcbiAgSUQ6IG51bWJlcixcbiAgLy8gQkc6IExYTFRfQ29sb3JUaGVtZSxcbiAgcGFyZW50RWw6IEhUTUxEaXZFbGVtZW50XG4pID0+IChwOiBwNSkgPT4gdm9pZDtcblxudHlwZSBMWExUX0RoYXJtYUNhbnZhc0NoYXIgPSB7XG4gIGxldHRlcjogc3RyaW5nO1xuICBjb3VudDogbnVtYmVyO1xuICBpZHg6IG51bWJlcjtcblxuICBjb3BpZXM6IG51bWJlcjtcbiAgY29waWVzTGFzdFZpc2libGU6IG51bWJlcjtcbiAgY29waWVzQXJlVmlzaWJsZTogYm9vbGVhbjtcblxuICBjb3BpZXNBcmVJbmNyZW1lbnRpbmc6IGJvb2xlYW47XG4gIGNvcGllc0FyZURlY3JlbWVudGluZzogYm9vbGVhbjtcblxuICBjb3VudElzSW5jcmVtZW50aW5nOiBib29sZWFuO1xuICBjb3VudElzRGVjcmVtZW50aW5nOiBib29sZWFuO1xufTtcblxuY29uc3QgRGhhcm1hQ2FudmFzRGlzcGxheTogTFhMVF9EaGFybWFDYW52YXNEaXNwbGF5ID0gKFxuICBXLFxuICBILFxuICBJRCxcbiAgLy8gRGhhcm1hVGhlbWUsXG4gIHBhcmVudEVsXG4pID0+IChwOiBwNSkgPT4ge1xuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIENvbmZpZ1xuXG4gIGxldCBjYW52YXM7XG5cbiAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAvLyBGb250c1xuICBsZXQgZGhhcm1hRm9udDogRm9udDtcblxuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIFR5cG9ncmFwaHlcbiAgbGV0IHRleHQgPSBcIkxBWFwiO1xuXG4gIGxldCBzcGxpdENoYXJhY3RlckFycmF5ID0gdGV4dC5zcGxpdChcIlwiKTtcbiAgbGV0IGNoYXJhY3RlcnM6IExYTFRfRGhhcm1hQ2FudmFzQ2hhcltdID0gc3BsaXRDaGFyYWN0ZXJBcnJheS5tYXAoXG4gICAgKGNoYXJhY3Rlcjogc3RyaW5nLCBpZHg6IG51bWJlcikgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGV0dGVyOiBjaGFyYWN0ZXIsXG4gICAgICAgIGNvdW50OiAxLFxuICAgICAgICBpZHg6IGlkeCxcblxuICAgICAgICBjb3BpZXM6IDUsXG4gICAgICAgIGNvcGllc0xhc3RWaXNpYmxlOiAwLFxuICAgICAgICBjb3BpZXNBcmVWaXNpYmxlOiBmYWxzZSxcblxuICAgICAgICBjb3VudElzSW5jcmVtZW50aW5nOiB0cnVlLFxuICAgICAgICBjb3VudElzRGVjcmVtZW50aW5nOiBmYWxzZSxcblxuICAgICAgICBjb3BpZXNBcmVJbmNyZW1lbnRpbmc6IHRydWUsXG4gICAgICAgIGNvcGllc0FyZURlY3JlbWVudGluZzogZmFsc2UsXG4gICAgICB9O1xuICAgIH1cbiAgKTtcblxuICBsZXQgY2hhcmFjdGVyQ291bnQ6IG51bWJlciA9IHNwbGl0Q2hhcmFjdGVyQXJyYXkubGVuZ3RoO1xuICBsZXQgY2hhcmFjdGVyV2lkdGg6IG51bWJlciA9IFcgLyBjaGFyYWN0ZXJDb3VudDtcbiAgbGV0IGNoYXJhY3RlclNpemU6IG51bWJlciA9IFcgPiBCYXNlLk1lZGlhLldpZHRoLk1kID8gSCAqIDEuMTUgOiBIICogLjc7XG5cbiAgbGV0IHZlcnRpY2FsU2tld0RpdmlzaWJsZTogbnVtYmVyID0gMi43NTtcbiAgbGV0IGNoYXJhY3RlclNrZXdEaXZpc2libGU6IG51bWJlciA9IDEuMzY7XG5cbiAgY29uc29sZS5sb2coY2hhcmFjdGVyU2l6ZSwgXCJjaGFyYWN0ZXJTaXplXCIpO1xuXG4gIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gQ291bnRzXG4gIC8vIGxldCByZW5kZXJDb3VudDogbnVtYmVyID0gMDtcbiAgbGV0IHByZXZpb3VzQ291bnRVcGRhdGVUaW1lOiBudW1iZXIgPSAwO1xuICBsZXQgcHJldmlvdXNDb3B5VXBkYXRlVGltZTogbnVtYmVyID0gMDtcblxuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIFN0cm9rZXNcbiAgbGV0IHN0cm9rZVdpZHRoOiBudW1iZXIgPSA0O1xuICBsZXQgc3Ryb2tlT2Zmc2V0OiBudW1iZXIgPSBzdHJva2VXaWR0aCAqIDEuNTtcblxuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIExpbWl0c1xuICBsZXQgbWF4Q291bnQgPSAzO1xuICBsZXQgbWluQ291bnQgPSAxO1xuXG4gIGxldCBtYXhDb3BpZXMgPSAxMjtcbiAgbGV0IG1pbkNvcGllcyA9IDE7XG5cbiAgbGV0IGZyYW1lUmF0ZSA9IDYwO1xuXG4gIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gVHJhbnNsYXRpb25cbiAgLy8gbGV0IHByZXZpb3VzVmVydGljYWxUcmFuc2xhdGlvbjogbnVtYmVyID0gSCAvIDIuMjU7XG5cbiAgbGV0IHZlcnRpY2FsVHJhbnNsYXRpb25XaGl0ZXNwYWNlQ29tcGVuc2F0aW9uOiBudW1iZXIgPSAyLjI1O1xuICBjb25zdCBwcmV2aW91c0hvcml6b250YWxUcmFuc2xhdGlvbiA9IChpZHg6IG51bWJlcikgPT5cbiAgICAtNjAgKyAoY2hhcmFjdGVyV2lkdGggKiBpZHggKyBjaGFyYWN0ZXJXaWR0aCAvIDEuNSArIHN0cm9rZU9mZnNldCk7XG5cbiAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAvLyBQcmVsb2FkXG4gIHAucHJlbG9hZCA9ICgpID0+IHtcbiAgICBkaGFybWFGb250ID0gcC5sb2FkRm9udChgL2ZvbnRzL2RoYXJtYS9kaGFybWFfcmVndWxhci50dGZgKTtcbiAgfTtcblxuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIFNldHVwXG4gIHAuc2V0dXAgPSAoKSA9PiB7XG4gICAgLy8gT3VyIENhbnZhc1xuICAgIGNhbnZhcyA9IHAuY3JlYXRlQ2FudmFzKFcsIEgpO1xuXG4gICAgLy8gVGhyZWVXYXRlckNhbnZhcyhwYXJlbnRFbCwgY2FudmFzLmVsdCk7XG5cbiAgICBwLmZyYW1lUmF0ZShmcmFtZVJhdGUpO1xuXG4gICAgaWYgKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvID4gMSAmJiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA8IDMpIHtcbiAgICAgIHAucGl4ZWxEZW5zaXR5KDEuMjUpO1xuICAgIH1cbiAgfTtcblxuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIFVwZGF0ZSBDaGFyYWN0ZXJcbiAgY29uc3QgdXBkYXRlQ2hhcmFjdGVyID0gKGNoYXI6IExYTFRfRGhhcm1hQ2FudmFzQ2hhciwgaWR4OiBudW1iZXIpID0+IHtcbiAgICBpZiAoY2hhci5jb3VudCA8IG1heENvdW50ICYmIGNoYXIuY291bnRJc0luY3JlbWVudGluZykge1xuICAgICAgY2hhcmFjdGVyc1tpZHhdID0ge1xuICAgICAgICAuLi5jaGFyLFxuICAgICAgICBjb3VudDogY2hhci5jb3VudCArIDEsXG4gICAgICB9O1xuXG4gICAgICBwcmV2aW91c0NvdW50VXBkYXRlVGltZSA9IHAubWlsbGlzKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGNoYXIuY291bnQgPT09IG1heENvdW50KSB7XG4gICAgICBjaGFyYWN0ZXJzW2lkeF0gPSB7XG4gICAgICAgIC4uLmNoYXIsXG4gICAgICAgIGNvdW50OiBjaGFyLmNvdW50IC0gMSxcbiAgICAgICAgY291bnRJc0luY3JlbWVudGluZzogZmFsc2UsXG4gICAgICAgIGNvdW50SXNEZWNyZW1lbnRpbmc6IHRydWUsXG4gICAgICB9O1xuXG4gICAgICBwcmV2aW91c0NvdW50VXBkYXRlVGltZSA9IHAubWlsbGlzKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGNoYXIuY291bnQgPiBtaW5Db3VudCAmJiBjaGFyLmNvdW50SXNEZWNyZW1lbnRpbmcpIHtcbiAgICAgIGNoYXJhY3RlcnNbaWR4XSA9IHtcbiAgICAgICAgLi4uY2hhcixcbiAgICAgICAgY291bnQ6IGNoYXIuY291bnQgLSAxLFxuICAgICAgICBjb3VudElzRGVjcmVtZW50aW5nOiB0cnVlLFxuICAgICAgfTtcblxuICAgICAgcHJldmlvdXNDb3VudFVwZGF0ZVRpbWUgPSBwLm1pbGxpcygpO1xuXG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChjaGFyLmNvdW50ID09PSBtaW5Db3VudCAmJiBjaGFyLmNvdW50SXNEZWNyZW1lbnRpbmcpIHtcbiAgICAgIGNoYXJhY3RlcnNbaWR4XSA9IHtcbiAgICAgICAgLi4uY2hhcixcbiAgICAgICAgY291bnQ6IGNoYXIuY291bnQgKyAxLFxuICAgICAgICBjb3VudElzSW5jcmVtZW50aW5nOiB0cnVlLFxuICAgICAgICBjb3VudElzRGVjcmVtZW50aW5nOiBmYWxzZSxcbiAgICAgIH07XG5cbiAgICAgIHByZXZpb3VzQ291bnRVcGRhdGVUaW1lID0gcC5taWxsaXMoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfTtcblxuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIFVwZGF0ZSBDb3BpZXNcbiAgY29uc3QgdXBkYXRlQ29waWVzID0gKGNoYXI6IExYTFRfRGhhcm1hQ2FudmFzQ2hhciwgaWR4OiBudW1iZXIpID0+IHtcbiAgICBpZiAoY2hhci5jb3BpZXMgPCBtYXhDb3BpZXMgJiYgY2hhci5jb3BpZXNBcmVJbmNyZW1lbnRpbmcpIHtcbiAgICAgIGNoYXJhY3RlcnNbaWR4XSA9IHtcbiAgICAgICAgLi4uY2hhcixcbiAgICAgICAgY29waWVzOiBjaGFyLmNvcGllcyArIDEsXG4gICAgICB9O1xuXG4gICAgICBwcmV2aW91c0NvcHlVcGRhdGVUaW1lID0gcC5taWxsaXMoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoY2hhci5jb3BpZXMgPT09IG1heENvcGllcykge1xuICAgICAgY2hhcmFjdGVyc1tpZHhdID0ge1xuICAgICAgICAuLi5jaGFyLFxuICAgICAgICBjb3BpZXM6IGNoYXIuY29waWVzIC0gMSxcbiAgICAgICAgY29waWVzQXJlSW5jcmVtZW50aW5nOiBmYWxzZSxcbiAgICAgICAgY29waWVzQXJlRGVjcmVtZW50aW5nOiB0cnVlLFxuICAgICAgfTtcblxuICAgICAgcHJldmlvdXNDb3B5VXBkYXRlVGltZSA9IHAubWlsbGlzKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGNoYXIuY29waWVzID4gbWluQ29waWVzICYmIGNoYXIuY29waWVzQXJlRGVjcmVtZW50aW5nKSB7XG4gICAgICBjaGFyYWN0ZXJzW2lkeF0gPSB7XG4gICAgICAgIC4uLmNoYXIsXG4gICAgICAgIGNvcGllczogY2hhci5jb3BpZXMgLSAxLFxuICAgICAgICBjb3BpZXNBcmVEZWNyZW1lbnRpbmc6IHRydWUsXG4gICAgICB9O1xuXG4gICAgICBwcmV2aW91c0NvcHlVcGRhdGVUaW1lID0gcC5taWxsaXMoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoY2hhci5jb3BpZXMgPT09IG1pbkNvcGllcyAmJiBjaGFyLmNvcGllc0FyZURlY3JlbWVudGluZykge1xuICAgICAgY2hhcmFjdGVyc1tpZHhdID0ge1xuICAgICAgICAuLi5jaGFyLFxuICAgICAgICBjb3BpZXM6IGNoYXIuY29waWVzICsgMSxcbiAgICAgICAgY29waWVzQXJlSW5jcmVtZW50aW5nOiB0cnVlLFxuICAgICAgICBjb3BpZXNBcmVEZWNyZW1lbnRpbmc6IGZhbHNlLFxuICAgICAgfTtcblxuICAgICAgcHJldmlvdXNDb3B5VXBkYXRlVGltZSA9IHAubWlsbGlzKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH07XG5cbiAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAvLyBEcmF3XG4gIHAuZHJhdyA9ICgpID0+IHtcbiAgICBpZiAocC5mcmFtZUNvdW50ICUgMTAgPT09IDAgJiYgIXdpbmRvdy5kaGFybWFQYXVzZWQpIHtcbiAgICAgIHAuYmFja2dyb3VuZCh3aW5kb3cubGF4YWx0VW5pdmVyc2FsVGhlbWUuYmFja2dyb3VuZCk7XG4gICAgICBwLnRleHRGb250KGRoYXJtYUZvbnQpO1xuICAgICAgcC50ZXh0U2l6ZShjaGFyYWN0ZXJTaXplKTtcbiAgICAgIHAudGV4dEFsaWduKHAuQ0VOVEVSLCBwLkNFTlRFUik7XG4gICAgICBwLmZpbGwoYCR7d2luZG93LmxheGFsdFVuaXZlcnNhbFRoZW1lLmZvcmVncm91bmR9YCk7XG4gICAgICBwLnN0cm9rZVdlaWdodChzdHJva2VXaWR0aCk7XG4gICAgICBwLnN0cm9rZSh3aW5kb3cubGF4YWx0VW5pdmVyc2FsVGhlbWUuYmFja2dyb3VuZCk7XG5cbiAgICAgIGlmIChIICYmIFcpIHtcbiAgICAgICAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIG91ciBjb3BpZXNcbiAgICAgICAgY2hhcmFjdGVycy5tYXAoKGNoYXI6IExYTFRfRGhhcm1hQ2FudmFzQ2hhciwgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICBwLnNjYWxlKDEsIDEpO1xuXG4gICAgICAgICAgbGV0IHJhbmRvbUNoYXJQaWNrID0gTWF0aC5yYW5kb20oKSA8PSAwLjU7XG5cbiAgICAgICAgICBpZiAocmFuZG9tQ2hhclBpY2spIHtcbiAgICAgICAgICAgIHVwZGF0ZUNvcGllcyhjaGFyLCBpZHgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChyYW5kb21DaGFyUGljayAmJiBwLm1pbGxpcygpIC0gcHJldmlvdXNDb3VudFVwZGF0ZVRpbWUgPiAzMDAwKSB7XG4gICAgICAgICAgICB1cGRhdGVDaGFyYWN0ZXIoY2hhciwgaWR4KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsZXQgY291bnRBcnJheTogbnVtYmVyW10gPSBBcnJheS5mcm9tKEFycmF5KGNoYXIuY291bnQpLmtleXMoKSk7XG5cbiAgICAgICAgICBjb3VudEFycmF5ID0gY291bnRBcnJheS5tYXAoKGNvdW50TnVtYmVyOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjb3VudE51bWJlciArIDE7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAgICAgICAgIC8vIER1cGxpY2F0ZSBwb3NpdGlvbnNcbiAgICAgICAgICBjb3VudEFycmF5Lm1hcCgoY291bnROdW1iZXI6IG51bWJlciwgaWR4eDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBsZXQgdmVydGljYWxTY2FsZSA9IDEgLyAoY2hhci5jb3VudCAqIDAuOTUpO1xuXG4gICAgICAgICAgICBsZXQgZHVwbGljYXRlVmVydGljYWxQb3NpdGlvbjogbnVtYmVyID1cbiAgICAgICAgICAgICAgY2hhci5jb3VudCA9PSAxXG4gICAgICAgICAgICAgICAgPyBIIC8gdmVydGljYWxUcmFuc2xhdGlvbldoaXRlc3BhY2VDb21wZW5zYXRpb25cbiAgICAgICAgICAgICAgICA6IGNoYXJhY3RlclNpemUgLyB2ZXJ0aWNhbFNrZXdEaXZpc2libGUgK1xuICAgICAgICAgICAgICAgICAgKGNoYXJhY3RlclNpemUgLyBjaGFyYWN0ZXJTa2V3RGl2aXNpYmxlKSAqIGlkeHg7XG5cbiAgICAgICAgICAgIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gICAgICAgICAgICAvLyBNYWtlIGNvcGllc1xuICAgICAgICAgICAgbGV0IGNvcGllc0FycmF5OiBudW1iZXJbXSA9IEFycmF5LmZyb20oQXJyYXkoY2hhci5jb3BpZXMpLmtleXMoKSk7XG4gICAgICAgICAgICAvLyBsZXQgcmFuZG9tQ29weVBpY2sgPSBNYXRoLnJhbmRvbSgpIDw9IDAuNTtcblxuICAgICAgICAgICAgY29waWVzQXJyYXkgPSBjb3BpZXNBcnJheS5tYXAoKGNvcHlOdW1iZXI6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gY29weU51bWJlciArIDE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gbGV0IHJhbmRvbUNvcHlQaWNrID0gTWF0aC5yYW5kb20oKSA8PSAwLjU7XG4gICAgICAgICAgICAvLyBsZXQgY29weVRpbWVyID0gcC5taWxsaXMoKSAtIHByZXZpb3VzQ29waWVzVmlzaWJsZVRpbWUgPiAyMDAwO1xuICAgICAgICAgICAgcHJldmlvdXNDb3B5VXBkYXRlVGltZTtcblxuICAgICAgICAgICAgLy8gbGV0IGlzRmlyc3RDb3VudCA9IHRydWU7XG5cbiAgICAgICAgICAgIGNvcGllc0FycmF5Lm1hcCgoY29weU51bWJlcjogbnVtYmVyLCBpZHh4eDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgIC8vIGxldCBjZW50ZXJDb29yZHNYID0gVyAvIDI7XG4gICAgICAgICAgICAgIC8vIGxldCBjZW50ZXJDb29yZHNZID0gSCAvIDI7XG5cbiAgICAgICAgICAgICAgLy8gbGV0IGhvcml6b250YWxUcmFuc2xhdGUgPVxuICAgICAgICAgICAgICAvLyAgIGNvcHlOdW1iZXIgIT09IDFcbiAgICAgICAgICAgICAgLy8gICAgID8gKHByZXZpb3VzSG9yaXpvbnRhbFRyYW5zbGF0aW9uKGlkeCkgK1xuICAgICAgICAgICAgICAvLyAgICAgICAgIChzdHJva2VPZmZzZXQgLyAocC5tb3VzZVggLyAxMDApKSAqIGNvcHlOdW1iZXIpXG4gICAgICAgICAgICAgIC8vICAgICA6IHByZXZpb3VzSG9yaXpvbnRhbFRyYW5zbGF0aW9uKGlkeCkgK1xuICAgICAgICAgICAgICAvLyAgICAgICBzdHJva2VPZmZzZXQgKiBjb3B5TnVtYmVyO1xuXG4gICAgICAgICAgICAgIC8vIGxldCB2ZXJ0aWNhbFRyYW5zbGF0ZSA9XG4gICAgICAgICAgICAgIC8vICAgY29weU51bWJlciAhPT0gMVxuICAgICAgICAgICAgICAvLyAgICAgPyAoZHVwbGljYXRlVmVydGljYWxQb3NpdGlvbiAtIChzdHJva2VPZmZzZXQgLyAocC5tb3VzZVggLyAxMDApKSAqIGNvcHlOdW1iZXIpXG4gICAgICAgICAgICAgIC8vICAgICA6IGR1cGxpY2F0ZVZlcnRpY2FsUG9zaXRpb24gLSBzdHJva2VPZmZzZXQgKiBjb3B5TnVtYmVyO1xuXG4gICAgICAgICAgICAgIGxldCBob3Jpem9udGFsVHJhbnNsYXRlID1cbiAgICAgICAgICAgICAgICBwcmV2aW91c0hvcml6b250YWxUcmFuc2xhdGlvbihpZHgpICsgc3Ryb2tlT2Zmc2V0ICogY29weU51bWJlcjtcblxuICAgICAgICAgICAgICBsZXQgdmVydGljYWxUcmFuc2xhdGUgPVxuICAgICAgICAgICAgICAgIGR1cGxpY2F0ZVZlcnRpY2FsUG9zaXRpb24gLSBzdHJva2VPZmZzZXQgKiBjb3B5TnVtYmVyO1xuXG4gICAgICAgICAgICAgIHAucHVzaCgpO1xuICAgICAgICAgICAgICBwLnNjYWxlKDEsIHZlcnRpY2FsU2NhbGUpO1xuICAgICAgICAgICAgICBwLnRleHQoY2hhci5sZXR0ZXIsIGhvcml6b250YWxUcmFuc2xhdGUsIHZlcnRpY2FsVHJhbnNsYXRlKTtcbiAgICAgICAgICAgICAgcC5wb3AoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcC53aW5kb3dSZXNpemVkID0gKCkgPT4ge1xuICAgIHAucmVzaXplQ2FudmFzKFcsIEgpO1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGhhcm1hQ2FudmFzRGlzcGxheTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sketches/p5/no-water-distort-L.canvas.tsx\n");

/***/ })

})