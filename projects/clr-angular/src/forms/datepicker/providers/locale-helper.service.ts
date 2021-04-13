/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  FormatWidth,
  FormStyle,
  getLocaleDateFormat,
  getLocaleDayNames,
  getLocaleFirstDayOfWeek,
  getLocaleMonthNames,
  TranslationWidth,
} from '@angular/common';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { ClrDayOfWeek } from '../interfaces/day-of-week.interface';

/**
 * This service extracts the Angular CLDR data needed by the datepicker.
 */
@Injectable()
export class LocaleHelperService {
  constructor(@Inject(LOCALE_ID) public locale: string) {
    this.initializeLocaleData();
  }

  private _firstDayOfWeek = 0;
  private _localeDays: ReadonlyArray<ClrDayOfWeek>;
  private _localeMonthsAbbreviated: ReadonlyArray<string>;
  private _localeMonthsWide: ReadonlyArray<string>;
  private _localeDateFormat: string;

  get firstDayOfWeek(): number {
    return this._firstDayOfWeek;
  }

  get localeDays(): ReadonlyArray<ClrDayOfWeek> {
    return this._localeDays;
  }

  // leave for backward compatibility
  get localeDaysNarrow(): ReadonlyArray<string> {
    return this._localeDays.map(day => day.narrow);
  }

  get localeMonthsAbbreviated(): ReadonlyArray<string> {
    return this._localeMonthsAbbreviated;
  }

  get localeMonthsWide(): ReadonlyArray<string> {
    return this._localeMonthsWide;
  }

  get localeDateFormat(): string {
    return this._localeDateFormat;
  }

  /**
   * Initializes the locale data.
   */
  private initializeLocaleData(): void {
    // Order in which these functions is called is very important.
    this.initializeFirstDayOfWeek();
    this.initializeLocaleDateFormat();
    this.initializeLocaleMonthsAbbreviated();
    this.initializeLocaleMonthsWide();
    this.initializeLocaleDays();
  }

  /**
   * Initialize day names based on the locale.
   * eg: [{day: Sunday, narrow: S}, {day: Monday, narrow: M}...] for en-US.
   */
  private initializeLocaleDays(): void {
    // Get locale day names starting with Sunday
    const tempArr = [];
    const tempWideArr: string[] = getLocaleDayNames(this.locale, FormStyle.Standalone, TranslationWidth.Wide).slice();
    const tempNarrowArr: string[] = getLocaleDayNames(
      this.locale,
      FormStyle.Standalone,
      TranslationWidth.Narrow
    ).slice();
    // Get first day of the week based on the locale
    const firstDayOfWeek: number = this.firstDayOfWeek;
    for (let i = 0; i < 7; i++) {
      tempArr.push({ day: tempWideArr[i], narrow: tempNarrowArr[i] });
    }
    // Rearrange the tempArr to start with the first day of the week based on the locale.
    if (firstDayOfWeek > 0) {
      const prevDays: { day: string; narrow: string }[] = tempArr.splice(0, firstDayOfWeek);
      tempArr.push(...prevDays);
    }
    this._localeDays = tempArr;
  }

  /**
   * Initializes the array of month names in the TranslationWidth.Abbreviated format.
   * e.g. `[Jan, Feb, ...]` for en-US
   */
  private initializeLocaleMonthsAbbreviated(): void {
    this._localeMonthsAbbreviated = getLocaleMonthNames(
      this.locale,
      FormStyle.Standalone,
      TranslationWidth.Abbreviated
    ).slice();
  }

  /**
   * Initializes the array of month names in the TranslationWidth.Wide format.
   * e.g. `[January, February, ...]` for en-US
   */
  private initializeLocaleMonthsWide(): void {
    this._localeMonthsWide = getLocaleMonthNames(this.locale, FormStyle.Standalone, TranslationWidth.Wide).slice();
  }

  /**
   * Initializes the first day of the week based on the locale.
   */
  private initializeFirstDayOfWeek(): void {
    this._firstDayOfWeek = getLocaleFirstDayOfWeek(this.locale);
  }

  private initializeLocaleDateFormat(): void {
    this._localeDateFormat = getLocaleDateFormat(this.locale, FormatWidth.Short);
  }
}
