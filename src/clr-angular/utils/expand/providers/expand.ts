/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { LoadingListener } from '../../../utils/loading/loading-listener';
import { ClrLoadingState } from '../../loading/loading';

@Injectable()
export class Expand implements LoadingListener {
  public expandable: number = 0;

  // private _replace: boolean = false;
  private _replace: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public get replace(): Observable<boolean> {
    return this._replace.asObservable();
  }
  setReplace(replaceValue: boolean) {
    this._replace.next(replaceValue);
  }

  private _loading: boolean = false;
  get loading(): boolean {
    return this._loading;
  }

  set loading(value: boolean) {
    value = !!value;
    if (value !== this._loading) {
      this._loading = value;
    }
  }

  private _expanded: boolean = false;
  get expanded(): boolean {
    return this._expanded;
  }

  set expanded(value: boolean) {
    value = !!value;
    if (value !== this._expanded) {
      this._expanded = value;
      this._animate.next();
      this._expandChange.next(value);
    }
  }

  public toggle() {
    this.expanded = !this._expanded;
  }

  // TODO: Move this to the datagrid RowExpand.
  // I spent some time doing this but ran into a couple of issues
  // Will take care of this later.
  private _animate: Subject<boolean> = new Subject<boolean>();
  public get animate(): Observable<boolean> {
    return this._animate.asObservable();
  }

  private _expandChange: Subject<boolean> = new Subject<boolean>();
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
        this._animate.next();
        break;
    }
  }
}
