/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import * as DomPurify from "dompurify";

import {ClarityIcons} from "./index";
import {CoreShapes} from "./shapes/core-shapes";


// TODO: open question... should we make whitespace removal part of the icon parsing???
export function removeWhitespace(htmlStr: string): string {
    let returnStr = htmlStr.replace(/[\n|\r]+/g, "");
    returnStr = returnStr.replace(/>[ |\t]+</g, "><");
    returnStr = returnStr.replace(/"[ |\t]+/g, "\" ");
    return returnStr.trim();
}

const sanitizeOptions = {
    SAFE_FOR_TEMPLATES: true,
    FORBID_ATTR: ["style"],
    ALLOWED_TAGS: [
        "img",
        "div",
        "span",
        "svg",
        "animate",
        "animateMotion",
        "animateTransform",
        "circle",
        "clipPath",
        "defs",
        "desc",
        "ellipse",
        "feBlend",
        "feColorMatrix",
        "feComponentTransfer",
        "feComposite",
        "feConvolveMatrix",
        "feDiffuseLighting",
        "feDisplacementMap",
        "feDistantLight",
        "feDropShadow",
        "feFlood",
        "feFuncA",
        "feFuncB",
        "feFuncG",
        "feFuncR",
        "feGaussianBlur",
        "feImage",
        "feMerge",
        "feMergeNode",
        "feMorphology",
        "feOffset",
        "fePointLight",
        "feSpecularLighting",
        "feSpotLight",
        "feTile",
        "feTurbulence",
        "filter",
        "g",
        "line",
        "linearGradient",
        "marker",
        "mask",
        "mpath",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "radialGradient",
        "rect",
        "stop",
        "symbol",
        "text",
        "textPath",
        "title",
        "use",
        "view"
    ],
    ADD_ATTR: ["version", "preserveAspectRatio"]
};

export function testAllShapes(clarityIcons: any, expectedShapes: any): void {
    expect(Object.keys(clarityIcons.get()).length).toEqual(Object.keys(expectedShapes).length);

    for (const shape in expectedShapes) {
        if (expectedShapes.hasOwnProperty(shape)) {
            const myShape = removeWhitespace(DomPurify.sanitize(expectedShapes[shape], sanitizeOptions));
            const expected = removeWhitespace(clarityIcons.get(shape));
            expect(expected).toEqual(myShape);
        }
    }
}

export function resetShapes(): void {
    // Removes all shapes from Clarity Icons, but adds the icons from CoreShapes back at the end
    // because the CoreShapes icons are added by default by ClarityIcons.

    for (const shapeName in ClarityIcons.get()) {
        if (ClarityIcons.get().hasOwnProperty(shapeName)) {
            delete ClarityIcons.get()[shapeName];
        }
    }

    ClarityIcons.add(CoreShapes);
}
