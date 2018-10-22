/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import { ColumnToggleButtonsService } from './providers/column-toggle-buttons.service';

@Component({
  selector: 'clr-dg-column-toggle-button',
  template: `
        <button class="btn btn-sm btn-link"
            (click)="toggleButtons.buttonClicked()"
            [disabled]="toggleButtons.selectAllDisabled"
            type="button">
            <ng-content></ng-content>
        </button>
    `,
})
export class ClrDatagridColumnToggleButton {
  constructor(public toggleButtons: ColumnToggleButtonsService) {}
}
