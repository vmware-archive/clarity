/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, DebugElement, Renderer2 } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DomAdapter } from '../../../utils/dom-adapter/dom-adapter';
import { MOCK_DOM_ADAPTER_PROVIDER, MockDomAdapter } from '../../../utils/dom-adapter/dom-adapter.mock';
import { ClrDragEvent } from '../../../utils/drag-and-drop/drag-event';
import { ClrDraggable } from '../../../utils/drag-and-drop/draggable/draggable';
import { DragEventType } from '../../../utils/drag-and-drop/interfaces/drag-event.interface';
import { ClrDatagrid } from '../datagrid';
import { DatagridRenderStep } from '../enums/render-step.enum';
import { TestContext } from '../helpers.spec';
import { ColumnResizerService } from '../providers/column-resizer.service';
import { FiltersProvider } from '../providers/filters';
import { Page } from '../providers/page';
import { Sort } from '../providers/sort';
import { StateDebouncer } from '../providers/state-debouncer.provider';
import { TableSizeService } from '../providers/table-size.service';
import { STRICT_WIDTH_CLASS } from './constants';
import { DatagridHeaderRenderer } from './header-renderer';
import { DatagridRenderOrganizer } from './render-organizer';
import { MOCK_ORGANIZER_PROVIDER, MockDatagridRenderOrganizer } from './render-organizer.mock';

@Component({ template: `<clr-dg-column>Hello world</clr-dg-column>` })
class SimpleTest {}

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
class HeaderResizeTestComponent {
  items = [1, 2, 3];
  column3WidthStrict: number = 200;
  newWidth: number;
}

