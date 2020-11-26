webpackHotUpdate_N_E("pages/index",{

/***/ "./constants/styles/Color.tsx":
/*!************************************!*\
  !*** ./constants/styles/Color.tsx ***!
  \************************************/
/*! exports provided: Color, ColorContext_Defaults, useColorContext, ColorContext, Palette */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Color\", function() { return Color; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ColorContext_Defaults\", function() { return ColorContext_Defaults; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useColorContext\", function() { return useColorContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ColorContext\", function() { return ColorContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Palette\", function() { return Palette; });\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  ::-moz-selection { background: \", \"; color: \", \" }\\n  ::selection { background: \", \"; color: \", \" }\\n\\n  :root {\\n    --clrPrimary: \", \";\\n    --clrSecondary: \", \";\\n    --clrBackground: \", \";\\n    --clrForeground: \", \";\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n// Color.js:\n// This is the sitewide palette.\n// Imports\n// _______________________________________________________\n\n // Begin Component\n// _______________________________________________________\n\nvar Color = {\n  // Color Variables\n  varPrimary: \"var(--clrPrimary)\",\n  varSecondary: \"var(--clrSecondary)\",\n  varBackground: \"var(--clrBackground)\",\n  varForeground: \"var(--clrForeground)\",\n  // Core Colors\n  Primary: \"#111b24\",\n  Secondary: \"#5D6376\",\n  Background: \"#ff988c\",\n  Text: \"#111b24\",\n  // Grayscale Palette\n  Black: \"#000000\",\n  Nightsky: \"#151313\",\n  Warmsky: \"#34281D\",\n  Gravel: \"#4E4135\",\n  Slate: \"#928070\",\n  Tan: \"#C4AC97\",\n  Gray: \"#DAC9BA\",\n  Blush: \"#F6E7D9\",\n  Cream: \"#FFF6EE\",\n  White: \"#FFFFFF\",\n  // Warm Palette\n  Clay: \"#A33609\",\n  Nova: \"#E24809\",\n  Sunlight: \"#E9A200\",\n  Sunset: \"#ED9158\",\n  // Cool Palette\n  Galaxy: \"#111b24\",\n  Deepsea: \"#002F9E\",\n  Ocean: \"#269FE2\",\n  Sky: \"#7AC0E6\",\n  Dino: \"#23023B\",\n  Eggplant: \"#520589\",\n  Lilac: \"#874BB4\",\n  // Feedback Palette\n  Warning: \"#FC6376\",\n  Success: \"#40DA33\"\n};\n/**\n *\n * @name ColorContext_Defaults\n * @description Defaults for our theming context\n *\n */\n\nvar ColorContext_Defaults = {\n  primary: Color.Primary,\n  secondary: Color.Secondary,\n  foreground: Color.Text,\n  background: Color.Background,\n  setTheme: function setTheme() {}\n};\n/**\n *\n * @name useColorContext\n * @description Our hook to update our color context\n * @see https://medium.com/@0n3z3r0n3/react-usecontext-how-to-update-context-from-child-component-8fa2894eee3d\n *\n */\n\nvar useColorContext = function useColorContext() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(ColorContext_Defaults),\n      _React$useState2 = Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState, 2),\n      colorTheme = _React$useState2[0],\n      setColorTheme = _React$useState2[1];\n\n  var setTheme = react__WEBPACK_IMPORTED_MODULE_3___default.a.useCallback(function (currentColorTheme) {\n    setColorTheme(currentColorTheme);\n  }, []);\n  return _objectSpread(_objectSpread({}, colorTheme), {}, {\n    setTheme: setTheme\n  });\n};\n/**\n *\n * @name ColorContext\n * @description Our context to provide color themes\n * @see https://medium.com/@0n3z3r0n3/react-usecontext-how-to-update-context-from-child-component-8fa2894eee3d\n *\n */\n\n_s(useColorContext, \"uYkrI/Unkj9lwnWCIwD9GSto0f8=\");\n\nvar ColorContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createContext(ColorContext_Defaults);\n/**\n *\n * @name Palette\n * @description Global CSS Variables for palette\n *\n */\n\n_c = ColorContext;\nvar Palette = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__[\"createGlobalStyle\"])(_templateObject(), Color.Primary, Color.Cream, Color.Primary, Color.Cream, Color.Primary, Color.Secondary, Color.Background, Color.Text); //////////////////////////////////////////////////////////////////////\n// End Component\n\nvar _c;\n\n$RefreshReg$(_c, \"ColorContext\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uc3RhbnRzL3N0eWxlcy9Db2xvci50c3g/ZmQ4MiJdLCJuYW1lcyI6WyJDb2xvciIsInZhclByaW1hcnkiLCJ2YXJTZWNvbmRhcnkiLCJ2YXJCYWNrZ3JvdW5kIiwidmFyRm9yZWdyb3VuZCIsIlByaW1hcnkiLCJTZWNvbmRhcnkiLCJCYWNrZ3JvdW5kIiwiVGV4dCIsIkJsYWNrIiwiTmlnaHRza3kiLCJXYXJtc2t5IiwiR3JhdmVsIiwiU2xhdGUiLCJUYW4iLCJHcmF5IiwiQmx1c2giLCJDcmVhbSIsIldoaXRlIiwiQ2xheSIsIk5vdmEiLCJTdW5saWdodCIsIlN1bnNldCIsIkdhbGF4eSIsIkRlZXBzZWEiLCJPY2VhbiIsIlNreSIsIkRpbm8iLCJFZ2dwbGFudCIsIkxpbGFjIiwiV2FybmluZyIsIlN1Y2Nlc3MiLCJDb2xvckNvbnRleHRfRGVmYXVsdHMiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwiZm9yZWdyb3VuZCIsImJhY2tncm91bmQiLCJzZXRUaGVtZSIsInVzZUNvbG9yQ29udGV4dCIsIlJlYWN0IiwidXNlU3RhdGUiLCJjb2xvclRoZW1lIiwic2V0Q29sb3JUaGVtZSIsInVzZUNhbGxiYWNrIiwiY3VycmVudENvbG9yVGhlbWUiLCJDb2xvckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiUGFsZXR0ZSIsImNyZWF0ZUdsb2JhbFN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Q0FHQTtBQUNBOztBQWlCTyxJQUFNQSxLQUFLLEdBQUc7QUFDbkI7QUFDQUMsWUFBVSxFQUFFLG1CQUZPO0FBR25CQyxjQUFZLEVBQUUscUJBSEs7QUFJbkJDLGVBQWEsRUFBRSxzQkFKSTtBQUtuQkMsZUFBYSxFQUFFLHNCQUxJO0FBT25CO0FBQ0FDLFNBQU8sRUFBRSxTQVJVO0FBU25CQyxXQUFTLEVBQUUsU0FUUTtBQVVuQkMsWUFBVSxFQUFFLFNBVk87QUFXbkJDLE1BQUksRUFBRSxTQVhhO0FBYW5CO0FBQ0FDLE9BQUssRUFBRSxTQWRZO0FBZW5CQyxVQUFRLEVBQUUsU0FmUztBQWdCbkJDLFNBQU8sRUFBRSxTQWhCVTtBQWlCbkJDLFFBQU0sRUFBRSxTQWpCVztBQWtCbkJDLE9BQUssRUFBRSxTQWxCWTtBQW1CbkJDLEtBQUcsRUFBRSxTQW5CYztBQW9CbkJDLE1BQUksRUFBRSxTQXBCYTtBQXFCbkJDLE9BQUssRUFBRSxTQXJCWTtBQXNCbkJDLE9BQUssRUFBRSxTQXRCWTtBQXVCbkJDLE9BQUssRUFBRSxTQXZCWTtBQXlCbkI7QUFDQUMsTUFBSSxFQUFFLFNBMUJhO0FBMkJuQkMsTUFBSSxFQUFFLFNBM0JhO0FBNEJuQkMsVUFBUSxFQUFFLFNBNUJTO0FBNkJuQkMsUUFBTSxFQUFFLFNBN0JXO0FBK0JuQjtBQUNBQyxRQUFNLEVBQUUsU0FoQ1c7QUFpQ25CQyxTQUFPLEVBQUUsU0FqQ1U7QUFrQ25CQyxPQUFLLEVBQUUsU0FsQ1k7QUFtQ25CQyxLQUFHLEVBQUUsU0FuQ2M7QUFvQ25CQyxNQUFJLEVBQUUsU0FwQ2E7QUFxQ25CQyxVQUFRLEVBQUUsU0FyQ1M7QUFzQ25CQyxPQUFLLEVBQUUsU0F0Q1k7QUF3Q25CO0FBQ0FDLFNBQU8sRUFBRSxTQXpDVTtBQTBDbkJDLFNBQU8sRUFBRTtBQTFDVSxDQUFkO0FBNkNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQyxxQkFBc0MsR0FBRztBQUNwREMsU0FBTyxFQUFFakMsS0FBSyxDQUFDSyxPQURxQztBQUVwRDZCLFdBQVMsRUFBRWxDLEtBQUssQ0FBQ00sU0FGbUM7QUFHcEQ2QixZQUFVLEVBQUVuQyxLQUFLLENBQUNRLElBSGtDO0FBSXBENEIsWUFBVSxFQUFFcEMsS0FBSyxDQUFDTyxVQUprQztBQUtwRDhCLFVBQVEsRUFBRSxvQkFBTSxDQUFFO0FBTGtDLENBQS9DO0FBUVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUF1QjtBQUFBOztBQUFBLHdCQUNoQkMsNENBQUssQ0FBQ0MsUUFBTixDQUFlUixxQkFBZixDQURnQjtBQUFBO0FBQUEsTUFDN0NTLFVBRDZDO0FBQUEsTUFDakNDLGFBRGlDOztBQUdwRCxNQUFNTCxRQUFRLEdBQUdFLDRDQUFLLENBQUNJLFdBQU4sQ0FDZixVQUFDQyxpQkFBRCxFQUE4QztBQUM1Q0YsaUJBQWEsQ0FBQ0UsaUJBQUQsQ0FBYjtBQUNELEdBSGMsRUFJZixFQUplLENBQWpCO0FBT0EseUNBQ0tILFVBREw7QUFFRUosWUFBUSxFQUFSQTtBQUZGO0FBSUQsQ0FkTTtBQWdCUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7R0F0QmFDLGU7O0FBdUJOLElBQU1PLFlBQVksZ0JBQUdOLDRDQUFLLENBQUNPLGFBQU4sQ0FDMUJkLHFCQUQwQixDQUFyQjtBQUlQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7S0FUYWEsWTtBQVVOLElBQU1FLE9BQU8sR0FBR0MsMkVBQUgsb0JBQ2VoRCxLQUFLLENBQUNLLE9BRHJCLEVBQ3dDTCxLQUFLLENBQUNpQixLQUQ5QyxFQUVVakIsS0FBSyxDQUFDSyxPQUZoQixFQUVtQ0wsS0FBSyxDQUFDaUIsS0FGekMsRUFLQWpCLEtBQUssQ0FBQ0ssT0FMTixFQU1FTCxLQUFLLENBQUNNLFNBTlIsRUFPR04sS0FBSyxDQUFDTyxVQVBULEVBUUdQLEtBQUssQ0FBQ1EsSUFSVCxDQUFiLEMsQ0FZUDtBQUNBIiwiZmlsZSI6Ii4vY29uc3RhbnRzL3N0eWxlcy9Db2xvci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb2xvci5qczpcbi8vIFRoaXMgaXMgdGhlIHNpdGV3aWRlIHBhbGV0dGUuXG5cbi8vIEltcG9ydHNcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuLy8gQmVnaW4gQ29tcG9uZW50XG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG5cbmV4cG9ydCB0eXBlIExYTFRfQ29sb3JUaGVtZSA9IHtcbiAgbmFtZT86XG4gICAgfCBcImRlZmF1bHRcIlxuICAgIHwgXCJ3aGl0ZVwiXG4gICAgfCBcImdvbGRlbnJvZFwiXG4gICAgfCBcImNhZGV0Ymx1ZVwiXG4gICAgfCBcIm9yYW5nZXJlZFwiXG4gICAgfCBcImdhbGF4eVwiO1xuICBwcmltYXJ5OiBzdHJpbmc7XG4gIHNlY29uZGFyeTogc3RyaW5nO1xuICBiYWNrZ3JvdW5kOiBzdHJpbmc7XG4gIGZvcmVncm91bmQ6IHN0cmluZztcbiAgc2V0VGhlbWU/OiAodGhlbWU6IExYTFRfQ29sb3JUaGVtZSkgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCBjb25zdCBDb2xvciA9IHtcbiAgLy8gQ29sb3IgVmFyaWFibGVzXG4gIHZhclByaW1hcnk6IFwidmFyKC0tY2xyUHJpbWFyeSlcIixcbiAgdmFyU2Vjb25kYXJ5OiBcInZhcigtLWNsclNlY29uZGFyeSlcIixcbiAgdmFyQmFja2dyb3VuZDogXCJ2YXIoLS1jbHJCYWNrZ3JvdW5kKVwiLFxuICB2YXJGb3JlZ3JvdW5kOiBcInZhcigtLWNsckZvcmVncm91bmQpXCIsXG5cbiAgLy8gQ29yZSBDb2xvcnNcbiAgUHJpbWFyeTogXCIjMTExYjI0XCIsXG4gIFNlY29uZGFyeTogXCIjNUQ2Mzc2XCIsXG4gIEJhY2tncm91bmQ6IFwiI2ZmOTg4Y1wiLFxuICBUZXh0OiBcIiMxMTFiMjRcIixcblxuICAvLyBHcmF5c2NhbGUgUGFsZXR0ZVxuICBCbGFjazogXCIjMDAwMDAwXCIsXG4gIE5pZ2h0c2t5OiBcIiMxNTEzMTNcIixcbiAgV2FybXNreTogXCIjMzQyODFEXCIsXG4gIEdyYXZlbDogXCIjNEU0MTM1XCIsXG4gIFNsYXRlOiBcIiM5MjgwNzBcIixcbiAgVGFuOiBcIiNDNEFDOTdcIixcbiAgR3JheTogXCIjREFDOUJBXCIsXG4gIEJsdXNoOiBcIiNGNkU3RDlcIixcbiAgQ3JlYW06IFwiI0ZGRjZFRVwiLFxuICBXaGl0ZTogXCIjRkZGRkZGXCIsXG5cbiAgLy8gV2FybSBQYWxldHRlXG4gIENsYXk6IFwiI0EzMzYwOVwiLFxuICBOb3ZhOiBcIiNFMjQ4MDlcIixcbiAgU3VubGlnaHQ6IFwiI0U5QTIwMFwiLFxuICBTdW5zZXQ6IFwiI0VEOTE1OFwiLFxuXG4gIC8vIENvb2wgUGFsZXR0ZVxuICBHYWxheHk6IFwiIzExMWIyNFwiLFxuICBEZWVwc2VhOiBcIiMwMDJGOUVcIixcbiAgT2NlYW46IFwiIzI2OUZFMlwiLFxuICBTa3k6IFwiIzdBQzBFNlwiLFxuICBEaW5vOiBcIiMyMzAyM0JcIixcbiAgRWdncGxhbnQ6IFwiIzUyMDU4OVwiLFxuICBMaWxhYzogXCIjODc0QkI0XCIsXG5cbiAgLy8gRmVlZGJhY2sgUGFsZXR0ZVxuICBXYXJuaW5nOiBcIiNGQzYzNzZcIixcbiAgU3VjY2VzczogXCIjNDBEQTMzXCIsXG59O1xuXG4vKipcbiAqXG4gKiBAbmFtZSBDb2xvckNvbnRleHRfRGVmYXVsdHNcbiAqIEBkZXNjcmlwdGlvbiBEZWZhdWx0cyBmb3Igb3VyIHRoZW1pbmcgY29udGV4dFxuICpcbiAqL1xuZXhwb3J0IGNvbnN0IENvbG9yQ29udGV4dF9EZWZhdWx0czogTFhMVF9Db2xvclRoZW1lID0ge1xuICBwcmltYXJ5OiBDb2xvci5QcmltYXJ5LFxuICBzZWNvbmRhcnk6IENvbG9yLlNlY29uZGFyeSxcbiAgZm9yZWdyb3VuZDogQ29sb3IuVGV4dCxcbiAgYmFja2dyb3VuZDogQ29sb3IuQmFja2dyb3VuZCxcbiAgc2V0VGhlbWU6ICgpID0+IHt9LFxufTtcblxuLyoqXG4gKlxuICogQG5hbWUgdXNlQ29sb3JDb250ZXh0XG4gKiBAZGVzY3JpcHRpb24gT3VyIGhvb2sgdG8gdXBkYXRlIG91ciBjb2xvciBjb250ZXh0XG4gKiBAc2VlIGh0dHBzOi8vbWVkaXVtLmNvbS9AMG4zejNyMG4zL3JlYWN0LXVzZWNvbnRleHQtaG93LXRvLXVwZGF0ZS1jb250ZXh0LWZyb20tY2hpbGQtY29tcG9uZW50LThmYTI4OTRlZWUzZFxuICpcbiAqL1xuZXhwb3J0IGNvbnN0IHVzZUNvbG9yQ29udGV4dCA9ICgpOiBMWExUX0NvbG9yVGhlbWUgPT4ge1xuICBjb25zdCBbY29sb3JUaGVtZSwgc2V0Q29sb3JUaGVtZV0gPSBSZWFjdC51c2VTdGF0ZShDb2xvckNvbnRleHRfRGVmYXVsdHMpO1xuXG4gIGNvbnN0IHNldFRoZW1lID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGN1cnJlbnRDb2xvclRoZW1lOiBMWExUX0NvbG9yVGhlbWUpOiB2b2lkID0+IHtcbiAgICAgIHNldENvbG9yVGhlbWUoY3VycmVudENvbG9yVGhlbWUpO1xuICAgIH0sXG4gICAgW11cbiAgKTtcblxuICByZXR1cm4ge1xuICAgIC4uLmNvbG9yVGhlbWUsXG4gICAgc2V0VGhlbWUsXG4gIH07XG59O1xuXG4vKipcbiAqXG4gKiBAbmFtZSBDb2xvckNvbnRleHRcbiAqIEBkZXNjcmlwdGlvbiBPdXIgY29udGV4dCB0byBwcm92aWRlIGNvbG9yIHRoZW1lc1xuICogQHNlZSBodHRwczovL21lZGl1bS5jb20vQDBuM3ozcjBuMy9yZWFjdC11c2Vjb250ZXh0LWhvdy10by11cGRhdGUtY29udGV4dC1mcm9tLWNoaWxkLWNvbXBvbmVudC04ZmEyODk0ZWVlM2RcbiAqXG4gKi9cbmV4cG9ydCBjb25zdCBDb2xvckNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PExYTFRfQ29sb3JUaGVtZT4oXG4gIENvbG9yQ29udGV4dF9EZWZhdWx0c1xuKTtcblxuLyoqXG4gKlxuICogQG5hbWUgUGFsZXR0ZVxuICogQGRlc2NyaXB0aW9uIEdsb2JhbCBDU1MgVmFyaWFibGVzIGZvciBwYWxldHRlXG4gKlxuICovXG5leHBvcnQgY29uc3QgUGFsZXR0ZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICA6Oi1tb3otc2VsZWN0aW9uIHsgYmFja2dyb3VuZDogJHtDb2xvci5QcmltYXJ5fTsgY29sb3I6ICR7Q29sb3IuQ3JlYW19IH1cbiAgOjpzZWxlY3Rpb24geyBiYWNrZ3JvdW5kOiAke0NvbG9yLlByaW1hcnl9OyBjb2xvcjogJHtDb2xvci5DcmVhbX0gfVxuXG4gIDpyb290IHtcbiAgICAtLWNsclByaW1hcnk6ICR7Q29sb3IuUHJpbWFyeX07XG4gICAgLS1jbHJTZWNvbmRhcnk6ICR7Q29sb3IuU2Vjb25kYXJ5fTtcbiAgICAtLWNsckJhY2tncm91bmQ6ICR7Q29sb3IuQmFja2dyb3VuZH07XG4gICAgLS1jbHJGb3JlZ3JvdW5kOiAke0NvbG9yLlRleHR9O1xuICB9XG5gO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBFbmQgQ29tcG9uZW50XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./constants/styles/Color.tsx\n");

/***/ })

})