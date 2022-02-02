/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';
import { ClrForm } from './form';
import { LayoutService } from './providers/layout.service';
import { MarkControlService } from './providers/mark-control.service';
import { ReactiveFormsModule, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ClrInputModule } from '../input/input.module';

@Component({
  template: ` <form clrForm [formGroup]="model">
    <clr-input-container>
      <label #testLabel>Required</label>
      <input clrInput placeholder="Placeholder" name="testControl" formControlName="testControl" />
    </clr-input-container>
    <button class="btn btn-primary" #submitBtn type="submit">Submit</button>
  </form>`,
})
class SimpleTest {
  @ViewChild(ClrForm, { static: true })
  form: ClrForm;

  @ViewChild('submitBtn', { static: true })
  submitBtn;

  @ViewChild('testLabel', { static: true })
  testLabel;

  model = new FormGroup({
    testControl: new FormControl('', [Validators.required]),
  });
}

export default function (): void {
  describe('ClrForm', () => {
    let fixture, directive, layoutService;

    beforeEach(function () {
      TestBed.configureTestingModule({
        imports: [ClrInputModule, FormsModule, ReactiveFormsModule],
        declarations: [SimpleTest],
        providers: [LayoutService],
      });
      fixture = TestBed.createComponent(SimpleTest);
      directive = fixture.debugElement.query(By.directive(ClrForm));
      layoutService = directive.injector.get(LayoutService);
    });

    it('adds the .clr-form class to host', function () {
      fixture.detectChanges();
      expect(directive.nativeElement.className).toContain('clr-form');
    });

    it('adds the horizontal layout class to host', function () {
      fixture.detectChanges();
      expect(directive.nativeElement.className).toContain('clr-form-horizontal');
    });

    it('adds the vertical layout class to host', function () {
      layoutService.layout = 'vertical';
      fixture.detectChanges();
      // There is no need to put `clr-form-vertical` because its the default behavior in CSS
      expect(directive.nativeElement.className).toContain('clr-form');
    });

    it('adds the compact layout class to host', function () {
      layoutService.layout = 'compact';
      fixture.detectChanges();
      expect(directive.nativeElement.className).toContain('clr-form-compact');
    });

    it('provides the LayoutService', function () {
      fixture.detectChanges();
      expect(directive.injector.get(LayoutService)).toBeTruthy();
    });

    it('provides the MarkControlService', function () {
      expect(directive.injector.get(MarkControlService)).toBeTruthy();
    });

    it('calls markAsTouched', function () {
      const service = directive.injector.get(MarkControlService);
      spyOn(service, 'markAsTouched');
      directive.componentInstance.form.markAsTouched();
      expect(service.markAsTouched).toHaveBeenCalled();
    });

    it('provides the ClrCommonStringsService', function () {
      expect(directive.injector.get(ClrCommonStringsService)).toBeTruthy();
    });

    it('responds when the form is submitted', function () {
      fixture.detectChanges();
      spyOn(directive.componentInstance.form, 'onFormSubmit');
      fixture.componentInstance.submitBtn.nativeElement.click();
      fixture.detectChanges();
      expect(directive.componentInstance.form.onFormSubmit).toHaveBeenCalled();
    });
  });
}
