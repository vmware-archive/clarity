/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { YearRangeModel } from './year-range.model';

export default function() {
  describe('Year Range Model', () => {
    let startYear: number;
    let minYear: number;
    let maxYear: number;
    let yearRangeModel: YearRangeModel;

    beforeEach(() => {
      startYear = new Date().getFullYear();
      yearRangeModel = new YearRangeModel(startYear);
      const rem: number = startYear % 10;
      minYear = startYear - rem;
      maxYear = startYear + (10 - rem) - 1;
    });

    function testRange(range: YearRangeModel, start: number): void {
      for (let i = 0; i < range.yearRange.length; i++) {
        expect(range.yearRange[i]).toBe(start + i);
      }
    }

    it('initializes a Year Range with length 10', () => {
      expect(yearRangeModel.yearRange.length).toBe(10);
    });

    it('initializes the YearRange with the correct values', () => {
      testRange(yearRangeModel, minYear);
    });

    it('generates the Year Range with min year divisible by 10', () => {
      expect(yearRangeModel.yearRange[0] % 10).toBe(0);
    });

    it('generates the YearRange with (max year + 1) divisible by 10', () => {
      expect((yearRangeModel.yearRange[yearRangeModel.yearRange.length - 1] + 1) % 10).toBe(0);
    });

    it('checks if a number is within the YearRange or not', () => {
      testRange(yearRangeModel, minYear);
      expect(yearRangeModel.inRange(minYear - 1)).toBe(false);
      expect(yearRangeModel.inRange(maxYear + 1)).toBe(false);
    });

    it('returns the mid number in the Year Range', () => {
      expect(yearRangeModel.middleYear).toBe(minYear + 5);
      expect(yearRangeModel.middleYear).toBe(maxYear - 4);
    });

    it('returns a new YearRangeModel for the next decade', () => {
      let testRangeModel: YearRangeModel = yearRangeModel.nextDecade();

      expect(testRangeModel).not.toBe(yearRangeModel);

      testRange(testRangeModel, minYear + 10);

      testRangeModel = testRangeModel.nextDecade();

      testRange(testRangeModel, minYear + 20);
    });

    it('returns a new YearRangeModel for the previous decade', () => {
      let testRangeModel: YearRangeModel = yearRangeModel.previousDecade();

      expect(testRangeModel).not.toBe(yearRangeModel);

      testRange(testRangeModel, minYear - 10);

      testRangeModel = testRangeModel.previousDecade();

      testRange(testRangeModel, minYear - 20);
    });

    it('returns a new YearRangeModel for the current decade', () => {
      const oldRangeModel: YearRangeModel = new YearRangeModel(1988);

      const date: Date = new Date();

      expect(oldRangeModel.inRange(date.getFullYear())).toBe(false);

      const testRangeModel: YearRangeModel = oldRangeModel.currentDecade();

      expect(testRangeModel.inRange(date.getFullYear())).toBe(true);
    });
  });
}
