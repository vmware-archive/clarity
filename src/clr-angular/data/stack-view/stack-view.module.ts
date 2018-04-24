/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {CommonModule} from "@angular/common";
import {NgModule, Type} from "@angular/core";
import {FormsModule} from "@angular/forms";

import {ClrStackBlock} from "./stack-block";
import {ClrStackHeader} from "./stack-header";
import {ClrStackInput} from "./stack-input";
import {ClrStackSelect} from "./stack-select";
import {ClrStackView} from "./stack-view";
import {ClrStackViewCustomTags} from "./stack-view-custom-tags";

export const CLR_STACK_VIEW_DIRECTIVES: Type<any>[] = [
    ClrStackView, ClrStackHeader, ClrStackBlock, ClrStackViewCustomTags,
    /**
     * Undocumented experimental feature: inline editing.
     */
    ClrStackInput, ClrStackSelect
    /**
     * End of undocumented experimental feature.
     */
];

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [CLR_STACK_VIEW_DIRECTIVES],
    exports: [CLR_STACK_VIEW_DIRECTIVES]
})
export class ClrStackViewModule {
}

/* tslint:disable variable-name */
/** @deprecated since 0.11 */
export interface StackView extends ClrStackView {}
/** @deprecated since 0.11 */
export const StackView = ClrStackView;
/** @deprecated since 0.11 */
export interface StackHeader extends ClrStackHeader {}
/** @deprecated since 0.11 */
export const StackHeader = ClrStackHeader;
/** @deprecated since 0.11 */
export interface StackBlock extends ClrStackBlock {}
/** @deprecated since 0.11 */
export const StackBlock = ClrStackBlock;
/** @deprecated since 0.11 */
export interface StackViewCustomTags extends ClrStackViewCustomTags {}
/** @deprecated since 0.11 */
export const StackViewCustomTags = ClrStackViewCustomTags;
/** @deprecated since 0.11 */
export interface StackInput extends ClrStackInput {}
/** @deprecated since 0.11 */
export const StackInput = ClrStackInput;
/** @deprecated since 0.11 */
export interface StackSelect extends ClrStackSelect {}
/** @deprecated since 0.11 */
export const StackSelect = ClrStackSelect;
/* tslint:enable variable-name */
/** @deprecated since 0.11 */
export const STACK_VIEW_DIRECTIVES = CLR_STACK_VIEW_DIRECTIVES;
