import { CdsTree as Tree, CdsTreeItem as TreeItem } from '@cds/core/tree-view';
import '@cds/core/tree-view/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index';

export const CdsTree = createComponent(React, 'cds-tree', Tree);
export const CdsTreeItem = createComponent(React, 'cds-tree-item', TreeItem, {
  onExpandedChange: 'expandedChange',
  onSelectedChange: 'selectedChange',
  onCdsMotionChange: 'cdsMotionChange',
});

/**
 * Setting displayName on the prototype is a workaround for now.
 * See: https://github.com/lit/lit/issues/2154
 * Follow: https://github.com/lit/lit/pull/2155
 */
CdsTree.displayName = 'CdsTree';
CdsTreeItem.displayName = 'CdsTreeItem';

logReactVersion(React);
