/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Type } from "@angular/core";
import { TabContent } from "./tab-content";
import { TabLink } from "./tab-link";
import { Tabs } from "./tabs";

export * from "./tabs";
export * from "./tab-content";
export * from "./tab-link";
export const TABS_DIRECTIVES: Type<any>[] = [
    TabContent,
    TabLink,
    Tabs
];
