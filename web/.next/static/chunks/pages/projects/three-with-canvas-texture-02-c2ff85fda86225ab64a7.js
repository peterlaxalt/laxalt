_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[32],{"19DN":function(n,e,t){"use strict";t.r(e);var r=t("rePB");function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){Object(r.a)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}e.default=function(n,e,t,r){return function(t){var o,c="LAXALT".split(""),a=c.map((function(n,e){return{letter:n,count:1,idx:e,copies:5,copiesLastVisible:0,copiesAreVisible:!1,countIsIncrementing:!0,countIsDecrementing:!1,copiesAreIncrementing:!0,copiesAreDecrementing:!1}})),s=c.length,u=n/s,l=1.25*e;console.log(l,"characterSize");var d=0;t.preload=function(){o=t.loadFont("/fonts/dharma/dharma_regular.ttf")},t.setup=function(){t.createCanvas(n,e),t.frameRate(10)};t.draw=function(){t.background(r.background),t.textFont(o),t.textSize(l),t.textAlign(t.CENTER,t.CENTER),t.fill("".concat(r.foreground)),t.strokeWeight(4),t.stroke(r.background),e&&n&&a.map((function(n,r){t.scale(1,1);var o=Math.random()<=.5;o&&function(n,e){n.copies<12&&n.copiesAreIncrementing?(a[e]=i(i({},n),{},{copies:n.copies+1}),t.millis()):12===n.copies?(a[e]=i(i({},n),{},{copies:n.copies-1,copiesAreIncrementing:!1,copiesAreDecrementing:!0}),t.millis()):n.copies>1&&n.copiesAreDecrementing?(a[e]=i(i({},n),{},{copies:n.copies-1,copiesAreDecrementing:!0}),t.millis()):1===n.copies&&n.copiesAreDecrementing&&(a[e]=i(i({},n),{},{copies:n.copies+1,copiesAreIncrementing:!0,copiesAreDecrementing:!1}),t.millis())}(n,r),o&&t.millis()-d>3e3&&function(n,e){n.count<3&&n.countIsIncrementing?(a[e]=i(i({},n),{},{count:n.count+1}),d=t.millis()):3===n.count?(a[e]=i(i({},n),{},{count:n.count-1,countIsIncrementing:!1,countIsDecrementing:!0}),d=t.millis()):n.count>1&&n.countIsDecrementing?(a[e]=i(i({},n),{},{count:n.count-1,countIsDecrementing:!0}),d=t.millis()):1===n.count&&n.countIsDecrementing&&(a[e]=i(i({},n),{},{count:n.count+1,countIsIncrementing:!0,countIsDecrementing:!1}),d=t.millis())}(n,r);var c=Array.from(Array(n.count).keys());(c=c.map((function(n){return n+1}))).map((function(o,i){var c=1/(.95*n.count),a=1==n.count?e/2.25:l/2.75+l/1.36*i,s=Array.from(Array(n.copies).keys());(s=s.map((function(n){return n+1}))).map((function(e,o){var i=function(n){return u*n+u/1.5+6-60}(r)+6*e,s=a-6*e;t.push(),t.scale(1,c),t.text(n.letter,i,s),t.pop()}))}))}))},t.windowResized=function(){t.resizeCanvas(n,e)}}}},"49Hi":function(n,e,t){var r={"./_scaffold-p5-canvas":"19DN","./_scaffold-p5-canvas.tsx":"19DN","./d1":"Uh2J","./d1.tsx":"Uh2J","./d2":"bUOA","./d2.tsx":"bUOA","./d8":"gOdJ","./d8.js":"gOdJ","./dharma":"QywH","./dharma-as-canvas":"S+6N","./dharma-as-canvas.tsx":"S+6N","./dharma-water-distort.canvas":"1KAc","./dharma-water-distort.canvas.tsx":"1KAc","./dharma.tsx":"QywH","./dharma_v0":"Hjf3","./dharma_v0.tsx":"Hjf3","./footer-canvas":"jOaG","./footer-canvas.tsx":"jOaG","./glsl":"iRSi","./glsl.tsx":"iRSi"};function o(n){var e=i(n);return t(e)}function i(n){if(!t.o(r,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return r[n]}o.keys=function(){return Object.keys(r)},o.resolve=i,n.exports=o,o.id="49Hi"},eSrF:function(n,e,t){"use strict";t.r(e),t.d(e,"ThreeCanvasPage",(function(){return k}));var r=t("h4VS"),o=t("1OyB"),i=t("vuIU"),c=t("JX7q"),a=t("Ji7U"),s=t("md7G"),u=t("foSv"),l=t("rePB"),d=t("nKUr"),f=t("q1tI"),m=t.n(f),p=t("vOnD"),h=t("YMx+"),v=t("AeVD"),g=t("/YLk"),w=t("a6RD"),b=t.n(w),O=t("Q9BO");function j(){var n=Object(r.a)(["\n      /* body, html {\n        overflow: hidden;\n      } */\n\n      .three-container {\n        width: 100vw;\n        height: 100vh;\n        overflow: hidden;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n\n        #p5_loading {\n          display: none !important;\n        }\n      }\n\n      #drawing-canvas {\n\t\t\t\tposition: absolute;\n\t\t\t\tbackground-color: #000000;\n\t\t\t\ttop: 0px;\n\t\t\t\tright: 0px;\n\t\t\t\tz-index: 3000;\n\t\t\t\tcursor: crosshair;\n\t\t\t\ttouch-action: none;\n\n        display: none;\n\t\t\t}\n\n      canvas {\n        animation: "," 1s ease 1;\n        animation-fill-mode: forwards;\n        animation-iteration-count: 1;\n      }\n\n      .canvas-container {\n        #defaultCanvas0 {\n          display: none;\n        }\n      }\n\n      .dharma-container {\n        opacity: 1;\n      }\n    "]);return j=function(){return n},n}function x(n){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,r=Object(u.a)(n);if(e){var o=Object(u.a)(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return Object(s.a)(this,t)}}var y=b()((function(){return Promise.all([t.e(9),t.e(10)]).then(t.t.bind(null,"58Bg",7))}),{loading:function(){return Object(d.jsx)(d.Fragment,{})},ssr:!1,loadableGenerated:{webpack:function(){return["58Bg"]},modules:["react-p5-wrapper"]}}),D=function(n){Object(a.a)(r,n);var e=x(r);function r(n){var i;return Object(o.a)(this,r),i=e.call(this,n),Object(l.a)(Object(c.a)(i),"canvasParentRef",void 0),Object(l.a)(Object(c.a)(i),"renderP5",(function(n){O.c&&console.log("\ud83d\udd53 Initializing p5 file ../../sketches/p5/".concat(n)),O.c&&console.log("\ud83d\udc68\u200d\ud83d\udc66 Parent container ref: ",i.canvasParentRef);var e=t("49Hi")("./".concat(n)).default(i.state.windowWidth,i.state.windowHeight,1,i.props.colorThemeContext,i.canvasParentRef);return Object(d.jsx)(y,{sketch:e})})),i.state={domLoaded:!1,windowWidth:0,windowHeight:0,canvasElement:void 0,canvasTheme:void 0},i}return Object(i.a)(r,[{key:"componentDidMount",value:function(){this.setState({windowWidth:window.innerWidth-80,windowHeight:window.innerHeight-80,domLoaded:!0,canvasElement:void 0,canvasTheme:this.props.colorThemeContext})}},{key:"render",value:function(){var n=this,e=Object(p.a)(j(),h.a);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(e,{}),Object(d.jsx)(v.a,{}),Object(d.jsx)("div",{ref:function(e){return n.canvasParentRef=e},className:"canvas-container",children:this.renderP5("dharma-as-canvas")})]})}}]),r}(f.Component),k=function(){var n=m.a.useContext(g.b);return Object(d.jsx)(D,{colorThemeContext:n})};e.default=k},ghsU:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/three-with-canvas-texture-02",function(){return t("eSrF")}])},iRSi:function(n,e,t){"use strict";t.r(e);e.default=function(n,e,t,r){return function(r){var o;r.preload=function(){o=r.loadShader("/shaders/ex_".concat(t,"/shader.vert"),"/shaders/ex_".concat(t,"/shader.frag"))},r.setup=function(){r.createCanvas(n,e,r.WEBGL),r.noStroke()},r.draw=function(){r.shader(o),o.setUniform("u_resolution",[n,e]),o.setUniform("u_time",r.millis()/1e3),o.setUniform("u_mouse",[r.mouseX,r.map(r.mouseY,0,e,e,0)]),r.rect(0,0,n,e)},r.windowResized=function(){r.resizeCanvas(n,e)}}}},jOaG:function(n,e,t){"use strict";t.r(e);e.default=function(n,e,t,r){return function(t){t.setup=function(){t.createCanvas(n,e)},t.draw=function(){t.mouseIsPressed?(t.fill(window.laxaltUniversalTheme.foreground),t.stroke(window.laxaltUniversalTheme.background),t.strokeWeight(1.5),t.ellipse(t.mouseX,t.mouseY,n/6,n/6)):(t.fill(window.laxaltUniversalTheme.background),t.stroke(window.laxaltUniversalTheme.foreground),t.strokeWeight(1.5),t.ellipse(t.mouseX,t.mouseY,n/6,n/6))},t.windowResized=function(){t.resizeCanvas(n,e)}}}}},[["ghsU",0,1,2,7,3,5,4,8,6,11,12,14]]]);