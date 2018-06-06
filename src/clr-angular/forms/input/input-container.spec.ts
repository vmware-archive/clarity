/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormsModule, NgControl } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { ClrIconModule } from '../../icon/icon.module';
import { ClrCommonFormsModule } from '../common/common.module';
import { IfErrorService } from '../common/if-error/if-error.service';

import { ClrInput } from './input';
import { ClrInputContainer } from './input-container';

@Component({
  template: `
    <clr-input-container>
        <input type="text" name="test" clrInput required [(ngModel)]="model" />
        <label>Hello World</label>
        <clr-control-helper>Helper text</clr-control-helper>
        <clr-control-error>Must be at least 5 characters</clr-control-error>
    </clr-input-container>
    `,
})
class SimpleTest {
  model = '';
}

export default function(): void {
  describe('ClrInputContainer component', () => {
    let fixture, inputContainerDE, inputContainer, inputContainerEl, ifErrorService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ClrIconModule, ClrCommonFormsModule, FormsModule],
        declarations: [ClrInputContainer, ClrInput, SimpleTest],
        providers: [NgControl],
      });
      fixture = TestBed.createComponent(SimpleTest);

      inputContainerDE = fixture.debugElement.query(By.directive(ClrInputContainer));
      inputContainer = inputContainerDE.componentInstance;
      inputContainerEl = inputContainerDE.nativeElement;
      ifErrorService = inputContainerDE.injector.get(IfErrorService);
      fixture.detectChanges();
    });

    it('injects the NgControlService and subscribes in AfterContentInit', () => {
      expect(ifErrorService).toBeTruthy();
      expect(inputContainer.subscription).toBeTruthy();
    });

    it('projects the label as first child', () => {
      const label = inputContainerEl.querySelector('label');
      expect(label).toBeTruthy();
      expect(label.previousElementSibling).toBeFalsy();
    });

    it('projects the input', () => {
      expect(inputContainerEl.querySelector('[clrInput]')).toBeTruthy();
    });

    it('projects the helper text when the input is valid', () => {
      expect(inputContainerEl.querySelector('clr-control-helper')).toBeTruthy();
    });

    it("doesn't display the helper text when invalid", () => {
      expect(inputContainerEl.querySelector('clr-control-helper')).toBeTruthy();
      inputContainer.invalid = true;
      fixture.detectChanges();
      expect(inputContainerEl.querySelector('clr-control-helper')).toBeFalsy();
    });

    it('sets error classes and displays the icon when invalid', () => {
      expect(inputContainerEl.querySelector('.clr-control-container').classList.contains('clr-error')).toBeFalse();
      expect(inputContainerEl.querySelector('.clr-validate-icon')).toBeFalsy();
      inputContainer.invalid = true;
      fixture.detectChanges();
      expect(inputContainerEl.querySelector('.clr-control-container').classList.contains('clr-error')).toBeTrue();
      expect(inputContainerEl.querySelector('.clr-validate-icon')).toBeTruthy();
    });

    it('projects the error helper when invalid', () => {
      expect(inputContainerEl.querySelector('clr-control-error')).toBeFalsy();
      inputContainer.invalid = true;
      fixture.detectChanges();
      expect(inputContainerEl.querySelector('clr-control-error')).toBeTruthy();
    });

    it('adds the .clr-form-control class to the host', () => {
      expect(inputContainerEl.classList).toContain('clr-form-control');
    });

    it('tracks the validity of the form control', () => {
      let control;
      const sub = ifErrorService.statusChanges.subscribe(ctrl => (control = ctrl));
      expect(inputContainer.invalid).toBeFalse();
      ifErrorService.triggerStatusChange();
      fixture.detectChanges();
      expect(inputContainer.invalid).toBeTrue();
      sub.unsubscribe();
    });

    it('cleans up on destroy', () => {
      expect(inputContainer.subscription).toBeDefined();
      spyOn(inputContainer.subscription, 'unsubscribe');
      inputContainer.ngOnDestroy();
      expect(inputContainer.subscription.unsubscribe).toHaveBeenCalled();
    });
  });
}
