/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/icon/register.js';
import '@cds/core/internal-components/visual-checkbox/register.js';
import '@cds/core/progress-circle/register.js';
import '@cds/core/button-expand/register.js';
import {
  ClarityMotion,
  AnimationTreeItemExpandName,
  AnimationTreeItemExpandConfig,
  registerElementSafely,
} from '@cds/core/internal';
import { CdsTree } from './tree.element.js';
import { CdsTreeItem } from './tree-item.element.js';

registerElementSafely('cds-tree', CdsTree);
registerElementSafely('cds-tree-item', CdsTreeItem);

ClarityMotion.add(AnimationTreeItemExpandName, AnimationTreeItemExpandConfig);

declare global {
  interface HTMLElementTagNameMap {
    'cds-tree': CdsTree;
    'cds-tree-item': CdsTreeItem;
  }
}
