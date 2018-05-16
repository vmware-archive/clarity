/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

import { DynamicWrapper } from '../../utils/host-wrapping/dynamic-wrapper';
import { ControlIdService } from '../common/providers/control-id.service';

@Component({
  selector: 'clr-radio-container',
  template: `
        <!-- We want the radio input to be before the label, always -->
        <ng-content select="[clrRadio]"></ng-content>
        <ng-content></ng-content>
        <label *ngIf="_dynamic"></label>
    `,
  host: { '[class.radio]': 'true' },
  providers: [ControlIdService],
})
export class ClrRadioContainer implements DynamicWrapper {
  // Indicates whether the container is dynamically created by the radio button itself
  _dynamic = false;
}
