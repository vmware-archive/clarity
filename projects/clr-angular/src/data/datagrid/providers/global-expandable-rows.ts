/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable } from '@angular/core';
import { DetailService } from './detail.service';

@Injectable()
export class ExpandableRowsCount {
  constructor(private detailService: DetailService) {}

  private expandableCount = 0;

  public register() {
    this.expandableCount++;
  }

  public unregister() {
    this.expandableCount--;
  }

  /**
   * false means no rows with action
   * check if details are on, and disable rows entirely
   */
  public get hasExpandableRow(): boolean {
    return !this.detailService.enabled && this.expandableCount > 0;
  }
}
