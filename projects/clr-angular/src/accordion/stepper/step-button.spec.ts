/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild, Injectable } from '@angular/core';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

import { ClrStepperModule } from './stepper.module';
import { ClrStepButton, ClrStepButtonType } from './step-button';
import { StepperService } from './providers/stepper.service';

@Component({
  template: `
    <form clrStepper [formGroup]="form">
      <clr-stepper-panel formGroupName="group">
        <button [clrStepButton]="buttonType">Next</button>
      </clr-stepper-panel>
    </form>
  `,
})
class TestComponent {
  @ViewChild(ClrStepButton) button: ClrStepButton;
  buttonType = ClrStepButtonType.Next;
  form = new FormGroup({ group: new FormGroup({}) });
}

@Injectable()
class MockStepperService extends StepperService {
  navigateToNextPanel() {
    // Do nothing.
  }
}

describe('ClrStepButton', () => {
  let fixture: ComponentFixture<any>;
  let testComponent: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      providers: [StepperService, { provide: StepperService, useClass: MockStepperService }],
      imports: [ReactiveFormsModule, NoopAnimationsModule, ClrStepperModule],
    });

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    testComponent = fixture.componentInstance;
  });

  it('should update ClrStepButton type', () => {
    expect(testComponent.button.type).toBe(ClrStepButtonType.Next);
    testComponent.buttonType = ClrStepButtonType.Submit;
    fixture.detectChanges();
    expect(testComponent.button.type).toBe(ClrStepButtonType.Submit);
  });

  it('should trigger click that sets the next step', () => {
    const stepperService = fixture.debugElement.query(By.directive(ClrStepButton)).injector.get(StepperService);
    spyOn(stepperService, 'navigateToNextPanel');

    fixture.nativeElement.querySelector('.clr-step-button').click();
    fixture.detectChanges();
    expect(stepperService.navigateToNextPanel).toHaveBeenCalled();
  });
});
