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

/***/ "/YLk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Palette; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
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
  Primary: "#111b24",
  Secondary: "#5D6376",
  Background: "#ff988c",
  Text: "#111b24",
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
  White: "#FFFFFF",
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
  Warning: "#FC6376",
  Success: "#40DA33"
};
const Palette = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  ::-moz-selection { background: ${Color.Primary}; color: ${Color.White} }
  ::selection { background: ${Color.Primary}; color: ${Color.White} }

  :root {
    --clrPrimary: ${Color.Primary};
    --clrSecondary: ${Color.Secondary};
    --clrBackground: ${Color.Background};
    --clrForeground: ${Color.Text};
  }
`; //////////////////////////////////////////////////////////////////////
// End Component

/***/ }),

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "49Hi":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./d1": "Uh2J",
	"./d1.tsx": "Uh2J",
	"./d2": "bUOA",
	"./d2.tsx": "bUOA",
	"./d8": "gOdJ",
	"./d8.js": "gOdJ",
	"./dharma": "QywH",
	"./dharma.tsx": "QywH",
	"./dharma_v0": "Hjf3",
	"./dharma_v0.tsx": "Hjf3",
	"./glsl": "iRSi",
	"./glsl.tsx": "iRSi"
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
webpackContext.id = "49Hi";

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "59zH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CssUtils; });
/* unused harmony export LockBodyScroll */
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vYYK");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("agJb");
/* harmony import */ var _Root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("io+v");

// Core
 // Constants


 // Begin Component
// __________________________________________________________________________________________

/**
 *
 * @name CssUtils
 * @description CSS Utility functions. Just like SCSS mixins.
 * @returns A plethora of useful CSS.
 *
 */

class CssUtils {}

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(CssUtils, "ObjectFit", (position = "cover") => {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["position:absolute;left:0;right:0;top:0;bottom:0;object-fit:", ";width:100%;height:100%;object-position:center;max-width:100%;"], position);
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(CssUtils, "ForceFullWidth", (spacing = "0", addGutter = false) => {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["width:calc(100% + (", " * 2));margin-left:calc(", " * -1);margin-right:calc(", " * -1);max-width:100vw;", ""], spacing, spacing, spacing, addGutter ? Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["padding-left:", ";padding-right:", ";"], spacing, spacing) : null);
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(CssUtils, "CreateTheme", (clrPrimary, clrSecondary, clrBackground, clrForeground) => {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])([":root{--clrPrimary:", ";--clrSecondary:", ";--clrBackground:", ";--clrForeground:", ";}"], clrPrimary, clrSecondary, clrBackground, clrForeground);
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(CssUtils, "DisableUserSelect", () => {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;"]);
});

const LockBodyScroll = styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"]`
    body, html {
      overflow: hidden !important;
    }
  `;

/***/ }),

/***/ "6BQ9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wa65");

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("nw9M");


/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "Hjf3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d04V");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("agJb");


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
    p.fill(`${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.Galaxy}`);
    p.strokeWeight(strokeWidth);
    p.stroke(BG);
    p.mouseIsPressed ? renderCount = renderCount + 1 : renderCount = renderCount;

    if (H && W) {
      characters.map((char, idx) => {
        let countArray = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(Array(char.count).keys());

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

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "O5GZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js
var object_assign = __webpack_require__("UXZV");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js

function _extends() {
  _extends = assign_default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/from.js
var from = __webpack_require__("d04V");
var from_default = /*#__PURE__*/__webpack_require__.n(from);

// EXTERNAL MODULE: ./constants/Theme.tsx + 1 modules
var Theme = __webpack_require__("agJb");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./constants/Root.tsx
var Root = __webpack_require__("io+v");

// EXTERNAL MODULE: ./constants/styles/CssUtils.tsx
var CssUtils = __webpack_require__("59zH");

// CONCATENATED MODULE: ./components/_svg/DharmaType/styles.scss.tsx
// Imports
// _________________________________________________________________________
// Core
 // Constants



 // Begin Styles
// _________________________________________________________________________

/**
 *
 * @name DharmaTypeClassName
 * @description The root class name for styling. BEM naming conventions.
 *
 */

const DharmaTypeClassName = "dharma-type";
/**
 *
 * @name DharmaTypeStyle
 * @author Peter Laxalt
 *
 */

const DharmaTypeStyle = external_styled_components_default.a.svg.withConfig({
  displayName: "stylesscss__DharmaTypeStyle",
  componentId: "lgdyqd-0"
})(["&.", "{.", "__character-wrapper{position:relative;&[data-char-id=\"5\"]{transform:translateX(2.25px);}&[data-char-id=\"4\"]{transform:translateX(5.25px);}&[data-char-id=\"3\"]{transform:translateX(3.25px);}&[data-char-id=\"2\"]{transform:translateX(0.75px);}&[data-char-id=\"1\"]{transform:translateX(-1.5px);}&[data-char-id=\"0\"]{transform:translateX(0px);}&--hidden{display:none;}}.", "__character{font-size:var(--", "-font-size);font-family:dharma;font-weight:700;letter-spacing:0em;", ";}.", "__text{font-size:var(--", "-font-size);font-family:DharmaGothicC-ExBold,Dharma Gothic C;font-weight:700;letter-spacing:0em;transition:filter 1s ease-in-out;will-change:filter;}}"], DharmaTypeClassName, DharmaTypeClassName, DharmaTypeClassName, DharmaTypeClassName, CssUtils["a" /* CssUtils */].DisableUserSelect(), DharmaTypeClassName, DharmaTypeClassName);
// CONCATENATED MODULE: ./components/_interactive/DharmaCounter/DharmaCounter.tsx


var __jsx = external_react_default.a.createElement;
// Core


 // Begin Types
// __________________________________________________________________________________________

// Begin Component
// __________________________________________________________________________________________

/**
 * @name DharmaCounter
 * @author Peter Laxalt
 *
 */
class DharmaCounter_DharmaCounter extends external_react_default.a.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      characters: [],
      viewBoxHeight: 0,
      viewBoxWidth: 0,
      characterWidth: 0,
      offsetCount: 3,
      characterVerticalTranslation: 0,
      characterHorizontalScale: 0,
      characterVerticalScale: 0,
      isInitialized: false
    };
    this.incrementLetterCount = this.incrementLetterCount.bind(this);
    this.decrementLetterCount = this.decrementLetterCount.bind(this);
    this.resetLetterCount = this.resetLetterCount.bind(this);
    this.updateLetterCount = this.updateLetterCount.bind(this);
    this.letterCountTimer = this.letterCountTimer.bind(this);
    this.offsetCountTimer = this.offsetCountTimer.bind(this);
    this.incrementOffsetCount = this.incrementOffsetCount.bind(this);
  }

  componentDidMount() {
    if (this.props.text) {
      // ____________________________________________
      // Get text / create array
      let {
        text
      } = this.props;
      let splitCharacterArray = text.split("");
      let characterArray = splitCharacterArray.map((character, idx) => {
        return {
          letter: character,
          count: 1,
          idx: idx,
          copies: Math.random() <= 0.5
        };
      }); // ____________________________________________
      // USE THESE TO TWEAK YOUR CHARACTERS TO FIT

      let viewBoxHeight = 100;
      let viewBoxWidth = 100;
      let characterCount = splitCharacterArray.length;
      let characterWidth = viewBoxWidth / characterCount; // let characterVerticalTranslation = 0.963; // Multiplied by the viewBoxHeight

      let characterVerticalTranslation = 0.993; // Multiplied by the viewBoxHeight

      let characterHorizontalScale = 0.75; // Multiplied by the characterWidth

      let characterVerticalScale = 1.38; // Multiplied by the characterWidth

      this.setState({
        text: text,
        characters: characterArray,
        viewBoxHeight: viewBoxHeight,
        viewBoxWidth: viewBoxWidth,
        characterWidth: characterWidth,
        characterHorizontalScale: characterHorizontalScale,
        characterVerticalScale: characterVerticalScale,
        characterVerticalTranslation: characterVerticalTranslation,
        isInitialized: true
      });
      this.letterCountTimer();
      this.offsetCountTimer();
    }
  }

  incrementLetterCount(id) {
    this.setState({
      characters: this.state.characters.map((character, idx) => {
        return {
          letter: character.letter,
          count: id == character.idx ? character.count + 1 : character.count,
          idx: idx,
          copies: Math.random() <= 0.5
        };
      })
    });
    return;
  }

  decrementLetterCount(id) {
    this.setState({
      characters: this.state.characters.map((character, idx) => {
        return {
          letter: character.letter,
          count: id == character.idx ? character.count - 1 : character.count,
          idx: idx,
          copies: Math.random() <= 0.5
        };
      })
    });
    return;
  }

  resetLetterCount(id) {
    this.setState({
      characters: this.state.characters.map((character, idx) => {
        return {
          letter: character.letter,
          count: id == character.idx ? 1 : character.count,
          idx: idx,
          copies: Math.random() <= 0.5
        };
      })
    });
    return;
  }

  updateLetterCount(id) {
    if (this.state.characters && this.state.characters.length > 0) {
      let matchedCharacter = this.state.characters.filter(character => character.idx == id)[0];
      let maxCount = 4;

      if (matchedCharacter) {
        if (matchedCharacter.count === maxCount) {
          this.resetLetterCount(id);
        } else {
          this.incrementLetterCount(id);
        }
      } else {
        return;
      }
    } else {
      return;
    }

    return;
  }

  letterCountTimer() {
    function generateRandomInteger(min, max) {
      return Math.floor(min + Math.random() * (max + 1 - min));
    }

    window.setInterval(() => this.updateLetterCount(generateRandomInteger(0, this.state.characters.length)), 3000);
  }

  incrementOffsetCount() {
    this.setState({
      offsetCount: this.state.offsetCount < 15 ? this.state.offsetCount + 1 : 2
    });
    return;
  }

  offsetCountTimer() {
    window.setInterval(() => this.incrementOffsetCount(), 5000);
  }

  render() {
    let offsetCount = this.state.offsetCount;

    var offsetArr = from_default()(Array(offsetCount).keys());

    return __jsx(external_react_default.a.Fragment, null, __jsx(DharmaCounterDisplay, _extends({
      updateLetterCount: this.updateLetterCount
    }, this.state)), offsetArr.map((n, idx) => {
      return __jsx(DharmaCounterDisplay, _extends({
        outlined: true,
        offset: n,
        key: idx,
        updateLetterCount: this.updateLetterCount
      }, this.state));
    }));
  }

}

const DharmaCounterDisplay = props => {
  let {
    viewBoxHeight,
    viewBoxWidth,
    characters,
    characterWidth,
    characterHorizontalScale,
    characterVerticalScale,
    characterVerticalTranslation,
    updateLetterCount,
    offset,
    outlined,
    addClass
  } = props;
  return __jsx(DharmaTypeStyle, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: `0 0 ${viewBoxWidth} ${viewBoxHeight}`,
    preserveAspectRatio: "none",
    className: `${DharmaTypeClassName} ${DharmaTypeClassName}--counter ${offset ? `${DharmaTypeClassName}--offset` : ""} ${addClass}`,
    style: {
      [`--${DharmaTypeClassName}-font-size`]: `${viewBoxHeight}px`,
      [`--${DharmaTypeClassName}-offset`]: `${offset ? offset : 0}`
    }
  }, __jsx("g", null, characters.map((char, idx) => {
    let countArray = from_default()(Array(char.count).keys());

    return countArray.map((duplicate, idxx) => {
      let adjustedDuplicate = char.count > 1 ? char.count : duplicate + 1;
      let canCopy = Math.random() <= 0.5;
      let adjustedVerticalTranslation = viewBoxHeight / adjustedDuplicate * (idxx + 1) * characterVerticalTranslation;
      let adjustedVerticalScale = characterVerticalScale / adjustedDuplicate;
      return __jsx("g", {
        className: `${DharmaTypeClassName}__character-wrapper`,
        "data-char-id": idx,
        "data-char-count": duplicate,
        key: idxx,
        onClick: () => updateLetterCount(idx),
        style: {
          display: outlined && char.copies && canCopy ? "none" : "inherit"
        }
      }, __jsx("filter", {
        id: `displacementFilter__${idx}__${idxx}${outlined ? "__outlined" : ""}`
      }, !outlined && __jsx(external_react_default.a.Fragment, null, __jsx("feTurbulence", {
        type: "turbulence" // baseFrequency={0.6 * (idxx * 0.05)}
        // numOctaves={1 * (idxx + 20)}
        ,
        baseFrequency: 0,
        numOctaves: 0,
        result: "turbulence"
      }), __jsx("feDisplacementMap", {
        in2: "turbulence",
        in: "SourceGraphic" // scale={3 - idxx * 0.5}
        ,
        scale: 0,
        xChannelSelector: "R",
        yChannelSelector: "G"
      })), outlined && __jsx(external_react_default.a.Fragment, null, __jsx("feFlood", {
        "flood-color": Theme["a" /* Theme */].Color.varBackground,
        "flood-opacity": "1",
        result: "PINK"
      }), __jsx("feMorphology", {
        in: "SourceAlpha",
        result: "DILATED",
        operator: "dilate",
        radius: ".1"
      }), __jsx("feComposite", {
        in: "PINK",
        in2: "DILATED",
        operator: "in",
        result: "OUTLINE"
      }), __jsx("feMerge", null, __jsx("feMergeNode", {
        in: "OUTLINE"
      }), __jsx("feMergeNode", {
        in: "SourceGraphic"
      })))), __jsx("text", {
        className: `${DharmaTypeClassName}__character`,
        transform: `translate(${characterWidth * idx} ${adjustedVerticalTranslation}) scale(${characterHorizontalScale}, ${adjustedVerticalScale})`,
        style: {
          [`--${DharmaTypeClassName}-key`]: idx,
          filter: `url(#displacementFilter__${idx}__${idxx}${outlined ? "__outlined" : ""})`
        }
      }, __jsx("tspan", {
        className: `${DharmaTypeClassName}__letter`
      }, char.letter)));
    });
  })));
};
// CONCATENATED MODULE: ./components/_interactive/DharmaCounter/index.tsx

