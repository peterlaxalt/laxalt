_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[23],{"+xrx":function(t,e,n){"use strict";n.r(e);var r=n("1OyB"),i=n("vuIU"),o=n("Ji7U"),a=n("md7G"),c=n("foSv"),u=n("q1tI"),d=n.n(u),s=n("Tf9D"),w=d.a.createElement;function f(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(c.a)(t);if(e){var i=Object(c.a)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return Object(a.a)(this,n)}}var p=function(t){Object(o.a)(n,t);var e=f(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){Object(s.a)(this.threeRootElement)}},{key:"render",value:function(){var t=this;return w("div",{ref:function(e){return t.threeRootElement=e},style:{width:"100vw",height:"100vh"}})}}]),n}(u.Component);e.default=p},FO1x:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/p3",function(){return n("+xrx")}])},Qetd:function(t,e,n){"use strict";var r=Object.assign.bind(Object);t.exports=r,t.exports.default=t.exports},Tf9D:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("Womt"),i=n("D/OE"),o=function(t){var e,n,o,a,c,u,d=0,s=0,w=(Math.PI,.5),f=.5;!function(){n=new r.ab,u=t,n.setPixelRatio(window.devicePixelRatio),n.setSize(window.innerWidth,window.innerHeight),u.appendChild(n.domElement),o=new r.K,(a=new r.B(40,window.innerWidth/window.innerHeight,1,1e3)).position.set(0,0,25),o.background=new r.g(16777215),o.add(a),(c=new i.a(a,n.domElement)).movementSpeed=1e4,c.domElement=n.domElement,c.rollSpeed=Math.PI/24,c.autoForward=!0,c.dragToLook=!0,c.enableZoom=!1;var p=new r.Q(10,3,200,200);(new r.P).load("/projects/three/19of19-tile-white.png",(function(t){t.wrapS=t.wrapT=r.J,t.anisotropy=1;var n=new r.x({map:t});e=new r.w(p,n),o.add(e),function(){var t=e.material.map;!0===t.matrixAutoUpdate?(t.offset.set(d,s),t.center.set(w,f)):t.matrix.identity().translate(-w,-f).translate(w,f).translate(d,s);m()}(),h()})),window.addEventListener("resize",v,!1)}();var p=0,l=0;function h(){requestAnimationFrame(h);var t=e.material.map;1,p+=.01,l+=.01,t.rotation+=1e-4,t.repeat={x:p,y:l},e.rotation.z+=8e-4,e.rotation.x+=8e-4,e.rotation.y+=8e-4,n.render(o,a)}function m(){n.render(o,a)}function v(){a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight),m()}}}},[["FO1x",0,1,2,11]]]);