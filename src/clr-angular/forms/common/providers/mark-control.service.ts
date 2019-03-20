/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class MarkControlService {
  private _touched: Subject<void> = new Subject();

  get touchedChange(): Observable<void> {
    return this._touched.asObservable();
  }

  markAsTouched() {
    this._touched.next();
  }
}
