import { CdsTree as Tree, CdsTreeItem as TreeItem } from '@cds/core/tree-view';
import '@cds/core/tree-view/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index.js';

export const CdsTree = createComponent(React, 'cds-tree', Tree, {}, 'CdsTree');
export const CdsTreeItem = createComponent(
  React,
  'cds-tree-item',
  TreeItem,
  {
    onExpandedChange: 'expandedChange',
    onSelectedChange: 'selectedChange',
    onCdsMotionChange: 'cdsMotionChange',
  },
  'CdsTreeItem'
);

logReactVersion(React);
