/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { property } from 'lit/decorators/property.js';
import { GlobalStateService } from '../services/global.service.js';
import { I18nService } from '../services/i18n.service.js';

// Legacy TS Decorator
function legacyI18n(descriptor: PropertyDescriptor, protoOrDescriptor: Record<string, unknown>, name: PropertyKey) {
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

  return property({ type: Object })(desc);
}

/**
 * This decorator stores the i18n strings in a private variable __i18n.
 * Due to TypeScript decorators being dynamic a type cast is needed here.
 */
type I18nElement = HTMLElement & { __i18n: Record<string, unknown>; __i18nKey: string };

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
    const targetConnectedCallback: () => void = protoOrDescriptor.connectedCallback;
    const targetDisconnectedCallback: () => void = protoOrDescriptor.disconnectedCallback;

    function connectedCallback(this: any): void {
      protoOrDescriptor.__i18nSub = GlobalStateService.stateUpdates.subscribe(update => {
        if (update.key === 'i18nRegistry') {
          this.requestUpdate(name);
        }
      });

      if (targetConnectedCallback) {
        targetConnectedCallback.apply(this);
      }
    }

    function disconnectedCallback(this: any) {
      protoOrDescriptor.__i18nSub.unsubscribe();

      if (targetDisconnectedCallback) {
        targetDisconnectedCallback.apply(this);
      }
    }

    protoOrDescriptor.connectedCallback = connectedCallback;
    protoOrDescriptor.disconnectedCallback = disconnectedCallback;

    const descriptor = {
      get(this: I18nElement) {
        return { ...(I18nService.keys as any)[this.__i18nKey], ...this.__i18n };
      },
      set(this: I18nElement, value: Record<string, unknown>) {
        (this.__i18nKey as any) = Object.keys(I18nService.keys).find(key => (I18nService.keys as any)[key] === value);

        if (!this.__i18nKey) {
          this.__i18n = value;
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
