/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Injectable } from '@angular/core';

@Injectable()
export class VerticalNavIconService {
  private _icons: number = 0;

  get hasIcons(): boolean {
    return this._icons > 0;
  }

  registerIcon(): void {
    this._icons++;
  }

  unregisterIcon(): void {
    this._icons--;
  }
}
