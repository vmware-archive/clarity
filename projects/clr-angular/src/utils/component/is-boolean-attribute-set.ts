/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

export function isBooleanAttributeSet(value: string | boolean): boolean {
  // for null just return false no need to check anything
  if (value === null) {
    return false;
  }
  if (typeof value === 'string') {
    // Empty string is valid, 'true' as string is also valid
    return value.length >= 0;
  }
  // Boolean value will be read as it is, everything else is false
  return typeof value === 'boolean' ? value : false;
}
