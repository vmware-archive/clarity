/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import {ICON_DIRECTIVES} from "./index";

@NgModule({imports: [CommonModule], declarations: [ICON_DIRECTIVES], exports: [ICON_DIRECTIVES]})
export class ClrIconModule {}
