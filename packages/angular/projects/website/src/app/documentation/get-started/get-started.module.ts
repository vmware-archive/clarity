/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';

import { UtilsModule } from '../../utils/utils.module';
import { GetStartedComponent } from './get-started.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
  {
    path: '',
    component: GetStartedComponent,
    data: {
      browserTitle: 'Get Started',
    },
  },
];

@NgModule({
  declarations: [GetStartedComponent],
  imports: [CommonModule, ClarityModule, UtilsModule, RouterModule.forChild(route)],
  providers: [],
})
export class GetStartedModule {}
