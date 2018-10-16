/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ClrDatagrid } from '../datagrid';
import { TestContext } from '../helpers.spec';
import { DragDispatcher } from '../providers/drag-dispatcher';
import { TableSizeService } from '../providers/table-size.service';

import { DatagridColumnResizer } from './column-resizer';
import { DomAdapter } from '../../../utils/dom-adapter/dom-adapter';

@Component({
  template: `
    <div class="container" style="width: 1100px;">
        <clr-datagrid>
            <clr-dg-column>First</clr-dg-column>
            <clr-dg-column [style.min-width.px]="120">Second</clr-dg-column>
            <clr-dg-column [style.width.px]="column3WidthStrict" 
            (clrDgColumnResize)="newWidth = $event">Three</clr-dg-column>
            <clr-dg-column>Four</clr-dg-column>
            <clr-dg-row *clrDgItems="let item of items">
                <clr-dg-cell>{{item}}</clr-dg-cell>
                <clr-dg-cell [style.min-width.px]="120">{{item * 2}}</clr-dg-cell>
                <clr-dg-cell>{{item * 3}}</clr-dg-cell>
                <clr-dg-cell>{{item * 4}}</clr-dg-cell>
            </clr-dg-row>
            <clr-dg-footer>{{items.length}} items</clr-dg-footer>
        </clr-datagrid>
    </div>
`,
})
class ColumnResizerTest {
  items = [1, 2, 3];
  column3WidthStrict: number = 200;
  newWidth: number;
}

