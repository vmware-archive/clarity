/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import isNil from 'ramda/es/isNil.js';
import sum from 'ramda/es/sum.js';
import curryN from 'ramda/es/curryN.js';

export function getMillisecondsFromSeconds(sec: number): number {
  return isNil(sec) ? 0 : Number(sec) * 1000;
}

export const sumAndSubtract = curryN(3, (startValue, add: number[], subtract: number[]): number => {
  return (startValue || 0) + sum(add || []) - sum(subtract || []);
});

export const compareSumTo = curryN(
  4,
  (startValue: number, add: number[], subtract: number[], compareFn: (x: number) => boolean): boolean => {
    return !compareFn ? false : compareFn(sumAndSubtract(startValue, add, subtract));
  }
);

export function getOffesetDifference(minuend: number, subtrahend: number) {
  return Math.sign(subtrahend - minuend) * Math.abs(minuend - subtrahend);
}
