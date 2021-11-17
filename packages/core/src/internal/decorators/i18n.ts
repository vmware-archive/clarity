/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { LitElement } from 'lit';
import { property } from './property.js';
import { GlobalStateService } from '../services/global.service.js';
import { I18nService } from '../services/i18n.service.js';
import { isNilOrEmpty, mergeObjects, objectNaiveDeepEquals } from '../utils/identity.js';
import { LogService } from '../services/log.service.js';

// Legacy TS Decorator
function legacyI18n(descriptor: PropertyDescriptor, protoOrDescriptor: Record<string, unknown>, name: PropertyKey) {
  // NOTE: ALWAYS GOES HERE IN STORYBOOK (A.K.A. TS RUNTIME)
  const desc = Object.defineProperty(protoOrDescriptor, name, descriptor);
  return property({ type: Object, attribute: 'cds-i18n' })(desc, name);
  // NOTE: REFLECT DOES NOTHING FOR US HERE
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
type I18nElement = LitElement & { __i18n: Record<string, unknown>; __i18nKey: string };

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
        const i18nObj = mergeObjects((I18nService.keys as any)[this.__i18nKey], this.__i18n || {});
        return I18nService.hydrate(i18nObj, this);
      },
      set(this: I18nElement, value: Record<string, unknown>) {
        const newValues = getI18nValues(value, this);
        const testKey = I18nService.findKey(newValues);
        const strat = getI18nUpdateStrategy(testKey || '', this.__i18nKey, newValues, this.__i18n);

        if (typeof strat.key !== 'undefined') {
          this.__i18nKey = strat.key + '';
        }

        if (typeof strat.values !== 'undefined') {
          this.__i18n = { ...strat.values };
        }

        if (strat.update === true) {
          this.requestUpdate();
        }

        this.requestUpdate(name);
      },
      enumerable: true,
      configurable: true,
    };

    return name !== undefined
      ? legacyI18n(descriptor, protoOrDescriptor, name)
      : standardI18n(descriptor, protoOrDescriptor);
  };
}

export function getI18nValues(values: Record<string, unknown>, component: I18nElement): Record<string, unknown> {
  if (isNilOrEmpty(values)) {
    let returnVal = {};

    if (component.hasAttribute('cds-i18n')) {
      const stringVal = component.getAttribute('cds-i18n') + '';
      if (isNilOrEmpty(stringVal)) {
        returnVal = {};
      } else {
        try {
          returnVal = JSON.parse(stringVal);
        } catch {
          LogService.warn('Clarity i18n: Invalid JSON passed to cds-i18n');
          returnVal = {};
        }
      }
    }
    return returnVal;
  } else {
    return values;
  }
}

export function getI18nUpdateStrategy(
  newKey: string,
  oldKey: string,
  newValues: Record<string, unknown>,
  oldValues: Record<string, unknown>
): { values?: object; key?: string; update: boolean } {
  if (!isNilOrEmpty(newKey)) {
    if (newKey === oldKey) {
      return { update: false, values: {} };
    } else {
      return { update: true, key: newKey, values: {} };
    }
  } else if (!objectNaiveDeepEquals(newValues, oldValues)) {
    return { update: true, values: newValues };
  }

  return { update: false };
}
