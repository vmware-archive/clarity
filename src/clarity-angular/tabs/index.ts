/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

// Horizontal
import { Type } from "@angular/core";
import { TabContent } from "./tab-content";
import { TabLink } from "./tab-link";
import { Tabs } from "./tabs";

// Vertical
import { VTabs } from "./vtabs";
import { VTabsNavGroup } from "./vtabs-nav-group";
import { VTabsNavLink } from "./vtabs-nav-link";
import { VTabsContent } from "./vtabs-content";

export * from "./tabs";
export * from "./tab-content";
export * from "./tab-link";
export * from "./vtabs";
export * from "./vtabs-nav-group";
export * from "./vtabs-content";

export const TABS_DIRECTIVES: Type<any>[] = [
    TabContent,
    TabLink,
    Tabs,
    VTabs,
    VTabsContent,
    VTabsNavGroup,
    VTabsNavLink
];
