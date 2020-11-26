webpackHotUpdate_N_E("pages/projects/water-distort-with-canvas",{

/***/ "./sketches/p5/dharma-water-distort.canvas.tsx":
/*!*****************************************************!*\
  !*** ./sketches/p5/dharma-water-distort.canvas.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _three_three_water_distort_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../three/three-water-distort.canvas */ \"./sketches/three/three-water-distort.canvas.ts\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/**\n *\n * Shader fun\n * @author Peter Laxalt\n *\n */\n // Begin Component\n// __________________________________________________________________________\n\nvar DharmaCanvasDisplay = function DharmaCanvasDisplay(W, H, ID, // DharmaTheme,\nparentEl) {\n  return function (p) {\n    // _________________________________________________\n    // Config\n    var canvas; // ____________________________\n    // Fonts\n\n    var dharmaFont; // ____________________________\n    // Typography\n\n    var text = \"LAXALT\";\n    var splitCharacterArray = text.split(\"\");\n    var characters = splitCharacterArray.map(function (character, idx) {\n      return {\n        letter: character,\n        count: 1,\n        idx: idx,\n        copies: 5,\n        copiesLastVisible: 0,\n        copiesAreVisible: false,\n        countIsIncrementing: true,\n        countIsDecrementing: false,\n        copiesAreIncrementing: true,\n        copiesAreDecrementing: false\n      };\n    });\n    var characterCount = splitCharacterArray.length;\n    var characterWidth = W / characterCount;\n    var characterSize = H * 1.25;\n    console.log(characterSize, \"characterSize\"); // ____________________________\n    // Counts\n    // let renderCount: number = 0;\n\n    var previousCountUpdateTime = 0;\n    var previousCopyUpdateTime = 0; // ____________________________\n    // Strokes\n\n    var strokeWidth = 4;\n    var strokeOffset = strokeWidth * 1.5; // ____________________________\n    // Limits\n\n    var maxCount = 3;\n    var minCount = 1;\n    var maxCopies = 12;\n    var minCopies = 1;\n    var frameRate = 10; // ____________________________\n    // Translation\n    // let previousVerticalTranslation: number = H / 2.25;\n\n    var verticalTranslationWhitespaceCompensation = 2.25;\n\n    var previousHorizontalTranslation = function previousHorizontalTranslation(idx) {\n      return -60 + (characterWidth * idx + characterWidth / 1.5 + strokeOffset);\n    }; // _________________________________________________\n    // Preload\n\n\n    p.preload = function () {\n      dharmaFont = p.loadFont(\"/fonts/dharma/dharma_regular.ttf\");\n    }; // _________________________________________________\n    // Setup\n\n\n    p.setup = function () {\n      // Our Canvas\n      canvas = p.createCanvas(W, H);\n      Object(_three_three_water_distort_canvas__WEBPACK_IMPORTED_MODULE_1__[\"ThreeWaterCanvas\"])(parentEl, canvas.elt, window.laxaltUniversalTheme);\n      p.frameRate(frameRate);\n    }; // _________________________________________________\n    // Update Character\n\n\n    var updateCharacter = function updateCharacter(_char, idx) {\n      if (_char.count < maxCount && _char.countIsIncrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char), {}, {\n          count: _char.count + 1\n        });\n        previousCountUpdateTime = p.millis();\n        return;\n      } else if (_char.count === maxCount) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char), {}, {\n          count: _char.count - 1,\n          countIsIncrementing: false,\n          countIsDecrementing: true\n        });\n        previousCountUpdateTime = p.millis();\n        return;\n      } else if (_char.count > minCount && _char.countIsDecrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char), {}, {\n          count: _char.count - 1,\n          countIsDecrementing: true\n        });\n        previousCountUpdateTime = p.millis();\n        return;\n      } else if (_char.count === minCount && _char.countIsDecrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char), {}, {\n          count: _char.count + 1,\n          countIsIncrementing: true,\n          countIsDecrementing: false\n        });\n        previousCountUpdateTime = p.millis();\n        return;\n      }\n\n      return;\n    }; // _________________________________________________\n    // Update Copies\n\n\n    var updateCopies = function updateCopies(_char2, idx) {\n      if (_char2.copies < maxCopies && _char2.copiesAreIncrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char2), {}, {\n          copies: _char2.copies + 1\n        });\n        previousCopyUpdateTime = p.millis();\n        return;\n      } else if (_char2.copies === maxCopies) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char2), {}, {\n          copies: _char2.copies - 1,\n          copiesAreIncrementing: false,\n          copiesAreDecrementing: true\n        });\n        previousCopyUpdateTime = p.millis();\n        return;\n      } else if (_char2.copies > minCopies && _char2.copiesAreDecrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char2), {}, {\n          copies: _char2.copies - 1,\n          copiesAreDecrementing: true\n        });\n        previousCopyUpdateTime = p.millis();\n        return;\n      } else if (_char2.copies === minCopies && _char2.copiesAreDecrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char2), {}, {\n          copies: _char2.copies + 1,\n          copiesAreIncrementing: true,\n          copiesAreDecrementing: false\n        });\n        previousCopyUpdateTime = p.millis();\n        return;\n      }\n\n      return;\n    }; // _________________________________________________\n    // Draw\n\n\n    p.draw = function () {\n      p.background(window.laxaltUniversalTheme.background);\n      p.textFont(dharmaFont);\n      p.textSize(characterSize);\n      p.textAlign(p.CENTER, p.CENTER);\n      p.fill(\"\".concat(window.laxaltUniversalTheme.foreground));\n      p.strokeWeight(strokeWidth);\n      p.stroke(window.laxaltUniversalTheme.background);\n\n      if (H && W) {\n        // _________________________________________\n        // Loop through our copies\n        characters.map(function (_char3, idx) {\n          p.scale(1, 1);\n          var randomCharPick = Math.random() <= 0.5;\n\n          if (randomCharPick) {\n            updateCopies(_char3, idx);\n          }\n\n          if (randomCharPick && p.millis() - previousCountUpdateTime > 3000) {\n            updateCharacter(_char3, idx);\n          }\n\n          var countArray = Array.from(Array(_char3.count).keys());\n          countArray = countArray.map(function (countNumber) {\n            return countNumber + 1;\n          }); // _________________________________________\n          // Duplicate positions\n\n          countArray.map(function (countNumber, idxx) {\n            var verticalScale = 1 / (_char3.count * 0.95);\n            var verticalSkewDivisible = 2.75;\n            var characterSkewDivisible = 1.36;\n            var duplicateVerticalPosition = _char3.count == 1 ? H / verticalTranslationWhitespaceCompensation : characterSize / verticalSkewDivisible + characterSize / characterSkewDivisible * idxx; // _________________________________________\n            // Make copies\n\n            var copiesArray = Array.from(Array(_char3.copies).keys()); // let randomCopyPick = Math.random() <= 0.5;\n\n            copiesArray = copiesArray.map(function (copyNumber) {\n              return copyNumber + 1;\n            }); // let randomCopyPick = Math.random() <= 0.5;\n            // let copyTimer = p.millis() - previousCopiesVisibleTime > 2000;\n\n            previousCopyUpdateTime; // let isFirstCount = true;\n\n            copiesArray.map(function (copyNumber, idxxx) {\n              // let centerCoordsX = W / 2;\n              // let centerCoordsY = H / 2;\n              // let horizontalTranslate =\n              //   copyNumber !== 1\n              //     ? (previousHorizontalTranslation(idx) +\n              //         (strokeOffset / (p.mouseX / 100)) * copyNumber)\n              //     : previousHorizontalTranslation(idx) +\n              //       strokeOffset * copyNumber;\n              // let verticalTranslate =\n              //   copyNumber !== 1\n              //     ? (duplicateVerticalPosition - (strokeOffset / (p.mouseX / 100)) * copyNumber)\n              //     : duplicateVerticalPosition - strokeOffset * copyNumber;\n              var horizontalTranslate = previousHorizontalTranslation(idx) + strokeOffset * copyNumber;\n              var verticalTranslate = duplicateVerticalPosition - strokeOffset * copyNumber;\n              p.push();\n              p.scale(1, verticalScale);\n              p.text(_char3.letter, horizontalTranslate, verticalTranslate);\n              p.pop();\n            });\n          });\n        });\n      }\n    };\n\n    p.windowResized = function () {\n      p.resizeCanvas(W, H);\n    };\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DharmaCanvasDisplay);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2tldGNoZXMvcDUvZGhhcm1hLXdhdGVyLWRpc3RvcnQuY2FudmFzLnRzeD9kNGEwIl0sIm5hbWVzIjpbIkRoYXJtYUNhbnZhc0Rpc3BsYXkiLCJXIiwiSCIsIklEIiwicGFyZW50RWwiLCJwIiwiY2FudmFzIiwiZGhhcm1hRm9udCIsInRleHQiLCJzcGxpdENoYXJhY3RlckFycmF5Iiwic3BsaXQiLCJjaGFyYWN0ZXJzIiwibWFwIiwiY2hhcmFjdGVyIiwiaWR4IiwibGV0dGVyIiwiY291bnQiLCJjb3BpZXMiLCJjb3BpZXNMYXN0VmlzaWJsZSIsImNvcGllc0FyZVZpc2libGUiLCJjb3VudElzSW5jcmVtZW50aW5nIiwiY291bnRJc0RlY3JlbWVudGluZyIsImNvcGllc0FyZUluY3JlbWVudGluZyIsImNvcGllc0FyZURlY3JlbWVudGluZyIsImNoYXJhY3RlckNvdW50IiwibGVuZ3RoIiwiY2hhcmFjdGVyV2lkdGgiLCJjaGFyYWN0ZXJTaXplIiwiY29uc29sZSIsImxvZyIsInByZXZpb3VzQ291bnRVcGRhdGVUaW1lIiwicHJldmlvdXNDb3B5VXBkYXRlVGltZSIsInN0cm9rZVdpZHRoIiwic3Ryb2tlT2Zmc2V0IiwibWF4Q291bnQiLCJtaW5Db3VudCIsIm1heENvcGllcyIsIm1pbkNvcGllcyIsImZyYW1lUmF0ZSIsInZlcnRpY2FsVHJhbnNsYXRpb25XaGl0ZXNwYWNlQ29tcGVuc2F0aW9uIiwicHJldmlvdXNIb3Jpem9udGFsVHJhbnNsYXRpb24iLCJwcmVsb2FkIiwibG9hZEZvbnQiLCJzZXR1cCIsImNyZWF0ZUNhbnZhcyIsIlRocmVlV2F0ZXJDYW52YXMiLCJlbHQiLCJ3aW5kb3ciLCJsYXhhbHRVbml2ZXJzYWxUaGVtZSIsInVwZGF0ZUNoYXJhY3RlciIsImNoYXIiLCJtaWxsaXMiLCJ1cGRhdGVDb3BpZXMiLCJkcmF3IiwiYmFja2dyb3VuZCIsInRleHRGb250IiwidGV4dFNpemUiLCJ0ZXh0QWxpZ24iLCJDRU5URVIiLCJmaWxsIiwiZm9yZWdyb3VuZCIsInN0cm9rZVdlaWdodCIsInN0cm9rZSIsInNjYWxlIiwicmFuZG9tQ2hhclBpY2siLCJNYXRoIiwicmFuZG9tIiwiY291bnRBcnJheSIsIkFycmF5IiwiZnJvbSIsImtleXMiLCJjb3VudE51bWJlciIsImlkeHgiLCJ2ZXJ0aWNhbFNjYWxlIiwidmVydGljYWxTa2V3RGl2aXNpYmxlIiwiY2hhcmFjdGVyU2tld0RpdmlzaWJsZSIsImR1cGxpY2F0ZVZlcnRpY2FsUG9zaXRpb24iLCJjb3BpZXNBcnJheSIsImNvcHlOdW1iZXIiLCJpZHh4eCIsImhvcml6b250YWxUcmFuc2xhdGUiLCJ2ZXJ0aWNhbFRyYW5zbGF0ZSIsInB1c2giLCJwb3AiLCJ3aW5kb3dSZXNpemVkIiwicmVzaXplQ2FudmFzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FNQTtBQUNBOztBQWtDQSxJQUFNQSxtQkFBNkMsR0FBRyxTQUFoREEsbUJBQWdELENBQ3BEQyxDQURvRCxFQUVwREMsQ0FGb0QsRUFHcERDLEVBSG9ELEVBSXBEO0FBQ0FDLFFBTG9EO0FBQUEsU0FNakQsVUFBQ0MsQ0FBRCxFQUFXO0FBQ2Q7QUFDQTtBQUVBLFFBQUlDLE1BQUosQ0FKYyxDQU1kO0FBQ0E7O0FBQ0EsUUFBSUMsVUFBSixDQVJjLENBVWQ7QUFDQTs7QUFDQSxRQUFJQyxJQUFJLEdBQUcsUUFBWDtBQUVBLFFBQUlDLG1CQUFtQixHQUFHRCxJQUFJLENBQUNFLEtBQUwsQ0FBVyxFQUFYLENBQTFCO0FBQ0EsUUFBSUMsVUFBbUMsR0FBR0YsbUJBQW1CLENBQUNHLEdBQXBCLENBQ3hDLFVBQUNDLFNBQUQsRUFBb0JDLEdBQXBCLEVBQW9DO0FBQ2xDLGFBQU87QUFDTEMsY0FBTSxFQUFFRixTQURIO0FBRUxHLGFBQUssRUFBRSxDQUZGO0FBR0xGLFdBQUcsRUFBRUEsR0FIQTtBQUtMRyxjQUFNLEVBQUUsQ0FMSDtBQU1MQyx5QkFBaUIsRUFBRSxDQU5kO0FBT0xDLHdCQUFnQixFQUFFLEtBUGI7QUFTTEMsMkJBQW1CLEVBQUUsSUFUaEI7QUFVTEMsMkJBQW1CLEVBQUUsS0FWaEI7QUFZTEMsNkJBQXFCLEVBQUUsSUFabEI7QUFhTEMsNkJBQXFCLEVBQUU7QUFibEIsT0FBUDtBQWVELEtBakJ1QyxDQUExQztBQW9CQSxRQUFJQyxjQUFzQixHQUFHZixtQkFBbUIsQ0FBQ2dCLE1BQWpEO0FBQ0EsUUFBSUMsY0FBc0IsR0FBR3pCLENBQUMsR0FBR3VCLGNBQWpDO0FBQ0EsUUFBSUcsYUFBcUIsR0FBR3pCLENBQUMsR0FBRyxJQUFoQztBQUVBMEIsV0FBTyxDQUFDQyxHQUFSLENBQVlGLGFBQVosRUFBMkIsZUFBM0IsRUF2Q2MsQ0F5Q2Q7QUFDQTtBQUNBOztBQUNBLFFBQUlHLHVCQUErQixHQUFHLENBQXRDO0FBQ0EsUUFBSUMsc0JBQThCLEdBQUcsQ0FBckMsQ0E3Q2MsQ0ErQ2Q7QUFDQTs7QUFDQSxRQUFJQyxXQUFtQixHQUFHLENBQTFCO0FBQ0EsUUFBSUMsWUFBb0IsR0FBR0QsV0FBVyxHQUFHLEdBQXpDLENBbERjLENBb0RkO0FBQ0E7O0FBQ0EsUUFBSUUsUUFBUSxHQUFHLENBQWY7QUFDQSxRQUFJQyxRQUFRLEdBQUcsQ0FBZjtBQUVBLFFBQUlDLFNBQVMsR0FBRyxFQUFoQjtBQUNBLFFBQUlDLFNBQVMsR0FBRyxDQUFoQjtBQUVBLFFBQUlDLFNBQVMsR0FBRyxFQUFoQixDQTVEYyxDQThEZDtBQUNBO0FBQ0E7O0FBRUEsUUFBSUMseUNBQWlELEdBQUcsSUFBeEQ7O0FBQ0EsUUFBTUMsNkJBQTZCLEdBQUcsU0FBaENBLDZCQUFnQyxDQUFDMUIsR0FBRDtBQUFBLGFBQ3BDLENBQUMsRUFBRCxJQUFPWSxjQUFjLEdBQUdaLEdBQWpCLEdBQXVCWSxjQUFjLEdBQUcsR0FBeEMsR0FBOENPLFlBQXJELENBRG9DO0FBQUEsS0FBdEMsQ0FuRWMsQ0FzRWQ7QUFDQTs7O0FBQ0E1QixLQUFDLENBQUNvQyxPQUFGLEdBQVksWUFBTTtBQUNoQmxDLGdCQUFVLEdBQUdGLENBQUMsQ0FBQ3FDLFFBQUYsb0NBQWI7QUFDRCxLQUZELENBeEVjLENBNEVkO0FBQ0E7OztBQUNBckMsS0FBQyxDQUFDc0MsS0FBRixHQUFVLFlBQU07QUFDZDtBQUNBckMsWUFBTSxHQUFHRCxDQUFDLENBQUN1QyxZQUFGLENBQWUzQyxDQUFmLEVBQWtCQyxDQUFsQixDQUFUO0FBRUEyQyxnR0FBZ0IsQ0FBQ3pDLFFBQUQsRUFBV0UsTUFBTSxDQUFDd0MsR0FBbEIsRUFBdUJDLE1BQU0sQ0FBQ0Msb0JBQTlCLENBQWhCO0FBRUEzQyxPQUFDLENBQUNpQyxTQUFGLENBQVlBLFNBQVo7QUFDRCxLQVBELENBOUVjLENBdUZkO0FBQ0E7OztBQUNBLFFBQU1XLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUE4QnBDLEdBQTlCLEVBQThDO0FBQ3BFLFVBQUlvQyxLQUFJLENBQUNsQyxLQUFMLEdBQWFrQixRQUFiLElBQXlCZ0IsS0FBSSxDQUFDOUIsbUJBQWxDLEVBQXVEO0FBQ3JEVCxrQkFBVSxDQUFDRyxHQUFELENBQVYsbUNBQ0tvQyxLQURMO0FBRUVsQyxlQUFLLEVBQUVrQyxLQUFJLENBQUNsQyxLQUFMLEdBQWE7QUFGdEI7QUFLQWMsK0JBQXVCLEdBQUd6QixDQUFDLENBQUM4QyxNQUFGLEVBQTFCO0FBRUE7QUFDRCxPQVRELE1BU08sSUFBSUQsS0FBSSxDQUFDbEMsS0FBTCxLQUFla0IsUUFBbkIsRUFBNkI7QUFDbEN2QixrQkFBVSxDQUFDRyxHQUFELENBQVYsbUNBQ0tvQyxLQURMO0FBRUVsQyxlQUFLLEVBQUVrQyxLQUFJLENBQUNsQyxLQUFMLEdBQWEsQ0FGdEI7QUFHRUksNkJBQW1CLEVBQUUsS0FIdkI7QUFJRUMsNkJBQW1CLEVBQUU7QUFKdkI7QUFPQVMsK0JBQXVCLEdBQUd6QixDQUFDLENBQUM4QyxNQUFGLEVBQTFCO0FBRUE7QUFDRCxPQVhNLE1BV0EsSUFBSUQsS0FBSSxDQUFDbEMsS0FBTCxHQUFhbUIsUUFBYixJQUF5QmUsS0FBSSxDQUFDN0IsbUJBQWxDLEVBQXVEO0FBQzVEVixrQkFBVSxDQUFDRyxHQUFELENBQVYsbUNBQ0tvQyxLQURMO0FBRUVsQyxlQUFLLEVBQUVrQyxLQUFJLENBQUNsQyxLQUFMLEdBQWEsQ0FGdEI7QUFHRUssNkJBQW1CLEVBQUU7QUFIdkI7QUFNQVMsK0JBQXVCLEdBQUd6QixDQUFDLENBQUM4QyxNQUFGLEVBQTFCO0FBRUE7QUFDRCxPQVZNLE1BVUEsSUFBSUQsS0FBSSxDQUFDbEMsS0FBTCxLQUFlbUIsUUFBZixJQUEyQmUsS0FBSSxDQUFDN0IsbUJBQXBDLEVBQXlEO0FBQzlEVixrQkFBVSxDQUFDRyxHQUFELENBQVYsbUNBQ0tvQyxLQURMO0FBRUVsQyxlQUFLLEVBQUVrQyxLQUFJLENBQUNsQyxLQUFMLEdBQWEsQ0FGdEI7QUFHRUksNkJBQW1CLEVBQUUsSUFIdkI7QUFJRUMsNkJBQW1CLEVBQUU7QUFKdkI7QUFPQVMsK0JBQXVCLEdBQUd6QixDQUFDLENBQUM4QyxNQUFGLEVBQTFCO0FBRUE7QUFDRDs7QUFFRDtBQUNELEtBN0NELENBekZjLENBd0lkO0FBQ0E7OztBQUNBLFFBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNGLE1BQUQsRUFBOEJwQyxHQUE5QixFQUE4QztBQUNqRSxVQUFJb0MsTUFBSSxDQUFDakMsTUFBTCxHQUFjbUIsU0FBZCxJQUEyQmMsTUFBSSxDQUFDNUIscUJBQXBDLEVBQTJEO0FBQ3pEWCxrQkFBVSxDQUFDRyxHQUFELENBQVYsbUNBQ0tvQyxNQURMO0FBRUVqQyxnQkFBTSxFQUFFaUMsTUFBSSxDQUFDakMsTUFBTCxHQUFjO0FBRnhCO0FBS0FjLDhCQUFzQixHQUFHMUIsQ0FBQyxDQUFDOEMsTUFBRixFQUF6QjtBQUVBO0FBQ0QsT0FURCxNQVNPLElBQUlELE1BQUksQ0FBQ2pDLE1BQUwsS0FBZ0JtQixTQUFwQixFQUErQjtBQUNwQ3pCLGtCQUFVLENBQUNHLEdBQUQsQ0FBVixtQ0FDS29DLE1BREw7QUFFRWpDLGdCQUFNLEVBQUVpQyxNQUFJLENBQUNqQyxNQUFMLEdBQWMsQ0FGeEI7QUFHRUssK0JBQXFCLEVBQUUsS0FIekI7QUFJRUMsK0JBQXFCLEVBQUU7QUFKekI7QUFPQVEsOEJBQXNCLEdBQUcxQixDQUFDLENBQUM4QyxNQUFGLEVBQXpCO0FBRUE7QUFDRCxPQVhNLE1BV0EsSUFBSUQsTUFBSSxDQUFDakMsTUFBTCxHQUFjb0IsU0FBZCxJQUEyQmEsTUFBSSxDQUFDM0IscUJBQXBDLEVBQTJEO0FBQ2hFWixrQkFBVSxDQUFDRyxHQUFELENBQVYsbUNBQ0tvQyxNQURMO0FBRUVqQyxnQkFBTSxFQUFFaUMsTUFBSSxDQUFDakMsTUFBTCxHQUFjLENBRnhCO0FBR0VNLCtCQUFxQixFQUFFO0FBSHpCO0FBTUFRLDhCQUFzQixHQUFHMUIsQ0FBQyxDQUFDOEMsTUFBRixFQUF6QjtBQUVBO0FBQ0QsT0FWTSxNQVVBLElBQUlELE1BQUksQ0FBQ2pDLE1BQUwsS0FBZ0JvQixTQUFoQixJQUE2QmEsTUFBSSxDQUFDM0IscUJBQXRDLEVBQTZEO0FBQ2xFWixrQkFBVSxDQUFDRyxHQUFELENBQVYsbUNBQ0tvQyxNQURMO0FBRUVqQyxnQkFBTSxFQUFFaUMsTUFBSSxDQUFDakMsTUFBTCxHQUFjLENBRnhCO0FBR0VLLCtCQUFxQixFQUFFLElBSHpCO0FBSUVDLCtCQUFxQixFQUFFO0FBSnpCO0FBT0FRLDhCQUFzQixHQUFHMUIsQ0FBQyxDQUFDOEMsTUFBRixFQUF6QjtBQUVBO0FBQ0Q7O0FBRUQ7QUFDRCxLQTdDRCxDQTFJYyxDQXlMZDtBQUNBOzs7QUFDQTlDLEtBQUMsQ0FBQ2dELElBQUYsR0FBUyxZQUFNO0FBQ2JoRCxPQUFDLENBQUNpRCxVQUFGLENBQWFQLE1BQU0sQ0FBQ0Msb0JBQVAsQ0FBNEJNLFVBQXpDO0FBRUFqRCxPQUFDLENBQUNrRCxRQUFGLENBQVdoRCxVQUFYO0FBRUFGLE9BQUMsQ0FBQ21ELFFBQUYsQ0FBVzdCLGFBQVg7QUFFQXRCLE9BQUMsQ0FBQ29ELFNBQUYsQ0FBWXBELENBQUMsQ0FBQ3FELE1BQWQsRUFBc0JyRCxDQUFDLENBQUNxRCxNQUF4QjtBQUVBckQsT0FBQyxDQUFDc0QsSUFBRixXQUFVWixNQUFNLENBQUNDLG9CQUFQLENBQTRCWSxVQUF0QztBQUNBdkQsT0FBQyxDQUFDd0QsWUFBRixDQUFlN0IsV0FBZjtBQUNBM0IsT0FBQyxDQUFDeUQsTUFBRixDQUFTZixNQUFNLENBQUNDLG9CQUFQLENBQTRCTSxVQUFyQzs7QUFFQSxVQUFJcEQsQ0FBQyxJQUFJRCxDQUFULEVBQVk7QUFDVjtBQUNBO0FBQ0FVLGtCQUFVLENBQUNDLEdBQVgsQ0FBZSxVQUFDc0MsTUFBRCxFQUE4QnBDLEdBQTlCLEVBQThDO0FBQzNEVCxXQUFDLENBQUMwRCxLQUFGLENBQVEsQ0FBUixFQUFXLENBQVg7QUFFQSxjQUFJQyxjQUFjLEdBQUdDLElBQUksQ0FBQ0MsTUFBTCxNQUFpQixHQUF0Qzs7QUFFQSxjQUFJRixjQUFKLEVBQW9CO0FBQ2xCWix3QkFBWSxDQUFDRixNQUFELEVBQU9wQyxHQUFQLENBQVo7QUFDRDs7QUFFRCxjQUFJa0QsY0FBYyxJQUFJM0QsQ0FBQyxDQUFDOEMsTUFBRixLQUFhckIsdUJBQWIsR0FBdUMsSUFBN0QsRUFBbUU7QUFDakVtQiwyQkFBZSxDQUFDQyxNQUFELEVBQU9wQyxHQUFQLENBQWY7QUFDRDs7QUFFRCxjQUFJcUQsVUFBb0IsR0FBR0MsS0FBSyxDQUFDQyxJQUFOLENBQVdELEtBQUssQ0FBQ2xCLE1BQUksQ0FBQ2xDLEtBQU4sQ0FBTCxDQUFrQnNELElBQWxCLEVBQVgsQ0FBM0I7QUFFQUgsb0JBQVUsR0FBR0EsVUFBVSxDQUFDdkQsR0FBWCxDQUFlLFVBQUMyRCxXQUFELEVBQXlCO0FBQ25ELG1CQUFPQSxXQUFXLEdBQUcsQ0FBckI7QUFDRCxXQUZZLENBQWIsQ0FmMkQsQ0FtQjNEO0FBQ0E7O0FBQ0FKLG9CQUFVLENBQUN2RCxHQUFYLENBQWUsVUFBQzJELFdBQUQsRUFBc0JDLElBQXRCLEVBQXVDO0FBQ3BELGdCQUFJQyxhQUFhLEdBQUcsS0FBS3ZCLE1BQUksQ0FBQ2xDLEtBQUwsR0FBYSxJQUFsQixDQUFwQjtBQUVBLGdCQUFJMEQscUJBQTZCLEdBQUcsSUFBcEM7QUFDQSxnQkFBSUMsc0JBQThCLEdBQUcsSUFBckM7QUFFQSxnQkFBSUMseUJBQWlDLEdBQ25DMUIsTUFBSSxDQUFDbEMsS0FBTCxJQUFjLENBQWQsR0FDSWQsQ0FBQyxHQUFHcUMseUNBRFIsR0FFSVosYUFBYSxHQUFHK0MscUJBQWhCLEdBQ0MvQyxhQUFhLEdBQUdnRCxzQkFBakIsR0FBMkNILElBSmpELENBTm9ELENBWXBEO0FBQ0E7O0FBQ0EsZ0JBQUlLLFdBQXFCLEdBQUdULEtBQUssQ0FBQ0MsSUFBTixDQUFXRCxLQUFLLENBQUNsQixNQUFJLENBQUNqQyxNQUFOLENBQUwsQ0FBbUJxRCxJQUFuQixFQUFYLENBQTVCLENBZG9ELENBZXBEOztBQUVBTyx1QkFBVyxHQUFHQSxXQUFXLENBQUNqRSxHQUFaLENBQWdCLFVBQUNrRSxVQUFELEVBQXdCO0FBQ3BELHFCQUFPQSxVQUFVLEdBQUcsQ0FBcEI7QUFDRCxhQUZhLENBQWQsQ0FqQm9ELENBcUJwRDtBQUNBOztBQUNBL0Msa0NBQXNCLENBdkI4QixDQXlCcEQ7O0FBRUE4Qyx1QkFBVyxDQUFDakUsR0FBWixDQUFnQixVQUFDa0UsVUFBRCxFQUFxQkMsS0FBckIsRUFBdUM7QUFDckQ7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsa0JBQUlDLG1CQUFtQixHQUNyQnhDLDZCQUE2QixDQUFDMUIsR0FBRCxDQUE3QixHQUFxQ21CLFlBQVksR0FBRzZDLFVBRHREO0FBR0Esa0JBQUlHLGlCQUFpQixHQUNuQkwseUJBQXlCLEdBQUczQyxZQUFZLEdBQUc2QyxVQUQ3QztBQUdBekUsZUFBQyxDQUFDNkUsSUFBRjtBQUNBN0UsZUFBQyxDQUFDMEQsS0FBRixDQUFRLENBQVIsRUFBV1UsYUFBWDtBQUNBcEUsZUFBQyxDQUFDRyxJQUFGLENBQU8wQyxNQUFJLENBQUNuQyxNQUFaLEVBQW9CaUUsbUJBQXBCLEVBQXlDQyxpQkFBekM7QUFDQTVFLGVBQUMsQ0FBQzhFLEdBQUY7QUFDRCxhQTFCRDtBQTJCRCxXQXRERDtBQXVERCxTQTVFRDtBQTZFRDtBQUNGLEtBOUZEOztBQWdHQTlFLEtBQUMsQ0FBQytFLGFBQUYsR0FBa0IsWUFBTTtBQUN0Qi9FLE9BQUMsQ0FBQ2dGLFlBQUYsQ0FBZXBGLENBQWYsRUFBa0JDLENBQWxCO0FBQ0QsS0FGRDtBQUdELEdBcFNxRDtBQUFBLENBQXREOztBQXNTZUYsa0ZBQWYiLCJmaWxlIjoiLi9za2V0Y2hlcy9wNS9kaGFybWEtd2F0ZXItZGlzdG9ydC5jYW52YXMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKlxuICogU2hhZGVyIGZ1blxuICogQGF1dGhvciBQZXRlciBMYXhhbHRcbiAqXG4gKi9cblxuaW1wb3J0IHA1LCB7IEZvbnQgfSBmcm9tIFwicDVcIjtcbmltcG9ydCB7IExYTFRfQ29sb3JUaGVtZSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvc3R5bGVzL0NvbG9yXCI7XG5pbXBvcnQgeyBUaHJlZVdhdGVyQ2FudmFzIH0gZnJvbSBcIi4uL3RocmVlL3RocmVlLXdhdGVyLWRpc3RvcnQuY2FudmFzXCI7XG5cbi8vIEJlZ2luIENvbXBvbmVudFxuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cblxuZXhwb3J0IHR5cGUgTFhMVF9EaGFybWFDYW52YXMgPSB7XG4gIFc6IG51bWJlcjtcbiAgSDogbnVtYmVyO1xuICBJRDogbnVtYmVyO1xuICBCRzogTFhMVF9Db2xvclRoZW1lO1xuICBwYXJlbnRFbDogSFRNTERpdkVsZW1lbnQ7XG59O1xuXG5leHBvcnQgdHlwZSBMWExUX0RoYXJtYUNhbnZhc0Rpc3BsYXkgPSAoXG4gIFc6IG51bWJlcixcbiAgSDogbnVtYmVyLFxuICBJRDogbnVtYmVyLFxuICBCRzogTFhMVF9Db2xvclRoZW1lLFxuICBwYXJlbnRFbDogSFRNTERpdkVsZW1lbnRcbikgPT4gKHA6IHA1KSA9PiB2b2lkO1xuXG50eXBlIExYTFRfRGhhcm1hQ2FudmFzQ2hhciA9IHtcbiAgbGV0dGVyOiBzdHJpbmc7XG4gIGNvdW50OiBudW1iZXI7XG4gIGlkeDogbnVtYmVyO1xuXG4gIGNvcGllczogbnVtYmVyO1xuICBjb3BpZXNMYXN0VmlzaWJsZTogbnVtYmVyO1xuICBjb3BpZXNBcmVWaXNpYmxlOiBib29sZWFuO1xuXG4gIGNvcGllc0FyZUluY3JlbWVudGluZzogYm9vbGVhbjtcbiAgY29waWVzQXJlRGVjcmVtZW50aW5nOiBib29sZWFuO1xuXG4gIGNvdW50SXNJbmNyZW1lbnRpbmc6IGJvb2xlYW47XG4gIGNvdW50SXNEZWNyZW1lbnRpbmc6IGJvb2xlYW47XG59O1xuXG5jb25zdCBEaGFybWFDYW52YXNEaXNwbGF5OiBMWExUX0RoYXJtYUNhbnZhc0Rpc3BsYXkgPSAoXG4gIFcsXG4gIEgsXG4gIElELFxuICAvLyBEaGFybWFUaGVtZSxcbiAgcGFyZW50RWxcbikgPT4gKHA6IHA1KSA9PiB7XG4gIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gQ29uZmlnXG5cbiAgbGV0IGNhbnZhcztcblxuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIEZvbnRzXG4gIGxldCBkaGFybWFGb250OiBGb250O1xuXG4gIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gVHlwb2dyYXBoeVxuICBsZXQgdGV4dCA9IFwiTEFYQUxUXCI7XG5cbiAgbGV0IHNwbGl0Q2hhcmFjdGVyQXJyYXkgPSB0ZXh0LnNwbGl0KFwiXCIpO1xuICBsZXQgY2hhcmFjdGVyczogTFhMVF9EaGFybWFDYW52YXNDaGFyW10gPSBzcGxpdENoYXJhY3RlckFycmF5Lm1hcChcbiAgICAoY2hhcmFjdGVyOiBzdHJpbmcsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsZXR0ZXI6IGNoYXJhY3RlcixcbiAgICAgICAgY291bnQ6IDEsXG4gICAgICAgIGlkeDogaWR4LFxuXG4gICAgICAgIGNvcGllczogNSxcbiAgICAgICAgY29waWVzTGFzdFZpc2libGU6IDAsXG4gICAgICAgIGNvcGllc0FyZVZpc2libGU6IGZhbHNlLFxuXG4gICAgICAgIGNvdW50SXNJbmNyZW1lbnRpbmc6IHRydWUsXG4gICAgICAgIGNvdW50SXNEZWNyZW1lbnRpbmc6IGZhbHNlLFxuXG4gICAgICAgIGNvcGllc0FyZUluY3JlbWVudGluZzogdHJ1ZSxcbiAgICAgICAgY29waWVzQXJlRGVjcmVtZW50aW5nOiBmYWxzZSxcbiAgICAgIH07XG4gICAgfVxuICApO1xuXG4gIGxldCBjaGFyYWN0ZXJDb3VudDogbnVtYmVyID0gc3BsaXRDaGFyYWN0ZXJBcnJheS5sZW5ndGg7XG4gIGxldCBjaGFyYWN0ZXJXaWR0aDogbnVtYmVyID0gVyAvIGNoYXJhY3RlckNvdW50O1xuICBsZXQgY2hhcmFjdGVyU2l6ZTogbnVtYmVyID0gSCAqIDEuMjU7XG5cbiAgY29uc29sZS5sb2coY2hhcmFjdGVyU2l6ZSwgXCJjaGFyYWN0ZXJTaXplXCIpO1xuXG4gIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gQ291bnRzXG4gIC8vIGxldCByZW5kZXJDb3VudDogbnVtYmVyID0gMDtcbiAgbGV0IHByZXZpb3VzQ291bnRVcGRhdGVUaW1lOiBudW1iZXIgPSAwO1xuICBsZXQgcHJldmlvdXNDb3B5VXBkYXRlVGltZTogbnVtYmVyID0gMDtcblxuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIFN0cm9rZXNcbiAgbGV0IHN0cm9rZVdpZHRoOiBudW1iZXIgPSA0O1xuICBsZXQgc3Ryb2tlT2Zmc2V0OiBudW1iZXIgPSBzdHJva2VXaWR0aCAqIDEuNTtcblxuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIExpbWl0c1xuICBsZXQgbWF4Q291bnQgPSAzO1xuICBsZXQgbWluQ291bnQgPSAxO1xuXG4gIGxldCBtYXhDb3BpZXMgPSAxMjtcbiAgbGV0IG1pbkNvcGllcyA9IDE7XG5cbiAgbGV0IGZyYW1lUmF0ZSA9IDEwO1xuXG4gIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gVHJhbnNsYXRpb25cbiAgLy8gbGV0IHByZXZpb3VzVmVydGljYWxUcmFuc2xhdGlvbjogbnVtYmVyID0gSCAvIDIuMjU7XG5cbiAgbGV0IHZlcnRpY2FsVHJhbnNsYXRpb25XaGl0ZXNwYWNlQ29tcGVuc2F0aW9uOiBudW1iZXIgPSAyLjI1O1xuICBjb25zdCBwcmV2aW91c0hvcml6b250YWxUcmFuc2xhdGlvbiA9IChpZHg6IG51bWJlcikgPT5cbiAgICAtNjAgKyAoY2hhcmFjdGVyV2lkdGggKiBpZHggKyBjaGFyYWN0ZXJXaWR0aCAvIDEuNSArIHN0cm9rZU9mZnNldCk7XG5cbiAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAvLyBQcmVsb2FkXG4gIHAucHJlbG9hZCA9ICgpID0+IHtcbiAgICBkaGFybWFGb250ID0gcC5sb2FkRm9udChgL2ZvbnRzL2RoYXJtYS9kaGFybWFfcmVndWxhci50dGZgKTtcbiAgfTtcblxuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIFNldHVwXG4gIHAuc2V0dXAgPSAoKSA9PiB7XG4gICAgLy8gT3VyIENhbnZhc1xuICAgIGNhbnZhcyA9IHAuY3JlYXRlQ2FudmFzKFcsIEgpO1xuXG4gICAgVGhyZWVXYXRlckNhbnZhcyhwYXJlbnRFbCwgY2FudmFzLmVsdCwgd2luZG93LmxheGFsdFVuaXZlcnNhbFRoZW1lKTtcblxuICAgIHAuZnJhbWVSYXRlKGZyYW1lUmF0ZSk7XG4gIH07XG5cbiAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAvLyBVcGRhdGUgQ2hhcmFjdGVyXG4gIGNvbnN0IHVwZGF0ZUNoYXJhY3RlciA9IChjaGFyOiBMWExUX0RoYXJtYUNhbnZhc0NoYXIsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgaWYgKGNoYXIuY291bnQgPCBtYXhDb3VudCAmJiBjaGFyLmNvdW50SXNJbmNyZW1lbnRpbmcpIHtcbiAgICAgIGNoYXJhY3RlcnNbaWR4XSA9IHtcbiAgICAgICAgLi4uY2hhcixcbiAgICAgICAgY291bnQ6IGNoYXIuY291bnQgKyAxLFxuICAgICAgfTtcblxuICAgICAgcHJldmlvdXNDb3VudFVwZGF0ZVRpbWUgPSBwLm1pbGxpcygpO1xuXG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChjaGFyLmNvdW50ID09PSBtYXhDb3VudCkge1xuICAgICAgY2hhcmFjdGVyc1tpZHhdID0ge1xuICAgICAgICAuLi5jaGFyLFxuICAgICAgICBjb3VudDogY2hhci5jb3VudCAtIDEsXG4gICAgICAgIGNvdW50SXNJbmNyZW1lbnRpbmc6IGZhbHNlLFxuICAgICAgICBjb3VudElzRGVjcmVtZW50aW5nOiB0cnVlLFxuICAgICAgfTtcblxuICAgICAgcHJldmlvdXNDb3VudFVwZGF0ZVRpbWUgPSBwLm1pbGxpcygpO1xuXG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChjaGFyLmNvdW50ID4gbWluQ291bnQgJiYgY2hhci5jb3VudElzRGVjcmVtZW50aW5nKSB7XG4gICAgICBjaGFyYWN0ZXJzW2lkeF0gPSB7XG4gICAgICAgIC4uLmNoYXIsXG4gICAgICAgIGNvdW50OiBjaGFyLmNvdW50IC0gMSxcbiAgICAgICAgY291bnRJc0RlY3JlbWVudGluZzogdHJ1ZSxcbiAgICAgIH07XG5cbiAgICAgIHByZXZpb3VzQ291bnRVcGRhdGVUaW1lID0gcC5taWxsaXMoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoY2hhci5jb3VudCA9PT0gbWluQ291bnQgJiYgY2hhci5jb3VudElzRGVjcmVtZW50aW5nKSB7XG4gICAgICBjaGFyYWN0ZXJzW2lkeF0gPSB7XG4gICAgICAgIC4uLmNoYXIsXG4gICAgICAgIGNvdW50OiBjaGFyLmNvdW50ICsgMSxcbiAgICAgICAgY291bnRJc0luY3JlbWVudGluZzogdHJ1ZSxcbiAgICAgICAgY291bnRJc0RlY3JlbWVudGluZzogZmFsc2UsXG4gICAgICB9O1xuXG4gICAgICBwcmV2aW91c0NvdW50VXBkYXRlVGltZSA9IHAubWlsbGlzKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH07XG5cbiAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAvLyBVcGRhdGUgQ29waWVzXG4gIGNvbnN0IHVwZGF0ZUNvcGllcyA9IChjaGFyOiBMWExUX0RoYXJtYUNhbnZhc0NoYXIsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgaWYgKGNoYXIuY29waWVzIDwgbWF4Q29waWVzICYmIGNoYXIuY29waWVzQXJlSW5jcmVtZW50aW5nKSB7XG4gICAgICBjaGFyYWN0ZXJzW2lkeF0gPSB7XG4gICAgICAgIC4uLmNoYXIsXG4gICAgICAgIGNvcGllczogY2hhci5jb3BpZXMgKyAxLFxuICAgICAgfTtcblxuICAgICAgcHJldmlvdXNDb3B5VXBkYXRlVGltZSA9IHAubWlsbGlzKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGNoYXIuY29waWVzID09PSBtYXhDb3BpZXMpIHtcbiAgICAgIGNoYXJhY3RlcnNbaWR4XSA9IHtcbiAgICAgICAgLi4uY2hhcixcbiAgICAgICAgY29waWVzOiBjaGFyLmNvcGllcyAtIDEsXG4gICAgICAgIGNvcGllc0FyZUluY3JlbWVudGluZzogZmFsc2UsXG4gICAgICAgIGNvcGllc0FyZURlY3JlbWVudGluZzogdHJ1ZSxcbiAgICAgIH07XG5cbiAgICAgIHByZXZpb3VzQ29weVVwZGF0ZVRpbWUgPSBwLm1pbGxpcygpO1xuXG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChjaGFyLmNvcGllcyA+IG1pbkNvcGllcyAmJiBjaGFyLmNvcGllc0FyZURlY3JlbWVudGluZykge1xuICAgICAgY2hhcmFjdGVyc1tpZHhdID0ge1xuICAgICAgICAuLi5jaGFyLFxuICAgICAgICBjb3BpZXM6IGNoYXIuY29waWVzIC0gMSxcbiAgICAgICAgY29waWVzQXJlRGVjcmVtZW50aW5nOiB0cnVlLFxuICAgICAgfTtcblxuICAgICAgcHJldmlvdXNDb3B5VXBkYXRlVGltZSA9IHAubWlsbGlzKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGNoYXIuY29waWVzID09PSBtaW5Db3BpZXMgJiYgY2hhci5jb3BpZXNBcmVEZWNyZW1lbnRpbmcpIHtcbiAgICAgIGNoYXJhY3RlcnNbaWR4XSA9IHtcbiAgICAgICAgLi4uY2hhcixcbiAgICAgICAgY29waWVzOiBjaGFyLmNvcGllcyArIDEsXG4gICAgICAgIGNvcGllc0FyZUluY3JlbWVudGluZzogdHJ1ZSxcbiAgICAgICAgY29waWVzQXJlRGVjcmVtZW50aW5nOiBmYWxzZSxcbiAgICAgIH07XG5cbiAgICAgIHByZXZpb3VzQ29weVVwZGF0ZVRpbWUgPSBwLm1pbGxpcygpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9O1xuXG4gIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gRHJhd1xuICBwLmRyYXcgPSAoKSA9PiB7XG4gICAgcC5iYWNrZ3JvdW5kKHdpbmRvdy5sYXhhbHRVbml2ZXJzYWxUaGVtZS5iYWNrZ3JvdW5kKTtcblxuICAgIHAudGV4dEZvbnQoZGhhcm1hRm9udCk7XG5cbiAgICBwLnRleHRTaXplKGNoYXJhY3RlclNpemUpO1xuXG4gICAgcC50ZXh0QWxpZ24ocC5DRU5URVIsIHAuQ0VOVEVSKTtcblxuICAgIHAuZmlsbChgJHt3aW5kb3cubGF4YWx0VW5pdmVyc2FsVGhlbWUuZm9yZWdyb3VuZH1gKTtcbiAgICBwLnN0cm9rZVdlaWdodChzdHJva2VXaWR0aCk7XG4gICAgcC5zdHJva2Uod2luZG93LmxheGFsdFVuaXZlcnNhbFRoZW1lLmJhY2tncm91bmQpO1xuXG4gICAgaWYgKEggJiYgVykge1xuICAgICAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgICAgIC8vIExvb3AgdGhyb3VnaCBvdXIgY29waWVzXG4gICAgICBjaGFyYWN0ZXJzLm1hcCgoY2hhcjogTFhMVF9EaGFybWFDYW52YXNDaGFyLCBpZHg6IG51bWJlcikgPT4ge1xuICAgICAgICBwLnNjYWxlKDEsIDEpO1xuXG4gICAgICAgIGxldCByYW5kb21DaGFyUGljayA9IE1hdGgucmFuZG9tKCkgPD0gMC41O1xuXG4gICAgICAgIGlmIChyYW5kb21DaGFyUGljaykge1xuICAgICAgICAgIHVwZGF0ZUNvcGllcyhjaGFyLCBpZHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJhbmRvbUNoYXJQaWNrICYmIHAubWlsbGlzKCkgLSBwcmV2aW91c0NvdW50VXBkYXRlVGltZSA+IDMwMDApIHtcbiAgICAgICAgICB1cGRhdGVDaGFyYWN0ZXIoY2hhciwgaWR4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb3VudEFycmF5OiBudW1iZXJbXSA9IEFycmF5LmZyb20oQXJyYXkoY2hhci5jb3VudCkua2V5cygpKTtcblxuICAgICAgICBjb3VudEFycmF5ID0gY291bnRBcnJheS5tYXAoKGNvdW50TnVtYmVyOiBudW1iZXIpID0+IHtcbiAgICAgICAgICByZXR1cm4gY291bnROdW1iZXIgKyAxO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAgICAgICAvLyBEdXBsaWNhdGUgcG9zaXRpb25zXG4gICAgICAgIGNvdW50QXJyYXkubWFwKChjb3VudE51bWJlcjogbnVtYmVyLCBpZHh4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICBsZXQgdmVydGljYWxTY2FsZSA9IDEgLyAoY2hhci5jb3VudCAqIDAuOTUpO1xuXG4gICAgICAgICAgbGV0IHZlcnRpY2FsU2tld0RpdmlzaWJsZTogbnVtYmVyID0gMi43NTtcbiAgICAgICAgICBsZXQgY2hhcmFjdGVyU2tld0RpdmlzaWJsZTogbnVtYmVyID0gMS4zNjtcblxuICAgICAgICAgIGxldCBkdXBsaWNhdGVWZXJ0aWNhbFBvc2l0aW9uOiBudW1iZXIgPVxuICAgICAgICAgICAgY2hhci5jb3VudCA9PSAxXG4gICAgICAgICAgICAgID8gSCAvIHZlcnRpY2FsVHJhbnNsYXRpb25XaGl0ZXNwYWNlQ29tcGVuc2F0aW9uXG4gICAgICAgICAgICAgIDogY2hhcmFjdGVyU2l6ZSAvIHZlcnRpY2FsU2tld0RpdmlzaWJsZSArXG4gICAgICAgICAgICAgICAgKGNoYXJhY3RlclNpemUgLyBjaGFyYWN0ZXJTa2V3RGl2aXNpYmxlKSAqIGlkeHg7XG5cbiAgICAgICAgICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAgICAgICAgIC8vIE1ha2UgY29waWVzXG4gICAgICAgICAgbGV0IGNvcGllc0FycmF5OiBudW1iZXJbXSA9IEFycmF5LmZyb20oQXJyYXkoY2hhci5jb3BpZXMpLmtleXMoKSk7XG4gICAgICAgICAgLy8gbGV0IHJhbmRvbUNvcHlQaWNrID0gTWF0aC5yYW5kb20oKSA8PSAwLjU7XG5cbiAgICAgICAgICBjb3BpZXNBcnJheSA9IGNvcGllc0FycmF5Lm1hcCgoY29weU51bWJlcjogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY29weU51bWJlciArIDE7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyBsZXQgcmFuZG9tQ29weVBpY2sgPSBNYXRoLnJhbmRvbSgpIDw9IDAuNTtcbiAgICAgICAgICAvLyBsZXQgY29weVRpbWVyID0gcC5taWxsaXMoKSAtIHByZXZpb3VzQ29waWVzVmlzaWJsZVRpbWUgPiAyMDAwO1xuICAgICAgICAgIHByZXZpb3VzQ29weVVwZGF0ZVRpbWU7XG5cbiAgICAgICAgICAvLyBsZXQgaXNGaXJzdENvdW50ID0gdHJ1ZTtcblxuICAgICAgICAgIGNvcGllc0FycmF5Lm1hcCgoY29weU51bWJlcjogbnVtYmVyLCBpZHh4eDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAvLyBsZXQgY2VudGVyQ29vcmRzWCA9IFcgLyAyO1xuICAgICAgICAgICAgLy8gbGV0IGNlbnRlckNvb3Jkc1kgPSBIIC8gMjtcblxuICAgICAgICAgICAgLy8gbGV0IGhvcml6b250YWxUcmFuc2xhdGUgPVxuICAgICAgICAgICAgLy8gICBjb3B5TnVtYmVyICE9PSAxXG4gICAgICAgICAgICAvLyAgICAgPyAocHJldmlvdXNIb3Jpem9udGFsVHJhbnNsYXRpb24oaWR4KSArXG4gICAgICAgICAgICAvLyAgICAgICAgIChzdHJva2VPZmZzZXQgLyAocC5tb3VzZVggLyAxMDApKSAqIGNvcHlOdW1iZXIpXG4gICAgICAgICAgICAvLyAgICAgOiBwcmV2aW91c0hvcml6b250YWxUcmFuc2xhdGlvbihpZHgpICtcbiAgICAgICAgICAgIC8vICAgICAgIHN0cm9rZU9mZnNldCAqIGNvcHlOdW1iZXI7XG5cbiAgICAgICAgICAgIC8vIGxldCB2ZXJ0aWNhbFRyYW5zbGF0ZSA9XG4gICAgICAgICAgICAvLyAgIGNvcHlOdW1iZXIgIT09IDFcbiAgICAgICAgICAgIC8vICAgICA/IChkdXBsaWNhdGVWZXJ0aWNhbFBvc2l0aW9uIC0gKHN0cm9rZU9mZnNldCAvIChwLm1vdXNlWCAvIDEwMCkpICogY29weU51bWJlcilcbiAgICAgICAgICAgIC8vICAgICA6IGR1cGxpY2F0ZVZlcnRpY2FsUG9zaXRpb24gLSBzdHJva2VPZmZzZXQgKiBjb3B5TnVtYmVyO1xuXG4gICAgICAgICAgICBsZXQgaG9yaXpvbnRhbFRyYW5zbGF0ZSA9XG4gICAgICAgICAgICAgIHByZXZpb3VzSG9yaXpvbnRhbFRyYW5zbGF0aW9uKGlkeCkgKyBzdHJva2VPZmZzZXQgKiBjb3B5TnVtYmVyO1xuXG4gICAgICAgICAgICBsZXQgdmVydGljYWxUcmFuc2xhdGUgPVxuICAgICAgICAgICAgICBkdXBsaWNhdGVWZXJ0aWNhbFBvc2l0aW9uIC0gc3Ryb2tlT2Zmc2V0ICogY29weU51bWJlcjtcblxuICAgICAgICAgICAgcC5wdXNoKCk7XG4gICAgICAgICAgICBwLnNjYWxlKDEsIHZlcnRpY2FsU2NhbGUpO1xuICAgICAgICAgICAgcC50ZXh0KGNoYXIubGV0dGVyLCBob3Jpem9udGFsVHJhbnNsYXRlLCB2ZXJ0aWNhbFRyYW5zbGF0ZSk7XG4gICAgICAgICAgICBwLnBvcCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBwLndpbmRvd1Jlc2l6ZWQgPSAoKSA9PiB7XG4gICAgcC5yZXNpemVDYW52YXMoVywgSCk7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEaGFybWFDYW52YXNEaXNwbGF5O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sketches/p5/dharma-water-distort.canvas.tsx\n");

/***/ })

})