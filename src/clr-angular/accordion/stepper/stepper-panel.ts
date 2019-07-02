/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ChangeDetectionStrategy, Optional, Inject, OnInit } from '@angular/core';
import { FormGroupName, NgModelGroup } from '@angular/forms';
import { tap } from 'rxjs/operators';

import { UNIQUE_ID_PROVIDER, UNIQUE_ID } from '../../utils/id-generator/id-generator.service';
import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';
import { StepperService } from './providers/stepper.service';
import { stepAnimation } from '../utils/animation';
import { triggerAllFormControlValidation } from '../../utils/forms/validation';
import { IfExpandService } from '../../utils/conditional/if-expanded.service';
import { AccordionPanelModel } from '../models/accordion.model';
import { AccordionStatus } from '../enums/accordion-status.enum';
import { ClrAccordionPanel } from '../accordion-panel';

@Component({
  selector: 'clr-stepper-panel',
  templateUrl: './../accordion-panel.html',
  host: { '[class.clr-accordion-panel]': 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: stepAnimation,
  providers: [IfExpandService, UNIQUE_ID_PROVIDER],
})
export class ClrStepperPanel extends ClrAccordionPanel implements OnInit {
  get formGroup() {
    return this.formGroupName ? this.formGroupName.control : this.ngModelGroup.control;
  }

  get id() {
    return this.formGroupName ? this.formGroupName.name : this.ngModelGroup.name;
  }

  set id(_value) {} // overriding parent id required empty setter

  constructor(
    public commonStrings: ClrCommonStrings,
    @Optional() private formGroupName: FormGroupName,
    @Optional() private ngModelGroup: NgModelGroup,
    private stepperService: StepperService,
    ifExpandService: IfExpandService,
    @Inject(UNIQUE_ID) id: string
  ) {
    super(commonStrings, stepperService, ifExpandService, id);
  }

  ngOnInit() {
    super.ngOnInit();
    this.panel = this.panel.pipe(tap(panel => this.triggerAllFormControlValidationIfError(panel)));
    this.stepperService.disablePanel(this.id, true);
  }

  private triggerAllFormControlValidationIfError(panel: AccordionPanelModel) {
    if (panel.status === AccordionStatus.Error) {
      triggerAllFormControlValidation(this.formGroup);
    }
  }
}
