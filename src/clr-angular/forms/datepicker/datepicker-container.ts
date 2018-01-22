/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {IfOpenService} from "../../utils/conditional/if-open.service";
import {DateIOService} from "./providers/date-io.service";
import {DatepickerActiveService} from "./providers/datepicker-active.service";

@Component({
    selector: "clr-datepicker-container",
    template: `
        <ng-content></ng-content>
        <button 
            type="button" 
            class="datepicker-trigger" 
            (click)="toggleCalendar($event)" 
            *ngIf="isActive">
            <clr-icon shape="calendar"></clr-icon>
        </button>
        <clr-calendar *clrIfOpen clrFocusTrap></clr-calendar>
    `,
    providers: [IfOpenService, DateIOService, DatepickerActiveService],
    host: {"[class.datepicker-container]": "true"}
})
export class ClrDatepickerContainer {
    constructor(
        public _ifOpenService: IfOpenService,
        private _datepickerActiveService: DatepickerActiveService) {
    }

    /**
     * Toggles the calendar.
     */
    toggleCalendar(event: MouseEvent) {
        this._ifOpenService.toggleWithEvent(event);
    }

    /**
     * Returns if the calendar should be active or not.
     */
    get isActive(): boolean {
        return this._datepickerActiveService.active;
    }
}
