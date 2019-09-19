/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { __, curryN } from 'ramda';
import { elementExists } from './exists';

const addElementToRegistry = curryN(3, (tagName: string, elementClass: any, registry = window.customElements) => {
  if (elementExists(tagName)) {
    console.warn(`${tagName} has already been registered`);
  } else {
    registry.define(tagName, elementClass);
  }
});

export const registerElementSafely = addElementToRegistry(__, __, window.customElements);
