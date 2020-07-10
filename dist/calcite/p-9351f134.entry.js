import{r as t,h as i,H as e,g as a}from"./p-75445a31.js";import{a as s,g as n}from"./p-64b004fc.js";const o=class{constructor(i){t(this,i),this.active=!1,this.type="default",this.iconDefaults={valid:"check-circle",invalid:"exclamation-mark-triangle",idle:"information"}}connectedCallback(){["invalid","valid","idle"].includes(this.status)||(this.status=s(this.el.parentElement,"status","idle")),["s","m","l"].includes(this.scale)||(this.scale=s(this.el.parentElement,"scale","m")),["default","floating"].includes(this.type)||(this.type="default")}componentWillUpdate(){this.iconEl=this.setIcon(this.iconDefaults[this.status])}render(){const t=n(this.el);return this.iconEl=this.setIcon(this.iconDefaults[this.status]),i(e,{theme:this.theme,dir:t},this.icon?this.iconEl:null,i("slot",null))}setIcon(t){return i("calcite-icon",{class:"calcite-input-message-icon",scale:"s",icon:t})}get el(){return a(this)}};o.style=":host([hidden]){display:none}:host([scale=s]){--calcite-input-message-spacing-value:4px}:host([scale=s]) .calcite-input-message-icon{margin-top:-2px}:host([scale=m]){--calcite-input-message-spacing-value:8px}:host([scale=l]){--calcite-input-message-spacing-value:12px}:host{--calcite-input-message-floating-background:rgba(255, 255, 255, 0.96)}:host([theme=dark]){--calcite-input-message-floating-background:rgba(43, 43, 43, 0.96)}:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-ui-text-2);font-weight:500;line-height:1.25;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;visibility:hidden;opacity:0;height:0;pointer-events:none}:host([active]){opacity:1;height:auto;visibility:visible;margin-top:var(--calcite-input-message-spacing-value)}:host([type=floating]){-webkit-transform:translate3d(0, -1.5rem, 0);transform:translate3d(0, -1.5rem, 0);background-color:var(--calcite-input-message-floating-background);position:absolute;width:100%;top:100%;left:0;right:0;height:auto;margin-top:-1.5rem;border-radius:var(--calcite-border-radius);-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);padding:var(--calcite-input-message-spacing-value);z-index:101}:host([type=floating][active]){-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}.calcite-input-message-icon{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-negative:0;flex-shrink:0;pointer-events:none;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;margin:-1px 0.75rem 0 0;transition:150ms ease-in-out}:host([dir=rtl]) .calcite-input-message-icon{margin:-1px 0 0 0.75rem}:host([status=invalid]) .calcite-input-message-icon{color:var(--calcite-ui-red-1)}:host([status=valid]) .calcite-input-message-icon{color:var(--calcite-ui-green-1)}:host([status=idle]) .calcite-input-message-icon{color:var(--calcite-ui-blue-1)}:host([type=floating][active]){-webkit-animation:floatingMessagePulse 0.5s ease-in-out;animation:floatingMessagePulse 0.5s ease-in-out;-webkit-animation-iteration-count:1;animation-iteration-count:1}@-webkit-keyframes floatingMessagePulse{0%{top:100%}25%{top:110%}50%{top:100%}75%{top:105%}100%{top:100%}}@keyframes floatingMessagePulse{0%{top:100%}25%{top:110%}50%{top:100%}75%{top:105%}100%{top:100%}}";export{o as calcite_input_message}