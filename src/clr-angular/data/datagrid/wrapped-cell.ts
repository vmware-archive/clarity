/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { AfterViewInit, Component, EmbeddedViewRef, TemplateRef, ViewChild } from '@angular/core';

import { DynamicWrapper } from '../../utils/host-wrapping/dynamic-wrapper';

@Component({
  selector: 'dg-wrapped-cell',
  template: `        
        <ng-template #cellPortal>
            <ng-content></ng-content>
        </ng-template>
    `,
})
export class WrappedCell implements DynamicWrapper, AfterViewInit {
  _dynamic = false;
  @ViewChild('cellPortal') templateRef: TemplateRef<void>;
  cellView: EmbeddedViewRef<void>; // the cells projected view

  ngAfterViewInit() {
    this.cellView = this.templateRef.createEmbeddedView(null);
  }
}
