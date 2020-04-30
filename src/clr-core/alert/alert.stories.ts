/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@clr/core/alert';
import { ClarityIcons, userIcon } from '@clr/core/icon-shapes';
import { cssGroup, propertiesGroup, setStyles } from '@clr/core/internal';
import { action } from '@storybook/addon-actions';
import { boolean, color as colorKnob, select, text } from '@storybook/addon-knobs';
import { html } from 'lit-html';

ClarityIcons.addIcons(userIcon);

export default {
  title: 'Components/Alert/Stories',
  component: 'cds-alert',
  parameters: {
    options: { showPanel: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=51%3A666',
    },
  },
};

export const API = () => {
  const slot = text('slot', 'This is an alert.', propertiesGroup);
  const alertStatus = select(
    'status',
    { 'none (default info)': undefined, info: 'info', success: 'success', warning: 'warning', danger: 'danger' },
    undefined,
    propertiesGroup
  );
  const closable = boolean('closable', true, propertiesGroup);
  const iconShape = text('iconShape', undefined, propertiesGroup);
  const iconTitle = text('iconTitle', undefined, propertiesGroup);
  const size = select('size', { '(default)': 'default', sm: 'sm' }, undefined, propertiesGroup);

  const alertColor = colorKnob('--color', undefined, cssGroup);
  const background = colorKnob('--background', undefined, cssGroup);
  const borderColor = colorKnob('--border-color', undefined, cssGroup);
  const borderRadius = text('--border-radius', undefined, cssGroup);
  const iconColor = colorKnob('--icon-color', undefined, cssGroup);
  const closeIconColor = colorKnob('--close-icon-color', undefined, cssGroup);
  const closeIconColorHover = colorKnob('--close-icon-color-hover', undefined, cssGroup);

  return html`
    <style>
      cds-alert {
        ${setStyles({
        '--color': alertColor,
        '--background': background,
        '--border-color': borderColor,
        '--border-radius': borderRadius,
        '--icon-color': iconColor,
        '--close-icon-color': closeIconColor,
        '--close-icon-color-hover': closeIconColorHover,
      })}
    </style>
    <cds-alert
      .closable=${closable}
      .iconShape=${iconShape}
      .iconTitle=${iconTitle}
      .size=${size}
      .status=${alertStatus}
      @closeChange=${action('closeChange')}
    >
      <cds-alert-content>
        ${slot}
      </cds-alert-content>
    </cds-alert>
  `;
};

export const status = () => {
  return html`
    <cds-alert status="info">
      <cds-alert-content>
        Foobar
      </cds-alert-content>
    </cds-alert>
    <cds-alert status="success">
      <cds-alert-content>
        Foo
      </cds-alert-content>
    </cds-alert>
    <cds-alert status="warning">
      <cds-alert-content>
        Bar
      </cds-alert-content>
    </cds-alert>
    <cds-alert status="danger">
      <cds-alert-content>
        Baz
      </cds-alert-content>
    </cds-alert>
  `;
};

export const sizes = () => {
  return html`
    <cds-alert>
      <cds-alert-content>
        Foobar
      </cds-alert-content>
    </cds-alert>
    <cds-alert size="sm">
      <cds-alert-content>
        Bar
      </cds-alert-content>
    </cds-alert>
  `;
};

export const customStyles = () => {
  return html`
    <style>
      .alert-branding {
        --background: #f3e6ff;
        --border-color: #4d007a;
        --icon-color: #781da0;
        --close-icon-color: #781da0;
        --close-icon-color-hover: #4d007a;
      }
    </style>
    <cds-alert class="alert-branding" icon-shape="user">
      <cds-alert-content>
        Foobar
      </cds-alert-content>
    </cds-alert>
  `;
};
