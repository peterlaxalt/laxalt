_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[27],{DrrF:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/_scaffold-p5",function(){return e("Urii")}])},Urii:function(n,t,e){"use strict";e.r(t),e.d(t,"DharmaCanvasPage",(function(){return y}));var r=e("h4VS"),i=e("1OyB"),o=e("vuIU"),a=e("JX7q"),c=e("Ji7U"),d=e("md7G"),u=e("foSv"),s=e("rePB"),f=e("nKUr"),h=e("q1tI"),l=e.n(h),w=e("a6RD"),j=e.n(w),p=e("vOnD"),m=e("AeVD"),b=e("/YLk"),v=e("YMx+");function O(){var n=Object(r.a)(["\n      body, html {\n        overflow: hidden;\n      }\n\n      .dharma-container {\n        width: 100vw;\n        height: 100vh;\n        overflow: hidden;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n\n        canvas {\n          animation: "," 1s ease 1;\n          animation-fill-mode: forwards;\n          animation-iteration-count: 1;\n        }\n\n        #p5_loading {\n          display: none !important;\n        }\n      }\n    "]);return O=function(){return n},n}function g(n){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=Object(u.a)(n);if(t){var i=Object(u.a)(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return Object(d.a)(this,e)}}var _=j()((function(){return Promise.all([e.e(10),e.e(11)]).then(e.t.bind(null,"58Bg",7))}),{loading:function(){return Object(f.jsx)(f.Fragment,{})},ssr:!1,loadableGenerated:{webpack:function(){return["58Bg"]},modules:["react-p5-wrapper"]}}),x=function(n){Object(c.a)(r,n);var t=g(r);function r(n){var o;return Object(i.a)(this,r),o=t.call(this,n),Object(s.a)(Object(a.a)(o),"renderP5",(function(n){var t=e("49Hi")("./".concat(n)).default(o.state.windowWidth,o.state.windowHeight,1,o.props.colorThemeContext);return Object(f.jsx)(_,{sketch:t})})),o.state={domLoaded:!1,windowWidth:0,windowHeight:0},o}return Object(o.a)(r,[{key:"componentDidMount",value:function(){this.setState({windowWidth:window.innerWidth-80,windowHeight:window.innerHeight-80,domLoaded:!0})}},{key:"render",value:function(){var n=Object(p.a)(O(),v.a);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(n,{}),Object(f.jsx)(m.a,{}),this.state.domLoaded&&this.state.windowHeight>10&&this.state.windowWidth>10?Object(f.jsx)("div",{className:"dharma-container",children:this.renderP5("dharma")}):null]})}}]),r}(h.Component),y=function(){var n=l.a.useContext(b.b);return Object(f.jsx)(x,{colorThemeContext:n})};t.default=y}},[["DrrF",0,1,6,8,2,3,4,5,7,9,12,13,15]]]);