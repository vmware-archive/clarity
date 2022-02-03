import { CdsAlert as Alert, CdsAlertActions as AlertActions, CdsAlertGroup as AlertGroup } from '@cds/core/alert';
import '@cds/core/alert/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index.js';

export const CdsAlert = createComponent(React, 'cds-alert', Alert, { onCloseChange: 'closeChange' }, 'CdsAlert');
export const CdsAlertActions = createComponent(React, 'cds-alert-actions', AlertActions, {}, 'CdsAlertActions');
export const CdsAlertGroup = createComponent(React, 'cds-alert-group', AlertGroup, {}, 'CdsAlertGroup');

logReactVersion(React);
