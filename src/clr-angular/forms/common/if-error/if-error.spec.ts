/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
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
import { IfErrorService } from './if-error.service';

const errorMessage = 'ERROR_MESSAGE';
const minLengthMessage = 'MIN_LENGTH_MESSAGE';

@Component({ template: `<div *clrIfError></div>` })
class InvalidUseTest {}

@Component({
  template: `
        <clr-control-error *clrIfError>${errorMessage}</clr-control-error>
    `,
  providers: [IfErrorService, NgControlService],
})
class GeneralErrorTest {}

@Component({
  template: `
        <clr-control-error *clrIfError="'required'">${errorMessage}</clr-control-error>
        <clr-control-error *clrIfError="'minlength'">${minLengthMessage}</clr-control-error>
    `,
  providers: [IfErrorService, NgControlService],
})
class SpecificErrorTest {}

export default function(): void {
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
      let fixture, ifErrorService, ngControlService;

      beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [ClrIconModule, FormsModule],
          declarations: [ClrInput, ClrControlError, ClrInputContainer, ClrIfError, GeneralErrorTest],
        });
        fixture = TestBed.createComponent(GeneralErrorTest);
        fixture.detectChanges();
        ngControlService = fixture.debugElement.injector.get(NgControlService);
        ifErrorService = fixture.debugElement.injector.get(IfErrorService);
      });

      it('hides the error initially', () => {
        expect(fixture.nativeElement.innerHTML).not.toContain(errorMessage);
      });

      it('displays the error message after touched on general errors', () => {
        expect(fixture.nativeElement.innerHTML).not.toContain(errorMessage);
        const control = new FormControl('', Validators.required);
        control.markAsTouched();
        ngControlService.setControl(control);
        ifErrorService.triggerStatusChange();
        fixture.detectChanges();
        expect(fixture.nativeElement.innerHTML).toContain(errorMessage);
      });
    });

    describe('specific error', () => {
      let fixture, ifErrorService, ngControlService;

      beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [ClrIconModule, FormsModule],
          declarations: [ClrInput, ClrControlError, ClrInputContainer, ClrIfError, SpecificErrorTest],
        });
        fixture = TestBed.createComponent(SpecificErrorTest);
        fixture.detectChanges();
        ngControlService = fixture.debugElement.injector.get(NgControlService);
        ifErrorService = fixture.debugElement.injector.get(IfErrorService);
      });

      it('hides the error initially', () => {
        expect(fixture.nativeElement.innerHTML).not.toContain(errorMessage);
      });

      it('displays the error when the specific error is defined', () => {
        expect(fixture.nativeElement.innerHTML).not.toContain(errorMessage);
        const control = new FormControl('', [Validators.required, Validators.minLength(5)]);
        control.markAsTouched();
        ngControlService.setControl(control);
        ifErrorService.triggerStatusChange();
        fixture.detectChanges();
        expect(fixture.nativeElement.innerHTML).toContain(errorMessage);
      });

      it('hides the message even when it is invalid due to a different validation error', () => {
        expect(fixture.nativeElement.innerHTML).not.toContain(errorMessage);
        const control = new FormControl('abc', [Validators.required, Validators.minLength(5)]);
        ngControlService.setControl(control);
        ifErrorService.triggerStatusChange();
        fixture.detectChanges();
        expect(fixture.nativeElement.innerHTML).not.toContain(errorMessage);
        expect(fixture.nativeElement.innerHTML).toContain(minLengthMessage);
      });
    });
  });
}
