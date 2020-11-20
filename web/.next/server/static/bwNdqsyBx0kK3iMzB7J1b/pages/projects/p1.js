module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		12: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "6BQ9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wa65");

/***/ }),

/***/ "7lpM":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./d1": "Uh2J",
	"./d1.tsx": "Uh2J",
	"./d2": "bUOA",
	"./d2.tsx": "bUOA",
	"./d8": "gOdJ",
	"./d8.js": "gOdJ"
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
webpackContext.id = "7lpM";

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("K4z7");


/***/ }),

/***/ "K4z7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6BQ9");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

 // @ts-ignore

const P5Wrapper = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "nhmZ", 7)), {
  loading: () => __jsx("p", null, "Loading..."),
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("nhmZ")],
    modules: ["react-p5-wrapper"]
  }
});

class P5Page extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "renderP5", id => {
      const num = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(id); // @ts-ignore


      const sketch = __webpack_require__("7lpM")(`./d${num}`).default(this.state.windowWidth, this.state.windowHeight); // @ts-ignore


      return __jsx(P5Wrapper, {
        sketch: sketch
      });
    });

    this.state = {
      domLoaded: false,
      windowWidth: 0,
      windowHeight: 0
    };
  }

  static async getInitialProps(ctx) {
    const sketchId = ctx.query.sketchId;
    return {
      sketchId
    };
  }

  componentDidMount() {
    // @ts-ignore
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    });
  }

  render() {
    return __jsx("div", {
      className: "container"
    }, this.renderP5("1"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (P5Page);

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Uh2J":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 *
 * Sin Wave Circles
 * @author Peter Laxalt
 * @description Simple Sin Wave circles in p5.js
 *
 */
// Begin Component
//////////////////////////////////////////////////////////////////////
/* harmony default export */ __webpack_exports__["default"] = ((W, H) => p => {
  let x = 0;
  let scale = 50;
  let initialScale = 0;
  let color = {
    primary: "rgba(208, 112, 166, .3)",
    primaryAlpha: "rgba(208, 112, 166, 1)",
    secondary: "#FFF4F7",
    bg: "#1C170C",
    white: "#ffffff"
  };

  p.setup = () => {
    // Our Canvas
    p.createCanvas(W, H);
    p.angleMode(p.RADIANS);
    p.background("yellow");
  };

  p.draw = () => {
    scale += 1;
    initialScale = 400;
    x = x * 1.1 + 2;
    p.noFill();
    p.stroke(color.primary);

    if (p.mouseX > 0 || p.mouseY > 0) {
      p.ellipse(p.mouseX, p.mouseY, Math.sin(scale) * (Math.sin(scale) * initialScale), Math.sin(scale) * (Math.sin(scale) * initialScale));
      p.smooth();
    } else {
      p.ellipse(p.windowWidth / 2, p.windowHeight / 2, Math.sin(scale) * (Math.sin(scale) * initialScale), Math.sin(scale) * (Math.sin(scale) * initialScale));
      p.smooth();
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(W, H);
    p.background("yellow");
  };
});

/***/ }),

/***/ "bUOA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6BQ9");
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
/* harmony default export */ __webpack_exports__["default"] = ((W, H) => p => {
  let x = 0; // @ts-ignore

  let scale = 0;
  let color = {
    primary: "black",
    primaryAlpha: "black",
    secondary: "#000000",
    bg: "cyan",
    white: "#ffffff"
  };

  p.setup = () => {
    // Our Canvas
    p.createCanvas(W, H, p.WEBGL);
    p.angleMode(p.RADIANS);
  };

  p.draw = () => {
    scale += 1;
    x = x * 1.1 + 2;
    p.noFill();
    p.stroke(color.primary);
    p.background(color.bg);

    for (let i = 0; i < 20; i++) {
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

  p.windowResized = () => {
    p.resizeCanvas(W, H);
    p.background("yellow");
  };
});

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "gOdJ":
/***/ (function(module, exports) {

let canvas;
let ctx;
let field;
let w, h;
let size;
let columns;
let rows;
let noiseZ;

function setup() {
  size = 20;
  noiseZ = 0;
  canvas = document.querySelector("#canvas");
  ctx = canvas.getContext("2d");
  reset();
  window.addEventListener("resize", reset);
}

function initField() {
  field = new Array(columns);

  for (let x = 0; x < columns; x++) {
    field[x] = new Array(columns);

    for (let y = 0; y < rows; y++) {
      field[x][y] = [0, 0];
    }
  }
}

function calculateField() {
  for (let x = 0; x < columns; x++) {
    for (let y = 0; y < rows; y++) {
      let angle = noise.simplex3(x / 80, y / 80, noiseZ) * Math.PI * 2;
      let length = noise.simplex3(x / 100 + 40000, y / 100 + 40000, noiseZ);
      field[x][y][0] = angle;
      field[x][y][1] = length;
    }
  }
}

function reset() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  noise.seed(Math.random());
  columns = Math.floor(w / size) + 1;
  rows = Math.floor(h / size) + 1;
  initField();
}

function draw() {
  requestAnimationFrame(draw);
  calculateField();
  noiseZ += 0.004;
  clear();
  drawField();
}

function clear() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, w, h);
}

function drawField() {
  for (let x = 0; x < columns; x++) {
    for (let y = 0; y < rows; y++) {
      let angle = field[x][y][0];
      let length = field[x][y][1];
      ctx.save();
      ctx.translate(x * size, y * size);
      ctx.rotate(angle);
      ctx.strokeStyle = "white";
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, size * length);
      ctx.stroke();
      ctx.restore();
    }
  }
}

setup();
draw();

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "nhmZ":
/***/ (function(module, exports) {

module.exports = require("react-p5-wrapper");

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "wa65":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ })

/******/ });