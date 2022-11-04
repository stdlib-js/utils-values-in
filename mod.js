// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,l=n.__defineSetter__,i=n.__lookupGetter__,u=n.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var c,f,p,y;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((f="value"in t)&&(i.call(r,e)||u.call(r,e)?(c=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=c):r[e]=t.value),p="get"in t,y="set"in t,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&a&&a.call(r,e,t.get),y&&l&&l.call(r,e,t.set),r};var c=e;var f="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var p=Object.prototype.toString;var y=Object.prototype.hasOwnProperty;var b,v="function"==typeof Symbol?Symbol.toStringTag:"";b=f&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,o,a;if(null==r)return p.call(r);t=r[v],a=v,e=null!=(o=r)&&y.call(o,a);try{r[v]=void 0}catch(e){return p.call(r)}return n=p.call(r),e?r[v]=t:delete r[v],n}:function(r){return p.call(r)};var _,s=b;_=Array.isArray?Array.isArray:function(r){return"[object Array]"===s(r)};var d=_;function g(r){return null!==r&&"object"==typeof r}var m=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!d(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(g);function j(r){var e,t;if(!g(r))throw new TypeError(function(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}("invalid argument. Must provide an object (except null). Value: `%s`.",r));for(t in e=[],r)e.push(r[t]);return e}c(g,"isObjectLikeArray",{configurable:!1,enumerable:!1,writable:!1,value:m});export{j as default};
//# sourceMappingURL=mod.js.map
