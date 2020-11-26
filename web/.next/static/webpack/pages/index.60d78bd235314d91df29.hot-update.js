webpackHotUpdate_N_E("pages/index",{

/***/ "./constants/styles/Color.tsx":
/*!************************************!*\
  !*** ./constants/styles/Color.tsx ***!
  \************************************/
/*! exports provided: Color, ColorContext_Defaults, useColorContext, ColorContext, Palette */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Color\", function() { return Color; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ColorContext_Defaults\", function() { return ColorContext_Defaults; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useColorContext\", function() { return useColorContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ColorContext\", function() { return ColorContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Palette\", function() { return Palette; });\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  ::-moz-selection { background: \", \"; color: \", \" }\\n  ::selection { background: \", \"; color: \", \" }\\n\\n  :root {\\n    --clrPrimary: \", \";\\n    --clrSecondary: \", \";\\n    --clrBackground: \", \";\\n    --clrForeground: \", \";\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n// Color.js:\n// This is the sitewide palette.\n// Imports\n// _______________________________________________________\n\n // Begin Component\n// _______________________________________________________\n\nvar Color = {\n  // Color Variables\n  varPrimary: \"var(--clrPrimary)\",\n  varSecondary: \"var(--clrSecondary)\",\n  varBackground: \"var(--clrBackground)\",\n  varForeground: \"var(--clrForeground)\",\n  // Core Colors\n  Primary: \"#111b24\",\n  Secondary: \"#5D6376\",\n  Background: \"#ff988c\",\n  Text: \"#111b24\",\n  // Grayscale Palette\n  Black: \"#000000\",\n  Nightsky: \"#151313\",\n  Warmsky: \"#34281D\",\n  Gravel: \"#4E4135\",\n  Slate: \"#928070\",\n  Tan: \"#C4AC97\",\n  Gray: \"#DAC9BA\",\n  Blush: \"#F6E7D9\",\n  Cream: \"#FFF6EE\",\n  White: \"#FFFFFF\",\n  // Warm Palette\n  Clay: \"#A33609\",\n  Nova: \"#E24809\",\n  Sunlight: \"#E9A200\",\n  Sunset: \"#ED9158\",\n  // Cool Palette\n  Galaxy: \"#111b24\",\n  Deepsea: \"#002F9E\",\n  Ocean: \"#269FE2\",\n  Sky: \"#7AC0E6\",\n  Dino: \"#23023B\",\n  Eggplant: \"#520589\",\n  Lilac: \"#874BB4\",\n  // Feedback Palette\n  Warning: \"#FC6376\",\n  Success: \"#40DA33\"\n};\n/**\n *\n * @name ColorContext_Defaults\n * @description Defaults for our theming context\n *\n */\n\nvar ColorContext_Defaults = {\n  primary: Color.Primary,\n  secondary: Color.Secondary,\n  foreground: Color.Cream,\n  background: Color.Background,\n  setTheme: function setTheme() {}\n};\n/**\n *\n * @name useColorContext\n * @description Our hook to update our color context\n * @see https://medium.com/@0n3z3r0n3/react-usecontext-how-to-update-context-from-child-component-8fa2894eee3d\n *\n */\n\nvar useColorContext = function useColorContext() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(ColorContext_Defaults),\n      _React$useState2 = Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState, 2),\n      colorTheme = _React$useState2[0],\n      setColorTheme = _React$useState2[1];\n\n  var setTheme = react__WEBPACK_IMPORTED_MODULE_3___default.a.useCallback(function (currentColorTheme) {\n    setColorTheme(currentColorTheme);\n  }, []);\n  return _objectSpread(_objectSpread({}, colorTheme), {}, {\n    setTheme: setTheme\n  });\n};\n/**\n *\n * @name ColorContext\n * @description Our context to provide color themes\n * @see https://medium.com/@0n3z3r0n3/react-usecontext-how-to-update-context-from-child-component-8fa2894eee3d\n *\n */\n\n_s(useColorContext, \"uYkrI/Unkj9lwnWCIwD9GSto0f8=\");\n\nvar ColorContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createContext(ColorContext_Defaults);\n/**\n *\n * @name Palette\n * @description Global CSS Variables for palette\n *\n */\n\n_c = ColorContext;\nvar Palette = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__[\"createGlobalStyle\"])(_templateObject(), Color.Primary, Color.Cream, Color.Primary, Color.Cream, Color.Cream, Color.Secondary, Color.Background, Color.Cream); //////////////////////////////////////////////////////////////////////\n// End Component\n\nvar _c;\n\n$RefreshReg$(_c, \"ColorContext\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uc3RhbnRzL3N0eWxlcy9Db2xvci50c3g/ZmQ4MiJdLCJuYW1lcyI6WyJDb2xvciIsInZhclByaW1hcnkiLCJ2YXJTZWNvbmRhcnkiLCJ2YXJCYWNrZ3JvdW5kIiwidmFyRm9yZWdyb3VuZCIsIlByaW1hcnkiLCJTZWNvbmRhcnkiLCJCYWNrZ3JvdW5kIiwiVGV4dCIsIkJsYWNrIiwiTmlnaHRza3kiLCJXYXJtc2t5IiwiR3JhdmVsIiwiU2xhdGUiLCJUYW4iLCJHcmF5IiwiQmx1c2giLCJDcmVhbSIsIldoaXRlIiwiQ2xheSIsIk5vdmEiLCJTdW5saWdodCIsIlN1bnNldCIsIkdhbGF4eSIsIkRlZXBzZWEiLCJPY2VhbiIsIlNreSIsIkRpbm8iLCJFZ2dwbGFudCIsIkxpbGFjIiwiV2FybmluZyIsIlN1Y2Nlc3MiLCJDb2xvckNvbnRleHRfRGVmYXVsdHMiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwiZm9yZWdyb3VuZCIsImJhY2tncm91bmQiLCJzZXRUaGVtZSIsInVzZUNvbG9yQ29udGV4dCIsIlJlYWN0IiwidXNlU3RhdGUiLCJjb2xvclRoZW1lIiwic2V0Q29sb3JUaGVtZSIsInVzZUNhbGxiYWNrIiwiY3VycmVudENvbG9yVGhlbWUiLCJDb2xvckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiUGFsZXR0ZSIsImNyZWF0ZUdsb2JhbFN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Q0FHQTtBQUNBOztBQWlCTyxJQUFNQSxLQUFLLEdBQUc7QUFDbkI7QUFDQUMsWUFBVSxFQUFFLG1CQUZPO0FBR25CQyxjQUFZLEVBQUUscUJBSEs7QUFJbkJDLGVBQWEsRUFBRSxzQkFKSTtBQUtuQkMsZUFBYSxFQUFFLHNCQUxJO0FBT25CO0FBQ0FDLFNBQU8sRUFBRSxTQVJVO0FBU25CQyxXQUFTLEVBQUUsU0FUUTtBQVVuQkMsWUFBVSxFQUFFLFNBVk87QUFXbkJDLE1BQUksRUFBRSxTQVhhO0FBYW5CO0FBQ0FDLE9BQUssRUFBRSxTQWRZO0FBZW5CQyxVQUFRLEVBQUUsU0FmUztBQWdCbkJDLFNBQU8sRUFBRSxTQWhCVTtBQWlCbkJDLFFBQU0sRUFBRSxTQWpCVztBQWtCbkJDLE9BQUssRUFBRSxTQWxCWTtBQW1CbkJDLEtBQUcsRUFBRSxTQW5CYztBQW9CbkJDLE1BQUksRUFBRSxTQXBCYTtBQXFCbkJDLE9BQUssRUFBRSxTQXJCWTtBQXNCbkJDLE9BQUssRUFBRSxTQXRCWTtBQXVCbkJDLE9BQUssRUFBRSxTQXZCWTtBQXlCbkI7QUFDQUMsTUFBSSxFQUFFLFNBMUJhO0FBMkJuQkMsTUFBSSxFQUFFLFNBM0JhO0FBNEJuQkMsVUFBUSxFQUFFLFNBNUJTO0FBNkJuQkMsUUFBTSxFQUFFLFNBN0JXO0FBK0JuQjtBQUNBQyxRQUFNLEVBQUUsU0FoQ1c7QUFpQ25CQyxTQUFPLEVBQUUsU0FqQ1U7QUFrQ25CQyxPQUFLLEVBQUUsU0FsQ1k7QUFtQ25CQyxLQUFHLEVBQUUsU0FuQ2M7QUFvQ25CQyxNQUFJLEVBQUUsU0FwQ2E7QUFxQ25CQyxVQUFRLEVBQUUsU0FyQ1M7QUFzQ25CQyxPQUFLLEVBQUUsU0F0Q1k7QUF3Q25CO0FBQ0FDLFNBQU8sRUFBRSxTQXpDVTtBQTBDbkJDLFNBQU8sRUFBRTtBQTFDVSxDQUFkO0FBNkNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQyxxQkFBc0MsR0FBRztBQUNwREMsU0FBTyxFQUFFakMsS0FBSyxDQUFDSyxPQURxQztBQUVwRDZCLFdBQVMsRUFBRWxDLEtBQUssQ0FBQ00sU0FGbUM7QUFHcEQ2QixZQUFVLEVBQUVuQyxLQUFLLENBQUNpQixLQUhrQztBQUlwRG1CLFlBQVUsRUFBRXBDLEtBQUssQ0FBQ08sVUFKa0M7QUFLcEQ4QixVQUFRLEVBQUUsb0JBQU0sQ0FBRTtBQUxrQyxDQUEvQztBQVFQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBdUI7QUFBQTs7QUFBQSx3QkFDaEJDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZVIscUJBQWYsQ0FEZ0I7QUFBQTtBQUFBLE1BQzdDUyxVQUQ2QztBQUFBLE1BQ2pDQyxhQURpQzs7QUFHcEQsTUFBTUwsUUFBUSxHQUFHRSw0Q0FBSyxDQUFDSSxXQUFOLENBQ2YsVUFBQ0MsaUJBQUQsRUFBOEM7QUFDNUNGLGlCQUFhLENBQUNFLGlCQUFELENBQWI7QUFDRCxHQUhjLEVBSWYsRUFKZSxDQUFqQjtBQU9BLHlDQUNLSCxVQURMO0FBRUVKLFlBQVEsRUFBUkE7QUFGRjtBQUlELENBZE07QUFnQlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0dBdEJhQyxlOztBQXVCTixJQUFNTyxZQUFZLGdCQUFHTiw0Q0FBSyxDQUFDTyxhQUFOLENBQzFCZCxxQkFEMEIsQ0FBckI7QUFJUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0tBVGFhLFk7QUFVTixJQUFNRSxPQUFPLEdBQUdDLDJFQUFILG9CQUNlaEQsS0FBSyxDQUFDSyxPQURyQixFQUN3Q0wsS0FBSyxDQUFDaUIsS0FEOUMsRUFFVWpCLEtBQUssQ0FBQ0ssT0FGaEIsRUFFbUNMLEtBQUssQ0FBQ2lCLEtBRnpDLEVBS0FqQixLQUFLLENBQUNpQixLQUxOLEVBTUVqQixLQUFLLENBQUNNLFNBTlIsRUFPR04sS0FBSyxDQUFDTyxVQVBULEVBUUdQLEtBQUssQ0FBQ2lCLEtBUlQsQ0FBYixDLENBWVA7QUFDQSIsImZpbGUiOiIuL2NvbnN0YW50cy9zdHlsZXMvQ29sb3IudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29sb3IuanM6XG4vLyBUaGlzIGlzIHRoZSBzaXRld2lkZSBwYWxldHRlLlxuXG4vLyBJbXBvcnRzXG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbi8vIEJlZ2luIENvbXBvbmVudFxuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuXG5leHBvcnQgdHlwZSBMWExUX0NvbG9yVGhlbWUgPSB7XG4gIG5hbWU/OlxuICAgIHwgXCJkZWZhdWx0XCJcbiAgICB8IFwid2hpdGVcIlxuICAgIHwgXCJnb2xkZW5yb2RcIlxuICAgIHwgXCJjYWRldGJsdWVcIlxuICAgIHwgXCJvcmFuZ2VyZWRcIlxuICAgIHwgXCJnYWxheHlcIjtcbiAgcHJpbWFyeTogc3RyaW5nO1xuICBzZWNvbmRhcnk6IHN0cmluZztcbiAgYmFja2dyb3VuZDogc3RyaW5nO1xuICBmb3JlZ3JvdW5kOiBzdHJpbmc7XG4gIHNldFRoZW1lPzogKHRoZW1lOiBMWExUX0NvbG9yVGhlbWUpID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgY29uc3QgQ29sb3IgPSB7XG4gIC8vIENvbG9yIFZhcmlhYmxlc1xuICB2YXJQcmltYXJ5OiBcInZhcigtLWNsclByaW1hcnkpXCIsXG4gIHZhclNlY29uZGFyeTogXCJ2YXIoLS1jbHJTZWNvbmRhcnkpXCIsXG4gIHZhckJhY2tncm91bmQ6IFwidmFyKC0tY2xyQmFja2dyb3VuZClcIixcbiAgdmFyRm9yZWdyb3VuZDogXCJ2YXIoLS1jbHJGb3JlZ3JvdW5kKVwiLFxuXG4gIC8vIENvcmUgQ29sb3JzXG4gIFByaW1hcnk6IFwiIzExMWIyNFwiLFxuICBTZWNvbmRhcnk6IFwiIzVENjM3NlwiLFxuICBCYWNrZ3JvdW5kOiBcIiNmZjk4OGNcIixcbiAgVGV4dDogXCIjMTExYjI0XCIsXG5cbiAgLy8gR3JheXNjYWxlIFBhbGV0dGVcbiAgQmxhY2s6IFwiIzAwMDAwMFwiLFxuICBOaWdodHNreTogXCIjMTUxMzEzXCIsXG4gIFdhcm1za3k6IFwiIzM0MjgxRFwiLFxuICBHcmF2ZWw6IFwiIzRFNDEzNVwiLFxuICBTbGF0ZTogXCIjOTI4MDcwXCIsXG4gIFRhbjogXCIjQzRBQzk3XCIsXG4gIEdyYXk6IFwiI0RBQzlCQVwiLFxuICBCbHVzaDogXCIjRjZFN0Q5XCIsXG4gIENyZWFtOiBcIiNGRkY2RUVcIixcbiAgV2hpdGU6IFwiI0ZGRkZGRlwiLFxuXG4gIC8vIFdhcm0gUGFsZXR0ZVxuICBDbGF5OiBcIiNBMzM2MDlcIixcbiAgTm92YTogXCIjRTI0ODA5XCIsXG4gIFN1bmxpZ2h0OiBcIiNFOUEyMDBcIixcbiAgU3Vuc2V0OiBcIiNFRDkxNThcIixcblxuICAvLyBDb29sIFBhbGV0dGVcbiAgR2FsYXh5OiBcIiMxMTFiMjRcIixcbiAgRGVlcHNlYTogXCIjMDAyRjlFXCIsXG4gIE9jZWFuOiBcIiMyNjlGRTJcIixcbiAgU2t5OiBcIiM3QUMwRTZcIixcbiAgRGlubzogXCIjMjMwMjNCXCIsXG4gIEVnZ3BsYW50OiBcIiM1MjA1ODlcIixcbiAgTGlsYWM6IFwiIzg3NEJCNFwiLFxuXG4gIC8vIEZlZWRiYWNrIFBhbGV0dGVcbiAgV2FybmluZzogXCIjRkM2Mzc2XCIsXG4gIFN1Y2Nlc3M6IFwiIzQwREEzM1wiLFxufTtcblxuLyoqXG4gKlxuICogQG5hbWUgQ29sb3JDb250ZXh0X0RlZmF1bHRzXG4gKiBAZGVzY3JpcHRpb24gRGVmYXVsdHMgZm9yIG91ciB0aGVtaW5nIGNvbnRleHRcbiAqXG4gKi9cbmV4cG9ydCBjb25zdCBDb2xvckNvbnRleHRfRGVmYXVsdHM6IExYTFRfQ29sb3JUaGVtZSA9IHtcbiAgcHJpbWFyeTogQ29sb3IuUHJpbWFyeSxcbiAgc2Vjb25kYXJ5OiBDb2xvci5TZWNvbmRhcnksXG4gIGZvcmVncm91bmQ6IENvbG9yLkNyZWFtLFxuICBiYWNrZ3JvdW5kOiBDb2xvci5CYWNrZ3JvdW5kLFxuICBzZXRUaGVtZTogKCkgPT4ge30sXG59O1xuXG4vKipcbiAqXG4gKiBAbmFtZSB1c2VDb2xvckNvbnRleHRcbiAqIEBkZXNjcmlwdGlvbiBPdXIgaG9vayB0byB1cGRhdGUgb3VyIGNvbG9yIGNvbnRleHRcbiAqIEBzZWUgaHR0cHM6Ly9tZWRpdW0uY29tL0AwbjN6M3IwbjMvcmVhY3QtdXNlY29udGV4dC1ob3ctdG8tdXBkYXRlLWNvbnRleHQtZnJvbS1jaGlsZC1jb21wb25lbnQtOGZhMjg5NGVlZTNkXG4gKlxuICovXG5leHBvcnQgY29uc3QgdXNlQ29sb3JDb250ZXh0ID0gKCk6IExYTFRfQ29sb3JUaGVtZSA9PiB7XG4gIGNvbnN0IFtjb2xvclRoZW1lLCBzZXRDb2xvclRoZW1lXSA9IFJlYWN0LnVzZVN0YXRlKENvbG9yQ29udGV4dF9EZWZhdWx0cyk7XG5cbiAgY29uc3Qgc2V0VGhlbWUgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoY3VycmVudENvbG9yVGhlbWU6IExYTFRfQ29sb3JUaGVtZSk6IHZvaWQgPT4ge1xuICAgICAgc2V0Q29sb3JUaGVtZShjdXJyZW50Q29sb3JUaGVtZSk7XG4gICAgfSxcbiAgICBbXVxuICApO1xuXG4gIHJldHVybiB7XG4gICAgLi4uY29sb3JUaGVtZSxcbiAgICBzZXRUaGVtZSxcbiAgfTtcbn07XG5cbi8qKlxuICpcbiAqIEBuYW1lIENvbG9yQ29udGV4dFxuICogQGRlc2NyaXB0aW9uIE91ciBjb250ZXh0IHRvIHByb3ZpZGUgY29sb3IgdGhlbWVzXG4gKiBAc2VlIGh0dHBzOi8vbWVkaXVtLmNvbS9AMG4zejNyMG4zL3JlYWN0LXVzZWNvbnRleHQtaG93LXRvLXVwZGF0ZS1jb250ZXh0LWZyb20tY2hpbGQtY29tcG9uZW50LThmYTI4OTRlZWUzZFxuICpcbiAqL1xuZXhwb3J0IGNvbnN0IENvbG9yQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8TFhMVF9Db2xvclRoZW1lPihcbiAgQ29sb3JDb250ZXh0X0RlZmF1bHRzXG4pO1xuXG4vKipcbiAqXG4gKiBAbmFtZSBQYWxldHRlXG4gKiBAZGVzY3JpcHRpb24gR2xvYmFsIENTUyBWYXJpYWJsZXMgZm9yIHBhbGV0dGVcbiAqXG4gKi9cbmV4cG9ydCBjb25zdCBQYWxldHRlID0gY3JlYXRlR2xvYmFsU3R5bGVgXG4gIDo6LW1vei1zZWxlY3Rpb24geyBiYWNrZ3JvdW5kOiAke0NvbG9yLlByaW1hcnl9OyBjb2xvcjogJHtDb2xvci5DcmVhbX0gfVxuICA6OnNlbGVjdGlvbiB7IGJhY2tncm91bmQ6ICR7Q29sb3IuUHJpbWFyeX07IGNvbG9yOiAke0NvbG9yLkNyZWFtfSB9XG5cbiAgOnJvb3Qge1xuICAgIC0tY2xyUHJpbWFyeTogJHtDb2xvci5DcmVhbX07XG4gICAgLS1jbHJTZWNvbmRhcnk6ICR7Q29sb3IuU2Vjb25kYXJ5fTtcbiAgICAtLWNsckJhY2tncm91bmQ6ICR7Q29sb3IuQmFja2dyb3VuZH07XG4gICAgLS1jbHJGb3JlZ3JvdW5kOiAke0NvbG9yLkNyZWFtfTtcbiAgfVxuYDtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gRW5kIENvbXBvbmVudFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./constants/styles/Color.tsx\n");

/***/ })

})