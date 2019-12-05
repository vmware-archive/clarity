/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ColumnReorderService } from './column-reorder.service';
import { MOCK_COLUMN_SERVICE_PROVIDER, MockColumnsService } from './columns.service.mock';
import { Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef, ViewRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Subscription } from 'rxjs';
import { ColumnsService } from './columns.service';
import { ReorderRequest } from '../interfaces/reorder-request.interface';

@Component({
  template: `
    <ng-template #tpl1>0</ng-template>
    <ng-template #tpl2>1</ng-template>
    <ng-template #tpl3>2</ng-template>
  `,
})
class TestComponent implements OnInit, OnDestroy {
  constructor(
    public vcr: ViewContainerRef,
    private columnReorderService: ColumnReorderService,
    private columnsService: ColumnsService
  ) {
    columnReorderService.containerRef = vcr;
  }

  private subscriptions: Subscription[] = [];

  @ViewChild('tpl1', { static: true })
  template1: TemplateRef<void>;
  @ViewChild('tpl2', { static: true })
  template2: TemplateRef<void>;
  @ViewChild('tpl3', { static: true })
  template3: TemplateRef<void>;

  view1: ViewRef;
  view2: ViewRef;
  view3: ViewRef;

  reorderRequest: ReorderRequest;
  firstVisibleChecked = false;
  lastVisibleChecked = false;

  ngOnInit() {
    this.view1 = this.template1.createEmbeddedView(null);
    this.view2 = this.template2.createEmbeddedView(null);
    this.view3 = this.template3.createEmbeddedView(null);

    this.vcr.insert(this.view1);
    this.vcr.insert(this.view2);
    this.vcr.insert(this.view3);

    this.subscriptions.push(
      this.columnReorderService.reorderRequested.subscribe(reorderRequest => {
        this.reorderRequest = reorderRequest;
      }),
      this.columnsService.checkFirstVisible.subscribe(() => {
        this.firstVisibleChecked = true;
      }),
      this.columnsService.checkLastVisible.subscribe(() => {
        this.lastVisibleChecked = true;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}

export default function(): void {
  describe('Column Reorder Service', () => {
    let fixture: ComponentFixture<any>;

    let testComponent: TestComponent;
    let columnReorderService: ColumnReorderService;
    let columnsService: MockColumnsService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        providers: [MOCK_COLUMN_SERVICE_PROVIDER, ColumnReorderService],
      });
      fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      columnReorderService = TestBed.get(ColumnReorderService);
      columnsService = <MockColumnsService>TestBed.get(ColumnsService);
      columnsService.mockColumns(3);

      testComponent = fixture.componentInstance;
    });

    afterEach(() => {
      fixture.destroy();
    });

    it('provides the unique string id for column group', () => {
      expect(columnReorderService.columnsGroupId).toBeString();
    });

    it('provides the view container', () => {
      expect(columnReorderService.containerRef).not.toBeUndefined();
    });

    it('emits reorder request data when reorderViews method gets called', () => {
      expect(testComponent.reorderRequest).toBeUndefined();
      columnReorderService.reorderViews(testComponent.view1, testComponent.view2, null);
      expect(testComponent.reorderRequest).toEqual({ dragColumnOrder: 0, dropColumnOrder: 1 });
    });

    it('updates orders property value through updateOrders method', () => {
      expect(columnReorderService.orders).toBeUndefined();
      columnReorderService.updateOrders([1, 0, 2]);
      expect(columnReorderService.orders).toEqual([1, 0, 2]);
    });

    it('updates column states on orders', () => {
      expect(columnsService.columns[0].value.order).toBeUndefined();
      expect(columnsService.columns[1].value.order).toBeUndefined();
      expect(columnsService.columns[2].value.order).toBeUndefined();

      columnReorderService.updateOrders([1, 0, 2]);

      expect(columnsService.columns[0].value.order).toBe(1);
      expect(columnsService.columns[1].value.order).toBe(0);
      expect(columnsService.columns[2].value.order).toBe(2);
    });

    it('requests first and last visible columns checks after updating orders', () => {
      expect(testComponent.firstVisibleChecked).toBeFalsy();
      expect(testComponent.lastVisibleChecked).toBeFalsy();
      columnReorderService.updateOrders([1, 0, 2]);
      expect(testComponent.firstVisibleChecked).toBeTruthy();
      expect(testComponent.lastVisibleChecked).toBeTruthy();
    });

    it('returns new allocated order at particular index', () => {
      columnReorderService.orders = [1, 0, 2];
      expect(columnReorderService.orderAt(0)).toBe(1);
      expect(columnReorderService.orderAt(1)).toBe(0);
      expect(columnReorderService.orderAt(2)).toBe(2);
      expect(columnReorderService.orderAt(5)).toBe(-1);
    });

    describe('should emit proper reorder request data on moving:', () => {
      it(`1st view to 2nd view's place`, () => {
        columnReorderService.reorderViews(testComponent.view1, testComponent.view2, null);
        expect(testComponent.reorderRequest).toEqual({ dragColumnOrder: 0, dropColumnOrder: 1 });
      });

      it(`2nd view to 1st views's place`, () => {
        columnReorderService.reorderViews(testComponent.view2, testComponent.view1, null);
        expect(testComponent.reorderRequest).toEqual({ dragColumnOrder: 1, dropColumnOrder: 0 });
      });

      it(`2nd view to 3rd view's place`, () => {
        columnReorderService.reorderViews(testComponent.view2, testComponent.view3, null);
        expect(testComponent.reorderRequest).toEqual({ dragColumnOrder: 1, dropColumnOrder: 2 });
      });

      it(`3rd view to 2nd view's place`, () => {
        columnReorderService.reorderViews(testComponent.view3, testComponent.view2, null);
        expect(testComponent.reorderRequest).toEqual({ dragColumnOrder: 2, dropColumnOrder: 1 });
      });

      it(`1st view to 3rd view's place`, () => {
        columnReorderService.reorderViews(testComponent.view1, testComponent.view3, null);
        expect(testComponent.reorderRequest).toEqual({ dragColumnOrder: 0, dropColumnOrder: 2 });
      });

      it(`3rd view to 1st view's place`, () => {
        columnReorderService.reorderViews(testComponent.view3, testComponent.view1, null);
        expect(testComponent.reorderRequest).toEqual({ dragColumnOrder: 2, dropColumnOrder: 0 });
      });
    });
  });
}
