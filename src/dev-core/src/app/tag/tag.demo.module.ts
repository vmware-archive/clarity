/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TagDemoComponent } from './tag.demo';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: TagDemoComponent }])],
  declarations: [TagDemoComponent],
  exports: [TagDemoComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TagDemoModule {}
