/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { datesAreEqual, parseToFourDigitYear, getDay, getNumberOfDaysInTheMonth } from './date-utils';

describe('date utility functions', () => {
  it('should get the number of days in the month', () => {
    expect(getNumberOfDaysInTheMonth(2000, 0)).toBe(31);
    expect(getNumberOfDaysInTheMonth(2000, 1)).toBe(29);
  });

  it('should take a two digit year and convert to a four digit year', () => {
    // window of 80 years before and 20 years after the present year.
    expect(parseToFourDigitYear(10)).toBe(2010);
    expect(parseToFourDigitYear(1000)).toBe(1000);
    expect(parseToFourDigitYear(90)).toBe(1990);
  });

  it('should return the day for the corresponding date where 0 represents Sunday', () => {
    expect(getDay(2000, 1, 1)).toBe(2);
    expect(getDay(2000, 1, 2)).not.toBe(2);
  });

  it('should determine if two dates are equal', () => {
    const date1 = new Date(2000, 1, 1);
    const date2 = new Date(2000, 1, 1);

    expect(datesAreEqual(date1, date2)).toBe(true);
    expect(datesAreEqual(date2, null)).toBe(false);
  });
});
