/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, Injectable, ViewChild } from '@angular/core';
import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { ReactiveFormsModule, FormGroup, FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { BehaviorSubject, Subject } from 'rxjs';

import { UNIQUE_ID_PROVIDER } from '../../utils/id-generator/id-generator.service';
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';
import { ClrStepperModule } from './stepper.module';
import { AccordionStatus } from './../enums/accordion-status.enum';
import { AccordionPanelModel } from '../models/accordion.model';
import { StepperService } from './providers/stepper.service';
import { ClrStepperPanel } from './stepper-panel';
import { ClrStepper } from './stepper';

@Component({
  template: `
    <form clrStepper [formGroup]="form">
      <clr-stepper-panel formGroupName="groupName">test step</clr-stepper-panel>
    </form>
  `,
})
class ReactiveFormsTestComponent {
  @ViewChild(ClrStepperPanel) step: ClrStepperPanel;
  form = new FormGroup({ groupName: new FormGroup({}) });
}

@Component({
  template: `
    <form clrStepper #testForm="ngForm">
      <clr-stepper-panel ngModelGroup="groupName">test step</clr-stepper-panel>
    </form>
  `,
})
class TemplateFormsTestComponent {
  @ViewChild(ClrStepperPanel) step: ClrStepperPanel;
}

@Injectable()
class MockStepperService extends StepperService {
  step = new BehaviorSubject<AccordionPanelModel>(new AccordionPanelModel('groupName', 0));
  activeStep = new Subject<string>();

  getPanelChanges() {
    return this.step;
  }
}

describe('ClrStep Reactive Forms', () => {
  describe('View', () => {
    let fixture: ComponentFixture<ReactiveFormsTestComponent>;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [ReactiveFormsTestComponent],
        providers: [UNIQUE_ID_PROVIDER, { provide: StepperService, useClass: MockStepperService }],
        imports: [ReactiveFormsModule, NoopAnimationsModule, ClrStepperModule],
      });

      TestBed.overrideComponent(ClrStepper, {
        set: { providers: [{ provide: StepperService, useClass: MockStepperService }] },
      });

      fixture = TestBed.createComponent(ReactiveFormsTestComponent);
      fixture.detectChanges();
    });

    it('should use reactive forms to access form groups', () => {
      fixture.componentInstance.step.ngOnInit();
      expect(fixture.componentInstance.step.id).toBe('groupName');
    });

    it('adds a .clr-accordion-panel class on the host element', () => {
      const stepperPanelElement = fixture.debugElement.query(By.directive(ClrStepperPanel)).nativeElement;
      expect(stepperPanelElement.classList.contains('clr-accordion-panel')).toBe(true);
    });

    it('should show the appropriate aria-live message based on form state', () => {
      const mockStep = new AccordionPanelModel('groupName', 0);
      const stepperService = fixture.debugElement.query(By.directive(ClrStepperPanel)).injector.get(StepperService);
      let liveSection: HTMLElement = fixture.nativeElement.querySelector('[aria-live="assertive"]');
      expect(liveSection).toBe(null);

      mockStep.status = AccordionStatus.Error;
      (stepperService as MockStepperService).step.next(mockStep);
      fixture.detectChanges();
      liveSection = fixture.nativeElement.querySelector('[aria-live="assertive"]');
      expect(liveSection).toBeTruthy();
      expect(liveSection.innerText.trim()).toBe('Error');
    });

    it('should show appropriate screen reader only status in button based on form state', () => {
      const mockStep = new AccordionPanelModel('groupName', 0);
      const stepperService = fixture.debugElement.query(By.directive(ClrStepperPanel)).injector.get(StepperService);
      const commonStringsService = fixture.debugElement
        .query(By.directive(ClrStepper))
        .injector.get(ClrCommonStringsService);
      mockStep.status = AccordionStatus.Error;
      (stepperService as MockStepperService).step.next(mockStep);
      fixture.detectChanges();

      const statusMessage = fixture.nativeElement.querySelector('button .clr-sr-only');
      expect(statusMessage.innerText.trim()).toBe(commonStringsService.keys.danger);

      mockStep.status = AccordionStatus.Complete;
      (stepperService as MockStepperService).step.next(mockStep);
      fixture.detectChanges();

      expect(statusMessage.innerText.trim()).toBe(commonStringsService.keys.success);
    });

    it('should add aria-disabled attribute to the header button based on the appropriate step state', () => {
      const mockStep = new AccordionPanelModel('groupName', 0);
      const stepperService = fixture.debugElement.query(By.directive(ClrStepperPanel)).injector.get(StepperService);

      mockStep.status = AccordionStatus.Error;
      mockStep.disabled = true;
      (stepperService as MockStepperService).step.next(mockStep);
      fixture.detectChanges();
      // use 'aria-disabled' instead of 'disabled' so screen reader users can be auto focused to next step and have title be readable
      expect(fixture.nativeElement.querySelector('.clr-accordion-header-button').getAttribute('aria-disabled')).toBe(
        'true'
      );
      expect(fixture.nativeElement.querySelector('.clr-accordion-header-button').getAttribute('disabled')).toBe(null);
    });

    it('should auto focus the step heading button when previous step next button was clicked', fakeAsync(() => {
      const stepperService = fixture.debugElement.query(By.directive(ClrStepperPanel)).injector.get(StepperService);
      const input = fixture.nativeElement.querySelector('.clr-accordion-header-button');

      spyOn(input, 'focus');
      expect(input.focus).not.toHaveBeenCalled();

      (stepperService as MockStepperService).activeStep.next('groupName');
      tick();

      expect(input.focus).toHaveBeenCalled();
    }));
  });
});

describe('ClrStep Template Forms', () => {
  describe('View', () => {
    let fixture: ComponentFixture<TemplateFormsTestComponent>;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TemplateFormsTestComponent],
        providers: [UNIQUE_ID_PROVIDER],
        imports: [FormsModule, NoopAnimationsModule, ClrStepperModule],
      });

      fixture = TestBed.createComponent(TemplateFormsTestComponent);
      fixture.detectChanges();
    });

    it('should use template forms to access form groups', () => {
      expect(fixture.componentInstance.step.id).toBe('groupName');
    });
  });
});
