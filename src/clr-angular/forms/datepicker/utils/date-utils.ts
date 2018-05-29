/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { WeekDay } from '@angular/common';

/**
 * Returns the number of days in a month.
 */
export function getNumberOfDaysInTheMonth(year: number, month: number): number {
  // If we go to the next month, but use a day of 0, it returns the last day from the previous month
  return new Date(year, month + 1, 0).getDate();
}

/**
 * Returns the day for the corresponding date where 0 represents Sunday.
 */
export function getDay(year: number, month: number, date: number): WeekDay {
  return new Date(year, month, date).getDay();
}

/**
 * Takes in a year and if it is a 2 digit year, returns the corresponding 4 digit year.
 * Window of 80 years before and 20 years after the present year.
 * Credit: https://github.com/globalizejs/globalize/blob/e1b31cd6a4f1cff75b185b68b7a32220aac5196f/src/date/parse.js
 */
export function parseToFourDigitYear(year: number): number {
  if (year > 9999 || (year > 100 && year < 999) || year < 10) {
    return -1;
  }
  if (year > 999) {
    return year;
  }
  const currYear: number = new Date().getFullYear();
  const century: number = Math.floor(currYear / 100) * 100;
  let result: number = year + century;
  if (result > currYear + 20) {
    result = result - 100;
  }
  return result;
}
