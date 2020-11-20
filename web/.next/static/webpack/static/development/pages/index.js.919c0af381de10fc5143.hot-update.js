webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
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
            copies: []
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
            copies: []
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
            copies: []
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
            copies: []
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
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx(DharmaCounterDisplay, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
        updateLetterCount: this.updateLetterCount
      }, this.state, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      })), __jsx(DharmaCounterDisplay, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
        outlined: true,
        offset: 1,
        updateLetterCount: this.updateLetterCount
      }, this.state, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      })));
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
    style: (_ref = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, "--".concat(_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_11__["DharmaTypeClassName"], "-font-size"), "".concat(viewBoxHeight, "px")), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, "--".concat(_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_11__["DharmaTypeClassName"], "-offset"), "".concat(offset ? offset : 0)), _ref),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }, __jsx("filter", {
    id: "top_filter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }, __jsx("feTurbulence", {
    type: "turbulence",
    baseFrequency: 10,
    numOctaves: 3,
    result: "turbulence",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }), __jsx("feDisplacementMap", {
    in2: "turbulence",
    "in": "SourceGraphic",
    scale: 0.4,
    xChannelSelector: "R",
    yChannelSelector: "G",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: this
  })), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
    },
    __self: this
  }, characters.map(function (_char, idx) {
    var countArray = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(Array(_char.count).keys());

    return countArray.map(function (duplicate, idxx) {
      var _ref2;

      var adjustedDuplicate = _char.count > 1 ? _char.count : duplicate + 1;
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
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      }, __jsx("filter", {
        id: "displacementFilter__".concat(idx, "__").concat(idxx).concat(outlined ? "__outlined" : ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
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
          lineNumber: 326
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
          lineNumber: 334
        },
        __self: this
      })), outlined && __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("feFlood", {
        "flood-color": _constants_Theme__WEBPACK_IMPORTED_MODULE_10__["Theme"].Color.Background,
        "flood-opacity": "1",
        result: "PINK",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        },
        __self: this
      }), __jsx("feMorphology", {
        "in": "SourceAlpha",
        result: "DILATED",
        operator: "dilate",
        radius: ".1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        },
        __self: this
      }), __jsx("feComposite", {
        "in": "PINK",
        in2: "DILATED",
        operator: "in",
        result: "OUTLINE",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359
        },
        __self: this
      }), __jsx("feMerge", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        },
        __self: this
      }, __jsx("feMergeNode", {
        "in": "OUTLINE",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        },
        __self: this
      }), __jsx("feMergeNode", {
        "in": "SourceGraphic",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        },
        __self: this
      })))), __jsx("text", {
        className: "".concat(_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_11__["DharmaTypeClassName"], "__character"),
        transform: "translate(".concat(characterWidth * idx, " ").concat(adjustedVerticalTranslation, ") scale(").concat(characterHorizontalScale, ", ").concat(adjustedVerticalScale, ")"),
        style: (_ref2 = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, "--".concat(_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_11__["DharmaTypeClassName"], "-key"), idx), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, "filter", "url(#displacementFilter__".concat(idx, "__").concat(idxx).concat(outlined ? "__outlined" : "", ")")), _ref2),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374
        },
        __self: this
      }, __jsx("tspan", {
        className: "".concat(_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_11__["DharmaTypeClassName"], "__letter"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        },
        __self: this
      }, _char.letter)));
    });
  })));
};

/***/ })

})
//# sourceMappingURL=index.js.919c0af381de10fc5143.hot-update.js.map