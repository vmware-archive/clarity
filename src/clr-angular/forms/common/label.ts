/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, ElementRef, HostBinding, Input, OnDestroy, OnInit, Optional, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';

import { IfErrorService } from './if-error/if-error.service';
import { ControlIdService } from './providers/control-id.service';

@Directive({ selector: 'label' })
export class ClrLabel implements OnInit, OnDestroy {
  constructor(
    @Optional() private controlIdService: ControlIdService,
    @Optional() private ifErrorService: IfErrorService,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  @HostBinding('attr.for')
  @Input('for')
  forAttr: string;

  private subscription: Subscription;

  ngOnInit() {
    // Only add the clr-control-label if it is inside a control container
    if (this.ifErrorService) {
      this.renderer.addClass(this.el.nativeElement, 'clr-control-label');
    }
    if (!this.forAttr && this.controlIdService) {
      this.subscription = this.controlIdService.idChange.subscribe(id => (this.forAttr = id));
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
