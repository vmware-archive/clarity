/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Inject, Injectable, LOCALE_ID} from "@angular/core";
import {
    FormStyle, getLocaleDayNames, getLocaleFirstDayOfWeek, getLocaleMonthNames, TranslationWidth
} from "@angular/common";
import {CalendarCell} from "../model/calendar-cell";
import {getDay, getNextMonth, getNumberOfDaysInTheMonth, getPreviousMonth} from "../utils/date-utils";
import {CalendarDate} from "../model/calendar-date";
import {CalendarView} from "../model/calendar-view";

const NO_OF_DAYS_IN_A_WEEK: number = 7;
const NO_OF_ROWS_IN_CALENDAR_VIEW: number = 6;
const TOTAL_DAYS_IN_DAYS_VIEW: number = NO_OF_DAYS_IN_A_WEEK * NO_OF_ROWS_IN_CALENDAR_VIEW;

@Injectable()
export class DateUtilsService {
    constructor(@Inject(LOCALE_ID) public locale: string) {
        this.initializeLocaleDaysNarrow();
        this.initializeCalendar();
    }

    private initializeCalendar(): void {
        this.initializeCalendarMonthAndYear();
        this._currentCalendarMatrix = this.generateCalendarMatrix(this.calendarYear, this.calendarMonth);
    }

    private _currentCalendarMatrix: CalendarCell[][];

    get currentCalendarMatrix(): CalendarCell[][] {
        return this._currentCalendarMatrix;
    }

    private _localeDaysNarrow: ReadonlyArray<string>;

    /**
     * Initialize day names in the TranslationWidth.Narrow format based on the locale.
     * eg: [S, M, T...] for en-US.
     */
    private initializeLocaleDaysNarrow(): void {
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

    /**
     * Gets the first day of the current month to figure out how many dates of previous month
     * are needed to complete the Calendar View based on the first day of the week.
     * eg: Assuming locale en-US, the first day of the week is Sunday,
     * if first day of the current month lands on Wednesday, then
     * (this.getDay function would return 3 since
     * first day of the week is 0), we need the 3 days from the previous month.
     * @param {number} year
     * @param {number} month
     * @returns {number}
     */
    private datesFromPreviousMonthInCalendarView(year: number, month: number): number {
        const firstDayOfCurrMonth: number = getDay(year, month, 1);
        const firstDayOfTheWeek: number = getLocaleFirstDayOfWeek(this.locale);

        if (firstDayOfCurrMonth >= firstDayOfTheWeek) {
            return firstDayOfCurrMonth - firstDayOfTheWeek;
        } else {
            return NO_OF_DAYS_IN_A_WEEK + firstDayOfCurrMonth - firstDayOfTheWeek;
        }
    }

    /**
     * Generates and returns a 6x7 matrix of DateCell for the year and month passed.
     * The 6x7 matrix is structured according to the first day of the week.
     * 6 rows to accommodate months which might have dates spanning over 6 weeks.
     * 7 columns because there are 7 days in a week :P :D
     * @param {number} year
     * @param {number} month
     * @returns {CalendarCell[][]}
     */
    generateCalendarMatrix(year: number, month: number): CalendarCell[][] {
        const noOfDaysInPrevMonth: number = getNumberOfDaysInTheMonth(year, month - 1);
        const noOfDaysInCurrMonth: number = getNumberOfDaysInTheMonth(year, month);

        const datesInPreviousMonth: CalendarCell[]
            = this.generateDateCellsFromPreviousMonth(year, month, noOfDaysInPrevMonth);

        const datesinCurrentMonth: CalendarCell[]
            = this.generateDateCellsFromCurrentMonth(year, month, noOfDaysInCurrMonth);

        const noOfDaysInNextMonth: number
            = TOTAL_DAYS_IN_DAYS_VIEW - (noOfDaysInCurrMonth + datesInPreviousMonth.length);

        const datesInNextMonth: CalendarCell[]
            = this.generateDateCellsFromNextMonth(year, month, noOfDaysInNextMonth);

        return this.convertCalendarCellsIntoMatrix(datesInPreviousMonth, datesinCurrentMonth, datesInNextMonth);
    }

    private generateDateCellsFromPreviousMonth(year: number, month: number, noOfDays: number): CalendarCell[] {
        const datesFromPrevMonthInCalendarView: number = this.datesFromPreviousMonthInCalendarView(year, month);
        const previousMonthView: CalendarView = getPreviousMonth(year, month);
        const datesInPreviousMonth: CalendarCell[]
            = Array(datesFromPrevMonthInCalendarView)
            .fill(null)
            .map((date, index) => {
                const calendarDate: CalendarDate = new CalendarDate(
                    noOfDays - (datesFromPrevMonthInCalendarView - (index + 1)),
                    previousMonthView.month,
                    previousMonthView.year
                );
                return new CalendarCell(
                    calendarDate,
                    false,
                    true
                );
            });
        return datesInPreviousMonth;
    }

    private generateDateCellsFromCurrentMonth(year: number, month: number, noOfDays: number): CalendarCell[] {
        const datesinCurrentMonth: CalendarCell[]
            = Array(noOfDays)
            .fill(null)
            .map((date, index) => {
                const calDate: CalendarDate = new CalendarDate(
                    index + 1,
                    month,
                    year
                );
                return new CalendarCell(
                    calDate,
                    false
                );
            });

        //Check for today's date
        if (year === this.currentYear && month === this.currentMonth) {
            datesinCurrentMonth[this.currentDate - 1].isTodaysDate = true;
        }
        return datesinCurrentMonth;
    }

    private generateDateCellsFromNextMonth(year: number, month: number, noOfDays: number): CalendarCell[] {
        const nextMonth: CalendarView = getNextMonth(year, month);
        const datesInNextMonth: CalendarCell[]
            = Array(noOfDays)
            .fill(null)
            .map((date, index) => {
                const calDate: CalendarDate = new CalendarDate(
                    index + 1,
                    nextMonth.month,
                    nextMonth.year
                );
                return new CalendarCell(calDate, false, true);
            });

        return datesInNextMonth;
    }

    private convertCalendarCellsIntoMatrix(
        prev: CalendarCell[], curr: CalendarCell[], next: CalendarCell[]): CalendarCell[][] {
        const combinationArr: CalendarCell[] = [
            ...prev,
            ...curr,
            ...next
        ];

        const matrix: CalendarCell[][] = [];
        for (let i = 0; i < NO_OF_ROWS_IN_CALENDAR_VIEW; i++) {
            const tempArr: CalendarCell[] = [];
            for (let j = 0; j < NO_OF_DAYS_IN_A_WEEK; j++) {
                tempArr.push(combinationArr.shift());
            }
            matrix.push(tempArr);
        }
        return matrix;
    }
}
