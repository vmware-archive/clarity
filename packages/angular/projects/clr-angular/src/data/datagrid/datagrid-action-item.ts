/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Directive } from '@angular/core';

/**
 * @remark
 * This directive is used to identify action buttons within the single row action menu and to give
 * them the 'menuitem' aria role.
 */
@Directive({
  selector: '[clrDgActionItem]',
  host: {
    '[class.action-item]': 'true',
    role: 'menuitem',
  },
})
export class ClrDatagridActionItem {}
