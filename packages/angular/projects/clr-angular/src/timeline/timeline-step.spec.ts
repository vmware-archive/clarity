/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ClrTimelineStepState } from './enums/timeline-step-state.enum';
import { ClrTimelineModule } from './timeline.module';
import { ClrTimelineStep } from './timeline-step';

import { ClrIconModule } from '../icon/icon.module';
import { ClrSpinnerModule } from '../progress/spinner/spinner.module';
import { ClrCommonStringsService } from '../utils/i18n/common-strings.service';
import { TimelineIconAttributeService } from './providers/timeline-icon-attribute.service';
import { TimelineStepIdService } from './providers/timeline-step-id.service';

@Component({
  template: ` <clr-timeline-step [clrState]="state"><clr-timeline-step> </clr-timeline-step></clr-timeline-step> `,
})
class TestTimelineStep {
  state: ClrTimelineStepState = ClrTimelineStepState.NOT_STARTED;

  @ViewChild(ClrTimelineStep) step: ClrTimelineStep;
}

@Component({
  template: `
    <clr-timeline-step>
      <clr-timeline-step-header>Header Content</clr-timeline-step-header>
      <clr-timeline-step-title>Title Content</clr-timeline-step-title>
      <clr-timeline-step-description>Description Content</clr-timeline-step-description>
    </clr-timeline-step>
  `,
})
class TestTimelineStepContent {}

