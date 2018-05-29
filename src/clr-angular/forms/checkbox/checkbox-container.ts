/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

import { DynamicWrapper } from '../../utils/host-wrapping/dynamic-wrapper';
import { FormControlService } from '../common/form-control.service';

@Component({
  selector: 'clr-checkbox-container',
  template: `
        <!-- We want the checkbox input to be before the label, always -->
        <ng-content select="[clrCheckbox]"></ng-content>
        <ng-content></ng-content>
        <label *ngIf="_dynamic"></label>
    `,
  host: { '[class.checkbox]': 'true' },
  providers: [FormControlService],
})
export class ClrCheckboxContainer implements DynamicWrapper {
  // Indicates whether the container is dynamically created by the checkbox input itself
  _dynamic = false;
}
