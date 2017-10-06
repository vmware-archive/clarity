/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import {CHECKBOX_DIRECTIVES} from "./checkbox/index";

@NgModule({imports: [CommonModule], declarations: [CHECKBOX_DIRECTIVES], exports: [CHECKBOX_DIRECTIVES]})
export class ClrFormsModule {}
