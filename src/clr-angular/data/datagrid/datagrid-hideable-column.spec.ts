/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, DebugElement, QueryList, ViewChildren } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ClrDatagrid } from './datagrid';
import { ClrDatagridColumn } from './datagrid-column';
import { ClrDatagridModule } from './datagrid.module';
import { DatagridColumnChanges } from './enums/column-changes.enum';
import { DATAGRID_SPEC_PROVIDERS } from './helpers.spec';
import { ColumnsService } from './providers/columns.service';
import { DatagridHeaderRenderer } from './render/header-renderer';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

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
      <ng-container *clrDgHideableColumn="{hidden: hideFirst}">
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

@Component({
  template: `
    <clr-datagrid>
      <clr-dg-column>
        <ng-container *clrDgHideableColumn="{hidden: hideColumnA}">
          A
        </ng-container>
      </clr-dg-column>
      <clr-dg-column>
        <ng-container *clrDgHideableColumn="{hidden: hideColumnB}">
          B
        </ng-container>
      </clr-dg-column>
      <clr-dg-column>
        <ng-container *clrDgHideableColumn="{hidden: hideColumnC}">
          C
        </ng-container>
      </clr-dg-column>

      <clr-dg-row *ngFor="let item of items">
        <clr-dg-cell>a</clr-dg-cell>
        <clr-dg-cell>b</clr-dg-cell>
        <clr-dg-cell>c</clr-dg-cell>
      </clr-dg-row>
    </clr-datagrid>
  `,
})
class DatagridWithHideableColumnsTest {
  items = [1];

  hideColumnA = false;
  hideColumnB = false;
  hideColumnC = false;

  @ViewChildren(ClrDatagridColumn) columns: QueryList<ClrDatagridColumn>;
}

