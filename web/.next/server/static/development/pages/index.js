module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/index.js": 0
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/Theme */ "./constants/Theme.tsx");
/* harmony import */ var _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_svg/DharmaType/styles.scss */ "./components/_svg/DharmaType/styles.scss.tsx");


var _jsxFileName = "/Users/pflaxalt/Repositories/_pfl/web/components/_interactive/DharmaCounter/DharmaCounter.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
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
class DharmaCounter extends react__WEBPACK_IMPORTED_MODULE_2___default.a.PureComponent {
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

    var offsetArr = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default()(Array(offsetCount).keys());

    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(DharmaCounterDisplay, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      updateLetterCount: this.updateLetterCount
    }, this.state, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251
      },
      __self: this
    })), offsetArr.map((n, idx) => {
      return __jsx(DharmaCounterDisplay, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        outlined: true,
        offset: n,
        key: idx,
        updateLetterCount: this.updateLetterCount
      }, this.state, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }));
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
  return __jsx(_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_4__["DharmaTypeStyle"], {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: `0 0 ${viewBoxWidth} ${viewBoxHeight}`,
    preserveAspectRatio: "none",
    className: `${_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_4__["DharmaTypeClassName"]} ${_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_4__["DharmaTypeClassName"]}--counter ${offset ? `${_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_4__["DharmaTypeClassName"]}--offset` : ""} ${addClass}`,
    style: {
      [`--${_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_4__["DharmaTypeClassName"]}-font-size`]: `${viewBoxHeight}px`,
      [`--${_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_4__["DharmaTypeClassName"]}-offset`]: `${offset ? offset : 0}`
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306
    },
    __self: undefined
  }, characters.map((char, idx) => {
    let countArray = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default()(Array(char.count).keys());

    return countArray.map((duplicate, idxx) => {
      let adjustedDuplicate = char.count > 1 ? char.count : duplicate + 1;
      let canCopy = Math.random() <= 0.5;
      let adjustedVerticalTranslation = viewBoxHeight / adjustedDuplicate * (idxx + 1) * characterVerticalTranslation;
      let adjustedVerticalScale = characterVerticalScale / adjustedDuplicate;
      return __jsx("g", {
        className: `${_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_4__["DharmaTypeClassName"]}__character-wrapper`,
        "data-char-id": idx,
        "data-char-count": duplicate,
        key: idxx,
        onClick: () => updateLetterCount(idx),
        style: {
          display: outlined && char.copies && canCopy ? "none" : "inherit"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        __self: undefined
      }, __jsx("filter", {
        id: `displacementFilter__${idx}__${idxx}${outlined ? "__outlined" : ""}`,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        },
        __self: undefined
      }, !outlined && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("feTurbulence", {
        type: "turbulence" // baseFrequency={0.6 * (idxx * 0.05)}
        // numOctaves={1 * (idxx + 20)}
        ,
        baseFrequency: 0,
        numOctaves: 0,
        result: "turbulence",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        __self: undefined
      }), __jsx("feDisplacementMap", {
        in2: "turbulence",
        in: "SourceGraphic" // scale={3 - idxx * 0.5}
        ,
        scale: 0,
        xChannelSelector: "R",
        yChannelSelector: "G",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        },
        __self: undefined
      })), outlined && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("feFlood", {
        "flood-color": _constants_Theme__WEBPACK_IMPORTED_MODULE_3__["Theme"].Color.varBackground,
        "flood-opacity": "1",
        result: "PINK",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        },
        __self: undefined
      }), __jsx("feMorphology", {
        in: "SourceAlpha",
        result: "DILATED",
        operator: "dilate",
        radius: ".1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        },
        __self: undefined
      }), __jsx("feComposite", {
        in: "PINK",
        in2: "DILATED",
        operator: "in",
        result: "OUTLINE",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374
        },
        __self: undefined
      }), __jsx("feMerge", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381
        },
        __self: undefined
      }, __jsx("feMergeNode", {
        in: "OUTLINE",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382
        },
        __self: undefined
      }), __jsx("feMergeNode", {
        in: "SourceGraphic",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        },
        __self: undefined
      })))), __jsx("text", {
        className: `${_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_4__["DharmaTypeClassName"]}__character`,
        transform: `translate(${characterWidth * idx} ${adjustedVerticalTranslation}) scale(${characterHorizontalScale}, ${adjustedVerticalScale})`,
        style: {
          [`--${_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_4__["DharmaTypeClassName"]}-key`]: idx,
          filter: `url(#displacementFilter__${idx}__${idxx}${outlined ? "__outlined" : ""})`
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389
        },
        __self: undefined
      }, __jsx("tspan", {
        className: `${_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_4__["DharmaTypeClassName"]}__letter`,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401
        },
        __self: undefined
      }, char.letter)));
    });
  })));
};

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
    label: "Lab",
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
    label: "Shop",
    href: "/"
  }, {
    label: "Resources",
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
      lineNumber: 93
    },
    __self: undefined
  }, __jsx("ul", {
    className: `${_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"]}__frame-items`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, items.map((item, idx) => {
    return __jsx("li", {
      key: idx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: undefined
    }, item.label);
  })), __jsx("ul", {
    className: `${_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"]}__frame-items`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, items.map((item, idx) => {
    return __jsx("li", {
      key: idx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
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


const InteractiveFrameHeader = ({
  includeType
}) => __jsx(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderStyle"], {
  className: `${_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"]}`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 121
  },
  __self: undefined
}, __jsx("div", {
  className: `${_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"]}__inner`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 124
  },
  __self: undefined
}, __jsx("div", {
  className: `${_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"]}__frame`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 127
  },
  __self: undefined
}, __jsx("div", {
  className: `${_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"]}__frame__y-axis`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 130
  },
  __self: undefined
}, __jsx("div", {
  className: `${_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"]}__frame__edge ${_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"]}__frame__edge--top`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 131
  },
  __self: undefined
}, __jsx(FrameItems, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 134
  },
  __self: undefined
})), __jsx("div", {
  className: `${_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"]}__frame__edge ${_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"]}__frame__edge--bottom`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 136
  },
  __self: undefined
}, __jsx(FrameItems, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 139
  },
  __self: undefined
}))), __jsx("div", {
  className: `${_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"]}__frame__x-axis`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 145
  },
  __self: undefined
}, __jsx("div", {
  className: `${_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"]}__frame__edge ${_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"]}__frame__edge--left`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 146
  },
  __self: undefined
}, __jsx(FrameItems, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 149
  },
  __self: undefined
})), __jsx("div", {
  className: `${_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"]}__frame__edge ${_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"]}__frame__edge--right`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 152
  },
  __self: undefined
}, __jsx(FrameItems, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 155
  },
  __self: undefined
})))), includeType ? __jsx("div", {
  className: `${_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"]}__type`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 163
  },
  __self: undefined
}, __jsx(_DharmaCounter__WEBPACK_IMPORTED_MODULE_1__["DharmaCounter"], {
  text: "LAXALT",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 164
  },
  __self: undefined
})) : null)); // End Component
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
})(["&.", "{--", "__frame-edge-size:", ";--", "__marquee-speed:60s;@media(max-width:", "){--", "__frame-edge-size:", ";}overflow:hidden;position:fixed;left:0;top:0;width:100vw;height:100vh;z-index:900;pointer-events:none;.", "__inner{width:100vw;height:100vh;position:relative;z-index:999;pointer-events:none;}.", ",.", "__frame{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;}.", "__type{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:calc(100% - (var(--", "__frame-edge-size) * 2));height:calc(100% - (var(--", "__frame-edge-size) * 2.25));@media(max-width:", "){transform:translate(-50%,-50%) rotate(90deg);width:calc(100vh - (var(--", "__frame-edge-size) * 2.25));height:calc(100vw - (var(--", "__frame-edge-size) * 2.25));}.", "{--", "-offset-size:10px;@media(max-width:", "){--", "-offset-size:5px;}top:0;left:0;right:0;bottom:0;width:100%;height:100%;&--offset{top:calc(var(--", "-offset-size) * (var(--", "-offset) * -1));left:calc(var(--", "-offset-size) * (var(--", "-offset) * 1));right:calc(var(--", "-offset-size) * (var(--", "-offset) * -1));bottom:calc(var(--", "-offset-size) * (var(--", "-offset) * 1));}}.", "__character{fill:", ";transition:stroke-width .5s ease;}}.", "__frame{z-index:500;&__y-axis,&__x-axis{position:absolute;overflow:hidden;left:50%;top:50%;pointer-events:none;}&__y-axis{width:100vw;height:100vh;transform:translate(-50%,-50%);}&__x-axis{width:100vh;height:100vw;transform:translate(-50%,-50%) rotate(90deg);}&__edge{font-size:calc(var(--", "__frame-edge-size) * 0.75);text-transform:uppercase;line-height:0;z-index:800;background:", ";.", "__frame-items{list-style-type:none;color:", ";height:var(--", "__frame-edge-size);display:block;align-items:center;justify-content:flex-start;li{margin-right:calc(var(--", "__frame-edge-size) / 2);}}.", "__marquee-container{flex-shrink:0;display:flex;justify-content:flex-start;flex-wrap:nowrap;position:relative;overflow:hidden;.", "__frame-items{display:flex;flex-wrap:nowrap;white-space:nowrap;flex-shrink:0;li{width:auto;flex-shrink:0;white-space:nowrap;vertical-align:middle;display:table-cell;}}}&--top,&--bottom,&--left,&--right{position:absolute;overflow:hidden;pointer-events:all;}&--top,&--right{border-bottom:1px solid ", ";.", "__frame-items{padding-top:calc(var(--", "__frame-edge-size) / 6);padding-bottom:calc(var(--", "__frame-edge-size) / 6);position:relative;animation:marqueeTopRightQuadrants var(--", "__marquee-speed) linear infinite;}}&--bottom,&--left{border-top:1px solid ", ";.", "__frame-items{padding-top:calc(var(--", "__frame-edge-size) / 6);padding-bottom:calc(var(--", "__frame-edge-size) / 6);animation:marqueeBottomLeftQuadrants var(--", "__marquee-speed) linear infinite;}}&--top,&--bottom{width:calc(100vw - var(--", "__frame-edge-size));}&--left,&--right{width:calc(100vh - var(--", "__frame-edge-size));}&--top{top:0;left:var(--", "__frame-edge-size);}&--bottom{bottom:0;right:var(--", "__frame-edge-size);}&--right{top:0;left:var(--", "__frame-edge-size);}&--left{bottom:0;left:0;}}}}"], InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_2__["Root"].FrameSize, InteractiveFrameHeaderClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Media.Width.Md, InteractiveFrameHeaderClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_2__["Root"].FrameSize, InteractiveFrameHeaderClassName, _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_3__["DharmaTypeClassName"], InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Media.Width.Sm, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_3__["DharmaTypeClassName"], _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_3__["DharmaTypeClassName"], _constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Media.Width.Sm, _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_3__["DharmaTypeClassName"], _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_3__["DharmaTypeClassName"], _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_3__["DharmaTypeClassName"], _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_3__["DharmaTypeClassName"], _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_3__["DharmaTypeClassName"], _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_3__["DharmaTypeClassName"], _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_3__["DharmaTypeClassName"], _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_3__["DharmaTypeClassName"], _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_3__["DharmaTypeClassName"], _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_3__["DharmaTypeClassName"], _constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Color.varForeground, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Color.varBackground, InteractiveFrameHeaderClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Color.varForeground, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Color.varForeground, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Color.varForeground, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName);

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
})(["&.", "{.", "__character-wrapper{position:relative;&[data-char-id=\"5\"]{transform:translateX(2.25px);}&[data-char-id=\"4\"]{transform:translateX(5.25px);}&[data-char-id=\"3\"]{transform:translateX(3.25px);}&[data-char-id=\"2\"]{transform:translateX(0.75px);}&[data-char-id=\"1\"]{transform:translateX(-1.5px);}&[data-char-id=\"0\"]{transform:translateX(0px);}&--hidden{display:none;}}.", "__character{font-size:var(--", "-font-size);font-family:dharma;font-weight:700;letter-spacing:0em;", ";}.", "__text{font-size:var(--", "-font-size);font-family:DharmaGothicC-ExBold,Dharma Gothic C;font-weight:700;letter-spacing:0em;transition:filter 1s ease-in-out;will-change:filter;}}"], DharmaTypeClassName, DharmaTypeClassName, DharmaTypeClassName, DharmaTypeClassName, _constants_styles_CssUtils__WEBPACK_IMPORTED_MODULE_3__["CssUtils"].DisableUserSelect(), DharmaTypeClassName, DharmaTypeClassName);

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

    /* --------- Frame */
    --FrameSize: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].FrameSize};

    /* ----------------------------------- Medium Width Viewports */
    @media (max-width: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Media.Width.Md}) {
      /* --------------- Base Measurements*/

        /* --------- Frame */
        --FrameSize: 2rem;

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
// ____________________________________________________________________________________



 // Begin Component
// ____________________________________________________________________________________

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
  Color: _styles_Color__WEBPACK_IMPORTED_MODULE_3__["Color"],
  // Frame
  FrameSize: _styles_Base__WEBPACK_IMPORTED_MODULE_2__["Base"].FrameSize + "rem"
}; // End Component
// ____________________________________________________________________________________

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

  },
  // Frame
  FrameSize: 2.5 // rem

}; // End Component
//////////////////////////////////////////////////////////////////////

