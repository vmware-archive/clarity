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
