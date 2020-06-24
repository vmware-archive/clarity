/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { createId } from './identity.js';
import { setAttributes } from './dom.js';

export function describeElementByElements(element: HTMLElement, messages: HTMLElement[]) {
  setAttributes(element, [
    'aria-describedby',
    messages.length ? messages.map(m => (m.id = createId())).join(' ') : false,
  ]);
}
