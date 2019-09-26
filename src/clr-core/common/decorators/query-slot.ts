/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { LitElement } from 'lit-element';

// Slot Query decorators are similar to the query decorator in lit-element.
// Instead of querying the component template they query the content slot of the component.

const legacyQuery = (descriptor: PropertyDescriptor, proto: {}, name: PropertyKey) => {
  Object.defineProperty(proto, name, descriptor);
};

const standardQuery = (descriptor: PropertyDescriptor, element: any) => ({
  kind: 'method',
  placement: 'prototype',
  key: element.key,
  descriptor,
});

/**
 * A property decorator that converts a class property into a getter that
 * executes a querySelector on the element's light DOM Slot.
 *
 * @ExportDecoratedItems
 */
export function querySlot(selector: string) {
  return (
    protoOrDescriptor: {} | any,
    // tslint:disable-next-line:no-any decorator
    name?: PropertyKey
  ): any => {
    const descriptor = {
      get(this: LitElement) {
        return this.querySelector(selector);
      },
      enumerable: true,
      configurable: true,
    };
    return name !== undefined
      ? legacyQuery(descriptor, protoOrDescriptor as {}, name)
      : standardQuery(descriptor, protoOrDescriptor as any);
  };
}

/**
 * A property decorator that converts a class property into a getter
 * that executes a querySelectorAll on the element's light DOM Slot.
 *
 * @ExportDecoratedItems
 */
export function querySlotAll(selector: string) {
  return (
    protoOrDescriptor: {} | any,
    // tslint:disable-next-line:no-any decorator
    name?: PropertyKey
  ): any => {
    const descriptor = {
      get(this: LitElement) {
        return this.querySelectorAll(selector);
      },
      enumerable: true,
      configurable: true,
    };
    return name !== undefined
      ? legacyQuery(descriptor, protoOrDescriptor as {}, name)
      : standardQuery(descriptor, protoOrDescriptor as any);
  };
}
