/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
    Directive,
    HostListener
} from "@angular/core";

import { Dropdown } from "./dropdown";
import { IfOpenService } from "../../utils/conditional/if-open.service";

@Directive({
    selector: "[clrDropdownToggle]",
    host: {
        "[class.dropdown-toggle]" : "isRootLevelToggle",
        "[class.dropdown-item]" : "!isRootLevelToggle",
        "[class.expandable]" : "!isRootLevelToggle",
        "[class.active]" : "active"
    }
})
export class DropdownToggle {
    private isRootLevelToggle: boolean = true;

    constructor(private _dropdown: Dropdown, private ifOpenService: IfOpenService) {
        // if the containing dropdown has a parent, then this is not the root level one
        if (_dropdown.parent) {
            this.isRootLevelToggle = false;
        }
    }

    get active(): boolean {
        return this.ifOpenService.open;
    }

    @HostListener("click")
    onDropdownToggleClick(): void {
        this.ifOpenService.open = !this.ifOpenService.open;
    }
}
