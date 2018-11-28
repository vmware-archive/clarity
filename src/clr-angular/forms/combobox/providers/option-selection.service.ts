/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject, BehaviorSubject, Subscription } from 'rxjs';

import { ClrOption } from '../option';
import { ClrOptions } from '../options';

@Injectable()
export class OptionSelectionService<T> implements OnDestroy {
  private options: ClrOptions<T>;
  private currentOption: ClrOption<T>;
  private currentSearchValue: string;
  private currentNavigatedOption: ClrOption<T>;
  private _currentNavigatedOptionIndex: number = -1;
  private navigatableOptions: ClrOption<T>[];

  private optionsSubscription: Subscription;

  private _selectionChanged: Subject<ClrOption<T>> = new BehaviorSubject<ClrOption<T>>(undefined);

  // This observable is to notify the ClrCombobox component to render
  // a new Option on the Input
  get selectionChanged(): Observable<ClrOption<T>> {
    return this._selectionChanged.asObservable();
  }

  setSelection(option: ClrOption<T>) {
    if (this.currentOption === option) {
      return;
    }
    this.currentOption = option;
    this._selectionChanged.next(option);

    if (option) {
      // Reset manual user search value in case of selection
      this.setSearchValue(null, false);
    }
  }

  private _searchValueChanged: Subject<string> = new BehaviorSubject<string>(null);

  // This observable is to notify about user search value changes
  get searchValueChanged(): Observable<string> {
    return this._searchValueChanged.asObservable();
  }

  setSearchValue(value: string, resetSelection: boolean = true) {
    if (this.currentSearchValue === value || (this.currentOption && this.currentOption.getDisplayedText()) === value) {
      return;
    }
    this.currentSearchValue = value;
    this._searchValueChanged.next(value);

    // Reset selection objects in case of user entered search values
    if (resetSelection) {
      this.setSelection(undefined);
    }
  }

  private _navigatedOptionChanged: Subject<ClrOption<T>> = new Subject<ClrOption<T>>();

  // This observable is for notifying the ClrOption to update its
  // highlighting by comparing the value
  get navigatedOptionChanged(): Observable<ClrOption<T>> {
    return this._navigatedOptionChanged.asObservable();
  }

  updateNavigatedOption(option: ClrOption<T>): void {
    if (this.currentNavigatedOption === option) {
      return;
    }
    this.currentNavigatedOption = option;
    this._navigatedOptionChanged.next(option);
  }

  set currentNavigatedOptionIndex(value: number) {
    if (this.navigatableOptions) {
      this._currentNavigatedOptionIndex = value;
      this.updateNavigatedOption(
        this._currentNavigatedOptionIndex > -1 ? this.navigatableOptions[this._currentNavigatedOptionIndex] : null
      );
    }
  }

  // Using an index to keep track of currently navigated option
  // Otherwise going up and down requires looping through all options
  get currentNavigatedOptionIndex() {
    return this._currentNavigatedOptionIndex;
  }

  setOptions(options: ClrOptions<T>) {
    this.options = options;

    if (this.optionsSubscription) {
      this.optionsSubscription.unsubscribe();
    }

    this.updateNavigatableOptions();
    this.optionsSubscription = this.options.options.changes.subscribe(() => {
      this.updateNavigatableOptions();
    });
  }

  private _navigatableOptionsChanged: Subject<number> = new BehaviorSubject<number>(0);

  // This observable is to notify about user search value changes
  get navigatableOptionsChanged(): Observable<number> {
    return this._navigatableOptionsChanged.asObservable();
  }
  // This updates the internal navigatable option elements (only do this on changes)
  updateNavigatableOptions() {
    if (this.options) {
      this.navigatableOptions = this.options.options.filter(opt => !opt.hidden);
      this._navigatableOptionsChanged.next(this.navigatableOptions ? this.navigatableOptions.length : 0);
    }
    this.currentNavigatedOptionIndex = -1;
  }

  navigateToNextOption() {
    if (this.navigatableOptions) {
      if (this.currentNavigatedOptionIndex + 1 < this.navigatableOptions.length) {
        this.currentNavigatedOptionIndex++;
      }
    }
  }

  navigateToPreviousOption() {
    if (this.currentNavigatedOptionIndex > 0) {
      this.currentNavigatedOptionIndex--;
    }
  }

  selectActiveOption() {
    if (
      this.navigatableOptions &&
      this.currentNavigatedOptionIndex > -1 &&
      this.currentNavigatedOptionIndex < this.navigatableOptions.length
    ) {
      this.navigatableOptions[this.currentNavigatedOptionIndex].updateSelectionAndCloseMenu();
    }
  }

  ngOnDestroy() {
    if (this.optionsSubscription) {
      this.optionsSubscription.unsubscribe();
    }
  }
}
