import{g as t}from"./p-d60a3994.js";function r(r,n){const e=["left","right"];return"rtl"===t(r)&&e.reverse(),n.replace(/leading/gi,e[0]).replace(/trailing/gi,e[1])}
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.0
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */var n="undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof navigator,e=function(){for(var t=["Edge","Trident","Firefox"],r=0;r<t.length;r+=1)if(n&&navigator.userAgent.indexOf(t[r])>=0)return 1;return 0}(),i=n&&window.Promise?function(t){var r=!1;return function(){r||(r=!0,window.Promise.resolve().then((function(){r=!1,t()})))}}:function(t){var r=!1;return function(){r||(r=!0,setTimeout((function(){r=!1,t()}),e))}};function o(t){return t&&"[object Function]"==={}.toString.call(t)}function u(t,r){if(1!==t.nodeType)return[];var n=t.ownerDocument.defaultView.getComputedStyle(t,null);return r?n[r]:n}function a(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}function f(t){if(!t)return document.body;switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body;case"#document":return t.body}var r=u(t);return/(auto|scroll|overlay)/.test(r.overflow+r.overflowY+r.overflowX)?t:f(a(t))}function s(t){return t&&t.referenceNode?t.referenceNode:t}var c=n&&!(!window.MSInputMethodContext||!document.documentMode),h=n&&/MSIE 10/.test(navigator.userAgent);function l(t){return 11===t?c:10===t?h:c||h}function d(t){if(!t)return document.documentElement;for(var r=l(10)?document.body:null,n=t.offsetParent||null;n===r&&t.nextElementSibling;)n=(t=t.nextElementSibling).offsetParent;var e=n&&n.nodeName;return e&&"BODY"!==e&&"HTML"!==e?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===u(n,"position")?d(n):n:t?t.ownerDocument.documentElement:document.documentElement}function v(t){return null!==t.parentNode?v(t.parentNode):t}function p(t,r){if(!(t&&t.nodeType&&r&&r.nodeType))return document.documentElement;var n=t.compareDocumentPosition(r)&Node.DOCUMENT_POSITION_FOLLOWING,e=n?t:r,i=n?r:t,o=document.createRange();o.setStart(e,0),o.setEnd(i,0);var u,a,f=o.commonAncestorContainer;if(t!==f&&r!==f||e.contains(i))return"BODY"===(a=(u=f).nodeName)||"HTML"!==a&&d(u.firstElementChild)!==u?d(f):f;var s=v(t);return s.host?p(s.host,r):p(t,v(r).host)}function m(t){var r="top"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft",n=t.nodeName;return"BODY"===n||"HTML"===n?(t.ownerDocument.scrollingElement||t.ownerDocument.documentElement)[r]:t[r]}function g(t,r){var n="x"===r?"Left":"Top",e="Left"===n?"Right":"Bottom";return parseFloat(t["border"+n+"Width"],10)+parseFloat(t["border"+e+"Width"],10)}function b(t,r,n,e){return Math.max(r["offset"+t],r["scroll"+t],n["client"+t],n["offset"+t],n["scroll"+t],l(10)?parseInt(n["offset"+t])+parseInt(e["margin"+("Height"===t?"Top":"Left")])+parseInt(e["margin"+("Height"===t?"Bottom":"Right")]):0)}function w(t){var r=t.body,n=t.documentElement,e=l(10)&&getComputedStyle(n);return{height:b("Height",r,n,e),width:b("Width",r,n,e)}}var y=function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")},M=function(){function t(t,r){for(var n=0;n<r.length;n++){var e=r[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(r,n,e){return n&&t(r.prototype,n),e&&t(r,e),r}}(),O=function(t,r,n){return r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t},T=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])}return t};function F(t){return T({},t,{right:t.left+t.width,bottom:t.top+t.height})}function L(t){var r={};try{if(l(10)){r=t.getBoundingClientRect();var n=m(t,"top"),e=m(t,"left");r.top+=n,r.left+=e,r.bottom+=n,r.right+=e}else r=t.getBoundingClientRect()}catch(c){}var i={left:r.left,top:r.top,width:r.right-r.left,height:r.bottom-r.top},o="HTML"===t.nodeName?w(t.ownerDocument):{},a=t.offsetWidth-(o.width||t.clientWidth||i.width),f=t.offsetHeight-(o.height||t.clientHeight||i.height);if(a||f){var s=u(t);a-=g(s,"x"),f-=g(s,"y"),i.width-=a,i.height-=f}return F(i)}function x(t,r){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],e=l(10),i="HTML"===r.nodeName,o=L(t),a=L(r),s=f(t),c=u(r),h=parseFloat(c.borderTopWidth,10),d=parseFloat(c.borderLeftWidth,10);n&&i&&(a.top=Math.max(a.top,0),a.left=Math.max(a.left,0));var v=F({top:o.top-a.top-h,left:o.left-a.left-d,width:o.width,height:o.height});if(v.marginTop=0,v.marginLeft=0,!e&&i){var p=parseFloat(c.marginTop,10),g=parseFloat(c.marginLeft,10);v.top-=h-p,v.bottom-=h-p,v.left-=d-g,v.right-=d-g,v.marginTop=p,v.marginLeft=g}return(e&&!n?r.contains(s):r===s&&"BODY"!==s.nodeName)&&(v=function(t,r){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],e=m(r,"top"),i=m(r,"left"),o=n?-1:1;return t.top+=e*o,t.bottom+=e*o,t.left+=i*o,t.right+=i*o,t}(v,r)),v}function k(t){if(!t||!t.parentElement||l())return document.documentElement;for(var r=t.parentElement;r&&"none"===u(r,"transform");)r=r.parentElement;return r||document.documentElement}function H(t,r,n,e){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o={top:0,left:0},c=i?k(t):p(t,s(r));if("viewport"===e)o=function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t.ownerDocument.documentElement,e=x(t,n),i=Math.max(n.clientWidth,window.innerWidth||0),o=Math.max(n.clientHeight,window.innerHeight||0),u=r?0:m(n),a=r?0:m(n,"left");return F({top:u-e.top+e.marginTop,left:a-e.left+e.marginLeft,width:i,height:o})}(c,i);else{var h=void 0;"scrollParent"===e?"BODY"===(h=f(a(r))).nodeName&&(h=t.ownerDocument.documentElement):h="window"===e?t.ownerDocument.documentElement:e;var l=x(h,c,i);if("HTML"!==h.nodeName||function t(r){var n=r.nodeName;if("BODY"===n||"HTML"===n)return!1;if("fixed"===u(r,"position"))return!0;var e=a(r);return!!e&&t(e)}(c))o=l;else{var d=w(t.ownerDocument),v=d.height,g=d.width;o.top+=l.top-l.marginTop,o.bottom=v+l.top,o.left+=l.left-l.marginLeft,o.right=g+l.left}}var b="number"==typeof(n=n||0);return o.left+=b?n:n.left||0,o.top+=b?n:n.top||0,o.right-=b?n:n.right||0,o.bottom-=b?n:n.bottom||0,o}function j(t,r,n,e,i){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===t.indexOf("auto"))return t;var u=H(n,e,o,i),a={top:{width:u.width,height:r.top-u.top},right:{width:u.right-r.right,height:u.height},bottom:{width:u.width,height:u.bottom-r.bottom},left:{width:r.left-u.left,height:u.height}},f=Object.keys(a).map((function(t){return T({key:t},a[t],{area:(r=a[t],r.width*r.height)});var r})).sort((function(t,r){return r.area-t.area})),s=f.filter((function(t){return t.width>=n.clientWidth&&t.height>=n.clientHeight})),c=s.length>0?s[0].key:f[0].key,h=t.split("-")[1];return c+(h?"-"+h:"")}function B(t,r,n){var e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return x(n,e?k(r):p(r,s(n)),e)}function D(t){var r=t.ownerDocument.defaultView.getComputedStyle(t),n=parseFloat(r.marginTop||0)+parseFloat(r.marginBottom||0),e=parseFloat(r.marginLeft||0)+parseFloat(r.marginRight||0);return{width:t.offsetWidth+e,height:t.offsetHeight+n}}function A(t){var r={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,(function(t){return r[t]}))}function E(t,r,n){n=n.split("-")[0];var e=D(t),i={width:e.width,height:e.height},o=-1!==["right","left"].indexOf(n),u=o?"top":"left",a=o?"left":"top",f=o?"height":"width",s=o?"width":"height";return i[u]=r[u]+r[f]/2-e[f]/2,i[a]=n===a?r[a]-e[s]:r[A(a)],i}function S(t,r){return Array.prototype.find?t.find(r):t.filter(r)[0]}function Y(t,r,n){return(void 0===n?t:t.slice(0,function(t,r,n){if(Array.prototype.findIndex)return t.findIndex((function(t){return t.name===n}));var e=S(t,(function(t){return t.name===n}));return t.indexOf(e)}(t,0,n))).forEach((function(t){t.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=t.function||t.fn;t.enabled&&o(n)&&(r.offsets.popper=F(r.offsets.popper),r.offsets.reference=F(r.offsets.reference),r=n(r,t))})),r}function N(){if(!this.state.isDestroyed){var t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};t.offsets.reference=B(this.state,this.popper,this.reference,this.options.positionFixed),t.placement=j(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),t.originalPlacement=t.placement,t.positionFixed=this.options.positionFixed,t.offsets.popper=E(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",t=Y(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}}function W(t,r){return t.some((function(t){return t.enabled&&t.name===r}))}function I(t){for(var r=[!1,"ms","Webkit","Moz","O"],n=t.charAt(0).toUpperCase()+t.slice(1),e=0;e<r.length;e++){var i=r[e],o=i?""+i+n:t;if(void 0!==document.body.style[o])return o}return null}function C(){return this.state.isDestroyed=!0,W(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[I("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function P(t){var r=t.ownerDocument;return r?r.defaultView:window}function R(){this.state.eventsEnabled||(this.state=function(t,r,n,e){n.updateBound=e,P(t).addEventListener("resize",n.updateBound,{passive:!0});var i=f(t);return function t(r,n,e,i){var o="BODY"===r.nodeName,u=o?r.ownerDocument.defaultView:r;u.addEventListener(n,e,{passive:!0}),o||t(f(u.parentNode),n,e,i),i.push(u)}(i,"scroll",n.updateBound,n.scrollParents),n.scrollElement=i,n.eventsEnabled=!0,n}(this.reference,0,this.state,this.scheduleUpdate))}function z(){var t;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(t=this.state,P(this.reference).removeEventListener("resize",t.updateBound),t.scrollParents.forEach((function(r){r.removeEventListener("scroll",t.updateBound)})),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t))}function q(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function G(t,r){Object.keys(r).forEach((function(n){var e="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&q(r[n])&&(e="px"),t.style[n]=r[n]+e}))}var V=n&&/Firefox/i.test(navigator.userAgent);function U(t,r,n){var e=S(t,(function(t){return t.name===r})),i=!!e&&t.some((function(t){return t.name===n&&t.enabled&&t.order<e.order}));if(!i){var o="`"+r+"`";console.warn("`"+n+"` modifier is required by "+o+" modifier in order to work, be sure to include it before "+o+"!")}return i}var J=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],K=J.slice(3);function Q(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=K.indexOf(t),e=K.slice(n+1).concat(K.slice(0,n));return r?e.reverse():e}var X="flip",Z="clockwise",$="counterclockwise";var _={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(t){var r=t.placement,n=r.split("-")[0],e=r.split("-")[1];if(e){var i=t.offsets,o=i.reference,u=i.popper,a=-1!==["bottom","top"].indexOf(n),f=a?"left":"top",s=a?"width":"height",c={start:O({},f,o[f]),end:O({},f,o[f]+o[s]-u[s])};t.offsets.popper=T({},u,c[e])}return t}},offset:{order:200,enabled:!0,fn:function(t,r){var n,e=r.offset,i=t.offsets,o=i.popper,u=i.reference,a=t.placement.split("-")[0];return n=q(+e)?[+e,0]:function(t,r,n,e){var i=[0,0],o=-1!==["right","left"].indexOf(e),u=t.split(/(\+|\-)/).map((function(t){return t.trim()})),a=u.indexOf(S(u,(function(t){return-1!==t.search(/,|\s/)})));u[a]&&-1===u[a].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var f=/\s*,\s*|\s+/,s=-1!==a?[u.slice(0,a).concat([u[a].split(f)[0]]),[u[a].split(f)[1]].concat(u.slice(a+1))]:[u];return(s=s.map((function(t,e){var i=(1===e?!o:o)?"height":"width",u=!1;return t.reduce((function(t,r){return""===t[t.length-1]&&-1!==["+","-"].indexOf(r)?(t[t.length-1]=r,u=!0,t):u?(t[t.length-1]+=r,u=!1,t):t.concat(r)}),[]).map((function(t){return function(t,r,n,e){var i=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),o=+i[1],u=i[2];if(!o)return t;if(0===u.indexOf("%")){var a=void 0;switch(u){case"%p":a=n;break;case"%":case"%r":default:a=e}return F(a)[r]/100*o}return"vh"===u||"vw"===u?("vh"===u?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*o:o}(t,i,r,n)}))}))).forEach((function(t,r){t.forEach((function(n,e){q(n)&&(i[r]+=n*("-"===t[e-1]?-1:1))}))})),i}(e,o,u,a),"left"===a?(o.top+=n[0],o.left-=n[1]):"right"===a?(o.top+=n[0],o.left+=n[1]):"top"===a?(o.left+=n[0],o.top-=n[1]):"bottom"===a&&(o.left+=n[0],o.top+=n[1]),t.popper=o,t},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(t,r){var n=r.boundariesElement||d(t.instance.popper);t.instance.reference===n&&(n=d(n));var e=I("transform"),i=t.instance.popper.style,o=i.top,u=i.left,a=i[e];i.top="",i.left="",i[e]="";var f=H(t.instance.popper,t.instance.reference,r.padding,n,t.positionFixed);i.top=o,i.left=u,i[e]=a,r.boundaries=f;var s=t.offsets.popper,c={primary:function(t){var n=s[t];return s[t]<f[t]&&!r.escapeWithReference&&(n=Math.max(s[t],f[t])),O({},t,n)},secondary:function(t){var n="right"===t?"left":"top",e=s[n];return s[t]>f[t]&&!r.escapeWithReference&&(e=Math.min(s[n],f[t]-("right"===t?s.width:s.height))),O({},n,e)}};return r.priority.forEach((function(t){var r=-1!==["left","top"].indexOf(t)?"primary":"secondary";s=T({},s,c[r](t))})),t.offsets.popper=s,t},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(t){var r=t.offsets,n=r.popper,e=r.reference,i=t.placement.split("-")[0],o=Math.floor,u=-1!==["top","bottom"].indexOf(i),a=u?"right":"bottom",f=u?"left":"top",s=u?"width":"height";return n[a]<o(e[f])&&(t.offsets.popper[f]=o(e[f])-n[s]),n[f]>o(e[a])&&(t.offsets.popper[f]=o(e[a])),t}},arrow:{order:500,enabled:!0,fn:function(t,r){var n;if(!U(t.instance.modifiers,"arrow","keepTogether"))return t;var e=r.element;if("string"==typeof e){if(!(e=t.instance.popper.querySelector(e)))return t}else if(!t.instance.popper.contains(e))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),t;var i=t.placement.split("-")[0],o=t.offsets,a=o.popper,f=o.reference,s=-1!==["left","right"].indexOf(i),c=s?"height":"width",h=s?"Top":"Left",l=h.toLowerCase(),d=s?"left":"top",v=s?"bottom":"right",p=D(e)[c];f[v]-p<a[l]&&(t.offsets.popper[l]-=a[l]-(f[v]-p)),f[l]+p>a[v]&&(t.offsets.popper[l]+=f[l]+p-a[v]),t.offsets.popper=F(t.offsets.popper);var m=f[l]+f[c]/2-p/2,g=u(t.instance.popper),b=parseFloat(g["margin"+h],10),w=parseFloat(g["border"+h+"Width"],10),y=m-t.offsets.popper[l]-b-w;return y=Math.max(Math.min(a[c]-p,y),0),t.arrowElement=e,t.offsets.arrow=(O(n={},l,Math.round(y)),O(n,d,""),n),t},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(t,r){if(W(t.instance.modifiers,"inner"))return t;if(t.flipped&&t.placement===t.originalPlacement)return t;var n=H(t.instance.popper,t.instance.reference,r.padding,r.boundariesElement,t.positionFixed),e=t.placement.split("-")[0],i=A(e),o=t.placement.split("-")[1]||"",u=[];switch(r.behavior){case X:u=[e,i];break;case Z:u=Q(e);break;case $:u=Q(e,!0);break;default:u=r.behavior}return u.forEach((function(a,f){if(e!==a||u.length===f+1)return t;e=t.placement.split("-")[0],i=A(e);var s=t.offsets.popper,c=t.offsets.reference,h=Math.floor,l="left"===e&&h(s.right)>h(c.left)||"right"===e&&h(s.left)<h(c.right)||"top"===e&&h(s.bottom)>h(c.top)||"bottom"===e&&h(s.top)<h(c.bottom),d=h(s.left)<h(n.left),v=h(s.right)>h(n.right),p=h(s.top)<h(n.top),m=h(s.bottom)>h(n.bottom),g="left"===e&&d||"right"===e&&v||"top"===e&&p||"bottom"===e&&m,b=-1!==["top","bottom"].indexOf(e),w=!!r.flipVariations&&(b&&"start"===o&&d||b&&"end"===o&&v||!b&&"start"===o&&p||!b&&"end"===o&&m)||!!r.flipVariationsByContent&&(b&&"start"===o&&v||b&&"end"===o&&d||!b&&"start"===o&&m||!b&&"end"===o&&p);(l||g||w)&&(t.flipped=!0,(l||g)&&(e=u[f+1]),w&&(o=function(t){return"end"===t?"start":"start"===t?"end":t}(o)),t.placement=e+(o?"-"+o:""),t.offsets.popper=T({},t.offsets.popper,E(t.instance.popper,t.offsets.reference,t.placement)),t=Y(t.instance.modifiers,t,"flip"))})),t},behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(t){var r=t.placement,n=r.split("-")[0],e=t.offsets,i=e.popper,o=e.reference,u=-1!==["left","right"].indexOf(n),a=-1===["top","left"].indexOf(n);return i[u?"left":"top"]=o[n]-(a?i[u?"width":"height"]:0),t.placement=A(r),t.offsets.popper=F(i),t}},hide:{order:800,enabled:!0,fn:function(t){if(!U(t.instance.modifiers,"hide","preventOverflow"))return t;var r=t.offsets.reference,n=S(t.instance.modifiers,(function(t){return"preventOverflow"===t.name})).boundaries;if(r.bottom<n.top||r.left>n.right||r.top>n.bottom||r.right<n.left){if(!0===t.hide)return t;t.hide=!0,t.attributes["x-out-of-boundaries"]=""}else{if(!1===t.hide)return t;t.hide=!1,t.attributes["x-out-of-boundaries"]=!1}return t}},computeStyle:{order:850,enabled:!0,fn:function(t,r){var n=r.x,e=r.y,i=t.offsets.popper,o=S(t.instance.modifiers,(function(t){return"applyStyle"===t.name})).gpuAcceleration;void 0!==o&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var u,a,f=void 0!==o?o:r.gpuAcceleration,s=d(t.instance.popper),c=L(s),h={position:i.position},l=function(t,r){var n=t.offsets,e=n.popper,i=Math.round,o=Math.floor,u=function(t){return t},a=i(n.reference.width),f=i(e.width),s=-1!==["left","right"].indexOf(t.placement),c=-1!==t.placement.indexOf("-"),h=r?s||c||a%2==f%2?i:o:u,l=r?i:u;return{left:h(a%2==1&&f%2==1&&!c&&r?e.left-1:e.left),top:l(e.top),bottom:l(e.bottom),right:h(e.right)}}(t,window.devicePixelRatio<2||!V),v="bottom"===n?"top":"bottom",p="right"===e?"left":"right",m=I("transform");if(a="bottom"===v?"HTML"===s.nodeName?-s.clientHeight+l.bottom:-c.height+l.bottom:l.top,u="right"===p?"HTML"===s.nodeName?-s.clientWidth+l.right:-c.width+l.right:l.left,f&&m)h[m]="translate3d("+u+"px, "+a+"px, 0)",h[v]=0,h[p]=0,h.willChange="transform";else{var g="right"===p?-1:1;h[v]=a*("bottom"===v?-1:1),h[p]=u*g,h.willChange=v+", "+p}return t.attributes=T({},{"x-placement":t.placement},t.attributes),t.styles=T({},h,t.styles),t.arrowStyles=T({},t.offsets.arrow,t.arrowStyles),t},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(t){var r,n;return G(t.instance.popper,t.styles),r=t.instance.popper,n=t.attributes,Object.keys(n).forEach((function(t){!1!==n[t]?r.setAttribute(t,n[t]):r.removeAttribute(t)})),t.arrowElement&&Object.keys(t.arrowStyles).length&&G(t.arrowElement,t.arrowStyles),t},onLoad:function(t,r,n,e,i){var o=B(i,r,t,n.positionFixed),u=j(n.placement,o,r,t,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return r.setAttribute("x-placement",u),G(r,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},tt=function(){function t(r,n){var e=this,u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};y(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(e.update)},this.update=i(this.update.bind(this)),this.options=T({},t.Defaults,u),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=r&&r.jquery?r[0]:r,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(T({},t.Defaults.modifiers,u.modifiers)).forEach((function(r){e.options.modifiers[r]=T({},t.Defaults.modifiers[r]||{},u.modifiers?u.modifiers[r]:{})})),this.modifiers=Object.keys(this.options.modifiers).map((function(t){return T({name:t},e.options.modifiers[t])})).sort((function(t,r){return t.order-r.order})),this.modifiers.forEach((function(t){t.enabled&&o(t.onLoad)&&t.onLoad(e.reference,e.popper,e.options,t,e.state)})),this.update();var a=this.options.eventsEnabled;a&&this.enableEventListeners(),this.state.eventsEnabled=a}return M(t,[{key:"update",value:function(){return N.call(this)}},{key:"destroy",value:function(){return C.call(this)}},{key:"enableEventListeners",value:function(){return R.call(this)}},{key:"disableEventListeners",value:function(){return z.call(this)}}]),t}();tt.Utils=("undefined"!=typeof window?window:global).PopperUtils,tt.placements=J,tt.Defaults=_;export{tt as P,r as g};