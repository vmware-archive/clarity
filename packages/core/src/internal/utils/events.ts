/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { isJestTest } from './environment.js';

export function stopEvent(event: Event) {
  event.preventDefault();
  event.stopPropagation();
}

export const getElementUpdates = (
  element: HTMLElement,
  propertyKey: string,
  callback: (value: any) => void
): MutationObserver => {
  if (element.hasAttribute(propertyKey)) {
    callback(element.getAttribute(propertyKey));
  } else if ((element as any)[propertyKey] !== undefined) {
    callback((element as any)[propertyKey]);
  }

  // React: disable input tracker to setup property observer. React re-creates tracker on input changes
  // https://github.com/facebook/react/blob/9198a5cec0936a21a5ba194a22fcbac03eba5d1d/packages/react-dom/src/client/inputValueTracking.js#L51
  // https://github.com/vmware/clarity/issues/5625
  if ((element as any)._valueTracker && (propertyKey === 'checked' || propertyKey === 'value')) {
    (element as any)._valueTracker = null;
  }

  const updatedProp = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(element), propertyKey) as any;

  //  Jest and JSDom breaks defining a new property, so skip
  if (updatedProp && !isJestTest()) {
    Object.defineProperty(element, propertyKey, {
      get: updatedProp.get,
      set: val => {
        callback(val);
        updatedProp.set.call(element, val);
      },
    });
  }

  return listenForAttributeChange(element, propertyKey, val => callback(val));
};

export function onFirstInteraction(element: HTMLElement): Promise<null> {
  return new Promise(resolve => {
    const update = () => {
      resolve(null);
      (element as any).__cdsTouched = true;
    };

    if ((element as any).__cdsTouched) {
      resolve(null);
    }

    element.addEventListener('mouseover', update, { once: true, passive: true });
    element.addEventListener('touchstart', update, { once: true, passive: true }); // avoid click related events to prevent SRs like NVDA from anouncing "clickable" https://github.com/nvaccess/nvda/issues/5830
    element.addEventListener('keydown', update, { once: true, passive: true });
    element.addEventListener('focus', update, { once: true, passive: true });
  });
}

export function onChildListMutation(element: HTMLElement, fn: (mutation?: MutationRecord) => void) {
  const observer = new MutationObserver(mutations => {
    for (const mutation of mutations) {
      if (mutation.type === 'childList') {
        fn(mutation);
      }
    }
  });
  observer.observe(element, { childList: true });
  return observer;
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

export function listenForAttributeListChange(
  element: HTMLElement,
  attrNames: string[],
  fn: (attrValue: string | null) => void
): MutationObserver {
  const observer = new MutationObserver(mutations => {
    const mutation = mutations.find(m => attrNames.find(i => m.attributeName === i));
    if (mutation) {
      fn(element.getAttribute(mutation.attributeName as string));
    }
  });

  observer.observe(element, { attributes: true, attributeFilter: attrNames, subtree: true });
  return observer;
}
