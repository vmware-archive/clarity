import { Type } from "@angular/core";
import { Dropdown, DropdownToggle, DropdownMenuItem } from "./dropdown";

export * from "./dropdown";
export const DROPDOWN_DIRECTIVES: Type<any>[] = [
    Dropdown,
    DropdownToggle,
    DropdownMenuItem
];
