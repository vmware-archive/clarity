/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable()
export class VerticalNavGroupService {
  private _expandChange: Subject<boolean> = new Subject<boolean>();

  get expandChange(): Observable<boolean> {
    return this._expandChange.asObservable();
  }

  expand(): void {
    this._expandChange.next(true);
  }
}
