/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Needed to recreate issue #1084
import { By } from '@angular/platform-browser';
import { DatagridRenderStep } from '../enums/render-step.enum';
import { ClrDatagridModule } from '../datagrid.module';
import { DATAGRID_SPEC_PROVIDERS, TestContext } from '../helpers.spec';
import { DatagridHeaderRenderer } from './header-renderer';
import { DatagridMainRenderer } from './main-renderer';
import { DatagridRenderOrganizer } from './render-organizer';
import { MockDatagridRenderOrganizer } from './render-organizer.mock';
import { ClrDatagridColumn } from '../datagrid-column';
import { ColumnsService } from '../providers/columns.service';
import { DatagridRowRenderer } from './row-renderer';

export default function (): void {
  describe('DatagridMainRenderer directive', function () {
    describe('static loading', function () {
      let context: TestContext<DatagridMainRenderer, StaticTest>;
      let organizer: MockDatagridRenderOrganizer;
      let resizeSpy: jasmine.Spy;
      let computeStateSpy: jasmine.Spy;
      let columnsService: ColumnsService;

      beforeEach(function () {
        resizeSpy = spyOn(DatagridRenderOrganizer.prototype, 'resize');
        context = this.createWithOverrideDirective(
          DatagridMainRenderer,
          StaticTest,
          DATAGRID_SPEC_PROVIDERS,
          [],
          [{ provide: DatagridRenderOrganizer, useClass: MockDatagridRenderOrganizer }]
        );
        organizer = context.getClarityProvider(DatagridRenderOrganizer) as MockDatagridRenderOrganizer;
        computeStateSpy = spyOn(DatagridHeaderRenderer.prototype, 'getColumnWidthState');
        columnsService = context.getClarityProvider(ColumnsService);
      });

      it('triggers the render process on initialization', function () {
        expect(resizeSpy.calls.count()).toBe(1);
      });

      it('pushes its header states to the column service', function () {
        expect(columnsService.columns.length).toBe(2);
        context.testComponent.secondColumn = false;
        context.detectChanges();
        expect(columnsService.columns.length).toBe(1);
        context.testComponent.secondColumn = true;
        context.detectChanges();
        expect(columnsService.columns.length).toBe(2);
      });

      it('re-triggers the render process whenever the columns change', function () {
        resizeSpy.calls.reset();
        expect(resizeSpy.calls.count()).toBe(0);
        context.testComponent.secondColumn = false;
        context.detectChanges();
        expect(resizeSpy.calls.count()).toBe(1);
        context.testComponent.secondColumn = true;
        context.detectChanges();
        expect(resizeSpy.calls.count()).toBe(2);
      });

      it('does not re-triggers the render process when the rows change', function () {
        resizeSpy.calls.reset();
        expect(resizeSpy.calls.count()).toBe(0);
        context.testComponent.firstRow = false;
        context.detectChanges();
        expect(resizeSpy.calls.count()).toBe(0);
        context.testComponent.firstRow = true;
        context.detectChanges();
        expect(resizeSpy.calls.count()).toBe(0);
      });

      it('computes the widths of the columns when notified', function () {
        expect(computeStateSpy.calls.count()).toBe(0);
        // Too lazy to do something other than casting right now.
        organizer.updateRenderStep.next(DatagridRenderStep.COMPUTE_COLUMN_WIDTHS);
        expect(computeStateSpy.calls.count()).toBe(
          context.fixture.debugElement.queryAll(By.directive(ClrDatagridColumn)).length
        );
      });

      it('sets the widths of the columns for the other components', function () {
        const spy = spyOn(columnsService, 'emitStateChange');
        organizer.updateRenderStep.next(DatagridRenderStep.COMPUTE_COLUMN_WIDTHS);
        expect(spy).toHaveBeenCalled();
      });
    });

    describe('dynamic loading', function () {
      let context: TestContext<DatagridMainRenderer, DynamicTest>;
      let resizeSpy, rowsSpy: jasmine.Spy;

      beforeEach(function () {
        resizeSpy = spyOn(DatagridRenderOrganizer.prototype, 'resize');
        rowsSpy = spyOn(DatagridRowRenderer.prototype, 'setColumnState');
        context = this.create(DatagridMainRenderer, DynamicTest);
      });

      it('does not trigger the render process until the rows are loaded', function () {
        expect(resizeSpy.calls.count()).toBe(0);
        context.testComponent.projected = true;
        context.detectChanges();
        expect(resizeSpy.calls.count()).toBe(1);
      });

      it('ignores columns changes until the rows are loaded', function () {
        context.testComponent.secondColumn = false;
        context.detectChanges();
        expect(resizeSpy.calls.count()).toBe(0);
        context.testComponent.projected = true;
        context.detectChanges();
        expect(resizeSpy.calls.count()).toBe(1);
        context.testComponent.secondColumn = true;
        context.detectChanges();
        expect(resizeSpy.calls.count()).toBe(2);
      });

      it('triggers the render process if the rows are given through *clrDgItems', function () {
        expect(resizeSpy.calls.count()).toBe(0);
        context.testComponent.clrDgItems = [1];
        context.detectChanges();
        expect(resizeSpy.calls.count()).toBe(1);
      });

      it('tracks changes of cells', function () {
        context.testComponent.clrDgItems = [0, 1, 2];
        context.detectChanges();
        expect(rowsSpy.calls.count()).toBe(3); // Number of rows
        rowsSpy.calls.reset();
        context.testComponent.clrDgItems = [3, 4, 5, 6];
        context.detectChanges();
        expect(rowsSpy.calls.count()).toBe(4);
      });
    });

    describe('smart datagrid width', () => {
      let context: ComponentFixture<RenderWidthTest>;
      let containerWidth: number;
      beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [BrowserAnimationsModule, ClrDatagridModule],
          declarations: [RenderWidthTest],
          providers: DATAGRID_SPEC_PROVIDERS,
        });
        context = TestBed.createComponent(RenderWidthTest);
        context.detectChanges();
        containerWidth = context.componentInstance.container.nativeElement.clientWidth;
      });

      it('calculates the correct width with no row options', () => {
        context.componentInstance.currentTest = 'defaultDatagridTest';
        context.detectChanges();
        const datagridWidth = context.componentInstance.datagridDefault.nativeElement.clientWidth;
        expect(containerWidth).toEqual(datagridWidth);
      });

      it('calculates the correct width when single select is enabled', () => {
        context.componentInstance.currentTest = 'singleSelectTest';
        context.detectChanges();
        const datagridWidth = context.componentInstance.datagridSingleSelect.nativeElement.clientWidth;
        expect(containerWidth).toEqual(datagridWidth);
      });

      it('calculates correct width when multi select is enabled', () => {
        context.componentInstance.currentTest = 'multiSelectTest';
        context.detectChanges();
        const datagridWidth = context.componentInstance.datagridMultiSelect.nativeElement.clientWidth;
        expect(containerWidth).toEqual(datagridWidth);
      });

      it('calculates correct width when row is expandable', () => {
        context.componentInstance.currentTest = 'defaultDatagridTest';
        context.componentInstance.expandable = true;
        context.detectChanges();
        const datagridWidth = context.componentInstance.datagridDefault.nativeElement.clientWidth;
        expect(containerWidth).toEqual(datagridWidth);
      });

      it('calculates correct width when row has actions', () => {
        context.componentInstance.currentTest = 'defaultDatagridTest';
        context.componentInstance.hasActions = true;
        context.detectChanges();
        const datagridWidth = context.componentInstance.datagridDefault.nativeElement.clientWidth;
        expect(containerWidth).toEqual(datagridWidth);
      });
    });

    describe('smart datagrid height', function () {
      let context: ComponentFixture<DatagridHeightTest>;

      beforeEach(function () {
        TestBed.configureTestingModule({
          imports: [BrowserAnimationsModule, ClrDatagridModule],
          declarations: [DatagridHeightTest],
        });
        context = TestBed.createComponent(DatagridHeightTest);
        context.detectChanges();
      });

      it('sets an initial datagrid height', function () {
        expect(context.nativeElement.clientHeight).toBeGreaterThan(0);
      });

      it('adjusts datagrid height when items are added or removed', function () {
        // Tests fix for issue #1084
        const initHeight = context.nativeElement.clientHeight;
        const changeBtn = context.nativeElement.querySelector('.btn.btn-sm.btn-outline-primary');
        changeBtn.click(); // Adds items to the list
        context.detectChanges();
        const height2 = context.nativeElement.clientHeight;
        expect(initHeight).toBeLessThan(height2);
        changeBtn.click(); // toggle back to initial height
        context.detectChanges();
        const finalHeight = context.nativeElement.clientHeight;
        expect(finalHeight).toEqual(initHeight);
      });
    });

    describe('smart columns width', function () {
      let context: TestContext<DatagridMainRenderer, ColumnsWidthTest>;
      let organizer: DatagridRenderOrganizer;
      let columnsService: ColumnsService;

      beforeEach(function () {
        context = this.create(DatagridMainRenderer, ColumnsWidthTest);
        organizer = context.getClarityProvider(DatagridRenderOrganizer);
        columnsService = context.getClarityProvider(ColumnsService);
      });

      it('gives identical columns the same width', function () {
        expect(columnsService.columns[0].value.width).toBe(columnsService.columns[1].value.width);
      });

      it('uses headers content to compute columns width', function () {
        context.testComponent.firstHeader = 'ZZZZZZ ZZZZZZ ZZZZZZ ZZZZZZ';
        context.detectChanges();
        organizer.resize();
        expect(columnsService.columns[0].value.width).toBeGreaterThan(columnsService.columns[1].value.width);
        context.testComponent.firstHeader = 'AAA';
        context.testComponent.secondHeader = 'ZZZZZZ ZZZZZZ ZZZZZZ ZZZZZZ';
        context.detectChanges();
        organizer.resize();
        expect(columnsService.columns[0].value.width).toBeLessThan(columnsService.columns[1].value.width);
      });

      it('uses cells content to compute columns width', function () {
        context.testComponent.firstCell = 'ZZZZZZ ZZZZZZ ZZZZZZ ZZZZZZ';
        context.detectChanges();
        organizer.resize();
        expect(columnsService.columns[0].value.width).toBeGreaterThan(columnsService.columns[1].value.width);
        context.testComponent.firstCell = 'AAA';
        context.testComponent.secondCell = 'ZZZZZZ ZZZZZZ ZZZZZZ ZZZZZZ';
        context.detectChanges();
        organizer.resize();
        expect(columnsService.columns[0].value.width).toBeLessThan(columnsService.columns[1].value.width);
      });

      it('correctly sets strict widths', function () {
        context.testComponent.fixedWidth = true;
        context.detectChanges();
        expect(columnsService.columns[0].value.strictWidth).toBe(42);
        expect(columnsService.columns[1].value.strictWidth).toBe(0);
        context.testComponent.fixedWidth = false;
        context.detectChanges();
        expect(columnsService.columns[0].value.strictWidth).toBe(0);
        expect(columnsService.columns[1].value.strictWidth).toBe(0);
      });
    });

    describe('detail pane', function () {
      let context: TestContext<DatagridMainRenderer, ColumnsWidthTest>;
      let columnsService: ColumnsService;

      beforeEach(function () {
        context = this.create(DatagridMainRenderer, DatagridDetailPaneTest);
        columnsService = context.getClarityProvider(ColumnsService);
        columnsService.resetToLastCache();
        spyOn(columnsService, 'resetToLastCache');
        spyOn(columnsService, 'emitStateChangeAt');
        context.detectChanges();
      });

      it('toggles the detail pane open and emits state changes for each column', function () {
        context.clarityDirective.toggleDetailPane(true);
        context.detectChanges();
        expect(columnsService.resetToLastCache).not.toHaveBeenCalled();
        expect(columnsService.emitStateChangeAt).toHaveBeenCalledTimes(1);
      });

      it('toggles the detail pane closed and resets to cache', function () {
        context.clarityDirective.toggleDetailPane(false);
        expect(columnsService.resetToLastCache).toHaveBeenCalledTimes(1);
        expect(columnsService.emitStateChangeAt).not.toHaveBeenCalled();
      });

      it('toggles the currently active detail item without clearing cache or closing', function () {
        context.clarityDirective.toggleDetailPane(true);
        expect(columnsService.resetToLastCache).not.toHaveBeenCalled();
        expect(columnsService.emitStateChangeAt).toHaveBeenCalledTimes(1);
        context.clarityDirective.toggleDetailPane(true);
        expect(columnsService.resetToLastCache).not.toHaveBeenCalled();
        expect(columnsService.emitStateChangeAt).toHaveBeenCalledTimes(1);
      });
    });
  });
}

