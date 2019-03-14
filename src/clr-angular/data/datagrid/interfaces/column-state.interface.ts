/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { TemplateRef } from '@angular/core';
import { DatagridColumnChanges } from '../enums/column-changes.enum';

export interface ColumnState {
  changes?: DatagridColumnChanges[]; // This is an array of change types to update
  width?: number; // This is the width calculated for the column
  strictWidth?: number; // This is the strict width if defined in styles/css
  hideable?: boolean; // This tells whether column can be hidden or not
  hidden?: boolean; // This is the state of column visibility
  titleTemplateRef?: TemplateRef<any>; // This is the template of the column content that will be used in the column toggle.
}

export interface ColumnStateDiff extends ColumnState {
  changes: DatagridColumnChanges[];
}
