webpackHotUpdate_N_E("pages/index",{

/***/ "./sketches/p5/no-water-distort-L.canvas.tsx":
/*!***************************************************!*\
  !*** ./sketches/p5/no-water-distort-L.canvas.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _constants_styles_Base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/styles/Base */ \"./constants/styles/Base.tsx\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/**\n *\n * Shader fun\n * @author Peter Laxalt\n *\n */\n\n\nvar DharmaCanvasDisplay = function DharmaCanvasDisplay(W, H, ID, // DharmaTheme,\nparentEl) {\n  return function (p) {\n    // _________________________________________________\n    // Config\n    var canvas; // ____________________________\n    // Fonts\n\n    var dharmaFont; // ____________________________\n    // Typography\n\n    var text = \"LAX\";\n    var splitCharacterArray = text.split(\"\");\n    var characters = splitCharacterArray.map(function (character, idx) {\n      return {\n        letter: character,\n        count: 1,\n        idx: idx,\n        copies: 5,\n        copiesLastVisible: 0,\n        copiesAreVisible: false,\n        countIsIncrementing: true,\n        countIsDecrementing: false,\n        copiesAreIncrementing: true,\n        copiesAreDecrementing: false\n      };\n    });\n    var isTablet = W < _constants_styles_Base__WEBPACK_IMPORTED_MODULE_1__[\"Base\"].Media.Width.Md;\n    var characterCount = splitCharacterArray.length;\n    var characterWidth = W / characterCount;\n    var characterSize = !isTablet ? H * 1.15 : H * 1;\n    var verticalSkewDivisible = !isTablet ? 2.75 : 2;\n    var characterSkewDivisible = 1.36;\n    console.log(characterSize, \"characterSize\"); // ____________________________\n    // Counts\n    // let renderCount: number = 0;\n\n    var previousCountUpdateTime = 0;\n    var previousCopyUpdateTime = 0; // ____________________________\n    // Strokes\n\n    var strokeWidth = !isTablet ? 4 : 2;\n    var strokeOffset = !isTablet ? strokeWidth * 1.5 : strokeWidth * 1.25; // ____________________________\n    // Limits\n\n    var maxCount = 3;\n    var minCount = 1;\n    var maxCopies = !isTablet ? 12 : 7;\n    var minCopies = 1;\n    var frameRate = 60; // ____________________________\n    // Translation\n    // let previousVerticalTranslation: number = H / 2.25;\n\n    var verticalTranslationWhitespaceCompensation = 2.25;\n\n    var previousHorizontalTranslation = function previousHorizontalTranslation(idx) {\n      return -60 + (characterWidth * idx + characterWidth / 1.5 + strokeOffset);\n    }; // _________________________________________________\n    // Preload\n\n\n    p.preload = function () {\n      dharmaFont = p.loadFont(\"/fonts/dharma/dharma_regular.ttf\");\n    }; // _________________________________________________\n    // Setup\n\n\n    p.setup = function () {\n      // Our Canvas\n      canvas = p.createCanvas(W, H); // ThreeWaterCanvas(parentEl, canvas.elt);\n\n      p.frameRate(frameRate);\n\n      if (window.devicePixelRatio > 1 && window.devicePixelRatio < 3) {\n        p.pixelDensity(1.25);\n      }\n    }; // _________________________________________________\n    // Update Character\n\n\n    var updateCharacter = function updateCharacter(_char, idx) {\n      if (_char.count < maxCount && _char.countIsIncrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char), {}, {\n          count: _char.count + 1\n        });\n        previousCountUpdateTime = p.millis();\n        return;\n      } else if (_char.count === maxCount) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char), {}, {\n          count: _char.count - 1,\n          countIsIncrementing: false,\n          countIsDecrementing: true\n        });\n        previousCountUpdateTime = p.millis();\n        return;\n      } else if (_char.count > minCount && _char.countIsDecrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char), {}, {\n          count: _char.count - 1,\n          countIsDecrementing: true\n        });\n        previousCountUpdateTime = p.millis();\n        return;\n      } else if (_char.count === minCount && _char.countIsDecrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char), {}, {\n          count: _char.count + 1,\n          countIsIncrementing: true,\n          countIsDecrementing: false\n        });\n        previousCountUpdateTime = p.millis();\n        return;\n      }\n\n      return;\n    }; // _________________________________________________\n    // Update Copies\n\n\n    var updateCopies = function updateCopies(_char2, idx) {\n      if (_char2.copies < maxCopies && _char2.copiesAreIncrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char2), {}, {\n          copies: _char2.copies + 1\n        });\n        previousCopyUpdateTime = p.millis();\n        return;\n      } else if (_char2.copies === maxCopies) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char2), {}, {\n          copies: _char2.copies - 1,\n          copiesAreIncrementing: false,\n          copiesAreDecrementing: true\n        });\n        previousCopyUpdateTime = p.millis();\n        return;\n      } else if (_char2.copies > minCopies && _char2.copiesAreDecrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char2), {}, {\n          copies: _char2.copies - 1,\n          copiesAreDecrementing: true\n        });\n        previousCopyUpdateTime = p.millis();\n        return;\n      } else if (_char2.copies === minCopies && _char2.copiesAreDecrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char2), {}, {\n          copies: _char2.copies + 1,\n          copiesAreIncrementing: true,\n          copiesAreDecrementing: false\n        });\n        previousCopyUpdateTime = p.millis();\n        return;\n      }\n\n      return;\n    }; // _________________________________________________\n    // Draw\n\n\n    p.draw = function () {\n      if (p.frameCount % 10 === 0 && !window.dharmaPaused) {\n        p.background(window.laxaltUniversalTheme.background);\n        p.textFont(dharmaFont);\n        p.textSize(characterSize);\n        p.textAlign(p.CENTER, p.CENTER);\n        p.fill(\"\".concat(window.laxaltUniversalTheme.foreground));\n        p.strokeWeight(strokeWidth);\n        p.stroke(window.laxaltUniversalTheme.background);\n\n        if (H && W) {\n          // _________________________________________\n          // Loop through our copies\n          characters.map(function (_char3, idx) {\n            p.scale(1, 1);\n            var randomCharPick = Math.random() <= 0.5;\n\n            if (randomCharPick) {\n              updateCopies(_char3, idx);\n            }\n\n            if (randomCharPick && p.millis() - previousCountUpdateTime > 3000) {\n              updateCharacter(_char3, idx);\n            }\n\n            var countArray = Array.from(Array(_char3.count).keys());\n            countArray = countArray.map(function (countNumber) {\n              return countNumber + 1;\n            }); // _________________________________________\n            // Duplicate positions\n\n            countArray.map(function (countNumber, idxx) {\n              var verticalScale = 1 / (_char3.count * 0.95);\n              var duplicateVerticalPosition = _char3.count == 1 ? H / verticalTranslationWhitespaceCompensation : characterSize / verticalSkewDivisible + characterSize / characterSkewDivisible * idxx; // _________________________________________\n              // Make copies\n\n              var copiesArray = Array.from(Array(_char3.copies).keys()); // let randomCopyPick = Math.random() <= 0.5;\n\n              copiesArray = copiesArray.map(function (copyNumber) {\n                return copyNumber + 1;\n              }); // let randomCopyPick = Math.random() <= 0.5;\n              // let copyTimer = p.millis() - previousCopiesVisibleTime > 2000;\n\n              previousCopyUpdateTime; // let isFirstCount = true;\n\n              copiesArray.map(function (copyNumber, idxxx) {\n                // let centerCoordsX = W / 2;\n                // let centerCoordsY = H / 2;\n                // let horizontalTranslate =\n                //   copyNumber !== 1\n                //     ? (previousHorizontalTranslation(idx) +\n                //         (strokeOffset / (p.mouseX / 100)) * copyNumber)\n                //     : previousHorizontalTranslation(idx) +\n                //       strokeOffset * copyNumber;\n                // let verticalTranslate =\n                //   copyNumber !== 1\n                //     ? (duplicateVerticalPosition - (strokeOffset / (p.mouseX / 100)) * copyNumber)\n                //     : duplicateVerticalPosition - strokeOffset * copyNumber;\n                var horizontalTranslate = previousHorizontalTranslation(idx) + strokeOffset * copyNumber;\n                var verticalTranslate = duplicateVerticalPosition - strokeOffset * copyNumber;\n                p.push();\n                p.scale(1, verticalScale);\n                p.text(_char3.letter, horizontalTranslate, verticalTranslate);\n                p.pop();\n              });\n            });\n          });\n        }\n      }\n    };\n\n    p.windowResized = function () {\n      p.resizeCanvas(W, H);\n    };\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DharmaCanvasDisplay);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2tldGNoZXMvcDUvbm8td2F0ZXItZGlzdG9ydC1MLmNhbnZhcy50c3g/ZjE3ZCJdLCJuYW1lcyI6WyJEaGFybWFDYW52YXNEaXNwbGF5IiwiVyIsIkgiLCJJRCIsInBhcmVudEVsIiwicCIsImNhbnZhcyIsImRoYXJtYUZvbnQiLCJ0ZXh0Iiwic3BsaXRDaGFyYWN0ZXJBcnJheSIsInNwbGl0IiwiY2hhcmFjdGVycyIsIm1hcCIsImNoYXJhY3RlciIsImlkeCIsImxldHRlciIsImNvdW50IiwiY29waWVzIiwiY29waWVzTGFzdFZpc2libGUiLCJjb3BpZXNBcmVWaXNpYmxlIiwiY291bnRJc0luY3JlbWVudGluZyIsImNvdW50SXNEZWNyZW1lbnRpbmciLCJjb3BpZXNBcmVJbmNyZW1lbnRpbmciLCJjb3BpZXNBcmVEZWNyZW1lbnRpbmciLCJpc1RhYmxldCIsIkJhc2UiLCJNZWRpYSIsIldpZHRoIiwiTWQiLCJjaGFyYWN0ZXJDb3VudCIsImxlbmd0aCIsImNoYXJhY3RlcldpZHRoIiwiY2hhcmFjdGVyU2l6ZSIsInZlcnRpY2FsU2tld0RpdmlzaWJsZSIsImNoYXJhY3RlclNrZXdEaXZpc2libGUiLCJjb25zb2xlIiwibG9nIiwicHJldmlvdXNDb3VudFVwZGF0ZVRpbWUiLCJwcmV2aW91c0NvcHlVcGRhdGVUaW1lIiwic3Ryb2tlV2lkdGgiLCJzdHJva2VPZmZzZXQiLCJtYXhDb3VudCIsIm1pbkNvdW50IiwibWF4Q29waWVzIiwibWluQ29waWVzIiwiZnJhbWVSYXRlIiwidmVydGljYWxUcmFuc2xhdGlvbldoaXRlc3BhY2VDb21wZW5zYXRpb24iLCJwcmV2aW91c0hvcml6b250YWxUcmFuc2xhdGlvbiIsInByZWxvYWQiLCJsb2FkRm9udCIsInNldHVwIiwiY3JlYXRlQ2FudmFzIiwid2luZG93IiwiZGV2aWNlUGl4ZWxSYXRpbyIsInBpeGVsRGVuc2l0eSIsInVwZGF0ZUNoYXJhY3RlciIsImNoYXIiLCJtaWxsaXMiLCJ1cGRhdGVDb3BpZXMiLCJkcmF3IiwiZnJhbWVDb3VudCIsImRoYXJtYVBhdXNlZCIsImJhY2tncm91bmQiLCJsYXhhbHRVbml2ZXJzYWxUaGVtZSIsInRleHRGb250IiwidGV4dFNpemUiLCJ0ZXh0QWxpZ24iLCJDRU5URVIiLCJmaWxsIiwiZm9yZWdyb3VuZCIsInN0cm9rZVdlaWdodCIsInN0cm9rZSIsInNjYWxlIiwicmFuZG9tQ2hhclBpY2siLCJNYXRoIiwicmFuZG9tIiwiY291bnRBcnJheSIsIkFycmF5IiwiZnJvbSIsImtleXMiLCJjb3VudE51bWJlciIsImlkeHgiLCJ2ZXJ0aWNhbFNjYWxlIiwiZHVwbGljYXRlVmVydGljYWxQb3NpdGlvbiIsImNvcGllc0FycmF5IiwiY29weU51bWJlciIsImlkeHh4IiwiaG9yaXpvbnRhbFRyYW5zbGF0ZSIsInZlcnRpY2FsVHJhbnNsYXRlIiwicHVzaCIsInBvcCIsIndpbmRvd1Jlc2l6ZWQiLCJyZXNpemVDYW52YXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOztBQXNDQSxJQUFNQSxtQkFBNkMsR0FBRyxTQUFoREEsbUJBQWdELENBQ3BEQyxDQURvRCxFQUVwREMsQ0FGb0QsRUFHcERDLEVBSG9ELEVBSXBEO0FBQ0FDLFFBTG9EO0FBQUEsU0FNakQsVUFBQ0MsQ0FBRCxFQUFXO0FBQ2Q7QUFDQTtBQUVBLFFBQUlDLE1BQUosQ0FKYyxDQU1kO0FBQ0E7O0FBQ0EsUUFBSUMsVUFBSixDQVJjLENBVWQ7QUFDQTs7QUFDQSxRQUFJQyxJQUFJLEdBQUcsS0FBWDtBQUVBLFFBQUlDLG1CQUFtQixHQUFHRCxJQUFJLENBQUNFLEtBQUwsQ0FBVyxFQUFYLENBQTFCO0FBQ0EsUUFBSUMsVUFBbUMsR0FBR0YsbUJBQW1CLENBQUNHLEdBQXBCLENBQ3hDLFVBQUNDLFNBQUQsRUFBb0JDLEdBQXBCLEVBQW9DO0FBQ2xDLGFBQU87QUFDTEMsY0FBTSxFQUFFRixTQURIO0FBRUxHLGFBQUssRUFBRSxD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QTs7QUFDQS9DLG9DQUFzQixDQXBCOEIsQ0FzQnBEOztBQUVBOEMseUJBQVcsQ0FBQ3hFLEdBQVosQ0FBZ0IsVUFBQ3lFLFVBQUQsRUFBcUJDLEtBQXJCLEVBQXVDO0FBQ3JEO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLG9CQUFJQyxtQkFBbUIsR0FDckJ4Qyw2QkFBNkIsQ0FBQ2pDLEdBQUQsQ0FBN0IsR0FBcUMwQixZQUFZLEdBQUc2QyxVQUR0RDtBQUdBLG9CQUFJRyxpQkFBaUIsR0FDbkJMLHlCQUF5QixHQUFHM0MsWUFBWSxHQUFHNkMsVUFEN0M7QUFHQWhGLGlCQUFDLENBQUNvRixJQUFGO0FBQ0FwRixpQkFBQyxDQUFDbUUsS0FBRixDQUFRLENBQVIsRUFBV1UsYUFBWDtBQUNBN0UsaUJBQUMsQ0FBQ0csSUFBRixDQUFPZ0QsTUFBSSxDQUFDekMsTUFBWixFQUFvQndFLG1CQUFwQixFQUF5Q0MsaUJBQXpDO0FBQ0FuRixpQkFBQyxDQUFDcUYsR0FBRjtBQUNELGVBMUJEO0FBMkJELGFBbkREO0FBb0RELFdBekVEO0FBMEVEO0FBQ0Y7QUFDRixLQXpGRDs7QUEyRkFyRixLQUFDLENBQUNzRixhQUFGLEdBQWtCLFlBQU07QUFDdEJ0RixPQUFDLENBQUN1RixZQUFGLENBQWUzRixDQUFmLEVBQWtCQyxDQUFsQjtBQUNELEtBRkQ7QUFHRCxHQXhTcUQ7QUFBQSxDQUF0RDs7QUEwU2VGLGtGQUFmIiwiZmlsZSI6Ii4vc2tldGNoZXMvcDUvbm8td2F0ZXItZGlzdG9ydC1MLmNhbnZhcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqXG4gKiBTaGFkZXIgZnVuXG4gKiBAYXV0aG9yIFBldGVyIExheGFsdFxuICpcbiAqL1xuXG5pbXBvcnQgcDUsIHsgRm9udCB9IGZyb20gXCJwNVwiO1xuaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvc3R5bGVzL0Jhc2VcIjtcbmltcG9ydCB7IFRocmVlV2F0ZXJDYW52YXMgfSBmcm9tIFwiLi4vdGhyZWUvdGhyZWUtd2F0ZXItZGlzdG9ydC5jYW52YXNcIjtcblxuLy8gQmVnaW4gQ29tcG9uZW50XG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuXG5leHBvcnQgdHlwZSBMWExUX0RoYXJtYUNhbnZhcyA9IHtcbiAgVzogbnVtYmVyO1xuICBIOiBudW1iZXI7XG4gIElEOiBudW1iZXI7XG4gIC8vIEJHOiBMWExUX0NvbG9yVGhlbWU7XG4gIHBhcmVudEVsOiBIVE1MRGl2RWxlbWVudDtcbn07XG5cbmV4cG9ydCB0eXBlIExYTFRfRGhhcm1hQ2FudmFzRGlzcGxheSA9IChcbiAgVzogbnVtYmVyLFxuICBIOiBudW1iZXIsXG4gIElEOiBudW1iZXIsXG4gIC8vIEJHOiBMWExUX0NvbG9yVGhlbWUsXG4gIHBhcmVudEVsOiBIVE1MRGl2RWxlbWVudFxuKSA9PiAocDogcDUpID0+IHZvaWQ7XG5cbnR5cGUgTFhMVF9EaGFybWFDYW52YXNDaGFyID0ge1xuICBsZXR0ZXI6IHN0cmluZztcbiAgY291bnQ6IG51bWJlcjtcbiAgaWR4OiBudW1iZXI7XG5cbiAgY29waWVzOiBudW1iZXI7XG4gIGNvcGllc0xhc3RWaXNpYmxlOiBudW1iZXI7XG4gIGNvcGllc0FyZVZpc2libGU6IGJvb2xlYW47XG5cbiAgY29waWVzQXJlSW5jcmVtZW50aW5nOiBib29sZWFuO1xuICBjb3BpZXNBcmVEZWNyZW1lbnRpbmc6IGJvb2xlYW47XG5cbiAgY291bnRJc0luY3JlbWVudGluZzogYm9vbGVhbjtcbiAgY291bnRJc0RlY3JlbWVudGluZzogYm9vbGVhbjtcbn07XG5cbmNvbnN0IERoYXJtYUNhbnZhc0Rpc3BsYXk6IExYTFRfRGhhcm1hQ2FudmFzRGlzcGxheSA9IChcbiAgVyxcbiAgSCxcbiAgSUQsXG4gIC8vIERoYXJtYVRoZW1lLFxuICBwYXJlbnRFbFxuKSA9PiAocDogcDUpID0+IHtcbiAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAvLyBDb25maWdcblxuICBsZXQgY2FudmFzO1xuXG4gIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gRm9udHNcbiAgbGV0IGRoYXJtYUZvbnQ6IEZvbnQ7XG5cbiAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAvLyBUeXBvZ3JhcGh5XG4gIGxldCB0ZXh0ID0gXCJMQVhcIjtcblxuICBsZXQgc3BsaXRDaGFyYWN0ZXJBcnJheSA9IHRleHQuc3BsaXQoXCJcIik7XG4gIGxldCBjaGFyYWN0ZXJzOiBMWExUX0RoYXJtYUNhbnZhc0NoYXJbXSA9IHNwbGl0Q2hhcmFjdGVyQXJyYXkubWFwKFxuICAgIChjaGFyYWN0ZXI6IHN0cmluZywgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxldHRlcjogY2hhcmFjdGVyLFxuICAgICAgICBjb3VudDogMSxcbiAgICAgICAgaWR4OiBpZHgsXG5cbiAgICAgICAgY29waWVzOiA1LFxuICAgICAgICBjb3BpZXNMYXN0VmlzaWJsZTogMCxcbiAgICAgICAgY29waWVzQXJlVmlzaWJsZTogZmFsc2UsXG5cbiAgICAgICAgY291bnRJc0luY3JlbWVudGluZzogdHJ1ZSxcbiAgICAgICAgY291bnRJc0RlY3JlbWVudGluZzogZmFsc2UsXG5cbiAgICAgICAgY29waWVzQXJlSW5jcmVtZW50aW5nOiB0cnVlLFxuICAgICAgICBjb3BpZXNBcmVEZWNyZW1lbnRpbmc6IGZhbHNlLFxuICAgICAgfTtcbiAgICB9XG4gICk7XG5cbiAgbGV0IGlzVGFibGV0OiBib29sZWFuID0gVyA8IEJhc2UuTWVkaWEuV2lkdGguTWQ7XG5cbiAgbGV0IGNoYXJhY3RlckNvdW50OiBudW1iZXIgPSBzcGxpdENoYXJhY3RlckFycmF5Lmxlbmd0aDtcbiAgbGV0IGNoYXJhY3RlcldpZHRoOiBudW1iZXIgPSBXIC8gY2hhcmFjdGVyQ291bnQ7XG4gIGxldCBjaGFyYWN0ZXJTaXplOiBudW1iZXIgPSAhaXNUYWJsZXQgPyBIICogMS4xNSA6IEggKiAxO1xuXG4gIGxldCB2ZXJ0aWNhbFNrZXdEaXZpc2libGU6IG51bWJlciA9ICFpc1RhYmxldCA/IDIuNzUgOiAyO1xuICBsZXQgY2hhcmFjdGVyU2tld0RpdmlzaWJsZTogbnVtYmVyID0gMS4zNjtcblxuICBjb25zb2xlLmxvZyhjaGFyYWN0ZXJTaXplLCBcImNoYXJhY3RlclNpemVcIik7XG5cbiAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAvLyBDb3VudHNcbiAgLy8gbGV0IHJlbmRlckNvdW50OiBudW1iZXIgPSAwO1xuICBsZXQgcHJldmlvdXNDb3VudFVwZGF0ZVRpbWU6IG51bWJlciA9IDA7XG4gIGxldCBwcmV2aW91c0NvcHlVcGRhdGVUaW1lOiBudW1iZXIgPSAwO1xuXG4gIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gU3Ryb2tlc1xuICBsZXQgc3Ryb2tlV2lkdGg6IG51bWJlciA9ICFpc1RhYmxldCA/IDQgOiAyO1xuICBsZXQgc3Ryb2tlT2Zmc2V0OiBudW1iZXIgPSAhaXNUYWJsZXQgPyBzdHJva2VXaWR0aCAqIDEuNSA6IHN0cm9rZVdpZHRoICogMS4yNTtcblxuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIExpbWl0c1xuICBsZXQgbWF4Q291bnQgPSAzO1xuICBsZXQgbWluQ291bnQgPSAxO1xuXG4gIGxldCBtYXhDb3BpZXMgPSAhaXNUYWJsZXQgPyAxMiA6IDc7XG4gIGxldCBtaW5Db3BpZXMgPSAxO1xuXG4gIGxldCBmcmFtZVJhdGUgPSA2MDtcblxuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIFRyYW5zbGF0aW9uXG4gIC8vIGxldCBwcmV2aW91c1ZlcnRpY2FsVHJhbnNsYXRpb246IG51bWJlciA9IEggLyAyLjI1O1xuXG4gIGxldCB2ZXJ0aWNhbFRyYW5zbGF0aW9uV2hpdGVzcGFjZUNvbXBlbnNhdGlvbjogbnVtYmVyID0gMi4yNTtcbiAgY29uc3QgcHJldmlvdXNIb3Jpem9udGFsVHJhbnNsYXRpb24gPSAoaWR4OiBudW1iZXIpID0+XG4gICAgLTYwICsgKGNoYXJhY3RlcldpZHRoICogaWR4ICsgY2hhcmFjdGVyV2lkdGggLyAxLjUgKyBzdHJva2VPZmZzZXQpO1xuXG4gIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gUHJlbG9hZFxuICBwLnByZWxvYWQgPSAoKSA9PiB7XG4gICAgZGhhcm1hRm9udCA9IHAubG9hZEZvbnQoYC9mb250cy9kaGFybWEvZGhhcm1hX3JlZ3VsYXIudHRmYCk7XG4gIH07XG5cbiAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAvLyBTZXR1cFxuICBwLnNldHVwID0gKCkgPT4ge1xuICAgIC8vIE91ciBDYW52YXNcbiAgICBjYW52YXMgPSBwLmNyZWF0ZUNhbnZhcyhXLCBIKTtcblxuICAgIC8vIFRocmVlV2F0ZXJDYW52YXMocGFyZW50RWwsIGNhbnZhcy5lbHQpO1xuXG4gICAgcC5mcmFtZVJhdGUoZnJhbWVSYXRlKTtcblxuICAgIGlmICh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA+IDEgJiYgd2luZG93LmRldmljZVBpeGVsUmF0aW8gPCAzKSB7XG4gICAgICBwLnBpeGVsRGVuc2l0eSgxLjI1KTtcbiAgICB9XG4gIH07XG5cbiAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAvLyBVcGRhdGUgQ2hhcmFjdGVyXG4gIGNvbnN0IHVwZGF0ZUNoYXJhY3RlciA9IChjaGFyOiBMWExUX0RoYXJtYUNhbnZhc0NoYXIsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgaWYgKGNoYXIuY291bnQgPCBtYXhDb3VudCAmJiBjaGFyLmNvdW50SXNJbmNyZW1lbnRpbmcpIHtcbiAgICAgIGNoYXJhY3RlcnNbaWR4XSA9IHtcbiAgICAgICAgLi4uY2hhcixcbiAgICAgICAgY291bnQ6IGNoYXIuY291bnQgKyAxLFxuICAgICAgfTtcblxuICAgICAgcHJldmlvdXNDb3VudFVwZGF0ZVRpbWUgPSBwLm1pbGxpcygpO1xuXG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChjaGFyLmNvdW50ID09PSBtYXhDb3VudCkge1xuICAgICAgY2hhcmFjdGVyc1tpZHhdID0ge1xuICAgICAgICAuLi5jaGFyLFxuICAgICAgICBjb3VudDogY2hhci5jb3VudCAtIDEsXG4gICAgICAgIGNvdW50SXNJbmNyZW1lbnRpbmc6IGZhbHNlLFxuICAgICAgICBjb3VudElzRGVjcmVtZW50aW5nOiB0cnVlLFxuICAgICAgfTtcblxuICAgICAgcHJldmlvdXNDb3VudFVwZGF0ZVRpbWUgPSBwLm1pbGxpcygpO1xuXG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChjaGFyLmNvdW50ID4gbWluQ291bnQgJiYgY2hhci5jb3VudElzRGVjcmVtZW50aW5nKSB7XG4gICAgICBjaGFyYWN0ZXJzW2lkeF0gPSB7XG4gICAgICAgIC4uLmNoYXIsXG4gICAgICAgIGNvdW50OiBjaGFyLmNvdW50IC0gMSxcbiAgICAgICAgY291bnRJc0RlY3JlbWVudGluZzogdHJ1ZSxcbiAgICAgIH07XG5cbiAgICAgIHByZXZpb3VzQ291bnRVcGRhdGVUaW1lID0gcC5taWxsaXMoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoY2hhci5jb3VudCA9PT0gbWluQ291bnQgJiYgY2hhci5jb3VudElzRGVjcmVtZW50aW5nKSB7XG4gICAgICBjaGFyYWN0ZXJzW2lkeF0gPSB7XG4gICAgICAgIC4uLmNoYXIsXG4gICAgICAgIGNvdW50OiBjaGFyLmNvdW50ICsgMSxcbiAgICAgICAgY291bnRJc0luY3JlbWVudGluZzogdHJ1ZSxcbiAgICAgICAgY291bnRJc0RlY3JlbWVudGluZzogZmFsc2UsXG4gICAgICB9O1xuXG4gICAgICBwcmV2aW91c0NvdW50VXBkYXRlVGltZSA9IHAubWlsbGlzKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH07XG5cbiAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAvLyBVcGRhdGUgQ29waWVzXG4gIGNvbnN0IHVwZGF0ZUNvcGllcyA9IChjaGFyOiBMWExUX0RoYXJtYUNhbnZhc0NoYXIsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgaWYgKGNoYXIuY29waWVzIDwgbWF4Q29waWVzICYmIGNoYXIuY29waWVzQXJlSW5jcmVtZW50aW5nKSB7XG4gICAgICBjaGFyYWN0ZXJzW2lkeF0gPSB7XG4gICAgICAgIC4uLmNoYXIsXG4gICAgICAgIGNvcGllczogY2hhci5jb3BpZXMgKyAxLFxuICAgICAgfTtcblxuICAgICAgcHJldmlvdXNDb3B5VXBkYXRlVGltZSA9IHAubWlsbGlzKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGNoYXIuY29waWVzID09PSBtYXhDb3BpZXMpIHtcbiAgICAgIGNoYXJhY3RlcnNbaWR4XSA9IHtcbiAgICAgICAgLi4uY2hhcixcbiAgICAgICAgY29waWVzOiBjaGFyLmNvcGllcyAtIDEsXG4gICAgICAgIGNvcGllc0FyZUluY3JlbWVudGluZzogZmFsc2UsXG4gICAgICAgIGNvcGllc0FyZURlY3JlbWVudGluZzogdHJ1ZSxcbiAgICAgIH07XG5cbiAgICAgIHByZXZpb3VzQ29weVVwZGF0ZVRpbWUgPSBwLm1pbGxpcygpO1xuXG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChjaGFyLmNvcGllcyA+IG1pbkNvcGllcyAmJiBjaGFyLmNvcGllc0FyZURlY3JlbWVudGluZykge1xuICAgICAgY2hhcmFjdGVyc1tpZHhdID0ge1xuICAgICAgICAuLi5jaGFyLFxuICAgICAgICBjb3BpZXM6IGNoYXIuY29waWVzIC0gMSxcbiAgICAgICAgY29waWVzQXJlRGVjcmVtZW50aW5nOiB0cnVlLFxuICAgICAgfTtcblxuICAgICAgcHJldmlvdXNDb3B5VXBkYXRlVGltZSA9IHAubWlsbGlzKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGNoYXIuY29waWVzID09PSBtaW5Db3BpZXMgJiYgY2hhci5jb3BpZXNBcmVEZWNyZW1lbnRpbmcpIHtcbiAgICAgIGNoYXJhY3RlcnNbaWR4XSA9IHtcbiAgICAgICAgLi4uY2hhcixcbiAgICAgICAgY29waWVzOiBjaGFyLmNvcGllcyArIDEsXG4gICAgICAgIGNvcGllc0FyZUluY3JlbWVudGluZzogdHJ1ZSxcbiAgICAgICAgY29waWVzQXJlRGVjcmVtZW50aW5nOiBmYWxzZSxcbiAgICAgIH07XG5cbiAgICAgIHByZXZpb3VzQ29weVVwZGF0ZVRpbWUgPSBwLm1pbGxpcygpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9O1xuXG4gIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gRHJhd1xuICBwLmRyYXcgPSAoKSA9PiB7XG4gICAgaWYgKHAuZnJhbWVDb3VudCAlIDEwID09PSAwICYmICF3aW5kb3cuZGhhcm1hUGF1c2VkKSB7XG4gICAgICBwLmJhY2tncm91bmQod2luZG93LmxheGFsdFVuaXZlcnNhbFRoZW1lLmJhY2tncm91bmQpO1xuICAgICAgcC50ZXh0Rm9udChkaGFybWFGb250KTtcbiAgICAgIHAudGV4dFNpemUoY2hhcmFjdGVyU2l6ZSk7XG4gICAgICBwLnRleHRBbGlnbihwLkNFTlRFUiwgcC5DRU5URVIpO1xuICAgICAgcC5maWxsKGAke3dpbmRvdy5sYXhhbHRVbml2ZXJzYWxUaGVtZS5mb3JlZ3JvdW5kfWApO1xuICAgICAgcC5zdHJva2VXZWlnaHQoc3Ryb2tlV2lkdGgpO1xuICAgICAgcC5zdHJva2Uod2luZG93LmxheGFsdFVuaXZlcnNhbFRoZW1lLmJhY2tncm91bmQpO1xuXG4gICAgICBpZiAoSCAmJiBXKSB7XG4gICAgICAgIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBvdXIgY29waWVzXG4gICAgICAgIGNoYXJhY3RlcnMubWFwKChjaGFyOiBMWExUX0RoYXJtYUNhbnZhc0NoYXIsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgcC5zY2FsZSgxLCAxKTtcblxuICAgICAgICAgIGxldCByYW5kb21DaGFyUGljayA9IE1hdGgucmFuZG9tKCkgPD0gMC41O1xuXG4gICAgICAgICAgaWYgKHJhbmRvbUNoYXJQaWNrKSB7XG4gICAgICAgICAgICB1cGRhdGVDb3BpZXMoY2hhciwgaWR4KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocmFuZG9tQ2hhclBpY2sgJiYgcC5taWxsaXMoKSAtIHByZXZpb3VzQ291bnRVcGRhdGVUaW1lID4gMzAwMCkge1xuICAgICAgICAgICAgdXBkYXRlQ2hhcmFjdGVyKGNoYXIsIGlkeCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IGNvdW50QXJyYXk6IG51bWJlcltdID0gQXJyYXkuZnJvbShBcnJheShjaGFyLmNvdW50KS5rZXlzKCkpO1xuXG4gICAgICAgICAgY291bnRBcnJheSA9IGNvdW50QXJyYXkubWFwKChjb3VudE51bWJlcjogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY291bnROdW1iZXIgKyAxO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgICAgICAgICAvLyBEdXBsaWNhdGUgcG9zaXRpb25zXG4gICAgICAgICAgY291bnRBcnJheS5tYXAoKGNvdW50TnVtYmVyOiBudW1iZXIsIGlkeHg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgbGV0IHZlcnRpY2FsU2NhbGUgPSAxIC8gKGNoYXIuY291bnQgKiAwLjk1KTtcblxuICAgICAgICAgICAgbGV0IGR1cGxpY2F0ZVZlcnRpY2FsUG9zaXRpb246IG51bWJlciA9XG4gICAgICAgICAgICAgIGNoYXIuY291bnQgPT0gMVxuICAgICAgICAgICAgICAgID8gSCAvIHZlcnRpY2FsVHJhbnNsYXRpb25XaGl0ZXNwYWNlQ29tcGVuc2F0aW9uXG4gICAgICAgICAgICAgICAgOiBjaGFyYWN0ZXJTaXplIC8gdmVydGljYWxTa2V3RGl2aXNpYmxlICtcbiAgICAgICAgICAgICAgICAgIChjaGFyYWN0ZXJTaXplIC8gY2hhcmFjdGVyU2tld0RpdmlzaWJsZSkgKiBpZHh4O1xuXG4gICAgICAgICAgICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAgICAgICAgICAgLy8gTWFrZSBjb3BpZXNcbiAgICAgICAgICAgIGxldCBjb3BpZXNBcnJheTogbnVtYmVyW10gPSBBcnJheS5mcm9tKEFycmF5KGNoYXIuY29waWVzKS5rZXlzKCkpO1xuICAgICAgICAgICAgLy8gbGV0IHJhbmRvbUNvcHlQaWNrID0gTWF0aC5yYW5kb20oKSA8PSAwLjU7XG5cbiAgICAgICAgICAgIGNvcGllc0FycmF5ID0gY29waWVzQXJyYXkubWFwKChjb3B5TnVtYmVyOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNvcHlOdW1iZXIgKyAxO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIGxldCByYW5kb21Db3B5UGljayA9IE1hdGgucmFuZG9tKCkgPD0gMC41O1xuICAgICAgICAgICAgLy8gbGV0IGNvcHlUaW1lciA9IHAubWlsbGlzKCkgLSBwcmV2aW91c0NvcGllc1Zpc2libGVUaW1lID4gMjAwMDtcbiAgICAgICAgICAgIHByZXZpb3VzQ29weVVwZGF0ZVRpbWU7XG5cbiAgICAgICAgICAgIC8vIGxldCBpc0ZpcnN0Q291bnQgPSB0cnVlO1xuXG4gICAgICAgICAgICBjb3BpZXNBcnJheS5tYXAoKGNvcHlOdW1iZXI6IG51bWJlciwgaWR4eHg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAvLyBsZXQgY2VudGVyQ29vcmRzWCA9IFcgLyAyO1xuICAgICAgICAgICAgICAvLyBsZXQgY2VudGVyQ29vcmRzWSA9IEggLyAyO1xuXG4gICAgICAgICAgICAgIC8vIGxldCBob3Jpem9udGFsVHJhbnNsYXRlID1cbiAgICAgICAgICAgICAgLy8gICBjb3B5TnVtYmVyICE9PSAxXG4gICAgICAgICAgICAgIC8vICAgICA/IChwcmV2aW91c0hvcml6b250YWxUcmFuc2xhdGlvbihpZHgpICtcbiAgICAgICAgICAgICAgLy8gICAgICAgICAoc3Ryb2tlT2Zmc2V0IC8gKHAubW91c2VYIC8gMTAwKSkgKiBjb3B5TnVtYmVyKVxuICAgICAgICAgICAgICAvLyAgICAgOiBwcmV2aW91c0hvcml6b250YWxUcmFuc2xhdGlvbihpZHgpICtcbiAgICAgICAgICAgICAgLy8gICAgICAgc3Ryb2tlT2Zmc2V0ICogY29weU51bWJlcjtcblxuICAgICAgICAgICAgICAvLyBsZXQgdmVydGljYWxUcmFuc2xhdGUgPVxuICAgICAgICAgICAgICAvLyAgIGNvcHlOdW1iZXIgIT09IDFcbiAgICAgICAgICAgICAgLy8gICAgID8gKGR1cGxpY2F0ZVZlcnRpY2FsUG9zaXRpb24gLSAoc3Ryb2tlT2Zmc2V0IC8gKHAubW91c2VYIC8gMTAwKSkgKiBjb3B5TnVtYmVyKVxuICAgICAgICAgICAgICAvLyAgICAgOiBkdXBsaWNhdGVWZXJ0aWNhbFBvc2l0aW9uIC0gc3Ryb2tlT2Zmc2V0ICogY29weU51bWJlcjtcblxuICAgICAgICAgICAgICBsZXQgaG9yaXpvbnRhbFRyYW5zbGF0ZSA9XG4gICAgICAgICAgICAgICAgcHJldmlvdXNIb3Jpem9udGFsVHJhbnNsYXRpb24oaWR4KSArIHN0cm9rZU9mZnNldCAqIGNvcHlOdW1iZXI7XG5cbiAgICAgICAgICAgICAgbGV0IHZlcnRpY2FsVHJhbnNsYXRlID1cbiAgICAgICAgICAgICAgICBkdXBsaWNhdGVWZXJ0aWNhbFBvc2l0aW9uIC0gc3Ryb2tlT2Zmc2V0ICogY29weU51bWJlcjtcblxuICAgICAgICAgICAgICBwLnB1c2goKTtcbiAgICAgICAgICAgICAgcC5zY2FsZSgxLCB2ZXJ0aWNhbFNjYWxlKTtcbiAgICAgICAgICAgICAgcC50ZXh0KGNoYXIubGV0dGVyLCBob3Jpem9udGFsVHJhbnNsYXRlLCB2ZXJ0aWNhbFRyYW5zbGF0ZSk7XG4gICAgICAgICAgICAgIHAucG9wKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHAud2luZG93UmVzaXplZCA9ICgpID0+IHtcbiAgICBwLnJlc2l6ZUNhbnZhcyhXLCBIKTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERoYXJtYUNhbnZhc0Rpc3BsYXk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sketches/p5/no-water-distort-L.canvas.tsx\n");

/***/ })

})