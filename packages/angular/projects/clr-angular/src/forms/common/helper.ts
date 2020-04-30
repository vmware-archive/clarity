/**
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, Optional } from '@angular/core';
import { ControlIdService } from './providers/control-id.service';

@Component({
  selector: 'clr-control-helper',
  template: ` <ng-content></ng-content> `,
  host: {
    '[class.clr-subtext]': 'true',
    '[id]': 'controlIdService?.id + "-helper"',
  },
})
export class ClrControlHelper {
  constructor(@Optional() public controlIdService: ControlIdService) {}
}
