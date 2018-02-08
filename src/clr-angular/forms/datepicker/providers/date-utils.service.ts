/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
    FormStyle,
    getLocaleDayNames,
    getLocaleFirstDayOfWeek,
    getLocaleMonthNames,
    TranslationWidth
} from "@angular/common";
import {Inject, Injectable, LOCALE_ID} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

import {CalendarCell} from "../model/calendar-cell";
import {CalendarDate} from "../model/calendar-date";
import {CalendarMatrix} from "../model/calendar-matrix";
import {CalendarView} from "../model/calendar-view";
import {NO_OF_DAYS_IN_A_WEEK, TOTAL_DAYS_IN_DAYS_VIEW} from "../utils/constants";
import {getDay, getNextMonth, getNumberOfDaysInTheMonth, getPreviousMonth} from "../utils/date-utils";

@Injectable()
export class DateUtilsService {
    constructor(@Inject(LOCALE_ID) public locale: string) {
        this.initializeLocaleDaysNarrow();
    }

    /**
     * Sets the calendar year and month and generates the calendar matrix.
     */
    initializeCalendar(): void {
        this.initializeCalendarMonthAndYear();
        this.generateCalendarMatrix(this.calendarYear, this.calendarMonth);
    }

    private _currentCalendarMatrix: CalendarMatrix;

    get currentCalendarMatrix(): CalendarMatrix {
        return this._currentCalendarMatrix;
    }

    private _localeDaysNarrow: ReadonlyArray<string>;

    /**
     * Initialize day names in the TranslationWidth.Narrow format based on the locale.
     * eg: [S, M, T...] for en-US.
     */
    private initializeLocaleDaysNarrow(): void {
        // Get locale day names starting with Sunday
        const tempArr: string[] = getLocaleDayNames(this.locale, FormStyle.Format, TranslationWidth.Narrow);
        // Get first day of the week based on the locale
        const firstDayOfWeek: number = getLocaleFirstDayOfWeek(this.locale);
        // Rearrange the tempArr to start with the first day of the week based on the locale.
        if (firstDayOfWeek > 0) {
            const prevDays: string[] = tempArr.splice(0, firstDayOfWeek);
            prevDays.forEach((item) => {
                tempArr.push(item);
            });
        }
        this._localeDaysNarrow = tempArr;
    }

    /**
     * Updates the calendar month and year.
     */
    updateCalendar(year: number, month: number): void {
        if (this.calendarYear === year && this.calendarMonth === month) {
            this._focusCellChanged.next();
            return;
        }
        this.calendarMonth = month;
        this.calendarYear = year;
        this.generateCalendarMatrix(this.calendarYear, this.calendarMonth);
        this._focusCellChanged.next();
    }

    private _focusCellChanged: Subject<void> = new Subject<void>();

    get focusCellChanged(): Observable<void> {
        return this._focusCellChanged.asObservable();
    }

    /**
     * Moves the calendar to the previous month
     */
    moveToPreviousMonth(): void {
        const calView: CalendarView = getPreviousMonth(this.calendarYear, this.calendarMonth);
        this.updateCalendar(calView.year, calView.month);
    }

    /**
     * Moves the calendar to the current date
     */
    moveToCurrentMonth(): void {
        this.updateCalendar(this.currentYear, this.currentMonth);
    }

    /**
     * Moves the calendar to the next month
     */
    moveToNextMonth(): void {
        const calView: CalendarView = getNextMonth(this.calendarYear, this.calendarMonth);
        this.updateCalendar(calView.year, calView.month);
    }

    /**
     * Returns an array of days in the TranslationWidth.Narrow format factoring the
     * first day of the week.
     * Eg: [S, M, T, ...] for en-US
     */
    get localeDaysNarrow(): ReadonlyArray<string> {
        return this._localeDaysNarrow;
    }

