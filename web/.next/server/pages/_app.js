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

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ "AeVD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ InteractiveFrameHeader_InteractiveFrameHeader; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./constants/Theme.tsx
var Theme = __webpack_require__("agJb");

// EXTERNAL MODULE: ./constants/Root.tsx
var Root = __webpack_require__("io+v");

// CONCATENATED MODULE: ./components/LayeredSidebar/styles.scss.tsx
// Imports
// _________________________________________________________________________
// Core
 // Constants


 // Begin Styles
// _________________________________________________________________________

/**
 *
 * @name LayeredSidebarClassName
 * @description The root class name for styling. BEM naming conventions.
 *
 */

const LayeredSidebarClassName = "layered-sidebar";
/**
 *
 * @name LayeredSidebarStyle
 * @author Peter Laxalt
 *
 */

const LayeredSidebarStyle = external_styled_components_default.a.nav.withConfig({
  displayName: "stylesscss__LayeredSidebarStyle",
  componentId: "sc-1xghijt-0"
})(["&.", "{--", "__pane-width:200px;--", "__pane-padding:calc(", " * .5);position:fixed;left:0;top:0;transform:translateX(", ");will-change:transform;transition:transform .5s ease-in-out;&.", "--frame-inactive{transform:translateX(0);}.", "__inner{display:flex;flex-wrap:nowrap;.", "__pane{width:var(--", "__pane-width);height:100vh;background:", ";padding-top:calc(", " * 2.5);&:not(:first-child){border-left:2px solid ", ";margin-left:calc(var(--", "__pane-width) * -.65);will-change:margin-left;transition:margin-left .25s ease-in-out;}&:hover{+ .", "__pane{margin-left:0;}}&__header{font-size:2rem;font-weight:bold;padding-left:var(--", "__pane-padding);padding-right:calc(", " / 2);text-transform:uppercase;}&__list{&--major{padding-top:calc(", " * 1.5);&:first-child{padding-top:calc(", " * 2.25);}}&--minor{padding-top:1.5rem;&:first-child{padding-top:calc(", " * 2.25);}}&__item{&--major{font-size:1.2rem;letter-spacing:.05rem;font-family:monospace;font-style:italic;line-height:1.5;}&--minor{font-size:.6rem;font-weight:bold;text-transform:uppercase;letter-spacing:.1rem;line-height:2.25;}a{color:", ";display:block;padding-left:var(--", "__pane-padding);padding-right:calc(", " / 2);&:hover{background:", ";color:", ";text-decoration:none;}}}}}}}"], LayeredSidebarClassName, LayeredSidebarClassName, LayeredSidebarClassName, Root["a" /* Root */].FrameSize, Root["a" /* Root */].FrameSize, LayeredSidebarClassName, LayeredSidebarClassName, LayeredSidebarClassName, LayeredSidebarClassName, Theme["a" /* Theme */].Color.varBackground, Root["a" /* Root */].FrameSize, Theme["a" /* Theme */].Color.varForeground, LayeredSidebarClassName, LayeredSidebarClassName, LayeredSidebarClassName, Root["a" /* Root */].FrameSize, Root["a" /* Root */].FrameSize, Root["a" /* Root */].FrameSize, Root["a" /* Root */].FrameSize, Theme["a" /* Theme */].Color.varForeground, LayeredSidebarClassName, Root["a" /* Root */].FrameSize, Theme["a" /* Theme */].Color.varForeground, Theme["a" /* Theme */].Color.varBackground);
// CONCATENATED MODULE: ./components/LayeredSidebar/LayeredSidebar.tsx
var __jsx = external_react_default.a.createElement;
// Core


// Styles
 // Begin Types
// __________________________________________________________________________________________

