/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { AccordionStatus } from '../../enums/accordion-status.enum';
import { StepperModel } from './stepper.model';

describe('StepperModel', () => {
  let stepper: StepperModel;
  const step1Id = '0';
  const step2Id = '1';
  const step3Id = '2';

  beforeEach(() => {
    stepper = new StepperModel();
    stepper.addPanel(step1Id);
    stepper.addPanel(step2Id);
    stepper.addPanel(step3Id);
    stepper.updatePanelOrder([step1Id, step2Id, step3Id]);
  });

  it('should add a new Step model instances', () => {
    expect(stepper.panels.length).toBe(3);
  });

  it('should set the first step as the active step', () => {
    expect(stepper.panels[0].open).toBe(true);
    expect(stepper.panels[1].status).toBe(AccordionStatus.Inactive);
  });

  it('should disable the header buttons by default until a step is completed', () => {
    // default
    expect(stepper.panels[0].status).toBe(AccordionStatus.Inactive);
    expect(stepper.panels[0].disabled).toBe(true);
    expect(stepper.panels[1].disabled).toBe(true);
    expect(stepper.panels[2].disabled).toBe(true);

    // valid next step
    stepper.navigateToNextPanel(step1Id, true);
    expect(stepper.panels[0].status).toBe(AccordionStatus.Complete);
    expect(stepper.panels[0].disabled).toBe(false);
    expect(stepper.panels[1].disabled).toBe(true);
    expect(stepper.panels[2].disabled).toBe(true);

    // invalid next step
    stepper.navigateToNextPanel(step2Id, false);
    expect(stepper.panels[1].status).toBe(AccordionStatus.Error);
    expect(stepper.panels[0].disabled).toBe(false);
    expect(stepper.panels[1].disabled).toBe(true);
    expect(stepper.panels[2].disabled).toBe(true);
  });

  it('should navigate to next step if current step is valid and mark step complete', () => {
    stepper.navigateToNextPanel(step1Id);
    expect(stepper.panels[0].status).toBe(AccordionStatus.Complete);
    expect(stepper.panels[0].open).toBe(false);
    expect(stepper.panels[1].open).toBe(true);
  });

  it('should set the error state of a invalid form group and prevent next step navigation', () => {
    expect(stepper.panels[0].open).toBe(true);
    stepper.navigateToNextPanel(step1Id, false);
    expect(stepper.panels[0].status).toBe(AccordionStatus.Error);
    expect(stepper.panels[1].status).toBe(AccordionStatus.Inactive);
  });

  it('should remove steps from collection when re-synced with ContentChildren', () => {
    expect(stepper.panels.length).toBe(3);
    stepper.updatePanelOrder([step1Id, step3Id]);
    expect(stepper.panels.length).toBe(2);
  });

  it('should reset all steps when reset by form', () => {
    stepper.navigateToNextPanel(step1Id);
    expect(stepper.panels[0].status).toBe(AccordionStatus.Complete);
    expect(stepper.panels[1].open).toBe(true);

    stepper.resetPanels();
    expect(stepper.panels[0].open).toBe(true);
    expect(stepper.panels[1].status).toBe(AccordionStatus.Inactive);
  });

  it('should allow user to open and close a previously completed step', () => {
    stepper.navigateToNextPanel(step1Id);
    expect(stepper.panels[0].status).toBe(AccordionStatus.Complete);
    expect(stepper.panels[1].open).toBe(true);

    stepper.togglePanel(step1Id);
    expect(stepper.panels[0].open).toBe(true);
    expect(stepper.panels[1].open).toBe(true);

    stepper.togglePanel(step1Id);
    expect(stepper.panels[0].open).toBe(false);
    expect(stepper.panels[0].status).toBe(AccordionStatus.Complete);
    expect(stepper.panels[1].open).toBe(true);
  });

  it('should determine if all steps have been completed', () => {
    expect(stepper.allPanelsCompleted).toBe(false);
    stepper.navigateToNextPanel(step1Id);
    stepper.navigateToNextPanel(step2Id);
    stepper.navigateToNextPanel(step3Id);
    stepper.panels[2].open = false;
    expect(stepper.allPanelsCompleted).toBe(true);
  });

  it('should close all future steps if user proceeded to continue to next step from previously completed step to avoid a dependency issue', () => {
    stepper.navigateToNextPanel(step1Id);
    stepper.navigateToNextPanel(step2Id);

    expect(stepper.panels[0].status).toBe(AccordionStatus.Complete);
    expect(stepper.panels[1].status).toBe(AccordionStatus.Complete);
    expect(stepper.panels[2].open).toBe(true);

    stepper.navigateToNextPanel(step1Id);

    expect(stepper.panels[0].status).toBe(AccordionStatus.Complete);
    expect(stepper.panels[1].open).toBe(true);
    expect(stepper.panels[2].status).toBe(AccordionStatus.Inactive);
  });

  it('should allow programmer to override the initial active step', () => {
    stepper.overrideInitialPanel(step2Id);

    expect(stepper.panels[0].status).toBe(AccordionStatus.Complete);
    expect(stepper.panels[0].open).toBe(false);
    expect(stepper.panels[1].status).toBe(AccordionStatus.Inactive);
    expect(stepper.panels[1].open).toBe(true);
    expect(stepper.panels[2].status).toBe(AccordionStatus.Inactive);
    expect(stepper.panels[2].open).toBe(false);
  });

  it('should set the specified errors of a step', () => {
    stepper.setPanelsWithErrors([step1Id]);
    expect(stepper.panels[0].status).toBe(AccordionStatus.Error);
  });

  /**
   * This test is a bit long, but it's hard to test private property without
   * going over the flow of the public methods.
   *
   * The test must verify that stepperModelInitialize is set to true after the
   * first run of the main flow and false after reseting the pannels.
   */
  it('should prevent calling openFirstPanel multiple times', () => {
    stepper = new StepperModel();
    stepper.addPanel(step1Id);
    stepper.addPanel(step2Id);
    stepper.addPanel(step3Id);
    expect(stepper.panels[0].open).toBe(false);
    stepper.updatePanelOrder([step1Id, step2Id, step3Id]);
    expect(stepper.panels[0].open).toBe(true);

    // complite the first panel
    stepper.navigateToNextPanel(step1Id, true);
    expect(stepper.panels[0].open).toBe(false);

    // Update panels - we must not update the first panel here
    stepper.updatePanelOrder([step1Id, step2Id, step3Id]);
    expect(stepper.panels[0].open).toBe(false);

    // reseting the panels will let us go over the code again
    stepper.resetPanels();
    stepper.updatePanelOrder([step1Id, step2Id, step3Id]);
    expect(stepper.panels[0].open).toBe(true);
    stepper.navigateToNextPanel(step1Id, true);
    stepper.updatePanelOrder([step1Id, step2Id, step3Id]);
    expect(stepper.panels[0].open).toBe(false);
  });
});
