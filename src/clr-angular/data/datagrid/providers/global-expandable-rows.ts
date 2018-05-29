/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable } from '@angular/core';

@Injectable()
export class ExpandableRowsCount {
  private expandableCount = 0;

  public register() {
    this.expandableCount++;
  }

  public unregister() {
    this.expandableCount--;
  }

  /**
   * false means no rows with action
   */
  public get hasExpandableRow(): boolean {
    return this.expandableCount > 0;
  }
}
