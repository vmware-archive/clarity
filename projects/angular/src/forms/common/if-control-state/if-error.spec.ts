/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormControl, FormsModule, Validators } from '@angular/forms';

import { ClrIconModule } from '../../../icon/icon.module';
import { ClrInput } from '../../input/input';
import { ClrInputContainer } from '../../input/input-container';
import { ClrControlError } from '../error';
import { NgControlService } from '../providers/ng-control.service';

import { ClrIfError } from './if-error';
import { IfControlStateService } from './if-control-state.service';

const errorMessage = 'ERROR_MESSAGE';
const minLengthMessage = 'MIN_LENGTH_MESSAGE';
const maxLengthMessage = 'MAX_LENGTH_MESSAGE';

@Component({ template: `<div *clrIfError></div>` })
class InvalidUseTest {}

@Component({
  template: ` <clr-control-error *clrIfError>${errorMessage}</clr-control-error> `,
  providers: [IfControlStateService, NgControlService],
})
class GeneralErrorTest {}

@Component({
  template: `
    <clr-control-error *clrIfError="'required'">${errorMessage}</clr-control-error>
    <clr-control-error *clrIfError="'minlength'">${minLengthMessage}</clr-control-error>
    <clr-control-error *clrIfError="'maxlength'; error as err">
      ${maxLengthMessage}-{{ err.requiredLength }}-{{ err.actualLength }}
    </clr-control-error>
  `,
  providers: [IfControlStateService, NgControlService],
})
class SpecificErrorTest {}

export default function (): void {
  describe('ClrIfError', () => {
    describe('invalid use', () => {
      it('throws error when used outside of a control container', () => {
        TestBed.configureTestingModule({ declarations: [ClrIfError, InvalidUseTest] });
        expect(() => {
          const fixture = TestBed.createComponent(InvalidUseTest);
          fixture.detectChanges();
        }).toThrow();
      });
    });

    describe('general error', () => {
      let fixture, ifControlStateService, ngControlService;

      beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [ClrIconModule, FormsModule],
          declarations: [ClrInput, ClrControlError, ClrInputContainer, ClrIfError, GeneralErrorTest],
        });
        fixture = TestBed.createComponent(GeneralErrorTest);
        fixture.detectChanges();
        ngControlService = fixture.debugElement.injector.get(NgControlService);
        ifControlStateService = fixture.debugElement.injector.get(IfControlStateService);
      });

      it('hides the error initially', () => {
        expect(fixture.nativeElement.innerHTML).not.toContain(errorMessage);
      });

      it('displays the error message after touched on general errors', () => {
        expect(fixture.nativeElement.innerHTML).not.toContain(errorMessage);
        const control = new FormControl('', Validators.required);
        control.markAsTouched();
        ngControlService.setControl(control);
        ifControlStateService.triggerStatusChange();
        fixture.detectChanges();
        expect(fixture.nativeElement.innerHTML).toContain(errorMessage);
      });
    });

    describe('specific error', () => {
      let fixture, ifControlStateService, ngControlService;

      beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [ClrIconModule, FormsModule],
          declarations: [ClrInput, ClrControlError, ClrInputContainer, ClrIfError, SpecificErrorTest],
        });
        fixture = TestBed.createComponent(SpecificErrorTest);
        fixture.detectChanges();
        ngControlService = fixture.debugElement.injector.get(NgControlService);
        ifControlStateService = fixture.debugElement.injector.get(IfControlStateService);
      });

      it('hides the error initially', () => {
        expect(fixture.nativeElement.innerHTML).not.toContain(errorMessage);
      });

      it('displays the error when the specific error is defined', () => {
        expect(fixture.nativeElement.innerHTML).not.toContain(errorMessage);
        const control = new FormControl('', [Validators.required, Validators.minLength(5)]);
        control.markAsTouched();
        ngControlService.setControl(control);
        ifControlStateService.triggerStatusChange();
        fixture.detectChanges();
        expect(fixture.nativeElement.innerHTML).toContain(errorMessage);
      });

      it('hides the message even when it is invalid due to a different validation error', () => {
        expect(fixture.nativeElement.innerHTML).not.toContain(errorMessage);
        const control = new FormControl('abc', [Validators.required, Validators.minLength(5)]);
        ngControlService.setControl(control);
        ifControlStateService.triggerStatusChange();
        fixture.detectChanges();
        expect(fixture.nativeElement.innerHTML).not.toContain(errorMessage);
        expect(fixture.nativeElement.innerHTML).toContain(minLengthMessage);
      });

      it('displays the error message with values from error object in context', () => {
        const control = new FormControl('abcdef', [Validators.maxLength(5)]);
        ngControlService.setControl(control);
        ifControlStateService.triggerStatusChange();
        fixture.detectChanges();
        expect(fixture.nativeElement.innerHTML).toContain(`${maxLengthMessage}-5-6`);
      });

      it('updates the error message with values from error object in context', () => {
        const control = new FormControl('abcdef', [Validators.maxLength(5)]);
        ngControlService.setControl(control);
        ifControlStateService.triggerStatusChange();
        fixture.detectChanges();
        expect(fixture.nativeElement.innerHTML).toContain(`${maxLengthMessage}-5-6`);

        control.setValue('abcdefg');
        fixture.detectChanges();
        expect(fixture.nativeElement.innerHTML).toContain(`${maxLengthMessage}-5-7`);
      });

      it('should show error only when they are required', () => {
        const control = new FormControl(undefined, [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(5),
        ]);
        control.markAsTouched();
        ngControlService.setControl(control);
        ifControlStateService.triggerStatusChange();
        fixture.detectChanges();

        // Required message
        expect(fixture.nativeElement.innerHTML).toContain(errorMessage);
        expect(fixture.nativeElement.innerHTML).not.toContain(minLengthMessage);
        expect(fixture.nativeElement.innerHTML).not.toContain(maxLengthMessage);

        // MinLength message
        control.setValue('abc');
        fixture.detectChanges();
        expect(fixture.nativeElement.innerHTML).not.toContain(errorMessage);
        expect(fixture.nativeElement.innerHTML).toContain(minLengthMessage);
        expect(fixture.nativeElement.innerHTML).not.toContain(maxLengthMessage);

        // MaxLength message
        control.setValue('abcdef');
        fixture.detectChanges();
        expect(fixture.nativeElement.innerHTML).not.toContain(errorMessage);
        expect(fixture.nativeElement.innerHTML).not.toContain(minLengthMessage);
        expect(fixture.nativeElement.innerHTML).toContain(maxLengthMessage);

        // No errors
        control.setValue('abcde');
        fixture.detectChanges();
        expect(fixture.nativeElement.innerHTML).not.toContain(errorMessage);
        expect(fixture.nativeElement.innerHTML).not.toContain(minLengthMessage);
        expect(fixture.nativeElement.innerHTML).not.toContain(maxLengthMessage);
      });
    });
  });
}
