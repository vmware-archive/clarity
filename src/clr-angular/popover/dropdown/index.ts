/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Type} from "@angular/core";

import {Dropdown} from "./dropdown";
import {DropdownItem} from "./dropdown-item";
import {DropdownMenu} from "./dropdown-menu";
import {DropdownTrigger} from "./dropdown-trigger";

export * from "./dropdown";
export * from "./dropdown-menu";
export * from "./dropdown-trigger";
export * from "./dropdown-item";
export * from "./menu-positions";

export const DROPDOWN_DIRECTIVES: Type<any>[] = [Dropdown, DropdownMenu, DropdownTrigger, DropdownItem];