// Begin Data
// __________________________________________________________________________________________
const LayeredSidebar = ({
  addClass
}) => {
  let panes = [{
    header: "Design",
    items: [{
      label: "Strategy",
      href: "/",
      isMajor: true
    }, {
      label: "Branding",
      href: "/",
      isMajor: true
    }, {
      label: "Illustration",
      href: "/",
      isMajor: true
    }, {
      label: "Packaging",
      href: "/",
      isMajor: true
    }, {
      label: "Creative Direction",
      href: "/",
      isMajor: false
    }, {
      label: "Linework",
      href: "/",
      isMajor: false
    }, {
      label: "Hospitality",
      href: "/",
      isMajor: false
    }]
  }, {
    // header: "Pane 02",
    items: [{
      label: "Item",
      href: "/",
      isMajor: true
    }, {
      label: "Item",
      href: "/",
      isMajor: true
    }, {
      label: "Item",
      href: "/",
      isMajor: true
    }, {
      label: "Item",
      href: "/",
      isMajor: false
    }, {
      label: "Item",
      href: "/",
      isMajor: false
    }, {
      label: "Item",
      href: "/",
      isMajor: false
    }]
  }, {
    // header: "Pane 02",
    items: [{
      label: "Item",
      href: "/",
      isMajor: true
    }, {
      label: "Item",
      href: "/",
      isMajor: true
    }, {
      label: "Item",
      href: "/",
      isMajor: true
    }, {
      label: "Item",
      href: "/",
      isMajor: false
    }, {
      label: "Item",
      href: "/",
      isMajor: false
    }, {
      label: "Item",
      href: "/",
      isMajor: false
    }]
  }];

  if (panes) {
    return __jsx(LayeredSidebarStyle, {
      className: `${LayeredSidebarClassName} ${addClass && addClass}`
    }, __jsx("div", {
      className: `${LayeredSidebarClassName}__inner`
    }, panes.map((pane, idx) => {
      let paneItemsMajor = pane.items ? pane.items.filter(item => item.isMajor) : [];
      let paneItemsMinor = pane.items ? pane.items.filter(item => !item.isMajor) : [];
      return __jsx(external_react_default.a.Fragment, null, __jsx("div", {
        className: `${LayeredSidebarClassName}__pane`,
        key: idx
      }, pane.header && __jsx("div", {
        className: `${LayeredSidebarClassName}__pane__header`
      }, pane.header), pane.items && __jsx(external_react_default.a.Fragment, null, paneItemsMajor.length > 0 && __jsx("ul", {
        className: `${LayeredSidebarClassName}__pane__list ${LayeredSidebarClassName}__pane__list--major`
      }, paneItemsMajor.map((paneItem, idxx) => {
        return __jsx("li", {
          className: `${LayeredSidebarClassName}__pane__list__item ${LayeredSidebarClassName}__pane__list__item--${paneItem.isMajor ? "major" : "minor"}`,
          key: idxx
        }, __jsx(link_default.a, {
          href: paneItem.href
        }, __jsx("a", null, paneItem.label)));
      })), paneItemsMinor.length > 0 && __jsx("ul", {
        className: `${LayeredSidebarClassName}__pane__list ${LayeredSidebarClassName}__pane__list--minor`
      }, paneItemsMinor.map((paneItem, idxx) => {
        return __jsx("li", {
          className: `${LayeredSidebarClassName}__pane__list__item ${LayeredSidebarClassName}__pane__list__item--${paneItem.isMajor ? "major" : "minor"}`,
          key: idxx
        }, __jsx(link_default.a, {
          href: paneItem.href
        }, __jsx("a", null, paneItem.label)));
      })))));
    })));
  } else {
    return null;
  }
}; // End Component
// ______________________________________________________________________________
// CONCATENATED MODULE: ./components/LayeredSidebar/index.tsx

// EXTERNAL MODULE: ./constants/site/Settings.tsx
var Settings = __webpack_require__("Q9BO");

// EXTERNAL MODULE: ./constants/styles/Color.tsx
var Color = __webpack_require__("/YLk");

// CONCATENATED MODULE: ./constants/styles/CssUtils.tsx
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
  return Object(external_styled_components_["css"])(["position:absolute;left:0;right:0;top:0;bottom:0;object-fit:", ";width:100%;height:100%;object-position:center;max-width:100%;"], position);
});

_defineProperty(CssUtils, "ForceFullWidth", (spacing = "0", addGutter = false) => {
  return Object(external_styled_components_["css"])(["width:calc(100% + (", " * 2));margin-left:calc(", " * -1);margin-right:calc(", " * -1);max-width:100vw;", ""], spacing, spacing, spacing, addGutter ? Object(external_styled_components_["css"])(["padding-left:", ";padding-right:", ";"], spacing, spacing) : null);
});

