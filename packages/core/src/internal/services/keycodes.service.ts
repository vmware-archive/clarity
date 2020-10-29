/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { deepClone } from '../utils/identity.js';

export type KeyCodeValues = Map<string, string>;

const keyCodeRegistry: KeyCodeValues = new Map([
  ['arrow-left', 'ArrowLeft'],
  ['arrow-right', 'ArrowRight'],
  ['arrow-up', 'ArrowUp'],
  ['arrow-down', 'ArrowDown'],
  ['tab', 'Tab'],
  ['enter', 'Enter'],
  ['escape', 'Escape'],
  ['space', ' '],
  ['home', 'Home'],
  ['end', 'End'],
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
  static get keycodes(): KeyCodeValues {
    return deepClone(keyCodeRegistry);
  }

  static add(keycode: string, code: string) {
    keyCodeRegistry.set(keycode, code);
  }

  static has(keycode: string): boolean {
    return keyCodeRegistry.has(keycode);
  }

  static getCode(keycode: string, keyCodeRegistry = this.keycodes): string {
    return getKeycodeFromRegistry(keycode, keyCodeRegistry);
  }
}

export function getKeycodeFromRegistry(codeToLookup: string, registry: KeyCodeValues): string {
  return registry.get(codeToLookup) || '';
}
