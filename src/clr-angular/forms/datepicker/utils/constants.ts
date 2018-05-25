/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

/**
 * This is the en-001 short locale date format. Setting as default.
 */
export const DEFAULT_LOCALE_FORMAT: string = 'dd/MM/y';

// https://en.wikipedia.org/wiki/Date_format_by_country
export const LITTLE_ENDIAN_REGEX: RegExp = /d+.+m+.+y+/i;
export const MIDDLE_ENDIAN_REGEX: RegExp = /m+.+d+.+y+/i;
// No need for BIG_ENDIAN_REGEX because anything that doesn't satisfy the above 2
// is automatically BIG_ENDIAN

export const DELIMITER_REGEX: RegExp = /d+|m+|y+/i;

export const USER_INPUT_REGEX: RegExp = /\d+/g;

export const MOBILE_USERAGENT_REGEX: RegExp = /Mobi/i;

export const RTL_REGEX: RegExp = /\u200f/g;

export const YEAR: string = 'YYYY';
export const MONTH: string = 'MM';
export const DATE: string = 'DD';

export type FormatType = 'LITTLE_ENDIAN' | 'MIDDLE_ENDIAN' | 'BIG_ENDIAN';

export type InputDateDisplayFormat = {
  readonly name: FormatType;
  readonly format: [string, string, string];
};

export const LITTLE_ENDIAN: InputDateDisplayFormat = {
  name: 'LITTLE_ENDIAN',
  format: [DATE, MONTH, YEAR],
};

export const MIDDLE_ENDIAN: InputDateDisplayFormat = {
  name: 'MIDDLE_ENDIAN',
  format: [MONTH, DATE, YEAR],
};

export const BIG_ENDIAN: InputDateDisplayFormat = {
  name: 'BIG_ENDIAN',
  format: [YEAR, MONTH, DATE],
};

export const NO_OF_DAYS_IN_A_WEEK: number = 7;
export const NO_OF_ROWS_IN_CALENDAR_VIEW: number = 6;
export const TOTAL_DAYS_IN_DAYS_VIEW: number = NO_OF_DAYS_IN_A_WEEK * NO_OF_ROWS_IN_CALENDAR_VIEW;
