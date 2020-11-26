webpackHotUpdate_N_E("pages/projects/water-distort-with-canvas",{

/***/ "./sketches/three/three-water-distort.canvas.ts":
/*!******************************************************!*\
  !*** ./sketches/three/three-water-distort.canvas.ts ***!
  \******************************************************/
/*! exports provided: ThreeWaterCanvasClass, ThreeWaterCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ThreeWaterCanvasClass\", function() { return ThreeWaterCanvasClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ThreeWaterCanvas\", function() { return ThreeWaterCanvas; });\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var postprocessing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! postprocessing */ \"./node_modules/postprocessing/build/postprocessing.esm.js\");\n/* harmony import */ var _water_distort_TouchTexture__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./water-distort/TouchTexture */ \"./sketches/three/water-distort/TouchTexture.ts\");\n/* harmony import */ var _water_distort_WaterEffect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./water-distort/WaterEffect */ \"./sketches/three/water-distort/WaterEffect.ts\");\n/* harmony import */ var _utils_hexToRGB__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/hexToRGB */ \"./utils/hexToRGB.tsx\");\n\n\n\n// Core\n // Settings\n\n// Textures\n // Textures\n\n\n\n // Begin Component\n// __________________________________________________________________________\n\nvar ThreeWaterCanvasClass = /*#__PURE__*/function () {\n  // ______________________________\n  // Types\n  // ______________________________\n  // Constructor\n  function ThreeWaterCanvasClass(options) {\n    Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ThreeWaterCanvasClass);\n\n    Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"touchTexture\", void 0);\n\n    Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"waterEffect\", void 0);\n\n    Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"renderer\", void 0);\n\n    Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"camera\", void 0);\n\n    Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"scene\", void 0);\n\n    Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"composer\", void 0);\n\n    Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"clock\", void 0);\n\n    Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"material\", void 0);\n\n    Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"mesh\", void 0);\n\n    Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"canvasElement\", void 0);\n\n    Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"geometry\", void 0);\n\n    this.touchTexture = new _water_distort_TouchTexture__WEBPACK_IMPORTED_MODULE_5__[\"TouchTexture\"]({\n      debug: false\n    });\n    this.renderer = new three__WEBPACK_IMPORTED_MODULE_3__[\"WebGLRenderer\"]({\n      antialias: false,\n      alpha: true\n    });\n    this.renderer.setSize(window.innerWidth, window.innerHeight);\n    this.renderer.setPixelRatio(window.devicePixelRatio);\n    this.renderer.domElement.id = \"three_canvas\";\n    options.canvasContainer.append(this.renderer.domElement); // Scene\n\n    this.camera = new three__WEBPACK_IMPORTED_MODULE_3__[\"PerspectiveCamera\"](45, window.innerWidth / window.innerHeight, 0.1, 10000);\n    this.camera.position.z = 50;\n    this.scene = new three__WEBPACK_IMPORTED_MODULE_3__[\"Scene\"]();\n    this.scene.background = new three__WEBPACK_IMPORTED_MODULE_3__[\"Color\"](\"\".concat(Object(_utils_hexToRGB__WEBPACK_IMPORTED_MODULE_7__[\"hexToRGB\"])(window.laxaltUniversalTheme.background, 1)));\n    this.canvasElement = options.canvasElement;\n    this.geometry = new three__WEBPACK_IMPORTED_MODULE_3__[\"PlaneBufferGeometry\"](60, 35, 1, 1);\n    this.material = new three__WEBPACK_IMPORTED_MODULE_3__[\"MeshBasicMaterial\"]();\n    this.mesh = new three__WEBPACK_IMPORTED_MODULE_3__[\"Mesh\"](this.geometry, this.material);\n    this.material.map = new three__WEBPACK_IMPORTED_MODULE_3__[\"CanvasTexture\"](this.canvasElement);\n    this.tick = this.tick.bind(this);\n    this.onMouseMove = this.onMouseMove.bind(this); // Post Processing\n\n    this.composer = new postprocessing__WEBPACK_IMPORTED_MODULE_4__[\"EffectComposer\"](this.renderer);\n    this.clock = new three__WEBPACK_IMPORTED_MODULE_3__[\"Clock\"]();\n    this.init();\n  }\n\n  Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ThreeWaterCanvasClass, [{\n    key: \"initComposer\",\n    value: function initComposer() {\n      var renderPass = new postprocessing__WEBPACK_IMPORTED_MODULE_4__[\"RenderPass\"](this.scene, this.camera);\n      this.waterEffect = new _water_distort_WaterEffect__WEBPACK_IMPORTED_MODULE_6__[\"default\"]({\n        texture: this.touchTexture.texture\n      });\n      var waterPass = new postprocessing__WEBPACK_IMPORTED_MODULE_4__[\"EffectPass\"](this.camera, this.waterEffect);\n      renderPass.renderToScreen = false;\n      waterPass.renderToScreen = true;\n      this.composer.addPass(renderPass);\n      this.composer.addPass(waterPass);\n    }\n  }, {\n    key: \"watchPlane\",\n    value: function watchPlane() {\n      window.addEventListener(\"mousemove\", this.onMouseMove);\n      this.scene.add(this.mesh);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      this.initComposer();\n      this.watchPlane();\n      this.tick();\n    }\n  }, {\n    key: \"onMouseMove\",\n    value: function onMouseMove(ev) {\n      var point = {\n        x: ev.clientX / window.innerWidth,\n        y: ev.clientY / window.innerHeight\n      };\n      this.touchTexture.addPoint(point);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      this.material.map.needsUpdate = true;\n      this.scene.background = new three__WEBPACK_IMPORTED_MODULE_3__[\"Color\"](\"\".concat(Object(_utils_hexToRGB__WEBPACK_IMPORTED_MODULE_7__[\"hexToRGB\"])(window.laxaltUniversalTheme.background, 1)));\n      this.composer.render(this.clock.getDelta());\n    }\n  }, {\n    key: \"tick\",\n    value: function tick() {\n      this.render();\n      this.touchTexture.update();\n      requestAnimationFrame(this.tick);\n    }\n  }]);\n\n  return ThreeWaterCanvasClass;\n}();\nvar ThreeWaterCanvas = function ThreeWaterCanvas(canvasContainer, canvasElement) {\n  if (!document.querySelector(\"#three_canvas\")) {\n    var myWaterCanvas = new ThreeWaterCanvasClass({\n      canvasContainer: canvasContainer,\n      canvasElement: canvasElement\n    });\n    return myWaterCanvas;\n  } else {\n    document.querySelector(\"#three_canvas\").remove();\n\n    var _myWaterCanvas = new ThreeWaterCanvasClass({\n      canvasContainer: canvasContainer,\n      canvasElement: canvasElement\n    });\n\n    return _myWaterCanvas;\n  }\n};\n_c = ThreeWaterCanvas;\n\nvar _c;\n\n$RefreshReg$(_c, \"ThreeWaterCanvas\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2tldGNoZXMvdGhyZWUvdGhyZWUtd2F0ZXItZGlzdG9ydC5jYW52YXMudHM/Y2Y3ZSJdLCJuYW1lcyI6WyJUaHJlZVdhdGVyQ2FudmFzQ2xhc3MiLCJvcHRpb25zIiwidG91Y2hUZXh0dXJlIiwiVG91Y2hUZXh0dXJlIiwiZGVidWciLCJyZW5kZXJlciIsIlRIUkVFIiwiYW50aWFsaWFzIiwiYWxwaGEiLCJzZXRTaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Iiwic2V0UGl4ZWxSYXRpbyIsImRldmljZVBpeGVsUmF0aW8iLCJkb21FbGVtZW50IiwiaWQiLCJjYW52YXNDb250YWluZXIiLCJhcHBlbmQiLCJjYW1lcmEiLCJwb3NpdGlvbiIsInoiLCJzY2VuZSIsImJhY2tncm91bmQiLCJoZXhUb1JHQiIsImxheGFsdFVuaXZlcnNhbFRoZW1lIiwiY2FudmFzRWxlbWVudCIsImdlb21ldHJ5IiwibWF0ZXJpYWwiLCJtZXNoIiwibWFwIiwidGljayIsImJpbmQiLCJvbk1vdXNlTW92ZSIsImNvbXBvc2VyIiwiRWZmZWN0Q29tcG9zZXIiLCJjbG9jayIsImluaXQiLCJyZW5kZXJQYXNzIiwiUmVuZGVyUGFzcyIsIndhdGVyRWZmZWN0IiwiV2F0ZXJFZmZlY3QiLCJ0ZXh0dXJlIiwid2F0ZXJQYXNzIiwiRWZmZWN0UGFzcyIsInJlbmRlclRvU2NyZWVuIiwiYWRkUGFzcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJhZGQiLCJpbml0Q29tcG9zZXIiLCJ3YXRjaFBsYW5lIiwiZXYiLCJwb2ludCIsIngiLCJjbGllbnRYIiwieSIsImNsaWVudFkiLCJhZGRQb2ludCIsIm5lZWRzVXBkYXRlIiwicmVuZGVyIiwiZ2V0RGVsdGEiLCJ1cGRhdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJUaHJlZVdhdGVyQ2FudmFzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibXlXYXRlckNhbnZhcyIsInJlbW92ZSJd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QUFDQSxXQUFLekQsWUFBTCxDQUFrQjJELE1BQWxCO0FBRUFDLDJCQUFxQixDQUFDLEtBQUsvQixJQUFOLENBQXJCO0FBQ0Q7QUE5R0g7O0FBQUE7QUFBQTtBQWlITyxJQUFNZ0MsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUM5QjlDLGVBRDhCLEVBRTlCUyxhQUY4QixFQUdKO0FBQzFCLE1BQUksQ0FBQ3NDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixlQUF2QixDQUFMLEVBQThDO0FBQzVDLFFBQU1DLGFBQWEsR0FBRyxJQUFJbEUscUJBQUosQ0FBMEI7QUFDOUNpQixxQkFBZSxFQUFmQSxlQUQ4QztBQUU5Q1MsbUJBQWEsRUFBYkE7QUFGOEMsS0FBMUIsQ0FBdEI7QUFLQSxXQUFPd0MsYUFBUDtBQUNELEdBUEQsTUFPTztBQUNMRixZQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsRUFBd0NFLE1BQXhDOztBQUVBLFFBQU1ELGNBQWEsR0FBRyxJQUFJbEUscUJBQUosQ0FBMEI7QUFDOUNpQixxQkFBZSxFQUFmQSxlQUQ4QztBQUU5Q1MsbUJBQWEsRUFBYkE7QUFGOEMsS0FBMUIsQ0FBdEI7O0FBS0EsV0FBT3dDLGNBQVA7QUFDRDtBQUNGLENBckJNO0tBQU1ILGdCIiwiZmlsZSI6Ii4vc2tldGNoZXMvdGhyZWUvdGhyZWUtd2F0ZXItZGlzdG9ydC5jYW52YXMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3JlXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcblxuLy8gU2V0dGluZ3NcbmltcG9ydCB7IF9fREVCVUdfXyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvc2l0ZS9TZXR0aW5nc1wiO1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgTFhMVF9Db2xvclRoZW1lIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9zdHlsZXMvQ29sb3JcIjtcblxuLy8gVGV4dHVyZXNcbmltcG9ydCB7IEVmZmVjdENvbXBvc2VyLCBSZW5kZXJQYXNzLCBFZmZlY3RQYXNzIH0gZnJvbSBcInBvc3Rwcm9jZXNzaW5nXCI7XG5cbi8vIFRleHR1cmVzXG5pbXBvcnQge1xuICBMWExUX1RvdWNoVGV4dHVyZVBvaW50LFxuICBUb3VjaFRleHR1cmUsXG59IGZyb20gXCIuL3dhdGVyLWRpc3RvcnQvVG91Y2hUZXh0dXJlXCI7XG5pbXBvcnQgV2F0ZXJFZmZlY3QgZnJvbSBcIi4vd2F0ZXItZGlzdG9ydC9XYXRlckVmZmVjdFwiO1xuaW1wb3J0IHsgaGV4VG9SR0IgfSBmcm9tIFwiLi4vLi4vdXRpbHMvaGV4VG9SR0JcIjtcblxuLy8gQmVnaW4gQ29tcG9uZW50XG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuXG5leHBvcnQgdHlwZSBMWExUX1RocmVlV2F0ZXJDYW52YXMgPSB7XG4gIGNhbnZhc0NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gIGNhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50O1xufTtcblxuZXhwb3J0IGNsYXNzIFRocmVlV2F0ZXJDYW52YXNDbGFzcyB7XG4gIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAvLyBUeXBlc1xuICB0b3VjaFRleHR1cmU6IFRvdWNoVGV4dHVyZTtcbiAgd2F0ZXJFZmZlY3Q6IFdhdGVyRWZmZWN0O1xuICByZW5kZXJlcjogVEhSRUUuV2ViR0xSZW5kZXJlcjtcbiAgY2FtZXJhOiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYTtcbiAgc2NlbmU6IFRIUkVFLlNjZW5lO1xuICBjb21wb3NlcjogYW55O1xuICBjbG9jazogVEhSRUUuQ2xvY2s7XG4gIG1hdGVyaWFsOiBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbDtcbiAgbWVzaDogVEhSRUUuTWVzaDtcbiAgY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIGdlb21ldHJ5OiBUSFJFRS5QbGFuZUJ1ZmZlckdlb21ldHJ5O1xuXG4gIC8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICAvLyBDb25zdHJ1Y3RvclxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBMWExUX1RocmVlV2F0ZXJDYW52YXMpIHtcbiAgICB0aGlzLnRvdWNoVGV4dHVyZSA9IG5ldyBUb3VjaFRleHR1cmUoeyBkZWJ1ZzogZmFsc2UgfSk7XG5cbiAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xuICAgICAgYW50aWFsaWFzOiBmYWxzZSxcbiAgICAgIGFscGhhOiB0cnVlLFxuICAgIH0pO1xuXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyk7XG4gICAgdGhpcy5yZW5kZXJlci5kb21FbGVtZW50LmlkID0gXCJ0aHJlZV9jYW52YXNcIjtcblxuICAgIG9wdGlvbnMuY2FudmFzQ29udGFpbmVyLmFwcGVuZCh0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuXG4gICAgLy8gU2NlbmVcbiAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYShcbiAgICAgIDQ1LFxuICAgICAgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICAwLjEsXG4gICAgICAxMDAwMFxuICAgICk7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDUwO1xuXG4gICAgdGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuICAgIHRoaXMuc2NlbmUuYmFja2dyb3VuZCA9IG5ldyBUSFJFRS5Db2xvcihcbiAgICAgIGAke2hleFRvUkdCKHdpbmRvdy5sYXhhbHRVbml2ZXJzYWxUaGVtZS5iYWNrZ3JvdW5kLCAxKX1gXG4gICAgKTtcblxuICAgIHRoaXMuY2FudmFzRWxlbWVudCA9IG9wdGlvbnMuY2FudmFzRWxlbWVudDtcblxuICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVCdWZmZXJHZW9tZXRyeSg2MCwgMzUsIDEsIDEpO1xuICAgIHRoaXMubWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoKTtcbiAgICB0aGlzLm1lc2ggPSBuZXcgVEhSRUUuTWVzaCh0aGlzLmdlb21ldHJ5LCB0aGlzLm1hdGVyaWFsKTtcblxuICAgIHRoaXMubWF0ZXJpYWwubWFwID0gbmV3IFRIUkVFLkNhbnZhc1RleHR1cmUodGhpcy5jYW52YXNFbGVtZW50KTtcblxuICAgIHRoaXMudGljayA9IHRoaXMudGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Nb3VzZU1vdmUgPSB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcyk7XG5cbiAgICAvLyBQb3N0IFByb2Nlc3NpbmdcbiAgICB0aGlzLmNvbXBvc2VyID0gbmV3IEVmZmVjdENvbXBvc2VyKHRoaXMucmVuZGVyZXIpO1xuICAgIHRoaXMuY2xvY2sgPSBuZXcgVEhSRUUuQ2xvY2soKTtcblxuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgaW5pdENvbXBvc2VyKCkge1xuICAgIGNvbnN0IHJlbmRlclBhc3MgPSBuZXcgUmVuZGVyUGFzcyh0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSk7XG5cbiAgICB0aGlzLndhdGVyRWZmZWN0ID0gbmV3IFdhdGVyRWZmZWN0KHsgdGV4dHVyZTogdGhpcy50b3VjaFRleHR1cmUudGV4dHVyZSB9KTtcblxuICAgIGNvbnN0IHdhdGVyUGFzcyA9IG5ldyBFZmZlY3RQYXNzKHRoaXMuY2FtZXJhLCB0aGlzLndhdGVyRWZmZWN0KTtcblxuICAgIHJlbmRlclBhc3MucmVuZGVyVG9TY3JlZW4gPSBmYWxzZTtcbiAgICB3YXRlclBhc3MucmVuZGVyVG9TY3JlZW4gPSB0cnVlO1xuICAgIHRoaXMuY29tcG9zZXIuYWRkUGFzcyhyZW5kZXJQYXNzKTtcbiAgICB0aGlzLmNvbXBvc2VyLmFkZFBhc3Mod2F0ZXJQYXNzKTtcbiAgfVxuXG4gIHdhdGNoUGxhbmUoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5vbk1vdXNlTW92ZSk7XG4gICAgdGhpcy5zY2VuZS5hZGQodGhpcy5tZXNoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5pbml0Q29tcG9zZXIoKTtcbiAgICB0aGlzLndhdGNoUGxhbmUoKTtcbiAgICB0aGlzLnRpY2soKTtcbiAgfVxuXG4gIG9uTW91c2VNb3ZlKGV2OiBNb3VzZUV2ZW50KSB7XG4gICAgY29uc3QgcG9pbnQ6IExYTFRfVG91Y2hUZXh0dXJlUG9pbnQgPSB7XG4gICAgICB4OiBldi5jbGllbnRYIC8gd2luZG93LmlubmVyV2lkdGgsXG4gICAgICB5OiBldi5jbGllbnRZIC8gd2luZG93LmlubmVySGVpZ2h0LFxuICAgIH07XG4gICAgdGhpcy50b3VjaFRleHR1cmUuYWRkUG9pbnQocG9pbnQpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMubWF0ZXJpYWwubWFwLm5lZWRzVXBkYXRlID0gdHJ1ZTtcblxuICAgIHRoaXMuc2NlbmUuYmFja2dyb3VuZCA9IG5ldyBUSFJFRS5Db2xvcihcbiAgICAgIGAke2hleFRvUkdCKHdpbmRvdy5sYXhhbHRVbml2ZXJzYWxUaGVtZS5iYWNrZ3JvdW5kLCAxKX1gXG4gICAgKTtcblxuICAgIHRoaXMuY29tcG9zZXIucmVuZGVyKHRoaXMuY2xvY2suZ2V0RGVsdGEoKSk7XG4gIH1cblxuICB0aWNrKCkge1xuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy50b3VjaFRleHR1cmUudXBkYXRlKCk7XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy50aWNrKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgVGhyZWVXYXRlckNhbnZhcyA9IChcbiAgY2FudmFzQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCxcbiAgY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnRcbik6IFRocmVlV2F0ZXJDYW52YXNDbGFzcyA9PiB7XG4gIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aHJlZV9jYW52YXNcIikpIHtcbiAgICBjb25zdCBteVdhdGVyQ2FudmFzID0gbmV3IFRocmVlV2F0ZXJDYW52YXNDbGFzcyh7XG4gICAgICBjYW52YXNDb250YWluZXIsXG4gICAgICBjYW52YXNFbGVtZW50LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG15V2F0ZXJDYW52YXM7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aHJlZV9jYW52YXNcIikucmVtb3ZlKCk7XG5cbiAgICBjb25zdCBteVdhdGVyQ2FudmFzID0gbmV3IFRocmVlV2F0ZXJDYW52YXNDbGFzcyh7XG4gICAgICBjYW52YXNDb250YWluZXIsXG4gICAgICBjYW52YXNFbGVtZW50LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG15V2F0ZXJDYW52YXM7XG4gIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sketches/three/three-water-distort.canvas.ts\n");

/***/ }),

