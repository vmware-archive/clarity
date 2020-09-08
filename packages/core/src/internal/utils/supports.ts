/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { isBrowser } from './exists.js';

export function supportsResizeObserver() {
  return isBrowser() && !!window.ResizeObserver;
}

export function supportsFlexGap(): boolean {
  const flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';

  // create two, elements inside it
  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));

  // append to the DOM (needed to obtain scrollHeight)
  document.body.appendChild(flex);
  const isSupported = flex.scrollHeight === 1; // flex container should be 1px high from the row-gap
  (flex.parentNode as Element).removeChild(flex);
  return isSupported;
}