/***/ }),

/***/ "./constants/styles/Color.tsx":
/*!************************************!*\
  !*** ./constants/styles/Color.tsx ***!
  \************************************/
/*! exports provided: Color, ColorContext_Defaults, useColorContext, ColorContext, Palette */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorContext_Defaults", function() { return ColorContext_Defaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useColorContext", function() { return useColorContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorContext", function() { return ColorContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Palette", function() { return Palette; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }

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
  const [colorTheme, setColorTheme] = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(ColorContext_Defaults);
  const setTheme = react__WEBPACK_IMPORTED_MODULE_7___default.a.useCallback(currentColorTheme => {
    setColorTheme(currentColorTheme);
  }, []);
  return _objectSpread({}, colorTheme, {
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

const ColorContext = react__WEBPACK_IMPORTED_MODULE_7___default.a.createContext(ColorContext_Defaults);
/**
 *
 * @name Palette
 * @description Global CSS Variables for palette
 *
 */

const Palette = styled_components__WEBPACK_IMPORTED_MODULE_8__["createGlobalStyle"]`
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

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(CssUtils, "CreateTheme", (clrPrimary, clrSecondary, clrBackground, clrForeground) => {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])([":root{--clrPrimary:", ";--clrSecondary:", ";--clrBackground:", ";--clrForeground:", ";}"], clrPrimary, clrSecondary, clrBackground, clrForeground);
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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
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
/* harmony import */ var _projects_dharma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects/dharma */ "./pages/projects/dharma.tsx");
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
}, __jsx(_projects_dharma__WEBPACK_IMPORTED_MODULE_1__["DharmaCanvasPage"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./pages/projects/dharma.tsx":
/*!***********************************!*\
  !*** ./pages/projects/dharma.tsx ***!
  \***********************************/
/*! exports provided: DharmaCanvasPage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DharmaCanvasPage", function() { return DharmaCanvasPage; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_interactive_InteractiveFrameHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/_interactive/InteractiveFrameHeader */ "./components/_interactive/InteractiveFrameHeader/index.tsx");
/* harmony import */ var _constants_styles_Color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/styles/Color */ "./constants/styles/Color.tsx");
/* harmony import */ var _constants_styles_Animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/styles/Animation */ "./constants/styles/Animation.tsx");

var _jsxFileName = "/Users/pflaxalt/Repositories/_pfl/web/pages/projects/dharma.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// Core
 // Utils

 // Theme
// import { Theme } from "../../constants/Theme";
// Types




 // Begin Component
// __________________________________________________________________________

const P5Wrapper = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-p5-wrapper */ "react-p5-wrapper", 7)), {
  loading: () => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null),
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-p5-wrapper */ "react-p5-wrapper")],
    modules: ["react-p5-wrapper"]
  }
});

class P5PageWithContext extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "renderP5", filename => {
      const sketch = __webpack_require__("./sketches/p5 sync recursive ^\\.\\/.*$")(`./${filename}`).default(this.state.windowWidth, this.state.windowHeight, 1, this.props.colorThemeContext);

      return __jsx(P5Wrapper, {
        sketch: sketch,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      });
    });

    this.state = {
      domLoaded: false,
      windowWidth: 0,
      windowHeight: 0
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
    const DharmaGlobalStyles = styled_components__WEBPACK_IMPORTED_MODULE_3__["createGlobalStyle"]`
      body, html {
        overflow: hidden;
      }

      .dharma-container {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;

        canvas {
          animation: ${_constants_styles_Animation__WEBPACK_IMPORTED_MODULE_6__["FadeIn"]} 1s ease 1;
          animation-fill-mode: forwards;
          animation-iteration-count: 1;
        }

        #p5_loading {
          display: none !important;
        }
      }
    `;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(DharmaGlobalStyles, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }), __jsx(_components_interactive_InteractiveFrameHeader__WEBPACK_IMPORTED_MODULE_4__["InteractiveFrameHeader"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }), this.state.domLoaded && this.state.windowHeight > 10 && this.state.windowWidth > 10 ? __jsx("div", {
      className: "dharma-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, this.renderP5("dharma")) : null);
  }

}

const DharmaCanvasPage = () => {
  const themeContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(_constants_styles_Color__WEBPACK_IMPORTED_MODULE_5__["ColorContext"]);
  return __jsx(P5PageWithContext, {
    colorThemeContext: themeContext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  });
};
/* harmony default export */ __webpack_exports__["default"] = (DharmaCanvasPage);

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
	"./dharma": "./sketches/p5/dharma.tsx",
	"./dharma.tsx": "./sketches/p5/dharma.tsx",
	"./dharma_v0": "./sketches/p5/dharma_v0.tsx",
	"./dharma_v0.tsx": "./sketches/p5/dharma_v0.tsx",
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

/***/ "./sketches/p5/d1.tsx":
/*!****************************!*\
  !*** ./sketches/p5/d1.tsx ***!
  \****************************/
/*! exports provided: default */
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

/***/ "./sketches/p5/d2.tsx":
/*!****************************!*\
  !*** ./sketches/p5/d2.tsx ***!
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

/***/ "./sketches/p5/d8.js":
/*!***************************!*\
  !*** ./sketches/p5/d8.js ***!
  \***************************/
/*! no static exports found */
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

/***/ "./sketches/p5/dharma.tsx":
/*!********************************!*\
  !*** ./sketches/p5/dharma.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");









function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }

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
      characters[idx] = _objectSpread({}, char, {
        count: char.count + 1
      });
      previousCountUpdateTime = p.millis();
      return;
    } else if (char.count === maxCount) {
      characters[idx] = _objectSpread({}, char, {
        count: char.count - 1,
        countIsIncrementing: false,
        countIsDecrementing: true
      });
      previousCountUpdateTime = p.millis();
      return;
    } else if (char.count > minCount && char.countIsDecrementing) {
      characters[idx] = _objectSpread({}, char, {
        count: char.count - 1,
        countIsDecrementing: true
      });
      previousCountUpdateTime = p.millis();
      return;
    } else if (char.count === minCount && char.countIsDecrementing) {
      characters[idx] = _objectSpread({}, char, {
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
      characters[idx] = _objectSpread({}, char, {
        copies: char.copies + 1
      });
      previousCopyUpdateTime = p.millis();
      return;
    } else if (char.copies === maxCopies) {
      characters[idx] = _objectSpread({}, char, {
        copies: char.copies - 1,
        copiesAreIncrementing: false,
        copiesAreDecrementing: true
      });
      previousCopyUpdateTime = p.millis();
      return;
    } else if (char.copies > minCopies && char.copiesAreDecrementing) {
      characters[idx] = _objectSpread({}, char, {
        copies: char.copies - 1,
        copiesAreDecrementing: true
      });
      previousCopyUpdateTime = p.millis();
      return;
    } else if (char.copies === minCopies && char.copiesAreDecrementing) {
      characters[idx] = _objectSpread({}, char, {
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

/***/ "./sketches/p5/dharma_v0.tsx":
/*!***********************************!*\
  !*** ./sketches/p5/dharma_v0.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/Theme */ "./constants/Theme.tsx");


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
    p.fill(`${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Color.Galaxy}`);
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

/***/ "./sketches/p5/glsl.tsx":
/*!******************************!*\
  !*** ./sketches/p5/glsl.tsx ***!
  \******************************/
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

/***/ 4:
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

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-p5-wrapper":
/*!***********************************!*\
  !*** external "react-p5-wrapper" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-p5-wrapper");

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