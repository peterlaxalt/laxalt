_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[23],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"1OyB":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},"30Gj":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("q1tI")),o=a(n("tWDO"));function a(e){return e&&e.__esModule?e:{default:e}}var i=o.default.reduce((e,t)=>(e[t]=class extends r.default.Component{render(){let{props:e}=this;return r.default.createElement(t,Object.assign(((e,t)=>{let n={};for(let r of Object.keys(t))e.includes(r)||(n[r]=t[r]);return n})(["children"],e),{dangerouslySetInnerHTML:{__html:e.children}}))}},e),{});t.default=i},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,u=d.length;c<u;c++){var s=d[c];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var l=o.props[s],f=r[s]||new Set;f.has(l)?a=!1:(f.add(l),r[s]=f)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}m.rewind=function(){};var h=m;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},JX7q:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},Ji7U:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return o}))},"M/Jg":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("q1tI"),o=n.n(r),a=n("vOnD").c.div.withConfig({displayName:"stylesscss__CounterStyle",componentId:"sc-1wjp3q5-0"})(['position:fixed;left:0px;bottom:0px;z-index:300;font-family:"Portia";pointer-events:none;.number{position:fixed;left:calc('," * 3);top:calc("," * 3);width:",";height:",';&:before{content:"";position:absolute;left:50%;top:50%;transform:translate(-50%,-50%) rotate(30deg);transform-origin:center center;width:1px;height:',";background:",";}span{position:absolute;color:",";&:first-child{position:absolute;top:0;right:50%;font-weight:bold;font-size:calc("," * 0.55);text-align:right;}&:last-child{position:absolute;bottom:calc("," * 0.15);right:calc("," * 0.15);font-size:calc("," * 0.25);}}}.information{position:fixed;left:",";bottom:",";font-size:2vw;color:",";span{&:last-child{font-weight:bold;}}}"],"50px","50px","15vw","15vw","15vw",(function(e){return e.theme.textColor}),(function(e){return e.theme.textColor}),"15vw","15vw","15vw","15vw","50px","50px",(function(e){return e.theme.textColor})),i=n("WJMe"),c=o.a.createElement,u=function(e){return c(o.a.Fragment,null,c(a,{theme:e.theme},c("div",{className:"number"},c("span",null,e.currentSketch<10?"0"+e.currentSketch:e.currentSketch),c("span",null,i.a.posts.length)),c("div",{className:"information"},c("span",null,i.a.posts[e.currentSketch].year,": "),c("span",null,'"',i.a.posts[e.currentSketch].name,'"'))))}},NLXd:function(e){e.exports=JSON.parse('["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"]')},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},UNyV:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("q1tI"),o=n.n(r),a=n("YFqc"),i=n.n(a),c=n("vOnD").c.div.withConfig({displayName:"stylesscss__PaginationStyle",componentId:"sc-13a2otb-0"})(["position:fixed;left:50px;right:50px;bottom:50px;z-index:300;ul{list-style-type:none;display:flex;justify-content:flex-end;width:100%;font-size:0.8rem;li{margin-right:10px;a{color:",";}&.active{border-top:1px solid ",";}&:last-child{margin-right:none;}}}"],(function(e){return e.theme.textColor}),(function(e){return e.theme.textColor})),u=n("WJMe"),s=o.a.createElement,l=function(e){return s(o.a.Fragment,null,s(c,{theme:e.theme},s("ul",null,u.a.posts.map((function(t,n){return n+1!==e.currentSketch?s("li",{key:n},s(i.a,{href:"/projects/".concat(u.a.slug,"/").concat(n+1)},s("a",{title:"".concat(n+1," - ").concat(t.year," - ").concat(t.name)},n+1))):s("li",{className:"active",key:n},s(i.a,{href:"/projects/".concat(u.a.slug,"/").concat(n+1)},s("a",{title:"".concat(n+1," - ").concat(t.year," - ").concat(t.name)},n+1)))})))))}},WJMe:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={slug:"25",posts:[{name:"Ecosystem",year:2008},{name:"Ecosystem",year:2008},{name:"Ecosystem",year:2008},{name:"Ecosystem",year:2008},{name:"Ecosystem",year:2008},{name:"Ecosystem",year:2008},{name:"Ecosystem",year:2008},{name:"Ecosystem",year:2008},{name:"Movement",year:2008},{name:"Ecosystem",year:2008},{name:"Ecosystem",year:2008},{name:"Ecosystem",year:2008},{name:"Ecosystem",year:2008},{name:"Ecosystem",year:2008},{name:"Ecosystem",year:2008},{name:"Ecosystem",year:2008},{name:"Ecosystem",year:2008},{name:"Ecosystem",year:2008},{name:"Ecosystem",year:2008},{name:"Ecosystem",year:2008},{name:"Ecosystem",year:2008},{name:"Ecosystem",year:2008},{name:"Ecosystem",year:2008},{name:"Ecosystem",year:2008},{name:"Ecosystem",year:2008}]}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),c=n("a1gu"),u=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},YFqc:function(e,t,n){e.exports=n("cTJO")},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a=o(n("q1tI")),i=n("elyg"),c=n("nOHt"),u=n("vNVm"),s={};function l(e,t,n,r){if((0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),o=n&&n.pathname||"/",f=a.default.useMemo((function(){var t=(0,i.resolveHref)(o,e.href,!0),n=r(t,2),a=n[0],c=n[1];return{href:a,as:e.as?(0,i.resolveHref)(o,e.as):c||a}}),[o,e.href,e.as]),d=f.href,p=f.as,m=e.children,h=e.replace,y=e.shallow,v=e.scroll,b=e.locale;"string"===typeof m&&(m=a.default.createElement("a",null,m));var g=a.Children.only(m),w=g&&"object"===typeof g&&g.ref,x=(0,u.useIntersection)({rootMargin:"200px"}),_=r(x,2),O=_[0],E=_[1],M=a.default.useCallback((function(e){O(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,O]);(0,a.useEffect)((function(){var e=E&&t&&(0,i.isLocalURL)(d),r="undefined"!==typeof b?b:n&&n.locale,o=s[d+"%"+p+(r?"%"+r:"")];e&&!o&&l(n,d,p,{locale:r})}),[p,d,E,b,t,n]);var k={ref:M,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a,locale:u}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,d,p,h,y,v,b)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),l(n,d,p,{priority:!0}))}};return(e.passHref||"a"===g.type&&!("href"in g.props))&&(k.href=(0,i.addBasePath)((0,i.addLocale)(p,"undefined"!==typeof b?b:n&&n.locale,n&&n.defaultLocale))),a.default.cloneElement(g,k)};t.default=f},foSv:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r}))},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},md7G:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return a}));var o=n("JX7q");function a(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?Object(o.a)(e):t}},nF1f:function(e,t,n){"use strict";n.r(t);var r=n("1OyB"),o=n("vuIU"),a=n("Ji7U"),i=n("md7G"),c=n("foSv"),u=n("h4VS"),s=n("q1tI"),l=n.n(s),f=n("8Kt/"),d=n.n(f),p=n("vOnD"),m=(n("30Gj"),p.c.div.withConfig({displayName:"stylesscss__FrameStyle",componentId:"sc-16vxnnd-0"})(['position:fixed;left:0;top:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;overflow:hidden;pointer-events:none;.svg-wrap{position:relative;height:100vh;display:flex;justify-content:center;align-items:center;overflow:visible;pointer-events:none;&:before,&:after{content:"";position:absolute;height:100vh;width:100vw;background:',";top:0;bottom:0;}&:before{left:25vw;}&:after{right:25vw;}}svg{position:absolute;transform-origin:center center;width:50vw;height:100vh;bottom:0;fill:",";pointer-events:none;}"],(function(e){return e.theme.bgColor}),(function(e){return e.theme.bgColor}))),h=n("UNyV"),y=n("M/Jg"),v=l.a.createElement,b=function(e){return console.log(e),v(l.a.Fragment,null,v(y.a,{theme:e.theme,currentSketch:e.currentSketch}),v(m,{theme:e.theme},v("div",{className:"svg-wrap"},v("svg",{version:"1.1",x:"0px",y:"0px",preserveAspectRatio:"none",viewBox:"0 0 1683.8 2045.9"},v("path",{className:"st0",d:"M0,0v2045.9h1683.8V0H0z M1500.8,1385.4c-75.4,232.3-406.6,270.3-578,390.5 c-172.8,121.2-267.3,170.2-413.6,90.8c-137.9-74.9-306.9-145.5-357-366.6c-50.5-222.9,132.6-430.4,204.9-653.2 c75.4-232.3,45.8-544.4,217.2-664.6c172.8-121.2,320.9,50.5,467.2,129.9c137.9,74.9,391.4,68.2,441.5,289.2 C1533.5,824.4,1573.1,1162.7,1500.8,1385.4z"})))),v(h.a,{theme:e.theme,currentSketch:e.currentSketch}))},g=l.a.createElement;function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(c.a)(e);if(t){var o=Object(c.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(i.a)(this,n)}}function x(){var e=Object(u.a)(["\n  .nav {\n    display: none;\n  }\n"]);return x=function(){return e},e}var _={textColor:"#0d132a",bgColor:"#d5fdd2"},O=Object(p.a)(x()),E=function(e){Object(a.a)(n,e);var t=w(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).state={domLoaded:!1,windowWidth:0,windowHeight:0},o}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.setState({domLoaded:!0})}},{key:"render",value:function(){return g(l.a.Fragment,null,g(O,null),g(b,{theme:_,currentSketch:8}),!0===this.state.domLoaded?g(l.a.Fragment,null,g(d.a,null,g("script",{src:"/lib/perlin.js"}),g("script",{src:"/lib/2008.js"})),g("canvas",{id:"canvas"})):"NOT LOADED")}}]),n}(s.Component);t.default=E},sO1q:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/25/8",function(){return n("nF1f")}])},tWDO:function(e,t,n){"use strict";e.exports=n("NLXd")},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),o=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,o=(0,a.useRef)(),s=(0,a.useState)(!1),l=r(s,2),f=l[0],d=l[1],p=(0,a.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),n||f||e&&e.tagName&&(o.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=u.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return u.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){a.unobserve(e),0===i.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,a.useEffect)((function(){c||f||(0,i.default)((function(){return d(!0)}))}),[f]),[p,f]};var a=n("q1tI"),i=o(n("0G5g")),c="undefined"!==typeof IntersectionObserver;var u=new Map},vuIU:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return o}))}},[["sO1q",0,1,2,9,12]]]);