/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {CommonModule} from "@angular/common";
import {NgModule, Type} from "@angular/core";
import {ClrIconCustomTag} from "./icon";

export const CLR_ICON_DIRECTIVES: Type<any>[] = [ClrIconCustomTag];

@NgModule({imports: [CommonModule], declarations: [CLR_ICON_DIRECTIVES], exports: [CLR_ICON_DIRECTIVES]})
export class ClrIconModule {}

/* tslint:disable variable-name */
/** @deprecated since 0.11 */
export const IconCustomTag = ClrIconCustomTag;
/* tslint:enable variable-name */
/** @deprecated since 0.11 */
export const ICON_DIRECTIVES = CLR_ICON_DIRECTIVES;
