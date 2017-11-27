/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {CommonModule} from "@angular/common";
import {NgModule, Optional, SkipSelf} from "@angular/core";

import {ClrIconModule} from "../../icon/icon.module";
import {ClrDropdownModule} from "../../popover/dropdown/dropdown.module";

import {clrResponsiveNavigationProvider} from "./clrResponsiveNavigationProvider";
import {ClrResponsiveNavigationService} from "./clrResponsiveNavigationService";
import {NAVIGATION_DIRECTIVES} from "./index";

@NgModule({
    imports: [CommonModule, ClrIconModule, ClrDropdownModule],
    declarations: [NAVIGATION_DIRECTIVES],
    providers: [{
        provide: ClrResponsiveNavigationService,
        useFactory: clrResponsiveNavigationProvider,
        deps: [[new Optional(), new SkipSelf(), ClrResponsiveNavigationService]]
    }],
    exports: [NAVIGATION_DIRECTIVES]
})
export class ClrNavigationModule {}
