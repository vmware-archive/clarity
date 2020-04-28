/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, OnDestroy } from '@angular/core';
import { VerticalNavIconService } from './providers/vertical-nav-icon.service';

@Directive({ selector: '[clrVerticalNavIcon]', host: { class: 'nav-icon' } })
export class ClrVerticalNavIcon implements OnDestroy {
  constructor(private _verticalNavIconService: VerticalNavIconService) {
    this._verticalNavIconService.registerIcon();
  }

  ngOnDestroy() {
    this._verticalNavIconService.unregisterIcon();
  }
}
