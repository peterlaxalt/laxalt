module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		18: 0
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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "/YLk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Color; });
/* unused harmony export ColorContext_Defaults */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return useColorContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ColorContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Palette; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Color.js:
// This is the sitewide palette.
// Imports
// _______________________________________________________

 // Begin Component
// _______________________________________________________

const Color = {
  // Color Variables
  varPrimary: "var(--clrPrimary)",
  varSecondary: "var(--clrSecondary)",
  varBackground: "var(--clrBackground)",
  varForeground: "var(--clrForeground)",
  // Core Colors
  Primary: "#000000",
  Secondary: "#000000",
  Background: "#FFF8DC",
  Text: "#000000",
  // Grayscale Palette
  Black: "#000000",
  Nightsky: "#151313",
  Warmsky: "#34281D",
  Gravel: "#4E4135",
  Slate: "#928070",
  Tan: "#C4AC97",
  Gray: "#DAC9BA",
  Blush: "#F6E7D9",
  Cream: "#FFF6EE",
  White: "#FFF6EE",
  // Warm Palette
  Clay: "#A33609",
  Nova: "#E24809",
  Sunlight: "#E9A200",
  Sunset: "#ED9158",
  // Cool Palette
  Galaxy: "#111b24",
  Deepsea: "#002F9E",
  Ocean: "#269FE2",
  Sky: "#7AC0E6",
  Dino: "#23023B",
  Eggplant: "#520589",
  Lilac: "#874BB4",
  // Feedback Palette
  Warning: "#FF8760",
  Success: "#40DA33"
};
/**
 *
 * @name ColorContext_Defaults
 * @description Defaults for our theming context
 *
 */

const ColorContext_Defaults = {
  primary: Color.Primary,
  secondary: Color.Secondary,
  foreground: Color.Text,
  background: Color.Background,
  setTheme: () => {}
};
/**
 *
 * @name useColorContext
 * @description Our hook to update our color context
 * @see https://medium.com/@0n3z3r0n3/react-usecontext-how-to-update-context-from-child-component-8fa2894eee3d
 *
 */

const useColorContext = () => {
  const [colorTheme, setColorTheme] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(ColorContext_Defaults);
  const setTheme = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(currentColorTheme => {
    setColorTheme(currentColorTheme);
  }, []);
  return _objectSpread(_objectSpread({}, colorTheme), {}, {
    setTheme
  });
};
/**
 *
 * @name ColorContext
 * @description Our context to provide color themes
 * @see https://medium.com/@0n3z3r0n3/react-usecontext-how-to-update-context-from-child-component-8fa2894eee3d
 *
 */

const ColorContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(ColorContext_Defaults);
/**
 *
 * @name Palette
 * @description Global CSS Variables for palette
 *
 */

const Palette = styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"]`
  ::-moz-selection { background: ${Color.varForeground}; color: ${Color.varBackground} }
  ::selection { background: ${Color.varForeground}; color: ${Color.varBackground} }

  :root {
    --clrPrimary: ${Color.Primary};
    --clrSecondary: ${Color.Secondary};
    --clrBackground: ${Color.Background};
    --clrForeground: ${Color.Text};
  }
`; //////////////////////////////////////////////////////////////////////
// End Component

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("K4z7");


/***/ }),

/***/ "1KAc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "three"
var external_three_ = __webpack_require__("X9qW");

// EXTERNAL MODULE: external "postprocessing"
var external_postprocessing_ = __webpack_require__("Z3CJ");

// CONCATENATED MODULE: ./sketches/three/water-distort/TouchTexture.ts
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 *
 * * @see https://tympanus.net/codrops/2019/10/08/creating-a-water-like-distortion-effect-with-three-js/
 *
 */
// ____________________________________________________________________________________


/**
 *
 * @name Easings
 * @see https://tympanus.net/codrops/2019/10/08/creating-a-water-like-distortion-effect-with-three-js/
 *
 */
const easeOutSine = (t, b, c, d) => {
  return c * Math.sin(t / d * (Math.PI / 2)) + b;
};

const easeOutQuad = (t, b, c, d) => {
  t /= d;
  return -c * t * (t - 2) + b;
};
/**
 *
 * @name TouchTexture
 * @see https://tympanus.net/codrops/2019/10/08/creating-a-water-like-distortion-effect-with-three-js/
 *
 */


class TouchTexture_TouchTexture {
  // _________________________________
  // Types
  // _________________________________
  // Constructor
  constructor(options) {
    _defineProperty(this, "size", void 0);

    _defineProperty(this, "radius", void 0);

    _defineProperty(this, "width", void 0);

    _defineProperty(this, "height", void 0);

    _defineProperty(this, "canvas", void 0);

    _defineProperty(this, "ctx", void 0);

    _defineProperty(this, "debug", void 0);

    _defineProperty(this, "points", void 0);

    _defineProperty(this, "maxAge", void 0);

    _defineProperty(this, "last", void 0);

    _defineProperty(this, "texture", void 0);

    this.size = 64;
    this.radius = this.size * 0.1;
    this.width = this.height = this.size;
    this.size = 64;
    this.radius = this.size * 0.1;
    this.points = [];
    this.maxAge = 64;
    this.last = null;

    if (options.debug) {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.radius = this.width * 0.05;
    }

    this.initTexture();
    if (options.debug) document.body.append(this.canvas);
  }
  /**
   *
   * @description Initialize our canvas
   *
   */


  initTexture() {
    this.canvas = document.createElement("canvas");
    this.canvas.id = "TouchTexture";
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.ctx = this.canvas.getContext("2d");
    this.clear();
    this.texture = new external_three_["Texture"](this.canvas);
  }
  /**
   *
   * @description Note that addPoint() receives normalized values, from 0 to 1.
   * If the canvas happens to resize, we can use the normalized points to draw using the correct size.
   *
   */


  addPoint(point) {
    let force = 0;
    let vx = 0;
    let vy = 0;
    const last = this.last;

    if (last) {
      const relativeX = point.x - last.x;
      const relativeY = point.y - last.y; // Distance formula

      const distanceSquared = relativeX * relativeX + relativeY * relativeY;
      const distance = Math.sqrt(distanceSquared); // Calculate Unit Vector

      vx = relativeX / distance;
      vy = relativeY / distance;
      force = Math.min(distanceSquared * 10000, 1);
    }

    this.last = {
      x: point.x,
      y: point.y
    };
    this.points.push({
      x: point.x,
      y: point.y,
      age: 0,
      force,
      vx,
      vy
    });
  }
  /**
   *
   * @description Let’s create drawPoint(point) to start drawing the ripples:
   * Convert the normalized point coordinates into canvas coordinates. Then, draw a happy little circle.
   *
   */


  drawPoint(point) {
    // Convert normalized position into canvas coordinates
    let pos = {
      x: point.x * this.width,
      y: point.y * this.height
    };
    const radius = this.radius;
    this.ctx.beginPath();
    this.ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);
    this.ctx.fill();
    const ctx = this.ctx; // Lower the opacity as it gets older

    let intensity = 1;

    if (point.age < this.maxAge * 0.3) {
      intensity = easeOutSine(point.age / (this.maxAge * 0.3), 0, 1, 1);
    } else {
      intensity = easeOutQuad(1 - (point.age - this.maxAge * 0.3) / (this.maxAge * 0.7), 0, 1, 1);
    }

    intensity *= point.force; // Insert data to color channels
    // RG = Unit vector

    let red = (point.vx + 1) / 2 * 255;
    let green = (point.vy + 1) / 2 * 255; // B = Unit vector

    let blue = intensity * 255;
    let color = `${red}, ${green}, ${blue}`;
    let offset = this.size * 5;
    this.ctx.beginPath();
    this.ctx.fillStyle = "rgba(255,0,0,1)";
    this.ctx.arc(pos.x - offset, pos.y - offset, radius, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.shadowOffsetX = offset;
    this.ctx.shadowOffsetY = offset;
    this.ctx.shadowBlur = radius * 2;
    this.ctx.shadowColor = `rgba(${color},${0.2 * intensity})`;
  }

  clear() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  update() {
    this.clear();
    let agePart = 1 / this.maxAge;
    this.points.forEach((point, i) => {
      let slowAsOlder = 1 - point.age / this.maxAge;
      let force = point.force * agePart * slowAsOlder;
      point.x += point.vx * force;
      point.y += point.vy * force;
      point.age += 1;

      if (point.age > this.maxAge) {
        this.points.splice(i, 1);
      }
    });
    this.points.forEach(point => {
      this.drawPoint(point);
    });
    this.texture.needsUpdate = true;
  }

}
// CONCATENATED MODULE: ./sketches/three/water-distort/WaterEffect.ts
/**
 *
 * * @see https://tympanus.net/codrops/2019/10/08/creating-a-water-like-distortion-effect-with-three-js/
 *
 */
// ____________________________________________________________________________________


class WaterEffect_WaterEffect extends external_postprocessing_["Effect"] {
  constructor(options = {
    texture: undefined
  }) {
    super("WaterEffect", fragment, {
      uniforms: new Map([["uTexture", new external_three_["Uniform"](options.texture)]])
    });
  }

}
/* harmony default export */ var water_distort_WaterEffect = (WaterEffect_WaterEffect);
const fragment = `

