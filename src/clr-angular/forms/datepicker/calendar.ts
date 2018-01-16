/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Component, ElementRef, Injector, SkipSelf} from "@angular/core";
import {AbstractPopover} from "../../popover/common/abstract-popover";
import {Point} from "../../popover/common/popover";
import {DateUtilsService} from "./providers/date-utils.service";
import {CalendarViewService} from "./providers/calendar-view.service";
import {CalendarCell} from "./model/calendar-cell";
import {DateIOService} from "./providers/date-io.service";
import {CalendarDate} from "./model/calendar-date";
import {CalendarMatrix} from "./model/calendar-matrix";
import {IfOpenService} from "../../utils/conditional/if-open.service";

@Component({
    selector: "clr-calendar",
    templateUrl: "./calendar.html",
    host: {
        "[class.calendar]": "true",
    },
    providers: [DateUtilsService, CalendarViewService]
})
export class ClrCalendar extends AbstractPopover {

    constructor(
        @SkipSelf() parent: ElementRef,
        private _injector: Injector,
        private _dateUtilsService: DateUtilsService,
        private _dateIOService: DateIOService,
        private _calendarViewService: CalendarViewService,
        private _ifOpenService: IfOpenService
    ) {
        super(_injector, parent);
        this.configurePopover();
        this.processInput();
        this._dateUtilsService.initializeCalendar();
    }

    private processInput(): void {
        const inputDate: Date = this._dateIOService.processInput();
        if (inputDate) {
            const calDate: CalendarDate
                = new CalendarDate(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate());
            this._dateUtilsService.selectedDate = calDate;
        }
    }

    /**
     * Gets the calendar cells for the current view. The result is a
     * 6x7 matrix of CalendarCell.
     * @returns {CalendarCell[][]}
     */
    get calendarMatrix(): CalendarMatrix {
        return this._dateUtilsService.currentCalendarMatrix;
    }

    /**
     * Configure Popover Direction and Close indicators
     */
    private configurePopover(): void {
        this.anchorPoint = Point.BOTTOM_LEFT;
        this.popoverPoint = Point.LEFT_TOP;
        this.closeOnOutsideClick = true;
    }

    /**
     * Returns an array of days in the TranslationWidth.Narrow format.
     * Eg: [S, M, T, ...] for en-US
     * @returns {ReadonlyArray<string>}
     */
    get localeDaysShort(): ReadonlyArray<string> {
        return this._dateUtilsService.localeDaysNarrow;
    }

    /**
     * Returns if the current view is that of the month picker
     * @returns {boolean}
     */
    get isMonthView(): boolean {
        return this._calendarViewService.isMonthView;
    }

    set isMonthView(value: boolean) {
        this._calendarViewService.isMonthView = value;
    }

    /**
     * Returns the month value of the calendar in the TranslationWidth.Abbreviated format.
     * @returns {string}
     */
    get calendarMonth(): string {
        return this._dateUtilsService.getMonthAbbreviated(this._dateUtilsService.calendarMonth);
    }

    /**
     * Returns the year value of the calendar.
     * @returns {number}
     */
    get calendarYear(): number {
        return this._dateUtilsService.calendarYear;
    }

    /**
     * Moves the calendar to the previous month
     */
    moveToPreviousMonth(): void {
        this._dateUtilsService.moveToPreviousMonth();
    }

    /**
     * Moves the calendar to the current month
     */
    moveToCurrentMonth(): void {
        this._dateUtilsService.moveToCurrentMonth();
    }

    /**
     * Moves the calendar to the next month
     */
    moveToNextMonth(): void {
        this._dateUtilsService.moveToNextMonth();
    }

    setDate(cell: CalendarCell): void {
        const date: CalendarDate = cell.calendarDate;
        this._dateUtilsService.selectedDate = date;
        this._dateIOService.updateDate(date.toDate());
        this._ifOpenService.open = false;
    }
}
