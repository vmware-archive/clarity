/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { cssGroup, propertiesGroup, setStyles } from '@clr/core/internal';
import '@clr/core/tag';
import { action } from '@storybook/addon-actions';
import { boolean, color as colorKnob, number, select, text } from '@storybook/addon-knobs';
import { html } from 'lit-html';

export default {
  title: 'Components/Tag/Stories',
  component: 'cds-tag',
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
      cds-tag {
        ${setStyles({
          '--color': textColor,
          '--background': background,
        })}
    </style>
    <cds-tag
      .readonly=${readonly}
      .status=${tagStatus}
      .color=${tagColor}
      @click=${action('click')}>
      ${slot} ${badge && badge !== 0 ? html`<cds-badge>${badge}</cds-badge>` : ''}
    </cds-tag>
  `;
};

export const status = () => {
  return html`
    <cds-tag status="info">Info</cds-tag>
    <cds-tag status="success">Success</cds-tag>
    <cds-tag status="warning">Warning</cds-tag>
    <cds-tag status="danger">Danger</cds-tag>
  `;
};

export const color = () => {
  return html`
    <cds-tag color="gray">Default</cds-tag>
    <cds-tag color="purple">Purple</cds-tag>
    <cds-tag color="blue">Blue</cds-tag>
    <cds-tag color="orange">Orange</cds-tag>
    <cds-tag color="light-blue">Light Blue</cds-tag>
  `;
};

export const badgesStatus = () => {
  return html`
    <cds-tag readonly status="info">Info <cds-badge>1</cds-badge></cds-tag>
    <cds-tag readonly status="success">Success <cds-badge>2</cds-badge></cds-tag>
    <cds-tag readonly status="warning">Warning <cds-badge>3</cds-badge> </cds-tag>
    <cds-tag readonly status="danger">Danger <cds-badge>12</cds-badge></cds-tag>
  `;
};

export const badgesColor = () => {
  return html`
    <cds-tag readonly color="gray">Default <cds-badge>1</cds-badge></cds-tag>
    <cds-tag readonly color="purple">Purple <cds-badge>2</cds-badge></cds-tag>
    <cds-tag readonly color="blue">Blue <cds-badge>3</cds-badge></cds-tag>
    <cds-tag readonly color="orange">Orange <cds-badge>12</cds-badge></cds-tag>
    <cds-tag readonly color="light-blue">Light Blue <cds-badge>15</cds-badge></cds-tag>
  `;
};
