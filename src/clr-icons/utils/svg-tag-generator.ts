/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

const BADGED_CLASS_SUBSTRING = '--badged';
const ALERTED_CLASS_SUBSTRING = '--alerted';
const SOLID_CLASS = 'clr-i-solid';

export function clrIconSVG(content: string): string {
  let classes: string = '';

  if (content.indexOf(BADGED_CLASS_SUBSTRING) > -1) {
    classes += 'can-badge ';
  }

  if (content.indexOf(ALERTED_CLASS_SUBSTRING) > -1) {
    classes += 'can-alert ';
  }

  if (content.indexOf(SOLID_CLASS) > -1) {
    classes += 'has-solid ';
  }

  let openingTag: string;
  if (classes) {
    openingTag = `<svg version="1.1" class="${classes}" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false" aria-hidden="true" role="img">`;
  } else {
    openingTag = `<svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false" aria-hidden="true" role="img">`;
  }
  const closingTag = `</svg>`;

  return openingTag + content + closingTag;
}
