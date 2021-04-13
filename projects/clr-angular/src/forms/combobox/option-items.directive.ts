/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
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

import { OptionSelectionService } from './providers/option-selection.service';
import { Subscription } from 'rxjs';
import { ClrPopoverPositionService } from '../../utils/popover/providers/popover-position.service';

@Directive({
  selector: '[clrOptionItems][clrOptionItemsOf]',
})
export class ClrOptionItems<T> implements DoCheck, OnDestroy {
  private iterableProxy: NgForOf<T>;
  private _rawItems: T[];
  private filteredItems: T[];
  private subscriptions: Subscription[] = [];
  private filter = '';
  private _filterField: string;
  private differ: IterableDiffer<T> | null = null;

  @Input('clrOptionItemsOf')
  public set rawItems(items: T[]) {
    this._rawItems = items ? items : [];
    this.updateItems();
  }

  @Input('clrOptionItemsTrackBy')
  set trackBy(value: TrackByFunction<T>) {
    this.iterableProxy.ngForTrackBy = value;
  }

  @Input('clrOptionItemsField')
  public set field(field: string) {
    this._filterField = field;
    this.optionService.displayField = field;
  }

  constructor(
    public template: TemplateRef<NgForOfContext<T>>,
    private differs: IterableDiffers,
    private optionService: OptionSelectionService<T>,
    private positionService: ClrPopoverPositionService,
    private vcr: ViewContainerRef
  ) {
    this.iterableProxy = new NgForOf<T>(this.vcr, this.template, this.differs);
    this.subscriptions.push(
      optionService.inputChanged.subscribe(filter => {
        this.filter = filter;
        this.updateItems();
      })
    );
  }

  private updateItems() {
    if (!this._rawItems || this.filter === undefined || this.filter === null) {
      return;
    }
    if (this._filterField) {
      this.filteredItems = this._rawItems.filter(item => {
        const objValue = (item as any)[this._filterField];
        return objValue ? objValue.toString().toLowerCase().indexOf(this.filter.toLowerCase().toString()) > -1 : false;
      });
    } else {
      // Filter by all item object values
      this.filteredItems = this._rawItems.filter(item => {
        if (typeof item !== 'object') {
          return item.toString().toLowerCase().indexOf(this.filter.toString().toLowerCase()) > -1;
        }
        const objValues = Object.values(item).filter(value => {
          return value ? value.toString().toLowerCase().indexOf(this.filter.toString().toLowerCase()) > -1 : false;
        });
        return objValues.length > 0;
      });
    }
    this.iterableProxy.ngForOf = this.filteredItems;
  }

  ngDoCheck() {
    if (!this.differ) {
      this.differ = this.differs.find(this.filteredItems).create(this.iterableProxy.ngForTrackBy);
    }
    if (this.differ) {
      const changes = this.differ.diff(this.filteredItems);
      if (changes) {
        this.iterableProxy.ngDoCheck();
        this.positionService.realign();
      }
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
