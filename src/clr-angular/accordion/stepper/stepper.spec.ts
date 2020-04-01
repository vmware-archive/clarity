/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormGroup, FormsModule, FormControl, Validators } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ClrStepperModule } from './stepper.module';
import { StepperService } from '././providers/stepper.service';
import { ClrStepper } from './stepper';

@Component({
  template: `
    <form clrStepper [formGroup]="form" (ngSubmit)="submit()" [clrInitialStep]="initialStep">
      <clr-stepper-panel formGroupName="group">
        <input formControlName="name" />
      </clr-stepper-panel>
      <clr-stepper-panel *ngIf="showSecondStep" formGroupName="group2"></clr-stepper-panel>
    </form>
  `,
})
class ReactiveFormsTestComponent {
  @ViewChild(ClrStepper) stepper: ClrStepper;
  showSecondStep = true;
  initialStep = '';
  form = new FormGroup({
    group: new FormGroup({
      name: new FormControl('', Validators.required),
    }),
    group2: new FormGroup({}),
  });

  submit() {
    // Do nothing
  }
}

@Component({
  template: `
    <form clrStepper #testForm="ngForm" (ngSubmit)="submit()">
      <clr-stepper-panel ngModelGroup="group"></clr-stepper-panel>
      <clr-stepper-panel *ngIf="showSecondStep" ngModelGroup="group2"></clr-stepper-panel>
    </form>
  `,
})
class TemplateFormsTestComponent {
  @ViewChild(ClrStepper) stepper: ClrStepper;
  @ViewChild('testForm') form: FormGroup;
  showSecondStep = true;
  submit() {
    // Do nothing
  }
}

describe('ClrStepper', () => {
  describe('Template API', () => {
    let fixture: ComponentFixture<any>;
    let testComponent: ReactiveFormsTestComponent;
    let stepperService: StepperService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [ReactiveFormsTestComponent],
        imports: [ReactiveFormsModule, NoopAnimationsModule, ClrStepperModule],
      });

      fixture = TestBed.createComponent(ReactiveFormsTestComponent);
      fixture.detectChanges();
      testComponent = fixture.componentInstance;
      stepperService = fixture.debugElement.query(By.directive(ClrStepper)).injector.get(StepperService);
    });

    it('should override the initial panel if developer overrides it via [clrInitialStep]', () => {
      spyOn(stepperService, 'overrideInitialPanel');
      fixture.detectChanges();
      expect(stepperService.overrideInitialPanel).not.toHaveBeenCalled();

      testComponent.initialStep = 'group';
      fixture.detectChanges();
      expect(stepperService.overrideInitialPanel).toHaveBeenCalled();

      testComponent.showSecondStep = false;
      fixture.detectChanges();
      expect(stepperService.overrideInitialPanel).toHaveBeenCalled();
    });
  });

  describe('View', () => {
    let fixture: ComponentFixture<any>;
    let testComponent: ReactiveFormsTestComponent;
    let stepperService: StepperService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [ReactiveFormsTestComponent],
        imports: [ReactiveFormsModule, NoopAnimationsModule, ClrStepperModule],
      });

      fixture = TestBed.createComponent(ReactiveFormsTestComponent);
      fixture.detectChanges();
      testComponent = fixture.componentInstance;
      stepperService = fixture.debugElement.query(By.directive(ClrStepper)).injector.get(StepperService);
    });

    it('adds a .clr-accordion and .clr-stepper-form class on the host element', () => {
      const stepperElement = fixture.debugElement.query(By.directive(ClrStepper)).nativeElement;
      expect(stepperElement.classList.contains('clr-accordion')).toBe(true);
      expect(stepperElement.classList.contains('clr-stepper-forms')).toBe(true);
    });

    it('should reset panels when form is reset', () => {
      spyOn(stepperService, 'resetPanels');
      testComponent.form.reset();
      fixture.detectChanges();
      expect(stepperService.resetPanels).toHaveBeenCalled();
    });

    it('should trigger ngSubmit event when all panels have completed', () => {
      spyOn(testComponent, 'submit');
      (testComponent.form.controls.group as FormGroup).controls.name.setValue('1');
      stepperService.navigateToNextPanel('group');
      stepperService.navigateToNextPanel('group2');
      expect(testComponent.submit).toHaveBeenCalled();
    });

    it('should update panels for form errors', () => {
      spyOn(stepperService, 'setPanelsWithErrors');

      (testComponent.form.controls.group as FormGroup).controls.name.markAsTouched();
      stepperService.navigateToNextPanel('group');
      fixture.detectChanges();
      stepperService.navigateToNextPanel('group2');

      expect(stepperService.setPanelsWithErrors).toHaveBeenCalled();
    });
  });
});

describe('ClrStepper Template Forms', () => {
  describe('View', () => {
    let fixture: ComponentFixture<any>;
    let testComponent: TemplateFormsTestComponent;
    let stepperService: StepperService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TemplateFormsTestComponent],
        imports: [FormsModule, NoopAnimationsModule, ClrStepperModule],
      });

      fixture = TestBed.createComponent(TemplateFormsTestComponent);
      fixture.detectChanges();
      testComponent = fixture.componentInstance;
      stepperService = fixture.debugElement.query(By.directive(ClrStepper)).injector.get(StepperService);
    });

    it('should reset steps when form is reset', () => {
      spyOn(stepperService, 'resetPanels');
      testComponent.form.reset();
      fixture.detectChanges();
      expect(stepperService.resetPanels).toHaveBeenCalled();
    });

    it('should trigger ngSubmit event when all steps have completed', () => {
      spyOn(testComponent, 'submit');
      stepperService.navigateToNextPanel('group');
      stepperService.navigateToNextPanel('group2');
      expect(testComponent.submit).toHaveBeenCalled();
    });
  });
});

describe('ClrStepper Error Handling', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [NoopAnimationsModule, ClrStepperModule],
    });
  });

  it('should throw an error if angular form is not detected', () => {
    const stepper = TestBed.createComponent(ClrStepper);
    expect(() => stepper.componentInstance.ngOnInit()).toThrowError(
      'To use stepper a Reactive or Template Form is required.'
    );
  });
});
