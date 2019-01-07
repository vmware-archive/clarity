/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { ClrDatagridColumnReorderDroppable, ColumnHeaderSides } from './datagrid-column-reorder-droppable';
import { TestContext } from '../../utils/testing/helpers.spec';
import { ColumnOrderModelService } from './providers/column-order-model.service';
import { TableSizeService } from './providers/table-size.service';
import { DomAdapter } from '../../utils/dom-adapter/dom-adapter';
import { MOCK_TABLE_SIZE_PROVIDER, MockTableSizeService } from './providers/table-size.service.mock';

import {
  MOCK_COLUMN_ORDER_MODEL_PROVIDER,
  MockColumnOrderModelService,
  populateMockProps,
} from './providers/column-order-model.service.mock';

@Component({
  template: `<clr-dg-column-reorder-droppable [side]="side"></clr-dg-column-reorder-droppable>`,
})
class TestComponent {
  side: ColumnHeaderSides;
}

export default function(): void {
  describe('ClrDatagridColumnReorderDroppable component', function() {
    let context: TestContext<ClrDatagridColumnReorderDroppable, TestComponent>;
    let componentInstance: TestComponent;
    let reorderDroppable: ClrDatagridColumnReorderDroppable;
    let columnOrderModelService: MockColumnOrderModelService;
    let tableSizeService: MockTableSizeService;

    beforeEach(function() {
      const PROVIDERS_NEEDED = [MOCK_TABLE_SIZE_PROVIDER, MOCK_COLUMN_ORDER_MODEL_PROVIDER, DomAdapter];

      context = this.create(ClrDatagridColumnReorderDroppable, TestComponent, PROVIDERS_NEEDED);
      componentInstance = context.fixture.componentInstance;
      reorderDroppable = context.clarityDirective;
      columnOrderModelService = context.getClarityProvider(ColumnOrderModelService);
      tableSizeService = context.getClarityProvider(TableSizeService);

      columnOrderModelService.nextVisibleColumnModel = new MockColumnOrderModelService();
      columnOrderModelService.previousVisibleColumnModel = new MockColumnOrderModelService();

      populateMockProps(columnOrderModelService.previousVisibleColumnModel, 'dg-mock-group-id', 0, 400);
      populateMockProps(columnOrderModelService, 'dg-mock-group-id', 1, 200);
      populateMockProps(columnOrderModelService.nextVisibleColumnModel, 'dg-mock-group-id', 2, 300);

      context.detectChanges();
    });

    afterEach(function() {
      context.fixture.destroy();
    });

    it('has column group id', function() {
      expect(context.clarityDirective.columnOrderDropKey).toBe('dg-mock-group-id');
    });

    it('can return width of its own column', function() {
      expect(context.clarityDirective.headerWidth).toBe(200);
    });

    it('can return width of previous column', function() {
      expect(context.clarityDirective.previousVisibleHeaderWidth).toBe(400);
    });

    it('can return width of next column', function() {
      expect(context.clarityDirective.nextVisibleHeaderWidth).toBe(300);
    });

    it('both droppables should have no drop area for draggable from same column', function() {
      const dragEvent = { dragDataTransfer: columnOrderModelService };

      componentInstance.side = ColumnHeaderSides.Left;
      context.detectChanges();
      reorderDroppable.setDropTolerance(dragEvent);
      expect(context.clarityDirective.dropTolerance).toBe(-1);

      componentInstance.side = ColumnHeaderSides.Right;
      context.detectChanges();
      reorderDroppable.setDropTolerance(dragEvent);
      expect(context.clarityDirective.dropTolerance).toBe(-1);
    });

    it('left droppable should have no drop area for draggable from previous column', function() {
      const dragEvent = { dragDataTransfer: columnOrderModelService.previousVisibleColumnModel };
      componentInstance.side = ColumnHeaderSides.Left;
      context.detectChanges();
      reorderDroppable.setDropTolerance(dragEvent);
      expect(context.clarityDirective.dropTolerance).toBe(-1);
    });

    it('left droppable should have proper drop area for draggable from next column', function() {
      const dragEvent = { dragDataTransfer: columnOrderModelService.nextVisibleColumnModel };
      componentInstance.side = ColumnHeaderSides.Left;
      context.detectChanges();
      reorderDroppable.setDropTolerance(dragEvent);
      const halfOfOwnWidth = context.clarityDirective.headerWidth / 2;
      const halfOfPreviousWidth = context.clarityDirective.previousVisibleHeaderWidth / 2;
      expect(context.clarityDirective.dropTolerance).toEqual({ left: halfOfPreviousWidth, right: halfOfOwnWidth });
    });

    it('right droppable should have no drop area for draggable from next column', function() {
      const dragEvent = { dragDataTransfer: columnOrderModelService.nextVisibleColumnModel };
      componentInstance.side = ColumnHeaderSides.Right;
      context.detectChanges();
      reorderDroppable.setDropTolerance(dragEvent);
      expect(context.clarityDirective.dropTolerance).toBe(-1);
    });

    it('right droppable should have proper drop area for draggable from previous column', function() {
      const dragEvent = { dragDataTransfer: columnOrderModelService.previousVisibleColumnModel };
      componentInstance.side = ColumnHeaderSides.Right;
      context.detectChanges();
      reorderDroppable.setDropTolerance(dragEvent);
      const halfOfOwnWidth = context.clarityDirective.headerWidth / 2;
      const halfOfNextWidth = context.clarityDirective.nextVisibleHeaderWidth / 2;
      expect(context.clarityDirective.dropTolerance).toEqual({ left: halfOfOwnWidth, right: halfOfNextWidth });
    });

    it('gives dropLine height of datagrid table if showHighlight is called', function() {
      const dropLine = context.clarityElement.querySelector('.datagrid-column-drop-line');
      expect(getComputedStyle(dropLine).height).toBe('0px');
      context.clarityDirective.showHighlight(dropLine);
      expect(getComputedStyle(dropLine).height).toBe(tableSizeService.getColumnDragHeight());
    });

    it('reduces dropLine height to 0 if hideHighlight is called', function() {
      const dropLine = context.clarityElement.querySelector('.datagrid-column-drop-line');
      context.clarityDirective.showHighlight(dropLine);
      expect(getComputedStyle(dropLine).height).toBe(tableSizeService.getColumnDragHeight());
      context.clarityDirective.hideHighlight(dropLine);
      expect(getComputedStyle(dropLine).height).toBe('0px');
    });

    it('calls dropReceived method of columnOrderModel and hideHighlight if updateOrder is called', function() {
      const dropLine = context.clarityElement.querySelector('.datagrid-column-drop-line');
      spyOn(columnOrderModelService, 'dropReceived');
      spyOn(context.clarityDirective, 'hideHighlight');
      context.clarityDirective.updateOrder(columnOrderModelService.previousVisibleColumnModel, dropLine);
      expect(columnOrderModelService.dropReceived).toHaveBeenCalledWith(
        columnOrderModelService.previousVisibleColumnModel
      );
      expect(context.clarityDirective.hideHighlight).toHaveBeenCalledWith(dropLine);
    });
  });
}
