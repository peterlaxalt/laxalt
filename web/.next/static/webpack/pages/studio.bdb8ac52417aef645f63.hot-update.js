webpackHotUpdate_N_E("pages/studio",{

/***/ "./sketches/p5/no-water-distort-L.canvas.tsx":
/*!***************************************************!*\
  !*** ./sketches/p5/no-water-distort-L.canvas.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _constants_styles_Base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/styles/Base */ \"./constants/styles/Base.tsx\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_manzanita_Repositories_laxalt_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/**\n *\n * Shader fun\n * @author Peter Laxalt\n *\n */\n\n\nvar DharmaCanvasDisplay = function DharmaCanvasDisplay(W, H, ID, // DharmaTheme,\nparentEl) {\n  return function (p) {\n    // _________________________________________________\n    // Config\n    var canvas; // ____________________________\n    // Fonts\n\n    var dharmaFont; // ____________________________\n    // Typography\n\n    var text = \"LAX\";\n    var splitCharacterArray = text.split(\"\");\n    var characters = splitCharacterArray.map(function (character, idx) {\n      return {\n        letter: character,\n        count: 1,\n        idx: idx,\n        copies: 5,\n        copiesLastVisible: 0,\n        copiesAreVisible: false,\n        countIsIncrementing: true,\n        countIsDecrementing: false,\n        copiesAreIncrementing: true,\n        copiesAreDecrementing: false\n      };\n    });\n    var isTablet = W > _constants_styles_Base__WEBPACK_IMPORTED_MODULE_1__[\"Base\"].Media.Width.Md;\n    var characterCount = splitCharacterArray.length;\n    var characterWidth = W / characterCount;\n    var characterSize = !isTablet ? H * 1.15 : H * .7;\n    var verticalSkewDivisible = !isTablet ? 2.75 : 2;\n    var characterSkewDivisible = 1.36;\n    console.log(characterSize, \"characterSize\"); // ____________________________\n    // Counts\n    // let renderCount: number = 0;\n\n    var previousCountUpdateTime = 0;\n    var previousCopyUpdateTime = 0; // ____________________________\n    // Strokes\n\n    var strokeWidth = 4;\n    var strokeOffset = strokeWidth * 1.5; // ____________________________\n    // Limits\n\n    var maxCount = 3;\n    var minCount = 1;\n    var maxCopies = 12;\n    var minCopies = 1;\n    var frameRate = 60; // ____________________________\n    // Translation\n    // let previousVerticalTranslation: number = H / 2.25;\n\n    var verticalTranslationWhitespaceCompensation = 2.25;\n\n    var previousHorizontalTranslation = function previousHorizontalTranslation(idx) {\n      return -60 + (characterWidth * idx + characterWidth / 1.5 + strokeOffset);\n    }; // _________________________________________________\n    // Preload\n\n\n    p.preload = function () {\n      dharmaFont = p.loadFont(\"/fonts/dharma/dharma_regular.ttf\");\n    }; // _________________________________________________\n    // Setup\n\n\n    p.setup = function () {\n      // Our Canvas\n      canvas = p.createCanvas(W, H); // ThreeWaterCanvas(parentEl, canvas.elt);\n\n      p.frameRate(frameRate);\n\n      if (window.devicePixelRatio > 1 && window.devicePixelRatio < 3) {\n        p.pixelDensity(1.25);\n      }\n    }; // _________________________________________________\n    // Update Character\n\n\n    var updateCharacter = function updateCharacter(_char, idx) {\n      if (_char.count < maxCount && _char.countIsIncrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char), {}, {\n          count: _char.count + 1\n        });\n        previousCountUpdateTime = p.millis();\n        return;\n      } else if (_char.count === maxCount) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char), {}, {\n          count: _char.count - 1,\n          countIsIncrementing: false,\n          countIsDecrementing: true\n        });\n        previousCountUpdateTime = p.millis();\n        return;\n      } else if (_char.count > minCount && _char.countIsDecrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char), {}, {\n          count: _char.count - 1,\n          countIsDecrementing: true\n        });\n        previousCountUpdateTime = p.millis();\n        return;\n      } else if (_char.count === minCount && _char.countIsDecrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char), {}, {\n          count: _char.count + 1,\n          countIsIncrementing: true,\n          countIsDecrementing: false\n        });\n        previousCountUpdateTime = p.millis();\n        return;\n      }\n\n      return;\n    }; // _________________________________________________\n    // Update Copies\n\n\n    var updateCopies = function updateCopies(_char2, idx) {\n      if (_char2.copies < maxCopies && _char2.copiesAreIncrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char2), {}, {\n          copies: _char2.copies + 1\n        });\n        previousCopyUpdateTime = p.millis();\n        return;\n      } else if (_char2.copies === maxCopies) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char2), {}, {\n          copies: _char2.copies - 1,\n          copiesAreIncrementing: false,\n          copiesAreDecrementing: true\n        });\n        previousCopyUpdateTime = p.millis();\n        return;\n      } else if (_char2.copies > minCopies && _char2.copiesAreDecrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char2), {}, {\n          copies: _char2.copies - 1,\n          copiesAreDecrementing: true\n        });\n        previousCopyUpdateTime = p.millis();\n        return;\n      } else if (_char2.copies === minCopies && _char2.copiesAreDecrementing) {\n        characters[idx] = _objectSpread(_objectSpread({}, _char2), {}, {\n          copies: _char2.copies + 1,\n          copiesAreIncrementing: true,\n          copiesAreDecrementing: false\n        });\n        previousCopyUpdateTime = p.millis();\n        return;\n      }\n\n      return;\n    }; // _________________________________________________\n    // Draw\n\n\n    p.draw = function () {\n      if (p.frameCount % 10 === 0 && !window.dharmaPaused) {\n        p.background(window.laxaltUniversalTheme.background);\n        p.textFont(dharmaFont);\n        p.textSize(characterSize);\n        p.textAlign(p.CENTER, p.CENTER);\n        p.fill(\"\".concat(window.laxaltUniversalTheme.foreground));\n        p.strokeWeight(strokeWidth);\n        p.stroke(window.laxaltUniversalTheme.background);\n\n        if (H && W) {\n          // _________________________________________\n          // Loop through our copies\n          characters.map(function (_char3, idx) {\n            p.scale(1, 1);\n            var randomCharPick = Math.random() <= 0.5;\n\n            if (randomCharPick) {\n              updateCopies(_char3, idx);\n            }\n\n            if (randomCharPick && p.millis() - previousCountUpdateTime > 3000) {\n              updateCharacter(_char3, idx);\n            }\n\n            var countArray = Array.from(Array(_char3.count).keys());\n            countArray = countArray.map(function (countNumber) {\n              return countNumber + 1;\n            }); // _________________________________________\n            // Duplicate positions\n\n            countArray.map(function (countNumber, idxx) {\n              var verticalScale = 1 / (_char3.count * 0.95);\n              var duplicateVerticalPosition = _char3.count == 1 ? H / verticalTranslationWhitespaceCompensation : characterSize / verticalSkewDivisible + characterSize / characterSkewDivisible * idxx; // _________________________________________\n              // Make copies\n\n              var copiesArray = Array.from(Array(_char3.copies).keys()); // let randomCopyPick = Math.random() <= 0.5;\n\n              copiesArray = copiesArray.map(function (copyNumber) {\n                return copyNumber + 1;\n              }); // let randomCopyPick = Math.random() <= 0.5;\n              // let copyTimer = p.millis() - previousCopiesVisibleTime > 2000;\n\n              previousCopyUpdateTime; // let isFirstCount = true;\n\n              copiesArray.map(function (copyNumber, idxxx) {\n                // let centerCoordsX = W / 2;\n                // let centerCoordsY = H / 2;\n                // let horizontalTranslate =\n                //   copyNumber !== 1\n                //     ? (previousHorizontalTranslation(idx) +\n                //         (strokeOffset / (p.mouseX / 100)) * copyNumber)\n                //     : previousHorizontalTranslation(idx) +\n                //       strokeOffset * copyNumber;\n                // let verticalTranslate =\n                //   copyNumber !== 1\n                //     ? (duplicateVerticalPosition - (strokeOffset / (p.mouseX / 100)) * copyNumber)\n                //     : duplicateVerticalPosition - strokeOffset * copyNumber;\n                var horizontalTranslate = previousHorizontalTranslation(idx) + strokeOffset * copyNumber;\n                var verticalTranslate = duplicateVerticalPosition - strokeOffset * copyNumber;\n                p.push();\n                p.scale(1, verticalScale);\n                p.text(_char3.letter, horizontalTranslate, verticalTranslate);\n                p.pop();\n              });\n            });\n          });\n        }\n      }\n    };\n\n    p.windowResized = function () {\n      p.resizeCanvas(W, H);\n    };\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DharmaCanvasDisplay);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2tldGNoZXMvcDUvbm8td2F0ZXItZGlzdG9ydC1MLmNhbnZhcy50c3g/ZjE3ZCJdLCJuYW1lcyI6WyJEaGFybWFDYW52YXNEaXNwbGF5IiwiVyIsIkgiLCJJRCIsInBhcmVudEVsIiwicCIsImNhbnZhcyIsImRoYXJtYUZvbnQiLCJ0ZXh0Iiwic3BsaXRDaGFyYWN0ZXJBcnJheSIsInNwbGl0IiwiY2hhcmFjdGVycyIsIm1hcCIsImNoYXJhY3RlciIsImlkeCIsImxldHRlciIsImNvdW50IiwiY29waWVzIiwiY29waWVzTGFzdFZpc2libGUiLCJjb3BpZXNBcmVWaXNpYmxlIiwiY291bnRJc0luY3JlbWVudGluZyIsImNvdW50SXNEZWNyZW1lbnRpbmciLCJjb3BpZXNBcmVJbmNyZW1lbnRpbmciLCJjb3BpZXNBcmVEZWNyZW1lbnRpbmciLCJpc1RhYmxldCIsIkJhc2UiLCJNZWRpYSIsIldpZHRoIiwiTWQiLCJjaGFyYWN0ZXJDb3VudCIsImxlbmd0aCIsImNoYXJhY3RlcldpZHRoIiwiY2hhcmFjdGVyU2l6ZSIsInZlcnRpY2FsU2tld0RpdmlzaWJsZSIsImNoYXJhY3RlclNrZXdEaXZpc2libGUiLCJjb25zb2xlIiwibG9nIiwicHJldmlvdXNDb3VudFVwZGF0ZVRpbWUiLCJwcmV2aW91c0NvcHlVcGRhdGVUaW1lIiwic3Ryb2tlV2lkdGgiLCJzdHJva2VPZmZzZXQiLCJtYXhDb3VudCIsIm1pbkNvdW50IiwibWF4Q29waWVzIiwibWluQ29waWVzIiwiZnJhbWVSYXRlIiwidmVydGljYWxUcmFuc2xhdGlvbldoaXRlc3BhY2VDb21wZW5zYXRpb24iLCJwcmV2aW91c0hvcml6b250YWxUcmFuc2xhdGlvbiIsInByZWxvYWQiLCJsb2FkRm9udCIsInNldHVwIiwiY3JlYXRlQ2FudmFzIiwid2luZG93IiwiZGV2aWNlUGl4ZWxSYXRpbyIsInBpeGVsRGVuc2l0eSIsInVwZGF0ZUNoYXJhY3RlciIsImNoYXIiLCJtaWxsaXMiLCJ1cGRhdGVDb3BpZXMiLCJkcmF3IiwiZnJhbWVDb3VudCIsImRoYXJtYVBhdXNlZCIsImJhY2tncm91bmQiLCJsYXhhbHRVbml2ZXJzYWxUaGVtZSIsInRleHRGb250IiwidGV4dFNpemUiLCJ0ZXh0QWxpZ24iLCJDRU5URVIiLCJmaWxsIiwiZm9yZWdyb3VuZCIsInN0cm9rZVdlaWdodCIsInN0cm9rZSIsInNjYWxlIiwicmFuZG9tQ2hhclBpY2siLCJNYXRoIiwicmFuZG9tIiwiY291bnRBcnJheSIsIkFycmF5IiwiZnJvbSIsImtleXMiLCJjb3VudE51bWJlciIsImlkeHgiLCJ2ZXJ0aWNhbFNjYWxlIiwiZHVwbGljYXRlVmVydGljYWxQb3NpdGlvbiIsImNvcGllc0FycmF5IiwiY29weU51bWJlciIsImlkeHh4IiwiaG9yaXpvbnRhbFRyYW5zbGF0ZSIsInZlcnRpY2FsVHJhbnNsYXRlIiwicHVzaCIsInBvcCIsIndpbmRvd1Jlc2l6ZWQiLCJyZXNpemVDYW52YXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOztBQXNDQSxJQUFNQSxtQkFBNkMsR0FBRyxTQUFoREEsbUJBQWdELENBQ3BEQyxDQURvRCxFQUVwREMsQ0FGb0QsRUFHcERDLEVBSG9ELEVBSXBEO0FBQ0FDLFFBTG9EO0FBQUEsU0FNakQsVUFBQ0MsQ0FBRCxFQUFXO0FBQ2Q7QUFDQTtBQUVBLFFBQUlDLE1BQUosQ0FKYyxDQU1kO0FBQ0E7O0FBQ0EsUUFBSUMsVUFBSixDQVJjLENBVWQ7QUFDQTs7QUFDQSxRQUFJQyxJQUFJLEdBQUcsS0FBWDtBQUVBLFFBQUlDLG1CQUFtQixHQUFHRCxJQUFJLENBQUNFLEtBQUwsQ0FBVyxFQUFYLENBQTFCO0FBQ0EsUUFBSUMsVUFBbUMsR0FBR0YsbUJBQW1CLENBQUNHLEdBQXBCLENBQ3hDLFVBQUNDLFNBQUQsRUFBb0JDLEdBQXBCLEVBQW9DO0FBQ2xDLGFBQU87QUFDTEMsY0FBTSxFQUFFRixTQURIO0FBRUxHLGFBQUssRUFBRSxD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ckQ7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsb0JBQUlDLG1CQUFtQixHQUNyQnhDLDZCQUE2QixDQUFDakMsR0FBRCxDQUE3QixHQUFxQzBCLFlBQVksR0FBRzZDLFVBRHREO0FBR0Esb0JBQUlHLGlCQUFpQixHQUNuQkwseUJBQXlCLEdBQUczQyxZQUFZLEdBQUc2QyxVQUQ3QztBQUdBaEYsaUJBQUMsQ0FBQ29GLElBQUY7QUFDQXBGLGlCQUFDLENBQUNtRSxLQUFGLENBQVEsQ0FBUixFQUFXVSxhQUFYO0FBQ0E3RSxpQkFBQyxDQUFDRyxJQUFGLENBQU9nRCxNQUFJLENBQUN6QyxNQUFaLEVBQW9Cd0UsbUJBQXBCLEVBQXlDQyxpQkFBekM7QUFDQW5GLGlCQUFDLENBQUNxRixHQUFGO0FBQ0QsZUExQkQ7QUEyQkQsYUFuREQ7QUFvREQsV0F6RUQ7QUEwRUQ7QUFDRjtBQUNGLEtBekZEOztBQTJGQXJGLEtBQUMsQ0FBQ3NGLGFBQUYsR0FBa0IsWUFBTTtBQUN0QnRGLE9BQUMsQ0FBQ3VGLFlBQUYsQ0FBZTNGLENBQWYsRUFBa0JDLENBQWxCO0FBQ0QsS0FGRDtBQUdELEdBeFNxRDtBQUFBLENBQXREOztBQTBTZUYsa0ZBQWYiLCJmaWxlIjoiLi9za2V0Y2hlcy9wNS9uby13YXRlci1kaXN0b3J0LUwuY2FudmFzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqIFNoYWRlciBmdW5cbiAqIEBhdXRob3IgUGV0ZXIgTGF4YWx0XG4gKlxuICovXG5cbmltcG9ydCBwNSwgeyBGb250IH0gZnJvbSBcInA1XCI7XG5pbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9zdHlsZXMvQmFzZVwiO1xuaW1wb3J0IHsgVGhyZWVXYXRlckNhbnZhcyB9IGZyb20gXCIuLi90aHJlZS90aHJlZS13YXRlci1kaXN0b3J0LmNhbnZhc1wiO1xuXG4vLyBCZWdpbiBDb21wb25lbnRcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG5cbmV4cG9ydCB0eXBlIExYTFRfRGhhcm1hQ2FudmFzID0ge1xuICBXOiBudW1iZXI7XG4gIEg6IG51bWJlcjtcbiAgSUQ6IG51bWJlcjtcbiAgLy8gQkc6IExYTFRfQ29sb3JUaGVtZTtcbiAgcGFyZW50RWw6IEhUTUxEaXZFbGVtZW50O1xufTtcblxuZXhwb3J0IHR5cGUgTFhMVF9EaGFybWFDYW52YXNEaXNwbGF5ID0gKFxuICBXOiBudW1iZXIsXG4gIEg6IG51bWJlcixcbiAgSUQ6IG51bWJlcixcbiAgLy8gQkc6IExYTFRfQ29sb3JUaGVtZSxcbiAgcGFyZW50RWw6IEhUTUxEaXZFbGVtZW50XG4pID0+IChwOiBwNSkgPT4gdm9pZDtcblxudHlwZSBMWExUX0RoYXJtYUNhbnZhc0NoYXIgPSB7XG4gIGxldHRlcjogc3RyaW5nO1xuICBjb3VudDogbnVtYmVyO1xuICBpZHg6IG51bWJlcjtcblxuICBjb3BpZXM6IG51bWJlcjtcbiAgY29waWVzTGFzdFZpc2libGU6IG51bWJlcjtcbiAgY29waWVzQXJlVmlzaWJsZTogYm9vbGVhbjtcblxuICBjb3BpZXNBcmVJbmNyZW1lbnRpbmc6IGJvb2xlYW47XG4gIGNvcGllc0FyZURlY3JlbWVudGluZzogYm9vbGVhbjtcblxuICBjb3VudElzSW5jcmVtZW50aW5nOiBib29sZWFuO1xuICBjb3VudElzRGVjcmVtZW50aW5nOiBib29sZWFuO1xufTtcblxuY29uc3QgRGhhcm1hQ2FudmFzRGlzcGxheTogTFhMVF9EaGFybWFDYW52YXNEaXNwbGF5ID0gKFxuICBXLFxuICBILFxuICBJRCxcbiAgLy8gRGhhcm1hVGhlbWUsXG4gIHBhcmVudEVsXG4pID0+IChwOiBwNSkgPT4ge1xuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIENvbmZpZ1xuXG4gIGxldCBjYW52YXM7XG5cbiAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAvLyBGb250c1xuICBsZXQgZGhhcm1hRm9udDogRm9udDtcblxuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIFR5cG9ncmFwaHlcbiAgbGV0IHRleHQgPSBcIkxBWFwiO1xuXG4gIGxldCBzcGxpdENoYXJhY3RlckFycmF5ID0gdGV4dC5zcGxpdChcIlwiKTtcbiAgbGV0IGNoYXJhY3RlcnM6IExYTFRfRGhhcm1hQ2FudmFzQ2hhcltdID0gc3BsaXRDaGFyYWN0ZXJBcnJheS5tYXAoXG4gICAgKGNoYXJhY3Rlcjogc3RyaW5nLCBpZHg6IG51bWJlcikgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGV0dGVyOiBjaGFyYWN0ZXIsXG4gICAgICAgIGNvdW50OiAxLFxuICAgICAgICBpZHg6IGlkeCxcblxuICAgICAgICBjb3BpZXM6IDUsXG4gICAgICAgIGNvcGllc0xhc3RWaXNpYmxlOiAwLFxuICAgICAgICBjb3BpZXNBcmVWaXNpYmxlOiBmYWxzZSxcblxuICAgICAgICBjb3VudElzSW5jcmVtZW50aW5nOiB0cnVlLFxuICAgICAgICBjb3VudElzRGVjcmVtZW50aW5nOiBmYWxzZSxcblxuICAgICAgICBjb3BpZXNBcmVJbmNyZW1lbnRpbmc6IHRydWUsXG4gICAgICAgIGNvcGllc0FyZURlY3JlbWVudGluZzogZmFsc2UsXG4gICAgICB9O1xuICAgIH1cbiAgKTtcblxuICBsZXQgaXNUYWJsZXQ6IGJvb2xlYW4gPSBXID4gQmFzZS5NZWRpYS5XaWR0aC5NZDtcblxuICBsZXQgY2hhcmFjdGVyQ291bnQ6IG51bWJlciA9IHNwbGl0Q2hhcmFjdGVyQXJyYXkubGVuZ3RoO1xuICBsZXQgY2hhcmFjdGVyV2lkdGg6IG51bWJlciA9IFcgLyBjaGFyYWN0ZXJDb3VudDtcbiAgbGV0IGNoYXJhY3RlclNpemU6IG51bWJlciA9ICFpc1RhYmxldCA/IEggKiAxLjE1IDogSCAqIC43O1xuXG4gIGxldCB2ZXJ0aWNhbFNrZXdEaXZpc2libGU6IG51bWJlciA9ICFpc1RhYmxldCA/IDIuNzUgOiAyO1xuICBsZXQgY2hhcmFjdGVyU2tld0RpdmlzaWJsZTogbnVtYmVyID0gMS4zNjtcblxuICBjb25zb2xlLmxvZyhjaGFyYWN0ZXJTaXplLCBcImNoYXJhY3RlclNpemVcIik7XG5cbiAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAvLyBDb3VudHNcbiAgLy8gbGV0IHJlbmRlckNvdW50OiBudW1iZXIgPSAwO1xuICBsZXQgcHJldmlvdXNDb3VudFVwZGF0ZVRpbWU6IG51bWJlciA9IDA7XG4gIGxldCBwcmV2aW91c0NvcHlVcGRhdGVUaW1lOiBudW1iZXIgPSAwO1xuXG4gIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gU3Ryb2tlc1xuICBsZXQgc3Ryb2tlV2lkdGg6IG51bWJlciA9IDQ7XG4gIGxldCBzdHJva2VPZmZzZXQ6IG51bWJlciA9IHN0cm9rZVdpZHRoICogMS41O1xuXG4gIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gTGltaXRzXG4gIGxldCBtYXhDb3VudCA9IDM7XG4gIGxldCBtaW5Db3VudCA9IDE7XG5cbiAgbGV0IG1heENvcGllcyA9IDEyO1xuICBsZXQgbWluQ29waWVzID0gMTtcblxuICBsZXQgZnJhbWVSYXRlID0gNjA7XG5cbiAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAvLyBUcmFuc2xhdGlvblxuICAvLyBsZXQgcHJldmlvdXNWZXJ0aWNhbFRyYW5zbGF0aW9uOiBudW1iZXIgPSBIIC8gMi4yNTtcblxuICBsZXQgdmVydGljYWxUcmFuc2xhdGlvbldoaXRlc3BhY2VDb21wZW5zYXRpb246IG51bWJlciA9IDIuMjU7XG4gIGNvbnN0IHByZXZpb3VzSG9yaXpvbnRhbFRyYW5zbGF0aW9uID0gKGlkeDogbnVtYmVyKSA9PlxuICAgIC02MCArIChjaGFyYWN0ZXJXaWR0aCAqIGlkeCArIGNoYXJhY3RlcldpZHRoIC8gMS41ICsgc3Ryb2tlT2Zmc2V0KTtcblxuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIFByZWxvYWRcbiAgcC5wcmVsb2FkID0gKCkgPT4ge1xuICAgIGRoYXJtYUZvbnQgPSBwLmxvYWRGb250KGAvZm9udHMvZGhhcm1hL2RoYXJtYV9yZWd1bGFyLnR0ZmApO1xuICB9O1xuXG4gIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gU2V0dXBcbiAgcC5zZXR1cCA9ICgpID0+IHtcbiAgICAvLyBPdXIgQ2FudmFzXG4gICAgY2FudmFzID0gcC5jcmVhdGVDYW52YXMoVywgSCk7XG5cbiAgICAvLyBUaHJlZVdhdGVyQ2FudmFzKHBhcmVudEVsLCBjYW52YXMuZWx0KTtcblxuICAgIHAuZnJhbWVSYXRlKGZyYW1lUmF0ZSk7XG5cbiAgICBpZiAod2luZG93LmRldmljZVBpeGVsUmF0aW8gPiAxICYmIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIDwgMykge1xuICAgICAgcC5waXhlbERlbnNpdHkoMS4yNSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gVXBkYXRlIENoYXJhY3RlclxuICBjb25zdCB1cGRhdGVDaGFyYWN0ZXIgPSAoY2hhcjogTFhMVF9EaGFybWFDYW52YXNDaGFyLCBpZHg6IG51bWJlcikgPT4ge1xuICAgIGlmIChjaGFyLmNvdW50IDwgbWF4Q291bnQgJiYgY2hhci5jb3VudElzSW5jcmVtZW50aW5nKSB7XG4gICAgICBjaGFyYWN0ZXJzW2lkeF0gPSB7XG4gICAgICAgIC4uLmNoYXIsXG4gICAgICAgIGNvdW50OiBjaGFyLmNvdW50ICsgMSxcbiAgICAgIH07XG5cbiAgICAgIHByZXZpb3VzQ291bnRVcGRhdGVUaW1lID0gcC5taWxsaXMoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoY2hhci5jb3VudCA9PT0gbWF4Q291bnQpIHtcbiAgICAgIGNoYXJhY3RlcnNbaWR4XSA9IHtcbiAgICAgICAgLi4uY2hhcixcbiAgICAgICAgY291bnQ6IGNoYXIuY291bnQgLSAxLFxuICAgICAgICBjb3VudElzSW5jcmVtZW50aW5nOiBmYWxzZSxcbiAgICAgICAgY291bnRJc0RlY3JlbWVudGluZzogdHJ1ZSxcbiAgICAgIH07XG5cbiAgICAgIHByZXZpb3VzQ291bnRVcGRhdGVUaW1lID0gcC5taWxsaXMoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoY2hhci5jb3VudCA+IG1pbkNvdW50ICYmIGNoYXIuY291bnRJc0RlY3JlbWVudGluZykge1xuICAgICAgY2hhcmFjdGVyc1tpZHhdID0ge1xuICAgICAgICAuLi5jaGFyLFxuICAgICAgICBjb3VudDogY2hhci5jb3VudCAtIDEsXG4gICAgICAgIGNvdW50SXNEZWNyZW1lbnRpbmc6IHRydWUsXG4gICAgICB9O1xuXG4gICAgICBwcmV2aW91c0NvdW50VXBkYXRlVGltZSA9IHAubWlsbGlzKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGNoYXIuY291bnQgPT09IG1pbkNvdW50ICYmIGNoYXIuY291bnRJc0RlY3JlbWVudGluZykge1xuICAgICAgY2hhcmFjdGVyc1tpZHhdID0ge1xuICAgICAgICAuLi5jaGFyLFxuICAgICAgICBjb3VudDogY2hhci5jb3VudCArIDEsXG4gICAgICAgIGNvdW50SXNJbmNyZW1lbnRpbmc6IHRydWUsXG4gICAgICAgIGNvdW50SXNEZWNyZW1lbnRpbmc6IGZhbHNlLFxuICAgICAgfTtcblxuICAgICAgcHJldmlvdXNDb3VudFVwZGF0ZVRpbWUgPSBwLm1pbGxpcygpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9O1xuXG4gIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gVXBkYXRlIENvcGllc1xuICBjb25zdCB1cGRhdGVDb3BpZXMgPSAoY2hhcjogTFhMVF9EaGFybWFDYW52YXNDaGFyLCBpZHg6IG51bWJlcikgPT4ge1xuICAgIGlmIChjaGFyLmNvcGllcyA8IG1heENvcGllcyAmJiBjaGFyLmNvcGllc0FyZUluY3JlbWVudGluZykge1xuICAgICAgY2hhcmFjdGVyc1tpZHhdID0ge1xuICAgICAgICAuLi5jaGFyLFxuICAgICAgICBjb3BpZXM6IGNoYXIuY29waWVzICsgMSxcbiAgICAgIH07XG5cbiAgICAgIHByZXZpb3VzQ29weVVwZGF0ZVRpbWUgPSBwLm1pbGxpcygpO1xuXG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChjaGFyLmNvcGllcyA9PT0gbWF4Q29waWVzKSB7XG4gICAgICBjaGFyYWN0ZXJzW2lkeF0gPSB7XG4gICAgICAgIC4uLmNoYXIsXG4gICAgICAgIGNvcGllczogY2hhci5jb3BpZXMgLSAxLFxuICAgICAgICBjb3BpZXNBcmVJbmNyZW1lbnRpbmc6IGZhbHNlLFxuICAgICAgICBjb3BpZXNBcmVEZWNyZW1lbnRpbmc6IHRydWUsXG4gICAgICB9O1xuXG4gICAgICBwcmV2aW91c0NvcHlVcGRhdGVUaW1lID0gcC5taWxsaXMoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoY2hhci5jb3BpZXMgPiBtaW5Db3BpZXMgJiYgY2hhci5jb3BpZXNBcmVEZWNyZW1lbnRpbmcpIHtcbiAgICAgIGNoYXJhY3RlcnNbaWR4XSA9IHtcbiAgICAgICAgLi4uY2hhcixcbiAgICAgICAgY29waWVzOiBjaGFyLmNvcGllcyAtIDEsXG4gICAgICAgIGNvcGllc0FyZURlY3JlbWVudGluZzogdHJ1ZSxcbiAgICAgIH07XG5cbiAgICAgIHByZXZpb3VzQ29weVVwZGF0ZVRpbWUgPSBwLm1pbGxpcygpO1xuXG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChjaGFyLmNvcGllcyA9PT0gbWluQ29waWVzICYmIGNoYXIuY29waWVzQXJlRGVjcmVtZW50aW5nKSB7XG4gICAgICBjaGFyYWN0ZXJzW2lkeF0gPSB7XG4gICAgICAgIC4uLmNoYXIsXG4gICAgICAgIGNvcGllczogY2hhci5jb3BpZXMgKyAxLFxuICAgICAgICBjb3BpZXNBcmVJbmNyZW1lbnRpbmc6IHRydWUsXG4gICAgICAgIGNvcGllc0FyZURlY3JlbWVudGluZzogZmFsc2UsXG4gICAgICB9O1xuXG4gICAgICBwcmV2aW91c0NvcHlVcGRhdGVUaW1lID0gcC5taWxsaXMoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfTtcblxuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIERyYXdcbiAgcC5kcmF3ID0gKCkgPT4ge1xuICAgIGlmIChwLmZyYW1lQ291bnQgJSAxMCA9PT0gMCAmJiAhd2luZG93LmRoYXJtYVBhdXNlZCkge1xuICAgICAgcC5iYWNrZ3JvdW5kKHdpbmRvdy5sYXhhbHRVbml2ZXJzYWxUaGVtZS5iYWNrZ3JvdW5kKTtcbiAgICAgIHAudGV4dEZvbnQoZGhhcm1hRm9udCk7XG4gICAgICBwLnRleHRTaXplKGNoYXJhY3RlclNpemUpO1xuICAgICAgcC50ZXh0QWxpZ24ocC5DRU5URVIsIHAuQ0VOVEVSKTtcbiAgICAgIHAuZmlsbChgJHt3aW5kb3cubGF4YWx0VW5pdmVyc2FsVGhlbWUuZm9yZWdyb3VuZH1gKTtcbiAgICAgIHAuc3Ryb2tlV2VpZ2h0KHN0cm9rZVdpZHRoKTtcbiAgICAgIHAuc3Ryb2tlKHdpbmRvdy5sYXhhbHRVbml2ZXJzYWxUaGVtZS5iYWNrZ3JvdW5kKTtcblxuICAgICAgaWYgKEggJiYgVykge1xuICAgICAgICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAgICAgICAvLyBMb29wIHRocm91Z2ggb3VyIGNvcGllc1xuICAgICAgICBjaGFyYWN0ZXJzLm1hcCgoY2hhcjogTFhMVF9EaGFybWFDYW52YXNDaGFyLCBpZHg6IG51bWJlcikgPT4ge1xuICAgICAgICAgIHAuc2NhbGUoMSwgMSk7XG5cbiAgICAgICAgICBsZXQgcmFuZG9tQ2hhclBpY2sgPSBNYXRoLnJhbmRvbSgpIDw9IDAuNTtcblxuICAgICAgICAgIGlmIChyYW5kb21DaGFyUGljaykge1xuICAgICAgICAgICAgdXBkYXRlQ29waWVzKGNoYXIsIGlkeCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHJhbmRvbUNoYXJQaWNrICYmIHAubWlsbGlzKCkgLSBwcmV2aW91c0NvdW50VXBkYXRlVGltZSA+IDMwMDApIHtcbiAgICAgICAgICAgIHVwZGF0ZUNoYXJhY3RlcihjaGFyLCBpZHgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCBjb3VudEFycmF5OiBudW1iZXJbXSA9IEFycmF5LmZyb20oQXJyYXkoY2hhci5jb3VudCkua2V5cygpKTtcblxuICAgICAgICAgIGNvdW50QXJyYXkgPSBjb3VudEFycmF5Lm1hcCgoY291bnROdW1iZXI6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNvdW50TnVtYmVyICsgMTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gICAgICAgICAgLy8gRHVwbGljYXRlIHBvc2l0aW9uc1xuICAgICAgICAgIGNvdW50QXJyYXkubWFwKChjb3VudE51bWJlcjogbnVtYmVyLCBpZHh4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGxldCB2ZXJ0aWNhbFNjYWxlID0gMSAvIChjaGFyLmNvdW50ICogMC45NSk7XG5cbiAgICAgICAgICAgIGxldCBkdXBsaWNhdGVWZXJ0aWNhbFBvc2l0aW9uOiBudW1iZXIgPVxuICAgICAgICAgICAgICBjaGFyLmNvdW50ID09IDFcbiAgICAgICAgICAgICAgICA/IEggLyB2ZXJ0aWNhbFRyYW5zbGF0aW9uV2hpdGVzcGFjZUNvbXBlbnNhdGlvblxuICAgICAgICAgICAgICAgIDogY2hhcmFjdGVyU2l6ZSAvIHZlcnRpY2FsU2tld0RpdmlzaWJsZSArXG4gICAgICAgICAgICAgICAgICAoY2hhcmFjdGVyU2l6ZSAvIGNoYXJhY3RlclNrZXdEaXZpc2libGUpICogaWR4eDtcblxuICAgICAgICAgICAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgICAgICAgICAgIC8vIE1ha2UgY29waWVzXG4gICAgICAgICAgICBsZXQgY29waWVzQXJyYXk6IG51bWJlcltdID0gQXJyYXkuZnJvbShBcnJheShjaGFyLmNvcGllcykua2V5cygpKTtcbiAgICAgICAgICAgIC8vIGxldCByYW5kb21Db3B5UGljayA9IE1hdGgucmFuZG9tKCkgPD0gMC41O1xuXG4gICAgICAgICAgICBjb3BpZXNBcnJheSA9IGNvcGllc0FycmF5Lm1hcCgoY29weU51bWJlcjogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBjb3B5TnVtYmVyICsgMTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBsZXQgcmFuZG9tQ29weVBpY2sgPSBNYXRoLnJhbmRvbSgpIDw9IDAuNTtcbiAgICAgICAgICAgIC8vIGxldCBjb3B5VGltZXIgPSBwLm1pbGxpcygpIC0gcHJldmlvdXNDb3BpZXNWaXNpYmxlVGltZSA+IDIwMDA7XG4gICAgICAgICAgICBwcmV2aW91c0NvcHlVcGRhdGVUaW1lO1xuXG4gICAgICAgICAgICAvLyBsZXQgaXNGaXJzdENvdW50ID0gdHJ1ZTtcblxuICAgICAgICAgICAgY29waWVzQXJyYXkubWFwKChjb3B5TnVtYmVyOiBudW1iZXIsIGlkeHh4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgLy8gbGV0IGNlbnRlckNvb3Jkc1ggPSBXIC8gMjtcbiAgICAgICAgICAgICAgLy8gbGV0IGNlbnRlckNvb3Jkc1kgPSBIIC8gMjtcblxuICAgICAgICAgICAgICAvLyBsZXQgaG9yaXpvbnRhbFRyYW5zbGF0ZSA9XG4gICAgICAgICAgICAgIC8vICAgY29weU51bWJlciAhPT0gMVxuICAgICAgICAgICAgICAvLyAgICAgPyAocHJldmlvdXNIb3Jpem9udGFsVHJhbnNsYXRpb24oaWR4KSArXG4gICAgICAgICAgICAgIC8vICAgICAgICAgKHN0cm9rZU9mZnNldCAvIChwLm1vdXNlWCAvIDEwMCkpICogY29weU51bWJlcilcbiAgICAgICAgICAgICAgLy8gICAgIDogcHJldmlvdXNIb3Jpem9udGFsVHJhbnNsYXRpb24oaWR4KSArXG4gICAgICAgICAgICAgIC8vICAgICAgIHN0cm9rZU9mZnNldCAqIGNvcHlOdW1iZXI7XG5cbiAgICAgICAgICAgICAgLy8gbGV0IHZlcnRpY2FsVHJhbnNsYXRlID1cbiAgICAgICAgICAgICAgLy8gICBjb3B5TnVtYmVyICE9PSAxXG4gICAgICAgICAgICAgIC8vICAgICA/IChkdXBsaWNhdGVWZXJ0aWNhbFBvc2l0aW9uIC0gKHN0cm9rZU9mZnNldCAvIChwLm1vdXNlWCAvIDEwMCkpICogY29weU51bWJlcilcbiAgICAgICAgICAgICAgLy8gICAgIDogZHVwbGljYXRlVmVydGljYWxQb3NpdGlvbiAtIHN0cm9rZU9mZnNldCAqIGNvcHlOdW1iZXI7XG5cbiAgICAgICAgICAgICAgbGV0IGhvcml6b250YWxUcmFuc2xhdGUgPVxuICAgICAgICAgICAgICAgIHByZXZpb3VzSG9yaXpvbnRhbFRyYW5zbGF0aW9uKGlkeCkgKyBzdHJva2VPZmZzZXQgKiBjb3B5TnVtYmVyO1xuXG4gICAgICAgICAgICAgIGxldCB2ZXJ0aWNhbFRyYW5zbGF0ZSA9XG4gICAgICAgICAgICAgICAgZHVwbGljYXRlVmVydGljYWxQb3NpdGlvbiAtIHN0cm9rZU9mZnNldCAqIGNvcHlOdW1iZXI7XG5cbiAgICAgICAgICAgICAgcC5wdXNoKCk7XG4gICAgICAgICAgICAgIHAuc2NhbGUoMSwgdmVydGljYWxTY2FsZSk7XG4gICAgICAgICAgICAgIHAudGV4dChjaGFyLmxldHRlciwgaG9yaXpvbnRhbFRyYW5zbGF0ZSwgdmVydGljYWxUcmFuc2xhdGUpO1xuICAgICAgICAgICAgICBwLnBvcCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBwLndpbmRvd1Jlc2l6ZWQgPSAoKSA9PiB7XG4gICAgcC5yZXNpemVDYW52YXMoVywgSCk7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEaGFybWFDYW52YXNEaXNwbGF5O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sketches/p5/no-water-distort-L.canvas.tsx\n");

/***/ })

})