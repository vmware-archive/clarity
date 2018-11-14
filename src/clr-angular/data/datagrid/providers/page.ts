/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { StateDebouncer } from './state-debouncer.provider';

@Injectable()
export class Page {
  constructor(private stateDebouncer: StateDebouncer) {}

  /**
   * Page size, a value of 0 means no pagination
   */
  private _size = 0;
  public get size(): number {
    return this._size;
  }
  public set size(size: number) {
    const oldSize = this._size;
    if (size !== oldSize) {
      this.stateDebouncer.changeStart();
      this._size = size;
      if (size === 0) {
        this._current = 1;
      } else {
        // Yeap. That's the formula to keep the first item from the old page still
        // displayed in the new one.
        this._current = Math.floor(oldSize / size * (this._current - 1)) + 1;
      }
      // We always emit an event even if the current page index didn't change, because
      // the size changing means the items inside the page are different
      this._change.next(this._current);
      this._sizeChange.next(this._size);
      this.stateDebouncer.changeDone();
    }
  }

  /**
   * Total items (needed to guess the last page)
   */
  private _totalItems = 0;
  public get totalItems(): number {
    return this._totalItems;
  }
  public set totalItems(total: number) {
    this._totalItems = total;
    // If we have less items than before, we might need to change the current page
    if (this.current > this.last) {
      this.current = this.last;
    }
  }

  /**
   * Last page
   */
  private _last: number;
  public get last(): number {
    if (this._last) {
      return this._last;
    }
    // If the last page isn't known, we compute it from the last item's index
    if (this.size > 0 && this.totalItems) {
      return Math.ceil(this.totalItems / this.size);
    }
    return 1;
  }
  public set last(page: number) {
    this._last = page;
  }

  /**
   * The Observable that lets other classes subscribe to page changes
   */
  private _change = new Subject<number>();
  // We do not want to expose the Subject itself, but the Observable which is read-only
  public get change(): Observable<number> {
    return this._change.asObservable();
  }

  private _sizeChange = new Subject<number>();

  public get sizeChange(): Observable<number> {
    return this._sizeChange.asObservable();
  }

  /**
   * Current page
   */
  private _current = 1;
  public get current(): number {
    return this._current;
  }
  public set current(page: number) {
    if (page !== this._current) {
      this.stateDebouncer.changeStart();
      this._current = page;
      this._change.next(page);
      this.stateDebouncer.changeDone();
    }
  }

  /**
   * Moves to the previous page if it exists
   */
  public previous() {
    if (this.current > 1) {
      this.current--;
    }
  }

  /**
   * Moves to the next page if it exists
   */
  public next() {
    if (this.current < this.last) {
      this.current++;
    }
  }

  /**
   * Index of the first item displayed on the current page, starting at 0
   */
  public get firstItem(): number {
    if (this.size === 0) {
      return 0;
    }
    return (this.current - 1) * this.size;
  }

  /**
   * Index of the last item displayed on the current page, starting at 0
   */
  public get lastItem(): number {
    if (this.size === 0) {
      return this.totalItems - 1;
    }
    let lastInPage = this.current * this.size - 1;
    if (this.totalItems) {
      lastInPage = Math.min(lastInPage, this.totalItems - 1);
    }
    return lastInPage;
  }

  /**
   * Resets the page size to 0
   */
  public resetPageSize(): void {
    this.size = 0;
  }
}
