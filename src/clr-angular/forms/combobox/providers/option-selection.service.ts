/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { ClrOption } from '../option';

@Injectable()
export class OptionSelectionService<T> {
  private currentValue: T;
  private currentOption: ClrOption<T>;

  private _valueChanged: Subject<T> = new Subject<T>();

  // This observable is for notifying the ClrOption to update its
  // selection by comparing the value
  get valueChanged(): Observable<T> {
    return this._valueChanged.asObservable();
  }

  // NOTE: Currently only handles single selection
  // TODO: Add suport for trackBy and compareFn
  updateSelection(value: T): void {
    // NOTE: Currently we assume that no 2 options will have the same value
    // but Eudes and I discussed that this is a possibility but we will handle
    // this later
    if (this.currentValue && this.currentValue === value) {
      return;
    }
    this.currentValue = value;
    this._valueChanged.next(value);
  }

  private _renderSelectionChanged: Subject<ClrOption<T>> = new Subject<ClrOption<T>>();

  // This observable is to notify the ClrCombobox component to render
  // a new Option on the Input
  get renderSelectionChanged(): Observable<ClrOption<T>> {
    return this._renderSelectionChanged.asObservable();
  }

  renderSelection(option: ClrOption<T>) {
    if (this.currentOption === option) {
      return;
    }
    this.currentOption = option;
    this._renderSelectionChanged.next(option);
  }
}
