_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[35],{"1OyB":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},Qetd:function(t,e,n){"use strict";var r=Object.assign.bind(Object);t.exports=r,t.exports.default=t.exports},rdMa:function(t,e,n){"use strict";n.r(e);var r=n("1OyB"),i=n("vuIU"),o=n("Ji7U"),a=n("md7G"),c=n("foSv"),u=n("nKUr"),d=n("q1tI"),s=n("Womt"),w=n("D/OE"),f=function(t){var e,n,r,i,o,a,c=0,u=0,d=(Math.PI,.5),f=.5;!function(){n=new s.ab,a=t,n.setPixelRatio(window.devicePixelRatio),n.setSize(window.innerWidth,window.innerHeight),a.appendChild(n.domElement),r=new s.K,(i=new s.B(40,window.innerWidth/window.innerHeight,1,1e3)).position.set(0,0,25),r.background=new s.g(16777215),r.add(i),(o=new w.a(i,n.domElement)).movementSpeed=1e4,o.domElement=n.domElement,o.rollSpeed=Math.PI/24,o.autoForward=!0,o.dragToLook=!0,o.enableZoom=!0;var p=new s.Q(10,3,200,200);(new s.P).load("/projects/three/stripe-tile.png",(function(t){t.wrapS=t.wrapT=s.J,t.anisotropy=1;var n=new s.x({map:t});e=new s.w(p,n),r.add(e),function(){var t=e.material.map;!0===t.matrixAutoUpdate?(t.offset.set(c,u),t.center.set(d,f)):t.matrix.identity().translate(-d,-f).translate(d,f).translate(c,u);m()}(),h()})),window.addEventListener("resize",v,!1)}();var p=0,l=0;function h(){requestAnimationFrame(h);var t=e.material.map;1,p+=.01,l+=.01,t.rotation+=1e-4,t.repeat={x:p,y:l},e.rotation.z+=8e-4,e.rotation.x+=8e-4,e.rotation.y+=8e-4,n.render(r,i)}function m(){n.render(r,i)}function v(){i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight),m()}};function p(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(c.a)(t);if(e){var i=Object(c.a)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return Object(a.a)(this,n)}}var l=function(t){Object(o.a)(n,t);var e=p(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){f(this.threeRootElement)}},{key:"render",value:function(){var t=this;return Object(u.jsx)("div",{ref:function(e){return t.threeRootElement=e},style:{width:"100vw",height:"100vh"}})}}]),n}(d.Component);e.default=l},yNYP:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/p5",function(){return n("rdMa")}])}},[["yNYP",0,1,6,14]]]);