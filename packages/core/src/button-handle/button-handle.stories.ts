/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/button-handle/register.js';
import { html } from 'lit';

export default {
  title: 'Stories/Button Handle',
  component: 'cds-button-handle',
  parameters: {
    options: { showPanel: true },
  },
};

export function basic() {
  return html`<cds-button-handle aria-label="move item"></cds-button-handle>`;
}
