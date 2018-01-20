/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, ElementRef, HostListener} from "@angular/core";
import {DateUtilsService} from "./providers/date-utils.service";
import {CalendarViewService} from "./providers/calendar-view.service";
import {DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, UP_ARROW} from "../../utils/key-codes/key-codes";

@Component({
    selector: "clr-monthpicker",
    template: `
        <button 
            type="button"
            class="calendar-btn month"
            *ngFor="let month of months"
            (click)="changeMonth(month)"
            [class.is-active]="month === calendarMonth"
            [attr.tabindex]="getTabIndex(month)">
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
        private _calendarViewService: CalendarViewService,
        private _elRef: ElementRef
    ) {
        this._focusedMonth = this._dateUtilsService.calendarMonth;
        //this._calendarViewService.focusCell(this._elRef);
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

    private _focusedMonth: number;

    @HostListener("keydown", ["$event"])
    onKeyDown(event: KeyboardEvent) {
        const keyCode: number = event.keyCode;
        if (keyCode === UP_ARROW && this._focusedMonth > 0) {
            this._focusedMonth--;
            this._calendarViewService.focusCell(this._elRef);
        } else if (keyCode === DOWN_ARROW  && this._focusedMonth < 11) {
            this._focusedMonth++;
            this._calendarViewService.focusCell(this._elRef);
        } else if (keyCode === RIGHT_ARROW && this._focusedMonth < 6) {
            this._focusedMonth = this._focusedMonth + 6;
            this._calendarViewService.focusCell(this._elRef);
        } else if (keyCode === LEFT_ARROW && this._focusedMonth > 5) {
            this._focusedMonth = this._focusedMonth - 6;
            this._calendarViewService.focusCell(this._elRef);
        }
    }

    getTabIndex(month: string): number {
        return month === this.months[this._focusedMonth] ? 0 : -1;
    }

    get calendarMonth(): string {
        const calViewMonth = this._dateUtilsService.calendarMonth || this._dateUtilsService.currentMonth;
        return this.months[calViewMonth];
    }
}
