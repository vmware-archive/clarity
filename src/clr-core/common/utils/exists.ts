/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import curryN from 'ramda/es/curryN';
import path from 'ramda/es/path';
import __ from './__';

export const existsIn = curryN(2, (pathToCheck: string[], obj: object): boolean => {
  const pathExists = path(pathToCheck, obj);
  return typeof pathExists !== 'undefined';
});

export function elementExists(tagName: string, registry = window.customElements): boolean {
  return !!registry.get(tagName);
}

export const existsInWindow = existsIn(__, window);
