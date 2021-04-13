/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UtilsModule } from '../utils/utils.module';
import { CommunityComponent } from './community.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
  {
    path: '',
    component: CommunityComponent,
    data: {
      bodyClass: 'layout-community',
      browserTitle: 'Community',
    },
  },
];

@NgModule({
  declarations: [CommunityComponent],
  imports: [CommonModule, UtilsModule, RouterModule.forChild(route)],
  providers: [],
})
export class CommunityModule {}
