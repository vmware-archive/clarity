/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';

import { ClrIconModule } from '../../icon/icon.module';

export const CLR_TREE_VIEW_DIRECTIVES: Type<any>[] = [];

@NgModule({
  imports: [CommonModule, ClrIconModule],
  declarations: [CLR_TREE_VIEW_DIRECTIVES],
  exports: [CLR_TREE_VIEW_DIRECTIVES],
})
export class ClrTreeViewModule {}
