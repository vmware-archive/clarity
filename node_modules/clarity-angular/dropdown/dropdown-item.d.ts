import { ElementRef } from "@angular/core";
import { Dropdown } from "./dropdown";
export declare class DropdownItem {
    private _dropdown;
    private el;
    constructor(_dropdown: Dropdown, el: ElementRef);
    onDropdownItemClick(): void;
}
