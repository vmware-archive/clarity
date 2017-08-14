/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
    Directive,
    HostListener
} from "@angular/core";

import { IfOpenService } from "../../utils/conditional/if-open.service";

@Directive({
    selector: "[clrDatagridRowActionsTrigger]",
    host: {
        "[class.active]" : "active",
    }
})
export class DatagridRowActionsTrigger {

    constructor(private ifOpenService: IfOpenService) {}

    get active(): boolean {
        return this.ifOpenService.open;
    }

    @HostListener("click", ["$event"])
    onTriggerClick(event: any): void {
        this.ifOpenService.toggleWithEvent(event);
    }
}
