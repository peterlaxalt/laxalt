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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_svg/DharmaType/styles.scss */ "./components/_svg/DharmaType/styles.scss.tsx");






var _jsxFileName = "/Users/pflaxalt/Repositories/_pfl/web/components/_interactive/DharmaCounter/DharmaCounter.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;
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
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(DharmaCounter, _React$PureComponent);

  function DharmaCounter(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DharmaCounter);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(DharmaCounter).call(this, props));
    _this.state = {
      text: "",
      characters: [],
      viewBoxHeight: 0,
      viewBoxWidth: 0,
      characterWidth: 0,
      characterVerticalTranslation: 0,
      isInitialized: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(DharmaCounter, [{
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
            idx: idx
          };
        }); // ____________________________________________
        // USE THESE TO TWEAK YOUR CHARACTERS TO FIT

        var viewBoxHeight = 173.21;
        var viewBoxWidth = 215.21;
        var characterCount = splitCharacterArray.length;
        var characterWidth = viewBoxWidth / characterCount;
        var characterVerticalTranslation = 0.983; // Multiplied by the viewBoxHeight

        this.setState({
          text: text,
          characters: characterArray,
          viewBoxHeight: viewBoxHeight,
          viewBoxWidth: viewBoxWidth,
          characterWidth: characterWidth,
          characterVerticalTranslation: characterVerticalTranslation,
          isInitialized: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          viewBoxHeight = _this$state.viewBoxHeight,
          viewBoxWidth = _this$state.viewBoxWidth,
          characters = _this$state.characters,
          characterWidth = _this$state.characterWidth,
          characterVerticalTranslation = _this$state.characterVerticalTranslation;
      console.log("DharmaCounter state:", this.state);
      return __jsx(_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_7__["DharmaTypeStyle"], {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 ".concat(viewBoxWidth, " ").concat(viewBoxHeight),
        preserveAspectRatio: "none",
        className: "".concat(_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_7__["DharmaTypeClassName"], " ").concat(_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_7__["DharmaTypeClassName"], "--couter"),
        style: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "--".concat(_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_7__["DharmaTypeClassName"], "-font-size"), "".concat(viewBoxHeight, "px")),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, __jsx("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, characters.map(function (_char, idx) {
        return __jsx("g", {
          className: "".concat(_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_7__["DharmaTypeClassName"], "__character-wrapper"),
          key: idx,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          },
          __self: this
        }, __jsx("text", {
          className: "".concat(_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_7__["DharmaTypeClassName"], "__character"),
          transform: "translate(".concat(characterWidth * idx, " ").concat(viewBoxHeight * characterVerticalTranslation, ") scale(1, 1.38)"),
          style: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "--".concat(_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_7__["DharmaTypeClassName"], "-key"), idx),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          },
          __self: this
        }, __jsx("tspan", {
          className: "".concat(_svg_DharmaType_styles_scss__WEBPACK_IMPORTED_MODULE_7__["DharmaTypeClassName"], "__letter"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        }, _char.letter)));
      })));
    }
  }]);

  return DharmaCounter;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.PureComponent);

/***/ })

})
//# sourceMappingURL=index.js.31cd91459461d3a59e73.hot-update.js.map