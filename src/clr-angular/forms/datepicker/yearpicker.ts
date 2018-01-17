/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, ElementRef} from "@angular/core";
import {DateUtilsService} from "./providers/date-utils.service";
import {CalendarViewService} from "./providers/calendar-view.service";

@Component({
    selector: "clr-yearpicker",
    template: `
        <div class="year-switchers">
            <button class="calendar-btn" type="button">
                <clr-icon shape="angle" dir="left"></clr-icon>
            </button>
            <button class="calendar-btn" type="button">
                <clr-icon shape="map-marker"></clr-icon>
            </button>
            <button class="calendar-btn" type="button">
                <clr-icon shape="angle" dir="right"></clr-icon>
            </button>
        </div>
        <div class="years">
            <button 
                *ngFor="let year of test"
                type="button"
                class="calendar-btn year"
                (click)="changeYear()">
                {{year}}
            </button>
        </div>
    `,
    host: {
        "[class.yearpicker]": "true",
    }
})
export class ClrYearPicker {
    constructor(
        private _dateUtilsService: DateUtilsService,
        private _calendarViewService: CalendarViewService,
        private _elRef: ElementRef
    ) {}

    test: number[] = [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];

    changeYear(): void {
        //Disable Yearpicker
        this._calendarViewService.isYearView = false;
    }
}
