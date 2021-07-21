import '@cds/core/actions/register';
import {
  CdsActionExpand as ActionExpand,
  CdsActionHandle as ActionHandle,
  CdsActionResize as ActionResize,
  CdsActionSort as ActionSort,
  CdsAction as Action,
} from '@cds/core/actions';
import { createComponent } from '../converter/react-wrapper.js';

export const CdsActionExpand = createComponent('cds-action-expand', ActionExpand);
export const CdsActionHandle = createComponent('cds-action-handle', ActionHandle);
export const CdsActionResize = createComponent('cds-action-resize', ActionResize);
export const CdsActionSort = createComponent('cds-action-sort', ActionSort);
export const CdsAction = createComponent('cds-action', Action);
