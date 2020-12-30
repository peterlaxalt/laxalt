webpackHotUpdate_N_E("pages/_app",{

/***/ "./sketches/p5/footer-canvas.tsx":
/*!***************************************!*\
  !*** ./sketches/p5/footer-canvas.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/**\n *\n * Shader fun\n * @author Peter Laxalt\n *\n */\n// Begin Component\n// __________________________________________________________________________\nvar P5CanvasDisplay = function P5CanvasDisplay(W, H, ID, CanvasTheme) {\n  return function (p) {\n    // _________________________________________________\n    // Config\n    // _________________________________________________\n    // Setup\n    p.setup = function () {\n      // Our Canvas\n      p.createCanvas(W, H);\n    }; // _________________________________________________\n    // Draw\n\n\n    p.draw = function () {\n      if (p.mouseIsPressed) {\n        p.fill(window.laxaltUniversalTheme.foreground);\n        p.stroke(window.laxaltUniversalTheme.background);\n        p.strokeWeight(1.5);\n        p.ellipse(p.mouseX, p.mouseY, W / 6, W / 6);\n      } else if (p.mouseX !== 0 || p.mouseY !== 0) {\n        p.fill(window.laxaltUniversalTheme.background);\n        p.stroke(window.laxaltUniversalTheme.foreground);\n        p.strokeWeight(1.5);\n        p.ellipse(p.mouseX, p.mouseY, W / 6, W / 6);\n      }\n    };\n\n    p.windowResized = function () {\n      p.resizeCanvas(W, H);\n    };\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (P5CanvasDisplay);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2tldGNoZXMvcDUvZm9vdGVyLWNhbnZhcy50c3g/OGNlNiJdLCJuYW1lcyI6WyJQNUNhbnZhc0Rpc3BsYXkiLCJXIiwiSCIsIklEIiwiQ2FudmFzVGhlbWUiLCJwIiwic2V0dXAiLCJjcmVhdGVDYW52YXMiLCJkcmF3IiwibW91c2VJc1ByZXNzZWQiLCJmaWxsIiwid2luZG93IiwibGF4YWx0VW5pdmVyc2FsVGhlbWUiLCJmb3JlZ3JvdW5kIiwic3Ryb2tlIiwiYmFja2dyb3VuZCIsInN0cm9rZVdlaWdodCIsImVsbGlwc2UiLCJtb3VzZVgiLCJtb3VzZVkiLCJ3aW5kb3dSZXNpemVkIiwicmVzaXplQ2FudmFzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFnQkEsSUFBTUEsZUFBcUMsR0FBRyxTQUF4Q0EsZUFBd0MsQ0FDNUNDLENBRDRDLEVBRTVDQyxDQUY0QyxFQUc1Q0MsRUFINEMsRUFJNUNDLFdBSjRDO0FBQUEsU0FLekMsVUFBQ0MsQ0FBRCxFQUFXO0FBQ2Q7QUFDQTtBQUVBO0FBQ0E7QUFDQUEsS0FBQyxDQUFDQyxLQUFGLEdBQVUsWUFBTTtBQUNkO0FBQ0FELE9BQUMsQ0FBQ0UsWUFBRixDQUFlTixDQUFmLEVBQWtCQyxDQUFsQjtBQUNELEtBSEQsQ0FOYyxDQVdkO0FBQ0E7OztBQUNBRyxLQUFDLENBQUNHLElBQUYsR0FBUyxZQUFNO0FBQ2IsVUFBSUgsQ0FBQyxDQUFDSSxjQUFOLEVBQXNCO0FBQ3BCSixTQUFDLENBQUNLLElBQUYsQ0FBT0MsTUFBTSxDQUFDQyxvQkFBUCxDQUE0QkMsVUFBbkM7QUFDQVIsU0FBQyxDQUFDUyxNQUFGLENBQVNILE1BQU0sQ0FBQ0Msb0JBQVAsQ0FBNEJHLFVBQXJDO0FBQ0FWLFNBQUMsQ0FBQ1csWUFBRixDQUFlLEdBQWY7QUFDQVgsU0FBQyxDQUFDWSxPQUFGLENBQVVaLENBQUMsQ0FBQ2EsTUFBWixFQUFvQmIsQ0FBQyxDQUFDYyxNQUF0QixFQUE4QmxCLENBQUMsR0FBRyxDQUFsQyxFQUFxQ0EsQ0FBQyxHQUFHLENBQXpDO0FBQ0QsT0FMRCxNQUtPLElBQUlJLENBQUMsQ0FBQ2EsTUFBRixLQUFhLENBQWIsSUFBa0JiLENBQUMsQ0FBQ2MsTUFBRixLQUFhLENBQW5DLEVBQXNDO0FBQzNDZCxTQUFDLENBQUNLLElBQUYsQ0FBT0MsTUFBTSxDQUFDQyxvQkFBUCxDQUE0QkcsVUFBbkM7QUFDQVYsU0FBQyxDQUFDUyxNQUFGLENBQVNILE1BQU0sQ0FBQ0Msb0JBQVAsQ0FBNEJDLFVBQXJDO0FBQ0FSLFNBQUMsQ0FBQ1csWUFBRixDQUFlLEdBQWY7QUFDQVgsU0FBQyxDQUFDWSxPQUFGLENBQVVaLENBQUMsQ0FBQ2EsTUFBWixFQUFvQmIsQ0FBQyxDQUFDYyxNQUF0QixFQUE4QmxCLENBQUMsR0FBRyxDQUFsQyxFQUFxQ0EsQ0FBQyxHQUFHLENBQXpDO0FBQ0Q7QUFDRixLQVpEOztBQWNBSSxLQUFDLENBQUNlLGFBQUYsR0FBa0IsWUFBTTtBQUN0QmYsT0FBQyxDQUFDZ0IsWUFBRixDQUFlcEIsQ0FBZixFQUFrQkMsQ0FBbEI7QUFDRCxLQUZEO0FBR0QsR0FuQzZDO0FBQUEsQ0FBOUM7O0FBcUNlRiw4RUFBZiIsImZpbGUiOiIuL3NrZXRjaGVzL3A1L2Zvb3Rlci1jYW52YXMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKlxuICogU2hhZGVyIGZ1blxuICogQGF1dGhvciBQZXRlciBMYXhhbHRcbiAqXG4gKi9cblxuaW1wb3J0IHA1IGZyb20gXCJwNVwiO1xuaW1wb3J0IHsgTFhMVF9Db2xvclRoZW1lIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9zdHlsZXMvQ29sb3JcIjtcblxuLy8gQmVnaW4gQ29tcG9uZW50XG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuXG5leHBvcnQgdHlwZSBMWExUX1A1Q2FudmFzID0ge1xuICBXOiBudW1iZXI7XG4gIEg6IG51bWJlcjtcbiAgSUQ6IG51bWJlcjtcbiAgQ2FudmFzVGhlbWU6IExYTFRfQ29sb3JUaGVtZTtcbn07XG5cbmV4cG9ydCB0eXBlIExYTFRfUDVDYW52YXNEaXNwbGF5ID0gKFxuICBXOiBudW1iZXIsXG4gIEg6IG51bWJlcixcbiAgSUQ6IG51bWJlcixcbiAgQ2FudmFzVGhlbWU6IExYTFRfQ29sb3JUaGVtZVxuKSA9PiAocDogcDUpID0+IHZvaWQ7XG5cbmNvbnN0IFA1Q2FudmFzRGlzcGxheTogTFhMVF9QNUNhbnZhc0Rpc3BsYXkgPSAoXG4gIFcsXG4gIEgsXG4gIElELFxuICBDYW52YXNUaGVtZVxuKSA9PiAocDogcDUpID0+IHtcbiAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAvLyBDb25maWdcblxuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIFNldHVwXG4gIHAuc2V0dXAgPSAoKSA9PiB7XG4gICAgLy8gT3VyIENhbnZhc1xuICAgIHAuY3JlYXRlQ2FudmFzKFcsIEgpO1xuICB9O1xuXG4gIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gRHJhd1xuICBwLmRyYXcgPSAoKSA9PiB7XG4gICAgaWYgKHAubW91c2VJc1ByZXNzZWQpIHtcbiAgICAgIHAuZmlsbCh3aW5kb3cubGF4YWx0VW5pdmVyc2FsVGhlbWUuZm9yZWdyb3VuZCk7XG4gICAgICBwLnN0cm9rZSh3aW5kb3cubGF4YWx0VW5pdmVyc2FsVGhlbWUuYmFja2dyb3VuZCk7XG4gICAgICBwLnN0cm9rZVdlaWdodCgxLjUpO1xuICAgICAgcC5lbGxpcHNlKHAubW91c2VYLCBwLm1vdXNlWSwgVyAvIDYsIFcgLyA2KTtcbiAgICB9IGVsc2UgaWYgKHAubW91c2VYICE9PSAwIHx8IHAubW91c2VZICE9PSAwKSB7XG4gICAgICBwLmZpbGwod2luZG93LmxheGFsdFVuaXZlcnNhbFRoZW1lLmJhY2tncm91bmQpO1xuICAgICAgcC5zdHJva2Uod2luZG93LmxheGFsdFVuaXZlcnNhbFRoZW1lLmZvcmVncm91bmQpO1xuICAgICAgcC5zdHJva2VXZWlnaHQoMS41KTtcbiAgICAgIHAuZWxsaXBzZShwLm1vdXNlWCwgcC5tb3VzZVksIFcgLyA2LCBXIC8gNik7XG4gICAgfVxuICB9O1xuXG4gIHAud2luZG93UmVzaXplZCA9ICgpID0+IHtcbiAgICBwLnJlc2l6ZUNhbnZhcyhXLCBIKTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFA1Q2FudmFzRGlzcGxheTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sketches/p5/footer-canvas.tsx\n");

/***/ })

})