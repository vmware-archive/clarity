/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {IfOpenService} from "../../utils/conditional/if-open.service";

@Component({
    selector: "clr-tooltip",
    template: `
        <ng-content></ng-content>
    `,
    host: {
        "[class.tooltip]": "true",
    },
    providers: [IfOpenService]
})
export class Tooltip {}
