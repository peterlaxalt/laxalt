_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{"/0+H":function(e,n,t){"use strict";n.__esModule=!0,n.isInAmpMode=i,n.useAmp=function(){return i(a.default.useContext(r.AmpStateContext))};var o,a=(o=t("q1tI"))&&o.__esModule?o:{default:o},r=t("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.ampFirst,t=void 0!==n&&n,o=e.hybrid,a=void 0!==o&&o,r=e.hasQuery,i=void 0!==r&&r;return t||a&&i}},0:function(e,n,t){t("74v/"),e.exports=t("nOHt")},"74v/":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t("cha2")}])},"7W2i":function(e,n,t){var o=t("SksO");e.exports=function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&o(e,n)}},"8Kt/":function(e,n,t){"use strict";t("lSNA");n.__esModule=!0,n.defaultHead=d,n.default=void 0;var o,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=l();if(n&&n.has(e))return n.get(e);var t={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var r=o?Object.getOwnPropertyDescriptor(e,a):null;r&&(r.get||r.set)?Object.defineProperty(t,a,r):t[a]=e[a]}t.default=e,n&&n.set(e,t);return t}(t("q1tI")),r=(o=t("Xuae"))&&o.__esModule?o:{default:o},i=t("lwAK"),c=t("FYa8"),s=t("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=[a.default.createElement("meta",{charSet:"utf-8"})];return e||n.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),n}function _(e,n){return"string"===typeof n||"number"===typeof n?e:n.type===a.default.Fragment?e.concat(a.default.Children.toArray(n.props.children).reduce((function(e,n){return"string"===typeof n||"number"===typeof n?e:e.concat(n)}),[])):e.concat(n)}var f=["name","httpEquiv","charSet","itemProp"];function u(e,n){return e.reduce((function(e,n){var t=a.default.Children.toArray(n.props.children);return e.concat(t)}),[]).reduce(_,[]).reverse().concat(d(n.inAmpMode)).filter(function(){var e=new Set,n=new Set,t=new Set,o={};return function(a){var r=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?r=!1:e.add(i)}switch(a.type){case"title":case"base":n.has(a.type)?r=!1:n.add(a.type);break;case"meta":for(var c=0,s=f.length;c<s;c++){var l=f[c];if(a.props.hasOwnProperty(l))if("charSet"===l)t.has(l)?r=!1:t.add(l);else{var d=a.props[l],_=o[l]||new Set;_.has(d)?r=!1:(_.add(d),o[l]=_)}}}return r}}()).reverse().map((function(e,n){var t=e.key||n;return a.default.cloneElement(e,{key:t})}))}function h(e){var n=e.children,t=(0,a.useContext)(i.AmpStateContext),o=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(r.default,{reduceComponentsToState:u,headManager:o,inAmpMode:(0,s.isInAmpMode)(t)},n)}h.rewind=function(){};var p=h;n.default=p},Bnag:function(e,n){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,n){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,n,t){"use strict";var o;n.__esModule=!0,n.HeadManagerContext=void 0;var a=((o=t("q1tI"))&&o.__esModule?o:{default:o}).default.createContext({});n.HeadManagerContext=a},Ijbi:function(e,n,t){var o=t("WkPL");e.exports=function(e){if(Array.isArray(e))return o(e)}},Nsbk:function(e,n){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(n)}e.exports=t},PJYZ:function(e,n){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,n,t){var o=t("Ijbi"),a=t("EbDI"),r=t("ZhPi"),i=t("Bnag");e.exports=function(e){return o(e)||a(e)||r(e)||i()}},Xuae:function(e,n,t){"use strict";var o=t("RIqP"),a=t("lwsE"),r=t("W8MJ"),i=(t("PJYZ"),t("7W2i")),c=t("a1gu"),s=t("Nsbk");function l(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,o=s(e);if(n){var a=s(this).constructor;t=Reflect.construct(o,arguments,a)}else t=o.apply(this,arguments);return c(this,t)}}n.__esModule=!0,n.default=void 0;var d=t("q1tI"),_=function(e){i(t,e);var n=l(t);function t(e){var r;return a(this,t),(r=n.call(this,e))._hasHeadManager=void 0,r.emitChange=function(){r._hasHeadManager&&r.props.headManager.updateHead(r.props.reduceComponentsToState(o(r.props.headManager.mountedInstances),r.props))},r._hasHeadManager=r.props.headManager&&r.props.headManager.mountedInstances,r}return r(t,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),t}(d.Component);n.default=_},a1gu:function(e,n,t){var o=t("cDf5"),a=t("PJYZ");e.exports=function(e,n){return!n||"object"!==o(n)&&"function"!==typeof n?a(e):n}},cha2:function(e,n,t){"use strict";t.r(n);var o=t("rePB"),a=t("nKUr"),r=t("q1tI"),i=t("h4VS"),c=t("vOnD"),s=t("e1cB"),l=t("/YLk"),d=t("io+v"),_=t("agJb");function f(){var e=Object(i.a)(["\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n/* * {\n  cursor: none !important;\n} */\n\n/** Animation */\n@keyframes marqueeBottomLeftQuadrants {\n  from {\n    transform: translateX(0%);\n  }\n  to {\n    transform: translateX(-100%);\n  }\n}\n\n@keyframes marqueeTopRightQuadrants {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(0%);\n  }\n}\n\n\nhtml {\n    line-height: 1.15; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n    margin: 0;\n    padding: 0;\n    min-height: 100%;\n    overflow: auto;\n    background-color: ",";\n    color: ",";\n\n    cursor: crosshair;\n\n    /* overflow: hidden; */\n  }\n\n\n\n  /* Sections\n     ========================================================================== */\n\n  /**\n   * Remove the margin in all browsers.\n   */\n\n  body {\n    min-height: 100%;\n    margin: 0;\n    padding-left: 0;\n    padding-right: 0;\n    padding-bottom: 0;\n    background-color: ",";\n    color: ",';\n\n    cursor: crosshair;\n\n    /* overflow: hidden; */\n  }\n\n  /**\n   * Render the \'main\' element consistently in IE.\n   */\n\n  main {\n    display: block;\n    position: relative;\n    z-index: 10;\n  }\n\n\n  /* Grouping content\n     ========================================================================== */\n\n  /**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n\n  hr {\n    box-sizing: content-box; /* 1 */\n    height: 0; /* 1 */\n    overflow: visible; /* 2 */\n  }\n\n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd \'em\' font sizing in all browsers.\n   */\n\n  pre {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n\n  /* Text-level semantics\n     ========================================================================== */\n\n  /**\n   * Remove the gray background on active links in IE 10.\n   */\n\n  a {\n    background-color: transparent;\n  }\n\n  /**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n\n  abbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n  }\n\n  /**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n\n  b,\n  strong {\n    font-weight: bolder;\n  }\n\n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd \'em\' font sizing in all browsers.\n   */\n\n  code,\n  kbd,\n  samp {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n\n  /**\n   * Add the correct font size in all browsers.\n   */\n\n  small {\n    font-size: 80%;\n  }\n\n  /**\n   * Prevent \'sub\' and \'sup\' elements from affecting the line height in\n   * all browsers.\n   */\n\n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n\n  sub {\n    bottom: -0.25em;\n  }\n\n  sup {\n    top: -0.5em;\n  }\n\n  /* Embedded content\n     ========================================================================== */\n\n  /**\n   * Remove the border on images inside links in IE 10.\n   */\n\n  img {\n    border-style: none;\n  }\n\n  /* Forms\n     ========================================================================== */\n\n  /**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n\n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n  }\n\n  /**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n\n  button,\n  input { /* 1 */\n    overflow: visible;\n  }\n\n  /**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n\n  button,\n  select { /* 1 */\n    text-transform: none;\n  }\n\n  /**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n\n  button,\n  [type="button"],\n  [type="reset"],\n  [type="submit"] {\n    -webkit-appearance: button;\n  }\n\n  /**\n   * Remove the inner border and padding in Firefox.\n   */\n\n  button::-moz-focus-inner,\n  [type="button"]::-moz-focus-inner,\n  [type="reset"]::-moz-focus-inner,\n  [type="submit"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n\n  /**\n   * Restore the focus styles unset by the previous rule.\n   */\n\n  button:-moz-focusring,\n  [type="button"]:-moz-focusring,\n  [type="reset"]:-moz-focusring,\n  [type="submit"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n\n  /**\n   * Correct the padding in Firefox.\n   */\n\n  fieldset {\n    padding: 0.35em 0.75em 0.625em;\n  }\n\n  /**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from \'fieldset\' elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    \'fieldset\' elements in all browsers.\n   */\n\n  legend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n  }\n\n  /**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n\n  progress {\n    vertical-align: baseline;\n  }\n\n  /**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n\n  textarea {\n    overflow: auto;\n  }\n\n  /**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n\n  [type="checkbox"],\n  [type="radio"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n  }\n\n  /**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n\n  [type="number"]::-webkit-inner-spin-button,\n  [type="number"]::-webkit-outer-spin-button {\n    height: auto;\n  }\n\n  /**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n\n  [type="search"] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n  }\n\n  /**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n\n  [type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  /**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to \'inherit\' in Safari.\n   */\n\n  ::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n  }\n\n  /* Interactive\n     ========================================================================== */\n\n  /*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n\n  details {\n    display: block;\n  }\n\n  /*\n   * Add the correct display in all browsers.\n   */\n\n  summary {\n    display: list-item;\n  }\n\n  /* Misc\n     ========================================================================== */\n\n  /**\n   * Add the correct display in IE 10+.\n   */\n\n  template {\n    display: none;\n  }\n\n  /**\n   * Add the correct display in IE 10.\n   */\n\n  [hidden] {\n    display: none;\n  }\n\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n\n\n  ul {\n    margin-block-start: 0px;\n    margin-block-end: 0px;\n    margin-inline-start: 0px;\n    margin-inline-end: 0px;\n    padding-inline-start: 0px;\n\n    -webkit-margin-before: 0px;\n    -webkit-margin-after: 0px;\n    -webkit-margin-start: 0px;\n    -webkit-margin-end: 0px;\n    -webkit-padding-start: 0px;\n  }\n\n  ol, ul {\n    list-style: none;\n  }\n\n  blockquote, q {\n    quotes: none;\n  }\n\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: \'\';\n    content: none;\n  }\n\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  a {\n    text-decoration: none;\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n\n  pre {\n    display: block;\n    padding: 2rem;\n    margin-top: 4rem;\n    overflow: auto;\n    font-size: 85%;\n    line-height: 1.45;\n    border-radius: 5px;\n    border: 1px solid #ddd;\n  }\n\n  video {\n    max-width: 100%;\n  }\n\n  p, h1, h2, h3, h4, h5, h6 {\n    margin: 0;\n  }\n\n  * {\n    box-sizing: border-box;\n    -webkit-tap-highlight-color: transparent; /* for remove highlight */\n  }\n\n  /* Intercom */\n  .intercom-namespace {\n    .intercom-launcher-frame {\n      bottom: unset !important;\n      top: 18px !important;\n      right: 139px !important;\n    }\n  }\n\n  .intercom-container {\n    display: none !important;\n  }\n\n']);return f=function(){return e},e}var u=Object(c.a)(f(),_.a.Color.varBackground,_.a.Color.varForeground,_.a.Color.varBackground,_.a.Color.varForeground),h=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(d.b,{}),Object(a.jsx)(u,{}),Object(a.jsx)(s.b,{}),Object(a.jsx)(l.c,{})]})},p=t("YMx+"),m=c.c.div.withConfig({displayName:"stylesscss__GrainCoverStyle",componentId:"sc-1okuk8t-0"})(["position:fixed;left:0;right:0;top:0;bottom:0;pointer-events:none;overflow:hidden;display:flex;z-index:999;opacity:0.06;.",'__inner{width:1000vw;height:1000vh;background-image:url("/noise-anim.gif");}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){opacity:.1;.',"__inner{background-size:50%;}}"],"grain-cover","grain-cover"),b=function(){return Object(a.jsx)(m,{className:"".concat("grain-cover"),children:Object(a.jsx)("div",{className:"".concat("grain-cover","__inner")})})},v=t("8Kt/"),g=t.n(v),j=function(e){var n=e.title,t=void 0===n?"This is the default title":n;return Object(a.jsxs)(g.a,{children:[Object(a.jsx)("title",{children:t}),Object(a.jsx)("meta",{charSet:"utf-8"}),Object(a.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),Object(a.jsx)("meta",{charSet:"utf-8"}),Object(a.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge,chrome=1"}),Object(a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),Object(a.jsx)("meta",{name:"mobile-web-app-capable",content:"yes"}),Object(a.jsx)("meta",{name:"apple-mobile-web-app-capable",content:"yes"})]})},x=t("1OyB"),y=t("vuIU"),O=t("JX7q"),w=t("Ji7U"),k=t("md7G"),N=t("foSv"),E=t("Q9BO"),C=t("YFqc"),S=t.n(C),F=t("eBd7"),I=t("/vEV"),A=t("LHK9"),P=t("97/L");function z(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,o=Object(N.a)(e);if(n){var a=Object(N.a)(this).constructor;t=Reflect.construct(o,arguments,a)}else t=o.apply(this,arguments);return Object(k.a)(this,t)}}var M=function(e){Object(w.a)(t,e);var n=z(t);function t(e){var o;return Object(x.a)(this,t),(o=n.call(this,e)).state={isInactive:!1,isFillBarsExpanded:!1,isOverlayVisible:!1,isSidebarVisible:!1,isLogotypeExpanded:!1},o.listenToScroll=o.listenToScroll.bind(Object(O.a)(o)),o.toggleLogotype=o.toggleLogotype.bind(Object(O.a)(o)),o.toggleOverlay=o.toggleOverlay.bind(Object(O.a)(o)),o.toggleFillBars=o.toggleFillBars.bind(Object(O.a)(o)),o.toggleOverlayAndFillBarsExpansion=o.toggleOverlayAndFillBarsExpansion.bind(Object(O.a)(o)),o.toggleOverlayAndLogotypeExpansion=o.toggleOverlayAndLogotypeExpansion.bind(Object(O.a)(o)),o}return Object(y.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.listenToScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.listenToScroll)}},{key:"toggleLogotype",value:function(){this.state.isLogotypeExpanded?this.setState({isLogotypeExpanded:!1}):this.setState({isLogotypeExpanded:!0})}},{key:"toggleOverlay",value:function(){return this.state.isOverlayVisible?void this.setState({isOverlayVisible:!1}):void this.setState({isOverlayVisible:!0})}},{key:"toggleFillBars",value:function(){return this.state.isFillBarsExpanded?void this.setState({isFillBarsExpanded:!1}):void this.setState({isFillBarsExpanded:!0})}},{key:"toggleOverlayAndLogotypeExpansion",value:function(){this.state.isFillBarsExpanded?(this.toggleOverlay(),this.toggleFillBars()):(this.toggleLogotype(),this.toggleOverlay())}},{key:"toggleOverlayAndFillBarsExpansion",value:function(){this.toggleFillBars(),this.toggleOverlay()}},{key:"listenToScroll",value:function(){document&&((document.body.scrollTop||document.documentElement.scrollTop)>10?this.setState({isInactive:!0}):this.setState({isInactive:!1}))}},{key:"render",value:function(){return Object(a.jsx)(R,{router:this.props.router,isInactive:this.state.isInactive,isFillBarsExpanded:this.state.isFillBarsExpanded,isOverlayVisible:this.state.isOverlayVisible,isSidebarVisible:this.state.isSidebarVisible,isLogotypeExpanded:this.state.isLogotypeExpanded,toggleOverlayAndFillBarsExpansion:this.toggleOverlayAndFillBarsExpansion,toggleOverlayAndLogotypeExpansion:this.toggleOverlayAndLogotypeExpansion})}}]),t}(r.Component),R=function(e){var n=e.isInactive,t=e.isFillBarsExpanded,o=e.isLogotypeExpanded,r=e.isOverlayVisible,i=(e.toggleOverlayAndFillBarsExpansion,e.toggleOverlayAndLogotypeExpansion),c=e.router;!(!c||!c.pathname)&&c.pathname.includes("sample");return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(A.i,{className:"".concat(A.h," ").concat(A.h,"--").concat(n||r?"inactive":"active"," ").concat(A.h,"--").concat(t||r?"fill-bars-is-expanded":"fill-bars-is-not-expanded"),children:Object(a.jsx)("div",{className:"".concat(A.h,"__inner"),children:Object(a.jsxs)("div",{className:"".concat(A.h,"__frame"),children:[Object(a.jsx)("div",{className:"".concat(A.h,"__frame__nav ").concat(A.h,"__frame__nav--top"),children:Object(a.jsxs)("div",{className:"".concat(A.h,"__frame__nav__inner"),children:[Object(a.jsx)("div",{className:"".concat(A.h,"__frame__nav__col ").concat(A.h,"__frame__nav__col--left"),children:Object(a.jsx)("ul",{className:"".concat(A.h,"__frame__nav__linklist"),children:E.b.OverlayNav.NavItems.map((function(e,n){return Object(a.jsx)("li",{className:"".concat(A.h,"__frame__nav__linklist__item"),children:Object(a.jsx)(S.a,{href:e.href,children:Object(a.jsx)("a",{className:"".concat(A.h,"__frame__nav__linklist__item__el"),children:e.label})})},n)}))})}),Object(a.jsxs)("div",{className:"".concat(A.h,"__frame__nav__col ").concat(A.h,"__frame__nav__col--right"),children:[Object(a.jsx)("div",{className:"".concat(A.h,"__frame__nav__inner-col ").concat(A.h,"__frame__nav__inner-col--brandmark"),children:Object(a.jsx)("div",{className:"".concat(A.h,"__frame__nav__brandmark"),children:Object(a.jsx)(S.a,{href:"/",children:Object(a.jsx)("a",{className:"".concat(A.h,"__frame__nav__linklist__item__el ").concat(A.h,"__frame__nav__brandmark__label"),children:"Studio Laxalt"})})})}),Object(a.jsx)("div",{className:"".concat(A.h,"__frame__nav__inner-col ").concat(A.h,"__frame__nav__inner-col--misc ").concat(A.h,"__frame__nav__misc-wrapper"),children:Object(a.jsx)("div",{className:"".concat(A.h,"__frame__nav__linklist__item ").concat(A.h,"__frame__nav__misc-wrapper__el"),children:Object(a.jsx)(S.a,{href:E.a.miscPage,children:Object(a.jsx)("a",{className:"".concat(A.h,"__frame__nav__linklist__item__el"),children:"Misc"})})})})]})]})}),Object(a.jsx)("div",{className:"".concat(A.h,"__frame__nav ").concat(A.h,"__frame__nav--bottom"),children:Object(a.jsxs)("div",{className:"".concat(A.h,"__frame__nav__inner"),children:[Object(a.jsx)("div",{className:"".concat(A.h,"__frame__nav__col ").concat(A.h,"__frame__nav__col--time ").concat(A.h,"__frame__nav__col--left"),children:Object(a.jsxs)("ul",{className:"".concat(A.h,"__frame__nav__linklist"),children:[Object(a.jsx)("li",{className:"".concat(A.h,"__frame__nav__linklist__item"),children:Object(a.jsx)("span",{className:"".concat(A.h,"__frame__nav__linklist__item__time"),children:"NYC / 04:21:21"})}),Object(a.jsx)("li",{className:"".concat(A.h,"__frame__nav__linklist__item"),children:Object(a.jsx)("span",{className:"".concat(A.h,"__frame__nav__linklist__item__time"),children:"S\xe3o Paulo / 04:21:21"})}),Object(a.jsx)("li",{className:"".concat(A.h,"__frame__nav__linklist__item"),children:Object(a.jsx)("span",{className:"".concat(A.h,"__frame__nav__linklist__item__time"),children:"San Francisco / 04:21:21"})})]})}),Object(a.jsxs)("div",{className:"".concat(A.h,"__frame__nav__col ").concat(A.h,"__frame__nav__col--contact ").concat(A.h,"__frame__nav__col--right"),children:[Object(a.jsx)("div",{className:"".concat(A.h,"__frame__nav__inner-col ").concat(A.h,"__frame__nav__inner-col--theme-picker"),children:Object(a.jsx)(F.a,{})}),Object(a.jsx)("div",{className:"".concat(A.h,"__frame__nav__inner-col ").concat(A.h,"__frame__nav__inner-col--contact-btn"),children:Object(a.jsx)(S.a,{href:E.a.contactPage,children:Object(a.jsx)("a",{className:"".concat(A.h,"__frame__nav__linklist__item__el ").concat(A.h,"__frame__nav__linklist__item__el--contact-btn"),children:"Contact"})})})]})]})})]})})}),r?Object(a.jsx)(I.a,{addClass:"".concat(P.a,"--").concat(r?"is-visible":"is-hidden"),toggleOverlayAndLogotypeExpansion:i}):null,Object(a.jsx)(A.g,{className:"".concat(A.f," ").concat(A.f,"--").concat(n?"inactive":"active"," ").concat(A.f,"--").concat(o?"is-expanded":"is-not-expanded"," ").concat(A.f,"--").concat(t?"fill-bars-is-expanded":"fill-bars-is-not-expanded"),children:Object(a.jsx)("span",{className:"".concat(A.f,"__inner"),children:Object(a.jsxs)("span",{className:"".concat(A.f,"__el"),onClick:function(){return i()},children:[Object(a.jsx)("svg",{className:"".concat(A.f,"__el__circle"),children:Object(a.jsx)("circle",{cx:"50%",cy:"50%",r:"50%"})}),Object(a.jsxs)("span",{className:"".concat(A.f,"__el__icon"),children:[Object(a.jsx)("span",{className:"".concat(A.f,"__el__icon__diagonal ").concat(A.f,"__el__icon__diagonal--down")}),Object(a.jsx)("span",{className:"".concat(A.f,"__el__icon__diagonal ").concat(A.f,"__el__icon__diagonal--up")})]})]})})}),Object(a.jsxs)(A.e,{className:"".concat(A.d," ").concat(A.d,"--").concat(n?"inactive":"active"," ").concat(A.d,"--").concat(t?"is-expanded":"is-not-expanded"),children:[Object(a.jsx)("span",{className:"".concat(A.d,"__fill-bar ").concat(A.d,"__fill-bar--top")}),Object(a.jsx)("span",{className:"".concat(A.d,"__fill-bar ").concat(A.d,"__fill-bar--right")}),Object(a.jsx)("span",{className:"".concat(A.d,"__fill-bar ").concat(A.d,"__fill-bar--bottom")}),Object(a.jsx)("span",{className:"".concat(A.d,"__fill-bar ").concat(A.d,"__fill-bar--left")})]})]})},B=t("nOHt"),L=t("a6RD"),D=t.n(L),T=t("wFD6"),H=t("sUW2"),q=c.c.footer.withConfig({displayName:"stylesscss__FooterStyle",componentId:"sc-1eymw0g-0"})(["&.","{--","__arrow-width:1em;--","__arrow-margin:.25em;--","__arrow-total-size:calc(var(--","__arrow-width) + var(--","__arrow-margin));position:relative;z-index:10;background:",";color:",";padding:0 "," "," ",';overflow:hidden;&:after{content:"";position:absolute;top:0;left:0;height:2px;width:100%;background:',";}font-size:1.5rem;font-weight:200;.","__inner{position:relative;min-height:100vh;display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-start;}.","__canvas{position:absolute;left:0%;top:0%;width:100%;height:100%;.__footer-canvas-container{position:sticky;top:0;div{font-size:0;}}canvas{width:100vw !important;height:100vh !important;}}.","__bottom,.","__top{padding:",";width:100%;}.","__nav-list{width:100%;margin-left:calc("," * -.5);&__item{overflow:hidden;font-size:6vw;text-transform:uppercase;display:flex;align-items:center;.","__outline{border:3px solid ",";}.","__pupil{&__el{border:3px solid ",";&:before{background:",";border-radius:50%;}}}&:hover{.","{.","__pupil__el{&:before{transform:translate(-50%,-50%) scale(1.5);}&:after{transform:translate(-50%,-50%) scale(1);}}}}&__overflow-wrapper{overflow:hidden;}&__inner{display:block;transform:translateX( calc(var(--","__arrow-total-size) * -1) );will-change:transform;transition:transform 0.5s ease-in-out;}&:hover{.","__nav-list__item__inner{transform:translateX(0);}.","__nav-list__item__anchor__indicator{transform:translateX(0%);}}&__anchor{color:",";pointer-events:all;position:relative;display:flex;align-items:center;animation:"," 1s ease 1;&:hover{text-decoration:none;}&__indicator{width:var(--","__arrow-width);display:block;margin-right:var(--","__arrow-margin);height:4px;background:",';position:relative;transform:translateX(-20%);will-change:transform;transition:transform 1.5s ease-in-out;&:before,&:after{content:"";position:absolute;right:0;height:0.5em;width:0.5em;}&:before{border-left:4px solid ',";border-bottom:4px solid ",";border-bottom-left-radius:100%;bottom:50%;}&:after{border-left:4px solid ",";border-top:4px solid ",";border-top-left-radius:100%;top:50%;}}}}}.","__bottom{z-index:10;position:relative;display:flex;justify-content:space-between;border-top:2px solid ",";align-items:center;background:",";&__col{width:calc(100% / 3);&__label{display:block;}strong{font-weight:600;}&--three{text-align:right;}}}}"],"footer","footer","footer","footer","footer","footer",_.a.Color.varBackground,_.a.Color.varForeground,A.b,A.b,A.b,_.a.Color.varForeground,"footer","footer","footer","footer",d.a.Size,"footer",d.a.Size,H.a,_.a.Color.varForeground,H.a,_.a.Color.varForeground,_.a.Color.varForeground,H.a,H.a,"footer","footer","footer",_.a.Color.varForeground,p.b,"footer","footer",_.a.Color.varForeground,_.a.Color.varForeground,_.a.Color.varForeground,_.a.Color.varForeground,_.a.Color.varForeground,"footer",_.a.Color.varForeground,_.a.Color.varBackground);function X(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,o=Object(N.a)(e);if(n){var a=Object(N.a)(this).constructor;t=Reflect.construct(o,arguments,a)}else t=o.apply(this,arguments);return Object(k.a)(this,t)}}var V=D()((function(){return Promise.all([t.e(10),t.e(11)]).then(t.t.bind(null,"58Bg",7))}),{loading:function(){return Object(a.jsx)(a.Fragment,{})},ssr:!1,loadableGenerated:{webpack:function(){return["58Bg"]},modules:["react-p5-wrapper"]}}),W=function(e){Object(w.a)(r,e);var n=X(r);function r(e){var i;return Object(x.a)(this,r),i=n.call(this,e),Object(o.a)(Object(O.a)(i),"renderP5",(function(e){var n=t("49Hi")("./".concat(e)).default(i.state.windowWidth,i.state.windowHeight,1,i.state.canvasParent);return Object(a.jsx)(V,{sketch:n})})),i.state={domLoaded:!1,windowWidth:0,windowHeight:0,canvasElement:!1,canvasTheme:void 0,canvasParent:void 0},i.renderP5=i.renderP5.bind(Object(O.a)(i)),i}return Object(y.a)(r,[{key:"componentDidMount",value:function(){this.setState({windowWidth:window.innerWidth-80,windowHeight:window.innerHeight-80,domLoaded:!0,canvasElement:!1})}},{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"__footer-canvas-container",children:this.renderP5("footer-canvas")})})}}]),r}(r.Component),Y=function(){var e;return Object(r.useEffect)((function(){e=function(){window.scrollTo(0,0)}})),Object(a.jsx)(q,{className:"".concat("footer"),children:Object(a.jsxs)("div",{className:"".concat("footer","__inner"),children:[Object(a.jsx)("div",{className:"".concat("footer","__canvas"),children:Object(a.jsx)(W,{})}),Object(a.jsx)("div",{className:"".concat("footer","__top"),children:Object(a.jsx)("div",{className:"".concat("footer","__top__col ").concat("footer","__top__col--one"),children:Object(a.jsx)("ul",{className:"".concat("footer","__nav-list"),children:E.b.OverlayNav.NavItems.map((function(e,n){return Object(a.jsx)("li",{className:"".concat("footer","__nav-list__item"),children:Object(a.jsx)("span",{className:"".concat("footer","__nav-list__item__overflow-wrapper"),children:Object(a.jsx)("span",{className:"".concat("footer","__nav-list__item__inner"),children:Object(a.jsx)(S.a,{href:e.href,children:Object(a.jsxs)("a",{className:"".concat("footer","__nav-list__item__anchor"),children:[Object(a.jsx)("span",{className:"".concat("footer","__nav-list__item__anchor__indicator")}),Object(a.jsx)("span",{className:"".concat("footer","__nav-list__item__anchor__label"),children:e.label})]})})})})},n)}))})})}),Object(a.jsxs)("div",{className:"".concat("footer","__bottom"),children:[Object(a.jsxs)("div",{className:"".concat("footer","__bottom__col ").concat("footer","__bottom__col--one"),children:[Object(a.jsx)("span",{className:"".concat("footer","__bottom__col__label"),children:"Currently / Brooklyn, NYC"}),Object(a.jsx)("span",{className:"".concat("footer","__bottom__col__label"),children:"Originally / Reno, Nevada"})]}),Object(a.jsxs)("div",{className:"".concat("footer","__bottom__col ").concat("footer","__bottom__col--two"),children:[Object(a.jsx)("strong",{className:"".concat("footer","__bottom__col__label"),children:"STUDIO LAXALT"}),Object(a.jsx)("span",{className:"".concat("footer","__bottom__col__label"),children:"\xa92020 ALL RIGHTS RESERVED"})]}),Object(a.jsx)("div",{className:"".concat("footer","__bottom__col ").concat("footer","__bottom__col--three"),onClick:function(){return e()},children:Object(a.jsx)(T.a,{label:"Back to top",addClass:"".concat("footer","__oval-btn"),invert:!1})})]})]})})},J=function(e){var n=e.children,t=Object(B.useRouter)();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(h,{}),Object(a.jsx)(j,{title:"LAXALT"}),Object(a.jsx)(b,{}),Object(a.jsx)(M,{router:t}),Object(a.jsx)("main",{children:n}),Object(a.jsx)(Y,{})]})};function U(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function K(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?U(Object(t),!0).forEach((function(n){Object(o.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):U(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.default=function(e){var n=e.Component,t=e.pageProps,o=Object(l.d)();return Object(a.jsx)(l.b.Provider,{value:o,children:Object(a.jsx)(J,K(K({},t),{},{children:Object(a.jsx)(n,K({},t))}))})}},lwAK:function(e,n,t){"use strict";var o;n.__esModule=!0,n.AmpStateContext=void 0;var a=((o=t("q1tI"))&&o.__esModule?o:{default:o}).default.createContext({});n.AmpStateContext=a}},[[0,0,1,6,8,2,3,4,5,7,9,12,14]]]);