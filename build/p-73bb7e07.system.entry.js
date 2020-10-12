System.register(["./p-0d5f7f45.system.js","./p-674cacaa.system.js","./p-597da005.system.js","./p-2a3f4b9f.system.js","./p-50406a6e.system.js"],(function(t){"use strict";var e,a,i,r,n,s,c,o,l;return{setters:[function(t){e=t.r;a=t.c;i=t.h;r=t.H;n=t.g},function(t){s=t.g},function(t){c=t.d},function(t){o=t.f},function(t){l=t.C}],execute:function(){var p={searchIcon:"search-icon",clearButton:"clear-button"};var u={filterLabel:"filter",clear:"Clear filter"};var f={search:"search",close:"x"};var d="@-webkit-keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:0.875rem;line-height:1.5}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;padding:var(--calcite-spacing-half) var(--calcite-spacing-half);width:100%}label{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;margin:0 var(--calcite-spacing-quarter);overflow:hidden;position:relative;width:100%}input[type=text]{background-color:transparent;border:0;font-family:inherit;font-size:0.875rem;line-height:1.5;margin-bottom:2px;padding:var(--calcite-spacing-quarter) var(--calcite-spacing-quarter) var(--calcite-spacing-quarter) var(--calcite-spacing-plus-half);-webkit-transition:padding 150ms ease-in-out, -webkit-box-shadow 150ms ease-in-out;transition:padding 150ms ease-in-out, -webkit-box-shadow 150ms ease-in-out;transition:padding 150ms ease-in-out, box-shadow 150ms ease-in-out;transition:padding 150ms ease-in-out, box-shadow 150ms ease-in-out, -webkit-box-shadow 150ms ease-in-out;width:100%}input[type=text]::-ms-clear{display:none}.search-icon{color:var(--calcite-ui-text-2);display:-ms-flexbox;display:flex;left:0;position:absolute;-webkit-transition:left 150ms ease-in-out, right 150ms ease-in-out, opacity 150ms ease-in-out;transition:left 150ms ease-in-out, right 150ms ease-in-out, opacity 150ms ease-in-out}.calcite--rtl .search-icon{left:unset;right:0}input[type=text]:focus{border-color:var(--calcite-ui-blue-1);-webkit-box-shadow:0 2px 0 var(--calcite-ui-blue-1);box-shadow:0 2px 0 var(--calcite-ui-blue-1);outline:none;padding-left:var(--calcite-spacing-quarter);padding-right:var(--calcite-spacing-quarter)}input[type=text]:focus~.search-icon{left:calc(var(--calcite-icon-size) * -1);opacity:0}.calcite--rtl input[type=text]{padding-left:var(--calcite-spacing-quarter);padding-right:var(--calcite-spacing-plus-half)}.calcite--rtl input[type=text]:focus{padding-right:var(--calcite-spacing-plus-quarter)}.calcite--rtl input[type=text]:focus~.search-icon{right:calc(var(--calcite-icon-size) * -1)}.clear-button{color:var(--calcite-ui-text-2);background:none;border:0;cursor:pointer}.clear-button:hover,.clear-button:focus{color:var(--calcite-ui-text-1)}";var b=250;var m=t("calcite_filter",function(){function t(t){var i=this;e(this,t);this.calciteFilterChange=a(this,"calciteFilterChange",7);this.empty=true;this.filter=c((function(t){var e=new RegExp(t,"ig");if(i.data.length===0){console.warn("No data was passed to calcite-filter.\n      The data property expects an array of objects");i.calciteFilterChange.emit([]);return}var a=function(t,e){var i=false;o(t,(function(t){if(typeof t==="function"){return}if(Array.isArray(t)||typeof t==="object"&&t!==null){if(a(t,e)){i=true}}else if(e.test(t)){i=true}}));return i};var r=i.data.filter((function(t){return a(t,e)}));i.calciteFilterChange.emit(r)}),b);this.inputHandler=function(t){var e=t.target;i.empty=e.value==="";i.filter(e.value)};this.clear=function(){i.textInput.value="";i.empty=true;i.calciteFilterChange.emit(i.data)}}t.prototype.render=function(){var t=this;var e=s(this.el)==="rtl";return i(r,null,i("label",{class:e?l.rtl:null},i("input",{"aria-label":this.intlLabel||u.filterLabel,onInput:this.inputHandler,placeholder:this.placeholder,ref:function(e){t.textInput=e},type:"text",value:""}),i("div",{class:p.searchIcon},i("calcite-icon",{icon:f.search,scale:"s"}))),!this.empty?i("button",{"aria-label":this.intlClear||u.clear,class:p.clearButton,onClick:this.clear},i("calcite-icon",{icon:f.close})):null)};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:false,configurable:true});return t}());m.style=d}}}));