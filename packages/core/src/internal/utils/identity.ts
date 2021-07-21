/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import is from 'ramda/es/is.js';
import isEmpty from 'ramda/es/isEmpty.js';

export function isNil(val: any): boolean {
  return val === null || val === undefined;
}

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

// simplistic way to test objects for equality
// note that it ignores/removes methods from objects
export function objectNaiveDeepEquals(obj1: Record<string, unknown>, obj2: Record<string, unknown>) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

export function getFromObjectPath(path: string, dataObj: any, fallback = `$\{${path}}`) {
  return path.split('.').reduce((res, key) => {
    try {
      const val = res[key];
      switch (true) {
        case val === null:
        case val === false:
        case val === '':
        case val === 0:
          return val;
        default:
          return val || fallback;
      }
    } catch {
      return fallback;
    }
  }, dataObj);
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

/* c8 ignore next 2 */
export function convertAttributeStringValuesToValue(stringValue: string): string | number | boolean | null | undefined {
  switch (true) {
    case stringValue === 'true':
      return true;
    case stringValue === 'false':
      return false;
    case stringValue === 'null':
      return null;
    case stringValue === 'undefined':
      return void 0; // undefined
    case isNumericString(stringValue):
      return +stringValue;
    default:
      // else it's a string and that's ok
      return stringValue;
  }
}

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
      return [propname, convertAttributeStringValuesToValue(propValAsString)];
    });
  // returns as [['isValid', true], ['status', 'success']]
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
      return doesPropertyPass(obj, propname, expectedVal);
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

// TODO: BREAK THIS UP. TRIED ONCE. TOO CONVOLUTED.
/**
 * This function takes an object (e.g. { ohai: 'hello', count: 2 }) or an Element
 * (e.g. <p ohai="hello" count="2">i am an html element</p>).
 *
 * It also takes a string that represents a potential property or attribute on the
 * object or element (e.g. "ohai" or "count").
 *
 * Lastly, it takes a potential value for the potential property or attribute
 * (e.g. "hello" or 2).
 *
 * If the object/element has the string as a property or attribute and the value
 * of the property/attribute equals the expected value, it returns true. If not,
 * it returns false.
 *
 * This code is the brains behind our "key:value" strings found in Clarity Motion.
 * (e.g. { hidden: true, onlyIf: "responsive:false", animation: ...})
 *
 * @export
 * @param {*} objectOrElement
 * @param {string} propertyOrAttributeName
 * @param {(string | number | boolean | null | undefined)} expectedValue
 * @returns {boolean}
 */
export function doesPropertyPass(
  objectOrElement: any,
  propertyOrAttributeName: string,
  expectedValue: string | number | boolean | null | undefined
): boolean {
  if (propertyOrAttributeName in objectOrElement) {
    // test expected key/value as object property first because it's less complicated
    if (expectedValue === false) {
      return !objectOrElement[propertyOrAttributeName];
    } else {
      return objectOrElement[propertyOrAttributeName] === expectedValue;
    }
  } else if (
    (objectOrElement as Element).hasAttribute &&
    (objectOrElement as Element).hasAttribute(propertyOrAttributeName)
  ) {
    // test expected key/value as if an attribute on an element
    const propAsAttributeValue =
      (objectOrElement as Element).hasAttribute(propertyOrAttributeName) &&
      (objectOrElement as Element).getAttribute(propertyOrAttributeName);

    // sometimes attribute values can get set as string representations of
    // falsy states (see: boolean attribute with a string "false" value).
    // this catches that and less likely but still problematic misstep of
    // hard-setting with a string of "undefined" or "null"
    if (['null', 'false', 'undefined'].indexOf(propAsAttributeValue as string) > -1) {
      switch (expectedValue) {
        case null:
          return propAsAttributeValue === 'null';
        case false:
          return propAsAttributeValue === 'false';
        default:
          return !expectedValue;
      }
    } else {
      // after handling the weird edge case above, this is the more straightforward
      // value check.
      switch (expectedValue) {
        case false:
          return !propAsAttributeValue || propAsAttributeValue === 'false';
        case true:
          return propAsAttributeValue === '' || propAsAttributeValue === 'true';
        default:
          return propAsAttributeValue === (expectedValue as string | number).toString();
      }
    }
  } else {
    // this is not an object property or an attribute on an element attribute so we need
    // to verify if it's expected to be undefined or false. If so, the attribute not being
    // present on the element (see: boolean attrs) meets expectations and return true.
    return (
      (!(objectOrElement as Element).hasAttribute && (expectedValue === false || expectedValue === undefined)) || false
    );
  }
}

export function allAre<T>(testFn: (val: T) => boolean, ...itemsToCheck: T[]): boolean {
  return itemsToCheck.map(item => testFn(item)).indexOf(false) < 0;
}

export function allAreDefined<U>(...items: U[]): boolean {
  const testFn = (val: U) => {
    return val !== undefined;
  };
  return allAre(testFn, ...items);
}
