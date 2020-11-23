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
	"./glsl.ts": "./sketches/p5/glsl.ts",
	"./shaders/example-1/shader.frag": "./sketches/p5/shaders/example-1/shader.frag",
	"./shaders/example-1/shader.vert": "./sketches/p5/shaders/example-1/shader.vert"
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

/***/ "./sketches/p5/shaders/example-1/shader.vert":
/*!***************************************************!*\
  !*** ./sketches/p5/shaders/example-1/shader.vert ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '#' (5:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n| // more p5.js + shader examples: https://itp-xstory.github.io/p5js-shaders/\n| \n> #ifdef GL_ES\n| precision mediump float;\n| #endif");

/***/ })

})
//# sourceMappingURL=p6.js.cb347defd95b9d042a8d.hot-update.js.map