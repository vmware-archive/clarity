/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Needed to recreate issue #1084
import { DatagridRenderStep } from '../enums/render-step.enum';
import { ClrDatagridModule } from '../datagrid.module';
import { TestContext } from '../helpers.spec';

import { DatagridHeaderRenderer } from './header-renderer';
import { DatagridMainRenderer } from './main-renderer';
import { DatagridRenderOrganizer } from './render-organizer';
import { MockDatagridRenderOrganizer } from './render-organizer.mock';
import { DisplayModeService } from '../providers/display-mode.service';
import { StateDebouncer } from '../providers/state-debouncer.provider';
import { Page } from '../providers/page';
import { ExpandableRowsCount } from '../providers/global-expandable-rows';
import { HideableColumnService } from '../providers/hideable-column.service';
import { Selection } from '../providers/selection';
import { RowActionService } from '../providers/row-action-service';
import { FiltersProvider } from '../providers/filters';
import { Sort } from '../providers/sort';
import { Items } from '../providers/items';
import { TableSizeService } from '../providers/table-size.service';
import { ColumnToggleButtonsService } from '../providers/column-toggle-buttons.service';
import { StateProvider } from '../providers/state.provider';
import { DomAdapter } from '../../../utils/dom-adapter/dom-adapter';

const PROVIDERS = [
  DisplayModeService,
  Selection,
  Sort,
  FiltersProvider,
  Page,
  Items,
  {
    provide: DatagridRenderOrganizer,
    useClass: MockDatagridRenderOrganizer,
  },
  RowActionService,
  ExpandableRowsCount,
  HideableColumnService,
  StateDebouncer,
  StateProvider,
  ColumnToggleButtonsService,
  TableSizeService,
  DomAdapter,
];

