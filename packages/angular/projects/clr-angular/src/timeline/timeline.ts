/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, Input, HostBinding } from '@angular/core';

import { ClrTimelineLayout } from './enums/timeline-layout.enum';
import { TimelineIconAttributeService } from './providers/timeline-icon-attribute.service';

@Component({
  selector: 'clr-timeline',
  template: ` <ng-content></ng-content> `,
  host: { '[class.clr-timeline]': 'true' },
  providers: [TimelineIconAttributeService],
})
export class ClrTimeline {
  @Input('clrLayout') layout: ClrTimelineLayout = ClrTimelineLayout.HORIZONTAL;

  @HostBinding('class.clr-timeline-vertical')
  get isVertical(): boolean {
    return this.layout === ClrTimelineLayout.VERTICAL;
  }
}
