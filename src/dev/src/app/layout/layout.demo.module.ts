/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClarityModule } from '@clr/angular';

import { LayoutAdditionalSectionsDemo } from './layout-additional-sections';
import { LayoutAllDemo } from './layout-all';
import { LayoutNoSidenavDemo } from './layout-no-sidenav';
import { LayoutNoSubnavDemo } from './layout-no-subnav';
import { LayoutOnlyHeaderDemo } from './layout-only-header';
import { LayoutSidenavPrimaryDemo } from './layout-sidenav-primary';
import { LayoutSubnavPrimaryDemo } from './layout-subnav-primary';
import { LayoutDemo } from './layout.demo';
import { ROUTING } from './layout.demo.routing';

@NgModule({
  imports: [CommonModule, ClarityModule, ROUTING],
  declarations: [
    LayoutDemo,
    LayoutAllDemo,
    LayoutNoSubnavDemo,
    LayoutNoSidenavDemo,
    LayoutOnlyHeaderDemo,
    LayoutSubnavPrimaryDemo,
    LayoutSidenavPrimaryDemo,
    LayoutAdditionalSectionsDemo,
  ],
  exports: [
    LayoutDemo,
    LayoutAllDemo,
    LayoutNoSubnavDemo,
    LayoutNoSidenavDemo,
    LayoutOnlyHeaderDemo,
    LayoutSubnavPrimaryDemo,
    LayoutSidenavPrimaryDemo,
    LayoutAdditionalSectionsDemo,
  ],
})
export class LayoutDemoModule {}
