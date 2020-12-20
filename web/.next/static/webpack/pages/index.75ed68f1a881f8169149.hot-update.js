webpackHotUpdate_N_E("pages/index",{

/***/ "./constants/site/Settings.tsx":
/*!*************************************!*\
  !*** ./constants/site/Settings.tsx ***!
  \*************************************/
/*! exports provided: Settings, SiteNavigation, __DEBUG__ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Settings\", function() { return Settings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SiteNavigation\", function() { return SiteNavigation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__DEBUG__\", function() { return __DEBUG__; });\n/* harmony import */ var _styles_Color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/Color */ \"./constants/styles/Color.tsx\");\n/**\n *\n * Settings.js\n * @author Peter Laxalt\n * @description This is the sitewide information that is used throughout the entire\n * build of the site. This goes from SEO to headings and also into the\n * core Gatsby config files as well.\n *\n */\n// Imports\n//////////////////////////////////////////////////////////////////////\n\n// Begin Component\n//////////////////////////////////////////////////////////////////////\nvar Settings = {\n  siteTitle: \"Play-Well TEKnologies | LEGO®-inspired engineering classes for kids & adults.\",\n  siteTitleShort: \"Play-Well\",\n  siteDescription: \"Kids are natural engineers. We help them realize it.\",\n  siteBaseKeywords: \"lego, engineering, engineering, classes, summer, camps, spring, learning, learn, play, education, knowledge\",\n  siteUrl: \"https://play-well-staging.netlify.com/\",\n  themeColor: _styles_Color__WEBPACK_IMPORTED_MODULE_0__[\"Color\"].Primary,\n  secondaryColor: _styles_Color__WEBPACK_IMPORTED_MODULE_0__[\"Color\"].Secondary,\n  backgroundColor: _styles_Color__WEBPACK_IMPORTED_MODULE_0__[\"Color\"].Background,\n  pathPrefix: \"/\",\n  logo: \"src/assets/images/icon.png\",\n  logoLight: \"src/assets/images/icon.png\",\n  logoDark: \"src/assets/images/icon.png\",\n  social: {\n    twitter: \"PlayWell_TEK\",\n    facebook: \"PlayWellTEK\",\n    instagram: \"playwellteknologies\",\n    fbAppId: \"56639339020281\"\n  }\n};\nvar SiteNavigation = {\n  FrameItems: [{\n    label: \"Studio\",\n    href: \"/sample\"\n  }, {\n    label: \"Art\",\n    href: \"/sample\"\n  }, {\n    label: \"Design\",\n    href: \"/sample\"\n  }, {\n    label: \"Strategy\",\n    href: \"/sample\"\n  }, {\n    label: \"Interactive\",\n    href: \"/sample\"\n  }, {\n    label: \"Murals\",\n    href: \"/sample\"\n  }, {\n    label: \"Code\",\n    href: \"/sample\"\n  }, {\n    label: \"Lab\",\n    href: \"/sample\"\n  }, {\n    label: \"Products\",\n    href: \"/sample\"\n  }, {\n    label: \"Music\",\n    href: \"/sample\"\n  }, {\n    label: \"Tattoo\",\n    href: \"/sample\"\n  }, {\n    label: \"Shop\",\n    href: \"/sample\"\n  }, {\n    label: \"Resources\",\n    href: \"/sample\"\n  }, {\n    label: \"Advice\",\n    href: \"/sample\"\n  }, {\n    label: \"Fonts\",\n    href: \"/sample\"\n  }, {\n    label: \"Contact\",\n    href: \"/sample\"\n  }],\n  OverlayNav: {\n    NavItems: [{\n      label: \"Art\",\n      href: \"/sample\",\n      caption: \"Lorem ipsum\"\n    }, {\n      label: \"Design\",\n      href: \"/sample\",\n      caption: \"Lorem ipsum\"\n    }, {\n      label: \"Code\",\n      href: \"/sample\",\n      caption: \"Lorem ipsum\"\n    }, {\n      label: \"Studio\",\n      href: \"/sample\",\n      caption: \"Lorem ipsum\"\n    }, {\n      label: \"Thoughts\",\n      href: \"/sample\",\n      caption: \"Lorem ipsum\"\n    } // {\n    //   label: \"Learn\",\n    //   href: \"/sample\",\n    //   caption: \"Lorem ipsum\",\n    // },\n    // {\n    //   label: \"Shop\",\n    //   href: \"/sample\",\n    //   caption: \"Lorem ipsum\",\n    // },\n    // {\n    //   label: \"Contact\",\n    //   href: \"/sample\",\n    //   caption: \"Lorem ipsum\",\n    // },\n    ],\n    SocialItems: [{\n      label: \"Dribbble\",\n      href: \"/\"\n    }, {\n      label: \"Github\",\n      href: \"/\"\n    }, {\n      label: \"Instagram\",\n      href: \"/\"\n    }, {\n      label: \"LinkedIn\",\n      href: \"/\"\n    }]\n  }\n};\n/**\n *\n * @name __DEBUG__\n * @description Debug mode for console\n *\n */\n\nvar __DEBUG__ = true;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uc3RhbnRzL3NpdGUvU2V0dGluZ3MudHN4PzQzZDAiXSwibmFtZXMiOlsiU2V0dGluZ3MiLCJzaXRlVGl0bGUiLCJzaXRlVGl0bGVTaG9ydCIsInNpdGVEZXNjcmlwdGlvbiIsInNpdGVCYXNlS2V5d29yZHMiLCJzaXRlVXJsIiwidGhlbWVDb2xvciIsIkNvbG9yIiwiUHJpbWFyeSIsInNlY29uZGFyeUNvbG9yIiwiU2Vjb25kYXJ5IiwiYmFja2dyb3VuZENvbG9yIiwiQmFja2dyb3VuZCIsInBhdGhQcmVmaXgiLCJsb2dvIiwibG9nb0xpZ2h0IiwibG9nb0RhcmsiLCJzb2NpYWwiLCJ0d2l0dGVyIiwiZmFjZWJvb2siLCJpbnN0YWdyYW0iLCJmYkFwcElkIiwiU2l0ZU5hdmlnYXRpb24iLCJGcmFtZUl0ZW1zIiwibGFiZWwiLCJocmVmIiwiT3ZlcmxheU5hdiIsIk5hdkl0ZW1zIiwiY2FwdGlvbiIsIlNvY2lhbEl0ZW1zIiwiX19ERUJVR19fIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBbUJBO0FBQ0E7QUFFTyxJQUFNQSxRQUFRLEdBQUc7QUFDdEJDLFdBQVMsRUFDUCwrRUFGb0I7QUFHdEJDLGdCQUFjLEVBQUUsV0FITTtBQUl0QkMsaUJBQWUsRUFBRSxzREFKSztBQUt0QkMsa0JBQWdCLEVBQ2QsNkdBTm9CO0FBT3RCQyxTQUFPLEVBQUUsd0NBUGE7QUFRdEJDLFlBQVUsRUFBRUMsbURBQUssQ0FBQ0MsT0FSSTtBQVN0QkMsZ0JBQWMsRUFBRUYsbURBQUssQ0FBQ0csU0FUQTtBQVV0QkMsaUJBQWUsRUFBRUosbURBQUssQ0FBQ0ssVUFWRDtBQVd0QkMsWUFBVSxFQUFFLEdBWFU7QUFZdEJDLE1BQUksRUFBRSw0QkFaZ0I7QUFhdEJDLFdBQVMsRUFBRSw0QkFiVztBQWN0QkMsVUFBUSxFQUFFLDRCQWRZO0FBZXRCQyxRQUFNLEVBQUU7QUFDTkMsV0FBTyxFQUFFLGNBREg7QUFFTkMsWUFBUSxFQUFFLGFBRko7QUFHTkMsYUFBUyxFQUFFLHFCQUhMO0FBSU5DLFdBQU8sRUFBRTtBQUpIO0FBZmMsQ0FBakI7QUF1QkEsSUFBTUMsY0FBbUMsR0FBRztBQUNqREMsWUFBVSxFQUFFLENBQ1Y7QUFDRUMsU0FBSyxFQUFFLFFBRFQ7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FEVSxFQUtWO0FBQ0VELFNBQUssRUFBRSxLQURUO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBTFUsRUFTVjtBQUNFRCxTQUFLLEVBQUUsUUFEVDtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQVRVLEVBYVY7QUFDRUQsU0FBSyxFQUFFLFVBRFQ7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FiVSxFQWlCVjtBQUNFRCxTQUFLLEVBQUUsYUFEVDtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQWpCVSxFQXFCVjtBQUNFRCxTQUFLLEVBQUUsUUFEVDtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQXJCVSxFQXlCVjtBQUNFRCxTQUFLLEVBQUUsTUFEVDtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQXpCVSxFQTZCVjtBQUNFRCxTQUFLLEVBQUUsS0FEVDtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQTdCVSxFQWlDVjtBQUNFRCxTQUFLLEVBQUUsVUFEVDtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQWpDVSxFQXFDVjtBQUNFRCxTQUFLLEVBQUUsT0FEVDtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQXJDVSxFQXlDVjtBQUNFRCxTQUFLLEVBQUUsUUFEVDtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQXpDVSxFQTZDVjtBQUNFRCxTQUFLLEVBQUUsTUFEVDtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQTdDVSxFQWlEVjtBQUNFRCxTQUFLLEVBQUUsV0FEVDtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQWpEVSxFQXFEVjtBQUNFRCxTQUFLLEVBQUUsUUFEVDtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQXJEVSxFQXlEVjtBQUNFRCxTQUFLLEVBQUUsT0FEVDtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQXpEVSxFQTZEVjtBQUNFRCxTQUFLLEVBQUUsU0FEVDtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQTdEVSxDQURxQztBQW1FakRDLFlBQVUsRUFBRTtBQUNWQyxZQUFRLEVBQUUsQ0FDUjtBQUNFSCxXQUFLLEVBQUUsS0FEVDtBQUVFQyxVQUFJLEVBQUUsU0FGUjtBQUdFRyxhQUFPLEVBQUU7QUFIWCxLQURRLEVBTVI7QUFDRUosV0FBSyxFQUFFLFFBRFQ7QUFFRUMsVUFBSSxFQUFFLFNBRlI7QUFHRUcsYUFBTyxFQUFFO0FBSFgsS0FOUSxFQVdSO0FBQ0VKLFdBQUssRUFBRSxNQURUO0FBRUVDLFVBQUksRUFBRSxTQUZSO0FBR0VHLGFBQU8sRUFBRTtBQUhYLEtBWFEsRUFnQlI7QUFDRUosV0FBSyxFQUFFLFFBRFQ7QUFFRUMsVUFBSSxFQUFFLFNBRlI7QUFHRUcsYUFBTyxFQUFFO0FBSFgsS0FoQlEsRUFxQlI7QUFDRUosV0FBSyxFQUFFLFVBRFQ7QUFFRUMsVUFBSSxFQUFFLFNBRlI7QUFHRUcsYUFBTyxFQUFFO0FBSFgsS0FyQlEsQ0EwQlI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBeENRLEtBREE7QUEyQ1ZDLGVBQVcsRUFBRSxDQUNYO0FBQ0VMLFdBQUssRUFBRSxVQURUO0FBRUVDLFVBQUksRUFBRTtBQUZSLEtBRFcsRUFLWDtBQUNFRCxXQUFLLEVBQUUsUUFEVDtBQUVFQyxVQUFJLEVBQUU7QUFGUixLQUxXLEVBU1g7QUFDRUQsV0FBSyxFQUFFLFdBRFQ7QUFFRUMsVUFBSSxFQUFFO0FBRlIsS0FUVyxFQWFYO0FBQ0VELFdBQUssRUFBRSxVQURUO0FBRUVDLFVBQUksRUFBRTtBQUZSLEtBYlc7QUEzQ0g7QUFuRXFDLENBQTVDO0FBbUlQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNSyxTQUFTLEdBQUcsSUFBbEIiLCJmaWxlIjoiLi9jb25zdGFudHMvc2l0ZS9TZXR0aW5ncy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqXG4gKiBTZXR0aW5ncy5qc1xuICogQGF1dGhvciBQZXRlciBMYXhhbHRcbiAqIEBkZXNjcmlwdGlvbiBUaGlzIGlzIHRoZSBzaXRld2lkZSBpbmZvcm1hdGlvbiB0aGF0IGlzIHVzZWQgdGhyb3VnaG91dCB0aGUgZW50aXJlXG4gKiBidWlsZCBvZiB0aGUgc2l0ZS4gVGhpcyBnb2VzIGZyb20gU0VPIHRvIGhlYWRpbmdzIGFuZCBhbHNvIGludG8gdGhlXG4gKiBjb3JlIEdhdHNieSBjb25maWcgZmlsZXMgYXMgd2VsbC5cbiAqXG4gKi9cblxuLy8gSW1wb3J0c1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiLi4vc3R5bGVzL0NvbG9yXCI7XG5cbmV4cG9ydCB0eXBlIExYTFRfTGlua0l0ZW0gPSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGhyZWY/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBMWExUX0xpbmtJdGVtV2l0aENhcHRpb24gPSBMWExUX0xpbmtJdGVtICYge1xuICBjYXB0aW9uPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgTFhMVF9TaXRlTmF2aWdhdGlvbiA9IHtcbiAgRnJhbWVJdGVtczogTFhMVF9MaW5rSXRlbVtdO1xuICBPdmVybGF5TmF2OiB7XG4gICAgU29jaWFsSXRlbXM6IExYTFRfTGlua0l0ZW1bXTtcbiAgICBOYXZJdGVtczogTFhMVF9MaW5rSXRlbVdpdGhDYXB0aW9uW107XG4gIH07XG59O1xuXG4vLyBCZWdpbiBDb21wb25lbnRcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuZXhwb3J0IGNvbnN0IFNldHRpbmdzID0ge1xuICBzaXRlVGl0bGU6XG4gICAgXCJQbGF5LVdlbGwgVEVLbm9sb2dpZXMgfCBMRUdPwq4taW5zcGlyZWQgZW5naW5lZXJpbmcgY2xhc3NlcyBmb3Iga2lkcyAmIGFkdWx0cy5cIixcbiAgc2l0ZVRpdGxlU2hvcnQ6IFwiUGxheS1XZWxsXCIsXG4gIHNpdGVEZXNjcmlwdGlvbjogXCJLaWRzIGFyZSBuYXR1cmFsIGVuZ2luZWVycy4gV2UgaGVscCB0aGVtIHJlYWxpemUgaXQuXCIsXG4gIHNpdGVCYXNlS2V5d29yZHM6XG4gICAgXCJsZWdvLCBlbmdpbmVlcmluZywgZW5naW5lZXJpbmcsIGNsYXNzZXMsIHN1bW1lciwgY2FtcHMsIHNwcmluZywgbGVhcm5pbmcsIGxlYXJuLCBwbGF5LCBlZHVjYXRpb24sIGtub3dsZWRnZVwiLFxuICBzaXRlVXJsOiBcImh0dHBzOi8vcGxheS13ZWxsLXN0YWdpbmcubmV0bGlmeS5jb20vXCIsXG4gIHRoZW1lQ29sb3I6IENvbG9yLlByaW1hcnksXG4gIHNlY29uZGFyeUNvbG9yOiBDb2xvci5TZWNvbmRhcnksXG4gIGJhY2tncm91bmRDb2xvcjogQ29sb3IuQmFja2dyb3VuZCxcbiAgcGF0aFByZWZpeDogXCIvXCIsXG4gIGxvZ286IFwic3JjL2Fzc2V0cy9pbWFnZXMvaWNvbi5wbmdcIixcbiAgbG9nb0xpZ2h0OiBcInNyYy9hc3NldHMvaW1hZ2VzL2ljb24ucG5nXCIsXG4gIGxvZ29EYXJrOiBcInNyYy9hc3NldHMvaW1hZ2VzL2ljb24ucG5nXCIsXG4gIHNvY2lhbDoge1xuICAgIHR3aXR0ZXI6IFwiUGxheVdlbGxfVEVLXCIsXG4gICAgZmFjZWJvb2s6IFwiUGxheVdlbGxURUtcIixcbiAgICBpbnN0YWdyYW06IFwicGxheXdlbGx0ZWtub2xvZ2llc1wiLFxuICAgIGZiQXBwSWQ6IFwiNTY2MzkzMzkwMjAyODFcIixcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBTaXRlTmF2aWdhdGlvbjogTFhMVF9TaXRlTmF2aWdhdGlvbiA9IHtcbiAgRnJhbWVJdGVtczogW1xuICAgIHtcbiAgICAgIGxhYmVsOiBcIlN0dWRpb1wiLFxuICAgICAgaHJlZjogXCIvc2FtcGxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJBcnRcIixcbiAgICAgIGhyZWY6IFwiL3NhbXBsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiRGVzaWduXCIsXG4gICAgICBocmVmOiBcIi9zYW1wbGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIlN0cmF0ZWd5XCIsXG4gICAgICBocmVmOiBcIi9zYW1wbGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIkludGVyYWN0aXZlXCIsXG4gICAgICBocmVmOiBcIi9zYW1wbGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIk11cmFsc1wiLFxuICAgICAgaHJlZjogXCIvc2FtcGxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJDb2RlXCIsXG4gICAgICBocmVmOiBcIi9zYW1wbGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIkxhYlwiLFxuICAgICAgaHJlZjogXCIvc2FtcGxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJQcm9kdWN0c1wiLFxuICAgICAgaHJlZjogXCIvc2FtcGxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJNdXNpY1wiLFxuICAgICAgaHJlZjogXCIvc2FtcGxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJUYXR0b29cIixcbiAgICAgIGhyZWY6IFwiL3NhbXBsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiU2hvcFwiLFxuICAgICAgaHJlZjogXCIvc2FtcGxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJSZXNvdXJjZXNcIixcbiAgICAgIGhyZWY6IFwiL3NhbXBsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiQWR2aWNlXCIsXG4gICAgICBocmVmOiBcIi9zYW1wbGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIkZvbnRzXCIsXG4gICAgICBocmVmOiBcIi9zYW1wbGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIkNvbnRhY3RcIixcbiAgICAgIGhyZWY6IFwiL3NhbXBsZVwiLFxuICAgIH0sXG4gIF0sXG4gIE92ZXJsYXlOYXY6IHtcbiAgICBOYXZJdGVtczogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogXCJBcnRcIixcbiAgICAgICAgaHJlZjogXCIvc2FtcGxlXCIsXG4gICAgICAgIGNhcHRpb246IFwiTG9yZW0gaXBzdW1cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkRlc2lnblwiLFxuICAgICAgICBocmVmOiBcIi9zYW1wbGVcIixcbiAgICAgICAgY2FwdGlvbjogXCJMb3JlbSBpcHN1bVwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiQ29kZVwiLFxuICAgICAgICBocmVmOiBcIi9zYW1wbGVcIixcbiAgICAgICAgY2FwdGlvbjogXCJMb3JlbSBpcHN1bVwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiU3R1ZGlvXCIsXG4gICAgICAgIGhyZWY6IFwiL3NhbXBsZVwiLFxuICAgICAgICBjYXB0aW9uOiBcIkxvcmVtIGlwc3VtXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJUaG91Z2h0c1wiLFxuICAgICAgICBocmVmOiBcIi9zYW1wbGVcIixcbiAgICAgICAgY2FwdGlvbjogXCJMb3JlbSBpcHN1bVwiLFxuICAgICAgfSxcbiAgICAgIC8vIHtcbiAgICAgIC8vICAgbGFiZWw6IFwiTGVhcm5cIixcbiAgICAgIC8vICAgaHJlZjogXCIvc2FtcGxlXCIsXG4gICAgICAvLyAgIGNhcHRpb246IFwiTG9yZW0gaXBzdW1cIixcbiAgICAgIC8vIH0sXG4gICAgICAvLyB7XG4gICAgICAvLyAgIGxhYmVsOiBcIlNob3BcIixcbiAgICAgIC8vICAgaHJlZjogXCIvc2FtcGxlXCIsXG4gICAgICAvLyAgIGNhcHRpb246IFwiTG9yZW0gaXBzdW1cIixcbiAgICAgIC8vIH0sXG4gICAgICAvLyB7XG4gICAgICAvLyAgIGxhYmVsOiBcIkNvbnRhY3RcIixcbiAgICAgIC8vICAgaHJlZjogXCIvc2FtcGxlXCIsXG4gICAgICAvLyAgIGNhcHRpb246IFwiTG9yZW0gaXBzdW1cIixcbiAgICAgIC8vIH0sXG4gICAgXSxcbiAgICBTb2NpYWxJdGVtczogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogXCJEcmliYmJsZVwiLFxuICAgICAgICBocmVmOiBcIi9cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkdpdGh1YlwiLFxuICAgICAgICBocmVmOiBcIi9cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkluc3RhZ3JhbVwiLFxuICAgICAgICBocmVmOiBcIi9cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkxpbmtlZEluXCIsXG4gICAgICAgIGhyZWY6IFwiL1wiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxufTtcblxuLyoqXG4gKlxuICogQG5hbWUgX19ERUJVR19fXG4gKiBAZGVzY3JpcHRpb24gRGVidWcgbW9kZSBmb3IgY29uc29sZVxuICpcbiAqL1xuZXhwb3J0IGNvbnN0IF9fREVCVUdfXyA9IHRydWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./constants/site/Settings.tsx\n");

/***/ }),

