/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  getEnumValues,
  hasPropertyChanged,
  isNilOrEmpty,
  isObject,
  isObjectAndNotNilOrEmpty,
  isString,
} from './identity';

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
    });

    it('identifies non-empty items as expected', () => {
      expect(isString('')).toEqual(true);
      expect(isString('ohai')).toEqual(true);
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
    it('returns false if new value is empty, null, or undefined', () => {
      expect(hasPropertyChanged(void 0, 'ohai')).toEqual(false);
      expect(hasPropertyChanged(null, 'ohai')).toEqual(false);
      expect(hasPropertyChanged('', 'ohai')).toEqual(false);
    });
    it('returns false if new value is not a string', () => {
      expect(hasPropertyChanged(void 0, 'ohai')).toEqual(false);
      expect(hasPropertyChanged(null, 'ohai')).toEqual(false);
    });
    it('returns false if new value is equal to old value', () => {
      expect(hasPropertyChanged('ohai', 'ohai')).toEqual(false);
    });
    it('returns true if new value is NOT equal to old value', () => {
      expect(hasPropertyChanged('ohai', 'kthxbye')).toEqual(true);
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
