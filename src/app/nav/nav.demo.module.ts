/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClarityModule } from '@clr/angular';

import { HeaderColorsDemo } from './header-colors';
import { HeaderTypesDemo } from './header-types';
import { HeaderTypesOldDemo } from './header-types-old';
import { HeadersDemo } from './headers';
import { NavDemo } from './nav.demo';
import { ROUTING } from './nav.demo.routing';
import { NavsDemo } from './navs';
import { ResponsiveNav1Demo } from './responsive-nav1';
import { ResponsiveNav2Demo } from './responsive-nav2';
import { SidenavDemo } from './sidenav';
import { SubNavDemo } from './sub-nav';

@NgModule({
  imports: [CommonModule, ClarityModule, ROUTING],
  declarations: [
    NavDemo,
    HeadersDemo,
    NavsDemo,
    SidenavDemo,
    HeaderColorsDemo,
    HeaderTypesDemo,
    SubNavDemo,
    HeaderTypesOldDemo,
    ResponsiveNav1Demo,
    ResponsiveNav2Demo,
  ],
  exports: [
    NavDemo,
    HeadersDemo,
    NavsDemo,
    SidenavDemo,
    HeaderColorsDemo,
    HeaderTypesDemo,
    SubNavDemo,
    ResponsiveNav1Demo,
    ResponsiveNav2Demo,
  ],
})
export class NavDemoModule {}
