/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { NgForOf, NgForOfContext } from '@angular/common';
import {
  Directive,
  DoCheck,
  Input,
  IterableDiffer,
  IterableDiffers,
  OnChanges,
  SimpleChange,
  SimpleChanges,
  TemplateRef,
  TrackByFunction,
  ViewContainerRef,
} from '@angular/core';

import { Items } from './providers/items';

@Directive({
  selector: '[clrDgItems][clrDgItemsOf]',
})
export class ClrDatagridItems<T> implements OnChanges, DoCheck {
  private iterableProxy: NgForOf<T>;
  private _rawItems: T[];
  private _differ: IterableDiffer<T> | null = null;

  @Input('clrDgItemsOf')
  public set rawItems(items: T[]) {
    this._rawItems = items ? items : []; // local copy for ngOnChange diffing
  }

  @Input('clrDgItemsTrackBy')
  set trackBy(value: TrackByFunction<T>) {
    this.iterableProxy.ngForTrackBy = value;
  }

  constructor(
    public template: TemplateRef<NgForOfContext<T>>,
    private differs: IterableDiffers,
    private _items: Items,
    private vcr: ViewContainerRef,
    private _differs: IterableDiffers
  ) {
    _items.smartenUp();
    this.iterableProxy = new NgForOf<T>(this.vcr, this.template, this.differs);
    _items.change.subscribe(items => {
      this.iterableProxy.ngForOf = items;
      this.iterableProxy.ngDoCheck();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // TODO: REMOVE WHEN CLARITY MIN-SUPPORT  IS UPGRADED TO >= ANGULAR 6.1
    if ('ngOnChanges' in this.iterableProxy) {
      changes.ngForOf = new SimpleChange(undefined, this._items.displayed, true);
      (<OnChanges>this.iterableProxy).ngOnChanges(changes);
    }
  }

  ngDoCheck() {
    if (!this._differ) {
      this._differ = this._differs.find(this._rawItems).create(this.iterableProxy.ngForTrackBy);
    }
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
