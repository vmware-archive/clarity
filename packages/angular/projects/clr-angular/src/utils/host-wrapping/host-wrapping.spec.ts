/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Directive, InjectionToken, NgModule, OnInit, Type, ViewContainerRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DynamicWrapper } from './dynamic-wrapper';
import { HostWrapper } from './host-wrapper';
import { ClrHostWrappingModule } from './host-wrapping.module';

const WRAPPER_SERVICE = new InjectionToken<number>('WrapperService');

@Component({
  selector: 'wrapper-component',
  template: `Hello <ng-content></ng-content>!`,
  providers: [{ provide: WRAPPER_SERVICE, useValue: 42 }],
})
class WrapperComponent implements DynamicWrapper {
  _dynamic = false;
}

@Directive({ selector: '[wrappedDirective]' })
class WrappedDirective implements OnInit {
  injected: number;

  constructor(private vcr: ViewContainerRef) {}

  ngOnInit() {
    this.injected = new HostWrapper(WrapperComponent, this.vcr).get(WRAPPER_SERVICE);
  }
}

@NgModule({
  declarations: [WrapperComponent, WrappedDirective],
  exports: [WrapperComponent, WrappedDirective],
  entryComponents: [WrapperComponent],
})
class HostWrappingTestModule {}

@Component({
  template: `
        <span wrappedDirective>World</span>
    `,
})
class WrappingTest {}

@Component({
  template: `
        <wrapper-component><span wrappedDirective>World</span></wrapper-component>
    `,
})
class ExplicitTest {}

@Component({
  template: `
        <span *ngIf="show" wrappedDirective>World</span>
    `,
})
class NgIfTest {
  show = true;
}

interface TestContext<T extends WrappingTest | ExplicitTest | NgIfTest> {
  fixture: ComponentFixture<T>;
  wrapper: WrapperComponent;
  wrapped: WrappedDirective;
}

describe('Host wrapping', function() {
  function setupTest<T>(testContext: TestContext<T>, testComponent: Type<T>) {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, ClrHostWrappingModule, HostWrappingTestModule],
      declarations: [testComponent],
    });
    testContext.fixture = TestBed.createComponent(testComponent);
    testContext.fixture.detectChanges();
    testContext.wrapper = testContext.fixture.debugElement.query(By.directive(WrapperComponent)).componentInstance;
    testContext.wrapped = testContext.fixture.debugElement
      .query(By.directive(WrappedDirective))
      .injector.get(WrappedDirective);
  }

  describe('with an explicit wrapper', function() {
    beforeEach(function(this: TestContext<ExplicitTest>) {
      setupTest(this, ExplicitTest);
    });

    afterEach(function(this: TestContext<ExplicitTest>) {
      this.fixture.destroy();
    });

    it('renders one wrapper and one child', function(this: TestContext<ExplicitTest>) {
      expect(this.fixture.nativeElement.textContent.trim()).toBe('Hello World!');
    });

    it("doesn't mark the wrapper as dynamically created", function(this: TestContext<ExplicitTest>) {
      expect(this.wrapper._dynamic).toBe(false);
    });

    it('proxies to the default injector', function(this: TestContext<ExplicitTest>) {
      expect(this.wrapped.injected).toBe(42);
    });

    it("doesn't create extra elements", function(this: TestContext<WrappingTest>) {
      expect(this.fixture.nativeElement.childElementCount).toBe(1);
      expect(this.fixture.nativeElement.firstElementChild.childElementCount).toBe(1);
    });
  });

  describe('without an explicit wrapper', function() {
    beforeEach(function(this: TestContext<WrappingTest>) {
      setupTest(this, WrappingTest);
    });

    afterEach(function(this: TestContext<WrappingTest>) {
      this.fixture.destroy();
    });

    it('creates a wrapper and projects the host into it', function(this: TestContext<WrappingTest>) {
      expect(this.fixture.nativeElement.textContent.trim()).toBe('Hello World!');
    });

    it('marks the wrapper as dynamically created', function(this: TestContext<WrappingTest>) {
      expect(this.wrapper._dynamic).toBe(true);
    });

    it("proxies to the newly created wrapper's injector", function(this: TestContext<WrappingTest>) {
      expect(this.wrapped.injected).toBe(42);
    });

    it("doesn't leave useless elements", function(this: TestContext<WrappingTest>) {
      expect(this.fixture.nativeElement.childElementCount).toBe(1);
      expect(this.fixture.nativeElement.firstElementChild.childElementCount).toBe(1);
    });
  });

  describe('with *ngIf', function() {
    beforeEach(function(this: TestContext<NgIfTest>) {
      setupTest(this, NgIfTest);
    });

    afterEach(function(this: TestContext<NgIfTest>) {
      this.fixture.destroy();
    });

    it('correctly destroys and recreates everything', function(this: TestContext<NgIfTest>) {
      expect(this.fixture.nativeElement.textContent.trim()).toBe('Hello World!');

      this.fixture.componentInstance.show = false;
      this.fixture.detectChanges();
      expect(this.fixture.nativeElement.textContent.trim()).toBe('');

      this.fixture.componentInstance.show = true;
      this.fixture.detectChanges();
      expect(this.fixture.nativeElement.textContent.trim()).toBe('Hello World!');
    });
  });
});
