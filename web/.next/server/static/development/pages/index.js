module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/_interactive/DharmaCounter/DharmaCounter.tsx":
/*!*****************************************************************!*\
  !*** ./components/_interactive/DharmaCounter/DharmaCounter.tsx ***!
  \*****************************************************************/
/*! exports provided: DharmaCounter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DharmaCounter", function() { return DharmaCounter; });
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_svg/DharmaType/styles.scss */ "./components/_svg/DharmaType/styles.scss.tsx");

var _jsxFileName = "/Users/pflaxalt/Repositories/_pfl/web/components/_interactive/DharmaCounter/DharmaCounter.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
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
class DharmaCounter extends react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      characters: [],
      viewBoxHeight: 0,
      viewBoxWidth: 0,
      characterWidth: 0,
      characterVerticalTranslation: 0,
      characterHorizontalScale: 0,
      characterVerticalScale: 0,
      isInitialized: false
    };
    this.incrementLetterCount = this.incrementLetterCount.bind(this);
    this.letterCountTimer = this.letterCountTimer.bind(this);
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
          idx: idx
        };
      }); // ____________________________________________
      // USE THESE TO TWEAK YOUR CHARACTERS TO FIT

      let viewBoxHeight = 100;
      let viewBoxWidth = 100;
      let characterCount = splitCharacterArray.length;
      let characterWidth = viewBoxWidth / characterCount;
      let characterVerticalTranslation = 0.983; // Multiplied by the viewBoxHeight

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
    }
  }

  incrementLetterCount(id) {
    this.setState({
      characters: this.state.characters.map((character, idx) => {
        return {
          letter: character.letter,
          count: id == character.idx ? character.count + 1 : character.count,
          idx: idx
        };
      })
    });
    return;
  }

  letterCountTimer() {
    function generateRandomInteger(min, max) {
      return Math.floor(min + Math.random() * (max + 1 - min));
    }

    window.setInterval(() => this.incrementLetterCount(generateRandomInteger(0, this.state.characters.length)), 3000);
  }

  render() {
    let {
      viewBoxHeight,
      viewBoxWidth,
      characters,
      characterWidth,
      characterHorizontalScale,
      characterVerticalScale,
      characterVerticalTranslation
    } = this.state;
    console.log("DharmaCounter state:", this.state);
    return __jsx(_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_2__["DharmaTypeStyle"], {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: `0 0 ${viewBoxWidth} ${viewBoxHeight}`,
      preserveAspectRatio: "none",
      className: `${_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_2__["DharmaTypeClassName"]} ${_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_2__["DharmaTypeClassName"]}--couter`,
      style: {
        [`--${_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_2__["DharmaTypeClassName"]}-font-size`]: `${viewBoxHeight}px`
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }, __jsx("filter", {
      id: "displacementFilter",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: this
    }, __jsx("feTurbulence", {
      type: "turbulence",
      baseFrequency: ".05",
      numOctaves: "1",
      result: "turbulence",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }), __jsx("feDisplacementMap", {
      in2: "turbulence",
      in: "SourceGraphic",
      scale: "3",
      xChannelSelector: "R",
      yChannelSelector: "G",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    })), __jsx("g", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }, characters.map((char, idx) => {
      let countArray = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(Array(char.count).keys());

      return countArray.map((duplicate, idxx) => {
        let adjustedDuplicate = char.count > 1 ? char.count : duplicate + 1;
        let adjustedVerticalTranslation = viewBoxHeight / adjustedDuplicate * (idxx + 1) * characterVerticalTranslation;
        let adjustedVerticalScale = characterVerticalScale / adjustedDuplicate;
        return __jsx("g", {
          className: `${_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_2__["DharmaTypeClassName"]}__character-wrapper`,
          "data-char-id": idx,
          "data-char-count": duplicate,
          key: idxx,
          onClick: () => this.incrementLetterCount(idx),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 207
          },
          __self: this
        }, __jsx("text", {
          className: `${_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_2__["DharmaTypeClassName"]}__character`,
          transform: `translate(${characterWidth * idx} ${adjustedVerticalTranslation}) scale(${characterHorizontalScale}, ${adjustedVerticalScale})`,
          style: {
            [`--${_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_2__["DharmaTypeClassName"]}-key`]: idx
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214
          },
          __self: this
        }, __jsx("tspan", {
          className: `${_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_2__["DharmaTypeClassName"]}__letter`,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 223
          },
          __self: this
        }, char.letter)));
      });
    })));
  }

}

