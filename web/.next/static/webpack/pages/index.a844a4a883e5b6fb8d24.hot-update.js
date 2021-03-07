webpackHotUpdate_N_E("pages/index",{

/***/ "./sketches/p5/no-water-distort-S.canvas.tsx":
/*!***************************************************!*\
  !*** ./sketches/p5/no-water-distort-S.canvas.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _constants_styles_Base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/styles/Base */ \"./constants/styles/Base.tsx\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/**\n *\n * Shader fun\n * @author Peter Laxalt\n *\n */\n\n\nvar DharmaCanvasDisplay = function DharmaCanvasDisplay(W, H, ID, // DharmaTheme,\nparentEl) {\n  return function (p) {\n    // _________________________________________________\n    // Config\n    var canvas; // ____________________________\n    // Fonts\n\n    var dharmaFont; // ____________________________\n    // Typography\n\n    var text = \"ALT\";\n    var splitCharacterArray = text.split(\"\");\n    var characters = splitCharacterArray.map(function (character, idx) {\n      return {\n        letter: character,\n        count: 1,\n        idx: idx,\n        copies: 5,\n        copiesLastVisible: 0,\n        copiesAreVisible: false,\n        countIsIncrementing: true,\n        countIsDecrementing: false,\n        copiesAreIncrementing: true,\n        copiesAreDecrementing: false\n      };\n    });\n    var isTablet = W < _constants_styles_Base__WEBPACK_IMPORTED_MODULE_1__[\"Base\"].Media.Width.Md;\n    var characterCount = splitCharacterArray.length;\n    var characterWidth = W / characterCount;\n    var characterSize = !isTablet ? H * 1.15 : H * 1;\n    var verticalSkewDivisible = !isTablet ? 2.75 : 2;\n    var characterSkewDivisible = 1.36;\n    console.log(characterSize, \"characterSize\"); // ____________________________\n    // Counts\n    // let renderCount: number = 0;\n\n    var previousCountUpdateTime = 0;\n    var previousCopyUpdateTime = 0; // ____________________________\n    // Strokes\n\n    var strokeWidth = 1;\n    var strokeOffset = strokeWidth * 1.5; // ____________________________\n    // Limits\n\n    var maxCount = 3;\n    var minCount = 1;\n    var maxCopies = !isTablet ? 12 : 7;\n    var minCopies = 1;\n    var frameRate = 60; // ____________________________\n    // Translation\n    // let previousVerticalTranslation: number = H / 2.25;\n\n    var verticalTranslationWhitespaceCompensation = 2.25;\n\n    var previousHorizontalTranslation = function previousHorizontalTranslation(idx) {\n      return -60 + (characterWidth * idx + characterWidth / 1.5 + strokeOffset);\n    }; // _________________________________________________\n    // Preload\n\n\n    p.preload = function () {\n      dharmaFont = p.loadFont(\"/fonts/dharma/dharma_regular.ttf\");\n    }; // _________________________________________________\n    // Setup\n\n\n    p.setup = function () {\n      // Our Canvas\n      canvas = p.createCanvas(W, H); // ThreeWaterCanvas(parentEl, canvas.elt);\n\n      p.frameRate(frameRate);\n\n      if (window.devicePixelRatio > 1 && window.devicePixelRatio < 3) {\n        p.pixelDensity(1.25);\n      }\n    }; // _________________________________________________\n    // Update Character\n\n\n    var updateCharacter = function updateCharacter(_char, idx) {\n      if (_char.count < maxCount && _char.countIsIncrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char), {}, {\n          count: _char.count + 1\n        });\n        previousCountUpdateTime = p.millis();\n        return;\n      } else if (_char.count === maxCount) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char), {}, {\n          count: _char.count - 1,\n          countIsIncrementing: false,\n          countIsDecrementing: true\n        });\n        previousCountUpdateTime = p.millis();\n        return;\n      } else if (_char.count > minCount && _char.countIsDecrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char), {}, {\n          count: _char.count - 1,\n          countIsDecrementing: true\n        });\n        previousCountUpdateTime = p.millis();\n        return;\n      } else if (_char.count === minCount && _char.countIsDecrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char), {}, {\n          count: _char.count + 1,\n          countIsIncrementing: true,\n          countIsDecrementing: false\n        });\n        previousCountUpdateTime = p.millis();\n        return;\n      }\n\n      return;\n    }; // _________________________________________________\n    // Update Copies\n\n\n    var updateCopies = function updateCopies(_char2, idx) {\n      if (_char2.copies < maxCopies && _char2.copiesAreIncrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char2), {}, {\n          copies: _char2.copies + 1\n        });\n        previousCopyUpdateTime = p.millis();\n        return;\n      } else if (_char2.copies === maxCopies) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char2), {}, {\n          copies: _char2.copies - 1,\n          copiesAreIncrementing: false,\n          copiesAreDecrementing: true\n        });\n        previousCopyUpdateTime = p.millis();\n        return;\n      } else if (_char2.copies > minCopies && _char2.copiesAreDecrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char2), {}, {\n          copies: _char2.copies - 1,\n          copiesAreDecrementing: true\n        });\n        previousCopyUpdateTime = p.millis();\n        return;\n      } else if (_char2.copies === minCopies && _char2.copiesAreDecrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char2), {}, {\n          copies: _char2.copies + 1,\n          copiesAreIncrementing: true,\n          copiesAreDecrementing: false\n        });\n        previousCopyUpdateTime = p.millis();\n        return;\n      }\n\n      return;\n    }; // _________________________________________________\n    // Draw\n\n\n    p.draw = function () {\n      if (p.frameCount % 10 === 0 && !window.dharmaPaused) {\n        p.background(window.laxaltUniversalTheme.background);\n        p.textFont(dharmaFont);\n        p.textSize(characterSize);\n        p.textAlign(p.CENTER, p.CENTER);\n        p.fill(\"\".concat(window.laxaltUniversalTheme.foreground));\n        p.strokeWeight(strokeWidth);\n        p.stroke(window.laxaltUniversalTheme.background);\n\n        if (H && W) {\n          // _________________________________________\n          // Loop through our copies\n          characters.map(function (_char3, idx) {\n            p.scale(1, 1);\n            var randomCharPick = Math.random() <= 0.5;\n\n            if (randomCharPick) {\n              updateCopies(_char3, idx);\n            }\n\n            if (randomCharPick && p.millis() - previousCountUpdateTime > 3000) {\n              updateCharacter(_char3, idx);\n            }\n\n            var countArray = Array.from(Array(_char3.count).keys());\n            countArray = countArray.map(function (countNumber) {\n              return countNumber + 1;\n            }); // _________________________________________\n            // Duplicate positions\n\n            countArray.map(function (countNumber, idxx) {\n              var verticalScale = 1 / (_char3.count * 0.95);\n              var duplicateVerticalPosition = _char3.count == 1 ? H / verticalTranslationWhitespaceCompensation : characterSize / verticalSkewDivisible + characterSize / characterSkewDivisible * idxx; // _________________________________________\n              // Make copies\n\n              var copiesArray = Array.from(Array(_char3.copies).keys()); // let randomCopyPick = Math.random() <= 0.5;\n\n              copiesArray = copiesArray.map(function (copyNumber) {\n                return copyNumber + 1;\n              }); // let randomCopyPick = Math.random() <= 0.5;\n              // let copyTimer = p.millis() - previousCopiesVisibleTime > 2000;\n\n              previousCopyUpdateTime; // let isFirstCount = true;\n\n              copiesArray.map(function (copyNumber, idxxx) {\n                // let centerCoordsX = W / 2;\n                // let centerCoordsY = H / 2;\n                // let horizontalTranslate =\n                //   copyNumber !== 1\n                //     ? (previousHorizontalTranslation(idx) +\n                //         (strokeOffset / (p.mouseX / 100)) * copyNumber)\n                //     : previousHorizontalTranslation(idx) +\n                //       strokeOffset * copyNumber;\n                // let verticalTranslate =\n                //   copyNumber !== 1\n                //     ? (duplicateVerticalPosition - (strokeOffset / (p.mouseX / 100)) * copyNumber)\n                //     : duplicateVerticalPosition - strokeOffset * copyNumber;\n                var horizontalTranslate = previousHorizontalTranslation(idx) + strokeOffset * copyNumber;\n                var verticalTranslate = duplicateVerticalPosition - strokeOffset * copyNumber;\n                p.push();\n                p.scale(1, verticalScale);\n                p.text(_char3.letter, horizontalTranslate, verticalTranslate);\n                p.pop();\n              });\n            });\n          });\n        }\n      }\n    };\n\n    p.windowResized = function () {\n      p.resizeCanvas(W, H);\n    };\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DharmaCanvasDisplay);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2tldGNoZXMvcDUvbm8td2F0ZXItZGlzdG9ydC1TLmNhbnZhcy50c3g/NjM4MSJdLCJuYW1lcyI6WyJEaGFybWFDYW52YXNEaXNwbGF5IiwiVyIsIkgiLCJJRCIsInBhcmVudEVsIiwicCIsImNhbnZhcyIsImRoYXJtYUZvbnQiLCJ0ZXh0Iiwic3BsaXRDaGFyYWN0ZXJBcnJheSIsInNwbGl0IiwiY2hhcmFjdGVycyIsIm1hcCIsImNoYXJhY3RlciIsImlkeCIsImxldHRlciIsImNvdW50IiwiY29waWVzIiwiY29waWVzTGFzdFZpc2libGUiLCJjb3BpZXNBcmVWaXNpYmxlIiwiY291bnRJc0luY3JlbWVudGluZyIsImNvdW50SXNEZWNyZW1lbnRpbmciLCJjb3BpZXNBcmVJbmNyZW1lbnRpbmciLCJjb3BpZXNBcmVEZWNyZW1lbnRpbmciLCJpc1RhYmxldCIsIkJhc2UiLCJNZWRpYSIsIldpZHRoIiwiTWQiLCJjaGFyYWN0ZXJDb3VudCIsImxlbmd0aCIsImNoYXJhY3RlcldpZHRoIiwiY2hhcmFjdGVyU2l6ZSIsInZlcnRpY2FsU2tld0RpdmlzaWJsZSIsImNoYXJhY3RlclNrZXdEaXZpc2libGUiLCJjb25zb2xlIiwibG9nIiwicHJldmlvdXNDb3VudFVwZGF0ZVRpbWUiLCJwcmV2aW91c0NvcHlVcGRhdGVUaW1lIiwic3Ryb2tlV2lkdGgiLCJzdHJva2VPZmZzZXQiLCJtYXhDb3VudCIsIm1pbkNvdW50IiwibWF4Q29waWVzIiwibWluQ29waWVzIiwiZnJhbWVSYXRlIiwidmVydGljYWxUcmFuc2xhdGlvbldoaXRlc3BhY2VDb21wZW5zYXRpb24iLCJwcmV2aW91c0hvcml6b250YWxUcmFuc2xhdGlvbiIsInByZWxvYWQiLCJsb2FkRm9udCIsInNldHVwIiwiY3JlYXRlQ2FudmFzIiwid2luZG93IiwiZGV2aWNlUGl4ZWxSYXRpbyIsInBpeGVsRGVuc2l0eSIsInVwZGF0ZUNoYXJhY3RlciIsImNoYXIiLCJtaWxsaXMiLCJ1cGRhdGVDb3BpZXMiLCJkcmF3IiwiZnJhbWVDb3VudCIsImRoYXJtYVBhdXNlZCIsImJhY2tncm91bmQiLCJsYXhhbHRVbml2ZXJzYWxUaGVtZSIsInRleHRGb250IiwidGV4dFNpemUiLCJ0ZXh0QWxpZ24iLCJDRU5URVIiLCJmaWxsIiwiZm9yZWdyb3VuZCIsInN0cm9rZVdlaWdodCIsInN0cm9rZSIsInNjYWxlIiwicmFuZG9tQ2hhclBpY2siLCJNYXRoIiwicmFuZG9tIiwiY291bnRBcnJheSIsIkFycmF5IiwiZnJvbSIsImtleXMiLCJjb3VudE51bWJlciIsImlkeHgiLCJ2ZXJ0aWNhbFNjYWxlIiwiZHVwbGljYXRlVmVydGljYWxQb3NpdGlvbiIsImNvcGllc0FycmF5IiwiY29weU51bWJlciIsImlkeHh4IiwiaG9yaXpvbnRhbFRyYW5zbGF0ZSIsInZlcnRpY2FsVHJhbnNsYXRlIiwicHVzaCIsInBvcCIsIndpbmRvd1Jlc2l6ZWQiLCJyZXNpemVDYW52YXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOztBQXNDQSxJQUFNQSxtQkFBNkMsR0FBRyxTQUFoREEsbUJBQWdELENBQ3BEQyxDQURvRCxFQUVwREMsQ0FGb0QsRUFHcERDLEVBSG9ELEVBSXBEO0FBQ0FDLFFBTG9EO0FBQUEsU0FNakQsVUFBQ0MsQ0FBRCxFQUFXO0FBQ2Q7QUFDQTtBQUVBLFFBQUlDLE1BQUosQ0FKYyxDQU1kO0FBQ0E7O0FBQ0EsUUFBSUMsVUFBSixDQVJjLENBVWQ7QUFDQTs7QUFDQSxRQUFJQyxJQUFJLEdBQUcsS0FBWDtBQUVBLFFBQUlDLG1CQUFtQixHQUFHRCxJQUFJLENBQUNFLEtBQUwsQ0FBVyxFQUFYLENBQTFCO0FBQ0EsUUFBSUMsVUFBbUMsR0FBR0YsbUJBQW1CLENBQUNHLEdBQXBCLENBQ3hDLFVBQUNDLFNBQUQsRUFBb0JDLEdBQXBCLEVBQW9DO0FBQ2xDLGFBQU87QUFDTEMsY0FBTSxFQUFFRixTQURIO0FBRUxHLGFBQUssRUFBRSxD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RSxVQUFELEVBQXFCQyxLQUFyQixFQUF1QztBQUNyRDtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxvQkFBSUMsbUJBQW1CLEdBQ3JCeEMsNkJBQTZCLENBQUNqQyxHQUFELENBQTdCLEdBQXFDMEIsWUFBWSxHQUFHNkMsVUFEdEQ7QUFHQSxvQkFBSUcsaUJBQWlCLEdBQ25CTCx5QkFBeUIsR0FBRzNDLFlBQVksR0FBRzZDLFVBRDdDO0FBR0FoRixpQkFBQyxDQUFDb0YsSUFBRjtBQUNBcEYsaUJBQUMsQ0FBQ21FLEtBQUYsQ0FBUSxDQUFSLEVBQVdVLGFBQVg7QUFDQTdFLGlCQUFDLENBQUNHLElBQUYsQ0FBT2dELE1BQUksQ0FBQ3pDLE1BQVosRUFBb0J3RSxtQkFBcEIsRUFBeUNDLGlCQUF6QztBQUNBbkYsaUJBQUMsQ0FBQ3FGLEdBQUY7QUFDRCxlQTFCRDtBQTJCRCxhQW5ERDtBQW9ERCxXQXpFRDtBQTBFRDtBQUNGO0FBQ0YsS0F6RkQ7O0FBMkZBckYsS0FBQyxDQUFDc0YsYUFBRixHQUFrQixZQUFNO0FBQ3RCdEYsT0FBQyxDQUFDdUYsWUFBRixDQUFlM0YsQ0FBZixFQUFrQkMsQ0FBbEI7QUFDRCxLQUZEO0FBR0QsR0F4U3FEO0FBQUEsQ0FBdEQ7O0FBMFNlRixrRkFBZiIsImZpbGUiOiIuL3NrZXRjaGVzL3A1L25vLXdhdGVyLWRpc3RvcnQtUy5jYW52YXMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKlxuICogU2hhZGVyIGZ1blxuICogQGF1dGhvciBQZXRlciBMYXhhbHRcbiAqXG4gKi9cblxuaW1wb3J0IHA1LCB7IEZvbnQgfSBmcm9tIFwicDVcIjtcbmltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL3N0eWxlcy9CYXNlXCI7XG5pbXBvcnQgeyBUaHJlZVdhdGVyQ2FudmFzIH0gZnJvbSBcIi4uL3RocmVlL3RocmVlLXdhdGVyLWRpc3RvcnQuY2FudmFzXCI7XG5cbi8vIEJlZ2luIENvbXBvbmVudFxuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cblxuZXhwb3J0IHR5cGUgTFhMVF9EaGFybWFDYW52YXMgPSB7XG4gIFc6IG51bWJlcjtcbiAgSDogbnVtYmVyO1xuICBJRDogbnVtYmVyO1xuICAvLyBCRzogTFhMVF9Db2xvclRoZW1lO1xuICBwYXJlbnRFbDogSFRNTERpdkVsZW1lbnQ7XG59O1xuXG5leHBvcnQgdHlwZSBMWExUX0RoYXJtYUNhbnZhc0Rpc3BsYXkgPSAoXG4gIFc6IG51bWJlcixcbiAgSDogbnVtYmVyLFxuICBJRDogbnVtYmVyLFxuICAvLyBCRzogTFhMVF9Db2xvclRoZW1lLFxuICBwYXJlbnRFbDogSFRNTERpdkVsZW1lbnRcbikgPT4gKHA6IHA1KSA9PiB2b2lkO1xuXG50eXBlIExYTFRfRGhhcm1hQ2FudmFzQ2hhciA9IHtcbiAgbGV0dGVyOiBzdHJpbmc7XG4gIGNvdW50OiBudW1iZXI7XG4gIGlkeDogbnVtYmVyO1xuXG4gIGNvcGllczogbnVtYmVyO1xuICBjb3BpZXNMYXN0VmlzaWJsZTogbnVtYmVyO1xuICBjb3BpZXNBcmVWaXNpYmxlOiBib29sZWFuO1xuXG4gIGNvcGllc0FyZUluY3JlbWVudGluZzogYm9vbGVhbjtcbiAgY29waWVzQXJlRGVjcmVtZW50aW5nOiBib29sZWFuO1xuXG4gIGNvdW50SXNJbmNyZW1lbnRpbmc6IGJvb2xlYW47XG4gIGNvdW50SXNEZWNyZW1lbnRpbmc6IGJvb2xlYW47XG59O1xuXG5jb25zdCBEaGFybWFDYW52YXNEaXNwbGF5OiBMWExUX0RoYXJtYUNhbnZhc0Rpc3BsYXkgPSAoXG4gIFcsXG4gIEgsXG4gIElELFxuICAvLyBEaGFybWFUaGVtZSxcbiAgcGFyZW50RWxcbikgPT4gKHA6IHA1KSA9PiB7XG4gIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gQ29uZmlnXG5cbiAgbGV0IGNhbnZhcztcblxuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIEZvbnRzXG4gIGxldCBkaGFybWFGb250OiBGb250O1xuXG4gIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gVHlwb2dyYXBoeVxuICBsZXQgdGV4dCA9IFwiQUxUXCI7XG5cbiAgbGV0IHNwbGl0Q2hhcmFjdGVyQXJyYXkgPSB0ZXh0LnNwbGl0KFwiXCIpO1xuICBsZXQgY2hhcmFjdGVyczogTFhMVF9EaGFybWFDYW52YXNDaGFyW10gPSBzcGxpdENoYXJhY3RlckFycmF5Lm1hcChcbiAgICAoY2hhcmFjdGVyOiBzdHJpbmcsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsZXR0ZXI6IGNoYXJhY3RlcixcbiAgICAgICAgY291bnQ6IDEsXG4gICAgICAgIGlkeDogaWR4LFxuXG4gICAgICAgIGNvcGllczogNSxcbiAgICAgICAgY29waWVzTGFzdFZpc2libGU6IDAsXG4gICAgICAgIGNvcGllc0FyZVZpc2libGU6IGZhbHNlLFxuXG4gICAgICAgIGNvdW50SXNJbmNyZW1lbnRpbmc6IHRydWUsXG4gICAgICAgIGNvdW50SXNEZWNyZW1lbnRpbmc6IGZhbHNlLFxuXG4gICAgICAgIGNvcGllc0FyZUluY3JlbWVudGluZzogdHJ1ZSxcbiAgICAgICAgY29waWVzQXJlRGVjcmVtZW50aW5nOiBmYWxzZSxcbiAgICAgIH07XG4gICAgfVxuICApO1xuXG4gIGxldCBpc1RhYmxldDogYm9vbGVhbiA9IFcgPCBCYXNlLk1lZGlhLldpZHRoLk1kO1xuXG4gIGxldCBjaGFyYWN0ZXJDb3VudDogbnVtYmVyID0gc3BsaXRDaGFyYWN0ZXJBcnJheS5sZW5ndGg7XG4gIGxldCBjaGFyYWN0ZXJXaWR0aDogbnVtYmVyID0gVyAvIGNoYXJhY3RlckNvdW50O1xuICBsZXQgY2hhcmFjdGVyU2l6ZTogbnVtYmVyID0gIWlzVGFibGV0ID8gSCAqIDEuMTUgOiBIICogMTtcblxuICBsZXQgdmVydGljYWxTa2V3RGl2aXNpYmxlOiBudW1iZXIgPSAhaXNUYWJsZXQgPyAyLjc1IDogMjtcbiAgbGV0IGNoYXJhY3RlclNrZXdEaXZpc2libGU6IG51bWJlciA9IDEuMzY7XG5cbiAgY29uc29sZS5sb2coY2hhcmFjdGVyU2l6ZSwgXCJjaGFyYWN0ZXJTaXplXCIpO1xuXG4gIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gQ291bnRzXG4gIC8vIGxldCByZW5kZXJDb3VudDogbnVtYmVyID0gMDtcbiAgbGV0IHByZXZpb3VzQ291bnRVcGRhdGVUaW1lOiBudW1iZXIgPSAwO1xuICBsZXQgcHJldmlvdXNDb3B5VXBkYXRlVGltZTogbnVtYmVyID0gMDtcblxuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIFN0cm9rZXNcbiAgbGV0IHN0cm9rZVdpZHRoOiBudW1iZXIgPSAxO1xuICBsZXQgc3Ryb2tlT2Zmc2V0OiBudW1iZXIgPSBzdHJva2VXaWR0aCAqIDEuNTtcblxuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIExpbWl0c1xuICBsZXQgbWF4Q291bnQgPSAzO1xuICBsZXQgbWluQ291bnQgPSAxO1xuXG4gIGxldCBtYXhDb3BpZXMgPSAhaXNUYWJsZXQgPyAxMiA6IDc7XG4gIGxldCBtaW5Db3BpZXMgPSAxO1xuXG4gIGxldCBmcmFtZVJhdGUgPSA2MDtcblxuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIFRyYW5zbGF0aW9uXG4gIC8vIGxldCBwcmV2aW91c1ZlcnRpY2FsVHJhbnNsYXRpb246IG51bWJlciA9IEggLyAyLjI1O1xuXG4gIGxldCB2ZXJ0aWNhbFRyYW5zbGF0aW9uV2hpdGVzcGFjZUNvbXBlbnNhdGlvbjogbnVtYmVyID0gMi4yNTtcbiAgY29uc3QgcHJldmlvdXNIb3Jpem9udGFsVHJhbnNsYXRpb24gPSAoaWR4OiBudW1iZXIpID0+XG4gICAgLTYwICsgKGNoYXJhY3RlcldpZHRoICogaWR4ICsgY2hhcmFjdGVyV2lkdGggLyAxLjUgKyBzdHJva2VPZmZzZXQpO1xuXG4gIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gUHJlbG9hZFxuICBwLnByZWxvYWQgPSAoKSA9PiB7XG4gICAgZGhhcm1hRm9udCA9IHAubG9hZEZvbnQoYC9mb250cy9kaGFybWEvZGhhcm1hX3JlZ3VsYXIudHRmYCk7XG4gIH07XG5cbiAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAvLyBTZXR1cFxuICBwLnNldHVwID0gKCkgPT4ge1xuICAgIC8vIE91ciBDYW52YXNcbiAgICBjYW52YXMgPSBwLmNyZWF0ZUNhbnZhcyhXLCBIKTtcblxuICAgIC8vIFRocmVlV2F0ZXJDYW52YXMocGFyZW50RWwsIGNhbnZhcy5lbHQpO1xuXG4gICAgcC5mcmFtZVJhdGUoZnJhbWVSYXRlKTtcblxuICAgIGlmICh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA+IDEgJiYgd2luZG93LmRldmljZVBpeGVsUmF0aW8gPCAzKSB7XG4gICAgICBwLnBpeGVsRGVuc2l0eSgxLjI1KTtcbiAgICB9XG4gIH07XG5cbiAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAvLyBVcGRhdGUgQ2hhcmFjdGVyXG4gIGNvbnN0IHVwZGF0ZUNoYXJhY3RlciA9IChjaGFyOiBMWExUX0RoYXJtYUNhbnZhc0NoYXIsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgaWYgKGNoYXIuY291bnQgPCBtYXhDb3VudCAmJiBjaGFyLmNvdW50SXNJbmNyZW1lbnRpbmcpIHtcbiAgICAgIGNoYXJhY3RlcnNbaWR4XSA9IHtcbiAgICAgICAgLi4uY2hhcixcbiAgICAgICAgY291bnQ6IGNoYXIuY291bnQgKyAxLFxuICAgICAgfTtcblxuICAgICAgcHJldmlvdXNDb3VudFVwZGF0ZVRpbWUgPSBwLm1pbGxpcygpO1xuXG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChjaGFyLmNvdW50ID09PSBtYXhDb3VudCkge1xuICAgICAgY2hhcmFjdGVyc1tpZHhdID0ge1xuICAgICAgICAuLi5jaGFyLFxuICAgICAgICBjb3VudDogY2hhci5jb3VudCAtIDEsXG4gICAgICAgIGNvdW50SXNJbmNyZW1lbnRpbmc6IGZhbHNlLFxuICAgICAgICBjb3VudElzRGVjcmVtZW50aW5nOiB0cnVlLFxuICAgICAgfTtcblxuICAgICAgcHJldmlvdXNDb3VudFVwZGF0ZVRpbWUgPSBwLm1pbGxpcygpO1xuXG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChjaGFyLmNvdW50ID4gbWluQ291bnQgJiYgY2hhci5jb3VudElzRGVjcmVtZW50aW5nKSB7XG4gICAgICBjaGFyYWN0ZXJzW2lkeF0gPSB7XG4gICAgICAgIC4uLmNoYXIsXG4gICAgICAgIGNvdW50OiBjaGFyLmNvdW50IC0gMSxcbiAgICAgICAgY291bnRJc0RlY3JlbWVudGluZzogdHJ1ZSxcbiAgICAgIH07XG5cbiAgICAgIHByZXZpb3VzQ291bnRVcGRhdGVUaW1lID0gcC5taWxsaXMoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoY2hhci5jb3VudCA9PT0gbWluQ291bnQgJiYgY2hhci5jb3VudElzRGVjcmVtZW50aW5nKSB7XG4gICAgICBjaGFyYWN0ZXJzW2lkeF0gPSB7XG4gICAgICAgIC4uLmNoYXIsXG4gICAgICAgIGNvdW50OiBjaGFyLmNvdW50ICsgMSxcbiAgICAgICAgY291bnRJc0luY3JlbWVudGluZzogdHJ1ZSxcbiAgICAgICAgY291bnRJc0RlY3JlbWVudGluZzogZmFsc2UsXG4gICAgICB9O1xuXG4gICAgICBwcmV2aW91c0NvdW50VXBkYXRlVGltZSA9IHAubWlsbGlzKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH07XG5cbiAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAvLyBVcGRhdGUgQ29waWVzXG4gIGNvbnN0IHVwZGF0ZUNvcGllcyA9IChjaGFyOiBMWExUX0RoYXJtYUNhbnZhc0NoYXIsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgaWYgKGNoYXIuY29waWVzIDwgbWF4Q29waWVzICYmIGNoYXIuY29waWVzQXJlSW5jcmVtZW50aW5nKSB7XG4gICAgICBjaGFyYWN0ZXJzW2lkeF0gPSB7XG4gICAgICAgIC4uLmNoYXIsXG4gICAgICAgIGNvcGllczogY2hhci5jb3BpZXMgKyAxLFxuICAgICAgfTtcblxuICAgICAgcHJldmlvdXNDb3B5VXBkYXRlVGltZSA9IHAubWlsbGlzKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGNoYXIuY29waWVzID09PSBtYXhDb3BpZXMpIHtcbiAgICAgIGNoYXJhY3RlcnNbaWR4XSA9IHtcbiAgICAgICAgLi4uY2hhcixcbiAgICAgICAgY29waWVzOiBjaGFyLmNvcGllcyAtIDEsXG4gICAgICAgIGNvcGllc0FyZUluY3JlbWVudGluZzogZmFsc2UsXG4gICAgICAgIGNvcGllc0FyZURlY3JlbWVudGluZzogdHJ1ZSxcbiAgICAgIH07XG5cbiAgICAgIHByZXZpb3VzQ29weVVwZGF0ZVRpbWUgPSBwLm1pbGxpcygpO1xuXG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChjaGFyLmNvcGllcyA+IG1pbkNvcGllcyAmJiBjaGFyLmNvcGllc0FyZURlY3JlbWVudGluZykge1xuICAgICAgY2hhcmFjdGVyc1tpZHhdID0ge1xuICAgICAgICAuLi5jaGFyLFxuICAgICAgICBjb3BpZXM6IGNoYXIuY29waWVzIC0gMSxcbiAgICAgICAgY29waWVzQXJlRGVjcmVtZW50aW5nOiB0cnVlLFxuICAgICAgfTtcblxuICAgICAgcHJldmlvdXNDb3B5VXBkYXRlVGltZSA9IHAubWlsbGlzKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGNoYXIuY29waWVzID09PSBtaW5Db3BpZXMgJiYgY2hhci5jb3BpZXNBcmVEZWNyZW1lbnRpbmcpIHtcbiAgICAgIGNoYXJhY3RlcnNbaWR4XSA9IHtcbiAgICAgICAgLi4uY2hhcixcbiAgICAgICAgY29waWVzOiBjaGFyLmNvcGllcyArIDEsXG4gICAgICAgIGNvcGllc0FyZUluY3JlbWVudGluZzogdHJ1ZSxcbiAgICAgICAgY29waWVzQXJlRGVjcmVtZW50aW5nOiBmYWxzZSxcbiAgICAgIH07XG5cbiAgICAgIHByZXZpb3VzQ29weVVwZGF0ZVRpbWUgPSBwLm1pbGxpcygpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9O1xuXG4gIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gRHJhd1xuICBwLmRyYXcgPSAoKSA9PiB7XG4gICAgaWYgKHAuZnJhbWVDb3VudCAlIDEwID09PSAwICYmICF3aW5kb3cuZGhhcm1hUGF1c2VkKSB7XG4gICAgICBwLmJhY2tncm91bmQod2luZG93LmxheGFsdFVuaXZlcnNhbFRoZW1lLmJhY2tncm91bmQpO1xuICAgICAgcC50ZXh0Rm9udChkaGFybWFGb250KTtcbiAgICAgIHAudGV4dFNpemUoY2hhcmFjdGVyU2l6ZSk7XG4gICAgICBwLnRleHRBbGlnbihwLkNFTlRFUiwgcC5DRU5URVIpO1xuICAgICAgcC5maWxsKGAke3dpbmRvdy5sYXhhbHRVbml2ZXJzYWxUaGVtZS5mb3JlZ3JvdW5kfWApO1xuICAgICAgcC5zdHJva2VXZWlnaHQoc3Ryb2tlV2lkdGgpO1xuICAgICAgcC5zdHJva2Uod2luZG93LmxheGFsdFVuaXZlcnNhbFRoZW1lLmJhY2tncm91bmQpO1xuXG4gICAgICBpZiAoSCAmJiBXKSB7XG4gICAgICAgIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBvdXIgY29waWVzXG4gICAgICAgIGNoYXJhY3RlcnMubWFwKChjaGFyOiBMWExUX0RoYXJtYUNhbnZhc0NoYXIsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgcC5zY2FsZSgxLCAxKTtcblxuICAgICAgICAgIGxldCByYW5kb21DaGFyUGljayA9IE1hdGgucmFuZG9tKCkgPD0gMC41O1xuXG4gICAgICAgICAgaWYgKHJhbmRvbUNoYXJQaWNrKSB7XG4gICAgICAgICAgICB1cGRhdGVDb3BpZXMoY2hhciwgaWR4KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocmFuZG9tQ2hhclBpY2sgJiYgcC5taWxsaXMoKSAtIHByZXZpb3VzQ291bnRVcGRhdGVUaW1lID4gMzAwMCkge1xuICAgICAgICAgICAgdXBkYXRlQ2hhcmFjdGVyKGNoYXIsIGlkeCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IGNvdW50QXJyYXk6IG51bWJlcltdID0gQXJyYXkuZnJvbShBcnJheShjaGFyLmNvdW50KS5rZXlzKCkpO1xuXG4gICAgICAgICAgY291bnRBcnJheSA9IGNvdW50QXJyYXkubWFwKChjb3VudE51bWJlcjogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY291bnROdW1iZXIgKyAxO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgICAgICAgICAvLyBEdXBsaWNhdGUgcG9zaXRpb25zXG4gICAgICAgICAgY291bnRBcnJheS5tYXAoKGNvdW50TnVtYmVyOiBudW1iZXIsIGlkeHg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgbGV0IHZlcnRpY2FsU2NhbGUgPSAxIC8gKGNoYXIuY291bnQgKiAwLjk1KTtcblxuICAgICAgICAgICAgbGV0IGR1cGxpY2F0ZVZlcnRpY2FsUG9zaXRpb246IG51bWJlciA9XG4gICAgICAgICAgICAgIGNoYXIuY291bnQgPT0gMVxuICAgICAgICAgICAgICAgID8gSCAvIHZlcnRpY2FsVHJhbnNsYXRpb25XaGl0ZXNwYWNlQ29tcGVuc2F0aW9uXG4gICAgICAgICAgICAgICAgOiBjaGFyYWN0ZXJTaXplIC8gdmVydGljYWxTa2V3RGl2aXNpYmxlICtcbiAgICAgICAgICAgICAgICAgIChjaGFyYWN0ZXJTaXplIC8gY2hhcmFjdGVyU2tld0RpdmlzaWJsZSkgKiBpZHh4O1xuXG4gICAgICAgICAgICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAgICAgICAgICAgLy8gTWFrZSBjb3BpZXNcbiAgICAgICAgICAgIGxldCBjb3BpZXNBcnJheTogbnVtYmVyW10gPSBBcnJheS5mcm9tKEFycmF5KGNoYXIuY29waWVzKS5rZXlzKCkpO1xuICAgICAgICAgICAgLy8gbGV0IHJhbmRvbUNvcHlQaWNrID0gTWF0aC5yYW5kb20oKSA8PSAwLjU7XG5cbiAgICAgICAgICAgIGNvcGllc0FycmF5ID0gY29waWVzQXJyYXkubWFwKChjb3B5TnVtYmVyOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNvcHlOdW1iZXIgKyAxO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIGxldCByYW5kb21Db3B5UGljayA9IE1hdGgucmFuZG9tKCkgPD0gMC41O1xuICAgICAgICAgICAgLy8gbGV0IGNvcHlUaW1lciA9IHAubWlsbGlzKCkgLSBwcmV2aW91c0NvcGllc1Zpc2libGVUaW1lID4gMjAwMDtcbiAgICAgICAgICAgIHByZXZpb3VzQ29weVVwZGF0ZVRpbWU7XG5cbiAgICAgICAgICAgIC8vIGxldCBpc0ZpcnN0Q291bnQgPSB0cnVlO1xuXG4gICAgICAgICAgICBjb3BpZXNBcnJheS5tYXAoKGNvcHlOdW1iZXI6IG51bWJlciwgaWR4eHg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAvLyBsZXQgY2VudGVyQ29vcmRzWCA9IFcgLyAyO1xuICAgICAgICAgICAgICAvLyBsZXQgY2VudGVyQ29vcmRzWSA9IEggLyAyO1xuXG4gICAgICAgICAgICAgIC8vIGxldCBob3Jpem9udGFsVHJhbnNsYXRlID1cbiAgICAgICAgICAgICAgLy8gICBjb3B5TnVtYmVyICE9PSAxXG4gICAgICAgICAgICAgIC8vICAgICA/IChwcmV2aW91c0hvcml6b250YWxUcmFuc2xhdGlvbihpZHgpICtcbiAgICAgICAgICAgICAgLy8gICAgICAgICAoc3Ryb2tlT2Zmc2V0IC8gKHAubW91c2VYIC8gMTAwKSkgKiBjb3B5TnVtYmVyKVxuICAgICAgICAgICAgICAvLyAgICAgOiBwcmV2aW91c0hvcml6b250YWxUcmFuc2xhdGlvbihpZHgpICtcbiAgICAgICAgICAgICAgLy8gICAgICAgc3Ryb2tlT2Zmc2V0ICogY29weU51bWJlcjtcblxuICAgICAgICAgICAgICAvLyBsZXQgdmVydGljYWxUcmFuc2xhdGUgPVxuICAgICAgICAgICAgICAvLyAgIGNvcHlOdW1iZXIgIT09IDFcbiAgICAgICAgICAgICAgLy8gICAgID8gKGR1cGxpY2F0ZVZlcnRpY2FsUG9zaXRpb24gLSAoc3Ryb2tlT2Zmc2V0IC8gKHAubW91c2VYIC8gMTAwKSkgKiBjb3B5TnVtYmVyKVxuICAgICAgICAgICAgICAvLyAgICAgOiBkdXBsaWNhdGVWZXJ0aWNhbFBvc2l0aW9uIC0gc3Ryb2tlT2Zmc2V0ICogY29weU51bWJlcjtcblxuICAgICAgICAgICAgICBsZXQgaG9yaXpvbnRhbFRyYW5zbGF0ZSA9XG4gICAgICAgICAgICAgICAgcHJldmlvdXNIb3Jpem9udGFsVHJhbnNsYXRpb24oaWR4KSArIHN0cm9rZU9mZnNldCAqIGNvcHlOdW1iZXI7XG5cbiAgICAgICAgICAgICAgbGV0IHZlcnRpY2FsVHJhbnNsYXRlID1cbiAgICAgICAgICAgICAgICBkdXBsaWNhdGVWZXJ0aWNhbFBvc2l0aW9uIC0gc3Ryb2tlT2Zmc2V0ICogY29weU51bWJlcjtcblxuICAgICAgICAgICAgICBwLnB1c2goKTtcbiAgICAgICAgICAgICAgcC5zY2FsZSgxLCB2ZXJ0aWNhbFNjYWxlKTtcbiAgICAgICAgICAgICAgcC50ZXh0KGNoYXIubGV0dGVyLCBob3Jpem9udGFsVHJhbnNsYXRlLCB2ZXJ0aWNhbFRyYW5zbGF0ZSk7XG4gICAgICAgICAgICAgIHAucG9wKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHAud2luZG93UmVzaXplZCA9ICgpID0+IHtcbiAgICBwLnJlc2l6ZUNhbnZhcyhXLCBIKTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERoYXJtYUNhbnZhc0Rpc3BsYXk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sketches/p5/no-water-distort-S.canvas.tsx\n");

/***/ })

})