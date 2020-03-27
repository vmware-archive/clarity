/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

export function getElementWidth(element: HTMLElement, unit = 'px') {
  if (element) {
    return element.getBoundingClientRect ? element.getBoundingClientRect().width + unit : '';
  }
  return '';
}

export function getElementWidthUnless(element: HTMLElement, unless: boolean) {
  if (!unless) {
    return getElementWidth(element);
  }
  return '';
}
