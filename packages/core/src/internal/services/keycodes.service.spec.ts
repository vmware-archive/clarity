/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { getKeycodeFromRegistry, KeyCodeService } from './keycodes.service.js';

describe('Keycode Service Utility Functions – ', () => {
  const registry = KeyCodeService.keycodes;
  const modernUpCode = registry.get('arrow-up').get('code');
  const ieUpCode = registry.get('arrow-up').get('ie-code');
  const modernHomeCode = registry.get('home').get('code');
  const ieHomeCode = registry.get('home').get('ie-code');
  const modernEscCode = registry.get('escape').get('code');
  const ieEscCode = registry.get('escape').get('ie-code');

  describe('getKeycodeFromRegistry(): ', () => {
    it('retrieves known keycodes', () => {
      expect(getKeycodeFromRegistry('arrow-up', 'code')).toBe(modernUpCode);
      expect(getKeycodeFromRegistry('escape', 'code')).toBe(modernEscCode);
      expect(getKeycodeFromRegistry('home', 'code')).toBe(modernHomeCode);
    });

    it('defaults to looking up modern codes', () => {
      expect(getKeycodeFromRegistry('arrow-up')).toBe(modernUpCode);
      expect(getKeycodeFromRegistry('escape')).toBe(modernEscCode);
      expect(getKeycodeFromRegistry('home')).toBe(modernHomeCode);
    });

    it('correctly retrieves IE11 keycodes', () => {
      expect(getKeycodeFromRegistry('arrow-up', 'ie-code')).toBe(ieUpCode);
      expect(getKeycodeFromRegistry('escape', 'ie-code')).toBe(ieEscCode);
      expect(getKeycodeFromRegistry('home', 'ie-code')).toBe(ieHomeCode);
    });

    it('retrieves expected value for spacebar keycode', () => {
      expect(getKeycodeFromRegistry('space', 'code')).toBe(' ');
      expect(getKeycodeFromRegistry('space', 'ie-code')).toBe('Spacebar');
    });
  });

  describe('KeyCodeService – ', () => {
    describe('keycodes: ', () => {
      it('retrieves a copy of the keycodes registry', () => {
        const clonedRegistry = KeyCodeService.keycodes;
        clonedRegistry.set(
          'ohai',
          new Map([
            ['code', 'iello'],
            ['ie-code', 'nope'],
          ])
        );
        expect(clonedRegistry.has('ohai') && clonedRegistry.get('ohai').get('code') === 'iello').toBe(
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
        expect(KeyCodeService.getIeCode('mytzlplk')).toBe('', 'unspecified legacy value not added to registry');
        KeyCodeService.add('mytzlplk', 'ohai', 'thanx');
        expect(KeyCodeService.has('mytzlplk')).toBe(true, 'double-add to still be in registry');
        expect(KeyCodeService.getCode('mytzlplk')).toBe('ohai', 'value updated in registry');
        expect(KeyCodeService.getIeCode('mytzlplk')).toBe('thanx', 'legacy value added to registry');
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

    describe('getIeCode(): ', () => {
      it('looks up legacy keycodes in registry', () => {
        expect(KeyCodeService.getIeCode('arrow-left')).toBe('Left', 'finds known values');
        expect(KeyCodeService.getIeCode('jabberwocky')).toBe(
          '',
          'returns empty string if a value is not in the registry'
        );
      });
    });
  });
});
