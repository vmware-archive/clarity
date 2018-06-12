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
import { NgControlService } from '../common/providers/ng-control.service';
import { Layouts, LayoutService } from '../common/providers/layout.service';

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

@Component({
  template: `
  <clr-input-container>
    <input clrInput [(ngModel)]="model" />
  </clr-input-container>`,
})
class NoLabelTest {}

export default function(): void {
  describe('ClrInputContainer', () => {
    let fixture, inputContainerDE, inputContainer, inputContainerEl, ifErrorService, layoutService;

    describe('no label', () => {
      beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [ClrIconModule, ClrCommonFormsModule, FormsModule],
          declarations: [ClrInputContainer, ClrInput, NoLabelTest],
          providers: [NgControl, NgControlService, IfErrorService, LayoutService],
        });
        fixture = TestBed.createComponent(NoLabelTest);

        inputContainerDE = fixture.debugElement.query(By.directive(ClrInputContainer));
        inputContainerEl = inputContainerDE.nativeElement;
        layoutService = inputContainerDE.injector.get(LayoutService);
      });

      it('adds an empty label when instantiated without vertical layout', () => {
        layoutService.layout = Layouts.HORIZONTAL;
        fixture.detectChanges();
        const labels = inputContainerEl.querySelectorAll('label');
        expect(Array.prototype.filter.call(labels, label => label.textContent === '').length).toBe(1);
      });
    });

    describe('full example', () => {
      beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [ClrIconModule, ClrCommonFormsModule, FormsModule],
          declarations: [ClrInputContainer, ClrInput, SimpleTest],
          providers: [NgControl, NgControlService, IfErrorService, LayoutService],
        });
        fixture = TestBed.createComponent(SimpleTest);

        inputContainerDE = fixture.debugElement.query(By.directive(ClrInputContainer));
        inputContainer = inputContainerDE.componentInstance;
        inputContainerEl = inputContainerDE.nativeElement;
        ifErrorService = inputContainerDE.injector.get(IfErrorService);
        layoutService = inputContainerDE.injector.get(LayoutService);
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

      it('projects the input inside of the input-wrapper', () => {
        expect(inputContainerEl.querySelector('.clr-input-wrapper [clrInput]')).toBeTruthy();
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

      it('computes the error class for the control container', () => {
        expect(inputContainer.controlClass()).toEqual('');
        inputContainer.invalid = true;
        expect(inputContainer.controlClass()).toEqual('clr-error');
      });

      it('computes the grid class for the control container when not vertical', () => {
        expect(inputContainer.controlClass()).toEqual('');
        layoutService.layout = Layouts.HORIZONTAL;
        expect(inputContainer.controlClass()).toContain('clr-col-xs-12');
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
  });
}
