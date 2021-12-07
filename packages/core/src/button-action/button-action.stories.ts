/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/button-action/register.js';
import { html } from 'lit';
import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { timesIcon } from '@cds/core/icon/shapes/times.js';
import { barsIcon } from '@cds/core/icon/shapes/bars.js';
import { filterIcon } from '@cds/core/icon/shapes/filter.js';

ClarityIcons.addIcons(filterIcon, timesIcon, barsIcon);

export default {
  title: 'Stories/Button Action',
  component: 'cds-button-action',
  parameters: {
    options: { showPanel: true },
  },
};

export function all() {
  return html`
    <div cds-layout="vertical gap:lg">
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Button</h2>
        ${buttonAction()}
      </div>
    </div>
  `;
}

export function buttonAction() {
  return html`
    <div cds-layout="horizontal gap:lg">
      <cds-button-action aria-label="open options"></cds-button-action>
      <cds-button-action shape="bars" aria-label="open menu"></cds-button-action>
      <cds-button-action shape="filter" aria-label="filter column"></cds-button-action>
      <cds-button-action shape="close" aria-label="close message"></cds-button-action>
    </div>
  `;
}
