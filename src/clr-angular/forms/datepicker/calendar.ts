/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {AfterViewInit, Component, ElementRef, Injector, OnDestroy, SkipSelf} from "@angular/core";
import {AbstractPopover} from "../../popover/common/abstract-popover";
import {Point} from "../../popover/common/popover";
import {DateUtilsService} from "./providers/date-utils.service";
import {CalendarViewService} from "./providers/calendar-view.service";
import {CalendarCell} from "./model/calendar-cell";
import {DateIOService} from "./providers/date-io.service";
import {CalendarDate} from "./model/calendar-date";
import {CalendarMatrix} from "./model/calendar-matrix";
import {IfOpenService} from "../../utils/conditional/if-open.service";
import {DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, UP_ARROW} from "../../utils/key-codes/key-codes";
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: "clr-calendar",
    templateUrl: "./calendar.html",
    host: {
        "[class.calendar]": "true",
    },
    providers: [DateUtilsService, CalendarViewService]
})
export class ClrCalendar extends AbstractPopover implements AfterViewInit, OnDestroy {

    private _sub: Subscription;

    constructor(
        @SkipSelf() parent: ElementRef,
        private _injector: Injector,
        private _elRef: ElementRef,
        private _dateUtilsService: DateUtilsService,
        private _dateIOService: DateIOService,
        private _calendarViewService: CalendarViewService,
        private _ifOpenService: IfOpenService
    ) {
        super(_injector, parent);
        this.configurePopover();
        this.processInput();
        this._dateUtilsService.initializeCalendar();
        this._sub = this._dateUtilsService.focusCellChanged.subscribe(() => {
           this._calendarViewService.focusCell(this._elRef);
        });
    }

    private processInput(): void {
        const inputDate: Date = this._dateIOService.processInput();
        if (inputDate) {
            const calDate: CalendarDate
                = new CalendarDate(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate());
            this._dateUtilsService.selectedDate = calDate;
        }
    }

    ngAfterViewInit() {
        this._calendarViewService.focusCell(this._elRef);
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
     * Returns if the current view is that of the year picker
     * @returns {boolean}
     */
    get isYearView(): boolean {
        return this._calendarViewService.isYearView;
    }

    set isYearView(value: boolean) {
        this._calendarViewService.isYearView = value;
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

    /**
     * Updates the selected date depending on the CalendarCell which was clicked.
     * @param {CalendarCell} cell
     */
    setDate(cell: CalendarCell): void {
        const date: CalendarDate = cell.calendarDate;
        this._dateUtilsService.selectedDate = date;
        this._dateIOService.updateDate(date.toDate());
        this._ifOpenService.open = false;
    }

    get focusedDate(): CalendarDate {
        return this._dateUtilsService.focusedDate;
    }

    set focusedDate(value: CalendarDate) {
        this._dateUtilsService.focusedDate = value;
    }

    /**
     * Handles the keyboard events when the user navigates using the arrow keys.
     * @param {KeyboardEvent} event
     */
    onCalendarKeyDown(event: KeyboardEvent): void {
        if (event) {
            switch(event.keyCode) {
                case UP_ARROW:
                    event.preventDefault();
                    this.incrementDateAndFocus(-7);
                    break;
                case DOWN_ARROW:
                    event.preventDefault();
                    this.incrementDateAndFocus(7);
                    break;
                case LEFT_ARROW:
                    event.preventDefault();
                    this.incrementDateAndFocus(-1);
                    break;
                case RIGHT_ARROW:
                    event.preventDefault();
                    this.incrementDateAndFocus(1);
                    break;
                default:
                    break; //No default case. TSLint x-(
            }
        }
    }

    private incrementDateAndFocus(incrementBy: number): void {
        if (this.focusedDate) {
            // Creating new Javascript Date object to increment because
            // it will automatically take care of switching to next or previous
            // months without we having to worry about it.
            const newFocusedDate: Date = new Date(this.focusedDate.year, this.focusedDate.month, this.focusedDate.date);
            newFocusedDate.setDate(newFocusedDate.getDate() + incrementBy);
            const newDate: number = newFocusedDate.getDate();
            const newMonth: number = newFocusedDate.getMonth();
            const newYear: number = newFocusedDate.getFullYear();
            this.focusedDate = new CalendarDate(newYear, newMonth, newDate);
            this._dateUtilsService.updateCalendar(newYear, newMonth);
        }
    }

    onCalendarCellFocus(cell: CalendarCell): void {
        this.focusedDate = cell.calendarDate;
    }

    ngOnDestroy() {
        if (this._sub) {
            this._sub.unsubscribe();
        }
    }
}
