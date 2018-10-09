/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { ClrCheckboxDeprecated } from './checkbox';

export const CLR_CHECKBOX_DIRECTIVES: Type<any>[] = [ClrCheckboxDeprecated];

@NgModule({ imports: [CommonModule], declarations: [CLR_CHECKBOX_DIRECTIVES], exports: [CLR_CHECKBOX_DIRECTIVES] })
export class ClrCheckboxDeprecatedModule {}