_defineProperty(CssUtils, "CreateTheme", (clrPrimary, clrSecondary, clrBackground, clrForeground) => {
  return Object(external_styled_components_["css"])([":root{--clrPrimary:", ";--clrSecondary:", ";--clrBackground:", ";--clrForeground:", ";}"], clrPrimary, clrSecondary, clrBackground, clrForeground);
});

_defineProperty(CssUtils, "DisableUserSelect", () => {
  return Object(external_styled_components_["css"])(["-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;"]);
});

const LockBodyScroll = external_styled_components_["createGlobalStyle"]`
    body, html {
      overflow: hidden !important;
    }
  `;
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
})(["&.", "{height:calc(", ");display:flex;align-items:center;border-left:2px solid ", ";border-bottom:2px solid ", ";background:", ";z-index:990;.", "__option{width:calc(", " * 0.5);height:calc(", " * 0.5);border-radius:50%;margin:0 0.5rem;box-shadow:0px 0px 0px 2px ", ";&:hover{box-shadow:0px 0px 0px 3px ", ";}&:focus,&:active{box-shadow:0px 0px 0px 2px ", ";}&--active{box-shadow:0px 0px 0px 4px ", ";&:hover{box-shadow:0px 0px 0px 4px ", ";}}}}"], ThemePickerClassName, Root["a" /* Root */].FrameSize, Theme["a" /* Theme */].Color.varForeground, Theme["a" /* Theme */].Color.varForeground, Theme["a" /* Theme */].Color.varBackground, ThemePickerClassName, Root["a" /* Root */].FrameSize, Root["a" /* Root */].FrameSize, Theme["a" /* Theme */].Color.varForeground, Theme["a" /* Theme */].Color.varForeground, Theme["a" /* Theme */].Color.varForeground, Theme["a" /* Theme */].Color.varForeground, Theme["a" /* Theme */].Color.varForeground);
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
        background: "#FFF8DC",
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
      ${activeTheme ? CssUtils.CreateTheme(activeTheme.primary, activeTheme.secondary, activeTheme.background, activeTheme.foreground) : ""}
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
  componentId: "sc-184pxdg-0"
})(["&.", "{.", "__character-wrapper{position:relative;&[data-char-id=\"5\"]{transform:translateX(2.25px);}&[data-char-id=\"4\"]{transform:translateX(5.25px);}&[data-char-id=\"3\"]{transform:translateX(3.25px);}&[data-char-id=\"2\"]{transform:translateX(0.75px);}&[data-char-id=\"1\"]{transform:translateX(-1.5px);}&[data-char-id=\"0\"]{transform:translateX(0px);}&--hidden{display:none;}}.", "__character{font-size:var(--", "-font-size);font-family:dharma;font-weight:700;letter-spacing:0em;", ";}.", "__text{font-size:var(--", "-font-size);font-family:DharmaGothicC-ExBold,Dharma Gothic C;font-weight:700;letter-spacing:0em;transition:filter 1s ease-in-out;will-change:filter;}}"], DharmaTypeClassName, DharmaTypeClassName, DharmaTypeClassName, DharmaTypeClassName, CssUtils.DisableUserSelect(), DharmaTypeClassName, DharmaTypeClassName);
// CONCATENATED MODULE: ./components/InteractiveFrameHeader/styles.scss.tsx
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
  componentId: "sc-1qmwo8z-0"
})(["&.", "{--", "__frame-edge-size:", ";--", "__marquee-speed:60s;@media(max-width:", "){--", "__frame-edge-size:", ";}overflow:hidden;position:fixed;left:0;top:0;width:100vw;height:100vh;z-index:900;pointer-events:none;transform:scale(1);transform-origin:center center;will-change:transform;transition:transform .5s ease-in-out;&.", "--inactive{transform:scale(1.1);}.", "__inner{width:100vw;height:100vh;position:relative;z-index:999;pointer-events:none;}.", ",.", "__frame{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;}.", "__type{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:calc(100% - (var(--", "__frame-edge-size) * 2));height:calc(100% - (var(--", "__frame-edge-size) * 2.25));@media(max-width:", "){transform:translate(-50%,-50%) rotate(90deg);width:calc(100vh - (var(--", "__frame-edge-size) * 2.25));height:calc(100vw - (var(--", "__frame-edge-size) * 2.25));}.", "{--", "-offset-size:10px;@media(max-width:", "){--", "-offset-size:5px;}top:0;left:0;right:0;bottom:0;width:100%;height:100%;&--offset{top:calc(var(--", "-offset-size) * (var(--", "-offset) * -1));left:calc(var(--", "-offset-size) * (var(--", "-offset) * 1));right:calc(var(--", "-offset-size) * (var(--", "-offset) * -1));bottom:calc(var(--", "-offset-size) * (var(--", "-offset) * 1));}}.", "__character{fill:", ";transition:stroke-width .5s ease;}}.", "__frame{z-index:500;&__y-axis,&__x-axis{position:absolute;overflow:hidden;left:50%;top:50%;pointer-events:none;}&__y-axis{width:100vw;height:100vh;transform:translate(-50%,-50%);}&__x-axis{width:100vh;height:100vw;transform:translate(-50%,-50%) rotate(90deg);}&__edge{font-size:calc(var(--", "__frame-edge-size) * 0.5);text-transform:uppercase;line-height:0;z-index:800;background:", ";.", "__frame-items{list-style-type:none;color:", ";height:var(--", "__frame-edge-size);display:block;align-items:center;justify-content:flex-start;li{margin-right:calc(var(--", "__frame-edge-size) / 2);a{color:", ";position:relative;&:before{content:'';position:absolute;top:50%;left:0;width:100%;height:2px;background:", ";opacity:0;}&:hover{text-decoration:none;&:before{opacity:1;}}}&:focus,&:active{text-decoration:line-through;}}}.", "__marquee-container{flex-shrink:0;display:flex;justify-content:flex-start;flex-wrap:nowrap;position:relative;overflow:hidden;.", "__frame-items{display:flex;flex-wrap:nowrap;white-space:nowrap;flex-shrink:0;li{width:auto;flex-shrink:0;white-space:nowrap;vertical-align:middle;display:table-cell;}}}&--top,&--bottom,&--left,&--right{position:absolute;overflow:hidden;pointer-events:all;}&--top,&--right{.", "__frame-items{padding-top:calc(var(--", "__frame-edge-size) / 6);padding-bottom:calc(var(--", "__frame-edge-size) / 6);position:relative;border-bottom:2px solid ", ";animation:marqueeTopRightQuadrants var(--", "__marquee-speed) linear infinite;}}&--bottom,&--left{.", "__frame-items{padding-top:calc(var(--", "__frame-edge-size) / 6);padding-bottom:calc(var(--", "__frame-edge-size) / 6);border-top:2px solid ", ";animation:marqueeBottomLeftQuadrants var(--", "__marquee-speed) linear infinite;}}&--top,&--bottom{width:100vw;}&--left,&--right{width:100vh;}&--top{top:0;left:var(--", "__frame-edge-size);.", "{position:absolute;top:0;right:calc(var(--", "__frame-edge-size) * 2);}}&--bottom{bottom:0;right:var(--", "__frame-edge-size);}&--right{top:0;left:var(--", "__frame-edge-size);}&--left{bottom:0;left:0;}}.", "__frame__corner-action{width:var(--", "__frame-edge-size);height:var(--", "__frame-edge-size);position:fixed;z-index:999;a{display:grid;place-items:center;width:var(--", "__frame-edge-size);height:var(--", "__frame-edge-size);background:", ";pointer-events:all;&:hover{color:", ";text-decoration:none;}}&--top-left{top:0;left:0;}&--top-right{top:0;right:0;}&--bottom-left{bottom:0;left:0;}&--bottom-right{bottom:0;right:0;}}}}"], InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, Root["a" /* Root */].FrameSize, InteractiveFrameHeaderClassName, Theme["a" /* Theme */].Base.Media.Width.Md, InteractiveFrameHeaderClassName, Root["a" /* Root */].FrameSize, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, DharmaTypeClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, Theme["a" /* Theme */].Base.Media.Width.Sm, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, DharmaTypeClassName, DharmaTypeClassName, Theme["a" /* Theme */].Base.Media.Width.Sm, DharmaTypeClassName, DharmaTypeClassName, DharmaTypeClassName, DharmaTypeClassName, DharmaTypeClassName, DharmaTypeClassName, DharmaTypeClassName, DharmaTypeClassName, DharmaTypeClassName, DharmaTypeClassName, Theme["a" /* Theme */].Color.varForeground, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, Theme["a" /* Theme */].Color.varBackground, InteractiveFrameHeaderClassName, Theme["a" /* Theme */].Color.varForeground, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, Theme["a" /* Theme */].Color.varForeground, Theme["a" /* Theme */].Color.varForeground, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, Theme["a" /* Theme */].Color.varForeground, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, Theme["a" /* Theme */].Color.varForeground, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, ThemePickerClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, InteractiveFrameHeaderClassName, Theme["a" /* Theme */].Color.varForeground, Theme["a" /* Theme */].Color.varBackground);
// CONCATENATED MODULE: ./components/InteractiveFrameHeader/InteractiveFrameHeader.tsx
var InteractiveFrameHeader_jsx = external_react_default.a.createElement;
// Core
 // Types

