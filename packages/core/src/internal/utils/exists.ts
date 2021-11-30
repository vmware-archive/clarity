/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import curryN from 'ramda/es/curryN.js';
import isNil from 'ramda/es/isNil.js';
import path from 'ramda/es/path.js';
import __ from './__.js';

export const existsIn = curryN(2, (pathToCheck: string[], obj: object): boolean => {
  const pathExists = path(pathToCheck, obj);
  return typeof pathExists !== 'undefined';
});

export function elementExists(tagName: string, registry?: CustomElementRegistry): boolean {
  if (!registry) {
    registry = window && window.customElements;
  }
  if (!registry) {
    return true; // we don't want to execute further actions because window does not exist
  }
  return !!registry.get(tagName);
}

export const existsInWindow = existsIn(__, window);

export function isBrowser(win = window) {
  return !isNil(win);
}
