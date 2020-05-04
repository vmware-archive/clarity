/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import is from 'ramda/es/is';
import isEmpty from 'ramda/es/isEmpty';
import isNil from 'ramda/es/isNil';

export function isNilOrEmpty(val: any): boolean {
  return isNil(val) || isEmpty(val);
}

export function isString(val: any): boolean {
  return is(String, val);
}

export function isStringOrNil(val: any): boolean {
  return is(String, val) || isNil(val);
}

export function isObject(val: any) {
  return is(Object, val);
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
