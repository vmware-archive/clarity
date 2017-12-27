/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";

import {ClrMainContainerModule} from "./main-container";
import {ClrNavigationModule} from "./nav";
import {ClrTabsModule} from "./tabs";
import {ClrVerticalNavModule} from "./vertical-nav";

@NgModule({exports: [ClrMainContainerModule, ClrNavigationModule, ClrTabsModule, ClrVerticalNavModule]})
export class ClrLayoutModule {}
