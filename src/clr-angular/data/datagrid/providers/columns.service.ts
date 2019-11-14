/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable } from '@angular/core';
import { ALL_COLUMN_CHANGES } from '../enums/column-changes.enum';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ColumnState, ColumnStateDiff } from '../interfaces/column-state.interface';

@Injectable()
export class ColumnsService {
  columns: BehaviorSubject<ColumnState>[] = [];
  private _cache: ColumnState[] = [];

  cache() {
    this._cache = this.columns.map(subject => {
      const value = { ...subject.value };
      delete value.changes;
      return value;
    });
  }

  hasCache() {
    return !!this._cache.length;
  }

  resetToLastCache() {
    this._cache.forEach((state, index) => {
      // Just emit the exact value from the cache
      this.columns[index].next({ ...state, changes: ALL_COLUMN_CHANGES });
    });
    this._cache = [];
  }

  get columnStates(): ColumnState[] {
    return this.columns.map(column => column.value);
  }

  get hasHideableColumns(): boolean {
    return this.columnStates.filter(state => state.hideable).length > 0;
  }

  get orderOfLastVisible(): number {
    return Math.max(...this.columnStates.filter(state => !state.hidden).map(state => state.order));
  }

  get orderOfFirstVisible(): number {
    return Math.min(...this.columnStates.filter(state => !state.hidden).map(state => state.order));
  }

  // First and last visible columns may change in 3 different cases:
  // -  When columns are reordered
  // -  When the current first/last gets hidden state
  // -  When the column at first/last gets removed or a new column added at first/last index
  private _isFirstVisibleChanged: Subject<void> = new Subject<void>();
  private _isLastVisibleChanged: Subject<void> = new Subject<void>();

  get checkFirstVisible(): Observable<void> {
    return this._isFirstVisibleChanged.asObservable();
  }

  get checkLastVisible(): Observable<void> {
    return this._isLastVisibleChanged.asObservable();
  }

  requestFirstVisibleChangeCheck() {
    this._isFirstVisibleChanged.next();
  }

  requestLastVisibleChangeCheck() {
    this._isLastVisibleChanged.next();
  }

  // Helper method to emit a change to a column only when there is an actual diff to process for that column
  emitStateChangeAt(columnIndex: number, diff: ColumnStateDiff) {
    if (!this.columns[columnIndex]) {
      return;
    }
    this.emitStateChange(this.columns[columnIndex], diff);
  }

  emitStateChange(column: BehaviorSubject<ColumnState>, diff: ColumnStateDiff) {
    column.next({ ...column.value, ...diff });
  }
}
