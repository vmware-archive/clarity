/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import TimelineSpec from './timeline.spec';
import TimelineStepSpec from './timeline-step.spec';
import TimelineStepDescriptionSpec from './timeline-step-description.spec';
import TimelineStepHeaderSpec from './timeline-step-header.spec';
import TimelineStepTitleSpec from './timeline-step-title.spec';
import TimelineIconAttributeService from './providers/timeline-icon-attribute.service.spec';

describe('Timeline', () => {
  TimelineSpec();
  TimelineStepSpec();
  TimelineStepDescriptionSpec();
  TimelineStepHeaderSpec();
  TimelineStepTitleSpec();
  TimelineIconAttributeService();
});
