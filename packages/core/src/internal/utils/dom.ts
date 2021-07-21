/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import includes from 'ramda/es/includes.js';
import without from 'ramda/es/without.js';

import { getCssPropertyValue } from './css.js';
import { pluckPixelValue, transformSpacedStringToArray } from './string.js';
import { isNumericString, isStringAndNotNilOrEmpty } from './identity.js';

/**
 * We are not going to be opinionated about the use of the disabled attribute here.
 * Browsers will manage that on their own. The focus of this is to determine whether
 * or not a tabindex should be set on an element to make it programmatically
 * focusable.
 *
 */
export function isFocusable(element: HTMLElement) {
  /* c8 ignore next 21 */
  switch (element.tagName.toLowerCase()) {
    case 'input':
      return (
        element.getAttribute('type') !== 'hidden' &&
        !element.hasAttribute('disabled') &&
        !element.hasAttribute('readonly')
      );
    case 'button':
    case 'select':
    case 'textarea':
      return !element.hasAttribute('disabled');
    case 'iframe':
    case 'embed':
    case 'object':
      return true;
    case 'a':
    case 'area':
      return element.hasAttribute('href');
    case 'audio':
    case 'video':
      return element.hasAttribute('controls');
    default:
      // we are not going to get into invalid values sent to the
      // tabindex attr. users have control of that and should avoid
      // setting tabindex to weird/unsupported values.
      return (
        element.hasAttribute('tabindex') ||
        element.getAttribute('contenteditable') === 'true' ||
        (element.getAttribute('role') === 'button' && !element.hasAttribute('disabled'))
      );
  }
}

/* c8 ignore next */
export function isScrollable(element: HTMLElement) {
  // there's no great way to determine if something has scrollbars or not
  // this calculation is... okay at it. it is slightly naive but covers
  // our current need/use-case. if we need something more robust, we can
  // update this function to use one of the more complicated checks.
  const boundingRect = element.getBoundingClientRect();
  return (
    boundingRect.top < 0 ||
    element.scrollHeight > element.offsetHeight ||
    boundingRect.left < 0 ||
    element.scrollWidth > element.clientWidth
  );
}

/**
 * Works only on light DOM because that is all we have needed it for thus far
 *
 */
/* c8 ignore next */
export function queryAllFocusable(element: HTMLElement) {
  return element.querySelectorAll(tabFlowSelectors.join(', '));
}

const nonTabIndexFocusableSelectors = [
  'a[href]',
  'area[href]',
  'audio[controls]',
  'button:not([disabled])',
  'input:not([type="hidden"]):not([disabled]):not([readonly])',
  'iframe',
  'object',
  'embed',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'video[controls]',
  '*[contenteditable=true]',
  '[role=button]:not([disabled])',
];

export const focusableSelectors = ['*[tabindex]', ...nonTabIndexFocusableSelectors];

export const tabFlowSelectors = ['*[tabindex]:not([tabindex="-1"])', ...nonTabIndexFocusableSelectors];

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

export function isHTMLElement(el: any) {
  return !!el && el instanceof HTMLElement;
}

export type HTMLAttributeTuple = [string, string | boolean];

export function hasAttributeAndIsNotEmpty(element: HTMLElement | null, attribute: string) {
  return !!element && element.hasAttribute(attribute) && isStringAndNotNilOrEmpty(element.getAttribute(attribute));
}

export function setOrRemoveAttribute(element: HTMLElement, attrTuple: HTMLAttributeTuple, test: () => boolean) {
  const [attribute, value] = attrTuple;
  if (test()) {
    setAttributes(element, [attribute, value]);
  } else {
    removeAttributes(element, attribute);
  }
}

export function setAttributes(element: HTMLElement, ...attributeTuples: HTMLAttributeTuple[]) {
  if (element) {
    attributeTuples.forEach(([attr, val]) => {
      if (val === false || val === null) {
        element.removeAttribute(attr);
      } else {
        element.setAttribute(attr, val + '');
      }
    });
  }
}

export function removeAttributes(element: HTMLElement, ...attrs: string[]) {
  if (element) {
    attrs.forEach(attr => {
      element.removeAttribute(attr);
    });
  }
}

export function addAttributeValue(element: HTMLElement, attr: string, value: string) {
  if (element) {
    const currentAttrVal = element.getAttribute(attr);
    if (!currentAttrVal) {
      element.setAttribute(attr, value);
    } else if (!includes(value, currentAttrVal.split(' '))) {
      // add it only if it is not already there
      element.setAttribute(attr, currentAttrVal + ' ' + value);
    }
  }
}

export function removeAttributeValue(element: HTMLElement, attr: string, value: string) {
  if (element) {
    const currentAttrVal = element.getAttribute(attr);
    if (currentAttrVal) {
      // remove the specified value from the list of values currently set
      const attrValues: string[] = without([value], transformSpacedStringToArray(currentAttrVal));
      const newAttrValue = attrValues.join(' ');

      if (newAttrValue) {
        element.setAttribute(attr, newAttrValue);
      } else {
        element.removeAttribute(attr);
      }
    }
  }
}

export function assignSlotNames(...slotTuples: [HTMLElement, string | boolean][]): void {
  slotTuples.forEach(slotTuple => {
    const [el, slotName] = slotTuple;
    if (el) {
      setAttributes(el, ['slot', slotName]);
    }
  });
}

export function isVisible(element: HTMLElement) {
  return !!element && element?.offsetHeight > 0 && element?.hasAttribute('hidden') === false;
}

export function spanWrapper(nodeList: NodeListOf<ChildNode>): void {
  Array.from(nodeList)
    .filter(node => node.textContent && node.textContent.trim().length > 0 && node.nodeType === 3 && node.parentElement)
    .forEach(node => {
      const spanWrapper = document.createElement('span');
      node.after(spanWrapper);
      spanWrapper.appendChild(node);
    });
}

export function queryChildFromLightOrShadowDom(hostEl: HTMLElement, selector?: string): HTMLElement | null {
  if (!selector) {
    return null;
  }

  return hostEl.querySelector(selector) || hostEl?.shadowRoot?.querySelector(selector) || null;
}

export function createFragment(tagString: string) {
  return document.createRange().createContextualFragment(tagString);
}

export function getWindowDimensions(win: Window = window): { width: number; height: number } {
  const doc = win?.document;
  const h = win?.innerHeight || doc?.documentElement?.clientHeight || 0;
  const w = win?.innerWidth || doc?.documentElement?.clientWidth || 0;
  return { width: w, height: h };
}

export function windowIsAboveMobileBreakpoint(breakpointAsPixelValue?: string): boolean {
  const breakpointVal =
    breakpointAsPixelValue || (getCssPropertyValue('--cds-global-layout-width-xs') as string).trim();
  return breakpointAsPixelValue?.endsWith('px') ? pluckPixelValue(breakpointVal) >= getWindowDimensions().width : false;
}

export function getShadowRootOrElse(hostEl: HTMLElement, fallbackEl?: HTMLElement): HTMLElement {
  const fallTo = fallbackEl ? fallbackEl : hostEl;
  return (hostEl.shadowRoot ? hostEl.shadowRoot : fallTo) as HTMLElement;
}

export function isElementTextInputType(e: HTMLInputElement) {
  return /^(?:input|select|textarea)$/i.test(e.nodeName) && e.type !== 'radio' && e.type !== 'checkbox';
}

export function getInputValueType(value: string) {
  if (isNumericString(value)) {
    return 'number';
  } else if (value.match(/^\d{4}-\d{1,2}-\d{1,2}$/)) {
    return 'date';
  } else {
    return 'text';
  }
}
