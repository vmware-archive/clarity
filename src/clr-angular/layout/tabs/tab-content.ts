/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Inject, Input } from '@angular/core';
import { IF_ACTIVE_ID, IfActiveService } from '../../utils/conditional/if-active.service';
import { AriaService } from './providers/aria.service';

let nbTabContentComponents: number = 0;

@Component({
  selector: 'clr-tab-content',
  template: `
      <section [id]="tabContentId" role="tabpanel" class="tab-content" [class.active]="active"
               [hidden]="!active"
               [attr.aria-labelledby]="ariaLabelledBy"
               [attr.aria-expanded]="active"
               [attr.aria-hidden]="!active">
        <ng-content></ng-content>
      </section>
    `,
})
export class ClrTabContent {
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
