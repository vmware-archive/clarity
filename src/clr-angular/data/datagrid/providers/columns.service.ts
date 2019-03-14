/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ColumnStateDiff, ColumnState } from '../interfaces/column-state.interface';

@Injectable()
export class ColumnsService {
  columns: BehaviorSubject<ColumnState>[] = [];

  get columnStates(): ColumnState[] {
    return this.columns.map(column => column.value);
  }

  get hasHideableColumns(): boolean {
    return this.columnStates.filter(state => state.hideable).length > 0;
  }

  // Helper method to emit a change to a column only when there is an actual diff to process for that column
  emitStateChangeAt(columnIndex: number, diff: ColumnStateDiff) {
    if (!this.columns[columnIndex]) {
      return;
    }
    this.emitStateChange(this.columns[columnIndex], diff);
  }

  emitStateChange(column: BehaviorSubject<ColumnState>, diff: ColumnStateDiff) {
    const current = column.value;
    column.next({ ...current, ...diff });
  }
}
