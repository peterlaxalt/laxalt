webpackHotUpdate("static/development/pages/projects/dharma.js",{

/***/ "./components/_interactive/DharmaCounter/DharmaCounter.tsx":
/*!*****************************************************************!*\
  !*** ./components/_interactive/DharmaCounter/DharmaCounter.tsx ***!
  \*****************************************************************/
/*! exports provided: DharmaCounter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DharmaCounter", function() { return DharmaCounter; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../constants/Theme */ "./constants/Theme.tsx");
/* harmony import */ var _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../_svg/DharmaType/styles.scss */ "./components/_svg/DharmaType/styles.scss.tsx");









var _jsxFileName = "/Users/pflaxalt/Repositories/_pfl/web/components/_interactive/DharmaCounter/DharmaCounter.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;
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
var DharmaCounter =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(DharmaCounter, _React$PureComponent);

  function DharmaCounter(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, DharmaCounter);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(DharmaCounter).call(this, props));
    _this.state = {
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
    _this.incrementLetterCount = _this.incrementLetterCount.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.decrementLetterCount = _this.decrementLetterCount.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.resetLetterCount = _this.resetLetterCount.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.updateLetterCount = _this.updateLetterCount.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.letterCountTimer = _this.letterCountTimer.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.offsetCountTimer = _this.offsetCountTimer.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.incrementOffsetCount = _this.incrementOffsetCount.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(DharmaCounter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.text) {
        // ____________________________________________
        // Get text / create array
        var text = this.props.text;
        var splitCharacterArray = text.split("");
        var characterArray = splitCharacterArray.map(function (character, idx) {
          return {
            letter: character,
            count: 1,
            idx: idx,
            copies: Math.random() <= 0.5
          };
        }); // ____________________________________________
        // USE THESE TO TWEAK YOUR CHARACTERS TO FIT

        var viewBoxHeight = 100;
        var viewBoxWidth = 100;
        var characterCount = splitCharacterArray.length;
        var characterWidth = viewBoxWidth / characterCount; // let characterVerticalTranslation = 0.963; // Multiplied by the viewBoxHeight

        var characterVerticalTranslation = 0.993; // Multiplied by the viewBoxHeight

        var characterHorizontalScale = 0.75; // Multiplied by the characterWidth

        var characterVerticalScale = 1.38; // Multiplied by the characterWidth

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
  }, {
    key: "incrementLetterCount",
    value: function incrementLetterCount(id) {
      this.setState({
        characters: this.state.characters.map(function (character, idx) {
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
  }, {
    key: "decrementLetterCount",
    value: function decrementLetterCount(id) {
      this.setState({
        characters: this.state.characters.map(function (character, idx) {
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
  }, {
    key: "resetLetterCount",
    value: function resetLetterCount(id) {
      this.setState({
        characters: this.state.characters.map(function (character, idx) {
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
  }, {
    key: "updateLetterCount",
    value: function updateLetterCount(id) {
      if (this.state.characters && this.state.characters.length > 0) {
        var matchedCharacter = this.state.characters.filter(function (character) {
          return character.idx == id;
        })[0];
        var maxCount = 4;

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
  }, {
    key: "letterCountTimer",
    value: function letterCountTimer() {
      var _this2 = this;

      function generateRandomInteger(min, max) {
        return Math.floor(min + Math.random() * (max + 1 - min));
      }

      window.setInterval(function () {
        return _this2.updateLetterCount(generateRandomInteger(0, _this2.state.characters.length));
      }, 3000);
    }
  }, {
    key: "incrementOffsetCount",
    value: function incrementOffsetCount() {
      this.setState({
        offsetCount: this.state.offsetCount < 15 ? this.state.offsetCount + 1 : 2
      });
      return;
    }
  }, {
    key: "offsetCountTimer",
    value: function offsetCountTimer() {
      var _this3 = this;

      window.setInterval(function () {
        return _this3.incrementOffsetCount();
      }, 5000);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var offsetCount = this.state.offsetCount;

      var offsetArr = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_2___default()(Array(offsetCount).keys());

      return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx(DharmaCounterDisplay, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        updateLetterCount: this.updateLetterCount
      }, this.state, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      })), offsetArr.map(function (n, idx) {
        return __jsx(DharmaCounterDisplay, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
          outlined: true,
          offset: n,
          key: idx,
          updateLetterCount: _this4.updateLetterCount
        }, _this4.state, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 258
          },
          __self: this
        }));
      }));
    }
  }]);

  return DharmaCounter;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.PureComponent);

var DharmaCounterDisplay = function DharmaCounterDisplay(props) {
  var _ref;

  var viewBoxHeight = props.viewBoxHeight,
      viewBoxWidth = props.viewBoxWidth,
      characters = props.characters,
      characterWidth = props.characterWidth,
      characterHorizontalScale = props.characterHorizontalScale,
      characterVerticalScale = props.characterVerticalScale,
      characterVerticalTranslation = props.characterVerticalTranslation,
      updateLetterCount = props.updateLetterCount,
      offset = props.offset,
      outlined = props.outlined,
      addClass = props.addClass;
  return __jsx(_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_11__["DharmaTypeStyle"], {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 ".concat(viewBoxWidth, " ").concat(viewBoxHeight),
    preserveAspectRatio: "none",
    className: "".concat(_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_11__["DharmaTypeClassName"], " ").concat(_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_11__["DharmaTypeClassName"], "--counter ").concat(offset ? "".concat(_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_11__["DharmaTypeClassName"], "--offset") : "", " ").concat(addClass),
    style: (_ref = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "--".concat(_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_11__["DharmaTypeClassName"], "-font-size"), "".concat(viewBoxHeight, "px")), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "--".concat(_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_11__["DharmaTypeClassName"], "-offset"), "".concat(offset ? offset : 0)), _ref),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306
    },
    __self: this
  }, characters.map(function (_char, idx) {
    var countArray = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_2___default()(Array(_char.count).keys());

    return countArray.map(function (duplicate, idxx) {
      var _ref2;

      var adjustedDuplicate = _char.count > 1 ? _char.count : duplicate + 1;
      var canCopy = Math.random() <= 0.5;
      var adjustedVerticalTranslation = viewBoxHeight / adjustedDuplicate * (idxx + 1) * characterVerticalTranslation;
      var adjustedVerticalScale = characterVerticalScale / adjustedDuplicate;
      return __jsx("g", {
        className: "".concat(_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_11__["DharmaTypeClassName"], "__character-wrapper"),
        "data-char-id": idx,
        "data-char-count": duplicate,
        key: idxx,
        onClick: function onClick() {
          return updateLetterCount(idx);
        },
        style: {
          display: outlined && _char.copies && canCopy ? "none" : "inherit"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        __self: this
      }, __jsx("filter", {
        id: "displacementFilter__".concat(idx, "__").concat(idxx).concat(outlined ? "__outlined" : ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        },
        __self: this
      }, !outlined && __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("feTurbulence", {
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
        __self: this
      }), __jsx("feDisplacementMap", {
        in2: "turbulence",
        "in": "SourceGraphic" // scale={3 - idxx * 0.5}
        ,
        scale: 0,
        xChannelSelector: "R",
        yChannelSelector: "G",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        },
        __self: this
      })), outlined && __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("feFlood", {
        "flood-color": _constants_Theme__WEBPACK_IMPORTED_MODULE_10__["Theme"].Color.varBackground,
        "flood-opacity": "1",
        result: "PINK",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        },
        __self: this
      }), __jsx("feMorphology", {
        "in": "SourceAlpha",
        result: "DILATED",
        operator: "dilate",
        radius: ".1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        },
        __self: this
      }), __jsx("feComposite", {
        "in": "PINK",
        in2: "DILATED",
        operator: "in",
        result: "OUTLINE",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374
        },
        __self: this
      }), __jsx("feMerge", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381
        },
        __self: this
      }, __jsx("feMergeNode", {
        "in": "OUTLINE",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382
        },
        __self: this
      }), __jsx("feMergeNode", {
        "in": "SourceGraphic",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        },
        __self: this
      })))), __jsx("text", {
        className: "".concat(_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_11__["DharmaTypeClassName"], "__character"),
        transform: "translate(".concat(characterWidth * idx, " ").concat(adjustedVerticalTranslation, ") scale(").concat(characterHorizontalScale, ", ").concat(adjustedVerticalScale, ")"),
        style: (_ref2 = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "--".concat(_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_11__["DharmaTypeClassName"], "-key"), idx), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "filter", "url(#displacementFilter__".concat(idx, "__").concat(idxx).concat(outlined ? "__outlined" : "", ")")), _ref2),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389
        },
        __self: this
      }, __jsx("tspan", {
        className: "".concat(_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_11__["DharmaTypeClassName"], "__letter"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401
        },
        __self: this
      }, _char.letter)));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