// CONCATENATED MODULE: ./components/_interactive/InteractiveFrameHeader/styles.scss.tsx
// Imports
// _________________________________________________________________________
// Core
 // Constants




 // Begin Styles
// _________________________________________________________________________

/**
 *
 * @name InteractiveFrameHeaderClassName
 * @description The root class name for styling. BEM naming conventions.
 *
 */

const InteractiveFrameHeaderClassName = "interactive-frame-header";
/**
 *
 * @name InteractiveFrameHeaderStyle
 * @author Peter Laxalt
 *
 */

const InteractiveFrameHeaderStyle = external_styled_components_default.a.div.withConfig({
  displayName: "stylesscss__InteractiveFrameHeaderStyle",
  componentId: "tg0k5n-0"
})(["&.", "{--", "__frame-edge-size:", ";--", "__marquee-speed:60s;@media(max-width:", "){--", "__frame-edge-size:", ";}overflow:hidden;position:fixed;left:0;top:0;width:100vw;height:100vh;.", "__inner{width:100vw;height:100vh;position:relative;}.", ",.", "__frame{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;}.", "__type{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:calc(100% - (var(--", "__frame-edge-size) * 2));height:calc(100% - (var(--", "__frame-edge-size) * 2.25));@media(max-width:", "){transform:translate(-50%,-50%) rotate(90deg);width:calc(100vh - (var(--", "__frame-edge-size) * 2.25));height:calc(100vw - (var(--", "__frame-edge-size) * 2.25));}.", "{--", "-offset-size:10px;@media(max-width:", "){--", "-offset-size:5px;}top:0;left:0;right:0;bottom:0;width:100%;height:100%;&--offset{top:calc(var(--", "-offset-size) * (var(--", "-offset) * -1));left:calc(var(--", "-offset-size) * (var(--", "-offset) * 1));right:calc(var(--", "-offset-size) * (var(--", "-offset) * -1));bottom:calc(var(--", "-offset-size) * (var(--", "-offset) * 1));}}.", "__character{fill:", ";transition:stroke-width .5s ease;}}.", "__frame{z-index:500;&__y-axis,&__x-axis{position:absolute;overflow:hidden;left:50%;top:50%;pointer-events:none;}&__y-axis{width:100vw;height:100vh;transform:translate(-50%,-50%);}&__x-axis{width:100vh;height:100vw;transform:translate(-50%,-50%) rotate(90deg);}&__edge{font-size:calc(var(--", "__frame-edge-size) * 0.75);text-transform:uppercase;line-height:0;z-index:800;background:", ";.", "__frame-items{list-style-type:none;color:", ";height:var(--", "__frame-edge-size);display:block;align-items:center;justify-content:flex-start;li{margin-right:calc(var(--", "__frame-edge-size) / 2);}}.", "__marquee-container{flex-shrink:0;display:flex;justify-content:flex-start;flex-wrap:nowrap;position:relative;overflow:hidden;.", "__frame-items{display:flex;flex-wrap:nowrap;white-space:nowrap;flex-shrink:0;li{width:auto;flex-shrink:0;white-space:nowrap;vertical-align:middle;display:table-cell;}}}&--top,&--bottom,&--left,&--right{position:absolute;overflow:hidden;pointer-events:all;}&--top,&--right{border-bottom:1px solid ", ";.", "__frame-items{padding-top:calc(var(--", "__frame-edge-size) / 6);padding-bottom:calc(var(--", "__frame-edge-size) / 6);position:relative;animation:marqueeTopRightQuadrants var(--", "__marquee-speed) linear infinite;}}&--bottom,&--left{border-top:1px solid ", ";.", "__frame-items{padding-top:calc(var(--", "__frame-edge-size) / 6);padding-bottom:calc(var(--", "__frame-edge-size) / 6);animation:marqueeBottomLeftQuadrants var(--", "__marquee-speed) linear infinite;}}&--top,&--bottom{width:calc(100vw - var(--", "__frame-edge-size));}&--left,&--right{width:calc(100vh - var(--", "__frame-edge-size));}&--top{top:0;left:var(--", "__frame-edge-size);}&--bottom{bottom:0;right:var(--", "__frame-edge-size);}&--right{top:0;left:var(--", "__frame-edge-size);}&--left{bottom:0;left:0;}}}}"], InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, Root["a" /* Root */].FrameSize, InteractiveFrameHeaderClassName, Theme["a" /* Theme */].Base.Media.Width.Md, InteractiveFrameHeaderClassName, Root["a" /* Root */].FrameSize, InteractiveFrameHeaderClassName, DharmaTypeClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, Theme["a" /* Theme */].Base.Media.Width.Sm, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, DharmaTypeClassName, DharmaTypeClassName, Theme["a" /* Theme */].Base.Media.Width.Sm, DharmaTypeClassName, DharmaTypeClassName, DharmaTypeClassName, DharmaTypeClassName, DharmaTypeClassName, DharmaTypeClassName, DharmaTypeClassName, DharmaTypeClassName, DharmaTypeClassName, DharmaTypeClassName, Theme["a" /* Theme */].Color.varForeground, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, Theme["a" /* Theme */].Color.varBackground, InteractiveFrameHeaderClassName, Theme["a" /* Theme */].Color.varForeground, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, Theme["a" /* Theme */].Color.varForeground, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, Theme["a" /* Theme */].Color.varForeground, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName);
// CONCATENATED MODULE: ./components/_interactive/InteractiveFrameHeader/InteractiveFrameHeader.tsx
var InteractiveFrameHeader_jsx = external_react_default.a.createElement;
// Core
 // Components

 // Styles

 // Begin Types
