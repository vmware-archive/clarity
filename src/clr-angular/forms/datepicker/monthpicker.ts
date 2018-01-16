/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {DateUtilsService} from "./providers/date-utils.service";
import {CalendarViewService} from "./providers/calendar-view.service";

@Component({
    selector: "clr-monthpicker",
    template: `
        <button 
            type="button"
            class="calendar-btn month"
            *ngFor="let month of months"
            (click)="changeMonth(month)">
            {{month}}
        </button>
    `,
    host: {
        "[class.monthpicker]": "true",
    }
})
export class ClrMonthPicker {
    constructor(
        private _dateUtilsService: DateUtilsService,
        private _calendarViewService: CalendarViewService
    ) {
    }

    /**
     * Returns an array of days in the TranslationWidth.Narrow format.
     * Eg: [S, M, T, ...] for en-US
     * @returns {ReadonlyArray<string>}
     */
    get months(): ReadonlyArray<string> {
        return this._dateUtilsService.localeMonthsWide;
    }

    /**
     * Changes the month value
     * @param {string} month
     */
    changeMonth(month: string): void {
        const calViewMonthIndex: number = this.months.indexOf(month);
        this._dateUtilsService.updateCalendar(this._dateUtilsService.calendarYear, calViewMonthIndex);
        //Disable Monthpicker
        this._calendarViewService.isMonthView = false;
    }
}
