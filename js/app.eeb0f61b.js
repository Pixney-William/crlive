(function(e){function t(t){for(var n,c,u=t[0],i=t[1],s=t[2],l=0,d=[];l<u.length;l++)c=u[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,c=1;c<r.length;c++){var u=r[c];0!==a[u]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},c={app:0},a={app:0},o=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"05ece386"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={about:1};c[e]?t.push(c[e]):0!==c[e]&&r[e]&&t.push(c[e]=new Promise((function(t,r){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"4085853b"}[e]+".css",a=i.p+n,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var s=o[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===n||l===a))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],l=s.getAttribute("data-href");if(l===n||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete c[e],f.parentNode.removeChild(f),r(o)},f.href=a;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){c[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+c+")",d.name="ChunkLoadError",d.type=n,d.request=c,r[1](d)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"0613":function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f})),r.d(t,"c",(function(){return b}));var n,c=r("1da1"),a=r("ade3"),o=(r("96cf"),r("a4d3"),r("e01a"),r("d3b7"),r("4de4"),r("5502"));(function(e){e["SET_CURRENCIES"]="SET_CURRENCIES",e["SET_HISTORY"]="SET_HISTORY",e["UNSET_HISTORY"]="UNSET_HISTORY"})(n||(n={}));var u,i=r("bc3a"),s=r.n(i),l=s.a.create({baseURL:"//rest-sandbox.coinapi.io/v1/",timeout:15e3,headers:{"Content-Type":"application/json","X-CoinAPI-Key":"9D31C6CD-B773-4DA9-A2E5-AA4BA70C9593"}}),d=Symbol(),f=Object(o["a"])({state:{currencies:[],history:[]},mutations:(u={},Object(a["a"])(u,n.SET_CURRENCIES,(function(e,t){e.currencies=t})),Object(a["a"])(u,n.SET_HISTORY,(function(e,t){e.history=t})),Object(a["a"])(u,n.UNSET_HISTORY,(function(e){e.history=[]})),u),actions:{fetchCryptoCurrencies:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var r,c,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.commit,c=e.state,!c.currencies.length){t.next=3;break}return t.abrupt("return");case 3:return t.prev=3,t.next=6,l.get("assets");case 6:a=t.sent,o=a.data.filter((function(e){return e.type_is_crypto&&void 0!==e.price_usd})),o=o.sort((function(e,t){return e.price_usd>t.price_usd?-1:1})),r(n.SET_CURRENCIES,o),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](3),console.warn("Oops: ",t.t0);case 15:case"end":return t.stop()}}),t,null,[[3,12]])})))()},fetchHistoryData:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function r(){var c,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return c=e.commit,c(n.UNSET_HISTORY),r.prev=2,r.next=5,l.get("ohlcv/".concat(t,"/USD/latest?period_id=4MTH"));case 5:a=r.sent,c(n.SET_HISTORY,a.data),r.next=12;break;case 9:r.prev=9,r.t0=r["catch"](2),console.warn("Oops!: ",r.t0);case 12:case"end":return r.stop()}}),r,null,[[2,9]])})))()}}});function b(){return Object(o["b"])(d)}},6038:function(e,t,r){},"73bc":function(e,t,r){"use strict";r("d0ea")},"914f":function(e,t,r){},bd5e:function(e,t,r){"use strict";r("914f")},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("a9e3");var n=r("7a23"),c=r("0613");function a(e,t,r,c,a,o){var u=Object(n["x"])("MainNav"),i=Object(n["x"])("router-view");return Object(n["q"])(),Object(n["d"])(n["a"],null,[Object(n["g"])(u),Object(n["g"])(i)],64)}var o={class:"c-nav"},u=Object(n["g"])("img",{src:"/svgs/logo.svg",alt:""},null,-1);function i(e,t){var r=Object(n["x"])("router-link");return Object(n["q"])(),Object(n["d"])("nav",o,[Object(n["g"])("ul",null,[Object(n["g"])("li",null,[Object(n["g"])(r,{to:"/"},{default:Object(n["C"])((function(){return[u]})),_:1})])])])}const s={};s.render=i;var l=s,d={components:{MainNav:l},setup:function(){Object(n["o"])((function(){try{var e=document.querySelector(".c-glass");if(e){var t=e;t.style.display="block",t.style.opacity="1"}}catch(r){console.warn(r)}}))}};r("73bc");d.render=a;var f=d,b=(r("d3b7"),r("3ca3"),r("ddb0"),r("6c02"));function p(e,t,r,c,a,o){var u=Object(n["x"])("CurrencyList");return Object(n["q"])(),Object(n["d"])(u)}r("b0c0");var v=Object(n["D"])("data-v-6955c040");Object(n["t"])("data-v-6955c040");var O={class:"container mx-auto"},m={class:"m-currency-list"},g={class:"m-card-header"},h={class:"font-semibold tracking-wider"};Object(n["r"])();var j=v((function(e,t,r,c,a,o){var u=Object(n["x"])("CurrencyIcon"),i=Object(n["x"])("Title"),s=Object(n["x"])("ButtonLink");return Object(n["q"])(),Object(n["d"])("div",O,[Object(n["g"])("ul",m,[(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["w"])(c.currencies,(function(t){var r;return Object(n["q"])(),Object(n["d"])("li",{class:"m-card",key:t.asset_id},[Object(n["g"])("div",g,[Object(n["g"])("span",h,Object(n["z"])(t.asset_id),1),Object(n["g"])("span",null,Object(n["z"])(e.$filters.UsdFormattedString(t.price_usd)),1)]),Object(n["g"])(u,{class:"m-card__icon",src:null!==(r=t.id_icon)&&void 0!==r?r:"",alt:t.name},null,8,["src","alt"]),Object(n["g"])(i,{class:"m-card__title",level:2},{default:v((function(){var e;return[Object(n["f"])(Object(n["z"])(null!==(e=t.name)&&void 0!==e?e:t.asset_id),1)]})),_:2},1024),Object(n["g"])(s,{text:"More",to:e.$filters.linkToCurrency(t.asset_id)},null,8,["to"])])})),128))])])})),y=r("f4c0"),S=Object(n["D"])("data-v-f986a274"),_=S((function(e,t,r,c,a,o){var u=Object(n["x"])("router-link");return Object(n["q"])(),Object(n["d"])(u,{class:"a-button-link",to:r.to},{default:S((function(){return[Object(n["f"])(Object(n["z"])(r.text),1)]})),_:1},8,["to"])})),C={name:"ButtonLink",props:{to:{required:!1,type:String,default:"/"},text:{required:!0,type:String}}};r("dc7e");C.render=_,C.__scopeId="data-v-f986a274";var T=C,w={name:"CurrencyList",components:{CurrencyIcon:y["a"],ButtonLink:T},setup:function(){var e=Object(c["c"])();e.dispatch("fetchCryptoCurrencies");var t=Object(n["b"])((function(){return e.state.currencies}));return{currencies:t}}};r("bd5e");w.render=j,w.__scopeId="data-v-6955c040";var E=w,x={name:"Currencies",components:{CurrencyList:E}};x.render=p;var k=x,R=[{path:"/",name:"Home",component:k},{path:"/:id",name:"Currency",component:function(){return r.e("about").then(r.bind(null,"0ff2"))}}],I=Object(b["a"])({history:Object(b["b"])("/"),routes:R}),q=I,N=(r("def6"),r("ac1f"),r("5319"),r("b680"),{makeImageSrc:function(e){return e?"https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_256/"+e.replace(/-/g,"")+".png":"/svgs/missing.svg"},UsdFormattedString:function(e){return"US$ ".concat(e.toFixed(2))},linkToCurrency:function(e){return"/".concat(e)}}),U=Object(n["c"])(f);U.config.globalProperties.$filters=N,U.component("Title",{render:function(){return Object(n["j"])("h"+this.level,{},this.$slots.default())},props:{level:{type:Number,required:!0}}}),U.use(c["b"],c["a"]).use(q).mount("#app")},d0ea:function(e,t,r){},dc7e:function(e,t,r){"use strict";r("6038")},def6:function(e,t,r){},f4c0:function(e,t,r){"use strict";var n=r("7a23");function c(e,t,r,c,a,o){return Object(n["q"])(),Object(n["d"])("img",{width:r.width,height:r.height,src:e.$filters.makeImageSrc(r.src),alt:r.alt,loading:"lazy"},null,8,["width","height","src","alt"])}r("a9e3");var a={props:{alt:{type:String,required:!1},src:{type:String,required:!0},width:{type:Number,required:!1,default:128},height:{type:Number,required:!1,default:128}}};a.render=c;t["a"]=a}});
//# sourceMappingURL=app.eeb0f61b.js.map