/***/ }),

/***/ "./components/_interactive/DharmaCounter/index.tsx":
/*!*********************************************************!*\
  !*** ./components/_interactive/DharmaCounter/index.tsx ***!
  \*********************************************************/
/*! exports provided: DharmaCounter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DharmaCounter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DharmaCounter */ "./components/_interactive/DharmaCounter/DharmaCounter.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DharmaCounter", function() { return _DharmaCounter__WEBPACK_IMPORTED_MODULE_0__["DharmaCounter"]; });



/***/ }),

/***/ "./components/_interactive/InteractiveFrameHeader/InteractiveFrameHeader.tsx":
/*!***********************************************************************************!*\
  !*** ./components/_interactive/InteractiveFrameHeader/InteractiveFrameHeader.tsx ***!
  \***********************************************************************************/
/*! exports provided: InteractiveFrameHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractiveFrameHeader", function() { return InteractiveFrameHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DharmaCounter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DharmaCounter */ "./components/_interactive/DharmaCounter/index.tsx");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ "./components/_interactive/InteractiveFrameHeader/styles.scss.tsx");
var _jsxFileName = "/Users/pflaxalt/Repositories/_pfl/web/components/_interactive/InteractiveFrameHeader/InteractiveFrameHeader.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
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
  return __jsx("div", {
    className: `${_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"]}__marquee-container`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, __jsx("ul", {
    className: `${_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"]}__frame-items`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, items.map((item, idx) => {
    return __jsx("li", {
      key: idx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: undefined
    }, item.label);
  })), __jsx("ul", {
    className: `${_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"]}__frame-items`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, items.map((item, idx) => {
    return __jsx("li", {
      key: idx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: undefined
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


const InteractiveFrameHeader = () => __jsx(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderStyle"], {
  className: `${_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"]}`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 109
  },
  __self: undefined
}, __jsx("div", {
  className: `${_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"]}__inner`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 112
  },
  __self: undefined
}, __jsx("div", {
  className: `${_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"]}__frame`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 115
  },
  __self: undefined
}, __jsx("div", {
  className: `${_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"]}__frame__y-axis`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 118
  },
  __self: undefined
}, __jsx("div", {
  className: `${_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"]}__frame__edge ${_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"]}__frame__edge--top`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 119
  },
  __self: undefined
}, __jsx(FrameItems, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 122
  },
  __self: undefined
})), __jsx("div", {
  className: `${_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"]}__frame__edge ${_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"]}__frame__edge--bottom`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 124
  },
  __self: undefined
}, __jsx(FrameItems, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 127
  },
  __self: undefined
}))), __jsx("div", {
  className: `${_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"]}__frame__x-axis`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 133
  },
  __self: undefined
}, __jsx("div", {
  className: `${_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"]}__frame__edge ${_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"]}__frame__edge--left`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 134
  },
  __self: undefined
}, __jsx(FrameItems, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 137
  },
  __self: undefined
})), __jsx("div", {
  className: `${_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"]}__frame__edge ${_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"]}__frame__edge--right`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 140
  },
  __self: undefined
}, __jsx(FrameItems, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 143
  },
  __self: undefined
})))), __jsx("div", {
  className: `${_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"]}__type`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 150
  },
  __self: undefined
}, __jsx(_DharmaCounter__WEBPACK_IMPORTED_MODULE_1__["DharmaCounter"], {
  text: "LAXALT",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 151
  },
  __self: undefined
})))); // End Component
// ______________________________________________________________________________

/***/ }),

/***/ "./components/_interactive/InteractiveFrameHeader/index.tsx":
/*!******************************************************************!*\
  !*** ./components/_interactive/InteractiveFrameHeader/index.tsx ***!
  \******************************************************************/
/*! exports provided: InteractiveFrameHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InteractiveFrameHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InteractiveFrameHeader */ "./components/_interactive/InteractiveFrameHeader/InteractiveFrameHeader.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InteractiveFrameHeader", function() { return _InteractiveFrameHeader__WEBPACK_IMPORTED_MODULE_0__["InteractiveFrameHeader"]; });



