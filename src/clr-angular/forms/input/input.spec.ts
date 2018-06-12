/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { ClrIconModule } from '../../icon/icon.module';
import { IfErrorService } from '../common/if-error/if-error.service';
import { NgControlService } from '../common/providers/ng-control.service';

import { ClrInput } from './input';
import { ClrInputContainer } from './input-container';
import { ClrCommonFormsModule } from '../common/common.module';
import { WrappedFormControl } from '../common/wrapped-control';
import { ControlIdService } from '../common/providers/control-id.service';

@Component({
  template: `
       <input type="text" clrInput />
    `,
})
class InvalidUseTest {}

@Component({
  template: `
       <input type="text" clrInput name="model" [(ngModel)]="model" />
    `,
})
class SimpleTest {}

export default function(): void {
  describe('Input directive', () => {
    let input, fixture, ifErrorService, ngControlService;

    describe('invalid use', () => {
      it('throws error when used without a form control', () => {
        TestBed.configureTestingModule({ declarations: [ClrInput, InvalidUseTest] });
        expect(() => {
          fixture = TestBed.createComponent(InvalidUseTest);
          fixture.detectChanges();
        }).toThrow();
      });
    });

    describe('basic use', () => {
      beforeEach(() => {
        spyOn(WrappedFormControl.prototype, 'ngOnInit');
        TestBed.configureTestingModule({
          imports: [FormsModule, ClrIconModule, ClrCommonFormsModule],
          declarations: [ClrInput, ClrInputContainer, SimpleTest],
          providers: [IfErrorService, NgControlService, ControlIdService],
        });
        fixture = TestBed.createComponent(SimpleTest);
        input = fixture.debugElement.query(By.directive(ClrInput));
        ifErrorService = input.injector.get(IfErrorService, null);
        ngControlService = input.injector.get(NgControlService, null);
        spyOn(ifErrorService, 'triggerStatusChange');
        spyOn(ngControlService, 'setControl');
        fixture.detectChanges();
      });

      it('should apply the clr-input class', () => {
        expect(input.nativeElement.classList.contains('clr-input'));
      });

      it('should have the IfErrorService', () => {
        expect(ifErrorService).toBeTruthy();
      });

      it('should have the NgControlService and set the control', () => {
        expect(ngControlService).toBeTruthy();
        expect(ngControlService.setControl).toHaveBeenCalled();
      });

      it('correctly extends WrappedFormControl with ClrInputContainer', () => {
        expect(input.injector.get(ClrInput).wrapperType).toBe(ClrInputContainer);
        expect(WrappedFormControl.prototype.ngOnInit).toHaveBeenCalled();
      });

      it('should handle blur events', () => {
        // inputs must be both invalid and blurred to register the validity
        input.nativeElement.value = 'abc';
        input.nativeElement.dispatchEvent(new Event('input'));
        input.nativeElement.dispatchEvent(new Event('blur'));
        fixture.detectChanges();
        expect(ifErrorService.triggerStatusChange).toHaveBeenCalled();
      });
    });
  });
}
