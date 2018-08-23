/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Input } from '@angular/core';

import { ColumnToggleButtons, ColumnToggleButtonsService } from './providers/column-toggle-buttons.service';

@Component({
  selector: 'clr-dg-column-toggle-button',
  template: `
        <button class="btn btn-sm btn-link"
            (click)="click()"
            [disabled]="toggleButtons.selectAllDisabled"
            type="button">
            <ng-content></ng-content>
        </button>
    `,
})
export class ClrDatagridColumnToggleButton {
  /** @deprecated since 0.13 */
  @Input() clrType: ColumnToggleButtons = 'selectAll';

  constructor(public toggleButtons: ColumnToggleButtonsService) {}

  click() {
    this.toggleButtons.buttonClicked(this.clrType);
  }
}
