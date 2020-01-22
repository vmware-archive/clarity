/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

export function getElementWidth(element: HTMLElement, unit = 'px') {
  return element.getBoundingClientRect ? element.getBoundingClientRect().width + unit : '';
}

export function getElementWidthUnless(element: HTMLElement, unless: boolean) {
  if (!unless) {
    return getElementWidth(element);
  }
  return '';
}
export function getTranslateForChromeRenderingBugUnless(unless: boolean) {
  const translateFix = 'translateZ(0px)';
  if (!unless) {
    return translateFix;
  }
  return '';
}

export function toggleDisabledAttribute(el: HTMLElement, off: boolean) {
  if (off) {
    el.removeAttribute('disabled');
  } else {
    el.setAttribute('disabled', '');
  }
}
