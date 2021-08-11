import {
  CdsGrid as Grid,
  CdsGridColumn as GridColumn,
  CdsGridRow as GridRow,
  CdsGridCell as GridCell,
  CdsGridFooter as GridFooter,
  CdsGridDetail as GridDetail,
  CdsGridPlaceholder as Placeholder,
} from '@cds/core/grid';
import '@cds/core/grid/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index.js';

export const CdsGrid = createComponent(React, 'cds-grid', Grid, {}, 'CdsGrid');
export const CdsGridColumn = createComponent(React, 'cds-grid-column', GridColumn, {}, 'CdsGridColumn');
export const CdsGridRow = createComponent(React, 'cds-grid-row', GridRow, {}, 'CdsGridRow');
export const CdsGridCell = createComponent(React, 'cds-grid-cell', GridCell, {}, 'CdsGridCell');
export const CdsGridFooter = createComponent(React, 'cds-grid-footer', GridFooter, {}, 'CdsGridFooter');
export const CdsGridDetail = createComponent(
  React,
  'cds-grid-detail',
  GridDetail,
  { onCloseChange: 'closeChange' },
  'CdsGridDetail'
);
export const CdsGridPlaceholder = createComponent(React, 'cds-grid-placeholder', Placeholder, {}, 'CdsGridPlaceholder');

logReactVersion(React);
