/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'clr-timeline-component',
  templateUrl: './timeline-component.html',
})
export class TimelineComponentDemo {
  props = [
    {
      name: '[clrLayout]',
      values: "'horizontal' | 'vertical'",
      defaultValue: "'horizontal'",
      description: "Define if the timeline shall be 'horizontal' or 'vertical'",
    },
  ];

  stepProps = [
    {
      name: '[clrState]',
      values: 'ClrTimelineStepState',
      defaultValue: 'NOT_STARTED',
      description: 'Define the symbol (icon or spinner) to use to decorate the step',
    },
  ];
}
