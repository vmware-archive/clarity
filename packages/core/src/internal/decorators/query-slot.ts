/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { LitElement } from 'lit-element';
import { LogService } from '../services/log.service.js';

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

export interface QuerySlotConfig {
  required?: 'error' | 'warning';
  requiredMessage?: string;
  /** auto assign found element to a particular slot */
  assign?: string;
}

/**
 * A property decorator that converts a class property into a getter that
 * executes a querySelector on the element's light DOM Slot.
 *
 * @ExportDecoratedItems
 */
export function querySlot(selector: string, config?: QuerySlotConfig) {
  return (protoOrDescriptor: {} | any, name?: PropertyKey): any => {
    const targetFirstUpdated: () => void = protoOrDescriptor.firstUpdated;

    function firstUpdated(this: any): void {
      const ref = this.querySelector(selector);

      if (!ref && config?.required) {
        const message =
          config.requiredMessage ||
          `The <${selector}> element is required to use <${this.tagName.toLocaleLowerCase()}>`;
        if (config.required === 'error') {
          throw new Error(message);
        } else {
          LogService.warn(message, this);
        }
      }

      if (config?.assign && ref?.hasAttribute('slot') === false) {
        ref.setAttribute('slot', config.assign);
      }

      if (targetFirstUpdated) {
        targetFirstUpdated.apply(this);
      }
    }

    protoOrDescriptor.firstUpdated = firstUpdated;

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
export function querySlotAll(selector: string, config?: QuerySlotConfig) {
  return (protoOrDescriptor: {} | any, name?: PropertyKey): any => {
    const targetFirstUpdated: () => void = protoOrDescriptor.firstUpdated;

    function firstUpdated(this: any, props: Map<string, any>): void {
      if (config?.assign) {
        Array.from(this.querySelectorAll(selector))
          .filter((i: any) => !i.hasAttribute('slot'))
          .forEach((i: any) => i.setAttribute('slot', config.assign as string));
      }

      if (targetFirstUpdated) {
        targetFirstUpdated.apply(this, [props]);
      }
    }

    protoOrDescriptor.firstUpdated = firstUpdated;

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