// __________________________________________________________________________________________

// Begin Data
// __________________________________________________________________________________________
const FrameItems = () => {
  let items = [{
    label: "Studio",
    href: "/"
  }, {
    label: "Art",
    href: "/"
  }, {
    label: "Design",
    href: "/"
  }, {
    label: "Strategy",
    href: "/"
  }, {
    label: "Interactive",
    href: "/"
  }, {
    label: "Murals",
    href: "/"
  }, {
    label: "Code",
    href: "/"
  }, {
    label: "Products",
    href: "/"
  }, {
    label: "Music",
    href: "/"
  }, {
    label: "Tattoo",
    href: "/"
  }, {
    label: "eCommerce",
    href: "/"
  }, {
    label: "Advice",
    href: "/"
  }, {
    label: "Fonts",
    href: "/"
  }];
  return InteractiveFrameHeader_jsx("div", {
    className: `${InteractiveFrameHeaderClassName}__marquee-container`
  }, InteractiveFrameHeader_jsx("ul", {
    className: `${InteractiveFrameHeaderClassName}__frame-items`
  }, items.map((item, idx) => {
    return InteractiveFrameHeader_jsx("li", {
      key: idx
    }, item.label);
  })), InteractiveFrameHeader_jsx("ul", {
    className: `${InteractiveFrameHeaderClassName}__frame-items`
  }, items.map((item, idx) => {
    return InteractiveFrameHeader_jsx("li", {
      key: idx
    }, item.label);
  })));
}; // Begin Component
// _________________________________________________________________________________________

