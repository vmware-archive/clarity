/*
* Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
* This software is released under MIT license.
* The full license information can be found in LICENSE in the root directory of this project.
*/

import { KeyCodes, IEKeyCodes } from './../key-codes.enum';

export function preventArrowKeyScroll(event: KeyboardEvent) {
  const keyCodes = getKeyCodes(event);

  if (
    event.key === keyCodes.ArrowUp ||
    event.key === keyCodes.ArrowDown ||
    event.key === keyCodes.ArrowLeft ||
    event.key === keyCodes.ArrowRight
  ) {
    // prevent element container scroll
    // MDN references this is really the only way to prevent native browser interactions
    // https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets
    event.preventDefault();
  }
}

export function getKeyCodes(event: KeyboardEvent) {
  // IE does not properly follow the spec for `event.key` so we need to return a different enum for the key events
  // We use `event.key` for optimal browser support, to detect IE/Edge check if `event.code` is undefined
  const isIEKeyboardEvent = event.code === undefined;
  return isIEKeyboardEvent ? IEKeyCodes : KeyCodes;
}