export default function (): void {
  describe('ClrTimelineStep component', () => {
    describe('Typescript API', () => {
      let step: ClrTimelineStep;

      beforeEach(() => {
        step = new ClrTimelineStep(
          new TimelineIconAttributeService(new ClrCommonStringsService()),
          new TimelineStepIdService()
        );
      });

      it('has by default NOT_STARTED state', () => {
        expect(step.state).toBe(ClrTimelineStepState.NOT_STARTED);
      });

      it('knows if is processing', () => {
        step.state = ClrTimelineStepState.NOT_STARTED;
        expect(step.isProcessing).toBe(false);

        step.state = ClrTimelineStepState.CURRENT;
        expect(step.isProcessing).toBe(false);

        step.state = ClrTimelineStepState.PROCESSING;
        expect(step.isProcessing).toBe(true);

        step.state = ClrTimelineStepState.SUCCESS;
        expect(step.isProcessing).toBe(false);

        step.state = ClrTimelineStepState.ERROR;
        expect(step.isProcessing).toBe(false);
      });

      it('knows the right icon', () => {
        step.state = ClrTimelineStepState.NOT_STARTED;
        expect(step.iconShape).toBe('circle');

        step.state = ClrTimelineStepState.CURRENT;
        expect(step.iconShape).toBe('dot-circle');

        step.state = ClrTimelineStepState.PROCESSING;
        expect(step.iconShape).toBeUndefined();

        step.state = ClrTimelineStepState.SUCCESS;
        expect(step.iconShape).toBe('success-standard');

        step.state = ClrTimelineStepState.ERROR;
        expect(step.iconShape).toBe('error-standard');
      });

      it('knows the right aria-label', () => {
        step.state = ClrTimelineStepState.NOT_STARTED;
        expect(step.iconAriaLabel).toBe('Not started');

        step.state = ClrTimelineStepState.CURRENT;
        expect(step.iconAriaLabel).toBe('Current');

        step.state = ClrTimelineStepState.PROCESSING;
        expect(step.iconAriaLabel).toBe('In progress');

        step.state = ClrTimelineStepState.SUCCESS;
        expect(step.iconAriaLabel).toBe('Completed');

        step.state = ClrTimelineStepState.ERROR;
        expect(step.iconAriaLabel).toBe('Error');
      });

      it('set the aria-current', () => {
        step.state = ClrTimelineStepState.NOT_STARTED;
        expect(step.iconAriaCurrent).toBe(false);

        step.state = ClrTimelineStepState.CURRENT;
        expect(step.iconAriaCurrent).toBe(true);

        step.state = ClrTimelineStepState.PROCESSING;
        expect(step.iconAriaCurrent).toBe(false);

        step.state = ClrTimelineStepState.SUCCESS;
        expect(step.iconAriaCurrent).toBe(false);

        step.state = ClrTimelineStepState.ERROR;
        expect(step.iconAriaCurrent).toBe(false);
      });
    });

    describe('Template API', () => {
      let fixture: ComponentFixture<TestTimelineStep>;
      let hostComponent: TestTimelineStep;
      let debugElement: DebugElement;
      let nativeComponent: ClrTimelineStep;
      let nativeElement: HTMLElement;

      beforeEach(() => {
        TestBed.configureTestingModule({
          declarations: [ClrTimelineStep, TestTimelineStep],
          providers: [TimelineIconAttributeService, ClrCommonStringsService],
          imports: [ClrIconModule, ClrSpinnerModule],
        });

        fixture = TestBed.createComponent(TestTimelineStep);
        fixture.detectChanges();
        nativeElement = fixture.nativeElement.querySelector('clr-timeline-step');

        hostComponent = fixture.componentInstance;
        debugElement = fixture.debugElement;
        nativeComponent = hostComponent.step;
      });

      it('should add host classes', () => {
        expect(nativeElement.className).toContain('clr-timeline-step');
      });

      it('accepts a [clrState] input', () => {
        hostComponent.state = ClrTimelineStepState.NOT_STARTED;
        fixture.detectChanges();
        expect(nativeComponent.state).toBe(hostComponent.state);

        hostComponent.state = ClrTimelineStepState.CURRENT;
        fixture.detectChanges();
        expect(nativeComponent.state).toBe(hostComponent.state);

        hostComponent.state = ClrTimelineStepState.SUCCESS;
        fixture.detectChanges();
        expect(nativeComponent.state).toBe(hostComponent.state);

        hostComponent.state = ClrTimelineStepState.ERROR;
        fixture.detectChanges();
        expect(nativeComponent.state).toBe(hostComponent.state);

        hostComponent.state = ClrTimelineStepState.PROCESSING;
        fixture.detectChanges();
        expect(nativeComponent.state).toBe(hostComponent.state);
      });

      [
        ClrTimelineStepState.NOT_STARTED,
        ClrTimelineStepState.CURRENT,
        ClrTimelineStepState.SUCCESS,
        ClrTimelineStepState.ERROR,
      ].forEach(stepState => {
        it(`renders icon when the state is "${stepState}"`, () => {
          hostComponent.state = stepState;
          fixture.detectChanges();

          const icon = debugElement.query(By.css('clr-icon'));
          const spinner = debugElement.query(By.css('clr-spinner'));

          expect(icon).not.toBeNull();
          expect(spinner).toBeNull();
        });
      });

      it('renders spinner when the state is "processing"', () => {
        hostComponent.state = ClrTimelineStepState.PROCESSING;
        fixture.detectChanges();

        const icon = debugElement.query(By.css('clr-icon'));
        const spinner = debugElement.query(By.css('clr-spinner'));

        expect(icon).toBeNull();
        expect(spinner).not.toBeNull();
      });
    });

    describe('View', () => {
      let fixture: ComponentFixture<TestTimelineStepContent>;
      let nativeElement: HTMLElement;

      beforeEach(() => {
        TestBed.configureTestingModule({
          declarations: [TestTimelineStepContent],
          imports: [ClrTimelineModule],
          providers: [TimelineIconAttributeService, ClrCommonStringsService],
        });

        fixture = TestBed.createComponent(TestTimelineStepContent);
        fixture.detectChanges();

        nativeElement = fixture.nativeElement;
      });

      it('should project header', () => {
        const headerElement: HTMLElement = nativeElement.querySelector('clr-timeline-step-header');
        expect(headerElement.innerText).toBe('Header Content');
      });

      it('should project title and description inside body', () => {
        const bodyElement: HTMLElement = nativeElement.querySelector('.clr-timeline-step-body');
        expect(bodyElement).toBeDefined();

        const titleElement: HTMLElement = bodyElement.querySelector('clr-timeline-step-title');
        expect(titleElement.innerText).toBe('Title Content');

        const descriptionElement: HTMLElement = bodyElement.querySelector('clr-timeline-step-description');
        expect(descriptionElement.innerText).toBe('Description Content');
      });

      it('sets the title to clr-sr-only element before icon for screen readers', () => {
        // expect screen reader content to be Title Content
        const title = nativeElement.querySelector('.clr-timeline-step-title');
        const srOnlyElement = nativeElement.querySelector('.clr-sr-only');
        expect(title.textContent).toEqual(srOnlyElement.textContent);
      });
    });
  });
}
