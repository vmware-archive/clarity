/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, Input, Optional, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { IfErrorService } from './if-error.service';

@Directive({ selector: '[clrIfError]' })
export class ClrIfError {
  constructor(
    @Optional() private service: IfErrorService,
    private template: TemplateRef<any>,
    private container: ViewContainerRef
  ) {
    if (!this.service) {
      throw new Error('clrIfError can only be used within a form control container element like clr-input-container');
    } else {
      this.displayError(false);
    }
  }

  @Input('clrIfError') error: string;

  private subscription: Subscription;
  private displayed: boolean = false;

  ngOnInit() {
    this.subscription = this.service.statusChanges.subscribe(control => {
      // If there is a specific error to track, check it, otherwise check overall validity
      if (this.error) {
        this.displayError(control.hasError(this.error));
      } else {
        this.displayError(control.invalid);
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private displayError(invalid: boolean) {
    if (invalid && !this.displayed) {
      this.container.createEmbeddedView(this.template);
      this.displayed = true;
    } else if (!invalid) {
      this.container.clear();
      this.displayed = false;
    }
  }
}
