/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { componentStringsDefault, I18nService } from './i18n.service.js';

describe('I18nService', () => {
  const closeButtonAriaLabelText = 'close this alert';
  const customText = "custom text for a key that doesn't exist by default.";

  beforeEach(() => {
    I18nService.reset();
  });

  it('should provide default values', () => {
    expect(I18nService.keys.dropdown).toEqual(componentStringsDefault.dropdown);
  });

  it('should allow override of default values', () => {
    expect(I18nService.keys.alert.closeButtonAriaLabel).toEqual(componentStringsDefault.alert.closeButtonAriaLabel);
    I18nService.localize({
      alert: { closeButtonAriaLabel: closeButtonAriaLabelText },
    });
    expect(I18nService.keys.alert.closeButtonAriaLabel).toEqual(closeButtonAriaLabelText);
  });

  it('should allow adding new key and values', () => {
    I18nService.localize({
      custom: {
        foo: { bar: customText },
      },
    });
    expect(I18nService.keys.custom.foo).toBeDefined();
    expect(I18nService.keys.custom.foo.bar).toBeDefined();
    expect(I18nService.keys.custom.foo.bar).toEqual(customText);
  });

  describe('get()', () => {
    it('should return key objects as expected', () => {
      const testMe = I18nService.get('password');
      expect(testMe.showButtonAriaLabel.toLowerCase()).toBe('show password');
      expect(testMe.hideButtonAriaLabel.toLowerCase()).toBe('hide password');
    });

    it('should return customized key objects as expected', () => {
      I18nService.localize({
        password: {
          showButtonAriaLabel: 'ohai',
          hideButtonAriaLabel: 'stealthd',
        },
      });
      const testMe = I18nService.get('password');
      expect(testMe.showButtonAriaLabel.toLowerCase()).toBe('ohai');
      expect(testMe.hideButtonAriaLabel.toLowerCase()).toBe('stealthd');

      const sanityCheck = I18nService.get('alert');
      expect(sanityCheck.success.toLowerCase()).toBe(
        'success',
        'retrieves unaltered top-level values from default i18n object'
      );
    });

    it('should return an empty object if passed a nil key', () => {
      const testMe = I18nService.get('bigfoot');
      expect(testMe).toEqual({});
    });
  });

  describe('reset()', () => {
    it('resets all localizations and customizations on i18n', () => {
      I18nService.localize({
        actions: {
          sort: 'ortsay',
          expand: 'expandway',
          close: 'oseclay',
          resize: 'esizeray',
          filter: 'ilterfay',
        },
        custom: {
          bigfoot: 'igfootbay',
        },
      });

      // verify i18n updated
      expect(I18nService.get('custom').bigfoot).toBeDefined();
      expect(I18nService.get('actions').sort).toBe('ortsay');

      // now verify it clears out
      I18nService.reset();

      expect(I18nService.get('custom')).toEqual({});
      expect(I18nService.get('actions').sort).toBe('Sort');
    });
  });

  describe('hydrate()', () => {
    it('returns i18n with hydrated tokens', () => {
      I18nService.localize({
        custom: {
          truth: '${name} the Cat likes ${preferences.favoriteFood}',
          alsoTruth: '${name} the Cat likes pets very much from ${preferences.favoritePerson}',
        },
      });

      const pet = {
        name: 'Jackie',
        preferences: {
          favoriteFood: 'treats',
          favoritePerson: 'Jeremy',
        },
      };

      const testMe = I18nService.hydrate(I18nService.get('custom'), pet);

      expect(testMe.truth).toBe('Jackie the Cat likes treats');
      expect(testMe.alsoTruth).toBe('Jackie the Cat likes pets very much from Jeremy');
    });
  });

  describe('findKey()', () => {
    it('finds key if object matches a keyed value', () => {
      const findMe = I18nService.get('alert');
      const testMe = I18nService.findKey(findMe);
      expect(testMe).toBe('alert');
    });

    it('returns undefined if it cannot find a key to match the object it is passed', () => {
      const passwdKeys = I18nService.get('password');
      const butWaitTheresMore = { bahbahbahbah: 'bigfoot' };
      const findMe = { ...passwdKeys, ...butWaitTheresMore };
      expect(I18nService.findKey(findMe)).toBeUndefined();
    });
  });
});
