/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'clr-timeline-step-header',
  template: ` <ng-content></ng-content> `,
  host: { '[class.clr-timeline-step-header]': 'true' },
})
export class ClrTimelineStepHeader {}
