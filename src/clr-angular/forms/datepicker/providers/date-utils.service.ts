/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Inject, Injectable, LOCALE_ID} from "@angular/core";
import {
    FormStyle, getLocaleDayNames, getLocaleFirstDayOfWeek, getLocaleMonthNames, TranslationWidth,
    WeekDay
} from "@angular/common";

const TOTAL_DAYS_IN_MONTH_VIEW: number = 42;
const NO_OF_DAYS_IN_A_WEEK: number = 7;

@Injectable()
export class DateUtilsService {
    constructor(@Inject(LOCALE_ID) public locale: string) {
        this.initializeLocaleDaysShort();
    }

    private _localeDaysNarrow: ReadonlyArray<string>;

    private initializeLocaleDaysShort(): void {
        //Get locale day names starting with Sunday
        const tempArr: string[] = getLocaleDayNames(this.locale, FormStyle.Format, TranslationWidth.Narrow);
        //Get first day of the week based on the locale
        const firstDayOfWeek: number = getLocaleFirstDayOfWeek(this.locale);
        //Rearrange the tempArr to start with the first day of the week based on the locale.
        if (firstDayOfWeek > 0) {
            const prevDays: string[] = tempArr.splice(0, firstDayOfWeek);
            prevDays.forEach((item) => {
                tempArr.push(item);
            });
        }
        this._localeDaysNarrow = tempArr;
    }

    /**
     * Returns an array of days in the TranslationWidth.Narrow format factoring the
     * first day of the week.
     * Eg: [S, M, T, ...] for en-US
     * @returns {ReadonlyArray<string>}
     */
    get localeDaysNarrow(): ReadonlyArray<string> {
        return this._localeDaysNarrow;
    }

    /**
     * Returns an array of month names in the TranslationWidth.Abbreviated format.
     * e.g. `[Jan, Feb, ...]` for en-US
     * @returns {ReadonlyArray<string>}
     */
    get localeMonthsAbbreviated(): ReadonlyArray<string> {
        return getLocaleMonthNames(this.locale, FormStyle.Format, TranslationWidth.Abbreviated);
    }

    /**
     * Returns an array of month names in the TranslationWidth.Wide format.
     * e.g. `[January, February, ...]` for en-US
     * @returns {ReadonlyArray<string>}
     */
    get localeMonthsWide(): ReadonlyArray<string> {
        return getLocaleMonthNames(this.locale, FormStyle.Format, TranslationWidth.Wide);
    }

    /**
     * Month value in the current calendar view.
     */
    private _calendarMonth: number;

    get calendarMonth(): number {
        return this._calendarMonth;
    }

    set calendarMonth(value: number) {
        if (this._calendarMonth !== value) {
            this._calendarMonth = value;
        }
    }

    /**
     * Year value in the current calendar view.
     */
    private _calendarYear: number;

    get calendarYear(): number {
        return this._calendarYear;
    }

    set calendarYear(value: number) {
        if (this._calendarYear !== value) {
            this._calendarYear = value;
        }
    }

    /**
     * Variable to store today's date.
     * @type {Date}
     */
    todaysFullDate: Date = new Date();

    /**
     * Returns the current date.
     * eg: 1, 2, 3, ... 31.
     * @returns {number}
     */
    get currentDate(): number {
        return this.todaysFullDate.getDate();
    }

    /**
     * Returns the current month as a 0-based value.
     * eg: 0, 1, 2, ... 12.
     * @returns {number}
     */
    get currentMonth(): number {
        return this.todaysFullDate.getMonth();
    }

    /**
     * Returns the current year.
     * eg: 2018
     * @returns {number}
     */
    get currentYear(): number {
        return this.todaysFullDate.getFullYear();
    }

    /**
     * Initializes the current month and year.
     */
    private initializeCalendarMonthAndYear(): void {
        this.calendarMonth = this.currentMonth;
        this.calendarYear = this.currentYear;
    }

    /**
     * Initializes the calendar view.
     */
    initializeCalendar(): void {
        this.initializeCalendarMonthAndYear();
    }

    /**
     * Returns the string value of the month in the TranslationWidth.Wide format
     * @param {string} month
     */
    getMonthLong(month: number): string {
        return this.localeMonthsWide[month];
    }

    /**
     * Returns the string value of the month in the TranslationWidth.Abbreviated format
     * @param {number} month
     * @returns {string}
     */
    getMonthAbbreviated(month: number): string {
        return this.localeMonthsAbbreviated[month];
    }
}