/***/ "./constants/styles/Color.tsx":
/*!************************************!*\
  !*** ./constants/styles/Color.tsx ***!
  \************************************/
/*! exports provided: Color, ColorContext_Defaults, useColorContext, ColorContext, Palette */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Color\", function() { return Color; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ColorContext_Defaults\", function() { return ColorContext_Defaults; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useColorContext\", function() { return useColorContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ColorContext\", function() { return ColorContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Palette\", function() { return Palette; });\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  ::-moz-selection { background: \", \"; color: \", \" }\\n  ::selection { background: \", \"; color: \", \" }\\n\\n  :root {\\n    --clrPrimary: \", \";\\n    --clrSecondary: \", \";\\n    --clrBackground: \", \";\\n    --clrForeground: \", \";\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n// Color.js:\n// This is the sitewide palette.\n// Imports\n// _______________________________________________________\n\n // Begin Component\n// _______________________________________________________\n\nvar Color = {\n  // Color Variables\n  varPrimary: \"var(--clrPrimary)\",\n  varSecondary: \"var(--clrSecondary)\",\n  varBackground: \"var(--clrBackground)\",\n  varForeground: \"var(--clrForeground)\",\n  // Core Colors\n  Primary: \"#000000\",\n  Secondary: \"#000000\",\n  Background: \"#FFF8DC\",\n  Text: \"#000000\",\n  // Grayscale Palette\n  Black: \"#000000\",\n  Nightsky: \"#151313\",\n  Warmsky: \"#34281D\",\n  Gravel: \"#4E4135\",\n  Slate: \"#928070\",\n  Tan: \"#C4AC97\",\n  Gray: \"#DAC9BA\",\n  Blush: \"#F6E7D9\",\n  Cream: \"#FFF6EE\",\n  White: \"#FFF6EE\",\n  // Warm Palette\n  Clay: \"#A33609\",\n  Nova: \"#E24809\",\n  Sunlight: \"#E9A200\",\n  Sunset: \"#ED9158\",\n  // Cool Palette\n  Galaxy: \"#111b24\",\n  Deepsea: \"#002F9E\",\n  Ocean: \"#269FE2\",\n  Sky: \"#7AC0E6\",\n  Dino: \"#23023B\",\n  Eggplant: \"#520589\",\n  Lilac: \"#874BB4\",\n  // Feedback Palette\n  Warning: \"#FF8760\",\n  Success: \"#40DA33\"\n};\n/**\n *\n * @name ColorContext_Defaults\n * @description Defaults for our theming context\n *\n */\n\nvar ColorContext_Defaults = {\n  primary: Color.Primary,\n  secondary: Color.Secondary,\n  foreground: Color.Text,\n  background: Color.Background,\n  setTheme: function setTheme() {}\n};\n/**\n *\n * @name useColorContext\n * @description Our hook to update our color context\n * @see https://medium.com/@0n3z3r0n3/react-usecontext-how-to-update-context-from-child-component-8fa2894eee3d\n *\n */\n\nvar useColorContext = function useColorContext() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(ColorContext_Defaults),\n      _React$useState2 = Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState, 2),\n      colorTheme = _React$useState2[0],\n      setColorTheme = _React$useState2[1];\n\n  var setTheme = react__WEBPACK_IMPORTED_MODULE_3___default.a.useCallback(function (currentColorTheme) {\n    setColorTheme(currentColorTheme);\n  }, []);\n  return _objectSpread(_objectSpread({}, colorTheme), {}, {\n    setTheme: setTheme\n  });\n};\n/**\n *\n * @name ColorContext\n * @description Our context to provide color themes\n * @see https://medium.com/@0n3z3r0n3/react-usecontext-how-to-update-context-from-child-component-8fa2894eee3d\n *\n */\n\n_s(useColorContext, \"uYkrI/Unkj9lwnWCIwD9GSto0f8=\");\n\nvar ColorContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createContext(ColorContext_Defaults);\n/**\n *\n * @name Palette\n * @description Global CSS Variables for palette\n *\n */\n\n_c = ColorContext;\nvar Palette = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__[\"createGlobalStyle\"])(_templateObject(), Color.varForeground, Color.varBackground, Color.varForeground, Color.varBackground, Color.Primary, Color.Secondary, Color.Background, Color.Text); //////////////////////////////////////////////////////////////////////\n// End Component\n\nvar _c;\n\n$RefreshReg$(_c, \"ColorContext\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uc3RhbnRzL3N0eWxlcy9Db2xvci50c3g/ZmQ4MiJdLCJuYW1lcyI6WyJDb2xvciIsInZhclByaW1hcnkiLCJ2YXJTZWNvbmRhcnkiLCJ2YXJCYWNrZ3JvdW5kIiwidmFyRm9yZWdyb3VuZCIsIlByaW1hcnkiLCJTZWNvbmRhcnkiLCJCYWNrZ3JvdW5kIiwiVGV4dCIsIkJsYWNrIiwiTmlnaHRza3kiLCJXYXJtc2t5IiwiR3JhdmVsIiwiU2xhdGUiLCJUYW4iLCJHcmF5IiwiQmx1c2giLCJDcmVhbSIsIldoaXRlIiwiQ2xheSIsIk5vdmEiLCJTdW5saWdodCIsIlN1bnNldCIsIkdhbGF4eSIsIkRlZXBzZWEiLCJPY2VhbiIsIlNreSIsIkRpbm8iLCJFZ2dwbGFudCIsIkxpbGFjIiwiV2FybmluZyIsIlN1Y2Nlc3MiLCJDb2xvckNvbnRleHRfRGVmYXVsdHMiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwiZm9yZWdyb3VuZCIsImJhY2tncm91bmQiLCJzZXRUaGVtZSIsInVzZUNvbG9yQ29udGV4dCIsIlJlYWN0IiwidXNlU3RhdGUiLCJjb2xvclRoZW1lIiwic2V0Q29sb3JUaGVtZSIsInVzZUNhbGxiYWNrIiwiY3VycmVudENvbG9yVGhlbWUiLCJDb2xvckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiUGFsZXR0ZSIsImNyZWF0ZUdsb2JhbFN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Q0FHQTtBQUNBOztBQWtCTyxJQUFNQSxLQUFLLEdBQUc7QUFDbkI7QUFDQUMsWUFBVSxFQUFFLG1CQUZPO0FBR25CQyxjQUFZLEVBQUUscUJBSEs7QUFJbkJDLGVBQWEsRUFBRSxzQkFKSTtBQUtuQkMsZUFBYSxFQUFFLHNCQUxJO0FBT25CO0FBQ0FDLFNBQU8sRUFBRSxTQVJVO0FBU25CQyxXQUFTLEVBQUUsU0FUUTtBQVVuQkMsWUFBVSxFQUFFLFNBVk87QUFXbkJDLE1BQUksRUFBRSxTQVhhO0FBYW5CO0FBQ0FDLE9BQUssRUFBRSxTQWRZO0FBZW5CQyxVQUFRLEVBQUUsU0FmUztBQWdCbkJDLFNBQU8sRUFBRSxTQWhCVTtBQWlCbkJDLFFBQU0sRUFBRSxTQWpCVztBQWtCbkJDLE9BQUssRUFBRSxTQWxCWTtBQW1CbkJDLEtBQUcsRUFBRSxTQW5CYztBQW9CbkJDLE1BQUksRUFBRSxTQXBCYTtBQXFCbkJDLE9BQUssRUFBRSxTQXJCWTtBQXNCbkJDLE9BQUssRUFBRSxTQXRCWTtBQXVCbkJDLE9BQUssRUFBRSxTQXZCWTtBQXlCbkI7QUFDQUMsTUFBSSxFQUFFLFNBMUJhO0FBMkJuQkMsTUFBSSxFQUFFLFNBM0JhO0FBNEJuQkMsVUFBUSxFQUFFLFNBNUJTO0FBNkJuQkMsUUFBTSxFQUFFLFNBN0JXO0FBK0JuQjtBQUNBQyxRQUFNLEVBQUUsU0FoQ1c7QUFpQ25CQyxTQUFPLEVBQUUsU0FqQ1U7QUFrQ25CQyxPQUFLLEVBQUUsU0FsQ1k7QUFtQ25CQyxLQUFHLEVBQUUsU0FuQ2M7QUFvQ25CQyxNQUFJLEVBQUUsU0FwQ2E7QUFxQ25CQyxVQUFRLEVBQUUsU0FyQ1M7QUFzQ25CQyxPQUFLLEVBQUUsU0F0Q1k7QUF3Q25CO0FBQ0FDLFNBQU8sRUFBRSxTQXpDVTtBQTBDbkJDLFNBQU8sRUFBRTtBQTFDVSxDQUFkO0FBNkNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQyxxQkFBc0MsR0FBRztBQUNwREMsU0FBTyxFQUFFakMsS0FBSyxDQUFDSyxPQURxQztBQUVwRDZCLFdBQVMsRUFBRWxDLEtBQUssQ0FBQ00sU0FGbUM7QUFHcEQ2QixZQUFVLEVBQUVuQyxLQUFLLENBQUNRLElBSGtDO0FBSXBENEIsWUFBVSxFQUFFcEMsS0FBSyxDQUFDTyxVQUprQztBQUtwRDhCLFVBQVEsRUFBRSxvQkFBTSxDQUFFO0FBTGtDLENBQS9DO0FBUVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUF1QjtBQUFBOztBQUFBLHdCQUNoQkMsNENBQUssQ0FBQ0MsUUFBTixDQUFlUixxQkFBZixDQURnQjtBQUFBO0FBQUEsTUFDN0NTLFVBRDZDO0FBQUEsTUFDakNDLGFBRGlDOztBQUdwRCxNQUFNTCxRQUFRLEdBQUdFLDRDQUFLLENBQUNJLFdBQU4sQ0FDZixVQUFDQyxpQkFBRCxFQUE4QztBQUM1Q0YsaUJBQWEsQ0FBQ0UsaUJBQUQsQ0FBYjtBQUNELEdBSGMsRUFJZixFQUplLENBQWpCO0FBT0EseUNBQ0tILFVBREw7QUFFRUosWUFBUSxFQUFSQTtBQUZGO0FBSUQsQ0FkTTtBQWdCUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7R0F0QmFDLGU7O0FBdUJOLElBQU1PLFlBQVksZ0JBQUdOLDRDQUFLLENBQUNPLGFBQU4sQ0FDMUJkLHFCQUQwQixDQUFyQjtBQUlQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7S0FUYWEsWTtBQVVOLElBQU1FLE9BQU8sR0FBR0MsMkVBQUgsb0JBQ2VoRCxLQUFLLENBQUNJLGFBRHJCLEVBQzhDSixLQUFLLENBQUNHLGFBRHBELEVBRVVILEtBQUssQ0FBQ0ksYUFGaEIsRUFFeUNKLEtBQUssQ0FBQ0csYUFGL0MsRUFLQUgsS0FBSyxDQUFDSyxPQUxOLEVBTUVMLEtBQUssQ0FBQ00sU0FOUixFQU9HTixLQUFLLENBQUNPLFVBUFQsRUFRR1AsS0FBSyxDQUFDUSxJQVJULENBQWIsQyxDQVlQO0FBQ0EiLCJmaWxlIjoiLi9jb25zdGFudHMvc3R5bGVzL0NvbG9yLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvbG9yLmpzOlxuLy8gVGhpcyBpcyB0aGUgc2l0ZXdpZGUgcGFsZXR0ZS5cblxuLy8gSW1wb3J0c1xuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG4vLyBCZWdpbiBDb21wb25lbnRcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cblxuZXhwb3J0IHR5cGUgTFhMVF9Db2xvclRoZW1lID0ge1xuICBuYW1lPzpcbiAgICB8IFwiZGVmYXVsdFwiXG4gICAgfCBcImdvbGRlbnJvZFwiXG4gICAgfCBcImNhZGV0Ymx1ZVwiXG4gICAgfCBcIm9yYW5nZXJlZFwiXG4gICAgfCBcImdhbGF4eVwiXG4gICAgfCBcImxlbW9uXCJcbiAgICB8IFwic2FsbW9uXCI7XG4gIHByaW1hcnk6IHN0cmluZztcbiAgc2Vjb25kYXJ5OiBzdHJpbmc7XG4gIGJhY2tncm91bmQ6IHN0cmluZztcbiAgZm9yZWdyb3VuZDogc3RyaW5nO1xuICBzZXRUaGVtZT86ICh0aGVtZTogTFhMVF9Db2xvclRoZW1lKSA9PiB2b2lkO1xufTtcblxuZXhwb3J0IGNvbnN0IENvbG9yID0ge1xuICAvLyBDb2xvciBWYXJpYWJsZXNcbiAgdmFyUHJpbWFyeTogXCJ2YXIoLS1jbHJQcmltYXJ5KVwiLFxuICB2YXJTZWNvbmRhcnk6IFwidmFyKC0tY2xyU2Vjb25kYXJ5KVwiLFxuICB2YXJCYWNrZ3JvdW5kOiBcInZhcigtLWNsckJhY2tncm91bmQpXCIsXG4gIHZhckZvcmVncm91bmQ6IFwidmFyKC0tY2xyRm9yZWdyb3VuZClcIixcblxuICAvLyBDb3JlIENvbG9yc1xuICBQcmltYXJ5OiBcIiMwMDAwMDBcIixcbiAgU2Vjb25kYXJ5OiBcIiMwMDAwMDBcIixcbiAgQmFja2dyb3VuZDogXCIjRkZGOERDXCIsXG4gIFRleHQ6IFwiIzAwMDAwMFwiLFxuXG4gIC8vIEdyYXlzY2FsZSBQYWxldHRlXG4gIEJsYWNrOiBcIiMwMDAwMDBcIixcbiAgTmlnaHRza3k6IFwiIzE1MTMxM1wiLFxuICBXYXJtc2t5OiBcIiMzNDI4MURcIixcbiAgR3JhdmVsOiBcIiM0RTQxMzVcIixcbiAgU2xhdGU6IFwiIzkyODA3MFwiLFxuICBUYW46IFwiI0M0QUM5N1wiLFxuICBHcmF5OiBcIiNEQUM5QkFcIixcbiAgQmx1c2g6IFwiI0Y2RTdEOVwiLFxuICBDcmVhbTogXCIjRkZGNkVFXCIsXG4gIFdoaXRlOiBcIiNGRkY2RUVcIixcblxuICAvLyBXYXJtIFBhbGV0dGVcbiAgQ2xheTogXCIjQTMzNjA5XCIsXG4gIE5vdmE6IFwiI0UyNDgwOVwiLFxuICBTdW5saWdodDogXCIjRTlBMjAwXCIsXG4gIFN1bnNldDogXCIjRUQ5MTU4XCIsXG5cbiAgLy8gQ29vbCBQYWxldHRlXG4gIEdhbGF4eTogXCIjMTExYjI0XCIsXG4gIERlZXBzZWE6IFwiIzAwMkY5RVwiLFxuICBPY2VhbjogXCIjMjY5RkUyXCIsXG4gIFNreTogXCIjN0FDMEU2XCIsXG4gIERpbm86IFwiIzIzMDIzQlwiLFxuICBFZ2dwbGFudDogXCIjNTIwNTg5XCIsXG4gIExpbGFjOiBcIiM4NzRCQjRcIixcblxuICAvLyBGZWVkYmFjayBQYWxldHRlXG4gIFdhcm5pbmc6IFwiI0ZGODc2MFwiLFxuICBTdWNjZXNzOiBcIiM0MERBMzNcIixcbn07XG5cbi8qKlxuICpcbiAqIEBuYW1lIENvbG9yQ29udGV4dF9EZWZhdWx0c1xuICogQGRlc2NyaXB0aW9uIERlZmF1bHRzIGZvciBvdXIgdGhlbWluZyBjb250ZXh0XG4gKlxuICovXG5leHBvcnQgY29uc3QgQ29sb3JDb250ZXh0X0RlZmF1bHRzOiBMWExUX0NvbG9yVGhlbWUgPSB7XG4gIHByaW1hcnk6IENvbG9yLlByaW1hcnksXG4gIHNlY29uZGFyeTogQ29sb3IuU2Vjb25kYXJ5LFxuICBmb3JlZ3JvdW5kOiBDb2xvci5UZXh0LFxuICBiYWNrZ3JvdW5kOiBDb2xvci5CYWNrZ3JvdW5kLFxuICBzZXRUaGVtZTogKCkgPT4ge30sXG59O1xuXG4vKipcbiAqXG4gKiBAbmFtZSB1c2VDb2xvckNvbnRleHRcbiAqIEBkZXNjcmlwdGlvbiBPdXIgaG9vayB0byB1cGRhdGUgb3VyIGNvbG9yIGNvbnRleHRcbiAqIEBzZWUgaHR0cHM6Ly9tZWRpdW0uY29tL0AwbjN6M3IwbjMvcmVhY3QtdXNlY29udGV4dC1ob3ctdG8tdXBkYXRlLWNvbnRleHQtZnJvbS1jaGlsZC1jb21wb25lbnQtOGZhMjg5NGVlZTNkXG4gKlxuICovXG5leHBvcnQgY29uc3QgdXNlQ29sb3JDb250ZXh0ID0gKCk6IExYTFRfQ29sb3JUaGVtZSA9PiB7XG4gIGNvbnN0IFtjb2xvclRoZW1lLCBzZXRDb2xvclRoZW1lXSA9IFJlYWN0LnVzZVN0YXRlKENvbG9yQ29udGV4dF9EZWZhdWx0cyk7XG5cbiAgY29uc3Qgc2V0VGhlbWUgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoY3VycmVudENvbG9yVGhlbWU6IExYTFRfQ29sb3JUaGVtZSk6IHZvaWQgPT4ge1xuICAgICAgc2V0Q29sb3JUaGVtZShjdXJyZW50Q29sb3JUaGVtZSk7XG4gICAgfSxcbiAgICBbXVxuICApO1xuXG4gIHJldHVybiB7XG4gICAgLi4uY29sb3JUaGVtZSxcbiAgICBzZXRUaGVtZSxcbiAgfTtcbn07XG5cbi8qKlxuICpcbiAqIEBuYW1lIENvbG9yQ29udGV4dFxuICogQGRlc2NyaXB0aW9uIE91ciBjb250ZXh0IHRvIHByb3ZpZGUgY29sb3IgdGhlbWVzXG4gKiBAc2VlIGh0dHBzOi8vbWVkaXVtLmNvbS9AMG4zejNyMG4zL3JlYWN0LXVzZWNvbnRleHQtaG93LXRvLXVwZGF0ZS1jb250ZXh0LWZyb20tY2hpbGQtY29tcG9uZW50LThmYTI4OTRlZWUzZFxuICpcbiAqL1xuZXhwb3J0IGNvbnN0IENvbG9yQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8TFhMVF9Db2xvclRoZW1lPihcbiAgQ29sb3JDb250ZXh0X0RlZmF1bHRzXG4pO1xuXG4vKipcbiAqXG4gKiBAbmFtZSBQYWxldHRlXG4gKiBAZGVzY3JpcHRpb24gR2xvYmFsIENTUyBWYXJpYWJsZXMgZm9yIHBhbGV0dGVcbiAqXG4gKi9cbmV4cG9ydCBjb25zdCBQYWxldHRlID0gY3JlYXRlR2xvYmFsU3R5bGVgXG4gIDo6LW1vei1zZWxlY3Rpb24geyBiYWNrZ3JvdW5kOiAke0NvbG9yLnZhckZvcmVncm91bmR9OyBjb2xvcjogJHtDb2xvci52YXJCYWNrZ3JvdW5kfSB9XG4gIDo6c2VsZWN0aW9uIHsgYmFja2dyb3VuZDogJHtDb2xvci52YXJGb3JlZ3JvdW5kfTsgY29sb3I6ICR7Q29sb3IudmFyQmFja2dyb3VuZH0gfVxuXG4gIDpyb290IHtcbiAgICAtLWNsclByaW1hcnk6ICR7Q29sb3IuUHJpbWFyeX07XG4gICAgLS1jbHJTZWNvbmRhcnk6ICR7Q29sb3IuU2Vjb25kYXJ5fTtcbiAgICAtLWNsckJhY2tncm91bmQ6ICR7Q29sb3IuQmFja2dyb3VuZH07XG4gICAgLS1jbHJGb3JlZ3JvdW5kOiAke0NvbG9yLlRleHR9O1xuICB9XG5gO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBFbmQgQ29tcG9uZW50XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./constants/styles/Color.tsx\n");

/***/ })

})