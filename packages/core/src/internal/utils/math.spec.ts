/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { compareSumTo, getMillisecondsFromSeconds, getOffesetDifference, sumAndSubtract } from './math.js';

describe('Functional Helper: ', () => {
  describe('sumAndSubtract(): ', () => {
    it('handles bad input gracefully', () => {
      expect(sumAndSubtract(1, [1, 2], null)).toBe(4, 'bad value in subtract is fine');
      expect(sumAndSubtract(1, null, [0, 4, 1])).toBe(-4, 'bad value in add is fine');
      expect(sumAndSubtract(1, null, null)).toBe(1, 'bad value in both is fine');
      expect(sumAndSubtract(null, [1, 2, 10], [5, 5])).toBe(3, 'bad value at start is fine');
      expect(sumAndSubtract(void 0, void 0, void 0)).toBe(0, 'all bad just zeroes out');
    });

    it('returns as expected', () => {
      expect(sumAndSubtract(10, [10, 30, 100], [75, 25])).toBe(50, 'works as expected');
    });

    it('is curried', () => {
      const curried = sumAndSubtract(8, [42]);
      expect(curried([25])).toBe(25, 'works as expected');
    });
  });

  describe('compareSumTo(): ', () => {
    it('falls through to false if compare function is bad', () => {
      expect(compareSumTo(1, [1, 2], [], null)).toBe(false);
    });

    it('handles bad input gracefully', () => {
      expect(compareSumTo(1, [1, 2], null, (val: number) => val === 4)).toBe(true, 'bad value in subtract is fine');
      expect(compareSumTo(1, null, [0, 4, 1], (val: number) => val === -4)).toBe(true, 'bad value in add is fine');
      expect(compareSumTo(1, null, null, (val: number) => val === 1)).toBe(true, 'bad value in both is fine');
      expect(compareSumTo(null, [1, 2, 10], [5, 5], (val: number) => val === 3)).toBe(
        true,
        'bad value at start is fine'
      );
    });

    it('returns comparisons as expected', () => {
      expect(compareSumTo(10, [10, 30, 100], [75, 25], (val: number) => val === 50)).toBe(true, 'works as expected');
    });

    it('is curried', () => {
      const curriedOne = compareSumTo(8, [42]);
      const curriedTwo = curriedOne([25]);
      expect(curriedTwo((val: number) => val === 25)).toBe(true, 'works as expected');
    });
  });

  describe('getMillisecondsFromSeconds(): ', () => {
    it('converts seconds to milliseconds as expected', () => {
      expect(getMillisecondsFromSeconds(0.1)).toBe(100);
      expect(getMillisecondsFromSeconds(2)).toBe(2000);
      expect(getMillisecondsFromSeconds(0.025)).toBe(25);
    });

    it('converts falsy value to 0 as expected', () => {
      expect(getMillisecondsFromSeconds(null)).toBe(0);
      expect(getMillisecondsFromSeconds(undefined)).toBe(0);
      expect(getMillisecondsFromSeconds(0)).toBe(0);
    });

    it('converts negative values as expected', () => {
      expect(getMillisecondsFromSeconds(-1)).toBe(-1000);
      expect(getMillisecondsFromSeconds(-0.5)).toBe(-500);
    });
  });

  describe('getOffsetDifference', () => {
    it('should return the offset difference of two positive numbers', () => {
      expect(getOffesetDifference(5, 15)).toBe(10);
      expect(getOffesetDifference(15, 5)).toBe(-10);
    });

    it('should return the offset difference of two negative numbers', () => {
      expect(getOffesetDifference(-5, -15)).toBe(-10);
      expect(getOffesetDifference(-15, -5)).toBe(10);
    });

    it('should return the offset difference negative and positive numbers', () => {
      expect(getOffesetDifference(5, -15)).toBe(-20);
      expect(getOffesetDifference(15, -5)).toBe(-20);
      expect(getOffesetDifference(-15, 5)).toBe(20);
      expect(getOffesetDifference(-5, 15)).toBe(20);
    });
  });
});
