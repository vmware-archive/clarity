/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ColumnOrderModelService } from './column-order-model.service';
import { ColumnOrdersCoordinatorService } from './column-orders-coordinator.service';
import { DatagridHideableColumnModel } from '../datagrid-hideable-column.model';
import { DomAdapter } from '../../../utils/dom-adapter/dom-adapter';
import { createMockHeaderEl, destroyMockHeaderEl } from './column-order-model.service.mock';
import { DragEventInterface, DragEventType } from '../../../utils/drag-and-drop/interfaces/drag-event.interface';

export default function(): void {
  describe('ColumnOrderModelService', function() {
    let columnOrdersCoordinatorService: ColumnOrdersCoordinatorService;
    let columnOrderModelService: ColumnOrderModelService;
    let columnOrderModelServicePrev: ColumnOrderModelService;
    let columnOrderModelServiceNext: ColumnOrderModelService;

    const generateMockDropHeaderEvent = (
      columnModelService: ColumnOrderModelService
    ): DragEventInterface<ColumnOrderModelService> => {
      return {
        type: DragEventType.DROP,
        dragPosition: { pageX: 0, pageY: 0, moveX: 0, moveY: 0 },
        dragDataTransfer: columnModelService,
      };
    };

    beforeEach(function() {
      columnOrdersCoordinatorService = new ColumnOrdersCoordinatorService();

      columnOrderModelServicePrev = new ColumnOrderModelService(columnOrdersCoordinatorService, new DomAdapter());
      columnOrderModelService = new ColumnOrderModelService(columnOrdersCoordinatorService, new DomAdapter());
      columnOrderModelServiceNext = new ColumnOrderModelService(columnOrdersCoordinatorService, new DomAdapter());

      // Here visually their columns would appear in the following order:
      // columnOrderModelServicePrev, columnOrderModelService, columnOrderModelServiceNext;
      columnOrderModelService.flexOrder = 1;
      columnOrderModelService.headerEl = createMockHeaderEl(200, 40);

      columnOrderModelServicePrev.flexOrder = 0;
      columnOrderModelServicePrev.headerEl = createMockHeaderEl(400, 40);

      columnOrderModelServiceNext.flexOrder = 2;
      columnOrderModelServiceNext.headerEl = createMockHeaderEl(300, 40);

      columnOrdersCoordinatorService.orderModels.push(columnOrderModelServicePrev);
      columnOrdersCoordinatorService.orderModels.push(columnOrderModelService);
      columnOrdersCoordinatorService.orderModels.push(columnOrderModelServiceNext);
    });

    afterEach(function() {
      destroyMockHeaderEl(columnOrderModelService.headerEl);
      destroyMockHeaderEl(columnOrderModelServicePrev.headerEl);
      destroyMockHeaderEl(columnOrderModelServiceNext.headerEl);
    });

    it('should have column group id from column order coordinator service', function() {
      expect(columnOrderModelService.columnGroupId).toBe(columnOrdersCoordinatorService.columnGroupId);
      expect(columnOrderModelServicePrev.columnGroupId).toBe(columnOrdersCoordinatorService.columnGroupId);
      expect(columnOrderModelServiceNext.columnGroupId).toBe(columnOrdersCoordinatorService.columnGroupId);
    });

    it('returns correct boolean value if column appears at first', function() {
      expect(columnOrderModelService.isFirst).toBeFalsy();
      expect(columnOrderModelServicePrev.isFirst).toBeTruthy();
      expect(columnOrderModelServiceNext.isFirst).toBeFalsy();
    });

    it('returns correct boolean value if column appears at end', function() {
      expect(columnOrderModelService.isLast).toBeFalsy();
      expect(columnOrderModelServicePrev.isLast).toBeFalsy();
      expect(columnOrderModelServiceNext.isLast).toBeTruthy();
    });

    it('returns width of its own column', function() {
      expect(columnOrderModelService.headerWidth).toBe(200);
    });

    it('returns width of previous column', function() {
      expect(columnOrderModelService.previousVisibleHeaderWidth).toBe(400);
    });

    it('returns width of next column', function() {
      expect(columnOrderModelService.nextVisibleHeaderWidth).toBe(300);
    });

    it('returns 0 for the previousVisibleHeaderWidth of the very first visible column', function() {
      expect(columnOrderModelServicePrev.previousVisibleHeaderWidth).toBe(0);
    });

    it('returns 0 for the nextVisibleHeaderWidth of the very last visible column', function() {
      expect(columnOrderModelServiceNext.nextVisibleHeaderWidth).toBe(0);
    });

    it('returns correct boolean value if column is hidden', function() {
      columnOrderModelService.hideableColumnModel = new DatagridHideableColumnModel(null, 'dg-col-0', true);
      columnOrderModelServicePrev.hideableColumnModel = new DatagridHideableColumnModel(null, 'dg-col-0', false);
      columnOrderModelServiceNext.hideableColumnModel = new DatagridHideableColumnModel(null, 'dg-col-0', true);
      expect(columnOrderModelService.isHidden).toBeTruthy();
      expect(columnOrderModelServicePrev.isHidden).toBeFalsy();
      expect(columnOrderModelServiceNext.isHidden).toBeTruthy();
    });

    it('returns correct boolean value if column is hidden and appears last', function() {
      columnOrderModelService.hideableColumnModel = new DatagridHideableColumnModel(null, 'dg-col-0', false);
      columnOrderModelServicePrev.hideableColumnModel = new DatagridHideableColumnModel(null, 'dg-col-0', false);
      columnOrderModelServiceNext.hideableColumnModel = new DatagridHideableColumnModel(null, 'dg-col-0', true);
      expect(columnOrderModelService.isLastVisible).toBeTruthy();
      expect(columnOrderModelServicePrev.isLastVisible).toBeFalsy();
      expect(columnOrderModelServiceNext.isLastVisible).toBeFalsy();
    });

    it('returns correct next visible model initially', function() {
      expect(columnOrderModelServicePrev.nextVisibleColumnModel).toBe(columnOrderModelService);
      expect(columnOrderModelService.nextVisibleColumnModel).toBe(columnOrderModelServiceNext);
    });

    it('returns correct previous visible model initially', function() {
      expect(columnOrderModelService.previousVisibleColumnModel).toBe(columnOrderModelServicePrev);
      expect(columnOrderModelServiceNext.previousVisibleColumnModel).toBe(columnOrderModelService);
    });

    it('returns correct next visible model even after reordering', function() {
      // [0, 1, 2] -> [2, 0, 1]
      columnOrdersCoordinatorService.reorder(0, 2);
      expect(columnOrderModelServicePrev.nextVisibleColumnModel).toBeUndefined();
      expect(columnOrderModelService.nextVisibleColumnModel).toBe(columnOrderModelServiceNext);
      expect(columnOrderModelServiceNext.nextVisibleColumnModel).toBe(columnOrderModelServicePrev);
    });

    it('returns correct previous visible model even after reordering', function() {
      // [0, 1, 2] -> [2, 0, 1]
      columnOrdersCoordinatorService.reorder(0, 2);
      expect(columnOrderModelServicePrev.previousVisibleColumnModel).toBe(columnOrderModelServiceNext);
      expect(columnOrderModelService.previousVisibleColumnModel).toBeUndefined();
      expect(columnOrderModelServiceNext.previousVisibleColumnModel).toBe(columnOrderModelService);
    });

    it('returns correct next visible model', function() {
      // visually the middle one and hidden
      columnOrderModelService.hideableColumnModel = new DatagridHideableColumnModel(null, 'dg-col-0', true);

      // visually the first one
      columnOrderModelServicePrev.hideableColumnModel = new DatagridHideableColumnModel(null, 'dg-col-0', false);

      // visually the last one
      columnOrderModelServiceNext.hideableColumnModel = new DatagridHideableColumnModel(null, 'dg-col-0', false);

      expect(columnOrderModelServicePrev.nextVisibleColumnModel).toBe(columnOrderModelServiceNext);
      expect(columnOrderModelServiceNext.nextVisibleColumnModel).toBeUndefined();
    });

    it('returns undefined if it has no next visible column', function() {
      columnOrderModelService.hideableColumnModel = new DatagridHideableColumnModel(null, 'dg-col-0', true);
      columnOrderModelServicePrev.hideableColumnModel = new DatagridHideableColumnModel(null, 'dg-col-0', false);
      columnOrderModelServiceNext.hideableColumnModel = new DatagridHideableColumnModel(null, 'dg-col-0', true);
      expect(columnOrderModelServicePrev.nextVisibleColumnModel).toBeUndefined();
    });

    it('returns correct previous visible model', function() {
      columnOrderModelService.hideableColumnModel = new DatagridHideableColumnModel(null, 'dg-col-0', true);
      columnOrderModelServicePrev.hideableColumnModel = new DatagridHideableColumnModel(null, 'dg-col-0', false);
      columnOrderModelServiceNext.hideableColumnModel = new DatagridHideableColumnModel(null, 'dg-col-0', false);
      expect(columnOrderModelServiceNext.previousVisibleColumnModel).toBe(columnOrderModelServicePrev);
      expect(columnOrderModelServicePrev.previousVisibleColumnModel).toBeUndefined();
    });

    it('returns undefined if it has no previous visible column', function() {
      columnOrderModelService.hideableColumnModel = new DatagridHideableColumnModel(null, 'dg-col-0', true);
      columnOrderModelServicePrev.hideableColumnModel = new DatagridHideableColumnModel(null, 'dg-col-0', true);
      columnOrderModelServiceNext.hideableColumnModel = new DatagridHideableColumnModel(null, 'dg-col-0', false);
      expect(columnOrderModelServiceNext.previousVisibleColumnModel).toBeUndefined();
    });

    it('calls reorder method of order coordinator services', function() {
      spyOn(columnOrdersCoordinatorService, 'reorder');
      columnOrderModelService.dropReceived(generateMockDropHeaderEvent(columnOrderModelServicePrev));
      expect(columnOrdersCoordinatorService.reorder).toHaveBeenCalledWith(0, 1);
    });
  });
}
