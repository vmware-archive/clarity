/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { AfterViewInit, Component, TemplateRef, ViewChild, ViewRef, OnDestroy } from '@angular/core';

import { DynamicWrapper } from '../../utils/host-wrapping/dynamic-wrapper';

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

  @ViewChild('columnPortal', { static: false })
  templateRef: TemplateRef<null>;
  columnView: ViewRef; // the columns projected view (in memory)

  ngAfterViewInit() {
    // Create the cells view in memory, not the DOM.
    this.columnView = this.templateRef.createEmbeddedView(null);
  }

  ngOnDestroy() {
    this.columnView.destroy();
  }
}