/***/ }),

/***/ "./components/_interactive/InteractiveFrameHeader/styles.scss.tsx":
/*!************************************************************************!*\
  !*** ./components/_interactive/InteractiveFrameHeader/styles.scss.tsx ***!
  \************************************************************************/
/*! exports provided: InteractiveFrameHeaderClassName, InteractiveFrameHeaderStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractiveFrameHeaderClassName", function() { return InteractiveFrameHeaderClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractiveFrameHeaderStyle", function() { return InteractiveFrameHeaderStyle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/Theme */ "./constants/Theme.tsx");
/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/Root */ "./constants/Root.tsx");
/* harmony import */ var _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_svg/DharmaType/styles.scss */ "./components/_svg/DharmaType/styles.scss.tsx");
/* harmony import */ var _constants_styles_CssUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/styles/CssUtils */ "./constants/styles/CssUtils.tsx");
/* harmony import */ var _constants_styles_Animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants/styles/Animation */ "./constants/styles/Animation.tsx");
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

const InteractiveFrameHeaderStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "stylesscss__InteractiveFrameHeaderStyle",
  componentId: "tg0k5n-0"
})(["&.", "{--", "__frame-edge-size:3rem;--", "__marquee-speed:60s;@media(max-width:", "){--", "__frame-edge-size:2rem;}.", "__inner{width:100vw;height:100vh;position:relative;}.", ",.", "__frame{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;}.", "__type{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:calc(100% - (var(--", "__frame-edge-size) * 2));height:calc(100% - (var(--", "__frame-edge-size) * 2.25));@media(max-width:", "){transform:translate(-50%,-50%) rotate(90deg);width:calc(100vh - (var(--", "__frame-edge-size) * 2.25));height:calc(100vw - (var(--", "__frame-edge-size) * 2.25));}cursor:crosshair;.", "{top:0;left:0;right:0;bottom:0;width:100%;height:100%;}.", "__character{fill:", ";transition:stroke-width .5s ease;filter:url(#displacementFilter);&:hover{}}}.", "__frame{&__y-axis,&__x-axis{position:absolute;overflow:hidden;left:50%;top:50%;pointer-events:none;}&__y-axis{width:100vw;height:100vh;transform:translate(-50%,-50%);}&__x-axis{width:100vh;height:100vw;transform:translate(-50%,-50%) rotate(90deg);}&__edge{font-size:calc(var(--", "__frame-edge-size) * 0.75);text-transform:uppercase;line-height:0;.", "__frame-items{list-style-type:none;color:", ";height:var(--", "__frame-edge-size);display:block;align-items:center;justify-content:flex-start;li{margin-right:calc(var(--", "__frame-edge-size) / 2);}}.", "__marquee-container{flex-shrink:0;display:flex;justify-content:flex-start;flex-wrap:nowrap;position:relative;overflow:hidden;.", "__frame-items{display:flex;flex-wrap:nowrap;white-space:nowrap;flex-shrink:0;li{width:auto;flex-shrink:0;white-space:nowrap;vertical-align:middle;display:table-cell;}}}&--top,&--bottom,&--left,&--right{position:absolute;overflow:hidden;pointer-events:all;}&--top,&--right{border-bottom:1px solid ", ";.", "__frame-items{padding-top:calc(var(--", "__frame-edge-size) / 6);padding-bottom:calc(var(--", "__frame-edge-size) / 6);position:relative;animation:marqueeTopRightQuadrants var(--", "__marquee-speed) linear infinite;}}&--bottom,&--left{border-top:1px solid ", ";.", "__frame-items{padding-top:calc(var(--", "__frame-edge-size) / 6);padding-bottom:calc(var(--", "__frame-edge-size) / 6);animation:marqueeBottomLeftQuadrants var(--", "__marquee-speed) linear infinite;}}&--top,&--bottom{width:calc(100vw - var(--", "__frame-edge-size));}&--left,&--right{width:calc(100vh - var(--", "__frame-edge-size));}&--top{top:0;left:var(--", "__frame-edge-size);}&--bottom{bottom:0;right:var(--", "__frame-edge-size);}&--right{top:0;left:var(--", "__frame-edge-size);}&--left{bottom:0;left:0;}}}}"], InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Media.Width.Md, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_3__["DharmaTypeClassName"], InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Media.Width.Md, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_3__["DharmaTypeClassName"], _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_3__["DharmaTypeClassName"], _constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Color.Galaxy, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Color.Galaxy, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Color.Galaxy, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Color.Galaxy, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName);

