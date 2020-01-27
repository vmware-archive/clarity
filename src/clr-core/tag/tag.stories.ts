/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { cssGroup, propertiesGroup, setStyles } from '@clr/core/common';
import '@clr/core/tag';
import { action } from '@storybook/addon-actions';
import { boolean, color as colorKnob, number, select, text } from '@storybook/addon-knobs';
import { html } from 'lit-html';

export default {
  title: 'Components|Tag',
  component: 'cwc-tag',
  parameters: {
    options: { showPanel: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=51%3A673',
    },
  },
};

export const API = () => {
  const slot = text('slot', 'Hello World', propertiesGroup);
  const readonly = boolean('readonly', false, propertiesGroup);
  const tagColor = select(
    'color',
    { 'none (default gray)': undefined, purple: 'purple', blue: 'blue', orange: 'orange', 'light-blue': 'light-blue' },
    undefined,
    propertiesGroup
  );
  const tagStatus = select(
    'status',
    { 'none (default)': undefined, info: 'info', success: 'success', warning: 'warning', danger: 'danger' },
    undefined,
    propertiesGroup
  );
  const badge = number('badge value', 3, undefined, propertiesGroup);
  const textColor = colorKnob('--color', undefined, cssGroup);
  const background = colorKnob('--background', undefined, cssGroup);

  return html`
    <style>
      cwc-tag {
        ${setStyles({
          '--color': textColor,
          '--background': background,
        })}
    </style>
    <cwc-tag
      .readonly=${readonly}
      .status=${tagStatus}
      .color=${tagColor}
      @click=${action('click')}>
      ${slot} ${badge && badge !== 0 ? html`<cwc-badge>${badge}</cwc-badge>` : ''}
    </cwc-tag>
  `;
};

export const color = () => {
  return html`
    <h2>Status</h2>
    <cwc-tag status="info">Info</cwc-tag>
    <cwc-tag status="success">Success</cwc-tag>
    <cwc-tag status="warning">Warning</cwc-tag>
    <cwc-tag status="danger">Danger</cwc-tag>

    <h2>Color</h2>
    <cwc-tag color="gray">Default</cwc-tag>
    <cwc-tag color="purple">Purple</cwc-tag>
    <cwc-tag color="blue">Blue</cwc-tag>
    <cwc-tag color="orange">Orange</cwc-tag>
    <cwc-tag color="light-blue">Light Blue</cwc-tag>
  `;
};

export const badges = () => {
  return html`
    <h2>Status</h2>
    <cwc-tag readonly status="info">Info <cwc-badge>1</cwc-badge></cwc-tag>
    <cwc-tag readonly status="success">Success <cwc-badge>2</cwc-badge></cwc-tag>
    <cwc-tag readonly status="warning">Warning <cwc-badge>3</cwc-badge> </cwc-tag>
    <cwc-tag readonly status="danger">Danger <cwc-badge>12</cwc-badge></cwc-tag>

    <h2>Color</h2>
    <cwc-tag readonly color="gray">Default <cwc-badge>1</cwc-badge></cwc-tag>
    <cwc-tag readonly color="purple">Purple <cwc-badge>2</cwc-badge></cwc-tag>
    <cwc-tag readonly color="blue">Blue <cwc-badge>3</cwc-badge></cwc-tag>
    <cwc-tag readonly color="orange">Orange <cwc-badge>12</cwc-badge></cwc-tag>
    <cwc-tag readonly color="light-blue">Light Blue <cwc-badge>15</cwc-badge></cwc-tag>
  `;
};
