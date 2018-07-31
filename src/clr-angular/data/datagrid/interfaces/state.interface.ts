/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ClrDatagridComparatorInterface } from './comparator.interface';
import { ClrDatagridFilterInterface } from './filter.interface';

export interface ClrDatagridStateInterface<T = any> {
  page?: { from?: number; to?: number; size?: number };
  sort?: { by: string | ClrDatagridComparatorInterface<T>; reverse: boolean };
  filters?: ({ property: string; value: string } | ClrDatagridFilterInterface<T>)[];
}
