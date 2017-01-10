/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { IconTemplate } from "./interfaces/icon-template";
import { ClarityIconsApi } from "./clarity-icons-api";

let allClrIconsShapes: IconTemplate = ClarityIconsApi.instance.get();

/* CLR-ICON CUSTOM ELEMENT */

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

export function ClarityIconElement() {
    "use strict";
    return (parentConstructor as any).apply(this, arguments);
}

(ClarityIconElement as any).observedAttributes = [ "shape", "size" ];

ClarityIconElement.prototype = Object.create(HTMLElement.prototype);

ClarityIconElement.prototype.constructor = ClarityIconElement;

let generateIcon =
    function (element: any, shape: string) {

        shape = shape.split(/\s/)[ 0 ];

        if (shape !== element._shape) {
            element._shape = shape;

            element.innerHTML =
                allClrIconsShapes[ shape ] ||
                (function () {
                    console.error(`'${shape}' is not found in the Clarity Icons set.`);
                    return allClrIconsShapes[ "error" ];
                }());
        }
    };

let setIconSize =
    function (element: any, size: string) {

        if (!Number(size) || Number(size) < 0) {

            element.style.width = null; // fallback to the original stylesheet value
            element.style.height = null; // fallback to the original stylesheet value
        } else {

            element.style.width = size + "px";
            element.style.height = size + "px";
        }

    };

ClarityIconElement.prototype.connectedCallback =
    function () {

        let host = this as HTMLElement;

        if (host.hasAttribute("shape")) {
            generateIcon(host, host.getAttribute("shape"));
        }
        if (host.hasAttribute("size")) {
            setIconSize(host, host.getAttribute("size"));
        }
    };

ClarityIconElement.prototype.attributeChangedCallback =
    function (attributeName: string, oldValue: string, newValue: string) {

        let host = this as HTMLElement;

        if (attributeName === "shape") {
            generateIcon(host, newValue);
        }
        if (attributeName === "size") {
            setIconSize(host, newValue);
        }


    };

