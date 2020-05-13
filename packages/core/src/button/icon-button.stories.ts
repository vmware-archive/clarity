/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@clr/core/badge';
import '@clr/core/button';
import { ClrLoadingState } from '@clr/core/button';
import '@clr/core/icon';
import { ClarityIcons, userIcon } from '@clr/core/icon-shapes';
import { cssGroup, propertiesGroup, setStyles } from '@clr/core/internal';
import { action } from '@storybook/addon-actions';
import { boolean, color, select, text } from '@storybook/addon-knobs';
import { html } from 'lit-html';

ClarityIcons.addIcons(userIcon);

export default {
  title: 'Components/Icon Button/Stories',
  component: 'cds-icon-button',
  parameters: {
    options: { showPanel: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=20%3A0',
    },
  },
};

export const API = () => {
  const actionType = select(
    'action',
    { 'solid (default)': 'solid', outline: 'outline', flat: 'flat' },
    undefined,
    propertiesGroup
  );
  const buttonStatus = select(
    'status',
    { 'primary (default)': 'primary', success: 'success', danger: 'danger', inverse: 'inverse' },
    undefined,
    propertiesGroup
  );
  const size = select('size', { 'medium (default)': 'md', sm: 'sm' }, undefined, propertiesGroup);
  const disabled = boolean('disabled', false, propertiesGroup);
  const loadingState = select(
    'loadingState',
    {
      default: ClrLoadingState.DEFAULT,
      error: ClrLoadingState.ERROR,
      loading: ClrLoadingState.LOADING,
      success: ClrLoadingState.SUCCESS,
    },
    ClrLoadingState.DEFAULT,
    propertiesGroup
  );

  const buttonColor = color('--color', undefined, cssGroup);
  const background = color('--background', undefined, cssGroup);
  const boxShadowColor = color('--box-shadow-color', undefined, cssGroup);
  const borderColor = color('--border-color', undefined, cssGroup);
  const borderWidth = text('--border-width', undefined, cssGroup);
  const borderRadius = text('--border-radius', undefined, cssGroup);
  const fontSize = text('--font-size', undefined, cssGroup);
  const padding = text('--padding', undefined, cssGroup);
  const height = text('--height', undefined, cssGroup);

  return html`
    <cds-demo ?inverse=${buttonStatus === 'inverse'} inline-block>
      <style>
        cds-icon-button {
          ${setStyles({
          '--color': buttonColor,
          '--background': background,
          '--box-shadow-color': boxShadowColor,
          '--border-color': borderColor,
          '--border-width': borderWidth,
          '--border-radius': borderRadius,
          '--font-size': fontSize,
          '--padding': padding,
          '--height': height,
        })}
      </style>
      <cds-icon-button
        .action=${actionType}
        .status=${buttonStatus}
        .size=${size}
        .loadingState=${loadingState}
        .disabled=${disabled}
        @click=${action('click')}
      >
        <cds-icon shape="user"></cds-icon>
      </cds-icon-button>
    </cds-demo>
  `;
};

export const actions = () => {
  return html`
    <div cds-layout="horizontal gap:sm">
      <cds-icon-button><cds-icon shape="user"></cds-icon></cds-icon-button>
      <cds-icon-button action="outline"><cds-icon shape="user"></cds-icon></cds-icon-button>
    </div>
  `;
};

export const status = () => {
  return html`
    <div cds-layout="horizontal gap:sm">
      <cds-icon-button><cds-icon shape="user"></cds-icon></cds-icon-button>
      <cds-icon-button status="success"><cds-icon shape="user"></cds-icon></cds-icon-button>
      <cds-icon-button status="danger"><cds-icon shape="user"></cds-icon></cds-icon-button>
      <cds-icon-button status="danger" disabled><cds-icon shape="user"></cds-icon></cds-icon-button>
    </div>
  `;
};

export const statusOutline = () => {
  return html`
    <div cds-layout="horizontal gap:sm">
      <cds-icon-button action="outline"><cds-icon shape="user"></cds-icon></cds-icon-button>
      <cds-icon-button action="outline" status="success"><cds-icon shape="user"></cds-icon></cds-icon-button>
      <cds-icon-button action="outline" status="danger"><cds-icon shape="user"></cds-icon></cds-icon-button>
      <cds-icon-button action="outline" disabled><cds-icon shape="user"></cds-icon></cds-icon-button>
    </div>
  `;
};

export const sizes = () => {
  return html`
    <div cds-layout="vertical gap:md">
      <div cds-layout="horizontal align-items:left gap:sm">
        <div cds-layout="p-r:sm align:vertical-center"><span cds-text="subsection">Default ('md')</span></div>
        <cds-icon-button><cds-icon shape="user"></cds-icon></cds-icon-button>
        <cds-icon-button action="outline"><cds-icon shape="user"></cds-icon></cds-icon-button>
      </div>
      <div cds-layout="horizontal align-items:left gap:sm">
        <div cds-layout="p-r:sm align:vertical-center"><span cds-text="subsection">Compact ('sm')</span></div>
        <cds-icon-button size="sm"><cds-icon shape="user"></cds-icon></cds-icon-button>
        <cds-icon-button action="outline" size="sm"><cds-icon shape="user"></cds-icon></cds-icon-button>
      </div>
    </div>
  `;
};

export const block = () => {
  return html`
    <div cds-layout="vertical gap:sm align:horizontal-stretch">
      <cds-icon-button block><cds-icon shape="user"></cds-icon></cds-icon-button>
      <cds-icon-button block action="outline"><cds-icon shape="user"></cds-icon></cds-icon-button>
      <cds-icon-button block size="sm"><cds-icon shape="user"></cds-icon></cds-icon-button>
      <cds-icon-button block action="outline" size="sm"><cds-icon shape="user"></cds-icon></cds-icon-button>
    </div>
  `;
};

export const loading = () => {
  return html`
    <div cds-layout="horizontal gap:sm align-items:bottom">
      <cds-icon-button loading-state="loading"><cds-icon shape="user"></cds-icon></cds-icon-button>
      <cds-icon-button action="outline" loading-state="loading"><cds-icon shape="user"></cds-icon></cds-icon-button>
      <cds-icon-button size="sm" loading-state="loading"><cds-icon shape="user"></cds-icon></cds-icon-button>
    </div>
  `;
};

export const customStyles = () => {
  return html`
    <style>
      .btn-branding {
        --background: #a447bb;
        --border-color: #74178b;
        --border-width: 0.15rem;
        --border-radius: 0.4rem;
        --padding-vertical: 0.9rem 1rem;
        --font-size: 0.9rem;
        --height: 2.4rem;
      }

      .btn-branding:hover {
        --background: #74178b;
      }

      .btn-branding:active {
        --border-color: #44005b;
        --box-shadow-color: #44005b;
      }
    </style>
    <cds-icon-button class="btn-branding"><cds-icon shape="user"></cds-icon></cds-icon-button>
  `;
};
