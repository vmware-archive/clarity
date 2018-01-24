/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {CalendarDate} from "./calendar-date";

export class CalendarView {
    constructor(public year: number, public month: number) {}

    inCalendarView(calDate: CalendarDate): boolean {
        return (this.year === calDate.year && this.month === calDate.month);
    }
}