@Component({
  template: `
    <div #dgContainer style="width: 232px">
      <!--
        Datagrid side borders = 2px,
        action columns are 38px wide,
        Columns at min width = 2*96px
        Total calculated datagrid width should be 232px and not be wider than the div container.
      -->
      <ng-template *ngIf="currentTest === 'defaultDatagridTest'" [ngTemplateOutlet]="default"></ng-template>
      <ng-template *ngIf="currentTest === 'singleSelectTest'" [ngTemplateOutlet]="single"></ng-template>
      <ng-template *ngIf="currentTest === 'multiSelectTest'" [ngTemplateOutlet]="multi"></ng-template>
    </div>
    <ng-template #default>
      <clr-datagrid #datagridDefault>
        <clr-dg-column>Column</clr-dg-column>
        <clr-dg-column>Column</clr-dg-column>
        <clr-dg-row>
          <clr-dg-action-overflow *ngIf="hasActions">
            <button class="action-item" (click)="(return)">
              Edit
            </button>
          </clr-dg-action-overflow>
          <clr-dg-cell>
            Value
            <ng-template [ngIf]="expandable">
              <clr-dg-row-detail *clrIfExpanded>Detail</clr-dg-row-detail>
            </ng-template>
          </clr-dg-cell>
          <clr-dg-cell>
            Value
            <ng-template [ngIf]="expandable">
              <clr-dg-row-detail *clrIfExpanded>Detail</clr-dg-row-detail>
            </ng-template>
          </clr-dg-cell>
        </clr-dg-row>
      </clr-datagrid>
    </ng-template>
    <ng-template #single>
      <clr-datagrid #datagridSingleSelect [(clrDgSingleSelected)]="singleSelect">
        <clr-dg-column>Column</clr-dg-column>
        <clr-dg-column>Column</clr-dg-column>
        <clr-dg-row>
          <clr-dg-cell>Value</clr-dg-cell>
          <clr-dg-cell>Value</clr-dg-cell>
        </clr-dg-row>
      </clr-datagrid>
    </ng-template>
    <ng-template #multi>
      <clr-datagrid #datagridMultiSelect [(clrDgSelected)]="selected">
        <clr-dg-column>Column</clr-dg-column>
        <clr-dg-column>Column</clr-dg-column>
        <clr-dg-row>
          <clr-dg-cell>Value</clr-dg-cell>
          <clr-dg-cell>Value</clr-dg-cell>
        </clr-dg-row>
      </clr-datagrid>
    </ng-template>
  `,
})
class RenderWidthTest {
  currentTest;
  expandable = false;
  hasActions = false;
  selected: any[] = [];
  singleSelect;
  @ViewChild('dgContainer', { read: ElementRef })
  container: ElementRef;
  @ViewChild('datagridDefault', { read: ElementRef })
  datagridDefault: ElementRef;
  @ViewChild('datagridSingleSelect', { read: ElementRef })
  datagridSingleSelect: ElementRef;
  @ViewChild('datagridMultiSelect', { read: ElementRef })
  datagridMultiSelect: ElementRef;
}