/***/ }),

/***/ "./components/_svg/DharmaType/styles.scss.tsx":
/*!****************************************************!*\
  !*** ./components/_svg/DharmaType/styles.scss.tsx ***!
  \****************************************************/
/*! exports provided: DharmaTypeClassName, DharmaTypeStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DharmaTypeClassName", function() { return DharmaTypeClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DharmaTypeStyle", function() { return DharmaTypeStyle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/Theme */ "./constants/Theme.tsx");
/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/Root */ "./constants/Root.tsx");
/* harmony import */ var _constants_styles_CssUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/styles/CssUtils */ "./constants/styles/CssUtils.tsx");
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

const DharmaTypeStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.svg.withConfig({
  displayName: "stylesscss__DharmaTypeStyle",
  componentId: "lgdyqd-0"
})(["&.", "{.", "__character-wrapper{filter:blur(0px);transition:filter 1s ease-in-out;will-change:filter;&[data-char-id=\"5\"]{transform:translateX(3.65px);}&[data-char-id=\"4\"]{transform:translateX(5.25px);}&[data-char-id=\"3\"]{transform:translateX(3.25px);}&[data-char-id=\"2\"]{transform:translateX(.75px);}&[data-char-id=\"1\"]{transform:translateX(-1.5px);}&[data-char-id=\"0\"]{transform:translateX(0px);}}.", "__character{font-size:var(--", "-font-size);font-family:DharmaGothicC-ExBold,Dharma Gothic C;font-weight:700;letter-spacing:0em;", ";}.", "__text{font-size:var(--", "-font-size);font-family:DharmaGothicC-ExBold,Dharma Gothic C;font-weight:700;letter-spacing:0em;cursor:crosshair;transition:filter 1s ease-in-out;will-change:filter;}}"], DharmaTypeClassName, DharmaTypeClassName, DharmaTypeClassName, DharmaTypeClassName, _constants_styles_CssUtils__WEBPACK_IMPORTED_MODULE_3__["CssUtils"].DisableUserSelect(), DharmaTypeClassName, DharmaTypeClassName);

/***/ }),

/***/ "./constants/Root.tsx":
/*!****************************!*\
  !*** ./constants/Root.tsx ***!
  \****************************/
/*! exports provided: Root, RootVariables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Root", function() { return Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootVariables", function() { return RootVariables; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/Theme */ "./constants/Theme.tsx");
// Root.js:
// This file is primarily used to create naming and can also be
// used to automate some math. Don't forget if you update the other
// style files to include the export down below here if you want to
// reference it conveniently in the Theme.js export.
// Usage:
// 1. First import the file.
// import { Root } from '../../../path/to/Root'
// 2. Use it in your SC: 'color: ${Root.Size}; or simply refer to the object and key when used in functions.'

 // Begin Interface
//////////////////////////////////////////////////////////////////////

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
  Radius: "var(--Radius)"
}; // Responsive Measurements:
// We use these to avoid media queries all
// over the place where possible.

