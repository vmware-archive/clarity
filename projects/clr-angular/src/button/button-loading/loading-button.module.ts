/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';

import { ClrLoadingButton } from './loading-button';

export const CLR_LOADING_BUTTON_DIRECTIVES: Type<any>[] = [ClrLoadingButton];

@NgModule({
  imports: [CommonModule],
  declarations: [CLR_LOADING_BUTTON_DIRECTIVES],
  exports: [CLR_LOADING_BUTTON_DIRECTIVES],
})
export class ClrLoadingButtonModule {}
