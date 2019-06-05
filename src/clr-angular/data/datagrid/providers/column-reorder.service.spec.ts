/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ColumnReorderService } from './column-reorder.service';
import { MOCK_COLUMN_SERVICE_PROVIDER } from './columns.service.mock';
import { Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef, ViewRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Subscription } from 'rxjs';

@Component({
  template: `
    <ng-template #tpl1>0</ng-template>
    <ng-template #tpl2>1</ng-template>
    <ng-template #tpl3>2</ng-template>
  `,
})
class TestComponent implements OnInit, OnDestroy {
  constructor(public vcr: ViewContainerRef, private columnReorderService: ColumnReorderService) {
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

  reorderQueue: number[];

  reordered: boolean = false;

  ngOnInit() {
    this.view1 = this.template1.createEmbeddedView(null);
    this.view2 = this.template2.createEmbeddedView(null);
    this.view3 = this.template3.createEmbeddedView(null);

    this.vcr.insert(this.view1);
    this.vcr.insert(this.view2);
    this.vcr.insert(this.view3);

    this.subscriptions.push(
      this.columnReorderService.reorderRequested.subscribe(reorderQueue => (this.reorderQueue = reorderQueue)),
      this.columnReorderService.reorderCompleted.subscribe(reorderQueue => (this.reordered = true))
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}

export default function(): void {
  describe('Column Reorder Service', function() {
    let fixture: ComponentFixture<any>;

    let testComponent: TestComponent;
    let columnReorderService: ColumnReorderService;

    beforeEach(function() {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        providers: [MOCK_COLUMN_SERVICE_PROVIDER, ColumnReorderService],
      });
      fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      columnReorderService = TestBed.get(ColumnReorderService);
      testComponent = fixture.componentInstance;
    });

    afterEach(() => {
      fixture.destroy();
    });

    it('provides the unique string id for column group', function() {
      expect(columnReorderService.columnsGroupId).toBeString();
    });

    it('provides the view container', function() {
      expect(columnReorderService.containerRef).not.toBeUndefined();
    });

    it('emits reorder request data when reorderViews method gets called', function() {
      expect(testComponent.reorderQueue).toBeUndefined();
      columnReorderService.reorderViews(testComponent.view1, testComponent.view2);
      expect(testComponent.reorderQueue).not.toBeUndefined();
    });

    it('emits order change completion when updateOrders method gets called on reordering', function() {
      expect(testComponent.reordered).toBeFalsy();
      columnReorderService.updateOrders([1, 2, 3], true);
      expect(testComponent.reordered).toBeTruthy();
    });

    it('updates orders array when updateOrders method gets called', function() {
      expect(columnReorderService.orders).toBeUndefined();
      columnReorderService.updateOrders([3, 1, 0, 2]);
      expect(columnReorderService.orders).toEqual([3, 1, 0, 2]);
    });

    it('returns new order at index', function() {
      columnReorderService.orders = [1, 0, 2];
      expect(columnReorderService.orderAt(0)).toBe(1);
      expect(columnReorderService.orderAt(1)).toBe(0);
      expect(columnReorderService.orderAt(2)).toBe(2);
      expect(columnReorderService.orderAt(5)).toBe(-1);
    });

    describe('should emit proper reorder request data on moving:', () => {
      it(`1st view to 2nd view's place`, function() {
        columnReorderService.reorderViews(testComponent.view1, testComponent.view2);
        expect(testComponent.reorderQueue).toEqual([1, 0]);
      });

      it(`2nd view to 1st views's place`, function() {
        columnReorderService.reorderViews(testComponent.view2, testComponent.view1);
        expect(testComponent.reorderQueue).toEqual([1, 0]);
      });

      it(`2nd view to 3rd view's place`, function() {
        columnReorderService.reorderViews(testComponent.view2, testComponent.view3);
        expect(testComponent.reorderQueue).toEqual([, 2, 1]);
      });

      it(`3rd view to 2nd view's place`, function() {
        columnReorderService.reorderViews(testComponent.view3, testComponent.view2);
        expect(testComponent.reorderQueue).toEqual([, 2, 1]);
      });

      it(`1st view to 3rd view's place`, function() {
        columnReorderService.reorderViews(testComponent.view1, testComponent.view3);
        expect(testComponent.reorderQueue).toEqual([2, 0, 1]);
      });

      it(`3rd view to 1st view's place`, function() {
        columnReorderService.reorderViews(testComponent.view3, testComponent.view1);
        expect(testComponent.reorderQueue).toEqual([1, 2, 0]);
      });
    });
  });
}
