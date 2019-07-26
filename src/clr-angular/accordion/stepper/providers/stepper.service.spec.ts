/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { take } from 'rxjs/operators';

import { AccordionStatus } from '../../enums/accordion-status.enum';
import { StepperService } from './stepper.service';

describe('StepperService', () => {
  let stepperService: StepperService;
  const panel1Id = '0';
  const panel2Id = '1';

  beforeEach(() => {
    stepperService = new StepperService();
    stepperService.addPanel(panel1Id);
    stepperService.addPanel(panel2Id);
    stepperService.updatePanelOrder([panel1Id, panel2Id]);
  });

  it('should update of step changes when steps are reset', () => {
    stepperService.navigateToNextPanel(panel1Id);
    stepperService.resetPanels();

    stepperService
      .getPanelChanges(panel1Id)
      .pipe(take(1))
      .subscribe(step => expect(step.open).toBe(true));
  });

  it('should notify of step changes when navigating to next step', () => {
    stepperService.addPanel(panel1Id);
    stepperService.navigateToNextPanel(panel1Id, true);
    stepperService
      .getPanelChanges(panel2Id)
      .pipe(take(1))
      .subscribe(step => expect(step.open).toBe(true));
  });

  it('should notify when all steps have completed', () => {
    stepperService.navigateToNextPanel(panel1Id, true);
    stepperService.navigateToNextPanel(panel2Id, true);
    stepperService.panelsCompleted.pipe(take(1)).subscribe(completed => expect(completed).toBe(true));
  });

  it('should notify of errors', () => {
    stepperService.setPanelsWithErrors([panel1Id]);
    stepperService
      .getPanelChanges(panel1Id)
      .pipe(take(1))
      .subscribe(step => expect(step.status).toBe(AccordionStatus.Error));
  });

  it('should allow the default panel to be overridden', () => {
    stepperService.overrideInitialPanel(panel2Id);
    stepperService
      .getPanelChanges(panel2Id)
      .pipe(take(1))
      .subscribe(step => expect(step.open).toBe(true));
  });

  it('should notify when the next panel has opened', () => {
    let activeStepId = null;
    stepperService.activeStep.subscribe(id => (activeStepId = id));

    stepperService.navigateToNextPanel('1', true);
    expect(activeStepId).toBe('1');
  });
});
