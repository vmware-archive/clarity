/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
    Component,
    Input
} from "@angular/core";

@Component({
    selector: "clr-tab-content",
    templateUrl: "./tab-content.html",
    host: {
        "[id]" : "id",
        "role" : "tabpanel",
        "[attr.aria-hidden]" : "!active",
        "[attr.aria-labelledby]": "ariaLabelledBy",
        "[attr.data-hidden]": "!active",
        "[class.active]" : "active"
    }
})
export class TabContent {
    @Input("clrTabContentActive") active: boolean = false;
    @Input("clrTabContentId") id: string;
    ariaLabelledBy: string;
}