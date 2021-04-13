/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Injectable } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

export interface Helpers {
  show?: boolean;
  showInvalid?: boolean;
  showValid?: boolean;
  showHelper?: boolean;
}

@Injectable()
export class NgControlService {
  // Observable to subscribe to the control, since its not available immediately for projected content
  private _controlChanges: Subject<NgControl> = new Subject<NgControl>();
  get controlChanges(): Observable<NgControl> {
    return this._controlChanges.asObservable();
  }

  setControl(control: NgControl) {
    this._controlChanges.next(control);
  }

  private _helpers: Subject<Helpers> = new Subject();

  get helpersChange(): Observable<Helpers> {
    return this._helpers.asObservable();
  }

  setHelpers(state: Helpers) {
    this._helpers.next(state);
  }
}
