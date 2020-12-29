webpackHotUpdate_N_E("pages/index",{

/***/ "./constants/site/Settings.tsx":
/*!*************************************!*\
  !*** ./constants/site/Settings.tsx ***!
  \*************************************/
/*! exports provided: Settings, SiteProjects, SiteNavigation, __DEBUG__ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Settings\", function() { return Settings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SiteProjects\", function() { return SiteProjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SiteNavigation\", function() { return SiteNavigation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__DEBUG__\", function() { return __DEBUG__; });\n/* harmony import */ var _styles_Color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/Color */ \"./constants/styles/Color.tsx\");\n/**\n *\n * Settings.js\n * @author Peter Laxalt\n * @description This is the sitewide information that is used throughout the entire\n * build of the site. This goes from SEO to headings and also into the\n * core Gatsby config files as well.\n *\n */\n// Imports\n//////////////////////////////////////////////////////////////////////\n\n// Begin Component\n//////////////////////////////////////////////////////////////////////\nvar Settings = {\n  siteTitle: \"Play-Well TEKnologies | LEGO®-inspired engineering classes for kids & adults.\",\n  siteTitleShort: \"Play-Well\",\n  siteDescription: \"Kids are natural engineers. We help them realize it.\",\n  siteBaseKeywords: \"lego, engineering, engineering, classes, summer, camps, spring, learning, learn, play, education, knowledge\",\n  siteUrl: \"https://play-well-staging.netlify.com/\",\n  themeColor: _styles_Color__WEBPACK_IMPORTED_MODULE_0__[\"Color\"].Primary,\n  secondaryColor: _styles_Color__WEBPACK_IMPORTED_MODULE_0__[\"Color\"].Secondary,\n  backgroundColor: _styles_Color__WEBPACK_IMPORTED_MODULE_0__[\"Color\"].Background,\n  pathPrefix: \"/\",\n  logo: \"src/assets/images/icon.png\",\n  logoLight: \"src/assets/images/icon.png\",\n  logoDark: \"src/assets/images/icon.png\",\n  social: {\n    twitter: \"PlayWell_TEK\",\n    facebook: \"PlayWellTEK\",\n    instagram: \"playwellteknologies\",\n    fbAppId: \"56639339020281\"\n  },\n  contactPage: \"/contact\",\n  miscPage: \"/misc\"\n};\nvar SiteProjects = {};\nvar SiteNavigation = {\n  FrameItems: [{\n    label: \"Studio\",\n    href: \"/sample\"\n  }, {\n    label: \"Art\",\n    href: \"/sample\"\n  }, {\n    label: \"Design\",\n    href: \"/sample\"\n  }, {\n    label: \"Strategy\",\n    href: \"/sample\"\n  }, {\n    label: \"Interactive\",\n    href: \"/sample\"\n  }, {\n    label: \"Murals\",\n    href: \"/sample\"\n  }, {\n    label: \"Code\",\n    href: \"/sample\"\n  }, {\n    label: \"Lab\",\n    href: \"/sample\"\n  }, {\n    label: \"Products\",\n    href: \"/sample\"\n  }, {\n    label: \"Music\",\n    href: \"/sample\"\n  }, {\n    label: \"Tattoo\",\n    href: \"/sample\"\n  }, {\n    label: \"Shop\",\n    href: \"/sample\"\n  }, {\n    label: \"Resources\",\n    href: \"/sample\"\n  }, {\n    label: \"Advice\",\n    href: \"/sample\"\n  }, {\n    label: \"Fonts\",\n    href: \"/sample\"\n  }, {\n    label: \"Contact\",\n    href: \"/sample\"\n  }],\n  OverlayNav: {\n    NavItems: [{\n      label: \"Art\",\n      href: \"/art\",\n      caption: \"Lorem ipsum\"\n    }, {\n      label: \"Design\",\n      href: \"/sample\",\n      caption: \"Lorem ipsum\"\n    }, {\n      label: \"Code\",\n      href: \"/code\",\n      caption: \"Lorem ipsum\"\n    }, {\n      label: \"Studio\",\n      href: \"/studio\",\n      caption: \"Lorem ipsum\"\n    }, {\n      label: \"Thoughts\",\n      href: \"/thoughts\",\n      caption: \"Lorem ipsum\"\n    } // {\n    //   label: \"Learn\",\n    //   href: \"/sample\",\n    //   caption: \"Lorem ipsum\",\n    // },\n    // {\n    //   label: \"Shop\",\n    //   href: \"/sample\",\n    //   caption: \"Lorem ipsum\",\n    // },\n    // {\n    //   label: \"Contact\",\n    //   href: \"/sample\",\n    //   caption: \"Lorem ipsum\",\n    // },\n    ],\n    SocialItems: [{\n      label: \"Dribbble\",\n      href: \"/\"\n    }, {\n      label: \"Github\",\n      href: \"/\"\n    }, {\n      label: \"Instagram\",\n      href: \"/\"\n    }, {\n      label: \"LinkedIn\",\n      href: \"/\"\n    }]\n  }\n};\n/**\n *\n * @name __DEBUG__\n * @description Debug mode for console\n *\n */\n\nvar __DEBUG__ = true;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uc3RhbnRzL3NpdGUvU2V0dGluZ3MudHN4PzQzZDAiXSwibmFtZXMiOlsiU2V0dGluZ3MiLCJzaXRlVGl0bGUiLCJzaXRlVGl0bGVTaG9ydCIsInNpdGVEZXNjcmlwdGlvbiIsInNpdGVCYXNlS2V5d29yZHMiLCJzaXRlVXJsIiwidGhlbWVDb2xvciIsIkNvbG9yIiwiUHJpbWFyeSIsInNlY29uZGFyeUNvbG9yIiwiU2Vjb25kYXJ5IiwiYmFja2dyb3VuZENvbG9yIiwiQmFja2dyb3VuZCIsInBhdGhQcmVmaXgiLCJsb2dvIiwibG9nb0xpZ2h0IiwibG9nb0RhcmsiLCJzb2NpYWwiLCJ0d2l0dGVyIiwiZmFjZWJvb2siLCJpbnN0YWdyYW0iLCJmYkFwcElkIiwiY29udGFjdFBhZ2UiLCJtaXNjUGFnZSIsIlNpdGVQcm9qZWN0cyIsIlNpdGVOYXZpZ2F0aW9uIiwiRnJhbWVJdGVtcyIsImxhYmVsIiwiaHJlZiIsIk92ZXJsYXlOYXYiLCJOYXZJdGVtcyIsImNhcHRpb24iLCJTb2NpYWxJdGVtcyIsIl9fREVCVUdfXyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBb0NBO0FBQ0E7QUFFTyxJQUFNQSxRQUFRLEdBQUc7QUFDdEJDLFdBQVMsRUFDUCwrRUFGb0I7QUFHdEJDLGdCQUFjLEVBQUUsV0FITTtBQUl0QkMsaUJBQWUsRUFBRSxzREFKSztBQUt0QkMsa0JBQWdCLEVBQ2QsNkdBTm9CO0FBT3RCQyxTQUFPLEVBQUUsd0NBUGE7QUFRdEJDLFlBQVUsRUFBRUMsbURBQUssQ0FBQ0MsT0FSSTtBQVN0QkMsZ0JBQWMsRUFBRUYsbURBQUssQ0FBQ0csU0FUQTtBQVV0QkMsaUJBQWUsRUFBRUosbURBQUssQ0FBQ0ssVUFWRDtBQVd0QkMsWUFBVSxFQUFFLEdBWFU7QUFZdEJDLE1BQUks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O0FBRlIsS0FUVyxFQWFYO0FBQ0VELFdBQUssRUFBRSxVQURUO0FBRUVDLFVBQUksRUFBRTtBQUZSLEtBYlc7QUEzQ0g7QUFuRXFDLENBQTVDO0FBbUlQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNSyxTQUFTLEdBQUcsSUFBbEIiLCJmaWxlIjoiLi9jb25zdGFudHMvc2l0ZS9TZXR0aW5ncy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqXG4gKiBTZXR0aW5ncy5qc1xuICogQGF1dGhvciBQZXRlciBMYXhhbHRcbiAqIEBkZXNjcmlwdGlvbiBUaGlzIGlzIHRoZSBzaXRld2lkZSBpbmZvcm1hdGlvbiB0aGF0IGlzIHVzZWQgdGhyb3VnaG91dCB0aGUgZW50aXJlXG4gKiBidWlsZCBvZiB0aGUgc2l0ZS4gVGhpcyBnb2VzIGZyb20gU0VPIHRvIGhlYWRpbmdzIGFuZCBhbHNvIGludG8gdGhlXG4gKiBjb3JlIEdhdHNieSBjb25maWcgZmlsZXMgYXMgd2VsbC5cbiAqXG4gKi9cblxuLy8gSW1wb3J0c1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiLi4vc3R5bGVzL0NvbG9yXCI7XG5cbmV4cG9ydCB0eXBlIExYTFRfTGlua0l0ZW0gPSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGhyZWY/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBMWExUX0xpbmtJdGVtV2l0aENhcHRpb24gPSBMWExUX0xpbmtJdGVtICYge1xuICBjYXB0aW9uPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgTFhMVF9TaXRlTmF2aWdhdGlvbiA9IHtcbiAgRnJhbWVJdGVtczogTFhMVF9MaW5rSXRlbVtdO1xuICBPdmVybGF5TmF2OiB7XG4gICAgU29jaWFsSXRlbXM6IExYTFRfTGlua0l0ZW1bXTtcbiAgICBOYXZJdGVtczogTFhMVF9MaW5rSXRlbVdpdGhDYXB0aW9uW107XG4gIH07XG59O1xuXG5leHBvcnQgdHlwZSBMWExUX0NhdGVnb3J5ID0ge1xuICBuYW1lOiBzdHJpbmc7XG4gIHNsdWc6IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgTFhMVF9Qcm9qZWN0ID0ge1xuICBuYW1lOiBzdHJpbmc7XG4gIHNsdWc6IHN0cmluZztcbiAgY292ZXI6IHN0cmluZztcbiAgY2F0ZWdvcmllczogTFhMVF9DYXRlZ29yeVtdO1xuICB0eXBlOiBzdHJpbmc7XG4gIGxvY2F0aW9uPzogc3RyaW5nO1xuICBkdXJhdGlvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgTFhMVF9TaXRlUHJvamVjdHMgPSBMWExUX1Byb2plY3RbXTtcblxuLy8gQmVnaW4gQ29tcG9uZW50XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmV4cG9ydCBjb25zdCBTZXR0aW5ncyA9IHtcbiAgc2l0ZVRpdGxlOlxuICAgIFwiUGxheS1XZWxsIFRFS25vbG9naWVzIHwgTEVHT8KuLWluc3BpcmVkIGVuZ2luZWVyaW5nIGNsYXNzZXMgZm9yIGtpZHMgJiBhZHVsdHMuXCIsXG4gIHNpdGVUaXRsZVNob3J0OiBcIlBsYXktV2VsbFwiLFxuICBzaXRlRGVzY3JpcHRpb246IFwiS2lkcyBhcmUgbmF0dXJhbCBlbmdpbmVlcnMuIFdlIGhlbHAgdGhlbSByZWFsaXplIGl0LlwiLFxuICBzaXRlQmFzZUtleXdvcmRzOlxuICAgIFwibGVnbywgZW5naW5lZXJpbmcsIGVuZ2luZWVyaW5nLCBjbGFzc2VzLCBzdW1tZXIsIGNhbXBzLCBzcHJpbmcsIGxlYXJuaW5nLCBsZWFybiwgcGxheSwgZWR1Y2F0aW9uLCBrbm93bGVkZ2VcIixcbiAgc2l0ZVVybDogXCJodHRwczovL3BsYXktd2VsbC1zdGFnaW5nLm5ldGxpZnkuY29tL1wiLFxuICB0aGVtZUNvbG9yOiBDb2xvci5QcmltYXJ5LFxuICBzZWNvbmRhcnlDb2xvcjogQ29sb3IuU2Vjb25kYXJ5LFxuICBiYWNrZ3JvdW5kQ29sb3I6IENvbG9yLkJhY2tncm91bmQsXG4gIHBhdGhQcmVmaXg6IFwiL1wiLFxuICBsb2dvOiBcInNyYy9hc3NldHMvaW1hZ2VzL2ljb24ucG5nXCIsXG4gIGxvZ29MaWdodDogXCJzcmMvYXNzZXRzL2ltYWdlcy9pY29uLnBuZ1wiLFxuICBsb2dvRGFyazogXCJzcmMvYXNzZXRzL2ltYWdlcy9pY29uLnBuZ1wiLFxuICBzb2NpYWw6IHtcbiAgICB0d2l0dGVyOiBcIlBsYXlXZWxsX1RFS1wiLFxuICAgIGZhY2Vib29rOiBcIlBsYXlXZWxsVEVLXCIsXG4gICAgaW5zdGFncmFtOiBcInBsYXl3ZWxsdGVrbm9sb2dpZXNcIixcbiAgICBmYkFwcElkOiBcIjU2NjM5MzM5MDIwMjgxXCIsXG4gIH0sXG5cbiAgY29udGFjdFBhZ2U6IFwiL2NvbnRhY3RcIixcbiAgbWlzY1BhZ2U6IFwiL21pc2NcIlxufTtcblxuZXhwb3J0IGNvbnN0IFNpdGVQcm9qZWN0cyA9IHtcblxufVxuXG5leHBvcnQgY29uc3QgU2l0ZU5hdmlnYXRpb246IExYTFRfU2l0ZU5hdmlnYXRpb24gPSB7XG4gIEZyYW1lSXRlbXM6IFtcbiAgICB7XG4gICAgICBsYWJlbDogXCJTdHVkaW9cIixcbiAgICAgIGhyZWY6IFwiL3NhbXBsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiQXJ0XCIsXG4gICAgICBocmVmOiBcIi9zYW1wbGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIkRlc2lnblwiLFxuICAgICAgaHJlZjogXCIvc2FtcGxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJTdHJhdGVneVwiLFxuICAgICAgaHJlZjogXCIvc2FtcGxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJJbnRlcmFjdGl2ZVwiLFxuICAgICAgaHJlZjogXCIvc2FtcGxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJNdXJhbHNcIixcbiAgICAgIGhyZWY6IFwiL3NhbXBsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiQ29kZVwiLFxuICAgICAgaHJlZjogXCIvc2FtcGxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJMYWJcIixcbiAgICAgIGhyZWY6IFwiL3NhbXBsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiUHJvZHVjdHNcIixcbiAgICAgIGhyZWY6IFwiL3NhbXBsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiTXVzaWNcIixcbiAgICAgIGhyZWY6IFwiL3NhbXBsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiVGF0dG9vXCIsXG4gICAgICBocmVmOiBcIi9zYW1wbGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIlNob3BcIixcbiAgICAgIGhyZWY6IFwiL3NhbXBsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiUmVzb3VyY2VzXCIsXG4gICAgICBocmVmOiBcIi9zYW1wbGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIkFkdmljZVwiLFxuICAgICAgaHJlZjogXCIvc2FtcGxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJGb250c1wiLFxuICAgICAgaHJlZjogXCIvc2FtcGxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJDb250YWN0XCIsXG4gICAgICBocmVmOiBcIi9zYW1wbGVcIixcbiAgICB9LFxuICBdLFxuICBPdmVybGF5TmF2OiB7XG4gICAgTmF2SXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiQXJ0XCIsXG4gICAgICAgIGhyZWY6IFwiL2FydFwiLFxuICAgICAgICBjYXB0aW9uOiBcIkxvcmVtIGlwc3VtXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJEZXNpZ25cIixcbiAgICAgICAgaHJlZjogXCIvc2FtcGxlXCIsXG4gICAgICAgIGNhcHRpb246IFwiTG9yZW0gaXBzdW1cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkNvZGVcIixcbiAgICAgICAgaHJlZjogXCIvY29kZVwiLFxuICAgICAgICBjYXB0aW9uOiBcIkxvcmVtIGlwc3VtXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJTdHVkaW9cIixcbiAgICAgICAgaHJlZjogXCIvc3R1ZGlvXCIsXG4gICAgICAgIGNhcHRpb246IFwiTG9yZW0gaXBzdW1cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIlRob3VnaHRzXCIsXG4gICAgICAgIGhyZWY6IFwiL3Rob3VnaHRzXCIsXG4gICAgICAgIGNhcHRpb246IFwiTG9yZW0gaXBzdW1cIixcbiAgICAgIH0sXG4gICAgICAvLyB7XG4gICAgICAvLyAgIGxhYmVsOiBcIkxlYXJuXCIsXG4gICAgICAvLyAgIGhyZWY6IFwiL3NhbXBsZVwiLFxuICAgICAgLy8gICBjYXB0aW9uOiBcIkxvcmVtIGlwc3VtXCIsXG4gICAgICAvLyB9LFxuICAgICAgLy8ge1xuICAgICAgLy8gICBsYWJlbDogXCJTaG9wXCIsXG4gICAgICAvLyAgIGhyZWY6IFwiL3NhbXBsZVwiLFxuICAgICAgLy8gICBjYXB0aW9uOiBcIkxvcmVtIGlwc3VtXCIsXG4gICAgICAvLyB9LFxuICAgICAgLy8ge1xuICAgICAgLy8gICBsYWJlbDogXCJDb250YWN0XCIsXG4gICAgICAvLyAgIGhyZWY6IFwiL3NhbXBsZVwiLFxuICAgICAgLy8gICBjYXB0aW9uOiBcIkxvcmVtIGlwc3VtXCIsXG4gICAgICAvLyB9LFxuICAgIF0sXG4gICAgU29jaWFsSXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiRHJpYmJibGVcIixcbiAgICAgICAgaHJlZjogXCIvXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJHaXRodWJcIixcbiAgICAgICAgaHJlZjogXCIvXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJJbnN0YWdyYW1cIixcbiAgICAgICAgaHJlZjogXCIvXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJMaW5rZWRJblwiLFxuICAgICAgICBocmVmOiBcIi9cIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbn07XG5cbi8qKlxuICpcbiAqIEBuYW1lIF9fREVCVUdfX1xuICogQGRlc2NyaXB0aW9uIERlYnVnIG1vZGUgZm9yIGNvbnNvbGVcbiAqXG4gKi9cbmV4cG9ydCBjb25zdCBfX0RFQlVHX18gPSB0cnVlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./constants/site/Settings.tsx\n");

/***/ })

})