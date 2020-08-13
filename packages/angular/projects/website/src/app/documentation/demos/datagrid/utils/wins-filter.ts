/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ClrDatagridNumericFilterInterface } from '@clr/angular';

export class WinsFilter implements ClrDatagridNumericFilterInterface<any> {
  accepts(row: any, low: number, high: number): boolean {
    if (low !== null && row.wins < low) {
      return false;
    }
    if (high !== null && row.wins > high) {
      return false;
    }
    return true;
  }
}
