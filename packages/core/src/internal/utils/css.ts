/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

export function hasClassnames(el: HTMLElement, ...classNames: string[]) {
  return classNames.filter((cn: string) => el.classList.contains(cn)).length === classNames.length;
}

export function addClassnames(el: HTMLElement, ...classNames: string[]): HTMLElement {
  classNames.forEach((cn: string) => {
    el.classList.add(cn);
  });
  return el;
}

export function removeClassnames(el: HTMLElement, ...classNames: string[]): HTMLElement {
  classNames.forEach((cn: string) => {
    el.classList.remove(cn);
  });
  return el;
}

export function removeClassnamesUnless(
  el: HTMLElement,
  classnamesToRemove: string[],
  classnamesToKeep: string[]
): HTMLElement {
  const filteredClassnamesToRemove = classnamesToRemove.filter(cn => classnamesToKeep.indexOf(cn) < 0);
  return removeClassnames(el, ...filteredClassnamesToRemove);
}

export function updateElementStyles(el: HTMLElement, ...styleTuples: [string, string][]): HTMLElement {
  styleTuples.forEach(([styleKey, value]) => {
    (el.style as { [key: string]: any })[styleKey] = value;
  });
  return el;
}

export function pxToRem(pxValue: number) {
  const baseProp = window
    .getComputedStyle(document.body, null)
    .getPropertyValue('--cds-global-typography-base-font-size');
  const baseFontSize = (16 * parseInt(baseProp !== '' ? baseProp : '100%')) / 100;
  return `${pxValue / baseFontSize}rem`;
}
