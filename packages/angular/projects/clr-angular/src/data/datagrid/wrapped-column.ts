/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { AfterViewInit, Component, EmbeddedViewRef, OnDestroy, TemplateRef, ViewChild } from '@angular/core';

import { DynamicWrapper } from '../../utils/host-wrapping/dynamic-wrapper';
import { ifIvyEnabled } from '../../utils/ivy/if-ivy-enabled';

@Component({
  selector: 'dg-wrapped-column',
  template: `
    <ng-template #columnPortal>
      <ng-content></ng-content>
    </ng-template>
  `,
})
export class WrappedColumn implements DynamicWrapper, AfterViewInit, OnDestroy {
  _dynamic = false;

  @ViewChild('columnPortal') templateRef: TemplateRef<void>;
  columnView: EmbeddedViewRef<void>; // the columns projected view (in memory)

  ngAfterViewInit() {
    // Create the cells view in memory, not the DOM.
    this.columnView = this.templateRef.createEmbeddedView(null);
  }

  ngOnDestroy() {
    /**
     * @TODO
     * Check to see if Ivy is enabled and if so call destroy method.
     * This is related to this issues #4692 #4232
     *
     * This check is for backward compatibility for NON-Ivy builds
     */
    ifIvyEnabled(() => {
      this.columnView.destroy();
    });
  }
}