// Components


 // Styles


 // Begin Types
// __________________________________________________________________________________________

// Begin Data
// __________________________________________________________________________________________
const FrameItems = () => {
  let items = [{
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
  }];
  return InteractiveFrameHeader_jsx("div", {
    className: `${InteractiveFrameHeaderClassName}__marquee-container`
  }, InteractiveFrameHeader_jsx("ul", {
    className: `${InteractiveFrameHeaderClassName}__frame-items`
  }, items.map((item, idx) => {
    return InteractiveFrameHeader_jsx("li", {
      key: idx
    }, InteractiveFrameHeader_jsx(link_default.a, {
      href: item.href
    }, InteractiveFrameHeader_jsx("a", null, item.label)));
  })), InteractiveFrameHeader_jsx("ul", {
    className: `${InteractiveFrameHeaderClassName}__frame-items`
  }, items.map((item, idx) => {
    return InteractiveFrameHeader_jsx("li", {
      key: idx
    }, InteractiveFrameHeader_jsx(link_default.a, {
      href: item.href
    }, InteractiveFrameHeader_jsx("a", null, item.label)));
  })));
}; // Begin Component
// _________________________________________________________________________________________

/**
 *
 * @name InteractiveFrameHeader
 *
 */


class InteractiveFrameHeader_InteractiveFrameHeader extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      isInactive: false
    };
    this.listenToScroll = this.listenToScroll.bind(this);
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
    return InteractiveFrameHeader_jsx(InteractiveFrameHeaderDisplay, {
      router: this.props.router,
      isInactive: this.state.isInactive
    });
  }

}
/**
 *
 * @name InteractiveFrameHeaderDisplay
 * @author Peter Laxalt
 *
 */