/***/ "./utils/hexToRGB.tsx":
/*!****************************!*\
  !*** ./utils/hexToRGB.tsx ***!
  \****************************/
/*! exports provided: hexToRGB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hexToRGB\", function() { return hexToRGB; });\n/**\n *\n * hexToRGB.tsx\n * @author Peter Laxalt\n * @description Convert #HEXCODES to RGBA\n * @example hexToRGB('#FF0000', 0.5);\n *\n */\nvar hexToRGB = function hexToRGB(hex, alpha) {\n  var r = parseInt(hex.slice(1, 3), 16),\n      g = parseInt(hex.slice(3, 5), 16),\n      b = parseInt(hex.slice(5, 7), 16);\n\n  if (alpha !== undefined) {\n    return \"rgba(\" + r + \", \" + g + \", \" + b + \", \" + alpha + \")\";\n  } else {\n    return \"rgb(\" + r + \", \" + g + \", \" + b + \")\";\n  }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvaGV4VG9SR0IudHN4P2Q2ZTEiXSwibmFtZXMiOlsiaGV4VG9SR0IiLCJoZXgiLCJhbHBoYSIsInIiLCJwYXJzZUludCIsInNsaWNlIiwiZyIsImIiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsR0FBRCxFQUFjQyxLQUFkLEVBQWdDO0FBQ3RELE1BQUlDLENBQUMsR0FBR0MsUUFBUSxDQUFDSCxHQUFHLENBQUNJLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixDQUFELEVBQWtCLEVBQWxCLENBQWhCO0FBQUEsTUFDRUMsQ0FBQyxHQUFHRixRQUFRLENBQUNILEdBQUcsQ0FBQ0ksS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLENBQUQsRUFBa0IsRUFBbEIsQ0FEZDtBQUFBLE1BRUVFLENBQUMsR0FBR0gsUUFBUSxDQUFDSCxHQUFHLENBQUNJLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixDQUFELEVBQWtCLEVBQWxCLENBRmQ7O0FBSUEsTUFBSUgsS0FBSyxLQUFLTSxTQUFkLEVBQXlCO0FBQ3ZCLFdBQU8sVUFBVUwsQ0FBVixHQUFjLElBQWQsR0FBcUJHLENBQXJCLEdBQXlCLElBQXpCLEdBQWdDQyxDQUFoQyxHQUFvQyxJQUFwQyxHQUEyQ0wsS0FBM0MsR0FBbUQsR0FBMUQ7QUFDRCxHQUZELE1BRU87QUFDTCxXQUFPLFNBQVNDLENBQVQsR0FBYSxJQUFiLEdBQW9CRyxDQUFwQixHQUF3QixJQUF4QixHQUErQkMsQ0FBL0IsR0FBbUMsR0FBMUM7QUFDRDtBQUNGLENBVk0iLCJmaWxlIjoiLi91dGlscy9oZXhUb1JHQi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqXG4gKiBoZXhUb1JHQi50c3hcbiAqIEBhdXRob3IgUGV0ZXIgTGF4YWx0XG4gKiBAZGVzY3JpcHRpb24gQ29udmVydCAjSEVYQ09ERVMgdG8gUkdCQVxuICogQGV4YW1wbGUgaGV4VG9SR0IoJyNGRjAwMDAnLCAwLjUpO1xuICpcbiAqL1xuXG5leHBvcnQgY29uc3QgaGV4VG9SR0IgPSAoaGV4OiBzdHJpbmcsIGFscGhhOiBudW1iZXIpID0+IHtcbiAgdmFyIHIgPSBwYXJzZUludChoZXguc2xpY2UoMSwgMyksIDE2KSxcbiAgICBnID0gcGFyc2VJbnQoaGV4LnNsaWNlKDMsIDUpLCAxNiksXG4gICAgYiA9IHBhcnNlSW50KGhleC5zbGljZSg1LCA3KSwgMTYpO1xuXG4gIGlmIChhbHBoYSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIFwicmdiYShcIiArIHIgKyBcIiwgXCIgKyBnICsgXCIsIFwiICsgYiArIFwiLCBcIiArIGFscGhhICsgXCIpXCI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFwicmdiKFwiICsgciArIFwiLCBcIiArIGcgKyBcIiwgXCIgKyBiICsgXCIpXCI7XG4gIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/hexToRGB.tsx\n");

/***/ })

})