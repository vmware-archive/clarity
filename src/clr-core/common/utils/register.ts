/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import curryN from 'ramda/es/curryN';
import { elementExists, existsInWindow, isBrowser } from './exists';
import { setupCDSGlobal } from './global';

const addElementToRegistry = curryN(
  3,
  (tagName: string, elementClass: any, registry: { define: (a: string, b: any) => {} }) => {
    if (elementExists(tagName)) {
      console.warn(`${tagName} has already been registered`);
    } else {
      registry.define(tagName, elementClass);
      setupCDSGlobal();
      window.CDS._loadedElements.push(tagName);
    }
  }
);

export function registerElementSafely(tagName: string, elementClass: any) {
  if (isBrowser() && existsInWindow(['customElements'])) {
    addElementToRegistry(tagName, elementClass, window.customElements);
  }
}
