/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

const timelineStep = `
<li class="clr-timeline-step">
  <div class="clr-timeline-step-header">11:59 am</div>
  <clr-icon shape="circle" aria-label="Not started"></clr-icon>
  <div class="clr-timeline-step-body">
    ...
  </div>
</li>
`;

const spinner = `
<clr-spinner clrMedium aria-label="In progress">Fetching data</clr-spinner>
`;

@Component({
  selector: 'clr-timeline-step-demo',
  templateUrl: './timeline-step.demo.html',
})
export class TimelineStepDemo {
  timelineStep = timelineStep;
  spinner = spinner;
}
