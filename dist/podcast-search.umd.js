!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.spotifyWrapper=t():e.spotifyWrapper=t()}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={toJSON:function(e){return e.json()}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default="https://gpodder.net"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.info=t.tagName=t.listTags=t.top=t.search=void 0;var o,r=n(1),u=(o=r)&&o.__esModule?o:{default:o},i=n(0);t.search=function(e){if(void 0===e||null===e)return[];var t=e.split(" ").join("%20");return fetch(u.default+"/search.json?q="+t).then(i.toJSON)},t.top=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return fetch(u.default+"/toplist/"+e+".json").then(i.toJSON)},t.listTags=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return fetch(u.default+"//api/2/tags/"+e+".json").then(i.toJSON)},t.tagName=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return e?fetch(u.default+"/api/2/tag/"+e+"/"+t+".json").then(function(e){return e.json}):[]},t.info=function(e){return e?fetch(u.default+"/api/2/data/podcast.json?url="+e).then(function(e){return e.json}):[]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2);t.default={search:o.search,top:o.top,listTags:o.listTags,tagName:o.tagName,info:o.info}}])});
//# sourceMappingURL=podcast-search.umd.js.map