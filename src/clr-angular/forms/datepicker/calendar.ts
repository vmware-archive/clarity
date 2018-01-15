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
        private _calendarViewService: CalendarViewService
    ) {
        super(_injector, parent);
        this.configurePopover();
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
        return this._dateUtilsService.localeDaysShort;
    }

    get isMonthView(): boolean {
        return this._calendarViewService.isMonthView;
    }

    set isMonthView(value: boolean) {
        this._calendarViewService.isMonthView = value;
    }
}
