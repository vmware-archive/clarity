import { Type } from "@angular/core";
import { Dropdown } from "./dropdown";
import { DropdownToggle } from "./dropdown-toggle";
import { DropdownItem } from "./dropdown-item";

export * from "./dropdown";
export * from "./dropdown-toggle";
export * from "./dropdown-item";

export const DROPDOWN_DIRECTIVES: Type<any>[] = [
    Dropdown,
    DropdownToggle,
    DropdownItem
];
