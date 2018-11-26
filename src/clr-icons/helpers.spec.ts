/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ClarityIcons } from './index';
import { CoreShapes } from './shapes/core-shapes';
import { changeHandlerCallbacks } from './utils/shape-template-observer';
import { clrIconSVG } from './utils/svg-tag-generator';

// TODO: open question... should we make whitespace removal part of the icon parsing???
export function removeWhitespace(htmlStr: string): string {
  let returnStr = htmlStr.replace(/[\n|\r]+/g, '');
  returnStr = returnStr.replace(/>[ |\t]+</g, '><');
  returnStr = returnStr.replace(/"[ |\t]+/g, '" ');
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

export function testAllShapesRequiredAttributes(shapes: any): void {
  for (const shape in shapes) {
    if (shapes.hasOwnProperty(shape)) {
      expect((shapes[shape].match(/version=/g) || []).length).toBe(
        1,
        `The version attribute is not specified or duplicated in ${shape}.`
      );
      expect((shapes[shape].match(/preserveAspectRatio=/g) || []).length).toBe(
        1,
        `The preserveAspectRatio attribute is not specified or duplicated in ${shape}.`
      );
      expect((shapes[shape].match(/viewBox=/g) || []).length).toBe(
        1,
        `The viewBox attribute is not specified or duplicated in ${shape}.`
      );
      expect((shapes[shape].match(/xmlns\=('|")http\:\/\/www\.w3\.org\/2000\/svg('|")/g) || []).length).toBe(
        1,
        `The xmlns attribute is not specified or duplicated in ${shape}.`
      );
      expect((shapes[shape].match(/xmlns\:xlink\=('|")http\:\/\/www\.w3\.org\/1999\/xlink('|")/g) || []).length).toBe(
        1,
        `The xmlns:xlink attribute is not specified or duplicated in ${shape}.`
      );
      expect((shapes[shape].match(/focusable=('|")false('|")/g) || []).length).toBe(
        1,
        `The 'focusable="false"' attribute is not specified or duplicated in ${shape}.`
      );
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

export function resetCallbacks(): void {
  for (const callback in changeHandlerCallbacks) {
    if (changeHandlerCallbacks.hasOwnProperty(callback)) {
      delete changeHandlerCallbacks[callback];
    }
  }
}

export function giveAngleShapeTitle(titleId: string, titleTxt: string) {
  return `${clrIconSVG(
    `<path class="clr-i-outline clr-i-outline-path-1" d="M29.52,22.52,18,10.6,6.48,22.52a1.7,1.7,0,0,0,2.45,2.36L18,15.49l9.08,9.39a1.7,1.7,0,0,0,2.45-2.36Z"></path>`
  )}<span class="is-off-screen" id="${titleId}">${titleTxt}</span>`;
}

export function getErrorShape(titleId?: string, titleTxt?: string) {
  const svgTemplate = clrIconSVG(
    `<path class="clr-i-outline clr-i-outline-path-1" d="M18,6A12,12,0,1,0,30,18,12,12,0,0,0,18,6Zm0,22A10,10,0,1,1,28,18,10,10,0,0,1,18,28Z"></path>
            <path class="clr-i-outline clr-i-outline-path-2" d="M18,20.07a1.3,1.3,0,0,1-1.3-1.3v-6a1.3,1.3,0,1,1,2.6,0v6A1.3,1.3,0,0,1,18,20.07Z"></path>
            <circle class="clr-i-outline clr-i-outline-path-3" cx="17.95" cy="23.02" r="1.5"></circle>
            <path class="clr-i-solid clr-i-solid-path-1" d="M18,6A12,12,0,1,0,30,18,12,12,0,0,0,18,6Zm-1.49,6a1.49,1.49,0,0,1,3,0v6.89a1.49,1.49,0,1,1-3,0ZM18,25.5a1.72,1.72,0,1,1,1.72-1.72A1.72,1.72,0,0,1,18,25.5Z"></path>`
  );

  const offScreenSpan = titleTxt ? `<span class="is-off-screen" id="${titleId}">${titleTxt}</span>` : '';

  return svgTemplate + offScreenSpan;
}
