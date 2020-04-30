/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DomAdapter } from '../../utils/dom-adapter/dom-adapter';

import { ClrDragAndDropModule } from '../../utils/drag-and-drop/drag-and-drop.module';
import { ClrDragEvent } from '../../utils/drag-and-drop/drag-event';
import { ClrDraggable } from '../../utils/drag-and-drop/draggable/draggable';
import { DragEventType } from '../../utils/drag-and-drop/interfaces/drag-event.interface';
import { ClrDatagridColumnSeparator } from './datagrid-column-separator';
import { ColumnResizerService } from './providers/column-resizer.service';
import { TableSizeService } from './providers/table-size.service';
import { MOCK_TABLE_SIZE_PROVIDER } from './providers/table-size.service.mock';
import { DatagridRenderOrganizer } from './render/render-organizer';
import { generateDragPosition } from '../../utils/drag-and-drop/helpers.spec';

@Component({
  template: `<clr-dg-column-separator></clr-dg-column-separator>`,
  styles: [':host { position: position; width: 200px; height: 400px;}'],
  providers: [ColumnResizerService, MOCK_TABLE_SIZE_PROVIDER],
})
class TestComponent {}

export default function (): void {
  describe('ClrDatagridColumnSeparator component', function () {
    let fixture: ComponentFixture<any>;

    let columnSeparatorDebugElement: DebugElement;
    let columnSeparatorComponent: ClrDatagridColumnSeparator;
    let columnSeparatorElement: HTMLElement;
    let columnResizerService: ColumnResizerService;
    let tableSizeService: TableSizeService;

    let draggableDebugElement: DebugElement;
    let draggableDirective: ClrDraggable<any>;

    // drag event within the max resize range:
    const mockIntDragEventWithinRange = {
      type: DragEventType.DRAG_MOVE,
      dragPosition: generateDragPosition([10, 20], [50, 60]), // moveX will be (50 - 10);
    };
    const mockExtDragEventWithinRange = new ClrDragEvent(mockIntDragEventWithinRange);

    // drag event that would exceed the max resize range:
    const mockIntDragEventExceededRange = {
      type: DragEventType.DRAG_MOVE,
      dragPosition: generateDragPosition([10, 20], [-95, 60]), // moveX will be (-95 - 10);
    };
    const mockExtDragEventExceededRange = new ClrDragEvent(mockIntDragEventExceededRange);

    beforeEach(function () {
      TestBed.configureTestingModule({
        imports: [ClrDragAndDropModule],
        declarations: [TestComponent, ClrDatagridColumnSeparator],
        providers: [DomAdapter, DatagridRenderOrganizer],
      });

      fixture = TestBed.createComponent(TestComponent);

      fixture.detectChanges();

      columnSeparatorDebugElement = fixture.debugElement.query(By.directive(ClrDatagridColumnSeparator));

      columnSeparatorComponent = columnSeparatorDebugElement.injector.get(ClrDatagridColumnSeparator);
      columnSeparatorElement = columnSeparatorDebugElement.nativeElement;
      columnResizerService = columnSeparatorDebugElement.injector.get(ColumnResizerService);
      tableSizeService = columnSeparatorDebugElement.injector.get(TableSizeService);

      draggableDebugElement = fixture.debugElement.query(By.directive(ClrDraggable));
      draggableDirective = draggableDebugElement.injector.get(ClrDraggable);
    });

    afterEach(function () {
      fixture.destroy();
      const popoverContent = document.querySelectorAll('.clr-popover-content');
      popoverContent.forEach(content => document.body.removeChild(content));
    });

    it('calls showTracker() methods when resizing starts', function () {
      const resizeTrackerEl: HTMLElement = columnSeparatorElement.querySelector('.datagrid-column-resize-tracker');

      spyOn(columnSeparatorComponent, 'showTracker');
      draggableDirective.dragStartEmitter.emit();

      expect(columnSeparatorComponent.showTracker).toHaveBeenCalledWith(resizeTrackerEl);
    });

    it('shows trackerEl when resizing starts', function () {
      const resizeTrackerEl: HTMLElement = columnSeparatorElement.querySelector('.datagrid-column-resize-tracker');
      columnSeparatorComponent.showTracker(resizeTrackerEl);
      expect(resizeTrackerEl.style.height).toBe(tableSizeService.getColumnDragHeight());
    });

    it('calls moveTracker() methods when resizing starts', function () {
      const resizeTrackerEl: HTMLElement = columnSeparatorElement.querySelector('.datagrid-column-resize-tracker');
      const moveEvent = new ClrDragEvent({
        type: DragEventType.DRAG_MOVE,
        dragPosition: { pageX: 0, pageY: 0, moveX: 0, moveY: 0 },
      });

      spyOn(columnSeparatorComponent, 'moveTracker');

      draggableDirective.dragMoveEmitter.emit(moveEvent);
      expect(columnSeparatorComponent.moveTracker).toHaveBeenCalledWith(moveEvent, resizeTrackerEl);
    });

    it('moves trackerEl during resizing', function () {
      const resizeTrackerEl: HTMLElement = columnSeparatorElement.querySelector('.datagrid-column-resize-tracker');
      columnSeparatorComponent.showTracker(resizeTrackerEl);
      expect(resizeTrackerEl.style.transform).toBe('');
      columnSeparatorComponent.moveTracker(mockExtDragEventWithinRange, resizeTrackerEl);
      expect(resizeTrackerEl.style.transform).toBe(`translateX(${columnResizerService.resizedBy}px)`);
    });

    it('calls hideTracker() methods when resizing starts', function () {
      const resizeTrackerEl: HTMLElement = columnSeparatorElement.querySelector('.datagrid-column-resize-tracker');
      spyOn(columnSeparatorComponent, 'hideTracker');
      draggableDirective.dragEndEmitter.emit();
      expect(columnSeparatorComponent.hideTracker).toHaveBeenCalledWith(resizeTrackerEl);
    });

    it('hides trackerEl when resizing ends', function () {
      const resizeTrackerEl: HTMLElement = columnSeparatorElement.querySelector('.datagrid-column-resize-tracker');
      columnSeparatorComponent.showTracker(resizeTrackerEl);
      columnSeparatorComponent.moveTracker(mockExtDragEventWithinRange, resizeTrackerEl);
      columnSeparatorComponent.hideTracker(resizeTrackerEl);
      expect(resizeTrackerEl.style.display).toBe('none');
      expect(resizeTrackerEl.style.transform).toBe('translateX(0px)');
    });

    it('redflags trackerEl if resizing exceeds max range', function () {
      const resizeTrackerEl: HTMLElement = columnSeparatorElement.querySelector('.datagrid-column-resize-tracker');
      columnSeparatorComponent.showTracker(resizeTrackerEl);
      columnResizerService.isWithinMaxResizeRange = false;
      columnSeparatorComponent.moveTracker(mockExtDragEventExceededRange, resizeTrackerEl);
      expect(resizeTrackerEl.classList.contains('exceeded-max')).toBeTrue();
      columnResizerService.isWithinMaxResizeRange = true;
      columnSeparatorComponent.moveTracker(mockExtDragEventWithinRange, resizeTrackerEl);
      expect(resizeTrackerEl.classList.contains('exceeded-max')).toBeFalse();
    });
  });
}
