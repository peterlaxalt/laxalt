webpackHotUpdate_N_E("pages/index",{

/***/ "./sketches/three/three-water-distort.canvas.ts":
/*!******************************************************!*\
  !*** ./sketches/three/three-water-distort.canvas.ts ***!
  \******************************************************/
/*! exports provided: ThreeWaterCanvasClass, ThreeWaterCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ThreeWaterCanvasClass\", function() { return ThreeWaterCanvasClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ThreeWaterCanvas\", function() { return ThreeWaterCanvas; });\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var postprocessing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! postprocessing */ \"./node_modules/postprocessing/build/postprocessing.esm.js\");\n/* harmony import */ var _water_distort_TouchTexture__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./water-distort/TouchTexture */ \"./sketches/three/water-distort/TouchTexture.ts\");\n/* harmony import */ var _water_distort_WaterEffect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./water-distort/WaterEffect */ \"./sketches/three/water-distort/WaterEffect.ts\");\n/* harmony import */ var _utils_hexToRGB__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/hexToRGB */ \"./utils/hexToRGB.tsx\");\n\n\n\n// Core\n // Settings\n\n// Textures\n // Textures\n\n\n\n // Begin Component\n// __________________________________________________________________________\n\nvar ThreeWaterCanvasClass = /*#__PURE__*/function () {\n  // ______________________________\n  // Types\n  // ______________________________\n  // Constructor\n  function ThreeWaterCanvasClass(options) {\n    Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ThreeWaterCanvasClass);\n\n    Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"touchTexture\", void 0);\n\n    Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"waterEffect\", void 0);\n\n    Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"renderer\", void 0);\n\n    Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"camera\", void 0);\n\n    Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"scene\", void 0);\n\n    Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"composer\", void 0);\n\n    Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"clock\", void 0);\n\n    Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"material\", void 0);\n\n    Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"mesh\", void 0);\n\n    Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"canvasElement\", void 0);\n\n    Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"geometry\", void 0);\n\n    this.touchTexture = new _water_distort_TouchTexture__WEBPACK_IMPORTED_MODULE_5__[\"TouchTexture\"]({\n      debug: false\n    });\n    this.renderer = new three__WEBPACK_IMPORTED_MODULE_3__[\"WebGLRenderer\"]({\n      antialias: false,\n      alpha: true\n    });\n    this.renderer.setSize(window.innerWidth, window.innerHeight);\n    this.renderer.setPixelRatio(window.devicePixelRatio);\n    this.renderer.domElement.id = \"three_canvas\";\n    options.canvasContainer.append(this.renderer.domElement); // Scene\n\n    this.camera = new three__WEBPACK_IMPORTED_MODULE_3__[\"PerspectiveCamera\"](45, window.innerWidth / window.innerHeight, 0.1, 10000);\n    this.camera.position.z = 50;\n    this.scene = new three__WEBPACK_IMPORTED_MODULE_3__[\"Scene\"]();\n    this.scene.background = new three__WEBPACK_IMPORTED_MODULE_3__[\"Color\"](\"\".concat(Object(_utils_hexToRGB__WEBPACK_IMPORTED_MODULE_7__[\"hexToRGB\"])(window.laxaltUniversalTheme.background, 1)));\n    this.canvasElement = options.canvasElement;\n    this.geometry = new three__WEBPACK_IMPORTED_MODULE_3__[\"PlaneBufferGeometry\"](60, 35, 1, 1);\n    this.material = new three__WEBPACK_IMPORTED_MODULE_3__[\"MeshBasicMaterial\"]();\n    this.mesh = new three__WEBPACK_IMPORTED_MODULE_3__[\"Mesh\"](this.geometry, this.material);\n    this.material.map = new three__WEBPACK_IMPORTED_MODULE_3__[\"CanvasTexture\"](this.canvasElement);\n    this.tick = this.tick.bind(this);\n    this.onMouseMove = this.onMouseMove.bind(this); // Post Processing\n\n    this.composer = new postprocessing__WEBPACK_IMPORTED_MODULE_4__[\"EffectComposer\"](this.renderer);\n    this.clock = new three__WEBPACK_IMPORTED_MODULE_3__[\"Clock\"]();\n    this.init();\n  }\n\n  Object(_Users_pflaxalt_Repositories_pfl_web_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ThreeWaterCanvasClass, [{\n    key: \"initComposer\",\n    value: function initComposer() {\n      var renderPass = new postprocessing__WEBPACK_IMPORTED_MODULE_4__[\"RenderPass\"](this.scene, this.camera);\n      this.waterEffect = new _water_distort_WaterEffect__WEBPACK_IMPORTED_MODULE_6__[\"default\"]({\n        texture: this.touchTexture.texture\n      });\n      var waterPass = new postprocessing__WEBPACK_IMPORTED_MODULE_4__[\"EffectPass\"](this.camera, this.waterEffect);\n      renderPass.renderToScreen = false;\n      waterPass.renderToScreen = true;\n      this.composer.addPass(renderPass);\n      this.composer.addPass(waterPass);\n    }\n  }, {\n    key: \"watchPlane\",\n    value: function watchPlane() {\n      window.addEventListener(\"mousemove\", this.onMouseMove);\n      this.scene.add(this.mesh);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      this.initComposer();\n      this.watchPlane();\n      this.tick();\n    }\n  }, {\n    key: \"onMouseMove\",\n    value: function onMouseMove(ev) {\n      var point = {\n        x: ev.clientX / window.innerWidth,\n        y: ev.clientY / window.innerHeight\n      };\n      this.touchTexture.addPoint(point);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      this.material.map.needsUpdate = true;\n      this.composer.render(this.clock.getDelta());\n    }\n  }, {\n    key: \"tick\",\n    value: function tick() {\n      this.render();\n      this.touchTexture.update();\n      requestAnimationFrame(this.tick);\n    }\n  }]);\n\n  return ThreeWaterCanvasClass;\n}();\nvar ThreeWaterCanvas = function ThreeWaterCanvas(canvasContainer, canvasElement) {\n  if (!document.querySelector(\"#three_canvas\")) {\n    var myWaterCanvas = new ThreeWaterCanvasClass({\n      canvasContainer: canvasContainer,\n      canvasElement: canvasElement\n    });\n    return myWaterCanvas;\n  } else {\n    document.querySelector(\"#three_canvas\").remove();\n\n    var _myWaterCanvas = new ThreeWaterCanvasClass({\n      canvasContainer: canvasContainer,\n      canvasElement: canvasElement\n    });\n\n    return _myWaterCanvas;\n  }\n};\n_c = ThreeWaterCanvas;\n\nvar _c;\n\n$RefreshReg$(_c, \"ThreeWaterCanvas\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2tldGNoZXMvdGhyZWUvdGhyZWUtd2F0ZXItZGlzdG9ydC5jYW52YXMudHM/Y2Y3ZSJdLCJuYW1lcyI6WyJUaHJlZVdhdGVyQ2FudmFzQ2xhc3MiLCJvcHRpb25zIiwidG91Y2hUZXh0dXJlIiwiVG91Y2hUZXh0dXJlIiwiZGVidWciLCJyZW5kZXJlciIsIlRIUkVFIiwiYW50aWFsaWFzIiwiYWxwaGEiLCJzZXRTaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Iiwic2V0UGl4ZWxSYXRpbyIsImRldmljZVBpeGVsUmF0aW8iLCJkb21FbGVtZW50IiwiaWQiLCJjYW52YXNDb250YWluZXIiLCJhcHBlbmQiLCJjYW1lcmEiLCJwb3NpdGlvbiIsInoiLCJzY2VuZSIsImJhY2tncm91bmQiLCJoZXhUb1JHQiIsImxheGFsdFVuaXZlcnNhbFRoZW1lIiwiY2FudmFzRWxlbWVudCIsImdlb21ldHJ5IiwibWF0ZXJpYWwiLCJtZXNoIiwibWFwIiwidGljayIsImJpbmQiLCJvbk1vdXNlTW92ZSIsImNvbXBvc2VyIiwiRWZmZWN0Q29tcG9zZXIiLCJjbG9jayIsImluaXQiLCJyZW5kZXJQYXNzIiwiUmVuZGVyUGFzcyIsIndhdGVyRWZmZWN0IiwiV2F0ZXJFZmZlY3QiLCJ0ZXh0dXJlIiwid2F0ZXJQYXNzIiwiRWZmZWN0UGFzcyIsInJlbmRlclRvU2NyZWVuIiwiYWRkUGFzcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJhZGQiLCJpbml0Q29tcG9zZXIiLCJ3YXRjaFBsYW5lIiwiZXYiLCJwb2ludCIsIngiLCJjbGllbnRYIiwieSIsImNsaWVudFkiLCJhZGRQb2ludCIsIm5lZWRzVXBkYXRlIiwicmVuZGVyIiwiZ2V0RGVsdGEiLCJ1cGRhdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJUaHJlZVdhdGVyQ2FudmFzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibXlXYXRlckNhbnZhcyIsInJlbW92ZSJd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QSxnQkFBbUIsQ0FDOUI5QyxlQUQ4QixFQUU5QlMsYUFGOEIsRUFHSjtBQUMxQixNQUFJLENBQUNzQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBTCxFQUE4QztBQUM1QyxRQUFNQyxhQUFhLEdBQUcsSUFBSWxFLHFCQUFKLENBQTBCO0FBQzlDaUIscUJBQWUsRUFBZkEsZUFEOEM7QUFFOUNTLG1CQUFhLEVBQWJBO0FBRjhDLEtBQTFCLENBQXRCO0FBS0EsV0FBT3dDLGFBQVA7QUFDRCxHQVBELE1BT087QUFDTEYsWUFBUSxDQUFDQyxhQUFULENBQXVCLGVBQXZCLEVBQXdDRSxNQUF4Qzs7QUFFQSxRQUFNRCxjQUFhLEdBQUcsSUFBSWxFLHFCQUFKLENBQTBCO0FBQzlDaUIscUJBQWUsRUFBZkEsZUFEOEM7QUFFOUNTLG1CQUFhLEVBQWJBO0FBRjhDLEtBQTFCLENBQXRCOztBQUtBLFdBQU93QyxjQUFQO0FBQ0Q7QUFDRixDQXJCTTtLQUFNSCxnQiIsImZpbGUiOiIuL3NrZXRjaGVzL3RocmVlL3RocmVlLXdhdGVyLWRpc3RvcnQuY2FudmFzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29yZVxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XG5cbi8vIFNldHRpbmdzXG5pbXBvcnQgeyBfX0RFQlVHX18gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL3NpdGUvU2V0dGluZ3NcIjtcblxuLy8gVHlwZXNcbmltcG9ydCB7IExYTFRfQ29sb3JUaGVtZSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvc3R5bGVzL0NvbG9yXCI7XG5cbi8vIFRleHR1cmVzXG5pbXBvcnQgeyBFZmZlY3RDb21wb3NlciwgUmVuZGVyUGFzcywgRWZmZWN0UGFzcyB9IGZyb20gXCJwb3N0cHJvY2Vzc2luZ1wiO1xuXG4vLyBUZXh0dXJlc1xuaW1wb3J0IHtcbiAgTFhMVF9Ub3VjaFRleHR1cmVQb2ludCxcbiAgVG91Y2hUZXh0dXJlLFxufSBmcm9tIFwiLi93YXRlci1kaXN0b3J0L1RvdWNoVGV4dHVyZVwiO1xuaW1wb3J0IFdhdGVyRWZmZWN0IGZyb20gXCIuL3dhdGVyLWRpc3RvcnQvV2F0ZXJFZmZlY3RcIjtcbmltcG9ydCB7IGhleFRvUkdCIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2hleFRvUkdCXCI7XG5cbi8vIEJlZ2luIENvbXBvbmVudFxuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cblxuZXhwb3J0IHR5cGUgTFhMVF9UaHJlZVdhdGVyQ2FudmFzID0ge1xuICBjYW52YXNDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICBjYW52YXNFbGVtZW50OiBIVE1MQ2FudmFzRWxlbWVudDtcbn07XG5cbmV4cG9ydCBjbGFzcyBUaHJlZVdhdGVyQ2FudmFzQ2xhc3Mge1xuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gVHlwZXNcbiAgdG91Y2hUZXh0dXJlOiBUb3VjaFRleHR1cmU7XG4gIHdhdGVyRWZmZWN0OiBXYXRlckVmZmVjdDtcbiAgcmVuZGVyZXI6IFRIUkVFLldlYkdMUmVuZGVyZXI7XG4gIGNhbWVyYTogVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmE7XG4gIHNjZW5lOiBUSFJFRS5TY2VuZTtcbiAgY29tcG9zZXI6IGFueTtcbiAgY2xvY2s6IFRIUkVFLkNsb2NrO1xuICBtYXRlcmlhbDogVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWw7XG4gIG1lc2g6IFRIUkVFLk1lc2g7XG4gIGNhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50O1xuICBnZW9tZXRyeTogVEhSRUUuUGxhbmVCdWZmZXJHZW9tZXRyeTtcblxuICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cbiAgLy8gQ29uc3RydWN0b3JcbiAgY29uc3RydWN0b3Iob3B0aW9uczogTFhMVF9UaHJlZVdhdGVyQ2FudmFzKSB7XG4gICAgdGhpcy50b3VjaFRleHR1cmUgPSBuZXcgVG91Y2hUZXh0dXJlKHsgZGVidWc6IGZhbHNlIH0pO1xuXG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcbiAgICAgIGFudGlhbGlhczogZmFsc2UsXG4gICAgICBhbHBoYTogdHJ1ZSxcbiAgICB9KTtcblxuICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8pO1xuICAgIHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudC5pZCA9IFwidGhyZWVfY2FudmFzXCI7XG5cbiAgICBvcHRpb25zLmNhbnZhc0NvbnRhaW5lci5hcHBlbmQodGhpcy5yZW5kZXJlci5kb21FbGVtZW50KTtcblxuICAgIC8vIFNjZW5lXG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoXG4gICAgICA0NSxcbiAgICAgIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgMC4xLFxuICAgICAgMTAwMDBcbiAgICApO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSA1MDtcblxuICAgIHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgICB0aGlzLnNjZW5lLmJhY2tncm91bmQgPSBuZXcgVEhSRUUuQ29sb3IoXG4gICAgICBgJHtoZXhUb1JHQih3aW5kb3cubGF4YWx0VW5pdmVyc2FsVGhlbWUuYmFja2dyb3VuZCwgMSl9YFxuICAgICk7XG5cbiAgICB0aGlzLmNhbnZhc0VsZW1lbnQgPSBvcHRpb25zLmNhbnZhc0VsZW1lbnQ7XG5cbiAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lQnVmZmVyR2VvbWV0cnkoNjAsIDM1LCAxLCAxKTtcbiAgICB0aGlzLm1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKCk7XG4gICAgdGhpcy5tZXNoID0gbmV3IFRIUkVFLk1lc2godGhpcy5nZW9tZXRyeSwgdGhpcy5tYXRlcmlhbCk7XG5cbiAgICB0aGlzLm1hdGVyaWFsLm1hcCA9IG5ldyBUSFJFRS5DYW52YXNUZXh0dXJlKHRoaXMuY2FudmFzRWxlbWVudCk7XG5cbiAgICB0aGlzLnRpY2sgPSB0aGlzLnRpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uTW91c2VNb3ZlID0gdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuXG4gICAgLy8gUG9zdCBQcm9jZXNzaW5nXG4gICAgdGhpcy5jb21wb3NlciA9IG5ldyBFZmZlY3RDb21wb3Nlcih0aGlzLnJlbmRlcmVyKTtcbiAgICB0aGlzLmNsb2NrID0gbmV3IFRIUkVFLkNsb2NrKCk7XG5cbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXRDb21wb3NlcigpIHtcbiAgICBjb25zdCByZW5kZXJQYXNzID0gbmV3IFJlbmRlclBhc3ModGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xuXG4gICAgdGhpcy53YXRlckVmZmVjdCA9IG5ldyBXYXRlckVmZmVjdCh7IHRleHR1cmU6IHRoaXMudG91Y2hUZXh0dXJlLnRleHR1cmUgfSk7XG5cbiAgICBjb25zdCB3YXRlclBhc3MgPSBuZXcgRWZmZWN0UGFzcyh0aGlzLmNhbWVyYSwgdGhpcy53YXRlckVmZmVjdCk7XG5cbiAgICByZW5kZXJQYXNzLnJlbmRlclRvU2NyZWVuID0gZmFsc2U7XG4gICAgd2F0ZXJQYXNzLnJlbmRlclRvU2NyZWVuID0gdHJ1ZTtcbiAgICB0aGlzLmNvbXBvc2VyLmFkZFBhc3MocmVuZGVyUGFzcyk7XG4gICAgdGhpcy5jb21wb3Nlci5hZGRQYXNzKHdhdGVyUGFzcyk7XG4gIH1cblxuICB3YXRjaFBsYW5lKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMub25Nb3VzZU1vdmUpO1xuICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMubWVzaCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuaW5pdENvbXBvc2VyKCk7XG4gICAgdGhpcy53YXRjaFBsYW5lKCk7XG4gICAgdGhpcy50aWNrKCk7XG4gIH1cblxuICBvbk1vdXNlTW92ZShldjogTW91c2VFdmVudCkge1xuICAgIGNvbnN0IHBvaW50OiBMWExUX1RvdWNoVGV4dHVyZVBvaW50ID0ge1xuICAgICAgeDogZXYuY2xpZW50WCAvIHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgeTogZXYuY2xpZW50WSAvIHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICB9O1xuICAgIHRoaXMudG91Y2hUZXh0dXJlLmFkZFBvaW50KHBvaW50KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLm1hdGVyaWFsLm1hcC5uZWVkc1VwZGF0ZSA9IHRydWU7XG5cbiAgICB0aGlzLmNvbXBvc2VyLnJlbmRlcih0aGlzLmNsb2NrLmdldERlbHRhKCkpO1xuICB9XG5cbiAgdGljaygpIHtcbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMudG91Y2hUZXh0dXJlLnVwZGF0ZSgpO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudGljayk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IFRocmVlV2F0ZXJDYW52YXMgPSAoXG4gIGNhbnZhc0NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQsXG4gIGNhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50XG4pOiBUaHJlZVdhdGVyQ2FudmFzQ2xhc3MgPT4ge1xuICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGhyZWVfY2FudmFzXCIpKSB7XG4gICAgY29uc3QgbXlXYXRlckNhbnZhcyA9IG5ldyBUaHJlZVdhdGVyQ2FudmFzQ2xhc3Moe1xuICAgICAgY2FudmFzQ29udGFpbmVyLFxuICAgICAgY2FudmFzRWxlbWVudCxcbiAgICB9KTtcblxuICAgIHJldHVybiBteVdhdGVyQ2FudmFzO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGhyZWVfY2FudmFzXCIpLnJlbW92ZSgpO1xuXG4gICAgY29uc3QgbXlXYXRlckNhbnZhcyA9IG5ldyBUaHJlZVdhdGVyQ2FudmFzQ2xhc3Moe1xuICAgICAgY2FudmFzQ29udGFpbmVyLFxuICAgICAgY2FudmFzRWxlbWVudCxcbiAgICB9KTtcblxuICAgIHJldHVybiBteVdhdGVyQ2FudmFzO1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sketches/three/three-water-distort.canvas.ts\n");

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