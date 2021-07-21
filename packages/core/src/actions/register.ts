/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { registerElementSafely } from '@cds/core/internal';
import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { ellipsisVerticalIcon } from '@cds/core/icon/shapes/ellipsis-vertical.js';
import { dragHandleIcon } from '@cds/core/icon/shapes/drag-handle.js';
import { angleIcon } from '@cds/core/icon/shapes/angle.js';
import { detailExpandIcon } from '@cds/core/icon/shapes/detail-expand.js';
import { detailCollapseIcon } from '@cds/core/icon/shapes/detail-collapse.js';
import { timesIcon } from '@cds/core/icon/shapes/times.js';
import { CdsAction } from './action.element.js';
import { CdsActionSort } from './action-sort.element.js';
import { CdsActionExpand } from './action-expand.element.js';
import { CdsActionHandle } from './action-handle.element.js';
import { CdsActionResize } from './action-resize.element.js';
import '@cds/core/icon/register.js';

ClarityIcons.addIcons(angleIcon, dragHandleIcon, ellipsisVerticalIcon, detailExpandIcon, detailCollapseIcon, timesIcon);
ClarityIcons.addAliases(['times', ['close']]);

registerElementSafely('cds-action', CdsAction);
registerElementSafely('cds-action-sort', CdsActionSort);
registerElementSafely('cds-action-expand', CdsActionExpand);
registerElementSafely('cds-action-handle', CdsActionHandle);
registerElementSafely('cds-action-resize', CdsActionResize);

declare global {
  interface HTMLElementTagNameMap {
    'cds-action': CdsAction;
    'cds-action-sort': CdsActionSort;
    'cds-action-expand': CdsActionExpand;
    'cds-action-handle': CdsActionHandle;
    'cds-action-resize': CdsActionResize;
  }
}
