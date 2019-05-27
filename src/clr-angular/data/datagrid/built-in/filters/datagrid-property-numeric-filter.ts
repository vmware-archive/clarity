/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ClrDatagridNumericFilterInterface } from '../../interfaces/numeric-filter.interface';
import { NestedProperty } from '../nested-property';

export class DatagridPropertyNumericFilter<T = any> implements ClrDatagridNumericFilterInterface<T> {
  private nestedProp: NestedProperty<T>;

  constructor(public prop: string, public exact = false) {
    this.nestedProp = new NestedProperty(prop);
  }

  accepts(item: T, low: number, high: number): boolean {
    const propValue = this.nestedProp.getPropValue(item);
    if (low !== null && propValue < low) {
      return false;
    }
    if (high !== null && propValue > high) {
      return false;
    }
    return true;
  }
}
