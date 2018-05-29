/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[clrPageHeaderActions]' })
export class ClrWizardPageHeaderActions {
  constructor(public pageHeaderActionsTemplateRef: TemplateRef<any>) {}
}
