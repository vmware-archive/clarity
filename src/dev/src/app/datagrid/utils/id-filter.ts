/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ClrDatagridNumericFilterInterface } from '@clr/angular';

export class IDFilter implements ClrDatagridNumericFilterInterface<any> {
  accepts(row: any, low: number, high: number): boolean {
    if (low !== null && row.id < low) {
      return false;
    }
    if (high !== null && row.id > high) {
      return false;
    }
    return true;
  }
}
