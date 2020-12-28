webpackHotUpdate_N_E("pages/sample",{

/***/ "./constants/site/Settings.tsx":
/*!*************************************!*\
  !*** ./constants/site/Settings.tsx ***!
  \*************************************/
/*! exports provided: Settings, SiteNavigation, __DEBUG__ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Settings\", function() { return Settings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SiteNavigation\", function() { return SiteNavigation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__DEBUG__\", function() { return __DEBUG__; });\n/* harmony import */ var _styles_Color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/Color */ \"./constants/styles/Color.tsx\");\n/**\n *\n * Settings.js\n * @author Peter Laxalt\n * @description This is the sitewide information that is used throughout the entire\n * build of the site. This goes from SEO to headings and also into the\n * core Gatsby config files as well.\n *\n */\n// Imports\n//////////////////////////////////////////////////////////////////////\n\n// Begin Component\n//////////////////////////////////////////////////////////////////////\nvar Settings = {\n  siteTitle: \"Play-Well TEKnologies | LEGO®-inspired engineering classes for kids & adults.\",\n  siteTitleShort: \"Play-Well\",\n  siteDescription: \"Kids are natural engineers. We help them realize it.\",\n  siteBaseKeywords: \"lego, engineering, engineering, classes, summer, camps, spring, learning, learn, play, education, knowledge\",\n  siteUrl: \"https://play-well-staging.netlify.com/\",\n  themeColor: _styles_Color__WEBPACK_IMPORTED_MODULE_0__[\"Color\"].Primary,\n  secondaryColor: _styles_Color__WEBPACK_IMPORTED_MODULE_0__[\"Color\"].Secondary,\n  backgroundColor: _styles_Color__WEBPACK_IMPORTED_MODULE_0__[\"Color\"].Background,\n  pathPrefix: \"/\",\n  logo: \"src/assets/images/icon.png\",\n  logoLight: \"src/assets/images/icon.png\",\n  logoDark: \"src/assets/images/icon.png\",\n  social: {\n    twitter: \"PlayWell_TEK\",\n    facebook: \"PlayWellTEK\",\n    instagram: \"playwellteknologies\",\n    fbAppId: \"56639339020281\"\n  },\n  contactPage: \"/contact\"\n};\nvar SiteNavigation = {\n  FrameItems: [{\n    label: \"Studio\",\n    href: \"/sample\"\n  }, {\n    label: \"Art\",\n    href: \"/sample\"\n  }, {\n    label: \"Design\",\n    href: \"/sample\"\n  }, {\n    label: \"Strategy\",\n    href: \"/sample\"\n  }, {\n    label: \"Interactive\",\n    href: \"/sample\"\n  }, {\n    label: \"Murals\",\n    href: \"/sample\"\n  }, {\n    label: \"Code\",\n    href: \"/sample\"\n  }, {\n    label: \"Lab\",\n    href: \"/sample\"\n  }, {\n    label: \"Products\",\n    href: \"/sample\"\n  }, {\n    label: \"Music\",\n    href: \"/sample\"\n  }, {\n    label: \"Tattoo\",\n    href: \"/sample\"\n  }, {\n    label: \"Shop\",\n    href: \"/sample\"\n  }, {\n    label: \"Resources\",\n    href: \"/sample\"\n  }, {\n    label: \"Advice\",\n    href: \"/sample\"\n  }, {\n    label: \"Fonts\",\n    href: \"/sample\"\n  }, {\n    label: \"Contact\",\n    href: \"/sample\"\n  }],\n  OverlayNav: {\n    NavItems: [{\n      label: \"Art\",\n      href: \"/sample\",\n      caption: \"Lorem ipsum\"\n    }, {\n      label: \"Design\",\n      href: \"/design\",\n      caption: \"Lorem ipsum\"\n    }, {\n      label: \"Code\",\n      href: \"/code\",\n      caption: \"Lorem ipsum\"\n    }, {\n      label: \"Studio\",\n      href: \"/studio\",\n      caption: \"Lorem ipsum\"\n    }, {\n      label: \"Thoughts\",\n      href: \"/thoughts\",\n      caption: \"Lorem ipsum\"\n    } // {\n    //   label: \"Learn\",\n    //   href: \"/sample\",\n    //   caption: \"Lorem ipsum\",\n    // },\n    // {\n    //   label: \"Shop\",\n    //   href: \"/sample\",\n    //   caption: \"Lorem ipsum\",\n    // },\n    // {\n    //   label: \"Contact\",\n    //   href: \"/sample\",\n    //   caption: \"Lorem ipsum\",\n    // },\n    ],\n    SocialItems: [{\n      label: \"Dribbble\",\n      href: \"/\"\n    }, {\n      label: \"Github\",\n      href: \"/\"\n    }, {\n      label: \"Instagram\",\n      href: \"/\"\n    }, {\n      label: \"LinkedIn\",\n      href: \"/\"\n    }]\n  }\n};\n/**\n *\n * @name __DEBUG__\n * @description Debug mode for console\n *\n */\n\nvar __DEBUG__ = true;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uc3RhbnRzL3NpdGUvU2V0dGluZ3MudHN4PzQzZDAiXSwibmFtZXMiOlsiU2V0dGluZ3MiLCJzaXRlVGl0bGUiLCJzaXRlVGl0bGVTaG9ydCIsInNpdGVEZXNjcmlwdGlvbiIsInNpdGVCYXNlS2V5d29yZHMiLCJzaXRlVXJsIiwidGhlbWVDb2xvciIsIkNvbG9yIiwiUHJpbWFyeSIsInNlY29uZGFyeUNvbG9yIiwiU2Vjb25kYXJ5IiwiYmFja2dyb3VuZENvbG9yIiwiQmFja2dyb3VuZCIsInBhdGhQcmVmaXgiLCJsb2dvIiwibG9nb0xpZ2h0IiwibG9nb0RhcmsiLCJzb2NpYWwiLCJ0d2l0dGVyIiwiZmFjZWJvb2siLCJpbnN0YWdyYW0iLCJmYkFwcElkIiwiY29udGFjdFBhZ2UiLCJTaXRlTmF2aWdhdGlvbiIsIkZyYW1lSXRlbXMiLCJsYWJlbCIsImhyZWYiLCJPdmVybGF5TmF2IiwiTmF2SXRlbXMiLCJjYXB0aW9uIiwiU29jaWFsSXRlbXMiLCJfX0RFQlVHX18iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFtQkE7QUFDQTtBQUVPLElBQU1BLFFBQVEsR0FBRztBQUN0QkMsV0FBUyxFQUNQLCtFQUZvQjtBQUd0QkMsZ0JBQWMsRUFBRSxXQUhNO0FBSXRCQyxpQkFBZSxFQUFFLHNEQUpLO0FBS3RCQyxrQkFBZ0IsRUFDZCw2R0FOb0I7QUFPdEJDLFNBQU8sRUFBRSx3Q0FQYTtBQVF0QkMsWUFBVSxFQUFFQyxtREFBSyxDQUFDQyxPQVJJO0FBU3RCQyxnQkFBYyxFQUFFRixtREFBSyxDQUFDRyxTQVRBO0FBVXRCQyxpQkFBZSxFQUFFSixtREFBSyxDQUFDSyxVQVZEO0FBV3RCQyxZQUFVLEVBQUUsR0FYVTtBQVl0QkMsTUFBSSxFQUFFLDRCQVpnQjtBQWF0QkMsV0FBUyxFQUFFLDRC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QUFtSVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLElBQU1LLFNBQVMsR0FBRyxJQUFsQiIsImZpbGUiOiIuL2NvbnN0YW50cy9zaXRlL1NldHRpbmdzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqIFNldHRpbmdzLmpzXG4gKiBAYXV0aG9yIFBldGVyIExheGFsdFxuICogQGRlc2NyaXB0aW9uIFRoaXMgaXMgdGhlIHNpdGV3aWRlIGluZm9ybWF0aW9uIHRoYXQgaXMgdXNlZCB0aHJvdWdob3V0IHRoZSBlbnRpcmVcbiAqIGJ1aWxkIG9mIHRoZSBzaXRlLiBUaGlzIGdvZXMgZnJvbSBTRU8gdG8gaGVhZGluZ3MgYW5kIGFsc28gaW50byB0aGVcbiAqIGNvcmUgR2F0c2J5IGNvbmZpZyBmaWxlcyBhcyB3ZWxsLlxuICpcbiAqL1xuXG4vLyBJbXBvcnRzXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCIuLi9zdHlsZXMvQ29sb3JcIjtcblxuZXhwb3J0IHR5cGUgTFhMVF9MaW5rSXRlbSA9IHtcbiAgbGFiZWw6IHN0cmluZztcbiAgaHJlZj86IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIExYTFRfTGlua0l0ZW1XaXRoQ2FwdGlvbiA9IExYTFRfTGlua0l0ZW0gJiB7XG4gIGNhcHRpb24/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBMWExUX1NpdGVOYXZpZ2F0aW9uID0ge1xuICBGcmFtZUl0ZW1zOiBMWExUX0xpbmtJdGVtW107XG4gIE92ZXJsYXlOYXY6IHtcbiAgICBTb2NpYWxJdGVtczogTFhMVF9MaW5rSXRlbVtdO1xuICAgIE5hdkl0ZW1zOiBMWExUX0xpbmtJdGVtV2l0aENhcHRpb25bXTtcbiAgfTtcbn07XG5cbi8vIEJlZ2luIENvbXBvbmVudFxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5leHBvcnQgY29uc3QgU2V0dGluZ3MgPSB7XG4gIHNpdGVUaXRsZTpcbiAgICBcIlBsYXktV2VsbCBURUtub2xvZ2llcyB8IExFR0/Cri1pbnNwaXJlZCBlbmdpbmVlcmluZyBjbGFzc2VzIGZvciBraWRzICYgYWR1bHRzLlwiLFxuICBzaXRlVGl0bGVTaG9ydDogXCJQbGF5LVdlbGxcIixcbiAgc2l0ZURlc2NyaXB0aW9uOiBcIktpZHMgYXJlIG5hdHVyYWwgZW5naW5lZXJzLiBXZSBoZWxwIHRoZW0gcmVhbGl6ZSBpdC5cIixcbiAgc2l0ZUJhc2VLZXl3b3JkczpcbiAgICBcImxlZ28sIGVuZ2luZWVyaW5nLCBlbmdpbmVlcmluZywgY2xhc3Nlcywgc3VtbWVyLCBjYW1wcywgc3ByaW5nLCBsZWFybmluZywgbGVhcm4sIHBsYXksIGVkdWNhdGlvbiwga25vd2xlZGdlXCIsXG4gIHNpdGVVcmw6IFwiaHR0cHM6Ly9wbGF5LXdlbGwtc3RhZ2luZy5uZXRsaWZ5LmNvbS9cIixcbiAgdGhlbWVDb2xvcjogQ29sb3IuUHJpbWFyeSxcbiAgc2Vjb25kYXJ5Q29sb3I6IENvbG9yLlNlY29uZGFyeSxcbiAgYmFja2dyb3VuZENvbG9yOiBDb2xvci5CYWNrZ3JvdW5kLFxuICBwYXRoUHJlZml4OiBcIi9cIixcbiAgbG9nbzogXCJzcmMvYXNzZXRzL2ltYWdlcy9pY29uLnBuZ1wiLFxuICBsb2dvTGlnaHQ6IFwic3JjL2Fzc2V0cy9pbWFnZXMvaWNvbi5wbmdcIixcbiAgbG9nb0Rhcms6IFwic3JjL2Fzc2V0cy9pbWFnZXMvaWNvbi5wbmdcIixcbiAgc29jaWFsOiB7XG4gICAgdHdpdHRlcjogXCJQbGF5V2VsbF9URUtcIixcbiAgICBmYWNlYm9vazogXCJQbGF5V2VsbFRFS1wiLFxuICAgIGluc3RhZ3JhbTogXCJwbGF5d2VsbHRla25vbG9naWVzXCIsXG4gICAgZmJBcHBJZDogXCI1NjYzOTMzOTAyMDI4MVwiLFxuICB9LFxuXG4gIGNvbnRhY3RQYWdlOiBcIi9jb250YWN0XCJcbn07XG5cbmV4cG9ydCBjb25zdCBTaXRlTmF2aWdhdGlvbjogTFhMVF9TaXRlTmF2aWdhdGlvbiA9IHtcbiAgRnJhbWVJdGVtczogW1xuICAgIHtcbiAgICAgIGxhYmVsOiBcIlN0dWRpb1wiLFxuICAgICAgaHJlZjogXCIvc2FtcGxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJBcnRcIixcbiAgICAgIGhyZWY6IFwiL3NhbXBsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiRGVzaWduXCIsXG4gICAgICBocmVmOiBcIi9zYW1wbGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIlN0cmF0ZWd5XCIsXG4gICAgICBocmVmOiBcIi9zYW1wbGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIkludGVyYWN0aXZlXCIsXG4gICAgICBocmVmOiBcIi9zYW1wbGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIk11cmFsc1wiLFxuICAgICAgaHJlZjogXCIvc2FtcGxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJDb2RlXCIsXG4gICAgICBocmVmOiBcIi9zYW1wbGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIkxhYlwiLFxuICAgICAgaHJlZjogXCIvc2FtcGxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJQcm9kdWN0c1wiLFxuICAgICAgaHJlZjogXCIvc2FtcGxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJNdXNpY1wiLFxuICAgICAgaHJlZjogXCIvc2FtcGxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJUYXR0b29cIixcbiAgICAgIGhyZWY6IFwiL3NhbXBsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiU2hvcFwiLFxuICAgICAgaHJlZjogXCIvc2FtcGxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJSZXNvdXJjZXNcIixcbiAgICAgIGhyZWY6IFwiL3NhbXBsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiQWR2aWNlXCIsXG4gICAgICBocmVmOiBcIi9zYW1wbGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIkZvbnRzXCIsXG4gICAgICBocmVmOiBcIi9zYW1wbGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIkNvbnRhY3RcIixcbiAgICAgIGhyZWY6IFwiL3NhbXBsZVwiLFxuICAgIH0sXG4gIF0sXG4gIE92ZXJsYXlOYXY6IHtcbiAgICBOYXZJdGVtczogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogXCJBcnRcIixcbiAgICAgICAgaHJlZjogXCIvc2FtcGxlXCIsXG4gICAgICAgIGNhcHRpb246IFwiTG9yZW0gaXBzdW1cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkRlc2lnblwiLFxuICAgICAgICBocmVmOiBcIi9kZXNpZ25cIixcbiAgICAgICAgY2FwdGlvbjogXCJMb3JlbSBpcHN1bVwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiQ29kZVwiLFxuICAgICAgICBocmVmOiBcIi9jb2RlXCIsXG4gICAgICAgIGNhcHRpb246IFwiTG9yZW0gaXBzdW1cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIlN0dWRpb1wiLFxuICAgICAgICBocmVmOiBcIi9zdHVkaW9cIixcbiAgICAgICAgY2FwdGlvbjogXCJMb3JlbSBpcHN1bVwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiVGhvdWdodHNcIixcbiAgICAgICAgaHJlZjogXCIvdGhvdWdodHNcIixcbiAgICAgICAgY2FwdGlvbjogXCJMb3JlbSBpcHN1bVwiLFxuICAgICAgfSxcbiAgICAgIC8vIHtcbiAgICAgIC8vICAgbGFiZWw6IFwiTGVhcm5cIixcbiAgICAgIC8vICAgaHJlZjogXCIvc2FtcGxlXCIsXG4gICAgICAvLyAgIGNhcHRpb246IFwiTG9yZW0gaXBzdW1cIixcbiAgICAgIC8vIH0sXG4gICAgICAvLyB7XG4gICAgICAvLyAgIGxhYmVsOiBcIlNob3BcIixcbiAgICAgIC8vICAgaHJlZjogXCIvc2FtcGxlXCIsXG4gICAgICAvLyAgIGNhcHRpb246IFwiTG9yZW0gaXBzdW1cIixcbiAgICAgIC8vIH0sXG4gICAgICAvLyB7XG4gICAgICAvLyAgIGxhYmVsOiBcIkNvbnRhY3RcIixcbiAgICAgIC8vICAgaHJlZjogXCIvc2FtcGxlXCIsXG4gICAgICAvLyAgIGNhcHRpb246IFwiTG9yZW0gaXBzdW1cIixcbiAgICAgIC8vIH0sXG4gICAgXSxcbiAgICBTb2NpYWxJdGVtczogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogXCJEcmliYmJsZVwiLFxuICAgICAgICBocmVmOiBcIi9cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkdpdGh1YlwiLFxuICAgICAgICBocmVmOiBcIi9cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkluc3RhZ3JhbVwiLFxuICAgICAgICBocmVmOiBcIi9cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkxpbmtlZEluXCIsXG4gICAgICAgIGhyZWY6IFwiL1wiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxufTtcblxuLyoqXG4gKlxuICogQG5hbWUgX19ERUJVR19fXG4gKiBAZGVzY3JpcHRpb24gRGVidWcgbW9kZSBmb3IgY29uc29sZVxuICpcbiAqL1xuZXhwb3J0IGNvbnN0IF9fREVCVUdfXyA9IHRydWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./constants/site/Settings.tsx\n");

/***/ })

})