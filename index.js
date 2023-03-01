// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e,t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,l=n.__defineSetter__,a=n.__lookupGetter__,u=n.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var c,f,p,y;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(a.call(e,t)||u.call(e,t)?(c=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=c):e[t]=r.value),p="get"in r,y="set"in r,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(e,t,r.get),y&&l&&l.call(e,t,r.set),e};var c,f=e,p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),y=Object.prototype.toString,b=Object.prototype.hasOwnProperty,s="function"==typeof Symbol?Symbol.toStringTag:"";c=p&&"symbol"==typeof Symbol.toStringTag?function(e){var t,r,n,o,i;if(null==e)return y.call(e);r=e[s],i=s,t=null!=(o=e)&&b.call(o,i);try{e[s]=void 0}catch(t){return y.call(e)}return n=y.call(e),t?e[s]=r:delete e[s],n}:function(e){return y.call(e)};var d,_=c;d=Array.isArray?Array.isArray:function(e){return"[object Array]"===_(e)};var v=d;function m(e){return null!==e&&"object"==typeof e}var g=function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(t){var r,n;if(!v(t))return!1;if(0===(r=t.length))return!1;for(n=0;n<r;n++)if(!1===e(t[n]))return!1;return!0}}(m);return f(m,"isObjectLikeArray",{configurable:!1,enumerable:!1,writable:!1,value:g}),function(e){var t,r;if(!m(e))throw new TypeError(function(){var e,t=arguments,r="https://stdlib.io/e/"+t[0]+"?";for(e=1;e<t.length;e++)r+="&arg[]="+encodeURIComponent(t[e]);return r}("invalid argument. Must provide an object (except null). Value: `%s`.",e));for(r in t=[],e)t.push(e[r]);return t}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).objectValuesIn=t();
//# sourceMappingURL=index.js.map
