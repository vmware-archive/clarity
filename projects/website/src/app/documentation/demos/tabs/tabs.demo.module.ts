/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';

import { TabsStaticDemo } from './tabs-static';
import { TabsStaticVerticalDemo } from './tabs-static-vertical';
import { TabsAngularDemo } from './tabs-angular';
import { TabsAngularSimpleDemo } from './tabs-angular-simple';
import { TabsAngularVerticalDemo } from './tabs-angular-vertical';
import { TabsDemo } from './tabs.demo';
import { RouterModule } from '@angular/router';
import { DocWrapperModule } from '../_doc-wrapper/doc-wrapper.module';
import { UtilsModule } from '../../../utils/utils.module';
import { TabsAngularOverflowDemo } from './tabs-angular-overflow';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule.forChild([{ path: '', component: TabsDemo }]),
    DocWrapperModule,
    UtilsModule,
  ],
  declarations: [
    TabsStaticDemo,
    TabsStaticVerticalDemo,
    TabsAngularDemo,
    TabsAngularSimpleDemo,
    TabsAngularVerticalDemo,
    TabsAngularOverflowDemo,
    TabsDemo,
  ],
  exports: [TabsDemo],
})
export class TabsDemoModule {}
