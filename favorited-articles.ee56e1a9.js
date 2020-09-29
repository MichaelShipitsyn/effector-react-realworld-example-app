parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"G3Dt":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"changeUrlFx",{enumerable:!0,get:function(){return s.changeUrlFx}}),exports.$isEmptyArticles=exports.$isFirstBoot=exports.$status=exports.setUnfavoriteArticleFx=exports.$pageSize=exports.$feed=exports.$totalPages=exports.$articles=exports.$currentPage=exports.favoriteToggled=exports.currentPageSettled=exports.PageGate=exports.getFeedFx=void 0;var e,t=require("effector"),r=require("effector-react"),o=require("patronum/status"),a=p(require("api")),s=p(require("features/feed")),i=require("library/limit");function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function p(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var s=o?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(r,a,s):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}var c=(0,t.createEffect)(function(e){var t=e.username,r=e.page,o=e.pageSize;return a.get("/articles?favorited="+encodeURIComponent(t)+"&"+(0,i.limit)(o,r))});exports.getFeedFx=c;var u=(0,r.createGate)();exports.PageGate=u;var f=(e=s.createFeedModel({pageSize:5})).currentPageSettled,l=e.favoriteToggled,x=e.$currentPage,g=e.$articles,d=e.$totalPages,v=e.$feed,$=e.$pageSize,P=e.setUnfavoriteArticleFx;exports.setUnfavoriteArticleFx=P,exports.$pageSize=$,exports.$feed=v,exports.$totalPages=d,exports.$articles=g,exports.$currentPage=x,exports.favoriteToggled=l,exports.currentPageSettled=f;var y=(0,o.status)({effect:c});exports.$status=y;var F=(0,t.createStore)(!0);exports.$isFirstBoot=F;var b=(0,t.combine)(y,g,function(e,t){return"done"===e&&0===t.length});exports.$isEmptyArticles=b;
},{"effector":"hr1S","effector-react":"wuaz","patronum/status":"lYeu","api":"in7L","features/feed":"emfq","library/limit":"nHV0"}],"GogJ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.model=void 0;var e=r(require("./model"));function t(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return t=function(){return e},e}function r(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=t();if(r&&r.has(e))return r.get(e);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var f=n?Object.getOwnPropertyDescriptor(e,u):null;f&&(f.get||f.set)?Object.defineProperty(o,u,f):o[u]=e[u]}return o.default=e,r&&r.set(e,o),o}exports.model=e;
},{"./model":"G3Dt"}],"tXz4":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Pagination=void 0;var e=i(require("react")),r=require("effector-react"),t=require("library/item-render"),n=require("ui"),o=a(require("../model/model"));function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=u();if(r&&r.has(e))return r.get(e);var t={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(t,o,a):t[o]=e[o]}return t.default=e,r&&r.set(e,t),t}function i(e){return e&&e.__esModule?e:{default:e}}var c=function(u){var a=u.path,i=(0,r.useStore)(o.$totalPages),c=(0,r.useStore)(o.$currentPage),f=(0,r.useStore)(o.$pageSize);return e.default.createElement(n.Pagination,{current:c,itemRender:(0,t.itemRender)(a),pageSize:f,total:i,onChange:o.currentPageSettled})};exports.Pagination=c;
},{"react":"n8MK","effector-react":"wuaz","library/item-render":"PXBq","ui":"npgd","../model/model":"G3Dt"}],"osGu":[function(require,module,exports) {
"use strict";var e=require("effector"),r=a(require("library/router")),t=a(require("../../../model")),n=require("./model");function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=o();if(r&&r.has(e))return r.get(e);var t={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var u=n?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(t,a,u):t[a]=e[a]}return t.default=e,r&&r.set(e,t),t}n.$isFirstBoot.on(n.getFeedFx.done,function(){return!1}),n.$feed.on(n.getFeedFx.doneData,function(e,r){return r}),(0,e.forward)({from:[n.PageGate.open,n.$currentPage,n.setUnfavoriteArticleFx.done],to:(0,e.attach)({source:{pageSize:n.$pageSize,username:t.model.$username,page:n.$currentPage},effect:n.getFeedFx})}),(0,e.sample)({source:r.model.$pathname,clock:n.currentPageSettled,fn:function(e,r){return{path:e,page:r}},target:n.changeUrlFx});
},{"effector":"hr1S","library/router":"CgWG","../../../model":"FyWQ","./model":"G3Dt"}],"Uqkb":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FavoritedArticles=void 0;var e=i(require("react")),t=require("effector-react"),r=require("ui"),l=require("../model"),a=require("./pagination");function i(e){return e&&e.__esModule?e:{default:e}}require("../model/init");var n=function(){return(n=Object.assign||function(e){for(var t,r=1,l=arguments.length;r<l;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},u=function(i){var u=i.match.url;(0,t.useGate)(l.model.PageGate);var o=(0,t.useStore)(l.model.$isFirstBoot),c=(0,t.useStore)(l.model.$isEmptyArticles);return e.default.createElement(e.default.Fragment,null,c&&e.default.createElement(r.EmptyArticles,null),e.default.createElement(r.List,null,(0,t.useList)(l.model.$articles,function(t){return e.default.createElement("li",null,e.default.createElement(r.ArticlePreview,n({},t,{onClick:function(){return l.model.favoriteToggled(t)}})))})),e.default.createElement(a.Pagination,{path:u}),e.default.createElement(r.Spinner,{loading:o}))};exports.FavoritedArticles=u;
},{"react":"n8MK","effector-react":"wuaz","ui":"npgd","../model":"GogJ","./pagination":"tXz4","../model/init":"osGu"}]},{},[], null)
//# sourceMappingURL=/favorited-articles.ee56e1a9.js.map