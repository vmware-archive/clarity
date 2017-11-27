/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Type} from "@angular/core";

import {VerticalNav} from "./vertical-nav";
import {VerticalNavGroup} from "./vertical-nav-group";
import {VerticalNavGroupChildren} from "./vertical-nav-group-children";
import {VerticalNavIcon} from "./vertical-nav-icon.directive";
import {VerticalNavLink} from "./vertical-nav-link";

export * from "./vertical-nav-group";
export * from "./vertical-nav";
export * from "./vertical-nav-link";
export * from "./vertical-nav-icon.directive";

export const VERTICAL_NAV_DIRECTIVES: Type<any>[] =
    [VerticalNav, VerticalNavLink, VerticalNavGroup, VerticalNavGroupChildren, VerticalNavIcon];
