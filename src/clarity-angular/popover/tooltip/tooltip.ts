/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, ElementRef, InjectionToken} from "@angular/core";
import {IfOpenService} from "../../utils/conditional/if-open.service";
import {POPOVER_HOST_ANCHOR} from "../common/popover-host-anchor.token";

@Component({
    selector: "clr-tooltip",
    template: `
        <ng-content></ng-content>
    `,
    host: {
        "[class.tooltip]": "true",
    },
    providers: [IfOpenService, {provide: POPOVER_HOST_ANCHOR, useExisting: ElementRef}]
})
export class Tooltip {}
