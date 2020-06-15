/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Directive, NgModule, Type, ViewContainerRef, ElementRef, Renderer2, Injector } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NgControl, FormsModule } from '@angular/forms';

import { DynamicWrapper } from '../../utils/host-wrapping/dynamic-wrapper';
import { HostWrapper } from '../../utils/host-wrapping/host-wrapper';
import { ClrHostWrappingModule } from '../../utils/host-wrapping/host-wrapping.module';

import { ControlIdService } from './providers/control-id.service';
import { NgControlService } from './providers/ng-control.service';
import { ControlClassService } from './providers/control-class.service';
import { MarkControlService } from './providers/mark-control.service';
import { WrappedFormControl } from './wrapped-control';
import { LayoutService } from './providers/layout.service';
import { IfControlStateService } from './if-control-state/if-control-state.service';

/*
 * Components using the WrappedFormControl we want to test.
 */
@Component({ selector: 'test-wrapper', template: `<ng-content></ng-content>`, providers: [ControlIdService] })
class TestWrapper implements DynamicWrapper {
  _dynamic = false;
}

@Directive({ selector: '[testControl]' })
class TestControl extends WrappedFormControl<TestWrapper> {
  constructor(vcr: ViewContainerRef) {
    super(vcr, TestWrapper, null, null, null, null);
  }
}

@Component({
  selector: 'test-wrapper2',
  template: `<div id="first"><ng-content></ng-content></div>
    <div id="second"><ng-content></ng-content></div>`,
  providers: [ControlIdService],
})
class TestWrapper2 implements DynamicWrapper {
  _dynamic = false;
}

@Directive({ selector: '[testControl2]' })
class TestControl2 extends WrappedFormControl<TestWrapper2> {
  constructor(vcr: ViewContainerRef) {
    super(vcr, TestWrapper2, null, null, null, null);
  }
}

@Component({
  selector: 'test-wrapper3',
  template: `<div id="wrapper"><ng-content></ng-content></div>`,
  providers: [
    ControlIdService,
    MarkControlService,
    NgControlService,
    IfControlStateService,
    ControlClassService,
    LayoutService,
  ],
})
class TestWrapper3 implements DynamicWrapper {
  _dynamic = false;
}

@Directive({ selector: '[testControl3]' })
class TestControl3 extends WrappedFormControl<TestWrapper3> {
  constructor(vcr: ViewContainerRef, injector: Injector, control: NgControl, renderer: Renderer2, el: ElementRef) {
    super(vcr, TestWrapper3, injector, control, renderer, el);
  }
}

@NgModule({
  imports: [ClrHostWrappingModule, FormsModule],
  declarations: [TestWrapper, TestControl, TestWrapper2, TestControl2, TestControl3, TestWrapper3],
  exports: [TestWrapper, TestControl, TestWrapper2, TestControl2, TestControl3, TestWrapper3],
  entryComponents: [TestWrapper, TestWrapper2, TestWrapper3],
})
class WrappedFormControlTestModule {}

/*
 * Actual test components, one for each case we support
 */
@Component({ template: `<input testControl />` })
class NoWrapperNoId {}

@Component({ template: `<input testControl id="hello" />` })
class NoWrapperWithId {}

@Component({ template: `<test-wrapper><input testControl /></test-wrapper>` })
class WithWrapperNoId {}

@Component({ template: `<test-wrapper><input testControl id="hello" /></test-wrapper>` })
class WithWrapperWithId {}

@Component({ template: `<test-wrapper2><input testControl id="hello" /></test-wrapper2>` })
class WithMultipleNgContent {}

@Component({ template: `<test-wrapper3><input testControl3 [(ngModel)]="model" required /></test-wrapper3>` })
class WithControl {
  model = '';
}

interface TestContext {
  fixture: ComponentFixture<any>;
  wrapper: TestWrapper;
  control: any;
  controlIdService: ControlIdService;
  input: any;
  controlClassService?: ControlClassService;
  markControlService?: MarkControlService;
  ngControlService?: NgControlService;
  ifControlStateService: IfControlStateService;
  layoutService?: LayoutService;
}

