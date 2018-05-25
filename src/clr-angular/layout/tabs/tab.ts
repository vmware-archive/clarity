/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ContentChild, Inject } from '@angular/core';

import { IF_ACTIVE_ID, IF_ACTIVE_ID_PROVIDER, IfActiveService } from '../../utils/conditional/if-active.service';

import { AriaService } from './providers/aria.service';
import { TabsService } from './providers/tabs.service';
import { ClrTabContent } from './tab-content';
import { ClrTabLink } from './tab-link.directive';

@Component({
  selector: 'clr-tab',
  template: `
        <ng-content></ng-content>
    `,
  providers: [IF_ACTIVE_ID_PROVIDER, AriaService],
})
export class ClrTab {
  @ContentChild(ClrTabLink) tabLink: ClrTabLink;
  @ContentChild(ClrTabContent) tabContent: ClrTabContent;

  constructor(
    public ifActiveService: IfActiveService,
    @Inject(IF_ACTIVE_ID) public id: number,
    private tabsService: TabsService
  ) {
    tabsService.register(this);
  }

  ngOnDestroy() {
    this.tabsService.unregister(this);
  }

  get active() {
    return this.ifActiveService.current === this.id;
  }
}
