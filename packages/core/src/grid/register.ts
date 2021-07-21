/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { registerElementSafely } from '@cds/core/internal';
import '@cds/core/internal-components/split-handle/register.js';
import '@cds/core/button-action/register.js';
import '@cds/core/icon/register.js';

import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { filterIcon } from '@cds/core/icon/shapes/filter.js';
import { viewColumnsIcon } from '@cds/core/icon/shapes/view-columns.js';
import { timesIcon } from '@cds/core/icon/shapes/times.js';
import { pinIcon } from '@cds/core/icon/shapes/pin.js';
import { unpinIcon } from '@cds/core/icon/shapes/unpin.js';

import { CdsGrid } from './grid/grid.element.js';
import { CdsGridRow } from './row/grid-row.element.js';
import { CdsGridCell } from './cell/grid-cell.element.js';
import { CdsGridColumn } from './column/grid-column.element.js';
import { CdsGridDetail } from './detail/grid-detail.element.js';
import { CdsGridFooter } from './footer/grid-footer.element.js';
import { CdsGridPagination } from './pagination/grid-pagination.element.js';
import { CdsGridPlaceholder } from './placeholder/grid-placeholder.element.js';

ClarityIcons.addIcons(filterIcon, viewColumnsIcon, timesIcon, pinIcon, unpinIcon);

registerElementSafely('cds-grid', CdsGrid);
registerElementSafely('cds-grid-row', CdsGridRow);
registerElementSafely('cds-grid-cell', CdsGridCell);
registerElementSafely('cds-grid-column', CdsGridColumn);
registerElementSafely('cds-grid-detail', CdsGridDetail);
registerElementSafely('cds-grid-footer', CdsGridFooter);
registerElementSafely('cds-grid-pagination', CdsGridPagination);
registerElementSafely('cds-grid-placeholder', CdsGridPlaceholder);

declare global {
  interface HTMLElementTagNameMap {
    'cds-grid': CdsGrid;
    'cds-grid-row': CdsGridRow;
    'cds-grid-cell': CdsGridCell;
    'cds-grid-column': CdsGridColumn;
    'cds-grid-detail': CdsGridDetail;
    'cds-grid-footer': CdsGridFooter;
    'cds-grid-pagination': CdsGridPagination;
    'cds-grid-placeholder': CdsGridPlaceholder;
  }
}
