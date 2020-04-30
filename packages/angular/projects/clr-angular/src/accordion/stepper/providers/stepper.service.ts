/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Injectable } from '@angular/core';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

import { AccordionService } from './../../providers/accordion.service';
import { StepperModel } from '../models/stepper.model';

@Injectable()
export class StepperService extends AccordionService {
  readonly panelsCompleted = this.getAllCompletedPanelChanges();
  protected accordion = new StepperModel();

  private _activeStepChanges = new Subject<string>();
  readonly activeStep = this._activeStepChanges.asObservable();

  resetPanels() {
    this.accordion.resetPanels();
    this.emitUpdatedPanels();
  }

  setPanelsWithErrors(ids: string[]) {
    this.accordion.setPanelsWithErrors(ids);
    this.emitUpdatedPanels();
  }

  navigateToNextPanel(currentPanelId: string, currentPanelValid = true) {
    this.accordion.navigateToNextPanel(currentPanelId, currentPanelValid);
    this.updateNextStep(currentPanelId, currentPanelValid);
    this.emitUpdatedPanels();
  }

  overrideInitialPanel(panelId: string) {
    this.accordion.overrideInitialPanel(panelId);
    this.emitUpdatedPanels();
  }

  private updateNextStep(currentPanelId: string, currentPanelValid: boolean) {
    const nextPanel = this.accordion.getNextPanel(currentPanelId);

    if (currentPanelValid && nextPanel) {
      this._activeStepChanges.next(nextPanel.id);
    } else if (currentPanelValid) {
      this._activeStepChanges.next(currentPanelId);
    }
  }

  private getAllCompletedPanelChanges(): Observable<boolean> {
    return this._panelsChanges.pipe(
      map(() => this.accordion.allPanelsCompleted),
      distinctUntilChanged()
    );
  }
}
