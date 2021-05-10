/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DomAdapter } from '../../../utils/dom-adapter/dom-adapter';
import { DatagridRenderOrganizer } from '../render/render-organizer';
import { ColumnResizerService } from './column-resizer.service';

@Component({
  providers: [ColumnResizerService, DomAdapter, DatagridRenderOrganizer], // Should be declared here in a component level, not in the TestBed because Renderer2 wouldn't be present
  template: `<div></div>`,
  styles: [':host { position: position; width: 200px; height: 400px;}'],
})
class TestComponent {}

export default function (): void {
  describe('Column Resizer Service', function () {
    let columnResizerService: ColumnResizerService;
    let datagridRenderOrganizer: DatagridRenderOrganizer;

    let fixture: ComponentFixture<any>;
    let columnHostEl: HTMLElement;

    beforeEach(function () {
      TestBed.configureTestingModule({ declarations: [TestComponent] });

      fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();

      columnHostEl = fixture.nativeElement;
      columnResizerService = fixture.debugElement.injector.get(ColumnResizerService);
      datagridRenderOrganizer = fixture.debugElement.injector.get(DatagridRenderOrganizer);
    });

    afterEach(() => {
      fixture.destroy();
    });

    it('provides the minimum column width', function () {
      expect(columnResizerService.minColumnWidth).toBe(96);
      columnHostEl.style.minWidth = '123px';
      expect(columnResizerService.minColumnWidth).toBe(123);
    });

    it('provides correct maximum range for resizing', function () {
      columnResizerService.startResize();
      // MAX_RESIZE_RANGE = COLUMN_WIDTH - MIN_COLUMN_WIDTH
      expect(columnResizerService.maxResizeRange).toBe(104);
    });

    it('provides correct resized width', function () {
      columnResizerService.startResize();
      expect(columnResizerService.resizedBy).toBe(0);
      columnResizerService.calculateResize(123);
      expect(columnResizerService.resizedBy).toBe(123);
    });

    it('provides minimum column width if maximum resize range gets exceeded', function () {
      columnResizerService.startResize();
      expect(columnResizerService.resizedBy).toBe(0);
      columnResizerService.calculateResize(-123);
      expect(columnResizerService.resizedBy).toBe(-columnResizerService.maxResizeRange);
      expect(columnResizerService.widthAfterResize).toBe(columnResizerService.minColumnWidth);
    });

    it('provides boolean value of whether resize is within maximum range or not', function () {
      columnResizerService.startResize();
      expect(columnResizerService.isWithinMaxResizeRange).toBeTrue();
      columnResizerService.calculateResize(-123);
      expect(columnResizerService.isWithinMaxResizeRange).toBeFalse();
      columnResizerService.calculateResize(123);
      expect(columnResizerService.isWithinMaxResizeRange).toBeTrue();
    });

    it('triggers datagrid render resize process', function () {
      spyOn(datagridRenderOrganizer, 'resize');
      columnResizerService.endResize();
      expect(datagridRenderOrganizer.resize).toHaveBeenCalled();
    });
  });
}
