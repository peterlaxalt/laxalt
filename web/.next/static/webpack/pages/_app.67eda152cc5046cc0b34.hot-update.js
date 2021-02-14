webpackHotUpdate_N_E("pages/_app",{

/***/ "./sketches/p5/no-water-distort-L.canvas.tsx":
/*!***************************************************!*\
  !*** ./sketches/p5/no-water-distort-L.canvas.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/**\n *\n * Shader fun\n * @author Peter Laxalt\n *\n */\n// Begin Component\n// __________________________________________________________________________\nvar DharmaCanvasDisplay = function DharmaCanvasDisplay(W, H, ID, // DharmaTheme,\nparentEl) {\n  return function (p) {\n    // _________________________________________________\n    // Config\n    var canvas; // ____________________________\n    // Fonts\n\n    var dharmaFont; // ____________________________\n    // Typography\n\n    var text = \"L\";\n    var splitCharacterArray = text.split(\"\");\n    var characters = splitCharacterArray.map(function (character, idx) {\n      return {\n        letter: character,\n        count: 1,\n        idx: idx,\n        copies: 5,\n        copiesLastVisible: 0,\n        copiesAreVisible: false,\n        countIsIncrementing: true,\n        countIsDecrementing: false,\n        copiesAreIncrementing: true,\n        copiesAreDecrementing: false\n      };\n    });\n    var characterCount = splitCharacterArray.length;\n    var characterWidth = W / characterCount;\n    var characterSize = H * 1.15;\n    var verticalSkewDivisible = 2.75;\n    var characterSkewDivisible = 1.36;\n    console.log(characterSize, \"characterSize\"); // ____________________________\n    // Counts\n    // let renderCount: number = 0;\n\n    var previousCountUpdateTime = 0;\n    var previousCopyUpdateTime = 0; // ____________________________\n    // Strokes\n\n    var strokeWidth = 4;\n    var strokeOffset = strokeWidth * 1.5; // ____________________________\n    // Limits\n\n    var maxCount = 3;\n    var minCount = 1;\n    var maxCopies = 12;\n    var minCopies = 1;\n    var frameRate = 60; // ____________________________\n    // Translation\n    // let previousVerticalTranslation: number = H / 2.25;\n\n    var verticalTranslationWhitespaceCompensation = 2.25;\n\n    var previousHorizontalTranslation = function previousHorizontalTranslation(idx) {\n      return -60 + (characterWidth * idx + characterWidth / 1.5 + strokeOffset);\n    }; // _________________________________________________\n    // Preload\n\n\n    p.preload = function () {\n      dharmaFont = p.loadFont(\"/fonts/dharma/dharma_regular.ttf\");\n    }; // _________________________________________________\n    // Setup\n\n\n    p.setup = function () {\n      // Our Canvas\n      canvas = p.createCanvas(W, H); // ThreeWaterCanvas(parentEl, canvas.elt);\n\n      p.frameRate(frameRate);\n\n      if (window.devicePixelRatio > 1 && window.devicePixelRatio < 3) {\n        p.pixelDensity(1.25);\n      }\n    }; // _________________________________________________\n    // Update Character\n\n\n    var updateCharacter = function updateCharacter(_char, idx) {\n      if (_char.count < maxCount && _char.countIsIncrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char), {}, {\n          count: _char.count + 1\n        });\n        previousCountUpdateTime = p.millis();\n        return;\n      } else if (_char.count === maxCount) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char), {}, {\n          count: _char.count - 1,\n          countIsIncrementing: false,\n          countIsDecrementing: true\n        });\n        previousCountUpdateTime = p.millis();\n        return;\n      } else if (_char.count > minCount && _char.countIsDecrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char), {}, {\n          count: _char.count - 1,\n          countIsDecrementing: true\n        });\n        previousCountUpdateTime = p.millis();\n        return;\n      } else if (_char.count === minCount && _char.countIsDecrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char), {}, {\n          count: _char.count + 1,\n          countIsIncrementing: true,\n          countIsDecrementing: false\n        });\n        previousCountUpdateTime = p.millis();\n        return;\n      }\n\n      return;\n    }; // _________________________________________________\n    // Update Copies\n\n\n    var updateCopies = function updateCopies(_char2, idx) {\n      if (_char2.copies < maxCopies && _char2.copiesAreIncrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char2), {}, {\n          copies: _char2.copies + 1\n        });\n        previousCopyUpdateTime = p.millis();\n        return;\n      } else if (_char2.copies === maxCopies) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char2), {}, {\n          copies: _char2.copies - 1,\n          copiesAreIncrementing: false,\n          copiesAreDecrementing: true\n        });\n        previousCopyUpdateTime = p.millis();\n        return;\n      } else if (_char2.copies > minCopies && _char2.copiesAreDecrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char2), {}, {\n          copies: _char2.copies - 1,\n          copiesAreDecrementing: true\n        });\n        previousCopyUpdateTime = p.millis();\n        return;\n      } else if (_char2.copies === minCopies && _char2.copiesAreDecrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char2), {}, {\n          copies: _char2.copies + 1,\n          copiesAreIncrementing: true,\n          copiesAreDecrementing: false\n        });\n        previousCopyUpdateTime = p.millis();\n        return;\n      }\n\n      return;\n    }; // _________________________________________________\n    // Draw\n\n\n    p.draw = function () {\n      if (p.frameCount % 10 === 0 && !window.dharmaPaused) {\n        p.background(window.laxaltUniversalTheme.background);\n        p.textFont(dharmaFont);\n        p.textSize(characterSize);\n        p.textAlign(p.CENTER, p.CENTER);\n        p.fill(\"\".concat(window.laxaltUniversalTheme.foreground));\n        p.strokeWeight(strokeWidth);\n        p.stroke(window.laxaltUniversalTheme.background);\n\n        if (H && W) {\n          // _________________________________________\n          // Loop through our copies\n          characters.map(function (_char3, idx) {\n            p.scale(1, 1);\n            var randomCharPick = Math.random() <= 0.5;\n\n            if (randomCharPick) {\n              updateCopies(_char3, idx);\n            }\n\n            if (randomCharPick && p.millis() - previousCountUpdateTime > 3000) {\n              updateCharacter(_char3, idx);\n            }\n\n            var countArray = Array.from(Array(_char3.count).keys());\n            countArray = countArray.map(function (countNumber) {\n              return countNumber + 1;\n            }); // _________________________________________\n            // Duplicate positions\n\n            countArray.map(function (countNumber, idxx) {\n              var verticalScale = 1 / (_char3.count * 0.95);\n              var duplicateVerticalPosition = _char3.count == 1 ? H / verticalTranslationWhitespaceCompensation : characterSize / verticalSkewDivisible + characterSize / characterSkewDivisible * idxx; // _________________________________________\n              // Make copies\n\n              var copiesArray = Array.from(Array(_char3.copies).keys()); // let randomCopyPick = Math.random() <= 0.5;\n\n              copiesArray = copiesArray.map(function (copyNumber) {\n                return copyNumber + 1;\n              }); // let randomCopyPick = Math.random() <= 0.5;\n              // let copyTimer = p.millis() - previousCopiesVisibleTime > 2000;\n\n              previousCopyUpdateTime; // let isFirstCount = true;\n\n              copiesArray.map(function (copyNumber, idxxx) {\n                // let centerCoordsX = W / 2;\n                // let centerCoordsY = H / 2;\n                // let horizontalTranslate =\n                //   copyNumber !== 1\n                //     ? (previousHorizontalTranslation(idx) +\n                //         (strokeOffset / (p.mouseX / 100)) * copyNumber)\n                //     : previousHorizontalTranslation(idx) +\n                //       strokeOffset * copyNumber;\n                // let verticalTranslate =\n                //   copyNumber !== 1\n                //     ? (duplicateVerticalPosition - (strokeOffset / (p.mouseX / 100)) * copyNumber)\n                //     : duplicateVerticalPosition - strokeOffset * copyNumber;\n                var horizontalTranslate = previousHorizontalTranslation(idx) + strokeOffset * copyNumber;\n                var verticalTranslate = duplicateVerticalPosition - strokeOffset * copyNumber;\n                p.push();\n                p.scale(1, verticalScale);\n                p.text(_char3.letter, horizontalTranslate, verticalTranslate);\n                p.pop();\n              });\n            });\n          });\n        }\n      }\n    };\n\n    p.windowResized = function () {\n      p.resizeCanvas(W, H);\n    };\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DharmaCanvasDisplay);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2tldGNoZXMvcDUvbm8td2F0ZXItZGlzdG9ydC1MLmNhbnZhcy50c3g/ZjE3ZCJdLCJuYW1lcyI6WyJEaGFybWFDYW52YXNEaXNwbGF5IiwiVyIsIkgiLCJJRCIsInBhcmVudEVsIiwicCIsImNhbnZhcyIsImRoYXJtYUZvbnQiLCJ0ZXh0Iiwic3BsaXRDaGFyYWN0ZXJBcnJheSIsInNwbGl0IiwiY2hhcmFjdGVycyIsIm1hcCIsImNoYXJhY3RlciIsImlkeCIsImxldHRlciIsImNvdW50IiwiY29waWVzIiwiY29waWVzTGFzdFZpc2libGUiLCJjb3BpZXNBcmVWaXNpYmxlIiwiY291bnRJc0luY3JlbWVudGluZyIsImNvdW50SXNEZWNyZW1lbnRpbmciLCJjb3BpZXNBcmVJbmNyZW1lbnRpbmciLCJjb3BpZXNBcmVEZWNyZW1lbnRpbmciLCJjaGFyYWN0ZXJDb3VudCIsImxlbmd0aCIsImNoYXJhY3RlcldpZHRoIiwiY2hhcmFjdGVyU2l6ZSIsInZlcnRpY2FsU2tld0RpdmlzaWJsZSIsImNoYXJhY3RlclNrZXdEaXZpc2libGUiLCJjb25zb2xlIiwibG9nIiwicHJldmlvdXNDb3VudFVwZGF0ZVRpbWUiLCJwcmV2aW91c0NvcHlVcGRhdGVUaW1lIiwic3Ryb2tlV2lkdGgiLCJzdHJva2VPZmZzZXQiLCJtYXhDb3VudCIsIm1pbkNvdW50IiwibWF4Q29waWVzIiwibWluQ29waWVzIiwiZnJhbWVSYXRlIiwidmVydGljYWxUcmFuc2xhdGlvbldoaXRlc3BhY2VDb21wZW5zYXRpb24iLCJwcmV2aW91c0hvcml6b250YWxUcmFuc2xhdGlvbiIsInByZWxvYWQiLCJsb2FkRm9udCIsInNldHVwIiwiY3JlYXRlQ2FudmFzIiwid2luZG93IiwiZGV2aWNlUGl4ZWxSYXRpbyIsInBpeGVsRGVuc2l0eSIsInVwZGF0ZUNoYXJhY3RlciIsImNoYXIiLCJtaWxsaXMiLCJ1cGRhdGVDb3BpZXMiLCJkcmF3IiwiZnJhbWVDb3VudCIsImRoYXJtYVBhdXNlZCIsImJhY2tncm91bmQiLCJsYXhhbHRVbml2ZXJzYWxUaGVtZSIsInRleHRGb250IiwidGV4dFNpemUiLCJ0ZXh0QWxpZ24iLCJDRU5URVIiLCJmaWxsIiwiZm9yZWdyb3VuZCIsInN0cm9rZVdlaWdodCIsInN0cm9rZSIsInNjYWxlIiwicmFuZG9tQ2hhclBpY2siLCJNYXRoIiwicmFuZG9tIiwiY291bnRBcnJheSIsIkFycmF5IiwiZnJvbSIsImtleXMiLCJjb3VudE51bWJlciIsImlkeHgiLCJ2ZXJ0aWNhbFNjYWxlIiwiZHVwbGljYXRlVmVydGljYWxQb3NpdGlvbiIsImNvcGllc0FycmF5IiwiY29weU51bWJlciIsImlkeHh4IiwiaG9yaXpvbnRhbFRyYW5zbGF0ZSIsInZlcnRpY2FsVHJhbnNsYXRlIiwicHVzaCIsInBvcCIsIndpbmRvd1Jlc2l6ZWQiLCJyZXNpemVDYW52YXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQWtDQSxJQUFNQSxtQkFBNkMsR0FBRyxTQUFoREEsbUJBQWdELENBQ3BEQyxDQURvRCxFQUVwREMsQ0FGb0QsRUFHcERDLEVBSG9ELEVBSXBEO0FBQ0FDLFFBTG9EO0FBQUEsU0FNakQsVUFBQ0MsQ0FBRCxFQUFXO0FBQ2Q7QUFDQTtBQUVBLFFBQUlDLE1BQUosQ0FKYyxDQU1kO0FBQ0E7O0FBQ0EsUUFBSUMsVUFBSixDQVJjLENBVWQ7QUFDQTs7QUFDQSxRQUFJQyxJQUFJLEdBQUcsR0FBWDtBQUVBLFFBQUlDLG1CQUFtQixHQUFHRCxJQUFJLENBQUNFLEtBQUwsQ0FBVyxFQUFYLENBQTFCO0FBQ0EsUUFBSUMsVUFBbUMsR0FBR0YsbUJBQW1CLENBQUNHLEdBQXBCLENBQ3hDLFVBQUNDLFNBQUQsRUFBb0JDLEdBQXBCLEVBQW9DO0FBQ2xDLGFBQU87QUFDTEMsY0FBTSxFQUFFRixTQURIO0FBRUxHLGFBQUssRUFBRSxDQUZGO0FBR0xGLFdBQUcsRUFBRUEsR0FIQTtBQUtMRyxjQUFN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QyxVQUQ3QztBQUdBM0UsaUJBQUMsQ0FBQytFLElBQUY7QUFDQS9FLGlCQUFDLENBQUM4RCxLQUFGLENBQVEsQ0FBUixFQUFXVSxhQUFYO0FBQ0F4RSxpQkFBQyxDQUFDRyxJQUFGLENBQU8yQyxNQUFJLENBQUNwQyxNQUFaLEVBQW9CbUUsbUJBQXBCLEVBQXlDQyxpQkFBekM7QUFDQTlFLGlCQUFDLENBQUNnRixHQUFGO0FBQ0QsZUExQkQ7QUEyQkQsYUFuREQ7QUFvREQsV0F6RUQ7QUEwRUQ7QUFDRjtBQUNGLEtBekZEOztBQTJGQWhGLEtBQUMsQ0FBQ2lGLGFBQUYsR0FBa0IsWUFBTTtBQUN0QmpGLE9BQUMsQ0FBQ2tGLFlBQUYsQ0FBZXRGLENBQWYsRUFBa0JDLENBQWxCO0FBQ0QsS0FGRDtBQUdELEdBdFNxRDtBQUFBLENBQXREOztBQXdTZUYsa0ZBQWYiLCJmaWxlIjoiLi9za2V0Y2hlcy9wNS9uby13YXRlci1kaXN0b3J0LUwuY2FudmFzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqIFNoYWRlciBmdW5cbiAqIEBhdXRob3IgUGV0ZXIgTGF4YWx0XG4gKlxuICovXG5cbmltcG9ydCBwNSwgeyBGb250IH0gZnJvbSBcInA1XCI7XG5pbXBvcnQgeyBUaHJlZVdhdGVyQ2FudmFzIH0gZnJvbSBcIi4uL3RocmVlL3RocmVlLXdhdGVyLWRpc3RvcnQuY2FudmFzXCI7XG5cbi8vIEJlZ2luIENvbXBvbmVudFxuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cblxuZXhwb3J0IHR5cGUgTFhMVF9EaGFybWFDYW52YXMgPSB7XG4gIFc6IG51bWJlcjtcbiAgSDogbnVtYmVyO1xuICBJRDogbnVtYmVyO1xuICAvLyBCRzogTFhMVF9Db2xvclRoZW1lO1xuICBwYXJlbnRFbDogSFRNTERpdkVsZW1lbnQ7XG59O1xuXG5leHBvcnQgdHlwZSBMWExUX0RoYXJtYUNhbnZhc0Rpc3BsYXkgPSAoXG4gIFc6IG51bWJlcixcbiAgSDogbnVtYmVyLFxuICBJRDogbnVtYmVyLFxuICAvLyBCRzogTFhMVF9Db2xvclRoZW1lLFxuICBwYXJlbnRFbDogSFRNTERpdkVsZW1lbnRcbikgPT4gKHA6IHA1KSA9PiB2b2lkO1xuXG50eXBlIExYTFRfRGhhcm1hQ2FudmFzQ2hhciA9IHtcbiAgbGV0dGVyOiBzdHJpbmc7XG4gIGNvdW50OiBudW1iZXI7XG4gIGlkeDogbnVtYmVyO1xuXG4gIGNvcGllczogbnVtYmVyO1xuICBjb3BpZXNMYXN0VmlzaWJsZTogbnVtYmVyO1xuICBjb3BpZXNBcmVWaXNpYmxlOiBib29sZWFuO1xuXG4gIGNvcGllc0FyZUluY3JlbWVudGluZzogYm9vbGVhbjtcbiAgY29waWVzQXJlRGVjcmVtZW50aW5nOiBib29sZWFuO1xuXG4gIGNvdW50SXNJbmNyZW1lbnRpbmc6IGJvb2xlYW47XG4gIGNvdW50SXNEZWNyZW1lbnRpbmc6IGJvb2xlYW47XG59O1xuXG5jb25zdCBEaGFybWFDYW52YXNEaXNwbGF5OiBMWExUX0RoYXJtYUNhbnZhc0Rpc3BsYXkgPSAoXG4gIFcsXG4gIEgsXG4gIElELFxuICAvLyBEaGFybWFUaGVtZSxcbiAgcGFyZW50RWxcbikgPT4gKHA6IHA1KSA9PiB7XG4gIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gQ29uZmlnXG5cbiAgbGV0IGNhbnZhcztcblxuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIEZvbnRzXG4gIGxldCBkaGFybWFGb250OiBGb250O1xuXG4gIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gVHlwb2dyYXBoeVxuICBsZXQgdGV4dCA9IFwiTFwiO1xuXG4gIGxldCBzcGxpdENoYXJhY3RlckFycmF5ID0gdGV4dC5zcGxpdChcIlwiKTtcbiAgbGV0IGNoYXJhY3RlcnM6IExYTFRfRGhhcm1hQ2FudmFzQ2hhcltdID0gc3BsaXRDaGFyYWN0ZXJBcnJheS5tYXAoXG4gICAgKGNoYXJhY3Rlcjogc3RyaW5nLCBpZHg6IG51bWJlcikgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGV0dGVyOiBjaGFyYWN0ZXIsXG4gICAgICAgIGNvdW50OiAxLFxuICAgICAgICBpZHg6IGlkeCxcblxuICAgICAgICBjb3BpZXM6IDUsXG4gICAgICAgIGNvcGllc0xhc3RWaXNpYmxlOiAwLFxuICAgICAgICBjb3BpZXNBcmVWaXNpYmxlOiBmYWxzZSxcblxuICAgICAgICBjb3VudElzSW5jcmVtZW50aW5nOiB0cnVlLFxuICAgICAgICBjb3VudElzRGVjcmVtZW50aW5nOiBmYWxzZSxcblxuICAgICAgICBjb3BpZXNBcmVJbmNyZW1lbnRpbmc6IHRydWUsXG4gICAgICAgIGNvcGllc0FyZURlY3JlbWVudGluZzogZmFsc2UsXG4gICAgICB9O1xuICAgIH1cbiAgKTtcblxuICBsZXQgY2hhcmFjdGVyQ291bnQ6IG51bWJlciA9IHNwbGl0Q2hhcmFjdGVyQXJyYXkubGVuZ3RoO1xuICBsZXQgY2hhcmFjdGVyV2lkdGg6IG51bWJlciA9IFcgLyBjaGFyYWN0ZXJDb3VudDtcbiAgbGV0IGNoYXJhY3RlclNpemU6IG51bWJlciA9IEggKiAxLjE1O1xuXG4gIGxldCB2ZXJ0aWNhbFNrZXdEaXZpc2libGU6IG51bWJlciA9IDIuNzU7XG4gIGxldCBjaGFyYWN0ZXJTa2V3RGl2aXNpYmxlOiBudW1iZXIgPSAxLjM2O1xuXG4gIGNvbnNvbGUubG9nKGNoYXJhY3RlclNpemUsIFwiY2hhcmFjdGVyU2l6ZVwiKTtcblxuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIENvdW50c1xuICAvLyBsZXQgcmVuZGVyQ291bnQ6IG51bWJlciA9IDA7XG4gIGxldCBwcmV2aW91c0NvdW50VXBkYXRlVGltZTogbnVtYmVyID0gMDtcbiAgbGV0IHByZXZpb3VzQ29weVVwZGF0ZVRpbWU6IG51bWJlciA9IDA7XG5cbiAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAvLyBTdHJva2VzXG4gIGxldCBzdHJva2VXaWR0aDogbnVtYmVyID0gNDtcbiAgbGV0IHN0cm9rZU9mZnNldDogbnVtYmVyID0gc3Ryb2tlV2lkdGggKiAxLjU7XG5cbiAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAvLyBMaW1pdHNcbiAgbGV0IG1heENvdW50ID0gMztcbiAgbGV0IG1pbkNvdW50ID0gMTtcblxuICBsZXQgbWF4Q29waWVzID0gMTI7XG4gIGxldCBtaW5Db3BpZXMgPSAxO1xuXG4gIGxldCBmcmFtZVJhdGUgPSA2MDtcblxuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIFRyYW5zbGF0aW9uXG4gIC8vIGxldCBwcmV2aW91c1ZlcnRpY2FsVHJhbnNsYXRpb246IG51bWJlciA9IEggLyAyLjI1O1xuXG4gIGxldCB2ZXJ0aWNhbFRyYW5zbGF0aW9uV2hpdGVzcGFjZUNvbXBlbnNhdGlvbjogbnVtYmVyID0gMi4yNTtcbiAgY29uc3QgcHJldmlvdXNIb3Jpem9udGFsVHJhbnNsYXRpb24gPSAoaWR4OiBudW1iZXIpID0+XG4gICAgLTYwICsgKGNoYXJhY3RlcldpZHRoICogaWR4ICsgY2hhcmFjdGVyV2lkdGggLyAxLjUgKyBzdHJva2VPZmZzZXQpO1xuXG4gIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gUHJlbG9hZFxuICBwLnByZWxvYWQgPSAoKSA9PiB7XG4gICAgZGhhcm1hRm9udCA9IHAubG9hZEZvbnQoYC9mb250cy9kaGFybWEvZGhhcm1hX3JlZ3VsYXIudHRmYCk7XG4gIH07XG5cbiAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAvLyBTZXR1cFxuICBwLnNldHVwID0gKCkgPT4ge1xuICAgIC8vIE91ciBDYW52YXNcbiAgICBjYW52YXMgPSBwLmNyZWF0ZUNhbnZhcyhXLCBIKTtcblxuICAgIC8vIFRocmVlV2F0ZXJDYW52YXMocGFyZW50RWwsIGNhbnZhcy5lbHQpO1xuXG4gICAgcC5mcmFtZVJhdGUoZnJhbWVSYXRlKTtcblxuICAgIGlmICh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA+IDEgJiYgd2luZG93LmRldmljZVBpeGVsUmF0aW8gPCAzKSB7XG4gICAgICBwLnBpeGVsRGVuc2l0eSgxLjI1KTtcbiAgICB9XG4gIH07XG5cbiAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAvLyBVcGRhdGUgQ2hhcmFjdGVyXG4gIGNvbnN0IHVwZGF0ZUNoYXJhY3RlciA9IChjaGFyOiBMWExUX0RoYXJtYUNhbnZhc0NoYXIsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgaWYgKGNoYXIuY291bnQgPCBtYXhDb3VudCAmJiBjaGFyLmNvdW50SXNJbmNyZW1lbnRpbmcpIHtcbiAgICAgIGNoYXJhY3RlcnNbaWR4XSA9IHtcbiAgICAgICAgLi4uY2hhcixcbiAgICAgICAgY291bnQ6IGNoYXIuY291bnQgKyAxLFxuICAgICAgfTtcblxuICAgICAgcHJldmlvdXNDb3VudFVwZGF0ZVRpbWUgPSBwLm1pbGxpcygpO1xuXG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChjaGFyLmNvdW50ID09PSBtYXhDb3VudCkge1xuICAgICAgY2hhcmFjdGVyc1tpZHhdID0ge1xuICAgICAgICAuLi5jaGFyLFxuICAgICAgICBjb3VudDogY2hhci5jb3VudCAtIDEsXG4gICAgICAgIGNvdW50SXNJbmNyZW1lbnRpbmc6IGZhbHNlLFxuICAgICAgICBjb3VudElzRGVjcmVtZW50aW5nOiB0cnVlLFxuICAgICAgfTtcblxuICAgICAgcHJldmlvdXNDb3VudFVwZGF0ZVRpbWUgPSBwLm1pbGxpcygpO1xuXG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChjaGFyLmNvdW50ID4gbWluQ291bnQgJiYgY2hhci5jb3VudElzRGVjcmVtZW50aW5nKSB7XG4gICAgICBjaGFyYWN0ZXJzW2lkeF0gPSB7XG4gICAgICAgIC4uLmNoYXIsXG4gICAgICAgIGNvdW50OiBjaGFyLmNvdW50IC0gMSxcbiAgICAgICAgY291bnRJc0RlY3JlbWVudGluZzogdHJ1ZSxcbiAgICAgIH07XG5cbiAgICAgIHByZXZpb3VzQ291bnRVcGRhdGVUaW1lID0gcC5taWxsaXMoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoY2hhci5jb3VudCA9PT0gbWluQ291bnQgJiYgY2hhci5jb3VudElzRGVjcmVtZW50aW5nKSB7XG4gICAgICBjaGFyYWN0ZXJzW2lkeF0gPSB7XG4gICAgICAgIC4uLmNoYXIsXG4gICAgICAgIGNvdW50OiBjaGFyLmNvdW50ICsgMSxcbiAgICAgICAgY291bnRJc0luY3JlbWVudGluZzogdHJ1ZSxcbiAgICAgICAgY291bnRJc0RlY3JlbWVudGluZzogZmFsc2UsXG4gICAgICB9O1xuXG4gICAgICBwcmV2aW91c0NvdW50VXBkYXRlVGltZSA9IHAubWlsbGlzKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH07XG5cbiAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAvLyBVcGRhdGUgQ29waWVzXG4gIGNvbnN0IHVwZGF0ZUNvcGllcyA9IChjaGFyOiBMWExUX0RoYXJtYUNhbnZhc0NoYXIsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgaWYgKGNoYXIuY29waWVzIDwgbWF4Q29waWVzICYmIGNoYXIuY29waWVzQXJlSW5jcmVtZW50aW5nKSB7XG4gICAgICBjaGFyYWN0ZXJzW2lkeF0gPSB7XG4gICAgICAgIC4uLmNoYXIsXG4gICAgICAgIGNvcGllczogY2hhci5jb3BpZXMgKyAxLFxuICAgICAgfTtcblxuICAgICAgcHJldmlvdXNDb3B5VXBkYXRlVGltZSA9IHAubWlsbGlzKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGNoYXIuY29waWVzID09PSBtYXhDb3BpZXMpIHtcbiAgICAgIGNoYXJhY3RlcnNbaWR4XSA9IHtcbiAgICAgICAgLi4uY2hhcixcbiAgICAgICAgY29waWVzOiBjaGFyLmNvcGllcyAtIDEsXG4gICAgICAgIGNvcGllc0FyZUluY3JlbWVudGluZzogZmFsc2UsXG4gICAgICAgIGNvcGllc0FyZURlY3JlbWVudGluZzogdHJ1ZSxcbiAgICAgIH07XG5cbiAgICAgIHByZXZpb3VzQ29weVVwZGF0ZVRpbWUgPSBwLm1pbGxpcygpO1xuXG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChjaGFyLmNvcGllcyA+IG1pbkNvcGllcyAmJiBjaGFyLmNvcGllc0FyZURlY3JlbWVudGluZykge1xuICAgICAgY2hhcmFjdGVyc1tpZHhdID0ge1xuICAgICAgICAuLi5jaGFyLFxuICAgICAgICBjb3BpZXM6IGNoYXIuY29waWVzIC0gMSxcbiAgICAgICAgY29waWVzQXJlRGVjcmVtZW50aW5nOiB0cnVlLFxuICAgICAgfTtcblxuICAgICAgcHJldmlvdXNDb3B5VXBkYXRlVGltZSA9IHAubWlsbGlzKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGNoYXIuY29waWVzID09PSBtaW5Db3BpZXMgJiYgY2hhci5jb3BpZXNBcmVEZWNyZW1lbnRpbmcpIHtcbiAgICAgIGNoYXJhY3RlcnNbaWR4XSA9IHtcbiAgICAgICAgLi4uY2hhcixcbiAgICAgICAgY29waWVzOiBjaGFyLmNvcGllcyArIDEsXG4gICAgICAgIGNvcGllc0FyZUluY3JlbWVudGluZzogdHJ1ZSxcbiAgICAgICAgY29waWVzQXJlRGVjcmVtZW50aW5nOiBmYWxzZSxcbiAgICAgIH07XG5cbiAgICAgIHByZXZpb3VzQ29weVVwZGF0ZVRpbWUgPSBwLm1pbGxpcygpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9O1xuXG4gIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gRHJhd1xuICBwLmRyYXcgPSAoKSA9PiB7XG4gICAgaWYgKHAuZnJhbWVDb3VudCAlIDEwID09PSAwICYmICF3aW5kb3cuZGhhcm1hUGF1c2VkKSB7XG4gICAgICBwLmJhY2tncm91bmQod2luZG93LmxheGFsdFVuaXZlcnNhbFRoZW1lLmJhY2tncm91bmQpO1xuICAgICAgcC50ZXh0Rm9udChkaGFybWFGb250KTtcbiAgICAgIHAudGV4dFNpemUoY2hhcmFjdGVyU2l6ZSk7XG4gICAgICBwLnRleHRBbGlnbihwLkNFTlRFUiwgcC5DRU5URVIpO1xuICAgICAgcC5maWxsKGAke3dpbmRvdy5sYXhhbHRVbml2ZXJzYWxUaGVtZS5mb3JlZ3JvdW5kfWApO1xuICAgICAgcC5zdHJva2VXZWlnaHQoc3Ryb2tlV2lkdGgpO1xuICAgICAgcC5zdHJva2Uod2luZG93LmxheGFsdFVuaXZlcnNhbFRoZW1lLmJhY2tncm91bmQpO1xuXG4gICAgICBpZiAoSCAmJiBXKSB7XG4gICAgICAgIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBvdXIgY29waWVzXG4gICAgICAgIGNoYXJhY3RlcnMubWFwKChjaGFyOiBMWExUX0RoYXJtYUNhbnZhc0NoYXIsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgcC5zY2FsZSgxLCAxKTtcblxuICAgICAgICAgIGxldCByYW5kb21DaGFyUGljayA9IE1hdGgucmFuZG9tKCkgPD0gMC41O1xuXG4gICAgICAgICAgaWYgKHJhbmRvbUNoYXJQaWNrKSB7XG4gICAgICAgICAgICB1cGRhdGVDb3BpZXMoY2hhciwgaWR4KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocmFuZG9tQ2hhclBpY2sgJiYgcC5taWxsaXMoKSAtIHByZXZpb3VzQ291bnRVcGRhdGVUaW1lID4gMzAwMCkge1xuICAgICAgICAgICAgdXBkYXRlQ2hhcmFjdGVyKGNoYXIsIGlkeCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IGNvdW50QXJyYXk6IG51bWJlcltdID0gQXJyYXkuZnJvbShBcnJheShjaGFyLmNvdW50KS5rZXlzKCkpO1xuXG4gICAgICAgICAgY291bnRBcnJheSA9IGNvdW50QXJyYXkubWFwKChjb3VudE51bWJlcjogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY291bnROdW1iZXIgKyAxO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgICAgICAgICAvLyBEdXBsaWNhdGUgcG9zaXRpb25zXG4gICAgICAgICAgY291bnRBcnJheS5tYXAoKGNvdW50TnVtYmVyOiBudW1iZXIsIGlkeHg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgbGV0IHZlcnRpY2FsU2NhbGUgPSAxIC8gKGNoYXIuY291bnQgKiAwLjk1KTtcblxuICAgICAgICAgICAgbGV0IGR1cGxpY2F0ZVZlcnRpY2FsUG9zaXRpb246IG51bWJlciA9XG4gICAgICAgICAgICAgIGNoYXIuY291bnQgPT0gMVxuICAgICAgICAgICAgICAgID8gSCAvIHZlcnRpY2FsVHJhbnNsYXRpb25XaGl0ZXNwYWNlQ29tcGVuc2F0aW9uXG4gICAgICAgICAgICAgICAgOiBjaGFyYWN0ZXJTaXplIC8gdmVydGljYWxTa2V3RGl2aXNpYmxlICtcbiAgICAgICAgICAgICAgICAgIChjaGFyYWN0ZXJTaXplIC8gY2hhcmFjdGVyU2tld0RpdmlzaWJsZSkgKiBpZHh4O1xuXG4gICAgICAgICAgICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAgICAgICAgICAgLy8gTWFrZSBjb3BpZXNcbiAgICAgICAgICAgIGxldCBjb3BpZXNBcnJheTogbnVtYmVyW10gPSBBcnJheS5mcm9tKEFycmF5KGNoYXIuY29waWVzKS5rZXlzKCkpO1xuICAgICAgICAgICAgLy8gbGV0IHJhbmRvbUNvcHlQaWNrID0gTWF0aC5yYW5kb20oKSA8PSAwLjU7XG5cbiAgICAgICAgICAgIGNvcGllc0FycmF5ID0gY29waWVzQXJyYXkubWFwKChjb3B5TnVtYmVyOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNvcHlOdW1iZXIgKyAxO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIGxldCByYW5kb21Db3B5UGljayA9IE1hdGgucmFuZG9tKCkgPD0gMC41O1xuICAgICAgICAgICAgLy8gbGV0IGNvcHlUaW1lciA9IHAubWlsbGlzKCkgLSBwcmV2aW91c0NvcGllc1Zpc2libGVUaW1lID4gMjAwMDtcbiAgICAgICAgICAgIHByZXZpb3VzQ29weVVwZGF0ZVRpbWU7XG5cbiAgICAgICAgICAgIC8vIGxldCBpc0ZpcnN0Q291bnQgPSB0cnVlO1xuXG4gICAgICAgICAgICBjb3BpZXNBcnJheS5tYXAoKGNvcHlOdW1iZXI6IG51bWJlciwgaWR4eHg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAvLyBsZXQgY2VudGVyQ29vcmRzWCA9IFcgLyAyO1xuICAgICAgICAgICAgICAvLyBsZXQgY2VudGVyQ29vcmRzWSA9IEggLyAyO1xuXG4gICAgICAgICAgICAgIC8vIGxldCBob3Jpem9udGFsVHJhbnNsYXRlID1cbiAgICAgICAgICAgICAgLy8gICBjb3B5TnVtYmVyICE9PSAxXG4gICAgICAgICAgICAgIC8vICAgICA/IChwcmV2aW91c0hvcml6b250YWxUcmFuc2xhdGlvbihpZHgpICtcbiAgICAgICAgICAgICAgLy8gICAgICAgICAoc3Ryb2tlT2Zmc2V0IC8gKHAubW91c2VYIC8gMTAwKSkgKiBjb3B5TnVtYmVyKVxuICAgICAgICAgICAgICAvLyAgICAgOiBwcmV2aW91c0hvcml6b250YWxUcmFuc2xhdGlvbihpZHgpICtcbiAgICAgICAgICAgICAgLy8gICAgICAgc3Ryb2tlT2Zmc2V0ICogY29weU51bWJlcjtcblxuICAgICAgICAgICAgICAvLyBsZXQgdmVydGljYWxUcmFuc2xhdGUgPVxuICAgICAgICAgICAgICAvLyAgIGNvcHlOdW1iZXIgIT09IDFcbiAgICAgICAgICAgICAgLy8gICAgID8gKGR1cGxpY2F0ZVZlcnRpY2FsUG9zaXRpb24gLSAoc3Ryb2tlT2Zmc2V0IC8gKHAubW91c2VYIC8gMTAwKSkgKiBjb3B5TnVtYmVyKVxuICAgICAgICAgICAgICAvLyAgICAgOiBkdXBsaWNhdGVWZXJ0aWNhbFBvc2l0aW9uIC0gc3Ryb2tlT2Zmc2V0ICogY29weU51bWJlcjtcblxuICAgICAgICAgICAgICBsZXQgaG9yaXpvbnRhbFRyYW5zbGF0ZSA9XG4gICAgICAgICAgICAgICAgcHJldmlvdXNIb3Jpem9udGFsVHJhbnNsYXRpb24oaWR4KSArIHN0cm9rZU9mZnNldCAqIGNvcHlOdW1iZXI7XG5cbiAgICAgICAgICAgICAgbGV0IHZlcnRpY2FsVHJhbnNsYXRlID1cbiAgICAgICAgICAgICAgICBkdXBsaWNhdGVWZXJ0aWNhbFBvc2l0aW9uIC0gc3Ryb2tlT2Zmc2V0ICogY29weU51bWJlcjtcblxuICAgICAgICAgICAgICBwLnB1c2goKTtcbiAgICAgICAgICAgICAgcC5zY2FsZSgxLCB2ZXJ0aWNhbFNjYWxlKTtcbiAgICAgICAgICAgICAgcC50ZXh0KGNoYXIubGV0dGVyLCBob3Jpem9udGFsVHJhbnNsYXRlLCB2ZXJ0aWNhbFRyYW5zbGF0ZSk7XG4gICAgICAgICAgICAgIHAucG9wKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHAud2luZG93UmVzaXplZCA9ICgpID0+IHtcbiAgICBwLnJlc2l6ZUNhbnZhcyhXLCBIKTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERoYXJtYUNhbnZhc0Rpc3BsYXk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sketches/p5/no-water-distort-L.canvas.tsx\n");

/***/ })

})