/**
 *
 * @name InteractiveFrameHeader
 * @author Peter Laxalt
 *
 */


const InteractiveFrameHeader = ({
  includeType
}) => InteractiveFrameHeader_jsx(InteractiveFrameHeaderStyle, {
  className: `${InteractiveFrameHeaderClassName}`
}, InteractiveFrameHeader_jsx("div", {
  className: `${InteractiveFrameHeaderClassName}__inner`
}, InteractiveFrameHeader_jsx("div", {
  className: `${InteractiveFrameHeaderClassName}__frame`
}, InteractiveFrameHeader_jsx("div", {
  className: `${InteractiveFrameHeaderClassName}__frame__y-axis`
}, InteractiveFrameHeader_jsx("div", {
  className: `${InteractiveFrameHeaderClassName}__frame__edge ${InteractiveFrameHeaderClassName}__frame__edge--top`
}, InteractiveFrameHeader_jsx(FrameItems, null)), InteractiveFrameHeader_jsx("div", {
  className: `${InteractiveFrameHeaderClassName}__frame__edge ${InteractiveFrameHeaderClassName}__frame__edge--bottom`
}, InteractiveFrameHeader_jsx(FrameItems, null))), InteractiveFrameHeader_jsx("div", {
  className: `${InteractiveFrameHeaderClassName}__frame__x-axis`
}, InteractiveFrameHeader_jsx("div", {
  className: `${InteractiveFrameHeaderClassName}__frame__edge ${InteractiveFrameHeaderClassName}__frame__edge--left`
}, InteractiveFrameHeader_jsx(FrameItems, null)), InteractiveFrameHeader_jsx("div", {
  className: `${InteractiveFrameHeaderClassName}__frame__edge ${InteractiveFrameHeaderClassName}__frame__edge--right`
}, InteractiveFrameHeader_jsx(FrameItems, null)))), includeType ? InteractiveFrameHeader_jsx("div", {
  className: `${InteractiveFrameHeaderClassName}__type`
}, InteractiveFrameHeader_jsx(DharmaCounter_DharmaCounter, {
  text: "LAXALT"
})) : null)); // End Component
// ______________________________________________________________________________
// CONCATENATED MODULE: ./components/_interactive/InteractiveFrameHeader/index.tsx
/* concated harmony reexport InteractiveFrameHeader */__webpack_require__.d(__webpack_exports__, "a", function() { return InteractiveFrameHeader; });


