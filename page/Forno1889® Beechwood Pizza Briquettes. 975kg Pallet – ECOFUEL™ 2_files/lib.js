(()=>{var e,t,n,r,o={5429:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r={create:function(e,t,n){e.navigator.sendBeacon(t,JSON.stringify(n))}}},4686:(e,t,n)=>{"use strict";n.d(t,{CA:()=>c,H_:()=>i,PX:()=>u,QN:()=>r,eM:()=>a,je:()=>o,pn:()=>l,u_:()=>s});var r=0,o=0,a=1,i=2,s=3,l=4,c=5,u=6},2393:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(2230),o=n(5429),a=n(4686),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l="/v1/";function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window;if("object"!==(void 0===e?"undefined":s(e))||!e)throw new TypeError("expected configuration object");var n=e.baseUrl,c=void 0===n?"https://eu.klarnaevt.com":n,u=e.client,d=e.clientVersion,p=e.sessionId,f=e.instanceId,m=void 0===f?Math.floor(9e3*Math.random())+1e3:f,h=e.logLevel||a.QN;if("string"!=typeof u)throw new TypeError("expected `client` in the configuration object");if("string"!=typeof d)throw new TypeError("expected `clientVersion` in the configuration object");if("string"!=typeof p)throw new TypeError("expected `sessionId` in the configuration object");if("number"!=typeof h||h<a.QN||h>a.PX)throw new TypeError("invalid `logLevel` ("+h+")");function g(e){return Object.keys(e).sort().map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&")}function v(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments[2],f=arguments.length>3&&void 0!==arguments[3]?arguments[3]:a.QN;if(!(h>f)){if(!e)throw new TypeError("expected `name` as first parameter");var v=function(e,t){return""+c+l+u+"/"+d+"/"+e+"?"+g(t)}(e,n=i({},n,{iid:m,sid:p,timestamp:n.timestamp||(new Date).getTime()}));try{o.Z.create(t,v,s)}catch(e){s&&(v+="&"+g(s)),r.Z.create(t,v)}}}return{event:v,trace:function(e,t,n){v(e,t,n,a.je)},debug:function(e,t,n){v(e,t,n,a.eM)},info:function(e,t,n){v(e,t,n,a.H_)},warn:function(e,t,n){v(e,t,n,a.u_)},error:function(e,t,n){v(e,t,n,a.pn)},fatal:function(e,t,n){v(e,t,n,a.CA)},setLogLevel:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.QN;if("number"!=typeof e||e<a.QN||e>a.PX)throw new TypeError("invalid `logLevel` ("+e+")");h=e},getConfig:function(){return{baseUrl:c,client:u,clientVersion:d,sessionId:p,instanceId:m,logLevel:h}}}}},2230:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r={create:function(e,t){(new e.Image).src=t}}},944:(e,t,n)=>{"use strict";n.d(t,{default:()=>a});var r,o;!function(e){e.AP="ap",e.EU="eu",e.US="us"}(r||(r={})),function(e){e.AT="at",e.AU="au",e.BE="be",e.CA="ca",e.CZ="cz",e.DE="de",e.DK="dk",e.ES="es",e.FR="fr",e.GB="gb",e.GR="gr",e.IE="ie",e.IT="it",e.MX="mx",e.NL="nl",e.NO="no",e.NZ="nz",e.PL="pl",e.PT="pt",e.SE="se",e.US="us"}(o||(o={}));const a={TRACKING:{SCRIPT_BOOTSTRAPING_START:"SCRIPT_BOOTSTRAPING_START",SCRIPT_BOOTSTRAPING_END:"SCRIPT_BOOTSTRAPING_END",START_AD_LOADING:"START_AD_LOADING",FRONTEND_EVENTS_CLIENT_ID:"osm-client-script"},CLIENT_ID_LENGTH:36,AD_RPC_NAMESPACE:"k-ad",COOKIE_SESSION_ID_NAME:"ku1-sid",COOKIE_VISITOR_KEY_NAME:"ku1-vid",COOKIE_EXPIRATION_DAYS_COUNT:400,KLARNA_FONTS_URL:"https://x.klarnacdn.net/ui/fonts/v1.3/fonts.css",CONSOLE_MESSAGE_PREFIX:"Klarna On-site Messaging:",PLACEMENT_TAG_NAME:"klarna-placement",MERCHANT_RPC_NAMESPACE:"k-merchant",HOSTED_INTERSTITIAL_PROTOCOLS:["https:"],HOSTED_INTERSTITIAL_ORIGINS:["klarnaservices.com","klarna.net","klarna.com","klarnademo.com"],KLARNA_CDN_URL:"https://x.klarnacdn.net",TERMS_OF_SERVICE_CDN:"https://cdn.klarna.com",DOMAINS_TO_HIDE_TEST_DRIVE:["www.klarna.com","www.klarnademo.com","demo.klarna.dev"],ALLOWED_PLACEMENT_ATTRIBUTES:["trackingId","customPaymentMethodIds","messagePrefix","key","locale","theme","purchaseAmount","purchase_amount","total_amount","totalAmount","inline"],SUPPORTED_LOCALES:["en-AU","en-NZ","en-AT","de-AT","nl-BE","en-BE","fr-BE","en-CH","de-CH","it-CH","fr-CH","en-CZ","cs-CZ","de-DE","en-DE","da-DK","en-DK","es-ES","en-ES","fi-FI","sv-FI","en-FI","fr-FR","en-FR","en-GB","en-GR","el-GR","en-HU","hu-HU","en-IE","en-IT","it-IT","nl-NL","en-NL","no-NO","nb-NO","en-NO","en-PL","pl-PL","en-PT","pt-PT","en-RO","ro-RO","sv-SE","en-SE","en-CA","fr-CA","es-MX","en-MX","en-US","es-US"],CMA_BASE_URL:{test:{ap:"https://js.playground.klarna.com/na/cma",eu:"https://js.playground.klarna.com/na/cma",us:"https://js.playground.klarna.com/na/cma"},development:{ap:"https://x.nonprod.us1.js.klarna.net/eu/cma",eu:"https://x.nonprod.us1.js.klarna.net/eu/cma",us:"https://x.nonprod.us1.js.klarna.net/eu/cma"},production:{ap:"https://js.klarna.com/oc/cma",eu:"https://js.klarna.com/eu/cma",us:"https://js.klarna.com/na/cma"},playground:{ap:"https://js.playground.klarna.com/oc/cma",eu:"https://js.playground.klarna.com/eu/cma",us:"https://js.playground.klarna.com/na/cma"},staging:{ap:"https://x.nonprod.us1.js.klarna.net/oc/cma",eu:"https://x.nonprod.us1.js.klarna.net/eu/cma",us:"https://x.nonprod.us1.js.klarna.net/na/cma"}},EVT_BASE_URL:{test:{ap:"https://evt-na.playground.klarnaservices.com",eu:"https://evt-na.playground.klarnaservices.com",us:"https://evt-na.playground.klarnaservices.comA"},development:{ap:"DUMMY_EVT_URL",eu:"DUMMY_EVT_URL",us:"DUMMY_EVT_URL"},production:{ap:"https://evt-oc.klarnaservices.com",eu:"https://evt-eu.klarnaservices.com",us:"https://evt-na.klarnaservices.com"},playground:{ap:"https://evt-oc.playground.klarnaservices.com",eu:"https://evt-eu.playground.klarnaservices.com",us:"https://evt-na.playground.klarnaservices.com"},staging:{ap:"https://frontend-event-router-ap.staging.c2c.klarna.net",eu:"https://frontend-event-router-eu.staging.c2c.klarna.net",us:"https://frontend-event-router-us.staging.c2c.klarna.net"}},DEPRECATED_PLACEMENT_KEYS:["top-strip-promotion-standard","credit-promotion-standard","credit-promotion-small","info-page-standard","info-page-auto-size"],ALLOWED_PLACEMENT_KEYS:["credit-promotion-auto-size","credit-promotion-badge","credit-promotion-inline","credit-promotion-small","credit-promotion-standard","footer-promotion-auto-size","homepage-promotion-box","homepage-promotion-tall","homepage-promotion-wide","info-page","info-page-auto-size","info-page-inline","info-page-standard","sidebar-promotion-auto-size","top-strip-promotion-auto-size","top-strip-promotion-badge","top-strip-promotion-standard"]}},8707:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(2393),o=n(9170),a=n(944);function i(e){const t={client:a.default.TRACKING.FRONTEND_EVENTS_CLIENT_ID,clientVersion:"2.48.28",baseUrl:e||"https://evt-eu.klarnaservices.com",sessionId:(0,o.x)()};return(0,r.Z)(Object.assign({},t))}},9170:(e,t,n)=>{"use strict";n.d(t,{x:()=>r});const r=(0,n(3416).kP)("useandom26T198340PX75pxJACKVERYMINDBUSHWOLFGQZbfghjklqvwyzrict",21)},2591:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(1728),o=n(944),a=n(6393);function i(e){var t,n;const i=e.split("/"),s=i[i.length-1],l=(0,r.G)(s),c=(null===(n=null===(t=window.Klarna)||void 0===t?void 0:t.OnsiteMessaging)||void 0===n?void 0:n.environment)||(0,a.Z)();return o.default.CMA_BASE_URL[c][l]}},6393:(e,t,n)=>{"use strict";function r(){return"eu-production".split("-").pop()}n.d(t,{Z:()=>r})},9226:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(1728),o=n(944),a=n(6393);function i(e){var t,n;const i=(0,r.G)(e),s=(null===(n=null===(t=window.Klarna)||void 0===t?void 0:t.OnsiteMessaging)||void 0===n?void 0:n.environment)||(0,a.Z)();return o.default.EVT_BASE_URL[s][i]||"https://evt-eu.klarnaservices.com"}},1728:(e,t,n)=>{"use strict";n.d(t,{G:()=>o});const r={at:"eu",au:"ap",be:"eu",ca:"us",ch:"eu",cz:"eu",de:"eu",dk:"eu",es:"eu",fi:"eu",fr:"eu",gb:"eu",gr:"eu",ie:"eu",it:"eu",mx:"us",nl:"eu",no:"eu",nz:"ap",pl:"eu",pt:"eu",se:"eu",us:"us"},o=e=>{const t=(e=e.replace("_","-")).split("-")[1].toLowerCase();return r[t]}},5928:e=>{var t=1/0,n=17976931348623157e292,r=NaN,o="[object Symbol]",a=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,u=Object.prototype.toString;function d(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}e.exports=function(e){return"number"==typeof e&&e==function(e){var p=function(e){if(!e)return 0===e?e:0;if(e=function(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&u.call(e)==o}(e))return r;if(d(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=d(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=s.test(e);return n||l.test(e)?c(e.slice(2),n?2:8):i.test(e)?r:+e}(e),e===t||e===-t){return(e<0?-1:1)*n}return e==e?e:0}(e),f=p%1;return p==p?f?p-f:p:0}(e)}},7129:(e,t)=>{"use strict";var n=Object.prototype.hasOwnProperty;function r(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(e){return null}}function o(e){try{return encodeURIComponent(e)}catch(e){return null}}t.stringify=function(e,t){t=t||"";var r,a,i=[];for(a in"string"!=typeof t&&(t="?"),e)if(n.call(e,a)){if((r=e[a])||null!=r&&!isNaN(r)||(r=""),a=o(a),r=o(r),null===a||null===r)continue;i.push(a+"="+r)}return i.length?t+i.join("&"):""},t.parse=function(e){for(var t,n=/([^=?#&]+)=?([^&]*)/g,o={};t=n.exec(e);){var a=r(t[1]),i=r(t[2]);null===a||null===i||a in o||(o[a]=i)}return o}},3416:(e,t,n)=>{"use strict";n.d(t,{kP:()=>o});let r=e=>crypto.getRandomValues(new Uint8Array(e)),o=(e,t=21)=>((e,t,n)=>{let r=(2<<Math.log(e.length-1)/Math.LN2)-1,o=-~(1.6*r*t/e.length);return(a=t)=>{let i="";for(;;){let t=n(o),s=o;for(;s--;)if(i+=e[t[s]&r]||"",i.length===a)return i}}})(e,t,r)}},a={};function i(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={id:e,loaded:!1,exports:{}};return o[e].call(n.exports,n,n.exports,i),n.loaded=!0,n.exports}i.m=o,i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"==typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"==typeof n.then)return n}var o=Object.create(null);i.r(o);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&r&&n;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>a[e]=()=>n[e]));return a.default=()=>n,i.d(o,a),o},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,n)=>(i.f[n](e,t),t)),[])),i.u=e=>e+".js",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},r="@prep-merchant/merchant-scripts:",i.l=(e,t,o,a)=>{if(n[e])n[e].push(t);else{var s,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==r+o){s=d;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",r+o),s.src=e),n[e]=[t];var p=(t,r)=>{s.onerror=s.onload=null,clearTimeout(f);var o=n[e];if(delete n[e],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&!e;)e=n[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{var e={lib:0};i.f.j=(t,n)=>{var r=i.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise(((n,o)=>r=e[t]=[n,o]));n.push(r[2]=o);var a=i.p+i.u(t),s=new Error;i.l(a,(n=>{if(i.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,r[1](s)}}),"chunk-"+t,t)}};var t=(t,n)=>{var r,o,[a,s,l]=n,c=0;if(a.some((t=>0!==e[t]))){for(r in s)i.o(s,r)&&(i.m[r]=s[r]);if(l)l(i)}for(t&&t(n);c<a.length;c++)o=a[c],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0},n=self.webpackChunk_prep_merchant_merchant_scripts=self.webpackChunk_prep_merchant_merchant_scripts||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),(()=>{"use strict";var e=i(6393);const t='script[src*="klarnaservices"][src*="/lib.js"],script[src*="pre-purchase"][src*="/lib.js"]';function n(){return document.currentScript||document.querySelector(t)}const r=/((https?):|)\/\/(.*)\/lib.js/;class o{constructor(){this.observers=[]}subscribe(e){return this.observers.push(e),this}notify(e){this.observers.forEach((t=>{t(e)}))}}class a extends o{constructor(e){super(),this.win=e,this.isReady=!1}listen(){return"loading"!==this.win.document.readyState?this.execDomReady():(this.win.document.addEventListener("DOMContentLoaded",(()=>this.execDomReady())),this.win.addEventListener("load",(()=>this.execDomReady()))),this}execDomReady(){this.isReady||(this.isReady=!0,this.notify({eventName:"dom-ready",time:new Date}))}}const s=/^[a-f0-9]{8}-?[a-f0-9]{4}-?[a-f0-9]{4}-?[a-f0-9]{4}-?[a-f0-9]{12}$/i;function l(){const e=n();return"true"===(null==e?void 0:e.getAttribute("data-enable-tracking"))}var c=i(9170);const u="/",d=[],p=/; */,f=e=>{try{return decodeURIComponent(e)}catch(t){return e}};function m(){return l()?function(e){const t=[];if(!e)return t;const n=e.split(p);for(const e of n){const n=e.split("=");if(2===n.length){const e=n[0].trim();let r=n[1].trim();'"'===r[0]&&(r=r.slice(1,-1)),r=f(r),t.push({name:e,value:r})}}return t}(window.document.cookie):d}function h(e){const t=m().filter((t=>t.name===e));return t[t.length-1]}function g(e){const t=h(e);if(l())return(null==t?void 0:t.value)||(0,c.x)()}const v={save:function(e){let{name:t,value:n,expires:r,domain:o}=e;if(l()){let e=`${t}=${n};path=${u};SameSite=Strict;Secure;`;if(void 0!==r&&(e+=`expires=${r.toUTCString()};`),void 0!==o&&"localhost"!==o&&""!==o){const n=function(e){const t=e.split(".");return t.map(((e,n)=>[e,[...t].slice(n+1).join(".")].join("."))).reverse().slice(1)}(o);for(const r of n)if(window.document.cookie=`${e}domain=.${r}`,g(t))break}else window.document.cookie=e}else!function(e){let{name:t,domain:n}=e;document.cookie=`${encodeURIComponent(t)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT${n?`; domain=${n}`:""}${u?`; path=${u}`:""}`}({name:t,domain:o}),d.push({name:t,value:n,path:u,expires:r,domain:o})},getValue:g,get:h};var y=i(944);function w(e){const t={startTime:void 0};let n;return performance&&performance.getEntriesByName&&(n=performance.getEntriesByName(e)[0]),performance.getEntriesByType&&(n=performance.getEntriesByType("mark").filter((t=>t.name===e))[0]),n||t}const{TRACKING:O}=y.default,{SCRIPT_BOOTSTRAPING_START:_,SCRIPT_BOOTSTRAPING_END:b,START_AD_LOADING:E}=O;var k=i(7129);const{parse:T}=k,S=e=>{const t=Object.fromEntries(Object.entries(e).filter((e=>{let[t,n]=e;return null!=n})));return k.stringify(t)};function A(e){const t=S(e||{});return Object.keys(t).length?`?${t}`:""}var I=i(8707);const C=.02;var P=i(5928),M=i.n(P);function N(e){return e?Object.fromEntries(Object.entries(e.dataset).filter((e=>{let[t]=e;return-1!==y.default.ALLOWED_PLACEMENT_ATTRIBUTES.indexOf(t)}))):{}}const R="color: black; background-color: #FFB3C7; padding: 2px;";function L(e){console.warn(`%c${y.default.CONSOLE_MESSAGE_PREFIX} ${e}`,R)}const{DEPRECATED_PLACEMENT_KEYS:j,ALLOWED_PLACEMENT_KEYS:x,CLIENT_ID_LENGTH:K}=y.default;function D(e){const t=function(e){return y.default.SUPPORTED_LOCALES.map((e=>e.toLowerCase())).includes(null==e?void 0:e.toLowerCase())}(e);return e?!!t||(L(`invalid data-locale (${e}) in klarna-placement`),!1):(L("missing data-locale in klarna-placement"),!1)}function $(e){const{key:t,locale:n,purchase_amount:r,purchaseAmount:o}=N(e),a=r||o;return function(e){let t=!0;return e?(j.includes(e)&&L(`The placement type ${e} will soon be deprecated. Please check https://docs.klarna.com/on-site-messaging/in-depth-knowledge/placements/#deprecated-placement-types`),x.includes(e)||e.includes("custom")||(t=!1,L(`${e} is not a valid placement type. Please check https://docs.klarna.com/on-site-messaging/in-depth-knowledge/placements/`))):(t=!1,L("missing data-key in klarna-placement")),t}(t)&&D(n)&&(`${window.Klarna.OnsiteMessaging.clientId}`.length===K||(L("Invalid data-client-id. Please make sure you pass your client-id and there are not extra spaces. Please check https://docs.klarna.com/on-site-messaging/integrate-with-on-site-messaging/integrate-using-javascript-library/step-2-install/"),!1))&&function(e,t){if(`${e}`.includes("credit")){if(void 0===t)return L("missing data-purchase-amount in klarna-placement"),!1;if(Number.isNaN(parseFloat(t)))return L("invalid purchase-amount in klarna-placement, it should be a number"),!1;if(parseFloat(t)<0)return L("invalid purchase-amount in klarna-placement, it should be >= 0"),!1;if((`${t}`.includes(".")||`${t}`.includes(","))&&(L("The data-purchase-amount should be in minor units (e.g. $120.00 should be passed as 12000). Please check https://docs.klarna.com/on-site-messaging/in-depth-knowledge/placements/#attributes"),!M()(parseFloat(t))))return!1}return!0}(t,a)}function V(e){return fetch(e,{cache:arguments.length>1&&void 0!==arguments[1]&&arguments[1]?"reload":"default"}).then((e=>{var t;return null===(t=null==e?void 0:e.text)||void 0===t?void 0:t.call(e)})).then((e=>e?JSON.parse(e):null))}var H=i(2591),U=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function Z(e,t){const n=function(){var e;const t=window.Klarna.OnsiteMessaging.originUrl,n=null===(e=null===performance||void 0===performance?void 0:performance.getEntriesByType)||void 0===e?void 0:e.call(performance,"resource").filter((e=>e.name.indexOf(t)>-1))[0];return n?{start:n.fetchStart,end:n.responseEnd}:{}}(),r=function(){const e=w(_)[0]||{},t=w(b)[0]||{};return{start:e.startTime,end:t.startTime}}(),o=function(e){let t=performance.getEntriesByType("resource").filter((t=>t.name===e))[0];return t||(t={}),{start:t.fetchStart,end:t.responseEnd,size:t.transferSize}}(e.adUrl),a=function(e,t){const n=`${y.default.TRACKING.START_AD_LOADING}_${e}`,r=w(t);return{start:w(n).startTime,end:r.startTime}}(e.numberOfRefreshPlacements,t);return{script_loaded_start:n.start,script_loaded_end:n.end,script_bootstrapped_start:r.start,script_bootstrapped_end:r.end,message_request_start:o.start,message_request_end:o.end,message_size:o.size,message_loaded_start:a.start,message_loaded_end:a.end,number_of_refresh_placement:e.numberOfRefreshPlacements,rendering_type:e.renderingType,placement_key:e.placementKey}}var B=i(9226);function G(e){const{locale:t}=e,n=(0,B.Z)(t),r=(0,I.Z)(n),o=`ad_loaded_${(0,c.x)()}`;performance.mark(o);const a=Z(e,o),i=Object.assign({uci:window.Klarna.OnsiteMessaging.clientId,client_id:window.Klarna.OnsiteMessaging.clientId},a);Object.keys(i).forEach((e=>void 0===i[e]&&delete i[e])),r.event("load_time_metrics",i)}function F(e,t,n){const{key:r,trackingId:o,locale:a,messagePrefix:i}=N(t),[s,l]=a.replace("-","_").split("_"),c=Object.assign(Object.assign({},e),{iv:window.Klarna.OnsiteMessaging.integrationVersion,d:r,ti:o,h:`${s}`.toUpperCase(),i:`${l}`.toUpperCase(),n:window.location.host,ae:window.location.pathname,g:window.Klarna.OnsiteMessaging.clientId,mpf:i,rt:n,ac:"web",ab:"osm-frontends"}),u=(0,B.Z)(a),d=(0,I.Z)(u);Object.keys(c).forEach((e=>void 0===c[e]&&delete c[e])),Math.random()<.1&&(d.event("b",c),d.event("aggr_b",c))}const z=()=>'<svg style="display: block; margin-left: auto; width: 60px; height: 18px;" width="60" height="18" viewBox="0 0 60 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M0 0H60V13C60 15.7614 57.7614 18 55 18H5C2.23858 18 0 15.7614 0 13V0Z" fill="#92CF48"/>\n    <path d="M9.65007 4.99992H4.32007V6.04992H6.38007V11.9999H7.58007V6.04992H9.65007V4.99992Z" fill="white"/>\n    <path d="M11.9071 10.9499V8.78992H14.9071V7.75992H11.9071V6.04992H15.3971V4.99992H10.6971V11.9999H15.4871V10.9499H11.9071Z" fill="white"/>\n    <path d="M19.0644 12.0799C20.5444 12.0799 21.6144 11.2799 21.6144 9.97992C21.6144 8.74992 20.8644 8.16992 19.7044 7.97992L18.8544 7.83992C18.0944 7.71992 17.6544 7.43992 17.6544 6.85992C17.6544 6.28992 18.2044 5.91992 18.9744 5.91992C19.7844 5.91992 20.2344 6.24992 20.3444 6.95992L21.4744 6.83992C21.3744 5.63992 20.5544 4.91992 18.9744 4.91992C17.4544 4.91992 16.5144 5.73992 16.5144 6.89992C16.5144 8.08992 17.3144 8.66992 18.3244 8.82992L19.2144 8.97992C20.0144 9.10992 20.4544 9.36992 20.4544 10.0199C20.4544 10.6499 19.8644 11.0299 19.0644 11.0299C18.1344 11.0299 17.6044 10.4599 17.5444 9.76992L16.3544 9.83992C16.4144 11.1799 17.3444 12.0799 19.0644 12.0799Z" fill="white"/>\n    <path d="M27.5895 4.99992H22.2595V6.04992H24.3195V11.9999H25.5195V6.04992H27.5895V4.99992Z" fill="white"/>\n    <path d="M30.9466 4.99992H28.6366V11.9999H30.9466C33.0266 11.9999 34.3466 10.7599 34.3466 8.49992C34.3466 6.23992 33.0266 4.99992 30.9466 4.99992ZM30.9466 10.9499H29.8466V6.04992H30.9466C32.2866 6.04992 33.1466 6.86992 33.1466 8.49992C33.1466 10.1299 32.2866 10.9499 30.9466 10.9499Z" fill="white"/>\n    <path d="M35.5018 11.9999H36.7118V9.15992H38.0718L39.3918 11.9999H40.6918L39.2718 8.95992C40.1018 8.72992 40.6618 8.08992 40.6618 7.05992C40.6618 5.73992 39.7518 4.99992 38.3318 4.99992H35.5018V11.9999ZM36.7118 8.13992V6.04992H38.2418C39.0618 6.04992 39.4618 6.41992 39.4618 7.09992C39.4618 7.78992 39.0618 8.13992 38.2418 8.13992H36.7118Z" fill="white"/>\n    <path d="M41.9178 11.9999H43.1278V4.99992H41.9178V11.9999Z" fill="white"/>\n    <path d="M46.8433 11.9999H48.0134L50.7634 4.99992H49.4633L47.4333 10.3399L45.3933 4.99992H44.1033L46.8433 11.9999Z" fill="white"/>\n    <path d="M52.9423 10.9499V8.78992H55.9423V7.75992H52.9423V6.04992H56.4323V4.99992H51.7323V11.9999H56.5223V10.9499H52.9423Z" fill="white"/>\n</svg>',q="test-badge-element-id";function Y(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];var n,r;if(-1===y.default.DOMAINS_TO_HIDE_TEST_DRIVE.indexOf(window.location.hostname)&&"playground"===(null===(r=null===(n=window.Klarna)||void 0===n?void 0:n.OnsiteMessaging)||void 0===r?void 0:r.environment)){if(function(e){const t=document.getElementById(q);return e.contains(t)}(e))return null;const n=function(){const e=document.createElement("div");return e.setAttribute("id",q),e.setAttribute("aria-hidden","true"),e.style.marginRight="15px",e.style.position="absolute",e.style.marginLeft="-70px",e.innerHTML=z().trim(),e}();return n.style.display=t?"none":"inline-block",e.appendChild(n),n}return null}var X=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{l(r.next(e))}catch(e){a(e)}}function s(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}l((r=r.apply(e,t||[])).next())}))};function W(e){let t;t=e.kpsr?[...Array.from(e.kpsr.firstElementChild.querySelectorAll("a")),...Array.from(e.kpsr.firstElementChild.querySelectorAll("[onclick]"))]:[...Array.from(e.querySelectorAll("[onclick]")),...Array.from(e.querySelectorAll("a"))],t.forEach((t=>{if(!t||!t.onclick)return;const n=t.onclick.toString();let r,o={showButtons:!0,showBackground:!1,clientId:window.Klarna.OnsiteMessaging.clientId};if(n.indexOf("learn-more")>0){{r="learn-more";const e=/#(.*?)'/,[,t]=e.exec(n),a=JSON.parse(window.atob(t));o=Object.assign(Object.assign({},o),a)}t.removeAttribute("onclick"),t.addEventListener("click",(t=>{t.preventDefault(),function(e,t,n,r){X(this,void 0,void 0,(function*(){(yield i.e("osm-interstitial").then(i.bind(i,5090))).showDialog(Object.assign(Object.assign(Object.assign({},e.dataset),t),{previousElement:n,type:r}))}))}(e,o,t.target,r),setTimeout((()=>{var e;null===(e=document.querySelector(".klarna-upstream-interstitial-frame"))||void 0===e||e.remove()}),100)}))}}))}function Q(e){let{element:t,forceReload:n=!1,numberOfRefreshPlacements:r}=e;const o=function(e){const t=N(e),{key:n,locale:r,purchaseAmount:o,purchase_amount:a,messagePrefix:i,customPaymentMethodIds:s}=t,l=U(t,["key","locale","purchaseAmount","purchase_amount","messagePrefix","customPaymentMethodIds"]),c=v.getValue(y.default.COOKIE_SESSION_ID_NAME),u=Object.assign({ver:"2.48.28",b:c,d:n,e:r,g:window.Klarna.OnsiteMessaging.clientId,purchase_amount:o||a,message_prefix:i,custom_payment_method_ids:s},l);return`${(0,H.Z)(r)||"https://js.klarna.com/eu/cma"}/v3/i${A(u)}`}(t);t.kpurl!==o&&(t.kpurl=o,V(o,n).then((e=>function(e,t,n,r){n&&n.code?(t.innerHTML=n.code,t.setAttribute("aria-hidden","true"),Y(t)):(t.style.display="none",t.innerHTML=""),n&&(n.code&&(t.style.display="inline",W(t)),n.impressionTrackerParams&&F(n.impressionTrackerParams,t,"inline"),n.trackLoadTime&&G({locale:t.dataset.locale,numberOfRefreshPlacements:r,adUrl:e,renderingType:"inline",placementKey:t.dataset.key||t.dataset.id}))}(o,t,e,r))))}var J=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const ee=.02;function te(e,t){const n={issue:e,details:t,clientId:window.Klarna.OnsiteMessaging.clientId,host:window.location.host,path:window.location.pathname};Math.random()<ee&&(0,I.Z)().event("placement_styling_issue",Object.assign({},n))}const ne="osm-logo",re=10,oe='"Klarna Headline"',ae=["bold","bolder","700"];function ie(e,t,n){e.style.setProperty(t,n,"important")}function se(e){var t;const n=null===(t=e.querySelector("div"))||void 0===t?void 0:t.shadowRoot;if(!n)return;const r=n.querySelectorAll("svg"),o=n.querySelector(`[part=${ne}]`);if(r.length){Array.from(r).every((e=>{const t=window.getComputedStyle(e);return!(!(n=t)||"none"!==n.display&&"hidden"!==n.visibility&&!(n.opacity&&parseFloat(n.opacity)<.9));var n}))&&(te("hidden-badge"),L("\nKlarna's logo should not be hidden in <klarna-placement>. \nPlease check https://docs.klarna.com/on-site-messaging/in-depth-knowledge/styling-on-site-messaging-with-css/#prerequisites"))}const a=function(e){const t=[];if(!e)return[];const n=window.getComputedStyle(e),r=e.style.getPropertyValue("font-size")||n.getPropertyValue("font-size");if(r){const[,n]=r.match(/^(0|[1-9]\d*)(\.\d+)?px$/);n&&Number(n)<re&&(t.push(`font-size: [${r}]`),ie(e,"font-size",`${re}px`))}const o=e.style.getPropertyValue("font-family")||n.getPropertyValue("font-family");o&&o!==oe&&(t.push(`font-family: [${o}]`),ie(e,"font-family",oe));const a=e.style.getPropertyValue("font-weight")||n.getPropertyValue("font-weight");return a&&!ae.includes(a)&&(t.push(`font-weight: [${a}]`),ie(e,"font-weight",ae[0])),t}(o);a.length>0&&(te("hidden-logo",a),L("\nKlarna's logo should not be hidden in <klarna-placement>. \nPlease check https://docs.klarna.com/on-site-messaging/in-depth-knowledge/styling-on-site-messaging-with-css/#prerequisites"))}function le(e,t,n,r){if(!function(e){return e.querySelector(`link[rel=stylesheet][href="${y.default.KLARNA_FONTS_URL}"]`)}(t)){const e=window.document.createElement("link");e.rel="stylesheet",e.href=y.default.KLARNA_FONTS_URL,t.prepend(e)}if(!t.wrapper){const e=window.document.createElement("div");e.style.height="auto",t.wrapper=e,t.prepend(e)}if(!t.kpsr){t.kpsr=t.wrapper.attachShadow({mode:"open"}),t.kpsr.addEventListener("click",(e=>{e.stopPropagation()}));const e=window.document.createElement("div");e.style.all="initial",t.kpsr.prepend(e)}if(n&&n.code){Y(t);const e=n.placementOptions;t.kpsr.firstElementChild.innerHTML=n.code,e&&e.width?"px"===e.widthUnit?(t.wrapper.style.maxWidth=`${e.width}${e.widthUnit}`,t.wrapper.style.width="100%"):"%"===e.widthUnit?t.wrapper.style.width=`${e.width}${e.widthUnit}`:t.wrapper.style.width="100%":t.wrapper.style.width="100%",t.wrapper.style.display="inline-block",n.customFont&&t.insertAdjacentHTML("afterbegin",n.customFont)}else if(t.wrapper.style.display="none",t.kpsr.firstElementChild.innerHTML="",t.wrapper.style.maxWidth="",t.wrapper.style.width="",!n)return;const o=N(t);W(t),n.impressionTrackerParams&&F(n.impressionTrackerParams,t,"shadow-dom"),n.trackLoadTime&&G({locale:o.locale,numberOfRefreshPlacements:r,adUrl:e,renderingType:"shadow-dom",placementKey:t.dataset.key||t.dataset.id}),setTimeout((()=>se(t)),2e3)}var ce=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{l(r.next(e))}catch(e){a(e)}}function s(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}l((r=r.apply(e,t||[])).next())}))};const ue={};function de(e){let{element:t,forceReload:n,numberOfRefreshPlacements:r}=e;return ce(this,void 0,void 0,(function*(){const e=function(e){const t=N(e),{key:n,locale:r,purchaseAmount:o,messagePrefix:a,customPaymentMethodIds:i}=t,s=J(t,["key","locale","purchaseAmount","messagePrefix","customPaymentMethodIds"]),l=v.getValue(y.default.COOKIE_SESSION_ID_NAME),c=Object.assign({ver:"2.48.28",b:l,d:n,e:r,g:window.Klarna.OnsiteMessaging.clientId,purchase_amount:o,message_prefix:a,custom_payment_method_ids:i},s);return`${(0,H.Z)(r)||"https://js.klarna.com/eu/cma"}/v3/s${A(c)}`}(t);if(t.kpurl!==e){t.kpurl=e;const o=ue[e]||V(e,n);ue[e]=o;const a=yield o;le(e,t,a,r),delete ue[e]}}))}function pe(e){let{element:t,forceReload:n,numberOfRefreshPlacements:r}=e;const o=Object.assign({},t.dataset);if(!$(t))return;void 0===o.inline||""!==o.inline&&"true"!==o.inline.toLowerCase()?"false"!==window.localStorage.getItem("USE_SHADOW_DOM")&&t.attachShadow?de({element:t,numberOfRefreshPlacements:r,forceReload:n}):function(){const e={clientId:window.Klarna.OnsiteMessaging.clientId,host:window.location.host,path:window.location.pathname};Math.random()<C&&(0,I.Z)().event("no_shadow_dom_support",Object.assign({},e))}():Q({element:t,numberOfRefreshPlacements:r,forceReload:n})}function fe(){let{forceReload:e=!1,numberOfRefreshPlacements:t=0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e){const t=`${E}_${e}`;performance.mark(t)}(t);const n=document.getElementsByTagName(y.default.PLACEMENT_TAG_NAME);let r=[];const o=[],a=Object.keys(Array.prototype.slice.call(n).reduce(((e,t)=>(o[A(t.dataset)]?r=[...r,t]:o[A(t.dataset)]=t,o)),o)).map((e=>o[e])).concat(r);for(const n of a)pe({element:n,numberOfRefreshPlacements:t,forceReload:e})}const me=[];let he=0;const ge=new class extends Array{pop(){return me.pop()}push(e){if(me.push(e),"refresh-placements"===e.eventName)L("window.KlarnaOnsiteService.push({ eventName: 'refresh-placements'}) will be deprecated end of 2023. Please use window.Klarna.OnsiteMessaging.refresh()"),this.refresh();else L("window.KlarnaOnsiteService.push will be deprecated end of 2023. Please use functionality exposed by window.Klarna.OnsiteMessaging.");return me.length}refresh(){he+=1,fe({numberOfRefreshPlacements:he})}};let ve=!1;const ye={clientId:void 0,loaded:!1,originUrl:void 0,version:"2.48.28",host:void 0,sessionId:void 0,numberOfRefreshPlacements:0,integrationVersion:"v2",refresh(){this.numberOfRefreshPlacements+=1,fe({numberOfRefreshPlacements:this.numberOfRefreshPlacements})},eventListeners:{},on(e,t){var n;-1!==["informationalModalOpened","informationalModalClosed"].indexOf(e)?t&&"function"==typeof t?(this.eventListeners[e]=t,ve||(null===(n=null===document||void 0===document?void 0:document.addEventListener)||void 0===n||n.call(document,"osm-internal-event",(e=>{var t,n,r,o;"show"===e.detail.action&&(null===(n=(t=this.eventListeners).informationalModalOpened)||void 0===n||n.call(t)),"hide"===e.detail.action&&(null===(o=(r=this.eventListeners).informationalModalClosed)||void 0===o||o.call(r))})),ve=!0)):L(`window.Klarna.OnsiteMessaging.on('${e}') requires a callback function`):L(`window.Klarna.OnsiteMessaging.on('${e}') is not supported. Please use 'informationalModalOpened' or 'informationalModalClosed'`)},environment:"eu-production"};performance.mark(_);const we=new class{constructor(){this.element=this.element||n()}get host(){var e;const t=null===(e=this.element)||void 0===e?void 0:e.src.match(r);if(!t)return null;return t[3]||""}get originUrl(){if(!this.element)return;return`https://${this.host}`}get clientId(){var e;return(null===(e=this.element)||void 0===e?void 0:e.getAttribute("data-client-id"))||null}get environment(){var t;return(null===(t=this.element)||void 0===t?void 0:t.getAttribute("data-environment"))||(0,e.Z)()}};if(we.clientId){i.p=`https://${we.host}/`,window.KlarnaOnsiteService=ge,window.kudt=ge,window.Klarna=window.Klarna||{OnsiteMessaging:ye},window.Klarna.OnsiteMessaging=ye,window.Klarna.OnsiteMessaging.clientId=we.clientId,window.Klarna.OnsiteMessaging.environment=we.environment,window.Klarna.OnsiteMessaging.originUrl=we.originUrl,window.Klarna.OnsiteMessaging.host=we.host,window.Klarna.OnsiteMessaging.integrationVersion="v2",window.Klarna.OnsiteMessaging.loaded=window.Klarna.OnsiteMessaging.loaded||!1;const e=new a(window);L('The Klarna library you are utilizing will be deprecated end of 2024.\n\n    We strongly recommend updating your integration for continued support and enhanced features.\n\n    For migration details, please visit: https://docs.klarna.com/on-site-messaging/migrate-to-new-klarna-websdk/"'),function(){const e=v.getValue(y.default.COOKIE_VISITOR_KEY_NAME);var t;const n="string"==typeof(t=e)&&s.test(t)?e:function(){const e=()=>Math.floor(65536*(1+Math.random())).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}();(function(e){const t=new Date;t.setDate(t.getDay()+y.default.COOKIE_EXPIRATION_DAYS_COUNT),v.save({name:y.default.COOKIE_VISITOR_KEY_NAME,value:e,expires:t,domain:window.location.hostname})})(n)}(),function(){let e;e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]?(0,c.x)():v.getValue(y.default.COOKIE_SESSION_ID_NAME)||(0,c.x)();(function(e){v.save({name:y.default.COOKIE_SESSION_ID_NAME,value:e,domain:window.location.hostname})})(e)}(),window.Klarna.OnsiteMessaging.loaded||(window.Klarna.OnsiteMessaging.loaded=!0,e.subscribe((()=>{fe({})})),e.listen()),performance.mark(b)}})()})();