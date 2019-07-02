/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule, FormGroup, FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';

import { UNIQUE_ID_PROVIDER } from '../../utils/id-generator/id-generator.service';
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
  @ViewChild(ClrStepperPanel, { static: false })
  step: ClrStepperPanel;
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
  @ViewChild(ClrStepperPanel, { static: false })
  step: ClrStepperPanel;
}

class MockStepperService extends StepperService {
  step = new BehaviorSubject<AccordionPanelModel>(new AccordionPanelModel('groupName', 0));

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

      mockStep.status = AccordionStatus.Complete;
      (stepperService as MockStepperService).step.next(mockStep);
      fixture.detectChanges();
      expect(liveSection.innerText.trim()).toBe('Success');
    });

    it('should associate the header button to the step status message', () => {
      const mockStep = new AccordionPanelModel('groupName', 0);
      const stepperService = fixture.debugElement.query(By.directive(ClrStepperPanel)).injector.get(StepperService);
      mockStep.status = AccordionStatus.Error;
      (stepperService as MockStepperService).step.next(mockStep);
      fixture.detectChanges();

      const liveSectionId: string = fixture.nativeElement.querySelector('[aria-live="assertive"]').id;
      const headerButtonDescribeBy: string = fixture.nativeElement
        .querySelector('.clr-accordion-header-button')
        .getAttribute('aria-describedby');
      expect(liveSectionId).toBe(headerButtonDescribeBy);
    });

    it('should disable the header button based on the appropriate step state', () => {
      const mockStep = new AccordionPanelModel('groupName', 0);
      const stepperService = fixture.debugElement.query(By.directive(ClrStepperPanel)).injector.get(StepperService);

      mockStep.status = AccordionStatus.Error;
      mockStep.disabled = true;
      (stepperService as MockStepperService).step.next(mockStep);
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector('.clr-accordion-header-button').getAttribute('disabled')).toBe('');
    });
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
