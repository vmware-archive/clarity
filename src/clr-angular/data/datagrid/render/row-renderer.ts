/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { AfterViewInit, ContentChildren, Directive, QueryList } from '@angular/core';

import { DatagridCellRenderer } from './cell-renderer';
import { ColumnsService } from '../providers/columns.service';

@Directive({ selector: 'clr-dg-row, clr-dg-row-detail' })
export class DatagridRowRenderer implements AfterViewInit {
  @ContentChildren(DatagridCellRenderer) private cells: QueryList<DatagridCellRenderer>;

  constructor(private columnsService: ColumnsService) {}

  ngAfterViewInit() {
    this.setColumnStates();
    this.cells.changes.subscribe(() => {
      this.setColumnStates();
    });
  }

  public setColumnStates() {
    this.cells.forEach((cell, index) => {
      if (this.columnsService.columns[index]) {
        cell.columnState = this.columnsService.columns[index];
      }
    });
  }
}
