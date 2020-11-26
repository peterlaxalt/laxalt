webpackHotUpdate_N_E("pages/projects/water-distort-with-canvas",{

/***/ "./sketches/p5/dharma-water-distort.canvas.tsx":
/*!*****************************************************!*\
  !*** ./sketches/p5/dharma-water-distort.canvas.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _three_three_water_distort_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../three/three-water-distort.canvas */ \"./sketches/three/three-water-distort.canvas.ts\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/**\n *\n * Shader fun\n * @author Peter Laxalt\n *\n */\n // Begin Component\n// __________________________________________________________________________\n\nvar DharmaCanvasDisplay = function DharmaCanvasDisplay(W, H, ID, DharmaTheme, parentEl) {\n  return function (p) {\n    // _________________________________________________\n    // Config\n    var canvas; // ____________________________\n    // Fonts\n\n    var dharmaFont; // ____________________________\n    // Typography\n\n    var text = \"MEEKO\";\n    var splitCharacterArray = text.split(\"\");\n    var characters = splitCharacterArray.map(function (character, idx) {\n      return {\n        letter: character,\n        count: 1,\n        idx: idx,\n        copies: 5,\n        copiesLastVisible: 0,\n        copiesAreVisible: false,\n        countIsIncrementing: true,\n        countIsDecrementing: false,\n        copiesAreIncrementing: true,\n        copiesAreDecrementing: false\n      };\n    });\n    var characterCount = splitCharacterArray.length;\n    var characterWidth = W / characterCount;\n    var characterSize = H * 1.25;\n    console.log(characterSize, \"characterSize\"); // ____________________________\n    // Counts\n    // let renderCount: number = 0;\n\n    var previousCountUpdateTime = 0;\n    var previousCopyUpdateTime = 0; // ____________________________\n    // Strokes\n\n    var strokeWidth = 4;\n    var strokeOffset = strokeWidth * 1.5; // ____________________________\n    // Limits\n\n    var maxCount = 3;\n    var minCount = 1;\n    var maxCopies = 12;\n    var minCopies = 1;\n    var frameRate = 10; // ____________________________\n    // Translation\n    // let previousVerticalTranslation: number = H / 2.25;\n\n    var verticalTranslationWhitespaceCompensation = 2.25;\n\n    var previousHorizontalTranslation = function previousHorizontalTranslation(idx) {\n      return -60 + (characterWidth * idx + characterWidth / 1.5 + strokeOffset);\n    }; // _________________________________________________\n    // Preload\n\n\n    p.preload = function () {\n      dharmaFont = p.loadFont(\"/fonts/dharma/dharma_regular.ttf\");\n    }; // _________________________________________________\n    // Setup\n\n\n    p.setup = function () {\n      // Our Canvas\n      canvas = p.createCanvas(W, H);\n      Object(_three_three_water_distort_canvas__WEBPACK_IMPORTED_MODULE_1__[\"ThreeWaterCanvas\"])(parentEl, canvas.elt, DharmaTheme);\n      p.frameRate(frameRate);\n    }; // _________________________________________________\n    // Update Character\n\n\n    var updateCharacter = function updateCharacter(_char, idx) {\n      if (_char.count < maxCount && _char.countIsIncrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char), {}, {\n          count: _char.count + 1\n        });\n        previousCountUpdateTime = p.millis();\n        return;\n      } else if (_char.count === maxCount) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char), {}, {\n          count: _char.count - 1,\n          countIsIncrementing: false,\n          countIsDecrementing: true\n        });\n        previousCountUpdateTime = p.millis();\n        return;\n      } else if (_char.count > minCount && _char.countIsDecrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char), {}, {\n          count: _char.count - 1,\n          countIsDecrementing: true\n        });\n        previousCountUpdateTime = p.millis();\n        return;\n      } else if (_char.count === minCount && _char.countIsDecrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char), {}, {\n          count: _char.count + 1,\n          countIsIncrementing: true,\n          countIsDecrementing: false\n        });\n        previousCountUpdateTime = p.millis();\n        return;\n      }\n\n      return;\n    }; // _________________________________________________\n    // Update Copies\n\n\n    var updateCopies = function updateCopies(_char2, idx) {\n      if (_char2.copies < maxCopies && _char2.copiesAreIncrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char2), {}, {\n          copies: _char2.copies + 1\n        });\n        previousCopyUpdateTime = p.millis();\n        return;\n      } else if (_char2.copies === maxCopies) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char2), {}, {\n          copies: _char2.copies - 1,\n          copiesAreIncrementing: false,\n          copiesAreDecrementing: true\n        });\n        previousCopyUpdateTime = p.millis();\n        return;\n      } else if (_char2.copies > minCopies && _char2.copiesAreDecrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char2), {}, {\n          copies: _char2.copies - 1,\n          copiesAreDecrementing: true\n        });\n        previousCopyUpdateTime = p.millis();\n        return;\n      } else if (_char2.copies === minCopies && _char2.copiesAreDecrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char2), {}, {\n          copies: _char2.copies + 1,\n          copiesAreIncrementing: true,\n          copiesAreDecrementing: false\n        });\n        previousCopyUpdateTime = p.millis();\n        return;\n      }\n\n      return;\n    }; // _________________________________________________\n    // Draw\n\n\n    p.draw = function () {\n      p.background(window.laxaltUniversalTheme.background);\n      p.textFont(dharmaFont);\n      p.textSize(characterSize);\n      p.textAlign(p.CENTER, p.CENTER);\n      p.fill(\"\".concat(window.laxaltUniversalTheme.foreground));\n      p.strokeWeight(strokeWidth);\n      p.stroke(window.laxaltUniversalTheme.background);\n\n      if (H && W) {\n        // _________________________________________\n        // Loop through our copies\n        characters.map(function (_char3, idx) {\n          p.scale(1, 1);\n          var randomCharPick = Math.random() <= 0.5;\n\n          if (randomCharPick) {\n            updateCopies(_char3, idx);\n          }\n\n          if (randomCharPick && p.millis() - previousCountUpdateTime > 3000) {\n            updateCharacter(_char3, idx);\n          }\n\n          var countArray = Array.from(Array(_char3.count).keys());\n          countArray = countArray.map(function (countNumber) {\n            return countNumber + 1;\n          }); // _________________________________________\n          // Duplicate positions\n\n          countArray.map(function (countNumber, idxx) {\n            var verticalScale = 1 / (_char3.count * 0.95);\n            var verticalSkewDivisible = 2.75;\n            var characterSkewDivisible = 1.36;\n            var duplicateVerticalPosition = _char3.count == 1 ? H / verticalTranslationWhitespaceCompensation : characterSize / verticalSkewDivisible + characterSize / characterSkewDivisible * idxx; // _________________________________________\n            // Make copies\n\n            var copiesArray = Array.from(Array(_char3.copies).keys()); // let randomCopyPick = Math.random() <= 0.5;\n\n            copiesArray = copiesArray.map(function (copyNumber) {\n              return copyNumber + 1;\n            }); // let randomCopyPick = Math.random() <= 0.5;\n            // let copyTimer = p.millis() - previousCopiesVisibleTime > 2000;\n\n            previousCopyUpdateTime; // let isFirstCount = true;\n\n            copiesArray.map(function (copyNumber, idxxx) {\n              // let centerCoordsX = W / 2;\n              // let centerCoordsY = H / 2;\n              // let horizontalTranslate =\n              //   copyNumber !== 1\n              //     ? (previousHorizontalTranslation(idx) +\n              //         (strokeOffset / (p.mouseX / 100)) * copyNumber)\n              //     : previousHorizontalTranslation(idx) +\n              //       strokeOffset * copyNumber;\n              // let verticalTranslate =\n              //   copyNumber !== 1\n              //     ? (duplicateVerticalPosition - (strokeOffset / (p.mouseX / 100)) * copyNumber)\n              //     : duplicateVerticalPosition - strokeOffset * copyNumber;\n              var horizontalTranslate = previousHorizontalTranslation(idx) + strokeOffset * copyNumber;\n              var verticalTranslate = duplicateVerticalPosition - strokeOffset * copyNumber;\n              p.push();\n              p.scale(1, verticalScale);\n              p.text(_char3.letter, horizontalTranslate, verticalTranslate);\n              p.pop();\n            });\n          });\n        });\n      }\n    };\n\n    p.windowResized = function () {\n      p.resizeCanvas(W, H);\n    };\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DharmaCanvasDisplay);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2tldGNoZXMvcDUvZGhhcm1hLXdhdGVyLWRpc3RvcnQuY2FudmFzLnRzeD9kNGEwIl0sIm5hbWVzIjpbIkRoYXJtYUNhbnZhc0Rpc3BsYXkiLCJXIiwiSCIsIklEIiwiRGhhcm1hVGhlbWUiLCJwYXJlbnRFbCIsInAiLCJjYW52YXMiLCJkaGFybWFGb250IiwidGV4dCIsInNwbGl0Q2hhcmFjdGVyQXJyYXkiLCJzcGxpdCIsImNoYXJhY3RlcnMiLCJtYXAiLCJjaGFyYWN0ZXIiLCJpZHgiLCJsZXR0ZXIiLCJjb3VudCIsImNvcGllcyIsImNvcGllc0xhc3RWaXNpYmxlIiwiY29waWVzQXJlVmlzaWJsZSIsImNvdW50SXNJbmNyZW1lbnRpbmciLCJjb3VudElzRGVjcmVtZW50aW5nIiwiY29waWVzQXJlSW5jcmVtZW50aW5nIiwiY29waWVzQXJlRGVjcmVtZW50aW5nIiwiY2hhcmFjdGVyQ291bnQiLCJsZW5ndGgiLCJjaGFyYWN0ZXJXaWR0aCIsImNoYXJhY3RlclNpemUiLCJjb25zb2xlIiwibG9nIiwicHJldmlvdXNDb3VudFVwZGF0ZVRpbWUiLCJwcmV2aW91c0NvcHlVcGRhdGVUaW1lIiwic3Ryb2tlV2lkdGgiLCJzdHJva2VPZmZzZXQiLCJtYXhDb3VudCIsIm1pbkNvdW50IiwibWF4Q29waWVzIiwibWluQ29waWVzIiwiZnJhbWVSYXRlIiwidmVydGljYWxUcmFuc2xhdGlvbldoaXRlc3BhY2VDb21wZW5zYXRpb24iLCJwcmV2aW91c0hvcml6b250YWxUcmFuc2xhdGlvbiIsInByZWxvYWQiLCJsb2FkRm9udCIsInNldHVwIiwiY3JlYXRlQ2FudmFzIiwiVGhyZWVXYXRlckNhbnZhcyIsImVsdCIsInVwZGF0ZUNoYXJhY3RlciIsImNoYXIiLCJtaWxsaXMiLCJ1cGRhdGVDb3BpZXMiLCJkcmF3IiwiYmFja2dyb3VuZCIsIndpbmRvdyIsImxheGFsdFVuaXZlcnNhbFRoZW1lIiwidGV4dEZvbnQiLCJ0ZXh0U2l6ZSIsInRleHRBbGlnbiIsIkNFTlRFUiIsImZpbGwiLCJmb3JlZ3JvdW5kIiwic3Ryb2tlV2VpZ2h0Iiwic3Ryb2tlIiwic2NhbGUiLCJyYW5kb21DaGFyUGljayIsIk1hdGgiLCJyYW5kb20iLCJjb3VudEFycmF5IiwiQXJyYXkiLCJmcm9tIiwia2V5cyIsImNvdW50TnVtYmVyIiwiaWR4eCIsInZlcnRpY2FsU2NhbGUiLCJ2ZXJ0aWNhbFNrZXdEaXZpc2libGUiLCJjaGFyYWN0ZXJTa2V3RGl2aXNpYmxlIiwiZHVwbGljYXRlVmVydGljYWxQb3NpdGlvbiIsImNvcGllc0FycmF5IiwiY29weU51bWJlciIsImlkeHh4IiwiaG9yaXpvbnRhbFRyYW5zbGF0ZSIsInZlcnRpY2FsVHJhbnNsYXRlIiwicHVzaCIsInBvcCIsIndpbmRvd1Jlc2l6ZWQiLCJyZXNpemVDYW52YXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQU1BO0FBQ0E7O0FBa0NBLElBQU1BLG1CQUE2QyxHQUFHLFNBQWhEQSxtQkFBZ0QsQ0FDcERDLENBRG9ELEVBRXBEQyxDQUZvRCxFQUdwREMsRUFIb0QsRUFJcERDLFdBSm9ELEVBS3BEQyxRQUxvRDtBQUFBLFNBTWpELFVBQUNDLENBQUQsRUFBVztBQUNkO0FBQ0E7QUFFQSxRQUFJQyxNQUFKLENBSmMsQ0FNZDtBQUNBOztBQUNBLFFBQUlDLFVBQUosQ0FSYyxDQVVkO0FBQ0E7O0FBQ0EsUUFBSUMsSUFBSSxHQUFHLE9BQVg7QUFFQSxRQUFJQyxtQkFBbUIsR0FBR0QsSUFBSSxDQUFDRSxLQUFMLENBQVcsRUFBWCxDQUExQjtBQUNBLFFBQUlDLFVBQW1DLEdBQUdGLG1CQUFtQixDQUFDRyxHQUFwQixDQUN4QyxVQUFDQyxTQUFELEVBQW9CQyxHQUFwQixFQUFvQztBQUNsQyxhQUFPO0FBQ0xDLGNBQU0sRUFBRUYsU0FESDtBQUVMRyxhQUFLLEVBQUUsQ0FGRjtBQUdMRixXQUFHLEVBQUVBLEdBSEE7QUFLTEcsY0FBTSxFQUFFLENBTEg7QUFNTEMseUJBQWlCLEVBQUUsQ0FOZDtBQU9MQyx3QkFBZ0IsRUFBRSxLQVBiO0FBU0xDLDJCQUFtQixFQUFFLElBVGhCO0FBVUxDLDJCQUFtQixFQUFFLEtBVmhCO0FBWUxDLDZCQUFxQixFQUFFLElBWmxCO0FBYUxDLDZCQUFxQixFQUFFO0FBYmxCLE9BQVA7QUFlRCxLQWpCdUMsQ0FBMUM7QUFvQkEsUUFBSUMsY0FBc0IsR0FBR2YsbUJBQW1CLENBQUNnQixNQUFqRDtBQUNBLFFBQUlDLGNBQXNCLEdBQUcxQixDQUFDLEdBQUd3QixjQUFqQztBQUNBLFFBQUlHLGFBQXFCLEdBQUcxQixDQUFDLEdBQUcsSUFBaEM7QUFFQTJCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixhQUFaLEVBQTJCLGVBQTNCLEVBdkNjLENBeUNkO0FBQ0E7QUFDQTs7QUFDQSxRQUFJRyx1QkFBK0IsR0FBRyxDQUF0QztBQUNBLFFBQUlDLHNCQUE4QixHQUFHLENBQXJDLENBN0NjLENBK0NkO0FBQ0E7O0FBQ0EsUUFBSUMsV0FBbUIsR0FBRyxDQUExQjtBQUNBLFFBQUlDLFlBQW9CLEdBQUdELFdBQVcsR0FBRyxHQUF6QyxDQWxEYyxDQW9EZDtBQUNBOztBQUNBLFFBQUlFLFFBQVEsR0FBRyxDQUFmO0FBQ0EsUUFBSUMsUUFBUSxHQUFHLENBQWY7QUFFQSxRQUFJQyxTQUFTLEdBQUcsRUFBaEI7QUFDQSxRQUFJQyxTQUFTLEdBQUcsQ0FBaEI7QUFFQSxRQUFJQyxTQUFTLEdBQUcsRUFBaEIsQ0E1RGMsQ0E4RGQ7QUFDQTtBQUNBOztBQUVBLFFBQUlDLHlDQUFpRCxHQUFHLElBQXhEOztBQUNBLFFBQU1DLDZCQUE2QixHQUFHLFNBQWhDQSw2QkFBZ0MsQ0FBQzFCLEdBQUQ7QUFBQSxhQUNwQyxDQUFDLEVBQUQsSUFBT1ksY0FBYyxHQUFHWixHQUFqQixHQUF1QlksY0FBYyxHQUFHLEdBQXhDLEdBQThDTyxZQUFyRCxDQURvQztBQUFBLEtBQXRDLENBbkVjLENBc0VkO0FBQ0E7OztBQUNBNUIsS0FBQyxDQUFDb0MsT0FBRixHQUFZLFlBQU07QUFDaEJsQyxnQkFBVSxHQUFHRixDQUFDLENBQUNxQyxRQUFGLG9DQUFiO0FBQ0QsS0FGRCxDQXhFYyxDQTRFZDtBQUNBOzs7QUFDQXJDLEtBQUMsQ0FBQ3NDLEtBQUYsR0FBVSxZQUFNO0FBQ2Q7QUFDQXJDLFlBQU0sR0FBR0QsQ0FBQyxDQUFDdUMsWUFBRixDQUFlNUMsQ0FBZixFQUFrQkMsQ0FBbEIsQ0FBVDtBQUVBNEMsZ0dBQWdCLENBQUN6QyxRQUFELEVBQVdFLE1BQU0sQ0FBQ3dDLEdBQWxCLEVBQXVCM0MsV0FBdkIsQ0FBaEI7QUFFQUUsT0FBQyxDQUFDaUMsU0FBRixDQUFZQSxTQUFaO0FBQ0QsS0FQRCxDQTlFYyxDQXVGZDtBQUNBOzs7QUFDQSxRQUFNUyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBOEJsQyxHQUE5QixFQUE4QztBQUNwRSxVQUFJa0MsS0FBSSxDQUFDaEMsS0FBTCxHQUFha0IsUUFBYixJQUF5QmMsS0FBSSxDQUFDNUIsbUJBQWxDLEVBQXVEO0FBQ3JEVCxrQkFBVSxDQUFDRyxHQUFELENBQVYsbUNBQ0trQyxLQURMO0FBRUVoQyxlQUFLLEVBQUVnQyxLQUFJLENBQUNoQyxLQUFMLEdBQWE7QUFGdEI7QUFLQWMsK0JBQXVCLEdBQUd6QixDQUFDLENBQUM0QyxNQUFGLEVBQTFCO0FBRUE7QUFDRCxPQVRELE1BU08sSUFBSUQsS0FBSSxDQUFDaEMsS0FBTCxLQUFla0IsUUFBbkIsRUFBNkI7QUFDbEN2QixrQkFBVSxDQUFDRyxHQUFELENBQVYsbUNBQ0trQyxLQURMO0FBRUVoQyxlQUFLLEVBQUVnQyxLQUFJLENBQUNoQyxLQUFMLEdBQWEsQ0FGdEI7QUFHRUksNkJBQW1CLEVBQUUsS0FIdkI7QUFJRUMsNkJBQW1CLEVBQUU7QUFKdkI7QUFPQVMsK0JBQXVCLEdBQUd6QixDQUFDLENBQUM0QyxNQUFGLEVBQTFCO0FBRUE7QUFDRCxPQVhNLE1BV0EsSUFBSUQsS0FBSSxDQUFDaEMsS0FBTCxHQUFhbUIsUUFBYixJQUF5QmEsS0FBSSxDQUFDM0IsbUJBQWxDLEVBQXVEO0FBQzVEVixrQkFBVSxDQUFDRyxHQUFELENBQVYsbUNBQ0trQyxLQURMO0FBRUVoQyxlQUFLLEVBQUVnQyxLQUFJLENBQUNoQyxLQUFMLEdBQWEsQ0FGdEI7QUFHRUssNkJBQW1CLEVBQUU7QUFIdkI7QUFNQVMsK0JBQXVCLEdBQUd6QixDQUFDLENBQUM0QyxNQUFGLEVBQTFCO0FBRUE7QUFDRCxPQVZNLE1BVUEsSUFBSUQsS0FBSSxDQUFDaEMsS0FBTCxLQUFlbUIsUUFBZixJQUEyQmEsS0FBSSxDQUFDM0IsbUJBQXBDLEVBQXlEO0FBQzlEVixrQkFBVSxDQUFDRyxHQUFELENBQVYsbUNBQ0trQyxLQURMO0FBRUVoQyxlQUFLLEVBQUVnQyxLQUFJLENBQUNoQyxLQUFMLEdBQWEsQ0FGdEI7QUFHRUksNkJBQW1CLEVBQUUsSUFIdkI7QUFJRUMsNkJBQW1CLEVBQUU7QUFKdkI7QUFPQVMsK0JBQXVCLEdBQUd6QixDQUFDLENBQUM0QyxNQUFGLEVBQTFCO0FBRUE7QUFDRDs7QUFFRDtBQUNELEtBN0NELENBekZjLENBd0lkO0FBQ0E7OztBQUNBLFFBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNGLE1BQUQsRUFBOEJsQyxHQUE5QixFQUE4QztBQUNqRSxVQUFJa0MsTUFBSSxDQUFDL0IsTUFBTCxHQUFjbUIsU0FBZCxJQUEyQlksTUFBSSxDQUFDMUIscUJBQXBDLEVBQTJEO0FBQ3pEWCxrQkFBVSxDQUFDRyxHQUFELENBQVYsbUNBQ0trQyxNQURMO0FBRUUvQixnQkFBTSxFQUFFK0IsTUFBSSxDQUFDL0IsTUFBTCxHQUFjO0FBRnhCO0FBS0FjLDhCQUFzQixHQUFHMUIsQ0FBQyxDQUFDNEMsTUFBRixFQUF6QjtBQUVBO0FBQ0QsT0FURCxNQVNPLElBQUlELE1BQUksQ0FBQy9CLE1BQUwsS0FBZ0JtQixTQUFwQixFQUErQjtBQUNwQ3pCLGtCQUFVLENBQUNHLEdBQUQsQ0FBVixtQ0FDS2tDLE1BREw7QUFFRS9CLGdCQUFNLEVBQUUrQixNQUFJLENBQUMvQixNQUFMLEdBQWMsQ0FGeEI7QUFHRUssK0JBQXFCLEVBQUUsS0FIekI7QUFJRUMsK0JBQXFCLEVBQUU7QUFKekI7QUFPQVEsOEJBQXNCLEdBQUcxQixDQUFDLENBQUM0QyxNQUFGLEVBQXpCO0FBRUE7QUFDRCxPQVhNLE1BV0EsSUFBSUQsTUFBSSxDQUFDL0IsTUFBTCxHQUFjb0IsU0FBZCxJQUEyQlcsTUFBSSxDQUFDekIscUJBQXBDLEVBQTJEO0FBQ2hFWixrQkFBVSxDQUFDRyxHQUFELENBQVYsbUNBQ0trQyxNQURMO0FBRUUvQixnQkFBTSxFQUFFK0IsTUFBSSxDQUFDL0IsTUFBTCxHQUFjLENBRnhCO0FBR0VNLCtCQUFxQixFQUFFO0FBSHpCO0FBTUFRLDhCQUFzQixHQUFHMUIsQ0FBQyxDQUFDNEMsTUFBRixFQUF6QjtBQUVBO0FBQ0QsT0FWTSxNQVVBLElBQUlELE1BQUksQ0FBQy9CLE1BQUwsS0FBZ0JvQixTQUFoQixJQUE2QlcsTUFBSSxDQUFDekIscUJBQXRDLEVBQTZEO0FBQ2xFWixrQkFBVSxDQUFDRyxHQUFELENBQVYsbUNBQ0trQyxNQURMO0FBRUUvQixnQkFBTSxFQUFFK0IsTUFBSSxDQUFDL0IsTUFBTCxHQUFjLENBRnhCO0FBR0VLLCtCQUFxQixFQUFFLElBSHpCO0FBSUVDLCtCQUFxQixFQUFFO0FBSnpCO0FBT0FRLDhCQUFzQixHQUFHMUIsQ0FBQyxDQUFDNEMsTUFBRixFQUF6QjtBQUVBO0FBQ0Q7O0FBRUQ7QUFDRCxLQTdDRCxDQTFJYyxDQXlMZDtBQUNBOzs7QUFDQTVDLEtBQUMsQ0FBQzhDLElBQUYsR0FBUyxZQUFNO0FBQ2I5QyxPQUFDLENBQUMrQyxVQUFGLENBQWFDLE1BQU0sQ0FBQ0Msb0JBQVAsQ0FBNEJGLFVBQXpDO0FBRUEvQyxPQUFDLENBQUNrRCxRQUFGLENBQVdoRCxVQUFYO0FBRUFGLE9BQUMsQ0FBQ21ELFFBQUYsQ0FBVzdCLGFBQVg7QUFFQXRCLE9BQUMsQ0FBQ29ELFNBQUYsQ0FBWXBELENBQUMsQ0FBQ3FELE1BQWQsRUFBc0JyRCxDQUFDLENBQUNxRCxNQUF4QjtBQUVBckQsT0FBQyxDQUFDc0QsSUFBRixXQUFVTixNQUFNLENBQUNDLG9CQUFQLENBQTRCTSxVQUF0QztBQUNBdkQsT0FBQyxDQUFDd0QsWUFBRixDQUFlN0IsV0FBZjtBQUNBM0IsT0FBQyxDQUFDeUQsTUFBRixDQUFTVCxNQUFNLENBQUNDLG9CQUFQLENBQTRCRixVQUFyQzs7QUFFQSxVQUFJbkQsQ0FBQyxJQUFJRCxDQUFULEVBQVk7QUFDVjtBQUNBO0FBQ0FXLGtCQUFVLENBQUNDLEdBQVgsQ0FBZSxVQUFDb0MsTUFBRCxFQUE4QmxDLEdBQTlCLEVBQThDO0FBQzNEVCxXQUFDLENBQUMwRCxLQUFGLENBQVEsQ0FBUixFQUFXLENBQVg7QUFFQSxjQUFJQyxjQUFjLEdBQUdDLElBQUksQ0FBQ0MsTUFBTCxNQUFpQixHQUF0Qzs7QUFFQSxjQUFJRixjQUFKLEVBQW9CO0FBQ2xCZCx3QkFBWSxDQUFDRixNQUFELEVBQU9sQyxHQUFQLENBQVo7QUFDRDs7QUFFRCxjQUFJa0QsY0FBYyxJQUFJM0QsQ0FBQyxDQUFDNEMsTUFBRixLQUFhbkIsdUJBQWIsR0FBdUMsSUFBN0QsRUFBbUU7QUFDakVpQiwyQkFBZSxDQUFDQyxNQUFELEVBQU9sQyxHQUFQLENBQWY7QUFDRDs7QUFFRCxjQUFJcUQsVUFBb0IsR0FBR0MsS0FBSyxDQUFDQyxJQUFOLENBQVdELEtBQUssQ0FBQ3BCLE1BQUksQ0FBQ2hDLEtBQU4sQ0FBTCxDQUFrQnNELElBQWxCLEVBQVgsQ0FBM0I7QUFFQUgsb0JBQVUsR0FBR0EsVUFBVSxDQUFDdkQsR0FBWCxDQUFlLFVBQUMyRCxXQUFELEVBQXlCO0FBQ25ELG1CQUFPQSxXQUFXLEdBQUcsQ0FBckI7QUFDRCxXQUZZLENBQWIsQ0FmMkQsQ0FtQjNEO0FBQ0E7O0FBQ0FKLG9CQUFVLENBQUN2RCxHQUFYLENBQWUsVUFBQzJELFdBQUQsRUFBc0JDLElBQXRCLEVBQXVDO0FBQ3BELGdCQUFJQyxhQUFhLEdBQUcsS0FBS3pCLE1BQUksQ0FBQ2hDLEtBQUwsR0FBYSxJQUFsQixDQUFwQjtBQUVBLGdCQUFJMEQscUJBQTZCLEdBQUcsSUFBcEM7QUFDQSxnQkFBSUMsc0JBQThCLEdBQUcsSUFBckM7QUFFQSxnQkFBSUMseUJBQWlDLEdBQ25DNUIsTUFBSSxDQUFDaEMsS0FBTCxJQUFjLENBQWQsR0FDSWYsQ0FBQyxHQUFHc0MseUNBRFIsR0FFSVosYUFBYSxHQUFHK0MscUJBQWhCLEdBQ0MvQyxhQUFhLEdBQUdnRCxzQkFBakIsR0FBMkNILElBSmpELENBTm9ELENBWXBEO0FBQ0E7O0FBQ0EsZ0JBQUlLLFdBQXFCLEdBQUdULEtBQUssQ0FBQ0MsSUFBTixDQUFXRCxLQUFLLENBQUNwQixNQUFJLENBQUMvQixNQUFOLENBQUwsQ0FBbUJxRCxJQUFuQixFQUFYLENBQTVCLENBZG9ELENBZXBEOztBQUVBTyx1QkFBVyxHQUFHQSxXQUFXLENBQUNqRSxHQUFaLENBQWdCLFVBQUNrRSxVQUFELEVBQXdCO0FBQ3BELHFCQUFPQSxVQUFVLEdBQUcsQ0FBcEI7QUFDRCxhQUZhLENBQWQsQ0FqQm9ELENBcUJwRDtBQUNBOztBQUNBL0Msa0NBQXNCLENBdkI4QixDQXlCcEQ7O0FBRUE4Qyx1QkFBVyxDQUFDakUsR0FBWixDQUFnQixVQUFDa0UsVUFBRCxFQUFxQkMsS0FBckIsRUFBdUM7QUFDckQ7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsa0JBQUlDLG1CQUFtQixHQUNyQnhDLDZCQUE2QixDQUFDMUIsR0FBRCxDQUE3QixHQUFxQ21CLFlBQVksR0FBRzZDLFVBRHREO0FBR0Esa0JBQUlHLGlCQUFpQixHQUNuQkwseUJBQXlCLEdBQUczQyxZQUFZLEdBQUc2QyxVQUQ3QztBQUdBekUsZUFBQyxDQUFDNkUsSUFBRjtBQUNBN0UsZUFBQyxDQUFDMEQsS0FBRixDQUFRLENBQVIsRUFBV1UsYUFBWDtBQUNBcEUsZUFBQyxDQUFDRyxJQUFGLENBQU93QyxNQUFJLENBQUNqQyxNQUFaLEVBQW9CaUUsbUJBQXBCLEVBQXlDQyxpQkFBekM7QUFDQTVFLGVBQUMsQ0FBQzhFLEdBQUY7QUFDRCxhQTFCRDtBQTJCRCxXQXRERDtBQXVERCxTQTVFRDtBQTZFRDtBQUNGLEtBOUZEOztBQWdHQTlFLEtBQUMsQ0FBQytFLGFBQUYsR0FBa0IsWUFBTTtBQUN0Qi9FLE9BQUMsQ0FBQ2dGLFlBQUYsQ0FBZXJGLENBQWYsRUFBa0JDLENBQWxCO0FBQ0QsS0FGRDtBQUdELEdBcFNxRDtBQUFBLENBQXREOztBQXNTZUYsa0ZBQWYiLCJmaWxlIjoiLi9za2V0Y2hlcy9wNS9kaGFybWEtd2F0ZXItZGlzdG9ydC5jYW52YXMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKlxuICogU2hhZGVyIGZ1blxuICogQGF1dGhvciBQZXRlciBMYXhhbHRcbiAqXG4gKi9cblxuaW1wb3J0IHA1LCB7IEZvbnQgfSBmcm9tIFwicDVcIjtcbmltcG9ydCB7IExYTFRfQ29sb3JUaGVtZSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvc3R5bGVzL0NvbG9yXCI7XG5pbXBvcnQgeyBUaHJlZVdhdGVyQ2FudmFzIH0gZnJvbSBcIi4uL3RocmVlL3RocmVlLXdhdGVyLWRpc3RvcnQuY2FudmFzXCI7XG5cbi8vIEJlZ2luIENvbXBvbmVudFxuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cblxuZXhwb3J0IHR5cGUgTFhMVF9EaGFybWFDYW52YXMgPSB7XG4gIFc6IG51bWJlcjtcbiAgSDogbnVtYmVyO1xuICBJRDogbnVtYmVyO1xuICBCRzogTFhMVF9Db2xvclRoZW1lO1xuICBwYXJlbnRFbDogSFRNTERpdkVsZW1lbnQ7XG59O1xuXG5leHBvcnQgdHlwZSBMWExUX0RoYXJtYUNhbnZhc0Rpc3BsYXkgPSAoXG4gIFc6IG51bWJlcixcbiAgSDogbnVtYmVyLFxuICBJRDogbnVtYmVyLFxuICBCRzogTFhMVF9Db2xvclRoZW1lLFxuICBwYXJlbnRFbDogSFRNTERpdkVsZW1lbnRcbikgPT4gKHA6IHA1KSA9PiB2b2lkO1xuXG50eXBlIExYTFRfRGhhcm1hQ2FudmFzQ2hhciA9IHtcbiAgbGV0dGVyOiBzdHJpbmc7XG4gIGNvdW50OiBudW1iZXI7XG4gIGlkeDogbnVtYmVyO1xuXG4gIGNvcGllczogbnVtYmVyO1xuICBjb3BpZXNMYXN0VmlzaWJsZTogbnVtYmVyO1xuICBjb3BpZXNBcmVWaXNpYmxlOiBib29sZWFuO1xuXG4gIGNvcGllc0FyZUluY3JlbWVudGluZzogYm9vbGVhbjtcbiAgY29waWVzQXJlRGVjcmVtZW50aW5nOiBib29sZWFuO1xuXG4gIGNvdW50SXNJbmNyZW1lbnRpbmc6IGJvb2xlYW47XG4gIGNvdW50SXNEZWNyZW1lbnRpbmc6IGJvb2xlYW47XG59O1xuXG5jb25zdCBEaGFybWFDYW52YXNEaXNwbGF5OiBMWExUX0RoYXJtYUNhbnZhc0Rpc3BsYXkgPSAoXG4gIFcsXG4gIEgsXG4gIElELFxuICBEaGFybWFUaGVtZSxcbiAgcGFyZW50RWxcbikgPT4gKHA6IHA1KSA9PiB7XG4gIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gQ29uZmlnXG5cbiAgbGV0IGNhbnZhcztcblxuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIEZvbnRzXG4gIGxldCBkaGFybWFGb250OiBGb250O1xuXG4gIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gVHlwb2dyYXBoeVxuICBsZXQgdGV4dCA9IFwiTUVFS09cIjtcblxuICBsZXQgc3BsaXRDaGFyYWN0ZXJBcnJheSA9IHRleHQuc3BsaXQoXCJcIik7XG4gIGxldCBjaGFyYWN0ZXJzOiBMWExUX0RoYXJtYUNhbnZhc0NoYXJbXSA9IHNwbGl0Q2hhcmFjdGVyQXJyYXkubWFwKFxuICAgIChjaGFyYWN0ZXI6IHN0cmluZywgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxldHRlcjogY2hhcmFjdGVyLFxuICAgICAgICBjb3VudDogMSxcbiAgICAgICAgaWR4OiBpZHgsXG5cbiAgICAgICAgY29waWVzOiA1LFxuICAgICAgICBjb3BpZXNMYXN0VmlzaWJsZTogMCxcbiAgICAgICAgY29waWVzQXJlVmlzaWJsZTogZmFsc2UsXG5cbiAgICAgICAgY291bnRJc0luY3JlbWVudGluZzogdHJ1ZSxcbiAgICAgICAgY291bnRJc0RlY3JlbWVudGluZzogZmFsc2UsXG5cbiAgICAgICAgY29waWVzQXJlSW5jcmVtZW50aW5nOiB0cnVlLFxuICAgICAgICBjb3BpZXNBcmVEZWNyZW1lbnRpbmc6IGZhbHNlLFxuICAgICAgfTtcbiAgICB9XG4gICk7XG5cbiAgbGV0IGNoYXJhY3RlckNvdW50OiBudW1iZXIgPSBzcGxpdENoYXJhY3RlckFycmF5Lmxlbmd0aDtcbiAgbGV0IGNoYXJhY3RlcldpZHRoOiBudW1iZXIgPSBXIC8gY2hhcmFjdGVyQ291bnQ7XG4gIGxldCBjaGFyYWN0ZXJTaXplOiBudW1iZXIgPSBIICogMS4yNTtcblxuICBjb25zb2xlLmxvZyhjaGFyYWN0ZXJTaXplLCBcImNoYXJhY3RlclNpemVcIik7XG5cbiAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAvLyBDb3VudHNcbiAgLy8gbGV0IHJlbmRlckNvdW50OiBudW1iZXIgPSAwO1xuICBsZXQgcHJldmlvdXNDb3VudFVwZGF0ZVRpbWU6IG51bWJlciA9IDA7XG4gIGxldCBwcmV2aW91c0NvcHlVcGRhdGVUaW1lOiBudW1iZXIgPSAwO1xuXG4gIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gU3Ryb2tlc1xuICBsZXQgc3Ryb2tlV2lkdGg6IG51bWJlciA9IDQ7XG4gIGxldCBzdHJva2VPZmZzZXQ6IG51bWJlciA9IHN0cm9rZVdpZHRoICogMS41O1xuXG4gIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gTGltaXRzXG4gIGxldCBtYXhDb3VudCA9IDM7XG4gIGxldCBtaW5Db3VudCA9IDE7XG5cbiAgbGV0IG1heENvcGllcyA9IDEyO1xuICBsZXQgbWluQ29waWVzID0gMTtcblxuICBsZXQgZnJhbWVSYXRlID0gMTA7XG5cbiAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAvLyBUcmFuc2xhdGlvblxuICAvLyBsZXQgcHJldmlvdXNWZXJ0aWNhbFRyYW5zbGF0aW9uOiBudW1iZXIgPSBIIC8gMi4yNTtcblxuICBsZXQgdmVydGljYWxUcmFuc2xhdGlvbldoaXRlc3BhY2VDb21wZW5zYXRpb246IG51bWJlciA9IDIuMjU7XG4gIGNvbnN0IHByZXZpb3VzSG9yaXpvbnRhbFRyYW5zbGF0aW9uID0gKGlkeDogbnVtYmVyKSA9PlxuICAgIC02MCArIChjaGFyYWN0ZXJXaWR0aCAqIGlkeCArIGNoYXJhY3RlcldpZHRoIC8gMS41ICsgc3Ryb2tlT2Zmc2V0KTtcblxuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIFByZWxvYWRcbiAgcC5wcmVsb2FkID0gKCkgPT4ge1xuICAgIGRoYXJtYUZvbnQgPSBwLmxvYWRGb250KGAvZm9udHMvZGhhcm1hL2RoYXJtYV9yZWd1bGFyLnR0ZmApO1xuICB9O1xuXG4gIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gU2V0dXBcbiAgcC5zZXR1cCA9ICgpID0+IHtcbiAgICAvLyBPdXIgQ2FudmFzXG4gICAgY2FudmFzID0gcC5jcmVhdGVDYW52YXMoVywgSCk7XG5cbiAgICBUaHJlZVdhdGVyQ2FudmFzKHBhcmVudEVsLCBjYW52YXMuZWx0LCBEaGFybWFUaGVtZSk7XG5cbiAgICBwLmZyYW1lUmF0ZShmcmFtZVJhdGUpO1xuICB9O1xuXG4gIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gVXBkYXRlIENoYXJhY3RlclxuICBjb25zdCB1cGRhdGVDaGFyYWN0ZXIgPSAoY2hhcjogTFhMVF9EaGFybWFDYW52YXNDaGFyLCBpZHg6IG51bWJlcikgPT4ge1xuICAgIGlmIChjaGFyLmNvdW50IDwgbWF4Q291bnQgJiYgY2hhci5jb3VudElzSW5jcmVtZW50aW5nKSB7XG4gICAgICBjaGFyYWN0ZXJzW2lkeF0gPSB7XG4gICAgICAgIC4uLmNoYXIsXG4gICAgICAgIGNvdW50OiBjaGFyLmNvdW50ICsgMSxcbiAgICAgIH07XG5cbiAgICAgIHByZXZpb3VzQ291bnRVcGRhdGVUaW1lID0gcC5taWxsaXMoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoY2hhci5jb3VudCA9PT0gbWF4Q291bnQpIHtcbiAgICAgIGNoYXJhY3RlcnNbaWR4XSA9IHtcbiAgICAgICAgLi4uY2hhcixcbiAgICAgICAgY291bnQ6IGNoYXIuY291bnQgLSAxLFxuICAgICAgICBjb3VudElzSW5jcmVtZW50aW5nOiBmYWxzZSxcbiAgICAgICAgY291bnRJc0RlY3JlbWVudGluZzogdHJ1ZSxcbiAgICAgIH07XG5cbiAgICAgIHByZXZpb3VzQ291bnRVcGRhdGVUaW1lID0gcC5taWxsaXMoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoY2hhci5jb3VudCA+IG1pbkNvdW50ICYmIGNoYXIuY291bnRJc0RlY3JlbWVudGluZykge1xuICAgICAgY2hhcmFjdGVyc1tpZHhdID0ge1xuICAgICAgICAuLi5jaGFyLFxuICAgICAgICBjb3VudDogY2hhci5jb3VudCAtIDEsXG4gICAgICAgIGNvdW50SXNEZWNyZW1lbnRpbmc6IHRydWUsXG4gICAgICB9O1xuXG4gICAgICBwcmV2aW91c0NvdW50VXBkYXRlVGltZSA9IHAubWlsbGlzKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGNoYXIuY291bnQgPT09IG1pbkNvdW50ICYmIGNoYXIuY291bnRJc0RlY3JlbWVudGluZykge1xuICAgICAgY2hhcmFjdGVyc1tpZHhdID0ge1xuICAgICAgICAuLi5jaGFyLFxuICAgICAgICBjb3VudDogY2hhci5jb3VudCArIDEsXG4gICAgICAgIGNvdW50SXNJbmNyZW1lbnRpbmc6IHRydWUsXG4gICAgICAgIGNvdW50SXNEZWNyZW1lbnRpbmc6IGZhbHNlLFxuICAgICAgfTtcblxuICAgICAgcHJldmlvdXNDb3VudFVwZGF0ZVRpbWUgPSBwLm1pbGxpcygpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9O1xuXG4gIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gVXBkYXRlIENvcGllc1xuICBjb25zdCB1cGRhdGVDb3BpZXMgPSAoY2hhcjogTFhMVF9EaGFybWFDYW52YXNDaGFyLCBpZHg6IG51bWJlcikgPT4ge1xuICAgIGlmIChjaGFyLmNvcGllcyA8IG1heENvcGllcyAmJiBjaGFyLmNvcGllc0FyZUluY3JlbWVudGluZykge1xuICAgICAgY2hhcmFjdGVyc1tpZHhdID0ge1xuICAgICAgICAuLi5jaGFyLFxuICAgICAgICBjb3BpZXM6IGNoYXIuY29waWVzICsgMSxcbiAgICAgIH07XG5cbiAgICAgIHByZXZpb3VzQ29weVVwZGF0ZVRpbWUgPSBwLm1pbGxpcygpO1xuXG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChjaGFyLmNvcGllcyA9PT0gbWF4Q29waWVzKSB7XG4gICAgICBjaGFyYWN0ZXJzW2lkeF0gPSB7XG4gICAgICAgIC4uLmNoYXIsXG4gICAgICAgIGNvcGllczogY2hhci5jb3BpZXMgLSAxLFxuICAgICAgICBjb3BpZXNBcmVJbmNyZW1lbnRpbmc6IGZhbHNlLFxuICAgICAgICBjb3BpZXNBcmVEZWNyZW1lbnRpbmc6IHRydWUsXG4gICAgICB9O1xuXG4gICAgICBwcmV2aW91c0NvcHlVcGRhdGVUaW1lID0gcC5taWxsaXMoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoY2hhci5jb3BpZXMgPiBtaW5Db3BpZXMgJiYgY2hhci5jb3BpZXNBcmVEZWNyZW1lbnRpbmcpIHtcbiAgICAgIGNoYXJhY3RlcnNbaWR4XSA9IHtcbiAgICAgICAgLi4uY2hhcixcbiAgICAgICAgY29waWVzOiBjaGFyLmNvcGllcyAtIDEsXG4gICAgICAgIGNvcGllc0FyZURlY3JlbWVudGluZzogdHJ1ZSxcbiAgICAgIH07XG5cbiAgICAgIHByZXZpb3VzQ29weVVwZGF0ZVRpbWUgPSBwLm1pbGxpcygpO1xuXG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChjaGFyLmNvcGllcyA9PT0gbWluQ29waWVzICYmIGNoYXIuY29waWVzQXJlRGVjcmVtZW50aW5nKSB7XG4gICAgICBjaGFyYWN0ZXJzW2lkeF0gPSB7XG4gICAgICAgIC4uLmNoYXIsXG4gICAgICAgIGNvcGllczogY2hhci5jb3BpZXMgKyAxLFxuICAgICAgICBjb3BpZXNBcmVJbmNyZW1lbnRpbmc6IHRydWUsXG4gICAgICAgIGNvcGllc0FyZURlY3JlbWVudGluZzogZmFsc2UsXG4gICAgICB9O1xuXG4gICAgICBwcmV2aW91c0NvcHlVcGRhdGVUaW1lID0gcC5taWxsaXMoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfTtcblxuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIERyYXdcbiAgcC5kcmF3ID0gKCkgPT4ge1xuICAgIHAuYmFja2dyb3VuZCh3aW5kb3cubGF4YWx0VW5pdmVyc2FsVGhlbWUuYmFja2dyb3VuZCk7XG5cbiAgICBwLnRleHRGb250KGRoYXJtYUZvbnQpO1xuXG4gICAgcC50ZXh0U2l6ZShjaGFyYWN0ZXJTaXplKTtcblxuICAgIHAudGV4dEFsaWduKHAuQ0VOVEVSLCBwLkNFTlRFUik7XG5cbiAgICBwLmZpbGwoYCR7d2luZG93LmxheGFsdFVuaXZlcnNhbFRoZW1lLmZvcmVncm91bmR9YCk7XG4gICAgcC5zdHJva2VXZWlnaHQoc3Ryb2tlV2lkdGgpO1xuICAgIHAuc3Ryb2tlKHdpbmRvdy5sYXhhbHRVbml2ZXJzYWxUaGVtZS5iYWNrZ3JvdW5kKTtcblxuICAgIGlmIChIICYmIFcpIHtcbiAgICAgIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gICAgICAvLyBMb29wIHRocm91Z2ggb3VyIGNvcGllc1xuICAgICAgY2hhcmFjdGVycy5tYXAoKGNoYXI6IExYTFRfRGhhcm1hQ2FudmFzQ2hhciwgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgICAgcC5zY2FsZSgxLCAxKTtcblxuICAgICAgICBsZXQgcmFuZG9tQ2hhclBpY2sgPSBNYXRoLnJhbmRvbSgpIDw9IDAuNTtcblxuICAgICAgICBpZiAocmFuZG9tQ2hhclBpY2spIHtcbiAgICAgICAgICB1cGRhdGVDb3BpZXMoY2hhciwgaWR4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyYW5kb21DaGFyUGljayAmJiBwLm1pbGxpcygpIC0gcHJldmlvdXNDb3VudFVwZGF0ZVRpbWUgPiAzMDAwKSB7XG4gICAgICAgICAgdXBkYXRlQ2hhcmFjdGVyKGNoYXIsIGlkeCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY291bnRBcnJheTogbnVtYmVyW10gPSBBcnJheS5mcm9tKEFycmF5KGNoYXIuY291bnQpLmtleXMoKSk7XG5cbiAgICAgICAgY291bnRBcnJheSA9IGNvdW50QXJyYXkubWFwKChjb3VudE51bWJlcjogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGNvdW50TnVtYmVyICsgMTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgICAgICAgLy8gRHVwbGljYXRlIHBvc2l0aW9uc1xuICAgICAgICBjb3VudEFycmF5Lm1hcCgoY291bnROdW1iZXI6IG51bWJlciwgaWR4eDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgbGV0IHZlcnRpY2FsU2NhbGUgPSAxIC8gKGNoYXIuY291bnQgKiAwLjk1KTtcblxuICAgICAgICAgIGxldCB2ZXJ0aWNhbFNrZXdEaXZpc2libGU6IG51bWJlciA9IDIuNzU7XG4gICAgICAgICAgbGV0IGNoYXJhY3RlclNrZXdEaXZpc2libGU6IG51bWJlciA9IDEuMzY7XG5cbiAgICAgICAgICBsZXQgZHVwbGljYXRlVmVydGljYWxQb3NpdGlvbjogbnVtYmVyID1cbiAgICAgICAgICAgIGNoYXIuY291bnQgPT0gMVxuICAgICAgICAgICAgICA/IEggLyB2ZXJ0aWNhbFRyYW5zbGF0aW9uV2hpdGVzcGFjZUNvbXBlbnNhdGlvblxuICAgICAgICAgICAgICA6IGNoYXJhY3RlclNpemUgLyB2ZXJ0aWNhbFNrZXdEaXZpc2libGUgK1xuICAgICAgICAgICAgICAgIChjaGFyYWN0ZXJTaXplIC8gY2hhcmFjdGVyU2tld0RpdmlzaWJsZSkgKiBpZHh4O1xuXG4gICAgICAgICAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgICAgICAgICAvLyBNYWtlIGNvcGllc1xuICAgICAgICAgIGxldCBjb3BpZXNBcnJheTogbnVtYmVyW10gPSBBcnJheS5mcm9tKEFycmF5KGNoYXIuY29waWVzKS5rZXlzKCkpO1xuICAgICAgICAgIC8vIGxldCByYW5kb21Db3B5UGljayA9IE1hdGgucmFuZG9tKCkgPD0gMC41O1xuXG4gICAgICAgICAgY29waWVzQXJyYXkgPSBjb3BpZXNBcnJheS5tYXAoKGNvcHlOdW1iZXI6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNvcHlOdW1iZXIgKyAxO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gbGV0IHJhbmRvbUNvcHlQaWNrID0gTWF0aC5yYW5kb20oKSA8PSAwLjU7XG4gICAgICAgICAgLy8gbGV0IGNvcHlUaW1lciA9IHAubWlsbGlzKCkgLSBwcmV2aW91c0NvcGllc1Zpc2libGVUaW1lID4gMjAwMDtcbiAgICAgICAgICBwcmV2aW91c0NvcHlVcGRhdGVUaW1lO1xuXG4gICAgICAgICAgLy8gbGV0IGlzRmlyc3RDb3VudCA9IHRydWU7XG5cbiAgICAgICAgICBjb3BpZXNBcnJheS5tYXAoKGNvcHlOdW1iZXI6IG51bWJlciwgaWR4eHg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgLy8gbGV0IGNlbnRlckNvb3Jkc1ggPSBXIC8gMjtcbiAgICAgICAgICAgIC8vIGxldCBjZW50ZXJDb29yZHNZID0gSCAvIDI7XG5cbiAgICAgICAgICAgIC8vIGxldCBob3Jpem9udGFsVHJhbnNsYXRlID1cbiAgICAgICAgICAgIC8vICAgY29weU51bWJlciAhPT0gMVxuICAgICAgICAgICAgLy8gICAgID8gKHByZXZpb3VzSG9yaXpvbnRhbFRyYW5zbGF0aW9uKGlkeCkgK1xuICAgICAgICAgICAgLy8gICAgICAgICAoc3Ryb2tlT2Zmc2V0IC8gKHAubW91c2VYIC8gMTAwKSkgKiBjb3B5TnVtYmVyKVxuICAgICAgICAgICAgLy8gICAgIDogcHJldmlvdXNIb3Jpem9udGFsVHJhbnNsYXRpb24oaWR4KSArXG4gICAgICAgICAgICAvLyAgICAgICBzdHJva2VPZmZzZXQgKiBjb3B5TnVtYmVyO1xuXG4gICAgICAgICAgICAvLyBsZXQgdmVydGljYWxUcmFuc2xhdGUgPVxuICAgICAgICAgICAgLy8gICBjb3B5TnVtYmVyICE9PSAxXG4gICAgICAgICAgICAvLyAgICAgPyAoZHVwbGljYXRlVmVydGljYWxQb3NpdGlvbiAtIChzdHJva2VPZmZzZXQgLyAocC5tb3VzZVggLyAxMDApKSAqIGNvcHlOdW1iZXIpXG4gICAgICAgICAgICAvLyAgICAgOiBkdXBsaWNhdGVWZXJ0aWNhbFBvc2l0aW9uIC0gc3Ryb2tlT2Zmc2V0ICogY29weU51bWJlcjtcblxuICAgICAgICAgICAgbGV0IGhvcml6b250YWxUcmFuc2xhdGUgPVxuICAgICAgICAgICAgICBwcmV2aW91c0hvcml6b250YWxUcmFuc2xhdGlvbihpZHgpICsgc3Ryb2tlT2Zmc2V0ICogY29weU51bWJlcjtcblxuICAgICAgICAgICAgbGV0IHZlcnRpY2FsVHJhbnNsYXRlID1cbiAgICAgICAgICAgICAgZHVwbGljYXRlVmVydGljYWxQb3NpdGlvbiAtIHN0cm9rZU9mZnNldCAqIGNvcHlOdW1iZXI7XG5cbiAgICAgICAgICAgIHAucHVzaCgpO1xuICAgICAgICAgICAgcC5zY2FsZSgxLCB2ZXJ0aWNhbFNjYWxlKTtcbiAgICAgICAgICAgIHAudGV4dChjaGFyLmxldHRlciwgaG9yaXpvbnRhbFRyYW5zbGF0ZSwgdmVydGljYWxUcmFuc2xhdGUpO1xuICAgICAgICAgICAgcC5wb3AoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcC53aW5kb3dSZXNpemVkID0gKCkgPT4ge1xuICAgIHAucmVzaXplQ2FudmFzKFcsIEgpO1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGhhcm1hQ2FudmFzRGlzcGxheTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sketches/p5/dharma-water-distort.canvas.tsx\n");

/***/ })

})