const RootVariables = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  :root {
    /* ----------------------------------- Large Width Viewports */

    /* --------------- Palette*/
    --BgColor: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Color.Background}
    --TextColor: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Color.Primary}
    --MbmColor: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Color.White}

    /* --------------- Base Measurements*/
    
    /* -------- Base Measurement */
    --Size: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Size.Lg};

    /* -------- Font Sizes (Viewport) */
    --ViewWidthFontSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Font.Size.ViewWidth.Lg};
    --ViewHeightFontSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Font.Size.ViewHeight.Lg};
    --IconSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Font.Icon.Size.Lg};

    /* -------- Root Element Measurement */
    --REM: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Rem.Lg};

    /* -------- View Width (vw) Based Measurements */
    --ViewWidthPadding: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.ViewWidth.Padding.Lg};
    
    /* --------- Site Grid */
    --SiteWidth: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Grid.SiteWidth};
    --NavSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Grid.Nav.Size.Lg};
    --FooterSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Grid.Footer.Size.Lg};

    /* --- Gutters */
    --GutterTop: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Grid.Gutter.Lg.Top};
    --GutterRight: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Grid.Gutter.Lg.Right};
    --GutterBottom: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Grid.Gutter.Lg.Bottom};
    --GutterLeft: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Grid.Gutter.Lg.Left};

    /* --------- Buttons */
    --ButtonSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Button.Lg};

    /* --------- Inputs */
    --InputSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Input.Lg};

    /* --------- Geometry */
    --Radius: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Geometry.Radius};
    
    /* ----------------------------------- Medium Width Viewports */
    @media (max-width: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Media.Width.Md}) {
      /* --------------- Base Measurements*/
    
        /* -------- Base Measurement */
        --Size: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Size.Md};

        /* -------- Font Sizes (Viewport) */
        --ViewWidthFontSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Font.Size.ViewWidth.Md};
        --ViewHeightFontSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Font.Size.ViewHeight.Md};
        --IconSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Font.Icon.Size.Md};

        /* -------- Root Element Measurement */
        --REM: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Rem.Md};

        /* -------- View Width (vw) Based Measurements */
        --ViewWidthPadding: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.ViewWidth.Padding.Md};

        /* --------- Site Grid */
        --SiteWidth: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Grid.SiteWidth};
        --NavSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Grid.Nav.Size.Md};
        --FooterSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Grid.Footer.Size.Md};

        /* --- Gutters */
        --GutterTop: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Grid.Gutter.Md.Top};
        --GutterRight: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Grid.Gutter.Md.Right};
        --GutterBottom: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Grid.Gutter.Md.Bottom};
        --GutterLeft: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Grid.Gutter.Md.Left};

        /* --------- Buttons */
        --ButtonSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Button.Md};

        /* --------- Inputs */
        --InputSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Input.Md};

        /* --------- Geometry */
        --Radius: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Geometry.Radius};
    }

    /* ----------------------------------- Small Width Viewports */
    @media (max-width: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Media.Width.Sm}) {
      /* --------------- Base Measurements*/
    
        /* -------- Base Measurement */
        --Size: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Size.Sm};

        /* -------- Font Sizes (Viewport) */
        --ViewWidthFontSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Font.Size.ViewWidth.Sm};
        --ViewHeightFontSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Font.Size.ViewHeight.Sm};
        --IconSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Font.Icon.Size.Sm};

        /* -------- Root Element Measurement */
        --Rem: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Rem.Sm};

        /* -------- View Width (vw) Based Measurements */
        --ViewWidthPadding: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.ViewWidth.Padding.Sm};

        /* --------- Site Grid */
        --SiteWidth: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Grid.SiteWidth};
        --NavSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Grid.Nav.Size.Sm};
        --FooterSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Grid.Footer.Size.Sm};

        /* --- Gutters */
        --GutterTop: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Grid.Gutter.Sm.Top};
        --GutterRight: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Grid.Gutter.Sm.Right};
        --GutterBottom: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Grid.Gutter.Sm.Bottom};
        --GutterLeft: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Grid.Gutter.Sm.Left};

        /* --------- Buttons */
        --ButtonSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Button.Sm};

        /* --------- Inputs */
        --InputSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Input.Sm};

        /* --------- Geometry */
        --Radius: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Geometry.Radius};
    }
  }
