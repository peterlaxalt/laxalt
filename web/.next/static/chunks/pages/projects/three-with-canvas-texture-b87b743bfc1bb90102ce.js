_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[31],{"19DN":function(e,t,n){"use strict";n.r(t);var r=n("rePB");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e,t,n,r){return function(n){var o,a="LAXALT".split(""),c=a.map((function(e,t){return{letter:e,count:1,idx:t,copies:5,copiesLastVisible:0,copiesAreVisible:!1,countIsIncrementing:!0,countIsDecrementing:!1,copiesAreIncrementing:!0,copiesAreDecrementing:!1}})),s=a.length,u=e/s,l=1.25*t;console.log(l,"characterSize");var d=0;n.preload=function(){o=n.loadFont("/fonts/dharma/dharma_regular.ttf")},n.setup=function(){n.createCanvas(e,t),n.frameRate(10)};n.draw=function(){n.background(r.background),n.textFont(o),n.textSize(l),n.textAlign(n.CENTER,n.CENTER),n.fill("".concat(r.foreground)),n.strokeWeight(4),n.stroke(r.background),t&&e&&c.map((function(e,r){n.scale(1,1);var o=Math.random()<=.5;o&&function(e,t){e.copies<12&&e.copiesAreIncrementing?(c[t]=i(i({},e),{},{copies:e.copies+1}),n.millis()):12===e.copies?(c[t]=i(i({},e),{},{copies:e.copies-1,copiesAreIncrementing:!1,copiesAreDecrementing:!0}),n.millis()):e.copies>1&&e.copiesAreDecrementing?(c[t]=i(i({},e),{},{copies:e.copies-1,copiesAreDecrementing:!0}),n.millis()):1===e.copies&&e.copiesAreDecrementing&&(c[t]=i(i({},e),{},{copies:e.copies+1,copiesAreIncrementing:!0,copiesAreDecrementing:!1}),n.millis())}(e,r),o&&n.millis()-d>3e3&&function(e,t){e.count<3&&e.countIsIncrementing?(c[t]=i(i({},e),{},{count:e.count+1}),d=n.millis()):3===e.count?(c[t]=i(i({},e),{},{count:e.count-1,countIsIncrementing:!1,countIsDecrementing:!0}),d=n.millis()):e.count>1&&e.countIsDecrementing?(c[t]=i(i({},e),{},{count:e.count-1,countIsDecrementing:!0}),d=n.millis()):1===e.count&&e.countIsDecrementing&&(c[t]=i(i({},e),{},{count:e.count+1,countIsIncrementing:!0,countIsDecrementing:!1}),d=n.millis())}(e,r);var a=Array.from(Array(e.count).keys());(a=a.map((function(e){return e+1}))).map((function(o,i){var a=1/(.95*e.count),c=1==e.count?t/2.25:l/2.75+l/1.36*i,s=Array.from(Array(e.copies).keys());(s=s.map((function(e){return e+1}))).map((function(t,o){var i=function(e){return u*e+u/1.5+6-60}(r)+6*t,s=c-6*t;n.push(),n.scale(1,a),n.text(e.letter,i,s),n.pop()}))}))}))},n.windowResized=function(){n.resizeCanvas(e,t)}}}},"1VNi":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/three-with-canvas-texture",function(){return n("R1sj")}])},"49Hi":function(e,t,n){var r={"./_scaffold-p5-canvas":"19DN","./_scaffold-p5-canvas.tsx":"19DN","./d1":"Uh2J","./d1.tsx":"Uh2J","./d2":"bUOA","./d2.tsx":"bUOA","./d8":"gOdJ","./d8.js":"gOdJ","./dharma":"QywH","./dharma-as-canvas":"S+6N","./dharma-as-canvas.tsx":"S+6N","./dharma-water-distort.canvas":"1KAc","./dharma-water-distort.canvas.tsx":"1KAc","./dharma.tsx":"QywH","./dharma_v0":"Hjf3","./dharma_v0.tsx":"Hjf3","./footer-canvas":"jOaG","./footer-canvas.tsx":"jOaG","./glsl":"iRSi","./glsl.tsx":"iRSi"};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id="49Hi"},R1sj:function(e,t,n){"use strict";n.r(t),n.d(t,"ThreeCanvasPage",(function(){return _}));var r=n("h4VS"),o=n("1OyB"),i=n("vuIU"),a=n("JX7q"),c=n("Ji7U"),s=n("md7G"),u=n("foSv"),l=n("rePB"),d=n("nKUr"),f=n("q1tI"),h=n.n(f),m=n("vOnD"),p=n("YMx+"),v=n("AeVD"),g=n("gssh"),w=n("/YLk"),b=n("a6RD"),j=n.n(b),O=n("Q9BO");function x(){var e=Object(r.a)(["\n      /* body, html {\n        overflow: hidden;\n      } */\n\n      .three-container {\n        width: 100vw;\n        height: 100vh;\n        overflow: hidden;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n\n        #p5_loading {\n          display: none !important;\n        }\n      }\n\n      #drawing-canvas {\n\t\t\t\tposition: absolute;\n\t\t\t\tbackground-color: #000000;\n\t\t\t\ttop: 0px;\n\t\t\t\tright: 0px;\n\t\t\t\tz-index: 3000;\n\t\t\t\tcursor: crosshair;\n\t\t\t\ttouch-action: none;\n\n        display: none;\n\t\t\t}\n\n      canvas {\n        animation: "," 1s ease 1;\n        animation-fill-mode: forwards;\n        animation-iteration-count: 1;\n      }\n\n      .dharma-container {\n        opacity: 1;\n      }\n    "]);return x=function(){return e},e}function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(u.a)(e);if(t){var o=Object(u.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(s.a)(this,n)}}var k=j()((function(){return Promise.all([n.e(9),n.e(10)]).then(n.t.bind(null,"58Bg",7))}),{loading:function(){return Object(d.jsx)(d.Fragment,{})},ssr:!1,loadableGenerated:{webpack:function(){return["58Bg"]},modules:["react-p5-wrapper"]}}),D=function(e){Object(c.a)(r,e);var t=y(r);function r(e){var i;return Object(o.a)(this,r),i=t.call(this,e),Object(l.a)(Object(a.a)(i),"threeRootElement",void 0),Object(l.a)(Object(a.a)(i),"renderP5",(function(e){var t=n("49Hi")("./".concat(e)).default(i.state.windowWidth,i.state.windowHeight,1,i.props.colorThemeContext);return Object(d.jsx)(k,{sketch:t})})),i.state={domLoaded:!1,windowWidth:0,windowHeight:0,canvasElement:void 0,canvasTheme:void 0},i.checkForCanvas=i.checkForCanvas.bind(Object(a.a)(i)),i.initializeThree=i.initializeThree.bind(Object(a.a)(i)),i}return Object(i.a)(r,[{key:"componentDidMount",value:function(){this.setState({windowWidth:window.innerWidth-80,windowHeight:window.innerHeight-80,domLoaded:!0,canvasElement:void 0,canvasTheme:this.props.colorThemeContext}),this.checkForCanvas()}},{key:"checkForCanvas",value:function(){var e=document.getElementById("defaultCanvas0");e?(O.c&&console.log("\ud83e\udd19 Canvas found:",e),this.setState({canvasElement:e}),this.initializeThree()):(O.c&&console.log("\ud83d\ude2d Canvas not found, trying again in 100ms:",e),setTimeout(this.checkForCanvas,100))}},{key:"initializeThree",value:function(){Object(g.a)(this.threeRootElement.el,this.state.canvasElement,this.props.colorThemeContext),O.c&&console.log("\u2705 Three initialization enqueued with canvas:",this.state.canvasElement)}},{key:"render",value:function(){var e=this,t=Object(m.a)(x(),p.a);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(t,{}),Object(d.jsx)(v.a,{}),Object(d.jsx)("canvas",{id:"drawing-canvas",height:"128",width:"128"}),this.state.domLoaded&&this.state.windowHeight>10&&this.state.windowWidth>10&&Object(d.jsx)("div",{className:"dharma-container",children:this.renderP5("dharma-as-canvas")}),this.state.canvasElement&&Object(d.jsx)("div",{ref:function(t){return e.threeRootElement={el:t,theme:e.state.canvasTheme}},className:"three-container"})]})}}]),r}(f.Component),_=function(){var e=h.a.useContext(w.b);return Object(d.jsx)(D,{colorThemeContext:e})};t.default=_},iRSi:function(e,t,n){"use strict";n.r(t);t.default=function(e,t,n,r){return function(r){var o;r.preload=function(){o=r.loadShader("/shaders/ex_".concat(n,"/shader.vert"),"/shaders/ex_".concat(n,"/shader.frag"))},r.setup=function(){r.createCanvas(e,t,r.WEBGL),r.noStroke()},r.draw=function(){r.shader(o),o.setUniform("u_resolution",[e,t]),o.setUniform("u_time",r.millis()/1e3),o.setUniform("u_mouse",[r.mouseX,r.map(r.mouseY,0,t,t,0)]),r.rect(0,0,e,t)},r.windowResized=function(){r.resizeCanvas(e,t)}}}},jOaG:function(e,t,n){"use strict";n.r(t);t.default=function(e,t,n,r){return function(n){n.setup=function(){n.createCanvas(e,t)},n.draw=function(){n.mouseIsPressed?(n.fill(window.laxaltUniversalTheme.foreground),n.stroke(window.laxaltUniversalTheme.background),n.strokeWeight(1.5),n.ellipse(n.mouseX,n.mouseY,e/6,e/6)):(n.fill(window.laxaltUniversalTheme.background),n.stroke(window.laxaltUniversalTheme.foreground),n.strokeWeight(1.5),n.ellipse(n.mouseX,n.mouseY,e/6,e/6))},n.windowResized=function(){n.resizeCanvas(e,t)}}}}},[["1VNi",0,1,2,7,3,5,4,8,6,11,12,14]]]);