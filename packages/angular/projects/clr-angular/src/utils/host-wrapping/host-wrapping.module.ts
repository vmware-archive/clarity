/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { NgModule } from '@angular/core';

import { EmptyAnchor } from './empty-anchor';

/**
 * Internal module, please do not export!
 */
@NgModule({ declarations: [EmptyAnchor], exports: [EmptyAnchor], entryComponents: [EmptyAnchor] })
export class ClrHostWrappingModule {}
