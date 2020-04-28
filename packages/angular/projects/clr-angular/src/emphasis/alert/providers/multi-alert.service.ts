/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable, QueryList } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { ClrAlert } from '../alert';

@Injectable()
export class MultiAlertService {
  private subscription: Subscription;

  private allAlerts: QueryList<ClrAlert>;

  /**
   * The Observable that lets other classes subscribe to changes
   */
  private _change = new Subject<number>();
  public get changes(): Observable<number> {
    return this._change.asObservable();
  }

  private _current: number;

  get current() {
    return this._current;
  }
  set current(index: number) {
    if (index !== this._current) {
      this._current = index;
      this._change.next(index);
    }
  }

  get activeAlerts() {
    return this.allAlerts && this.allAlerts.filter(alert => !alert._closed);
  }

  get currentAlert() {
    return this.activeAlerts && this.activeAlerts[this.current];
  }

  set currentAlert(alert: ClrAlert) {
    this.current = this.activeAlerts.indexOf(alert);
  }

  get count() {
    return (this.activeAlerts && this.activeAlerts.length) || 0;
  }

  manage(alerts: QueryList<ClrAlert>) {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.allAlerts = alerts;
    // After receiving alerts' QueryList,
    // we are picking index 0 as current by default if a user hasn't any index
    this.current = typeof this._current === 'number' ? this._current : 0;
    // we have to also broadcast that initial index
    this._change.next(this.current);

    this.subscription = this.allAlerts.changes.subscribe(() => {
      if (this.current >= this.allAlerts.length) {
        this.current = Math.max(0, this.allAlerts.length - 1);
      }
    });
  }

  next() {
    this.current = this.current === this.activeAlerts.length - 1 ? 0 : this.current + 1;
  }

  previous() {
    if (this.activeAlerts.length === 0) {
      return;
    }
    this.current = this.current === 0 ? this.activeAlerts.length - 1 : this.current - 1;
  }

  close() {
    this.previous();
  }

  destroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
