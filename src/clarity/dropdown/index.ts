/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
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
