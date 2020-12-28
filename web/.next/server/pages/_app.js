module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		2: 0
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "/vEV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ InteractiveOverlayNavigation; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./constants/site/Settings.tsx
var Settings = __webpack_require__("Q9BO");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/InteractiveEyeball/styles.scss.tsx
var styles_scss = __webpack_require__("sUW2");

// CONCATENATED MODULE: ./components/InteractiveEyeball/InteractiveEyeball.tsx



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Core
 // Constants

// Styles
 // Begin Types
// __________________________________________________________________________________________

/**
 *
 * @name InteractiveEyeball
 * @author Peter Laxalt
 *
 */
class InteractiveEyeball_InteractiveEyeball extends external_react_["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "pupilRef", /*#__PURE__*/external_react_default.a.createRef());

    this.state = {
      mouseX: 0,
      mouseY: 0,
      scrollX: 0,
      scrollY: 0,
      pupilWidth: 0,
      pupilHeight: 0,
      pupilOffsetX: 0,
      pupilOffsetY: 0,
      rotation: 0
    };
    this.handleMouseMovement = this.handleMouseMovement.bind(this);
    this.calculatePupilBoundaries = this.calculatePupilBoundaries.bind(this);
  }
  /**
   *
   * @name componentDidMount()
   *
   */


  componentDidMount() {
    if ( true && this.pupilRef) {
      this.calculatePupilBoundaries();
      window.addEventListener("mousemove", this.handleMouseMovement);
    } else {
      return;
    }
  }

  componentWillUnmount() {
    if ("undefined") {
      window.removeEventListener("mousemove", this.handleMouseMovement);
    }
  }

  calculatePupilBoundaries() {
    if (this.pupilRef.current) {
      let pupilClientRect = this.pupilRef.current.getBoundingClientRect();
      this.setState({
        pupilWidth: pupilClientRect.width,
        pupilHeight: pupilClientRect.height,
        pupilOffsetX: pupilClientRect.left,
        pupilOffsetY: pupilClientRect.top
      });
    }
  }

  handleMouseMovement(e) {
    if (e) {
      // let radians = Math.atan2(
      //   e.screenY - (this.state.pupilOffsetY - this.state.pupilHeight / 2),
      //   e.screenX - (this.state.pupilOffsetX - this.state.pupilWidth / 2)
      // );
      let scrollContainer = this.props.scrollContainer && this.props.scrollContainer.current ? this.props.scrollContainer.current : document.querySelector("html");
      let radians = Math.atan2(e.clientY + scrollContainer.scrollTop - (this.state.pupilOffsetY - this.state.pupilHeight / 2), e.clientX - (this.state.pupilOffsetX - this.state.pupilWidth / 2));
      let angle = radians * (180 / Math.PI) - 15;
      this.setState({
        rotation: angle
      });
    } else {
      return;
    }
  }

  render() {
    // console.log(this.state);
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(styles_scss["b" /* InteractiveEyeballStyle */], {
      className: `${styles_scss["a" /* InteractiveEyeballClassName */]} ${this.props.addClass ? this.props.addClass : ''} ${styles_scss["a" /* InteractiveEyeballClassName */]}--is-${this.props.isInverted ? `inverted` : `not-inverted`}`,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        className: `${styles_scss["a" /* InteractiveEyeballClassName */]}__outline`
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        className: `${styles_scss["a" /* InteractiveEyeballClassName */]}__pupil-wrapper`,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          ref: this.pupilRef,
          className: `${styles_scss["a" /* InteractiveEyeballClassName */]}__pupil`,
          style: {
            transform: `rotate(${this.state.rotation}deg)`
          },
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: `${styles_scss["a" /* InteractiveEyeballClassName */]}__pupil__el`
          })
        })
      })]
    });
  }

} // End Component
// ______________________________________________________________________________
// CONCATENATED MODULE: ./components/InteractiveEyeball/index.tsx

// EXTERNAL MODULE: ./components/InteractiveOverlayNavigation/styles.scss.tsx
var InteractiveOverlayNavigation_styles_scss = __webpack_require__("97/L");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");

// EXTERNAL MODULE: ./components/OvalButton/index.tsx + 2 modules
var OvalButton = __webpack_require__("wFD6");

// CONCATENATED MODULE: ./components/InteractiveOverlayNavigation/InteractiveOverlayNavigation.tsx



// Core
 // Constants

 // Components


 // Styles



 // Begin Types
// __________________________________________________________________________________________

// Begin Data
// __________________________________________________________________________________________

/**
 *
 * @name InteractiveOverlayNavigation
 * @author Peter Laxalt
 *
 */
const InteractiveOverlayNavigation = ({
  addClass,
  toggleOverlayAndLogotypeExpansion
}) => {
  const GlobalScrollLock = external_styled_components_["createGlobalStyle"]`
    body,
    html {
      overflow: hidden !important;
    }
  `;
  const InteractiveOverlayRef = /*#__PURE__*/external_react_default.a.createRef();
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(GlobalScrollLock, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(InteractiveOverlayNavigation_styles_scss["b" /* InteractiveOverlayNavigationStyle */], {
      className: `${InteractiveOverlayNavigation_styles_scss["a" /* InteractiveOverlayNavigationClassName */]} ${addClass}`,
      ref: InteractiveOverlayRef,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: `${InteractiveOverlayNavigation_styles_scss["a" /* InteractiveOverlayNavigationClassName */]}__inner`,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(OvalButton["a" /* OvalButton */], {
          label: `Home`,
          href: `/`,
          onClick: () => toggleOverlayAndLogotypeExpansion(),
          addClass: `${InteractiveOverlayNavigation_styles_scss["a" /* InteractiveOverlayNavigationClassName */]}__oval-btn--home`,
          invert: true
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(OvalButton["a" /* OvalButton */], {
          label: `Misc`,
          href: Settings["a" /* Settings */].miscPage,
          onClick: () => toggleOverlayAndLogotypeExpansion(),
          addClass: `${InteractiveOverlayNavigation_styles_scss["a" /* InteractiveOverlayNavigationClassName */]}__oval-btn--close`,
          invert: true
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: `${InteractiveOverlayNavigation_styles_scss["a" /* InteractiveOverlayNavigationClassName */]}__social`,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
            className: `${InteractiveOverlayNavigation_styles_scss["a" /* InteractiveOverlayNavigationClassName */]}__social__list`,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              className: `${InteractiveOverlayNavigation_styles_scss["a" /* InteractiveOverlayNavigationClassName */]}__social__list__item`,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                className: `${InteractiveOverlayNavigation_styles_scss["a" /* InteractiveOverlayNavigationClassName */]}__social__list__item__label ${InteractiveOverlayNavigation_styles_scss["a" /* InteractiveOverlayNavigationClassName */]}__social__list__item__label--anchor`,
                children: "Subscribe"
              })
            }), Settings["b" /* SiteNavigation */].OverlayNav.SocialItems.map((item, idx) => {
              return /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                className: `${InteractiveOverlayNavigation_styles_scss["a" /* InteractiveOverlayNavigationClassName */]}__social__list__item`,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  href: item.href,
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    className: `${InteractiveOverlayNavigation_styles_scss["a" /* InteractiveOverlayNavigationClassName */]}__social__list__item__label ${InteractiveOverlayNavigation_styles_scss["a" /* InteractiveOverlayNavigationClassName */]}__social__list__item__label--anchor`,
                    children: item.label
                  })
                })
              });
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
            className: `${InteractiveOverlayNavigation_styles_scss["a" /* InteractiveOverlayNavigationClassName */]}__social__minor-list`,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              className: `${InteractiveOverlayNavigation_styles_scss["a" /* InteractiveOverlayNavigationClassName */]}__social__minor-list__item`,
              children: "Currently / Brooklyn, NYC"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              className: `${InteractiveOverlayNavigation_styles_scss["a" /* InteractiveOverlayNavigationClassName */]}__social__minor-list__item`,
              children: "Originally / Reno, Nevada"
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
          className: `${InteractiveOverlayNavigation_styles_scss["a" /* InteractiveOverlayNavigationClassName */]}__nav-list`,
          children: Settings["b" /* SiteNavigation */].OverlayNav.NavItems.map((item, idx) => {
            return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
              className: `${InteractiveOverlayNavigation_styles_scss["a" /* InteractiveOverlayNavigationClassName */]}__nav-list__item`,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                className: `${InteractiveOverlayNavigation_styles_scss["a" /* InteractiveOverlayNavigationClassName */]}__nav-list__item__eyeball`,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(InteractiveEyeball_InteractiveEyeball, {
                  scrollContainer: InteractiveOverlayRef
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                className: `${InteractiveOverlayNavigation_styles_scss["a" /* InteractiveOverlayNavigationClassName */]}__nav-list__item__overflow-wrapper`,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                  className: `${InteractiveOverlayNavigation_styles_scss["a" /* InteractiveOverlayNavigationClassName */]}__nav-list__item__inner`,
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                    href: item.href,
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                      className: `${InteractiveOverlayNavigation_styles_scss["a" /* InteractiveOverlayNavigationClassName */]}__nav-list__item__anchor`,
                      onClick: () => toggleOverlayAndLogotypeExpansion(),
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                        className: `${InteractiveOverlayNavigation_styles_scss["a" /* InteractiveOverlayNavigationClassName */]}__nav-list__item__anchor__indicator`
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                        className: `${InteractiveOverlayNavigation_styles_scss["a" /* InteractiveOverlayNavigationClassName */]}__nav-list__item__anchor__label`,
                        children: item.label
                      })]
                    })
                  })
                })
              })]
            }, idx);
          })
        })]
      })
    })]
  });
}; // End Component
// ______________________________________________________________________________
// CONCATENATED MODULE: ./components/InteractiveOverlayNavigation/index.tsx


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cha2");


/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "19DN":
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
const P5CanvasDisplay = (W, H, ID, CanvasTheme) => p => {
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
    p.background(CanvasTheme.background);
    p.textFont(dharmaFont);
    p.textSize(characterSize);
    p.textAlign(p.CENTER, p.CENTER);
    p.fill(`${CanvasTheme.foreground}`);
    p.strokeWeight(strokeWidth);
    p.stroke(CanvasTheme.background);

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

/* harmony default export */ __webpack_exports__["default"] = (P5CanvasDisplay);

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

/***/ "27Jp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemePickerClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ThemePickerStyle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("agJb");
/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("io+v");
/* harmony import */ var _constants_styles_CssUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("59zH");
// Imports
// _________________________________________________________________________
// Core
 // Constants



 // Begin Styles
// _________________________________________________________________________

/**
 *
 * @name ThemePickerClassName
 * @description The root class name for styling. BEM naming conventions.
 *
 */

const ThemePickerClassName = "theme-picker";
/**
 *
 * @name ThemePickerStyle
 * @author Peter Laxalt
 *
 */

const ThemePickerStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "stylesscss__ThemePickerStyle",
  componentId: "zgtval-0"
})(["&.", "{height:calc(", ");display:flex;align-items:center;z-index:990;.", "__option{width:calc(", " * 0.35);height:calc(", " * 0.35);flex-shrink:0;position:relative;border:2px solid ", ";border-radius:50%;margin:0 0.5rem;box-shadow:0px 0px 0px 1px ", ";&:hover{box-shadow:0px 0px 0px 2px ", ";}&:focus,&:active{box-shadow:0px 0px 0px 1px ", ";}&--active{box-shadow:0px 0px 0px 2px ", ";&:hover{box-shadow:0px 0px 0px 2px ", ";}}&__el{position:absolute;left:0;top:0;width:100%;height:100%;display:block;border-radius:50%;&--secondary{clip-path:polygon(0% 0%,100% 0%,100% 50%,0% 50%);transform:rotate(45deg);}}}}"], ThemePickerClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[/* Root */ "a"].FrameSize, ThemePickerClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[/* Root */ "a"].FrameSize, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[/* Root */ "a"].FrameSize, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.varBackground, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.varForeground);

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "49Hi":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./_scaffold-p5-canvas": "19DN",
	"./_scaffold-p5-canvas.tsx": "19DN",
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
	"./dharma_v0.tsx": "Hjf3",
	"./footer-canvas": "jOaG",
	"./footer-canvas.tsx": "jOaG",
	"./glsl": "iRSi",
	"./glsl.tsx": "iRSi",
	"./no-water-distort.canvas": "ChSm",
	"./no-water-distort.canvas.tsx": "ChSm"
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

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "59zH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CssUtils; });
/* unused harmony export LockBodyScroll */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("agJb");
/* harmony import */ var _Root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("io+v");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

_defineProperty(CssUtils, "ObjectFit", (position = "cover") => {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["position:absolute;left:0;right:0;top:0;bottom:0;object-fit:", ";width:100%;height:100%;object-position:center;max-width:100%;"], position);
});

_defineProperty(CssUtils, "ForceFullWidth", (spacing = "0", addGutter = false) => {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["width:calc(100% + (", " * 2));margin-left:calc(", " * -1);margin-right:calc(", " * -1);max-width:100vw;", ""], spacing, spacing, spacing, addGutter ? Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["padding-left:", ";padding-right:", ";"], spacing, spacing) : null);
});

_defineProperty(CssUtils, "CreateTheme", (clrPrimary, clrSecondary, clrBackground, clrForeground) => {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])([":root{--clrPrimary:", ";--clrSecondary:", ";--clrBackground:", ";--clrForeground:", ";}"], clrPrimary, clrSecondary, clrBackground, clrForeground);
});

_defineProperty(CssUtils, "DisableUserSelect", () => {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;"]);
});

