/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/internal-components/close-button/register.js';
import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { angleIcon } from '@cds/core/icon/shapes/angle.js';
import { timesCircleIcon } from '@cds/core/icon/shapes/times-circle.js';
import { userIcon } from '@cds/core/icon/shapes/user.js';
import { spreadProps, getElementStorybookArgs } from '@cds/core/internal';
import { html } from 'lit';

ClarityIcons.addIcons(angleIcon, userIcon, timesCircleIcon);

export default {
  title: 'Internal Stories/Close Button',
  component: 'cds-internal-close-button',
  parameters: {
    options: { showPanel: true },
  },
};

export function API(args: any) {
  return html`
    <cds-internal-close-button
      ...="${spreadProps(getElementStorybookArgs(args))}"
      aria-label="close"
    ></cds-internal-close-button>
  `;
}

/** @website */
export function closeButton() {
  return html` <cds-internal-close-button aria-label="close"></cds-internal-close-button> `;
}

/** @website */
export function custom() {
  return html`
    <cds-internal-close-button icon-size="sm" aria-label="ohai" icon-shape="times-circle"></cds-internal-close-button>
  `;
}

/** @website */
export function sizes() {
  return html`
    <div><cds-internal-close-button icon-size="48" aria-label="ohai"></cds-internal-close-button> :: numeric size</div>
    <div><cds-internal-close-button icon-size="lg" aria-label="ohai"></cds-internal-close-button> :: t-shirt size</div>
  `;
}