uniform sampler2D uTexture;

void mainUv(inout vec2 uv) {
        vec4 tex = texture2D(uTexture, uv);

        float angle = -((tex.r) * (PI * 2.) - PI) ;

        float vx = -(tex.r *2. - 1.);
        float vy = -(tex.g *2. - 1.);
        float intensity = tex.b;

        uv.x += vx * 0.2 * intensity ;
        uv.y += vy * 0.2  *intensity;

        // uv.xy *= 1. - 0.5 * smoothstep( 0., 1., intensity) ;
        // uv.x +=  0.2 * intensity;
        // uv.y +=  0.2  *intensity;
    }


`;
// CONCATENATED MODULE: ./utils/hexToRGB.tsx
/**
 *
 * hexToRGB.tsx
 * @author Peter Laxalt
 * @description Convert #HEXCODES to RGBA
 * @example hexToRGB('#FF0000', 0.5);
 *
 */
const hexToRGB = (hex, alpha) => {
  var r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

  if (alpha !== undefined) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
};
// CONCATENATED MODULE: ./sketches/three/three-water-distort.canvas.ts
function three_water_distort_canvas_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Core
 // Settings

// Textures
 // Textures



 // Begin Component
// __________________________________________________________________________

class three_water_distort_canvas_ThreeWaterCanvasClass {
  // ______________________________
  // Types
  // ______________________________
  // Constructor
  constructor(options) {
    three_water_distort_canvas_defineProperty(this, "touchTexture", void 0);

    three_water_distort_canvas_defineProperty(this, "waterEffect", void 0);

    three_water_distort_canvas_defineProperty(this, "renderer", void 0);

    three_water_distort_canvas_defineProperty(this, "camera", void 0);

    three_water_distort_canvas_defineProperty(this, "scene", void 0);

    three_water_distort_canvas_defineProperty(this, "composer", void 0);

    three_water_distort_canvas_defineProperty(this, "fov", void 0);

    three_water_distort_canvas_defineProperty(this, "clock", void 0);

    three_water_distort_canvas_defineProperty(this, "material", void 0);

    three_water_distort_canvas_defineProperty(this, "mesh", void 0);

    three_water_distort_canvas_defineProperty(this, "canvasElement", void 0);

    three_water_distort_canvas_defineProperty(this, "geometry", void 0);

    this.touchTexture = new TouchTexture_TouchTexture({
      debug: false
    });
    this.renderer = new external_three_["WebGLRenderer"]({
      antialias: false,
      alpha: true
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.domElement.id = "three_canvas";
    options.canvasContainer.append(this.renderer.domElement); // Scene

    this.fov = 45;
    this.camera = new external_three_["PerspectiveCamera"](this.fov, window.innerWidth / window.innerHeight, 0.1, 10000);
    this.camera.position.z = 50;
    this.scene = new external_three_["Scene"]();
    this.scene.background = new external_three_["Color"](`${hexToRGB(window.laxaltUniversalTheme.background, 1)}`);
    this.canvasElement = options.canvasElement;
    this.geometry = new external_three_["PlaneBufferGeometry"](window.innerWidth / (this.fov / 1.75), window.innerHeight / (this.fov / 1.75), 1, 1);
    this.material = new external_three_["MeshBasicMaterial"]();
    this.mesh = new external_three_["Mesh"](this.geometry, this.material);
    this.material.map = new external_three_["CanvasTexture"](this.canvasElement);
    this.tick = this.tick.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this); // Post Processing

    this.composer = new external_postprocessing_["EffectComposer"](this.renderer);
    this.clock = new external_three_["Clock"]();
    this.init();
  }

  initComposer() {
    const renderPass = new external_postprocessing_["RenderPass"](this.scene, this.camera);
    this.waterEffect = new water_distort_WaterEffect({
      texture: this.touchTexture.texture
    });
    const waterPass = new external_postprocessing_["EffectPass"](this.camera, this.waterEffect);
    renderPass.renderToScreen = false;
    waterPass.renderToScreen = true;
    this.composer.addPass(renderPass);
    this.composer.addPass(waterPass);
  }

  watchPlane() {
    window.addEventListener("mousemove", this.onMouseMove);
    this.scene.add(this.mesh);
  }

  init() {
    this.initComposer();
    this.watchPlane();
    this.tick();
  }

  onMouseMove(ev) {
    const point = {
      x: ev.clientX / window.innerWidth,
      y: ev.clientY / window.innerHeight
    };
    this.touchTexture.addPoint(point);
  }

  render() {
    this.material.map.needsUpdate = true;
    this.scene.background = new external_three_["Color"](`${hexToRGB(window.laxaltUniversalTheme.background, 1)}`);
    this.composer.render(this.clock.getDelta());
  }

  tick() {
    if (document.querySelector("#three_canvas")) {
      this.render();
      this.touchTexture.update();
      requestAnimationFrame(this.tick);
    } else {
      this.renderer = null;
      this.composer = null;
      this.scene = null;
      return;
    }
  }

}
const ThreeWaterCanvas = (canvasContainer, canvasElement) => {
  if (!document.querySelector("#three_canvas")) {
    const myWaterCanvas = new three_water_distort_canvas_ThreeWaterCanvasClass({
      canvasContainer,
      canvasElement
    });
    return myWaterCanvas;
  } else {
    document.querySelector("#three_canvas").remove();
    const myWaterCanvas = new three_water_distort_canvas_ThreeWaterCanvasClass({
      canvasContainer,
      canvasElement
    });
    return myWaterCanvas;
  }
};
// CONCATENATED MODULE: ./sketches/p5/dharma-water-distort.canvas.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { dharma_water_distort_canvas_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function dharma_water_distort_canvas_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 *
 * Shader fun
 * @author Peter Laxalt
 *
 */
 // Begin Component
// __________________________________________________________________________

const DharmaCanvasDisplay = (W, H, ID, // DharmaTheme,
parentEl) => p => {
  // _________________________________________________
  // Config
  let canvas; // ____________________________
  // Fonts

  let dharmaFont; // ____________________________
  // Typography

  let text = "LAXALT";
  let splitCharacterArray = text.split("");
  let characters = splitCharacterArray.map((character, idx) => {
    return {
      letter: character,
      count: 1,
      idx: idx,
      copies: 5,
      copiesLastVisible: 0,
      copiesAreVisible: false,
      countIsIncrementing: true,
      countIsDecrementing: false,
      copiesAreIncrementing: true,
      copiesAreDecrementing: false
    };
  });
  let characterCount = splitCharacterArray.length;
  let characterWidth = W / characterCount;
  let characterSize = H * 1.15;
  let verticalSkewDivisible = 2.75;
  let characterSkewDivisible = 1.36;
  console.log(characterSize, "characterSize"); // ____________________________
  // Counts
  // let renderCount: number = 0;

  let previousCountUpdateTime = 0;
  let previousCopyUpdateTime = 0; // ____________________________
  // Strokes

  let strokeWidth = 4;
  let strokeOffset = strokeWidth * 1.5; // ____________________________
  // Limits

  let maxCount = 3;
  let minCount = 1;
  let maxCopies = 12;
  let minCopies = 1;
  let frameRate = 10; // ____________________________
  // Translation
  // let previousVerticalTranslation: number = H / 2.25;

  let verticalTranslationWhitespaceCompensation = 2.25;

  const previousHorizontalTranslation = idx => -60 + (characterWidth * idx + characterWidth / 1.5 + strokeOffset); // _________________________________________________
  // Preload


  p.preload = () => {
    dharmaFont = p.loadFont(`/fonts/dharma/dharma_regular.ttf`);
  }; // _________________________________________________
  // Setup


  p.setup = () => {
    // Our Canvas
    canvas = p.createCanvas(W, H);
    ThreeWaterCanvas(parentEl, canvas.elt);
    p.frameRate(frameRate);

    if (window.devicePixelRatio > 1 && window.devicePixelRatio < 3) {
      p.pixelDensity(1.25);
    }
  }; // _________________________________________________
  // Update Character


  const updateCharacter = (char, idx) => {
    if (char.count < maxCount && char.countIsIncrementing) {
      characters[idx] = _objectSpread(_objectSpread({}, char), {}, {
        count: char.count + 1
      });
      previousCountUpdateTime = p.millis();
      return;
    } else if (char.count === maxCount) {
      characters[idx] = _objectSpread(_objectSpread({}, char), {}, {
        count: char.count - 1,
        countIsIncrementing: false,
        countIsDecrementing: true
      });
      previousCountUpdateTime = p.millis();
      return;
    } else if (char.count > minCount && char.countIsDecrementing) {
      characters[idx] = _objectSpread(_objectSpread({}, char), {}, {
        count: char.count - 1,
        countIsDecrementing: true
      });
      previousCountUpdateTime = p.millis();
      return;
    } else if (char.count === minCount && char.countIsDecrementing) {
      characters[idx] = _objectSpread(_objectSpread({}, char), {}, {
        count: char.count + 1,
        countIsIncrementing: true,
        countIsDecrementing: false
      });
      previousCountUpdateTime = p.millis();
      return;
    }

    return;
  }; // _________________________________________________
  // Update Copies


  const updateCopies = (char, idx) => {
    if (char.copies < maxCopies && char.copiesAreIncrementing) {
      characters[idx] = _objectSpread(_objectSpread({}, char), {}, {
        copies: char.copies + 1
      });
      previousCopyUpdateTime = p.millis();
      return;
    } else if (char.copies === maxCopies) {
      characters[idx] = _objectSpread(_objectSpread({}, char), {}, {
        copies: char.copies - 1,
        copiesAreIncrementing: false,
        copiesAreDecrementing: true
      });
      previousCopyUpdateTime = p.millis();
      return;
    } else if (char.copies > minCopies && char.copiesAreDecrementing) {
      characters[idx] = _objectSpread(_objectSpread({}, char), {}, {
        copies: char.copies - 1,
        copiesAreDecrementing: true
      });
      previousCopyUpdateTime = p.millis();
      return;
    } else if (char.copies === minCopies && char.copiesAreDecrementing) {
      characters[idx] = _objectSpread(_objectSpread({}, char), {}, {
        copies: char.copies + 1,
        copiesAreIncrementing: true,
        copiesAreDecrementing: false
      });
      previousCopyUpdateTime = p.millis();
      return;
    }

    return;
  }; // _________________________________________________
  // Draw


  p.draw = () => {
    p.background(window.laxaltUniversalTheme.background);
    p.textFont(dharmaFont);
    p.textSize(characterSize);
    p.textAlign(p.CENTER, p.CENTER);
    p.fill(`${window.laxaltUniversalTheme.foreground}`);
    p.strokeWeight(strokeWidth);
    p.stroke(window.laxaltUniversalTheme.background);

    if (H && W) {
      // _________________________________________
      // Loop through our copies
      characters.map((char, idx) => {
        p.scale(1, 1);
        let randomCharPick = Math.random() <= 0.5;

        if (randomCharPick) {
          updateCopies(char, idx);
        }

        if (randomCharPick && p.millis() - previousCountUpdateTime > 3000) {
          updateCharacter(char, idx);
        }

        let countArray = Array.from(Array(char.count).keys());
        countArray = countArray.map(countNumber => {
          return countNumber + 1;
        }); // _________________________________________
        // Duplicate positions

        countArray.map((countNumber, idxx) => {
          let verticalScale = 1 / (char.count * 0.95);
          let duplicateVerticalPosition = char.count == 1 ? H / verticalTranslationWhitespaceCompensation : characterSize / verticalSkewDivisible + characterSize / characterSkewDivisible * idxx; // _________________________________________
          // Make copies

          let copiesArray = Array.from(Array(char.copies).keys()); // let randomCopyPick = Math.random() <= 0.5;

          copiesArray = copiesArray.map(copyNumber => {
            return copyNumber + 1;
          }); // let randomCopyPick = Math.random() <= 0.5;
          // let copyTimer = p.millis() - previousCopiesVisibleTime > 2000;

          previousCopyUpdateTime; // let isFirstCount = true;

          copiesArray.map((copyNumber, idxxx) => {
            // let centerCoordsX = W / 2;
            // let centerCoordsY = H / 2;
            // let horizontalTranslate =
            //   copyNumber !== 1
            //     ? (previousHorizontalTranslation(idx) +
            //         (strokeOffset / (p.mouseX / 100)) * copyNumber)
            //     : previousHorizontalTranslation(idx) +
            //       strokeOffset * copyNumber;
            // let verticalTranslate =
            //   copyNumber !== 1
            //     ? (duplicateVerticalPosition - (strokeOffset / (p.mouseX / 100)) * copyNumber)
            //     : duplicateVerticalPosition - strokeOffset * copyNumber;
            let horizontalTranslate = previousHorizontalTranslation(idx) + strokeOffset * copyNumber;
            let verticalTranslate = duplicateVerticalPosition - strokeOffset * copyNumber;
            p.push();
            p.scale(1, verticalScale);
            p.text(char.letter, horizontalTranslate, verticalTranslate);
            p.pop();
          });
        });
      });
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(W, H);
  };
};

/* harmony default export */ var dharma_water_distort_canvas = __webpack_exports__["default"] = (DharmaCanvasDisplay);

/***/ }),

/***/ "7lpM":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./d1": "Uh2J",
	"./d1.tsx": "Uh2J",
	"./d2": "bUOA",
	"./d2.tsx": "bUOA",
	"./d8": "gOdJ",
	"./d8.js": "gOdJ",
	"./dharma": "QywH",
	"./dharma-as-canvas": "S+6N",
	"./dharma-as-canvas.tsx": "S+6N",
	"./dharma-water-distort.canvas": "1KAc",
	"./dharma-water-distort.canvas.tsx": "1KAc",
	"./dharma.tsx": "QywH",
	"./dharma_v0": "Hjf3",
	"./dharma_v0.tsx": "Hjf3"
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

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "Hjf3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("agJb");
/**
 *
 * Shader fun
 * @author Peter Laxalt
 *
 */
 // Begin Component
// __________________________________________________________________________

const DharmaCanvasDisplay = (W, H, ID, BG) => p => {
  // _________________________________________________
  // Config
  // ____________________________
  // Fonts
  let dharmaFont; // ____________________________
  // Typography

  let text = "LAXALT";
  let splitCharacterArray = text.split("");
  let characters = splitCharacterArray.map((character, idx) => {
    return {
      letter: character,
      count: 1,
      idx: idx,
      copies: 1
    };
  });
  let characterCount = splitCharacterArray.length;
  let characterWidth = W / characterCount; // ____________________________
  // Counts

  let renderCount = 0; // ____________________________
  // Strokes

  let strokeWidth = 2;
  let strokeOffset = strokeWidth * 3; // ____________________________
  // Incrementing
  // let maxCopies = 30;
  // let minCopies = 1;

  let isIncrementing = true;
  isIncrementing; // ____________________________
  // Translation

  let previousVerticalTranslation = H / 2.25;

  const previousHorizontalTranslation = idx => characterWidth * idx + characterWidth / 2 + strokeOffset * renderCount; // let characterVerticalTranslation = 0.963; // Multiplied by the viewBoxHeight
  // let characterVerticalTranslation: number = 0.993; // Multiplied by the viewBoxHeight
  // let characterHorizontalScale: number = 0.75; // Multiplied by the characterWidth
  // let characterVerticalScale: number = 1.38; // Multiplied by the characterWidth
  // _________________________________________________
  // Preload


  p.preload = () => {
    dharmaFont = p.loadFont(`/fonts/dharma/dharma_regular.ttf`);
  }; // _________________________________________________
  // Setup


  p.setup = () => {
    // Our Canvas
    p.createCanvas(W, H);
  }; // _________________________________________________
  // Draw


  p.draw = () => {
    // p.background(BG);
    p.textFont(dharmaFont);
    p.textLeading(0);
    p.textSize(H * 1.25);
    p.textAlign(p.CENTER, p.CENTER);
    p.fill(`${_constants_Theme__WEBPACK_IMPORTED_MODULE_0__[/* Theme */ "a"].Color.Galaxy}`);
    p.strokeWeight(strokeWidth);
    p.stroke(BG);
    p.mouseIsPressed ? renderCount = renderCount + 1 : renderCount = renderCount;

    if (H && W) {
      characters.map((char, idx) => {
        let countArray = Array.from(Array(char.count).keys());
        p.scale(1, .5);

        if (p.mouseIsPressed) {
          return countArray.map((duplicate, idxx) => {
            previousVerticalTranslation = H / 2.25 + strokeOffset * renderCount * -1;
            p.text(char.letter, previousHorizontalTranslation(idx), previousVerticalTranslation);
          });
        } else {
          return countArray.map((duplicate, idxx) => {
            p.text(char.letter, previousHorizontalTranslation(idx), previousVerticalTranslation);
          });
        }
      });
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(W, H);
  };
};

/* harmony default export */ __webpack_exports__["default"] = (DharmaCanvasDisplay);

/***/ }),

/***/ "K4z7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // @ts-ignore

const P5Wrapper = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "nhmZ", 7)), {
  loading: () => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
    children: "Loading..."
  }),
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("nhmZ")],
    modules: ["react-p5-wrapper"]
  }
});

class P5Page extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "renderP5", id => {
      const num = parseInt(id); // @ts-ignore

      const sketch = __webpack_require__("7lpM")(`./d${num}`).default(this.state.windowWidth, this.state.windowHeight); // @ts-ignore


      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(P5Wrapper, {
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
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "container",
      children: this.renderP5("1")
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (P5Page);

/***/ }),

/***/ "Q9BO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SiteNavigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __DEBUG__; });
/* harmony import */ var _styles_Color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/YLk");
/**
 *
 * Settings.js
 * @author Peter Laxalt
 * @description This is the sitewide information that is used throughout the entire
 * build of the site. This goes from SEO to headings and also into the
 * core Gatsby config files as well.
 *
 */
// Imports
//////////////////////////////////////////////////////////////////////

// Begin Component
//////////////////////////////////////////////////////////////////////
const Settings = {
  siteTitle: "Play-Well TEKnologies | LEGO®-inspired engineering classes for kids & adults.",
  siteTitleShort: "Play-Well",
  siteDescription: "Kids are natural engineers. We help them realize it.",
  siteBaseKeywords: "lego, engineering, engineering, classes, summer, camps, spring, learning, learn, play, education, knowledge",
  siteUrl: "https://play-well-staging.netlify.com/",
  themeColor: _styles_Color__WEBPACK_IMPORTED_MODULE_0__[/* Color */ "a"].Primary,
  secondaryColor: _styles_Color__WEBPACK_IMPORTED_MODULE_0__[/* Color */ "a"].Secondary,
  backgroundColor: _styles_Color__WEBPACK_IMPORTED_MODULE_0__[/* Color */ "a"].Background,
  pathPrefix: "/",
  logo: "src/assets/images/icon.png",
  logoLight: "src/assets/images/icon.png",
  logoDark: "src/assets/images/icon.png",
  social: {
    twitter: "PlayWell_TEK",
    facebook: "PlayWellTEK",
    instagram: "playwellteknologies",
    fbAppId: "56639339020281"
  },
  contactPage: "/contact",
  miscPage: "/misc"
};
const SiteNavigation = {
  FrameItems: [{
    label: "Studio",
    href: "/sample"
  }, {
    label: "Art",
    href: "/sample"
  }, {
    label: "Design",
    href: "/sample"
  }, {
    label: "Strategy",
    href: "/sample"
  }, {
    label: "Interactive",
    href: "/sample"
  }, {
    label: "Murals",
    href: "/sample"
  }, {
    label: "Code",
    href: "/sample"
  }, {
    label: "Lab",
    href: "/sample"
  }, {
    label: "Products",
    href: "/sample"
  }, {
    label: "Music",
    href: "/sample"
  }, {
    label: "Tattoo",
    href: "/sample"
  }, {
    label: "Shop",
    href: "/sample"
  }, {
    label: "Resources",
    href: "/sample"
  }, {
    label: "Advice",
    href: "/sample"
  }, {
    label: "Fonts",
    href: "/sample"
  }, {
    label: "Contact",
    href: "/sample"
  }],
  OverlayNav: {
    NavItems: [{
      label: "Art",
      href: "/art",
      caption: "Lorem ipsum"
    }, {
      label: "Design",
      href: "/sample",
      caption: "Lorem ipsum"
    }, {
      label: "Code",
      href: "/code",
      caption: "Lorem ipsum"
    }, {
      label: "Studio",
      href: "/studio",
      caption: "Lorem ipsum"
    }, {
      label: "Thoughts",
      href: "/thoughts",
      caption: "Lorem ipsum"
    } // {
    //   label: "Learn",
    //   href: "/sample",
    //   caption: "Lorem ipsum",
    // },
    // {
    //   label: "Shop",
    //   href: "/sample",
    //   caption: "Lorem ipsum",
    // },
    // {
    //   label: "Contact",
    //   href: "/sample",
    //   caption: "Lorem ipsum",
    // },
    ],
    SocialItems: [{
      label: "Dribbble",
      href: "/"
    }, {
      label: "Github",
      href: "/"
    }, {
      label: "Instagram",
      href: "/"
    }, {
      label: "LinkedIn",
      href: "/"
    }]
  }
};
/**
 *
 * @name __DEBUG__
 * @description Debug mode for console
 *
 */

const __DEBUG__ = true;

/***/ }),

/***/ "QywH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 *
 * Shader fun
 * @author Peter Laxalt
 *
 */
// Begin Component
// __________________________________________________________________________
const DharmaCanvasDisplay = (W, H, ID, DharmaTheme) => p => {
  // _________________________________________________
  // Config
  // ____________________________
  // Fonts
  let dharmaFont; // ____________________________
  // Typography

  let text = "LAXALT";
  let splitCharacterArray = text.split("");
  let characters = splitCharacterArray.map((character, idx) => {
    return {
      letter: character,
      count: 1,
      idx: idx,
      copies: 5,
      copiesLastVisible: 0,
      copiesAreVisible: false,
      countIsIncrementing: true,
      countIsDecrementing: false,
      copiesAreIncrementing: true,
      copiesAreDecrementing: false
    };
  });
  let characterCount = splitCharacterArray.length;
  let characterWidth = W / characterCount;
  let characterSize = H * 1.25;
  console.log(characterSize, "characterSize"); // ____________________________
  // Counts
  // let renderCount: number = 0;

  let previousCountUpdateTime = 0;
  let previousCopyUpdateTime = 0; // ____________________________
  // Strokes

  let strokeWidth = 4;
  let strokeOffset = strokeWidth * 1.5; // ____________________________
  // Limits

  let maxCount = 3;
  let minCount = 1;
  let maxCopies = 12;
  let minCopies = 1;
  let frameRate = 10; // ____________________________
  // Translation
  // let previousVerticalTranslation: number = H / 2.25;

  let verticalTranslationWhitespaceCompensation = 2.25;

  const previousHorizontalTranslation = idx => -60 + (characterWidth * idx + characterWidth / 1.5 + strokeOffset); // _________________________________________________
  // Preload


  p.preload = () => {
    dharmaFont = p.loadFont(`/fonts/dharma/dharma_regular.ttf`);
  }; // _________________________________________________
  // Setup


  p.setup = () => {
    // Our Canvas
    p.createCanvas(W, H);
    p.frameRate(frameRate);
  }; // _________________________________________________
  // Update Character


  const updateCharacter = (char, idx) => {
    if (char.count < maxCount && char.countIsIncrementing) {
      characters[idx] = _objectSpread(_objectSpread({}, char), {}, {
        count: char.count + 1
      });
      previousCountUpdateTime = p.millis();
      return;
    } else if (char.count === maxCount) {
      characters[idx] = _objectSpread(_objectSpread({}, char), {}, {
        count: char.count - 1,
        countIsIncrementing: false,
        countIsDecrementing: true
      });
      previousCountUpdateTime = p.millis();
      return;
    } else if (char.count > minCount && char.countIsDecrementing) {
      characters[idx] = _objectSpread(_objectSpread({}, char), {}, {
        count: char.count - 1,
        countIsDecrementing: true
      });
      previousCountUpdateTime = p.millis();
      return;
    } else if (char.count === minCount && char.countIsDecrementing) {
      characters[idx] = _objectSpread(_objectSpread({}, char), {}, {
        count: char.count + 1,
        countIsIncrementing: true,
        countIsDecrementing: false
      });
      previousCountUpdateTime = p.millis();
      return;
    }

    return;
  }; // _________________________________________________
  // Update Copies


  const updateCopies = (char, idx) => {
    if (char.copies < maxCopies && char.copiesAreIncrementing) {
      characters[idx] = _objectSpread(_objectSpread({}, char), {}, {
        copies: char.copies + 1
      });
      previousCopyUpdateTime = p.millis();
      return;
    } else if (char.copies === maxCopies) {
      characters[idx] = _objectSpread(_objectSpread({}, char), {}, {
        copies: char.copies - 1,
        copiesAreIncrementing: false,
        copiesAreDecrementing: true
      });
      previousCopyUpdateTime = p.millis();
      return;
    } else if (char.copies > minCopies && char.copiesAreDecrementing) {
      characters[idx] = _objectSpread(_objectSpread({}, char), {}, {
        copies: char.copies - 1,
        copiesAreDecrementing: true
      });
      previousCopyUpdateTime = p.millis();
      return;
    } else if (char.copies === minCopies && char.copiesAreDecrementing) {
      characters[idx] = _objectSpread(_objectSpread({}, char), {}, {
        copies: char.copies + 1,
        copiesAreIncrementing: true,
        copiesAreDecrementing: false
      });
      previousCopyUpdateTime = p.millis();
      return;
    }

    return;
  }; // _________________________________________________
  // Draw


  p.draw = () => {
    p.background(DharmaTheme.background);
    p.textFont(dharmaFont);
    p.textSize(characterSize);
    p.textAlign(p.CENTER, p.CENTER);
    p.fill(`${DharmaTheme.foreground}`);
    p.strokeWeight(strokeWidth);
    p.stroke(DharmaTheme.background);

    if (H && W) {
      // _________________________________________
      // Loop through our copies
      characters.map((char, idx) => {
        p.scale(1, 1);
        let randomCharPick = Math.random() <= 0.5;

        if (randomCharPick) {
          updateCopies(char, idx);
        }

        if (randomCharPick && p.millis() - previousCountUpdateTime > 3000) {
          updateCharacter(char, idx);
        }

        let countArray = Array.from(Array(char.count).keys());
        countArray = countArray.map(countNumber => {
          return countNumber + 1;
        }); // _________________________________________
        // Duplicate positions

        countArray.map((countNumber, idxx) => {
          let verticalScale = 1 / (char.count * 0.95);
          let verticalSkewDivisible = 2.75;
          let characterSkewDivisible = 1.36;
          let duplicateVerticalPosition = char.count == 1 ? H / verticalTranslationWhitespaceCompensation : characterSize / verticalSkewDivisible + characterSize / characterSkewDivisible * idxx; // _________________________________________
          // Make copies

          let copiesArray = Array.from(Array(char.copies).keys()); // let randomCopyPick = Math.random() <= 0.5;

          copiesArray = copiesArray.map(copyNumber => {
            return copyNumber + 1;
          }); // let randomCopyPick = Math.random() <= 0.5;
          // let copyTimer = p.millis() - previousCopiesVisibleTime > 2000;

          previousCopyUpdateTime; // let isFirstCount = true;

          copiesArray.map((copyNumber, idxxx) => {
            // let centerCoordsX = W / 2;
            // let centerCoordsY = H / 2;
            // let horizontalTranslate =
            //   copyNumber !== 1
            //     ? (previousHorizontalTranslation(idx) +
            //         (strokeOffset / (p.mouseX / 100)) * copyNumber)
            //     : previousHorizontalTranslation(idx) +
            //       strokeOffset * copyNumber;
            // let verticalTranslate =
            //   copyNumber !== 1
            //     ? (duplicateVerticalPosition - (strokeOffset / (p.mouseX / 100)) * copyNumber)
            //     : duplicateVerticalPosition - strokeOffset * copyNumber;
            let horizontalTranslate = previousHorizontalTranslation(idx) + strokeOffset * copyNumber;
            let verticalTranslate = duplicateVerticalPosition - strokeOffset * copyNumber;
            p.push();
            p.scale(1, verticalScale);
            p.text(char.letter, horizontalTranslate, verticalTranslate);
            p.pop();
          });
        });
      });
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(W, H);
  };
};

/* harmony default export */ __webpack_exports__["default"] = (DharmaCanvasDisplay);

/***/ }),

/***/ "S+6N":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _three_with_canvas_as_texture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("gssh");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 *
 * Shader fun
 * @author Peter Laxalt
 *
 */
 // Begin Component
// __________________________________________________________________________

const DharmaCanvasDisplay = (W, H, ID, DharmaTheme, parentEl) => p => {
  // _________________________________________________
  // Config
  let canvas; // ____________________________
  // Fonts

  let dharmaFont; // ____________________________
  // Typography

  let text = "LAXALT";
  let splitCharacterArray = text.split("");
  let characters = splitCharacterArray.map((character, idx) => {
    return {
      letter: character,
      count: 1,
      idx: idx,
      copies: 5,
      copiesLastVisible: 0,
      copiesAreVisible: false,
      countIsIncrementing: true,
      countIsDecrementing: false,
      copiesAreIncrementing: true,
      copiesAreDecrementing: false
    };
  });
  let characterCount = splitCharacterArray.length;
  let characterWidth = W / characterCount;
  let characterSize = H * 1.25;
  console.log(characterSize, "characterSize"); // ____________________________
  // Counts
  // let renderCount: number = 0;

  let previousCountUpdateTime = 0;
  let previousCopyUpdateTime = 0; // ____________________________
  // Strokes

  let strokeWidth = 4;
  let strokeOffset = strokeWidth * 1.5; // ____________________________
  // Limits

  let maxCount = 3;
  let minCount = 1;
  let maxCopies = 12;
  let minCopies = 1;
  let frameRate = 10; // ____________________________
  // Translation
  // let previousVerticalTranslation: number = H / 2.25;

  let verticalTranslationWhitespaceCompensation = 2.25;

  const previousHorizontalTranslation = idx => -60 + (characterWidth * idx + characterWidth / 1.5 + strokeOffset); // _________________________________________________
  // Preload


  p.preload = () => {
    dharmaFont = p.loadFont(`/fonts/dharma/dharma_regular.ttf`);
  }; // _________________________________________________
  // Setup


  p.setup = () => {
    // Our Canvas
    canvas = p.createCanvas(W, H);
    Object(_three_with_canvas_as_texture__WEBPACK_IMPORTED_MODULE_0__[/* ThreeCanvas */ "a"])(parentEl, canvas.elt, DharmaTheme);
    p.frameRate(frameRate);
  }; // _________________________________________________
  // Update Character


  const updateCharacter = (char, idx) => {
    if (char.count < maxCount && char.countIsIncrementing) {
      characters[idx] = _objectSpread(_objectSpread({}, char), {}, {
        count: char.count + 1
      });
      previousCountUpdateTime = p.millis();
      return;
    } else if (char.count === maxCount) {
      characters[idx] = _objectSpread(_objectSpread({}, char), {}, {
        count: char.count - 1,
        countIsIncrementing: false,
        countIsDecrementing: true
      });
      previousCountUpdateTime = p.millis();
      return;
    } else if (char.count > minCount && char.countIsDecrementing) {
      characters[idx] = _objectSpread(_objectSpread({}, char), {}, {
        count: char.count - 1,
        countIsDecrementing: true
      });
      previousCountUpdateTime = p.millis();
      return;
    } else if (char.count === minCount && char.countIsDecrementing) {
      characters[idx] = _objectSpread(_objectSpread({}, char), {}, {
        count: char.count + 1,
        countIsIncrementing: true,
        countIsDecrementing: false
      });
      previousCountUpdateTime = p.millis();
      return;
    }

    return;
  }; // _________________________________________________
  // Update Copies


  const updateCopies = (char, idx) => {
    if (char.copies < maxCopies && char.copiesAreIncrementing) {
      characters[idx] = _objectSpread(_objectSpread({}, char), {}, {
        copies: char.copies + 1
      });
      previousCopyUpdateTime = p.millis();
      return;
    } else if (char.copies === maxCopies) {
      characters[idx] = _objectSpread(_objectSpread({}, char), {}, {
        copies: char.copies - 1,
        copiesAreIncrementing: false,
        copiesAreDecrementing: true
      });
      previousCopyUpdateTime = p.millis();
      return;
    } else if (char.copies > minCopies && char.copiesAreDecrementing) {
      characters[idx] = _objectSpread(_objectSpread({}, char), {}, {
        copies: char.copies - 1,
        copiesAreDecrementing: true
      });
      previousCopyUpdateTime = p.millis();
      return;
    } else if (char.copies === minCopies && char.copiesAreDecrementing) {
      characters[idx] = _objectSpread(_objectSpread({}, char), {}, {
        copies: char.copies + 1,
        copiesAreIncrementing: true,
        copiesAreDecrementing: false
      });
      previousCopyUpdateTime = p.millis();
      return;
    }

    return;
  }; // _________________________________________________
  // Draw


  p.draw = () => {
    p.background(DharmaTheme.background);
    p.textFont(dharmaFont);
    p.textSize(characterSize);
    p.textAlign(p.CENTER, p.CENTER);
    p.fill(`${DharmaTheme.foreground}`);
    p.strokeWeight(strokeWidth);
    p.stroke(DharmaTheme.background);

    if (H && W) {
      // _________________________________________
      // Loop through our copies
      characters.map((char, idx) => {
        p.scale(1, 1);
        let randomCharPick = Math.random() <= 0.5;

        if (randomCharPick) {
          updateCopies(char, idx);
        }

        if (randomCharPick && p.millis() - previousCountUpdateTime > 3000) {
          updateCharacter(char, idx);
        }

        let countArray = Array.from(Array(char.count).keys());
        countArray = countArray.map(countNumber => {
          return countNumber + 1;
        }); // _________________________________________
        // Duplicate positions

        countArray.map((countNumber, idxx) => {
          let verticalScale = 1 / (char.count * 0.95);
          let verticalSkewDivisible = 2.75;
          let characterSkewDivisible = 1.36;
          let duplicateVerticalPosition = char.count == 1 ? H / verticalTranslationWhitespaceCompensation : characterSize / verticalSkewDivisible + characterSize / characterSkewDivisible * idxx; // _________________________________________
          // Make copies

          let copiesArray = Array.from(Array(char.copies).keys()); // let randomCopyPick = Math.random() <= 0.5;

          copiesArray = copiesArray.map(copyNumber => {
            return copyNumber + 1;
          }); // let randomCopyPick = Math.random() <= 0.5;
          // let copyTimer = p.millis() - previousCopiesVisibleTime > 2000;

          previousCopyUpdateTime; // let isFirstCount = true;

          copiesArray.map((copyNumber, idxxx) => {
            // let centerCoordsX = W / 2;
            // let centerCoordsY = H / 2;
            // let horizontalTranslate =
            //   copyNumber !== 1
            //     ? (previousHorizontalTranslation(idx) +
            //         (strokeOffset / (p.mouseX / 100)) * copyNumber)
            //     : previousHorizontalTranslation(idx) +
            //       strokeOffset * copyNumber;
            // let verticalTranslate =
            //   copyNumber !== 1
            //     ? (duplicateVerticalPosition - (strokeOffset / (p.mouseX / 100)) * copyNumber)
            //     : duplicateVerticalPosition - strokeOffset * copyNumber;
            let horizontalTranslate = previousHorizontalTranslation(idx) + strokeOffset * copyNumber;
            let verticalTranslate = duplicateVerticalPosition - strokeOffset * copyNumber;
            p.push();
            p.scale(1, verticalScale);
            p.text(char.letter, horizontalTranslate, verticalTranslate);
            p.pop();
          });
        });
      });
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(W, H);
  };
};

/* harmony default export */ __webpack_exports__["default"] = (DharmaCanvasDisplay);

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

/***/ "X9qW":
/***/ (function(module, exports) {

module.exports = require("three");

/***/ }),

/***/ "Z3CJ":
/***/ (function(module, exports) {

module.exports = require("postprocessing");

/***/ }),

/***/ "agJb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Theme; });
/* harmony import */ var _site_Settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Q9BO");
/* harmony import */ var _styles_Font__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("e1cB");
/* harmony import */ var _styles_Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("dTP3");
/* harmony import */ var _styles_Color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("/YLk");
/**
 *
 * Theme.js:
 * @author Peter Laxalt
 * @description
 * This file is primarily used to create naming and can also be
 * used to automate some math. Don't forget if you update the other
 * style files to include the export down below here if you want to
 * reference it conveniently in the Theme.js export.
 *
 * @example
 * 1. First import the file.
 * import { Theme } from '../../../path/to/Theme'
 * Use it in your SC: 'color: ${Theme.Color.Primary}; or simply refer to the object and key when used in functions.'
 */
// Imports
// ____________________________________________________________________________________



 // Begin Component
// ____________________________________________________________________________________

const Theme = {
  // General Site Information & Keywords
  Site: _site_Settings__WEBPACK_IMPORTED_MODULE_0__[/* Settings */ "a"],
  // Fonts throughout the app.
  Font: _styles_Font__WEBPACK_IMPORTED_MODULE_1__[/* Font */ "a"],
  // Core measurements throughout the app.
  Base: {
    // Core Base Measurement
    Size: {
      Lg: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Size.Lg + "px",
      Md: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Size.Md + "px",
      Sm: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Size.Sm + "px"
    },
    // Root Element Measurement
    Rem: {
      Lg: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Rem.Lg + "px",
      // px
      Md: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Rem.Md + "px",
      // px
      Sm: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Rem.Sm + "px" // px

    },
    // Responsive Breakpoints
    Media: {
      Width: {
        Lg: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Media.Width.Lg + "px",
        Md: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Media.Width.Md + "px",
        Sm: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Media.Width.Sm + "px"
      },
      Height: {
        Lg: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Media.Height.Lg + "px",
        Md: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Media.Height.Md + "px",
        Sm: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Media.Height.Sm + "px"
      }
    },
    // Site Grid
    Grid: {
      SiteWidth: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Grid.SiteWidth + "px",
      Nav: {
        Size: {
          Lg: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Grid.Nav.Size.Lg + "px",
          Md: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Grid.Nav.Size.Md + "px",
          Sm: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Grid.Nav.Size.Sm + "px"
        }
      },
      Footer: {
        Size: {
          Lg: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Grid.Footer.Size.Lg + "px",
          Md: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Grid.Footer.Size.Md + "px",
          Sm: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Grid.Footer.Size.Sm + "px"
        }
      },
      // Universal padding from the edge of the browser
      // Read more: https://read.compassofdesign.com/guides-gutters-and-grids-2ce6092fc3de
      Gutter: {
        Lg: {
          Top: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Grid.Gutter.Lg.Top + "px",
          Bottom: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Grid.Gutter.Lg.Bottom + "px",
          Right: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Grid.Gutter.Lg.Right + "px",
          Left: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Grid.Gutter.Lg.Left + "px"
        },
        Md: {
          Top: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Grid.Gutter.Md.Top + "px",
          Bottom: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Grid.Gutter.Md.Bottom + "px",
          Right: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Grid.Gutter.Md.Right + "px",
          Left: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Grid.Gutter.Md.Left + "px"
        },
        Sm: {
          Top: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Grid.Gutter.Sm.Top + "px",
          Bottom: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Grid.Gutter.Sm.Bottom + "px",
          Right: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Grid.Gutter.Sm.Right + "px",
          Left: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Grid.Gutter.Sm.Left + "px"
        }
      }
    },
    // View Width (vw) Based Measurements
    ViewWidth: {
      Padding: {
        Sm: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].ViewWidth.Padding.Sm + "vw",
        Md: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].ViewWidth.Padding.Md + "vw",
        Lg: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].ViewWidth.Padding.Lg + "vw"
      }
    },
    // Buttons
    Button: {
      Lg: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Button.Lg + "px",
      Md: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Button.Md + "px",
      Sm: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Button.Sm + "px"
    },
    // Inputs
    Input: {
      Lg: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Input.Lg + "px",
      Md: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Input.Md + "px",
      Sm: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Input.Sm + "px"
    },
    // Transitions
    Transition: {
      String: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Transition.String,
      // seconds
      Duration: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Transition.Duration + "s",
      // seconds
      Ease: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Transition.Ease,
      // Cubic Bezier Ease
      CssEase: "cubic-bezier(" + _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Transition.Ease[0] + ", " + _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Transition.Ease[1] + ", " + _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Transition.Ease[2] + ", " + _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Transition.Ease[3] + ")",
      // Cubic Bezier Ease (CSS String)
      Page: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Transition.Page + "s" // milliseconds. Try to not go lower than 350ms or it gets buggy. TODO.

    },
    // Geometry
    Geometry: {
      Radius: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].Geometry.Radius + "px" // px

    }
  },
  // Core Palette & Colors
  Color: _styles_Color__WEBPACK_IMPORTED_MODULE_3__[/* Color */ "a"],
  // Frame
  FrameSize: _styles_Base__WEBPACK_IMPORTED_MODULE_2__[/* Base */ "a"].FrameSize + "rem"
}; // End Component
// ____________________________________________________________________________________

/***/ }),

/***/ "bUOA":
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
      parseInt(Math.sin(p.mouseX * 0.001) * 50), // @ts-ignore
      parseInt(Math.sin(p.mouseY * 0.001) * 50), // @ts-ignore
      parseInt(Math.sin(p.mouseX * 0.001) * 50));
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

/***/ "dTP3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Base; });
// Base.js:
// Core measurements throughout the app.
// Begin Interface
//////////////////////////////////////////////////////////////////////
const Base = {
  // Core Base Measurement
  Size: {
    Lg: 20,
    Md: 20,
    Sm: 20
  },
  // Root Element Measurement
  Rem: {
    Lg: 14,
    // px
    Md: 16,
    // px
    Sm: 18 // px

  },
  // Responsive Breakpoints
  Media: {
    Width: {
      Lg: 1280,
      // px
      Md: 1024,
      // px
      Sm: 676 // px

    },
    Height: {
      Lg: 828,
      // px
      Md: 640,
      // px
      Sm: 568 // px

    }
  },
  // Site Grid
  Grid: {
    SiteWidth: 1280,
    // px
    ReadingWidth: 1000,
    // px
    Nav: {
      Size: {
        Lg: 50,
        // px
        Md: 50,
        // px
        Sm: 50 // px

      }
    },
    Footer: {
      Size: {
        Lg: 35,
        // px
        Md: 35,
        // px
        Sm: 35 // px

      }
    },
    // Universal padding from the edge of the browser
    // Read more: https://read.compassofdesign.com/guides-gutters-and-grids-2ce6092fc3de
    Gutter: {
      Lg: {
        Top: 20,
        // px
        Bottom: 20,
        // px
        Right: 20,
        // px
        Left: 20 // px

      },
      Md: {
        Top: 45,
        // px
        Bottom: 45,
        // px
        Right: 20,
        // px
        Left: 20 // px

      },
      Sm: {
        Top: 20,
        // px
        Bottom: 20,
        // px
        Right: 15,
        // px
        Left: 15 // px

      }
    },
    Indent: {
      Lg: {
        X: 175,
        // px
        Y: 20 // px

      },
      Md: {
        X: 0,
        // px
        Y: 10 // px

      },
      Sm: {
        X: 0,
        // px
        Y: 0 // px

      }
    }
  },
  // View Width (vw) Based Measurements
  ViewWidth: {
    Padding: {
      Sm: "4.5",
      // vw
      Md: "4.5",
      // vw
      Lg: "1.2" // vw

    }
  },
  // Buttons
  Button: {
    Lg: 35,
    // px
    Md: 35,
    // px
    Sm: 35 // px

  },
  // Inputs
  Input: {
    Lg: 44,
    // px
    Md: 35,
    // px
    Sm: 35 // px

  },
  // Transitions
  Transition: {
    String: "all 0.25s ease",
    Duration: 0.25,
    // seconds
    Ease: [0.29, 0.77, 0.57, 0.85],
    // Cubic Bezier Ease
    Page: 2000 // milliseconds. Try to not go lower than 350ms or it gets buggy. TODO.

  },
  // Geometry
  Geometry: {
    Radius: 15 // px

  },
  // Frame
  FrameSize: 3 // rem

}; // End Component
//////////////////////////////////////////////////////////////////////

/***/ }),

/***/ "e1cB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Font; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Typography; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dTP3");
/* eslint-disable */
// Font.js:
// This is the sitewide font reference.


const Font = {
  Body: `'Neue Haas Grotesk Text Pro', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  Code: `"Dank Mono", "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace`,
  Header: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  // Header: `"Cera Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  // Body: `"Brown", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  // Code: `"SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace`,
  Size: {
    Sm: "1rem",
    Md: "1rem",
    Lg: "1rem",
    ViewWidth: {
      Sm: "6.8vw",
      Md: "5.2vw",
      Lg: "1.2vw"
    },
    ViewHeight: {
      Sm: "6.8vh",
      Md: "5.2vh",
      Lg: "2vh"
    }
  },
  Icon: {
    Size: {
      Sm: "8.5vw",
      Md: "8.5vw",
      Lg: "1.7vw"
    }
  }
}; // Global Type Styles

