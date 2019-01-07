/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ColumnOrderModelService } from './column-order-model.service';
import { ColumnOrdersCoordinatorService } from './column-orders-coordinator.service';
import { DatagridHideableColumnModel } from '../datagrid-hideable-column.model';

export default function(): void {
  describe('ColumnOrderCoordinatorService', function() {
    let columnOrdersCoordinatorService = new ColumnOrdersCoordinatorService();
    let columnOrderModelService1: ColumnOrderModelService;
    let columnOrderModelService2: ColumnOrderModelService;
    let columnOrderModelService3: ColumnOrderModelService;

    beforeEach(function() {
      columnOrdersCoordinatorService = new ColumnOrdersCoordinatorService();

      columnOrderModelService1 = new ColumnOrderModelService(columnOrdersCoordinatorService);
      columnOrderModelService2 = new ColumnOrderModelService(columnOrdersCoordinatorService);
      columnOrderModelService3 = new ColumnOrderModelService(columnOrdersCoordinatorService);

      // Here visually their columns would appear in the following order:
      // columnOrderModelService2, columnOrderModelService1, columnOrderModelService3;
      columnOrderModelService1.flexOrder = 1;
      columnOrderModelService2.flexOrder = 0;
      columnOrderModelService3.flexOrder = 2;

      columnOrdersCoordinatorService.orderModels.push(columnOrderModelService1);
      columnOrdersCoordinatorService.orderModels.push(columnOrderModelService2);
      columnOrdersCoordinatorService.orderModels.push(columnOrderModelService3);
    });

    it('should have column group id from column order coordinator service', function() {
      expect(columnOrderModelService1.columnGroupId).toBe(columnOrdersCoordinatorService.columnGroupId);
      expect(columnOrderModelService2.columnGroupId).toBe(columnOrdersCoordinatorService.columnGroupId);
      expect(columnOrderModelService3.columnGroupId).toBe(columnOrdersCoordinatorService.columnGroupId);
    });

    it('returns correct boolean value if column appears at first', function() {
      expect(columnOrderModelService1.isAtFirst).toBeFalsy();
      expect(columnOrderModelService2.isAtFirst).toBeTruthy();
      expect(columnOrderModelService3.isAtFirst).toBeFalsy();
    });

    it('returns correct boolean value if column appears at end', function() {
      expect(columnOrderModelService1.isAtEnd).toBeFalsy();
      expect(columnOrderModelService2.isAtEnd).toBeFalsy();
      expect(columnOrderModelService3.isAtEnd).toBeTruthy();
    });

    it('returns correct boolean value if column is hidden', function() {
      columnOrderModelService1.hideableColumnModel = new DatagridHideableColumnModel(null, 'dg-col-0', true);
      columnOrderModelService2.hideableColumnModel = new DatagridHideableColumnModel(null, 'dg-col-0', false);
      columnOrderModelService3.hideableColumnModel = new DatagridHideableColumnModel(null, 'dg-col-0', true);
      expect(columnOrderModelService1.isHidden).toBeTruthy();
      expect(columnOrderModelService2.isHidden).toBeFalsy();
      expect(columnOrderModelService3.isHidden).toBeTruthy();
    });

    it('returns correct next visible model', function() {
      // visually the middle one and hidden
      columnOrderModelService1.hideableColumnModel = new DatagridHideableColumnModel(null, 'dg-col-0', true);

      // visually the first one
      columnOrderModelService2.hideableColumnModel = new DatagridHideableColumnModel(null, 'dg-col-0', false);

      // visually the last one
      columnOrderModelService3.hideableColumnModel = new DatagridHideableColumnModel(null, 'dg-col-0', false);

      expect(columnOrderModelService2.nextVisibleColumnModel).toBe(columnOrderModelService3);
      expect(columnOrderModelService3.nextVisibleColumnModel).toBeUndefined();
    });

    it('returns undefined if it has no next visible column', function() {
      columnOrderModelService1.hideableColumnModel = new DatagridHideableColumnModel(null, 'dg-col-0', true);
      columnOrderModelService2.hideableColumnModel = new DatagridHideableColumnModel(null, 'dg-col-0', false);
      columnOrderModelService3.hideableColumnModel = new DatagridHideableColumnModel(null, 'dg-col-0', true);
      expect(columnOrderModelService2.nextVisibleColumnModel).toBeUndefined();
    });

    it('returns correct previous visible model', function() {
      columnOrderModelService1.hideableColumnModel = new DatagridHideableColumnModel(null, 'dg-col-0', true);
      columnOrderModelService2.hideableColumnModel = new DatagridHideableColumnModel(null, 'dg-col-0', false);
      columnOrderModelService3.hideableColumnModel = new DatagridHideableColumnModel(null, 'dg-col-0', false);
      expect(columnOrderModelService3.previousVisibleColumnModel).toBe(columnOrderModelService2);
      expect(columnOrderModelService2.previousVisibleColumnModel).toBeUndefined();
    });

    it('returns undefined if it has no previous visible column', function() {
      columnOrderModelService1.hideableColumnModel = new DatagridHideableColumnModel(null, 'dg-col-0', true);
      columnOrderModelService2.hideableColumnModel = new DatagridHideableColumnModel(null, 'dg-col-0', true);
      columnOrderModelService3.hideableColumnModel = new DatagridHideableColumnModel(null, 'dg-col-0', false);
      expect(columnOrderModelService3.previousVisibleColumnModel).toBeUndefined();
    });
  });
}
