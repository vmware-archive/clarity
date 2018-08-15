/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Inject, Input, TemplateRef, ViewChild } from '@angular/core';
import { IF_ACTIVE_ID, IfActiveService } from '../../utils/conditional/if-active.service';
import { AriaService } from './providers/aria.service';

let nbTabContentComponents: number = 0;

@Component({
  selector: 'clr-tab-content',
  template: `
        <ng-content></ng-content>
    `,
  host: {
    '[id]': 'tabContentId',
    '[attr.aria-labelledby]': 'ariaLabelledBy',
    '[attr.aria-hidden]': '!active',
    '[attr.aria-expanded]': 'active',
    '[attr.data-hidden]': '!active',
    role: 'tabpanel',
  },
})
export class ClrTabContent {
  @ViewChild('tabContentProjectedRef') templateRef: TemplateRef<ClrTabContent>;

  constructor(
    public ifActiveService: IfActiveService,
    @Inject(IF_ACTIVE_ID) public id: number,
    private ariaService: AriaService
  ) {
    if (!this.tabContentId) {
      this.tabContentId = 'clr-tab-content-' + nbTabContentComponents++;
    }
  }

  get ariaLabelledBy(): string {
    return this.ariaService.ariaLabelledBy;
  }

  get tabContentId(): string {
    return this.ariaService.ariaControls;
  }

  @Input('id')
  set tabContentId(id: string) {
    this.ariaService.ariaControls = id;
  }

  get active() {
    return this.ifActiveService.current === this.id;
  }
}
