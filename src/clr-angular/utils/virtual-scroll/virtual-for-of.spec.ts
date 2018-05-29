/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, DebugElement, ViewChild } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { itIgnore } from '../../../../tests/tests.helpers';

import { NonNgIterable } from './non-ng-iterable';
import { VirtualForOf } from './virtual-for-of';

@Component({
  template: `
        <div class="container">
            <div *clrVirtualFor="let n of numbers"
                 class="number" [class.wide]="n === 8">{{n}}</div>
        </div>
    `,
  styles: [
    `
        .container {
            overflow: scroll;
            height: 100px;
        }
        .number {
            height: 50px;
        }
        .number.wide {
            height: 100px;
        }
    `,
  ],
})
class FullTest {
  @ViewChild(VirtualForOf) virtualForOf: VirtualForOf<number>;

  numbers: number[] | NonNgIterable<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
}

/**
 * I can't believe we still haven't standardized this across the project
 */
interface TestContext {
  fixture: ComponentFixture<FullTest>;
  testComponent: FullTest;
  clarityDirective: VirtualForOf<number>;
  container: DebugElement;

  scroll: (times: number) => void;
}

export default function(): void {
  describe('VirtualForOf directive', function() {
    beforeEach(
      fakeAsync(function(this: TestContext) {
        /*
             * Since the VirtualForOf element is a template that isn't rendered in the DOM,
             * we can't use our usual shortcut, we need to rely on @ViewChild
             */
        TestBed.configureTestingModule({ imports: [NoopAnimationsModule], declarations: [VirtualForOf, FullTest] });
        this.fixture = TestBed.createComponent(FullTest);
        this.fixture.detectChanges();
        tick();
        this.testComponent = this.fixture.componentInstance;
        this.clarityDirective = this.fixture.componentInstance.virtualForOf;
        this.container = this.fixture.debugElement.query(By.css('.container'));
        this.scroll = (times: number) => {
          let remaining = Math.abs(times);
          const step = times < 0 ? -50 : 50;
          while (remaining > 1) {
            this.container.nativeElement.scrollBy({ top: 2 * step });
            const scrollEvent = new UIEvent('scroll');
            this.container.nativeElement.dispatchEvent(scrollEvent);
            remaining -= 2;
          }
          if (remaining === 1) {
            this.container.nativeElement.scrollBy({ top: step });
            const scrollEvent = new UIEvent('scroll');
            this.container.nativeElement.dispatchEvent(scrollEvent);
          }
        };
      })
    );

    afterEach(function(this: TestContext) {
      this.fixture.destroy();
    });

    it('only renders items one viewport ahead', function(this: TestContext) {
      expect(this.container.nativeElement.textContent.trim()).toEqual('0123');
    });

    it('updates rendered items on scroll', function(this: TestContext) {
      this.scroll(1);
      expect(this.container.nativeElement.textContent.trim()).toEqual('01234');
    });

    it('allows scrolling several items at once', function(this: TestContext) {
      // The test doesn't mean much without diving in the implementation of this.scroll()
      // The reason this test is relevant is because said implementation really scrolls 2 items at once
      this.scroll(2);
      expect(this.container.nativeElement.textContent.trim()).toEqual('012345');
    });

    it('only renders items one viewport back', function(this: TestContext) {
      this.scroll(4);
      expect(this.container.nativeElement.textContent.trim()).toEqual('234567');
    });

    it('supports scrolling back', function(this: TestContext) {
      this.scroll(4);
      expect(this.container.nativeElement.textContent.trim()).toEqual('234567');
      this.scroll(-1);
      expect(this.container.nativeElement.textContent.trim()).toEqual('123456');
    });

    it("doesn't assume all items have the same height", function(this: TestContext) {
      this.scroll(6);
      expect(this.container.nativeElement.textContent.trim()).toEqual('45678');
    });

    it(
      'allows to reset the items',
      fakeAsync(function(this: TestContext) {
        this.scroll(1);
        this.testComponent.numbers = [40, 41, 42, 43, 44, 45];
        this.fixture.detectChanges();
        tick();
        expect(this.container.nativeElement.textContent.trim()).toEqual('40414243');
      })
    );

    itIgnore(
      ['firefox', 'safari'],
      'can accept an NonNgIterable instead of an array',
      fakeAsync(function(this: TestContext) {
        this.testComponent.numbers = {
          get(index: number) {
            return index;
          },
        };
        this.fixture.detectChanges();
        tick();
        expect(this.container.nativeElement.textContent.trim()).toEqual('-2-10123');
        this.scroll(1);
        expect(this.container.nativeElement.textContent.trim()).toEqual('-101234');
        this.scroll(-2);
        expect(this.container.nativeElement.textContent.trim()).toEqual('-3-2-1012');
      })
    );
  });
}
