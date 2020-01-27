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
  component: 'cwc-badge',
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
      cwc-badge {
        ${setStyles({
          '--color': textColor,
          '--background': background,
        })}
    </style>
    <cwc-badge
      .status=${badgeStatus}
      .color=${badgeColor}>
      ${slot}
    </cwc-badge>
  `;
};

export const status = () => {
  return html`
    <h1>Status</h1>
    <cwc-badge status="info">2</cwc-badge>
    <cwc-badge status="success">3</cwc-badge>
    <cwc-badge status="warning">12</cwc-badge>
    <cwc-badge status="danger">15</cwc-badge>
  `;
};

export const color = () => {
  return html`
    <style>
      cwc-badge.app-custom {
        --background: darkblue;
        --color: snow;
      }
    </style>
    <h1>Color</h1>
    <cwc-badge>5</cwc-badge>
    <cwc-badge color="gray">1</cwc-badge>
    <cwc-badge color="purple">1</cwc-badge>
    <cwc-badge color="blue">15</cwc-badge>
    <cwc-badge color="orange">2</cwc-badge>
    <cwc-badge color="light-blue">3</cwc-badge>
    <cwc-badge class='app-custom'>23</cwc-badge>
  `;
};
