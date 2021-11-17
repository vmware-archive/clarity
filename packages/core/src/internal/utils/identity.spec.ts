/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { createTestElement, removeTestElement } from '@cds/core/test';
import { html } from 'lit';
import {
  allAre,
  allAreDefined,
  anyOrAllPropertiesPass,
  convertStringPropValuePairsToTuple,
  createId,
  deepClone,
  doesPropertyPass,
  getEnumValues,
  getFromObjectPath,
  hasPropertyChanged,
  hasStringPropertyChanged,
  hasStringPropertyChangedAndNotNil,
  isMap,
  isNil,
  isNilOrEmpty,
  isNumericString,
  isObject,
  isObjectAndNotNilOrEmpty,
  isString,
  isStringOrNil,
  isStringAndNotNilOrEmpty,
  anyPropertiesPass,
  convertAttributeStringValuesToValue,
  mergeObjects,
  objectNaiveDeepEquals,
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
  describe('isNil(): ', () => {
    it('identifies null and undefined as expected', () => {
      expect(isNil(void 0)).toEqual(true);
      expect(isNil(null)).toEqual(true);
      expect(isNil(0)).toEqual(false);
      expect(isNil('')).toEqual(false);
      expect(isNil([])).toEqual(false);
      expect(isNil({})).toEqual(false);
    });
  });

  describe('isNilOrEmpty(): ', () => {
    it('identifies null, undefined, and empty items as expected', () => {
      expect(isNilOrEmpty(void 0)).toEqual(true);
      expect(isNilOrEmpty(null)).toEqual(true);
      expect(isNilOrEmpty('')).toEqual(true);
      expect(isNilOrEmpty([])).toEqual(true);
      expect(isNilOrEmpty({})).toEqual(true);
      expect(isNilOrEmpty(0)).toEqual(false);
    });

    it('identifies non-empty items as expected', () => {
      expect(isNilOrEmpty({ item: 1 })).toEqual(false);
      expect(isNilOrEmpty([1, 2])).toEqual(false);
      expect(isNilOrEmpty('ohai')).toEqual(false);
      expect(isNilOrEmpty(0)).toEqual(false);
      expect(isNilOrEmpty(-1)).toEqual(false);
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

  describe('convertAttributeStringValuesToValue(): ', () => {
    it('should turn "true" to true', () => {
      expect(convertAttributeStringValuesToValue('true')).toEqual(true);
    });
    it('should turn "false" to false', () => {
      expect(convertAttributeStringValuesToValue('false')).toEqual(false);
    });
    it('should turn "null" to null', () => {
      expect(convertAttributeStringValuesToValue('null')).toEqual(null);
    });
    it('should turn "undefined" to undefined', () => {
      expect(convertAttributeStringValuesToValue('undefined')).toEqual(undefined);
    });
    it('should turn "2" to 2', () => {
      expect(convertAttributeStringValuesToValue('2')).toEqual(2);
    });

    it('should return the passed string', () => {
      expect(convertAttributeStringValuesToValue('test')).toEqual('test');
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
      (clonedArray as any[])[2][1][3] = 'g';
      expect((clonedArray as any[])[2][1][3]).toBe('g');
      expect(deepArray[2][1][3]).not.toBeDefined('cloned array should not be a reference');
    });

    it('performs deep clones of objects', () => {
      const deepObject = { a: 1, b: 2, c: { d: 3, e: 4, f: 5 } };
      const clonedObject = deepClone(deepObject) as any;
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
      const clonedMap = deepClone(deepMap) as Map<string, any>;
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

  describe('anyPropertiesPass(): ', () => {
    it('handles "any" case as expected', () => {
      const propValStringToCheck = 'ohai:howdy kthxbye:nope';
      expect(anyPropertiesPass({ ohai: 'howdy' }, propValStringToCheck)).toBe(true);
    });
  });

  describe('anyOrAllPropertiesPass(): ', () => {
    const propValStringToCheck = 'isValid:true status:success currentPage:3';

    it('handles "any" case as expected', () => {
      expect(anyOrAllPropertiesPass({ isValid: true }, propValStringToCheck, 'any')).toBe(true);
      expect(anyOrAllPropertiesPass({ status: 'success' }, propValStringToCheck, 'any')).toBe(true);
      expect(anyOrAllPropertiesPass({ currentPage: 3 }, propValStringToCheck, 'any')).toBe(true);
      expect(
        anyOrAllPropertiesPass({ isValid: true, status: 'loading', currentPage: 6 }, propValStringToCheck, 'any')
      ).toBe(true);
    });

    it('handles "all" case as expected', () => {
      expect(anyOrAllPropertiesPass({ isValid: true }, propValStringToCheck, 'all')).toBe(false);
      expect(anyOrAllPropertiesPass({ status: 'success' }, propValStringToCheck, 'all')).toBe(false);
      expect(anyOrAllPropertiesPass({ currentPage: 3 }, propValStringToCheck, 'all')).toBe(false);
      expect(
        anyOrAllPropertiesPass({ isValid: true, status: 'loading', currentPage: 6 }, propValStringToCheck, 'all')
      ).toBe(false);
      expect(
        anyOrAllPropertiesPass({ isValid: true, status: 'success', currentPage: 3 }, propValStringToCheck, 'all')
      ).toBe(true);
    });

    it('returns true if propValue string is empty', () => {
      expect(anyOrAllPropertiesPass({}, '', 'all')).toBe(true);
      expect(anyOrAllPropertiesPass({ isValid: true }, '', 'all')).toBe(true);
      expect(anyOrAllPropertiesPass({ isValid: true }, null, 'all')).toBe(true);
      expect(anyOrAllPropertiesPass({ isValid: true }, undefined, 'all')).toBe(true);
      expect(anyOrAllPropertiesPass({ isValid: true }, '', 'any')).toBe(true);
      expect(anyOrAllPropertiesPass({ isValid: true }, null, 'any')).toBe(true);
      expect(anyOrAllPropertiesPass({ isValid: true }, undefined, 'any')).toBe(true);
    });

    it('returns false if object to check is empty', () => {
      expect(anyOrAllPropertiesPass({}, propValStringToCheck, 'any')).toBe(false);
      expect(anyOrAllPropertiesPass({}, propValStringToCheck, 'all')).toBe(false);
      expect(anyOrAllPropertiesPass({}, propValStringToCheck, 'any')).toBe(false);
      expect(anyOrAllPropertiesPass({}, propValStringToCheck, 'all')).toBe(false);
    });

    it('returns false if object to check is nil', () => {
      expect(anyOrAllPropertiesPass(null, propValStringToCheck, 'any')).toBe(false);
      expect(anyOrAllPropertiesPass(null, propValStringToCheck, 'all')).toBe(false);
      expect(anyOrAllPropertiesPass(undefined, propValStringToCheck, 'any')).toBe(false);
      expect(anyOrAllPropertiesPass(undefined, propValStringToCheck, 'all')).toBe(false);
    });
  });

  describe('convertStringPropValuePairsToTuple', () => {
    it('returns string value as expected', () => {
      expect(convertStringPropValuePairsToTuple('status:error')).toEqual([['status', 'error']]);
    });

    it('returns number value as expected', () => {
      expect(convertStringPropValuePairsToTuple('numberOfPages:6 valueOfPi:3.14159')).toEqual([
        ['numberOfPages', 6],
        ['valueOfPi', 3.14159],
      ]);
    });

    it('returns boolean value as expected', () => {
      expect(convertStringPropValuePairsToTuple('isValid:true')).toEqual([['isValid', true]]);

      // also handles falsy values
      expect(
        convertStringPropValuePairsToTuple('hereIsFalse:false hereIsUndefined:undefined hereIsNull:null hereIsEmpty:')
      ).toEqual([
        ['hereIsFalse', false],
        ['hereIsUndefined', undefined],
        ['hereIsNull', null],
        ['hereIsEmpty', ''],
      ]);
    });

    it('returns any other value (but not objects) as string', () => {
      expect(convertStringPropValuePairsToTuple('hereIsJunk:#[["ohai","howdy","hello"]]**{}')).toEqual([
        ['hereIsJunk', '#[["ohai","howdy","hello"]]**{}'],
      ]);
    });
  });

  describe('doesPropertyPass(): ', () => {
    const obj = {
      test: false,
      test2: true,
      test4: 'asdf',
      test5: 4,
      test6: null as any,
      test7: undefined as any,
    };
    let testElement: HTMLElement;
    let element: HTMLElement;

    beforeEach(async () => {
      testElement = await createTestElement(html`<div test="test">Test</div>`);
      element = testElement.querySelector<HTMLElement>('div');
    });

    afterEach(() => {
      removeTestElement(element);
    });

    it('should return true', () => {
      const result = doesPropertyPass(obj, 'test', false);

      expect(result).toBeTruthy();
    });

    it("should return true for property that doesn't exist in the object", () => {
      const result = doesPropertyPass(obj, 'test1', false);

      expect(result).toBeTruthy();
    });

    it('should return true cause the string is the same', () => {
      const result = doesPropertyPass(obj, 'test4', 'asdf');

      expect(result).toBeTruthy();
    });

    it('should return true cause the number is the same', () => {
      const result = doesPropertyPass(obj, 'test5', 4);

      expect(result).toBeTruthy();
    });

    it('should return true for null', () => {
      const result = doesPropertyPass(obj, 'test6', null);

      expect(result).toBeTruthy();
    });

    it('should return true for undefined', () => {
      const result = doesPropertyPass(obj, 'test7', undefined);

      expect(result).toBeTruthy();
    });

    it('should return true 2', () => {
      const result = doesPropertyPass(obj, 'test2', true);

      expect(result).toBeTruthy();
    });

    it('should return false', () => {
      const result = doesPropertyPass(obj, 'test', true);

      expect(result).toBeFalsy();
    });

    it('should return true for attribute in HTML element', () => {
      const result = doesPropertyPass(element, 'test', 'test');

      expect(result).toBeTruthy();
    });

    it('should return false for attribute missing in HTML element', () => {
      const result = doesPropertyPass(element, 'test2', false);

      expect(result).toBeFalsy();
    });
  });

  describe('allAre(): ', () => {
    const greaterThanZero = (num: number) => {
      return num > 0;
    };

    it('returns true if all values pass the function it is given', () => {
      expect(allAre(greaterThanZero, 1, 2, 3, 4, 5)).toBe(true);
    });

    it('returns false if a value does not pass the function it is given', () => {
      expect(allAre(greaterThanZero, 0, 1, 2)).toBe(false);
    });
  });

  describe('allAreDefined(): ', () => {
    it('returns true if all values are defined', () => {
      expect(allAreDefined('ohai', 'howdy', 'svirfneblin')).toBe(true);
    });

    it('returns false if it is given an undefined value', () => {
      expect(allAreDefined('ohai', 'howdy', void 0, 'svirfneblin')).toBe(false);
    });
  });

  describe('getObjectFromPath: ', () => {
    const testObject = {
      single: 'a',
      nested: {
        i: 'b',
        ii: 'c',
        iii: (name: string) => `ohai ${name}`,
      },
      deepnested: {
        iv: {
          v: {
            vi: 'd',
          },
        },
      },
    };

    const badObject: Record<string, any> = {
      empty: '',
      falsish: {
        nope: null,
        undef: void 0,
        zero: 0,
      },
      actualFalse: false,
    };

    it('should return path string as default fallback if not found and not given a fallback', () => {
      expect(getFromObjectPath('howdy.ohai', testObject)).toBe('${howdy.ohai}');
    });

    it('should return fallback if given one and path is not found', () => {
      expect(getFromObjectPath('howdy.ohai', testObject, 'nope')).toBe('nope');
    });

    it('should return top-level as expected', () => {
      expect(getFromObjectPath('single', testObject)).toBe('a');
    });

    it('should handle non-existent top-level as expected', () => {
      expect(getFromObjectPath('signle', testObject)).toBe('${signle}');
    });

    it('should return nested as expected (1 of 3 - simple)', () => {
      expect(getFromObjectPath('nested.i', testObject)).toBe('b');
      expect(getFromObjectPath('nested.ii', testObject)).toBe('c');
    });

    it('should return nested as expected (2 of 3 - functions too)', () => {
      const iGotAFunction = getFromObjectPath('nested.iii', testObject);
      expect(iGotAFunction('bob')).toBe('ohai bob');
    });

    it('should return nested as expected (3 of 3 - deep)', () => {
      expect(getFromObjectPath('deepnested.iv.v.vi', testObject)).toBe('d');
    });

    it('should return bad values except undefined', () => {
      expect(getFromObjectPath('empty', badObject, 'ohai')).toEqual('');
      expect(getFromObjectPath('falsish.nope', badObject, 'ohai')).toEqual(null);
      expect(getFromObjectPath('falsish.zero', badObject, 'ohai')).toEqual(0);
      expect(getFromObjectPath('actualFalse', badObject, 'ohai')).toEqual(false);
      expect(getFromObjectPath('falsish.undef', badObject, 'ohai')).toEqual('ohai');
      expect(getFromObjectPath('falsish.yo', badObject, 'ohai')).toEqual('ohai');
    });
  });

  describe('getObjectFromPath: ', () => {
    const testObject = {
      a: 1,
      b: {
        i: 'A',
        ii: 'B',
      },
      c: {
        I: {
          A: {
            i: 'A',
          },
        },
      },
    };

    it('should return true against itself', () => {
      expect(objectNaiveDeepEquals(testObject, testObject)).toBe(true);
    });

    it('should return true against clone', () => {
      const myClone = deepClone(testObject);
      expect(objectNaiveDeepEquals(testObject, myClone)).toBe(true);
    });

    it('should return false if slightly different', () => {
      const myBadClone = deepClone(testObject) as any;
      myBadClone.d = 'ohai';
      expect(objectNaiveDeepEquals(testObject, myBadClone)).toBe(false);
    });

    it('should be okay with array properties', () => {
      const testClone = deepClone(testObject) as any;
      testClone.d = ['ohai', 'kthxbye', 0, 1, -1];
      const arrayClone = deepClone(testClone);

      expect(objectNaiveDeepEquals(testClone, arrayClone)).toBe(true);
      // confirm depth
      expect(objectNaiveDeepEquals(testClone.c.I.A, arrayClone.c.I.A)).toBe(true, 'confirm depth');
    });

    it('ignores any methods in objects due to naivety', () => {
      const functionalObject_1 = {
        a: {
          i: 'ohai',
          ii: () => {
            return 'ohai';
          },
        },
        b: function () {
          return 'kthxbyes';
        },
        c: 'doh',
      };

      const functionalObject_2 = {
        a: {
          i: 'ohai',
          ii: () => {
            return 'ohai';
          },
        },
        b: function () {
          return 'kthxbyes';
        },
        c: 'doh',
      };

      const badFunctionalObject = {
        a: {
          i: 'ohai',
          ii: () => {
            return 'howdy';
          },
        },
        b: function () {
          return 'kthxbyes';
        },
        c: 'donut',
      };

      expect(objectNaiveDeepEquals(functionalObject_2, functionalObject_1)).toBe(true);
      expect(objectNaiveDeepEquals(functionalObject_1, badFunctionalObject)).toBe(false);
    });
  });

  describe('mergeObjects()', () => {
    it('merges as expected', () => {
      const a: any = {
        p1: 'p1a',
        p2: ['a', 'b', 'c'],
        p3: true,
        p5: null,
        p6: {
          p61: 'p61a',
          p62: 'p62a',
          p63: ['aa', 'bb', 'cc'],
          p64: {
            p641: 'p641a',
          },
        },
      };

      const b: any = {
        p1: 'p1b',
        p2: ['d', 'e', 'f'],
        p3: false,
        p4: true,
        p6: {
          p61: 'p61b',
          p64: {
            p642: 'p642b',
          },
        },
      };

      const c: any = {
        p1: 'p1c',
        p3: null,
        p6: {
          p62: 'p62c',
          p64: {
            p643: 'p643c',
          },
        },
      };

      const testMe: any = mergeObjects(a, b, c);
      expect(testMe.p1).toBe('p1c');
      expect(testMe.p2).toEqual(['d', 'e', 'f']);
      expect(testMe.p3).toBe(null);
      expect(testMe.p4).toBe(true);
      expect(testMe.p5).toBe(null);
      expect(testMe.p6.p61).toBe('p61b');
      expect(testMe.p6.p62).toBe('p62c');
      expect(testMe.p6.p63).toEqual(['aa', 'bb', 'cc']);
      expect(testMe.p6.p64.p641).toBe('p641a');
      expect(testMe.p6.p64.p642).toBe('p642b');
      expect(testMe.p6.p64.p643).toBe('p643c');
    });

    it('deals okay with bad values', () => {
      const a = { p1: 'p1a', p2: { p21: 'p21a', p22: 'p22a' } };
      const b = { p2: { p22: 'p22b' }, p3: true };
      const testUndefined: any = mergeObjects(void 0, a, b);
      const testNull: any = mergeObjects(a, null, b);
      const testBad: any = mergeObjects(a, b, [1, 2, 3]);

      expect(testUndefined.p1).toBe('p1a', 'undefined p1');
      expect(testNull.p1).toBe('p1a', 'null p1');
      expect(testBad.p1).toBe('p1a', 'not an object p1');
    });
  });
});