`; // End Component
//////////////////////////////////////////////////////////////////////

/***/ }),

/***/ "./constants/Theme.tsx":
/*!*****************************!*\
  !*** ./constants/Theme.tsx ***!
  \*****************************/
/*! exports provided: Theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Theme", function() { return Theme; });
/* harmony import */ var _site_Settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site/Settings */ "./constants/site/Settings.tsx");
/* harmony import */ var _styles_Font__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/Font */ "./constants/styles/Font.tsx");
/* harmony import */ var _styles_Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/Base */ "./constants/styles/Base.tsx");
/* harmony import */ var _styles_Color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Color */ "./constants/styles/Color.tsx");
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
//////////////////////////////////////////////////////////////////////



 // Begin Interface
//////////////////////////////////////////////////////////////////////

// Begin Component
//////////////////////////////////////////////////////////////////////
const Theme = {
  // General Site Information & Keywords
  Site: _site_Settings__WEBPACK_IMPORTED_MODULE_0__["Settings"],
  // Fonts throughout the app.
  Font: _styles_Font__WEBPACK_IMPORTED_MODULE_1__["Font"],
  // Core measurements throughout the app.
  Base: {
    // Core Base Measurement
    Size: {
      Lg: _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Size.Lg + "px",
      Md: _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Size.Md + "px",
      Sm: _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Size.Sm + "px"
    },
    // Root Element Measurement
    Rem: {
      Lg: _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Rem.Lg + "px",
      // px
      Md: _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Rem.Md + "px",
      // px
      Sm: _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Rem.Sm + "px" // px

    },
    // Responsive Breakpoints
    Media: {
      Width: {
        Lg: _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Media.Width.Lg + "px",
        Md: _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Media.Width.Md + "px",
        Sm: _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Media.Width.Sm + "px"
      },
      Height: {
        Lg: _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Media.Height.Lg + "px",
        Md: _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Media.Height.Md + "px",
        Sm: _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Media.Height.Sm + "px"
      }
    },
    // Site Grid
    Grid: {
      SiteWidth: _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Grid.SiteWidth + "px",
      Nav: {
        Size: {
          Lg: _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Grid.Nav.Size.Lg + "px",
          Md: _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Grid.Nav.Size.Md + "px",
          Sm: _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Grid.Nav.Size.Sm + "px"
        }
      },
      Footer: {
        Size: {
          Lg: _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Grid.Footer.Size.Lg + "px",
          Md: _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Grid.Footer.Size.Md + "px",
          Sm: _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Grid.Footer.Size.Sm + "px"
        }
      },
      // Universal padding from the edge of the browser
      // Read more: https://read.compassofdesign.com/guides-gutters-and-grids-2ce6092fc3de
      Gutter: {
        Lg: {
          Top: _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Grid.Gutter.Lg.Top + "px",
          Bottom: _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Grid.Gutter.Lg.Bottom + "px",
          Right: _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Grid.Gutter.Lg.Right + "px",
          Left: _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Grid.Gutter.Lg.Left + "px"
        },
        Md: {
          Top: _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Grid.Gutter.Md.Top + "px",
          Bottom: _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Grid.Gutter.Md.Bottom + "px",
          Right: _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Grid.Gutter.Md.Right + "px",
          Left: _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Grid.Gutter.Md.Left + "px"
        },
        Sm: {
          Top: _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Grid.Gutter.Sm.Top + "px",
          Bottom: _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Grid.Gutter.Sm.Bottom + "px",
          Right: _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Grid.Gutter.Sm.Right + "px",
          Left: _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Grid.Gutter.Sm.Left + "px"
        }
      }
    },
    // View Width (vw) Based Measurements
    ViewWidth: {
      Padding: {
        Sm: _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].ViewWidth.Padding.Sm + "vw",
        Md: _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].ViewWidth.Padding.Md + "vw",
        Lg: _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].ViewWidth.Padding.Lg + "vw"
      }
    },
    // Buttons
    Button: {
      Lg: _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Button.Lg + "px",
      Md: _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Button.Md + "px",
      Sm: _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Button.Sm + "px"
    },
    // Inputs
    Input: {
      Lg: _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Input.Lg + "px",
      Md: _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Input.Md + "px",
      Sm: _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Input.Sm + "px"
    },
    // Transitions
    Transition: {
      String: _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Transition.String,
      // seconds
      Duration: _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Transition.Duration + "s",
      // seconds
      Ease: _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Transition.Ease,
      // Cubic Bezier Ease
      CssEase: "cubic-bezier(" + _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Transition.Ease[0] + ", " + _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Transition.Ease[1] + ", " + _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Transition.Ease[2] + ", " + _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Transition.Ease[3] + ")",
      // Cubic Bezier Ease (CSS String)
      Page: _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Transition.Page + "s" // milliseconds. Try to not go lower than 350ms or it gets buggy. TODO.

    },
    // Geometry
    Geometry: {
      Radius: _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].Geometry.Radius + "px" // px

    }
  },
  // Core Palette & Colors
  Color: _styles_Color__WEBPACK_IMPORTED_MODULE_3__["Color"]
}; // End Component
//////////////////////////////////////////////////////////////////////

/***/ }),

/***/ "./constants/site/Settings.tsx":
/*!*************************************!*\
  !*** ./constants/site/Settings.tsx ***!
  \*************************************/
/*! exports provided: Settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return Settings; });
/* harmony import */ var _styles_Color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/Color */ "./constants/styles/Color.tsx");
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
  themeColor: _styles_Color__WEBPACK_IMPORTED_MODULE_0__["Color"].Primary,
  secondaryColor: _styles_Color__WEBPACK_IMPORTED_MODULE_0__["Color"].Secondary,
  backgroundColor: _styles_Color__WEBPACK_IMPORTED_MODULE_0__["Color"].Background,
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

/***/ }),

/***/ "./constants/styles/Animation.tsx":
/*!****************************************!*\
  !*** ./constants/styles/Animation.tsx ***!
  \****************************************/
/*! exports provided: Blink, FadeIn, PulseStroke, Grain, OverlayFadeIn, FadeInScaleUpFromTop, Disappear, Marquee, SlideFromRight, SlideUp, LoaderDot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blink", function() { return Blink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FadeIn", function() { return FadeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PulseStroke", function() { return PulseStroke; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grain", function() { return Grain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayFadeIn", function() { return OverlayFadeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FadeInScaleUpFromTop", function() { return FadeInScaleUpFromTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Disappear", function() { return Disappear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marquee", function() { return Marquee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideFromRight", function() { return SlideFromRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideUp", function() { return SlideUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderDot", function() { return LoaderDot; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
// Core
 // Begin Component
// __________________________________________________________________________________________

const Blink = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["to{visibility:hidden;}"]);
const FadeIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{opacity:0;}to{opacity:1;}"]);
const PulseStroke = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%{stroke-width:.15px;}50%{stroke-width:1px;}100%{stroke-width:.15px;}"]);
const Grain = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%,100%{transform:scale(1.5) translate(0,0)}10%{transform:scale(1.5) translate(-5%,-10%)}20%{transform:scale(1.5) translate(-15%,5%)}30%{transform:scale(1.5) translate(7%,-10%)}40%{transform:scale(1.5) translate(-5%,10%)}50%{transform:scale(1.5) translate(-15%,10%)}60%{transform:scale(1.5) translate(15%,0%)}70%{transform:scale(1.5) translate(0%,15%)}80%{transform:scale(1.5) translate(3%,10%)}90%{transform:scale(1.5) translate(-10%,10%)}"]);
const OverlayFadeIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{opacity:0;}to{opacity:.75;}"]);
const FadeInScaleUpFromTop = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{transform:scale(.9);transform-origin:top center;opacity:0;}to{transform:scale(1);transform-origin:top center;opacity:1;}"]);
const Disappear = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{display:flex;}to{display:none !important;}"]);
const Marquee = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{transform:translateX(0%);}to{transform:translateX(-100%);}"]);
const SlideFromRight = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{opacity:0;transform:translateX(100%);}to{opacity:1;transform:translateX(0%);}"]);
const SlideUp = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{opacity:0;transform:translateX(100%);}to{opacity:1;transform:translateX(0%);}"]);
const LoaderDot = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%{background:#f7fafc;}50%{background:#cbd5e0;}100%{background:#f7fafc;}"]);

/***/ }),

/***/ "./constants/styles/Base.tsx":
/*!***********************************!*\
  !*** ./constants/styles/Base.tsx ***!
  \***********************************/
/*! exports provided: Base */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Base", function() { return Base; });
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

  }
}; // End Component
//////////////////////////////////////////////////////////////////////

/***/ }),

/***/ "./constants/styles/Color.tsx":
/*!************************************!*\
  !*** ./constants/styles/Color.tsx ***!
  \************************************/
/*! exports provided: Color, Palette */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Palette", function() { return Palette; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
// Color.js:
// This is the sitewide palette.
// Imports
// _______________________________________________________
 // Begin Component
// _______________________________________________________

const Color = {
  // Core Colors
  Primary: "#000000",
  Secondary: "#5D6376",
  Background: "#ff988c",
  Text: "#520589",
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
`; //////////////////////////////////////////////////////////////////////
// End Component

