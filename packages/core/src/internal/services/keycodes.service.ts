/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { deepClone } from '../utils/identity.js';

const enum KeyCodeTypes {
  DEFAULT = 'code',
  IE = 'ie-code',
}

export type KeyCodeValues = Map<'code' | 'ie-code', string>;

export type KeyCodeHashmap = Map<string, KeyCodeValues>;

const keyCodeRegistry: KeyCodeHashmap = new Map([
  [
    'arrow-left',
    new Map([
      [KeyCodeTypes.DEFAULT, 'ArrowLeft'],
      [KeyCodeTypes.IE, 'Left'],
    ]),
  ],
  [
    'arrow-up',
    new Map([
      [KeyCodeTypes.DEFAULT, 'ArrowUp'],
      [KeyCodeTypes.IE, 'Up'],
    ]),
  ],
  [
    'arrow-down',
    new Map([
      [KeyCodeTypes.DEFAULT, 'ArrowDown'],
      [KeyCodeTypes.IE, 'Down'],
    ]),
  ],
  [
    'tab',
    new Map([
      [KeyCodeTypes.DEFAULT, 'Tab'],
      [KeyCodeTypes.IE, 'Tab'],
    ]),
  ],
  [
    'enter',
    new Map([
      [KeyCodeTypes.DEFAULT, 'Enter'],
      [KeyCodeTypes.IE, 'Enter'],
    ]),
  ],
  [
    'escape',
    new Map([
      [KeyCodeTypes.DEFAULT, 'Escape'],
      [KeyCodeTypes.IE, 'Esc'],
    ]),
  ],
  [
    'space',
    new Map([
      [KeyCodeTypes.DEFAULT, ' '],
      [KeyCodeTypes.IE, 'Spacebar'],
    ]),
  ],
  [
    'home',
    new Map([
      [KeyCodeTypes.DEFAULT, 'Home'],
      [KeyCodeTypes.IE, 'Home'],
    ]),
  ],
  [
    'end',
    new Map([
      [KeyCodeTypes.DEFAULT, 'End'],
      [KeyCodeTypes.IE, 'End'],
    ]),
  ],
]);

/**
 * KeyCodes is a static class that gives users the ability to lookup and even store
 * keycodes for their applications.
 *
 * @privateRemarks
 *
 * The key codes dictionary/hashmap is private to this module. There is no way to access it directly
 * outside of the module.
 *
 */
export class KeyCodeService {
  /**
   * keycodes() returns a clone of the key codes dictionary/hashmap, not the actual registry.
   * Performing actions on the return value of the keycodes getter will not be reflected in the
   * actual keycodes dictionary!
   */
  static get keycodes(): KeyCodeHashmap {
    return deepClone(keyCodeRegistry);
  }

  static add(keycode: string, code: string, legacyCode?: string) {
    const keycodeHashValueToStore = new Map([[KeyCodeTypes.DEFAULT, code]]);

    if (legacyCode) {
      keycodeHashValueToStore.set(KeyCodeTypes.IE, legacyCode);
    }

    keyCodeRegistry.set(keycode, keycodeHashValueToStore);
  }

  static has(keycode: string): boolean {
    return keyCodeRegistry.has(keycode);
  }

  static getCode(keycode: string): string {
    return getKeycodeFromRegistry(keycode, KeyCodeTypes.DEFAULT, this.keycodes);
  }

  static getIeCode(keycode: string): string {
    return getKeycodeFromRegistry(keycode, KeyCodeTypes.IE, this.keycodes);
  }
}

export function getKeycodeFromRegistry(
  codeToLookup: string,
  whichCodeType: 'code' | 'ie-code' = KeyCodeTypes.DEFAULT,
  registry = keyCodeRegistry
): string {
  return registry.get(codeToLookup)?.get(whichCodeType) || '';
}
