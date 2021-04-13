/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ColumnsService } from './columns.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ColumnState } from '../interfaces/column-state.interface';
import { ALL_COLUMN_CHANGES, DatagridColumnChanges } from '../enums/column-changes.enum';

export default function (): void {
  describe('ColumnsService provider', function () {
    let provider: ColumnsService;
    let subscription: Subscription;
    let state: ColumnState = null;
    const col1 = { width: 100 };
    const col2 = { hideable: true };

    beforeEach(function () {
      provider = new ColumnsService();
      state = null;
      provider.columns = [new BehaviorSubject<ColumnState>({ ...col1 }), new BehaviorSubject<ColumnState>({ ...col2 })];
    });

    afterEach(() => {
      if (subscription) {
        subscription.unsubscribe();
      }
    });

    it('returns the current states', () => {
      expect(provider.columnStates).toEqual([col1, col2]);
    });

    it('can emitStateChange to a column directly', () => {
      subscription = provider.columns[0].subscribe(value => (state = value));
      const diff = { changes: [DatagridColumnChanges.HIDDEN], hidden: true };
      provider.emitStateChange(provider.columns[0], diff);
      expect(state).toEqual({ ...col1, ...diff });
    });

    it('can emitStateChange by column index', () => {
      subscription = provider.columns[0].subscribe(value => (state = value));
      const diff = { changes: [DatagridColumnChanges.HIDDEN], hidden: true };
      provider.emitStateChangeAt(0, diff);
      expect(state).toEqual({ ...col1, ...diff });
    });

    it('can detect if hideable columns are enabled', () => {
      expect(provider.hasHideableColumns).toBeTrue();
      provider.columns[1] = new BehaviorSubject<ColumnState>({ hideable: false });
      expect(provider.hasHideableColumns).toBeFalse();
    });

    it('can cache the state, and reset to all columns', () => {
      subscription = provider.columns[0].subscribe(value => (state = value));
      provider.cache();
      const diff = { changes: [DatagridColumnChanges.HIDDEN], hidden: true };
      provider.emitStateChangeAt(0, diff);
      expect(provider.columns[0].value).toEqual({ ...col1, ...diff });
      provider.resetToLastCache();
      expect(provider.columns[0].value).toEqual({ ...col1, changes: ALL_COLUMN_CHANGES });
      expect(provider.hasCache()).toBeFalse();
    });

    it('does not emit a reset if there is no cache', () => {
      spyOn(provider.columns[0], 'next');
      provider.resetToLastCache();
      expect(provider.columns[0].next).not.toHaveBeenCalled();
    });

    it('can detect if there is a cache', () => {
      provider.resetToLastCache();
      expect(provider.hasCache()).toBeFalse();
      provider.cache();
      expect(provider.hasCache()).toBeTrue();
    });
  });
}
