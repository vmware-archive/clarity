/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {IfOpenService} from "../../utils/conditional/if-open.service";
import {DateIOService} from "./providers/date-io.service";

@Component({
    selector: "clr-datepicker-container",
    template: `
        <ng-content></ng-content>
        <button class="datepicker-trigger" (click)="toggleDatepicker($event)">
            <clr-icon shape="calendar"></clr-icon>
        </button>
        <clr-calendar *clrIfOpen clrFocusTrap></clr-calendar>
    `,
    providers: [IfOpenService, DateIOService],
    host: {"[class.datepicker-container]": "true"}
})
export class ClrDatepickerContainer {
    constructor(
        public ifOpenService: IfOpenService,
        private _dateIOService: DateIOService) {
    }

    toggleDatepicker(event: MouseEvent) {
        this.ifOpenService.toggleWithEvent(event);
    }
}
