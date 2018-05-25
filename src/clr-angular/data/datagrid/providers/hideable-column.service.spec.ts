/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { DatagridHideableColumnModel } from '../datagrid-hideable-column.model';
import { HideableColumnService } from './hideable-column.service';

export default function(): void {
  describe('DatagridHideableColumnModel provider', function() {
    let columnService: HideableColumnService;

    beforeEach(function() {
      columnService = new HideableColumnService();
    });

    it('knows if the next column can be hidden', function() {
      const initialTestColumns: DatagridHideableColumnModel[] = [
        new DatagridHideableColumnModel(null, 'dg-col-1', false),
        new DatagridHideableColumnModel(null, 'dg-col-2', false),
        new DatagridHideableColumnModel(null, 'dg-col-3', false),
      ];

      // test when they are all showing
      columnService.updateColumnList(initialTestColumns);
      expect(columnService.canHideNextColumn).toBe(true);
      // hide 1/3 test
      initialTestColumns[0].hidden = true;
      columnService.updateColumnList(initialTestColumns);
      expect(columnService.canHideNextColumn).toBe(true);
      // hide 2/3 test
      initialTestColumns[1].hidden = true;
      columnService.updateColumnList(initialTestColumns);
      expect(columnService.canHideNextColumn).toBe(false);

      // hide 1/3 (does it flip back remix)
      initialTestColumns[1].hidden = false;
      columnService.updateColumnList(initialTestColumns);
      expect(columnService.canHideNextColumn).toBe(true);
    });

    it('resets the lastVisibleColumn when showing all columns', function() {
      let restTestColumns: DatagridHideableColumnModel[];
      const col1: DatagridHideableColumnModel = new DatagridHideableColumnModel(null, 'dg-col-1', false);
      const col2: DatagridHideableColumnModel = new DatagridHideableColumnModel(null, 'dg-col-2', true);
      const col3: DatagridHideableColumnModel = new DatagridHideableColumnModel(null, 'dg-col-3', true);
      const initialTestColumns: DatagridHideableColumnModel[] = [col1, col2, col3];

      col1.lastVisibleColumn = true;
      columnService.updateColumnList(initialTestColumns);
      restTestColumns = columnService.getColumns();
      expect(restTestColumns[0].lastVisibleColumn).toBe(true);
      columnService.showHiddenColumns();
      expect(restTestColumns[0].lastVisibleColumn).toBe(false);
    });

    it('checks for all columns visible', function() {
      const testColumns = [
        new DatagridHideableColumnModel(null, 'dg-col-1', false),
        new DatagridHideableColumnModel(null, 'dg-col-2', false),
        new DatagridHideableColumnModel(null, 'dg-col-3', false),
      ];

      columnService.updateColumnList(testColumns);
      expect(columnService.checkForAllColumnsVisible).toBe(true);
      testColumns[0].hidden = true;
      expect(columnService.checkForAllColumnsVisible).toBe(false);
    });

    it('provides an observable that pushes the latest columnListChange', function() {
      const testColumns = [
        new DatagridHideableColumnModel(null, 'dg-col-1', false),
        new DatagridHideableColumnModel(null, 'dg-col-2', false),
        new DatagridHideableColumnModel(null, 'dg-col-3', false),
      ];
      let nbChanges: number = 0;
      let testList: DatagridHideableColumnModel[];

      expect(columnService.columnListChange).toBeDefined();
      expect(testList).toBeUndefined();

      // Empty on init.
      columnService.columnListChange.subscribe((change: DatagridHideableColumnModel[]) => {
        nbChanges++;
        testList = change;
      });
      expect(testList).toEqual([]);
      expect(nbChanges).toEqual(1);
      columnService.updateColumnList(testColumns);
      expect(testList).toEqual(testColumns);
      expect(nbChanges).toEqual(2);
    });

    it('provides access to the current latestColumn list', function() {
      const testColumns = [
        new DatagridHideableColumnModel(null, 'dg-col-1', false),
        new DatagridHideableColumnModel(null, 'dg-col-2', false),
        new DatagridHideableColumnModel(null, 'dg-col-3', false),
      ];

      expect(columnService.getColumns()).toBeDefined();
      expect(columnService.getColumns()).toEqual([]);
      columnService.updateColumnList(testColumns);
      expect(columnService.getColumns()).toEqual(testColumns);
    });

    it('shows all hidden columns', function() {
      let testShowAllColumns: DatagridHideableColumnModel[];
      const hiddenTestColumns: DatagridHideableColumnModel[] = [
        new DatagridHideableColumnModel(null, 'dg-col-1', true),
        new DatagridHideableColumnModel(null, 'dg-col-2', true),
        new DatagridHideableColumnModel(null, 'dg-col-3', true),
      ];

      columnService.updateColumnList(hiddenTestColumns);
      testShowAllColumns = columnService.getColumns();
      testShowAllColumns.forEach(col => expect(col.hidden).toBe(true));
      columnService.showHiddenColumns();
      testShowAllColumns.forEach(col => expect(col.hidden).toBe(false));
    });

    it('updates the columnListChange with a new columnsList', function() {
      const newColumnList: DatagridHideableColumnModel[] = [
        new DatagridHideableColumnModel(null, 'dg-col-1', false),
        new DatagridHideableColumnModel(null, 'dg-col-2', false),
        new DatagridHideableColumnModel(null, 'dg-col-3', false),
      ];

      expect(columnService.updateColumnList).toBeDefined();
      expect(columnService.getColumns()).not.toEqual(newColumnList);
      columnService.updateColumnList(newColumnList);
      expect(columnService.getColumns()).toEqual(newColumnList);
    });

    it('updates columnListChange for the lastVisibleColumn', function() {
      const visibleTestColumns: DatagridHideableColumnModel[] = [
        new DatagridHideableColumnModel(null, 'dg-col-1', false),
        new DatagridHideableColumnModel(null, 'dg-col-2', false),
        new DatagridHideableColumnModel(null, 'dg-col-3', false),
      ];

      // Setup
      columnService.updateColumnList(visibleTestColumns);

      // Nothing changed yet - lvc defaults to false
      const initialColumnsState = columnService.getColumns();
      initialColumnsState.forEach(col => {
        expect(col.lastVisibleColumn).toBe(false);
      });

      // hide 2/3 columns
      visibleTestColumns[0].hidden = true;
      visibleTestColumns[1].hidden = true;

      // Update the list
      columnService.updateColumnList(visibleTestColumns);
      const flaggedColumns = columnService.getColumns();
      // Check that the correct flag is set
      expect(flaggedColumns[0].lastVisibleColumn).toBe(false);
      expect(flaggedColumns[1].lastVisibleColumn).toBe(false);
      expect(flaggedColumns[2].lastVisibleColumn).toBe(true);

      // Flip one flag back
      visibleTestColumns[0].hidden = false;

      // Update list
      columnService.updateColumnList(visibleTestColumns);
      const unFlaggedColumns = columnService.getColumns();
      // Test that the flag is correct.
      expect(unFlaggedColumns[2].lastVisibleColumn).toBe(false);
    });

    it('looks up columns by id', function() {
      // test that it accounts for undefined
      const nonHideableColumn: DatagridHideableColumnModel = undefined;
      const visibleTestColumns: DatagridHideableColumnModel[] = [
        new DatagridHideableColumnModel(null, 'dg-col-1', false),
        nonHideableColumn,
        new DatagridHideableColumnModel(null, 'dg-col-2', false),
        new DatagridHideableColumnModel(null, 'dg-col-3', false),
      ];

      // Setup
      columnService.updateColumnList(visibleTestColumns);
      // Test that we can find something that is a hideable column
      expect(visibleTestColumns[0]).toEqual(columnService.getColumnById('dg-col-1'));

      // Test that we gracefully do not find something that is not a hideable column and no errors.
      expect(columnService.getColumnById('')).toBeUndefined();
    });
  });
}
