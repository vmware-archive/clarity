/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, DebugElement, Renderer2 } from '@angular/core';
import { FiltersProvider } from './providers/filters';
import { Page } from './providers/page';
import { Sort } from './providers/sort';
import { StateDebouncer } from './providers/state-debouncer.provider';
import { TableSizeService } from './providers/table-size.service';
import { DomAdapter } from '../../utils/dom-adapter/dom-adapter';
import { DatagridRenderOrganizer } from './render/render-organizer';
import { ColumnsService } from './providers/columns.service';
import { DatagridHeaderRenderer } from './render/header-renderer';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClrDatagridModule } from './datagrid.module';
import { DatagridColumnChanges } from './enums/column-changes.enum';
import { DetailService } from './providers/detail.service';

const PROVIDERS_NEEDED = [
  Sort,
  FiltersProvider,
  DatagridRenderOrganizer,
  DomAdapter,
  Page,
  StateDebouncer,
  TableSizeService,
  Renderer2,
  ColumnsService,
  DetailService,
];

export default function (): void {
  describe('DatagridHideableColumn directive', function () {
    let fixture: ComponentFixture<any>;
    let columnsService: ColumnsService;
    let testSugaredComponent: HideableSugaredTest;
    let testDesugaredComponent: HideableDesugeredTest;

    let column1HeaderRendererDE: DebugElement;
    let column2HeaderRendererDE: DebugElement;
    let column3HeaderRendererDE: DebugElement;

    let column1HeaderRenderer: DatagridHeaderRenderer;
    let column2HeaderRenderer: DatagridHeaderRenderer;
    let column3HeaderRenderer: DatagridHeaderRenderer;

    describe('Without Column', function () {
      it('should throw an error with a message', function () {
        expect(function () {
          TestBed.configureTestingModule({
            imports: [ClrDatagridModule],
            declarations: [HideableNotInsideColumnTest],
            providers: PROVIDERS_NEEDED,
          });
          TestBed.createComponent(HideableNotInsideColumnTest);
        }).toThrowError('The *clrDgHideableColumn directive can only be used inside of a clr-dg-column component.');
      });
    });

    describe('Sugered', function () {
      beforeEach(function () {
        TestBed.configureTestingModule({
          imports: [ClrDatagridModule],
          declarations: [HideableSugaredTest],
          providers: PROVIDERS_NEEDED,
        });
        fixture = TestBed.createComponent(HideableSugaredTest);
        columnsService = fixture.debugElement.injector.get(ColumnsService);
        testSugaredComponent = fixture.componentInstance;

        column1HeaderRendererDE = fixture.debugElement.queryAll(By.directive(DatagridHeaderRenderer))[0];
        column2HeaderRendererDE = fixture.debugElement.queryAll(By.directive(DatagridHeaderRenderer))[1];
        column3HeaderRendererDE = fixture.debugElement.queryAll(By.directive(DatagridHeaderRenderer))[2];

        column1HeaderRenderer = column1HeaderRendererDE.injector.get(DatagridHeaderRenderer);
        column2HeaderRenderer = column2HeaderRendererDE.injector.get(DatagridHeaderRenderer);
        column3HeaderRenderer = column3HeaderRendererDE.injector.get(DatagridHeaderRenderer);

        column1HeaderRenderer.setColumnState(0);
        column2HeaderRenderer.setColumnState(1);
        column3HeaderRenderer.setColumnState(2);
      });

      it('sets its template and hidden state to column state', function () {
        testSugaredComponent.hideFirst = true;

        fixture.detectChanges();
        expect(columnsService.columns[0].value.titleTemplateRef).not.toBeUndefined();
        expect(columnsService.columns[0].value.hidden).toBeTruthy();
        expect(columnsService.columns[1].value.titleTemplateRef).not.toBeUndefined();
        expect(columnsService.columns[1].value.hidden).toBeFalsy();
        expect(columnsService.columns[2].value.titleTemplateRef).toBeUndefined();
      });

      it('set hidden state through clrDgHideableColumn input', function () {
        testSugaredComponent.hideFirst = true;
        fixture.detectChanges();
        expect(columnsService.columns[0].value.hidden).toBeTruthy();
        testSugaredComponent.hideFirst = false;
        fixture.detectChanges();
        expect(columnsService.columns[0].value.hidden).toBeFalsy();
      });
    });

    describe('De-sugered', function () {
      beforeEach(function () {
        TestBed.configureTestingModule({
          imports: [ClrDatagridModule],
          declarations: [HideableDesugeredTest],
          providers: PROVIDERS_NEEDED,
        });
        fixture = TestBed.createComponent(HideableDesugeredTest);
        columnsService = fixture.debugElement.injector.get(ColumnsService);
        testDesugaredComponent = fixture.componentInstance;

        column1HeaderRendererDE = fixture.debugElement.queryAll(By.directive(DatagridHeaderRenderer))[0];
        column2HeaderRendererDE = fixture.debugElement.queryAll(By.directive(DatagridHeaderRenderer))[1];

        column1HeaderRenderer = column1HeaderRendererDE.injector.get(DatagridHeaderRenderer);
        column2HeaderRenderer = column2HeaderRendererDE.injector.get(DatagridHeaderRenderer);

        // The following part is handled By MainRenderer. So since we don't have MainRenderer in this test,
        // we handle them on our own.
        column1HeaderRenderer.setColumnState(0);
        column2HeaderRenderer.setColumnState(1);
      });

      it('sets its template and hidden state to column state', function () {
        testDesugaredComponent.hideSecond = true;

        fixture.detectChanges();
        expect(columnsService.columns[0].value.titleTemplateRef).not.toBeUndefined();
        expect(columnsService.columns[0].value.hidden).toBeFalsy('Defaults to false if given no input value.');
        expect(columnsService.columns[1].value.titleTemplateRef).not.toBeUndefined();
        expect(columnsService.columns[1].value.hidden).toBeTruthy();
      });

      it('can emit its state from desuraged template', function () {
        testDesugaredComponent.hideSecond = true;
        fixture.detectChanges();
        expect(columnsService.columns[1].value.titleTemplateRef).not.toBeUndefined();
        expect(columnsService.columns[1].value.hidden).toBeTruthy();
        columnsService.emitStateChangeAt(1, { hidden: false, changes: [DatagridColumnChanges.HIDDEN] });
        fixture.detectChanges();
        expect(testDesugaredComponent.hideSecond).toBeFalsy();
        columnsService.emitStateChangeAt(1, { hidden: true, changes: [DatagridColumnChanges.HIDDEN] });
        fixture.detectChanges();
        expect(testDesugaredComponent.hideSecond).toBeTruthy();
      });

      it('set hidden state through clrDgHidden input', function () {
        testDesugaredComponent.hideSecond = true;
        fixture.detectChanges();
        expect(columnsService.columns[1].value.hidden).toBeTruthy();
        testDesugaredComponent.hideSecond = false;
        fixture.detectChanges();
        expect(columnsService.columns[1].value.hidden).toBeFalsy();
      });
    });
  });
}

@Component({
  template: `
    <ng-container *clrDgHideableColumn>
      Why am I not inside a datagrid column?
    </ng-container>
  `,
})
class HideableNotInsideColumnTest {}

@Component({
  template: `
    <clr-dg-column>
      <ng-container *clrDgHideableColumn="{ hidden: hideFirst }">
        Date
      </ng-container>
    </clr-dg-column>
    <clr-dg-column>
      <ng-container *clrDgHideableColumn>
        Name
      </ng-container>
    </clr-dg-column>
    <clr-dg-column></clr-dg-column>
  `,
})
class HideableSugaredTest {
  hideFirst: boolean;
}

@Component({
  template: `
    <clr-dg-column>
      <ng-template clrDgHideableColumn>
        Date
      </ng-template>
    </clr-dg-column>
    <clr-dg-column>
      <!-- sugar syntax does not support @Output on structural directives, see https://github.com/angular/angular/issues/12121 -->
      <ng-template clrDgHideableColumn [(clrDgHidden)]="hideSecond">
        Name
      </ng-template>
    </clr-dg-column>
  `,
})
class HideableDesugeredTest {
  hideSecond: boolean;
}
