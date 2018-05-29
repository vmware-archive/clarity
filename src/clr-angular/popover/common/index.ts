/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Type } from '@angular/core';
import { PopoverDirectiveOld } from './popover-old.directive';

export * from './popover-options.interface';
export * from './popover-old.directive';

export const POPOVER_DIRECTIVES: Type<any>[] = [PopoverDirectiveOld];