export default function(): void {
  describe('DatagridHeaderRenderer directive', function() {
    let context: TestContext<DatagridHeaderRenderer, SimpleTest>;
    let domAdapter: MockDomAdapter;
    let organizer: MockDatagridRenderOrganizer;

    beforeEach(function() {
      context = this.create(DatagridHeaderRenderer, SimpleTest, [
        MOCK_ORGANIZER_PROVIDER,
        MOCK_DOM_ADAPTER_PROVIDER,
        Sort,
        FiltersProvider,
        Page,
        StateDebouncer,
        TableSizeService,
        Renderer2,
      ]);
      domAdapter = <MockDomAdapter>context.getClarityProvider(DomAdapter);
      organizer = <MockDatagridRenderOrganizer>context.getClarityProvider(DatagridRenderOrganizer);
    });

    it('computes the width of header based on its scrollWidth', function() {
      domAdapter._scrollWidth = 123;
      expect(context.clarityDirective.computeWidth()).toBe(123);
    });

    it('can set the width of a column', function() {
      context.clarityDirective.setWidth(123);
      expect(context.clarityElement.style.width).toBe('123px');
    });

    it('resets the header to default width when notified', function() {
      context.clarityDirective.setWidth(123);
      expect(context.clarityElement.style.width).toBe('123px');
      organizer.updateRenderStep.next(DatagridRenderStep.CLEAR_WIDTHS);
      expect(context.clarityElement.style.width).toBeFalsy();
    });

    it('uses the width declared by the user if there is one', function() {
      domAdapter._userDefinedWidth = 123;
      organizer.updateRenderStep.next(DatagridRenderStep.DETECT_STRICT_WIDTHS);
      expect(context.clarityDirective.strictWidth).toBe(123);
      domAdapter._userDefinedWidth = 0;
      organizer.updateRenderStep.next(DatagridRenderStep.DETECT_STRICT_WIDTHS);
      expect(context.clarityDirective.strictWidth).toBeFalsy();
    });

    it('does not remove the width defined by the user', function() {
      context.clarityElement.style.width = '123px';
      domAdapter._userDefinedWidth = 123;
      organizer.updateRenderStep.next(DatagridRenderStep.CLEAR_WIDTHS);
      organizer.updateRenderStep.next(DatagridRenderStep.DETECT_STRICT_WIDTHS);
      expect(context.clarityElement.style.width).toBe('123px');
      // One extra cycle to be sure, because clearing widths before computing them
      // might have a special case handling
      context.clarityDirective.computeWidth();
      organizer.updateRenderStep.next(DatagridRenderStep.CLEAR_WIDTHS);
      expect(context.clarityElement.style.width).toBe('123px');
    });

    it('does not set the width when the user declared a strict one', function() {
      domAdapter._scrollWidth = 123;
      context.clarityDirective.strictWidth = 24;
      expect(context.clarityDirective.computeWidth()).toBe(24);
      context.clarityDirective.setWidth(24);
      expect(context.clarityElement.style.width).toBeFalsy();
      expect(context.clarityElement.classList).toContain('datagrid-fixed-width');
      delete context.clarityDirective.strictWidth;
      expect(context.clarityDirective.computeWidth()).toBe(123);
      context.clarityDirective.setWidth(123);
      expect(context.clarityElement.style.width).toBe('123px');
      expect(context.clarityElement.classList).not.toContain('datagrid-fixed-width');
    });
  });

  describe('Datagrid Header Resize Rendering', function() {
    let context: TestContext<ClrDatagrid, HeaderResizeTestComponent>;

    let columnHeader1DebugElement: DebugElement;
    let columnHeader2DebugElement: DebugElement;
    let columnHeader3DebugElement: DebugElement;
    let columnHeader4DebugElement: DebugElement;

    let columnHeader1Element: HTMLElement;
    let columnHeader2Element: HTMLElement;
    let columnHeader3Element: HTMLElement;
    let columnHeader4Element: HTMLElement;

    let column1InitialWidth: number;
    let column2InitialWidth: number;
    let column3InitialWidth: number;
    let column4InitialWidth: number;

    let columnHeader1ResizerService: ColumnResizerService;
    let columnHeader2ResizerService: ColumnResizerService;
    let columnHeader3ResizerService: ColumnResizerService;
    let columnHeader4ResizerService: ColumnResizerService;

    let columnHeader1DraggableDebugElement: DebugElement;
    let columnHeader3DraggableDebugElement: DebugElement;

    let columnHeader1DraggableDirective: ClrDraggable<any>;
    let columnHeader3DraggableDirective: ClrDraggable<any>;

    const widthOf = (el: HTMLElement): number => {
      return Math.round(el.getBoundingClientRect().width);
    };

    const emulateResizeOnColumn = (moveX: number, columnDraggable: ClrDraggable<any>): void => {
      const moveEvent = new ClrDragEvent({
        type: DragEventType.DRAG_MOVE,
        dragPosition: { pageX: 0, pageY: 0, moveX: moveX, moveY: 0 },
      });
      columnDraggable.dragStartEmitter.emit();
      columnDraggable.dragMoveEmitter.emit(moveEvent);
      columnDraggable.dragEndEmitter.emit();
    };

    beforeEach(function() {
      context = this.create(ClrDatagrid, HeaderResizeTestComponent);

      columnHeader1DebugElement = context.fixture.debugElement.queryAll(By.directive(DatagridHeaderRenderer))[0];
      columnHeader2DebugElement = context.fixture.debugElement.queryAll(By.directive(DatagridHeaderRenderer))[1];
      columnHeader3DebugElement = context.fixture.debugElement.queryAll(By.directive(DatagridHeaderRenderer))[2];
      columnHeader4DebugElement = context.fixture.debugElement.queryAll(By.directive(DatagridHeaderRenderer))[3];

      columnHeader1ResizerService = columnHeader1DebugElement.injector.get(ColumnResizerService);
      columnHeader2ResizerService = columnHeader2DebugElement.injector.get(ColumnResizerService);
      columnHeader3ResizerService = columnHeader3DebugElement.injector.get(ColumnResizerService);
      columnHeader4ResizerService = columnHeader4DebugElement.injector.get(ColumnResizerService);

      columnHeader1Element = columnHeader1DebugElement.nativeElement;
      columnHeader2Element = columnHeader2DebugElement.nativeElement;
      columnHeader3Element = columnHeader3DebugElement.nativeElement;
      columnHeader4Element = columnHeader4DebugElement.nativeElement;

      column1InitialWidth = widthOf(columnHeader1Element);
      column2InitialWidth = widthOf(columnHeader2Element);
      column3InitialWidth = widthOf(columnHeader3Element);
      column4InitialWidth = widthOf(columnHeader4Element);

      columnHeader1DraggableDebugElement = context.fixture.debugElement.queryAll(By.directive(ClrDraggable))[0];
      columnHeader3DraggableDebugElement = context.fixture.debugElement.queryAll(By.directive(ClrDraggable))[2];

      columnHeader1DraggableDirective = columnHeader1DraggableDebugElement.injector.get(ClrDraggable);
      columnHeader3DraggableDirective = columnHeader3DraggableDebugElement.injector.get(ClrDraggable);
    });

    it('each header should have min-width', function() {
      expect(columnHeader1ResizerService.minColumnWidth).toBe(96);
      expect(columnHeader2ResizerService.minColumnWidth).toBe(120);
      expect(columnHeader3ResizerService.minColumnWidth).toBe(96);
      expect(columnHeader4ResizerService.minColumnWidth).toBe(96);
    });

    it('columns initialized with strict width should have fixed width class', function() {
      expect(columnHeader1Element.classList.contains(STRICT_WIDTH_CLASS)).toBeFalse();
      expect(columnHeader2Element.classList.contains(STRICT_WIDTH_CLASS)).toBeFalse();
      expect(columnHeader3Element.classList.contains(STRICT_WIDTH_CLASS)).toBeTrue();
      expect(columnHeader4Element.classList.contains(STRICT_WIDTH_CLASS)).toBeFalse();
    });

    it("each header's initial width should be equal to or greater than its min-width", function() {
      expect(column1InitialWidth).toBeGreaterThan(columnHeader1ResizerService.minColumnWidth);
      expect(column2InitialWidth).toBeGreaterThan(columnHeader2ResizerService.minColumnWidth);
      expect(column3InitialWidth).toBeGreaterThan(columnHeader3ResizerService.minColumnWidth);
      expect(column4InitialWidth).toBeGreaterThan(columnHeader4ResizerService.minColumnWidth);
    });

    it('expands other flexible headers if header width shrinks', function() {
      const resizeBy = -20;

      emulateResizeOnColumn(resizeBy, columnHeader1DraggableDirective);

      expect(widthOf(columnHeader1Element)).toBe(column1InitialWidth + resizeBy);
      expect(widthOf(columnHeader2Element)).toBeGreaterThan(column2InitialWidth);
      expect(widthOf(columnHeader3Element)).toBe(
        column3InitialWidth,
        `A strict width shouldn't change when other header's width changes`
      );
      expect(widthOf(columnHeader4Element)).toBeGreaterThan(column4InitialWidth);
    });

    it('resized header should have fixed width class', function() {
      expect(columnHeader1Element.classList.contains(STRICT_WIDTH_CLASS)).toBeFalse();
      const resizeBy = -20;
      emulateResizeOnColumn(resizeBy, columnHeader1DraggableDirective);
      expect(columnHeader1Element.classList.contains(STRICT_WIDTH_CLASS)).toBeTrue();
    });

    it('shrinks other flexible headers if header width expands', function() {
      const resizeBy = 20;

      emulateResizeOnColumn(resizeBy, columnHeader1DraggableDirective);

      expect(widthOf(columnHeader1Element)).toBe(column1InitialWidth + resizeBy);
      expect(widthOf(columnHeader2Element)).toBeLessThan(column2InitialWidth);
      expect(widthOf(columnHeader3Element)).toBe(
        column3InitialWidth,
        `A strict width shouldn't change when other header's width changes`
      );
      expect(widthOf(columnHeader4Element)).toBeLessThan(column4InitialWidth);
    });

    it("shouldn't shrink flexible headers below their min-width if header width expands by large amount", function() {
      const resizeBy = 1000;
      emulateResizeOnColumn(resizeBy, columnHeader1DraggableDirective);
      expect(widthOf(columnHeader1Element)).toBe(column1InitialWidth + resizeBy);
      expect(widthOf(columnHeader2Element)).toBe(120);
      expect(widthOf(columnHeader3Element)).toBe(
        200,
        `A strict width shouldn't change when other header's width changes`
      );
      expect(widthOf(columnHeader4Element)).toBe(96);
    });

    it('gives header its min-width if a user tried to drag too much to left', function() {
      const resizeBy = -1000;
      emulateResizeOnColumn(resizeBy, columnHeader1DraggableDirective);
      expect(widthOf(columnHeader1Element)).toBe(96);
    });

    it('emits new header width once resizing ends', function() {
      expect(context.testComponent.newWidth).toBeUndefined();
      const resizeBy = 20;
      emulateResizeOnColumn(resizeBy, columnHeader3DraggableDirective);
      expect(context.testComponent.newWidth).toBe(column3InitialWidth + resizeBy);
    });
  });
}
