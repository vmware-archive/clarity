/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { NgModule } from '@angular/core';
import { ClrDatagridModule } from './datagrid/datagrid.module';
import { ClrStackViewModule } from './stack-view/stack-view.module';
import { ClrTreeViewModule } from './tree-view/tree-view.module';

@NgModule({ exports: [ClrDatagridModule, ClrStackViewModule, ClrTreeViewModule] })
export class ClrDataModule {}
