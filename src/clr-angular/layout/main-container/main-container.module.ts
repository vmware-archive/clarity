/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {CommonModule} from "@angular/common";
import {NgModule, Type} from "@angular/core";

import {ClrIconModule} from "../../icon/icon.module";
import {ClrMainContainer} from "./main-container";

export const CLR_LAYOUT_DIRECTIVES: Type<any>[] = [ClrMainContainer];

@NgModule(
    {imports: [CommonModule, ClrIconModule], declarations: [CLR_LAYOUT_DIRECTIVES], exports: [CLR_LAYOUT_DIRECTIVES]})
export class ClrMainContainerModule {
}

/* tslint:disable variable-name */
/** @deprecated since 0.11 */
export interface MainContainer extends ClrMainContainer {}
/** @deprecated since 0.11 */
export const MainContainer = ClrMainContainer;
/* tslint:enable variable-name */
/** @deprecated since 0.11 */
export const LAYOUT_DIRECTIVES = CLR_LAYOUT_DIRECTIVES;
