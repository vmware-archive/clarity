/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';

import { ClrIconModule } from '../../icon/icon.module';
import { ClrLoadingModule } from '../../utils/loading/loading.module';
import { ClrIfExpandModule } from '../../utils/expand/if-expand.module';
import { ClrTreeNode } from './tree-node';
import { ClrTree } from './tree';
import { ClrRecursiveForOf } from './recursive-for-of';
import { RecursiveChildren } from './recursive-children';

export const CLR_TREE_VIEW_DIRECTIVES: Type<any>[] = [ClrTree, ClrTreeNode, ClrRecursiveForOf];

@NgModule({
  imports: [CommonModule, ClrIconModule, ClrLoadingModule],
  declarations: [CLR_TREE_VIEW_DIRECTIVES, RecursiveChildren],
  exports: [CLR_TREE_VIEW_DIRECTIVES, ClrIfExpandModule],
})
export class ClrTreeViewModule {}
