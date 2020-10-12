System.register(["./p-0d5f7f45.system.js","./p-674cacaa.system.js","./p-46dac740.system.js"],(function(t){"use strict";var e,i,c,r,a,o,s,l;return{setters:[function(t){e=t.r;i=t.c;c=t.h;r=t.H;a=t.g},function(t){o=t.h;s=t.g},function(t){l=t.g}],execute:function(){var n="@-webkit-keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}:host{--calcite-switch-hover-handle-border:var(--calcite-ui-blue-2);--calcite-switch-switched-track-background:var(--calcite-ui-blue-2);--calcite-switch-switched-track-border:var(--calcite-ui-blue-2);--calcite-switch-switched-handle-border:var(--calcite-ui-blue-1);--calcite-switch-switched-hover-track-background:var(--calcite-ui-blue-2);--calcite-switch-switched-hover-track-border:var(--calcite-ui-blue-2);--calcite-switch-switched-hover-handle-border:var(--calcite-ui-blue-3)}:host([color=red]){--calcite-switch-switched-track-background:var(--calcite-ui-red-2);--calcite-switch-switched-track-border:var(--calcite-ui-red-1);--calcite-switch-hover-handle-border:var(--calcite-ui-red-2);--calcite-switch-switched-handle-border:var(--calcite-ui-red-1);--calcite-switch-switched-hover-track-background:var(--calcite-ui-red-1);--calcite-switch-switched-hover-track-border:var(--calcite-ui-red-2);--calcite-switch-switched-hover-handle-border:var(--calcite-ui-red-3)}:host([scale=s]){--calcite-switch-track-width:28px;--calcite-switch-track-height:16px;--calcite-switch-handle-size:14px}:host([scale=m]){--calcite-switch-track-width:36px;--calcite-switch-track-height:20px;--calcite-switch-handle-size:18px}:host([scale=l]){--calcite-switch-track-width:44px;--calcite-switch-track-height:24px;--calcite-switch-handle-size:22px}::slotted(input){display:none}:host{display:inline-block;position:relative;width:auto;cursor:pointer;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;tap-highlight-color:transparent}:host([disabled]){opacity:0.4;pointer-events:none;cursor:default}:host{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;width:auto}:host(:focus){outline:2px solid var(--calcite-ui-blue-1);outline-offset:2px}.track{position:relative;display:inline-block;vertical-align:top;width:var(--calcite-switch-track-width);height:var(--calcite-switch-track-height);background-color:var(--calcite-ui-foreground-2);border-radius:30px;border:1px solid var(--calcite-ui-border-2);pointer-events:none;-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out}.handle{position:absolute;display:block;width:var(--calcite-switch-handle-size);height:var(--calcite-switch-handle-size);top:-1px;left:-1px;right:auto;background-color:var(--calcite-ui-foreground-1);border-radius:30px;border:2px solid var(--calcite-ui-border-4);pointer-events:none;-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out}:host(:hover) .track,:host(:focus) .track{background-color:var(--calcite-ui-foreground-3);border-color:var(--calcite-ui-border-1)}:host(:hover) .handle,:host(:focus) .handle{border-color:var(--calcite-switch-hover-handle-border);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-switch-hover-handle-border);box-shadow:inset 0 0 0 1px var(--calcite-switch-hover-handle-border);right:auto}:host([switched]) .track{background-color:var(--calcite-switch-switched-track-background);border-color:var(--calcite-switch-switched-track-border)}:host([switched]) .handle{right:-1px;left:auto;border-color:var(--calcite-switch-switched-handle-border)}:host([switched]:hover) .track{background-color:var(--calcite-switch-switched-hover-track-background);border-color:var(--calcite-switch-switched-hover-track-border)}:host([switched]:hover) .handle{border-color:var(--calcite-switch-switched-hover-handle-border);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-switch-switched-hover-handle-border);box-shadow:inset 0 0 0 1px var(--calcite-switch-switched-hover-handle-border)}:host([dir=rtl]){margin-right:0;margin-left:0.5em}:host([dir=rtl]) .handle{left:auto;right:-1px}:host([dir=rtl][switched]) .handle{right:auto;left:-1px}:host([dir=rtl][switched]:active) .handle,:host([dir=rtl][switched]:focus) .handle{right:auto;left:-1px}";var h=t("calcite_switch",function(){function t(t){var c=this;e(this,t);this.calciteSwitchChange=i(this,"calciteSwitchChange",7);this.disabled=false;this.color="blue";this.name="";this.scale="m";this.switched=false;this.value="";this.syncThisToProxyInput=function(){c.switched=c.inputProxy.hasAttribute("checked");c.name=c.inputProxy.name;c.value=c.inputProxy.value};this.syncProxyInputToThis=function(){c.switched?c.inputProxy.setAttribute("checked",""):c.inputProxy.removeAttribute("checked");c.inputProxy.setAttribute("name",c.name);c.inputProxy.setAttribute("value",c.value)}}t.prototype.handleLabelFocus=function(t){if(!this.disabled&&!this.el.contains(t.detail.interactedEl)&&o(t.detail.labelEl,this.el)){this.el.focus()}else return};t.prototype.onClick=function(t){if(!this.disabled&&this.el.closest("label")&&t.target===this.inputProxy||!this.el.closest("label")&&t.target===this.el){this.updateSwitch(t)}};t.prototype.keyDownHandler=function(t){var e=l(t.key);if(!this.disabled&&(e===" "||e==="Enter")){this.updateSwitch(t)}};t.prototype.switchWatcher=function(){this.switched?this.inputProxy.setAttribute("checked",""):this.inputProxy.removeAttribute("checked")};t.prototype.connectedCallback=function(){this.setupProxyInput()};t.prototype.disconnectedCallback=function(){this.observer.disconnect()};t.prototype.componentWillRender=function(){this.syncProxyInputToThis()};t.prototype.render=function(){var t=s(this.el);return c(r,{"aria-checked":this.switched.toString(),dir:t,role:"checkbox",tabIndex:this.disabled?-1:this.tabIndex},c("div",{class:"track"},c("div",{class:"handle"})))};Object.defineProperty(t.prototype,"tabIndex",{get:function(){var t=this.el.hasAttribute("tabindex");if(t){return Number(this.el.getAttribute("tabindex"))}return 0},enumerable:false,configurable:true});t.prototype.setupProxyInput=function(){this.inputProxy=this.el.querySelector("input");if(!this.inputProxy){this.inputProxy=document.createElement("input");this.inputProxy.type="checkbox";this.inputProxy.disabled=this.disabled;this.syncProxyInputToThis();this.el.appendChild(this.inputProxy)}this.syncThisToProxyInput();{this.observer=new MutationObserver(this.syncThisToProxyInput);this.observer.observe(this.inputProxy,{attributes:true})}};t.prototype.updateSwitch=function(t){t.preventDefault();this.switched=!this.switched;this.calciteSwitchChange.emit({switched:this.switched})};Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{switched:["switchWatcher"]}},enumerable:false,configurable:true});return t}());h.style=n}}}));