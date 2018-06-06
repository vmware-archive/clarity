/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { IfErrorService } from '../common/if-error/if-error.service';
import { NgControlService } from '../common/providers/ng-control.service';

@Component({
  selector: 'clr-input-container',
  template: `
        <ng-content select="label"></ng-content>
        <div class="clr-control-container" [class.clr-error]="invalid">
            <div class="clr-input-wrapper">
                <ng-content select="[clrInput]"></ng-content>
                <clr-icon *ngIf="invalid" class="clr-validate-icon" shape="exclamation-circle"></clr-icon>
            </div>
            <ng-content select="clr-control-helper" *ngIf="!invalid"></ng-content>
            <ng-content select="clr-control-error" *ngIf="invalid"></ng-content>
        </div>
    `,
  host: { '[class.clr-form-control]': 'true' },
  providers: [IfErrorService, NgControlService],
})
export class ClrInputContainer implements OnDestroy {
  subscription: Subscription;
  invalid = false;

  constructor(private ifErrorService: IfErrorService) {
    this.subscription = this.ifErrorService.statusChanges.subscribe(control => {
      this.invalid = control.invalid;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
