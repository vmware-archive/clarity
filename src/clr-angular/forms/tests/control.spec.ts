/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { ClrIconModule } from '../../icon/icon.module';
import { IfErrorService } from '../common/if-error/if-error.service';
import { NgControlService } from '../common/providers/ng-control.service';

import { ClrCommonFormsModule } from '../common/common.module';
import { WrappedFormControl } from '../common/wrapped-control';
import { ControlIdService } from '../common/providers/control-id.service';
import { ControlClassService } from '../common/providers/control-class.service';
import { MarkControlService } from '../common/providers/mark-control.service';

export function ControlStandaloneSpec(testComponent): void {
  describe('standalone use', () => {
    it('should not throw an error when used without a form control', () => {
      TestBed.configureTestingModule({
        imports: [ClrIconModule, ClrCommonFormsModule],
        declarations: [testComponent],
      });
      expect(() => {
        const fixture = TestBed.createComponent(testComponent);
        fixture.detectChanges();
      }).not.toThrow();
    });
  });
}

export function TemplateDrivenSpec(testContainer, testControl, testComponent, controlClass): void {
  fullTest('template-driven', testContainer, testControl, testComponent, controlClass);
}

export function ReactiveSpec(testContainer, testControl, testComponent, controlClass): void {
  fullTest('reactive', testContainer, testControl, testComponent, controlClass);
}

function fullTest(description, testContainer, testControl, testComponent, controlClass) {
  describe(description, () => {
    let control, fixture, ifErrorService, controlClassService, markControlService;

    beforeEach(() => {
      spyOn(WrappedFormControl.prototype, 'ngOnInit');
      spyOn(ControlClassService.prototype, 'initControlClass').and.callThrough();
      TestBed.configureTestingModule({
        imports: [FormsModule, ClrIconModule, ClrCommonFormsModule, ReactiveFormsModule],
        declarations: [testContainer, testControl, testComponent],
        providers: [IfErrorService, NgControlService, ControlIdService, ControlClassService, MarkControlService],
      });
      fixture = TestBed.createComponent(testComponent);
      control = fixture.debugElement.query(By.directive(testControl));
      controlClassService = control.injector.get(ControlClassService);
      ifErrorService = control.injector.get(IfErrorService);
      markControlService = control.injector.get(MarkControlService);
      spyOn(ifErrorService, 'triggerStatusChange');
      fixture.detectChanges();
    });

    it('should apply the clr-textarea class', () => {
      expect(control.nativeElement.classList.contains(controlClass));
    });

    it('should have the IfErrorService', () => {
      expect(ifErrorService).toBeTruthy();
    });

    it('should have the MarkControlService', () => {
      expect(markControlService.markAsDirty).toBeTruthy();
    });

    it('correctly extends WrappedFormControl', () => {
      expect(control.injector.get(testControl).wrapperType).toBe(testContainer);
      expect(WrappedFormControl.prototype.ngOnInit).toHaveBeenCalled();
    });

    it('should set the class on the control with ControlClassService', () => {
      expect(controlClassService).toBeTruthy();
      expect(controlClassService.initControlClass).toHaveBeenCalled();
      expect(controlClassService.className).toEqual('test-class');
    });

    it('should handle blur events', () => {
      // control must be both invalid and blurred to register the validity
      control.nativeElement.value = 'abc';
      control.nativeElement.dispatchEvent(new Event('input'));
      control.nativeElement.dispatchEvent(new Event('blur'));
      fixture.detectChanges();
      expect(ifErrorService.triggerStatusChange).toHaveBeenCalled();
    });
  });
}
