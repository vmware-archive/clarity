/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {CalendarCell} from "./calendar-cell";
import {CalendarDate} from "./calendar-date";

export default function(): void {
    describe("Calendar Cell", function() {
        const calendarDate: CalendarDate = new CalendarDate(2018, 0, 1);
        let calendarCell: CalendarCell;
        let calendarCellDefaults: CalendarCell;

        beforeEach(() => {
            calendarCell = new CalendarCell(calendarDate, false, false, false, false);
            calendarCellDefaults = new CalendarCell(calendarDate);
        });

        it("Gets the correct tab index based on whether the cell is focusable or not", () => {
            expect(calendarCell.isFocusable).toBe(false);
            expect(calendarCell.tabIndex).toBe(-1);

            calendarCell.isFocusable = true;
            expect(calendarCell.tabIndex).toBe(0);
        });

        it("Expects the default flags to be set correctly", () => {
            expect(calendarCellDefaults.isTodaysDate).toBe(false);
            expect(calendarCellDefaults.isDisabled).toBe(false);
            expect(calendarCellDefaults.isFocusable).toBe(false);
            expect(calendarCellDefaults.isActive).toBe(false);
        });
    });
}
