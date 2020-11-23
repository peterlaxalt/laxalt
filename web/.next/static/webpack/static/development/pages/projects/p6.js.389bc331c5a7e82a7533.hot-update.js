webpackHotUpdate("static/development/pages/projects/p6.js",{

/***/ "./sketches/p5 sync recursive ^\\.\\/.*$":
/*!***********************************!*\
  !*** ./sketches/p5 sync ^\.\/.*$ ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./d1": "./sketches/p5/d1.tsx",
	"./d1.tsx": "./sketches/p5/d1.tsx",
	"./d2": "./sketches/p5/d2.tsx",
	"./d2.tsx": "./sketches/p5/d2.tsx",
	"./d8": "./sketches/p5/d8.js",
	"./d8.js": "./sketches/p5/d8.js",
	"./glsl": "./sketches/p5/glsl.tsx",
	"./glsl.ts": "./sketches/p5/glsl.ts"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./sketches/p5 sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./sketches/p5/glsl.ts":
/*!*****************************!*\
  !*** ./sketches/p5/glsl.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);


/**
 *
 * Sin Wave Cone
 * @author Peter Laxalt
 * @description Simple Sin Wave Cone in p5.js
 *
 */
// Begin Component
// __________________________________________________________________________
/* harmony default export */ __webpack_exports__["default"] = (function (W, H, BG) {
  return function (p) {
    var x = 0;
    var scale = 0;
    var color = {
      primary: "black",
      primaryAlpha: "black",
      secondary: "#000000",
      bg: BG,
      white: "#ffffff"
    };

    p.setup = function () {
      // Our Canvas
      p.createCanvas(W, H, p.WEBGL);
      p.angleMode(p.RADIANS);
    };

    p.draw = function () {
      scale += 1;
      scale;
      x = x * 1.1 + 2;
      p.noFill();
      p.stroke(color.primary);
      p.background(color.bg);

      for (var i = 0; i < 20; i++) {
        p.cone(300, 400);
        p.stroke(color.primaryAlpha);
        p.strokeWeight(1);
        p.translate(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()((Math.sin(p.mouseX * 0.001) * 50).toString()), _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()((Math.sin(p.mouseY * 0.001) * 50).toString()), _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()((Math.sin(p.mouseX * 0.001) * 50).toString()));
        p.smooth();
        p.rotateX(p.frameCount * 0.01);
        p.rotateY(p.frameCount * 0.01);
      }
    };

    p.windowResized = function () {
      p.resizeCanvas(W, H);
      p.background("yellow");
    };
  };
});

/***/ }),

/***/ "./sketches/p5/glsl.tsx":
/*!******************************!*\
  !*** ./sketches/p5/glsl.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/next/dist/build/webpack/loaders/next-babel-loader.js):\nError: ENOENT: no such file or directory, open '/Users/pflaxalt/Repositories/_pfl/web/sketches/p5/glsl.tsx'");

/***/ })

})
//# sourceMappingURL=p6.js.389bc331c5a7e82a7533.hot-update.js.map