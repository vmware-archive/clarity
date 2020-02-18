/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@clr/core/alert';
import { cssGroup, propertiesGroup, setStyles } from '@clr/core/common';
import { ClarityIcons, userIcon } from '@clr/core/icon-shapes';
import { action } from '@storybook/addon-actions';
import { boolean, color as colorKnob, select, text } from '@storybook/addon-knobs';
import { html } from 'lit-html';

ClarityIcons.addIcons(userIcon);

export default {
  title: 'Components|Alert',
  component: 'cwc-alert',
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
      cwc-alert {
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
    <cwc-alert 
      .closable=${closable}
      .iconShape=${iconShape}
      .iconTitle=${iconTitle}
      .size=${size} 
      .status=${alertStatus}
      @closedChange=${action('closeChanged')}>
        <cwc-alert-content>
          ${slot}
        </cwc-alert-content>
    </cwc-alert>
  `;
};

export const status = () => {
  return html`
    <cwc-alert status="info">
      <cwc-alert-content>
        Foobar
      </cwc-alert-content>
    </cwc-alert>
    <cwc-alert status="success">
      <cwc-alert-content>
        Foo
      </cwc-alert-content>
    </cwc-alert>
    <cwc-alert status="warning">
      <cwc-alert-content>
        Bar
      </cwc-alert-content>
    </cwc-alert>
    <cwc-alert status="danger">
      <cwc-alert-content>
        Baz
      </cwc-alert-content>
    </cwc-alert>
  `;
};

export const sizes = () => {
  return html`
    <cwc-alert>
      <cwc-alert-content>
        Foobar
      </cwc-alert-content>
    </cwc-alert>
    <cwc-alert size='sm'>
      <cwc-alert-content>
        Bar
      </cwc-alert-content>
    </cwc-alert>
  `;
};

export const customStyles = () => {
  return html`
    <style>
      .alert-branding {
        --background: #F3E6FF;
        --border-color: #4D007A;
        --icon-color: #781DA0;
        --close-icon-color: #781DA0;
        --close-icon-color-hover: #4D007A;
      }
    </style>
    <cwc-alert class="alert-branding" icon-shape="user">
      <cwc-alert-content>
        Foobar
      </cwc-alert-content>
    </cwc-alert>
  `;
};