export default function (): void {
  describe('WrappedFormControl', () => {
    function setupTest<T>(testContext: TestContext, testComponent: Type<T>, testControl: any) {
      TestBed.configureTestingModule({
        imports: [WrappedFormControlTestModule, FormsModule],
        declarations: [testComponent],
      });
      testContext.fixture = TestBed.createComponent(testComponent);
      testContext.fixture.detectChanges();
      const wrapperDebugElement =
        testContext.fixture.debugElement.query(By.directive(TestWrapper)) ||
        testContext.fixture.debugElement.query(By.directive(TestWrapper3));
      testContext.wrapper = wrapperDebugElement.componentInstance;
      testContext.control = testContext.fixture.debugElement.query(By.directive(testControl)).injector.get(testControl);
      testContext.controlIdService = wrapperDebugElement.injector.get(ControlIdService);
      testContext.input = testContext.fixture.nativeElement.querySelector('input');
      // Capture them only when present, they are optional
      try {
        testContext.markControlService = wrapperDebugElement.injector.get(MarkControlService);
        testContext.controlClassService = wrapperDebugElement.injector.get(ControlClassService);
        testContext.ngControlService = wrapperDebugElement.injector.get(NgControlService);
        testContext.ifControlStateService = wrapperDebugElement.injector.get(IfControlStateService);
        testContext.layoutService = wrapperDebugElement.injector.get(LayoutService);
      } catch (error) {
        // Swallow errors
      }
    }

    describe('getProviderFromContainer', function () {
      it('gets a provider from the container', function (this: TestContext) {
        setupTest(this, WithWrapperNoId, TestControl);
        expect(this.control.getProviderFromContainer(ControlIdService)).toEqual(this.controlIdService);
      });

      it('returns not found if provider is missing', function (this: TestContext) {
        setupTest(this, WithWrapperNoId, TestControl);
        expect(this.control.getProviderFromContainer(MarkControlService, false)).toBeFalse();
      });
    });

    describe('with an explicit wrapper', function () {
      it('uses HostWrapper to inject the ControlIdService', function (this: TestContext) {
        spyOn(HostWrapper.prototype, 'get').and.callThrough();
        setupTest(this, WithWrapperNoId, TestControl);
        expect(HostWrapper.prototype.get).toHaveBeenCalledWith(ControlIdService);
        expect(this.wrapper._dynamic).toBe(false);
      });

      it('sets the id of the host to the id given by the service', function (this: TestContext) {
        setupTest(this, WithWrapperNoId, TestControl);
        expect(this.input.getAttribute('id')).toBe(this.controlIdService.id);
      });

      it('updates the service to the correct id if it exists', function (this: TestContext) {
        setupTest(this, WithWrapperWithId, TestControl);
        expect(this.input.getAttribute('id')).toBe('hello');
        expect(this.controlIdService.id).toBe('hello');
      });
    });

    describe('without an explicit wrapper', function () {
      it('uses HostWrapper to inject the ControlIdService', function (this: TestContext) {
        spyOn(HostWrapper.prototype, 'get').and.callThrough();
        setupTest(this, NoWrapperNoId, TestControl);
        expect(HostWrapper.prototype.get).toHaveBeenCalledWith(ControlIdService);
        expect(this.wrapper._dynamic).toBe(true);
      });

      it('sets the id of the host to the id given by the service', function (this: TestContext) {
        setupTest(this, NoWrapperNoId, TestControl);
        expect(this.input.getAttribute('id')).toBe(this.controlIdService.id);
      });

      it('updates the service to the correct id if it exists', function (this: TestContext) {
        setupTest(this, NoWrapperWithId, TestControl);
        expect(this.input.getAttribute('id')).toBe('hello');
        expect(this.controlIdService.id).toBe('hello');
      });
    });

    describe('with multiple projection slots', function () {
      it('projects into the second slot when configured', function (this: TestContext) {
        setupTest(this, WithMultipleNgContent, TestControl);
        expect(this.fixture.nativeElement.querySelector('#first').innerHTML).toBe('');
        expect(this.fixture.nativeElement.querySelector('#second').querySelector('input')).toBeTruthy();
      });
    });

    describe('with a real NgControl', function () {
      it('sets the control class', function (this: TestContext) {
        spyOn(ControlClassService.prototype, 'initControlClass').and.callThrough();
        setupTest(this, WithControl, TestControl3);
        expect(ControlClassService.prototype.initControlClass).toHaveBeenCalled();
      });

      it('subscribes to requests to mark as touched', function (this: TestContext) {
        setupTest(this, WithControl, TestControl3);
        expect(this.input.className).not.toContain('ng-touched');
        this.markControlService.markAsTouched();
        this.fixture.detectChanges();
        expect(this.input.className).toContain('ng-touched');
      });

      it('sets the control on ngControlService', function (this: TestContext) {
        spyOn(NgControlService.prototype, 'setControl').and.callThrough();
        setupTest(this, WithControl, TestControl3);
        expect(NgControlService.prototype.setControl).toHaveBeenCalled();
      });

      it('triggers status changes on blur', function (this: TestContext) {
        spyOn(IfControlStateService.prototype, 'triggerStatusChange').and.callThrough();
        setupTest(this, WithControl, TestControl3);
        this.input.focus();
        this.input.blur();
        this.fixture.detectChanges();
        expect(IfControlStateService.prototype.triggerStatusChange).toHaveBeenCalled();
      });

      it('implements ngOnDestroy', function (this: TestContext) {
        setupTest(this, WithControl, TestControl3);
        expect(this.control.ngOnDestroy).toBeDefined();
      });
    });

    describe('aria roles', function () {
      it('adds the aria-describedby for helper', function () {
        setupTest(this, WithControl, TestControl3);
        expect(this.input.getAttribute('aria-describedby')).toContain('-helper');
      });

      it('adds the aria-describedby for error messages', fakeAsync(function (this: TestContext) {
        setupTest(this, WithControl, TestControl3);
        this.input.focus();
        this.input.blur();
        this.fixture.detectChanges();

        tick();
        expect(this.input.getAttribute('aria-describedby')).toContain('-error');
      }));
    });
  });
}
