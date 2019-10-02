/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, Input } from '@angular/core';

import { ClrTimelineStepState } from './timeline-step-state.enum';

interface IconAttribute {
  iconShape: string | undefined;
  ariaLabel: string;
}

const ICON_ATTR_MAP: Record<ClrTimelineStepState, IconAttribute> = {
  [ClrTimelineStepState.NOT_STARTED]: { iconShape: 'circle', ariaLabel: 'Not started' },
  [ClrTimelineStepState.CURRENT]: { iconShape: 'dot-circle', ariaLabel: 'Current' },
  [ClrTimelineStepState.SUCCESS]: { iconShape: 'success-standard', ariaLabel: 'Completed' },
  [ClrTimelineStepState.ERROR]: { iconShape: 'error-standard', ariaLabel: 'Error' },
  [ClrTimelineStepState.PROCESSING]: { iconShape: undefined, ariaLabel: 'In progress' },
};

@Component({
  selector: 'clr-timeline-step',
  template: `
    <ng-content select="clr-timeline-step-header"></ng-content>
    <ng-container *ngIf="!isProcessing; else processing">
      <clr-icon
        [attr.shape]="iconShape"
        [attr.aria-label]="iconAriaLabel"
        [attr.aria-current]="iconAriaCurrent">
      </clr-icon>
    </ng-container>
    <div class="clr-timeline-step-body">
      <ng-content select="clr-timeline-step-title"></ng-content>
      <ng-content select="clr-timeline-step-description"></ng-content>
    </div>

    <ng-template #processing>
      <clr-spinner clrMedium [attr.aria-label]="iconAriaLabel">Fetching data</clr-spinner>
    </ng-template>
  `,
  host: { '[class.clr-timeline-step]': 'true' },
})
export class ClrTimelineStep {
  @Input('clrState') state: ClrTimelineStepState = ClrTimelineStepState.NOT_STARTED;

  get iconAriaCurrent(): boolean {
    return this.state === ClrTimelineStepState.CURRENT;
  }

  get iconAriaLabel(): string {
    return ICON_ATTR_MAP[this.state].ariaLabel;
  }

  get iconShape(): string {
    return ICON_ATTR_MAP[this.state].iconShape;
  }

  get isProcessing(): boolean {
    return this.state === ClrTimelineStepState.PROCESSING;
  }
}
