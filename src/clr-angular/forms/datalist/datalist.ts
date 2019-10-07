/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Input, Directive, AfterContentInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { DatalistIdService } from './providers/datalist-id.service';

@Directive({
  selector: 'datalist',
  host: {
    '[id]': 'datalistId',
  },
})
export class ClrDatalist implements AfterContentInit {
  private subscriptions: Subscription[] = [];
  constructor(private datalistIdService: DatalistIdService) {}
  datalistId: string;

  ngAfterContentInit() {
    this.subscriptions.push(this.datalistIdService.idChange.subscribe(id => (this.datalistId = id)));
  }
  @Input()
  set id(idValue) {
    if (!!idValue) {
      this.datalistId = idValue;
      this.datalistIdService.id = idValue;
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
