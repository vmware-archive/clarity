/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';

import { ClrKeyFocus } from './key-focus';
import { ClrKeyFocusItem } from './key-focus-item';

const KEY_FOCUS_DIRECTIVES: Type<any>[] = [ClrKeyFocus, ClrKeyFocusItem];

@NgModule({
  imports: [CommonModule],
  declarations: [KEY_FOCUS_DIRECTIVES],
  exports: [KEY_FOCUS_DIRECTIVES],
})
export class ClrKeyFocusModule {}
