/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, ElementRef} from "@angular/core";
import {DateUtilsService} from "./providers/date-utils.service";
import {CalendarViewService} from "./providers/calendar-view.service";
import {YearUtilsService} from "./providers/year-utils.service";

@Component({
    selector: "clr-yearpicker",
    template: `
        <div class="year-switchers">
            <button class="calendar-btn" type="button" (click)="moveToPreviousDecade()">
                <clr-icon shape="angle" dir="left"></clr-icon>
            </button>
            <button class="calendar-btn" type="button" (click)="moveToCurrentDecade()">
                <clr-icon shape="map-marker"></clr-icon>
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
    constructor(
        private _dateUtilsService: DateUtilsService,
        private _calendarViewService: CalendarViewService,
        private _yearUtilsService: YearUtilsService,
        private _elRef: ElementRef
    ) {
        this._yearUtilsService.initializeYearPicker(this.calendarYear);
    }

    /**
     * Gets the year range for the current year picker view.
     * @returns {number[]}
     */
    get years(): number[] {
        return this._yearUtilsService.years;
    }

    /**
     * Gets the year which the user is currently on.
     * @returns {number}
     */
    get calendarYear(): number {
        return this._dateUtilsService.calendarYear;
    }

    /**
     * This function is called when the user selects one of the years. After updating the year,
     * the year picker is closed.
     * @param {number} year
     */
    changeYear(year: number): void {
        this._dateUtilsService.updateCalendar(year, this._dateUtilsService.calendarMonth);
        //Disable Yearpicker
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
}
