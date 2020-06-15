/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import { ClrIconModule } from '../../../icon/icon.module';
import { ClrInput } from '../../input/input';
import { ClrInputContainer } from '../../input/input-container';
import { NgControlService } from '../providers/ng-control.service';
import { ClrControlSuccess } from '../success';
import { ClrIfSuccess } from './if-success';
import { IfControlStateService } from './if-control-state.service';

const successMessage = 'SUCCESS_MESSAGE';
const minLengthMessage = 'MIN_LENGTH_MESSAGE';

@Component({ template: `<div *clrIfSuccess></div>` })
class InvalidUseTest {}

@Component({
  template: ` <clr-control-success *clrIfSuccess>${successMessage}</clr-control-success> `,
  providers: [IfControlStateService, NgControlService],
})
class GeneralSuccessTest {}

@Component({
  template: `
    <clr-control-success *clrIfSuccess="'required'">${successMessage}</clr-control-success>
    <clr-control-success *clrIfSuccess="'minlength'">${minLengthMessage}</clr-control-success>
  `,
  providers: [IfControlStateService, NgControlService],
})
class SpecificSuccessTest {}

export default function (): void {
  describe('ClrIfSuccess', () => {
    describe('invalid use', () => {
      it('throws error when used outside of a control container', () => {
        TestBed.configureTestingModule({ declarations: [ClrIfSuccess, InvalidUseTest] });
        expect(() => {
          const fixture = TestBed.createComponent(InvalidUseTest);
          fixture.detectChanges();
        }).toThrow();
      });
    });

    describe('general success', () => {
      let fixture, ifControlStateService, ngControlService;

      beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [ClrIconModule, FormsModule],
          declarations: [ClrInput, ClrControlSuccess, ClrInputContainer, ClrIfSuccess, GeneralSuccessTest],
        });
        fixture = TestBed.createComponent(GeneralSuccessTest);
        fixture.detectChanges();
        ngControlService = fixture.debugElement.injector.get(NgControlService);
        ifControlStateService = fixture.debugElement.injector.get(IfControlStateService);
      });

      it('hides the success initially', () => {
        expect(fixture.nativeElement.innerHTML).not.toContain(successMessage);
      });

      it('displays the success message after touched', () => {
        expect(fixture.nativeElement.innerHTML).not.toContain(successMessage);
        const control = new FormControl('abc', Validators.required);
        control.markAsTouched();
        ngControlService.setControl(control);
        ifControlStateService.triggerStatusChange();
        fixture.detectChanges();
        expect(fixture.nativeElement.innerHTML).toContain(successMessage);
      });
    });

    describe('specific success', () => {
      let fixture, ifControlStateService, ngControlService;

      beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [ClrIconModule, FormsModule],
          declarations: [ClrInput, ClrControlSuccess, ClrInputContainer, ClrIfSuccess, SpecificSuccessTest],
        });
        fixture = TestBed.createComponent(SpecificSuccessTest);
        fixture.detectChanges();
        ngControlService = fixture.debugElement.injector.get(NgControlService);
        ifControlStateService = fixture.debugElement.injector.get(IfControlStateService);
      });

      it('hides the success initially', () => {
        expect(fixture.nativeElement.innerHTML).not.toContain(successMessage);
      });

      it('displays the success when the specific success is defined', () => {
        expect(fixture.nativeElement.innerHTML).not.toContain(successMessage);
        const control = new FormControl('abcde', [Validators.required, Validators.minLength(5)]);
        control.markAsTouched();
        ngControlService.setControl(control);
        ifControlStateService.triggerStatusChange();
        fixture.detectChanges();
        expect(fixture.nativeElement.innerHTML).toContain(successMessage);
      });
    });
  });
}
