/**
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

import { ClrAbstractContainer } from '../common/abstract-container';
import { NgControlService } from './providers/ng-control.service';
import { ControlIdService } from './providers/control-id.service';
import { ControlClassService } from './providers/control-class.service';
import { IfControlStateService } from './if-control-state/if-control-state.service';

@Component({
  selector: 'clr-control-container',
  template: `
    <ng-content select="label"></ng-content>
    <label *ngIf="!label && addGrid()"></label>
    <div class="clr-control-container" [ngClass]="controlClass()">
      <div class="clr-input-wrapper">
        <ng-content></ng-content>
        <cds-icon
          *ngIf="showInvalid"
          class="clr-validate-icon"
          status="danger"
          shape="exclamation-circle"
          aria-hidden="true"
        ></cds-icon>
        <cds-icon
          *ngIf="showValid"
          class="clr-validate-icon"
          shape="check-circle"
          status="success"
          aria-hidden="true"
        ></cds-icon>
      </div>
      <ng-content select="clr-control-helper" *ngIf="showHelper"></ng-content>
      <ng-content select="clr-control-error" *ngIf="showInvalid"></ng-content>
      <ng-content select="clr-control-success" *ngIf="showValid"></ng-content>
    </div>
  `,
  host: {
    '[class.clr-form-control]': 'true',
    '[class.clr-form-control-disabled]': 'control?.disabled',
    '[class.clr-row]': 'addGrid()',
  },
  providers: [IfControlStateService, NgControlService, ControlIdService, ControlClassService],
})
export class ClrControlContainer extends ClrAbstractContainer {}
