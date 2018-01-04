/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Directive, ElementRef, HostListener} from "@angular/core";

import {ClrDropdown} from "./dropdown";
import {RootDropdownService} from "./providers/dropdown.service";

@Directive({selector: "[clrDropdownItem]", host: {"[class.dropdown-item]": "true"}})
export class ClrDropdownItem {
    constructor(private dropdown: ClrDropdown, private el: ElementRef, private _dropdownService: RootDropdownService) {}

    @HostListener("click")
    onDropdownItemClick(): void {
        if (this.dropdown.isMenuClosable && !this.el.nativeElement.classList.contains("disabled")) {
            this._dropdownService.closeMenus();
        }
    }
}
