/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Injectable, OnDestroy } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Observable, Subject, Subscription } from 'rxjs';

import { NgControlService } from '../providers/ng-control.service';

@Injectable()
export class IfErrorService implements OnDestroy {
  // Implement our own status changes observable, since Angular controls don't
  // fire on events like blur, and we want to return the boolean state instead of a string
  private _statusChanges: Subject<boolean> = new Subject();
  get statusChanges(): Observable<boolean> {
    return this._statusChanges.asObservable();
  }

  private subscriptions: Subscription[] = [];
  private control: NgControl;

  constructor(private ngControlService: NgControlService) {
    // Wait for the control to be available
    this.subscriptions.push(
      this.ngControlService.controlChanges.subscribe(control => {
        if (control) {
          this.control = control;
          this.listenForChanges();
        }
      })
    );
  }

  // Subscribe to the status change events, only after touched and emit the control
  private listenForChanges() {
    this.subscriptions.push(
      this.control.statusChanges.subscribe(() => {
        this.sendValidity();
      })
    );
  }

  private sendValidity() {
    if ((this.control.touched || this.control.dirty) && this.control.invalid) {
      this._statusChanges.next(true);
    } else {
      this._statusChanges.next(false);
    }
  }

  // Allows a control to push a status check upstream, such as on blur
  triggerStatusChange() {
    if (this.control) {
      this.sendValidity();
    }
  }

  // Clean up subscriptions
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
