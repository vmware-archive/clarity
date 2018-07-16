/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Inject, ViewChild } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { ClrIfExpanded } from './if-expanded';
import { Expand } from './providers/expand';

export default function(): void {
  describe('IfExpanded directive', function() {
    describe('View', function() {
      beforeEach(function() {
        /*
                 * Since IfExpanded is a structural directive that isn't rendered in the DOM immediately,
                 * we can't use our usual shortcut, we need to rely on @ViewChild.
                 * A quick investigation didn't reveal a better solution yet, we might want to look into it more.
                 */
        TestBed.configureTestingModule({ declarations: [ClrIfExpanded, SimpleTest, TestCounter], providers: [Expand] });
        this.fixture = TestBed.createComponent(SimpleTest);
        this.fixture.detectChanges();
        this.testComponent = this.fixture.componentInstance;
        this.testElement = this.fixture.nativeElement;
        this.clarityDirective = this.fixture.componentInstance.ifExpanded;
        this.expand = TestBed.get(Expand);
      });

      afterEach(function() {
        this.fixture.destroy();
      });

      it("doesn't display anything by default", function() {
        expect(this.testElement.textContent.trim()).toBe('');
      });

      it('displays the content when the parent becomes expanded', function() {
        this.expand.expanded = true;
        this.fixture.detectChanges();
        expect(this.testElement.textContent.trim()).toBe('1');
      });

      it('removes the content when the parent becomes collapsed again', function() {
        this.expand.expanded = true;
        this.fixture.detectChanges();
        this.expand.expanded = false;
        this.fixture.detectChanges();
        expect(this.testElement.textContent.trim()).toBe('');
      });

      it("doesn't instantiate until the content is actually needed", function() {
        expect(this.testComponent.counter.total).toBe(0);
      });

      it('re-instantiates the content every time it is displayed', function() {
        this.expand.expanded = true;
        this.fixture.detectChanges();
        expect(this.testElement.textContent.trim()).toBe('1');
        this.expand.expanded = false;
        this.fixture.detectChanges();
        this.expand.expanded = true;
        this.fixture.detectChanges();
        expect(this.testElement.textContent.trim()).toBe('2');
      });
    });

    describe('Parent interaction', function() {
      beforeEach(function() {
        /*
                 * Since IfExpanded is a structural directive that isn't rendered in the DOM immediately,
                 * we can't use our usual shortcut, we need to rely on @ViewChild.
                 * A quick investigation didn't reveal a better solution yet, we might want to look into it more.
                 */
        TestBed.configureTestingModule({ declarations: [ClrIfExpanded, NgIfTest], providers: [Expand] });
        this.fixture = TestBed.createComponent(NgIfTest);
        this.fixture.detectChanges();
        this.testComponent = this.fixture.componentInstance;
        this.expand = TestBed.get(Expand);
      });

      afterEach(function() {
        this.fixture.destroy();
      });

      it('sets the parent as expandable', function() {
        expect(this.expand.expandable).toBeGreaterThan(0);
      });

      it('sets the parent as not expandable when destroyed', function() {
        this.testComponent.expandable = false;
        this.fixture.detectChanges();
        expect(this.expand.expandable).toBe(0);
      });
    });
  });
}

@Component({
  template: `<test-counter *clrIfExpanded></test-counter>`,
  providers: [{ provide: 'counter', useValue: { total: 0 } }],
})
class SimpleTest {
  @ViewChild(ClrIfExpanded) ifExpanded: ClrIfExpanded;

  constructor(@Inject('counter') public counter: { total: number }) {}
}

@Component({ selector: 'test-counter', template: `{{count}}` })
class TestCounter {
  public count: number;

  constructor(@Inject('counter') counter: { total: number }) {
    this.count = ++counter.total;
  }
}

@Component({
  template: `
        <ng-container *ngIf="expandable">
            <div *clrIfExpanded>Hello World</div>
        </ng-container>`,
})
class NgIfTest {
  expandable = true;
}
