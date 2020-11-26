webpackHotUpdate_N_E("pages/projects/water-distort-with-canvas",{

/***/ "./sketches/three/water-distort/WaterEffect.ts":
/*!*****************************************************!*\
  !*** ./sketches/three/water-distort/WaterEffect.ts ***!
  \*****************************************************/
/*! exports provided: WaterEffect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WaterEffect\", function() { return WaterEffect; });\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var postprocessing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! postprocessing */ \"./node_modules/postprocessing/build/postprocessing.esm.js\");\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n/**\n *\n * * @see https://tympanus.net/codrops/2019/10/08/creating-a-water-like-distortion-effect-with-three-js/\n *\n */\n// ____________________________________________________________________________________\n\n\nvar WaterEffect = /*#__PURE__*/function (_Effect) {\n  Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(WaterEffect, _Effect);\n\n  var _super = _createSuper(WaterEffect);\n\n  function WaterEffect() {\n    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n      texture: undefined\n    };\n\n    Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, WaterEffect);\n\n    return _super.call(this, \"WaterEffect\", fragment, {\n      uniforms: new Map([[\"uTexture\", new three__WEBPACK_IMPORTED_MODULE_4__[\"Uniform\"](options.texture)]])\n    });\n  }\n\n  return WaterEffect;\n}(postprocessing__WEBPACK_IMPORTED_MODULE_5__[\"Effect\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (WaterEffect);\nvar fragment = \"\\n\\nuniform sampler2D uTexture;\\n\\nvoid mainUv(inout vec2 uv) {\\n        vec4 tex = texture2D(uTexture, uv);\\n        float angle = -((tex.r) * (PI * 2.) - PI) ;\\n        float vx = -(tex.r *2. - 1.);\\n        float vy = -(tex.g *2. - 1.);\\n        float intensity = tex.b;\\n        uv.x += vx * 0.2 * intensity ;\\n        uv.y += vy * 0.2  *intensity;\\n        uv.xy *= 1. - 0.5 * smoothstep( 0., 1., intensity) ;\\n        uv.x +=  0.2 * intensity;\\n        uv.y +=  0.2  *intensity;\\n    }\\n\\n\\n\";\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2tldGNoZXMvdGhyZWUvd2F0ZXItZGlzdG9ydC9XYXRlckVmZmVjdC50cz8xMDNhIl0sIm5hbWVzIjpbIldhdGVyRWZmZWN0Iiwib3B0aW9ucyIsInRleHR1cmUiLCJ1bmRlZmluZWQiLCJmcmFnbWVudCIsInVuaWZvcm1zIiwiTWFwIiwiVEhSRUUiLCJFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVPLElBQU1BLFdBQWI7QUFBQTs7QUFBQTs7QUFDRSx5QkFBMEU7QUFBQSxRQUE5REMsT0FBOEQsdUVBQXhCO0FBQUVDLGFBQU8sRUFBRUM7QUFBWCxLQUF3Qjs7QUFBQTs7QUFBQSw2QkFDbEUsYUFEa0UsRUFDbkRDLFFBRG1ELEVBQ3pDO0FBQzdCQyxjQUFRLEVBQUUsSUFBSUMsR0FBSixDQUFRLENBQUMsQ0FBQyxVQUFELEVBQWEsSUFBSUMsNkNBQUosQ0FBa0JOLE9BQU8sQ0FBQ0MsT0FBMUIsQ0FBYixDQUFELENBQVI7QUFEbUIsS0FEeUM7QUFJekU7O0FBTEg7QUFBQSxFQUFpQ00scURBQWpDO0FBUWVSLDBFQUFmO0FBRUEsSUFBTUksUUFBUSxzZkFBZCIsImZpbGUiOiIuL3NrZXRjaGVzL3RocmVlL3dhdGVyLWRpc3RvcnQvV2F0ZXJFZmZlY3QudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqXG4gKiAqIEBzZWUgaHR0cHM6Ly90eW1wYW51cy5uZXQvY29kcm9wcy8yMDE5LzEwLzA4L2NyZWF0aW5nLWEtd2F0ZXItbGlrZS1kaXN0b3J0aW9uLWVmZmVjdC13aXRoLXRocmVlLWpzL1xuICpcbiAqL1xuXG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cblxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgeyBFZmZlY3QgfSBmcm9tIFwicG9zdHByb2Nlc3NpbmdcIjtcblxuZXhwb3J0IGNsYXNzIFdhdGVyRWZmZWN0IGV4dGVuZHMgRWZmZWN0IHtcbiAgY29uc3RydWN0b3Iob3B0aW9uczogeyB0ZXh0dXJlOiBUSFJFRS5UZXh0dXJlIH0gPSB7IHRleHR1cmU6IHVuZGVmaW5lZCB9KSB7XG4gICAgc3VwZXIoXCJXYXRlckVmZmVjdFwiLCBmcmFnbWVudCwge1xuICAgICAgdW5pZm9ybXM6IG5ldyBNYXAoW1tcInVUZXh0dXJlXCIsIG5ldyBUSFJFRS5Vbmlmb3JtKG9wdGlvbnMudGV4dHVyZSldXSksXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2F0ZXJFZmZlY3Q7XG5cbmNvbnN0IGZyYWdtZW50ID0gYFxuXG51bmlmb3JtIHNhbXBsZXIyRCB1VGV4dHVyZTtcblxudm9pZCBtYWluVXYoaW5vdXQgdmVjMiB1dikge1xuICAgICAgICB2ZWM0IHRleCA9IHRleHR1cmUyRCh1VGV4dHVyZSwgdXYpO1xuICAgICAgICBmbG9hdCBhbmdsZSA9IC0oKHRleC5yKSAqIChQSSAqIDIuKSAtIFBJKSA7XG4gICAgICAgIGZsb2F0IHZ4ID0gLSh0ZXguciAqMi4gLSAxLik7XG4gICAgICAgIGZsb2F0IHZ5ID0gLSh0ZXguZyAqMi4gLSAxLik7XG4gICAgICAgIGZsb2F0IGludGVuc2l0eSA9IHRleC5iO1xuICAgICAgICB1di54ICs9IHZ4ICogMC4yICogaW50ZW5zaXR5IDtcbiAgICAgICAgdXYueSArPSB2eSAqIDAuMiAgKmludGVuc2l0eTtcbiAgICAgICAgdXYueHkgKj0gMS4gLSAwLjUgKiBzbW9vdGhzdGVwKCAwLiwgMS4sIGludGVuc2l0eSkgO1xuICAgICAgICB1di54ICs9ICAwLjIgKiBpbnRlbnNpdHk7XG4gICAgICAgIHV2LnkgKz0gIDAuMiAgKmludGVuc2l0eTtcbiAgICB9XG5cblxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sketches/three/water-distort/WaterEffect.ts\n");

/***/ })

})