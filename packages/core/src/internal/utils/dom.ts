/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import includes from 'ramda/es/includes';
import without from 'ramda/es/without';

import { isStringAndNotNilOrEmpty } from './identity.js';

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

// TODO: TESTME!
export function setOrRemoveAttribute(element: HTMLElement, attrTuple: HTMLAttributeTuple, test: () => boolean) {
  const [attribute, value] = attrTuple;
  console.log('ohai: element = ', element, '; tuple = ', attribute, ', ', value, '; did i pass my test? ', test());
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
      const attrValues: string[] = without([value], currentAttrVal.split(' '));
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

export function listenForAttributeChange(
  element: HTMLElement,
  attrName: string,
  fn: (attrValue: string | null) => void
) {
  const observer = new MutationObserver(mutations => {
    if (mutations.find(m => m.attributeName === attrName)) {
      fn(element.getAttribute(attrName));
    }
  });

  observer.observe(element, { attributes: true });
  return observer;
}

export function isVisible(element: HTMLElement) {
  return element?.offsetHeight > 0 && element?.hasAttribute('hidden') === false;
}

export function spanWrapper(nodeList: NodeListOf<ChildNode>): void {
  Array.from(nodeList)
    .filter(node => {
      return node.textContent && node.textContent.trim().length > 0;
    })
    .forEach(node => {
      if (node.parentElement && node.textContent !== null && node.nodeType === 3) {
        const spanWrapper = document.createElement('span');
        node.after(spanWrapper);
        spanWrapper.appendChild(node);
      }
    });
}
