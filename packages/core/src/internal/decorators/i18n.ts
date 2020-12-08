/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { property } from 'lit-element';

// Legacy TS Decorator
function legacyI18n(descriptor: PropertyDescriptor, protoOrDescriptor: {}, name: PropertyKey) {
  const desc = Object.defineProperty(protoOrDescriptor, name, descriptor);
  return property({ type: Object, attribute: 'cds-i18n' })(desc, name);
}

// TC39 Decorators proposal
function standardI18n(descriptor: PropertyDescriptor, element: { key: string }) {
  const desc = {
    kind: 'method',
    placement: 'prototype',
    key: element.key,
    descriptor,
  };

  return property({ type: Object })(desc, name);
}

/**
 * This decorator stores the i18n strings in a private variable __i18n.
 * Due to TypeScript decorators being dynamic a type cast is needed here.
 */
type I18nElement = HTMLElement & { __i18n: {} };

/**
 * A property decorator which accesses a set of string values for use
 * inside the element's template. The values can be overridden at runtime
 * by changing the property value that's reflected through the attribute value.
 *
 * @example
 *
 *     class MyElement {
 *       @i18n()
 *       i18n = {
 *         "open" : "Open my element",
 *         "close" : "Close my element"
 *       };
 *     }
 *
 */
export function i18n() {
  return (protoOrDescriptor: any, name: string): any => {
    const descriptor = {
      get(this: I18nElement) {
        return this.__i18n;
      },
      set(this: I18nElement, value: {}) {
        if (!this.__i18n) {
          this.__i18n = value;
        } else {
          this.__i18n = { ...this.__i18n, ...value };
        }
      },
      enumerable: true,
      configurable: true,
    };

    return name !== undefined
      ? legacyI18n(descriptor, protoOrDescriptor, name)
      : standardI18n(descriptor, protoOrDescriptor);
  };
}
