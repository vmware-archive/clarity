/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { listenForAttributeChange } from './dom.js';

export function stopEvent(event: Event) {
  event.preventDefault();
  event.stopPropagation();
}

export const getElementUpdates = (element: HTMLElement, propertyKey: string, callback: (value: any) => void) => {
  callback(
    (element as any)[propertyKey] !== undefined ? (element as any)[propertyKey] : element.getAttribute(propertyKey)
  );

  const updatedProp = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, propertyKey) as any;
  Object.defineProperty(element, propertyKey, {
    get: updatedProp.get,
    set: val => {
      callback(val);
      updatedProp.set.call(element, val);
    },
  });

  return listenForAttributeChange(element, propertyKey, val => callback(val));
};
