/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
    Directive,
    ElementRef,
    HostListener
} from "@angular/core";

import { Dropdown } from "./dropdown";

@Directive({
    selector: "[clrDropdownItem]",
    host: {
        "[class.dropdown-item]" : "true"
    }
})
export class DropdownItem {

    constructor(private _dropdown: Dropdown, private el: ElementRef) {
    }

    @HostListener("click")
    onDropdownItemClick(): void {
        if (this._dropdown.isMenuClosable && !this.el.nativeElement.classList.contains("disabled")) {
            this._dropdown.toggleDropdown();
        }
    }
}
