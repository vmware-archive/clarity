import { CdsTree as Tree, CdsTreeItem as TreeItem } from '@cds/core/tree-view';
import '@cds/core/tree-view/register';
import { createComponent } from '../converter/react-wrapper.js';

export const CdsTree = createComponent('cds-tree', Tree);
export const CdsTreeItem = createComponent('cds-tree-item', TreeItem, {
  onExpandedChange: 'expandedChange',
  onSelectedChange: 'selectedChange',
  onCdsMotionChange: 'cdsMotionChange',
});
