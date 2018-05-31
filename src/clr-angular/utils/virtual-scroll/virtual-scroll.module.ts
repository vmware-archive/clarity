/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { VIRTUAL_SCROLL_DIRECTIVES } from './index';

@NgModule({ imports: [CommonModule], declarations: [VIRTUAL_SCROLL_DIRECTIVES], exports: [VIRTUAL_SCROLL_DIRECTIVES] })
export class ClrVirtualScrollModule {}
