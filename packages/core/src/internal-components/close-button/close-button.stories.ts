/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/internal-components/close-button/register.js';
import { angleIcon, ClarityIcons, timesCircleIcon, userIcon } from '@cds/core/icon';
import { getElementStorybookArgTypes, spreadProps, getElementStorybookArgs } from '@cds/core/internal';
import { html } from 'lit-html';
import customElements from '../../../dist/core/custom-elements.json';

ClarityIcons.addIcons(angleIcon, userIcon, timesCircleIcon);

export default {
  title: 'Internal/APIs/Close Button/Stories',
  component: 'cds-internal-close-button',
  argTypes: getElementStorybookArgTypes('cds-internal-close-button', customElements),
  parameters: {
    options: { showPanel: true },
  },
};

export const API = (args: any) => {
  return html`
    <cds-internal-close-button
      ...="${spreadProps(getElementStorybookArgs(args))}"
      aria-label="close"
    ></cds-internal-close-button>
  `;
};

export const closeButton = () => {
  return html` <cds-internal-close-button aria-label="close"></cds-internal-close-button> `;
};

export const custom = () => {
  return html`
    <cds-internal-close-button icon-size="sm" aria-label="ohai" icon-shape="times-circle"></cds-internal-close-button>
  `;
};

export const sizes = () => {
  return html`
    <div><cds-internal-close-button icon-size="48" aria-label="ohai"></cds-internal-close-button> :: numeric size</div>
    <div><cds-internal-close-button icon-size="lg" aria-label="ohai"></cds-internal-close-button> :: t-shirt size</div>
  `;
};
