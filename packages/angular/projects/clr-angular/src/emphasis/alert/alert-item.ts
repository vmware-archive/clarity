/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { AlertIconAndTypesService } from './providers/icon-and-types.service';

@Component({
  selector: 'clr-alert-item',
  template: `
        <div class="alert-icon-wrapper">
            <clr-icon class="alert-icon" 
              [attr.shape]="iconService.alertIconShape" 
              [attr.title]="iconService.alertIconTitle"></clr-icon>
        </div>
        <ng-content></ng-content>
    `,
  host: { class: 'alert-item' },
})
export class ClrAlertItem {
  constructor(public iconService: AlertIconAndTypesService) {}
}
