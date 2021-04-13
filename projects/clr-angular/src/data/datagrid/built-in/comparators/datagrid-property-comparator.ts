/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ClrDatagridComparatorInterface } from '../../interfaces/comparator.interface';
import { NestedProperty } from '../nested-property';

export class DatagridPropertyComparator<T = any> implements ClrDatagridComparatorInterface<T> {
  private nestedProp: NestedProperty<T>;

  constructor(public prop: string) {
    this.nestedProp = new NestedProperty(prop);
  }

  public compare(a: T, b: T): number {
    let propA = this.nestedProp.getPropValue(a);
    let propB = this.nestedProp.getPropValue(b);

    if (typeof propA === 'string') {
      propA = propA.toLowerCase();
    }

    if (typeof propB === 'string') {
      propB = propB.toLowerCase();
    }

    if (typeof propA === 'undefined' || propA === null) {
      if (typeof propB === 'undefined' || propB === null) {
        return 0;
      } else {
        return 1;
      }
    } else {
      if (typeof propB === 'undefined' || propB === null) {
        return -1;
      } else if (propA < propB) {
        return -1;
      } else if (propA > propB) {
        return 1;
      } else {
        return 0;
      }
    }
  }
}
