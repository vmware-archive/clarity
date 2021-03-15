/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import is from 'ramda/es/is.js';
import isEmpty from 'ramda/es/isEmpty.js';
import isNil from 'ramda/es/isNil.js';

export function isNilOrEmpty(val: any): boolean {
  return isNil(val) || isEmpty(val);
}

export function isString(val: any): boolean {
  return is(String, val);
}

export function isNumericString(val: string): boolean {
  return isString(val) && !isEmpty(val.trim()) && +val === +val;
}

export function isStringOrNil(val: any): boolean {
  return is(String, val) || isNil(val);
}

export function isStringAndNotNilOrEmpty(val: any) {
  return isString(val) && !isNil(val) && !isEmpty(val);
}

export function isObject(val: any) {
  return is(Object, val);
}

export function isMap(val: any) {
  return is(Map, val);
}

export function isObjectAndNotNilOrEmpty(val: any) {
  return !isNilOrEmpty(val) && isObject(val);
}

export function hasPropertyChanged(val: any, oldVal: any): boolean {
  return val !== oldVal;
}

// marks nil values (undefined, null, empty string) as changed
export function hasStringPropertyChanged(val: string | null | undefined, oldVal: string): boolean {
  return isStringOrNil(val) && hasPropertyChanged(val, oldVal);
}

// ignores nil values when checking for changes
export function hasStringPropertyChangedAndNotNil(val: string | null | undefined, oldVal: string): boolean {
  return !isNilOrEmpty(val) && hasPropertyChanged(val, oldVal);
}

export function getEnumValues(enumeration: any) {
  return Object.values(enumeration);
}

export function createId(prefix = '_') {
  return `${prefix}${Math.random().toString(36).substr(2, 9)}`;
}

// used by deepClone() tested through integration
function cloneMap(mp: Map<any, any>): Map<any, any> {
  const clonedMap = new Map();
  for (const [key, val] of mp) {
    if (isMap(val)) {
      clonedMap.set(key, cloneMap(val));
    } else {
      clonedMap.set(key, val);
    }
  }
  return clonedMap;
}

export function deepClone(obj: any) {
  // this will clone almost anything (maps, arrays, objects, etc.) to the lowest of the low levels
  // be careful using this carelessly b/c it CAN have performance implications!

  return isMap(obj) ? cloneMap(obj) : JSON.parse(JSON.stringify(obj));
}

type ObjectPropertyNameAndValueTuples =
  | [string, string]
  | [string, true]
  | [string, false]
  | [string, null]
  | [string, undefined]
  | [string, number];

// this utility is a little restrictive on its inputs. it expects a specific format.
// going outside of that format (like passing an object or function as the value) can yield unintended results.
// this does NOT eval anything. that would be bad.
// 'isValid:true status:success': string =>
// [['isValid', true], ['status', 'success']]: [string, string | number | boolean][]
export function convertStringPropValuePairsToTuple(propValString: string): ObjectPropertyNameAndValueTuples[] {
  // starts as a string like... "isValid:true status:success"
  return propValString
    .split(' ')
    .map(str => str.split(':'))
    .map(pv => {
      const [propname, propValAsString] = pv;

      if (propValAsString === 'true') {
        return [propname, true];
      }

      if (propValAsString === 'false') {
        return [propname, false];
      }

      if (propValAsString === 'null') {
        return [propname, null];
      }

      if (propValAsString === 'undefined') {
        return [propname, undefined];
      }

      if (isNumericString(propValAsString)) {
        return [propname, +propValAsString];
      }

      // else it's a string and that's ok
      return [propname, propValAsString];
    });
  // returns as [['isValide', true], ['status', 'success']]
}

export function anyOrAllPropertiesPass(obj: any, propValuePairs: string, anyOrAll: 'any' | 'all'): boolean {
  if (!propValuePairs) {
    return true;
  }

  const tests = convertStringPropValuePairsToTuple(propValuePairs);

  if (!obj) {
    return false;
  }

  if (tests.length < 1) {
    return true;
  } else {
    const testResults = tests.filter(pvArry => {
      const [propname, expectedVal] = pvArry;

      if (expectedVal === false) {
        return !obj[propname];
      }

      return obj[propname] === expectedVal;
    });

    return anyOrAll === 'all' ? testResults.length === tests.length : testResults.length > 0;
  }
}

export function allPropertiesPass(obj: any, propValuePairs: string): boolean {
  return anyOrAllPropertiesPass(obj, propValuePairs, 'all');
}

export function anyPropertiesPass(obj: any, propValuePairs: string): boolean {
  return anyOrAllPropertiesPass(obj, propValuePairs, 'any');
}

export function getMillisecondsFromSeconds(sec: number): number {
  return isNil(sec) ? 0 : Number(sec) * 1000;
}
