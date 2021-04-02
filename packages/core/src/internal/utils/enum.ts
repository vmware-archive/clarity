/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

export function getEnumValueFromStringKey(
  enumToSearch: any,
  keyAsString: string,
  keyTransform = (k: string) => k,
  fallback: string | number = ''
): string | number {
  if (!keyAsString) {
    return fallback;
  }

  const keyToGet = keyTransform(keyAsString);
  const enumValue = enumToSearch[keyToGet];
  return typeof enumValue !== 'undefined' ? enumValue : fallback;
}
