/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { DatagridColumnChanges } from '../enums/column-changes.enum';

export interface DatagridColumnState {
  changes?: DatagridColumnChanges[]; // This is an array of change types to update
  width?: number; // This is the width calculated for the column
  strictWidth?: number; // This is the strict width if defined in styles/css
}
