/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class DetailService {
  private toggleState = null;
  protected _state: BehaviorSubject<boolean | null> = new BehaviorSubject<boolean | null>(this.toggleState);
  private cache: any;

  public get stateChange(): Observable<boolean | null> {
    return this._state.asObservable();
  }

  close() {
    this.toggleState = false;
    this._state.next(this.toggleState);
  }

  open(item: any) {
    this.cache = item;
    this.toggleState = true;
    this._state.next(this.toggleState);
  }

  toggle(item: any) {
    if (this.toggleState && this.cache !== item) {
      this.open(item);
    } else if (this.toggleState && this.cache === item) {
      this.close();
    } else {
      this.open(item);
    }
  }

  get state() {
    return this.cache;
  }

  isRowOpen(item) {
    return this.toggleState && this.cache === item;
  }

  get isOpen() {
    return this.toggleState === true;
  }

  get isEnabled() {
    return this.toggleState !== null;
  }
}