export default function(): void {
  describe('DatagridHideableColumn directive', function() {
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

    describe('Without Column', function() {
      it('should throw an error with a message', function() {
        expect(function() {
          TestBed.configureTestingModule({
            imports: [ClrDatagridModule],
            declarations: [HideableNotInsideColumnTest],
            providers: DATAGRID_SPEC_PROVIDERS,
          });
          TestBed.createComponent(HideableNotInsideColumnTest);
        }).toThrowError('The *clrDgHideableColumn directive can only be used inside of a clr-dg-column component.');
      });
    });

    describe('Sugered', function() {
      beforeEach(function() {
        TestBed.configureTestingModule({
          imports: [ClrDatagridModule, NoopAnimationsModule],
          declarations: [HideableSugaredTest],
          providers: DATAGRID_SPEC_PROVIDERS,
        });
        fixture = TestBed.createComponent(HideableSugaredTest);
        columnsService = fixture.debugElement.injector.get(ColumnsService);
        testSugaredComponent = <HideableSugaredTest>fixture.componentInstance;

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

      afterEach(function() {
        fixture.destroy();
      });

      it('sets its template and hidden state to column state', function() {
        testSugaredComponent.hideFirst = true;

        fixture.detectChanges();
        expect(columnsService.columns[0].value.titleTemplateRef).not.toBeUndefined();
        expect(columnsService.columns[0].value.hidden).toBeTruthy();
        expect(columnsService.columns[1].value.titleTemplateRef).not.toBeUndefined();
        expect(columnsService.columns[1].value.hidden).toBeFalsy();
        expect(columnsService.columns[2].value.titleTemplateRef).toBeUndefined();
      });

      it('set hidden state through clrDgHideableColumn input', function() {
        testSugaredComponent.hideFirst = true;
        fixture.detectChanges();
        expect(columnsService.columns[0].value.hidden).toBeTruthy();
        testSugaredComponent.hideFirst = false;
        fixture.detectChanges();
        expect(columnsService.columns[0].value.hidden).toBeFalsy();
      });
    });

    describe('De-sugered', function() {
      beforeEach(function() {
        TestBed.configureTestingModule({
          imports: [ClrDatagridModule, NoopAnimationsModule],
          declarations: [HideableDesugeredTest],
          providers: DATAGRID_SPEC_PROVIDERS,
        });
        fixture = TestBed.createComponent(HideableDesugeredTest);
        columnsService = fixture.debugElement.injector.get(ColumnsService);
        testDesugaredComponent = <HideableDesugeredTest>fixture.componentInstance;

        column1HeaderRendererDE = fixture.debugElement.queryAll(By.directive(DatagridHeaderRenderer))[0];
        column2HeaderRendererDE = fixture.debugElement.queryAll(By.directive(DatagridHeaderRenderer))[1];

        column1HeaderRenderer = column1HeaderRendererDE.injector.get(DatagridHeaderRenderer);
        column2HeaderRenderer = column2HeaderRendererDE.injector.get(DatagridHeaderRenderer);

        // The following part is handled By MainRenderer. So since we don't have MainRenderer in this test,
        // we handle them on our own.
        column1HeaderRenderer.setColumnState(0);
        column2HeaderRenderer.setColumnState(1);
      });

      afterEach(function() {
        fixture.destroy();
      });

      it('sets its template and hidden state to column state', function() {
        testDesugaredComponent.hideSecond = true;

        fixture.detectChanges();
        expect(columnsService.columns[0].value.titleTemplateRef).not.toBeUndefined();
        expect(columnsService.columns[0].value.hidden).toBeFalsy('Defaults to false if given no input value.');
        expect(columnsService.columns[1].value.titleTemplateRef).not.toBeUndefined();
        expect(columnsService.columns[1].value.hidden).toBeTruthy();
      });

      it('can emit its state from desuraged template', function() {
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

      it('set hidden state through clrDgHidden input', function() {
        testDesugaredComponent.hideSecond = true;
        fixture.detectChanges();
        expect(columnsService.columns[1].value.hidden).toBeTruthy();
        testDesugaredComponent.hideSecond = false;
        fixture.detectChanges();
        expect(columnsService.columns[1].value.hidden).toBeFalsy();
      });
    });

    describe('View', function() {
      const hideColumn = (index: number, hide = true) => {
        columnsService.emitStateChangeAt(index, {
          hidden: hide,
          changes: [DatagridColumnChanges.HIDDEN],
        });
      };

      beforeEach(function() {
        TestBed.configureTestingModule({
          declarations: [DatagridWithHideableColumnsTest],
          imports: [ClrDatagridModule, NoopAnimationsModule],
        });
        fixture = TestBed.createComponent(DatagridWithHideableColumnsTest);
        columnsService = fixture.debugElement.query(By.directive(ClrDatagrid)).injector.get(ColumnsService);
      });

      afterEach(function() {
        fixture.destroy();
      });

      it(`adds corresponding class to hidden column`, function() {
        fixture.detectChanges();
        hideColumn(1);
        const columnEls = Array.from(fixture.nativeElement.querySelectorAll('.datagrid-column')) as HTMLElement[];
        expect(columnEls[0].classList.contains('datagrid-hidden-column')).toBeFalsy();
        expect(columnEls[1].classList.contains('datagrid-hidden-column')).toBeTruthy();
        expect(columnEls[2].classList.contains('datagrid-hidden-column')).toBeFalsy();
      });

      it(`adds corresponding classes of first and last visible column on hiding column`, function() {
        fixture.detectChanges();
        hideColumn(2);
        const columnEls = Array.from(fixture.nativeElement.querySelectorAll('.datagrid-column')) as HTMLElement[];
        expect(columnEls[0].classList.contains('datagrid-first-visible-column')).toBeTruthy();
        expect(columnEls[0].classList.contains('datagrid-last-visible-column')).toBeFalsy();
        expect(columnEls[1].classList.contains('datagrid-first-visible-column')).toBeFalsy();
        expect(columnEls[1].classList.contains('datagrid-last-visible-column')).toBeTruthy();
        expect(columnEls[2].classList.contains('datagrid-first-visible-column')).toBeFalsy();
        expect(columnEls[2].classList.contains('datagrid-last-visible-column')).toBeFalsy();
      });

      it(`adds corresponding classes of first and last visible column on displaying hidden column`, function() {
        hideColumn(2);
        fixture.detectChanges();
        hideColumn(2, false);
        const columnEls = Array.from(fixture.nativeElement.querySelectorAll('.datagrid-column')) as HTMLElement[];
        expect(columnEls[0].classList.contains('datagrid-first-visible-column')).toBeTruthy();
        expect(columnEls[0].classList.contains('datagrid-last-visible-column')).toBeFalsy();
        expect(columnEls[1].classList.contains('datagrid-first-visible-column')).toBeFalsy();
        expect(columnEls[1].classList.contains('datagrid-last-visible-column')).toBeFalsy();
        expect(columnEls[2].classList.contains('datagrid-first-visible-column')).toBeFalsy();
        expect(columnEls[2].classList.contains('datagrid-last-visible-column')).toBeTruthy();
      });
    });
  });
}
