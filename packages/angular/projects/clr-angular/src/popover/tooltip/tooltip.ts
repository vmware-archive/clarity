/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ElementRef } from '@angular/core';
import { ClrPopoverToggleService } from '../../utils/popover/providers/popover-toggle.service';
import { POPOVER_HOST_ANCHOR } from '../common/popover-host-anchor.token';
import { UNIQUE_ID_PROVIDER } from '../../utils/id-generator/id-generator.service';
import { TooltipIdService } from './providers/tooltip-id.service';

@Component({
  selector: 'clr-tooltip',
  template: ` <ng-content></ng-content> `,
  host: {
    '[class.tooltip]': 'true',
  },
  providers: [
    ClrPopoverToggleService,
    { provide: POPOVER_HOST_ANCHOR, useExisting: ElementRef },
    // TODO: consider centralizing the unique id string on a service that provides ariaAttributes that need it
    // AriaService in layout/tabs/providers might be a good starting point.
    UNIQUE_ID_PROVIDER,
    TooltipIdService,
  ],
})
export class ClrTooltip {}
