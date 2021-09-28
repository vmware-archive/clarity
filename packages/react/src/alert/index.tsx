import { CdsAlert as Alert, CdsAlertActions as AlertActions, CdsAlertGroup as AlertGroup } from '@cds/core/alert';
import '@cds/core/alert/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils';

export const CdsAlert = createComponent(React, 'cds-alert', Alert, { onCloseChange: 'closeChange' });
export const CdsAlertActions = createComponent(React, 'cds-alert-actions', AlertActions);
export const CdsAlertGroup = createComponent(React, 'cds-alert-group', AlertGroup);

/**
 * Setting displayName on the prototype is a workaround for now.
 * See: https://github.com/lit/lit/issues/2154
 * Follow: https://github.com/lit/lit/pull/2155
 */
CdsAlert.displayName = 'CdsAlert';
CdsAlertActions.displayName = 'CdsAlertActions';
CdsAlertGroup.displayName = 'CdsAlertGroup';

logReactVersion(React);
