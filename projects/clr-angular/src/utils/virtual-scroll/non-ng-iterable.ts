/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

/**
 * This is ridiculous, we need a specific "non-iterable" iterable because otherwise,
 * Angular iterates over it in dev mode. Prod mode is fine, but dev mode iterating means it hangs
 * the app on infinite generators.
 */
export interface NonNgIterable<T> {
  get(index?: number): T;
}

export function isNonNgIterable<T>(o: any): o is NonNgIterable<T> {
  return 'get' in o;
}
