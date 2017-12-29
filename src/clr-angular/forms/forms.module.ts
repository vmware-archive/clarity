/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {CommonModule} from "@angular/common";
import {NgModule, Type} from "@angular/core";
import {ClrCheckbox} from "./checkbox";

export const CLR_CHECKBOX_DIRECTIVES: Type<any>[] = [ClrCheckbox];

@NgModule({imports: [CommonModule], declarations: [CLR_CHECKBOX_DIRECTIVES], exports: [CLR_CHECKBOX_DIRECTIVES]})
export class ClrFormsModule {}

/* tslint:disable variable-name */
/** @deprecated since 0.11 */
export class Checkbox extends ClrCheckbox {}
/* tslint:enable variable-name */
/** @deprecated since 0.11 */
export const CHECKBOX_DIRECTIVES = CLR_CHECKBOX_DIRECTIVES;