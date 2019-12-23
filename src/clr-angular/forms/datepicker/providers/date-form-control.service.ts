/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class DateFormControlService {
  value;

  private _touchedChange: Subject<void> = new Subject<void>();

  get touchedChange(): Observable<void> {
    return this._touchedChange.asObservable();
  }

  private _dirtyChange: Subject<void> = new Subject<void>();

  get dirtyChange(): Observable<void> {
    return this._dirtyChange.asObservable();
  }

  markAsTouched(): void {
    this._touchedChange.next();
  }

  markAsDirty(): void {
    this._dirtyChange.next();
  }

  /**
   * Handle Date value across components
   */
  private dataClearEvent: Subject<void> = new Subject();

  get requestToClearData(): Observable<void> {
    return this.dataClearEvent.asObservable();
  }

  /**
   * Send request that the data of the date-picker has to be cleared.
   * All components that are listening for even `requestToClearData` have
   * to handle it by themself.
   */
  public clear() {
    this.dataClearEvent.next();
  }
}
