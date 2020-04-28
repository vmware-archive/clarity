/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ClrTimelineStepState } from '../enums/timeline-step-state.enum';
import { IconAttributes } from '../interface/icon-attribute.iterface';
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';
import { Injectable } from '@angular/core';

@Injectable()
export class TimelineIconAttributeService {
  private attributeMap: Map<ClrTimelineStepState, IconAttributes> = new Map<ClrTimelineStepState, IconAttributes>();

  constructor(commonStrings: ClrCommonStringsService) {
    this.attributeMap.set(ClrTimelineStepState.NOT_STARTED, {
      iconShape: 'circle',
      ariaLabel: commonStrings.keys.timelineStepNotStarted,
    });
    this.attributeMap.set(ClrTimelineStepState.CURRENT, {
      iconShape: 'dot-circle',
      ariaLabel: commonStrings.keys.timelineStepCurrent,
    });
    this.attributeMap.set(ClrTimelineStepState.PROCESSING, {
      iconShape: undefined,
      ariaLabel: commonStrings.keys.timelineStepProcessing,
    });
    this.attributeMap.set(ClrTimelineStepState.SUCCESS, {
      iconShape: 'success-standard',
      ariaLabel: commonStrings.keys.timelineStepSuccess,
    });
    this.attributeMap.set(ClrTimelineStepState.ERROR, {
      iconShape: 'error-standard',
      ariaLabel: commonStrings.keys.timelineStepError,
    });
  }

  public getAriaLabel(step: ClrTimelineStepState): string {
    return this.attributeMap.get(step).ariaLabel;
  }

  public getIconShape(step: ClrTimelineStepState): string {
    return this.attributeMap.get(step).iconShape;
  }
}
