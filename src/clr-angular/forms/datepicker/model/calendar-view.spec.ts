/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {CalendarDate} from "./calendar-date";
import {CalendarView} from "./calendar-view";

export default function(): void {
    describe("Calendar View", function() {
        const calendarView: CalendarView = new CalendarView(2018, 5);
        const calendarDate1: CalendarDate = new CalendarDate(2018, 5, 25);
        const calendarDate2: CalendarDate = new CalendarDate(2018, 1, 25);

        it("checks if the passed CalendarDate is in the CalendarView or not", () => {
            expect(calendarView.year).toBe(2018);
            expect(calendarView.month).toBe(5);

            expect(calendarView.inCalendarView(calendarDate1)).toBe(true);
            expect(calendarView.inCalendarView(calendarDate2)).toBe(false);
        });
    });
}
