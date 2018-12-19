/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { ClrDatagridFilterInterface } from '../../interfaces/filter.interface';
import { ClrDatagridNumericFilterInterface } from '../../interfaces/numeric-filter.interface';

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
  private _low: number = Number.NEGATIVE_INFINITY;
  private _high: number = Number.POSITIVE_INFINITY;

  public get limits(): [number, number] {
    return [this._low, this._high];
  }

  /**
   * Common setters for the input values
   */
  public set low(low: number) {
    if (low !== this._low) {
      this._low = low;
      this._changes.next([this._low, this._high]);
    }
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
    return isFinite(this._low) || isFinite(this._high);
  }

  /**
   * Tests if an item matches a search text
   */
  public accepts(item: T): boolean {
    // We have a filter function in case someone wants to implement a numeric
    // filter that always passes nulls or similar
    return this.filterFn.accepts(item, this._low, this._high);
  }
}