export default function(): void {
  describe('DatagridColumnResizer directive', function() {
    let context: TestContext<ClrDatagrid<number>, ColumnResizerTest>;

    let column1: DebugElement;
    let column2: DebugElement;
    let column3: DebugElement;
    let column4: DebugElement;
    let column1ResizerDirective: DatagridColumnResizer;
    let column2ResizerDirective: DatagridColumnResizer;
    let column3ResizerDirective: DatagridColumnResizer;
    let column4ResizerDirective: DatagridColumnResizer;

    let column1DragDispatcher: DragDispatcher;
    let column2DragDispatcher: DragDispatcher;
    let column3DragDispatcher: DragDispatcher;
    let column4DragDispatcher: DragDispatcher;

    let domAdapter: DomAdapter;
    let pageDragPosX: number;
    let onMoveEvent: any;

    const emulateResize = function(columnResizerDirective: DatagridColumnResizer, amount: number) {
      columnResizerDirective.dragStartHandler();
      columnResizerDirective.dragMoveHandler({ pageX: columnResizerDirective.pageStartPositionX + amount });
      columnResizerDirective.dragEndHandler();
    };
    beforeEach(function() {
      context = this.create(ClrDatagrid, ColumnResizerTest, [TableSizeService]);
      context.detectChanges();
      domAdapter = context.getClarityProvider(DomAdapter);

      column1 = context.fixture.debugElement.queryAll(By.directive(DatagridColumnResizer))[0];
      column2 = context.fixture.debugElement.queryAll(By.directive(DatagridColumnResizer))[1];
      column3 = context.fixture.debugElement.queryAll(By.directive(DatagridColumnResizer))[2];
      column4 = context.fixture.debugElement.queryAll(By.directive(DatagridColumnResizer))[3];

      column1ResizerDirective = column1.injector.get(DatagridColumnResizer);
      column2ResizerDirective = column2.injector.get(DatagridColumnResizer);
      column3ResizerDirective = column3.injector.get(DatagridColumnResizer);
      column4ResizerDirective = column4.injector.get(DatagridColumnResizer);

      column1DragDispatcher = column1.injector.get(DragDispatcher);
      column2DragDispatcher = column2.injector.get(DragDispatcher);
      column3DragDispatcher = column3.injector.get(DragDispatcher);
      column4DragDispatcher = column4.injector.get(DragDispatcher);
    });
    it('accesses separator-dragger and seperator-tracker elements when the drag listener is added in', function() {
      expect(column1DragDispatcher.handleRef.nativeElement).not.toBeUndefined();
      expect(column2DragDispatcher.handleRef.nativeElement).not.toBeUndefined();
      expect(column3DragDispatcher.handleRef.nativeElement).not.toBeUndefined();
      expect(column4DragDispatcher.handleRef.nativeElement).not.toBeUndefined();
      expect(column1DragDispatcher.handleTrackerRef.nativeElement).not.toBeUndefined();
      expect(column2DragDispatcher.handleTrackerRef.nativeElement).not.toBeUndefined();
      expect(column3DragDispatcher.handleTrackerRef.nativeElement).not.toBeUndefined();
      expect(column4DragDispatcher.handleTrackerRef.nativeElement).not.toBeUndefined();
    });
    it('accesses column minimum width on the first drag attempt', function() {
      column1ResizerDirective.dragStartHandler();
      expect(column1ResizerDirective.columnMinWidth).toEqual(96);
      column2ResizerDirective.dragStartHandler();
      expect(column2ResizerDirective.columnMinWidth).toEqual(120);
      column3ResizerDirective.dragStartHandler();
      expect(column3ResizerDirective.columnMinWidth).toEqual(96);
      column4ResizerDirective.dragStartHandler();
      expect(column4ResizerDirective.columnMinWidth).toEqual(96);
    });
    it("shouldn't shrink below its min-width if column expands by large size", function() {
      const column1InitialWidth = domAdapter.clientRect(column1ResizerDirective.columnEl).width;
      emulateResize(column1ResizerDirective, 1000);
      expect(domAdapter.clientRect(column1ResizerDirective.columnEl).width).toBe(column1InitialWidth + 1000);
      expect(domAdapter.clientRect(column2ResizerDirective.columnEl).width).toBe(120);
      expect(domAdapter.clientRect(column3ResizerDirective.columnEl).width).toBe(200);
      expect(domAdapter.clientRect(column4ResizerDirective.columnEl).width).toBe(96);
    });
    it('initial column width should be greater than minumum widths or equal to user defined width', function() {
      expect(domAdapter.clientRect(column1ResizerDirective.columnEl).width).toBeGreaterThanOrEqual(96);
      expect(domAdapter.clientRect(column2ResizerDirective.columnEl).width).toBeGreaterThanOrEqual(120);
      expect(domAdapter.clientRect(column3ResizerDirective.columnEl).width).toBe(200);
      expect(domAdapter.clientRect(column4ResizerDirective.columnEl).width).toBeGreaterThanOrEqual(96);
    });
    it('sets columnRectWidth in onDragStart', function() {
      expect(column1ResizerDirective.columnRectWidth).toBeUndefined();
      expect(column2ResizerDirective.columnRectWidth).toBeUndefined();
      expect(column3ResizerDirective.columnRectWidth).toBeUndefined();
      expect(column4ResizerDirective.columnRectWidth).toBeUndefined();
      const column1InitialWidth = domAdapter.clientRect(column1ResizerDirective.columnEl).width;
      const column2InitialWidth = domAdapter.clientRect(column2ResizerDirective.columnEl).width;
      const column3InitialWidth = domAdapter.clientRect(column3ResizerDirective.columnEl).width;
      const column4InitialWidth = domAdapter.clientRect(column4ResizerDirective.columnEl).width;
      column1ResizerDirective.dragStartHandler();
      expect(column1ResizerDirective.columnRectWidth).toBe(column1InitialWidth);
      column2ResizerDirective.dragStartHandler();
      expect(column2ResizerDirective.columnRectWidth).toBe(column2InitialWidth);
      column3ResizerDirective.dragStartHandler();
      expect(column3ResizerDirective.columnRectWidth).toBe(column3InitialWidth);
      column4ResizerDirective.dragStartHandler();
      expect(column4ResizerDirective.columnRectWidth).toBe(column4InitialWidth);
    });

    it("sets draggerTracker's position", function() {
      expect(column3ResizerDirective.pageStartPositionX).toBeUndefined();
      expect(column3ResizerDirective.columnRectWidth).toBeUndefined();
      column3ResizerDirective.dragStartHandler();

      expect(column3ResizerDirective.columnRectWidth).toBe(
        domAdapter.clientRect(column3ResizerDirective.columnEl).width
      );
      expect(column3ResizerDirective.pageStartPositionX).toBe(
        domAdapter.clientRect(column3ResizerDirective.columnEl).right
      );
    });
    it('should expand the column width by 50px', function() {
      column3ResizerDirective.dragStartHandler();
      pageDragPosX = column3ResizerDirective.pageStartPositionX;
      onMoveEvent = { pageX: pageDragPosX + 50 };
      column3ResizerDirective.dragMoveHandler(onMoveEvent);
      expect(column3ResizerDirective.dragDistancePositionX).toBe(50);
      expect(getComputedStyle(column3DragDispatcher.handleTrackerRef.nativeElement).getPropertyValue('right')).toBe(
        '-50px'
      );
      column3ResizerDirective.dragEndHandler();
      // IE has 1px off for some reason
      expect(domAdapter.clientRect(column3ResizerDirective.columnEl).width).toBeWithinRange(249, 250);
    });
    it('should shrink the column width by 50px', function() {
      column3ResizerDirective.dragStartHandler();
      pageDragPosX = column3ResizerDirective.pageStartPositionX;
      onMoveEvent = { pageX: pageDragPosX - 50 };
      column3ResizerDirective.dragMoveHandler(onMoveEvent);
      expect(column3ResizerDirective.dragDistancePositionX).toBe(-50);
      expect(document.body.style.cursor).toBe('col-resize');
      expect(getComputedStyle(column3DragDispatcher.handleTrackerRef.nativeElement).getPropertyValue('right')).toBe(
        '50px'
      );
      column3ResizerDirective.dragEndHandler();
      expect(domAdapter.clientRect(column3ResizerDirective.columnEl).width).toBe(150);
    });
    it("shouldn't shrink the column width if the actual width equals the minimum width", function() {
      context.testComponent.column3WidthStrict = 96;
      context.detectChanges();
      column3ResizerDirective.dragStartHandler();
      pageDragPosX = column3ResizerDirective.pageStartPositionX;
      onMoveEvent = { pageX: pageDragPosX - 50 };
      column3ResizerDirective.dragMoveHandler(onMoveEvent);
      expect(column3ResizerDirective.dragDistancePositionX).toBe(0);
      expect(document.body.style.cursor).toBe('col-resize');
      expect(getComputedStyle(column3DragDispatcher.handleTrackerRef.nativeElement).getPropertyValue('right')).toBe(
        '0px'
      );
      column3ResizerDirective.dragEndHandler();
      expect(domAdapter.clientRect(column3ResizerDirective.columnEl).width).toBe(96);
    });
    it("shouldn't shrink column below its minimum width", function() {
      context.testComponent.column3WidthStrict = 120;
      context.detectChanges();
      column3ResizerDirective.dragStartHandler();
      pageDragPosX = column3ResizerDirective.pageStartPositionX;
      onMoveEvent = { pageX: pageDragPosX - 50 };
      column3ResizerDirective.dragMoveHandler(onMoveEvent);
      /* Default minimum width is 96px; thus, 120-96 = 24 so it could be dragged and shrunk by only 24px. */
      expect(column3ResizerDirective.dragDistancePositionX).toBe(-24);
      expect(getComputedStyle(column3DragDispatcher.handleTrackerRef.nativeElement).getPropertyValue('right')).toBe(
        '24px'
      );
      column3ResizerDirective.dragEndHandler();
      expect(domAdapter.clientRect(column3ResizerDirective.columnEl).width).toBe(96);
    });
    it('should render the drag tracker in the appropriate styles', function() {
      expect(getComputedStyle(column3DragDispatcher.handleTrackerRef.nativeElement).display).toBe('none');
      column3ResizerDirective.dragStartHandler();
      expect(getComputedStyle(column3DragDispatcher.handleTrackerRef.nativeElement).display).toBe('block');
      pageDragPosX = column3ResizerDirective.pageStartPositionX;
      onMoveEvent = { pageX: pageDragPosX + 50 };
      column3ResizerDirective.dragMoveHandler(onMoveEvent);
      expect(document.body.style.cursor).toBe('col-resize');
      column3ResizerDirective.dragEndHandler();
      expect(document.body.style.cursor).toBe('auto');
      expect(getComputedStyle(column3DragDispatcher.handleTrackerRef.nativeElement).getPropertyValue('right')).toBe(
        '0px'
      );
      expect(getComputedStyle(column3DragDispatcher.handleTrackerRef.nativeElement).getPropertyValue('display')).toBe(
        'none'
      );
    });
    it('emits an event once dragging ends', function() {
      emulateResize(column3ResizerDirective, 50);
      expect(context.testComponent.newWidth).toBe(250);
    });
    it('reset the columnResizeBy property after dragging ends', function() {
      emulateResize(column3ResizerDirective, 50);
      expect(column3ResizerDirective.columnResizeBy).toBe(0);
    });
    it('if a column shrinks, other flexible columns should expand.', function() {
      const column1InitialWidth = domAdapter.clientRect(column1ResizerDirective.columnEl).width;
      const column2InitialWidth = domAdapter.clientRect(column2ResizerDirective.columnEl).width;
      const column4InitialWidth = domAdapter.clientRect(column4ResizerDirective.columnEl).width;
      emulateResize(column3ResizerDirective, -50);
      expect(domAdapter.clientRect(column1ResizerDirective.columnEl).width).toBeGreaterThan(column1InitialWidth);
      expect(domAdapter.clientRect(column2ResizerDirective.columnEl).width).toBeGreaterThan(column2InitialWidth);
      expect(domAdapter.clientRect(column3ResizerDirective.columnEl).width).toBe(150);
      expect(domAdapter.clientRect(column4ResizerDirective.columnEl).width).toBeGreaterThan(column4InitialWidth);
    });
    it('if a column expands, other flexible columns should shrink.', function() {
      const column1InitialWidth = domAdapter.clientRect(column1ResizerDirective.columnEl).width;
      const column2InitialWidth = domAdapter.clientRect(column2ResizerDirective.columnEl).width;
      const column4InitialWidth = domAdapter.clientRect(column4ResizerDirective.columnEl).width;
      emulateResize(column3ResizerDirective, 50);
      expect(domAdapter.clientRect(column1ResizerDirective.columnEl).width).toBeLessThan(column1InitialWidth);
      expect(domAdapter.clientRect(column2ResizerDirective.columnEl).width).toBeLessThan(column2InitialWidth);
      // IE is off 1px
      expect(domAdapter.clientRect(column3ResizerDirective.columnEl).width).toBeWithinRange(249, 250);
      expect(domAdapter.clientRect(column4ResizerDirective.columnEl).width).toBeLessThan(column4InitialWidth);
    });
    it('columns with strict width should keep their widths if other columns get resized', function() {
      const column1InitialWidth = domAdapter.clientRect(column1ResizerDirective.columnEl).width;
      const column2InitialWidth = domAdapter.clientRect(column2ResizerDirective.columnEl).width;
      const column4InitialWidth = domAdapter.clientRect(column4ResizerDirective.columnEl).width;
      emulateResize(column1ResizerDirective, -50);
      expect(domAdapter.clientRect(column1ResizerDirective.columnEl).width).toBe(column1InitialWidth - 50);
      expect(domAdapter.clientRect(column2ResizerDirective.columnEl).width).toBeGreaterThan(column2InitialWidth);
      expect(domAdapter.clientRect(column3ResizerDirective.columnEl).width).toBe(200);
      expect(domAdapter.clientRect(column4ResizerDirective.columnEl).width).toBeGreaterThan(column4InitialWidth);
    });
    it('should give resized columns strict width class', function() {
      expect(column1ResizerDirective.columnEl.classList.contains('datagrid-fixed-width')).toBe(false);
      expect(column2ResizerDirective.columnEl.classList.contains('datagrid-fixed-width')).toBe(false);
      expect(column3ResizerDirective.columnEl.classList.contains('datagrid-fixed-width')).toBe(true);
      expect(column4ResizerDirective.columnEl.classList.contains('datagrid-fixed-width')).toBe(false);
      emulateResize(column1ResizerDirective, -50);
      expect(column1ResizerDirective.columnEl.classList.contains('datagrid-fixed-width')).toBe(true);
      expect(column2ResizerDirective.columnEl.classList.contains('datagrid-fixed-width')).toBe(false);
      expect(column3ResizerDirective.columnEl.classList.contains('datagrid-fixed-width')).toBe(true);
      expect(column4ResizerDirective.columnEl.classList.contains('datagrid-fixed-width')).toBe(false);
    });
    it('should make the last column flexible and set the min-width once other columns become strict', function() {
      emulateResize(column2ResizerDirective, -50);
      emulateResize(column4ResizerDirective, -50);
      expect(column1ResizerDirective.columnEl.classList.contains('datagrid-fixed-width')).toBe(false);
      expect(column2ResizerDirective.columnEl.classList.contains('datagrid-fixed-width')).toBe(true);
      expect(column3ResizerDirective.columnEl.classList.contains('datagrid-fixed-width')).toBe(true);
      expect(column4ResizerDirective.columnEl.classList.contains('datagrid-fixed-width')).toBe(true);
      emulateResize(column1ResizerDirective, -50);
      expect(column1ResizerDirective.columnEl.classList.contains('datagrid-fixed-width')).toBe(true);
      expect(column2ResizerDirective.columnEl.classList.contains('datagrid-fixed-width')).toBe(true);
      expect(column3ResizerDirective.columnEl.classList.contains('datagrid-fixed-width')).toBe(true);
      expect(column4ResizerDirective.columnEl.classList.contains('datagrid-fixed-width')).toBe(false);
    });
  });
}