const InteractiveFrameHeaderDisplay = ({
  isInactive,
  router
}) => {
  console.log(router);
  let hasSidebar = router && router.pathname ? router.pathname.includes("sample") ? true : false : false;
  return InteractiveFrameHeader_jsx(external_react_default.a.Fragment, null, InteractiveFrameHeader_jsx(InteractiveFrameHeaderStyle, {
    className: `${InteractiveFrameHeaderClassName} ${InteractiveFrameHeaderClassName}--${isInactive ? `inactive` : `active`}`
  }, InteractiveFrameHeader_jsx("div", {
    className: `${InteractiveFrameHeaderClassName}__inner`
  }, InteractiveFrameHeader_jsx("div", {
    className: `${InteractiveFrameHeaderClassName}__frame`
  }, InteractiveFrameHeader_jsx("div", {
    className: `${InteractiveFrameHeaderClassName}__frame__corner-action ${InteractiveFrameHeaderClassName}__frame__corner-action--top-left`
  }, InteractiveFrameHeader_jsx(link_default.a, {
    href: "/"
  }, InteractiveFrameHeader_jsx("a", null, "\uD83D\uDC41"))), InteractiveFrameHeader_jsx("div", {
    className: `${InteractiveFrameHeaderClassName}__frame__corner-action ${InteractiveFrameHeaderClassName}__frame__corner-action--top-right`
  }, InteractiveFrameHeader_jsx(link_default.a, {
    href: "/"
  }, InteractiveFrameHeader_jsx("a", null, "\uD83D\uDC41"))), InteractiveFrameHeader_jsx("div", {
    className: `${InteractiveFrameHeaderClassName}__frame__corner-action ${InteractiveFrameHeaderClassName}__frame__corner-action--bottom-left`
  }, InteractiveFrameHeader_jsx(link_default.a, {
    href: "/"
  }, InteractiveFrameHeader_jsx("a", null, "\uD83D\uDC41"))), InteractiveFrameHeader_jsx("div", {
    className: `${InteractiveFrameHeaderClassName}__frame__corner-action ${InteractiveFrameHeaderClassName}__frame__corner-action--bottom-right`
  }, InteractiveFrameHeader_jsx(link_default.a, {
    href: "/"
  }, InteractiveFrameHeader_jsx("a", null, "\uD83D\uDC41"))), InteractiveFrameHeader_jsx("div", {
    className: `${InteractiveFrameHeaderClassName}__frame__y-axis`
  }, InteractiveFrameHeader_jsx("div", {
    className: `${InteractiveFrameHeaderClassName}__frame__edge ${InteractiveFrameHeaderClassName}__frame__edge--top`
  }, InteractiveFrameHeader_jsx(ThemePicker, null), InteractiveFrameHeader_jsx(FrameItems, null)), InteractiveFrameHeader_jsx("div", {
    className: `${InteractiveFrameHeaderClassName}__frame__edge ${InteractiveFrameHeaderClassName}__frame__edge--bottom`
  }, InteractiveFrameHeader_jsx(FrameItems, null))), InteractiveFrameHeader_jsx("div", {
    className: `${InteractiveFrameHeaderClassName}__frame__x-axis`
  }, InteractiveFrameHeader_jsx("div", {
    className: `${InteractiveFrameHeaderClassName}__frame__edge ${InteractiveFrameHeaderClassName}__frame__edge--left`
  }, InteractiveFrameHeader_jsx(FrameItems, null)), InteractiveFrameHeader_jsx("div", {
    className: `${InteractiveFrameHeaderClassName}__frame__edge ${InteractiveFrameHeaderClassName}__frame__edge--right`
  }, InteractiveFrameHeader_jsx(FrameItems, null)))))), hasSidebar ? InteractiveFrameHeader_jsx(LayeredSidebar, {
    addClass: `${LayeredSidebarClassName}--${isInactive ? `frame-inactive` : `frame-active`}`
  }) : null);
}; // End Component
// ______________________________________________________________________________
// CONCATENATED MODULE: ./components/InteractiveFrameHeader/index.tsx


/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

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

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


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
    position: relative;
    z-index: 10;

    pointer-events: none;
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

// EXTERNAL MODULE: ./components/InteractiveFrameHeader/index.tsx + 10 modules
var InteractiveFrameHeader = __webpack_require__("AeVD");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

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


 // Utils

 // Begin Interface
//////////////////////////////////////////////////////////////////////

// Begin Component
//////////////////////////////////////////////////////////////////////
// Layout
const Layout = ({
  children
}) => {
  const router = Object(router_["useRouter"])();
  return Layout_jsx(external_react_default.a.Fragment, null, Layout_jsx(GlobalStyle, null), Layout_jsx(SiteHead, {
    title: "LAXALT"
  }), Layout_jsx(GrainCover, null), Layout_jsx(InteractiveFrameHeader["a" /* InteractiveFrameHeader */], {
    router: router
  }), Layout_jsx("main", null, children));
};
// CONCATENATED MODULE: ./components/Layout/index.tsx

// CONCATENATED MODULE: ./pages/_app.tsx
var _app_jsx = external_react_default.a.createElement;
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

  return _app_jsx(Color["b" /* ColorContext */].Provider, {
    value: colorTheme
  }, _app_jsx(Layout, pageProps, _app_jsx(Component, pageProps)));
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