const LockBodyScroll = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
    body, html {
      overflow: hidden !important;
    }
  `;

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "97/L":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteractiveOverlayNavigationClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return InteractiveOverlayNavigationStyle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("agJb");
/* harmony import */ var _constants_styles_CssUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("59zH");
/* harmony import */ var _constants_styles_Animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YMx+");
/* harmony import */ var _InteractiveEyeball_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("sUW2");
/* harmony import */ var _MellowFrameHeader_styles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("LHK9");
// Imports
// _________________________________________________________________________
// Core
 // Constants





 // Begin Styles
// _________________________________________________________________________

/**
 *
 * @name InteractiveOverlayNavigation
 * @description The root class name for styling. BEM naming conventions.
 *
 */

const InteractiveOverlayNavigationClassName = "interactive-overlay-nav";
/**
 *
 * @name InteractiveOverlayNavigationStyle
 * @author Peter Laxalt
 *
 */

const InteractiveOverlayNavigationStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.nav.withConfig({
  displayName: "stylesscss__InteractiveOverlayNavigationStyle",
  componentId: "sc-1k6qfxc-0"
})(["&.", "{--", "__top-offset:123px;--", "__arrow-width:1em;--", "__arrow-margin:.25em;--", "__arrow-total-size:calc(var(--", "__arrow-width) + var(--", "__arrow-margin));position:fixed;left:0;top:0;width:100vw;height:100vh;overflow-x:hidden;z-index:850;background:", ";.", "__inner{display:flex;align-items:center;justify-content:center;width:100vw;padding-bottom:250px;padding-top:var(--", "__top-offset);}.", "__oval-btn{position:relative;&--home,&--close{position:fixed;top:calc((", ") * 2);z-index:10;}&--home{left:calc((", ") * 2);}&--close{right:calc((", ") * 2);}}.", "__social{position:fixed;bottom:calc((", ") * 2);right:0;z-index:50;&__list{min-width:250px;font-size:1.5rem;font-family:", ";font-style:italic;&__item{position:relative;&__label{color:", ";display:block;padding:.5rem 0;&:hover{text-decoration:none;color:", ";background:", ";}}}}&__minor-list{margin-top:1rem;font-size:.6rem;font-weight:bold;text-transform:uppercase;letter-spacing:.1rem;line-height:2.25;color:", "}}.", "__nav-list{width:100%;margin-left:calc((", ") * 1.5);&__item{overflow:hidden;font-size:10vw;text-transform:uppercase;display:flex;align-items:center;&:hover{.", "{.", "__pupil__el{&:before{transform:translate(-50%,-50%) scale(1.5);}&:after{transform:translate(-50%,-50%) scale(1);}}}}&__overflow-wrapper{overflow:hidden;}&__inner{display:block;transform:translateX(calc(var(--", "__arrow-total-size) * -1));will-change:transform;transition:transform .5s ease-in-out;}&:hover{.", "__nav-list__item__inner{transform:translateX(0);}.", "__nav-list__item__anchor__indicator{transform:translateX(0%);}}&__anchor{color:", ";pointer-events:all;position:relative;display:flex;align-items:center;animation:", " 1s ease 1;&:hover{text-decoration:none;}&__indicator{width:var(--", "__arrow-width);display:block;margin-right:var(--", "__arrow-margin);height:4px;background:", ";position:relative;transform:translateX(-20%);will-change:transform;transition:transform 1.5s ease-in-out;&:before,&:after{content:\"\";position:absolute;right:0;height:.5em;width:.5em;}&:before{border-left:4px solid ", ";border-bottom:4px solid ", ";border-bottom-left-radius:100%;bottom:50%;}&:after{border-left:4px solid ", ";border-top:4px solid ", ";border-top-left-radius:100%;top:50%;}}}}}}"], InteractiveOverlayNavigationClassName, InteractiveOverlayNavigationClassName, InteractiveOverlayNavigationClassName, InteractiveOverlayNavigationClassName, InteractiveOverlayNavigationClassName, InteractiveOverlayNavigationClassName, InteractiveOverlayNavigationClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.varForeground, InteractiveOverlayNavigationClassName, InteractiveOverlayNavigationClassName, InteractiveOverlayNavigationClassName, _MellowFrameHeader_styles_scss__WEBPACK_IMPORTED_MODULE_5__[/* CssFramePaddingString */ "b"], _MellowFrameHeader_styles_scss__WEBPACK_IMPORTED_MODULE_5__[/* CssFramePaddingString */ "b"], _MellowFrameHeader_styles_scss__WEBPACK_IMPORTED_MODULE_5__[/* CssFramePaddingString */ "b"], InteractiveOverlayNavigationClassName, _MellowFrameHeader_styles_scss__WEBPACK_IMPORTED_MODULE_5__[/* CssFramePaddingString */ "b"], _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Font.Code, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.varBackground, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.varBackground, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.varBackground, InteractiveOverlayNavigationClassName, _MellowFrameHeader_styles_scss__WEBPACK_IMPORTED_MODULE_5__[/* CssFramePaddingString */ "b"], _InteractiveEyeball_styles_scss__WEBPACK_IMPORTED_MODULE_4__[/* InteractiveEyeballClassName */ "a"], _InteractiveEyeball_styles_scss__WEBPACK_IMPORTED_MODULE_4__[/* InteractiveEyeballClassName */ "a"], InteractiveOverlayNavigationClassName, InteractiveOverlayNavigationClassName, InteractiveOverlayNavigationClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.varBackground, _constants_styles_Animation__WEBPACK_IMPORTED_MODULE_3__[/* UpAndRotate */ "b"], InteractiveOverlayNavigationClassName, InteractiveOverlayNavigationClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.varBackground, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.varBackground, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.varBackground, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.varBackground, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.varBackground);

/***/ }),

/***/ "ChSm":
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
    canvas = p.createCanvas(W, H); // ThreeWaterCanvas(parentEl, canvas.elt);

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

/* harmony default export */ __webpack_exports__["default"] = (DharmaCanvasDisplay);

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

/***/ "LHK9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return MellowFrameHeaderClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CssFrameBorderWidth; });
/* unused harmony export CssFrameBorderString */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CssFramePaddingString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CssFrameSizeWithBorderString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return MellowFrameHeaderStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return InteractiveLogotypeClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return InteractiveLogotypeStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return InteractiveFillBarsClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return InteractiveFillBarsStyle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("agJb");
/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("io+v");
/* harmony import */ var _constants_styles_CssUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("59zH");
// Imports
// _________________________________________________________________________
// Core
 // Constants




// Begin Styles
// _________________________________________________________________________

/**
 *
 * @name MellowFrameHeaderClassName
 * @description The root class name for styling. BEM naming conventions.
 *
 */
const MellowFrameHeaderClassName = "mellow-frame-header";
const CssFrameBorderWidth = `2px`;
const CssFrameBorderString = `${CssFrameBorderWidth} solid ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.varForeground}`;
const CssFramePaddingString = `calc(${_constants_Root__WEBPACK_IMPORTED_MODULE_2__[/* Root */ "a"].FrameSize} / 2)`;
const CssFrameSizeWithBorderString = `calc(${CssFramePaddingString} + ${CssFrameBorderWidth})`;
/**
 *
 * @name MellowFrameHeaderStyle
 * @author Peter Laxalt
 *
 */

const MellowFrameHeaderStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "stylesscss__MellowFrameHeaderStyle",
  componentId: "sc-1d6kx9a-0"
})(["&.", "{--", "__frame-edge-size:", ";--", "__frame-padding:", ";--", "__marquee-speed:60s;@media(max-width:", "){--", "__frame-edge-size:", ";}overflow:hidden;position:fixed;left:0;top:0;width:100vw;height:100vh;z-index:900;pointer-events:none;&.", "--inactive,&.", "--fill-bars-is-expanded{.", "__frame__nav--top{transform:translateY(-100%);}.", "__frame__nav--bottom{transform:translateY(100%);}}.", "__inner{width:100vw;height:100vh;position:relative;z-index:999;pointer-events:none;border:var(--", "__frame-padding) solid ", ";display:flex;}.", "__frame{border:", ";width:100%;z-index:500;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden;&__nav{width:100%;height:", ";background:", ";pointer-events:all;text-transform:uppercase;transform:translateY(0%);will-change:transform;transition:transform .5s ease-in-out;&--top{border-bottom:", ";transform-origin:top center;}&--bottom{border-top:", ";transform-origin:bottom center;}&__inner{display:flex;align-items:center;}&__col{width:50%;height:", ";display:flex;align-items:center;&--time{flex:1;}&--contact{width:auto;flex-shrink:0;}&--left{padding-left:1rem;padding-right:1rem;}&--right{padding-right:1rem;}}&__inner-col{width:50%;&--misc{text-align:right;font-weight:800;}&--contact-btn,&--theme-picker{width:auto;flex-shrink:0;}&--contact-btn{font-weight:800;padding-left:1.5rem;}}&__misc-wrapper,&__linklist{position:relative;&:before{content:'';position:absolute;top:50%;width:1.5rem;height:1px;background:", ";transform:translateY(-50%);}}&__linklist{padding-left:2.5rem;&:before{left:0;}}&__misc-wrapper{padding-right:2.5rem;display:flex;justify-content:flex-end;&:before{right:0;}&__el{margin-right:0 !important;}}&__brandmark{font-weight:800;padding-left:2rem;&__label{width:auto;}}&__linklist{display:flex;position:relative;&__item{margin-right:2rem;&__el{color:", ";height:", ";display:inline-flex;align-items:center;position:relative;overflow:hidden;&--contact-btn{&:before{bottom:unset;top:0;}}&:before{content:'';position:absolute;left:0;right:0;bottom:0;width:100%;height:3px;background:", ";opacity:0;}&:hover{text-decoration:none;&:before{opacity:1;}}}&__time{font-size:.6rem;font-weight:bold;text-transform:uppercase;letter-spacing:.1rem;line-height:2.25;}}}}}}"], MellowFrameHeaderClassName, MellowFrameHeaderClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[/* Root */ "a"].FrameSize, MellowFrameHeaderClassName, CssFramePaddingString, MellowFrameHeaderClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Media.Width.Md, MellowFrameHeaderClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[/* Root */ "a"].FrameSize, MellowFrameHeaderClassName, MellowFrameHeaderClassName, MellowFrameHeaderClassName, MellowFrameHeaderClassName, MellowFrameHeaderClassName, MellowFrameHeaderClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.varBackground, MellowFrameHeaderClassName, CssFrameBorderString, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[/* Root */ "a"].FrameSize, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.varBackground, CssFrameBorderString, CssFrameBorderString, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[/* Root */ "a"].FrameSize, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.varForeground, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[/* Root */ "a"].FrameSize, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.varForeground);
/**
 *
 * @name InteractiveLogotypeClassName
 * @description The root class name for styling. BEM naming conventions.
 *
 */

const InteractiveLogotypeClassName = "interactive-logotype";
/**
 *
 * @name InteractiveLogotypeStyle
 * @author Peter Laxalt
 *
 */

const InteractiveLogotypeStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "stylesscss__InteractiveLogotypeStyle",
  componentId: "sc-1d6kx9a-1"
})(["&.", "{--", "__icon-size:calc(", " / 1.75);--", "__circle-size:calc(var(--", "__icon-size) * 1.2);--", "__circle-radius:calc(var(--", "__circle-size) / 2);--", "__circle-circumference:calc(2 * ", " * var(--", "__circle-radius));position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:calc(100vw - (", " * 2));height:calc(100vh - (", " * 2));overflow:hidden;pointer-events:none;z-index:900;&--inactive{.", "__el{.", "__el__circle{stroke-dashoffset:0 !important;}}}&--is-expanded{.", "__inner{transform:translate(-50%,90%) !important;}.", "__el{.", "__el__circle{stroke-dashoffset:0 !important;stroke-width:calc(", " / 1.5) !important;transform:translate(-50%,-50%) scale(1.5) !important;fill:", " !important;stroke:", " !important;}&__icon{transform:scale(1.25) rotate(90deg) !important;&:before{transform:translate(-50%,-50%) scaleY(0) !important;background:", " !important;}&:after{transform:translate(-50%,-50%) scaleX(0) !important;background:", " !important;}&__diagonal{&:before,&:after{transform:scaleY(1) !important;background:", " !important;}}}}}&--fill{z-index:800;}.", "__inner{position:absolute;top:calc(", " / 4.35);left:50%;transform:translate(-50%,0%);transition:transform 1s ease;will-change:transform;z-index:800;.", "__el{display:block;width:var(--", "__icon-size);height:var(--", "__icon-size);transform:scale(1);color:", ";pointer-events:all;position:relative;transition:transform 1s ease;&:hover{.", "__el__circle{stroke-dashoffset:0;}}&__circle{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);overflow:visible;stroke:", ";stroke-width:", ";stroke-dasharray:var(--", "__circle-circumference);stroke-dashoffset:var(--", "__circle-circumference);fill:", ";width:calc(var(--", "__circle-radius) * 2);height:calc(var(--", "__circle-radius) * 2);transition:stroke-dasharray 1s ease,stroke-dashoffset 1s ease,transform 1s ease,stroke-width 1s ease;}&:before,&:after{content:\"\";position:absolute;left:50%;top:50%;transform:translate(-50%,-50%) scale(1);transform-style:preserve-3d;transform-origin:center center;transition:transform 1.5s ease;will-change:transform;width:100%;height:100%;}&:after{}&__icon{position:relative;width:var(--", "__icon-size);height:var(--", "__icon-size);display:block;z-index:10;transform:scale(1);transform-origin:center center;transform-style:preserve-3d;transition:transform 1s ease;will-change:transform;&:hover{transform:scale(1.25);&:before{transform:translate(-50%,-50%) scaleY(0);}&:after{transform:translate(-50%,-50%) scaleX(0);}}&:before,&:after{content:'';position:absolute;background:", ";left:50%;top:50%;transform-origin:center center;transition:transform 1s ease;will-change:transform;}&:before{width:2px;height:80%;transform:translate(-50%,-50%) scaleY(1);}&:after{width:80%;height:2px;transform:translate(-50%,-50%) scaleX(1);}&__diagonal{position:absolute;z-index:15;display:block;left:50%;top:50%;width:2px;height:80%;transform-origin:center center;&--down{transform:translate(-50%,-50%) rotate(45deg);}&--up{transform:translate(-50%,-50%) rotate(-45deg);}&:before,&:after{content:'';position:absolute;width:100%;height:100%;transform:scaleY(.25);transition:transform 1s ease;will-change:transform;background:", ";}&:before{top:0;left:0;transform-origin:top center;}&:after{bottom:0;left:0;transform-origin:bottom center;}}}}}&--inactive,&--fill-bars-is-expanded{.", "__inner{transform:translate(-50%,0%);}}@media (max-width:", "){.", "__inner{transform:translate(-50%,0%);}}}"], InteractiveLogotypeClassName, InteractiveLogotypeClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[/* Root */ "a"].FrameSize, InteractiveLogotypeClassName, InteractiveLogotypeClassName, InteractiveLogotypeClassName, InteractiveLogotypeClassName, InteractiveLogotypeClassName, Math.PI, InteractiveLogotypeClassName, CssFramePaddingString, CssFramePaddingString, InteractiveLogotypeClassName, InteractiveLogotypeClassName, InteractiveLogotypeClassName, InteractiveLogotypeClassName, InteractiveLogotypeClassName, CssFrameBorderWidth, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.varBackground, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.varBackground, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.varBackground, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.varBackground, InteractiveLogotypeClassName, _constants_Root__WEBPACK_IMPORTED_MODULE_2__[/* Root */ "a"].FrameSize, InteractiveLogotypeClassName, InteractiveLogotypeClassName, InteractiveLogotypeClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.varBackground, InteractiveLogotypeClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.varForeground, CssFrameBorderWidth, InteractiveLogotypeClassName, InteractiveLogotypeClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.varBackground, InteractiveLogotypeClassName, InteractiveLogotypeClassName, InteractiveLogotypeClassName, InteractiveLogotypeClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.varForeground, InteractiveLogotypeClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Base.Media.Width.Sm, InteractiveLogotypeClassName);
/**
 *
 * @name InteractiveFillBarsClassName
 * @description The root class name for styling. BEM naming conventions.
 *
 */

const InteractiveFillBarsClassName = "interactive-fill-bars";
/**
 *
 * @name InteractiveFillBarsStyle
 * @author Peter Laxalt
 *
 */

const InteractiveFillBarsStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "stylesscss__InteractiveFillBarsStyle",
  componentId: "sc-1d6kx9a-2"
})(["&.", "{&.", "--is-expanded{.", "__fill-bar{&--top,&--bottom{transform:scaleY(1);}&--left,&--right{transform:scaleX(1);}}}.", "__fill-bar{background:", ";will-change:transform;transition:transform 1.5s ease-in-out;display:block;position:fixed;z-index:700;&--top,&--bottom{height:60vh;width:100vw;transform:scaleY(0);left:0;}&--left,&--right{width:60vw;height:100vh;transform:scaleX(0);top:0;}&--top{transform-origin:top center;top:0;}&--bottom{transform-origin:bottom center;bottom:0;}&--left{transform-origin:left center;left:0;}&--right{transform-origin:right center;right:0;}}}"], InteractiveFillBarsClassName, InteractiveFillBarsClassName, InteractiveFillBarsClassName, InteractiveFillBarsClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.varForeground);

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

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

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

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

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "X9qW":
/***/ (function(module, exports) {

module.exports = require("three");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YMx+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Blink */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FadeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UpAndRotate; });
/* unused harmony export PulseStroke */
/* unused harmony export Grain */
/* unused harmony export OverlayFadeIn */
/* unused harmony export FadeInScaleUpFromTop */
/* unused harmony export Disappear */
/* unused harmony export Marquee */
/* unused harmony export SlideFromRight */
/* unused harmony export SlideUp */
/* unused harmony export LoaderDot */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
// Core
 // Begin Component
// __________________________________________________________________________________________

const Blink = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["to{visibility:hidden;}"]);
const FadeIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{opacity:0;}to{opacity:1;}"]);
const UpAndRotate = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{transform:translateY(100%) rotate(3deg);}to{transform:translateY(0%) rotate(0deg);}"]);
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

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

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

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, typeof locale !== 'undefined' ? locale : router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "cha2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./constants/styles/Font.tsx
var Font = __webpack_require__("e1cB");

// EXTERNAL MODULE: ./constants/styles/Color.tsx
var Color = __webpack_require__("/YLk");

// EXTERNAL MODULE: ./constants/Root.tsx
var Root = __webpack_require__("io+v");

// EXTERNAL MODULE: ./constants/Theme.tsx
var Theme = __webpack_require__("agJb");

// CONCATENATED MODULE: ./constants/styles/Global.tsx




/**
 *
 * Global Styles Component
 * @author Peter Laxalt
 * @description This is the global styles throughout the app.
 *
 */
// Imports
//////////////////////////////////////////////////////////////////////
// Core

 // Styles




 // Begin Component
//////////////////////////////////////////////////////////////////////

const Reset = external_styled_components_["createGlobalStyle"]`
/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

