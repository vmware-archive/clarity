/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';

import { MultiSelectComboboxModel } from '../model/multi-select-combobox.model';
import { ComboboxModel } from '../model/combobox.model';

@Injectable()
export class OptionSelectionService<T> {
  public selectionModel: ComboboxModel<T>;
  public loading = false;
  public displayField: string;
  private _currentInput = '';
  get currentInput(): string {
    return this._currentInput;
  }
  set currentInput(input) {
    // clear value in single selection model when input is empty
    if (!input && !this.multiselectable) {
      this.setSelectionValue(null);
    }
    this._currentInput = input;
    this._inputChanged.next(input);
  }
  private _inputChanged: BehaviorSubject<string> = new BehaviorSubject('');
  inputChanged = this._inputChanged.asObservable();

  private _selectionChanged: ReplaySubject<ComboboxModel<T>> = new ReplaySubject(1);

  // This observable is for notifying the ClrOption to update its
  // selection by comparing the value
  get selectionChanged(): Observable<ComboboxModel<T>> {
    return this._selectionChanged.asObservable();
  }

  select(item: T) {
    if (!item || this.selectionModel.containsItem(item)) {
      return;
    }
    this.selectionModel.select(item);
    this._selectionChanged.next(this.selectionModel);
  }

  toggle(item: T) {
    if (!item) {
      return;
    }
    if (this.selectionModel.containsItem(item)) {
      this.selectionModel.unselect(item);
    } else {
      this.selectionModel.select(item);
    }
    this._selectionChanged.next(this.selectionModel);
  }

  unselect(item: T) {
    if (!item || !this.selectionModel.containsItem(item)) {
      return;
    }
    this.selectionModel.unselect(item);
    this._selectionChanged.next(this.selectionModel);
  }

  get multiselectable(): boolean {
    return this.selectionModel instanceof MultiSelectComboboxModel;
  }

  // TODO: Add support for trackBy and compareFn
  setSelectionValue(value: T | T[]): void {
    // NOTE: Currently we assume that no 2 options will have the same value
    // but Eudes and I discussed that this is a possibility but we will handle
    // this later

    // if selection is undefined, or its value hasn't changed, or changing from null <-> undefined, that's not really changing so we return
    if (!this.selectionModel || this.selectionModel.model === value || (!this.selectionModel.model && !value)) {
      return;
    }

    this.selectionModel.model = value;
    this._selectionChanged.next(this.selectionModel);
  }
}
