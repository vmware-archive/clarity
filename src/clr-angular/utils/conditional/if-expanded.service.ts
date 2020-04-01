/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { LoadingListener } from '../loading/loading-listener';
import { ClrLoadingState } from '../loading/loading';

@Injectable()
export class IfExpandService implements LoadingListener {
  public expandable = 0;

  protected _loading = false;
  get loading(): boolean {
    return this._loading;
  }

  set loading(value: boolean) {
    value = !!value;
    if (value !== this._loading) {
      this._loading = value;
    }
  }

  protected _expanded = false;
  get expanded(): boolean {
    return this._expanded;
  }

  set expanded(value: boolean) {
    value = !!value;
    if (value !== this._expanded) {
      this._expanded = value;
      this._expandChange.next(value);
    }
  }

  public toggle() {
    this.expanded = !this._expanded;
  }

  protected _expandChange: Subject<boolean> = new Subject<boolean>();
  public get expandChange(): Observable<boolean> {
    return this._expandChange.asObservable();
  }

  loadingStateChange(state: ClrLoadingState): void {
    switch (state) {
      case ClrLoadingState.LOADING:
        this.loading = true;
        break;
      default:
        this.loading = false;
        break;
    }
  }
}
