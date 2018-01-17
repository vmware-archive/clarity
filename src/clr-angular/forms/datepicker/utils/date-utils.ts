/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {WeekDay} from "@angular/common";
import {CalendarView} from "../model/calendar-view";

/**
 * Returns the number of days in a month.
 * eg: 28, 29, 30 or 31
 * @param {number} year
 * @param {number} month
 * @returns {number}
 */
export function getNumberOfDaysInTheMonth(year: number, month: number): number {
    //month + 1 because we want to go to the next month
    //date 0 because date is 1 based and 0 means we are getting the last date of the previous month.
    //confusing but works
    return (new Date(year,  month + 1, 0)).getDate();
}

/**
 * Returns the day for the corresponding date where 0 represents Sunday.
 * @param {number} year
 * @param {number} month
 * @param {number} date
 * @returns {number}
 */
export function getDay(year: number, month: number, date: number): WeekDay {
    return (new Date(year, month, date)).getDay();
}

/**
 * Returns a [month, year] tuple of the previous month based on the month and year passed to
 * this method.
 * @param {number} month
 * @param {number} year
 * @returns {[number , number]}
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
 * @param {number} month
 * @param {number} year
 * @returns {[number , number]}
 */
export function getNextMonth(year: number, month: number): CalendarView {
    if (month === 11) {
        return new CalendarView(year + 1, 0);
    } else {
        return new CalendarView(year, month + 1);
    }
}
