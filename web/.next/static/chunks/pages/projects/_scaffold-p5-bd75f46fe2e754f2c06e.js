_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[24],{"19DN":function(n,e,t){"use strict";t.r(e);var r=t("rePB");function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){Object(r.a)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}e.default=function(n,e,t,r){return function(t){var o,c="LAXALT".split(""),a=c.map((function(n,e){return{letter:n,count:1,idx:e,copies:5,copiesLastVisible:0,copiesAreVisible:!1,countIsIncrementing:!0,countIsDecrementing:!1,copiesAreIncrementing:!0,copiesAreDecrementing:!1}})),s=c.length,u=n/s,d=1.25*e;console.log(d,"characterSize");var l=0;t.preload=function(){o=t.loadFont("/fonts/dharma/dharma_regular.ttf")},t.setup=function(){t.createCanvas(n,e),t.frameRate(10)};t.draw=function(){t.background(r.background),t.textFont(o),t.textSize(d),t.textAlign(t.CENTER,t.CENTER),t.fill("".concat(r.foreground)),t.strokeWeight(4),t.stroke(r.background),e&&n&&a.map((function(n,r){t.scale(1,1);var o=Math.random()<=.5;o&&function(n,e){n.copies<12&&n.copiesAreIncrementing?(a[e]=i(i({},n),{},{copies:n.copies+1}),t.millis()):12===n.copies?(a[e]=i(i({},n),{},{copies:n.copies-1,copiesAreIncrementing:!1,copiesAreDecrementing:!0}),t.millis()):n.copies>1&&n.copiesAreDecrementing?(a[e]=i(i({},n),{},{copies:n.copies-1,copiesAreDecrementing:!0}),t.millis()):1===n.copies&&n.copiesAreDecrementing&&(a[e]=i(i({},n),{},{copies:n.copies+1,copiesAreIncrementing:!0,copiesAreDecrementing:!1}),t.millis())}(n,r),o&&t.millis()-l>3e3&&function(n,e){n.count<3&&n.countIsIncrementing?(a[e]=i(i({},n),{},{count:n.count+1}),l=t.millis()):3===n.count?(a[e]=i(i({},n),{},{count:n.count-1,countIsIncrementing:!1,countIsDecrementing:!0}),l=t.millis()):n.count>1&&n.countIsDecrementing?(a[e]=i(i({},n),{},{count:n.count-1,countIsDecrementing:!0}),l=t.millis()):1===n.count&&n.countIsDecrementing&&(a[e]=i(i({},n),{},{count:n.count+1,countIsIncrementing:!0,countIsDecrementing:!1}),l=t.millis())}(n,r);var c=Array.from(Array(n.count).keys());(c=c.map((function(n){return n+1}))).map((function(o,i){var c=1/(.95*n.count),a=1==n.count?e/2.25:d/2.75+d/1.36*i,s=Array.from(Array(n.copies).keys());(s=s.map((function(n){return n+1}))).map((function(e,o){var i=function(n){return u*n+u/1.5+6-60}(r)+6*e,s=a-6*e;t.push(),t.scale(1,c),t.text(n.letter,i,s),t.pop()}))}))}))},t.windowResized=function(){t.resizeCanvas(n,e)}}}},"49Hi":function(n,e,t){var r={"./_scaffold-p5-canvas":"19DN","./_scaffold-p5-canvas.tsx":"19DN","./d1":"Uh2J","./d1.tsx":"Uh2J","./d2":"bUOA","./d2.tsx":"bUOA","./d8":"gOdJ","./d8.js":"gOdJ","./dharma":"QywH","./dharma-as-canvas":"S+6N","./dharma-as-canvas.tsx":"S+6N","./dharma-water-distort.canvas":"1KAc","./dharma-water-distort.canvas.tsx":"1KAc","./dharma.tsx":"QywH","./dharma_v0":"Hjf3","./dharma_v0.tsx":"Hjf3","./glsl":"iRSi","./glsl.tsx":"iRSi"};function o(n){var e=i(n);return t(e)}function i(n){if(!t.o(r,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return r[n]}o.keys=function(){return Object.keys(r)},o.resolve=i,n.exports=o,o.id="49Hi"},DrrF:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/_scaffold-p5",function(){return t("Urii")}])},Urii:function(n,e,t){"use strict";t.r(e),t.d(e,"DharmaCanvasPage",(function(){return _}));var r=t("h4VS"),o=t("1OyB"),i=t("vuIU"),c=t("JX7q"),a=t("Ji7U"),s=t("md7G"),u=t("foSv"),d=t("rePB"),l=t("q1tI"),f=t.n(l),m=t("a6RD"),p=t.n(m),h=t("vOnD"),g=t("O5GZ"),w=t("/YLk"),v=t("YMx+"),b=f.a.createElement;function O(){var n=Object(r.a)(["\n      body, html {\n        overflow: hidden;\n      }\n\n      .dharma-container {\n        width: 100vw;\n        height: 100vh;\n        overflow: hidden;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n\n        canvas {\n          animation: "," 1s ease 1;\n          animation-fill-mode: forwards;\n          animation-iteration-count: 1;\n        }\n\n        #p5_loading {\n          display: none !important;\n        }\n      }\n    "]);return O=function(){return n},n}function y(n){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,r=Object(u.a)(n);if(e){var o=Object(u.a)(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return Object(s.a)(this,t)}}var D=p()((function(){return Promise.all([t.e(7),t.e(8)]).then(t.t.bind(null,"58Bg",7))}),{loading:function(){return b(f.a.Fragment,null)},ssr:!1,loadableGenerated:{webpack:function(){return["58Bg"]},modules:["react-p5-wrapper"]}}),j=function(n){Object(a.a)(r,n);var e=y(r);function r(n){var i;return Object(o.a)(this,r),i=e.call(this,n),Object(d.a)(Object(c.a)(i),"renderP5",(function(n){var e=t("49Hi")("./".concat(n)).default(i.state.windowWidth,i.state.windowHeight,1,i.props.colorThemeContext);return b(D,{sketch:e})})),i.state={domLoaded:!1,windowWidth:0,windowHeight:0},i}return Object(i.a)(r,[{key:"componentDidMount",value:function(){this.setState({windowWidth:window.innerWidth-80,windowHeight:window.innerHeight-80,domLoaded:!0})}},{key:"render",value:function(){var n=Object(h.a)(O(),v.a);return b(f.a.Fragment,null,b(n,null),b(g.a,null),this.state.domLoaded&&this.state.windowHeight>10&&this.state.windowWidth>10?b("div",{className:"dharma-container"},this.renderP5("dharma")):null)}}]),r}(l.Component),_=function(){var n=f.a.useContext(w.b);return b(j,{colorThemeContext:n})};e.default=_},iRSi:function(n,e,t){"use strict";t.r(e);e.default=function(n,e,t,r){return function(r){var o;r.preload=function(){o=r.loadShader("/shaders/ex_".concat(t,"/shader.vert"),"/shaders/ex_".concat(t,"/shader.frag"))},r.setup=function(){r.createCanvas(n,e,r.WEBGL),r.noStroke()},r.draw=function(){r.shader(o),o.setUniform("u_resolution",[n,e]),o.setUniform("u_time",r.millis()/1e3),o.setUniform("u_mouse",[r.mouseX,r.map(r.mouseY,0,e,e,0)]),r.rect(0,0,n,e)},r.windowResized=function(){r.resizeCanvas(n,e)}}}}},[["DrrF",0,1,3,6,2,4,5,10]]]);