/***/ }),

/***/ "QTVn":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "QywH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2Eek");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("XoMD");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Jo+v");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4mXO");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("pLtp");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("d04V");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("vYYK");
/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("agJb");









function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }

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
      copies: 5,
      isIncrementing: true,
      isDecrementing: false
    };
  });
  let characterCount = splitCharacterArray.length;
  let characterWidth = W / characterCount;
  let characterSize = H * 1.25;
  console.log(characterSize, "characterSize"); // ____________________________
  // Counts
  // let renderCount: number = 0;

  let previousTime = 0; // ____________________________
  // Strokes

  let strokeWidth = 4;
  let strokeOffset = strokeWidth * 1.5; // ____________________________
  // Incrementing

  let maxCount = 6;
  let minCount = 1; // ____________________________
  // Translation
  // let previousVerticalTranslation: number = H / 2.25;

  let verticalTranslationWhitespaceCompensation = 2.25;

  const previousHorizontalTranslation = idx => -60 + (characterWidth * idx + characterWidth / 1.5 + strokeOffset); // const previousHorizontalTranslation = (idx: number) =>
  //   characterWidth * idx + characterWidth / 2 + strokeOffset * renderCount;
  // let characterVerticalTranslation = 0.963; // Multiplied by the viewBoxHeight
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
  // Update Character


  const updateCharacter = (char, idx) => {
    if (char.count < maxCount && char.isIncrementing) {
      characters[idx] = _objectSpread({}, char, {
        count: char.count + 1
      });
      previousTime = p.millis();
    } else if (char.count === maxCount) {
      characters[idx] = _objectSpread({}, char, {
        count: char.count - 1,
        isIncrementing: false,
        isDecrementing: true
      });
      previousTime = p.millis();
    } else if (char.count > minCount && char.isDecrementing) {
      characters[idx] = _objectSpread({}, char, {
        count: char.count - 1,
        isDecrementing: true
      });
      previousTime = p.millis();
    } else if (char.count === minCount && char.isDecrementing) {
      characters[idx] = _objectSpread({}, char, {
        count: char.count + 1,
        isIncrementing: true,
        isDecrementing: false
      });
      previousTime = p.millis();
    }
  }; // _________________________________________________
  // Draw


  p.draw = () => {
    p.background(BG);
    p.textFont(dharmaFont);
    p.textSize(characterSize);
    p.textAlign(p.CENTER, p.CENTER);
    p.fill(`${_constants_Theme__WEBPACK_IMPORTED_MODULE_8__[/* Theme */ "a"].Color.Galaxy}`);
    p.strokeWeight(strokeWidth);
    p.stroke(BG);

    if (H && W) {
      // _________________________________________
      // Loop through our copies
      characters.map((char, idx) => {
        p.scale(1, 1);
        let randomCharPick = Math.random() <= 0.5;

        if (randomCharPick && p.millis() - previousTime > 3000) {
          updateCharacter(char, idx);
        }

        let countArray = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_6___default()(Array(char.count).keys());

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

          let copiesArray = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_6___default()(Array(char.copies).keys()); // let randomCopyPick = Math.random() <= 0.5;


          copiesArray = copiesArray.map(copyNumber => {
            return copyNumber + 1;
          });
          copiesArray.map((copyNumber, idxxx) => {
            p.push();
            p.scale(1, verticalScale);
            p.text(char.letter, previousHorizontalTranslation(idx) + strokeOffset * copyNumber, duplicateVerticalPosition - strokeOffset * copyNumber);
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

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

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

/***/ "XoMD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QTVn");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "agJb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./constants/styles/Color.tsx
var Color = __webpack_require__("/YLk");

// CONCATENATED MODULE: ./constants/site/Settings.tsx
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
  themeColor: Color["a" /* Color */].Primary,
  secondaryColor: Color["a" /* Color */].Secondary,
  backgroundColor: Color["a" /* Color */].Background,
  pathPrefix: "/",
  logo: "src/assets/images/icon.png",
  logoLight: "src/assets/images/icon.png",
  logoDark: "src/assets/images/icon.png",
  social: {
    twitter: "PlayWell_TEK",
    facebook: "PlayWellTEK",
    instagram: "playwellteknologies",
    fbAppId: "56639339020281"
  }
};
// EXTERNAL MODULE: ./constants/styles/Font.tsx
var Font = __webpack_require__("e1cB");

// EXTERNAL MODULE: ./constants/styles/Base.tsx
var Base = __webpack_require__("dTP3");

// CONCATENATED MODULE: ./constants/Theme.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Theme; });
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
  Site: Settings,
  // Fonts throughout the app.
  Font: Font["a" /* Font */],
  // Core measurements throughout the app.
  Base: {
    // Core Base Measurement
    Size: {
      Lg: Base["a" /* Base */].Size.Lg + "px",
      Md: Base["a" /* Base */].Size.Md + "px",
      Sm: Base["a" /* Base */].Size.Sm + "px"
    },
    // Root Element Measurement
    Rem: {
      Lg: Base["a" /* Base */].Rem.Lg + "px",
      // px
      Md: Base["a" /* Base */].Rem.Md + "px",
      // px
      Sm: Base["a" /* Base */].Rem.Sm + "px" // px

    },
    // Responsive Breakpoints
    Media: {
      Width: {
        Lg: Base["a" /* Base */].Media.Width.Lg + "px",
        Md: Base["a" /* Base */].Media.Width.Md + "px",
        Sm: Base["a" /* Base */].Media.Width.Sm + "px"
      },
      Height: {
        Lg: Base["a" /* Base */].Media.Height.Lg + "px",
        Md: Base["a" /* Base */].Media.Height.Md + "px",
        Sm: Base["a" /* Base */].Media.Height.Sm + "px"
      }
    },
    // Site Grid
    Grid: {
      SiteWidth: Base["a" /* Base */].Grid.SiteWidth + "px",
      Nav: {
        Size: {
          Lg: Base["a" /* Base */].Grid.Nav.Size.Lg + "px",
          Md: Base["a" /* Base */].Grid.Nav.Size.Md + "px",
          Sm: Base["a" /* Base */].Grid.Nav.Size.Sm + "px"
        }
      },
      Footer: {
        Size: {
          Lg: Base["a" /* Base */].Grid.Footer.Size.Lg + "px",
          Md: Base["a" /* Base */].Grid.Footer.Size.Md + "px",
          Sm: Base["a" /* Base */].Grid.Footer.Size.Sm + "px"
        }
      },
      // Universal padding from the edge of the browser
      // Read more: https://read.compassofdesign.com/guides-gutters-and-grids-2ce6092fc3de
      Gutter: {
        Lg: {
          Top: Base["a" /* Base */].Grid.Gutter.Lg.Top + "px",
          Bottom: Base["a" /* Base */].Grid.Gutter.Lg.Bottom + "px",
          Right: Base["a" /* Base */].Grid.Gutter.Lg.Right + "px",
          Left: Base["a" /* Base */].Grid.Gutter.Lg.Left + "px"
        },
        Md: {
          Top: Base["a" /* Base */].Grid.Gutter.Md.Top + "px",
          Bottom: Base["a" /* Base */].Grid.Gutter.Md.Bottom + "px",
          Right: Base["a" /* Base */].Grid.Gutter.Md.Right + "px",
          Left: Base["a" /* Base */].Grid.Gutter.Md.Left + "px"
        },
        Sm: {
          Top: Base["a" /* Base */].Grid.Gutter.Sm.Top + "px",
          Bottom: Base["a" /* Base */].Grid.Gutter.Sm.Bottom + "px",
          Right: Base["a" /* Base */].Grid.Gutter.Sm.Right + "px",
          Left: Base["a" /* Base */].Grid.Gutter.Sm.Left + "px"
        }
      }
    },
    // View Width (vw) Based Measurements
    ViewWidth: {
      Padding: {
        Sm: Base["a" /* Base */].ViewWidth.Padding.Sm + "vw",
        Md: Base["a" /* Base */].ViewWidth.Padding.Md + "vw",
        Lg: Base["a" /* Base */].ViewWidth.Padding.Lg + "vw"
      }
    },
    // Buttons
    Button: {
      Lg: Base["a" /* Base */].Button.Lg + "px",
      Md: Base["a" /* Base */].Button.Md + "px",
      Sm: Base["a" /* Base */].Button.Sm + "px"
    },
    // Inputs
    Input: {
      Lg: Base["a" /* Base */].Input.Lg + "px",
      Md: Base["a" /* Base */].Input.Md + "px",
      Sm: Base["a" /* Base */].Input.Sm + "px"
    },
    // Transitions
    Transition: {
      String: Base["a" /* Base */].Transition.String,
      // seconds
      Duration: Base["a" /* Base */].Transition.Duration + "s",
      // seconds
      Ease: Base["a" /* Base */].Transition.Ease,
      // Cubic Bezier Ease
      CssEase: "cubic-bezier(" + Base["a" /* Base */].Transition.Ease[0] + ", " + Base["a" /* Base */].Transition.Ease[1] + ", " + Base["a" /* Base */].Transition.Ease[2] + ", " + Base["a" /* Base */].Transition.Ease[3] + ")",
      // Cubic Bezier Ease (CSS String)
      Page: Base["a" /* Base */].Transition.Page + "s" // milliseconds. Try to not go lower than 350ms or it gets buggy. TODO.

    },
    // Geometry
    Geometry: {
      Radius: Base["a" /* Base */].Geometry.Radius + "px" // px

    }
  },
  // Core Palette & Colors
  Color: Color["a" /* Color */],
  // Frame
  FrameSize: Base["a" /* Base */].FrameSize + "rem"
}; // End Component
// ____________________________________________________________________________________

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

/***/ "d04V":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("r7XW");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

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
  FrameSize: 2.5 // rem

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
  Code: `"SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace`,
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

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iRSi":
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
const GLSL_Canvas = (W, H, ID, BG) => p => {
  // _________________________________________________
  // Config
  let theShader; // _________________________________________________
  // Preload

  p.preload = () => {
    theShader = p.loadShader(`/shaders/ex_${ID}/shader.vert`, `/shaders/ex_${ID}/shader.frag`);
  }; // _________________________________________________
  // Setup


  p.setup = () => {
    // Our Canvas
    p.createCanvas(W, H, p.WEBGL);
    p.noStroke();
  }; // _________________________________________________
  // Draw


  p.draw = () => {
    // shader() sets the active shader with our shader
    p.shader(theShader);
    theShader.setUniform("u_resolution", [W, H]);
    theShader.setUniform("u_time", p.millis() / 1000.0);
    theShader.setUniform("u_mouse", [p.mouseX, p.map(p.mouseY, 0, H, H, 0)]); // rect gives us some geometry on the screen

    p.rect(0, 0, W, H);
  };

  p.windowResized = () => {
    p.resizeCanvas(W, H);
  };
};

/* harmony default export */ __webpack_exports__["default"] = (GLSL_Canvas);

/***/ }),

/***/ "io+v":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RootVariables; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("agJb");
// Root.js:
// This file is primarily used to create naming and can also be
// used to automate some math. Don't forget if you update the other
// style files to include the export down below here if you want to
// reference it conveniently in the Theme.js export.
// Usage:
// 1. First import the file.
// import { Root } from '../../../path/to/Root'
// 2. Use it in your SC: 'color: ${Root.Size}; or simply refer to the object and key when used in functions.'

 // Begin Component
//////////////////////////////////////////////////////////////////////
// Assign CSS Variables for automatic Media Queries.

const Root = {
  // Palette
  Color: {
    Bg: "var(--BgColor)",
    Text: "var(--TextColor)",
    Mbm: "var(--MbmColor)"
  },
  // Core Base Measurement
  Size: "var(--Size)",
  ViewWidthFontSize: "var(--ViewWidthFontSize)",
  ViewHeightFontSize: "var(--ViewHeightFontSize)",
  IconSize: "var(--IconSize)",
  // Root Element Measurement
  Rem: "var(--REM)",
  // View Width (vw) Based Measurements
  ViewWidthPadding: "var(--ViewWidthPadding)",
  // Site Grid
  Site: {
    Width: "var(--SiteWidth)"
  },
  Nav: {
    Size: "var(--NavSize)"
  },
  Footer: {
    Size: "var(--FooterSize)"
  },
  Grid: {
    // Universal padding from the edge of the browser
    // Read more: https://read.compassofdesign.com/guides-gutters-and-grids-2ce6092fc3de
    Gutter: {
      Top: "var(--GutterTop)",
      Right: "var(--GutterRight)",
      Bottom: "var(--GutterBottom)",
      Left: "var(--GutterLeft)"
    },
    Indent: {
      X: "var(--IndentX)",
      Y: "var(--IndentY)"
    }
  },
  // Buttons
  Button: {
    Size: "var(--ButtonSize)"
  },
  // Inputs
  Input: "var(--InputSize)",
  // Geometry
  Radius: "var(--Radius)",
  // Frame
  FrameSize: "var(--FrameSize)"
}; // Responsive Measurements:
// We use these to avoid media queries all
// over the place where possible.

const RootVariables = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  :root {
    /* ----------------------------------- Large Width Viewports */

    /* --------------- Palette*/
    --BgColor: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.Background}
    --TextColor: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.Primary}
    --MbmColor: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.White}

    /* --------------- Base Measurements*/

    /* -------- Base Measurement */
    --Size: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Size.Lg};

    /* -------- Font Sizes (Viewport) */
    --ViewWidthFontSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Font.Size.ViewWidth.Lg};
    --ViewHeightFontSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Font.Size.ViewHeight.Lg};
    --IconSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Font.Icon.Size.Lg};

    /* -------- Root Element Measurement */
    --REM: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Rem.Lg};

    /* -------- View Width (vw) Based Measurements */
    --ViewWidthPadding: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.ViewWidth.Padding.Lg};

    /* --------- Site Grid */
    --SiteWidth: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Grid.SiteWidth};
    --NavSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Grid.Nav.Size.Lg};
    --FooterSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Grid.Footer.Size.Lg};

    /* --- Gutters */
    --GutterTop: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Grid.Gutter.Lg.Top};
    --GutterRight: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Grid.Gutter.Lg.Right};
    --GutterBottom: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Grid.Gutter.Lg.Bottom};
    --GutterLeft: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Grid.Gutter.Lg.Left};

    /* --------- Buttons */
    --ButtonSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Button.Lg};

    /* --------- Inputs */
    --InputSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Input.Lg};

    /* --------- Geometry */
    --Radius: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Geometry.Radius};

    /* --------- Frame */
    --FrameSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].FrameSize};

    /* ----------------------------------- Medium Width Viewports */
    @media (max-width: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Media.Width.Md}) {
      /* --------------- Base Measurements*/

        /* --------- Frame */
        --FrameSize: 2rem;

        /* -------- Base Measurement */
        --Size: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Size.Md};

        /* -------- Font Sizes (Viewport) */
        --ViewWidthFontSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Font.Size.ViewWidth.Md};
        --ViewHeightFontSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Font.Size.ViewHeight.Md};
        --IconSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Font.Icon.Size.Md};

        /* -------- Root Element Measurement */
        --REM: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Rem.Md};

        /* -------- View Width (vw) Based Measurements */
        --ViewWidthPadding: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.ViewWidth.Padding.Md};

        /* --------- Site Grid */
        --SiteWidth: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Grid.SiteWidth};
        --NavSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Grid.Nav.Size.Md};
        --FooterSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Grid.Footer.Size.Md};

        /* --- Gutters */
        --GutterTop: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Grid.Gutter.Md.Top};
        --GutterRight: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Grid.Gutter.Md.Right};
        --GutterBottom: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Grid.Gutter.Md.Bottom};
        --GutterLeft: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Grid.Gutter.Md.Left};

        /* --------- Buttons */
        --ButtonSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Button.Md};

        /* --------- Inputs */
        --InputSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Input.Md};

        /* --------- Geometry */
        --Radius: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Geometry.Radius};
    }

    /* ----------------------------------- Small Width Viewports */
    @media (max-width: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Media.Width.Sm}) {
      /* --------------- Base Measurements*/

        /* -------- Base Measurement */
        --Size: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Size.Sm};

        /* -------- Font Sizes (Viewport) */
        --ViewWidthFontSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Font.Size.ViewWidth.Sm};
        --ViewHeightFontSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Font.Size.ViewHeight.Sm};
        --IconSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Font.Icon.Size.Sm};

        /* -------- Root Element Measurement */
        --Rem: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Rem.Sm};

        /* -------- View Width (vw) Based Measurements */
        --ViewWidthPadding: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.ViewWidth.Padding.Sm};

        /* --------- Site Grid */
        --SiteWidth: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Grid.SiteWidth};
        --NavSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Grid.Nav.Size.Sm};
        --FooterSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Grid.Footer.Size.Sm};

        /* --- Gutters */
        --GutterTop: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Grid.Gutter.Sm.Top};
        --GutterRight: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Grid.Gutter.Sm.Right};
        --GutterBottom: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Grid.Gutter.Sm.Bottom};
        --GutterLeft: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Grid.Gutter.Sm.Left};

        /* --------- Buttons */
        --ButtonSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Button.Sm};

        /* --------- Inputs */
        --InputSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Input.Sm};

        /* --------- Geometry */
        --Radius: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Geometry.Radius};
    }
  }
