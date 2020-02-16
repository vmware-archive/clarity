/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@clr/core/badge';
import { cssGroup, propertiesGroup, setStyles } from '@clr/core/common';
import { color as colorKnob, number, select } from '@storybook/addon-knobs';
import { html } from 'lit-html';

export default {
  title: 'Components|Badge',
  component: 'cds-badge',
  parameters: {
    options: { showPanel: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=51%3A673',
    },
  },
};

export const API = () => {
  const slot = number('slot', 20, undefined, propertiesGroup);
  const badgeStatus = select(
    'status',
    { 'none (default gray)': undefined, info: 'info', success: 'success', warning: 'warning', danger: 'danger' },
    undefined,
    propertiesGroup
  );
  const badgeColor = select(
    'color',
    {
      'gray (default)': undefined,
      gray: 'gray',
      purple: 'purple',
      blue: 'blue',
      orange: 'orange',
      'light-blue': 'light-blue',
    },
    undefined,
    propertiesGroup
  );
  const textColor = colorKnob('--color', undefined, cssGroup);
  const background = colorKnob('--background', undefined, cssGroup);

  return html`
    <style>
      cds-badge {
        ${setStyles({
          '--color': textColor,
          '--background': background,
        })}
    </style>
    <cds-badge
      .status=${badgeStatus}
      .color=${badgeColor}>
      ${slot}
    </cds-badge>
  `;
};

export const status = () => {
  return html`
    <h1>Status</h1>
    <cds-badge status="info">2</cds-badge>
    <cds-badge status="success">3</cds-badge>
    <cds-badge status="warning">12</cds-badge>
    <cds-badge status="danger">15</cds-badge>
  `;
};

export const color = () => {
  return html`
    <style>
      cds-badge.app-custom {
        --background: darkblue;
        --color: snow;
      }
    </style>
    <h1>Color</h1>
    <cds-badge>5</cds-badge>
    <cds-badge color="gray">1</cds-badge>
    <cds-badge color="purple">1</cds-badge>
    <cds-badge color="blue">15</cds-badge>
    <cds-badge color="orange">2</cds-badge>
    <cds-badge color="light-blue">3</cds-badge>
    <cds-badge class='app-custom'>23</cds-badge>
  `;
};
