/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {ClarityIcons} from "./index";
import {CoreShapes} from "./shapes/core-shapes";


// TODO: open question... should we make whitespace removal part of the icon parsing???
export function removeWhitespace(htmlStr: string): string {
    let returnStr = htmlStr.replace(/[\n|\r]+/g, "");
    returnStr = returnStr.replace(/>[ |\t]+</g, "><");
    returnStr = returnStr.replace(/"[ |\t]+/g, "\" ");
    return returnStr.trim();
}

export function testAllShapes(clarityIcons: any, expectedShapes: any): void {
    expect(Object.keys(clarityIcons.get()).length).toEqual(Object.keys(expectedShapes).length);

    for (const shape in expectedShapes) {
        if (expectedShapes.hasOwnProperty(shape)) {
            const myShape = removeWhitespace(expectedShapes[shape]);
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
