(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"2qu3":function(e,t,a){"use strict";var n=a("ttDY"),r=a("/HRN"),i=a("WaGi"),o=a("p0XB"),c=a("XXOK"),s=a("Qetd"),u=a("eVuF"),d=a("pLtp"),l=a("hfKm"),f=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};l(t,"__esModule",{value:!0});var h=f(a("q1tI")),m=a("8L3h"),p=a("jwwS"),v=[],g=[],_=!1;function w(e){var t=e(),a={loading:!0,loaded:null,error:null};return a.promise=t.then((function(e){return a.loading=!1,a.loaded=e,e})).catch((function(e){throw a.loading=!1,a.error=e,e})),a}function b(e){var t={loading:!1,loaded:{},error:null},a=[];try{d(e).forEach((function(n){var r=w(e[n]);r.loading?t.loading=!0:(t.loaded[n]=r.loaded,t.error=r.error),a.push(r.promise),r.promise.then((function(e){t.loaded[n]=e})).catch((function(e){t.error=e}))}))}catch(n){t.error=n}return t.promise=u.all(a).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function y(e,t){return h.default.createElement((a=e)&&a.__esModule?a.default:a,t);var a}function S(e,t){var a=s({loader:null,loading:null,delay:200,timeout:null,render:y,webpack:null,modules:null},t),n=null;function r(){if(!n){var t=new z(e,a);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!_&&"function"===typeof a.webpack){var i=a.webpack();g.push((function(e){var t=!0,a=!1,n=void 0;try{for(var o,s=c(i);!(t=(o=s.next()).done);t=!0){var u=o.value;if(-1!==e.indexOf(u))return r()}}catch(d){a=!0,n=d}finally{try{t||null==s.return||s.return()}finally{if(a)throw n}}}))}var u=function(e,t){r();var i=h.default.useContext(p.LoadableContext),c=m.useSubscription(n);return h.default.useImperativeHandle(t,(function(){return{retry:n.retry}})),i&&o(a.modules)&&a.modules.forEach((function(e){i(e)})),c.loading||c.error?h.default.createElement(a.loading,{isLoading:c.loading,pastDelay:c.pastDelay,timedOut:c.timedOut,error:c.error,retry:n.retry}):c.loaded?a.render(c.loaded,e):null};return u.preload=function(){return r()},u.displayName="LoadableComponent",h.default.forwardRef(u)}var z=function(){function e(t,a){r(this,e),this._loadFn=t,this._opts=a,this._callbacks=new n,this._delay=null,this._timeout=null,this.retry()}return i(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,a=this._opts;t.loading&&("number"===typeof a.delay&&(0===a.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),a.delay)),"number"===typeof a.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),a.timeout))),this._res.promise.then((function(){e._update(),e._clearTimeouts()})).catch((function(t){e._update(),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=s({},this._state,e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return s({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading})}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function x(e){return S(w,e)}function C(e,t){for(var a=[];e.length;){var n=e.pop();a.push(n(t))}return u.all(a).then((function(){if(e.length)return C(e,t)}))}x.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return S(b,e)},x.preloadAll=function(){return new u((function(e,t){C(v).then(e,t)}))},x.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new u((function(t){var a=function(){return _=!0,t()};C(g,e).then(a,a)}))},window.__NEXT_PRELOADREADY=x.preloadReady,t.default=x},"49Hi":function(e,t,a){var n={"./d1":"Uh2J","./d1.tsx":"Uh2J","./d2":"bUOA","./d2.tsx":"bUOA","./d8":"gOdJ","./d8.js":"gOdJ","./dharma":"QywH","./dharma.tsx":"QywH","./dharma_v0":"Hjf3","./dharma_v0.tsx":"Hjf3","./glsl":"iRSi","./glsl.tsx":"iRSi"};function r(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id="49Hi"},"4mXO":function(e,t,a){e.exports=a("7TPF")},"59zH":function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("rt45"),r=a("0iUn"),i=a("vYYK"),o=a("vOnD");a("agJb"),a("io+v");function c(){var e=Object(n.a)(["\n    body, html {\n      overflow: hidden !important;\n    }\n  "]);return c=function(){return e},e}var s=function e(){Object(r.a)(this,e)};Object(i.a)(s,"ObjectFit",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"cover";return Object(o.b)(["position:absolute;left:0;right:0;top:0;bottom:0;object-fit:",";width:100%;height:100%;object-position:center;max-width:100%;"],e)})),Object(i.a)(s,"ForceFullWidth",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Object(o.b)(["width:calc(100% + ("," * 2));margin-left:calc("," * -1);margin-right:calc("," * -1);max-width:100vw;",""],e,e,e,t?Object(o.b)(["padding-left:",";padding-right:",";"],e,e):null)})),Object(i.a)(s,"CreateTheme",(function(e,t,a,n){return Object(o.b)([":root{--clrPrimary:",";--clrSecondary:",";--clrBackground:",";--clrForeground:",";}"],e,t,a,n)})),Object(i.a)(s,"DisableUserSelect",(function(){return Object(o.b)(["-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;"])}));Object(o.a)(c())},"5pKv":function(e,t){e.exports="\t\n\v\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff"},"6BQ9":function(e,t,a){e.exports=a("uekQ")},"7TPF":function(e,t,a){a("AUvm"),e.exports=a("WEpk").Object.getOwnPropertySymbols},"7m0m":function(e,t,a){var n=a("Y7ZC"),r=a("uplh"),i=a("NsO/"),o=a("vwuL"),c=a("IP1Z");n(n.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,a,n=i(e),s=o.f,u=r(n),d={},l=0;u.length>l;)void 0!==(a=s(n,t=u[l++]))&&c(d,t,a);return d}})},Hjf3:function(e,t,a){"use strict";a.r(t);var n=a("d04V"),r=a.n(n),i=a("agJb");t.default=function(e,t,a,n){return function(a){var o,c="LAXALT".split(""),s=c.map((function(e,t){return{letter:e,count:1,idx:t,copies:1}})),u=c.length,d=e/u,l=0,f=t/2.25,h=function(e){return d*e+d/2+6*l};a.preload=function(){o=a.loadFont("/fonts/dharma/dharma_regular.ttf")},a.setup=function(){a.createCanvas(e,t)},a.draw=function(){a.textFont(o),a.textLeading(0),a.textSize(1.25*t),a.textAlign(a.CENTER,a.CENTER),a.fill("".concat(i.a.Color.Galaxy)),a.strokeWeight(2),a.stroke(n),a.mouseIsPressed?l+=1:l=l,t&&e&&s.map((function(e,n){var i=r()(Array(e.count).keys());return a.scale(1,.5),a.mouseIsPressed?i.map((function(r,i){f=t/2.25+6*l*-1,a.text(e.letter,h(n),f)})):i.map((function(t,r){a.text(e.letter,h(n),f)}))}))},a.windowResized=function(){a.resizeCanvas(e,t)}}}},O5GZ:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("vYYK"),o=a("UXZV"),c=a.n(o);function s(){return(s=c.a||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var u=a("d04V"),d=a.n(u),l=a("0iUn"),f=a("sLSF"),h=a("MI3g"),m=a("a7VT"),p=a("AT/M"),v=a("Tit0"),g=a("agJb"),_=a("vOnD"),w=a("io+v"),b=a("59zH"),y=_.c.svg.withConfig({displayName:"stylesscss__DharmaTypeStyle",componentId:"lgdyqd-0"})(["&.","{.",'__character-wrapper{position:relative;&[data-char-id="5"]{transform:translateX(2.25px);}&[data-char-id="4"]{transform:translateX(5.25px);}&[data-char-id="3"]{transform:translateX(3.25px);}&[data-char-id="2"]{transform:translateX(0.75px);}&[data-char-id="1"]{transform:translateX(-1.5px);}&[data-char-id="0"]{transform:translateX(0px);}&--hidden{display:none;}}.',"__character{font-size:var(--","-font-size);font-family:dharma;font-weight:700;letter-spacing:0em;",";}.","__text{font-size:var(--","-font-size);font-family:DharmaGothicC-ExBold,Dharma Gothic C;font-weight:700;letter-spacing:0em;transition:filter 1s ease-in-out;will-change:filter;}}"],"dharma-type","dharma-type","dharma-type","dharma-type",b.a.DisableUserSelect(),"dharma-type","dharma-type"),S=r.a.createElement,z=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={text:"",characters:[],viewBoxHeight:0,viewBoxWidth:0,characterWidth:0,offsetCount:3,characterVerticalTranslation:0,characterHorizontalScale:0,characterVerticalScale:0,isInitialized:!1},a.incrementLetterCount=a.incrementLetterCount.bind(Object(p.a)(a)),a.decrementLetterCount=a.decrementLetterCount.bind(Object(p.a)(a)),a.resetLetterCount=a.resetLetterCount.bind(Object(p.a)(a)),a.updateLetterCount=a.updateLetterCount.bind(Object(p.a)(a)),a.letterCountTimer=a.letterCountTimer.bind(Object(p.a)(a)),a.offsetCountTimer=a.offsetCountTimer.bind(Object(p.a)(a)),a.incrementOffsetCount=a.incrementOffsetCount.bind(Object(p.a)(a)),a}return Object(v.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){if(this.props.text){var e=this.props.text,t=e.split(""),a=t.map((function(e,t){return{letter:e,count:1,idx:t,copies:Math.random()<=.5}})),n=100/t.length;this.setState({text:e,characters:a,viewBoxHeight:100,viewBoxWidth:100,characterWidth:n,characterHorizontalScale:.75,characterVerticalScale:1.38,characterVerticalTranslation:.993,isInitialized:!0}),this.letterCountTimer(),this.offsetCountTimer()}}},{key:"incrementLetterCount",value:function(e){this.setState({characters:this.state.characters.map((function(t,a){return{letter:t.letter,count:e==t.idx?t.count+1:t.count,idx:a,copies:Math.random()<=.5}}))})}},{key:"decrementLetterCount",value:function(e){this.setState({characters:this.state.characters.map((function(t,a){return{letter:t.letter,count:e==t.idx?t.count-1:t.count,idx:a,copies:Math.random()<=.5}}))})}},{key:"resetLetterCount",value:function(e){this.setState({characters:this.state.characters.map((function(t,a){return{letter:t.letter,count:e==t.idx?1:t.count,idx:a,copies:Math.random()<=.5}}))})}},{key:"updateLetterCount",value:function(e){if(this.state.characters&&this.state.characters.length>0){var t=this.state.characters.filter((function(t){return t.idx==e}))[0];t&&(4===t.count?this.resetLetterCount(e):this.incrementLetterCount(e))}}},{key:"letterCountTimer",value:function(){var e=this;window.setInterval((function(){return e.updateLetterCount((t=0,a=e.state.characters.length,Math.floor(t+Math.random()*(a+1-t))));var t,a}),3e3)}},{key:"incrementOffsetCount",value:function(){this.setState({offsetCount:this.state.offsetCount<15?this.state.offsetCount+1:2})}},{key:"offsetCountTimer",value:function(){var e=this;window.setInterval((function(){return e.incrementOffsetCount()}),5e3)}},{key:"render",value:function(){var e=this,t=this.state.offsetCount,a=d()(Array(t).keys());return S(r.a.Fragment,null,S(x,s({updateLetterCount:this.updateLetterCount},this.state)),a.map((function(t,a){return S(x,s({outlined:!0,offset:t,key:a,updateLetterCount:e.updateLetterCount},e.state))})))}}]),t}(r.a.PureComponent),x=function(e){var t,a=e.viewBoxHeight,n=e.viewBoxWidth,o=e.characters,c=e.characterWidth,s=e.characterHorizontalScale,u=e.characterVerticalScale,l=e.characterVerticalTranslation,f=e.updateLetterCount,h=e.offset,m=e.outlined,p=e.addClass;return S(y,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(n," ").concat(a),preserveAspectRatio:"none",className:"".concat("dharma-type"," ").concat("dharma-type","--counter ").concat(h?"".concat("dharma-type","--offset"):""," ").concat(p),style:(t={},Object(i.a)(t,"--".concat("dharma-type","-font-size"),"".concat(a,"px")),Object(i.a)(t,"--".concat("dharma-type","-offset"),"".concat(h||0)),t)},S("g",null,o.map((function(e,t){return d()(Array(e.count).keys()).map((function(n,o){var d,h=e.count>1?e.count:n+1,p=Math.random()<=.5,v=a/h*(o+1)*l,_=u/h;return S("g",{className:"".concat("dharma-type","__character-wrapper"),"data-char-id":t,"data-char-count":n,key:o,onClick:function(){return f(t)},style:{display:m&&e.copies&&p?"none":"inherit"}},S("filter",{id:"displacementFilter__".concat(t,"__").concat(o).concat(m?"__outlined":"")},!m&&S(r.a.Fragment,null,S("feTurbulence",{type:"turbulence",baseFrequency:0,numOctaves:0,result:"turbulence"}),S("feDisplacementMap",{in2:"turbulence",in:"SourceGraphic",scale:0,xChannelSelector:"R",yChannelSelector:"G"})),m&&S(r.a.Fragment,null,S("feFlood",{"flood-color":g.a.Color.varBackground,"flood-opacity":"1",result:"PINK"}),S("feMorphology",{in:"SourceAlpha",result:"DILATED",operator:"dilate",radius:".1"}),S("feComposite",{in:"PINK",in2:"DILATED",operator:"in",result:"OUTLINE"}),S("feMerge",null,S("feMergeNode",{in:"OUTLINE"}),S("feMergeNode",{in:"SourceGraphic"})))),S("text",{className:"".concat("dharma-type","__character"),transform:"translate(".concat(c*t," ").concat(v,") scale(").concat(s,", ").concat(_,")"),style:(d={},Object(i.a)(d,"--".concat("dharma-type","-key"),t),Object(i.a)(d,"filter","url(#displacementFilter__".concat(t,"__").concat(o).concat(m?"__outlined":"",")")),d)},S("tspan",{className:"".concat("dharma-type","__letter")},e.letter)))}))}))))},C=_.c.div.withConfig({displayName:"stylesscss__InteractiveFrameHeaderStyle",componentId:"tg0k5n-0"})(["&.","{--","__frame-edge-size:",";--","__marquee-speed:60s;@media(max-width:","){--","__frame-edge-size:",";}overflow:hidden;position:fixed;left:0;top:0;width:100vw;height:100vh;.","__inner{width:100vw;height:100vh;position:relative;}.",",.","__frame{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;}.","__type{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:calc(100% - (var(--","__frame-edge-size) * 2));height:calc(100% - (var(--","__frame-edge-size) * 2.25));@media(max-width:","){transform:translate(-50%,-50%) rotate(90deg);width:calc(100vh - (var(--","__frame-edge-size) * 2.25));height:calc(100vw - (var(--","__frame-edge-size) * 2.25));}.","{--","-offset-size:10px;@media(max-width:","){--","-offset-size:5px;}top:0;left:0;right:0;bottom:0;width:100%;height:100%;&--offset{top:calc(var(--","-offset-size) * (var(--","-offset) * -1));left:calc(var(--","-offset-size) * (var(--","-offset) * 1));right:calc(var(--","-offset-size) * (var(--","-offset) * -1));bottom:calc(var(--","-offset-size) * (var(--","-offset) * 1));}}.","__character{fill:",";transition:stroke-width .5s ease;}}.","__frame{z-index:500;&__y-axis,&__x-axis{position:absolute;overflow:hidden;left:50%;top:50%;pointer-events:none;}&__y-axis{width:100vw;height:100vh;transform:translate(-50%,-50%);}&__x-axis{width:100vh;height:100vw;transform:translate(-50%,-50%) rotate(90deg);}&__edge{font-size:calc(var(--","__frame-edge-size) * 0.75);text-transform:uppercase;line-height:0;z-index:800;background:",";.","__frame-items{list-style-type:none;color:",";height:var(--","__frame-edge-size);display:block;align-items:center;justify-content:flex-start;li{margin-right:calc(var(--","__frame-edge-size) / 2);}}.","__marquee-container{flex-shrink:0;display:flex;justify-content:flex-start;flex-wrap:nowrap;position:relative;overflow:hidden;.","__frame-items{display:flex;flex-wrap:nowrap;white-space:nowrap;flex-shrink:0;li{width:auto;flex-shrink:0;white-space:nowrap;vertical-align:middle;display:table-cell;}}}&--top,&--bottom,&--left,&--right{position:absolute;overflow:hidden;pointer-events:all;}&--top,&--right{border-bottom:1px solid ",";.","__frame-items{padding-top:calc(var(--","__frame-edge-size) / 6);padding-bottom:calc(var(--","__frame-edge-size) / 6);position:relative;animation:marqueeTopRightQuadrants var(--","__marquee-speed) linear infinite;}}&--bottom,&--left{border-top:1px solid ",";.","__frame-items{padding-top:calc(var(--","__frame-edge-size) / 6);padding-bottom:calc(var(--","__frame-edge-size) / 6);animation:marqueeBottomLeftQuadrants var(--","__marquee-speed) linear infinite;}}&--top,&--bottom{width:calc(100vw - var(--","__frame-edge-size));}&--left,&--right{width:calc(100vh - var(--","__frame-edge-size));}&--top{top:0;left:var(--","__frame-edge-size);}&--bottom{bottom:0;right:var(--","__frame-edge-size);}&--right{top:0;left:var(--","__frame-edge-size);}&--left{bottom:0;left:0;}}}}"],"interactive-frame-header","interactive-frame-header",w.a.FrameSize,"interactive-frame-header",g.a.Base.Media.Width.Md,"interactive-frame-header",w.a.FrameSize,"interactive-frame-header","dharma-type","interactive-frame-header","interactive-frame-header","interactive-frame-header","interactive-frame-header",g.a.Base.Media.Width.Sm,"interactive-frame-header","interactive-frame-header","dharma-type","dharma-type",g.a.Base.Media.Width.Sm,"dharma-type","dharma-type","dharma-type","dharma-type","dharma-type","dharma-type","dharma-type","dharma-type","dharma-type","dharma-type",g.a.Color.varForeground,"interactive-frame-header","interactive-frame-header",g.a.Color.varBackground,"interactive-frame-header",g.a.Color.varForeground,"interactive-frame-header","interactive-frame-header","interactive-frame-header","interactive-frame-header",g.a.Color.varForeground,"interactive-frame-header","interactive-frame-header","interactive-frame-header","interactive-frame-header",g.a.Color.varForeground,"interactive-frame-header","interactive-frame-header","interactive-frame-header","interactive-frame-header","interactive-frame-header","interactive-frame-header","interactive-frame-header","interactive-frame-header","interactive-frame-header"),B=r.a.createElement,M=function(){var e=[{label:"Studio",href:"/"},{label:"Art",href:"/"},{label:"Design",href:"/"},{label:"Strategy",href:"/"},{label:"Interactive",href:"/"},{label:"Murals",href:"/"},{label:"Code",href:"/"},{label:"Products",href:"/"},{label:"Music",href:"/"},{label:"Tattoo",href:"/"},{label:"eCommerce",href:"/"},{label:"Advice",href:"/"},{label:"Fonts",href:"/"}];return B("div",{className:"".concat("interactive-frame-header","__marquee-container")},B("ul",{className:"".concat("interactive-frame-header","__frame-items")},e.map((function(e,t){return B("li",{key:t},e.label)}))),B("ul",{className:"".concat("interactive-frame-header","__frame-items")},e.map((function(e,t){return B("li",{key:t},e.label)}))))},O=function(e){var t=e.includeType;return B(C,{className:"".concat("interactive-frame-header")},B("div",{className:"".concat("interactive-frame-header","__inner")},B("div",{className:"".concat("interactive-frame-header","__frame")},B("div",{className:"".concat("interactive-frame-header","__frame__y-axis")},B("div",{className:"".concat("interactive-frame-header","__frame__edge ").concat("interactive-frame-header","__frame__edge--top")},B(M,null)),B("div",{className:"".concat("interactive-frame-header","__frame__edge ").concat("interactive-frame-header","__frame__edge--bottom")},B(M,null))),B("div",{className:"".concat("interactive-frame-header","__frame__x-axis")},B("div",{className:"".concat("interactive-frame-header","__frame__edge ").concat("interactive-frame-header","__frame__edge--left")},B(M,null)),B("div",{className:"".concat("interactive-frame-header","__frame__edge ").concat("interactive-frame-header","__frame__edge--right")},B(M,null)))),t?B("div",{className:"".concat("interactive-frame-header","__type")},B(z,{text:"LAXALT"})):null))};a.d(t,"a",(function(){return O}))},QywH:function(e,t,a){"use strict";a.r(t);var n=a("hfKm"),r=a.n(n),i=a("2Eek"),o=a.n(i),c=a("XoMD"),s=a.n(c),u=a("Jo+v"),d=a.n(u),l=a("4mXO"),f=a.n(l),h=a("pLtp"),m=a.n(h),p=a("d04V"),v=a.n(p),g=a("vYYK"),_=a("agJb");function w(e,t){var a=m()(e);if(f.a){var n=f()(e);t&&(n=n.filter((function(t){return d()(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(Object(a),!0).forEach((function(t){Object(g.a)(e,t,a[t])})):s.a?o()(e,s()(a)):w(Object(a)).forEach((function(t){r()(e,t,d()(a,t))}))}return e}t.default=function(e,t,a,n){return function(a){var r,i="LAXALT".split(""),o=i.map((function(e,t){return{letter:e,count:1,idx:t,copies:5,isIncrementing:!0,isDecrementing:!1}})),c=i.length,s=e/c,u=1.25*t;console.log(u,"characterSize");var d=0;a.preload=function(){r=a.loadFont("/fonts/dharma/dharma_regular.ttf")},a.setup=function(){a.createCanvas(e,t)};a.draw=function(){a.background(n),a.textFont(r),a.textSize(u),a.textAlign(a.CENTER,a.CENTER),a.fill("".concat(_.a.Color.Galaxy)),a.strokeWeight(4),a.stroke(n),t&&e&&o.map((function(e,n){a.scale(1,1),Math.random()<=.5&&a.millis()-d>3e3&&function(e,t){e.count<6&&e.isIncrementing?(o[t]=b({},e,{count:e.count+1}),d=a.millis()):6===e.count?(o[t]=b({},e,{count:e.count-1,isIncrementing:!1,isDecrementing:!0}),d=a.millis()):e.count>1&&e.isDecrementing?(o[t]=b({},e,{count:e.count-1,isDecrementing:!0}),d=a.millis()):1===e.count&&e.isDecrementing&&(o[t]=b({},e,{count:e.count+1,isIncrementing:!0,isDecrementing:!1}),d=a.millis())}(e,n);var r=v()(Array(e.count).keys());(r=r.map((function(e){return e+1}))).map((function(r,i){var o=1/(.95*e.count),c=1==e.count?t/2.25:u/2.75+u/1.36*i,d=v()(Array(e.copies).keys());(d=d.map((function(e){return e+1}))).map((function(t,r){a.push(),a.scale(1,o),a.text(e.letter,function(e){return s*e+s/1.5+6-60}(n)+6*t,c-6*t),a.pop()}))}))}))},a.windowResized=function(){a.resizeCanvas(e,t)}}}},UXZV:function(e,t,a){e.exports=a("UbbE")},UbbE:function(e,t,a){a("o8NH"),e.exports=a("WEpk").Object.assign},Uh2J:function(e,t,a){"use strict";a.r(t),t.default=function(e,t){return function(a){var n=0,r=50,i=0,o="rgba(208, 112, 166, .3)";a.setup=function(){a.createCanvas(e,t),a.angleMode(a.RADIANS),a.background("yellow")},a.draw=function(){r+=1,i=400,n=1.1*n+2,a.noFill(),a.stroke(o),a.mouseX>0||a.mouseY>0?(a.ellipse(a.mouseX,a.mouseY,Math.sin(r)*(Math.sin(r)*i),Math.sin(r)*(Math.sin(r)*i)),a.smooth()):(a.ellipse(a.windowWidth/2,a.windowHeight/2,Math.sin(r)*(Math.sin(r)*i),Math.sin(r)*(Math.sin(r)*i)),a.smooth())},a.windowResized=function(){a.resizeCanvas(e,t),a.background("yellow")}}}},XWtR:function(e,t,a){var n=a("5T2Y").parseInt,r=a("oc46").trim,i=a("5pKv"),o=/^[-+]?0[xX]/;e.exports=8!==n(i+"08")||22!==n(i+"0x16")?function(e,t){var a=r(String(e),3);return n(a,t>>>0||(o.test(a)?16:10))}:n},XoMD:function(e,t,a){e.exports=a("hYAz")},a6RD:function(e,t,a){"use strict";var n=a("pLtp"),r=a("Qetd"),i=a("eVuF"),o=a("hfKm"),c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};o(t,"__esModule",{value:!0});var s=c(a("q1tI")),u=c(a("2qu3")),d=!1;function l(e,t){if(delete t.webpack,delete t.modules,!d)return e(t);var a=t.loading;return function(){return s.default.createElement(a,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}}t.noSSR=l,t.default=function(e,t){var a=u.default,o={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};if(e instanceof i?o.loader=function(){return e}:"function"===typeof e?o.loader=e:"object"===typeof e&&(o=r({},o,e)),o=r({},o,t),"object"===typeof e&&!(e instanceof i)&&(e.render&&(o.render=function(t,a){return e.render(a,t)}),e.modules)){a=u.default.Map;var c={},s=e.modules();n(s).forEach((function(e){var t=s[e];"function"!==typeof t.then?c[e]=t:c[e]=function(){return t.then((function(e){return e.default||e}))}})),o.loader=c}if(o.loadableGenerated&&delete(o=r({},o,o.loadableGenerated)).loadableGenerated,"boolean"===typeof o.ssr){if(!o.ssr)return delete o.ssr,l(a,o);delete o.ssr}return a(o)}},b0x5:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/dharma",function(){return a("nw9M")}])},bUOA:function(e,t,a){"use strict";a.r(t);var n=a("6BQ9"),r=a.n(n);t.default=function(e,t){return function(a){var n=0,i="black",o="black",c="cyan";a.setup=function(){a.createCanvas(e,t,a.WEBGL),a.angleMode(a.RADIANS)},a.draw=function(){1,n=1.1*n+2,a.noFill(),a.stroke(i),a.background(c);for(var e=0;e<20;e++)a.cone(300,400),a.stroke(o),a.strokeWeight(1),a.translate(r()(50*Math.sin(.001*a.mouseX)),r()(50*Math.sin(.001*a.mouseY)),r()(50*Math.sin(.001*a.mouseX))),a.smooth(),a.rotateX(.01*a.frameCount),a.rotateY(.01*a.frameCount)},a.windowResized=function(){a.resizeCanvas(e,t),a.background("yellow")}}}},dEVD:function(e,t,a){var n=a("Y7ZC"),r=a("XWtR");n(n.G+n.F*(parseInt!=r),{parseInt:r})},gOdJ:function(e,t){var a,n,r,i,o,c,s,u,d;function l(){i=a.width=window.innerWidth,o=a.height=window.innerHeight,noise.seed(Math.random()),s=Math.floor(i/c)+1,u=Math.floor(o/c)+1,function(){r=new Array(s);for(var e=0;e<s;e++){r[e]=new Array(s);for(var t=0;t<u;t++)r[e][t]=[0,0]}}()}c=20,d=0,a=document.querySelector("#canvas"),n=a.getContext("2d"),l(),window.addEventListener("resize",l),function e(){requestAnimationFrame(e),function(){for(var e=0;e<s;e++)for(var t=0;t<u;t++){var a=noise.simplex3(e/80,t/80,d)*Math.PI*2,n=noise.simplex3(e/100+4e4,t/100+4e4,d);r[e][t][0]=a,r[e][t][1]=n}}(),d+=.004,n.fillStyle="black",n.fillRect(0,0,i,o),function(){for(var e=0;e<s;e++)for(var t=0;t<u;t++){var a=r[e][t][0],i=r[e][t][1];n.save(),n.translate(e*c,t*c),n.rotate(a),n.strokeStyle="white",n.beginPath(),n.moveTo(0,0),n.lineTo(0,c*i),n.stroke(),n.restore()}}()}()},hYAz:function(e,t,a){a("7m0m"),e.exports=a("WEpk").Object.getOwnPropertyDescriptors},iRSi:function(e,t,a){"use strict";a.r(t);t.default=function(e,t,a,n){return function(n){var r;n.preload=function(){r=n.loadShader("/shaders/ex_".concat(a,"/shader.vert"),"/shaders/ex_".concat(a,"/shader.frag"))},n.setup=function(){n.createCanvas(e,t,n.WEBGL),n.noStroke()},n.draw=function(){n.shader(r),r.setUniform("u_resolution",[e,t]),r.setUniform("u_time",n.millis()/1e3),r.setUniform("u_mouse",[n.mouseX,n.map(n.mouseY,0,t,t,0)]),n.rect(0,0,e,t)},n.windowResized=function(){n.resizeCanvas(e,t)}}}},"io+v":function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return s}));var n=a("rt45"),r=a("vOnD"),i=a("agJb");function o(){var e=Object(n.a)(["\n  :root {\n    /* ----------------------------------- Large Width Viewports */\n\n    /* --------------- Palette*/\n    --BgColor: ","\n    --TextColor: ","\n    --MbmColor: ","\n\n    /* --------------- Base Measurements*/\n\n    /* -------- Base Measurement */\n    --Size: ",";\n\n    /* -------- Font Sizes (Viewport) */\n    --ViewWidthFontSize: ",";\n    --ViewHeightFontSize: ",";\n    --IconSize: ",";\n\n    /* -------- Root Element Measurement */\n    --REM: ",";\n\n    /* -------- View Width (vw) Based Measurements */\n    --ViewWidthPadding: ",";\n\n    /* --------- Site Grid */\n    --SiteWidth: ",";\n    --NavSize: ",";\n    --FooterSize: ",";\n\n    /* --- Gutters */\n    --GutterTop: ",";\n    --GutterRight: ",";\n    --GutterBottom: ",";\n    --GutterLeft: ",";\n\n    /* --------- Buttons */\n    --ButtonSize: ",";\n\n    /* --------- Inputs */\n    --InputSize: ",";\n\n    /* --------- Geometry */\n    --Radius: ",";\n\n    /* --------- Frame */\n    --FrameSize: ",";\n\n    /* ----------------------------------- Medium Width Viewports */\n    @media (max-width: ",") {\n      /* --------------- Base Measurements*/\n\n        /* --------- Frame */\n        --FrameSize: 2rem;\n\n        /* -------- Base Measurement */\n        --Size: ",";\n\n        /* -------- Font Sizes (Viewport) */\n        --ViewWidthFontSize: ",";\n        --ViewHeightFontSize: ",";\n        --IconSize: ",";\n\n        /* -------- Root Element Measurement */\n        --REM: ",";\n\n        /* -------- View Width (vw) Based Measurements */\n        --ViewWidthPadding: ",";\n\n        /* --------- Site Grid */\n        --SiteWidth: ",";\n        --NavSize: ",";\n        --FooterSize: ",";\n\n        /* --- Gutters */\n        --GutterTop: ",";\n        --GutterRight: ",";\n        --GutterBottom: ",";\n        --GutterLeft: ",";\n\n        /* --------- Buttons */\n        --ButtonSize: ",";\n\n        /* --------- Inputs */\n        --InputSize: ",";\n\n        /* --------- Geometry */\n        --Radius: ",";\n    }\n\n    /* ----------------------------------- Small Width Viewports */\n    @media (max-width: ",") {\n      /* --------------- Base Measurements*/\n\n        /* -------- Base Measurement */\n        --Size: ",";\n\n        /* -------- Font Sizes (Viewport) */\n        --ViewWidthFontSize: ",";\n        --ViewHeightFontSize: ",";\n        --IconSize: ",";\n\n        /* -------- Root Element Measurement */\n        --Rem: ",";\n\n        /* -------- View Width (vw) Based Measurements */\n        --ViewWidthPadding: ",";\n\n        /* --------- Site Grid */\n        --SiteWidth: ",";\n        --NavSize: ",";\n        --FooterSize: ",";\n\n        /* --- Gutters */\n        --GutterTop: ",";\n        --GutterRight: ",";\n        --GutterBottom: ",";\n        --GutterLeft: ",";\n\n        /* --------- Buttons */\n        --ButtonSize: ",";\n\n        /* --------- Inputs */\n        --InputSize: ",";\n\n        /* --------- Geometry */\n        --Radius: ",";\n    }\n  }\n"]);return o=function(){return e},e}var c={Color:{Bg:"var(--BgColor)",Text:"var(--TextColor)",Mbm:"var(--MbmColor)"},Size:"var(--Size)",ViewWidthFontSize:"var(--ViewWidthFontSize)",ViewHeightFontSize:"var(--ViewHeightFontSize)",IconSize:"var(--IconSize)",Rem:"var(--REM)",ViewWidthPadding:"var(--ViewWidthPadding)",Site:{Width:"var(--SiteWidth)"},Nav:{Size:"var(--NavSize)"},Footer:{Size:"var(--FooterSize)"},Grid:{Gutter:{Top:"var(--GutterTop)",Right:"var(--GutterRight)",Bottom:"var(--GutterBottom)",Left:"var(--GutterLeft)"},Indent:{X:"var(--IndentX)",Y:"var(--IndentY)"}},Button:{Size:"var(--ButtonSize)"},Input:"var(--InputSize)",Radius:"var(--Radius)",FrameSize:"var(--FrameSize)"},s=Object(r.a)(o(),i.a.Color.Background,i.a.Color.Primary,i.a.Color.White,i.a.Base.Size.Lg,i.a.Font.Size.ViewWidth.Lg,i.a.Font.Size.ViewHeight.Lg,i.a.Font.Icon.Size.Lg,i.a.Base.Rem.Lg,i.a.Base.ViewWidth.Padding.Lg,i.a.Base.Grid.SiteWidth,i.a.Base.Grid.Nav.Size.Lg,i.a.Base.Grid.Footer.Size.Lg,i.a.Base.Grid.Gutter.Lg.Top,i.a.Base.Grid.Gutter.Lg.Right,i.a.Base.Grid.Gutter.Lg.Bottom,i.a.Base.Grid.Gutter.Lg.Left,i.a.Base.Button.Lg,i.a.Base.Input.Lg,i.a.Base.Geometry.Radius,i.a.FrameSize,i.a.Base.Media.Width.Md,i.a.Base.Size.Md,i.a.Font.Size.ViewWidth.Md,i.a.Font.Size.ViewHeight.Md,i.a.Font.Icon.Size.Md,i.a.Base.Rem.Md,i.a.Base.ViewWidth.Padding.Md,i.a.Base.Grid.SiteWidth,i.a.Base.Grid.Nav.Size.Md,i.a.Base.Grid.Footer.Size.Md,i.a.Base.Grid.Gutter.Md.Top,i.a.Base.Grid.Gutter.Md.Right,i.a.Base.Grid.Gutter.Md.Bottom,i.a.Base.Grid.Gutter.Md.Left,i.a.Base.Button.Md,i.a.Base.Input.Md,i.a.Base.Geometry.Radius,i.a.Base.Media.Width.Sm,i.a.Base.Size.Sm,i.a.Font.Size.ViewWidth.Sm,i.a.Font.Size.ViewHeight.Sm,i.a.Font.Icon.Size.Sm,i.a.Base.Rem.Sm,i.a.Base.ViewWidth.Padding.Sm,i.a.Base.Grid.SiteWidth,i.a.Base.Grid.Nav.Size.Sm,i.a.Base.Grid.Footer.Size.Sm,i.a.Base.Grid.Gutter.Sm.Top,i.a.Base.Grid.Gutter.Sm.Right,i.a.Base.Grid.Gutter.Sm.Bottom,i.a.Base.Grid.Gutter.Sm.Left,i.a.Base.Button.Sm,i.a.Base.Input.Sm,i.a.Base.Geometry.Radius)},jwwS:function(e,t,a){"use strict";var n=a("hfKm"),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t};n(t,"__esModule",{value:!0});var i=r(a("q1tI"));t.LoadableContext=i.createContext(null)},kwZ1:function(e,t,a){"use strict";var n=a("jmDH"),r=a("w6GO"),i=a("mqlF"),o=a("NV0k"),c=a("JB68"),s=a("M1xp"),u=Object.assign;e.exports=!u||a("KUxP")((function(){var e={},t={},a=Symbol(),n="abcdefghijklmnopqrst";return e[a]=7,n.split("").forEach((function(e){t[e]=e})),7!=u({},e)[a]||Object.keys(u({},t)).join("")!=n}))?function(e,t){for(var a=c(e),u=arguments.length,d=1,l=i.f,f=o.f;u>d;)for(var h,m=s(arguments[d++]),p=l?r(m).concat(l(m)):r(m),v=p.length,g=0;v>g;)h=p[g++],n&&!f.call(m,h)||(a[h]=m[h]);return a}:u},nw9M:function(e,t,a){"use strict";a.r(t);var n=a("rt45"),r=a("0iUn"),i=a("sLSF"),o=a("MI3g"),c=a("a7VT"),s=a("AT/M"),u=a("Tit0"),d=a("vYYK"),l=a("q1tI"),f=a.n(l),h=a("a6RD"),m=a.n(h),p=a("agJb"),v=a("vOnD"),g=a("O5GZ"),_=f.a.createElement;function w(){var e=Object(n.a)(["\n      body, html {\n        overflow: hidden;\n      }\n    "]);return w=function(){return e},e}var b=m()((function(){return a.e(2).then(a.t.bind(null,"58Bg",7))}),{loading:function(){return _("p",null,"Loading...")},ssr:!1,loadableGenerated:{webpack:function(){return["58Bg"]},modules:["react-p5-wrapper"]}}),y=function(e){function t(e){var n;return Object(r.a)(this,t),n=Object(o.a)(this,Object(c.a)(t).call(this,e)),Object(d.a)(Object(s.a)(n),"renderP5",(function(e){var t=a("49Hi")("./".concat(e)).default(n.state.windowWidth,n.state.windowHeight,1,n.state.backgroundColor);return _(b,{sketch:t})})),n.state={domLoaded:!1,windowWidth:0,windowHeight:0,backgroundColor:p.a.Color.Background},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState({windowWidth:window.innerWidth-80,windowHeight:window.innerHeight-80,domLoaded:!0})}},{key:"render",value:function(){var e=Object(v.a)(w());return _(f.a.Fragment,null,_(e,null),_(g.a,null),this.state.domLoaded&&this.state.windowHeight>10&&this.state.windowWidth>10?_("div",{className:"dharma-container",style:{width:"100vw",height:"100vh",overflow:"hidden",display:"flex",justifyContent:"center",alignItems:"center"}},this.renderP5("dharma")):null)}}]),t}(l.Component);t.default=y},o8NH:function(e,t,a){var n=a("Y7ZC");n(n.S+n.F,"Object",{assign:a("kwZ1")})},oc46:function(e,t,a){var n=a("Y7ZC"),r=a("Jes0"),i=a("KUxP"),o=a("5pKv"),c="["+o+"]",s=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),d=function(e,t,a){var r={},c=i((function(){return!!o[e]()||"\u200b\x85"!="\u200b\x85"[e]()})),s=r[e]=c?t(l):o[e];a&&(r[a]=s),n(n.P+n.F*c,"String",r)},l=d.trim=function(e,t){return e=String(r(e)),1&t&&(e=e.replace(s,"")),2&t&&(e=e.replace(u,"")),e};e.exports=d},uekQ:function(e,t,a){a("dEVD"),e.exports=a("WEpk").parseInt},uplh:function(e,t,a){var n=a("ar/p"),r=a("mqlF"),i=a("5K7Z"),o=a("5T2Y").Reflect;e.exports=o&&o.ownKeys||function(e){var t=n.f(i(e)),a=r.f;return a?t.concat(a(e)):t}}},[["b0x5",0,1]]]);