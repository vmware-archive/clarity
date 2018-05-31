/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, HostBinding, Input, OnDestroy, OnInit, Optional } from '@angular/core';
import { Subscription } from 'rxjs';

import { FormControlService } from './form-control.service';

@Directive({ selector: 'label' })
export class ClrLabel implements OnInit, OnDestroy {
  constructor(@Optional() private formControlService: FormControlService) {}

  @HostBinding('attr.for')
  @Input('for')
  forAttr: string;

  private subscription: Subscription;

  ngOnInit() {
    if (!this.forAttr && this.formControlService) {
      this.subscription = this.formControlService.idChange.subscribe(id => (this.forAttr = id));
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
