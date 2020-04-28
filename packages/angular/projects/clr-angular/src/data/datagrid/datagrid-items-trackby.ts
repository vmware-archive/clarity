/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, Input, Optional, TrackByFunction } from '@angular/core';

import { Items } from './providers/items';

@Directive({
  selector: '[ngForTrackBy]',
})
export class ClrDatagridItemsTrackBy<T = any> {
  constructor(@Optional() private _items: Items<T>) {}

  @Input('ngForTrackBy')
  set trackBy(value: TrackByFunction<T>) {
    if (this._items) {
      this._items.trackBy = value;
    }
  }
}
