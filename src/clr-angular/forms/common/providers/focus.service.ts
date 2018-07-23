/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class FocusService {
  private _focused: BehaviorSubject<boolean> = new BehaviorSubject(false);
  get focusChange(): Observable<boolean> {
    return this._focused.asObservable();
  }
  set focused(state: boolean) {
    this._focused.next(state);
  }
}
