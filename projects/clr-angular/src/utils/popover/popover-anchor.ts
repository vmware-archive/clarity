/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 *
 */

import { Directive, ElementRef } from '@angular/core';
import { ClrPopoverEventsService } from './providers/popover-events.service';

@Directive({
  selector: '[clrPopoverAnchor]',
  host: {
    '[class.clr-anchor]': 'true',
  },
})
export class ClrPopoverAnchor {
  constructor(smartEventService: ClrPopoverEventsService, element: ElementRef) {
    smartEventService.anchorButtonRef = element;
  }
}
