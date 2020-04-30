/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { KeyCodes, IEKeyCodes } from './../../enums/key-codes.enum';

export function keyValidator(key: string) {
  if (key === KeyCodes.ArrowUp || key === IEKeyCodes.ArrowUp) {
    return KeyCodes.ArrowUp;
  } else if (key === KeyCodes.ArrowDown || key === IEKeyCodes.ArrowDown) {
    return KeyCodes.ArrowDown;
  } else if (key === KeyCodes.ArrowRight || key === IEKeyCodes.ArrowRight) {
    return KeyCodes.ArrowRight;
  } else if (key === KeyCodes.ArrowLeft || key === IEKeyCodes.ArrowLeft) {
    return KeyCodes.ArrowLeft;
  } else if (key === KeyCodes.Space || key === IEKeyCodes.Space) {
    return KeyCodes.Space;
  } else if (key === KeyCodes.Escape || key === IEKeyCodes.Escape) {
    return KeyCodes.Escape;
  } else {
    return key;
  }
}

export function preventArrowKeyScroll(event: KeyboardEvent) {
  const validKey = keyValidator(event.key);

  if (
    validKey === KeyCodes.ArrowUp ||
    validKey === KeyCodes.ArrowDown ||
    validKey === KeyCodes.ArrowLeft ||
    validKey === KeyCodes.ArrowRight
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
