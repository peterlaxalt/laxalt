webpackHotUpdate("static/development/pages/projects/p2.js",{

/***/ "./sketches/p5 sync recursive ^\\.\\/d.*$":
/*!************************************!*\
  !*** ./sketches/p5 sync ^\.\/d.*$ ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./d1": "./sketches/p5/d1.tsx",
	"./d1.tsx": "./sketches/p5/d1.tsx",
	"./d2": "./sketches/p5/d2.tsx",
	"./d2.tsx": "./sketches/p5/d2.tsx",
	"./d3": "./sketches/p5/d3.tsx",
	"./d3.tsx": "./sketches/p5/d3.tsx",
	"./d8": "./sketches/p5/d8.js",
	"./d8.js": "./sketches/p5/d8.js"
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
webpackContext.id = "./sketches/p5 sync recursive ^\\.\\/d.*$";

/***/ }),

/***/ "./sketches/p5/d3.tsx":
/*!****************************!*\
  !*** ./sketches/p5/d3.tsx ***!
  \****************************/
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
//////////////////////////////////////////////////////////////////////
/* harmony default export */ __webpack_exports__["default"] = (function (W, H) {
  return function (p) {
    var x = 0; // @ts-ignore

    var scale = 0;
    var color = {
      primary: "black",
      primaryAlpha: "black",
      secondary: "#000000",
      bg: "cyan",
      white: "#ffffff"
    };

    p.setup = function () {
      // Our Canvas
      p.createCanvas(W, H, p.WEBGL);
      p.angleMode(p.RADIANS);
    };

    p.draw = function () {
      scale += 1;
      x = x * 1.1 + 2;
      p.noFill();
      p.stroke(color.primary);
      p.background(color.bg);

      for (var i = 0; i < 20; i++) {
        p.cone(300, 400);
        p.stroke(color.primaryAlpha);
        p.strokeWeight(1);
        p.translate( // @ts-ignore
        _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(Math.sin(p.mouseX * 0.001) * 50), // @ts-ignore
        _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(Math.sin(p.mouseY * 0.001) * 50), // @ts-ignore
        _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(Math.sin(p.mouseX * 0.001) * 50));
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

/***/ })

})
//# sourceMappingURL=p2.js.4ff30c01f79defa29c88.hot-update.js.map