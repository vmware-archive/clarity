/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Type } from "@angular/core";
import { TabContent } from "./tab-content";
import { Tab } from "./tab";
import { Tabs } from "./tabs";
import { TabLinkDirective } from "./tab-link.directive";

export * from "./tabs";
export * from "./tab";
export * from "./tab-content";
export * from "./tab-link.directive";
export const TABS_DIRECTIVES: Type<any>[] = [
    TabContent,
    Tab,
    Tabs,
    TabLinkDirective
];
