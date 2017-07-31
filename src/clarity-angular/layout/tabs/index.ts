/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Type} from "@angular/core";

import {Tab} from "./tab";
import {TabContent} from "./tab-content";
import {TabLinkDirective} from "./tab-link.directive";
import {TabOverflowContent} from "./tab-overflow-content";
import {Tabs} from "./tabs";

export * from "./tabs";
export * from "./tab";
export * from "./tab-content";
export * from "./tab-overflow-content";
export * from "./tab-link.directive";

export const TABS_DIRECTIVES: Type<any>[] = [TabContent, Tab, Tabs, TabOverflowContent, TabLinkDirective];
