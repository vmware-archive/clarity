/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';

import { ClrIconModule } from '../../icon/icon.module';
import { ClrIfExpandModule } from '../../utils/expand/if-expand.module';

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
  imports: [CommonModule, ClrIconModule, ClrIfExpandModule],
  declarations: [CLR_VERTICAL_NAV_DIRECTIVES],
  exports: [CLR_VERTICAL_NAV_DIRECTIVES, ClrIfExpandModule, ClrIconModule],
})
export class ClrVerticalNavModule {}
