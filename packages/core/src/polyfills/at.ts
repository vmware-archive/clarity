/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

declare global {
  interface Array<T> {
    at(o: number): T;
  }
}

let registered = false;

/**
 * Polyfill for Safari
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at
 */

export function at(this: { value: (n: any) => any; writable: true; enumerable: false; configurable: true }, n: any) {
  n = Math.trunc(n) || 0;
  if (n < 0) {
    n += (this as any).length;
  }

  if (n < 0 || n >= (this as any).length) {
    return undefined;
  }

  return (this as any)[n];
}

if (!registered) {
  registered = true;
  const TypedArray = Reflect.getPrototypeOf(Int8Array);
  for (const C of [Array, String, TypedArray]) {
    Object.defineProperty((C as any).prototype, 'at', {
      value: at,
      writable: true,
      enumerable: false,
      configurable: true,
    });
  }
}
