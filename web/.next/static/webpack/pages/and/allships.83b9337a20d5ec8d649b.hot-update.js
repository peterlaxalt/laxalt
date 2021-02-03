webpackHotUpdate_N_E("pages/and/allships",{

/***/ "./pages/and/allships.tsx":
/*!********************************!*\
  !*** ./pages/and/allships.tsx ***!
  \********************************/
/*! exports provided: SamplePageClassName, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SamplePageClassName\", function() { return SamplePageClassName; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_LayeredSidebar_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/LayeredSidebar/styles.scss */ \"./components/LayeredSidebar/styles.scss.tsx\");\n/* harmony import */ var _components_Sections_HorizontalScrollSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Sections/HorizontalScrollSection */ \"./components/Sections/HorizontalScrollSection/index.tsx\");\n/* harmony import */ var _components_SimpleContentTemplate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/SimpleContentTemplate */ \"./components/SimpleContentTemplate/index.tsx\");\n/* harmony import */ var _components_svg_Headers_DesignBadge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/_svg/Headers/DesignBadge */ \"./components/_svg/Headers/DesignBadge.tsx\");\n/* harmony import */ var _constants_site_Settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/site/Settings */ \"./constants/site/Settings.tsx\");\n/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants/Theme */ \"./constants/Theme.tsx\");\n/* harmony import */ var _components_Sections_ProjectHero__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Sections/ProjectHero */ \"./components/Sections/ProjectHero/index.tsx\");\n/* harmony import */ var _components_Sections_ProjectIntroSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Sections/ProjectIntroSection */ \"./components/Sections/ProjectIntroSection/index.tsx\");\n\n\nvar _jsxFileName = \"/Users/pflaxalt/Repositories/_pfl/web/pages/and/allships.tsx\",\n    _this = undefined;\n\n/**\n *\n * index.js\n * @author Peter Laxalt\n * @description The website home page.\n *\n */\n// Core\n\n\n\n\n\n\n\n\n // Components\n// Begin Component\n// __________________________________________________________________________________________\n\nvar SamplePageClassName = \"route__home-page\";\n/**\n *\n * pages/index.tsx\n * @author Peter Laxalt\n *\n */\n\nvar SamplePage = function SamplePage() {\n  // __________________________________\n  // Project data\n  var currentProject = Object(_constants_site_Settings__WEBPACK_IMPORTED_MODULE_6__[\"getProjectData\"])(\"allships\"); // __________________________________\n  // Sidebar\n\n  var sidebarPanes = [{\n    header: \"Design\",\n    headerBadge: _components_svg_Headers_DesignBadge__WEBPACK_IMPORTED_MODULE_5__[\"DesignBadge\"],\n    items: _constants_site_Settings__WEBPACK_IMPORTED_MODULE_6__[\"SiteDesignGraph\"].categories.map(function (category) {\n      return {\n        label: category.name,\n        href: category.slug === \"everything\" ? \"/\".concat(_constants_site_Settings__WEBPACK_IMPORTED_MODULE_6__[\"SiteDesignGraph\"].rootSlug) : \"/\".concat(_constants_site_Settings__WEBPACK_IMPORTED_MODULE_6__[\"SiteDesignGraph\"].rootSlug, \"/\").concat(category.slug),\n        isActive: category.slug === \"everything\" ? true : false,\n        isMajor: category.isMajor ? category.isMajor : false\n      };\n    })\n  }, {\n    header: \"Strategy\",\n    items: [{\n      label: \"Item\",\n      href: \"/\",\n      isMajor: true,\n      isActive: false\n    }, {\n      label: \"Item\",\n      href: \"/\",\n      isMajor: true,\n      isActive: false\n    }, {\n      label: \"Item\",\n      href: \"/\",\n      isMajor: true,\n      isActive: false\n    }, {\n      label: \"Item\",\n      href: \"/\",\n      isMajor: false,\n      isActive: false\n    }, {\n      label: \"Item\",\n      href: \"/\",\n      isMajor: false,\n      isActive: false\n    }, {\n      label: \"Item\",\n      href: \"/\",\n      isMajor: false,\n      isActive: false\n    }]\n  }, {\n    // header: \"Strategy\",\n    items: [{\n      label: \"Intro\",\n      href: \"/\",\n      isMajor: true,\n      isActive: false\n    }, {\n      label: \"Overview\",\n      href: \"/\",\n      isMajor: true,\n      isActive: false\n    }, {\n      label: \"Team\",\n      href: \"/\",\n      isMajor: true,\n      isActive: false\n    }, {\n      label: \"Scrap Pile\",\n      href: \"/\",\n      isMajor: false,\n      isActive: false\n    }, {\n      label: \"Related Projects\",\n      href: \"/\",\n      isMajor: false,\n      isActive: false\n    }]\n  }]; // ______________________________\n  // Misc\n\n  var arr = [\"https://cdn.dribbble.com/users/221507/screenshots/6860552/nv-9_4x.jpg?compress=1&resize=1000x750\", \"https://cdn.dribbble.com/users/221507/screenshots/6764380/artboard_1_copy_2_3x_4x.png?compress=1&resize=1000x750\", \"https://cdn.dribbble.com/users/221507/screenshots/6247770/drib-snakepin-dribbbb_4x.jpg?compress=1&resize=1000x750\", \"https://cdn.dribbble.com/users/221507/screenshots/5917586/deso-full-sheet_4x.jpg?compress=1&resize=1000x750\", \"https://cdn.dribbble.com/users/221507/screenshots/5917614/csf-containers_4x.jpg?compress=1&resize=1000x750\", \"https://cdn.dribbble.com/users/221507/screenshots/5917571/mountain-lion-dribibibibibb_4x.jpg?compress=1&resize=1000x750\", \"https://cdn.dribbble.com/users/221507/screenshots/5840854/craftlogogogo-dribbb_4x.jpg?compress=1&resize=1000x750\", \"https://cdn.dribbble.com/users/221507/screenshots/5810284/love-pain-shame-dribbble_4x.jpg?compress=1&resize=1000x750\", \"https://cdn.dribbble.com/users/221507/screenshots/5544831/dribibiibibibib_4x.jpg?compress=1&resize=1000x750\", \"https://cdn.dribbble.com/users/221507/screenshots/5023879/localyyz-home-dribble_4x.png?compress=1&resize=1000x750\"];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_SimpleContentTemplate__WEBPACK_IMPORTED_MODULE_4__[\"SimpleContentTemplate\"], {\n    globalSidebarPanes: sidebarPanes,\n    addClass: \"\".concat(SamplePageClassName),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Sections_ProjectHero__WEBPACK_IMPORTED_MODULE_8__[\"ProjectHero\"], {\n      project: currentProject,\n      sections: [{\n        name: \"Something\",\n        anchor: \"something\"\n      }, {\n        name: \"Something\",\n        anchor: \"something\"\n      }, {\n        name: \"Something\",\n        anchor: \"something\"\n      }]\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 170,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Sections_ProjectIntroSection__WEBPACK_IMPORTED_MODULE_9__[\"ProjectIntroSection\"], {\n      project: currentProject,\n      hasSidebar: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 188,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      style: {\n        maxWidth: 650,\n        fontFamily: \"\".concat(_constants_Theme__WEBPACK_IMPORTED_MODULE_7__[\"Theme\"].Font.Code),\n        fontSize: \"1.5rem\",\n        margin: \"20px 0px 20px 0px\"\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: \"APRIL 20 \\u2014 \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 199,\n        columnNumber: 9\n      }, _this), \"Nunc fringilla leo vel ligula porttitor posuere in eget purus. Nam vitae bibendum sem. Suspendisse tempus, libero sed sodales cursus, quam quam euismod massa, a vestibulum lacus lacus ac leo. Proin sit amet est quam. Proin libero eros, interdum ut maximus ut, bibendum eu nulla. Aenean nunc augue, pulvinar dignissim sapien id, tempus lacinia neque. Mauris dignissim, urna nec blandit ullamcorper, elit ante tempus turpis, non consectetur orci diam eu lorem. Sed rutrum, leo tincidunt sagittis pharetra, quam diam fermentum libero, a ullamcorper massa velit non dolor. Maecenas eget pellentesque lacus. Sed ac lectus quis tellus euismod pharetra. Vivamus pretium gravida urna a posuere.\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 191,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      style: {\n        maxWidth: 650,\n        fontSize: \"1.05rem\",\n        margin: \"20px 0px 20px 0px\"\n      },\n      children: \"Nunc fringilla leo vel ligula porttitor posuere in eget purus. Nam vitae bibendum sem. Suspendisse tempus, libero sed sodales cursus, quam quam euismod massa, a vestibulum lacus lacus ac leo. Proin sit amet est quam. Proin libero eros, interdum ut maximus ut, bibendum eu nulla. Aenean nunc augue, pulvinar dignissim sapien id, tempus lacinia neque. Mauris dignissim, urna nec blandit ullamcorper, elit ante tempus turpis, non consectetur orci diam eu lorem. Sed rutrum, leo tincidunt sagittis pharetra, quam diam fermentum libero, a ullamcorper massa velit non dolor. Maecenas eget pellentesque lacus. Sed ac lectus quis tellus euismod pharetra. Vivamus pretium gravida urna a posuere.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 212,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Sections_HorizontalScrollSection__WEBPACK_IMPORTED_MODULE_3__[\"HorizontalScrollSection\"], {\n      hasSidebar: true,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"spacer\",\n        style: {\n          width: _components_LayeredSidebar_styles_scss__WEBPACK_IMPORTED_MODULE_2__[\"LayeredSidebarWidth\"]\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 232,\n        columnNumber: 9\n      }, _this), arr.map(function (i, idx) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          style: {\n            width: \"50vw\",\n            flexShrink: 0,\n            marginRight: \"50px\",\n            position: \"relative\"\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            style: {\n              width: \"100%\",\n              height: \"100%\",\n              display: \"grid\",\n              placeItems: \"center\"\n            },\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: i,\n              draggable: false,\n              style: {\n                border: \"2px solid \".concat(_constants_Theme__WEBPACK_IMPORTED_MODULE_7__[\"Theme\"].Color.varBackground),\n                maxWidth: \"100%\",\n                width: \"100%\",\n                pointerEvents: \"none\"\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 252,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 244,\n            columnNumber: 15\n          }, _this)\n        }, idx, false, {\n          fileName: _jsxFileName,\n          lineNumber: 235,\n          columnNumber: 13\n        }, _this);\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 231,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      style: {\n        maxWidth: 650,\n        fontSize: \"1.05rem\",\n        margin: \"20px 0px 20px 0px\"\n      },\n      children: \"Nunc fringilla leo vel ligula porttitor posuere in eget purus. Nam vitae bibendum sem. Suspendisse tempus, libero sed sodales cursus, quam quam euismod massa, a vestibulum lacus lacus ac leo. Proin sit amet est quam. Proin libero eros, interdum ut maximus ut, bibendum eu nulla. Aenean nunc augue, pulvinar dignissim sapien id, tempus lacinia neque. Mauris dignissim, urna nec blandit ullamcorper, elit ante tempus turpis, non consectetur orci diam eu lorem. Sed rutrum, leo tincidunt sagittis pharetra, quam diam fermentum libero, a ullamcorper massa velit non dolor. Maecenas eget pellentesque lacus. Sed ac lectus quis tellus euismod pharetra. Vivamus pretium gravida urna a posuere.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 268,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      style: {\n        maxWidth: 650,\n        fontSize: \"1.05rem\",\n        margin: \"20px 0px 20px 0px\"\n      },\n      children: \"Nunc fringilla leo vel ligula porttitor posuere in eget purus. Nam vitae bibendum sem. Suspendisse tempus, libero sed sodales cursus, quam quam euismod massa, a vestibulum lacus lacus ac leo. Proin sit amet est quam. Proin libero eros, interdum ut maximus ut, bibendum eu nulla. Aenean nunc augue, pulvinar dignissim sapien id, tempus lacinia neque. Mauris dignissim, urna nec blandit ullamcorper, elit ante tempus turpis, non consectetur orci diam eu lorem. Sed rutrum, leo tincidunt sagittis pharetra, quam diam fermentum libero, a ullamcorper massa velit non dolor. Maecenas eget pellentesque lacus. Sed ac lectus quis tellus euismod pharetra. Vivamus pretium gravida urna a posuere.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 287,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 166,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = SamplePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SamplePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"SamplePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYW5kL2FsbHNoaXBzLnRzeD9mYWNhIl0sIm5hbWVzIjpbIlNhbXBsZVBhZ2VDbGFzc05hbWUiLCJTYW1wbGVQYWdlIiwiY3VycmVudFByb2plY3QiLCJnZXRQcm9qZWN0RGF0YSIsInNpZGViYXJQYW5lcyIsImhlYWRlciIsImhlYWRlckJhZGdlIiwiRGVzaWduQmFkZ2UiLCJpdGVtcyIsIlNpdGVEZXNpZ25HcmFwaCIsImNhdGVnb3JpZXMiLCJtYXAiLCJjYXRlZ29yeSIsImxhYmVsIiwibmFtZSIsImhyZWYiLCJzbHVnIiwicm9vdFNsdWciLCJpc0FjdGl2ZSIsImlzTWFqb3IiLCJhcnIiLCJhbmNob3IiLCJtYXhXaWR0aCIsImZvbnRGYW1pbHkiLCJUaGVtZSIsIkZvbnQiLCJDb2RlIiwiZm9udFNpemUiLCJtYXJnaW4iLCJ3aWR0aCIsIkxheWVyZWRTaWRlYmFyV2lkdGgiLCJpIiwiaWR4IiwiZmxleFNocmluayIsIm1hcmdpblJpZ2h0IiwicG9zaXRpb24iLCJoZWlnaHQiLCJkaXNwbGF5IiwicGxhY2VJdGVtcyIsImJvcmRlciIsIkNvbG9yIiwidmFyQmFja2dyb3VuZCIsInBvaW50ZXJFdmVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBS0E7QUFHQTtDQUdBO0FBRUE7QUFDQTs7QUFJTyxJQUFNQSxtQkFBbUIsR0FBRyxrQkFBNUI7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUMsVUFBOEMsR0FBRyxTQUFqREEsVUFBaUQsR0FBTTtBQUMzRDtBQUNBO0FBQ0EsTUFBSUMsY0FBYyxHQUFHQywrRUFBYyxDQUFDLFVBQUQsQ0FBbkMsQ0FIMkQsQ0FLM0Q7QUFDQTs7QUFDQSxNQUFJQyxZQUFnQyxHQUFHLENBQ3JDO0FBQ0VDLFVBQU0s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OiIuL3BhZ2VzL2FuZC9hbGxzaGlwcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqXG4gKiBpbmRleC5qc1xuICogQGF1dGhvciBQZXRlciBMYXhhbHRcbiAqIEBkZXNjcmlwdGlvbiBUaGUgd2Vic2l0ZSBob21lIHBhZ2UuXG4gKlxuICovXG5cbi8vIENvcmVcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExYTFRfU2lkZWJhclBhbmUgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXllcmVkU2lkZWJhclwiO1xuaW1wb3J0IHsgTGF5ZXJlZFNpZGViYXJXaWR0aCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheWVyZWRTaWRlYmFyL3N0eWxlcy5zY3NzXCI7XG5pbXBvcnQgeyBDc3NGcmFtZVNpemVXaXRoQm9yZGVyU3RyaW5nIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWVsbG93RnJhbWVIZWFkZXIvc3R5bGVzLnNjc3NcIjtcbmltcG9ydCB7IEhvcml6b250YWxTY3JvbGxTZWN0aW9uIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VjdGlvbnMvSG9yaXpvbnRhbFNjcm9sbFNlY3Rpb25cIjtcbmltcG9ydCB7IE1hcnF1ZWVSb3cgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TZWN0aW9ucy9NYXJxdWVlUm93XCI7XG5pbXBvcnQgeyBTaW1wbGVDb250ZW50VGVtcGxhdGUgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TaW1wbGVDb250ZW50VGVtcGxhdGVcIjtcbmltcG9ydCB7IERlc2lnbkJhZGdlIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvX3N2Zy9IZWFkZXJzL0Rlc2lnbkJhZGdlXCI7XG5pbXBvcnQgeyBSb290IH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9Sb290XCI7XG5pbXBvcnQge1xuICBnZXRQcm9qZWN0RGF0YSxcbiAgTFhMVF9DYXRlZ29yeSxcbiAgU2l0ZURlc2lnbkdyYXBoLFxufSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL3NpdGUvU2V0dGluZ3NcIjtcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9UaGVtZVwiO1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IFByb2plY3RIZXJvIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VjdGlvbnMvUHJvamVjdEhlcm9cIjtcbmltcG9ydCB7IFByb2plY3RJbnRyb1NlY3Rpb24gfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TZWN0aW9ucy9Qcm9qZWN0SW50cm9TZWN0aW9uXCI7XG5cbi8vIENvbXBvbmVudHNcblxuLy8gQmVnaW4gQ29tcG9uZW50XG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cblxudHlwZSBMTU5UU19Mb2NhdGlvbnNGcm9udFBhZ2UgPSB7fTtcblxuZXhwb3J0IGNvbnN0IFNhbXBsZVBhZ2VDbGFzc05hbWUgPSBcInJvdXRlX19ob21lLXBhZ2VcIjtcblxuLyoqXG4gKlxuICogcGFnZXMvaW5kZXgudHN4XG4gKiBAYXV0aG9yIFBldGVyIExheGFsdFxuICpcbiAqL1xuY29uc3QgU2FtcGxlUGFnZTogTmV4dFBhZ2U8TE1OVFNfTG9jYXRpb25zRnJvbnRQYWdlPiA9ICgpID0+IHtcbiAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAvLyBQcm9qZWN0IGRhdGFcbiAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gZ2V0UHJvamVjdERhdGEoXCJhbGxzaGlwc1wiKTtcblxuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gIC8vIFNpZGViYXJcbiAgbGV0IHNpZGViYXJQYW5lczogTFhMVF9TaWRlYmFyUGFuZVtdID0gW1xuICAgIHtcbiAgICAgIGhlYWRlcjogXCJEZXNpZ25cIixcbiAgICAgIGhlYWRlckJhZGdlOiBEZXNpZ25CYWRnZSxcbiAgICAgIGl0ZW1zOiBTaXRlRGVzaWduR3JhcGguY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5OiBMWExUX0NhdGVnb3J5KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbGFiZWw6IGNhdGVnb3J5Lm5hbWUsXG4gICAgICAgICAgaHJlZjpcbiAgICAgICAgICAgIGNhdGVnb3J5LnNsdWcgPT09IFwiZXZlcnl0aGluZ1wiXG4gICAgICAgICAgICAgID8gYC8ke1NpdGVEZXNpZ25HcmFwaC5yb290U2x1Z31gXG4gICAgICAgICAgICAgIDogYC8ke1NpdGVEZXNpZ25HcmFwaC5yb290U2x1Z30vJHtjYXRlZ29yeS5zbHVnfWAsXG4gICAgICAgICAgaXNBY3RpdmU6IGNhdGVnb3J5LnNsdWcgPT09IFwiZXZlcnl0aGluZ1wiID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICAgIGlzTWFqb3I6IGNhdGVnb3J5LmlzTWFqb3IgPyBjYXRlZ29yeS5pc01ham9yIDogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICB9LFxuXG4gICAge1xuICAgICAgaGVhZGVyOiBcIlN0cmF0ZWd5XCIsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiSXRlbVwiLFxuICAgICAgICAgIGhyZWY6IFwiL1wiLFxuICAgICAgICAgIGlzTWFqb3I6IHRydWUsXG4gICAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiSXRlbVwiLFxuICAgICAgICAgIGhyZWY6IFwiL1wiLFxuICAgICAgICAgIGlzTWFqb3I6IHRydWUsXG4gICAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiSXRlbVwiLFxuICAgICAgICAgIGhyZWY6IFwiL1wiLFxuICAgICAgICAgIGlzTWFqb3I6IHRydWUsXG4gICAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiSXRlbVwiLFxuICAgICAgICAgIGhyZWY6IFwiL1wiLFxuICAgICAgICAgIGlzTWFqb3I6IGZhbHNlLFxuICAgICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIkl0ZW1cIixcbiAgICAgICAgICBocmVmOiBcIi9cIixcbiAgICAgICAgICBpc01ham9yOiBmYWxzZSxcbiAgICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJJdGVtXCIsXG4gICAgICAgICAgaHJlZjogXCIvXCIsXG4gICAgICAgICAgaXNNYWpvcjogZmFsc2UsXG4gICAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuXG4gICAge1xuICAgICAgLy8gaGVhZGVyOiBcIlN0cmF0ZWd5XCIsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiSW50cm9cIixcbiAgICAgICAgICBocmVmOiBcIi9cIixcbiAgICAgICAgICBpc01ham9yOiB0cnVlLFxuICAgICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIk92ZXJ2aWV3XCIsXG4gICAgICAgICAgaHJlZjogXCIvXCIsXG4gICAgICAgICAgaXNNYWpvcjogdHJ1ZSxcbiAgICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJUZWFtXCIsXG4gICAgICAgICAgaHJlZjogXCIvXCIsXG4gICAgICAgICAgaXNNYWpvcjogdHJ1ZSxcbiAgICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJTY3JhcCBQaWxlXCIsXG4gICAgICAgICAgaHJlZjogXCIvXCIsXG4gICAgICAgICAgaXNNYWpvcjogZmFsc2UsXG4gICAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiUmVsYXRlZCBQcm9qZWN0c1wiLFxuICAgICAgICAgIGhyZWY6IFwiL1wiLFxuICAgICAgICAgIGlzTWFqb3I6IGZhbHNlLFxuICAgICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgXTtcblxuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gTWlzY1xuXG4gIHZhciBhcnIgPSBbXG4gICAgXCJodHRwczovL2Nkbi5kcmliYmJsZS5jb20vdXNlcnMvMjIxNTA3L3NjcmVlbnNob3RzLzY4NjA1NTIvbnYtOV80eC5qcGc/Y29tcHJlc3M9MSZyZXNpemU9MTAwMHg3NTBcIixcbiAgICBcImh0dHBzOi8vY2RuLmRyaWJiYmxlLmNvbS91c2Vycy8yMjE1MDcvc2NyZWVuc2hvdHMvNjc2NDM4MC9hcnRib2FyZF8xX2NvcHlfMl8zeF80eC5wbmc/Y29tcHJlc3M9MSZyZXNpemU9MTAwMHg3NTBcIixcbiAgICBcImh0dHBzOi8vY2RuLmRyaWJiYmxlLmNvbS91c2Vycy8yMjE1MDcvc2NyZWVuc2hvdHMvNjI0Nzc3MC9kcmliLXNuYWtlcGluLWRyaWJiYmJfNHguanBnP2NvbXByZXNzPTEmcmVzaXplPTEwMDB4NzUwXCIsXG4gICAgXCJodHRwczovL2Nkbi5kcmliYmJsZS5jb20vdXNlcnMvMjIxNTA3L3NjcmVlbnNob3RzLzU5MTc1ODYvZGVzby1mdWxsLXNoZWV0XzR4LmpwZz9jb21wcmVzcz0xJnJlc2l6ZT0xMDAweDc1MFwiLFxuICAgIFwiaHR0cHM6Ly9jZG4uZHJpYmJibGUuY29tL3VzZXJzLzIyMTUwNy9zY3JlZW5zaG90cy81OTE3NjE0L2NzZi1jb250YWluZXJzXzR4LmpwZz9jb21wcmVzcz0xJnJlc2l6ZT0xMDAweDc1MFwiLFxuICAgIFwiaHR0cHM6Ly9jZG4uZHJpYmJibGUuY29tL3VzZXJzLzIyMTUwNy9zY3JlZW5zaG90cy81OTE3NTcxL21vdW50YWluLWxpb24tZHJpYmliaWJpYmliYl80eC5qcGc/Y29tcHJlc3M9MSZyZXNpemU9MTAwMHg3NTBcIixcbiAgICBcImh0dHBzOi8vY2RuLmRyaWJiYmxlLmNvbS91c2Vycy8yMjE1MDcvc2NyZWVuc2hvdHMvNTg0MDg1NC9jcmFmdGxvZ29nb2dvLWRyaWJiYl80eC5qcGc/Y29tcHJlc3M9MSZyZXNpemU9MTAwMHg3NTBcIixcbiAgICBcImh0dHBzOi8vY2RuLmRyaWJiYmxlLmNvbS91c2Vycy8yMjE1MDcvc2NyZWVuc2hvdHMvNTgxMDI4NC9sb3ZlLXBhaW4tc2hhbWUtZHJpYmJibGVfNHguanBnP2NvbXByZXNzPTEmcmVzaXplPTEwMDB4NzUwXCIsXG4gICAgXCJodHRwczovL2Nkbi5kcmliYmJsZS5jb20vdXNlcnMvMjIxNTA3L3NjcmVlbnNob3RzLzU1NDQ4MzEvZHJpYmliaWliaWJpYmliXzR4LmpwZz9jb21wcmVzcz0xJnJlc2l6ZT0xMDAweDc1MFwiLFxuICAgIFwiaHR0cHM6Ly9jZG4uZHJpYmJibGUuY29tL3VzZXJzLzIyMTUwNy9zY3JlZW5zaG90cy81MDIzODc5L2xvY2FseXl6LWhvbWUtZHJpYmJsZV80eC5wbmc/Y29tcHJlc3M9MSZyZXNpemU9MTAwMHg3NTBcIixcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxTaW1wbGVDb250ZW50VGVtcGxhdGVcbiAgICAgIGdsb2JhbFNpZGViYXJQYW5lcz17c2lkZWJhclBhbmVzfVxuICAgICAgYWRkQ2xhc3M9e2Ake1NhbXBsZVBhZ2VDbGFzc05hbWV9YH1cbiAgICA+XG4gICAgICA8UHJvamVjdEhlcm9cbiAgICAgICAgcHJvamVjdD17Y3VycmVudFByb2plY3R9XG4gICAgICAgIHNlY3Rpb25zPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJTb21ldGhpbmdcIixcbiAgICAgICAgICAgIGFuY2hvcjogXCJzb21ldGhpbmdcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiU29tZXRoaW5nXCIsXG4gICAgICAgICAgICBhbmNob3I6IFwic29tZXRoaW5nXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIlNvbWV0aGluZ1wiLFxuICAgICAgICAgICAgYW5jaG9yOiBcInNvbWV0aGluZ1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF19XG4gICAgICAvPlxuXG4gICAgICA8UHJvamVjdEludHJvU2VjdGlvbiBwcm9qZWN0PXtjdXJyZW50UHJvamVjdH0gaGFzU2lkZWJhcj17dHJ1ZX0gLz5cblxuXG4gICAgICA8cFxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIG1heFdpZHRoOiA2NTAsXG4gICAgICAgICAgZm9udEZhbWlseTogYCR7VGhlbWUuRm9udC5Db2RlfWAsXG4gICAgICAgICAgZm9udFNpemU6IFwiMS41cmVtXCIsXG4gICAgICAgICAgbWFyZ2luOiBcIjIwcHggMHB4IDIwcHggMHB4XCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxzdHJvbmc+QVBSSUwgMjAg4oCUIDwvc3Ryb25nPk51bmMgZnJpbmdpbGxhIGxlbyB2ZWwgbGlndWxhIHBvcnR0aXRvclxuICAgICAgICBwb3N1ZXJlIGluIGVnZXQgcHVydXMuIE5hbSB2aXRhZSBiaWJlbmR1bSBzZW0uIFN1c3BlbmRpc3NlIHRlbXB1cyxcbiAgICAgICAgbGliZXJvIHNlZCBzb2RhbGVzIGN1cnN1cywgcXVhbSBxdWFtIGV1aXNtb2QgbWFzc2EsIGEgdmVzdGlidWx1bSBsYWN1c1xuICAgICAgICBsYWN1cyBhYyBsZW8uIFByb2luIHNpdCBhbWV0IGVzdCBxdWFtLiBQcm9pbiBsaWJlcm8gZXJvcywgaW50ZXJkdW0gdXRcbiAgICAgICAgbWF4aW11cyB1dCwgYmliZW5kdW0gZXUgbnVsbGEuIEFlbmVhbiBudW5jIGF1Z3VlLCBwdWx2aW5hciBkaWduaXNzaW1cbiAgICAgICAgc2FwaWVuIGlkLCB0ZW1wdXMgbGFjaW5pYSBuZXF1ZS4gTWF1cmlzIGRpZ25pc3NpbSwgdXJuYSBuZWMgYmxhbmRpdFxuICAgICAgICB1bGxhbWNvcnBlciwgZWxpdCBhbnRlIHRlbXB1cyB0dXJwaXMsIG5vbiBjb25zZWN0ZXR1ciBvcmNpIGRpYW0gZXVcbiAgICAgICAgbG9yZW0uIFNlZCBydXRydW0sIGxlbyB0aW5jaWR1bnQgc2FnaXR0aXMgcGhhcmV0cmEsIHF1YW0gZGlhbSBmZXJtZW50dW1cbiAgICAgICAgbGliZXJvLCBhIHVsbGFtY29ycGVyIG1hc3NhIHZlbGl0IG5vbiBkb2xvci4gTWFlY2VuYXMgZWdldCBwZWxsZW50ZXNxdWVcbiAgICAgICAgbGFjdXMuIFNlZCBhYyBsZWN0dXMgcXVpcyB0ZWxsdXMgZXVpc21vZCBwaGFyZXRyYS4gVml2YW11cyBwcmV0aXVtXG4gICAgICAgIGdyYXZpZGEgdXJuYSBhIHBvc3VlcmUuXG4gICAgICA8L3A+XG5cbiAgICAgIDxwXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgbWF4V2lkdGg6IDY1MCxcbiAgICAgICAgICBmb250U2l6ZTogXCIxLjA1cmVtXCIsXG4gICAgICAgICAgbWFyZ2luOiBcIjIwcHggMHB4IDIwcHggMHB4XCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIE51bmMgZnJpbmdpbGxhIGxlbyB2ZWwgbGlndWxhIHBvcnR0aXRvciBwb3N1ZXJlIGluIGVnZXQgcHVydXMuIE5hbSB2aXRhZVxuICAgICAgICBiaWJlbmR1bSBzZW0uIFN1c3BlbmRpc3NlIHRlbXB1cywgbGliZXJvIHNlZCBzb2RhbGVzIGN1cnN1cywgcXVhbSBxdWFtXG4gICAgICAgIGV1aXNtb2QgbWFzc2EsIGEgdmVzdGlidWx1bSBsYWN1cyBsYWN1cyBhYyBsZW8uIFByb2luIHNpdCBhbWV0IGVzdCBxdWFtLlxuICAgICAgICBQcm9pbiBsaWJlcm8gZXJvcywgaW50ZXJkdW0gdXQgbWF4aW11cyB1dCwgYmliZW5kdW0gZXUgbnVsbGEuIEFlbmVhblxuICAgICAgICBudW5jIGF1Z3VlLCBwdWx2aW5hciBkaWduaXNzaW0gc2FwaWVuIGlkLCB0ZW1wdXMgbGFjaW5pYSBuZXF1ZS4gTWF1cmlzXG4gICAgICAgIGRpZ25pc3NpbSwgdXJuYSBuZWMgYmxhbmRpdCB1bGxhbWNvcnBlciwgZWxpdCBhbnRlIHRlbXB1cyB0dXJwaXMsIG5vblxuICAgICAgICBjb25zZWN0ZXR1ciBvcmNpIGRpYW0gZXUgbG9yZW0uIFNlZCBydXRydW0sIGxlbyB0aW5jaWR1bnQgc2FnaXR0aXNcbiAgICAgICAgcGhhcmV0cmEsIHF1YW0gZGlhbSBmZXJtZW50dW0gbGliZXJvLCBhIHVsbGFtY29ycGVyIG1hc3NhIHZlbGl0IG5vblxuICAgICAgICBkb2xvci4gTWFlY2VuYXMgZWdldCBwZWxsZW50ZXNxdWUgbGFjdXMuIFNlZCBhYyBsZWN0dXMgcXVpcyB0ZWxsdXNcbiAgICAgICAgZXVpc21vZCBwaGFyZXRyYS4gVml2YW11cyBwcmV0aXVtIGdyYXZpZGEgdXJuYSBhIHBvc3VlcmUuXG4gICAgICA8L3A+XG5cbiAgICAgIDxIb3Jpem9udGFsU2Nyb2xsU2VjdGlvbiBoYXNTaWRlYmFyPXt0cnVlfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZXJcIiBzdHlsZT17eyB3aWR0aDogTGF5ZXJlZFNpZGViYXJXaWR0aCB9fSAvPlxuICAgICAgICB7YXJyLm1hcCgoaTogYW55LCBpZHg6IG51bWJlcikgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17aWR4fVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjUwdndcIixcbiAgICAgICAgICAgICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjUwcHhcIixcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXG4gICAgICAgICAgICAgICAgICBwbGFjZUl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9e2l9XG4gICAgICAgICAgICAgICAgICBkcmFnZ2FibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBgMnB4IHNvbGlkICR7VGhlbWUuQ29sb3IudmFyQmFja2dyb3VuZH1gLFxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlckV2ZW50czogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9Ib3Jpem9udGFsU2Nyb2xsU2VjdGlvbj5cblxuICAgICAgPHBcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBtYXhXaWR0aDogNjUwLFxuICAgICAgICAgIGZvbnRTaXplOiBcIjEuMDVyZW1cIixcbiAgICAgICAgICBtYXJnaW46IFwiMjBweCAwcHggMjBweCAwcHhcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgTnVuYyBmcmluZ2lsbGEgbGVvIHZlbCBsaWd1bGEgcG9ydHRpdG9yIHBvc3VlcmUgaW4gZWdldCBwdXJ1cy4gTmFtIHZpdGFlXG4gICAgICAgIGJpYmVuZHVtIHNlbS4gU3VzcGVuZGlzc2UgdGVtcHVzLCBsaWJlcm8gc2VkIHNvZGFsZXMgY3Vyc3VzLCBxdWFtIHF1YW1cbiAgICAgICAgZXVpc21vZCBtYXNzYSwgYSB2ZXN0aWJ1bHVtIGxhY3VzIGxhY3VzIGFjIGxlby4gUHJvaW4gc2l0IGFtZXQgZXN0IHF1YW0uXG4gICAgICAgIFByb2luIGxpYmVybyBlcm9zLCBpbnRlcmR1bSB1dCBtYXhpbXVzIHV0LCBiaWJlbmR1bSBldSBudWxsYS4gQWVuZWFuXG4gICAgICAgIG51bmMgYXVndWUsIHB1bHZpbmFyIGRpZ25pc3NpbSBzYXBpZW4gaWQsIHRlbXB1cyBsYWNpbmlhIG5lcXVlLiBNYXVyaXNcbiAgICAgICAgZGlnbmlzc2ltLCB1cm5hIG5lYyBibGFuZGl0IHVsbGFtY29ycGVyLCBlbGl0IGFudGUgdGVtcHVzIHR1cnBpcywgbm9uXG4gICAgICAgIGNvbnNlY3RldHVyIG9yY2kgZGlhbSBldSBsb3JlbS4gU2VkIHJ1dHJ1bSwgbGVvIHRpbmNpZHVudCBzYWdpdHRpc1xuICAgICAgICBwaGFyZXRyYSwgcXVhbSBkaWFtIGZlcm1lbnR1bSBsaWJlcm8sIGEgdWxsYW1jb3JwZXIgbWFzc2EgdmVsaXQgbm9uXG4gICAgICAgIGRvbG9yLiBNYWVjZW5hcyBlZ2V0IHBlbGxlbnRlc3F1ZSBsYWN1cy4gU2VkIGFjIGxlY3R1cyBxdWlzIHRlbGx1c1xuICAgICAgICBldWlzbW9kIHBoYXJldHJhLiBWaXZhbXVzIHByZXRpdW0gZ3JhdmlkYSB1cm5hIGEgcG9zdWVyZS5cbiAgICAgIDwvcD5cblxuICAgICAgPHBcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBtYXhXaWR0aDogNjUwLFxuICAgICAgICAgIGZvbnRTaXplOiBcIjEuMDVyZW1cIixcbiAgICAgICAgICBtYXJnaW46IFwiMjBweCAwcHggMjBweCAwcHhcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgTnVuYyBmcmluZ2lsbGEgbGVvIHZlbCBsaWd1bGEgcG9ydHRpdG9yIHBvc3VlcmUgaW4gZWdldCBwdXJ1cy4gTmFtIHZpdGFlXG4gICAgICAgIGJpYmVuZHVtIHNlbS4gU3VzcGVuZGlzc2UgdGVtcHVzLCBsaWJlcm8gc2VkIHNvZGFsZXMgY3Vyc3VzLCBxdWFtIHF1YW1cbiAgICAgICAgZXVpc21vZCBtYXNzYSwgYSB2ZXN0aWJ1bHVtIGxhY3VzIGxhY3VzIGFjIGxlby4gUHJvaW4gc2l0IGFtZXQgZXN0IHF1YW0uXG4gICAgICAgIFByb2luIGxpYmVybyBlcm9zLCBpbnRlcmR1bSB1dCBtYXhpbXVzIHV0LCBiaWJlbmR1bSBldSBudWxsYS4gQWVuZWFuXG4gICAgICAgIG51bmMgYXVndWUsIHB1bHZpbmFyIGRpZ25pc3NpbSBzYXBpZW4gaWQsIHRlbXB1cyBsYWNpbmlhIG5lcXVlLiBNYXVyaXNcbiAgICAgICAgZGlnbmlzc2ltLCB1cm5hIG5lYyBibGFuZGl0IHVsbGFtY29ycGVyLCBlbGl0IGFudGUgdGVtcHVzIHR1cnBpcywgbm9uXG4gICAgICAgIGNvbnNlY3RldHVyIG9yY2kgZGlhbSBldSBsb3JlbS4gU2VkIHJ1dHJ1bSwgbGVvIHRpbmNpZHVudCBzYWdpdHRpc1xuICAgICAgICBwaGFyZXRyYSwgcXVhbSBkaWFtIGZlcm1lbnR1bSBsaWJlcm8sIGEgdWxsYW1jb3JwZXIgbWFzc2EgdmVsaXQgbm9uXG4gICAgICAgIGRvbG9yLiBNYWVjZW5hcyBlZ2V0IHBlbGxlbnRlc3F1ZSBsYWN1cy4gU2VkIGFjIGxlY3R1cyBxdWlzIHRlbGx1c1xuICAgICAgICBldWlzbW9kIHBoYXJldHJhLiBWaXZhbXVzIHByZXRpdW0gZ3JhdmlkYSB1cm5hIGEgcG9zdWVyZS5cbiAgICAgIDwvcD5cbiAgICA8L1NpbXBsZUNvbnRlbnRUZW1wbGF0ZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNhbXBsZVBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/and/allships.tsx\n");

/***/ })

})