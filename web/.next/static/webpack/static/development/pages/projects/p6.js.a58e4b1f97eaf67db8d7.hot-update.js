webpackHotUpdate("static/development/pages/projects/p6.js",{

/***/ "./pages/projects/p6.tsx":
/*!*******************************!*\
  !*** ./pages/projects/p6.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_8__);







var _jsxFileName = "/Users/pflaxalt/Repositories/_pfl/web/pages/projects/p6.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

 // @ts-ignore

var P5Wrapper = next_dynamic__WEBPACK_IMPORTED_MODULE_8___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-p5-wrapper */ "./node_modules/react-p5-wrapper/dist/index.js", 7));
}, {
  loading: function loading() {
    return __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, "Loading...");
  },
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-p5-wrapper */ "./node_modules/react-p5-wrapper/dist/index.js")];
    },
    modules: ["react-p5-wrapper"]
  }
});

var P5Page =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(P5Page, _Component);

  function P5Page(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, P5Page);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(P5Page).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderP5", function (file) {
      // @ts-ignore
      var sketch = __webpack_require__("./sketches/p5 sync recursive ^\\.\\/.*$")("./".concat(file))["default"](_this.state.windowWidth, _this.state.windowHeight); // @ts-ignore


      return __jsx(P5Wrapper, {
        sketch: sketch,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      });
    });

    _this.state = {
      domLoaded: false,
      windowWidth: 0,
      windowHeight: 0
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(P5Page, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if ("object") {
        this.setState({
          windowWidth: window.innerWidth,
          windowHeight: window.innerHeight
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, this.renderP5("glsl"));
    }
  }]);

  return P5Page;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (P5Page);

/***/ }),

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

/***/ "./sketches/p5 sync recursive ^\\.\\/4.*$":
false,

/***/ "./sketches/p5/glsl.tsx":
/*!******************************!*\
  !*** ./sketches/p5/glsl.tsx ***!
  \******************************/
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
    var x = 0;
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

/***/ })

})
//# sourceMappingURL=p6.js.a58e4b1f97eaf67db8d7.hot-update.js.map