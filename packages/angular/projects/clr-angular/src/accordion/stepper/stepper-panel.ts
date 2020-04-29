/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  Component,
  ChangeDetectionStrategy,
  Optional,
  Inject,
  OnInit,
  ViewChild,
  ElementRef,
  PLATFORM_ID,
} from '@angular/core';
import { FormGroupName, NgModelGroup } from '@angular/forms';
import { tap, filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { UNIQUE_ID_PROVIDER, UNIQUE_ID } from '../../utils/id-generator/id-generator.service';
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';
import { StepperService } from './providers/stepper.service';
import { stepAnimation } from '../utils/animation';
import { triggerAllFormControlValidation } from '../../utils/forms/validation';
import { IfExpandService } from '../../utils/conditional/if-expanded.service';
import { AccordionPanelModel } from '../models/accordion.model';
import { AccordionStatus } from '../enums/accordion-status.enum';
import { ClrAccordionPanel } from '../accordion-panel';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'clr-stepper-panel',
  templateUrl: './../accordion-panel.html',
  host: { '[class.clr-accordion-panel]': 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: stepAnimation,
  providers: [IfExpandService, UNIQUE_ID_PROVIDER],
})
export class ClrStepperPanel extends ClrAccordionPanel implements OnInit {
  isAccordion = false;

  @ViewChild('headerButton') headerButton: ElementRef;
  private subscriptions: Subscription[] = [];

  get formGroup() {
    return this.formGroupName ? this.formGroupName.control : this.ngModelGroup.control;
  }

  get id(): string {
    return this.formGroupName ? this.formGroupName.name.toString() : this.ngModelGroup.name;
  }

  set id(_value: string) {
    // overriding parent id required empty setter
  }

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    public commonStrings: ClrCommonStringsService,
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
    this.listenToFocusChanges();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  private listenToFocusChanges() {
    this.subscriptions.push(
      this.stepperService.activeStep
        .pipe(filter(panelId => isPlatformBrowser(this.platformId) && panelId === this.id))
        .subscribe(() => this.headerButton.nativeElement.focus())
    );
  }

  private triggerAllFormControlValidationIfError(panel: AccordionPanelModel) {
    if (panel.status === AccordionStatus.Error) {
      triggerAllFormControlValidation(this.formGroup);
    }
  }
}