/* * {
  cursor: none !important;
} */

/** Animation */
@keyframes marqueeBottomLeftQuadrants {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
}

@keyframes marqueeTopRightQuadrants {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
}


html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
    margin: 0;
    padding: 0;
    min-height: 100%;
    overflow: auto;
    background-color: ${Theme["a" /* Theme */].Color.varBackground};
    color: ${Theme["a" /* Theme */].Color.varForeground};

    cursor: crosshair;

    /* overflow: hidden; */
  }



  /* Sections
     ========================================================================== */

  /**
   * Remove the margin in all browsers.
   */

  body {
    min-height: 100%;
    margin: 0;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 0;
    background-color: ${Theme["a" /* Theme */].Color.varBackground};
    color: ${Theme["a" /* Theme */].Color.varForeground};

    cursor: crosshair;

    /* overflow: hidden; */
  }

  /**
   * Render the 'main' element consistently in IE.
   */

  main {
    display: block;
    position: relative;
    z-index: 10;
  }


  /* Grouping content
     ========================================================================== */

  /**
   * 1. Add the correct box sizing in Firefox.
   * 2. Show the overflow in Edge and IE.
   */

  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }

  /**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd 'em' font sizing in all browsers.
   */

  pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  /* Text-level semantics
     ========================================================================== */

  /**
   * Remove the gray background on active links in IE 10.
   */

  a {
    background-color: transparent;
  }

  /**
   * 1. Remove the bottom border in Chrome 57-
   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
   */

  abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
  }

  /**
   * Add the correct font weight in Chrome, Edge, and Safari.
   */

  b,
  strong {
    font-weight: bolder;
  }

  /**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd 'em' font sizing in all browsers.
   */

  code,
  kbd,
  samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  /**
   * Add the correct font size in all browsers.
   */

  small {
    font-size: 80%;
  }

  /**
   * Prevent 'sub' and 'sup' elements from affecting the line height in
   * all browsers.
   */

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  /* Embedded content
     ========================================================================== */

  /**
   * Remove the border on images inside links in IE 10.
   */

  img {
    border-style: none;
  }

  /* Forms
     ========================================================================== */

  /**
   * 1. Change the font styles in all browsers.
   * 2. Remove the margin in Firefox and Safari.
   */

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }

  /**
   * Show the overflow in IE.
   * 1. Show the overflow in Edge.
   */

  button,
  input { /* 1 */
    overflow: visible;
  }

  /**
   * Remove the inheritance of text transform in Edge, Firefox, and IE.
   * 1. Remove the inheritance of text transform in Firefox.
   */

  button,
  select { /* 1 */
    text-transform: none;
  }

  /**
   * Correct the inability to style clickable types in iOS and Safari.
   */

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  /**
   * Remove the inner border and padding in Firefox.
   */

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  /**
   * Restore the focus styles unset by the previous rule.
   */

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  /**
   * Correct the padding in Firefox.
   */

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  /**
   * 1. Correct the text wrapping in Edge and IE.
   * 2. Correct the color inheritance from 'fieldset' elements in IE.
   * 3. Remove the padding so developers are not caught out when they zero out
   *    'fieldset' elements in all browsers.
   */

  legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
  }

  /**
   * Add the correct vertical alignment in Chrome, Firefox, and Opera.
   */

  progress {
    vertical-align: baseline;
  }

  /**
   * Remove the default vertical scrollbar in IE 10+.
   */

  textarea {
    overflow: auto;
  }

  /**
   * 1. Add the correct box sizing in IE 10.
   * 2. Remove the padding in IE 10.
   */

  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }

  /**
   * Correct the cursor style of increment and decrement buttons in Chrome.
   */

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  /**
   * 1. Correct the odd appearance in Chrome and Safari.
   * 2. Correct the outline style in Safari.
   */

  [type="search"] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }

  /**
   * Remove the inner padding in Chrome and Safari on macOS.
   */

  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  /**
   * 1. Correct the inability to style clickable types in iOS and Safari.
   * 2. Change font properties to 'inherit' in Safari.
   */

  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }

  /* Interactive
     ========================================================================== */

  /*
   * Add the correct display in Edge, IE 10+, and Firefox.
   */

  details {
    display: block;
  }

  /*
   * Add the correct display in all browsers.
   */

  summary {
    display: list-item;
  }

  /* Misc
     ========================================================================== */

  /**
   * Add the correct display in IE 10+.
   */

  template {
    display: none;
  }

  /**
   * Add the correct display in IE 10.
   */

  [hidden] {
    display: none;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }


  ul {
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;

    -webkit-margin-before: 0px;
    -webkit-margin-after: 0px;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 0px;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  pre {
    display: block;
    padding: 2rem;
    margin-top: 4rem;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    border-radius: 5px;
    border: 1px solid #ddd;
  }

  video {
    max-width: 100%;
  }

  p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent; /* for remove highlight */
  }

  /* Intercom */
  .intercom-namespace {
    .intercom-launcher-frame {
      bottom: unset !important;
      top: 18px !important;
      right: 139px !important;
    }
  }

  .intercom-container {
    display: none !important;
  }

