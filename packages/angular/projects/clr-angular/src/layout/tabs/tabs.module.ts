/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';

import { ClrIconModule } from '../../icon/icon.module';
import { ClrConditionalModule } from '../../utils/conditional/conditional.module';
import { ClrTemplateRefModule } from '../../utils/template-ref/template-ref.module';

import { ActiveOompaLoompa } from './chocolate/active-oompa-loompa';
import { TabsWillyWonka } from './chocolate/tabs-willy-wonka';
import { ClrTab } from './tab';
import { ClrTabContent } from './tab-content';
import { ClrTabLink } from './tab-link.directive';
import { ClrTabOverflowContent } from './tab-overflow-content';
import { ClrTabs } from './tabs';
import { ClrKeyFocusModule } from '../../utils/focus/key-focus/key-focus.module';
import { ClarityIcons, ellipsisHorizontalIcon } from '@cds/core/icon';

export const CLR_TABS_DIRECTIVES: Type<any>[] = [
  ClrTabContent,
  ClrTab,
  ClrTabs,
  ClrTabOverflowContent,
  ClrTabLink,
  TabsWillyWonka,
  ActiveOompaLoompa,
];

@NgModule({
  imports: [CommonModule, ClrConditionalModule, ClrIconModule, ClrTemplateRefModule, ClrKeyFocusModule],
  declarations: [CLR_TABS_DIRECTIVES],
  exports: [CLR_TABS_DIRECTIVES, ClrConditionalModule],
})
export class ClrTabsModule {
  constructor() {
    ClarityIcons.addIcons(ellipsisHorizontalIcon);
  }
}