export default function(): void {
  describe('DatagridMainRenderer directive', function() {
    describe('static loading', function() {
      let context: TestContext<DatagridMainRenderer<number>, StaticTest>;
      let organizer: MockDatagridRenderOrganizer;
      let resizeSpy: jasmine.Spy;
      let computeWidthSpy: jasmine.Spy;

      beforeEach(function() {
        resizeSpy = spyOn(DatagridRenderOrganizer.prototype, 'resize');
        context = this.createWithOverride(DatagridMainRenderer, StaticTest, [], [], PROVIDERS);
        organizer = <MockDatagridRenderOrganizer>context.getClarityProvider(DatagridRenderOrganizer);
        computeWidthSpy = spyOn(DatagridHeaderRenderer.prototype, 'computeWidth');
      });

      it('triggers the render process on initialization', function() {
        expect(resizeSpy.calls.count()).toBe(1);
      });

      it('re-triggers the render process whenever the columns change', function() {
        resizeSpy.calls.reset();
        expect(resizeSpy.calls.count()).toBe(0);
        context.testComponent.secondColumn = false;
        context.detectChanges();
        expect(resizeSpy.calls.count()).toBe(1);
        context.testComponent.secondColumn = true;
        context.detectChanges();
        expect(resizeSpy.calls.count()).toBe(2);
      });

      it('does not re-triggers the render process when the rows change', function() {
        resizeSpy.calls.reset();
        expect(resizeSpy.calls.count()).toBe(0);
        context.testComponent.firstRow = false;
        context.detectChanges();
        expect(resizeSpy.calls.count()).toBe(0);
        context.testComponent.firstRow = true;
        context.detectChanges();
        expect(resizeSpy.calls.count()).toBe(0);
      });

      it('computes the widths of the columns when notified', function() {
        expect(computeWidthSpy.calls.count()).toBe(0);
        // Too lazy to do something other than casting right now.
        organizer.updateRenderStep.next(DatagridRenderStep.COMPUTE_COLUMN_WIDTHS);
        expect(computeWidthSpy.calls.count()).toBe(context.clarityDirective.headers.length);
      });

      it('sets the widths of the columns for the other components', function() {
        expect(organizer.widths.length).toBe(0);
        // Too lazy to do something other than casting right now.
        organizer.updateRenderStep.next(DatagridRenderStep.COMPUTE_COLUMN_WIDTHS);
        expect(organizer.widths.length).toBe(context.clarityDirective.headers.length);
      });
    });

    describe('dynamic loading', function() {
      let context: TestContext<DatagridMainRenderer<number>, DynamicTest>;
      let resizeSpy: jasmine.Spy;

      beforeEach(function() {
        resizeSpy = spyOn(DatagridRenderOrganizer.prototype, 'resize');
        context = this.create(DatagridMainRenderer, DynamicTest);
      });

      it('does not trigger the render process until the rows are loaded', function() {
        expect(resizeSpy.calls.count()).toBe(0);
        context.testComponent.projected = true;
        context.detectChanges();
        expect(resizeSpy.calls.count()).toBe(1);
      });

      it('ignores columns changes until the rows are loaded', function() {
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

      it('triggers the render process if the rows are given through *clrDgItems', function() {
        expect(resizeSpy.calls.count()).toBe(0);
        context.testComponent.clrDgItems = [1];
        context.detectChanges();
        expect(resizeSpy.calls.count()).toBe(1);
      });
    });

    describe('smart datagrid width', () => {
      let context: ComponentFixture<RenderWidthTest>;
      let containerWidth: number;
      beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [BrowserAnimationsModule, ClrDatagridModule],
          declarations: [RenderWidthTest],
          providers: PROVIDERS,
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

    describe('smart datagrid height', function() {
      let context: ComponentFixture<DatagridHeightTest>;

      beforeEach(function() {
        TestBed.configureTestingModule({
          imports: [BrowserAnimationsModule, ClrDatagridModule],
          declarations: [DatagridHeightTest],
        });
        context = TestBed.createComponent(DatagridHeightTest);
        context.detectChanges();
      });

      it('sets an initial datagrid height', function() {
        expect(context.nativeElement.clientHeight).toBeGreaterThan(0);
      });

      it('adjusts datagrid height when items are added or removed', function() {
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

    describe('smart columns width', function() {
      let context: TestContext<DatagridMainRenderer<number>, ColumnsWidthTest>;
      let organizer: DatagridRenderOrganizer;

      beforeEach(function() {
        context = this.create(DatagridMainRenderer, ColumnsWidthTest);
        organizer = context.getClarityProvider(DatagridRenderOrganizer);
      });

      it('gives identical columns the same width', function() {
        expect(organizer.widths[0].px).toBe(organizer.widths[1].px);
      });

      it('uses headers content to compute columns width', function() {
        context.testComponent.firstHeader = 'ZZZZZZ ZZZZZZ ZZZZZZ ZZZZZZ';
        context.detectChanges();
        organizer.resize();
        expect(organizer.widths[0].px).toBeGreaterThan(organizer.widths[1].px);
        context.testComponent.firstHeader = 'AAA';
        context.testComponent.secondHeader = 'ZZZZZZ ZZZZZZ ZZZZZZ ZZZZZZ';
        context.detectChanges();
        organizer.resize();
        expect(organizer.widths[0].px).toBeLessThan(organizer.widths[1].px);
      });

      it('uses cells content to compute columns width', function() {
        context.testComponent.firstCell = 'ZZZZZZ ZZZZZZ ZZZZZZ ZZZZZZ';
        context.detectChanges();
        organizer.resize();
        expect(organizer.widths[0].px).toBeGreaterThan(organizer.widths[1].px);
        context.testComponent.firstCell = 'AAA';
        context.testComponent.secondCell = 'ZZZZZZ ZZZZZZ ZZZZZZ ZZZZZZ';
        context.detectChanges();
        organizer.resize();
        expect(organizer.widths[0].px).toBeLessThan(organizer.widths[1].px);
      });

      it('correctly sets strict widths', function() {
        context.testComponent.fixedWidth = true;
        context.detectChanges();
        expect(organizer.widths[0].strict).toBe(true);
        expect(organizer.widths[1].strict).toBe(false);
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
            <button class="action-item" (click)="return;">                
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
      <clr-datagrid #datagridSingleSelect [(clrDgSingleSelected)]='singleSelect'>
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

//
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
                <clr-dg-cell>BBB</clr-dg-cell>
            </clr-dg-row>
            <clr-dg-row *ngIf="!firstRow">
                <clr-dg-cell>CCC</clr-dg-cell>
                <clr-dg-cell>CCC</clr-dg-cell>
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
            <clr-dg-column>{{firstHeader}}</clr-dg-column>
            <clr-dg-column>{{secondHeader}}</clr-dg-column>
            <clr-dg-row>
                <clr-dg-cell *ngIf="fixedWidth">Fixed width</clr-dg-cell>
                <clr-dg-cell>{{firstCell}}</clr-dg-cell>
                <clr-dg-cell>{{secondCell}}</clr-dg-cell>
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
                <clr-dg-cell>{{number}}</clr-dg-cell>
            </clr-dg-row>

            <clr-dg-footer>
                <button
                    class="btn btn-sm btn-outline-primary"
                    (click)="changeList()">Change
                </button>
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
