/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {NO_OF_DAYS_IN_A_WEEK, NO_OF_ROWS_IN_CALENDAR_VIEW} from "../utils/constants";

import {CalendarCell} from "./calendar-cell";
import {CalendarDate} from "./calendar-date";
import {CalendarView} from "./calendar-view";

export class CalendarMatrix {
    constructor(public prev: CalendarCell[], public current: CalendarCell[], public next: CalendarCell[],
                public calendarView: CalendarView) {
        this.convertCalendarCellsIntoMatrix(prev, current, next);
    }

    private _matrix: CalendarCell[][];

    /**
     * CalendarCell matrix. Size 6x7
     */
    get matrix(): CalendarCell[][] {
        return this._matrix;
    }

    /**
     * Checks if the CalendarDate passed is in the CalendarMatrix.
     */
    isDateInMatrix(calDate: CalendarDate): boolean {
        if (!this.calendarView.inCalendarView(calDate)) {
            return false;
        }
        return true;
    }

    /**
     * If the CalendarDate exists in the matrix, sets its active flag
     */
    setDateActiveFlag(calDate: CalendarDate, flag: boolean): void {
        if (this.isDateInMatrix(calDate)) {
            this.current[calDate.date - 1].isActive = flag;
        }
    }

    /**
     * If the CalendarDate exists in the matrix, sets its focusable flag
     */
    setDateFocusableFlag(calDate: CalendarDate, flag: boolean): void {
        if (this.isDateInMatrix(calDate)) {
            this.current[calDate.date - 1].isFocusable = flag;
        }
    }

    /**
     * Using the Calendar cells from the previous, current and next month, this function
     * generates the Calendar Matrix/Table which is used to render the current Calendar View.
     */
    private convertCalendarCellsIntoMatrix(prev: CalendarCell[], curr: CalendarCell[], next: CalendarCell[]): void {
        const combinationArr: CalendarCell[] = [...prev, ...curr, ...next];

        const matrix: CalendarCell[][] = [];
        for (let i = 0; i < NO_OF_ROWS_IN_CALENDAR_VIEW; i++) {
            const tempArr: CalendarCell[] = [];
            for (let j = 0; j < NO_OF_DAYS_IN_A_WEEK; j++) {
                tempArr.push(combinationArr.shift());
            }
            matrix.push(tempArr);
        }

        this._matrix = matrix;
    }
}