    /**
     * Returns an array of month names in the TranslationWidth.Abbreviated format.
     * e.g. `[Jan, Feb, ...]` for en-US
     */
    get localeMonthsAbbreviated(): ReadonlyArray<string> {
        return getLocaleMonthNames(this.locale, FormStyle.Format, TranslationWidth.Abbreviated);
    }

    /**
     * Returns an array of month names in the TranslationWidth.Wide format.
     * e.g. `[January, February, ...]` for en-US
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
     */
    todaysFullDate: Date = new Date();

    get todaysCalendarDate(): CalendarDate {
        return new CalendarDate(this.todaysFullDate.getFullYear(), this.todaysFullDate.getMonth(),
                                this.todaysFullDate.getDate());
    }

    /**
     * Returns the current date.
     * eg: 1, 2, 3, ... 31.
     */
    get currentDate(): number {
        return this.todaysFullDate.getDate();
    }

    /**
     * Returns the current month as a 0-based value.
     * eg: 0, 1, 2, ... 12.
     */
    get currentMonth(): number {
        return this.todaysFullDate.getMonth();
    }

    /**
     * Returns the current year.
     * eg: 2018
     */
    get currentYear(): number {
        return this.todaysFullDate.getFullYear();
    }

    /**
     * Date selected by the user
     */
    private _selectedDate: CalendarDate;

    get selectedDate(): CalendarDate {
        return this._selectedDate;
    }

    set selectedDate(value: CalendarDate) {
        if (value && !value.isEqual(this._selectedDate)) {
            if (this._selectedDate) {
                this.currentCalendarMatrix.setDateActiveFlag(this._selectedDate, false);
            }
            this._selectedDate = value;
            if (this.currentCalendarMatrix) {
                this.currentCalendarMatrix.setDateActiveFlag(value, true);
            }
        }
    }

    private _focusedDate: CalendarDate;

    get focusedDate(): CalendarDate {
        return this._focusedDate;
    }

    set focusedDate(value: CalendarDate) {
        if (value && !value.isEqual(this._focusedDate)) {
            if (this._focusedDate) {
                this.currentCalendarMatrix.setDateFocusableFlag(this._focusedDate, false);
            }
            this._focusedDate = value;
            if (this.currentCalendarMatrix) {
                this.currentCalendarMatrix.setDateFocusableFlag(value, true);
            }
        }
    }

    /**
     * Initializes the current month and year.
     */
    private initializeCalendarMonthAndYear(): void {
        if (this.selectedDate) {
            this.calendarYear = this.selectedDate.year;
            this.calendarMonth = this.selectedDate.month;
        } else {
            this.calendarYear = this.currentYear;
            this.calendarMonth = this.currentMonth;
        }
    }

    /**
     * Returns the string value of the month in the TranslationWidth.Wide format
     */
    getMonthLong(month: number): string {
        return this.localeMonthsWide[month];
    }

    /**
     * Returns the string value of the month in the TranslationWidth.Abbreviated format
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
     */
    private noOfDaysFromPreviousMonthInCalendarView(year: number, month: number): number {
        const firstDayOfCurrMonth: number = getDay(year, month, 1);
        const firstDayOfTheWeek: number = getLocaleFirstDayOfWeek(this.locale);

        if (firstDayOfCurrMonth >= firstDayOfTheWeek) {
            return firstDayOfCurrMonth - firstDayOfTheWeek;
        } else {
            return NO_OF_DAYS_IN_A_WEEK + firstDayOfCurrMonth - firstDayOfTheWeek;
        }
    }

    /**
     * Generates the Calendar Cells required in the current view from the previous month.
     */
    private generateCalendarCellsFromPreviousMonth(year: number, month: number, noOfDays: number): CalendarCell[] {
        const datesFromPrevMonthInCalendarView: number = this.noOfDaysFromPreviousMonthInCalendarView(year, month);
        const previousMonthView: CalendarView = getPreviousMonth(year, month);
        const datesInPreviousMonth: CalendarCell[] =
            Array(datesFromPrevMonthInCalendarView).fill(null).map((date, index) => {
                const calendarDate: CalendarDate =
                    new CalendarDate(previousMonthView.year, previousMonthView.month,
                                     noOfDays - (datesFromPrevMonthInCalendarView - (index + 1)));
                return new CalendarCell(calendarDate, false, true, false, false);
            });
        return datesInPreviousMonth;
    }

