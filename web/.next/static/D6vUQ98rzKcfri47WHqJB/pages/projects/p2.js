(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"2qu3":function(t,e,n){"use strict";var r=n("ttDY"),o=n("/HRN"),i=n("WaGi"),a=n("p0XB"),u=n("XXOK"),c=n("Qetd"),s=n("eVuF"),l=n("pLtp"),f=n("hfKm"),d=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};f(e,"__esModule",{value:!0});var h=d(n("q1tI")),p=n("8L3h"),v=n("jwwS"),m=[],y=[],g=!1;function w(t){var e=t(),n={loading:!0,loaded:null,error:null};return n.promise=e.then((function(t){return n.loading=!1,n.loaded=t,t})).catch((function(t){throw n.loading=!1,n.error=t,t})),n}function _(t){var e={loading:!1,loaded:{},error:null},n=[];try{l(t).forEach((function(r){var o=w(t[r]);o.loading?e.loading=!0:(e.loaded[r]=o.loaded,e.error=o.error),n.push(o.promise),o.promise.then((function(t){e.loaded[r]=t})).catch((function(t){e.error=t}))}))}catch(r){e.error=r}return e.promise=s.all(n).then((function(t){return e.loading=!1,t})).catch((function(t){throw e.loading=!1,t})),e}function b(t,e){return h.default.createElement((n=t)&&n.__esModule?n.default:n,e);var n}function x(t,e){var n=c({loader:null,loading:null,delay:200,timeout:null,render:b,webpack:null,modules:null},e),r=null;function o(){if(!r){var e=new k(t,n);r={getCurrentValue:e.getCurrentValue.bind(e),subscribe:e.subscribe.bind(e),retry:e.retry.bind(e),promise:e.promise.bind(e)}}return r.promise()}if(!g&&"function"===typeof n.webpack){var i=n.webpack();y.push((function(t){var e=!0,n=!1,r=void 0;try{for(var a,c=u(i);!(e=(a=c.next()).done);e=!0){var s=a.value;if(-1!==t.indexOf(s))return o()}}catch(l){n=!0,r=l}finally{try{e||null==c.return||c.return()}finally{if(n)throw r}}}))}var s=function(t,e){o();var i=h.default.useContext(v.LoadableContext),u=p.useSubscription(r);return h.default.useImperativeHandle(e,(function(){return{retry:r.retry}})),i&&a(n.modules)&&n.modules.forEach((function(t){i(t)})),u.loading||u.error?h.default.createElement(n.loading,{isLoading:u.loading,pastDelay:u.pastDelay,timedOut:u.timedOut,error:u.error,retry:r.retry}):u.loaded?n.render(u.loaded,t):null};return s.preload=function(){return o()},s.displayName="LoadableComponent",h.default.forwardRef(s)}var k=function(){function t(e,n){o(this,t),this._loadFn=e,this._opts=n,this._callbacks=new r,this._delay=null,this._timeout=null,this.retry()}return i(t,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var t=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var e=this._res,n=this._opts;e.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){t._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){t._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){t._update(),t._clearTimeouts()})).catch((function(e){t._update(),t._clearTimeouts()})),this._update({})}},{key:"_update",value:function(t){this._state=c({},this._state,t),this._callbacks.forEach((function(t){return t()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return c({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading})}},{key:"subscribe",value:function(t){var e=this;return this._callbacks.add(t),function(){e._callbacks.delete(t)}}}]),t}();function E(t){return x(w,t)}function L(t,e){for(var n=[];t.length;){var r=t.pop();n.push(r(e))}return s.all(n).then((function(){if(t.length)return L(t,e)}))}E.Map=function(t){if("function"!==typeof t.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return x(_,t)},E.preloadAll=function(){return new s((function(t,e){L(m).then(t,e)}))},E.preloadReady=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new s((function(e){var n=function(){return g=!0,e()};L(y,t).then(n,n)}))},window.__NEXT_PRELOADREADY=E.preloadReady,e.default=E},"4mXO":function(t,e,n){t.exports=n("7TPF")},"5pKv":function(t,e){t.exports="\t\n\v\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff"},"6BQ9":function(t,e,n){t.exports=n("uekQ")},"7TPF":function(t,e,n){n("AUvm"),t.exports=n("WEpk").Object.getOwnPropertySymbols},"7lpM":function(t,e,n){var r={"./d1":"Uh2J","./d1.tsx":"Uh2J","./d2":"bUOA","./d2.tsx":"bUOA","./d8":"gOdJ","./d8.js":"gOdJ","./dharma":"QywH","./dharma.tsx":"QywH","./dharma_v0":"Hjf3","./dharma_v0.tsx":"Hjf3"};function o(t){var e=i(t);return n(e)}function i(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=i,t.exports=o,o.id="7lpM"},"7m0m":function(t,e,n){var r=n("Y7ZC"),o=n("uplh"),i=n("NsO/"),a=n("vwuL"),u=n("IP1Z");r(r.S,"Object",{getOwnPropertyDescriptors:function(t){for(var e,n,r=i(t),c=a.f,s=o(r),l={},f=0;s.length>f;)void 0!==(n=c(r,e=s[f++]))&&u(l,e,n);return l}})},EDeK:function(t,e,n){"use strict";n.r(e);var r=n("ln6h"),o=n.n(r),i=n("6BQ9"),a=n.n(i),u=n("0iUn"),c=n("sLSF"),s=n("MI3g"),l=n("a7VT"),f=n("AT/M"),d=n("Tit0"),h=n("vYYK"),p=n("q1tI"),v=n.n(p),m=n("a6RD"),y=n.n(m),g=v.a.createElement,w=y()((function(){return n.e(2).then(n.t.bind(null,"58Bg",7))}),{loading:function(){return g("p",null,"Loading...")},ssr:!1,loadableGenerated:{webpack:function(){return["58Bg"]},modules:["react-p5-wrapper"]}}),_=function(t){function e(t){var r;return Object(u.a)(this,e),r=Object(s.a)(this,Object(l.a)(e).call(this,t)),Object(h.a)(Object(f.a)(r),"renderP5",(function(t){var e=a()(t),o=n("7lpM")("./d".concat(e)).default(r.state.windowWidth,r.state.windowHeight);return g(w,{sketch:o})})),r.state={domLoaded:!1,windowWidth:0,windowHeight:0},r}return Object(d.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){this.setState({windowWidth:window.innerWidth,windowHeight:window.innerHeight})}},{key:"render",value:function(){return g("div",{className:"container"},this.renderP5("2"))}}],[{key:"getInitialProps",value:function(t){var e;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.query.sketchId,n.abrupt("return",{sketchId:e});case 2:case"end":return n.stop()}}))}}]),e}(p.Component);e.default=_},Hjf3:function(t,e,n){"use strict";n.r(e);var r=n("d04V"),o=n.n(r),i=n("agJb");e.default=function(t,e,n,r){return function(n){var a,u="LAXALT".split(""),c=u.map((function(t,e){return{letter:t,count:1,idx:e,copies:1}})),s=u.length,l=t/s,f=0,d=e/2.25,h=function(t){return l*t+l/2+6*f};n.preload=function(){a=n.loadFont("/fonts/dharma/dharma_regular.ttf")},n.setup=function(){n.createCanvas(t,e)},n.draw=function(){n.textFont(a),n.textLeading(0),n.textSize(1.25*e),n.textAlign(n.CENTER,n.CENTER),n.fill("".concat(i.a.Color.Galaxy)),n.strokeWeight(2),n.stroke(r),n.mouseIsPressed?f+=1:f=f,e&&t&&c.map((function(t,r){var i=o()(Array(t.count).keys());return n.scale(1,.5),n.mouseIsPressed?i.map((function(o,i){d=e/2.25+6*f*-1,n.text(t.letter,h(r),d)})):i.map((function(e,o){n.text(t.letter,h(r),d)}))}))},n.windowResized=function(){n.resizeCanvas(t,e)}}}},QywH:function(t,e,n){"use strict";n.r(e);var r=n("hfKm"),o=n.n(r),i=n("2Eek"),a=n.n(i),u=n("XoMD"),c=n.n(u),s=n("Jo+v"),l=n.n(s),f=n("4mXO"),d=n.n(f),h=n("pLtp"),p=n.n(h),v=n("d04V"),m=n.n(v),y=n("vYYK"),g=n("agJb");function w(t,e){var n=p()(t);if(d.a){var r=d()(t);e&&(r=r.filter((function(e){return l()(t,e).enumerable}))),n.push.apply(n,r)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(Object(n),!0).forEach((function(e){Object(y.a)(t,e,n[e])})):c.a?a()(t,c()(n)):w(Object(n)).forEach((function(e){o()(t,e,l()(n,e))}))}return t}e.default=function(t,e,n,r){return function(n){var o,i="LAXALT".split(""),a=i.map((function(t,e){return{letter:t,count:1,idx:e,copies:5,isIncrementing:!0,isDecrementing:!1}})),u=i.length,c=t/u,s=1.25*e;console.log(s,"characterSize");var l=0;n.preload=function(){o=n.loadFont("/fonts/dharma/dharma_regular.ttf")},n.setup=function(){n.createCanvas(t,e)};n.draw=function(){n.background(r),n.textFont(o),n.textSize(s),n.textAlign(n.CENTER,n.CENTER),n.fill("".concat(g.a.Color.Galaxy)),n.strokeWeight(4),n.stroke(r),e&&t&&a.map((function(t,r){n.scale(1,1),Math.random()<=.5&&n.millis()-l>3e3&&function(t,e){t.count<6&&t.isIncrementing?(a[e]=_({},t,{count:t.count+1}),l=n.millis()):6===t.count?(a[e]=_({},t,{count:t.count-1,isIncrementing:!1,isDecrementing:!0}),l=n.millis()):t.count>1&&t.isDecrementing?(a[e]=_({},t,{count:t.count-1,isDecrementing:!0}),l=n.millis()):1===t.count&&t.isDecrementing&&(a[e]=_({},t,{count:t.count+1,isIncrementing:!0,isDecrementing:!1}),l=n.millis())}(t,r);var o=m()(Array(t.count).keys());(o=o.map((function(t){return t+1}))).map((function(o,i){var a=1/(.95*t.count),u=1==t.count?e/2.25:s/2.75+s/1.36*i,l=m()(Array(t.copies).keys());(l=l.map((function(t){return t+1}))).map((function(e,o){n.push(),n.scale(1,a),n.text(t.letter,function(t){return c*t+c/1.5+6-60}(r)+6*e,u-6*e),n.pop()}))}))}))},n.windowResized=function(){n.resizeCanvas(t,e)}}}},Uh2J:function(t,e,n){"use strict";n.r(e),e.default=function(t,e){return function(n){var r=0,o=50,i=0,a="rgba(208, 112, 166, .3)";n.setup=function(){n.createCanvas(t,e),n.angleMode(n.RADIANS),n.background("yellow")},n.draw=function(){o+=1,i=400,r=1.1*r+2,n.noFill(),n.stroke(a),n.mouseX>0||n.mouseY>0?(n.ellipse(n.mouseX,n.mouseY,Math.sin(o)*(Math.sin(o)*i),Math.sin(o)*(Math.sin(o)*i)),n.smooth()):(n.ellipse(n.windowWidth/2,n.windowHeight/2,Math.sin(o)*(Math.sin(o)*i),Math.sin(o)*(Math.sin(o)*i)),n.smooth())},n.windowResized=function(){n.resizeCanvas(t,e),n.background("yellow")}}}},XWtR:function(t,e,n){var r=n("5T2Y").parseInt,o=n("oc46").trim,i=n("5pKv"),a=/^[-+]?0[xX]/;t.exports=8!==r(i+"08")||22!==r(i+"0x16")?function(t,e){var n=o(String(t),3);return r(n,e>>>0||(a.test(n)?16:10))}:r},XoMD:function(t,e,n){t.exports=n("hYAz")},a6RD:function(t,e,n){"use strict";var r=n("pLtp"),o=n("Qetd"),i=n("eVuF"),a=n("hfKm"),u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};a(e,"__esModule",{value:!0});var c=u(n("q1tI")),s=u(n("2qu3")),l=!1;function f(t,e){if(delete e.webpack,delete e.modules,!l)return t(e);var n=e.loading;return function(){return c.default.createElement(n,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}}e.noSSR=f,e.default=function(t,e){var n=s.default,a={loading:function(t){t.error,t.isLoading;return t.pastDelay,null}};if(t instanceof i?a.loader=function(){return t}:"function"===typeof t?a.loader=t:"object"===typeof t&&(a=o({},a,t)),a=o({},a,e),"object"===typeof t&&!(t instanceof i)&&(t.render&&(a.render=function(e,n){return t.render(n,e)}),t.modules)){n=s.default.Map;var u={},c=t.modules();r(c).forEach((function(t){var e=c[t];"function"!==typeof e.then?u[t]=e:u[t]=function(){return e.then((function(t){return t.default||t}))}})),a.loader=u}if(a.loadableGenerated&&delete(a=o({},a,a.loadableGenerated)).loadableGenerated,"boolean"===typeof a.ssr){if(!a.ssr)return delete a.ssr,f(n,a);delete a.ssr}return n(a)}},bUOA:function(t,e,n){"use strict";n.r(e);var r=n("6BQ9"),o=n.n(r);e.default=function(t,e){return function(n){var r=0,i="black",a="black",u="cyan";n.setup=function(){n.createCanvas(t,e,n.WEBGL),n.angleMode(n.RADIANS)},n.draw=function(){1,r=1.1*r+2,n.noFill(),n.stroke(i),n.background(u);for(var t=0;t<20;t++)n.cone(300,400),n.stroke(a),n.strokeWeight(1),n.translate(o()(50*Math.sin(.001*n.mouseX)),o()(50*Math.sin(.001*n.mouseY)),o()(50*Math.sin(.001*n.mouseX))),n.smooth(),n.rotateX(.01*n.frameCount),n.rotateY(.01*n.frameCount)},n.windowResized=function(){n.resizeCanvas(t,e),n.background("yellow")}}}},dEVD:function(t,e,n){var r=n("Y7ZC"),o=n("XWtR");r(r.G+r.F*(parseInt!=o),{parseInt:o})},gOdJ:function(t,e){var n,r,o,i,a,u,c,s,l;function f(){i=n.width=window.innerWidth,a=n.height=window.innerHeight,noise.seed(Math.random()),c=Math.floor(i/u)+1,s=Math.floor(a/u)+1,function(){o=new Array(c);for(var t=0;t<c;t++){o[t]=new Array(c);for(var e=0;e<s;e++)o[t][e]=[0,0]}}()}u=20,l=0,n=document.querySelector("#canvas"),r=n.getContext("2d"),f(),window.addEventListener("resize",f),function t(){requestAnimationFrame(t),function(){for(var t=0;t<c;t++)for(var e=0;e<s;e++){var n=noise.simplex3(t/80,e/80,l)*Math.PI*2,r=noise.simplex3(t/100+4e4,e/100+4e4,l);o[t][e][0]=n,o[t][e][1]=r}}(),l+=.004,r.fillStyle="black",r.fillRect(0,0,i,a),function(){for(var t=0;t<c;t++)for(var e=0;e<s;e++){var n=o[t][e][0],i=o[t][e][1];r.save(),r.translate(t*u,e*u),r.rotate(n),r.strokeStyle="white",r.beginPath(),r.moveTo(0,0),r.lineTo(0,u*i),r.stroke(),r.restore()}}()}()},hYAz:function(t,e,n){n("7m0m"),t.exports=n("WEpk").Object.getOwnPropertyDescriptors},jwwS:function(t,e,n){"use strict";var r=n("hfKm"),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};r(e,"__esModule",{value:!0});var i=o(n("q1tI"));e.LoadableContext=i.createContext(null)},ln6h:function(t,e,n){t.exports=n("ls82")},ls82:function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,n,r){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new M(r||[]);return i._invoke=function(t,e,n){var r=l;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw i;return D()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=E(a,n);if(u){if(u===p)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=s(t,e,n);if("normal"===c.type){if(r=n.done?h:f,c.arg===p)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=h,n.method="throw",n.arg=c.arg)}}}(t,n,a),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}t.wrap=c;var l="suspendedStart",f="suspendedYield",d="executing",h="completed",p={};function v(){}function m(){}function y(){}var g={};g[i]=function(){return this};var w=Object.getPrototypeOf,_=w&&w(w(j([])));_&&_!==n&&r.call(_,i)&&(g=_);var b=y.prototype=v.prototype=Object.create(g);function x(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function k(t){var e;this._invoke=function(n,o){function i(){return new Promise((function(e,i){!function e(n,o,i,a){var u=s(t[n],t,o);if("throw"!==u.type){var c=u.arg,l=c.value;return l&&"object"===typeof l&&r.call(l,"__await")?Promise.resolve(l.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(l).then((function(t){c.value=t,i(c)}),(function(t){return e("throw",t,i,a)}))}a(u.arg)}(n,o,e,i)}))}return e=e?e.then(i,i):i()}}function E(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,E(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=s(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,p;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function j(t){if(t){var n=t[i];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:D}}function D(){return{value:e,done:!0}}return m.prototype=b.constructor=y,y.constructor=m,y[u]=m.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},x(k.prototype),k.prototype[a]=function(){return this},t.AsyncIterator=k,t.async=function(e,n,r,o){var i=new k(c(e,n,r,o));return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(b),b[u]="Generator",b[i]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=j,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return u.type="throw",u.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:j(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=r}catch(o){Function("r","regeneratorRuntime = r")(r)}},oc46:function(t,e,n){var r=n("Y7ZC"),o=n("Jes0"),i=n("KUxP"),a=n("5pKv"),u="["+a+"]",c=RegExp("^"+u+u+"*"),s=RegExp(u+u+"*$"),l=function(t,e,n){var o={},u=i((function(){return!!a[t]()||"\u200b\x85"!="\u200b\x85"[t]()})),c=o[t]=u?e(f):a[t];n&&(o[n]=c),r(r.P+r.F*u,"String",o)},f=l.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(s,"")),t};t.exports=l},qGLV:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/p2",function(){return n("EDeK")}])},uekQ:function(t,e,n){n("dEVD"),t.exports=n("WEpk").parseInt},uplh:function(t,e,n){var r=n("ar/p"),o=n("mqlF"),i=n("5K7Z"),a=n("5T2Y").Reflect;t.exports=a&&a.ownKeys||function(t){var e=r.f(i(t)),n=o.f;return n?e.concat(n(t)):e}}},[["qGLV",0,1]]]);