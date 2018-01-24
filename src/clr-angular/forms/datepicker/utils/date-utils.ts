/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {WeekDay} from "@angular/common";
import {CalendarView} from "../model/calendar-view";

/**
 * Returns the number of days in a month.
 */
export function getNumberOfDaysInTheMonth(year: number, month: number): number {
    // month + 1 because we want to go to the next month
    // date 0 because date is 1 based and 0 means we are getting the last date of the previous month.
    // confusing but works
    return (new Date(year, month + 1, 0)).getDate();
}

/**
 * Returns the day for the corresponding date where 0 represents Sunday.
 */
export function getDay(year: number, month: number, date: number): WeekDay {
    return (new Date(year, month, date)).getDay();
}

/**
 * Returns a [month, year] tuple of the previous month based on the month and year passed to
 * this method.
 */
export function getPreviousMonth(year: number, month: number): CalendarView {
    if (month === 0) {
        return new CalendarView(year - 1, 11);
    } else {
        return new CalendarView(year, month - 1);
    }
}

/**
 * Returns a [month, year] tuple of the next month based on the month and year passed to
 * this method.
 */
export function getNextMonth(year: number, month: number): CalendarView {
    if (month === 11) {
        return new CalendarView(year + 1, 0);
    } else {
        return new CalendarView(year, month + 1);
    }
}

/**
 * Takes in a 2 digit year and returns the corresponding 4 digit year.
 * Window of 80 years before and 20 years after the present year.
 * Credit: https://github.com/globalizejs/globalize/blob/e1b31cd6a4f1cff75b185b68b7a32220aac5196f/src/date/parse.js
 */
export function parseToFourDigitYear(year: number): number {
    if (year < 0 || year > 100) {
        return -1;
    }
    const currYear: number = (new Date()).getFullYear();
    const century: number = Math.floor(currYear / 100) * 100;
    let result: number = year + century;
    if (result > currYear + 20) {
        result = result - 100;
    }
    return result;
}
