/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

import { ClrDatagridFilterInterface } from '../interfaces/filter.interface';
import { Page } from './page';
import { StateDebouncer } from './state-debouncer.provider';

@Injectable()
export class FiltersProvider<T = any> {
  constructor(private _page: Page, private stateDebouncer: StateDebouncer) {}
  /**
   * This subject is the list of filters that changed last, not the whole list.
   * We emit a list rather than just one filter to allow batch changes to several at once.
   */
  private _change = new Subject<ClrDatagridFilterInterface<T>[]>();
  // We do not want to expose the Subject itself, but the Observable which is read-only
  public get change(): Observable<ClrDatagridFilterInterface<T>[]> {
    return this._change.asObservable();
  }

  /**
   * List of all filters, whether they're active or not
   */
  private _all: RegisteredFilter<T, ClrDatagridFilterInterface<T>>[] = [];

  /**
   * Tests if at least one filter is currently active
   */
  public hasActiveFilters(): boolean {
    // We do not use getActiveFilters() because this function will be called much more often
    // and stopping the loop early might be relevant.
    for (const { filter } of this._all) {
      if (filter && filter.isActive()) {
        return true;
      }
    }
    return false;
  }

  /**
   * Returns a list of all currently active filters
   */
  public getActiveFilters(): ClrDatagridFilterInterface<T>[] {
    const ret: ClrDatagridFilterInterface<T>[] = [];
    for (const { filter } of this._all) {
      if (filter && filter.isActive()) {
        ret.push(filter);
      }
    }
    return ret;
  }

  /**
   * Registers a filter, and returns a deregistration function
   */
  public add<F extends ClrDatagridFilterInterface<T>>(filter: F): RegisteredFilter<T, F> {
    const index = this._all.length;
    const subscription = filter.changes.subscribe(() => this.resetPageAndEmitFilterChange([filter]));
    let hasUnregistered = false;
    const registered = new RegisteredFilter(filter, () => {
      if (hasUnregistered) {
        return;
      }
      subscription.unsubscribe();
      this._all.splice(index, 1);
      if (filter.isActive()) {
        this.resetPageAndEmitFilterChange([]);
      }
      hasUnregistered = true;
    });
    this._all.push(registered);
    if (filter.isActive()) {
      this.resetPageAndEmitFilterChange([filter]);
    }
    return registered;
  }

  /**
   * Accepts an item if it is accepted by all currently active filters
   */
  public accepts(item: T): boolean {
    for (const { filter } of this._all) {
      if (filter && filter.isActive() && !filter.accepts(item)) {
        return false;
      }
    }
    return true;
  }

  private resetPageAndEmitFilterChange(filters: ClrDatagridFilterInterface<T>[]) {
    this.stateDebouncer.changeStart();
    // filtering may change the page number such that current page number doesn't exist in the filtered dataset.
    // So here we always set the current page to 1 so that it'll fetch first page's data with the given filter.
    this._page.current = 1;
    this._change.next(filters);
    this.stateDebouncer.changeDone();
  }
}

export class RegisteredFilter<T, F extends ClrDatagridFilterInterface<T>> {
  constructor(public filter: F, public unregister: () => void) {}
}
