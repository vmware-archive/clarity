/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { checkCircleIcon } from '@cds/core/icon/shapes/check-circle.js';
import { filterIcon } from '@cds/core/icon/shapes/filter.js';
import { exclamationTriangleIcon } from '@cds/core/icon/shapes/exclamation-triangle.js';
import { exclamationCircleIcon } from '@cds/core/icon/shapes/exclamation-circle.js';
import { disconnectIcon } from '@cds/core/icon/shapes/disconnect.js';
import { viewColumnsIcon } from '@cds/core/icon/shapes/view-columns.js';

ClarityIcons.addIcons(
  checkCircleIcon,
  exclamationTriangleIcon,
  exclamationCircleIcon,
  disconnectIcon,
  filterIcon,
  viewColumnsIcon
);

export default {
  title: 'Stories/Grid',
  component: 'cds-grid',
};

export { all } from './docs/all.story.js';
export { asyncData } from './docs/async-data.story.js';
export { borderCell, borderColumn, borderNone, borderStripe } from './docs/border.story.js';
export { cellEditable, csv } from './docs/cell-editable.story.js';
export { columnAlignCenter, columnAlignRight } from './docs/column-align.story.js';
export { columnDraggable } from './docs/column-draggable.story.js';
export { columnFilter } from './docs/column-filter.story.js';
export { columnFixed, columnFixedDynamic, columnMultiFixed } from './docs/column-fixed.story.js';
export { columnMultiFilter } from './docs/column-multi-filter.story.js';
export { columnResize, columnFlexWidth } from './docs/column-resize.story.js';
export { columnSticky } from './docs/column-sticky.story.js';
export { columnVisibility } from './docs/column-visibility.story.js';
export { columnFixedWidth, columnPercentageWidth, columnOverflow } from './docs/column-width.story.js';
export { compact } from './docs/compact.story.js';
export { darkTheme } from './docs/dark-theme.story.js';
export { footer, footerOptional } from './docs/footer.story.js';
export { basic, keyboard, dynamicGrid } from './docs/grid.story.js';
export { kitchenSink } from './docs/kitchen-sink.story.js';
export { pagination } from './docs/pagination.story.js';
export { performance } from './docs/performance.story.js';
export { placeholder, empty } from './docs/placeholder.story.js';
export { rangeSelect, rangeSelectContextMenu } from './docs/range-select.story.js';
export { responsive } from './docs/responsive.story.js';
export { rowAction } from './docs/row-action.story.js';
export { rowBatchAction } from './docs/row-batch-action.story.js';
export { rowDetail, rowDetailExpand } from './docs/row-detail.story.js';
export { rowDraggable } from './docs/row-draggable.story.js';
export { rowFixed } from './docs/row-fixed.story.js';
export { rowGroups } from './docs/row-groups.story.js';
export { rowHeader } from './docs/row-header.story.js';
export { rowHeight } from './docs/row-height.story.js';
export { rowMultiSelect } from './docs/row-multi-select.story.js';
export { rowMultiSort } from './docs/row-multi-sort.story.js';
export { rowSingleSelect } from './docs/row-single-select.story.js';
export { rowSort } from './docs/row-sort.story.js';
export { rowSticky } from './docs/row-sticky.story.js';
export { rowSwappable } from './docs/row-swappable.story.js';
export { rtl } from './docs/rtl.story.js';
export { noScroll, minHeight } from './docs/scroll-height.story.js';
