/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { listenForAttributeChange } from './dom.js';
import { isJestTest } from './environment.js';

export function stopEvent(event: Event) {
  event.preventDefault();
  event.stopPropagation();
}

export const getElementUpdates = (element: HTMLElement, propertyKey: string, callback: (value: any) => void) => {
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
