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
  TemplateRef,
  TrackByFunction,
  ViewContainerRef,
  OnDestroy,
} from '@angular/core';

import { Items } from './providers/items';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[clrDgItems][clrDgItemsOf]',
})
export class ClrDatagridItems<T> implements DoCheck, OnDestroy {
  private iterableProxy: NgForOf<T>;
  private _rawItems: T[];
  private differ: IterableDiffer<T> | null = null;
  private subscriptions: Subscription[] = [];

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
    private items: Items,
    private vcr: ViewContainerRef
  ) {
    items.smartenUp();
    this.iterableProxy = new NgForOf<T>(this.vcr, this.template, this.differs);
    this.subscriptions.push(
      items.change.subscribe(newItems => {
        this.iterableProxy.ngForOf = newItems;
        this.iterableProxy.ngDoCheck();
      })
    );
  }

  ngDoCheck() {
    if (!this.differ) {
      this.differ = this.differs.find(this._rawItems).create(this.iterableProxy.ngForTrackBy);
    }
    if (this.differ) {
      const changes = this.differ.diff(this._rawItems);
      if (changes) {
        // TODO: not very efficient right now,
        // but premature optimization is the root of all evil.
        this.items.all = this._rawItems;
      }
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
