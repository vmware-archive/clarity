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

@Directive({
    selector: "[clrDropdownToggle]",
    host: {
        "[class.dropdown-toggle]" : "true"
    }
})
export class DropdownToggle {
    constructor(private _dropdown: Dropdown) {
    }

    @HostListener("click")
    onDropdownToggleClick(): void {
        this._dropdown.toggleDropdown();
    }
}
