/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

/**
 * Note: Why does this component have aria-hidden attribute?
 *
 * tl;dr: we want screen readers to ignore this element when its reading out to blind users.
 *
 * In order to make a timeline step accessible to screen readers we need the title read out before the
 * icon. In order to do this, ClrTimeLine step has a ContentChild that queries for the ClrTimelineStepTitle and
 * then adds the projected text into a .clr-sr-only element that is a sibling element to the icon. See the
 * ClrTimlineStep template for the DOM structure.
 */
@Component({
  selector: 'clr-timeline-step-title',
  template: ` <ng-content></ng-content> `,
  host: { '[class.clr-timeline-step-title]': 'true', '[attr.aria-hidden]': 'true' },
})
export class ClrTimelineStepTitle {}
