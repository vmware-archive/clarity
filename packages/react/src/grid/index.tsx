import { createComponent } from '../converter/react-wrapper.js';
import {
  CdsGrid as Grid,
  CdsGridColumn as GridColumn,
  CdsGridRow as GridRow,
  CdsGridCell as GridCell,
  CdsGridFooter as GridFooter,
  CdsGridDetail as GridDetail,
} from '@cds/core/grid';
import '@cds/core/grid/register';

export const CdsGrid = createComponent('cds-grid', Grid);
export const CdsGridColumn = createComponent('cds-grid-column', GridColumn);
export const CdsGridRow = createComponent('cds-grid-row', GridRow);
export const CdsGridCell = createComponent('cds-grid-cell', GridCell);
export const CdsGridFooter = createComponent('cds-grid-footer', GridFooter);
export const CdsGridDetail = createComponent('cds-grid-detail', GridDetail);
