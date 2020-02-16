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
  title: 'Components|App Alert',
  component: 'cds-app-alert',
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
    { 'none (default info)': undefined, info: 'info', warning: 'warning', danger: 'danger' },
    undefined,
    propertiesGroup
  );
  const closable = boolean('closable', true, propertiesGroup);
  const iconShape = text('iconShape', undefined, propertiesGroup);
  const iconTitle = text('iconTitle', undefined, propertiesGroup);

  const alertColor = colorKnob('--color', undefined, cssGroup);
  const background = colorKnob('--background', undefined, cssGroup);
  const iconColor = colorKnob('--icon-color', undefined, cssGroup);
  const closeIconColor = colorKnob('--close-icon-color', undefined, cssGroup);
  const closeIconColorHover = colorKnob('--close-icon-color-hover', undefined, cssGroup);

  return html`
    <style>
      cds-app-alert {
        ${setStyles({
          '--color': alertColor,
          '--background': background,
          '--icon-color': iconColor,
          '--close-icon-color': closeIconColor,
          '--close-icon-color-hover': closeIconColorHover,
        })}
    </style>
    <cds-app-alert 
      .closable=${closable}
      .iconShape=${iconShape}
      .iconTitle=${iconTitle}
      .status=${alertStatus}
      @closedChange=${action('closeChanged')}>
        <cds-alert-content>
          ${slot}
        </cds-alert-content>
    </cds-app-alert>
  `;
};

export const status = () => {
  return html`
    <cds-app-alert status="info">
      <cds-alert-content>
        Foobar
      </cds-alert-content>
      <cds-app-alert-actions>
       <cds-button>Fix</cds-button>
    </cds-app-alert-actions>
    </cds-app-alert>
    <cds-app-alert status="warning">
      <cds-alert-content>
        Bar
      </cds-alert-content>
      <cds-app-alert-actions>
       <cds-button>Fix</cds-button>
    </cds-app-alert-actions>
    </cds-app-alert>
    <cds-app-alert status="danger">
      <cds-alert-content>
        Baz
      </cds-alert-content>
      <cds-app-alert-actions>
       <cds-button>Fix</cds-button>
    </cds-app-alert-actions>
    </cds-app-alert>
  `;
};

export const customStyles = () => {
  return html`
    <style>
      .alert-branding {
        --color: #FFEBF5;
        --background: #9B0D54;
        --icon-color: #FFEBF5;
        --close-icon-color: #FFEBF5;
        --close-icon-color-hover: #FBC1DA;
      }
    </style>
    <cds-app-alert class="alert-branding" icon-shape="user">
      <cds-alert-content>
        Foobar
      </cds-alert-content>
    </cds-app-alert>
  `;
};
