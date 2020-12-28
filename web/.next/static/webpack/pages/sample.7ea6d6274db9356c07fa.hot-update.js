webpackHotUpdate_N_E("pages/sample",{

/***/ "./constants/styles/Base.tsx":
/*!***********************************!*\
  !*** ./constants/styles/Base.tsx ***!
  \***********************************/
/*! exports provided: Base */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Base\", function() { return Base; });\n// Base.js:\n// Core measurements throughout the app.\n// Begin Interface\n//////////////////////////////////////////////////////////////////////\nvar Base = {\n  // Core Base Measurement\n  Size: {\n    Lg: 20,\n    Md: 20,\n    Sm: 20\n  },\n  // Root Element Measurement\n  Rem: {\n    Lg: 14,\n    // px\n    Md: 16,\n    // px\n    Sm: 18 // px\n\n  },\n  // Responsive Breakpoints\n  Media: {\n    Width: {\n      Lg: 1280,\n      // px\n      Md: 1024,\n      // px\n      Sm: 676 // px\n\n    },\n    Height: {\n      Lg: 828,\n      // px\n      Md: 640,\n      // px\n      Sm: 568 // px\n\n    }\n  },\n  // Site Grid\n  Grid: {\n    SiteWidth: 1280,\n    // px\n    ReadingWidth: 1000,\n    // px\n    Nav: {\n      Size: {\n        Lg: 50,\n        // px\n        Md: 50,\n        // px\n        Sm: 50 // px\n\n      }\n    },\n    Footer: {\n      Size: {\n        Lg: 35,\n        // px\n        Md: 35,\n        // px\n        Sm: 35 // px\n\n      }\n    },\n    // Universal padding from the edge of the browser\n    // Read more: https://read.compassofdesign.com/guides-gutters-and-grids-2ce6092fc3de\n    Gutter: {\n      Lg: {\n        Top: 20,\n        // px\n        Bottom: 20,\n        // px\n        Right: 20,\n        // px\n        Left: 20 // px\n\n      },\n      Md: {\n        Top: 45,\n        // px\n        Bottom: 45,\n        // px\n        Right: 20,\n        // px\n        Left: 20 // px\n\n      },\n      Sm: {\n        Top: 20,\n        // px\n        Bottom: 20,\n        // px\n        Right: 15,\n        // px\n        Left: 15 // px\n\n      }\n    },\n    Indent: {\n      Lg: {\n        X: 175,\n        // px\n        Y: 20 // px\n\n      },\n      Md: {\n        X: 0,\n        // px\n        Y: 10 // px\n\n      },\n      Sm: {\n        X: 0,\n        // px\n        Y: 0 // px\n\n      }\n    }\n  },\n  // View Width (vw) Based Measurements\n  ViewWidth: {\n    Padding: {\n      Sm: \"4.5\",\n      // vw\n      Md: \"4.5\",\n      // vw\n      Lg: \"1.2\" // vw\n\n    }\n  },\n  // Buttons\n  Button: {\n    Lg: 35,\n    // px\n    Md: 35,\n    // px\n    Sm: 35 // px\n\n  },\n  // Inputs\n  Input: {\n    Lg: 44,\n    // px\n    Md: 35,\n    // px\n    Sm: 35 // px\n\n  },\n  // Transitions\n  Transition: {\n    String: \"all 0.25s ease\",\n    Duration: 0.25,\n    // seconds\n    Ease: [0.29, 0.77, 0.57, 0.85],\n    // Cubic Bezier Ease\n    Page: 2000 // milliseconds. Try to not go lower than 350ms or it gets buggy. TODO.\n\n  },\n  // Geometry\n  Geometry: {\n    Radius: 15 // px\n\n  },\n  // Frame\n  FrameSize: {\n    Lg: 3,\n    // rem\n    Md: 3.5,\n    // rem\n    Sm: 4 // rem\n\n  }\n}; // End Component\n//////////////////////////////////////////////////////////////////////\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uc3RhbnRzL3N0eWxlcy9CYXNlLnRzeD83NTMzIl0sIm5hbWVzIjpbIkJhc2UiLCJTaXplIiwiTGciLCJNZCIsIlNtIiwiUmVtIiwiTWVkaWEiLCJXaWR0aCIsIkhlaWdodCIsIkdyaWQiLCJTaXRlV2lkdGgiLCJSZWFkaW5nV2lkdGgiLCJOYXYiLCJGb290ZXIiLCJHdXR0ZXIiLCJUb3AiLCJCb3R0b20iLCJSaWdodCIsIkxlZnQiLCJJbmRlbnQiLCJYIiwiWSIsIlZpZXdXaWR0aCIsIlBhZGRpbmciLCJCdXR0b24iLCJJbnB1dCIsIlRyYW5zaXRpb24iLCJTdHJpbmciLCJEdXJhdGlvbiIsIkVhc2UiLCJQYWdlIiwiR2VvbWV0cnkiLCJSYWRpdXMiLCJGcmFtZVNpemUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVPLElBQU1BLElBQUksR0FBRztBQUNsQjtBQUNBQyxNQUFJLEVBQUU7QUFDSkMsTUFBRSxFQUFFLEVBREE7QUFFSkMsTUFBRSxFQUFFLEVBRkE7QUFHSkMsTUFBRSxFQUFFO0FBSEEsR0FGWTtBQVFsQjtBQUNBQyxLQUFHLEVBQUU7QUFDSEgsTUFBRSxFQUFFLEVBREQ7QUFDSztBQUNSQyxNQUFFLEVBQUUsRUFGRDtBQUVLO0FBQ1JDLE1BQUUsRUFBRSxFQUhELENBR0s7O0FBSEwsR0FUYTtBQWVsQjtBQUNBRSxPQUFLLEVBQUU7QUFDTEMsU0FBSyxFQUFFO0FBQ0xMLFFBQUUsRUFBRSxJQURDO0FBQ0s7QUFDVkMsUUFBRSxFQUFFLElBRkM7QUFFSztBQUNWQyxRQUFFLEVBQUUsR0FIQyxDQUdJOztBQUhKLEtBREY7QUFNTEksVUFBTSxFQUFFO0FBQ05OLFFBQUUsRUFBRSxHQURFO0FBQ0c7QUFDVEMsUUFBRSxFQUFFLEdBRkU7QUFFRztBQUNUQyxRQUFFLEVBQUUsR0FIRSxDQUdHOztBQUhIO0FBTkgsR0FoQlc7QUE2QmxCO0FBQ0FLLE1BQUksRUFBRTtBQUNKQyxh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IEJhc2UuanM6XG4vLyBDb3JlIG1lYXN1cmVtZW50cyB0aHJvdWdob3V0IHRoZSBhcHAuXG5cbi8vIEJlZ2luIEludGVyZmFjZVxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5leHBvcnQgY29uc3QgQmFzZSA9IHtcbiAgLy8gQ29yZSBCYXNlIE1lYXN1cmVtZW50XG4gIFNpemU6IHtcbiAgICBMZzogMjAsXG4gICAgTWQ6IDIwLFxuICAgIFNtOiAyMCxcbiAgfSxcblxuICAvLyBSb290IEVsZW1lbnQgTWVhc3VyZW1lbnRcbiAgUmVtOiB7XG4gICAgTGc6IDE0LCAvLyBweFxuICAgIE1kOiAxNiwgLy8gcHhcbiAgICBTbTogMTgsIC8vIHB4XG4gIH0sXG5cbiAgLy8gUmVzcG9uc2l2ZSBCcmVha3BvaW50c1xuICBNZWRpYToge1xuICAgIFdpZHRoOiB7XG4gICAgICBMZzogMTI4MCwgLy8gcHhcbiAgICAgIE1kOiAxMDI0LCAvLyBweFxuICAgICAgU206IDY3NiwgLy8gcHhcbiAgICB9LFxuICAgIEhlaWdodDoge1xuICAgICAgTGc6IDgyOCwgLy8gcHhcbiAgICAgIE1kOiA2NDAsIC8vIHB4XG4gICAgICBTbTogNTY4LCAvLyBweFxuICAgIH0sXG4gIH0sXG5cbiAgLy8gU2l0ZSBHcmlkXG4gIEdyaWQ6IHtcbiAgICBTaXRlV2lkdGg6IDEyODAsIC8vIHB4XG4gICAgUmVhZGluZ1dpZHRoOiAxMDAwLCAvLyBweFxuICAgIE5hdjoge1xuICAgICAgU2l6ZToge1xuICAgICAgICBMZzogNTAsIC8vIHB4XG4gICAgICAgIE1kOiA1MCwgLy8gcHhcbiAgICAgICAgU206IDUwLCAvLyBweFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgRm9vdGVyOiB7XG4gICAgICBTaXplOiB7XG4gICAgICAgIExnOiAzNSwgLy8gcHhcbiAgICAgICAgTWQ6IDM1LCAvLyBweFxuICAgICAgICBTbTogMzUsIC8vIHB4XG4gICAgICB9LFxuICAgIH0sXG5cbiAgICAvLyBVbml2ZXJzYWwgcGFkZGluZyBmcm9tIHRoZSBlZGdlIG9mIHRoZSBicm93c2VyXG4gICAgLy8gUmVhZCBtb3JlOiBodHRwczovL3JlYWQuY29tcGFzc29mZGVzaWduLmNvbS9ndWlkZXMtZ3V0dGVycy1hbmQtZ3JpZHMtMmNlNjA5MmZjM2RlXG4gICAgR3V0dGVyOiB7XG4gICAgICBMZzoge1xuICAgICAgICBUb3A6IDIwLCAvLyBweFxuICAgICAgICBCb3R0b206IDIwLCAvLyBweFxuICAgICAgICBSaWdodDogMjAsIC8vIHB4XG4gICAgICAgIExlZnQ6IDIwLCAvLyBweFxuICAgICAgfSxcbiAgICAgIE1kOiB7XG4gICAgICAgIFRvcDogNDUsIC8vIHB4XG4gICAgICAgIEJvdHRvbTogNDUsIC8vIHB4XG4gICAgICAgIFJpZ2h0OiAyMCwgLy8gcHhcbiAgICAgICAgTGVmdDogMjAsIC8vIHB4XG4gICAgICB9LFxuICAgICAgU206IHtcbiAgICAgICAgVG9wOiAyMCwgLy8gcHhcbiAgICAgICAgQm90dG9tOiAyMCwgLy8gcHhcbiAgICAgICAgUmlnaHQ6IDE1LCAvLyBweFxuICAgICAgICBMZWZ0OiAxNSwgLy8gcHhcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIEluZGVudDoge1xuICAgICAgTGc6IHtcbiAgICAgICAgWDogMTc1LCAvLyBweFxuICAgICAgICBZOiAyMCwgLy8gcHhcbiAgICAgIH0sXG4gICAgICBNZDoge1xuICAgICAgICBYOiAwLCAvLyBweFxuICAgICAgICBZOiAxMCwgLy8gcHhcbiAgICAgIH0sXG4gICAgICBTbToge1xuICAgICAgICBYOiAwLCAvLyBweFxuICAgICAgICBZOiAwLCAvLyBweFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXG4gIC8vIFZpZXcgV2lkdGggKHZ3KSBCYXNlZCBNZWFzdXJlbWVudHNcbiAgVmlld1dpZHRoOiB7XG4gICAgUGFkZGluZzoge1xuICAgICAgU206IFwiNC41XCIsIC8vIHZ3XG4gICAgICBNZDogXCI0LjVcIiwgLy8gdndcbiAgICAgIExnOiBcIjEuMlwiLCAvLyB2d1xuICAgIH0sXG4gIH0sXG5cbiAgLy8gQnV0dG9uc1xuICBCdXR0b246IHtcbiAgICBMZzogMzUsIC8vIHB4XG4gICAgTWQ6IDM1LCAvLyBweFxuICAgIFNtOiAzNSwgLy8gcHhcbiAgfSxcblxuICAvLyBJbnB1dHNcbiAgSW5wdXQ6IHtcbiAgICBMZzogNDQsIC8vIHB4XG4gICAgTWQ6IDM1LCAvLyBweFxuICAgIFNtOiAzNSwgLy8gcHhcbiAgfSxcblxuICAvLyBUcmFuc2l0aW9uc1xuICBUcmFuc2l0aW9uOiB7XG4gICAgU3RyaW5nOiBcImFsbCAwLjI1cyBlYXNlXCIsXG4gICAgRHVyYXRpb246IDAuMjUsIC8vIHNlY29uZHNcbiAgICBFYXNlOiBbMC4yOSwgMC43NywgMC41NywgMC44NV0sIC8vIEN1YmljIEJlemllciBFYXNlXG4gICAgUGFnZTogMjAwMCwgLy8gbWlsbGlzZWNvbmRzLiBUcnkgdG8gbm90IGdvIGxvd2VyIHRoYW4gMzUwbXMgb3IgaXQgZ2V0cyBidWdneS4gVE9ETy5cbiAgfSxcblxuICAvLyBHZW9tZXRyeVxuICBHZW9tZXRyeToge1xuICAgIFJhZGl1czogMTUsIC8vIHB4XG4gIH0sXG5cbiAgLy8gRnJhbWVcbiAgRnJhbWVTaXplOiB7XG4gICAgTGc6IDMsIC8vIHJlbVxuICAgIE1kOiAzLjUsIC8vIHJlbVxuICAgIFNtOiA0LCAvLyByZW1cbiAgfSxcbn07XG5cbi8vIEVuZCBDb21wb25lbnRcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./constants/styles/Base.tsx\n");

/***/ })

})