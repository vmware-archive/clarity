/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {CommonModule} from "@angular/common";
import {NgModule, Type} from "@angular/core";
import {ClrCodeHighlight} from "./syntax-highlight";

export const CLR_CODE_HIGHLIGHT_DIRECTIVES: Type<any>[] = [ClrCodeHighlight];

@NgModule(
    {imports: [CommonModule], declarations: [CLR_CODE_HIGHLIGHT_DIRECTIVES], exports: [CLR_CODE_HIGHLIGHT_DIRECTIVES]})
export class ClrSyntaxHighlightModule {
}

/* tslint:disable variable-name */
/** @deprecated since 0.11 */
export interface CodeHighlight extends ClrCodeHighlight {}
/** @deprecated since 0.11 */
export const CodeHighlight = ClrCodeHighlight;
/* tslint:enable variable-name */
/** @deprecated since 0.11 */
export const CODE_HIGHLIGHT_DIRECTIVES = CLR_CODE_HIGHLIGHT_DIRECTIVES;