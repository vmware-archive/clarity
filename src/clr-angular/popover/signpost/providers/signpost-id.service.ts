/*
 *  Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 *
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable()
export class SignpostIdService {
  private _id: Subject<string> = new Subject<string>();

  setId(id: string) {
    this._id.next(id);
  }

  get id(): Observable<string> {
    return this._id.asObservable();
  }
}
