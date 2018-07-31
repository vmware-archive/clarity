/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
  Directive,
  DoCheck,
  Input,
  IterableDiffer,
  IterableDiffers,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  TrackByFunction,
} from '@angular/core';
import { NgForOfContext } from '@angular/common';

import { Items } from './providers/items';

@Directive({
  selector: '[clrDgItems][clrDgItemsOf]',
})
export class ClrDatagridItems<T = any> implements OnChanges, DoCheck {
  private _rawItems: T[];
  @Input('clrDgItemsOf')
  public set rawItems(items: T[]) {
    this._rawItems = items ? items : [];
  }
  private _differ: IterableDiffer<T>;

  constructor(
    public template: TemplateRef<NgForOfContext<T>>,
    private _differs: IterableDiffers,
    private _items: Items<T>
  ) {
    _items.smartenUp();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('rawItems' in changes) {
      const currentItems = changes.rawItems.currentValue;
      if (!this._differ && currentItems) {
        this._differ = this._differs.find(currentItems).create(this._items.trackBy);
      }
    }
  }

  @Input('clrDgItemsTrackBy')
  set trackBy(value: TrackByFunction<T>) {
    this._items.trackBy = value;
  }

  ngDoCheck() {
    if (this._differ) {
      const changes = this._differ.diff(this._rawItems);
      if (changes) {
        // TODO: not very efficient right now,
        // but premature optimization is the root of all evil.
        this._items.all = this._rawItems;
      }
    }
  }
}
