/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Observable, Subject } from 'rxjs';
import { ClrDatagridFilterInterface } from '../../interfaces/filter.interface';
import { ClrDatagridStringFilterInterface } from '../../interfaces/string-filter.interface';
import { DatagridPropertyStringFilter } from './datagrid-property-string-filter';

export class DatagridStringFilterImpl<T = any> implements ClrDatagridFilterInterface<T> {
  constructor(public filterFn: ClrDatagridStringFilterInterface<T>) {}

  /**
   * The Observable required as part of the Filter interface
   */
  private _changes = new Subject<string>();
  // We do not want to expose the Subject itself, but the Observable which is read-only
  public get changes(): Observable<string> {
    return this._changes.asObservable();
  }

  /**
   * Input value converted to lowercase
   */
  private _lowerCaseValue = '';
  public get lowerCaseValue() {
    return this._lowerCaseValue;
  }

  /**
   * Raw input value
   */
  private _rawValue = '';
  public get value(): string {
    return this._rawValue;
  }
  /**
   * Common setter for the input value
   */
  public set value(value: string) {
    if (!value) {
      value = '';
    }
    if (value !== this._rawValue) {
      this._rawValue = value;
      this._lowerCaseValue = value.toLowerCase().trim();
      this._changes.next(value);
    }
  }

  /**
   * Indicates if the filter is currently active, meaning the input is not empty
   */
  public isActive(): boolean {
    return !!this.value;
  }

  /**
   * Tests if an item matches a search text
   */
  public accepts(item: T): boolean {
    // We always test with the lowercase value of the input, to stay case insensitive
    return this.filterFn.accepts(item, this.lowerCaseValue);
  }

  public get state() {
    if (this.filterFn instanceof DatagridPropertyStringFilter) {
      return {
        property: this.filterFn.prop,
        value: this.value,
      };
    }
    return this;
  }

  public equals(other: ClrDatagridFilterInterface<T, any>): boolean {
    if (other instanceof DatagridStringFilterImpl) {
      if (other.filterFn instanceof DatagridPropertyStringFilter) {
        return (
          this.filterFn instanceof DatagridPropertyStringFilter &&
          other.filterFn.prop === this.filterFn.prop &&
          other.value === this.value
        );
      }
      return other === this;
    }
    return false;
  }
}
