/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 *
 */

import { Directive, ElementRef } from '@angular/core';
import { ClrSmartPopoverEventsService } from './providers/smart-popover-events.service';

@Directive({
  selector: '[clrSmartAnchor]',
  host: {
    '[class.clr-anchor]': 'true',
  },
})
export class ClrSmartPopoverAnchor {
  constructor(smartEventService: ClrSmartPopoverEventsService, element: ElementRef) {
    smartEventService.anchorButtonRef = element;
  }
}