const Typography = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`

  /* Base Text Styles */
  body {
    line-height: 1;
    font-size: 1rem;
    font-family: ${Font.Body};
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: geometricPrecision;
    -webkit-font-feature-settings: "pnum";
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
  }

  @font-face {
    font-family: "dharma";
    src: url("/fonts/dharma/dharma_regular.eot"); /* IE9*/
    src: url("/fonts/dharma/dharma_regular.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
    url("/fonts/dharma/dharma_regular.woff2") format("woff2"), /* chrome firefox */
    url("/fonts/dharma/dharma_regular.woff") format("woff"), /* chrome firefox */
    url("/fonts/dharma/dharma_regular.ttf") format("truetype"), /* chrome firefox opera Safari, Android, iOS 4.2+*/
    url("/fonts/dharma/dharma_regular.svg#DharmaGothicCW01-Regular") format("svg"); /* iOS 4.1- */
  }

  /* Paragraph Styles */
  p {
    font-family: ${Font.Body};
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: -0.2px;
    padding-bottom: calc(var(--Size) / 3.5);

    &.lead {
      font-size: 1.4rem;
      @media (max-width: ${_Base__WEBPACK_IMPORTED_MODULE_1__[/* Base */ "a"].Media.Width.Md + "px"}) {
        font-size: 1.2rem;
      }
    }
  }

  .p-sm {
    font-family: ${Font.Body};
    line-height: 1.2;
    font-size: 0.9rem;
    letter-spacing: -0.2px;
  }

  .p-lg {
    font-family: ${Font.Body};
    line-height: 1.4;
    font-size: 1.2rem;
    letter-spacing: -0.2px;
  }

  /* Header Styles */
  h1, h2, h3, h4, h5, h6, .headline {
    font-family: ${Font.Header};
    line-height: 1.1;
    padding: 0;
    margin: 0;
    letter-spacing: -0.2px;
  }

  h1, .h1 {
    font-size: 4rem;
    @media (max-width: ${_Base__WEBPACK_IMPORTED_MODULE_1__[/* Base */ "a"].Media.Width.Md + "px"}) {
      font-size: 2rem;
    }
  }
  h2, .h2 {
    font-size: 3rem;
    @media (max-width: ${_Base__WEBPACK_IMPORTED_MODULE_1__[/* Base */ "a"].Media.Width.Md + "px"}) {
      font-size: 2rem;
    }
  }
  h3, .h3 {
    font-size: 2.5rem;
    @media (max-width: ${_Base__WEBPACK_IMPORTED_MODULE_1__[/* Base */ "a"].Media.Width.Md + "px"}) {
      font-size: 2rem;
    }
  }
  h4, .h4 {
    font-size: 2rem;
  }
  h5, .h5 {
    font-size: 1.75rem;
    @media (max-width: ${_Base__WEBPACK_IMPORTED_MODULE_1__[/* Base */ "a"].Media.Width.Md + "px"}) {
      font-size: 1rem;
    }
  }
  h6, .h6 {
    font-size: 1.5rem;
    @media (max-width: ${_Base__WEBPACK_IMPORTED_MODULE_1__[/* Base */ "a"].Media.Width.Md + "px"}) {
      font-size: 1.1rem;
    }
  }

  .headline {
    font-size: 7.25rem;
    @media (max-width: ${_Base__WEBPACK_IMPORTED_MODULE_1__[/* Base */ "a"].Media.Width.Md + "px"}) {
      font-size: 4rem;
    }
    @media (max-width: ${_Base__WEBPACK_IMPORTED_MODULE_1__[/* Base */ "a"].Media.Width.Sm + "px"}) {
      font-size: 3.5rem;
    }
  }

  h1, h2, h3, h4, h5, h6, p, .heading-padding { padding-bottom: calc(var(--Size) / 3.5); }
`;

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

