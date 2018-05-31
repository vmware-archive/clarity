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
        <button
            (click)="click()"
            [disabled]="toggleButtons.selectAllDisabled && !isOk()"
            [ngClass]="getClasses()"
            type="button">
            <ng-content></ng-content>
        </button>
    `,
  host: { '[class.action-right]': 'isOk()', '[style.display]': 'block' },
})
export class ClrDatagridColumnToggleButton {
  @Input() clrType: ColumnToggleButtons;

  constructor(public toggleButtons: ColumnToggleButtonsService) {}

  getClasses() {
    let classes = 'btn ';
    if (this.isOk()) {
      classes += 'btn-primary';
    } else {
      classes += 'btn-sm btn-link p6 text-uppercase';
    }
    return classes;
  }

  isOk() {
    return this.clrType === 'ok';
  }

  click() {
    this.toggleButtons.buttonClicked(this.clrType);
  }
}
