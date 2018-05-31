/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

/*
 * This provider implements some form of synchronous debouncing through a lock pattern
 * to avoid emitting multiple state changes for a single user action.
 */
@Injectable()
export class StateDebouncer {
  /**
   * The Observable that lets other classes subscribe to global state changes
   */
  private _change = new Subject<void>();
  // We do not want to expose the Subject itself, but the Observable which is read-only
  public get change(): Observable<void> {
    return this._change.asObservable();
  }

  /*
     * This is the lock, to only emit once all the changes have finished processing
     */
  private nbChanges = 0;

  public changeStart() {
    this.nbChanges++;
  }

  public changeDone() {
    if (--this.nbChanges === 0) {
      this._change.next();
    }
  }
}
