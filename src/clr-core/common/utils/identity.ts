/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import allPass from 'ramda/es/allPass';
import is from 'ramda/es/is';
import isEmpty from 'ramda/es/isEmpty';
import isNil from 'ramda/es/isNil';

export function isNilOrEmpty(val: any): boolean {
  return isNil(val) || isEmpty(val);
}

export function isString(val: any): boolean {
  return is(String, val);
}

export function isObject(val: any) {
  return is(Object, val);
}

export function isObjectAndNotNilOrEmpty(val: any) {
  return !isNilOrEmpty(val) && isObject(val);
}

export function hasPropertyChanged(val: string, oldVal: string): boolean {
  const tests = [() => !isNilOrEmpty(val), () => isString(val), () => val !== oldVal];
  const doTests = allPass(tests);
  return doTests(val, oldVal);
}

export function getEnumValues(enumeration: any) {
  return (<any>Object).values(enumeration);
}
