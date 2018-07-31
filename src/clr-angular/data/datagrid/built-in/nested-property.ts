/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
/**
 * Generic accessor for deep object properties
 * that can be specified as simple dot-separated strings.
 */
export class NestedProperty<T = any> {
  private splitProp: string[];

  constructor(private prop: string) {
    if (prop.indexOf('.') >= 0) {
      this.splitProp = prop.split('.');
    }
  }

  // Safe getter for a deep object property, will not throw an error but return
  // undefined if one of the intermediate properties is null or undefined.
  public getPropValue(item: T): any {
    if (this.splitProp) {
      let value = item;
      for (const nestedProp of this.splitProp) {
        if (value == null || typeof value === 'undefined' || typeof value[nestedProp] === 'undefined') {
          return undefined;
        }
        value = value[nestedProp];
      }
      return value;
    } else {
      return item[this.prop];
    }
  }
}
