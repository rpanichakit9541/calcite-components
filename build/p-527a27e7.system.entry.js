var __awaiter=this&&this.__awaiter||function(t,e,r,n){function a(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,i){function o(t){try{c(n.next(t))}catch(e){i(e)}}function s(t){try{c(n["throw"](t))}catch(e){i(e)}}function c(t){t.done?r(t.value):a(t.value).then(o,s)}c((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(t){return function(e){return c([t,e])}}function c(o){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=o[0]&2?a["return"]:o[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;if(a=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;a=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){r.label=o[1];break}if(o[0]===6&&r.label<i[1]){r.label=i[1];i=o;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(o);break}if(i[2])r.ops.pop();r.trys.pop();continue}o=e.call(t,r)}catch(s){o=[6,s];a=0}finally{n=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-0d5f7f45.system.js","./p-674cacaa.system.js"],(function(t){"use strict";var e,r,n,a,i,o;return{setters:[function(t){e=t.e;r=t.r;n=t.h;a=t.H;i=t.g},function(t){o=t.g}],execute:function(){var s={icon:"icon",mirrored:"mirrored"};var c={};var l={};var f={s:16,m:24,l:32};function u(t){var r=t.icon,n=t.scale;return __awaiter(this,void 0,void 0,(function(){var t,a,i,o,s,u;return __generator(this,(function(h){switch(h.label){case 0:t=f[n];a=p(r);i=a.charAt(a.length-1)==="F";o=i?a.substring(0,a.length-1):a;s=""+o+t+(i?"F":"");if(c[s]){return[2,c[s]]}if(!l[s]){l[s]=fetch(e("./assets/"+s+".json")).then((function(t){return t.json()})).catch((function(){console.error('"'+s+'" is not a valid calcite-ui-icon name');return""}))}return[4,l[s]];case 1:u=h.sent();c[s]=u;return[2,u]}}))}))}function p(t){var e=!isNaN(Number(t.charAt(0)));var r=t.split("-");if(r.length===1){return e?"i"+t:t}return r.map((function(t,r){if(r===0){return e?"i"+t.toUpperCase():t}return t.charAt(0).toUpperCase()+t.slice(1)})).join("")}var h="@-webkit-keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-inline-flexbox;display:inline-flex}:host([scale=s]){height:16px;min-height:16px;width:16px;min-width:16px}:host([scale=m]){height:24px;min-height:24px;width:24px;min-width:24px}:host([scale=l]){height:32px;min-height:32px;width:32px;min-width:32px}.mirrored{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.svg{display:block}";var m=t("calcite_icon",function(){function t(t){r(this,t);this.icon=null;this.mirrored=false;this.scale="m";this.visible=false}t.prototype.connectedCallback=function(){var t=this;this.waitUntilVisible((function(){t.visible=true;t.loadIconPathData()}))};t.prototype.disconnectedCallback=function(){if(this.intersectionObserver){this.intersectionObserver.disconnect();this.intersectionObserver=null}};t.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.loadIconPathData();return[2]}))}))};t.prototype.render=function(){var t;var e=this,r=e.el,i=e.mirrored,c=e.pathData,l=e.scale,u=e.textLabel;var p=o(r);var h=f[l];var m=!!u;var d=[].concat(c||"");return n(a,{"aria-label":m?u:null,role:m?"img":null},n("svg",{class:(t={},t[s.mirrored]=p==="rtl"&&i,t.svg=true,t),fill:"currentColor",height:"100%",viewBox:"0 0 "+h+" "+h,width:"100%",xmlns:"http://www.w3.org/2000/svg"},d.map((function(t){return typeof t==="string"?n("path",{d:t}):n("path",{d:t.d,opacity:"opacity"in t?t.opacity:1})}))))};t.prototype.loadIconPathData=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,r,n,a;return __generator(this,(function(i){switch(i.label){case 0:t=this,e=t.icon,r=t.scale,n=t.visible;if(!e||!n){return[2]}a=this;return[4,u({icon:e,scale:r})];case 1:a.pathData=i.sent();return[2]}}))}))};t.prototype.waitUntilVisible=function(t){var e=this;if(typeof window==="undefined"||!window.IntersectionObserver){t();return}this.intersectionObserver=new IntersectionObserver((function(r){r.forEach((function(r){if(r.isIntersecting){e.intersectionObserver.disconnect();e.intersectionObserver=null;t()}}))}),{rootMargin:"50px"});this.intersectionObserver.observe(this.el)};Object.defineProperty(t,"assetsDirs",{get:function(){return["assets"]},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}},enumerable:false,configurable:true});return t}());m.style=h}}}));