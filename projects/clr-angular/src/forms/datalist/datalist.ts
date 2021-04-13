/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Input, Directive, AfterContentInit, Optional } from '@angular/core';

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
  constructor(@Optional() private datalistIdService: DatalistIdService) {}
  datalistId: string;

  ngAfterContentInit() {
    if (!this.datalistIdService) {
      return;
    }
    this.subscriptions.push(this.datalistIdService.idChange.subscribe(id => (this.datalistId = id)));
  }
  @Input()
  set id(idValue: string) {
    if (!!idValue && this.datalistIdService) {
      this.datalistId = idValue;
      this.datalistIdService.id = idValue;
    } else if (idValue) {
      this.datalistId = idValue;
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