@Component({
  template: `
    <clr-datagrid>
      <clr-dg-column>AAA</clr-dg-column>
      <clr-dg-column *ngIf="secondColumn">AAA</clr-dg-column>
      <clr-dg-row *ngIf="firstRow">
        <clr-dg-cell>BBB</clr-dg-cell>
        <clr-dg-cell *ngIf="secondColumn">BBB</clr-dg-cell>
      </clr-dg-row>
      <clr-dg-row *ngIf="!firstRow">
        <clr-dg-cell>CCC</clr-dg-cell>
        <clr-dg-cell *ngIf="secondColumn">CCC</clr-dg-cell>
      </clr-dg-row>
    </clr-datagrid>
  `,
})
class StaticTest {
  secondColumn = true;
  firstRow = true;
}

@Component({
  template: `
    <clr-datagrid>
      <clr-dg-column>AAA</clr-dg-column>
      <clr-dg-column *ngIf="secondColumn">AAA</clr-dg-column>
      <clr-dg-row *ngIf="projected">
        <clr-dg-cell>BBB</clr-dg-cell>
        <clr-dg-cell>BBB</clr-dg-cell>
      </clr-dg-row>
      <ng-template [ngIf]="clrDgItems.length > 0">
        <clr-dg-row *clrDgItems="let n of clrDgItems">
          <clr-dg-cell>BBB</clr-dg-cell>
          <clr-dg-cell>BBB</clr-dg-cell>
        </clr-dg-row>
      </ng-template>
    </clr-datagrid>
  `,
})
class DynamicTest {
  secondColumn = true;
  projected = false;
  clrDgItems: number[] = [];
}