`;
const GlobalStyle = () => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Root["b" /* RootVariables */], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Reset, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Font["b" /* Typography */], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Color["c" /* Palette */], {})]
});
// EXTERNAL MODULE: ./constants/styles/Animation.tsx
var Animation = __webpack_require__("YMx+");

// CONCATENATED MODULE: ./components/GrainCover/styles.scss.tsx
// GrainCover Styles
// Imports
// __________________________________________________________________________________________
// Core

 // Animations
// Begin Styles
// __________________________________________________________________________________________

const GrainCoverClassName = "grain-cover";
const GrainCoverStyle = external_styled_components_default.a.div.withConfig({
  displayName: "stylesscss__GrainCoverStyle",
  componentId: "sc-1okuk8t-0"
})(["position:fixed;left:0;right:0;top:0;bottom:0;pointer-events:none;overflow:hidden;display:flex;z-index:999;opacity:0.06;.", "__inner{width:1000vw;height:1000vh;background-image:url(\"/noise-anim.gif\");}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){opacity:.1;.", "__inner{background-size:50%;}}"], GrainCoverClassName, GrainCoverClassName);
/* harmony default export */ var styles_scss = (GrainCoverStyle);
// CONCATENATED MODULE: ./components/GrainCover/GrainCover.tsx

// Imports
// __________________________________________________________________________________________
// Core
 // Styles

 // Begin Component
// __________________________________________________________________________________________

/**
 *
 * GrainCover.js
 * @author Peter Laxalt
 * @description Our main launcher dialog.
 * @example Default: <GrainCover visible={true | false} />
 *
 */

const GrainCover = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_scss, {
    className: `${GrainCoverClassName}`,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: `${GrainCoverClassName}__inner`
    })
  });
};
// CONCATENATED MODULE: ./components/GrainCover/index.tsx

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/SiteHead/SiteHead.tsx



/**
 *
 * Head.js
 * @author Peter Laxalt
 * @description The website <head>.
 *
 */
// Core
 // Begin Interface
//////////////////////////////////////////////////////////////////////

// Begin Component
//////////////////////////////////////////////////////////////////////
const SiteHead = ({
  title = "This is the default title"
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
      children: title
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      charSet: "utf-8"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      name: "viewport",
      content: "initial-scale=1.0, width=device-width"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      charSet: "utf-8"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      httpEquiv: "X-UA-Compatible",
      content: "IE=edge,chrome=1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      name: "mobile-web-app-capable",
      content: "yes"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      name: "apple-mobile-web-app-capable",
      content: "yes"
    })]
  });
};
// CONCATENATED MODULE: ./components/SiteHead/index.tsx

// EXTERNAL MODULE: ./constants/site/Settings.tsx
var Settings = __webpack_require__("Q9BO");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/ThemePicker/index.tsx + 1 modules
var ThemePicker = __webpack_require__("eBd7");

// EXTERNAL MODULE: ./components/InteractiveOverlayNavigation/index.tsx + 3 modules
var InteractiveOverlayNavigation = __webpack_require__("/vEV");

// EXTERNAL MODULE: ./components/MellowFrameHeader/styles.scss.tsx
var MellowFrameHeader_styles_scss = __webpack_require__("LHK9");

// EXTERNAL MODULE: ./components/InteractiveOverlayNavigation/styles.scss.tsx
var InteractiveOverlayNavigation_styles_scss = __webpack_require__("97/L");

// CONCATENATED MODULE: ./components/MellowFrameHeader/MellowFrameHeader.tsx



// Core
 // Types

// Settings
 // Components



 // Styles


 // Begin Types
// __________________________________________________________________________________________

// Begin Component
// _________________________________________________________________________________________

/**
 *
 * @name InteractiveFrameItemsDisplay
 *
 */
const InteractiveFrameItemsDisplay = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: `${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}__marquee-container`,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
      className: `${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}__frame-items`,
      children: Settings["b" /* SiteNavigation */].FrameItems.map((item, idx) => {
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: item.href,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: item.label
            })
          })
        }, idx);
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
      className: `${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}__frame-items`,
      children: Settings["b" /* SiteNavigation */].FrameItems.map((item, idx) => {
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: item.href,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: item.label
            })
          })
        }, idx);
      })
    })]
  });
};
/**
 *
 * @name MellowFrameHeader
 *
 */


class MellowFrameHeader_MellowFrameHeader extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      isInactive: false,
      isFillBarsExpanded: false,
      isOverlayVisible: false,
      isSidebarVisible: false,
      isLogotypeExpanded: false
    };
    this.listenToScroll = this.listenToScroll.bind(this);
    this.toggleLogotype = this.toggleLogotype.bind(this);
    this.toggleOverlay = this.toggleOverlay.bind(this);
    this.toggleFillBars = this.toggleFillBars.bind(this);
    this.toggleOverlayAndFillBarsExpansion = this.toggleOverlayAndFillBarsExpansion.bind(this);
    this.toggleOverlayAndLogotypeExpansion = this.toggleOverlayAndLogotypeExpansion.bind(this);
  }
  /**
   *
   * @name componentDidMount()
   *
   */


  componentDidMount() {
    if ("undefined") {
      window.addEventListener("scroll", this.listenToScroll);
    }
  }

  componentWillUnmount() {
    if ("undefined") {
      window.removeEventListener("scroll", this.listenToScroll);
    }
  }

  toggleLogotype() {
    if (this.state.isLogotypeExpanded) {
      this.setState({
        isLogotypeExpanded: false
      });
    } else {
      this.setState({
        isLogotypeExpanded: true
      });
    }
  }

  toggleOverlay() {
    if (this.state.isOverlayVisible) {
      this.setState({
        isOverlayVisible: false
      });
      return;
    } else {
      this.setState({
        isOverlayVisible: true
      });
      return;
    }
  }

  toggleFillBars() {
    if (this.state.isFillBarsExpanded) {
      this.setState({
        isFillBarsExpanded: false
      });
      return;
    } else {
      this.setState({
        isFillBarsExpanded: true
      });
      return;
    }
  }

  toggleOverlayAndLogotypeExpansion() {
    if (this.state.isFillBarsExpanded) {
      this.toggleOverlay();
      this.toggleFillBars();
    } else {
      this.toggleLogotype();
      this.toggleOverlay();
    }

    return;
  }

  toggleOverlayAndFillBarsExpansion() {
    this.toggleFillBars();
    this.toggleOverlay();
    return;
  }

  listenToScroll() {
    if ( true && document) {
      const scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;

      if (scrollPosition > 10) {
        this.setState({
          isInactive: true
        });
      } else {
        this.setState({
          isInactive: false
        });
      }
    }
  }

  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(MellowFrameHeaderDisplay, {
      router: this.props.router,
      isInactive: this.state.isInactive,
      isFillBarsExpanded: this.state.isFillBarsExpanded,
      isOverlayVisible: this.state.isOverlayVisible,
      isSidebarVisible: this.state.isSidebarVisible,
      isLogotypeExpanded: this.state.isLogotypeExpanded,
      toggleOverlayAndFillBarsExpansion: this.toggleOverlayAndFillBarsExpansion,
      toggleOverlayAndLogotypeExpansion: this.toggleOverlayAndLogotypeExpansion
    });
  }

}
/**
 *
 * @name MellowFrameHeaderDisplay
 *
 */

const MellowFrameHeaderDisplay = ({
  isInactive,
  isFillBarsExpanded,
  isLogotypeExpanded,
  isOverlayVisible,
  toggleOverlayAndFillBarsExpansion,
  toggleOverlayAndLogotypeExpansion,
  router
}) => {
  // console.log(router);
  let hasSidebar = router && router.pathname ? router.pathname.includes("sample") ? true : false : false;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(MellowFrameHeader_styles_scss["i" /* MellowFrameHeaderStyle */], {
      className: `${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]} ${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}--${isInactive || isOverlayVisible ? `inactive` : `active`} ${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}--${isFillBarsExpanded || isOverlayVisible ? `fill-bars-is-expanded` : `fill-bars-is-not-expanded`}`,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: `${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}__inner`,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: `${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}__frame`,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: `${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}__frame__nav ${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}__frame__nav--top`,
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: `${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}__frame__nav__inner`,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: `${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}__frame__nav__col ${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}__frame__nav__col--left`,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
                  className: `${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}__frame__nav__linklist`,
                  children: Settings["b" /* SiteNavigation */].OverlayNav.NavItems.map((item, idx) => {
                    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                      className: `${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}__frame__nav__linklist__item`,
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                        href: item.href,
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                          className: `${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}__frame__nav__linklist__item__el`,
                          children: item.label
                        })
                      })
                    }, idx);
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: `${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}__frame__nav__col ${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}__frame__nav__col--right`,
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: `${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}__frame__nav__inner-col ${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}__frame__nav__inner-col--brandmark`,
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    className: `${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}__frame__nav__brandmark`,
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                      href: "/",
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                        className: `${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}__frame__nav__linklist__item__el ${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}__frame__nav__brandmark__label`,
                        children: "Studio Laxalt"
                      })
                    })
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: `${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}__frame__nav__inner-col ${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}__frame__nav__inner-col--misc ${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}__frame__nav__misc-wrapper`,
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    className: `${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}__frame__nav__linklist__item ${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}__frame__nav__misc-wrapper__el`,
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                      href: Settings["a" /* Settings */].miscPage,
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                        className: `${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}__frame__nav__linklist__item__el`,
                        children: "Misc"
                      })
                    })
                  })
                })]
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: `${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}__frame__nav ${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}__frame__nav--bottom`,
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: `${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}__frame__nav__inner`,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: `${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}__frame__nav__col ${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}__frame__nav__col--time ${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}__frame__nav__col--left`,
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
                  className: `${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}__frame__nav__linklist`,
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                    className: `${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}__frame__nav__linklist__item`,
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                      className: `${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}__frame__nav__linklist__item__time`,
                      children: "NYC / 04:21:21"
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                    className: `${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}__frame__nav__linklist__item`,
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                      className: `${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}__frame__nav__linklist__item__time`,
                      children: "S\xE3o Paulo / 04:21:21"
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                    className: `${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}__frame__nav__linklist__item`,
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                      className: `${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}__frame__nav__linklist__item__time`,
                      children: "San Francisco / 04:21:21"
                    })
                  })]
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: `${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}__frame__nav__col ${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}__frame__nav__col--contact ${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}__frame__nav__col--right`,
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: `${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}__frame__nav__inner-col ${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}__frame__nav__inner-col--theme-picker`,
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ThemePicker["a" /* ThemePicker */], {})
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: `${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}__frame__nav__inner-col ${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}__frame__nav__inner-col--contact-btn`,
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                    href: Settings["a" /* Settings */].contactPage,
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                      className: `${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}__frame__nav__linklist__item__el ${MellowFrameHeader_styles_scss["h" /* MellowFrameHeaderClassName */]}__frame__nav__linklist__item__el--contact-btn`,
                      children: "Contact"
                    })
                  })
                })]
              })]
            })
          })]
        })
      })
    }), isOverlayVisible ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(InteractiveOverlayNavigation["a" /* InteractiveOverlayNavigation */], {
      addClass: `${InteractiveOverlayNavigation_styles_scss["a" /* InteractiveOverlayNavigationClassName */]}--${isOverlayVisible ? `is-visible` : `is-hidden`}`,
      toggleOverlayAndLogotypeExpansion: toggleOverlayAndLogotypeExpansion
    }) : null, /*#__PURE__*/Object(jsx_runtime_["jsx"])(MellowFrameHeader_styles_scss["g" /* InteractiveLogotypeStyle */], {
      className: `${MellowFrameHeader_styles_scss["f" /* InteractiveLogotypeClassName */]} ${MellowFrameHeader_styles_scss["f" /* InteractiveLogotypeClassName */]}--${isInactive ? `inactive` : `active`} ${MellowFrameHeader_styles_scss["f" /* InteractiveLogotypeClassName */]}--${isLogotypeExpanded ? `is-expanded` : `is-not-expanded`} ${MellowFrameHeader_styles_scss["f" /* InteractiveLogotypeClassName */]}--${isFillBarsExpanded ? `fill-bars-is-expanded` : `fill-bars-is-not-expanded`}`,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        className: `${MellowFrameHeader_styles_scss["f" /* InteractiveLogotypeClassName */]}__inner`,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
          className: `${MellowFrameHeader_styles_scss["f" /* InteractiveLogotypeClassName */]}__el`,
          onClick: () => toggleOverlayAndLogotypeExpansion(),
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
            className: `${MellowFrameHeader_styles_scss["f" /* InteractiveLogotypeClassName */]}__el__circle`,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
              cx: "50%",
              cy: "50%",
              r: "50%"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
            className: `${MellowFrameHeader_styles_scss["f" /* InteractiveLogotypeClassName */]}__el__icon`,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: `${MellowFrameHeader_styles_scss["f" /* InteractiveLogotypeClassName */]}__el__icon__diagonal ${MellowFrameHeader_styles_scss["f" /* InteractiveLogotypeClassName */]}__el__icon__diagonal--down`
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: `${MellowFrameHeader_styles_scss["f" /* InteractiveLogotypeClassName */]}__el__icon__diagonal ${MellowFrameHeader_styles_scss["f" /* InteractiveLogotypeClassName */]}__el__icon__diagonal--up`
            })]
          })]
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(MellowFrameHeader_styles_scss["e" /* InteractiveFillBarsStyle */], {
      className: `${MellowFrameHeader_styles_scss["d" /* InteractiveFillBarsClassName */]} ${MellowFrameHeader_styles_scss["d" /* InteractiveFillBarsClassName */]}--${isInactive ? `inactive` : `active`} ${MellowFrameHeader_styles_scss["d" /* InteractiveFillBarsClassName */]}--${isFillBarsExpanded ? `is-expanded` : `is-not-expanded`}`,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        className: `${MellowFrameHeader_styles_scss["d" /* InteractiveFillBarsClassName */]}__fill-bar ${MellowFrameHeader_styles_scss["d" /* InteractiveFillBarsClassName */]}__fill-bar--top`
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        className: `${MellowFrameHeader_styles_scss["d" /* InteractiveFillBarsClassName */]}__fill-bar ${MellowFrameHeader_styles_scss["d" /* InteractiveFillBarsClassName */]}__fill-bar--right`
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        className: `${MellowFrameHeader_styles_scss["d" /* InteractiveFillBarsClassName */]}__fill-bar ${MellowFrameHeader_styles_scss["d" /* InteractiveFillBarsClassName */]}__fill-bar--bottom`
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        className: `${MellowFrameHeader_styles_scss["d" /* InteractiveFillBarsClassName */]}__fill-bar ${MellowFrameHeader_styles_scss["d" /* InteractiveFillBarsClassName */]}__fill-bar--left`
      })]
    })]
  });
}; // End Component
// ______________________________________________________________________________
// CONCATENATED MODULE: ./components/MellowFrameHeader/index.tsx

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// EXTERNAL MODULE: ./components/OvalButton/index.tsx + 2 modules
var OvalButton = __webpack_require__("wFD6");

// EXTERNAL MODULE: ./components/InteractiveEyeball/styles.scss.tsx
var InteractiveEyeball_styles_scss = __webpack_require__("sUW2");

// CONCATENATED MODULE: ./components/Footer/styles.scss.tsx
/**
 *
 * Footer.js/styles.scss.tsx
 * @author Peter Laxalt
 * @description The website Footer Styles.
 *
 */
// Imports
//////////////////////////////////////////////////////////////////////
// Core





 // Constants
// import { Root } from "../../constants/Theme";
// Begin Styles
//////////////////////////////////////////////////////////////////////

const FooterClassName = "footer";
const FooterStyle = external_styled_components_default.a.footer.withConfig({
  displayName: "stylesscss__FooterStyle",
  componentId: "sc-1eymw0g-0"
})(["&.", "{--", "__arrow-width:1em;--", "__arrow-margin:.25em;--", "__arrow-total-size:calc(var(--", "__arrow-width) + var(--", "__arrow-margin));position:relative;z-index:10;background:", ";color:", ";padding:0 ", " ", " ", ";overflow:hidden;&:after{content:\"\";position:absolute;top:0;left:0;height:2px;width:100%;background:", ";}font-size:1.5rem;font-weight:200;.", "__inner{position:relative;min-height:100vh;display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-start;}.", "__canvas{position:absolute;left:0%;top:0%;width:100%;height:100%;.__footer-canvas-container{position:sticky;top:0;div{font-size:0;}}canvas{width:100vw !important;height:100vh !important;}}.", "__bottom,.", "__top{padding:", ";width:100%;}.", "__nav-list{width:100%;margin-left:calc(", " * -.5);&__item{overflow:hidden;font-size:6vw;text-transform:uppercase;display:flex;align-items:center;.", "__outline{border:3px solid ", ";}.", "__pupil{&__el{border:3px solid ", ";&:before{background:", ";border-radius:50%;}}}&:hover{.", "{.", "__pupil__el{&:before{transform:translate(-50%,-50%) scale(1.5);}&:after{transform:translate(-50%,-50%) scale(1);}}}}&__overflow-wrapper{overflow:hidden;}&__inner{display:block;transform:translateX( calc(var(--", "__arrow-total-size) * -1) );will-change:transform;transition:transform 0.5s ease-in-out;}&:hover{.", "__nav-list__item__inner{transform:translateX(0);}.", "__nav-list__item__anchor__indicator{transform:translateX(0%);}}&__anchor{color:", ";pointer-events:all;position:relative;display:flex;align-items:center;animation:", " 1s ease 1;&:hover{text-decoration:none;}&__indicator{width:var(--", "__arrow-width);display:block;margin-right:var(--", "__arrow-margin);height:4px;background:", ";position:relative;transform:translateX(-20%);will-change:transform;transition:transform 1.5s ease-in-out;&:before,&:after{content:\"\";position:absolute;right:0;height:0.5em;width:0.5em;}&:before{border-left:4px solid ", ";border-bottom:4px solid ", ";border-bottom-left-radius:100%;bottom:50%;}&:after{border-left:4px solid ", ";border-top:4px solid ", ";border-top-left-radius:100%;top:50%;}}}}}.", "__bottom{z-index:10;position:relative;display:flex;justify-content:space-between;border-top:2px solid ", ";align-items:center;background:", ";&__col{width:calc(100% / 3);&__label{display:block;}strong{font-weight:600;}&--three{text-align:right;}}}}"], FooterClassName, FooterClassName, FooterClassName, FooterClassName, FooterClassName, FooterClassName, Theme["a" /* Theme */].Color.varBackground, Theme["a" /* Theme */].Color.varForeground, MellowFrameHeader_styles_scss["b" /* CssFramePaddingString */], MellowFrameHeader_styles_scss["b" /* CssFramePaddingString */], MellowFrameHeader_styles_scss["b" /* CssFramePaddingString */], Theme["a" /* Theme */].Color.varForeground, FooterClassName, FooterClassName, FooterClassName, FooterClassName, Root["a" /* Root */].Size, FooterClassName, Root["a" /* Root */].Size, InteractiveEyeball_styles_scss["a" /* InteractiveEyeballClassName */], Theme["a" /* Theme */].Color.varForeground, InteractiveEyeball_styles_scss["a" /* InteractiveEyeballClassName */], Theme["a" /* Theme */].Color.varForeground, Theme["a" /* Theme */].Color.varForeground, InteractiveEyeball_styles_scss["a" /* InteractiveEyeballClassName */], InteractiveEyeball_styles_scss["a" /* InteractiveEyeballClassName */], FooterClassName, FooterClassName, FooterClassName, Theme["a" /* Theme */].Color.varForeground, Animation["b" /* UpAndRotate */], FooterClassName, FooterClassName, Theme["a" /* Theme */].Color.varForeground, Theme["a" /* Theme */].Color.varForeground, Theme["a" /* Theme */].Color.varForeground, Theme["a" /* Theme */].Color.varForeground, Theme["a" /* Theme */].Color.varForeground, FooterClassName, Theme["a" /* Theme */].Color.varForeground, Theme["a" /* Theme */].Color.varBackground);
// CONCATENATED MODULE: ./components/Footer/Footer.tsx




function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 *
 * Footer.js
 * @author Peter Laxalt
 * @description The website footer.
 *
 */
// Core




 // Styles

 // Begin Component
//////////////////////////////////////////////////////////////////////

/**
 *
 * @name P5Wrapper
 * @description Dynamic import of the P5 library
 *
 */

const P5Wrapper = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "nhmZ", 7)), {
  loading: () => /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {}),
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("nhmZ")],
    modules: ["react-p5-wrapper"]
  }
});

class Footer_FooterP5Canvas extends external_react_["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "renderP5", filename => {
      const sketch = __webpack_require__("49Hi")(`./${filename}`).default(this.state.windowWidth, this.state.windowHeight, 1, // this.state.canvasTheme,
      this.state.canvasParent);

      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(P5Wrapper, {
        sketch: sketch
      });
    });

    this.state = {
      domLoaded: false,
      windowWidth: 0,
      windowHeight: 0,
      canvasElement: false,
      canvasTheme: undefined,
      canvasParent: undefined
    };
    this.renderP5 = this.renderP5.bind(this);
  }
  /**
   *
   * @name componentDidMount()
   * @description Lifecycle to start using the window & document
   *
   */


  componentDidMount() {
    if ("undefined") {
      this.setState({
        windowWidth: window.innerWidth - 80,
        windowHeight: window.innerHeight - 80,
        domLoaded: true,
        canvasElement: false
      }); // window.laxaltUniversalTheme = this.props.colorThemeContext;
    }
  }
  /**
   *
   * @name renderP5()
   * @description Fire up p5.js canvas through a dynamic import
   *
   */


  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "__footer-canvas-container",
        children: this.renderP5("footer-canvas")
      })
    });
  }

}

const Footer = () => {
  let scrollToTop;
  Object(external_react_["useEffect"])(() => {
    scrollToTop = function () {
      window.scrollTo(0, 0);
    };
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(FooterStyle, {
    className: `${FooterClassName}`,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: `${FooterClassName}__inner`,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: `${FooterClassName}__canvas`,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer_FooterP5Canvas, {})
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: `${FooterClassName}__top`,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: `${FooterClassName}__top__col ${FooterClassName}__top__col--one`,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
            className: `${FooterClassName}__nav-list`,
            children: Settings["b" /* SiteNavigation */].OverlayNav.NavItems.map((item, idx) => {
              return /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                className: `${FooterClassName}__nav-list__item`,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                  className: `${FooterClassName}__nav-list__item__overflow-wrapper`,
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                    className: `${FooterClassName}__nav-list__item__inner`,
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                      href: item.href,
                      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                        className: `${FooterClassName}__nav-list__item__anchor`,
                        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                          className: `${FooterClassName}__nav-list__item__anchor__indicator`
                        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                          className: `${FooterClassName}__nav-list__item__anchor__label`,
                          children: item.label
                        })]
                      })
                    })
                  })
                })
              }, idx);
            })
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: `${FooterClassName}__bottom`,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: `${FooterClassName}__bottom__col ${FooterClassName}__bottom__col--one`,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: `${FooterClassName}__bottom__col__label`,
            children: "Currently / Brooklyn, NYC"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: `${FooterClassName}__bottom__col__label`,
            children: "Originally / Reno, Nevada"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: `${FooterClassName}__bottom__col ${FooterClassName}__bottom__col--two`,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
            className: `${FooterClassName}__bottom__col__label`,
            children: "STUDIO LAXALT"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: `${FooterClassName}__bottom__col__label`,
            children: "\xA92020 ALL RIGHTS RESERVED"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: `${FooterClassName}__bottom__col ${FooterClassName}__bottom__col--three`,
          onClick: () => scrollToTop(),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(OvalButton["a" /* OvalButton */], {
            label: `Back to top`,
            addClass: `${FooterClassName}__oval-btn`,
            invert: false
          })
        })]
      })]
    })
  });
}; // End Component
//////////////////////////////////////////////////////////////////////
// CONCATENATED MODULE: ./components/Footer/index.tsx

// CONCATENATED MODULE: ./components/Layout/Layout.tsx




/**
 *
 * Layout.js
 * @author Peter Laxalt
 * @description The website layout.
 *
 */
// Constants


 // Components


 // Utils



// Begin Component
//////////////////////////////////////////////////////////////////////
// Layout
const Layout = ({
  children
}) => {
  const router = Object(router_["useRouter"])();
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(GlobalStyle, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(SiteHead, {
      title: "LAXALT"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(GrainCover, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(MellowFrameHeader_MellowFrameHeader, {
      router: router
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("main", {
      children: children
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer, {})]
  });
};
// CONCATENATED MODULE: ./components/Layout/index.tsx

// CONCATENATED MODULE: ./pages/_app.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// /pages/_app_.js


 // Begin Component
// __________________________________________________________________________________________

/**
 *
 * /pages/_app_.js
 * @author Peter Laxalt
 * @description The wrapper around every page. This is the best place to load data and
 * @description store it in our React Context to be accessible anywhere, so we are doing
 * @description one call for all data at a time.
 *
 */
const MyApp = ({
  Component,
  pageProps
}) => {
  const colorTheme = Object(Color["d" /* useColorContext */])(); // Render our App

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Color["b" /* ColorContext */].Provider, {
    value: colorTheme,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Layout, _objectSpread(_objectSpread({}, pageProps), {}, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _objectSpread({}, pageProps))
    }))
  });
};

/* harmony default export */ var _app = __webpack_exports__["default"] = (MyApp);

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

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

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

/***/ "eBd7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ ThemePicker; });

// UNUSED EXPORTS: ThemePickerWithHook

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");

// EXTERNAL MODULE: ./constants/site/Settings.tsx
var Settings = __webpack_require__("Q9BO");

// EXTERNAL MODULE: ./constants/styles/Color.tsx
var Color = __webpack_require__("/YLk");

// EXTERNAL MODULE: ./constants/styles/CssUtils.tsx
var CssUtils = __webpack_require__("59zH");

// EXTERNAL MODULE: ./constants/Theme.tsx
var Theme = __webpack_require__("agJb");

// EXTERNAL MODULE: ./components/ThemePicker/styles.scss.tsx
var styles_scss = __webpack_require__("27Jp");

// CONCATENATED MODULE: ./components/ThemePicker/ThemePicker.tsx



// Core






 // Begin Types
// __________________________________________________________________________________________

// Begin Component
// __________________________________________________________________________________________

/**
 * @name ThemePickerWithHook
 * @author Peter Laxalt
 *
 */
class ThemePicker_ThemePickerWithHook extends external_react_default.a.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeTheme: {
        name: "default",
        primary: Theme["a" /* Theme */].Color.Primary,
        secondary: Theme["a" /* Theme */].Color.Secondary,
        background: Theme["a" /* Theme */].Color.Background,
        foreground: Theme["a" /* Theme */].Color.Text
      },
      availableThemes: [{
        name: "default",
        primary: Theme["a" /* Theme */].Color.Primary,
        secondary: Theme["a" /* Theme */].Color.Secondary,
        background: Theme["a" /* Theme */].Color.Background,
        foreground: Theme["a" /* Theme */].Color.Primary
      }, {
        name: "galaxy",
        primary: "#FFF8DC",
        secondary: "#FFF8DC",
        background: Theme["a" /* Theme */].Color.Galaxy,
        foreground: "#FFF8DC"
      }, {
        name: "salmon",
        primary: "#000000",
        secondary: "#000000",
        background: "#FF8760",
        foreground: "#000000"
      }, {
        name: "lemon",
        primary: "#003eff",
        secondary: "#003eff",
        background: "#F4FF5E",
        foreground: "#003eff"
      }, {
        name: "goldenrod",
        primary: "#393349",
        secondary: "#393349",
        background: "#DAA520",
        foreground: "#393349"
      }, {
        name: "cadetblue",
        primary: "#003eff",
        secondary: "#003eff",
        background: "#ffb5f9",
        foreground: "#003eff"
      }, {
        name: "orangered",
        primary: "#FFF8DC",
        secondary: "#FFF8DC",
        background: "#FF4500",
        foreground: "#FFF8DC"
      }]
    };
    this.setNewTheme = this.setNewTheme.bind(this);
  }

  componentDidMount() {
    if ("undefined") {
      window.laxaltUniversalTheme = this.state.activeTheme;
      Settings["c" /* __DEBUG__ */] && console.log("🎨 theme set", window.laxaltUniversalTheme);
    }
  }

  setNewTheme(theme) {
    // const { setTheme } = this.props;
    this.setState({
      activeTheme: theme
    });

    if ("undefined") {
      window.laxaltUniversalTheme = theme;
    } // setTheme(theme);

  }

  render() {
    let {
      activeTheme,
      availableThemes
    } = this.state;
    const SetGlobalTheme = external_styled_components_["createGlobalStyle"]`
      ${activeTheme ? CssUtils["a" /* CssUtils */].CreateTheme(activeTheme.primary, activeTheme.secondary, activeTheme.background, activeTheme.foreground) : ""}
    `;
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [activeTheme && activeTheme.name !== "default" ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(SetGlobalTheme, {}) : null, /*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_scss["b" /* ThemePickerStyle */], {
        className: `${styles_scss["a" /* ThemePickerClassName */]}`,
        children: availableThemes ? availableThemes.map((themeItem, idx) => {
          return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: `${styles_scss["a" /* ThemePickerClassName */]}__option ${styles_scss["a" /* ThemePickerClassName */]}__option--${themeItem.name === activeTheme.name ? "active" : "inactive"}`,
            onClick: () => this.setNewTheme(themeItem),
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: `${styles_scss["a" /* ThemePickerClassName */]}__option__el ${styles_scss["a" /* ThemePickerClassName */]}__option__el--primary`,
              style: {
                backgroundColor: themeItem.background,
                border: `1px solid ${themeItem.foreground}`
              }
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: `${styles_scss["a" /* ThemePickerClassName */]}__option__el ${styles_scss["a" /* ThemePickerClassName */]}__option__el--secondary`,
              style: {
                backgroundColor: themeItem.foreground
              }
            })]
          }, idx);
        }) : null
      })]
    });
  }

}
const ThemePicker = () => {
  const {
    setTheme
  } = Object(external_react_["useContext"])(Color["b" /* ColorContext */]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(ThemePicker_ThemePickerWithHook, {
    setTheme: setTheme
  });
};
// CONCATENATED MODULE: ./components/ThemePicker/index.tsx


/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND_ERROR = 'SSG Data NOT_FOUND';

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        // TODO: handle reloading in development from fallback returning 200
        // to on-demand-entry-handler causing it to reload periodically
        throw new Error(SSG_DATA_NOT_FOUND_ERROR);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages, false);

          if (pages.includes(parsedHref.pathname)) {
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;
      const ssg404 = err.message === SSG_DATA_NOT_FOUND_ERROR;

      if (ssg404) {
        try {
          let mod;
          ({
            page: Component,
            styleSheets,
            mod
          } = await this.fetchComponent('/404')); // TODO: should we tolerate these props missing and still render the
          // page instead of falling back to _error?

          if (mod && mod.__N_SSG) {
            props = await this._getStaticData(this.pageLoader.getDataHref('/404', '/404', true, this.locale));
          }
        } catch (_err) {// non-fatal fallback to _error
        }
      }

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err: ssg404 ? undefined : err,
        error: ssg404 ? undefined : err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const existingRouteInfo = this.components[route];

      if (shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

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

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

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

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

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
    --BgColor: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.Background};
    --TextColor: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.Primary};
    --MbmColor: ${_constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.White};

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

/***/ "jOaG":
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
const P5CanvasDisplay = (W, H, ID, CanvasTheme) => p => {
  // _________________________________________________
  // Config
  // _________________________________________________
  // Setup
  p.setup = () => {
    // Our Canvas
    p.createCanvas(W, H);
  }; // _________________________________________________
  // Draw


  p.draw = () => {
    if (p.mouseIsPressed) {
      p.fill(window.laxaltUniversalTheme.foreground);
      p.stroke(window.laxaltUniversalTheme.background);
      p.strokeWeight(1.5);
      p.ellipse(p.mouseX, p.mouseY, W / 6, W / 6);
    } else {
      p.fill(window.laxaltUniversalTheme.background);
      p.stroke(window.laxaltUniversalTheme.foreground);
      p.strokeWeight(1.5);
      p.ellipse(p.mouseX, p.mouseY, W / 6, W / 6);
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(W, H);
  };
};

/* harmony default export */ __webpack_exports__["default"] = (P5CanvasDisplay);

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "nhmZ":
/***/ (function(module, exports) {

module.exports = require("react-p5-wrapper");

/***/ }),

/***/ "sUW2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteractiveEyeballClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return InteractiveEyeballStyle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_Theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("agJb");
/* harmony import */ var _constants_Root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("io+v");
/* harmony import */ var _constants_styles_CssUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("59zH");
// Imports
// _________________________________________________________________________
// Core
 // Constants



 // Begin Styles
// _________________________________________________________________________

/**
 *
 * @name InteractiveEyeball
 * @description The root class name for styling. BEM naming conventions.
 *
 */

const InteractiveEyeballClassName = "interactive-eyeball";
/**
 *
 * @name InteractiveEyeballStyle
 * @author Peter Laxalt
 *
 */

const InteractiveEyeballStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "stylesscss__InteractiveEyeballStyle",
  componentId: "sc-14032li-0"
})(["&.", "{--", "__eye-size:.8em;display:block;margin-left:calc(var(--", "__eye-size) * .3);margin-right:calc(var(--", "__eye-size) * .3);position:relative;.", "__outline{display:block;width:var(--", "__eye-size);height:var(--", "__eye-size);border-top-right-radius:50%;border-bottom-left-radius:50%;transform:rotate(-45deg);border:4px solid ", ";}.", "__pupil-wrapper{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center center;}.", "__pupil{height:calc(var(--", "__eye-size) * .85);width:calc(var(--", "__eye-size) * .85);display:flex;align-items:center;justify-content:flex-end;transition:.5s transform ease;will-change:transform;&__el{display:block;height:calc(var(--", "__eye-size) * .65);width:calc(var(--", "__eye-size) * .65);border-radius:50%;position:relative;border:4px solid ", ";&:before{content:'';position:absolute;left:50%;top:50%;transform:translate(-50%,-50%) scale(1);transition:.5s transform ease;will-change:transform;width:calc(var(--", "__eye-size) * .35);height:calc(var(--", "__eye-size) * .35);background:", ";border-radius:50%;}}}&.", "--is-inverted{.", "__outline{border:4px solid ", ";}.", "__pupil{&__el{border:4px solid ", ";&:before{background:", ";}}}}}"], InteractiveEyeballClassName, InteractiveEyeballClassName, InteractiveEyeballClassName, InteractiveEyeballClassName, InteractiveEyeballClassName, InteractiveEyeballClassName, InteractiveEyeballClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.varBackground, InteractiveEyeballClassName, InteractiveEyeballClassName, InteractiveEyeballClassName, InteractiveEyeballClassName, InteractiveEyeballClassName, InteractiveEyeballClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.varBackground, InteractiveEyeballClassName, InteractiveEyeballClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.varBackground, InteractiveEyeballClassName, InteractiveEyeballClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.varForeground, InteractiveEyeballClassName, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.varForeground, _constants_Theme__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].Color.varForeground);

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "wFD6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ OvalButton; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./constants/Theme.tsx
var Theme = __webpack_require__("agJb");

// EXTERNAL MODULE: ./constants/styles/CssUtils.tsx
var CssUtils = __webpack_require__("59zH");

// CONCATENATED MODULE: ./components/OvalButton/styles.scss.tsx
// Imports
// _________________________________________________________________________
// Core
 // Constants


 // Begin Styles
// _________________________________________________________________________

/**
 *
 * @name OvalButtonClassName
 * @description The root class name for styling. BEM naming conventions.
 *
 */

const OvalButtonClassName = "oval-btn";
/**
 *
 * @name OvalButtonStyle
 * @author Peter Laxalt
 *
 */

const OvalButtonStyle = external_styled_components_default.a.span.withConfig({
  displayName: "stylesscss__OvalButtonStyle",
  componentId: "sc-8pljc2-0"
})(["&.", "{display:inline-flex;.", "__el{display:inline-flex;align-items:center;justify-content:center;min-width:200px;height:4rem;padding-left:1.5em;padding-right:1.5em;border-radius:100%;background:", ";color:", ";border:2px solid ", ";box-shadow:0px 0px 0px 2px ", ";text-transform:uppercase;letter-spacing:1px;font-size:1.5rem;&:hover{background:", ";color:", ";border:2px solid ", ";text-decoration:none;}&--is-inverted{background:", ";color:", ";border:2px solid ", ";box-shadow:0px 0px 0px 2px ", ";&:hover{background:", ";color:", ";border:2px solid ", ";}}}}"], OvalButtonClassName, OvalButtonClassName, Theme["a" /* Theme */].Color.varBackground, Theme["a" /* Theme */].Color.varForeground, Theme["a" /* Theme */].Color.varForeground, Theme["a" /* Theme */].Color.varBackground, Theme["a" /* Theme */].Color.varForeground, Theme["a" /* Theme */].Color.varBackground, Theme["a" /* Theme */].Color.varForeground, Theme["a" /* Theme */].Color.varForeground, Theme["a" /* Theme */].Color.varBackground, Theme["a" /* Theme */].Color.varBackground, Theme["a" /* Theme */].Color.varForeground, Theme["a" /* Theme */].Color.varBackground, Theme["a" /* Theme */].Color.varForeground, Theme["a" /* Theme */].Color.varBackground);
// CONCATENATED MODULE: ./components/OvalButton/OvalButton.tsx



// Core
 // Constants

// Components
 // Styles

 // Begin Types
// __________________________________________________________________________________________

// Begin Data
// __________________________________________________________________________________________

/**
 *
 * @name OvalButton
 * @author Peter Laxalt
 *
 */
const OvalButton = ({
  addClass,
  href,
  label,
  onClick,
  invert = false
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(OvalButtonStyle, {
      className: `${OvalButtonClassName} ${addClass}`,
      children: [!href && /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        className: `${OvalButtonClassName}__el ${OvalButtonClassName}__el--is-${invert ? `inverted` : `not-inverted`}`,
        onClick: onClick,
        children: label
      }), href && /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: href,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          className: `${OvalButtonClassName}__el ${OvalButtonClassName}__el--is-${invert ? `inverted` : `not-inverted`}`,
          onClick: onClick,
          children: label
        })
      })]
    })
  });
}; // End Component
// ______________________________________________________________________________
// CONCATENATED MODULE: ./components/OvalButton/index.tsx


/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });