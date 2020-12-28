webpackHotUpdate_N_E("pages/_app",{

/***/ "./sketches/p5/no-water-distort.canvas.tsx":
/*!*************************************************!*\
  !*** ./sketches/p5/no-water-distort.canvas.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/**\n *\n * Shader fun\n * @author Peter Laxalt\n *\n */\n// Begin Component\n// __________________________________________________________________________\nvar DharmaCanvasDisplay = function DharmaCanvasDisplay(W, H, ID, // DharmaTheme,\nparentEl) {\n  return function (p) {\n    // _________________________________________________\n    // Config\n    var canvas; // ____________________________\n    // Fonts\n\n    var dharmaFont; // ____________________________\n    // Typography\n\n    var text = \"LAXALT\";\n    var splitCharacterArray = text.split(\"\");\n    var characters = splitCharacterArray.map(function (character, idx) {\n      return {\n        letter: character,\n        count: 1,\n        idx: idx,\n        copies: 5,\n        copiesLastVisible: 0,\n        copiesAreVisible: false,\n        countIsIncrementing: true,\n        countIsDecrementing: false,\n        copiesAreIncrementing: true,\n        copiesAreDecrementing: false\n      };\n    });\n    var characterCount = splitCharacterArray.length;\n    var characterWidth = W / characterCount;\n    var characterSize = H * 1.15;\n    var verticalSkewDivisible = 2.75;\n    var characterSkewDivisible = 1.36;\n    console.log(characterSize, \"characterSize\"); // ____________________________\n    // Counts\n    // let renderCount: number = 0;\n\n    var previousCountUpdateTime = 0;\n    var previousCopyUpdateTime = 0; // ____________________________\n    // Strokes\n\n    var strokeWidth = 4;\n    var strokeOffset = strokeWidth * 1.5; // ____________________________\n    // Limits\n\n    var maxCount = 3;\n    var minCount = 1;\n    var maxCopies = 12;\n    var minCopies = 1;\n    var frameRate = 60; // ____________________________\n    // Translation\n    // let previousVerticalTranslation: number = H / 2.25;\n\n    var verticalTranslationWhitespaceCompensation = 2.25;\n\n    var previousHorizontalTranslation = function previousHorizontalTranslation(idx) {\n      return -60 + (characterWidth * idx + characterWidth / 1.5 + strokeOffset);\n    }; // _________________________________________________\n    // Preload\n\n\n    p.preload = function () {\n      dharmaFont = p.loadFont(\"/fonts/dharma/dharma_regular.ttf\");\n    }; // _________________________________________________\n    // Setup\n\n\n    p.setup = function () {\n      // Our Canvas\n      canvas = p.createCanvas(W, H); // ThreeWaterCanvas(parentEl, canvas.elt);\n\n      p.frameRate(frameRate);\n\n      if (window.devicePixelRatio > 1 && window.devicePixelRatio < 3) {\n        p.pixelDensity(1.25);\n      }\n    }; // _________________________________________________\n    // Update Character\n\n\n    var updateCharacter = function updateCharacter(_char, idx) {\n      if (_char.count < maxCount && _char.countIsIncrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char), {}, {\n          count: _char.count + 1\n        });\n        previousCountUpdateTime = p.millis();\n        return;\n      } else if (_char.count === maxCount) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char), {}, {\n          count: _char.count - 1,\n          countIsIncrementing: false,\n          countIsDecrementing: true\n        });\n        previousCountUpdateTime = p.millis();\n        return;\n      } else if (_char.count > minCount && _char.countIsDecrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char), {}, {\n          count: _char.count - 1,\n          countIsDecrementing: true\n        });\n        previousCountUpdateTime = p.millis();\n        return;\n      } else if (_char.count === minCount && _char.countIsDecrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char), {}, {\n          count: _char.count + 1,\n          countIsIncrementing: true,\n          countIsDecrementing: false\n        });\n        previousCountUpdateTime = p.millis();\n        return;\n      }\n\n      return;\n    }; // _________________________________________________\n    // Update Copies\n\n\n    var updateCopies = function updateCopies(_char2, idx) {\n      if (_char2.copies < maxCopies && _char2.copiesAreIncrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char2), {}, {\n          copies: _char2.copies + 1\n        });\n        previousCopyUpdateTime = p.millis();\n        return;\n      } else if (_char2.copies === maxCopies) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char2), {}, {\n          copies: _char2.copies - 1,\n          copiesAreIncrementing: false,\n          copiesAreDecrementing: true\n        });\n        previousCopyUpdateTime = p.millis();\n        return;\n      } else if (_char2.copies > minCopies && _char2.copiesAreDecrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char2), {}, {\n          copies: _char2.copies - 1,\n          copiesAreDecrementing: true\n        });\n        previousCopyUpdateTime = p.millis();\n        return;\n      } else if (_char2.copies === minCopies && _char2.copiesAreDecrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char2), {}, {\n          copies: _char2.copies + 1,\n          copiesAreIncrementing: true,\n          copiesAreDecrementing: false\n        });\n        previousCopyUpdateTime = p.millis();\n        return;\n      }\n\n      return;\n    }; // _________________________________________________\n    // Draw\n\n\n    p.draw = function () {\n      if (p.frameCount % 10 === 0) {\n        p.background(window.laxaltUniversalTheme.background);\n        p.textFont(dharmaFont);\n        p.textSize(characterSize);\n        p.textAlign(p.CENTER, p.CENTER);\n        p.fill(\"\".concat(window.laxaltUniversalTheme.foreground));\n        p.strokeWeight(strokeWidth);\n        p.stroke(window.laxaltUniversalTheme.background);\n\n        if (H && W) {\n          // _________________________________________\n          // Loop through our copies\n          characters.map(function (_char3, idx) {\n            p.scale(1, 1);\n            var randomCharPick = Math.random() <= 0.5;\n\n            if (randomCharPick) {\n              updateCopies(_char3, idx);\n            }\n\n            if (randomCharPick && p.millis() - previousCountUpdateTime > 3000) {\n              updateCharacter(_char3, idx);\n            }\n\n            var countArray = Array.from(Array(_char3.count).keys());\n            countArray = countArray.map(function (countNumber) {\n              return countNumber + 1;\n            }); // _________________________________________\n            // Duplicate positions\n\n            countArray.map(function (countNumber, idxx) {\n              var verticalScale = 1 / (_char3.count * 0.95);\n              var duplicateVerticalPosition = _char3.count == 1 ? H / verticalTranslationWhitespaceCompensation : characterSize / verticalSkewDivisible + characterSize / characterSkewDivisible * idxx; // _________________________________________\n              // Make copies\n\n              var copiesArray = Array.from(Array(_char3.copies).keys()); // let randomCopyPick = Math.random() <= 0.5;\n\n              copiesArray = copiesArray.map(function (copyNumber) {\n                return copyNumber + 1;\n              }); // let randomCopyPick = Math.random() <= 0.5;\n              // let copyTimer = p.millis() - previousCopiesVisibleTime > 2000;\n\n              previousCopyUpdateTime; // let isFirstCount = true;\n\n              copiesArray.map(function (copyNumber, idxxx) {\n                // let centerCoordsX = W / 2;\n                // let centerCoordsY = H / 2;\n                // let horizontalTranslate =\n                //   copyNumber !== 1\n                //     ? (previousHorizontalTranslation(idx) +\n                //         (strokeOffset / (p.mouseX / 100)) * copyNumber)\n                //     : previousHorizontalTranslation(idx) +\n                //       strokeOffset * copyNumber;\n                // let verticalTranslate =\n                //   copyNumber !== 1\n                //     ? (duplicateVerticalPosition - (strokeOffset / (p.mouseX / 100)) * copyNumber)\n                //     : duplicateVerticalPosition - strokeOffset * copyNumber;\n                var horizontalTranslate = previousHorizontalTranslation(idx) + strokeOffset * copyNumber;\n                var verticalTranslate = duplicateVerticalPosition - strokeOffset * copyNumber;\n                p.push();\n                p.scale(1, verticalScale);\n                p.text(_char3.letter, horizontalTranslate, verticalTranslate);\n                p.pop();\n              });\n            });\n          });\n        }\n      }\n    };\n\n    p.windowResized = function () {\n      p.resizeCanvas(W, H);\n    };\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DharmaCanvasDisplay);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2tldGNoZXMvcDUvbm8td2F0ZXItZGlzdG9ydC5jYW52YXMudHN4PzBhMTQiXSwibmFtZXMiOlsiRGhhcm1hQ2FudmFzRGlzcGxheSIsIlciLCJIIiwiSUQiLCJwYXJlbnRFbCIsInAiLCJjYW52YXMiLCJkaGFybWFGb250IiwidGV4dCIsInNwbGl0Q2hhcmFjdGVyQXJyYXkiLCJzcGxpdCIsImNoYXJhY3RlcnMiLCJtYXAiLCJjaGFyYWN0ZXIiLCJpZHgiLCJsZXR0ZXIiLCJjb3VudCIsImNvcGllcyIsImNvcGllc0xhc3RWaXNpYmxlIiwiY29waWVzQXJlVmlzaWJsZSIsImNvdW50SXNJbmNyZW1lbnRpbmciLCJjb3VudElzRGVjcmVtZW50aW5nIiwiY29waWVzQXJlSW5jcmVtZW50aW5nIiwiY29waWVzQXJlRGVjcmVtZW50aW5nIiwiY2hhcmFjdGVyQ291bnQiLCJsZW5ndGgiLCJjaGFyYWN0ZXJXaWR0aCIsImNoYXJhY3RlclNpemUiLCJ2ZXJ0aWNhbFNrZXdEaXZpc2libGUiLCJjaGFyYWN0ZXJTa2V3RGl2aXNpYmxlIiwiY29uc29sZSIsImxvZyIsInByZXZpb3VzQ291bnRVcGRhdGVUaW1lIiwicHJldmlvdXNDb3B5VXBkYXRlVGltZSIsInN0cm9rZVdpZHRoIiwic3Ryb2tlT2Zmc2V0IiwibWF4Q291bnQiLCJtaW5Db3VudCIsIm1heENvcGllcyIsIm1pbkNvcGllcyIsImZyYW1lUmF0ZSIsInZlcnRpY2FsVHJhbnNsYXRpb25XaGl0ZXNwYWNlQ29tcGVuc2F0aW9uIiwicHJldmlvdXNIb3Jpem9udGFsVHJhbnNsYXRpb24iLCJwcmVsb2FkIiwibG9hZEZvbnQiLCJzZXR1cCIsImNyZWF0ZUNhbnZhcyIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJwaXhlbERlbnNpdHkiLCJ1cGRhdGVDaGFyYWN0ZXIiLCJjaGFyIiwibWlsbGlzIiwidXBkYXRlQ29waWVzIiwiZHJhdyIsImZyYW1lQ291bnQiLCJiYWNrZ3JvdW5kIiwibGF4YWx0VW5pdmVyc2FsVGhlbWUiLCJ0ZXh0Rm9udCIsInRleHRTaXplIiwidGV4dEFsaWduIiwiQ0VOVEVSIiwiZmlsbCIsImZvcmVncm91bmQiLCJzdHJva2VXZWlnaHQiLCJzdHJva2UiLCJzY2FsZSIsInJhbmRvbUNoYXJQaWNrIiwiTWF0aCIsInJhbmRvbSIsImNvdW50QXJyYXkiLCJBcnJheSIsImZyb20iLCJrZXlzIiwiY291bnROdW1iZXIiLCJpZHh4IiwidmVydGljYWxTY2FsZSIsImR1cGxpY2F0ZVZlcnRpY2FsUG9zaXRpb24iLCJjb3BpZXNBcnJheSIsImNvcHlOdW1iZXIiLCJpZHh4eCIsImhvcml6b250YWxUcmFuc2xhdGUiLCJ2ZXJ0aWNhbFRyYW5zbGF0ZSIsInB1c2giLCJwb3AiLCJ3aW5kb3dSZXNpemVkIiwicmVzaXplQ2FudmFzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFrQ0EsSUFBTUEsbUJBQTZDLEdBQUcsU0FBaERBLG1CQUFnRCxDQUNwREMsQ0FEb0QsRUFFcERDLENBRm9ELEVBR3BEQyxFQUhvRCxFQUlwRDtBQUNBQyxRQUxvRDtBQUFBLFNBTWpELFVBQUNDLENBQUQsRUFBVztBQUNkO0FBQ0E7QUFFQSxRQUFJQyxNQUFKLENBSmMsQ0FNZDtBQUNBOztBQUNBLFFBQUlDLFVBQUosQ0FSYyxDQVVkO0FBQ0E7O0FBQ0EsUUFBSUMsSUFBSSxHQUFHLFFBQVg7QUFFQSxRQUFJQyxtQkFBbUIsR0FBR0QsSUFBSSxDQUFDRSxLQUFMLENBQVcsRUFBWCxDQUExQjtBQUNBLFFBQUlDLFVBQW1DLEdBQUdGLG1CQUFtQixDQUFDRyxHQUFwQixDQUN4QyxVQUFDQyxTQUFELEVBQW9CQyxHQUFwQixFQUFvQztBQUNsQyxhQUFPO0FBQ0xDLGNBQU0sRUFBRUYsU0FESDtBQUVMRyxhQUFLLEVBQUUsQ0FGRjtBQUdMRixXQUFHLEVBQUVBLEdBSEE7QUFLTEcsY0FBTSxFQUFFLENBTEg7QUFNTEMseUJBQWlCLEVBQUUsQ0FOZDtBQU9MQyx3QkFBZ0IsRUFBRSxLQVBiO0FBU0xDLDJCQUFtQixFQUFFLElBVGhCO0FBVUxDLDJCQUFtQixFQUFFLEtBVmhCO0FBWUxDLDZCQUFxQixFQUFFLElBWmxCO0FBYUxDLDZCQUFxQixFQUFFO0FBYmxCLE9BQVA7QUFlRCxLQWpCdUMsQ0FBMUM7QUFvQkEsUUFBSUMsY0FBc0IsR0FBR2YsbUJBQW1CLENBQUNnQixNQUFqRDtBQUNBLFFBQUlDLGNBQXNCLEdBQUd6QixDQUFDLEdBQUd1QixjQUFqQztBQUNBLFFBQUlHLGFBQXFCLEdBQUd6QixDQUFDLEdBQUcsSUFBaEM7QUFFQSxRQUFJMEIscUJBQTZCLEdBQUcsSUFBcEM7QUFDQSxRQUFJQyxzQkFBOEIsR0FBRyxJQUFyQztBQUVBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUosYUFBWixFQUEyQixlQUEzQixFQTFDYyxDQTRDZDtBQUNBO0FBQ0E7O0FBQ0EsUUFBSUssdUJBQStCLEdBQUcsQ0FBdEM7QUFDQSxRQUFJQyxzQkFBOEIsR0FBRyxDQUFyQyxDQWhEYyxDQWtEZDtBQUNBOztBQUNBLFFBQUlDLFdBQW1CLEdBQUcsQ0FBMUI7QUFDQSxRQUFJQyxZQUFvQixHQUFHRCxXQUFXLEdBQUcsR0FBekMsQ0FyRGMsQ0F1RGQ7QUFDQTs7QUFDQSxRQUFJRSxRQUFRLEdBQUcsQ0FBZjtBQUNBLFFBQUlDLFFBQVEsR0FBRyxDQUFmO0FBRUEsUUFBSUMsU0FBUyxHQUFHLEVBQWhCO0FBQ0EsUUFBSUMsU0FBUyxHQUFHLENBQWhCO0FBRUEsUUFBSUMsU0FBUyxHQUFHLEVBQWhCLENBL0RjLENBaUVkO0FBQ0E7QUFDQTs7QUFFQSxRQUFJQyx5Q0FBaUQsR0FBRyxJQUF4RDs7QUFDQSxRQUFNQyw2QkFBNkIsR0FBRyxTQUFoQ0EsNkJBQWdDLENBQUM1QixHQUFEO0FBQUEsYUFDcEMsQ0FBQyxFQUFELElBQU9ZLGNBQWMsR0FBR1osR0FBakIsR0FBdUJZLGNBQWMsR0FBRyxHQUF4QyxHQUE4Q1MsWUFBckQsQ0FEb0M7QUFBQSxLQUF0QyxDQXRFYyxDQXlFZDtBQUNBOzs7QUFDQTlCLEtBQUMsQ0FBQ3NDLE9BQUYsR0FBWSxZQUFNO0FBQ2hCcEMsZ0JBQVUsR0FBR0YsQ0FBQyxDQUFDdUMsUUFBRixvQ0FBYjtBQUNELEtBRkQsQ0EzRWMsQ0ErRWQ7QUFDQTs7O0FBQ0F2QyxLQUFDLENBQUN3QyxLQUFGLEdBQVUsWUFBTTtBQUNkO0FBQ0F2QyxZQUFNLEdBQUdELENBQUMsQ0FBQ3lDLFlBQUYsQ0FBZTdDLENBQWYsRUFBa0JDLENBQWxCLENBQVQsQ0FGYyxDQUlkOztBQUVBRyxPQUFDLENBQUNtQyxTQUFGLENBQVlBLFNBQVo7O0FBRUEsVUFBSU8sTUFBTSxDQUFDQyxnQkFBUCxHQUEwQixDQUExQixJQUErQkQsTUFBTSxDQUFDQyxnQkFBUCxHQUEwQixDQUE3RCxFQUFnRTtBQUM5RDNDLFNBQUMsQ0FBQzRDLFlBQUYsQ0FBZSxJQUFmO0FBQ0Q7QUFDRixLQVhELENBakZjLENBOEZkO0FBQ0E7OztBQUNBLFFBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUE4QnJDLEdBQTlCLEVBQThDO0FBQ3BFLFVBQUlxQyxLQUFJLENBQUNuQyxLQUFMLEdBQWFvQixRQUFiLElBQXlCZSxLQUFJLENBQUMvQixtQkFBbEMsRUFBdUQ7QUFDckRULGtCQUFVLENBQUNHLEdBQUQsQ0FBVixtQ0FDS3FDLEtBREw7QUFFRW5DLGVBQUssRUFBRW1DLEtBQUksQ0FBQ25DLEtBQUwsR0FBYTtBQUZ0QjtBQUtBZ0IsK0JBQXVCLEdBQUczQixDQUFDLENBQUMrQyxNQUFGLEVBQTFCO0FBRUE7QUFDRCxPQVRELE1BU08sSUFBSUQsS0FBSSxDQUFDbkMsS0FBTCxLQUFlb0IsUUFBbkIsRUFBNkI7QUFDbEN6QixrQkFBVSxDQUFDRyxHQUFELENBQVYsbUNBQ0txQyxLQURMO0FBRUVuQyxlQUFLLEVBQUVtQyxLQUFJLENBQUNuQyxLQUFMLEdBQWEsQ0FGdEI7QUFHRUksNkJBQW1CLEVBQUUsS0FIdkI7QUFJRUMsNkJBQW1CLEVBQUU7QUFKdkI7QUFPQVcsK0JBQXVCLEdBQUczQixDQUFDLENBQUMrQyxNQUFGLEVBQTFCO0FBRUE7QUFDRCxPQVhNLE1BV0EsSUFBSUQsS0FBSSxDQUFDbkMsS0FBTCxHQUFhcUIsUUFBYixJQUF5QmMsS0FBSSxDQUFDOUIsbUJBQWxDLEVBQXVEO0FBQzVEVixrQkFBVSxDQUFDRyxHQUFELENBQVYsbUNBQ0txQyxLQURMO0FBRUVuQyxlQUFLLEVBQUVtQyxLQUFJLENBQUNuQyxLQUFMLEdBQWEsQ0FGdEI7QUFHRUssNkJBQW1CLEVBQUU7QUFIdkI7QUFNQVcsK0JBQXVCLEdBQUczQixDQUFDLENBQUMrQyxNQUFGLEVBQTFCO0FBRUE7QUFDRCxPQVZNLE1BVUEsSUFBSUQsS0FBSSxDQUFDbkMsS0FBTCxLQUFlcUIsUUFBZixJQUEyQmMsS0FBSSxDQUFDOUIsbUJBQXBDLEVBQXlEO0FBQzlEVixrQkFBVSxDQUFDRyxHQUFELENBQVYsbUNBQ0txQyxLQURMO0FBRUVuQyxlQUFLLEVBQUVtQyxLQUFJLENBQUNuQyxLQUFMLEdBQWEsQ0FGdEI7QUFHRUksNkJBQW1CLEVBQUUsSUFIdkI7QUFJRUMsNkJBQW1CLEVBQUU7QUFKdkI7QUFPQVcsK0JBQXVCLEdBQUczQixDQUFDLENBQUMrQyxNQUFGLEVBQTFCO0FBRUE7QUFDRDs7QUFFRDtBQUNELEtBN0NELENBaEdjLENBK0lkO0FBQ0E7OztBQUNBLFFBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNGLE1BQUQsRUFBOEJyQyxHQUE5QixFQUE4QztBQUNqRSxVQUFJcUMsTUFBSSxDQUFDbEMsTUFBTCxHQUFjcUIsU0FBZCxJQUEyQmEsTUFBSSxDQUFDN0IscUJBQXBDLEVBQTJEO0FBQ3pEWCxrQkFBVSxDQUFDRyxHQUFELENBQVYsbUNBQ0txQyxNQURMO0FBRUVsQyxnQkFBTSxFQUFFa0MsTUFBSSxDQUFDbEMsTUFBTCxHQUFjO0FBRnhCO0FBS0FnQiw4QkFBc0IsR0FBRzVCLENBQUMsQ0FBQytDLE1BQUYsRUFBekI7QUFFQTtBQUNELE9BVEQsTUFTTyxJQUFJRCxNQUFJLENBQUNsQyxNQUFMLEtBQWdCcUIsU0FBcEIsRUFBK0I7QUFDcEMzQixrQkFBVSxDQUFDRyxHQUFELENBQVYsbUNBQ0txQyxNQURMO0FBRUVsQyxnQkFBTSxFQUFFa0MsTUFBSSxDQUFDbEMsTUFBTCxHQUFjLENBRnhCO0FBR0VLLCtCQUFxQixFQUFFLEtBSHpCO0FBSUVDLCtCQUFxQixFQUFFO0FBSnpCO0FBT0FVLDhCQUFzQixHQUFHNUIsQ0FBQyxDQUFDK0MsTUFBRixFQUF6QjtBQUVBO0FBQ0QsT0FYTSxNQVdBLElBQUlELE1BQUksQ0FBQ2xDLE1BQUwsR0FBY3NCLFNBQWQsSUFBMkJZLE1BQUksQ0FBQzVCLHFCQUFwQyxFQUEyRDtBQUNoRVosa0JBQVUsQ0FBQ0csR0FBRCxDQUFWLG1DQUNLcUMsTUFETDtBQUVFbEMsZ0JBQU0sRUFBRWtDLE1BQUksQ0FBQ2xDLE1BQUwsR0FBYyxDQUZ4QjtBQUdFTSwrQkFBcUIsRUFBRTtBQUh6QjtBQU1BVSw4QkFBc0IsR0FBRzVCLENBQUMsQ0FBQytDLE1BQUYsRUFBekI7QUFFQTtBQUNELE9BVk0sTUFVQSxJQUFJRCxNQUFJLENBQUNsQyxNQUFMLEtBQWdCc0IsU0FBaEIsSUFBNkJZLE1BQUksQ0FBQzVCLHFCQUF0QyxFQUE2RDtBQUNsRVosa0JBQVUsQ0FBQ0csR0FBRCxDQUFWLG1DQUNLcUMsTUFETDtBQUVFbEMsZ0JBQU0sRUFBRWtDLE1BQUksQ0FBQ2xDLE1BQUwsR0FBYyxDQUZ4QjtBQUdFSywrQkFBcUIsRUFBRSxJQUh6QjtBQUlFQywrQkFBcUIsRUFBRTtBQUp6QjtBQU9BVSw4QkFBc0IsR0FBRzVCLENBQUMsQ0FBQytDLE1BQUYsRUFBekI7QUFFQTtBQUNEOztBQUVEO0FBQ0QsS0E3Q0QsQ0FqSmMsQ0FnTWQ7QUFDQTs7O0FBQ0EvQyxLQUFDLENBQUNpRCxJQUFGLEdBQVMsWUFBTTtBQUNiLFVBQUlqRCxDQUFDLENBQUNrRCxVQUFGLEdBQWUsRUFBZixLQUFzQixDQUExQixFQUE2QjtBQUMzQmxELFNBQUMsQ0FBQ21ELFVBQUYsQ0FBYVQsTUFBTSxDQUFDVSxvQkFBUCxDQUE0QkQsVUFBekM7QUFDQW5ELFNBQUMsQ0FBQ3FELFFBQUYsQ0FBV25ELFVBQVg7QUFDQUYsU0FBQyxDQUFDc0QsUUFBRixDQUFXaEMsYUFBWDtBQUNBdEIsU0FBQyxDQUFDdUQsU0FBRixDQUFZdkQsQ0FBQyxDQUFDd0QsTUFBZCxFQUFzQnhELENBQUMsQ0FBQ3dELE1BQXhCO0FBQ0F4RCxTQUFDLENBQUN5RCxJQUFGLFdBQVVmLE1BQU0sQ0FBQ1Usb0JBQVAsQ0FBNEJNLFVBQXRDO0FBQ0ExRCxTQUFDLENBQUMyRCxZQUFGLENBQWU5QixXQUFmO0FBQ0E3QixTQUFDLENBQUM0RCxNQUFGLENBQVNsQixNQUFNLENBQUNVLG9CQUFQLENBQTRCRCxVQUFyQzs7QUFFQSxZQUFJdEQsQ0FBQyxJQUFJRCxDQUFULEVBQVk7QUFDVjtBQUNBO0FBQ0FVLG9CQUFVLENBQUNDLEdBQVgsQ0FBZSxVQUFDdUMsTUFBRCxFQUE4QnJDLEdBQTlCLEVBQThDO0FBQzNEVCxhQUFDLENBQUM2RCxLQUFGLENBQVEsQ0FBUixFQUFXLENBQVg7QUFFQSxnQkFBSUMsY0FBYyxHQUFHQyxJQUFJLENBQUNDLE1BQUwsTUFBaUIsR0FBdEM7O0FBRUEsZ0JBQUlGLGNBQUosRUFBb0I7QUFDbEJkLDBCQUFZLENBQUNGLE1BQUQsRUFBT3JDLEdBQVAsQ0FBWjtBQUNEOztBQUVELGdCQUFJcUQsY0FBYyxJQUFJOUQsQ0FBQyxDQUFDK0MsTUFBRixLQUFhcEIsdUJBQWIsR0FBdUMsSUFBN0QsRUFBbUU7QUFDakVrQiw2QkFBZSxDQUFDQyxNQUFELEVBQU9yQyxHQUFQLENBQWY7QUFDRDs7QUFFRCxnQkFBSXdELFVBQW9CLEdBQUdDLEtBQUssQ0FBQ0MsSUFBTixDQUFXRCxLQUFLLENBQUNwQixNQUFJLENBQUNuQyxLQUFOLENBQUwsQ0FBa0J5RCxJQUFsQixFQUFYLENBQTNCO0FBRUFILHNCQUFVLEdBQUdBLFVBQVUsQ0FBQzFELEdBQVgsQ0FBZSxVQUFDOEQsV0FBRCxFQUF5QjtBQUNuRCxxQkFBT0EsV0FBVyxHQUFHLENBQXJCO0FBQ0QsYUFGWSxDQUFiLENBZjJELENBbUIzRDtBQUNBOztBQUNBSixzQkFBVSxDQUFDMUQsR0FBWCxDQUFlLFVBQUM4RCxXQUFELEVBQXNCQyxJQUF0QixFQUF1QztBQUNwRCxrQkFBSUMsYUFBYSxHQUFHLEtBQUt6QixNQUFJLENBQUNuQyxLQUFMLEdBQWEsSUFBbEIsQ0FBcEI7QUFFQSxrQkFBSTZELHlCQUFpQyxHQUNuQzFCLE1BQUksQ0FBQ25DLEtBQUwsSUFBYyxDQUFkLEdBQ0lkLENBQUMsR0FBR3VDLHlDQURSLEdBRUlkLGFBQWEsR0FBR0MscUJBQWhCLEdBQ0NELGFBQWEsR0FBR0Usc0JBQWpCLEdBQTJDOEMsSUFKakQsQ0FIb0QsQ0FTcEQ7QUFDQTs7QUFDQSxrQkFBSUcsV0FBcUIsR0FBR1AsS0FBSyxDQUFDQyxJQUFOLENBQVdELEtBQUssQ0FBQ3BCLE1BQUksQ0FBQ2xDLE1BQU4sQ0FBTCxDQUFtQndELElBQW5CLEVBQVgsQ0FBNUIsQ0FYb0QsQ0FZcEQ7O0FBRUFLLHlCQUFXLEdBQUdBLFdBQVcsQ0FBQ2xFLEdBQVosQ0FBZ0IsVUFBQ21FLFVBQUQsRUFBd0I7QUFDcEQsdUJBQU9BLFVBQVUsR0FBRyxDQUFwQjtBQUNELGVBRmEsQ0FBZCxDQWRvRCxDQWtCcEQ7QUFDQTs7QUFDQTlDLG9DQUFzQixDQXBCOEIsQ0FzQnBEOztBQUVBNkMseUJBQVcsQ0FBQ2xFLEdBQVosQ0FBZ0IsVUFBQ21FLFVBQUQsRUFBcUJDLEtBQXJCLEVBQXVDO0FBQ3JEO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLG9CQUFJQyxtQkFBbUIsR0FDckJ2Qyw2QkFBNkIsQ0FBQzVCLEdBQUQsQ0FBN0IsR0FBcUNxQixZQUFZLEdBQUc0QyxVQUR0RDtBQUdBLG9CQUFJRyxpQkFBaUIsR0FDbkJMLHlCQUF5QixHQUFHMUMsWUFBWSxHQUFHNEMsVUFEN0M7QUFHQTFFLGlCQUFDLENBQUM4RSxJQUFGO0FBQ0E5RSxpQkFBQyxDQUFDNkQsS0FBRixDQUFRLENBQVIsRUFBV1UsYUFBWDtBQUNBdkUsaUJBQUMsQ0FBQ0csSUFBRixDQUFPMkMsTUFBSSxDQUFDcEMsTUFBWixFQUFvQmtFLG1CQUFwQixFQUF5Q0MsaUJBQXpDO0FBQ0E3RSxpQkFBQyxDQUFDK0UsR0FBRjtBQUNELGVBMUJEO0FBMkJELGFBbkREO0FBb0RELFdBekVEO0FBMEVEO0FBQ0Y7QUFDRixLQXpGRDs7QUEyRkEvRSxLQUFDLENBQUNnRixhQUFGLEdBQWtCLFlBQU07QUFDdEJoRixPQUFDLENBQUNpRixZQUFGLENBQWVyRixDQUFmLEVBQWtCQyxDQUFsQjtBQUNELEtBRkQ7QUFHRCxHQXRTcUQ7QUFBQSxDQUF0RDs7QUF3U2VGLGtGQUFmIiwiZmlsZSI6Ii4vc2tldGNoZXMvcDUvbm8td2F0ZXItZGlzdG9ydC5jYW52YXMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKlxuICogU2hhZGVyIGZ1blxuICogQGF1dGhvciBQZXRlciBMYXhhbHRcbiAqXG4gKi9cblxuaW1wb3J0IHA1LCB7IEZvbnQgfSBmcm9tIFwicDVcIjtcbmltcG9ydCB7IFRocmVlV2F0ZXJDYW52YXMgfSBmcm9tIFwiLi4vdGhyZWUvdGhyZWUtd2F0ZXItZGlzdG9ydC5jYW52YXNcIjtcblxuLy8gQmVnaW4gQ29tcG9uZW50XG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuXG5leHBvcnQgdHlwZSBMWExUX0RoYXJtYUNhbnZhcyA9IHtcbiAgVzogbnVtYmVyO1xuICBIOiBudW1iZXI7XG4gIElEOiBudW1iZXI7XG4gIC8vIEJHOiBMWExUX0NvbG9yVGhlbWU7XG4gIHBhcmVudEVsOiBIVE1MRGl2RWxlbWVudDtcbn07XG5cbmV4cG9ydCB0eXBlIExYTFRfRGhhcm1hQ2FudmFzRGlzcGxheSA9IChcbiAgVzogbnVtYmVyLFxuICBIOiBudW1iZXIsXG4gIElEOiBudW1iZXIsXG4gIC8vIEJHOiBMWExUX0NvbG9yVGhlbWUsXG4gIHBhcmVudEVsOiBIVE1MRGl2RWxlbWVudFxuKSA9PiAocDogcDUpID0+IHZvaWQ7XG5cbnR5cGUgTFhMVF9EaGFybWFDYW52YXNDaGFyID0ge1xuICBsZXR0ZXI6IHN0cmluZztcbiAgY291bnQ6IG51bWJlcjtcbiAgaWR4OiBudW1iZXI7XG5cbiAgY29waWVzOiBudW1iZXI7XG4gIGNvcGllc0xhc3RWaXNpYmxlOiBudW1iZXI7XG4gIGNvcGllc0FyZVZpc2libGU6IGJvb2xlYW47XG5cbiAgY29waWVzQXJlSW5jcmVtZW50aW5nOiBib29sZWFuO1xuICBjb3BpZXNBcmVEZWNyZW1lbnRpbmc6IGJvb2xlYW47XG5cbiAgY291bnRJc0luY3JlbWVudGluZzogYm9vbGVhbjtcbiAgY291bnRJc0RlY3JlbWVudGluZzogYm9vbGVhbjtcbn07XG5cbmNvbnN0IERoYXJtYUNhbnZhc0Rpc3BsYXk6IExYTFRfRGhhcm1hQ2FudmFzRGlzcGxheSA9IChcbiAgVyxcbiAgSCxcbiAgSUQsXG4gIC8vIERoYXJtYVRoZW1lLFxuICBwYXJlbnRFbFxuKSA9PiAocDogcDUpID0+IHtcbiAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAvLyBDb25maWdcblxuICBsZXQgY2FudmFzO1xuXG4gIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gRm9udHNcbiAgbGV0IGRoYXJtYUZvbnQ6IEZvbnQ7XG5cbiAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAvLyBUeXBvZ3JhcGh5XG4gIGxldCB0ZXh0ID0gXCJMQVhBTFRcIjtcblxuICBsZXQgc3BsaXRDaGFyYWN0ZXJBcnJheSA9IHRleHQuc3BsaXQoXCJcIik7XG4gIGxldCBjaGFyYWN0ZXJzOiBMWExUX0RoYXJtYUNhbnZhc0NoYXJbXSA9IHNwbGl0Q2hhcmFjdGVyQXJyYXkubWFwKFxuICAgIChjaGFyYWN0ZXI6IHN0cmluZywgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxldHRlcjogY2hhcmFjdGVyLFxuICAgICAgICBjb3VudDogMSxcbiAgICAgICAgaWR4OiBpZHgsXG5cbiAgICAgICAgY29waWVzOiA1LFxuICAgICAgICBjb3BpZXNMYXN0VmlzaWJsZTogMCxcbiAgICAgICAgY29waWVzQXJlVmlzaWJsZTogZmFsc2UsXG5cbiAgICAgICAgY291bnRJc0luY3JlbWVudGluZzogdHJ1ZSxcbiAgICAgICAgY291bnRJc0RlY3JlbWVudGluZzogZmFsc2UsXG5cbiAgICAgICAgY29waWVzQXJlSW5jcmVtZW50aW5nOiB0cnVlLFxuICAgICAgICBjb3BpZXNBcmVEZWNyZW1lbnRpbmc6IGZhbHNlLFxuICAgICAgfTtcbiAgICB9XG4gICk7XG5cbiAgbGV0IGNoYXJhY3RlckNvdW50OiBudW1iZXIgPSBzcGxpdENoYXJhY3RlckFycmF5Lmxlbmd0aDtcbiAgbGV0IGNoYXJhY3RlcldpZHRoOiBudW1iZXIgPSBXIC8gY2hhcmFjdGVyQ291bnQ7XG4gIGxldCBjaGFyYWN0ZXJTaXplOiBudW1iZXIgPSBIICogMS4xNTtcblxuICBsZXQgdmVydGljYWxTa2V3RGl2aXNpYmxlOiBudW1iZXIgPSAyLjc1O1xuICBsZXQgY2hhcmFjdGVyU2tld0RpdmlzaWJsZTogbnVtYmVyID0gMS4zNjtcblxuICBjb25zb2xlLmxvZyhjaGFyYWN0ZXJTaXplLCBcImNoYXJhY3RlclNpemVcIik7XG5cbiAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAvLyBDb3VudHNcbiAgLy8gbGV0IHJlbmRlckNvdW50OiBudW1iZXIgPSAwO1xuICBsZXQgcHJldmlvdXNDb3VudFVwZGF0ZVRpbWU6IG51bWJlciA9IDA7XG4gIGxldCBwcmV2aW91c0NvcHlVcGRhdGVUaW1lOiBudW1iZXIgPSAwO1xuXG4gIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gU3Ryb2tlc1xuICBsZXQgc3Ryb2tlV2lkdGg6IG51bWJlciA9IDQ7XG4gIGxldCBzdHJva2VPZmZzZXQ6IG51bWJlciA9IHN0cm9rZVdpZHRoICogMS41O1xuXG4gIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gTGltaXRzXG4gIGxldCBtYXhDb3VudCA9IDM7XG4gIGxldCBtaW5Db3VudCA9IDE7XG5cbiAgbGV0IG1heENvcGllcyA9IDEyO1xuICBsZXQgbWluQ29waWVzID0gMTtcblxuICBsZXQgZnJhbWVSYXRlID0gNjA7XG5cbiAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAvLyBUcmFuc2xhdGlvblxuICAvLyBsZXQgcHJldmlvdXNWZXJ0aWNhbFRyYW5zbGF0aW9uOiBudW1iZXIgPSBIIC8gMi4yNTtcblxuICBsZXQgdmVydGljYWxUcmFuc2xhdGlvbldoaXRlc3BhY2VDb21wZW5zYXRpb246IG51bWJlciA9IDIuMjU7XG4gIGNvbnN0IHByZXZpb3VzSG9yaXpvbnRhbFRyYW5zbGF0aW9uID0gKGlkeDogbnVtYmVyKSA9PlxuICAgIC02MCArIChjaGFyYWN0ZXJXaWR0aCAqIGlkeCArIGNoYXJhY3RlcldpZHRoIC8gMS41ICsgc3Ryb2tlT2Zmc2V0KTtcblxuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIFByZWxvYWRcbiAgcC5wcmVsb2FkID0gKCkgPT4ge1xuICAgIGRoYXJtYUZvbnQgPSBwLmxvYWRGb250KGAvZm9udHMvZGhhcm1hL2RoYXJtYV9yZWd1bGFyLnR0ZmApO1xuICB9O1xuXG4gIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gU2V0dXBcbiAgcC5zZXR1cCA9ICgpID0+IHtcbiAgICAvLyBPdXIgQ2FudmFzXG4gICAgY2FudmFzID0gcC5jcmVhdGVDYW52YXMoVywgSCk7XG5cbiAgICAvLyBUaHJlZVdhdGVyQ2FudmFzKHBhcmVudEVsLCBjYW52YXMuZWx0KTtcblxuICAgIHAuZnJhbWVSYXRlKGZyYW1lUmF0ZSk7XG5cbiAgICBpZiAod2luZG93LmRldmljZVBpeGVsUmF0aW8gPiAxICYmIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIDwgMykge1xuICAgICAgcC5waXhlbERlbnNpdHkoMS4yNSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gVXBkYXRlIENoYXJhY3RlclxuICBjb25zdCB1cGRhdGVDaGFyYWN0ZXIgPSAoY2hhcjogTFhMVF9EaGFybWFDYW52YXNDaGFyLCBpZHg6IG51bWJlcikgPT4ge1xuICAgIGlmIChjaGFyLmNvdW50IDwgbWF4Q291bnQgJiYgY2hhci5jb3VudElzSW5jcmVtZW50aW5nKSB7XG4gICAgICBjaGFyYWN0ZXJzW2lkeF0gPSB7XG4gICAgICAgIC4uLmNoYXIsXG4gICAgICAgIGNvdW50OiBjaGFyLmNvdW50ICsgMSxcbiAgICAgIH07XG5cbiAgICAgIHByZXZpb3VzQ291bnRVcGRhdGVUaW1lID0gcC5taWxsaXMoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoY2hhci5jb3VudCA9PT0gbWF4Q291bnQpIHtcbiAgICAgIGNoYXJhY3RlcnNbaWR4XSA9IHtcbiAgICAgICAgLi4uY2hhcixcbiAgICAgICAgY291bnQ6IGNoYXIuY291bnQgLSAxLFxuICAgICAgICBjb3VudElzSW5jcmVtZW50aW5nOiBmYWxzZSxcbiAgICAgICAgY291bnRJc0RlY3JlbWVudGluZzogdHJ1ZSxcbiAgICAgIH07XG5cbiAgICAgIHByZXZpb3VzQ291bnRVcGRhdGVUaW1lID0gcC5taWxsaXMoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoY2hhci5jb3VudCA+IG1pbkNvdW50ICYmIGNoYXIuY291bnRJc0RlY3JlbWVudGluZykge1xuICAgICAgY2hhcmFjdGVyc1tpZHhdID0ge1xuICAgICAgICAuLi5jaGFyLFxuICAgICAgICBjb3VudDogY2hhci5jb3VudCAtIDEsXG4gICAgICAgIGNvdW50SXNEZWNyZW1lbnRpbmc6IHRydWUsXG4gICAgICB9O1xuXG4gICAgICBwcmV2aW91c0NvdW50VXBkYXRlVGltZSA9IHAubWlsbGlzKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGNoYXIuY291bnQgPT09IG1pbkNvdW50ICYmIGNoYXIuY291bnRJc0RlY3JlbWVudGluZykge1xuICAgICAgY2hhcmFjdGVyc1tpZHhdID0ge1xuICAgICAgICAuLi5jaGFyLFxuICAgICAgICBjb3VudDogY2hhci5jb3VudCArIDEsXG4gICAgICAgIGNvdW50SXNJbmNyZW1lbnRpbmc6IHRydWUsXG4gICAgICAgIGNvdW50SXNEZWNyZW1lbnRpbmc6IGZhbHNlLFxuICAgICAgfTtcblxuICAgICAgcHJldmlvdXNDb3VudFVwZGF0ZVRpbWUgPSBwLm1pbGxpcygpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9O1xuXG4gIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gVXBkYXRlIENvcGllc1xuICBjb25zdCB1cGRhdGVDb3BpZXMgPSAoY2hhcjogTFhMVF9EaGFybWFDYW52YXNDaGFyLCBpZHg6IG51bWJlcikgPT4ge1xuICAgIGlmIChjaGFyLmNvcGllcyA8IG1heENvcGllcyAmJiBjaGFyLmNvcGllc0FyZUluY3JlbWVudGluZykge1xuICAgICAgY2hhcmFjdGVyc1tpZHhdID0ge1xuICAgICAgICAuLi5jaGFyLFxuICAgICAgICBjb3BpZXM6IGNoYXIuY29waWVzICsgMSxcbiAgICAgIH07XG5cbiAgICAgIHByZXZpb3VzQ29weVVwZGF0ZVRpbWUgPSBwLm1pbGxpcygpO1xuXG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChjaGFyLmNvcGllcyA9PT0gbWF4Q29waWVzKSB7XG4gICAgICBjaGFyYWN0ZXJzW2lkeF0gPSB7XG4gICAgICAgIC4uLmNoYXIsXG4gICAgICAgIGNvcGllczogY2hhci5jb3BpZXMgLSAxLFxuICAgICAgICBjb3BpZXNBcmVJbmNyZW1lbnRpbmc6IGZhbHNlLFxuICAgICAgICBjb3BpZXNBcmVEZWNyZW1lbnRpbmc6IHRydWUsXG4gICAgICB9O1xuXG4gICAgICBwcmV2aW91c0NvcHlVcGRhdGVUaW1lID0gcC5taWxsaXMoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoY2hhci5jb3BpZXMgPiBtaW5Db3BpZXMgJiYgY2hhci5jb3BpZXNBcmVEZWNyZW1lbnRpbmcpIHtcbiAgICAgIGNoYXJhY3RlcnNbaWR4XSA9IHtcbiAgICAgICAgLi4uY2hhcixcbiAgICAgICAgY29waWVzOiBjaGFyLmNvcGllcyAtIDEsXG4gICAgICAgIGNvcGllc0FyZURlY3JlbWVudGluZzogdHJ1ZSxcbiAgICAgIH07XG5cbiAgICAgIHByZXZpb3VzQ29weVVwZGF0ZVRpbWUgPSBwLm1pbGxpcygpO1xuXG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChjaGFyLmNvcGllcyA9PT0gbWluQ29waWVzICYmIGNoYXIuY29waWVzQXJlRGVjcmVtZW50aW5nKSB7XG4gICAgICBjaGFyYWN0ZXJzW2lkeF0gPSB7XG4gICAgICAgIC4uLmNoYXIsXG4gICAgICAgIGNvcGllczogY2hhci5jb3BpZXMgKyAxLFxuICAgICAgICBjb3BpZXNBcmVJbmNyZW1lbnRpbmc6IHRydWUsXG4gICAgICAgIGNvcGllc0FyZURlY3JlbWVudGluZzogZmFsc2UsXG4gICAgICB9O1xuXG4gICAgICBwcmV2aW91c0NvcHlVcGRhdGVUaW1lID0gcC5taWxsaXMoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfTtcblxuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIERyYXdcbiAgcC5kcmF3ID0gKCkgPT4ge1xuICAgIGlmIChwLmZyYW1lQ291bnQgJSAxMCA9PT0gMCkge1xuICAgICAgcC5iYWNrZ3JvdW5kKHdpbmRvdy5sYXhhbHRVbml2ZXJzYWxUaGVtZS5iYWNrZ3JvdW5kKTtcbiAgICAgIHAudGV4dEZvbnQoZGhhcm1hRm9udCk7XG4gICAgICBwLnRleHRTaXplKGNoYXJhY3RlclNpemUpO1xuICAgICAgcC50ZXh0QWxpZ24ocC5DRU5URVIsIHAuQ0VOVEVSKTtcbiAgICAgIHAuZmlsbChgJHt3aW5kb3cubGF4YWx0VW5pdmVyc2FsVGhlbWUuZm9yZWdyb3VuZH1gKTtcbiAgICAgIHAuc3Ryb2tlV2VpZ2h0KHN0cm9rZVdpZHRoKTtcbiAgICAgIHAuc3Ryb2tlKHdpbmRvdy5sYXhhbHRVbml2ZXJzYWxUaGVtZS5iYWNrZ3JvdW5kKTtcblxuICAgICAgaWYgKEggJiYgVykge1xuICAgICAgICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAgICAgICAvLyBMb29wIHRocm91Z2ggb3VyIGNvcGllc1xuICAgICAgICBjaGFyYWN0ZXJzLm1hcCgoY2hhcjogTFhMVF9EaGFybWFDYW52YXNDaGFyLCBpZHg6IG51bWJlcikgPT4ge1xuICAgICAgICAgIHAuc2NhbGUoMSwgMSk7XG5cbiAgICAgICAgICBsZXQgcmFuZG9tQ2hhclBpY2sgPSBNYXRoLnJhbmRvbSgpIDw9IDAuNTtcblxuICAgICAgICAgIGlmIChyYW5kb21DaGFyUGljaykge1xuICAgICAgICAgICAgdXBkYXRlQ29waWVzKGNoYXIsIGlkeCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHJhbmRvbUNoYXJQaWNrICYmIHAubWlsbGlzKCkgLSBwcmV2aW91c0NvdW50VXBkYXRlVGltZSA+IDMwMDApIHtcbiAgICAgICAgICAgIHVwZGF0ZUNoYXJhY3RlcihjaGFyLCBpZHgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCBjb3VudEFycmF5OiBudW1iZXJbXSA9IEFycmF5LmZyb20oQXJyYXkoY2hhci5jb3VudCkua2V5cygpKTtcblxuICAgICAgICAgIGNvdW50QXJyYXkgPSBjb3VudEFycmF5Lm1hcCgoY291bnROdW1iZXI6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNvdW50TnVtYmVyICsgMTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gICAgICAgICAgLy8gRHVwbGljYXRlIHBvc2l0aW9uc1xuICAgICAgICAgIGNvdW50QXJyYXkubWFwKChjb3VudE51bWJlcjogbnVtYmVyLCBpZHh4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGxldCB2ZXJ0aWNhbFNjYWxlID0gMSAvIChjaGFyLmNvdW50ICogMC45NSk7XG5cbiAgICAgICAgICAgIGxldCBkdXBsaWNhdGVWZXJ0aWNhbFBvc2l0aW9uOiBudW1iZXIgPVxuICAgICAgICAgICAgICBjaGFyLmNvdW50ID09IDFcbiAgICAgICAgICAgICAgICA/IEggLyB2ZXJ0aWNhbFRyYW5zbGF0aW9uV2hpdGVzcGFjZUNvbXBlbnNhdGlvblxuICAgICAgICAgICAgICAgIDogY2hhcmFjdGVyU2l6ZSAvIHZlcnRpY2FsU2tld0RpdmlzaWJsZSArXG4gICAgICAgICAgICAgICAgICAoY2hhcmFjdGVyU2l6ZSAvIGNoYXJhY3RlclNrZXdEaXZpc2libGUpICogaWR4eDtcblxuICAgICAgICAgICAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgICAgICAgICAgIC8vIE1ha2UgY29waWVzXG4gICAgICAgICAgICBsZXQgY29waWVzQXJyYXk6IG51bWJlcltdID0gQXJyYXkuZnJvbShBcnJheShjaGFyLmNvcGllcykua2V5cygpKTtcbiAgICAgICAgICAgIC8vIGxldCByYW5kb21Db3B5UGljayA9IE1hdGgucmFuZG9tKCkgPD0gMC41O1xuXG4gICAgICAgICAgICBjb3BpZXNBcnJheSA9IGNvcGllc0FycmF5Lm1hcCgoY29weU51bWJlcjogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBjb3B5TnVtYmVyICsgMTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBsZXQgcmFuZG9tQ29weVBpY2sgPSBNYXRoLnJhbmRvbSgpIDw9IDAuNTtcbiAgICAgICAgICAgIC8vIGxldCBjb3B5VGltZXIgPSBwLm1pbGxpcygpIC0gcHJldmlvdXNDb3BpZXNWaXNpYmxlVGltZSA+IDIwMDA7XG4gICAgICAgICAgICBwcmV2aW91c0NvcHlVcGRhdGVUaW1lO1xuXG4gICAgICAgICAgICAvLyBsZXQgaXNGaXJzdENvdW50ID0gdHJ1ZTtcblxuICAgICAgICAgICAgY29waWVzQXJyYXkubWFwKChjb3B5TnVtYmVyOiBudW1iZXIsIGlkeHh4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgLy8gbGV0IGNlbnRlckNvb3Jkc1ggPSBXIC8gMjtcbiAgICAgICAgICAgICAgLy8gbGV0IGNlbnRlckNvb3Jkc1kgPSBIIC8gMjtcblxuICAgICAgICAgICAgICAvLyBsZXQgaG9yaXpvbnRhbFRyYW5zbGF0ZSA9XG4gICAgICAgICAgICAgIC8vICAgY29weU51bWJlciAhPT0gMVxuICAgICAgICAgICAgICAvLyAgICAgPyAocHJldmlvdXNIb3Jpem9udGFsVHJhbnNsYXRpb24oaWR4KSArXG4gICAgICAgICAgICAgIC8vICAgICAgICAgKHN0cm9rZU9mZnNldCAvIChwLm1vdXNlWCAvIDEwMCkpICogY29weU51bWJlcilcbiAgICAgICAgICAgICAgLy8gICAgIDogcHJldmlvdXNIb3Jpem9udGFsVHJhbnNsYXRpb24oaWR4KSArXG4gICAgICAgICAgICAgIC8vICAgICAgIHN0cm9rZU9mZnNldCAqIGNvcHlOdW1iZXI7XG5cbiAgICAgICAgICAgICAgLy8gbGV0IHZlcnRpY2FsVHJhbnNsYXRlID1cbiAgICAgICAgICAgICAgLy8gICBjb3B5TnVtYmVyICE9PSAxXG4gICAgICAgICAgICAgIC8vICAgICA/IChkdXBsaWNhdGVWZXJ0aWNhbFBvc2l0aW9uIC0gKHN0cm9rZU9mZnNldCAvIChwLm1vdXNlWCAvIDEwMCkpICogY29weU51bWJlcilcbiAgICAgICAgICAgICAgLy8gICAgIDogZHVwbGljYXRlVmVydGljYWxQb3NpdGlvbiAtIHN0cm9rZU9mZnNldCAqIGNvcHlOdW1iZXI7XG5cbiAgICAgICAgICAgICAgbGV0IGhvcml6b250YWxUcmFuc2xhdGUgPVxuICAgICAgICAgICAgICAgIHByZXZpb3VzSG9yaXpvbnRhbFRyYW5zbGF0aW9uKGlkeCkgKyBzdHJva2VPZmZzZXQgKiBjb3B5TnVtYmVyO1xuXG4gICAgICAgICAgICAgIGxldCB2ZXJ0aWNhbFRyYW5zbGF0ZSA9XG4gICAgICAgICAgICAgICAgZHVwbGljYXRlVmVydGljYWxQb3NpdGlvbiAtIHN0cm9rZU9mZnNldCAqIGNvcHlOdW1iZXI7XG5cbiAgICAgICAgICAgICAgcC5wdXNoKCk7XG4gICAgICAgICAgICAgIHAuc2NhbGUoMSwgdmVydGljYWxTY2FsZSk7XG4gICAgICAgICAgICAgIHAudGV4dChjaGFyLmxldHRlciwgaG9yaXpvbnRhbFRyYW5zbGF0ZSwgdmVydGljYWxUcmFuc2xhdGUpO1xuICAgICAgICAgICAgICBwLnBvcCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBwLndpbmRvd1Jlc2l6ZWQgPSAoKSA9PiB7XG4gICAgcC5yZXNpemVDYW52YXMoVywgSCk7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEaGFybWFDYW52YXNEaXNwbGF5O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sketches/p5/no-water-distort.canvas.tsx\n");

/***/ })

})