    /**
     * Generates the Calendar Cells for the current month.
     */
    private generateCalendarCellsFromCurrentMonth(year: number, month: number, noOfDays: number): CalendarCell[] {
        const datesinCurrentMonth: CalendarCell[] = Array(noOfDays).fill(null).map((date, index) => {
            const calDate: CalendarDate = new CalendarDate(year, month, index + 1);
            return new CalendarCell(calDate, false, false, false, false);
        });

        // Check for today's date
        if (year === this.currentYear && month === this.currentMonth) {
            datesinCurrentMonth[this.currentDate - 1].isTodaysDate = true;
        }
        return datesinCurrentMonth;
    }

    /**
     * Generates the Calendar Cells required in the current view from the next month.
     */
    private generateCalendarCellsFromNextMonth(year: number, month: number, noOfDays: number): CalendarCell[] {
        const nextMonth: CalendarView = getNextMonth(year, month);
        const datesInNextMonth: CalendarCell[] = Array(noOfDays).fill(null).map((date, index) => {
            const calDate: CalendarDate = new CalendarDate(nextMonth.year, nextMonth.month, index + 1);
            return new CalendarCell(calDate, false, true, false, false);
        });

        return datesInNextMonth;
    }

    /**
     * Generates and returns a 6x7 matrix of DateCell for the year and month passed.
     * The 6x7 matrix is structured according to the first day of the week.
     * 6 rows to accommodate months which might have dates spanning over 6 weeks.
     * 7 columns because there are 7 days in a week :P :D
     */
    generateCalendarMatrix(year: number, month: number): void {
        const noOfDaysInPrevMonth: number = getNumberOfDaysInTheMonth(year, month - 1);
        const noOfDaysInCurrMonth: number = getNumberOfDaysInTheMonth(year, month);

        const prev: CalendarCell[] = this.generateCalendarCellsFromPreviousMonth(year, month, noOfDaysInPrevMonth);

        const curr: CalendarCell[] = this.generateCalendarCellsFromCurrentMonth(year, month, noOfDaysInCurrMonth);

        const noOfDaysInNextMonth: number = TOTAL_DAYS_IN_DAYS_VIEW - (noOfDaysInCurrMonth + prev.length);

        const next: CalendarCell[] = this.generateCalendarCellsFromNextMonth(year, month, noOfDaysInNextMonth);

        this._currentCalendarMatrix = new CalendarMatrix(prev, curr, next, new CalendarView(year, month));
        this.setCalendarFlags();
    }

    /**
     * Set the selected and focusable cells in the calendar
     */
    private setCalendarFlags(): void {
        if (this.selectedDate) {
            this.currentCalendarMatrix.setDateActiveFlag(this.selectedDate, true);
        }
        const focusableCell: CalendarDate = this.getFocusableCell();
        this.currentCalendarMatrix.setDateFocusableFlag(focusableCell, true);
    }

    /**
     * Get the date that should be focusable initially in the calendar.
     */
    private getFocusableCell(): CalendarDate {
        if (this.focusedDate) {
            if (this.currentCalendarMatrix.isDateInMatrix(this.focusedDate)) {
                return this.focusedDate;
            }
            this.focusedDate = null;
        }
        if (this.selectedDate && this.currentCalendarMatrix.isDateInMatrix(this.selectedDate)) {
            return this.selectedDate;
        } else if (this.currentCalendarMatrix.isDateInMatrix(this.todaysCalendarDate)) {
            return this.todaysCalendarDate;
        } else {
            return new CalendarDate(this.calendarYear, this.calendarMonth, 15);
        }
    }
}
