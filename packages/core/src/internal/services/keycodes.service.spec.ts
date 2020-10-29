/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { getKeycodeFromRegistry, KeyCodeService } from './keycodes.service.js';

describe('Keycode Service Utility Functions – ', () => {
  const registry = KeyCodeService.keycodes;
  const upCode = registry.get('arrow-up');
  const homeCode = registry.get('home');
  const escCode = registry.get('escape');

  describe('getKeycodeFromRegistry(): ', () => {
    it('retrieves known keycodes', () => {
      expect(getKeycodeFromRegistry('arrow-up', registry)).toBe(upCode);
      expect(getKeycodeFromRegistry('escape', registry)).toBe(escCode);
      expect(getKeycodeFromRegistry('home', registry)).toBe(homeCode);
    });

    it('retrieves expected value for spacebar keycode', () => {
      expect(getKeycodeFromRegistry('space', registry)).toBe(' ');
    });
  });

  describe('KeyCodeService – ', () => {
    describe('keycodes: ', () => {
      it('retrieves a copy of the keycodes registry', () => {
        const clonedRegistry = KeyCodeService.keycodes;
        clonedRegistry.set('ohai', 'iello');
        expect(clonedRegistry.has('ohai') && clonedRegistry.get('ohai') === 'iello').toBe(
          true,
          'successfully set value on clone'
        );
        expect(KeyCodeService.has('ohai')).toBe(false, 'value was not added to actual registry');
      });
    });

    describe('add(): ', () => {
      it('can add a value to the registry', () => {
        KeyCodeService.add('mytzlplk', 'wassup');
        expect(KeyCodeService.has('mytzlplk')).toBe(true, 'value added to registry');
        expect(KeyCodeService.getCode('mytzlplk')).toBe('wassup', 'value retrievable from registry');
        KeyCodeService.add('mytzlplk', 'ohai');
        expect(KeyCodeService.has('mytzlplk')).toBe(true, 'double-add to still be in registry');
        expect(KeyCodeService.getCode('mytzlplk')).toBe('ohai', 'value updated in registry');
      });
    });

    describe('has(): ', () => {
      it('can check to see if values are in the registry', () => {
        expect(KeyCodeService.has('arrow-left')).toBe(true, 'finds known values');
        expect(KeyCodeService.has('jabberwocky')).toBe(false, 'tells us if a value is not in the registry');
      });
    });

    describe('getCode(): ', () => {
      it('looks up modern keycodes in registry', () => {
        expect(KeyCodeService.getCode('arrow-left')).toBe('ArrowLeft', 'finds known values');
        expect(KeyCodeService.getCode('jabberwocky')).toBe(
          '',
          'returns empty string if a value is not in the registry'
        );
      });
    });
  });
});
