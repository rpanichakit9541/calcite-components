import { r as registerInstance, h, H as Host, g as getElement } from './index-5091d1f3.js';
var calciteProgressCss = ":host([hidden]){display:none}:host{position:relative;display:block;width:100%}.track,.bar{position:absolute;top:0;height:2px}.track{background:var(--calcite-ui-border-3);z-index:0;width:100%;overflow:hidden}.bar{background-color:var(--calcite-ui-blue-1);z-index:0}.indeterminate{width:20%;-webkit-animation:looping-progress-bar-ani 2200ms linear infinite;animation:looping-progress-bar-ani 2200ms linear infinite}.reversed{animation-direction:reverse}.text{padding:1.5rem 0 0 0;text-align:center;font-size:0.875rem;line-height:1.5}@-webkit-keyframes looping-progress-bar-ani{0%{-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0)}50%{width:40%}100%{-webkit-transform:translate3d(600%, 0, 0);transform:translate3d(600%, 0, 0)}}@keyframes looping-progress-bar-ani{0%{-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0)}50%{width:40%}100%{-webkit-transform:translate3d(600%, 0, 0);transform:translate3d(600%, 0, 0)}}";
var CalciteProgress = /** @class */ (function () {
    function CalciteProgress(hostRef) {
        registerInstance(this, hostRef);
        /** Use indeterminate if finding actual progress value is impossible */
        this.type = "determinate";
        /** Fraction completed, in the range of 0 - 1.0 */
        this.value = 0;
        /** Text label for the progress indicator */
        this.text = null;
        /** For indeterminate progress bars, reverse the animation direction */
        this.reversed = false;
    }
    CalciteProgress.prototype.render = function () {
        var isDeterminate = this.type === "determinate";
        var barStyles = isDeterminate ? { width: this.value * 100 + "%" } : {};
        return (h(Host, null, h("div", { class: "track" }, h("div", { class: {
                bar: true,
                indeterminate: this.type === "indeterminate",
                reversed: this.reversed,
            }, style: barStyles })), this.text ? h("div", { class: "text" }, this.text) : null));
    };
    Object.defineProperty(CalciteProgress.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return CalciteProgress;
}());
CalciteProgress.style = calciteProgressCss;
export { CalciteProgress as calcite_progress };
