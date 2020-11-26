module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

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
  Primary: "#FFF6EE",
  Secondary: "#5D6376",
  Background: "#ff988c",
  Text: "#FFF6EE",
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
  ::-moz-selection { background: ${Color.Primary}; color: ${Color.Cream} }
  ::selection { background: ${Color.Primary}; color: ${Color.Cream} }

  :root {
    --clrPrimary: ${Color.Primary};
    --clrSecondary: ${Color.Secondary};
    --clrBackground: ${Color.Background};
    --clrForeground: ${Color.Text};
  }
`; //////////////////////////////////////////////////////////////////////
// End Component

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cha2");


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

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "Q9BO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __DEBUG__; });
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

/***/ "YMx+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Blink */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FadeIn; });
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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cha2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Layout/Layout.tsx + 9 modules
var Layout = __webpack_require__("pdCo");

// CONCATENATED MODULE: ./components/Layout/index.tsx

// EXTERNAL MODULE: ./constants/styles/Color.tsx
var Color = __webpack_require__("/YLk");

// CONCATENATED MODULE: ./pages/_app.tsx
var __jsx = external_react_default.a.createElement;
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

  return __jsx(Color["b" /* ColorContext */].Provider, {
    value: colorTheme
  }, __jsx(Layout["a" /* Layout */], pageProps, __jsx(Component, pageProps)));
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

/***/ "pdCo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Layout; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

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
var __jsx = external_react_default.a.createElement;

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
const GlobalStyle = () => __jsx(external_react_default.a.Fragment, null, __jsx(Root["b" /* RootVariables */], null), __jsx(Reset, null), __jsx(Font["b" /* Typography */], null), __jsx(Color["c" /* Palette */], null));
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

const GrainCoverStyle = external_styled_components_default.a.div.withConfig({
  displayName: "stylesscss__GrainCoverStyle",
  componentId: "sc-1okuk8t-0"
})(["position:fixed;left:0;right:0;top:0;bottom:0;pointer-events:none;overflow:hidden;display:flex;z-index:999;mix-blend-mode:multiply;.grain-cover-inner{width:1000vw;height:1000vh;background-image:url('/noise.png');}"]);
/* harmony default export */ var styles_scss = (GrainCoverStyle);
// CONCATENATED MODULE: ./components/GrainCover/GrainCover.tsx
var GrainCover_jsx = external_react_default.a.createElement;
// Imports
// __________________________________________________________________________________________
// Core

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
  return GrainCover_jsx(styles_scss, null, GrainCover_jsx("div", {
    className: "grain-cover-inner"
  }));
};
// CONCATENATED MODULE: ./components/GrainCover/index.tsx

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/SiteHead/SiteHead.tsx

var SiteHead_jsx = external_react_default.a.createElement;

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
  return SiteHead_jsx(head_default.a, null, SiteHead_jsx("title", null, title), SiteHead_jsx("meta", {
    charSet: "utf-8"
  }), SiteHead_jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width"
  }), SiteHead_jsx("meta", {
    charSet: "utf-8"
  }), SiteHead_jsx("meta", {
    "http-equiv": "X-UA-Compatible",
    content: "IE=edge,chrome=1"
  }), SiteHead_jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), SiteHead_jsx("meta", {
    name: "mobile-web-app-capable",
    content: "yes"
  }), SiteHead_jsx("meta", {
    name: "apple-mobile-web-app-capable",
    content: "yes"
  }));
};
// CONCATENATED MODULE: ./components/SiteHead/index.tsx

// EXTERNAL MODULE: ./constants/site/Settings.tsx
var Settings = __webpack_require__("Q9BO");

// EXTERNAL MODULE: ./constants/styles/CssUtils.tsx
var CssUtils = __webpack_require__("59zH");

// CONCATENATED MODULE: ./components/ThemePicker/styles.scss.tsx
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

const ThemePickerStyle = external_styled_components_default.a.div.withConfig({
  displayName: "stylesscss__ThemePickerStyle",
  componentId: "zgtval-0"
})(["&.", "{position:fixed;right:0;top:0;height:calc(", ");display:flex;align-items:center;border-left:1px solid ", ";border-bottom:1px solid ", ";background:", ";z-index:990;.", "__option{width:calc(", " * 0.5);height:calc(", " * 0.5);border-radius:50%;margin:0 0.5rem;box-shadow:0px 0px 0px 1px ", ";&:hover{box-shadow:0px 0px 0px 2px ", ";}&:focus,&:active{box-shadow:0px 0px 0px 1px ", ";}&--active{box-shadow:0px 0px 0px 3px ", ";&:hover{box-shadow:0px 0px 0px 3px ", ";}}}}"], ThemePickerClassName, Root["a" /* Root */].FrameSize, Theme["a" /* Theme */].Color.varForeground, Theme["a" /* Theme */].Color.varForeground, Theme["a" /* Theme */].Color.varBackground, ThemePickerClassName, Root["a" /* Root */].FrameSize, Root["a" /* Root */].FrameSize, Theme["a" /* Theme */].Color.varForeground, Theme["a" /* Theme */].Color.varForeground, Theme["a" /* Theme */].Color.varForeground, Theme["a" /* Theme */].Color.varForeground, Theme["a" /* Theme */].Color.varForeground);
// CONCATENATED MODULE: ./components/ThemePicker/ThemePicker.tsx
var ThemePicker_jsx = external_react_default.a.createElement;
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
        name: "goldenrod",
        primary: "#393349",
        secondary: "#393349",
        background: "#DAA520",
        foreground: "#393349"
      }, {
        name: "cadetblue",
        primary: "#FFF8DC",
        secondary: "#FFF8DC",
        background: "#5F9EA0",
        foreground: "#FFF8DC"
      }, {
        name: "orangered",
        primary: "#FFF8DC",
        secondary: "#FFF8DC",
        background: "#FF4500",
        foreground: "#FFF8DC"
      }, {
        name: "white",
        primary: Theme["a" /* Theme */].Color.Black,
        secondary: Theme["a" /* Theme */].Color.Black,
        background: Theme["a" /* Theme */].Color.White,
        foreground: Theme["a" /* Theme */].Color.Black
      }, {
        name: "galaxy",
        primary: "#FFF8DC",
        secondary: "#FFF8DC",
        background: Theme["a" /* Theme */].Color.Galaxy,
        foreground: "#FFF8DC"
      }]
    };
    this.setNewTheme = this.setNewTheme.bind(this);
  }

  componentDidMount() {
    if ("undefined") {
      window.laxaltUniversalTheme = this.state.activeTheme;
      Settings["b" /* __DEBUG__ */] && console.log("🎨 theme set", window.laxaltUniversalTheme);
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
    return ThemePicker_jsx(external_react_default.a.Fragment, null, activeTheme && activeTheme.name !== "default" ? ThemePicker_jsx(SetGlobalTheme, null) : null, ThemePicker_jsx(ThemePickerStyle, {
      className: `${ThemePickerClassName}`
    }, availableThemes ? availableThemes.map((themeItem, idx) => {
      return ThemePicker_jsx("div", {
        className: `${ThemePickerClassName}__option ${ThemePickerClassName}__option--${themeItem.name === activeTheme.name ? "active" : "inactive"}`,
        style: {
          backgroundColor: themeItem.background
        },
        onClick: () => this.setNewTheme(themeItem),
        key: idx
      });
    }) : null));
  }

}
const ThemePicker = () => {
  const {
    setTheme
  } = Object(external_react_["useContext"])(Color["b" /* ColorContext */]);
  return ThemePicker_jsx(ThemePicker_ThemePickerWithHook, {
    setTheme: setTheme
  });
};
// CONCATENATED MODULE: ./components/ThemePicker/index.tsx

// CONCATENATED MODULE: ./components/Layout/Layout.tsx
var Layout_jsx = external_react_default.a.createElement;

/**
 *
 * Layout.js
 * @author Peter Laxalt
 * @description The website layout.
 *
 */
// Constants


 // Components


 // Begin Interface
//////////////////////////////////////////////////////////////////////

// Begin Component
//////////////////////////////////////////////////////////////////////
// Layout
const Layout = ({
  children
}) => Layout_jsx(external_react_default.a.Fragment, null, Layout_jsx(GlobalStyle, null), Layout_jsx(SiteHead, {
  title: "LAXALT"
}), Layout_jsx(GrainCover, null), Layout_jsx(ThemePicker, null), Layout_jsx("main", null, children));

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });