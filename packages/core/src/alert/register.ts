/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@clr/core/button/register.js';
import '@clr/core/icon/register.js';
import '@clr/core/internal-components/close-button/register.js';
import { registerElementSafely } from '@clr/core/internal';
import { CdsAlert, CdsAlertActions, CdsAlertGroup } from '@clr/core/alert';

registerElementSafely('cds-alert', CdsAlert);
registerElementSafely('cds-alert-actions', CdsAlertActions);
registerElementSafely('cds-alert-group', CdsAlertGroup);

declare global {
  interface HTMLElementTagNameMap {
    'cds-alert': CdsAlert;
    'cds-alert-actions': CdsAlertActions;
    'cds-alert-group': CdsAlertGroup;
  }
}
