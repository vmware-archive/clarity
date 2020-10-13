/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { KeyCodeService } from '../services/keycodes.service.js';

/**
 * keyWasEvented() checks to see if a given key is part of any KeyboardEvent it is passed.
 */
export function keyWasEvented(evt: KeyboardEvent, whichKey: string) {
  // evt.key support goes all the way back to IE9; we don't need evt.keyCode for IE support!
  return KeyCodeService.getCode(whichKey) === evt.key;
}

/**
 * checkModifierKey() tests if a special key (Ctrl, Alt, Meta, Shift) part of a KeyboardEvent.
 */
function checkModifierKey(evt: KeyboardEvent, key: string) {
  switch (key) {
    case 'ctrl':
      return evt.ctrlKey;
    case 'alt':
      return evt.altKey;
    case 'shift':
      return evt.shiftKey;
    case 'cmd':
    case 'win':
    case 'meta':
      return evt.metaKey;
    default:
      return false;
  }
}

// handlers -> single keys or any of a collection of keys

/**
 * onKey() takes a single key and fires a handler if that key is part of
 * the KeyboardEvent it was passed.
 */
export function onKey(whichKey: string, evt: KeyboardEvent, handler: any) {
  if (keyWasEvented(evt, whichKey)) {
    handler();
  }
}

/**
 * onAnyKey() takes an array of keys and fires a handler if any of the keys are part of
 * the KeyboardEvent it was passed.
 */
export function onAnyKey(whichKeys: string[], evt: KeyboardEvent, handler: any) {
  const eventedKeys = whichKeys.filter(k => {
    return keyWasEvented(evt, k);
  });

  if (eventedKeys.length > 0) {
    handler();
  }
}

// key combos

/**
 * onKeyCombo() takes a string representation of a combination of keys and modifier keys such as
 * 'ctrl+shift+a'.
 *
 * onKeyCombo() does not make accommodation for the '+' symbol in a key combo. Consider using 'ctrl+shift+='.
 *
 * onKeyCombo() accounts for 'cmd', 'win', and 'meta' keys inside keycombos. 'cmd+K', 'win+K', and 'meta+K'
 * are all the same thing to onKeyCombo().
 */
export function onKeyCombo(whichKeyCombo: string, evt: KeyboardEvent, handler: any) {
  if (wereModifierComboKeysPressed(whichKeyCombo, evt) && wereNonModifierComboKeysPressed(whichKeyCombo, evt)) {
    handler();
  }
}

// key combo helpers

const modifierKeys = ['ctrl', 'alt', 'shift', 'meta', 'cmd', 'win'];

/**
 * getModifierKeysFromKeyCombo() takes a keycombo string and returns an array with all of the
 * special keys in the keycombo.
 */
export function getModifierKeysFromKeyCombo(keyCombo: string) {
  // note: at some point, we may have to handle a situation of 'ctrl++' or 'ctrl+plus'
  // it's unlikely so i'm not over-coding for it right now
  return keyCombo.split('+').filter(k => {
    return modifierKeys.indexOf(k) > -1;
  });
}

/**
 * removeModifierKeysFromKeyCombo() takes a keycombo string and returns an array with all of the
 * non-special keys in the keycombo.
 */
export function removeModifierKeysFromKeyCombo(keyCombo: string) {
  return keyCombo.split('+').filter(k => {
    return modifierKeys.indexOf(k) < 0;
  });
}

/**
 * wereModifierComboKeysPressed() tests if ALL special keys (Ctrl, Alt, Meta, Shift) were included
 * as part of a KeyboardEvent keycombo.
 *
 * @private
 *
 */
function wereModifierComboKeysPressed(keyCombo: string, evt: KeyboardEvent) {
  const modifierKeyArray = getModifierKeysFromKeyCombo(keyCombo);

  if (modifierKeyArray.length === 0) {
    return true;
  }

  return modifierKeyArray.reduce((acc: boolean, currentKey: string) => acc && checkModifierKey(evt, currentKey), true);
}

/**
 * wereNonModifierComboKeysPressed() tests if non-special keys (Ctrl, Alt, Meta, Shift) were included
 * as part of a KeyboardEvent.
 *
 * @private
 *
 */
function wereNonModifierComboKeysPressed(keyCombo: string, evt: KeyboardEvent): boolean {
  const keyArray = removeModifierKeysFromKeyCombo(keyCombo);

  if (keyArray.length === 0) {
    return true;
  }

  return keyArray.reduce((acc: boolean, currentKey: string) => acc && keyWasEvented(evt, currentKey), true);
}
