/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
    Component,
    Input, forwardRef, Inject
} from "@angular/core";

import { Tabs } from "./tabs";

@Component({
    selector: "clr-tab-link",
    templateUrl: "./tab-link.html",
    host: {
        "[id]": "id",
        "[attr.aria-selected]" : "active",
        "[attr.aria-controls]" : "ariaControls",
        "role" : "presentation",
        "[class.nav-item]" : "true",
        "[class.active]" : "active"
    }
})
export class TabLink {
    @Input("clrTabLinkActive") active: boolean = false;
    @Input("clrTabLinkId") id: string;
    ariaControls: string;

    constructor(@Inject(forwardRef(() => Tabs)) private tabs: Tabs) {
    }

    onClick(): boolean {
        this.tabs.selectTab(this);
        return false; // so that browser doesn't navigate to the href of the anchor tag
    }

}
