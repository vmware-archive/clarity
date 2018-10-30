/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, Input, OnDestroy, Optional } from '@angular/core';

import { LoadingListener } from './loading-listener';

export enum ClrLoadingState {
  DEFAULT,
  LOADING,
  SUCCESS,
  ERROR,
}

@Directive({ selector: '[clrLoading]' })
export class ClrLoading implements OnDestroy {
  // We find the first parent that handles something loading
  constructor(@Optional() private listener: LoadingListener) {}

  private _loadingState: ClrLoadingState = ClrLoadingState.DEFAULT;

  public get loadingState() {
    return this._loadingState;
  }

  @Input('clrLoading')
  public set loadingState(value: boolean | ClrLoadingState) {
    if (value === true) {
      value = ClrLoadingState.LOADING;
    } else if (!value) {
      value = ClrLoadingState.DEFAULT;
    }

    if (value === this._loadingState) {
      return;
    }

    this._loadingState = value;
    if (this.listener) {
      this.listener.loadingStateChange(value);
    }
  }

  ngOnDestroy() {
    this.loadingState = ClrLoadingState.DEFAULT;
  }
}
