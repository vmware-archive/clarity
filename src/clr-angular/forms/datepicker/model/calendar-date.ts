/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

export class CalendarDate {
    constructor(public year: number, public month: number, public date: number) {}

    /**
     * Checks if the passed CalendarDate is equal to itself.
     */
    isEqual(calDate: CalendarDate) {
        if (calDate) {
            return ((this.year === calDate.year) && (this.month === calDate.month) && (this.date === calDate.date));
        }
        return false;
    }

    /**
     * Converts the CalendarDate into the Javascript Date object.
     */
    toDate(): Date {
        const date: Date = new Date();
        date.setMonth(this.month);
        date.setFullYear(this.year);
        date.setDate(this.date);
        return date;
    }
}
