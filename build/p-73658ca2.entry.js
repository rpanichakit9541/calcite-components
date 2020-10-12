import{r as t,h as e,H as a,g as i,c as n}from"./p-490fe8c9.js";import{f as s,c as r,g as o}from"./p-8523337a.js";import{C as l}from"./p-28355066.js";import{g as c}from"./p-0ae16e31.js";const h=class{constructor(e){t(this,e),this.panelCount=0,this.flowDirection=null,this.panels=[],this.getFlowDirection=(t,e)=>t&&e>1||t>1?e<t?"retreating":"advancing":null,this.updateFlowProps=()=>{const{panels:t}=this,e=Array.from(this.el.querySelectorAll("calcite-panel")),a=t.length,i=e.length,n=e[i-1],s=e[i-2];if(i&&n&&e.forEach(t=>{t.showBackButton=i>1,t.hidden=t!==n}),s&&(s.menuOpen=!1),this.panels=e,a!==i){const t=this.getFlowDirection(a,i);this.panelCount=i,this.flowDirection=t}},this.panelItemObserver=new MutationObserver(this.updateFlowProps)}async back(){const t=this.el.querySelector("calcite-panel:last-child");if(t)return(t.beforeBack?t.beforeBack:()=>Promise.resolve()).call(t).then(()=>(t.remove(),t))}connectedCallback(){this.panelItemObserver.observe(this.el,{childList:!0,subtree:!0}),this.updateFlowProps()}disconnectedCallback(){this.panelItemObserver.disconnect()}handleCalcitePanelBackClick(){this.back()}render(){const{flowDirection:t,panelCount:i}=this;return e(a,null,e("div",{class:{frame:!0,"frame--advancing":"advancing"===t,"frame--retreating":"retreating"===t},key:i},e("slot",null)))}get el(){return i(this)}};h.style="@-webkit-keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:0.875rem;line-height:1.5}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{-ms-flex-align:stretch;align-items:stretch;background-color:transparent;display:-ms-flexbox;display:flex;width:100%;height:100%;overflow:hidden;position:relative}:host .frame{-ms-flex-align:stretch;align-items:stretch;width:100%;padding:0;margin:0;display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;position:relative}:host ::slotted(calcite-panel){height:100%}:host .frame--advancing{-webkit-animation:calcite-frame-advance 150ms ease-in-out;animation:calcite-frame-advance 150ms ease-in-out}:host .frame--retreating{-webkit-animation:calcite-frame-retreat 150ms ease-in-out;animation:calcite-frame-retreat 150ms ease-in-out}@-webkit-keyframes calcite-frame-advance{0%{opacity:0.5;-webkit-transform:translate3d(50px, 0, 0);transform:translate3d(50px, 0, 0)}100%{opacity:1;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}@keyframes calcite-frame-advance{0%{opacity:0.5;-webkit-transform:translate3d(50px, 0, 0);transform:translate3d(50px, 0, 0)}100%{opacity:1;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}@-webkit-keyframes calcite-frame-retreat{0%{opacity:0.5;-webkit-transform:translate3d(-50px, 0, 0);transform:translate3d(-50px, 0, 0)}100%{opacity:1;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}@keyframes calcite-frame-retreat{0%{opacity:0.5;-webkit-transform:translate3d(-50px, 0, 0);transform:translate3d(-50px, 0, 0)}100%{opacity:1;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}";const d=["ArrowUp","ArrowDown"],m=class{constructor(e){t(this,e),this.calcitePanelDismissedChange=n(this,"calcitePanelDismissedChange",7),this.calcitePanelScroll=n(this,"calcitePanelScroll",7),this.calcitePanelBackClick=n(this,"calcitePanelBackClick",7),this.dismissed=!1,this.disabled=!1,this.dismissible=!1,this.showBackButton=!1,this.loading=!1,this.menuOpen=!1,this.setContainerRef=t=>{this.containerEl=t},this.setMenuButonRef=t=>{this.menuButtonEl=t},this.setDismissRef=t=>{this.dismissButtonEl=t},this.panelKeyUpHandler=t=>{"Escape"===t.key&&this.dismiss()},this.dismiss=()=>{this.dismissed=!0},this.panelScrollHandler=()=>{this.calcitePanelScroll.emit()},this.backButtonClick=()=>{this.calcitePanelBackClick.emit()},this.toggleMenuOpen=()=>{this.menuOpen=!this.menuOpen},this.menuButtonKeyDown=t=>{const{key:e}=t,{menuOpen:a}=this;if(!this.isValidKey(e,d))return;const i=this.queryActions(),{length:n}=i;n&&(t.preventDefault(),a||(this.menuOpen=!0),"ArrowUp"===e&&s(i[n-1]),"ArrowDown"===e&&s(i[0]))},this.menuActionsKeydown=t=>{const{key:e,target:a}=t;if(!this.isValidKey(e,d))return;const i=this.queryActions(),{length:n}=i,r=i.indexOf(a);if(n&&-1!==r){if(t.preventDefault(),"ArrowUp"===e){const t=c(r-1,n);s(i[t])}if("ArrowDown"===e){const t=c(r+1,n);s(i[t])}}},this.menuActionsContainerKeyDown=t=>{const{key:e}=t;"Escape"===e&&(this.menuOpen=!1)}}dismissedHandler(){this.calcitePanelDismissedChange.emit()}queryActions(){return r(this.el,"header-actions-end",{all:!0})}isValidKey(t,e){return!!e.find(e=>e===t)}async setFocus(t){var e,a;"dismiss-button"!==t?null===(a=this.containerEl)||void 0===a||a.focus():null===(e=this.dismissButtonEl)||void 0===e||e.setFocus()}renderBackButton(){const{el:t}=this,a="rtl"===o(t),{showBackButton:i,intlBack:n,backButtonClick:s}=this,r=n||"Back";return i?e("calcite-action",{"aria-label":r,class:"back-button",icon:a?"chevron-right":"chevron-left",key:"back-button",onClick:s,scale:"s",slot:"header-actions-start",text:r}):null}renderHeaderContent(){const{heading:t,summary:a}=this,i=t?e("h4",{class:"heading"},t):null,n=a?e("span",{class:"summary"},a):null;return i||n?e("div",{class:"header-content",key:"header-content"},i,n):null}renderHeaderSlottedContent(){return e("div",{class:"header-content",key:"header-content"},e("slot",{name:"header-content"}))}renderHeaderStartActions(){const{el:t}=this;return r(t,"header-actions-start")?e("div",{class:{"header-actions--start":!0,"header-actions":!0},key:"header-actions-start"},e("slot",{name:"header-actions-start"})):null}renderHeaderActionsEnd(){const{dismiss:t,dismissible:a,el:i,intlClose:n}=this,s=n||"Close",o=a?e("calcite-action",{"aria-label":s,icon:"x",onClick:t,ref:this.setDismissRef,text:s}):null,l=e("slot",{name:"header-actions-end"});return r(i,"header-actions-end")||o?e("div",{class:{"header-actions--end":!0,"header-actions":!0},key:"header-actions-end"},l,o):null}renderMenuItems(){const{menuOpen:t,menuButtonEl:a}=this;return e("calcite-popover",{disablePointer:!0,flipPlacements:["bottom-end","top-end"],offsetDistance:0,onKeyDown:this.menuActionsKeydown,open:t,placement:"bottom-end",referenceElement:a},e("div",{class:"menu"},e("slot",{name:"header-menu-actions"})))}renderMenuButton(){const{menuOpen:t,intlOpen:a,intlClose:i}=this,n=t?i||"Close":a||"Open";return e("calcite-action",{"aria-label":n,class:"menu-button",icon:"ellipsis",onClick:this.toggleMenuOpen,onKeyDown:this.menuButtonKeyDown,ref:this.setMenuButonRef,text:n})}renderMenu(){const{el:t}=this;return r(t,"header-menu-actions")?e("div",{class:"menu-container",onKeyDown:this.menuActionsContainerKeyDown},this.renderMenuButton(),this.renderMenuItems()):null}renderHeaderNode(){const{el:t,showBackButton:a}=this,i=this.renderBackButton(),n=r(t,"header-content")?this.renderHeaderSlottedContent():this.renderHeaderContent(),s=this.renderHeaderStartActions(),o=this.renderHeaderActionsEnd(),l=this.renderMenu();return s||n||o||l||a?e("header",{class:"header"},i,s,n,o,l):null}renderFooterSlottedContent(){const{el:t}=this;return r(t,"footer")?e("footer",{class:"footer"},e("slot",{name:"footer"})):null}renderFooterActions(){const{el:t}=this;return r(t,"footer-actions")?e("footer",{class:"footer"},e("slot",{name:"footer-actions"})):null}renderContent(){return e("section",{class:"content-container",onScroll:this.panelScrollHandler,tabIndex:0},e("slot",null),this.renderFab())}renderFab(){const{el:t}=this;return r(t,"fab")?e("div",{class:"fab-container"},e("slot",{name:"fab"})):null}render(){const{dismissed:t,disabled:i,dismissible:n,el:s,loading:r,panelKeyUpHandler:c}=this,h="rtl"===o(s),d=e("article",{"aria-busy":r.toString(),class:{container:!0,[l.rtl]:h},hidden:n&&t,onKeyUp:c,ref:this.setContainerRef,tabIndex:n?0:-1},this.renderHeaderNode(),this.renderContent(),this.renderFooterSlottedContent()||this.renderFooterActions());return e(a,null,r||i?e("calcite-scrim",{loading:r},d):d)}get el(){return i(this)}static get watchers(){return{dismissed:["dismissedHandler"]}}};m.style="@-webkit-keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:0.875rem;line-height:1.5}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;position:relative;max-height:var(--calcite-panel-max-height);width:var(--calcite-panel-width);max-width:var(--calcite-panel-max-width);min-width:var(--calcite-panel-min-width);-webkit-transition:max-height 150ms ease-in-out, width 150ms ease-in-out;transition:max-height 150ms ease-in-out, width 150ms ease-in-out;--calcite-min-header-height:calc(var(--calcite-icon-size) * 3);--calcite-panel-max-height:unset;--calcite-panel-width:100%;--calcite-panel-min-width:unset;--calcite-panel-max-width:unset}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;color:var(--calcite-ui-text-2);fill:var(--calcite-ui-text-2)}.heading{padding:0;margin:0;font-weight:var(--calcite-ui-text-weight-demi)}.header .heading{-ms-flex:1 0 auto;flex:1 0 auto;padding:var(--calcite-spacing-half) var(--calcite-spacing-half)}h1.heading{font-size:1rem;line-height:1.5}h2.heading{font-size:0.9375rem;line-height:1.5}h3.heading{font-size:0.875rem;line-height:1.5}h4.heading,h5.heading{font-size:0.75rem;line-height:1.5}.container{-ms-flex-align:stretch;align-items:stretch;background-color:var(--calcite-ui-background);height:100%;width:100%;padding:0;margin:0;display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column}calcite-scrim{-ms-flex-align:stretch;align-items:stretch;width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;pointer-events:none}:host([height-scale=s]){--calcite-panel-max-height:40vh}:host([height-scale=m]){--calcite-panel-max-height:60vh}:host([height-scale=l]){--calcite-panel-max-height:80vh}:host([width-scale=s]){--calcite-panel-width:12vw;--calcite-panel-max-width:300px;--calcite-panel-min-width:150px}:host([width-scale=m]){--calcite-panel-width:20vw;--calcite-panel-max-width:420px;--calcite-panel-min-width:210px}:host([width-scale=l]){--calcite-panel-width:45vw;--calcite-panel-max-width:680px;--calcite-panel-min-width:340px}.container[hidden]{display:none}:host([loading]) .container,:host([disabled]) .container{position:relative;z-index:1}.header{-ms-flex-align:stretch;align-items:stretch;background-color:var(--calcite-ui-foreground-1);-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-pack:start;justify-content:flex-start;min-height:var(--calcite-header-min-height);position:-webkit-sticky;position:sticky;top:0;z-index:2;border-bottom:1px solid var(--calcite-ui-border-3);width:100%}.header-content{display:block;overflow:hidden;margin-right:auto;padding:var(--calcite-spacing) var(--calcite-spacing-three-quarters)}.header-content .heading,.header-content .summary{padding:0;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}.header-content .heading{color:var(--calcite-ui-text-3);font-weight:var(--calcite-ui-text-weight-demi);margin:0 0 var(--calcite-spacing-quarter);font-size:0.875rem;line-height:1.5}.header-content .heading:only-child{margin-bottom:0}.header-content .summary{color:var(--calcite-ui-text-3);font-size:0.75rem;line-height:1.5}.header-actions{-ms-flex-align:stretch;align-items:stretch;display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap}.menu-container:only-child{margin-left:auto}.menu-button{-ms-flex-item-align:stretch;align-self:stretch;-ms-flex:0 1 auto;flex:0 1 auto;height:100%;position:relative}.menu{min-width:var(--calcite-menu-min-width);-ms-flex-flow:column nowrap;flex-flow:column nowrap}.content-container{-ms-flex-align:stretch;align-items:stretch;background-color:var(--calcite-ui-background);display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex:1 1 auto;flex:1 1 auto;overflow:auto}.footer{background-color:var(--calcite-ui-foreground-1);border-top:1px solid var(--calcite-ui-border-3);display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-pack:space-evenly;justify-content:space-evenly;min-height:var(--calcite-footer-min-height);padding:var(--calcite-spacing-half) var(--calcite-spacing-half);position:-webkit-sticky;position:sticky;bottom:0;width:100%}.calcite--rtl .header-content{margin-left:auto;margin-right:unset}.calcite--rtl .menu-container:only-child{margin-left:unset;margin-right:auto}.fab-container{position:-webkit-sticky;position:sticky;z-index:1;bottom:0;display:inline-block;margin:0 auto;padding:var(--calcite-spacing-half) var(--calcite-spacing-half);left:0;right:0}";export{h as calcite_flow,m as calcite_panel}