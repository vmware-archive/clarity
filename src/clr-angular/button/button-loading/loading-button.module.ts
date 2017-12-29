/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {CommonModule} from "@angular/common";
import {NgModule, Type} from "@angular/core";

import {ClrLoadingModule} from "../../utils/loading/loading.module";
import {ClrLoadingButton} from "./loading-button";

export const CLR_LOADING_BUTTON_DIRECTIVES: Type<any>[] = [ClrLoadingButton];

@NgModule({
    imports: [CommonModule, ClrLoadingModule],
    declarations: [CLR_LOADING_BUTTON_DIRECTIVES],
    exports: [CLR_LOADING_BUTTON_DIRECTIVES, ClrLoadingModule]
})
export class ClrLoadingButtonModule {}

/* tslint:disable variable-name */
/** @deprecated since 0.11 */
export class LoadingButton extends ClrLoadingButton {}
/* tslint:enable variable-name */
/** @deprecated since 0.11 */
export const LOADING_BUTTON_DIRECTIVES = CLR_LOADING_BUTTON_DIRECTIVES;
