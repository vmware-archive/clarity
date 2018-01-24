/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {CalendarCell} from "./calendar-cell";
import {CalendarDate} from "./calendar-date";
import {CalendarMatrix} from "./calendar-matrix";
import {CalendarView} from "./calendar-view";

export default function(): void {
    describe("Calendar Matrix", function() {
        let calendarMatrix: CalendarMatrix;
        let calendarView: CalendarView;
        let prev: CalendarCell[];
        let curr: CalendarCell[];
        let next: CalendarCell[];

        beforeEach(() => {
            // Generating the month of January in 2018 manually.
            prev = generateCalendarCells(2017, 11, 31, 31, true);
            curr = generateCalendarCells(2018, 0, 1, 31, false);
            next = generateCalendarCells(2018, 1, 1, 10, true);
            calendarView = new CalendarView(2018, 0);

            // Generating the calendar matrix using the manually generated data.
            calendarMatrix = new CalendarMatrix(prev, curr, next, calendarView);
        });

        it("expect the generated matrix in CalendarMatrix to be 6x7", () => {
            expect(calendarMatrix.matrix).not.toBeNull();
            expect(calendarMatrix.matrix.length).toBe(6);

            for (let i = 0; i < calendarMatrix.matrix.length; i++) {
                expect(calendarMatrix.matrix[i].length).toBe(7);
            }
        });

        it("expect the dates from the current CalendarView to be in the Matrix", () => {
            expect(calendarMatrix.isDateInMatrix(new CalendarDate(2017, 11, 31))).toBe(false);
            for (let i = 1; i <= 31; i++) {
                expect(calendarMatrix.isDateInMatrix(new CalendarDate(2018, 0, i))).toBe(true);
            }
            for (let i = 1; i <= 10; i++) {
                expect(calendarMatrix.isDateInMatrix(new CalendarDate(2018, 1, i))).toBe(false);
            }
        });

        it("sets the active flag for dates in the CalendarView", () => {
            const calendarDate: CalendarDate = new CalendarDate(2018, 0, 1);
            calendarMatrix.setDateActiveFlag(calendarDate, true);
            const matrix: CalendarCell[][] = calendarMatrix.matrix;

            for (let i = 0; i < 6; i++) {
                for (let j = 0; j < 7; j++) {
                    if (i === 0 && j === 1) {
                        expect(matrix[i][j].isActive).toBe(true);
                    } else {
                        expect(matrix[i][j].isActive).toBe(false);
                    }
                }
            }
        });

        it("doesn't set the active flag for dates in the CalendarView", () => {
            const calendarDate: CalendarDate = new CalendarDate(2018, 1, 1);
            calendarMatrix.setDateActiveFlag(calendarDate, true);
            const matrix: CalendarCell[][] = calendarMatrix.matrix;

            for (let i = 0; i < 6; i++) {
                for (let j = 0; j < 7; j++) {
                    expect(matrix[i][j].isActive).toBe(false);
                }
            }
        });

        it("sets the focusable flag for dates in the CalendarView", () => {
            const calendarDate: CalendarDate = new CalendarDate(2018, 0, 1);
            calendarMatrix.setDateFocusableFlag(calendarDate, true);
            const matrix: CalendarCell[][] = calendarMatrix.matrix;

            for (let i = 0; i < 6; i++) {
                for (let j = 0; j < 7; j++) {
                    if (i === 0 && j === 1) {
                        expect(matrix[i][j].isFocusable).toBe(true);
                    } else {
                        expect(matrix[i][j].isFocusable).toBe(false);
                    }
                }
            }
        });

        it("doesn't set the active flag for dates in the CalendarView", () => {
            const calendarDate: CalendarDate = new CalendarDate(2018, 1, 1);
            calendarMatrix.setDateFocusableFlag(calendarDate, true);
            const matrix: CalendarCell[][] = calendarMatrix.matrix;

            for (let i = 0; i < 6; i++) {
                for (let j = 0; j < 7; j++) {
                    expect(matrix[i][j].isFocusable).toBe(false);
                }
            }
        });
    });
}

function generateCalendarCells(year: number, month: number, from: number, to: number,
                               disabled: boolean): CalendarCell[] {
    const temp: CalendarCell[] = [];
    for (let i = from; i <= to; i++) {
        const calendarDate: CalendarDate = new CalendarDate(year, month, i);
        const calendarCell: CalendarCell = new CalendarCell(calendarDate, false, disabled);
        temp.push(calendarCell);
    }
    return temp;
}
