/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {CalendarDate} from "./calendar-date";

export class CalendarCell {
    constructor(
        public calendarDate: CalendarDate,
        public isTodaysDate: boolean = false,
        public isDisabled: boolean = false,
        public isActive: boolean = false,
        public isFocusable: boolean = false) {
    }

    get tabIndex(): number {
        return this.isFocusable ? 0 : -1;
    }
}
