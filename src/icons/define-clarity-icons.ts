import {SVG_ICON_TEMPLATES} from "./svg-icon-templates";

let parentConstructor = function () {
    return HTMLElement.apply(this, arguments);
};
if (typeof Reflect === "object") {
    parentConstructor = function () {
        return (Reflect as any).construct(
            HTMLElement,
            arguments,
            this.constructor
        );
    };
}

function ClarityIcon() {
    "use strict";
    return (parentConstructor as any).apply(this, arguments);
}

(ClarityIcon as any).observedAttributes = ["shape"];
ClarityIcon.prototype = Object.create(HTMLElement.prototype);
ClarityIcon.prototype.constructor = ClarityIcon;
let generateIcon = function (element: any, shape: string) {

    if (shape !== element._shape) {
        element._shape = shape;
        element.innerHTML = SVG_ICON_TEMPLATES[shape] || SVG_ICON_TEMPLATES["warning"];
    }
};
ClarityIcon.prototype.connectedCallback = function () {

    let host = this as HTMLElement;

    if (host.hasAttribute("shape")) {
        generateIcon(host, host.getAttribute("shape"));
    }
};
ClarityIcon.prototype.attributeChangedCallback = function (attributeName: string, oldValue: string, newValue: string) {

    let host = this as HTMLElement;

    if (attributeName === "shape") {
        generateIcon(host, newValue);
    }
};

customElements.define("clr-icon", ClarityIcon);