`; // End Component
//////////////////////////////////////////////////////////////////////

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "nhmZ":
/***/ (function(module, exports) {

module.exports = require("react-p5-wrapper");

/***/ }),

/***/ "nw9M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("agJb");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_interactive_InteractiveFrameHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("O5GZ");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// Core
 // Utils

 // Theme

 // Types


 // Begin Component
// __________________________________________________________________________

const P5Wrapper = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "nhmZ", 7)), {
  loading: () => __jsx("p", null, "Loading..."),
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("nhmZ")],
    modules: ["react-p5-wrapper"]
  }
});

class P5Page extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "renderP5", filename => {
      const sketch = __webpack_require__("49Hi")(`./${filename}`).default(this.state.windowWidth, this.state.windowHeight, 1, this.state.backgroundColor);

      return __jsx(P5Wrapper, {
        sketch: sketch
      });
    });

    this.state = {
      domLoaded: false,
      windowWidth: 0,
      windowHeight: 0,
      backgroundColor: _constants_Theme__WEBPACK_IMPORTED_MODULE_3__[/* Theme */ "a"].Color.Background
    };
  }

  componentDidMount() {
    if ("undefined") {
      this.setState({
        windowWidth: window.innerWidth - 80,
        windowHeight: window.innerHeight - 80,
        domLoaded: true
      });
    }
  }

  render() {
    const GlobalScrollLock = styled_components__WEBPACK_IMPORTED_MODULE_4__["createGlobalStyle"]`
      body, html {
        overflow: hidden;
      }
    `;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(GlobalScrollLock, null), __jsx(_components_interactive_InteractiveFrameHeader__WEBPACK_IMPORTED_MODULE_5__[/* InteractiveFrameHeader */ "a"], null), this.state.domLoaded && this.state.windowHeight > 10 && this.state.windowWidth > 10 ? __jsx("div", {
      className: "dharma-container",
      style: {
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }
    }, this.renderP5("dharma")) : null);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (P5Page);

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "r7XW":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

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