/***/ }),

/***/ "./constants/styles/CssUtils.tsx":
/*!***************************************!*\
  !*** ./constants/styles/CssUtils.tsx ***!
  \***************************************/
/*! exports provided: CssUtils, LockBodyScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CssUtils", function() { return CssUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockBodyScroll", function() { return LockBodyScroll; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Theme */ "./constants/Theme.tsx");
/* harmony import */ var _Root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Root */ "./constants/Root.tsx");

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

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(CssUtils, "ObjectFit", (position = "cover") => {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["position:absolute;left:0;right:0;top:0;bottom:0;object-fit:", ";width:100%;height:100%;object-position:center;max-width:100%;"], position);
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(CssUtils, "ForceFullWidth", (spacing = "0", addGutter = false) => {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["width:calc(100% + (", " * 2));margin-left:calc(", " * -1);margin-right:calc(", " * -1);max-width:100vw;", ""], spacing, spacing, spacing, addGutter ? Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["padding-left:", ";padding-right:", ";"], spacing, spacing) : null);
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(CssUtils, "DisableUserSelect", () => {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;"]);
});

const LockBodyScroll = styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"]`
    body, html {
      overflow: hidden !important;
    }
  `;

/***/ }),

/***/ "./constants/styles/Font.tsx":
/*!***********************************!*\
  !*** ./constants/styles/Font.tsx ***!
  \***********************************/
/*! exports provided: Font, Typography */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Font", function() { return Font; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Typography", function() { return Typography; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Base */ "./constants/styles/Base.tsx");
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
      @media (max-width: ${_Base__WEBPACK_IMPORTED_MODULE_1__["Base"].Media.Width.Md + "px"}) {
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
    @media (max-width: ${_Base__WEBPACK_IMPORTED_MODULE_1__["Base"].Media.Width.Md + "px"}) {
      font-size: 2rem;
    }
  }
  h2, .h2 {
    font-size: 3rem;
    @media (max-width: ${_Base__WEBPACK_IMPORTED_MODULE_1__["Base"].Media.Width.Md + "px"}) {
      font-size: 2rem;
    }
  }
  h3, .h3 {
    font-size: 2.5rem;
    @media (max-width: ${_Base__WEBPACK_IMPORTED_MODULE_1__["Base"].Media.Width.Md + "px"}) {
      font-size: 2rem;
    }
  }
  h4, .h4 {
    font-size: 2rem;
  }
  h5, .h5 {
    font-size: 1.75rem;
    @media (max-width: ${_Base__WEBPACK_IMPORTED_MODULE_1__["Base"].Media.Width.Md + "px"}) {
      font-size: 1rem;
    }
  }
  h6, .h6 {
    font-size: 1.5rem;
    @media (max-width: ${_Base__WEBPACK_IMPORTED_MODULE_1__["Base"].Media.Width.Md + "px"}) {
      font-size: 1.1rem;
    }
  }

  .headline {
    font-size: 7.25rem;
    @media (max-width: ${_Base__WEBPACK_IMPORTED_MODULE_1__["Base"].Media.Width.Md + "px"}) {
      font-size: 4rem;
    }
    @media (max-width: ${_Base__WEBPACK_IMPORTED_MODULE_1__["Base"].Media.Width.Sm + "px"}) {
      font-size: 3.5rem;
    }
  }

  h1, h2, h3, h4, h5, h6, p, .heading-padding { padding-bottom: calc(var(--Size) / 3.5); }
`;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "core-js/library/fn/array/from");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: HomePageClassName, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageClassName", function() { return HomePageClassName; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_interactive_InteractiveFrameHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/_interactive/InteractiveFrameHeader */ "./components/_interactive/InteractiveFrameHeader/index.tsx");
var _jsxFileName = "/Users/pflaxalt/Repositories/_pfl/web/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/**
 *
 * index.js
 * @author Peter Laxalt
 * @description The website home page.
 *
 */
// Core
 // Components

 // Begin Component
// __________________________________________________________________________________________

const HomePageClassName = "route__home-page";
/**
 *
 * pages/index.tsx
 * @author Peter Laxalt
 *
 */

const HomePage = () => __jsx("div", {
  className: `${HomePageClassName}`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, __jsx(_components_interactive_InteractiveFrameHeader__WEBPACK_IMPORTED_MODULE_1__["InteractiveFrameHeader"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/pflaxalt/Repositories/_pfl/web/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map