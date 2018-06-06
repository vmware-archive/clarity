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

@Component({
  template: `
       <input type="text" name="model" clrInput [(ngModel)]="model" />
    `,
  providers: [NgControlService, IfErrorService],
})
class ContainerizedTest {
  model = '';
}

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
        TestBed.configureTestingModule({
          imports: [FormsModule],
          declarations: [ClrInput, SimpleTest],
        });
        fixture = TestBed.createComponent(SimpleTest);
        input = fixture.debugElement;
        ifErrorService = input.injector.get(IfErrorService, null);
      });

      it('should apply the clr-input class', () => {
        expect(input.nativeElement.classList.contains('clr-input'));
      });

      it('should not have the ifError service', () => {
        expect(ifErrorService).toBeFalsy();
      });
    });

    describe('containerized', () => {
      beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [ClrIconModule, FormsModule],
          declarations: [ClrInput, ClrInputContainer, ContainerizedTest],
        });
        fixture = TestBed.createComponent(ContainerizedTest);
        input = fixture.debugElement.query(By.directive(ClrInput));
        ifErrorService = input.injector.get(IfErrorService, null);
        ngControlService = input.injector.get(NgControlService, null);
      });

      it('should set the control on create', () => {
        spyOn(ngControlService, 'setControl');
        fixture.detectChanges();
        expect(ngControlService.setControl).toHaveBeenCalled();
      });

      it('should handle blur events', () => {
        spyOn(ifErrorService, 'triggerStatusChange');
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
