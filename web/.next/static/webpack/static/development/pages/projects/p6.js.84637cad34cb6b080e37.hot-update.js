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
    // _________________________________________________
    // Config
    var theShader; // _________________________________________________
    // Preload

    p.preload = function () {
      theShader = p.loadShader("shader.vert", "shader.frag");
    }; // _________________________________________________
    // Setup


    p.setup = function () {
      // Our Canvas
      p.createCanvas(W, H, p.WEBGL);
      p.noStroke();
    }; // _________________________________________________
    // Draw


    p.draw = function () {
      // shader() sets the active shader with our shader
      p.shader(theShader);
      theShader.setUniform("u_resolution", [W, H]);
      theShader.setUniform("u_time", p.millis() / 1000.0);
      theShader.setUniform("u_mouse", [p.mouseX, p.map(p.mouseY, 0, H, H, 0)]); // rect gives us some geometry on the screen

      p.rect(0, 0, W, H);
    };

    p.windowResized = function () {
      p.resizeCanvas(W, H);
    };
  };
});

/***/ }),

/***/ "./sketches/p5/shaders/example-1/shader.frag":
false,

/***/ "./sketches/p5/shaders/example-1/shader.vert":
false

})
//# sourceMappingURL=p6.js.84637cad34cb6b080e37.hot-update.js.map