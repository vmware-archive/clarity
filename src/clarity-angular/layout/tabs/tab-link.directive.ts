/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Directive, HostListener, Inject, Input} from "@angular/core";
import {IF_ACTIVE_ID, IfActiveService} from "../../utils/conditional/if-active.service";

let nbTabLinkComponents: number = 0;

@Directive({
    selector: "[clrTabLink]",
    host: {
        "[id]": "tabLinkId",
        "[attr.aria-selected]": "active",
        "[attr.aria-controls]" : "ariaControls",
        "role": "presentation",
        "[class.btn]": "true",
        "[class.btn-link]": "true",
        "[class.nav-link]": "true",
        "[class.nav-item]": "true",
        "[class.active]": "active"
    }
})
export class TabLinkDirective {
    @Input("clrTabLinkId") tabLinkId: string;
    ariaControls: string;

    constructor(public ifActiveService: IfActiveService, @Inject(IF_ACTIVE_ID) private id: number) {
        this.tabLinkId = "clr-tab-link-" + (nbTabLinkComponents++);
    }

    @HostListener("click")
    activate() {
        this.ifActiveService.current = this.id;
    }

    get active() {
        return this.ifActiveService.current === this.id;
    }

}
