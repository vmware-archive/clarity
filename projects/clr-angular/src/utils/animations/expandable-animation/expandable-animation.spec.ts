/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ClrExpandableAnimation } from './index';
import { Component, DebugElement, ViewChild } from '@angular/core';
import { ClrExpandableAnimationModule } from './expandable-animation.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DomAdapter } from '../../dom-adapter/dom-adapter';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <clr-expandable-animation [clrExpandTrigger]="expanded">
      <div *ngFor="let item of data">{{ item }}</div>
    </clr-expandable-animation>
  `,
})
class TestComponent {
  @ViewChild(ClrExpandableAnimation, { static: true })
  expandable: ClrExpandableAnimation;
  expanded = false;
  data = ['one'];
}

let fixture: ComponentFixture<any>;
let component: TestComponent;

let directiveDebugElement: DebugElement;
let clarityDirective: ClrExpandableAnimation;
let clarityElement: HTMLElement;

describe('Expandable animation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ClrExpandableAnimationModule, NoopAnimationsModule],
      declarations: [TestComponent],
      providers: [DomAdapter],
    });
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

    component = fixture.componentInstance;

    directiveDebugElement = fixture.debugElement.query(By.directive(ClrExpandableAnimation));
    clarityElement = directiveDebugElement.nativeElement;
    clarityDirective = directiveDebugElement.injector.get(ClrExpandableAnimation);
  });

  describe('Model', () => {
    it('start height initializes and updates', () => {
      expect(clarityDirective.startHeight).toEqual(0);
      clarityDirective.updateStartHeight();
      expect(clarityDirective.startHeight).toBeGreaterThan(0);
    });

    // We test startHeight property separately from the DOM updates, because it has slightly different lifecycle
    // which though related to the DOM heights does not correspond 1:1 on all lifecycle steps.
    it('updates startHeight property on expand and collapse', fakeAsync(() => {
      clarityDirective.updateStartHeight();
      const collapsedHeight = clarityDirective.startHeight;
      component.data.push('two');
      component.expanded = true;
      fixture.detectChanges();
      expect(clarityDirective.startHeight).toEqual(collapsedHeight);
      tick();
      expect(clarityDirective.startHeight).toEqual(collapsedHeight * 2);
      const expandedHeight = clarityDirective.startHeight;
      component.data.pop();
      component.expanded = false;
      fixture.detectChanges();
      expect(clarityDirective.startHeight).toEqual(expandedHeight);
      tick();
      expect(clarityDirective.startHeight).toEqual(collapsedHeight);
    }));
  });

  describe('DOM updates', () => {
    it('updates element height on expand and collapse', fakeAsync(() => {
      const collapsedHeight = clarityElement.clientHeight;
      expect(collapsedHeight).toBeGreaterThan(0);
      component.data.push('two');
      fixture.detectChanges();
      tick();
      expect(clarityElement.clientHeight).toEqual(collapsedHeight * 2);
      component.data.pop();
      fixture.detectChanges();
      tick();
      expect(clarityElement.clientHeight).toEqual(collapsedHeight);
    }));
  });
});