var FrameItems = function FrameItems() {
  var items = [{
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
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__marquee-container"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("ul", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame-items"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, items.map(function (item, idx) {
    return __jsx("li", {
      key: idx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, item.label);
  })), __jsx("ul", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame-items"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, items.map(function (item, idx) {
    return __jsx("li", {
      key: idx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
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


var InteractiveFrameHeader = function InteractiveFrameHeader(_ref) {
  var includeType = _ref.includeType;
  return __jsx(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderStyle"], {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__inner"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__y-axis"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge ").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge--top"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx(FrameItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  })), __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge ").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge--bottom"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx(FrameItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }))), __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__x-axis"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge ").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge--left"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx(FrameItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  })), __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge ").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__frame__edge--right"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx(FrameItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  })))), includeType ? __jsx("div", {
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["InteractiveFrameHeaderClassName"], "__type"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx(_DharmaCounter__WEBPACK_IMPORTED_MODULE_1__["DharmaCounter"], {
    text: "LAXALT",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  })) : null));
}; // End Component
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
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

var InteractiveFrameHeaderClassName = "interactive-frame-header";
/**
 *
 * @name InteractiveFrameHeaderStyle
 * @author Peter Laxalt
 *
 */

var InteractiveFrameHeaderStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "stylesscss__InteractiveFrameHeaderStyle",
  componentId: "tg0k5n-0"
})(["&.", "{--", "__frame-edge-size:", ";--", "__marquee-speed:60s;@media(max-width:", "){--", "__frame-edge-size:", ";}overflow:hidden;.", "__inner{width:100vw;height:100vh;position:relative;}.", ",.", "__frame{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;}.", "__type{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:calc(100% - (var(--", "__frame-edge-size) * 2));height:calc(100% - (var(--", "__frame-edge-size) * 2.25));@media(max-width:", "){transform:translate(-50%,-50%) rotate(90deg);width:calc(100vh - (var(--", "__frame-edge-size) * 2.25));height:calc(100vw - (var(--", "__frame-edge-size) * 2.25));}.", "{--", "-offset-size:10px;@media(max-width:", "){--", "-offset-size:5px;}top:0;left:0;right:0;bottom:0;width:100%;height:100%;&--offset{top:calc(var(--", "-offset-size) * (var(--", "-offset) * -1));left:calc(var(--", "-offset-size) * (var(--", "-offset) * 1));right:calc(var(--", "-offset-size) * (var(--", "-offset) * -1));bottom:calc(var(--", "-offset-size) * (var(--", "-offset) * 1));}}.", "__character{fill:", ";transition:stroke-width .5s ease;}}.", "__frame{z-index:500;&__y-axis,&__x-axis{position:absolute;overflow:hidden;left:50%;top:50%;pointer-events:none;}&__y-axis{width:100vw;height:100vh;transform:translate(-50%,-50%);}&__x-axis{width:100vh;height:100vw;transform:translate(-50%,-50%) rotate(90deg);}&__edge{font-size:calc(var(--", "__frame-edge-size) * 0.75);text-transform:uppercase;line-height:0;z-index:800;background:", ";.", "__frame-items{list-style-type:none;color:", ";height:var(--", "__frame-edge-size);display:block;align-items:center;justify-content:flex-start;li{margin-right:calc(var(--", "__frame-edge-size) / 2);}}.", "__marquee-container{flex-shrink:0;display:flex;justify-content:flex-start;flex-wrap:nowrap;position:relative;overflow:hidden;.", "__frame-items{display:flex;flex-wrap:nowrap;white-space:nowrap;flex-shrink:0;li{width:auto;flex-shrink:0;white-space:nowrap;vertical-align:middle;display:table-cell;}}}&--top,&--bottom,&--left,&--right{position:absolute;overflow:hidden;pointer-events:all;}&--top,&--right{border-bottom:1px solid ", ";.", "__frame-items{padding-top:calc(var(--", "__frame-edge-size) / 6);padding-bottom:calc(var(--", "__frame-edge-size) / 6);position:relative;animation:marqueeTopRightQuadrants var(--", "__marquee-speed) linear infinite;}}&--bottom,&--left{border-top:1px solid ", ";.", "__frame-items{padding-top:calc(var(--", "__frame-edge-size) / 6);padding-bottom:calc(var(--", "__frame-edge-size) / 6);animation:marqueeBottomLeftQuadrants var(--", "__marquee-speed) linear infinite;}}&--top,&--bottom{width:calc(100vw - var(--", "__frame-edge-size));}&--left,&--right{width:calc(100vh - var(--", "__frame-edge-size));}&--top{top:0;left:var(--", "__frame-edge-size);}&--bottom{bottom:0;right:var(--", "__frame-edge-size);}&--right{top:0;left:var(--", "__frame-edge-size);}&--left{bottom:0;left:0;}}}}"], InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_2__["Root"].FrameSize, InteractiveFrameHeaderClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Media.Width.Md, InteractiveFrameHeaderClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_2__["Root"].FrameSize, InteractiveFrameHeaderClassName, _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_3__["DharmaTypeClassName"], InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Media.Width.Sm, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_3__["DharmaTypeClassName"], _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_3__["DharmaTypeClassName"], _constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Base.Media.Width.Sm, _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_3__["DharmaTypeClassName"], _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_3__["DharmaTypeClassName"], _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_3__["DharmaTypeClassName"], _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_3__["DharmaTypeClassName"], _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_3__["DharmaTypeClassName"], _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_3__["DharmaTypeClassName"], _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_3__["DharmaTypeClassName"], _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_3__["DharmaTypeClassName"], _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_3__["DharmaTypeClassName"], _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_3__["DharmaTypeClassName"], _constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Color.varForeground, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Color.varBackground, InteractiveFrameHeaderClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Color.varForeground, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Color.varForeground, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__["Theme"].Color.varForeground, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName);

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
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

