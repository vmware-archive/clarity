/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { TimelineIconAttributeService } from './timeline-icon-attribute.service';
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';
import { ClrTimelineStepState } from './../enums/timeline-step-state.enum';

export default function (): void {
  describe('Timeline icon attribute service', () => {
    const timelineIconAttributeService = new TimelineIconAttributeService(new ClrCommonStringsService());

    it('has correct IconAttributes for NOT_STARTED', () => {
      expect(timelineIconAttributeService.getIconShape(ClrTimelineStepState.NOT_STARTED)).toEqual('circle');
      expect(timelineIconAttributeService.getAriaLabel(ClrTimelineStepState.NOT_STARTED)).toEqual('Not started');
    });

    it('has correct IconAttributes for CURRENT', () => {
      expect(timelineIconAttributeService.getIconShape(ClrTimelineStepState.CURRENT)).toEqual('dot-circle');
      expect(timelineIconAttributeService.getAriaLabel(ClrTimelineStepState.CURRENT)).toEqual('Current');
    });

    it('has correct IconAttributes for PROCESSING', () => {
      expect(timelineIconAttributeService.getIconShape(ClrTimelineStepState.PROCESSING)).toBe(undefined);
      expect(timelineIconAttributeService.getAriaLabel(ClrTimelineStepState.PROCESSING)).toEqual('In progress');
    });

    it('has correct IconAttributes for SUCCESS', () => {
      expect(timelineIconAttributeService.getIconShape(ClrTimelineStepState.SUCCESS)).toEqual('success-standard');
      expect(timelineIconAttributeService.getAriaLabel(ClrTimelineStepState.SUCCESS)).toEqual('Completed');
    });

    it('has correct IconAttributes for ERROR', () => {
      expect(timelineIconAttributeService.getIconShape(ClrTimelineStepState.ERROR)).toEqual('error-standard');
      expect(timelineIconAttributeService.getAriaLabel(ClrTimelineStepState.ERROR)).toEqual('Error');
    });
  });
}
