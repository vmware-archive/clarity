import { CdsAlert as Alert, CdsAlertActions as AlertActions, CdsAlertGroup as AlertGroup } from '@cds/core/alert';
import '@cds/core/alert/register';
import { createComponent } from '../converter/react-wrapper.js';

export const CdsAlert = createComponent('cds-alert', Alert, { onCloseChange: 'closeChange' });
export const CdsAlertActions = createComponent('cds-alert-actions', AlertActions);
export const CdsAlertGroup = createComponent('cds-alert-group', AlertGroup);