var DharmaTypeClassName = "dharma-type";
/**
 *
 * @name DharmaTypeStyle
 * @author Peter Laxalt
 *
 */

var DharmaTypeStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].svg.withConfig({
  displayName: "stylesscss__DharmaTypeStyle",
  componentId: "lgdyqd-0"
})(["&.", "{.", "__character-wrapper{position:relative;&[data-char-id=\"5\"]{transform:translateX(2.25px);}&[data-char-id=\"4\"]{transform:translateX(5.25px);}&[data-char-id=\"3\"]{transform:translateX(3.25px);}&[data-char-id=\"2\"]{transform:translateX(0.75px);}&[data-char-id=\"1\"]{transform:translateX(-1.5px);}&[data-char-id=\"0\"]{transform:translateX(0px);}&--hidden{display:none;}}.", "__character{font-size:var(--", "-font-size);font-family:dharma;font-weight:700;letter-spacing:0em;", ";}.", "__text{font-size:var(--", "-font-size);font-family:DharmaGothicC-ExBold,Dharma Gothic C;font-weight:700;letter-spacing:0em;transition:filter 1s ease-in-out;will-change:filter;}}"], DharmaTypeClassName, DharmaTypeClassName, DharmaTypeClassName, DharmaTypeClassName, _constants_styles_CssUtils__WEBPACK_IMPORTED_MODULE_3__["CssUtils"].DisableUserSelect(), DharmaTypeClassName, DharmaTypeClassName);