@Component({
  template: `
    <clr-datagrid>
      <clr-dg-column *ngIf="fixedWidth" [style.width.px]="42">Fixed width</clr-dg-column>
      <clr-dg-column>{{ firstHeader }}</clr-dg-column>
      <clr-dg-column>{{ secondHeader }}</clr-dg-column>
      <clr-dg-row>
        <clr-dg-cell *ngIf="fixedWidth">Fixed width</clr-dg-cell>
        <clr-dg-cell>{{ firstCell }}</clr-dg-cell>
        <clr-dg-cell>{{ secondCell }}</clr-dg-cell>
      </clr-dg-row>
    </clr-datagrid>
  `,
})
class ColumnsWidthTest {
  firstHeader = 'AAA';
  secondHeader = 'AAA';
  firstCell = 'BBB';
  secondCell = 'BBB';

  fixedWidth = false;
}

@Component({
  template: `
    <clr-datagrid>
      <clr-dg-column>Number</clr-dg-column>
      <clr-dg-row *clrDgItems="let number of numbers">
        <clr-dg-cell>{{ number }}</clr-dg-cell>
      </clr-dg-row>

      <clr-dg-footer>
        <button class="btn btn-sm btn-outline-primary" (click)="changeList()">Change</button>
        <clr-dg-pagination [clrDgPageSize]="pageSize"></clr-dg-pagination>
      </clr-dg-footer>
    </clr-datagrid>
  `,
})
class DatagridHeightTest {
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  pageSize = 5;

  changeList() {
    if (this.pageSize === 5) {
      this.pageSize = this.numbers.length; // after 1st click
    } else {
      this.pageSize = 5; // after 3rd click
    }
  }
}

@Component({
  template: `
    <clr-datagrid>
      <clr-dg-column>Number</clr-dg-column>
      <clr-dg-column>Number</clr-dg-column>
      <clr-dg-row *clrDgItems="let number of numbers">
        <clr-dg-cell>{{ number }}</clr-dg-cell>
        <clr-dg-cell>{{ number }}</clr-dg-cell>
      </clr-dg-row>

      <clr-dg-detail *clrIfDetail="let detail">
        {{ detail }}
      </clr-dg-detail>

      <clr-dg-footer>
        <button class="btn btn-sm btn-outline-primary" (click)="changeList()">Change</button>
        <clr-dg-pagination [clrDgPageSize]="pageSize"></clr-dg-pagination>
      </clr-dg-footer>
    </clr-datagrid>
  `,
})
class DatagridDetailPaneTest {
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  pageSize = 5;

  changeList() {
    if (this.pageSize === 5) {
      this.pageSize = this.numbers.length; // after 1st click
    } else {
      this.pageSize = 5; // after 3rd click
    }
  }
}
