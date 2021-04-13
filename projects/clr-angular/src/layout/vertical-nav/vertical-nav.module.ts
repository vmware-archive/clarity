/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { angleDoubleIcon, angleIcon, ClarityIcons } from '@cds/core/icon';

import { ClrIconModule } from '../../icon/icon.module';
import { ClrConditionalModule } from '../../utils/conditional/conditional.module';
import { ClrFocusOnViewInitModule } from '../../utils/focus/focus-on-view-init/focus-on-view-init.module';

import { ClrVerticalNav } from './vertical-nav';
import { ClrVerticalNavGroup } from './vertical-nav-group';
import { ClrVerticalNavGroupChildren } from './vertical-nav-group-children';
import { ClrVerticalNavIcon } from './vertical-nav-icon';
import { ClrVerticalNavLink } from './vertical-nav-link';

export const CLR_VERTICAL_NAV_DIRECTIVES: Type<any>[] = [
  ClrVerticalNav,
  ClrVerticalNavLink,
  ClrVerticalNavGroup,
  ClrVerticalNavGroupChildren,
  ClrVerticalNavIcon,
];

@NgModule({
  imports: [CommonModule, ClrIconModule, ClrConditionalModule, ClrFocusOnViewInitModule],
  declarations: [CLR_VERTICAL_NAV_DIRECTIVES],
  exports: [CLR_VERTICAL_NAV_DIRECTIVES, ClrConditionalModule, ClrIconModule, ClrFocusOnViewInitModule],
})
export class ClrVerticalNavModule {
  constructor() {
    ClarityIcons.addIcons(angleIcon, angleDoubleIcon);
  }
}