/***/ "gssh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreeCanvas; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("X9qW");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_site_Settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Q9BO");


const ThreeCanvas = (container, CanvasElement, CanvasTheme) => {
  _constants_site_Settings__WEBPACK_IMPORTED_MODULE_1__[/* __DEBUG__ */ "c"] && console.log("🤙 Three.js Canvas received:", CanvasElement);
  let camera, scene, renderer, mesh, material, sketch;
  init();
  setupCanvasDrawing();
  animate();

  function init() {
    camera = new three__WEBPACK_IMPORTED_MODULE_0__["PerspectiveCamera"](50, window.innerWidth / window.innerHeight, 1, 6000);
    camera.position.z = 500;
    sketch = container;
    scene = new three__WEBPACK_IMPORTED_MODULE_0__["Scene"]();
    material = new three__WEBPACK_IMPORTED_MODULE_0__["MeshBasicMaterial"]();
    mesh = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](new three__WEBPACK_IMPORTED_MODULE_0__["BoxBufferGeometry"](350, 350, 350), material);
    scene.add(mesh);
    renderer = new three__WEBPACK_IMPORTED_MODULE_0__["WebGLRenderer"]({
      antialias: true,
      alpha: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    sketch.appendChild(renderer.domElement);
    scene.background = new three__WEBPACK_IMPORTED_MODULE_0__["Color"](0x000000);
    window.addEventListener("resize", onWindowResize, false);
  } // Sets up the drawing canvas and adds it as the material map


  function setupCanvasDrawing() {
    // get canvas and context
    // const drawingCanvas: HTMLCanvasElement = document.getElementById(
    //   "drawing-canvas"
    // ) as HTMLCanvasElement;
    // const drawingContext = drawingCanvas.getContext("2d");
    // // draw white background
    // drawingContext.fillStyle = "blue";
    // drawingContext.fillRect(0, 0, 128, 128);
    // // set canvas as material.map (this could be done to any map, bump, displacement etc.)
    material.map = new three__WEBPACK_IMPORTED_MODULE_0__["CanvasTexture"](CanvasElement); // // set the variable to keep track of when to draw
    // let paint = false;
    // // add canvas event listeners
    // drawingCanvas.addEventListener("pointerdown", function (e) {
    //   paint = true;
    //   drawStartPos.set(e.offsetX, e.offsetY);
    // });
    // drawingCanvas.addEventListener("pointermove", function (e) {
    //   if (paint) draw(drawingContext, e.offsetX, e.offsetY);
    // });
    // drawingCanvas.addEventListener("pointerup", function () {
    //   paint = false;
    // });
    // drawingCanvas.addEventListener("pointerleave", function () {
    //   paint = false;
    // });
  } // function draw(drawContext, x, y) {
  //   drawContext.moveTo(drawStartPos.x, drawStartPos.y);
  //   drawContext.strokeStyle = "#000000";
  //   drawContext.lineTo(x, y);
  //   drawContext.stroke();
  //   // reset drawing start position to current position.
  //   drawStartPos.set(x, y);
  //   // need to flag the map as needing updating.
  //   material.map.needsUpdate = true;
  // }


  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    material.map.needsUpdate = true;
    renderer.render(scene, camera);
  }
};

/***/ }),

/***/ "nhmZ":
/***/ (function(module, exports) {

module.exports = require("react-p5-wrapper");

/***/ })

/******/ });