/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

const body = `
<div class="clr-timeline-step-body">
  <span class="clr-timeline-step-title">Body Title</span>
  <span class="clr-timeline-step-description">Body Description.</span>
</div>
`;

@Component({
  selector: 'clr-timeline-body-demo',
  templateUrl: './timeline-body.demo.html',
})
export class TimelineBodyDemo {
  body = body;
}
