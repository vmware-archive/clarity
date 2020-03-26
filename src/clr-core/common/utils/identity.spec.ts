/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  getEnumValues,
  hasPropertyChanged,
  hasStringPropertyChanged,
  hasStringPropertyChangedAndNotNil,
  isNilOrEmpty,
  isObject,
  isObjectAndNotNilOrEmpty,
  isString,
  isStringOrNil,
} from './identity.js';

enum TestEnum {
  Foo = 'foo',
  Bar = 'bar',
  Baz = 'baz',
  Bang = 'bang',
  Fiz = 'fiz',
  Buz = 'buz',
}

describe('Functional Helper: ', () => {
  describe('isNilOrEmpty(): ', () => {
    it('identifies null, undefined, and empty items as expected', () => {
      expect(isNilOrEmpty(void 0)).toEqual(true);
      expect(isNilOrEmpty(null)).toEqual(true);
      expect(isNilOrEmpty('')).toEqual(true);
      expect(isNilOrEmpty([])).toEqual(true);
      expect(isNilOrEmpty({})).toEqual(true);
    });

    it('identifies non-empty items as expected', () => {
      expect(isNilOrEmpty({ item: 1 })).toEqual(false);
      expect(isNilOrEmpty([1, 2])).toEqual(false);
      expect(isNilOrEmpty('ohai')).toEqual(false);
      expect(isNilOrEmpty(true)).toEqual(false);
      expect(isNilOrEmpty(false)).toEqual(false);
    });
  });

  describe('isString(): ', () => {
    it('identifies strings as expected', () => {
      expect(isString(undefined)).toEqual(false);
      expect(isString(null)).toEqual(false);
      expect(isString([])).toEqual(false);
      expect(isString({})).toEqual(false);
      expect(isString(100)).toEqual(false);
      expect(isString(true)).toEqual(false);
      expect(isString(false)).toEqual(false);
      expect(isString('ohai')).toEqual(true);
    });

    it('identifies non-empty items as expected', () => {
      expect(isString('')).toEqual(true);
    });
  });

  describe('isStringOrNil(): ', () => {
    it('identifies strings as expected', () => {
      expect(isStringOrNil([])).toEqual(false);
      expect(isStringOrNil({})).toEqual(false);
      expect(isStringOrNil(100)).toEqual(false);
      expect(isStringOrNil(true)).toEqual(false);
      expect(isStringOrNil(false)).toEqual(false);
      expect(isStringOrNil('ohai')).toEqual(true);
    });

    it('identifies nil items as expected', () => {
      expect(isStringOrNil(void 0)).toEqual(true);
      expect(isStringOrNil(null)).toEqual(true);
      expect(isStringOrNil('')).toEqual(true);
    });
  });

  describe('isObject(): ', () => {
    it('identifies objects as expected', () => {
      expect(isObject(undefined)).toEqual(false);
      expect(isObject(null)).toEqual(false);
      expect(isObject(100)).toEqual(false);
      expect(isObject('100')).toEqual(false);
      expect(isObject('')).toEqual(false);
      expect(isObject(true)).toEqual(false);
      expect(isObject(false)).toEqual(false);
      expect(isObject({})).toEqual(true);
    });
  });

  describe('isObjectAndNotNilOrEmpty(): ', () => {
    it('identifies empty objects as expected', () => {
      expect(isObjectAndNotNilOrEmpty({})).toEqual(false);
      expect(isObjectAndNotNilOrEmpty({ ohai: true })).toEqual(true);
    });
  });

  describe('hasPropertyChanged(): ', () => {
    it('returns true if new value is empty, null, or undefined and different from old value', () => {
      expect(hasPropertyChanged(void 0, 'ohai')).toEqual(true);
      expect(hasPropertyChanged(null, 'ohai')).toEqual(true);
      expect(hasPropertyChanged('', 'ohai')).toEqual(true);
    });
    it('returns false if new value is equal to old value', () => {
      expect(hasPropertyChanged('ohai', 'ohai')).toEqual(false);
      expect(hasPropertyChanged(true, true)).toEqual(false);
      expect(hasPropertyChanged(100, 100)).toEqual(false);
    });
    it('returns true if new value is NOT equal to old value', () => {
      expect(hasPropertyChanged('ohai', 'kthxbye')).toEqual(true);
      expect(hasPropertyChanged(false, true)).toEqual(true);
      expect(hasPropertyChanged(49, 48)).toEqual(true);
    });
    it('returns true if new value new value is a different nil value', () => {
      expect(hasPropertyChanged('', 'kthxbye')).toEqual(true);
      expect(hasPropertyChanged(void 0, 'kthxbye')).toEqual(true);
      expect(hasPropertyChanged(null, 'kthxbye')).toEqual(true);
      expect(hasPropertyChanged(null, null)).toEqual(false);
    });
  });

  describe('hasStringPropertyChanged(): ', () => {
    it('returns true if new value is empty, null, or undefined and different from old value', () => {
      expect(hasStringPropertyChanged(void 0, 'ohai')).toEqual(true);
      expect(hasStringPropertyChanged(null, 'ohai')).toEqual(true);
      expect(hasStringPropertyChanged('', 'ohai')).toEqual(true);
    });
    it('returns false if new value is equal to old value', () => {
      expect(hasStringPropertyChanged('ohai', 'ohai')).toEqual(false);
    });
    it('returns true if new value is NOT equal to old value', () => {
      expect(hasStringPropertyChanged('ohai', 'kthxbye')).toEqual(true);
    });
    it('returns true if new value new value is a different nil value', () => {
      expect(hasStringPropertyChanged('', 'kthxbye')).toEqual(true);
      expect(hasStringPropertyChanged(void 0, 'kthxbye')).toEqual(true);
      expect(hasStringPropertyChanged(null, 'kthxbye')).toEqual(true);
      expect(hasStringPropertyChanged(null, null)).toEqual(false);
    });
  });

  describe('hasStringPropertyChangedAndNotNil(): ', () => {
    it('returns false if new value is empty, null, or undefined', () => {
      expect(hasStringPropertyChangedAndNotNil(void 0, 'ohai')).toEqual(false);
      expect(hasStringPropertyChangedAndNotNil(null, 'ohai')).toEqual(false);
      expect(hasStringPropertyChangedAndNotNil('', 'ohai')).toEqual(false);
    });
    it('returns false if new value is equal to old value', () => {
      expect(hasStringPropertyChangedAndNotNil('ohai', 'ohai')).toEqual(false);
    });
    it('returns true if new value is NOT equal to old value', () => {
      expect(hasStringPropertyChangedAndNotNil('ohai', 'kthxbye')).toEqual(true);
    });
  });

  describe('getEnumValues(): ', () => {
    it('returns enum values as an array', () => {
      const expectedAry = ['foo', 'bar', 'baz', 'bang', 'fiz', 'buz'];
      const enumVals = getEnumValues(TestEnum);
      expect(enumVals).toEqual(expectedAry);
      expect(enumVals.length).toEqual(expectedAry.length);
    });
  });
});
