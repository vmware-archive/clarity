/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

const YEARS_TO_DISPLAY: number = 10;

export class YearRangeModel {
  constructor(private readonly year: number) {
    this.generateYearRange();
  }

  yearRange: number[] = [];

  /**
   * Gets the number in the middle of the range.
   */
  get middleYear(): number {
    return this.yearRange[Math.floor(this.yearRange.length / 2)];
  }

  /**
   * Generates the year range based on the year parameter.
   * eg: If 2018 is passed the output will be [2010, 2011, ..., 2019]
   */
  private generateYearRange() {
    const remainder: number = this.year % YEARS_TO_DISPLAY;
    const floor: number = this.year - remainder;
    const ceil: number = floor + YEARS_TO_DISPLAY;
    this.yearRange = this.generateRange(floor, ceil);
  }

  /**
   * Function which generate a range of numbers from floor to ceil.
   */
  private generateRange(floor: number, ceil: number): number[] {
    return Array.from({ length: ceil - floor }, (v, k) => k + floor);
  }

  /**
   * Generates the YearRangeModel for the next decade.
   */
  nextDecade(): YearRangeModel {
    return new YearRangeModel(this.year + 10);
  }

  /**
   * Generates the YearRangeModel for the previous decade.
   */
  previousDecade(): YearRangeModel {
    return new YearRangeModel(this.year - 10);
  }

  /**
   * Generates the YearRangeModel for the current decade.
   */
  currentDecade(): YearRangeModel {
    return new YearRangeModel(new Date().getFullYear());
  }

  /**
   * Checks if the value is in the YearRangeModel.
   */
  inRange(value: number): boolean {
    return this.yearRange.indexOf(value) > -1;
  }
}
