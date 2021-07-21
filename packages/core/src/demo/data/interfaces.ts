/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

export interface DemoData {
  grid: DemoGrid;
}

export interface DemoGrid {
  label: string;
  rowActions: [{ label: string; value: string }, { label: string; value: string }];
  columns: DemoGridColumn[];
  rows: DemoGridRow[];
}

export interface DemoGridRow {
  id: string;
  selected?: boolean;
  cells: DemoGridCell[];
}

export interface DemoGridCell {
  value: string | number;
  label?: string;
  selected?: boolean;
}

export interface DemoGridColumn {
  id: number;
  label: string;
  suffix?: string;
  sort?: 'none' | 'ascending' | 'descending';
}
