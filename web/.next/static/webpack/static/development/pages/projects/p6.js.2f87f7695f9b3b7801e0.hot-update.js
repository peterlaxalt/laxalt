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
	"./dharma": "./sketches/p5/dharma.tsx",
	"./dharma.tsx": "./sketches/p5/dharma.tsx",
	"./glsl": "./sketches/p5/glsl.tsx",
	"./glsl.tsx": "./sketches/p5/glsl.tsx"
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

/***/ "./sketches/p5/dharma.tsx":
/*!********************************!*\
  !*** ./sketches/p5/dharma.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 *
 * Shader fun
 * @author Peter Laxalt
 *
 */
// Begin Component
// __________________________________________________________________________
var GLSL_Canvas = function GLSL_Canvas(W, H, ID, BG) {
  return function (p) {
    // _________________________________________________
    // Config
    var theShader; // _________________________________________________
    // Preload

    p.preload = function () {
      theShader = p.loadShader("/shaders/ex_".concat(ID, "/shader.vert"), "/shaders/ex_".concat(ID, "/shader.frag"));
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
};

/* harmony default export */ __webpack_exports__["default"] = (GLSL_Canvas);

/***/ })

})
//# sourceMappingURL=p6.js.2f87f7695f9b3b7801e0.hot-update.js.map