/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/button/register.js';
import '@cds/core/icon/register.js';
import '@cds/core/internal-components/close-button/register.js';
import { registerElementSafely } from '@cds/core/internal';
import { CdsAlertActions } from './alert-actions.element.js';
import { CdsAlertGroup } from './alert-group.element.js';
import { CdsAlert } from './alert.element.js';

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
