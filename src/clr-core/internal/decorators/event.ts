/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

export interface EventOptions {
  /** indicate if event bubbles up through the DOM or not */
  bubbles?: boolean;
  /** indicate if event is cancelable */
  cancelable?: boolean;
  /** indicate if event can bubble across the boundary between the shadow DOM and the light DOM */
  composed?: boolean;
}

export class EventEmitter<T> {
  constructor(private target: HTMLElement, private eventName: string) {}

  emit(value: T, options?: EventOptions) {
    this.target.dispatchEvent(
      new CustomEvent<T>(this.eventName, { detail: value, ...options })
    );
  }
}

// Legacy TS Decorator
function legacyEvent(descriptor: PropertyDescriptor, protoOrDescriptor: {}, name: PropertyKey) {
  Object.defineProperty(protoOrDescriptor, name, descriptor);
}

// TC39 Decorators proposal
function standardEvent(descriptor: PropertyDescriptor, element: { key: string }) {
  return {
    kind: 'method',
    placement: 'prototype',
    key: element.key,
    descriptor,
  };
}

export function event() {
  return (protoOrDescriptor: any, name: string): any => {
    const descriptor = {
      get(this: HTMLElement) {
        return new EventEmitter(this, name !== undefined ? name : protoOrDescriptor.key);
      },
      enumerable: true,
      configurable: true,
    };

    return name !== undefined
      ? legacyEvent(descriptor, protoOrDescriptor, name)
      : standardEvent(descriptor, protoOrDescriptor);
  };
}
