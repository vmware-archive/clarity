/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  createId,
  deepClone,
  getEnumValues,
  hasPropertyChanged,
  hasStringPropertyChanged,
  hasStringPropertyChangedAndNotNil,
  isMap,
  isNilOrEmpty,
  isNumericString,
  isObject,
  isObjectAndNotNilOrEmpty,
  isString,
  isStringOrNil,
  isStringAndNotNilOrEmpty,
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

  describe('isNumericString(): ', () => {
    it('identifies strings that are numbers as expected', () => {
      expect(isNumericString(undefined)).toEqual(false, 'undefined is not a numeric string');
      expect(isNumericString(null)).toEqual(false, 'null is not a numeric string');
      expect(isNumericString('')).toEqual(false, 'empty string is not a numeric string');
      expect(isNumericString('    ')).toEqual(false, 'string of spaces is not a numeric string');
      expect(isNumericString('ohai')).toEqual(false, 'string is not a numeric string');
      expect(isNumericString('100')).toEqual(true, 'integer string is a numeric string');
      expect(isNumericString('14567.0897')).toEqual(true, 'float string is a numeric string');
      expect(isNumericString('-1')).toEqual(true, 'negative integer is a numeric string');
      expect(isNumericString('-3.14159265359')).toEqual(true, 'negative float is a numeric string');
      expect(isNumericString('0')).toEqual(true, 'zero is a numeric string');
    });
  });

  describe('isString(): ', () => {
    it('identifies strings as expected', () => {
      expect(isString(undefined)).toEqual(false, 'undefined is not a string');
      expect(isString(null)).toEqual(false, 'null is not a string');
      expect(isString([])).toEqual(false, 'array is not a string');
      expect(isString({})).toEqual(false, 'object is not a string');
      expect(isString(new Map([['a', 1]]))).toEqual(false, 'map is not a string');
      expect(isString(100)).toEqual(false, 'number is not a string');
      expect(isString(true)).toEqual(false, 'true is not a string');
      expect(isString(false)).toEqual(false, 'false is not a string');
      expect(isString('ohai')).toEqual(true, 'string is a string');
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

  describe('isStringAndNotNilOrEmpty(): ', () => {
    it('identifies strings as expected', () => {
      expect(isStringAndNotNilOrEmpty([])).toEqual(false);
      expect(isStringAndNotNilOrEmpty({})).toEqual(false);
      expect(isStringAndNotNilOrEmpty(100)).toEqual(false);
      expect(isStringAndNotNilOrEmpty(true)).toEqual(false);
      expect(isStringAndNotNilOrEmpty(false)).toEqual(false);
      expect(isStringAndNotNilOrEmpty('ohai')).toEqual(true);
    });

    it('identifies nil items and empty strings as expected', () => {
      expect(isStringAndNotNilOrEmpty(void 0)).toEqual(false);
      expect(isStringAndNotNilOrEmpty(null)).toEqual(false);
      expect(isStringAndNotNilOrEmpty('')).toEqual(false);
    });
  });

  describe('isObject(): ', () => {
    it('identifies objects as expected', () => {
      expect(isObject(undefined)).toEqual(false, 'undefined is not an object');
      expect(isObject(null)).toEqual(false, 'null is not an object');
      expect(isObject(100)).toEqual(false, 'number is not an object');
      expect(isObject('100')).toEqual(false, 'string is not an object');
      expect(isObject('')).toEqual(false, 'empty string is not an object');
      expect(isObject(true)).toEqual(false, 'true is not an object');
      expect(isObject(false)).toEqual(false, 'false is not an object');
      expect(isString(new Map([['a', 1]]))).toEqual(false, 'map is not an object');
      expect(isObject({})).toEqual(true, 'object is an object');
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

  describe('isMap(): ', () => {
    it('identifies maps as expected', () => {
      expect(isMap(undefined)).toEqual(false, 'undefined is not a map');
      expect(isMap(null)).toEqual(false, 'null is not a map');
      expect(isMap([])).toEqual(false, 'array is not a map');
      expect(isMap({})).toEqual(false, 'object is not a map');
      expect(isMap(100)).toEqual(false, 'number is not a map');
      expect(isMap(true)).toEqual(false, 'true is not a map');
      expect(isMap(false)).toEqual(false, 'false is not a map');
      expect(isMap('ohai')).toEqual(false, 'string is not a map');
      expect(isMap(new Map([['a', 1]]))).toBe(true, 'map is a map');
    });
  });

  describe('deepClone(): ', () => {
    it('performs deep clones of arrays', () => {
      const deepArray = ['a', 'b', ['c', ['d', 'e', 'f']]];
      const clonedArray = deepClone(deepArray);
      clonedArray[2][1][3] = 'g';
      expect(clonedArray[2][1][3]).toBe('g');
      expect(deepArray[2][1][3]).not.toBeDefined('cloned array should not be a reference');
    });

    it('performs deep clones of objects', () => {
      const deepObject = { a: 1, b: 2, c: { d: 3, e: 4, f: 5 } };
      const clonedObject = deepClone(deepObject);
      clonedObject.c.g = 6;
      expect(clonedObject.c.g).toBe(6);
      expect(Object.prototype.hasOwnProperty.call(deepObject.c, 'g')).toBe(
        false,
        'cloned object should not be a reference'
      );
    });

    it('performs deep clones of maps', () => {
      const deepMap = new Map([
        ['a', new Map([['d', 3]])],
        ['b', new Map([['e', 4]])],
        ['c', new Map([['f', 5]])],
      ]);
      const clonedMap = deepClone(deepMap);
      clonedMap.get('c').set('f', 12);
      expect(clonedMap.get('b')).toBeDefined('expect cloned map to be a map');
      expect(clonedMap.get('b').get('e')).toBe(4, 'expect cloned map to be a map (deeply)');
      expect(clonedMap.get('c').get('f')).toBe(12);
      expect(deepMap.get('c').get('f')).toBe(5);
    });
  });

  describe('createId(): ', () => {
    it('creates an id of numbers and letters', () => {
      const testMe = createId().substr(1);
      expect(/[A-Za-z0-9]+/.test(testMe)).toBe(true);
    });

    it('is prefixed with an underscore if none is provided', () => {
      const testMe = createId().substr(0, 1);
      expect(testMe).toBe('_');
    });

    it('is prefixed with a string if one is provided', () => {
      const expectedPrefix = 'OHAI_';
      const testMe = createId('OHAI_').substr(0, 5);
      expect(testMe).toBe(expectedPrefix);
    });
  });
});
