import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './core-dae9237d.js';
import { S as SPACE, E as ENTER } from './keys-d0494fa5.js';
var CalciteCheckbox = /** @class */ (function () {
    function CalciteCheckbox(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        /** True if the checkbox is initially checked */
        this.checked = false;
        /**
         * True if the checkbox is initially indeterminate,
         * which is independent from its checked state
         * https://css-tricks.com/indeterminate-checkboxes/
         * */
        this.indeterminate = false;
        /** The name of the checkbox input */
        this.name = "";
        /** The value of the checkbox input */
        this.value = "";
        /** Size of the checkbox  */
        this.size = null;
        /** True if the checkbox is disabled */
        this.disabled = false;
        /** Determines what theme to use */
        this.theme = "light";
        this.toggle = function () {
            if (!_this.disabled) {
                _this.checked = !_this.checked;
                _this.indeterminate = false;
            }
        };
        this.indeterminatePath = "M4 7h8v2H4z";
        this.checkedPath = "M12.753 3l-7.319 7.497L3.252 8.31 2 9.373l3.434 3.434L14 4.24z";
        this.getPath = function () { return _this.indeterminate
            ? _this.indeterminatePath
            : _this.checked
                ? _this.checkedPath
                : ""; };
        this.syncThisToProxyInput = function () {
            _this.checked = _this.inputProxy.hasAttribute("checked");
            _this.name = _this.inputProxy.name;
            _this.value = _this.inputProxy.value;
        };
        this.syncProxyInputToThis = function () {
            _this.checked
                ? _this.inputProxy.setAttribute("checked", "")
                : _this.inputProxy.removeAttribute("checked");
            _this.inputProxy.name = _this.name;
            _this.inputProxy.value = _this.value;
        };
        this.calciteCheckboxChange = createEvent(this, "calciteCheckboxChange", 7);
    }
    CalciteCheckbox.prototype.onClick = function (_a) {
        var target = _a.target;
        // prevent duplicate click events that occur
        // when the component is wrapped in a label and checkbox is clicked
        if ((this.el.closest("label") && target === this.inputProxy) ||
            (!this.el.closest("label") && target === this.el)) {
            this.toggle();
        }
    };
    CalciteCheckbox.prototype.keyDownHandler = function (e) {
        if (e.keyCode === SPACE || e.keyCode === ENTER) {
            e.preventDefault();
            this.toggle();
        }
    };
    CalciteCheckbox.prototype.checkedWatcher = function () {
        this.calciteCheckboxChange.emit();
        this.checked
            ? this.inputProxy.setAttribute("checked", "")
            : this.inputProxy.removeAttribute("checked");
    };
    CalciteCheckbox.prototype.connectedCallback = function () {
        this.setupProxyInput();
    };
    CalciteCheckbox.prototype.disconnectedCallback = function () {
        this.observer.disconnect();
    };
    CalciteCheckbox.prototype.componentWillRender = function () {
        this.syncProxyInputToThis();
    };
    CalciteCheckbox.prototype.render = function () {
        return (h(Host, { role: "checkbox", "aria-checked": this.checked, tabindex: this.disabled ? "-1" : "0" }, h("svg", { class: "check-svg", viewBox: "0 0 16 16" }, h("path", { d: this.getPath(), fill: "white" })), h("slot", null)));
    };
    CalciteCheckbox.prototype.setupProxyInput = function () {
        // check for a proxy input
        this.inputProxy = this.el.querySelector("input");
        // if the user didn't pass a proxy input create one for them
        if (!this.inputProxy) {
            this.inputProxy = document.createElement("input");
            this.inputProxy.type = "checkbox";
            this.syncProxyInputToThis();
            this.el.appendChild(this.inputProxy);
        }
        this.syncThisToProxyInput();
        {
            this.observer = new MutationObserver(this.syncThisToProxyInput);
            this.observer.observe(this.inputProxy, { attributes: true });
        }
    };
    Object.defineProperty(CalciteCheckbox.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalciteCheckbox, "watchers", {
        get: function () {
            return {
                "checked": ["checkedWatcher"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalciteCheckbox, "style", {
        get: function () { return ":root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-pressed:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-pressed:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-pressed:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-pressed:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-pressed:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f}:host([theme=dark]){--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-pressed:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-pressed:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-pressed:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-pressed:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-pressed:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575}:root{--calcite-border-radius:3px}:host([hidden]){display:none}body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}a{color:#007ac2}::slotted(input){display:none}:host{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.check-svg,:host{display:inline-block}.check-svg{width:20px;height:20px;overflow:hidden;background-color:#fff;border:1px solid #757575;border-radius:2px;vertical-align:-.25em;margin-right:.25em;pointer-events:none;-webkit-transition:all .15s linear;transition:all .15s linear;-webkit-box-sizing:border-box;box-sizing:border-box}:host([theme=dark]) .check-svg{background-color:transparent;border-color:#eaeaea}:host([theme=dark][disabled]) .check-svg{border-color:#757575;background-color:#2b2b2b}:host([theme=dark][checked]) .check-svg,:host([theme=dark][indeterminate]) .check-svg{background-color:#3db8ff}:host([size=large]) .check-svg{width:24px;height:24px;border-radius:4px}:host([size=small]) .check-svg{width:16px;height:16px}:host([disabled]){pointer-events:none;cursor:default}:host([disabled]) .check-svg{background-color:#f3f3f3;border-color:#eaeaea}:host([disabled][checked]) .check-svg,:host([disabled][indeterminate]) .check-svg{background-color:#84c1e8;border-color:#84c1e8}:host([checked]) .check-svg,:host([indeterminate]) .check-svg{background-color:#007ac2;border:1px solid #007ac2}:host(:focus),:host(:hover){outline:none}:host(:focus) .check-svg,:host(:hover) .check-svg{border-color:#0079c1!important;-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,.075),0 0 5px rgba(81,167,232,.5),0 0 5px rgba(81,167,232,.5);box-shadow:inset 0 1px 2px rgba(0,0,0,.075),0 0 5px rgba(81,167,232,.5),0 0 5px rgba(81,167,232,.5)}"; },
        enumerable: true,
        configurable: true
    });
    return CalciteCheckbox;
}());
export { CalciteCheckbox as calcite_checkbox };
