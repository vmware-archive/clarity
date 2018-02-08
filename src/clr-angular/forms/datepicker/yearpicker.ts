/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, ElementRef, HostListener} from "@angular/core";

import {DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, UP_ARROW} from "../../utils/key-codes/key-codes";

import {CalendarViewService} from "./providers/calendar-view.service";
import {DateUtilsService} from "./providers/date-utils.service";
import {YearUtilsService} from "./providers/year-utils.service";

@Component({
    selector: "clr-yearpicker",
    template: `
        <div class="year-switchers">
            <button class="calendar-btn" type="button" (click)="moveToPreviousDecade()">
                <clr-icon shape="angle" dir="left"></clr-icon>
            </button>
            <button class="calendar-btn" type="button" (click)="moveToCurrentDecade()">
                <clr-icon shape="refresh
"></clr-icon>
            </button>
            <button class="calendar-btn" type="button" (click)="moveToNextDecade()">
                <clr-icon shape="angle" dir="right"></clr-icon>
            </button>
        </div>
        <div class="years">
            <button 
                *ngFor="let year of years"
                type="button"
                class="calendar-btn year"
                [attr.tabindex]="getTabIndex(year)"
                [class.is-active]="year === calendarYear"
                (click)="changeYear(year)">
                {{year}}
            </button>
        </div>
    `,
    providers: [YearUtilsService],
    host: {
        "[class.yearpicker]": "true",
    }
})
export class ClrYearPicker {
    constructor(private _dateUtilsService: DateUtilsService, private _calendarViewService: CalendarViewService,
                private _yearUtilsService: YearUtilsService, private _elRef: ElementRef) {
        this.focusedYear = this.calendarYear;
        this._yearUtilsService.initializeYearPicker(this.calendarYear);
        this._calendarViewService.focusCell(this._elRef);
    }

    /**
     * Gets the year range for the current year picker view.
     */
    get years(): number[] {
        return this._yearUtilsService.years;
    }

    /**
     * Gets the year which the user is currently on.
     */
    get calendarYear(): number {
        return this._dateUtilsService.calendarYear;
    }

    get focusedYear(): number {
        return this._yearUtilsService.focusedYear;
    }

    set focusedYear(value: number) {
        this._yearUtilsService.focusedYear = value;
    }

    /**
     * This function is called when the user selects one of the years. After updating the year,
     * the year picker is closed.
     */
    changeYear(year: number): void {
        this._dateUtilsService.updateCalendar(year, this._dateUtilsService.calendarMonth);
        // Disable Yearpicker
        this._calendarViewService.isYearView = false;
    }

    /**
     * Moves the year picker view to the next decade.
     */
    moveToNextDecade(): void {
        this._yearUtilsService.moveToNextDecade();
    }

    /**
     * Moves the year picker view to the current decade.
     */
    moveToCurrentDecade(): void {
        this._yearUtilsService.moveToCurrentDecade();
    }

    /**
     * Moves the year picker view to the previous decade.
     */
    moveToPreviousDecade(): void {
        this._yearUtilsService.moveToPreviousDecade();
    }

    @HostListener("keydown", ["$event"])
    onKeyDown(event: KeyboardEvent) {
        const keyCode: number = event.keyCode;
        if (this.years) {
            const floor: number = this.years[0];
            const ceil: number = this.years[this.years.length - 1];
            if (keyCode === UP_ARROW) {
                if (this.focusedYear === floor) {
                    this.focusedYear--;
                    this.moveToPreviousDecade();
                } else {
                    this.focusedYear--;
                }
                this._calendarViewService.focusCell(this._elRef);
            } else if (keyCode === DOWN_ARROW) {
                if (this.focusedYear === ceil) {
                    this.focusedYear++;
                    this.moveToNextDecade();
                } else {
                    this.focusedYear++;
                }
                this._calendarViewService.focusCell(this._elRef);
            } else if (keyCode === RIGHT_ARROW) {
                if (this.focusedYear + 5 > ceil) {
                    this.focusedYear = this.focusedYear + 5;
                    this.moveToNextDecade();
                } else {
                    this.focusedYear = this.focusedYear + 5;
                }
                this._calendarViewService.focusCell(this._elRef);
            } else if (keyCode === LEFT_ARROW) {
                if (this.focusedYear - 5 < floor) {
                    this.focusedYear = this.focusedYear - 5;
                    this.moveToPreviousDecade();
                } else {
                    this.focusedYear = this.focusedYear - 5;
                }
                this._calendarViewService.focusCell(this._elRef);
            }
        }
    }

    getTabIndex(year: number): number {
        return year === this.focusedYear ? 0 : -1;
    }
}