/***/ }),

/***/ "./pages/projects/dharma.tsx":
/*!***********************************!*\
  !*** ./pages/projects/dharma.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants/Theme */ "./constants/Theme.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_interactive_InteractiveFrameHeader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/_interactive/InteractiveFrameHeader */ "./components/_interactive/InteractiveFrameHeader/index.tsx");








var _jsxFileName = "/Users/pflaxalt/Repositories/_pfl/web/pages/projects/dharma.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      body, html {\n        overflow: hidden;\n      }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// Core
 // Utils

 // Theme

 // Types


 // Begin Component
// __________________________________________________________________________

var P5Wrapper = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-p5-wrapper */ "./node_modules/react-p5-wrapper/dist/index.js", 7));
}, {
  loading: function loading() {
    return __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
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
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(P5Page, _Component);

  function P5Page(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, P5Page);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(P5Page).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "renderP5", function (filename) {
      var sketch = __webpack_require__("./sketches/p5 sync recursive ^\\.\\/.*$")("./".concat(filename))["default"](_this.state.windowWidth, _this.state.windowHeight, 1, _this.state.backgroundColor);

      return __jsx(P5Wrapper, {
        sketch: sketch,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      });
    });

    _this.state = {
      domLoaded: false,
      windowWidth: 0,
      windowHeight: 0,
      backgroundColor: _constants_Theme__WEBPACK_IMPORTED_MODULE_10__["Theme"].Color.Background
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(P5Page, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if ("object") {
        this.setState({
          windowWidth: window.innerWidth,
          windowHeight: window.innerHeight,
          domLoaded: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var GlobalScrollLock = Object(styled_components__WEBPACK_IMPORTED_MODULE_11__["createGlobalStyle"])(_templateObject());
      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx(GlobalScrollLock, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }), __jsx(_components_interactive_InteractiveFrameHeader__WEBPACK_IMPORTED_MODULE_12__["InteractiveFrameHeader"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), this.state.domLoaded && this.state.windowHeight > 10 && this.state.windowWidth > 10 ? __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, this.renderP5("dharma")) : null);
    }
  }]);

  return P5Page;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (P5Page);

/***/ })

})
//# sourceMappingURL=dharma.js.313a10ade2d8dc31d80b.hot-update.js.map