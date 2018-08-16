/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { ClrCodeHighlight } from './syntax-highlight';

/** @deprecated since 0.12 */
export const CLR_CODE_HIGHLIGHT_DIRECTIVES: Type<any>[] = [ClrCodeHighlight];

/** @deprecated since 0.12 */
@NgModule({
  imports: [CommonModule],
  declarations: [CLR_CODE_HIGHLIGHT_DIRECTIVES],
  exports: [CLR_CODE_HIGHLIGHT_DIRECTIVES],
})
export class ClrSyntaxHighlightModule {}
