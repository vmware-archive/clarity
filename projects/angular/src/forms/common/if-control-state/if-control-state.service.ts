/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Injectable, OnDestroy } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { NgControlService } from '../providers/ng-control.service';

export enum CONTROL_STATE {
  NONE = 'NONE',
  VALID = 'VALID',
  INVALID = 'INVALID',
}

@Injectable()
export class IfControlStateService implements OnDestroy {
  private subscriptions: Subscription[] = [];
  private control: NgControl;

  // Implement our own status changes observable, since Angular controls don't
  private _statusChanges: BehaviorSubject<CONTROL_STATE> = new BehaviorSubject(CONTROL_STATE.NONE);
  get statusChanges(): Observable<CONTROL_STATE> {
    return this._statusChanges.asObservable();
  }

  constructor(private ngControlService: NgControlService) {
    // Wait for the control to be available
    this.subscriptions.push(
      this.ngControlService.controlChanges.subscribe(control => {
        if (control) {
          this.control = control;
          // Subscribe to the status change events, only after touched
          // and emit the control
          this.subscriptions.push(
            this.control.statusChanges.subscribe(() => {
              this.triggerStatusChange();
            })
          );
        }
      })
    );
  }

  triggerStatusChange() {
    /* Check if control is defined and run the code only then */
    if (this.control) {
      // These status values are mutually exclusive, so a control
      // cannot be both valid AND invalid or invalid AND disabled.
      const status = CONTROL_STATE[this.control.status];
      this._statusChanges.next(
        this.control.touched && ['VALID', 'INVALID'].includes(status) ? status : CONTROL_STATE.NONE
      );
    }
  }

  // Clean up subscriptions
  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
