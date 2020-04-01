/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Observable, Subject } from 'rxjs';
import { ClrDatagridFilterInterface } from '../../interfaces/filter.interface';
import { ClrDatagridNumericFilterInterface } from '../../interfaces/numeric-filter.interface';
import { DatagridPropertyNumericFilter } from './datagrid-property-numeric-filter';

export class DatagridNumericFilterImpl<T = any> implements ClrDatagridFilterInterface<T> {
  constructor(public filterFn: ClrDatagridNumericFilterInterface<T>) {}

  /**
   * The Observable required as part of the Filter interface
   */
  private _changes = new Subject<[number, number]>();
  // We do not want to expose the Subject itself, but the Observable which is read-only
  public get changes(): Observable<[number, number]> {
    return this._changes.asObservable();
  }

  /**
   * Internal values and accessor
   */
  private _low: number | null = null;
  private _high: number | null = null;

  /**
   * Common setters for the input values, including individual limits and
   * both at the same time.  Value is singular to make the interface similar
   * to the built-in string filter.
   */

  public get value(): [number, number] {
    return [this._low, this._high];
  }

  public set value(vals: [number, number]) {
    const low = vals[0];
    const high = vals[1];
    if (low !== this._low || high !== this._high) {
      this._low = low;
      this._high = high;
      this._changes.next([this._low, this._high]);
    }
  }

  public get low() {
    return this._low;
  }
  public set low(low: number) {
    if (low !== this._low) {
      this._low = low;
      this._changes.next([this._low, this._high]);
    }
  }

  public get high() {
    return this._high;
  }
  public set high(high: number) {
    if (high !== this._high) {
      this._high = high;
      this._changes.next([this._low, this._high]);
    }
  }

  /**
   * Indicates if the filter is currently active, (at least one input is set)
   */
  public isActive(): boolean {
    return this._low !== null || this.high !== null;
  }

  /**
   * Tests if an item matches a search text
   */
  public accepts(item: T): boolean {
    // We have a filter function in case someone wants to implement a numeric
    // filter that always passes nulls or similar
    return this.filterFn.accepts(item, this._low, this._high);
  }

  public get state() {
    if (this.filterFn instanceof DatagridPropertyNumericFilter) {
      return {
        property: this.filterFn.prop,
        low: this._low,
        high: this._high,
      };
    }
    return this;
  }

  public equals(other: ClrDatagridFilterInterface<T, any>): boolean {
    if (other instanceof DatagridNumericFilterImpl) {
      if (other.filterFn instanceof DatagridPropertyNumericFilter) {
        return (
          this.filterFn instanceof DatagridPropertyNumericFilter &&
          other.filterFn.prop === this.filterFn.prop &&
          other.low === this._low &&
          other.high === this._high
        );
      }
      return other === this;
    }
    return false;
  }
}
