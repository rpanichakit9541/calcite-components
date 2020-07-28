import{r as t,c as e,h as i,H as n,g as a}from"./p-1c20d919.js";import{a as c,g as l}from"./p-9c90d370.js";import{g as r}from"./p-569a5c63.js";const o=class{constructor(i){t(this,i),this.calciteInputFocus=e(this,"calciteInputFocus",7),this.calciteInputBlur=e(this,"calciteInputBlur",7),this.calciteInputInput=e(this,"calciteInputInput",7),this.loading=!1,this.alignment="start",this.value="",this.icon=!1,this.type="text",this.numberButtonType="vertical",this.required=!1,this.autofocus=!1,this.childElType="input",this.hasAction=!1,this.isClearable=!1,this.iconTypeDefaults={tel:"phone",password:"lock",email:"send",date:"calendar",time:"clock",search:"search"},this.updateNumberValue=t=>{if(t.preventDefault(),"input"===this.childElType&&"number"===this.type){let e=this.maxString?parseFloat(this.maxString):null,i=this.minString?parseFloat(this.minString):null,n=this.stepString?parseFloat(this.stepString):1,a=this.value&&""!==this.value?parseFloat(this.value):0;switch(t.target.dataset.adjustment){case"up":(!e&&0!==e||a<e)&&(this.childEl.value=(a+=n).toString());break;case"down":(!i&&0!==i||a>i)&&(this.childEl.value=(a-=n).toString())}this.value=this.childEl.value.toString()}}}minWatcher(){this.minString=this.min.toString()||null}maxWatcher(){this.maxString=this.max.toString()||null}stepWatcher(){this.maxString=this.max.toString()||null}connectedCallback(){let t=["invalid","valid","idle"],e=c(this.el,"status","idle");t.includes(this.status)||(this.status=t.includes(e)?e:"idle");let i=["s","m","l"],n=c(this.el,"scale","m");i.includes(this.scale)||(this.scale=i.includes(n)?n:"m"),["start","end"].includes(this.alignment)||(this.alignment="start"),["color","date","datetime-local","email","file","image","month","number","password","search","tel","text","textarea","time","url","week"].includes(this.type)||(this.type="text"),["vertical","horizontal","none"].includes(this.numberButtonType)||(this.numberButtonType="vertical"),this.icon=this.icon?this.icon:!(!1===this.icon||!["date","email","password","search","tel","time"].includes(this.type))&&this.iconTypeDefaults[this.type],this.determineClearable()}componentDidLoad(){var t,e,i;this.minString=null===(t=this.min)||void 0===t?void 0:t.toString(),this.maxString=null===(e=this.max)||void 0===e?void 0:e.toString(),this.stepString=null===(i=this.step)||void 0===i?void 0:i.toString(),this.slottedActionEl=this.el.querySelector("[slot=input-action]")}componentWillLoad(){this.childElType="textarea"===this.type?"textarea":"input",this.hasAction=!!this.el.querySelector("[slot=input-action]")}componentWillUpdate(){this.calciteInputInput.emit({element:this.childEl,value:this.value}),this.determineClearable()}render(){const t=l(this.el),e=this.getAttributes(),a=i("div",{class:"calcite-input-clear-button",onClick:()=>this.clearInputValue()},i("calcite-icon",{theme:this.theme,icon:"x",scale:"s"})),c=i("div",{class:"calcite-input-loading"},i("calcite-progress",{type:"indeterminate"})),r="horizontal"===this.numberButtonType?"number-button-item-horizontal":null,o=i("div",{class:"calcite-input-number-button-item "+r,onMouseDown:this.updateNumberValue,"data-adjustment":"up"},i("calcite-icon",{theme:this.theme,icon:"chevron-up"})),s=i("div",{class:"calcite-input-number-button-item "+r,onMouseDown:this.updateNumberValue,"data-adjustment":"down"},i("calcite-icon",{theme:this.theme,icon:"chevron-down"})),u=i("div",{class:"calcite-input-number-button-wrapper"},o,s),p=i("calcite-icon",{class:"calcite-input-icon",scale:"s"===this.scale||"m"===this.scale?"s":"m",theme:this.theme,icon:this.icon}),d=i("div",{class:"calcite-input-action-wrapper"},i("slot",{name:"input-action"})),h=i("div",{class:"calcite-input-prefix"},this.prefixText),m=i("div",{class:"calcite-input-suffix"},this.suffixText),b="textarea"!==this.childElType?i("input",Object.assign({},e,{onBlur:()=>this.inputBlurHandler(),onFocus:t=>this.inputFocusHandler(t),onInput:t=>this.inputInputHandler(t),type:this.type,min:this.minString,max:this.maxString,step:this.stepString,value:this.value,placeholder:this.placeholder||"",required:!!this.required||null,autofocus:!!this.autofocus||null,disabled:!!this.disabled||null,tabIndex:this.disabled?-1:null,ref:t=>this.childEl=t})):[i("textarea",Object.assign({},e,{onBlur:()=>this.inputBlurHandler(),onFocus:t=>this.inputFocusHandler(t),onInput:t=>this.inputInputHandler(t),required:!!this.required||null,placeholder:this.placeholder||"",autofocus:!!this.autofocus||null,disabled:!!this.disabled||null,tabIndex:this.disabled?-1:null,ref:t=>this.childEl=t}),i("slot",null)),i("div",{class:"calcite-input-resize-icon-wrapper"},i("calcite-icon",{icon:"chevron-down",scale:"s"}))];return i(n,{dir:t,onClick:t=>this.inputFocusHandler(t)},i("div",{class:"calcite-input-wrapper"},"number"===this.type&&"horizontal"===this.numberButtonType?s:null,this.prefixText?h:null,i("div",{class:"calcite-input-element-wrapper"},b,this.isClearable?a:null,this.icon?p:null,this.loading?c:null),this.hasAction?d:null,"number"===this.type&&"vertical"===this.numberButtonType?u:null,this.suffixText?m:null,"number"===this.type&&"horizontal"===this.numberButtonType?o:null))}handleLabelFocus(t){(t.detail.labelEl.contains(this.el)||t.detail.labelEl.shadowRoot.contains(this.el)||t.detail.requestedInput===this.el.id)&&this.childEl.focus()}keyDownHandler(t){this.isClearable&&"Escape"===r(t.key)&&this.clearInputValue()}async setFocus(){var t;null===(t=this.childEl)||void 0===t||t.focus()}inputInputHandler(t){this.value=t.target.value,this.calciteInputInput.emit({element:this.childEl,value:this.value})}inputBlurHandler(){this.calciteInputBlur.emit({element:this.childEl,value:this.value})}inputFocusHandler(t){t.target!==this.slottedActionEl&&this.setFocus(),this.calciteInputFocus.emit({element:this.childEl,value:this.value})}determineClearable(){this.isClearable="textarea"!==this.type&&(this.clearable||"search"===this.type||"time"===this.type||"date"===this.type)&&this.value.length>0}getAttributes(){let t=["alignment","dir","clearable","min","max","step","value","icon","loading","prefix-text","scale","status","suffix-text","theme","number-button-type"];return Array.from(this.el.attributes).filter(e=>e&&!t.includes(e.name)).reduce((t,{name:e,value:i})=>Object.assign(Object.assign({},t),{[e]:i}),{})}clearInputValue(){this.value=""}get el(){return a(this)}static get watchers(){return{min:["minWatcher"],max:["maxWatcher"],step:["stepWatcher"]}}};o.style=":host([hidden]){display:none}calcite-input[scale=s] textarea,calcite-input[scale=s] input,calcite-input[scale=s] .calcite-input-prefix,calcite-input[scale=s] .calcite-input-suffix{padding:8px;font-size:12px;height:32px}calcite-input[scale=s] textarea{min-height:32px}calcite-input[scale=s] .calcite-input-number-button-wrapper,calcite-input[scale=s] .calcite-input-action-wrapper calcite-button,calcite-input[scale=s] .calcite-input-action-wrapper calcite-button button{height:32px}calcite-input[scale=s] textarea,calcite-input[scale=s] input[type=file]{height:auto}calcite-input[scale=m] textarea,calcite-input[scale=m] input,calcite-input[scale=m] .calcite-input-prefix,calcite-input[scale=m] .calcite-input-suffix{padding:12px;font-size:16px;height:44px}calcite-input[scale=m] textarea{min-height:44px}calcite-input[scale=m] .calcite-input-number-button-wrapper,calcite-input[scale=m] .calcite-input-action-wrapper calcite-button,calcite-input[scale=m] .calcite-input-action-wrapper calcite-button button{height:44px}calcite-input[scale=m] textarea,calcite-input[scale=m] input[type=file]{height:auto}calcite-input[scale=l] textarea,calcite-input[scale=l] input,calcite-input[scale=l] .calcite-input-prefix,calcite-input[scale=l] .calcite-input-suffix{padding:16px;font-size:20px;height:56px}calcite-input[scale=l] textarea{min-height:56px}calcite-input[scale=l] .calcite-input-number-button-wrapper,calcite-input[scale=l] .calcite-input-action-wrapper calcite-button,calcite-input[scale=l] .calcite-input-action-wrapper calcite-button button{height:56px}calcite-input[scale=l] textarea,calcite-input[scale=l] input[type=file]{height:auto}calcite-input[disabled] textarea,calcite-input[disabled] input{pointer-events:none;opacity:0.4}calcite-input textarea,calcite-input input{display:-ms-flexbox;display:flex;position:relative;min-width:20%;max-width:100%;max-height:100%;-ms-flex:1;flex:1;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;font-family:inherit;-webkit-transition:150ms ease-in-out, height 0s;transition:150ms ease-in-out, height 0s;-webkit-box-shadow:0 0 0 0 transparent;box-shadow:0 0 0 0 transparent;outline:0;margin:0;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-1);font-weight:400}calcite-input input[type=search]::-webkit-search-decoration{-webkit-appearance:none}calcite-input textarea,calcite-input input{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}calcite-input textarea:focus,calcite-input input:focus{outline:2px solid var(--calcite-ui-blue-1);outline-offset:-2px}calcite-input input,calcite-input textarea{color:var(--calcite-ui-text-1);border:1px solid var(--calcite-ui-border-1)}calcite-input input:-ms-input-placeholder,calcite-input textarea:-ms-input-placeholder{color:var(--calcite-ui-text-3);font-weight:400}calcite-input input::-ms-input-placeholder,calcite-input textarea::-ms-input-placeholder{color:var(--calcite-ui-text-3);font-weight:400}calcite-input input::placeholder,calcite-input input:-ms-input-placeholder,calcite-input input::-ms-input-placeholder,calcite-input textarea::placeholder,calcite-input textarea:-ms-input-placeholder,calcite-input textarea::-ms-input-placeholder{color:var(--calcite-ui-text-3);font-weight:400}calcite-input input:focus,calcite-input textarea:focus{border-color:var(--calcite-ui-blue-1);color:var(--calcite-ui-text-1)}calcite-input input[readonly],calcite-input textarea[readonly]{background-color:var(--calcite-ui-background)}calcite-input input[readonly]:focus,calcite-input textarea[readonly]:focus{color:var(--calcite-ui-text-1)}calcite-input calcite-icon{color:var(--calcite-ui-text-1)}calcite-input slot:not[name=input-message]{display:block;margin-bottom:0.375rem;color:var(--calcite-ui-text-2);font-weight:500}calcite-input[icon] input{padding-left:2.25rem}calcite-input[dir=rtl][icon] input{padding-right:2.25rem;padding-left:0.75rem}calcite-input[dir=rtl][icon][scale=l] input{padding-right:3rem;padding-left:0.75rem}calcite-input[icon][scale=l] input{padding-left:3rem}.calcite-input-element-wrapper{display:-ms-inline-flexbox;display:inline-flex;-ms-flex:1;flex:1;min-width:20%;position:relative;-ms-flex-order:3;order:3}.calcite-input-icon{display:block;position:absolute;pointer-events:none;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;top:calc(50% - 9px);left:0.75rem;margin:1px auto 0;z-index:1}calcite-input[scale=l] .calcite-input-icon{top:calc(50% - 12px)}calcite-input[dir=rtl] .calcite-input-icon{left:unset;right:0.75rem}input[type=text]::-ms-clear{display:none;width:0;height:0}input[type=text]::-ms-reveal{display:none;width:0;height:0}input[type=search]::-webkit-search-decoration,input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-results-button,input[type=search]::-webkit-search-results-decoration,input[type=date]::-webkit-clear-button,input[type=time]::-webkit-clear-button{display:none}.calcite-input-clear-button{display:-ms-flexbox;display:flex;-ms-flex-item-align:stretch;align-self:stretch;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;min-height:100%;padding:0 0.75rem;border:1px solid var(--calcite-ui-border-1);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;pointer-events:initial;background-color:var(--calcite-ui-foreground-1);border-left:none;-ms-flex-order:4;order:4}.calcite-input-clear-button:hover,.calcite-input-clear-button:focus{background-color:var(--calcite-ui-foreground-2)}.calcite-input-clear-button:active{background-color:var(--calcite-ui-foreground-3)}.calcite-input-clear-button{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.calcite-input-clear-button:focus{outline:2px solid var(--calcite-ui-blue-1);outline-offset:-2px}.calcite-input-loading{display:block;pointer-events:none;position:absolute;top:1px;left:1px;right:1px}.calcite-input-action-wrapper{display:-ms-flexbox;display:flex;-ms-flex-order:7;order:7}.calcite-input-prefix,.calcite-input-suffix{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;height:auto;min-height:100%;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;font-weight:500;border:1px solid var(--calcite-ui-border-1);background-color:var(--calcite-ui-background);color:var(--calcite-ui-text-2);line-height:1}.calcite-input-prefix{-ms-flex-order:2;order:2;border-right-width:0px}.calcite-input-suffix{-ms-flex-order:5;order:5;border-left-width:0px}calcite-input[dir=rtl] .calcite-input-prefix{border-right-width:1px;border-left-width:0px}calcite-input[dir=rtl] .calcite-input-suffix{border-left-width:1px;border-right-width:0px}calcite-input[readonly] .calcite-input-number-button-item{pointer-events:none}calcite-input[alignment=start] textarea,calcite-input[alignment=start] input{text-align:left}calcite-input[alignment=end] textarea,calcite-input[alignment=end] input{text-align:right}calcite-input[dir=rtl][alignment=start] textarea,calcite-input[dir=rtl][alignment=start] input{text-align:right}calcite-input[dir=rtl][alignment=end] textarea,calcite-input[dir=rtl][alignment=end] input{text-align:left}calcite-input input[type=number]::-webkit-inner-spin-button,calcite-input input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:textfield;margin:0}calcite-input input[type=number]{-moz-appearance:textfield}.calcite-input-number-button-wrapper{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;box-sizing:border-box;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;pointer-events:none;-ms-flex-order:6;order:6}calcite-input[number-button-type=vertical] .calcite-input-wrapper{-ms-flex-direction:row;flex-direction:row;display:-ms-flexbox;display:flex}calcite-input[number-button-type=vertical] input,calcite-input[number-button-type=vertical] textarea{-ms-flex-order:2;order:2}calcite-input[dir=rtl][number-button-type=horizontal] .calcite-input-number-button-item[data-adjustment=down] calcite-icon{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}calcite-input[dir=rtl][number-button-type=horizontal] .calcite-input-number-button-item[data-adjustment=up] calcite-icon{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.calcite-input-number-button-item.number-button-item-horizontal[data-adjustment=up],.calcite-input-number-button-item.number-button-item-horizontal[data-adjustment=down]{min-height:100%;max-height:100%;-ms-flex-order:1;order:1;-ms-flex-item-align:auto;align-self:auto}.calcite-input-number-button-item.number-button-item-horizontal[data-adjustment=up] calcite-icon,.calcite-input-number-button-item.number-button-item-horizontal[data-adjustment=down] calcite-icon{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.calcite-input-number-button-item.number-button-item-horizontal[data-adjustment=down]{border-left:1px solid var(--calcite-ui-border-1);border-right:0px}.calcite-input-number-button-item.number-button-item-horizontal[data-adjustment=up]{-ms-flex-order:5;order:5}calcite-input[dir=rtl] .calcite-input-number-button-item.number-button-item-horizontal[data-adjustment=down]{border-right:1px solid var(--calcite-ui-border-1);border-left:0px}calcite-input[dir=rtl] .calcite-input-number-button-item.number-button-item-horizontal[data-adjustment=up]{border-left:1px solid var(--calcite-ui-border-1);border-right:0px}calcite-input[number-button-type=vertical] .calcite-input-number-button-item[data-adjustment=down]{border-top:0}.calcite-input-number-button-item{display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;max-height:50%;min-height:50%;padding:0 0.75rem;border:1px solid var(--calcite-ui-border-1);-webkit-transition:background-color 0.15s ease-in-out;transition:background-color 0.15s ease-in-out;pointer-events:initial;background-color:var(--calcite-ui-foreground-1);border-left:none}.calcite-input-number-button-item calcite-icon{pointer-events:none;width:14px;height:auto}.calcite-input-number-button-item:hover,.calcite-input-number-button-item:focus{background-color:var(--calcite-ui-foreground-2)}.calcite-input-number-button-item:active{background-color:var(--calcite-ui-foreground-3)}calcite-input[dir=rtl][number-button-type=vertical] .calcite-input-number-button-item{border-right:none;border-left:1px solid var(--calcite-ui-border-1)}.calcite-input-wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;position:relative}calcite-input input::-webkit-calendar-picker-indicator{display:none}calcite-input input[type=date]::-webkit-input-placeholder{visibility:hidden !important}calcite-input textarea::-webkit-resizer{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;bottom:0;right:0;padding:0 0.375rem}@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none){.calcite-input-resize-icon-wrapper{display:none}}.calcite-input-resize-icon-wrapper{background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-3);position:absolute;z-index:1;bottom:2px;right:2px;pointer-events:none;width:16px;height:16px}.calcite-input-resize-icon-wrapper calcite-icon{bottom:4px;right:4px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}calcite-input[dir=rtl] calcite-input textarea::-webkit-resizer{left:0;right:unset}calcite-input[dir=rtl] .calcite-input-resize-icon{left:10px;right:unset;-webkit-transform:rotate(45deg);transform:rotate(45deg)}calcite-input[type=file] input,calcite-input[type=file] textarea{cursor:pointer;padding:1.5rem;border:1px dashed #d4d4d4;background-color:#f8f8f8;text-align:center}calcite-input[status=invalid] .calcite-input-icon{color:var(--calcite-ui-red-1)}calcite-input[status=valid] .calcite-input-icon{color:var(--calcite-ui-green-1)}calcite-input[status=idle] .calcite-input-icon{color:var(--calcite-ui-text-2)}";export{o as calcite_input}