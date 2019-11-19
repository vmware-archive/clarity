/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, EmbeddedViewRef, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewManagerUtils } from './view-manager-utils';

@Component({
  template: `
    <ng-template #tpl1>0</ng-template>
    <ng-template #tpl2>1</ng-template>
    <ng-template #tpl3>2</ng-template>
  `,
})
class TestComponent implements OnInit {
  constructor(public vcr: ViewContainerRef) {}

  @ViewChild('tpl1', { static: true })
  template1: TemplateRef<void>;
  @ViewChild('tpl2', { static: true })
  template2: TemplateRef<void>;
  @ViewChild('tpl3', { static: true })
  template3: TemplateRef<void>;

  view1: EmbeddedViewRef<void>;
  view2: EmbeddedViewRef<void>;
  view3: EmbeddedViewRef<void>;

  viewAccessors: any[];

  ngOnInit() {
    this.view1 = this.template1.createEmbeddedView(null);
    this.view2 = this.template2.createEmbeddedView(null);
    this.view3 = this.template3.createEmbeddedView(null);

    this.viewAccessors = [
      { id: 'view_0', _view: this.view1 },
      { id: 'view_1', _view: this.view2 },
      { id: 'view_2', _view: this.view3 },
    ];
  }
}

export default function(): void {
  describe('View Manager Service', function() {
    let fixture: ComponentFixture<any>;
    let testComponent: TestComponent;

    beforeEach(function() {
      TestBed.configureTestingModule({ declarations: [TestComponent] });
      fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      testComponent = fixture.componentInstance;
    });

    afterEach(() => {
      fixture.destroy();
    });

    it('inserts all views', function() {
      expect(testComponent.vcr.length).toBe(0);
      // Using Array.prototype.slice() to not modify the original array
      ViewManagerUtils.insertAllViews(testComponent.vcr, testComponent.viewAccessors.slice());
      expect(testComponent.vcr.length).toBe(3);
      expect(testComponent.vcr.get(0)).toEqual(testComponent.viewAccessors[0]._view);
      expect(testComponent.vcr.get(1)).toEqual(testComponent.viewAccessors[1]._view);
      expect(testComponent.vcr.get(2)).toEqual(testComponent.viewAccessors[2]._view);
    });

    it('reorders views', function() {
      ViewManagerUtils.insertAllViews(testComponent.vcr, testComponent.viewAccessors.slice());

      expect(testComponent.vcr.length).toBe(3);
      expect(testComponent.vcr.get(0)).toEqual(testComponent.viewAccessors[0]._view);
      expect(testComponent.vcr.get(1)).toEqual(testComponent.viewAccessors[1]._view);
      expect(testComponent.vcr.get(2)).toEqual(testComponent.viewAccessors[2]._view);
      ViewManagerUtils.reorderViews(testComponent.vcr, testComponent.viewAccessors.slice().reverse());

      expect(testComponent.vcr.get(0)).toEqual(testComponent.viewAccessors[2]._view);
      expect(testComponent.vcr.get(1)).toEqual(testComponent.viewAccessors[1]._view);
      expect(testComponent.vcr.get(2)).toEqual(testComponent.viewAccessors[0]._view);
    });

    it('sorts view by its order', function() {
      expect(testComponent.vcr.length).toBe(0);
      testComponent.viewAccessors[0].order = 2;
      testComponent.viewAccessors[1].order = 1;
      testComponent.viewAccessors[2].order = 0;
      // Using Array.prototype.slice() to not modify the original array
      ViewManagerUtils.insertAllViews(testComponent.vcr, testComponent.viewAccessors.slice(), true);
      expect(testComponent.vcr.length).toBe(3);
      expect(testComponent.vcr.get(0)).toEqual(testComponent.viewAccessors[2]._view);
      expect(testComponent.vcr.get(1)).toEqual(testComponent.viewAccessors[1]._view);
      expect(testComponent.vcr.get(2)).toEqual(testComponent.viewAccessors[0]._view);
    });

    it("sorts view by its user-defined-order if it has the same conflicting order with another view's", function() {
      expect(testComponent.vcr.length).toBe(0);
      testComponent.viewAccessors[0].order = 0;
      testComponent.viewAccessors[0].userDefinedOrder = 0;
      testComponent.viewAccessors[1].order = 1;
      testComponent.viewAccessors[1].userDefinedOrder = 2;
      testComponent.viewAccessors[2].order = 1;
      testComponent.viewAccessors[2].userDefinedOrder = 1;
      // Using Array.prototype.slice() to not modify the original array
      ViewManagerUtils.insertAllViews(testComponent.vcr, testComponent.viewAccessors.slice(), true);
      expect(testComponent.vcr.length).toBe(3);
      expect(testComponent.vcr.get(0)).toEqual(testComponent.viewAccessors[0]._view);
      expect(testComponent.vcr.get(1)).toEqual(testComponent.viewAccessors[2]._view);
      expect(testComponent.vcr.get(2)).toEqual(testComponent.viewAccessors[1]._view);
    });

    it("sorts view by its position in QueryList if its both order and user-defined-order are conflicting with another view's", function() {
      expect(testComponent.vcr.length).toBe(0);
      testComponent.viewAccessors[0].order = 2;
      testComponent.viewAccessors[0].userDefinedOrder = 2;
      testComponent.viewAccessors[1].order = 1;
      testComponent.viewAccessors[1].userDefinedOrder = 1;
      testComponent.viewAccessors[2].order = 1;
      testComponent.viewAccessors[2].userDefinedOrder = 1;
      // Using Array.prototype.slice() to not modify the original array
      ViewManagerUtils.insertAllViews(testComponent.vcr, testComponent.viewAccessors.slice(), true);
      expect(testComponent.vcr.length).toBe(3);
      expect(testComponent.vcr.get(0)).toEqual(testComponent.viewAccessors[1]._view);
      expect(testComponent.vcr.get(1)).toEqual(testComponent.viewAccessors[2]._view);
      expect(testComponent.vcr.get(2)).toEqual(testComponent.viewAccessors[0]._view);
    });

    it('sorts view by its position in QueryList if its both order and user-defined-order are missing', function() {
      expect(testComponent.vcr.length).toBe(0);
      testComponent.viewAccessors[0].order = 0;
      testComponent.viewAccessors[1].order = null;
      testComponent.viewAccessors[2].order = 1;
      // Using Array.prototype.slice() to not modify the original array
      ViewManagerUtils.insertAllViews(testComponent.vcr, testComponent.viewAccessors.slice(), true);
      expect(testComponent.vcr.length).toBe(3);
      expect(testComponent.vcr.get(0)).toEqual(testComponent.viewAccessors[0]._view);
      expect(testComponent.vcr.get(1)).toEqual(testComponent.viewAccessors[1]._view);
      expect(testComponent.vcr.get(2)).toEqual(testComponent.viewAccessors[2]._view);
    });

    it('detaches all views', function() {
      ViewManagerUtils.insertAllViews(testComponent.vcr, testComponent.viewAccessors.slice());
      expect(testComponent.vcr.length).toBe(3);
      ViewManagerUtils.detachAllViews(testComponent.vcr);
      expect(testComponent.vcr.length).toBe(0);
    });
  });
}
