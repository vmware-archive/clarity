/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {CalendarDate} from "./calendar-date";

export default function(): void {
    describe("Calendar Date", function() {
        const calendarDate1: CalendarDate = new CalendarDate(2018, 0, 1);
        const calendarDate2: CalendarDate = new CalendarDate(2018, 5, 21);
        const calendarDate3: CalendarDate = new CalendarDate(2018, 0, 1);

        it("2 Calendar Dates are equal when the month, year and date matches", () => {
            expect(calendarDate1.isEqual(calendarDate3)).toBe(true);
            expect(calendarDate3.isEqual(calendarDate1)).toBe(true);

            expect(calendarDate1.isEqual(calendarDate2)).toBe(false);
            expect(calendarDate2.isEqual(calendarDate1)).toBe(false);

            expect(calendarDate3.isEqual(calendarDate2)).toBe(false);
            expect(calendarDate2.isEqual(calendarDate3)).toBe(false);

            expect(calendarDate1.isEqual(null)).toBe(false);
        });

        it("converts a calendar date to the javascript date object", () => {
            const date1: Date = calendarDate1.toDate();
            const date2: Date = calendarDate2.toDate();

            expect(date1).not.toBeNull();
            expect(date1.getDate()).toBe(1);
            expect(date1.getMonth()).toBe(0);
            expect(date1.getFullYear()).toBe(2018);

            expect(date2).not.toBeNull();
            expect(date2.getDate()).toBe(21);
            expect(date2.getMonth()).toBe(5);
            expect(date2.getFullYear()).toBe(2018);
        });
    });
}
