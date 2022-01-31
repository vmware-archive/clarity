/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import curryN from 'ramda/es/curryN.js';
import { isBrowser } from './environment.js';
import { elementExists, existsInWindow } from './exists.js';
import { CDSState, setupCDSGlobal } from './global.js';
import { isStorybook } from './framework.js';
import { LogService } from '../services/log.service.js';

const addElementToRegistry = curryN(
  3,
  (tagName: string, elementClass: any, registry: { define: (a: string, b: any) => Record<string, unknown> }) => {
    if (elementExists(tagName) && !isStorybook()) {
      LogService.warn(`${tagName} has already been registered`);
    } else {
      registry.define(tagName, elementClass);
      setupCDSGlobal();

      if (window && !Object.keys(window.CDS._state.elementRegistry).some(i => i === tagName)) {
        (window.CDS._state as CDSState).elementRegistry = { ...window.CDS._state.elementRegistry, [tagName]: {} };
      }
    }
  }
);

export function registerElementSafely(tagName: string, elementClass: any) {
  if (isBrowser() && existsInWindow(['customElements'])) {
    addElementToRegistry(tagName, elementClass, window.customElements);
  }
}
