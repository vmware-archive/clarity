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
